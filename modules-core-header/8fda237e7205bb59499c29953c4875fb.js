! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "48b81126-881c-43d8-9bfb-5be24be6be26", e._sentryDebugIdIdentifier = "sentry-dbid-48b81126-881c-43d8-9bfb-5be24be6be26")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [728], {
    4192: (e, n, o) => {
      var d = o(9080);
      n.C = d.createRoot, d.hydrateRoot
    },
    2728: (e, n, o) => {
      o.r(n);
      var d = o(4812),
        a = o(8388),
        t = o(4192),
        r = o(3040),
        l = o(3480);
      const {
        graphEnv: s,
        pingBearer: b
      } = (0, a.S_)();

      function f() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const n = (0, t.C)(e),
          o = (0, d.EB)(r.c, {
            env: s,
            token: (0, d.UT)(null),
            tokenPing: (0, d.UT)(b),
            tokenPingExpires: (0, d.UT)(null),
            typePolicies: {}
          });
        n.render((0, l.jsx)(o, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", f) : f()
    }
  }
]);
//# sourceMappingURL=8fda237e7205bb59499c29953c4875fb.js.map