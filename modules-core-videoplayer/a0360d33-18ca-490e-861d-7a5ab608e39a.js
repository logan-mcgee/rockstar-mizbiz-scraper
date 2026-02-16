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
    4154: (e, n, d) => {
      d.r(n), d.d(n, {
        useGSAP: () => i
      });
      var t = d(2229),
        r = d(2828),
        a = d.n(r);
      let o = "undefined" != typeof document ? t.useLayoutEffect : t.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        l = {},
        u = a();
      const i = (e, n = f) => {
        let d = l;
        s(e) ? (d = e, e = null, n = "dependencies" in d ? d.dependencies : f) : s(n) && (d = n, n = "dependencies" in d ? d.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: a
        } = d, i = (0, t.useRef)(!1), c = (0, t.useRef)(u.context(() => {}, r)), y = (0, t.useRef)(e => c.current.add(null, e)), p = n && n.length && !a;
        return p && o(() => (i.current = !0, () => c.current.revert()), f), o(() => {
          if (e && c.current.add(e, r), !p || !i.current) return () => c.current.revert()
        }, n), {
          context: c.current,
          contextSafe: y.current
        }
      };
      i.register = e => {
        u = e
      }, i.headless = !0
    }
  }
]);