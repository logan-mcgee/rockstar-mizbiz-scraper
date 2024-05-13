! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "076f21ad-2f55-417d-91b2-24847aa0afc4", e._sentryDebugIdIdentifier = "sentry-dbid-076f21ad-2f55-417d-91b2-24847aa0afc4")
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
  [496], {
    1496: (e, a, n) => {
      n.r(a), n.d(a, {
        patch: () => f,
        pick: () => o
      });
      var d = n(3660),
        t = n.n(d);
      const f = (e, a) => {
          const n = t().cloneDeepWith(n, ((e, n, d) => {
            t().keys(a).map((f => {
              "key" === n && e === f && t().keys(a[f]).map((e => {
                d[e] = a[f][e]
              }))
            }))
          }));
          return n
        },
        o = (e, a) => {
          const n = {};
          return t().cloneDeepWith(e, ((e, d, t) => {
            d === a && e && (n[t.key] = e)
          })), n
        }
    }
  }
]);