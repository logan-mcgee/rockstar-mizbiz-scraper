try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3230b1f0-1aa7-4ba4-8e96-9353447bc6e0", e._sentryDebugIdIdentifier = "sentry-dbid-3230b1f0-1aa7-4ba4-8e96-9353447bc6e0")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [6969], {
    94118(e, n, t) {
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
    85426(e, n, t) {
      t.d(n, {
        A: () => s,
        q: () => i
      });
      var r = t(71127),
        o = t(42295);

      function i(e, n) {
        const t = r.createContext(n),
          i = e => {
            const {
              children: n,
              ...i
            } = e, s = r.useMemo(() => i, Object.values(i));
            return (0, o.jsx)(t.Provider, {
              value: s,
              children: n
            })
          };
        return i.displayName = e + "Provider", [i, function(o) {
          const i = r.useContext(t);
          if (i) return i;
          if (void 0 !== n) return n;
          throw new Error(`\`${o}\` must be used within \`${e}\``)
        }]
      }

      function s(e, n = []) {
        let t = [];
        const i = () => {
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
        return i.scopeName = e, [function(n, i) {
          const s = r.createContext(i),
            u = t.length;
          t = [...t, i];
          const c = n => {
            const {
              scope: t,
              children: i,
              ...c
            } = n, a = t?.[e]?.[u] || s, d = r.useMemo(() => c, Object.values(c));
            return (0, o.jsx)(a.Provider, {
              value: d,
              children: i
            })
          };
          return c.displayName = n + "Provider", [c, function(t, o) {
            const c = o?.[e]?.[u] || s,
              a = r.useContext(c);
            if (a) return a;
            if (void 0 !== i) return i;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, u(i, ...n)]
      }

      function u(...e) {
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
    86126(e, n, t) {
      var r;
      t.d(n, {
        B: () => c
      });
      var o = t(71127),
        i = t(63155),
        s = (r || (r = t.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        u = 0;

      function c(e) {
        const [n, t] = o.useState(s());
        return (0, i.N)(() => {
          e || t(e => e ?? String(u++))
        }, [e]), e || (n ? `radix-${n}` : "")
      }
    },
    53146(e, n, t) {
      t.d(n, {
        C: () => s
      });
      var r = t(71127),
        o = t(95362),
        i = t(63155),
        s = e => {
          const {
            present: n,
            children: t
          } = e, s = function(e) {
            const [n, t] = r.useState(), o = r.useRef(null), s = r.useRef(e), c = r.useRef("none"), a = e ? "mounted" : "unmounted", [d, l] = function(e, n) {
              return r.useReducer((e, t) => n[e][t] ?? e, e)
            }(a, {
              mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
              },
              unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
              },
              unmounted: {
                MOUNT: "mounted"
              }
            });
            return r.useEffect(() => {
              const e = u(o.current);
              c.current = "mounted" === d ? e : "none"
            }, [d]), (0, i.N)(() => {
              const n = o.current,
                t = s.current;
              if (t !== e) {
                const r = c.current,
                  o = u(n);
                l(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e
              }
            }, [e, l]), (0, i.N)(() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const i = u(o.current).includes(CSS.escape(r.animationName));
                    if (r.target === n && i && (l("ANIMATION_END"), !s.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      })
                    }
                  },
                  i = e => {
                    e.target === n && (c.current = u(o.current))
                  };
                return n.addEventListener("animationstart", i), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", i), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
              }
              l("ANIMATION_END")
            }, [n, l]), {
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: r.useCallback(e => {
                o.current = e ? getComputedStyle(e) : null, t(e)
              }, [])
            }
          }(n), c = "function" == typeof t ? t({
            present: s.isPresent
          }) : r.Children.only(t), a = (0, o.s)(s.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(c));
          return "function" == typeof t || s.isPresent ? r.cloneElement(c, {
            ref: a
          }) : null
        };

      function u(e) {
        return e?.animationName || "none"
      }
      s.displayName = "Presence"
    },
    62228(e, n, t) {
      t.d(n, {
        sG: () => d,
        hO: () => l
      });
      var r = t(71127),
        o = t(18429),
        i = t(95362),
        s = t(42295);

      function u(e) {
        const n = r.forwardRef((e, n) => {
          const {
            children: t,
            ...o
          } = e;
          if (r.isValidElement(t)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = n && "isReactWarning" in n && n.isReactWarning;
                return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              s = function(e, n) {
                const t = {
                  ...n
                };
                for (const r in n) {
                  const o = e[r],
                    i = n[r];
                  /^on[A-Z]/.test(r) ? o && i ? t[r] = (...e) => {
                    const n = i(...e);
                    return o(...e), n
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (t[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(o, t.props);
            return t.type !== r.Fragment && (s.ref = n ? (0, i.t)(n, e) : e), r.cloneElement(t, s)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var c = Symbol("radix.slottable");

      function a(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c
      }
      var d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
        const t = function(e) {
            const n = u(e),
              t = r.forwardRef((e, t) => {
                const {
                  children: o,
                  ...i
                } = e, u = r.Children.toArray(o), c = u.find(a);
                if (c) {
                  const e = c.props.children,
                    o = u.map(n => n === c ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n);
                  return (0, s.jsx)(n, {
                    ...i,
                    ref: t,
                    children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
                  })
                }
                return (0, s.jsx)(n, {
                  ...i,
                  ref: t,
                  children: o
                })
              });
            return t.displayName = `${e}.Slot`, t
          }(`Primitive.${n}`),
          o = r.forwardRef((e, r) => {
            const {
              asChild: o,
              ...i
            } = e, u = o ? t : n;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(u, {
              ...i,
              ref: r
            })
          });
        return o.displayName = `Primitive.${n}`, {
          ...e,
          [n]: o
        }
      }, {});

      function l(e, n) {
        e && o.flushSync(() => e.dispatchEvent(n))
      }
    },
    53054(e, n, t) {
      var r;
      t.d(n, {
        i: () => u
      });
      var o = t(71127),
        i = t(63155),
        s = (r || (r = t.t(o, 2)))[" useInsertionEffect ".trim().toString()] || i.N;

      function u({
        prop: e,
        defaultProp: n,
        onChange: t = () => {},
        caller: r
      }) {
        const [i, u, c] = function({
          defaultProp: e,
          onChange: n
        }) {
          const [t, r] = o.useState(e), i = o.useRef(t), u = o.useRef(n);
          return s(() => {
            u.current = n
          }, [n]), o.useEffect(() => {
            i.current !== t && (u.current?.(t), i.current = t)
          }, [t, i]), [t, r, u]
        }({
          defaultProp: n,
          onChange: t
        }), a = void 0 !== e, d = a ? e : i; {
          const n = o.useRef(void 0 !== e);
          o.useEffect(() => {
            const e = n.current;
            if (e !== a) {
              const n = e ? "controlled" : "uncontrolled",
                t = a ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${n} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            n.current = a
          }, [a, r])
        }
        const l = o.useCallback(n => {
          if (a) {
            const t = function(e) {
              return "function" == typeof e
            }(n) ? n(e) : n;
            t !== e && c.current?.(t)
          } else u(n)
        }, [a, e, u, c]);
        return [d, l]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    63155(e, n, t) {
      t.d(n, {
        N: () => o
      });
      var r = t(71127),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    }
  }
]);