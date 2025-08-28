try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "98a16cc7-13f5-4aef-830b-3c300e299738", e._sentryDebugIdIdentifier = "sentry-dbid-98a16cc7-13f5-4aef-830b-3c300e299738")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/sites-gta-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [1822], {
    3944: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "other"],
            ordinal: ["one", "two", "few", "other"]
          },
          fn: function(e, a) {
            var t = String(e).split("."),
              n = !t[1],
              d = Number(t[0]) == e,
              l = d && t[0].slice(-1),
              o = d && t[0].slice(-2);
            return a ? 1 == l && 11 != o ? "one" : 2 == l && 12 != o ? "two" : 3 == l && 13 != o ? "few" : "other" : 1 == e && n ? "one" : "other"
          }
        },
        locale: "en"
      })
    }
  }
]);