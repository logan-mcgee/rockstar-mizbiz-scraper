try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "3a037192-0387-4d21-9175-6b9bed5d7339", e._sentryDebugIdIdentifier = "sentry-dbid-3a037192-0387-4d21-9175-6b9bed5d7339")
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
    27823: (e, d, n) => {
      n.r(d), n.d(d, {
        useGSAP: () => u
      });
      var t = n(62229),
        r = n(13581),
        o = n.n(r);
      let s = "undefined" != typeof document ? t.useLayoutEffect : t.useEffect,
        a = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        l = {},
        c = o();
      const u = (e, d = f) => {
        let n = l;
        a(e) ? (n = e, e = null, d = "dependencies" in n ? n.dependencies : f) : a(d) && (n = d, d = "dependencies" in n ? n.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: o
        } = n, u = (0, t.useRef)(!1), i = (0, t.useRef)(c.context((() => {}), r)), y = (0, t.useRef)((e => i.current.add(null, e))), p = d && d.length && !o;
        return p && s((() => (u.current = !0, () => i.current.revert())), f), s((() => {
          if (e && i.current.add(e, r), !p || !u.current) return () => i.current.revert()
        }), d), {
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