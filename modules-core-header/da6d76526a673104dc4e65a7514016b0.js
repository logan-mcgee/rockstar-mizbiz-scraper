! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "6cbcbc69-11f3-4498-bc65-38e210b72863", e._sentryDebugIdIdentifier = "sentry-dbid-6cbcbc69-11f3-4498-bc65-38e210b72863")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "d409e297a36831321bd01cc6fefa95672d98d375",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "d409e297a36831321bd01cc6fefa95672d98d375"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [728], {
    4192: (e, d, n) => {
      var o = n(9080);
      d.C = o.createRoot, o.hydrateRoot
    },
    2728: (e, d, n) => {
      n.r(d);
      var o = n(4812),
        a = n(8388),
        t = n(4192),
        r = n(1200),
        l = n(3480);
      const {
        graphEnv: s,
        pingBearer: c
      } = (0, a.S_)();

      function f() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const d = (0, t.C)(e),
          n = (0, o.EB)(r.c, {
            env: s,
            token: (0, o.UT)(null),
            tokenPing: (0, o.UT)(c),
            tokenPingExpires: (0, o.UT)(null),
            typePolicies: {}
          });
        d.render((0, l.jsx)(n, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", f) : f()
    }
  }
]);
//# sourceMappingURL=da6d76526a673104dc4e65a7514016b0.js.map