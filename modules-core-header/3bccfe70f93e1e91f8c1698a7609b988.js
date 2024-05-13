! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "8afc9728-e90d-4733-a1c8-8e2a15415a67", e._sentryDebugIdIdentifier = "sentry-dbid-8afc9728-e90d-4733-a1c8-8e2a15415a67")
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
      var a = n(77364);
      d.C = a.createRoot, a.hydrateRoot
    },
    66412: (e, d, n) => {
      n.r(d);
      var a = n(61076),
        o = n(25144),
        t = n(64508),
        r = n(12652),
        l = n(95240);
      const {
        graphEnv: f,
        pingBearer: s
      } = (0, o.S_)();

      function c() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const d = (0, t.C)(e),
          n = (0, a.EB)(r.c, {
            env: f,
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