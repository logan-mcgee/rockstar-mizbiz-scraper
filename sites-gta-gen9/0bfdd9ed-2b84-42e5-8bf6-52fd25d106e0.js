! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0bfdd9ed-2b84-42e5-8bf6-52fd25d106e0", e._sentryDebugIdIdentifier = "sentry-dbid-0bfdd9ed-2b84-42e5-8bf6-52fd25d106e0")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [7777], {
    19264: (e, n, t) => {
      t.d(n, {
        jH: () => a
      });
      var r = t(62229),
        o = (t(25854), r.createContext(void 0));

      function a(e) {
        const n = r.useContext(o);
        return e || n || "ltr"
      }
    },
    29818: (e, n, t) => {
      t.d(n, {
        A: () => s,
        q: () => a
      });
      var r = t(62229),
        o = t(25854);

      function a(e, n) {
        const t = r.createContext(n),
          a = e => {
            const {
              children: n,
              ...a
            } = e, s = r.useMemo((() => a), Object.values(a));
            return (0, o.jsx)(t.Provider, {
              value: s,
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

      function s(e, n = []) {
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
          const s = r.createContext(a),
            u = t.length;
          t = [...t, a];
          const i = n => {
            const {
              scope: t,
              children: a,
              ...i
            } = n, c = t?.[e]?.[u] || s, l = r.useMemo((() => i), Object.values(i));
            return (0, o.jsx)(c.Provider, {
              value: l,
              children: a
            })
          };
          return i.displayName = n + "Provider", [i, function(t, o) {
            const i = o?.[e]?.[u] || s,
              c = r.useContext(i);
            if (c) return c;
            if (void 0 !== a) return a;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, u(a, ...n)]
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
    30822: (e, n, t) => {
      var r;
      t.d(n, {
        B: () => i
      });
      var o = t(62229),
        a = t(85307),
        s = (r || (r = t.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        u = 0;

      function i(e) {
        const [n, t] = o.useState(s());
        return (0, a.N)((() => {
          e || t((e => e ?? String(u++)))
        }), [e]), e || (n ? `radix-${n}` : "")
      }
    },
    36146: (e, n, t) => {
      t.d(n, {
        C: () => s
      });
      var r = t(62229),
        o = t(86410),
        a = t(85307),
        s = e => {
          const {
            present: n,
            children: t
          } = e, s = function(e) {
            const [n, t] = r.useState(), o = r.useRef(null), s = r.useRef(e), i = r.useRef("none"), c = e ? "mounted" : "unmounted", [l, d] = function(e, n) {
              return r.useReducer(((e, t) => n[e][t] ?? e), e)
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
            return r.useEffect((() => {
              const e = u(o.current);
              i.current = "mounted" === l ? e : "none"
            }), [l]), (0, a.N)((() => {
              const n = o.current,
                t = s.current;
              if (t !== e) {
                const r = i.current,
                  o = u(n);
                d(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e
              }
            }), [e, d]), (0, a.N)((() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const a = u(o.current).includes(r.animationName);
                    if (r.target === n && a && (d("ANIMATION_END"), !s.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout((() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      }))
                    }
                  },
                  a = e => {
                    e.target === n && (i.current = u(o.current))
                  };
                return n.addEventListener("animationstart", a), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", a), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
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
          }) : r.Children.only(t), c = (0, o.s)(s.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(i));
          return "function" == typeof t || s.isPresent ? r.cloneElement(i, {
            ref: c
          }) : null
        };

      function u(e) {
        return e?.animationName || "none"
      }
      s.displayName = "Presence"
    },
    52806: (e, n, t) => {
      var r;
      t.d(n, {
        i: () => u
      });
      var o = t(62229),
        a = t(85307),
        s = (r || (r = t.t(o, 2)))[" useInsertionEffect ".trim().toString()] || a.N;

      function u({
        prop: e,
        defaultProp: n,
        onChange: t = () => {},
        caller: r
      }) {
        const [a, u, i] = function({
          defaultProp: e,
          onChange: n
        }) {
          const [t, r] = o.useState(e), a = o.useRef(t), u = o.useRef(n);
          return s((() => {
            u.current = n
          }), [n]), o.useEffect((() => {
            a.current !== t && (u.current?.(t), a.current = t)
          }), [t, a]), [t, r, u]
        }({
          defaultProp: n,
          onChange: t
        }), c = void 0 !== e, l = c ? e : a; {
          const n = o.useRef(void 0 !== e);
          o.useEffect((() => {
            const e = n.current;
            if (e !== c) {
              const n = e ? "controlled" : "uncontrolled",
                t = c ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${n} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            n.current = c
          }), [c, r])
        }
        const d = o.useCallback((n => {
          if (c) {
            const t = function(e) {
              return "function" == typeof e
            }(n) ? n(e) : n;
            t !== e && i.current?.(t)
          } else u(n)
        }), [c, e, u, i]);
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
        N: () => i
      });
      var r = t(62229),
        o = t(29818),
        a = t(86410),
        s = t(23135),
        u = t(25854);

      function i(e) {
        const n = e + "CollectionProvider",
          [t, i] = (0, o.A)(n),
          [c, l] = t(n, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          d = e => {
            const {
              scope: n,
              children: t
            } = e, o = r.useRef(null), a = r.useRef(new Map).current;
            return (0, u.jsx)(c, {
              scope: n,
              itemMap: a,
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
            } = e, o = l(f, t), s = (0, a.s)(n, o.collectionRef);
            return (0, u.jsx)(m, {
              ref: s,
              children: r
            })
          }));
        p.displayName = f;
        const b = e + "CollectionItemSlot",
          y = "data-radix-collection-item",
          g = (0, s.TL)(b),
          M = r.forwardRef(((e, n) => {
            const {
              scope: t,
              children: o,
              ...s
            } = e, i = r.useRef(null), c = (0, a.s)(n, i), d = l(b, t);
            return r.useEffect((() => (d.itemMap.set(i, {
              ref: i,
              ...s
            }), () => {
              d.itemMap.delete(i)
            }))), (0, u.jsx)(g, {
              [y]: "",
              ref: c,
              children: o
            })
          }));
        return M.displayName = b, [{
          Provider: d,
          Slot: p,
          ItemSlot: M
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
    85100: (e, n, t) => {
      t.d(n, {
        hO: () => i,
        sG: () => u
      });
      var r = t(62229),
        o = t(44853),
        a = t(23135),
        s = t(25854),
        u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, n) => {
          const t = (0, a.TL)(`Primitive.${n}`),
            o = r.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, u = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(u, {
                ...a,
                ref: r
              })
            }));
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }), {});

      function i(e, n) {
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