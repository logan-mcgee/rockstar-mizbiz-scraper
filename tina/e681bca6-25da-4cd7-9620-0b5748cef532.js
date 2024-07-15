! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e681bca6-25da-4cd7-9620-0b5748cef532", e._sentryDebugIdIdentifier = "sentry-dbid-e681bca6-25da-4cd7-9620-0b5748cef532")
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
    91496: (e, a, d) => {
      d.r(a), d.d(a, {
        patch: () => o,
        pick: () => l
      });
      var n = d(73660),
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