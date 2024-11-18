! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9204141f-315a-424c-8fa0-abeacf3cbbd1", e._sentryDebugIdIdentifier = "sentry-dbid-9204141f-315a-424c-8fa0-abeacf3cbbd1")
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
    1190: (e, a, n) => {
      var d = n(9493);
      a.H = d.createRoot, d.hydrateRoot
    },
    1063: (e, a, n) => {
      n.r(a);
      var d = n(9807),
        o = n(4277),
        t = n(1190),
        l = n(7905),
        r = n(6632);
      const {
        graphEnv: f,
        pingBearer: s
      } = (0, o.S0)();

      function b() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const a = (0, t.H)(e),
          n = (0, d.my)(l.default, {
            env: f,
            token: (0, d.UT)(null),
            tokenPing: (0, d.UT)(s),
            tokenPingExpires: (0, d.UT)(null),
            typePolicies: {}
          });
        a.render((0, r.jsx)(n, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", b) : b()
    }
  }
]);