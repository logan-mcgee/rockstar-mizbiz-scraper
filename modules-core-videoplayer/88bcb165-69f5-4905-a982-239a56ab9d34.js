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
    9206(e, n, d) {
      d.r(n);
      var t = d(3082),
        a = d(5812);
      let r = "undefined" != typeof document ? t.useLayoutEffect : t.useEffect,
        o = e => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        l = {},
        f = a.default;
      const u = (e, n = s) => {
        let d = l;
        o(e) ? (d = e, e = null, n = "dependencies" in d ? d.dependencies : s) : o(n) && (d = n, n = "dependencies" in d ? d.dependencies : s), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: a,
          revertOnUpdate: u
        } = d, i = (0, t.useRef)(!1), c = (0, t.useRef)(f.context(() => {}, a)), b = (0, t.useRef)(e => c.current.add(null, e)), y = n && n.length && !u;
        return y && r(() => (i.current = !0, () => c.current.revert()), s), r(() => {
          if (e && c.current.add(e, a), !y || !i.current) return () => c.current.revert()
        }, n), {
          context: c.current,
          contextSafe: b.current
        }
      };
      u.register = e => {
        f = e
      }, u.headless = !0, d.d(n, ["useGSAP", 0, u])
    }
  }
]);