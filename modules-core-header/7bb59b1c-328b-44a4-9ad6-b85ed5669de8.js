! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7bb59b1c-328b-44a4-9ad6-b85ed5669de8", e._sentryDebugIdIdentifier = "sentry-dbid-7bb59b1c-328b-44a4-9ad6-b85ed5669de8")
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
  [344], {
    4344: (e, a, d) => {
      d.r(a), d.d(a, {
        default: () => f
      });
      var n = d(9807),
        o = d(4277),
        t = d(3430),
        l = d(6632);
      const {
        graphEnv: r,
        pingBearer: s
      } = (0, o.S0)(), f = e => {
        let {
          navData: a,
          location: d,
          onNavigate: o,
          searchConfig: f,
          routeOptions: i
        } = e;
        const c = (0, n.my)(t.default, {
          env: r,
          token: (0, n.UT)(null),
          tokenPing: (0, n.UT)(s),
          tokenPingExpires: (0, n.UT)(null),
          typePolicies: {}
        });
        return (0, l.jsx)(c, {
          navData: a,
          location: d,
          onNavigate: o,
          searchConfig: f,
          routeOptions: i
        })
      }
    }
  }
]);