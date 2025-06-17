! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      o = (new e.Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "6e320857-8e11-4d4b-9884-a449b7d7e61d", e._sentryDebugIdIdentifier = "sentry-dbid-6e320857-8e11-4d4b-9884-a449b7d7e61d")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [3536], {
    3536: (e, o, r) => {
      r.r(o), r.d(o, {
        Anchor: () => Y,
        Arrow: () => V,
        Close: () => Q,
        Content: () => J,
        Popover: () => O,
        PopoverAnchor: () => A,
        PopoverArrow: () => L,
        PopoverClose: () => B,
        PopoverContent: () => G,
        PopoverPortal: () => I,
        PopoverTrigger: () => j,
        Portal: () => H,
        Root: () => W,
        Trigger: () => Z,
        createPopoverScope: () => C
      });
      var t = r(71127),
        n = r(65998),
        a = r(86410),
        s = r(29818),
        d = r(19202),
        l = r(27114),
        i = r(72480),
        c = r(74406),
        u = r(45421),
        p = r(34902),
        f = r(36146),
        v = r(85100),
        g = r(21222),
        h = r(52806),
        b = r(98463),
        _ = r(19690),
        y = r(25854),
        P = "Popover",
        [w, C] = (0, s.A)(P, [u.Bk]),
        m = (0, u.Bk)(),
        [x, M] = w(P),
        O = e => {
          const {
            __scopePopover: o,
            children: r,
            open: n,
            defaultOpen: a,
            onOpenChange: s,
            modal: d = !1
          } = e, l = m(o), i = t.useRef(null), [p, f] = t.useState(!1), [v, g] = (0, h.i)({
            prop: n,
            defaultProp: a ?? !1,
            onChange: s,
            caller: P
          });
          return (0, y.jsx)(u.bL, {
            ...l,
            children: (0, y.jsx)(x, {
              scope: o,
              contentId: (0, c.useId)(),
              triggerRef: i,
              open: v,
              onOpenChange: g,
              onOpenToggle: t.useCallback((() => g((e => !e))), [g]),
              hasCustomAnchor: p,
              onCustomAnchorAdd: t.useCallback((() => f(!0)), []),
              onCustomAnchorRemove: t.useCallback((() => f(!1)), []),
              modal: d,
              children: r
            })
          })
        };
      O.displayName = P;
      var R = "PopoverAnchor",
        A = t.forwardRef(((e, o) => {
          const {
            __scopePopover: r,
            ...n
          } = e, a = M(R, r), s = m(r), {
            onCustomAnchorAdd: d,
            onCustomAnchorRemove: l
          } = a;
          return t.useEffect((() => (d(), () => l())), [d, l]), (0, y.jsx)(u.Mz, {
            ...s,
            ...n,
            ref: o
          })
        }));
      A.displayName = R;
      var k = "PopoverTrigger",
        j = t.forwardRef(((e, o) => {
          const {
            __scopePopover: r,
            ...t
          } = e, s = M(k, r), d = m(r), l = (0, a.s)(o, s.triggerRef), i = (0, y.jsx)(v.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": U(s.open),
            ...t,
            ref: l,
            onClick: (0, n.m)(e.onClick, s.onOpenToggle)
          });
          return s.hasCustomAnchor ? i : (0, y.jsx)(u.Mz, {
            asChild: !0,
            ...d,
            children: i
          })
        }));
      j.displayName = k;
      var E = "PopoverPortal",
        [D, F] = w(E, {
          forceMount: void 0
        }),
        I = e => {
          const {
            __scopePopover: o,
            forceMount: r,
            children: t,
            container: n
          } = e, a = M(E, o);
          return (0, y.jsx)(D, {
            scope: o,
            forceMount: r,
            children: (0, y.jsx)(f.C, {
              present: r || a.open,
              children: (0, y.jsx)(p.Portal, {
                asChild: !0,
                container: n,
                children: t
              })
            })
          })
        };
      I.displayName = E;
      var T = "PopoverContent",
        G = t.forwardRef(((e, o) => {
          const r = F(T, e.__scopePopover),
            {
              forceMount: t = r.forceMount,
              ...n
            } = e,
            a = M(T, e.__scopePopover);
          return (0, y.jsx)(f.C, {
            present: t || a.open,
            children: a.modal ? (0, y.jsx)(S, {
              ...n,
              ref: o
            }) : (0, y.jsx)(K, {
              ...n,
              ref: o
            })
          })
        }));
      G.displayName = T;
      var N = (0, g.createSlot)("PopoverContent.RemoveScroll"),
        S = t.forwardRef(((e, o) => {
          const r = M(T, e.__scopePopover),
            s = t.useRef(null),
            d = (0, a.s)(o, s),
            l = t.useRef(!1);
          return t.useEffect((() => {
            const e = s.current;
            if (e) return (0, b.Eq)(e)
          }), []), (0, y.jsx)(_.RemoveScroll, {
            as: N,
            allowPinchZoom: !0,
            children: (0, y.jsx)(q, {
              ...e,
              ref: d,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, n.m)(e.onCloseAutoFocus, (e => {
                e.preventDefault(), l.current || r.triggerRef.current?.focus()
              })),
              onPointerDownOutside: (0, n.m)(e.onPointerDownOutside, (e => {
                const o = e.detail.originalEvent,
                  r = 0 === o.button && !0 === o.ctrlKey,
                  t = 2 === o.button || r;
                l.current = t
              }), {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, n.m)(e.onFocusOutside, (e => e.preventDefault()), {
                checkForDefaultPrevented: !1
              })
            })
          })
        })),
        K = t.forwardRef(((e, o) => {
          const r = M(T, e.__scopePopover),
            n = t.useRef(!1),
            a = t.useRef(!1);
          return (0, y.jsx)(q, {
            ...e,
            ref: o,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: o => {
              e.onCloseAutoFocus?.(o), o.defaultPrevented || (n.current || r.triggerRef.current?.focus(), o.preventDefault()), n.current = !1, a.current = !1
            },
            onInteractOutside: o => {
              e.onInteractOutside?.(o), o.defaultPrevented || (n.current = !0, "pointerdown" === o.detail.originalEvent.type && (a.current = !0));
              const t = o.target,
                s = r.triggerRef.current?.contains(t);
              s && o.preventDefault(), "focusin" === o.detail.originalEvent.type && a.current && o.preventDefault()
            }
          })
        })),
        q = t.forwardRef(((e, o) => {
          const {
            __scopePopover: r,
            trapFocus: t,
            onOpenAutoFocus: n,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: c,
            onPointerDownOutside: p,
            onFocusOutside: f,
            onInteractOutside: v,
            ...g
          } = e, h = M(T, r), b = m(r);
          return (0, l.Oh)(), (0, y.jsx)(i.n, {
            asChild: !0,
            loop: !0,
            trapped: t,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            children: (0, y.jsx)(d.qW, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: v,
              onEscapeKeyDown: c,
              onPointerDownOutside: p,
              onFocusOutside: f,
              onDismiss: () => h.onOpenChange(!1),
              children: (0, y.jsx)(u.UC, {
                "data-state": U(h.open),
                role: "dialog",
                id: h.contentId,
                ...b,
                ...g,
                ref: o,
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
        })),
        z = "PopoverClose",
        B = t.forwardRef(((e, o) => {
          const {
            __scopePopover: r,
            ...t
          } = e, a = M(z, r);
          return (0, y.jsx)(v.sG.button, {
            type: "button",
            ...t,
            ref: o,
            onClick: (0, n.m)(e.onClick, (() => a.onOpenChange(!1)))
          })
        }));
      B.displayName = z;
      var L = t.forwardRef(((e, o) => {
        const {
          __scopePopover: r,
          ...t
        } = e, n = m(r);
        return (0, y.jsx)(u.i3, {
          ...n,
          ...t,
          ref: o
        })
      }));

      function U(e) {
        return e ? "open" : "closed"
      }
      L.displayName = "PopoverArrow";
      var W = O,
        Y = A,
        Z = j,
        H = I,
        J = G,
        Q = B,
        V = L
    }
  }
]);