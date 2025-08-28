try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e4bab934-69fa-44e2-85ba-d9fa1b9bee67", e._sentryDebugIdIdentifier = "sentry-dbid-e4bab934-69fa-44e2-85ba-d9fa1b9bee67")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [204, 7823], {
    27823: (e, n, t) => {
      t.r(n), t.d(n, {
        useGSAP: () => c
      });
      var d = t(62229),
        a = t(13581),
        r = t.n(a);
      let o = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        l = {},
        u = r();
      const c = (e, n = f) => {
        let t = l;
        s(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : f) : s(n) && (t = n, n = "dependencies" in t ? t.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: a,
          revertOnUpdate: r
        } = t, c = (0, d.useRef)(!1), i = (0, d.useRef)(u.context((() => {}), a)), b = (0, d.useRef)((e => i.current.add(null, e))), y = n && n.length && !r;
        return y && o((() => (c.current = !0, () => i.current.revert())), f), o((() => {
          if (e && i.current.add(e, a), !y || !c.current) return () => i.current.revert()
        }), n), {
          context: i.current,
          contextSafe: b.current
        }
      };
      c.register = e => {
        u = e
      }, c.headless = !0
    }
  }
]);