! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6f3390f9-8a79-40fd-90f1-30e96fa052e9", e._sentryDebugIdIdentifier = "sentry-dbid-6f3390f9-8a79-40fd-90f1-30e96fa052e9")
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
    95187: (e, a, d) => {
      var o;
      d.r(a), d.d(a, {
        useId: () => r
      });
      var n = d(62229),
        t = d(92600),
        f = (o || (o = d.t(n, 2)))["useId".toString()] || (() => {}),
        l = 0;

      function r(e) {
        const [a, d] = n.useState(f());
        return (0, t.N)((() => {
          e || d((e => e ?? String(l++)))
        }), [e]), e || (a ? `radix-${a}` : "")
      }
    },
    92600: (e, a, d) => {
      d.d(a, {
        N: () => n
      });
      var o = d(62229),
        n = Boolean(globalThis?.document) ? o.useLayoutEffect : () => {}
    }
  }
]);