try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "88bcb165-69f5-4905-a982-239a56ab9d34", e._sentryDebugIdIdentifier = "sentry-dbid-88bcb165-69f5-4905-a982-239a56ab9d34")
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
  [206, 825], {
    9206(e, n, t) {
      t.r(n);
      var d = t(3082),
        a = t(5812);
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
        } = t, u = (0, d.useRef)(!1), i = (0, d.useRef)(l.context(() => {}, a)), b = (0, d.useRef)(e => i.current.add(null, e)), y = n && n.length && !c;
        return y && r(() => (u.current = !0, () => i.current.revert()), s), r(() => {
          if (e && i.current.add(e, a), !y || !u.current) return () => i.current.revert()
        }, n), {
          context: i.current,
          contextSafe: b.current
        }
      };
      c.register = e => {
        l = e
      }, c.headless = !0, t.d(n, ["useGSAP", 0, c])
    }
  }
]);