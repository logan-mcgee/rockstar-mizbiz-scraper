try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "eb282aef-5aa2-4a6e-8392-f1535fd5a297", e._sentryDebugIdIdentifier = "sentry-dbid-eb282aef-5aa2-4a6e-8392-f1535fd5a297")
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
  [40], {
    38203(e, t, n) {
      n.d(t, {
        m: () => s
      });
      var r = n(33092);
      const o = e => "dark" === e ? r.xW.dark : r.xW.light,
        s = (e, t) => [r.xW.tokens, r.xW.typography, r.xW.grid, o(e)].join(" ")
    },
    1158(e, t, n) {
      n.d(t, {
        UC: () => F,
        VY: () => G,
        ZL: () => T,
        bL: () => C,
        bm: () => H,
        hE: () => U,
        hJ: () => x,
        l9: () => R
      });
      var r = n(93082),
        o = n(2458),
        s = n(64239),
        i = n(1913),
        u = n(94296),
        a = n(17038),
        c = n(64334),
        d = n(64355),
        l = n(18268),
        f = n(7470),
        p = n(31270),
        m = n(38174),
        v = n(38100),
        y = n(45787),
        g = n(17172),
        b = n(39793),
        E = "Dialog",
        [h, w] = (0, i.A)(E),
        [D, O] = h(E),
        C = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: o,
            defaultOpen: s,
            onOpenChange: i,
            modal: c = !0
          } = e, d = r.useRef(null), l = r.useRef(null), [f, p] = (0, a.i)({
            prop: o,
            defaultProp: s ?? !1,
            onChange: i,
            caller: E
          });
          return (0, b.jsx)(D, {
            scope: t,
            triggerRef: d,
            contentRef: l,
            contentId: (0, u.B)(),
            titleId: (0, u.B)(),
            descriptionId: (0, u.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: r.useCallback(() => p(e => !e), [p]),
            modal: c,
            children: n
          })
        };
      C.displayName = E;
      var N = "DialogTrigger",
        R = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, i = O(N, n), u = (0, s.s)(t, i.triggerRef);
          return (0, b.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.open ? i.contentId : void 0,
            "data-state": Z(i.open),
            ...r,
            ref: u,
            onClick: (0, o.mK)(e.onClick, i.onOpenToggle)
          })
        });
      R.displayName = N;
      var _ = "DialogPortal",
        [L, P] = h(_, {
          forceMount: void 0
        }),
        T = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: o,
            container: s
          } = e, i = O(_, t);
          return (0, b.jsx)(L, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, e => (0, b.jsx)(f.C, {
              present: n || i.open,
              children: (0, b.jsx)(l.Z, {
                asChild: !0,
                container: s,
                children: e
              })
            }))
          })
        };
      T.displayName = _;
      var k = "DialogOverlay",
        x = r.forwardRef((e, t) => {
          const n = P(k, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            s = O(k, e.__scopeDialog);
          return s.modal ? (0, b.jsx)(f.C, {
            present: r || s.open,
            children: (0, b.jsx)(M, {
              ...o,
              ref: t
            })
          }) : null
        });
      x.displayName = k;
      var S = (0, g.TL)("DialogOverlay.RemoveScroll"),
        M = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = O(k, n), i = (0, c.e0)(), u = (0, s.s)(t, i);
          return (0, b.jsx)(v.A, {
            as: S,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, b.jsx)(p.sG.div, {
              "data-state": Z(o.open),
              ...r,
              ref: u,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        I = "DialogContent",
        F = r.forwardRef((e, t) => {
          const n = P(I, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            s = O(I, e.__scopeDialog);
          return (0, b.jsx)(f.C, {
            present: r || s.open,
            children: s.modal ? (0, b.jsx)(j, {
              ...o,
              ref: t
            }) : (0, b.jsx)(A, {
              ...o,
              ref: t
            })
          })
        });
      F.displayName = I;
      var j = r.forwardRef((e, t) => {
          const n = O(I, e.__scopeDialog),
            i = r.useRef(null),
            u = (0, s.s)(t, n.contentRef, i);
          return r.useEffect(() => {
            const e = i.current;
            if (e) return (0, y.Eq)(e)
          }, []), (0, b.jsx)(W, {
            ...e,
            ref: u,
            trapFocus: n.open,
            disableOutsidePointerEvents: n.open,
            onCloseAutoFocus: (0, o.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, o.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: (0, o.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        A = r.forwardRef((e, t) => {
          const n = O(I, e.__scopeDialog),
            o = r.useRef(!1),
            s = r.useRef(!1);
          return (0, b.jsx)(W, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || n.triggerRef.current?.focus(), t.preventDefault()), o.current = !1, s.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (o.current = !0, "pointerdown" === t.detail.originalEvent.type && (s.current = !0));
              const r = t.target,
                i = n.triggerRef.current?.contains(r);
              i && t.preventDefault(), "focusin" === t.detail.originalEvent.type && s.current && t.preventDefault()
            }
          })
        }),
        W = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: s,
            ...i
          } = e, u = O(I, n);
          return (0, m.Oh)(), (0, b.jsx)(b.Fragment, {
            children: (0, b.jsx)(d.n, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: s,
              children: (0, b.jsx)(c.qW, {
                role: "dialog",
                id: u.contentId,
                "aria-describedby": u.descriptionId,
                "aria-labelledby": u.titleId,
                "data-state": Z(u.open),
                ...i,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => u.onOpenChange(!1)
              })
            })
          })
        }),
        K = "DialogTitle",
        U = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = O(K, n);
          return (0, b.jsx)(p.sG.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        });
      U.displayName = K;
      var B = "DialogDescription",
        G = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = O(B, n);
          return (0, b.jsx)(p.sG.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        });
      G.displayName = B;
      var V = "DialogClose",
        H = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, s = O(V, n);
          return (0, b.jsx)(p.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.mK)(e.onClick, () => s.onOpenChange(!1))
          })
        });

      function Z(e) {
        return e ? "open" : "closed"
      }
      H.displayName = V
    },
    64334(e, t, n) {
      n.d(t, {
        bL: () => b,
        e0: () => m,
        lg: () => E,
        qW: () => f
      });
      var r, o = n(93082),
        s = n(2458),
        i = n(31270),
        u = n(64239),
        a = n(94660),
        c = n(39793),
        d = "dismissableLayer.update",
        l = o.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        f = o.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            deferPointerDownOutside: f = !1,
            onEscapeKeyDown: p,
            onPointerDownOutside: m,
            onFocusOutside: b,
            onInteractOutside: E,
            onDismiss: h,
            ...w
          } = e, D = o.useContext(l), [O, C] = o.useState(null), N = O?.ownerDocument ?? globalThis?.document, [, R] = o.useState({}), _ = (0, u.s)(t, C), L = Array.from(D.layers), [P] = [...D.layersWithOutsidePointerEventsDisabled].slice(-1), T = P ? L.indexOf(P) : -1, k = O ? L.indexOf(O) : -1, x = D.layersWithOutsidePointerEventsDisabled.size > 0, S = k >= T, M = o.useRef(!1), I = function(e, t) {
            const {
              ownerDocument: n = globalThis?.document,
              deferPointerDownOutside: r = !1,
              isDeferredPointerDownOutsideRef: s,
              dismissableSurfaces: i,
              shouldHandlePointerDownOutside: u = v
            } = t, c = (0, a.c)(e), d = o.useRef(!1), l = o.useRef(!1), f = o.useRef(new Map), p = o.useRef(() => {});
            return o.useEffect(() => {
              function e() {
                l.current = !1, s.current = !1, f.current.clear()
              }

              function t(e) {
                if (!l.current) return;
                const t = e.target;
                t instanceof Node && [...i].some(e => e.contains(t)) || f.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
                  l.current && p.current()
                }, 0)
              }

              function o(e) {
                l.current && f.current.set(e.type, !1)
              }
              const a = t => {
                  if (t.target && !d.current) {
                    let o = function() {
                      n.removeEventListener("click", p.current);
                      const t = Array.from(f.current.values()).some(Boolean);
                      e(), t || g("dismissableLayer.pointerDownOutside", c, i, {
                        discrete: !0
                      })
                    };
                    if (!u(t.target)) return n.removeEventListener("click", p.current), e(), void(d.current = !1);
                    const i = {
                      originalEvent: t
                    };
                    l.current = !0, s.current = r && 0 === t.button, f.current.clear(), r && 0 === t.button ? (n.removeEventListener("click", p.current), p.current = o, n.addEventListener("click", p.current, {
                      once: !0
                    })) : o()
                  } else n.removeEventListener("click", p.current), e();
                  d.current = !1
                },
                m = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
              for (const e of m) n.addEventListener(e, t, !0), n.addEventListener(e, o);
              const v = window.setTimeout(() => {
                n.addEventListener("pointerdown", a)
              }, 0);
              return () => {
                window.clearTimeout(v), n.removeEventListener("pointerdown", a), n.removeEventListener("click", p.current);
                for (const e of m) n.removeEventListener(e, t, !0), n.removeEventListener(e, o)
              }
            }, [n, c, r, s, i, u]), {
              onPointerDownCapture: () => d.current = !0
            }
          }(e => {
            m?.(e), E?.(e), e.defaultPrevented || h?.()
          }, {
            ownerDocument: N,
            deferPointerDownOutside: f,
            isDeferredPointerDownOutsideRef: M,
            dismissableSurfaces: D.dismissableSurfaces,
            shouldHandlePointerDownOutside: o.useCallback(e => {
              if (!(e instanceof Node)) return !1;
              const t = [...D.branches].some(t => t.contains(e));
              return S && !t
            }, [D.branches, S])
          }), F = function(e, t = globalThis?.document) {
            const n = (0, a.c)(e),
              r = o.useRef(!1);
            return o.useEffect(() => {
              const e = e => {
                e.target && !r.current && g("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }, [t, n]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }(e => {
            if (f && M.current) return;
            const t = e.target;
            [...D.branches].some(e => e.contains(t)) || (b?.(e), E?.(e), e.defaultPrevented || h?.())
          }, N), j = !!O && k === L.length - 1, A = (0, a.c)(e => {
            "Escape" === e.key && (p?.(e), !e.defaultPrevented && h && (e.preventDefault(), h()))
          });
          return o.useEffect(() => {
            if (j) return N.addEventListener("keydown", A, {
              capture: !0
            }), () => N.removeEventListener("keydown", A, {
              capture: !0
            })
          }, [N, j, A]), o.useEffect(() => {
            if (O) return n && (0 === D.layersWithOutsidePointerEventsDisabled.size && (r = N.body.style.pointerEvents, N.body.style.pointerEvents = "none"), D.layersWithOutsidePointerEventsDisabled.add(O)), D.layers.add(O), y(), () => {
              n && (D.layersWithOutsidePointerEventsDisabled.delete(O), 0 === D.layersWithOutsidePointerEventsDisabled.size && (N.body.style.pointerEvents = r))
            }
          }, [O, N, n, D]), o.useEffect(() => () => {
            O && (D.layers.delete(O), D.layersWithOutsidePointerEventsDisabled.delete(O), y())
          }, [O, D]), o.useEffect(() => {
            const e = () => R({});
            return document.addEventListener(d, e), () => document.removeEventListener(d, e)
          }, []), (0, c.jsx)(i.sG.div, {
            ...w,
            ref: _,
            style: {
              pointerEvents: x ? S ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, s.mK)(e.onFocusCapture, F.onFocusCapture),
            onBlurCapture: (0, s.mK)(e.onBlurCapture, F.onBlurCapture),
            onPointerDownCapture: (0, s.mK)(e.onPointerDownCapture, I.onPointerDownCapture)
          })
        });
      f.displayName = "DismissableLayer";
      var p = o.forwardRef((e, t) => {
        const n = o.useContext(l),
          r = o.useRef(null),
          s = (0, u.s)(t, r);
        return o.useEffect(() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, c.jsx)(i.sG.div, {
          ...e,
          ref: s
        })
      });

      function m() {
        const e = o.useContext(l),
          [t, n] = o.useState(null);
        return o.useEffect(() => {
          if (t) return e.dismissableSurfaces.add(t), () => {
            e.dismissableSurfaces.delete(t)
          }
        }, [t, e.dismissableSurfaces]), n
      }
      p.displayName = "DismissableLayerBranch";
      var v = () => !0;

      function y() {
        const e = new CustomEvent(d);
        document.dispatchEvent(e)
      }

      function g(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.target,
          s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? (0, i.hO)(o, s) : o.dispatchEvent(s)
      }
      var b = f,
        E = p
    },
    64355(e, t, n) {
      n.d(t, {
        n: () => l
      });
      var r = n(93082),
        o = n(64239),
        s = n(31270),
        i = n(94660),
        u = n(39793),
        a = "focusScope.autoFocusOnMount",
        c = "focusScope.autoFocusOnUnmount",
        d = {
          bubbles: !1,
          cancelable: !0
        },
        l = r.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: l = !1,
            onMountAutoFocus: m,
            onUnmountAutoFocus: g,
            ...b
          } = e, [E, h] = r.useState(null), w = (0, i.c)(m), D = (0, i.c)(g), O = r.useRef(null), C = (0, o.s)(t, h), N = r.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          r.useEffect(() => {
            if (l) {
              let e = function(e) {
                  if (N.paused || !E) return;
                  const t = e.target;
                  E.contains(t) ? O.current = t : v(O.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (N.paused || !E) return;
                  const t = e.relatedTarget;
                  null !== t && (E.contains(t) || v(O.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && v(E)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return E && r.observe(E, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }, [l, E, N.paused]), r.useEffect(() => {
            if (E) {
              y.add(N);
              const e = document.activeElement;
              if (!E.contains(e)) {
                const t = new CustomEvent(a, d);
                E.addEventListener(a, w), E.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (v(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(f(E).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && v(E))
              }
              return () => {
                E.removeEventListener(a, w), setTimeout(() => {
                  const t = new CustomEvent(c, d);
                  E.addEventListener(c, D), E.dispatchEvent(t), t.defaultPrevented || v(e ?? document.body, {
                    select: !0
                  }), E.removeEventListener(c, D), y.remove(N)
                }, 0)
              }
            }
          }, [E, w, D, N]);
          const R = r.useCallback(e => {
            if (!n && !l) return;
            if (N.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              r = document.activeElement;
            if (t && r) {
              const t = e.currentTarget,
                [o, s] = function(e) {
                  const t = f(e);
                  return [p(t, e), p(t.reverse(), e)]
                }(t);
              o && s ? e.shiftKey || r !== s ? e.shiftKey && r === o && (e.preventDefault(), n && v(s, {
                select: !0
              })) : (e.preventDefault(), n && v(o, {
                select: !0
              })) : r === t && e.preventDefault()
            }
          }, [n, l, N.paused]);
          return (0, u.jsx)(s.sG.div, {
            tabIndex: -1,
            ...b,
            ref: C,
            onKeyDown: R
          })
        });

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
        const n = "function" == typeof t.checkVisibility && t.checkVisibility({
          checkVisibilityCSS: !0
        });
        for (const r of e)
          if (!(n ? !r.checkVisibility({
              checkVisibilityCSS: !0
            }) : m(r, {
              upTo: t
            }))) return r
      }

      function m(e, {
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

      function v(e, {
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
            t !== n && n?.pause(), e = g(e, t), e.unshift(t)
          },
          remove(t) {
            e = g(e, t), e[0]?.resume()
          }
        }
      }();

      function g(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
    },
    18268(e, t, n) {
      n.d(t, {
        Z: () => a,
        b: () => c
      });
      var r = n(93082),
        o = n(84017),
        s = n(31270),
        i = n(10198),
        u = n(39793),
        a = r.forwardRef((e, t) => {
          const {
            container: n,
            ...a
          } = e, [c, d] = r.useState(!1);
          (0, i.N)(() => d(!0), []);
          const l = n || c && globalThis?.document?.body;
          return l ? o.createPortal((0, u.jsx)(s.sG.div, {
            ...a,
            ref: t
          }), l) : null
        });
      a.displayName = "Portal";
      var c = a
    },
    7470(e, t, n) {
      n.d(t, {
        C: () => s
      });
      var r = n(93082),
        o = n(10198),
        s = e => {
          const {
            present: t,
            children: n
          } = e, s = function(e) {
            const [t, n] = r.useState(), s = r.useRef(null), i = r.useRef(e), a = r.useRef("none"), c = r.useRef(void 0), d = e ? "mounted" : "unmounted", [l, f] = function(e, t) {
              return r.useReducer((e, n) => t[e][n] ?? e, e)
            }(d, {
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
            return r.useEffect(() => {
              "mounted" === l ? (a.current = c.current ?? u(s.current), c.current = void 0) : a.current = "none"
            }, [l]), (0, o.N)(() => {
              const t = s.current,
                n = i.current;
              if (n !== e) {
                const r = a.current,
                  o = u(t);
                e ? (c.current = o, f("MOUNT")) : f("none" === o || "none" === t?.display ? "UNMOUNT" : n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
              }
            }, [e, f]), (0, o.N)(() => {
              if (t) {
                let e;
                const n = t.ownerDocument.defaultView ?? window,
                  r = r => {
                    const o = u(s.current).includes(CSS.escape(r.animationName));
                    if (r.target === t && o && (f("ANIMATION_END"), !i.current)) {
                      const r = t.style.animationFillMode;
                      t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                      })
                    }
                  },
                  o = e => {
                    e.target === t && (a.current = u(s.current))
                  };
                return t.addEventListener("animationstart", o), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
                  n.clearTimeout(e), t.removeEventListener("animationstart", o), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r)
                }
              }
              f("ANIMATION_END")
            }, [t, f]), {
              isPresent: ["mounted", "unmountSuspended"].includes(l),
              ref: r.useCallback(e => {
                if (e) {
                  const t = getComputedStyle(e);
                  s.current = t, c.current = u(t)
                } else s.current = null;
                n(e)
              }, [])
            }
          }(t), a = "function" == typeof n ? n({
            present: s.isPresent
          }) : r.Children.only(n), c = function(...e) {
            const t = r.useRef(e);
            return t.current = e, r.useCallback(e => {
              const n = t.current;
              let r = !1;
              const o = n.map(t => {
                const n = i(t, e);
                return r || "function" != typeof n || (r = !0), n
              });
              if (r) return () => {
                for (let e = 0; e < o.length; e++) {
                  const t = o[e];
                  "function" == typeof t ? t() : i(n[e], null)
                }
              }
            }, [])
          }(s.ref, function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(a));
          return "function" == typeof n || s.isPresent ? r.cloneElement(a, {
            ref: c
          }) : null
        };

      function i(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function u(e) {
        return e?.animationName || "none"
      }
      s.displayName = "Presence"
    }
  }
]);