try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8638c7fd-3d77-4cf5-a621-a9abd62e8ce5", e._sentryDebugIdIdentifier = "sentry-dbid-8638c7fd-3d77-4cf5-a621-a9abd62e8ce5")
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
  [899], {
    20027: (e, n, t) => {
      t.d(n, {
        N: () => s
      });
      var r = t(71127),
        o = t(85426),
        i = t(95362),
        a = t(39447),
        l = t(42295);

      function s(e) {
        const n = e + "CollectionProvider",
          [t, s] = (0, o.A)(n),
          [d, c] = t(n, {
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
            return (0, l.jsx)(d, {
              scope: n,
              itemMap: i,
              collectionRef: o,
              children: t
            })
          };
        u.displayName = n;
        const f = e + "CollectionSlot",
          p = (0, a.TL)(f),
          m = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: r
            } = e, o = c(f, t), a = (0, i.s)(n, o.collectionRef);
            return (0, l.jsx)(p, {
              ref: a,
              children: r
            })
          });
        m.displayName = f;
        const y = e + "CollectionItemSlot",
          g = "data-radix-collection-item",
          w = (0, a.TL)(y),
          b = r.forwardRef((e, n) => {
            const {
              scope: t,
              children: o,
              ...a
            } = e, s = r.useRef(null), d = (0, i.s)(n, s), u = c(y, t);
            return r.useEffect(() => (u.itemMap.set(s, {
              ref: s,
              ...a
            }), () => {
              u.itemMap.delete(s)
            })), (0, l.jsx)(w, {
              [g]: "",
              ref: d,
              children: o
            })
          });
        return b.displayName = y, [{
          Provider: u,
          Slot: m,
          ItemSlot: b
        }, function(n) {
          const t = c(e + "CollectionConsumer", n);
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
    39447: (e, n, t) => {
      t.d(n, {
        Dc: () => d,
        TL: () => a
      });
      var r = t(71127),
        o = t(95362),
        i = t(42295);

      function a(e) {
        const n = l(e),
          t = r.forwardRef((e, t) => {
            const {
              children: o,
              ...a
            } = e, l = r.Children.toArray(o), s = l.find(c);
            if (s) {
              const e = s.props.children,
                o = l.map(n => n === s ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n);
              return (0, i.jsx)(n, {
                ...a,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, i.jsx)(n, {
              ...a,
              ref: t,
              children: o
            })
          });
        return t.displayName = `${e}.Slot`, t
      }

      function l(e) {
        const n = r.forwardRef((e, n) => {
          const {
            children: t,
            ...i
          } = e;
          if (r.isValidElement(t)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = n && "isReactWarning" in n && n.isReactWarning;
                return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              a = function(e, n) {
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
              }(i, t.props);
            return t.type !== r.Fragment && (a.ref = n ? (0, o.t)(n, e) : e), r.cloneElement(t, a)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var s = Symbol("radix.slottable");

      function d(e) {
        const n = ({
          children: e
        }) => (0, i.jsx)(i.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = s, n
      }

      function c(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === s
      }
    },
    53146: (e, n, t) => {
      t.d(n, {
        C: () => a
      });
      var r = t(71127),
        o = t(95362),
        i = t(63155),
        a = e => {
          const {
            present: n,
            children: t
          } = e, a = function(e) {
            const [n, t] = r.useState(), o = r.useRef(null), a = r.useRef(e), s = r.useRef("none"), d = e ? "mounted" : "unmounted", [c, u] = function(e, n) {
              return r.useReducer((e, t) => n[e][t] ?? e, e)
            }(d, {
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
              const e = l(o.current);
              s.current = "mounted" === c ? e : "none"
            }, [c]), (0, i.N)(() => {
              const n = o.current,
                t = a.current;
              if (t !== e) {
                const r = s.current,
                  o = l(n);
                u(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e
              }
            }, [e, u]), (0, i.N)(() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const i = l(o.current).includes(CSS.escape(r.animationName));
                    if (r.target === n && i && (u("ANIMATION_END"), !a.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      })
                    }
                  },
                  i = e => {
                    e.target === n && (s.current = l(o.current))
                  };
                return n.addEventListener("animationstart", i), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", i), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
              }
              u("ANIMATION_END")
            }, [n, u]), {
              isPresent: ["mounted", "unmountSuspended"].includes(c),
              ref: r.useCallback(e => {
                o.current = e ? getComputedStyle(e) : null, t(e)
              }, [])
            }
          }(n), s = "function" == typeof t ? t({
            present: a.isPresent
          }) : r.Children.only(t), d = (0, o.s)(a.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(s));
          return "function" == typeof t || a.isPresent ? r.cloneElement(s, {
            ref: d
          }) : null
        };

      function l(e) {
        return e?.animationName || "none"
      }
      a.displayName = "Presence"
    },
    77768: (e, n, t) => {
      t.d(n, {
        jH: () => i
      });
      var r = t(71127),
        o = (t(42295), r.createContext(void 0));

      function i(e) {
        const n = r.useContext(o);
        return e || n || "ltr"
      }
    },
    78004: (e, n, t) => {
      t.d(n, {
        hO: () => s,
        sG: () => l
      });
      var r = t(71127),
        o = t(18429),
        i = t(39447),
        a = t(42295),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, i.TL)(`Primitive.${n}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, l = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(l, {
                ...i,
                ref: r
              })
            });
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }, {});

      function s(e, n) {
        e && o.flushSync(() => e.dispatchEvent(n))
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