! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "6f3390f9-8a79-40fd-90f1-30e96fa052e9", e._sentryDebugIdIdentifier = "sentry-dbid-6f3390f9-8a79-40fd-90f1-30e96fa052e9")
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
  [5187, 7568], {
    95187: (e, d, a) => {
      var o;
      a.r(d), a.d(d, {
        useId: () => r
      });
      var n = a(62229),
        t = a(92600),
        f = (o || (o = a.t(n, 2)))["useId".toString()] || (() => {}),
        l = 0;

      function r(e) {
        const [d, a] = n.useState(f());
        return (0, t.N)((() => {
          e || a((e => e ?? String(l++)))
        }), [e]), e || (d ? `radix-${d}` : "")
      }
    },
    92600: (e, d, a) => {
      a.d(d, {
        N: () => n
      });
      var o = a(62229),
        n = Boolean(globalThis?.document) ? o.useLayoutEffect : () => {}
    }
  }
]);