try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "26b485be-79fb-47f4-9785-9e9875e82431", e._sentryDebugIdIdentifier = "sentry-dbid-26b485be-79fb-47f4-9785-9e9875e82431")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [131], {
    36170: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["one", "other"]
          },
          fn: function(e, a) {
            var n = String(e),
              t = n.split(/[ce]/),
              l = t[1] || 0,
              o = String(l ? Number(t[0]) * Math.pow(10, l) : n).split("."),
              d = o[0],
              s = !o[1],
              r = d.slice(-6);
            return a ? 1 == e ? "one" : "other" : e >= 0 && e < 2 ? "one" : 0 == l && 0 != d && 0 == r && s || l < 0 || l > 5 ? "many" : "other"
          }
        },
        locale: "fr"
      })
    }
  }
]);