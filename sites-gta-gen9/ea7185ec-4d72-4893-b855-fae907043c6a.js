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
      var a = t(62229),
        d = t(42828),
        s = t.n(d);
      let r = "undefined" != typeof document ? a.useLayoutEffect : a.useEffect,
        o = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        c = {},
        i = s();
      const l = (e, n = f) => {
        let t = c;
        o(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : f) : o(n) && (t = n, n = "dependencies" in t ? t.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: d,
          revertOnUpdate: s
        } = t, l = (0, a.useRef)(!1), u = (0, a.useRef)(i.context(() => {}, d)), b = (0, a.useRef)(e => u.current.add(null, e)), g = n && n.length && !s;
        return g && r(() => (l.current = !0, () => u.current.revert()), f), r(() => {
          if (e && u.current.add(e, d), !g || !l.current) return () => u.current.revert()
        }, n), {
          context: u.current,
          contextSafe: b.current
        }
      };
      l.register = e => {
        i = e
      }, l.headless = !0
    }
  }
]);