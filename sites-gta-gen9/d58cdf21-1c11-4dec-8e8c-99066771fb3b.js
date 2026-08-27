try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d58cdf21-1c11-4dec-8e8c-99066771fb3b", e._sentryDebugIdIdentifier = "sentry-dbid-d58cdf21-1c11-4dec-8e8c-99066771fb3b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [6825, 9206], {
    99206(e, t, n) {
      n.r(t);
      var d = n(93082),
        s = n(35812);
      let r = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        a = e => e && !Array.isArray(e) && "object" == typeof e,
        o = [],
        f = {},
        c = s.default;
      const l = (e, t = o) => {
        let n = f;
        a(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : o) : a(t) && (n = t, t = "dependencies" in n ? n.dependencies : o), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: s,
          revertOnUpdate: l
        } = n, i = (0, d.useRef)(!1), u = (0, d.useRef)(c.context(() => {}, s)), g = (0, d.useRef)(e => u.current.add(null, e)), b = t && t.length && !l;
        return b && r(() => (i.current = !0, () => u.current.revert()), o), r(() => {
          if (e && u.current.add(e, s), !b || !i.current) return () => u.current.revert()
        }, t), {
          context: u.current,
          contextSafe: g.current
        }
      };
      l.register = e => {
        c = e
      }, l.headless = !0, n.d(t, ["useGSAP", 0, l])
    }
  }
]);