! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b09c65eb-3000-4938-ba8b-9447ce51126a", e._sentryDebugIdIdentifier = "sentry-dbid-b09c65eb-3000-4938-ba8b-9447ce51126a")
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
  [296, 916], {
    84296: (e, n, d) => {
      d.r(n), d.d(n, {
        useGSAP: () => i
      });
      var t = d(51664),
        o = d(67356),
        a = d.n(o);
      let f = "undefined" != typeof window ? t.useLayoutEffect : t.useEffect,
        r = e => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        l = {},
        c = a();
      const i = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
          d = l;
        r(e) ? (d = e, e = null, n = "dependencies" in d ? d.dependencies : s) : r(n) && (d = n, n = "dependencies" in d ? d.dependencies : s);
        let {
          scope: o,
          revertOnUpdate: a
        } = d, [i, b] = (0, t.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const u = c.context((() => {}), o),
          y = () => u.revert(),
          p = n && n.length && !a;
        return f((() => {
          if (e && u.add(e, o), !p || !i) return y
        }), n), p && f((() => (b(!0), y)), s), {
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