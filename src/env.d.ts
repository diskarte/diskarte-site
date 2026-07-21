/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Base URL of the Diskarte acquisition service that accepts alpha waitlist
   *  signups. Public by definition (it is called from the browser) — never a
   *  secret. Baked in at BUILD time; the site is fully static.
   *
   *  Accepts either the service base (`https://…`) or the full contract path
   *  (`https://…/v1/waitlist`). Unset ⇒ the signup form renders its honest
   *  "opens shortly" state instead of a form that would silently fail. */
  readonly PUBLIC_DISKARTE_WAITLIST_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
