try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "00747626-af4c-4e2e-aec1-d93b9ee81e1c", e._sentryDebugIdIdentifier = "sentry-dbid-00747626-af4c-4e2e-aec1-d93b9ee81e1c")
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
  [9627], {
    25656: (e, t, n) => {
      n.r(t), n.d(t, {
        FocusScope: () => f,
        Root: () => E
      });
      var o = n(71127),
        r = n(95362),
        u = n(78004),
        c = n(76286),
        s = n(42295),
        d = "focusScope.autoFocusOnMount",
        a = "focusScope.autoFocusOnUnmount",
        i = {
          bubbles: !1,
          cancelable: !0
        },
        f = o.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: f = !1,
            onMountAutoFocus: m,
            onUnmountAutoFocus: b,
            ...E
          } = e, [h, g] = o.useState(null), w = (0, c.c)(m), T = (0, c.c)(b), _ = o.useRef(null), N = (0, r.s)(t, e => g(e)), S = o.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          o.useEffect(() => {
            if (f) {
              let e = function(e) {
                  if (S.paused || !h) return;
                  const t = e.target;
                  h.contains(t) ? _.current = t : v(_.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (S.paused || !h) return;
                  const t = e.relatedTarget;
                  null !== t && (h.contains(t) || v(_.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && v(h)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const o = new MutationObserver(n);
              return h && o.observe(h, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), o.disconnect()
              }
            }
          }, [f, h, S.paused]), o.useEffect(() => {
            if (h) {
              y.add(S);
              const e = document.activeElement;
              if (!h.contains(e)) {
                const t = new CustomEvent(d, i);
                h.addEventListener(d, w), h.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const o of e)
                    if (v(o, {
                        select: t
                      }), document.activeElement !== n) return
                }(l(h).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && v(h))
              }
              return () => {
                h.removeEventListener(d, w), setTimeout(() => {
                  const t = new CustomEvent(a, i);
                  h.addEventListener(a, T), h.dispatchEvent(t), t.defaultPrevented || v(e ?? document.body, {
                    select: !0
                  }), h.removeEventListener(a, T), y.remove(S)
                }, 0)
              }
            }
          }, [h, w, T, S]);
          const k = o.useCallback(e => {
            if (!n && !f) return;
            if (S.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, u] = function(e) {
                  const t = l(e);
                  return [p(t, e), p(t.reverse(), e)]
                }(t);
              r && u ? e.shiftKey || o !== u ? e.shiftKey && o === r && (e.preventDefault(), n && v(u, {
                select: !0
              })) : (e.preventDefault(), n && v(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [n, f, S.paused]);
          return (0, s.jsx)(u.sG.div, {
            tabIndex: -1,
            ...E,
            ref: N,
            onKeyDown: k
          })
        });

      function l(e) {
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

      function p(e, t) {
        for (const n of e)
          if (!m(n, {
              upTo: t
            })) return n
      }

      function m(e, {
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

      function v(e, {
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
      f.displayName = "FocusScope";
      var y = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = b(e, t), e.unshift(t)
          },
          remove(t) {
            e = b(e, t), e[0]?.resume()
          }
        }
      }();

      function b(e, t) {
        const n = [...e],
          o = n.indexOf(t);
        return -1 !== o && n.splice(o, 1), n
      }
      var E = f
    },
    76286: (e, t, n) => {
      n.d(t, {
        c: () => r
      });
      var o = n(71127);

      function r(e) {
        const t = o.useRef(e);
        return o.useEffect(() => {
          t.current = e
        }), o.useMemo(() => (...e) => t.current?.(...e), [])
      }
    },
    78004: (e, t, n) => {
      n.d(t, {
        hO: () => d,
        sG: () => s
      });
      var o = n(71127),
        r = n(31062),
        u = n(21222),
        c = n(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, u.createSlot)(`Primitive.${t}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...u
              } = e, s = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, c.jsx)(s, {
                ...u,
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
    },
    95362: (e, t, n) => {
      n.d(t, {
        s: () => c,
        t: () => u
      });
      var o = n(71127);

      function r(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function u(...e) {
        return t => {
          let n = !1;
          const o = e.map(e => {
            const o = r(e, t);
            return n || "function" != typeof o || (n = !0), o
          });
          if (n) return () => {
            for (let t = 0; t < o.length; t++) {
              const n = o[t];
              "function" == typeof n ? n() : r(e[t], null)
            }
          }
        }
      }

      function c(...e) {
        return o.useCallback(u(...e), e)
      }
    }
  }
]);