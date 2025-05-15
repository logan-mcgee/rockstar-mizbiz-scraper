! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      o = (new e.Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "db18fcbb-774d-442a-8431-c6543b24eefe", e._sentryDebugIdIdentifier = "sentry-dbid-db18fcbb-774d-442a-8431-c6543b24eefe")
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
  [616, 1155, 3473, 3536, 5854], {
    3536: (e, o, r) => {
      r.r(o), r.d(o, {
        Anchor: () => Y,
        Arrow: () => Q,
        Close: () => J,
        Content: () => H,
        Popover: () => M,
        PopoverAnchor: () => k,
        PopoverArrow: () => q,
        PopoverClose: () => K,
        PopoverContent: () => N,
        PopoverPortal: () => I,
        PopoverTrigger: () => E,
        Portal: () => Z,
        Root: () => W,
        Trigger: () => $,
        createPopoverScope: () => m
      });
      var t = r(71127),
        n = r(65998),
        a = r(86410),
        s = r(29818),
        d = r(19202),
        l = r(27114),
        i = r(72480),
        u = r(74406),
        c = r(45421),
        p = r(34902),
        f = r(36146),
        v = r(85100),
        g = r(21222),
        h = r(52806),
        b = r(98463),
        _ = r(19690),
        y = r(25854),
        P = "Popover",
        [w, m] = (0, s.A)(P, [c.Bk]),
        C = (0, c.Bk)(),
        [O, x] = w(P),
        M = e => {
          const {
            __scopePopover: o,
            children: r,
            open: n,
            defaultOpen: a,
            onOpenChange: s,
            modal: d = !1
          } = e, l = C(o), i = t.useRef(null), [p, f] = t.useState(!1), [v, g] = (0, h.i)({
            prop: n,
            defaultProp: a ?? !1,
            onChange: s,
            caller: P
          });
          return (0, y.jsx)(c.bL, {
            ...l,
            children: (0, y.jsx)(O, {
              scope: o,
              contentId: (0, u.useId)(),
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
      M.displayName = P;
      var R = "PopoverAnchor",
        k = t.forwardRef(((e, o) => {
          const {
            __scopePopover: r,
            ...n
          } = e, a = x(R, r), s = C(r), {
            onCustomAnchorAdd: d,
            onCustomAnchorRemove: l
          } = a;
          return t.useEffect((() => (d(), () => l())), [d, l]), (0, y.jsx)(c.Mz, {
            ...s,
            ...n,
            ref: o
          })
        }));
      k.displayName = R;
      var A = "PopoverTrigger",
        E = t.forwardRef(((e, o) => {
          const {
            __scopePopover: r,
            ...t
          } = e, s = x(A, r), d = C(r), l = (0, a.s)(o, s.triggerRef), i = (0, y.jsx)(v.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": z(s.open),
            ...t,
            ref: l,
            onClick: (0, n.m)(e.onClick, s.onOpenToggle)
          });
          return s.hasCustomAnchor ? i : (0, y.jsx)(c.Mz, {
            asChild: !0,
            ...d,
            children: i
          })
        }));
      E.displayName = A;
      var j = "PopoverPortal",
        [D, F] = w(j, {
          forceMount: void 0
        }),
        I = e => {
          const {
            __scopePopover: o,
            forceMount: r,
            children: t,
            container: n
          } = e, a = x(j, o);
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
      I.displayName = j;
      var T = "PopoverContent",
        N = t.forwardRef(((e, o) => {
          const r = F(T, e.__scopePopover),
            {
              forceMount: t = r.forceMount,
              ...n
            } = e,
            a = x(T, e.__scopePopover);
          return (0, y.jsx)(f.C, {
            present: t || a.open,
            children: a.modal ? (0, y.jsx)(G, {
              ...n,
              ref: o
            }) : (0, y.jsx)(L, {
              ...n,
              ref: o
            })
          })
        }));
      N.displayName = T;
      var S = (0, g.createSlot)("PopoverContent.RemoveScroll"),
        G = t.forwardRef(((e, o) => {
          const r = x(T, e.__scopePopover),
            s = t.useRef(null),
            d = (0, a.s)(o, s),
            l = t.useRef(!1);
          return t.useEffect((() => {
            const e = s.current;
            if (e) return (0, b.Eq)(e)
          }), []), (0, y.jsx)(_.RemoveScroll, {
            as: S,
            allowPinchZoom: !0,
            children: (0, y.jsx)(U, {
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
        L = t.forwardRef(((e, o) => {
          const r = x(T, e.__scopePopover),
            n = t.useRef(!1),
            a = t.useRef(!1);
          return (0, y.jsx)(U, {
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
        U = t.forwardRef(((e, o) => {
          const {
            __scopePopover: r,
            trapFocus: t,
            onOpenAutoFocus: n,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: u,
            onPointerDownOutside: p,
            onFocusOutside: f,
            onInteractOutside: v,
            ...g
          } = e, h = x(T, r), b = C(r);
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
              onEscapeKeyDown: u,
              onPointerDownOutside: p,
              onFocusOutside: f,
              onDismiss: () => h.onOpenChange(!1),
              children: (0, y.jsx)(c.UC, {
                "data-state": z(h.open),
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
        B = "PopoverClose",
        K = t.forwardRef(((e, o) => {
          const {
            __scopePopover: r,
            ...t
          } = e, a = x(B, r);
          return (0, y.jsx)(v.sG.button, {
            type: "button",
            ...t,
            ref: o,
            onClick: (0, n.m)(e.onClick, (() => a.onOpenChange(!1)))
          })
        }));
      K.displayName = B;
      var q = t.forwardRef(((e, o) => {
        const {
          __scopePopover: r,
          ...t
        } = e, n = C(r);
        return (0, y.jsx)(c.i3, {
          ...n,
          ...t,
          ref: o
        })
      }));

      function z(e) {
        return e ? "open" : "closed"
      }
      q.displayName = "PopoverArrow";
      var W = M,
        Y = k,
        $ = E,
        Z = I,
        H = N,
        J = K,
        Q = q
    },
    25854: (e, o, r) => {
      e.exports = r(41454)
    },
    41454: (e, o, r) => {
      var t = r(71127),
        n = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, o, r) {
        var t, a = {},
          i = null,
          u = null;
        for (t in void 0 !== r && (i = "" + r), void 0 !== o.key && (i = "" + o.key), void 0 !== o.ref && (u = o.ref), o) s.call(o, t) && !l.hasOwnProperty(t) && (a[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === a[t] && (a[t] = o[t]);
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: u,
          props: a,
          _owner: d.current
        }
      }
      o.Fragment = a, o.jsx = i, o.jsxs = i
    }
  }
]);