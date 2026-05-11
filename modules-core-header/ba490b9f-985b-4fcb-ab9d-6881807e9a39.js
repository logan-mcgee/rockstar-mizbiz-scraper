try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ba490b9f-985b-4fcb-ab9d-6881807e9a39", e._sentryDebugIdIdentifier = "sentry-dbid-ba490b9f-985b-4fcb-ab9d-6881807e9a39")
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
  [2551], {
    94926(e, t, n) {
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
            d = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return d ? (l.push.apply(l, Array.from(d.querySelectorAll("[aria-live], script"))), function(e, t, n, l) {
            var d = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var n = s(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(t, Array.isArray(e) ? e : [e]);
            a[n] || (a[n] = new WeakMap);
            var c = a[n],
              u = [],
              f = new Set,
              p = new Set(d),
              g = function(e) {
                e && !f.has(e) && (f.add(e), g(e.parentNode))
              };
            d.forEach(g);
            var b = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (f.has(e)) b(e);
                else try {
                  var t = e.getAttribute(l),
                    a = null !== t && "false" !== t,
                    i = (o.get(e) || 0) + 1,
                    s = (c.get(e) || 0) + 1;
                  o.set(e, i), c.set(e, s), u.push(e), 1 === i && a && r.set(e, !0), 1 === s && e.setAttribute(n, "true"), a || e.setAttribute(l, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              })
            };
            return b(t), f.clear(), i++,
              function() {
                u.forEach(function(e) {
                  var t = o.get(e) - 1,
                    a = c.get(e) - 1;
                  o.set(e, t), c.set(e, a), t || (r.has(e) || e.removeAttribute(l), r.delete(e)), a || e.removeAttribute(n)
                }), --i || (o = new WeakMap, o = new WeakMap, r = new WeakMap, a = {})
              }
          }(l, d, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    22551(e, t, n) {
      n.r(t), n.d(t, {
        Close: () => ae,
        Content: () => ne,
        Description: () => re,
        Dialog: () => R,
        DialogClose: () => L,
        DialogContent: () => S,
        DialogDescription: () => B,
        DialogOverlay: () => k,
        DialogPortal: () => M,
        DialogTitle: () => G,
        DialogTrigger: () => C,
        Overlay: () => te,
        Portal: () => ee,
        Root: () => Q,
        Title: () => oe,
        Trigger: () => X,
        WarningProvider: () => Y,
        createDialogScope: () => _
      });
      var o = n(71127),
        r = n(94118),
        a = n(95362),
        i = n(85426),
        s = n(10250),
        l = n(66190),
        d = n(1573),
        c = n(23111),
        u = n(84594),
        f = n(53146),
        p = n(78004),
        g = n(15234),
        b = n(82422),
        y = n(94926),
        m = n(12878),
        h = n(42295),
        D = "Dialog",
        [v, _] = (0, i.A)(D),
        [w, A] = v(D),
        R = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: a,
            onOpenChange: i,
            modal: d = !0
          } = e, c = o.useRef(null), u = o.useRef(null), [f, p] = (0, l.useControllableState)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: i,
            caller: D
          });
          return (0, h.jsx)(w, {
            scope: t,
            triggerRef: c,
            contentRef: u,
            contentId: (0, s.useId)(),
            titleId: (0, s.useId)(),
            descriptionId: (0, s.useId)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: o.useCallback(() => p(e => !e), [p]),
            modal: d,
            children: n
          })
        };
      R.displayName = D;
      var x = "DialogTrigger",
        C = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, i = A(x, n), s = (0, a.s)(t, i.triggerRef);
          return (0, h.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.contentId,
            "data-state": U(i.open),
            ...o,
            ref: s,
            onClick: (0, r.mK)(e.onClick, i.onOpenToggle)
          })
        });
      C.displayName = x;
      var E = "DialogPortal",
        [I, j] = v(E, {
          forceMount: void 0
        }),
        M = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: a
          } = e, i = A(E, t);
          return (0, h.jsx)(I, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, e => (0, h.jsx)(f.C, {
              present: n || i.open,
              children: (0, h.jsx)(u.Portal, {
                asChild: !0,
                container: a,
                children: e
              })
            }))
          })
        };
      M.displayName = E;
      var O = "DialogOverlay",
        k = o.forwardRef((e, t) => {
          const n = j(O, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            a = A(O, e.__scopeDialog);
          return a.modal ? (0, h.jsx)(f.C, {
            present: o || a.open,
            children: (0, h.jsx)(F, {
              ...r,
              ref: t
            })
          }) : null
        });
      k.displayName = O;
      var N = (0, m.createSlot)("DialogOverlay.RemoveScroll"),
        F = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = A(O, n);
          return (0, h.jsx)(b.RemoveScroll, {
            as: N,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: (0, h.jsx)(p.sG.div, {
              "data-state": U(r.open),
              ...o,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        }),
        T = "DialogContent",
        S = o.forwardRef((e, t) => {
          const n = j(T, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            a = A(T, e.__scopeDialog);
          return (0, h.jsx)(f.C, {
            present: o || a.open,
            children: a.modal ? (0, h.jsx)(P, {
              ...r,
              ref: t
            }) : (0, h.jsx)(W, {
              ...r,
              ref: t
            })
          })
        });
      S.displayName = T;
      var P = o.forwardRef((e, t) => {
          const n = A(T, e.__scopeDialog),
            i = o.useRef(null),
            s = (0, a.s)(t, n.contentRef, i);
          return o.useEffect(() => {
            const e = i.current;
            if (e) return (0, y.Eq)(e)
          }, []), (0, h.jsx)(q, {
            ...e,
            ref: s,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
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
          const n = A(T, e.__scopeDialog),
            r = o.useRef(!1),
            a = o.useRef(!1);
          return (0, h.jsx)(q, {
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
        }),
        q = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: i,
            onCloseAutoFocus: s,
            ...l
          } = e, u = A(T, n), f = o.useRef(null), p = (0, a.s)(t, f);
          return (0, g.Oh)(), (0, h.jsxs)(h.Fragment, {
            children: [(0, h.jsx)(c.FocusScope, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: i,
              onUnmountAutoFocus: s,
              children: (0, h.jsx)(d.qW, {
                role: "dialog",
                id: u.contentId,
                "aria-describedby": u.descriptionId,
                "aria-labelledby": u.titleId,
                "data-state": U(u.open),
                ...l,
                ref: p,
                onDismiss: () => u.onOpenChange(!1)
              })
            }), (0, h.jsxs)(h.Fragment, {
              children: [(0, h.jsx)(z, {
                titleId: u.titleId
              }), (0, h.jsx)(J, {
                contentRef: f,
                descriptionId: u.descriptionId
              })]
            })]
          })
        }),
        K = "DialogTitle",
        G = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = A(K, n);
          return (0, h.jsx)(p.sG.h2, {
            id: r.titleId,
            ...o,
            ref: t
          })
        });
      G.displayName = K;
      var $ = "DialogDescription",
        B = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = A($, n);
          return (0, h.jsx)(p.sG.p, {
            id: r.descriptionId,
            ...o,
            ref: t
          })
        });
      B.displayName = $;
      var H = "DialogClose",
        L = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, a = A(H, n);
          return (0, h.jsx)(p.sG.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: (0, r.mK)(e.onClick, () => a.onOpenChange(!1))
          })
        });

      function U(e) {
        return e ? "open" : "closed"
      }
      L.displayName = H;
      var V = "DialogTitleWarning",
        [Y, Z] = (0, i.q)(V, {
          contentName: T,
          titleName: K,
          docsSlug: "dialog"
        }),
        z = ({
          titleId: e
        }) => {
          const t = Z(V),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return o.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        J = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Z("DialogDescriptionWarning").contentName}}.`;
          return o.useEffect(() => {
            const o = e.current?.getAttribute("aria-describedby");
            t && o && (document.getElementById(t) || console.warn(n))
          }, [n, e, t]), null
        },
        Q = R,
        X = C,
        ee = M,
        te = k,
        ne = S,
        oe = G,
        re = B,
        ae = L
    },
    15234(e, t, n) {
      n.d(t, {
        Oh: () => a
      });
      var o = n(71127),
        r = 0;

      function a() {
        o.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? i()), document.body.insertAdjacentElement("beforeend", e[1] ?? i()), r++, () => {
            1 === r && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), r--
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