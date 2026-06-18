try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "8916eb9b-e154-4c74-ac03-1d0e5724262b", e._sentryDebugIdIdentifier = "sentry-dbid-8916eb9b-e154-4c74-ac03-1d0e5724262b")
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
  [90], {
    23028(e, r, o) {
      o.d(r, {
        N: () => l
      });
      var t = o(93082),
        n = o(53582),
        a = o(50446),
        s = o(2976),
        i = o(39793);

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
            return (0, i.jsx)(d, {
              scope: r,
              itemMap: a,
              collectionRef: n,
              children: o
            })
          };
        p.displayName = r;
        const u = e + "CollectionSlot",
          f = (0, s.TL)(u),
          h = t.forwardRef((e, r) => {
            const {
              scope: o,
              children: t
            } = e, n = c(u, o), s = (0, a.s)(r, n.collectionRef);
            return (0, i.jsx)(f, {
              ref: s,
              children: t
            })
          });
        h.displayName = u;
        const g = e + "CollectionItemSlot",
          m = "data-radix-collection-item",
          v = (0, s.TL)(g),
          w = t.forwardRef((e, r) => {
            const {
              scope: o,
              children: n,
              ...s
            } = e, l = t.useRef(null), d = (0, a.s)(r, l), p = c(g, o);
            return t.useEffect(() => (p.itemMap.set(l, {
              ref: l,
              ...s
            }), () => {
              p.itemMap.delete(l)
            })), (0, i.jsx)(v, {
              [m]: "",
              ref: d,
              children: n
            })
          });
        return w.displayName = g, [{
          Provider: p,
          Slot: h,
          ItemSlot: w
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
    41421(e, r, o) {
      o.d(r, {
        Mz: () => Y,
        UC: () => q,
        ZL: () => X,
        bL: () => W,
        bm: () => Z,
        i3: () => Q,
        l9: () => G
      });
      var t = o(93082),
        n = o(8316),
        a = o(50446),
        s = o(53582),
        i = o(99523),
        l = o(91685),
        d = o(83876),
        c = o(96883),
        p = o(26293),
        u = o(2823),
        f = o(47306),
        h = o(66704),
        g = o(2976),
        m = o(1531),
        v = o(45787),
        w = o(35328),
        y = o(39793),
        b = "Popover",
        [x, P] = (0, s.A)(b, [p.Bk]),
        C = (0, p.Bk)(),
        [_, R] = x(b),
        A = e => {
          const {
            __scopePopover: r,
            children: o,
            open: n,
            defaultOpen: a,
            onOpenChange: s,
            modal: i = !1
          } = e, l = C(r), d = t.useRef(null), [u, f] = t.useState(!1), [h, g] = (0, m.i)({
            prop: n,
            defaultProp: a ?? !1,
            onChange: s,
            caller: b
          });
          return (0, y.jsx)(p.bL, {
            ...l,
            children: (0, y.jsx)(_, {
              scope: r,
              contentId: (0, c.B)(),
              triggerRef: d,
              open: h,
              onOpenChange: g,
              onOpenToggle: t.useCallback(() => g(e => !e), [g]),
              hasCustomAnchor: u,
              onCustomAnchorAdd: t.useCallback(() => f(!0), []),
              onCustomAnchorRemove: t.useCallback(() => f(!1), []),
              modal: i,
              children: o
            })
          })
        };
      A.displayName = b;
      var j = "PopoverAnchor",
        O = t.forwardRef((e, r) => {
          const {
            __scopePopover: o,
            ...n
          } = e, a = R(j, o), s = C(o), {
            onCustomAnchorAdd: i,
            onCustomAnchorRemove: l
          } = a;
          return t.useEffect(() => (i(), () => l()), [i, l]), (0, y.jsx)(p.Mz, {
            ...s,
            ...n,
            ref: r
          })
        });
      O.displayName = j;
      var k = "PopoverTrigger",
        M = t.forwardRef((e, r) => {
          const {
            __scopePopover: o,
            ...t
          } = e, s = R(k, o), i = C(o), l = (0, a.s)(r, s.triggerRef), d = (0, y.jsx)(h.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": U(s.open),
            ...t,
            ref: l,
            onClick: (0, n.mK)(e.onClick, s.onOpenToggle)
          });
          return s.hasCustomAnchor ? d : (0, y.jsx)(p.Mz, {
            asChild: !0,
            ...i,
            children: d
          })
        });
      M.displayName = k;
      var E = "PopoverPortal",
        [D, N] = x(E, {
          forceMount: void 0
        }),
        S = e => {
          const {
            __scopePopover: r,
            forceMount: o,
            children: t,
            container: n
          } = e, a = R(E, r);
          return (0, y.jsx)(D, {
            scope: r,
            forceMount: o,
            children: (0, y.jsx)(f.C, {
              present: o || a.open,
              children: (0, y.jsx)(u.Z, {
                asChild: !0,
                container: n,
                children: t
              })
            })
          })
        };
      S.displayName = E;
      var F = "PopoverContent",
        I = t.forwardRef((e, r) => {
          const o = N(F, e.__scopePopover),
            {
              forceMount: t = o.forceMount,
              ...n
            } = e,
            a = R(F, e.__scopePopover);
          return (0, y.jsx)(f.C, {
            present: t || a.open,
            children: a.modal ? (0, y.jsx)($, {
              ...n,
              ref: r
            }) : (0, y.jsx)(L, {
              ...n,
              ref: r
            })
          })
        });
      I.displayName = F;
      var T = (0, g.TL)("PopoverContent.RemoveScroll"),
        $ = t.forwardRef((e, r) => {
          const o = R(F, e.__scopePopover),
            s = t.useRef(null),
            i = (0, a.s)(r, s),
            l = t.useRef(!1);
          return t.useEffect(() => {
            const e = s.current;
            if (e) return (0, v.Eq)(e)
          }, []), (0, y.jsx)(w.A, {
            as: T,
            allowPinchZoom: !0,
            children: (0, y.jsx)(z, {
              ...e,
              ref: i,
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
        L = t.forwardRef((e, r) => {
          const o = R(F, e.__scopePopover),
            n = t.useRef(!1),
            a = t.useRef(!1);
          return (0, y.jsx)(z, {
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
                s = o.triggerRef.current?.contains(t);
              s && r.preventDefault(), "focusin" === r.detail.originalEvent.type && a.current && r.preventDefault()
            }
          })
        }),
        z = t.forwardRef((e, r) => {
          const {
            __scopePopover: o,
            trapFocus: t,
            onOpenAutoFocus: n,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: c,
            onPointerDownOutside: u,
            onFocusOutside: f,
            onInteractOutside: h,
            ...g
          } = e, m = R(F, o), v = C(o);
          return (0, l.Oh)(), (0, y.jsx)(d.n, {
            asChild: !0,
            loop: !0,
            trapped: t,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            children: (0, y.jsx)(i.qW, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: h,
              onEscapeKeyDown: c,
              onPointerDownOutside: u,
              onFocusOutside: f,
              onDismiss: () => m.onOpenChange(!1),
              children: (0, y.jsx)(p.UC, {
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
        B = "PopoverClose",
        H = t.forwardRef((e, r) => {
          const {
            __scopePopover: o,
            ...t
          } = e, a = R(B, o);
          return (0, y.jsx)(h.sG.button, {
            type: "button",
            ...t,
            ref: r,
            onClick: (0, n.mK)(e.onClick, () => a.onOpenChange(!1))
          })
        });
      H.displayName = B;
      var K = t.forwardRef((e, r) => {
        const {
          __scopePopover: o,
          ...t
        } = e, n = C(o);
        return (0, y.jsx)(p.i3, {
          ...n,
          ...t,
          ref: r
        })
      });

      function U(e) {
        return e ? "open" : "closed"
      }
      K.displayName = "PopoverArrow";
      var W = A,
        Y = O,
        G = M,
        X = S,
        q = I,
        Z = H,
        Q = K
    },
    26293(e, r, o) {
      o.d(r, {
        Mz: () => S,
        i3: () => I,
        UC: () => F,
        bL: () => N,
        Bk: () => v
      });
      var t = o(93082),
        n = o(17966),
        a = o(10376),
        s = o(66704),
        i = o(39793),
        l = t.forwardRef((e, r) => {
          const {
            children: o,
            width: t = 10,
            height: n = 5,
            ...a
          } = e;
          return (0, i.jsx)(s.sG.svg, {
            ...a,
            ref: r,
            width: t,
            height: n,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? o : (0, i.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      l.displayName = "Arrow";
      var d = l,
        c = o(50446),
        p = o(53582),
        u = o(38351),
        f = o(86627),
        h = o(94119),
        g = "Popper",
        [m, v] = (0, p.A)(g),
        [w, y] = m(g),
        b = e => {
          const {
            __scopePopper: r,
            children: o
          } = e, [n, a] = t.useState(null);
          return (0, i.jsx)(w, {
            scope: r,
            anchor: n,
            onAnchorChange: a,
            children: o
          })
        };
      b.displayName = g;
      var x = "PopperAnchor",
        P = t.forwardRef((e, r) => {
          const {
            __scopePopper: o,
            virtualRef: n,
            ...a
          } = e, l = y(x, o), d = t.useRef(null), p = (0, c.s)(r, d), u = t.useRef(null);
          return t.useEffect(() => {
            const e = u.current;
            u.current = n?.current || d.current, e !== u.current && l.onAnchorChange(u.current)
          }), n ? null : (0, i.jsx)(s.sG.div, {
            ...a,
            ref: p
          })
        });
      P.displayName = x;
      var C = "PopperContent",
        [_, R] = m(C),
        A = t.forwardRef((e, r) => {
          const {
            __scopePopper: o,
            side: l = "bottom",
            sideOffset: d = 0,
            align: p = "center",
            alignOffset: g = 0,
            arrowPadding: m = 0,
            avoidCollisions: v = !0,
            collisionBoundary: w = [],
            collisionPadding: b = 0,
            sticky: x = "partial",
            hideWhenDetached: P = !1,
            updatePositionStrategy: R = "optimized",
            onPlaced: A,
            ...j
          } = e, O = y(C, o), [k, N] = t.useState(null), S = (0, c.s)(r, e => N(e)), [F, I] = t.useState(null), T = (0, h.X)(F), $ = T?.width ?? 0, L = T?.height ?? 0, z = l + ("center" !== p ? "-" + p : ""), B = "number" == typeof b ? b : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...b
          }, H = Array.isArray(w) ? w : [w], K = H.length > 0, U = {
            padding: B,
            boundary: H.filter(M),
            altBoundary: K
          }, {
            refs: W,
            floatingStyles: Y,
            placement: G,
            isPositioned: X,
            middlewareData: q
          } = (0, n.we)({
            strategy: "fixed",
            placement: z,
            whileElementsMounted: (...e) => (0, a.ll)(...e, {
              animationFrame: "always" === R
            }),
            elements: {
              reference: O.anchor
            },
            middleware: [(0, n.cY)({
              mainAxis: d + L,
              alignmentAxis: g
            }), v && (0, n.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === x ? (0, n.ER)() : void 0,
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
                } = r.reference, s = e.floating.style;
                s.setProperty("--radix-popper-available-width", `${o}px`), s.setProperty("--radix-popper-available-height", `${t}px`), s.setProperty("--radix-popper-anchor-width", `${n}px`), s.setProperty("--radix-popper-anchor-height", `${a}px`)
              }
            }), F && (0, n.UE)({
              element: F,
              padding: m
            }), E({
              arrowWidth: $,
              arrowHeight: L
            }), P && (0, n.jD)({
              strategy: "referenceHidden",
              ...U
            })]
          }), [Z, Q] = D(G), V = (0, u.c)(A);
          (0, f.N)(() => {
            X && V?.()
          }, [X, V]);
          const J = q.arrow?.x,
            ee = q.arrow?.y,
            re = 0 !== q.arrow?.centerOffset,
            [oe, te] = t.useState();
          return (0, f.N)(() => {
            k && te(window.getComputedStyle(k).zIndex)
          }, [k]), (0, i.jsx)("div", {
            ref: W.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...Y,
              transform: X ? Y.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: oe,
              "--radix-popper-transform-origin": [q.transformOrigin?.x, q.transformOrigin?.y].join(" "),
              ...q.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, i.jsx)(_, {
              scope: o,
              placedSide: Z,
              onArrowChange: I,
              arrowX: J,
              arrowY: ee,
              shouldHideArrow: re,
              children: (0, i.jsx)(s.sG.div, {
                "data-side": Z,
                "data-align": Q,
                ...j,
                ref: S,
                style: {
                  ...j.style,
                  animation: X ? void 0 : "none"
                }
              })
            })
          })
        });
      A.displayName = C;
      var j = "PopperArrow",
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
          } = e, n = R(j, o), a = O[n.placedSide];
          return (0, i.jsx)("span", {
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
            children: (0, i.jsx)(d, {
              ...t,
              ref: r,
              style: {
                ...t.style,
                display: "block"
              }
            })
          })
        });

      function M(e) {
        return null !== e
      }
      k.displayName = j;
      var E = e => ({
        name: "transformOrigin",
        options: e,
        fn(r) {
          const {
            placement: o,
            rects: t,
            middlewareData: n
          } = r, a = 0 !== n.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [l, d] = D(o), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [d], p = (n.arrow?.x ?? 0) + s / 2, u = (n.arrow?.y ?? 0) + i / 2;
          let f = "",
            h = "";
          return "bottom" === l ? (f = a ? c : `${p}px`, h = -i + "px") : "top" === l ? (f = a ? c : `${p}px`, h = `${t.floating.height+i}px`) : "right" === l ? (f = -i + "px", h = a ? c : `${u}px`) : "left" === l && (f = `${t.floating.width+i}px`, h = a ? c : `${u}px`), {
            data: {
              x: f,
              y: h
            }
          }
        }
      });

      function D(e) {
        const [r, o = "center"] = e.split("-");
        return [r, o]
      }
      var N = b,
        S = P,
        F = A,
        I = k
    },
    45047(e, r, o) {
      o.d(r, {
        Qg: () => s,
        bL: () => l,
        s6: () => i
      });
      var t = o(93082),
        n = o(66704),
        a = o(39793),
        s = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        i = t.forwardRef((e, r) => (0, a.jsx)(n.sG.span, {
          ...e,
          ref: r,
          style: {
            ...s,
            ...e.style
          }
        }));
      i.displayName = "VisuallyHidden";
      var l = i
    }
  }
]);