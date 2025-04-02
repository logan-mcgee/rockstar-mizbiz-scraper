! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "94593f8c-f77a-4ef1-ac0d-904541ed4580", e._sentryDebugIdIdentifier = "sentry-dbid-94593f8c-f77a-4ef1-ac0d-904541ed4580")
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
    27250: (e, d, n) => {
      n.r(d), n.d(d, {
        useGSAP: () => i
      });
      var t = n(62229),
        a = n(13581),
        o = n.n(a);
      let r = "undefined" != typeof window ? t.useLayoutEffect : t.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        l = [],
        f = {},
        c = o();
      const i = function(e) {
        let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          n = f;
        s(e) ? (n = e, e = null, d = "dependencies" in n ? n.dependencies : l) : s(d) && (n = d, d = "dependencies" in n ? n.dependencies : l);
        let {
          scope: a,
          revertOnUpdate: o
        } = n, [i, u] = (0, t.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const y = c.context((() => {}), a),
          p = () => y.revert(),
          b = d && d.length && !o;
        return r((() => {
          if (e && y.add(e, a), !b || !i) return p
        }), d), b && r((() => (u(!0), p)), l), {
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