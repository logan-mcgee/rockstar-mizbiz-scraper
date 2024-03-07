! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "13b2905c-08da-42ec-a467-c84a38f93211", e._sentryDebugIdIdentifier = "sentry-dbid-13b2905c-08da-42ec-a467-c84a38f93211")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "9e0f348dc2ade82ef557806d58f5a6f2792dae49",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "9e0f348dc2ade82ef557806d58f5a6f2792dae49"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [728], {
    64192: (e, d, a) => {
      var n = a(39080);
      d.C = n.createRoot, n.hydrateRoot
    },
    92728: (e, d, a) => {
      a.r(d);
      var n = a(14812),
        o = a(10768),
        t = a(64192),
        r = a(73648),
        l = a(63480);
      const {
        graphEnv: s,
        pingBearer: f
      } = (0, o.S_)();

      function c() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const d = (0, t.C)(e),
          a = (0, n.EB)(r.c, {
            env: s,
            token: (0, n.UT)(null),
            tokenPing: (0, n.UT)(f),
            tokenPingExpires: (0, n.UT)(null),
            typePolicies: {}
          });
        d.render((0, l.jsx)(a, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", c) : c()
    }
  }
]);
//# sourceMappingURL=64f76bb6ca5f24117a87d9c514eb70ca.js.map