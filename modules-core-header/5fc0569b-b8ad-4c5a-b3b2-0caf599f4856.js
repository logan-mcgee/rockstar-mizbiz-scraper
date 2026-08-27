try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "5fc0569b-b8ad-4c5a-b3b2-0caf599f4856", e._sentryDebugIdIdentifier = "sentry-dbid-5fc0569b-b8ad-4c5a-b3b2-0caf599f4856")
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
  [269, 2174, 4555, 5185, 6936, 7566, 9793], {
    94931(e, o, r) {
      var n = r(4637),
        t = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, o, r) {
        var n, s = {},
          i = null,
          u = null;
        for (n in void 0 !== r && (i = "" + r), void 0 !== o.key && (i = "" + o.key), void 0 !== o.ref && (u = o.ref), o) a.call(o, n) && !c.hasOwnProperty(n) && (s[n] = o[n]);
        if (e && e.defaultProps)
          for (n in o = e.defaultProps) void 0 === s[n] && (s[n] = o[n]);
        return {
          $$typeof: t,
          type: e,
          key: i,
          ref: u,
          props: s,
          _owner: d.current
        }
      }
      o.Fragment = s, o.jsx = i, o.jsxs = i
    },
    39793(e, o, r) {
      e.exports = r(94931)
    },
    25185(e, o, r) {
      r.r(o), r.d(o, {
        Anchor: () => W,
        Arrow: () => J,
        Close: () => H,
        Content: () => Z,
        Popover: () => A,
        PopoverAnchor: () => E,
        PopoverArrow: () => q,
        PopoverClose: () => B,
        PopoverContent: () => S,
        PopoverPortal: () => I,
        PopoverTrigger: () => j,
        Portal: () => $,
        Root: () => G,
        Trigger: () => Y,
        createPopoverScope: () => O
      });
      var n = r(4637),
        t = r(44752),
        s = r(85049),
        a = r(72579),
        d = r(78077),
        c = r(86187),
        i = r(93778),
        u = r(31431),
        l = r(78961),
        p = r(743),
        f = r(81432),
        v = r(41988),
        g = r(49481),
        h = r(44622),
        P = r(45787),
        _ = r(59113),
        b = r(39793),
        C = Object.defineProperty,
        w = (e, o) => C(e, "name", {
          value: o,
          configurable: !0
        }),
        y = "Popover",
        [m, O] = (0, a.A)(y, [l.Bk]),
        x = (0, l.Bk)(),
        [R, k] = m(y),
        A = w(e => {
          const {
            __scopePopover: o,
            children: r,
            open: t,
            defaultOpen: s,
            onOpenChange: a,
            modal: d = !1
          } = e, c = x(o), i = n.useRef(null), [p, f] = n.useState(!1), [v, g] = (0, h.useControllableState)({
            prop: t,
            defaultProp: s ?? !1,
            onChange: a,
            caller: y
          });
          return (0, b.jsx)(l.bL, {
            ...c,
            children: (0, b.jsx)(R, {
              scope: o,
              contentId: (0, u.useId)(),
              triggerRef: i,
              open: v,
              onOpenChange: g,
              onOpenToggle: n.useCallback(() => g(e => !e), [g]),
              hasCustomAnchor: p,
              onCustomAnchorAdd: n.useCallback(() => f(!0), []),
              onCustomAnchorRemove: n.useCallback(() => f(!1), []),
              modal: d,
              children: r
            })
          })
        }, "Popover"),
        E = n.forwardRef(w(function(e, o) {
          const {
            __scopePopover: r,
            ...t
          } = e, s = k("PopoverAnchor", r), a = x(r), {
            onCustomAnchorAdd: d,
            onCustomAnchorRemove: c
          } = s;
          return n.useEffect(() => (d(), () => c()), [d, c]), (0, b.jsx)(l.Mz, {
            ...a,
            ...t,
            ref: o
          })
        }, "PopoverAnchor")),
        j = n.forwardRef(w(function(e, o) {
          const {
            __scopePopover: r,
            ...n
          } = e, a = k("PopoverTrigger", r), d = x(r), c = (0, s.s)(o, a.triggerRef), i = (0, b.jsx)(v.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": a.open,
            "aria-controls": a.open ? a.contentId : void 0,
            "data-state": z(a.open),
            ...n,
            ref: c,
            onClick: (0, t.mK)(e.onClick, a.onOpenToggle)
          });
          return a.hasCustomAnchor ? i : (0, b.jsx)(l.Mz, {
            asChild: !0,
            ...d,
            children: i
          })
        }, "PopoverTrigger")),
        D = "PopoverPortal",
        [F, M] = m(D, {
          forceMount: void 0
        }),
        I = w(e => {
          const {
            __scopePopover: o,
            forceMount: r,
            children: n,
            container: t
          } = e, s = k(D, o);
          return (0, b.jsx)(F, {
            scope: o,
            forceMount: r,
            children: (0, b.jsx)(f.C, {
              present: r || s.open,
              children: (0, b.jsx)(p.Portal, {
                asChild: !0,
                container: t,
                children: n
              })
            })
          })
        }, "PopoverPortal"),
        T = "PopoverContent",
        S = n.forwardRef(w(function(e, o) {
          const r = M(T, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...t
            } = e,
            s = k(T, e.__scopePopover);
          return (0, b.jsx)(f.C, {
            present: n || s.open,
            children: s.modal ? (0, b.jsx)(N, {
              ...t,
              ref: o
            }) : (0, b.jsx)(L, {
              ...t,
              ref: o
            })
          })
        }, "PopoverContent")),
        K = (0, g.createSlot)("PopoverContent.RemoveScroll"),
        N = n.forwardRef(w(function(e, o) {
          const r = k(T, e.__scopePopover),
            a = n.useRef(null),
            d = (0, s.s)(o, a),
            c = n.useRef(!1);
          return n.useEffect(() => {
            const e = a.current;
            if (e) return (0, P.Eq)(e)
          }, []), (0, b.jsx)(_.RemoveScroll, {
            as: K,
            allowPinchZoom: !0,
            children: (0, b.jsx)(U, {
              ...e,
              ref: d,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, t.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), c.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, t.mK)(e.onPointerDownOutside, e => {
                const o = e.detail.originalEvent,
                  r = 0 === o.button && !0 === o.ctrlKey,
                  n = 2 === o.button || r;
                c.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, t.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }, "PopoverContentModal")),
        L = n.forwardRef(w(function(e, o) {
          const r = k(T, e.__scopePopover),
            t = n.useRef(!1),
            s = n.useRef(!1);
          return (0, b.jsx)(U, {
            ...e,
            ref: o,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: o => {
              e.onCloseAutoFocus?.(o), o.defaultPrevented || (t.current || r.triggerRef.current?.focus(), o.preventDefault()), t.current = !1, s.current = !1
            },
            onInteractOutside: o => {
              e.onInteractOutside?.(o), o.defaultPrevented || (t.current = !0, "pointerdown" === o.detail.originalEvent.type && (s.current = !0));
              const n = o.target,
                a = r.triggerRef.current?.contains(n);
              a && o.preventDefault(), "focusin" === o.detail.originalEvent.type && s.current && o.preventDefault()
            }
          })
        }, "PopoverContentNonModal")),
        U = n.forwardRef(w(function(e, o) {
          const {
            __scopePopover: r,
            trapFocus: n,
            onOpenAutoFocus: t,
            onCloseAutoFocus: s,
            disableOutsidePointerEvents: a,
            onEscapeKeyDown: u,
            onPointerDownOutside: p,
            onFocusOutside: f,
            onInteractOutside: v,
            ...g
          } = e, h = k(T, r), P = x(r);
          return (0, c.Oh)(), (0, b.jsx)(i.FocusScope, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: t,
            onUnmountAutoFocus: s,
            children: (0, b.jsx)(d.qW, {
              asChild: !0,
              disableOutsidePointerEvents: a,
              onInteractOutside: v,
              onEscapeKeyDown: u,
              onPointerDownOutside: p,
              onFocusOutside: f,
              onDismiss: () => h.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, b.jsx)(l.UC, {
                "data-state": z(h.open),
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
        B = n.forwardRef(w(function(e, o) {
          const {
            __scopePopover: r,
            ...n
          } = e, s = k("PopoverClose", r);
          return (0, b.jsx)(v.sG.button, {
            type: "button",
            ...n,
            ref: o,
            onClick: (0, t.mK)(e.onClick, () => s.onOpenChange(!1))
          })
        }, "PopoverClose")),
        q = n.forwardRef(w(function(e, o) {
          const {
            __scopePopover: r,
            ...n
          } = e, t = x(r);
          return (0, b.jsx)(l.i3, {
            ...t,
            ...n,
            ref: o
          })
        }, "PopoverArrow"));

      function z(e) {
        return e ? "open" : "closed"
      }
      w(z, "getState");
      var G = A,
        W = E,
        Y = j,
        $ = I,
        Z = S,
        H = B,
        J = q
    }
  }
]);