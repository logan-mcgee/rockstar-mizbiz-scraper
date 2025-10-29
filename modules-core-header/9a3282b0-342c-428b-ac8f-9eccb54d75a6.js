try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9a3282b0-342c-428b-ac8f-9eccb54d75a6", e._sentryDebugIdIdentifier = "sentry-dbid-9a3282b0-342c-428b-ac8f-9eccb54d75a6")
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
  [9511], {
    20027: (e, n, t) => {
      t.d(n, {
        N: () => u
      });
      var o = t(71127),
        r = t(85426),
        a = t(95362),
        i = t(21222),
        s = t(42295);

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
            } = e, r = o.useRef(null), a = o.useRef(new Map).current;
            return (0, s.jsx)(c, {
              scope: n,
              itemMap: a,
              collectionRef: r,
              children: t
            })
          };
        d.displayName = n;
        const f = e + "CollectionSlot",
          v = (0, i.createSlot)(f),
          p = o.forwardRef(((e, n) => {
            const {
              scope: t,
              children: o
            } = e, r = l(f, t), i = (0, a.s)(n, r.collectionRef);
            return (0, s.jsx)(v, {
              ref: i,
              children: o
            })
          }));
        p.displayName = f;
        const g = e + "CollectionItemSlot",
          m = "data-radix-collection-item",
          w = (0, i.createSlot)(g),
          h = o.forwardRef(((e, n) => {
            const {
              scope: t,
              children: r,
              ...i
            } = e, u = o.useRef(null), c = (0, a.s)(n, u), d = l(g, t);
            return o.useEffect((() => (d.itemMap.set(u, {
              ref: u,
              ...i
            }), () => {
              d.itemMap.delete(u)
            }))), (0, s.jsx)(w, {
              [m]: "",
              ref: c,
              children: r
            })
          }));
        return h.displayName = g, [{
          Provider: d,
          Slot: p,
          ItemSlot: h
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
      Map
    },
    29044: (e, n, t) => {
      t.d(n, {
        Z: () => r
      });
      var o = t(71127);

      function r(e) {
        const n = o.useRef({
          value: e,
          previous: e
        });
        return o.useMemo((() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous)), [e])
      }
    },
    69511: (e, n, t) => {
      t.r(n), t.d(n, {
        Content: () => be,
        Indicator: () => Re,
        Item: () => we,
        Link: () => Me,
        List: () => me,
        NavigationMenu: () => P,
        NavigationMenuContent: () => X,
        NavigationMenuIndicator: () => q,
        NavigationMenuItem: () => z,
        NavigationMenuLink: () => W,
        NavigationMenuList: () => O,
        NavigationMenuSub: () => D,
        NavigationMenuTrigger: () => H,
        NavigationMenuViewport: () => te,
        Root: () => pe,
        Sub: () => ge,
        Trigger: () => he,
        Viewport: () => Ce,
        createNavigationMenuScope: () => T
      });
      var o = t(71127),
        r = t(18429),
        a = t(85426),
        i = t(94118),
        s = t(78004),
        u = t(79158),
        c = t(95362),
        l = t(77768),
        d = t(53146),
        f = t(74406),
        v = t(20027),
        p = t(89749),
        g = t(29044),
        m = t(63155),
        w = t(76286),
        h = t(63694),
        M = t(42295),
        R = "NavigationMenu",
        [b, C, y] = (0, v.N)(R),
        [x, N, E] = (0, v.N)(R),
        [_, T] = (0, a.A)(R, [y, E]),
        [j, I] = _(R),
        [k, S] = _(R),
        P = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            value: r,
            onValueChange: a,
            defaultValue: i,
            delayDuration: d = 200,
            skipDelayDuration: f = 300,
            orientation: v = "horizontal",
            dir: p,
            ...g
          } = e, [m, w] = o.useState(null), h = (0, c.s)(n, (e => w(e))), b = (0, l.jH)(p), C = o.useRef(0), y = o.useRef(0), x = o.useRef(0), [N, E] = o.useState(!0), [_, T] = (0, u.useControllableState)({
            prop: r,
            onChange: e => {
              const n = f > 0;
              "" !== e ? (window.clearTimeout(x.current), n && E(!1)) : (window.clearTimeout(x.current), x.current = window.setTimeout((() => E(!0)), f)), a?.(e)
            },
            defaultProp: i ?? "",
            caller: R
          }), j = o.useCallback((() => {
            window.clearTimeout(y.current), y.current = window.setTimeout((() => T("")), 150)
          }), [T]), I = o.useCallback((e => {
            window.clearTimeout(y.current), T(e)
          }), [T]), k = o.useCallback((e => {
            _ === e ? window.clearTimeout(y.current) : C.current = window.setTimeout((() => {
              window.clearTimeout(y.current), T(e)
            }), d)
          }), [_, T, d]);
          return o.useEffect((() => () => {
            window.clearTimeout(C.current), window.clearTimeout(y.current), window.clearTimeout(x.current)
          }), []), (0, M.jsx)(A, {
            scope: t,
            isRootMenu: !0,
            value: _,
            dir: b,
            orientation: v,
            rootNavigationMenu: m,
            onTriggerEnter: e => {
              window.clearTimeout(C.current), N ? k(e) : I(e)
            },
            onTriggerLeave: () => {
              window.clearTimeout(C.current), j()
            },
            onContentEnter: () => window.clearTimeout(y.current),
            onContentLeave: j,
            onItemSelect: e => {
              T((n => n === e ? "" : e))
            },
            onItemDismiss: () => T(""),
            children: (0, M.jsx)(s.sG.nav, {
              "aria-label": "Main",
              "data-orientation": v,
              dir: b,
              ...g,
              ref: h
            })
          })
        }));
      P.displayName = R;
      var L = "NavigationMenuSub",
        D = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            value: o,
            onValueChange: r,
            defaultValue: a,
            orientation: i = "horizontal",
            ...c
          } = e, l = I(L, t), [d, f] = (0, u.useControllableState)({
            prop: o,
            onChange: r,
            defaultProp: a ?? "",
            caller: L
          });
          return (0, M.jsx)(A, {
            scope: t,
            isRootMenu: !1,
            value: d,
            dir: l.dir,
            orientation: i,
            rootNavigationMenu: l.rootNavigationMenu,
            onTriggerEnter: e => f(e),
            onItemSelect: e => f(e),
            onItemDismiss: () => f(""),
            children: (0, M.jsx)(s.sG.div, {
              "data-orientation": i,
              ...c,
              ref: n
            })
          })
        }));
      D.displayName = L;
      var A = e => {
          const {
            scope: n,
            isRootMenu: t,
            rootNavigationMenu: r,
            dir: a,
            orientation: i,
            children: s,
            value: u,
            onItemSelect: c,
            onItemDismiss: l,
            onTriggerEnter: d,
            onTriggerLeave: v,
            onContentEnter: p,
            onContentLeave: m
          } = e, [h, R] = o.useState(null), [C, y] = o.useState(new Map), [x, N] = o.useState(null);
          return (0, M.jsx)(j, {
            scope: n,
            isRootMenu: t,
            rootNavigationMenu: r,
            value: u,
            previousValue: (0, g.Z)(u),
            baseId: (0, f.useId)(),
            dir: a,
            orientation: i,
            viewport: h,
            onViewportChange: R,
            indicatorTrack: x,
            onIndicatorTrackChange: N,
            onTriggerEnter: (0, w.c)(d),
            onTriggerLeave: (0, w.c)(v),
            onContentEnter: (0, w.c)(p),
            onContentLeave: (0, w.c)(m),
            onItemSelect: (0, w.c)(c),
            onItemDismiss: (0, w.c)(l),
            onViewportContentChange: o.useCallback(((e, n) => {
              y((t => (t.set(e, n), new Map(t))))
            }), []),
            onViewportContentRemove: o.useCallback((e => {
              y((n => n.has(e) ? (n.delete(e), new Map(n)) : n))
            }), []),
            children: (0, M.jsx)(b.Provider, {
              scope: n,
              children: (0, M.jsx)(k, {
                scope: n,
                items: C,
                children: s
              })
            })
          })
        },
        F = "NavigationMenuList",
        O = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            ...o
          } = e, r = I(F, t), a = (0, M.jsx)(s.sG.ul, {
            "data-orientation": r.orientation,
            ...o,
            ref: n
          });
          return (0, M.jsx)(s.sG.div, {
            style: {
              position: "relative"
            },
            ref: r.onIndicatorTrackChange,
            children: (0, M.jsx)(b.Slot, {
              scope: t,
              children: r.isRootMenu ? (0, M.jsx)(re, {
                asChild: !0,
                children: a
              }) : a
            })
          })
        }));
      O.displayName = F;
      var V = "NavigationMenuItem",
        [K, G] = _(V),
        z = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            value: r,
            ...a
          } = e, i = (0, f.useId)(), u = r || i || "LEGACY_REACT_AUTO_VALUE", c = o.useRef(null), l = o.useRef(null), d = o.useRef(null), v = o.useRef((() => {})), p = o.useRef(!1), g = o.useCallback(((e = "start") => {
            if (c.current) {
              v.current();
              const n = se(c.current);
              n.length && ue("start" === e ? n : n.reverse())
            }
          }), []), m = o.useCallback((() => {
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
          return (0, M.jsx)(K, {
            scope: t,
            value: u,
            triggerRef: l,
            contentRef: c,
            focusProxyRef: d,
            wasEscapeCloseRef: p,
            onEntryKeyDown: g,
            onFocusProxyEnter: g,
            onRootContentClose: m,
            onContentFocusOutside: m,
            children: (0, M.jsx)(s.sG.li, {
              ...a,
              ref: n
            })
          })
        }));
      z.displayName = V;
      var $ = "NavigationMenuTrigger",
        H = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            disabled: r,
            ...a
          } = e, u = I($, e.__scopeNavigationMenu), l = G($, e.__scopeNavigationMenu), d = o.useRef(null), f = (0, c.s)(d, l.triggerRef, n), v = de(u.baseId, l.value), p = fe(u.baseId, l.value), g = o.useRef(!1), m = o.useRef(!1), w = l.value === u.value;
          return (0, M.jsxs)(M.Fragment, {
            children: [(0, M.jsx)(b.ItemSlot, {
              scope: t,
              value: l.value,
              children: (0, M.jsx)(ie, {
                asChild: !0,
                children: (0, M.jsx)(s.sG.button, {
                  id: v,
                  disabled: r,
                  "data-disabled": r ? "" : void 0,
                  "data-state": le(w),
                  "aria-expanded": w,
                  "aria-controls": p,
                  ...a,
                  ref: f,
                  onPointerEnter: (0, i.m)(e.onPointerEnter, (() => {
                    m.current = !1, l.wasEscapeCloseRef.current = !1
                  })),
                  onPointerMove: (0, i.m)(e.onPointerMove, ve((() => {
                    r || m.current || l.wasEscapeCloseRef.current || g.current || (u.onTriggerEnter(l.value), g.current = !0)
                  }))),
                  onPointerLeave: (0, i.m)(e.onPointerLeave, ve((() => {
                    r || (u.onTriggerLeave(), g.current = !1)
                  }))),
                  onClick: (0, i.m)(e.onClick, (() => {
                    u.onItemSelect(l.value), m.current = w
                  })),
                  onKeyDown: (0, i.m)(e.onKeyDown, (e => {
                    const n = {
                      horizontal: "ArrowDown",
                      vertical: "rtl" === u.dir ? "ArrowLeft" : "ArrowRight"
                    } [u.orientation];
                    w && e.key === n && (l.onEntryKeyDown(), e.preventDefault())
                  }))
                })
              })
            }), w && (0, M.jsxs)(M.Fragment, {
              children: [(0, M.jsx)(h.Root, {
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
              }), u.viewport && (0, M.jsx)("span", {
                "aria-owns": p
              })]
            })]
          })
        }));
      H.displayName = $;
      var U = "navigationMenu.linkSelect",
        W = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            active: o,
            onSelect: r,
            ...a
          } = e;
          return (0, M.jsx)(ie, {
            asChild: !0,
            children: (0, M.jsx)(s.sG.a, {
              "data-active": o ? "" : void 0,
              "aria-current": o ? "page" : void 0,
              ...a,
              ref: n,
              onClick: (0, i.m)(e.onClick, (e => {
                const n = e.target,
                  t = new CustomEvent(U, {
                    bubbles: !0,
                    cancelable: !0
                  });
                if (n.addEventListener(U, (e => r?.(e)), {
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
      W.displayName = "NavigationMenuLink";
      var B = "NavigationMenuIndicator",
        q = o.forwardRef(((e, n) => {
          const {
            forceMount: t,
            ...o
          } = e, a = I(B, e.__scopeNavigationMenu), i = Boolean(a.value);
          return a.indicatorTrack ? r.createPortal((0, M.jsx)(d.C, {
            present: t || i,
            children: (0, M.jsx)(Y, {
              ...o,
              ref: n
            })
          }), a.indicatorTrack) : null
        }));
      q.displayName = B;
      var Y = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            ...r
          } = e, a = I(B, t), i = C(t), [u, c] = o.useState(null), [l, d] = o.useState(null), f = "horizontal" === a.orientation, v = Boolean(a.value);
          o.useEffect((() => {
            const e = i(),
              n = e.find((e => e.value === a.value))?.ref.current;
            n && c(n)
          }), [i, a.value]);
          const p = () => {
            u && d({
              size: f ? u.offsetWidth : u.offsetHeight,
              offset: f ? u.offsetLeft : u.offsetTop
            })
          };
          return ce(u, p), ce(a.indicatorTrack, p), l ? (0, M.jsx)(s.sG.div, {
            "aria-hidden": !0,
            "data-state": v ? "visible" : "hidden",
            "data-orientation": a.orientation,
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
          } = e, r = I(Z, e.__scopeNavigationMenu), a = G(Z, e.__scopeNavigationMenu), s = (0, c.s)(a.contentRef, n), u = a.value === r.value, l = {
            value: a.value,
            triggerRef: a.triggerRef,
            focusProxyRef: a.focusProxyRef,
            wasEscapeCloseRef: a.wasEscapeCloseRef,
            onContentFocusOutside: a.onContentFocusOutside,
            onRootContentClose: a.onRootContentClose,
            ...o
          };
          return r.viewport ? (0, M.jsx)(J, {
            forceMount: t,
            ...l,
            ref: s
          }) : (0, M.jsx)(d.C, {
            present: t || u,
            children: (0, M.jsx)(ee, {
              "data-state": le(u),
              ...l,
              ref: s,
              onPointerEnter: (0, i.m)(e.onPointerEnter, r.onContentEnter),
              onPointerLeave: (0, i.m)(e.onPointerLeave, ve(r.onContentLeave)),
              style: {
                pointerEvents: !u && r.isRootMenu ? "none" : void 0,
                ...l.style
              }
            })
          })
        }));
      X.displayName = Z;
      var J = o.forwardRef(((e, n) => {
          const t = I(Z, e.__scopeNavigationMenu),
            {
              onViewportContentChange: o,
              onViewportContentRemove: r
            } = t;
          return (0, m.N)((() => {
            o(e.value, {
              ref: n,
              ...e
            })
          }), [e, n, o]), (0, m.N)((() => () => r(e.value)), [e.value, r]), null
        })),
        Q = "navigationMenu.rootContentDismiss",
        ee = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            value: r,
            triggerRef: a,
            focusProxyRef: s,
            wasEscapeCloseRef: u,
            onRootContentClose: l,
            onContentFocusOutside: d,
            ...f
          } = e, v = I(Z, t), g = o.useRef(null), m = (0, c.s)(g, n), w = de(v.baseId, r), h = fe(v.baseId, r), R = C(t), b = o.useRef(null), {
            onItemDismiss: y
          } = v;
          o.useEffect((() => {
            const e = g.current;
            if (v.isRootMenu && e) {
              const n = () => {
                y(), l(), e.contains(document.activeElement) && a.current?.focus()
              };
              return e.addEventListener(Q, n), () => e.removeEventListener(Q, n)
            }
          }), [v.isRootMenu, e.value, a, y, l]);
          const x = o.useMemo((() => {
            const e = R().map((e => e.value));
            "rtl" === v.dir && e.reverse();
            const n = e.indexOf(v.value),
              t = e.indexOf(v.previousValue),
              o = r === v.value,
              a = t === e.indexOf(r);
            if (!o && !a) return b.current;
            const i = (() => {
              if (n !== t) {
                if (o && -1 !== t) return n > t ? "from-end" : "from-start";
                if (a && -1 !== n) return n > t ? "to-start" : "to-end"
              }
              return null
            })();
            return b.current = i, i
          }), [v.previousValue, v.value, v.dir, R, r]);
          return (0, M.jsx)(re, {
            asChild: !0,
            children: (0, M.jsx)(p.qW, {
              id: h,
              "aria-labelledby": w,
              "data-motion": x,
              "data-orientation": v.orientation,
              ...f,
              ref: m,
              disableOutsidePointerEvents: !1,
              onDismiss: () => {
                const e = new Event(Q, {
                  bubbles: !0,
                  cancelable: !0
                });
                g.current?.dispatchEvent(e)
              },
              onFocusOutside: (0, i.m)(e.onFocusOutside, (e => {
                d();
                const n = e.target;
                v.rootNavigationMenu?.contains(n) && e.preventDefault()
              })),
              onPointerDownOutside: (0, i.m)(e.onPointerDownOutside, (e => {
                const n = e.target,
                  t = R().some((e => e.ref.current?.contains(n))),
                  o = v.isRootMenu && v.viewport?.contains(n);
                (t || o || !v.isRootMenu) && e.preventDefault()
              })),
              onKeyDown: (0, i.m)(e.onKeyDown, (e => {
                const n = e.altKey || e.ctrlKey || e.metaKey;
                if ("Tab" === e.key && !n) {
                  const n = se(e.currentTarget),
                    t = document.activeElement,
                    o = n.findIndex((e => e === t));
                  ue(e.shiftKey ? n.slice(0, o).reverse() : n.slice(o + 1, n.length)) ? e.preventDefault() : s.current?.focus()
                }
              })),
              onEscapeKeyDown: (0, i.m)(e.onEscapeKeyDown, (e => {
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
          } = e, r = I(ne, e.__scopeNavigationMenu), a = Boolean(r.value);
          return (0, M.jsx)(d.C, {
            present: t || a,
            children: (0, M.jsx)(oe, {
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
            ...a
          } = e, u = I(ne, t), l = (0, c.s)(n, u.onViewportChange), f = S(Z, e.__scopeNavigationMenu), [v, p] = o.useState(null), [g, m] = o.useState(null), w = v ? v?.width + "px" : void 0, h = v ? v?.height + "px" : void 0, R = Boolean(u.value), b = R ? u.value : u.previousValue;
          return ce(g, (() => {
            g && p({
              width: g.offsetWidth,
              height: g.offsetHeight
            })
          })), (0, M.jsx)(s.sG.div, {
            "data-state": le(R),
            "data-orientation": u.orientation,
            ...a,
            ref: l,
            style: {
              pointerEvents: !R && u.isRootMenu ? "none" : void 0,
              "--radix-navigation-menu-viewport-width": w,
              "--radix-navigation-menu-viewport-height": h,
              ...a.style
            },
            onPointerEnter: (0, i.m)(e.onPointerEnter, u.onContentEnter),
            onPointerLeave: (0, i.m)(e.onPointerLeave, ve(u.onContentLeave)),
            children: Array.from(f.items).map((([e, {
              ref: n,
              forceMount: t,
              ...o
            }]) => {
              const r = b === e;
              return (0, M.jsx)(d.C, {
                present: t || r,
                children: (0, M.jsx)(ee, {
                  ...o,
                  ref: (0, c.t)(n, (e => {
                    r && e && m(e)
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
          } = e, r = I("FocusGroup", t);
          return (0, M.jsx)(x.Provider, {
            scope: t,
            children: (0, M.jsx)(x.Slot, {
              scope: t,
              children: (0, M.jsx)(s.sG.div, {
                dir: r.dir,
                ...o,
                ref: n
              })
            })
          })
        })),
        ae = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
        ie = o.forwardRef(((e, n) => {
          const {
            __scopeNavigationMenu: t,
            ...o
          } = e, r = N(t), a = I("FocusGroupItem", t);
          return (0, M.jsx)(x.ItemSlot, {
            scope: t,
            children: (0, M.jsx)(s.sG.button, {
              ...o,
              ref: n,
              onKeyDown: (0, i.m)(e.onKeyDown, (e => {
                if (["Home", "End", ...ae].includes(e.key)) {
                  let n = r().map((e => e.ref.current));
                  if (["rtl" === a.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(e.key) && n.reverse(), ae.includes(e.key)) {
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
        (0, m.N)((() => {
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
      var pe = P,
        ge = D,
        me = O,
        we = z,
        he = H,
        Me = W,
        Re = q,
        be = X,
        Ce = te
    },
    77768: (e, n, t) => {
      t.d(n, {
        jH: () => a
      });
      var o = t(71127),
        r = (t(42295), o.createContext(void 0));

      function a(e) {
        const n = o.useContext(r);
        return e || n || "ltr"
      }
    }
  }
]);