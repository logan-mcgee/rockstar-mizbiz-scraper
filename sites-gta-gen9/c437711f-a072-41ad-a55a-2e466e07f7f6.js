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
        N: () => c
      });
      var r = t(93082),
        o = t(1913),
        i = t(64239),
        a = t(17172),
        s = t(39793);

      function c(e) {
        const n = e + "CollectionProvider",
          [t, c] = (0, o.A)(n),
          [u, l] = t(n, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          d = e => {
            const {
              scope: n,
              children: t
            } = e, o = r.useRef(null), i = r.useRef(new Map).current;
            return (0, s.jsx)(u, {
              scope: n,
              itemMap: i,
              collectionRef: o,
              children: t
            })
          };
        d.displayName = n;
        const f = e + "CollectionSlot",
          p = (0, a.TL)(f),
          m = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: r
            } = e, o = l(f, t), a = (0, i.s)(n, o.collectionRef);
            return (0, s.jsx)(p, {
              ref: a,
              children: r
            })
          });
        m.displayName = f;
        const y = e + "CollectionItemSlot",
          g = "data-radix-collection-item",
          N = (0, a.TL)(y),
          M = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: o,
              ...a
            } = e, c = r.useRef(null), u = (0, i.s)(n, c), d = l(y, t);
            return r.useEffect(() => (d.itemMap.set(c, {
              ref: c,
              ...a
            }), () => {
              d.itemMap.delete(c)
            })), (0, s.jsx)(N, {
              [g]: "",
              ref: u,
              children: o
            })
          });
        return M.displayName = y, [{
          Provider: d,
          Slot: m,
          ItemSlot: M
        }, function(n) {
          const t = l(e + "CollectionConsumer", n);
          return r.useCallback(() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${g}]`));
            return Array.from(t.itemMap.values()).sort((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current))
          }, [t.collectionRef, t.itemMap])
        }, c]
      }
      Map
    },
    7470(e, n, t) {
      t.d(n, {
        C: () => i
      });
      var r = t(93082),
        o = t(10198),
        i = e => {
          const {
            present: n,
            children: t
          } = e, i = function(e) {
            const [n, t] = r.useState(), i = r.useRef(null), a = r.useRef(e), c = r.useRef("none"), u = r.useRef(void 0), l = e ? "mounted" : "unmounted", [d, f] = function(e, n) {
              return r.useReducer((e, t) => n[e][t] ?? e, e)
            }(l, {
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
              "mounted" === d ? (c.current = u.current ?? s(i.current), u.current = void 0) : c.current = "none"
            }, [d]), (0, o.N)(() => {
              const n = i.current,
                t = a.current;
              if (t !== e) {
                const r = c.current,
                  o = s(n);
                e ? (u.current = o, f("MOUNT")) : f("none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e
              }
            }, [e, f]), (0, o.N)(() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const o = s(i.current).includes(CSS.escape(r.animationName));
                    if (r.target === n && o && (f("ANIMATION_END"), !a.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      })
                    }
                  },
                  o = e => {
                    e.target === n && (c.current = s(i.current))
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
                  i.current = n, u.current = s(n)
                } else i.current = null;
                t(e)
              }, [])
            }
          }(n), c = "function" == typeof t ? t({
            present: i.isPresent
          }) : r.Children.only(t), u = function(...e) {
            const n = r.useRef(e);
            return n.current = e, r.useCallback(e => {
              const t = n.current;
              let r = !1;
              const o = t.map(n => {
                const t = a(n, e);
                return r || "function" != typeof t || (r = !0), t
              });
              if (r) return () => {
                for (let e = 0; e < o.length; e++) {
                  const n = o[e];
                  "function" == typeof n ? n() : a(t[e], null)
                }
              }
            }, [])
          }(i.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(c));
          return "function" == typeof t || i.isPresent ? r.cloneElement(c, {
            ref: u
          }) : null
        };

      function a(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function s(e) {
        return e?.animationName || "none"
      }
      i.displayName = "Presence"
    }
  }
]);