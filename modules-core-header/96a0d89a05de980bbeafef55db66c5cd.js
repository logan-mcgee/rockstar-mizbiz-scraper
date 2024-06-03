! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a0f6a7c9-d604-4b7a-a71a-787049057813", e._sentryDebugIdIdentifier = "sentry-dbid-a0f6a7c9-d604-4b7a-a71a-787049057813")
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
      var o = n(77364);
      a.C = o.createRoot, o.hydrateRoot
    },
    66412: (e, a, n) => {
      n.r(a);
      var o = n(61076),
        d = n(25144),
        t = n(64508),
        r = n(12652),
        l = n(95240);
      const {
        graphEnv: s,
        pingBearer: f
      } = (0, d.S_)();

      function i() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const a = (0, t.C)(e),
          n = (0, o.EB)(r.c, {
            env: s,
            token: (0, o.UT)(null),
            tokenPing: (0, o.UT)(f),
            tokenPingExpires: (0, o.UT)(null),
            typePolicies: {}
          });
        a.render((0, l.jsx)(n, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i()
    }
  }
]);