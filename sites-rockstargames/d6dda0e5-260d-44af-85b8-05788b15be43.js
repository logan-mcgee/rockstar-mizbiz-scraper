try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "d6dda0e5-260d-44af-85b8-05788b15be43", e._sentryDebugIdIdentifier = "sentry-dbid-d6dda0e5-260d-44af-85b8-05788b15be43")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7088], {
    98706(e, r, o) {
      o.d(r, {
        UC: () => de,
        Y9: () => se,
        q7: () => ie,
        bL: () => ae,
        l9: () => le
      });
      var t = o(93082),
        n = o(54958),
        a = o(65324),
        i = o(64239),
        s = o(39467),
        l = o(17038),
        d = o(80082),
        c = o(10198),
        p = o(66624),
        u = o(94296),
        f = o(39793),
        h = "Collapsible",
        [g, m] = (0, n.A)(h),
        [v, b] = g(h),
        w = t.forwardRef((e, r) => {
          const {
            __scopeCollapsible: o,
            open: n,
            defaultOpen: a,
            disabled: i,
            onOpenChange: s,
            ...c
          } = e, [p, g] = (0, l.i)({
            prop: n,
            defaultProp: a ?? !1,
            onChange: s,
            caller: h
          });
          return (0, f.jsx)(v, {
            scope: o,
            disabled: i,
            contentId: (0, u.B)(),
            open: p,
            onOpenToggle: t.useCallback(() => g(e => !e), [g]),
            children: (0, f.jsx)(d.sG.div, {
              "data-state": R(p),
              "data-disabled": i ? "" : void 0,
              ...c,
              ref: r
            })
          })
        });
      w.displayName = h;
      var x = "CollapsibleTrigger",
        y = t.forwardRef((e, r) => {
          const {
            __scopeCollapsible: o,
            ...t
          } = e, n = b(x, o);
          return (0, f.jsx)(d.sG.button, {
            type: "button",
            "aria-controls": n.open ? n.contentId : void 0,
            "aria-expanded": n.open || !1,
            "data-state": R(n.open),
            "data-disabled": n.disabled ? "" : void 0,
            disabled: n.disabled,
            ...t,
            ref: r,
            onClick: (0, s.mK)(e.onClick, n.onOpenToggle)
          })
        });
      y.displayName = x;
      var C = "CollapsibleContent",
        _ = t.forwardRef((e, r) => {
          const {
            forceMount: o,
            ...t
          } = e, n = b(C, e.__scopeCollapsible);
          return (0, f.jsx)(p.C, {
            present: o || n.open,
            children: ({
              present: e
            }) => (0, f.jsx)(A, {
              ...t,
              ref: r,
              present: e
            })
          })
        });
      _.displayName = C;
      var A = t.forwardRef((e, r) => {
        const {
          __scopeCollapsible: o,
          present: n,
          children: a,
          ...s
        } = e, l = b(C, o), [p, u] = t.useState(n), h = t.useRef(null), g = (0, i.s)(r, h), m = t.useRef(0), v = m.current, w = t.useRef(0), x = w.current, y = l.open || p, _ = t.useRef(y), A = t.useRef(void 0);
        return t.useEffect(() => {
          const e = requestAnimationFrame(() => _.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, c.N)(() => {
          const e = h.current;
          if (e) {
            A.current = A.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const r = e.getBoundingClientRect();
            m.current = r.height, w.current = r.width, _.current || (e.style.transitionDuration = A.current.transitionDuration, e.style.animationName = A.current.animationName), u(n)
          }
        }, [l.open, n]), (0, f.jsx)(d.sG.div, {
          "data-state": R(l.open),
          "data-disabled": l.disabled ? "" : void 0,
          id: l.contentId,
          hidden: !y,
          ...s,
          ref: g,
          style: {
            "--radix-collapsible-content-height": v ? `${v}px` : void 0,
            "--radix-collapsible-content-width": x ? `${x}px` : void 0,
            ...e.style
          },
          children: y && a
        })
      });

      function R(e) {
        return e ? "open" : "closed"
      }
      var j = w,
        P = y,
        O = _,
        k = o(99136),
        N = "Accordion",
        D = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [I, M, E] = (0, a.N)(N),
        [S, F] = (0, n.A)(N, [E, m]),
        T = m(),
        $ = t.forwardRef((e, r) => {
          const {
            type: o,
            ...t
          } = e, n = t, a = t;
          return (0, f.jsx)(I.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === o ? (0, f.jsx)(U, {
              ...a,
              ref: r
            }) : (0, f.jsx)(G, {
              ...n,
              ref: r
            })
          })
        });
      $.displayName = N;
      var [K, B] = S(N), [H, L] = S(N, {
        collapsible: !1
      }), G = t.forwardRef((e, r) => {
        const {
          value: o,
          defaultValue: n,
          onValueChange: a = () => {},
          collapsible: i = !1,
          ...s
        } = e, [d, c] = (0, l.i)({
          prop: o,
          defaultProp: n ?? "",
          onChange: a,
          caller: N
        });
        return (0, f.jsx)(K, {
          scope: e.__scopeAccordion,
          value: t.useMemo(() => d ? [d] : [], [d]),
          onItemOpen: c,
          onItemClose: t.useCallback(() => i && c(""), [i, c]),
          children: (0, f.jsx)(H, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: (0, f.jsx)(W, {
              ...s,
              ref: r
            })
          })
        })
      }), U = t.forwardRef((e, r) => {
        const {
          value: o,
          defaultValue: n,
          onValueChange: a = () => {},
          ...i
        } = e, [s, d] = (0, l.i)({
          prop: o,
          defaultProp: n ?? [],
          onChange: a,
          caller: N
        }), c = t.useCallback(e => d((r = []) => [...r, e]), [d]), p = t.useCallback(e => d((r = []) => r.filter(r => r !== e)), [d]);
        return (0, f.jsx)(K, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: c,
          onItemClose: p,
          children: (0, f.jsx)(H, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, f.jsx)(W, {
              ...i,
              ref: r
            })
          })
        })
      }), [z, Y] = S(N), W = t.forwardRef((e, r) => {
        const {
          __scopeAccordion: o,
          disabled: n,
          dir: a,
          orientation: l = "vertical",
          ...c
        } = e, p = t.useRef(null), u = (0, i.s)(p, r), h = M(o), g = "ltr" === (0, k.jH)(a), m = (0, s.mK)(e.onKeyDown, e => {
          if (!D.includes(e.key)) return;
          const r = e.target,
            o = h().filter(e => !e.ref.current?.disabled),
            t = o.findIndex(e => e.ref.current === r),
            n = o.length;
          if (-1 === t) return;
          e.preventDefault();
          let a = t;
          const i = n - 1,
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
              "horizontal" === l && (g ? s() : d());
              break;
            case "ArrowDown":
              "vertical" === l && s();
              break;
            case "ArrowLeft":
              "horizontal" === l && (g ? d() : s());
              break;
            case "ArrowUp":
              "vertical" === l && d()
          }
          const c = a % n;
          o[c].ref.current?.focus()
        });
        return (0, f.jsx)(z, {
          scope: o,
          disabled: n,
          direction: a,
          orientation: l,
          children: (0, f.jsx)(I.Slot, {
            scope: o,
            children: (0, f.jsx)(d.sG.div, {
              ...c,
              "data-orientation": l,
              ref: u,
              onKeyDown: n ? void 0 : m
            })
          })
        })
      }), q = "AccordionItem", [X, V] = S(q), Z = t.forwardRef((e, r) => {
        const {
          __scopeAccordion: o,
          value: t,
          ...n
        } = e, a = Y(q, o), i = B(q, o), s = T(o), l = (0, u.B)(), d = t && i.value.includes(t) || !1, c = a.disabled || e.disabled;
        return (0, f.jsx)(X, {
          scope: o,
          open: d,
          disabled: c,
          triggerId: l,
          children: (0, f.jsx)(j, {
            "data-orientation": a.orientation,
            "data-state": ne(d),
            ...s,
            ...n,
            ref: r,
            disabled: c,
            open: d,
            onOpenChange: e => {
              e ? i.onItemOpen(t) : i.onItemClose(t)
            }
          })
        })
      });
      Z.displayName = q;
      var J = "AccordionHeader",
        Q = t.forwardRef((e, r) => {
          const {
            __scopeAccordion: o,
            ...t
          } = e, n = Y(N, o), a = V(J, o);
          return (0, f.jsx)(d.sG.h3, {
            "data-orientation": n.orientation,
            "data-state": ne(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...t,
            ref: r
          })
        });
      Q.displayName = J;
      var ee = "AccordionTrigger",
        re = t.forwardRef((e, r) => {
          const {
            __scopeAccordion: o,
            ...t
          } = e, n = Y(N, o), a = V(ee, o), i = L(ee, o), s = T(o);
          return (0, f.jsx)(I.ItemSlot, {
            scope: o,
            children: (0, f.jsx)(P, {
              "aria-disabled": a.open && !i.collapsible || void 0,
              "data-orientation": n.orientation,
              id: a.triggerId,
              ...s,
              ...t,
              ref: r
            })
          })
        });
      re.displayName = ee;
      var oe = "AccordionContent",
        te = t.forwardRef((e, r) => {
          const {
            __scopeAccordion: o,
            ...t
          } = e, n = Y(N, o), a = V(oe, o), i = T(o);
          return (0, f.jsx)(O, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": n.orientation,
            ...i,
            ...t,
            ref: r,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        });

      function ne(e) {
        return e ? "open" : "closed"
      }
      te.displayName = oe;
      var ae = $,
        ie = Z,
        se = Q,
        le = re,
        de = te
    },
    65324(e, r, o) {
      o.d(r, {
        N: () => l
      });
      var t = o(93082),
        n = o(54958),
        a = o(64239),
        i = o(17172),
        s = o(39793);

      function l(e) {
        const r = e + "CollectionProvider",
          [o, l] = (0, n.A)(r),
          [d, c] = o(r, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          p = e => {
            const {
              scope: r,
              children: o
            } = e, n = t.useRef(null), a = t.useRef(new Map).current;
            return (0, s.jsx)(d, {
              scope: r,
              itemMap: a,
              collectionRef: n,
              children: o
            })
          };
        p.displayName = r;
        const u = e + "CollectionSlot",
          f = (0, i.TL)(u),
          h = t.forwardRef((e, r) => {
            const {
              scope: o,
              children: t
            } = e, n = c(u, o), i = (0, a.s)(r, n.collectionRef);
            return (0, s.jsx)(f, {
              ref: i,
              children: t
            })
          });
        h.displayName = u;
        const g = e + "CollectionItemSlot",
          m = "data-radix-collection-item",
          v = (0, i.TL)(g),
          b = t.forwardRef((e, r) => {
            const {
              scope: o,
              children: n,
              ...i
            } = e, l = t.useRef(null), d = (0, a.s)(r, l), p = c(g, o);
            return t.useEffect(() => (p.itemMap.set(l, {
              ref: l,
              ...i
            }), () => {
              p.itemMap.delete(l)
            })), (0, s.jsx)(v, {
              [m]: "",
              ref: d,
              children: n
            })
          });
        return b.displayName = g, [{
          Provider: p,
          Slot: h,
          ItemSlot: b
        }, function(r) {
          const o = c(e + "CollectionConsumer", r);
          return t.useCallback(() => {
            const e = o.collectionRef.current;
            if (!e) return [];
            const r = Array.from(e.querySelectorAll(`[${m}]`));
            return Array.from(o.itemMap.values()).sort((e, o) => r.indexOf(e.ref.current) - r.indexOf(o.ref.current))
          }, [o.collectionRef, o.itemMap])
        }, l]
      }
      Map
    },
    60241(e, r, o) {
      o.d(r, {
        Mz: () => Y,
        UC: () => X,
        ZL: () => q,
        bL: () => z,
        bm: () => V,
        i3: () => Z,
        l9: () => W
      });
      var t = o(93082),
        n = o(39467),
        a = o(64239),
        i = o(54958),
        s = o(96356),
        l = o(38174),
        d = o(96739),
        c = o(94296),
        p = o(96585),
        u = o(36810),
        f = o(66624),
        h = o(80082),
        g = o(17172),
        m = o(17038),
        v = o(45787),
        b = o(38100),
        w = o(39793),
        x = "Popover",
        [y, C] = (0, i.A)(x, [p.Bk]),
        _ = (0, p.Bk)(),
        [A, R] = y(x),
        j = e => {
          const {
            __scopePopover: r,
            children: o,
            open: n,
            defaultOpen: a,
            onOpenChange: i,
            modal: s = !1
          } = e, l = _(r), d = t.useRef(null), [u, f] = t.useState(!1), [h, g] = (0, m.i)({
            prop: n,
            defaultProp: a ?? !1,
            onChange: i,
            caller: x
          });
          return (0, w.jsx)(p.bL, {
            ...l,
            children: (0, w.jsx)(A, {
              scope: r,
              contentId: (0, c.B)(),
              triggerRef: d,
              open: h,
              onOpenChange: g,
              onOpenToggle: t.useCallback(() => g(e => !e), [g]),
              hasCustomAnchor: u,
              onCustomAnchorAdd: t.useCallback(() => f(!0), []),
              onCustomAnchorRemove: t.useCallback(() => f(!1), []),
              modal: s,
              children: o
            })
          })
        };
      j.displayName = x;
      var P = "PopoverAnchor",
        O = t.forwardRef((e, r) => {
          const {
            __scopePopover: o,
            ...n
          } = e, a = R(P, o), i = _(o), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: l
          } = a;
          return t.useEffect(() => (s(), () => l()), [s, l]), (0, w.jsx)(p.Mz, {
            ...i,
            ...n,
            ref: r
          })
        });
      O.displayName = P;
      var k = "PopoverTrigger",
        N = t.forwardRef((e, r) => {
          const {
            __scopePopover: o,
            ...t
          } = e, i = R(k, o), s = _(o), l = (0, a.s)(r, i.triggerRef), d = (0, w.jsx)(h.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.open ? i.contentId : void 0,
            "data-state": U(i.open),
            ...t,
            ref: l,
            onClick: (0, n.mK)(e.onClick, i.onOpenToggle)
          });
          return i.hasCustomAnchor ? d : (0, w.jsx)(p.Mz, {
            asChild: !0,
            ...s,
            children: d
          })
        });
      N.displayName = k;
      var D = "PopoverPortal",
        [I, M] = y(D, {
          forceMount: void 0
        }),
        E = e => {
          const {
            __scopePopover: r,
            forceMount: o,
            children: t,
            container: n
          } = e, a = R(D, r);
          return (0, w.jsx)(I, {
            scope: r,
            forceMount: o,
            children: (0, w.jsx)(f.C, {
              present: o || a.open,
              children: (0, w.jsx)(u.Z, {
                asChild: !0,
                container: n,
                children: t
              })
            })
          })
        };
      E.displayName = D;
      var S = "PopoverContent",
        F = t.forwardRef((e, r) => {
          const o = M(S, e.__scopePopover),
            {
              forceMount: t = o.forceMount,
              ...n
            } = e,
            a = R(S, e.__scopePopover);
          return (0, w.jsx)(f.C, {
            present: t || a.open,
            children: a.modal ? (0, w.jsx)($, {
              ...n,
              ref: r
            }) : (0, w.jsx)(K, {
              ...n,
              ref: r
            })
          })
        });
      F.displayName = S;
      var T = (0, g.TL)("PopoverContent.RemoveScroll"),
        $ = t.forwardRef((e, r) => {
          const o = R(S, e.__scopePopover),
            i = t.useRef(null),
            s = (0, a.s)(r, i),
            l = t.useRef(!1);
          return t.useEffect(() => {
            const e = i.current;
            if (e) return (0, v.Eq)(e)
          }, []), (0, w.jsx)(b.A, {
            as: T,
            allowPinchZoom: !0,
            children: (0, w.jsx)(B, {
              ...e,
              ref: s,
              trapFocus: o.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, n.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), l.current || o.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, n.mK)(e.onPointerDownOutside, e => {
                const r = e.detail.originalEvent,
                  o = 0 === r.button && !0 === r.ctrlKey,
                  t = 2 === r.button || o;
                l.current = t
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, n.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        K = t.forwardRef((e, r) => {
          const o = R(S, e.__scopePopover),
            n = t.useRef(!1),
            a = t.useRef(!1);
          return (0, w.jsx)(B, {
            ...e,
            ref: r,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: r => {
              e.onCloseAutoFocus?.(r), r.defaultPrevented || (n.current || o.triggerRef.current?.focus(), r.preventDefault()), n.current = !1, a.current = !1
            },
            onInteractOutside: r => {
              e.onInteractOutside?.(r), r.defaultPrevented || (n.current = !0, "pointerdown" === r.detail.originalEvent.type && (a.current = !0));
              const t = r.target,
                i = o.triggerRef.current?.contains(t);
              i && r.preventDefault(), "focusin" === r.detail.originalEvent.type && a.current && r.preventDefault()
            }
          })
        }),
        B = t.forwardRef((e, r) => {
          const {
            __scopePopover: o,
            trapFocus: t,
            onOpenAutoFocus: n,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: i,
            onEscapeKeyDown: c,
            onPointerDownOutside: u,
            onFocusOutside: f,
            onInteractOutside: h,
            ...g
          } = e, m = R(S, o), v = _(o);
          return (0, l.Oh)(), (0, w.jsx)(d.n, {
            asChild: !0,
            loop: !0,
            trapped: t,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            children: (0, w.jsx)(s.qW, {
              asChild: !0,
              disableOutsidePointerEvents: i,
              onInteractOutside: h,
              onEscapeKeyDown: c,
              onPointerDownOutside: u,
              onFocusOutside: f,
              onDismiss: () => m.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, w.jsx)(p.UC, {
                "data-state": U(m.open),
                role: "dialog",
                id: m.contentId,
                ...v,
                ...g,
                ref: r,
                style: {
                  ...g.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              })
            })
          })
        }),
        H = "PopoverClose",
        L = t.forwardRef((e, r) => {
          const {
            __scopePopover: o,
            ...t
          } = e, a = R(H, o);
          return (0, w.jsx)(h.sG.button, {
            type: "button",
            ...t,
            ref: r,
            onClick: (0, n.mK)(e.onClick, () => a.onOpenChange(!1))
          })
        });
      L.displayName = H;
      var G = t.forwardRef((e, r) => {
        const {
          __scopePopover: o,
          ...t
        } = e, n = _(o);
        return (0, w.jsx)(p.i3, {
          ...n,
          ...t,
          ref: r
        })
      });

      function U(e) {
        return e ? "open" : "closed"
      }
      G.displayName = "PopoverArrow";
      var z = j,
        Y = O,
        W = N,
        q = E,
        X = F,
        V = L,
        Z = G
    },
    96585(e, r, o) {
      o.d(r, {
        Mz: () => E,
        i3: () => F,
        UC: () => S,
        bL: () => M,
        Bk: () => v
      });
      var t = o(93082),
        n = o(17966),
        a = o(10376),
        i = o(80082),
        s = o(39793),
        l = t.forwardRef((e, r) => {
          const {
            children: o,
            width: t = 10,
            height: n = 5,
            ...a
          } = e;
          return (0, s.jsx)(i.sG.svg, {
            ...a,
            ref: r,
            width: t,
            height: n,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? o : (0, s.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      l.displayName = "Arrow";
      var d = l,
        c = o(64239),
        p = o(54958),
        u = o(94660),
        f = o(10198),
        h = o(5024),
        g = "Popper",
        [m, v] = (0, p.A)(g),
        [b, w] = m(g),
        x = e => {
          const {
            __scopePopper: r,
            children: o
          } = e, [n, a] = t.useState(null), [i, l] = t.useState(void 0);
          return (0, s.jsx)(b, {
            scope: r,
            anchor: n,
            onAnchorChange: a,
            placementState: i,
            setPlacementState: l,
            children: o
          })
        };
      x.displayName = g;
      var y = "PopperAnchor",
        C = t.forwardRef((e, r) => {
          const {
            __scopePopper: o,
            virtualRef: n,
            ...a
          } = e, l = w(y, o), d = t.useRef(null), p = l.onAnchorChange, u = t.useCallback(e => {
            d.current = e, e && p(e)
          }, [p]), f = (0, c.s)(r, u), h = t.useRef(null);
          t.useEffect(() => {
            if (!n) return;
            const e = h.current;
            h.current = n.current, e !== h.current && p(h.current)
          });
          const g = l.placementState && I(l.placementState),
            m = g?.[0],
            v = g?.[1];
          return n ? null : (0, s.jsx)(i.sG.div, {
            "data-radix-popper-side": m,
            "data-radix-popper-align": v,
            ...a,
            ref: f
          })
        });
      C.displayName = y;
      var _ = "PopperContent",
        [A, R] = m(_),
        j = t.forwardRef((e, r) => {
          const {
            __scopePopper: o,
            side: l = "bottom",
            sideOffset: d = 0,
            align: p = "center",
            alignOffset: g = 0,
            arrowPadding: m = 0,
            avoidCollisions: v = !0,
            collisionBoundary: b = [],
            collisionPadding: x = 0,
            sticky: y = "partial",
            hideWhenDetached: C = !1,
            updatePositionStrategy: R = "optimized",
            onPlaced: j,
            ...P
          } = e, O = w(_, o), [k, M] = t.useState(null), E = (0, c.s)(r, e => M(e)), [S, F] = t.useState(null), T = (0, h.X)(S), $ = T?.width ?? 0, K = T?.height ?? 0, B = l + ("center" !== p ? "-" + p : ""), H = "number" == typeof x ? x : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...x
          }, L = Array.isArray(b) ? b : [b], G = L.length > 0, U = {
            padding: H,
            boundary: L.filter(N),
            altBoundary: G
          }, {
            refs: z,
            floatingStyles: Y,
            placement: W,
            isPositioned: q,
            middlewareData: X
          } = (0, n.we)({
            strategy: "fixed",
            placement: B,
            whileElementsMounted: (...e) => (0, a.ll)(...e, {
              animationFrame: "always" === R
            }),
            elements: {
              reference: O.anchor
            },
            middleware: [(0, n.cY)({
              mainAxis: d + K,
              alignmentAxis: g
            }), v && (0, n.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === y ? (0, n.ER)() : void 0,
              ...U
            }), v && (0, n.UU)({
              ...U
            }), (0, n.Ej)({
              ...U,
              apply: ({
                elements: e,
                rects: r,
                availableWidth: o,
                availableHeight: t
              }) => {
                const {
                  width: n,
                  height: a
                } = r.reference, i = e.floating.style;
                i.setProperty("--radix-popper-available-width", `${o}px`), i.setProperty("--radix-popper-available-height", `${t}px`), i.setProperty("--radix-popper-anchor-width", `${n}px`), i.setProperty("--radix-popper-anchor-height", `${a}px`)
              }
            }), S && (0, n.UE)({
              element: S,
              padding: m
            }), D({
              arrowWidth: $,
              arrowHeight: K
            }), C && (0, n.jD)({
              strategy: "referenceHidden",
              ...U,
              boundary: G ? U.boundary : void 0
            })]
          }), V = O.setPlacementState;
          (0, f.N)(() => (V(W), () => {
            V(void 0)
          }), [W, V]);
          const [Z, J] = I(W), Q = (0, u.c)(j);
          (0, f.N)(() => {
            q && Q?.()
          }, [q, Q]);
          const ee = X.arrow?.x,
            re = X.arrow?.y,
            oe = 0 !== X.arrow?.centerOffset,
            [te, ne] = t.useState();
          return (0, f.N)(() => {
            k && ne(window.getComputedStyle(k).zIndex)
          }, [k]), (0, s.jsx)("div", {
            ref: z.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...Y,
              transform: q ? Y.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: te,
              "--radix-popper-transform-origin": [X.transformOrigin?.x, X.transformOrigin?.y].join(" "),
              ...X.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, s.jsx)(A, {
              scope: o,
              placedSide: Z,
              placedAlign: J,
              onArrowChange: F,
              arrowX: ee,
              arrowY: re,
              shouldHideArrow: oe,
              children: (0, s.jsx)(i.sG.div, {
                "data-side": Z,
                "data-align": J,
                ...P,
                ref: E,
                style: {
                  ...P.style,
                  animation: q ? void 0 : "none"
                }
              })
            })
          })
        });
      j.displayName = _;
      var P = "PopperArrow",
        O = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        k = t.forwardRef(function(e, r) {
          const {
            __scopePopper: o,
            ...t
          } = e, n = R(P, o), a = O[n.placedSide];
          return (0, s.jsx)("span", {
            ref: n.onArrowChange,
            style: {
              position: "absolute",
              left: n.arrowX,
              top: n.arrowY,
              [a]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [n.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [n.placedSide],
              visibility: n.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, s.jsx)(d, {
              ...t,
              ref: r,
              style: {
                ...t.style,
                display: "block"
              }
            })
          })
        });

      function N(e) {
        return null !== e
      }
      k.displayName = P;
      var D = e => ({
        name: "transformOrigin",
        options: e,
        fn(r) {
          const {
            placement: o,
            rects: t,
            middlewareData: n
          } = r, a = 0 !== n.arrow?.centerOffset, i = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [l, d] = I(o), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [d], p = (n.arrow?.x ?? 0) + i / 2, u = (n.arrow?.y ?? 0) + s / 2;
          let f = "",
            h = "";
          return "bottom" === l ? (f = a ? c : `${p}px`, h = -s + "px") : "top" === l ? (f = a ? c : `${p}px`, h = `${t.floating.height+s}px`) : "right" === l ? (f = -s + "px", h = a ? c : `${u}px`) : "left" === l && (f = `${t.floating.width+s}px`, h = a ? c : `${u}px`), {
            data: {
              x: f,
              y: h
            }
          }
        }
      });

      function I(e) {
        const [r, o = "center"] = e.split("-");
        return [r, o]
      }
      var M = x,
        E = C,
        S = j,
        F = k
    }
  }
]);