try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a2c781b5-7248-43e4-a9af-160a04879120", e._sentryDebugIdIdentifier = "sentry-dbid-a2c781b5-7248-43e4-a9af-160a04879120")
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
  [2295, 4676, 6491, 7533, 8872], {
    15234: (e, t, o) => {
      o.d(t, {
        Oh: () => a
      });
      var n = o(71127),
        r = 0;

      function a() {
        n.useEffect(() => {
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
    },
    42295: (e, t, o) => {
      e.exports = o(69245)
    },
    69245: (e, t, o) => {
      var n = o(71127),
        r = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, o) {
        var n, a = {},
          c = null,
          d = null;
        for (n in void 0 !== o && (c = "" + o), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (d = t.ref), t) i.call(t, n) && !l.hasOwnProperty(n) && (a[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === a[n] && (a[n] = t[n]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: d,
          props: a,
          _owner: s.current
        }
      }
      t.Fragment = a, t.jsx = c, t.jsxs = c
    },
    94926: (e, t, o) => {
      o.d(t, {
        Eq: () => l
      });
      var n = new WeakMap,
        r = new WeakMap,
        a = {},
        i = 0,
        s = function(e) {
          return e && (e.host || s(e.parentNode))
        },
        l = function(e, t, o) {
          void 0 === o && (o = "data-aria-hidden");
          var l = Array.from(Array.isArray(e) ? e : [e]),
            c = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return c ? (l.push.apply(l, Array.from(c.querySelectorAll("[aria-live], script"))), function(e, t, o, l) {
            var c = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var o = s(t);
                return o && e.contains(o) ? o : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(t, Array.isArray(e) ? e : [e]);
            a[o] || (a[o] = new WeakMap);
            var d = a[o],
              u = [],
              f = new Set,
              p = new Set(c),
              g = function(e) {
                e && !f.has(e) && (f.add(e), g(e.parentNode))
              };
            c.forEach(g);
            var y = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (f.has(e)) y(e);
                else try {
                  var t = e.getAttribute(l),
                    a = null !== t && "false" !== t,
                    i = (n.get(e) || 0) + 1,
                    s = (d.get(e) || 0) + 1;
                  n.set(e, i), d.set(e, s), u.push(e), 1 === i && a && r.set(e, !0), 1 === s && e.setAttribute(o, "true"), a || e.setAttribute(l, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              })
            };
            return y(t), f.clear(), i++,
              function() {
                u.forEach(function(e) {
                  var t = n.get(e) - 1,
                    a = d.get(e) - 1;
                  n.set(e, t), d.set(e, a), t || (r.has(e) || e.removeAttribute(l), r.delete(e)), a || e.removeAttribute(o)
                }), --i || (n = new WeakMap, n = new WeakMap, r = new WeakMap, a = {})
              }
          }(l, c, o, "aria-hidden")) : function() {
            return null
          }
        }
    },
    96491: (e, t, o) => {
      o.r(t), o.d(t, {
        Close: () => ae,
        Content: () => oe,
        Description: () => re,
        Dialog: () => E,
        DialogClose: () => U,
        DialogContent: () => T,
        DialogDescription: () => B,
        DialogOverlay: () => M,
        DialogPortal: () => j,
        DialogTitle: () => K,
        DialogTrigger: () => A,
        Overlay: () => te,
        Portal: () => ee,
        Root: () => Q,
        Title: () => ne,
        Trigger: () => X,
        WarningProvider: () => V,
        createDialogScope: () => v
      });
      var n = o(71127),
        r = o(94118),
        a = o(95362),
        i = o(85426),
        s = o(74406),
        l = o(79158),
        c = o(89749),
        d = o(86683),
        u = o(34902),
        f = o(53146),
        p = o(78004),
        g = o(15234),
        y = o(19690),
        b = o(94926),
        m = o(21222),
        h = o(42295),
        _ = "Dialog",
        [D, v] = (0, i.A)(_),
        [w, R] = D(_),
        E = e => {
          const {
            __scopeDialog: t,
            children: o,
            open: r,
            defaultOpen: a,
            onOpenChange: i,
            modal: c = !0
          } = e, d = n.useRef(null), u = n.useRef(null), [f, p] = (0, l.useControllableState)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: i,
            caller: _
          });
          return (0, h.jsx)(w, {
            scope: t,
            triggerRef: d,
            contentRef: u,
            contentId: (0, s.useId)(),
            titleId: (0, s.useId)(),
            descriptionId: (0, s.useId)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: n.useCallback(() => p(e => !e), [p]),
            modal: c,
            children: o
          })
        };
      E.displayName = _;
      var x = "DialogTrigger",
        A = n.forwardRef((e, t) => {
          const {
            __scopeDialog: o,
            ...n
          } = e, i = R(x, o), s = (0, a.s)(t, i.triggerRef);
          return (0, h.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.contentId,
            "data-state": Y(i.open),
            ...n,
            ref: s,
            onClick: (0, r.mK)(e.onClick, i.onOpenToggle)
          })
        });
      A.displayName = x;
      var C = "DialogPortal",
        [I, O] = D(C, {
          forceMount: void 0
        }),
        j = e => {
          const {
            __scopeDialog: t,
            forceMount: o,
            children: r,
            container: a
          } = e, i = R(C, t);
          return (0, h.jsx)(I, {
            scope: t,
            forceMount: o,
            children: n.Children.map(r, e => (0, h.jsx)(f.C, {
              present: o || i.open,
              children: (0, h.jsx)(u.Portal, {
                asChild: !0,
                container: a,
                children: e
              })
            }))
          })
        };
      j.displayName = C;
      var k = "DialogOverlay",
        M = n.forwardRef((e, t) => {
          const o = O(k, e.__scopeDialog),
            {
              forceMount: n = o.forceMount,
              ...r
            } = e,
            a = R(k, e.__scopeDialog);
          return a.modal ? (0, h.jsx)(f.C, {
            present: n || a.open,
            children: (0, h.jsx)(S, {
              ...r,
              ref: t
            })
          }) : null
        });
      M.displayName = k;
      var N = (0, m.createSlot)("DialogOverlay.RemoveScroll"),
        S = n.forwardRef((e, t) => {
          const {
            __scopeDialog: o,
            ...n
          } = e, r = R(k, o);
          return (0, h.jsx)(y.RemoveScroll, {
            as: N,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: (0, h.jsx)(p.sG.div, {
              "data-state": Y(r.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        F = "DialogContent",
        T = n.forwardRef((e, t) => {
          const o = O(F, e.__scopeDialog),
            {
              forceMount: n = o.forceMount,
              ...r
            } = e,
            a = R(F, e.__scopeDialog);
          return (0, h.jsx)(f.C, {
            present: n || a.open,
            children: a.modal ? (0, h.jsx)(P, {
              ...r,
              ref: t
            }) : (0, h.jsx)(W, {
              ...r,
              ref: t
            })
          })
        });
      T.displayName = F;
      var P = n.forwardRef((e, t) => {
          const o = R(F, e.__scopeDialog),
            i = n.useRef(null),
            s = (0, a.s)(t, o.contentRef, i);
          return n.useEffect(() => {
            const e = i.current;
            if (e) return (0, b.Eq)(e)
          }, []), (0, h.jsx)(q, {
            ...e,
            ref: s,
            trapFocus: o.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, r.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), o.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, r.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                o = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || o) && e.preventDefault()
            }),
            onFocusOutside: (0, r.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        W = n.forwardRef((e, t) => {
          const o = R(F, e.__scopeDialog),
            r = n.useRef(!1),
            a = n.useRef(!1);
          return (0, h.jsx)(q, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || o.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, a.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (a.current = !0));
              const n = t.target,
                i = o.triggerRef.current?.contains(n);
              i && t.preventDefault(), "focusin" === t.detail.originalEvent.type && a.current && t.preventDefault()
            }
          })
        }),
        q = n.forwardRef((e, t) => {
          const {
            __scopeDialog: o,
            trapFocus: r,
            onOpenAutoFocus: i,
            onCloseAutoFocus: s,
            ...l
          } = e, u = R(F, o), f = n.useRef(null), p = (0, a.s)(t, f);
          return (0, g.Oh)(), (0, h.jsxs)(h.Fragment, {
            children: [(0, h.jsx)(d.FocusScope, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: i,
              onUnmountAutoFocus: s,
              children: (0, h.jsx)(c.qW, {
                role: "dialog",
                id: u.contentId,
                "aria-describedby": u.descriptionId,
                "aria-labelledby": u.titleId,
                "data-state": Y(u.open),
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
        $ = "DialogTitle",
        K = n.forwardRef((e, t) => {
          const {
            __scopeDialog: o,
            ...n
          } = e, r = R($, o);
          return (0, h.jsx)(p.sG.h2, {
            id: r.titleId,
            ...n,
            ref: t
          })
        });
      K.displayName = $;
      var G = "DialogDescription",
        B = n.forwardRef((e, t) => {
          const {
            __scopeDialog: o,
            ...n
          } = e, r = R(G, o);
          return (0, h.jsx)(p.sG.p, {
            id: r.descriptionId,
            ...n,
            ref: t
          })
        });
      B.displayName = G;
      var L = "DialogClose",
        U = n.forwardRef((e, t) => {
          const {
            __scopeDialog: o,
            ...n
          } = e, a = R(L, o);
          return (0, h.jsx)(p.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, r.mK)(e.onClick, () => a.onOpenChange(!1))
          })
        });

      function Y(e) {
        return e ? "open" : "closed"
      }
      U.displayName = L;
      var H = "DialogTitleWarning",
        [V, Z] = (0, i.q)(H, {
          contentName: F,
          titleName: $,
          docsSlug: "dialog"
        }),
        z = ({
          titleId: e
        }) => {
          const t = Z(H),
            o = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return n.useEffect(() => {
            e && (document.getElementById(e) || console.error(o))
          }, [o, e]), null
        },
        J = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Z("DialogDescriptionWarning").contentName}}.`;
          return n.useEffect(() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(o))
          }, [o, e, t]), null
        },
        Q = E,
        X = A,
        ee = j,
        te = M,
        oe = T,
        ne = K,
        re = B,
        ae = U
    }
  }
]);