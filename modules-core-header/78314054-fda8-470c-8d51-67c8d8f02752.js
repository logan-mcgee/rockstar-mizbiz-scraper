! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "78314054-fda8-470c-8d51-67c8d8f02752", e._sentryDebugIdIdentifier = "sentry-dbid-78314054-fda8-470c-8d51-67c8d8f02752")
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
  [2876], {
    42876: (e, d, a) => {
      var n;
      a.r(d), a.d(d, {
        useId: () => f
      });
      var o = a(62229),
        t = a(46217),
        r = (n || (n = a.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        s = 0;

      function f(e) {
        const [d, a] = o.useState(r());
        return (0, t.N)((() => {
          e || a((e => e ?? String(s++)))
        }), [e]), e || (d ? `radix-${d}` : "")
      }
    }
  }
]);