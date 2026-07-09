try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d9189c0d-ab87-4580-87aa-184b0a45baf6", e._sentryDebugIdIdentifier = "sentry-dbid-d9189c0d-ab87-4580-87aa-184b0a45baf6")
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
        useGSAP: () => i
      });
      var a = n(93082),
        d = n(35812);
      let s = "undefined" != typeof document ? a.useLayoutEffect : a.useEffect,
        r = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        o = {},
        l = d.default;
      const i = (e, t = f) => {
        let n = o;
        r(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : f) : r(t) && (n = t, t = "dependencies" in n ? n.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: d,
          revertOnUpdate: i
        } = n, u = (0, a.useRef)(!1), c = (0, a.useRef)(l.context(() => {}, d)), b = (0, a.useRef)(e => c.current.add(null, e)), g = t && t.length && !i;
        return g && s(() => (u.current = !0, () => c.current.revert()), f), s(() => {
          if (e && c.current.add(e, d), !g || !u.current) return () => c.current.revert()
        }, t), {
          context: c.current,
          contextSafe: b.current
        }
      };
      i.register = e => {
        l = e
      }, i.headless = !0
    }
  }
]);