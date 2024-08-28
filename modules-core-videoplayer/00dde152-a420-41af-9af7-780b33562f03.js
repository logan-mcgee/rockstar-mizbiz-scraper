! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "00dde152-a420-41af-9af7-780b33562f03", e._sentryDebugIdIdentifier = "sentry-dbid-00dde152-a420-41af-9af7-780b33562f03")
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
  [658, 277], {
    3277: (e, d, n) => {
      n.r(d), n.d(d, {
        useGSAP: () => c
      });
      var t = n(1403),
        a = n(6040),
        o = n.n(a);
      let f = "undefined" != typeof window ? t.useLayoutEffect : t.useEffect,
        r = e => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        l = {},
        i = o();
      const c = function(e) {
        let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
          n = l;
        r(e) ? (n = e, e = null, d = "dependencies" in n ? n.dependencies : s) : r(d) && (n = d, d = "dependencies" in n ? n.dependencies : s);
        let {
          scope: a,
          revertOnUpdate: o
        } = n, [c, u] = (0, t.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const b = i.context((() => {}), a),
          y = () => b.revert(),
          p = d && d.length && !o;
        return f((() => {
          if (e && b.add(e, a), !p || !c) return y
        }), d), p && f((() => (u(!0), y)), s), {
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