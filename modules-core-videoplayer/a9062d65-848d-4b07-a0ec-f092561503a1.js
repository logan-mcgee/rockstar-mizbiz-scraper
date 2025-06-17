! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a9062d65-848d-4b07-a0ec-f092561503a1", e._sentryDebugIdIdentifier = "sentry-dbid-a9062d65-848d-4b07-a0ec-f092561503a1")
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
    40019: (e, t, a) => {
      a.r(t), a.d(t, {
        useGSAP: () => c
      });
      var n = a(62229),
        d = a(13581),
        o = a.n(d);
      let r = "undefined" != typeof document ? n.useLayoutEffect : n.useEffect,
        l = e => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        f = {},
        u = o();
      const c = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
          a = f;
        l(e) ? (a = e, e = null, t = "dependencies" in a ? a.dependencies : s) : l(t) && (a = t, t = "dependencies" in a ? a.dependencies : s), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: d,
          revertOnUpdate: o
        } = a, c = (0, n.useRef)(!1), i = (0, n.useRef)(u.context((() => {}), d)), b = (0, n.useRef)((e => i.current.add(null, e))), y = t && t.length && !o;
        return y && r((() => (c.current = !0, () => i.current.revert())), s), r((() => {
          if (e && i.current.add(e, d), !y || !c.current) return () => i.current.revert()
        }), t), {
          context: i.current,
          contextSafe: b.current
        }
      };
      c.register = e => {
        u = e
      }, c.headless = !0
    }
  }
]);