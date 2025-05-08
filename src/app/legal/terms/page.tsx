// src/app/legal/terms/page.tsx
import { PageLayout } from "@/components/layout/PageLayout";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "利用規約 | Share（シェア）デジタル名刺サービス",
  description:
    "Share（シェア）デジタル名刺サービスをご利用いただく際の利用規約です。サービスのご利用前に必ずお読みください。",
  openGraph: {
    title: "利用規約 | Share（シェア）",
    description:
      "Share（シェア）デジタル名刺サービスの利用規約。サービスをご利用いただく前に必ずご確認ください。",
    type: "website",
  },
};

// viewportを独立して定義
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function TermsPage() {
  return (
    <PageLayout
      title="利用規約"
      breadcrumbs={[
        { name: "ホーム", href: "/" },
        { name: "利用規約", href: "/legal/terms" },
      ]}
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. はじめに</h2>
          <p className="text-justify">
            この利用規約（以下「本規約」）は、ビイアルファ株式会社（以下「当社」）が提供するサービス「Share」（以下「本サービス」）の利用条件を定めるものです。本サービスをご利用いただく際には、本規約に同意したものとみなされます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. 定義</h2>
          <p className="text-justify">
            本規約において使用する用語の定義は、次の各号に定めるとおりとします。
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-justify">
            <li>「ユーザー」とは、本サービスを利用する全ての者を指します。</li>
            <li>
              「アカウント」とは、本サービスを利用するためのユーザーID、パスワード等を指します。
            </li>
            <li>
              「コンテンツ」とは、ユーザーが本サービスを通じて投稿、送信、共有するテキスト、画像、動画、SNSリンク等の情報を指します。
            </li>
            <li>
              「知的財産権」とは、著作権、特許権、実用新案権、商標権、意匠権等の知的財産に関する権利を指します。
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. 本規約の適用と変更</h2>
          <p className="text-justify">
            本規約は、本サービスの提供条件及びユーザーと当社との間の権利義務関係を定めることを目的とし、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。
          </p>
          <p className="mt-2 text-justify">
            当社は、必要と判断した場合には、ユーザーに通知することなく本規約を変更することができるものとします。変更後の本規約は、当社が別途定める場合を除いて、本サービス上に表示された時点より効力を生じるものとします。変更後に本サービスを継続して利用する場合、ユーザーは変更後の規約に同意したものとみなされます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. 利用登録</h2>
          <p className="text-justify">
            本サービスの利用を希望する者は、当社の定める方法によってユーザー登録を行うことにより、本サービスを利用することができます。
          </p>
          <p className="mt-2 text-justify">
            本サービスの利用にはクレジットカード決済が必要となります。クレジットカード情報を登録できる方であれば、どなたでも利用可能です。なお、当社は銀行振込やその他の決済方法には対応しておりません。
          </p>
          <p className="mt-2 text-justify">
            当社は、ユーザーが以下の事由に該当すると判断した場合、当該ユーザーの登録を拒否、またはアカウントを削除することがあります。
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-justify">
            <li>登録情報に虚偽、誤記または記載漏れがあった場合</li>
            <li>
              未成年者、成年被後見人、被保佐人または被補助人のいずれかであり、法定代理人、後見人、保佐人または補助人の同意等を得ていなかった場合
            </li>
            <li>
              反社会的勢力等（暴力団、暴力団員、暴力団準構成員、暴力団関係企業、総会屋等、社会運動等標ぼうゴロまたは特殊知能暴力集団等、その他これらに準ずる者を意味します）である、または資金提供その他を通じて反社会的勢力等の維持、運営もしくは経営に協力もしくは関与する等反社会的勢力等との何らかの交流もしくは関与を行っていると当社が判断した場合
            </li>
            <li>過去に本規約に違反したことがある者からの登録である場合</li>
            <li>その他、当社が登録を適当でないと判断した場合</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. アカウント管理</h2>
          <p className="text-justify">
            ユーザーは、自己の責任において、本サービスのアカウントを適切に管理するものとします。ユーザーは、いかなる場合にも、アカウントを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。
          </p>
          <p className="mt-2 text-justify">
            当社は、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなすことができるものとします。
          </p>
          <p className="mt-2 text-justify">
            アカウントの管理不十分、使用上の過誤、第三者の使用等によって生じた損害に関する責任はユーザーが負うものとし、当社は一切の責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. 料金および支払方法</h2>
          <p className="text-justify">
            本サービスの利用にあたり、ユーザーは当社が定める料金を支払うものとします。料金の詳細は、本サービスの料金ページに表示されるとおりとします。
          </p>
          <p className="mt-2 text-justify">
            料金の支払いは、クレジットカード決済のみに対応しています。銀行振込、コンビニ決済、電子マネー、ポイント決済など、その他の支払い方法には対応しておりません。
          </p>
          <p className="mt-2 text-justify">
            当社は、料金を変更する権利を有します。料金を変更する場合、当社は事前に本サービス上で告知するものとし、告知後、ユーザーが本サービスを継続して利用した場合には、変更後の料金に同意したものとみなします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. 無料トライアル</h2>
          <p className="text-justify">
            当社は、ユーザーに対して7日間の無料トライアル期間を提供します。無料トライアル期間中は、本サービスの全ての機能を無料で利用することができます。
          </p>
          <p className="mt-2 text-justify">
            無料トライアル期間が終了した場合、ユーザーには1週間の猶予期間が与えられます。この猶予期間中、ユーザーは支払い手続きを完了することで、サービスを継続して利用することができます。ただし、猶予期間中は公開プロフィールが表示されなくなります。
          </p>
          <p className="mt-2 text-justify">
            猶予期間内に支払い手続きが行われなかった場合、当社はユーザー情報をサーバーから削除する権利を有します。一度削除されたユーザー情報は復元できませんのでご注意ください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. 禁止事項</h2>
          <p className="text-justify">
            ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-justify">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>
              当社、本サービスの他のユーザー、または第三者の知的財産権、肖像権、プライバシー、名誉、その他の権利または利益を侵害する行為
            </li>
            <li>本サービスを通じて得た情報を商業的に利用する行為</li>
            <li>
              本サービスに関し利用しうる権限を許諾なく第三者に譲渡または貸与する行為
            </li>
            <li>
              当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
            </li>
            <li>本サービスの運営を妨害するおそれのある行為</li>
            <li>不正アクセスをし、またはこれを試みる行為</li>
            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>不正な目的を持って本サービスを利用する行為</li>
            <li>
              本サービスの他のユーザーまたは第三者に不利益、損害、不快感を与える行為
            </li>
            <li>面識のない異性との出会いを目的とした行為</li>
            <li>
              当社が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為
            </li>
            <li>
              当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
            </li>
            <li>その他、当社が不適切と判断する行為</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            9. 本サービスの提供の停止等
          </h2>
          <p className="text-justify">
            当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-justify">
            <li>
              本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
            </li>
            <li>
              地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
            </li>
            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
            <li>その他、当社が本サービスの提供が困難と判断した場合</li>
          </ul>
          <p className="mt-2 text-justify">
            当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">10. 著作権</h2>
          <p className="text-justify">
            ユーザーは、自ら著作権等の必要な知的財産権を有するか、または必要な権利者の許諾を得た文章、画像や映像等の情報に関してのみ、本サービスを利用し、投稿または編集することができるものとします。
          </p>
          <p className="mt-2 text-justify">
            ユーザーが本サービスを利用して投稿または編集した文章、画像、映像等の著作権については、当該ユーザーその他既存の権利者に留保されるものとします。ただし、当社は、本サービスを利用して投稿または編集された文章、画像、映像等を利用できるものとし、ユーザーは、この利用に関して著作者人格権を行使しないものとします。
          </p>
          <p className="mt-2 text-justify">
            前項本文の定めるものを除き、本サービスおよび本サービスに関連する一切の情報についての著作権およびその他の知的財産権はすべて当社または当社にその利用を許諾した権利者に帰属し、ユーザーは無断で複製、譲渡、貸与、翻訳、改変、転載、公衆送信（送信可能化を含みます）、伝送、配布、出版、営業使用等をしてはならないものとします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">11. 個人情報の取り扱い</h2>
          <p className="text-justify">
            本サービスの利用によって取得する個人情報については、当社の「プライバシーポリシー」に従い適切に取り扱うものとします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            12. 保証の否認および免責事項
          </h2>
          <p className="text-justify">
            当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます）がないことを明示的にも黙示的にも保証しておりません。
          </p>
          <p className="mt-2 text-justify">
            当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。また、当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            13. サービス内容の変更等
          </h2>
          <p className="text-justify">
            当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">14. 利用規約の変更</h2>
          <p className="text-justify">
            当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を継続した場合には、ユーザーは変更後の規約に同意したものとみなされます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">15. 通知または連絡</h2>
          <p className="text-justify">
            ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから、当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなされます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            16. 権利義務の譲渡の禁止
          </h2>
          <p className="text-justify">
            ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">17. 準拠法・裁判管轄</h2>
          <p className="text-justify">
            本規約の解釈にあたっては、日本法を準拠法とします。
          </p>
          <p className="mt-2 text-justify">
            本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
          </p>
        </section>

        <div className="mt-8 text-right">
          <p className="text-sm text-gray-500">制定日: 2025年3月1日</p>
          <p className="text-sm text-gray-500">最終更新日: 2025年4月1日</p>
        </div>
      </div>
    </PageLayout>
  );
}