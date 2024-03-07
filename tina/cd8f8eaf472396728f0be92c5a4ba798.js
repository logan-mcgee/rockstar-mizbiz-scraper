! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "59cb7e4e-0445-4de5-86ae-ae0b659e3d7b", e._sentryDebugIdIdentifier = "sentry-dbid-59cb7e4e-0445-4de5-86ae-ae0b659e3d7b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [812], {
    3812: (e, a, d) => {
      d.r(a), d.d(a, {
        patch: () => o,
        pick: () => f
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
        f = (e, a) => {
          const d = {};
          return t().cloneDeepWith(e, ((e, n, t) => {
            n === a && e && (d[t.key] = e)
          })), d
        }
    }
  }
]);
//# sourceMappingURL=cd8f8eaf472396728f0be92c5a4ba798.js.map