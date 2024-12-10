! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "3c9aeb7e-2954-4aef-84ed-2b9a1d86b716", e._sentryDebugIdIdentifier = "sentry-dbid-3c9aeb7e-2954-4aef-84ed-2b9a1d86b716")
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
    1190: (e, d, a) => {
      var n = a(9493);
      d.H = n.createRoot, n.hydrateRoot
    },
    1063: (e, d, a) => {
      a.r(d);
      var n = a(9807),
        o = a(4277),
        t = a(1190),
        l = a(3430),
        r = a(6632);
      const {
        graphEnv: s,
        pingBearer: f
      } = (0, o.S0)();

      function c() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const d = (0, t.H)(e),
          a = (0, n.my)(l.default, {
            env: s,
            token: (0, n.UT)(null),
            tokenPing: (0, n.UT)(f),
            tokenPingExpires: (0, n.UT)(null),
            typePolicies: {}
          });
        d.render((0, r.jsx)(a, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", c) : c()
    }
  }
]);