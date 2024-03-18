! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "13b2905c-08da-42ec-a467-c84a38f93211", e._sentryDebugIdIdentifier = "sentry-dbid-13b2905c-08da-42ec-a467-c84a38f93211")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [728], {
    64192: (e, a, d) => {
      var n = d(39080);
      a.C = n.createRoot, n.hydrateRoot
    },
    92728: (e, a, d) => {
      d.r(a);
      var n = d(14812),
        o = d(10768),
        t = d(64192),
        r = d(73648),
        l = d(63480);
      const {
        graphEnv: s,
        pingBearer: c
      } = (0, o.S_)();

      function f() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const a = (0, t.C)(e),
          d = (0, n.EB)(r.c, {
            env: s,
            token: (0, n.UT)(null),
            tokenPing: (0, n.UT)(c),
            tokenPingExpires: (0, n.UT)(null),
            typePolicies: {}
          });
        a.render((0, l.jsx)(d, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", f) : f()
    }
  }
]);
//# sourceMappingURL=c6d46aa9f4b330c5b7b6b2741c7c9463.js.map