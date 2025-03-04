! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "42e4f7a0-42ee-4a96-a036-32eabd0442bf", e._sentryDebugIdIdentifier = "sentry-dbid-42e4f7a0-42ee-4a96-a036-32eabd0442bf")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [8726], {
    20627: (e, n, t) => {
      function o(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(o) {
          if (e?.(o), !1 === t || !o.defaultPrevented) return n?.(o)
        }
      }
      t.d(n, {
        m: () => o
      })
    },
    42268: (e, n, t) => {
      t.d(n, {
        N: () => u
      });
      var o = t(62229),
        r = t(85983),
        i = t(83957),
        a = t(91252),
        s = t(91029);

      function u(e) {
        const n = e + "CollectionProvider",
          [t, u] = (0, r.A)(n),
          [c, l] = t(n, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          d = e => {
            const {
              scope: n,
              children: t
            } = e, r = o.useRef(null), i = o.useRef(new Map).current;
            return (0, s.jsx)(c, {
              scope: n,
              itemMap: i,
              collectionRef: r,
              children: t
            })
          };
        d.displayName = n;
        const f = e + "CollectionSlot",
          v = o.forwardRef(((e, n) => {
            const {
              scope: t,
              children: o
            } = e, r = l(f, t), u = (0, i.s)(n, r.collectionRef);
            return (0, s.jsx)(a.Slot, {
              ref: u,
              children: o
            })
          }));
        v.displayName = f;
        const p = e + "CollectionItemSlot",
          m = "data-radix-collection-item",
          g = o.forwardRef(((e, n) => {
            const {
              scope: t,
              children: r,
              ...u
            } = e, c = o.useRef(null), d = (0, i.s)(n, c), f = l(p, t);
            return o.useEffect((() => (f.itemMap.set(c, {
              ref: c,
              ...u
            }), () => {
              f.itemMap.delete(c)
            }))), (0, s.jsx)(a.Slot, {
              [m]: "",
              ref: d,
              children: r
            })
          }));
        return g.displayName = p, [{
          Provider: d,
          Slot: v,
          ItemSlot: g
        }, function(n) {
          const t = l(e + "CollectionConsumer", n);
          return o.useCallback((() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${m}]`));
            return Array.from(t.itemMap.values()).sort(((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current)))
          }), [t.collectionRef, t.itemMap])
        }, u]
      }
    },
    83957: (e, n, t) => {
      t.d(n, {
        s: () => a,
        t: () => i
      });
      var o = t(62229);

      function r(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function i(...e) {
        return n => {
          let t = !1;
          const o = e.map((e => {
            const o = r(e, n);
            return t || "function" != typeof o || (t = !0), o
          }));
          if (t) return () => {
            for (let n = 0; n < o.length; n++) {
              const t = o[n];
              "function" == typeof t ? t() : r(e[n], null)
            }
          }
        }
      }

      function a(...e) {
        return o.useCallback(i(...e), e)
      }
    },
    85983: (e, n, t) => {
      t.d(n, {
        A: () => a,
        q: () => i
      });
      var o = t(62229),
        r = t(91029);

      function i(e, n) {
        const t = o.createContext(n),
          i = e => {
            const {
              children: n,
              ...i
            } = e, a = o.useMemo((() => i), Object.values(i));
            return (0, r.jsx)(t.Provider, {
              value: a,
              children: n
            })
          };
        return i.displayName = e + "Provider", [i, function(r) {
          const i = o.useContext(t);
          if (i) return i;
          if (void 0 !== n) return n;
          throw new Error(`\`${r}\` must be used within \`${e}\``)
        }]
      }

      function a(e, n = []) {
        let t = [];
        const i = () => {
          const n = t.map((e => o.createContext(e)));
          return function(t) {
            const r = t?.[e] || n;
            return o.useMemo((() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: r
              }
            })), [t, r])
          }
        };
        return i.scopeName = e, [function(n, i) {
          const a = o.createContext(i),
            s = t.length;
          t = [...t, i];
          const u = n => {
            const {
              scope: t,
              children: i,
              ...u
            } = n, c = t?.[e]?.[s] || a, l = o.useMemo((() => u), Object.values(u));
            return (0, r.jsx)(c.Provider, {
              value: l,
              children: i
            })
          };
          return u.displayName = n + "Provider", [u, function(t, r) {
            const u = r?.[e]?.[s] || a,
              c = o.useContext(u);
            if (c) return c;
            if (void 0 !== i) return i;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, s(i, ...n)]
      }

      function s(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = t.reduce(((n, {
              useScope: t,
              scopeName: o
            }) => ({
              ...n,
              ...t(e)[`__scope${o}`]
            })), {});
            return o.useMemo((() => ({
              [`__scope${n.scopeName}`]: r
            })), [r])
          }
        };
        return t.scopeName = n.scopeName, t
      }
    },
    26137: (e, n, t) => {
      t.d(n, {
        jH: () => i
      });
      var o = t(62229),
        r = (t(91029), o.createContext(void 0));

      function i(e) {
        const n = o.useContext(r);
        return e || n || "ltr"
      }
    },
    52420: (e, n, t) => {
      t.d(n, {
        qW: () => v
      });
      var o, r = t(62229),
        i = t(20627),
        a = t(31873),
        s = t(83957),
        u = t(59693),
        c = t(99935),
        l = t(91029),
        d = "dismissableLayer.update",
        f = r.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        v = r.forwardRef(((e, n) => {
          const {
            disableOutsidePointerEvents: t = !1,
            onEscapeKeyDown: v,
            onPointerDownOutside: g,
            onFocusOutside: w,
            onInteractOutside: h,
            onDismiss: y,
            ...b
          } = e, E = r.useContext(f), [N, C] = r.useState(null), M = N?.ownerDocument ?? globalThis?.document, [, R] = r.useState({}), x = (0, s.s)(n, (e => C(e))), _ = Array.from(E.layers), [T] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1), P = _.indexOf(T), D = N ? _.indexOf(N) : -1, L = E.layersWithOutsidePointerEventsDisabled.size > 0, O = D >= P, I = function(e, n = globalThis?.document) {
            const t = (0, u.c)(e),
              o = r.useRef(!1),
              i = r.useRef((() => {}));
            return r.useEffect((() => {
              const e = e => {
                  if (e.target && !o.current) {
                    let o = function() {
                      m("dismissableLayer.pointerDownOutside", t, r, {
                        discrete: !0
                      })
                    };
                    const r = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (n.removeEventListener("click", i.current), i.current = o, n.addEventListener("click", i.current, {
                      once: !0
                    })) : o()
                  } else n.removeEventListener("click", i.current);
                  o.current = !1
                },
                r = window.setTimeout((() => {
                  n.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(r), n.removeEventListener("pointerdown", e), n.removeEventListener("click", i.current)
              }
            }), [n, t]), {
              onPointerDownCapture: () => o.current = !0
            }
          }((e => {
            const n = e.target,
              t = [...E.branches].some((e => e.contains(n)));
            O && !t && (g?.(e), h?.(e), e.defaultPrevented || y?.())
          }), M), j = function(e, n = globalThis?.document) {
            const t = (0, u.c)(e),
              o = r.useRef(!1);
            return r.useEffect((() => {
              const e = e => {
                e.target && !o.current && m("dismissableLayer.focusOutside", t, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
            }), [n, t]), {
              onFocusCapture: () => o.current = !0,
              onBlurCapture: () => o.current = !1
            }
          }((e => {
            const n = e.target;
            [...E.branches].some((e => e.contains(n))) || (w?.(e), h?.(e), e.defaultPrevented || y?.())
          }), M);
          return (0, c.U)((e => {
            D === E.layers.size - 1 && (v?.(e), !e.defaultPrevented && y && (e.preventDefault(), y()))
          }), M), r.useEffect((() => {
            if (N) return t && (0 === E.layersWithOutsidePointerEventsDisabled.size && (o = M.body.style.pointerEvents, M.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(N)), E.layers.add(N), p(), () => {
              t && 1 === E.layersWithOutsidePointerEventsDisabled.size && (M.body.style.pointerEvents = o)
            }
          }), [N, M, t, E]), r.useEffect((() => () => {
            N && (E.layers.delete(N), E.layersWithOutsidePointerEventsDisabled.delete(N), p())
          }), [N, E]), r.useEffect((() => {
            const e = () => R({});
            return document.addEventListener(d, e), () => document.removeEventListener(d, e)
          }), []), (0, l.jsx)(a.sG.div, {
            ...b,
            ref: x,
            style: {
              pointerEvents: L ? O ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, i.m)(e.onFocusCapture, j.onFocusCapture),
            onBlurCapture: (0, i.m)(e.onBlurCapture, j.onBlurCapture),
            onPointerDownCapture: (0, i.m)(e.onPointerDownCapture, I.onPointerDownCapture)
          })
        }));

      function p() {
        const e = new CustomEvent(d);
        document.dispatchEvent(e)
      }

      function m(e, n, t, {
        discrete: o
      }) {
        const r = t.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: t
          });
        n && r.addEventListener(e, n, {
          once: !0
        }), o ? (0, a.hO)(r, i) : r.dispatchEvent(i)
      }
      v.displayName = "DismissableLayer", r.forwardRef(((e, n) => {
        const t = r.useContext(f),
          o = r.useRef(null),
          i = (0, s.s)(n, o);
        return r.useEffect((() => {
          const e = o.current;
          if (e) return t.branches.add(e), () => {
            t.branches.delete(e)
          }
        }), [t.branches]), (0, l.jsx)(a.sG.div, {
          ...e,
          ref: i
        })
      })).displayName = "DismissableLayerBranch"
    },
    58726: (e, n, t) => {
      t.r(n), t.d(n, {
        Content: () => Ee,
        Indicator: () => be,
        Item: () => we,
        Link: () => ye,
        List: () => ge,
        NavigationMenu: () => I,
        NavigationMenuContent: () => X,
        NavigationMenuIndicator: () => q,
        NavigationMenuItem: () => G,
        NavigationMenuLink: () => B,
        NavigationMenuList: () => F,
        NavigationMenuSub: () => S,
        NavigationMenuTrigger: () => $,
        NavigationMenuViewport: () => te,
        Root: () => pe,
        Sub: () => me,
        Trigger: () => he,
        Viewport: () => Ne,
        createNavigationMenuScope: () => T
      });
      var o = t(62229),
        r = t(44853),
        i = t(85983),
        a = t(20627),
        s = t(31873),
        u = t(91377),
        c = t(83957),
        l = t(26137),
        d = t(27085),
        f = t(74406),
        v = t(42268),
        p = t(52420),
        m = t(1371),
        g = t(66698),
        w = t(59693),
        h = t(63694),
        y = t(91029),
        b = "NavigationMenu",
        [E, N, C] = (0, v.N)(b),
        [M, R, x] = (0, v.N)(b),
        [_, T] = (0, i.A)(b, [C, x]),
        [P, D] = _(b),
        [L, O] = _(b),
        I = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            value: r,
            onValueChange: i,
            defaultValue: a,
            delayDuration: d = 200,
            skipDelayDuration: f = 300,
            orientation: v = "horizontal",
            dir: p,
            ...m
          } = e, [g, w] = o.useState(null), h = (0, c.s)(n, (e => w(e))), b = (0, l.jH)(p), E = o.useRef(0), N = o.useRef(0), C = o.useRef(0), [M, R] = o.useState(!0), [x = "", _] = (0, u.i)({
            prop: r,
            onChange: e => {
              const n = f > 0;
              "" !== e ? (window.clearTimeout(C.current), n && R(!1)) : (window.clearTimeout(C.current), C.current = window.setTimeout((() => R(!0)), f)), i?.(e)
            },
            defaultProp: a
          }), T = o.useCallback((() => {
            window.clearTimeout(N.current), N.current = window.setTimeout((() => _("")), 150)
          }), [_]), P = o.useCallback((e => {
            window.clearTimeout(N.current), _(e)
          }), [_]), D = o.useCallback((e => {
            x === e ? window.clearTimeout(N.current) : E.current = window.setTimeout((() => {
              window.clearTimeout(N.current), _(e)
            }), d)
          }), [x, _, d]);
          return o.useEffect((() => () => {
            window.clearTimeout(E.current), window.clearTimeout(N.current), window.clearTimeout(C.current)
          }), []), (0, y.jsx)(k, {
            scope: t,
            isRootMenu: !0,
            value: x,
            dir: b,
            orientation: v,
            rootNavigationMenu: g,
            onTriggerEnter: e => {
              window.clearTimeout(E.current), M ? D(e) : P(e)
            },
            onTriggerLeave: () => {
              window.clearTimeout(E.current), T()
            },
            onContentEnter: () => window.clearTimeout(N.current),
            onContentLeave: T,
            onItemSelect: e => {
              _((n => n === e ? "" : e))
            },
            onItemDismiss: () => _(""),
            children: (0, y.jsx)(s.sG.nav, {
              "aria-label": "Main",
              "data-orientation": v,
              dir: b,
              ...m,
              ref: h
            })
          })
        }));
      I.displayName = b;
      var j = "NavigationMenuSub",
        S = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            value: o,
            onValueChange: r,
            defaultValue: i,
            orientation: a = "horizontal",
            ...c
          } = e, l = D(j, t), [d = "", f] = (0, u.i)({
            prop: o,
            onChange: r,
            defaultProp: i
          });
          return (0, y.jsx)(k, {
            scope: t,
            isRootMenu: !1,
            value: d,
            dir: l.dir,
            orientation: a,
            rootNavigationMenu: l.rootNavigationMenu,
            onTriggerEnter: e => f(e),
            onItemSelect: e => f(e),
            onItemDismiss: () => f(""),
            children: (0, y.jsx)(s.sG.div, {
              "data-orientation": a,
              ...c,
              ref: n
            })
          })
        }));
      S.displayName = j;
      var k = e => {
          const {
            scope: n,
            isRootMenu: t,
            rootNavigationMenu: r,
            dir: i,
            orientation: a,
            children: s,
            value: u,
            onItemSelect: c,
            onItemDismiss: l,
            onTriggerEnter: d,
            onTriggerLeave: v,
            onContentEnter: p,
            onContentLeave: g
          } = e, [h, b] = o.useState(null), [N, C] = o.useState(new Map), [M, R] = o.useState(null);
          return (0, y.jsx)(P, {
            scope: n,
            isRootMenu: t,
            rootNavigationMenu: r,
            value: u,
            previousValue: (0, m.Z)(u),
            baseId: (0, f.useId)(),
            dir: i,
            orientation: a,
            viewport: h,
            onViewportChange: b,
            indicatorTrack: M,
            onIndicatorTrackChange: R,
            onTriggerEnter: (0, w.c)(d),
            onTriggerLeave: (0, w.c)(v),
            onContentEnter: (0, w.c)(p),
            onContentLeave: (0, w.c)(g),
            onItemSelect: (0, w.c)(c),
            onItemDismiss: (0, w.c)(l),
            onViewportContentChange: o.useCallback(((e, n) => {
              C((t => (t.set(e, n), new Map(t))))
            }), []),
            onViewportContentRemove: o.useCallback((e => {
              C((n => n.has(e) ? (n.delete(e), new Map(n)) : n))
            }), []),
            children: (0, y.jsx)(E.Provider, {
              scope: n,
              children: (0, y.jsx)(L, {
                scope: n,
                items: N,
                children: s
              })
            })
          })
        },
        A = "NavigationMenuList",
        F = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            ...o
          } = e, r = D(A, t), i = (0, y.jsx)(s.sG.ul, {
            "data-orientation": r.orientation,
            ...o,
            ref: n
          });
          return (0, y.jsx)(s.sG.div, {
            style: {
              position: "relative"
            },
            ref: r.onIndicatorTrackChange,
            children: (0, y.jsx)(E.Slot, {
              scope: t,
              children: r.isRootMenu ? (0, y.jsx)(re, {
                asChild: !0,
                children: i
              }) : i
            })
          })
        }));
      F.displayName = A;
      var V = "NavigationMenuItem",
        [K, U] = _(V),
        G = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            value: r,
            ...i
          } = e, a = (0, f.useId)(), u = r || a || "LEGACY_REACT_AUTO_VALUE", c = o.useRef(null), l = o.useRef(null), d = o.useRef(null), v = o.useRef((() => {})), p = o.useRef(!1), m = o.useCallback(((e = "start") => {
            if (c.current) {
              v.current();
              const n = se(c.current);
              n.length && ue("start" === e ? n : n.reverse())
            }
          }), []), g = o.useCallback((() => {
            if (c.current) {
              const e = se(c.current);
              e.length && (v.current = function(e) {
                return e.forEach((e => {
                  e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
                })), () => {
                  e.forEach((e => {
                    const n = e.dataset.tabindex;
                    e.setAttribute("tabindex", n)
                  }))
                }
              }(e))
            }
          }), []);
          return (0, y.jsx)(K, {
            scope: t,
            value: u,
            triggerRef: l,
            contentRef: c,
            focusProxyRef: d,
            wasEscapeCloseRef: p,
            onEntryKeyDown: m,
            onFocusProxyEnter: m,
            onRootContentClose: g,
            onContentFocusOutside: g,
            children: (0, y.jsx)(s.sG.li, {
              ...i,
              ref: n
            })
          })
        }));
      G.displayName = V;
      var W = "NavigationMenuTrigger",
        $ = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            disabled: r,
            ...i
          } = e, u = D(W, e.__scopeNavigationMenu), l = U(W, e.__scopeNavigationMenu), d = o.useRef(null), f = (0, c.s)(d, l.triggerRef, n), v = de(u.baseId, l.value), p = fe(u.baseId, l.value), m = o.useRef(!1), g = o.useRef(!1), w = l.value === u.value;
          return (0, y.jsxs)(y.Fragment, {
            children: [(0, y.jsx)(E.ItemSlot, {
              scope: t,
              value: l.value,
              children: (0, y.jsx)(ae, {
                asChild: !0,
                children: (0, y.jsx)(s.sG.button, {
                  id: v,
                  disabled: r,
                  "data-disabled": r ? "" : void 0,
                  "data-state": le(w),
                  "aria-expanded": w,
                  "aria-controls": p,
                  ...i,
                  ref: f,
                  onPointerEnter: (0, a.m)(e.onPointerEnter, (() => {
                    g.current = !1, l.wasEscapeCloseRef.current = !1
                  })),
                  onPointerMove: (0, a.m)(e.onPointerMove, ve((() => {
                    r || g.current || l.wasEscapeCloseRef.current || m.current || (u.onTriggerEnter(l.value), m.current = !0)
                  }))),
                  onPointerLeave: (0, a.m)(e.onPointerLeave, ve((() => {
                    r || (u.onTriggerLeave(), m.current = !1)
                  }))),
                  onClick: (0, a.m)(e.onClick, (() => {
                    u.onItemSelect(l.value), g.current = w
                  })),
                  onKeyDown: (0, a.m)(e.onKeyDown, (e => {
                    const n = {
                      horizontal: "ArrowDown",
                      vertical: "rtl" === u.dir ? "ArrowLeft" : "ArrowRight"
                    } [u.orientation];
                    w && e.key === n && (l.onEntryKeyDown(), e.preventDefault())
                  }))
                })
              })
            }), w && (0, y.jsxs)(y.Fragment, {
              children: [(0, y.jsx)(h.Root, {
                "aria-hidden": !0,
                tabIndex: 0,
                ref: l.focusProxyRef,
                onFocus: e => {
                  const n = l.contentRef.current,
                    t = e.relatedTarget,
                    o = t === d.current,
                    r = n?.contains(t);
                  !o && r || l.onFocusProxyEnter(o ? "start" : "end")
                }
              }), u.viewport && (0, y.jsx)("span", {
                "aria-owns": p
              })]
            })]
          })
        }));
      $.displayName = W;
      var z = "navigationMenu.linkSelect",
        B = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            active: o,
            onSelect: r,
            ...i
          } = e;
          return (0, y.jsx)(ae, {
            asChild: !0,
            children: (0, y.jsx)(s.sG.a, {
              "data-active": o ? "" : void 0,
              "aria-current": o ? "page" : void 0,
              ...i,
              ref: n,
              onClick: (0, a.m)(e.onClick, (e => {
                const n = e.target,
                  t = new CustomEvent(z, {
                    bubbles: !0,
                    cancelable: !0
                  });
                if (n.addEventListener(z, (e => r?.(e)), {
                    once: !0
                  }), (0, s.hO)(n, t), !t.defaultPrevented && !e.metaKey) {
                  const e = new CustomEvent(Q, {
                    bubbles: !0,
                    cancelable: !0
                  });
                  (0, s.hO)(n, e)
                }
              }), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }));
      B.displayName = "NavigationMenuLink";
      var H = "NavigationMenuIndicator",
        q = o.forwardRef(((e, n) => {
          const {
            forceMount: t,
            ...o
          } = e, i = D(H, e.__scopeNavigationMenu), a = Boolean(i.value);
          return i.indicatorTrack ? r.createPortal((0, y.jsx)(d.C, {
            present: t || a,
            children: (0, y.jsx)(Y, {
              ...o,
              ref: n
            })
          }), i.indicatorTrack) : null
        }));
      q.displayName = H;
      var Y = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            ...r
          } = e, i = D(H, t), a = N(t), [u, c] = o.useState(null), [l, d] = o.useState(null), f = "horizontal" === i.orientation, v = Boolean(i.value);
          o.useEffect((() => {
            const e = a(),
              n = e.find((e => e.value === i.value))?.ref.current;
            n && c(n)
          }), [a, i.value]);
          const p = () => {
            u && d({
              size: f ? u.offsetWidth : u.offsetHeight,
              offset: f ? u.offsetLeft : u.offsetTop
            })
          };
          return ce(u, p), ce(i.indicatorTrack, p), l ? (0, y.jsx)(s.sG.div, {
            "aria-hidden": !0,
            "data-state": v ? "visible" : "hidden",
            "data-orientation": i.orientation,
            ...r,
            ref: n,
            style: {
              position: "absolute",
              ...f ? {
                left: 0,
                width: l.size + "px",
                transform: `translateX(${l.offset}px)`
              } : {
                top: 0,
                height: l.size + "px",
                transform: `translateY(${l.offset}px)`
              },
              ...r.style
            }
          }) : null
        })),
        Z = "NavigationMenuContent",
        X = o.forwardRef(((e, n) => {
          const {
            forceMount: t,
            ...o
          } = e, r = D(Z, e.__scopeNavigationMenu), i = U(Z, e.__scopeNavigationMenu), s = (0, c.s)(i.contentRef, n), u = i.value === r.value, l = {
            value: i.value,
            triggerRef: i.triggerRef,
            focusProxyRef: i.focusProxyRef,
            wasEscapeCloseRef: i.wasEscapeCloseRef,
            onContentFocusOutside: i.onContentFocusOutside,
            onRootContentClose: i.onRootContentClose,
            ...o
          };
          return r.viewport ? (0, y.jsx)(J, {
            forceMount: t,
            ...l,
            ref: s
          }) : (0, y.jsx)(d.C, {
            present: t || u,
            children: (0, y.jsx)(ee, {
              "data-state": le(u),
              ...l,
              ref: s,
              onPointerEnter: (0, a.m)(e.onPointerEnter, r.onContentEnter),
              onPointerLeave: (0, a.m)(e.onPointerLeave, ve(r.onContentLeave)),
              style: {
                pointerEvents: !u && r.isRootMenu ? "none" : void 0,
                ...l.style
              }
            })
          })
        }));
      X.displayName = Z;
      var J = o.forwardRef(((e, n) => {
          const t = D(Z, e.__scopeNavigationMenu),
            {
              onViewportContentChange: o,
              onViewportContentRemove: r
            } = t;
          return (0, g.N)((() => {
            o(e.value, {
              ref: n,
              ...e
            })
          }), [e, n, o]), (0, g.N)((() => () => r(e.value)), [e.value, r]), null
        })),
        Q = "navigationMenu.rootContentDismiss",
        ee = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            value: r,
            triggerRef: i,
            focusProxyRef: s,
            wasEscapeCloseRef: u,
            onRootContentClose: l,
            onContentFocusOutside: d,
            ...f
          } = e, v = D(Z, t), m = o.useRef(null), g = (0, c.s)(m, n), w = de(v.baseId, r), h = fe(v.baseId, r), b = N(t), E = o.useRef(null), {
            onItemDismiss: C
          } = v;
          o.useEffect((() => {
            const e = m.current;
            if (v.isRootMenu && e) {
              const n = () => {
                C(), l(), e.contains(document.activeElement) && i.current?.focus()
              };
              return e.addEventListener(Q, n), () => e.removeEventListener(Q, n)
            }
          }), [v.isRootMenu, e.value, i, C, l]);
          const M = o.useMemo((() => {
            const e = b().map((e => e.value));
            "rtl" === v.dir && e.reverse();
            const n = e.indexOf(v.value),
              t = e.indexOf(v.previousValue),
              o = r === v.value,
              i = t === e.indexOf(r);
            if (!o && !i) return E.current;
            const a = (() => {
              if (n !== t) {
                if (o && -1 !== t) return n > t ? "from-end" : "from-start";
                if (i && -1 !== n) return n > t ? "to-start" : "to-end"
              }
              return null
            })();
            return E.current = a, a
          }), [v.previousValue, v.value, v.dir, b, r]);
          return (0, y.jsx)(re, {
            asChild: !0,
            children: (0, y.jsx)(p.qW, {
              id: h,
              "aria-labelledby": w,
              "data-motion": M,
              "data-orientation": v.orientation,
              ...f,
              ref: g,
              disableOutsidePointerEvents: !1,
              onDismiss: () => {
                const e = new Event(Q, {
                  bubbles: !0,
                  cancelable: !0
                });
                m.current?.dispatchEvent(e)
              },
              onFocusOutside: (0, a.m)(e.onFocusOutside, (e => {
                d();
                const n = e.target;
                v.rootNavigationMenu?.contains(n) && e.preventDefault()
              })),
              onPointerDownOutside: (0, a.m)(e.onPointerDownOutside, (e => {
                const n = e.target,
                  t = b().some((e => e.ref.current?.contains(n))),
                  o = v.isRootMenu && v.viewport?.contains(n);
                (t || o || !v.isRootMenu) && e.preventDefault()
              })),
              onKeyDown: (0, a.m)(e.onKeyDown, (e => {
                const n = e.altKey || e.ctrlKey || e.metaKey;
                if ("Tab" === e.key && !n) {
                  const n = se(e.currentTarget),
                    t = document.activeElement,
                    o = n.findIndex((e => e === t));
                  ue(e.shiftKey ? n.slice(0, o).reverse() : n.slice(o + 1, n.length)) ? e.preventDefault() : s.current?.focus()
                }
              })),
              onEscapeKeyDown: (0, a.m)(e.onEscapeKeyDown, (e => {
                u.current = !0
              }))
            })
          })
        })),
        ne = "NavigationMenuViewport",
        te = o.forwardRef(((e, n) => {
          const {
            forceMount: t,
            ...o
          } = e, r = D(ne, e.__scopeNavigationMenu), i = Boolean(r.value);
          return (0, y.jsx)(d.C, {
            present: t || i,
            children: (0, y.jsx)(oe, {
              ...o,
              ref: n
            })
          })
        }));
      te.displayName = ne;
      var oe = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            children: r,
            ...i
          } = e, u = D(ne, t), l = (0, c.s)(n, u.onViewportChange), f = O(Z, e.__scopeNavigationMenu), [v, p] = o.useState(null), [m, g] = o.useState(null), w = v ? v?.width + "px" : void 0, h = v ? v?.height + "px" : void 0, b = Boolean(u.value), E = b ? u.value : u.previousValue;
          return ce(m, (() => {
            m && p({
              width: m.offsetWidth,
              height: m.offsetHeight
            })
          })), (0, y.jsx)(s.sG.div, {
            "data-state": le(b),
            "data-orientation": u.orientation,
            ...i,
            ref: l,
            style: {
              pointerEvents: !b && u.isRootMenu ? "none" : void 0,
              "--radix-navigation-menu-viewport-width": w,
              "--radix-navigation-menu-viewport-height": h,
              ...i.style
            },
            onPointerEnter: (0, a.m)(e.onPointerEnter, u.onContentEnter),
            onPointerLeave: (0, a.m)(e.onPointerLeave, ve(u.onContentLeave)),
            children: Array.from(f.items).map((([e, {
              ref: n,
              forceMount: t,
              ...o
            }]) => {
              const r = E === e;
              return (0, y.jsx)(d.C, {
                present: t || r,
                children: (0, y.jsx)(ee, {
                  ...o,
                  ref: (0, c.t)(n, (e => {
                    r && e && g(e)
                  }))
                })
              }, e)
            }))
          })
        })),
        re = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            ...o
          } = e, r = D("FocusGroup", t);
          return (0, y.jsx)(M.Provider, {
            scope: t,
            children: (0, y.jsx)(M.Slot, {
              scope: t,
              children: (0, y.jsx)(s.sG.div, {
                dir: r.dir,
                ...o,
                ref: n
              })
            })
          })
        })),
        ie = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
        ae = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            ...o
          } = e, r = R(t), i = D("FocusGroupItem", t);
          return (0, y.jsx)(M.ItemSlot, {
            scope: t,
            children: (0, y.jsx)(s.sG.button, {
              ...o,
              ref: n,
              onKeyDown: (0, a.m)(e.onKeyDown, (e => {
                if (["Home", "End", ...ie].includes(e.key)) {
                  let n = r().map((e => e.ref.current));
                  if (["rtl" === i.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(e.key) && n.reverse(), ie.includes(e.key)) {
                    const t = n.indexOf(e.currentTarget);
                    n = n.slice(t + 1)
                  }
                  setTimeout((() => ue(n))), e.preventDefault()
                }
              }))
            })
          })
        }));

      function se(e) {
        const n = [],
          t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const n = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || n ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; t.nextNode();) n.push(t.currentNode);
        return n
      }

      function ue(e) {
        const n = document.activeElement;
        return e.some((e => e === n || (e.focus(), document.activeElement !== n)))
      }

      function ce(e, n) {
        const t = (0, w.c)(n);
        (0, g.N)((() => {
          let n = 0;
          if (e) {
            const o = new ResizeObserver((() => {
              cancelAnimationFrame(n), n = window.requestAnimationFrame(t)
            }));
            return o.observe(e), () => {
              window.cancelAnimationFrame(n), o.unobserve(e)
            }
          }
        }), [e, t])
      }

      function le(e) {
        return e ? "open" : "closed"
      }

      function de(e, n) {
        return `${e}-trigger-${n}`
      }

      function fe(e, n) {
        return `${e}-content-${n}`
      }

      function ve(e) {
        return n => "mouse" === n.pointerType ? e(n) : void 0
      }
      var pe = I,
        me = S,
        ge = F,
        we = G,
        he = $,
        ye = B,
        be = q,
        Ee = X,
        Ne = te
    },
    27085: (e, n, t) => {
      t.d(n, {
        C: () => a
      });
      var o = t(62229),
        r = t(83957),
        i = t(66698),
        a = e => {
          const {
            present: n,
            children: t
          } = e, a = function(e) {
            const [n, t] = o.useState(), r = o.useRef({}), a = o.useRef(e), u = o.useRef("none"), c = e ? "mounted" : "unmounted", [l, d] = function(e, n) {
              return o.useReducer(((e, t) => n[e][t] ?? e), e)
            }(c, {
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
            return o.useEffect((() => {
              const e = s(r.current);
              u.current = "mounted" === l ? e : "none"
            }), [l]), (0, i.N)((() => {
              const n = r.current,
                t = a.current;
              if (t !== e) {
                const o = u.current,
                  r = s(n);
                d(e ? "MOUNT" : "none" === r || "none" === n?.display ? "UNMOUNT" : t && o !== r ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e
              }
            }), [e, d]), (0, i.N)((() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  o = o => {
                    const i = s(r.current).includes(o.animationName);
                    if (o.target === n && i && (d("ANIMATION_END"), !a.current)) {
                      const o = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout((() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = o)
                      }))
                    }
                  },
                  i = e => {
                    e.target === n && (u.current = s(r.current))
                  };
                return n.addEventListener("animationstart", i), n.addEventListener("animationcancel", o), n.addEventListener("animationend", o), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", i), n.removeEventListener("animationcancel", o), n.removeEventListener("animationend", o)
                }
              }
              d("ANIMATION_END")
            }), [n, d]), {
              isPresent: ["mounted", "unmountSuspended"].includes(l),
              ref: o.useCallback((e => {
                e && (r.current = getComputedStyle(e)), t(e)
              }), [])
            }
          }(n), u = "function" == typeof t ? t({
            present: a.isPresent
          }) : o.Children.only(t), c = (0, r.s)(a.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(u));
          return "function" == typeof t || a.isPresent ? o.cloneElement(u, {
            ref: c
          }) : null
        };

      function s(e) {
        return e?.animationName || "none"
      }
      a.displayName = "Presence"
    },
    31873: (e, n, t) => {
      t.d(n, {
        hO: () => u,
        sG: () => s
      });
      var o = t(62229),
        r = t(44853),
        i = t(16741),
        a = t(91029),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, n) => {
          const t = o.forwardRef(((e, t) => {
            const {
              asChild: o,
              ...r
            } = e, s = o ? i.Slot : n;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(s, {
              ...r,
              ref: t
            })
          }));
          return t.displayName = `Primitive.${n}`, {
            ...e,
            [n]: t
          }
        }), {});

      function u(e, n) {
        e && r.flushSync((() => e.dispatchEvent(n)))
      }
    },
    59693: (e, n, t) => {
      t.d(n, {
        c: () => r
      });
      var o = t(62229);

      function r(e) {
        const n = o.useRef(e);
        return o.useEffect((() => {
          n.current = e
        })), o.useMemo((() => (...e) => n.current?.(...e)), [])
      }
    },
    91377: (e, n, t) => {
      t.d(n, {
        i: () => i
      });
      var o = t(62229),
        r = t(59693);

      function i({
        prop: e,
        defaultProp: n,
        onChange: t = (() => {})
      }) {
        const [i, a] = function({
          defaultProp: e,
          onChange: n
        }) {
          const t = o.useState(e),
            [i] = t,
            a = o.useRef(i),
            s = (0, r.c)(n);
          return o.useEffect((() => {
            a.current !== i && (s(i), a.current = i)
          }), [i, a, s]), t
        }({
          defaultProp: n,
          onChange: t
        }), s = void 0 !== e, u = s ? e : i, c = (0, r.c)(t);
        return [u, o.useCallback((n => {
          if (s) {
            const t = "function" == typeof n ? n(e) : n;
            t !== e && c(t)
          } else a(n)
        }), [s, e, a, c])]
      }
    },
    99935: (e, n, t) => {
      t.d(n, {
        U: () => i
      });
      var o = t(62229),
        r = t(59693);

      function i(e, n = globalThis?.document) {
        const t = (0, r.c)(e);
        o.useEffect((() => {
          const e = e => {
            "Escape" === e.key && t(e)
          };
          return n.addEventListener("keydown", e, {
            capture: !0
          }), () => n.removeEventListener("keydown", e, {
            capture: !0
          })
        }), [t, n])
      }
    },
    66698: (e, n, t) => {
      t.d(n, {
        N: () => r
      });
      var o = t(62229),
        r = Boolean(globalThis?.document) ? o.useLayoutEffect : () => {}
    },
    1371: (e, n, t) => {
      t.d(n, {
        Z: () => r
      });
      var o = t(62229);

      function r(e) {
        const n = o.useRef({
          value: e,
          previous: e
        });
        return o.useMemo((() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous)), [e])
      }
    }
  }
]);