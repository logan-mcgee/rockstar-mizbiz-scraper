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
    84296: (e, n, t) => {
      t.r(n), t.d(n, {
        useGSAP: () => i
      });
      var a = t(51664),
        d = t(67356),
        o = t.n(d);
      let r = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        l = [],
        c = {},
        f = o();
      const i = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          t = c;
        s(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : l) : s(n) && (t = n, n = "dependencies" in t ? t.dependencies : l);
        let {
          scope: d,
          revertOnUpdate: o
        } = t, [i, b] = (0, a.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const u = f.context((() => {}), d),
          y = () => u.revert(),
          p = n && n.length && !o;
        return r((() => {
          if (e && u.add(e, d), !p || !i) return y
        }), n), p && r((() => (b(!0), y)), l), {
          context: u,
          contextSafe: e => u.add(null, e)
        }
      };
      i.register = e => {
        f = e
      }, i.headless = !0
    }
  }
]);