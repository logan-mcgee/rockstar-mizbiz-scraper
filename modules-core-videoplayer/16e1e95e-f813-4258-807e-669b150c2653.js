try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "16e1e95e-f813-4258-807e-669b150c2653", e._sentryDebugIdIdentifier = "sentry-dbid-16e1e95e-f813-4258-807e-669b150c2653")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [1773, 4154], {
    4154: (e, n, t) => {
      t.r(n), t.d(n, {
        useGSAP: () => u
      });
      var d = t(2229),
        r = t(3581),
        o = t.n(r);
      let s = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        a = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        l = {},
        c = o();
      const u = (e, n = f) => {
        let t = l;
        a(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : f) : a(n) && (t = n, n = "dependencies" in t ? t.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: o
        } = t, u = (0, d.useRef)(!1), i = (0, d.useRef)(c.context((() => {}), r)), y = (0, d.useRef)((e => i.current.add(null, e))), p = n && n.length && !o;
        return p && s((() => (u.current = !0, () => i.current.revert())), f), s((() => {
          if (e && i.current.add(e, r), !p || !u.current) return () => i.current.revert()
        }), n), {
          context: i.current,
          contextSafe: y.current
        }
      };
      u.register = e => {
        c = e
      }, u.headless = !0
    }
  }
]);