! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "601e8fb2-c6d4-488d-afdf-6a160e090863", e._sentryDebugIdIdentifier = "sentry-dbid-601e8fb2-c6d4-488d-afdf-6a160e090863")
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
  [9394, 7013], {
    67013: (e, n, a) => {
      a.r(n), a.d(n, {
        useGSAP: () => c
      });
      var t = a(62229),
        d = a(13581),
        o = a.n(d);
      let s = "undefined" != typeof window ? t.useLayoutEffect : t.useEffect,
        f = e => e && !Array.isArray(e) && "object" == typeof e,
        r = [],
        l = {},
        i = o();
      const c = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
          a = l;
        f(e) ? (a = e, e = null, n = "dependencies" in a ? a.dependencies : r) : f(n) && (a = n, n = "dependencies" in a ? a.dependencies : r);
        let {
          scope: d,
          revertOnUpdate: o
        } = a, [c, u] = (0, t.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const g = i.context((() => {}), d),
          b = () => g.revert(),
          y = n && n.length && !o;
        return s((() => {
          if (e && g.add(e, d), !y || !c) return b
        }), n), y && s((() => (u(!0), b)), r), {
          context: g,
          contextSafe: e => g.add(null, e)
        }
      };
      c.register = e => {
        i = e
      }, c.headless = !0
    }
  }
]);