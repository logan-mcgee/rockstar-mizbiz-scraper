! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9f36ce1e-2436-41b8-ac13-b6c4f99a3d85", e._sentryDebugIdIdentifier = "sentry-dbid-9f36ce1e-2436-41b8-ac13-b6c4f99a3d85")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [822, 8441], {
    30822: (e, a, d) => {
      var t;
      d.r(a), d.d(a, {
        useId: () => r
      });
      var o = d(71127),
        l = d(85307),
        n = (t || (t = d.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        s = 0;

      function r(e) {
        const [a, d] = o.useState(n());
        return (0, l.N)((() => {
          e || d((e => e ?? String(s++)))
        }), [e]), e || (a ? `radix-${a}` : "")
      }
    },
    85307: (e, a, d) => {
      d.d(a, {
        N: () => o
      });
      var t = d(71127),
        o = globalThis?.document ? t.useLayoutEffect : () => {}
    }
  }
]);