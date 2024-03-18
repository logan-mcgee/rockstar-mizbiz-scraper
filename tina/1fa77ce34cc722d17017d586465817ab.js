! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "59cb7e4e-0445-4de5-86ae-ae0b659e3d7b", e._sentryDebugIdIdentifier = "sentry-dbid-59cb7e4e-0445-4de5-86ae-ae0b659e3d7b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [812], {
    3812: (e, a, n) => {
      n.r(a), n.d(a, {
        patch: () => o,
        pick: () => l
      });
      var d = n(3660),
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
        l = (e, a) => {
          const n = {};
          return t().cloneDeepWith(e, ((e, d, t) => {
            d === a && e && (n[t.key] = e)
          })), n
        }
    }
  }
]);
//# sourceMappingURL=1fa77ce34cc722d17017d586465817ab.js.map