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
        default: () => s
      });
      var d = n(9807),
        o = n(4277),
        t = n(7573),
        l = n(6632);
      const {
        graphEnv: f,
        pingBearer: r
      } = (0, o.S0)(), s = e => {
        let {
          navData: a,
          location: n,
          onNavigate: o,
          searchConfig: s,
          routeOptions: i
        } = e;
        const c = (0, d.my)(t.default, {
          env: f,
          token: (0, d.UT)(null),
          tokenPing: (0, d.UT)(r),
          tokenPingExpires: (0, d.UT)(null),
          typePolicies: {}
        });
        return (0, l.jsx)(c, {
          navData: a,
          location: n,
          onNavigate: o,
          searchConfig: s,
          routeOptions: i
        })
      }
    }
  }
]);