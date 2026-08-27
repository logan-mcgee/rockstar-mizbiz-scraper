try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6ea0ce9c-f6fa-4cf3-b63e-ea0134bfcccd", e._sentryDebugIdIdentifier = "sentry-dbid-6ea0ce9c-f6fa-4cf3-b63e-ea0134bfcccd")
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
  [232], {
    21297(e, t, n) {
      n.d(t, {
        DX: () => o.DX,
        xV: () => o.xV,
        s6: () => a
      });
      var o = n(93237),
        r = n(39793),
        i = n(93082),
        l = n(10333);
      const a = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? l.s6 : i.Fragment;
        return (0, r.jsx)(n, {
          ...t
        })
      }
    },
    85049(e, t, n) {
      n.d(t, {
        s: () => s
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

      function s(...e) {
        return o.useCallback(a(...e), e)
      }
      i(l, "setRef"), i(a, "composeRefs"), i(s, "useComposedRefs")
    },
    658(e, t, n) {
      n.d(t, {
        hO: () => c,
        sG: () => s
      });
      var o = n(93082),
        r = n(84017),
        i = n(93237),
        l = n(39793),
        a = Object.defineProperty,
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
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

      function c(e, t) {
        e && r.flushSync(() => e.dispatchEvent(t))
      }
      a(c, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    93237(e, t, n) {
      let o;
      n.d(t, {
        DX: () => c,
        Dc: () => f,
        TL: () => s,
        xV: () => u
      });
      var r = n(93082),
        i = n(85049),
        l = Object.defineProperty,
        a = (e, t) => l(e, "name", {
          value: t,
          configurable: !0
        });

      function s(e) {
        const t = r.forwardRef((t, n) => {
          let {
            children: o,
            ...l
          } = t, a = null, s = !1;
          const c = [];
          m(o) && "function" == typeof S && (o = S(o._payload)), r.Children.forEach(o, e => {
            if (g(e)) {
              s = !0;
              const t = e;
              let n = "child" in t.props ? t.props.child : t.props.children;
              m(n) && "function" == typeof S && (n = S(n._payload)), a = p(t, n), c.push(a?.props?.children)
            } else c.push(e)
          }), a ? a = r.cloneElement(a, void 0, c) : !s && 1 === r.Children.count(o) && r.isValidElement(o) && (a = o);
          const d = a ? y(a) : void 0,
            f = (0, i.s)(n, d);
          if (!a) {
            if (o || 0 === o) throw new Error(s ? v(e) : _(e));
            return o
          }
          const u = b(l, a.props ?? {});
          return a.type !== r.Fragment && (u.ref = n ? f : d), r.cloneElement(a, u)
        });
        return t.displayName = `${e}.Slot`, t
      }
      a(s, "createSlot");
      var c = s("Slot"),
        d = Symbol.for("radix.slottable");

      function f(e) {
        const t = a(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`, t.__radixId = d, t
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

      function b(e, t) {
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

      function y(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
      }

      function g(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === d
      }
      a(b, "mergeProps"), a(y, "getElementRef"), a(g, "isSlottable");
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
        S = (o || (o = n.t(r, 2)))[" use ".trim().toString()]
    },
    10333(e, t, n) {
      n.d(t, {
        Qg: () => s,
        bL: () => d,
        s6: () => c
      });
      var o = n(93082),
        r = n(658),
        i = n(39793),
        l = Object.defineProperty,
        a = (e, t) => l(e, "name", {
          value: t,
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
        c = o.forwardRef(a(function(e, t) {
          return (0, i.jsx)(r.sG.span, {
            ...e,
            ref: t,
            style: {
              ...s,
              ...e.style
            }
          })
        }, "VisuallyHidden")),
        d = c
    },
    55735(e, t, n) {
      n.d(t, {
        V: () => s
      }), Math.pow(10, 8);
      const o = Symbol.for("constructDateFrom");

      function r(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && o in e ? e[o](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }

      function i(e, ...t) {
        const n = r.bind(null, e || t.find(e => "object" == typeof e));
        return t.map(n)
      }

      function l(e, t) {
        return r(t || e, e)
      }

      function a(e, t) {
        const n = +l(e) - +l(t);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function s(e, t, n) {
        const [o, r] = i(n?.in, e, t), l = a(o, r), s = Math.abs(function(e, t, n) {
          const [o, r] = i(n?.in, e, t);
          return o.getFullYear() - r.getFullYear()
        }(o, r));
        o.setFullYear(1584), r.setFullYear(1584);
        const c = l * (s - +(a(o, r) === -l));
        return 0 === c ? 0 : c
      }
    },
    24785(e, t, n) {
      function o(e) {
        return e instanceof Date || "object" == typeof e && "[object Date]" === Object.prototype.toString.call(e)
      }
      n.d(t, {
        $: () => o
      })
    },
    77461(e, t, n) {
      function o(e, t, n) {
        const o = new Date(e, t, n);
        return o.getFullYear() === e && o.getMonth() === t && o.getDate() === n
      }
      n.d(t, {
        D: () => o
      })
    }
  }
]);