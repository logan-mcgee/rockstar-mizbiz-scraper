! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8250a5a3-654f-4b89-9866-4d29278e2988", e._sentryDebugIdIdentifier = "sentry-dbid-8250a5a3-654f-4b89-9866-4d29278e2988")
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
    35365: (e, a, d) => {
      var o;
      d.r(a), d.d(a, {
        useId: () => s
      });
      var n = d(62229),
        t = d(66698),
        l = (o || (o = d.t(n, 2)))["useId".toString()] || (() => {}),
        r = 0;

      function s(e) {
        const [a, d] = n.useState(l());
        return (0, t.N)((() => {
          e || d((e => e ?? String(r++)))
        }), [e]), e || (a ? `radix-${a}` : "")
      }
    },
    66698: (e, a, d) => {
      d.d(a, {
        N: () => n
      });
      var o = d(62229),
        n = Boolean(globalThis?.document) ? o.useLayoutEffect : () => {}
    }
  }
]);