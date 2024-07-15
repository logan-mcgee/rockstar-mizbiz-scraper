! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "caa9e6bd-7a21-49fc-ad3f-46596c41914f", e._sentryDebugIdIdentifier = "sentry-dbid-caa9e6bd-7a21-49fc-ad3f-46596c41914f")
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
  [1604], {
    31604: (e, n, t) => {
      t.r(n), t.d(n, {
        Accordion: () => G,
        AccordionContent: () => fe,
        AccordionHeader: () => se,
        AccordionItem: () => ie,
        AccordionTrigger: () => ue,
        Content: () => ye,
        Header: () => be,
        Item: () => ge,
        Root: () => me,
        Trigger: () => ve,
        createAccordionScope: () => Y
      });
      var r = t(82795),
        o = t(51664),
        a = t.t(o, 2);

      function c(e, n = []) {
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
            c = t.length;

          function l(n) {
            const {
              scope: t,
              children: r,
              ...l
            } = n, i = (null == t ? void 0 : t[e][c]) || a, s = (0, o.useMemo)((() => l), Object.values(l));
            return (0, o.createElement)(i.Provider, {
              value: s
            }, r)
          }
          return t = [...t, r], l.displayName = n + "Provider", [l, function(t, l) {
            const i = (null == l ? void 0 : l[e][c]) || a,
              s = (0, o.useContext)(i);
            if (s) return s;
            if (void 0 !== r) return r;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, l(r, ...n)]
      }

      function l(...e) {
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
        } = e, c = o.Children.toArray(t), l = c.find(p);
        if (l) {
          const e = l.props.children,
            t = c.map((n => n === l ? o.Children.count(e) > 1 ? o.Children.only(null) : (0, o.isValidElement)(e) ? e.props.children : null : n));
          return (0, o.createElement)(u, (0, r.c)({}, a, {
            ref: n
          }), (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, t) : null)
        }
        return (0, o.createElement)(u, (0, r.c)({}, a, {
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

      function g(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (null == e || e(r), !1 === t || !r.defaultPrevented) return null == n ? void 0 : n(r)
        }
      }

      function b(e) {
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
            c = b(n);
          return (0, o.useEffect)((() => {
            a.current !== r && (c(r), a.current = r)
          }), [r, a, c]), t
        }({
          defaultProp: n,
          onChange: t
        }), c = void 0 !== e, l = c ? e : r, i = b(t);
        return [l, (0, o.useCallback)((n => {
          if (c) {
            const t = "function" == typeof n ? n(e) : n;
            t !== e && i(t)
          } else a(n)
        }), [c, e, a, i])]
      }
      var y = t(77364);
      const E = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
          const t = (0, o.forwardRef)(((e, t) => {
            const {
              asChild: a,
              ...c
            } = e, l = a ? d : n;
            return (0, o.useEffect)((() => {
              window[Symbol.for("radix-ui")] = !0
            }), []), (0, o.createElement)(l, (0, r.c)({}, c, {
              ref: t
            }))
          }));
          return t.displayName = `Primitive.${n}`, {
            ...e,
            [n]: t
          }
        }), {}),
        h = Boolean(null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) ? o.useLayoutEffect : () => {},
        w = e => {
          const {
            present: n,
            children: t
          } = e, r = function(e) {
            const [n, t] = (0, o.useState)(), r = (0, o.useRef)({}), a = (0, o.useRef)(e), c = (0, o.useRef)("none"), l = e ? "mounted" : "unmounted", [i, s] = function(e, n) {
              return (0, o.useReducer)(((e, t) => {
                const r = n[e][t];
                return null != r ? r : e
              }), e)
            }(l, {
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
              const e = _(r.current);
              c.current = "mounted" === i ? e : "none"
            }), [i]), h((() => {
              const n = r.current,
                t = a.current;
              if (t !== e) {
                const r = c.current,
                  o = _(n);
                e ? s("MOUNT") : "none" === o || "none" === (null == n ? void 0 : n.display) ? s("UNMOUNT") : s(t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e
              }
            }), [e, s]), h((() => {
              if (n) {
                const e = e => {
                    const t = _(r.current).includes(e.animationName);
                    e.target === n && t && (0, y.flushSync)((() => s("ANIMATION_END")))
                  },
                  t = e => {
                    e.target === n && (c.current = _(r.current))
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
          }) : o.Children.only(t), c = s(r.ref, a.ref);
          return "function" == typeof t || r.isPresent ? (0, o.cloneElement)(a, {
            ref: c
          }) : null
        };

      function _(e) {
        return (null == e ? void 0 : e.animationName) || "none"
      }
      w.displayName = "Presence";
      const C = a["useId".toString()] || (() => {});
      let A = 0;

      function N(e) {
        const [n, t] = o.useState(C());
        return h((() => {
          e || t((e => null != e ? e : String(A++)))
        }), [e]), e || (n ? `radix-${n}` : "")
      }
      const R = "Collapsible",
        [I, M] = c(R),
        [k, S] = I(R),
        O = (0, o.forwardRef)(((e, n) => {
          const {
            __scopeCollapsible: t,
            open: a,
            defaultOpen: c,
            disabled: l,
            onOpenChange: i,
            ...s
          } = e, [d = !1, u] = v({
            prop: a,
            defaultProp: c,
            onChange: i
          });
          return (0, o.createElement)(k, {
            scope: t,
            disabled: l,
            contentId: N(),
            open: d,
            onOpenToggle: (0, o.useCallback)((() => u((e => !e))), [u])
          }, (0, o.createElement)(E.div, (0, r.c)({
            "data-state": U(d),
            "data-disabled": l ? "" : void 0
          }, s, {
            ref: n
          })))
        })),
        T = (0, o.forwardRef)(((e, n) => {
          const {
            __scopeCollapsible: t,
            ...a
          } = e, c = S("CollapsibleTrigger", t);
          return (0, o.createElement)(E.button, (0, r.c)({
            type: "button",
            "aria-controls": c.contentId,
            "aria-expanded": c.open || !1,
            "data-state": U(c.open),
            "data-disabled": c.disabled ? "" : void 0,
            disabled: c.disabled
          }, a, {
            ref: n,
            onClick: g(e.onClick, c.onOpenToggle)
          }))
        })),
        x = "CollapsibleContent",
        D = (0, o.forwardRef)(((e, n) => {
          const {
            forceMount: t,
            ...a
          } = e, c = S(x, e.__scopeCollapsible);
          return (0, o.createElement)(w, {
            present: t || c.open
          }, (({
            present: e
          }) => (0, o.createElement)(P, (0, r.c)({}, a, {
            ref: n,
            present: e
          }))))
        })),
        P = (0, o.forwardRef)(((e, n) => {
          const {
            __scopeCollapsible: t,
            present: a,
            children: c,
            ...l
          } = e, i = S(x, t), [d, u] = (0, o.useState)(a), f = (0, o.useRef)(null), p = s(n, f), m = (0, o.useRef)(0), g = m.current, b = (0, o.useRef)(0), v = b.current, y = i.open || d, w = (0, o.useRef)(y), _ = (0, o.useRef)();
          return (0, o.useEffect)((() => {
            const e = requestAnimationFrame((() => w.current = !1));
            return () => cancelAnimationFrame(e)
          }), []), h((() => {
            const e = f.current;
            if (e) {
              _.current = _.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName
              }, e.style.transitionDuration = "0s", e.style.animationName = "none";
              const n = e.getBoundingClientRect();
              m.current = n.height, b.current = n.width, w.current || (e.style.transitionDuration = _.current.transitionDuration, e.style.animationName = _.current.animationName), u(a)
            }
          }), [i.open, a]), (0, o.createElement)(E.div, (0, r.c)({
            "data-state": U(i.open),
            "data-disabled": i.disabled ? "" : void 0,
            id: i.contentId,
            hidden: !y
          }, l, {
            ref: p,
            style: {
              "--radix-collapsible-content-height": g ? `${g}px` : void 0,
              "--radix-collapsible-content-width": v ? `${v}px` : void 0,
              ...e.style
            }
          }), y && c)
        }));

      function U(e) {
        return e ? "open" : "closed"
      }
      const V = O,
        L = T,
        $ = D,
        H = (0, o.createContext)(void 0),
        F = "Accordion",
        B = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [j, q, z] = function(e) {
          const n = e + "CollectionProvider",
            [t, r] = c(n),
            [a, l] = t(n, {
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
              } = e, r = o.useRef(null), c = o.useRef(new Map).current;
              return o.createElement(a, {
                scope: n,
                itemMap: c,
                collectionRef: r
              }, t)
            },
            Slot: o.forwardRef(((e, n) => {
              const {
                scope: t,
                children: r
              } = e, a = s(n, l(i, t).collectionRef);
              return o.createElement(d, {
                ref: a
              }, r)
            })),
            ItemSlot: o.forwardRef(((e, n) => {
              const {
                scope: t,
                children: r,
                ...a
              } = e, c = o.useRef(null), i = s(n, c), p = l(u, t);
              return o.useEffect((() => (p.itemMap.set(c, {
                ref: c,
                ...a
              }), () => {
                p.itemMap.delete(c)
              }))), o.createElement(d, {
                [f]: "",
                ref: i
              }, r)
            }))
          }, function(n) {
            const t = l(e + "CollectionConsumer", n);
            return o.useCallback((() => {
              const e = t.collectionRef.current;
              if (!e) return [];
              const n = Array.from(e.querySelectorAll(`[${f}]`));
              return Array.from(t.itemMap.values()).sort(((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current)))
            }), [t.collectionRef, t.itemMap])
          }, r]
        }(F),
        [K, Y] = c(F, [z, M]),
        Z = M(),
        G = o.forwardRef(((e, n) => {
          const {
            type: t,
            ...a
          } = e, c = a, l = a;
          return o.createElement(j.Provider, {
            scope: e.__scopeAccordion
          }, "multiple" === t ? o.createElement(ne, (0, r.c)({}, l, {
            ref: n
          })) : o.createElement(ee, (0, r.c)({}, c, {
            ref: n
          })))
        }));
      G.propTypes = {
        type(e) {
          const n = e.value || e.defaultValue;
          return e.type && !["single", "multiple"].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : "multiple" === e.type && "string" == typeof n ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : "single" === e.type && Array.isArray(n) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null
        }
      };
      const [J, Q] = K(F), [W, X] = K(F, {
        collapsible: !1
      }), ee = o.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: a,
          onValueChange: c = (() => {}),
          collapsible: l = !1,
          ...i
        } = e, [s, d] = v({
          prop: t,
          defaultProp: a,
          onChange: c
        });
        return o.createElement(J, {
          scope: e.__scopeAccordion,
          value: s ? [s] : [],
          onItemOpen: d,
          onItemClose: o.useCallback((() => l && d("")), [l, d])
        }, o.createElement(W, {
          scope: e.__scopeAccordion,
          collapsible: l
        }, o.createElement(oe, (0, r.c)({}, i, {
          ref: n
        }))))
      })), ne = o.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: a,
          onValueChange: c = (() => {}),
          ...l
        } = e, [i = [], s] = v({
          prop: t,
          defaultProp: a,
          onChange: c
        }), d = o.useCallback((e => s(((n = []) => [...n, e]))), [s]), u = o.useCallback((e => s(((n = []) => n.filter((n => n !== e))))), [s]);
        return o.createElement(J, {
          scope: e.__scopeAccordion,
          value: i,
          onItemOpen: d,
          onItemClose: u
        }, o.createElement(W, {
          scope: e.__scopeAccordion,
          collapsible: !0
        }, o.createElement(oe, (0, r.c)({}, l, {
          ref: n
        }))))
      })), [te, re] = K(F), oe = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: a,
          dir: c,
          orientation: l = "vertical",
          ...i
        } = e, d = s(o.useRef(null), n), u = q(t), f = "ltr" === function(e) {
          const n = (0, o.useContext)(H);
          return e || n || "ltr"
        }(c), p = g(e.onKeyDown, (e => {
          var n;
          if (!B.includes(e.key)) return;
          const t = e.target,
            r = u().filter((e => {
              var n;
              return !(null !== (n = e.ref.current) && void 0 !== n && n.disabled)
            })),
            o = r.findIndex((e => e.ref.current === t)),
            a = r.length;
          if (-1 === o) return;
          e.preventDefault();
          let c = o;
          const i = a - 1,
            s = () => {
              c = o + 1, c > i && (c = 0)
            },
            d = () => {
              c = o - 1, c < 0 && (c = i)
            };
          switch (e.key) {
            case "Home":
              c = 0;
              break;
            case "End":
              c = i;
              break;
            case "ArrowRight":
              "horizontal" === l && (f ? s() : d());
              break;
            case "ArrowDown":
              "vertical" === l && s();
              break;
            case "ArrowLeft":
              "horizontal" === l && (f ? d() : s());
              break;
            case "ArrowUp":
              "vertical" === l && d()
          }
          null === (n = r[c % a].ref.current) || void 0 === n || n.focus()
        }));
        return o.createElement(te, {
          scope: t,
          disabled: a,
          direction: c,
          orientation: l
        }, o.createElement(j.Slot, {
          scope: t
        }, o.createElement(E.div, (0, r.c)({}, i, {
          "data-orientation": l,
          ref: d,
          onKeyDown: a ? void 0 : p
        }))))
      })), ae = "AccordionItem", [ce, le] = K(ae), ie = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          value: a,
          ...c
        } = e, l = re(ae, t), i = Q(ae, t), s = Z(t), d = N(), u = a && i.value.includes(a) || !1, f = l.disabled || e.disabled;
        return o.createElement(ce, {
          scope: t,
          open: u,
          disabled: f,
          triggerId: d
        }, o.createElement(V, (0, r.c)({
          "data-orientation": l.orientation,
          "data-state": pe(u)
        }, s, c, {
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
        } = e, c = re(F, t), l = le("AccordionHeader", t);
        return o.createElement(E.h3, (0, r.c)({
          "data-orientation": c.orientation,
          "data-state": pe(l.open),
          "data-disabled": l.disabled ? "" : void 0
        }, a, {
          ref: n
        }))
      })), de = "AccordionTrigger", ue = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          ...a
        } = e, c = re(F, t), l = le(de, t), i = X(de, t), s = Z(t);
        return o.createElement(j.ItemSlot, {
          scope: t
        }, o.createElement(L, (0, r.c)({
          "aria-disabled": l.open && !i.collapsible || void 0,
          "data-orientation": c.orientation,
          id: l.triggerId
        }, s, a, {
          ref: n
        })))
      })), fe = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          ...a
        } = e, c = re(F, t), l = le("AccordionContent", t), i = Z(t);
        return o.createElement($, (0, r.c)({
          role: "region",
          "aria-labelledby": l.triggerId,
          "data-orientation": c.orientation
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
        ge = ie,
        be = se,
        ve = ue,
        ye = fe
    }
  }
]);