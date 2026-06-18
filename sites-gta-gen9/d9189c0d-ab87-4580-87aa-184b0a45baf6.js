try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d9189c0d-ab87-4580-87aa-184b0a45baf6", e._sentryDebugIdIdentifier = "sentry-dbid-d9189c0d-ab87-4580-87aa-184b0a45baf6")
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
      n.r(t), n.d(t, {
        useGSAP: () => l
      });
      var d = n(93082),
        a = n(35812);
      let s = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        r = e => e && !Array.isArray(e) && "object" == typeof e,
        o = [],
        f = {},
        c = a.default;
      const l = (e, t = o) => {
        let n = f;
        r(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : o) : r(t) && (n = t, t = "dependencies" in n ? n.dependencies : o), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: a,
          revertOnUpdate: l
        } = n, i = (0, d.useRef)(!1), u = (0, d.useRef)(c.context(() => {}, a)), b = (0, d.useRef)(e => u.current.add(null, e)), g = t && t.length && !l;
        return g && s(() => (i.current = !0, () => u.current.revert()), o), s(() => {
          if (e && u.current.add(e, a), !g || !i.current) return () => u.current.revert()
        }, t), {
          context: u.current,
          contextSafe: b.current
        }
      };
      l.register = e => {
        c = e
      }, l.headless = !0
    }
  }
]);