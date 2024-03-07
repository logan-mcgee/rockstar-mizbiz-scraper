! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "0ccad73b-ad35-479f-a835-58f8cef1d076", e._sentryDebugIdIdentifier = "sentry-dbid-0ccad73b-ad35-479f-a835-58f8cef1d076")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "b356924da36d0f3d7db4edbb6216f9bbe11be0f1",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "b356924da36d0f3d7db4edbb6216f9bbe11be0f1"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [492], {
    71492: (e, d, a) => {
      a.r(d), a.d(d, {
        default: () => s
      });
      var n = a(14812),
        o = a(10768),
        l = a(73648),
        t = a(63480);
      const {
        graphEnv: f,
        pingBearer: r
      } = (0, o.S_)(), s = () => {
        const e = (0, n.EB)(l.c, {
          env: f,
          token: (0, n.UT)(null),
          tokenPing: (0, n.UT)(r),
          tokenPingExpires: (0, n.UT)(null),
          typePolicies: {}
        });
        return (0, t.jsx)(e, {})
      }
    }
  }
]);
//# sourceMappingURL=eb67698e955718106b70267bd8bc1c0b.js.map