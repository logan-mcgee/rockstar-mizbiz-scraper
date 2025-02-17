! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "553b1607-54af-462d-9026-cc011908507f", e._sentryDebugIdIdentifier = "sentry-dbid-553b1607-54af-462d-9026-cc011908507f")
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
  [821], {
    80821: (e, n, t) => {
      t.r(n), t.d(n, {
        Accordion: () => z,
        AccordionContent: () => ue,
        AccordionHeader: () => ce,
        AccordionItem: () => le,
        AccordionTrigger: () => se,
        Content: () => ge,
        Header: () => me,
        Item: () => pe,
        Root: () => fe,
        Trigger: () => be,
        createAccordionScope: () => X
      });
      var o = t(18751),
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
      var i = t(83957),
        s = t(78796);

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
      var p = t(31873);

      function m(e) {
        const n = (0, r.useRef)(e);
        return (0, r.useEffect)((() => {
          n.current = e
        })), (0, r.useMemo)((() => (...e) => {
          var t;
          return null === (t = n.current) || void 0 === t ? void 0 : t.call(n, ...e)
        }), [])
      }
      const b = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? r.useLayoutEffect : () => {};
      var g = t(44853);
      const v = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? r.useLayoutEffect : () => {},
        h = e => {
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
            }), [i]), v((() => {
              const n = o.current,
                t = a.current;
              if (t !== e) {
                const o = l.current,
                  r = y(n);
                e ? s("MOUNT") : "none" === r || "none" === (null == n ? void 0 : n.display) ? s("UNMOUNT") : s(t && o !== r ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e
              }
            }), [e, s]), v((() => {
              if (n) {
                const e = e => {
                    const t = y(o.current).includes(e.animationName);
                    e.target === n && t && (0, g.flushSync)((() => s("ANIMATION_END")))
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
      h.displayName = "Presence";
      const E = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? r.useLayoutEffect : () => {},
        A = a["useId".toString()] || (() => {});
      let w = 0;

      function _(e) {
        const [n, t] = r.useState(A());
        return E((() => {
          e || t((e => null != e ? e : String(w++)))
        }), [e]), e || (n ? `radix-${n}` : "")
      }
      const C = "Collapsible",
        [R, N] = l(C),
        [I, M] = R(C),
        T = (0, r.forwardRef)(((e, n) => {
          const {
            __scopeCollapsible: t,
            open: a,
            defaultOpen: l,
            disabled: c,
            onOpenChange: i,
            ...s
          } = e, [u = !1, d] = function({
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
                l = m(n);
              return (0, r.useEffect)((() => {
                a.current !== o && (l(o), a.current = o)
              }), [o, a, l]), t
            }({
              defaultProp: n,
              onChange: t
            }), l = void 0 !== e, c = l ? e : o, i = m(t);
            return [c, (0, r.useCallback)((n => {
              if (l) {
                const t = "function" == typeof n ? n(e) : n;
                t !== e && i(t)
              } else a(n)
            }), [l, e, a, i])]
          }({
            prop: a,
            defaultProp: l,
            onChange: i
          });
          return (0, r.createElement)(I, {
            scope: t,
            disabled: c,
            contentId: _(),
            open: u,
            onOpenToggle: (0, r.useCallback)((() => d((e => !e))), [d])
          }, (0, r.createElement)(p.sG.div, (0, o.A)({
            "data-state": D(u),
            "data-disabled": c ? "" : void 0
          }, s, {
            ref: n
          })))
        })),
        k = (0, r.forwardRef)(((e, n) => {
          const {
            __scopeCollapsible: t,
            ...a
          } = e, l = M("CollapsibleTrigger", t);
          return (0, r.createElement)(p.sG.button, (0, o.A)({
            type: "button",
            "aria-controls": l.contentId,
            "aria-expanded": l.open || !1,
            "data-state": D(l.open),
            "data-disabled": l.disabled ? "" : void 0,
            disabled: l.disabled
          }, a, {
            ref: n,
            onClick: u(e.onClick, l.onOpenToggle)
          }))
        })),
        O = "CollapsibleContent",
        S = (0, r.forwardRef)(((e, n) => {
          const {
            forceMount: t,
            ...a
          } = e, l = M(O, e.__scopeCollapsible);
          return (0, r.createElement)(h, {
            present: t || l.open
          }, (({
            present: e
          }) => (0, r.createElement)(x, (0, o.A)({}, a, {
            ref: n,
            present: e
          }))))
        })),
        x = (0, r.forwardRef)(((e, n) => {
          const {
            __scopeCollapsible: t,
            present: a,
            children: l,
            ...c
          } = e, s = M(O, t), [u, d] = (0, r.useState)(a), f = (0, r.useRef)(null), m = (0, i.s)(n, f), g = (0, r.useRef)(0), v = g.current, h = (0, r.useRef)(0), y = h.current, E = s.open || u, A = (0, r.useRef)(E), w = (0, r.useRef)();
          return (0, r.useEffect)((() => {
            const e = requestAnimationFrame((() => A.current = !1));
            return () => cancelAnimationFrame(e)
          }), []), b((() => {
            const e = f.current;
            if (e) {
              w.current = w.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName
              }, e.style.transitionDuration = "0s", e.style.animationName = "none";
              const n = e.getBoundingClientRect();
              g.current = n.height, h.current = n.width, A.current || (e.style.transitionDuration = w.current.transitionDuration, e.style.animationName = w.current.animationName), d(a)
            }
          }), [s.open, a]), (0, r.createElement)(p.sG.div, (0, o.A)({
            "data-state": D(s.open),
            "data-disabled": s.disabled ? "" : void 0,
            id: s.contentId,
            hidden: !E
          }, c, {
            ref: m,
            style: {
              "--radix-collapsible-content-height": v ? `${v}px` : void 0,
              "--radix-collapsible-content-width": y ? `${y}px` : void 0,
              ...e.style
            }
          }), E && l)
        }));

      function D(e) {
        return e ? "open" : "closed"
      }
      const P = T,
        U = k,
        L = S,
        V = (0, r.createContext)(void 0),
        $ = "Accordion",
        G = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [j, B, H] = function(e) {
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
        }($),
        [F, X] = l($, [H, N]),
        q = N(),
        z = r.forwardRef(((e, n) => {
          const {
            type: t,
            ...a
          } = e, l = a, c = a;
          return r.createElement(j.Provider, {
            scope: e.__scopeAccordion
          }, "multiple" === t ? r.createElement(W, (0, o.A)({}, c, {
            ref: n
          })) : r.createElement(Q, (0, o.A)({}, l, {
            ref: n
          })))
        }));
      z.propTypes = {
        type(e) {
          const n = e.value || e.defaultValue;
          return e.type && !["single", "multiple"].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : "multiple" === e.type && "string" == typeof n ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : "single" === e.type && Array.isArray(n) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null
        }
      };
      const [K, Y] = F($), [Z, J] = F($, {
        collapsible: !1
      }), Q = r.forwardRef(((e, n) => {
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
        return r.createElement(K, {
          scope: e.__scopeAccordion,
          value: s ? [s] : [],
          onItemOpen: u,
          onItemClose: r.useCallback((() => c && u("")), [c, u])
        }, r.createElement(Z, {
          scope: e.__scopeAccordion,
          collapsible: c
        }, r.createElement(te, (0, o.A)({}, i, {
          ref: n
        }))))
      })), W = r.forwardRef(((e, n) => {
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
        return r.createElement(K, {
          scope: e.__scopeAccordion,
          value: i,
          onItemOpen: u,
          onItemClose: d
        }, r.createElement(Z, {
          scope: e.__scopeAccordion,
          collapsible: !0
        }, r.createElement(te, (0, o.A)({}, c, {
          ref: n
        }))))
      })), [ee, ne] = F($), te = r.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: a,
          dir: l,
          orientation: c = "vertical",
          ...s
        } = e, d = r.useRef(null), f = (0, i.s)(d, n), m = B(t), b = "ltr" === function(e) {
          const n = (0, r.useContext)(V);
          return e || n || "ltr"
        }(l), g = u(e.onKeyDown, (e => {
          var n;
          if (!G.includes(e.key)) return;
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
        return r.createElement(ee, {
          scope: t,
          disabled: a,
          direction: l,
          orientation: c
        }, r.createElement(j.Slot, {
          scope: t
        }, r.createElement(p.sG.div, (0, o.A)({}, s, {
          "data-orientation": c,
          ref: f,
          onKeyDown: a ? void 0 : g
        }))))
      })), oe = "AccordionItem", [re, ae] = F(oe), le = r.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          value: a,
          ...l
        } = e, c = ne(oe, t), i = Y(oe, t), s = q(t), u = _(), d = a && i.value.includes(a) || !1, f = c.disabled || e.disabled;
        return r.createElement(re, {
          scope: t,
          open: d,
          disabled: f,
          triggerId: u
        }, r.createElement(P, (0, o.A)({
          "data-orientation": c.orientation,
          "data-state": de(d)
        }, s, l, {
          ref: n,
          disabled: f,
          open: d,
          onOpenChange: e => {
            e ? i.onItemOpen(a) : i.onItemClose(a)
          }
        })))
      })), ce = r.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          ...a
        } = e, l = ne($, t), c = ae("AccordionHeader", t);
        return r.createElement(p.sG.h3, (0, o.A)({
          "data-orientation": l.orientation,
          "data-state": de(c.open),
          "data-disabled": c.disabled ? "" : void 0
        }, a, {
          ref: n
        }))
      })), ie = "AccordionTrigger", se = r.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          ...a
        } = e, l = ne($, t), c = ae(ie, t), i = J(ie, t), s = q(t);
        return r.createElement(j.ItemSlot, {
          scope: t
        }, r.createElement(U, (0, o.A)({
          "aria-disabled": c.open && !i.collapsible || void 0,
          "data-orientation": l.orientation,
          id: c.triggerId
        }, s, a, {
          ref: n
        })))
      })), ue = r.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          ...a
        } = e, l = ne($, t), c = ae("AccordionContent", t), i = q(t);
        return r.createElement(L, (0, o.A)({
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

      function de(e) {
        return e ? "open" : "closed"
      }
      const fe = z,
        pe = le,
        me = ce,
        be = se,
        ge = ue
    },
    83957: (e, n, t) => {
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
    31873: (e, n, t) => {
      t.d(n, {
        sG: () => l
      });
      var o = t(18751),
        r = t(62229),
        a = (t(44853), t(78796));
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
    78796: (e, n, t) => {
      t.d(n, {
        DX: () => l,
        xV: () => i
      });
      var o = t(18751),
        r = t(62229),
        a = t(83957);
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
    18751: (e, n, t) => {
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