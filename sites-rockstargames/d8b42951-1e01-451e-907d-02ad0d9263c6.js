try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d8b42951-1e01-451e-907d-02ad0d9263c6", e._sentryDebugIdIdentifier = "sentry-dbid-d8b42951-1e01-451e-907d-02ad0d9263c6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9746], {
    67365: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => n
      });
      var d = s(9623);
      var t = s(25854);
      const n = () => {
        const [e] = (0, d.useSearchParams)(), a = e.get("src") ?? null;
        if (!a) return null;
        const {
          hostname: s
        } = new URL(a);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(s) ? (0, t.jsx)("div", {
          className: "rockstargames-sites-rockstargamesd3d06437c2c029c4d95e42b4b1690f8e",
          children: (0, t.jsx)("div", {
            className: "rockstargames-sites-rockstargamescb8ab5c6a510d8d025142e899a0588f8",
            style: {
              background: `url(${a}) no-repeat center/contain`
            }
          })
        }) : null
      }
    }
  }
]);