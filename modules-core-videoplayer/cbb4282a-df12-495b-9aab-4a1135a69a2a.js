! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "cbb4282a-df12-495b-9aab-4a1135a69a2a", e._sentryDebugIdIdentifier = "sentry-dbid-cbb4282a-df12-495b-9aab-4a1135a69a2a")
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
  [4869, 7250], {
    27250: (e, d, n) => {
      n.r(d), n.d(d, {
        useGSAP: () => i
      });
      var a = n(62229),
        t = n(13581),
        o = n.n(t);
      let r = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        l = [],
        f = {},
        c = o();
      const i = function(e) {
        let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          n = f;
        s(e) ? (n = e, e = null, d = "dependencies" in n ? n.dependencies : l) : s(d) && (n = d, d = "dependencies" in n ? n.dependencies : l);
        let {
          scope: t,
          revertOnUpdate: o
        } = n, [i, b] = (0, a.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const u = c.context((() => {}), t),
          y = () => u.revert(),
          p = d && d.length && !o;
        return r((() => {
          if (e && u.add(e, t), !p || !i) return y
        }), d), p && r((() => (b(!0), y)), l), {
          context: u,
          contextSafe: e => u.add(null, e)
        }
      };
      i.register = e => {
        c = e
      }, i.headless = !0
    }
  }
]);