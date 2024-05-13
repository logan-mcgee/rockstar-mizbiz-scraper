! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8211c38f-8178-4362-a818-6fec88024083", e._sentryDebugIdIdentifier = "sentry-dbid-8211c38f-8178-4362-a818-6fec88024083")
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
  [37], {
    87037: (e, n, d) => {
      d.r(n), d.d(n, {
        default: () => s
      });
      var a = d(61076),
        o = d(25144),
        f = d(12652),
        l = d(95240);
      const {
        graphEnv: t,
        pingBearer: r
      } = (0, o.S_)(), s = () => {
        const e = (0, a.EB)(f.c, {
          env: t,
          token: (0, a.UT)(null),
          tokenPing: (0, a.UT)(r),
          tokenPingExpires: (0, a.UT)(null),
          typePolicies: {}
        });
        return (0, l.jsx)(e, {})
      }
    }
  }
]);