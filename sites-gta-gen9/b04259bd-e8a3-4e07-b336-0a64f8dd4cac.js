try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b04259bd-e8a3-4e07-b336-0a64f8dd4cac", e._sentryDebugIdIdentifier = "sentry-dbid-b04259bd-e8a3-4e07-b336-0a64f8dd4cac")
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
  [2174, 4555, 7421, 9793, 9802], {
    94931(e, n, t) {
      var o = t(93082),
        r = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, n, t) {
        var o, a = {},
          c = null,
          d = null;
        for (o in void 0 !== t && (c = "" + t), void 0 !== n.key && (c = "" + n.key), void 0 !== n.ref && (d = n.ref), n) i.call(n, o) && !s.hasOwnProperty(o) && (a[o] = n[o]);
        if (e && e.defaultProps)
          for (o in n = e.defaultProps) void 0 === a[o] && (a[o] = n[o]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: d,
          props: a,
          _owner: l.current
        }
      }
      n.Fragment = a, n.jsx = c, n.jsxs = c
    },
    39793(e, n, t) {
      e.exports = t(94931)
    },
    2458(e, n, t) {
      function o(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(o) {
          if (e?.(o), !1 === t || !o || !o.defaultPrevented) return n?.(o)
        }
      }
      t.d(n, {
        mK: () => o
      }), "undefined" == typeof window || !window.document || window.document.createElement
    },
    69802(e, n, t) {
      t.r(n), t.d(n, {
        Accordion: () => L,
        AccordionContent: () => oe,
        AccordionHeader: () => Q,
        AccordionItem: () => Z,
        AccordionTrigger: () => ne,
        Content: () => ce,
        Header: () => le,
        Item: () => ie,
        Root: () => ae,
        Trigger: () => se,
        createAccordionScope: () => P
      });
      var o = t(93082),
        r = t(1913),
        a = t(85920),
        i = t(64239),
        l = t(2458),
        s = t(17038),
        c = t(31270),
        d = t(10198),
        u = t(7470),
        f = t(94296),
        p = t(39793),
        b = "Collapsible",
        [h, m] = (0, r.A)(b),
        [y, g] = h(b),
        v = o.forwardRef((e, n) => {
          const {
            __scopeCollapsible: t,
            open: r,
            defaultOpen: a,
            disabled: i,
            onOpenChange: l,
            ...d
          } = e, [u, h] = (0, s.i)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: l,
            caller: b
          });
          return (0, p.jsx)(y, {
            scope: t,
            disabled: i,
            contentId: (0, f.B)(),
            open: u,
            onOpenToggle: o.useCallback(() => h(e => !e), [h]),
            children: (0, p.jsx)(c.sG.div, {
              "data-state": A(u),
              "data-disabled": i ? "" : void 0,
              ...d,
              ref: n
            })
          })
        });
      v.displayName = b;
      var _ = "CollapsibleTrigger",
        w = o.forwardRef((e, n) => {
          const {
            __scopeCollapsible: t,
            ...o
          } = e, r = g(_, t);
          return (0, p.jsx)(c.sG.button, {
            type: "button",
            "aria-controls": r.open ? r.contentId : void 0,
            "aria-expanded": r.open || !1,
            "data-state": A(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            disabled: r.disabled,
            ...o,
            ref: n,
            onClick: (0, l.mK)(e.onClick, r.onOpenToggle)
          })
        });
      w.displayName = _;
      var x = "CollapsibleContent",
        C = o.forwardRef((e, n) => {
          const {
            forceMount: t,
            ...o
          } = e, r = g(x, e.__scopeCollapsible);
          return (0, p.jsx)(u.C, {
            present: t || r.open,
            children: ({
              present: e
            }) => (0, p.jsx)(R, {
              ...o,
              ref: n,
              present: e
            })
          })
        });
      C.displayName = x;
      var R = o.forwardRef((e, n) => {
        const {
          __scopeCollapsible: t,
          present: r,
          children: a,
          ...l
        } = e, s = g(x, t), [u, f] = o.useState(r), b = o.useRef(null), h = (0, i.s)(n, b), m = o.useRef(0), y = m.current, v = o.useRef(0), _ = v.current, w = s.open || u, C = o.useRef(w), R = o.useRef(void 0);
        return o.useEffect(() => {
          const e = requestAnimationFrame(() => C.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, d.N)(() => {
          const e = b.current;
          if (e) {
            R.current = R.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const n = e.getBoundingClientRect();
            m.current = n.height, v.current = n.width, C.current || (e.style.transitionDuration = R.current.transitionDuration, e.style.animationName = R.current.animationName), f(r)
          }
        }, [s.open, r]), (0, p.jsx)(c.sG.div, {
          "data-state": A(s.open),
          "data-disabled": s.disabled ? "" : void 0,
          id: s.contentId,
          hidden: !w,
          ...l,
          ref: h,
          style: {
            "--radix-collapsible-content-height": y ? `${y}px` : void 0,
            "--radix-collapsible-content-width": _ ? `${_}px` : void 0,
            ...e.style
          },
          children: w && a
        })
      });

      function A(e) {
        return e ? "open" : "closed"
      }
      var j = v,
        N = w,
        E = C,
        S = t(99136),
        k = "Accordion",
        I = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [D, O, $] = (0, a.N)(k),
        [T, P] = (0, r.A)(k, [$, m]),
        M = m(),
        L = o.forwardRef((e, n) => {
          const {
            type: t,
            ...o
          } = e, r = o, a = o;
          return (0, p.jsx)(D.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === t ? (0, p.jsx)(K, {
              ...a,
              ref: n
            }) : (0, p.jsx)(G, {
              ...r,
              ref: n
            })
          })
        });
      L.displayName = k;
      var [V, H] = T(k), [B, F] = T(k, {
        collapsible: !1
      }), G = o.forwardRef((e, n) => {
        const {
          value: t,
          defaultValue: r,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...l
        } = e, [c, d] = (0, s.i)({
          prop: t,
          defaultProp: r ?? "",
          onChange: a,
          caller: k
        });
        return (0, p.jsx)(V, {
          scope: e.__scopeAccordion,
          value: o.useMemo(() => c ? [c] : [], [c]),
          onItemOpen: d,
          onItemClose: o.useCallback(() => i && d(""), [i, d]),
          children: (0, p.jsx)(B, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(z, {
              ...l,
              ref: n
            })
          })
        })
      }), K = o.forwardRef((e, n) => {
        const {
          value: t,
          defaultValue: r,
          onValueChange: a = () => {},
          ...i
        } = e, [l, c] = (0, s.i)({
          prop: t,
          defaultProp: r ?? [],
          onChange: a,
          caller: k
        }), d = o.useCallback(e => c((n = []) => [...n, e]), [c]), u = o.useCallback(e => c((n = []) => n.filter(n => n !== e)), [c]);
        return (0, p.jsx)(V, {
          scope: e.__scopeAccordion,
          value: l,
          onItemOpen: d,
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
      }), [W, U] = T(k), z = o.forwardRef((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: r,
          dir: a,
          orientation: s = "vertical",
          ...d
        } = e, u = o.useRef(null), f = (0, i.s)(u, n), b = O(t), h = "ltr" === (0, S.jH)(a), m = (0, l.mK)(e.onKeyDown, e => {
          if (!I.includes(e.key)) return;
          const n = e.target,
            t = b().filter(e => !e.ref.current?.disabled),
            o = t.findIndex(e => e.ref.current === n),
            r = t.length;
          if (-1 === o) return;
          e.preventDefault();
          let a = o;
          const i = r - 1,
            l = () => {
              a = o + 1, a > i && (a = 0)
            },
            c = () => {
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
              "horizontal" === s && (h ? l() : c());
              break;
            case "ArrowDown":
              "vertical" === s && l();
              break;
            case "ArrowLeft":
              "horizontal" === s && (h ? c() : l());
              break;
            case "ArrowUp":
              "vertical" === s && c()
          }
          const d = a % r;
          t[d].ref.current?.focus()
        });
        return (0, p.jsx)(W, {
          scope: t,
          disabled: r,
          direction: a,
          orientation: s,
          children: (0, p.jsx)(D.Slot, {
            scope: t,
            children: (0, p.jsx)(c.sG.div, {
              ...d,
              "data-orientation": s,
              ref: f,
              onKeyDown: r ? void 0 : m
            })
          })
        })
      }), Y = "AccordionItem", [X, q] = T(Y), Z = o.forwardRef((e, n) => {
        const {
          __scopeAccordion: t,
          value: o,
          ...r
        } = e, a = U(Y, t), i = H(Y, t), l = M(t), s = (0, f.B)(), c = o && i.value.includes(o) || !1, d = a.disabled || e.disabled;
        return (0, p.jsx)(X, {
          scope: t,
          open: c,
          disabled: d,
          triggerId: s,
          children: (0, p.jsx)(j, {
            "data-orientation": a.orientation,
            "data-state": re(c),
            ...l,
            ...r,
            ref: n,
            disabled: d,
            open: c,
            onOpenChange: e => {
              e ? i.onItemOpen(o) : i.onItemClose(o)
            }
          })
        })
      });
      Z.displayName = Y;
      var J = "AccordionHeader",
        Q = o.forwardRef((e, n) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, r = U(k, t), a = q(J, t);
          return (0, p.jsx)(c.sG.h3, {
            "data-orientation": r.orientation,
            "data-state": re(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: n
          })
        });
      Q.displayName = J;
      var ee = "AccordionTrigger",
        ne = o.forwardRef((e, n) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, r = U(k, t), a = q(ee, t), i = F(ee, t), l = M(t);
          return (0, p.jsx)(D.ItemSlot, {
            scope: t,
            children: (0, p.jsx)(N, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": r.orientation,
              id: a.triggerId,
              ...l,
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
          } = e, r = U(k, t), a = q(te, t), i = M(t);
          return (0, p.jsx)(E, {
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
        ie = Z,
        le = Q,
        se = ne,
        ce = oe
    },
    64239(e, n, t) {
      t.d(n, {
        s: () => a
      });
      var o = t(93082);

      function r(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
        return o.useCallback(function(...e) {
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
        }(...e), e)
      }
    },
    1913(e, n, t) {
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
          const l = t.length;
          t = [...t, a];
          const s = n => {
            const {
              scope: t,
              children: a,
              ...s
            } = n, c = t?.[e]?.[l] || i, d = o.useMemo(() => s, Object.values(s));
            return (0, r.jsx)(c.Provider, {
              value: d,
              children: a
            })
          };
          return s.displayName = n + "Provider", [s, function(t, r, s = {}) {
            const {
              optional: c = !1
            } = s, d = r?.[e]?.[l] || i, u = o.useContext(d);
            if (u) return u;
            if (void 0 !== a) return a;
            if (!c) throw new Error(`\`${t}\` must be used within \`${n}\``)
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
        l = 0;

      function s(e) {
        const [n, t] = r.useState(i());
        return (0, a.N)(() => {
          e || t(e => e ?? String(l++))
        }, [e]), e || (n ? `radix-${n}` : "")
      }
    },
    31270(e, n, t) {
      t.d(n, {
        hO: () => s,
        sG: () => l
      });
      var o = t(93082),
        r = t(84017),
        a = t(17172),
        i = t(39793),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, a.TL)(`Primitive.${n}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...a
              } = e, l = r ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(l, {
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
    17172(e, n, t) {
      let o;
      t.d(n, {
        DX: () => l,
        Dc: () => c,
        TL: () => i,
        xV: () => d
      });
      var r = t(93082),
        a = t(64239);

      function i(e) {
        const n = r.forwardRef((n, t) => {
          let {
            children: o,
            ...i
          } = n, l = null, c = !1;
          const d = [];
          p(o) && "function" == typeof m && (o = m(o._payload)), r.Children.forEach(o, e => {
            if (n = e, r.isValidElement(n) && "function" == typeof n.type && "__radixId" in n.type && n.type.__radixId === s) {
              c = !0;
              const n = e;
              let t = "child" in n.props ? n.props.child : n.props.children;
              p(t) && "function" == typeof m && (t = m(t._payload)), l = u(n, t), d.push(l?.props?.children)
            } else d.push(e);
            var n
          }), l ? l = r.cloneElement(l, void 0, d) : !c && 1 === r.Children.count(o) && r.isValidElement(o) && (l = o);
          const f = l ? function(e) {
              let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                t = n && "isReactWarning" in n && n.isReactWarning;
              return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
            }(l) : void 0,
            y = (0, a.s)(t, f);
          if (!l) {
            if (o || 0 === o) throw new Error(c ? h(e) : b(e));
            return o
          }
          const g = function(e, n) {
            const t = {
              ...n
            };
            for (const o in n) {
              const r = e[o],
                a = n[o];
              /^on[A-Z]/.test(o) ? r && a ? t[o] = (...e) => {
                const n = a(...e);
                return r(...e), n
              } : r && (t[o] = r) : "style" === o ? t[o] = {
                ...r,
                ...a
              } : "className" === o && (t[o] = [r, a].filter(Boolean).join(" "))
            }
            return {
              ...e,
              ...t
            }
          }(i, l.props ?? {});
          return l.type !== r.Fragment && (g.ref = t ? y : f), r.cloneElement(l, g)
        });
        return n.displayName = `${e}.Slot`, n
      }
      var l = i("Slot"),
        s = Symbol.for("radix.slottable");

      function c(e) {
        const n = e => "child" in e ? e.children(e.child) : e.children;
        return n.displayName = `${e}.Slottable`, n.__radixId = s, n
      }
      var d = c("Slottable"),
        u = (e, n) => {
          if ("child" in e.props) {
            const n = e.props.child;
            return r.isValidElement(n) ? r.cloneElement(n, void 0, e.props.children(n.props.children)) : null
          }
          return r.isValidElement(n) ? n : null
        },
        f = Symbol.for("react.lazy");

      function p(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === f && "_payload" in e && "object" == typeof(n = e._payload) && null !== n && "then" in n;
        var n
      }
      var b = e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        h = e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        m = (o || (o = t.t(r, 2)))[" use ".trim().toString()]
    },
    17038(e, n, t) {
      let o;
      t.d(n, {
        i: () => l
      });
      var r = t(93082),
        a = t(10198),
        i = (o || (o = t.t(r, 2)))[" useInsertionEffect ".trim().toString()] || a.N;

      function l({
        prop: e,
        defaultProp: n,
        onChange: t = () => {},
        caller: o
      }) {
        const [a, l, s] = function({
          defaultProp: e,
          onChange: n
        }) {
          const [t, o] = r.useState(e), a = r.useRef(t), l = r.useRef(n);
          return i(() => {
            l.current = n
          }, [n]), r.useEffect(() => {
            a.current !== t && (l.current?.(t), a.current = t)
          }, [t, a]), [t, o, l]
        }({
          defaultProp: n,
          onChange: t
        }), c = void 0 !== e, d = c ? e : a; {
          const n = r.useRef(void 0 !== e);
          r.useEffect(() => {
            const e = n.current;
            if (e !== c) {
              const n = e ? "controlled" : "uncontrolled",
                t = c ? "controlled" : "uncontrolled";
              console.warn(`${o} is changing from ${n} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            n.current = c
          }, [c, o])
        }
        const u = r.useCallback(n => {
          if (c) {
            const t = function(e) {
              return "function" == typeof e
            }(n) ? n(e) : n;
            t !== e && s.current?.(t)
          } else l(n)
        }, [c, e, l, s]);
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