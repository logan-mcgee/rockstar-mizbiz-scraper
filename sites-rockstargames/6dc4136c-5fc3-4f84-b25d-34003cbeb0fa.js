try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6dc4136c-5fc3-4f84-b25d-34003cbeb0fa", e._sentryDebugIdIdentifier = "sentry-dbid-6dc4136c-5fc3-4f84-b25d-34003cbeb0fa")
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
  [9992], {
    67594(e, t, n) {
      n.d(t, {
        m: () => s
      });
      var o = n(85464);
      const r = e => "dark" === e ? o.xW.dark : o.xW.light,
        s = (e, t) => [o.xW.tokens, o.xW.typography, o.xW.grid, r(e)].join(" ")
    },
    88819(e, t, n) {
      n.d(t, {
        UC: () => ne,
        VY: () => re,
        ZL: () => ee,
        bL: () => Q,
        bm: () => se,
        hE: () => oe,
        hJ: () => te,
        l9: () => X
      });
      var o = n(93082),
        r = n(8316),
        s = n(50446),
        i = n(53582),
        a = n(96883),
        u = n(1531),
        c = n(99523),
        d = n(83876),
        l = n(2823),
        f = n(47306),
        p = n(66704),
        m = n(91685),
        v = n(35328),
        g = n(45787),
        y = n(2976),
        b = n(39793),
        E = "Dialog",
        [h, w] = (0, i.A)(E),
        [D, N] = h(E),
        O = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: s,
            onOpenChange: i,
            modal: c = !0
          } = e, d = o.useRef(null), l = o.useRef(null), [f, p] = (0, u.i)({
            prop: r,
            defaultProp: s ?? !1,
            onChange: i,
            caller: E
          });
          return (0, b.jsx)(D, {
            scope: t,
            triggerRef: d,
            contentRef: l,
            contentId: (0, a.B)(),
            titleId: (0, a.B)(),
            descriptionId: (0, a.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: o.useCallback(() => p(e => !e), [p]),
            modal: c,
            children: n
          })
        };
      O.displayName = E;
      var C = "DialogTrigger",
        _ = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, i = N(C, n), a = (0, s.s)(t, i.triggerRef);
          return (0, b.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.contentId,
            "data-state": z(i.open),
            ...o,
            ref: a,
            onClick: (0, r.mK)(e.onClick, i.onOpenToggle)
          })
        });
      _.displayName = C;
      var R = "DialogPortal",
        [T, x] = h(R, {
          forceMount: void 0
        }),
        I = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: s
          } = e, i = N(R, t);
          return (0, b.jsx)(T, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, e => (0, b.jsx)(f.C, {
              present: n || i.open,
              children: (0, b.jsx)(l.Z, {
                asChild: !0,
                container: s,
                children: e
              })
            }))
          })
        };
      I.displayName = R;
      var L = "DialogOverlay",
        P = o.forwardRef((e, t) => {
          const n = x(L, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            s = N(L, e.__scopeDialog);
          return s.modal ? (0, b.jsx)(f.C, {
            present: o || s.open,
            children: (0, b.jsx)(M, {
              ...r,
              ref: t
            })
          }) : null
        });
      P.displayName = L;
      var F = (0, y.TL)("DialogOverlay.RemoveScroll"),
        M = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = N(L, n);
          return (0, b.jsx)(v.A, {
            as: F,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: (0, b.jsx)(p.sG.div, {
              "data-state": z(r.open),
              ...o,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        }),
        j = "DialogContent",
        k = o.forwardRef((e, t) => {
          const n = x(j, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            s = N(j, e.__scopeDialog);
          return (0, b.jsx)(f.C, {
            present: o || s.open,
            children: s.modal ? (0, b.jsx)(S, {
              ...r,
              ref: t
            }) : (0, b.jsx)(A, {
              ...r,
              ref: t
            })
          })
        });
      k.displayName = j;
      var S = o.forwardRef((e, t) => {
          const n = N(j, e.__scopeDialog),
            i = o.useRef(null),
            a = (0, s.s)(t, n.contentRef, i);
          return o.useEffect(() => {
            const e = i.current;
            if (e) return (0, g.Eq)(e)
          }, []), (0, b.jsx)(W, {
            ...e,
            ref: a,
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
        A = o.forwardRef((e, t) => {
          const n = N(j, e.__scopeDialog),
            r = o.useRef(!1),
            s = o.useRef(!1);
          return (0, b.jsx)(W, {
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
        }),
        W = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: i,
            onCloseAutoFocus: a,
            ...u
          } = e, l = N(j, n), f = o.useRef(null), p = (0, s.s)(t, f);
          return (0, m.Oh)(), (0, b.jsxs)(b.Fragment, {
            children: [(0, b.jsx)(d.n, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: i,
              onUnmountAutoFocus: a,
              children: (0, b.jsx)(c.qW, {
                role: "dialog",
                id: l.contentId,
                "aria-describedby": l.descriptionId,
                "aria-labelledby": l.titleId,
                "data-state": z(l.open),
                ...u,
                ref: p,
                onDismiss: () => l.onOpenChange(!1)
              })
            }), (0, b.jsxs)(b.Fragment, {
              children: [(0, b.jsx)(Y, {
                titleId: l.titleId
              }), (0, b.jsx)(J, {
                contentRef: f,
                descriptionId: l.descriptionId
              })]
            })]
          })
        }),
        K = "DialogTitle",
        U = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = N(K, n);
          return (0, b.jsx)(p.sG.h2, {
            id: r.titleId,
            ...o,
            ref: t
          })
        });
      U.displayName = K;
      var B = "DialogDescription",
        G = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, r = N(B, n);
          return (0, b.jsx)(p.sG.p, {
            id: r.descriptionId,
            ...o,
            ref: t
          })
        });
      G.displayName = B;
      var $ = "DialogClose",
        q = o.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, s = N($, n);
          return (0, b.jsx)(p.sG.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: (0, r.mK)(e.onClick, () => s.onOpenChange(!1))
          })
        });

      function z(e) {
        return e ? "open" : "closed"
      }
      q.displayName = $;
      var Z = "DialogTitleWarning",
        [H, V] = (0, i.q)(Z, {
          contentName: j,
          titleName: K,
          docsSlug: "dialog"
        }),
        Y = ({
          titleId: e
        }) => {
          const t = V(Z),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return o.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        J = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${V("DialogDescriptionWarning").contentName}}.`;
          return o.useEffect(() => {
            const o = e.current?.getAttribute("aria-describedby");
            t && o && (document.getElementById(t) || console.warn(n))
          }, [n, e, t]), null
        },
        Q = O,
        X = _,
        ee = I,
        te = P,
        ne = k,
        oe = U,
        re = G,
        se = q
    },
    99523(e, t, n) {
      n.d(t, {
        bL: () => y,
        lg: () => b,
        qW: () => p
      });
      var o, r = n(93082),
        s = n(8316),
        i = n(66704),
        a = n(50446),
        u = n(38351),
        c = n(2471),
        d = n(39793),
        l = "dismissableLayer.update",
        f = r.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        p = r.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: p,
            onPointerDownOutside: m,
            onFocusOutside: y,
            onInteractOutside: b,
            onDismiss: E,
            ...h
          } = e, w = r.useContext(f), [D, N] = r.useState(null), O = D?.ownerDocument ?? globalThis?.document, [, C] = r.useState({}), _ = (0, a.s)(t, e => N(e)), R = Array.from(w.layers), [T] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1), x = R.indexOf(T), I = D ? R.indexOf(D) : -1, L = w.layersWithOutsidePointerEventsDisabled.size > 0, P = I >= x, F = function(e, t = globalThis?.document) {
            const n = (0, u.c)(e),
              o = r.useRef(!1),
              s = r.useRef(() => {});
            return r.useEffect(() => {
              const e = e => {
                  if (e.target && !o.current) {
                    let o = function() {
                      g("dismissableLayer.pointerDownOutside", n, r, {
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
                  o.current = !1
                },
                r = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(r), t.removeEventListener("pointerdown", e), t.removeEventListener("click", s.current)
              }
            }, [t, n]), {
              onPointerDownCapture: () => o.current = !0
            }
          }(e => {
            const t = e.target,
              n = [...w.branches].some(e => e.contains(t));
            P && !n && (m?.(e), b?.(e), e.defaultPrevented || E?.())
          }, O), M = function(e, t = globalThis?.document) {
            const n = (0, u.c)(e),
              o = r.useRef(!1);
            return r.useEffect(() => {
              const e = e => {
                e.target && !o.current && g("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }, [t, n]), {
              onFocusCapture: () => o.current = !0,
              onBlurCapture: () => o.current = !1
            }
          }(e => {
            const t = e.target;
            [...w.branches].some(e => e.contains(t)) || (y?.(e), b?.(e), e.defaultPrevented || E?.())
          }, O);
          return (0, c.U)(e => {
            I === w.layers.size - 1 && (p?.(e), !e.defaultPrevented && E && (e.preventDefault(), E()))
          }, O), r.useEffect(() => {
            if (D) return n && (0 === w.layersWithOutsidePointerEventsDisabled.size && (o = O.body.style.pointerEvents, O.body.style.pointerEvents = "none"), w.layersWithOutsidePointerEventsDisabled.add(D)), w.layers.add(D), v(), () => {
              n && 1 === w.layersWithOutsidePointerEventsDisabled.size && (O.body.style.pointerEvents = o)
            }
          }, [D, O, n, w]), r.useEffect(() => () => {
            D && (w.layers.delete(D), w.layersWithOutsidePointerEventsDisabled.delete(D), v())
          }, [D, w]), r.useEffect(() => {
            const e = () => C({});
            return document.addEventListener(l, e), () => document.removeEventListener(l, e)
          }, []), (0, d.jsx)(i.sG.div, {
            ...h,
            ref: _,
            style: {
              pointerEvents: L ? P ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, s.mK)(e.onFocusCapture, M.onFocusCapture),
            onBlurCapture: (0, s.mK)(e.onBlurCapture, M.onBlurCapture),
            onPointerDownCapture: (0, s.mK)(e.onPointerDownCapture, F.onPointerDownCapture)
          })
        });
      p.displayName = "DismissableLayer";
      var m = r.forwardRef((e, t) => {
        const n = r.useContext(f),
          o = r.useRef(null),
          s = (0, a.s)(t, o);
        return r.useEffect(() => {
          const e = o.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, d.jsx)(i.sG.div, {
          ...e,
          ref: s
        })
      });

      function v() {
        const e = new CustomEvent(l);
        document.dispatchEvent(e)
      }

      function g(e, t, n, {
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
      m.displayName = "DismissableLayerBranch";
      var y = p,
        b = m
    },
    83876(e, t, n) {
      n.d(t, {
        n: () => l
      });
      var o = n(93082),
        r = n(50446),
        s = n(66704),
        i = n(38351),
        a = n(39793),
        u = "focusScope.autoFocusOnMount",
        c = "focusScope.autoFocusOnUnmount",
        d = {
          bubbles: !1,
          cancelable: !0
        },
        l = o.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: l = !1,
            onMountAutoFocus: m,
            onUnmountAutoFocus: y,
            ...b
          } = e, [E, h] = o.useState(null), w = (0, i.c)(m), D = (0, i.c)(y), N = o.useRef(null), O = (0, r.s)(t, e => h(e)), C = o.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          o.useEffect(() => {
            if (l) {
              let e = function(e) {
                  if (C.paused || !E) return;
                  const t = e.target;
                  E.contains(t) ? N.current = t : v(N.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (C.paused || !E) return;
                  const t = e.relatedTarget;
                  null !== t && (E.contains(t) || v(N.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && v(E)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const o = new MutationObserver(n);
              return E && o.observe(E, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), o.disconnect()
              }
            }
          }, [l, E, C.paused]), o.useEffect(() => {
            if (E) {
              g.add(C);
              const e = document.activeElement;
              if (!E.contains(e)) {
                const t = new CustomEvent(u, d);
                E.addEventListener(u, w), E.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const o of e)
                    if (v(o, {
                        select: t
                      }), document.activeElement !== n) return
                }(f(E).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && v(E))
              }
              return () => {
                E.removeEventListener(u, w), setTimeout(() => {
                  const t = new CustomEvent(c, d);
                  E.addEventListener(c, D), E.dispatchEvent(t), t.defaultPrevented || v(e ?? document.body, {
                    select: !0
                  }), E.removeEventListener(c, D), g.remove(C)
                }, 0)
              }
            }
          }, [E, w, D, C]);
          const _ = o.useCallback(e => {
            if (!n && !l) return;
            if (C.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, s] = function(e) {
                  const t = f(e);
                  return [p(t, e), p(t.reverse(), e)]
                }(t);
              r && s ? e.shiftKey || o !== s ? e.shiftKey && o === r && (e.preventDefault(), n && v(s, {
                select: !0
              })) : (e.preventDefault(), n && v(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [n, l, C.paused]);
          return (0, a.jsx)(s.sG.div, {
            tabIndex: -1,
            ...b,
            ref: O,
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
          o = n.indexOf(t);
        return -1 !== o && n.splice(o, 1), n
      }
    },
    2823(e, t, n) {
      n.d(t, {
        Z: () => u
      });
      var o = n(93082),
        r = n(84017),
        s = n(66704),
        i = n(86627),
        a = n(39793),
        u = o.forwardRef((e, t) => {
          const {
            container: n,
            ...u
          } = e, [c, d] = o.useState(!1);
          (0, i.N)(() => d(!0), []);
          const l = n || c && globalThis?.document?.body;
          return l ? r.createPortal((0, a.jsx)(s.sG.div, {
            ...u,
            ref: t
          }), l) : null
        });
      u.displayName = "Portal"
    },
    47306(e, t, n) {
      n.d(t, {
        C: () => i
      });
      var o = n(93082),
        r = n(50446),
        s = n(86627),
        i = e => {
          const {
            present: t,
            children: n
          } = e, i = function(e) {
            const [t, n] = o.useState(), r = o.useRef(null), i = o.useRef(e), u = o.useRef("none"), c = e ? "mounted" : "unmounted", [d, l] = function(e, t) {
              return o.useReducer((e, n) => t[e][n] ?? e, e)
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
            return o.useEffect(() => {
              const e = a(r.current);
              u.current = "mounted" === d ? e : "none"
            }, [d]), (0, s.N)(() => {
              const t = r.current,
                n = i.current;
              if (n !== e) {
                const o = u.current,
                  r = a(t);
                l(e ? "MOUNT" : "none" === r || "none" === t?.display ? "UNMOUNT" : n && o !== r ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
              }
            }, [e, l]), (0, s.N)(() => {
              if (t) {
                let e;
                const n = t.ownerDocument.defaultView ?? window,
                  o = o => {
                    const s = a(r.current).includes(CSS.escape(o.animationName));
                    if (o.target === t && s && (l("ANIMATION_END"), !i.current)) {
                      const o = t.style.animationFillMode;
                      t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = o)
                      })
                    }
                  },
                  s = e => {
                    e.target === t && (u.current = a(r.current))
                  };
                return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
                  n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o)
                }
              }
              l("ANIMATION_END")
            }, [t, l]), {
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: o.useCallback(e => {
                r.current = e ? getComputedStyle(e) : null, n(e)
              }, [])
            }
          }(t), u = "function" == typeof n ? n({
            present: i.isPresent
          }) : o.Children.only(n), c = (0, r.s)(i.ref, function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(u));
          return "function" == typeof n || i.isPresent ? o.cloneElement(u, {
            ref: c
          }) : null
        };

      function a(e) {
        return e?.animationName || "none"
      }
      i.displayName = "Presence"
    },
    66704(e, t, n) {
      n.d(t, {
        hO: () => u,
        sG: () => a
      });
      var o = n(93082),
        r = n(84017),
        s = n(2976),
        i = n(39793),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, s.TL)(`Primitive.${t}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...s
              } = e, a = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
                ...s,
                ref: o
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {});

      function u(e, t) {
        e && r.flushSync(() => e.dispatchEvent(t))
      }
    }
  }
]);