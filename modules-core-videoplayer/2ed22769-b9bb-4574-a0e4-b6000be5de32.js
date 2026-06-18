try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2ed22769-b9bb-4574-a0e4-b6000be5de32", e._sentryDebugIdIdentifier = "sentry-dbid-2ed22769-b9bb-4574-a0e4-b6000be5de32")
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
      t.r(n), t.d(n, {
        useGSAP: () => u
      });
      var d = t(3082),
        r = t(5812);
      let o = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        a = e => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        l = {},
        f = r.default;
      const u = (e, n = s) => {
        let t = l;
        a(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : s) : a(n) && (t = n, n = "dependencies" in t ? t.dependencies : s), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: u
        } = t, i = (0, d.useRef)(!1), b = (0, d.useRef)(f.context(() => {}, r)), c = (0, d.useRef)(e => b.current.add(null, e)), y = n && n.length && !u;
        return y && o(() => (i.current = !0, () => b.current.revert()), s), o(() => {
          if (e && b.current.add(e, r), !y || !i.current) return () => b.current.revert()
        }, n), {
          context: b.current,
          contextSafe: c.current
        }
      };
      u.register = e => {
        f = e
      }, u.headless = !0
    }
  }
]);