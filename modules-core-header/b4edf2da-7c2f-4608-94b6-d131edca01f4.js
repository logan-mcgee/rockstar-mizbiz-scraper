try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b4edf2da-7c2f-4608-94b6-d131edca01f4", e._sentryDebugIdIdentifier = "sentry-dbid-b4edf2da-7c2f-4608-94b6-d131edca01f4")
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
  [2174, 4555, 6325, 8706, 9793], {
    94931(e, n, t) {
      var r = t(4637),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, n, t) {
        var r, a = {},
          l = null,
          d = null;
        for (r in void 0 !== t && (l = "" + t), void 0 !== n.key && (l = "" + n.key), void 0 !== n.ref && (d = n.ref), n) i.call(n, r) && !c.hasOwnProperty(r) && (a[r] = n[r]);
        if (e && e.defaultProps)
          for (r in n = e.defaultProps) void 0 === a[r] && (a[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: d,
          props: a,
          _owner: s.current
        }
      }
      n.Fragment = a, n.jsx = l, n.jsxs = l
    },
    39793(e, n, t) {
      e.exports = t(94931)
    },
    39467(e, n, t) {
      function r(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }
      t.d(n, {
        mK: () => r
      }), "undefined" == typeof window || !window.document || window.document.createElement
    },
    98706(e, n, t) {
      t.r(n), t.d(n, {
        Accordion: () => L,
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
      var r = t(4637),
        o = t(54958),
        a = t(65324),
        i = t(64239),
        s = t(39467),
        c = t(92939),
        l = t(80082),
        d = t(10198),
        u = t(66624),
        f = t(82449),
        p = t(39793),
        m = "Collapsible",
        [b, y] = (0, o.A)(m),
        [h, g] = b(m),
        w = r.forwardRef((e, n) => {
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
          return (0, p.jsx)(h, {
            scope: t,
            disabled: i,
            contentId: (0, f.useId)(),
            open: u,
            onOpenToggle: r.useCallback(() => b(e => !e), [b]),
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
        _ = r.forwardRef((e, n) => {
          const {
            __scopeCollapsible: t,
            ...r
          } = e, o = g(v, t);
          return (0, p.jsx)(l.sG.button, {
            type: "button",
            "aria-controls": o.open ? o.contentId : void 0,
            "aria-expanded": o.open || !1,
            "data-state": A(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...r,
            ref: n,
            onClick: (0, s.mK)(e.onClick, o.onOpenToggle)
          })
        });
      _.displayName = v;
      var N = "CollapsibleContent",
        C = r.forwardRef((e, n) => {
          const {
            forceMount: t,
            ...r
          } = e, o = g(N, e.__scopeCollapsible);
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
        });
      C.displayName = N;
      var x = r.forwardRef((e, n) => {
        const {
          __scopeCollapsible: t,
          present: o,
          children: a,
          ...s
        } = e, c = g(N, t), [u, f] = r.useState(o), m = r.useRef(null), b = (0, i.s)(n, m), y = r.useRef(0), h = y.current, w = r.useRef(0), v = w.current, _ = c.open || u, C = r.useRef(_), x = r.useRef(void 0);
        return r.useEffect(() => {
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
            y.current = n.height, w.current = n.width, C.current || (e.style.transitionDuration = x.current.transitionDuration, e.style.animationName = x.current.animationName), f(o)
          }
        }, [c.open, o]), (0, p.jsx)(l.sG.div, {
          "data-state": A(c.open),
          "data-disabled": c.disabled ? "" : void 0,
          id: c.contentId,
          hidden: !_,
          ...s,
          ref: b,
          style: {
            "--radix-collapsible-content-height": h ? `${h}px` : void 0,
            "--radix-collapsible-content-width": v ? `${v}px` : void 0,
            ...e.style
          },
          children: _ && a
        })
      });

      function A(e) {
        return e ? "open" : "closed"
      }
      var R = w,
        I = _,
        j = C,
        O = t(99136),
        M = "Accordion",
        k = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [S, E, T] = (0, a.N)(M),
        [D, P] = (0, o.A)(M, [T, y]),
        U = y(),
        L = r.forwardRef((e, n) => {
          const {
            type: t,
            ...r
          } = e, o = r, a = r;
          return (0, p.jsx)(S.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === t ? (0, p.jsx)(V, {
              ...a,
              ref: n
            }) : (0, p.jsx)(K, {
              ...o,
              ref: n
            })
          })
        });
      L.displayName = M;
      var [$, F] = D(M), [H, G] = D(M, {
        collapsible: !1
      }), K = r.forwardRef((e, n) => {
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
          caller: M
        });
        return (0, p.jsx)($, {
          scope: e.__scopeAccordion,
          value: r.useMemo(() => l ? [l] : [], [l]),
          onItemOpen: d,
          onItemClose: r.useCallback(() => i && d(""), [i, d]),
          children: (0, p.jsx)(H, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, p.jsx)(z, {
              ...s,
              ref: n
            })
          })
        })
      }), V = r.forwardRef((e, n) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: a = () => {},
          ...i
        } = e, [s, l] = (0, c.useControllableState)({
          prop: t,
          defaultProp: o ?? [],
          onChange: a,
          caller: M
        }), d = r.useCallback(e => l((n = []) => [...n, e]), [l]), u = r.useCallback(e => l((n = []) => n.filter(n => n !== e)), [l]);
        return (0, p.jsx)($, {
          scope: e.__scopeAccordion,
          value: s,
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
      }), [W, q] = D(M), z = r.forwardRef((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: o,
          dir: a,
          orientation: c = "vertical",
          ...d
        } = e, u = r.useRef(null), f = (0, i.s)(u, n), m = E(t), b = "ltr" === (0, O.jH)(a), y = (0, s.mK)(e.onKeyDown, e => {
          if (!k.includes(e.key)) return;
          const n = e.target,
            t = m().filter(e => !e.ref.current?.disabled),
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
        });
        return (0, p.jsx)(W, {
          scope: t,
          disabled: o,
          direction: a,
          orientation: c,
          children: (0, p.jsx)(S.Slot, {
            scope: t,
            children: (0, p.jsx)(l.sG.div, {
              ...d,
              "data-orientation": c,
              ref: f,
              onKeyDown: o ? void 0 : y
            })
          })
        })
      }), B = "AccordionItem", [Y, J] = D(B), Q = r.forwardRef((e, n) => {
        const {
          __scopeAccordion: t,
          value: r,
          ...o
        } = e, a = q(B, t), i = F(B, t), s = U(t), c = (0, f.useId)(), l = r && i.value.includes(r) || !1, d = a.disabled || e.disabled;
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
      });
      Q.displayName = B;
      var X = "AccordionHeader",
        Z = r.forwardRef((e, n) => {
          const {
            __scopeAccordion: t,
            ...r
          } = e, o = q(M, t), a = J(X, t);
          return (0, p.jsx)(l.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": oe(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...r,
            ref: n
          })
        });
      Z.displayName = X;
      var ee = "AccordionTrigger",
        ne = r.forwardRef((e, n) => {
          const {
            __scopeAccordion: t,
            ...r
          } = e, o = q(M, t), a = J(ee, t), i = G(ee, t), s = U(t);
          return (0, p.jsx)(S.ItemSlot, {
            scope: t,
            children: (0, p.jsx)(I, {
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
          } = e, o = q(M, t), a = J(te, t), i = U(t);
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
        });

      function oe(e) {
        return e ? "open" : "closed"
      }
      re.displayName = te;
      var ae = L,
        ie = Q,
        se = Z,
        ce = ne,
        le = re
    },
    65324(e, n, t) {
      t.d(n, {
        N: () => c
      });
      var r = t(4637),
        o = t(54958),
        a = t(64239),
        i = t(50486),
        s = t(39793);

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
          m = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: r
            } = e, o = d(f, t), i = (0, a.s)(n, o.collectionRef);
            return (0, s.jsx)(p, {
              ref: i,
              children: r
            })
          });
        m.displayName = f;
        const b = e + "CollectionItemSlot",
          y = "data-radix-collection-item",
          h = (0, i.createSlot)(b),
          g = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: o,
              ...i
            } = e, c = r.useRef(null), l = (0, a.s)(n, c), u = d(b, t);
            return r.useEffect(() => (u.itemMap.set(c, {
              ref: c,
              ...i
            }), () => {
              u.itemMap.delete(c)
            })), (0, s.jsx)(h, {
              [y]: "",
              ref: l,
              children: o
            })
          });
        return g.displayName = b, [{
          Provider: u,
          Slot: m,
          ItemSlot: g
        }, function(n) {
          const t = d(e + "CollectionConsumer", n);
          return r.useCallback(() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${y}]`));
            return Array.from(t.itemMap.values()).sort((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current))
          }, [t.collectionRef, t.itemMap])
        }, c]
      }
      Map
    },
    64239(e, n, t) {
      t.d(n, {
        s: () => i,
        t: () => a
      });
      var r = t(4637);

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
    },
    54958(e, n, t) {
      t.d(n, {
        A: () => a
      });
      var r = t(4637),
        o = t(39793);

      function a(e, n = []) {
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
          const i = r.createContext(a);
          i.displayName = n + "Context";
          const s = t.length;
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
    99136(e, n, t) {
      t.d(n, {
        jH: () => a
      });
      var r = t(4637),
        o = (t(39793), r.createContext(void 0));

      function a(e) {
        const n = r.useContext(o);
        return e || n || "ltr"
      }
    },
    66624(e, n, t) {
      t.d(n, {
        C: () => a
      });
      var r = t(4637),
        o = t(10198),
        a = e => {
          const {
            present: n,
            children: t
          } = e, a = function(e) {
            const [n, t] = r.useState(), a = r.useRef(null), i = r.useRef(e), c = r.useRef("none"), l = e ? "mounted" : "unmounted", [d, u] = function(e, n) {
              return r.useReducer((e, t) => n[e][t] ?? e, e)
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
            return r.useEffect(() => {
              const e = s(a.current);
              c.current = "mounted" === d ? e : "none"
            }, [d]), (0, o.N)(() => {
              const n = a.current,
                t = i.current;
              if (t !== e) {
                const r = c.current,
                  o = s(n);
                u(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
              }
            }, [e, u]), (0, o.N)(() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const o = s(a.current).includes(CSS.escape(r.animationName));
                    if (r.target === n && o && (u("ANIMATION_END"), !i.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      })
                    }
                  },
                  o = e => {
                    e.target === n && (c.current = s(a.current))
                  };
                return n.addEventListener("animationstart", o), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", o), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
              }
              u("ANIMATION_END")
            }, [n, u]), {
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: r.useCallback(e => {
                a.current = e ? getComputedStyle(e) : null, t(e)
              }, [])
            }
          }(n), c = "function" == typeof t ? t({
            present: a.isPresent
          }) : r.Children.only(t), l = function(...e) {
            const n = r.useRef(e);
            return n.current = e, r.useCallback(e => {
              const t = n.current;
              let r = !1;
              const o = t.map(n => {
                const t = i(n, e);
                return r || "function" != typeof t || (r = !0), t
              });
              if (r) return () => {
                for (let e = 0; e < o.length; e++) {
                  const n = o[e];
                  "function" == typeof n ? n() : i(t[e], null)
                }
              }
            }, [])
          }(a.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(c));
          return "function" == typeof t || a.isPresent ? r.cloneElement(c, {
            ref: l
          }) : null
        };

      function i(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function s(e) {
        return e?.animationName || "none"
      }
      a.displayName = "Presence"
    },
    80082(e, n, t) {
      t.d(n, {
        hO: () => c,
        sG: () => s
      });
      var r = t(4637),
        o = t(84017),
        a = t(50486),
        i = t(39793),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, a.createSlot)(`Primitive.${n}`),
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
    10198(e, n, t) {
      t.d(n, {
        N: () => o
      });
      var r = t(4637),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    }
  }
]);