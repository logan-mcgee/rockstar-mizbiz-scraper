try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "16e1e95e-f813-4258-807e-669b150c2653", e._sentryDebugIdIdentifier = "sentry-dbid-16e1e95e-f813-4258-807e-669b150c2653")
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
      var d = t(2229),
        r = t(3581),
        a = t.n(r);
      let o = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        l = {},
        u = a();
      const c = (e, n = f) => {
        let t = l;
        s(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : f) : s(n) && (t = n, n = "dependencies" in t ? t.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: a
        } = t, c = (0, d.useRef)(!1), i = (0, d.useRef)(u.context((() => {}), r)), y = (0, d.useRef)((e => i.current.add(null, e))), p = n && n.length && !a;
        return p && o((() => (c.current = !0, () => i.current.revert())), f), o((() => {
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