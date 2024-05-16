! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8afc9728-e90d-4733-a1c8-8e2a15415a67", e._sentryDebugIdIdentifier = "sentry-dbid-8afc9728-e90d-4733-a1c8-8e2a15415a67")
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
    64508: (e, a, d) => {
      var n = d(77364);
      a.C = n.createRoot, n.hydrateRoot
    },
    66412: (e, a, d) => {
      d.r(a);
      var n = d(61076),
        o = d(25144),
        t = d(64508),
        r = d(12652),
        l = d(95240);
      const {
        graphEnv: f,
        pingBearer: s
      } = (0, o.S_)();

      function c() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const a = (0, t.C)(e),
          d = (0, n.EB)(r.c, {
            env: f,
            token: (0, n.UT)(null),
            tokenPing: (0, n.UT)(s),
            tokenPingExpires: (0, n.UT)(null),
            typePolicies: {}
          });
        a.render((0, l.jsx)(d, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", c) : c()
    }
  }
]);