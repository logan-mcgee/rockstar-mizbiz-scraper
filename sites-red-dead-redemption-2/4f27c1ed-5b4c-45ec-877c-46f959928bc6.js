try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "4f27c1ed-5b4c-45ec-877c-46f959928bc6", e._sentryDebugIdIdentifier = "sentry-dbid-4f27c1ed-5b4c-45ec-877c-46f959928bc6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [131], {
    36170: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["one", "other"]
          },
          fn: function(e, d) {
            var n = String(e),
              t = n.split(/[ce]/),
              a = t[1] || 0,
              o = String(a ? Number(t[0]) * Math.pow(10, a) : n).split("."),
              l = o[0],
              s = !o[1],
              r = l.slice(-6);
            return d ? 1 == e ? "one" : "other" : e >= 0 && e < 2 ? "one" : 0 == a && 0 != l && 0 == r && s || a < 0 || a > 5 ? "many" : "other"
          }
        },
        locale: "fr"
      })
    }
  }
]);