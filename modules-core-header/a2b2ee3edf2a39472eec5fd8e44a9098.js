! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "13b2905c-08da-42ec-a467-c84a38f93211", e._sentryDebugIdIdentifier = "sentry-dbid-13b2905c-08da-42ec-a467-c84a38f93211")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "b356924da36d0f3d7db4edbb6216f9bbe11be0f1",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "b356924da36d0f3d7db4edbb6216f9bbe11be0f1"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [728], {
    64192: (e, d, n) => {
      var a = n(39080);
      d.C = a.createRoot, a.hydrateRoot
    },
    92728: (e, d, n) => {
      n.r(d);
      var a = n(14812),
        o = n(10768),
        t = n(64192),
        r = n(73648),
        l = n(63480);
      const {
        graphEnv: s,
        pingBearer: f
      } = (0, o.S_)();

      function b() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const d = (0, t.C)(e),
          n = (0, a.EB)(r.c, {
            env: s,
            token: (0, a.UT)(null),
            tokenPing: (0, a.UT)(f),
            tokenPingExpires: (0, a.UT)(null),
            typePolicies: {}
          });
        d.render((0, l.jsx)(n, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", b) : b()
    }
  }
]);
//# sourceMappingURL=a2b2ee3edf2a39472eec5fd8e44a9098.js.map