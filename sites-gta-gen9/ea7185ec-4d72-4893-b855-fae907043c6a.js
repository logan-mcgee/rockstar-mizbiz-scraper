try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ea7185ec-4d72-4893-b855-fae907043c6a", e._sentryDebugIdIdentifier = "sentry-dbid-ea7185ec-4d72-4893-b855-fae907043c6a")
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
    44154: (e, n, t) => {
      t.r(n), t.d(n, {
        useGSAP: () => l
      });
      var d = t(62229),
        s = t(42828),
        r = t.n(s);
      let a = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        o = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        c = {},
        i = r();
      const l = (e, n = f) => {
        let t = c;
        o(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : f) : o(n) && (t = n, n = "dependencies" in t ? t.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: s,
          revertOnUpdate: r
        } = t, l = (0, d.useRef)(!1), u = (0, d.useRef)(i.context(() => {}, s)), g = (0, d.useRef)(e => u.current.add(null, e)), b = n && n.length && !r;
        return b && a(() => (l.current = !0, () => u.current.revert()), f), a(() => {
          if (e && u.current.add(e, s), !b || !l.current) return () => u.current.revert()
        }, n), {
          context: u.current,
          contextSafe: g.current
        }
      };
      l.register = e => {
        i = e
      }, l.headless = !0
    }
  }
]);