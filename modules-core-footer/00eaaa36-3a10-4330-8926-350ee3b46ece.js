try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "00eaaa36-3a10-4330-8926-350ee3b46ece", e._sentryDebugIdIdentifier = "sentry-dbid-00eaaa36-3a10-4330-8926-350ee3b46ece")
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
  [9398], {
    6076(e, a, r) {
      r.d(a, {
        NP: () => h,
        Ym: () => d,
        zQ: () => c
      });
      var t = r(9793),
        o = (r(7278), r(3400), r(4173)),
        s = r(4637);
      const n = (0, s.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        l = () => (0, s.useContext)(n),
        c = () => {
          const {
            platformScale: e
          } = l();
          return e
        },
        d = () => {
          const {
            locale: e
          } = l();
          return e
        };
      var f = r(8528),
        u = r(4519);
      const i = e => "dark" === e ? u.xW.dark : u.xW.light;
      var p = r(9353);
      const m = () => p.X3 ? null : document.body,
        h = (0, s.forwardRef)(({
          children: e,
          className: a,
          container: r = m(),
          asChild: l,
          colorScheme: c,
          defaultColorScheme: d,
          defaultPlatformScale: h,
          platformScale: b,
          onPlatformScaleChange: y,
          locale: g = "en-US"
        }, S) => {
          const k = (0, s.useRef)(null),
            w = (0, f.UP)(k, S),
            C = (0, s.useRef)(r),
            {
              ratio: _,
              scale: L
            } = function(e) {
              const [a, r] = (0, s.useState)(e.platformScale || e.defaultPlatformScale), t = (0, s.useCallback)(a => {
                r(a), e.onPlatformScaleChange?.(a)
              }, [e.onPlatformScaleChange]), o = (0, s.useRef)([]), n = () => {
                if (!p.X3) {
                  for (const {
                      handler: e,
                      matchMedia: a
                    }
                    of o.current) a.removeEventListener("change", e);
                  o.current = []
                }
              };
              return (0, s.useEffect)(() => (e.platformScale ? t(e.platformScale) : (() => {
                if (!p.X3) {
                  n();
                  for (const e in u.wj) {
                    const a = window.matchMedia(u.wj[e]),
                      r = a => {
                        a.matches && t(e)
                      };
                    a.addEventListener("change", r), a.matches && t(e), o.current.push({
                      handler: r,
                      matchMedia: a
                    })
                  }
                }
              })(), n), [e.platformScale, t]), {
                scale: a,
                ratio: u.nz[a]
              }
            }({
              onPlatformScaleChange: y,
              defaultPlatformScale: h,
              platformScale: b
            }),
            {
              appearanceClass: v,
              otherAppearanceClasses: x,
              providerColor: P
            } = function({
              colorScheme: e,
              defaultColorScheme: a = "dark"
            }) {
              const r = (0, f.Ub)("(prefers-color-scheme: light)"),
                t = (0, f.Ub)("(prefers-color-scheme: dark)"),
                o = "system" !== e && e || r && "light" || t && "dark" || a,
                n = (0, s.useMemo)(() => i(o), [o]),
                l = (0, s.useMemo)(() => (e => {
                  const a = i(e);
                  return [u.xW.light, u.xW.dark].filter(e => e !== a)
                })(o), [o]);
              return {
                appearanceClass: n,
                otherAppearanceClasses: l,
                providerColor: o
              }
            }({
              colorScheme: c,
              defaultColorScheme: d
            });
          return (({
            container: e,
            currentScale: a,
            appearanceClass: r,
            otherAppearanceClasses: t,
            locale: o,
            className: n
          }) => {
            const l = (0, f.ZC)(n),
              c = (0, f.ZC)(e.current);
            (0, s.useEffect)(() => {
              e.current?.classList.contains(u.X6) || e.current?.classList.add(u.X6), e.current?.classList.contains(u.yU) || e.current?.classList.add(u.yU), e.current?.classList.contains(u.Np) || e.current?.classList.add(u.Np), e.current?.classList.add(r), e.current?.classList.remove(...t), l && n && e.current?.classList.contains(l) ? e.current?.classList.replace(l, n) : l && !n && e.current?.classList.contains(l) ? e.current?.classList.remove(l) : n && e.current?.classList.add(n)
            }, [r, n]), (0, s.useEffect)(() => {
              e.current?.setAttribute("lang", o)
            }, [o]), (0, s.useEffect)(() => (a && e.current?.style.setProperty(u.HZ, a.toString()), () => {
              e.current?.style.removeProperty(u.HZ)
            }), [a]), (0, s.useEffect)(() => {
              c?.classList.remove(u.X6), c?.classList.remove(u.yU), c?.classList.remove(r), c?.style.removeProperty(u.HZ), n && c?.classList.remove(n)
            }, [c])
          })({
            locale: g,
            className: a,
            appearanceClass: v,
            otherAppearanceClasses: x,
            currentScale: b ? _ : -0,
            container: l ? k : C
          }), (0, t.jsx)(n.Provider, {
            value: {
              locale: g,
              defaultColorScheme: d,
              colorScheme: P,
              defaultPlatformScale: h,
              platformScale: L
            },
            children: l ? (0, t.jsx)(o.DX, {
              ref: w,
              children: e
            }) : e
          })
        })
    },
    4519(e, a, r) {
      r.d(a, {
        nz: () => t,
        wj: () => o,
        xW: () => s,
        Np: () => n,
        HZ: () => l,
        X6: () => c,
        yU: () => d
      });
      var t = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        o = {
          mobile: "screen and (max-width: 1024px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1920px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2560px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        s = {
          dark: "foundry_nu8bkpd",
          light: "foundry_nu8bkpc",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3",
          grid: "foundry_nu8bkpb"
        },
        n = "foundry_nu8bkpb",
        l = "--foundry-platform-scales-ratio-65afb887",
        c = "foundry_nu8bkp4",
        d = "foundry_nu8bkp3"
    }
  }
]);