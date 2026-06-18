try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "84b9399d-b601-41ee-90f8-a96de99dec2a", e._sentryDebugIdIdentifier = "sentry-dbid-84b9399d-b601-41ee-90f8-a96de99dec2a")
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
  [3728, 6174], {
    94931(e, t, n) {
      var o = n(93082),
        r = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        i = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, n) {
        var o, a = {},
          l = null,
          f = null;
        for (o in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (f = t.ref), t) d.call(t, o) && !s.hasOwnProperty(o) && (a[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === a[o] && (a[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: f,
          props: a,
          _owner: i.current
        }
      }
      t.Fragment = a, t.jsx = l, t.jsxs = l
    },
    39793(e, t, n) {
      e.exports = n(94931)
    },
    90371(e, t, n) {
      n.d(t, {
        X: () => o
      });
      const o = "undefined" == typeof window
    },
    27859(e, t, n) {
      n.d(t, {
        X3: () => o.X,
        fi: () => a,
        IO: () => s,
        VW: () => p,
        v6: () => d.v,
        cJ: () => c
      });
      var o = n(90371);
      const r = e => e - .02,
        a = {
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
      var d = n(31985);
      const i = "__FOUNDRY_ACCENT__",
        s = (e, t) => o.X ? t() : (window[i] || (window[i] = new Map), window[i].has(e) || window[i].set(e, t()), window[i].get(e));
      n(68309);
      var l, f = n(15963);

      function c(e, ...t) {
        return f(e, ...t)
      }
      n(54028), n(74143), n(88584), n(73892), n(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(l || (l = {})), Symbol.toStringTag;
      const p = (...e) => e.filter(e => e).join(" ")
    },
    31985(e, t, n) {
      n.d(t, {
        v: () => i
      });
      var o = n(81270);
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
    91497(e, t, n) {
      n.d(t, {
        b: () => i
      });
      var o = n(93082),
        r = n(34376),
        a = n(39793),
        d = ({
          children: e,
          label: t
        }) => {
          const n = o.Children.only(e);
          return (0, a.jsxs)(a.Fragment, {
            children: [o.cloneElement(n, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, a.jsx)(r.bL, {
              children: t
            })]
          })
        };
      d.displayName = "AccessibleIcon";
      var i = d
    },
    4031(e, t, n) {
      n.d(t, {
        sG: () => d
      });
      var o = n(93082),
        r = (n(84017), n(38957)),
        a = n(39793),
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, r.TL)(`Primitive.${t}`),
            d = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...d
              } = e, i = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(i, {
                ...d,
                ref: o
              })
            });
          return d.displayName = `Primitive.${t}`, {
            ...e,
            [t]: d
          }
        }, {})
    },
    34376(e, t, n) {
      n.d(t, {
        bL: () => s,
        s6: () => i
      });
      var o = n(93082),
        r = n(4031),
        a = n(39793),
        d = Object.freeze({
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
        i = o.forwardRef((e, t) => (0, a.jsx)(r.sG.span, {
          ...e,
          ref: t,
          style: {
            ...d,
            ...e.style
          }
        }));
      i.displayName = "VisuallyHidden";
      var s = i
    }
  }
]);