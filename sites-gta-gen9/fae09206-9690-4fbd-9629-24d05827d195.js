try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fae09206-9690-4fbd-9629-24d05827d195", e._sentryDebugIdIdentifier = "sentry-dbid-fae09206-9690-4fbd-9629-24d05827d195")
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
      var d = t(62229),
        a = t(46890),
        s = t.n(a);
      let r = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        o = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        i = {},
        l = s();
      const u = (e, n = f) => {
        let t = i;
        o(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : f) : o(n) && (t = n, n = "dependencies" in t ? t.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: a,
          revertOnUpdate: s
        } = t, u = (0, d.useRef)(!1), c = (0, d.useRef)(l.context((() => {}), a)), g = (0, d.useRef)((e => c.current.add(null, e))), b = n && n.length && !s;
        return b && r((() => (u.current = !0, () => c.current.revert())), f), r((() => {
          if (e && c.current.add(e, a), !b || !u.current) return () => c.current.revert()
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