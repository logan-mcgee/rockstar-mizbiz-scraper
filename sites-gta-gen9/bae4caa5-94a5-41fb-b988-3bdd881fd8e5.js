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
    27250: (e, n, d) => {
      d.r(n), d.d(n, {
        useGSAP: () => b
      });
      var t = d(62229),
        a = d(13581),
        o = d.n(a);
      let s = "undefined" != typeof window ? t.useLayoutEffect : t.useEffect,
        f = e => e && !Array.isArray(e) && "object" == typeof e,
        r = [],
        l = {},
        i = o();
      const b = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
          d = l;
        f(e) ? (d = e, e = null, n = "dependencies" in d ? d.dependencies : r) : f(n) && (d = n, n = "dependencies" in d ? d.dependencies : r);
        let {
          scope: a,
          revertOnUpdate: o
        } = d, [b, c] = (0, t.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const u = i.context((() => {}), a),
          g = () => u.revert(),
          y = n && n.length && !o;
        return s((() => {
          if (e && u.add(e, a), !y || !b) return g
        }), n), y && s((() => (c(!0), g)), r), {
          context: u,
          contextSafe: e => u.add(null, e)
        }
      };
      b.register = e => {
        i = e
      }, b.headless = !0
    }
  }
]);