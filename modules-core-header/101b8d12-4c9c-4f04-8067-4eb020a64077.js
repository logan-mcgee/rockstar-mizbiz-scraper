! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "101b8d12-4c9c-4f04-8067-4eb020a64077", e._sentryDebugIdIdentifier = "sentry-dbid-101b8d12-4c9c-4f04-8067-4eb020a64077")
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
  [641], {
    8074: (e, o, n) => {
      var a = n(4853);
      o.H = a.createRoot, a.hydrateRoot
    },
    5641: (e, o, n) => {
      n.r(o);
      var a = n(5966),
        t = n(8074),
        d = n(9396),
        r = n(8096);
      const {
        graphEnv: s
      } = (0, a.getScConfigForOrigin)(), f = e => {
        let {
          navData: o,
          location: n,
          onNavigate: t,
          searchConfig: f,
          routeOptions: l
        } = e;
        const c = (0, a.withRockstarGraph)(d.A, {
          env: s
        });
        return (0, r.jsx)(c, {
          navData: o,
          location: n,
          onNavigate: t,
          searchConfig: f,
          routeOptions: l
        })
      }, {
        graphEnv: l
      } = (0, a.getScConfigForOrigin)();

      function c() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const o = (0, t.H)(e),
          n = (0, a.withRockstarGraph)(f, {
            env: l
          });
        o.render((0, r.jsx)(n, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", c) : c()
    }
  }
]);