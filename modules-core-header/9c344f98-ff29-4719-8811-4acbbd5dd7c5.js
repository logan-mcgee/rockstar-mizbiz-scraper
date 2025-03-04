! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9c344f98-ff29-4719-8811-4acbbd5dd7c5", e._sentryDebugIdIdentifier = "sentry-dbid-9c344f98-ff29-4719-8811-4acbbd5dd7c5")
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
  [7654], {
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
    59693: (e, t, n) => {
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
    91377: (e, t, n) => {
      n.d(t, {
        i: () => s
      });
      var r = n(62229),
        o = n(59693);

      function s({
        prop: e,
        defaultProp: t,
        onChange: n = (() => {})
      }) {
        const [s, i] = function({
          defaultProp: e,
          onChange: t
        }) {
          const n = r.useState(e),
            [s] = n,
            i = r.useRef(s),
            a = (0, o.c)(t);
          return r.useEffect((() => {
            i.current !== s && (a(s), i.current = s)
          }), [s, i, a]), n
        }({
          defaultProp: t,
          onChange: n
        }), a = void 0 !== e, u = a ? e : s, c = (0, o.c)(n);
        return [u, r.useCallback((t => {
          if (a) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && c(n)
          } else i(t)
        }), [a, e, i, c])]
      }
    },
    99935: (e, t, n) => {
      n.d(t, {
        U: () => s
      });
      var r = n(62229),
        o = n(59693);

      function s(e, t = globalThis?.document) {
        const n = (0, o.c)(e);
        r.useEffect((() => {
          const e = e => {
            "Escape" === e.key && n(e)
          };
          return t.addEventListener("keydown", e, {
            capture: !0
          }), () => t.removeEventListener("keydown", e, {
            capture: !0
          })
        }), [n, t])
      }
    },
    66698: (e, t, n) => {
      n.d(t, {
        N: () => o
      });
      var r = n(62229),
        o = Boolean(globalThis?.document) ? r.useLayoutEffect : () => {}
    },
    57654: (e, t, n) => {
      n.r(t), n.d(t, {
        Close: () => _e,
        Content: () => De,
        Description: () => Ce,
        Dialog: () => q,
        DialogClose: () => le,
        DialogContent: () => ne,
        DialogDescription: () => ce,
        DialogOverlay: () => X,
        DialogPortal: () => J,
        DialogTitle: () => ae,
        DialogTrigger: () => H,
        Overlay: () => we,
        Portal: () => Ee,
        Root: () => be,
        Title: () => Ne,
        Trigger: () => he,
        WarningProvider: () => me,
        createDialogScope: () => K
      });
      var r, o = n(62229),
        s = n(20627),
        i = n(83957),
        a = n(85983),
        u = n(74406),
        c = n(91377),
        d = n(53934),
        l = n(59693),
        f = n(99935),
        p = n(91029),
        m = "dismissableLayer.update",
        v = o.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        g = o.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: u,
            onFocusOutside: c,
            onInteractOutside: g,
            onDismiss: h,
            ...E
          } = e, w = o.useContext(v), [D, N] = o.useState(null), C = D?.ownerDocument ?? globalThis?.document, [, _] = o.useState({}), O = (0, i.s)(t, (e => N(e))), R = Array.from(w.layers), [x] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1), P = R.indexOf(x), I = D ? R.indexOf(D) : -1, A = w.layersWithOutsidePointerEventsDisabled.size > 0, T = I >= P, M = function(e, t = globalThis?.document) {
            const n = (0, l.c)(e),
              r = o.useRef(!1),
              s = o.useRef((() => {}));
            return o.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      b("dismissableLayer.pointerDownOutside", n, o, {
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
              n = [...w.branches].some((e => e.contains(t)));
            T && !n && (u?.(e), g?.(e), e.defaultPrevented || h?.())
          }), C), L = function(e, t = globalThis?.document) {
            const n = (0, l.c)(e),
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
            [...w.branches].some((e => e.contains(t))) || (c?.(e), g?.(e), e.defaultPrevented || h?.())
          }), C);
          return (0, f.U)((e => {
            I === w.layers.size - 1 && (a?.(e), !e.defaultPrevented && h && (e.preventDefault(), h()))
          }), C), o.useEffect((() => {
            if (D) return n && (0 === w.layersWithOutsidePointerEventsDisabled.size && (r = C.body.style.pointerEvents, C.body.style.pointerEvents = "none"), w.layersWithOutsidePointerEventsDisabled.add(D)), w.layers.add(D), y(), () => {
              n && 1 === w.layersWithOutsidePointerEventsDisabled.size && (C.body.style.pointerEvents = r)
            }
          }), [D, C, n, w]), o.useEffect((() => () => {
            D && (w.layers.delete(D), w.layersWithOutsidePointerEventsDisabled.delete(D), y())
          }), [D, w]), o.useEffect((() => {
            const e = () => _({});
            return document.addEventListener(m, e), () => document.removeEventListener(m, e)
          }), []), (0, p.jsx)(d.sG.div, {
            ...E,
            ref: O,
            style: {
              pointerEvents: A ? T ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, s.m)(e.onFocusCapture, L.onFocusCapture),
            onBlurCapture: (0, s.m)(e.onBlurCapture, L.onBlurCapture),
            onPointerDownCapture: (0, s.m)(e.onPointerDownCapture, M.onPointerDownCapture)
          })
        }));

      function y() {
        const e = new CustomEvent(m);
        document.dispatchEvent(e)
      }

      function b(e, t, n, {
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
        }), r ? (0, d.hO)(o, s) : o.dispatchEvent(s)
      }
      g.displayName = "DismissableLayer", o.forwardRef(((e, t) => {
        const n = o.useContext(v),
          r = o.useRef(null),
          s = (0, i.s)(t, r);
        return o.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, p.jsx)(d.sG.div, {
          ...e,
          ref: s
        })
      })).displayName = "DismissableLayerBranch";
      var h = "focusScope.autoFocusOnMount",
        E = "focusScope.autoFocusOnUnmount",
        w = {
          bubbles: !1,
          cancelable: !0
        },
        D = o.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: s,
            onUnmountAutoFocus: a,
            ...u
          } = e, [c, f] = o.useState(null), m = (0, l.c)(s), v = (0, l.c)(a), g = o.useRef(null), y = (0, i.s)(t, (e => f(e))), b = o.useRef({
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
                  if (b.paused || !c) return;
                  const t = e.target;
                  c.contains(t) ? g.current = t : O(g.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (b.paused || !c) return;
                  const t = e.relatedTarget;
                  null !== t && (c.contains(t) || O(g.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && O(c)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return c && r.observe(c, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }), [r, c, b.paused]), o.useEffect((() => {
            if (c) {
              R.add(b);
              const e = document.activeElement;
              if (!c.contains(e)) {
                const t = new CustomEvent(h, w);
                c.addEventListener(h, m), c.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (O(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(N(c).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && O(c))
              }
              return () => {
                c.removeEventListener(h, m), setTimeout((() => {
                  const t = new CustomEvent(E, w);
                  c.addEventListener(E, v), c.dispatchEvent(t), t.defaultPrevented || O(e ?? document.body, {
                    select: !0
                  }), c.removeEventListener(E, v), R.remove(b)
                }), 0)
              }
            }
          }), [c, m, v, b]);
          const D = o.useCallback((e => {
            if (!n && !r) return;
            if (b.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, s] = function(e) {
                  const t = N(e);
                  return [C(t, e), C(t.reverse(), e)]
                }(t);
              r && s ? e.shiftKey || o !== s ? e.shiftKey && o === r && (e.preventDefault(), n && O(s, {
                select: !0
              })) : (e.preventDefault(), n && O(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, r, b.paused]);
          return (0, p.jsx)(d.sG.div, {
            tabIndex: -1,
            ...u,
            ref: y,
            onKeyDown: D
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

      function C(e, t) {
        for (const n of e)
          if (!_(n, {
              upTo: t
            })) return n
      }

      function _(e, {
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
      D.displayName = "FocusScope";
      var R = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = x(e, t), e.unshift(t)
          },
          remove(t) {
            e = x(e, t), e[0]?.resume()
          }
        }
      }();

      function x(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var P = n(34902),
        I = n(27085),
        A = n(11365),
        T = n(5959),
        M = new WeakMap,
        L = new WeakMap,
        F = {},
        S = 0,
        j = function(e) {
          return e && (e.host || j(e.parentNode))
        },
        k = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), function(e, t, n, r) {
            var o = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = j(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            F[n] || (F[n] = new WeakMap);
            var s = F[n],
              i = [],
              a = new Set,
              u = new Set(o),
              c = function(e) {
                e && !a.has(e) && (a.add(e), c(e.parentNode))
              };
            o.forEach(c);
            var d = function(e) {
              e && !u.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (a.has(e)) d(e);
                else try {
                  var t = e.getAttribute(r),
                    o = null !== t && "false" !== t,
                    u = (M.get(e) || 0) + 1,
                    c = (s.get(e) || 0) + 1;
                  M.set(e, u), s.set(e, c), i.push(e), 1 === u && o && L.set(e, !0), 1 === c && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              }))
            };
            return d(t), a.clear(), S++,
              function() {
                i.forEach((function(e) {
                  var t = M.get(e) - 1,
                    o = s.get(e) - 1;
                  M.set(e, t), s.set(e, o), t || (L.has(e) || e.removeAttribute(r), L.delete(e)), o || e.removeAttribute(n)
                })), --S || (M = new WeakMap, M = new WeakMap, L = new WeakMap, F = {})
              }
          }(r, o, n, "aria-hidden")) : function() {
            return null
          }
        },
        W = n(69101),
        U = "Dialog",
        [$, K] = (0, a.A)(U),
        [B, G] = $(U),
        q = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: s,
            onOpenChange: i,
            modal: a = !0
          } = e, d = o.useRef(null), l = o.useRef(null), [f = !1, m] = (0, c.i)({
            prop: r,
            defaultProp: s,
            onChange: i
          });
          return (0, p.jsx)(B, {
            scope: t,
            triggerRef: d,
            contentRef: l,
            contentId: (0, u.useId)(),
            titleId: (0, u.useId)(),
            descriptionId: (0, u.useId)(),
            open: f,
            onOpenChange: m,
            onOpenToggle: o.useCallback((() => m((e => !e))), [m]),
            modal: a,
            children: n
          })
        };
      q.displayName = U;
      var z = "DialogTrigger",
        H = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = G(z, n), a = (0, i.s)(t, o.triggerRef);
          return (0, p.jsx)(d.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": fe(o.open),
            ...r,
            ref: a,
            onClick: (0, s.m)(e.onClick, o.onOpenToggle)
          })
        }));
      H.displayName = z;
      var V = "DialogPortal",
        [Y, Z] = $(V, {
          forceMount: void 0
        }),
        J = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: s
          } = e, i = G(V, t);
          return (0, p.jsx)(Y, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, (e => (0, p.jsx)(I.C, {
              present: n || i.open,
              children: (0, p.jsx)(P.Portal, {
                asChild: !0,
                container: s,
                children: e
              })
            })))
          })
        };
      J.displayName = V;
      var Q = "DialogOverlay",
        X = o.forwardRef(((e, t) => {
          const n = Z(Q, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            s = G(Q, e.__scopeDialog);
          return s.modal ? (0, p.jsx)(I.C, {
            present: r || s.open,
            children: (0, p.jsx)(ee, {
              ...o,
              ref: t
            })
          }) : null
        }));
      X.displayName = Q;
      var ee = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = G(Q, n);
          return (0, p.jsx)(T.RemoveScroll, {
            as: W.Slot,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, p.jsx)(d.sG.div, {
              "data-state": fe(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        })),
        te = "DialogContent",
        ne = o.forwardRef(((e, t) => {
          const n = Z(te, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            s = G(te, e.__scopeDialog);
          return (0, p.jsx)(I.C, {
            present: r || s.open,
            children: s.modal ? (0, p.jsx)(re, {
              ...o,
              ref: t
            }) : (0, p.jsx)(oe, {
              ...o,
              ref: t
            })
          })
        }));
      ne.displayName = te;
      var re = o.forwardRef(((e, t) => {
          const n = G(te, e.__scopeDialog),
            r = o.useRef(null),
            a = (0, i.s)(t, n.contentRef, r);
          return o.useEffect((() => {
            const e = r.current;
            if (e) return k(e)
          }), []), (0, p.jsx)(se, {
            ...e,
            ref: a,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, s.m)(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: (0, s.m)(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: (0, s.m)(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        oe = o.forwardRef(((e, t) => {
          const n = G(te, e.__scopeDialog),
            r = o.useRef(!1),
            s = o.useRef(!1);
          return (0, p.jsx)(se, {
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
        se = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: s,
            onCloseAutoFocus: a,
            ...u
          } = e, c = G(te, n), d = o.useRef(null), l = (0, i.s)(t, d);
          return (0, A.Oh)(), (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(D, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: s,
              onUnmountAutoFocus: a,
              children: (0, p.jsx)(g, {
                role: "dialog",
                id: c.contentId,
                "aria-describedby": c.descriptionId,
                "aria-labelledby": c.titleId,
                "data-state": fe(c.open),
                ...u,
                ref: l,
                onDismiss: () => c.onOpenChange(!1)
              })
            }), (0, p.jsxs)(p.Fragment, {
              children: [(0, p.jsx)(ge, {
                titleId: c.titleId
              }), (0, p.jsx)(ye, {
                contentRef: d,
                descriptionId: c.descriptionId
              })]
            })]
          })
        })),
        ie = "DialogTitle",
        ae = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = G(ie, n);
          return (0, p.jsx)(d.sG.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        }));
      ae.displayName = ie;
      var ue = "DialogDescription",
        ce = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = G(ue, n);
          return (0, p.jsx)(d.sG.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        }));
      ce.displayName = ue;
      var de = "DialogClose",
        le = o.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = G(de, n);
          return (0, p.jsx)(d.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, s.m)(e.onClick, (() => o.onOpenChange(!1)))
          })
        }));

      function fe(e) {
        return e ? "open" : "closed"
      }
      le.displayName = de;
      var pe = "DialogTitleWarning",
        [me, ve] = (0, a.q)(pe, {
          contentName: te,
          titleName: ie,
          docsSlug: "dialog"
        }),
        ge = ({
          titleId: e
        }) => {
          const t = ve(pe),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return o.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        ye = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ve("DialogDescriptionWarning").contentName}}.`;
          return o.useEffect((() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        be = q,
        he = H,
        Ee = J,
        we = X,
        De = ne,
        Ne = ae,
        Ce = ce,
        _e = le
    },
    53934: (e, t, n) => {
      n.d(t, {
        hO: () => u,
        sG: () => a
      });
      var r = n(62229),
        o = n(44853),
        s = n(30786),
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