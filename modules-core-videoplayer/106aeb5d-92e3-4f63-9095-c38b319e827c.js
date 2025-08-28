try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "106aeb5d-92e3-4f63-9095-c38b319e827c", e._sentryDebugIdIdentifier = "sentry-dbid-106aeb5d-92e3-4f63-9095-c38b319e827c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [131], {
    79767: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["one", "other"]
          },
          fn: function(e, a) {
            var d = String(e),
              n = d.split(/[ce]/),
              o = n[1] || 0,
              l = String(o ? Number(n[0]) * Math.pow(10, o) : d).split("."),
              t = l[0],
              s = !l[1],
              r = t.slice(-6);
            return a ? 1 == e ? "one" : "other" : e >= 0 && e < 2 ? "one" : 0 == o && 0 != t && 0 == r && s || o < 0 || o > 5 ? "many" : "other"
          }
        },
        locale: "fr"
      })
    }
  }
]);