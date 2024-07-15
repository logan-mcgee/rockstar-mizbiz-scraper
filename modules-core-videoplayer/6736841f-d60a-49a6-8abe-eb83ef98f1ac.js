! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6736841f-d60a-49a6-8abe-eb83ef98f1ac", e._sentryDebugIdIdentifier = "sentry-dbid-6736841f-d60a-49a6-8abe-eb83ef98f1ac")
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
    84296: (e, a, n) => {
      n.r(a), n.d(a, {
        useGSAP: () => u
      });
      var d = n(51664),
        t = n(67356),
        o = n.n(t);
      let r = "undefined" != typeof window ? d.useLayoutEffect : d.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        l = [],
        f = {},
        i = o();
      const u = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          n = f;
        s(e) ? (n = e, e = null, a = "dependencies" in n ? n.dependencies : l) : s(a) && (n = a, a = "dependencies" in n ? n.dependencies : l);
        let {
          scope: t,
          revertOnUpdate: o
        } = n, [u, c] = (0, d.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const b = i.context((() => {}), t),
          y = () => b.revert(),
          p = a && a.length && !o;
        return r((() => {
          if (e && b.add(e, t), !p || !u) return y
        }), a), p && r((() => (c(!0), y)), l), {
          context: b,
          contextSafe: e => b.add(null, e)
        }
      };
      u.register = e => {
        i = e
      }, u.headless = !0
    }
  }
]);