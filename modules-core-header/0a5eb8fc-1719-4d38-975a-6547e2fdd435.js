! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "0a5eb8fc-1719-4d38-975a-6547e2fdd435", e._sentryDebugIdIdentifier = "sentry-dbid-0a5eb8fc-1719-4d38-975a-6547e2fdd435")
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
      var a = n(9493);
      d.H = a.createRoot, a.hydrateRoot
    },
    1063: (e, d, n) => {
      n.r(d);
      var a = n(9807),
        o = n(4277),
        t = n(1190),
        f = n(7905),
        l = n(6632);
      const {
        graphEnv: r,
        pingBearer: s
      } = (0, o.S0)();

      function c() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const d = (0, t.H)(e),
          n = (0, a.my)(f.default, {
            env: r,
            token: (0, a.UT)(null),
            tokenPing: (0, a.UT)(s),
            tokenPingExpires: (0, a.UT)(null),
            typePolicies: {}
          });
        d.render((0, l.jsx)(n, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", c) : c()
    }
  }
]);