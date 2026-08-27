try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fb578127-be21-45f4-8b78-5f30a9ad5511", e._sentryDebugIdIdentifier = "sentry-dbid-fb578127-be21-45f4-8b78-5f30a9ad5511")
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
  [269, 518, 2174, 4555, 6936, 8137, 9793], {
    94931(e, t, n) {
      var o = n(4637),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        u = Object.prototype.hasOwnProperty,
        c = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function a(e, t, n) {
        var o, s = {},
          a = null,
          d = null;
        for (o in void 0 !== n && (a = "" + n), void 0 !== t.key && (a = "" + t.key), void 0 !== t.ref && (d = t.ref), t) u.call(t, o) && !i.hasOwnProperty(o) && (s[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === s[o] && (s[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: a,
          ref: d,
          props: s,
          _owner: c.current
        }
      }
      t.Fragment = s, t.jsx = a, t.jsxs = a
    },
    39793(e, t, n) {
      e.exports = n(94931)
    },
    85049(e, t, n) {
      n.d(t, {
        s: () => i
      });
      var o = n(4637),
        r = Object.defineProperty,
        s = (e, t) => r(e, "name", {
          value: t,
          configurable: !0
        });

      function u(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function c(...e) {
        return t => {
          let n = !1;
          const o = e.map(e => {
            const o = u(e, t);
            return n || "function" != typeof o || (n = !0), o
          });
          if (n) return () => {
            for (let t = 0; t < o.length; t++) {
              const n = o[t];
              "function" == typeof n ? n() : u(e[t], null)
            }
          }
        }
      }

      function i(...e) {
        return o.useCallback(c(...e), e)
      }
      s(u, "setRef"), s(c, "composeRefs"), s(i, "useComposedRefs")
    },
    518(e, t, n) {
      n.r(t), n.d(t, {
        FocusScope: () => p,
        Root: () => T
      });
      var o = n(4637),
        r = n(85049),
        s = n(41988),
        u = n(7198),
        c = n(39793),
        i = Object.defineProperty,
        a = (e, t) => i(e, "name", {
          value: t,
          configurable: !0
        }),
        d = "focusScope.autoFocusOnMount",
        f = "focusScope.autoFocusOnUnmount",
        l = {
          bubbles: !1,
          cancelable: !0
        },
        p = o.forwardRef(a(function(e, t) {
          const {
            loop: n = !1,
            trapped: i = !1,
            onMountAutoFocus: p,
            onUnmountAutoFocus: v,
            ...E
          } = e, [h, w] = o.useState(null), S = (0, u.c)(p), T = (0, u.c)(v), R = o.useRef(null), O = (0, r.s)(t, w), C = o.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          o.useEffect(() => {
            if (i) {
              let e = function(e) {
                  if (C.paused || !h) return;
                  const t = e.target;
                  h.contains(t) ? R.current = t : g(R.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (C.paused || !h) return;
                  const t = e.relatedTarget;
                  null !== t && (h.contains(t) || g(R.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && g(h)
                };
              a(e, "handleFocusIn"), a(t, "handleFocusOut"), a(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const o = new MutationObserver(n);
              return h && o.observe(h, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), o.disconnect()
              }
            }
          }, [i, h, C.paused]), o.useEffect(() => {
            if (h) {
              _.add(C);
              const e = document.activeElement;
              if (!h.contains(e)) {
                const t = new CustomEvent(d, l);
                h.addEventListener(d, S), h.dispatchEvent(t), t.defaultPrevented || (b(k(y(h)), {
                  select: !0
                }), document.activeElement === e && g(h))
              }
              return () => {
                h.removeEventListener(d, S), setTimeout(() => {
                  const t = new CustomEvent(f, l);
                  h.addEventListener(f, T), h.dispatchEvent(t), t.defaultPrevented || g(e ?? document.body, {
                    select: !0
                  }), h.removeEventListener(f, T), _.remove(C)
                }, 0)
              }
            }
          }, [h, S, T, C]);
          const F = o.useCallback(e => {
            if (!n && !i) return;
            if (C.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, s] = m(t);
              r && s ? e.shiftKey || o !== s ? e.shiftKey && o === r && (e.preventDefault(), n && g(s, {
                select: !0
              })) : (e.preventDefault(), n && g(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [n, i, C.paused]);
          return (0, c.jsx)(s.sG.div, {
            tabIndex: -1,
            ...E,
            ref: O,
            onKeyDown: F
          })
        }, "FocusScope"));

      function b(e, {
        select: t = !1
      } = {}) {
        const n = document.activeElement;
        for (const o of e)
          if (g(o, {
              select: t
            }), document.activeElement !== n) return
      }

      function m(e) {
        const t = y(e);
        return [v(t, e), v(t.reverse(), e)]
      }

      function y(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: a(e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function v(e, t) {
        const n = "function" == typeof t.checkVisibility && t.checkVisibility({
          checkVisibilityCSS: !0
        });
        for (const o of e)
          if (!(n ? !o.checkVisibility({
              checkVisibilityCSS: !0
            }) : E(o, {
              upTo: t
            }))) return o
      }

      function E(e, {
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

      function h(e) {
        return e instanceof HTMLInputElement && "select" in e
      }

      function g(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && h(e) && t && e.select()
        }
      }
      a(b, "focusFirst"), a(m, "getTabbableEdges"), a(y, "getTabbableCandidates"), a(v, "findVisible"), a(E, "isHidden"), a(h, "isSelectableInput"), a(g, "focus");
      var _ = w();

      function w() {
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
      }

      function S(e, t) {
        const n = [...e],
          o = n.indexOf(t);
        return -1 !== o && n.splice(o, 1), n
      }

      function k(e) {
        return e.filter(e => "A" !== e.tagName)
      }
      a(w, "createFocusScopesStack"), a(S, "arrayRemove"), a(k, "removeLinks");
      var T = p
    },
    41988(e, t, n) {
      n.d(t, {
        hO: () => a,
        sG: () => i
      });
      var o = n(4637),
        r = n(84017),
        s = n(49481),
        u = n(39793),
        c = Object.defineProperty,
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, s.createSlot)(`Primitive.${t}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...s
              } = e, c = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, u.jsx)(c, {
                ...s,
                ref: o
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {});

      function a(e, t) {
        e && r.flushSync(() => e.dispatchEvent(t))
      }
      c(a, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    7198(e, t, n) {
      n.d(t, {
        c: () => r
      });
      var o = n(4637);

      function r(e) {
        const t = o.useRef(e);
        return o.useEffect(() => {
          t.current = e
        }), o.useMemo(() => (...e) => t.current?.(...e), [])
      }(0, Object.defineProperty)(r, "name", {
        value: "useCallbackRef",
        configurable: !0
      })
    }
  }
]);