try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "eb4e66f2-283e-499e-97fb-bd067c6d273e", e._sentryDebugIdIdentifier = "sentry-dbid-eb4e66f2-283e-499e-97fb-bd067c6d273e")
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
  [3191, 5129, 9793], {
    94931(e, n, t) {
      var o = t(93082),
        r = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, n, t) {
        var o, d = {},
          f = null,
          l = null;
        for (o in void 0 !== t && (f = "" + t), void 0 !== n.key && (f = "" + n.key), void 0 !== n.ref && (l = n.ref), n) i.call(n, o) && !s.hasOwnProperty(o) && (d[o] = n[o]);
        if (e && e.defaultProps)
          for (o in n = e.defaultProps) void 0 === d[o] && (d[o] = n[o]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: l,
          props: d,
          _owner: a.current
        }
      }
      n.Fragment = d, n.jsx = f, n.jsxs = f
    },
    39793(e, n, t) {
      e.exports = t(94931)
    },
    32101(e, n, t) {
      const o = "undefined" == typeof window;
      t.d(n, ["X", 0, o])
    },
    36421(e, n, t) {
      t.d(n, {
        X3: () => o.X,
        fi: () => d,
        IO: () => s,
        VW: () => p,
        v6: () => i.v,
        cJ: () => c
      });
      var o = t(32101);
      const r = e => e - .02,
        d = {
          mobile: `(min-width: 0px) and (max-width: ${r(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${r(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${r(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${r(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var i = t(64043);
      const a = "__FOUNDRY_ACCENT__",
        s = (e, n) => o.X ? n() : (window[a] || (window[a] = new Map), window[a].has(e) || window[a].set(e, n()), window[a].get(e));
      t(68309);
      var f, l = t(15963);

      function c(e, ...n) {
        return l(e, ...n)
      }
      t(54028), t(74143), t(88584), t(73892), t(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(f || (f = {})), Symbol.toStringTag;
      const p = (...e) => e.filter(e => e).join(" ")
    },
    64043(e, n, t) {
      t.d(n, {
        v: () => a
      });
      var o = t(81270);
      const r = new Map;

      function d(e, n) {
        if (e === n) return e;
        const t = r.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const o = r.get(n);
        return o ? (o.forEach(n => n(e)), e) : n
      }

      function i(...e) {
        return (...n) => {
          for (const t of e) "function" == typeof t && t(...n)
        }
      }

      function a(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const r = e[t];
          for (const e in r) {
            const t = n[e],
              a = r[e];
            "function" == typeof t && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = i(t, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof a ? "id" === e && t && a ? n.id = d(t, a) : n[e] = void 0 !== a ? a : t : n[e] = (0, o.clsx)(t, a)
          }
        }
        return n
      }
    },
    94635(e, n, t) {
      t.d(n, {
        b: () => a
      });
      var o = t(93082),
        r = t(10333),
        d = t(39793),
        i = Object.defineProperty,
        a = (() => i(({
          children: e,
          label: n
        }) => {
          const t = o.Children.only(e);
          return (0, d.jsxs)(d.Fragment, {
            children: [o.cloneElement(t, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, d.jsx)(r.bL, {
              children: n
            })]
          })
        }, "name", {
          value: "AccessibleIcon",
          configurable: !0
        }))()
    },
    658(e, n, t) {
      t.d(n, {
        hO: () => f,
        sG: () => s
      });
      var o = t(93082),
        r = t(84017),
        d = t(93237),
        i = t(39793),
        a = Object.defineProperty,
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, d.TL)(`Primitive.${n}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...d
              } = e, a = r ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
                ...d,
                ref: o
              })
            });
          return r.displayName = `Primitive.${n}`, {
            ...e,
            [n]: r
          }
        }, {});

      function f(e, n) {
        e && r.flushSync(() => e.dispatchEvent(n))
      }
      a(f, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    10333(e, n, t) {
      t.d(n, {
        Qg: () => s,
        bL: () => l,
        s6: () => f
      });
      var o = t(93082),
        r = t(658),
        d = t(39793),
        i = Object.defineProperty,
        a = (e, n) => i(e, "name", {
          value: n,
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
        f = o.forwardRef(a(function(e, n) {
          return (0, d.jsx)(r.sG.span, {
            ...e,
            ref: n,
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