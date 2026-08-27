try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c0e0bc55-23b2-4508-99d8-ef2dcde3e444", e._sentryDebugIdIdentifier = "sentry-dbid-c0e0bc55-23b2-4508-99d8-ef2dcde3e444")
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
  [129, 329], {
    32101(e, t, n) {
      const o = "undefined" == typeof window;
      n.d(t, ["X", 0, o])
    },
    36421(e, t, n) {
      n.d(t, {
        X3: () => o.X,
        fi: () => i,
        IO: () => l,
        VW: () => p,
        v6: () => d.v,
        cJ: () => f
      });
      var o = n(32101);
      const r = e => e - .02,
        i = {
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
      var d = n(64043);
      const a = "__FOUNDRY_ACCENT__",
        l = (e, t) => o.X ? t() : (window[a] || (window[a] = new Map), window[a].has(e) || window[a].set(e, t()), window[a].get(e));
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
    64043(e, t, n) {
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

      function d(...e) {
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
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = d(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, o.clsx)(n, a)
          }
        }
        return t
      }
    },
    85049(e, t, n) {
      n.d(t, {
        s: () => l
      });
      var o = n(93082),
        r = Object.defineProperty,
        i = (e, t) => r(e, "name", {
          value: t,
          configurable: !0
        });

      function d(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function a(...e) {
        return t => {
          let n = !1;
          const o = e.map(e => {
            const o = d(e, t);
            return n || "function" != typeof o || (n = !0), o
          });
          if (n) return () => {
            for (let t = 0; t < o.length; t++) {
              const n = o[t];
              "function" == typeof n ? n() : d(e[t], null)
            }
          }
        }
      }

      function l(...e) {
        return o.useCallback(a(...e), e)
      }
      i(d, "setRef"), i(a, "composeRefs"), i(l, "useComposedRefs")
    },
    658(e, t, n) {
      n.d(t, {
        hO: () => s,
        sG: () => l
      });
      var o = n(93082),
        r = n(84017),
        i = n(93237),
        d = n(39793),
        a = Object.defineProperty,
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, i.TL)(`Primitive.${t}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...i
              } = e, a = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, d.jsx)(a, {
                ...i,
                ref: o
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {});

      function s(e, t) {
        e && r.flushSync(() => e.dispatchEvent(t))
      }
      a(s, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    93237(e, t, n) {
      let o;
      n.d(t, {
        DX: () => s,
        Dc: () => f,
        TL: () => l,
        xV: () => p
      });
      var r = n(93082),
        i = n(85049),
        d = Object.defineProperty,
        a = (e, t) => d(e, "name", {
          value: t,
          configurable: !0
        });

      function l(e) {
        const t = r.forwardRef((t, n) => {
          let {
            children: o,
            ...d
          } = t, a = null, l = !1;
          const s = [];
          m(o) && "function" == typeof E && (o = E(o._payload)), r.Children.forEach(o, e => {
            if (b(e)) {
              l = !0;
              const t = e;
              let n = "child" in t.props ? t.props.child : t.props.children;
              m(n) && "function" == typeof E && (n = E(n._payload)), a = u(t, n), s.push(a?.props?.children)
            } else s.push(e)
          }), a ? a = r.cloneElement(a, void 0, s) : !l && 1 === r.Children.count(o) && r.isValidElement(o) && (a = o);
          const c = a ? h(a) : void 0,
            f = (0, i.s)(n, c);
          if (!a) {
            if (o || 0 === o) throw new Error(l ? v(e) : _(e));
            return o
          }
          const p = y(d, a.props ?? {});
          return a.type !== r.Fragment && (p.ref = n ? f : c), r.cloneElement(a, p)
        });
        return t.displayName = `${e}.Slot`, t
      }
      a(l, "createSlot");
      var s = l("Slot"),
        c = Symbol.for("radix.slottable");

      function f(e) {
        const t = a(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`, t.__radixId = c, t
      }
      a(f, "createSlottable");
      var p = f("Slottable"),
        u = a((e, t) => {
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

      function h(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
      }

      function b(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c
      }
      a(y, "mergeProps"), a(h, "getElementRef"), a(b, "isSlottable");
      var g = Symbol.for("react.lazy");

      function m(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === g && "_payload" in e && w(e._payload)
      }

      function w(e) {
        return "object" == typeof e && null !== e && "then" in e
      }
      a(m, "isLazyComponent"), a(w, "isPromiseLike");
      var _ = a(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        v = a(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        E = (o || (o = n.t(r, 2)))[" use ".trim().toString()]
    },
    10333(e, t, n) {
      n.d(t, {
        Qg: () => l,
        bL: () => c,
        s6: () => s
      });
      var o = n(93082),
        r = n(658),
        i = n(39793),
        d = Object.defineProperty,
        a = (e, t) => d(e, "name", {
          value: t,
          configurable: !0
        }),
        l = Object.freeze({
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
        s = o.forwardRef(a(function(e, t) {
          return (0, i.jsx)(r.sG.span, {
            ...e,
            ref: t,
            style: {
              ...l,
              ...e.style
            }
          })
        }, "VisuallyHidden")),
        c = s
    }
  }
]);