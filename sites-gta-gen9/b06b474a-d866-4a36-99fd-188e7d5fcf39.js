try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b06b474a-d866-4a36-99fd-188e7d5fcf39", e._sentryDebugIdIdentifier = "sentry-dbid-b06b474a-d866-4a36-99fd-188e7d5fcf39")
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
  [1010, 8629, 9793], {
    94931(e, n, o) {
      var r = o(93082),
        t = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, n, o) {
        var r, a = {},
          d = null,
          c = null;
        for (r in void 0 !== o && (d = "" + o), void 0 !== n.key && (d = "" + n.key), void 0 !== n.ref && (c = n.ref), n) i.call(n, r) && !s.hasOwnProperty(r) && (a[r] = n[r]);
        if (e && e.defaultProps)
          for (r in n = e.defaultProps) void 0 === a[r] && (a[r] = n[r]);
        return {
          $$typeof: t,
          type: e,
          key: d,
          ref: c,
          props: a,
          _owner: l.current
        }
      }
      n.Fragment = a, n.jsx = d, n.jsxs = d
    },
    39793(e, n, o) {
      e.exports = o(94931)
    },
    81010(e, n, o) {
      o.r(n), o.d(n, {
        Accordion: () => H,
        AccordionContent: () => re,
        AccordionHeader: () => Z,
        AccordionItem: () => Q,
        AccordionTrigger: () => ne,
        Content: () => de,
        Header: () => le,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => se,
        createAccordionScope: () => P
      });
      var r = o(93082),
        t = o(31201),
        a = o(23028),
        i = o(50446),
        l = o(8316),
        s = o(1531),
        d = o(66704),
        c = o(86627),
        f = o(47306),
        u = o(96883),
        p = o(39793),
        b = "Collapsible",
        [y, g] = (0, t.A)(b),
        [m, _] = y(b),
        h = r.forwardRef((e, n) => {
          const {
            __scopeCollapsible: o,
            open: t,
            defaultOpen: a,
            disabled: i,
            onOpenChange: l,
            ...c
          } = e, [f, y] = (0, s.i)({
            prop: t,
            defaultProp: a ?? !1,
            onChange: l,
            caller: b
          });
          return (0, p.jsx)(m, {
            scope: o,
            disabled: i,
            contentId: (0, u.B)(),
            open: f,
            onOpenToggle: r.useCallback(() => y(e => !e), [y]),
            children: (0, p.jsx)(d.sG.div, {
              "data-state": R(f),
              "data-disabled": i ? "" : void 0,
              ...c,
              ref: n
            })
          })
        });
      h.displayName = b;
      var w = "CollapsibleTrigger",
        v = r.forwardRef((e, n) => {
          const {
            __scopeCollapsible: o,
            ...r
          } = e, t = _(w, o);
          return (0, p.jsx)(d.sG.button, {
            type: "button",
            "aria-controls": t.contentId,
            "aria-expanded": t.open || !1,
            "data-state": R(t.open),
            "data-disabled": t.disabled ? "" : void 0,
            disabled: t.disabled,
            ...r,
            ref: n,
            onClick: (0, l.mK)(e.onClick, t.onOpenToggle)
          })
        });
      v.displayName = w;
      var x = "CollapsibleContent",
        C = r.forwardRef((e, n) => {
          const {
            forceMount: o,
            ...r
          } = e, t = _(x, e.__scopeCollapsible);
          return (0, p.jsx)(f.C, {
            present: o || t.open,
            children: ({
              present: e
            }) => (0, p.jsx)(A, {
              ...r,
              ref: n,
              present: e
            })
          })
        });
      C.displayName = x;
      var A = r.forwardRef((e, n) => {
        const {
          __scopeCollapsible: o,
          present: t,
          children: a,
          ...l
        } = e, s = _(x, o), [f, u] = r.useState(t), b = r.useRef(null), y = (0, i.s)(n, b), g = r.useRef(0), m = g.current, h = r.useRef(0), w = h.current, v = s.open || f, C = r.useRef(v), A = r.useRef(void 0);
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
            const n = e.getBoundingClientRect();
            g.current = n.height, h.current = n.width, C.current || (e.style.transitionDuration = A.current.transitionDuration, e.style.animationName = A.current.animationName), u(t)
          }
        }, [s.open, t]), (0, p.jsx)(d.sG.div, {
          "data-state": R(s.open),
          "data-disabled": s.disabled ? "" : void 0,
          id: s.contentId,
          hidden: !v,
          ...l,
          ref: y,
          style: {
            "--radix-collapsible-content-height": m ? `${m}px` : void 0,
            "--radix-collapsible-content-width": w ? `${w}px` : void 0,
            ...e.style
          },
          children: v && a
        })
      });

      function R(e) {
        return e ? "open" : "closed"
      }
      var j = h,
        k = v,
        I = C,
        N = o(93689),
        M = "Accordion",
        O = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [T, E, D] = (0, a.N)(M),
        [S, P] = (0, t.A)(M, [D, g]),
        L = g(),
        H = r.forwardRef((e, n) => {
          const {
            type: o,
            ...r
          } = e, t = r, a = r;
          return (0, p.jsx)(T.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === o ? (0, p.jsx)(U, {
              ...a,
              ref: n
            }) : (0, p.jsx)(K, {
              ...t,
              ref: n
            })
          })
        });
      H.displayName = M;
      var [G, $] = S(M), [B, F] = S(M, {
        collapsible: !1
      }), K = r.forwardRef((e, n) => {
        const {
          value: o,
          defaultValue: t,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...l
        } = e, [d, c] = (0, s.i)({
          prop: o,
          defaultProp: t ?? "",
          onChange: a,
          caller: M
        });
        return (0, p.jsx)(G, {
          scope: e.__scopeAccordion,
          value: r.useMemo(() => d ? [d] : [], [d]),
          onItemOpen: c,
          onItemClose: r.useCallback(() => i && c(""), [i, c]),
          children: (0, p.jsx)(B, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(z, {
              ...l,
              ref: n
            })
          })
        })
      }), U = r.forwardRef((e, n) => {
        const {
          value: o,
          defaultValue: t,
          onValueChange: a = () => {},
          ...i
        } = e, [l, d] = (0, s.i)({
          prop: o,
          defaultProp: t ?? [],
          onChange: a,
          caller: M
        }), c = r.useCallback(e => d((n = []) => [...n, e]), [d]), f = r.useCallback(e => d((n = []) => n.filter(n => n !== e)), [d]);
        return (0, p.jsx)(G, {
          scope: e.__scopeAccordion,
          value: l,
          onItemOpen: c,
          onItemClose: f,
          children: (0, p.jsx)(B, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(z, {
              ...i,
              ref: n
            })
          })
        })
      }), [V, q] = S(M), z = r.forwardRef((e, n) => {
        const {
          __scopeAccordion: o,
          disabled: t,
          dir: a,
          orientation: s = "vertical",
          ...c
        } = e, f = r.useRef(null), u = (0, i.s)(f, n), b = E(o), y = "ltr" === (0, N.jH)(a), g = (0, l.mK)(e.onKeyDown, e => {
          if (!O.includes(e.key)) return;
          const n = e.target,
            o = b().filter(e => !e.ref.current?.disabled),
            r = o.findIndex(e => e.ref.current === n),
            t = o.length;
          if (-1 === r) return;
          e.preventDefault();
          let a = r;
          const i = t - 1,
            l = () => {
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
              "horizontal" === s && (y ? l() : d());
              break;
            case "ArrowDown":
              "vertical" === s && l();
              break;
            case "ArrowLeft":
              "horizontal" === s && (y ? d() : l());
              break;
            case "ArrowUp":
              "vertical" === s && d()
          }
          const c = a % t;
          o[c].ref.current?.focus()
        });
        return (0, p.jsx)(V, {
          scope: o,
          disabled: t,
          direction: a,
          orientation: s,
          children: (0, p.jsx)(T.Slot, {
            scope: o,
            children: (0, p.jsx)(d.sG.div, {
              ...c,
              "data-orientation": s,
              ref: u,
              onKeyDown: t ? void 0 : g
            })
          })
        })
      }), Y = "AccordionItem", [W, J] = S(Y), Q = r.forwardRef((e, n) => {
        const {
          __scopeAccordion: o,
          value: r,
          ...t
        } = e, a = q(Y, o), i = $(Y, o), l = L(o), s = (0, u.B)(), d = r && i.value.includes(r) || !1, c = a.disabled || e.disabled;
        return (0, p.jsx)(W, {
          scope: o,
          open: d,
          disabled: c,
          triggerId: s,
          children: (0, p.jsx)(j, {
            "data-orientation": a.orientation,
            "data-state": te(d),
            ...l,
            ...t,
            ref: n,
            disabled: c,
            open: d,
            onOpenChange: e => {
              e ? i.onItemOpen(r) : i.onItemClose(r)
            }
          })
        })
      });
      Q.displayName = Y;
      var X = "AccordionHeader",
        Z = r.forwardRef((e, n) => {
          const {
            __scopeAccordion: o,
            ...r
          } = e, t = q(M, o), a = J(X, o);
          return (0, p.jsx)(d.sG.h3, {
            "data-orientation": t.orientation,
            "data-state": te(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...r,
            ref: n
          })
        });
      Z.displayName = X;
      var ee = "AccordionTrigger",
        ne = r.forwardRef((e, n) => {
          const {
            __scopeAccordion: o,
            ...r
          } = e, t = q(M, o), a = J(ee, o), i = F(ee, o), l = L(o);
          return (0, p.jsx)(T.ItemSlot, {
            scope: o,
            children: (0, p.jsx)(k, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": t.orientation,
              id: a.triggerId,
              ...l,
              ...r,
              ref: n
            })
          })
        });
      ne.displayName = ee;
      var oe = "AccordionContent",
        re = r.forwardRef((e, n) => {
          const {
            __scopeAccordion: o,
            ...r
          } = e, t = q(M, o), a = J(oe, o), i = L(o);
          return (0, p.jsx)(I, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": t.orientation,
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

      function te(e) {
        return e ? "open" : "closed"
      }
      re.displayName = oe;
      var ae = H,
        ie = Q,
        le = Z,
        se = ne,
        de = re
    },
    23028(e, n, o) {
      o.d(n, {
        N: () => s
      });
      var r = o(93082),
        t = o(31201),
        a = o(50446),
        i = o(2976),
        l = o(39793);

      function s(e) {
        const n = e + "CollectionProvider",
          [o, s] = (0, t.A)(n),
          [d, c] = o(n, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          f = e => {
            const {
              scope: n,
              children: o
            } = e, t = r.useRef(null), a = r.useRef(new Map).current;
            return (0, l.jsx)(d, {
              scope: n,
              itemMap: a,
              collectionRef: t,
              children: o
            })
          };
        f.displayName = n;
        const u = e + "CollectionSlot",
          p = (0, i.TL)(u),
          b = r.forwardRef((e, n) => {
            const {
              scope: o,
              children: r
            } = e, t = c(u, o), i = (0, a.s)(n, t.collectionRef);
            return (0, l.jsx)(p, {
              ref: i,
              children: r
            })
          });
        b.displayName = u;
        const y = e + "CollectionItemSlot",
          g = "data-radix-collection-item",
          m = (0, i.TL)(y),
          _ = r.forwardRef((e, n) => {
            const {
              scope: o,
              children: t,
              ...i
            } = e, s = r.useRef(null), d = (0, a.s)(n, s), f = c(y, o);
            return r.useEffect(() => (f.itemMap.set(s, {
              ref: s,
              ...i
            }), () => {
              f.itemMap.delete(s)
            })), (0, l.jsx)(m, {
              [g]: "",
              ref: d,
              children: t
            })
          });
        return _.displayName = y, [{
          Provider: f,
          Slot: b,
          ItemSlot: _
        }, function(n) {
          const o = c(e + "CollectionConsumer", n);
          return r.useCallback(() => {
            const e = o.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${g}]`));
            return Array.from(o.itemMap.values()).sort((e, o) => n.indexOf(e.ref.current) - n.indexOf(o.ref.current))
          }, [o.collectionRef, o.itemMap])
        }, s]
      }
      Map
    },
    50446(e, n, o) {
      o.d(n, {
        s: () => i,
        t: () => a
      });
      var r = o(93082);

      function t(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
        return n => {
          let o = !1;
          const r = e.map(e => {
            const r = t(e, n);
            return o || "function" != typeof r || (o = !0), r
          });
          if (o) return () => {
            for (let n = 0; n < r.length; n++) {
              const o = r[n];
              "function" == typeof o ? o() : t(e[n], null)
            }
          }
        }
      }

      function i(...e) {
        return r.useCallback(a(...e), e)
      }
    },
    93689(e, n, o) {
      o.d(n, {
        jH: () => a
      });
      var r = o(93082),
        t = (o(39793), r.createContext(void 0));

      function a(e) {
        const n = r.useContext(t);
        return e || n || "ltr"
      }
    }
  }
]);