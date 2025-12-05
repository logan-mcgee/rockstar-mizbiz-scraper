try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3fab4b46-8f9d-4017-88f5-4d65853cef0f", e._sentryDebugIdIdentifier = "sentry-dbid-3fab4b46-8f9d-4017-88f5-4d65853cef0f")
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
  [4564], {
    20027: (e, n, t) => {
      t.d(n, {
        N: () => d
      });
      var r = t(62229),
        o = t(85426),
        i = t(95362),
        s = t(39447),
        a = t(42295);

      function d(e) {
        const n = e + "CollectionProvider",
          [t, d] = (0, o.A)(n),
          [c, l] = t(n, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          u = e => {
            const {
              scope: n,
              children: t
            } = e, o = r.useRef(null), i = r.useRef(new Map).current;
            return (0, a.jsx)(c, {
              scope: n,
              itemMap: i,
              collectionRef: o,
              children: t
            })
          };
        u.displayName = n;
        const f = e + "CollectionSlot",
          m = (0, s.TL)(f),
          p = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: r
            } = e, o = l(f, t), s = (0, i.s)(n, o.collectionRef);
            return (0, a.jsx)(m, {
              ref: s,
              children: r
            })
          });
        p.displayName = f;
        const y = e + "CollectionItemSlot",
          g = "data-radix-collection-item",
          w = (0, s.TL)(y),
          N = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: o,
              ...s
            } = e, d = r.useRef(null), c = (0, i.s)(n, d), u = l(y, t);
            return r.useEffect(() => (u.itemMap.set(d, {
              ref: d,
              ...s
            }), () => {
              u.itemMap.delete(d)
            })), (0, a.jsx)(w, {
              [g]: "",
              ref: c,
              children: o
            })
          });
        return N.displayName = y, [{
          Provider: u,
          Slot: p,
          ItemSlot: N
        }, function(n) {
          const t = l(e + "CollectionConsumer", n);
          return r.useCallback(() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${g}]`));
            return Array.from(t.itemMap.values()).sort((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current))
          }, [t.collectionRef, t.itemMap])
        }, d]
      }
      Map
    },
    53146: (e, n, t) => {
      t.d(n, {
        C: () => s
      });
      var r = t(62229),
        o = t(95362),
        i = t(63155),
        s = e => {
          const {
            present: n,
            children: t
          } = e, s = function(e) {
            const [n, t] = r.useState(), o = r.useRef(null), s = r.useRef(e), d = r.useRef("none"), c = e ? "mounted" : "unmounted", [l, u] = function(e, n) {
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
              d.current = "mounted" === l ? e : "none"
            }, [l]), (0, i.N)(() => {
              const n = o.current,
                t = s.current;
              if (t !== e) {
                const r = d.current,
                  o = a(n);
                u(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e
              }
            }, [e, u]), (0, i.N)(() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const i = a(o.current).includes(CSS.escape(r.animationName));
                    if (r.target === n && i && (u("ANIMATION_END"), !s.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      })
                    }
                  },
                  i = e => {
                    e.target === n && (d.current = a(o.current))
                  };
                return n.addEventListener("animationstart", i), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", i), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
              }
              u("ANIMATION_END")
            }, [n, u]), {
              isPresent: ["mounted", "unmountSuspended"].includes(l),
              ref: r.useCallback(e => {
                o.current = e ? getComputedStyle(e) : null, t(e)
              }, [])
            }
          }(n), d = "function" == typeof t ? t({
            present: s.isPresent
          }) : r.Children.only(t), c = (0, o.s)(s.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(d));
          return "function" == typeof t || s.isPresent ? r.cloneElement(d, {
            ref: c
          }) : null
        };

      function a(e) {
        return e?.animationName || "none"
      }
      s.displayName = "Presence"
    },
    77768: (e, n, t) => {
      t.d(n, {
        jH: () => i
      });
      var r = t(62229),
        o = (t(42295), r.createContext(void 0));

      function i(e) {
        const n = r.useContext(o);
        return e || n || "ltr"
      }
    },
    94118: (e, n, t) => {
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
    }
  }
]);