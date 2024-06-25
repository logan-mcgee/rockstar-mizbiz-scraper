! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "7f346beb-5638-4d12-bcf1-b9cef668f2b3", e._sentryDebugIdIdentifier = "sentry-dbid-7f346beb-5638-4d12-bcf1-b9cef668f2b3")
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
    64508: (e, d, n) => {
      var o = n(77364);
      d.C = o.createRoot, o.hydrateRoot
    },
    66412: (e, d, n) => {
      n.r(d);
      var o = n(61076),
        a = n(25144),
        t = n(64508),
        r = n(12652),
        l = n(95240);
      const {
        graphEnv: f,
        pingBearer: s
      } = (0, a.S_)();

      function c() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const d = (0, t.C)(e),
          n = (0, o.EB)(r.c, {
            env: f,
            token: (0, o.UT)(null),
            tokenPing: (0, o.UT)(s),
            tokenPingExpires: (0, o.UT)(null),
            typePolicies: {}
          });
        d.render((0, l.jsx)(n, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", c) : c()
    }
  }
]);