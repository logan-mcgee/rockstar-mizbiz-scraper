try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "58248899-1a98-4a7c-8223-d0313eb5455b", e._sentryDebugIdIdentifier = "sentry-dbid-58248899-1a98-4a7c-8223-d0313eb5455b")
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
  [3729], {
    65324(e, n, t) {
      t.d(n, {
        N: () => s
      });
      var r = t(93082),
        o = t(54958),
        i = t(64239),
        l = t(17172),
        a = t(39793);

      function s(e) {
        const n = e + "CollectionProvider",
          [t, s] = (0, o.A)(n),
          [c, u] = t(n, {
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
            return (0, a.jsx)(c, {
              scope: n,
              itemMap: i,
              collectionRef: o,
              children: t
            })
          };
        d.displayName = n;
        const f = e + "CollectionSlot",
          p = (0, l.TL)(f),
          m = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: r
            } = e, o = u(f, t), l = (0, i.s)(n, o.collectionRef);
            return (0, a.jsx)(p, {
              ref: l,
              children: r
            })
          });
        m.displayName = f;
        const y = e + "CollectionItemSlot",
          g = "data-radix-collection-item",
          b = (0, l.TL)(y),
          h = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: o,
              ...l
            } = e, s = r.useRef(null), c = (0, i.s)(n, s), d = u(y, t);
            return r.useEffect(() => (d.itemMap.set(s, {
              ref: s,
              ...l
            }), () => {
              d.itemMap.delete(s)
            })), (0, a.jsx)(b, {
              [g]: "",
              ref: c,
              children: o
            })
          });
        return h.displayName = y, [{
          Provider: d,
          Slot: m,
          ItemSlot: h
        }, function(n) {
          const t = u(e + "CollectionConsumer", n);
          return r.useCallback(() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const n = Array.from(e.querySelectorAll(`[${g}]`));
            return Array.from(t.itemMap.values()).sort((e, t) => n.indexOf(e.ref.current) - n.indexOf(t.ref.current))
          }, [t.collectionRef, t.itemMap])
        }, s]
      }
      Map
    },
    64239(e, n, t) {
      t.d(n, {
        s: () => i
      });
      var r = t(93082);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function i(...e) {
        return r.useCallback(function(...e) {
          return n => {
            let t = !1;
            const r = e.map(e => {
              const r = o(e, n);
              return t || "function" != typeof r || (t = !0), r
            });
            if (t) return () => {
              for (let n = 0; n < r.length; n++) {
                const t = r[n];
                "function" == typeof t ? t() : o(e[n], null)
              }
            }
          }
        }(...e), e)
      }
    },
    66624(e, n, t) {
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
            const [n, t] = r.useState(), i = r.useRef(null), l = r.useRef(e), s = r.useRef("none"), c = e ? "mounted" : "unmounted", [u, d] = function(e, n) {
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
              const e = a(i.current);
              s.current = "mounted" === u ? e : "none"
            }, [u]), (0, o.N)(() => {
              const n = i.current,
                t = l.current;
              if (t !== e) {
                const r = s.current,
                  o = a(n);
                d(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), l.current = e
              }
            }, [e, d]), (0, o.N)(() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const o = a(i.current).includes(CSS.escape(r.animationName));
                    if (r.target === n && o && (d("ANIMATION_END"), !l.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      })
                    }
                  },
                  o = e => {
                    e.target === n && (s.current = a(i.current))
                  };
                return n.addEventListener("animationstart", o), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", o), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
              }
              d("ANIMATION_END")
            }, [n, d]), {
              isPresent: ["mounted", "unmountSuspended"].includes(u),
              ref: r.useCallback(e => {
                i.current = e ? getComputedStyle(e) : null, t(e)
              }, [])
            }
          }(n), s = "function" == typeof t ? t({
            present: i.isPresent
          }) : r.Children.only(t), c = function(...e) {
            const n = r.useRef(e);
            return n.current = e, r.useCallback(e => {
              const t = n.current;
              let r = !1;
              const o = t.map(n => {
                const t = l(n, e);
                return r || "function" != typeof t || (r = !0), t
              });
              if (r) return () => {
                for (let e = 0; e < o.length; e++) {
                  const n = o[e];
                  "function" == typeof n ? n() : l(t[e], null)
                }
              }
            }, [])
          }(i.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(s));
          return "function" == typeof t || i.isPresent ? r.cloneElement(s, {
            ref: c
          }) : null
        };

      function l(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(e) {
        return e?.animationName || "none"
      }
      i.displayName = "Presence"
    },
    17172(e, n, t) {
      let r;
      t.d(n, {
        DX: () => a,
        Dc: () => c,
        TL: () => l,
        xV: () => u
      });
      var o = t(93082),
        i = t(64239);

      function l(e) {
        const n = o.forwardRef((n, t) => {
          let {
            children: r,
            ...l
          } = n, a = null, c = !1;
          const u = [];
          p(r) && "function" == typeof g && (r = g(r._payload)), o.Children.forEach(r, e => {
            if (n = e, o.isValidElement(n) && "function" == typeof n.type && "__radixId" in n.type && n.type.__radixId === s) {
              c = !0;
              const n = e;
              let t = "child" in n.props ? n.props.child : n.props.children;
              p(t) && "function" == typeof g && (t = g(t._payload)), a = d(n, t), u.push(a?.props?.children)
            } else u.push(e);
            var n
          }), a ? a = o.cloneElement(a, void 0, u) : !c && 1 === o.Children.count(r) && o.isValidElement(r) && (a = r);
          const f = a ? function(e) {
              let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                t = n && "isReactWarning" in n && n.isReactWarning;
              return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
            }(a) : void 0,
            b = (0, i.s)(t, f);
          if (!a) {
            if (r || 0 === r) throw new Error(c ? y(e) : m(e));
            return r
          }
          const h = function(e, n) {
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
          }(l, a.props ?? {});
          return a.type !== o.Fragment && (h.ref = t ? b : f), o.cloneElement(a, h)
        });
        return n.displayName = `${e}.Slot`, n
      }
      var a = l("Slot"),
        s = Symbol.for("radix.slottable");

      function c(e) {
        const n = e => "child" in e ? e.children(e.child) : e.children;
        return n.displayName = `${e}.Slottable`, n.__radixId = s, n
      }
      var u = c("Slottable"),
        d = (e, n) => {
          if ("child" in e.props) {
            const n = e.props.child;
            return o.isValidElement(n) ? o.cloneElement(n, void 0, e.props.children(n.props.children)) : null
          }
          return o.isValidElement(n) ? n : null
        },
        f = Symbol.for("react.lazy");

      function p(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === f && "_payload" in e && "object" == typeof(n = e._payload) && null !== n && "then" in n;
        var n
      }
      var m = e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        y = e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        g = (r || (r = t.t(o, 2)))[" use ".trim().toString()]
    }
  }
]);