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
        o = d(6040),
        a = d.n(o);
      let r = "undefined" != typeof window ? t.useLayoutEffect : t.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        l = [],
        f = {},
        i = a();
      const u = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          d = f;
        s(e) ? (d = e, e = null, n = "dependencies" in d ? d.dependencies : l) : s(n) && (d = n, n = "dependencies" in d ? d.dependencies : l);
        let {
          scope: o,
          revertOnUpdate: a
        } = d, [u, c] = (0, t.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const b = i.context((() => {}), o),
          y = () => b.revert(),
          p = n && n.length && !a;
        return r((() => {
          if (e && b.add(e, o), !p || !u) return y
        }), n), p && r((() => (c(!0), y)), l), {
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