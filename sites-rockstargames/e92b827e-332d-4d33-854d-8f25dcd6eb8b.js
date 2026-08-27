try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e92b827e-332d-4d33-854d-8f25dcd6eb8b", e._sentryDebugIdIdentifier = "sentry-dbid-e92b827e-332d-4d33-854d-8f25dcd6eb8b")
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
  [704, 3004, 9793], {
    94931(e, t, n) {
      var o = n(93082),
        d = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, t, n) {
        var o, r = {},
          f = null,
          l = null;
        for (o in void 0 !== n && (f = "" + n), void 0 !== t.key && (f = "" + t.key), void 0 !== t.ref && (l = t.ref), t) i.call(t, o) && !s.hasOwnProperty(o) && (r[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === r[o] && (r[o] = t[o]);
        return {
          $$typeof: d,
          type: e,
          key: f,
          ref: l,
          props: r,
          _owner: a.current
        }
      }
      t.Fragment = r, t.jsx = f, t.jsxs = f
    },
    39793(e, t, n) {
      e.exports = n(94931)
    },
    27059(e, t, n) {
      const o = "undefined" == typeof window;
      n.d(t, ["X", 0, o])
    },
    29443(e, t, n) {
      n.d(t, {
        X3: () => o.X,
        fi: () => r,
        IO: () => s,
        VW: () => p,
        v6: () => i.v,
        cJ: () => c
      });
      var o = n(27059);
      const d = e => e - .02,
        r = {
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
      var i = n(24513);
      const a = "__FOUNDRY_ACCENT__",
        s = (e, t) => o.X ? t() : (window[a] || (window[a] = new Map), window[a].has(e) || window[a].set(e, t()), window[a].get(e));
      n(68309);
      var f, l = n(15963);

      function c(e, ...t) {
        return l(e, ...t)
      }
      n(54028), n(74143), n(88584), n(73892), n(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(f || (f = {})), Symbol.toStringTag;
      const p = (...e) => e.filter(e => e).join(" ")
    },
    24513(e, t, n) {
      n.d(t, {
        v: () => a
      });
      var o = n(81270);
      const d = new Map;

      function r(e, t) {
        if (e === t) return e;
        const n = d.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const o = d.get(t);
        return o ? (o.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const d = e[n];
          for (const e in d) {
            const n = t[e],
              a = d[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = r(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, o.clsx)(n, a)
          }
        }
        return t
      }
    },
    41988(e, t, n) {
      n.d(t, {
        hO: () => f,
        sG: () => s
      });
      var o = n(93082),
        d = n(84017),
        r = n(93237),
        i = n(39793),
        a = Object.defineProperty,
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, r.TL)(`Primitive.${t}`),
            d = o.forwardRef((e, o) => {
              const {
                asChild: d,
                ...r
              } = e, a = d ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
                ...r,
                ref: o
              })
            });
          return d.displayName = `Primitive.${t}`, {
            ...e,
            [t]: d
          }
        }, {});

      function f(e, t) {
        e && d.flushSync(() => e.dispatchEvent(t))
      }
      a(f, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    94299(e, t, n) {
      n.d(t, {
        Qg: () => s,
        bL: () => l,
        s6: () => f
      });
      var o = n(93082),
        d = n(41988),
        r = n(39793),
        i = Object.defineProperty,
        a = (e, t) => i(e, "name", {
          value: t,
          configurable: !0
        }),
        s = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        f = o.forwardRef(a(function(e, t) {
          return (0, r.jsx)(d.sG.span, {
            ...e,
            ref: t,
            style: {
              ...s,
              ...e.style
            }
          })
        }, "VisuallyHidden")),
        l = f
    }
  }
]);