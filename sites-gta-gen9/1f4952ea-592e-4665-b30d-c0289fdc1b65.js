! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1f4952ea-592e-4665-b30d-c0289fdc1b65", e._sentryDebugIdIdentifier = "sentry-dbid-1f4952ea-592e-4665-b30d-c0289fdc1b65")
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
  [7704], {
    17704: (e, n, t) => {
      t.r(n), t.d(n, {
        Accordion: () => q,
        AccordionContent: () => se,
        AccordionHeader: () => le,
        AccordionItem: () => ae,
        AccordionTrigger: () => ie,
        Content: () => be,
        Header: () => pe,
        Item: () => fe,
        Root: () => de,
        Trigger: () => me,
        createAccordionScope: () => F
      });
      var o = t(43680),
        r = t(62229),
        a = t.t(r, 2);

      function l(e, n = []) {
        let t = [];
        const o = () => {
          const n = t.map((e => (0, r.createContext)(e)));
          return function(t) {
            const o = (null == t ? void 0 : t[e]) || n;
            return (0, r.useMemo)((() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: o
              }
            })), [t, o])
          }
        };
        return o.scopeName = e, [function(n, o) {
          const a = (0, r.createContext)(o),
            l = t.length;

          function c(n) {
            const {
              scope: t,
              children: o,
              ...c
            } = n, i = (null == t ? void 0 : t[e][l]) || a, s = (0, r.useMemo)((() => c), Object.values(c));
            return (0, r.createElement)(i.Provider, {
              value: s
            }, o)
          }
          return t = [...t, o], c.displayName = n + "Provider", [c, function(t, c) {
            const i = (null == c ? void 0 : c[e][l]) || a,
              s = (0, r.useContext)(i);
            if (s) return s;
            if (void 0 !== o) return o;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, c(o, ...n)]
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
            const o = t.reduce(((n, {
              useScope: t,
              scopeName: o
            }) => ({
              ...n,
              ...t(e)[`__scope${o}`]
            })), {});
            return (0, r.useMemo)((() => ({
              [`__scope${n.scopeName}`]: o
            })), [o])
          }
        };
        return t.scopeName = n.scopeName, t
      }
      var i = t(95362),
        s = t(39447);

      function u(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(o) {
          if (null == e || e(o), !1 === t || !o.defaultPrevented) return null == n ? void 0 : n(o)
        }
      }

      function d(e) {
        const n = (0, r.useRef)(e);
        return (0, r.useEffect)((() => {
          n.current = e
        })), (0, r.useMemo)((() => (...e) => {
          var t;
          return null === (t = n.current) || void 0 === t ? void 0 : t.call(n, ...e)
        }), [])
      }

      function f({
        prop: e,
        defaultProp: n,
        onChange: t = (() => {})
      }) {
        const [o, a] = function({
          defaultProp: e,
          onChange: n
        }) {
          const t = (0, r.useState)(e),
            [o] = t,
            a = (0, r.useRef)(o),
            l = d(n);
          return (0, r.useEffect)((() => {
            a.current !== o && (l(o), a.current = o)
          }), [o, a, l]), t
        }({
          defaultProp: n,
          onChange: t
        }), l = void 0 !== e, c = l ? e : o, i = d(t);
        return [c, (0, r.useCallback)((n => {
          if (l) {
            const t = "function" == typeof n ? n(e) : n;
            t !== e && i(t)
          } else a(n)
        }), [l, e, a, i])]
      }
      var p = t(78004);
      const m = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? r.useLayoutEffect : () => {};
      var b = t(44853);
      const g = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? r.useLayoutEffect : () => {},
        v = e => {
          const {
            present: n,
            children: t
          } = e, o = function(e) {
            const [n, t] = (0, r.useState)(), o = (0, r.useRef)({}), a = (0, r.useRef)(e), l = (0, r.useRef)("none"), c = e ? "mounted" : "unmounted", [i, s] = function(e, n) {
              return (0, r.useReducer)(((e, t) => {
                const o = n[e][t];
                return null != o ? o : e
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
            return (0, r.useEffect)((() => {
              const e = y(o.current);
              l.current = "mounted" === i ? e : "none"
            }), [i]), g((() => {
              const n = o.current,
                t = a.current;
              if (t !== e) {
                const o = l.current,
                  r = y(n);
                e ? s("MOUNT") : "none" === r || "none" === (null == n ? void 0 : n.display) ? s("UNMOUNT") : s(t && o !== r ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e
              }
            }), [e, s]), g((() => {
              if (n) {
                const e = e => {
                    const t = y(o.current).includes(e.animationName);
                    e.target === n && t && (0, b.flushSync)((() => s("ANIMATION_END")))
                  },
                  t = e => {
                    e.target === n && (l.current = y(o.current))
                  };
                return n.addEventListener("animationstart", t), n.addEventListener("animationcancel", e), n.addEventListener("animationend", e), () => {
                  n.removeEventListener("animationstart", t), n.removeEventListener("animationcancel", e), n.removeEventListener("animationend", e)
                }
              }
              s("ANIMATION_END")
            }), [n, s]), {
              isPresent: ["mounted", "unmountSuspended"].includes(i),
              ref: (0, r.useCallback)((e => {
                e && (o.current = getComputedStyle(e)), t(e)
              }), [])
            }
          }(n), a = "function" == typeof t ? t({
            present: o.isPresent
          }) : r.Children.only(t), l = (0, i.s)(o.ref, a.ref);
          return "function" == typeof t || o.isPresent ? (0, r.cloneElement)(a, {
            ref: l
          }) : null
        };

      function y(e) {
        return (null == e ? void 0 : e.animationName) || "none"
      }
      v.displayName = "Presence";
      const h = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? r.useLayoutEffect : () => {},
        E = a["useId".toString()] || (() => {});
      let A = 0;

      function w(e) {
        const [n, t] = r.useState(E());
        return h((() => {
          e || t((e => null != e ? e : String(A++)))
        }), [e]), e || (n ? `radix-${n}` : "")
      }
      const _ = "Collapsible",
        [C, N] = l(_),
        [R, I] = C(_),
        M = (0, r.forwardRef)(((e, n) => {
          const {
            __scopeCollapsible: t,
            open: a,
            defaultOpen: l,
            disabled: c,
            onOpenChange: i,
            ...s
          } = e, [u = !1, d] = f({
            prop: a,
            defaultProp: l,
            onChange: i
          });
          return (0, r.createElement)(R, {
            scope: t,
            disabled: c,
            contentId: w(),
            open: u,
            onOpenToggle: (0, r.useCallback)((() => d((e => !e))), [d])
          }, (0, r.createElement)(p.sG.div, (0, o.A)({
            "data-state": x(u),
            "data-disabled": c ? "" : void 0
          }, s, {
            ref: n
          })))
        })),
        T = (0, r.forwardRef)(((e, n) => {
          const {
            __scopeCollapsible: t,
            ...a
          } = e, l = I("CollapsibleTrigger", t);
          return (0, r.createElement)(p.sG.button, (0, o.A)({
            type: "button",
            "aria-controls": l.contentId,
            "aria-expanded": l.open || !1,
            "data-state": x(l.open),
            "data-disabled": l.disabled ? "" : void 0,
            disabled: l.disabled
          }, a, {
            ref: n,
            onClick: u(e.onClick, l.onOpenToggle)
          }))
        })),
        k = "CollapsibleContent",
        O = (0, r.forwardRef)(((e, n) => {
          const {
            forceMount: t,
            ...a
          } = e, l = I(k, e.__scopeCollapsible);
          return (0, r.createElement)(v, {
            present: t || l.open
          }, (({
            present: e
          }) => (0, r.createElement)(S, (0, o.A)({}, a, {
            ref: n,
            present: e
          }))))
        })),
        S = (0, r.forwardRef)(((e, n) => {
          const {
            __scopeCollapsible: t,
            present: a,
            children: l,
            ...c
          } = e, s = I(k, t), [u, d] = (0, r.useState)(a), f = (0, r.useRef)(null), b = (0, i.s)(n, f), g = (0, r.useRef)(0), v = g.current, y = (0, r.useRef)(0), h = y.current, E = s.open || u, A = (0, r.useRef)(E), w = (0, r.useRef)();
          return (0, r.useEffect)((() => {
            const e = requestAnimationFrame((() => A.current = !1));
            return () => cancelAnimationFrame(e)
          }), []), m((() => {
            const e = f.current;
            if (e) {
              w.current = w.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName
              }, e.style.transitionDuration = "0s", e.style.animationName = "none";
              const n = e.getBoundingClientRect();
              g.current = n.height, y.current = n.width, A.current || (e.style.transitionDuration = w.current.transitionDuration, e.style.animationName = w.current.animationName), d(a)
            }
          }), [s.open, a]), (0, r.createElement)(p.sG.div, (0, o.A)({
            "data-state": x(s.open),
            "data-disabled": s.disabled ? "" : void 0,
            id: s.contentId,
            hidden: !E
          }, c, {
            ref: b,
            style: {
              "--radix-collapsible-content-height": v ? `${v}px` : void 0,
              "--radix-collapsible-content-width": h ? `${h}px` : void 0,
              ...e.style
            }
          }), E && l)
        }));

      function x(e) {
        return e ? "open" : "closed"
      }
      const D = M,
        P = T,
        U = O,
        L = (0, r.createContext)(void 0),
        V = "Accordion",
        $ = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [G, j, B] = function(e) {
          const n = e + "CollectionProvider",
            [t, o] = l(n),
            [a, c] = t(n, {
              collectionRef: {
                current: null
              },
              itemMap: new Map
            }),
            u = e + "CollectionSlot",
            d = e + "CollectionItemSlot",
            f = "data-radix-collection-item";
          return [{
            Provider: e => {
              const {
                scope: n,
                children: t
              } = e, o = r.useRef(null), l = r.useRef(new Map).current;
              return r.createElement(a, {
                scope: n,
                itemMap: l,
                collectionRef: o
              }, t)
            },
            Slot: r.forwardRef(((e, n) => {
              const {
                scope: t,
                children: o
              } = e, a = c(u, t), l = (0, i.s)(n, a.collectionRef);
              return r.createElement(s.DX, {
                ref: l
              }, o)
            })),
            ItemSlot: r.forwardRef(((e, n) => {
              const {
                scope: t,
                children: o,
                ...a
              } = e, l = r.useRef(null), u = (0, i.s)(n, l), p = c(d, t);
              return r.useEffect((() => (p.itemMap.set(l, {
                ref: l,
                ...a
              }), () => {
                p.itemMap.delete(l)
              }))), r.createElement(s.DX, {
                [f]: "",
                ref: u
              }, o)
            }))
          }, function(n) {
            const t = c(e + "CollectionConsumer", n);
            return r.useCallback((() => {
              const e = t.collectionRef.current;
              if (!e) return [];
              const n = Array.from(e.querySelectorAll(`[${f}]`));
              return Array.from(t.itemMap.values()).sort(((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current)))
            }), [t.collectionRef, t.itemMap])
          }, o]
        }(V),
        [H, F] = l(V, [B, N]),
        X = N(),
        q = r.forwardRef(((e, n) => {
          const {
            type: t,
            ...a
          } = e, l = a, c = a;
          return r.createElement(G.Provider, {
            scope: e.__scopeAccordion
          }, "multiple" === t ? r.createElement(Q, (0, o.A)({}, c, {
            ref: n
          })) : r.createElement(J, (0, o.A)({}, l, {
            ref: n
          })))
        }));
      q.propTypes = {
        type(e) {
          const n = e.value || e.defaultValue;
          return e.type && !["single", "multiple"].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : "multiple" === e.type && "string" == typeof n ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : "single" === e.type && Array.isArray(n) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null
        }
      };
      const [z, K] = H(V), [Y, Z] = H(V, {
        collapsible: !1
      }), J = r.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: a,
          onValueChange: l = (() => {}),
          collapsible: c = !1,
          ...i
        } = e, [s, u] = f({
          prop: t,
          defaultProp: a,
          onChange: l
        });
        return r.createElement(z, {
          scope: e.__scopeAccordion,
          value: s ? [s] : [],
          onItemOpen: u,
          onItemClose: r.useCallback((() => c && u("")), [c, u])
        }, r.createElement(Y, {
          scope: e.__scopeAccordion,
          collapsible: c
        }, r.createElement(ne, (0, o.A)({}, i, {
          ref: n
        }))))
      })), Q = r.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: a,
          onValueChange: l = (() => {}),
          ...c
        } = e, [i = [], s] = f({
          prop: t,
          defaultProp: a,
          onChange: l
        }), u = r.useCallback((e => s(((n = []) => [...n, e]))), [s]), d = r.useCallback((e => s(((n = []) => n.filter((n => n !== e))))), [s]);
        return r.createElement(z, {
          scope: e.__scopeAccordion,
          value: i,
          onItemOpen: u,
          onItemClose: d
        }, r.createElement(Y, {
          scope: e.__scopeAccordion,
          collapsible: !0
        }, r.createElement(ne, (0, o.A)({}, c, {
          ref: n
        }))))
      })), [W, ee] = H(V), ne = r.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: a,
          dir: l,
          orientation: c = "vertical",
          ...s
        } = e, d = r.useRef(null), f = (0, i.s)(d, n), m = j(t), b = "ltr" === function(e) {
          const n = (0, r.useContext)(L);
          return e || n || "ltr"
        }(l), g = u(e.onKeyDown, (e => {
          var n;
          if (!$.includes(e.key)) return;
          const t = e.target,
            o = m().filter((e => {
              var n;
              return !(null !== (n = e.ref.current) && void 0 !== n && n.disabled)
            })),
            r = o.findIndex((e => e.ref.current === t)),
            a = o.length;
          if (-1 === r) return;
          e.preventDefault();
          let l = r;
          const i = a - 1,
            s = () => {
              l = r + 1, l > i && (l = 0)
            },
            u = () => {
              l = r - 1, l < 0 && (l = i)
            };
          switch (e.key) {
            case "Home":
              l = 0;
              break;
            case "End":
              l = i;
              break;
            case "ArrowRight":
              "horizontal" === c && (b ? s() : u());
              break;
            case "ArrowDown":
              "vertical" === c && s();
              break;
            case "ArrowLeft":
              "horizontal" === c && (b ? u() : s());
              break;
            case "ArrowUp":
              "vertical" === c && u()
          }
          null === (n = o[l % a].ref.current) || void 0 === n || n.focus()
        }));
        return r.createElement(W, {
          scope: t,
          disabled: a,
          direction: l,
          orientation: c
        }, r.createElement(G.Slot, {
          scope: t
        }, r.createElement(p.sG.div, (0, o.A)({}, s, {
          "data-orientation": c,
          ref: f,
          onKeyDown: a ? void 0 : g
        }))))
      })), te = "AccordionItem", [oe, re] = H(te), ae = r.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          value: a,
          ...l
        } = e, c = ee(te, t), i = K(te, t), s = X(t), u = w(), d = a && i.value.includes(a) || !1, f = c.disabled || e.disabled;
        return r.createElement(oe, {
          scope: t,
          open: d,
          disabled: f,
          triggerId: u
        }, r.createElement(D, (0, o.A)({
          "data-orientation": c.orientation,
          "data-state": ue(d)
        }, s, l, {
          ref: n,
          disabled: f,
          open: d,
          onOpenChange: e => {
            e ? i.onItemOpen(a) : i.onItemClose(a)
          }
        })))
      })), le = r.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          ...a
        } = e, l = ee(V, t), c = re("AccordionHeader", t);
        return r.createElement(p.sG.h3, (0, o.A)({
          "data-orientation": l.orientation,
          "data-state": ue(c.open),
          "data-disabled": c.disabled ? "" : void 0
        }, a, {
          ref: n
        }))
      })), ce = "AccordionTrigger", ie = r.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          ...a
        } = e, l = ee(V, t), c = re(ce, t), i = Z(ce, t), s = X(t);
        return r.createElement(G.ItemSlot, {
          scope: t
        }, r.createElement(P, (0, o.A)({
          "aria-disabled": c.open && !i.collapsible || void 0,
          "data-orientation": l.orientation,
          id: c.triggerId
        }, s, a, {
          ref: n
        })))
      })), se = r.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          ...a
        } = e, l = ee(V, t), c = re("AccordionContent", t), i = X(t);
        return r.createElement(U, (0, o.A)({
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

      function ue(e) {
        return e ? "open" : "closed"
      }
      const de = q,
        fe = ae,
        pe = le,
        me = ie,
        be = se
    },
    95362: (e, n, t) => {
      t.d(n, {
        s: () => a,
        t: () => r
      });
      var o = t(62229);

      function r(...e) {
        return n => e.forEach((e => function(e, n) {
          "function" == typeof e ? e(n) : null != e && (e.current = n)
        }(e, n)))
      }

      function a(...e) {
        return (0, o.useCallback)(r(...e), e)
      }
    },
    78004: (e, n, t) => {
      t.d(n, {
        sG: () => l
      });
      var o = t(43680),
        r = t(62229),
        a = (t(44853), t(39447));
      const l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
        const t = (0, r.forwardRef)(((e, t) => {
          const {
            asChild: l,
            ...c
          } = e, i = l ? a.DX : n;
          return (0, r.useEffect)((() => {
            window[Symbol.for("radix-ui")] = !0
          }), []), (0, r.createElement)(i, (0, o.A)({}, c, {
            ref: t
          }))
        }));
        return t.displayName = `Primitive.${n}`, {
          ...e,
          [n]: t
        }
      }), {})
    },
    39447: (e, n, t) => {
      t.d(n, {
        DX: () => l,
        xV: () => i
      });
      var o = t(43680),
        r = t(62229),
        a = t(95362);
      const l = (0, r.forwardRef)(((e, n) => {
        const {
          children: t,
          ...a
        } = e, l = r.Children.toArray(t), i = l.find(s);
        if (i) {
          const e = i.props.children,
            t = l.map((n => n === i ? r.Children.count(e) > 1 ? r.Children.only(null) : (0, r.isValidElement)(e) ? e.props.children : null : n));
          return (0, r.createElement)(c, (0, o.A)({}, a, {
            ref: n
          }), (0, r.isValidElement)(e) ? (0, r.cloneElement)(e, void 0, t) : null)
        }
        return (0, r.createElement)(c, (0, o.A)({}, a, {
          ref: n
        }), t)
      }));
      l.displayName = "Slot";
      const c = (0, r.forwardRef)(((e, n) => {
        const {
          children: t,
          ...o
        } = e;
        return (0, r.isValidElement)(t) ? (0, r.cloneElement)(t, {
          ...u(o, t.props),
          ref: n ? (0, a.t)(n, t.ref) : t.ref
        }) : r.Children.count(t) > 1 ? r.Children.only(null) : null
      }));
      c.displayName = "SlotClone";
      const i = ({
        children: e
      }) => (0, r.createElement)(r.Fragment, null, e);

      function s(e) {
        return (0, r.isValidElement)(e) && e.type === i
      }

      function u(e, n) {
        const t = {
          ...n
        };
        for (const o in n) {
          const r = e[o],
            a = n[o];
          /^on[A-Z]/.test(o) ? r && a ? t[o] = (...e) => {
            a(...e), r(...e)
          } : r && (t[o] = r) : "style" === o ? t[o] = {
            ...r,
            ...a
          } : "className" === o && (t[o] = [r, a].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...t
        }
      }
    },
    43680: (e, n, t) => {
      function o() {
        return o = Object.assign ? Object.assign.bind() : function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          }
          return e
        }, o.apply(this, arguments)
      }
      t.d(n, {
        A: () => o
      })
    }
  }
]);