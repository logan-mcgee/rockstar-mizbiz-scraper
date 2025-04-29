! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "dbb7ad7b-efbf-4785-9f61-3bb33dd49176", e._sentryDebugIdIdentifier = "sentry-dbid-dbb7ad7b-efbf-4785-9f61-3bb33dd49176")
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
  [495, 2876], {
    42876: (e, d, a) => {
      var o;
      a.r(d), a.d(d, {
        useId: () => l
      });
      var n = a(62229),
        t = a(46217),
        r = (o || (o = a.t(n, 2)))[" useId ".trim().toString()] || (() => {}),
        s = 0;

      function l(e) {
        const [d, a] = n.useState(r());
        return (0, t.N)((() => {
          e || a((e => e ?? String(s++)))
        }), [e]), e || (d ? `radix-${d}` : "")
      }
    },
    46217: (e, d, a) => {
      a.d(d, {
        N: () => n
      });
      var o = a(62229),
        n = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);