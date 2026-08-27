try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e8012153-1968-498f-b2f4-ae4b23530823", e._sentryDebugIdIdentifier = "sentry-dbid-e8012153-1968-498f-b2f4-ae4b23530823")
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
  [5921], {
    45787(e, t, n) {
      n.d(t, {
        Eq: () => l
      });
      var o = new WeakMap,
        r = new WeakMap,
        a = {},
        i = 0,
        s = function(e) {
          return e && (e.host || s(e.parentNode))
        },
        l = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var l = Array.from(Array.isArray(e) ? e : [e]),
            u = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return u ? (l.push.apply(l, Array.from(u.querySelectorAll("[aria-live], script"))), function(e, t, n, l) {
            var u = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var n = s(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(t, Array.isArray(e) ? e : [e]);
            a[n] || (a[n] = new WeakMap);
            var d = a[n],
              c = [],
              f = new Set,
              p = new Set(u),
              g = function(e) {
                e && !f.has(e) && (f.add(e), g(e.parentNode))
              };
            u.forEach(g);
            var D = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (f.has(e)) D(e);
                else try {
                  var t = e.getAttribute(l),
                    a = null !== t && "false" !== t,
                    i = (o.get(e) || 0) + 1,
                    s = (d.get(e) || 0) + 1;
                  o.set(e, i), d.set(e, s), c.push(e), 1 === i && a && r.set(e, !0), 1 === s && e.setAttribute(n, "true"), a || e.setAttribute(l, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              })
            };
            return D(t), f.clear(), i++,
              function() {
                c.forEach(function(e) {
                  var t = o.get(e) - 1,
                    a = d.get(e) - 1;
                  o.set(e, t), d.set(e, a), t || (r.has(e) || e.removeAttribute(l), r.delete(e)), a || e.removeAttribute(n)
                }), --i || (o = new WeakMap, o = new WeakMap, r = new WeakMap, a = {})
              }
          }(l, u, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    75921(e, t, n) {
      n.r(t), n.d(t, {
        Close: () => U,
        Content: () => G,
        Description: () => L,
        Dialog: () => E,
        DialogClose: () => U,
        DialogContent: () => G,
        DialogDescription: () => L,
        DialogOverlay: () => T,
        DialogPortal: () => I,
        DialogTitle: () => B,
        DialogTrigger: () => j,
        Overlay: () => T,
        Portal: () => I,
        Root: () => E,
        Title: () => B,
        Trigger: () => j,
        WarningProvider: () => Y,
        createDialogScope: () => A
      });
      var o = n(4637),
        r = n(44752),
        a = n(85049),
        i = n(72579),
        s = n(31431),
        l = n(44622),
        u = n(78077),
        d = n(93778),
        c = n(743),
        f = n(81432),
        p = n(41988),
        g = n(86187),
        D = n(9608),
        y = n(59113),
        h = n(45787),
        b = n(49481),
        v = n(39793),
        m = Object.defineProperty,
        _ = (e, t) => m(e, "name", {
          value: t,
          configurable: !0
        }),
        w = "Dialog",
        [C, A] = (0, i.A)(w),
        [O, R] = C(w),
        E = _(e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: a,
            onOpenChange: i,
            modal: u = !0
          } = e, d = o.useRef(null), c = o.useRef(null), [f, p] = (0, l.useControllableState)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: i,
            caller: w
          }), [g, D] = o.useState(0), [y, h] = o.useState(0);
          return (0, v.jsx)(O, {
            scope: t,
            triggerRef: d,
            contentRef: c,
            contentId: (0, s.useId)(),
            titleId: (0, s.useId)(),
            descriptionId: (0, s.useId)(),
            titlePresent: g > 0,
            descriptionPresent: y > 0,
            setTitleCount: D,
            setDescriptionCount: h,
            open: f,
            onOpenChange: p,
            onOpenToggle: o.useCallback(() => p(e => !e), [p]),
            modal: u,
            children: n
          })
        }, "Dialog"),
        j = o.forwardRef(_(function(e, t) {
          const {
            __scopeDialog: n,
            ...o
          } = e, i = R("DialogTrigger", n), s = (0, a.s)(t, i.triggerRef);
          return (0, v.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.open ? i.contentId : void 0,
            "data-state": Z(i.open),
            ...o,
            ref: s,
            onClick: (0, r.mK)(e.onClick, i.onOpenToggle)
          })
        }, "DialogTrigger")),
        x = "DialogPortal",
        [M, k] = C(x, {
          forceMount: void 0
        }),
        I = _(e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: a
          } = e, i = R(x, t);
          return (0, v.jsx)(M, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, e => (0, v.jsx)(f.C, {
              present: n || i.open,
              children: (0, v.jsx)(c.Portal, {
                asChild: !0,
                container: a,
                children: e
              })
            }))
          })
        }, "DialogPortal"),
        P = "DialogOverlay",
        T = o.forwardRef(_(function(e, t) {
          const n = k(P, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            a = R(P, e.__scopeDialog);
          return a.modal ? (0, v.jsx)(f.C, {
            present: o || a.open,
            children: (0, v.jsx)(S, {
              ...r,
              ref: t
            })
          }) : null
        }, "DialogOverlay")),
        F = (0, b.createSlot)("DialogOverlay.RemoveScroll"),
        S = o.forwardRef(_(function(e, t) {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = R(P, n), i = (0, u.e0)(), s = (0, a.s)(t, i);
          return (0, v.jsx)(y.RemoveScroll, {
            as: F,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: (0, v.jsx)(p.sG.div, {
              "data-state": Z(r.open),
              ...o,
              ref: s,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        }, "DialogOverlayImpl")),
        W = "DialogContent",
        G = o.forwardRef(_(function(e, t) {
          const n = k(W, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            a = R(W, e.__scopeDialog);
          return (0, v.jsx)(f.C, {
            present: o || a.open,
            children: a.modal ? (0, v.jsx)(N, {
              ...r,
              ref: t
            }) : (0, v.jsx)(K, {
              ...r,
              ref: t
            })
          })
        }, "DialogContent")),
        N = o.forwardRef(_(function(e, t) {
          const n = R(W, e.__scopeDialog),
            i = o.useRef(null),
            s = (0, a.s)(t, n.contentRef, i);
          return o.useEffect(() => {
            const e = i.current;
            if (e) return (0, h.Eq)(e)
          }, []), (0, v.jsx)(q, {
            ...e,
            ref: s,
            trapFocus: n.open,
            disableOutsidePointerEvents: n.open,
            onCloseAutoFocus: (0, r.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, r.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: (0, r.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }, "DialogContentModal")),
        K = o.forwardRef(_(function(e, t) {
          const n = R(W, e.__scopeDialog),
            r = o.useRef(!1),
            a = o.useRef(!1);
          return (0, v.jsx)(q, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, a.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (a.current = !0));
              const o = t.target,
                i = n.triggerRef.current?.contains(o);
              i && t.preventDefault(), "focusin" === t.detail.originalEvent.type && a.current && t.preventDefault()
            }
          })
        }, "DialogContentNonModal")),
        q = o.forwardRef(_(function(e, t) {
          const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: r,
            onCloseAutoFocus: a,
            ...i
          } = e, s = R(W, n);
          return (0, g.Oh)(), (0, v.jsx)(v.Fragment, {
            children: (0, v.jsx)(d.FocusScope, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: r,
              onUnmountAutoFocus: a,
              children: (0, v.jsx)(u.qW, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionPresent ? s.descriptionId : void 0,
                "aria-labelledby": s.titlePresent ? s.titleId : void 0,
                "data-state": Z(s.open),
                ...i,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => s.onOpenChange(!1)
              })
            })
          })
        }, "DialogContentImpl")),
        B = o.forwardRef(_(function(e, t) {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = R("DialogTitle", n), {
            setTitleCount: a
          } = r;
          return (0, D.N)(() => (a(e => e + 1), () => a(e => e - 1)), [a]), (0, v.jsx)(p.sG.h2, {
            id: r.titleId,
            ...o,
            ref: t
          })
        }, "DialogTitle")),
        L = o.forwardRef(_(function(e, t) {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = R("DialogDescription", n), {
            setDescriptionCount: a
          } = r;
          return (0, D.N)(() => (a(e => e + 1), () => a(e => e - 1)), [a]), (0, v.jsx)(p.sG.p, {
            id: r.descriptionId,
            ...o,
            ref: t
          })
        }, "DialogDescription")),
        U = o.forwardRef(_(function(e, t) {
          const {
            __scopeDialog: n,
            ...o
          } = e, a = R("DialogClose", n);
          return (0, v.jsx)(p.sG.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: (0, r.mK)(e.onClick, () => a.onOpenChange(!1))
          })
        }, "DialogClose")),
        Y = _(e => e.children, "WarningProvider");

      function Z(e) {
        return e ? "open" : "closed"
      }
      _(Z, "getState")
    },
    86187(e, t, n) {
      n.d(t, {
        Oh: () => l
      });
      var o = n(4637),
        r = Object.defineProperty,
        a = (e, t) => r(e, "name", {
          value: t,
          configurable: !0
        }),
        i = 0,
        s = null;

      function l() {
        o.useEffect(() => {
          s || (s = {
            start: u(),
            end: u()
          });
          const {
            start: e,
            end: t
          } = s;
          return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), i++, () => {
            1 === i && (s?.start.remove(), s?.end.remove(), s = null), i = Math.max(0, i - 1)
          }
        }, [])
      }

      function u() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      a(function(e) {
        return l(), e.children
      }, "FocusGuards"), a(l, "useFocusGuards"), a(u, "createFocusGuard")
    }
  }
]);