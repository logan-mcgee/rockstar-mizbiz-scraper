try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c379e9a4-b429-49bb-9919-c687bee74be2", e._sentryDebugIdIdentifier = "sentry-dbid-c379e9a4-b429-49bb-9919-c687bee74be2")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [7133], {
    7133(e, a, r) {
      r.d(a, {
        NP: () => h,
        Ym: () => d,
        zQ: () => c
      });
      var t = r(9793),
        s = (r(1849), r(1297)),
        o = r(3082);
      const l = (0, o.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        n = () => (0, o.useContext)(l),
        c = () => {
          const {
            platformScale: e
          } = n();
          return e
        },
        d = () => {
          const {
            locale: e
          } = n();
          return e
        };
      var f = r(9857),
        i = r(4127);
      const u = e => "dark" === e ? i.xW.dark : i.xW.light;
      var p = r(8912);
      const m = () => p.IS_SERVER ? null : document.body,
        h = (0, o.forwardRef)(({
          children: e,
          className: a,
          container: r = m(),
          asChild: n,
          colorScheme: c,
          defaultColorScheme: d,
          defaultPlatformScale: h,
          platformScale: b,
          onPlatformScaleChange: y,
          locale: S = "en-US"
        }, g) => {
          const k = (0, o.useRef)(null),
            w = (0, f.UP)(k, g),
            _ = (0, o.useRef)(r),
            {
              ratio: C,
              scale: v
            } = function(e) {
              const [a, r] = (0, o.useState)(e.platformScale || e.defaultPlatformScale), t = (0, o.useCallback)(a => {
                r(a), e.onPlatformScaleChange?.(a)
              }, [e.onPlatformScaleChange]), s = (0, o.useRef)([]), l = () => {
                if (!p.IS_SERVER) {
                  for (const {
                      handler: e,
                      matchMedia: a
                    }
                    of s.current) a.removeEventListener("change", e);
                  s.current = []
                }
              };
              return (0, o.useEffect)(() => (e.platformScale ? t(e.platformScale) : (() => {
                if (!p.IS_SERVER) {
                  l();
                  for (const e in i.wj) {
                    const a = window.matchMedia(i.wj[e]),
                      r = a => {
                        a.matches && t(e)
                      };
                    a.addEventListener("change", r), a.matches && t(e), s.current.push({
                      handler: r,
                      matchMedia: a
                    })
                  }
                }
              })(), l), [e.platformScale, t]), {
                scale: a,
                ratio: i.nz[a]
              }
            }({
              onPlatformScaleChange: y,
              defaultPlatformScale: h,
              platformScale: b
            }),
            {
              appearanceClass: L,
              otherAppearanceClasses: E,
              providerColor: x
            } = function({
              colorScheme: e,
              defaultColorScheme: a = "dark"
            }) {
              const r = (0, f.Ub)("(prefers-color-scheme: light)"),
                t = (0, f.Ub)("(prefers-color-scheme: dark)"),
                s = "system" !== e && e || r && "light" || t && "dark" || a,
                l = (0, o.useMemo)(() => u(s), [s]),
                n = (0, o.useMemo)(() => (e => {
                  const a = u(e);
                  return [i.xW.light, i.xW.dark].filter(e => e !== a)
                })(s), [s]);
              return {
                appearanceClass: l,
                otherAppearanceClasses: n,
                providerColor: s
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
            locale: s,
            className: l
          }) => {
            const n = (0, f.ZC)(l),
              c = (0, f.ZC)(e.current);
            (0, o.useEffect)(() => {
              e.current?.classList.contains(i.X6) || e.current?.classList.add(i.X6), e.current?.classList.contains(i.yU) || e.current?.classList.add(i.yU), e.current?.classList.contains(i.Np) || e.current?.classList.add(i.Np), e.current?.classList.add(r), e.current?.classList.remove(...t), n && l && e.current?.classList.contains(n) ? e.current?.classList.replace(n, l) : n && !l && e.current?.classList.contains(n) ? e.current?.classList.remove(n) : l && e.current?.classList.add(l)
            }, [r, l]), (0, o.useEffect)(() => {
              e.current?.setAttribute("lang", s)
            }, [s]), (0, o.useEffect)(() => (a && e.current?.style.setProperty(i.HZ, a.toString()), () => {
              e.current?.style.removeProperty(i.HZ)
            }), [a]), (0, o.useEffect)(() => {
              c?.classList.remove(i.X6), c?.classList.remove(i.yU), c?.classList.remove(r), c?.style.removeProperty(i.HZ), l && c?.classList.remove(l)
            }, [c])
          })({
            locale: S,
            className: a,
            appearanceClass: L,
            otherAppearanceClasses: E,
            currentScale: b ? C : -0,
            container: n ? k : _
          }), (0, t.jsx)(l.Provider, {
            value: {
              locale: S,
              defaultColorScheme: d,
              colorScheme: x,
              defaultPlatformScale: h,
              platformScale: v
            },
            children: n ? (0, t.jsx)(s.DX, {
              ref: w,
              children: e
            }) : e
          })
        })
    },
    4127(e, a, r) {
      r.d(a, {
        nz: () => t,
        wj: () => s,
        xW: () => o,
        Np: () => l,
        HZ: () => n,
        X6: () => c,
        yU: () => d
      });
      var t = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        s = {
          mobile: "screen and (max-width: 1024px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1920px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2560px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        o = {
          dark: "foundry_nu8bkpd",
          light: "foundry_nu8bkpc",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3",
          grid: "foundry_nu8bkpb"
        },
        l = "foundry_nu8bkpb",
        n = "--foundry-platform-scales-ratio-65afb887",
        c = "foundry_nu8bkp4",
        d = "foundry_nu8bkp3"
    }
  }
]);