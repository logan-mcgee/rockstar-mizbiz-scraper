! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d884bc2d-fa99-4c6a-91ae-3cf7fc60522d", e._sentryDebugIdIdentifier = "sentry-dbid-d884bc2d-fa99-4c6a-91ae-3cf7fc60522d")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [835], {
    14120: (e, a, o) => {
      var t = o(18429);
      a.H = t.createRoot, t.hydrateRoot
    },
    65014: (e, a, o) => {
      var t = o(95966),
        n = o(14120),
        d = o(86575),
        l = o(25854);
      const {
        graphEnv: r
      } = (0, t.getConfigForDomain)(), s = e => {
        let {
          navData: a,
          location: o,
          onNavigate: n,
          searchConfig: s,
          routeOptions: f
        } = e;
        const i = (0, t.withRockstarGraph)(d.A, {
          env: r
        });
        return (0, l.jsx)(i, {
          navData: a,
          location: o,
          onNavigate: n,
          searchConfig: s,
          routeOptions: f
        })
      }, {
        graphEnv: f
      } = (0, t.getConfigForDomain)();

      function i() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const a = (0, n.H)(e),
          o = (0, t.withRockstarGraph)(s, {
            env: f
          });
        a.render((0, l.jsx)(o, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i()
    }
  }
]);