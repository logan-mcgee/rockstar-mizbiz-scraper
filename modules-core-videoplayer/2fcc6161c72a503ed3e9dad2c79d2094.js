! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6736841f-d60a-49a6-8abe-eb83ef98f1ac", e._sentryDebugIdIdentifier = "sentry-dbid-6736841f-d60a-49a6-8abe-eb83ef98f1ac")
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
  [916, 296], {
    84296: (e, n, a) => {
      a.r(n), a.d(n, {
        useGSAP: () => c
      });
      var t = a(51664),
        d = a(67356),
        o = a.n(d);
      let f = "undefined" != typeof window ? t.useLayoutEffect : t.useEffect,
        r = e => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        l = {},
        i = o();
      const c = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
          a = l;
        r(e) ? (a = e, e = null, n = "dependencies" in a ? a.dependencies : s) : r(n) && (a = n, n = "dependencies" in a ? a.dependencies : s);
        let {
          scope: d,
          revertOnUpdate: o
        } = a, [c, u] = (0, t.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const b = i.context((() => {}), d),
          y = () => b.revert(),
          p = n && n.length && !o;
        return f((() => {
          if (e && b.add(e, d), !p || !c) return y
        }), n), p && f((() => (u(!0), y)), s), {
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