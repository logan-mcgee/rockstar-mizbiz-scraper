try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a0360d33-18ca-490e-861d-7a5ab608e39a", e._sentryDebugIdIdentifier = "sentry-dbid-a0360d33-18ca-490e-861d-7a5ab608e39a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [1773, 4154], {
    4154: (e, n, t) => {
      t.r(n), t.d(n, {
        useGSAP: () => c
      });
      var a = t(2229),
        d = t(2828),
        r = t.n(d);
      let o = "undefined" != typeof document ? a.useLayoutEffect : a.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        l = {},
        u = r();
      const c = (e, n = f) => {
        let t = l;
        s(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : f) : s(n) && (t = n, n = "dependencies" in t ? t.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: d,
          revertOnUpdate: r
        } = t, c = (0, a.useRef)(!1), i = (0, a.useRef)(u.context(() => {}, d)), y = (0, a.useRef)(e => i.current.add(null, e)), p = n && n.length && !r;
        return p && o(() => (c.current = !0, () => i.current.revert()), f), o(() => {
          if (e && i.current.add(e, d), !p || !c.current) return () => i.current.revert()
        }, n), {
          context: i.current,
          contextSafe: y.current
        }
      };
      c.register = e => {
        u = e
      }, c.headless = !0
    }
  }
]);