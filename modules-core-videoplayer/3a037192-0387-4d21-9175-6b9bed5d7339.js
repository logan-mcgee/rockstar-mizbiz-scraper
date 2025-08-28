try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3a037192-0387-4d21-9175-6b9bed5d7339", e._sentryDebugIdIdentifier = "sentry-dbid-3a037192-0387-4d21-9175-6b9bed5d7339")
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
    27823: (e, n, d) => {
      d.r(n), d.d(n, {
        useGSAP: () => c
      });
      var t = d(62229),
        r = d(13581),
        a = d.n(r);
      let o = "undefined" != typeof document ? t.useLayoutEffect : t.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        l = {},
        u = a();
      const c = (e, n = f) => {
        let d = l;
        s(e) ? (d = e, e = null, n = "dependencies" in d ? d.dependencies : f) : s(n) && (d = n, n = "dependencies" in d ? d.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: a
        } = d, c = (0, t.useRef)(!1), i = (0, t.useRef)(u.context((() => {}), r)), b = (0, t.useRef)((e => i.current.add(null, e))), y = n && n.length && !a;
        return y && o((() => (c.current = !0, () => i.current.revert())), f), o((() => {
          if (e && i.current.add(e, r), !y || !c.current) return () => i.current.revert()
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