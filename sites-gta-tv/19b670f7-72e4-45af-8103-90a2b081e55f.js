! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "19b670f7-72e4-45af-8103-90a2b081e55f", e._sentryDebugIdIdentifier = "sentry-dbid-19b670f7-72e4-45af-8103-90a2b081e55f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [2347], {
    8410: () => {
      Intl.PluralRules && "function" == typeof Intl.PluralRules.__addLocaleData && Intl.PluralRules.__addLocaleData({
        data: {
          categories: {
            cardinal: ["one", "many", "other"],
            ordinal: ["other"]
          },
          fn: function(e, a) {
            var t = String(e),
              n = t.split(/[ce]/),
              l = n[1] || 0,
              o = String(l ? Number(n[0]) * Math.pow(10, l) : t).split("."),
              d = o[0],
              s = !o[1],
              r = d.slice(-6);
            return a ? "other" : 1 == e ? "one" : 0 == l && 0 != d && 0 == r && s || l < 0 || l > 5 ? "many" : "other"
          }
        },
        locale: "es"
      })
    }
  }
]);