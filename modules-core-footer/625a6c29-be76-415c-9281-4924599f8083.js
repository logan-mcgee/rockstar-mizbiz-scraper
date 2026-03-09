try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "625a6c29-be76-415c-9281-4924599f8083", e._sentryDebugIdIdentifier = "sentry-dbid-625a6c29-be76-415c-9281-4924599f8083")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [5602], {
    4218: (e, t, r) => {
      r.d(t, {
        nz: () => n,
        wj: () => a,
        xW: () => o,
        HZ: () => l,
        X6: () => c,
        yU: () => s
      });
      var n = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        a = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        o = {
          dark: "foundry_nu8bkp6",
          light: "foundry_nu8bkp5",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3"
        },
        l = "--foundry-platform-scales-ratio-65afb887",
        c = "foundry_nu8bkp4",
        s = "foundry_nu8bkp3"
    },
    45602: (e, t, r) => {
      r.d(t, {
        NP: () => E,
        Ym: () => b,
        zQ: () => g
      });
      var n = r(42295),
        a = (r(84735), r(71127)),
        o = r.t(a, 2),
        l = r(95362),
        c = Symbol.for("react.lazy"),
        s = o[" use ".trim().toString()];

      function i(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === c && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function d(e) {
        const t = u(e),
          r = a.forwardRef((e, r) => {
            let {
              children: o,
              ...l
            } = e;
            i(o) && "function" == typeof s && (o = s(o._payload));
            const c = a.Children.toArray(o),
              d = c.find(m);
            if (d) {
              const e = d.props.children,
                o = c.map(t => t === d ? a.Children.count(e) > 1 ? a.Children.only(null) : a.isValidElement(e) ? e.props.children : null : t);
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
          if (i(r) && "function" == typeof s && (r = s(r._payload)), a.isValidElement(r)) {
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
        g = () => {
          const {
            platformScale: e
          } = y();
          return e
        },
        b = () => {
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

        function c() {
          l(n(e))
        }
        return (0, a.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return c(), t?.addListener ? t?.addListener(c) : t?.addEventListener("change", c), () => {
            t?.removeListener ? t?.removeListener(c) : t?.removeEventListener("change", c)
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
      var k = r(4218);
      const C = e => "dark" === e ? k.xW.dark : k.xW.light;
      var _ = r(22673);
      const L = () => _.X3 ? null : document.body,
        E = (0, a.forwardRef)(({
          children: e,
          className: t,
          container: r = L(),
          asChild: o,
          colorScheme: l,
          defaultColorScheme: c,
          defaultPlatformScale: s,
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
            g = (0, a.useRef)(r),
            {
              ratio: b,
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
              defaultPlatformScale: s,
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
                c = (0, a.useMemo)(() => (e => {
                  const t = C(e);
                  return [k.xW.light, k.xW.dark].filter(e => e !== t)
                })(o), [o]);
              return {
                appearanceClass: l,
                otherAppearanceClasses: c,
                providerColor: o
              }
            }({
              colorScheme: l,
              defaultColorScheme: c
            });
          return (({
            container: e,
            currentScale: t,
            appearanceClass: r,
            otherAppearanceClasses: n,
            locale: o,
            className: l
          }) => {
            const c = v(l),
              s = v(e.current);
            (0, a.useEffect)(() => {
              e.current?.classList.contains(k.X6) || e.current?.classList.add(k.X6), e.current?.classList.contains(k.yU) || e.current?.classList.add(k.yU), e.current?.classList.add(r), e.current?.classList.remove(...n), c && l && e.current?.classList.contains(c) ? e.current?.classList.replace(c, l) : c && !l && e.current?.classList.contains(c) ? e.current?.classList.remove(c) : l && e.current?.classList.add(l)
            }, [r, l]), (0, a.useEffect)(() => {
              e.current?.setAttribute("lang", o)
            }, [o]), (0, a.useEffect)(() => (t && e.current?.style.setProperty(k.HZ, t.toString()), () => {
              e.current?.style.removeProperty(k.HZ)
            }), [t]), (0, a.useEffect)(() => {
              s?.classList.remove(k.X6), s?.classList.remove(k.yU), s?.classList.remove(r), s?.style.removeProperty(k.HZ), l && s?.classList.remove(l)
            }, [s])
          })({
            locale: u,
            className: t,
            appearanceClass: E,
            otherAppearanceClasses: x,
            currentScale: i ? b : -0,
            container: o ? m : g
          }), (0, n.jsx)(h.Provider, {
            value: {
              locale: u,
              defaultColorScheme: c,
              colorScheme: M,
              defaultPlatformScale: s,
              platformScale: S
            },
            children: o ? (0, n.jsx)(f, {
              ref: y,
              children: e
            }) : e
          })
        })
    }
  }
]);