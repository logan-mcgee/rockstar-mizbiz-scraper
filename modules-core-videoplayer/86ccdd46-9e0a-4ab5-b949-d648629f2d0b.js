! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "86ccdd46-9e0a-4ab5-b949-d648629f2d0b", e._sentryDebugIdIdentifier = "sentry-dbid-86ccdd46-9e0a-4ab5-b949-d648629f2d0b")
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
  [277, 658], {
    3277: (e, d, n) => {
      n.r(d), n.d(d, {
        useGSAP: () => c
      });
      var t = n(1403),
        o = n(6040),
        a = n.n(o);
      let r = "undefined" != typeof window ? t.useLayoutEffect : t.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        l = [],
        f = {},
        i = a();
      const c = function(e) {
        let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          n = f;
        s(e) ? (n = e, e = null, d = "dependencies" in n ? n.dependencies : l) : s(d) && (n = d, d = "dependencies" in n ? n.dependencies : l);
        let {
          scope: o,
          revertOnUpdate: a
        } = n, [c, u] = (0, t.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const b = i.context((() => {}), o),
          y = () => b.revert(),
          p = d && d.length && !a;
        return r((() => {
          if (e && b.add(e, o), !p || !c) return y
        }), d), p && r((() => (u(!0), y)), l), {
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