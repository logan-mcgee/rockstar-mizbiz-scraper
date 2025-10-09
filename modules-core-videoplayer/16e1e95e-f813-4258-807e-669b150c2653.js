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
        useGSAP: () => i
      });
      var d = t(2229),
        r = t(3581),
        o = t.n(r);
      let s = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        a = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        l = {},
        u = o();
      const i = (e, n = f) => {
        let t = l;
        a(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : f) : a(n) && (t = n, n = "dependencies" in t ? t.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: o
        } = t, i = (0, d.useRef)(!1), c = (0, d.useRef)(u.context((() => {}), r)), y = (0, d.useRef)((e => c.current.add(null, e))), p = n && n.length && !o;
        return p && s((() => (i.current = !0, () => c.current.revert())), f), s((() => {
          if (e && c.current.add(e, r), !p || !i.current) return () => c.current.revert()
        }), n), {
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