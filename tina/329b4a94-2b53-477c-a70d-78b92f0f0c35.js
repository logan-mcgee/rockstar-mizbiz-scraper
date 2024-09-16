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
    4891: (e, a, n) => {
      n.r(a), n.d(a, {
        patch: () => o,
        pick: () => f
      });
      var d = n(4252),
        t = n.n(d);
      const o = (e, a) => {
          const n = t().cloneDeepWith(n, ((e, n, d) => {
            t().keys(a).map((o => {
              "key" === n && e === o && t().keys(a[o]).map((e => {
                d[e] = a[o][e]
              }))
            }))
          }));
          return n
        },
        f = (e, a) => {
          const n = {};
          return t().cloneDeepWith(e, ((e, d, t) => {
            d === a && e && (n[t.key] = e)
          })), n
        }
    }
  }
]);