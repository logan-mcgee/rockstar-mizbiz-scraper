try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d86cad22-b1c0-45d7-84ba-6cc2121a495a", e._sentryDebugIdIdentifier = "sentry-dbid-d86cad22-b1c0-45d7-84ba-6cc2121a495a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1798], {
    12919: (e, t, n) => {
      n.d(t, {
        UP: () => i,
        Ub: () => o
      });
      var a = n(60211),
        d = n(71127);

      function o(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const o = e => a.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [i, r] = (0, d.useState)(() => n ? o(e) : t);

        function s() {
          r(o(e))
        }
        return (0, d.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return s(), t?.addListener ? t?.addListener(s) : t?.addEventListener("change", s), () => {
            t?.removeListener ? t?.removeListener(s) : t?.removeEventListener("change", s)
          }
        }, [e]), i
      }

      function i(...e) {
        const t = (0, d.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      n(51105)
    },
    17328: (e, t, n) => {
      n.d(t, {
        X3: () => a.X,
        fi: () => o,
        v6: () => r.v
      });
      var a = n(60211);
      const d = e => e - .02,
        o = {
          mobile: `(min-width: 0px) and (max-width: ${d(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${d(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${d(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${d(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var i, r = n(51105);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(i || (i = {})), Symbol.toStringTag
    },
    51105: (e, t, n) => {
      n.d(t, {
        v: () => r
      });
      var a = n(1556);
      const d = new Map;

      function o(e, t) {
        if (e === t) return e;
        const n = d.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const a = d.get(t);
        return a ? (a.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function r(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const d = e[n];
          for (const e in d) {
            const n = t[e],
              r = d[e];
            "function" == typeof n && "function" == typeof r && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(n, r) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof r ? "id" === e && n && r ? t.id = o(n, r) : t[e] = void 0 !== r ? r : n : t[e] = (0, a.clsx)(n, r)
          }
        }
        return t
      }
    },
    60211: (e, t, n) => {
      n.d(t, {
        X: () => a
      });
      const a = "undefined" == typeof window
    }
  }
]);