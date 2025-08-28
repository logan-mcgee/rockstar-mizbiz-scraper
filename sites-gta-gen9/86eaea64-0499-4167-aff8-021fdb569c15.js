try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "86eaea64-0499-4167-aff8-021fdb569c15", e._sentryDebugIdIdentifier = "sentry-dbid-86eaea64-0499-4167-aff8-021fdb569c15")
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
        f = t(13581),
        s = t.n(f);
      let a = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        r = e => e && !Array.isArray(e) && "object" == typeof e,
        o = [],
        c = {},
        i = s();
      const l = (e, n = o) => {
        let t = c;
        r(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : o) : r(n) && (t = n, n = "dependencies" in t ? t.dependencies : o), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: f,
          revertOnUpdate: s
        } = t, l = (0, d.useRef)(!1), u = (0, d.useRef)(i.context((() => {}), f)), g = (0, d.useRef)((e => u.current.add(null, e))), y = n && n.length && !s;
        return y && a((() => (l.current = !0, () => u.current.revert())), o), a((() => {
          if (e && u.current.add(e, f), !y || !l.current) return () => u.current.revert()
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