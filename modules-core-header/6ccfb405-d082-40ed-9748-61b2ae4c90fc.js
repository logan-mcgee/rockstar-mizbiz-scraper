try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6ccfb405-d082-40ed-9748-61b2ae4c90fc", e._sentryDebugIdIdentifier = "sentry-dbid-6ccfb405-d082-40ed-9748-61b2ae4c90fc")
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
    15234: (e, t, n) => {
      n.d(t, {
        Oh: () => a
      });
      var o = n(71127),
        r = 0;

      function a() {
        o.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? i()), document.body.insertAdjacentElement("beforeend", e[1] ?? i()), r++, () => {
            1 === r && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), r--
          }
        }), [])
      }

      function i() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
    },
    22551: (e, t, n) => {
      n.r(t), n.d(t, {
        Close: () => ae,
        Content: () => ne,
        Description: () => re,
        Dialog: () => R,
        DialogClose: () => L,
        DialogContent: () => S,
        DialogDescription: () => H,
        DialogOverlay: () => k,
        DialogPortal: () => M,
        DialogTitle: () => $,
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
        s = n(74406),
        l = n(79158),
        c = n(89749),
        d = n(56041),
        u = n(34902),
        f = n(53146),
        p = n(78004),
        g = n(15234),
        y = n(19690),
        m = n(94926),
        h = n(21222),
        b = n(42295),
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
            modal: c = !0
          } = e, d = o.useRef(null), u = o.useRef(null), [f, p] = (0, l.useControllableState)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: i,
            caller: D
          });
          return (0, b.jsx)(w, {
            scope: t,
            triggerRef: d,
            contentRef: u,
            contentId: (0, s.useId)(),
            titleId: (0, s.useId)(),
            descriptionId: (0, s.useId)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: o.useCallback((() => p((e => !e))), [p]),
            modal: c,
            children: n
          })
        };
      R.displayName = D;
      var x = "DialogTrigger",
        C = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, i = A(x, n), s = (0, a.s)(t, i.triggerRef);
          return (0, b.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.contentId,
            "data-state": U(i.open),
            ...o,
            ref: s,
            onClick: (0, r.m)(e.onClick, i.onOpenToggle)
          })
        }));
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
          return (0, b.jsx)(I, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, (e => (0, b.jsx)(f.C, {
              present: n || i.open,
              children: (0, b.jsx)(u.Portal, {
                asChild: !0,
                container: a,
                children: e
              })
            })))
          })
        };
      M.displayName = E;
      var O = "DialogOverlay",
        k = o.forwardRef(((e, t) => {
          const n = j(O, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            a = A(O, e.__scopeDialog);
          return a.modal ? (0, b.jsx)(f.C, {
            present: o || a.open,
            children: (0, b.jsx)(F, {
              ...r,
              ref: t
            })
          }) : null
        }));
      k.displayName = O;
      var N = (0, h.createSlot)("DialogOverlay.RemoveScroll"),
        F = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = A(O, n);
          return (0, b.jsx)(y.RemoveScroll, {
            as: N,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: (0, b.jsx)(p.sG.div, {
              "data-state": U(r.open),
              ...o,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        })),
        T = "DialogContent",
        S = o.forwardRef(((e, t) => {
          const n = j(T, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            a = A(T, e.__scopeDialog);
          return (0, b.jsx)(f.C, {
            present: o || a.open,
            children: a.modal ? (0, b.jsx)(P, {
              ...r,
              ref: t
            }) : (0, b.jsx)(W, {
              ...r,
              ref: t
            })
          })
        }));
      S.displayName = T;
      var P = o.forwardRef(((e, t) => {
          const n = A(T, e.__scopeDialog),
            i = o.useRef(null),
            s = (0, a.s)(t, n.contentRef, i);
          return o.useEffect((() => {
            const e = i.current;
            if (e) return (0, m.Eq)(e)
          }), []), (0, b.jsx)(q, {
            ...e,
            ref: s,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, r.m)(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: (0, r.m)(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: (0, r.m)(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        W = o.forwardRef(((e, t) => {
          const n = A(T, e.__scopeDialog),
            r = o.useRef(!1),
            a = o.useRef(!1);
          return (0, b.jsx)(q, {
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
        })),
        q = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: i,
            onCloseAutoFocus: s,
            ...l
          } = e, u = A(T, n), f = o.useRef(null), p = (0, a.s)(t, f);
          return (0, g.Oh)(), (0, b.jsxs)(b.Fragment, {
            children: [(0, b.jsx)(d.FocusScope, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: i,
              onUnmountAutoFocus: s,
              children: (0, b.jsx)(c.qW, {
                role: "dialog",
                id: u.contentId,
                "aria-describedby": u.descriptionId,
                "aria-labelledby": u.titleId,
                "data-state": U(u.open),
                ...l,
                ref: p,
                onDismiss: () => u.onOpenChange(!1)
              })
            }), (0, b.jsxs)(b.Fragment, {
              children: [(0, b.jsx)(z, {
                titleId: u.titleId
              }), (0, b.jsx)(J, {
                contentRef: f,
                descriptionId: u.descriptionId
              })]
            })]
          })
        })),
        G = "DialogTitle",
        $ = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = A(G, n);
          return (0, b.jsx)(p.sG.h2, {
            id: r.titleId,
            ...o,
            ref: t
          })
        }));
      $.displayName = G;
      var B = "DialogDescription",
        H = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = A(B, n);
          return (0, b.jsx)(p.sG.p, {
            id: r.descriptionId,
            ...o,
            ref: t
          })
        }));
      H.displayName = B;
      var K = "DialogClose",
        L = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, a = A(K, n);
          return (0, b.jsx)(p.sG.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: (0, r.m)(e.onClick, (() => a.onOpenChange(!1)))
          })
        }));

      function U(e) {
        return e ? "open" : "closed"
      }
      L.displayName = K;
      var V = "DialogTitleWarning",
        [Y, Z] = (0, i.q)(V, {
          contentName: T,
          titleName: G,
          docsSlug: "dialog"
        }),
        z = ({
          titleId: e
        }) => {
          const t = Z(V),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return o.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        J = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Z("DialogDescriptionWarning").contentName}}.`;
          return o.useEffect((() => {
            const o = e.current?.getAttribute("aria-describedby");
            t && o && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        Q = R,
        X = C,
        ee = M,
        te = k,
        ne = S,
        oe = $,
        re = H,
        ae = L
    },
    94926: (e, t, n) => {
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
            c = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return c ? (l.push.apply(l, Array.from(c.querySelectorAll("[aria-live]"))), function(e, t, n, l) {
            var c = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = s(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            a[n] || (a[n] = new WeakMap);
            var d = a[n],
              u = [],
              f = new Set,
              p = new Set(c),
              g = function(e) {
                e && !f.has(e) && (f.add(e), g(e.parentNode))
              };
            c.forEach(g);
            var y = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (f.has(e)) y(e);
                else try {
                  var t = e.getAttribute(l),
                    a = null !== t && "false" !== t,
                    i = (o.get(e) || 0) + 1,
                    s = (d.get(e) || 0) + 1;
                  o.set(e, i), d.set(e, s), u.push(e), 1 === i && a && r.set(e, !0), 1 === s && e.setAttribute(n, "true"), a || e.setAttribute(l, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              }))
            };
            return y(t), f.clear(), i++,
              function() {
                u.forEach((function(e) {
                  var t = o.get(e) - 1,
                    a = d.get(e) - 1;
                  o.set(e, t), d.set(e, a), t || (r.has(e) || e.removeAttribute(l), r.delete(e)), a || e.removeAttribute(n)
                })), --i || (o = new WeakMap, o = new WeakMap, r = new WeakMap, a = {})
              }
          }(l, c, n, "aria-hidden")) : function() {
            return null
          }
        }
    }
  }
]);