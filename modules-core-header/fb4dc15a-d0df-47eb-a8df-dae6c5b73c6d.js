try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fb4dc15a-d0df-47eb-a8df-dae6c5b73c6d", e._sentryDebugIdIdentifier = "sentry-dbid-fb4dc15a-d0df-47eb-a8df-dae6c5b73c6d")
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
  [4501], {
    66882: (e, t, n) => {
      n.r(t), n.d(t, {
        FocusScope: () => f,
        Root: () => E
      });
      var o = n(71127),
        d = n(95362),
        s = n(78004),
        r = n(76286),
        u = n(42295),
        c = "focusScope.autoFocusOnMount",
        a = "focusScope.autoFocusOnUnmount",
        i = {
          bubbles: !1,
          cancelable: !0
        },
        f = o.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: f = !1,
            onMountAutoFocus: m,
            onUnmountAutoFocus: y,
            ...E
          } = e, [g, h] = o.useState(null), w = (0, r.c)(m), T = (0, r.c)(y), _ = o.useRef(null), L = (0, d.s)(t, (e => h(e))), N = o.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          o.useEffect((() => {
            if (f) {
              let e = function(e) {
                  if (N.paused || !g) return;
                  const t = e.target;
                  g.contains(t) ? _.current = t : b(_.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (N.paused || !g) return;
                  const t = e.relatedTarget;
                  null !== t && (g.contains(t) || b(_.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && b(g)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const o = new MutationObserver(n);
              return g && o.observe(g, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), o.disconnect()
              }
            }
          }), [f, g, N.paused]), o.useEffect((() => {
            if (g) {
              v.add(N);
              const e = document.activeElement;
              if (!g.contains(e)) {
                const t = new CustomEvent(c, i);
                g.addEventListener(c, w), g.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const o of e)
                    if (b(o, {
                        select: t
                      }), document.activeElement !== n) return
                }(l(g).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && b(g))
              }
              return () => {
                g.removeEventListener(c, w), setTimeout((() => {
                  const t = new CustomEvent(a, i);
                  g.addEventListener(a, T), g.dispatchEvent(t), t.defaultPrevented || b(e ?? document.body, {
                    select: !0
                  }), g.removeEventListener(a, T), v.remove(N)
                }), 0)
              }
            }
          }), [g, w, T, N]);
          const k = o.useCallback((e => {
            if (!n && !f) return;
            if (N.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [d, s] = function(e) {
                  const t = l(e);
                  return [p(t, e), p(t.reverse(), e)]
                }(t);
              d && s ? e.shiftKey || o !== s ? e.shiftKey && o === d && (e.preventDefault(), n && b(s, {
                select: !0
              })) : (e.preventDefault(), n && b(d, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, f, N.paused]);
          return (0, u.jsx)(s.sG.div, {
            tabIndex: -1,
            ...E,
            ref: L,
            onKeyDown: k
          })
        }));

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

      function b(e, {
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
      var v = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = y(e, t), e.unshift(t)
          },
          remove(t) {
            e = y(e, t), e[0]?.resume()
          }
        }
      }();

      function y(e, t) {
        const n = [...e],
          o = n.indexOf(t);
        return -1 !== o && n.splice(o, 1), n
      }
      var E = f
    }
  }
]);