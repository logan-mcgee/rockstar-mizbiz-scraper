try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c2257299-8d9a-4686-a68b-39bb831f6afd", e._sentryDebugIdIdentifier = "sentry-dbid-c2257299-8d9a-4686-a68b-39bb831f6afd")
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
  [2347, 8600], {
    94931(e, n, t) {
      var a = t(93082),
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

      function f(e, n, t) {
        var a, r = {},
          f = null,
          l = null;
        for (a in void 0 !== t && (f = "" + t), void 0 !== n.key && (f = "" + n.key), void 0 !== n.ref && (l = n.ref), n) d.call(n, a) && !s.hasOwnProperty(a) && (r[a] = n[a]);
        if (e && e.defaultProps)
          for (a in n = e.defaultProps) void 0 === r[a] && (r[a] = n[a]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: l,
          props: r,
          _owner: i.current
        }
      }
      n.Fragment = r, n.jsx = f, n.jsxs = f
    },
    39793(e, n, t) {
      e.exports = t(94931)
    },
    31602(e, n, t) {
      const a = "undefined" == typeof window;
      t.d(n, ["X", 0, a])
    },
    7912(e, n, t) {
      t.d(n, {
        X3: () => a.X,
        fi: () => r,
        IO: () => s,
        VW: () => p,
        v6: () => d.v,
        cJ: () => c
      });
      var a = t(31602);
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
      var d = t(47460);
      const i = "__FOUNDRY_ACCENT__",
        s = (e, n) => a.X ? n() : (window[i] || (window[i] = new Map), window[i].has(e) || window[i].set(e, n()), window[i].get(e));
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
    47460(e, n, t) {
      t.d(n, {
        v: () => i
      });
      var a = t(81270);
      const o = new Map;

      function r(e, n) {
        if (e === n) return e;
        const t = o.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const a = o.get(n);
        return a ? (a.forEach(n => n(e)), e) : n
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
          const o = e[t];
          for (const e in o) {
            const t = n[e],
              i = o[e];
            "function" == typeof t && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = d(t, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof i ? "id" === e && t && i ? n.id = r(t, i) : n[e] = void 0 !== i ? i : t : n[e] = (0, a.clsx)(t, i)
          }
        }
        return n
      }
    },
    77301(e, n, t) {
      t.d(n, {
        b: () => i
      });
      var a = t(93082),
        o = t(84045),
        r = t(39793),
        d = ({
          children: e,
          label: n
        }) => {
          const t = a.Children.only(e);
          return (0, r.jsxs)(r.Fragment, {
            children: [a.cloneElement(t, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, r.jsx)(o.bL, {
              children: n
            })]
          })
        };
      d.displayName = "AccessibleIcon";
      var i = d
    },
    13165(e, n, t) {
      t.d(n, {
        hO: () => s,
        sG: () => i
      });
      var a = t(93082),
        o = t(84017),
        r = t(17172),
        d = t(39793),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, r.TL)(`Primitive.${n}`),
            o = a.forwardRef((e, a) => {
              const {
                asChild: o,
                ...r
              } = e, i = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, d.jsx)(i, {
                ...r,
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
    84045(e, n, t) {
      t.d(n, {
        Qg: () => d,
        bL: () => s,
        s6: () => i
      });
      var a = t(93082),
        o = t(13165),
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
        i = a.forwardRef((e, n) => (0, r.jsx)(o.sG.span, {
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