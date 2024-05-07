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
        useGSAP: () => i
      });
      var d = a(51664),
        t = a(67356),
        o = a.n(t);
      let r = "undefined" != typeof window ? d.useLayoutEffect : d.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        l = [],
        f = {},
        c = o();
      const i = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          a = f;
        s(e) ? (a = e, e = null, n = "dependencies" in a ? a.dependencies : l) : s(n) && (a = n, n = "dependencies" in a ? a.dependencies : l);
        let {
          scope: t,
          revertOnUpdate: o
        } = a, [i, u] = (0, d.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const b = c.context((() => {}), t),
          y = () => b.revert(),
          p = n && n.length && !o;
        return r((() => {
          if (e && b.add(e, t), !p || !i) return y
        }), n), p && r((() => (u(!0), y)), l), {
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