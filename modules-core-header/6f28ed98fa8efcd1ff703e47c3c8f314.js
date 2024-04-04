! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d74e92c9-55a9-4a3f-a147-5807dabc9573", e._sentryDebugIdIdentifier = "sentry-dbid-d74e92c9-55a9-4a3f-a147-5807dabc9573")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
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
//# sourceMappingURL=6f28ed98fa8efcd1ff703e47c3c8f314.js.map