try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2391efd2-f632-4011-87cd-a94c62b4e782", e._sentryDebugIdIdentifier = "sentry-dbid-2391efd2-f632-4011-87cd-a94c62b4e782")
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
        useGSAP: () => c
      });
      var t = d(2229),
        r = d(3581),
        o = d.n(r);
      let a = "undefined" != typeof document ? t.useLayoutEffect : t.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        l = {},
        u = o();
      const c = (e, n = f) => {
        let d = l;
        s(e) ? (d = e, e = null, n = "dependencies" in d ? d.dependencies : f) : s(n) && (d = n, n = "dependencies" in d ? d.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: o
        } = d, c = (0, t.useRef)(!1), i = (0, t.useRef)(u.context((() => {}), r)), y = (0, t.useRef)((e => i.current.add(null, e))), p = n && n.length && !o;
        return p && a((() => (c.current = !0, () => i.current.revert())), f), a((() => {
          if (e && i.current.add(e, r), !p || !c.current) return () => i.current.revert()
        }), n), {
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