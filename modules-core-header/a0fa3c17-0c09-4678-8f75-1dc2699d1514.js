try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a0fa3c17-0c09-4678-8f75-1dc2699d1514", e._sentryDebugIdIdentifier = "sentry-dbid-a0fa3c17-0c09-4678-8f75-1dc2699d1514")
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
  [8137], {
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

      function c(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function u(...e) {
        return t => {
          let n = !1;
          const o = e.map(e => {
            const o = c(e, t);
            return n || "function" != typeof o || (n = !0), o
          });
          if (n) return () => {
            for (let t = 0; t < o.length; t++) {
              const n = o[t];
              "function" == typeof n ? n() : c(e[t], null)
            }
          }
        }
      }

      function i(...e) {
        return o.useCallback(u(...e), e)
      }
      s(c, "setRef"), s(u, "composeRefs"), s(i, "useComposedRefs")
    },
    518(e, t, n) {
      n.r(t), n.d(t, {
        FocusScope: () => p,
        Root: () => _
      });
      var o = n(4637),
        r = n(85049),
        s = n(41988),
        c = n(7198),
        u = n(39793),
        i = Object.defineProperty,
        d = (e, t) => i(e, "name", {
          value: t,
          configurable: !0
        }),
        a = "focusScope.autoFocusOnMount",
        f = "focusScope.autoFocusOnUnmount",
        l = {
          bubbles: !1,
          cancelable: !0
        },
        p = o.forwardRef(d(function(e, t) {
          const {
            loop: n = !1,
            trapped: i = !1,
            onMountAutoFocus: p,
            onUnmountAutoFocus: y,
            ...h
          } = e, [E, k] = o.useState(null), S = (0, c.c)(p), _ = (0, c.c)(y), C = o.useRef(null), F = (0, r.s)(t, k), I = o.useRef({
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
                  if (I.paused || !E) return;
                  const t = e.target;
                  E.contains(t) ? C.current = t : g(C.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (I.paused || !E) return;
                  const t = e.relatedTarget;
                  null !== t && (E.contains(t) || g(C.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && g(E)
                };
              d(e, "handleFocusIn"), d(t, "handleFocusOut"), d(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const o = new MutationObserver(n);
              return E && o.observe(E, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), o.disconnect()
              }
            }
          }, [i, E, I.paused]), o.useEffect(() => {
            if (E) {
              w.add(I);
              const e = document.activeElement;
              if (!E.contains(e)) {
                const t = new CustomEvent(a, l);
                E.addEventListener(a, S), E.dispatchEvent(t), t.defaultPrevented || (m(T(v(E)), {
                  select: !0
                }), document.activeElement === e && g(E))
              }
              return () => {
                E.removeEventListener(a, S), setTimeout(() => {
                  const t = new CustomEvent(f, l);
                  E.addEventListener(f, _), E.dispatchEvent(t), t.defaultPrevented || g(e ?? document.body, {
                    select: !0
                  }), E.removeEventListener(f, _), w.remove(I)
                }, 0)
              }
            }
          }, [E, S, _, I]);
          const L = o.useCallback(e => {
            if (!n && !i) return;
            if (I.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, s] = b(t);
              r && s ? e.shiftKey || o !== s ? e.shiftKey && o === r && (e.preventDefault(), n && g(s, {
                select: !0
              })) : (e.preventDefault(), n && g(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [n, i, I.paused]);
          return (0, u.jsx)(s.sG.div, {
            tabIndex: -1,
            ...h,
            ref: F,
            onKeyDown: L
          })
        }, "FocusScope"));

      function m(e, {
        select: t = !1
      } = {}) {
        const n = document.activeElement;
        for (const o of e)
          if (g(o, {
              select: t
            }), document.activeElement !== n) return
      }

      function b(e) {
        const t = v(e);
        return [y(t, e), y(t.reverse(), e)]
      }

      function v(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: d(e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function y(e, t) {
        const n = "function" == typeof t.checkVisibility && t.checkVisibility({
          checkVisibilityCSS: !0
        });
        for (const o of e)
          if (!(n ? !o.checkVisibility({
              checkVisibilityCSS: !0
            }) : h(o, {
              upTo: t
            }))) return o
      }

      function h(e, {
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

      function E(e) {
        return e instanceof HTMLInputElement && "select" in e
      }

      function g(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && E(e) && t && e.select()
        }
      }
      d(m, "focusFirst"), d(b, "getTabbableEdges"), d(v, "getTabbableCandidates"), d(y, "findVisible"), d(h, "isHidden"), d(E, "isSelectableInput"), d(g, "focus");
      var w = k();

      function k() {
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

      function T(e) {
        return e.filter(e => "A" !== e.tagName)
      }
      d(k, "createFocusScopesStack"), d(S, "arrayRemove"), d(T, "removeLinks");
      var _ = p
    },
    41988(e, t, n) {
      n.d(t, {
        hO: () => d,
        sG: () => i
      });
      var o = n(4637),
        r = n(84017),
        s = n(49481),
        c = n(39793),
        u = Object.defineProperty,
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, s.createSlot)(`Primitive.${t}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...s
              } = e, u = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, c.jsx)(u, {
                ...s,
                ref: o
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {});

      function d(e, t) {
        e && r.flushSync(() => e.dispatchEvent(t))
      }
      u(d, "name", {
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