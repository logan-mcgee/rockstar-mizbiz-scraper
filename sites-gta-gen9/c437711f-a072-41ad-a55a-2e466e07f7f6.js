try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c437711f-a072-41ad-a55a-2e466e07f7f6", e._sentryDebugIdIdentifier = "sentry-dbid-c437711f-a072-41ad-a55a-2e466e07f7f6")
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
  [8452], {
    85920(e, n, t) {
      t.d(n, {
        N: () => u
      });
      var r = t(93082),
        o = t(1913),
        a = t(64239),
        i = t(17172),
        s = t(39793);

      function u(e) {
        const n = e + "CollectionProvider",
          [t, u] = (0, o.A)(n),
          [l, c] = t(n, {
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
            return (0, s.jsx)(l, {
              scope: n,
              itemMap: a,
              collectionRef: o,
              children: t
            })
          };
        d.displayName = n;
        const f = e + "CollectionSlot",
          p = (0, i.TL)(f),
          m = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: r
            } = e, o = c(f, t), i = (0, a.s)(n, o.collectionRef);
            return (0, s.jsx)(p, {
              ref: i,
              children: r
            })
          });
        m.displayName = f;
        const y = e + "CollectionItemSlot",
          g = "data-radix-collection-item",
          N = (0, i.TL)(y),
          M = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: o,
              ...i
            } = e, u = r.useRef(null), l = (0, a.s)(n, u), d = c(y, t);
            return r.useEffect(() => (d.itemMap.set(u, {
              ref: u,
              ...i
            }), () => {
              d.itemMap.delete(u)
            })), (0, s.jsx)(N, {
              [g]: "",
              ref: l,
              children: o
            })
          });
        return M.displayName = y, [{
          Provider: d,
          Slot: m,
          ItemSlot: M
        }, function(n) {
          const t = c(e + "CollectionConsumer", n);
          return r.useCallback(() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${g}]`));
            return Array.from(t.itemMap.values()).sort((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current))
          }, [t.collectionRef, t.itemMap])
        }, u]
      }
      Map
    },
    7470(e, n, t) {
      t.d(n, {
        C: () => a
      });
      var r = t(93082),
        o = t(10198),
        a = e => {
          const {
            present: n,
            children: t
          } = e, a = function(e) {
            const [n, t] = r.useState(), a = r.useRef(null), i = r.useRef(e), u = r.useRef("none"), l = r.useRef(void 0), c = e ? "mounted" : "unmounted", [d, f] = function(e, n) {
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
              "mounted" === d ? (u.current = l.current ?? s(a.current), l.current = void 0) : u.current = "none"
            }, [d]), (0, o.N)(() => {
              const n = a.current,
                t = i.current;
              if (t !== e) {
                const r = u.current,
                  o = s(n);
                e ? (l.current = o, f("MOUNT")) : f("none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
              }
            }, [e, f]), (0, o.N)(() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const o = s(a.current).includes(CSS.escape(r.animationName));
                    if (r.target === n && o && (f("ANIMATION_END"), !i.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      })
                    }
                  },
                  o = e => {
                    e.target === n && (u.current = s(a.current))
                  };
                return n.addEventListener("animationstart", o), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", o), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
              }
              f("ANIMATION_END")
            }, [n, f]), {
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: r.useCallback(e => {
                if (e) {
                  const n = getComputedStyle(e);
                  a.current = n, l.current = s(n)
                } else a.current = null;
                t(e)
              }, [])
            }
          }(n), u = "function" == typeof t ? t({
            present: a.isPresent
          }) : r.Children.only(t), l = function(...e) {
            const n = r.useRef(e);
            return n.current = e, r.useCallback(e => {
              const t = n.current;
              let r = !1;
              const o = t.map(n => {
                const t = i(n, e);
                return r || "function" != typeof t || (r = !0), t
              });
              if (r) return () => {
                for (let e = 0; e < o.length; e++) {
                  const n = o[e];
                  "function" == typeof n ? n() : i(t[e], null)
                }
              }
            }, [])
          }(a.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(u));
          return "function" == typeof t || a.isPresent ? r.cloneElement(u, {
            ref: l
          }) : null
        };

      function i(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function s(e) {
        return e?.animationName || "none"
      }
      a.displayName = "Presence"
    }
  }
]);