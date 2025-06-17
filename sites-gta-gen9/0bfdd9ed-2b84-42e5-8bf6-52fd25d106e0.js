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
        A: () => a,
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
            } = e, a = r.useMemo((() => s), Object.values(s));
            return (0, o.jsx)(t.Provider, {
              value: a,
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

      function a(e, n = []) {
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
          const a = r.createContext(s),
            u = t.length;
          t = [...t, s];
          const i = n => {
            const {
              scope: t,
              children: s,
              ...i
            } = n, c = t?.[e]?.[u] || a, l = r.useMemo((() => i), Object.values(i));
            return (0, o.jsx)(c.Provider, {
              value: l,
              children: s
            })
          };
          return i.displayName = n + "Provider", [i, function(t, o) {
            const i = o?.[e]?.[u] || a,
              c = r.useContext(i);
            if (c) return c;
            if (void 0 !== s) return s;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, u(s, ...n)]
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
        s = t(85307),
        a = (r || (r = t.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        u = 0;

      function i(e) {
        const [n, t] = o.useState(a());
        return (0, s.N)((() => {
          e || t((e => e ?? String(u++)))
        }), [e]), e || (n ? `radix-${n}` : "")
      }
    },
    36146: (e, n, t) => {
      t.d(n, {
        C: () => a
      });
      var r = t(62229),
        o = t(86410),
        s = t(85307),
        a = e => {
          const {
            present: n,
            children: t
          } = e, a = function(e) {
            const [n, t] = r.useState(), o = r.useRef(null), a = r.useRef(e), i = r.useRef("none"), c = e ? "mounted" : "unmounted", [l, d] = function(e, n) {
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
            }), [l]), (0, s.N)((() => {
              const n = o.current,
                t = a.current;
              if (t !== e) {
                const r = i.current,
                  o = u(n);
                d(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e
              }
            }), [e, d]), (0, s.N)((() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const s = u(o.current).includes(r.animationName);
                    if (r.target === n && s && (d("ANIMATION_END"), !a.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout((() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      }))
                    }
                  },
                  s = e => {
                    e.target === n && (i.current = u(o.current))
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
          }(n), i = "function" == typeof t ? t({
            present: a.isPresent
          }) : r.Children.only(t), c = (0, o.s)(a.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(i));
          return "function" == typeof t || a.isPresent ? r.cloneElement(i, {
            ref: c
          }) : null
        };

      function u(e) {
        return e?.animationName || "none"
      }
      a.displayName = "Presence"
    },
    52806: (e, n, t) => {
      var r;
      t.d(n, {
        i: () => u
      });
      var o = t(62229),
        s = t(85307),
        a = (r || (r = t.t(o, 2)))[" useInsertionEffect ".trim().toString()] || s.N;

      function u({
        prop: e,
        defaultProp: n,
        onChange: t = () => {},
        caller: r
      }) {
        const [s, u, i] = function({
          defaultProp: e,
          onChange: n
        }) {
          const [t, r] = o.useState(e), s = o.useRef(t), u = o.useRef(n);
          return a((() => {
            u.current = n
          }), [n]), o.useEffect((() => {
            s.current !== t && (u.current?.(t), s.current = t)
          }), [t, s]), [t, r, u]
        }({
          defaultProp: n,
          onChange: t
        }), c = void 0 !== e, l = c ? e : s; {
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
        s = t(86410),
        a = t(23135),
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
            } = e, o = r.useRef(null), s = r.useRef(new Map).current;
            return (0, u.jsx)(c, {
              scope: n,
              itemMap: s,
              collectionRef: o,
              children: t
            })
          };
        d.displayName = n;
        const f = e + "CollectionSlot",
          m = (0, a.TL)(f),
          p = r.forwardRef(((e, n) => {
            const {
              scope: t,
              children: r
            } = e, o = l(f, t), a = (0, s.s)(n, o.collectionRef);
            return (0, u.jsx)(m, {
              ref: a,
              children: r
            })
          }));
        p.displayName = f;
        const b = e + "CollectionItemSlot",
          y = "data-radix-collection-item",
          g = (0, a.TL)(b),
          M = r.forwardRef(((e, n) => {
            const {
              scope: t,
              children: o,
              ...a
            } = e, i = r.useRef(null), c = (0, s.s)(n, i), d = l(b, t);
            return r.useEffect((() => (d.itemMap.set(i, {
              ref: i,
              ...a
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
        s = t(23135),
        a = t(25854),
        u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, n) => {
          const t = (0, s.TL)(`Primitive.${n}`),
            o = r.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...s
              } = e, u = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(u, {
                ...s,
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