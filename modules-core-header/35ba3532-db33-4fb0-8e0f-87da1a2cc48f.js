! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "35ba3532-db33-4fb0-8e0f-87da1a2cc48f", e._sentryDebugIdIdentifier = "sentry-dbid-35ba3532-db33-4fb0-8e0f-87da1a2cc48f")
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
        d = o(40347),
        t = o(39082),
        r = o(73855);
      const {
        graphEnv: s
      } = (0, n.getConfigForDomain)(), c = e => {
        let {
          navData: a,
          location: o,
          onNavigate: d,
          searchConfig: c,
          routeOptions: l
        } = e;
        const f = (0, n.withRockstarGraph)(t.A, {
          env: s
        });
        return (0, r.jsx)(f, {
          navData: a,
          location: o,
          onNavigate: d,
          searchConfig: c,
          routeOptions: l
        })
      }, {
        graphEnv: l
      } = (0, n.getConfigForDomain)();

      function f() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const a = (0, d.H)(e),
          o = (0, n.withRockstarGraph)(c, {
            env: l
          });
        a.render((0, r.jsx)(o, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", f) : f()
    }
  }
]);