! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8bad67dc-43de-4022-8378-4cc78f4c51f3", e._sentryDebugIdIdentifier = "sentry-dbid-8bad67dc-43de-4022-8378-4cc78f4c51f3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [5767], {
    55767: (e, t, n) => {
      n.r(t), n.d(t, {
        Close: () => _e,
        Content: () => De,
        Description: () => Ne,
        Dialog: () => B,
        DialogClose: () => de,
        DialogContent: () => te,
        DialogDescription: () => ce,
        DialogOverlay: () => Q,
        DialogPortal: () => Z,
        DialogTitle: () => ie,
        DialogTrigger: () => z,
        Overlay: () => he,
        Portal: () => Ee,
        Root: () => ye,
        Title: () => we,
        Trigger: () => be,
        WarningProvider: () => pe,
        createDialogScope: () => $
      });
      var o = n(62229);

      function r(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(o) {
          if (e?.(o), !1 === n || !o.defaultPrevented) return t?.(o)
        }
      }

      function s(...e) {
        return o.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }
      var i = n(91029);

      function u(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = n.reduce(((t, {
              useScope: n,
              scopeName: o
            }) => ({
              ...t,
              ...n(e)[`__scope${o}`]
            })), {});
            return o.useMemo((() => ({
              [`__scope${t.scopeName}`]: r
            })), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }
      var c, a = n(74406),
        d = n(91377),
        l = n(96988),
        f = n(59693),
        p = n(99935),
        m = "dismissableLayer.update",
        v = o.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        g = o.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: u,
            onPointerDownOutside: a,
            onFocusOutside: d,
            onInteractOutside: g,
            onDismiss: E,
            ...h
          } = e, D = o.useContext(v), [w, N] = o.useState(null), _ = w?.ownerDocument ?? globalThis?.document, [, C] = o.useState({}), O = s(t, (e => N(e))), x = Array.from(D.layers), [R] = [...D.layersWithOutsidePointerEventsDisabled].slice(-1), I = x.indexOf(R), P = w ? x.indexOf(w) : -1, T = D.layersWithOutsidePointerEventsDisabled.size > 0, L = P >= I, j = function(e, t = globalThis?.document) {
            const n = (0, f.c)(e),
              r = o.useRef(!1),
              s = o.useRef((() => {}));
            return o.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let o = function() {
                      b("dismissableLayer.pointerDownOutside", n, r, {
                        discrete: !0
                      })
                    };
                    const r = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", s.current), s.current = o, t.addEventListener("click", s.current, {
                      once: !0
                    })) : o()
                  } else t.removeEventListener("click", s.current);
                  r.current = !1
                },
                o = window.setTimeout((() => {
                  t.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", s.current)
              }
            }), [t, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }((e => {
            const t = e.target,
              n = [...D.branches].some((e => e.contains(t)));
            L && !n && (a?.(e), g?.(e), e.defaultPrevented || E?.())
          }), _), M = function(e, t = globalThis?.document) {
            const n = (0, f.c)(e),
              r = o.useRef(!1);
            return o.useEffect((() => {
              const e = e => {
                e.target && !r.current && b("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }), [t, n]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }((e => {
            const t = e.target;
            [...D.branches].some((e => e.contains(t))) || (d?.(e), g?.(e), e.defaultPrevented || E?.())
          }), _);
          return (0, p.U)((e => {
            P === D.layers.size - 1 && (u?.(e), !e.defaultPrevented && E && (e.preventDefault(), E()))
          }), _), o.useEffect((() => {
            if (w) return n && (0 === D.layersWithOutsidePointerEventsDisabled.size && (c = _.body.style.pointerEvents, _.body.style.pointerEvents = "none"), D.layersWithOutsidePointerEventsDisabled.add(w)), D.layers.add(w), y(), () => {
              n && 1 === D.layersWithOutsidePointerEventsDisabled.size && (_.body.style.pointerEvents = c)
            }
          }), [w, _, n, D]), o.useEffect((() => () => {
            w && (D.layers.delete(w), D.layersWithOutsidePointerEventsDisabled.delete(w), y())
          }), [w, D]), o.useEffect((() => {
            const e = () => C({});
            return document.addEventListener(m, e), () => document.removeEventListener(m, e)
          }), []), (0, i.jsx)(l.sG.div, {
            ...h,
            ref: O,
            style: {
              pointerEvents: T ? L ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: r(e.onFocusCapture, M.onFocusCapture),
            onBlurCapture: r(e.onBlurCapture, M.onBlurCapture),
            onPointerDownCapture: r(e.onPointerDownCapture, j.onPointerDownCapture)
          })
        }));

      function y() {
        const e = new CustomEvent(m);
        document.dispatchEvent(e)
      }

      function b(e, t, n, {
        discrete: o
      }) {
        const r = n.originalEvent.target,
          s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && r.addEventListener(e, t, {
          once: !0
        }), o ? (0, l.hO)(r, s) : r.dispatchEvent(s)
      }
      g.displayName = "DismissableLayer", o.forwardRef(((e, t) => {
        const n = o.useContext(v),
          r = o.useRef(null),
          u = s(t, r);
        return o.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, i.jsx)(l.sG.div, {
          ...e,
          ref: u
        })
      })).displayName = "DismissableLayerBranch";
      var E = "focusScope.autoFocusOnMount",
        h = "focusScope.autoFocusOnUnmount",
        D = {
          bubbles: !1,
          cancelable: !0
        },
        w = o.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: u,
            onUnmountAutoFocus: c,
            ...a
          } = e, [d, p] = o.useState(null), m = (0, f.c)(u), v = (0, f.c)(c), g = o.useRef(null), y = s(t, (e => p(e))), b = o.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          o.useEffect((() => {
            if (r) {
              let e = function(e) {
                  if (b.paused || !d) return;
                  const t = e.target;
                  d.contains(t) ? g.current = t : O(g.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (b.paused || !d) return;
                  const t = e.relatedTarget;
                  null !== t && (d.contains(t) || O(g.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && O(d)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const o = new MutationObserver(n);
              return d && o.observe(d, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), o.disconnect()
              }
            }
          }), [r, d, b.paused]), o.useEffect((() => {
            if (d) {
              x.add(b);
              const e = document.activeElement;
              if (!d.contains(e)) {
                const t = new CustomEvent(E, D);
                d.addEventListener(E, m), d.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const o of e)
                    if (O(o, {
                        select: t
                      }), document.activeElement !== n) return
                }(N(d).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && O(d))
              }
              return () => {
                d.removeEventListener(E, m), setTimeout((() => {
                  const t = new CustomEvent(h, D);
                  d.addEventListener(h, v), d.dispatchEvent(t), t.defaultPrevented || O(e ?? document.body, {
                    select: !0
                  }), d.removeEventListener(h, v), x.remove(b)
                }), 0)
              }
            }
          }), [d, m, v, b]);
          const w = o.useCallback((e => {
            if (!n && !r) return;
            if (b.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, s] = function(e) {
                  const t = N(e);
                  return [_(t, e), _(t.reverse(), e)]
                }(t);
              r && s ? e.shiftKey || o !== s ? e.shiftKey && o === r && (e.preventDefault(), n && O(s, {
                select: !0
              })) : (e.preventDefault(), n && O(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, r, b.paused]);
          return (0, i.jsx)(l.sG.div, {
            tabIndex: -1,
            ...a,
            ref: y,
            onKeyDown: w
          })
        }));

      function N(e) {
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

      function _(e, t) {
        for (const n of e)
          if (!C(n, {
              upTo: t
            })) return n
      }

      function C(e, {
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

      function O(e, {
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
      w.displayName = "FocusScope";
      var x = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = R(e, t), e.unshift(t)
          },
          remove(t) {
            e = R(e, t), e[0]?.resume()
          }
        }
      }();

      function R(e, t) {
        const n = [...e],
          o = n.indexOf(t);
        return -1 !== o && n.splice(o, 1), n
      }
      var I = n(14337),
        P = n(44853),
        T = n(66698),
        L = e => {
          const {
            present: t,
            children: n
          } = e, r = function(e) {
            const [t, n] = o.useState(), r = o.useRef({}), s = o.useRef(e), i = o.useRef("none"), u = e ? "mounted" : "unmounted", [c, a] = function(e, t) {
              return o.useReducer(((e, n) => t[e][n] ?? e), e)
            }(u, {
              mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
              },
              unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
              },
              unmounted: {
                MOUNT: "mounted"
              }
            });
            return o.useEffect((() => {
              const e = j(r.current);
              i.current = "mounted" === c ? e : "none"
            }), [c]), (0, T.N)((() => {
              const t = r.current,
                n = s.current;
              if (n !== e) {
                const o = i.current,
                  r = j(t);
                a(e ? "MOUNT" : "none" === r || "none" === t?.display ? "UNMOUNT" : n && o !== r ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e
              }
            }), [e, a]), (0, T.N)((() => {
              if (t) {
                const e = e => {
                    const n = j(r.current).includes(e.animationName);
                    e.target === t && n && P.flushSync((() => a("ANIMATION_END")))
                  },
                  n = e => {
                    e.target === t && (i.current = j(r.current))
                  };
                return t.addEventListener("animationstart", n), t.addEventListener("animationcancel", e), t.addEventListener("animationend", e), () => {
                  t.removeEventListener("animationstart", n), t.removeEventListener("animationcancel", e), t.removeEventListener("animationend", e)
                }
              }
              a("ANIMATION_END")
            }), [t, a]), {
              isPresent: ["mounted", "unmountSuspended"].includes(c),
              ref: o.useCallback((e => {
                e && (r.current = getComputedStyle(e)), n(e)
              }), [])
            }
          }(t), i = "function" == typeof n ? n({
            present: r.isPresent
          }) : o.Children.only(n), u = s(r.ref, function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(i));
          return "function" == typeof n || r.isPresent ? o.cloneElement(i, {
            ref: u
          }) : null
        };

      function j(e) {
        return e?.animationName || "none"
      }
      L.displayName = "Presence";
      var M = 0;

      function S() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
      }
      var F = n(19690),
        A = n(58924),
        k = n(21222),
        W = "Dialog",
        [U, $] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map((e => o.createContext(e)));
            return function(n) {
              const r = n?.[e] || t;
              return o.useMemo((() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              })), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const s = o.createContext(r),
              u = n.length;

            function c(t) {
              const {
                scope: n,
                children: r,
                ...c
              } = t, a = n?.[e][u] || s, d = o.useMemo((() => c), Object.values(c));
              return (0, i.jsx)(a.Provider, {
                value: d,
                children: r
              })
            }
            return n = [...n, r], c.displayName = t + "Provider", [c, function(n, i) {
              const c = i?.[e][u] || s,
                a = o.useContext(c);
              if (a) return a;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, u(r, ...t)]
        }(W),
        [K, G] = U(W),
        B = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: s,
            onOpenChange: u,
            modal: c = !0
          } = e, l = o.useRef(null), f = o.useRef(null), [p = !1, m] = (0, d.i)({
            prop: r,
            defaultProp: s,
            onChange: u
          });
          return (0, i.jsx)(K, {
            scope: t,
            triggerRef: l,
            contentRef: f,
            contentId: (0, a.useId)(),
            titleId: (0, a.useId)(),
            descriptionId: (0, a.useId)(),
            open: p,
            onOpenChange: m,
            onOpenToggle: o.useCallback((() => m((e => !e))), [m]),
            modal: c,
            children: n
          })
        };
      B.displayName = W;
      var q = "DialogTrigger",
        z = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, u = G(q, n), c = s(t, u.triggerRef);
          return (0, i.jsx)(l.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": u.open,
            "aria-controls": u.contentId,
            "data-state": le(u.open),
            ...o,
            ref: c,
            onClick: r(e.onClick, u.onOpenToggle)
          })
        }));
      z.displayName = q;
      var H = "DialogPortal",
        [V, Y] = U(H, {
          forceMount: void 0
        }),
        Z = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: s
          } = e, u = G(H, t);
          return (0, i.jsx)(V, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, (e => (0, i.jsx)(L, {
              present: n || u.open,
              children: (0, i.jsx)(I.Portal, {
                asChild: !0,
                container: s,
                children: e
              })
            })))
          })
        };
      Z.displayName = H;
      var J = "DialogOverlay",
        Q = o.forwardRef(((e, t) => {
          const n = Y(J, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            s = G(J, e.__scopeDialog);
          return s.modal ? (0, i.jsx)(L, {
            present: o || s.open,
            children: (0, i.jsx)(X, {
              ...r,
              ref: t
            })
          }) : null
        }));
      Q.displayName = J;
      var X = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = G(J, n);
          return (0, i.jsx)(F.RemoveScroll, {
            as: k.Slot,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: (0, i.jsx)(l.sG.div, {
              "data-state": le(r.open),
              ...o,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        })),
        ee = "DialogContent",
        te = o.forwardRef(((e, t) => {
          const n = Y(ee, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            s = G(ee, e.__scopeDialog);
          return (0, i.jsx)(L, {
            present: o || s.open,
            children: s.modal ? (0, i.jsx)(ne, {
              ...r,
              ref: t
            }) : (0, i.jsx)(oe, {
              ...r,
              ref: t
            })
          })
        }));
      te.displayName = ee;
      var ne = o.forwardRef(((e, t) => {
          const n = G(ee, e.__scopeDialog),
            u = o.useRef(null),
            c = s(t, n.contentRef, u);
          return o.useEffect((() => {
            const e = u.current;
            if (e) return (0, A.Eq)(e)
          }), []), (0, i.jsx)(re, {
            ...e,
            ref: c,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: r(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: r(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: r(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        oe = o.forwardRef(((e, t) => {
          const n = G(ee, e.__scopeDialog),
            r = o.useRef(!1),
            s = o.useRef(!1);
          return (0, i.jsx)(re, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, s.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (s.current = !0));
              const o = t.target,
                i = n.triggerRef.current?.contains(o);
              i && t.preventDefault(), "focusin" === t.detail.originalEvent.type && s.current && t.preventDefault()
            }
          })
        })),
        re = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: u,
            onCloseAutoFocus: c,
            ...a
          } = e, d = G(ee, n), l = o.useRef(null), f = s(t, l);
          return o.useEffect((() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? S()), document.body.insertAdjacentElement("beforeend", e[1] ?? S()), M++, () => {
              1 === M && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), M--
            }
          }), []), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(w, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: u,
              onUnmountAutoFocus: c,
              children: (0, i.jsx)(g, {
                role: "dialog",
                id: d.contentId,
                "aria-describedby": d.descriptionId,
                "aria-labelledby": d.titleId,
                "data-state": le(d.open),
                ...a,
                ref: f,
                onDismiss: () => d.onOpenChange(!1)
              })
            }), (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(ve, {
                titleId: d.titleId
              }), (0, i.jsx)(ge, {
                contentRef: l,
                descriptionId: d.descriptionId
              })]
            })]
          })
        })),
        se = "DialogTitle",
        ie = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = G(se, n);
          return (0, i.jsx)(l.sG.h2, {
            id: r.titleId,
            ...o,
            ref: t
          })
        }));
      ie.displayName = se;
      var ue = "DialogDescription",
        ce = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = G(ue, n);
          return (0, i.jsx)(l.sG.p, {
            id: r.descriptionId,
            ...o,
            ref: t
          })
        }));
      ce.displayName = ue;
      var ae = "DialogClose",
        de = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, s = G(ae, n);
          return (0, i.jsx)(l.sG.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: r(e.onClick, (() => s.onOpenChange(!1)))
          })
        }));

      function le(e) {
        return e ? "open" : "closed"
      }
      de.displayName = ae;
      var fe = "DialogTitleWarning",
        [pe, me] = function(e, t) {
          const n = o.createContext(t);

          function r(e) {
            const {
              children: t,
              ...r
            } = e, s = o.useMemo((() => r), Object.values(r));
            return (0, i.jsx)(n.Provider, {
              value: s,
              children: t
            })
          }
          return r.displayName = e + "Provider", [r, function(r) {
            const s = o.useContext(n);
            if (s) return s;
            if (void 0 !== t) return t;
            throw new Error(`\`${r}\` must be used within \`${e}\``)
          }]
        }(fe, {
          contentName: ee,
          titleName: se,
          docsSlug: "dialog"
        }),
        ve = ({
          titleId: e
        }) => {
          const t = me(fe),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return o.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        ge = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${me("DialogDescriptionWarning").contentName}}.`;
          return o.useEffect((() => {
            const o = e.current?.getAttribute("aria-describedby");
            t && o && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        ye = B,
        be = z,
        Ee = Z,
        he = Q,
        De = te,
        we = ie,
        Ne = ce,
        _e = de
    },
    96988: (e, t, n) => {
      n.d(t, {
        hO: () => c,
        sG: () => u
      });
      var o = n(62229),
        r = n(44853),
        s = n(21222),
        i = n(91029),
        u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = o.forwardRef(((e, n) => {
            const {
              asChild: o,
              ...r
            } = e, u = o ? s.Slot : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(u, {
              ...r,
              ref: n
            })
          }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {});

      function c(e, t) {
        e && r.flushSync((() => e.dispatchEvent(t)))
      }
    }
  }
]);