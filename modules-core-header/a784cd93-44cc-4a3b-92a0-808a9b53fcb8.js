! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a784cd93-44cc-4a3b-92a0-808a9b53fcb8", e._sentryDebugIdIdentifier = "sentry-dbid-a784cd93-44cc-4a3b-92a0-808a9b53fcb8")
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
  [63], {
    1190: (e, a, d) => {
      var n = d(9493);
      a.H = n.createRoot, n.hydrateRoot
    },
    1063: (e, a, d) => {
      d.r(a);
      var n = d(9807),
        o = d(4277),
        t = d(1190),
        l = d(7573),
        r = d(6632);
      const {
        graphEnv: s,
        pingBearer: c
      } = (0, o.S0)();

      function f() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const a = (0, t.H)(e),
          d = (0, n.my)(l.default, {
            env: s,
            token: (0, n.UT)(null),
            tokenPing: (0, n.UT)(c),
            tokenPingExpires: (0, n.UT)(null),
            typePolicies: {}
          });
        a.render((0, r.jsx)(d, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", f) : f()
    }
  }
]);