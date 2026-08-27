try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d1ce8ec1-2ff1-48c7-bfd6-df95fc3e4b1a", e._sentryDebugIdIdentifier = "sentry-dbid-d1ce8ec1-2ff1-48c7-bfd6-df95fc3e4b1a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7042], {
    14414(e, t, n) {
      n.d(t, {
        m: () => s
      });
      var o = n(81175);
      const r = e => "dark" === e ? o.xW.dark : o.xW.light,
        s = (e, t) => [o.xW.tokens, o.xW.typography, o.xW.grid, r(e)].join(" ")
    },
    75921(e, t, n) {
      n.d(t, {
        UC: () => A,
        VY: () => G,
        ZL: () => k,
        bL: () => T,
        bm: () => V,
        hE: () => B,
        hJ: () => F,
        l9: () => _
      });
      var o = n(93082),
        r = n(44752),
        s = n(85049),
        i = n(72579),
        u = n(88918),
        c = n(15782),
        a = n(78077),
        d = n(518),
        l = n(62471),
        f = n(81432),
        p = n(41988),
        m = n(86187),
        v = n(9608),
        g = n(38100),
        b = n(45787),
        y = n(93237),
        E = n(39793),
        h = Object.defineProperty,
        D = (e, t) => h(e, "name", {
          value: t,
          configurable: !0
        }),
        w = "Dialog",
        [O, C] = (0, i.A)(w),
        [P, R] = O(w),
        T = D(e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: s,
            onOpenChange: i,
            modal: a = !0
          } = e, d = o.useRef(null), l = o.useRef(null), [f, p] = (0, c.i)({
            prop: r,
            defaultProp: s ?? !1,
            onChange: i,
            caller: w
          }), [m, v] = o.useState(0), [g, b] = o.useState(0);
          return (0, E.jsx)(P, {
            scope: t,
            triggerRef: d,
            contentRef: l,
            contentId: (0, u.B)(),
            titleId: (0, u.B)(),
            descriptionId: (0, u.B)(),
            titlePresent: m > 0,
            descriptionPresent: g > 0,
            setTitleCount: v,
            setDescriptionCount: b,
            open: f,
            onOpenChange: p,
            onOpenToggle: o.useCallback(() => p(e => !e), [p]),
            modal: a,
            children: n
          })
        }, "Dialog"),
        _ = o.forwardRef(D(function(e, t) {
          const {
            __scopeDialog: n,
            ...o
          } = e, i = R("DialogTrigger", n), u = (0, s.s)(t, i.triggerRef);
          return (0, E.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.open ? i.contentId : void 0,
            "data-state": H(i.open),
            ...o,
            ref: u,
            onClick: (0, r.mK)(e.onClick, i.onOpenToggle)
          })
        }, "DialogTrigger")),
        L = "DialogPortal",
        [S, N] = O(L, {
          forceMount: void 0
        }),
        k = D(e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: s
          } = e, i = R(L, t);
          return (0, E.jsx)(S, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, e => (0, E.jsx)(f.C, {
              present: n || i.open,
              children: (0, E.jsx)(l.Z, {
                asChild: !0,
                container: s,
                children: e
              })
            }))
          })
        }, "DialogPortal"),
        I = "DialogOverlay",
        F = o.forwardRef(D(function(e, t) {
          const n = N(I, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            s = R(I, e.__scopeDialog);
          return s.modal ? (0, E.jsx)(f.C, {
            present: o || s.open,
            children: (0, E.jsx)(x, {
              ...r,
              ref: t
            })
          }) : null
        }, "DialogOverlay")),
        M = (0, y.TL)("DialogOverlay.RemoveScroll"),
        x = o.forwardRef(D(function(e, t) {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = R(I, n), i = (0, a.e0)(), u = (0, s.s)(t, i);
          return (0, E.jsx)(g.A, {
            as: M,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: (0, E.jsx)(p.sG.div, {
              "data-state": H(r.open),
              ...o,
              ref: u,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        }, "DialogOverlayImpl")),
        j = "DialogContent",
        A = o.forwardRef(D(function(e, t) {
          const n = N(j, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            s = R(j, e.__scopeDialog);
          return (0, E.jsx)(f.C, {
            present: o || s.open,
            children: s.modal ? (0, E.jsx)(W, {
              ...r,
              ref: t
            }) : (0, E.jsx)(U, {
              ...r,
              ref: t
            })
          })
        }, "DialogContent")),
        W = o.forwardRef(D(function(e, t) {
          const n = R(j, e.__scopeDialog),
            i = o.useRef(null),
            u = (0, s.s)(t, n.contentRef, i);
          return o.useEffect(() => {
            const e = i.current;
            if (e) return (0, b.Eq)(e)
          }, []), (0, E.jsx)(K, {
            ...e,
            ref: u,
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
        U = o.forwardRef(D(function(e, t) {
          const n = R(j, e.__scopeDialog),
            r = o.useRef(!1),
            s = o.useRef(!1);
          return (0, E.jsx)(K, {
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
        }, "DialogContentNonModal")),
        K = o.forwardRef(D(function(e, t) {
          const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: r,
            onCloseAutoFocus: s,
            ...i
          } = e, u = R(j, n);
          return (0, m.Oh)(), (0, E.jsx)(E.Fragment, {
            children: (0, E.jsx)(d.n, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: r,
              onUnmountAutoFocus: s,
              children: (0, E.jsx)(a.qW, {
                role: "dialog",
                id: u.contentId,
                "aria-describedby": u.descriptionPresent ? u.descriptionId : void 0,
                "aria-labelledby": u.titlePresent ? u.titleId : void 0,
                "data-state": H(u.open),
                ...i,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => u.onOpenChange(!1)
              })
            })
          })
        }, "DialogContentImpl")),
        B = o.forwardRef(D(function(e, t) {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = R("DialogTitle", n), {
            setTitleCount: s
          } = r;
          return (0, v.N)(() => (s(e => e + 1), () => s(e => e - 1)), [s]), (0, E.jsx)(p.sG.h2, {
            id: r.titleId,
            ...o,
            ref: t
          })
        }, "DialogTitle")),
        G = o.forwardRef(D(function(e, t) {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = R("DialogDescription", n), {
            setDescriptionCount: s
          } = r;
          return (0, v.N)(() => (s(e => e + 1), () => s(e => e - 1)), [s]), (0, E.jsx)(p.sG.p, {
            id: r.descriptionId,
            ...o,
            ref: t
          })
        }, "DialogDescription")),
        V = o.forwardRef(D(function(e, t) {
          const {
            __scopeDialog: n,
            ...o
          } = e, s = R("DialogClose", n);
          return (0, E.jsx)(p.sG.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: (0, r.mK)(e.onClick, () => s.onOpenChange(!1))
          })
        }, "DialogClose"));

      function H(e) {
        return e ? "open" : "closed"
      }
      D(H, "getState")
    },
    78077(e, t, n) {
      n.d(t, {
        bL: () => w,
        e0: () => g,
        lg: () => O,
        qW: () => m
      });
      var o, r = n(93082),
        s = n(44752),
        i = n(41988),
        u = n(85049),
        c = n(7198),
        a = n(39793),
        d = Object.defineProperty,
        l = (e, t) => d(e, "name", {
          value: t,
          configurable: !0
        }),
        f = "dismissableLayer.update",
        p = r.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        m = r.forwardRef(l(function(e, t) {
          const {
            disableOutsidePointerEvents: n = !1,
            deferPointerDownOutside: d = !1,
            onEscapeKeyDown: m,
            onPointerDownOutside: v,
            onFocusOutside: g,
            onInteractOutside: b,
            onDismiss: D,
            ...w
          } = e, O = r.useContext(p), [C, P] = r.useState(null), R = C?.ownerDocument ?? globalThis?.document, [, T] = r.useState({}), _ = (0, u.s)(t, P), L = Array.from(O.layers), [S] = [...O.layersWithOutsidePointerEventsDisabled].slice(-1), N = S ? L.indexOf(S) : -1, k = C ? L.indexOf(C) : -1, I = O.layersWithOutsidePointerEventsDisabled.size > 0, F = k >= N, M = r.useRef(!1), x = y(e => {
            v?.(e), b?.(e), e.defaultPrevented || D?.()
          }, {
            ownerDocument: R,
            deferPointerDownOutside: d,
            isDeferredPointerDownOutsideRef: M,
            dismissableSurfaces: O.dismissableSurfaces,
            shouldHandlePointerDownOutside: r.useCallback(e => {
              if (!(e instanceof Node)) return !1;
              const t = [...O.branches].some(t => t.contains(e));
              return F && !t
            }, [O.branches, F])
          }), j = E(e => {
            if (d && M.current) return;
            const t = e.target;
            [...O.branches].some(e => e.contains(t)) || (g?.(e), b?.(e), e.defaultPrevented || D?.())
          }, R), A = !!C && k === L.length - 1, W = (0, c.c)(e => {
            "Escape" === e.key && (m?.(e), !e.defaultPrevented && D && (e.preventDefault(), D()))
          });
          return r.useEffect(() => {
            if (A) return R.addEventListener("keydown", W, {
              capture: !0
            }), () => R.removeEventListener("keydown", W, {
              capture: !0
            })
          }, [R, A, W]), r.useEffect(() => {
            if (C) return n && (0 === O.layersWithOutsidePointerEventsDisabled.size && (o = R.body.style.pointerEvents, R.body.style.pointerEvents = "none"), O.layersWithOutsidePointerEventsDisabled.add(C)), O.layers.add(C), h(), () => {
              n && (O.layersWithOutsidePointerEventsDisabled.delete(C), 0 === O.layersWithOutsidePointerEventsDisabled.size && (R.body.style.pointerEvents = o))
            }
          }, [C, R, n, O]), r.useEffect(() => () => {
            C && (O.layers.delete(C), O.layersWithOutsidePointerEventsDisabled.delete(C), h())
          }, [C, O]), r.useEffect(() => {
            const e = l(() => T({}), "handleUpdate");
            return document.addEventListener(f, e), () => document.removeEventListener(f, e)
          }, []), (0, a.jsx)(i.sG.div, {
            ...w,
            ref: _,
            style: {
              pointerEvents: I ? F ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, s.mK)(e.onFocusCapture, j.onFocusCapture),
            onBlurCapture: (0, s.mK)(e.onBlurCapture, j.onBlurCapture),
            onPointerDownCapture: (0, s.mK)(e.onPointerDownCapture, x.onPointerDownCapture)
          })
        }, "DismissableLayer")),
        v = r.forwardRef(l(function(e, t) {
          const n = r.useContext(p),
            o = r.useRef(null),
            s = (0, u.s)(t, o);
          return r.useEffect(() => {
            const e = o.current;
            if (e) return n.branches.add(e), () => {
              n.branches.delete(e)
            }
          }, [n.branches]), (0, a.jsx)(i.sG.div, {
            ...e,
            ref: s
          })
        }, "DismissableLayerBranch"));

      function g() {
        const e = r.useContext(p),
          [t, n] = r.useState(null);
        return r.useEffect(() => {
          if (t) return e.dismissableSurfaces.add(t), () => {
            e.dismissableSurfaces.delete(t)
          }
        }, [t, e.dismissableSurfaces]), n
      }
      l(g, "useDismissableLayerSurface");
      var b = l(() => !0, "IS_TRUE");

      function y(e, t) {
        const {
          ownerDocument: n = globalThis?.document,
          deferPointerDownOutside: o = !1,
          isDeferredPointerDownOutsideRef: s,
          dismissableSurfaces: i,
          shouldHandlePointerDownOutside: u = b
        } = t, a = (0, c.c)(e), d = r.useRef(!1), f = r.useRef(!1), p = r.useRef(new Map), m = r.useRef(() => {});
        return r.useEffect(() => {
          function e() {
            f.current = !1, s.current = !1, p.current.clear()
          }

          function t() {
            return Array.from(p.current.values()).some(Boolean)
          }

          function r(e) {
            if (!f.current) return;
            const t = e.target;
            t instanceof Node && [...i].some(e => e.contains(t)) || p.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
              f.current && m.current()
            }, 0)
          }

          function c(e) {
            f.current && p.current.set(e.type, !1)
          }
          l(e, "resetOutsideInteraction"), l(t, "isOutsideInteractionIntercepted"), l(r, "handleInteractionCapture"), l(c, "handleInteractionBubble");
          const v = l(r => {
              if (r.target && !d.current) {
                let i = function() {
                  n.removeEventListener("click", m.current);
                  const o = t();
                  e(), o || D("dismissableLayer.pointerDownOutside", a, c, {
                    discrete: !0
                  })
                };
                if (l(i, "handleAndDispatchPointerDownOutsideEvent"), !u(r.target)) return n.removeEventListener("click", m.current), e(), void(d.current = !1);
                const c = {
                  originalEvent: r
                };
                f.current = !0, s.current = o && 0 === r.button, p.current.clear(), o && 0 === r.button ? (n.removeEventListener("click", m.current), m.current = i, n.addEventListener("click", m.current, {
                  once: !0
                })) : i()
              } else n.removeEventListener("click", m.current), e();
              d.current = !1
            }, "handlePointerDown"),
            g = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
          for (const e of g) n.addEventListener(e, r, !0), n.addEventListener(e, c);
          const b = window.setTimeout(() => {
            n.addEventListener("pointerdown", v)
          }, 0);
          return () => {
            window.clearTimeout(b), n.removeEventListener("pointerdown", v), n.removeEventListener("click", m.current);
            for (const e of g) n.removeEventListener(e, r, !0), n.removeEventListener(e, c)
          }
        }, [n, a, o, s, i, u]), {
          onPointerDownCapture: l(() => d.current = !0, "onPointerDownCapture")
        }
      }

      function E(e, t = globalThis?.document) {
        const n = (0, c.c)(e),
          o = r.useRef(!1);
        return r.useEffect(() => {
          const e = l(e => {
            e.target && !o.current && D("dismissableLayer.focusOutside", n, {
              originalEvent: e
            }, {
              discrete: !1
            })
          }, "handleFocus");
          return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
        }, [t, n]), {
          onFocusCapture: l(() => o.current = !0, "onFocusCapture"),
          onBlurCapture: l(() => o.current = !1, "onBlurCapture")
        }
      }

      function h() {
        const e = new CustomEvent(f);
        document.dispatchEvent(e)
      }

      function D(e, t, n, {
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
        }), o ? (0, i.hO)(r, s) : r.dispatchEvent(s)
      }
      l(y, "usePointerDownOutside"), l(E, "useFocusOutside"), l(h, "dispatchUpdate"), l(D, "handleAndDispatchCustomEvent");
      var w = m,
        O = v
    },
    518(e, t, n) {
      n.d(t, {
        n: () => p
      });
      var o = n(93082),
        r = n(85049),
        s = n(41988),
        i = n(7198),
        u = n(39793),
        c = Object.defineProperty,
        a = (e, t) => c(e, "name", {
          value: t,
          configurable: !0
        }),
        d = "focusScope.autoFocusOnMount",
        l = "focusScope.autoFocusOnUnmount",
        f = {
          bubbles: !1,
          cancelable: !0
        },
        p = o.forwardRef(a(function(e, t) {
          const {
            loop: n = !1,
            trapped: c = !1,
            onMountAutoFocus: p,
            onUnmountAutoFocus: b,
            ...y
          } = e, [E, w] = o.useState(null), O = (0, i.c)(p), P = (0, i.c)(b), R = o.useRef(null), T = (0, r.s)(t, w), _ = o.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          o.useEffect(() => {
            if (c) {
              let e = function(e) {
                  if (_.paused || !E) return;
                  const t = e.target;
                  E.contains(t) ? R.current = t : h(R.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (_.paused || !E) return;
                  const t = e.relatedTarget;
                  null !== t && (E.contains(t) || h(R.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && h(E)
                };
              a(e, "handleFocusIn"), a(t, "handleFocusOut"), a(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const o = new MutationObserver(n);
              return E && o.observe(E, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), o.disconnect()
              }
            }
          }, [c, E, _.paused]), o.useEffect(() => {
            if (E) {
              D.add(_);
              const e = document.activeElement;
              if (!E.contains(e)) {
                const t = new CustomEvent(d, f);
                E.addEventListener(d, O), E.dispatchEvent(t), t.defaultPrevented || (m(C(g(E)), {
                  select: !0
                }), document.activeElement === e && h(E))
              }
              return () => {
                E.removeEventListener(d, O), setTimeout(() => {
                  const t = new CustomEvent(l, f);
                  E.addEventListener(l, P), E.dispatchEvent(t), t.defaultPrevented || h(e ?? document.body, {
                    select: !0
                  }), E.removeEventListener(l, P), D.remove(_)
                }, 0)
              }
            }
          }, [E, O, P, _]);
          const L = o.useCallback(e => {
            if (!n && !c) return;
            if (_.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, s] = v(t);
              r && s ? e.shiftKey || o !== s ? e.shiftKey && o === r && (e.preventDefault(), n && h(s, {
                select: !0
              })) : (e.preventDefault(), n && h(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [n, c, _.paused]);
          return (0, u.jsx)(s.sG.div, {
            tabIndex: -1,
            ...y,
            ref: T,
            onKeyDown: L
          })
        }, "FocusScope"));

      function m(e, {
        select: t = !1
      } = {}) {
        const n = document.activeElement;
        for (const o of e)
          if (h(o, {
              select: t
            }), document.activeElement !== n) return
      }

      function v(e) {
        const t = g(e);
        return [b(t, e), b(t.reverse(), e)]
      }

      function g(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: a(e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function b(e, t) {
        const n = "function" == typeof t.checkVisibility && t.checkVisibility({
          checkVisibilityCSS: !0
        });
        for (const o of e)
          if (!(n ? !o.checkVisibility({
              checkVisibilityCSS: !0
            }) : y(o, {
              upTo: t
            }))) return o
      }

      function y(e, {
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

      function E(e) {
        return e instanceof HTMLInputElement && "select" in e
      }

      function h(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && E(e) && t && e.select()
        }
      }
      a(m, "focusFirst"), a(v, "getTabbableEdges"), a(g, "getTabbableCandidates"), a(b, "findVisible"), a(y, "isHidden"), a(E, "isSelectableInput"), a(h, "focus");
      var D = w();

      function w() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = O(e, t), e.unshift(t)
          },
          remove(t) {
            e = O(e, t), e[0]?.resume()
          }
        }
      }

      function O(e, t) {
        const n = [...e],
          o = n.indexOf(t);
        return -1 !== o && n.splice(o, 1), n
      }

      function C(e) {
        return e.filter(e => "A" !== e.tagName)
      }
      a(w, "createFocusScopesStack"), a(O, "arrayRemove"), a(C, "removeLinks")
    },
    62471(e, t, n) {
      n.d(t, {
        Z: () => d,
        b: () => l
      });
      var o = n(93082),
        r = n(84017),
        s = n(41988),
        i = n(9608),
        u = n(39793),
        c = Object.defineProperty,
        a = (e, t) => c(e, "name", {
          value: t,
          configurable: !0
        }),
        d = o.forwardRef(a(function(e, t) {
          const {
            container: n,
            ...c
          } = e, [a, d] = o.useState(!1);
          (0, i.N)(() => d(!0), []);
          const l = n || a && globalThis?.document?.body;
          return l ? r.createPortal((0, u.jsx)(s.sG.div, {
            ...c,
            ref: t
          }), l) : null
        }, "Portal")),
        l = d
    },
    81432(e, t, n) {
      n.d(t, {
        C: () => c
      });
      var o = n(93082),
        r = n(9608),
        s = Object.defineProperty,
        i = (e, t) => s(e, "name", {
          value: t,
          configurable: !0
        });

      function u(e, t) {
        return o.useReducer((e, n) => t[e][n] ?? e, e)
      }
      i(u, "useStateMachine");
      var c = i(e => {
        const {
          present: t,
          children: n
        } = e, r = a(t), s = "function" == typeof n ? n({
          present: r.isPresent
        }) : o.Children.only(n), i = l(r.ref, p(s));
        return "function" == typeof n || r.isPresent ? o.cloneElement(s, {
          ref: i
        }) : null
      }, "Presence");

      function a(e) {
        const [t, n] = o.useState(), s = o.useRef(null), c = o.useRef(e), a = o.useRef("none"), d = o.useRef(void 0), l = e ? "mounted" : "unmounted", [p, m] = u(l, {
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
        return o.useEffect(() => {
          "mounted" === p ? (a.current = d.current ?? f(s.current), d.current = void 0) : a.current = "none"
        }, [p]), (0, r.N)(() => {
          const t = s.current,
            n = c.current;
          if (n !== e) {
            const o = a.current,
              r = f(t);
            e ? (d.current = r, m("MOUNT")) : m("none" === r || "none" === t?.display ? "UNMOUNT" : n && o !== r ? "ANIMATION_OUT" : "UNMOUNT"), c.current = e
          }
        }, [e, m]), (0, r.N)(() => {
          if (t) {
            let e;
            const n = t.ownerDocument.defaultView ?? window,
              o = i(o => {
                const r = f(s.current).includes(CSS.escape(o.animationName));
                if (o.target === t && r && (m("ANIMATION_END"), !c.current)) {
                  const o = t.style.animationFillMode;
                  t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                    "forwards" === t.style.animationFillMode && (t.style.animationFillMode = o)
                  })
                }
              }, "handleAnimationEnd"),
              r = i(e => {
                e.target === t && (a.current = f(s.current))
              }, "handleAnimationStart");
            return t.addEventListener("animationstart", r), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
              n.clearTimeout(e), t.removeEventListener("animationstart", r), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o)
            }
          }
          m("ANIMATION_END")
        }, [t, m]), {
          isPresent: ["mounted", "unmountSuspended"].includes(p),
          ref: o.useCallback(e => {
            if (e) {
              const t = getComputedStyle(e);
              s.current = t, d.current = f(t)
            } else s.current = null;
            n(e)
          }, [])
        }
      }

      function d(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function l(...e) {
        const t = o.useRef(e);
        return t.current = e, o.useCallback(e => {
          const n = t.current;
          let o = !1;
          const r = n.map(t => {
            const n = d(t, e);
            return o || "function" != typeof n || (o = !0), n
          });
          if (o) return () => {
            for (let e = 0; e < r.length; e++) {
              const t = r[e];
              "function" == typeof t ? t() : d(n[e], null)
            }
          }
        }, [])
      }

      function f(e) {
        return e?.animationName || "none"
      }

      function p(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
      }
      i(a, "usePresence"), i(d, "setRef"), i(l, "useStableComposedRefs"), i(f, "getAnimationName"), i(p, "getElementRef")
    }
  }
]);