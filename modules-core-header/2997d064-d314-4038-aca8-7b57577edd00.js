try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "2997d064-d314-4038-aca8-7b57577edd00", e._sentryDebugIdIdentifier = "sentry-dbid-2997d064-d314-4038-aca8-7b57577edd00")
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
  [8872], {
    96491: (e, o, t) => {
      t.r(o), t.d(o, {
        Close: () => ae,
        Content: () => te,
        Description: () => re,
        Dialog: () => C,
        DialogClose: () => L,
        DialogContent: () => A,
        DialogDescription: () => B,
        DialogOverlay: () => k,
        DialogPortal: () => F,
        DialogTitle: () => $,
        DialogTrigger: () => x,
        Overlay: () => oe,
        Portal: () => ee,
        Root: () => Q,
        Title: () => ne,
        Trigger: () => X,
        WarningProvider: () => Y,
        createDialogScope: () => w
      });
      var n = t(71127),
        r = t(94118),
        a = t(95362),
        s = t(85426),
        i = t(74406),
        l = t(79158),
        d = t(89749),
        c = t(86683),
        u = t(34902),
        f = t(53146),
        p = t(78004),
        g = t(15234),
        b = t(19690),
        D = t(94926),
        y = t(21222),
        m = t(42295),
        _ = "Dialog",
        [h, w] = (0, s.A)(_),
        [v, R] = h(_),
        C = e => {
          const {
            __scopeDialog: o,
            children: t,
            open: r,
            defaultOpen: a,
            onOpenChange: s,
            modal: d = !0
          } = e, c = n.useRef(null), u = n.useRef(null), [f, p] = (0, l.useControllableState)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: s,
            caller: _
          });
          return (0, m.jsx)(v, {
            scope: o,
            triggerRef: c,
            contentRef: u,
            contentId: (0, i.useId)(),
            titleId: (0, i.useId)(),
            descriptionId: (0, i.useId)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: n.useCallback(() => p(e => !e), [p]),
            modal: d,
            children: t
          })
        };
      C.displayName = _;
      var I = "DialogTrigger",
        x = n.forwardRef((e, o) => {
          const {
            __scopeDialog: t,
            ...n
          } = e, s = R(I, t), i = (0, a.s)(o, s.triggerRef);
          return (0, m.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": U(s.open),
            ...n,
            ref: i,
            onClick: (0, r.mK)(e.onClick, s.onOpenToggle)
          })
        });
      x.displayName = I;
      var j = "DialogPortal",
        [O, E] = h(j, {
          forceMount: void 0
        }),
        F = e => {
          const {
            __scopeDialog: o,
            forceMount: t,
            children: r,
            container: a
          } = e, s = R(j, o);
          return (0, m.jsx)(O, {
            scope: o,
            forceMount: t,
            children: n.Children.map(r, e => (0, m.jsx)(f.C, {
              present: t || s.open,
              children: (0, m.jsx)(u.Portal, {
                asChild: !0,
                container: a,
                children: e
              })
            }))
          })
        };
      F.displayName = j;
      var M = "DialogOverlay",
        k = n.forwardRef((e, o) => {
          const t = E(M, e.__scopeDialog),
            {
              forceMount: n = t.forceMount,
              ...r
            } = e,
            a = R(M, e.__scopeDialog);
          return a.modal ? (0, m.jsx)(f.C, {
            present: n || a.open,
            children: (0, m.jsx)(T, {
              ...r,
              ref: o
            })
          }) : null
        });
      k.displayName = M;
      var N = (0, y.createSlot)("DialogOverlay.RemoveScroll"),
        T = n.forwardRef((e, o) => {
          const {
            __scopeDialog: t,
            ...n
          } = e, r = R(M, t);
          return (0, m.jsx)(b.RemoveScroll, {
            as: N,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: (0, m.jsx)(p.sG.div, {
              "data-state": U(r.open),
              ...n,
              ref: o,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        P = "DialogContent",
        A = n.forwardRef((e, o) => {
          const t = E(P, e.__scopeDialog),
            {
              forceMount: n = t.forceMount,
              ...r
            } = e,
            a = R(P, e.__scopeDialog);
          return (0, m.jsx)(f.C, {
            present: n || a.open,
            children: a.modal ? (0, m.jsx)(S, {
              ...r,
              ref: o
            }) : (0, m.jsx)(K, {
              ...r,
              ref: o
            })
          })
        });
      A.displayName = P;
      var S = n.forwardRef((e, o) => {
          const t = R(P, e.__scopeDialog),
            s = n.useRef(null),
            i = (0, a.s)(o, t.contentRef, s);
          return n.useEffect(() => {
            const e = s.current;
            if (e) return (0, D.Eq)(e)
          }, []), (0, m.jsx)(G, {
            ...e,
            ref: i,
            trapFocus: t.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, r.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), t.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, r.mK)(e.onPointerDownOutside, e => {
              const o = e.detail.originalEvent,
                t = 0 === o.button && !0 === o.ctrlKey;
              (2 === o.button || t) && e.preventDefault()
            }),
            onFocusOutside: (0, r.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        K = n.forwardRef((e, o) => {
          const t = R(P, e.__scopeDialog),
            r = n.useRef(!1),
            a = n.useRef(!1);
          return (0, m.jsx)(G, {
            ...e,
            ref: o,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: o => {
              e.onCloseAutoFocus?.(o), o.defaultPrevented || (r.current || t.triggerRef.current?.focus(), o.preventDefault()), r.current = !1, a.current = !1
            },
            onInteractOutside: o => {
              e.onInteractOutside?.(o), o.defaultPrevented || (r.current = !0, "pointerdown" === o.detail.originalEvent.type && (a.current = !0));
              const n = o.target,
                s = t.triggerRef.current?.contains(n);
              s && o.preventDefault(), "focusin" === o.detail.originalEvent.type && a.current && o.preventDefault()
            }
          })
        }),
        G = n.forwardRef((e, o) => {
          const {
            __scopeDialog: t,
            trapFocus: r,
            onOpenAutoFocus: s,
            onCloseAutoFocus: i,
            ...l
          } = e, u = R(P, t), f = n.useRef(null), p = (0, a.s)(o, f);
          return (0, g.Oh)(), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)(c.FocusScope, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: s,
              onUnmountAutoFocus: i,
              children: (0, m.jsx)(d.qW, {
                role: "dialog",
                id: u.contentId,
                "aria-describedby": u.descriptionId,
                "aria-labelledby": u.titleId,
                "data-state": U(u.open),
                ...l,
                ref: p,
                onDismiss: () => u.onOpenChange(!1)
              })
            }), (0, m.jsxs)(m.Fragment, {
              children: [(0, m.jsx)(z, {
                titleId: u.titleId
              }), (0, m.jsx)(J, {
                contentRef: f,
                descriptionId: u.descriptionId
              })]
            })]
          })
        }),
        W = "DialogTitle",
        $ = n.forwardRef((e, o) => {
          const {
            __scopeDialog: t,
            ...n
          } = e, r = R(W, t);
          return (0, m.jsx)(p.sG.h2, {
            id: r.titleId,
            ...n,
            ref: o
          })
        });
      $.displayName = W;
      var q = "DialogDescription",
        B = n.forwardRef((e, o) => {
          const {
            __scopeDialog: t,
            ...n
          } = e, r = R(q, t);
          return (0, m.jsx)(p.sG.p, {
            id: r.descriptionId,
            ...n,
            ref: o
          })
        });
      B.displayName = q;
      var H = "DialogClose",
        L = n.forwardRef((e, o) => {
          const {
            __scopeDialog: t,
            ...n
          } = e, a = R(H, t);
          return (0, m.jsx)(p.sG.button, {
            type: "button",
            ...n,
            ref: o,
            onClick: (0, r.mK)(e.onClick, () => a.onOpenChange(!1))
          })
        });

      function U(e) {
        return e ? "open" : "closed"
      }
      L.displayName = H;
      var V = "DialogTitleWarning",
        [Y, Z] = (0, s.q)(V, {
          contentName: P,
          titleName: W,
          docsSlug: "dialog"
        }),
        z = ({
          titleId: e
        }) => {
          const o = Z(V),
            t = `\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;
          return n.useEffect(() => {
            e && (document.getElementById(e) || console.error(t))
          }, [t, e]), null
        },
        J = ({
          contentRef: e,
          descriptionId: o
        }) => {
          const t = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Z("DialogDescriptionWarning").contentName}}.`;
          return n.useEffect(() => {
            const n = e.current?.getAttribute("aria-describedby");
            o && n && (document.getElementById(o) || console.warn(t))
          }, [t, e, o]), null
        },
        Q = C,
        X = x,
        ee = F,
        oe = k,
        te = A,
        ne = $,
        re = B,
        ae = L
    }
  }
]);