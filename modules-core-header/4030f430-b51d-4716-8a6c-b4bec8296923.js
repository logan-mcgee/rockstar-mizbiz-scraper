try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4030f430-b51d-4716-8a6c-b4bec8296923", e._sentryDebugIdIdentifier = "sentry-dbid-4030f430-b51d-4716-8a6c-b4bec8296923")
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
  [2174, 4555, 5339, 7720, 9793], {
    45787(e, t, o) {
      o.d(t, {
        Eq: () => l
      });
      var n = new WeakMap,
        r = new WeakMap,
        a = {},
        s = 0,
        i = function(e) {
          return e && (e.host || i(e.parentNode))
        },
        l = function(e, t, o) {
          void 0 === o && (o = "data-aria-hidden");
          var l = Array.from(Array.isArray(e) ? e : [e]),
            d = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return d ? (l.push.apply(l, Array.from(d.querySelectorAll("[aria-live], script"))), function(e, t, o, l) {
            var d = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var o = i(t);
                return o && e.contains(o) ? o : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(t, Array.isArray(e) ? e : [e]);
            a[o] || (a[o] = new WeakMap);
            var c = a[o],
              u = [],
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
                    s = (n.get(e) || 0) + 1,
                    i = (c.get(e) || 0) + 1;
                  n.set(e, s), c.set(e, i), u.push(e), 1 === s && a && r.set(e, !0), 1 === i && e.setAttribute(o, "true"), a || e.setAttribute(l, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              })
            };
            return y(t), f.clear(), s++,
              function() {
                u.forEach(function(e) {
                  var t = n.get(e) - 1,
                    a = c.get(e) - 1;
                  n.set(e, t), c.set(e, a), t || (r.has(e) || e.removeAttribute(l), r.delete(e)), a || e.removeAttribute(o)
                }), --s || (n = new WeakMap, n = new WeakMap, r = new WeakMap, a = {})
              }
          }(l, d, o, "aria-hidden")) : function() {
            return null
          }
        }
    },
    94931(e, t, o) {
      var n = o(4637),
        r = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, o) {
        var n, a = {},
          d = null,
          c = null;
        for (n in void 0 !== o && (d = "" + o), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (c = t.ref), t) s.call(t, n) && !l.hasOwnProperty(n) && (a[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === a[n] && (a[n] = t[n]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: c,
          props: a,
          _owner: i.current
        }
      }
      t.Fragment = a, t.jsx = d, t.jsxs = d
    },
    39793(e, t, o) {
      e.exports = o(94931)
    },
    85339(e, t, o) {
      o.r(t), o.d(t, {
        Close: () => Y,
        Content: () => S,
        Description: () => U,
        Dialog: () => R,
        DialogClose: () => Y,
        DialogContent: () => S,
        DialogDescription: () => U,
        DialogOverlay: () => M,
        DialogPortal: () => k,
        DialogTitle: () => q,
        DialogTrigger: () => O,
        Overlay: () => M,
        Portal: () => k,
        Root: () => R,
        Title: () => q,
        Trigger: () => O,
        WarningProvider: () => $,
        createDialogScope: () => D
      });
      var n = o(4637),
        r = o(39467),
        a = o(64239),
        s = o(54958),
        i = o(82449),
        l = o(92939),
        d = o(13588),
        c = o(76765),
        u = o(2272),
        f = o(66624),
        p = o(80082),
        g = o(38174),
        y = o(59113),
        b = o(45787),
        h = o(50486),
        _ = o(39793),
        m = "Dialog",
        [v, D] = (0, s.A)(m),
        [w, C] = v(m),
        R = e => {
          const {
            __scopeDialog: t,
            children: o,
            open: r,
            defaultOpen: a,
            onOpenChange: s,
            modal: d = !0
          } = e, c = n.useRef(null), u = n.useRef(null), [f, p] = (0, l.useControllableState)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: s,
            caller: m
          });
          return (0, _.jsx)(w, {
            scope: t,
            triggerRef: c,
            contentRef: u,
            contentId: (0, i.useId)(),
            titleId: (0, i.useId)(),
            descriptionId: (0, i.useId)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: n.useCallback(() => p(e => !e), [p]),
            modal: d,
            children: o
          })
        };
      R.displayName = m;
      var E = "DialogTrigger",
        O = n.forwardRef((e, t) => {
          const {
            __scopeDialog: o,
            ...n
          } = e, s = C(E, o), i = (0, a.s)(t, s.triggerRef);
          return (0, _.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.open ? s.contentId : void 0,
            "data-state": Z(s.open),
            ...n,
            ref: i,
            onClick: (0, r.mK)(e.onClick, s.onOpenToggle)
          })
        });
      O.displayName = E;
      var A = "DialogPortal",
        [x, j] = v(A, {
          forceMount: void 0
        }),
        k = e => {
          const {
            __scopeDialog: t,
            forceMount: o,
            children: r,
            container: a
          } = e, s = C(A, t);
          return (0, _.jsx)(x, {
            scope: t,
            forceMount: o,
            children: n.Children.map(r, e => (0, _.jsx)(f.C, {
              present: o || s.open,
              children: (0, _.jsx)(u.Portal, {
                asChild: !0,
                container: a,
                children: e
              })
            }))
          })
        };
      k.displayName = A;
      var I = "DialogOverlay",
        M = n.forwardRef((e, t) => {
          const o = j(I, e.__scopeDialog),
            {
              forceMount: n = o.forceMount,
              ...r
            } = e,
            a = C(I, e.__scopeDialog);
          return a.modal ? (0, _.jsx)(f.C, {
            present: n || a.open,
            children: (0, _.jsx)(T, {
              ...r,
              ref: t
            })
          }) : null
        });
      M.displayName = I;
      var P = (0, h.createSlot)("DialogOverlay.RemoveScroll"),
        T = n.forwardRef((e, t) => {
          const {
            __scopeDialog: o,
            ...n
          } = e, r = C(I, o), s = (0, d.e0)(), i = (0, a.s)(t, s);
          return (0, _.jsx)(y.RemoveScroll, {
            as: P,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: (0, _.jsx)(p.sG.div, {
              "data-state": Z(r.open),
              ...n,
              ref: i,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        F = "DialogContent",
        S = n.forwardRef((e, t) => {
          const o = j(F, e.__scopeDialog),
            {
              forceMount: n = o.forceMount,
              ...r
            } = e,
            a = C(F, e.__scopeDialog);
          return (0, _.jsx)(f.C, {
            present: n || a.open,
            children: a.modal ? (0, _.jsx)(N, {
              ...r,
              ref: t
            }) : (0, _.jsx)(W, {
              ...r,
              ref: t
            })
          })
        });
      S.displayName = F;
      var N = n.forwardRef((e, t) => {
          const o = C(F, e.__scopeDialog),
            s = n.useRef(null),
            i = (0, a.s)(t, o.contentRef, s);
          return n.useEffect(() => {
            const e = s.current;
            if (e) return (0, b.Eq)(e)
          }, []), (0, _.jsx)(K, {
            ...e,
            ref: i,
            trapFocus: o.open,
            disableOutsidePointerEvents: o.open,
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
          const o = C(F, e.__scopeDialog),
            r = n.useRef(!1),
            a = n.useRef(!1);
          return (0, _.jsx)(K, {
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
                s = o.triggerRef.current?.contains(n);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && a.current && t.preventDefault()
            }
          })
        }),
        K = n.forwardRef((e, t) => {
          const {
            __scopeDialog: o,
            trapFocus: n,
            onOpenAutoFocus: r,
            onCloseAutoFocus: a,
            ...s
          } = e, i = C(F, o);
          return (0, g.Oh)(), (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)(c.FocusScope, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: r,
              onUnmountAutoFocus: a,
              children: (0, _.jsx)(d.qW, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": Z(i.open),
                ...s,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => i.onOpenChange(!1)
              })
            })
          })
        }),
        G = "DialogTitle",
        q = n.forwardRef((e, t) => {
          const {
            __scopeDialog: o,
            ...n
          } = e, r = C(G, o);
          return (0, _.jsx)(p.sG.h2, {
            id: r.titleId,
            ...n,
            ref: t
          })
        });
      q.displayName = G;
      var L = "DialogDescription",
        U = n.forwardRef((e, t) => {
          const {
            __scopeDialog: o,
            ...n
          } = e, r = C(L, o);
          return (0, _.jsx)(p.sG.p, {
            id: r.descriptionId,
            ...n,
            ref: t
          })
        });
      U.displayName = L;
      var B = "DialogClose",
        Y = n.forwardRef((e, t) => {
          const {
            __scopeDialog: o,
            ...n
          } = e, a = C(B, o);
          return (0, _.jsx)(p.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, r.mK)(e.onClick, () => a.onOpenChange(!1))
          })
        });
      Y.displayName = B;
      var $ = e => e.children;

      function Z(e) {
        return e ? "open" : "closed"
      }
    },
    38174(e, t, o) {
      o.d(t, {
        Oh: () => s
      });
      var n = o(4637),
        r = 0,
        a = null;

      function s() {
        n.useEffect(() => {
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