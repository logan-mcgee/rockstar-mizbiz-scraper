try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2d2aa500-fc80-4b89-a382-c79e5a6d1546", e._sentryDebugIdIdentifier = "sentry-dbid-2d2aa500-fc80-4b89-a382-c79e5a6d1546")
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
  [3935], {
    27114: (e, t, n) => {
      n.d(t, {
        Oh: () => a
      });
      var o = n(71127),
        r = 0;

      function a() {
        o.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? s()), document.body.insertAdjacentElement("beforeend", e[1] ?? s()), r++, () => {
            1 === r && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), r--
          }
        }), [])
      }

      function s() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
    },
    53935: (e, t, n) => {
      n.r(t), n.d(t, {
        Close: () => ae,
        Content: () => ne,
        Description: () => re,
        Dialog: () => I,
        DialogClose: () => B,
        DialogContent: () => S,
        DialogDescription: () => $,
        DialogOverlay: () => M,
        DialogPortal: () => T,
        DialogTitle: () => q,
        DialogTrigger: () => R,
        Overlay: () => te,
        Portal: () => ee,
        Root: () => Q,
        Title: () => oe,
        Trigger: () => X,
        WarningProvider: () => Y,
        createDialogScope: () => D
      });
      var o = n(71127),
        r = n(65998),
        a = n(86410),
        s = n(29818),
        i = n(74406),
        c = n(79158),
        u = n(19202),
        d = n(72480),
        l = n(34902),
        f = n(36146),
        p = n(85100),
        g = n(27114),
        m = n(19690),
        y = n(98463),
        v = n(21222),
        b = n(25854),
        h = "Dialog",
        [E, D] = (0, s.A)(h),
        [w, _] = E(h),
        I = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: a,
            onOpenChange: s,
            modal: u = !0
          } = e, d = o.useRef(null), l = o.useRef(null), [f, p] = (0, c.useControllableState)({
            prop: r,
            defaultProp: a ?? !1,
            onChange: s,
            caller: h
          });
          return (0, b.jsx)(w, {
            scope: t,
            triggerRef: d,
            contentRef: l,
            contentId: (0, i.useId)(),
            titleId: (0, i.useId)(),
            descriptionId: (0, i.useId)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: o.useCallback((() => p((e => !e))), [p]),
            modal: u,
            children: n
          })
        };
      I.displayName = h;
      var C = "DialogTrigger",
        R = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, s = _(C, n), i = (0, a.s)(t, s.triggerRef);
          return (0, b.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": H(s.open),
            ...o,
            ref: i,
            onClick: (0, r.m)(e.onClick, s.onOpenToggle)
          })
        }));
      R.displayName = C;
      var x = "DialogPortal",
        [A, N] = E(x, {
          forceMount: void 0
        }),
        T = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: a
          } = e, s = _(x, t);
          return (0, b.jsx)(A, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, (e => (0, b.jsx)(f.C, {
              present: n || s.open,
              children: (0, b.jsx)(l.Portal, {
                asChild: !0,
                container: a,
                children: e
              })
            })))
          })
        };
      T.displayName = x;
      var F = "DialogOverlay",
        M = o.forwardRef(((e, t) => {
          const n = N(F, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            a = _(F, e.__scopeDialog);
          return a.modal ? (0, b.jsx)(f.C, {
            present: o || a.open,
            children: (0, b.jsx)(j, {
              ...r,
              ref: t
            })
          }) : null
        }));
      M.displayName = F;
      var O = (0, v.createSlot)("DialogOverlay.RemoveScroll"),
        j = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = _(F, n);
          return (0, b.jsx)(m.RemoveScroll, {
            as: O,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: (0, b.jsx)(p.sG.div, {
              "data-state": H(r.open),
              ...o,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        })),
        k = "DialogContent",
        S = o.forwardRef(((e, t) => {
          const n = N(k, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            a = _(k, e.__scopeDialog);
          return (0, b.jsx)(f.C, {
            present: o || a.open,
            children: a.modal ? (0, b.jsx)(P, {
              ...r,
              ref: t
            }) : (0, b.jsx)(L, {
              ...r,
              ref: t
            })
          })
        }));
      S.displayName = k;
      var P = o.forwardRef(((e, t) => {
          const n = _(k, e.__scopeDialog),
            s = o.useRef(null),
            i = (0, a.s)(t, n.contentRef, s);
          return o.useEffect((() => {
            const e = s.current;
            if (e) return (0, y.Eq)(e)
          }), []), (0, b.jsx)(W, {
            ...e,
            ref: i,
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
        L = o.forwardRef(((e, t) => {
          const n = _(k, e.__scopeDialog),
            r = o.useRef(!1),
            a = o.useRef(!1);
          return (0, b.jsx)(W, {
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
        })),
        W = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: s,
            onCloseAutoFocus: i,
            ...c
          } = e, l = _(k, n), f = o.useRef(null), p = (0, a.s)(t, f);
          return (0, g.Oh)(), (0, b.jsxs)(b.Fragment, {
            children: [(0, b.jsx)(d.n, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: s,
              onUnmountAutoFocus: i,
              children: (0, b.jsx)(u.qW, {
                role: "dialog",
                id: l.contentId,
                "aria-describedby": l.descriptionId,
                "aria-labelledby": l.titleId,
                "data-state": H(l.open),
                ...c,
                ref: p,
                onDismiss: () => l.onOpenChange(!1)
              })
            }), (0, b.jsxs)(b.Fragment, {
              children: [(0, b.jsx)(z, {
                titleId: l.titleId
              }), (0, b.jsx)(J, {
                contentRef: f,
                descriptionId: l.descriptionId
              })]
            })]
          })
        })),
        K = "DialogTitle",
        q = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = _(K, n);
          return (0, b.jsx)(p.sG.h2, {
            id: r.titleId,
            ...o,
            ref: t
          })
        }));
      q.displayName = K;
      var G = "DialogDescription",
        $ = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = _(G, n);
          return (0, b.jsx)(p.sG.p, {
            id: r.descriptionId,
            ...o,
            ref: t
          })
        }));
      $.displayName = G;
      var U = "DialogClose",
        B = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, a = _(U, n);
          return (0, b.jsx)(p.sG.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: (0, r.m)(e.onClick, (() => a.onOpenChange(!1)))
          })
        }));

      function H(e) {
        return e ? "open" : "closed"
      }
      B.displayName = U;
      var V = "DialogTitleWarning",
        [Y, Z] = (0, s.q)(V, {
          contentName: k,
          titleName: K,
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
        Q = I,
        X = R,
        ee = T,
        te = M,
        ne = S,
        oe = q,
        re = $,
        ae = B
    },
    72480: (e, t, n) => {
      n.d(t, {
        n: () => l
      });
      var o = n(71127),
        r = n(86410),
        a = n(85100),
        s = n(27734),
        i = n(25854),
        c = "focusScope.autoFocusOnMount",
        u = "focusScope.autoFocusOnUnmount",
        d = {
          bubbles: !1,
          cancelable: !0
        },
        l = o.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: l = !1,
            onMountAutoFocus: g,
            onUnmountAutoFocus: v,
            ...b
          } = e, [h, E] = o.useState(null), D = (0, s.c)(g), w = (0, s.c)(v), _ = o.useRef(null), I = (0, r.s)(t, (e => E(e))), C = o.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          o.useEffect((() => {
            if (l) {
              let e = function(e) {
                  if (C.paused || !h) return;
                  const t = e.target;
                  h.contains(t) ? _.current = t : m(_.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (C.paused || !h) return;
                  const t = e.relatedTarget;
                  null !== t && (h.contains(t) || m(_.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && m(h)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const o = new MutationObserver(n);
              return h && o.observe(h, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), o.disconnect()
              }
            }
          }), [l, h, C.paused]), o.useEffect((() => {
            if (h) {
              y.add(C);
              const e = document.activeElement;
              if (!h.contains(e)) {
                const t = new CustomEvent(c, d);
                h.addEventListener(c, D), h.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const o of e)
                    if (m(o, {
                        select: t
                      }), document.activeElement !== n) return
                }(f(h).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && m(h))
              }
              return () => {
                h.removeEventListener(c, D), setTimeout((() => {
                  const t = new CustomEvent(u, d);
                  h.addEventListener(u, w), h.dispatchEvent(t), t.defaultPrevented || m(e ?? document.body, {
                    select: !0
                  }), h.removeEventListener(u, w), y.remove(C)
                }), 0)
              }
            }
          }), [h, D, w, C]);
          const R = o.useCallback((e => {
            if (!n && !l) return;
            if (C.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, a] = function(e) {
                  const t = f(e);
                  return [p(t, e), p(t.reverse(), e)]
                }(t);
              r && a ? e.shiftKey || o !== a ? e.shiftKey && o === r && (e.preventDefault(), n && m(a, {
                select: !0
              })) : (e.preventDefault(), n && m(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, l, C.paused]);
          return (0, i.jsx)(a.sG.div, {
            tabIndex: -1,
            ...b,
            ref: I,
            onKeyDown: R
          })
        }));

      function f(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function p(e, t) {
        for (const n of e)
          if (!g(n, {
              upTo: t
            })) return n
      }

      function g(e, {
        upTo: t
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
          if (void 0 !== t && e === t) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function m(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      l.displayName = "FocusScope";
      var y = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = v(e, t), e.unshift(t)
          },
          remove(t) {
            e = v(e, t), e[0]?.resume()
          }
        }
      }();

      function v(e, t) {
        const n = [...e],
          o = n.indexOf(t);
        return -1 !== o && n.splice(o, 1), n
      }
    },
    98463: (e, t, n) => {
      n.d(t, {
        Eq: () => c
      });
      var o = new WeakMap,
        r = new WeakMap,
        a = {},
        s = 0,
        i = function(e) {
          return e && (e.host || i(e.parentNode))
        },
        c = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var c = Array.from(Array.isArray(e) ? e : [e]),
            u = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return u ? (c.push.apply(c, Array.from(u.querySelectorAll("[aria-live]"))), function(e, t, n, c) {
            var u = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = i(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            a[n] || (a[n] = new WeakMap);
            var d = a[n],
              l = [],
              f = new Set,
              p = new Set(u),
              g = function(e) {
                e && !f.has(e) && (f.add(e), g(e.parentNode))
              };
            u.forEach(g);
            var m = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (f.has(e)) m(e);
                else try {
                  var t = e.getAttribute(c),
                    a = null !== t && "false" !== t,
                    s = (o.get(e) || 0) + 1,
                    i = (d.get(e) || 0) + 1;
                  o.set(e, s), d.set(e, i), l.push(e), 1 === s && a && r.set(e, !0), 1 === i && e.setAttribute(n, "true"), a || e.setAttribute(c, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              }))
            };
            return m(t), f.clear(), s++,
              function() {
                l.forEach((function(e) {
                  var t = o.get(e) - 1,
                    a = d.get(e) - 1;
                  o.set(e, t), d.set(e, a), t || (r.has(e) || e.removeAttribute(c), r.delete(e)), a || e.removeAttribute(n)
                })), --s || (o = new WeakMap, o = new WeakMap, r = new WeakMap, a = {})
              }
          }(c, u, n, "aria-hidden")) : function() {
            return null
          }
        }
    }
  }
]);