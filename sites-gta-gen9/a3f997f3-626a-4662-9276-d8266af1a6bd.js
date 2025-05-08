! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a3f997f3-626a-4662-9276-d8266af1a6bd", e._sentryDebugIdIdentifier = "sentry-dbid-a3f997f3-626a-4662-9276-d8266af1a6bd")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [7250, 4869], {
    27250: (e, n, t) => {
      t.r(n), t.d(n, {
        useGSAP: () => c
      });
      var a = t(62229),
        d = t(13581),
        f = t.n(d);
      let o = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        r = [],
        l = {},
        i = f();
      const c = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
          t = l;
        s(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : r) : s(n) && (t = n, n = "dependencies" in t ? t.dependencies : r);
        let {
          scope: d,
          revertOnUpdate: f
        } = t, [c, u] = (0, a.useState)(!1);
        e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const g = i.context((() => {}), d),
          b = () => g.revert(),
          y = n && n.length && !f;
        return o((() => {
          if (e && g.add(e, d), !y || !c) return b
        }), n), y && o((() => (u(!0), b)), r), {
          context: g,
          contextSafe: e => g.add(null, e)
        }
      };
      c.register = e => {
        i = e
      }, c.headless = !0
    }
  }
]);