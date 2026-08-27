try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "67dd8d96-fac1-4797-b9b4-969dcd486232", e._sentryDebugIdIdentifier = "sentry-dbid-67dd8d96-fac1-4797-b9b4-969dcd486232")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2174, 2647, 4555, 5028, 9793], {
    94931(e, t, n) {
      var o = n(93082),
        r = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        c = Object.prototype.hasOwnProperty,
        a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, t, n) {
        var o, i = {},
          s = null,
          d = null;
        for (o in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (d = t.ref), t) c.call(t, o) && !l.hasOwnProperty(o) && (i[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === i[o] && (i[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: s,
          ref: d,
          props: i,
          _owner: a.current
        }
      }
      t.Fragment = i, t.jsx = s, t.jsxs = s
    },
    39793(e, t, n) {
      e.exports = n(94931)
    },
    44752(e, t, n) {
      n.d(t, {
        mK: () => c
      });
      var o = Object.defineProperty,
        r = (e, t) => o(e, "name", {
          value: t,
          configurable: !0
        }),
        i = !("undefined" == typeof window || !window.document || !window.document.createElement);

      function c(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return r(function(o) {
          if (e?.(o), !1 === n || !o || !o.defaultPrevented) return t?.(o)
        }, "handleEvent")
      }

      function a(e) {
        if (!i) throw new Error("Cannot access document outside of the DOM");
        return e?.ownerDocument ?? document
      }

      function l(e) {
        return "IFRAME" === e.tagName
      }
      r(c, "composeEventHandlers"), r(function(e) {
        if (!i) throw new Error("Cannot access window outside of the DOM");
        return e?.ownerDocument?.defaultView ?? window
      }, "getOwnerWindow"), r(a, "getOwnerDocument"), r(function e(t, n = !1) {
        const {
          activeElement: o
        } = a(t);
        if (!o?.nodeName) return null;
        if (l(o) && o.contentDocument) return e(o.contentDocument.body, n);
        if (n) {
          const e = o.getAttribute("aria-activedescendant");
          if (e) {
            const t = a(o).getElementById(e);
            if (t) return t
          }
        }
        return o
      }, "getActiveElement"), r(l, "isFrame")
    },
    76733(e, t, n) {
      n.d(t, {
        D: () => o
      });
      var o = !1
    },
    82647(e, t, n) {
      n.r(t), n.d(t, {
        Accordion: () => H,
        AccordionContent: () => re,
        AccordionHeader: () => te,
        AccordionItem: () => ee,
        AccordionTrigger: () => oe,
        Content: () => de,
        Header: () => le,
        Item: () => ae,
        Root: () => ce,
        Trigger: () => se,
        createAccordionScope: () => L
      });
      var o = n(93082),
        r = n(72579),
        i = n(97620),
        c = n(85049),
        a = n(44752),
        l = n(15782),
        s = n(41988),
        d = n(9608),
        u = n(81432),
        f = n(88918),
        p = n(39793),
        m = Object.defineProperty,
        b = (e, t) => m(e, "name", {
          value: t,
          configurable: !0
        }),
        g = "Collapsible",
        [h, v] = (0, r.A)(g),
        [y, w] = h(g),
        C = o.forwardRef(b(function(e, t) {
          const {
            __scopeCollapsible: n,
            open: r,
            defaultOpen: i,
            disabled: c,
            onOpenChange: a,
            ...d
          } = e, [u, m] = (0, l.i)({
            prop: r,
            defaultProp: i ?? !1,
            onChange: a,
            caller: g
          });
          return (0, p.jsx)(y, {
            scope: n,
            disabled: c,
            contentId: (0, f.B)(),
            open: u,
            onOpenToggle: o.useCallback(() => m(e => !e), [m]),
            children: (0, p.jsx)(s.sG.div, {
              "data-state": j(u),
              "data-disabled": c ? "" : void 0,
              ...d,
              ref: t
            })
          })
        }, "Collapsible")),
        _ = o.forwardRef(b(function(e, t) {
          const {
            __scopeCollapsible: n,
            ...o
          } = e, r = w("CollapsibleTrigger", n);
          return (0, p.jsx)(s.sG.button, {
            type: "button",
            "aria-controls": r.open ? r.contentId : void 0,
            "aria-expanded": r.open || !1,
            "data-state": j(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...o,
            ref: t,
            onClick: (0, a.mK)(e.onClick, r.onOpenToggle)
          })
        }, "CollapsibleTrigger")),
        x = "CollapsibleContent",
        E = o.forwardRef(b(function(e, t) {
          const {
            forceMount: n,
            ...o
          } = e, r = w(x, e.__scopeCollapsible);
          return (0, p.jsx)(u.C, {
            present: n || r.open,
            children: ({
              present: e
            }) => (0, p.jsx)(S, {
              ...o,
              ref: t,
              present: e
            })
          })
        }, "CollapsibleContent")),
        S = o.forwardRef(b(function(e, t) {
          const {
            __scopeCollapsible: n,
            present: r,
            children: i,
            ...a
          } = e, l = w(x, n), [u, f] = o.useState(r), m = o.useRef(null), b = (0, c.s)(t, m), g = o.useRef(0), h = g.current, v = o.useRef(0), y = v.current, C = l.open || u, _ = o.useRef(C), E = o.useRef(void 0);
          return o.useEffect(() => {
            const e = requestAnimationFrame(() => _.current = !1);
            return () => cancelAnimationFrame(e)
          }, []), (0, d.N)(() => {
            const e = m.current;
            if (e) {
              E.current = E.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName
              }, e.style.transitionDuration = "0s", e.style.animationName = "none";
              const t = e.getBoundingClientRect();
              g.current = t.height, v.current = t.width, _.current || (e.style.transitionDuration = E.current.transitionDuration, e.style.animationName = E.current.animationName), f(r)
            }
          }, [l.open, r]), (0, p.jsx)(s.sG.div, {
            "data-state": j(l.open),
            "data-disabled": l.disabled ? "" : void 0,
            id: l.contentId,
            hidden: !C,
            ...a,
            ref: b,
            style: {
              "--radix-collapsible-content-height": h ? `${h}px` : void 0,
              "--radix-collapsible-content-width": y ? `${y}px` : void 0,
              ...e.style
            },
            children: C && i
          })
        }, "CollapsibleContentImpl"));

      function j(e) {
        return e ? "open" : "closed"
      }
      b(j, "getState");
      var R = C,
        A = _,
        O = E,
        I = n(12430),
        P = Object.defineProperty,
        D = (e, t) => P(e, "name", {
          value: t,
          configurable: !0
        }),
        N = "Accordion",
        k = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [$, T, M] = (0, i.N)(N),
        [V, L] = (0, r.A)(N, [M, v]),
        F = v(),
        H = o.forwardRef(D(function(e, t) {
          const {
            type: n,
            ...o
          } = e, r = o, i = o;
          return (0, p.jsx)($.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === n ? (0, p.jsx)(z, {
              ...i,
              ref: t
            }) : (0, p.jsx)(U, {
              ...r,
              ref: t
            })
          })
        }, "Accordion")),
        [B, G] = V(N),
        [W, K] = V(N, {
          collapsible: !1
        }),
        U = o.forwardRef(D(function(e, t) {
          const {
            value: n,
            defaultValue: r,
            onValueChange: i = D(() => {}, "onValueChange"),
            collapsible: c = !1,
            ...a
          } = e, [s, d] = (0, l.i)({
            prop: n,
            defaultProp: r ?? "",
            onChange: i,
            caller: N
          });
          return (0, p.jsx)(B, {
            scope: e.__scopeAccordion,
            value: o.useMemo(() => s ? [s] : [], [s]),
            onItemOpen: d,
            onItemClose: o.useCallback(() => c && d(""), [c, d]),
            children: (0, p.jsx)(W, {
              scope: e.__scopeAccordion,
              collapsible: c,
              children: (0, p.jsx)(q, {
                ...a,
                ref: t
              })
            })
          })
        }, "AccordionImplSingle")),
        z = o.forwardRef(D(function(e, t) {
          const {
            value: n,
            defaultValue: r,
            onValueChange: i = D(() => {}, "onValueChange"),
            ...c
          } = e, [a, s] = (0, l.i)({
            prop: n,
            defaultProp: r ?? [],
            onChange: i,
            caller: N
          }), d = o.useCallback(e => s((t = []) => [...t, e]), [s]), u = o.useCallback(e => s((t = []) => t.filter(t => t !== e)), [s]);
          return (0, p.jsx)(B, {
            scope: e.__scopeAccordion,
            value: a,
            onItemOpen: d,
            onItemClose: u,
            children: (0, p.jsx)(W, {
              scope: e.__scopeAccordion,
              collapsible: !0,
              children: (0, p.jsx)(q, {
                ...c,
                ref: t
              })
            })
          })
        }, "AccordionImplMultiple")),
        [Y, X] = V(N),
        q = o.forwardRef(D(function(e, t) {
          const {
            __scopeAccordion: n,
            disabled: r,
            dir: i,
            orientation: l = "vertical",
            ...d
          } = e, u = o.useRef(null), f = (0, c.s)(u, t), m = T(n), b = "ltr" === (0, I.jH)(i), g = (0, a.mK)(e.onKeyDown, e => {
            if (!k.includes(e.key)) return;
            const t = e.target,
              n = m().filter(e => !e.ref.current?.disabled),
              o = n.findIndex(e => e.ref.current === t),
              r = n.length;
            if (-1 === o) return;
            e.preventDefault();
            let i = o;
            const c = r - 1,
              a = D(() => {
                i = o + 1, i > c && (i = 0)
              }, "moveNext"),
              s = D(() => {
                i = o - 1, i < 0 && (i = c)
              }, "movePrev");
            switch (e.key) {
              case "Home":
                i = 0;
                break;
              case "End":
                i = c;
                break;
              case "ArrowRight":
                "horizontal" === l && (b ? a() : s());
                break;
              case "ArrowDown":
                "vertical" === l && a();
                break;
              case "ArrowLeft":
                "horizontal" === l && (b ? s() : a());
                break;
              case "ArrowUp":
                "vertical" === l && s()
            }
            const d = i % r;
            n[d].ref.current?.focus()
          });
          return (0, p.jsx)(Y, {
            scope: n,
            disabled: r,
            direction: i,
            orientation: l,
            children: (0, p.jsx)($.Slot, {
              scope: n,
              children: (0, p.jsx)(s.sG.div, {
                ...d,
                "data-orientation": l,
                ref: f,
                onKeyDown: r ? void 0 : g
              })
            })
          })
        }, "AccordionImpl")),
        Z = "AccordionItem",
        [J, Q] = V(Z),
        ee = o.forwardRef(D(function(e, t) {
          const {
            __scopeAccordion: n,
            value: o,
            ...r
          } = e, i = X(Z, n), c = G(Z, n), a = F(n), l = (0, f.B)(), s = o && c.value.includes(o) || !1, d = i.disabled || e.disabled;
          return (0, p.jsx)(J, {
            scope: n,
            open: s,
            disabled: d,
            triggerId: l,
            children: (0, p.jsx)(R, {
              "data-orientation": i.orientation,
              "data-state": ie(s),
              ...a,
              ...r,
              ref: t,
              disabled: d,
              open: s,
              onOpenChange: e => {
                e ? c.onItemOpen(o) : c.onItemClose(o)
              }
            })
          })
        }, "AccordionItem")),
        te = o.forwardRef(D(function(e, t) {
          const {
            __scopeAccordion: n,
            ...o
          } = e, r = X(N, n), i = Q("AccordionHeader", n);
          return (0, p.jsx)(s.sG.h3, {
            "data-orientation": r.orientation,
            "data-state": ie(i.open),
            "data-disabled": i.disabled ? "" : void 0,
            ...o,
            ref: t
          })
        }, "AccordionHeader")),
        ne = "AccordionTrigger",
        oe = o.forwardRef(D(function(e, t) {
          const {
            __scopeAccordion: n,
            ...o
          } = e, r = X(N, n), i = Q(ne, n), c = K(ne, n), a = F(n);
          return (0, p.jsx)($.ItemSlot, {
            scope: n,
            children: (0, p.jsx)(A, {
              "aria-disabled": i.open && !c.collapsible || void 0,
              "data-orientation": r.orientation,
              id: i.triggerId,
              ...a,
              ...o,
              ref: t
            })
          })
        }, "AccordionTrigger")),
        re = o.forwardRef(D(function(e, t) {
          const {
            __scopeAccordion: n,
            ...o
          } = e, r = X(N, n), i = Q("AccordionContent", n), c = F(n);
          return (0, p.jsx)(O, {
            role: "region",
            "aria-labelledby": i.triggerId,
            "data-orientation": r.orientation,
            ...c,
            ...o,
            ref: t,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        }, "AccordionContent"));

      function ie(e) {
        return e ? "open" : "closed"
      }
      D(ie, "getState");
      var ce = H,
        ae = ee,
        le = te,
        se = oe,
        de = re
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

      function c(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function a(...e) {
        return t => {
          let n = !1;
          const o = e.map(e => {
            const o = c(e, t);
            return n || "function" != typeof o || (n = !0), o
          });
          if (n) return () => {
            for (let t = 0; t < o.length; t++) {
              const n = o[t];
              "function" == typeof n ? n() : c(e[t], null)
            }
          }
        }
      }

      function l(...e) {
        return o.useCallback(a(...e), e)
      }
      i(c, "setRef"), i(a, "composeRefs"), i(l, "useComposedRefs")
    },
    72579(e, t, n) {
      n.d(t, {
        A: () => a
      });
      var o = n(93082),
        r = n(39793),
        i = Object.defineProperty,
        c = (e, t) => i(e, "name", {
          value: t,
          configurable: !0
        });

      function a(e, t = []) {
        let n = [];

        function i(t, i) {
          const a = o.createContext(i);
          a.displayName = t + "Context";
          const l = n.length;
          n = [...n, i];
          const s = c(t => {
            const {
              scope: n,
              children: i,
              ...c
            } = t, s = n?.[e]?.[l] || a, d = o.useMemo(() => c, Object.values(c));
            return (0, r.jsx)(s.Provider, {
              value: d,
              children: i
            })
          }, "Provider");

          function d(n, r, c = {}) {
            const {
              optional: s = !1
            } = c, d = r?.[e]?.[l] || a, u = o.useContext(d);
            if (u) return u;
            if (void 0 !== i) return i;
            if (!s) throw new Error(`\`${n}\` must be used within \`${t}\``)
          }
          return s.displayName = t + "Provider", c(d, "useContext"), [s, d]
        }
        c(i, "createContext");
        const a = c(() => {
          const t = n.map(e => o.createContext(e));
          return c(function(n) {
            const r = n?.[e] || t;
            return o.useMemo(() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: r
              }
            }), [n, r])
          }, "useScope")
        }, "createScope");
        return a.scopeName = e, [i, l(a, ...t)]
      }

      function l(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = c(() => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return c(function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: o
            }) => ({
              ...t,
              ...n(e)[`__scope${o}`]
            }), {});
            return o.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }, "useComposedScopes")
        }, "createScope");
        return n.scopeName = t.scopeName, n
      }
      c(function(e, t) {
        const n = o.createContext(t);
        n.displayName = e + "Context";
        const i = c(e => {
          const {
            children: t,
            ...i
          } = e, c = o.useMemo(() => i, Object.values(i));
          return (0, r.jsx)(n.Provider, {
            value: c,
            children: t
          })
        }, "Provider");

        function a(r, i = {}) {
          const {
            optional: c = !1
          } = i, a = o.useContext(n);
          if (a) return a;
          if (void 0 !== t) return t;
          if (!c) throw new Error(`\`${r}\` must be used within \`${e}\``)
        }
        return i.displayName = e + "Provider", c(a, "useContext"), [i, a]
      }, "createContext"), c(a, "createContextScope"), c(l, "composeContextScopes")
    },
    12430(e, t, n) {
      n.d(t, {
        jH: () => c
      });
      var o = n(93082),
        r = (n(39793), Object.defineProperty),
        i = o.createContext(void 0);

      function c(e) {
        const t = o.useContext(i);
        return e || t || "ltr"
      }
      r(c, "name", {
        value: "useDirection",
        configurable: !0
      })
    },
    88918(e, t, n) {
      let o;
      n.d(t, {
        B: () => s
      });
      var r = n(93082),
        i = n(9608),
        c = Object.defineProperty,
        a = (o || (o = n.t(r, 2)))[" useId ".trim().toString()] || (() => {}),
        l = 0;

      function s(e) {
        const [t, n] = r.useState(a());
        return (0, i.N)(() => {
          e || n(e => e ?? String(l++))
        }, [e]), e || (t ? `radix-${t}` : "")
      }
      c(s, "name", {
        value: "useId",
        configurable: !0
      })
    },
    41988(e, t, n) {
      n.d(t, {
        hO: () => s,
        sG: () => l
      });
      var o = n(93082),
        r = n(84017),
        i = n(93237),
        c = n(39793),
        a = Object.defineProperty,
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, i.TL)(`Primitive.${t}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...i
              } = e, a = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, c.jsx)(a, {
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
        Dc: () => u,
        TL: () => l,
        xV: () => f
      });
      var r = n(93082),
        i = n(85049),
        c = Object.defineProperty,
        a = (e, t) => c(e, "name", {
          value: t,
          configurable: !0
        });

      function l(e) {
        const t = r.forwardRef((t, n) => {
          let {
            children: o,
            ...c
          } = t, a = null, l = !1;
          const s = [];
          v(o) && "function" == typeof _ && (o = _(o._payload)), r.Children.forEach(o, e => {
            if (g(e)) {
              l = !0;
              const t = e;
              let n = "child" in t.props ? t.props.child : t.props.children;
              v(n) && "function" == typeof _ && (n = _(n._payload)), a = p(t, n), s.push(a?.props?.children)
            } else s.push(e)
          }), a ? a = r.cloneElement(a, void 0, s) : !l && 1 === r.Children.count(o) && r.isValidElement(o) && (a = o);
          const d = a ? b(a) : void 0,
            u = (0, i.s)(n, d);
          if (!a) {
            if (o || 0 === o) throw new Error(l ? C(e) : w(e));
            return o
          }
          const f = m(c, a.props ?? {});
          return a.type !== r.Fragment && (f.ref = n ? u : d), r.cloneElement(a, f)
        });
        return t.displayName = `${e}.Slot`, t
      }
      a(l, "createSlot");
      var s = l("Slot"),
        d = Symbol.for("radix.slottable");

      function u(e) {
        const t = a(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`, t.__radixId = d, t
      }
      a(u, "createSlottable");
      var f = u("Slottable"),
        p = a((e, t) => {
          if ("child" in e.props) {
            const t = e.props.child;
            return r.isValidElement(t) ? r.cloneElement(t, void 0, e.props.children(t.props.children)) : null
          }
          return r.isValidElement(t) ? t : null
        }, "getSlottableElementFromSlottable");

      function m(e, t) {
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
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === d
      }
      a(m, "mergeProps"), a(b, "getElementRef"), a(g, "isSlottable");
      var h = Symbol.for("react.lazy");

      function v(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === h && "_payload" in e && y(e._payload)
      }

      function y(e) {
        return "object" == typeof e && null !== e && "then" in e
      }
      a(v, "isLazyComponent"), a(y, "isPromiseLike");
      var w = a(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        C = a(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        _ = (o || (o = n.t(r, 2)))[" use ".trim().toString()]
    },
    15782(e, t, n) {
      n.d(t, {
        i: () => m
      });
      var o = n(93082),
        r = n.t(o, 2),
        i = n(76733),
        c = n(9608),
        a = Object.defineProperty,
        l = r[" useEffectEvent ".trim().toString()],
        s = r[" useInsertionEffect ".trim().toString()];

      function d(e) {
        if ("function" == typeof l) return l(e);
        const t = o.useRef(() => {
          throw new Error("Cannot call an event handler while rendering.")
        });
        return "function" == typeof s ? s(() => {
          t.current = e
        }) : (0, c.N)(() => {
          t.current = e
        }), o.useMemo(() => (...e) => t.current?.(...e), [])
      }
      a(d, "name", {
        value: "useEffectEvent",
        configurable: !0
      });
      var u = Object.defineProperty,
        f = (e, t) => u(e, "name", {
          value: t,
          configurable: !0
        }),
        p = r[" useInsertionEffect ".trim().toString()] || c.N;

      function m({
        prop: e,
        defaultProp: t,
        onChange: n = f(() => {}, "onChange"),
        caller: r
      }) {
        const [c, a, l] = b({
          defaultProp: t,
          onChange: n
        }), s = void 0 !== e, d = s ? e : c;
        if (i.D) {
          const t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            const e = t.current;
            if (e !== s) {
              const t = e ? "controlled" : "uncontrolled",
                n = s ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = s
          }, [s, r])
        }
        return [d, o.useCallback(t => {
          if (s) {
            const n = g(t) ? t(e) : t;
            n !== e && l.current?.(n)
          } else a(t)
        }, [s, e, a, l])]
      }

      function b({
        defaultProp: e,
        onChange: t
      }) {
        const [n, r] = o.useState(e), i = o.useRef(n), c = o.useRef(t);
        return p(() => {
          c.current = t
        }, [t]), o.useEffect(() => {
          i.current !== n && (c.current?.(n), i.current = n)
        }, [n, i]), [n, r, c]
      }

      function g(e) {
        return "function" == typeof e
      }
      f(m, "useControllableState"), f(b, "useUncontrolledState"), f(g, "isFunction");
      var h = Symbol("RADIX:SYNC_STATE");
      f(function(e, t, n, r) {
        const {
          prop: c,
          defaultProp: a,
          onChange: l,
          caller: s
        } = t, u = void 0 !== c, f = d(l);
        if (i.D) {
          const e = o.useRef(void 0 !== c);
          o.useEffect(() => {
            const t = e.current;
            if (t !== u) {
              const e = t ? "controlled" : "uncontrolled",
                n = u ? "controlled" : "uncontrolled";
              console.warn(`${s} is changing from ${e} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            e.current = u
          }, [u, s])
        }
        const p = [{
          ...n,
          state: a
        }];
        r && p.push(r);
        const [m, b] = o.useReducer((t, n) => {
          if (n.type === h) return {
            ...t,
            state: n.state
          };
          const o = e(t, n);
          return u && !Object.is(o.state, t.state) && f(o.state), o
        }, ...p), g = m.state, v = o.useRef(g);
        o.useEffect(() => {
          v.current !== g && (v.current = g, u || f(g))
        }, [g, v, u]);
        const y = o.useMemo(() => void 0 !== c ? {
          ...m,
          state: c
        } : m, [m, c]);
        return o.useEffect(() => {
          u && !Object.is(c, m.state) && b({
            type: h,
            state: c
          })
        }, [c, m.state, u]), [y, b]
      }, "useControllableStateReducer")
    },
    9608(e, t, n) {
      n.d(t, {
        N: () => r
      });
      var o = n(93082),
        r = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);