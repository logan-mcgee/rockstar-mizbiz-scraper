try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8b0d1b6d-6936-434a-9615-56755cf930ed", e._sentryDebugIdIdentifier = "sentry-dbid-8b0d1b6d-6936-434a-9615-56755cf930ed")
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
  [3736], {
    4218: (e, t, r) => {
      r.d(t, {
        Cb: () => a,
        US: () => n,
        xW: () => o,
        HZ: () => l,
        X6: () => s,
        yU: () => c
      });
      var a = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        n = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        o = {
          dark: "foundry_nu8bkp6",
          darkHc: "foundry_nu8bkp8",
          light: "foundry_nu8bkp5",
          lightHc: "foundry_nu8bkp7",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3"
        },
        l = "--foundry-platform-scales-ratio-65afb887",
        s = "foundry_nu8bkp4",
        c = "foundry_nu8bkp3"
    },
    33736: (e, t, r) => {
      r.d(t, {
        NP: () => g,
        Ym: () => f,
        zQ: () => i,
        DP: () => d
      });
      var a = r(42295),
        n = (r(10131), r(39447)),
        o = r(62229),
        l = r(4218);
      const s = (0, o.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: l.US,
          platformScaleBreakpoints: l.Cb,
          locale: "en-US"
        }),
        c = () => (0, o.useContext)(s),
        d = () => {
          const {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: r,
            defaultContrastMode: a,
            platformScale: n,
            defaultPlatformScale: o,
            platformScaleRatios: l,
            platformScaleBreakpoints: s,
            locale: d
          } = c();
          return {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: r,
            defaultContrastMode: a,
            platformScale: n,
            defaultPlatformScale: o,
            platformScaleRatios: l,
            platformScaleBreakpoints: s,
            locale: d
          }
        },
        i = () => {
          const {
            platformScale: e
          } = c();
          return e
        },
        f = () => {
          const {
            locale: e
          } = c();
          return e
        };
      var u = r(37792);

      function p(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const a = e => u.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [n, l] = (0, o.useState)((() => r ? a(e) : t));

        function s() {
          l(a(e))
        }
        return (0, o.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return s(), t?.addListener ? t?.addListener(s) : t?.addEventListener("change", s), () => {
            t?.removeListener ? t?.removeListener(s) : t?.removeEventListener("change", s)
          }
        }), [e]), n
      }

      function m(e) {
        const t = (0, o.useRef)({
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
      const h = (e, t) => {
        const r = "more" === t ? l.xW.lightHc : l.xW.light,
          a = "more" === t ? l.xW.darkHc : l.xW.dark;
        return "dark" === e ? a : r
      };
      var S = r(22673);
      const y = () => S.X3 ? null : document.body,
        g = (0, o.forwardRef)((({
          children: e,
          className: t,
          container: r = y(),
          asChild: c,
          colorScheme: d,
          defaultColorScheme: i,
          contrastMode: f,
          defaultContrastMode: u,
          platformScaleBreakpoints: g,
          platformScaleRatios: b,
          defaultPlatformScale: k,
          platformScale: C,
          onPlatformScaleChange: v,
          locale: w = "en-US"
        }, M) => {
          const x = (0, o.useRef)(null),
            _ = function(...e) {
              const t = (0, o.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach((e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                }))
              }), t.current
            }(x, M),
            L = (0, o.useRef)(r),
            {
              ratio: E,
              scale: R
            } = function(e) {
              const t = (0, o.useMemo)((() => ({
                  ...l.US,
                  ...e.platformScaleRatios
                })), [e.platformScaleRatios]),
                r = (0, o.useMemo)((() => ({
                  ...l.Cb,
                  ...e.platformScaleBreakpoints
                })), [e.platformScaleBreakpoints]),
                [a, n] = (0, o.useState)(e.platformScale || e.defaultPlatformScale),
                s = (0, o.useCallback)((t => {
                  n(t), e.onPlatformScaleChange?.(t)
                }), [e.onPlatformScaleChange]),
                c = (0, o.useRef)([]),
                d = () => {
                  if (!S.X3) {
                    for (const {
                        handler: e,
                        matchMedia: t
                      }
                      of c.current) t.removeEventListener("change", e);
                    c.current = []
                  }
                };
              return (0, o.useEffect)((() => (e.platformScale ? s(e.platformScale) : (() => {
                if (!S.X3) {
                  d();
                  for (const e in r) {
                    const t = window.matchMedia(r[e]),
                      a = t => {
                        t.matches && s(e)
                      };
                    t.addEventListener("change", a), t.matches && s(e), c.current.push({
                      handler: a,
                      matchMedia: t
                    })
                  }
                }
              })(), d)), [r, e.platformScale, s]), {
                scale: a,
                ratio: t[a]
              }
            }({
              onPlatformScaleChange: v,
              platformScaleBreakpoints: g,
              platformScaleRatios: b,
              defaultPlatformScale: k,
              platformScale: C
            }),
            {
              appearanceClass: P,
              otherAppearanceClasses: W,
              providerColor: D,
              providerContrast: N
            } = function({
              colorScheme: e,
              defaultColorScheme: t = "dark",
              contrastMode: r,
              defaultContrastMode: a = "normal"
            }) {
              const n = p("(prefers-color-scheme: light)"),
                s = p("(prefers-color-scheme: dark)"),
                c = p("(prefers-contrast: more)"),
                d = "system" !== e && e || n && "light" || s && "dark" || t,
                i = r || c && "more" || a,
                f = (0, o.useMemo)((() => h(d, i)), [d, i]),
                u = (0, o.useMemo)((() => ((e, t) => {
                  const r = h(e, t);
                  return [l.xW.light, l.xW.dark, l.xW.lightHc, l.xW.darkHc].filter((e => e !== r))
                })(d, i)), [d, i]);
              return {
                appearanceClass: f,
                otherAppearanceClasses: u,
                providerColor: d,
                providerContrast: i
              }
            }({
              colorScheme: d,
              defaultColorScheme: i,
              contrastMode: f,
              defaultContrastMode: u
            });
          return (({
            container: e,
            currentScale: t,
            appearanceClass: r,
            otherAppearanceClasses: a,
            locale: n,
            className: s
          }) => {
            const c = m(s),
              d = m(e.current);
            (0, o.useEffect)((() => {
              e.current?.classList.contains(l.X6) || e.current?.classList.add(l.X6), e.current?.classList.contains(l.yU) || e.current?.classList.add(l.yU), e.current?.classList.add(r), e.current?.classList.remove(...a), c && s && e.current?.classList.contains(c) ? e.current?.classList.replace(c, s) : c && !s && e.current?.classList.contains(c) ? e.current?.classList.remove(c) : s && e.current?.classList.add(s)
            }), [r, s]), (0, o.useEffect)((() => {
              e.current?.setAttribute("lang", n)
            }), [n]), (0, o.useEffect)((() => {
              e.current?.style.setProperty(l.HZ, t.toString())
            }), [t]), (0, o.useEffect)((() => {
              d?.classList.remove(l.X6), d?.classList.remove(l.yU), d?.classList.remove(r), d?.style.removeProperty(l.HZ), s && d?.classList.remove(s)
            }), [d])
          })({
            locale: w,
            className: t,
            appearanceClass: P,
            otherAppearanceClasses: W,
            currentScale: E,
            container: c ? x : L
          }), (0, a.jsx)(s.Provider, {
            value: {
              locale: w,
              defaultColorScheme: i,
              colorScheme: D,
              defaultContrastMode: u,
              contrastMode: N,
              defaultPlatformScale: k,
              platformScale: R,
              platformScaleRatios: b,
              platformScaleBreakpoints: g
            },
            children: c ? (0, a.jsx)(n.DX, {
              ref: _,
              children: e
            }) : e
          })
        }))
    },
    39447: (e, t, r) => {
      r.d(t, {
        DX: () => s,
        Dc: () => i,
        TL: () => l,
        xV: () => f
      });
      var a = r(62229),
        n = r(95362),
        o = r(42295);

      function l(e) {
        const t = c(e),
          r = a.forwardRef(((e, r) => {
            const {
              children: n,
              ...l
            } = e, s = a.Children.toArray(n), c = s.find(u);
            if (c) {
              const e = c.props.children,
                n = s.map((t => t === c ? a.Children.count(e) > 1 ? a.Children.only(null) : a.isValidElement(e) ? e.props.children : null : t));
              return (0, o.jsx)(t, {
                ...l,
                ref: r,
                children: a.isValidElement(e) ? a.cloneElement(e, void 0, n) : null
              })
            }
            return (0, o.jsx)(t, {
              ...l,
              ref: r,
              children: n
            })
          }));
        return r.displayName = `${e}.Slot`, r
      }
      var s = l("Slot");

      function c(e) {
        const t = a.forwardRef(((e, t) => {
          const {
            children: r,
            ...o
          } = e;
          if (a.isValidElement(r)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  r = t && "isReactWarning" in t && t.isReactWarning;
                return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
              }(r),
              l = function(e, t) {
                const r = {
                  ...t
                };
                for (const a in t) {
                  const n = e[a],
                    o = t[a];
                  /^on[A-Z]/.test(a) ? n && o ? r[a] = (...e) => {
                    o(...e), n(...e)
                  } : n && (r[a] = n) : "style" === a ? r[a] = {
                    ...n,
                    ...o
                  } : "className" === a && (r[a] = [n, o].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(o, r.props);
            return r.type !== a.Fragment && (l.ref = t ? (0, n.t)(t, e) : e), a.cloneElement(r, l)
          }
          return a.Children.count(r) > 1 ? a.Children.only(null) : null
        }));
        return t.displayName = `${e}.SlotClone`, t
      }
      var d = Symbol("radix.slottable");

      function i(e) {
        const t = ({
          children: e
        }) => (0, o.jsx)(o.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = d, t
      }
      var f = i("Slottable");

      function u(e) {
        return a.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === d
      }
    },
    95362: (e, t, r) => {
      r.d(t, {
        s: () => l,
        t: () => o
      });
      var a = r(62229);

      function n(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function o(...e) {
        return t => {
          let r = !1;
          const a = e.map((e => {
            const a = n(e, t);
            return r || "function" != typeof a || (r = !0), a
          }));
          if (r) return () => {
            for (let t = 0; t < a.length; t++) {
              const r = a[t];
              "function" == typeof r ? r() : n(e[t], null)
            }
          }
        }
      }

      function l(...e) {
        return a.useCallback(o(...e), e)
      }
    }
  }
]);