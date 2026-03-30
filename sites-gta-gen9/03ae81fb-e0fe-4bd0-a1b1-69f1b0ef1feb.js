try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "03ae81fb-e0fe-4bd0-a1b1-69f1b0ef1feb", e._sentryDebugIdIdentifier = "sentry-dbid-03ae81fb-e0fe-4bd0-a1b1-69f1b0ef1feb")
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
  [2391, 4772], {
    72391: (e, n, t) => {
      t.r(n), t.d(n, {
        useGSAP: () => u
      });
      var d = t(71127),
        a = t(7911),
        s = t.n(a);
      let f = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        r = e => e && !Array.isArray(e) && "object" == typeof e,
        o = [],
        i = {},
        l = s();
      const u = (e, n = o) => {
        let t = i;
        r(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : o) : r(n) && (t = n, n = "dependencies" in t ? t.dependencies : o), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: a,
          revertOnUpdate: s
        } = t, u = (0, d.useRef)(!1), c = (0, d.useRef)(l.context(() => {}, a)), b = (0, d.useRef)(e => c.current.add(null, e)), g = n && n.length && !s;
        return g && f(() => (u.current = !0, () => c.current.revert()), o), f(() => {
          if (e && c.current.add(e, a), !g || !u.current) return () => c.current.revert()
        }, n), {
          context: c.current,
          contextSafe: b.current
        }
      };
      u.register = e => {
        l = e
      }, u.headless = !0
    }
  }
]);