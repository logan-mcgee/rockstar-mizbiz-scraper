try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "51d7f207-e098-4e7a-98c5-e600f05e9720", e._sentryDebugIdIdentifier = "sentry-dbid-51d7f207-e098-4e7a-98c5-e600f05e9720")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [204, 7823], {
    27823: (e, n, t) => {
      t.r(n), t.d(n, {
        useGSAP: () => l
      });
      var d = t(62229),
        s = t(13581),
        f = t.n(s);
      let r = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        a = e => e && !Array.isArray(e) && "object" == typeof e,
        o = [],
        c = {},
        i = f();
      const l = (e, n = o) => {
        let t = c;
        a(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : o) : a(n) && (t = n, n = "dependencies" in t ? t.dependencies : o), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: s,
          revertOnUpdate: f
        } = t, l = (0, d.useRef)(!1), u = (0, d.useRef)(i.context((() => {}), s)), g = (0, d.useRef)((e => u.current.add(null, e))), y = n && n.length && !f;
        return y && r((() => (l.current = !0, () => u.current.revert())), o), r((() => {
          if (e && u.current.add(e, s), !y || !l.current) return () => u.current.revert()
        }), n), {
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