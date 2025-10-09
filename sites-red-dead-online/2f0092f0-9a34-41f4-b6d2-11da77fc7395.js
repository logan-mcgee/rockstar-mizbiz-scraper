try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "2f0092f0-9a34-41f4-b6d2-11da77fc7395", e._sentryDebugIdIdentifier = "sentry-dbid-2f0092f0-9a34-41f4-b6d2-11da77fc7395")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [8272], {
    45583: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["many", "other"]
          },
          fn: function(e, d) {
            var a = String(e),
              n = a.split(/[ce]/),
              t = n[1] || 0,
              l = String(t ? Number(n[0]) * Math.pow(10, t) : a).split("."),
              o = l[0],
              s = !l[1],
              f = o.slice(-6);
            return d ? 11 == e || 8 == e || 80 == e || 800 == e ? "many" : "other" : 1 == e && s ? "one" : 0 == t && 0 != o && 0 == f && s || t < 0 || t > 5 ? "many" : "other"
          }
        },
        locale: "it"
      })
    }
  }
]);