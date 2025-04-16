! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "10731a69-1a73-4221-bd86-3e7dcf8358b9", e._sentryDebugIdIdentifier = "sentry-dbid-10731a69-1a73-4221-bd86-3e7dcf8358b9")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [8755], {
    63602: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var l = String(e),
              t = l.split(/[ce]/),
              n = t[1] || 0,
              d = String(n ? Number(t[0]) * Math.pow(10, n) : l).split("."),
              o = d[0],
              s = !d[1],
              r = o.slice(-6);
            return a ? "other" : 0 == o || 1 == o ? "one" : 0 == n && 0 != o && 0 == r && s || n < 0 || n > 5 ? "many" : "other"
          }
        },
        locale: "pt"
      })
    }
  }
]);