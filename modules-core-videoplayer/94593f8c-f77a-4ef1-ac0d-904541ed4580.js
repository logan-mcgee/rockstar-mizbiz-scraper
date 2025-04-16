! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "94593f8c-f77a-4ef1-ac0d-904541ed4580", e._sentryDebugIdIdentifier = "sentry-dbid-94593f8c-f77a-4ef1-ac0d-904541ed4580")
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
  [7250, 4869], {
    27250: (e, n, d) => {
      d.r(n), d.d(n, {
        useGSAP: () => i
      });
      var t = d(62229),
        a = d(13581),
        o = d.n(a);
      let r = "undefined" != typeof window ? t.useLayoutEffect : t.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        l = [],
        f = {},
        c = o();
      const i = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          d = f;
        s(e) ? (d = e, e = null, n = "dependencies" in d ? d.dependencies : l) : s(n) && (d = n, n = "dependencies" in d ? d.dependencies : l);
        let {
          scope: a,
          revertOnUpdate: o
        } = d, [i, u] = (0, t.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const y = c.context((() => {}), a),
          p = () => y.revert(),
          g = n && n.length && !o;
        return r((() => {
          if (e && y.add(e, a), !g || !i) return p
        }), n), g && r((() => (u(!0), p)), l), {
          context: y,
          contextSafe: e => y.add(null, e)
        }
      };
      i.register = e => {
        c = e
      }, i.headless = !0
    }
  }
]);