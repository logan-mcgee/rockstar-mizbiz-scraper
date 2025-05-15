! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a9062d65-848d-4b07-a0ec-f092561503a1", e._sentryDebugIdIdentifier = "sentry-dbid-a9062d65-848d-4b07-a0ec-f092561503a1")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [19, 2400], {
    40019: (e, a, t) => {
      t.r(a), t.d(a, {
        useGSAP: () => i
      });
      var n = t(62229),
        d = t(13581),
        o = t.n(d);
      let r = "undefined" != typeof document ? n.useLayoutEffect : n.useEffect,
        l = e => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        f = {},
        u = o();
      const i = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
          t = f;
        l(e) ? (t = e, e = null, a = "dependencies" in t ? t.dependencies : s) : l(a) && (t = a, a = "dependencies" in t ? t.dependencies : s), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: d,
          revertOnUpdate: o
        } = t, i = (0, n.useRef)(!1), c = (0, n.useRef)(u.context((() => {}), d)), b = (0, n.useRef)((e => c.current.add(null, e))), y = a && a.length && !o;
        return y && r((() => (i.current = !0, () => c.current.revert())), s), r((() => {
          if (e && c.current.add(e, d), !y || !i.current) return () => c.current.revert()
        }), a), {
          context: c.current,
          contextSafe: b.current
        }
      };
      i.register = e => {
        u = e
      }, i.headless = !0
    }
  }
]);