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
        useGSAP: () => c
      });
      var d = n(62229),
        t = n(13581),
        o = n.n(t);
      let r = "undefined" != typeof window ? d.useLayoutEffect : d.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        l = [],
        f = {},
        i = o();
      const c = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          n = f;
        s(e) ? (n = e, e = null, a = "dependencies" in n ? n.dependencies : l) : s(a) && (n = a, a = "dependencies" in n ? n.dependencies : l);
        let {
          scope: t,
          revertOnUpdate: o
        } = n, [c, u] = (0, d.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const b = i.context((() => {}), t),
          y = () => b.revert(),
          p = a && a.length && !o;
        return r((() => {
          if (e && b.add(e, t), !p || !c) return y
        }), a), p && r((() => (u(!0), y)), l), {
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