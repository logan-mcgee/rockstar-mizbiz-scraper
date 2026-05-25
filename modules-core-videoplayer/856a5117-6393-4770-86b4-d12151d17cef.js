try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "856a5117-6393-4770-86b4-d12151d17cef", e._sentryDebugIdIdentifier = "sentry-dbid-856a5117-6393-4770-86b4-d12151d17cef")
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
        useGSAP: () => u
      });
      var d = t(93082),
        r = t(35812);
      let a = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        o = e => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        f = {},
        l = r.default;
      const u = (e, n = s) => {
        let t = f;
        o(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : s) : o(n) && (t = n, n = "dependencies" in t ? t.dependencies : s), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: u
        } = t, c = (0, d.useRef)(!1), i = (0, d.useRef)(l.context(() => {}, r)), y = (0, d.useRef)(e => i.current.add(null, e)), p = n && n.length && !u;
        return p && a(() => (c.current = !0, () => i.current.revert()), s), a(() => {
          if (e && i.current.add(e, r), !p || !c.current) return () => i.current.revert()
        }, n), {
          context: i.current,
          contextSafe: y.current
        }
      };
      u.register = e => {
        l = e
      }, u.headless = !0
    }
  }
]);