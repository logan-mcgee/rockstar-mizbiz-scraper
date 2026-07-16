try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "000a6753-c6bb-4ef2-9fc8-49f030d41250", e._sentryDebugIdIdentifier = "sentry-dbid-000a6753-c6bb-4ef2-9fc8-49f030d41250")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2948], {
    22948(e, t, n) {
      n.d(t, {
        UC: () => k,
        VY: () => G,
        ZL: () => P,
        bL: () => C,
        bm: () => Z,
        hE: () => W,
        hJ: () => I,
        l9: () => _
      });
      var r = n(93082),
        o = n(39467),
        s = n(64239),
        i = n(54958),
        u = n(94296),
        a = n(17038),
        c = n(98410),
        d = n(24082),
        l = n(92154),
        f = n(24817),
        p = n(13165),
        m = n(38174),
        v = n(38100),
        g = n(45787),
        y = n(17172),
        b = n(39793),
        E = "Dialog",
        [w, h] = (0, i.A)(E),
        [D, O] = w(E),
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
        _ = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, i = O(N, n), u = (0, s.s)(t, i.triggerRef);
          return (0, b.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.open ? i.contentId : void 0,
            "data-state": q(i.open),
            ...r,
            ref: u,
            onClick: (0, o.mK)(e.onClick, i.onOpenToggle)
          })
        });
      _.displayName = N;
      var R = "DialogPortal",
        [T, L] = w(R, {
          forceMount: void 0
        }),
        P = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: o,
            container: s
          } = e, i = O(R, t);
          return (0, b.jsx)(T, {
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
      P.displayName = R;
      var M = "DialogOverlay",
        I = r.forwardRef((e, t) => {
          const n = L(M, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            s = O(M, e.__scopeDialog);
          return s.modal ? (0, b.jsx)(f.C, {
            present: r || s.open,
            children: (0, b.jsx)(F, {
              ...o,
              ref: t
            })
          }) : null
        });
      I.displayName = M;
      var x = (0, y.TL)("DialogOverlay.RemoveScroll"),
        F = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = O(M, n), i = (0, c.e0)(), u = (0, s.s)(t, i);
          return (0, b.jsx)(v.A, {
            as: x,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, b.jsx)(p.sG.div, {
              "data-state": q(o.open),
              ...r,
              ref: u,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        S = "DialogContent",
        k = r.forwardRef((e, t) => {
          const n = L(S, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            s = O(S, e.__scopeDialog);
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
      k.displayName = S;
      var j = r.forwardRef((e, t) => {
          const n = O(S, e.__scopeDialog),
            i = r.useRef(null),
            u = (0, s.s)(t, n.contentRef, i);
          return r.useEffect(() => {
            const e = i.current;
            if (e) return (0, g.Eq)(e)
          }, []), (0, b.jsx)(K, {
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
          const n = O(S, e.__scopeDialog),
            o = r.useRef(!1),
            s = r.useRef(!1);
          return (0, b.jsx)(K, {
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
        K = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: s,
            ...i
          } = e, u = O(S, n);
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
                "data-state": q(u.open),
                ...i,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => u.onOpenChange(!1)
              })
            })
          })
        }),
        U = "DialogTitle",
        W = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = O(U, n);
          return (0, b.jsx)(p.sG.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        });
      W.displayName = U;
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
      var z = "DialogClose",
        Z = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, s = O(z, n);
          return (0, b.jsx)(p.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.mK)(e.onClick, () => s.onOpenChange(!1))
          })
        });

      function q(e) {
        return e ? "open" : "closed"
      }
      Z.displayName = z
    },
    98410(e, t, n) {
      n.d(t, {
        bL: () => b,
        e0: () => v,
        lg: () => E,
        qW: () => p
      });
      var r, o = n(93082),
        s = n(39467),
        i = n(13165),
        u = n(64239),
        a = n(94660),
        c = n(61144),
        d = n(39793),
        l = "dismissableLayer.update",
        f = o.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        p = o.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            deferPointerDownOutside: p = !1,
            onEscapeKeyDown: m,
            onPointerDownOutside: v,
            onFocusOutside: b,
            onInteractOutside: E,
            onDismiss: w,
            ...h
          } = e, D = o.useContext(f), [O, C] = o.useState(null), N = O?.ownerDocument ?? globalThis?.document, [, _] = o.useState({}), R = (0, u.s)(t, e => C(e)), T = Array.from(D.layers), [L] = [...D.layersWithOutsidePointerEventsDisabled].slice(-1), P = T.indexOf(L), M = O ? T.indexOf(O) : -1, I = D.layersWithOutsidePointerEventsDisabled.size > 0, x = M >= P, F = o.useRef(!1), S = function(e, t) {
            const {
              ownerDocument: n = globalThis?.document,
              deferPointerDownOutside: r = !1,
              isDeferredPointerDownOutsideRef: s,
              dismissableSurfaces: i
            } = t, u = (0, a.c)(e), c = o.useRef(!1), d = o.useRef(!1), l = o.useRef(new Map), f = o.useRef(() => {});
            return o.useEffect(() => {
              function e() {
                d.current = !1, s.current = !1, l.current.clear()
              }

              function t(e) {
                if (!d.current) return;
                const t = e.target;
                t instanceof Node && [...i].some(e => e.contains(t)) || l.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
                  d.current && f.current()
                }, 0)
              }

              function o(e) {
                d.current && l.current.set(e.type, !1)
              }
              const a = t => {
                  if (t.target && !c.current) {
                    let o = function() {
                      n.removeEventListener("click", f.current);
                      const t = Array.from(l.current.values()).some(Boolean);
                      e(), t || y("dismissableLayer.pointerDownOutside", u, i, {
                        discrete: !0
                      })
                    };
                    const i = {
                      originalEvent: t
                    };
                    d.current = !0, s.current = r && 0 === t.button, l.current.clear(), r && 0 === t.button ? (n.removeEventListener("click", f.current), f.current = o, n.addEventListener("click", f.current, {
                      once: !0
                    })) : o()
                  } else n.removeEventListener("click", f.current), e();
                  c.current = !1
                },
                p = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
              for (const e of p) n.addEventListener(e, t, !0), n.addEventListener(e, o);
              const m = window.setTimeout(() => {
                n.addEventListener("pointerdown", a)
              }, 0);
              return () => {
                window.clearTimeout(m), n.removeEventListener("pointerdown", a), n.removeEventListener("click", f.current);
                for (const e of p) n.removeEventListener(e, t, !0), n.removeEventListener(e, o)
              }
            }, [n, u, r, s, i]), {
              onPointerDownCapture: () => c.current = !0
            }
          }(e => {
            const t = e.target;
            if (!(t instanceof Node)) return;
            const n = [...D.branches].some(e => e.contains(t));
            x && !n && (v?.(e), E?.(e), e.defaultPrevented || w?.())
          }, {
            ownerDocument: N,
            deferPointerDownOutside: p,
            isDeferredPointerDownOutsideRef: F,
            dismissableSurfaces: D.dismissableSurfaces
          }), k = function(e, t = globalThis?.document) {
            const n = (0, a.c)(e),
              r = o.useRef(!1);
            return o.useEffect(() => {
              const e = e => {
                e.target && !r.current && y("dismissableLayer.focusOutside", n, {
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
            if (p && F.current) return;
            const t = e.target;
            [...D.branches].some(e => e.contains(t)) || (b?.(e), E?.(e), e.defaultPrevented || w?.())
          }, N);
          return (0, c.U)(e => {
            M === D.layers.size - 1 && (m?.(e), !e.defaultPrevented && w && (e.preventDefault(), w()))
          }, N), o.useEffect(() => {
            if (O) return n && (0 === D.layersWithOutsidePointerEventsDisabled.size && (r = N.body.style.pointerEvents, N.body.style.pointerEvents = "none"), D.layersWithOutsidePointerEventsDisabled.add(O)), D.layers.add(O), g(), () => {
              n && (D.layersWithOutsidePointerEventsDisabled.delete(O), 0 === D.layersWithOutsidePointerEventsDisabled.size && (N.body.style.pointerEvents = r))
            }
          }, [O, N, n, D]), o.useEffect(() => () => {
            O && (D.layers.delete(O), D.layersWithOutsidePointerEventsDisabled.delete(O), g())
          }, [O, D]), o.useEffect(() => {
            const e = () => _({});
            return document.addEventListener(l, e), () => document.removeEventListener(l, e)
          }, []), (0, d.jsx)(i.sG.div, {
            ...h,
            ref: R,
            style: {
              pointerEvents: I ? x ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, s.mK)(e.onFocusCapture, k.onFocusCapture),
            onBlurCapture: (0, s.mK)(e.onBlurCapture, k.onBlurCapture),
            onPointerDownCapture: (0, s.mK)(e.onPointerDownCapture, S.onPointerDownCapture)
          })
        });
      p.displayName = "DismissableLayer";
      var m = o.forwardRef((e, t) => {
        const n = o.useContext(f),
          r = o.useRef(null),
          s = (0, u.s)(t, r);
        return o.useEffect(() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, d.jsx)(i.sG.div, {
          ...e,
          ref: s
        })
      });

      function v() {
        const e = o.useContext(f),
          [t, n] = o.useState(null);
        return o.useEffect(() => {
          if (t) return e.dismissableSurfaces.add(t), () => {
            e.dismissableSurfaces.delete(t)
          }
        }, [t, e.dismissableSurfaces]), n
      }

      function g() {
        const e = new CustomEvent(l);
        document.dispatchEvent(e)
      }

      function y(e, t, n, {
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
      m.displayName = "DismissableLayerBranch";
      var b = p,
        E = m
    },
    24082(e, t, n) {
      n.d(t, {
        n: () => l
      });
      var r = n(93082),
        o = n(64239),
        s = n(13165),
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
            onUnmountAutoFocus: y,
            ...b
          } = e, [E, w] = r.useState(null), h = (0, i.c)(m), D = (0, i.c)(y), O = r.useRef(null), C = (0, o.s)(t, e => w(e)), N = r.useRef({
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
              g.add(N);
              const e = document.activeElement;
              if (!E.contains(e)) {
                const t = new CustomEvent(a, d);
                E.addEventListener(a, h), E.dispatchEvent(t), t.defaultPrevented || (function(e, {
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
                E.removeEventListener(a, h), setTimeout(() => {
                  const t = new CustomEvent(c, d);
                  E.addEventListener(c, D), E.dispatchEvent(t), t.defaultPrevented || v(e ?? document.body, {
                    select: !0
                  }), E.removeEventListener(c, D), g.remove(N)
                }, 0)
              }
            }
          }, [E, h, D, N]);
          const _ = r.useCallback(e => {
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
            onKeyDown: _
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
        for (const n of e)
          if (!m(n, {
              upTo: t
            })) return n
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
      var g = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = y(e, t), e.unshift(t)
          },
          remove(t) {
            e = y(e, t), e[0]?.resume()
          }
        }
      }();

      function y(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
    },
    92154(e, t, n) {
      n.d(t, {
        Z: () => a
      });
      var r = n(93082),
        o = n(84017),
        s = n(13165),
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
      a.displayName = "Portal"
    },
    24817(e, t, n) {
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
            const [t, n] = r.useState(), s = r.useRef(null), i = r.useRef(e), a = r.useRef("none"), c = e ? "mounted" : "unmounted", [d, l] = function(e, t) {
              return r.useReducer((e, n) => t[e][n] ?? e, e)
            }(c, {
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
              const e = u(s.current);
              a.current = "mounted" === d ? e : "none"
            }, [d]), (0, o.N)(() => {
              const t = s.current,
                n = i.current;
              if (n !== e) {
                const r = a.current,
                  o = u(t);
                l(e ? "MOUNT" : "none" === o || "none" === t?.display ? "UNMOUNT" : n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
              }
            }, [e, l]), (0, o.N)(() => {
              if (t) {
                let e;
                const n = t.ownerDocument.defaultView ?? window,
                  r = r => {
                    const o = u(s.current).includes(CSS.escape(r.animationName));
                    if (r.target === t && o && (l("ANIMATION_END"), !i.current)) {
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
              l("ANIMATION_END")
            }, [t, l]), {
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: r.useCallback(e => {
                s.current = e ? getComputedStyle(e) : null, n(e)
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