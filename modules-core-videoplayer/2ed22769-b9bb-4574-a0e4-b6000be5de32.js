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
        useGSAP: () => c
      });
      var d = t(3082),
        r = t(5812);
      let o = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        a = [],
        f = {},
        l = r.default;
      const c = (e, n = a) => {
        let t = f;
        s(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : a) : s(n) && (t = n, n = "dependencies" in t ? t.dependencies : a), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: c
        } = t, u = (0, d.useRef)(!1), i = (0, d.useRef)(l.context(() => {}, r)), b = (0, d.useRef)(e => i.current.add(null, e)), y = n && n.length && !c;
        return y && o(() => (u.current = !0, () => i.current.revert()), a), o(() => {
          if (e && i.current.add(e, r), !y || !u.current) return () => i.current.revert()
        }, n), {
          context: i.current,
          contextSafe: b.current
        }
      };
      c.register = e => {
        l = e
      }, c.headless = !0
    }
  }
]);