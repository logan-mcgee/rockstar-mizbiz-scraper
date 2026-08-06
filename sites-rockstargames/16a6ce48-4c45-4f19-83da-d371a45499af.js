try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "16a6ce48-4c45-4f19-83da-d371a45499af", e._sentryDebugIdIdentifier = "sentry-dbid-16a6ce48-4c45-4f19-83da-d371a45499af")
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
  [2430, 6323], {
    94931(e, n, t) {
      var a = t(93082),
        o = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        i = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, n, t) {
        var a, d = {},
          l = null,
          f = null;
        for (a in void 0 !== t && (l = "" + t), void 0 !== n.key && (l = "" + n.key), void 0 !== n.ref && (f = n.ref), n) r.call(n, a) && !s.hasOwnProperty(a) && (d[a] = n[a]);
        if (e && e.defaultProps)
          for (a in n = e.defaultProps) void 0 === d[a] && (d[a] = n[a]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: f,
          props: d,
          _owner: i.current
        }
      }
      n.Fragment = d, n.jsx = l, n.jsxs = l
    },
    39793(e, n, t) {
      e.exports = t(94931)
    },
    13899(e, n, t) {
      const a = "undefined" == typeof window;
      t.d(n, ["X", 0, a])
    },
    25739(e, n, t) {
      t.d(n, {
        X3: () => a.X,
        fi: () => d,
        IO: () => s,
        VW: () => p,
        v6: () => r.v,
        cJ: () => c
      });
      var a = t(13899);
      const o = e => e - .02,
        d = {
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
      var r = t(96297);
      const i = "__FOUNDRY_ACCENT__",
        s = (e, n) => a.X ? n() : (window[i] || (window[i] = new Map), window[i].has(e) || window[i].set(e, n()), window[i].get(e));
      t(68309);
      var l, f = t(15963);

      function c(e, ...n) {
        return f(e, ...n)
      }
      t(54028), t(74143), t(88584), t(73892), t(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(l || (l = {})), Symbol.toStringTag;
      const p = (...e) => e.filter(e => e).join(" ")
    },
    96297(e, n, t) {
      t.d(n, {
        v: () => i
      });
      var a = t(81270);
      const o = new Map;

      function d(e, n) {
        if (e === n) return e;
        const t = o.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const a = o.get(n);
        return a ? (a.forEach(n => n(e)), e) : n
      }

      function r(...e) {
        return (...n) => {
          for (const t of e) "function" == typeof t && t(...n)
        }
      }

      function i(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const o = e[t];
          for (const e in o) {
            const t = n[e],
              i = o[e];
            "function" == typeof t && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = r(t, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof i ? "id" === e && t && i ? n.id = d(t, i) : n[e] = void 0 !== i ? i : t : n[e] = (0, a.clsx)(t, i)
          }
        }
        return n
      }
    },
    79718(e, n, t) {
      t.d(n, {
        b: () => i
      });
      var a = t(93082),
        o = t(23482),
        d = t(39793),
        r = ({
          children: e,
          label: n
        }) => {
          const t = a.Children.only(e);
          return (0, d.jsxs)(d.Fragment, {
            children: [a.cloneElement(t, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, d.jsx)(o.bL, {
              children: n
            })]
          })
        };
      r.displayName = "AccessibleIcon";
      var i = r
    },
    94435(e, n, t) {
      t.d(n, {
        hO: () => s,
        sG: () => i
      });
      var a = t(93082),
        o = t(84017),
        d = t(17172),
        r = t(39793),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, d.TL)(`Primitive.${n}`),
            o = a.forwardRef((e, a) => {
              const {
                asChild: o,
                ...d
              } = e, i = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, r.jsx)(i, {
                ...d,
                ref: a
              })
            });
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }, {});

      function s(e, n) {
        e && o.flushSync(() => e.dispatchEvent(n))
      }
    },
    23482(e, n, t) {
      t.d(n, {
        Qg: () => r,
        bL: () => s,
        s6: () => i
      });
      var a = t(93082),
        o = t(94435),
        d = t(39793),
        r = Object.freeze({
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
        i = a.forwardRef((e, n) => (0, d.jsx)(o.sG.span, {
          ...e,
          ref: n,
          style: {
            ...r,
            ...e.style
          }
        }));
      i.displayName = "VisuallyHidden";
      var s = i
    }
  }
]);