try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "366d0abd-c125-4107-a803-66abc933c012", e._sentryDebugIdIdentifier = "sentry-dbid-366d0abd-c125-4107-a803-66abc933c012")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [1773, 4154], {
    4154: (e, d, n) => {
      n.r(d), n.d(d, {
        useGSAP: () => u
      });
      var t = n(2229),
        r = n(2828),
        o = n.n(r);
      let a = "undefined" != typeof document ? t.useLayoutEffect : t.useEffect,
        s = e => e && !Array.isArray(e) && "object" == typeof e,
        c = [],
        f = {},
        l = o();
      const u = (e, d = c) => {
        let n = f;
        s(e) ? (n = e, e = null, d = "dependencies" in n ? n.dependencies : c) : s(d) && (n = d, d = "dependencies" in n ? n.dependencies : c), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: r,
          revertOnUpdate: o
        } = n, u = (0, t.useRef)(!1), i = (0, t.useRef)(l.context(() => {}, r)), y = (0, t.useRef)(e => i.current.add(null, e)), p = d && d.length && !o;
        return p && a(() => (u.current = !0, () => i.current.revert()), c), a(() => {
          if (e && i.current.add(e, r), !p || !u.current) return () => i.current.revert()
        }, d), {
          context: i.current,
          contextSafe: y.current
        }
      };
      u.register = e => {
        l = e
      }, u.headless = !0
    }
  }
]);