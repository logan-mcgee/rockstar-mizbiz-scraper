try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6e9c7a48-8946-4d03-bc29-2fd7ea5c8a8a", e._sentryDebugIdIdentifier = "sentry-dbid-6e9c7a48-8946-4d03-bc29-2fd7ea5c8a8a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [710], {
    20027: (e, n, t) => {
      t.d(n, {
        N: () => s
      });
      var r = t(71127),
        o = t(85426),
        a = t(95362),
        i = t(21222),
        c = t(42295);

      function s(e) {
        const n = e + "CollectionProvider",
          [t, s] = (0, o.A)(n),
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
            } = e, o = r.useRef(null), a = r.useRef(new Map).current;
            return (0, c.jsx)(l, {
              scope: n,
              itemMap: a,
              collectionRef: o,
              children: t
            })
          };
        u.displayName = n;
        const f = e + "CollectionSlot",
          p = (0, i.createSlot)(f),
          m = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: r
            } = e, o = d(f, t), i = (0, a.s)(n, o.collectionRef);
            return (0, c.jsx)(p, {
              ref: i,
              children: r
            })
          });
        m.displayName = f;
        const b = e + "CollectionItemSlot",
          h = "data-radix-collection-item",
          y = (0, i.createSlot)(b),
          g = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: o,
              ...i
            } = e, s = r.useRef(null), l = (0, a.s)(n, s), u = d(b, t);
            return r.useEffect(() => (u.itemMap.set(s, {
              ref: s,
              ...i
            }), () => {
              u.itemMap.delete(s)
            })), (0, c.jsx)(y, {
              [h]: "",
              ref: l,
              children: o
            })
          });
        return g.displayName = b, [{
          Provider: u,
          Slot: m,
          ItemSlot: g
        }, function(n) {
          const t = d(e + "CollectionConsumer", n);
          return r.useCallback(() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${h}]`));
            return Array.from(t.itemMap.values()).sort((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current))
          }, [t.collectionRef, t.itemMap])
        }, s]
      }
      Map
    },
    53146: (e, n, t) => {
      t.d(n, {
        C: () => i
      });
      var r = t(71127),
        o = t(95362),
        a = t(63155),
        i = e => {
          const {
            present: n,
            children: t
          } = e, i = function(e) {
            const [n, t] = r.useState(), o = r.useRef(null), i = r.useRef(e), s = r.useRef("none"), l = e ? "mounted" : "unmounted", [d, u] = function(e, n) {
              return r.useReducer((e, t) => n[e][t] ?? e, e)
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
            return r.useEffect(() => {
              const e = c(o.current);
              s.current = "mounted" === d ? e : "none"
            }, [d]), (0, a.N)(() => {
              const n = o.current,
                t = i.current;
              if (t !== e) {
                const r = s.current,
                  o = c(n);
                u(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
              }
            }, [e, u]), (0, a.N)(() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const a = c(o.current).includes(CSS.escape(r.animationName));
                    if (r.target === n && a && (u("ANIMATION_END"), !i.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      })
                    }
                  },
                  a = e => {
                    e.target === n && (s.current = c(o.current))
                  };
                return n.addEventListener("animationstart", a), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", a), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
              }
              u("ANIMATION_END")
            }, [n, u]), {
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: r.useCallback(e => {
                o.current = e ? getComputedStyle(e) : null, t(e)
              }, [])
            }
          }(n), s = "function" == typeof t ? t({
            present: i.isPresent
          }) : r.Children.only(t), l = (0, o.s)(i.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(s));
          return "function" == typeof t || i.isPresent ? r.cloneElement(s, {
            ref: l
          }) : null
        };

      function c(e) {
        return e?.animationName || "none"
      }
      i.displayName = "Presence"
    },
    63155: (e, n, t) => {
      t.d(n, {
        N: () => o
      });
      var r = t(71127),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    77768: (e, n, t) => {
      t.d(n, {
        jH: () => a
      });
      var r = t(71127),
        o = (t(42295), r.createContext(void 0));

      function a(e) {
        const n = r.useContext(o);
        return e || n || "ltr"
      }
    },
    78004: (e, n, t) => {
      t.d(n, {
        hO: () => s,
        sG: () => c
      });
      var r = t(71127),
        o = t(31062),
        a = t(21222),
        i = t(42295),
        c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, a.createSlot)(`Primitive.${n}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, c = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(c, {
                ...a,
                ref: r
              })
            });
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }, {});

      function s(e, n) {
        e && o.flushSync(() => e.dispatchEvent(n))
      }
    },
    85426: (e, n, t) => {
      t.d(n, {
        A: () => i,
        q: () => a
      });
      var r = t(71127),
        o = t(42295);

      function a(e, n) {
        const t = r.createContext(n),
          a = e => {
            const {
              children: n,
              ...a
            } = e, i = r.useMemo(() => a, Object.values(a));
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
          const n = t.map(e => r.createContext(e));
          return function(t) {
            const o = t?.[e] || n;
            return r.useMemo(() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: o
              }
            }), [t, o])
          }
        };
        return a.scopeName = e, [function(n, a) {
          const i = r.createContext(a),
            c = t.length;
          t = [...t, a];
          const s = n => {
            const {
              scope: t,
              children: a,
              ...s
            } = n, l = t?.[e]?.[c] || i, d = r.useMemo(() => s, Object.values(s));
            return (0, o.jsx)(l.Provider, {
              value: d,
              children: a
            })
          };
          return s.displayName = n + "Provider", [s, function(t, o) {
            const s = o?.[e]?.[c] || i,
              l = r.useContext(s);
            if (l) return l;
            if (void 0 !== a) return a;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, c(a, ...n)]
      }

      function c(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const o = t.reduce((n, {
              useScope: t,
              scopeName: r
            }) => ({
              ...n,
              ...t(e)[`__scope${r}`]
            }), {});
            return r.useMemo(() => ({
              [`__scope${n.scopeName}`]: o
            }), [o])
          }
        };
        return t.scopeName = n.scopeName, t
      }
    },
    90710: (e, n, t) => {
      t.r(n), t.d(n, {
        Accordion: () => $,
        AccordionContent: () => re,
        AccordionHeader: () => Z,
        AccordionItem: () => Q,
        AccordionTrigger: () => ne,
        Content: () => le,
        Header: () => ce,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => se,
        createAccordionScope: () => P
      });
      var r = t(71127),
        o = t(85426),
        a = t(20027),
        i = t(95362),
        c = t(94118),
        s = t(79158),
        l = t(78004),
        d = t(63155),
        u = t(53146),
        f = t(74406),
        p = t(42295),
        m = "Collapsible",
        [b, h] = (0, o.A)(m),
        [y, g] = b(m),
        w = r.forwardRef((e, n) => {
          const {
            __scopeCollapsible: t,
            open: o,
            defaultOpen: a,
            disabled: i,
            onOpenChange: c,
            ...d
          } = e, [u, b] = (0, s.useControllableState)({
            prop: o,
            defaultProp: a ?? !1,
            onChange: c,
            caller: m
          });
          return (0, p.jsx)(y, {
            scope: t,
            disabled: i,
            contentId: (0, f.useId)(),
            open: u,
            onOpenToggle: r.useCallback(() => b(e => !e), [b]),
            children: (0, p.jsx)(l.sG.div, {
              "data-state": A(u),
              "data-disabled": i ? "" : void 0,
              ...d,
              ref: n
            })
          })
        });
      w.displayName = m;
      var v = "CollapsibleTrigger",
        N = r.forwardRef((e, n) => {
          const {
            __scopeCollapsible: t,
            ...r
          } = e, o = g(v, t);
          return (0, p.jsx)(l.sG.button, {
            type: "button",
            "aria-controls": o.contentId,
            "aria-expanded": o.open || !1,
            "data-state": A(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...r,
            ref: n,
            onClick: (0, c.mK)(e.onClick, o.onOpenToggle)
          })
        });
      N.displayName = v;
      var _ = "CollapsibleContent",
        C = r.forwardRef((e, n) => {
          const {
            forceMount: t,
            ...r
          } = e, o = g(_, e.__scopeCollapsible);
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
        });
      C.displayName = _;
      var x = r.forwardRef((e, n) => {
        const {
          __scopeCollapsible: t,
          present: o,
          children: a,
          ...c
        } = e, s = g(_, t), [u, f] = r.useState(o), m = r.useRef(null), b = (0, i.s)(n, m), h = r.useRef(0), y = h.current, w = r.useRef(0), v = w.current, N = s.open || u, C = r.useRef(N), x = r.useRef(void 0);
        return r.useEffect(() => {
          const e = requestAnimationFrame(() => C.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, d.N)(() => {
          const e = m.current;
          if (e) {
            x.current = x.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const n = e.getBoundingClientRect();
            h.current = n.height, w.current = n.width, C.current || (e.style.transitionDuration = x.current.transitionDuration, e.style.animationName = x.current.animationName), f(o)
          }
        }, [s.open, o]), (0, p.jsx)(l.sG.div, {
          "data-state": A(s.open),
          "data-disabled": s.disabled ? "" : void 0,
          id: s.contentId,
          hidden: !N,
          ...c,
          ref: b,
          style: {
            "--radix-collapsible-content-height": y ? `${y}px` : void 0,
            "--radix-collapsible-content-width": v ? `${v}px` : void 0,
            ...e.style
          },
          children: N && a
        })
      });

      function A(e) {
        return e ? "open" : "closed"
      }
      var R = w,
        M = N,
        j = C,
        I = t(77768),
        O = "Accordion",
        T = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [k, S, E] = (0, a.N)(O),
        [D, P] = (0, o.A)(O, [E, h]),
        U = h(),
        $ = r.forwardRef((e, n) => {
          const {
            type: t,
            ...r
          } = e, o = r, a = r;
          return (0, p.jsx)(k.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === t ? (0, p.jsx)(V, {
              ...a,
              ref: n
            }) : (0, p.jsx)(K, {
              ...o,
              ref: n
            })
          })
        });
      $.displayName = O;
      var [L, F] = D(O), [H, G] = D(O, {
        collapsible: !1
      }), K = r.forwardRef((e, n) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...c
        } = e, [l, d] = (0, s.useControllableState)({
          prop: t,
          defaultProp: o ?? "",
          onChange: a,
          caller: O
        });
        return (0, p.jsx)(L, {
          scope: e.__scopeAccordion,
          value: r.useMemo(() => l ? [l] : [], [l]),
          onItemOpen: d,
          onItemClose: r.useCallback(() => i && d(""), [i, d]),
          children: (0, p.jsx)(H, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(z, {
              ...c,
              ref: n
            })
          })
        })
      }), V = r.forwardRef((e, n) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: a = () => {},
          ...i
        } = e, [c, l] = (0, s.useControllableState)({
          prop: t,
          defaultProp: o ?? [],
          onChange: a,
          caller: O
        }), d = r.useCallback(e => l((n = []) => [...n, e]), [l]), u = r.useCallback(e => l((n = []) => n.filter(n => n !== e)), [l]);
        return (0, p.jsx)(L, {
          scope: e.__scopeAccordion,
          value: c,
          onItemOpen: d,
          onItemClose: u,
          children: (0, p.jsx)(H, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(z, {
              ...i,
              ref: n
            })
          })
        })
      }), [W, q] = D(O), z = r.forwardRef((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: o,
          dir: a,
          orientation: s = "vertical",
          ...d
        } = e, u = r.useRef(null), f = (0, i.s)(u, n), m = S(t), b = "ltr" === (0, I.jH)(a), h = (0, c.mK)(e.onKeyDown, e => {
          if (!T.includes(e.key)) return;
          const n = e.target,
            t = m().filter(e => !e.ref.current?.disabled),
            r = t.findIndex(e => e.ref.current === n),
            o = t.length;
          if (-1 === r) return;
          e.preventDefault();
          let a = r;
          const i = o - 1,
            c = () => {
              a = r + 1, a > i && (a = 0)
            },
            l = () => {
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
              "horizontal" === s && (b ? c() : l());
              break;
            case "ArrowDown":
              "vertical" === s && c();
              break;
            case "ArrowLeft":
              "horizontal" === s && (b ? l() : c());
              break;
            case "ArrowUp":
              "vertical" === s && l()
          }
          const d = a % o;
          t[d].ref.current?.focus()
        });
        return (0, p.jsx)(W, {
          scope: t,
          disabled: o,
          direction: a,
          orientation: s,
          children: (0, p.jsx)(k.Slot, {
            scope: t,
            children: (0, p.jsx)(l.sG.div, {
              ...d,
              "data-orientation": s,
              ref: f,
              onKeyDown: o ? void 0 : h
            })
          })
        })
      }), B = "AccordionItem", [Y, J] = D(B), Q = r.forwardRef((e, n) => {
        const {
          __scopeAccordion: t,
          value: r,
          ...o
        } = e, a = q(B, t), i = F(B, t), c = U(t), s = (0, f.useId)(), l = r && i.value.includes(r) || !1, d = a.disabled || e.disabled;
        return (0, p.jsx)(Y, {
          scope: t,
          open: l,
          disabled: d,
          triggerId: s,
          children: (0, p.jsx)(R, {
            "data-orientation": a.orientation,
            "data-state": oe(l),
            ...c,
            ...o,
            ref: n,
            disabled: d,
            open: l,
            onOpenChange: e => {
              e ? i.onItemOpen(r) : i.onItemClose(r)
            }
          })
        })
      });
      Q.displayName = B;
      var X = "AccordionHeader",
        Z = r.forwardRef((e, n) => {
          const {
            __scopeAccordion: t,
            ...r
          } = e, o = q(O, t), a = J(X, t);
          return (0, p.jsx)(l.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": oe(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...r,
            ref: n
          })
        });
      Z.displayName = X;
      var ee = "AccordionTrigger",
        ne = r.forwardRef((e, n) => {
          const {
            __scopeAccordion: t,
            ...r
          } = e, o = q(O, t), a = J(ee, t), i = G(ee, t), c = U(t);
          return (0, p.jsx)(k.ItemSlot, {
            scope: t,
            children: (0, p.jsx)(M, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": o.orientation,
              id: a.triggerId,
              ...c,
              ...r,
              ref: n
            })
          })
        });
      ne.displayName = ee;
      var te = "AccordionContent",
        re = r.forwardRef((e, n) => {
          const {
            __scopeAccordion: t,
            ...r
          } = e, o = q(O, t), a = J(te, t), i = U(t);
          return (0, p.jsx)(j, {
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
        });

      function oe(e) {
        return e ? "open" : "closed"
      }
      re.displayName = te;
      var ae = $,
        ie = Q,
        ce = Z,
        se = ne,
        le = re
    },
    94118: (e, n, t) => {
      function r(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }
      t.d(n, {
        mK: () => r
      }), "undefined" == typeof window || !window.document || window.document.createElement
    },
    95362: (e, n, t) => {
      t.d(n, {
        s: () => i,
        t: () => a
      });
      var r = t(71127);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
        return n => {
          let t = !1;
          const r = e.map(e => {
            const r = o(e, n);
            return t || "function" != typeof r || (t = !0), r
          });
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
    }
  }
]);