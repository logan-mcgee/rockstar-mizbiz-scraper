try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e84c5042-9257-4821-b219-a3d737614bbc", e._sentryDebugIdIdentifier = "sentry-dbid-e84c5042-9257-4821-b219-a3d737614bbc")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [174, 728], {
    90371(e, n, t) {
      t.d(n, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    27859(e, n, t) {
      t.d(n, {
        X3: () => r.X,
        fi: () => i,
        IO: () => l,
        VW: () => p,
        v6: () => d.v,
        cJ: () => f
      });
      var r = t(90371);
      const o = e => e - .02,
        i = {
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
      var d = t(31985);
      const a = "__FOUNDRY_ACCENT__",
        l = (e, n) => r.X ? n() : (window[a] || (window[a] = new Map), window[a].has(e) || window[a].set(e, n()), window[a].get(e));
      t(68309);
      var s, c = t(15963);

      function f(e, ...n) {
        return c(e, ...n)
      }
      t(54028), t(74143), t(88584), t(73892), t(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(s || (s = {})), Symbol.toStringTag;
      const p = (...e) => e.filter(e => e).join(" ")
    },
    31985(e, n, t) {
      t.d(n, {
        v: () => a
      });
      var r = t(81270);
      const o = new Map;

      function i(e, n) {
        if (e === n) return e;
        const t = o.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const r = o.get(n);
        return r ? (r.forEach(n => n(e)), e) : n
      }

      function d(...e) {
        return (...n) => {
          for (const t of e) "function" == typeof t && t(...n)
        }
      }

      function a(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const o = e[t];
          for (const e in o) {
            const t = n[e],
              a = o[e];
            "function" == typeof t && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = d(t, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof a ? "id" === e && t && a ? n.id = i(t, a) : n[e] = void 0 !== a ? a : t : n[e] = (0, r.clsx)(t, a)
          }
        }
        return n
      }
    },
    91497(e, n, t) {
      t.d(n, {
        b: () => a
      });
      var r = t(93082),
        o = t(34376),
        i = t(39793),
        d = ({
          children: e,
          label: n
        }) => {
          const t = r.Children.only(e);
          return (0, i.jsxs)(i.Fragment, {
            children: [r.cloneElement(t, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, i.jsx)(o.bL, {
              children: n
            })]
          })
        };
      d.displayName = "AccessibleIcon";
      var a = d
    },
    50446(e, n, t) {
      t.d(n, {
        s: () => d,
        t: () => i
      });
      var r = t(93082);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function i(...e) {
        return n => {
          let t = !1;
          const r = e.map(e => {
            const r = o(e, n);
            return t || "function" != typeof r || (t = !0), r
          });
          if (t) return () => {
            for (let n = 0; n < r.length; n++) {
              const t = r[n];
              "function" == typeof t ? t() : o(e[n], null)
            }
          }
        }
      }

      function d(...e) {
        return r.useCallback(i(...e), e)
      }
    },
    4031(e, n, t) {
      t.d(n, {
        sG: () => d
      });
      var r = t(93082),
        o = (t(84017), t(38957)),
        i = t(39793),
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, o.TL)(`Primitive.${n}`),
            d = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...d
              } = e, a = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
                ...d,
                ref: r
              })
            });
          return d.displayName = `Primitive.${n}`, {
            ...e,
            [n]: d
          }
        }, {})
    },
    38957(e, n, t) {
      var r;
      t.d(n, {
        DX: () => f,
        TL: () => c,
        xV: () => w
      });
      var o = t(93082),
        i = t(50446),
        d = t(39793),
        a = Symbol.for("react.lazy"),
        l = (r || (r = t.t(o, 2)))[" use ".trim().toString()];

      function s(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === a && "_payload" in e && "object" == typeof(n = e._payload) && null !== n && "then" in n;
        var n
      }

      function c(e) {
        const n = p(e),
          t = o.forwardRef((e, t) => {
            let {
              children: r,
              ...i
            } = e;
            s(r) && "function" == typeof l && (r = l(r._payload));
            const a = o.Children.toArray(r),
              c = a.find(h);
            if (c) {
              const e = c.props.children,
                r = a.map(n => n === c ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : n);
              return (0, d.jsx)(n, {
                ...i,
                ref: t,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, d.jsx)(n, {
              ...i,
              ref: t,
              children: r
            })
          });
        return t.displayName = `${e}.Slot`, t
      }
      var f = c("Slot");

      function p(e) {
        const n = o.forwardRef((e, n) => {
          let {
            children: t,
            ...r
          } = e;
          if (s(t) && "function" == typeof l && (t = l(t._payload)), o.isValidElement(t)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = n && "isReactWarning" in n && n.isReactWarning;
                return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              d = function(e, n) {
                const t = {
                  ...n
                };
                for (const r in n) {
                  const o = e[r],
                    i = n[r];
                  /^on[A-Z]/.test(r) ? o && i ? t[r] = (...e) => {
                    const n = i(...e);
                    return o(...e), n
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (t[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(r, t.props);
            return t.type !== o.Fragment && (d.ref = n ? (0, i.t)(n, e) : e), o.cloneElement(t, d)
          }
          return o.Children.count(t) > 1 ? o.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var u = Symbol("radix.slottable");

      function y(e) {
        const n = ({
          children: e
        }) => (0, d.jsx)(d.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = u, n
      }
      var w = y("Slottable");

      function h(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === u
      }
    },
    34376(e, n, t) {
      t.d(n, {
        bL: () => l,
        s6: () => a
      });
      var r = t(93082),
        o = t(4031),
        i = t(39793),
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
        a = r.forwardRef((e, n) => (0, i.jsx)(o.sG.span, {
          ...e,
          ref: n,
          style: {
            ...d,
            ...e.style
          }
        }));
      a.displayName = "VisuallyHidden";
      var l = a
    }
  }
]);