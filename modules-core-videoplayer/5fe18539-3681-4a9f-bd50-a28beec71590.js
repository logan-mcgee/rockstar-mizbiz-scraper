try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5fe18539-3681-4a9f-bd50-a28beec71590", e._sentryDebugIdIdentifier = "sentry-dbid-5fe18539-3681-4a9f-bd50-a28beec71590")
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
    9206(e, n, t) {
      t.r(n);
      var d = t(3082),
        r = t(3431);
      let o = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        a = e => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        f = {},
        l = r.default;
      const u = (e, n = s) => {
        let t = f;
        a(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : s) : a(n) && (t = n, n = "dependencies" in t ? t.dependencies : s), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: u
        } = t, i = (0, d.useRef)(!1), c = (0, d.useRef)(l.context(() => {}, r)), y = (0, d.useRef)(e => c.current.add(null, e)), p = n && n.length && !u;
        return p && o(() => (i.current = !0, () => c.current.revert()), s), o(() => {
          if (e && c.current.add(e, r), !p || !i.current) return () => c.current.revert()
        }, n), {
          context: c.current,
          contextSafe: y.current
        }
      };
      u.register = e => {
        l = e
      }, u.headless = !0, t.d(n, ["useGSAP", 0, u])
    }
  }
]);