try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "88bd8c85-d739-43e7-b5bf-945cffce6376", e._sentryDebugIdIdentifier = "sentry-dbid-88bd8c85-d739-43e7-b5bf-945cffce6376")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9205], {
    41586(e, s, a) {
      a.r(s), a.d(s, {
        default: () => n
      });
      var d = a(42295),
        t = a(10181);
      const n = () => {
        const [e] = (0, t.useSearchParams)(), s = e.get("src") ?? null;
        if (!s) return null;
        const {
          hostname: a
        } = new URL(s);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(a) ? (0, d.jsx)("div", {
          className: "rockstargames-sites-rockstargamesd3d06437c2c029c4d95e42b4b1690f8e",
          children: (0, d.jsx)("div", {
            className: "rockstargames-sites-rockstargamescb8ab5c6a510d8d025142e899a0588f8",
            style: {
              background: `url(${s}) no-repeat center/contain`
            }
          })
        }) : null
      }
    }
  }
]);