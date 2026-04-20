try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f78b8041-a7f5-4e8b-a84d-7a1d5d39404c", e._sentryDebugIdIdentifier = "sentry-dbid-f78b8041-a7f5-4e8b-a84d-7a1d5d39404c")
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
  [515], {
    48141: (e, t, n) => {
      n.d(t, {
        bm: () => Re,
        UC: () => je,
        VY: () => xe,
        hJ: () => De,
        ZL: () => Oe,
        bL: () => we,
        hE: () => Pe,
        l9: () => Ee
      });
      var r = n(71127);

      function o(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      var i = n(95362),
        a = n(85426),
        s = n(86126),
        c = n(53054),
        u = n(18429),
        l = n(42295);

      function d(e) {
        const t = f(e),
          n = r.forwardRef((e, n) => {
            const {
              children: o,
              ...i
            } = e, a = r.Children.toArray(o), s = a.find(y);
            if (s) {
              const e = s.props.children,
                o = a.map(t => t === s ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t);
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
              a = function(e, t) {
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
            return n.type !== r.Fragment && (a.ref = t ? (0, i.t)(t, e) : e), r.cloneElement(n, a)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function y(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
      var m, v = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = d(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(a, {
                ...i,
                ref: r
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {}),
        b = n(76286),
        _ = n(94040),
        h = "dismissableLayer.update",
        g = r.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        w = r.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: c,
            onInteractOutside: u,
            onDismiss: d,
            ...f
          } = e, p = r.useContext(g), [y, w] = r.useState(null), D = y?.ownerDocument ?? globalThis?.document, [, j] = r.useState({}), P = (0, i.s)(t, e => w(e)), x = Array.from(p.layers), [R] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), T = x.indexOf(R), I = y ? x.indexOf(y) : -1, N = p.layersWithOutsidePointerEventsDisabled.size > 0, S = I >= T, C = function(e, t = globalThis?.document) {
            const n = (0, b.c)(e),
              o = r.useRef(!1),
              i = r.useRef(() => {});
            return r.useEffect(() => {
              const e = e => {
                  if (e.target && !o.current) {
                    let r = function() {
                      O("dismissableLayer.pointerDownOutside", n, o, {
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
            S && !n && (s?.(e), u?.(e), e.defaultPrevented || d?.())
          }, D), F = function(e, t = globalThis?.document) {
            const n = (0, b.c)(e),
              o = r.useRef(!1);
            return r.useEffect(() => {
              const e = e => {
                e.target && !o.current && O("dismissableLayer.focusOutside", n, {
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
          }, D);
          return (0, _.U)(e => {
            I === p.layers.size - 1 && (a?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
          }, D), r.useEffect(() => {
            if (y) return n && (0 === p.layersWithOutsidePointerEventsDisabled.size && (m = D.body.style.pointerEvents, D.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(y)), p.layers.add(y), E(), () => {
              n && 1 === p.layersWithOutsidePointerEventsDisabled.size && (D.body.style.pointerEvents = m)
            }
          }, [y, D, n, p]), r.useEffect(() => () => {
            y && (p.layers.delete(y), p.layersWithOutsidePointerEventsDisabled.delete(y), E())
          }, [y, p]), r.useEffect(() => {
            const e = () => j({});
            return document.addEventListener(h, e), () => document.removeEventListener(h, e)
          }, []), (0, l.jsx)(v.div, {
            ...f,
            ref: P,
            style: {
              pointerEvents: N ? S ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: o(e.onFocusCapture, F.onFocusCapture),
            onBlurCapture: o(e.onBlurCapture, F.onBlurCapture),
            onPointerDownCapture: o(e.onPointerDownCapture, C.onPointerDownCapture)
          })
        });

      function E() {
        const e = new CustomEvent(h);
        document.dispatchEvent(e)
      }

      function O(e, t, n, {
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
        const n = r.useContext(g),
          o = r.useRef(null),
          a = (0, i.s)(t, o);
        return r.useEffect(() => {
          const e = o.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, l.jsx)(v.div, {
          ...e,
          ref: a
        })
      }).displayName = "DismissableLayerBranch";
      var D = "focusScope.autoFocusOnMount",
        j = "focusScope.autoFocusOnUnmount",
        P = {
          bubbles: !1,
          cancelable: !0
        },
        x = r.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: o = !1,
            onMountAutoFocus: a,
            onUnmountAutoFocus: s,
            ...c
          } = e, [u, d] = r.useState(null), f = (0, b.c)(a), p = (0, b.c)(s), y = r.useRef(null), m = (0, i.s)(t, e => d(e)), _ = r.useRef({
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
                  if (_.paused || !u) return;
                  const t = e.target;
                  u.contains(t) ? y.current = t : N(y.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (_.paused || !u) return;
                  const t = e.relatedTarget;
                  null !== t && (u.contains(t) || N(y.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && N(u)
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
          }, [o, u, _.paused]), r.useEffect(() => {
            if (u) {
              S.add(_);
              const e = document.activeElement;
              if (!u.contains(e)) {
                const t = new CustomEvent(D, P);
                u.addEventListener(D, f), u.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (N(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(R(u).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && N(u))
              }
              return () => {
                u.removeEventListener(D, f), setTimeout(() => {
                  const t = new CustomEvent(j, P);
                  u.addEventListener(j, p), u.dispatchEvent(t), t.defaultPrevented || N(e ?? document.body, {
                    select: !0
                  }), u.removeEventListener(j, p), S.remove(_)
                }, 0)
              }
            }
          }, [u, f, p, _]);
          const h = r.useCallback(e => {
            if (!n && !o) return;
            if (_.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              r = document.activeElement;
            if (t && r) {
              const t = e.currentTarget,
                [o, i] = function(e) {
                  const t = R(e);
                  return [T(t, e), T(t.reverse(), e)]
                }(t);
              o && i ? e.shiftKey || r !== i ? e.shiftKey && r === o && (e.preventDefault(), n && N(i, {
                select: !0
              })) : (e.preventDefault(), n && N(o, {
                select: !0
              })) : r === t && e.preventDefault()
            }
          }, [n, o, _.paused]);
          return (0, l.jsx)(v.div, {
            tabIndex: -1,
            ...c,
            ref: m,
            onKeyDown: h
          })
        });

      function R(e) {
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

      function T(e, t) {
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

      function N(e, {
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
      x.displayName = "FocusScope";
      var S = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = C(e, t), e.unshift(t)
          },
          remove(t) {
            e = C(e, t), e[0]?.resume()
          }
        }
      }();

      function C(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var F = n(63155),
        A = r.forwardRef((e, t) => {
          const {
            container: n,
            ...o
          } = e, [i, a] = r.useState(!1);
          (0, F.N)(() => a(!0), []);
          const s = n || i && globalThis?.document?.body;
          return s ? u.createPortal((0, l.jsx)(v.div, {
            ...o,
            ref: t
          }), s) : null
        });
      A.displayName = "Portal";
      var L = e => {
        const {
          present: t,
          children: n
        } = e, o = function(e) {
          const [t, n] = r.useState(), o = r.useRef(null), i = r.useRef(e), a = r.useRef("none"), s = e ? "mounted" : "unmounted", [c, u] = function(e, t) {
            return r.useReducer((e, n) => t[e][n] ?? e, e)
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
          return r.useEffect(() => {
            const e = M(o.current);
            a.current = "mounted" === c ? e : "none"
          }, [c]), (0, F.N)(() => {
            const t = o.current,
              n = i.current;
            if (n !== e) {
              const r = a.current,
                o = M(t);
              u(e ? "MOUNT" : "none" === o || "none" === t?.display ? "UNMOUNT" : n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
            }
          }, [e, u]), (0, F.N)(() => {
            if (t) {
              let e;
              const n = t.ownerDocument.defaultView ?? window,
                r = r => {
                  const a = M(o.current).includes(r.animationName);
                  if (r.target === t && a && (u("ANIMATION_END"), !i.current)) {
                    const r = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                    })
                  }
                },
                s = e => {
                  e.target === t && (a.current = M(o.current))
                };
              return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
                n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r)
              }
            }
            u("ANIMATION_END")
          }, [t, u]), {
            isPresent: ["mounted", "unmountSuspended"].includes(c),
            ref: r.useCallback(e => {
              o.current = e ? getComputedStyle(e) : null, n(e)
            }, [])
          }
        }(t), a = "function" == typeof n ? n({
          present: o.isPresent
        }) : r.Children.only(n), s = (0, i.s)(o.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(a));
        return "function" == typeof n || o.isPresent ? r.cloneElement(a, {
          ref: s
        }) : null
      };

      function M(e) {
        return e?.animationName || "none"
      }
      L.displayName = "Presence";
      var k = 0;

      function W() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var U = n(97359),
        B = n(94926),
        K = "Dialog",
        [$, V] = (0, a.A)(K),
        [z, q] = $(K),
        G = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: o,
            defaultOpen: i,
            onOpenChange: a,
            modal: u = !0
          } = e, d = r.useRef(null), f = r.useRef(null), [p, y] = (0, c.i)({
            prop: o,
            defaultProp: i ?? !1,
            onChange: a,
            caller: K
          });
          return (0, l.jsx)(z, {
            scope: t,
            triggerRef: d,
            contentRef: f,
            contentId: (0, s.B)(),
            titleId: (0, s.B)(),
            descriptionId: (0, s.B)(),
            open: p,
            onOpenChange: y,
            onOpenToggle: r.useCallback(() => y(e => !e), [y]),
            modal: u,
            children: n
          })
        };
      G.displayName = K;
      var H = "DialogTrigger",
        Z = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, a = q(H, n), s = (0, i.s)(t, a.triggerRef);
          return (0, l.jsx)(v.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": a.open,
            "aria-controls": a.contentId,
            "data-state": me(a.open),
            ...r,
            ref: s,
            onClick: o(e.onClick, a.onOpenToggle)
          })
        });
      Z.displayName = H;
      var Y = "DialogPortal",
        [J, Q] = $(Y, {
          forceMount: void 0
        }),
        X = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: o,
            container: i
          } = e, a = q(Y, t);
          return (0, l.jsx)(J, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, e => (0, l.jsx)(L, {
              present: n || a.open,
              children: (0, l.jsx)(A, {
                asChild: !0,
                container: i,
                children: e
              })
            }))
          })
        };
      X.displayName = Y;
      var ee = "DialogOverlay",
        te = r.forwardRef((e, t) => {
          const n = Q(ee, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = q(ee, e.__scopeDialog);
          return i.modal ? (0, l.jsx)(L, {
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
          return (0, l.jsx)(U.A, {
            as: ne,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, l.jsx)(v.div, {
              "data-state": me(o.open),
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
          const n = Q(oe, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = q(oe, e.__scopeDialog);
          return (0, l.jsx)(L, {
            present: r || i.open,
            children: i.modal ? (0, l.jsx)(ae, {
              ...o,
              ref: t
            }) : (0, l.jsx)(se, {
              ...o,
              ref: t
            })
          })
        });
      ie.displayName = oe;
      var ae = r.forwardRef((e, t) => {
          const n = q(oe, e.__scopeDialog),
            a = r.useRef(null),
            s = (0, i.s)(t, n.contentRef, a);
          return r.useEffect(() => {
            const e = a.current;
            if (e) return (0, B.Eq)(e)
          }, []), (0, l.jsx)(ce, {
            ...e,
            ref: s,
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
        se = r.forwardRef((e, t) => {
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
                a = n.triggerRef.current?.contains(r);
              a && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
            }
          })
        }),
        ce = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: a,
            onCloseAutoFocus: s,
            ...c
          } = e, u = q(oe, n), d = r.useRef(null), f = (0, i.s)(t, d);
          return r.useEffect(() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? W()), document.body.insertAdjacentElement("beforeend", e[1] ?? W()), k++, () => {
              1 === k && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), k--
            }
          }, []), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(x, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: a,
              onUnmountAutoFocus: s,
              children: (0, l.jsx)(w, {
                role: "dialog",
                id: u.contentId,
                "aria-describedby": u.descriptionId,
                "aria-labelledby": u.titleId,
                "data-state": me(u.open),
                ...c,
                ref: f,
                onDismiss: () => u.onOpenChange(!1)
              })
            }), (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(he, {
                titleId: u.titleId
              }), (0, l.jsx)(ge, {
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
          return (0, l.jsx)(v.h2, {
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
          return (0, l.jsx)(v.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        });
      fe.displayName = de;
      var pe = "DialogClose",
        ye = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, i = q(pe, n);
          return (0, l.jsx)(v.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: o(e.onClick, () => i.onOpenChange(!1))
          })
        });

      function me(e) {
        return e ? "open" : "closed"
      }
      ye.displayName = pe;
      var ve = "DialogTitleWarning",
        [be, _e] = (0, a.q)(ve, {
          contentName: oe,
          titleName: ue,
          docsSlug: "dialog"
        }),
        he = ({
          titleId: e
        }) => {
          const t = _e(ve),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return r.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        ge = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${_e("DialogDescriptionWarning").contentName}}.`;
          return r.useEffect(() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }, [n, e, t]), null
        },
        we = G,
        Ee = Z,
        Oe = X,
        De = te,
        je = ie,
        Pe = le,
        xe = fe,
        Re = ye
    },
    78322: (e, t, n) => {
      n.r(t), n.d(t, {
        __addDisposableResource: () => A,
        __assign: () => i,
        __asyncDelegator: () => j,
        __asyncGenerator: () => D,
        __asyncValues: () => P,
        __await: () => O,
        __awaiter: () => y,
        __classPrivateFieldGet: () => S,
        __classPrivateFieldIn: () => F,
        __classPrivateFieldSet: () => C,
        __createBinding: () => v,
        __decorate: () => s,
        __disposeResources: () => M,
        __esDecorate: () => u,
        __exportStar: () => b,
        __extends: () => o,
        __generator: () => m,
        __importDefault: () => N,
        __importStar: () => I,
        __makeTemplateObject: () => x,
        __metadata: () => p,
        __param: () => c,
        __propKey: () => d,
        __read: () => h,
        __rest: () => a,
        __rewriteRelativeImportExtension: () => k,
        __runInitializers: () => l,
        __setFunctionName: () => f,
        __spread: () => g,
        __spreadArray: () => E,
        __spreadArrays: () => w,
        __values: () => _,
        default: () => W
      });
      var r = function(e, t) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, r(e, t)
      };

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }
      var i = function() {
        return i = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, i.apply(this, arguments)
      };

      function a(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function s(e, t, n, r) {
        var o, i = arguments.length,
          a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
          for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a
      }

      function c(e, t) {
        return function(n, r) {
          t(n, r, e)
        }
      }

      function u(e, t, n, r, o, i) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, c = r.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", l = !t && e ? r.static ? e : e.prototype : null, d = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}), f = !1, p = n.length - 1; p >= 0; p--) {
          var y = {};
          for (var m in r) y[m] = "access" === m ? {} : r[m];
          for (var m in r.access) y.access[m] = r.access[m];
          y.addInitializer = function(e) {
            if (f) throw new TypeError("Cannot add initializers after decoration has completed");
            i.push(a(e || null))
          };
          var v = (0, n[p])("accessor" === c ? {
            get: d.get,
            set: d.set
          } : d[u], y);
          if ("accessor" === c) {
            if (void 0 === v) continue;
            if (null === v || "object" != typeof v) throw new TypeError("Object expected");
            (s = a(v.get)) && (d.get = s), (s = a(v.set)) && (d.set = s), (s = a(v.init)) && o.unshift(s)
          } else(s = a(v)) && ("field" === c ? o.unshift(s) : d[u] = s)
        }
        l && Object.defineProperty(l, r.name, d), f = !0
      }

      function l(e, t, n) {
        for (var r = arguments.length > 2, o = 0; o < t.length; o++) n = r ? t[o].call(e, n) : t[o].call(e);
        return r ? n : void 0
      }

      function d(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function f(e, t, n) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: n ? "".concat(n, " ", t) : t
        })
      }

      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function y(e, t, n, r) {
        return new(n || (n = Promise))(function(o, i) {
          function a(e) {
            try {
              c(r.next(e))
            } catch (e) {
              i(e)
            }
          }

          function s(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              i(e)
            }
          }

          function c(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
              e(t)
            })).then(a, s)
          }
          c((r = r.apply(e, t || [])).next())
        })
      }

      function m(e, t) {
        var n, r, o, i = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1]
            },
            trys: [],
            ops: []
          },
          a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this
        }), a;

        function s(s) {
          return function(c) {
            return function(s) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, s[0] && (i = 0)), i;) try {
                if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;
                switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                  case 0:
                  case 1:
                    o = s;
                    break;
                  case 4:
                    return i.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    i.label++, r = s[1], s = [0];
                    continue;
                  case 7:
                    s = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                      i.label = s[1];
                      break
                    }
                    if (6 === s[0] && i.label < o[1]) {
                      i.label = o[1], o = s;
                      break
                    }
                    if (o && i.label < o[2]) {
                      i.label = o[2], i.ops.push(s);
                      break
                    }
                    o[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                s = t.call(e, i)
              } catch (e) {
                s = [6, e], r = 0
              } finally {
                n = o = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, c])
          }
        }
      }
      var v = Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0,
          get: function() {
            return t[n]
          }
        }), Object.defineProperty(e, r, o)
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n]
      };

      function b(e, t) {
        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || v(t, e, n)
      }

      function _(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && r >= e.length && (e = void 0), {
              value: e && e[r++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function h(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, i = n.call(e),
          a = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i)
          } finally {
            if (o) throw o.error
          }
        }
        return a
      }

      function g() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(h(arguments[t]));
        return e
      }

      function w() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
          o = 0;
        for (t = 0; t < n; t++)
          for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
        return r
      }

      function E(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
      }

      function O(e) {
        return this instanceof O ? (this.v = e, this) : new O(e)
      }

      function D(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, o = n.apply(e, t || []),
          i = [];
        return r = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, u)
          }
        }), r[Symbol.asyncIterator] = function() {
          return this
        }, r;

        function a(e, t) {
          o[e] && (r[e] = function(t) {
            return new Promise(function(n, r) {
              i.push([e, t, n, r]) > 1 || s(e, t)
            })
          }, t && (r[e] = t(r[e])))
        }

        function s(e, t) {
          try {
            (n = o[e](t)).value instanceof O ? Promise.resolve(n.value.v).then(c, u) : l(i[0][2], n)
          } catch (e) {
            l(i[0][3], e)
          }
          var n
        }

        function c(e) {
          s("next", e)
        }

        function u(e) {
          s("throw", e)
        }

        function l(e, t) {
          e(t), i.shift(), i.length && s(i[0][0], i[0][1])
        }
      }

      function j(e) {
        var t, n;
        return t = {}, r("next"), r("throw", function(e) {
          throw e
        }), r("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function r(r, o) {
          t[r] = e[r] ? function(t) {
            return (n = !n) ? {
              value: O(e[r](t)),
              done: !1
            } : o ? o(t) : t
          } : o
        }
      }

      function P(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, n = e[Symbol.asyncIterator];
        return n ? n.call(e) : (e = _(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function r(n) {
          t[n] = e[n] && function(t) {
            return new Promise(function(r, o) {
              ! function(e, t, n, r) {
                Promise.resolve(r).then(function(t) {
                  e({
                    value: t,
                    done: n
                  })
                }, t)
              }(r, o, (t = e[n](t)).done, t.value)
            })
          }
        }
      }

      function x(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var R = Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        },
        T = function(e) {
          return T = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
            return t
          }, T(e)
        };

      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n = T(e), r = 0; r < n.length; r++) "default" !== n[r] && v(t, e, n[r]);
        return R(t, e), t
      }

      function N(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function S(e, t, n, r) {
        if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
      }

      function C(e, t, n, r, o) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
      }

      function F(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function A(e, t, n) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var r, o;
          if (n) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            r = t[Symbol.asyncDispose]
          }
          if (void 0 === r) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            r = t[Symbol.dispose], n && (o = r)
          }
          if ("function" != typeof r) throw new TypeError("Object not disposable.");
          o && (r = function() {
            try {
              o.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: r,
            async: n
          })
        } else n && e.stack.push({
          async: !0
        });
        return t
      }
      var L = "function" == typeof SuppressedError ? SuppressedError : function(e, t, n) {
        var r = new Error(n);
        return r.name = "SuppressedError", r.error = e, r.suppressed = t, r
      };

      function M(e) {
        function t(t) {
          e.error = e.hasError ? new L(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var n, r = 0;
        return function o() {
          for (; n = e.stack.pop();) try {
            if (!n.async && 1 === r) return r = 0, e.stack.push(n), Promise.resolve().then(o);
            if (n.dispose) {
              var i = n.dispose.call(n.value);
              if (n.async) return r |= 2, Promise.resolve(i).then(o, function(e) {
                return t(e), o()
              })
            } else r |= 1
          } catch (e) {
            t(e)
          }
          if (1 === r) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function k(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, o, i) {
          return n ? t ? ".jsx" : ".js" : !r || o && i ? r + o + "." + i.toLowerCase() + "js" : e
        }) : e
      }
      const W = {
        __extends: o,
        __assign: i,
        __rest: a,
        __decorate: s,
        __param: c,
        __esDecorate: u,
        __runInitializers: l,
        __propKey: d,
        __setFunctionName: f,
        __metadata: p,
        __awaiter: y,
        __generator: m,
        __createBinding: v,
        __exportStar: b,
        __values: _,
        __read: h,
        __spread: g,
        __spreadArrays: w,
        __spreadArray: E,
        __await: O,
        __asyncGenerator: D,
        __asyncDelegator: j,
        __asyncValues: P,
        __makeTemplateObject: x,
        __importStar: I,
        __importDefault: N,
        __classPrivateFieldGet: S,
        __classPrivateFieldSet: C,
        __classPrivateFieldIn: F,
        __addDisposableResource: A,
        __disposeResources: M,
        __rewriteRelativeImportExtension: k
      }
    }
  }
]);