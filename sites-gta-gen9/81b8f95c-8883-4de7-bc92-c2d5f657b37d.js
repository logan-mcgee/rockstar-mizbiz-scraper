! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "81b8f95c-8883-4de7-bc92-c2d5f657b37d", e._sentryDebugIdIdentifier = "sentry-dbid-81b8f95c-8883-4de7-bc92-c2d5f657b37d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [7013, 9394], {
    67013: (e, n, t) => {
      t.r(n), t.d(n, {
        useGSAP: () => i
      });
      var d = t(62229),
        a = t(13581),
        o = t.n(a);
      let f = "undefined" != typeof window ? d.useLayoutEffect : d.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        r = [],
        l = {},
        c = o();
      const i = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
          t = l;
        s(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : r) : s(n) && (t = n, n = "dependencies" in t ? t.dependencies : r);
        let {
          scope: a,
          revertOnUpdate: o
        } = t, [i, b] = (0, d.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const u = c.context((() => {}), a),
          g = () => u.revert(),
          y = n && n.length && !o;
        return f((() => {
          if (e && u.add(e, a), !y || !i) return g
        }), n), y && f((() => (b(!0), g)), r), {
          context: u,
          contextSafe: e => u.add(null, e)
        }
      };
      i.register = e => {
        c = e
      }, i.headless = !0
    }
  }
]);