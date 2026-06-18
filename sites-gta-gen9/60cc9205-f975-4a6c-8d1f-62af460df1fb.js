try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "60cc9205-f975-4a6c-8d1f-62af460df1fb", e._sentryDebugIdIdentifier = "sentry-dbid-60cc9205-f975-4a6c-8d1f-62af460df1fb")
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
        useGSAP: () => c
      });
      var d = n(93082),
        a = n(35812);
      let s = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        r = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        o = {},
        l = a.default;
      const c = (e, t = f) => {
        let n = o;
        r(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : f) : r(t) && (n = t, t = "dependencies" in n ? n.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: a,
          revertOnUpdate: c
        } = n, i = (0, d.useRef)(!1), u = (0, d.useRef)(l.context(() => {}, a)), b = (0, d.useRef)(e => u.current.add(null, e)), g = t && t.length && !c;
        return g && s(() => (i.current = !0, () => u.current.revert()), f), s(() => {
          if (e && u.current.add(e, a), !g || !i.current) return () => u.current.revert()
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