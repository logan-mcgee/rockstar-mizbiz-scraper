try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "366d0abd-c125-4107-a803-66abc933c012", e._sentryDebugIdIdentifier = "sentry-dbid-366d0abd-c125-4107-a803-66abc933c012")
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
        useGSAP: () => u
      });
      var t = d(2229),
        r = d(2828),
        o = d.n(r);
      let a = "undefined" != typeof document ? t.useLayoutEffect : t.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        l = {},
        c = o();
      const u = (e, n = f) => {
        let d = l;
        s(e) ? (d = e, e = null, n = "dependencies" in d ? d.dependencies : f) : s(n) && (d = n, n = "dependencies" in d ? d.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: o
        } = d, u = (0, t.useRef)(!1), i = (0, t.useRef)(c.context(() => {}, r)), y = (0, t.useRef)(e => i.current.add(null, e)), b = n && n.length && !o;
        return b && a(() => (u.current = !0, () => i.current.revert()), f), a(() => {
          if (e && i.current.add(e, r), !b || !u.current) return () => i.current.revert()
        }, n), {
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