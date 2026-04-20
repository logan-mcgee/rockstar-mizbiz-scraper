try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f76b4189-3e96-40e6-b6e0-35b568a76441", e._sentryDebugIdIdentifier = "sentry-dbid-f76b4189-3e96-40e6-b6e0-35b568a76441")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [5602], {
    45602: (e, t, r) => {
      r.d(t, {
        NP: () => E,
        Ym: () => g,
        zQ: () => b
      });
      var n = r(42295),
        a = (r(84735), r(71127)),
        o = r.t(a, 2),
        l = r(95362),
        s = Symbol.for("react.lazy"),
        c = o[" use ".trim().toString()];

      function i(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === s && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function d(e) {
        const t = u(e),
          r = a.forwardRef((e, r) => {
            let {
              children: o,
              ...l
            } = e;
            i(o) && "function" == typeof c && (o = c(o._payload));
            const s = a.Children.toArray(o),
              d = s.find(m);
            if (d) {
              const e = d.props.children,
                o = s.map(t => t === d ? a.Children.count(e) > 1 ? a.Children.only(null) : a.isValidElement(e) ? e.props.children : null : t);
              return (0, n.jsx)(t, {
                ...l,
                ref: r,
                children: a.isValidElement(e) ? a.cloneElement(e, void 0, o) : null
              })
            }
            return (0, n.jsx)(t, {
              ...l,
              ref: r,
              children: o
            })
          });
        return r.displayName = `${e}.Slot`, r
      }
      var f = d("Slot");

      function u(e) {
        const t = a.forwardRef((e, t) => {
          let {
            children: r,
            ...n
          } = e;
          if (i(r) && "function" == typeof c && (r = c(r._payload)), a.isValidElement(r)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  r = t && "isReactWarning" in t && t.isReactWarning;
                return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
              }(r),
              o = function(e, t) {
                const r = {
                  ...t
                };
                for (const n in t) {
                  const a = e[n],
                    o = t[n];
                  /^on[A-Z]/.test(n) ? a && o ? r[n] = (...e) => {
                    const t = o(...e);
                    return a(...e), t
                  } : a && (r[n] = a) : "style" === n ? r[n] = {
                    ...a,
                    ...o
                  } : "className" === n && (r[n] = [a, o].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(n, r.props);
            return r.type !== a.Fragment && (o.ref = t ? (0, l.t)(t, e) : e), a.cloneElement(r, o)
          }
          return a.Children.count(r) > 1 ? a.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function m(e) {
        return a.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
      const h = (0, a.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        y = () => (0, a.useContext)(h),
        b = () => {
          const {
            platformScale: e
          } = y();
          return e
        },
        g = () => {
          const {
            locale: e
          } = y();
          return e
        };
      var S = r(37792);

      function w(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => S.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, l] = (0, a.useState)(() => r ? n(e) : t);

        function s() {
          l(n(e))
        }
        return (0, a.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return s(), t?.addListener ? t?.addListener(s) : t?.addEventListener("change", s), () => {
            t?.removeListener ? t?.removeListener(s) : t?.removeEventListener("change", s)
          }
        }, [e]), o
      }

      function v(e) {
        const t = (0, a.useRef)({
            value: e,
            prev: void 0
          }),
          r = t.current.value;
        return e !== r && (t.current = {
          value: e,
          prev: r
        }), t.current.prev
      }
      r(3322);
      var k = r(86825);
      const C = e => "dark" === e ? k.xW.dark : k.xW.light;
      var _ = r(22673);
      const L = () => _.X3 ? null : document.body,
        E = (0, a.forwardRef)(({
          children: e,
          className: t,
          container: r = L(),
          asChild: o,
          colorScheme: l,
          defaultColorScheme: s,
          defaultPlatformScale: c,
          platformScale: i,
          onPlatformScaleChange: d,
          locale: u = "en-US"
        }, p) => {
          const m = (0, a.useRef)(null),
            y = function(...e) {
              const t = (0, a.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(m, p),
            b = (0, a.useRef)(r),
            {
              ratio: g,
              scale: S
            } = function(e) {
              const [t, r] = (0, a.useState)(e.platformScale || e.defaultPlatformScale), n = (0, a.useCallback)(t => {
                r(t), e.onPlatformScaleChange?.(t)
              }, [e.onPlatformScaleChange]), o = (0, a.useRef)([]), l = () => {
                if (!_.X3) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of o.current) t.removeEventListener("change", e);
                  o.current = []
                }
              };
              return (0, a.useEffect)(() => (e.platformScale ? n(e.platformScale) : (() => {
                if (!_.X3) {
                  l();
                  for (const e in k.wj) {
                    const t = window.matchMedia(k.wj[e]),
                      r = t => {
                        t.matches && n(e)
                      };
                    t.addEventListener("change", r), t.matches && n(e), o.current.push({
                      handler: r,
                      matchMedia: t
                    })
                  }
                }
              })(), l), [e.platformScale, n]), {
                scale: t,
                ratio: k.nz[t]
              }
            }({
              onPlatformScaleChange: d,
              defaultPlatformScale: c,
              platformScale: i
            }),
            {
              appearanceClass: E,
              otherAppearanceClasses: x,
              providerColor: M
            } = function({
              colorScheme: e,
              defaultColorScheme: t = "dark"
            }) {
              const r = w("(prefers-color-scheme: light)"),
                n = w("(prefers-color-scheme: dark)"),
                o = "system" !== e && e || r && "light" || n && "dark" || t,
                l = (0, a.useMemo)(() => C(o), [o]),
                s = (0, a.useMemo)(() => (e => {
                  const t = C(e);
                  return [k.xW.light, k.xW.dark].filter(e => e !== t)
                })(o), [o]);
              return {
                appearanceClass: l,
                otherAppearanceClasses: s,
                providerColor: o
              }
            }({
              colorScheme: l,
              defaultColorScheme: s
            });
          return (({
            container: e,
            currentScale: t,
            appearanceClass: r,
            otherAppearanceClasses: n,
            locale: o,
            className: l
          }) => {
            const s = v(l),
              c = v(e.current);
            (0, a.useEffect)(() => {
              e.current?.classList.contains(k.X6) || e.current?.classList.add(k.X6), e.current?.classList.contains(k.yU) || e.current?.classList.add(k.yU), e.current?.classList.add(r), e.current?.classList.remove(...n), s && l && e.current?.classList.contains(s) ? e.current?.classList.replace(s, l) : s && !l && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : l && e.current?.classList.add(l)
            }, [r, l]), (0, a.useEffect)(() => {
              e.current?.setAttribute("lang", o)
            }, [o]), (0, a.useEffect)(() => (t && e.current?.style.setProperty(k.HZ, t.toString()), () => {
              e.current?.style.removeProperty(k.HZ)
            }), [t]), (0, a.useEffect)(() => {
              c?.classList.remove(k.X6), c?.classList.remove(k.yU), c?.classList.remove(r), c?.style.removeProperty(k.HZ), l && c?.classList.remove(l)
            }, [c])
          })({
            locale: u,
            className: t,
            appearanceClass: E,
            otherAppearanceClasses: x,
            currentScale: i ? g : -0,
            container: o ? m : b
          }), (0, n.jsx)(h.Provider, {
            value: {
              locale: u,
              defaultColorScheme: s,
              colorScheme: M,
              defaultPlatformScale: c,
              platformScale: S
            },
            children: o ? (0, n.jsx)(f, {
              ref: y,
              children: e
            }) : e
          })
        })
    },
    86825: (e, t, r) => {
      r.d(t, {
        nz: () => n,
        wj: () => a,
        xW: () => o,
        HZ: () => l,
        X6: () => s,
        yU: () => c
      });
      var n = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        a = {
          mobile: "screen and (max-width: 1024px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1920px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2560px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        o = {
          dark: "foundry_nu8bkp6",
          light: "foundry_nu8bkp5",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3"
        },
        l = "--foundry-platform-scales-ratio-65afb887",
        s = "foundry_nu8bkp4",
        c = "foundry_nu8bkp3"
    }
  }
]);