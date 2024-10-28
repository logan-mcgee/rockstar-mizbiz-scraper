! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "61875211-7e26-416b-8f4f-a032a7558ff1", e._sentryDebugIdIdentifier = "sentry-dbid-61875211-7e26-416b-8f4f-a032a7558ff1")
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
    4344: (e, a, n) => {
      n.r(a), n.d(a, {
        default: () => s
      });
      var o = n(9807),
        t = n(4277),
        d = n(7905),
        f = n(6632);
      const {
        graphEnv: l,
        pingBearer: r
      } = (0, t.S0)(), s = e => {
        let {
          navData: a,
          location: n,
          onNavigate: t,
          searchConfig: s,
          routeOptions: i
        } = e;
        const u = (0, o.my)(d.default, {
          env: l,
          token: (0, o.UT)(null),
          tokenPing: (0, o.UT)(r),
          tokenPingExpires: (0, o.UT)(null),
          typePolicies: {}
        });
        return (0, f.jsx)(u, {
          navData: a,
          location: n,
          onNavigate: t,
          searchConfig: s,
          routeOptions: i
        })
      }
    }
  }
]);