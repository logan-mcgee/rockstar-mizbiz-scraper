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
        N: () => a
      });
      var r = t(62229),
        o = t(85426),
        i = t(95362),
        d = t(39447),
        s = t(42295);

      function a(e) {
        const n = e + "CollectionProvider",
          [t, a] = (0, o.A)(n),
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
            return (0, s.jsx)(c, {
              scope: n,
              itemMap: i,
              collectionRef: o,
              children: t
            })
          };
        u.displayName = n;
        const f = e + "CollectionSlot",
          m = (0, d.TL)(f),
          p = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: r
            } = e, o = l(f, t), d = (0, i.s)(n, o.collectionRef);
            return (0, s.jsx)(m, {
              ref: d,
              children: r
            })
          });
        p.displayName = f;
        const y = e + "CollectionItemSlot",
          g = "data-radix-collection-item",
          w = (0, d.TL)(y),
          N = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: o,
              ...d
            } = e, a = r.useRef(null), c = (0, i.s)(n, a), u = l(y, t);
            return r.useEffect(() => (u.itemMap.set(a, {
              ref: a,
              ...d
            }), () => {
              u.itemMap.delete(a)
            })), (0, s.jsx)(w, {
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
        }, a]
      }
      Map
    },
    53146: (e, n, t) => {
      t.d(n, {
        C: () => d
      });
      var r = t(62229),
        o = t(95362),
        i = t(63155),
        d = e => {
          const {
            present: n,
            children: t
          } = e, d = function(e) {
            const [n, t] = r.useState(), o = r.useRef(null), d = r.useRef(e), a = r.useRef("none"), c = e ? "mounted" : "unmounted", [l, u] = function(e, n) {
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
              const e = s(o.current);
              a.current = "mounted" === l ? e : "none"
            }, [l]), (0, i.N)(() => {
              const n = o.current,
                t = d.current;
              if (t !== e) {
                const r = a.current,
                  o = s(n);
                u(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), d.current = e
              }
            }, [e, u]), (0, i.N)(() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const i = s(o.current).includes(CSS.escape(r.animationName));
                    if (r.target === n && i && (u("ANIMATION_END"), !d.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      })
                    }
                  },
                  i = e => {
                    e.target === n && (a.current = s(o.current))
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
          }(n), a = "function" == typeof t ? t({
            present: d.isPresent
          }) : r.Children.only(t), c = (0, o.s)(d.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(a));
          return "function" == typeof t || d.isPresent ? r.cloneElement(a, {
            ref: c
          }) : null
        };

      function s(e) {
        return e?.animationName || "none"
      }
      d.displayName = "Presence"
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