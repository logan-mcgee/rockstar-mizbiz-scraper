try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "55d1fbe5-e347-4e71-9e82-20f27fd00880", e._sentryDebugIdIdentifier = "sentry-dbid-55d1fbe5-e347-4e71-9e82-20f27fd00880")
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
  [7720], {
    45787(e, t, n) {
      n.d(t, {
        Eq: () => l
      });
      var o = new WeakMap,
        r = new WeakMap,
        a = {},
        s = 0,
        i = function(e) {
          return e && (e.host || i(e.parentNode))
        },
        l = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var l = Array.from(Array.isArray(e) ? e : [e]),
            d = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return d ? (l.push.apply(l, Array.from(d.querySelectorAll("[aria-live], script"))), function(e, t, n, l) {
            var d = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var n = i(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(t, Array.isArray(e) ? e : [e]);
            a[n] || (a[n] = new WeakMap);
            var u = a[n],
              c = [],
              f = new Set,
              p = new Set(d),
              g = function(e) {
                e && !f.has(e) && (f.add(e), g(e.parentNode))
              };
            d.forEach(g);
            var y = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (f.has(e)) y(e);
                else try {
                  var t = e.getAttribute(l),
                    a = null !== t && "false" !== t,
                    s = (o.get(e) || 0) + 1,
                    i = (u.get(e) || 0) + 1;
                  o.set(e, s), u.set(e, i), c.push(e), 1 === s && a && r.set(e, !0), 1 === i && e.setAttribute(n, "true"), a || e.setAttribute(l, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              })
            };
            return y(t), f.clear(), s++,
              function() {
                c.forEach(function(e) {
                  var t = o.get(e) - 1,
                    a = u.get(e) - 1;
                  o.set(e, t), u.set(e, a), t || (r.has(e) || e.removeAttribute(l), r.delete(e)), a || e.removeAttribute(n)
                }), --s || (o = new WeakMap, o = new WeakMap, r = new WeakMap, a = {})
              }
          }(l, d, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    85339(e, t, n) {
      n.r(t), n.d(t, {
        Close: () => Y,
        Content: () => N,
        Description: () => L,
        Dialog: () => A,
        DialogClose: () => Y,
        DialogContent: () => N,
        DialogDescription: () => L,
        DialogOverlay: () => I,
        DialogPortal: () => M,
        DialogTitle: () => q,
        DialogTrigger: () => E,
        Overlay: () => I,
        Portal: () => M,
        Root: () => A,
        Title: () => q,
        Trigger: () => E,
        WarningProvider: () => Z,
        createDialogScope: () => _
      });
      var o = n(4637),
        r = n(39467),
        a = n(64239),
        s = n(54958),
        i = n(82449),
        l = n(92939),
        d = n(13588),
        u = n(76765),
        c = n(2272),
        f = n(66624),
        p = n(80082),
        g = n(38174),
        y = n(59113),
        h = n(45787),
        b = n(50486),
        m = n(39793),
        D = "Dialog",
        [v, _] = (0, s.A)(D),
        [w, C] = v(D),
        A = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: a,
            onOpenChange: s,
            modal: d = !0
          } = e, u = o.useRef(null), c = o.useRef(null), [f, p] = (0, l.useControllableState)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: s,
            caller: D
          });
          return (0, m.jsx)(w, {
            scope: t,
            triggerRef: u,
            contentRef: c,
            contentId: (0, i.useId)(),
            titleId: (0, i.useId)(),
            descriptionId: (0, i.useId)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: o.useCallback(() => p(e => !e), [p]),
            modal: d,
            children: n
          })
        };
      A.displayName = D;
      var R = "DialogTrigger",
        E = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, s = C(R, n), i = (0, a.s)(t, s.triggerRef);
          return (0, m.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.open ? s.contentId : void 0,
            "data-state": z(s.open),
            ...o,
            ref: i,
            onClick: (0, r.mK)(e.onClick, s.onOpenToggle)
          })
        });
      E.displayName = R;
      var x = "DialogPortal",
        [O, j] = v(x, {
          forceMount: void 0
        }),
        M = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: a
          } = e, s = C(x, t);
          return (0, m.jsx)(O, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, e => (0, m.jsx)(f.C, {
              present: n || s.open,
              children: (0, m.jsx)(c.Portal, {
                asChild: !0,
                container: a,
                children: e
              })
            }))
          })
        };
      M.displayName = x;
      var k = "DialogOverlay",
        I = o.forwardRef((e, t) => {
          const n = j(k, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            a = C(k, e.__scopeDialog);
          return a.modal ? (0, m.jsx)(f.C, {
            present: o || a.open,
            children: (0, m.jsx)(T, {
              ...r,
              ref: t
            })
          }) : null
        });
      I.displayName = k;
      var F = (0, b.createSlot)("DialogOverlay.RemoveScroll"),
        T = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = C(k, n), s = (0, d.e0)(), i = (0, a.s)(t, s);
          return (0, m.jsx)(y.RemoveScroll, {
            as: F,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: (0, m.jsx)(p.sG.div, {
              "data-state": z(r.open),
              ...o,
              ref: i,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        }),
        P = "DialogContent",
        N = o.forwardRef((e, t) => {
          const n = j(P, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            a = C(P, e.__scopeDialog);
          return (0, m.jsx)(f.C, {
            present: o || a.open,
            children: a.modal ? (0, m.jsx)(S, {
              ...r,
              ref: t
            }) : (0, m.jsx)(W, {
              ...r,
              ref: t
            })
          })
        });
      N.displayName = P;
      var S = o.forwardRef((e, t) => {
          const n = C(P, e.__scopeDialog),
            s = o.useRef(null),
            i = (0, a.s)(t, n.contentRef, s);
          return o.useEffect(() => {
            const e = s.current;
            if (e) return (0, h.Eq)(e)
          }, []), (0, m.jsx)(K, {
            ...e,
            ref: i,
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
        }),
        W = o.forwardRef((e, t) => {
          const n = C(P, e.__scopeDialog),
            r = o.useRef(!1),
            a = o.useRef(!1);
          return (0, m.jsx)(K, {
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
                s = n.triggerRef.current?.contains(o);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && a.current && t.preventDefault()
            }
          })
        }),
        K = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: r,
            onCloseAutoFocus: a,
            ...s
          } = e, i = C(P, n);
          return (0, g.Oh)(), (0, m.jsx)(m.Fragment, {
            children: (0, m.jsx)(u.FocusScope, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: r,
              onUnmountAutoFocus: a,
              children: (0, m.jsx)(d.qW, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": z(i.open),
                ...s,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => i.onOpenChange(!1)
              })
            })
          })
        }),
        G = "DialogTitle",
        q = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = C(G, n);
          return (0, m.jsx)(p.sG.h2, {
            id: r.titleId,
            ...o,
            ref: t
          })
        });
      q.displayName = G;
      var B = "DialogDescription",
        L = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = C(B, n);
          return (0, m.jsx)(p.sG.p, {
            id: r.descriptionId,
            ...o,
            ref: t
          })
        });
      L.displayName = B;
      var U = "DialogClose",
        Y = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, a = C(U, n);
          return (0, m.jsx)(p.sG.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: (0, r.mK)(e.onClick, () => a.onOpenChange(!1))
          })
        });
      Y.displayName = U;
      var Z = e => e.children;

      function z(e) {
        return e ? "open" : "closed"
      }
    },
    38174(e, t, n) {
      n.d(t, {
        Oh: () => s
      });
      var o = n(4637),
        r = 0,
        a = null;

      function s() {
        o.useEffect(() => {
          a || (a = {
            start: i(),
            end: i()
          });
          const {
            start: e,
            end: t
          } = a;
          return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), r++, () => {
            1 === r && (a?.start.remove(), a?.end.remove(), a = null), r = Math.max(0, r - 1)
          }
        }, [])
      }

      function i() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
    }
  }
]);