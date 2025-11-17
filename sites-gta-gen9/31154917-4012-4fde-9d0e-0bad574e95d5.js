try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "31154917-4012-4fde-9d0e-0bad574e95d5", e._sentryDebugIdIdentifier = "sentry-dbid-31154917-4012-4fde-9d0e-0bad574e95d5")
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
  [710], {
    39447: (e, n, t) => {
      t.d(n, {
        DX: () => s,
        Dc: () => d,
        TL: () => i,
        xV: () => u
      });
      var r = t(62229),
        o = t(95362),
        a = t(42295);

      function i(e) {
        const n = c(e),
          t = r.forwardRef((e, t) => {
            const {
              children: o,
              ...i
            } = e, s = r.Children.toArray(o), c = s.find(f);
            if (c) {
              const e = c.props.children,
                o = s.map(n => n === c ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n);
              return (0, a.jsx)(n, {
                ...i,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, a.jsx)(n, {
              ...i,
              ref: t,
              children: o
            })
          });
        return t.displayName = `${e}.Slot`, t
      }
      var s = i("Slot");

      function c(e) {
        const n = r.forwardRef((e, n) => {
          const {
            children: t,
            ...a
          } = e;
          if (r.isValidElement(t)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = n && "isReactWarning" in n && n.isReactWarning;
                return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              i = function(e, n) {
                const t = {
                  ...n
                };
                for (const r in n) {
                  const o = e[r],
                    a = n[r];
                  /^on[A-Z]/.test(r) ? o && a ? t[r] = (...e) => {
                    const n = a(...e);
                    return o(...e), n
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...a
                  } : "className" === r && (t[r] = [o, a].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(a, t.props);
            return t.type !== r.Fragment && (i.ref = n ? (0, o.t)(n, e) : e), r.cloneElement(t, i)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var l = Symbol("radix.slottable");

      function d(e) {
        const n = ({
          children: e
        }) => (0, a.jsx)(a.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = l, n
      }
      var u = d("Slottable");

      function f(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === l
      }
    },
    53054: (e, n, t) => {
      var r;
      t.d(n, {
        i: () => s
      });
      var o = t(62229),
        a = t(63155),
        i = (r || (r = t.t(o, 2)))[" useInsertionEffect ".trim().toString()] || a.N;

      function s({
        prop: e,
        defaultProp: n,
        onChange: t = () => {},
        caller: r
      }) {
        const [a, s, c] = function({
          defaultProp: e,
          onChange: n
        }) {
          const [t, r] = o.useState(e), a = o.useRef(t), s = o.useRef(n);
          return i(() => {
            s.current = n
          }, [n]), o.useEffect(() => {
            a.current !== t && (s.current?.(t), a.current = t)
          }, [t, a]), [t, r, s]
        }({
          defaultProp: n,
          onChange: t
        }), l = void 0 !== e, d = l ? e : a; {
          const n = o.useRef(void 0 !== e);
          o.useEffect(() => {
            const e = n.current;
            if (e !== l) {
              const n = e ? "controlled" : "uncontrolled",
                t = l ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${n} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            n.current = l
          }, [l, r])
        }
        const u = o.useCallback(n => {
          if (l) {
            const t = function(e) {
              return "function" == typeof e
            }(n) ? n(e) : n;
            t !== e && c.current?.(t)
          } else s(n)
        }, [l, e, s, c]);
        return [d, u]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    63155: (e, n, t) => {
      t.d(n, {
        N: () => o
      });
      var r = t(62229),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    78004: (e, n, t) => {
      t.d(n, {
        hO: () => c,
        sG: () => s
      });
      var r = t(62229),
        o = t(91082),
        a = t(39447),
        i = t(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, a.TL)(`Primitive.${n}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, s = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(s, {
                ...a,
                ref: r
              })
            });
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }, {});

      function c(e, n) {
        e && o.flushSync(() => e.dispatchEvent(n))
      }
    },
    85426: (e, n, t) => {
      t.d(n, {
        A: () => i,
        q: () => a
      });
      var r = t(62229),
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
            s = t.length;
          t = [...t, a];
          const c = n => {
            const {
              scope: t,
              children: a,
              ...c
            } = n, l = t?.[e]?.[s] || i, d = r.useMemo(() => c, Object.values(c));
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
    86126: (e, n, t) => {
      var r;
      t.d(n, {
        B: () => c
      });
      var o = t(62229),
        a = t(63155),
        i = (r || (r = t.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        s = 0;

      function c(e) {
        const [n, t] = o.useState(i());
        return (0, a.N)(() => {
          e || t(e => e ?? String(s++))
        }, [e]), e || (n ? `radix-${n}` : "")
      }
    },
    90710: (e, n, t) => {
      t.r(n), t.d(n, {
        Accordion: () => V,
        AccordionContent: () => re,
        AccordionHeader: () => Q,
        AccordionItem: () => Z,
        AccordionTrigger: () => ne,
        Content: () => le,
        Header: () => se,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => ce,
        createAccordionScope: () => P
      });
      var r = t(62229),
        o = t(85426),
        a = t(20027),
        i = t(95362),
        s = t(94118),
        c = t(53054),
        l = t(78004),
        d = t(63155),
        u = t(53146),
        f = t(86126),
        p = t(42295),
        b = "Collapsible",
        [h, g] = (0, o.A)(b),
        [m, y] = h(b),
        v = r.forwardRef((e, n) => {
          const {
            __scopeCollapsible: t,
            open: o,
            defaultOpen: a,
            disabled: i,
            onOpenChange: s,
            ...d
          } = e, [u, h] = (0, c.i)({
            prop: o,
            defaultProp: a ?? !1,
            onChange: s,
            caller: b
          });
          return (0, p.jsx)(m, {
            scope: t,
            disabled: i,
            contentId: (0, f.B)(),
            open: u,
            onOpenToggle: r.useCallback(() => h(e => !e), [h]),
            children: (0, p.jsx)(l.sG.div, {
              "data-state": j(u),
              "data-disabled": i ? "" : void 0,
              ...d,
              ref: n
            })
          })
        });
      v.displayName = b;
      var w = "CollapsibleTrigger",
        _ = r.forwardRef((e, n) => {
          const {
            __scopeCollapsible: t,
            ...r
          } = e, o = y(w, t);
          return (0, p.jsx)(l.sG.button, {
            type: "button",
            "aria-controls": o.contentId,
            "aria-expanded": o.open || !1,
            "data-state": j(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...r,
            ref: n,
            onClick: (0, s.mK)(e.onClick, o.onOpenToggle)
          })
        });
      _.displayName = w;
      var x = "CollapsibleContent",
        C = r.forwardRef((e, n) => {
          const {
            forceMount: t,
            ...r
          } = e, o = y(x, e.__scopeCollapsible);
          return (0, p.jsx)(u.C, {
            present: t || o.open,
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
          __scopeCollapsible: t,
          present: o,
          children: a,
          ...s
        } = e, c = y(x, t), [u, f] = r.useState(o), b = r.useRef(null), h = (0, i.s)(n, b), g = r.useRef(0), m = g.current, v = r.useRef(0), w = v.current, _ = c.open || u, C = r.useRef(_), A = r.useRef(void 0);
        return r.useEffect(() => {
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
            g.current = n.height, v.current = n.width, C.current || (e.style.transitionDuration = A.current.transitionDuration, e.style.animationName = A.current.animationName), f(o)
          }
        }, [c.open, o]), (0, p.jsx)(l.sG.div, {
          "data-state": j(c.open),
          "data-disabled": c.disabled ? "" : void 0,
          id: c.contentId,
          hidden: !_,
          ...s,
          ref: h,
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
      var N = v,
        R = _,
        I = C,
        k = t(77768),
        E = "Accordion",
        S = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [D, T, $] = (0, a.N)(E),
        [O, P] = (0, o.A)(E, [$, g]),
        M = g(),
        V = r.forwardRef((e, n) => {
          const {
            type: t,
            ...r
          } = e, o = r, a = r;
          return (0, p.jsx)(D.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === t ? (0, p.jsx)(K, {
              ...a,
              ref: n
            }) : (0, p.jsx)(F, {
              ...o,
              ref: n
            })
          })
        });
      V.displayName = E;
      var [G, H] = O(E), [L, B] = O(E, {
        collapsible: !1
      }), F = r.forwardRef((e, n) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...s
        } = e, [l, d] = (0, c.i)({
          prop: t,
          defaultProp: o ?? "",
          onChange: a,
          caller: E
        });
        return (0, p.jsx)(G, {
          scope: e.__scopeAccordion,
          value: r.useMemo(() => l ? [l] : [], [l]),
          onItemOpen: d,
          onItemClose: r.useCallback(() => i && d(""), [i, d]),
          children: (0, p.jsx)(L, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(z, {
              ...s,
              ref: n
            })
          })
        })
      }), K = r.forwardRef((e, n) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: a = () => {},
          ...i
        } = e, [s, l] = (0, c.i)({
          prop: t,
          defaultProp: o ?? [],
          onChange: a,
          caller: E
        }), d = r.useCallback(e => l((n = []) => [...n, e]), [l]), u = r.useCallback(e => l((n = []) => n.filter(n => n !== e)), [l]);
        return (0, p.jsx)(G, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: d,
          onItemClose: u,
          children: (0, p.jsx)(L, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(z, {
              ...i,
              ref: n
            })
          })
        })
      }), [W, q] = O(E), z = r.forwardRef((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: o,
          dir: a,
          orientation: c = "vertical",
          ...d
        } = e, u = r.useRef(null), f = (0, i.s)(u, n), b = T(t), h = "ltr" === (0, k.jH)(a), g = (0, s.mK)(e.onKeyDown, e => {
          if (!S.includes(e.key)) return;
          const n = e.target,
            t = b().filter(e => !e.ref.current?.disabled),
            r = t.findIndex(e => e.ref.current === n),
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
              "horizontal" === c && (h ? s() : l());
              break;
            case "ArrowDown":
              "vertical" === c && s();
              break;
            case "ArrowLeft":
              "horizontal" === c && (h ? l() : s());
              break;
            case "ArrowUp":
              "vertical" === c && l()
          }
          const d = a % o;
          t[d].ref.current?.focus()
        });
        return (0, p.jsx)(W, {
          scope: t,
          disabled: o,
          direction: a,
          orientation: c,
          children: (0, p.jsx)(D.Slot, {
            scope: t,
            children: (0, p.jsx)(l.sG.div, {
              ...d,
              "data-orientation": c,
              ref: f,
              onKeyDown: o ? void 0 : g
            })
          })
        })
      }), U = "AccordionItem", [X, Y] = O(U), Z = r.forwardRef((e, n) => {
        const {
          __scopeAccordion: t,
          value: r,
          ...o
        } = e, a = q(U, t), i = H(U, t), s = M(t), c = (0, f.B)(), l = r && i.value.includes(r) || !1, d = a.disabled || e.disabled;
        return (0, p.jsx)(X, {
          scope: t,
          open: l,
          disabled: d,
          triggerId: c,
          children: (0, p.jsx)(N, {
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
      });
      Z.displayName = U;
      var J = "AccordionHeader",
        Q = r.forwardRef((e, n) => {
          const {
            __scopeAccordion: t,
            ...r
          } = e, o = q(E, t), a = Y(J, t);
          return (0, p.jsx)(l.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": oe(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...r,
            ref: n
          })
        });
      Q.displayName = J;
      var ee = "AccordionTrigger",
        ne = r.forwardRef((e, n) => {
          const {
            __scopeAccordion: t,
            ...r
          } = e, o = q(E, t), a = Y(ee, t), i = B(ee, t), s = M(t);
          return (0, p.jsx)(D.ItemSlot, {
            scope: t,
            children: (0, p.jsx)(R, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": o.orientation,
              id: a.triggerId,
              ...s,
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
          } = e, o = q(E, t), a = Y(te, t), i = M(t);
          return (0, p.jsx)(I, {
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
      var ae = V,
        ie = Z,
        se = Q,
        ce = ne,
        le = re
    },
    95362: (e, n, t) => {
      t.d(n, {
        s: () => i,
        t: () => a
      });
      var r = t(62229);

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