! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bb2316a6-b555-4a12-acdd-39826192d3e3", e._sentryDebugIdIdentifier = "sentry-dbid-bb2316a6-b555-4a12-acdd-39826192d3e3")
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
  [13, 394], {
    7013: (e, a, d) => {
      d.r(a), d.d(a, {
        useGSAP: () => i
      });
      var n = d(2229),
        t = d(3581),
        o = d.n(t);
      let r = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        l = [],
        f = {},
        c = o();
      const i = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          d = f;
        s(e) ? (d = e, e = null, a = "dependencies" in d ? d.dependencies : l) : s(a) && (d = a, a = "dependencies" in d ? d.dependencies : l);
        let {
          scope: t,
          revertOnUpdate: o
        } = d, [i, u] = (0, n.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const b = c.context((() => {}), t),
          y = () => b.revert(),
          p = a && a.length && !o;
        return r((() => {
          if (e && b.add(e, t), !p || !i) return y
        }), a), p && r((() => (u(!0), y)), l), {
          context: b,
          contextSafe: e => b.add(null, e)
        }
      };
      i.register = e => {
        c = e
      }, i.headless = !0
    }
  }
]);