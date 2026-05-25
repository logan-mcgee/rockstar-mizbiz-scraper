try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "f2322a3d-a678-4939-a447-e47d0d66032e", e._sentryDebugIdIdentifier = "sentry-dbid-f2322a3d-a678-4939-a447-e47d0d66032e")
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
  [8629], {
    81010(e, o, n) {
      n.r(o), n.d(o, {
        Accordion: () => G,
        AccordionContent: () => re,
        AccordionHeader: () => Z,
        AccordionItem: () => W,
        AccordionTrigger: () => oe,
        Content: () => de,
        Header: () => se,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => le,
        createAccordionScope: () => H
      });
      var r = n(93082),
        t = n(31201),
        a = n(23028),
        i = n(50446),
        s = n(8316),
        l = n(1531),
        d = n(66704),
        c = n(86627),
        f = n(47306),
        u = n(96883),
        p = n(39793),
        b = "Collapsible",
        [g, h] = (0, t.A)(b),
        [m, y] = g(b),
        w = r.forwardRef((e, o) => {
          const {
            __scopeCollapsible: n,
            open: t,
            defaultOpen: a,
            disabled: i,
            onOpenChange: s,
            ...c
          } = e, [f, g] = (0, l.i)({
            prop: t,
            defaultProp: a ?? !1,
            onChange: s,
            caller: b
          });
          return (0, p.jsx)(m, {
            scope: n,
            disabled: i,
            contentId: (0, u.B)(),
            open: f,
            onOpenToggle: r.useCallback(() => g(e => !e), [g]),
            children: (0, p.jsx)(d.sG.div, {
              "data-state": R(f),
              "data-disabled": i ? "" : void 0,
              ...c,
              ref: o
            })
          })
        });
      w.displayName = b;
      var _ = "CollapsibleTrigger",
        x = r.forwardRef((e, o) => {
          const {
            __scopeCollapsible: n,
            ...r
          } = e, t = y(_, n);
          return (0, p.jsx)(d.sG.button, {
            type: "button",
            "aria-controls": t.contentId,
            "aria-expanded": t.open || !1,
            "data-state": R(t.open),
            "data-disabled": t.disabled ? "" : void 0,
            disabled: t.disabled,
            ...r,
            ref: o,
            onClick: (0, s.mK)(e.onClick, t.onOpenToggle)
          })
        });
      x.displayName = _;
      var v = "CollapsibleContent",
        C = r.forwardRef((e, o) => {
          const {
            forceMount: n,
            ...r
          } = e, t = y(v, e.__scopeCollapsible);
          return (0, p.jsx)(f.C, {
            present: n || t.open,
            children: ({
              present: e
            }) => (0, p.jsx)(A, {
              ...r,
              ref: o,
              present: e
            })
          })
        });
      C.displayName = v;
      var A = r.forwardRef((e, o) => {
        const {
          __scopeCollapsible: n,
          present: t,
          children: a,
          ...s
        } = e, l = y(v, n), [f, u] = r.useState(t), b = r.useRef(null), g = (0, i.s)(o, b), h = r.useRef(0), m = h.current, w = r.useRef(0), _ = w.current, x = l.open || f, C = r.useRef(x), A = r.useRef(void 0);
        return r.useEffect(() => {
          const e = requestAnimationFrame(() => C.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, c.N)(() => {
          const e = b.current;
          if (e) {
            A.current = A.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const o = e.getBoundingClientRect();
            h.current = o.height, w.current = o.width, C.current || (e.style.transitionDuration = A.current.transitionDuration, e.style.animationName = A.current.animationName), u(t)
          }
        }, [l.open, t]), (0, p.jsx)(d.sG.div, {
          "data-state": R(l.open),
          "data-disabled": l.disabled ? "" : void 0,
          id: l.contentId,
          hidden: !x,
          ...s,
          ref: g,
          style: {
            "--radix-collapsible-content-height": m ? `${m}px` : void 0,
            "--radix-collapsible-content-width": _ ? `${_}px` : void 0,
            ...e.style
          },
          children: x && a
        })
      });

      function R(e) {
        return e ? "open" : "closed"
      }
      var j = w,
        k = x,
        I = C,
        N = n(93689),
        M = "Accordion",
        T = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [D, E, O] = (0, a.N)(M),
        [S, H] = (0, t.A)(M, [O, h]),
        P = h(),
        G = r.forwardRef((e, o) => {
          const {
            type: n,
            ...r
          } = e, t = r, a = r;
          return (0, p.jsx)(D.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === n ? (0, p.jsx)(q, {
              ...a,
              ref: o
            }) : (0, p.jsx)($, {
              ...t,
              ref: o
            })
          })
        });
      G.displayName = M;
      var [L, K] = S(M), [V, B] = S(M, {
        collapsible: !1
      }), $ = r.forwardRef((e, o) => {
        const {
          value: n,
          defaultValue: t,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...s
        } = e, [d, c] = (0, l.i)({
          prop: n,
          defaultProp: t ?? "",
          onChange: a,
          caller: M
        });
        return (0, p.jsx)(L, {
          scope: e.__scopeAccordion,
          value: r.useMemo(() => d ? [d] : [], [d]),
          onItemOpen: c,
          onItemClose: r.useCallback(() => i && c(""), [i, c]),
          children: (0, p.jsx)(V, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(U, {
              ...s,
              ref: o
            })
          })
        })
      }), q = r.forwardRef((e, o) => {
        const {
          value: n,
          defaultValue: t,
          onValueChange: a = () => {},
          ...i
        } = e, [s, d] = (0, l.i)({
          prop: n,
          defaultProp: t ?? [],
          onChange: a,
          caller: M
        }), c = r.useCallback(e => d((o = []) => [...o, e]), [d]), f = r.useCallback(e => d((o = []) => o.filter(o => o !== e)), [d]);
        return (0, p.jsx)(L, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: c,
          onItemClose: f,
          children: (0, p.jsx)(V, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(U, {
              ...i,
              ref: o
            })
          })
        })
      }), [z, F] = S(M), U = r.forwardRef((e, o) => {
        const {
          __scopeAccordion: n,
          disabled: t,
          dir: a,
          orientation: l = "vertical",
          ...c
        } = e, f = r.useRef(null), u = (0, i.s)(f, o), b = E(n), g = "ltr" === (0, N.jH)(a), h = (0, s.mK)(e.onKeyDown, e => {
          if (!T.includes(e.key)) return;
          const o = e.target,
            n = b().filter(e => !e.ref.current?.disabled),
            r = n.findIndex(e => e.ref.current === o),
            t = n.length;
          if (-1 === r) return;
          e.preventDefault();
          let a = r;
          const i = t - 1,
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
              "horizontal" === l && (g ? s() : d());
              break;
            case "ArrowDown":
              "vertical" === l && s();
              break;
            case "ArrowLeft":
              "horizontal" === l && (g ? d() : s());
              break;
            case "ArrowUp":
              "vertical" === l && d()
          }
          const c = a % t;
          n[c].ref.current?.focus()
        });
        return (0, p.jsx)(z, {
          scope: n,
          disabled: t,
          direction: a,
          orientation: l,
          children: (0, p.jsx)(D.Slot, {
            scope: n,
            children: (0, p.jsx)(d.sG.div, {
              ...c,
              "data-orientation": l,
              ref: u,
              onKeyDown: t ? void 0 : h
            })
          })
        })
      }), Y = "AccordionItem", [J, Q] = S(Y), W = r.forwardRef((e, o) => {
        const {
          __scopeAccordion: n,
          value: r,
          ...t
        } = e, a = F(Y, n), i = K(Y, n), s = P(n), l = (0, u.B)(), d = r && i.value.includes(r) || !1, c = a.disabled || e.disabled;
        return (0, p.jsx)(J, {
          scope: n,
          open: d,
          disabled: c,
          triggerId: l,
          children: (0, p.jsx)(j, {
            "data-orientation": a.orientation,
            "data-state": te(d),
            ...s,
            ...t,
            ref: o,
            disabled: c,
            open: d,
            onOpenChange: e => {
              e ? i.onItemOpen(r) : i.onItemClose(r)
            }
          })
        })
      });
      W.displayName = Y;
      var X = "AccordionHeader",
        Z = r.forwardRef((e, o) => {
          const {
            __scopeAccordion: n,
            ...r
          } = e, t = F(M, n), a = Q(X, n);
          return (0, p.jsx)(d.sG.h3, {
            "data-orientation": t.orientation,
            "data-state": te(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...r,
            ref: o
          })
        });
      Z.displayName = X;
      var ee = "AccordionTrigger",
        oe = r.forwardRef((e, o) => {
          const {
            __scopeAccordion: n,
            ...r
          } = e, t = F(M, n), a = Q(ee, n), i = B(ee, n), s = P(n);
          return (0, p.jsx)(D.ItemSlot, {
            scope: n,
            children: (0, p.jsx)(k, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": t.orientation,
              id: a.triggerId,
              ...s,
              ...r,
              ref: o
            })
          })
        });
      oe.displayName = ee;
      var ne = "AccordionContent",
        re = r.forwardRef((e, o) => {
          const {
            __scopeAccordion: n,
            ...r
          } = e, t = F(M, n), a = Q(ne, n), i = P(n);
          return (0, p.jsx)(I, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": t.orientation,
            ...i,
            ...r,
            ref: o,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        });

      function te(e) {
        return e ? "open" : "closed"
      }
      re.displayName = ne;
      var ae = G,
        ie = W,
        se = Z,
        le = oe,
        de = re
    },
    23028(e, o, n) {
      n.d(o, {
        N: () => l
      });
      var r = n(93082),
        t = n(31201),
        a = n(50446),
        i = n(2976),
        s = n(39793);

      function l(e) {
        const o = e + "CollectionProvider",
          [n, l] = (0, t.A)(o),
          [d, c] = n(o, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          f = e => {
            const {
              scope: o,
              children: n
            } = e, t = r.useRef(null), a = r.useRef(new Map).current;
            return (0, s.jsx)(d, {
              scope: o,
              itemMap: a,
              collectionRef: t,
              children: n
            })
          };
        f.displayName = o;
        const u = e + "CollectionSlot",
          p = (0, i.TL)(u),
          b = r.forwardRef((e, o) => {
            const {
              scope: n,
              children: r
            } = e, t = c(u, n), i = (0, a.s)(o, t.collectionRef);
            return (0, s.jsx)(p, {
              ref: i,
              children: r
            })
          });
        b.displayName = u;
        const g = e + "CollectionItemSlot",
          h = "data-radix-collection-item",
          m = (0, i.TL)(g),
          y = r.forwardRef((e, o) => {
            const {
              scope: n,
              children: t,
              ...i
            } = e, l = r.useRef(null), d = (0, a.s)(o, l), f = c(g, n);
            return r.useEffect(() => (f.itemMap.set(l, {
              ref: l,
              ...i
            }), () => {
              f.itemMap.delete(l)
            })), (0, s.jsx)(m, {
              [h]: "",
              ref: d,
              children: t
            })
          });
        return y.displayName = g, [{
          Provider: f,
          Slot: b,
          ItemSlot: y
        }, function(o) {
          const n = c(e + "CollectionConsumer", o);
          return r.useCallback(() => {
            const e = n.collectionRef.current;
            if (!e) return [];
            const o = Array.from(e.querySelectorAll(`[${h}]`));
            return Array.from(n.itemMap.values()).sort((e, n) => o.indexOf(e.ref.current) - o.indexOf(n.ref.current))
          }, [n.collectionRef, n.itemMap])
        }, l]
      }
      Map
    },
    93689(e, o, n) {
      n.d(o, {
        jH: () => a
      });
      var r = n(93082),
        t = (n(39793), r.createContext(void 0));

      function a(e) {
        const o = r.useContext(t);
        return e || o || "ltr"
      }
    }
  }
]);