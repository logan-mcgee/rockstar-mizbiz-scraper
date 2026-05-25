try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "bc4e79db-694e-416f-98d0-058f5e4ff400", e._sentryDebugIdIdentifier = "sentry-dbid-bc4e79db-694e-416f-98d0-058f5e4ff400")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [1627], {
    23743(e, d, a) {
      a.d(d, {
        DX: () => n.DX,
        xV: () => n.xV,
        s6: () => l
      });
      var n = a(38957),
        s = a(39793),
        t = a(93082),
        o = a(3541);
      const l = ({
        enabled: e = !0,
        ...d
      }) => {
        const a = e ? o.s6 : t.Fragment;
        return (0, s.jsx)(a, {
          ...d
        })
      }
    }
  }
]);