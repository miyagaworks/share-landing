# 2026-07-25 LLMO（AI検索最適化）フェーズ0 引き継ぎノート

> ⚠️ **警告: 本ノートの D-2・D-3 は誤りです（2026-07-26 に実測で判明）。**
> - D-3「トップページに h1 が存在しない」→ **存在する**（Hero.tsx:21）。作業不要。
> - D-2「構造化データは /digital-namecard に1件のみ」→ **複数ページに存在していた**。
>
> 誤った原因と正しい実測値は `2026-07-26_LLMO-phase1-handover.md` の §B に記載。
> 本ノートの他の記述（サイト構造・Cloudflare設定・D-1の実測値）は正確であることを
> 2026-07-26 に再確認済み。

<reliability>
本ノートの `<known-fact>` は全て当セッション中に Super が curl / git / gh / Read で
直接実測した結果。推測は `<unconfirmed>` に分離した。
ctx 残量は十分な状態で作成。次セッションはこのノートの `<known-fact>` を再確認なしで
前提にしてよいが、Cloudflare の設定値だけは変更されうるため着手時に1回実測すること。
</reliability>

---

<context>
発端: ユーザーから「~/Desktop/LLMO フォルダを見て、sns-share.com の LLMO 施策を考えてほしい」
という依頼。参照資料は以下3点（Desktop/LLMO 配下）。
- 2026-07-23_LLMO効果的施策まとめ.md（★★★〜★のランク付き施策リスト）
- 2026-07-23_海外LLMO調査レポート.md（Princeton GEO論文・Ahrefs・Vercel等の一次情報）
- 2026-07-23_SMX-Advanced-Boston_文字起こし.md

施策の検討に入る前の技術監査で、**施策を実行しても効果がゼロになる状態**が判明したため、
当セッションはその解消（フェーズ0）に全て充てた。LLMO の施策本体は未着手。
</context>

---

## A. サイト構造（最重要・取り違え注意）

<known-fact>
sns-share.com は **2つの別リポジトリ・別デプロイ**で構成されている。
これを混同すると作業対象を誤る（当セッションで実際に誤った）。

| ドメイン | リポジトリ | ローカル | 内容 | 個人情報 |
|---|---|---|---|---|
| sns-share.com | miyagaworks/share-landing | ~/Projects/share-landing | 宣伝サイト（LP・ブログ・digital-namecard） | なし |
| app.sns-share.com | miyagaworks/share | ~/Projects/share | アプリ本体・管理画面・利用者プロフィール | **あり** |

根拠: ~/Projects/share の lib/brand/config.ts:43 で
`appUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://app.sns-share.com'`

- LLMO の主戦場は **share-landing**（宣伝サイト）
- share-landing の src/app 配下に23ページ存在（blog 6件 / digital-namecard 6件 / company / support / legal / case-studies / free-trial）
- share-landing の next.config.ts の rewrites で /partner, /api/auth, /images/partner, /logo.svg が
  app.sns-share.com へ転送されている
</known-fact>

<known-fact>
利用者の公開プロフィール（app.sns-share.com/[slug]）の掲載項目:
name / nameKana / company / position / email / phone / bio
= 氏名・フリガナ・会社名・役職・メールアドレス・電話番号・自己紹介

app/legal/privacy/page.tsx にAI学習に関する記述はなく、79行目で
「ユーザーの同意なく第三者に個人情報を提供することはありません」と明記。
→ プロフィールをAI学習に開放しない方針を採用した。
</known-fact>

---

## B. 当セッションで完了した作業（フェーズ0）

<status>完了</status>

<known-fact>
### B-1. 発見した問題
Cloudflare が robots.txt を自動生成し、主要AIクローラー9種を全ブロックしていた。

解除前の実測:
```
GPTBot（ChatGPT）を名乗ってアクセス   → HTTP 403
ClaudeBot（Claude）                   → HTTP 403
通常ブラウザ                          → HTTP 200
```
robots.txt での「お願い」ではなく、Cloudflare WAF による物理的な403拒否だった。
Content-Signal: search=yes,ai-train=no,use=reference も出力されていた。

### B-2. 実施内容

| 順 | 作業 | 結果 |
|---|---|---|
| ① | ~/Projects/share に app/robots.ts を新規作成 | コミット 7bb6227 |
| ② | Cloudflare「robots.txt を管理する」→「robots.txt 設定を無効にする」 | 反映済み |
| ③ | 本番実測で検証 | 作業対象の取り違えが発覚 |
| ⑤ | ~/Projects/share-landing に src/app/robots.ts を新規作成 | コミット e0450e1 |
| ⑥ | app/robots.ts の host/sitemap/digital-namecard を修正 | コミット 305dcfd |
| ④ | Cloudflare「AIトレーニングボットをブロックする」→「ブロックしない（クローラーを許可する）」 | 反映済み |

コミット（全て main 直・push 済み・リモート反映を git ls-remote で確認済み）:
- miyagaworks/share : 7bb6227 → 305dcfd
- miyagaworks/share-landing : e0450e1
</known-fact>

<verification>
### 解除後の実測（当セッション最終確認）

```
GPTBot          /digital-namecard → HTTP 200 | トップ → HTTP 200
ClaudeBot       /digital-namecard → HTTP 200 | トップ → HTTP 200
CCBot           /digital-namecard → HTTP 200 | トップ → HTTP 200
Google-Extended /digital-namecard → HTTP 200 | トップ → HTTP 200
```
GPTBot として取得したコンテンツ: 37,692 bytes
h1「Share（シェア）のデジタル名刺」および h2 群が正常に読める状態を確認。

本番 robots.txt（実測）:
- https://sns-share.com/robots.txt → 200 / User-Agent: * に Allow: /、Disallow: /api/ のみ
- https://app.sns-share.com/robots.txt → 200 / AI学習13種はホワイトリスト方式でプロフィール保護
- Cloudflare 生成の痕跡（GPTBot Disallow / Content-Signal）は 0 件
</verification>

---

## C. Cloudflare の現在の設定値

<known-fact>
ダッシュボード → sns-share.com → 概要 → 右カラム「AIボットアクセスを管理」

| 設定項目 | 現在の値 |
|---|---|
| AI トレーニング ボットをブロックする | **ブロックしない（クローラーを許可する）** |
| robots.txt を管理する | **robots.txt 設定を無効にする** |

この2つを元に戻すと robots.txt がCloudflare生成に戻り、AIが再び403で弾かれる。
LLMO を継続する限り、この設定は変更しないこと。
Cloudflare アカウント: Sns.share.com@gmail.c...（画面左上表示）
</known-fact>

---

## D. 次セッションで着手すべきタスク（優先順位順）

<next-action>
### D-1【最優先】サイトマップの修正 — share-landing

理由: 当セッションで robots.txt に `Sitemap: https://sns-share.com/sitemap.xml` を宣言した。
AIを招き入れた直後に壊れた地図を渡している状態のため、これを先に潰す。

実測済みの不具合（public/sitemap.xml、全18URL）:

| # | 問題 | 実測値 |
|---|---|---|
| 1 | 存在しないURLが2件 | `/blog/qr-code-namecard-guide/` → 404<br>`/blog/sns-integration-business-card/` → 404<br>（正しくは `/blog/digital-namecard/qr-code-guide`、`/blog/digital-namecard/sns-integration`。いずれも200） |
| 2 | 17/18 が末尾スラッシュ付きで308転送 | next.config.ts に trailingSlash 設定がない（デフォルト false）ため |
| 3 | lastmod が古い | 18件中17件が 2025-04-23、1件のみ 2026-06-04 |
| 4 | 未登録ページがある | 実ページ23件に対し登録18件。blog記事・case-studies・free-trial 等が未登録 |

推奨方針: public/sitemap.xml を廃し、src/app/sitemap.ts（Next.js Metadata File 方式）へ移行する。
ページ追加時の追従漏れを構造的に防げる。

### D-2 構造化データ（JSON-LD）の実装 — share-landing
> ⚠️ **以下の現状認識は誤り。** 共通部品 Breadcrumb.tsx がパンくずの構造化データを
> 複数ページに出力しており、/blog/digital-namecard/what-is には FAQPage も実装済みだった。
> 実際に0件だったのは トップページ と /support/faq の2箇所のみ。
> **2026-07-26 に この2箇所へ実装済み（コミット 41eaa21）。D-2 は完了。**

- 現状、sns-share.com 全体で `application/ld+json` は /digital-namecard に1件のみ
- トップページは0件
- 実装候補: Organization / SoftwareApplication / FAQPage / BreadcrumbList

### D-3 トップページに h1 を追加 — share-landing
> ⚠️ **以下の実測は誤り。h1 は存在する。**
> `<h1>先進的なデジタル名刺でビジネスに差をつける</h1>`（src/components/sections/Hero.tsx:21）
> 中身が2つの span に分割されているため、タグ直後にテキストがある前提の検索で
> 検出できなかった。**D-3 は作業不要。タスクから削除。**

- 実測: https://sns-share.com/ に h1 が存在せず、h2 のみ（「Shareの主な特徴」等）

### D-4 コンテンツに統計・出典・引用を追加 — share-landing
- Princeton GEO論文（KDD 2024）で最も効果が大きいとされた施策（可視性30〜40%向上）
- 現状 /digital-namecard の外部出典リンクは0件
- 自社の一次データ（登録者数・共有回数・業種別利用率）を公開できれば最強の素材になる

### D-5 デジタルPR / ブランド言及の獲得
- Ahrefs 7.5万ブランド調査で最強の相関（0.664）。バックリンク（0.218）や広告費（0.215）より圧倒的
- 実行に時間がかかるため、D-1〜D-4 と並行で企画を開始する
</next-action>

---

## E. 検討事項（判断保留・次セッションで扱う）

<unconfirmed>
### E-1. layout.tsx の metadata に `nocache` が入っている
実測: 本番トップページの出力に `<meta name="robots" content="index, follow, nocache"/>`
nocache は主にBing系でキャッシュ表示を抑制する指定。
ChatGPT のグラウンディングは Bing のインデックスを使うとされるため、
AI検索可視性に影響する可能性がある。**要調査。未変更のまま。**

### E-2. `Allow: /$` の互換性
app.sns-share.com 側の robots.txt でトップページのみを許可するために `$`（末尾一致）を使用。
RFC 9309 に規定はあるが、非準拠の古いクローラーではリテラル扱いとなり、
トップページが `Disallow: /` 側に落ちる可能性がある。
影響はトップページがAI学習対象外になるだけでプライバシー上の危険はない。

### E-3. share-landing の docs/ に既存のSEO資料がある
seo-strategy.md / seo-concrete.md / seo-measure.md が存在。**当セッションでは未読。**
D-1 着手前に読み、既存方針との整合を確認すべき。

### E-4. リポジトリ残置物
share-landing に旧静的配信時代の out/ と .htaccess が残存。現行のVercel配信では未使用。
</unconfirmed>

---

## F. 当セッションの反省点（同じ失敗を繰り返さないため）

<reflection>
### F-1【重大】作業対象のサイトを取り違えた
ユーザーの入力「cd ~/Projects/share」「https://sns-share.com」から、
両者が対応すると検証せずに仮定した。実際は ~/Projects/share は app.sns-share.com 側だった。

本番HTMLの h2 とローカルの app/page.tsx を照合していれば初手で気づけた。
結果、app 側に不要な設定（/digital-namecard/ の許可、sns-share.com の sitemap 参照）を
実装し、⑥として修正する手戻りが発生した。

**教訓: 本番URLとローカルリポジトリの対応は、必ず実測で照合してから着手する。**

### F-2 実装CCの正しい指摘を誤って却下した
実装CCが「/digital-namecard/ はリポジトリに存在しない」と報告した際、
Super が本番（宣伝サイト側）の実在を根拠に却下した。CCの指摘はapp側の話として正確だった。
「サブエージェントの否定報告は検索漏れの可能性がある」という規律を適用した結果、
逆に正しい報告を否定した。**報告の対象範囲（どのリポジトリの話か）を確認すべきだった。**

### F-3 仕様ミスをCCが発見して修正した
Super が出した仕様 `Allow: /partner` は前方一致となるため、
`partner-tanaka` 等のアカウント名を取得した利用者のプロフィールがAI学習に開放される欠陥があった。
実装CCがアカウント名の規則（`/^[a-z0-9-]{3,20}$/`・予約語チェックなし）を
自ら確認したうえで `/partner$` + `/partner/` に修正した。

### F-4 curl 出力の肥大
404 の HTML 全文を2回そのまま出力し、コンテキストを大量消費した。
**次回以降、curl の結果は `-o /dev/null` / `head -c` / `grep` で必ず絞る。**
</reflection>

---

## G. 参照すべきファイル

<known-fact>
| ファイル | 内容 |
|---|---|
| ~/Desktop/LLMO/2026-07-23_LLMO効果的施策まとめ.md | 施策のランク付きリスト。次の打ち手はここから選ぶ |
| ~/Desktop/LLMO/2026-07-23_海外LLMO調査レポート.md | 各施策の根拠（一次情報のURL付き） |
| ~/Projects/share-landing/src/app/robots.ts | 宣伝サイトのクローラー制御（当セッション作成） |
| ~/Projects/share/app/robots.ts | アプリ側のクローラー制御（当セッション作成） |
| ~/Projects/share-landing/public/sitemap.xml | **D-1 の修正対象** |
| ~/Projects/share-landing/docs/seo-*.md | 既存のSEO方針（未読） |
</known-fact>

---

## H. やらないこと（証拠が否定的・調査レポート準拠）

<known-fact>
| 施策 | 判定根拠 |
|---|---|
| llms.txt の設置 | Ahrefs 13.7万ドメイン実測で設置ファイルの97%が未アクセス。Google公式も不使用を明言 |
| キーワード詰め込み | Princeton論文で効果なし〜逆効果 |
| バックリンクの量的獲得 | 相関0.10〜0.218と弱い。リンクよりメンション |
| 広告費でAI可視性を買う | 相関0.215と弱い |
</known-fact>
