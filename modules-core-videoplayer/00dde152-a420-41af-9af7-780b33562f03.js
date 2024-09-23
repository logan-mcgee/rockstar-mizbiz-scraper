! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "00dde152-a420-41af-9af7-780b33562f03", e._sentryDebugIdIdentifier = "sentry-dbid-00dde152-a420-41af-9af7-780b33562f03")
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
    3277: (e, n, d) => {
      d.r(n), d.d(n, {
        useGSAP: () => u
      });
      var t = d(1403),
        a = d(6040),
        o = d.n(a);
      let f = "undefined" != typeof window ? t.useLayoutEffect : t.useEffect,
        r = e => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        l = {},
        i = o();
      const u = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
          d = l;
        r(e) ? (d = e, e = null, n = "dependencies" in d ? d.dependencies : s) : r(n) && (d = n, n = "dependencies" in d ? d.dependencies : s);
        let {
          scope: a,
          revertOnUpdate: o
        } = d, [u, c] = (0, t.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const b = i.context((() => {}), a),
          y = () => b.revert(),
          p = n && n.length && !o;
        return f((() => {
          if (e && b.add(e, a), !p || !u) return y
        }), n), p && f((() => (c(!0), y)), s), {
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