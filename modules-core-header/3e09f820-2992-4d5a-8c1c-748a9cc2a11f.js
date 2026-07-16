try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3e09f820-2992-4d5a-8c1c-748a9cc2a11f", e._sentryDebugIdIdentifier = "sentry-dbid-3e09f820-2992-4d5a-8c1c-748a9cc2a11f")
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
  [6325], {
    39467(e, n, t) {
      function o(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(o) {
          if (e?.(o), !1 === t || !o.defaultPrevented) return n?.(o)
        }
      }
      t.d(n, {
        mK: () => o
      }), "undefined" == typeof window || !window.document || window.document.createElement
    },
    98706(e, n, t) {
      t.r(n), t.d(n, {
        Accordion: () => L,
        AccordionContent: () => oe,
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
      var o = t(4637),
        r = t(54958),
        a = t(65324),
        i = t(64239),
        c = t(39467),
        s = t(92939),
        l = t(80082),
        d = t(10198),
        u = t(66624),
        f = t(82449),
        p = t(39793),
        m = "Collapsible",
        [b, y] = (0, r.A)(m),
        [h, g] = b(m),
        w = o.forwardRef((e, n) => {
          const {
            __scopeCollapsible: t,
            open: r,
            defaultOpen: a,
            disabled: i,
            onOpenChange: c,
            ...d
          } = e, [u, b] = (0, s.useControllableState)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: c,
            caller: m
          });
          return (0, p.jsx)(h, {
            scope: t,
            disabled: i,
            contentId: (0, f.useId)(),
            open: u,
            onOpenToggle: o.useCallback(() => b(e => !e), [b]),
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
        N = o.forwardRef((e, n) => {
          const {
            __scopeCollapsible: t,
            ...o
          } = e, r = g(v, t);
          return (0, p.jsx)(l.sG.button, {
            type: "button",
            "aria-controls": r.open ? r.contentId : void 0,
            "aria-expanded": r.open || !1,
            "data-state": A(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...o,
            ref: n,
            onClick: (0, c.mK)(e.onClick, r.onOpenToggle)
          })
        });
      N.displayName = v;
      var _ = "CollapsibleContent",
        C = o.forwardRef((e, n) => {
          const {
            forceMount: t,
            ...o
          } = e, r = g(_, e.__scopeCollapsible);
          return (0, p.jsx)(u.C, {
            present: t || r.open,
            children: ({
              present: e
            }) => (0, p.jsx)(x, {
              ...o,
              ref: n,
              present: e
            })
          })
        });
      C.displayName = _;
      var x = o.forwardRef((e, n) => {
        const {
          __scopeCollapsible: t,
          present: r,
          children: a,
          ...c
        } = e, s = g(_, t), [u, f] = o.useState(r), m = o.useRef(null), b = (0, i.s)(n, m), y = o.useRef(0), h = y.current, w = o.useRef(0), v = w.current, N = s.open || u, C = o.useRef(N), x = o.useRef(void 0);
        return o.useEffect(() => {
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
            y.current = n.height, w.current = n.width, C.current || (e.style.transitionDuration = x.current.transitionDuration, e.style.animationName = x.current.animationName), f(r)
          }
        }, [s.open, r]), (0, p.jsx)(l.sG.div, {
          "data-state": A(s.open),
          "data-disabled": s.disabled ? "" : void 0,
          id: s.contentId,
          hidden: !N,
          ...c,
          ref: b,
          style: {
            "--radix-collapsible-content-height": h ? `${h}px` : void 0,
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
        I = C,
        j = t(99136),
        O = "Accordion",
        k = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [T, S, E] = (0, a.N)(O),
        [D, P] = (0, r.A)(O, [E, y]),
        U = y(),
        L = o.forwardRef((e, n) => {
          const {
            type: t,
            ...o
          } = e, r = o, a = o;
          return (0, p.jsx)(T.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === t ? (0, p.jsx)(V, {
              ...a,
              ref: n
            }) : (0, p.jsx)(K, {
              ...r,
              ref: n
            })
          })
        });
      L.displayName = O;
      var [$, F] = D(O), [H, G] = D(O, {
        collapsible: !1
      }), K = o.forwardRef((e, n) => {
        const {
          value: t,
          defaultValue: r,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...c
        } = e, [l, d] = (0, s.useControllableState)({
          prop: t,
          defaultProp: r ?? "",
          onChange: a,
          caller: O
        });
        return (0, p.jsx)($, {
          scope: e.__scopeAccordion,
          value: o.useMemo(() => l ? [l] : [], [l]),
          onItemOpen: d,
          onItemClose: o.useCallback(() => i && d(""), [i, d]),
          children: (0, p.jsx)(H, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(z, {
              ...c,
              ref: n
            })
          })
        })
      }), V = o.forwardRef((e, n) => {
        const {
          value: t,
          defaultValue: r,
          onValueChange: a = () => {},
          ...i
        } = e, [c, l] = (0, s.useControllableState)({
          prop: t,
          defaultProp: r ?? [],
          onChange: a,
          caller: O
        }), d = o.useCallback(e => l((n = []) => [...n, e]), [l]), u = o.useCallback(e => l((n = []) => n.filter(n => n !== e)), [l]);
        return (0, p.jsx)($, {
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
      }), [W, q] = D(O), z = o.forwardRef((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: r,
          dir: a,
          orientation: s = "vertical",
          ...d
        } = e, u = o.useRef(null), f = (0, i.s)(u, n), m = S(t), b = "ltr" === (0, j.jH)(a), y = (0, c.mK)(e.onKeyDown, e => {
          if (!k.includes(e.key)) return;
          const n = e.target,
            t = m().filter(e => !e.ref.current?.disabled),
            o = t.findIndex(e => e.ref.current === n),
            r = t.length;
          if (-1 === o) return;
          e.preventDefault();
          let a = o;
          const i = r - 1,
            c = () => {
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
          const d = a % r;
          t[d].ref.current?.focus()
        });
        return (0, p.jsx)(W, {
          scope: t,
          disabled: r,
          direction: a,
          orientation: s,
          children: (0, p.jsx)(T.Slot, {
            scope: t,
            children: (0, p.jsx)(l.sG.div, {
              ...d,
              "data-orientation": s,
              ref: f,
              onKeyDown: r ? void 0 : y
            })
          })
        })
      }), B = "AccordionItem", [Y, J] = D(B), Q = o.forwardRef((e, n) => {
        const {
          __scopeAccordion: t,
          value: o,
          ...r
        } = e, a = q(B, t), i = F(B, t), c = U(t), s = (0, f.useId)(), l = o && i.value.includes(o) || !1, d = a.disabled || e.disabled;
        return (0, p.jsx)(Y, {
          scope: t,
          open: l,
          disabled: d,
          triggerId: s,
          children: (0, p.jsx)(R, {
            "data-orientation": a.orientation,
            "data-state": re(l),
            ...c,
            ...r,
            ref: n,
            disabled: d,
            open: l,
            onOpenChange: e => {
              e ? i.onItemOpen(o) : i.onItemClose(o)
            }
          })
        })
      });
      Q.displayName = B;
      var X = "AccordionHeader",
        Z = o.forwardRef((e, n) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, r = q(O, t), a = J(X, t);
          return (0, p.jsx)(l.sG.h3, {
            "data-orientation": r.orientation,
            "data-state": re(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: n
          })
        });
      Z.displayName = X;
      var ee = "AccordionTrigger",
        ne = o.forwardRef((e, n) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, r = q(O, t), a = J(ee, t), i = G(ee, t), c = U(t);
          return (0, p.jsx)(T.ItemSlot, {
            scope: t,
            children: (0, p.jsx)(M, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": r.orientation,
              id: a.triggerId,
              ...c,
              ...o,
              ref: n
            })
          })
        });
      ne.displayName = ee;
      var te = "AccordionContent",
        oe = o.forwardRef((e, n) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, r = q(O, t), a = J(te, t), i = U(t);
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
        });

      function re(e) {
        return e ? "open" : "closed"
      }
      oe.displayName = te;
      var ae = L,
        ie = Q,
        ce = Z,
        se = ne,
        le = oe
    },
    65324(e, n, t) {
      t.d(n, {
        N: () => s
      });
      var o = t(4637),
        r = t(54958),
        a = t(64239),
        i = t(50486),
        c = t(39793);

      function s(e) {
        const n = e + "CollectionProvider",
          [t, s] = (0, r.A)(n),
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
            return (0, c.jsx)(l, {
              scope: n,
              itemMap: a,
              collectionRef: r,
              children: t
            })
          };
        u.displayName = n;
        const f = e + "CollectionSlot",
          p = (0, i.createSlot)(f),
          m = o.forwardRef((e, n) => {
            const {
              scope: t,
              children: o
            } = e, r = d(f, t), i = (0, a.s)(n, r.collectionRef);
            return (0, c.jsx)(p, {
              ref: i,
              children: o
            })
          });
        m.displayName = f;
        const b = e + "CollectionItemSlot",
          y = "data-radix-collection-item",
          h = (0, i.createSlot)(b),
          g = o.forwardRef((e, n) => {
            const {
              scope: t,
              children: r,
              ...i
            } = e, s = o.useRef(null), l = (0, a.s)(n, s), u = d(b, t);
            return o.useEffect(() => (u.itemMap.set(s, {
              ref: s,
              ...i
            }), () => {
              u.itemMap.delete(s)
            })), (0, c.jsx)(h, {
              [y]: "",
              ref: l,
              children: r
            })
          });
        return g.displayName = b, [{
          Provider: u,
          Slot: m,
          ItemSlot: g
        }, function(n) {
          const t = d(e + "CollectionConsumer", n);
          return o.useCallback(() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${y}]`));
            return Array.from(t.itemMap.values()).sort((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current))
          }, [t.collectionRef, t.itemMap])
        }, s]
      }
      Map
    },
    64239(e, n, t) {
      t.d(n, {
        s: () => i,
        t: () => a
      });
      var o = t(4637);

      function r(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
        return n => {
          let t = !1;
          const o = e.map(e => {
            const o = r(e, n);
            return t || "function" != typeof o || (t = !0), o
          });
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
    },
    54958(e, n, t) {
      t.d(n, {
        A: () => a
      });
      var o = t(4637),
        r = t(39793);

      function a(e, n = []) {
        let t = [];
        const a = () => {
          const n = t.map(e => o.createContext(e));
          return function(t) {
            const r = t?.[e] || n;
            return o.useMemo(() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: r
              }
            }), [t, r])
          }
        };
        return a.scopeName = e, [function(n, a) {
          const i = o.createContext(a);
          i.displayName = n + "Context";
          const c = t.length;
          t = [...t, a];
          const s = n => {
            const {
              scope: t,
              children: a,
              ...s
            } = n, l = t?.[e]?.[c] || i, d = o.useMemo(() => s, Object.values(s));
            return (0, r.jsx)(l.Provider, {
              value: d,
              children: a
            })
          };
          return s.displayName = n + "Provider", [s, function(t, r) {
            const s = r?.[e]?.[c] || i,
              l = o.useContext(s);
            if (l) return l;
            if (void 0 !== a) return a;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, i(a, ...n)]
      }

      function i(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const r = t.reduce((n, {
              useScope: t,
              scopeName: o
            }) => ({
              ...n,
              ...t(e)[`__scope${o}`]
            }), {});
            return o.useMemo(() => ({
              [`__scope${n.scopeName}`]: r
            }), [r])
          }
        };
        return t.scopeName = n.scopeName, t
      }
    },
    99136(e, n, t) {
      t.d(n, {
        jH: () => a
      });
      var o = t(4637),
        r = (t(39793), o.createContext(void 0));

      function a(e) {
        const n = o.useContext(r);
        return e || n || "ltr"
      }
    },
    66624(e, n, t) {
      t.d(n, {
        C: () => a
      });
      var o = t(4637),
        r = t(10198),
        a = e => {
          const {
            present: n,
            children: t
          } = e, a = function(e) {
            const [n, t] = o.useState(), a = o.useRef(null), i = o.useRef(e), s = o.useRef("none"), l = e ? "mounted" : "unmounted", [d, u] = function(e, n) {
              return o.useReducer((e, t) => n[e][t] ?? e, e)
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
            return o.useEffect(() => {
              const e = c(a.current);
              s.current = "mounted" === d ? e : "none"
            }, [d]), (0, r.N)(() => {
              const n = a.current,
                t = i.current;
              if (t !== e) {
                const o = s.current,
                  r = c(n);
                u(e ? "MOUNT" : "none" === r || "none" === n?.display ? "UNMOUNT" : t && o !== r ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
              }
            }, [e, u]), (0, r.N)(() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  o = o => {
                    const r = c(a.current).includes(CSS.escape(o.animationName));
                    if (o.target === n && r && (u("ANIMATION_END"), !i.current)) {
                      const o = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = o)
                      })
                    }
                  },
                  r = e => {
                    e.target === n && (s.current = c(a.current))
                  };
                return n.addEventListener("animationstart", r), n.addEventListener("animationcancel", o), n.addEventListener("animationend", o), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", r), n.removeEventListener("animationcancel", o), n.removeEventListener("animationend", o)
                }
              }
              u("ANIMATION_END")
            }, [n, u]), {
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: o.useCallback(e => {
                a.current = e ? getComputedStyle(e) : null, t(e)
              }, [])
            }
          }(n), s = "function" == typeof t ? t({
            present: a.isPresent
          }) : o.Children.only(t), l = function(...e) {
            const n = o.useRef(e);
            return n.current = e, o.useCallback(e => {
              const t = n.current;
              let o = !1;
              const r = t.map(n => {
                const t = i(n, e);
                return o || "function" != typeof t || (o = !0), t
              });
              if (o) return () => {
                for (let e = 0; e < r.length; e++) {
                  const n = r[e];
                  "function" == typeof n ? n() : i(t[e], null)
                }
              }
            }, [])
          }(a.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(s));
          return "function" == typeof t || a.isPresent ? o.cloneElement(s, {
            ref: l
          }) : null
        };

      function i(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function c(e) {
        return e?.animationName || "none"
      }
      a.displayName = "Presence"
    },
    80082(e, n, t) {
      t.d(n, {
        hO: () => s,
        sG: () => c
      });
      var o = t(4637),
        r = t(84017),
        a = t(50486),
        i = t(39793),
        c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, a.createSlot)(`Primitive.${n}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...a
              } = e, c = r ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(c, {
                ...a,
                ref: o
              })
            });
          return r.displayName = `Primitive.${n}`, {
            ...e,
            [n]: r
          }
        }, {});

      function s(e, n) {
        e && r.flushSync(() => e.dispatchEvent(n))
      }
    },
    10198(e, n, t) {
      t.d(n, {
        N: () => r
      });
      var o = t(4637),
        r = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);