! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ca5ef7ef-28ef-4c19-b696-725dae610b79", e._sentryDebugIdIdentifier = "sentry-dbid-ca5ef7ef-28ef-4c19-b696-725dae610b79")
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
  [9408], {
    20627: (e, t, n) => {
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
    83957: (e, t, n) => {
      n.d(t, {
        s: () => i,
        t: () => s
      });
      var r = n(62229);

      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function s(...e) {
        return t => {
          let n = !1;
          const r = e.map((e => {
            const r = o(e, t);
            return n || "function" != typeof r || (n = !0), r
          }));
          if (n) return () => {
            for (let t = 0; t < r.length; t++) {
              const n = r[t];
              "function" == typeof n ? n() : o(e[t], null)
            }
          }
        }
      }

      function i(...e) {
        return r.useCallback(s(...e), e)
      }
    },
    85983: (e, t, n) => {
      n.d(t, {
        A: () => i,
        q: () => s
      });
      var r = n(62229),
        o = n(91029);

      function s(e, t) {
        const n = r.createContext(t),
          s = e => {
            const {
              children: t,
              ...s
            } = e, i = r.useMemo((() => s), Object.values(s));
            return (0, o.jsx)(n.Provider, {
              value: i,
              children: t
            })
          };
        return s.displayName = e + "Provider", [s, function(o) {
          const s = r.useContext(n);
          if (s) return s;
          if (void 0 !== t) return t;
          throw new Error(`\`${o}\` must be used within \`${e}\``)
        }]
      }

      function i(e, t = []) {
        let n = [];
        const s = () => {
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
        return s.scopeName = e, [function(t, s) {
          const i = r.createContext(s),
            a = n.length;
          n = [...n, s];
          const u = t => {
            const {
              scope: n,
              children: s,
              ...u
            } = t, c = n?.[e]?.[a] || i, d = r.useMemo((() => u), Object.values(u));
            return (0, o.jsx)(c.Provider, {
              value: d,
              children: s
            })
          };
          return u.displayName = t + "Provider", [u, function(n, o) {
            const u = o?.[e]?.[a] || i,
              c = r.useContext(u);
            if (c) return c;
            if (void 0 !== s) return s;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, a(s, ...t)]
      }

      function a(...e) {
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
    52420: (e, t, n) => {
      n.d(t, {
        qW: () => p
      });
      var r, o = n(62229),
        s = n(20627),
        i = n(31873),
        a = n(83957),
        u = n(59693),
        c = n(99935),
        d = n(91029),
        l = "dismissableLayer.update",
        f = o.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        p = o.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: p,
            onPointerDownOutside: h,
            onFocusOutside: g,
            onInteractOutside: y,
            onDismiss: b,
            ...w
          } = e, E = o.useContext(f), [x, P] = o.useState(null), C = x?.ownerDocument ?? globalThis?.document, [, O] = o.useState({}), N = (0, a.s)(t, (e => P(e))), _ = Array.from(E.layers), [A] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1), R = _.indexOf(A), D = x ? _.indexOf(x) : -1, S = E.layersWithOutsidePointerEventsDisabled.size > 0, j = D >= R, F = function(e, t = globalThis?.document) {
            const n = (0, u.c)(e),
              r = o.useRef(!1),
              s = o.useRef((() => {}));
            return o.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      v("dismissableLayer.pointerDownOutside", n, o, {
                        discrete: !0
                      })
                    };
                    const o = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", s.current), s.current = r, t.addEventListener("click", s.current, {
                      once: !0
                    })) : r()
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
              n = [...E.branches].some((e => e.contains(t)));
            j && !n && (h?.(e), y?.(e), e.defaultPrevented || b?.())
          }), C), T = function(e, t = globalThis?.document) {
            const n = (0, u.c)(e),
              r = o.useRef(!1);
            return o.useEffect((() => {
              const e = e => {
                e.target && !r.current && v("dismissableLayer.focusOutside", n, {
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
            [...E.branches].some((e => e.contains(t))) || (g?.(e), y?.(e), e.defaultPrevented || b?.())
          }), C);
          return (0, c.U)((e => {
            D === E.layers.size - 1 && (p?.(e), !e.defaultPrevented && b && (e.preventDefault(), b()))
          }), C), o.useEffect((() => {
            if (x) return n && (0 === E.layersWithOutsidePointerEventsDisabled.size && (r = C.body.style.pointerEvents, C.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(x)), E.layers.add(x), m(), () => {
              n && 1 === E.layersWithOutsidePointerEventsDisabled.size && (C.body.style.pointerEvents = r)
            }
          }), [x, C, n, E]), o.useEffect((() => () => {
            x && (E.layers.delete(x), E.layersWithOutsidePointerEventsDisabled.delete(x), m())
          }), [x, E]), o.useEffect((() => {
            const e = () => O({});
            return document.addEventListener(l, e), () => document.removeEventListener(l, e)
          }), []), (0, d.jsx)(i.sG.div, {
            ...w,
            ref: N,
            style: {
              pointerEvents: S ? j ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, s.m)(e.onFocusCapture, T.onFocusCapture),
            onBlurCapture: (0, s.m)(e.onBlurCapture, T.onBlurCapture),
            onPointerDownCapture: (0, s.m)(e.onPointerDownCapture, F.onPointerDownCapture)
          })
        }));

      function m() {
        const e = new CustomEvent(l);
        document.dispatchEvent(e)
      }

      function v(e, t, n, {
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
      p.displayName = "DismissableLayer", o.forwardRef(((e, t) => {
        const n = o.useContext(f),
          r = o.useRef(null),
          s = (0, a.s)(t, r);
        return o.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, d.jsx)(i.sG.div, {
          ...e,
          ref: s
        })
      })).displayName = "DismissableLayerBranch"
    },
    11365: (e, t, n) => {
      n.d(t, {
        Oh: () => s
      });
      var r = n(62229),
        o = 0;

      function s() {
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
    69408: (e, t, n) => {
      n.r(t), n.d(t, {
        Anchor: () => Re,
        Arrow: () => Te,
        Close: () => Fe,
        Content: () => je,
        Popover: () => de,
        PopoverAnchor: () => fe,
        PopoverArrow: () => Ne,
        PopoverClose: () => Oe,
        PopoverContent: () => we,
        PopoverPortal: () => ye,
        PopoverTrigger: () => me,
        Portal: () => Se,
        Root: () => Ae,
        Trigger: () => De,
        createPopoverScope: () => ie
      });
      var r = n(62229),
        o = n(20627),
        s = n(83957),
        i = n(85983),
        a = n(52420),
        u = n(11365),
        c = n(31873),
        d = n(59693),
        l = n(91029),
        f = "focusScope.autoFocusOnMount",
        p = "focusScope.autoFocusOnUnmount",
        m = {
          bubbles: !1,
          cancelable: !0
        },
        v = r.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: o = !1,
            onMountAutoFocus: i,
            onUnmountAutoFocus: a,
            ...u
          } = e, [v, y] = r.useState(null), E = (0, d.c)(i), x = (0, d.c)(a), P = r.useRef(null), C = (0, s.s)(t, (e => y(e))), O = r.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          r.useEffect((() => {
            if (o) {
              let e = function(e) {
                  if (O.paused || !v) return;
                  const t = e.target;
                  v.contains(t) ? P.current = t : b(P.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (O.paused || !v) return;
                  const t = e.relatedTarget;
                  null !== t && (v.contains(t) || b(P.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && b(v)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return v && r.observe(v, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }), [o, v, O.paused]), r.useEffect((() => {
            if (v) {
              w.add(O);
              const e = document.activeElement;
              if (!v.contains(e)) {
                const t = new CustomEvent(f, m);
                v.addEventListener(f, E), v.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (b(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(h(v).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && b(v))
              }
              return () => {
                v.removeEventListener(f, E), setTimeout((() => {
                  const t = new CustomEvent(p, m);
                  v.addEventListener(p, x), v.dispatchEvent(t), t.defaultPrevented || b(e ?? document.body, {
                    select: !0
                  }), v.removeEventListener(p, x), w.remove(O)
                }), 0)
              }
            }
          }), [v, E, x, O]);
          const N = r.useCallback((e => {
            if (!n && !o) return;
            if (O.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              r = document.activeElement;
            if (t && r) {
              const t = e.currentTarget,
                [o, s] = function(e) {
                  const t = h(e);
                  return [g(t, e), g(t.reverse(), e)]
                }(t);
              o && s ? e.shiftKey || r !== s ? e.shiftKey && r === o && (e.preventDefault(), n && b(s, {
                select: !0
              })) : (e.preventDefault(), n && b(o, {
                select: !0
              })) : r === t && e.preventDefault()
            }
          }), [n, o, O.paused]);
          return (0, l.jsx)(c.sG.div, {
            tabIndex: -1,
            ...u,
            ref: C,
            onKeyDown: N
          })
        }));

      function h(e) {
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

      function g(e, t) {
        for (const n of e)
          if (!y(n, {
              upTo: t
            })) return n
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

      function b(e, {
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
      v.displayName = "FocusScope";
      var w = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = E(e, t), e.unshift(t)
          },
          remove(t) {
            e = E(e, t), e[0]?.resume()
          }
        }
      }();

      function E(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var x = n(74406),
        P = n(87101),
        C = n(50123),
        O = n(15191),
        N = r.forwardRef(((e, t) => {
          const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...s
          } = e;
          return (0, l.jsx)(c.sG.svg, {
            ...s,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, l.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        }));
      N.displayName = "Arrow";
      var _ = N,
        A = n(66698),
        R = n(16991),
        D = "Popper",
        [S, j] = (0, i.A)(D),
        [F, T] = S(D),
        L = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [o, s] = r.useState(null);
          return (0, l.jsx)(F, {
            scope: t,
            anchor: o,
            onAnchorChange: s,
            children: n
          })
        };
      L.displayName = D;
      var M = "PopperAnchor",
        I = r.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: o,
            ...i
          } = e, a = T(M, n), u = r.useRef(null), d = (0, s.s)(t, u);
          return r.useEffect((() => {
            a.onAnchorChange(o?.current || u.current)
          })), o ? null : (0, l.jsx)(c.sG.div, {
            ...i,
            ref: d
          })
        }));
      I.displayName = M;
      var k = "PopperContent",
        [W, U] = S(k),
        $ = r.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            side: o = "bottom",
            sideOffset: i = 0,
            align: a = "center",
            alignOffset: u = 0,
            arrowPadding: f = 0,
            avoidCollisions: p = !0,
            collisionBoundary: m = [],
            collisionPadding: v = 0,
            sticky: h = "partial",
            hideWhenDetached: g = !1,
            updatePositionStrategy: y = "optimized",
            onPlaced: b,
            ...w
          } = e, E = T(k, n), [x, N] = r.useState(null), _ = (0, s.s)(t, (e => N(e))), [D, S] = r.useState(null), j = (0, R.X)(D), F = j?.width ?? 0, L = j?.height ?? 0, M = o + ("center" !== a ? "-" + a : ""), I = "number" == typeof v ? v : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...v
          }, U = Array.isArray(m) ? m : [m], $ = U.length > 0, K = {
            padding: I,
            boundary: U.filter(H),
            altBoundary: $
          }, {
            refs: B,
            floatingStyles: G,
            placement: q,
            isPositioned: X,
            middlewareData: V
          } = (0, P.we)({
            strategy: "fixed",
            placement: M,
            whileElementsMounted: (...e) => (0, C.ll)(...e, {
              animationFrame: "always" === y
            }),
            elements: {
              reference: E.anchor
            },
            middleware: [(0, O.cY)({
              mainAxis: i + L,
              alignmentAxis: u
            }), p && (0, O.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === h ? (0, O.ER)() : void 0,
              ...K
            }), p && (0, O.UU)({
              ...K
            }), (0, O.Ej)({
              ...K,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: n,
                availableHeight: r
              }) => {
                const {
                  width: o,
                  height: s
                } = t.reference, i = e.floating.style;
                i.setProperty("--radix-popper-available-width", `${n}px`), i.setProperty("--radix-popper-available-height", `${r}px`), i.setProperty("--radix-popper-anchor-width", `${o}px`), i.setProperty("--radix-popper-anchor-height", `${s}px`)
              }
            }), D && (0, P.UE)({
              element: D,
              padding: f
            }), z({
              arrowWidth: F,
              arrowHeight: L
            }), g && (0, O.jD)({
              strategy: "referenceHidden",
              ...K
            })]
          }), [Z, J] = Y(q), Q = (0, d.c)(b);
          (0, A.N)((() => {
            X && Q?.()
          }), [X, Q]);
          const ee = V.arrow?.x,
            te = V.arrow?.y,
            ne = 0 !== V.arrow?.centerOffset,
            [re, oe] = r.useState();
          return (0, A.N)((() => {
            x && oe(window.getComputedStyle(x).zIndex)
          }), [x]), (0, l.jsx)("div", {
            ref: B.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...G,
              transform: X ? G.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: re,
              "--radix-popper-transform-origin": [V.transformOrigin?.x, V.transformOrigin?.y].join(" "),
              ...V.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, l.jsx)(W, {
              scope: n,
              placedSide: Z,
              onArrowChange: S,
              arrowX: ee,
              arrowY: te,
              shouldHideArrow: ne,
              children: (0, l.jsx)(c.sG.div, {
                "data-side": Z,
                "data-align": J,
                ...w,
                ref: _,
                style: {
                  ...w.style,
                  animation: X ? void 0 : "none"
                }
              })
            })
          })
        }));
      $.displayName = k;
      var K = "PopperArrow",
        B = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        G = r.forwardRef((function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = U(K, n), s = B[o.placedSide];
          return (0, l.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [s]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, l.jsx)(_, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        }));

      function H(e) {
        return null !== e
      }
      G.displayName = K;
      var z = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, s = 0 !== o.arrow?.centerOffset, i = s ? 0 : e.arrowWidth, a = s ? 0 : e.arrowHeight, [u, c] = Y(n), d = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [c], l = (o.arrow?.x ?? 0) + i / 2, f = (o.arrow?.y ?? 0) + a / 2;
          let p = "",
            m = "";
          return "bottom" === u ? (p = s ? d : `${l}px`, m = -a + "px") : "top" === u ? (p = s ? d : `${l}px`, m = `${r.floating.height+a}px`) : "right" === u ? (p = -a + "px", m = s ? d : `${f}px`) : "left" === u && (p = `${r.floating.width+a}px`, m = s ? d : `${f}px`), {
            data: {
              x: p,
              y: m
            }
          }
        }
      });

      function Y(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var q = L,
        X = I,
        V = $,
        Z = G,
        J = n(31393),
        Q = n(27085),
        ee = n(58857),
        te = n(91377),
        ne = n(58924),
        re = n(38291),
        oe = "Popover",
        [se, ie] = (0, i.A)(oe, [j]),
        ae = j(),
        [ue, ce] = se(oe),
        de = e => {
          const {
            __scopePopover: t,
            children: n,
            open: o,
            defaultOpen: s,
            onOpenChange: i,
            modal: a = !1
          } = e, u = ae(t), c = r.useRef(null), [d, f] = r.useState(!1), [p = !1, m] = (0, te.i)({
            prop: o,
            defaultProp: s,
            onChange: i
          });
          return (0, l.jsx)(q, {
            ...u,
            children: (0, l.jsx)(ue, {
              scope: t,
              contentId: (0, x.useId)(),
              triggerRef: c,
              open: p,
              onOpenChange: m,
              onOpenToggle: r.useCallback((() => m((e => !e))), [m]),
              hasCustomAnchor: d,
              onCustomAnchorAdd: r.useCallback((() => f(!0)), []),
              onCustomAnchorRemove: r.useCallback((() => f(!1)), []),
              modal: a,
              children: n
            })
          })
        };
      de.displayName = oe;
      var le = "PopoverAnchor",
        fe = r.forwardRef(((e, t) => {
          const {
            __scopePopover: n,
            ...o
          } = e, s = ce(le, n), i = ae(n), {
            onCustomAnchorAdd: a,
            onCustomAnchorRemove: u
          } = s;
          return r.useEffect((() => (a(), () => u())), [a, u]), (0, l.jsx)(X, {
            ...i,
            ...o,
            ref: t
          })
        }));
      fe.displayName = le;
      var pe = "PopoverTrigger",
        me = r.forwardRef(((e, t) => {
          const {
            __scopePopover: n,
            ...r
          } = e, i = ce(pe, n), a = ae(n), u = (0, s.s)(t, i.triggerRef), d = (0, l.jsx)(c.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.contentId,
            "data-state": _e(i.open),
            ...r,
            ref: u,
            onClick: (0, o.m)(e.onClick, i.onOpenToggle)
          });
          return i.hasCustomAnchor ? d : (0, l.jsx)(X, {
            asChild: !0,
            ...a,
            children: d
          })
        }));
      me.displayName = pe;
      var ve = "PopoverPortal",
        [he, ge] = se(ve, {
          forceMount: void 0
        }),
        ye = e => {
          const {
            __scopePopover: t,
            forceMount: n,
            children: r,
            container: o
          } = e, s = ce(ve, t);
          return (0, l.jsx)(he, {
            scope: t,
            forceMount: n,
            children: (0, l.jsx)(Q.C, {
              present: n || s.open,
              children: (0, l.jsx)(J.Portal, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      ye.displayName = ve;
      var be = "PopoverContent",
        we = r.forwardRef(((e, t) => {
          const n = ge(be, e.__scopePopover),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            s = ce(be, e.__scopePopover);
          return (0, l.jsx)(Q.C, {
            present: r || s.open,
            children: s.modal ? (0, l.jsx)(Ee, {
              ...o,
              ref: t
            }) : (0, l.jsx)(xe, {
              ...o,
              ref: t
            })
          })
        }));
      we.displayName = be;
      var Ee = r.forwardRef(((e, t) => {
          const n = ce(be, e.__scopePopover),
            i = r.useRef(null),
            a = (0, s.s)(t, i),
            u = r.useRef(!1);
          return r.useEffect((() => {
            const e = i.current;
            if (e) return (0, ne.Eq)(e)
          }), []), (0, l.jsx)(re.RemoveScroll, {
            as: ee.Slot,
            allowPinchZoom: !0,
            children: (0, l.jsx)(Pe, {
              ...e,
              ref: a,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e => {
                e.preventDefault(), u.current || n.triggerRef.current?.focus()
              })),
              onPointerDownOutside: (0, o.m)(e.onPointerDownOutside, (e => {
                const t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey,
                  r = 2 === t.button || n;
                u.current = r
              }), {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, o.m)(e.onFocusOutside, (e => e.preventDefault()), {
                checkForDefaultPrevented: !1
              })
            })
          })
        })),
        xe = r.forwardRef(((e, t) => {
          const n = ce(be, e.__scopePopover),
            o = r.useRef(!1),
            s = r.useRef(!1);
          return (0, l.jsx)(Pe, {
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
        })),
        Pe = r.forwardRef(((e, t) => {
          const {
            __scopePopover: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: s,
            disableOutsidePointerEvents: i,
            onEscapeKeyDown: c,
            onPointerDownOutside: d,
            onFocusOutside: f,
            onInteractOutside: p,
            ...m
          } = e, h = ce(be, n), g = ae(n);
          return (0, u.Oh)(), (0, l.jsx)(v, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: (0, l.jsx)(a.qW, {
              asChild: !0,
              disableOutsidePointerEvents: i,
              onInteractOutside: p,
              onEscapeKeyDown: c,
              onPointerDownOutside: d,
              onFocusOutside: f,
              onDismiss: () => h.onOpenChange(!1),
              children: (0, l.jsx)(V, {
                "data-state": _e(h.open),
                role: "dialog",
                id: h.contentId,
                ...g,
                ...m,
                ref: t,
                style: {
                  ...m.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              })
            })
          })
        })),
        Ce = "PopoverClose",
        Oe = r.forwardRef(((e, t) => {
          const {
            __scopePopover: n,
            ...r
          } = e, s = ce(Ce, n);
          return (0, l.jsx)(c.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.m)(e.onClick, (() => s.onOpenChange(!1)))
          })
        }));
      Oe.displayName = Ce;
      var Ne = r.forwardRef(((e, t) => {
        const {
          __scopePopover: n,
          ...r
        } = e, o = ae(n);
        return (0, l.jsx)(Z, {
          ...o,
          ...r,
          ref: t
        })
      }));

      function _e(e) {
        return e ? "open" : "closed"
      }
      Ne.displayName = "PopoverArrow";
      var Ae = de,
        Re = fe,
        De = me,
        Se = ye,
        je = we,
        Fe = Oe,
        Te = Ne
    },
    27085: (e, t, n) => {
      n.d(t, {
        C: () => i
      });
      var r = n(62229),
        o = n(83957),
        s = n(66698),
        i = e => {
          const {
            present: t,
            children: n
          } = e, i = function(e) {
            const [t, n] = r.useState(), o = r.useRef({}), i = r.useRef(e), u = r.useRef("none"), c = e ? "mounted" : "unmounted", [d, l] = function(e, t) {
              return r.useReducer(((e, n) => t[e][n] ?? e), e)
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
            return r.useEffect((() => {
              const e = a(o.current);
              u.current = "mounted" === d ? e : "none"
            }), [d]), (0, s.N)((() => {
              const t = o.current,
                n = i.current;
              if (n !== e) {
                const r = u.current,
                  o = a(t);
                l(e ? "MOUNT" : "none" === o || "none" === t?.display ? "UNMOUNT" : n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
              }
            }), [e, l]), (0, s.N)((() => {
              if (t) {
                let e;
                const n = t.ownerDocument.defaultView ?? window,
                  r = r => {
                    const s = a(o.current).includes(r.animationName);
                    if (r.target === t && s && (l("ANIMATION_END"), !i.current)) {
                      const r = t.style.animationFillMode;
                      t.style.animationFillMode = "forwards", e = n.setTimeout((() => {
                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                      }))
                    }
                  },
                  s = e => {
                    e.target === t && (u.current = a(o.current))
                  };
                return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
                  n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r)
                }
              }
              l("ANIMATION_END")
            }), [t, l]), {
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: r.useCallback((e => {
                e && (o.current = getComputedStyle(e)), n(e)
              }), [])
            }
          }(t), u = "function" == typeof n ? n({
            present: i.isPresent
          }) : r.Children.only(n), c = (0, o.s)(i.ref, function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(u));
          return "function" == typeof n || i.isPresent ? r.cloneElement(u, {
            ref: c
          }) : null
        };

      function a(e) {
        return e?.animationName || "none"
      }
      i.displayName = "Presence"
    },
    31873: (e, t, n) => {
      n.d(t, {
        hO: () => u,
        sG: () => a
      });
      var r = n(62229),
        o = n(44853),
        s = n(16741),
        i = n(91029),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = r.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? s.Slot : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
              ...o,
              ref: n
            })
          }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {});

      function u(e, t) {
        e && o.flushSync((() => e.dispatchEvent(t)))
      }
    }
  }
]);