try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "84057cbb-83c7-41d4-bed0-22f3e5be05e9", e._sentryDebugIdIdentifier = "sentry-dbid-84057cbb-83c7-41d4-bed0-22f3e5be05e9")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "e75daf86583d2f46160d46d6e78dabbc975e828b",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e75daf86583d2f46160d46d6e78dabbc975e828b"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1773, 4154], {
    44154: (e, n, t) => {
      t.r(n), t.d(n, {
        useGSAP: () => u
      });
      var d = t(62229),
        s = t(13581),
        r = t.n(s);
      let a = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        o = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        i = {},
        l = r();
      const u = (e, n = f) => {
        let t = i;
        o(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : f) : o(n) && (t = n, n = "dependencies" in t ? t.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: s,
          revertOnUpdate: r
        } = t, u = (0, d.useRef)(!1), c = (0, d.useRef)(l.context((() => {}), s)), b = (0, d.useRef)((e => c.current.add(null, e))), g = n && n.length && !r;
        return g && a((() => (u.current = !0, () => c.current.revert())), f), a((() => {
          if (e && c.current.add(e, s), !g || !u.current) return () => c.current.revert()
        }), n), {
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