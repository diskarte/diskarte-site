export type Locale = 'en' | 'ja';

export const ui = {
  en: {
    skip: 'Skip to content',
    nav: { runtime: 'Runtime', architecture: 'Architecture', notes: 'Notes', about: 'About', alpha: 'Alpha' },
    cta: { alpha: 'Apply as a Design Partner' },
    langSwitch: 'Language',
    langSwitchTo: '日本語で読む',
    menu: 'Menu',
    close: 'Close',
    footer: {
      tagline: 'The Organizational Runtime.',
      company: 'Company',
      product: 'Product',
      resources: 'Resources',
      privacy: 'Privacy',
      contact: 'Alpha access',
      rights: 'Diskarte. All rights reserved.',
      draft: 'Japanese copy is maintained alongside English.',
    },
    status: {
      vision: 'Vision',
      arch: 'Architecturally Complete',
      impl: 'Implemented',
      depl: 'Deployed · Internal Dev',
      plan: 'Planned',
    },
    waitlist: {
      label: 'Email address',
      placeholder: 'you@company.com',
      submit: 'Join the alpha list',
      submitting: 'Sending…',
      invalid: 'Enter a valid email address.',
      error: 'That did not go through. Please try again in a moment.',
      success:
        'You are on the alpha list. When your access is approved we will email you a setup code and a download link — there is nothing to install yet.',
      note: 'One email address, used only to contact you about alpha access. Nothing else, and no newsletter.',
      noscript: 'Alpha signup needs JavaScript. Enable it, or reach us through the Alpha page.',
      unavailableTitle: 'Alpha signup opens shortly.',
      unavailableBody:
        'The list is not accepting submissions yet. We would rather show you nothing than a form that quietly drops your address.',
    },
    schematic: 'Product schematic — not a screenshot',
    statusKey:
      'Implemented means built, committed, and proven through verification — it does not imply deployment. Nothing customer-facing is production-deployed yet, by intent.',
  },
  ja: {
    skip: '本文へ移動',
    nav: { runtime: 'ランタイム', architecture: 'アーキテクチャ', notes: 'ノート', about: '会社・創業者', alpha: 'アルファ' },
    cta: { alpha: 'デザインパートナーに応募' },
    langSwitch: '言語',
    langSwitchTo: 'Read in English',
    menu: 'メニュー',
    close: '閉じる',
    footer: {
      tagline: '組織のためのランタイム。',
      company: '会社',
      product: 'プロダクト',
      resources: 'リソース',
      privacy: 'プライバシー',
      contact: 'アルファアクセス',
      rights: 'Diskarte. All rights reserved.',
      draft: '日本語コピーは英語版と併行して管理しています。',
    },
    status: {
      vision: '構想',
      arch: 'アーキテクチャ確定',
      impl: '実装済み',
      depl: '稼働中・社内開発環境',
      plan: '計画中',
    },
    waitlist: {
      label: 'メールアドレス',
      placeholder: 'you@company.com',
      submit: 'アルファリストに登録',
      submitting: '送信中…',
      invalid: '有効なメールアドレスを入力してください。',
      error: '送信できませんでした。しばらくしてからもう一度お試しください。',
      success:
        'アルファリストに登録しました。アクセスが承認され次第、セットアップコードとダウンロードリンクをメールでお送りします。いまインストールいただくものはありません。',
      note: 'メールアドレスは、アルファアクセスのご連絡にのみ使用します。それ以外の用途やニュースレターへの利用はありません。',
      noscript: 'アルファ登録にはJavaScriptが必要です。有効にするか、アルファページからご連絡ください。',
      unavailableTitle: 'アルファ登録はまもなく開始します。',
      unavailableBody:
        '現在、登録の受付は開始していません。アドレスを静かに失うフォームをお見せするより、何も出さないことを選びます。',
    },
    schematic: 'プロダクト概念図 — スクリーンショットではありません',
    statusKey:
      '「実装済み」は、構築・コミット・検証済みであることを意味し、デプロイ済みであることを意味しません。顧客向けの本番デプロイは、意図的にまだ行っていません。',
  },
} as const;

export const routes = {
  home: { en: '/', ja: '/ja' },
  runtime: { en: '/runtime', ja: '/ja/runtime' },
  architecture: { en: '/architecture', ja: '/ja/architecture' },
  alpha: { en: '/alpha', ja: '/ja/alpha' },
  about: { en: '/about', ja: '/ja/about' },
  notes: { en: '/notes', ja: '/ja/notes' },
  privacy: { en: '/privacy', ja: '/ja/privacy' },
} as const;

/** The alpha waitlist anchor — the single customer front door on the site.
    Chrome CTAs point here; the form itself is rendered by Waitlist.astro. */
export function waitlistHref(locale: Locale): string {
  return `${routes.alpha[locale]}#waitlist`;
}

/** Map a pathname to its counterpart in the other locale. */
export function altPath(path: string, to: Locale): string {
  const clean = path.replace(/\/$/, '') || '/';
  if (clean.endsWith('/404')) return to === 'ja' ? '/ja' : '/';
  if (to === 'ja') {
    if (clean.startsWith('/ja')) return clean;
    return clean === '/' ? '/ja' : `/ja${clean}`;
  }
  if (clean === '/ja') return '/';
  return clean.startsWith('/ja/') ? clean.slice(3) : clean;
}
