! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a950024a-feef-470b-b3ab-fa3c52aec5a8", e._sentryDebugIdIdentifier = "sentry-dbid-a950024a-feef-470b-b3ab-fa3c52aec5a8")
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
  [4296, 1916], {
    84296: (e, n, t) => {
      t.r(n), t.d(n, {
        useGSAP: () => i
      });
      var a = t(51664),
        d = t(67356),
        o = t.n(d);
      let s = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        f = e => e && !Array.isArray(e) && "object" == typeof e,
        r = [],
        l = {},
        c = o();
      const i = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
          t = l;
        f(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : r) : f(n) && (t = n, n = "dependencies" in t ? t.dependencies : r);
        let {
          scope: d,
          revertOnUpdate: o
        } = t, [i, b] = (0, a.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const u = c.context((() => {}), d),
          g = () => u.revert(),
          y = n && n.length && !o;
        return s((() => {
          if (e && u.add(e, d), !y || !i) return g
        }), n), y && s((() => (b(!0), g)), r), {
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