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
        useGSAP: () => u
      });
      var a = n(1403),
        t = n(6040),
        o = n.n(t);
      let r = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        l = [],
        f = {},
        i = o();
      const u = function(e) {
        let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          n = f;
        s(e) ? (n = e, e = null, d = "dependencies" in n ? n.dependencies : l) : s(d) && (n = d, d = "dependencies" in n ? n.dependencies : l);
        let {
          scope: t,
          revertOnUpdate: o
        } = n, [u, b] = (0, a.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const c = i.context((() => {}), t),
          y = () => c.revert(),
          p = d && d.length && !o;
        return r((() => {
          if (e && c.add(e, t), !p || !u) return y
        }), d), p && r((() => (b(!0), y)), l), {
          context: c,
          contextSafe: e => c.add(null, e)
        }
      };
      u.register = e => {
        i = e
      }, u.headless = !0
    }
  }
]);