try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e4bab934-69fa-44e2-85ba-d9fa1b9bee67", e._sentryDebugIdIdentifier = "sentry-dbid-e4bab934-69fa-44e2-85ba-d9fa1b9bee67")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [204, 7823], {
    27823: (e, n, d) => {
      d.r(n), d.d(n, {
        useGSAP: () => u
      });
      var t = d(62229),
        r = d(13581),
        a = d.n(r);
      let o = "undefined" != typeof document ? t.useLayoutEffect : t.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        l = {},
        c = a();
      const u = (e, n = f) => {
        let d = l;
        s(e) ? (d = e, e = null, n = "dependencies" in d ? d.dependencies : f) : s(n) && (d = n, n = "dependencies" in d ? d.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: a
        } = d, u = (0, t.useRef)(!1), i = (0, t.useRef)(c.context((() => {}), r)), b = (0, t.useRef)((e => i.current.add(null, e))), y = n && n.length && !a;
        return y && o((() => (u.current = !0, () => i.current.revert())), f), o((() => {
          if (e && i.current.add(e, r), !y || !u.current) return () => i.current.revert()
        }), n), {
          context: i.current,
          contextSafe: b.current
        }
      };
      u.register = e => {
        c = e
      }, u.headless = !0
    }
  }
]);