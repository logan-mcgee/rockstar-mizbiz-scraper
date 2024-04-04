! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "076f21ad-2f55-417d-91b2-24847aa0afc4", e._sentryDebugIdIdentifier = "sentry-dbid-076f21ad-2f55-417d-91b2-24847aa0afc4")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [496], {
    1496: (e, a, d) => {
      d.r(a), d.d(a, {
        patch: () => o,
        pick: () => l
      });
      var n = d(3660),
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
//# sourceMappingURL=fe3550cab15df7d85d959f9de41c826e.js.map