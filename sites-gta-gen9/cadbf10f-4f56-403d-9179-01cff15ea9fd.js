! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cadbf10f-4f56-403d-9179-01cff15ea9fd", e._sentryDebugIdIdentifier = "sentry-dbid-cadbf10f-4f56-403d-9179-01cff15ea9fd")
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
  [5734], {
    95734: (e, n, t) => {
      t.r(n), t.d(n, {
        Accordion: () => G,
        AccordionContent: () => fe,
        AccordionHeader: () => se,
        AccordionItem: () => ie,
        AccordionTrigger: () => ue,
        Content: () => ye,
        Header: () => ge,
        Item: () => be,
        Root: () => me,
        Trigger: () => ve,
        createAccordionScope: () => Y
      });
      var r = t(3709),
        o = t(62229),
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

      function i(...e) {
        return n => e.forEach((e => function(e, n) {
          "function" == typeof e ? e(n) : null != e && (e.current = n)
        }(e, n)))
      }

      function s(...e) {
        return (0, o.useCallback)(i(...e), e)
      }
      const d = (0, o.forwardRef)(((e, n) => {
        const {
          children: t,
          ...a
        } = e, l = o.Children.toArray(t), c = l.find(p);
        if (c) {
          const e = c.props.children,
            t = l.map((n => n === c ? o.Children.count(e) > 1 ? o.Children.only(null) : (0, o.isValidElement)(e) ? e.props.children : null : n));
          return (0, o.createElement)(u, (0, r.A)({}, a, {
            ref: n
          }), (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, t) : null)
        }
        return (0, o.createElement)(u, (0, r.A)({}, a, {
          ref: n
        }), t)
      }));
      d.displayName = "Slot";
      const u = (0, o.forwardRef)(((e, n) => {
        const {
          children: t,
          ...r
        } = e;
        return (0, o.isValidElement)(t) ? (0, o.cloneElement)(t, {
          ...m(r, t.props),
          ref: n ? i(n, t.ref) : t.ref
        }) : o.Children.count(t) > 1 ? o.Children.only(null) : null
      }));
      u.displayName = "SlotClone";
      const f = ({
        children: e
      }) => (0, o.createElement)(o.Fragment, null, e);

      function p(e) {
        return (0, o.isValidElement)(e) && e.type === f
      }

      function m(e, n) {
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

      function b(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (null == e || e(r), !1 === t || !r.defaultPrevented) return null == n ? void 0 : n(r)
        }
      }

      function g(e) {
        const n = (0, o.useRef)(e);
        return (0, o.useEffect)((() => {
          n.current = e
        })), (0, o.useMemo)((() => (...e) => {
          var t;
          return null === (t = n.current) || void 0 === t ? void 0 : t.call(n, ...e)
        }), [])
      }

      function v({
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
            l = g(n);
          return (0, o.useEffect)((() => {
            a.current !== r && (l(r), a.current = r)
          }), [r, a, l]), t
        }({
          defaultProp: n,
          onChange: t
        }), l = void 0 !== e, c = l ? e : r, i = g(t);
        return [c, (0, o.useCallback)((n => {
          if (l) {
            const t = "function" == typeof n ? n(e) : n;
            t !== e && i(t)
          } else a(n)
        }), [l, e, a, i])]
      }
      var y = t(44853);
      const E = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
          const t = (0, o.forwardRef)(((e, t) => {
            const {
              asChild: a,
              ...l
            } = e, c = a ? d : n;
            return (0, o.useEffect)((() => {
              window[Symbol.for("radix-ui")] = !0
            }), []), (0, o.createElement)(c, (0, r.A)({}, l, {
              ref: t
            }))
          }));
          return t.displayName = `Primitive.${n}`, {
            ...e,
            [n]: t
          }
        }), {}),
        h = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? o.useLayoutEffect : () => {},
        A = e => {
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
              const e = w(r.current);
              l.current = "mounted" === i ? e : "none"
            }), [i]), h((() => {
              const n = r.current,
                t = a.current;
              if (t !== e) {
                const r = l.current,
                  o = w(n);
                e ? s("MOUNT") : "none" === o || "none" === (null == n ? void 0 : n.display) ? s("UNMOUNT") : s(t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e
              }
            }), [e, s]), h((() => {
              if (n) {
                const e = e => {
                    const t = w(r.current).includes(e.animationName);
                    e.target === n && t && (0, y.flushSync)((() => s("ANIMATION_END")))
                  },
                  t = e => {
                    e.target === n && (l.current = w(r.current))
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
          }) : o.Children.only(t), l = s(r.ref, a.ref);
          return "function" == typeof t || r.isPresent ? (0, o.cloneElement)(a, {
            ref: l
          }) : null
        };

      function w(e) {
        return (null == e ? void 0 : e.animationName) || "none"
      }
      A.displayName = "Presence";
      const _ = a["useId".toString()] || (() => {});
      let C = 0;

      function N(e) {
        const [n, t] = o.useState(_());
        return h((() => {
          e || t((e => null != e ? e : String(C++)))
        }), [e]), e || (n ? `radix-${n}` : "")
      }
      const R = "Collapsible",
        [I, M] = l(R),
        [k, O] = I(R),
        S = (0, o.forwardRef)(((e, n) => {
          const {
            __scopeCollapsible: t,
            open: a,
            defaultOpen: l,
            disabled: c,
            onOpenChange: i,
            ...s
          } = e, [d = !1, u] = v({
            prop: a,
            defaultProp: l,
            onChange: i
          });
          return (0, o.createElement)(k, {
            scope: t,
            disabled: c,
            contentId: N(),
            open: d,
            onOpenToggle: (0, o.useCallback)((() => u((e => !e))), [u])
          }, (0, o.createElement)(E.div, (0, r.A)({
            "data-state": U(d),
            "data-disabled": c ? "" : void 0
          }, s, {
            ref: n
          })))
        })),
        T = (0, o.forwardRef)(((e, n) => {
          const {
            __scopeCollapsible: t,
            ...a
          } = e, l = O("CollapsibleTrigger", t);
          return (0, o.createElement)(E.button, (0, r.A)({
            type: "button",
            "aria-controls": l.contentId,
            "aria-expanded": l.open || !1,
            "data-state": U(l.open),
            "data-disabled": l.disabled ? "" : void 0,
            disabled: l.disabled
          }, a, {
            ref: n,
            onClick: b(e.onClick, l.onOpenToggle)
          }))
        })),
        x = "CollapsibleContent",
        P = (0, o.forwardRef)(((e, n) => {
          const {
            forceMount: t,
            ...a
          } = e, l = O(x, e.__scopeCollapsible);
          return (0, o.createElement)(A, {
            present: t || l.open
          }, (({
            present: e
          }) => (0, o.createElement)(D, (0, r.A)({}, a, {
            ref: n,
            present: e
          }))))
        })),
        D = (0, o.forwardRef)(((e, n) => {
          const {
            __scopeCollapsible: t,
            present: a,
            children: l,
            ...c
          } = e, i = O(x, t), [d, u] = (0, o.useState)(a), f = (0, o.useRef)(null), p = s(n, f), m = (0, o.useRef)(0), b = m.current, g = (0, o.useRef)(0), v = g.current, y = i.open || d, A = (0, o.useRef)(y), w = (0, o.useRef)();
          return (0, o.useEffect)((() => {
            const e = requestAnimationFrame((() => A.current = !1));
            return () => cancelAnimationFrame(e)
          }), []), h((() => {
            const e = f.current;
            if (e) {
              w.current = w.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName
              }, e.style.transitionDuration = "0s", e.style.animationName = "none";
              const n = e.getBoundingClientRect();
              m.current = n.height, g.current = n.width, A.current || (e.style.transitionDuration = w.current.transitionDuration, e.style.animationName = w.current.animationName), u(a)
            }
          }), [i.open, a]), (0, o.createElement)(E.div, (0, r.A)({
            "data-state": U(i.open),
            "data-disabled": i.disabled ? "" : void 0,
            id: i.contentId,
            hidden: !y
          }, c, {
            ref: p,
            style: {
              "--radix-collapsible-content-height": b ? `${b}px` : void 0,
              "--radix-collapsible-content-width": v ? `${v}px` : void 0,
              ...e.style
            }
          }), y && l)
        }));

      function U(e) {
        return e ? "open" : "closed"
      }
      const V = S,
        L = T,
        $ = P,
        j = (0, o.createContext)(void 0),
        H = "Accordion",
        F = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [B, q, z] = function(e) {
          const n = e + "CollectionProvider",
            [t, r] = l(n),
            [a, c] = t(n, {
              collectionRef: {
                current: null
              },
              itemMap: new Map
            }),
            i = e + "CollectionSlot",
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
              } = e, a = s(n, c(i, t).collectionRef);
              return o.createElement(d, {
                ref: a
              }, r)
            })),
            ItemSlot: o.forwardRef(((e, n) => {
              const {
                scope: t,
                children: r,
                ...a
              } = e, l = o.useRef(null), i = s(n, l), p = c(u, t);
              return o.useEffect((() => (p.itemMap.set(l, {
                ref: l,
                ...a
              }), () => {
                p.itemMap.delete(l)
              }))), o.createElement(d, {
                [f]: "",
                ref: i
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
        }(H),
        [K, Y] = l(H, [z, M]),
        Z = M(),
        G = o.forwardRef(((e, n) => {
          const {
            type: t,
            ...a
          } = e, l = a, c = a;
          return o.createElement(B.Provider, {
            scope: e.__scopeAccordion
          }, "multiple" === t ? o.createElement(ne, (0, r.A)({}, c, {
            ref: n
          })) : o.createElement(ee, (0, r.A)({}, l, {
            ref: n
          })))
        }));
      G.propTypes = {
        type(e) {
          const n = e.value || e.defaultValue;
          return e.type && !["single", "multiple"].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : "multiple" === e.type && "string" == typeof n ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : "single" === e.type && Array.isArray(n) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null
        }
      };
      const [J, Q] = K(H), [W, X] = K(H, {
        collapsible: !1
      }), ee = o.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: a,
          onValueChange: l = (() => {}),
          collapsible: c = !1,
          ...i
        } = e, [s, d] = v({
          prop: t,
          defaultProp: a,
          onChange: l
        });
        return o.createElement(J, {
          scope: e.__scopeAccordion,
          value: s ? [s] : [],
          onItemOpen: d,
          onItemClose: o.useCallback((() => c && d("")), [c, d])
        }, o.createElement(W, {
          scope: e.__scopeAccordion,
          collapsible: c
        }, o.createElement(oe, (0, r.A)({}, i, {
          ref: n
        }))))
      })), ne = o.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: a,
          onValueChange: l = (() => {}),
          ...c
        } = e, [i = [], s] = v({
          prop: t,
          defaultProp: a,
          onChange: l
        }), d = o.useCallback((e => s(((n = []) => [...n, e]))), [s]), u = o.useCallback((e => s(((n = []) => n.filter((n => n !== e))))), [s]);
        return o.createElement(J, {
          scope: e.__scopeAccordion,
          value: i,
          onItemOpen: d,
          onItemClose: u
        }, o.createElement(W, {
          scope: e.__scopeAccordion,
          collapsible: !0
        }, o.createElement(oe, (0, r.A)({}, c, {
          ref: n
        }))))
      })), [te, re] = K(H), oe = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: a,
          dir: l,
          orientation: c = "vertical",
          ...i
        } = e, d = s(o.useRef(null), n), u = q(t), f = "ltr" === function(e) {
          const n = (0, o.useContext)(j);
          return e || n || "ltr"
        }(l), p = b(e.onKeyDown, (e => {
          var n;
          if (!F.includes(e.key)) return;
          const t = e.target,
            r = u().filter((e => {
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
              "horizontal" === c && (f ? s() : d());
              break;
            case "ArrowDown":
              "vertical" === c && s();
              break;
            case "ArrowLeft":
              "horizontal" === c && (f ? d() : s());
              break;
            case "ArrowUp":
              "vertical" === c && d()
          }
          null === (n = r[l % a].ref.current) || void 0 === n || n.focus()
        }));
        return o.createElement(te, {
          scope: t,
          disabled: a,
          direction: l,
          orientation: c
        }, o.createElement(B.Slot, {
          scope: t
        }, o.createElement(E.div, (0, r.A)({}, i, {
          "data-orientation": c,
          ref: d,
          onKeyDown: a ? void 0 : p
        }))))
      })), ae = "AccordionItem", [le, ce] = K(ae), ie = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          value: a,
          ...l
        } = e, c = re(ae, t), i = Q(ae, t), s = Z(t), d = N(), u = a && i.value.includes(a) || !1, f = c.disabled || e.disabled;
        return o.createElement(le, {
          scope: t,
          open: u,
          disabled: f,
          triggerId: d
        }, o.createElement(V, (0, r.A)({
          "data-orientation": c.orientation,
          "data-state": pe(u)
        }, s, l, {
          ref: n,
          disabled: f,
          open: u,
          onOpenChange: e => {
            e ? i.onItemOpen(a) : i.onItemClose(a)
          }
        })))
      })), se = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          ...a
        } = e, l = re(H, t), c = ce("AccordionHeader", t);
        return o.createElement(E.h3, (0, r.A)({
          "data-orientation": l.orientation,
          "data-state": pe(c.open),
          "data-disabled": c.disabled ? "" : void 0
        }, a, {
          ref: n
        }))
      })), de = "AccordionTrigger", ue = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          ...a
        } = e, l = re(H, t), c = ce(de, t), i = X(de, t), s = Z(t);
        return o.createElement(B.ItemSlot, {
          scope: t
        }, o.createElement(L, (0, r.A)({
          "aria-disabled": c.open && !i.collapsible || void 0,
          "data-orientation": l.orientation,
          id: c.triggerId
        }, s, a, {
          ref: n
        })))
      })), fe = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          ...a
        } = e, l = re(H, t), c = ce("AccordionContent", t), i = Z(t);
        return o.createElement($, (0, r.A)({
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

      function pe(e) {
        return e ? "open" : "closed"
      }
      const me = G,
        be = ie,
        ge = se,
        ve = ue,
        ye = fe
    },
    3709: (e, n, t) => {
      function r() {
        return r = Object.assign ? Object.assign.bind() : function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
          }
          return e
        }, r.apply(this, arguments)
      }
      t.d(n, {
        A: () => r
      })
    }
  }
]);