try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a36279b4-5e38-4e2f-bbcb-1317d90eb415", e._sentryDebugIdIdentifier = "sentry-dbid-a36279b4-5e38-4e2f-bbcb-1317d90eb415")
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
  [710, 8329], {
    42295: (e, n, o) => {
      e.exports = o(69245)
    },
    53054: (e, n, o) => {
      var t;
      o.d(n, {
        i: () => i
      });
      var r = o(62229),
        a = o(63155),
        s = (t || (t = o.t(r, 2)))[" useInsertionEffect ".trim().toString()] || a.N;

      function i({
        prop: e,
        defaultProp: n,
        onChange: o = () => {},
        caller: t
      }) {
        const [a, i, c] = function({
          defaultProp: e,
          onChange: n
        }) {
          const [o, t] = r.useState(e), a = r.useRef(o), i = r.useRef(n);
          return s(() => {
            i.current = n
          }, [n]), r.useEffect(() => {
            a.current !== o && (i.current?.(o), a.current = o)
          }, [o, a]), [o, t, i]
        }({
          defaultProp: n,
          onChange: o
        }), l = void 0 !== e, d = l ? e : a; {
          const n = r.useRef(void 0 !== e);
          r.useEffect(() => {
            const e = n.current;
            if (e !== l) {
              const n = e ? "controlled" : "uncontrolled",
                o = l ? "controlled" : "uncontrolled";
              console.warn(`${t} is changing from ${n} to ${o}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            n.current = l
          }, [l, t])
        }
        const u = r.useCallback(n => {
          if (l) {
            const o = function(e) {
              return "function" == typeof e
            }(n) ? n(e) : n;
            o !== e && c.current?.(o)
          } else i(n)
        }, [l, e, i, c]);
        return [d, u]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    63155: (e, n, o) => {
      o.d(n, {
        N: () => r
      });
      var t = o(62229),
        r = globalThis?.document ? t.useLayoutEffect : () => {}
    },
    69245: (e, n, o) => {
      var t = o(62229),
        r = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, n, o) {
        var t, a = {},
          l = null,
          d = null;
        for (t in void 0 !== o && (l = "" + o), void 0 !== n.key && (l = "" + n.key), void 0 !== n.ref && (d = n.ref), n) s.call(n, t) && !c.hasOwnProperty(t) && (a[t] = n[t]);
        if (e && e.defaultProps)
          for (t in n = e.defaultProps) void 0 === a[t] && (a[t] = n[t]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: d,
          props: a,
          _owner: i.current
        }
      }
      n.Fragment = a, n.jsx = l, n.jsxs = l
    },
    85426: (e, n, o) => {
      o.d(n, {
        A: () => s,
        q: () => a
      });
      var t = o(62229),
        r = o(42295);

      function a(e, n) {
        const o = t.createContext(n),
          a = e => {
            const {
              children: n,
              ...a
            } = e, s = t.useMemo(() => a, Object.values(a));
            return (0, r.jsx)(o.Provider, {
              value: s,
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

      function s(e, n = []) {
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
          const s = t.createContext(a),
            i = o.length;
          o = [...o, a];
          const c = n => {
            const {
              scope: o,
              children: a,
              ...c
            } = n, l = o?.[e]?.[i] || s, d = t.useMemo(() => c, Object.values(c));
            return (0, r.jsx)(l.Provider, {
              value: d,
              children: a
            })
          };
          return c.displayName = n + "Provider", [c, function(o, r) {
            const c = r?.[e]?.[i] || s,
              l = t.useContext(c);
            if (l) return l;
            if (void 0 !== a) return a;
            throw new Error(`\`${o}\` must be used within \`${n}\``)
          }]
        }, i(a, ...n)]
      }

      function i(...e) {
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
      var r = o(62229),
        a = o(63155),
        s = (t || (t = o.t(r, 2)))[" useId ".trim().toString()] || (() => {}),
        i = 0;

      function c(e) {
        const [n, o] = r.useState(s());
        return (0, a.N)(() => {
          e || o(e => e ?? String(i++))
        }, [e]), e || (n ? `radix-${n}` : "")
      }
    },
    90710: (e, n, o) => {
      o.r(n), o.d(n, {
        Accordion: () => L,
        AccordionContent: () => te,
        AccordionHeader: () => Z,
        AccordionItem: () => J,
        AccordionTrigger: () => ne,
        Content: () => le,
        Header: () => ie,
        Item: () => se,
        Root: () => ae,
        Trigger: () => ce,
        createAccordionScope: () => $
      });
      var t = o(62229),
        r = o(85426),
        a = o(20027),
        s = o(95362),
        i = o(94118),
        c = o(53054),
        l = o(78004),
        d = o(63155),
        u = o(53146),
        f = o(86126),
        p = o(42295),
        b = "Collapsible",
        [g, m] = (0, r.A)(b),
        [h, _] = g(b),
        y = t.forwardRef((e, n) => {
          const {
            __scopeCollapsible: o,
            open: r,
            defaultOpen: a,
            disabled: s,
            onOpenChange: i,
            ...d
          } = e, [u, g] = (0, c.i)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: i,
            caller: b
          });
          return (0, p.jsx)(h, {
            scope: o,
            disabled: s,
            contentId: (0, f.B)(),
            open: u,
            onOpenToggle: t.useCallback(() => g(e => !e), [g]),
            children: (0, p.jsx)(l.sG.div, {
              "data-state": j(u),
              "data-disabled": s ? "" : void 0,
              ...d,
              ref: n
            })
          })
        });
      y.displayName = b;
      var v = "CollapsibleTrigger",
        w = t.forwardRef((e, n) => {
          const {
            __scopeCollapsible: o,
            ...t
          } = e, r = _(v, o);
          return (0, p.jsx)(l.sG.button, {
            type: "button",
            "aria-controls": r.contentId,
            "aria-expanded": r.open || !1,
            "data-state": j(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...t,
            ref: n,
            onClick: (0, i.mK)(e.onClick, r.onOpenToggle)
          })
        });
      w.displayName = v;
      var x = "CollapsibleContent",
        C = t.forwardRef((e, n) => {
          const {
            forceMount: o,
            ...t
          } = e, r = _(x, e.__scopeCollapsible);
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
      C.displayName = x;
      var A = t.forwardRef((e, n) => {
        const {
          __scopeCollapsible: o,
          present: r,
          children: a,
          ...i
        } = e, c = _(x, o), [u, f] = t.useState(r), b = t.useRef(null), g = (0, s.s)(n, b), m = t.useRef(0), h = m.current, y = t.useRef(0), v = y.current, w = c.open || u, C = t.useRef(w), A = t.useRef(void 0);
        return t.useEffect(() => {
          const e = requestAnimationFrame(() => C.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, d.N)(() => {
          const e = b.current;
          if (e) {
            A.current = A.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const n = e.getBoundingClientRect();
            m.current = n.height, y.current = n.width, C.current || (e.style.transitionDuration = A.current.transitionDuration, e.style.animationName = A.current.animationName), f(r)
          }
        }, [c.open, r]), (0, p.jsx)(l.sG.div, {
          "data-state": j(c.open),
          "data-disabled": c.disabled ? "" : void 0,
          id: c.contentId,
          hidden: !w,
          ...i,
          ref: g,
          style: {
            "--radix-collapsible-content-height": h ? `${h}px` : void 0,
            "--radix-collapsible-content-width": v ? `${v}px` : void 0,
            ...e.style
          },
          children: w && a
        })
      });

      function j(e) {
        return e ? "open" : "closed"
      }
      var N = y,
        R = w,
        k = C,
        I = o(77768),
        E = "Accordion",
        S = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [O, T, D] = (0, a.N)(E),
        [P, $] = (0, r.A)(E, [D, m]),
        M = m(),
        L = t.forwardRef((e, n) => {
          const {
            type: o,
            ...t
          } = e, r = t, a = t;
          return (0, p.jsx)(O.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === o ? (0, p.jsx)(U, {
              ...a,
              ref: n
            }) : (0, p.jsx)(K, {
              ...r,
              ref: n
            })
          })
        });
      L.displayName = E;
      var [H, B] = P(E), [G, F] = P(E, {
        collapsible: !1
      }), K = t.forwardRef((e, n) => {
        const {
          value: o,
          defaultValue: r,
          onValueChange: a = () => {},
          collapsible: s = !1,
          ...i
        } = e, [l, d] = (0, c.i)({
          prop: o,
          defaultProp: r ?? "",
          onChange: a,
          caller: E
        });
        return (0, p.jsx)(H, {
          scope: e.__scopeAccordion,
          value: t.useMemo(() => l ? [l] : [], [l]),
          onItemOpen: d,
          onItemClose: t.useCallback(() => s && d(""), [s, d]),
          children: (0, p.jsx)(G, {
            scope: e.__scopeAccordion,
            collapsible: s,
            children: (0, p.jsx)(q, {
              ...i,
              ref: n
            })
          })
        })
      }), U = t.forwardRef((e, n) => {
        const {
          value: o,
          defaultValue: r,
          onValueChange: a = () => {},
          ...s
        } = e, [i, l] = (0, c.i)({
          prop: o,
          defaultProp: r ?? [],
          onChange: a,
          caller: E
        }), d = t.useCallback(e => l((n = []) => [...n, e]), [l]), u = t.useCallback(e => l((n = []) => n.filter(n => n !== e)), [l]);
        return (0, p.jsx)(H, {
          scope: e.__scopeAccordion,
          value: i,
          onItemOpen: d,
          onItemClose: u,
          children: (0, p.jsx)(G, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(q, {
              ...s,
              ref: n
            })
          })
        })
      }), [V, Y] = P(E), q = t.forwardRef((e, n) => {
        const {
          __scopeAccordion: o,
          disabled: r,
          dir: a,
          orientation: c = "vertical",
          ...d
        } = e, u = t.useRef(null), f = (0, s.s)(u, n), b = T(o), g = "ltr" === (0, I.jH)(a), m = (0, i.mK)(e.onKeyDown, e => {
          if (!S.includes(e.key)) return;
          const n = e.target,
            o = b().filter(e => !e.ref.current?.disabled),
            t = o.findIndex(e => e.ref.current === n),
            r = o.length;
          if (-1 === t) return;
          e.preventDefault();
          let a = t;
          const s = r - 1,
            i = () => {
              a = t + 1, a > s && (a = 0)
            },
            l = () => {
              a = t - 1, a < 0 && (a = s)
            };
          switch (e.key) {
            case "Home":
              a = 0;
              break;
            case "End":
              a = s;
              break;
            case "ArrowRight":
              "horizontal" === c && (g ? i() : l());
              break;
            case "ArrowDown":
              "vertical" === c && i();
              break;
            case "ArrowLeft":
              "horizontal" === c && (g ? l() : i());
              break;
            case "ArrowUp":
              "vertical" === c && l()
          }
          const d = a % r;
          o[d].ref.current?.focus()
        });
        return (0, p.jsx)(V, {
          scope: o,
          disabled: r,
          direction: a,
          orientation: c,
          children: (0, p.jsx)(O.Slot, {
            scope: o,
            children: (0, p.jsx)(l.sG.div, {
              ...d,
              "data-orientation": c,
              ref: f,
              onKeyDown: r ? void 0 : m
            })
          })
        })
      }), z = "AccordionItem", [W, X] = P(z), J = t.forwardRef((e, n) => {
        const {
          __scopeAccordion: o,
          value: t,
          ...r
        } = e, a = Y(z, o), s = B(z, o), i = M(o), c = (0, f.B)(), l = t && s.value.includes(t) || !1, d = a.disabled || e.disabled;
        return (0, p.jsx)(W, {
          scope: o,
          open: l,
          disabled: d,
          triggerId: c,
          children: (0, p.jsx)(N, {
            "data-orientation": a.orientation,
            "data-state": re(l),
            ...i,
            ...r,
            ref: n,
            disabled: d,
            open: l,
            onOpenChange: e => {
              e ? s.onItemOpen(t) : s.onItemClose(t)
            }
          })
        })
      });
      J.displayName = z;
      var Q = "AccordionHeader",
        Z = t.forwardRef((e, n) => {
          const {
            __scopeAccordion: o,
            ...t
          } = e, r = Y(E, o), a = X(Q, o);
          return (0, p.jsx)(l.sG.h3, {
            "data-orientation": r.orientation,
            "data-state": re(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...t,
            ref: n
          })
        });
      Z.displayName = Q;
      var ee = "AccordionTrigger",
        ne = t.forwardRef((e, n) => {
          const {
            __scopeAccordion: o,
            ...t
          } = e, r = Y(E, o), a = X(ee, o), s = F(ee, o), i = M(o);
          return (0, p.jsx)(O.ItemSlot, {
            scope: o,
            children: (0, p.jsx)(R, {
              "aria-disabled": a.open && !s.collapsible || void 0,
              "data-orientation": r.orientation,
              id: a.triggerId,
              ...i,
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
          } = e, r = Y(E, o), a = X(oe, o), s = M(o);
          return (0, p.jsx)(k, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": r.orientation,
            ...s,
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
      var ae = L,
        se = J,
        ie = Z,
        ce = ne,
        le = te
    },
    95362: (e, n, o) => {
      o.d(n, {
        s: () => s,
        t: () => a
      });
      var t = o(62229);

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

      function s(...e) {
        return t.useCallback(a(...e), e)
      }
    }
  }
]);