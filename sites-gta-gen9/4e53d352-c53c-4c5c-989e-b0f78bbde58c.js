! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4e53d352-c53c-4c5c-989e-b0f78bbde58c", e._sentryDebugIdIdentifier = "sentry-dbid-4e53d352-c53c-4c5c-989e-b0f78bbde58c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2383], {
    52383: (e, n, t) => {
      t.r(n), t.d(n, {
        Accordion: () => B,
        AccordionContent: () => ce,
        AccordionHeader: () => oe,
        AccordionItem: () => re,
        AccordionTrigger: () => le,
        Content: () => pe,
        Header: () => ue,
        Item: () => de,
        Root: () => se,
        Trigger: () => fe,
        createAccordionScope: () => F
      });
      var r = t(26677),
        o = t(71403),
        a = t.t(o, 2);

      function l(e, n = []) {
        let t = [];
        const r = () => {
          const n = t.map((e => (0, o.createContext)(e)));
          return function(t) {
            const r = (null == t ? void 0 : t[e]) || n;
            return (0, o.useMemo)((() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: r
              }
            })), [t, r])
          }
        };
        return r.scopeName = e, [function(n, r) {
          const a = (0, o.createContext)(r),
            l = t.length;

          function c(n) {
            const {
              scope: t,
              children: r,
              ...c
            } = n, i = (null == t ? void 0 : t[e][l]) || a, s = (0, o.useMemo)((() => c), Object.values(c));
            return (0, o.createElement)(i.Provider, {
              value: s
            }, r)
          }
          return t = [...t, r], c.displayName = n + "Provider", [c, function(t, c) {
            const i = (null == c ? void 0 : c[e][l]) || a,
              s = (0, o.useContext)(i);
            if (s) return s;
            if (void 0 !== r) return r;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, c(r, ...n)]
      }

      function c(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = t.reduce(((n, {
              useScope: t,
              scopeName: r
            }) => ({
              ...n,
              ...t(e)[`__scope${r}`]
            })), {});
            return (0, o.useMemo)((() => ({
              [`__scope${n.scopeName}`]: r
            })), [r])
          }
        };
        return t.scopeName = n.scopeName, t
      }
      var i = t(10593),
        s = t(45891);

      function d(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (null == e || e(r), !1 === t || !r.defaultPrevented) return null == n ? void 0 : n(r)
        }
      }

      function u(e) {
        const n = (0, o.useRef)(e);
        return (0, o.useEffect)((() => {
          n.current = e
        })), (0, o.useMemo)((() => (...e) => {
          var t;
          return null === (t = n.current) || void 0 === t ? void 0 : t.call(n, ...e)
        }), [])
      }

      function f({
        prop: e,
        defaultProp: n,
        onChange: t = (() => {})
      }) {
        const [r, a] = function({
          defaultProp: e,
          onChange: n
        }) {
          const t = (0, o.useState)(e),
            [r] = t,
            a = (0, o.useRef)(r),
            l = u(n);
          return (0, o.useEffect)((() => {
            a.current !== r && (l(r), a.current = r)
          }), [r, a, l]), t
        }({
          defaultProp: n,
          onChange: t
        }), l = void 0 !== e, c = l ? e : r, i = u(t);
        return [c, (0, o.useCallback)((n => {
          if (l) {
            const t = "function" == typeof n ? n(e) : n;
            t !== e && i(t)
          } else a(n)
        }), [l, e, a, i])]
      }
      var p = t(27109);
      const m = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? o.useLayoutEffect : () => {};
      var b = t(79493);
      const g = e => {
        const {
          present: n,
          children: t
        } = e, r = function(e) {
          const [n, t] = (0, o.useState)(), r = (0, o.useRef)({}), a = (0, o.useRef)(e), l = (0, o.useRef)("none"), c = e ? "mounted" : "unmounted", [i, s] = function(e, n) {
            return (0, o.useReducer)(((e, t) => {
              const r = n[e][t];
              return null != r ? r : e
            }), e)
          }(c, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
              MOUNT: "mounted",
              ANIMATION_END: "unmounted"
            },
            unmounted: {
              MOUNT: "mounted"
            }
          });
          return (0, o.useEffect)((() => {
            const e = v(r.current);
            l.current = "mounted" === i ? e : "none"
          }), [i]), m((() => {
            const n = r.current,
              t = a.current;
            if (t !== e) {
              const r = l.current,
                o = v(n);
              e ? s("MOUNT") : "none" === o || "none" === (null == n ? void 0 : n.display) ? s("UNMOUNT") : s(t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e
            }
          }), [e, s]), m((() => {
            if (n) {
              const e = e => {
                  const t = v(r.current).includes(e.animationName);
                  e.target === n && t && (0, b.flushSync)((() => s("ANIMATION_END")))
                },
                t = e => {
                  e.target === n && (l.current = v(r.current))
                };
              return n.addEventListener("animationstart", t), n.addEventListener("animationcancel", e), n.addEventListener("animationend", e), () => {
                n.removeEventListener("animationstart", t), n.removeEventListener("animationcancel", e), n.removeEventListener("animationend", e)
              }
            }
            s("ANIMATION_END")
          }), [n, s]), {
            isPresent: ["mounted", "unmountSuspended"].includes(i),
            ref: (0, o.useCallback)((e => {
              e && (r.current = getComputedStyle(e)), t(e)
            }), [])
          }
        }(n), a = "function" == typeof t ? t({
          present: r.isPresent
        }) : o.Children.only(t), l = (0, i.s)(r.ref, a.ref);
        return "function" == typeof t || r.isPresent ? (0, o.cloneElement)(a, {
          ref: l
        }) : null
      };

      function v(e) {
        return (null == e ? void 0 : e.animationName) || "none"
      }
      g.displayName = "Presence";
      const y = a["useId".toString()] || (() => {});
      let E = 0;

      function A(e) {
        const [n, t] = o.useState(y());
        return m((() => {
          e || t((e => null != e ? e : String(E++)))
        }), [e]), e || (n ? `radix-${n}` : "")
      }
      const h = "Collapsible",
        [w, _] = l(h),
        [C, N] = w(h),
        R = (0, o.forwardRef)(((e, n) => {
          const {
            __scopeCollapsible: t,
            open: a,
            defaultOpen: l,
            disabled: c,
            onOpenChange: i,
            ...s
          } = e, [d = !1, u] = f({
            prop: a,
            defaultProp: l,
            onChange: i
          });
          return (0, o.createElement)(C, {
            scope: t,
            disabled: c,
            contentId: A(),
            open: d,
            onOpenToggle: (0, o.useCallback)((() => u((e => !e))), [u])
          }, (0, o.createElement)(p.sG.div, (0, r.A)({
            "data-state": x(d),
            "data-disabled": c ? "" : void 0
          }, s, {
            ref: n
          })))
        })),
        I = (0, o.forwardRef)(((e, n) => {
          const {
            __scopeCollapsible: t,
            ...a
          } = e, l = N("CollapsibleTrigger", t);
          return (0, o.createElement)(p.sG.button, (0, r.A)({
            type: "button",
            "aria-controls": l.contentId,
            "aria-expanded": l.open || !1,
            "data-state": x(l.open),
            "data-disabled": l.disabled ? "" : void 0,
            disabled: l.disabled
          }, a, {
            ref: n,
            onClick: d(e.onClick, l.onOpenToggle)
          }))
        })),
        M = "CollapsibleContent",
        k = (0, o.forwardRef)(((e, n) => {
          const {
            forceMount: t,
            ...a
          } = e, l = N(M, e.__scopeCollapsible);
          return (0, o.createElement)(g, {
            present: t || l.open
          }, (({
            present: e
          }) => (0, o.createElement)(S, (0, r.A)({}, a, {
            ref: n,
            present: e
          }))))
        })),
        S = (0, o.forwardRef)(((e, n) => {
          const {
            __scopeCollapsible: t,
            present: a,
            children: l,
            ...c
          } = e, s = N(M, t), [d, u] = (0, o.useState)(a), f = (0, o.useRef)(null), b = (0, i.s)(n, f), g = (0, o.useRef)(0), v = g.current, y = (0, o.useRef)(0), E = y.current, A = s.open || d, h = (0, o.useRef)(A), w = (0, o.useRef)();
          return (0, o.useEffect)((() => {
            const e = requestAnimationFrame((() => h.current = !1));
            return () => cancelAnimationFrame(e)
          }), []), m((() => {
            const e = f.current;
            if (e) {
              w.current = w.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName
              }, e.style.transitionDuration = "0s", e.style.animationName = "none";
              const n = e.getBoundingClientRect();
              g.current = n.height, y.current = n.width, h.current || (e.style.transitionDuration = w.current.transitionDuration, e.style.animationName = w.current.animationName), u(a)
            }
          }), [s.open, a]), (0, o.createElement)(p.sG.div, (0, r.A)({
            "data-state": x(s.open),
            "data-disabled": s.disabled ? "" : void 0,
            id: s.contentId,
            hidden: !A
          }, c, {
            ref: b,
            style: {
              "--radix-collapsible-content-height": v ? `${v}px` : void 0,
              "--radix-collapsible-content-width": E ? `${E}px` : void 0,
              ...e.style
            }
          }), A && l)
        }));

      function x(e) {
        return e ? "open" : "closed"
      }
      const O = R,
        T = I,
        D = k,
        P = (0, o.createContext)(void 0),
        U = "Accordion",
        V = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [L, $, G] = function(e) {
          const n = e + "CollectionProvider",
            [t, r] = l(n),
            [a, c] = t(n, {
              collectionRef: {
                current: null
              },
              itemMap: new Map
            }),
            d = e + "CollectionSlot",
            u = e + "CollectionItemSlot",
            f = "data-radix-collection-item";
          return [{
            Provider: e => {
              const {
                scope: n,
                children: t
              } = e, r = o.useRef(null), l = o.useRef(new Map).current;
              return o.createElement(a, {
                scope: n,
                itemMap: l,
                collectionRef: r
              }, t)
            },
            Slot: o.forwardRef(((e, n) => {
              const {
                scope: t,
                children: r
              } = e, a = c(d, t), l = (0, i.s)(n, a.collectionRef);
              return o.createElement(s.DX, {
                ref: l
              }, r)
            })),
            ItemSlot: o.forwardRef(((e, n) => {
              const {
                scope: t,
                children: r,
                ...a
              } = e, l = o.useRef(null), d = (0, i.s)(n, l), p = c(u, t);
              return o.useEffect((() => (p.itemMap.set(l, {
                ref: l,
                ...a
              }), () => {
                p.itemMap.delete(l)
              }))), o.createElement(s.DX, {
                [f]: "",
                ref: d
              }, r)
            }))
          }, function(n) {
            const t = c(e + "CollectionConsumer", n);
            return o.useCallback((() => {
              const e = t.collectionRef.current;
              if (!e) return [];
              const n = Array.from(e.querySelectorAll(`[${f}]`));
              return Array.from(t.itemMap.values()).sort(((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current)))
            }), [t.collectionRef, t.itemMap])
          }, r]
        }(U),
        [H, F] = l(U, [G, _]),
        X = _(),
        B = o.forwardRef(((e, n) => {
          const {
            type: t,
            ...a
          } = e, l = a, c = a;
          return o.createElement(L.Provider, {
            scope: e.__scopeAccordion
          }, "multiple" === t ? o.createElement(Z, (0, r.A)({}, c, {
            ref: n
          })) : o.createElement(Y, (0, r.A)({}, l, {
            ref: n
          })))
        }));
      B.propTypes = {
        type(e) {
          const n = e.value || e.defaultValue;
          return e.type && !["single", "multiple"].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : "multiple" === e.type && "string" == typeof n ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : "single" === e.type && Array.isArray(n) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null
        }
      };
      const [j, q] = H(U), [z, K] = H(U, {
        collapsible: !1
      }), Y = o.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: a,
          onValueChange: l = (() => {}),
          collapsible: c = !1,
          ...i
        } = e, [s, d] = f({
          prop: t,
          defaultProp: a,
          onChange: l
        });
        return o.createElement(j, {
          scope: e.__scopeAccordion,
          value: s ? [s] : [],
          onItemOpen: d,
          onItemClose: o.useCallback((() => c && d("")), [c, d])
        }, o.createElement(z, {
          scope: e.__scopeAccordion,
          collapsible: c
        }, o.createElement(W, (0, r.A)({}, i, {
          ref: n
        }))))
      })), Z = o.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: a,
          onValueChange: l = (() => {}),
          ...c
        } = e, [i = [], s] = f({
          prop: t,
          defaultProp: a,
          onChange: l
        }), d = o.useCallback((e => s(((n = []) => [...n, e]))), [s]), u = o.useCallback((e => s(((n = []) => n.filter((n => n !== e))))), [s]);
        return o.createElement(j, {
          scope: e.__scopeAccordion,
          value: i,
          onItemOpen: d,
          onItemClose: u
        }, o.createElement(z, {
          scope: e.__scopeAccordion,
          collapsible: !0
        }, o.createElement(W, (0, r.A)({}, c, {
          ref: n
        }))))
      })), [J, Q] = H(U), W = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: a,
          dir: l,
          orientation: c = "vertical",
          ...s
        } = e, u = o.useRef(null), f = (0, i.s)(u, n), m = $(t), b = "ltr" === function(e) {
          const n = (0, o.useContext)(P);
          return e || n || "ltr"
        }(l), g = d(e.onKeyDown, (e => {
          var n;
          if (!V.includes(e.key)) return;
          const t = e.target,
            r = m().filter((e => {
              var n;
              return !(null !== (n = e.ref.current) && void 0 !== n && n.disabled)
            })),
            o = r.findIndex((e => e.ref.current === t)),
            a = r.length;
          if (-1 === o) return;
          e.preventDefault();
          let l = o;
          const i = a - 1,
            s = () => {
              l = o + 1, l > i && (l = 0)
            },
            d = () => {
              l = o - 1, l < 0 && (l = i)
            };
          switch (e.key) {
            case "Home":
              l = 0;
              break;
            case "End":
              l = i;
              break;
            case "ArrowRight":
              "horizontal" === c && (b ? s() : d());
              break;
            case "ArrowDown":
              "vertical" === c && s();
              break;
            case "ArrowLeft":
              "horizontal" === c && (b ? d() : s());
              break;
            case "ArrowUp":
              "vertical" === c && d()
          }
          null === (n = r[l % a].ref.current) || void 0 === n || n.focus()
        }));
        return o.createElement(J, {
          scope: t,
          disabled: a,
          direction: l,
          orientation: c
        }, o.createElement(L.Slot, {
          scope: t
        }, o.createElement(p.sG.div, (0, r.A)({}, s, {
          "data-orientation": c,
          ref: f,
          onKeyDown: a ? void 0 : g
        }))))
      })), ee = "AccordionItem", [ne, te] = H(ee), re = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          value: a,
          ...l
        } = e, c = Q(ee, t), i = q(ee, t), s = X(t), d = A(), u = a && i.value.includes(a) || !1, f = c.disabled || e.disabled;
        return o.createElement(ne, {
          scope: t,
          open: u,
          disabled: f,
          triggerId: d
        }, o.createElement(O, (0, r.A)({
          "data-orientation": c.orientation,
          "data-state": ie(u)
        }, s, l, {
          ref: n,
          disabled: f,
          open: u,
          onOpenChange: e => {
            e ? i.onItemOpen(a) : i.onItemClose(a)
          }
        })))
      })), oe = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          ...a
        } = e, l = Q(U, t), c = te("AccordionHeader", t);
        return o.createElement(p.sG.h3, (0, r.A)({
          "data-orientation": l.orientation,
          "data-state": ie(c.open),
          "data-disabled": c.disabled ? "" : void 0
        }, a, {
          ref: n
        }))
      })), ae = "AccordionTrigger", le = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          ...a
        } = e, l = Q(U, t), c = te(ae, t), i = K(ae, t), s = X(t);
        return o.createElement(L.ItemSlot, {
          scope: t
        }, o.createElement(T, (0, r.A)({
          "aria-disabled": c.open && !i.collapsible || void 0,
          "data-orientation": l.orientation,
          id: c.triggerId
        }, s, a, {
          ref: n
        })))
      })), ce = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          ...a
        } = e, l = Q(U, t), c = te("AccordionContent", t), i = X(t);
        return o.createElement(D, (0, r.A)({
          role: "region",
          "aria-labelledby": c.triggerId,
          "data-orientation": l.orientation
        }, i, a, {
          ref: n,
          style: {
            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
            ...e.style
          }
        }))
      }));

      function ie(e) {
        return e ? "open" : "closed"
      }
      const se = B,
        de = re,
        ue = oe,
        fe = le,
        pe = ce
    },
    10593: (e, n, t) => {
      t.d(n, {
        s: () => a,
        t: () => o
      });
      var r = t(71403);

      function o(...e) {
        return n => e.forEach((e => function(e, n) {
          "function" == typeof e ? e(n) : null != e && (e.current = n)
        }(e, n)))
      }

      function a(...e) {
        return (0, r.useCallback)(o(...e), e)
      }
    },
    27109: (e, n, t) => {
      t.d(n, {
        sG: () => l
      });
      var r = t(26677),
        o = t(71403),
        a = (t(79493), t(45891));
      const l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
        const t = (0, o.forwardRef)(((e, t) => {
          const {
            asChild: l,
            ...c
          } = e, i = l ? a.DX : n;
          return (0, o.useEffect)((() => {
            window[Symbol.for("radix-ui")] = !0
          }), []), (0, o.createElement)(i, (0, r.A)({}, c, {
            ref: t
          }))
        }));
        return t.displayName = `Primitive.${n}`, {
          ...e,
          [n]: t
        }
      }), {})
    },
    45891: (e, n, t) => {
      t.d(n, {
        DX: () => l,
        xV: () => i
      });
      var r = t(26677),
        o = t(71403),
        a = t(10593);
      const l = (0, o.forwardRef)(((e, n) => {
        const {
          children: t,
          ...a
        } = e, l = o.Children.toArray(t), i = l.find(s);
        if (i) {
          const e = i.props.children,
            t = l.map((n => n === i ? o.Children.count(e) > 1 ? o.Children.only(null) : (0, o.isValidElement)(e) ? e.props.children : null : n));
          return (0, o.createElement)(c, (0, r.A)({}, a, {
            ref: n
          }), (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, t) : null)
        }
        return (0, o.createElement)(c, (0, r.A)({}, a, {
          ref: n
        }), t)
      }));
      l.displayName = "Slot";
      const c = (0, o.forwardRef)(((e, n) => {
        const {
          children: t,
          ...r
        } = e;
        return (0, o.isValidElement)(t) ? (0, o.cloneElement)(t, {
          ...d(r, t.props),
          ref: n ? (0, a.t)(n, t.ref) : t.ref
        }) : o.Children.count(t) > 1 ? o.Children.only(null) : null
      }));
      c.displayName = "SlotClone";
      const i = ({
        children: e
      }) => (0, o.createElement)(o.Fragment, null, e);

      function s(e) {
        return (0, o.isValidElement)(e) && e.type === i
      }

      function d(e, n) {
        const t = {
          ...n
        };
        for (const r in n) {
          const o = e[r],
            a = n[r];
          /^on[A-Z]/.test(r) ? o && a ? t[r] = (...e) => {
            a(...e), o(...e)
          } : o && (t[r] = o) : "style" === r ? t[r] = {
            ...o,
            ...a
          } : "className" === r && (t[r] = [o, a].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...t
        }
      }
    }
  }
]);