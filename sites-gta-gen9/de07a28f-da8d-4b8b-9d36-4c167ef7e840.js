try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "de07a28f-da8d-4b8b-9d36-4c167ef7e840", e._sentryDebugIdIdentifier = "sentry-dbid-de07a28f-da8d-4b8b-9d36-4c167ef7e840")
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
        useGSAP: () => u
      });
      var d = t(62229),
        s = t(13581),
        a = t.n(s);
      let r = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        f = e => e && !Array.isArray(e) && "object" == typeof e,
        o = [],
        i = {},
        l = a();
      const u = (e, n = o) => {
        let t = i;
        f(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : o) : f(n) && (t = n, n = "dependencies" in t ? t.dependencies : o), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: s,
          revertOnUpdate: a
        } = t, u = (0, d.useRef)(!1), c = (0, d.useRef)(l.context((() => {}), s)), g = (0, d.useRef)((e => c.current.add(null, e))), b = n && n.length && !a;
        return b && r((() => (u.current = !0, () => c.current.revert())), o), r((() => {
          if (e && c.current.add(e, s), !b || !u.current) return () => c.current.revert()
        }), n), {
          context: c.current,
          contextSafe: g.current
        }
      };
      u.register = e => {
        l = e
      }, u.headless = !0
    }
  }
]);