try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5ffdb121-3ca7-4e7f-be9c-c3fcf2f4fb63", e._sentryDebugIdIdentifier = "sentry-dbid-5ffdb121-3ca7-4e7f-be9c-c3fcf2f4fb63")
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
        useGSAP: () => l
      });
      var d = n(71127),
        s = n(31142);
      let f = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        a = e => e && !Array.isArray(e) && "object" == typeof e,
        r = [],
        o = {},
        c = s.default;
      const l = (e, t = r) => {
        let n = o;
        a(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : r) : a(t) && (n = t, t = "dependencies" in n ? n.dependencies : r), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: s,
          revertOnUpdate: l
        } = n, i = (0, d.useRef)(!1), u = (0, d.useRef)(c.context(() => {}, s)), b = (0, d.useRef)(e => u.current.add(null, e)), g = t && t.length && !l;
        return g && f(() => (i.current = !0, () => u.current.revert()), r), f(() => {
          if (e && u.current.add(e, s), !g || !i.current) return () => u.current.revert()
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