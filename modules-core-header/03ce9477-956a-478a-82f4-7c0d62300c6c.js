! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "03ce9477-956a-478a-82f4-7c0d62300c6c", e._sentryDebugIdIdentifier = "sentry-dbid-03ce9477-956a-478a-82f4-7c0d62300c6c")
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
  [901], {
    901: (e, a, d) => {
      d.d(a, {
        A: () => n
      });
      var t = d(8096);
      const n = e => {
        let {
          to: a,
          target: d,
          className: n,
          onNavigate: o,
          onClick: l,
          reloadDocument: s,
          children: r,
          ...f
        } = e;
        const c = a?.startsWith("http");
        return (0, t.jsx)("a", {
          href: a,
          className: n,
          onClick: e => {
            l?.(e), c || s || (o ? (e.preventDefault(), o(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
          },
          target: d,
          ...f,
          children: r
        })
      }
    }
  }
]);