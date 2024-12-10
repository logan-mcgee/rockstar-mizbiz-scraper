! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "329b4a94-2b53-477c-a70d-78b92f0f0c35", e._sentryDebugIdIdentifier = "sentry-dbid-329b4a94-2b53-477c-a70d-78b92f0f0c35")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [891], {
    4891: (e, a, d) => {
      d.r(a), d.d(a, {
        patch: () => o,
        pick: () => l
      });
      var n = d(4252),
        t = d.n(n);
      const o = (e, a) => {
          const d = t().cloneDeepWith(d, ((e, d, n) => {
            t().keys(a).map((o => {
              "key" === d && e === o && t().keys(a[o]).map((e => {
                n[e] = a[o][e]
              }))
            }))
          }));
          return d
        },
        l = (e, a) => {
          const d = {};
          return t().cloneDeepWith(e, ((e, n, t) => {
            n === a && e && (d[t.key] = e)
          })), d
        }
    }
  }
]);