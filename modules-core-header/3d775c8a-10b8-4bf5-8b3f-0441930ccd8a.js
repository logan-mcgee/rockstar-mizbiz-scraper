try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3d775c8a-10b8-4bf5-8b3f-0441930ccd8a", e._sentryDebugIdIdentifier = "sentry-dbid-3d775c8a-10b8-4bf5-8b3f-0441930ccd8a")
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
  [6254], {
    44752(e, n, t) {
      t.d(n, {
        mK: () => u
      });
      var r = Object.defineProperty,
        o = (e, n) => r(e, "name", {
          value: n,
          configurable: !0
        }),
        s = !("undefined" == typeof window || !window.document || !window.document.createElement);

      function u(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return o(function(r) {
          if (e?.(r), !1 === t || !r || !r.defaultPrevented) return n?.(r)
        }, "handleEvent")
      }

      function i(e) {
        if (!s) throw new Error("Cannot access document outside of the DOM");
        return e?.ownerDocument ?? document
      }

      function c(e) {
        return "IFRAME" === e.tagName
      }
      o(u, "composeEventHandlers"), o(function(e) {
        if (!s) throw new Error("Cannot access window outside of the DOM");
        return e?.ownerDocument?.defaultView ?? window
      }, "getOwnerWindow"), o(i, "getOwnerDocument"), o(function e(n, t = !1) {
        const {
          activeElement: r
        } = i(n);
        if (!r?.nodeName) return null;
        if (c(r) && r.contentDocument) return e(r.contentDocument.body, t);
        if (t) {
          const e = r.getAttribute("aria-activedescendant");
          if (e) {
            const n = i(r).getElementById(e);
            if (n) return n
          }
        }
        return r
      }, "getActiveElement"), o(c, "isFrame")
    },
    85049(e, n, t) {
      t.d(n, {
        s: () => c
      });
      var r = t(4637),
        o = Object.defineProperty,
        s = (e, n) => o(e, "name", {
          value: n,
          configurable: !0
        });

      function u(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function i(...e) {
        return n => {
          let t = !1;
          const r = e.map(e => {
            const r = u(e, n);
            return t || "function" != typeof r || (t = !0), r
          });
          if (t) return () => {
            for (let n = 0; n < r.length; n++) {
              const t = r[n];
              "function" == typeof t ? t() : u(e[n], null)
            }
          }
        }
      }

      function c(...e) {
        return r.useCallback(i(...e), e)
      }
      s(u, "setRef"), s(i, "composeRefs"), s(c, "useComposedRefs")
    },
    72579(e, n, t) {
      t.d(n, {
        A: () => i
      });
      var r = t(4637),
        o = t(39793),
        s = Object.defineProperty,
        u = (e, n) => s(e, "name", {
          value: n,
          configurable: !0
        });

      function i(e, n = []) {
        let t = [];

        function s(n, s) {
          const i = r.createContext(s);
          i.displayName = n + "Context";
          const c = t.length;
          t = [...t, s];
          const a = u(n => {
            const {
              scope: t,
              children: s,
              ...u
            } = n, a = t?.[e]?.[c] || i, d = r.useMemo(() => u, Object.values(u));
            return (0, o.jsx)(a.Provider, {
              value: d,
              children: s
            })
          }, "Provider");

          function d(t, o, u = {}) {
            const {
              optional: a = !1
            } = u, d = o?.[e]?.[c] || i, l = r.useContext(d);
            if (l) return l;
            if (void 0 !== s) return s;
            if (!a) throw new Error(`\`${t}\` must be used within \`${n}\``)
          }
          return a.displayName = n + "Provider", u(d, "useContext"), [a, d]
        }
        u(s, "createContext");
        const i = u(() => {
          const n = t.map(e => r.createContext(e));
          return u(function(t) {
            const o = t?.[e] || n;
            return r.useMemo(() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: o
              }
            }), [t, o])
          }, "useScope")
        }, "createScope");
        return i.scopeName = e, [s, c(i, ...n)]
      }

      function c(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = u(() => {
          const t = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return u(function(e) {
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
          }, "useComposedScopes")
        }, "createScope");
        return t.scopeName = n.scopeName, t
      }
      u(function(e, n) {
        const t = r.createContext(n);
        t.displayName = e + "Context";
        const s = u(e => {
          const {
            children: n,
            ...s
          } = e, u = r.useMemo(() => s, Object.values(s));
          return (0, o.jsx)(t.Provider, {
            value: u,
            children: n
          })
        }, "Provider");

        function i(o, s = {}) {
          const {
            optional: u = !1
          } = s, i = r.useContext(t);
          if (i) return i;
          if (void 0 !== n) return n;
          if (!u) throw new Error(`\`${o}\` must be used within \`${e}\``)
        }
        return s.displayName = e + "Provider", u(i, "useContext"), [s, i]
      }, "createContext"), u(i, "createContextScope"), u(c, "composeContextScopes")
    },
    78077(e, n, t) {
      t.d(n, {
        bL: () => O,
        e0: () => b,
        lg: () => D,
        qW: () => p
      });
      var r, o = t(4637),
        s = t(44752),
        u = t(41988),
        i = t(85049),
        c = t(7198),
        a = t(39793),
        d = Object.defineProperty,
        l = (e, n) => d(e, "name", {
          value: n,
          configurable: !0
        }),
        f = "dismissableLayer.update",
        m = o.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        p = o.forwardRef(l(function(e, n) {
          const {
            disableOutsidePointerEvents: t = !1,
            deferPointerDownOutside: d = !1,
            onEscapeKeyDown: p,
            onPointerDownOutside: v,
            onFocusOutside: b,
            onInteractOutside: w,
            onDismiss: g,
            ...O
          } = e, D = o.useContext(m), [C, P] = o.useState(null), N = C?.ownerDocument ?? globalThis?.document, [, S] = o.useState({}), L = (0, i.s)(n, P), R = Array.from(D.layers), [M] = [...D.layersWithOutsidePointerEventsDisabled].slice(-1), T = M ? R.indexOf(M) : -1, _ = C ? R.indexOf(C) : -1, k = D.layersWithOutsidePointerEventsDisabled.size > 0, x = _ >= T, I = o.useRef(!1), A = y(e => {
            v?.(e), w?.(e), e.defaultPrevented || g?.()
          }, {
            ownerDocument: N,
            deferPointerDownOutside: d,
            isDeferredPointerDownOutsideRef: I,
            dismissableSurfaces: D.dismissableSurfaces,
            shouldHandlePointerDownOutside: o.useCallback(e => {
              if (!(e instanceof Node)) return !1;
              const n = [...D.branches].some(n => n.contains(e));
              return x && !n
            }, [D.branches, x])
          }), j = E(e => {
            if (d && I.current) return;
            const n = e.target;
            [...D.branches].some(e => e.contains(n)) || (b?.(e), w?.(e), e.defaultPrevented || g?.())
          }, N), F = !!C && _ === R.length - 1, U = (0, c.c)(e => {
            "Escape" === e.key && (p?.(e), !e.defaultPrevented && g && (e.preventDefault(), g()))
          });
          return o.useEffect(() => {
            if (F) return N.addEventListener("keydown", U, {
              capture: !0
            }), () => N.removeEventListener("keydown", U, {
              capture: !0
            })
          }, [N, F, U]), o.useEffect(() => {
            if (C) return t && (0 === D.layersWithOutsidePointerEventsDisabled.size && (r = N.body.style.pointerEvents, N.body.style.pointerEvents = "none"), D.layersWithOutsidePointerEventsDisabled.add(C)), D.layers.add(C), h(), () => {
              t && (D.layersWithOutsidePointerEventsDisabled.delete(C), 0 === D.layersWithOutsidePointerEventsDisabled.size && (N.body.style.pointerEvents = r))
            }
          }, [C, N, t, D]), o.useEffect(() => () => {
            C && (D.layers.delete(C), D.layersWithOutsidePointerEventsDisabled.delete(C), h())
          }, [C, D]), o.useEffect(() => {
            const e = l(() => S({}), "handleUpdate");
            return document.addEventListener(f, e), () => document.removeEventListener(f, e)
          }, []), (0, a.jsx)(u.sG.div, {
            ...O,
            ref: L,
            style: {
              pointerEvents: k ? x ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, s.mK)(e.onFocusCapture, j.onFocusCapture),
            onBlurCapture: (0, s.mK)(e.onBlurCapture, j.onBlurCapture),
            onPointerDownCapture: (0, s.mK)(e.onPointerDownCapture, A.onPointerDownCapture)
          })
        }, "DismissableLayer")),
        v = o.forwardRef(l(function(e, n) {
          const t = o.useContext(m),
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
        }, "DismissableLayerBranch"));

      function b() {
        const e = o.useContext(m),
          [n, t] = o.useState(null);
        return o.useEffect(() => {
          if (n) return e.dismissableSurfaces.add(n), () => {
            e.dismissableSurfaces.delete(n)
          }
        }, [n, e.dismissableSurfaces]), t
      }
      l(b, "useDismissableLayerSurface");
      var w = l(() => !0, "IS_TRUE");

      function y(e, n) {
        const {
          ownerDocument: t = globalThis?.document,
          deferPointerDownOutside: r = !1,
          isDeferredPointerDownOutsideRef: s,
          dismissableSurfaces: u,
          shouldHandlePointerDownOutside: i = w
        } = n, a = (0, c.c)(e), d = o.useRef(!1), f = o.useRef(!1), m = o.useRef(new Map), p = o.useRef(() => {});
        return o.useEffect(() => {
          function e() {
            f.current = !1, s.current = !1, m.current.clear()
          }

          function n() {
            return Array.from(m.current.values()).some(Boolean)
          }

          function o(e) {
            if (!f.current) return;
            const n = e.target;
            n instanceof Node && [...u].some(e => e.contains(n)) || m.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
              f.current && p.current()
            }, 0)
          }

          function c(e) {
            f.current && m.current.set(e.type, !1)
          }
          l(e, "resetOutsideInteraction"), l(n, "isOutsideInteractionIntercepted"), l(o, "handleInteractionCapture"), l(c, "handleInteractionBubble");
          const v = l(o => {
              if (o.target && !d.current) {
                let u = function() {
                  t.removeEventListener("click", p.current);
                  const r = n();
                  e(), r || g("dismissableLayer.pointerDownOutside", a, c, {
                    discrete: !0
                  })
                };
                if (l(u, "handleAndDispatchPointerDownOutsideEvent"), !i(o.target)) return t.removeEventListener("click", p.current), e(), void(d.current = !1);
                const c = {
                  originalEvent: o
                };
                f.current = !0, s.current = r && 0 === o.button, m.current.clear(), r && 0 === o.button ? (t.removeEventListener("click", p.current), p.current = u, t.addEventListener("click", p.current, {
                  once: !0
                })) : u()
              } else t.removeEventListener("click", p.current), e();
              d.current = !1
            }, "handlePointerDown"),
            b = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
          for (const e of b) t.addEventListener(e, o, !0), t.addEventListener(e, c);
          const w = window.setTimeout(() => {
            t.addEventListener("pointerdown", v)
          }, 0);
          return () => {
            window.clearTimeout(w), t.removeEventListener("pointerdown", v), t.removeEventListener("click", p.current);
            for (const e of b) t.removeEventListener(e, o, !0), t.removeEventListener(e, c)
          }
        }, [t, a, r, s, u, i]), {
          onPointerDownCapture: l(() => d.current = !0, "onPointerDownCapture")
        }
      }

      function E(e, n = globalThis?.document) {
        const t = (0, c.c)(e),
          r = o.useRef(!1);
        return o.useEffect(() => {
          const e = l(e => {
            e.target && !r.current && g("dismissableLayer.focusOutside", t, {
              originalEvent: e
            }, {
              discrete: !1
            })
          }, "handleFocus");
          return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
        }, [n, t]), {
          onFocusCapture: l(() => r.current = !0, "onFocusCapture"),
          onBlurCapture: l(() => r.current = !1, "onBlurCapture")
        }
      }

      function h() {
        const e = new CustomEvent(f);
        document.dispatchEvent(e)
      }

      function g(e, n, t, {
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
      l(y, "usePointerDownOutside"), l(E, "useFocusOutside"), l(h, "dispatchUpdate"), l(g, "handleAndDispatchCustomEvent");
      var O = p,
        D = v
    },
    81432(e, n, t) {
      t.d(n, {
        C: () => c
      });
      var r = t(4637),
        o = t(9608),
        s = Object.defineProperty,
        u = (e, n) => s(e, "name", {
          value: n,
          configurable: !0
        });

      function i(e, n) {
        return r.useReducer((e, t) => n[e][t] ?? e, e)
      }
      u(i, "useStateMachine");
      var c = u(e => {
        const {
          present: n,
          children: t
        } = e, o = a(n), s = "function" == typeof t ? t({
          present: o.isPresent
        }) : r.Children.only(t), u = l(o.ref, m(s));
        return "function" == typeof t || o.isPresent ? r.cloneElement(s, {
          ref: u
        }) : null
      }, "Presence");

      function a(e) {
        const [n, t] = r.useState(), s = r.useRef(null), c = r.useRef(e), a = r.useRef("none"), d = r.useRef(void 0), l = e ? "mounted" : "unmounted", [m, p] = i(l, {
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
          "mounted" === m ? (a.current = d.current ?? f(s.current), d.current = void 0) : a.current = "none"
        }, [m]), (0, o.N)(() => {
          const n = s.current,
            t = c.current;
          if (t !== e) {
            const r = a.current,
              o = f(n);
            e ? (d.current = o, p("MOUNT")) : p("none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), c.current = e
          }
        }, [e, p]), (0, o.N)(() => {
          if (n) {
            let e;
            const t = n.ownerDocument.defaultView ?? window,
              r = u(r => {
                const o = f(s.current).includes(CSS.escape(r.animationName));
                if (r.target === n && o && (p("ANIMATION_END"), !c.current)) {
                  const r = n.style.animationFillMode;
                  n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                    "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                  })
                }
              }, "handleAnimationEnd"),
              o = u(e => {
                e.target === n && (a.current = f(s.current))
              }, "handleAnimationStart");
            return n.addEventListener("animationstart", o), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
              t.clearTimeout(e), n.removeEventListener("animationstart", o), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
            }
          }
          p("ANIMATION_END")
        }, [n, p]), {
          isPresent: ["mounted", "unmountSuspended"].includes(m),
          ref: r.useCallback(e => {
            if (e) {
              const n = getComputedStyle(e);
              s.current = n, d.current = f(n)
            } else s.current = null;
            t(e)
          }, [])
        }
      }

      function d(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function l(...e) {
        const n = r.useRef(e);
        return n.current = e, r.useCallback(e => {
          const t = n.current;
          let r = !1;
          const o = t.map(n => {
            const t = d(n, e);
            return r || "function" != typeof t || (r = !0), t
          });
          if (r) return () => {
            for (let e = 0; e < o.length; e++) {
              const n = o[e];
              "function" == typeof n ? n() : d(t[e], null)
            }
          }
        }, [])
      }

      function f(e) {
        return e?.animationName || "none"
      }

      function m(e) {
        let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          t = n && "isReactWarning" in n && n.isReactWarning;
        return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
      }
      u(a, "usePresence"), u(d, "setRef"), u(l, "useStableComposedRefs"), u(f, "getAnimationName"), u(m, "getElementRef")
    },
    41988(e, n, t) {
      t.d(n, {
        hO: () => a,
        sG: () => c
      });
      var r = t(4637),
        o = t(84017),
        s = t(49481),
        u = t(39793),
        i = Object.defineProperty,
        c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
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

      function a(e, n) {
        e && o.flushSync(() => e.dispatchEvent(n))
      }
      i(a, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    7198(e, n, t) {
      t.d(n, {
        c: () => o
      });
      var r = t(4637);

      function o(e) {
        const n = r.useRef(e);
        return r.useEffect(() => {
          n.current = e
        }), r.useMemo(() => (...e) => n.current?.(...e), [])
      }(0, Object.defineProperty)(o, "name", {
        value: "useCallbackRef",
        configurable: !0
      })
    },
    9608(e, n, t) {
      t.d(n, {
        N: () => o
      });
      var r = t(4637),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    }
  }
]);