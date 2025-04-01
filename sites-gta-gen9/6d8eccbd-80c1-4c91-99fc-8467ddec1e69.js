! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6d8eccbd-80c1-4c91-99fc-8467ddec1e69", e._sentryDebugIdIdentifier = "sentry-dbid-6d8eccbd-80c1-4c91-99fc-8467ddec1e69")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2347], {
    18410: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var n = String(e),
              t = n.split(/[ce]/),
              d = t[1] || 0,
              l = String(d ? Number(t[0]) * Math.pow(10, d) : n).split("."),
              o = l[0],
              s = !l[1],
              r = o.slice(-6);
            return a ? "other" : 1 == e ? "one" : 0 == d && 0 != o && 0 == r && s || d < 0 || d > 5 ? "many" : "other"
          }
        },
        locale: "es"
      })
    }
  }
]);