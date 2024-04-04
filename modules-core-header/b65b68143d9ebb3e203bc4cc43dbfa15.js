! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "962798f6-0939-4f65-a220-b85a60a4bed2", e._sentryDebugIdIdentifier = "sentry-dbid-962798f6-0939-4f65-a220-b85a60a4bed2")
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
  [412], {
    64508: (e, a, n) => {
      var d = n(77364);
      a.C = d.createRoot, d.hydrateRoot
    },
    66412: (e, a, n) => {
      n.r(a);
      var d = n(61076),
        o = n(71612),
        t = n(64508),
        r = n(12652),
        l = n(95240);
      const {
        graphEnv: s,
        pingBearer: f
      } = (0, o.S_)();

      function b() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const a = (0, t.C)(e),
          n = (0, d.EB)(r.c, {
            env: s,
            token: (0, d.UT)(null),
            tokenPing: (0, d.UT)(f),
            tokenPingExpires: (0, d.UT)(null),
            typePolicies: {}
          });
        a.render((0, l.jsx)(n, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", b) : b()
    }
  }
]);