! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "cbb4282a-df12-495b-9aab-4a1135a69a2a", e._sentryDebugIdIdentifier = "sentry-dbid-cbb4282a-df12-495b-9aab-4a1135a69a2a")
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
    27250: (e, a, n) => {
      n.r(a), n.d(a, {
        useGSAP: () => i
      });
      var d = n(62229),
        t = n(13581),
        o = n.n(t);
      let f = "undefined" != typeof window ? d.useLayoutEffect : d.useEffect,
        r = e => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        l = {},
        c = o();
      const i = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
          n = l;
        r(e) ? (n = e, e = null, a = "dependencies" in n ? n.dependencies : s) : r(a) && (n = a, a = "dependencies" in n ? n.dependencies : s);
        let {
          scope: t,
          revertOnUpdate: o
        } = n, [i, b] = (0, d.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const u = c.context((() => {}), t),
          y = () => u.revert(),
          p = a && a.length && !o;
        return f((() => {
          if (e && u.add(e, t), !p || !i) return y
        }), a), p && f((() => (b(!0), y)), s), {
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