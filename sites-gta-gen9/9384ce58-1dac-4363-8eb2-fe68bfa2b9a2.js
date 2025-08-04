try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9384ce58-1dac-4363-8eb2-fe68bfa2b9a2", e._sentryDebugIdIdentifier = "sentry-dbid-9384ce58-1dac-4363-8eb2-fe68bfa2b9a2")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [4444], {
    22517: (e, n, t) => {
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
    48087: (e, n, t) => {
      var r;
      t.d(n, {
        i: () => u
      });
      var o = t(62229),
        c = t(92600),
        s = (r || (r = t.t(o, 2)))[" useInsertionEffect ".trim().toString()] || c.N;

      function u({
        prop: e,
        defaultProp: n,
        onChange: t = () => {},
        caller: r
      }) {
        const [c, u, i] = function({
          defaultProp: e,
          onChange: n
        }) {
          const [t, r] = o.useState(e), c = o.useRef(t), u = o.useRef(n);
          return s((() => {
            u.current = n
          }), [n]), o.useEffect((() => {
            c.current !== t && (u.current?.(t), c.current = t)
          }), [t, c]), [t, r, u]
        }({
          defaultProp: n,
          onChange: t
        }), a = void 0 !== e, l = a ? e : c; {
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
            t !== e && i.current?.(t)
          } else u(n)
        }), [a, e, u, i]);
        return [l, d]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    50438: (e, n, t) => {
      t.d(n, {
        N: () => i
      });
      var r = t(62229),
        o = t(91173),
        c = t(21423),
        s = t(83970),
        u = t(70954);

      function i(e) {
        const n = e + "CollectionProvider",
          [t, i] = (0, o.A)(n),
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
            } = e, o = r.useRef(null), c = r.useRef(new Map).current;
            return (0, u.jsx)(a, {
              scope: n,
              itemMap: c,
              collectionRef: o,
              children: t
            })
          };
        d.displayName = n;
        const f = e + "CollectionSlot",
          m = (0, s.TL)(f),
          p = r.forwardRef(((e, n) => {
            const {
              scope: t,
              children: r
            } = e, o = l(f, t), s = (0, c.s)(n, o.collectionRef);
            return (0, u.jsx)(m, {
              ref: s,
              children: r
            })
          }));
        p.displayName = f;
        const g = e + "CollectionItemSlot",
          y = "data-radix-collection-item",
          N = (0, s.TL)(g),
          h = r.forwardRef(((e, n) => {
            const {
              scope: t,
              children: o,
              ...s
            } = e, i = r.useRef(null), a = (0, c.s)(n, i), d = l(g, t);
            return r.useEffect((() => (d.itemMap.set(i, {
              ref: i,
              ...s
            }), () => {
              d.itemMap.delete(i)
            }))), (0, u.jsx)(N, {
              [y]: "",
              ref: a,
              children: o
            })
          }));
        return h.displayName = g, [{
          Provider: d,
          Slot: p,
          ItemSlot: h
        }, function(n) {
          const t = l(e + "CollectionConsumer", n);
          return r.useCallback((() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${y}]`));
            return Array.from(t.itemMap.values()).sort(((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current)))
          }), [t.collectionRef, t.itemMap])
        }, i]
      }
      Map
    },
    59219: (e, n, t) => {
      t.d(n, {
        jH: () => c
      });
      var r = t(62229),
        o = (t(70954), r.createContext(void 0));

      function c(e) {
        const n = r.useContext(o);
        return e || n || "ltr"
      }
    },
    79315: (e, n, t) => {
      t.d(n, {
        C: () => s
      });
      var r = t(62229),
        o = t(21423),
        c = t(92600),
        s = e => {
          const {
            present: n,
            children: t
          } = e, s = function(e) {
            const [n, t] = r.useState(), o = r.useRef(null), s = r.useRef(e), i = r.useRef("none"), a = e ? "mounted" : "unmounted", [l, d] = function(e, n) {
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
              const e = u(o.current);
              i.current = "mounted" === l ? e : "none"
            }), [l]), (0, c.N)((() => {
              const n = o.current,
                t = s.current;
              if (t !== e) {
                const r = i.current,
                  o = u(n);
                d(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e
              }
            }), [e, d]), (0, c.N)((() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const c = u(o.current).includes(r.animationName);
                    if (r.target === n && c && (d("ANIMATION_END"), !s.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout((() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      }))
                    }
                  },
                  c = e => {
                    e.target === n && (i.current = u(o.current))
                  };
                return n.addEventListener("animationstart", c), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", c), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
              }
              d("ANIMATION_END")
            }), [n, d]), {
              isPresent: ["mounted", "unmountSuspended"].includes(l),
              ref: r.useCallback((e => {
                o.current = e ? getComputedStyle(e) : null, t(e)
              }), [])
            }
          }(n), i = "function" == typeof t ? t({
            present: s.isPresent
          }) : r.Children.only(t), a = (0, o.s)(s.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(i));
          return "function" == typeof t || s.isPresent ? r.cloneElement(i, {
            ref: a
          }) : null
        };

      function u(e) {
        return e?.animationName || "none"
      }
      s.displayName = "Presence"
    },
    91173: (e, n, t) => {
      t.d(n, {
        A: () => s,
        q: () => c
      });
      var r = t(62229),
        o = t(70954);

      function c(e, n) {
        const t = r.createContext(n),
          c = e => {
            const {
              children: n,
              ...c
            } = e, s = r.useMemo((() => c), Object.values(c));
            return (0, o.jsx)(t.Provider, {
              value: s,
              children: n
            })
          };
        return c.displayName = e + "Provider", [c, function(o) {
          const c = r.useContext(t);
          if (c) return c;
          if (void 0 !== n) return n;
          throw new Error(`\`${o}\` must be used within \`${e}\``)
        }]
      }

      function s(e, n = []) {
        let t = [];
        const c = () => {
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
        return c.scopeName = e, [function(n, c) {
          const s = r.createContext(c),
            u = t.length;
          t = [...t, c];
          const i = n => {
            const {
              scope: t,
              children: c,
              ...i
            } = n, a = t?.[e]?.[u] || s, l = r.useMemo((() => i), Object.values(i));
            return (0, o.jsx)(a.Provider, {
              value: l,
              children: c
            })
          };
          return i.displayName = n + "Provider", [i, function(t, o) {
            const i = o?.[e]?.[u] || s,
              a = r.useContext(i);
            if (a) return a;
            if (void 0 !== c) return c;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, u(c, ...n)]
      }

      function u(...e) {
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
    92600: (e, n, t) => {
      t.d(n, {
        N: () => o
      });
      var r = t(62229),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    95187: (e, n, t) => {
      var r;
      t.d(n, {
        B: () => i
      });
      var o = t(62229),
        c = t(92600),
        s = (r || (r = t.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        u = 0;

      function i(e) {
        const [n, t] = o.useState(s());
        return (0, c.N)((() => {
          e || t((e => e ?? String(u++)))
        }), [e]), e || (n ? `radix-${n}` : "")
      }
    }
  }
]);