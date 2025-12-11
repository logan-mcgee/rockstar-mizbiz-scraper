try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "7613ef5c-3a00-4bc1-9850-ed344902294b", e._sentryDebugIdIdentifier = "sentry-dbid-7613ef5c-3a00-4bc1-9850-ed344902294b")
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
  [395, 2295, 2776, 4676, 7533], {
    2776: (e, o, r) => {
      r.r(o), r.d(o, {
        Anchor: () => Y,
        Arrow: () => Q,
        Close: () => J,
        Content: () => H,
        Popover: () => R,
        PopoverAnchor: () => A,
        PopoverArrow: () => z,
        PopoverClose: () => q,
        PopoverContent: () => S,
        PopoverPortal: () => M,
        PopoverTrigger: () => j,
        Portal: () => Z,
        Root: () => W,
        Trigger: () => $,
        createPopoverScope: () => m
      });
      var n = r(71127),
        t = r(94118),
        a = r(95362),
        s = r(85426),
        d = r(89749),
        l = r(15234),
        c = r(86683),
        i = r(74406),
        u = r(96077),
        p = r(34902),
        f = r(53146),
        v = r(78004),
        h = r(21222),
        g = r(79158),
        _ = r(94926),
        b = r(19690),
        y = r(42295),
        P = "Popover",
        [w, m] = (0, s.A)(P, [u.Bk]),
        C = (0, u.Bk)(),
        [O, x] = w(P),
        R = e => {
          const {
            __scopePopover: o,
            children: r,
            open: t,
            defaultOpen: a,
            onOpenChange: s,
            modal: d = !1
          } = e, l = C(o), c = n.useRef(null), [p, f] = n.useState(!1), [v, h] = (0, g.useControllableState)({
            prop: t,
            defaultProp: a ?? !1,
            onChange: s,
            caller: P
          });
          return (0, y.jsx)(u.bL, {
            ...l,
            children: (0, y.jsx)(O, {
              scope: o,
              contentId: (0, i.useId)(),
              triggerRef: c,
              open: v,
              onOpenChange: h,
              onOpenToggle: n.useCallback(() => h(e => !e), [h]),
              hasCustomAnchor: p,
              onCustomAnchorAdd: n.useCallback(() => f(!0), []),
              onCustomAnchorRemove: n.useCallback(() => f(!1), []),
              modal: d,
              children: r
            })
          })
        };
      R.displayName = P;
      var k = "PopoverAnchor",
        A = n.forwardRef((e, o) => {
          const {
            __scopePopover: r,
            ...t
          } = e, a = x(k, r), s = C(r), {
            onCustomAnchorAdd: d,
            onCustomAnchorRemove: l
          } = a;
          return n.useEffect(() => (d(), () => l()), [d, l]), (0, y.jsx)(u.Mz, {
            ...s,
            ...t,
            ref: o
          })
        });
      A.displayName = k;
      var E = "PopoverTrigger",
        j = n.forwardRef((e, o) => {
          const {
            __scopePopover: r,
            ...n
          } = e, s = x(E, r), d = C(r), l = (0, a.s)(o, s.triggerRef), c = (0, y.jsx)(v.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": G(s.open),
            ...n,
            ref: l,
            onClick: (0, t.mK)(e.onClick, s.onOpenToggle)
          });
          return s.hasCustomAnchor ? c : (0, y.jsx)(u.Mz, {
            asChild: !0,
            ...d,
            children: c
          })
        });
      j.displayName = E;
      var D = "PopoverPortal",
        [F, I] = w(D, {
          forceMount: void 0
        }),
        M = e => {
          const {
            __scopePopover: o,
            forceMount: r,
            children: n,
            container: t
          } = e, a = x(D, o);
          return (0, y.jsx)(F, {
            scope: o,
            forceMount: r,
            children: (0, y.jsx)(f.C, {
              present: r || a.open,
              children: (0, y.jsx)(p.Portal, {
                asChild: !0,
                container: t,
                children: n
              })
            })
          })
        };
      M.displayName = D;
      var T = "PopoverContent",
        S = n.forwardRef((e, o) => {
          const r = I(T, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...t
            } = e,
            a = x(T, e.__scopePopover);
          return (0, y.jsx)(f.C, {
            present: n || a.open,
            children: a.modal ? (0, y.jsx)(K, {
              ...t,
              ref: o
            }) : (0, y.jsx)(L, {
              ...t,
              ref: o
            })
          })
        });
      S.displayName = T;
      var N = (0, h.createSlot)("PopoverContent.RemoveScroll"),
        K = n.forwardRef((e, o) => {
          const r = x(T, e.__scopePopover),
            s = n.useRef(null),
            d = (0, a.s)(o, s),
            l = n.useRef(!1);
          return n.useEffect(() => {
            const e = s.current;
            if (e) return (0, _.Eq)(e)
          }, []), (0, y.jsx)(b.RemoveScroll, {
            as: N,
            allowPinchZoom: !0,
            children: (0, y.jsx)(U, {
              ...e,
              ref: d,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, t.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), l.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, t.mK)(e.onPointerDownOutside, e => {
                const o = e.detail.originalEvent,
                  r = 0 === o.button && !0 === o.ctrlKey,
                  n = 2 === o.button || r;
                l.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, t.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        L = n.forwardRef((e, o) => {
          const r = x(T, e.__scopePopover),
            t = n.useRef(!1),
            a = n.useRef(!1);
          return (0, y.jsx)(U, {
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
        }),
        U = n.forwardRef((e, o) => {
          const {
            __scopePopover: r,
            trapFocus: n,
            onOpenAutoFocus: t,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: i,
            onPointerDownOutside: p,
            onFocusOutside: f,
            onInteractOutside: v,
            ...h
          } = e, g = x(T, r), _ = C(r);
          return (0, l.Oh)(), (0, y.jsx)(c.FocusScope, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: t,
            onUnmountAutoFocus: a,
            children: (0, y.jsx)(d.qW, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: v,
              onEscapeKeyDown: i,
              onPointerDownOutside: p,
              onFocusOutside: f,
              onDismiss: () => g.onOpenChange(!1),
              children: (0, y.jsx)(u.UC, {
                "data-state": G(g.open),
                role: "dialog",
                id: g.contentId,
                ..._,
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
        }),
        B = "PopoverClose",
        q = n.forwardRef((e, o) => {
          const {
            __scopePopover: r,
            ...n
          } = e, a = x(B, r);
          return (0, y.jsx)(v.sG.button, {
            type: "button",
            ...n,
            ref: o,
            onClick: (0, t.mK)(e.onClick, () => a.onOpenChange(!1))
          })
        });
      q.displayName = B;
      var z = n.forwardRef((e, o) => {
        const {
          __scopePopover: r,
          ...n
        } = e, t = C(r);
        return (0, y.jsx)(u.i3, {
          ...t,
          ...n,
          ref: o
        })
      });

      function G(e) {
        return e ? "open" : "closed"
      }
      z.displayName = "PopoverArrow";
      var W = R,
        Y = A,
        $ = j,
        Z = M,
        H = S,
        J = q,
        Q = z
    },
    42295: (e, o, r) => {
      e.exports = r(69245)
    },
    69245: (e, o, r) => {
      var n = r(71127),
        t = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, o, r) {
        var n, a = {},
          c = null,
          i = null;
        for (n in void 0 !== r && (c = "" + r), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (i = o.ref), o) s.call(o, n) && !l.hasOwnProperty(n) && (a[n] = o[n]);
        if (e && e.defaultProps)
          for (n in o = e.defaultProps) void 0 === a[n] && (a[n] = o[n]);
        return {
          $$typeof: t,
          type: e,
          key: c,
          ref: i,
          props: a,
          _owner: d.current
        }
      }
      o.Fragment = a, o.jsx = c, o.jsxs = c
    }
  }
]);