try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2e71968d-e4c2-4ee6-a9c3-4d56222c6f2d", e._sentryDebugIdIdentifier = "sentry-dbid-2e71968d-e4c2-4ee6-a9c3-4d56222c6f2d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7914], {
    45787(e, t, n) {
      n.d(t, {
        Eq: () => s
      });
      var o = new WeakMap,
        r = new WeakMap,
        c = {},
        a = 0,
        u = function(e) {
          return e && (e.host || u(e.parentNode))
        },
        s = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var s = Array.from(Array.isArray(e) ? e : [e]),
            i = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return i ? (s.push.apply(s, Array.from(i.querySelectorAll("[aria-live], script"))), function(e, t, n, s) {
            var i = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var n = u(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(t, Array.isArray(e) ? e : [e]);
            c[n] || (c[n] = new WeakMap);
            var d = c[n],
              l = [],
              f = new Set,
              p = new Set(i),
              m = function(e) {
                e && !f.has(e) && (f.add(e), m(e.parentNode))
              };
            i.forEach(m);
            var h = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (f.has(e)) h(e);
                else try {
                  var t = e.getAttribute(s),
                    c = null !== t && "false" !== t,
                    a = (o.get(e) || 0) + 1,
                    u = (d.get(e) || 0) + 1;
                  o.set(e, a), d.set(e, u), l.push(e), 1 === a && c && r.set(e, !0), 1 === u && e.setAttribute(n, "true"), c || e.setAttribute(s, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              })
            };
            return h(t), f.clear(), a++,
              function() {
                l.forEach(function(e) {
                  var t = o.get(e) - 1,
                    c = d.get(e) - 1;
                  o.set(e, t), d.set(e, c), t || (r.has(e) || e.removeAttribute(s), r.delete(e)), c || e.removeAttribute(n)
                }), --a || (o = new WeakMap, o = new WeakMap, r = new WeakMap, c = {})
              }
          }(s, i, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    44752(e, t, n) {
      n.d(t, {
        mK: () => a
      });
      var o = Object.defineProperty,
        r = (e, t) => o(e, "name", {
          value: t,
          configurable: !0
        }),
        c = !("undefined" == typeof window || !window.document || !window.document.createElement);

      function a(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return r(function(o) {
          if (e?.(o), !1 === n || !o || !o.defaultPrevented) return t?.(o)
        }, "handleEvent")
      }

      function u(e) {
        if (!c) throw new Error("Cannot access document outside of the DOM");
        return e?.ownerDocument ?? document
      }

      function s(e) {
        return "IFRAME" === e.tagName
      }
      r(a, "composeEventHandlers"), r(function(e) {
        if (!c) throw new Error("Cannot access window outside of the DOM");
        return e?.ownerDocument?.defaultView ?? window
      }, "getOwnerWindow"), r(u, "getOwnerDocument"), r(function e(t, n = !1) {
        const {
          activeElement: o
        } = u(t);
        if (!o?.nodeName) return null;
        if (s(o) && o.contentDocument) return e(o.contentDocument.body, n);
        if (n) {
          const e = o.getAttribute("aria-activedescendant");
          if (e) {
            const t = u(o).getElementById(e);
            if (t) return t
          }
        }
        return o
      }, "getActiveElement"), r(s, "isFrame")
    },
    76733(e, t, n) {
      n.d(t, {
        D: () => o
      });
      var o = !1
    },
    72579(e, t, n) {
      n.d(t, {
        A: () => u
      });
      var o = n(93082),
        r = n(39793),
        c = Object.defineProperty,
        a = (e, t) => c(e, "name", {
          value: t,
          configurable: !0
        });

      function u(e, t = []) {
        let n = [];

        function c(t, c) {
          const u = o.createContext(c);
          u.displayName = t + "Context";
          const s = n.length;
          n = [...n, c];
          const i = a(t => {
            const {
              scope: n,
              children: c,
              ...a
            } = t, i = n?.[e]?.[s] || u, d = o.useMemo(() => a, Object.values(a));
            return (0, r.jsx)(i.Provider, {
              value: d,
              children: c
            })
          }, "Provider");

          function d(n, r, a = {}) {
            const {
              optional: i = !1
            } = a, d = r?.[e]?.[s] || u, l = o.useContext(d);
            if (l) return l;
            if (void 0 !== c) return c;
            if (!i) throw new Error(`\`${n}\` must be used within \`${t}\``)
          }
          return i.displayName = t + "Provider", a(d, "useContext"), [i, d]
        }
        a(c, "createContext");
        const u = a(() => {
          const t = n.map(e => o.createContext(e));
          return a(function(n) {
            const r = n?.[e] || t;
            return o.useMemo(() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: r
              }
            }), [n, r])
          }, "useScope")
        }, "createScope");
        return u.scopeName = e, [c, s(u, ...t)]
      }

      function s(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = a(() => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return a(function(e) {
            const r = n.reduce((t, {
              useScope: n,
              scopeName: o
            }) => ({
              ...t,
              ...n(e)[`__scope${o}`]
            }), {});
            return o.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }, "useComposedScopes")
        }, "createScope");
        return n.scopeName = t.scopeName, n
      }
      a(function(e, t) {
        const n = o.createContext(t);
        n.displayName = e + "Context";
        const c = a(e => {
          const {
            children: t,
            ...c
          } = e, a = o.useMemo(() => c, Object.values(c));
          return (0, r.jsx)(n.Provider, {
            value: a,
            children: t
          })
        }, "Provider");

        function u(r, c = {}) {
          const {
            optional: a = !1
          } = c, u = o.useContext(n);
          if (u) return u;
          if (void 0 !== t) return t;
          if (!a) throw new Error(`\`${r}\` must be used within \`${e}\``)
        }
        return c.displayName = e + "Provider", a(u, "useContext"), [c, u]
      }, "createContext"), a(u, "createContextScope"), a(s, "composeContextScopes")
    },
    86187(e, t, n) {
      n.d(t, {
        Oh: () => s
      });
      var o = n(93082),
        r = Object.defineProperty,
        c = (e, t) => r(e, "name", {
          value: t,
          configurable: !0
        }),
        a = 0,
        u = null;

      function s() {
        o.useEffect(() => {
          u || (u = {
            start: i(),
            end: i()
          });
          const {
            start: e,
            end: t
          } = u;
          return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), a++, () => {
            1 === a && (u?.start.remove(), u?.end.remove(), u = null), a = Math.max(0, a - 1)
          }
        }, [])
      }

      function i() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      c(function(e) {
        return s(), e.children
      }, "FocusGuards"), c(s, "useFocusGuards"), c(i, "createFocusGuard")
    },
    88918(e, t, n) {
      let o;
      n.d(t, {
        B: () => i
      });
      var r = n(93082),
        c = n(9608),
        a = Object.defineProperty,
        u = (o || (o = n.t(r, 2)))[" useId ".trim().toString()] || (() => {}),
        s = 0;

      function i(e) {
        const [t, n] = r.useState(u());
        return (0, c.N)(() => {
          e || n(e => e ?? String(s++))
        }, [e]), e || (t ? `radix-${t}` : "")
      }
      a(i, "name", {
        value: "useId",
        configurable: !0
      })
    },
    7198(e, t, n) {
      n.d(t, {
        c: () => r
      });
      var o = n(93082);

      function r(e) {
        const t = o.useRef(e);
        return o.useEffect(() => {
          t.current = e
        }), o.useMemo(() => (...e) => t.current?.(...e), [])
      }(0, Object.defineProperty)(r, "name", {
        value: "useCallbackRef",
        configurable: !0
      })
    },
    15782(e, t, n) {
      n.d(t, {
        i: () => m
      });
      var o = n(93082),
        r = n.t(o, 2),
        c = n(76733),
        a = n(9608),
        u = Object.defineProperty,
        s = r[" useEffectEvent ".trim().toString()],
        i = r[" useInsertionEffect ".trim().toString()];

      function d(e) {
        if ("function" == typeof s) return s(e);
        const t = o.useRef(() => {
          throw new Error("Cannot call an event handler while rendering.")
        });
        return "function" == typeof i ? i(() => {
          t.current = e
        }) : (0, a.N)(() => {
          t.current = e
        }), o.useMemo(() => (...e) => t.current?.(...e), [])
      }
      u(d, "name", {
        value: "useEffectEvent",
        configurable: !0
      });
      var l = Object.defineProperty,
        f = (e, t) => l(e, "name", {
          value: t,
          configurable: !0
        }),
        p = r[" useInsertionEffect ".trim().toString()] || a.N;

      function m({
        prop: e,
        defaultProp: t,
        onChange: n = f(() => {}, "onChange"),
        caller: r
      }) {
        const [a, u, s] = h({
          defaultProp: t,
          onChange: n
        }), i = void 0 !== e, d = i ? e : a;
        if (c.D) {
          const t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            const e = t.current;
            if (e !== i) {
              const t = e ? "controlled" : "uncontrolled",
                n = i ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = i
          }, [i, r])
        }
        return [d, o.useCallback(t => {
          if (i) {
            const n = y(t) ? t(e) : t;
            n !== e && s.current?.(n)
          } else u(t)
        }, [i, e, u, s])]
      }

      function h({
        defaultProp: e,
        onChange: t
      }) {
        const [n, r] = o.useState(e), c = o.useRef(n), a = o.useRef(t);
        return p(() => {
          a.current = t
        }, [t]), o.useEffect(() => {
          c.current !== n && (a.current?.(n), c.current = n)
        }, [n, c]), [n, r, a]
      }

      function y(e) {
        return "function" == typeof e
      }
      f(m, "useControllableState"), f(h, "useUncontrolledState"), f(y, "isFunction");
      var g = Symbol("RADIX:SYNC_STATE");
      f(function(e, t, n, r) {
        const {
          prop: a,
          defaultProp: u,
          onChange: s,
          caller: i
        } = t, l = void 0 !== a, f = d(s);
        if (c.D) {
          const e = o.useRef(void 0 !== a);
          o.useEffect(() => {
            const t = e.current;
            if (t !== l) {
              const e = t ? "controlled" : "uncontrolled",
                n = l ? "controlled" : "uncontrolled";
              console.warn(`${i} is changing from ${e} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            e.current = l
          }, [l, i])
        }
        const p = [{
          ...n,
          state: u
        }];
        r && p.push(r);
        const [m, h] = o.useReducer((t, n) => {
          if (n.type === g) return {
            ...t,
            state: n.state
          };
          const o = e(t, n);
          return l && !Object.is(o.state, t.state) && f(o.state), o
        }, ...p), y = m.state, b = o.useRef(y);
        o.useEffect(() => {
          b.current !== y && (b.current = y, l || f(y))
        }, [y, b, l]);
        const v = o.useMemo(() => void 0 !== a ? {
          ...m,
          state: a
        } : m, [m, a]);
        return o.useEffect(() => {
          l && !Object.is(a, m.state) && h({
            type: g,
            state: a
          })
        }, [a, m.state, l]), [v, h]
      }, "useControllableStateReducer")
    },
    9608(e, t, n) {
      n.d(t, {
        N: () => r
      });
      var o = n(93082),
        r = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);