! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bae4caa5-94a5-41fb-b988-3bdd881fd8e5", e._sentryDebugIdIdentifier = "sentry-dbid-bae4caa5-94a5-41fb-b988-3bdd881fd8e5")
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
  [4869, 7250], {
    27250: (e, n, t) => {
      t.r(n), t.d(n, {
        useGSAP: () => c
      });
      var a = t(62229),
        d = t(13581),
        o = t.n(d);
      let f = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        r = [],
        l = {},
        i = o();
      const c = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
          t = l;
        s(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : r) : s(n) && (t = n, n = "dependencies" in t ? t.dependencies : r);
        let {
          scope: d,
          revertOnUpdate: o
        } = t, [c, u] = (0, a.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const b = i.context((() => {}), d),
          g = () => b.revert(),
          y = n && n.length && !o;
        return f((() => {
          if (e && b.add(e, d), !y || !c) return g
        }), n), y && f((() => (u(!0), g)), r), {
          context: b,
          contextSafe: e => b.add(null, e)
        }
      };
      c.register = e => {
        i = e
      }, c.headless = !0
    }
  }
]);