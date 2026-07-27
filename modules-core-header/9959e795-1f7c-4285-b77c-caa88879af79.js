try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9959e795-1f7c-4285-b77c-caa88879af79", e._sentryDebugIdIdentifier = "sentry-dbid-9959e795-1f7c-4285-b77c-caa88879af79")
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
  [2174, 4555, 7421, 9793, 9802], {
    94931(e, n, t) {
      var r = t(4637),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, n, t) {
        var r, a = {},
          l = null,
          d = null;
        for (r in void 0 !== t && (l = "" + t), void 0 !== n.key && (l = "" + n.key), void 0 !== n.ref && (d = n.ref), n) i.call(n, r) && !s.hasOwnProperty(r) && (a[r] = n[r]);
        if (e && e.defaultProps)
          for (r in n = e.defaultProps) void 0 === a[r] && (a[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: d,
          props: a,
          _owner: c.current
        }
      }
      n.Fragment = a, n.jsx = l, n.jsxs = l
    },
    39793(e, n, t) {
      e.exports = t(94931)
    },
    2458(e, n, t) {
      function r(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r || !r.defaultPrevented) return n?.(r)
        }
      }
      t.d(n, {
        mK: () => r
      }), "undefined" == typeof window || !window.document || window.document.createElement
    },
    69802(e, n, t) {
      t.r(n), t.d(n, {
        Accordion: () => L,
        AccordionContent: () => re,
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
      var r = t(4637),
        o = t(1913),
        a = t(85920),
        i = t(64239),
        c = t(2458),
        s = t(92939),
        l = t(31270),
        d = t(10198),
        u = t(7470),
        f = t(82449),
        p = t(39793),
        m = "Collapsible",
        [b, y] = (0, o.A)(m),
        [h, g] = b(m),
        v = r.forwardRef((e, n) => {
          const {
            __scopeCollapsible: t,
            open: o,
            defaultOpen: a,
            disabled: i,
            onOpenChange: c,
            ...d
          } = e, [u, b] = (0, s.useControllableState)({
            prop: o,
            defaultProp: a ?? !1,
            onChange: c,
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
      v.displayName = m;
      var w = "CollapsibleTrigger",
        _ = r.forwardRef((e, n) => {
          const {
            __scopeCollapsible: t,
            ...r
          } = e, o = g(w, t);
          return (0, p.jsx)(l.sG.button, {
            type: "button",
            "aria-controls": o.open ? o.contentId : void 0,
            "aria-expanded": o.open || !1,
            "data-state": A(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...r,
            ref: n,
            onClick: (0, c.mK)(e.onClick, o.onOpenToggle)
          })
        });
      _.displayName = w;
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
          ...c
        } = e, s = g(N, t), [u, f] = r.useState(o), m = r.useRef(null), b = (0, i.s)(n, m), y = r.useRef(0), h = y.current, v = r.useRef(0), w = v.current, _ = s.open || u, C = r.useRef(_), x = r.useRef(void 0);
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
            y.current = n.height, v.current = n.width, C.current || (e.style.transitionDuration = x.current.transitionDuration, e.style.animationName = x.current.animationName), f(o)
          }
        }, [s.open, o]), (0, p.jsx)(l.sG.div, {
          "data-state": A(s.open),
          "data-disabled": s.disabled ? "" : void 0,
          id: s.contentId,
          hidden: !_,
          ...c,
          ref: b,
          style: {
            "--radix-collapsible-content-height": h ? `${h}px` : void 0,
            "--radix-collapsible-content-width": w ? `${w}px` : void 0,
            ...e.style
          },
          children: _ && a
        })
      });

      function A(e) {
        return e ? "open" : "closed"
      }
      var R = v,
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
          ...c
        } = e, [l, d] = (0, s.useControllableState)({
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
              ...c,
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
        } = e, [c, l] = (0, s.useControllableState)({
          prop: t,
          defaultProp: o ?? [],
          onChange: a,
          caller: M
        }), d = r.useCallback(e => l((n = []) => [...n, e]), [l]), u = r.useCallback(e => l((n = []) => n.filter(n => n !== e)), [l]);
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
      }), [W, q] = D(M), z = r.forwardRef((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: o,
          dir: a,
          orientation: s = "vertical",
          ...d
        } = e, u = r.useRef(null), f = (0, i.s)(u, n), m = E(t), b = "ltr" === (0, O.jH)(a), y = (0, c.mK)(e.onKeyDown, e => {
          if (!k.includes(e.key)) return;
          const n = e.target,
            t = m().filter(e => !e.ref.current?.disabled),
            r = t.findIndex(e => e.ref.current === n),
            o = t.length;
          if (-1 === r) return;
          e.preventDefault();
          let a = r;
          const i = o - 1,
            c = () => {
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
          const d = a % o;
          t[d].ref.current?.focus()
        });
        return (0, p.jsx)(W, {
          scope: t,
          disabled: o,
          direction: a,
          orientation: s,
          children: (0, p.jsx)(S.Slot, {
            scope: t,
            children: (0, p.jsx)(l.sG.div, {
              ...d,
              "data-orientation": s,
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
        } = e, a = q(B, t), i = F(B, t), c = U(t), s = (0, f.useId)(), l = r && i.value.includes(r) || !1, d = a.disabled || e.disabled;
        return (0, p.jsx)(Y, {
          scope: t,
          open: l,
          disabled: d,
          triggerId: s,
          children: (0, p.jsx)(R, {
            "data-orientation": a.orientation,
            "data-state": oe(l),
            ...c,
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
          } = e, o = q(M, t), a = J(ee, t), i = G(ee, t), c = U(t);
          return (0, p.jsx)(S.ItemSlot, {
            scope: t,
            children: (0, p.jsx)(I, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": o.orientation,
              id: a.triggerId,
              ...c,
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
        ce = Z,
        se = ne,
        le = re
    },
    85920(e, n, t) {
      t.d(n, {
        N: () => s
      });
      var r = t(4637),
        o = t(1913),
        a = t(64239),
        i = t(50486),
        c = t(39793);

      function s(e) {
        const n = e + "CollectionProvider",
          [t, s] = (0, o.A)(n),
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
            return (0, c.jsx)(l, {
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
            return (0, c.jsx)(p, {
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
            } = e, s = r.useRef(null), l = (0, a.s)(n, s), u = d(b, t);
            return r.useEffect(() => (u.itemMap.set(s, {
              ref: s,
              ...i
            }), () => {
              u.itemMap.delete(s)
            })), (0, c.jsx)(h, {
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
        }, s]
      }
      Map
    },
    64239(e, n, t) {
      t.d(n, {
        s: () => a
      });
      var r = t(4637);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
        return r.useCallback(function(...e) {
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
        }(...e), e)
      }
    },
    1913(e, n, t) {
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
          const c = t.length;
          t = [...t, a];
          const s = n => {
            const {
              scope: t,
              children: a,
              ...s
            } = n, l = t?.[e]?.[c] || i, d = r.useMemo(() => s, Object.values(s));
            return (0, o.jsx)(l.Provider, {
              value: d,
              children: a
            })
          };
          return s.displayName = n + "Provider", [s, function(t, o, s = {}) {
            const {
              optional: l = !1
            } = s, d = o?.[e]?.[c] || i, u = r.useContext(d);
            if (u) return u;
            if (void 0 !== a) return a;
            if (!l) throw new Error(`\`${t}\` must be used within \`${n}\``)
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
    7470(e, n, t) {
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
            const [n, t] = r.useState(), a = r.useRef(null), i = r.useRef(e), s = r.useRef("none"), l = r.useRef(void 0), d = e ? "mounted" : "unmounted", [u, f] = function(e, n) {
              return r.useReducer((e, t) => n[e][t] ?? e, e)
            }(d, {
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
              "mounted" === u ? (s.current = l.current ?? c(a.current), l.current = void 0) : s.current = "none"
            }, [u]), (0, o.N)(() => {
              const n = a.current,
                t = i.current;
              if (t !== e) {
                const r = s.current,
                  o = c(n);
                e ? (l.current = o, f("MOUNT")) : f("none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
              }
            }, [e, f]), (0, o.N)(() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const o = c(a.current).includes(CSS.escape(r.animationName));
                    if (r.target === n && o && (f("ANIMATION_END"), !i.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      })
                    }
                  },
                  o = e => {
                    e.target === n && (s.current = c(a.current))
                  };
                return n.addEventListener("animationstart", o), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", o), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
              }
              f("ANIMATION_END")
            }, [n, f]), {
              isPresent: ["mounted", "unmountSuspended"].includes(u),
              ref: r.useCallback(e => {
                if (e) {
                  const n = getComputedStyle(e);
                  a.current = n, l.current = c(n)
                } else a.current = null;
                t(e)
              }, [])
            }
          }(n), s = "function" == typeof t ? t({
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
          }(s));
          return "function" == typeof t || a.isPresent ? r.cloneElement(s, {
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
    31270(e, n, t) {
      t.d(n, {
        hO: () => s,
        sG: () => c
      });
      var r = t(4637),
        o = t(84017),
        a = t(50486),
        i = t(39793),
        c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, a.createSlot)(`Primitive.${n}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, c = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(c, {
                ...a,
                ref: r
              })
            });
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }, {});

      function s(e, n) {
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