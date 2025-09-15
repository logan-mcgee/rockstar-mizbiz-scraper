try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7bb9fdbb-74f0-42ac-9658-01c032732bd1", e._sentryDebugIdIdentifier = "sentry-dbid-7bb9fdbb-74f0-42ac-9658-01c032732bd1")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "e75daf86583d2f46160d46d6e78dabbc975e828b",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e75daf86583d2f46160d46d6e78dabbc975e828b"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2551], {
    1573: (e, t, n) => {
      n.d(t, {
        qW: () => f
      });
      var r, o = n(62229),
        a = n(94118),
        i = n(78004),
        c = n(95362),
        u = n(76286),
        s = n(42295),
        d = "dismissableLayer.update",
        l = o.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        f = o.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: f,
            onPointerDownOutside: v,
            onFocusOutside: h,
            onInteractOutside: g,
            onDismiss: y,
            ...b
          } = e, E = o.useContext(l), [w, C] = o.useState(null), N = w?.ownerDocument ?? globalThis?.document, [, _] = o.useState({}), D = (0, c.s)(t, (e => C(e))), R = Array.from(E.layers), [S] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1), M = R.indexOf(S), T = w ? R.indexOf(w) : -1, x = E.layersWithOutsidePointerEventsDisabled.size > 0, O = T >= M, A = function(e, t = globalThis?.document) {
            const n = (0, u.c)(e),
              r = o.useRef(!1),
              a = o.useRef((() => {}));
            return o.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      m("dismissableLayer.pointerDownOutside", n, o, {
                        discrete: !0
                      })
                    };
                    const o = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", a.current), a.current = r, t.addEventListener("click", a.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", a.current);
                  r.current = !1
                },
                o = window.setTimeout((() => {
                  t.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", a.current)
              }
            }), [t, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }((e => {
            const t = e.target,
              n = [...E.branches].some((e => e.contains(t)));
            O && !n && (v?.(e), g?.(e), e.defaultPrevented || y?.())
          }), N), L = function(e, t = globalThis?.document) {
            const n = (0, u.c)(e),
              r = o.useRef(!1);
            return o.useEffect((() => {
              const e = e => {
                e.target && !r.current && m("dismissableLayer.focusOutside", n, {
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
            [...E.branches].some((e => e.contains(t))) || (h?.(e), g?.(e), e.defaultPrevented || y?.())
          }), N);
          return function(e, t = globalThis?.document) {
            const n = (0, u.c)(e);
            o.useEffect((() => {
              const e = e => {
                "Escape" === e.key && n(e)
              };
              return t.addEventListener("keydown", e, {
                capture: !0
              }), () => t.removeEventListener("keydown", e, {
                capture: !0
              })
            }), [n, t])
          }((e => {
            T === E.layers.size - 1 && (f?.(e), !e.defaultPrevented && y && (e.preventDefault(), y()))
          }), N), o.useEffect((() => {
            if (w) return n && (0 === E.layersWithOutsidePointerEventsDisabled.size && (r = N.body.style.pointerEvents, N.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(w)), E.layers.add(w), p(), () => {
              n && 1 === E.layersWithOutsidePointerEventsDisabled.size && (N.body.style.pointerEvents = r)
            }
          }), [w, N, n, E]), o.useEffect((() => () => {
            w && (E.layers.delete(w), E.layersWithOutsidePointerEventsDisabled.delete(w), p())
          }), [w, E]), o.useEffect((() => {
            const e = () => _({});
            return document.addEventListener(d, e), () => document.removeEventListener(d, e)
          }), []), (0, s.jsx)(i.sG.div, {
            ...b,
            ref: D,
            style: {
              pointerEvents: x ? O ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, a.m)(e.onFocusCapture, L.onFocusCapture),
            onBlurCapture: (0, a.m)(e.onBlurCapture, L.onBlurCapture),
            onPointerDownCapture: (0, a.m)(e.onPointerDownCapture, A.onPointerDownCapture)
          })
        }));

      function p() {
        const e = new CustomEvent(d);
        document.dispatchEvent(e)
      }

      function m(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.target,
          a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? (0, i.hO)(o, a) : o.dispatchEvent(a)
      }
      f.displayName = "DismissableLayer", o.forwardRef(((e, t) => {
        const n = o.useContext(l),
          r = o.useRef(null),
          a = (0, c.s)(t, r);
        return o.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, s.jsx)(i.sG.div, {
          ...e,
          ref: a
        })
      })).displayName = "DismissableLayerBranch"
    },
    15234: (e, t, n) => {
      n.d(t, {
        Oh: () => a
      });
      var r = n(62229),
        o = 0;

      function a() {
        r.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? i()), document.body.insertAdjacentElement("beforeend", e[1] ?? i()), o++, () => {
            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), o--
          }
        }), [])
      }

      function i() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
    },
    22551: (e, t, n) => {
      n.d(t, {
        UC: () => ne,
        VY: () => oe,
        ZL: () => ee,
        bL: () => J,
        bm: () => ae,
        hE: () => re,
        hJ: () => te,
        l9: () => Q
      });
      var r = n(62229),
        o = n(94118),
        a = n(95362),
        i = n(85426),
        c = n(86126),
        u = n(53054),
        s = n(1573),
        d = n(25656),
        l = n(80061),
        f = n(53146),
        p = n(78004),
        m = n(15234),
        v = n(97359),
        h = n(94926),
        g = n(39447),
        y = n(42295),
        b = "Dialog",
        [E, w] = (0, i.A)(b),
        [C, N] = E(b),
        _ = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: o,
            defaultOpen: a,
            onOpenChange: i,
            modal: s = !0
          } = e, d = r.useRef(null), l = r.useRef(null), [f, p] = (0, u.i)({
            prop: o,
            defaultProp: a ?? !1,
            onChange: i,
            caller: b
          });
          return (0, y.jsx)(C, {
            scope: t,
            triggerRef: d,
            contentRef: l,
            contentId: (0, c.B)(),
            titleId: (0, c.B)(),
            descriptionId: (0, c.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: r.useCallback((() => p((e => !e))), [p]),
            modal: s,
            children: n
          })
        };
      _.displayName = b;
      var D = "DialogTrigger",
        R = r.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, i = N(D, n), c = (0, a.s)(t, i.triggerRef);
          return (0, y.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.contentId,
            "data-state": G(i.open),
            ...r,
            ref: c,
            onClick: (0, o.m)(e.onClick, i.onOpenToggle)
          })
        }));
      R.displayName = D;
      var S = "DialogPortal",
        [M, T] = E(S, {
          forceMount: void 0
        }),
        x = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: o,
            container: a
          } = e, i = N(S, t);
          return (0, y.jsx)(M, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, (e => (0, y.jsx)(f.C, {
              present: n || i.open,
              children: (0, y.jsx)(l.Z, {
                asChild: !0,
                container: a,
                children: e
              })
            })))
          })
        };
      x.displayName = S;
      var O = "DialogOverlay",
        A = r.forwardRef(((e, t) => {
          const n = T(O, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            a = N(O, e.__scopeDialog);
          return a.modal ? (0, y.jsx)(f.C, {
            present: r || a.open,
            children: (0, y.jsx)(P, {
              ...o,
              ref: t
            })
          }) : null
        }));
      A.displayName = O;
      var L = (0, g.TL)("DialogOverlay.RemoveScroll"),
        P = r.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = N(O, n);
          return (0, y.jsx)(v.A, {
            as: L,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, y.jsx)(p.sG.div, {
              "data-state": G(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        })),
        k = "DialogContent",
        I = r.forwardRef(((e, t) => {
          const n = T(k, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            a = N(k, e.__scopeDialog);
          return (0, y.jsx)(f.C, {
            present: r || a.open,
            children: a.modal ? (0, y.jsx)(F, {
              ...o,
              ref: t
            }) : (0, y.jsx)(j, {
              ...o,
              ref: t
            })
          })
        }));
      I.displayName = k;
      var F = r.forwardRef(((e, t) => {
          const n = N(k, e.__scopeDialog),
            i = r.useRef(null),
            c = (0, a.s)(t, n.contentRef, i);
          return r.useEffect((() => {
            const e = i.current;
            if (e) return (0, h.Eq)(e)
          }), []), (0, y.jsx)(W, {
            ...e,
            ref: c,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: (0, o.m)(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: (0, o.m)(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        j = r.forwardRef(((e, t) => {
          const n = N(k, e.__scopeDialog),
            o = r.useRef(!1),
            a = r.useRef(!1);
          return (0, y.jsx)(W, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || n.triggerRef.current?.focus(), t.preventDefault()), o.current = !1, a.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (o.current = !0, "pointerdown" === t.detail.originalEvent.type && (a.current = !0));
              const r = t.target,
                i = n.triggerRef.current?.contains(r);
              i && t.preventDefault(), "focusin" === t.detail.originalEvent.type && a.current && t.preventDefault()
            }
          })
        })),
        W = r.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: i,
            onCloseAutoFocus: c,
            ...u
          } = e, l = N(k, n), f = r.useRef(null), p = (0, a.s)(t, f);
          return (0, m.Oh)(), (0, y.jsxs)(y.Fragment, {
            children: [(0, y.jsx)(d.n, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: i,
              onUnmountAutoFocus: c,
              children: (0, y.jsx)(s.qW, {
                role: "dialog",
                id: l.contentId,
                "aria-describedby": l.descriptionId,
                "aria-labelledby": l.titleId,
                "data-state": G(l.open),
                ...u,
                ref: p,
                onDismiss: () => l.onOpenChange(!1)
              })
            }), (0, y.jsxs)(y.Fragment, {
              children: [(0, y.jsx)(H, {
                titleId: l.titleId
              }), (0, y.jsx)(V, {
                contentRef: f,
                descriptionId: l.descriptionId
              })]
            })]
          })
        })),
        B = "DialogTitle",
        U = r.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = N(B, n);
          return (0, y.jsx)(p.sG.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        }));
      U.displayName = B;
      var $ = "DialogDescription",
        K = r.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = N($, n);
          return (0, y.jsx)(p.sG.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        }));
      K.displayName = $;
      var q = "DialogClose",
        Y = r.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, a = N(q, n);
          return (0, y.jsx)(p.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.m)(e.onClick, (() => a.onOpenChange(!1)))
          })
        }));

      function G(e) {
        return e ? "open" : "closed"
      }
      Y.displayName = q;
      var X = "DialogTitleWarning",
        [Z, z] = (0, i.q)(X, {
          contentName: k,
          titleName: B,
          docsSlug: "dialog"
        }),
        H = ({
          titleId: e
        }) => {
          const t = z(X),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return r.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        V = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${z("DialogDescriptionWarning").contentName}}.`;
          return r.useEffect((() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        J = _,
        Q = R,
        ee = x,
        te = A,
        ne = I,
        re = U,
        oe = K,
        ae = Y
    },
    25656: (e, t, n) => {
      n.d(t, {
        n: () => l
      });
      var r = n(62229),
        o = n(95362),
        a = n(78004),
        i = n(76286),
        c = n(42295),
        u = "focusScope.autoFocusOnMount",
        s = "focusScope.autoFocusOnUnmount",
        d = {
          bubbles: !1,
          cancelable: !0
        },
        l = r.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: l = !1,
            onMountAutoFocus: m,
            onUnmountAutoFocus: g,
            ...y
          } = e, [b, E] = r.useState(null), w = (0, i.c)(m), C = (0, i.c)(g), N = r.useRef(null), _ = (0, o.s)(t, (e => E(e))), D = r.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          r.useEffect((() => {
            if (l) {
              let e = function(e) {
                  if (D.paused || !b) return;
                  const t = e.target;
                  b.contains(t) ? N.current = t : v(N.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (D.paused || !b) return;
                  const t = e.relatedTarget;
                  null !== t && (b.contains(t) || v(N.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && v(b)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return b && r.observe(b, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }), [l, b, D.paused]), r.useEffect((() => {
            if (b) {
              h.add(D);
              const e = document.activeElement;
              if (!b.contains(e)) {
                const t = new CustomEvent(u, d);
                b.addEventListener(u, w), b.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (v(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(f(b).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && v(b))
              }
              return () => {
                b.removeEventListener(u, w), setTimeout((() => {
                  const t = new CustomEvent(s, d);
                  b.addEventListener(s, C), b.dispatchEvent(t), t.defaultPrevented || v(e ?? document.body, {
                    select: !0
                  }), b.removeEventListener(s, C), h.remove(D)
                }), 0)
              }
            }
          }), [b, w, C, D]);
          const R = r.useCallback((e => {
            if (!n && !l) return;
            if (D.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              r = document.activeElement;
            if (t && r) {
              const t = e.currentTarget,
                [o, a] = function(e) {
                  const t = f(e);
                  return [p(t, e), p(t.reverse(), e)]
                }(t);
              o && a ? e.shiftKey || r !== a ? e.shiftKey && r === o && (e.preventDefault(), n && v(a, {
                select: !0
              })) : (e.preventDefault(), n && v(o, {
                select: !0
              })) : r === t && e.preventDefault()
            }
          }), [n, l, D.paused]);
          return (0, c.jsx)(a.sG.div, {
            tabIndex: -1,
            ...y,
            ref: _,
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
      var h = function() {
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
    53054: (e, t, n) => {
      var r;
      n.d(t, {
        i: () => c
      });
      var o = n(62229),
        a = n(63155),
        i = (r || (r = n.t(o, 2)))[" useInsertionEffect ".trim().toString()] || a.N;

      function c({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [a, c, u] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = o.useState(e), a = o.useRef(n), c = o.useRef(t);
          return i((() => {
            c.current = t
          }), [t]), o.useEffect((() => {
            a.current !== n && (c.current?.(n), a.current = n)
          }), [n, a]), [n, r, c]
        }({
          defaultProp: t,
          onChange: n
        }), s = void 0 !== e, d = s ? e : a; {
          const t = o.useRef(void 0 !== e);
          o.useEffect((() => {
            const e = t.current;
            if (e !== s) {
              const t = e ? "controlled" : "uncontrolled",
                n = s ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = s
          }), [s, r])
        }
        const l = o.useCallback((t => {
          if (s) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && u.current?.(n)
          } else c(t)
        }), [s, e, c, u]);
        return [d, l]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    53146: (e, t, n) => {
      n.d(t, {
        C: () => i
      });
      var r = n(62229),
        o = n(95362),
        a = n(63155),
        i = e => {
          const {
            present: t,
            children: n
          } = e, i = function(e) {
            const [t, n] = r.useState(), o = r.useRef(null), i = r.useRef(e), u = r.useRef("none"), s = e ? "mounted" : "unmounted", [d, l] = function(e, t) {
              return r.useReducer(((e, n) => t[e][n] ?? e), e)
            }(s, {
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
            return r.useEffect((() => {
              const e = c(o.current);
              u.current = "mounted" === d ? e : "none"
            }), [d]), (0, a.N)((() => {
              const t = o.current,
                n = i.current;
              if (n !== e) {
                const r = u.current,
                  o = c(t);
                l(e ? "MOUNT" : "none" === o || "none" === t?.display ? "UNMOUNT" : n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
              }
            }), [e, l]), (0, a.N)((() => {
              if (t) {
                let e;
                const n = t.ownerDocument.defaultView ?? window,
                  r = r => {
                    const a = c(o.current).includes(r.animationName);
                    if (r.target === t && a && (l("ANIMATION_END"), !i.current)) {
                      const r = t.style.animationFillMode;
                      t.style.animationFillMode = "forwards", e = n.setTimeout((() => {
                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                      }))
                    }
                  },
                  a = e => {
                    e.target === t && (u.current = c(o.current))
                  };
                return t.addEventListener("animationstart", a), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
                  n.clearTimeout(e), t.removeEventListener("animationstart", a), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r)
                }
              }
              l("ANIMATION_END")
            }), [t, l]), {
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: r.useCallback((e => {
                o.current = e ? getComputedStyle(e) : null, n(e)
              }), [])
            }
          }(t), u = "function" == typeof n ? n({
            present: i.isPresent
          }) : r.Children.only(n), s = (0, o.s)(i.ref, function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(u));
          return "function" == typeof n || i.isPresent ? r.cloneElement(u, {
            ref: s
          }) : null
        };

      function c(e) {
        return e?.animationName || "none"
      }
      i.displayName = "Presence"
    },
    63155: (e, t, n) => {
      n.d(t, {
        N: () => o
      });
      var r = n(62229),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    76286: (e, t, n) => {
      n.d(t, {
        c: () => o
      });
      var r = n(62229);

      function o(e) {
        const t = r.useRef(e);
        return r.useEffect((() => {
          t.current = e
        })), r.useMemo((() => (...e) => t.current?.(...e)), [])
      }
    },
    80061: (e, t, n) => {
      n.d(t, {
        Z: () => u
      });
      var r = n(62229),
        o = n(44853),
        a = n(78004),
        i = n(63155),
        c = n(42295),
        u = r.forwardRef(((e, t) => {
          const {
            container: n,
            ...u
          } = e, [s, d] = r.useState(!1);
          (0, i.N)((() => d(!0)), []);
          const l = n || s && globalThis?.document?.body;
          return l ? o.createPortal((0, c.jsx)(a.sG.div, {
            ...u,
            ref: t
          }), l) : null
        }));
      u.displayName = "Portal"
    },
    85426: (e, t, n) => {
      n.d(t, {
        A: () => i,
        q: () => a
      });
      var r = n(62229),
        o = n(42295);

      function a(e, t) {
        const n = r.createContext(t),
          a = e => {
            const {
              children: t,
              ...a
            } = e, i = r.useMemo((() => a), Object.values(a));
            return (0, o.jsx)(n.Provider, {
              value: i,
              children: t
            })
          };
        return a.displayName = e + "Provider", [a, function(o) {
          const a = r.useContext(n);
          if (a) return a;
          if (void 0 !== t) return t;
          throw new Error(`\`${o}\` must be used within \`${e}\``)
        }]
      }

      function i(e, t = []) {
        let n = [];
        const a = () => {
          const t = n.map((e => r.createContext(e)));
          return function(n) {
            const o = n?.[e] || t;
            return r.useMemo((() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: o
              }
            })), [n, o])
          }
        };
        return a.scopeName = e, [function(t, a) {
          const i = r.createContext(a),
            c = n.length;
          n = [...n, a];
          const u = t => {
            const {
              scope: n,
              children: a,
              ...u
            } = t, s = n?.[e]?.[c] || i, d = r.useMemo((() => u), Object.values(u));
            return (0, o.jsx)(s.Provider, {
              value: d,
              children: a
            })
          };
          return u.displayName = t + "Provider", [u, function(n, o) {
            const u = o?.[e]?.[c] || i,
              s = r.useContext(u);
            if (s) return s;
            if (void 0 !== a) return a;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, c(a, ...t)]
      }

      function c(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const o = n.reduce(((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            })), {});
            return r.useMemo((() => ({
              [`__scope${t.scopeName}`]: o
            })), [o])
          }
        };
        return n.scopeName = t.scopeName, n
      }
    },
    86126: (e, t, n) => {
      var r;
      n.d(t, {
        B: () => u
      });
      var o = n(62229),
        a = n(63155),
        i = (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        c = 0;

      function u(e) {
        const [t, n] = o.useState(i());
        return (0, a.N)((() => {
          e || n((e => e ?? String(c++)))
        }), [e]), e || (t ? `radix-${t}` : "")
      }
    },
    94118: (e, t, n) => {
      function r(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      n.d(t, {
        m: () => r
      })
    },
    94926: (e, t, n) => {
      n.d(t, {
        Eq: () => u
      });
      var r = new WeakMap,
        o = new WeakMap,
        a = {},
        i = 0,
        c = function(e) {
          return e && (e.host || c(e.parentNode))
        },
        u = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var u = Array.from(Array.isArray(e) ? e : [e]),
            s = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return s ? (u.push.apply(u, Array.from(s.querySelectorAll("[aria-live]"))), function(e, t, n, u) {
            var s = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = c(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            a[n] || (a[n] = new WeakMap);
            var d = a[n],
              l = [],
              f = new Set,
              p = new Set(s),
              m = function(e) {
                e && !f.has(e) && (f.add(e), m(e.parentNode))
              };
            s.forEach(m);
            var v = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (f.has(e)) v(e);
                else try {
                  var t = e.getAttribute(u),
                    a = null !== t && "false" !== t,
                    i = (r.get(e) || 0) + 1,
                    c = (d.get(e) || 0) + 1;
                  r.set(e, i), d.set(e, c), l.push(e), 1 === i && a && o.set(e, !0), 1 === c && e.setAttribute(n, "true"), a || e.setAttribute(u, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              }))
            };
            return v(t), f.clear(), i++,
              function() {
                l.forEach((function(e) {
                  var t = r.get(e) - 1,
                    a = d.get(e) - 1;
                  r.set(e, t), d.set(e, a), t || (o.has(e) || e.removeAttribute(u), o.delete(e)), a || e.removeAttribute(n)
                })), --i || (r = new WeakMap, r = new WeakMap, o = new WeakMap, a = {})
              }
          }(u, s, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    97359: (e, t, n) => {
      n.d(t, {
        A: () => U
      });
      var r = n(78322),
        o = n(62229),
        a = "right-scroll-bar-position",
        i = "width-before-scroll-bar";

      function c(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var u = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        s = new WeakMap;

      function d(e) {
        return e
      }
      var l = function(e) {
          void 0 === e && (e = {});
          var t = function(e, t) {
            void 0 === t && (t = d);
            var n = [],
              r = !1;
            return {
              read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
              },
              useMedium: function(e) {
                var o = t(e, r);
                return n.push(o),
                  function() {
                    n = n.filter((function(e) {
                      return e !== o
                    }))
                  }
              },
              assignSyncMedium: function(e) {
                for (r = !0; n.length;) {
                  var t = n;
                  n = [], t.forEach(e)
                }
                n = {
                  push: function(t) {
                    return e(t)
                  },
                  filter: function() {
                    return n
                  }
                }
              },
              assignMedium: function(e) {
                r = !0;
                var t = [];
                if (n.length) {
                  var o = n;
                  n = [], o.forEach(e), t = n
                }
                var a = function() {
                    var n = t;
                    t = [], n.forEach(e)
                  },
                  i = function() {
                    return Promise.resolve().then(a)
                  };
                i(), n = {
                  push: function(e) {
                    t.push(e), i()
                  },
                  filter: function(e) {
                    return t = t.filter(e), n
                  }
                }
              }
            }
          }(null);
          return t.options = (0, r.__assign)({
            async: !0,
            ssr: !1
          }, e), t
        }(),
        f = function() {},
        p = o.forwardRef((function(e, t) {
          var n = o.useRef(null),
            a = o.useState({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: f
            }),
            i = a[0],
            d = a[1],
            p = e.forwardProps,
            m = e.children,
            v = e.className,
            h = e.removeScrollBar,
            g = e.enabled,
            y = e.shards,
            b = e.sideCar,
            E = e.noIsolation,
            w = e.inert,
            C = e.allowPinchZoom,
            N = e.as,
            _ = void 0 === N ? "div" : N,
            D = e.gapMode,
            R = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            S = b,
            M = function(e, t) {
              var n, r, a, i = (n = t || null, r = function(t) {
                return e.forEach((function(e) {
                  return c(e, t)
                }))
              }, (a = (0, o.useState)((function() {
                return {
                  value: n,
                  callback: r,
                  facade: {
                    get current() {
                      return a.value
                    },
                    set current(e) {
                      var t = a.value;
                      t !== e && (a.value = e, a.callback(e, t))
                    }
                  }
                }
              }))[0]).callback = r, a.facade);
              return u((function() {
                var t = s.get(i);
                if (t) {
                  var n = new Set(t),
                    r = new Set(e),
                    o = i.current;
                  n.forEach((function(e) {
                    r.has(e) || c(e, null)
                  })), r.forEach((function(e) {
                    n.has(e) || c(e, o)
                  }))
                }
                s.set(i, e)
              }), [e]), i
            }([n, t]),
            T = (0, r.__assign)((0, r.__assign)({}, R), i);
          return o.createElement(o.Fragment, null, g && o.createElement(S, {
            sideCar: l,
            removeScrollBar: h,
            shards: y,
            noIsolation: E,
            inert: w,
            setCallbacks: d,
            allowPinchZoom: !!C,
            lockRef: n,
            gapMode: D
          }), p ? o.cloneElement(o.Children.only(m), (0, r.__assign)((0, r.__assign)({}, T), {
            ref: M
          })) : o.createElement(_, (0, r.__assign)({}, T, {
            className: v,
            ref: M
          }), m))
        }));
      p.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, p.classNames = {
        fullWidth: i,
        zeroRight: a
      };
      var m = function(e) {
        var t = e.sideCar,
          n = (0, r.__rest)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = t.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.__assign)({}, n))
      };
      m.isSideCarExport = !0;
      var v = function() {
          var e = 0,
            t = null;
          return {
            add: function(r) {
              var o, a;
              0 == e && (t = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = n.nc;
                return t && e.setAttribute("nonce", t), e
              }()) && (a = r, (o = t).styleSheet ? o.styleSheet.cssText = a : o.appendChild(document.createTextNode(a)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(t)), e++
            },
            remove: function() {
              !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }
        },
        h = function() {
          var e, t = (e = v(), function(t, n) {
            o.useEffect((function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }), [t && n])
          });
          return function(e) {
            var n = e.styles,
              r = e.dynamic;
            return t(n, r), null
          }
        },
        g = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        y = function(e) {
          return parseInt(e || "", 10) || 0
        },
        b = h(),
        E = "data-scroll-locked",
        w = function(e, t, n, r) {
          var o = e.left,
            c = e.top,
            u = e.right,
            s = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(s, "px ").concat(r, ";\n  }\n  body[").concat(E, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(c, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(i, " {\n    margin-right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(i, " .").concat(i, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(E, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
        },
        C = function() {
          var e = parseInt(document.body.getAttribute(E) || "0", 10);
          return isFinite(e) ? e : 0
        },
        N = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect((function() {
            return document.body.setAttribute(E, (C() + 1).toString()),
              function() {
                var e = C() - 1;
                e <= 0 ? document.body.removeAttribute(E) : document.body.setAttribute(E, e.toString())
              }
          }), []);
          var i = o.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return g;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [y(n), y(r), y(o)]
                }(e),
                n = document.documentElement.clientWidth,
                r = window.innerWidth;
              return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, r - n + t[2] - t[0])
              }
            }(a)
          }), [a]);
          return o.createElement(b, {
            styles: w(i, !t, a, n ? "" : "!important")
          })
        },
        _ = !1;
      if ("undefined" != typeof window) try {
        var D = Object.defineProperty({}, "passive", {
          get: function() {
            return _ = !0, !0
          }
        });
        window.addEventListener("test", D, D), window.removeEventListener("test", D, D)
      } catch (e) {
        _ = !1
      }
      var R = !!_ && {
          passive: !1
        },
        S = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        M = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), T(e, r)) {
              var o = x(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        T = function(e, t) {
          return "v" === e ? function(e) {
            return S(e, "overflowY")
          }(t) : function(e) {
            return S(e, "overflowX")
          }(t)
        },
        x = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        O = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        A = function(e) {
          return [e.deltaX, e.deltaY]
        },
        L = function(e) {
          return e && "current" in e ? e.current : e
        },
        P = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        k = 0,
        I = [];

      function F(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const j = (W = function(e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          a = o.useRef(),
          i = o.useState(k++)[0],
          c = o.useState(h)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(i));
            var t = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(L), !0).filter(Boolean);
            return t.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(i))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(i)), t.forEach((function(e) {
                  return e.classList.remove("allow-interactivity-".concat(i))
                }))
              }
          }
        }), [e.inert, e.lockRef.current, e.shards]);
        var s = o.useCallback((function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
            var r, o = O(e),
              i = n.current,
              c = "deltaX" in e ? e.deltaX : i[0] - o[0],
              s = "deltaY" in e ? e.deltaY : i[1] - o[1],
              d = e.target,
              l = Math.abs(c) > Math.abs(s) ? "h" : "v";
            if ("touches" in e && "h" === l && "range" === d.type) return !1;
            var f = M(l, d);
            if (!f) return !0;
            if (f ? r = l : (r = "v" === l ? "h" : "v", f = M(l, d)), !f) return !1;
            if (!a.current && "changedTouches" in e && (c || s) && (a.current = r), !r) return !0;
            var p = a.current || r;
            return function(e, t, n, r) {
              var o = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                a = o * r,
                i = n.target,
                c = t.contains(i),
                u = !1,
                s = a > 0,
                d = 0,
                l = 0;
              do {
                var f = x(e, i),
                  p = f[0],
                  m = f[1] - f[2] - o * p;
                (p || m) && T(e, i) && (d += m, l += p), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!c && i !== document.body || c && (t.contains(i) || t === i));
              return (s && (Math.abs(d) < 1 || !1) || !s && (Math.abs(l) < 1 || !1)) && (u = !0), u
            }(p, t, e, "h" === p ? c : s)
          }), []),
          d = o.useCallback((function(e) {
            var n = e;
            if (I.length && I[I.length - 1] === c) {
              var r = "deltaY" in n ? A(n) : O(n),
                o = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(L).filter(Boolean).filter((function(e) {
                  return e.contains(n.target)
                }));
                (a.length > 0 ? s(n, a[0]) : !u.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          l = o.useCallback((function(e, n, r, o) {
            var a = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: F(r)
            };
            t.current.push(a), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          f = o.useCallback((function(e) {
            n.current = O(e), a.current = void 0
          }), []),
          p = o.useCallback((function(t) {
            l(t.type, A(t), t.target, s(t, e.lockRef.current))
          }), []),
          m = o.useCallback((function(t) {
            l(t.type, O(t), t.target, s(t, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return I.push(c), e.setCallbacks({
              onScrollCapture: p,
              onWheelCapture: p,
              onTouchMoveCapture: m
            }), document.addEventListener("wheel", d, R), document.addEventListener("touchmove", d, R), document.addEventListener("touchstart", f, R),
            function() {
              I = I.filter((function(e) {
                return e !== c
              })), document.removeEventListener("wheel", d, R), document.removeEventListener("touchmove", d, R), document.removeEventListener("touchstart", f, R)
            }
        }), []);
        var v = e.removeScrollBar,
          g = e.inert;
        return o.createElement(o.Fragment, null, g ? o.createElement(c, {
          styles: P(i)
        }) : null, v ? o.createElement(N, {
          gapMode: e.gapMode
        }) : null)
      }, l.useMedium(W), m);
      var W, B = o.forwardRef((function(e, t) {
        return o.createElement(p, (0, r.__assign)({}, e, {
          ref: t,
          sideCar: j
        }))
      }));
      B.classNames = p.classNames;
      const U = B
    }
  }
]);