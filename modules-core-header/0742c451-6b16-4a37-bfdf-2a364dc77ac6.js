try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0742c451-6b16-4a37-bfdf-2a364dc77ac6", e._sentryDebugIdIdentifier = "sentry-dbid-0742c451-6b16-4a37-bfdf-2a364dc77ac6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2968], {
    31589(e, a, r) {
      r.d(a, {
        NP: () => y,
        Ym: () => c,
        zQ: () => d
      });
      var o = r(39793),
        t = (r(46260), r(84173)),
        n = r(4637);
      const l = (0, n.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        s = () => (0, n.useContext)(l),
        d = () => {
          const {
            platformScale: e
          } = s();
          return e
        },
        c = () => {
          const {
            locale: e
          } = s();
          return e
        };
      var i = r(31821),
        f = r(8789);
      const u = e => "dark" === e ? f.xW.dark : f.xW.light;
      var b = r(59236);
      const g = () => b.IS_SERVER ? null : document.body,
        y = (0, n.forwardRef)(({
          children: e,
          className: a,
          container: r = g(),
          asChild: s,
          colorScheme: d,
          defaultColorScheme: c,
          defaultPlatformScale: y,
          platformScale: v,
          onPlatformScaleChange: p,
          locale: m = "en-US"
        }, h) => {
          const w = (0, n.useRef)(null),
            E = (0, i.UP)(w, h),
            k = (0, n.useRef)(r),
            {
              ratio: C,
              scale: P
            } = function(e) {
              const [a, r] = (0, n.useState)(e.platformScale || e.defaultPlatformScale), o = (0, n.useCallback)(a => {
                r(a), e.onPlatformScaleChange?.(a)
              }, [e.onPlatformScaleChange]), t = (0, n.useRef)([]), l = () => {
                if (!b.IS_SERVER) {
                  for (const {
                      handler: e,
                      matchMedia: a
                    }
                    of t.current) a.removeEventListener("change", e);
                  t.current = []
                }
              };
              return (0, n.useEffect)(() => (e.platformScale ? o(e.platformScale) : (() => {
                if (!b.IS_SERVER) {
                  l();
                  for (const e in f.wj) {
                    const a = window.matchMedia(f.wj[e]),
                      r = a => {
                        a.matches && o(e)
                      };
                    a.addEventListener("change", r), a.matches && o(e), t.current.push({
                      handler: r,
                      matchMedia: a
                    })
                  }
                }
              })(), l), [e.platformScale, o]), {
                scale: a,
                ratio: f.nz[a]
              }
            }({
              onPlatformScaleChange: p,
              defaultPlatformScale: y,
              platformScale: v
            }),
            {
              appearanceClass: T,
              otherAppearanceClasses: S,
              providerColor: L
            } = function({
              colorScheme: e,
              defaultColorScheme: a = "dark"
            }) {
              const r = (0, i.Ub)("(prefers-color-scheme: light)"),
                o = (0, i.Ub)("(prefers-color-scheme: dark)"),
                t = "system" !== e && e || r && "light" || o && "dark" || a,
                l = (0, n.useMemo)(() => u(t), [t]),
                s = (0, n.useMemo)(() => (e => {
                  const a = u(e);
                  return [f.xW.light, f.xW.dark].filter(e => e !== a)
                })(t), [t]);
              return {
                appearanceClass: l,
                otherAppearanceClasses: s,
                providerColor: t
              }
            }({
              colorScheme: d,
              defaultColorScheme: c
            });
          return (({
            container: e,
            currentScale: a,
            appearanceClass: r,
            otherAppearanceClasses: o,
            locale: t,
            className: l
          }) => {
            const s = (0, i.ZC)(l),
              d = (0, i.ZC)(e.current);
            (0, n.useEffect)(() => {
              e.current?.classList.contains(f.X6) || e.current?.classList.add(f.X6), e.current?.classList.contains(f.yU) || e.current?.classList.add(f.yU), e.current?.classList.contains(f.Np) || e.current?.classList.add(f.Np), e.current?.classList.add(r), e.current?.classList.remove(...o), s && l && e.current?.classList.contains(s) ? e.current?.classList.replace(s, l) : s && !l && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : l && e.current?.classList.add(l)
            }, [r, l]), (0, n.useEffect)(() => {
              e.current?.setAttribute("lang", t)
            }, [t]), (0, n.useEffect)(() => (a && e.current?.style.setProperty(f.HZ, a.toString()), () => {
              e.current?.style.removeProperty(f.HZ)
            }), [a]), (0, n.useEffect)(() => {
              d?.classList.remove(f.X6), d?.classList.remove(f.yU), d?.classList.remove(r), d?.style.removeProperty(f.HZ), l && d?.classList.remove(l)
            }, [d])
          })({
            locale: m,
            className: a,
            appearanceClass: T,
            otherAppearanceClasses: S,
            currentScale: v ? C : -0,
            container: s ? w : k
          }), (0, o.jsx)(l.Provider, {
            value: {
              locale: m,
              defaultColorScheme: c,
              colorScheme: L,
              defaultPlatformScale: y,
              platformScale: P
            },
            children: s ? (0, o.jsx)(t.DX, {
              ref: E,
              children: e
            }) : e
          })
        })
    },
    30740(e, a, r) {
      r.d(a, {
        DI: () => t,
        us: () => n.us,
        Tm: () => s,
        LU: () => l
      });
      var o = r(73481);

      function t(e, a) {
        var r = {};
        if ("object" == typeof a) {
          var t = e;
          (0, o.Bx)(a, (e, a) => {
            if (null != e) {
              var n = (0, o.Jt)(t, a);
              r[(0, o.Tm)(n)] = String(e)
            }
          })
        } else {
          var n = e;
          for (var l in n) {
            var s = n[l];
            null != s && (r[(0, o.Tm)(l)] = s)
          }
        }
        return Object.defineProperty(r, "toString", {
          value: function() {
            return Object.keys(this).map(e => "".concat(e, ":").concat(this[e])).join(";")
          },
          writable: !1
        }), r
      }
      var n = r(46260),
        l = (r(39646), {
          global: {
            color: {
              grey: {
                static: {
                  25: "var(--foundry-global-color-grey-static-25-05dae190)",
                  50: "var(--foundry-global-color-grey-static-50-767699a7)",
                  75: "var(--foundry-global-color-grey-static-75-a2172132)",
                  100: "var(--foundry-global-color-grey-static-100-01811cdb)",
                  200: "var(--foundry-global-color-grey-static-200-8230761c)",
                  300: "var(--foundry-global-color-grey-static-300-60d2d1b8)",
                  400: "var(--foundry-global-color-grey-static-400-b9847fcb)",
                  500: "var(--foundry-global-color-grey-static-500-c92b4dd8)",
                  600: "var(--foundry-global-color-grey-static-600-048e9067)",
                  700: "var(--foundry-global-color-grey-static-700-6ebcd800)",
                  800: "var(--foundry-global-color-grey-static-800-35f77231)",
                  900: "var(--foundry-global-color-grey-static-900-a85ec23d)"
                },
                adaptive: {
                  25: "var(--foundry-global-color-grey-adaptive-25-4181979c)",
                  50: "var(--foundry-global-color-grey-adaptive-50-2026f5f9)",
                  75: "var(--foundry-global-color-grey-adaptive-75-e832421c)",
                  100: "var(--foundry-global-color-grey-adaptive-100-ed36bf65)",
                  200: "var(--foundry-global-color-grey-adaptive-200-fb12d031)",
                  300: "var(--foundry-global-color-grey-adaptive-300-02700b85)",
                  400: "var(--foundry-global-color-grey-adaptive-400-54ccd69e)",
                  500: "var(--foundry-global-color-grey-adaptive-500-ddc3fb78)",
                  600: "var(--foundry-global-color-grey-adaptive-600-e8d9db01)",
                  700: "var(--foundry-global-color-grey-adaptive-700-e3418aa4)",
                  800: "var(--foundry-global-color-grey-adaptive-800-59c03dd7)",
                  900: "var(--foundry-global-color-grey-adaptive-900-bbecd7df)",
                  1e3: "var(--foundry-global-color-grey-adaptive-1000-020dfb1f)"
                }
              },
              red: {
                static: {
                  100: "var(--foundry-global-color-red-static-100-5234bf51)",
                  200: "var(--foundry-global-color-red-static-200-9b555022)",
                  300: "var(--foundry-global-color-red-static-300-6ef42061)",
                  400: "var(--foundry-global-color-red-static-400-bd31684b)",
                  500: "var(--foundry-global-color-red-static-500-b89c22c5)",
                  600: "var(--foundry-global-color-red-static-600-ed4f7808)",
                  700: "var(--foundry-global-color-red-static-700-20c326c5)",
                  800: "var(--foundry-global-color-red-static-800-60c90a7b)",
                  900: "var(--foundry-global-color-red-static-900-55f69265)",
                  1e3: "var(--foundry-global-color-red-static-1000-12c1e6bb)",
                  1100: "var(--foundry-global-color-red-static-1100-284ef4c0)",
                  1200: "var(--foundry-global-color-red-static-1200-5d3f7911)",
                  1300: "var(--foundry-global-color-red-static-1300-43fd11f8)",
                  1400: "var(--foundry-global-color-red-static-1400-dff9f9a5)"
                },
                adaptive: {
                  100: "var(--foundry-global-color-red-adaptive-100-9f218b31)",
                  200: "var(--foundry-global-color-red-adaptive-200-b287e195)",
                  300: "var(--foundry-global-color-red-adaptive-300-3513afa6)",
                  400: "var(--foundry-global-color-red-adaptive-400-2e43b523)",
                  500: "var(--foundry-global-color-red-adaptive-500-d198b061)",
                  600: "var(--foundry-global-color-red-adaptive-600-7da276f6)",
                  700: "var(--foundry-global-color-red-adaptive-700-6f634812)",
                  800: "var(--foundry-global-color-red-adaptive-800-7f423e03)",
                  900: "var(--foundry-global-color-red-adaptive-900-43f71e11)",
                  1e3: "var(--foundry-global-color-red-adaptive-1000-9f5e2924)",
                  1100: "var(--foundry-global-color-red-adaptive-1100-f2f72614)",
                  1200: "var(--foundry-global-color-red-adaptive-1200-aef5078c)",
                  1300: "var(--foundry-global-color-red-adaptive-1300-3c79c39b)",
                  1400: "var(--foundry-global-color-red-adaptive-1400-918ac2c6)"
                }
              },
              yellow: {
                static: {
                  100: "var(--foundry-global-color-yellow-static-100-2887d8ce)",
                  200: "var(--foundry-global-color-yellow-static-200-1dceac31)",
                  300: "var(--foundry-global-color-yellow-static-300-bda8dae5)",
                  400: "var(--foundry-global-color-yellow-static-400-e603ca1c)",
                  500: "var(--foundry-global-color-yellow-static-500-b9703bbc)",
                  600: "var(--foundry-global-color-yellow-static-600-828a39a0)",
                  700: "var(--foundry-global-color-yellow-static-700-cb059cba)",
                  800: "var(--foundry-global-color-yellow-static-800-e49b6916)",
                  900: "var(--foundry-global-color-yellow-static-900-ff35761e)",
                  1e3: "var(--foundry-global-color-yellow-static-1000-7c6c4551)",
                  1100: "var(--foundry-global-color-yellow-static-1100-2e821a8c)",
                  1200: "var(--foundry-global-color-yellow-static-1200-aea00231)",
                  1300: "var(--foundry-global-color-yellow-static-1300-7eec7bd0)",
                  1400: "var(--foundry-global-color-yellow-static-1400-0ff6b89d)"
                },
                adaptive: {
                  100: "var(--foundry-global-color-yellow-adaptive-100-8f09820e)",
                  200: "var(--foundry-global-color-yellow-adaptive-200-63c3f5ee)",
                  300: "var(--foundry-global-color-yellow-adaptive-300-4deab2f6)",
                  400: "var(--foundry-global-color-yellow-adaptive-400-78286ac3)",
                  500: "var(--foundry-global-color-yellow-adaptive-500-f0427a70)",
                  600: "var(--foundry-global-color-yellow-adaptive-600-3f6d60dc)",
                  700: "var(--foundry-global-color-yellow-adaptive-700-959c799c)",
                  800: "var(--foundry-global-color-yellow-adaptive-800-099fea86)",
                  900: "var(--foundry-global-color-yellow-adaptive-900-9443df02)",
                  1e3: "var(--foundry-global-color-yellow-adaptive-1000-abbedd59)",
                  1100: "var(--foundry-global-color-yellow-adaptive-1100-ff18d083)",
                  1200: "var(--foundry-global-color-yellow-adaptive-1200-4bc40f51)",
                  1300: "var(--foundry-global-color-yellow-adaptive-1300-b3a4b5b4)",
                  1400: "var(--foundry-global-color-yellow-adaptive-1400-3048335a)"
                }
              },
              green: {
                static: {
                  100: "var(--foundry-global-color-green-static-100-753f09df)",
                  200: "var(--foundry-global-color-green-static-200-b1b43708)",
                  300: "var(--foundry-global-color-green-static-300-d66b3241)",
                  400: "var(--foundry-global-color-green-static-400-a93942e5)",
                  500: "var(--foundry-global-color-green-static-500-2888e254)",
                  600: "var(--foundry-global-color-green-static-600-aebbfb3a)",
                  700: "var(--foundry-global-color-green-static-700-89b4ffdc)",
                  800: "var(--foundry-global-color-green-static-800-87b9bb4f)",
                  900: "var(--foundry-global-color-green-static-900-b42b84da)",
                  1e3: "var(--foundry-global-color-green-static-1000-43ecb25e)",
                  1100: "var(--foundry-global-color-green-static-1100-d4597796)",
                  1200: "var(--foundry-global-color-green-static-1200-a4dad299)",
                  1300: "var(--foundry-global-color-green-static-1300-7861b376)",
                  1400: "var(--foundry-global-color-green-static-1400-4d463023)"
                },
                adaptive: {
                  100: "var(--foundry-global-color-green-adaptive-100-e36f5da3)",
                  200: "var(--foundry-global-color-green-adaptive-200-e50d247c)",
                  300: "var(--foundry-global-color-green-adaptive-300-e74a73b3)",
                  400: "var(--foundry-global-color-green-adaptive-400-3e375ae0)",
                  500: "var(--foundry-global-color-green-adaptive-500-5eb32af8)",
                  600: "var(--foundry-global-color-green-adaptive-600-67db0104)",
                  700: "var(--foundry-global-color-green-adaptive-700-b46c5b6e)",
                  800: "var(--foundry-global-color-green-adaptive-800-62f4ea41)",
                  900: "var(--foundry-global-color-green-adaptive-900-456c793d)",
                  1e3: "var(--foundry-global-color-green-adaptive-1000-ebe84050)",
                  1100: "var(--foundry-global-color-green-adaptive-1100-7d1a8857)",
                  1200: "var(--foundry-global-color-green-adaptive-1200-f5a760b2)",
                  1300: "var(--foundry-global-color-green-adaptive-1300-98111c27)",
                  1400: "var(--foundry-global-color-green-adaptive-1400-c7a2c7e4)"
                }
              },
              blue: {
                static: {
                  100: "var(--foundry-global-color-blue-static-100-e67c243c)",
                  200: "var(--foundry-global-color-blue-static-200-d053fe98)",
                  300: "var(--foundry-global-color-blue-static-300-564f6a4f)",
                  400: "var(--foundry-global-color-blue-static-400-803833dc)",
                  500: "var(--foundry-global-color-blue-static-500-029df7ec)",
                  600: "var(--foundry-global-color-blue-static-600-55155611)",
                  700: "var(--foundry-global-color-blue-static-700-f0d799e8)",
                  800: "var(--foundry-global-color-blue-static-800-6d071594)",
                  900: "var(--foundry-global-color-blue-static-900-92d3b7cc)",
                  1e3: "var(--foundry-global-color-blue-static-1000-cc0c4d91)",
                  1100: "var(--foundry-global-color-blue-static-1100-674881c3)",
                  1200: "var(--foundry-global-color-blue-static-1200-81ade28f)",
                  1300: "var(--foundry-global-color-blue-static-1300-92c235c9)",
                  1400: "var(--foundry-global-color-blue-static-1400-1b5feb14)"
                },
                adaptive: {
                  100: "var(--foundry-global-color-blue-adaptive-100-b6c46a86)",
                  200: "var(--foundry-global-color-blue-adaptive-200-0ccc0c81)",
                  300: "var(--foundry-global-color-blue-adaptive-300-e5d80c0e)",
                  400: "var(--foundry-global-color-blue-adaptive-400-44a2af0b)",
                  500: "var(--foundry-global-color-blue-adaptive-500-64093fc7)",
                  600: "var(--foundry-global-color-blue-adaptive-600-41bcc0d5)",
                  700: "var(--foundry-global-color-blue-adaptive-700-6f985a0d)",
                  800: "var(--foundry-global-color-blue-adaptive-800-c66fae2b)",
                  900: "var(--foundry-global-color-blue-adaptive-900-f87fb7ab)",
                  1e3: "var(--foundry-global-color-blue-adaptive-1000-129c45a7)",
                  1100: "var(--foundry-global-color-blue-adaptive-1100-579d2d7f)",
                  1200: "var(--foundry-global-color-blue-adaptive-1200-5b826b61)",
                  1300: "var(--foundry-global-color-blue-adaptive-1300-5864a192)",
                  1400: "var(--foundry-global-color-blue-adaptive-1400-b9e5f8ab)"
                }
              },
              seafoam: {
                static: {
                  100: "var(--foundry-global-color-seafoam-static-100-a401f55d)",
                  200: "var(--foundry-global-color-seafoam-static-200-157f98a6)",
                  300: "var(--foundry-global-color-seafoam-static-300-f057cb2a)",
                  400: "var(--foundry-global-color-seafoam-static-400-5c314058)",
                  500: "var(--foundry-global-color-seafoam-static-500-4eba9472)",
                  600: "var(--foundry-global-color-seafoam-static-600-bb39e74b)",
                  700: "var(--foundry-global-color-seafoam-static-700-97a0e42c)",
                  800: "var(--foundry-global-color-seafoam-static-800-c898779d)",
                  900: "var(--foundry-global-color-seafoam-static-900-ca1e00fd)",
                  1e3: "var(--foundry-global-color-seafoam-static-1000-97b36592)",
                  1100: "var(--foundry-global-color-seafoam-static-1100-7a540639)",
                  1200: "var(--foundry-global-color-seafoam-static-1200-9d613b2f)",
                  1300: "var(--foundry-global-color-seafoam-static-1300-5d82dc91)",
                  1400: "var(--foundry-global-color-seafoam-static-1400-c9f1799c)"
                },
                adaptive: {
                  100: "var(--foundry-global-color-seafoam-adaptive-100-9fd7898d)",
                  200: "var(--foundry-global-color-seafoam-adaptive-200-ad5ea160)",
                  300: "var(--foundry-global-color-seafoam-adaptive-300-339db442)",
                  400: "var(--foundry-global-color-seafoam-adaptive-400-bacc52ab)",
                  500: "var(--foundry-global-color-seafoam-adaptive-500-24d9f0ae)",
                  600: "var(--foundry-global-color-seafoam-adaptive-600-28f1d217)",
                  700: "var(--foundry-global-color-seafoam-adaptive-700-f8862c98)",
                  800: "var(--foundry-global-color-seafoam-adaptive-800-240ff22d)",
                  900: "var(--foundry-global-color-seafoam-adaptive-900-30744fa2)",
                  1e3: "var(--foundry-global-color-seafoam-adaptive-1000-cecc3b2f)",
                  1100: "var(--foundry-global-color-seafoam-adaptive-1100-307fe74e)",
                  1200: "var(--foundry-global-color-seafoam-adaptive-1200-1d61b617)",
                  1300: "var(--foundry-global-color-seafoam-adaptive-1300-26c82681)",
                  1400: "var(--foundry-global-color-seafoam-adaptive-1400-6cf3df35)"
                }
              },
              white: {
                static: {
                  5: "var(--foundry-global-color-white-static-5-c4aa496e)",
                  10: "var(--foundry-global-color-white-static-10-fc74444e)",
                  15: "var(--foundry-global-color-white-static-15-e98f967d)",
                  20: "var(--foundry-global-color-white-static-20-6326998e)",
                  35: "var(--foundry-global-color-white-static-35-fdd05d92)",
                  40: "var(--foundry-global-color-white-static-40-a06b4074)",
                  50: "var(--foundry-global-color-white-static-50-195bb728)",
                  65: "var(--foundry-global-color-white-static-65-c30f2d6e)",
                  80: "var(--foundry-global-color-white-static-80-1525ba22)",
                  85: "var(--foundry-global-color-white-static-85-79c7cc6b)",
                  90: "var(--foundry-global-color-white-static-90-5959c519)",
                  95: "var(--foundry-global-color-white-static-95-becabaec)",
                  100: "var(--foundry-global-color-white-static-100-d44db539)"
                }
              },
              black: {
                static: {
                  5: "var(--foundry-global-color-black-static-5-5a16f697)",
                  10: "var(--foundry-global-color-black-static-10-16a76e5e)",
                  15: "var(--foundry-global-color-black-static-15-d198b2a6)",
                  20: "var(--foundry-global-color-black-static-20-3ae064df)",
                  35: "var(--foundry-global-color-black-static-35-1523cb80)",
                  40: "var(--foundry-global-color-black-static-40-32fa6bf3)",
                  50: "var(--foundry-global-color-black-static-50-e761096d)",
                  65: "var(--foundry-global-color-black-static-65-1c288c8d)",
                  80: "var(--foundry-global-color-black-static-80-ceca67af)",
                  85: "var(--foundry-global-color-black-static-85-3cb71ba6)",
                  90: "var(--foundry-global-color-black-static-90-45219d0a)",
                  95: "var(--foundry-global-color-black-static-95-4042e3bb)",
                  100: "var(--foundry-global-color-black-static-100-43aea341)"
                }
              },
              alpha: {
                adaptive: {
                  5: "var(--foundry-global-color-alpha-adaptive-5-b141acdd)",
                  10: "var(--foundry-global-color-alpha-adaptive-10-2f911b2f)",
                  15: "var(--foundry-global-color-alpha-adaptive-15-695b3a30)",
                  20: "var(--foundry-global-color-alpha-adaptive-20-8e38b04d)",
                  35: "var(--foundry-global-color-alpha-adaptive-35-f9b0b74d)",
                  40: "var(--foundry-global-color-alpha-adaptive-40-29c77778)",
                  50: "var(--foundry-global-color-alpha-adaptive-50-f61afb4a)",
                  65: "var(--foundry-global-color-alpha-adaptive-65-5c75d572)",
                  80: "var(--foundry-global-color-alpha-adaptive-80-6e56c3f3)",
                  85: "var(--foundry-global-color-alpha-adaptive-85-130819b2)",
                  90: "var(--foundry-global-color-alpha-adaptive-90-a416f5ef)",
                  95: "var(--foundry-global-color-alpha-adaptive-95-68274c65)"
                }
              }
            },
            platformScales: {
              scale: {
                0: "var(--foundry-global-platform-scales-scale-0-0804de50)",
                10: "var(--foundry-global-platform-scales-scale-10-e43007a8)",
                25: "var(--foundry-global-platform-scales-scale-25-6410d0da)",
                33: "var(--foundry-global-platform-scales-scale-33-15ea8cb3)",
                50: "var(--foundry-global-platform-scales-scale-50-ce8d9569)",
                75: "var(--foundry-global-platform-scales-scale-75-e6cf5003)",
                100: "var(--foundry-global-platform-scales-scale-100-d27bfb1e)",
                125: "var(--foundry-global-platform-scales-scale-125-f7e280cb)",
                150: "var(--foundry-global-platform-scales-scale-150-6ca614ed)",
                175: "var(--foundry-global-platform-scales-scale-175-55240242)",
                200: "var(--foundry-global-platform-scales-scale-200-b985b3f2)",
                225: "var(--foundry-global-platform-scales-scale-225-d561439e)",
                250: "var(--foundry-global-platform-scales-scale-250-5ace963d)",
                300: "var(--foundry-global-platform-scales-scale-300-9356406c)",
                350: "var(--foundry-global-platform-scales-scale-350-a2b3bb07)",
                400: "var(--foundry-global-platform-scales-scale-400-25879f98)",
                450: "var(--foundry-global-platform-scales-scale-450-3029ab1a)",
                500: "var(--foundry-global-platform-scales-scale-500-f82c7fa1)",
                550: "var(--foundry-global-platform-scales-scale-550-d38e7e5a)",
                600: "var(--foundry-global-platform-scales-scale-600-396e1774)",
                650: "var(--foundry-global-platform-scales-scale-650-4291ab1c)",
                700: "var(--foundry-global-platform-scales-scale-700-251bd5dc)",
                750: "var(--foundry-global-platform-scales-scale-750-70abde6a)",
                800: "var(--foundry-global-platform-scales-scale-800-3fe8ece7)",
                900: "var(--foundry-global-platform-scales-scale-900-703d3bf4)",
                950: "var(--foundry-global-platform-scales-scale-950-faa06d06)",
                1e3: "var(--foundry-global-platform-scales-scale-1000-43953c90)",
                1100: "var(--foundry-global-platform-scales-scale-1100-6e89015f)",
                1150: "var(--foundry-global-platform-scales-scale-1150-a779c276)",
                1200: "var(--foundry-global-platform-scales-scale-1200-32a4be13)",
                1400: "var(--foundry-global-platform-scales-scale-1400-cfe54919)",
                1600: "var(--foundry-global-platform-scales-scale-1600-54eb9368)",
                1700: "var(--foundry-global-platform-scales-scale-1700-2581e2fc)",
                1800: "var(--foundry-global-platform-scales-scale-1800-2a76d411)",
                2e3: "var(--foundry-global-platform-scales-scale-2000-2558d0f0)",
                2200: "var(--foundry-global-platform-scales-scale-2200-7289d3db)",
                2350: "var(--foundry-global-platform-scales-scale-2350-76168f14)",
                2400: "var(--foundry-global-platform-scales-scale-2400-e83742de)",
                2500: "var(--foundry-global-platform-scales-scale-2500-24cc854f)",
                2750: "var(--foundry-global-platform-scales-scale-2750-217f5509)",
                3e3: "var(--foundry-global-platform-scales-scale-3000-586585a3)",
                3150: "var(--foundry-global-platform-scales-scale-3150-8caf26b3)",
                3350: "var(--foundry-global-platform-scales-scale-3350-9395e22d)",
                3500: "var(--foundry-global-platform-scales-scale-3500-c9791024)",
                3750: "var(--foundry-global-platform-scales-scale-3750-e5864061)",
                4e3: "var(--foundry-global-platform-scales-scale-4000-35294825)",
                4125: "var(--foundry-global-platform-scales-scale-4125-d7f8e5c7)",
                4250: "var(--foundry-global-platform-scales-scale-4250-3f02afdd)",
                4500: "var(--foundry-global-platform-scales-scale-4500-4b7f7b1a)",
                4750: "var(--foundry-global-platform-scales-scale-4750-f39e7cdd)",
                5e3: "var(--foundry-global-platform-scales-scale-5000-fd5d6798)",
                5250: "var(--foundry-global-platform-scales-scale-5250-526fbc6e)",
                5500: "var(--foundry-global-platform-scales-scale-5500-8d4a1c23)",
                5750: "var(--foundry-global-platform-scales-scale-5750-231d0b96)",
                6e3: "var(--foundry-global-platform-scales-scale-6000-48c91d9d)",
                6250: "var(--foundry-global-platform-scales-scale-6250-47fc2cb8)"
              }
            },
            border: {
              radius: {
                0: "var(--foundry-global-border-radius-0-df9394ed)",
                25: "var(--foundry-global-border-radius-25-00f8ef97)",
                50: "var(--foundry-global-border-radius-50-5b3f01bf)",
                100: "var(--foundry-global-border-radius-100-742803b2)",
                150: "var(--foundry-global-border-radius-150-ca109bc3)",
                200: "var(--foundry-global-border-radius-200-ece22bd6)",
                300: "var(--foundry-global-border-radius-300-7c6d4daf)",
                400: "var(--foundry-global-border-radius-400-ddbb88dd)",
                circle: "var(--foundry-global-border-radius-circle-a97600a9)",
                pill: "var(--foundry-global-border-radius-pill-8c8d51e6)"
              },
              width: {
                0: "var(--foundry-global-border-width-0-b149a800)",
                10: "var(--foundry-global-border-width-10-8d34e94d)",
                25: "var(--foundry-global-border-width-25-52cee49a)",
                33: "var(--foundry-global-border-width-33-d4281be2)",
                50: "var(--foundry-global-border-width-50-ed6ae051)"
              }
            },
            spacing: {
              gap: {
                10: "var(--foundry-global-spacing-gap-10-33a1fb65)",
                25: "var(--foundry-global-spacing-gap-25-2a51e690)",
                33: "var(--foundry-global-spacing-gap-33-ab827c04)",
                50: "var(--foundry-global-spacing-gap-50-ae99fc48)",
                75: "var(--foundry-global-spacing-gap-75-397a0da6)",
                100: "var(--foundry-global-spacing-gap-100-05387de1)",
                125: "var(--foundry-global-spacing-gap-125-23231511)",
                150: "var(--foundry-global-spacing-gap-150-7f268a13)",
                175: "var(--foundry-global-spacing-gap-175-d63af5f3)",
                200: "var(--foundry-global-spacing-gap-200-7d922174)",
                225: "var(--foundry-global-spacing-gap-225-b2ca1ee1)",
                250: "var(--foundry-global-spacing-gap-250-ee21f32b)",
                300: "var(--foundry-global-spacing-gap-300-2f9fe0c5)",
                350: "var(--foundry-global-spacing-gap-350-7ac0bb64)",
                400: "var(--foundry-global-spacing-gap-400-f21302a9)",
                450: "var(--foundry-global-spacing-gap-450-08746772)",
                500: "var(--foundry-global-spacing-gap-500-0fe0ec68)",
                550: "var(--foundry-global-spacing-gap-550-aff30058)",
                600: "var(--foundry-global-spacing-gap-600-d02b9116)",
                650: "var(--foundry-global-spacing-gap-650-d67ef995)",
                700: "var(--foundry-global-spacing-gap-700-936963d7)",
                750: "var(--foundry-global-spacing-gap-750-66d6e892)",
                800: "var(--foundry-global-spacing-gap-800-4ee30294)",
                900: "var(--foundry-global-spacing-gap-900-9531b9b6)",
                950: "var(--foundry-global-spacing-gap-950-cf297696)",
                1e3: "var(--foundry-global-spacing-gap-1000-af3eeb0f)",
                1100: "var(--foundry-global-spacing-gap-1100-6d6ab862)",
                1150: "var(--foundry-global-spacing-gap-1150-5e5d766c)",
                1200: "var(--foundry-global-spacing-gap-1200-5eb7c00a)",
                1400: "var(--foundry-global-spacing-gap-1400-302a953d)",
                1600: "var(--foundry-global-spacing-gap-1600-f3e8c303)",
                1700: "var(--foundry-global-spacing-gap-1700-b6c3835e)",
                1800: "var(--foundry-global-spacing-gap-1800-9826a3ad)",
                2e3: "var(--foundry-global-spacing-gap-2000-c24e1178)",
                2200: "var(--foundry-global-spacing-gap-2200-8192be37)",
                2350: "var(--foundry-global-spacing-gap-2350-1cf77686)",
                2400: "var(--foundry-global-spacing-gap-2400-c9462d01)",
                2500: "var(--foundry-global-spacing-gap-2500-442ef530)"
              },
              dimensions: {
                10: "var(--foundry-global-spacing-dimensions-10-7d52ec29)",
                25: "var(--foundry-global-spacing-dimensions-25-eec1a90b)",
                33: "var(--foundry-global-spacing-dimensions-33-9d3ffc33)",
                50: "var(--foundry-global-spacing-dimensions-50-b85610c2)",
                75: "var(--foundry-global-spacing-dimensions-75-8db9e2a0)",
                100: "var(--foundry-global-spacing-dimensions-100-97e13da9)",
                125: "var(--foundry-global-spacing-dimensions-125-ef032ca7)",
                150: "var(--foundry-global-spacing-dimensions-150-ea1fb93c)",
                175: "var(--foundry-global-spacing-dimensions-175-6d1e42fb)",
                200: "var(--foundry-global-spacing-dimensions-200-2fbf5420)",
                225: "var(--foundry-global-spacing-dimensions-225-f91d4d91)",
                250: "var(--foundry-global-spacing-dimensions-250-1db78665)",
                300: "var(--foundry-global-spacing-dimensions-300-8149e8c1)",
                350: "var(--foundry-global-spacing-dimensions-350-1aeb7130)",
                400: "var(--foundry-global-spacing-dimensions-400-b120da78)",
                450: "var(--foundry-global-spacing-dimensions-450-41690cc7)",
                500: "var(--foundry-global-spacing-dimensions-500-72b67c3c)",
                550: "var(--foundry-global-spacing-dimensions-550-97601a54)",
                600: "var(--foundry-global-spacing-dimensions-600-552f3071)",
                650: "var(--foundry-global-spacing-dimensions-650-61f68482)",
                700: "var(--foundry-global-spacing-dimensions-700-523e51c1)",
                750: "var(--foundry-global-spacing-dimensions-750-8a3f1cbf)",
                800: "var(--foundry-global-spacing-dimensions-800-bbdfa298)",
                900: "var(--foundry-global-spacing-dimensions-900-efcdb6bf)",
                950: "var(--foundry-global-spacing-dimensions-950-cc7b4e5e)",
                1e3: "var(--foundry-global-spacing-dimensions-1000-7e8c9b30)",
                1100: "var(--foundry-global-spacing-dimensions-1100-aca957c8)",
                1150: "var(--foundry-global-spacing-dimensions-1150-f8665e69)",
                1200: "var(--foundry-global-spacing-dimensions-1200-71972197)",
                1400: "var(--foundry-global-spacing-dimensions-1400-8f4cc278)",
                1600: "var(--foundry-global-spacing-dimensions-1600-b5e74cd0)",
                1700: "var(--foundry-global-spacing-dimensions-1700-b22e9e34)",
                1800: "var(--foundry-global-spacing-dimensions-1800-94e4f433)",
                2e3: "var(--foundry-global-spacing-dimensions-2000-d510a4b4)",
                2200: "var(--foundry-global-spacing-dimensions-2200-93c325ca)",
                2350: "var(--foundry-global-spacing-dimensions-2350-3bd02711)",
                2400: "var(--foundry-global-spacing-dimensions-2400-8d3906cf)",
                2500: "var(--foundry-global-spacing-dimensions-2500-4ab359ad)",
                2750: "var(--foundry-global-spacing-dimensions-2750-165b8e80)",
                3e3: "var(--foundry-global-spacing-dimensions-3000-27404208)",
                3150: "var(--foundry-global-spacing-dimensions-3150-c73af8bd)",
                3350: "var(--foundry-global-spacing-dimensions-3350-d07d3335)",
                3500: "var(--foundry-global-spacing-dimensions-3500-832dd3e8)",
                3750: "var(--foundry-global-spacing-dimensions-3750-18293754)",
                4e3: "var(--foundry-global-spacing-dimensions-4000-981888ae)",
                4125: "var(--foundry-global-spacing-dimensions-4125-711bd372)",
                4250: "var(--foundry-global-spacing-dimensions-4250-11e9d696)",
                4500: "var(--foundry-global-spacing-dimensions-4500-2f90e66f)",
                4750: "var(--foundry-global-spacing-dimensions-4750-1ff43e79)",
                5e3: "var(--foundry-global-spacing-dimensions-5000-7c37a31a)",
                5250: "var(--foundry-global-spacing-dimensions-5250-eed14f39)",
                5500: "var(--foundry-global-spacing-dimensions-5500-1e6d6f23)",
                5750: "var(--foundry-global-spacing-dimensions-5750-f63e358c)",
                6e3: "var(--foundry-global-spacing-dimensions-6000-25c8873a)",
                6250: "var(--foundry-global-spacing-dimensions-6250-aabe7f2f)"
              }
            },
            font: {
              family: {
                arial: "var(--foundry-global-font-family-arial-29a7d878)",
                helveticaNowDisplay: "var(--foundry-global-font-family-helvetica-now-display-15e86e06)",
                helveticaNowText: "var(--foundry-global-font-family-helvetica-now-text-2f039cca)",
                consolas: "var(--foundry-global-font-family-consolas-b260a4d8)"
              },
              weight: {
                400: "var(--foundry-global-font-weight-400-c543d620)",
                700: "var(--foundry-global-font-weight-700-4d05ca0a)"
              },
              size: {
                125: "var(--foundry-global-font-size-125-7465ed8a)",
                150: "var(--foundry-global-font-size-150-198f06c7)",
                175: "var(--foundry-global-font-size-175-7c044718)",
                200: "var(--foundry-global-font-size-200-9b30a1c2)",
                225: "var(--foundry-global-font-size-225-6b268615)",
                250: "var(--foundry-global-font-size-250-7c909c36)",
                300: "var(--foundry-global-font-size-300-ed2e8eb5)",
                400: "var(--foundry-global-font-size-400-310f384e)",
                500: "var(--foundry-global-font-size-500-ae4c1498)",
                600: "var(--foundry-global-font-size-600-f98b9cf9)",
                700: "var(--foundry-global-font-size-700-e55fff7d)",
                800: "var(--foundry-global-font-size-800-cbeeb437)",
                900: "var(--foundry-global-font-size-900-195dff23)",
                1e3: "var(--foundry-global-font-size-1000-de0d9aba)",
                1100: "var(--foundry-global-font-size-1100-a7f67440)"
              },
              letterSpacing: {
                0: "var(--foundry-global-font-letter-spacing-0-11d3b242)",
                25: "var(--foundry-global-font-letter-spacing-25-e01b7d49)",
                100: "var(--foundry-global-font-letter-spacing-100-823e8792)",
                200: "var(--foundry-global-font-letter-spacing-200-3d4cc27a)",
                250: "var(--foundry-global-font-letter-spacing-250-c0a207ff)",
                neg250: "var(--foundry-global-font-letter-spacing-neg-250-6c4f28af)",
                neg150: "var(--foundry-global-font-letter-spacing-neg-150-d0c75081)",
                neg100: "var(--foundry-global-font-letter-spacing-neg-100-d1dce193)",
                neg75: "var(--foundry-global-font-letter-spacing-neg-75-247e228b)",
                neg50: "var(--foundry-global-font-letter-spacing-neg-50-2f64a6bc)"
              },
              lineHeight: {
                100: "var(--foundry-global-font-line-height-100-d7ba3e93)",
                110: "var(--foundry-global-font-line-height-110-f2a1d21c)",
                120: "var(--foundry-global-font-line-height-120-114ddbcd)",
                130: "var(--foundry-global-font-line-height-130-1468e63f)",
                150: "var(--foundry-global-font-line-height-150-dc282d1f)"
              },
              spacing: {
                400: "var(--foundry-global-font-spacing-400-d05cce10)"
              }
            },
            _platformScale: "var(--foundry-platform-scales-ratio-65afb887)"
          },
          alias: {
            color: {
              background: {
                twotone: {
                  success: "var(--foundry-alias-color-background-twotone-success-aee211b5)",
                  information: "var(--foundry-alias-color-background-twotone-information-433f71ca)",
                  warning: "var(--foundry-alias-color-background-twotone-warning-1b16c91e)",
                  danger: "var(--foundry-alias-color-background-twotone-danger-89bb8777)",
                  seafoam: "var(--foundry-alias-color-background-twotone-seafoam-bbb55e0c)"
                },
                bold: {
                  layer0: "var(--foundry-alias-color-background-bold-layer-0-f947e8a3)",
                  layer1: "var(--foundry-alias-color-background-bold-layer-1-a2bc128b)",
                  layer2: "var(--foundry-alias-color-background-bold-layer-2-eddb4873)",
                  layer3: "var(--foundry-alias-color-background-bold-layer-3-aaaf37c3)"
                },
                subtle: {
                  layer0: "var(--foundry-alias-color-background-subtle-layer-0-3f1d20b0)",
                  layer1: "var(--foundry-alias-color-background-subtle-layer-1-74c1dd2f)",
                  layer2: "var(--foundry-alias-color-background-subtle-layer-2-b67c0bd1)"
                },
                component: {
                  tooltip: "var(--foundry-alias-color-background-component-tooltip-791bcb22)"
                }
              },
              text: {
                standard: "var(--foundry-alias-color-text-standard-2d241861)",
                disabled: "var(--foundry-alias-color-text-disabled-6c1b5f99)",
                subdued: "var(--foundry-alias-color-text-subdued-d5502516)",
                header: "var(--foundry-alias-color-text-header-c0780da4)",
                success: "var(--foundry-alias-color-text-success-5fcd04d6)",
                information: "var(--foundry-alias-color-text-information-5657d70d)",
                warning: "var(--foundry-alias-color-text-warning-c0b6f339)",
                danger: "var(--foundry-alias-color-text-danger-bcdfc5ff)",
                seafoam: "var(--foundry-alias-color-text-seafoam-62ff1b40)"
              },
              icon: {
                standard: "var(--foundry-alias-color-icon-standard-3eef4ce2)",
                disabled: "var(--foundry-alias-color-icon-disabled-34e2f46b)",
                illustration: "var(--foundry-alias-color-icon-illustration-9b2d1c8c)",
                subdued: "var(--foundry-alias-color-icon-subdued-a7a37139)",
                subduedLowestContrast: "var(--foundry-alias-color-icon-subdued-lowest-contrast-6e35947c)",
                information: "var(--foundry-alias-color-icon-information-139f1e42)",
                informationLowerContrast: "var(--foundry-alias-color-icon-information-lower-contrast-bf7ca27d)",
                informationHigherContrast: "var(--foundry-alias-color-icon-information-higher-contrast-1dc79bef)",
                informationLowestContrast: "var(--foundry-alias-color-icon-information-lowest-contrast-c97926f1)",
                informationHighestContrast: "var(--foundry-alias-color-icon-information-highest-contrast-5a450ba5)",
                success: "var(--foundry-alias-color-icon-success-e23133ed)",
                successLowerContrast: "var(--foundry-alias-color-icon-success-lower-contrast-a88e4244)",
                successHigherContrast: "var(--foundry-alias-color-icon-success-higher-contrast-574d0db3)",
                successLowestContrast: "var(--foundry-alias-color-icon-success-lowest-contrast-bbecce8c)",
                successHighestContrast: "var(--foundry-alias-color-icon-success-highest-contrast-1add093c)",
                warning: "var(--foundry-alias-color-icon-warning-72f96436)",
                warningLowerContrast: "var(--foundry-alias-color-icon-warning-lower-contrast-b6e0d50b)",
                warningHigherContrast: "var(--foundry-alias-color-icon-warning-higher-contrast-0bba028d)",
                warningLowestContrast: "var(--foundry-alias-color-icon-warning-lowest-contrast-c396ad20)",
                warningHighestContrast: "var(--foundry-alias-color-icon-warning-highest-contrast-78003698)",
                danger: "var(--foundry-alias-color-icon-danger-615a4836)",
                dangerLowerContrast: "var(--foundry-alias-color-icon-danger-lower-contrast-92eb2f13)",
                dangerHigherContrast: "var(--foundry-alias-color-icon-danger-higher-contrast-c78869be)",
                dangerLowestContrast: "var(--foundry-alias-color-icon-danger-lowest-contrast-af0106b8)",
                dangerHighestContrast: "var(--foundry-alias-color-icon-danger-highest-contrast-ef621d13)",
                seafoam: "var(--foundry-alias-color-icon-seafoam-7c088ef5)",
                seafoamLowerContrast: "var(--foundry-alias-color-icon-seafoam-lower-contrast-ec6e11bf)",
                seafoamHigherContrast: "var(--foundry-alias-color-icon-seafoam-higher-contrast-7245aa5c)",
                seafoamLowestContrast: "var(--foundry-alias-color-icon-seafoam-lowest-contrast-64031f29)",
                seafoamHighestContrast: "var(--foundry-alias-color-icon-seafoam-highest-contrast-4a2ef321)"
              },
              border: {
                decorative: "var(--foundry-alias-color-border-decorative-678f338a)",
                decorativeLowestContrast: "var(--foundry-alias-color-border-decorative-lowest-contrast-f8bbcfca)",
                field: "var(--foundry-alias-color-border-field-d535e421)",
                control: "var(--foundry-alias-color-border-control-192e0629)",
                information: "var(--foundry-alias-color-border-information-b430db7d)",
                informationLowestContrast: "var(--foundry-alias-color-border-information-lowest-contrast-9d4cedd9)",
                informationHighestContrast: "var(--foundry-alias-color-border-information-highest-contrast-d8396f29)",
                success: "var(--foundry-alias-color-border-success-d9400b20)",
                successLowestContrast: "var(--foundry-alias-color-border-success-lowest-contrast-e656d81a)",
                successHighestContrast: "var(--foundry-alias-color-border-success-highest-contrast-4e576195)",
                warning: "var(--foundry-alias-color-border-warning-83f5d462)",
                warningLowestContrast: "var(--foundry-alias-color-border-warning-lowest-contrast-fd52fff8)",
                warningHighestContrast: "var(--foundry-alias-color-border-warning-highest-contrast-6f1f8d51)",
                danger: "var(--foundry-alias-color-border-danger-c58a5d4f)",
                dangerLowestContrast: "var(--foundry-alias-color-border-danger-lowest-contrast-e645825b)",
                dangerHighestContrast: "var(--foundry-alias-color-border-danger-highest-contrast-783d81da)",
                seafoam: "var(--foundry-alias-color-border-seafoam-152722dd)",
                seafoamLowestContrast: "var(--foundry-alias-color-border-seafoam-lowest-contrast-83343f40)",
                seafoamHighestContrast: "var(--foundry-alias-color-border-seafoam-highest-contrast-e1935bc9)",
                disabled: "var(--foundry-alias-color-border-disabled-cacdfb33)",
                focus: "var(--foundry-alias-color-border-focus-e58b07c7)",
                shadow: "var(--foundry-alias-color-border-shadow-9f37e9b9)"
              },
              decorative: {
                information: "var(--foundry-alias-color-decorative-information-6d17b386)",
                informationLowestContrast: "var(--foundry-alias-color-decorative-information-lowest-contrast-a34024fd)",
                informationHighestContrast: "var(--foundry-alias-color-decorative-information-highest-contrast-68ba8e34)",
                success: "var(--foundry-alias-color-decorative-success-e509717f)",
                successLowestContrast: "var(--foundry-alias-color-decorative-success-lowest-contrast-9a2a33f9)",
                successHighestContrast: "var(--foundry-alias-color-decorative-success-highest-contrast-1fe42830)",
                warning: "var(--foundry-alias-color-decorative-warning-5a28cd24)",
                warningLowestContrast: "var(--foundry-alias-color-decorative-warning-lowest-contrast-3c247b72)",
                warningHighestContrast: "var(--foundry-alias-color-decorative-warning-highest-contrast-a50141af)",
                danger: "var(--foundry-alias-color-decorative-danger-e7f85ac4)",
                dangerLowestContrast: "var(--foundry-alias-color-decorative-danger-lowest-contrast-7692d49b)",
                dangerHighestContrast: "var(--foundry-alias-color-decorative-danger-highest-contrast-ace7b335)",
                seafoam: "var(--foundry-alias-color-decorative-seafoam-9f1d83a7)",
                seafoamLowestContrast: "var(--foundry-alias-color-decorative-seafoam-lowest-contrast-7bfe0e03)",
                seafoamHighestContrast: "var(--foundry-alias-color-decorative-seafoam-highest-contrast-194ae5a1)"
              },
              brand: {
                bully: {
                  blue: "var(--foundry-alias-color-brand-bully-blue-09f992d6)",
                  yellow: "var(--foundry-alias-color-brand-bully-yellow-6124e706)"
                },
                rdr: {
                  red: "var(--foundry-alias-color-brand-rdr-red-d730e332)"
                },
                rockstar: {
                  gold: "var(--foundry-alias-color-brand-rockstar-gold-28436c1a)"
                }
              }
            },
            font: {
              family: {
                heading: {
                  primary: "var(--foundry-alias-font-family-heading-primary-fab3091b)",
                  fallback: "var(--foundry-alias-font-family-heading-fallback-197c505b)"
                },
                body: {
                  primary: "var(--foundry-alias-font-family-body-primary-a0f2e156)",
                  fallback: "var(--foundry-alias-font-family-body-fallback-aa2c93c5)"
                },
                code: {
                  primary: "var(--foundry-alias-font-family-code-primary-0731b8b8)",
                  fallback: "var(--foundry-alias-font-family-code-fallback-65a5a9e6)"
                }
              },
              letterSpacing: {
                heading: {
                  primary: "var(--foundry-alias-font-letter-spacing-heading-primary-4052fb4d)",
                  fallback: "var(--foundry-alias-font-letter-spacing-heading-fallback-0c565619)"
                },
                body: {
                  primary: "var(--foundry-alias-font-letter-spacing-body-primary-36e0f114)",
                  fallback: "var(--foundry-alias-font-letter-spacing-body-fallback-1bae4182)"
                },
                label: {
                  primary: "var(--foundry-alias-font-letter-spacing-label-primary-ab7f3c8d)",
                  fallback: "var(--foundry-alias-font-letter-spacing-label-fallback-1226b09e)"
                }
              },
              weight: {
                regular: "var(--foundry-alias-font-weight-regular-c2af3245)",
                bold: "var(--foundry-alias-font-weight-bold-751d319e)"
              },
              spacing: {
                paragraph: "var(--foundry-alias-font-spacing-paragraph-cdd6040b)"
              },
              size: {
                heading: {
                  display: "var(--foundry-alias-font-size-heading-display-a2892c71)",
                  "01": "var(--foundry-alias-font-size-heading-01-1e8a0727)",
                  "02": "var(--foundry-alias-font-size-heading-02-0fd2c0d9)",
                  "03": "var(--foundry-alias-font-size-heading-03-9a73c535)",
                  "04": "var(--foundry-alias-font-size-heading-04-1fdd08c0)",
                  "05": "var(--foundry-alias-font-size-heading-05-beb13840)",
                  "06": "var(--foundry-alias-font-size-heading-06-40a06748)"
                },
                body: {
                  bodyLg: "var(--foundry-alias-font-size-body-body-lg-bec4de18)",
                  bodyMd: "var(--foundry-alias-font-size-body-body-md-caf3b782)",
                  bodySm: "var(--foundry-alias-font-size-body-body-sm-2a8e6da3)",
                  bodyXs: "var(--foundry-alias-font-size-body-body-xs-cf241758)",
                  bodyXxs: "var(--foundry-alias-font-size-body-body-xxs-828e0ccb)",
                  code: "var(--foundry-alias-font-size-body-code-17a5a27f)"
                }
              },
              lineHeight: {
                heading: "var(--foundry-alias-font-line-height-heading-5379287f)",
                body: "var(--foundry-alias-font-line-height-body-3e320cc8)"
              }
            },
            grid: {
              columns: "var(--foundry_nu8bkp5)",
              margin: "var(--foundry_nu8bkp6)",
              gutter: "var(--foundry_nu8bkp7)",
              sectionGap: "var(--foundry_nu8bkp8)",
              sectionGapHalf: "var(--foundry_nu8bkp9)",
              maxWidth: "var(--foundry_nu8bkpa)"
            }
          }
        });
      r(59236);
      const s = e => {
        const a = e.match(/^var\((.*)\)$/);
        return a ? a[1] : e
      }
    },
    21423(e, a, r) {
      function o(e) {
        var a = function(e, a) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, a);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof a ? a : String(a)
      }

      function t(e, a) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          a && (o = o.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function n(e) {
        for (var a = 1; a < arguments.length; a++) {
          var r = null != arguments[a] ? arguments[a] : {};
          a % 2 ? t(Object(r), !0).forEach(function(a) {
            var t, n, l;
            t = e, n = a, l = r[a], (n = o(n)) in t ? Object.defineProperty(t, n, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : t[n] = l
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach(function(a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a))
          })
        }
        return e
      }

      function l(e, a) {
        var r = {};
        for (var o in e) r[o] = a(e[o], o);
        return r
      }
      r.d(a, {
        no: () => c
      });
      var s = (e, a, r) => {
          for (var o of Object.keys(e)) {
            var t;
            if (e[o] !== (null !== (t = a[o]) && void 0 !== t ? t : r[o])) return !1
          }
          return !0
        },
        d = e => {
          var a = a => {
            var r = e.defaultClassName,
              o = n(n({}, e.defaultVariants), a);
            for (var t in o) {
              var l, d = null !== (l = o[t]) && void 0 !== l ? l : e.defaultVariants[t];
              if (null != d) {
                var c = d;
                "boolean" == typeof c && (c = !0 === c ? "true" : "false");
                var i = e.variantClassNames[t][c];
                i && (r += " " + i)
              }
            }
            for (var [f, u] of e.compoundVariants) s(f, o, e.defaultVariants) && (r += " " + u);
            return r
          };
          return a.variants = () => Object.keys(e.variantClassNames), a.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return l(e.variantClassNames, e => l(e, e => e.split(" ")[0]))
            }
          }, a
        },
        c = {
          enabled: {
            background: "var(--foundry_1qqcnua0)",
            border: "var(--foundry_1qqcnua1)",
            text: "var(--foundry_1qqcnua2)",
            outline: "var(--foundry_1qqcnua3)"
          },
          hover: {
            background: "var(--foundry_1qqcnua4)",
            border: "var(--foundry_1qqcnua5)",
            text: "var(--foundry_1qqcnua6)",
            outline: "var(--foundry_1qqcnua7)"
          },
          focus: {
            background: "var(--foundry_1qqcnua8)",
            border: "var(--foundry_1qqcnua9)",
            text: "var(--foundry_1qqcnuaa)",
            outline: "var(--foundry_1qqcnuab)"
          },
          pressed: {
            background: "var(--foundry_1qqcnuac)",
            border: "var(--foundry_1qqcnuad)",
            text: "var(--foundry_1qqcnuae)",
            outline: "var(--foundry_1qqcnuaf)"
          },
          disabled: {
            background: "var(--foundry_1qqcnuag)",
            border: "var(--foundry_1qqcnuah)",
            text: "var(--foundry_1qqcnuai)",
            outline: "var(--foundry_1qqcnuaj)"
          },
          loading: {
            background: "var(--foundry_1qqcnuak)",
            border: "var(--foundry_1qqcnual)",
            text: "var(--foundry_1qqcnuam)",
            outline: "var(--foundry_1qqcnuan)"
          }
        };
      d({
        defaultClassName: "foundry_1qqcnuao",
        variantClassNames: {
          appearance: {
            primary: "foundry_1qqcnuap",
            secondary: "foundry_1qqcnuaq",
            tertiary: "foundry_1qqcnuar",
            ghost: "foundry_1qqcnuas",
            information: "foundry_1qqcnuat",
            danger: "foundry_1qqcnuau",
            accent: "foundry_1qqcnuav",
            link: "foundry_1qqcnuaw"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), d({
        defaultClassName: "foundry_tdsdcdb foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdd",
            MD: "foundry_tdsdcde",
            SM: "foundry_tdsdcdf",
            XS: "foundry_tdsdcdg",
            XXS: "foundry_tdsdcdh"
          },
          appearance: {
            default: "foundry_tdsdcdi",
            bold: "foundry_tdsdcdj",
            hyperlink: "foundry_tdsdcdk"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), d({
        defaultClassName: "foundry_tdsdcdu foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdw",
            bold: "foundry_tdsdcdx"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), d({
        defaultClassName: "foundry_tdsdcd2 foundry_tdsdcd0",
        variantClassNames: {
          level: {
            1: "foundry_tdsdcd4",
            2: "foundry_tdsdcd5",
            3: "foundry_tdsdcd6",
            4: "foundry_tdsdcd7",
            5: "foundry_tdsdcd8",
            6: "foundry_tdsdcd9",
            7: "foundry_tdsdcda"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), d({
        defaultClassName: "foundry_tdsdcdl foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdn",
            MD: "foundry_tdsdcdo",
            SM: "foundry_tdsdcdp",
            XS: "foundry_tdsdcdq",
            XXS: "foundry_tdsdcdr"
          },
          appearance: {
            default: "foundry_tdsdcds",
            bold: "foundry_tdsdcdt"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), r(46260)
    },
    45457(e, a, r) {
      r.d(a, {
        X: () => o
      });
      const o = "undefined" == typeof window
    },
    31821(e, a, r) {
      r.d(a, {
        sL: () => w,
        UP: () => s,
        ic: () => i,
        iQ: () => u,
        Ub: () => n,
        jt: () => d,
        ZC: () => l,
        rl: () => b
      });
      var o = r(45457),
        t = r(4637);

      function n(e, {
        defaultValue: a = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => o.X || !window.matchMedia ? a : window.matchMedia(e).matches,
          [l, s] = (0, t.useState)(() => r ? n(e) : a);

        function d() {
          s(n(e))
        }
        return (0, t.useEffect)(() => {
          const a = window.matchMedia?.(e);
          return d(), a?.addListener ? a?.addListener(d) : a?.addEventListener("change", d), () => {
            a?.removeListener ? a?.removeListener(d) : a?.removeEventListener("change", d)
          }
        }, [e]), l
      }

      function l(e) {
        const a = (0, t.useRef)({
            value: e,
            prev: void 0
          }),
          r = a.current.value;
        return e !== r && (a.current = {
          value: e,
          prev: r
        }), a.current.prev
      }

      function s(...e) {
        const a = (0, t.useRef)(null);
        return a.current || (a.current = a => {
          e.forEach(e => {
            "function" == typeof e ? e(a) : null != e && (e.current = a)
          })
        }), a.current
      }
      const d = () => n("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function c(e) {
        const a = (0, t.useRef)(e);
        return (0, t.useEffect)(() => {
          a.current = e
        }), (0, t.useMemo)(() => (...e) => a.current?.(...e), [])
      }

      function i({
        prop: e,
        defaultProp: a,
        onChange: r = () => {}
      }) {
        const [o, n] = function({
          defaultProp: e,
          onChange: a
        }) {
          const r = (0, t.useState)(e),
            [o] = r,
            n = (0, t.useRef)(o),
            l = c(a);
          return (0, t.useEffect)(() => {
            n.current !== o && (l(o), n.current = o)
          }, [o, n, l]), r
        }({
          defaultProp: a,
          onChange: r
        }), l = void 0 !== e, s = l ? e : o, d = c(r), i = (0, t.useCallback)(a => {
          if (l) {
            const r = "function" == typeof a ? a(e) : a;
            r !== e && d(r)
          } else n(a)
        }, [l, e, n, d]);
        return [s, i]
      }

      function f(e, a, r, o) {
        const n = (0, t.useRef)(a);
        (0, t.useEffect)(() => {
          n.current = a
        }, [a]), (0, t.useEffect)(() => {
          const a = r?.current ?? window;
          if (!a || !a.addEventListener) return;
          const t = e => {
            n.current(e)
          };
          return a.addEventListener(e, t, o), () => {
            a.removeEventListener(e, t, o)
          }
        }, [e, r?.current, o])
      }
      const u = ({
        ref: e,
        onChange: a,
        onFocusIn: r,
        onFocusOut: o,
        enabled: n = !0
      }) => {
        const [l, s] = (0, t.useState)(!1);
        return f("focusin", e => {
          s(!0), r?.(e), a?.(!0, e)
        }, e), f("focusout", e => {
          s(!1), o?.(e), a?.(!1, e)
        }, e), {
          isFocused: !!n && l
        }
      };

      function b(e = !0) {
        const a = n("screen and (pointer: coarse) and (hover: none)");
        return !!e && a
      }
      var g = r(42069),
        y = r(37013),
        v = r(38140),
        p = r(13258),
        m = r(89518),
        h = r(51423);
      const w = ({
        inert: e,
        className: a,
        onClick: r,
        isLoading: o,
        ...t
      }, n) => {
        const {
          events: l,
          others: s
        } = (0, m.b)(t, {
          onPress: !1
        }), {
          buttonProps: d,
          isPressed: c
        } = function(e, a) {
          let r, {
            elementType: o = "button",
            isDisabled: t,
            onPress: n,
            onPressStart: l,
            onPressEnd: s,
            onPressUp: d,
            onPressChange: c,
            preventFocusOnPress: i,
            allowFocusWhenDisabled: f,
            onClick: u,
            href: b,
            target: m,
            rel: h,
            type: w = "button"
          } = e;
          r = "button" === o ? {
            type: w,
            disabled: t,
            form: e.form,
            formAction: e.formAction,
            formEncType: e.formEncType,
            formMethod: e.formMethod,
            formNoValidate: e.formNoValidate,
            formTarget: e.formTarget,
            name: e.name,
            value: e.value
          } : {
            role: "button",
            href: "a" !== o || t ? void 0 : b,
            target: "a" === o ? m : void 0,
            type: "input" === o ? w : void 0,
            disabled: "input" === o ? t : void 0,
            "aria-disabled": t && "input" !== o ? t : void 0,
            rel: "a" === o ? h : void 0
          };
          let {
            pressProps: E,
            isPressed: k
          } = (0, p.d)({
            onPressStart: l,
            onPressEnd: s,
            onPressChange: c,
            onPress: n,
            onPressUp: d,
            onClick: u,
            isDisabled: t,
            preventFocusOnPress: i,
            ref: a
          }), {
            focusableProps: C
          } = (0, v.Wc)(e, a);
          f && (C.tabIndex = t ? -1 : C.tabIndex);
          let P = (0, y.v)(C, E, (0, g.$)(e, {
            labelable: !0
          }));
          return {
            isPressed: k,
            buttonProps: (0, y.v)(r, P, {
              "aria-haspopup": e["aria-haspopup"],
              "aria-expanded": e["aria-expanded"],
              "aria-controls": e["aria-controls"],
              "aria-pressed": e["aria-pressed"],
              "aria-current": e["aria-current"],
              "aria-disabled": e["aria-disabled"]
            })
          }
        }({
          ...s,
          elementType: "button",
          onPress: e => {
            o || (s.onPress?.(e) ?? r?.({
              ...e,
              currentTarget: e.target
            }))
          }
        }, n), i = {
          ...d,
          role: "button",
          "data-pressed": !e && c,
          "data-loading": o,
          "aria-busy": o
        };
        return {
          isPressed: !e && c,
          buttonProps: (0, h.v)(e ? {} : i, {
            ...l,
            className: a
          })
        }
      }
    },
    84173(e, a, r) {
      r.d(a, {
        DX: () => o.Slot,
        xV: () => o.Slottable,
        s6: () => s
      });
      var o = r(27937),
        t = r(39793),
        n = r(4637),
        l = r(19563);
      const s = ({
        enabled: e = !0,
        ...a
      }) => {
        const r = e ? l.VisuallyHidden : n.Fragment;
        return (0, t.jsx)(r, {
          ...a
        })
      }
    },
    89518(e, a, r) {
      r.d(a, {
        b: () => n
      });
      const o = /^(on.*)$/,
        t = /^(onPress.*)$/;

      function n(e, {
        onPress: a
      } = {
        onPress: !0
      }) {
        const r = {},
          n = {};
        for (const l in e) Object.prototype.hasOwnProperty.call(e, l) && (t.test(l) ? a ? r[l] = e[l] : n[l] = e[l] : o.test(l) ? r[l] = e[l] : n[l] = e[l]);
        return {
          events: r,
          others: n
        }
      }
    },
    51423(e, a, r) {
      r.d(a, {
        v: () => s
      });
      var o = r(81270);
      const t = new Map;

      function n(e, a) {
        if (e === a) return e;
        const r = t.get(e);
        if (r) return r.forEach(e => e(a)), a;
        const o = t.get(a);
        return o ? (o.forEach(a => a(e)), e) : a
      }

      function l(...e) {
        return (...a) => {
          for (const r of e) "function" == typeof r && r(...a)
        }
      }

      function s(...e) {
        const a = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const t = e[r];
          for (const e in t) {
            const r = a[e],
              s = t[e];
            "function" == typeof r && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? a[e] = l(r, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof s ? "id" === e && r && s ? a.id = n(r, s) : a[e] = void 0 !== s ? s : r : a[e] = (0, o.clsx)(r, s)
          }
        }
        return a
      }
    },
    99386(e, a, r) {
      r.d(a, {
        Cl: () => P,
        ME: () => C
      });
      var o = r(14961),
        t = r(28562),
        n = r(14142),
        l = r(89896),
        s = r(74402),
        d = r(2577);
      r(4637);
      let c = null,
        i = "keyboard";
      const f = new Set;
      let u = new Map,
        b = !1,
        g = !1;

      function y(e, a) {
        for (let r of f) r(e, a)
      }

      function v(e) {
        b = !0, !d.Fe.isOpening && function(e) {
          return !(e.metaKey || !(0, l.cX)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
        }(e) && (c = "keyboard", i = "keyboard", y("keyboard", e))
      }

      function p(e) {
        c = "pointer", i = "pointerType" in e ? e.pointerType : "mouse", "mousedown" !== e.type && "pointerdown" !== e.type || (b = !0, y("pointer", e))
      }

      function m(e) {
        !d.Fe.isOpening && (0, s.Y)(e) && (b = !0, c = "virtual", i = "virtual")
      }

      function h(e) {
        let a = (0, t.mD)((0, o.wt)(e)),
          r = (0, t.TW)((0, o.wt)(e));
        (0, o.wt)(e) !== a && (0, o.wt)(e) !== r && !n.lR && e.isTrusted && (b || g || (c = "virtual", i = "virtual", y("virtual", e)), b = !1, g = !1)
      }

      function w() {
        n.lR || (b = !1, g = !0)
      }

      function E(e) {
        if ("undefined" == typeof window || "undefined" == typeof document) return;
        const a = (0, t.mD)(e),
          r = (0, t.TW)(e);
        if (u.get(a)) return;
        let o = a.HTMLElement.prototype.focus;
        a.HTMLElement.prototype.focus = function() {
          b = !0, o.apply(this, arguments)
        }, r.addEventListener("keydown", v, !0), r.addEventListener("keyup", v, !0), r.addEventListener("click", m, !0), a.addEventListener("focus", h, !0), a.addEventListener("blur", w, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", p, !0), r.addEventListener("pointermove", p, !0), r.addEventListener("pointerup", p, !0)), a.addEventListener("beforeunload", () => {
          k(e)
        }, {
          once: !0
        }), u.set(a, {
          focus: o
        })
      }
      const k = (e, a) => {
        const r = (0, t.mD)(e),
          o = (0, t.TW)(e);
        a && o.removeEventListener("DOMContentLoaded", a), u.has(r) && (r.HTMLElement.prototype.focus = u.get(r).focus, o.removeEventListener("keydown", v, !0), o.removeEventListener("keyup", v, !0), o.removeEventListener("click", m, !0), r.removeEventListener("focus", h, !0), r.removeEventListener("blur", w, !1), "undefined" != typeof PointerEvent && (o.removeEventListener("pointerdown", p, !0), o.removeEventListener("pointermove", p, !0), o.removeEventListener("pointerup", p, !0)), u.delete(r))
      };

      function C() {
        return c
      }

      function P(e) {
        c = e, i = "pointer" === e ? "mouse" : e, y(e, null)
      }
      "undefined" != typeof document && function(e) {
        const a = (0, t.TW)(e);
        let r;
        "loading" !== a.readyState ? E(e) : (r = () => {
          E(e)
        }, a.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"])
    },
    38140(e, a, r) {
      r.d(a, {
        Wc: () => g
      });
      var o = r(4978),
        t = r(14961),
        n = r(99386),
        l = r(28562),
        s = r(1519);
      var d = r(37013),
        c = r(14142),
        i = r(4637);

      function f(e) {
        if (!e) return;
        let a = !0;
        return r => {
          let o = {
            ...r,
            preventDefault() {
              r.preventDefault()
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              a = !0
            },
            continuePropagation() {
              a = !1
            },
            isPropagationStopped: () => a
          };
          e(o), a && r.stopPropagation()
        }
      }
      var u = r(76606);
      let b = i.createContext(null);

      function g(e, a) {
        let {
          focusProps: r
        } = function(e) {
          let {
            isDisabled: a,
            onFocus: r,
            onBlur: o,
            onFocusChange: n
          } = e;
          const s = (0, i.useCallback)(e => {
              if ((0, t.wt)(e) === e.currentTarget) return o && o(e), n && n(!1), !0
            }, [o, n]),
            d = (0, c.yB)(s),
            f = (0, i.useCallback)(e => {
              let a = (0, t.wt)(e);
              const o = (0, l.TW)(a),
                s = o ? (0, t.bq)(o) : (0, t.bq)();
              a === e.currentTarget && a === s && (r && r(e), n && n(!0), d(e))
            }, [n, r, d]);
          return {
            focusProps: {
              onFocus: !a && (r || n || o) ? f : void 0,
              onBlur: a || !o && !n ? void 0 : s
            }
          }
        }(e), {
          keyboardProps: g
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: f(e.onKeyDown),
              onKeyUp: f(e.onKeyUp)
            }
          }
        }(e), y = (0, d.v)(r, g), v = function(e) {
          let a = (0, i.useContext)(b) || {};
          (0, u.w)(a, e);
          let {
            ref: r,
            ...o
          } = a;
          return o
        }(a), p = e.isDisabled ? {} : v, m = (0, i.useRef)(e.autoFocus);
        (0, i.useEffect)(() => {
          m.current && a.current && function(e) {
            if (!e.isConnected) return;
            const a = (0, l.TW)(e);
            if ("virtual" === (0, n.ME)()) {
              let r = (0, t.bq)(a);
              (0, s.v)(() => {
                const n = (0, t.bq)(a);
                n !== r && n !== a.body || !e.isConnected || (0, o.e)(e)
              })
            } else(0, o.e)(e)
          }(a.current), m.current = !1
        }, [a]);
        let h = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (h = void 0), {
          focusableProps: (0, d.v)({
            ...y,
            tabIndex: h
          }, p)
        }
      }
    },
    13258(e, a, r) {
      r.d(a, {
        d: () => _
      });
      var o = r(43524),
        t = r(14142),
        n = r(28562),
        l = r(89896),
        s = r(1519);
      let d = "default",
        c = "",
        i = new WeakMap;

      function f(e) {
        if ((0, l.un)()) {
          if ("disabled" !== d) return;
          d = "restoring", setTimeout(() => {
            (0, s.v)(() => {
              if ("restoring" === d) {
                const a = (0, n.TW)(e);
                "none" === a.documentElement.style.webkitUserSelect && (a.documentElement.style.webkitUserSelect = c || ""), c = "", d = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && i.has(e)) {
          let a = i.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = a), "" === e.getAttribute("style") && e.removeAttribute("style"), i.delete(e)
        }
      }
      var u = r(4978),
        b = r(14961);

      function g(e) {
        let a = e?.defaultView;
        return a?.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0
      }
      let y = new WeakMap;
      var v = r(74402),
        p = r(37013),
        m = r(2577),
        h = r(4637);
      const w = h.createContext({
        register: () => {}
      });
      w.displayName = "PressResponderContext";
      var E = r(96187),
        k = r(87478),
        C = r(76606);
      r(84017);
      class P {
        #e;
        constructor(e, a, r, o) {
          this.#e = !0;
          let t = o?.target ?? r.currentTarget;
          const n = t?.getBoundingClientRect();
          let l, s, d = 0,
            c = null;
          null != r.clientX && null != r.clientY && (s = r.clientX, c = r.clientY), n && (null != s && null != c ? (l = s - n.left, d = c - n.top) : (l = n.width / 2, d = n.height / 2)), this.type = e, this.pointerType = a, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = l, this.y = d, this.key = r.key
        }
        continuePropagation() {
          this.#e = !1
        }
        get shouldStopPropagation() {
          return this.#e
        }
      }
      const T = Symbol("linkClicked"),
        S = "react-aria-pressable-style",
        L = "data-react-aria-pressable";

      function _(e) {
        let {
          onPress: a,
          onPressChange: r,
          onPressStart: s,
          onPressEnd: _,
          onPressUp: N,
          onClick: O,
          isDisabled: A,
          isPressed: H,
          preventFocusOnPress: K,
          shouldCancelOnPointerExit: R,
          allowTextSelectionOnPress: z,
          ref: I,
          ...F
        } = function(e) {
          let a = (0, h.useContext)(w);
          if (a) {
            let {
              register: r,
              ref: o,
              ...t
            } = a;
            e = (0, p.v)(t, e), r()
          }
          return (0, C.w)(a, e.ref), e
        }(e), [j, V] = (0, h.useState)(!1), W = (0, h.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null,
          disposables: []
        }), {
          addGlobalListener: U,
          removeAllGlobalListeners: X
        } = (0, k.A)(), B = (0, h.useCallback)((e, a) => {
          let o = W.current;
          if (A || o.didFirePressStart) return !1;
          let t = !0;
          if (o.isTriggeringEvent = !0, s) {
            let r = new P("pressstart", a, e);
            s(r), t = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, V(!0), t
        }, [A, s, r]), G = (0, h.useCallback)((e, o, t = !0) => {
          let n = W.current;
          if (!n.didFirePressStart) return !1;
          n.didFirePressStart = !1, n.isTriggeringEvent = !0;
          let l = !0;
          if (_) {
            let a = new P("pressend", o, e);
            _(a), l = a.shouldStopPropagation
          }
          if (r && r(!1), V(!1), a && t && !A) {
            let r = new P("press", o, e);
            a(r), l &&= r.shouldStopPropagation
          }
          return n.isTriggeringEvent = !1, l
        }, [A, _, r, a]), $ = (0, E.J)(G), Y = (0, h.useCallback)((e, a) => {
          let r = W.current;
          if (A) return !1;
          if (N) {
            r.isTriggeringEvent = !0;
            let o = new P("pressup", a, e);
            return N(o), r.isTriggeringEvent = !1, o.shouldStopPropagation
          }
          return !0
        }, [A, N]), J = (0, E.J)(Y), Z = (0, h.useCallback)(e => {
          let a = W.current;
          if (a.isPressed && a.target) {
            a.didFirePressStart && null != a.pointerType && G(q(a.target, e), a.pointerType, !1), a.isPressed = !1, a.isOverTarget = !1, a.activePointerId = null, a.pointerType = null, X(), z || f(a.target);
            for (let e of a.disposables) e();
            a.disposables = []
          }
        }, [z, X, G]), Q = (0, E.J)(Z), ee = (0, h.useCallback)(e => {
          R && Z(e)
        }, [R, Z]), ae = (0, h.useCallback)(e => {
          A || O?.(e)
        }, [A, O]), re = (0, h.useCallback)((e, a) => {
          if (!A && O) {
            let r = new MouseEvent("click", e);
            (0, t.o1)(r, a), O((0, t.eg)(r))
          }
        }, [A, O]), oe = (0, h.useMemo)(() => {
          let e = W.current,
            a = {
              onKeyDown(a) {
                if (x(a.nativeEvent, a.currentTarget) && (0, b.sD)(a.currentTarget, (0, b.wt)(a))) {
                  D((0, b.wt)(a), a.key) && a.preventDefault();
                  let t = !0;
                  e.isPressed || a.repeat || (e.target = a.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", t = B(a, "keyboard"));
                  let s = a.currentTarget,
                    d = a => {
                      x(a, s) && !a.repeat && (0, b.sD)(s, (0, b.wt)(a)) && e.target && J(q(e.target, a), "keyboard")
                    };
                  U((0, n.TW)(a.currentTarget), "keyup", (0, o.c)(d, r), !0), t && a.stopPropagation(), a.metaKey && (0, l.cX)() && e.metaKeyEvents?.set(a.key, a.nativeEvent)
                } else "Meta" === a.key && (e.metaKeyEvents = new Map)
              },
              onClick(a) {
                if ((!a || (0, b.sD)(a.currentTarget, (0, b.wt)(a))) && a && 0 === a.button && !e.isTriggeringEvent && !m.Fe.isOpening) {
                  let r = !0;
                  if (A && a.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !(0, v.Y)(a.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let o = e.pointerType || a.nativeEvent.pointerType || "virtual",
                        t = J(q(a.currentTarget, a), o),
                        n = $(q(a.currentTarget, a), o, !0);
                      r = t && n, e.isOverTarget = !1, ae(a), Q(a)
                    }
                  } else {
                    let e = B(a, "virtual"),
                      o = J(a, "virtual"),
                      t = $(a, "virtual");
                    ae(a), r = e && o && t
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && a.stopPropagation()
                }
              }
            },
            r = a => {
              if (e.isPressed && e.target && x(a, e.target)) {
                D((0, b.wt)(a), a.key) && a.preventDefault();
                let r = (0, b.wt)(a),
                  o = (0, b.sD)(e.target, r);
                $(q(e.target, a), "keyboard", o), o && re(a, e.target), X(), "Enter" !== a.key && M(e.target) && (0, b.sD)(e.target, r) && !a[T] && (a[T] = !0, (0, m.Fe)(e.target, a, !1)), e.isPressed = !1, e.metaKeyEvents?.delete(a.key)
              } else if ("Meta" === a.key && e.metaKeyEvents?.size) {
                let a = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of a.values()) e.target?.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            a.onPointerDown = a => {
              if (0 !== a.button || !(0, b.sD)(a.currentTarget, (0, b.wt)(a))) return;
              if ((0, v.P)(a.nativeEvent)) return void(e.pointerType = "virtual");
              e.pointerType = a.pointerType;
              let t = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = a.pointerId, e.target = a.currentTarget, z || function(e) {
                  if ((0, l.un)()) {
                    if ("default" === d) {
                      const a = (0, n.TW)(e);
                      c = a.documentElement.style.webkitUserSelect, a.documentElement.style.webkitUserSelect = "none"
                    }
                    d = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let a = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    i.set(e, e.style[a]), e.style[a] = "none"
                  }
                }(e.target), t = B(a, e.pointerType);
                let s = (0, b.wt)(a);
                "releasePointerCapture" in s && ("hasPointerCapture" in s ? s.hasPointerCapture(a.pointerId) && s.releasePointerCapture(a.pointerId) : s.releasePointerCapture(a.pointerId)), U((0, n.TW)(a.currentTarget), "pointerup", r, !1), U((0, n.TW)(a.currentTarget), "pointercancel", o, !1)
              }
              t && a.stopPropagation()
            }, a.onMouseDown = a => {
              if ((0, b.sD)(a.currentTarget, (0, b.wt)(a)) && 0 === a.button) {
                if (K) {
                  let r = (0, t.LE)(a.target);
                  r && e.disposables.push(r)
                }
                a.stopPropagation()
              }
            }, a.onPointerUp = a => {
              (0, b.sD)(a.currentTarget, (0, b.wt)(a)) && "virtual" !== e.pointerType && (0 !== a.button || e.isPressed || J(a, e.pointerType || a.pointerType))
            }, a.onPointerEnter = a => {
              a.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, B(q(e.target, a), e.pointerType))
            }, a.onPointerLeave = a => {
              a.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, $(q(e.target, a), e.pointerType, !1), ee(a))
            };
            let r = a => {
                if (a.pointerId === e.activePointerId && e.isPressed && 0 === a.button && e.target) {
                  if ((0, b.sD)(e.target, (0, b.wt)(a)) && null != e.pointerType) {
                    let r = !1,
                      o = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? Q(a) : ((0, u.e)(e.target), e.target.click()))
                      }, 80);
                    U(a.currentTarget, "click", () => r = !0, !0), e.disposables.push(() => clearTimeout(o))
                  } else Q(a);
                  e.isOverTarget = !1
                }
              },
              o = e => {
                Q(e)
              };
            a.onDragStart = e => {
              (0, b.sD)(e.currentTarget, (0, b.wt)(e)) && Q(e)
            }
          }
          return a
        }, [U, A, K, X, z, ee, B, ae, re]);
        return (0, h.useEffect)(() => {
          if (!I) return;
          const e = (0, n.TW)(I.current);
          if (!e || !e.head || e.getElementById(S)) return;
          const a = e.createElement("style");
          a.id = S;
          let r = function(e) {
            let a = e ?? ("undefined" != typeof document ? document : void 0);
            if (!a) return g(a);
            if (y.has(a)) return y.get(a);
            let r = a.querySelector('meta[property="csp-nonce"]'),
              o = r && r instanceof(0, n.mD)(r).HTMLMetaElement && (r.nonce || r.content) || g(a) || void 0;
            return void 0 !== o && y.set(a, o), o
          }(e);
          r && (a.nonce = r), a.textContent = `\n@layer {\n  [${L}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(a)
        }, [I]), (0, h.useEffect)(() => {
          let e = W.current;
          return () => {
            z || f(e.target ?? void 0);
            for (let a of e.disposables) a();
            e.disposables = []
          }
        }, [z]), {
          isPressed: H || j,
          pressProps: (0, p.v)(F, oe, {
            [L]: !0
          })
        }
      }

      function M(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function x(e, a) {
        const {
          key: r,
          code: o
        } = e, t = a, l = t.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== o || t instanceof(0, n.mD)(t).HTMLInputElement && !O(t, r) || t instanceof(0, n.mD)(t).HTMLTextAreaElement || t.isContentEditable || ("link" === l || !l && M(t)) && "Enter" !== r)
      }

      function q(e, a) {
        let r = a.clientX,
          o = a.clientY;
        return {
          currentTarget: e,
          shiftKey: a.shiftKey,
          ctrlKey: a.ctrlKey,
          metaKey: a.metaKey,
          altKey: a.altKey,
          clientX: r,
          clientY: o,
          key: a.key
        }
      }

      function D(e, a) {
        return e instanceof HTMLInputElement ? !O(e, a) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : M(e)))
        }(e)
      }
      const N = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function O(e, a) {
        return "checkbox" === e.type || "radio" === e.type ? " " === a : N.has(e.type)
      }
    },
    14142(e, a, r) {
      r.d(a, {
        LE: () => b,
        eg: () => c,
        lR: () => u,
        o1: () => i,
        yB: () => f
      });
      var o = r(4978),
        t = r(14961),
        n = r(28562),
        l = r(1360),
        s = r(58907),
        d = r(4637);

      function c(e) {
        let a = e;
        return a.nativeEvent = e, a.isDefaultPrevented = () => a.defaultPrevented, a.isPropagationStopped = () => a.cancelBubble, a.persist = () => {}, a
      }

      function i(e, a) {
        Object.defineProperty(e, "target", {
          value: a
        }), Object.defineProperty(e, "currentTarget", {
          value: a
        })
      }

      function f(e) {
        let a = (0, d.useRef)({
          isFocused: !1,
          observer: null
        });
        return (0, s.N)(() => {
          const e = a.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }, []), (0, d.useCallback)(r => {
          let o = (0, t.wt)(r);
          if (o instanceof HTMLButtonElement || o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement || o instanceof HTMLSelectElement) {
            a.current.isFocused = !0;
            let r = o,
              n = o => {
                if (a.current.isFocused = !1, r.disabled) {
                  let a = c(o);
                  e?.(a)
                }
                a.current.observer && (a.current.observer.disconnect(), a.current.observer = null)
              };
            r.addEventListener("focusout", n, {
              once: !0
            }), a.current.observer = new MutationObserver(() => {
              if (a.current.isFocused && r.disabled) {
                a.current.observer?.disconnect();
                let e = r === (0, t.bq)() ? null : (0, t.bq)();
                r.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: e
                })), r.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: e
                }))
              }
            }), a.current.observer.observe(r, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }, [e])
      }
      let u = !1;

      function b(e) {
        for (; e && !(0, l.t)(e, {
            skipVisibilityCheck: !0
          });) e = e.parentElement;
        let a = (0, n.mD)(e),
          r = a.document.activeElement;
        if (!r || r === e) return;
        u = !0;
        let s = !1,
          d = e => {
            ((0, t.wt)(e) === r || s) && e.stopImmediatePropagation()
          },
          c = a => {
            ((0, t.wt)(a) === r || s) && (a.stopImmediatePropagation(), e || s || (s = !0, (0, o.e)(r), b()))
          },
          i = a => {
            ((0, t.wt)(a) === e || s) && a.stopImmediatePropagation()
          },
          f = a => {
            ((0, t.wt)(a) === e || s) && (a.stopImmediatePropagation(), s || (s = !0, (0, o.e)(r), b()))
          };
        a.addEventListener("blur", d, !0), a.addEventListener("focusout", c, !0), a.addEventListener("focusin", f, !0), a.addEventListener("focus", i, !0);
        let b = () => {
            cancelAnimationFrame(g), a.removeEventListener("blur", d, !0), a.removeEventListener("focusout", c, !0), a.removeEventListener("focusin", f, !0), a.removeEventListener("focus", i, !0), u = !1, s = !1
          },
          g = requestAnimationFrame(b);
        return b
      }
    },
    6859(e, a, r) {
      r.d(a, {
        Cc: () => d,
        wR: () => u
      });
      var o = r(4637);
      const t = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        n = o.createContext(t),
        l = o.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let s = new WeakMap;
      const d = "function" == typeof o.useId ? function(e) {
        let a = o.useId(),
          [r] = (0, o.useState)(u());
        return e || `${r?"react-aria":`react-aria${t.prefix}`}-${a}`
      } : function(e) {
        let a = (0, o.useContext)(n),
          r = function(e = !1) {
            let a = (0, o.useContext)(n),
              r = (0, o.useRef)(null);
            if (null === r.current && !e) {
              let e = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
              if (e) {
                let r = s.get(e);
                null == r ? s.set(e, {
                  id: a.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (a.current = r.id, s.delete(e))
              }
              r.current = ++a.current
            }
            return r.current
          }(!!e),
          t = `react-aria${a.prefix}`;
        return e || `${t}-${r}`
      };

      function c() {
        return !1
      }

      function i() {
        return !0
      }

      function f(e) {
        return () => {}
      }

      function u() {
        return "function" == typeof o.useSyncExternalStore ? o.useSyncExternalStore(f, c, i) : (0, o.useContext)(l)
      }
    },
    43524(e, a, r) {
      function o(...e) {
        return (...a) => {
          for (let r of e) "function" == typeof r && r(...a)
        }
      }
      r.d(a, {
        c: () => o
      })
    },
    28562(e, a, r) {
      r.d(a, {
        Ng: () => n,
        TW: () => o,
        mD: () => t
      });
      const o = e => e?.ownerDocument ?? document,
        t = e => e && "window" in e && e.window === e ? e : o(e).defaultView || window;

      function n(e) {
        return null !== (a = e) && "object" == typeof a && "nodeType" in a && "number" == typeof a.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var a
      }
    },
    42069(e, a, r) {
      r.d(a, {
        $: () => c
      });
      const o = new Set(["id"]),
        t = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        n = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        l = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        s = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        d = /^(data-.*)$/;

      function c(e, a = {}) {
        let {
          labelable: r,
          isLink: c,
          global: i,
          events: f = i,
          propNames: u
        } = a, b = {};
        for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && (o.has(a) || r && t.has(a) || c && n.has(a) || i && l.has(a) || f && (s.has(a) || a.endsWith("Capture") && s.has(a.slice(0, -7))) || u?.has(a) || d.test(a)) && (b[a] = e[a]);
        return b
      }
    },
    4978(e, a, r) {
      function o(e) {
        if (function() {
            if (null == t) {
              t = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return t = !0, !0
                  }
                })
              } catch {}
            }
            return t
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let a = function(e) {
            let a = e.parentNode,
              r = [],
              o = document.scrollingElement || document.documentElement;
            for (; a instanceof HTMLElement && a !== o;)(a.offsetHeight < a.scrollHeight || a.offsetWidth < a.scrollWidth) && r.push({
              element: a,
              scrollTop: a.scrollTop,
              scrollLeft: a.scrollLeft
            }), a = a.parentNode;
            return o instanceof HTMLElement && r.push({
              element: o,
              scrollTop: o.scrollTop,
              scrollLeft: o.scrollLeft
            }), r
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: a,
                  scrollTop: r,
                  scrollLeft: o
                }
                of e) a.scrollTop = r, a.scrollLeft = o
            }(a)
        }
      }
      r.d(a, {
        e: () => o
      });
      let t = null
    },
    1360(e, a, r) {
      r.d(a, {
        t: () => c,
        A: () => i
      });
      var o = r(28562);
      const t = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function n(e, a) {
        return t ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const a = (0, o.mD)(e);
          if (!(e instanceof a.HTMLElement || e instanceof a.SVGElement)) return !1;
          let {
            display: r,
            visibility: t
          } = e.style, n = "none" !== r && "hidden" !== t && "collapse" !== t;
          if (n) {
            const {
              getComputedStyle: a
            } = e.ownerDocument.defaultView;
            let {
              display: r,
              visibility: o
            } = a(e);
            n = "none" !== r && "hidden" !== o && "collapse" !== o
          }
          return n
        }(e) && function(e, a) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !a || "SUMMARY" === a.nodeName || e.hasAttribute("open"))
        }(e, a) && (!e.parentElement || n(e.parentElement, e))
      }
      const l = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        s = l.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      l.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const d = l.join(':not([hidden]):not([tabindex="-1"]),');

      function c(e, a) {
        return e.matches(s) && !f(e) && (a?.skipVisibilityCheck || n(e))
      }

      function i(e) {
        return e.matches(d) && n(e) && !f(e)
      }

      function f(e) {
        let a = e;
        for (; null != a;) {
          if (a instanceof a.ownerDocument.defaultView.HTMLElement && a.inert) return !0;
          a = a.parentElement
        }
        return !1
      }
    },
    74402(e, a, r) {
      r.d(a, {
        P: () => n,
        Y: () => t
      });
      var o = r(89896);

      function t(e) {
        return !("" !== e.pointerType || !e.isTrusted) || ((0, o.m0)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }

      function n(e) {
        return !(0, o.m0)() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
      }
    },
    37013(e, a, r) {
      r.d(a, {
        v: () => d
      });
      var o = r(43524),
        t = r(13087);

      function n(...e) {
        return 1 === e.length && e[0] ? e[0] : a => {
          let r = !1;
          const o = e.map(e => {
            const o = l(e, a);
            return r ||= "function" == typeof o, o
          });
          if (r) return () => {
            o.forEach((a, r) => {
              "function" == typeof a ? a() : l(e[r], null)
            })
          }
        }
      }

      function l(e, a) {
        if ("function" == typeof e) return e(a);
        null != e && (e.current = a)
      }
      var s = r(81270);

      function d(...e) {
        let a = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let l = e[r];
          for (let e in l) {
            let r = a[e],
              d = l[e];
            "function" == typeof r && "function" == typeof d && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? a[e] = (0, o.c)(r, d) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof d ? "id" === e && r && d ? a.id = (0, t.Tw)(r, d) : "ref" === e && r && d ? a.ref = n(r, d) : a[e] = void 0 !== d ? d : r : a[e] = (0, s.default)(r, d)
          }
        }
        return a
      }
    },
    2577(e, a, r) {
      r.d(a, {
        Fe: () => d,
        PJ: () => i,
        _h: () => c,
        rd: () => s
      });
      var o = r(4978),
        t = r(89896),
        n = r(4637);
      const l = (0, n.createContext)({
        isNative: !0,
        open: function(e, a) {
          ! function(e, a) {
            if (e instanceof HTMLAnchorElement) a(e);
            else if (e.hasAttribute("data-href")) {
              let r = document.createElement("a");
              r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), a(r), e.removeChild(r)
            }
          }(e, e => d(e, a))
        },
        useHref: e => e
      });

      function s() {
        return (0, n.useContext)(l)
      }

      function d(e, a, r = !0) {
        let {
          metaKey: n,
          ctrlKey: l,
          altKey: s,
          shiftKey: c
        } = a;
        (0, t.gm)() && window.event?.type?.startsWith("key") && "_blank" === e.target && ((0, t.cX)() ? n = !0 : l = !0);
        let i = (0, t.Tc)() && (0, t.cX)() && !(0, t.bh)() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: n,
          ctrlKey: l,
          altKey: s,
          shiftKey: c
        }) : new MouseEvent("click", {
          metaKey: n,
          ctrlKey: l,
          altKey: s,
          shiftKey: c,
          detail: 1,
          bubbles: !0,
          cancelable: !0
        });
        d.isOpening = r, (0, o.e)(e), e.dispatchEvent(i), d.isOpening = !1
      }

      function c(e) {
        const a = s().useHref(e?.href ?? "");
        return {
          href: e?.href ? a : void 0,
          target: e?.target,
          rel: e?.rel,
          download: e?.download,
          ping: e?.ping,
          referrerPolicy: e?.referrerPolicy
        }
      }

      function i(e, a, r, o) {
        !a.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && function(e, a) {
          let r = e.getAttribute("target");
          return !(r && "_self" !== r || e.origin !== location.origin || e.hasAttribute("download") || a.metaKey || a.ctrlKey || a.altKey || a.shiftKey)
        }(e.currentTarget, e) && r && (e.preventDefault(), a.open(e.currentTarget, e, r, o))
      }
      d.isOpening = !1
    },
    89896(e, a, r) {
      function o(e) {
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let a = window.navigator.userAgentData?.brands;
        return Array.isArray(a) && a.some(a => e.test(a.brand)) || e.test(window.navigator.userAgent)
      }

      function t(e) {
        return "undefined" != typeof window && null != window.navigator && e.test(window.navigator.userAgentData?.platform || window.navigator.platform)
      }

      function n(e) {
        let a = null;
        return () => (null == a && (a = e()), a)
      }
      r.d(a, {
        Tc: () => i,
        bh: () => d,
        cX: () => l,
        gm: () => b,
        m0: () => u,
        un: () => c
      });
      const l = n(function() {
          return t(/^Mac/i)
        }),
        s = n(function() {
          return t(/^iPhone/i)
        }),
        d = n(function() {
          return t(/^iPad/i) || l() && navigator.maxTouchPoints > 1
        }),
        c = n(function() {
          return s() || d()
        }),
        i = (n(function() {
          return l() || c()
        }), n(function() {
          return o(/AppleWebKit/i) && !f()
        })),
        f = n(function() {
          return o(/Chrome/i)
        }),
        u = n(function() {
          return o(/Android/i)
        }),
        b = n(function() {
          return o(/Firefox/i)
        })
    },
    1519(e, a, r) {
      r.d(a, {
        v: () => s
      });
      var o = r(14961);
      let t = new Map,
        n = new Set;

      function l() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let a = r => {
          let l = (0, o.wt)(r);
          if (!e(r) || !l) return;
          let s = t.get(l);
          if (s && (s.delete(r.propertyName), 0 === s.size && (l.removeEventListener("transitioncancel", a), t.delete(l)), 0 === t.size)) {
            for (let e of n) e();
            n.clear()
          }
        };
        document.body.addEventListener("transitionrun", r => {
          let n = (0, o.wt)(r);
          if (!e(r) || !n) return;
          let l = t.get(n);
          l || (l = new Set, t.set(n, l), n.addEventListener("transitioncancel", a, {
            once: !0
          })), l.add(r.propertyName)
        }), document.body.addEventListener("transitionend", a)
      }

      function s(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of t) "isConnected" in e && !e.isConnected && t.delete(e)
          }(), 0 === t.size ? e() : n.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? l() : document.addEventListener("DOMContentLoaded", l))
    },
    14961(e, a, r) {
      r.d(a, {
        bq: () => l,
        sD: () => n,
        wt: () => s
      });
      var o = r(28562),
        t = r(67892);

      function n(e, a) {
        if (!(0, t.Nf)()) return !(!a || !e) && e.contains(a);
        if (!e || !a) return !1;
        let r = a;
        for (; null !== r;) {
          if (r === e) return !0;
          r = "SLOT" === r.tagName && r.assignedSlot ? r.assignedSlot.parentNode : (0, o.Ng)(r) ? r.host : r.parentNode
        }
        return !1
      }
      const l = (e = document) => {
        if (!(0, t.Nf)()) return e.activeElement;
        let a = e.activeElement;
        for (; a && "shadowRoot" in a && a.shadowRoot?.activeElement;) a = a.shadowRoot.activeElement;
        return a
      };

      function s(e) {
        if ((0, t.Nf)() && e.target instanceof Element && e.target.shadowRoot) {
          if ("composedPath" in e) return e.composedPath()[0] ?? null;
          if ("composedPath" in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null
        }
        return e.target
      }
    },
    96187(e, a, r) {
      r.d(a, {
        J: () => l
      });
      var o = r(58907),
        t = r(4637);
      const n = t.useInsertionEffect ?? o.N;

      function l(e) {
        const a = (0, t.useRef)(null);
        return n(() => {
          a.current = e
        }, [e]), (0, t.useCallback)((...e) => {
          const r = a.current;
          return r?.(...e)
        }, [])
      }
    },
    87478(e, a, r) {
      r.d(a, {
        A: () => t
      });
      var o = r(4637);

      function t() {
        let e = (0, o.useRef)(new Map),
          a = (0, o.useCallback)((a, r, o, t) => {
            let n = t?.once ? (...a) => {
              e.current.delete(o), o(...a)
            } : o;
            e.current.set(o, {
              type: r,
              eventTarget: a,
              fn: n,
              options: t
            }), a.addEventListener(r, n, t)
          }, []),
          r = (0, o.useCallback)((a, r, o, t) => {
            let n = e.current.get(o)?.fn || o;
            a.removeEventListener(r, n, t), e.current.delete(o)
          }, []),
          t = (0, o.useCallback)(() => {
            e.current.forEach((e, a) => {
              r(e.eventTarget, e.type, a, e.options)
            })
          }, [r]);
        return (0, o.useEffect)(() => t, [t]), {
          addGlobalListener: a,
          removeGlobalListener: r,
          removeAllGlobalListeners: t
        }
      }
    },
    13087(e, a, r) {
      r.d(a, {
        Tw: () => i,
        Bi: () => c,
        X1: () => f
      });
      var o = r(58907),
        t = r(6859),
        n = r(4637);
      let l, s = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        d = new Map;

      function c(e) {
        let [a, r] = (0, n.useState)(e), c = (0, n.useRef)(null), i = (0, t.Cc)(a), f = (0, n.useRef)(null);
        if (l && l.register(f, i), s) {
          const e = d.get(i);
          e && !e.includes(c) ? e.push(c) : d.set(i, [c])
        }
        return (0, o.N)(() => {
          let e = i;
          return () => {
            l && l.unregister(f), d.delete(e)
          }
        }, [i]), (0, n.useEffect)(() => {
          let e = c.current;
          return e && r(e), () => {
            e && (c.current = null)
          }
        }), i
      }

      function i(e, a) {
        if (e === a) return e;
        let r = d.get(e);
        if (r) return r.forEach(e => e.current = a), a;
        let o = d.get(a);
        return o ? (o.forEach(a => a.current = e), e) : a
      }

      function f(e = []) {
        let a = c(),
          [r, t] = function(e) {
            let [a, r] = (0, n.useState)(e), t = (0, n.useRef)(a), l = (0, n.useRef)(null), s = (0, n.useRef)(() => {
              if (!l.current) return;
              let e = l.current.next();
              e.done ? l.current = null : t.current === e.value ? s.current() : r(e.value)
            });
            (0, o.N)(() => {
              t.current = a, l.current && s.current()
            });
            let d = (0, n.useCallback)(e => {
              l.current = e(t.current), s.current()
            }, [s]);
            return [a, d]
          }(a),
          l = (0, n.useCallback)(() => {
            t(function*() {
              yield a, yield document.getElementById(a) ? a : void 0
            })
          }, [a, t]);
        return (0, o.N)(l, [a, l, ...e]), r
      }
      "undefined" != typeof FinalizationRegistry && (l = new FinalizationRegistry(e => {
        d.delete(e)
      }))
    },
    58907(e, a, r) {
      r.d(a, {
        N: () => t
      });
      var o = r(4637);
      const t = "undefined" != typeof document ? o.useLayoutEffect : () => {}
    },
    76606(e, a, r) {
      r.d(a, {
        w: () => t
      });
      var o = r(58907);

      function t(e, a) {
        (0, o.N)(() => {
          if (e && e.ref && a) return e.ref.current = a.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }
    },
    67892(e, a, r) {
      r.d(a, {
        Nf: () => o
      });

      function o() {
        return false
      }
    }
  }
]);