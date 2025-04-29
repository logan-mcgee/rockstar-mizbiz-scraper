! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "932634eb-e36d-4e5c-ae7b-1ecbbfffb9db", e._sentryDebugIdIdentifier = "sentry-dbid-932634eb-e36d-4e5c-ae7b-1ecbbfffb9db")
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
  [4879], {
    40347: (e, a, o) => {
      var n = o(44853);
      a.H = n.createRoot, n.hydrateRoot
    },
    24879: (e, a, o) => {
      o.r(a);
      var n = o(95966),
        t = o(40347),
        d = o(68111),
        r = o(73855);
      const {
        graphEnv: s
      } = (0, n.getConfigForDomain)(), l = e => {
        let {
          navData: a,
          location: o,
          onNavigate: t,
          searchConfig: l,
          routeOptions: f
        } = e;
        const i = (0, n.withRockstarGraph)(d.A, {
          env: s
        });
        return (0, r.jsx)(i, {
          navData: a,
          location: o,
          onNavigate: t,
          searchConfig: l,
          routeOptions: f
        })
      }, {
        graphEnv: f
      } = (0, n.getConfigForDomain)();

      function i() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const a = (0, t.H)(e),
          o = (0, n.withRockstarGraph)(l, {
            env: f
          });
        a.render((0, r.jsx)(o, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i()
    }
  }
]);