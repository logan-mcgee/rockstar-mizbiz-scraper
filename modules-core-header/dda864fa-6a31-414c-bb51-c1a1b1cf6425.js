try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "dda864fa-6a31-414c-bb51-c1a1b1cf6425", e._sentryDebugIdIdentifier = "sentry-dbid-dda864fa-6a31-414c-bb51-c1a1b1cf6425")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [6382], {
    2458(e, n, t) {
      function r(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r || !r.defaultPrevented) return n?.(r)
        }
      }
      t.d(n, {
        mK: () => r
      }), "undefined" == typeof window || !window.document || window.document.createElement
    },
    64239(e, n, t) {
      t.d(n, {
        s: () => s
      });
      var r = t(4637);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function s(...e) {
        return r.useCallback(function(...e) {
          return n => {
            let t = !1;
            const r = e.map(e => {
              const r = o(e, n);
              return t || "function" != typeof r || (t = !0), r
            });
            if (t) return () => {
              for (let n = 0; n < r.length; n++) {
                const t = r[n];
                "function" == typeof t ? t() : o(e[n], null)
              }
            }
          }
        }(...e), e)
      }
    },
    1913(e, n, t) {
      t.d(n, {
        A: () => s
      });
      var r = t(4637),
        o = t(39793);

      function s(e, n = []) {
        let t = [];
        const s = () => {
          const n = t.map(e => r.createContext(e));
          return function(t) {
            const o = t?.[e] || n;
            return r.useMemo(() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: o
              }
            }), [t, o])
          }
        };
        return s.scopeName = e, [function(n, s) {
          const u = r.createContext(s);
          u.displayName = n + "Context";
          const i = t.length;
          t = [...t, s];
          const c = n => {
            const {
              scope: t,
              children: s,
              ...c
            } = n, a = t?.[e]?.[i] || u, d = r.useMemo(() => c, Object.values(c));
            return (0, o.jsx)(a.Provider, {
              value: d,
              children: s
            })
          };
          return c.displayName = n + "Provider", [c, function(t, o, c = {}) {
            const {
              optional: a = !1
            } = c, d = o?.[e]?.[i] || u, l = r.useContext(d);
            if (l) return l;
            if (void 0 !== s) return s;
            if (!a) throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, u(s, ...n)]
      }

      function u(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const o = t.reduce((n, {
              useScope: t,
              scopeName: r
            }) => ({
              ...n,
              ...t(e)[`__scope${r}`]
            }), {});
            return r.useMemo(() => ({
              [`__scope${n.scopeName}`]: o
            }), [o])
          }
        };
        return t.scopeName = n.scopeName, t
      }
    },
    64334(e, n, t) {
      t.d(n, {
        bL: () => w,
        e0: () => p,
        lg: () => E,
        qW: () => f
      });
      var r, o = t(4637),
        s = t(2458),
        u = t(31270),
        i = t(64239),
        c = t(94660),
        a = t(39793),
        d = "dismissableLayer.update",
        l = o.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        f = o.forwardRef((e, n) => {
          const {
            disableOutsidePointerEvents: t = !1,
            deferPointerDownOutside: f = !1,
            onEscapeKeyDown: m,
            onPointerDownOutside: p,
            onFocusOutside: w,
            onInteractOutside: E,
            onDismiss: h,
            ...g
          } = e, N = o.useContext(l), [O, D] = o.useState(null), P = O?.ownerDocument ?? globalThis?.document, [, C] = o.useState({}), L = (0, i.s)(n, D), T = Array.from(N.layers), [M] = [...N.layersWithOutsidePointerEventsDisabled].slice(-1), S = M ? T.indexOf(M) : -1, _ = O ? T.indexOf(O) : -1, k = N.layersWithOutsidePointerEventsDisabled.size > 0, R = _ >= S, I = o.useRef(!1), x = function(e, n) {
            const {
              ownerDocument: t = globalThis?.document,
              deferPointerDownOutside: r = !1,
              isDeferredPointerDownOutsideRef: s,
              dismissableSurfaces: u,
              shouldHandlePointerDownOutside: i = v
            } = n, a = (0, c.c)(e), d = o.useRef(!1), l = o.useRef(!1), f = o.useRef(new Map), m = o.useRef(() => {});
            return o.useEffect(() => {
              function e() {
                l.current = !1, s.current = !1, f.current.clear()
              }

              function n(e) {
                if (!l.current) return;
                const n = e.target;
                n instanceof Node && [...u].some(e => e.contains(n)) || f.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
                  l.current && m.current()
                }, 0)
              }

              function o(e) {
                l.current && f.current.set(e.type, !1)
              }
              const c = n => {
                  if (n.target && !d.current) {
                    let o = function() {
                      t.removeEventListener("click", m.current);
                      const n = Array.from(f.current.values()).some(Boolean);
                      e(), n || b("dismissableLayer.pointerDownOutside", a, u, {
                        discrete: !0
                      })
                    };
                    if (!i(n.target)) return t.removeEventListener("click", m.current), e(), void(d.current = !1);
                    const u = {
                      originalEvent: n
                    };
                    l.current = !0, s.current = r && 0 === n.button, f.current.clear(), r && 0 === n.button ? (t.removeEventListener("click", m.current), m.current = o, t.addEventListener("click", m.current, {
                      once: !0
                    })) : o()
                  } else t.removeEventListener("click", m.current), e();
                  d.current = !1
                },
                p = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
              for (const e of p) t.addEventListener(e, n, !0), t.addEventListener(e, o);
              const v = window.setTimeout(() => {
                t.addEventListener("pointerdown", c)
              }, 0);
              return () => {
                window.clearTimeout(v), t.removeEventListener("pointerdown", c), t.removeEventListener("click", m.current);
                for (const e of p) t.removeEventListener(e, n, !0), t.removeEventListener(e, o)
              }
            }, [t, a, r, s, u, i]), {
              onPointerDownCapture: () => d.current = !0
            }
          }(e => {
            p?.(e), E?.(e), e.defaultPrevented || h?.()
          }, {
            ownerDocument: P,
            deferPointerDownOutside: f,
            isDeferredPointerDownOutsideRef: I,
            dismissableSurfaces: N.dismissableSurfaces,
            shouldHandlePointerDownOutside: o.useCallback(e => {
              if (!(e instanceof Node)) return !1;
              const n = [...N.branches].some(n => n.contains(e));
              return R && !n
            }, [N.branches, R])
          }), A = function(e, n = globalThis?.document) {
            const t = (0, c.c)(e),
              r = o.useRef(!1);
            return o.useEffect(() => {
              const e = e => {
                e.target && !r.current && b("dismissableLayer.focusOutside", t, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
            }, [n, t]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }(e => {
            if (f && I.current) return;
            const n = e.target;
            [...N.branches].some(e => e.contains(n)) || (w?.(e), E?.(e), e.defaultPrevented || h?.())
          }, P), W = !!O && _ === T.length - 1, U = (0, c.c)(e => {
            "Escape" === e.key && (m?.(e), !e.defaultPrevented && h && (e.preventDefault(), h()))
          });
          return o.useEffect(() => {
            if (W) return P.addEventListener("keydown", U, {
              capture: !0
            }), () => P.removeEventListener("keydown", U, {
              capture: !0
            })
          }, [P, W, U]), o.useEffect(() => {
            if (O) return t && (0 === N.layersWithOutsidePointerEventsDisabled.size && (r = P.body.style.pointerEvents, P.body.style.pointerEvents = "none"), N.layersWithOutsidePointerEventsDisabled.add(O)), N.layers.add(O), y(), () => {
              t && (N.layersWithOutsidePointerEventsDisabled.delete(O), 0 === N.layersWithOutsidePointerEventsDisabled.size && (P.body.style.pointerEvents = r))
            }
          }, [O, P, t, N]), o.useEffect(() => () => {
            O && (N.layers.delete(O), N.layersWithOutsidePointerEventsDisabled.delete(O), y())
          }, [O, N]), o.useEffect(() => {
            const e = () => C({});
            return document.addEventListener(d, e), () => document.removeEventListener(d, e)
          }, []), (0, a.jsx)(u.sG.div, {
            ...g,
            ref: L,
            style: {
              pointerEvents: k ? R ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, s.mK)(e.onFocusCapture, A.onFocusCapture),
            onBlurCapture: (0, s.mK)(e.onBlurCapture, A.onBlurCapture),
            onPointerDownCapture: (0, s.mK)(e.onPointerDownCapture, x.onPointerDownCapture)
          })
        });
      f.displayName = "DismissableLayer";
      var m = o.forwardRef((e, n) => {
        const t = o.useContext(l),
          r = o.useRef(null),
          s = (0, i.s)(n, r);
        return o.useEffect(() => {
          const e = r.current;
          if (e) return t.branches.add(e), () => {
            t.branches.delete(e)
          }
        }, [t.branches]), (0, a.jsx)(u.sG.div, {
          ...e,
          ref: s
        })
      });

      function p() {
        const e = o.useContext(l),
          [n, t] = o.useState(null);
        return o.useEffect(() => {
          if (n) return e.dismissableSurfaces.add(n), () => {
            e.dismissableSurfaces.delete(n)
          }
        }, [n, e.dismissableSurfaces]), t
      }
      m.displayName = "DismissableLayerBranch";
      var v = () => !0;

      function y() {
        const e = new CustomEvent(d);
        document.dispatchEvent(e)
      }

      function b(e, n, t, {
        discrete: r
      }) {
        const o = t.originalEvent.target,
          s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: t
          });
        n && o.addEventListener(e, n, {
          once: !0
        }), r ? (0, u.hO)(o, s) : o.dispatchEvent(s)
      }
      var w = f,
        E = m
    },
    7470(e, n, t) {
      t.d(n, {
        C: () => s
      });
      var r = t(4637),
        o = t(10198),
        s = e => {
          const {
            present: n,
            children: t
          } = e, s = function(e) {
            const [n, t] = r.useState(), s = r.useRef(null), u = r.useRef(e), c = r.useRef("none"), a = r.useRef(void 0), d = e ? "mounted" : "unmounted", [l, f] = function(e, n) {
              return r.useReducer((e, t) => n[e][t] ?? e, e)
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
              "mounted" === l ? (c.current = a.current ?? i(s.current), a.current = void 0) : c.current = "none"
            }, [l]), (0, o.N)(() => {
              const n = s.current,
                t = u.current;
              if (t !== e) {
                const r = c.current,
                  o = i(n);
                e ? (a.current = o, f("MOUNT")) : f("none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), u.current = e
              }
            }, [e, f]), (0, o.N)(() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const o = i(s.current).includes(CSS.escape(r.animationName));
                    if (r.target === n && o && (f("ANIMATION_END"), !u.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      })
                    }
                  },
                  o = e => {
                    e.target === n && (c.current = i(s.current))
                  };
                return n.addEventListener("animationstart", o), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", o), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
              }
              f("ANIMATION_END")
            }, [n, f]), {
              isPresent: ["mounted", "unmountSuspended"].includes(l),
              ref: r.useCallback(e => {
                if (e) {
                  const n = getComputedStyle(e);
                  s.current = n, a.current = i(n)
                } else s.current = null;
                t(e)
              }, [])
            }
          }(n), c = "function" == typeof t ? t({
            present: s.isPresent
          }) : r.Children.only(t), a = function(...e) {
            const n = r.useRef(e);
            return n.current = e, r.useCallback(e => {
              const t = n.current;
              let r = !1;
              const o = t.map(n => {
                const t = u(n, e);
                return r || "function" != typeof t || (r = !0), t
              });
              if (r) return () => {
                for (let e = 0; e < o.length; e++) {
                  const n = o[e];
                  "function" == typeof n ? n() : u(t[e], null)
                }
              }
            }, [])
          }(s.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(c));
          return "function" == typeof t || s.isPresent ? r.cloneElement(c, {
            ref: a
          }) : null
        };

      function u(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function i(e) {
        return e?.animationName || "none"
      }
      s.displayName = "Presence"
    },
    31270(e, n, t) {
      t.d(n, {
        hO: () => c,
        sG: () => i
      });
      var r = t(4637),
        o = t(84017),
        s = t(50486),
        u = t(39793),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, s.createSlot)(`Primitive.${n}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...s
              } = e, i = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, u.jsx)(i, {
                ...s,
                ref: r
              })
            });
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }, {});

      function c(e, n) {
        e && o.flushSync(() => e.dispatchEvent(n))
      }
    },
    94660(e, n, t) {
      t.d(n, {
        c: () => o
      });
      var r = t(4637);

      function o(e) {
        const n = r.useRef(e);
        return r.useEffect(() => {
          n.current = e
        }), r.useMemo(() => (...e) => n.current?.(...e), [])
      }
    },
    10198(e, n, t) {
      t.d(n, {
        N: () => o
      });
      var r = t(4637),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    }
  }
]);