try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ac332750-f6eb-4373-9ea1-8fda46703031", e._sentryDebugIdIdentifier = "sentry-dbid-ac332750-f6eb-4373-9ea1-8fda46703031")
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
  [2295, 4676, 5423, 7533, 7804], {
    42295: (e, t, n) => {
      e.exports = n(69245)
    },
    67804: (e, t, n) => {
      n.r(t), n.d(t, {
        FocusScope: () => l,
        Root: () => _
      });
      var o = n(71127),
        r = n(95362),
        u = (n(18429), n(46421)),
        s = n(42295),
        c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, t) => {
          const n = (0, u.createSlot)(`Primitive.${t}`),
            r = o.forwardRef(((e, o) => {
              const {
                asChild: r,
                ...u
              } = e, c = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(c, {
                ...u,
                ref: o
              })
            }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {}),
        a = n(76286),
        d = "focusScope.autoFocusOnMount",
        i = "focusScope.autoFocusOnUnmount",
        f = {
          bubbles: !1,
          cancelable: !0
        },
        l = o.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: u = !1,
            onMountAutoFocus: l,
            onUnmountAutoFocus: y,
            ...E
          } = e, [_, g] = o.useState(null), h = (0, a.c)(l), w = (0, a.c)(y), T = o.useRef(null), S = (0, r.s)(t, (e => g(e))), k = o.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          o.useEffect((() => {
            if (u) {
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
          }), [u, _, k.paused]), o.useEffect((() => {
            if (_) {
              b.add(k);
              const e = document.activeElement;
              if (!_.contains(e)) {
                const t = new CustomEvent(d, f);
                _.addEventListener(d, h), _.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const o of e)
                    if (v(o, {
                        select: t
                      }), document.activeElement !== n) return
                }(p(_).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && v(_))
              }
              return () => {
                _.removeEventListener(d, h), setTimeout((() => {
                  const t = new CustomEvent(i, f);
                  _.addEventListener(i, w), _.dispatchEvent(t), t.defaultPrevented || v(e ?? document.body, {
                    select: !0
                  }), _.removeEventListener(i, w), b.remove(k)
                }), 0)
              }
            }
          }), [_, h, w, k]);
          const N = o.useCallback((e => {
            if (!n && !u) return;
            if (k.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, u] = function(e) {
                  const t = p(e);
                  return [m(t, e), m(t.reverse(), e)]
                }(t);
              r && u ? e.shiftKey || o !== u ? e.shiftKey && o === r && (e.preventDefault(), n && v(u, {
                select: !0
              })) : (e.preventDefault(), n && v(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, u, k.paused]);
          return (0, s.jsx)(c.div, {
            tabIndex: -1,
            ...E,
            ref: S,
            onKeyDown: N
          })
        }));

      function p(e) {
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

      function m(e, t) {
        for (const n of e)
          if (!y(n, {
              upTo: t
            })) return n
      }

      function y(e, {
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
      l.displayName = "FocusScope";
      var b = function() {
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
      var _ = l
    },
    69245: (e, t, n) => {
      var o = n(71127),
        r = Symbol.for("react.element"),
        u = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        c = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        a = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, n) {
        var o, u = {},
          d = null,
          i = null;
        for (o in void 0 !== n && (d = "" + n), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (i = t.ref), t) s.call(t, o) && !a.hasOwnProperty(o) && (u[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === u[o] && (u[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: i,
          props: u,
          _owner: c.current
        }
      }
      t.Fragment = u, t.jsx = d, t.jsxs = d
    },
    76286: (e, t, n) => {
      n.d(t, {
        c: () => r
      });
      var o = n(71127);

      function r(e) {
        const t = o.useRef(e);
        return o.useEffect((() => {
          t.current = e
        })), o.useMemo((() => (...e) => t.current?.(...e)), [])
      }
    },
    95362: (e, t, n) => {
      n.d(t, {
        s: () => s,
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
          const o = e.map((e => {
            const o = r(e, t);
            return n || "function" != typeof o || (n = !0), o
          }));
          if (n) return () => {
            for (let t = 0; t < o.length; t++) {
              const n = o[t];
              "function" == typeof n ? n() : r(e[t], null)
            }
          }
        }
      }

      function s(...e) {
        return o.useCallback(u(...e), e)
      }
    }
  }
]);