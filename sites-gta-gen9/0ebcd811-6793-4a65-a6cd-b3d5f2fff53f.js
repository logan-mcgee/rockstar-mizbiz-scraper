try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0ebcd811-6793-4a65-a6cd-b3d5f2fff53f", e._sentryDebugIdIdentifier = "sentry-dbid-0ebcd811-6793-4a65-a6cd-b3d5f2fff53f")
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
  [6458], {
    4408: (e, t, n) => {
      n.d(t, {
        DX: () => d,
        xV: () => y,
        s6: () => E
      });
      var r = n(62229),
        o = n.t(r, 2),
        i = n(95362),
        s = n(42295),
        a = Symbol.for("react.lazy"),
        c = o[" use ".trim().toString()];

      function u(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === a && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function l(e) {
        const t = f(e),
          n = r.forwardRef((e, n) => {
            let {
              children: o,
              ...i
            } = e;
            u(o) && "function" == typeof c && (o = c(o._payload));
            const a = r.Children.toArray(o),
              l = a.find(g);
            if (l) {
              const e = l.props.children,
                o = a.map(t => t === l ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t);
              return (0, s.jsx)(t, {
                ...i,
                ref: n,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, s.jsx)(t, {
              ...i,
              ref: n,
              children: o
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var d = l("Slot");

      function f(e) {
        const t = r.forwardRef((e, t) => {
          let {
            children: n,
            ...o
          } = e;
          if (u(n) && "function" == typeof c && (n = c(n._payload)), r.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              s = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(o, n.props);
            return n.type !== r.Fragment && (s.ref = t ? (0, i.t)(t, e) : e), r.cloneElement(n, s)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function m(e) {
        const t = ({
          children: e
        }) => (0, s.jsx)(s.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = p, t
      }
      var y = m("Slottable");

      function g(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
      n(18429);
      var v = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = l(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(a, {
                ...i,
                ref: r
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {}),
        h = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        b = r.forwardRef((e, t) => (0, s.jsx)(v.span, {
          ...e,
          ref: t,
          style: {
            ...h,
            ...e.style
          }
        }));
      b.displayName = "VisuallyHidden";
      const E = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? b : r.Fragment;
        return (0, s.jsx)(n, {
          ...t
        })
      }
    },
    17328: (e, t, n) => {
      n.d(t, {
        fi: () => o,
        v6: () => s.v
      }), n(60211);
      const r = e => e - .02,
        o = {
          mobile: `(min-width: 0px) and (max-width: ${r(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${r(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${r(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${r(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var i, s = n(51105);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(i || (i = {})), Symbol.toStringTag
    },
    48141: (e, t, n) => {
      n.d(t, {
        bm: () => Oe,
        UC: () => _e,
        VY: () => Re,
        hJ: () => Ne,
        ZL: () => De,
        bL: () => we,
        hE: () => Ce,
        l9: () => xe
      });
      var r = n(62229);

      function o(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      var i = n(95362),
        s = n(85426),
        a = n(86126),
        c = n(53054),
        u = n(18429),
        l = n(42295);

      function d(e) {
        const t = f(e),
          n = r.forwardRef((e, n) => {
            const {
              children: o,
              ...i
            } = e, s = r.Children.toArray(o), a = s.find(m);
            if (a) {
              const e = a.props.children,
                o = s.map(t => t === a ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t);
              return (0, l.jsx)(t, {
                ...i,
                ref: n,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, l.jsx)(t, {
              ...i,
              ref: n,
              children: o
            })
          });
        return n.displayName = `${e}.Slot`, n
      }

      function f(e) {
        const t = r.forwardRef((e, t) => {
          const {
            children: n,
            ...o
          } = e;
          if (r.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              s = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    i(...e), o(...e)
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(o, n.props);
            return n.type !== r.Fragment && (s.ref = t ? (0, i.t)(t, e) : e), r.cloneElement(n, s)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function m(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
      var y, g = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = d(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {}),
        v = n(76286),
        h = n(94040),
        b = "dismissableLayer.update",
        E = r.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        w = r.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            onFocusOutside: c,
            onInteractOutside: u,
            onDismiss: d,
            ...f
          } = e, p = r.useContext(E), [m, w] = r.useState(null), N = m?.ownerDocument ?? globalThis?.document, [, _] = r.useState({}), C = (0, i.s)(t, e => w(e)), R = Array.from(p.layers), [O] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), j = R.indexOf(O), I = m ? R.indexOf(m) : -1, P = p.layersWithOutsidePointerEventsDisabled.size > 0, T = I >= j, S = function(e, t = globalThis?.document) {
            const n = (0, v.c)(e),
              o = r.useRef(!1),
              i = r.useRef(() => {});
            return r.useEffect(() => {
              const e = e => {
                  if (e.target && !o.current) {
                    let r = function() {
                      D("dismissableLayer.pointerDownOutside", n, o, {
                        discrete: !0
                      })
                    };
                    const o = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", i.current), i.current = r, t.addEventListener("click", i.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", i.current);
                  o.current = !1
                },
                r = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(r), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current)
              }
            }, [t, n]), {
              onPointerDownCapture: () => o.current = !0
            }
          }(e => {
            const t = e.target,
              n = [...p.branches].some(e => e.contains(t));
            T && !n && (a?.(e), u?.(e), e.defaultPrevented || d?.())
          }, N), L = function(e, t = globalThis?.document) {
            const n = (0, v.c)(e),
              o = r.useRef(!1);
            return r.useEffect(() => {
              const e = e => {
                e.target && !o.current && D("dismissableLayer.focusOutside", n, {
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
            [...p.branches].some(e => e.contains(t)) || (c?.(e), u?.(e), e.defaultPrevented || d?.())
          }, N);
          return (0, h.U)(e => {
            I === p.layers.size - 1 && (s?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
          }, N), r.useEffect(() => {
            if (m) return n && (0 === p.layersWithOutsidePointerEventsDisabled.size && (y = N.body.style.pointerEvents, N.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(m)), p.layers.add(m), x(), () => {
              n && 1 === p.layersWithOutsidePointerEventsDisabled.size && (N.body.style.pointerEvents = y)
            }
          }, [m, N, n, p]), r.useEffect(() => () => {
            m && (p.layers.delete(m), p.layersWithOutsidePointerEventsDisabled.delete(m), x())
          }, [m, p]), r.useEffect(() => {
            const e = () => _({});
            return document.addEventListener(b, e), () => document.removeEventListener(b, e)
          }, []), (0, l.jsx)(g.div, {
            ...f,
            ref: C,
            style: {
              pointerEvents: P ? T ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: o(e.onFocusCapture, L.onFocusCapture),
            onBlurCapture: o(e.onBlurCapture, L.onBlurCapture),
            onPointerDownCapture: o(e.onPointerDownCapture, S.onPointerDownCapture)
          })
        });

      function x() {
        const e = new CustomEvent(b);
        document.dispatchEvent(e)
      }

      function D(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? function(e, t) {
          e && u.flushSync(() => e.dispatchEvent(t))
        }(o, i) : o.dispatchEvent(i)
      }
      w.displayName = "DismissableLayer", r.forwardRef((e, t) => {
        const n = r.useContext(E),
          o = r.useRef(null),
          s = (0, i.s)(t, o);
        return r.useEffect(() => {
          const e = o.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, l.jsx)(g.div, {
          ...e,
          ref: s
        })
      }).displayName = "DismissableLayerBranch";
      var N = "focusScope.autoFocusOnMount",
        _ = "focusScope.autoFocusOnUnmount",
        C = {
          bubbles: !1,
          cancelable: !0
        },
        R = r.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: o = !1,
            onMountAutoFocus: s,
            onUnmountAutoFocus: a,
            ...c
          } = e, [u, d] = r.useState(null), f = (0, v.c)(s), p = (0, v.c)(a), m = r.useRef(null), y = (0, i.s)(t, e => d(e)), h = r.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          r.useEffect(() => {
            if (o) {
              let e = function(e) {
                  if (h.paused || !u) return;
                  const t = e.target;
                  u.contains(t) ? m.current = t : P(m.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (h.paused || !u) return;
                  const t = e.relatedTarget;
                  null !== t && (u.contains(t) || P(m.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && P(u)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return u && r.observe(u, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }, [o, u, h.paused]), r.useEffect(() => {
            if (u) {
              T.add(h);
              const e = document.activeElement;
              if (!u.contains(e)) {
                const t = new CustomEvent(N, C);
                u.addEventListener(N, f), u.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (P(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(O(u).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && P(u))
              }
              return () => {
                u.removeEventListener(N, f), setTimeout(() => {
                  const t = new CustomEvent(_, C);
                  u.addEventListener(_, p), u.dispatchEvent(t), t.defaultPrevented || P(e ?? document.body, {
                    select: !0
                  }), u.removeEventListener(_, p), T.remove(h)
                }, 0)
              }
            }
          }, [u, f, p, h]);
          const b = r.useCallback(e => {
            if (!n && !o) return;
            if (h.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              r = document.activeElement;
            if (t && r) {
              const t = e.currentTarget,
                [o, i] = function(e) {
                  const t = O(e);
                  return [j(t, e), j(t.reverse(), e)]
                }(t);
              o && i ? e.shiftKey || r !== i ? e.shiftKey && r === o && (e.preventDefault(), n && P(i, {
                select: !0
              })) : (e.preventDefault(), n && P(o, {
                select: !0
              })) : r === t && e.preventDefault()
            }
          }, [n, o, h.paused]);
          return (0, l.jsx)(g.div, {
            tabIndex: -1,
            ...c,
            ref: y,
            onKeyDown: b
          })
        });

      function O(e) {
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

      function j(e, t) {
        for (const n of e)
          if (!I(n, {
              upTo: t
            })) return n
      }

      function I(e, {
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

      function P(e, {
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
      R.displayName = "FocusScope";
      var T = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = S(e, t), e.unshift(t)
          },
          remove(t) {
            e = S(e, t), e[0]?.resume()
          }
        }
      }();

      function S(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var L = n(63155),
        F = r.forwardRef((e, t) => {
          const {
            container: n,
            ...o
          } = e, [i, s] = r.useState(!1);
          (0, L.N)(() => s(!0), []);
          const a = n || i && globalThis?.document?.body;
          return a ? u.createPortal((0, l.jsx)(g.div, {
            ...o,
            ref: t
          }), a) : null
        });
      F.displayName = "Portal";
      var A = e => {
        const {
          present: t,
          children: n
        } = e, o = function(e) {
          const [t, n] = r.useState(), o = r.useRef(null), i = r.useRef(e), s = r.useRef("none"), a = e ? "mounted" : "unmounted", [c, u] = function(e, t) {
            return r.useReducer((e, n) => t[e][n] ?? e, e)
          }(a, {
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
            const e = M(o.current);
            s.current = "mounted" === c ? e : "none"
          }, [c]), (0, L.N)(() => {
            const t = o.current,
              n = i.current;
            if (n !== e) {
              const r = s.current,
                o = M(t);
              u(e ? "MOUNT" : "none" === o || "none" === t?.display ? "UNMOUNT" : n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
            }
          }, [e, u]), (0, L.N)(() => {
            if (t) {
              let e;
              const n = t.ownerDocument.defaultView ?? window,
                r = r => {
                  const s = M(o.current).includes(r.animationName);
                  if (r.target === t && s && (u("ANIMATION_END"), !i.current)) {
                    const r = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                    })
                  }
                },
                a = e => {
                  e.target === t && (s.current = M(o.current))
                };
              return t.addEventListener("animationstart", a), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
                n.clearTimeout(e), t.removeEventListener("animationstart", a), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r)
              }
            }
            u("ANIMATION_END")
          }, [t, u]), {
            isPresent: ["mounted", "unmountSuspended"].includes(c),
            ref: r.useCallback(e => {
              o.current = e ? getComputedStyle(e) : null, n(e)
            }, [])
          }
        }(t), s = "function" == typeof n ? n({
          present: o.isPresent
        }) : r.Children.only(n), a = (0, i.s)(o.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(s));
        return "function" == typeof n || o.isPresent ? r.cloneElement(s, {
          ref: a
        }) : null
      };

      function M(e) {
        return e?.animationName || "none"
      }
      A.displayName = "Presence";
      var k = 0;

      function W() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var $ = n(97359),
        U = n(94926),
        V = "Dialog",
        [B, K] = (0, s.A)(V),
        [z, q] = B(V),
        H = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: o,
            defaultOpen: i,
            onOpenChange: s,
            modal: u = !0
          } = e, d = r.useRef(null), f = r.useRef(null), [p, m] = (0, c.i)({
            prop: o,
            defaultProp: i ?? !1,
            onChange: s,
            caller: V
          });
          return (0, l.jsx)(z, {
            scope: t,
            triggerRef: d,
            contentRef: f,
            contentId: (0, a.B)(),
            titleId: (0, a.B)(),
            descriptionId: (0, a.B)(),
            open: p,
            onOpenChange: m,
            onOpenToggle: r.useCallback(() => m(e => !e), [m]),
            modal: u,
            children: n
          })
        };
      H.displayName = V;
      var Z = "DialogTrigger",
        X = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, s = q(Z, n), a = (0, i.s)(t, s.triggerRef);
          return (0, l.jsx)(g.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": ye(s.open),
            ...r,
            ref: a,
            onClick: o(e.onClick, s.onOpenToggle)
          })
        });
      X.displayName = Z;
      var Y = "DialogPortal",
        [J, G] = B(Y, {
          forceMount: void 0
        }),
        Q = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: o,
            container: i
          } = e, s = q(Y, t);
          return (0, l.jsx)(J, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, e => (0, l.jsx)(A, {
              present: n || s.open,
              children: (0, l.jsx)(F, {
                asChild: !0,
                container: i,
                children: e
              })
            }))
          })
        };
      Q.displayName = Y;
      var ee = "DialogOverlay",
        te = r.forwardRef((e, t) => {
          const n = G(ee, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = q(ee, e.__scopeDialog);
          return i.modal ? (0, l.jsx)(A, {
            present: r || i.open,
            children: (0, l.jsx)(re, {
              ...o,
              ref: t
            })
          }) : null
        });
      te.displayName = ee;
      var ne = d("DialogOverlay.RemoveScroll"),
        re = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = q(ee, n);
          return (0, l.jsx)($.A, {
            as: ne,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, l.jsx)(g.div, {
              "data-state": ye(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        oe = "DialogContent",
        ie = r.forwardRef((e, t) => {
          const n = G(oe, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = q(oe, e.__scopeDialog);
          return (0, l.jsx)(A, {
            present: r || i.open,
            children: i.modal ? (0, l.jsx)(se, {
              ...o,
              ref: t
            }) : (0, l.jsx)(ae, {
              ...o,
              ref: t
            })
          })
        });
      ie.displayName = oe;
      var se = r.forwardRef((e, t) => {
          const n = q(oe, e.__scopeDialog),
            s = r.useRef(null),
            a = (0, i.s)(t, n.contentRef, s);
          return r.useEffect(() => {
            const e = s.current;
            if (e) return (0, U.Eq)(e)
          }, []), (0, l.jsx)(ce, {
            ...e,
            ref: a,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: o(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: o(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: o(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        ae = r.forwardRef((e, t) => {
          const n = q(oe, e.__scopeDialog),
            o = r.useRef(!1),
            i = r.useRef(!1);
          return (0, l.jsx)(ce, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || n.triggerRef.current?.focus(), t.preventDefault()), o.current = !1, i.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (o.current = !0, "pointerdown" === t.detail.originalEvent.type && (i.current = !0));
              const r = t.target,
                s = n.triggerRef.current?.contains(r);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
            }
          })
        }),
        ce = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: s,
            onCloseAutoFocus: a,
            ...c
          } = e, u = q(oe, n), d = r.useRef(null), f = (0, i.s)(t, d);
          return r.useEffect(() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? W()), document.body.insertAdjacentElement("beforeend", e[1] ?? W()), k++, () => {
              1 === k && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), k--
            }
          }, []), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(R, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: s,
              onUnmountAutoFocus: a,
              children: (0, l.jsx)(w, {
                role: "dialog",
                id: u.contentId,
                "aria-describedby": u.descriptionId,
                "aria-labelledby": u.titleId,
                "data-state": ye(u.open),
                ...c,
                ref: f,
                onDismiss: () => u.onOpenChange(!1)
              })
            }), (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(be, {
                titleId: u.titleId
              }), (0, l.jsx)(Ee, {
                contentRef: d,
                descriptionId: u.descriptionId
              })]
            })]
          })
        }),
        ue = "DialogTitle",
        le = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = q(ue, n);
          return (0, l.jsx)(g.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        });
      le.displayName = ue;
      var de = "DialogDescription",
        fe = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = q(de, n);
          return (0, l.jsx)(g.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        });
      fe.displayName = de;
      var pe = "DialogClose",
        me = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, i = q(pe, n);
          return (0, l.jsx)(g.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: o(e.onClick, () => i.onOpenChange(!1))
          })
        });

      function ye(e) {
        return e ? "open" : "closed"
      }
      me.displayName = pe;
      var ge = "DialogTitleWarning",
        [ve, he] = (0, s.q)(ge, {
          contentName: oe,
          titleName: ue,
          docsSlug: "dialog"
        }),
        be = ({
          titleId: e
        }) => {
          const t = he(ge),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return r.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        Ee = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${he("DialogDescriptionWarning").contentName}}.`;
          return r.useEffect(() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }, [n, e, t]), null
        },
        we = H,
        xe = X,
        De = Q,
        Ne = te,
        _e = ie,
        Ce = le,
        Re = fe,
        Oe = me
    },
    51105: (e, t, n) => {
      n.d(t, {
        v: () => a
      });
      var r = n(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              a = o[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, r.clsx)(n, a)
          }
        }
        return t
      }
    },
    60211: (e, t, n) => {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    95362: (e, t, n) => {
      n.d(t, {
        s: () => s,
        t: () => i
      });
      var r = n(62229);

      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function i(...e) {
        return t => {
          let n = !1;
          const r = e.map(e => {
            const r = o(e, t);
            return n || "function" != typeof r || (n = !0), r
          });
          if (n) return () => {
            for (let t = 0; t < r.length; t++) {
              const n = r[t];
              "function" == typeof n ? n() : o(e[t], null)
            }
          }
        }
      }

      function s(...e) {
        return r.useCallback(i(...e), e)
      }
    }
  }
]);