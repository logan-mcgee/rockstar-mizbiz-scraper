try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4d9011e0-c49e-4015-9012-40163c5248e7", e._sentryDebugIdIdentifier = "sentry-dbid-4d9011e0-c49e-4015-9012-40163c5248e7")
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
  [3116], {
    13165(e, n, t) {
      t.d(n, {
        N: () => f
      });
      var r = t(71127),
        o = t(85426),
        l = t(95362),
        i = t(42295);

      function s(e) {
        const n = a(e),
          t = r.forwardRef((e, t) => {
            const {
              children: o,
              ...l
            } = e, s = r.Children.toArray(o), a = s.find(d);
            if (a) {
              const e = a.props.children,
                o = s.map(n => n === a ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n);
              return (0, i.jsx)(n, {
                ...l,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, i.jsx)(n, {
              ...l,
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
            ...o
          } = e;
          if (r.isValidElement(t)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = n && "isReactWarning" in n && n.isReactWarning;
                return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              i = function(e, n) {
                const t = {
                  ...n
                };
                for (const r in n) {
                  const o = e[r],
                    l = n[r];
                  /^on[A-Z]/.test(r) ? o && l ? t[r] = (...e) => {
                    const n = l(...e);
                    return o(...e), n
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...l
                  } : "className" === r && (t[r] = [o, l].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(o, t.props);
            return t.type !== r.Fragment && (i.ref = n ? (0, l.t)(n, e) : e), r.cloneElement(t, i)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var c = Symbol("radix.slottable");

      function d(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c
      }

      function f(e) {
        const n = e + "CollectionProvider",
          [t, a] = (0, o.A)(n),
          [c, d] = t(n, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          f = e => {
            const {
              scope: n,
              children: t
            } = e, o = r.useRef(null), l = r.useRef(new Map).current;
            return (0, i.jsx)(c, {
              scope: n,
              itemMap: l,
              collectionRef: o,
              children: t
            })
          };
        f.displayName = n;
        const u = e + "CollectionSlot",
          p = s(u),
          y = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: r
            } = e, o = d(u, t), s = (0, l.s)(n, o.collectionRef);
            return (0, i.jsx)(p, {
              ref: s,
              children: r
            })
          });
        y.displayName = u;
        const b = e + "CollectionItemSlot",
          g = "data-radix-collection-item",
          m = s(b),
          h = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: o,
              ...s
            } = e, a = r.useRef(null), c = (0, l.s)(n, a), f = d(b, t);
            return r.useEffect(() => (f.itemMap.set(a, {
              ref: a,
              ...s
            }), () => {
              f.itemMap.delete(a)
            })), (0, i.jsx)(m, {
              [g]: "",
              ref: c,
              children: o
            })
          });
        return h.displayName = b, [{
          Provider: f,
          Slot: y,
          ItemSlot: h
        }, function(n) {
          const t = d(e + "CollectionConsumer", n);
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
    77768(e, n, t) {
      t.d(n, {
        jH: () => l
      });
      var r = t(71127),
        o = (t(42295), r.createContext(void 0));

      function l(e) {
        const n = r.useContext(o);
        return e || n || "ltr"
      }
    }
  }
]);