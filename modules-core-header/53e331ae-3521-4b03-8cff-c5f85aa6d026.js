try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "53e331ae-3521-4b03-8cff-c5f85aa6d026", e._sentryDebugIdIdentifier = "sentry-dbid-53e331ae-3521-4b03-8cff-c5f85aa6d026")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "2a74753c0c949d4b2cbcf6cb65742761c430cda0",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2a74753c0c949d4b2cbcf6cb65742761c430cda0"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [6858], {
    19202: (e, n, t) => {
      t.d(n, {
        qW: () => f
      });
      var r, o = t(71127),
        s = t(65998),
        i = t(85100),
        u = t(86410),
        a = t(27734),
        c = t(25854),
        d = "dismissableLayer.update",
        l = o.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        f = o.forwardRef(((e, n) => {
          const {
            disableOutsidePointerEvents: t = !1,
            onEscapeKeyDown: f,
            onPointerDownOutside: v,
            onFocusOutside: y,
            onInteractOutside: b,
            onDismiss: E,
            ...w
          } = e, h = o.useContext(l), [g, N] = o.useState(null), O = g?.ownerDocument ?? globalThis?.document, [, C] = o.useState({}), D = (0, u.s)(n, (e => N(e))), P = Array.from(h.layers), [T] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1), M = P.indexOf(T), _ = g ? P.indexOf(g) : -1, L = h.layersWithOutsidePointerEventsDisabled.size > 0, k = _ >= M, R = function(e, n = globalThis?.document) {
            const t = (0, a.c)(e),
              r = o.useRef(!1),
              s = o.useRef((() => {}));
            return o.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      p("dismissableLayer.pointerDownOutside", t, o, {
                        discrete: !0
                      })
                    };
                    const o = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (n.removeEventListener("click", s.current), s.current = r, n.addEventListener("click", s.current, {
                      once: !0
                    })) : r()
                  } else n.removeEventListener("click", s.current);
                  r.current = !1
                },
                o = window.setTimeout((() => {
                  n.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(o), n.removeEventListener("pointerdown", e), n.removeEventListener("click", s.current)
              }
            }), [n, t]), {
              onPointerDownCapture: () => r.current = !0
            }
          }((e => {
            const n = e.target,
              t = [...h.branches].some((e => e.contains(n)));
            k && !t && (v?.(e), b?.(e), e.defaultPrevented || E?.())
          }), O), S = function(e, n = globalThis?.document) {
            const t = (0, a.c)(e),
              r = o.useRef(!1);
            return o.useEffect((() => {
              const e = e => {
                e.target && !r.current && p("dismissableLayer.focusOutside", t, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
            }), [n, t]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }((e => {
            const n = e.target;
            [...h.branches].some((e => e.contains(n))) || (y?.(e), b?.(e), e.defaultPrevented || E?.())
          }), O);
          return function(e, n = globalThis?.document) {
            const t = (0, a.c)(e);
            o.useEffect((() => {
              const e = e => {
                "Escape" === e.key && t(e)
              };
              return n.addEventListener("keydown", e, {
                capture: !0
              }), () => n.removeEventListener("keydown", e, {
                capture: !0
              })
            }), [t, n])
          }((e => {
            _ === h.layers.size - 1 && (f?.(e), !e.defaultPrevented && E && (e.preventDefault(), E()))
          }), O), o.useEffect((() => {
            if (g) return t && (0 === h.layersWithOutsidePointerEventsDisabled.size && (r = O.body.style.pointerEvents, O.body.style.pointerEvents = "none"), h.layersWithOutsidePointerEventsDisabled.add(g)), h.layers.add(g), m(), () => {
              t && 1 === h.layersWithOutsidePointerEventsDisabled.size && (O.body.style.pointerEvents = r)
            }
          }), [g, O, t, h]), o.useEffect((() => () => {
            g && (h.layers.delete(g), h.layersWithOutsidePointerEventsDisabled.delete(g), m())
          }), [g, h]), o.useEffect((() => {
            const e = () => C({});
            return document.addEventListener(d, e), () => document.removeEventListener(d, e)
          }), []), (0, c.jsx)(i.sG.div, {
            ...w,
            ref: D,
            style: {
              pointerEvents: L ? k ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, s.m)(e.onFocusCapture, S.onFocusCapture),
            onBlurCapture: (0, s.m)(e.onBlurCapture, S.onBlurCapture),
            onPointerDownCapture: (0, s.m)(e.onPointerDownCapture, R.onPointerDownCapture)
          })
        }));

      function m() {
        const e = new CustomEvent(d);
        document.dispatchEvent(e)
      }

      function p(e, n, t, {
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
        }), r ? (0, i.hO)(o, s) : o.dispatchEvent(s)
      }
      f.displayName = "DismissableLayer", o.forwardRef(((e, n) => {
        const t = o.useContext(l),
          r = o.useRef(null),
          s = (0, u.s)(n, r);
        return o.useEffect((() => {
          const e = r.current;
          if (e) return t.branches.add(e), () => {
            t.branches.delete(e)
          }
        }), [t.branches]), (0, c.jsx)(i.sG.div, {
          ...e,
          ref: s
        })
      })).displayName = "DismissableLayerBranch"
    },
    27734: (e, n, t) => {
      t.d(n, {
        c: () => o
      });
      var r = t(71127);

      function o(e) {
        const n = r.useRef(e);
        return r.useEffect((() => {
          n.current = e
        })), r.useMemo((() => (...e) => n.current?.(...e)), [])
      }
    },
    29818: (e, n, t) => {
      t.d(n, {
        A: () => i,
        q: () => s
      });
      var r = t(71127),
        o = t(25854);

      function s(e, n) {
        const t = r.createContext(n),
          s = e => {
            const {
              children: n,
              ...s
            } = e, i = r.useMemo((() => s), Object.values(s));
            return (0, o.jsx)(t.Provider, {
              value: i,
              children: n
            })
          };
        return s.displayName = e + "Provider", [s, function(o) {
          const s = r.useContext(t);
          if (s) return s;
          if (void 0 !== n) return n;
          throw new Error(`\`${o}\` must be used within \`${e}\``)
        }]
      }

      function i(e, n = []) {
        let t = [];
        const s = () => {
          const n = t.map((e => r.createContext(e)));
          return function(t) {
            const o = t?.[e] || n;
            return r.useMemo((() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: o
              }
            })), [t, o])
          }
        };
        return s.scopeName = e, [function(n, s) {
          const i = r.createContext(s),
            u = t.length;
          t = [...t, s];
          const a = n => {
            const {
              scope: t,
              children: s,
              ...a
            } = n, c = t?.[e]?.[u] || i, d = r.useMemo((() => a), Object.values(a));
            return (0, o.jsx)(c.Provider, {
              value: d,
              children: s
            })
          };
          return a.displayName = n + "Provider", [a, function(t, o) {
            const a = o?.[e]?.[u] || i,
              c = r.useContext(a);
            if (c) return c;
            if (void 0 !== s) return s;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, u(s, ...n)]
      }

      function u(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const o = t.reduce(((n, {
              useScope: t,
              scopeName: r
            }) => ({
              ...n,
              ...t(e)[`__scope${r}`]
            })), {});
            return r.useMemo((() => ({
              [`__scope${n.scopeName}`]: o
            })), [o])
          }
        };
        return t.scopeName = n.scopeName, t
      }
    },
    36146: (e, n, t) => {
      t.d(n, {
        C: () => i
      });
      var r = t(71127),
        o = t(86410),
        s = t(85307),
        i = e => {
          const {
            present: n,
            children: t
          } = e, i = function(e) {
            const [n, t] = r.useState(), o = r.useRef(null), i = r.useRef(e), a = r.useRef("none"), c = e ? "mounted" : "unmounted", [d, l] = function(e, n) {
              return r.useReducer(((e, t) => n[e][t] ?? e), e)
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
              const e = u(o.current);
              a.current = "mounted" === d ? e : "none"
            }), [d]), (0, s.N)((() => {
              const n = o.current,
                t = i.current;
              if (t !== e) {
                const r = a.current,
                  o = u(n);
                l(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
              }
            }), [e, l]), (0, s.N)((() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const s = u(o.current).includes(r.animationName);
                    if (r.target === n && s && (l("ANIMATION_END"), !i.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout((() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      }))
                    }
                  },
                  s = e => {
                    e.target === n && (a.current = u(o.current))
                  };
                return n.addEventListener("animationstart", s), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", s), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
              }
              l("ANIMATION_END")
            }), [n, l]), {
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: r.useCallback((e => {
                o.current = e ? getComputedStyle(e) : null, t(e)
              }), [])
            }
          }(n), a = "function" == typeof t ? t({
            present: i.isPresent
          }) : r.Children.only(t), c = (0, o.s)(i.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(a));
          return "function" == typeof t || i.isPresent ? r.cloneElement(a, {
            ref: c
          }) : null
        };

      function u(e) {
        return e?.animationName || "none"
      }
      i.displayName = "Presence"
    },
    65998: (e, n, t) => {
      function r(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }
      t.d(n, {
        m: () => r
      })
    },
    85100: (e, n, t) => {
      t.d(n, {
        hO: () => a,
        sG: () => u
      });
      var r = t(71127),
        o = t(18429),
        s = t(21222),
        i = t(25854),
        u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, n) => {
          const t = (0, s.createSlot)(`Primitive.${n}`),
            o = r.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...s
              } = e, u = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(u, {
                ...s,
                ref: r
              })
            }));
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }), {});

      function a(e, n) {
        e && o.flushSync((() => e.dispatchEvent(n)))
      }
    },
    85307: (e, n, t) => {
      t.d(n, {
        N: () => o
      });
      var r = t(71127),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    86410: (e, n, t) => {
      t.d(n, {
        s: () => i,
        t: () => s
      });
      var r = t(71127);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function s(...e) {
        return n => {
          let t = !1;
          const r = e.map((e => {
            const r = o(e, n);
            return t || "function" != typeof r || (t = !0), r
          }));
          if (t) return () => {
            for (let n = 0; n < r.length; n++) {
              const t = r[n];
              "function" == typeof t ? t() : o(e[n], null)
            }
          }
        }
      }

      function i(...e) {
        return r.useCallback(s(...e), e)
      }
    }
  }
]);