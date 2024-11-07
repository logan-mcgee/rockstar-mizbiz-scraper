! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "46ee8e11-1e09-457a-990e-24397bf6eb10", e._sentryDebugIdIdentifier = "sentry-dbid-46ee8e11-1e09-457a-990e-24397bf6eb10")
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
  [5658, 3277], {
    83277: (e, n, t) => {
      t.r(n), t.d(n, {
        useGSAP: () => c
      });
      var a = t(71403),
        d = t(26040),
        o = t.n(d);
      let s = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        f = e => e && !Array.isArray(e) && "object" == typeof e,
        r = [],
        l = {},
        i = o();
      const c = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
          t = l;
        f(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : r) : f(n) && (t = n, n = "dependencies" in t ? t.dependencies : r);
        let {
          scope: d,
          revertOnUpdate: o
        } = t, [c, u] = (0, a.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const b = i.context((() => {}), d),
          g = () => b.revert(),
          y = n && n.length && !o;
        return s((() => {
          if (e && b.add(e, d), !y || !c) return g
        }), n), y && s((() => (u(!0), g)), r), {
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