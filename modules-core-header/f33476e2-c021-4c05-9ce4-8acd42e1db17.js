try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f33476e2-c021-4c05-9ce4-8acd42e1db17", e._sentryDebugIdIdentifier = "sentry-dbid-f33476e2-c021-4c05-9ce4-8acd42e1db17")
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
  [9550], {
    39467(e, n, t) {
      function r(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }
      t.d(n, {
        mK: () => r
      }), "undefined" == typeof window || !window.document || window.document.createElement
    },
    64239(e, n, t) {
      t.d(n, {
        s: () => u,
        t: () => s
      });
      var r = t(4637);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function s(...e) {
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
      }

      function u(...e) {
        return r.useCallback(s(...e), e)
      }
    },
    54958(e, n, t) {
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
          return c.displayName = n + "Provider", [c, function(t, o) {
            const c = o?.[e]?.[i] || u,
              a = r.useContext(c);
            if (a) return a;
            if (void 0 !== s) return s;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
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
    13588(e, n, t) {
      t.d(n, {
        lg: () => w,
        qW: () => f,
        bL: () => b,
        e0: () => p
      });
      var r, o = t(4637),
        s = t(39467),
        u = t(80082),
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
            onFocusOutside: b,
            onInteractOutside: w,
            onDismiss: E,
            ...h
          } = e, g = o.useContext(l), [N, O] = o.useState(null), D = N?.ownerDocument ?? globalThis?.document, [, P] = o.useState({}), C = (0, i.s)(n, e => O(e)), L = Array.from(g.layers), [T] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), M = L.indexOf(T), S = N ? L.indexOf(N) : -1, _ = g.layersWithOutsidePointerEventsDisabled.size > 0, k = S >= M, R = o.useRef(!1), I = function(e, n) {
            const {
              ownerDocument: t = globalThis?.document,
              deferPointerDownOutside: r = !1,
              isDeferredPointerDownOutsideRef: s,
              dismissableSurfaces: u
            } = n, i = (0, c.c)(e), a = o.useRef(!1), d = o.useRef(!1), l = o.useRef(new Map), f = o.useRef(() => {});
            return o.useEffect(() => {
              function e() {
                d.current = !1, s.current = !1, l.current.clear()
              }

              function n(e) {
                if (!d.current) return;
                const n = e.target;
                n instanceof Node && [...u].some(e => e.contains(n)) || l.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
                  d.current && f.current()
                }, 0)
              }

              function o(e) {
                d.current && l.current.set(e.type, !1)
              }
              const c = n => {
                  if (n.target && !a.current) {
                    let o = function() {
                      t.removeEventListener("click", f.current);
                      const n = Array.from(l.current.values()).some(Boolean);
                      e(), n || y("dismissableLayer.pointerDownOutside", i, u, {
                        discrete: !0
                      })
                    };
                    const u = {
                      originalEvent: n
                    };
                    d.current = !0, s.current = r && 0 === n.button, l.current.clear(), r && 0 === n.button ? (t.removeEventListener("click", f.current), f.current = o, t.addEventListener("click", f.current, {
                      once: !0
                    })) : o()
                  } else t.removeEventListener("click", f.current), e();
                  a.current = !1
                },
                m = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
              for (const e of m) t.addEventListener(e, n, !0), t.addEventListener(e, o);
              const p = window.setTimeout(() => {
                t.addEventListener("pointerdown", c)
              }, 0);
              return () => {
                window.clearTimeout(p), t.removeEventListener("pointerdown", c), t.removeEventListener("click", f.current);
                for (const e of m) t.removeEventListener(e, n, !0), t.removeEventListener(e, o)
              }
            }, [t, i, r, s, u]), {
              onPointerDownCapture: () => a.current = !0
            }
          }(e => {
            const n = e.target;
            if (!(n instanceof Node)) return;
            const t = [...g.branches].some(e => e.contains(n));
            k && !t && (p?.(e), w?.(e), e.defaultPrevented || E?.())
          }, {
            ownerDocument: D,
            deferPointerDownOutside: f,
            isDeferredPointerDownOutsideRef: R,
            dismissableSurfaces: g.dismissableSurfaces
          }), x = function(e, n = globalThis?.document) {
            const t = (0, c.c)(e),
              r = o.useRef(!1);
            return o.useEffect(() => {
              const e = e => {
                e.target && !r.current && y("dismissableLayer.focusOutside", t, {
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
            if (f && R.current) return;
            const n = e.target;
            [...g.branches].some(e => e.contains(n)) || (b?.(e), w?.(e), e.defaultPrevented || E?.())
          }, D);
          return function(e, n = globalThis?.document) {
            const t = (0, c.c)(e);
            o.useEffect(() => {
              const e = e => {
                "Escape" === e.key && t(e)
              };
              return n.addEventListener("keydown", e, {
                capture: !0
              }), () => n.removeEventListener("keydown", e, {
                capture: !0
              })
            }, [t, n])
          }(e => {
            S === g.layers.size - 1 && (m?.(e), !e.defaultPrevented && E && (e.preventDefault(), E()))
          }, D), o.useEffect(() => {
            if (N) return t && (0 === g.layersWithOutsidePointerEventsDisabled.size && (r = D.body.style.pointerEvents, D.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(N)), g.layers.add(N), v(), () => {
              t && (g.layersWithOutsidePointerEventsDisabled.delete(N), 0 === g.layersWithOutsidePointerEventsDisabled.size && (D.body.style.pointerEvents = r))
            }
          }, [N, D, t, g]), o.useEffect(() => () => {
            N && (g.layers.delete(N), g.layersWithOutsidePointerEventsDisabled.delete(N), v())
          }, [N, g]), o.useEffect(() => {
            const e = () => P({});
            return document.addEventListener(d, e), () => document.removeEventListener(d, e)
          }, []), (0, a.jsx)(u.sG.div, {
            ...h,
            ref: C,
            style: {
              pointerEvents: _ ? k ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, s.mK)(e.onFocusCapture, x.onFocusCapture),
            onBlurCapture: (0, s.mK)(e.onBlurCapture, x.onBlurCapture),
            onPointerDownCapture: (0, s.mK)(e.onPointerDownCapture, I.onPointerDownCapture)
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

      function v() {
        const e = new CustomEvent(d);
        document.dispatchEvent(e)
      }

      function y(e, n, t, {
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
      m.displayName = "DismissableLayerBranch";
      var b = f,
        w = m
    },
    66624(e, n, t) {
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
            const [n, t] = r.useState(), s = r.useRef(null), u = r.useRef(e), c = r.useRef("none"), a = e ? "mounted" : "unmounted", [d, l] = function(e, n) {
              return r.useReducer((e, t) => n[e][t] ?? e, e)
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
              const e = i(s.current);
              c.current = "mounted" === d ? e : "none"
            }, [d]), (0, o.N)(() => {
              const n = s.current,
                t = u.current;
              if (t !== e) {
                const r = c.current,
                  o = i(n);
                l(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), u.current = e
              }
            }, [e, l]), (0, o.N)(() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const o = i(s.current).includes(CSS.escape(r.animationName));
                    if (r.target === n && o && (l("ANIMATION_END"), !u.current)) {
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
              l("ANIMATION_END")
            }, [n, l]), {
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: r.useCallback(e => {
                s.current = e ? getComputedStyle(e) : null, t(e)
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
    80082(e, n, t) {
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