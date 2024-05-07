! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0d08425b-1c39-4a7f-9d37-0c7a1d5fa595", e._sentryDebugIdIdentifier = "sentry-dbid-0d08425b-1c39-4a7f-9d37-0c7a1d5fa595")
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
    87037: (e, a, d) => {
      d.r(a), d.d(a, {
        default: () => f
      });
      var n = d(61076),
        o = d(71612),
        l = d(12652),
        t = d(95240);
      const {
        graphEnv: r,
        pingBearer: s
      } = (0, o.S_)(), f = () => {
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