export type Locale = 'en' | 'ja';

export const ui = {
  en: {
    skip: 'Skip to content',
    nav: { runtime: 'Runtime', architecture: 'Architecture', overview: 'Technical Overview', notes: 'Notes', about: 'About', alpha: 'Alpha' },
    cta: { alpha: 'Apply as a Design Partner', overview: 'Read the Technical Overview' },
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
      contact: 'Contact',
      rights: 'Diskarte. All rights reserved.',
      draft: 'Japanese copy is maintained alongside English; report issues via the contact form.',
    },
    status: {
      vision: 'Vision',
      arch: 'Architecturally Complete',
      impl: 'Implemented',
      depl: 'Deployed · Internal Dev',
      plan: 'Planned',
    },
    schematic: 'Product schematic — not a screenshot',
    statusKey:
      'Implemented means built, committed, and proven through verification — it does not imply deployment. Nothing customer-facing is production-deployed yet, by intent.',
  },
  ja: {
    skip: '本文へ移動',
    nav: { runtime: 'ランタイム', architecture: 'アーキテクチャ', overview: '技術概要', notes: 'ノート', about: '会社・創業者', alpha: 'アルファ' },
    cta: { alpha: 'デザインパートナーに応募', overview: '技術概要を読む' },
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
      contact: 'お問い合わせ',
      rights: 'Diskarte. All rights reserved.',
      draft: '日本語コピーは英語版と併行して管理しています。お気づきの点はフォームからお知らせください。',
    },
    status: {
      vision: '構想',
      arch: 'アーキテクチャ確定',
      impl: '実装済み',
      depl: '稼働中・社内開発環境',
      plan: '計画中',
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
  overview: { en: '/technical-overview', ja: '/ja/technical-overview' },
  alpha: { en: '/alpha', ja: '/ja/alpha' },
  about: { en: '/about', ja: '/ja/about' },
  notes: { en: '/notes', ja: '/ja/notes' },
  privacy: { en: '/privacy', ja: '/ja/privacy' },
} as const;

export const TALLY_URL = 'https://tally.so/r/rjWxdR';

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
