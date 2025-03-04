! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6f9664e4-6617-4304-b412-2b8d693f11fe", e._sentryDebugIdIdentifier = "sentry-dbid-6f9664e4-6617-4304-b412-2b8d693f11fe")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2683], {
    20627: (e, n, t) => {
      function r(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }
      t.d(n, {
        m: () => r
      })
    },
    52683: (e, n, t) => {
      t.r(n), t.d(n, {
        Accordion: () => $,
        AccordionContent: () => re,
        AccordionHeader: () => Z,
        AccordionItem: () => Q,
        AccordionTrigger: () => ne,
        Content: () => de,
        Header: () => se,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => ce,
        createAccordionScope: () => D
      });
      var r = t(62229),
        o = t(85983),
        a = t(42268),
        i = t(83957),
        s = t(20627),
        c = t(91377),
        d = t(31873),
        l = t(66698),
        u = t(27085),
        f = t(74406),
        p = t(91029),
        m = "Collapsible",
        [b, h] = (0, o.A)(m),
        [v, g] = b(m),
        y = r.forwardRef(((e, n) => {
          const {
            __scopeCollapsible: t,
            open: o,
            defaultOpen: a,
            disabled: i,
            onOpenChange: s,
            ...l
          } = e, [u = !1, m] = (0, c.i)({
            prop: o,
            defaultProp: a,
            onChange: s
          });
          return (0, p.jsx)(v, {
            scope: t,
            disabled: i,
            contentId: (0, f.useId)(),
            open: u,
            onOpenToggle: r.useCallback((() => m((e => !e))), [m]),
            children: (0, p.jsx)(d.sG.div, {
              "data-state": A(u),
              "data-disabled": i ? "" : void 0,
              ...l,
              ref: n
            })
          })
        }));
      y.displayName = m;
      var w = "CollapsibleTrigger",
        _ = r.forwardRef(((e, n) => {
          const {
            __scopeCollapsible: t,
            ...r
          } = e, o = g(w, t);
          return (0, p.jsx)(d.sG.button, {
            type: "button",
            "aria-controls": o.contentId,
            "aria-expanded": o.open || !1,
            "data-state": A(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...r,
            ref: n,
            onClick: (0, s.m)(e.onClick, o.onOpenToggle)
          })
        }));
      _.displayName = w;
      var N = "CollapsibleContent",
        C = r.forwardRef(((e, n) => {
          const {
            forceMount: t,
            ...r
          } = e, o = g(N, e.__scopeCollapsible);
          return (0, p.jsx)(u.C, {
            present: t || o.open,
            children: ({
              present: e
            }) => (0, p.jsx)(x, {
              ...r,
              ref: n,
              present: e
            })
          })
        }));
      C.displayName = N;
      var x = r.forwardRef(((e, n) => {
        const {
          __scopeCollapsible: t,
          present: o,
          children: a,
          ...s
        } = e, c = g(N, t), [u, f] = r.useState(o), m = r.useRef(null), b = (0, i.s)(n, m), h = r.useRef(0), v = h.current, y = r.useRef(0), w = y.current, _ = c.open || u, C = r.useRef(_), x = r.useRef(void 0);
        return r.useEffect((() => {
          const e = requestAnimationFrame((() => C.current = !1));
          return () => cancelAnimationFrame(e)
        }), []), (0, l.N)((() => {
          const e = m.current;
          if (e) {
            x.current = x.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const n = e.getBoundingClientRect();
            h.current = n.height, y.current = n.width, C.current || (e.style.transitionDuration = x.current.transitionDuration, e.style.animationName = x.current.animationName), f(o)
          }
        }), [c.open, o]), (0, p.jsx)(d.sG.div, {
          "data-state": A(c.open),
          "data-disabled": c.disabled ? "" : void 0,
          id: c.contentId,
          hidden: !_,
          ...s,
          ref: b,
          style: {
            "--radix-collapsible-content-height": v ? `${v}px` : void 0,
            "--radix-collapsible-content-width": w ? `${w}px` : void 0,
            ...e.style
          },
          children: _ && a
        })
      }));

      function A(e) {
        return e ? "open" : "closed"
      }
      var R = y,
        j = _,
        I = C,
        M = t(26137),
        O = "Accordion",
        k = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [E, S, T] = (0, a.N)(O),
        [P, D] = (0, o.A)(O, [T, h]),
        U = h(),
        $ = r.forwardRef(((e, n) => {
          const {
            type: t,
            ...r
          } = e, o = r, a = r;
          return (0, p.jsx)(E.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === t ? (0, p.jsx)(W, {
              ...a,
              ref: n
            }) : (0, p.jsx)(V, {
              ...o,
              ref: n
            })
          })
        }));
      $.displayName = O;
      var [L, F] = P(O), [H, G] = P(O, {
        collapsible: !1
      }), V = r.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: a = (() => {}),
          collapsible: i = !1,
          ...s
        } = e, [d, l] = (0, c.i)({
          prop: t,
          defaultProp: o,
          onChange: a
        });
        return (0, p.jsx)(L, {
          scope: e.__scopeAccordion,
          value: d ? [d] : [],
          onItemOpen: l,
          onItemClose: r.useCallback((() => i && l("")), [i, l]),
          children: (0, p.jsx)(H, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(B, {
              ...s,
              ref: n
            })
          })
        })
      })), W = r.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: a = (() => {}),
          ...i
        } = e, [s = [], d] = (0, c.i)({
          prop: t,
          defaultProp: o,
          onChange: a
        }), l = r.useCallback((e => d(((n = []) => [...n, e]))), [d]), u = r.useCallback((e => d(((n = []) => n.filter((n => n !== e))))), [d]);
        return (0, p.jsx)(L, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: l,
          onItemClose: u,
          children: (0, p.jsx)(H, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(B, {
              ...i,
              ref: n
            })
          })
        })
      })), [q, z] = P(O), B = r.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: o,
          dir: a,
          orientation: c = "vertical",
          ...l
        } = e, u = r.useRef(null), f = (0, i.s)(u, n), m = S(t), b = "ltr" === (0, M.jH)(a), h = (0, s.m)(e.onKeyDown, (e => {
          if (!k.includes(e.key)) return;
          const n = e.target,
            t = m().filter((e => !e.ref.current?.disabled)),
            r = t.findIndex((e => e.ref.current === n)),
            o = t.length;
          if (-1 === r) return;
          e.preventDefault();
          let a = r;
          const i = o - 1,
            s = () => {
              a = r + 1, a > i && (a = 0)
            },
            d = () => {
              a = r - 1, a < 0 && (a = i)
            };
          switch (e.key) {
            case "Home":
              a = 0;
              break;
            case "End":
              a = i;
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
          const l = a % o;
          t[l].ref.current?.focus()
        }));
        return (0, p.jsx)(q, {
          scope: t,
          disabled: o,
          direction: a,
          orientation: c,
          children: (0, p.jsx)(E.Slot, {
            scope: t,
            children: (0, p.jsx)(d.sG.div, {
              ...l,
              "data-orientation": c,
              ref: f,
              onKeyDown: o ? void 0 : h
            })
          })
        })
      })), K = "AccordionItem", [Y, J] = P(K), Q = r.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          value: r,
          ...o
        } = e, a = z(K, t), i = F(K, t), s = U(t), c = (0, f.useId)(), d = r && i.value.includes(r) || !1, l = a.disabled || e.disabled;
        return (0, p.jsx)(Y, {
          scope: t,
          open: d,
          disabled: l,
          triggerId: c,
          children: (0, p.jsx)(R, {
            "data-orientation": a.orientation,
            "data-state": oe(d),
            ...s,
            ...o,
            ref: n,
            disabled: l,
            open: d,
            onOpenChange: e => {
              e ? i.onItemOpen(r) : i.onItemClose(r)
            }
          })
        })
      }));
      Q.displayName = K;
      var X = "AccordionHeader",
        Z = r.forwardRef(((e, n) => {
          const {
            __scopeAccordion: t,
            ...r
          } = e, o = z(O, t), a = J(X, t);
          return (0, p.jsx)(d.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": oe(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...r,
            ref: n
          })
        }));
      Z.displayName = X;
      var ee = "AccordionTrigger",
        ne = r.forwardRef(((e, n) => {
          const {
            __scopeAccordion: t,
            ...r
          } = e, o = z(O, t), a = J(ee, t), i = G(ee, t), s = U(t);
          return (0, p.jsx)(E.ItemSlot, {
            scope: t,
            children: (0, p.jsx)(j, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": o.orientation,
              id: a.triggerId,
              ...s,
              ...r,
              ref: n
            })
          })
        }));
      ne.displayName = ee;
      var te = "AccordionContent",
        re = r.forwardRef(((e, n) => {
          const {
            __scopeAccordion: t,
            ...r
          } = e, o = z(O, t), a = J(te, t), i = U(t);
          return (0, p.jsx)(I, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": o.orientation,
            ...i,
            ...r,
            ref: n,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        }));

      function oe(e) {
        return e ? "open" : "closed"
      }
      re.displayName = te;
      var ae = $,
        ie = Q,
        se = Z,
        ce = ne,
        de = re
    },
    42268: (e, n, t) => {
      t.d(n, {
        N: () => c
      });
      var r = t(62229),
        o = t(85983),
        a = t(83957),
        i = t(91252),
        s = t(91029);

      function c(e) {
        const n = e + "CollectionProvider",
          [t, c] = (0, o.A)(n),
          [d, l] = t(n, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          u = e => {
            const {
              scope: n,
              children: t
            } = e, o = r.useRef(null), a = r.useRef(new Map).current;
            return (0, s.jsx)(d, {
              scope: n,
              itemMap: a,
              collectionRef: o,
              children: t
            })
          };
        u.displayName = n;
        const f = e + "CollectionSlot",
          p = r.forwardRef(((e, n) => {
            const {
              scope: t,
              children: r
            } = e, o = l(f, t), c = (0, a.s)(n, o.collectionRef);
            return (0, s.jsx)(i.Slot, {
              ref: c,
              children: r
            })
          }));
        p.displayName = f;
        const m = e + "CollectionItemSlot",
          b = "data-radix-collection-item",
          h = r.forwardRef(((e, n) => {
            const {
              scope: t,
              children: o,
              ...c
            } = e, d = r.useRef(null), u = (0, a.s)(n, d), f = l(m, t);
            return r.useEffect((() => (f.itemMap.set(d, {
              ref: d,
              ...c
            }), () => {
              f.itemMap.delete(d)
            }))), (0, s.jsx)(i.Slot, {
              [b]: "",
              ref: u,
              children: o
            })
          }));
        return h.displayName = m, [{
          Provider: u,
          Slot: p,
          ItemSlot: h
        }, function(n) {
          const t = l(e + "CollectionConsumer", n);
          return r.useCallback((() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${b}]`));
            return Array.from(t.itemMap.values()).sort(((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current)))
          }), [t.collectionRef, t.itemMap])
        }, c]
      }
    },
    83957: (e, n, t) => {
      t.d(n, {
        s: () => i,
        t: () => a
      });
      var r = t(62229);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
        return n => {
          let t = !1;
          const r = e.map((e => {
            const r = o(e, n);
            return t || "function" != typeof r || (t = !0), r
          }));
          if (t) return () => {
            for (let n = 0; n < r.length; n++) {
              const t = r[n];
              "function" == typeof t ? t() : o(e[n], null)
            }
          }
        }
      }

      function i(...e) {
        return r.useCallback(a(...e), e)
      }
    },
    85983: (e, n, t) => {
      t.d(n, {
        A: () => i,
        q: () => a
      });
      var r = t(62229),
        o = t(91029);

      function a(e, n) {
        const t = r.createContext(n),
          a = e => {
            const {
              children: n,
              ...a
            } = e, i = r.useMemo((() => a), Object.values(a));
            return (0, o.jsx)(t.Provider, {
              value: i,
              children: n
            })
          };
        return a.displayName = e + "Provider", [a, function(o) {
          const a = r.useContext(t);
          if (a) return a;
          if (void 0 !== n) return n;
          throw new Error(`\`${o}\` must be used within \`${e}\``)
        }]
      }

      function i(e, n = []) {
        let t = [];
        const a = () => {
          const n = t.map((e => r.createContext(e)));
          return function(t) {
            const o = t?.[e] || n;
            return r.useMemo((() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: o
              }
            })), [t, o])
          }
        };
        return a.scopeName = e, [function(n, a) {
          const i = r.createContext(a),
            s = t.length;
          t = [...t, a];
          const c = n => {
            const {
              scope: t,
              children: a,
              ...c
            } = n, d = t?.[e]?.[s] || i, l = r.useMemo((() => c), Object.values(c));
            return (0, o.jsx)(d.Provider, {
              value: l,
              children: a
            })
          };
          return c.displayName = n + "Provider", [c, function(t, o) {
            const c = o?.[e]?.[s] || i,
              d = r.useContext(c);
            if (d) return d;
            if (void 0 !== a) return a;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, s(a, ...n)]
      }

      function s(...e) {
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
              scopeName: r
            }) => ({
              ...n,
              ...t(e)[`__scope${r}`]
            })), {});
            return r.useMemo((() => ({
              [`__scope${n.scopeName}`]: o
            })), [o])
          }
        };
        return t.scopeName = n.scopeName, t
      }
    },
    26137: (e, n, t) => {
      t.d(n, {
        jH: () => a
      });
      var r = t(62229),
        o = (t(91029), r.createContext(void 0));

      function a(e) {
        const n = r.useContext(o);
        return e || n || "ltr"
      }
    },
    27085: (e, n, t) => {
      t.d(n, {
        C: () => i
      });
      var r = t(62229),
        o = t(83957),
        a = t(66698),
        i = e => {
          const {
            present: n,
            children: t
          } = e, i = function(e) {
            const [n, t] = r.useState(), o = r.useRef({}), i = r.useRef(e), c = r.useRef("none"), d = e ? "mounted" : "unmounted", [l, u] = function(e, n) {
              return r.useReducer(((e, t) => n[e][t] ?? e), e)
            }(d, {
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
            return r.useEffect((() => {
              const e = s(o.current);
              c.current = "mounted" === l ? e : "none"
            }), [l]), (0, a.N)((() => {
              const n = o.current,
                t = i.current;
              if (t !== e) {
                const r = c.current,
                  o = s(n);
                u(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
              }
            }), [e, u]), (0, a.N)((() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const a = s(o.current).includes(r.animationName);
                    if (r.target === n && a && (u("ANIMATION_END"), !i.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout((() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      }))
                    }
                  },
                  a = e => {
                    e.target === n && (c.current = s(o.current))
                  };
                return n.addEventListener("animationstart", a), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", a), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
              }
              u("ANIMATION_END")
            }), [n, u]), {
              isPresent: ["mounted", "unmountSuspended"].includes(l),
              ref: r.useCallback((e => {
                e && (o.current = getComputedStyle(e)), t(e)
              }), [])
            }
          }(n), c = "function" == typeof t ? t({
            present: i.isPresent
          }) : r.Children.only(t), d = (0, o.s)(i.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(c));
          return "function" == typeof t || i.isPresent ? r.cloneElement(c, {
            ref: d
          }) : null
        };

      function s(e) {
        return e?.animationName || "none"
      }
      i.displayName = "Presence"
    },
    31873: (e, n, t) => {
      t.d(n, {
        hO: () => c,
        sG: () => s
      });
      var r = t(62229),
        o = t(44853),
        a = t(16741),
        i = t(91029),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
          const t = r.forwardRef(((e, t) => {
            const {
              asChild: r,
              ...o
            } = e, s = r ? a.Slot : n;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(s, {
              ...o,
              ref: t
            })
          }));
          return t.displayName = `Primitive.${n}`, {
            ...e,
            [n]: t
          }
        }), {});

      function c(e, n) {
        e && o.flushSync((() => e.dispatchEvent(n)))
      }
    },
    59693: (e, n, t) => {
      t.d(n, {
        c: () => o
      });
      var r = t(62229);

      function o(e) {
        const n = r.useRef(e);
        return r.useEffect((() => {
          n.current = e
        })), r.useMemo((() => (...e) => n.current?.(...e)), [])
      }
    },
    91377: (e, n, t) => {
      t.d(n, {
        i: () => a
      });
      var r = t(62229),
        o = t(59693);

      function a({
        prop: e,
        defaultProp: n,
        onChange: t = (() => {})
      }) {
        const [a, i] = function({
          defaultProp: e,
          onChange: n
        }) {
          const t = r.useState(e),
            [a] = t,
            i = r.useRef(a),
            s = (0, o.c)(n);
          return r.useEffect((() => {
            i.current !== a && (s(a), i.current = a)
          }), [a, i, s]), t
        }({
          defaultProp: n,
          onChange: t
        }), s = void 0 !== e, c = s ? e : a, d = (0, o.c)(t);
        return [c, r.useCallback((n => {
          if (s) {
            const t = "function" == typeof n ? n(e) : n;
            t !== e && d(t)
          } else i(n)
        }), [s, e, i, d])]
      }
    },
    66698: (e, n, t) => {
      t.d(n, {
        N: () => o
      });
      var r = t(62229),
        o = Boolean(globalThis?.document) ? r.useLayoutEffect : () => {}
    }
  }
]);