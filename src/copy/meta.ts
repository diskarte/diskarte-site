import type { Locale } from '../i18n/ui';

export const alphaPage = {
  en: {
    meta: { title: 'Design-Partner Alpha — Diskarte', description: 'Where Diskarte actually is, and who the design-partner alpha is for. Honest stage, honest gates.' },
    hero: { eyebrow: 'Alpha', h1: 'An honest invitation', lede: 'Diskarte is early — deliberately, and precisely. Here is exactly where it stands, and who we want to build the next stage with.' },
    stageHead: 'Where the product stands',
    stage: [
      { s: 'The Greenfield Alpha path exists end to end.', d: 'Install → claim → environment evidence → grounded recommendation → adoption → governed execution, implemented and proven against the real stack.', kind: 'impl' },
      { s: 'Production Managed deployment is pending.', d: 'The managed appliance and its infrastructure are written and validated. Deploying them — and licensing a production model backend — are deliberate founder gates, not gaps.', kind: 'plan' },
      { s: 'External design-partner validation has not begun.', d: 'Zero external organizations have used Diskarte. The founder-month exercises were adversarial testing, and we never count them as customer evidence.', kind: 'plan' },
      { s: 'The current focus:', d: 'founder dogfooding, product UX, distribution, and first deployments.', kind: 'plan' },
    ],
    fitHead: 'Who the alpha is for',
    fitLede: 'A small number of design partners, matched deliberately. You are likely a fit if your organization is:',
    fit: [
      'technically sophisticated — an engineering-led team comfortable reading an architecture document',
      'already experimenting with AI inside real workflows, not just chat',
      'feeling the fragmentation: context scattered across tools, authority living in people’s heads, decision history evaporating',
      'willing to give structured, honest feedback — including “this is wrong”',
      'comfortable with an alpha-stage product and founder-direct support',
      'interested in local, managed, hybrid, or constrained deployment shapes',
    ],
    expectHead: 'What working with us looks like',
    expect: 'Direct access to the founder and principal engineer. Deployment matched to your constraints. Your governance, memory, and judgment workflows taken seriously as design input — through the same governed pipeline the product itself uses. No fake availability: if a capability is planned, we will tell you it is planned.',
    formHead: 'Join the alpha list',
    formLede: 'We read every signup personally. When your access is approved, a setup code and a download link arrive by email — the desktop app is claimed with that code.',
  },
  ja: {
    meta: { title: 'デザインパートナー・アルファ — Diskarte', description: 'Diskarteの現在地と、デザインパートナー・アルファの対象。正直なステージ、正直なゲート。' },
    hero: { eyebrow: 'アルファ', h1: '正直な招待状', lede: 'Diskarteはアーリーステージです — 意図的に、そして正確に。現在地と、次の段階を共に作りたい相手を、正確にお伝えします。' },
    stageHead: 'プロダクトの現在地',
    stage: [
      { s: 'グリーンフィールド・アルファの経路は、端から端まで存在します。', d: 'インストール → クレーム → 環境エビデンス → 根拠つき推奨 → 採用 → 統治された実行。実スタックに対して実装・実証済みです。', kind: 'impl' },
      { s: 'マネージドの本番デプロイは未実施です。', d: 'マネージド・アプライアンスとそのインフラは記述・検証済み。デプロイと本番モデルバックエンドのライセンスは、欠落ではなく、意図的な創業者ゲートです。', kind: 'plan' },
      { s: '外部デザインパートナーによる検証は、まだ始まっていません。', d: '外部組織による利用はゼロです。創業者による1ヶ月シミュレーションは敵対的テストであり、顧客エビデンスとして数えることはありません。', kind: 'plan' },
      { s: '現在の焦点：', d: '創業者によるドッグフーディング、プロダクトUX、配布、そして最初のデプロイ。', kind: 'plan' },
    ],
    fitHead: 'アルファの対象',
    fitLede: '少数のデザインパートナーを、意図的にマッチングします。次に当てはまる組織はフィットする可能性が高いです：',
    fit: [
      '技術的に成熟している — アーキテクチャ文書を読めるエンジニアリング主導のチーム',
      'チャットだけでなく、実際のワークフローの中でAIを検証している',
      '断片化を感じている：ツールに散らばる文脈、人の頭の中の権限、消えていく意思決定の履歴',
      '構造化された正直なフィードバック — 「これは間違っている」を含めて — を提供できる',
      'アルファ段階のプロダクトと、創業者直接のサポートに抵抗がない',
      'ローカル、マネージド、ハイブリッド、制約のあるデプロイ形態に関心がある',
    ],
    expectHead: '協働のかたち',
    expect: '創業者兼プリンシパルエンジニアへの直接アクセス。制約に合わせたデプロイ。あなたの組織のガバナンス・記憶・判断のワークフローを、プロダクト自身が使うのと同じ統治されたパイプラインを通じて、設計インプットとして真剣に扱います。偽りの提供可否はありません。計画中の機能は「計画中」とお伝えします。',
    formHead: 'アルファリストに登録',
    formLede: 'すべての登録に直接目を通します。アクセスが承認され次第、セットアップコードとダウンロードリンクをメールでお送りします。デスクトップアプリは、そのコードでクレームします。',
  },
} as const satisfies Record<Locale, unknown>;

export const aboutPage = {
  en: {
    meta: { title: 'About — Diskarte', description: 'The founder and the company: why Diskarte exists, and who is building it.' },
    hero: { eyebrow: 'About', h1: 'Why this exists' },
    story: [
      'I spent years building software inside growing organizations. The technical systems became faster and more capable. The organizational context around them remained fragmented: decisions lost their rationale, authority lived in people’s heads, and every new tool created another partial view.',
      'I saw it as a frontend and product engineer at Mercari, at bitFlyer, and at Tailor — modernizing production systems while they served, across international and distributed engineering environments. The pattern never changed with the tools. Every system knew its tasks. None knew its organization.',
      'When AI made execution nearly free, that missing layer stopped being an annoyance and became the bottleneck of everything: you cannot safely delegate work to machines if authority, memory, and judgment live nowhere.',
      'Diskarte began as an attempt to make that missing layer explicit — a runtime where an organization’s commitments, knowledge, and authority are first-class, governed objects, and where autonomy is earned through governance rather than assumed.',
    ],
    facts: {
      head: 'The company',
      items: [
        ['Founded', 'Diskarte — an independent company building the Organizational Runtime'],
        ['Base', 'Japan — building for organizations everywhere'],
        ['Method', 'Diskarte is built through its own governed loop: the company is the product’s first organization'],
        ['Principle', 'Implemented and planned are never conflated — in the product, the docs, or this website'],
      ],
    },
    name: 'Margaux Flores',
    role: 'Founder & Principal Engineer',
    photoAlt: 'Portrait of Margaux Flores, founder of Diskarte',
  },
  ja: {
    meta: { title: '会社・創業者について — Diskarte', description: '創業者と会社について：Diskarteが存在する理由と、それを作っている人。' },
    hero: { eyebrow: '会社・創業者', h1: 'なぜ、これを作るのか' },
    story: [
      '私は長年、成長する組織の中でソフトウェアを作ってきました。技術システムはどんどん速く、有能になっていきました。しかし、その周囲にある組織的な文脈は断片化したままでした。意思決定は根拠を失い、権限は人の頭の中にあり、新しいツールが増えるたびに、また別の部分的なビューが生まれました。',
      'メルカリで、bitFlyerで、Tailorで — 稼働中の本番システムをモダナイズしながら、国際的な分散エンジニアリング環境で、フロントエンド／プロダクトエンジニアとしてそれを見てきました。ツールが変わっても、パターンは変わりませんでした。どのシステムも自分のタスクは知っている。しかし、組織を知っているシステムはひとつもない。',
      'AIが実行をほぼ無料にしたとき、その「欠けているレイヤー」は不便では済まなくなり、すべてのボトルネックになりました。権限・記憶・判断がどこにも存在しないなら、機械に仕事を安全に委任することはできません。',
      'Diskarteは、その欠けているレイヤーを明示的にする試みとして始まりました — 組織のコミットメント・知識・権限が第一級の統治されたオブジェクトであり、自律性が前提ではなくガバナンスを通じて獲得されるランタイムです。',
    ],
    facts: {
      head: '会社について',
      items: [
        ['会社', 'Diskarte — 組織ランタイムを開発する独立系企業'],
        ['拠点', '日本 — 世界中の組織のために'],
        ['方法', 'Diskarteは自らの統治されたループで作られています。会社自身がプロダクトの最初の組織です'],
        ['原則', '実装済みと計画中を決して混同しない — プロダクトでも、ドキュメントでも、このサイトでも'],
      ],
    },
    name: 'Margaux Flores（マルゴー・フローレス）',
    role: '創業者 & プリンシパルエンジニア',
    photoAlt: 'Diskarte創業者 Margaux Flores のポートレート',
  },
} as const satisfies Record<Locale, unknown>;

export const notesPage = {
  en: {
    meta: { title: 'Notes — Diskarte', description: 'Working papers, architecture notes, and build journal from the making of the Organizational Runtime.' },
    hero: { eyebrow: 'Notes', h1: 'Working in the open, carefully', lede: 'Architecture notes, working papers, and the build journal. Few and honest, rather than many and thin.' },
    empty: 'More notes are on the way.',
    read: 'Read',
    minutes: 'read',
  },
  ja: {
    meta: { title: 'ノート — Diskarte', description: '組織ランタイムの開発から生まれる、ワーキングペーパー、アーキテクチャノート、ビルドジャーナル。' },
    hero: { eyebrow: 'ノート', h1: '慎重に、オープンに', lede: 'アーキテクチャノート、ワーキングペーパー、ビルドジャーナル。薄く多くではなく、少なく正直に。' },
    empty: '新しいノートを準備中です。',
    read: '読む',
    minutes: '',
  },
} as const satisfies Record<Locale, unknown>;

export const privacyPage = {
  en: {
    meta: { title: 'Privacy — Diskarte', description: 'Privacy posture of the Diskarte public website.' },
    h1: 'Privacy',
    draft: 'DRAFT — pending founder and legal review. This page states the site’s current factual posture; it is not yet finalized legal text.',
    body: [
      'This website does not use third-party analytics, advertising trackers, or cookies for tracking.',
      'Your language preference is stored locally in your browser (localStorage) and never transmitted.',
      'The alpha signup form sends the email address you type to a signup service operated by Diskarte itself — no third-party form provider is involved. That address is used solely to contact you about alpha access; it is not sold, shared, or added to a newsletter.',
      'The site is hosted as static files on GitHub Pages; standard server logs may be processed by the hosting provider.',
      'A direct contact address and the hosting region of the signup service will be named here before this page leaves draft.',
    ],
  },
  ja: {
    meta: { title: 'プライバシー — Diskarte', description: 'Diskarte公開ウェブサイトのプライバシー方針。' },
    h1: 'プライバシー',
    draft: 'ドラフト — 創業者およびリーガルレビュー待ち。本ページはサイトの現状を事実として記述するものであり、最終的な法的文書ではありません。',
    body: [
      '本サイトは、サードパーティのアナリティクス、広告トラッカー、トラッキング目的のCookieを使用していません。',
      '言語設定はブラウザのローカルストレージにのみ保存され、送信されることはありません。',
      'アルファ登録フォームに入力されたメールアドレスは、Diskarte自身が運営する登録サービスに送信されます。第三者のフォームサービスは介在しません。このアドレスはアルファアクセスに関するご連絡にのみ使用し、販売・共有・ニュースレターへの追加は行いません。',
      '本サイトはGitHub Pages上の静的ファイルとしてホストされており、標準的なサーバーログはホスティング事業者によって処理される場合があります。',
      '直接のご連絡先と、登録サービスのホスティング地域は、本ページがドラフトを離れる前にここに明記します。',
    ],
  },
} as const satisfies Record<Locale, unknown>;

export const notFoundPage = {
  en: { title: 'Page not found — Diskarte', h1: 'This page does not exist.', p: 'Not even as a planned capability.', home: 'Back to the homepage' },
  ja: { title: 'ページが見つかりません — Diskarte', h1: 'このページは存在しません。', p: '「計画中」ですらありません。', home: 'ホームへ戻る' },
} as const satisfies Record<Locale, unknown>;
