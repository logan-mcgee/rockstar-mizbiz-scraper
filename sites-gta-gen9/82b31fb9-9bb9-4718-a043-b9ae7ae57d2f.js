try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "82b31fb9-9bb9-4718-a043-b9ae7ae57d2f", e._sentryDebugIdIdentifier = "sentry-dbid-82b31fb9-9bb9-4718-a043-b9ae7ae57d2f")
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
  [8329], {
    53054: (e, n, o) => {
      var t;
      o.d(n, {
        i: () => s
      });
      var r = o(71127),
        a = o(63155),
        i = (t || (t = o.t(r, 2)))[" useInsertionEffect ".trim().toString()] || a.N;

      function s({
        prop: e,
        defaultProp: n,
        onChange: o = () => {},
        caller: t
      }) {
        const [a, s, c] = function({
          defaultProp: e,
          onChange: n
        }) {
          const [o, t] = r.useState(e), a = r.useRef(o), s = r.useRef(n);
          return i(() => {
            s.current = n
          }, [n]), r.useEffect(() => {
            a.current !== o && (s.current?.(o), a.current = o)
          }, [o, a]), [o, t, s]
        }({
          defaultProp: n,
          onChange: o
        }), d = void 0 !== e, l = d ? e : a; {
          const n = r.useRef(void 0 !== e);
          r.useEffect(() => {
            const e = n.current;
            if (e !== d) {
              const n = e ? "controlled" : "uncontrolled",
                o = d ? "controlled" : "uncontrolled";
              console.warn(`${t} is changing from ${n} to ${o}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            n.current = d
          }, [d, t])
        }
        const u = r.useCallback(n => {
          if (d) {
            const o = function(e) {
              return "function" == typeof e
            }(n) ? n(e) : n;
            o !== e && c.current?.(o)
          } else s(n)
        }, [d, e, s, c]);
        return [l, u]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    63155: (e, n, o) => {
      o.d(n, {
        N: () => r
      });
      var t = o(71127),
        r = globalThis?.document ? t.useLayoutEffect : () => {}
    },
    85426: (e, n, o) => {
      o.d(n, {
        A: () => i,
        q: () => a
      });
      var t = o(71127),
        r = o(42295);

      function a(e, n) {
        const o = t.createContext(n),
          a = e => {
            const {
              children: n,
              ...a
            } = e, i = t.useMemo(() => a, Object.values(a));
            return (0, r.jsx)(o.Provider, {
              value: i,
              children: n
            })
          };
        return a.displayName = e + "Provider", [a, function(r) {
          const a = t.useContext(o);
          if (a) return a;
          if (void 0 !== n) return n;
          throw new Error(`\`${r}\` must be used within \`${e}\``)
        }]
      }

      function i(e, n = []) {
        let o = [];
        const a = () => {
          const n = o.map(e => t.createContext(e));
          return function(o) {
            const r = o?.[e] || n;
            return t.useMemo(() => ({
              [`__scope${e}`]: {
                ...o,
                [e]: r
              }
            }), [o, r])
          }
        };
        return a.scopeName = e, [function(n, a) {
          const i = t.createContext(a),
            s = o.length;
          o = [...o, a];
          const c = n => {
            const {
              scope: o,
              children: a,
              ...c
            } = n, d = o?.[e]?.[s] || i, l = t.useMemo(() => c, Object.values(c));
            return (0, r.jsx)(d.Provider, {
              value: l,
              children: a
            })
          };
          return c.displayName = n + "Provider", [c, function(o, r) {
            const c = r?.[e]?.[s] || i,
              d = t.useContext(c);
            if (d) return d;
            if (void 0 !== a) return a;
            throw new Error(`\`${o}\` must be used within \`${n}\``)
          }]
        }, s(a, ...n)]
      }

      function s(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const o = () => {
          const o = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const r = o.reduce((n, {
              useScope: o,
              scopeName: t
            }) => ({
              ...n,
              ...o(e)[`__scope${t}`]
            }), {});
            return t.useMemo(() => ({
              [`__scope${n.scopeName}`]: r
            }), [r])
          }
        };
        return o.scopeName = n.scopeName, o
      }
    },
    86126: (e, n, o) => {
      var t;
      o.d(n, {
        B: () => c
      });
      var r = o(71127),
        a = o(63155),
        i = (t || (t = o.t(r, 2)))[" useId ".trim().toString()] || (() => {}),
        s = 0;

      function c(e) {
        const [n, o] = r.useState(i());
        return (0, a.N)(() => {
          e || o(e => e ?? String(s++))
        }, [e]), e || (n ? `radix-${n}` : "")
      }
    },
    90710: (e, n, o) => {
      o.r(n), o.d(n, {
        Accordion: () => H,
        AccordionContent: () => te,
        AccordionHeader: () => Z,
        AccordionItem: () => Q,
        AccordionTrigger: () => ne,
        Content: () => de,
        Header: () => se,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => ce,
        createAccordionScope: () => O
      });
      var t = o(71127),
        r = o(85426),
        a = o(20027),
        i = o(95362),
        s = o(94118),
        c = o(53054),
        d = o(78004),
        l = o(63155),
        u = o(53146),
        f = o(86126),
        p = o(42295),
        b = "Collapsible",
        [g, h] = (0, r.A)(b),
        [m, v] = g(b),
        y = t.forwardRef((e, n) => {
          const {
            __scopeCollapsible: o,
            open: r,
            defaultOpen: a,
            disabled: i,
            onOpenChange: s,
            ...l
          } = e, [u, g] = (0, c.i)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: s,
            caller: b
          });
          return (0, p.jsx)(m, {
            scope: o,
            disabled: i,
            contentId: (0, f.B)(),
            open: u,
            onOpenToggle: t.useCallback(() => g(e => !e), [g]),
            children: (0, p.jsx)(d.sG.div, {
              "data-state": j(u),
              "data-disabled": i ? "" : void 0,
              ...l,
              ref: n
            })
          })
        });
      y.displayName = b;
      var w = "CollapsibleTrigger",
        _ = t.forwardRef((e, n) => {
          const {
            __scopeCollapsible: o,
            ...t
          } = e, r = v(w, o);
          return (0, p.jsx)(d.sG.button, {
            type: "button",
            "aria-controls": r.contentId,
            "aria-expanded": r.open || !1,
            "data-state": j(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...t,
            ref: n,
            onClick: (0, s.mK)(e.onClick, r.onOpenToggle)
          })
        });
      _.displayName = w;
      var C = "CollapsibleContent",
        x = t.forwardRef((e, n) => {
          const {
            forceMount: o,
            ...t
          } = e, r = v(C, e.__scopeCollapsible);
          return (0, p.jsx)(u.C, {
            present: o || r.open,
            children: ({
              present: e
            }) => (0, p.jsx)(A, {
              ...t,
              ref: n,
              present: e
            })
          })
        });
      x.displayName = C;
      var A = t.forwardRef((e, n) => {
        const {
          __scopeCollapsible: o,
          present: r,
          children: a,
          ...s
        } = e, c = v(C, o), [u, f] = t.useState(r), b = t.useRef(null), g = (0, i.s)(n, b), h = t.useRef(0), m = h.current, y = t.useRef(0), w = y.current, _ = c.open || u, x = t.useRef(_), A = t.useRef(void 0);
        return t.useEffect(() => {
          const e = requestAnimationFrame(() => x.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, l.N)(() => {
          const e = b.current;
          if (e) {
            A.current = A.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const n = e.getBoundingClientRect();
            h.current = n.height, y.current = n.width, x.current || (e.style.transitionDuration = A.current.transitionDuration, e.style.animationName = A.current.animationName), f(r)
          }
        }, [c.open, r]), (0, p.jsx)(d.sG.div, {
          "data-state": j(c.open),
          "data-disabled": c.disabled ? "" : void 0,
          id: c.contentId,
          hidden: !_,
          ...s,
          ref: g,
          style: {
            "--radix-collapsible-content-height": m ? `${m}px` : void 0,
            "--radix-collapsible-content-width": w ? `${w}px` : void 0,
            ...e.style
          },
          children: _ && a
        })
      });

      function j(e) {
        return e ? "open" : "closed"
      }
      var N = y,
        R = _,
        k = x,
        I = o(77768),
        E = "Accordion",
        D = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [S, T, M] = (0, a.N)(E),
        [$, O] = (0, r.A)(E, [M, h]),
        P = h(),
        H = t.forwardRef((e, n) => {
          const {
            type: o,
            ...t
          } = e, r = t, a = t;
          return (0, p.jsx)(S.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === o ? (0, p.jsx)(q, {
              ...a,
              ref: n
            }) : (0, p.jsx)(V, {
              ...r,
              ref: n
            })
          })
        });
      H.displayName = E;
      var [G, B] = $(E), [K, L] = $(E, {
        collapsible: !1
      }), V = t.forwardRef((e, n) => {
        const {
          value: o,
          defaultValue: r,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...s
        } = e, [d, l] = (0, c.i)({
          prop: o,
          defaultProp: r ?? "",
          onChange: a,
          caller: E
        });
        return (0, p.jsx)(G, {
          scope: e.__scopeAccordion,
          value: t.useMemo(() => d ? [d] : [], [d]),
          onItemOpen: l,
          onItemClose: t.useCallback(() => i && l(""), [i, l]),
          children: (0, p.jsx)(K, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(U, {
              ...s,
              ref: n
            })
          })
        })
      }), q = t.forwardRef((e, n) => {
        const {
          value: o,
          defaultValue: r,
          onValueChange: a = () => {},
          ...i
        } = e, [s, d] = (0, c.i)({
          prop: o,
          defaultProp: r ?? [],
          onChange: a,
          caller: E
        }), l = t.useCallback(e => d((n = []) => [...n, e]), [d]), u = t.useCallback(e => d((n = []) => n.filter(n => n !== e)), [d]);
        return (0, p.jsx)(G, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: l,
          onItemClose: u,
          children: (0, p.jsx)(K, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(U, {
              ...i,
              ref: n
            })
          })
        })
      }), [z, F] = $(E), U = t.forwardRef((e, n) => {
        const {
          __scopeAccordion: o,
          disabled: r,
          dir: a,
          orientation: c = "vertical",
          ...l
        } = e, u = t.useRef(null), f = (0, i.s)(u, n), b = T(o), g = "ltr" === (0, I.jH)(a), h = (0, s.mK)(e.onKeyDown, e => {
          if (!D.includes(e.key)) return;
          const n = e.target,
            o = b().filter(e => !e.ref.current?.disabled),
            t = o.findIndex(e => e.ref.current === n),
            r = o.length;
          if (-1 === t) return;
          e.preventDefault();
          let a = t;
          const i = r - 1,
            s = () => {
              a = t + 1, a > i && (a = 0)
            },
            d = () => {
              a = t - 1, a < 0 && (a = i)
            };
          switch (e.key) {
            case "Home":
              a = 0;
              break;
            case "End":
              a = i;
              break;
            case "ArrowRight":
              "horizontal" === c && (g ? s() : d());
              break;
            case "ArrowDown":
              "vertical" === c && s();
              break;
            case "ArrowLeft":
              "horizontal" === c && (g ? d() : s());
              break;
            case "ArrowUp":
              "vertical" === c && d()
          }
          const l = a % r;
          o[l].ref.current?.focus()
        });
        return (0, p.jsx)(z, {
          scope: o,
          disabled: r,
          direction: a,
          orientation: c,
          children: (0, p.jsx)(S.Slot, {
            scope: o,
            children: (0, p.jsx)(d.sG.div, {
              ...l,
              "data-orientation": c,
              ref: f,
              onKeyDown: r ? void 0 : h
            })
          })
        })
      }), Y = "AccordionItem", [X, J] = $(Y), Q = t.forwardRef((e, n) => {
        const {
          __scopeAccordion: o,
          value: t,
          ...r
        } = e, a = F(Y, o), i = B(Y, o), s = P(o), c = (0, f.B)(), d = t && i.value.includes(t) || !1, l = a.disabled || e.disabled;
        return (0, p.jsx)(X, {
          scope: o,
          open: d,
          disabled: l,
          triggerId: c,
          children: (0, p.jsx)(N, {
            "data-orientation": a.orientation,
            "data-state": re(d),
            ...s,
            ...r,
            ref: n,
            disabled: l,
            open: d,
            onOpenChange: e => {
              e ? i.onItemOpen(t) : i.onItemClose(t)
            }
          })
        })
      });
      Q.displayName = Y;
      var W = "AccordionHeader",
        Z = t.forwardRef((e, n) => {
          const {
            __scopeAccordion: o,
            ...t
          } = e, r = F(E, o), a = J(W, o);
          return (0, p.jsx)(d.sG.h3, {
            "data-orientation": r.orientation,
            "data-state": re(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...t,
            ref: n
          })
        });
      Z.displayName = W;
      var ee = "AccordionTrigger",
        ne = t.forwardRef((e, n) => {
          const {
            __scopeAccordion: o,
            ...t
          } = e, r = F(E, o), a = J(ee, o), i = L(ee, o), s = P(o);
          return (0, p.jsx)(S.ItemSlot, {
            scope: o,
            children: (0, p.jsx)(R, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": r.orientation,
              id: a.triggerId,
              ...s,
              ...t,
              ref: n
            })
          })
        });
      ne.displayName = ee;
      var oe = "AccordionContent",
        te = t.forwardRef((e, n) => {
          const {
            __scopeAccordion: o,
            ...t
          } = e, r = F(E, o), a = J(oe, o), i = P(o);
          return (0, p.jsx)(k, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": r.orientation,
            ...i,
            ...t,
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
      te.displayName = oe;
      var ae = H,
        ie = Q,
        se = Z,
        ce = ne,
        de = te
    },
    95362: (e, n, o) => {
      o.d(n, {
        s: () => i,
        t: () => a
      });
      var t = o(71127);

      function r(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
        return n => {
          let o = !1;
          const t = e.map(e => {
            const t = r(e, n);
            return o || "function" != typeof t || (o = !0), t
          });
          if (o) return () => {
            for (let n = 0; n < t.length; n++) {
              const o = t[n];
              "function" == typeof o ? o() : r(e[n], null)
            }
          }
        }
      }

      function i(...e) {
        return t.useCallback(a(...e), e)
      }
    }
  }
]);