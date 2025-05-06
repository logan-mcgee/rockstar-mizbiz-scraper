! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7596758b-6bf4-4a92-9000-4f00ed60d2af", e._sentryDebugIdIdentifier = "sentry-dbid-7596758b-6bf4-4a92-9000-4f00ed60d2af")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [8755], {
    63602: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var d = String(e),
              t = d.split(/[ce]/),
              n = t[1] || 0,
              l = String(n ? Number(t[0]) * Math.pow(10, n) : d).split("."),
              o = l[0],
              r = !l[1],
              f = o.slice(-6);
            return a ? "other" : 0 == o || 1 == o ? "one" : 0 == n && 0 != o && 0 == f && r || n < 0 || n > 5 ? "many" : "other"
          }
        },
        locale: "pt"
      })
    }
  }
]);