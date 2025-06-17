! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9feca7f4-374d-4e59-8395-704f195504b3", e._sentryDebugIdIdentifier = "sentry-dbid-9feca7f4-374d-4e59-8395-704f195504b3")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [19, 2400], {
    40019: (e, t, n) => {
      n.r(t), n.d(t, {
        useGSAP: () => i
      });
      var a = n(62229),
        d = n(13581),
        o = n.n(d);
      let r = "undefined" != typeof document ? a.useLayoutEffect : a.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        l = [],
        f = {},
        u = o();
      const i = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          n = f;
        s(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : l) : s(t) && (n = t, t = "dependencies" in n ? n.dependencies : l), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: d,
          revertOnUpdate: o
        } = n, i = (0, a.useRef)(!1), c = (0, a.useRef)(u.context((() => {}), d)), b = (0, a.useRef)((e => c.current.add(null, e))), y = t && t.length && !o;
        return y && r((() => (i.current = !0, () => c.current.revert())), l), r((() => {
          if (e && c.current.add(e, d), !y || !i.current) return () => c.current.revert()
        }), t), {
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