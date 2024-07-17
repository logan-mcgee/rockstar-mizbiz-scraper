! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7f346beb-5638-4d12-bcf1-b9cef668f2b3", e._sentryDebugIdIdentifier = "sentry-dbid-7f346beb-5638-4d12-bcf1-b9cef668f2b3")
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
    64508: (e, n, a) => {
      var d = a(77364);
      n.C = d.createRoot, d.hydrateRoot
    },
    66412: (e, n, a) => {
      a.r(n);
      var d = a(61076),
        o = a(25144),
        t = a(64508),
        r = a(12652),
        l = a(95240);
      const {
        graphEnv: f,
        pingBearer: s
      } = (0, o.S_)();

      function c() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const n = (0, t.C)(e),
          a = (0, d.EB)(r.c, {
            env: f,
            token: (0, d.UT)(null),
            tokenPing: (0, d.UT)(s),
            tokenPingExpires: (0, d.UT)(null),
            typePolicies: {}
          });
        n.render((0, l.jsx)(a, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", c) : c()
    }
  }
]);