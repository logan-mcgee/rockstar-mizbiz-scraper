try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "13b950e4-2439-4ae9-8a6d-bc1dcd4ed232", e._sentryDebugIdIdentifier = "sentry-dbid-13b950e4-2439-4ae9-8a6d-bc1dcd4ed232")
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
      var a = n(93082),
        d = n(35812);
      let s = "undefined" != typeof document ? a.useLayoutEffect : a.useEffect,
        r = e => e && !Array.isArray(e) && "object" == typeof e,
        o = [],
        f = {},
        c = d.default;
      const l = (e, t = o) => {
        let n = f;
        r(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : o) : r(t) && (n = t, t = "dependencies" in n ? n.dependencies : o), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: d,
          revertOnUpdate: l
        } = n, i = (0, a.useRef)(!1), u = (0, a.useRef)(c.context(() => {}, d)), g = (0, a.useRef)(e => u.current.add(null, e)), b = t && t.length && !l;
        return b && s(() => (i.current = !0, () => u.current.revert()), o), s(() => {
          if (e && u.current.add(e, d), !b || !i.current) return () => u.current.revert()
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