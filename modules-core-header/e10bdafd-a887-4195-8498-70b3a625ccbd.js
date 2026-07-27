try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e10bdafd-a887-4195-8498-70b3a625ccbd", e._sentryDebugIdIdentifier = "sentry-dbid-e10bdafd-a887-4195-8498-70b3a625ccbd")
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
  [6736], {
    64239(e, t, n) {
      n.d(t, {
        s: () => c
      });
      var o = n(4637);

      function r(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function c(...e) {
        return o.useCallback(function(...e) {
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
        }(...e), e)
      }
    },
    64355(e, t, n) {
      n.r(t), n.d(t, {
        FocusScope: () => f,
        Root: () => h
      });
      var o = n(4637),
        r = n(64239),
        c = n(31270),
        s = n(94660),
        u = n(39793),
        i = "focusScope.autoFocusOnMount",
        d = "focusScope.autoFocusOnUnmount",
        a = {
          bubbles: !1,
          cancelable: !0
        },
        f = o.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: f = !1,
            onMountAutoFocus: m,
            onUnmountAutoFocus: v,
            ...h
          } = e, [E, g] = o.useState(null), w = (0, s.c)(m), T = (0, s.c)(v), _ = o.useRef(null), k = (0, r.s)(t, g), S = o.useRef({
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
                  if (S.paused || !E) return;
                  const t = e.target;
                  E.contains(t) ? _.current = t : b(_.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (S.paused || !E) return;
                  const t = e.relatedTarget;
                  null !== t && (E.contains(t) || b(_.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && b(E)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const o = new MutationObserver(n);
              return E && o.observe(E, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), o.disconnect()
              }
            }
          }, [f, E, S.paused]), o.useEffect(() => {
            if (E) {
              y.add(S);
              const e = document.activeElement;
              if (!E.contains(e)) {
                const t = new CustomEvent(i, a);
                E.addEventListener(i, w), E.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const o of e)
                    if (b(o, {
                        select: t
                      }), document.activeElement !== n) return
                }(l(E).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && b(E))
              }
              return () => {
                E.removeEventListener(i, w), setTimeout(() => {
                  const t = new CustomEvent(d, a);
                  E.addEventListener(d, T), E.dispatchEvent(t), t.defaultPrevented || b(e ?? document.body, {
                    select: !0
                  }), E.removeEventListener(d, T), y.remove(S)
                }, 0)
              }
            }
          }, [E, w, T, S]);
          const N = o.useCallback(e => {
            if (!n && !f) return;
            if (S.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, c] = function(e) {
                  const t = l(e);
                  return [p(t, e), p(t.reverse(), e)]
                }(t);
              r && c ? e.shiftKey || o !== c ? e.shiftKey && o === r && (e.preventDefault(), n && b(c, {
                select: !0
              })) : (e.preventDefault(), n && b(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [n, f, S.paused]);
          return (0, u.jsx)(c.sG.div, {
            tabIndex: -1,
            ...h,
            ref: k,
            onKeyDown: N
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
        const n = "function" == typeof t.checkVisibility && t.checkVisibility({
          checkVisibilityCSS: !0
        });
        for (const o of e)
          if (!(n ? !o.checkVisibility({
              checkVisibilityCSS: !0
            }) : m(o, {
              upTo: t
            }))) return o
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
      var y = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = v(e, t), e.unshift(t)
          },
          remove(t) {
            e = v(e, t), e[0]?.resume()
          }
        }
      }();

      function v(e, t) {
        const n = [...e],
          o = n.indexOf(t);
        return -1 !== o && n.splice(o, 1), n
      }
      var h = f
    },
    31270(e, t, n) {
      n.d(t, {
        hO: () => i,
        sG: () => u
      });
      var o = n(4637),
        r = n(84017),
        c = n(50486),
        s = n(39793),
        u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, c.createSlot)(`Primitive.${t}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...c
              } = e, u = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(u, {
                ...c,
                ref: o
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {});

      function i(e, t) {
        e && r.flushSync(() => e.dispatchEvent(t))
      }
    },
    94660(e, t, n) {
      n.d(t, {
        c: () => r
      });
      var o = n(4637);

      function r(e) {
        const t = o.useRef(e);
        return o.useEffect(() => {
          t.current = e
        }), o.useMemo(() => (...e) => t.current?.(...e), [])
      }
    }
  }
]);