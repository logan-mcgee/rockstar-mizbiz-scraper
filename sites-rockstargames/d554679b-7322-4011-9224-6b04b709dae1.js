try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d554679b-7322-4011-9224-6b04b709dae1", e._sentryDebugIdIdentifier = "sentry-dbid-d554679b-7322-4011-9224-6b04b709dae1")
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
  [2187, 9071], {
    94931(e, t, n) {
      var a = n(93082),
        o = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        i = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, n) {
        var a, r = {},
          l = null,
          f = null;
        for (a in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (f = t.ref), t) d.call(t, a) && !s.hasOwnProperty(a) && (r[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === r[a] && (r[a] = t[a]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: f,
          props: r,
          _owner: i.current
        }
      }
      t.Fragment = r, t.jsx = l, t.jsxs = l
    },
    39793(e, t, n) {
      e.exports = n(94931)
    },
    87213(e, t, n) {
      n.d(t, {
        X: () => a
      });
      const a = "undefined" == typeof window
    },
    23293(e, t, n) {
      n.d(t, {
        X3: () => a.X,
        fi: () => r,
        IO: () => s,
        VW: () => p,
        v6: () => d.v,
        cJ: () => c
      });
      var a = n(87213);
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
      var d = n(71107);
      const i = "__FOUNDRY_ACCENT__",
        s = (e, t) => a.X ? t() : (window[i] || (window[i] = new Map), window[i].has(e) || window[i].set(e, t()), window[i].get(e));
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
    71107(e, t, n) {
      n.d(t, {
        v: () => i
      });
      var a = n(81270);
      const o = new Map;

      function r(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const a = o.get(t);
        return a ? (a.forEach(t => t(e)), e) : t
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
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              i = o[e];
            "function" == typeof n && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = d(n, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof i ? "id" === e && n && i ? t.id = r(n, i) : t[e] = void 0 !== i ? i : n : t[e] = (0, a.clsx)(n, i)
          }
        }
        return t
      }
    },
    91497(e, t, n) {
      n.d(t, {
        b: () => i
      });
      var a = n(93082),
        o = n(34376),
        r = n(39793),
        d = ({
          children: e,
          label: t
        }) => {
          const n = a.Children.only(e);
          return (0, r.jsxs)(r.Fragment, {
            children: [a.cloneElement(n, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, r.jsx)(o.bL, {
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
      var a = n(93082),
        o = (n(84017), n(38957)),
        r = n(39793),
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, o.TL)(`Primitive.${t}`),
            d = a.forwardRef((e, a) => {
              const {
                asChild: o,
                ...d
              } = e, i = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, r.jsx)(i, {
                ...d,
                ref: a
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
      var a = n(93082),
        o = n(4031),
        r = n(39793),
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
        i = a.forwardRef((e, t) => (0, r.jsx)(o.sG.span, {
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