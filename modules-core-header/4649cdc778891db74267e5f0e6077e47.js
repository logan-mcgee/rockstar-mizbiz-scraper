! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "3d7d48e1-7c3e-4c8b-8acc-67697ca66a56", e._sentryDebugIdIdentifier = "sentry-dbid-3d7d48e1-7c3e-4c8b-8acc-67697ca66a56")
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
    87037: (e, d, a) => {
      a.r(d), a.d(d, {
        default: () => c
      });
      var n = a(61076),
        o = a(25144),
        l = a(12652),
        t = a(95240);
      const {
        graphEnv: r,
        pingBearer: s
      } = (0, o.S_)(), c = () => {
        const e = (0, n.EB)(l.c, {
          env: r,
          token: (0, n.UT)(null),
          tokenPing: (0, n.UT)(s),
          tokenPingExpires: (0, n.UT)(null),
          typePolicies: {}
        });
        return (0, t.jsx)(e, {})
      }
    }
  }
]);