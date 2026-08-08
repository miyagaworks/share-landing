# 2026-08-08 検索インデックス是正 引き継ぎノート

<reliability>
本ノートの `<known-fact>` は全て当セッション中に Super が
curl / git / gh / grep、および Chrome 経由の Google Search Console 画面で直接実測した結果。

CC の報告は全項目を Super が数え直している。
**当セッションでは、CC の報告に虚偽・捏造・承認外の変更は1件もなかった。**
逆に **CC が Super 側の見落としを2回検出した**（§D）。CC の判断が正しかった。

ctx 残量は中程度の状態で作成。`<unconfirmed>` は未検証。
</reliability>

---

<context>
発端は Google Search Console からのメール
「サイト sns-share.com のページがインデックスに登録されない新しい要因 / robots.txt によりブロックされました」。

調査の結果、**メール自体は対応不要**と判明。
ただし調査過程で宣伝サイト側に実害のある問題を3件発見し、すべて修正・本番反映まで完了した。

対象プロパティは `sc-domain:sns-share.com`（ドメイン全体）で、
**app.sns-share.com も含まれる**点に注意。リポジトリは2つに分かれている。

| ホスト | リポジトリ | 当セッションでの変更 |
|---|---|---|
| sns-share.com（宣伝サイト） | `~/Projects/share-landing` | あり（3コミット） |
| app.sns-share.com（アプリ） | `~/Projects/share` | なし |
</context>

---

## A. メールの結論（対応不要）

<known-fact>
ブロックされた1ページは `https://app.sns-share.com/auth/signup`（会員登録画面）。
GSC の URL 検査画面で実物を確認済み。初検出日 2026/08/05、前回クロール 2026/08/03。

`~/Projects/share/app/robots.ts:20` の
`PRIVATE_PATHS = ['/dashboard/', '/auth/', '/api/']` による意図的なブロック。

会員登録画面は検索流入の受け皿にならず（受け皿は sns-share.com/free-trial）、
集客上の損失はない。**対応不要と判断し、何も変更していない。**
</known-fact>

---

## B. 完了した作業（3コミット・PR2件・すべて本番反映済み）

<commit-status>
| ハッシュ | 内容 | 規模 |
|---|---|---|
| 370a602 | metadata未設定の8ページに固有のtitle/descriptionを設定 | 8ファイル新規 / +263 |
| 38b34ac | ヘッダーの内部リンクから末尾スラッシュを削除 | 1ファイル / +4 -4 |
| 68af988 | og:image未設定の12ページにOGP画像を追加 | 12ファイル / +96 -0 |

- PR #1（370a602 + 38b34ac）: `state: MERGED` / `mergedAt: 2026-08-08T04:59:00Z` / mergeCommit `38b34ace012f5f34a234bb6151ce0ff7ae29f10b`
- PR #2（68af988）: `state: MERGED` / `mergedAt: 2026-08-08T06:16:16Z` / mergeCommit `68af9886d1955e5c4f830e3dea70b3368f34986e`

いずれも `--rebase --delete-branch` でマージ。作業ツリーはクリーン、ローカルは main。
push 前に Super 自身が型チェック・リント・ビルドを実行し、全て EXIT=0 を確認している。
</commit-status>

### B-1. 8ページの title/description 未設定（PR #1）

<known-fact>
本番HTMLの実測で、7ページがルート layout の title をそのまま継承して同一題名だった。

> デジタル名刺サービス「Share」| 複数SNSを一つに、QRコードで簡単共有

該当: `/blog`、`/blog/digital-namecard/{what-is,qr-code-guide,sns-integration}`、
`/digital-namecard/ultimate-guide`、`/support/contact`、`/support/faq`、`/blog/category/[slug]`

**原因**: 対象8ファイルはすべて `"use client"` のクライアントコンポーネントで、
`page.tsx` に `export const metadata` を書いても機能しない構造だった。

**対応**: 各ディレクトリに `children` を返すだけの `layout.tsx` を新規作成し、そこで metadata を定義。
既存 `page.tsx` は一切変更していない。
</known-fact>

<known-fact>
CC が2つの罠を回避している（Super の指示にはなかった判断）。

1. **viewport を書かなかった** — ルート layout の `maximumScale: 5` が
   shallow merge で失われるため。手本にした business-benefits は viewport を持つが追随しなかった
2. **og:image 消失を事前申告** — 子で `openGraph` を定義すると親の `images` ごと置き換わる。
   Super が本番実測で裏を取り、`images` 明示をデグレ防止として指示した
</known-fact>

### B-2. ヘッダーの末尾スラッシュ（PR #1）

<known-fact>
`src/components/layout/Header.tsx` の4箇所（96/102/204/211行）が
`/digital-namecard/`・`/blog/` を指しており、重複URLの発生源だった。
ヘッダーは全ページに出るため影響が大きい。末尾スラッシュを削除。

本番実測: 末尾スラッシュ付きリンク **0件**（修正前4件）。
</known-fact>

### B-3. og:image 未設定の12ページ（PR #2）

<known-fact>
**原因**: B-1 と同じ shallow merge。`page.tsx` で `openGraph` を定義したが `images` を持たないため、
ルート layout の共通画像が失われていた。

**対応**: 12ページの `openGraph` にルートと同値の `images` を追加（追加96行のみ、削除ゼロ）。

本番実測（反映後）: **27ページ全部に og:image あり / なし 0件**。
固有画像を持つ3ページ（`/digital-namecard`・`/digital-namecard/how-to-create`・`/partner`）は維持。
</known-fact>

### B-4. Google Search Console 側の操作

<known-fact>
Chrome 経由で Super が実行。すべて画面で結果を確認済み。

**インデックス登録リクエスト 7件**（各件「インデックス登録をリクエスト済み」表示を確認）
1. `/digital-namecard/ultimate-guide`
2. `/digital-namecard/business-benefits`
3. `/blog/digital-namecard/qr-code-guide`
4. `/free-trial`
5. `/blog/digital-namecard/sns-integration`
6. `/blog/category/basic`
7. `/blog/category/all`

**サイトマップ再送信**（`https://sns-share.com/sitemap.xml`）
「サイトマップを送信しました」表示を確認。送信日が **2026/06/04 → 2026/08/08** に更新。
</known-fact>

---

## C. 本番の最終実測値（2026-08-08 マージ後）

<verification>
検査対象27ページ（sitemap 22件 + `/blog/digital-namecard` + `/blog/category/{all,basic,guide,technique}`）

| 項目 | 結果 |
|---|---|
| title | 27件すべてユニーク（重複0） |
| description | 27件すべてユニーク（重複0） |
| og:image | 未設定 **0件** |
| canonical | 全ページ自己参照（不一致0件） |
| ヘッダー末尾スラッシュ | 0件 |
| `<title>` タグ数 | 全ページ1個（誤判定なし） |

ビルド・lint・`tsc --noEmit` すべて EXIT=0。
</verification>

---

## D. Super の見落としを CC が検出した2件（記録）

<finding type="process">
1. **og:image 消失の事前申告**（PR #1 時）
   Super は「business-benefits の書式に合わせよ」とだけ指示した。
   CC はその指示に従うと og:image が消えることを実測で示し、承認願いとして報告。
   Super が本番実測で裏を取り、images 追加を指示した。指示どおりに進めていればデグレしていた。

2. **`/blog/digital-namecard` の追加検出**（PR #2 時）
   Super が渡した対象リスト11件は sitemap.xml を起点にした実測値だった。
   CC はビルド出力の全ルートをHTML走査する構造的な方法で洗い出し、
   **sitemap に載っていない `/blog/digital-namecard` を1件追加検出**。
   本番で HTTP 200・og:image なし・sitemap 未登録を Super が確認済み。

**教訓**: 網羅調査で sitemap を起点にすると、sitemap 自体の欠落を原理的に検出できない。
「構造で探す」指示を出したことが機能した。
</finding>

---

## E. 残課題（次セッションの本題）

<task priority="1">
### E-1. sitemap.ts に5ページを追加

> ⚠️ **2026-08-08 追記: 本項の結論は誤りです。実行しないでください。**
> 同日の次セッションで対象5ページの実体を確認した結果、
> サイトマップへの追加は不適切と判明した。**訂正内容は §H を参照。**
> 以下の原文は、当時の判断の記録として削除せず残す。

`src/app/sitemap.ts` に以下が未登録。いずれも実在ページ（本番 HTTP 200 で確認済み）。

| パス | 状態 |
|---|---|
| `/blog/digital-namecard` | 当セッションで発見。title「デジタル名刺に関する記事一覧 \| Share」 |
| `/blog/category/all` | 当セッションで og:image・title 設定済み |
| `/blog/category/basic` | 同上 |
| `/blog/category/guide` | 同上 |
| `/blog/category/technique` | 同上 |

追加後、GSC でサイトマップを再送信する（Super が Chrome で代行可能）。
</task>

<task priority="2">
### E-2. Search Console の効果測定（来週以降）

<known-fact>
2026-08-08 時点の GSC 数値（最終更新日 2026/08/05、つまり**修正前の状態**）:

| 区分 | 件数 | 内訳 |
|---|---|---|
| 未登録 | 47 | 下記5理由 |
| 登録済み | 19 | — |
| ページにリダイレクトがあります | 3 | www/http/末尾スラッシュ。**すべて正常動作** |
| 見つかりませんでした（404） | 2 | `/index.html`、古いデプロイのCSS。実害小 |
| robots.txt によりブロック | 1 | `app.sns-share.com/auth/signup`。**意図通り** |
| クロール済み - インデックス未登録 | 27 | §F 参照 |
| 検出 - インデックス未登録 | 14 | **全て末尾スラッシュ付きURL**。ヘッダー修正で発生源は解消済み |
</known-fact>

再巡回は数日〜2週間かかる。**当セッション翌日〜数日では数値は動かない。**
「未登録47」「クロール済み - インデックス未登録27」が減っているかで効果を判定する。
</task>

<task priority="3">
### E-3. 低優先の残件

- `app.sns-share.com` に sitemap.xml が存在しない（404 実測済み）。別リポジトリ `~/Projects/share` の管轄
- 同一の `images` ブロックが12ファイルに重複。定数化の余地あり（動作には影響なし）
- `caniuse-lite` が16ヶ月前というビルド警告（`npx update-browserslist-db@latest`）。今回と無関係
- GSC のサイトマップ画面で「検出されたページ数 18」と表示。実際の sitemap は22件。
  最終読み込みが 2026/07/22 のため。再送信済みなので次回読み込みで解消見込み
</task>

---

## F. 参考: 「クロール済み - インデックス未登録」27件の内訳

<known-fact>
GSC 画面から取得した全27件（2026-08-08 時点＝修正前）。

| 分類 | 件数 | 例 |
|---|---|---|
| 宣伝サイトの主要コンテンツ | 7 | `/free-trial`、`/digital-namecard/ultimate-guide`、`/blog/category/basic` 等 |
| www. 付き重複 | 11 | `www.sns-share.com/support/help` 等 |
| 末尾スラッシュ付き重複 | 3 | `/legal/privacy/` 等 |
| 静的アセット | 5 | `_next/static/css/*.css`、`/api/manifest`、`/pwa/favicon.ico` |
| その他 | 1 | `/support/help` |

主要コンテンツ7件のうち5件が §B-1 の title 重複ページだった。
</known-fact>

<unconfirmed>
`/blog/digital-namecard/sns-integration` の URL 検査画面に、
Google が 2026/07/24 に取得した時点の記録として
「ユーザーが指定した正規 URL: https://sns-share.com/」（＝トップページ）と表示されていた。

自己参照でなくトップを指していれば、Google は「トップの複製」と判断して登録しない。
これが「クロール済み - インデックス未登録」の直接原因だった可能性がある。

ただし **2026-08-08 の実測では27ページ全部が自己参照**。
当セッションの layout.tsx 追加で解消した可能性が高いが、
Google 側の記録が古いため断定できない。次回巡回で確定する。
</unconfirmed>

---

## G. 次セッションの初動

<next-action>
1. 本ノートを Read
2. `git status` / `git log -5 --oneline` で状態を照合
   - main・HEAD は `68af988`
   - **本ノート自体が未コミットで残っている**（`?? docs/handover/2026-08-08_SEO-index-fix-handover.md`）。
     Super がユーザー承認を取ってコミットする。過去の慣習に倣い `docs:` プレフィックス
3. `src/app/sitemap.ts` を Read して現在の登録内容と記述形式を把握
4. E-1（sitemap への5ページ追加）の実装CC向けプロンプトを設計してユーザーに提示
5. 完了後、Super が Chrome で GSC のサイトマップ再送信を代行（ユーザー承認を取ってから）
</next-action>

<user-confirmed-spec>
- ユーザーは開発知識が浅い。`metadata`・`canonical`・`og:image` 等の用語をそのまま出さない。
  「検索結果に出る題名」「こちらが本物という指定」「SNS共有画像」と言い換える
- 選択肢を並べない。Super が方針を1つ確定し、ユーザーは「OK / 待って / 変えて」で応答する
- Google への送信操作（インデックス登録リクエスト・サイトマップ送信）は
  実行前に必ず承認を取る。承認後は Super が Chrome で代行してよい
</user-confirmed-spec>

<reflection>
- GSC のドリルダウンは行クリックで遷移するが、`get_page_text` が DOM 更新前の内容を返すことがある。
  スクリーンショットで確認するのが確実
- Vercel の preview デプロイは Deployment Protection（SSO）で curl から読めない。
  preview 検証は諦め、マージ後に本番実測する運用にした
- URL 検査の「インデックス登録をリクエスト」は処理に1〜2分かかり、
  完了ダイアログが自動で閉じることがある。その場合は再度クリックして
  「✓ インデックス登録をリクエスト済み 再リクエスト」表示で確認する（重複送信は無害）
</reflection>

---

## H. §E-1 の訂正（2026-08-08 次セッションで追記）

<finding type="correction">
**§E-1「sitemap.ts に5ページを追加」は撤回する。5ページとも追加しない。**

§E-1 は「本番で HTTP 200 が返る＝実在＝サイトマップの登録漏れ」という判断で書かれていた。
**ページの中身を開いて確認していなかったことが誤りの原因。**
</finding>

<known-fact>
撤回の根拠4点。すべて当セッションで Read / grep により実測。

1. **`/blog/digital-namecard` は中身が空**
   `src/app/blog/digital-namecard/page.tsx:34-36` の記事グリッドが
   `{/* ここに記事リストを表示 */}` のまま空欄。h1 見出ししか出力されない。
   加えて `grep -rn 'href="/blog/digital-namecard"' src/` が **0件** — サイト内リンクを持たない孤立ページ。

2. **`/blog/category/all` は `/blog` の完全重複**
   `src/app/blog/page.tsx:14,25,36` と
   `src/app/blog/category/[slug]/page.tsx:35-69` が同じ3記事を直書きしている。
   `basic` / `guide` / `technique` は各1記事のみ表示。記事本体は既に sitemap 登録済み。

3. **`src/app/sitemap.ts:41-44` に除外理由が明記されていた**
   「記事本体と内容が重複する一覧ページ」「記事リストが未実装の空ページ」と当時から文書化済み。
   §E-1 を書いた際、このコメントを読んでいなかった。

4. **Google は既に中身を見て見送っている**
   §F のとおり `/blog/category/{all,basic}` は「クロール済み - インデックス未登録」に含まれる。
   sitemap への追加で判定は変わらない。
</known-fact>

<task priority="1">
### H-1. 差し替え後の対応（当セッションの本題）

`/blog/digital-namecard`（空・被リンクゼロ）を `/blog` へ恒久転送する。
記事が3本しかない現状で一覧ページを3つ持つ意味がないため、`/blog` に集約する。

`next.config.ts` は `rewrites()` のみを持ち `redirects()` は未定義（全37行）。新規追加が必要。

`src/app/sitemap.ts` は変更しない（除外判断は現在も妥当）。
</task>

<finding type="process">
**教訓**: 「実在するのに未登録」を登録漏れと即断しない。
除外が意図的でないかを、まず**対象ファイル自身のコメント**で確認する。
§D で「sitemap 起点の調査は sitemap の欠落を検出できない」と教訓を書いたが、
その逆（sitemap の除外が正しい場合がある）を検討していなかった。

前セッションで `/blog/digital-namecard` に SNS 共有画像を設定した作業（68af988 の1ファイル分）は、
空ページに対する作業だったため無駄になった。転送を入れれば実害はない。
</finding>

<unconfirmed>
`/blog/category/` 配下は存在しない slug でも HTTP 200 で
「このカテゴリーには記事がありません。」を返す（`page.tsx:191-203`）。
無制限の soft-404 URL 空間になっている。当セッションでは対応しない。低優先の残件。
</unconfirmed>

---

## I. H-1 の完了記録（2026-08-08）

<commit-status>
| ハッシュ | 内容 |
|---|---|
| 658b390 | 本ノートを記録 |
| a530b67 | §E-1 を撤回し §H を追記 |
| a9e654c | 空ページ `/blog/digital-namecard` を削除し `/blog` へ恒久転送 |
| 563ebc3 | 転送先 URL を指すパンくずリンクと JSON-LD を除去 + sitemap コメント訂正 |

`main` へ直接コミット（PR なし。ノート系の従来慣習に合わせた）。
`origin/main` と一致、作業ツリーはクリーン。`68af988..563ebc3` の変更は下記5ファイルのみ。

- `next.config.ts`（`redirects()` を新規追加）
- `src/app/blog/digital-namecard/page.tsx`（削除 -39行）
- `src/app/sitemap.ts`（コメントのみ。**PAGES 定義は無変更**）
- `src/hooks/useBreadcrumb.ts`
- `docs/handover/2026-08-08_SEO-index-fix-handover.md`
</commit-status>

<verification>
本番 `sns-share.com` で Super が実測（dev 実測は CC が別途実施済み）。

| 項目 | 結果 |
|---|---|
| `/blog/digital-namecard` | **308** → `location: /blog` |
| `/blog/digital-namecard/{what-is,qr-code-guide,sns-integration}` | 3本とも **200**（転送されない） |
| 記事HTML内の `href="/blog/digital-namecard"` | 3本とも **0件** |
| 記事HTML内の `"/blog/digital-namecard"` 単体参照 | 3本とも **0件** |
| BreadcrumbList JSON-LD | `ホーム → ブログ → 記事名`。転送 URL を含まない |
| `sitemap.xml` | 22件。`https://sns-share.com/blog/digital-namecard` は完全一致 **0件** |
| `/blog/digital-namecard/`（末尾スラッシュ） | 2ホップで `/blog` に到達し 200 |

**sitemap.xml の中身は今回変わっていない**（22件のまま）。GSC への再送信は不要と判断し、実施していない。
</verification>

<finding type="process">
**Super の見落としを CC が検出（通算3件目）**

Super が設計したプロンプトは「転送設定の追加」と「空ページの削除」の2点のみで、
**削除したページを指すサイト内リンクが残る点を設計に含めていなかった。**
CC がこれを検出し、さらに `src/hooks/useBreadcrumb.ts:83` の
`else if (segment === "digital-namecard")` フォールバックにより、
マッピング表からエントリを消すだけではクラムが復活する構造まで突き止めた。
Super が当該行の実在を確認済み。指示どおり2点だけ実施していれば、
クローラーが記事を巡回するたびに転送 URL を踏む状態が残っていた。

**教訓**: ページを削除・転送する指示を出すときは、
「そのページを指す既存のリンク・構造化データ・ナビゲーションはどこにあるか」を
必ず設計に含める。削除と転送だけでは片手落ち。
</finding>

<finding type="process">
**Super 自身の計測ミス（記録）**

サイトマップ検証で `grep -c 'digital-namecard</loc>'` を使い、
サービス紹介ページ `https://sns-share.com/digital-namecard` を誤って拾って
「転送 URL が1件混入」と誤判定した。`<loc>` を全件列挙して目視し 0件と確定。
**部分一致で数えない。完全一致（`grep -cx`）か全件列挙で確認する。**
</finding>

<known-fact>
**末尾スラッシュの1ホップ化は見送り（判断確定）**

`redirects()` に `source: '/blog/digital-namecard/'` を追加しても、
Next.js が正規化を先に行うため一度も一致せず 2ホップのままだった（CC が実測）。
死んだ設定は残さず撤去済み（`next.config.ts` は a9e654c の状態に復帰、差分ゼロを確認）。

1ホップ化には `skipTrailingSlashRedirect: true` が必要だが、
これは**サイト全ルートの URL 正規化を変える全体設定**。
最終到達先は `/blog` で正しく、誰もリンクしていない URL のため、
影響範囲と釣り合わないと判断して見送った。**再検討不要。**
</known-fact>

---

## J. 次セッションへの申し送り

<next-action>
1. 本ノートを Read（特に §H の訂正と §I の完了記録）
2. `git status` / `git log -5 --oneline` で照合。main・HEAD は `563ebc3` の想定
3. **当面やるべき実装作業はない。** 残るのは下記の効果測定と低優先の残件のみ
</next-action>

<task priority="1">
### J-1. Search Console の効果測定（2026-08-15 以降）

再巡回に数日〜2週間かかるため、**2026-08-15 より前に見ても数値は動かない。**

`sc-domain:sns-share.com` の「ページ」レポートで、§E-2 に記録した
2026-08-05 時点（＝全修正前）の数値と比較する。

| 区分 | 修正前 | 期待する変化 |
|---|---|---|
| 未登録 | 47 | 減少 |
| クロール済み - インデックス未登録 | 27 | 減少（特に主要コンテンツ7件） |
| 検出 - インデックス未登録 | 14 | 減少（全て末尾スラッシュ付き。発生源は解消済み） |
| 登録済み | 19 | 増加 |

`/blog/digital-namecard` は 308 になったため「ページにリダイレクトがあります」へ
移動するのが正常。これは是正済みの印であって不具合ではない。
</task>

<unconfirmed>
§F の `<unconfirmed>`（正規 URL 指定がトップを向いていた可能性）は
J-1 の効果測定で確定する。27件が実際に減れば、layout.tsx 追加が効いたと判断できる。
</unconfirmed>

<task priority="3">
### J-2. 低優先の残件（§E-3 から継続）

- `app.sns-share.com` に sitemap.xml が存在しない（404 実測済み）。別リポジトリ `~/Projects/share` の管轄
- `/blog/category/` 配下は存在しない slug でも 200 を返す（§H の `<unconfirmed>` 参照）。
  無制限の soft-404 URL 空間
- 同一の `images` ブロックが12ファイルに重複。定数化の余地あり（動作には影響なし）
- `caniuse-lite` が16ヶ月前というビルド警告（`npx update-browserslist-db@latest`）
- 前セッションで `/blog/category/{all,basic}` にインデックス登録をリクエストしたが、
  §H のとおり両ページは薄い重複ページ。Google は登録しない見込み。害はないため放置でよい
</task>
