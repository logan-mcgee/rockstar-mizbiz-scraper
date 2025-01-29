! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "fdb6f60d-354f-448e-98d4-593540e77c2d", e._sentryDebugIdIdentifier = "sentry-dbid-fdb6f60d-354f-448e-98d4-593540e77c2d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [394, 13], {
    7013: (e, d, n) => {
      n.r(d), n.d(d, {
        useGSAP: () => i
      });
      var a = n(2229),
        t = n(3581),
        o = n.n(t);
      let f = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        r = e => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        l = {},
        c = o();
      const i = function(e) {
        let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
          n = l;
        r(e) ? (n = e, e = null, d = "dependencies" in n ? n.dependencies : s) : r(d) && (n = d, d = "dependencies" in n ? n.dependencies : s);
        let {
          scope: t,
          revertOnUpdate: o
        } = n, [i, u] = (0, a.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const b = c.context((() => {}), t),
          y = () => b.revert(),
          p = d && d.length && !o;
        return f((() => {
          if (e && b.add(e, t), !p || !i) return y
        }), d), p && f((() => (u(!0), y)), s), {
          context: b,
          contextSafe: e => b.add(null, e)
        }
      };
      i.register = e => {
        c = e
      }, i.headless = !0
    }
  }
]);