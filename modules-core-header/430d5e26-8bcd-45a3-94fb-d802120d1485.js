! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "430d5e26-8bcd-45a3-94fb-d802120d1485", e._sentryDebugIdIdentifier = "sentry-dbid-430d5e26-8bcd-45a3-94fb-d802120d1485")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [6260], {
    19264: (e, n, t) => {
      t.d(n, {
        jH: () => a
      });
      var o = t(71127),
        r = (t(25854), o.createContext(void 0));

      function a(e) {
        const n = o.useContext(r);
        return e || n || "ltr"
      }
    },
    29818: (e, n, t) => {
      t.d(n, {
        A: () => i,
        q: () => a
      });
      var o = t(71127),
        r = t(25854);

      function a(e, n) {
        const t = o.createContext(n),
          a = e => {
            const {
              children: n,
              ...a
            } = e, i = o.useMemo((() => a), Object.values(a));
            return (0, r.jsx)(t.Provider, {
              value: i,
              children: n
            })
          };
        return a.displayName = e + "Provider", [a, function(r) {
          const a = o.useContext(t);
          if (a) return a;
          if (void 0 !== n) return n;
          throw new Error(`\`${r}\` must be used within \`${e}\``)
        }]
      }

      function i(e, n = []) {
        let t = [];
        const a = () => {
          const n = t.map((e => o.createContext(e)));
          return function(t) {
            const r = t?.[e] || n;
            return o.useMemo((() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: r
              }
            })), [t, r])
          }
        };
        return a.scopeName = e, [function(n, a) {
          const i = o.createContext(a),
            s = t.length;
          t = [...t, a];
          const c = n => {
            const {
              scope: t,
              children: a,
              ...c
            } = n, l = t?.[e]?.[s] || i, d = o.useMemo((() => c), Object.values(c));
            return (0, r.jsx)(l.Provider, {
              value: d,
              children: a
            })
          };
          return c.displayName = n + "Provider", [c, function(t, r) {
            const c = r?.[e]?.[s] || i,
              l = o.useContext(c);
            if (l) return l;
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
            const r = t.reduce(((n, {
              useScope: t,
              scopeName: o
            }) => ({
              ...n,
              ...t(e)[`__scope${o}`]
            })), {});
            return o.useMemo((() => ({
              [`__scope${n.scopeName}`]: r
            })), [r])
          }
        };
        return t.scopeName = n.scopeName, t
      }
    },
    36146: (e, n, t) => {
      t.d(n, {
        C: () => i
      });
      var o = t(71127),
        r = t(86410),
        a = t(85307),
        i = e => {
          const {
            present: n,
            children: t
          } = e, i = function(e) {
            const [n, t] = o.useState(), r = o.useRef(null), i = o.useRef(e), c = o.useRef("none"), l = e ? "mounted" : "unmounted", [d, u] = function(e, n) {
              return o.useReducer(((e, t) => n[e][t] ?? e), e)
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
            return o.useEffect((() => {
              const e = s(r.current);
              c.current = "mounted" === d ? e : "none"
            }), [d]), (0, a.N)((() => {
              const n = r.current,
                t = i.current;
              if (t !== e) {
                const o = c.current,
                  r = s(n);
                u(e ? "MOUNT" : "none" === r || "none" === n?.display ? "UNMOUNT" : t && o !== r ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
              }
            }), [e, u]), (0, a.N)((() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  o = o => {
                    const a = s(r.current).includes(o.animationName);
                    if (o.target === n && a && (u("ANIMATION_END"), !i.current)) {
                      const o = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout((() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = o)
                      }))
                    }
                  },
                  a = e => {
                    e.target === n && (c.current = s(r.current))
                  };
                return n.addEventListener("animationstart", a), n.addEventListener("animationcancel", o), n.addEventListener("animationend", o), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", a), n.removeEventListener("animationcancel", o), n.removeEventListener("animationend", o)
                }
              }
              u("ANIMATION_END")
            }), [n, u]), {
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: o.useCallback((e => {
                r.current = e ? getComputedStyle(e) : null, t(e)
              }), [])
            }
          }(n), c = "function" == typeof t ? t({
            present: i.isPresent
          }) : o.Children.only(t), l = (0, r.s)(i.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(c));
          return "function" == typeof t || i.isPresent ? o.cloneElement(c, {
            ref: l
          }) : null
        };

      function s(e) {
        return e?.animationName || "none"
      }
      i.displayName = "Presence"
    },
    52806: (e, n, t) => {
      var o;
      t.d(n, {
        i: () => s
      });
      var r = t(71127),
        a = t(85307),
        i = (o || (o = t.t(r, 2)))[" useInsertionEffect ".trim().toString()] || a.N;

      function s({
        prop: e,
        defaultProp: n,
        onChange: t = () => {},
        caller: o
      }) {
        const [a, s, c] = function({
          defaultProp: e,
          onChange: n
        }) {
          const [t, o] = r.useState(e), a = r.useRef(t), s = r.useRef(n);
          return i((() => {
            s.current = n
          }), [n]), r.useEffect((() => {
            a.current !== t && (s.current?.(t), a.current = t)
          }), [t, a]), [t, o, s]
        }({
          defaultProp: n,
          onChange: t
        }), l = void 0 !== e, d = l ? e : a; {
          const n = r.useRef(void 0 !== e);
          r.useEffect((() => {
            const e = n.current;
            if (e !== l) {
              const n = e ? "controlled" : "uncontrolled",
                t = l ? "controlled" : "uncontrolled";
              console.warn(`${o} is changing from ${n} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            n.current = l
          }), [l, o])
        }
        const u = r.useCallback((n => {
          if (l) {
            const t = function(e) {
              return "function" == typeof e
            }(n) ? n(e) : n;
            t !== e && c.current?.(t)
          } else s(n)
        }), [l, e, s, c]);
        return [d, u]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    65998: (e, n, t) => {
      function o(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(o) {
          if (e?.(o), !1 === t || !o.defaultPrevented) return n?.(o)
        }
      }
      t.d(n, {
        m: () => o
      })
    },
    76260: (e, n, t) => {
      t.r(n), t.d(n, {
        Accordion: () => G,
        AccordionContent: () => oe,
        AccordionHeader: () => Z,
        AccordionItem: () => J,
        AccordionTrigger: () => ne,
        Content: () => le,
        Header: () => se,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => ce,
        createAccordionScope: () => P
      });
      var o = t(71127),
        r = t(29818),
        a = t(80355),
        i = t(86410),
        s = t(65998),
        c = t(52806),
        l = t(85100),
        d = t(85307),
        u = t(36146),
        f = t(74406),
        p = t(25854),
        m = "Collapsible",
        [b, h] = (0, r.A)(m),
        [y, g] = b(m),
        v = o.forwardRef(((e, n) => {
          const {
            __scopeCollapsible: t,
            open: r,
            defaultOpen: a,
            disabled: i,
            onOpenChange: s,
            ...d
          } = e, [u, b] = (0, c.i)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: s,
            caller: m
          });
          return (0, p.jsx)(y, {
            scope: t,
            disabled: i,
            contentId: (0, f.useId)(),
            open: u,
            onOpenToggle: o.useCallback((() => b((e => !e))), [b]),
            children: (0, p.jsx)(l.sG.div, {
              "data-state": x(u),
              "data-disabled": i ? "" : void 0,
              ...d,
              ref: n
            })
          })
        }));
      v.displayName = m;
      var w = "CollapsibleTrigger",
        _ = o.forwardRef(((e, n) => {
          const {
            __scopeCollapsible: t,
            ...o
          } = e, r = g(w, t);
          return (0, p.jsx)(l.sG.button, {
            type: "button",
            "aria-controls": r.contentId,
            "aria-expanded": r.open || !1,
            "data-state": x(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...o,
            ref: n,
            onClick: (0, s.m)(e.onClick, r.onOpenToggle)
          })
        }));
      _.displayName = w;
      var N = "CollapsibleContent",
        C = o.forwardRef(((e, n) => {
          const {
            forceMount: t,
            ...o
          } = e, r = g(N, e.__scopeCollapsible);
          return (0, p.jsx)(u.C, {
            present: t || r.open,
            children: ({
              present: e
            }) => (0, p.jsx)(M, {
              ...o,
              ref: n,
              present: e
            })
          })
        }));
      C.displayName = N;
      var M = o.forwardRef(((e, n) => {
        const {
          __scopeCollapsible: t,
          present: r,
          children: a,
          ...s
        } = e, c = g(N, t), [u, f] = o.useState(r), m = o.useRef(null), b = (0, i.s)(n, m), h = o.useRef(0), y = h.current, v = o.useRef(0), w = v.current, _ = c.open || u, C = o.useRef(_), M = o.useRef(void 0);
        return o.useEffect((() => {
          const e = requestAnimationFrame((() => C.current = !1));
          return () => cancelAnimationFrame(e)
        }), []), (0, d.N)((() => {
          const e = m.current;
          if (e) {
            M.current = M.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const n = e.getBoundingClientRect();
            h.current = n.height, v.current = n.width, C.current || (e.style.transitionDuration = M.current.transitionDuration, e.style.animationName = M.current.animationName), f(r)
          }
        }), [c.open, r]), (0, p.jsx)(l.sG.div, {
          "data-state": x(c.open),
          "data-disabled": c.disabled ? "" : void 0,
          id: c.contentId,
          hidden: !_,
          ...s,
          ref: b,
          style: {
            "--radix-collapsible-content-height": y ? `${y}px` : void 0,
            "--radix-collapsible-content-width": w ? `${w}px` : void 0,
            ...e.style
          },
          children: _ && a
        })
      }));

      function x(e) {
        return e ? "open" : "closed"
      }
      var A = v,
        R = _,
        I = C,
        j = t(19264),
        O = "Accordion",
        T = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [E, k, S] = (0, a.N)(O),
        [D, P] = (0, r.A)(O, [S, h]),
        $ = h(),
        G = o.forwardRef(((e, n) => {
          const {
            type: t,
            ...o
          } = e, r = o, a = o;
          return (0, p.jsx)(E.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === t ? (0, p.jsx)(W, {
              ...a,
              ref: n
            }) : (0, p.jsx)(V, {
              ...r,
              ref: n
            })
          })
        }));
      G.displayName = O;
      var [U, L] = D(O), [F, H] = D(O, {
        collapsible: !1
      }), V = o.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: r,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...s
        } = e, [l, d] = (0, c.i)({
          prop: t,
          defaultProp: r ?? "",
          onChange: a,
          caller: O
        });
        return (0, p.jsx)(U, {
          scope: e.__scopeAccordion,
          value: o.useMemo((() => l ? [l] : []), [l]),
          onItemOpen: d,
          onItemClose: o.useCallback((() => i && d("")), [i, d]),
          children: (0, p.jsx)(F, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(K, {
              ...s,
              ref: n
            })
          })
        })
      })), W = o.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: r,
          onValueChange: a = () => {},
          ...i
        } = e, [s, l] = (0, c.i)({
          prop: t,
          defaultProp: r ?? [],
          onChange: a,
          caller: O
        }), d = o.useCallback((e => l(((n = []) => [...n, e]))), [l]), u = o.useCallback((e => l(((n = []) => n.filter((n => n !== e))))), [l]);
        return (0, p.jsx)(U, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: d,
          onItemClose: u,
          children: (0, p.jsx)(F, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(K, {
              ...i,
              ref: n
            })
          })
        })
      })), [q, z] = D(O), K = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: r,
          dir: a,
          orientation: c = "vertical",
          ...d
        } = e, u = o.useRef(null), f = (0, i.s)(u, n), m = k(t), b = "ltr" === (0, j.jH)(a), h = (0, s.m)(e.onKeyDown, (e => {
          if (!T.includes(e.key)) return;
          const n = e.target,
            t = m().filter((e => !e.ref.current?.disabled)),
            o = t.findIndex((e => e.ref.current === n)),
            r = t.length;
          if (-1 === o) return;
          e.preventDefault();
          let a = o;
          const i = r - 1,
            s = () => {
              a = o + 1, a > i && (a = 0)
            },
            l = () => {
              a = o - 1, a < 0 && (a = i)
            };
          switch (e.key) {
            case "Home":
              a = 0;
              break;
            case "End":
              a = i;
              break;
            case "ArrowRight":
              "horizontal" === c && (b ? s() : l());
              break;
            case "ArrowDown":
              "vertical" === c && s();
              break;
            case "ArrowLeft":
              "horizontal" === c && (b ? l() : s());
              break;
            case "ArrowUp":
              "vertical" === c && l()
          }
          const d = a % r;
          t[d].ref.current?.focus()
        }));
        return (0, p.jsx)(q, {
          scope: t,
          disabled: r,
          direction: a,
          orientation: c,
          children: (0, p.jsx)(E.Slot, {
            scope: t,
            children: (0, p.jsx)(l.sG.div, {
              ...d,
              "data-orientation": c,
              ref: f,
              onKeyDown: r ? void 0 : h
            })
          })
        })
      })), Y = "AccordionItem", [B, X] = D(Y), J = o.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          value: o,
          ...r
        } = e, a = z(Y, t), i = L(Y, t), s = $(t), c = (0, f.useId)(), l = o && i.value.includes(o) || !1, d = a.disabled || e.disabled;
        return (0, p.jsx)(B, {
          scope: t,
          open: l,
          disabled: d,
          triggerId: c,
          children: (0, p.jsx)(A, {
            "data-orientation": a.orientation,
            "data-state": re(l),
            ...s,
            ...r,
            ref: n,
            disabled: d,
            open: l,
            onOpenChange: e => {
              e ? i.onItemOpen(o) : i.onItemClose(o)
            }
          })
        })
      }));
      J.displayName = Y;
      var Q = "AccordionHeader",
        Z = o.forwardRef(((e, n) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, r = z(O, t), a = X(Q, t);
          return (0, p.jsx)(l.sG.h3, {
            "data-orientation": r.orientation,
            "data-state": re(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: n
          })
        }));
      Z.displayName = Q;
      var ee = "AccordionTrigger",
        ne = o.forwardRef(((e, n) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, r = z(O, t), a = X(ee, t), i = H(ee, t), s = $(t);
          return (0, p.jsx)(E.ItemSlot, {
            scope: t,
            children: (0, p.jsx)(R, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": r.orientation,
              id: a.triggerId,
              ...s,
              ...o,
              ref: n
            })
          })
        }));
      ne.displayName = ee;
      var te = "AccordionContent",
        oe = o.forwardRef(((e, n) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, r = z(O, t), a = X(te, t), i = $(t);
          return (0, p.jsx)(I, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": r.orientation,
            ...i,
            ...o,
            ref: n,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        }));

      function re(e) {
        return e ? "open" : "closed"
      }
      oe.displayName = te;
      var ae = G,
        ie = J,
        se = Z,
        ce = ne,
        le = oe
    },
    80355: (e, n, t) => {
      t.d(n, {
        N: () => c
      });
      var o = t(71127),
        r = t(29818),
        a = t(86410),
        i = t(21222),
        s = t(25854);

      function c(e) {
        const n = e + "CollectionProvider",
          [t, c] = (0, r.A)(n),
          [l, d] = t(n, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          u = e => {
            const {
              scope: n,
              children: t
            } = e, r = o.useRef(null), a = o.useRef(new Map).current;
            return (0, s.jsx)(l, {
              scope: n,
              itemMap: a,
              collectionRef: r,
              children: t
            })
          };
        u.displayName = n;
        const f = e + "CollectionSlot",
          p = (0, i.createSlot)(f),
          m = o.forwardRef(((e, n) => {
            const {
              scope: t,
              children: o
            } = e, r = d(f, t), i = (0, a.s)(n, r.collectionRef);
            return (0, s.jsx)(p, {
              ref: i,
              children: o
            })
          }));
        m.displayName = f;
        const b = e + "CollectionItemSlot",
          h = "data-radix-collection-item",
          y = (0, i.createSlot)(b),
          g = o.forwardRef(((e, n) => {
            const {
              scope: t,
              children: r,
              ...i
            } = e, c = o.useRef(null), l = (0, a.s)(n, c), u = d(b, t);
            return o.useEffect((() => (u.itemMap.set(c, {
              ref: c,
              ...i
            }), () => {
              u.itemMap.delete(c)
            }))), (0, s.jsx)(y, {
              [h]: "",
              ref: l,
              children: r
            })
          }));
        return g.displayName = b, [{
          Provider: u,
          Slot: m,
          ItemSlot: g
        }, function(n) {
          const t = d(e + "CollectionConsumer", n);
          return o.useCallback((() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${h}]`));
            return Array.from(t.itemMap.values()).sort(((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current)))
          }), [t.collectionRef, t.itemMap])
        }, c]
      }
      Map
    },
    85100: (e, n, t) => {
      t.d(n, {
        hO: () => c,
        sG: () => s
      });
      var o = t(71127),
        r = t(18429),
        a = t(21222),
        i = t(25854),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, n) => {
          const t = (0, a.createSlot)(`Primitive.${n}`),
            r = o.forwardRef(((e, o) => {
              const {
                asChild: r,
                ...a
              } = e, s = r ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(s, {
                ...a,
                ref: o
              })
            }));
          return r.displayName = `Primitive.${n}`, {
            ...e,
            [n]: r
          }
        }), {});

      function c(e, n) {
        e && r.flushSync((() => e.dispatchEvent(n)))
      }
    },
    85307: (e, n, t) => {
      t.d(n, {
        N: () => r
      });
      var o = t(71127),
        r = globalThis?.document ? o.useLayoutEffect : () => {}
    },
    86410: (e, n, t) => {
      t.d(n, {
        s: () => i,
        t: () => a
      });
      var o = t(71127);

      function r(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
        return n => {
          let t = !1;
          const o = e.map((e => {
            const o = r(e, n);
            return t || "function" != typeof o || (t = !0), o
          }));
          if (t) return () => {
            for (let n = 0; n < o.length; n++) {
              const t = o[n];
              "function" == typeof t ? t() : r(e[n], null)
            }
          }
        }
      }

      function i(...e) {
        return o.useCallback(a(...e), e)
      }
    }
  }
]);