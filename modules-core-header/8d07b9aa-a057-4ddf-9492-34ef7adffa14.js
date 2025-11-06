try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "8d07b9aa-a057-4ddf-9492-34ef7adffa14", e._sentryDebugIdIdentifier = "sentry-dbid-8d07b9aa-a057-4ddf-9492-34ef7adffa14")
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
  [2776], {
    2776: (e, o, r) => {
      r.r(o), r.d(o, {
        Anchor: () => Y,
        Arrow: () => V,
        Close: () => Q,
        Content: () => J,
        Popover: () => R,
        PopoverAnchor: () => k,
        PopoverArrow: () => L,
        PopoverClose: () => G,
        PopoverContent: () => N,
        PopoverPortal: () => I,
        PopoverTrigger: () => E,
        Portal: () => H,
        Root: () => W,
        Trigger: () => Z,
        createPopoverScope: () => _
      });
      var n = r(71127),
        t = r(94118),
        a = r(95362),
        s = r(85426),
        d = r(89749),
        c = r(15234),
        i = r(19846),
        l = r(74406),
        u = r(96077),
        p = r(34902),
        f = r(53146),
        v = r(78004),
        h = r(21222),
        g = r(79158),
        P = r(94926),
        b = r(19690),
        w = r(42295),
        C = "Popover",
        [y, _] = (0, s.A)(C, [u.Bk]),
        m = (0, u.Bk)(),
        [x, O] = y(C),
        R = e => {
          const {
            __scopePopover: o,
            children: r,
            open: t,
            defaultOpen: a,
            onOpenChange: s,
            modal: d = !1
          } = e, c = m(o), i = n.useRef(null), [p, f] = n.useState(!1), [v, h] = (0, g.useControllableState)({
            prop: t,
            defaultProp: a ?? !1,
            onChange: s,
            caller: C
          });
          return (0, w.jsx)(u.bL, {
            ...c,
            children: (0, w.jsx)(x, {
              scope: o,
              contentId: (0, l.useId)(),
              triggerRef: i,
              open: v,
              onOpenChange: h,
              onOpenToggle: n.useCallback((() => h((e => !e))), [h]),
              hasCustomAnchor: p,
              onCustomAnchorAdd: n.useCallback((() => f(!0)), []),
              onCustomAnchorRemove: n.useCallback((() => f(!1)), []),
              modal: d,
              children: r
            })
          })
        };
      R.displayName = C;
      var A = "PopoverAnchor",
        k = n.forwardRef(((e, o) => {
          const {
            __scopePopover: r,
            ...t
          } = e, a = O(A, r), s = m(r), {
            onCustomAnchorAdd: d,
            onCustomAnchorRemove: c
          } = a;
          return n.useEffect((() => (d(), () => c())), [d, c]), (0, w.jsx)(u.Mz, {
            ...s,
            ...t,
            ref: o
          })
        }));
      k.displayName = A;
      var j = "PopoverTrigger",
        E = n.forwardRef(((e, o) => {
          const {
            __scopePopover: r,
            ...n
          } = e, s = O(j, r), d = m(r), c = (0, a.s)(o, s.triggerRef), i = (0, w.jsx)(v.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": U(s.open),
            ...n,
            ref: c,
            onClick: (0, t.m)(e.onClick, s.onOpenToggle)
          });
          return s.hasCustomAnchor ? i : (0, w.jsx)(u.Mz, {
            asChild: !0,
            ...d,
            children: i
          })
        }));
      E.displayName = j;
      var D = "PopoverPortal",
        [F, M] = y(D, {
          forceMount: void 0
        }),
        I = e => {
          const {
            __scopePopover: o,
            forceMount: r,
            children: n,
            container: t
          } = e, a = O(D, o);
          return (0, w.jsx)(F, {
            scope: o,
            forceMount: r,
            children: (0, w.jsx)(f.C, {
              present: r || a.open,
              children: (0, w.jsx)(p.Portal, {
                asChild: !0,
                container: t,
                children: n
              })
            })
          })
        };
      I.displayName = D;
      var T = "PopoverContent",
        N = n.forwardRef(((e, o) => {
          const r = M(T, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...t
            } = e,
            a = O(T, e.__scopePopover);
          return (0, w.jsx)(f.C, {
            present: n || a.open,
            children: a.modal ? (0, w.jsx)(K, {
              ...t,
              ref: o
            }) : (0, w.jsx)(q, {
              ...t,
              ref: o
            })
          })
        }));
      N.displayName = T;
      var S = (0, h.createSlot)("PopoverContent.RemoveScroll"),
        K = n.forwardRef(((e, o) => {
          const r = O(T, e.__scopePopover),
            s = n.useRef(null),
            d = (0, a.s)(o, s),
            c = n.useRef(!1);
          return n.useEffect((() => {
            const e = s.current;
            if (e) return (0, P.Eq)(e)
          }), []), (0, w.jsx)(b.RemoveScroll, {
            as: S,
            allowPinchZoom: !0,
            children: (0, w.jsx)(z, {
              ...e,
              ref: d,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, t.m)(e.onCloseAutoFocus, (e => {
                e.preventDefault(), c.current || r.triggerRef.current?.focus()
              })),
              onPointerDownOutside: (0, t.m)(e.onPointerDownOutside, (e => {
                const o = e.detail.originalEvent,
                  r = 0 === o.button && !0 === o.ctrlKey,
                  n = 2 === o.button || r;
                c.current = n
              }), {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, t.m)(e.onFocusOutside, (e => e.preventDefault()), {
                checkForDefaultPrevented: !1
              })
            })
          })
        })),
        q = n.forwardRef(((e, o) => {
          const r = O(T, e.__scopePopover),
            t = n.useRef(!1),
            a = n.useRef(!1);
          return (0, w.jsx)(z, {
            ...e,
            ref: o,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: o => {
              e.onCloseAutoFocus?.(o), o.defaultPrevented || (t.current || r.triggerRef.current?.focus(), o.preventDefault()), t.current = !1, a.current = !1
            },
            onInteractOutside: o => {
              e.onInteractOutside?.(o), o.defaultPrevented || (t.current = !0, "pointerdown" === o.detail.originalEvent.type && (a.current = !0));
              const n = o.target,
                s = r.triggerRef.current?.contains(n);
              s && o.preventDefault(), "focusin" === o.detail.originalEvent.type && a.current && o.preventDefault()
            }
          })
        })),
        z = n.forwardRef(((e, o) => {
          const {
            __scopePopover: r,
            trapFocus: n,
            onOpenAutoFocus: t,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: l,
            onPointerDownOutside: p,
            onFocusOutside: f,
            onInteractOutside: v,
            ...h
          } = e, g = O(T, r), P = m(r);
          return (0, c.Oh)(), (0, w.jsx)(i.FocusScope, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: t,
            onUnmountAutoFocus: a,
            children: (0, w.jsx)(d.qW, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: v,
              onEscapeKeyDown: l,
              onPointerDownOutside: p,
              onFocusOutside: f,
              onDismiss: () => g.onOpenChange(!1),
              children: (0, w.jsx)(u.UC, {
                "data-state": U(g.open),
                role: "dialog",
                id: g.contentId,
                ...P,
                ...h,
                ref: o,
                style: {
                  ...h.style,
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
        B = "PopoverClose",
        G = n.forwardRef(((e, o) => {
          const {
            __scopePopover: r,
            ...n
          } = e, a = O(B, r);
          return (0, w.jsx)(v.sG.button, {
            type: "button",
            ...n,
            ref: o,
            onClick: (0, t.m)(e.onClick, (() => a.onOpenChange(!1)))
          })
        }));
      G.displayName = B;
      var L = n.forwardRef(((e, o) => {
        const {
          __scopePopover: r,
          ...n
        } = e, t = m(r);
        return (0, w.jsx)(u.i3, {
          ...t,
          ...n,
          ref: o
        })
      }));

      function U(e) {
        return e ? "open" : "closed"
      }
      L.displayName = "PopoverArrow";
      var W = R,
        Y = k,
        Z = E,
        H = I,
        J = N,
        Q = G,
        V = L
    }
  }
]);