! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "8250a5a3-654f-4b89-9866-4d29278e2988", e._sentryDebugIdIdentifier = "sentry-dbid-8250a5a3-654f-4b89-9866-4d29278e2988")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [7746, 5365], {
    35365: (e, d, a) => {
      var o;
      a.r(d), a.d(d, {
        useId: () => s
      });
      var n = a(62229),
        t = a(66698),
        l = (o || (o = a.t(n, 2)))["useId".toString()] || (() => {}),
        r = 0;

      function s(e) {
        const [d, a] = n.useState(l());
        return (0, t.N)((() => {
          e || a((e => e ?? String(r++)))
        }), [e]), e || (d ? `radix-${d}` : "")
      }
    },
    66698: (e, d, a) => {
      a.d(d, {
        N: () => n
      });
      var o = a(62229),
        n = Boolean(globalThis?.document) ? o.useLayoutEffect : () => {}
    }
  }
]);