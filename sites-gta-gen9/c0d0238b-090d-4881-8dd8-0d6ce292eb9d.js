try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c0d0238b-090d-4881-8dd8-0d6ce292eb9d", e._sentryDebugIdIdentifier = "sentry-dbid-c0d0238b-090d-4881-8dd8-0d6ce292eb9d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1276], {
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
    91276(e, n, t) {
      t.r(n), t.d(n, {
        Accordion: () => L,
        AccordionContent: () => oe,
        AccordionHeader: () => Z,
        AccordionItem: () => J,
        AccordionTrigger: () => ne,
        Content: () => le,
        Header: () => ce,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => se,
        createAccordionScope: () => P
      });
      var o = t(93082),
        r = t(54958),
        a = t(97394),
        i = t(64239),
        c = t(39467),
        s = t(17038),
        l = t(13165),
        d = t(10198),
        u = t(24817),
        f = t(94296),
        p = t(39793),
        m = "Collapsible",
        [g, b] = (0, r.A)(m),
        [h, y] = g(m),
        w = o.forwardRef((e, n) => {
          const {
            __scopeCollapsible: t,
            open: r,
            defaultOpen: a,
            disabled: i,
            onOpenChange: c,
            ...d
          } = e, [u, g] = (0, s.i)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: c,
            caller: m
          });
          return (0, p.jsx)(h, {
            scope: t,
            disabled: i,
            contentId: (0, f.B)(),
            open: u,
            onOpenToggle: o.useCallback(() => g(e => !e), [g]),
            children: (0, p.jsx)(l.sG.div, {
              "data-state": x(u),
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
          } = e, r = y(v, t);
          return (0, p.jsx)(l.sG.button, {
            type: "button",
            "aria-controls": r.open ? r.contentId : void 0,
            "aria-expanded": r.open || !1,
            "data-state": x(r.open),
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
          } = e, r = y(_, e.__scopeCollapsible);
          return (0, p.jsx)(u.C, {
            present: t || r.open,
            children: ({
              present: e
            }) => (0, p.jsx)(A, {
              ...o,
              ref: n,
              present: e
            })
          })
        });
      C.displayName = _;
      var A = o.forwardRef((e, n) => {
        const {
          __scopeCollapsible: t,
          present: r,
          children: a,
          ...c
        } = e, s = y(_, t), [u, f] = o.useState(r), m = o.useRef(null), g = (0, i.s)(n, m), b = o.useRef(0), h = b.current, w = o.useRef(0), v = w.current, N = s.open || u, C = o.useRef(N), A = o.useRef(void 0);
        return o.useEffect(() => {
          const e = requestAnimationFrame(() => C.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, d.N)(() => {
          const e = m.current;
          if (e) {
            A.current = A.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const n = e.getBoundingClientRect();
            b.current = n.height, w.current = n.width, C.current || (e.style.transitionDuration = A.current.transitionDuration, e.style.animationName = A.current.animationName), f(r)
          }
        }, [s.open, r]), (0, p.jsx)(l.sG.div, {
          "data-state": x(s.open),
          "data-disabled": s.disabled ? "" : void 0,
          id: s.contentId,
          hidden: !N,
          ...c,
          ref: g,
          style: {
            "--radix-collapsible-content-height": h ? `${h}px` : void 0,
            "--radix-collapsible-content-width": v ? `${v}px` : void 0,
            ...e.style
          },
          children: N && a
        })
      });

      function x(e) {
        return e ? "open" : "closed"
      }
      var R = w,
        I = N,
        M = C,
        j = t(99136),
        T = "Accordion",
        k = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [E, O, S] = (0, a.N)(T),
        [D, P] = (0, r.A)(T, [S, b]),
        U = b(),
        L = o.forwardRef((e, n) => {
          const {
            type: t,
            ...o
          } = e, r = o, a = o;
          return (0, p.jsx)(E.Provider, {
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
      L.displayName = T;
      var [$, F] = D(T), [H, G] = D(T, {
        collapsible: !1
      }), K = o.forwardRef((e, n) => {
        const {
          value: t,
          defaultValue: r,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...c
        } = e, [l, d] = (0, s.i)({
          prop: t,
          defaultProp: r ?? "",
          onChange: a,
          caller: T
        });
        return (0, p.jsx)($, {
          scope: e.__scopeAccordion,
          value: o.useMemo(() => l ? [l] : [], [l]),
          onItemOpen: d,
          onItemClose: o.useCallback(() => i && d(""), [i, d]),
          children: (0, p.jsx)(H, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(q, {
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
        } = e, [c, l] = (0, s.i)({
          prop: t,
          defaultProp: r ?? [],
          onChange: a,
          caller: T
        }), d = o.useCallback(e => l((n = []) => [...n, e]), [l]), u = o.useCallback(e => l((n = []) => n.filter(n => n !== e)), [l]);
        return (0, p.jsx)($, {
          scope: e.__scopeAccordion,
          value: c,
          onItemOpen: d,
          onItemClose: u,
          children: (0, p.jsx)(H, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(q, {
              ...i,
              ref: n
            })
          })
        })
      }), [B, W] = D(T), q = o.forwardRef((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: r,
          dir: a,
          orientation: s = "vertical",
          ...d
        } = e, u = o.useRef(null), f = (0, i.s)(u, n), m = O(t), g = "ltr" === (0, j.jH)(a), b = (0, c.mK)(e.onKeyDown, e => {
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
              "horizontal" === s && (g ? c() : l());
              break;
            case "ArrowDown":
              "vertical" === s && c();
              break;
            case "ArrowLeft":
              "horizontal" === s && (g ? l() : c());
              break;
            case "ArrowUp":
              "vertical" === s && l()
          }
          const d = a % r;
          t[d].ref.current?.focus()
        });
        return (0, p.jsx)(B, {
          scope: t,
          disabled: r,
          direction: a,
          orientation: s,
          children: (0, p.jsx)(E.Slot, {
            scope: t,
            children: (0, p.jsx)(l.sG.div, {
              ...d,
              "data-orientation": s,
              ref: f,
              onKeyDown: r ? void 0 : b
            })
          })
        })
      }), z = "AccordionItem", [Y, X] = D(z), J = o.forwardRef((e, n) => {
        const {
          __scopeAccordion: t,
          value: o,
          ...r
        } = e, a = W(z, t), i = F(z, t), c = U(t), s = (0, f.B)(), l = o && i.value.includes(o) || !1, d = a.disabled || e.disabled;
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
      J.displayName = z;
      var Q = "AccordionHeader",
        Z = o.forwardRef((e, n) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, r = W(T, t), a = X(Q, t);
          return (0, p.jsx)(l.sG.h3, {
            "data-orientation": r.orientation,
            "data-state": re(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: n
          })
        });
      Z.displayName = Q;
      var ee = "AccordionTrigger",
        ne = o.forwardRef((e, n) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, r = W(T, t), a = X(ee, t), i = G(ee, t), c = U(t);
          return (0, p.jsx)(E.ItemSlot, {
            scope: t,
            children: (0, p.jsx)(I, {
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
          } = e, r = W(T, t), a = X(te, t), i = U(t);
          return (0, p.jsx)(M, {
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
        ie = J,
        ce = Z,
        se = ne,
        le = oe
    },
    97394(e, n, t) {
      t.d(n, {
        N: () => s
      });
      var o = t(93082),
        r = t(54958),
        a = t(64239),
        i = t(17172),
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
          p = (0, i.TL)(f),
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
        const g = e + "CollectionItemSlot",
          b = "data-radix-collection-item",
          h = (0, i.TL)(g),
          y = o.forwardRef((e, n) => {
            const {
              scope: t,
              children: r,
              ...i
            } = e, s = o.useRef(null), l = (0, a.s)(n, s), u = d(g, t);
            return o.useEffect(() => (u.itemMap.set(s, {
              ref: s,
              ...i
            }), () => {
              u.itemMap.delete(s)
            })), (0, c.jsx)(h, {
              [b]: "",
              ref: l,
              children: r
            })
          });
        return y.displayName = g, [{
          Provider: u,
          Slot: m,
          ItemSlot: y
        }, function(n) {
          const t = d(e + "CollectionConsumer", n);
          return o.useCallback(() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${b}]`));
            return Array.from(t.itemMap.values()).sort((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current))
          }, [t.collectionRef, t.itemMap])
        }, s]
      }
      Map
    },
    54958(e, n, t) {
      t.d(n, {
        A: () => a
      });
      var o = t(93082),
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
      var o = t(93082),
        r = (t(39793), o.createContext(void 0));

      function a(e) {
        const n = o.useContext(r);
        return e || n || "ltr"
      }
    },
    94296(e, n, t) {
      let o;
      t.d(n, {
        B: () => s
      });
      var r = t(93082),
        a = t(10198),
        i = (o || (o = t.t(r, 2)))[" useId ".trim().toString()] || (() => {}),
        c = 0;

      function s(e) {
        const [n, t] = r.useState(i());
        return (0, a.N)(() => {
          e || t(e => e ?? String(c++))
        }, [e]), e || (n ? `radix-${n}` : "")
      }
    },
    24817(e, n, t) {
      t.d(n, {
        C: () => a
      });
      var o = t(93082),
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
    17038(e, n, t) {
      let o;
      t.d(n, {
        i: () => c
      });
      var r = t(93082),
        a = t(10198),
        i = (o || (o = t.t(r, 2)))[" useInsertionEffect ".trim().toString()] || a.N;

      function c({
        prop: e,
        defaultProp: n,
        onChange: t = () => {},
        caller: o
      }) {
        const [a, c, s] = function({
          defaultProp: e,
          onChange: n
        }) {
          const [t, o] = r.useState(e), a = r.useRef(t), c = r.useRef(n);
          return i(() => {
            c.current = n
          }, [n]), r.useEffect(() => {
            a.current !== t && (c.current?.(t), a.current = t)
          }, [t, a]), [t, o, c]
        }({
          defaultProp: n,
          onChange: t
        }), l = void 0 !== e, d = l ? e : a; {
          const n = r.useRef(void 0 !== e);
          r.useEffect(() => {
            const e = n.current;
            if (e !== l) {
              const n = e ? "controlled" : "uncontrolled",
                t = l ? "controlled" : "uncontrolled";
              console.warn(`${o} is changing from ${n} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            n.current = l
          }, [l, o])
        }
        const u = r.useCallback(n => {
          if (l) {
            const t = function(e) {
              return "function" == typeof e
            }(n) ? n(e) : n;
            t !== e && s.current?.(t)
          } else c(n)
        }, [l, e, c, s]);
        return [d, u]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    10198(e, n, t) {
      t.d(n, {
        N: () => r
      });
      var o = t(93082),
        r = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);