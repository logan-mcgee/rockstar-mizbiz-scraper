try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8a3e87dd-e096-4a32-81b5-c3a89489667c", e._sentryDebugIdIdentifier = "sentry-dbid-8a3e87dd-e096-4a32-81b5-c3a89489667c")
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
  [3846, 9111], {
    94931(e, n, t) {
      var o = t(93082),
        a = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        i = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, n, t) {
        var o, r = {},
          l = null,
          f = null;
        for (o in void 0 !== t && (l = "" + t), void 0 !== n.key && (l = "" + n.key), void 0 !== n.ref && (f = n.ref), n) d.call(n, o) && !s.hasOwnProperty(o) && (r[o] = n[o]);
        if (e && e.defaultProps)
          for (o in n = e.defaultProps) void 0 === r[o] && (r[o] = n[o]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: f,
          props: r,
          _owner: i.current
        }
      }
      n.Fragment = r, n.jsx = l, n.jsxs = l
    },
    39793(e, n, t) {
      e.exports = t(94931)
    },
    72175(e, n, t) {
      const o = "undefined" == typeof window;
      t.d(n, ["X", 0, o])
    },
    46103(e, n, t) {
      t.d(n, {
        X3: () => o.X,
        fi: () => r,
        IO: () => s,
        VW: () => p,
        v6: () => d.v,
        cJ: () => c
      });
      var o = t(72175);
      const a = e => e - .02,
        r = {
          mobile: `(min-width: 0px) and (max-width: ${a(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${a(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${a(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${a(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var d = t(20997);
      const i = "__FOUNDRY_ACCENT__",
        s = (e, n) => o.X ? n() : (window[i] || (window[i] = new Map), window[i].has(e) || window[i].set(e, n()), window[i].get(e));
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
    20997(e, n, t) {
      t.d(n, {
        v: () => i
      });
      var o = t(81270);
      const a = new Map;

      function r(e, n) {
        if (e === n) return e;
        const t = a.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const o = a.get(n);
        return o ? (o.forEach(n => n(e)), e) : n
      }

      function d(...e) {
        return (...n) => {
          for (const t of e) "function" == typeof t && t(...n)
        }
      }

      function i(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const a = e[t];
          for (const e in a) {
            const t = n[e],
              i = a[e];
            "function" == typeof t && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = d(t, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof i ? "id" === e && t && i ? n.id = r(t, i) : n[e] = void 0 !== i ? i : t : n[e] = (0, o.clsx)(t, i)
          }
        }
        return n
      }
    },
    79718(e, n, t) {
      t.d(n, {
        b: () => i
      });
      var o = t(93082),
        a = t(23482),
        r = t(39793),
        d = ({
          children: e,
          label: n
        }) => {
          const t = o.Children.only(e);
          return (0, r.jsxs)(r.Fragment, {
            children: [o.cloneElement(t, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, r.jsx)(a.bL, {
              children: n
            })]
          })
        };
      d.displayName = "AccessibleIcon";
      var i = d
    },
    94435(e, n, t) {
      t.d(n, {
        hO: () => s,
        sG: () => i
      });
      var o = t(93082),
        a = t(84017),
        r = t(17172),
        d = t(39793),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, r.TL)(`Primitive.${n}`),
            a = o.forwardRef((e, o) => {
              const {
                asChild: a,
                ...r
              } = e, i = a ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, d.jsx)(i, {
                ...r,
                ref: o
              })
            });
          return a.displayName = `Primitive.${n}`, {
            ...e,
            [n]: a
          }
        }, {});

      function s(e, n) {
        e && a.flushSync(() => e.dispatchEvent(n))
      }
    },
    23482(e, n, t) {
      t.d(n, {
        Qg: () => d,
        bL: () => s,
        s6: () => i
      });
      var o = t(93082),
        a = t(94435),
        r = t(39793),
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
        i = o.forwardRef((e, n) => (0, r.jsx)(a.sG.span, {
          ...e,
          ref: n,
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