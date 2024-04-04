! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "962798f6-0939-4f65-a220-b85a60a4bed2", e._sentryDebugIdIdentifier = "sentry-dbid-962798f6-0939-4f65-a220-b85a60a4bed2")
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
  [412], {
    64508: (e, d, a) => {
      var n = a(77364);
      d.C = n.createRoot, n.hydrateRoot
    },
    66412: (e, d, a) => {
      a.r(d);
      var n = a(61076),
        o = a(71612),
        t = a(64508),
        r = a(12652),
        l = a(95240);
      const {
        graphEnv: s,
        pingBearer: f
      } = (0, o.S_)();

      function i() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const d = (0, t.C)(e),
          a = (0, n.EB)(r.c, {
            env: s,
            token: (0, n.UT)(null),
            tokenPing: (0, n.UT)(f),
            tokenPingExpires: (0, n.UT)(null),
            typePolicies: {}
          });
        d.render((0, l.jsx)(a, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i()
    }
  }
]);
//# sourceMappingURL=0a6d5a2749c323f491dcc98c57ad2c3c.js.map