! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c4525b60-a228-43c5-9490-7bd5c3ff638e", e._sentryDebugIdIdentifier = "sentry-dbid-c4525b60-a228-43c5-9490-7bd5c3ff638e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [492], {
    1492: (e, a, n) => {
      n.r(a), n.d(a, {
        default: () => f
      });
      var d = n(4812),
        o = n(8388),
        l = n(3040),
        t = n(3480);
      const {
        graphEnv: r,
        pingBearer: s
      } = (0, o.S_)(), f = () => {
        const e = (0, d.EB)(l.c, {
          env: r,
          token: (0, d.UT)(null),
          tokenPing: (0, d.UT)(s),
          tokenPingExpires: (0, d.UT)(null),
          typePolicies: {}
        });
        return (0, t.jsx)(e, {})
      }
    }
  }
]);
//# sourceMappingURL=bf774703f08c20ffb2183ea67d83111d.js.map