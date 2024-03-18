! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0ccad73b-ad35-479f-a835-58f8cef1d076", e._sentryDebugIdIdentifier = "sentry-dbid-0ccad73b-ad35-479f-a835-58f8cef1d076")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [492], {
    71492: (e, a, d) => {
      d.r(a), d.d(a, {
        default: () => f
      });
      var n = d(14812),
        o = d(10768),
        l = d(73648),
        t = d(63480);
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
//# sourceMappingURL=b2697137de9d509c3d76f5e8b30f1f15.js.map