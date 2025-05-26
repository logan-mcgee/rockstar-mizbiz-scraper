! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5b12d9fe-4594-401b-8749-692d84ae0531", e._sentryDebugIdIdentifier = "sentry-dbid-5b12d9fe-4594-401b-8749-692d84ae0531")
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
        useGSAP: () => c
      });
      var a = n(62229),
        d = n(13581),
        o = n.n(d);
      let r = "undefined" != typeof document ? a.useLayoutEffect : a.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        l = [],
        f = {},
        u = o();
      const c = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          n = f;
        s(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : l) : s(t) && (n = t, t = "dependencies" in n ? n.dependencies : l), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: d,
          revertOnUpdate: o
        } = n, c = (0, a.useRef)(!1), i = (0, a.useRef)(u.context((() => {}), d)), b = (0, a.useRef)((e => i.current.add(null, e))), y = t && t.length && !o;
        return y && r((() => (c.current = !0, () => i.current.revert())), l), r((() => {
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