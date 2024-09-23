! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fac97c19-0288-4b8f-987d-0e5e52e9c11d", e._sentryDebugIdIdentifier = "sentry-dbid-fac97c19-0288-4b8f-987d-0e5e52e9c11d")
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
  [963], {
    4344: (e, a, n) => {
      n.r(a), n.d(a, {
        default: () => f
      });
      var o = n(9807),
        d = n(4277),
        t = n(7573),
        l = n(6632);
      const {
        graphEnv: r,
        pingBearer: s
      } = (0, d.S0)(), f = e => {
        let {
          navData: a,
          location: n,
          onNavigate: d,
          searchConfig: f,
          routeOptions: i
        } = e;
        const u = (0, o.my)(t.default, {
          env: r,
          token: (0, o.UT)(null),
          tokenPing: (0, o.UT)(s),
          tokenPingExpires: (0, o.UT)(null),
          typePolicies: {}
        });
        return (0, l.jsx)(u, {
          navData: a,
          location: n,
          onNavigate: d,
          searchConfig: f,
          routeOptions: i
        })
      }
    }
  }
]);