try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a6aa896b-83f7-4ec0-9b28-9366cff9d767", e._sentryDebugIdIdentifier = "sentry-dbid-a6aa896b-83f7-4ec0-9b28-9366cff9d767")
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
  [6825, 9206], {
    99206(e, n, t) {
      t.r(n), t.d(n, {
        useGSAP: () => c
      });
      var d = t(93082),
        a = t(35812);
      let r = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        o = e => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        f = {},
        l = a.default;
      const c = (e, n = s) => {
        let t = f;
        o(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : s) : o(n) && (t = n, n = "dependencies" in t ? t.dependencies : s), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: a,
          revertOnUpdate: c
        } = t, u = (0, d.useRef)(!1), i = (0, d.useRef)(l.context(() => {}, a)), y = (0, d.useRef)(e => i.current.add(null, e)), b = n && n.length && !c;
        return b && r(() => (u.current = !0, () => i.current.revert()), s), r(() => {
          if (e && i.current.add(e, a), !b || !u.current) return () => i.current.revert()
        }, n), {
          context: i.current,
          contextSafe: y.current
        }
      };
      c.register = e => {
        l = e
      }, c.headless = !0
    }
  }
]);