try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a949ef56-341f-42f0-87fa-4b2d13ca99df", e._sentryDebugIdIdentifier = "sentry-dbid-a949ef56-341f-42f0-87fa-4b2d13ca99df")
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
  [2295, 2697, 4676, 7533], {
    42295: (e, n, t) => {
      e.exports = t(69245)
    },
    63155: (e, n, t) => {
      t.d(n, {
        N: () => o
      });
      var r = t(71127),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    69245: (e, n, t) => {
      var r = t(71127),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        u = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, n, t) {
        var r, a = {},
          i = null,
          d = null;
        for (r in void 0 !== t && (i = "" + t), void 0 !== n.key && (i = "" + n.key), void 0 !== n.ref && (d = n.ref), n) u.call(n, r) && !c.hasOwnProperty(r) && (a[r] = n[r]);
        if (e && e.defaultProps)
          for (r in n = e.defaultProps) void 0 === a[r] && (a[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: i,
          ref: d,
          props: a,
          _owner: s.current
        }
      }
      n.Fragment = a, n.jsx = i, n.jsxs = i
    },
    76286: (e, n, t) => {
      t.d(n, {
        c: () => o
      });
      var r = t(71127);

      function o(e) {
        const n = r.useRef(e);
        return r.useEffect((() => {
          n.current = e
        })), r.useMemo((() => (...e) => n.current?.(...e)), [])
      }
    },
    85426: (e, n, t) => {
      t.d(n, {
        A: () => u,
        q: () => a
      });
      var r = t(71127),
        o = t(42295);

      function a(e, n) {
        const t = r.createContext(n),
          a = e => {
            const {
              children: n,
              ...a
            } = e, u = r.useMemo((() => a), Object.values(a));
            return (0, o.jsx)(t.Provider, {
              value: u,
              children: n
            })
          };
        return a.displayName = e + "Provider", [a, function(o) {
          const a = r.useContext(t);
          if (a) return a;
          if (void 0 !== n) return n;
          throw new Error(`\`${o}\` must be used within \`${e}\``)
        }]
      }

      function u(e, n = []) {
        let t = [];
        const a = () => {
          const n = t.map((e => r.createContext(e)));
          return function(t) {
            const o = t?.[e] || n;
            return r.useMemo((() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: o
              }
            })), [t, o])
          }
        };
        return a.scopeName = e, [function(n, a) {
          const u = r.createContext(a),
            s = t.length;
          t = [...t, a];
          const c = n => {
            const {
              scope: t,
              children: a,
              ...c
            } = n, i = t?.[e]?.[s] || u, d = r.useMemo((() => c), Object.values(c));
            return (0, o.jsx)(i.Provider, {
              value: d,
              children: a
            })
          };
          return c.displayName = n + "Provider", [c, function(t, o) {
            const c = o?.[e]?.[s] || u,
              i = r.useContext(c);
            if (i) return i;
            if (void 0 !== a) return a;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, s(a, ...n)]
      }

      function s(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const o = t.reduce(((n, {
              useScope: t,
              scopeName: r
            }) => ({
              ...n,
              ...t(e)[`__scope${r}`]
            })), {});
            return r.useMemo((() => ({
              [`__scope${n.scopeName}`]: o
            })), [o])
          }
        };
        return t.scopeName = n.scopeName, t
      }
    },
    94040: (e, n, t) => {
      t.d(n, {
        U: () => a
      });
      var r = t(71127),
        o = t(76286);

      function a(e, n = globalThis?.document) {
        const t = (0, o.c)(e);
        r.useEffect((() => {
          const e = e => {
            "Escape" === e.key && t(e)
          };
          return n.addEventListener("keydown", e, {
            capture: !0
          }), () => n.removeEventListener("keydown", e, {
            capture: !0
          })
        }), [t, n])
      }
    },
    94926: (e, n, t) => {
      t.d(n, {
        Eq: () => c
      });
      var r = new WeakMap,
        o = new WeakMap,
        a = {},
        u = 0,
        s = function(e) {
          return e && (e.host || s(e.parentNode))
        },
        c = function(e, n, t) {
          void 0 === t && (t = "data-aria-hidden");
          var c = Array.from(Array.isArray(e) ? e : [e]),
            i = n || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return i ? (c.push.apply(c, Array.from(i.querySelectorAll("[aria-live]"))), function(e, n, t, c) {
            var i = function(e, n) {
              return n.map((function(n) {
                if (e.contains(n)) return n;
                var t = s(n);
                return t && e.contains(t) ? t : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(n, Array.isArray(e) ? e : [e]);
            a[t] || (a[t] = new WeakMap);
            var d = a[t],
              f = [],
              l = new Set,
              p = new Set(i),
              y = function(e) {
                e && !l.has(e) && (l.add(e), y(e.parentNode))
              };
            i.forEach(y);
            var h = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (l.has(e)) h(e);
                else try {
                  var n = e.getAttribute(c),
                    a = null !== n && "false" !== n,
                    u = (r.get(e) || 0) + 1,
                    s = (d.get(e) || 0) + 1;
                  r.set(e, u), d.set(e, s), f.push(e), 1 === u && a && o.set(e, !0), 1 === s && e.setAttribute(t, "true"), a || e.setAttribute(c, "true")
                } catch (n) {
                  console.error("aria-hidden: cannot operate on ", e, n)
                }
              }))
            };
            return h(n), l.clear(), u++,
              function() {
                f.forEach((function(e) {
                  var n = r.get(e) - 1,
                    a = d.get(e) - 1;
                  r.set(e, n), d.set(e, a), n || (o.has(e) || e.removeAttribute(c), o.delete(e)), a || e.removeAttribute(t)
                })), --u || (r = new WeakMap, r = new WeakMap, o = new WeakMap, a = {})
              }
          }(c, i, t, "aria-hidden")) : function() {
            return null
          }
        }
    },
    95362: (e, n, t) => {
      t.d(n, {
        s: () => u,
        t: () => a
      });
      var r = t(71127);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
        return n => {
          let t = !1;
          const r = e.map((e => {
            const r = o(e, n);
            return t || "function" != typeof r || (t = !0), r
          }));
          if (t) return () => {
            for (let n = 0; n < r.length; n++) {
              const t = r[n];
              "function" == typeof t ? t() : o(e[n], null)
            }
          }
        }
      }

      function u(...e) {
        return r.useCallback(a(...e), e)
      }
    }
  }
]);