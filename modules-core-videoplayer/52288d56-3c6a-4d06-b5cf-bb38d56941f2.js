try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "52288d56-3c6a-4d06-b5cf-bb38d56941f2", e._sentryDebugIdIdentifier = "sentry-dbid-52288d56-3c6a-4d06-b5cf-bb38d56941f2")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [19, 2400], {
    40019: (e, n, t) => {
      t.r(n), t.d(n, {
        useGSAP: () => u
      });
      var d = t(62229),
        r = t(13581),
        o = t.n(r);
      let a = "undefined" != typeof document ? d.useLayoutEffect : d.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        f = [],
        c = {},
        l = o();
      const u = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f,
          t = c;
        s(e) ? (t = e, e = null, n = "dependencies" in t ? t.dependencies : f) : s(n) && (t = n, n = "dependencies" in t ? t.dependencies : f), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: o
        } = t, u = (0, d.useRef)(!1), i = (0, d.useRef)(l.context((() => {}), r)), b = (0, d.useRef)((e => i.current.add(null, e))), y = n && n.length && !o;
        return y && a((() => (u.current = !0, () => i.current.revert())), f), a((() => {
          if (e && i.current.add(e, r), !y || !u.current) return () => i.current.revert()
        }), n), {
          context: i.current,
          contextSafe: b.current
        }
      };
      u.register = e => {
        l = e
      }, u.headless = !0
    }
  }
]);