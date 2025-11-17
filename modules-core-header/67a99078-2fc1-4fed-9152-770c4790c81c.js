try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "67a99078-2fc1-4fed-9152-770c4790c81c", e._sentryDebugIdIdentifier = "sentry-dbid-67a99078-2fc1-4fed-9152-770c4790c81c")
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
  [2295, 4676, 5656, 7533, 9627], {
    25656: (e, t, n) => {
      n.r(t), n.d(t, {
        FocusScope: () => i,
        Root: () => b
      });
      var o = n(71127),
        r = n(95362),
        u = n(78004),
        c = n(76286),
        s = n(42295),
        d = "focusScope.autoFocusOnMount",
        a = "focusScope.autoFocusOnUnmount",
        f = {
          bubbles: !1,
          cancelable: !0
        },
        i = o.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: i = !1,
            onMountAutoFocus: m,
            onUnmountAutoFocus: E,
            ...b
          } = e, [_, h] = o.useState(null), g = (0, c.c)(m), w = (0, c.c)(E), T = o.useRef(null), S = (0, r.s)(t, e => h(e)), k = o.useRef({
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
                  if (k.paused || !_) return;
                  const t = e.target;
                  _.contains(t) ? T.current = t : v(T.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (k.paused || !_) return;
                  const t = e.relatedTarget;
                  null !== t && (_.contains(t) || v(T.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && v(_)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const o = new MutationObserver(n);
              return _ && o.observe(_, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), o.disconnect()
              }
            }
          }, [i, _, k.paused]), o.useEffect(() => {
            if (_) {
              y.add(k);
              const e = document.activeElement;
              if (!_.contains(e)) {
                const t = new CustomEvent(d, f);
                _.addEventListener(d, g), _.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const o of e)
                    if (v(o, {
                        select: t
                      }), document.activeElement !== n) return
                }(l(_).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && v(_))
              }
              return () => {
                _.removeEventListener(d, g), setTimeout(() => {
                  const t = new CustomEvent(a, f);
                  _.addEventListener(a, w), _.dispatchEvent(t), t.defaultPrevented || v(e ?? document.body, {
                    select: !0
                  }), _.removeEventListener(a, w), y.remove(k)
                }, 0)
              }
            }
          }, [_, g, w, k]);
          const N = o.useCallback(e => {
            if (!n && !i) return;
            if (k.paused) return;
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
          }, [n, i, k.paused]);
          return (0, s.jsx)(u.sG.div, {
            tabIndex: -1,
            ...b,
            ref: S,
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
      i.displayName = "FocusScope";
      var y = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = E(e, t), e.unshift(t)
          },
          remove(t) {
            e = E(e, t), e[0]?.resume()
          }
        }
      }();

      function E(e, t) {
        const n = [...e],
          o = n.indexOf(t);
        return -1 !== o && n.splice(o, 1), n
      }
      var b = i
    },
    42295: (e, t, n) => {
      e.exports = n(69245)
    },
    69245: (e, t, n) => {
      var o = n(71127),
        r = Symbol.for("react.element"),
        u = Symbol.for("react.fragment"),
        c = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function a(e, t, n) {
        var o, u = {},
          a = null,
          f = null;
        for (o in void 0 !== n && (a = "" + n), void 0 !== t.key && (a = "" + t.key), void 0 !== t.ref && (f = t.ref), t) c.call(t, o) && !d.hasOwnProperty(o) && (u[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === u[o] && (u[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: a,
          ref: f,
          props: u,
          _owner: s.current
        }
      }
      t.Fragment = u, t.jsx = a, t.jsxs = a
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