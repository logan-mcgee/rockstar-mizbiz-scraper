try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d22b4700-af0e-4889-96bc-44f5f800e5b2", e._sentryDebugIdIdentifier = "sentry-dbid-d22b4700-af0e-4889-96bc-44f5f800e5b2")
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
  [1773, 4154], {
    44154(e, t, n) {
      n.r(t), n.d(t, {
        useGSAP: () => c
      });
      var d = n(71127),
        s = n(31142);
      let a = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        r = e => e && !Array.isArray(e) && "object" == typeof e,
        o = [],
        f = {},
        l = s.default;
      const c = (e, t = o) => {
        let n = f;
        r(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : o) : r(t) && (n = t, t = "dependencies" in n ? n.dependencies : o), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: s,
          revertOnUpdate: c
        } = n, i = (0, d.useRef)(!1), u = (0, d.useRef)(l.context(() => {}, s)), b = (0, d.useRef)(e => u.current.add(null, e)), g = t && t.length && !c;
        return g && a(() => (i.current = !0, () => u.current.revert()), o), a(() => {
          if (e && u.current.add(e, s), !g || !i.current) return () => u.current.revert()
        }, t), {
          context: u.current,
          contextSafe: b.current
        }
      };
      c.register = e => {
        l = e
      }, c.headless = !0
    }
  }
]);