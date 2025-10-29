try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d8227fce-7cb2-4d30-a309-de0fba7cb884", e._sentryDebugIdIdentifier = "sentry-dbid-d8227fce-7cb2-4d30-a309-de0fba7cb884")
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
  [3736], {
    4218: (e, a, t) => {
      t.d(a, {
        Cb: () => r,
        US: () => o,
        xW: () => l,
        HZ: () => n,
        X6: () => c,
        yU: () => s
      });
      var r = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        o = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        l = {
          dark: "foundry_nu8bkp6",
          darkHc: "foundry_nu8bkp8",
          light: "foundry_nu8bkp5",
          lightHc: "foundry_nu8bkp7",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3"
        },
        n = "--foundry-platform-scales-ratio-65afb887",
        c = "foundry_nu8bkp4",
        s = "foundry_nu8bkp3"
    },
    33736: (e, a, t) => {
      t.d(a, {
        NP: () => k,
        Ym: () => u,
        zQ: () => f,
        DP: () => d
      });
      var r = t(42295),
        o = (t(10131), t(39447)),
        l = t(71127),
        n = t(4218);
      const c = (0, l.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: n.US,
          platformScaleBreakpoints: n.Cb,
          locale: "en-US"
        }),
        s = () => (0, l.useContext)(c),
        d = () => {
          const {
            colorScheme: e,
            defaultColorScheme: a,
            contrastMode: t,
            defaultContrastMode: r,
            platformScale: o,
            defaultPlatformScale: l,
            platformScaleRatios: n,
            platformScaleBreakpoints: c,
            locale: d
          } = s();
          return {
            colorScheme: e,
            defaultColorScheme: a,
            contrastMode: t,
            defaultContrastMode: r,
            platformScale: o,
            defaultPlatformScale: l,
            platformScaleRatios: n,
            platformScaleBreakpoints: c,
            locale: d
          }
        },
        f = () => {
          const {
            platformScale: e
          } = s();
          return e
        },
        u = () => {
          const {
            locale: e
          } = s();
          return e
        };
      var i = t(37792);

      function m(e, {
        defaultValue: a = !1,
        initializeWithValue: t = !0
      } = {}) {
        const r = e => i.X || !window.matchMedia ? a : window.matchMedia(e).matches,
          [o, n] = (0, l.useState)((() => t ? r(e) : a));

        function c() {
          n(r(e))
        }
        return (0, l.useEffect)((() => {
          const a = window.matchMedia?.(e);
          return c(), a?.addListener ? a?.addListener(c) : a?.addEventListener("change", c), () => {
            a?.removeListener ? a?.removeListener(c) : a?.removeEventListener("change", c)
          }
        }), [e]), o
      }

      function p(e) {
        const a = (0, l.useRef)({
            value: e,
            prev: void 0
          }),
          t = a.current.value;
        return e !== t && (a.current = {
          value: e,
          prev: t
        }), a.current.prev
      }
      t(3322);
      const h = (e, a) => {
        const t = "more" === a ? n.xW.lightHc : n.xW.light,
          r = "more" === a ? n.xW.darkHc : n.xW.dark;
        return "dark" === e ? r : t
      };
      var S = t(22673);
      const b = () => S.X3 ? null : document.body,
        k = (0, l.forwardRef)((({
          children: e,
          className: a,
          container: t = b(),
          asChild: s,
          colorScheme: d,
          defaultColorScheme: f,
          contrastMode: u,
          defaultContrastMode: i,
          platformScaleBreakpoints: k,
          platformScaleRatios: y,
          defaultPlatformScale: g,
          platformScale: C,
          onPlatformScaleChange: v,
          locale: w = "en-US"
        }, M) => {
          const L = (0, l.useRef)(null),
            _ = function(...e) {
              const a = (0, l.useRef)(null);
              return a.current || (a.current = a => {
                e.forEach((e => {
                  "function" == typeof e ? e(a) : null != e && (e.current = a)
                }))
              }), a.current
            }(L, M),
            x = (0, l.useRef)(t),
            {
              ratio: E,
              scale: P
            } = function(e) {
              const a = (0, l.useMemo)((() => ({
                  ...n.US,
                  ...e.platformScaleRatios
                })), [e.platformScaleRatios]),
                t = (0, l.useMemo)((() => ({
                  ...n.Cb,
                  ...e.platformScaleBreakpoints
                })), [e.platformScaleBreakpoints]),
                [r, o] = (0, l.useState)(e.platformScale || e.defaultPlatformScale),
                c = (0, l.useCallback)((a => {
                  o(a), e.onPlatformScaleChange?.(a)
                }), [e.onPlatformScaleChange]),
                s = (0, l.useRef)([]),
                d = () => {
                  if (!S.X3) {
                    for (const {
                        handler: e,
                        matchMedia: a
                      }
                      of s.current) a.removeEventListener("change", e);
                    s.current = []
                  }
                };
              return (0, l.useEffect)((() => (e.platformScale ? c(e.platformScale) : (() => {
                if (!S.X3) {
                  d();
                  for (const e in t) {
                    const a = window.matchMedia(t[e]),
                      r = a => {
                        a.matches && c(e)
                      };
                    a.addEventListener("change", r), a.matches && c(e), s.current.push({
                      handler: r,
                      matchMedia: a
                    })
                  }
                }
              })(), d)), [t, e.platformScale, c]), {
                scale: r,
                ratio: a[r]
              }
            }({
              onPlatformScaleChange: v,
              platformScaleBreakpoints: k,
              platformScaleRatios: y,
              defaultPlatformScale: g,
              platformScale: C
            }),
            {
              appearanceClass: R,
              otherAppearanceClasses: W,
              providerColor: H,
              providerContrast: U
            } = function({
              colorScheme: e,
              defaultColorScheme: a = "dark",
              contrastMode: t,
              defaultContrastMode: r = "normal"
            }) {
              const o = m("(prefers-color-scheme: light)"),
                c = m("(prefers-color-scheme: dark)"),
                s = m("(prefers-contrast: more)"),
                d = "system" !== e && e || o && "light" || c && "dark" || a,
                f = t || s && "more" || r,
                u = (0, l.useMemo)((() => h(d, f)), [d, f]),
                i = (0, l.useMemo)((() => ((e, a) => {
                  const t = h(e, a);
                  return [n.xW.light, n.xW.dark, n.xW.lightHc, n.xW.darkHc].filter((e => e !== t))
                })(d, f)), [d, f]);
              return {
                appearanceClass: u,
                otherAppearanceClasses: i,
                providerColor: d,
                providerContrast: f
              }
            }({
              colorScheme: d,
              defaultColorScheme: f,
              contrastMode: u,
              defaultContrastMode: i
            });
          return (({
            container: e,
            currentScale: a,
            appearanceClass: t,
            otherAppearanceClasses: r,
            locale: o,
            className: c
          }) => {
            const s = p(c),
              d = p(e.current);
            (0, l.useEffect)((() => {
              e.current?.classList.contains(n.X6) || e.current?.classList.add(n.X6), e.current?.classList.contains(n.yU) || e.current?.classList.add(n.yU), e.current?.classList.add(t), e.current?.classList.remove(...r), s && c && e.current?.classList.contains(s) ? e.current?.classList.replace(s, c) : s && !c && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : c && e.current?.classList.add(c)
            }), [t, c]), (0, l.useEffect)((() => {
              e.current?.setAttribute("lang", o)
            }), [o]), (0, l.useEffect)((() => {
              e.current?.style.setProperty(n.HZ, a.toString())
            }), [a]), (0, l.useEffect)((() => {
              d?.classList.remove(n.X6), d?.classList.remove(n.yU), d?.classList.remove(t), d?.style.removeProperty(n.HZ), c && d?.classList.remove(c)
            }), [d])
          })({
            locale: w,
            className: a,
            appearanceClass: R,
            otherAppearanceClasses: W,
            currentScale: E,
            container: s ? L : x
          }), (0, r.jsx)(c.Provider, {
            value: {
              locale: w,
              defaultColorScheme: f,
              colorScheme: H,
              defaultContrastMode: i,
              contrastMode: U,
              defaultPlatformScale: g,
              platformScale: P,
              platformScaleRatios: y,
              platformScaleBreakpoints: k
            },
            children: s ? (0, r.jsx)(o.DX, {
              ref: _,
              children: e
            }) : e
          })
        }))
    }
  }
]);