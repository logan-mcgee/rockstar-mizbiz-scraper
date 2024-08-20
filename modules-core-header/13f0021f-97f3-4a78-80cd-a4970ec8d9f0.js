! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "13f0021f-97f3-4a78-80cd-a4970ec8d9f0", e._sentryDebugIdIdentifier = "sentry-dbid-13f0021f-97f3-4a78-80cd-a4970ec8d9f0")
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
    1190: (e, d, n) => {
      var o = n(9493);
      d.H = o.createRoot, o.hydrateRoot
    },
    1063: (e, d, n) => {
      n.r(d);
      var o = n(9807),
        a = n(4277),
        t = n(1190),
        l = n(7573),
        r = n(6632);
      const {
        graphEnv: f,
        pingBearer: s
      } = (0, a.S0)();

      function i() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const d = (0, t.H)(e),
          n = (0, o.my)(l.default, {
            env: f,
            token: (0, o.UT)(null),
            tokenPing: (0, o.UT)(s),
            tokenPingExpires: (0, o.UT)(null),
            typePolicies: {}
          });
        d.render((0, r.jsx)(n, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i()
    }
  }
]);