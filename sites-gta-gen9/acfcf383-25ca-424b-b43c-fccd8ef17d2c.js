try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "acfcf383-25ca-424b-b43c-fccd8ef17d2c", e._sentryDebugIdIdentifier = "sentry-dbid-acfcf383-25ca-424b-b43c-fccd8ef17d2c")
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
  [2174, 6325, 8706, 9793], {
    94931(e, n, o) {
      var t = o(93082),
        r = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, n, o) {
        var t, a = {},
          d = null,
          l = null;
        for (t in void 0 !== o && (d = "" + o), void 0 !== n.key && (d = "" + n.key), void 0 !== n.ref && (l = n.ref), n) i.call(n, t) && !c.hasOwnProperty(t) && (a[t] = n[t]);
        if (e && e.defaultProps)
          for (t in n = e.defaultProps) void 0 === a[t] && (a[t] = n[t]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: l,
          props: a,
          _owner: s.current
        }
      }
      n.Fragment = a, n.jsx = d, n.jsxs = d
    },
    39793(e, n, o) {
      e.exports = o(94931)
    },
    39467(e, n, o) {
      function t(e, n, {
        checkForDefaultPrevented: o = !0
      } = {}) {
        return function(t) {
          if (e?.(t), !1 === o || !t.defaultPrevented) return n?.(t)
        }
      }
      o.d(n, {
        mK: () => t
      }), "undefined" == typeof window || !window.document || window.document.createElement
    },
    98706(e, n, o) {
      o.r(n), o.d(n, {
        Accordion: () => L,
        AccordionContent: () => te,
        AccordionHeader: () => Z,
        AccordionItem: () => J,
        AccordionTrigger: () => ne,
        Content: () => de,
        Header: () => se,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => ce,
        createAccordionScope: () => $
      });
      var t = o(93082),
        r = o(54958),
        a = o(65324),
        i = o(64239),
        s = o(39467),
        c = o(17038),
        d = o(80082),
        l = o(10198),
        u = o(66624),
        f = o(94296),
        p = o(39793),
        b = "Collapsible",
        [m, g] = (0, r.A)(b),
        [h, y] = m(b),
        _ = t.forwardRef((e, n) => {
          const {
            __scopeCollapsible: o,
            open: r,
            defaultOpen: a,
            disabled: i,
            onOpenChange: s,
            ...l
          } = e, [u, m] = (0, c.i)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: s,
            caller: b
          });
          return (0, p.jsx)(h, {
            scope: o,
            disabled: i,
            contentId: (0, f.B)(),
            open: u,
            onOpenToggle: t.useCallback(() => m(e => !e), [m]),
            children: (0, p.jsx)(d.sG.div, {
              "data-state": N(u),
              "data-disabled": i ? "" : void 0,
              ...l,
              ref: n
            })
          })
        });
      _.displayName = b;
      var v = "CollapsibleTrigger",
        w = t.forwardRef((e, n) => {
          const {
            __scopeCollapsible: o,
            ...t
          } = e, r = y(v, o);
          return (0, p.jsx)(d.sG.button, {
            type: "button",
            "aria-controls": r.open ? r.contentId : void 0,
            "aria-expanded": r.open || !1,
            "data-state": N(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...t,
            ref: n,
            onClick: (0, s.mK)(e.onClick, r.onOpenToggle)
          })
        });
      w.displayName = v;
      var x = "CollapsibleContent",
        C = t.forwardRef((e, n) => {
          const {
            forceMount: o,
            ...t
          } = e, r = y(x, e.__scopeCollapsible);
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
          ...s
        } = e, c = y(x, o), [u, f] = t.useState(r), b = t.useRef(null), m = (0, i.s)(n, b), g = t.useRef(0), h = g.current, _ = t.useRef(0), v = _.current, w = c.open || u, C = t.useRef(w), A = t.useRef(void 0);
        return t.useEffect(() => {
          const e = requestAnimationFrame(() => C.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, l.N)(() => {
          const e = b.current;
          if (e) {
            A.current = A.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const n = e.getBoundingClientRect();
            g.current = n.height, _.current = n.width, C.current || (e.style.transitionDuration = A.current.transitionDuration, e.style.animationName = A.current.animationName), f(r)
          }
        }, [c.open, r]), (0, p.jsx)(d.sG.div, {
          "data-state": N(c.open),
          "data-disabled": c.disabled ? "" : void 0,
          id: c.contentId,
          hidden: !w,
          ...s,
          ref: m,
          style: {
            "--radix-collapsible-content-height": h ? `${h}px` : void 0,
            "--radix-collapsible-content-width": v ? `${v}px` : void 0,
            ...e.style
          },
          children: w && a
        })
      });

      function N(e) {
        return e ? "open" : "closed"
      }
      var R = _,
        j = w,
        k = C,
        I = o(99136),
        E = "Accordion",
        S = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [T, D, O] = (0, a.N)(E),
        [P, $] = (0, r.A)(E, [O, g]),
        M = g(),
        L = t.forwardRef((e, n) => {
          const {
            type: o,
            ...t
          } = e, r = t, a = t;
          return (0, p.jsx)(T.Provider, {
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
      var [H, G] = P(E), [B, F] = P(E, {
        collapsible: !1
      }), K = t.forwardRef((e, n) => {
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
        return (0, p.jsx)(H, {
          scope: e.__scopeAccordion,
          value: t.useMemo(() => d ? [d] : [], [d]),
          onItemOpen: l,
          onItemClose: t.useCallback(() => i && l(""), [i, l]),
          children: (0, p.jsx)(B, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(z, {
              ...s,
              ref: n
            })
          })
        })
      }), U = t.forwardRef((e, n) => {
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
        return (0, p.jsx)(H, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: l,
          onItemClose: u,
          children: (0, p.jsx)(B, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(z, {
              ...i,
              ref: n
            })
          })
        })
      }), [V, Y] = P(E), z = t.forwardRef((e, n) => {
        const {
          __scopeAccordion: o,
          disabled: r,
          dir: a,
          orientation: c = "vertical",
          ...l
        } = e, u = t.useRef(null), f = (0, i.s)(u, n), b = D(o), m = "ltr" === (0, I.jH)(a), g = (0, s.mK)(e.onKeyDown, e => {
          if (!S.includes(e.key)) return;
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
              "horizontal" === c && (m ? s() : d());
              break;
            case "ArrowDown":
              "vertical" === c && s();
              break;
            case "ArrowLeft":
              "horizontal" === c && (m ? d() : s());
              break;
            case "ArrowUp":
              "vertical" === c && d()
          }
          const l = a % r;
          o[l].ref.current?.focus()
        });
        return (0, p.jsx)(V, {
          scope: o,
          disabled: r,
          direction: a,
          orientation: c,
          children: (0, p.jsx)(T.Slot, {
            scope: o,
            children: (0, p.jsx)(d.sG.div, {
              ...l,
              "data-orientation": c,
              ref: f,
              onKeyDown: r ? void 0 : g
            })
          })
        })
      }), q = "AccordionItem", [W, X] = P(q), J = t.forwardRef((e, n) => {
        const {
          __scopeAccordion: o,
          value: t,
          ...r
        } = e, a = Y(q, o), i = G(q, o), s = M(o), c = (0, f.B)(), d = t && i.value.includes(t) || !1, l = a.disabled || e.disabled;
        return (0, p.jsx)(W, {
          scope: o,
          open: d,
          disabled: l,
          triggerId: c,
          children: (0, p.jsx)(R, {
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
      J.displayName = q;
      var Q = "AccordionHeader",
        Z = t.forwardRef((e, n) => {
          const {
            __scopeAccordion: o,
            ...t
          } = e, r = Y(E, o), a = X(Q, o);
          return (0, p.jsx)(d.sG.h3, {
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
          } = e, r = Y(E, o), a = X(ee, o), i = F(ee, o), s = M(o);
          return (0, p.jsx)(T.ItemSlot, {
            scope: o,
            children: (0, p.jsx)(j, {
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
          } = e, r = Y(E, o), a = X(oe, o), i = M(o);
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
      var ae = L,
        ie = J,
        se = Z,
        ce = ne,
        de = te
    },
    54958(e, n, o) {
      o.d(n, {
        A: () => a
      });
      var t = o(93082),
        r = o(39793);

      function a(e, n = []) {
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
          const i = t.createContext(a);
          i.displayName = n + "Context";
          const s = o.length;
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
    99136(e, n, o) {
      o.d(n, {
        jH: () => a
      });
      var t = o(93082),
        r = (o(39793), t.createContext(void 0));

      function a(e) {
        const n = t.useContext(r);
        return e || n || "ltr"
      }
    },
    94296(e, n, o) {
      let t;
      o.d(n, {
        B: () => c
      });
      var r = o(93082),
        a = o(10198),
        i = (t || (t = o.t(r, 2)))[" useId ".trim().toString()] || (() => {}),
        s = 0;

      function c(e) {
        const [n, o] = r.useState(i());
        return (0, a.N)(() => {
          e || o(e => e ?? String(s++))
        }, [e]), e || (n ? `radix-${n}` : "")
      }
    },
    80082(e, n, o) {
      o.d(n, {
        hO: () => c,
        sG: () => s
      });
      var t = o(93082),
        r = o(84017),
        a = o(17172),
        i = o(39793),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const o = (0, a.TL)(`Primitive.${n}`),
            r = t.forwardRef((e, t) => {
              const {
                asChild: r,
                ...a
              } = e, s = r ? o : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(s, {
                ...a,
                ref: t
              })
            });
          return r.displayName = `Primitive.${n}`, {
            ...e,
            [n]: r
          }
        }, {});

      function c(e, n) {
        e && r.flushSync(() => e.dispatchEvent(n))
      }
    },
    17038(e, n, o) {
      let t;
      o.d(n, {
        i: () => s
      });
      var r = o(93082),
        a = o(10198),
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
    10198(e, n, o) {
      o.d(n, {
        N: () => r
      });
      var t = o(93082),
        r = globalThis?.document ? t.useLayoutEffect : () => {}
    }
  }
]);