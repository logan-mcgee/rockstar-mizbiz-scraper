! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e8bc7ecf-48f9-47a5-8e1c-596aec421de7", e._sentryDebugIdIdentifier = "sentry-dbid-e8bc7ecf-48f9-47a5-8e1c-596aec421de7")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [3981], {
    19202: (e, t, n) => {
      n.d(t, {
        qW: () => f
      });
      var r, o = n(71127),
        s = n(65998),
        u = n(85100),
        a = n(86410),
        i = n(27734),
        c = n(25854),
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
            onFocusOutside: y,
            onInteractOutside: b,
            onDismiss: E,
            ...h
          } = e, w = o.useContext(l), [g, N] = o.useState(null), M = g?.ownerDocument ?? globalThis?.document, [, _] = o.useState({}), O = (0, a.s)(t, (e => N(e))), C = Array.from(w.layers), [P] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1), D = C.indexOf(P), T = g ? C.indexOf(g) : -1, L = w.layersWithOutsidePointerEventsDisabled.size > 0, k = T >= D, R = function(e, t = globalThis?.document) {
            const n = (0, i.c)(e),
              r = o.useRef(!1),
              s = o.useRef((() => {}));
            return o.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      p("dismissableLayer.pointerDownOutside", n, o, {
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
            k && !n && (v?.(e), b?.(e), e.defaultPrevented || E?.())
          }), M), S = function(e, t = globalThis?.document) {
            const n = (0, i.c)(e),
              r = o.useRef(!1);
            return o.useEffect((() => {
              const e = e => {
                e.target && !r.current && p("dismissableLayer.focusOutside", n, {
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
            [...w.branches].some((e => e.contains(t))) || (y?.(e), b?.(e), e.defaultPrevented || E?.())
          }), M);
          return function(e, t = globalThis?.document) {
            const n = (0, i.c)(e);
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
            T === w.layers.size - 1 && (f?.(e), !e.defaultPrevented && E && (e.preventDefault(), E()))
          }), M), o.useEffect((() => {
            if (g) return n && (0 === w.layersWithOutsidePointerEventsDisabled.size && (r = M.body.style.pointerEvents, M.body.style.pointerEvents = "none"), w.layersWithOutsidePointerEventsDisabled.add(g)), w.layers.add(g), m(), () => {
              n && 1 === w.layersWithOutsidePointerEventsDisabled.size && (M.body.style.pointerEvents = r)
            }
          }), [g, M, n, w]), o.useEffect((() => () => {
            g && (w.layers.delete(g), w.layersWithOutsidePointerEventsDisabled.delete(g), m())
          }), [g, w]), o.useEffect((() => {
            const e = () => _({});
            return document.addEventListener(d, e), () => document.removeEventListener(d, e)
          }), []), (0, c.jsx)(u.sG.div, {
            ...h,
            ref: O,
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

      function p(e, t, n, {
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
        }), r ? (0, u.hO)(o, s) : o.dispatchEvent(s)
      }
      f.displayName = "DismissableLayer", o.forwardRef(((e, t) => {
        const n = o.useContext(l),
          r = o.useRef(null),
          s = (0, a.s)(t, r);
        return o.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, c.jsx)(u.sG.div, {
          ...e,
          ref: s
        })
      })).displayName = "DismissableLayerBranch"
    },
    27734: (e, t, n) => {
      n.d(t, {
        c: () => o
      });
      var r = n(71127);

      function o(e) {
        const t = r.useRef(e);
        return r.useEffect((() => {
          t.current = e
        })), r.useMemo((() => (...e) => t.current?.(...e)), [])
      }
    },
    29818: (e, t, n) => {
      n.d(t, {
        A: () => u,
        q: () => s
      });
      var r = n(71127),
        o = n(25854);

      function s(e, t) {
        const n = r.createContext(t),
          s = e => {
            const {
              children: t,
              ...s
            } = e, u = r.useMemo((() => s), Object.values(s));
            return (0, o.jsx)(n.Provider, {
              value: u,
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

      function u(e, t = []) {
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
          const u = r.createContext(s),
            a = n.length;
          n = [...n, s];
          const i = t => {
            const {
              scope: n,
              children: s,
              ...i
            } = t, c = n?.[e]?.[a] || u, d = r.useMemo((() => i), Object.values(i));
            return (0, o.jsx)(c.Provider, {
              value: d,
              children: s
            })
          };
          return i.displayName = t + "Provider", [i, function(n, o) {
            const i = o?.[e]?.[a] || u,
              c = r.useContext(i);
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
    36146: (e, t, n) => {
      n.d(t, {
        C: () => u
      });
      var r = n(71127),
        o = n(86410),
        s = n(85307),
        u = e => {
          const {
            present: t,
            children: n
          } = e, u = function(e) {
            const [t, n] = r.useState(), o = r.useRef(null), u = r.useRef(e), i = r.useRef("none"), c = e ? "mounted" : "unmounted", [d, l] = function(e, t) {
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
              i.current = "mounted" === d ? e : "none"
            }), [d]), (0, s.N)((() => {
              const t = o.current,
                n = u.current;
              if (n !== e) {
                const r = i.current,
                  o = a(t);
                l(e ? "MOUNT" : "none" === o || "none" === t?.display ? "UNMOUNT" : n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), u.current = e
              }
            }), [e, l]), (0, s.N)((() => {
              if (t) {
                let e;
                const n = t.ownerDocument.defaultView ?? window,
                  r = r => {
                    const s = a(o.current).includes(r.animationName);
                    if (r.target === t && s && (l("ANIMATION_END"), !u.current)) {
                      const r = t.style.animationFillMode;
                      t.style.animationFillMode = "forwards", e = n.setTimeout((() => {
                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                      }))
                    }
                  },
                  s = e => {
                    e.target === t && (i.current = a(o.current))
                  };
                return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
                  n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r)
                }
              }
              l("ANIMATION_END")
            }), [t, l]), {
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: r.useCallback((e => {
                o.current = e ? getComputedStyle(e) : null, n(e)
              }), [])
            }
          }(t), i = "function" == typeof n ? n({
            present: u.isPresent
          }) : r.Children.only(n), c = (0, o.s)(u.ref, function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(i));
          return "function" == typeof n || u.isPresent ? r.cloneElement(i, {
            ref: c
          }) : null
        };

      function a(e) {
        return e?.animationName || "none"
      }
      u.displayName = "Presence"
    },
    52806: (e, t, n) => {
      var r;
      n.d(t, {
        i: () => a
      });
      var o = n(71127),
        s = n(85307),
        u = (r || (r = n.t(o, 2)))[" useInsertionEffect ".trim().toString()] || s.N;

      function a({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [s, a, i] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = o.useState(e), s = o.useRef(n), a = o.useRef(t);
          return u((() => {
            a.current = t
          }), [t]), o.useEffect((() => {
            s.current !== n && (a.current?.(n), s.current = n)
          }), [n, s]), [n, r, a]
        }({
          defaultProp: t,
          onChange: n
        }), c = void 0 !== e, d = c ? e : s; {
          const t = o.useRef(void 0 !== e);
          o.useEffect((() => {
            const e = t.current;
            if (e !== c) {
              const t = e ? "controlled" : "uncontrolled",
                n = c ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = c
          }), [c, r])
        }
        const l = o.useCallback((t => {
          if (c) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && i.current?.(n)
          } else a(t)
        }), [c, e, a, i]);
        return [d, l]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    65998: (e, t, n) => {
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
    85100: (e, t, n) => {
      n.d(t, {
        hO: () => i,
        sG: () => a
      });
      var r = n(71127),
        o = n(18429),
        s = n(21222),
        u = n(25854),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, t) => {
          const n = (0, s.createSlot)(`Primitive.${t}`),
            o = r.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...s
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, u.jsx)(a, {
                ...s,
                ref: r
              })
            }));
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }), {});

      function i(e, t) {
        e && o.flushSync((() => e.dispatchEvent(t)))
      }
    },
    85307: (e, t, n) => {
      n.d(t, {
        N: () => o
      });
      var r = n(71127),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    86410: (e, t, n) => {
      n.d(t, {
        s: () => u,
        t: () => s
      });
      var r = n(71127);

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

      function u(...e) {
        return r.useCallback(s(...e), e)
      }
    }
  }
]);