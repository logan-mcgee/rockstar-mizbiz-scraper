try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "7144527f-633b-463e-8000-c8844c1d774c", e._sentryDebugIdIdentifier = "sentry-dbid-7144527f-633b-463e-8000-c8844c1d774c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "2a74753c0c949d4b2cbcf6cb65742761c430cda0",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2a74753c0c949d4b2cbcf6cb65742761c430cda0"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [616, 1155, 3473, 3536, 5854], {
    3536: (e, o, r) => {
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
        t = r(65998),
        a = r(86410),
        s = r(29818),
        c = r(19202),
        d = r(27114),
        l = r(72480),
        i = r(74406),
        u = r(45421),
        p = r(34902),
        f = r(36146),
        v = r(85100),
        h = r(21222),
        g = r(79158),
        _ = r(98463),
        b = r(19690),
        y = r(25854),
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
            modal: c = !1
          } = e, d = C(o), l = n.useRef(null), [p, f] = n.useState(!1), [v, h] = (0, g.useControllableState)({
            prop: t,
            defaultProp: a ?? !1,
            onChange: s,
            caller: P
          });
          return (0, y.jsx)(u.bL, {
            ...d,
            children: (0, y.jsx)(O, {
              scope: o,
              contentId: (0, i.useId)(),
              triggerRef: l,
              open: v,
              onOpenChange: h,
              onOpenToggle: n.useCallback((() => h((e => !e))), [h]),
              hasCustomAnchor: p,
              onCustomAnchorAdd: n.useCallback((() => f(!0)), []),
              onCustomAnchorRemove: n.useCallback((() => f(!1)), []),
              modal: c,
              children: r
            })
          })
        };
      R.displayName = P;
      var k = "PopoverAnchor",
        A = n.forwardRef(((e, o) => {
          const {
            __scopePopover: r,
            ...t
          } = e, a = x(k, r), s = C(r), {
            onCustomAnchorAdd: c,
            onCustomAnchorRemove: d
          } = a;
          return n.useEffect((() => (c(), () => d())), [c, d]), (0, y.jsx)(u.Mz, {
            ...s,
            ...t,
            ref: o
          })
        }));
      A.displayName = k;
      var E = "PopoverTrigger",
        j = n.forwardRef(((e, o) => {
          const {
            __scopePopover: r,
            ...n
          } = e, s = x(E, r), c = C(r), d = (0, a.s)(o, s.triggerRef), l = (0, y.jsx)(v.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": G(s.open),
            ...n,
            ref: d,
            onClick: (0, t.m)(e.onClick, s.onOpenToggle)
          });
          return s.hasCustomAnchor ? l : (0, y.jsx)(u.Mz, {
            asChild: !0,
            ...c,
            children: l
          })
        }));
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
        S = n.forwardRef(((e, o) => {
          const r = I(T, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...t
            } = e,
            a = x(T, e.__scopePopover);
          return (0, y.jsx)(f.C, {
            present: n || a.open,
            children: a.modal ? (0, y.jsx)(L, {
              ...t,
              ref: o
            }) : (0, y.jsx)(U, {
              ...t,
              ref: o
            })
          })
        }));
      S.displayName = T;
      var N = (0, h.createSlot)("PopoverContent.RemoveScroll"),
        L = n.forwardRef(((e, o) => {
          const r = x(T, e.__scopePopover),
            s = n.useRef(null),
            c = (0, a.s)(o, s),
            d = n.useRef(!1);
          return n.useEffect((() => {
            const e = s.current;
            if (e) return (0, _.Eq)(e)
          }), []), (0, y.jsx)(b.RemoveScroll, {
            as: N,
            allowPinchZoom: !0,
            children: (0, y.jsx)(B, {
              ...e,
              ref: c,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, t.m)(e.onCloseAutoFocus, (e => {
                e.preventDefault(), d.current || r.triggerRef.current?.focus()
              })),
              onPointerDownOutside: (0, t.m)(e.onPointerDownOutside, (e => {
                const o = e.detail.originalEvent,
                  r = 0 === o.button && !0 === o.ctrlKey,
                  n = 2 === o.button || r;
                d.current = n
              }), {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, t.m)(e.onFocusOutside, (e => e.preventDefault()), {
                checkForDefaultPrevented: !1
              })
            })
          })
        })),
        U = n.forwardRef(((e, o) => {
          const r = x(T, e.__scopePopover),
            t = n.useRef(!1),
            a = n.useRef(!1);
          return (0, y.jsx)(B, {
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
        B = n.forwardRef(((e, o) => {
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
          return (0, d.Oh)(), (0, y.jsx)(l.n, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: t,
            onUnmountAutoFocus: a,
            children: (0, y.jsx)(c.qW, {
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
        })),
        K = "PopoverClose",
        q = n.forwardRef(((e, o) => {
          const {
            __scopePopover: r,
            ...n
          } = e, a = x(K, r);
          return (0, y.jsx)(v.sG.button, {
            type: "button",
            ...n,
            ref: o,
            onClick: (0, t.m)(e.onClick, (() => a.onOpenChange(!1)))
          })
        }));
      q.displayName = K;
      var z = n.forwardRef(((e, o) => {
        const {
          __scopePopover: r,
          ...n
        } = e, t = C(r);
        return (0, y.jsx)(u.i3, {
          ...t,
          ...n,
          ref: o
        })
      }));

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
    25854: (e, o, r) => {
      e.exports = r(41454)
    },
    41454: (e, o, r) => {
      var n = r(71127),
        t = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, o, r) {
        var n, a = {},
          l = null,
          i = null;
        for (n in void 0 !== r && (l = "" + r), void 0 !== o.key && (l = "" + o.key), void 0 !== o.ref && (i = o.ref), o) s.call(o, n) && !d.hasOwnProperty(n) && (a[n] = o[n]);
        if (e && e.defaultProps)
          for (n in o = e.defaultProps) void 0 === a[n] && (a[n] = o[n]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: i,
          props: a,
          _owner: c.current
        }
      }
      o.Fragment = a, o.jsx = l, o.jsxs = l
    }
  }
]);