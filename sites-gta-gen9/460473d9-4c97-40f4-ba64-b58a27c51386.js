try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "460473d9-4c97-40f4-ba64-b58a27c51386", e._sentryDebugIdIdentifier = "sentry-dbid-460473d9-4c97-40f4-ba64-b58a27c51386")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [8784], {
    21423: (e, n, t) => {
      t.d(n, {
        s: () => a,
        t: () => i
      });
      var r = t(62229);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function i(...e) {
        return n => {
          let t = !1;
          const r = e.map((e => {
            const r = o(e, n);
            return t || "function" != typeof r || (t = !0), r
          }));
          if (t) return () => {
            for (let n = 0; n < r.length; n++) {
              const t = r[n];
              "function" == typeof t ? t() : o(e[n], null)
            }
          }
        }
      }

      function a(...e) {
        return r.useCallback(i(...e), e)
      }
    },
    22517: (e, n, t) => {
      function r(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }
      t.d(n, {
        m: () => r
      })
    },
    48087: (e, n, t) => {
      var r;
      t.d(n, {
        i: () => c
      });
      var o = t(62229),
        i = t(92600),
        a = (r || (r = t.t(o, 2)))[" useInsertionEffect ".trim().toString()] || i.N;

      function c({
        prop: e,
        defaultProp: n,
        onChange: t = () => {},
        caller: r
      }) {
        const [i, c, s] = function({
          defaultProp: e,
          onChange: n
        }) {
          const [t, r] = o.useState(e), i = o.useRef(t), c = o.useRef(n);
          return a((() => {
            c.current = n
          }), [n]), o.useEffect((() => {
            i.current !== t && (c.current?.(t), i.current = t)
          }), [t, i]), [t, r, c]
        }({
          defaultProp: n,
          onChange: t
        }), l = void 0 !== e, d = l ? e : i; {
          const n = o.useRef(void 0 !== e);
          o.useEffect((() => {
            const e = n.current;
            if (e !== l) {
              const n = e ? "controlled" : "uncontrolled",
                t = l ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${n} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            n.current = l
          }), [l, r])
        }
        const u = o.useCallback((n => {
          if (l) {
            const t = function(e) {
              return "function" == typeof e
            }(n) ? n(e) : n;
            t !== e && s.current?.(t)
          } else c(n)
        }), [l, e, c, s]);
        return [d, u]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    48784: (e, n, t) => {
      t.r(n), t.d(n, {
        Accordion: () => L,
        AccordionContent: () => re,
        AccordionHeader: () => Q,
        AccordionItem: () => Z,
        AccordionTrigger: () => ne,
        Content: () => le,
        Header: () => ce,
        Item: () => ae,
        Root: () => ie,
        Trigger: () => se,
        createAccordionScope: () => P
      });
      var r = t(62229),
        o = t(91173),
        i = t(50438),
        a = t(21423),
        c = t(22517),
        s = t(48087),
        l = t(51347),
        d = t(92600),
        u = t(79315),
        f = t(95187),
        p = t(70954),
        m = "Collapsible",
        [g, h] = (0, o.A)(m),
        [b, y] = g(m),
        v = r.forwardRef(((e, n) => {
          const {
            __scopeCollapsible: t,
            open: o,
            defaultOpen: i,
            disabled: a,
            onOpenChange: c,
            ...d
          } = e, [u, g] = (0, s.i)({
            prop: o,
            defaultProp: i ?? !1,
            onChange: c,
            caller: m
          });
          return (0, p.jsx)(b, {
            scope: t,
            disabled: a,
            contentId: (0, f.B)(),
            open: u,
            onOpenToggle: r.useCallback((() => g((e => !e))), [g]),
            children: (0, p.jsx)(l.sG.div, {
              "data-state": A(u),
              "data-disabled": a ? "" : void 0,
              ...d,
              ref: n
            })
          })
        }));
      v.displayName = m;
      var w = "CollapsibleTrigger",
        N = r.forwardRef(((e, n) => {
          const {
            __scopeCollapsible: t,
            ...r
          } = e, o = y(w, t);
          return (0, p.jsx)(l.sG.button, {
            type: "button",
            "aria-controls": o.contentId,
            "aria-expanded": o.open || !1,
            "data-state": A(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...r,
            ref: n,
            onClick: (0, c.m)(e.onClick, o.onOpenToggle)
          })
        }));
      N.displayName = w;
      var _ = "CollapsibleContent",
        C = r.forwardRef(((e, n) => {
          const {
            forceMount: t,
            ...r
          } = e, o = y(_, e.__scopeCollapsible);
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
        }));
      C.displayName = _;
      var x = r.forwardRef(((e, n) => {
        const {
          __scopeCollapsible: t,
          present: o,
          children: i,
          ...c
        } = e, s = y(_, t), [u, f] = r.useState(o), m = r.useRef(null), g = (0, a.s)(n, m), h = r.useRef(0), b = h.current, v = r.useRef(0), w = v.current, N = s.open || u, C = r.useRef(N), x = r.useRef(void 0);
        return r.useEffect((() => {
          const e = requestAnimationFrame((() => C.current = !1));
          return () => cancelAnimationFrame(e)
        }), []), (0, d.N)((() => {
          const e = m.current;
          if (e) {
            x.current = x.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const n = e.getBoundingClientRect();
            h.current = n.height, v.current = n.width, C.current || (e.style.transitionDuration = x.current.transitionDuration, e.style.animationName = x.current.animationName), f(o)
          }
        }), [s.open, o]), (0, p.jsx)(l.sG.div, {
          "data-state": A(s.open),
          "data-disabled": s.disabled ? "" : void 0,
          id: s.contentId,
          hidden: !N,
          ...c,
          ref: g,
          style: {
            "--radix-collapsible-content-height": b ? `${b}px` : void 0,
            "--radix-collapsible-content-width": w ? `${w}px` : void 0,
            ...e.style
          },
          children: N && i
        })
      }));

      function A(e) {
        return e ? "open" : "closed"
      }
      var R = v,
        j = N,
        I = C,
        M = t(59219),
        E = "Accordion",
        O = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [T, S, k] = (0, i.N)(E),
        [D, P] = (0, o.A)(E, [k, h]),
        $ = h(),
        L = r.forwardRef(((e, n) => {
          const {
            type: t,
            ...r
          } = e, o = r, i = r;
          return (0, p.jsx)(T.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === t ? (0, p.jsx)(G, {
              ...i,
              ref: n
            }) : (0, p.jsx)(H, {
              ...o,
              ref: n
            })
          })
        }));
      L.displayName = E;
      var [U, V] = D(E), [F, W] = D(E, {
        collapsible: !1
      }), H = r.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: i = () => {},
          collapsible: a = !1,
          ...c
        } = e, [l, d] = (0, s.i)({
          prop: t,
          defaultProp: o ?? "",
          onChange: i,
          caller: E
        });
        return (0, p.jsx)(U, {
          scope: e.__scopeAccordion,
          value: r.useMemo((() => l ? [l] : []), [l]),
          onItemOpen: d,
          onItemClose: r.useCallback((() => a && d("")), [a, d]),
          children: (0, p.jsx)(F, {
            scope: e.__scopeAccordion,
            collapsible: a,
            children: (0, p.jsx)(z, {
              ...c,
              ref: n
            })
          })
        })
      })), G = r.forwardRef(((e, n) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: i = () => {},
          ...a
        } = e, [c, l] = (0, s.i)({
          prop: t,
          defaultProp: o ?? [],
          onChange: i,
          caller: E
        }), d = r.useCallback((e => l(((n = []) => [...n, e]))), [l]), u = r.useCallback((e => l(((n = []) => n.filter((n => n !== e))))), [l]);
        return (0, p.jsx)(U, {
          scope: e.__scopeAccordion,
          value: c,
          onItemOpen: d,
          onItemClose: u,
          children: (0, p.jsx)(F, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, p.jsx)(z, {
              ...a,
              ref: n
            })
          })
        })
      })), [B, q] = D(E), z = r.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          disabled: o,
          dir: i,
          orientation: s = "vertical",
          ...d
        } = e, u = r.useRef(null), f = (0, a.s)(u, n), m = S(t), g = "ltr" === (0, M.jH)(i), h = (0, c.m)(e.onKeyDown, (e => {
          if (!O.includes(e.key)) return;
          const n = e.target,
            t = m().filter((e => !e.ref.current?.disabled)),
            r = t.findIndex((e => e.ref.current === n)),
            o = t.length;
          if (-1 === r) return;
          e.preventDefault();
          let i = r;
          const a = o - 1,
            c = () => {
              i = r + 1, i > a && (i = 0)
            },
            l = () => {
              i = r - 1, i < 0 && (i = a)
            };
          switch (e.key) {
            case "Home":
              i = 0;
              break;
            case "End":
              i = a;
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
          const d = i % o;
          t[d].ref.current?.focus()
        }));
        return (0, p.jsx)(B, {
          scope: t,
          disabled: o,
          direction: i,
          orientation: s,
          children: (0, p.jsx)(T.Slot, {
            scope: t,
            children: (0, p.jsx)(l.sG.div, {
              ...d,
              "data-orientation": s,
              ref: f,
              onKeyDown: o ? void 0 : h
            })
          })
        })
      })), K = "AccordionItem", [X, Y] = D(K), Z = r.forwardRef(((e, n) => {
        const {
          __scopeAccordion: t,
          value: r,
          ...o
        } = e, i = q(K, t), a = V(K, t), c = $(t), s = (0, f.B)(), l = r && a.value.includes(r) || !1, d = i.disabled || e.disabled;
        return (0, p.jsx)(X, {
          scope: t,
          open: l,
          disabled: d,
          triggerId: s,
          children: (0, p.jsx)(R, {
            "data-orientation": i.orientation,
            "data-state": oe(l),
            ...c,
            ...o,
            ref: n,
            disabled: d,
            open: l,
            onOpenChange: e => {
              e ? a.onItemOpen(r) : a.onItemClose(r)
            }
          })
        })
      }));
      Z.displayName = K;
      var J = "AccordionHeader",
        Q = r.forwardRef(((e, n) => {
          const {
            __scopeAccordion: t,
            ...r
          } = e, o = q(E, t), i = Y(J, t);
          return (0, p.jsx)(l.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": oe(i.open),
            "data-disabled": i.disabled ? "" : void 0,
            ...r,
            ref: n
          })
        }));
      Q.displayName = J;
      var ee = "AccordionTrigger",
        ne = r.forwardRef(((e, n) => {
          const {
            __scopeAccordion: t,
            ...r
          } = e, o = q(E, t), i = Y(ee, t), a = W(ee, t), c = $(t);
          return (0, p.jsx)(T.ItemSlot, {
            scope: t,
            children: (0, p.jsx)(j, {
              "aria-disabled": i.open && !a.collapsible || void 0,
              "data-orientation": o.orientation,
              id: i.triggerId,
              ...c,
              ...r,
              ref: n
            })
          })
        }));
      ne.displayName = ee;
      var te = "AccordionContent",
        re = r.forwardRef(((e, n) => {
          const {
            __scopeAccordion: t,
            ...r
          } = e, o = q(E, t), i = Y(te, t), a = $(t);
          return (0, p.jsx)(I, {
            role: "region",
            "aria-labelledby": i.triggerId,
            "data-orientation": o.orientation,
            ...a,
            ...r,
            ref: n,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        }));

      function oe(e) {
        return e ? "open" : "closed"
      }
      re.displayName = te;
      var ie = L,
        ae = Z,
        ce = Q,
        se = ne,
        le = re
    },
    50438: (e, n, t) => {
      t.d(n, {
        N: () => s
      });
      var r = t(62229),
        o = t(91173),
        i = t(21423),
        a = t(83970),
        c = t(70954);

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
            } = e, o = r.useRef(null), i = r.useRef(new Map).current;
            return (0, c.jsx)(l, {
              scope: n,
              itemMap: i,
              collectionRef: o,
              children: t
            })
          };
        u.displayName = n;
        const f = e + "CollectionSlot",
          p = (0, a.TL)(f),
          m = r.forwardRef(((e, n) => {
            const {
              scope: t,
              children: r
            } = e, o = d(f, t), a = (0, i.s)(n, o.collectionRef);
            return (0, c.jsx)(p, {
              ref: a,
              children: r
            })
          }));
        m.displayName = f;
        const g = e + "CollectionItemSlot",
          h = "data-radix-collection-item",
          b = (0, a.TL)(g),
          y = r.forwardRef(((e, n) => {
            const {
              scope: t,
              children: o,
              ...a
            } = e, s = r.useRef(null), l = (0, i.s)(n, s), u = d(g, t);
            return r.useEffect((() => (u.itemMap.set(s, {
              ref: s,
              ...a
            }), () => {
              u.itemMap.delete(s)
            }))), (0, c.jsx)(b, {
              [h]: "",
              ref: l,
              children: o
            })
          }));
        return y.displayName = g, [{
          Provider: u,
          Slot: m,
          ItemSlot: y
        }, function(n) {
          const t = d(e + "CollectionConsumer", n);
          return r.useCallback((() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${h}]`));
            return Array.from(t.itemMap.values()).sort(((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current)))
          }), [t.collectionRef, t.itemMap])
        }, s]
      }
      Map
    },
    51347: (e, n, t) => {
      t.d(n, {
        hO: () => s,
        sG: () => c
      });
      var r = t(62229),
        o = t(44853),
        i = t(83970),
        a = t(70954),
        c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, n) => {
          const t = (0, i.TL)(`Primitive.${n}`),
            o = r.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, c = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(c, {
                ...i,
                ref: r
              })
            }));
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }), {});

      function s(e, n) {
        e && o.flushSync((() => e.dispatchEvent(n)))
      }
    },
    59219: (e, n, t) => {
      t.d(n, {
        jH: () => i
      });
      var r = t(62229),
        o = (t(70954), r.createContext(void 0));

      function i(e) {
        const n = r.useContext(o);
        return e || n || "ltr"
      }
    },
    79315: (e, n, t) => {
      t.d(n, {
        C: () => a
      });
      var r = t(62229),
        o = t(21423),
        i = t(92600),
        a = e => {
          const {
            present: n,
            children: t
          } = e, a = function(e) {
            const [n, t] = r.useState(), o = r.useRef(null), a = r.useRef(e), s = r.useRef("none"), l = e ? "mounted" : "unmounted", [d, u] = function(e, n) {
              return r.useReducer(((e, t) => n[e][t] ?? e), e)
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
            return r.useEffect((() => {
              const e = c(o.current);
              s.current = "mounted" === d ? e : "none"
            }), [d]), (0, i.N)((() => {
              const n = o.current,
                t = a.current;
              if (t !== e) {
                const r = s.current,
                  o = c(n);
                u(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e
              }
            }), [e, u]), (0, i.N)((() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const i = c(o.current).includes(r.animationName);
                    if (r.target === n && i && (u("ANIMATION_END"), !a.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout((() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      }))
                    }
                  },
                  i = e => {
                    e.target === n && (s.current = c(o.current))
                  };
                return n.addEventListener("animationstart", i), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", i), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
              }
              u("ANIMATION_END")
            }), [n, u]), {
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: r.useCallback((e => {
                o.current = e ? getComputedStyle(e) : null, t(e)
              }), [])
            }
          }(n), s = "function" == typeof t ? t({
            present: a.isPresent
          }) : r.Children.only(t), l = (0, o.s)(a.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(s));
          return "function" == typeof t || a.isPresent ? r.cloneElement(s, {
            ref: l
          }) : null
        };

      function c(e) {
        return e?.animationName || "none"
      }
      a.displayName = "Presence"
    },
    83970: (e, n, t) => {
      t.d(n, {
        DX: () => c,
        Dc: () => d,
        TL: () => a,
        xV: () => u
      });
      var r = t(62229),
        o = t(21423),
        i = t(70954);

      function a(e) {
        const n = s(e),
          t = r.forwardRef(((e, t) => {
            const {
              children: o,
              ...a
            } = e, c = r.Children.toArray(o), s = c.find(f);
            if (s) {
              const e = s.props.children,
                o = c.map((n => n === s ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n));
              return (0, i.jsx)(n, {
                ...a,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, i.jsx)(n, {
              ...a,
              ref: t,
              children: o
            })
          }));
        return t.displayName = `${e}.Slot`, t
      }
      var c = a("Slot");

      function s(e) {
        const n = r.forwardRef(((e, n) => {
          const {
            children: t,
            ...i
          } = e;
          if (r.isValidElement(t)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = n && "isReactWarning" in n && n.isReactWarning;
                return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              a = function(e, n) {
                const t = {
                  ...n
                };
                for (const r in n) {
                  const o = e[r],
                    i = n[r];
                  /^on[A-Z]/.test(r) ? o && i ? t[r] = (...e) => {
                    i(...e), o(...e)
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (t[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(i, t.props);
            return t.type !== r.Fragment && (a.ref = n ? (0, o.t)(n, e) : e), r.cloneElement(t, a)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
        }));
        return n.displayName = `${e}.SlotClone`, n
      }
      var l = Symbol("radix.slottable");

      function d(e) {
        const n = ({
          children: e
        }) => (0, i.jsx)(i.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = l, n
      }
      var u = d("Slottable");

      function f(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === l
      }
    },
    91173: (e, n, t) => {
      t.d(n, {
        A: () => a,
        q: () => i
      });
      var r = t(62229),
        o = t(70954);

      function i(e, n) {
        const t = r.createContext(n),
          i = e => {
            const {
              children: n,
              ...i
            } = e, a = r.useMemo((() => i), Object.values(i));
            return (0, o.jsx)(t.Provider, {
              value: a,
              children: n
            })
          };
        return i.displayName = e + "Provider", [i, function(o) {
          const i = r.useContext(t);
          if (i) return i;
          if (void 0 !== n) return n;
          throw new Error(`\`${o}\` must be used within \`${e}\``)
        }]
      }

      function a(e, n = []) {
        let t = [];
        const i = () => {
          const n = t.map((e => r.createContext(e)));
          return function(t) {
            const o = t?.[e] || n;
            return r.useMemo((() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: o
              }
            })), [t, o])
          }
        };
        return i.scopeName = e, [function(n, i) {
          const a = r.createContext(i),
            c = t.length;
          t = [...t, i];
          const s = n => {
            const {
              scope: t,
              children: i,
              ...s
            } = n, l = t?.[e]?.[c] || a, d = r.useMemo((() => s), Object.values(s));
            return (0, o.jsx)(l.Provider, {
              value: d,
              children: i
            })
          };
          return s.displayName = n + "Provider", [s, function(t, o) {
            const s = o?.[e]?.[c] || a,
              l = r.useContext(s);
            if (l) return l;
            if (void 0 !== i) return i;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, c(i, ...n)]
      }

      function c(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const o = t.reduce(((n, {
              useScope: t,
              scopeName: r
            }) => ({
              ...n,
              ...t(e)[`__scope${r}`]
            })), {});
            return r.useMemo((() => ({
              [`__scope${n.scopeName}`]: o
            })), [o])
          }
        };
        return t.scopeName = n.scopeName, t
      }
    },
    92600: (e, n, t) => {
      t.d(n, {
        N: () => o
      });
      var r = t(62229),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    95187: (e, n, t) => {
      var r;
      t.d(n, {
        B: () => s
      });
      var o = t(62229),
        i = t(92600),
        a = (r || (r = t.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        c = 0;

      function s(e) {
        const [n, t] = o.useState(a());
        return (0, i.N)((() => {
          e || t((e => e ?? String(c++)))
        }), [e]), e || (n ? `radix-${n}` : "")
      }
    }
  }
]);