try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d9d19409-139e-4745-8f8e-e71bdd55ab72", e._sentryDebugIdIdentifier = "sentry-dbid-d9d19409-139e-4745-8f8e-e71bdd55ab72")
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
      let a = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        r = e => e && !Array.isArray(e) && "object" == typeof e,
        o = [],
        f = {},
        l = s.default;
      const i = (e, t = o) => {
        let n = f;
        r(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : o) : r(t) && (n = t, t = "dependencies" in n ? n.dependencies : o), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: s,
          revertOnUpdate: i
        } = n, u = (0, d.useRef)(!1), c = (0, d.useRef)(l.context(() => {}, s)), g = (0, d.useRef)(e => c.current.add(null, e)), b = t && t.length && !i;
        return b && a(() => (u.current = !0, () => c.current.revert()), o), a(() => {
          if (e && c.current.add(e, s), !b || !u.current) return () => c.current.revert()
        }, t), {
          context: c.current,
          contextSafe: g.current
        }
      };
      i.register = e => {
        l = e
      }, i.headless = !0, n.d(t, ["useGSAP", 0, i])
    }
  }
]);