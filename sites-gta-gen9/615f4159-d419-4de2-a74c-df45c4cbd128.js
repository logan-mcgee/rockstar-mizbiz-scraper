try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "615f4159-d419-4de2-a74c-df45c4cbd128", e._sentryDebugIdIdentifier = "sentry-dbid-615f4159-d419-4de2-a74c-df45c4cbd128")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [7777], {
    19264: (e, n, t) => {
      t.d(n, {
        jH: () => s
      });
      var r = t(62229),
        o = (t(25854), r.createContext(void 0));

      function s(e) {
        const n = r.useContext(o);
        return e || n || "ltr"
      }
    },
    29818: (e, n, t) => {
      t.d(n, {
        A: () => c,
        q: () => s
      });
      var r = t(62229),
        o = t(25854);

      function s(e, n) {
        const t = r.createContext(n),
          s = e => {
            const {
              children: n,
              ...s
            } = e, c = r.useMemo((() => s), Object.values(s));
            return (0, o.jsx)(t.Provider, {
              value: c,
              children: n
            })
          };
        return s.displayName = e + "Provider", [s, function(o) {
          const s = r.useContext(t);
          if (s) return s;
          if (void 0 !== n) return n;
          throw new Error(`\`${o}\` must be used within \`${e}\``)
        }]
      }

      function c(e, n = []) {
        let t = [];
        const s = () => {
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
        return s.scopeName = e, [function(n, s) {
          const c = r.createContext(s),
            i = t.length;
          t = [...t, s];
          const u = n => {
            const {
              scope: t,
              children: s,
              ...u
            } = n, a = t?.[e]?.[i] || c, l = r.useMemo((() => u), Object.values(u));
            return (0, o.jsx)(a.Provider, {
              value: l,
              children: s
            })
          };
          return u.displayName = n + "Provider", [u, function(t, o) {
            const u = o?.[e]?.[i] || c,
              a = r.useContext(u);
            if (a) return a;
            if (void 0 !== s) return s;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, i(s, ...n)]
      }

      function i(...e) {
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
    30822: (e, n, t) => {
      var r;
      t.d(n, {
        B: () => u
      });
      var o = t(62229),
        s = t(85307),
        c = (r || (r = t.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        i = 0;

      function u(e) {
        const [n, t] = o.useState(c());
        return (0, s.N)((() => {
          e || t((e => e ?? String(i++)))
        }), [e]), e || (n ? `radix-${n}` : "")
      }
    },
    36146: (e, n, t) => {
      t.d(n, {
        C: () => c
      });
      var r = t(62229),
        o = t(86410),
        s = t(85307),
        c = e => {
          const {
            present: n,
            children: t
          } = e, c = function(e) {
            const [n, t] = r.useState(), o = r.useRef(null), c = r.useRef(e), u = r.useRef("none"), a = e ? "mounted" : "unmounted", [l, d] = function(e, n) {
              return r.useReducer(((e, t) => n[e][t] ?? e), e)
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
            return r.useEffect((() => {
              const e = i(o.current);
              u.current = "mounted" === l ? e : "none"
            }), [l]), (0, s.N)((() => {
              const n = o.current,
                t = c.current;
              if (t !== e) {
                const r = u.current,
                  o = i(n);
                d(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), c.current = e
              }
            }), [e, d]), (0, s.N)((() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const s = i(o.current).includes(r.animationName);
                    if (r.target === n && s && (d("ANIMATION_END"), !c.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout((() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      }))
                    }
                  },
                  s = e => {
                    e.target === n && (u.current = i(o.current))
                  };
                return n.addEventListener("animationstart", s), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", s), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
              }
              d("ANIMATION_END")
            }), [n, d]), {
              isPresent: ["mounted", "unmountSuspended"].includes(l),
              ref: r.useCallback((e => {
                o.current = e ? getComputedStyle(e) : null, t(e)
              }), [])
            }
          }(n), u = "function" == typeof t ? t({
            present: c.isPresent
          }) : r.Children.only(t), a = (0, o.s)(c.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(u));
          return "function" == typeof t || c.isPresent ? r.cloneElement(u, {
            ref: a
          }) : null
        };

      function i(e) {
        return e?.animationName || "none"
      }
      c.displayName = "Presence"
    },
    52806: (e, n, t) => {
      var r;
      t.d(n, {
        i: () => i
      });
      var o = t(62229),
        s = t(85307),
        c = (r || (r = t.t(o, 2)))[" useInsertionEffect ".trim().toString()] || s.N;

      function i({
        prop: e,
        defaultProp: n,
        onChange: t = () => {},
        caller: r
      }) {
        const [s, i, u] = function({
          defaultProp: e,
          onChange: n
        }) {
          const [t, r] = o.useState(e), s = o.useRef(t), i = o.useRef(n);
          return c((() => {
            i.current = n
          }), [n]), o.useEffect((() => {
            s.current !== t && (i.current?.(t), s.current = t)
          }), [t, s]), [t, r, i]
        }({
          defaultProp: n,
          onChange: t
        }), a = void 0 !== e, l = a ? e : s; {
          const n = o.useRef(void 0 !== e);
          o.useEffect((() => {
            const e = n.current;
            if (e !== a) {
              const n = e ? "controlled" : "uncontrolled",
                t = a ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${n} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            n.current = a
          }), [a, r])
        }
        const d = o.useCallback((n => {
          if (a) {
            const t = function(e) {
              return "function" == typeof e
            }(n) ? n(e) : n;
            t !== e && u.current?.(t)
          } else i(n)
        }), [a, e, i, u]);
        return [l, d]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    65998: (e, n, t) => {
      function r(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }
      t.d(n, {
        m: () => r
      })
    },
    80355: (e, n, t) => {
      t.d(n, {
        N: () => u
      });
      var r = t(62229),
        o = t(29818),
        s = t(86410),
        c = t(23135),
        i = t(25854);

      function u(e) {
        const n = e + "CollectionProvider",
          [t, u] = (0, o.A)(n),
          [a, l] = t(n, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          d = e => {
            const {
              scope: n,
              children: t
            } = e, o = r.useRef(null), s = r.useRef(new Map).current;
            return (0, i.jsx)(a, {
              scope: n,
              itemMap: s,
              collectionRef: o,
              children: t
            })
          };
        d.displayName = n;
        const f = e + "CollectionSlot",
          m = (0, c.TL)(f),
          p = r.forwardRef(((e, n) => {
            const {
              scope: t,
              children: r
            } = e, o = l(f, t), c = (0, s.s)(n, o.collectionRef);
            return (0, i.jsx)(m, {
              ref: c,
              children: r
            })
          }));
        p.displayName = f;
        const g = e + "CollectionItemSlot",
          y = "data-radix-collection-item",
          N = (0, c.TL)(g),
          v = r.forwardRef(((e, n) => {
            const {
              scope: t,
              children: o,
              ...c
            } = e, u = r.useRef(null), a = (0, s.s)(n, u), d = l(g, t);
            return r.useEffect((() => (d.itemMap.set(u, {
              ref: u,
              ...c
            }), () => {
              d.itemMap.delete(u)
            }))), (0, i.jsx)(N, {
              [y]: "",
              ref: a,
              children: o
            })
          }));
        return v.displayName = g, [{
          Provider: d,
          Slot: p,
          ItemSlot: v
        }, function(n) {
          const t = l(e + "CollectionConsumer", n);
          return r.useCallback((() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${y}]`));
            return Array.from(t.itemMap.values()).sort(((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current)))
          }), [t.collectionRef, t.itemMap])
        }, u]
      }
      Map
    },
    85100: (e, n, t) => {
      t.d(n, {
        hO: () => u,
        sG: () => i
      });
      var r = t(62229),
        o = t(44853),
        s = t(23135),
        c = t(25854),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, n) => {
          const t = (0, s.TL)(`Primitive.${n}`),
            o = r.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...s
              } = e, i = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, c.jsx)(i, {
                ...s,
                ref: r
              })
            }));
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }), {});

      function u(e, n) {
        e && o.flushSync((() => e.dispatchEvent(n)))
      }
    },
    85307: (e, n, t) => {
      t.d(n, {
        N: () => o
      });
      var r = t(62229),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    }
  }
]);