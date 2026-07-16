try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b3398edf-54a1-42ef-a891-547ae718d814", e._sentryDebugIdIdentifier = "sentry-dbid-b3398edf-54a1-42ef-a891-547ae718d814")
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
  [347, 600], {
    31602(e, t, n) {
      const o = "undefined" == typeof window;
      n.d(t, ["X", 0, o])
    },
    7912(e, t, n) {
      n.d(t, {
        X3: () => o.X,
        fi: () => r,
        IO: () => l,
        VW: () => p,
        v6: () => a.v,
        cJ: () => f
      });
      var o = n(31602);
      const i = e => e - .02,
        r = {
          mobile: `(min-width: 0px) and (max-width: ${i(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${i(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${i(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${i(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var a = n(47460);
      const d = "__FOUNDRY_ACCENT__",
        l = (e, t) => o.X ? t() : (window[d] || (window[d] = new Map), window[d].has(e) || window[d].set(e, t()), window[d].get(e));
      n(68309);
      var s, c = n(15963);

      function f(e, ...t) {
        return c(e, ...t)
      }
      n(54028), n(74143), n(88584), n(73892), n(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(s || (s = {})), Symbol.toStringTag;
      const p = (...e) => e.filter(e => e).join(" ")
    },
    47460(e, t, n) {
      n.d(t, {
        v: () => d
      });
      var o = n(81270);
      const i = new Map;

      function r(e, t) {
        if (e === t) return e;
        const n = i.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const o = i.get(t);
        return o ? (o.forEach(t => t(e)), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function d(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const i = e[n];
          for (const e in i) {
            const n = t[e],
              d = i[e];
            "function" == typeof n && "function" == typeof d && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, d) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof d ? "id" === e && n && d ? t.id = r(n, d) : t[e] = void 0 !== d ? d : n : t[e] = (0, o.clsx)(n, d)
          }
        }
        return t
      }
    },
    77301(e, t, n) {
      n.d(t, {
        b: () => d
      });
      var o = n(93082),
        i = n(84045),
        r = n(39793),
        a = ({
          children: e,
          label: t
        }) => {
          const n = o.Children.only(e);
          return (0, r.jsxs)(r.Fragment, {
            children: [o.cloneElement(n, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, r.jsx)(i.bL, {
              children: t
            })]
          })
        };
      a.displayName = "AccessibleIcon";
      var d = a
    },
    64239(e, t, n) {
      n.d(t, {
        s: () => r
      });
      var o = n(93082);

      function i(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function r(...e) {
        return o.useCallback(function(...e) {
          return t => {
            let n = !1;
            const o = e.map(e => {
              const o = i(e, t);
              return n || "function" != typeof o || (n = !0), o
            });
            if (n) return () => {
              for (let t = 0; t < o.length; t++) {
                const n = o[t];
                "function" == typeof n ? n() : i(e[t], null)
              }
            }
          }
        }(...e), e)
      }
    },
    13165(e, t, n) {
      n.d(t, {
        hO: () => l,
        sG: () => d
      });
      var o = n(93082),
        i = n(84017),
        r = n(17172),
        a = n(39793),
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, r.TL)(`Primitive.${t}`),
            i = o.forwardRef((e, o) => {
              const {
                asChild: i,
                ...r
              } = e, d = i ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(d, {
                ...r,
                ref: o
              })
            });
          return i.displayName = `Primitive.${t}`, {
            ...e,
            [t]: i
          }
        }, {});

      function l(e, t) {
        e && i.flushSync(() => e.dispatchEvent(t))
      }
    },
    17172(e, t, n) {
      let o;
      n.d(t, {
        DX: () => d,
        Dc: () => s,
        TL: () => a,
        xV: () => c
      });
      var i = n(93082),
        r = n(64239);

      function a(e) {
        const t = i.forwardRef((t, n) => {
          let {
            children: o,
            ...a
          } = t, d = null, s = !1;
          const c = [];
          u(o) && "function" == typeof w && (o = w(o._payload)), i.Children.forEach(o, e => {
            if (t = e, i.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === l) {
              s = !0;
              const t = e;
              let n = "child" in t.props ? t.props.child : t.props.children;
              u(n) && "function" == typeof w && (n = w(n._payload)), d = f(t, n), c.push(d?.props?.children)
            } else c.push(e);
            var t
          }), d ? d = i.cloneElement(d, void 0, c) : !s && 1 === i.Children.count(o) && i.isValidElement(o) && (d = o);
          const p = d ? function(e) {
              let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                n = t && "isReactWarning" in t && t.isReactWarning;
              return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
            }(d) : void 0,
            g = (0, r.s)(n, p);
          if (!d) {
            if (o || 0 === o) throw new Error(s ? y(e) : h(e));
            return o
          }
          const b = function(e, t) {
            const n = {
              ...t
            };
            for (const o in t) {
              const i = e[o],
                r = t[o];
              /^on[A-Z]/.test(o) ? i && r ? n[o] = (...e) => {
                const t = r(...e);
                return i(...e), t
              } : i && (n[o] = i) : "style" === o ? n[o] = {
                ...i,
                ...r
              } : "className" === o && (n[o] = [i, r].filter(Boolean).join(" "))
            }
            return {
              ...e,
              ...n
            }
          }(a, d.props ?? {});
          return d.type !== i.Fragment && (b.ref = n ? g : p), i.cloneElement(d, b)
        });
        return t.displayName = `${e}.Slot`, t
      }
      var d = a("Slot"),
        l = Symbol.for("radix.slottable");

      function s(e) {
        const t = e => "child" in e ? e.children(e.child) : e.children;
        return t.displayName = `${e}.Slottable`, t.__radixId = l, t
      }
      var c = s("Slottable"),
        f = (e, t) => {
          if ("child" in e.props) {
            const t = e.props.child;
            return i.isValidElement(t) ? i.cloneElement(t, void 0, e.props.children(t.props.children)) : null
          }
          return i.isValidElement(t) ? t : null
        },
        p = Symbol.for("react.lazy");

      function u(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === p && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }
      var h = e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        y = e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        w = (o || (o = n.t(i, 2)))[" use ".trim().toString()]
    },
    84045(e, t, n) {
      n.d(t, {
        Qg: () => a,
        bL: () => l,
        s6: () => d
      });
      var o = n(93082),
        i = n(13165),
        r = n(39793),
        a = Object.freeze({
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
        d = o.forwardRef((e, t) => (0, r.jsx)(i.sG.span, {
          ...e,
          ref: t,
          style: {
            ...a,
            ...e.style
          }
        }));
      d.displayName = "VisuallyHidden";
      var l = d
    }
  }
]);