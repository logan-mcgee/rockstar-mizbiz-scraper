try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a7f77915-934c-49d3-8e83-5e92f11a16c5", e._sentryDebugIdIdentifier = "sentry-dbid-a7f77915-934c-49d3-8e83-5e92f11a16c5")
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
  [78, 704], {
    27059(e, t, n) {
      const o = "undefined" == typeof window;
      n.d(t, ["X", 0, o])
    },
    60720(e, t, n) {
      n.d(t, {
        X3: () => o.X,
        IO: () => a,
        v6: () => i.v
      });
      var o = n(27059);
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var i = n(24513);
      const l = "__FOUNDRY_ACCENT__",
        a = (e, t) => o.X ? t() : (window[l] || (window[l] = new Map), window[l].has(e) || window[l].set(e, t()), window[l].get(e));
      var d;
      n(68309), n(15963), n(54028), n(74143), n(88584), n(73892), n(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(d || (d = {})), Symbol.toStringTag
    },
    24513(e, t, n) {
      n.d(t, {
        v: () => a
      });
      var o = n(81270);
      const r = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = r.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const o = r.get(t);
        return o ? (o.forEach(t => t(e)), e) : t
      }

      function l(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              a = r[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = l(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, o.clsx)(n, a)
          }
        }
        return t
      }
    },
    74660(e, t, n) {
      n.d(t, {
        b: () => y
      });
      var o = n(93082),
        r = n(84017),
        i = n(93237),
        l = n(39793),
        a = Object.defineProperty,
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, i.TL)(`Primitive.${t}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...i
              } = e, a = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(a, {
                ...i,
                ref: o
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {});
      a(function(e, t) {
        e && r.flushSync(() => e.dispatchEvent(t))
      }, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      });
      var s = Object.defineProperty,
        c = (e, t) => s(e, "name", {
          value: t,
          configurable: !0
        }),
        f = Object.freeze({
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
        u = o.forwardRef(c(function(e, t) {
          return (0, l.jsx)(d.span, {
            ...e,
            ref: t,
            style: {
              ...f,
              ...e.style
            }
          })
        }, "VisuallyHidden")),
        p = Object.defineProperty,
        y = ((e, t) => p(e, "name", {
          value: t,
          configurable: !0
        }))(({
          children: e,
          label: t
        }) => {
          const n = o.Children.only(e);
          return (0, l.jsxs)(l.Fragment, {
            children: [o.cloneElement(n, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, l.jsx)(u, {
              children: t
            })]
          })
        }, "AccessibleIcon")
    },
    85049(e, t, n) {
      n.d(t, {
        s: () => d
      });
      var o = n(93082),
        r = Object.defineProperty,
        i = (e, t) => r(e, "name", {
          value: t,
          configurable: !0
        });

      function l(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function a(...e) {
        return t => {
          let n = !1;
          const o = e.map(e => {
            const o = l(e, t);
            return n || "function" != typeof o || (n = !0), o
          });
          if (n) return () => {
            for (let t = 0; t < o.length; t++) {
              const n = o[t];
              "function" == typeof n ? n() : l(e[t], null)
            }
          }
        }
      }

      function d(...e) {
        return o.useCallback(a(...e), e)
      }
      i(l, "setRef"), i(a, "composeRefs"), i(d, "useComposedRefs")
    },
    93237(e, t, n) {
      let o;
      n.d(t, {
        DX: () => s,
        Dc: () => f,
        TL: () => d,
        xV: () => u
      });
      var r = n(93082),
        i = n(85049),
        l = Object.defineProperty,
        a = (e, t) => l(e, "name", {
          value: t,
          configurable: !0
        });

      function d(e) {
        const t = r.forwardRef((t, n) => {
          let {
            children: o,
            ...l
          } = t, a = null, d = !1;
          const s = [];
          m(o) && "function" == typeof E && (o = E(o._payload)), r.Children.forEach(o, e => {
            if (g(e)) {
              d = !0;
              const t = e;
              let n = "child" in t.props ? t.props.child : t.props.children;
              m(n) && "function" == typeof E && (n = E(n._payload)), a = p(t, n), s.push(a?.props?.children)
            } else s.push(e)
          }), a ? a = r.cloneElement(a, void 0, s) : !d && 1 === r.Children.count(o) && r.isValidElement(o) && (a = o);
          const c = a ? b(a) : void 0,
            f = (0, i.s)(n, c);
          if (!a) {
            if (o || 0 === o) throw new Error(d ? v(e) : _(e));
            return o
          }
          const u = y(l, a.props ?? {});
          return a.type !== r.Fragment && (u.ref = n ? f : c), r.cloneElement(a, u)
        });
        return t.displayName = `${e}.Slot`, t
      }
      a(d, "createSlot");
      var s = d("Slot"),
        c = Symbol.for("radix.slottable");

      function f(e) {
        const t = a(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`, t.__radixId = c, t
      }
      a(f, "createSlottable");
      var u = f("Slottable"),
        p = a((e, t) => {
          if ("child" in e.props) {
            const t = e.props.child;
            return r.isValidElement(t) ? r.cloneElement(t, void 0, e.props.children(t.props.children)) : null
          }
          return r.isValidElement(t) ? t : null
        }, "getSlottableElementFromSlottable");

      function y(e, t) {
        const n = {
          ...t
        };
        for (const o in t) {
          const r = e[o],
            i = t[o];
          /^on[A-Z]/.test(o) ? r && i ? n[o] = (...e) => {
            const t = i(...e);
            return r(...e), t
          } : r && (n[o] = r) : "style" === o ? n[o] = {
            ...r,
            ...i
          } : "className" === o && (n[o] = [r, i].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...n
        }
      }

      function b(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
      }

      function g(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c
      }
      a(y, "mergeProps"), a(b, "getElementRef"), a(g, "isSlottable");
      var h = Symbol.for("react.lazy");

      function m(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === h && "_payload" in e && w(e._payload)
      }

      function w(e) {
        return "object" == typeof e && null !== e && "then" in e
      }
      a(m, "isLazyComponent"), a(w, "isPromiseLike");
      var _ = a(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        v = a(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        E = (o || (o = n.t(r, 2)))[" use ".trim().toString()]
    }
  }
]);