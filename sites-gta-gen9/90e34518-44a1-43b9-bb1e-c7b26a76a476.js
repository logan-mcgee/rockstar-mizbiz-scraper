try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "90e34518-44a1-43b9-bb1e-c7b26a76a476", e._sentryDebugIdIdentifier = "sentry-dbid-90e34518-44a1-43b9-bb1e-c7b26a76a476")
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
  [7819], {
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
    31201(e, n, t) {
      t.d(n, {
        A: () => s,
        q: () => i
      });
      var r = t(93082),
        o = t(39793);

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
            a = t.length;
          t = [...t, i];
          const u = n => {
            const {
              scope: t,
              children: i,
              ...u
            } = n, c = t?.[e]?.[a] || s, d = r.useMemo(() => u, Object.values(u));
            return (0, o.jsx)(c.Provider, {
              value: d,
              children: i
            })
          };
          return u.displayName = n + "Provider", [u, function(t, o) {
            const u = o?.[e]?.[a] || s,
              c = r.useContext(u);
            if (c) return c;
            if (void 0 !== i) return i;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, a(i, ...n)]
      }

      function a(...e) {
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
    96883(e, n, t) {
      var r;
      t.d(n, {
        B: () => u
      });
      var o = t(93082),
        i = t(86627),
        s = (r || (r = t.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        a = 0;

      function u(e) {
        const [n, t] = o.useState(s());
        return (0, i.N)(() => {
          e || t(e => e ?? String(a++))
        }, [e]), e || (n ? `radix-${n}` : "")
      }
    },
    47306(e, n, t) {
      t.d(n, {
        C: () => s
      });
      var r = t(93082),
        o = t(50446),
        i = t(86627),
        s = e => {
          const {
            present: n,
            children: t
          } = e, s = function(e) {
            const [n, t] = r.useState(), o = r.useRef(null), s = r.useRef(e), u = r.useRef("none"), c = e ? "mounted" : "unmounted", [d, l] = function(e, n) {
              return r.useReducer((e, t) => n[e][t] ?? e, e)
            }(c, {
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
              const e = a(o.current);
              u.current = "mounted" === d ? e : "none"
            }, [d]), (0, i.N)(() => {
              const n = o.current,
                t = s.current;
              if (t !== e) {
                const r = u.current,
                  o = a(n);
                l(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e
              }
            }, [e, l]), (0, i.N)(() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const i = a(o.current).includes(CSS.escape(r.animationName));
                    if (r.target === n && i && (l("ANIMATION_END"), !s.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      })
                    }
                  },
                  i = e => {
                    e.target === n && (u.current = a(o.current))
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
          }(n), u = "function" == typeof t ? t({
            present: s.isPresent
          }) : r.Children.only(t), c = (0, o.s)(s.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(u));
          return "function" == typeof t || s.isPresent ? r.cloneElement(u, {
            ref: c
          }) : null
        };

      function a(e) {
        return e?.animationName || "none"
      }
      s.displayName = "Presence"
    },
    66704(e, n, t) {
      t.d(n, {
        hO: () => u,
        sG: () => a
      });
      var r = t(93082),
        o = t(84017),
        i = t(2976),
        s = t(39793),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, i.TL)(`Primitive.${n}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(a, {
                ...i,
                ref: r
              })
            });
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }, {});

      function u(e, n) {
        e && o.flushSync(() => e.dispatchEvent(n))
      }
    },
    2976(e, n, t) {
      t.d(n, {
        Dc: () => c,
        TL: () => s
      });
      var r = t(93082),
        o = t(50446),
        i = t(39793);

      function s(e) {
        const n = a(e),
          t = r.forwardRef((e, t) => {
            const {
              children: o,
              ...s
            } = e, a = r.Children.toArray(o), u = a.find(d);
            if (u) {
              const e = u.props.children,
                o = a.map(n => n === u ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n);
              return (0, i.jsx)(n, {
                ...s,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, i.jsx)(n, {
              ...s,
              ref: t,
              children: o
            })
          });
        return t.displayName = `${e}.Slot`, t
      }

      function a(e) {
        const n = r.forwardRef((e, n) => {
          const {
            children: t,
            ...i
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
              }(i, t.props);
            return t.type !== r.Fragment && (s.ref = n ? (0, o.t)(n, e) : e), r.cloneElement(t, s)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var u = Symbol("radix.slottable");

      function c(e) {
        const n = ({
          children: e
        }) => (0, i.jsx)(i.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = u, n
      }

      function d(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === u
      }
    },
    1531(e, n, t) {
      var r;
      t.d(n, {
        i: () => a
      });
      var o = t(93082),
        i = t(86627),
        s = (r || (r = t.t(o, 2)))[" useInsertionEffect ".trim().toString()] || i.N;

      function a({
        prop: e,
        defaultProp: n,
        onChange: t = () => {},
        caller: r
      }) {
        const [i, a, u] = function({
          defaultProp: e,
          onChange: n
        }) {
          const [t, r] = o.useState(e), i = o.useRef(t), a = o.useRef(n);
          return s(() => {
            a.current = n
          }, [n]), o.useEffect(() => {
            i.current !== t && (a.current?.(t), i.current = t)
          }, [t, i]), [t, r, a]
        }({
          defaultProp: n,
          onChange: t
        }), c = void 0 !== e, d = c ? e : i; {
          const n = o.useRef(void 0 !== e);
          o.useEffect(() => {
            const e = n.current;
            if (e !== c) {
              const n = e ? "controlled" : "uncontrolled",
                t = c ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${n} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            n.current = c
          }, [c, r])
        }
        const l = o.useCallback(n => {
          if (c) {
            const t = function(e) {
              return "function" == typeof e
            }(n) ? n(e) : n;
            t !== e && u.current?.(t)
          } else a(n)
        }, [c, e, a, u]);
        return [d, l]
      }
      Symbol("RADIX:SYNC_STATE")
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