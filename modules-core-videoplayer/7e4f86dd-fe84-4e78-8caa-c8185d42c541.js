try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "7e4f86dd-fe84-4e78-8caa-c8185d42c541", e._sentryDebugIdIdentifier = "sentry-dbid-7e4f86dd-fe84-4e78-8caa-c8185d42c541")
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
    9206(e, d, n) {
      n.r(d);
      var t = n(3082),
        r = n(3431);
      let o = "undefined" != typeof document ? t.useLayoutEffect : t.useEffect,
        a = e => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        f = {},
        l = r.default;
      const c = (e, d = s) => {
        let n = f;
        a(e) ? (n = e, e = null, d = "dependencies" in n ? n.dependencies : s) : a(d) && (n = d, d = "dependencies" in n ? n.dependencies : s), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: c
        } = n, u = (0, t.useRef)(!1), i = (0, t.useRef)(l.context(() => {}, r)), y = (0, t.useRef)(e => i.current.add(null, e)), p = d && d.length && !c;
        return p && o(() => (u.current = !0, () => i.current.revert()), s), o(() => {
          if (e && i.current.add(e, r), !p || !u.current) return () => i.current.revert()
        }, d), {
          context: i.current,
          contextSafe: y.current
        }
      };
      c.register = e => {
        l = e
      }, c.headless = !0, n.d(d, ["useGSAP", 0, c])
    }
  }
]);