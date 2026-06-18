try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c18813ef-36db-43f1-b25d-e18f8aeb9318", e._sentryDebugIdIdentifier = "sentry-dbid-c18813ef-36db-43f1-b25d-e18f8aeb9318")
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
  [9910], {
    45787(e, n, t) {
      t.d(n, {
        Eq: () => s
      });
      var r = new WeakMap,
        o = new WeakMap,
        a = {},
        c = 0,
        i = function(e) {
          return e && (e.host || i(e.parentNode))
        },
        s = function(e, n, t) {
          void 0 === t && (t = "data-aria-hidden");
          var s = Array.from(Array.isArray(e) ? e : [e]),
            u = n || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return u ? (s.push.apply(s, Array.from(u.querySelectorAll("[aria-live], script"))), function(e, n, t, s) {
            var u = function(e, n) {
              return n.map(function(n) {
                if (e.contains(n)) return n;
                var t = i(n);
                return t && e.contains(t) ? t : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(n, Array.isArray(e) ? e : [e]);
            a[t] || (a[t] = new WeakMap);
            var d = a[t],
              l = [],
              f = new Set,
              p = new Set(u),
              y = function(e) {
                e && !f.has(e) && (f.add(e), y(e.parentNode))
              };
            u.forEach(y);
            var m = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (f.has(e)) m(e);
                else try {
                  var n = e.getAttribute(s),
                    a = null !== n && "false" !== n,
                    c = (r.get(e) || 0) + 1,
                    i = (d.get(e) || 0) + 1;
                  r.set(e, c), d.set(e, i), l.push(e), 1 === c && a && o.set(e, !0), 1 === i && e.setAttribute(t, "true"), a || e.setAttribute(s, "true")
                } catch (n) {
                  console.error("aria-hidden: cannot operate on ", e, n)
                }
              })
            };
            return m(n), f.clear(), c++,
              function() {
                l.forEach(function(e) {
                  var n = r.get(e) - 1,
                    a = d.get(e) - 1;
                  r.set(e, n), d.set(e, a), n || (o.has(e) || e.removeAttribute(s), o.delete(e)), a || e.removeAttribute(t)
                }), --c || (r = new WeakMap, r = new WeakMap, o = new WeakMap, a = {})
              }
          }(s, u, t, "aria-hidden")) : function() {
            return null
          }
        }
    },
    8316(e, n, t) {
      function r(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }
      t.d(n, {
        mK: () => r
      }), "undefined" == typeof window || !window.document || window.document.createElement
    },
    53582(e, n, t) {
      t.d(n, {
        A: () => c,
        q: () => a
      });
      var r = t(93082),
        o = t(39793);

      function a(e, n) {
        const t = r.createContext(n),
          a = e => {
            const {
              children: n,
              ...a
            } = e, c = r.useMemo(() => a, Object.values(a));
            return (0, o.jsx)(t.Provider, {
              value: c,
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

      function c(e, n = []) {
        let t = [];
        const a = () => {
          const n = t.map(e => r.createContext(e));
          return function(t) {
            const o = t?.[e] || n;
            return r.useMemo(() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: o
              }
            }), [t, o])
          }
        };
        return a.scopeName = e, [function(n, a) {
          const c = r.createContext(a),
            i = t.length;
          t = [...t, a];
          const s = n => {
            const {
              scope: t,
              children: a,
              ...s
            } = n, u = t?.[e]?.[i] || c, d = r.useMemo(() => s, Object.values(s));
            return (0, o.jsx)(u.Provider, {
              value: d,
              children: a
            })
          };
          return s.displayName = n + "Provider", [s, function(t, o) {
            const s = o?.[e]?.[i] || c,
              u = r.useContext(s);
            if (u) return u;
            if (void 0 !== a) return a;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, i(a, ...n)]
      }

      function i(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const o = t.reduce((n, {
              useScope: t,
              scopeName: r
            }) => ({
              ...n,
              ...t(e)[`__scope${r}`]
            }), {});
            return r.useMemo(() => ({
              [`__scope${n.scopeName}`]: o
            }), [o])
          }
        };
        return t.scopeName = n.scopeName, t
      }
    },
    91685(e, n, t) {
      t.d(n, {
        Oh: () => a
      });
      var r = t(93082),
        o = 0;

      function a() {
        r.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? c()), document.body.insertAdjacentElement("beforeend", e[1] ?? c()), o++, () => {
            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), o--
          }
        }, [])
      }

      function c() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
    },
    96883(e, n, t) {
      var r;
      t.d(n, {
        B: () => s
      });
      var o = t(93082),
        a = t(86627),
        c = (r || (r = t.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        i = 0;

      function s(e) {
        const [n, t] = o.useState(c());
        return (0, a.N)(() => {
          e || t(e => e ?? String(i++))
        }, [e]), e || (n ? `radix-${n}` : "")
      }
    },
    2976(e, n, t) {
      t.d(n, {
        Dc: () => u,
        TL: () => c
      });
      var r = t(93082),
        o = t(50446),
        a = t(39793);

      function c(e) {
        const n = i(e),
          t = r.forwardRef((e, t) => {
            const {
              children: o,
              ...c
            } = e, i = r.Children.toArray(o), s = i.find(d);
            if (s) {
              const e = s.props.children,
                o = i.map(n => n === s ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n);
              return (0, a.jsx)(n, {
                ...c,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, a.jsx)(n, {
              ...c,
              ref: t,
              children: o
            })
          });
        return t.displayName = `${e}.Slot`, t
      }

      function i(e) {
        const n = r.forwardRef((e, n) => {
          const {
            children: t,
            ...a
          } = e;
          if (r.isValidElement(t)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = n && "isReactWarning" in n && n.isReactWarning;
                return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              c = function(e, n) {
                const t = {
                  ...n
                };
                for (const r in n) {
                  const o = e[r],
                    a = n[r];
                  /^on[A-Z]/.test(r) ? o && a ? t[r] = (...e) => {
                    const n = a(...e);
                    return o(...e), n
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...a
                  } : "className" === r && (t[r] = [o, a].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(a, t.props);
            return t.type !== r.Fragment && (c.ref = n ? (0, o.t)(n, e) : e), r.cloneElement(t, c)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var s = Symbol("radix.slottable");

      function u(e) {
        const n = ({
          children: e
        }) => (0, a.jsx)(a.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = s, n
      }

      function d(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === s
      }
    },
    38351(e, n, t) {
      t.d(n, {
        c: () => o
      });
      var r = t(93082);

      function o(e) {
        const n = r.useRef(e);
        return r.useEffect(() => {
          n.current = e
        }), r.useMemo(() => (...e) => n.current?.(...e), [])
      }
    },
    1531(e, n, t) {
      var r;
      t.d(n, {
        i: () => i
      });
      var o = t(93082),
        a = t(86627),
        c = (r || (r = t.t(o, 2)))[" useInsertionEffect ".trim().toString()] || a.N;

      function i({
        prop: e,
        defaultProp: n,
        onChange: t = () => {},
        caller: r
      }) {
        const [a, i, s] = function({
          defaultProp: e,
          onChange: n
        }) {
          const [t, r] = o.useState(e), a = o.useRef(t), i = o.useRef(n);
          return c(() => {
            i.current = n
          }, [n]), o.useEffect(() => {
            a.current !== t && (i.current?.(t), a.current = t)
          }, [t, a]), [t, r, i]
        }({
          defaultProp: n,
          onChange: t
        }), u = void 0 !== e, d = u ? e : a; {
          const n = o.useRef(void 0 !== e);
          o.useEffect(() => {
            const e = n.current;
            if (e !== u) {
              const n = e ? "controlled" : "uncontrolled",
                t = u ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${n} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            n.current = u
          }, [u, r])
        }
        const l = o.useCallback(n => {
          if (u) {
            const t = function(e) {
              return "function" == typeof e
            }(n) ? n(e) : n;
            t !== e && s.current?.(t)
          } else i(n)
        }, [u, e, i, s]);
        return [d, l]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    2471(e, n, t) {
      t.d(n, {
        U: () => a
      });
      var r = t(93082),
        o = t(38351);

      function a(e, n = globalThis?.document) {
        const t = (0, o.c)(e);
        r.useEffect(() => {
          const e = e => {
            "Escape" === e.key && t(e)
          };
          return n.addEventListener("keydown", e, {
            capture: !0
          }), () => n.removeEventListener("keydown", e, {
            capture: !0
          })
        }, [t, n])
      }
    },
    86627(e, n, t) {
      t.d(n, {
        N: () => o
      });
      var r = t(93082),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    }
  }
]);