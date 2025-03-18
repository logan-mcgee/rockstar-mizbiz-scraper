! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "be152f50-1168-4590-900b-2488dd4f057d", e._sentryDebugIdIdentifier = "sentry-dbid-be152f50-1168-4590-900b-2488dd4f057d")
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
  [1925], {
    91689: (e, o, a) => {
      var n = a(44853);
      o.H = n.createRoot, n.hydrateRoot
    },
    43696: (e, o, a) => {
      a.r(o);
      var n = a(95966),
        t = a(91689),
        d = a(96240),
        r = a(91029);
      const {
        graphEnv: s
      } = (0, n.getConfigForDomain)(), l = e => {
        let {
          navData: o,
          location: a,
          onNavigate: t,
          searchConfig: l,
          routeOptions: f
        } = e;
        const i = (0, n.withRockstarGraph)(d.A, {
          env: s
        });
        return (0, r.jsx)(i, {
          navData: o,
          location: a,
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
        const o = (0, t.H)(e),
          a = (0, n.withRockstarGraph)(l, {
            env: f
          });
        o.render((0, r.jsx)(a, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i()
    }
  }
]);