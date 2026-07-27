try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bd38e25f-e984-42b1-a316-6d2a0c3b78e5", e._sentryDebugIdIdentifier = "sentry-dbid-bd38e25f-e984-42b1-a316-6d2a0c3b78e5")
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
  [2174, 4355, 4555, 6736, 9793], {
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

      function d(e, t, n) {
        var o, s = {},
          d = null,
          a = null;
        for (o in void 0 !== n && (d = "" + n), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (a = t.ref), t) u.call(t, o) && !i.hasOwnProperty(o) && (s[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === s[o] && (s[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: a,
          props: s,
          _owner: c.current
        }
      }
      t.Fragment = s, t.jsx = d, t.jsxs = d
    },
    39793(e, t, n) {
      e.exports = n(94931)
    },
    64239(e, t, n) {
      n.d(t, {
        s: () => s
      });
      var o = n(4637);

      function r(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function s(...e) {
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
        Root: () => E
      });
      var o = n(4637),
        r = n(64239),
        s = n(31270),
        u = n(94660),
        c = n(39793),
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
            ...E
          } = e, [h, _] = o.useState(null), g = (0, u.c)(m), w = (0, u.c)(v), S = o.useRef(null), k = (0, r.s)(t, _), T = o.useRef({
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
                  if (T.paused || !h) return;
                  const t = e.target;
                  h.contains(t) ? S.current = t : y(S.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (T.paused || !h) return;
                  const t = e.relatedTarget;
                  null !== t && (h.contains(t) || y(S.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && y(h)
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
          }, [f, h, T.paused]), o.useEffect(() => {
            if (h) {
              b.add(T);
              const e = document.activeElement;
              if (!h.contains(e)) {
                const t = new CustomEvent(i, a);
                h.addEventListener(i, g), h.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const o of e)
                    if (y(o, {
                        select: t
                      }), document.activeElement !== n) return
                }(l(h).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && y(h))
              }
              return () => {
                h.removeEventListener(i, g), setTimeout(() => {
                  const t = new CustomEvent(d, a);
                  h.addEventListener(d, w), h.dispatchEvent(t), t.defaultPrevented || y(e ?? document.body, {
                    select: !0
                  }), h.removeEventListener(d, w), b.remove(T)
                }, 0)
              }
            }
          }, [h, g, w, T]);
          const N = o.useCallback(e => {
            if (!n && !f) return;
            if (T.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, s] = function(e) {
                  const t = l(e);
                  return [p(t, e), p(t.reverse(), e)]
                }(t);
              r && s ? e.shiftKey || o !== s ? e.shiftKey && o === r && (e.preventDefault(), n && y(s, {
                select: !0
              })) : (e.preventDefault(), n && y(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [n, f, T.paused]);
          return (0, c.jsx)(s.sG.div, {
            tabIndex: -1,
            ...E,
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

      function y(e, {
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
      var b = function() {
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
      var E = f
    },
    31270(e, t, n) {
      n.d(t, {
        hO: () => i,
        sG: () => c
      });
      var o = n(4637),
        r = n(84017),
        s = n(50486),
        u = n(39793),
        c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
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