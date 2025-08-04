try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9e9e1737-4274-42dc-9c93-f15a0f00b74f", e._sentryDebugIdIdentifier = "sentry-dbid-9e9e1737-4274-42dc-9c93-f15a0f00b74f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [8784], {
    21423: (e, n, t) => {
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
    22517: (e, n, t) => {
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
    48784: (e, n, t) => {
      t.r(n), t.d(n, {
        Accordion: () => $,
        AccordionContent: () => re,
        AccordionHeader: () => Z,
        AccordionItem: () => Q,
        AccordionTrigger: () => ne,
        Content: () => le,
        Header: () => se,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => ce,
        createAccordionScope: () => P
      });
      var r = t(71127),
        o = t(91173),
        a = t(50438),
        i = t(21423),
        s = t(22517),
        c = t(79158),
        l = t(51347),
        d = t(92600),
        u = t(79315),
        f = t(74406),
        p = t(70954),
        m = "Collapsible",
        [b, h] = (0, o.A)(m),
        [y, g] = b(m),
        v = r.forwardRef(((e, n) => {
          const {
            __scopeCollapsible: t,
            open: o,
            defaultOpen: a,
            disabled: i,
            onOpenChange: s,
            ...d
          } = e, [u, b] = (0, c.useControllableState)({
            prop: o,
            defaultProp: a ?? !1,
            onChange: s,
            caller: m
          });
          return (0, p.jsx)(y, {
            scope: t,
            disabled: i,
            contentId: (0, f.useId)(),
            open: u,
            onOpenToggle: r.useCallback((() => b((e => !e))), [b]),
            children: (0, p.jsx)(l.sG.div, {
              "data-state": A(u),
              "data-disabled": i ? "" : void 0,
              ...d,
              ref: n
            })
          })
        }));
      v.displayName = m;
      var w = "CollapsibleTrigger",
        N = r.forwardRef(((e, n) => {
          const {
            __scopeCollapsible: t,
            ...r
          } = e, o = g(w, t);
          return (0, p.jsx)(l.sG.button, {
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
      N.displayName = w;
      var _ = "CollapsibleContent",
        C = r.forwardRef(((e, n) => {
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
        }));
      C.displayName = _;
      var x = r.forwardRef(((e, n) => {
        const {
          __scopeCollapsible: t,
          present: o,
          children: a,
          ...s
        } = e, c = g(_, t), [u, f] = r.useState(o), m = r.useRef(null), b = (0, i.s)(n, m), h = r.useRef(0), y = h.current, v = r.useRef(0), w = v.current, N = c.open || u, C = r.useRef(N), x = r.useRef(void 0);
        return r.useEffect((() => {
          const e = requestAnimationFrame((() => C.current = !1));
          return () => cancelAnimationFrame(e)
        }), []), (0, d.N)((() => {
          const e = m.current;
          if (e) {
            x.current = x.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const n = e.getBoundingClientRect();
            h.current = n.height, v.current = n.width, C.current || (e.style.transitionDuration = x.current.transitionDuration, e.style.animationName = x.current.animationName), f(o)
          }
        }), [c.open, o]), (0, p.jsx)(l.sG.div, {
          "data-state": A(c.open),
          "data-disabled": c.disabled ? "" : void 0,
          id: c.contentId,
          hidden: !N,
          ...s,
          ref: b,
          style: {
            "--radix-collapsible-content-height": y ? `${y}px` : void 0,
            "--radix-collapsible-content-width": w ? `${w}px` : void 0,
            ...e.style
          },
          children: N && a
        })
      }));

      function A(e) {
        return e ? "open" : "closed"
      }
      var R = v,
        M = N,
        j = C,
        I = t(59219),
        O = "Accordion",
        T = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [k, E, S] = (0, a.N)(O),
        [D, P] = (0, o.A)(O, [S, h]),
        U = h(),
        $ = r.forwardRef(((e, n) => {
          const {
            type: t,
            ...r
          } = e, o = r, a = r;
          return (0, p.jsx)(k.Provider, {
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
      var [L, F] = D(O), [H, G] = D(O, {
        collapsible: !1
      }), V = r.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...s
        } = e, [l, d] = (0, c.useControllableState)({
          prop: t,
          defaultProp: o ?? "",
          onChange: a,
          caller: O
        });
        return (0, p.jsx)(L, {
          scope: e.__scopeAccordion,
          value: r.useMemo((() => l ? [l] : []), [l]),
          onItemOpen: d,
          onItemClose: r.useCallback((() => i && d("")), [i, d]),
          children: (0, p.jsx)(H, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(K, {
              ...s,
              ref: n
            })
          })
        })
      })), W = r.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: a = () => {},
          ...i
        } = e, [s, l] = (0, c.useControllableState)({
          prop: t,
          defaultProp: o ?? [],
          onChange: a,
          caller: O
        }), d = r.useCallback((e => l(((n = []) => [...n, e]))), [l]), u = r.useCallback((e => l(((n = []) => n.filter((n => n !== e))))), [l]);
        return (0, p.jsx)(L, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: d,
          onItemClose: u,
          children: (0, p.jsx)(H, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(K, {
              ...i,
              ref: n
            })
          })
        })
      })), [q, z] = D(O), K = r.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: o,
          dir: a,
          orientation: c = "vertical",
          ...d
        } = e, u = r.useRef(null), f = (0, i.s)(u, n), m = E(t), b = "ltr" === (0, I.jH)(a), h = (0, s.m)(e.onKeyDown, (e => {
          if (!T.includes(e.key)) return;
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
          const d = a % o;
          t[d].ref.current?.focus()
        }));
        return (0, p.jsx)(q, {
          scope: t,
          disabled: o,
          direction: a,
          orientation: c,
          children: (0, p.jsx)(k.Slot, {
            scope: t,
            children: (0, p.jsx)(l.sG.div, {
              ...d,
              "data-orientation": c,
              ref: f,
              onKeyDown: o ? void 0 : h
            })
          })
        })
      })), B = "AccordionItem", [Y, J] = D(B), Q = r.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          value: r,
          ...o
        } = e, a = z(B, t), i = F(B, t), s = U(t), c = (0, f.useId)(), l = r && i.value.includes(r) || !1, d = a.disabled || e.disabled;
        return (0, p.jsx)(Y, {
          scope: t,
          open: l,
          disabled: d,
          triggerId: c,
          children: (0, p.jsx)(R, {
            "data-orientation": a.orientation,
            "data-state": oe(l),
            ...s,
            ...o,
            ref: n,
            disabled: d,
            open: l,
            onOpenChange: e => {
              e ? i.onItemOpen(r) : i.onItemClose(r)
            }
          })
        })
      }));
      Q.displayName = B;
      var X = "AccordionHeader",
        Z = r.forwardRef(((e, n) => {
          const {
            __scopeAccordion: t,
            ...r
          } = e, o = z(O, t), a = J(X, t);
          return (0, p.jsx)(l.sG.h3, {
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
          return (0, p.jsx)(k.ItemSlot, {
            scope: t,
            children: (0, p.jsx)(M, {
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
        }));

      function oe(e) {
        return e ? "open" : "closed"
      }
      re.displayName = te;
      var ae = $,
        ie = Q,
        se = Z,
        ce = ne,
        le = re
    },
    50438: (e, n, t) => {
      t.d(n, {
        N: () => c
      });
      var r = t(71127),
        o = t(91173),
        a = t(21423),
        i = t(21222),
        s = t(70954);

      function c(e) {
        const n = e + "CollectionProvider",
          [t, c] = (0, o.A)(n),
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
            return (0, s.jsx)(l, {
              scope: n,
              itemMap: a,
              collectionRef: o,
              children: t
            })
          };
        u.displayName = n;
        const f = e + "CollectionSlot",
          p = (0, i.createSlot)(f),
          m = r.forwardRef(((e, n) => {
            const {
              scope: t,
              children: r
            } = e, o = d(f, t), i = (0, a.s)(n, o.collectionRef);
            return (0, s.jsx)(p, {
              ref: i,
              children: r
            })
          }));
        m.displayName = f;
        const b = e + "CollectionItemSlot",
          h = "data-radix-collection-item",
          y = (0, i.createSlot)(b),
          g = r.forwardRef(((e, n) => {
            const {
              scope: t,
              children: o,
              ...i
            } = e, c = r.useRef(null), l = (0, a.s)(n, c), u = d(b, t);
            return r.useEffect((() => (u.itemMap.set(c, {
              ref: c,
              ...i
            }), () => {
              u.itemMap.delete(c)
            }))), (0, s.jsx)(y, {
              [h]: "",
              ref: l,
              children: o
            })
          }));
        return g.displayName = b, [{
          Provider: u,
          Slot: m,
          ItemSlot: g
        }, function(n) {
          const t = d(e + "CollectionConsumer", n);
          return r.useCallback((() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${h}]`));
            return Array.from(t.itemMap.values()).sort(((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current)))
          }), [t.collectionRef, t.itemMap])
        }, c]
      }
      Map
    },
    51347: (e, n, t) => {
      t.d(n, {
        hO: () => c,
        sG: () => s
      });
      var r = t(71127),
        o = t(18429),
        a = t(21222),
        i = t(70954),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, n) => {
          const t = (0, a.createSlot)(`Primitive.${n}`),
            o = r.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, s = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(s, {
                ...a,
                ref: r
              })
            }));
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }), {});

      function c(e, n) {
        e && o.flushSync((() => e.dispatchEvent(n)))
      }
    },
    59219: (e, n, t) => {
      t.d(n, {
        jH: () => a
      });
      var r = t(71127),
        o = (t(70954), r.createContext(void 0));

      function a(e) {
        const n = r.useContext(o);
        return e || n || "ltr"
      }
    },
    79315: (e, n, t) => {
      t.d(n, {
        C: () => i
      });
      var r = t(71127),
        o = t(21423),
        a = t(92600),
        i = e => {
          const {
            present: n,
            children: t
          } = e, i = function(e) {
            const [n, t] = r.useState(), o = r.useRef(null), i = r.useRef(e), c = r.useRef("none"), l = e ? "mounted" : "unmounted", [d, u] = function(e, n) {
              return r.useReducer(((e, t) => n[e][t] ?? e), e)
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
            return r.useEffect((() => {
              const e = s(o.current);
              c.current = "mounted" === d ? e : "none"
            }), [d]), (0, a.N)((() => {
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
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: r.useCallback((e => {
                o.current = e ? getComputedStyle(e) : null, t(e)
              }), [])
            }
          }(n), c = "function" == typeof t ? t({
            present: i.isPresent
          }) : r.Children.only(t), l = (0, o.s)(i.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(c));
          return "function" == typeof t || i.isPresent ? r.cloneElement(c, {
            ref: l
          }) : null
        };

      function s(e) {
        return e?.animationName || "none"
      }
      i.displayName = "Presence"
    },
    91173: (e, n, t) => {
      t.d(n, {
        A: () => i,
        q: () => a
      });
      var r = t(71127),
        o = t(70954);

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
            } = n, l = t?.[e]?.[s] || i, d = r.useMemo((() => c), Object.values(c));
            return (0, o.jsx)(l.Provider, {
              value: d,
              children: a
            })
          };
          return c.displayName = n + "Provider", [c, function(t, o) {
            const c = o?.[e]?.[s] || i,
              l = r.useContext(c);
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
    92600: (e, n, t) => {
      t.d(n, {
        N: () => o
      });
      var r = t(71127),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    }
  }
]);