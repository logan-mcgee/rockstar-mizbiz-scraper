try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b642077c-b89b-42a9-b2c0-cfe3a17eca2a", e._sentryDebugIdIdentifier = "sentry-dbid-b642077c-b89b-42a9-b2c0-cfe3a17eca2a")
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
  [4845], {
    17328: (e, t, n) => {
      n.d(t, {
        fi: () => r,
        v6: () => d.v
      }), n(60211);
      const o = e => e - .02,
        r = {
          mobile: `(min-width: 0px) and (max-width: ${o(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${o(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${o(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${o(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var a, d = n(51105);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(a || (a = {})), Symbol.toStringTag
    },
    42295: (e, t, n) => {
      e.exports = n(69245)
    },
    51105: (e, t, n) => {
      n.d(t, {
        v: () => i
      });
      var o = n(4572);
      const r = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = r.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const o = r.get(t);
        return o ? (o.forEach(t => t(e)), e) : t
      }

      function d(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function i(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              i = r[e];
            "function" == typeof n && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = d(n, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof i ? "id" === e && n && i ? t.id = a(n, i) : t[e] = void 0 !== i ? i : n : t[e] = (0, o.clsx)(n, i)
          }
        }
        return t
      }
    },
    60211: (e, t, n) => {
      n.d(t, {
        X: () => o
      });
      const o = "undefined" == typeof window
    },
    69245: (e, t, n) => {
      var o = n(62229),
        r = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        i = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, t, n) {
        var o, a = {},
          s = null,
          l = null;
        for (o in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (l = t.ref), t) d.call(t, o) && !f.hasOwnProperty(o) && (a[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === a[o] && (a[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: s,
          ref: l,
          props: a,
          _owner: i.current
        }
      }
      t.Fragment = a, t.jsx = s, t.jsxs = s
    },
    95362: (e, t, n) => {
      n.d(t, {
        s: () => d,
        t: () => a
      });
      var o = n(62229);

      function r(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function a(...e) {
        return t => {
          let n = !1;
          const o = e.map(e => {
            const o = r(e, t);
            return n || "function" != typeof o || (n = !0), o
          });
          if (n) return () => {
            for (let t = 0; t < o.length; t++) {
              const n = o[t];
              "function" == typeof n ? n() : r(e[t], null)
            }
          }
        }
      }

      function d(...e) {
        return o.useCallback(a(...e), e)
      }
    }
  }
]);