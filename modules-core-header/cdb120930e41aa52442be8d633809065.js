! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "1725dd33-8a7f-4c85-81b3-79057ffbb460", e._sentryDebugIdIdentifier = "sentry-dbid-1725dd33-8a7f-4c85-81b3-79057ffbb460")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "d409e297a36831321bd01cc6fefa95672d98d375",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "d409e297a36831321bd01cc6fefa95672d98d375"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [492], {
    1492: (e, d, a) => {
      a.r(d), a.d(d, {
        default: () => s
      });
      var n = a(4812),
        o = a(8388),
        l = a(1200),
        t = a(3480);
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
//# sourceMappingURL=cdb120930e41aa52442be8d633809065.js.map