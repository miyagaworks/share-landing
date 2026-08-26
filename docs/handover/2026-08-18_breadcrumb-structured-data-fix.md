# 2026-08-18 パンくずリスト構造化データ是正 引き継ぎノート

<reliability>
本ノートの `<known-fact>` は全て当セッション中に Super が
curl / git / grep / npm、および公式ドキュメントの WebFetch で直接実測・確認した結果。

CC の報告は全項目を Super が数え直している。
**当セッションでも、CC の報告に虚偽・捏造・承認外の変更は1件もなかった。**

前ノート `2026-08-08_SEO-index-fix-handover.md` の続き。§J-1（効果測定）は本ノート §E で完了。
</reliability>

---

<context>
発端は Google Search Console からのメール
「sns-share.com で新しい パンくずリスト の構造化データ の問題が検出されました」。

- エラー: 項目「item」がありません（「itemListElement」に含まれる）
- 該当URL: `https://sns-share.com/blog/category/all`（該当アイテム1件）
- 初検出日 2026/08/09、前回のクロール 2026/08/08

**修正・本番反映・GSC への検証依頼まで完了。** 併せて前ノートの残課題だった効果測定も実施した。
</context>

---

## A. 原因（前セッションの変更が原因ではない）

<known-fact>
`src/components/ui/Breadcrumb.tsx` は `current: true` の項目を `<Link>` ではなく
`<span>` で描画するため `itemProp="item"` を出力しない。

これは正常な設計。Google 公式ドキュメントの逐語記述:

> "If the breadcrumb is the last item in the breadcrumb trail, `item` is not required.
> If `item` isn't included for the last item, Google uses the URL of the containing page."

出典: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb

**真因は呼び出し側**。`src/app/blog/category/[slug]/page.tsx` が
`useBreadcrumb()` の結果の「後ろに」`categoryBreadcrumb` を追加していた。

```
<Breadcrumb items={[...breadcrumbItems, categoryBreadcrumb]} />
```

これにより `current: true` の項目が最終要素でなくなり、
「途中の要素なのに item がない」状態が生まれてエラーになった。

修正前の本番実測（`/blog/category/all`）:
`itemProp="itemListElement"` = 5 / `itemProp="item"` = 4。
ホーム(✓) → ブログ(✓) → Category(✓) → **All(✗)** → すべて(✓)
</known-fact>

<known-fact>
**前セッション（2026-08-08）の変更が原因ではない。** 根拠3点。

1. `src/components/ui/Breadcrumb.tsx` の変更履歴は
   `1e22546 Initial commit with proper .gitignore` の**1件のみ**。一度も変更していない
2. `src/app/blog/category/[slug]/page.tsx` の変更履歴は
   `22ee3a1 404エラー修正` の**1件のみ**。前セッションでも当セッション前でも触っていない
3. `useBreadcrumb()` の結果に項目を追加しているのは
   `grep` 全件確認の結果 `category/[slug]/page.tsx:111` の**1箇所のみ**

**ただしきっかけは Super の操作。**
前セッションで `/blog/category/all` にインデックス登録をリクエストした（前ノート §B-4 の7番目）。
その結果 2026/08/08 に巡回が入り、初回登録時から潜在していた不具合が 08/09 に検出された。
原因ではないが、掘り起こしたのは Super の操作である。
</known-fact>

---

## B. 併せて解消した3件（調査過程で発見）

<known-fact>
いずれも A と同一箇所に起因する。

1. **404 へのリンク（訪問者への実害）**
   パンくず3番目「Category」が `/blog/category` を指していたが、
   このパスは page.tsx を持たず **HTTP 404**（実測）。訪問者がクリックすると404に飛ばされていた
2. **末尾の重複** — 4番目と5番目が同一URLで名称違い（"All" と "すべて"）
3. **英語表示** — マッピング未定義のセグメントが `Category` / `All` / `Basic` と英語のまま出ていた
</known-fact>

---

## C. 実施内容

<commit-status>
| ハッシュ | 内容 |
|---|---|
| a8f1bfd | fix(seo): パンくずリストの構造化データエラーを修正 |

`main` へ直接コミット・push（2026-08-18 09:17:25）。`origin/main` と一致。
push 前に Super 自身が type-check / lint / build を実行し**全て EXIT=0**（27/27 static pages）を確認。

変更は2ファイルのみ。
- `src/app/blog/category/[slug]/page.tsx` （-14行）
  `categoryBreadcrumb` の追加を廃止し `<Breadcrumb items={breadcrumbItems} />` に変更。
  未使用になったローカル `BreadcrumbItem` interface と `categoryBreadcrumb` 定義を削除。
  表示ロジック（見出し・記事一覧・CTA）は無変更
- `src/hooks/useBreadcrumb.ts` （+13行）
  `breadcrumbMap` にカテゴリー4件を追加（all/basic/guide/technique → 日本語名）。
  中間パス `/blog/category` を `!isLast && currentPath === "/blog/category"` で除外
  （既存の `/blog/digital-namecard` 除外と同方式）

**`src/components/ui/Breadcrumb.tsx` は変更していない。**
全ページ共通部品であり、他25ページで正常に機能しているため。
`git diff --quiet` で `Breadcrumb.tsx` / `sitemap.ts` / `next.config.ts` の無変更を確認済み。
</commit-status>

---

## D. 本番実測（2026-08-18、Super が実施）

<verification>
| URL | HTTP | itemListElement | item | 欠落位置 | 表示 | 404リンク |
|---|---|---|---|---|---|---|
| `/blog/category/all` | 200 | 3 | 2 | `TTF` | ホーム/ブログ/すべて | 0 |
| `/blog/category/basic` | 200 | 3 | 2 | `TTF` | ホーム/ブログ/基礎知識 | 0 |
| `/blog/category/guide` | 200 | 3 | 2 | `TTF` | ホーム/ブログ/活用ガイド | 0 |
| `/blog/category/technique` | 200 | 3 | 2 | `TTF` | ホーム/ブログ/活用テクニック | 0 |

`TTF` = 3要素のうち item を欠くのは**最終要素のみ**。§A の公式仕様が許容する形。
JSON-LD 側も3件・日本語・正URL。`/blog/category` 完全一致は microdata / JSON-LD とも0件。

**全ルート掃引**: sitemap 22件 + カテゴリー4件 = 26ルートを Super が独自に掃引。
パンくずを持つ16ページすべてで「item を欠くのは最終要素のみ」「404パスへのリンクなし」を確認。**違反0件**。

回帰確認: `/blog`（ホーム/ブログ）、`/blog/digital-namecard/what-is`（ホーム/ブログ/デジタル名刺とは）、
`/digital-namecard/about`（ホーム/デジタル名刺/デジタル名刺とは）いずれも従来どおり。
</verification>

---

## E. 効果測定の結果（前ノート §J-1 の完了記録）

<known-fact>
GSC「ページのインデックス登録」画面より。**最終更新日 2026/08/14**。
比較対象は前ノート §E-2 に記録した 2026/08/05 時点（＝全修正前）。

| 区分 | 修正前(08/05) | 現在(08/14) | 変化 |
|---|---|---|---|
| **登録済み** | 19 | **25** | **+6** |
| **未登録** | 47 | **27** | **−20** |

未登録の内訳:

| 理由 | 修正前 | 現在 | 変化 |
|---|---|---|---|
| 検出 - インデックス未登録 | 14 | **1** | **−13** |
| クロール済み - インデックス未登録 | 27 | **18** | **−9** |
| ページにリダイレクトがあります | 3 | 3 | 0 |
| 見つかりませんでした（404） | 2 | 3 | +1 |
| robots.txt によりブロック | 1 | 2 | +1 |

小計検算: 修正前 2+3+1+27+14=47 ✓ / 現在 3+3+2+18+1=27 ✓
既知ページ総数は 66 → 52（−14）。重複URLが Google の既知集合から落ちている。
</known-fact>

<finding type="result">
**「検出 - インデックス未登録」14 → 1（−13）**
前ノート §E-2 のとおり、この14件は**全て末尾スラッシュ付きURL**だった。
ヘッダーから末尾スラッシュを削除した `38b34ac` が発生源を断ち、ほぼ解消した。

**「クロール済み - インデックス未登録」27 → 18（−9）**
前ノート §F のとおり、27件の内訳は
主要コンテンツ7 / www.付き重複11 / 末尾スラッシュ3 / 静的アセット5 / その他1。
9件減り、登録済みが6件増えたことと符合する。
`370a602`（title/description の重複解消）が効いたと判断できる。

**残る18件はほぼ全て「もともと載る必要のないもの」**（www.重複11 + 静的アセット5 + その他）。
中身のあるページは概ね解消したと見てよい。

**前ノート §F の `<unconfirmed>`（正規URL指定がトップを向いていた可能性）**
この動きと整合する。layout.tsx 追加で解消した可能性が高いが、
Google 側の記録との突き合わせまではしていないため断定はしない。
</finding>

<known-fact>
増加した2件はいずれも問題ない。
- 404 が 2 → 3: `/blog/category` が有力。当日まで壊れたパンくずがリンクしていた実体なしパス。
  そのリンクは a8f1bfd で削除済み
- robots.txt ブロックが 1 → 2: `app.sns-share.com` の `/auth/` `/dashboard/` 配下。
  前ノート §A のとおり意図的なブロックで対応不要

**この数値には当セッションの a8f1bfd（08/18）は含まれていない。** 08/14 時点のデータのため。
</known-fact>

---

## F. GSC 側の操作

<known-fact>
「修正を検証」ボタンを2回押した。

1回目（09:18）: **失敗**。「検証プロセスを続行できません / 該当ページが見つかりました。
問題を修正し、もう一度検証してください」。原因は時刻。
コミットが 09:17:25、本番反映の検知が 09:18〜09:19 で、
押した時点ではまだ修正前のページが配信されていた。

2回目: **成功**。画面表示が「検証: 開始　開始日: 2026/08/18」に変わった。

以降は Google 側の処理。再クロールして問題が消えていれば自動で解消扱いになる。
数日〜2週間程度。こちらから追加操作は不要。失敗した場合のみ再度メールが届く。
</known-fact>

---

## G. 見送った判断（記録）

<known-fact>
**`/blog/category` の 404 に転送を追加する件 — 見送り確定。**

CC から承認願いとして上がったが、Super が見送りを判断した。

- 中身のないURLに 404 を返すのは正常な動作であり、不具合ではない
- 問題は「パンくずがそこへリンクしていたこと」で、a8f1bfd で解消済み
- 修正後、このURLを指すサイト内リンクは**0件**（実測）
- 誰もリンクしていないURLのために転送を足すのは根拠のない先回りになる

**再検討不要。**
</known-fact>

---

## H. 反省

<reflection>
- **「反映を確認するまで GSC のボタンを押さないでください」と先に伝えるべきだった。**
  デプロイ完了の監視は仕掛けていたが、その旨をユーザーに伝えていなかったため、
  ユーザーがコミットの約1分後にボタンを押し、1回空振りさせた。
  **本番反映を伴う外部サービス操作では、待機の必要性を操作前に明示する。**

- **プロンプト設計で「削除・転送したページを指す既存リンク」を見落とした（前セッション）。**
  CC が検出して救われた。ページを消す・転送する指示を出すときは、
  「そのページを指すリンク・構造化データ・ナビゲーションはどこにあるか」を必ず設計に含める。

- **部分一致で数えて誤判定した（前セッション）。**
  `grep -c 'digital-namecard</loc>'` がサービス紹介ページを誤って拾った。
  完全一致（`grep -cx`）か全件列挙で確認する。当セッションでは全件列挙を徹底した。

- 共通部品を直したくなる誘惑があったが、
  「他25ページで正常に機能している」を実測で確かめ、呼び出し側だけの修正に留めたのは正解だった。
  共通部品を触っていれば全ページに回帰リスクが及んでいた。
</reflection>

---

## I. 次セッションへの申し送り

<next-action>
1. 本ノートと `2026-08-08_SEO-index-fix-handover.md` を Read
2. `git status` / `git log -5 --oneline` で照合。main・HEAD は `a8f1bfd` 以降の想定
3. **当面やるべき実装作業はない。** 下記の確認のみ
</next-action>

<task priority="1">
### I-1. GSC の検証結果を確認（2026-08-25 以降）

> ✅ **2026-08-26 確認済み。合格。本件は完全にクローズ。**
> Super が Chrome で GSC「拡張 → パンくずリスト」を直接確認（最終更新日 2026/08/24）。
>
> | 項目 | 結果 |
> |---|---|
> | 無効なアイテム | **0**（「重大な問題はありません」） |
> | 「項目 item がありません」 | **✓ 合格** / 該当 **0件** |
> | 有効なアイテム | 4（`/blog` と `/digital-namecard` の2URL × JSON-LD/microdata の2形式） |
>
> 本番も同日に再実測し `/blog/category/all` が ILE=3 / item=2 / パターン `TTF` を維持、
> `/blog/digital-namecard` の 308 → `/blog` も継続を確認。
> **以降このファイルで対応すべき作業はない。** 残るは I-2 と I-3 のみ。

以下は当時の確認手順の記録。

「拡張 → パンくずリスト」で
「項目「item」がありません（「itemListElement」に含まれる）」の状態を見る。

- 該当アイテムが 0 になっていれば完了。何もしなくてよい
- 失敗していれば §D の本番実測をやり直し、Google が何を見ているかを URL 検査の
  「公開URLをテスト」で確認する（ライブ取得で構造化データを表示できる）
</task>

<task priority="2">
### I-2. インデックス数値の再測定（2026-09 上旬）

§E の数値には a8f1bfd（08/18）と `/blog/digital-namecard` の転送が完全には反映されていない。
9月上旬にもう一度「ページのインデックス登録」を見て、以下を確認する。

- 「登録済み」がさらに増えているか（現在25）
- 「クロール済み - インデックス未登録」が18から動くか
  （残りはほぼ www. 重複と静的アセットのため、大きくは動かない見込み）
- 「ページにリダイレクトがあります」に `/blog/digital-namecard` が現れるか
  （現れるのが正常。是正済みの印であって不具合ではない）
</task>

<task priority="3">
### I-3. 低優先の残件（前ノート §J-2 から継続）

- `app.sns-share.com` に sitemap.xml が存在しない（404 実測済み）。別リポジトリ `~/Projects/share` の管轄
- `/blog/category/` 配下は存在しない slug でも 200 を返す。無制限の soft-404 URL 空間
- 同一の `images` ブロックが12ファイルに重複。定数化の余地あり（動作には影響なし）
- `caniuse-lite` が16ヶ月前というビルド警告（`npx update-browserslist-db@latest`）
</task>

<user-confirmed-spec>
- ユーザーは開発知識が浅い。`metadata`・`itemProp`・`canonical` 等の用語をそのまま出さない。
  「検索結果に出る題名」「リンク先の情報」「今どこにいるかを示す道しるべ」と言い換える
- 選択肢を並べない。Super が方針を1つ確定し、ユーザーは「OK / 待って / 変えて」で応答する
- Google への送信操作は実行前に必ず承認を取る。承認後は Super が Chrome で代行してよい
- **本番反映を伴う操作では「いつ押してよいか」を先に明示する**（§H の反省）
</user-confirmed-spec>
