try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "d607a0e6-79e4-41bf-90c6-c74b3a0e3bb0", e._sentryDebugIdIdentifier = "sentry-dbid-d607a0e6-79e4-41bf-90c6-c74b3a0e3bb0")
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
  [5185], {
    25185(e, o, n) {
      n.r(o), n.d(o, {
        Anchor: () => W,
        Arrow: () => Q,
        Close: () => J,
        Content: () => H,
        Popover: () => k,
        PopoverAnchor: () => j,
        PopoverArrow: () => G,
        PopoverClose: () => B,
        PopoverContent: () => S,
        PopoverPortal: () => I,
        PopoverTrigger: () => D,
        Portal: () => Z,
        Root: () => U,
        Trigger: () => Y,
        createPopoverScope: () => x
      });
      var r = n(4637),
        t = n(44752),
        s = n(85049),
        a = n(72579),
        d = n(78077),
        c = n(86187),
        i = n(93778),
        u = n(31431),
        l = n(78961),
        p = n(743),
        f = n(81432),
        v = n(41988),
        g = n(49481),
        h = n(44622),
        P = n(45787),
        b = n(59113),
        C = n(39793),
        w = Object.defineProperty,
        _ = (e, o) => w(e, "name", {
          value: o,
          configurable: !0
        }),
        y = "Popover",
        [m, x] = (0, a.A)(y, [l.Bk]),
        O = (0, l.Bk)(),
        [A, R] = m(y),
        k = _(e => {
          const {
            __scopePopover: o,
            children: n,
            open: t,
            defaultOpen: s,
            onOpenChange: a,
            modal: d = !1
          } = e, c = O(o), i = r.useRef(null), [p, f] = r.useState(!1), [v, g] = (0, h.useControllableState)({
            prop: t,
            defaultProp: s ?? !1,
            onChange: a,
            caller: y
          });
          return (0, C.jsx)(l.bL, {
            ...c,
            children: (0, C.jsx)(A, {
              scope: o,
              contentId: (0, u.useId)(),
              triggerRef: i,
              open: v,
              onOpenChange: g,
              onOpenToggle: r.useCallback(() => g(e => !e), [g]),
              hasCustomAnchor: p,
              onCustomAnchorAdd: r.useCallback(() => f(!0), []),
              onCustomAnchorRemove: r.useCallback(() => f(!1), []),
              modal: d,
              children: n
            })
          })
        }, "Popover"),
        j = r.forwardRef(_(function(e, o) {
          const {
            __scopePopover: n,
            ...t
          } = e, s = R("PopoverAnchor", n), a = O(n), {
            onCustomAnchorAdd: d,
            onCustomAnchorRemove: c
          } = s;
          return r.useEffect(() => (d(), () => c()), [d, c]), (0, C.jsx)(l.Mz, {
            ...a,
            ...t,
            ref: o
          })
        }, "PopoverAnchor")),
        D = r.forwardRef(_(function(e, o) {
          const {
            __scopePopover: n,
            ...r
          } = e, a = R("PopoverTrigger", n), d = O(n), c = (0, s.s)(o, a.triggerRef), i = (0, C.jsx)(v.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": a.open,
            "aria-controls": a.open ? a.contentId : void 0,
            "data-state": L(a.open),
            ...r,
            ref: c,
            onClick: (0, t.mK)(e.onClick, a.onOpenToggle)
          });
          return a.hasCustomAnchor ? i : (0, C.jsx)(l.Mz, {
            asChild: !0,
            ...d,
            children: i
          })
        }, "PopoverTrigger")),
        E = "PopoverPortal",
        [F, M] = m(E, {
          forceMount: void 0
        }),
        I = _(e => {
          const {
            __scopePopover: o,
            forceMount: n,
            children: r,
            container: t
          } = e, s = R(E, o);
          return (0, C.jsx)(F, {
            scope: o,
            forceMount: n,
            children: (0, C.jsx)(f.C, {
              present: n || s.open,
              children: (0, C.jsx)(p.Portal, {
                asChild: !0,
                container: t,
                children: r
              })
            })
          })
        }, "PopoverPortal"),
        T = "PopoverContent",
        S = r.forwardRef(_(function(e, o) {
          const n = M(T, e.__scopePopover),
            {
              forceMount: r = n.forceMount,
              ...t
            } = e,
            s = R(T, e.__scopePopover);
          return (0, C.jsx)(f.C, {
            present: r || s.open,
            children: s.modal ? (0, C.jsx)(N, {
              ...t,
              ref: o
            }) : (0, C.jsx)(q, {
              ...t,
              ref: o
            })
          })
        }, "PopoverContent")),
        K = (0, g.createSlot)("PopoverContent.RemoveScroll"),
        N = r.forwardRef(_(function(e, o) {
          const n = R(T, e.__scopePopover),
            a = r.useRef(null),
            d = (0, s.s)(o, a),
            c = r.useRef(!1);
          return r.useEffect(() => {
            const e = a.current;
            if (e) return (0, P.Eq)(e)
          }, []), (0, C.jsx)(b.RemoveScroll, {
            as: K,
            allowPinchZoom: !0,
            children: (0, C.jsx)(z, {
              ...e,
              ref: d,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, t.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), c.current || n.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, t.mK)(e.onPointerDownOutside, e => {
                const o = e.detail.originalEvent,
                  n = 0 === o.button && !0 === o.ctrlKey,
                  r = 2 === o.button || n;
                c.current = r
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, t.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }, "PopoverContentModal")),
        q = r.forwardRef(_(function(e, o) {
          const n = R(T, e.__scopePopover),
            t = r.useRef(!1),
            s = r.useRef(!1);
          return (0, C.jsx)(z, {
            ...e,
            ref: o,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: o => {
              e.onCloseAutoFocus?.(o), o.defaultPrevented || (t.current || n.triggerRef.current?.focus(), o.preventDefault()), t.current = !1, s.current = !1
            },
            onInteractOutside: o => {
              e.onInteractOutside?.(o), o.defaultPrevented || (t.current = !0, "pointerdown" === o.detail.originalEvent.type && (s.current = !0));
              const r = o.target,
                a = n.triggerRef.current?.contains(r);
              a && o.preventDefault(), "focusin" === o.detail.originalEvent.type && s.current && o.preventDefault()
            }
          })
        }, "PopoverContentNonModal")),
        z = r.forwardRef(_(function(e, o) {
          const {
            __scopePopover: n,
            trapFocus: r,
            onOpenAutoFocus: t,
            onCloseAutoFocus: s,
            disableOutsidePointerEvents: a,
            onEscapeKeyDown: u,
            onPointerDownOutside: p,
            onFocusOutside: f,
            onInteractOutside: v,
            ...g
          } = e, h = R(T, n), P = O(n);
          return (0, c.Oh)(), (0, C.jsx)(i.FocusScope, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: t,
            onUnmountAutoFocus: s,
            children: (0, C.jsx)(d.qW, {
              asChild: !0,
              disableOutsidePointerEvents: a,
              onInteractOutside: v,
              onEscapeKeyDown: u,
              onPointerDownOutside: p,
              onFocusOutside: f,
              onDismiss: () => h.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, C.jsx)(l.UC, {
                "data-state": L(h.open),
                role: "dialog",
                id: h.contentId,
                ...P,
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
        }, "PopoverContentImpl")),
        B = r.forwardRef(_(function(e, o) {
          const {
            __scopePopover: n,
            ...r
          } = e, s = R("PopoverClose", n);
          return (0, C.jsx)(v.sG.button, {
            type: "button",
            ...r,
            ref: o,
            onClick: (0, t.mK)(e.onClick, () => s.onOpenChange(!1))
          })
        }, "PopoverClose")),
        G = r.forwardRef(_(function(e, o) {
          const {
            __scopePopover: n,
            ...r
          } = e, t = O(n);
          return (0, C.jsx)(l.i3, {
            ...t,
            ...r,
            ref: o
          })
        }, "PopoverArrow"));

      function L(e) {
        return e ? "open" : "closed"
      }
      _(L, "getState");
      var U = k,
        W = j,
        Y = D,
        Z = I,
        H = S,
        J = B,
        Q = G
    }
  }
]);