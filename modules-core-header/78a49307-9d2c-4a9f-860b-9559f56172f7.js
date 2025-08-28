try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "78a49307-9d2c-4a9f-860b-9559f56172f7", e._sentryDebugIdIdentifier = "sentry-dbid-78a49307-9d2c-4a9f-860b-9559f56172f7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4869], {
    14869: (e, t, r) => {
      r.d(t, {
        NP: () => w,
        Ym: () => i,
        zQ: () => u,
        DP: () => d
      });
      var n = r(70954),
        o = (r(49639), r(54239)),
        a = r(39277),
        s = r(71127);
      const c = (0, s.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: a.US,
          platformScaleBreakpoints: a.Cb,
          locale: "en-US"
        }),
        l = () => (0, s.useContext)(c),
        d = () => {
          const {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: r,
            defaultContrastMode: n,
            platformScale: o,
            defaultPlatformScale: a,
            platformScaleRatios: s,
            platformScaleBreakpoints: c,
            locale: d
          } = l();
          return {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: r,
            defaultContrastMode: n,
            platformScale: o,
            defaultPlatformScale: a,
            platformScaleRatios: s,
            platformScaleBreakpoints: c,
            locale: d
          }
        },
        u = () => {
          const {
            platformScale: e
          } = l();
          return e
        },
        i = () => {
          const {
            locale: e
          } = l();
          return e
        };
      var f = r(64836);
      const m = (e, t) => {
        const r = "more" === t ? a.xW.lightHc : a.xW.light,
          n = "more" === t ? a.xW.darkHc : a.xW.dark;
        return "dark" === e ? n : r
      };
      var p = r(23727);
      const h = () => p.IS_SERVER ? null : document.body,
        w = (0, s.forwardRef)((({
          children: e,
          className: t,
          container: r = h(),
          asChild: l,
          colorScheme: d,
          defaultColorScheme: u,
          contrastMode: i,
          defaultContrastMode: w,
          platformScaleBreakpoints: v,
          platformScaleRatios: S,
          defaultPlatformScale: b,
          platformScale: k,
          locale: E = "en-US"
        }, g) => {
          const y = (0, s.useRef)(null),
            C = (0, f.UP)(y, g),
            L = (0, s.useRef)(r),
            {
              ratio: M,
              scale: R
            } = function(e) {
              const t = (0, s.useMemo)((() => ({
                  ...a.US,
                  ...e.platformScaleRatios
                })), [e.platformScaleRatios]),
                r = (0, s.useMemo)((() => ({
                  ...a.Cb,
                  ...e.platformScaleBreakpoints
                })), [e.platformScaleBreakpoints]),
                [n, o] = (0, s.useState)(e.platformScale || e.defaultPlatformScale),
                c = (0, s.useRef)([]),
                l = () => {
                  if (!p.IS_SERVER) {
                    for (const {
                        handler: e,
                        matchMedia: t
                      }
                      of c.current) t.removeEventListener("change", e);
                    c.current = []
                  }
                };
              return (0, s.useEffect)((() => (e.platformScale ? o(e.platformScale) : (() => {
                if (!p.IS_SERVER) {
                  l();
                  for (const e in r) {
                    const t = window.matchMedia(r[e]),
                      n = t => {
                        t.matches && o(e)
                      };
                    t.addEventListener("change", n), t.matches && o(e), c.current.push({
                      handler: n,
                      matchMedia: t
                    })
                  }
                }
              })(), l)), [r, e.platformScale]), {
                scale: n,
                ratio: t[n]
              }
            }({
              platformScaleBreakpoints: v,
              platformScaleRatios: S,
              defaultPlatformScale: b,
              platformScale: k
            }),
            {
              appearanceClass: _,
              otherAppearanceClasses: x,
              providerColor: P,
              providerContrast: T
            } = function({
              colorScheme: e,
              defaultColorScheme: t = "dark",
              contrastMode: r,
              defaultContrastMode: n = "normal"
            }) {
              const o = (0, f.Ub)("(prefers-color-scheme: light)"),
                c = (0, f.Ub)("(prefers-color-scheme: dark)"),
                l = (0, f.Ub)("(prefers-contrast: more)"),
                d = "system" !== e && e || o && "light" || c && "dark" || t,
                u = r || l && "more" || n,
                i = (0, s.useMemo)((() => m(d, u)), [d, u]),
                p = (0, s.useMemo)((() => ((e, t) => {
                  const r = m(e, t);
                  return [a.xW.light, a.xW.dark, a.xW.lightHc, a.xW.darkHc].filter((e => e !== r))
                })(d, u)), [d, u]);
              return {
                appearanceClass: i,
                otherAppearanceClasses: p,
                providerColor: d,
                providerContrast: u
              }
            }({
              colorScheme: d,
              defaultColorScheme: u,
              contrastMode: i,
              defaultContrastMode: w
            });
          return ((e, t, r, n, o) => {
            const c = (0, f.ZC)(o),
              l = (0, f.ZC)(e.current);
            (0, s.useEffect)((() => {
              e.current?.classList.contains(a.X6) || e.current?.classList.add(a.X6), e.current?.classList.add(r), e.current?.classList.remove(...n), c && o && e.current?.classList.contains(c) ? e.current?.classList.replace(c, o) : c && !o && e.current?.classList.contains(c) ? e.current?.classList.remove(c) : o && e.current?.classList.add(o)
            }), [r, o]), (0, s.useEffect)((() => {
              e.current?.style.setProperty(a.HZ, t.toString())
            }), [t]), (0, s.useEffect)((() => {
              l?.classList.remove(a.X6), l?.classList.remove(r), l?.style.removeProperty(a.HZ), o && l?.classList.remove(o)
            }), [l])
          })(l ? y : L, M, _, x, t), (0, n.jsx)(c.Provider, {
            value: {
              locale: E,
              defaultColorScheme: u,
              colorScheme: P,
              defaultContrastMode: w,
              contrastMode: T,
              defaultPlatformScale: b,
              platformScale: R,
              platformScaleRatios: S,
              platformScaleBreakpoints: v
            },
            children: l ? (0, n.jsx)(o.DX, {
              ref: C,
              children: e
            }) : e
          })
        }))
    },
    16691: (e, t, r) => {
      r.d(t, {
        n: () => n
      });
      const n = (e, t) => {
        let r = 0;
        return (...n) => {
          const o = Date.now();
          o - r >= t && (r = o, e(...n))
        }
      }
    },
    39277: (e, t, r) => {
      r.d(t, {
        Cb: () => n,
        US: () => o,
        xW: () => a,
        HZ: () => s,
        X6: () => c
      });
      var n = {
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
        a = {
          dark: "foundry_nu8bkp2",
          darkHc: "foundry_nu8bkp4",
          light: "foundry_nu8bkp1",
          lightHc: "foundry_nu8bkp3",
          tokens: "foundry_nu8bkp0"
        },
        s = "--foundry_65afb887",
        c = "foundry_nu8bkp0"
    },
    44802: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    54239: (e, t, r) => {
      r.d(t, {
        DX: () => n.Slot,
        xV: () => n.Slottable,
        s6: () => c
      });
      var n = r(21222),
        o = r(70954),
        a = r(71127),
        s = r(63694);
      const c = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? s.VisuallyHidden : a.Fragment;
        return (0, o.jsx)(r, {
          ...t
        })
      }
    },
    64836: (e, t, r) => {
      r.d(t, {
        UP: () => c,
        ic: () => f,
        qn: () => b,
        Rv: () => S,
        iQ: () => h,
        Mk: () => p,
        UQ: () => i,
        gr: () => w,
        Ub: () => a,
        jt: () => l,
        ZC: () => s,
        rl: () => v
      });
      var n = r(44802),
        o = r(71127);

      function a(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const a = e => n.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [s, c] = (0, o.useState)((() => r ? a(e) : t));

        function l() {
          c(a(e))
        }
        return (0, o.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return l(), t?.addListener ? t?.addListener(l) : t?.addEventListener("change", l), () => {
            t?.removeListener ? t?.removeListener(l) : t?.removeEventListener("change", l)
          }
        }), [e]), s
      }

      function s(e) {
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

      function c(...e) {
        const t = (0, o.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      const l = () => a("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function d(e) {
        const t = (0, o.useRef)(e);
        return (0, o.useEffect)((() => {
          t.current = e
        })), (0, o.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      var u = r(16691);
      const i = ({
        activity: e,
        leave: t,
        enabled: r = !0
      }) => {
        const n = (0, o.useRef)(),
          [a, s] = (0, o.useState)(!1),
          c = (0, o.useCallback)((() => {
            s(!0)
          }), []),
          l = (0, o.useCallback)((0, u.n)((() => {
            s(!1), window.clearTimeout(n.current), n.current = window.setTimeout(c, e)
          }), 500), []),
          d = (0, o.useCallback)((() => {
            window.clearTimeout(n.current), n.current = window.setTimeout(c, t)
          }), []),
          i = (0, o.useCallback)((() => {
            document.hidden || l()
          }), []);
        return (0, o.useEffect)((() => {
          const e = () => {
            window.removeEventListener("mousemove", l), window.removeEventListener("mousedown", l), window.removeEventListener("resize", l), window.removeEventListener("keydown", l), window.removeEventListener("touchstart", l), window.removeEventListener("wheel", l), document.removeEventListener("mouseleave", d), document.removeEventListener("visibilitychange", i), window.clearTimeout(n.current), s(!1)
          };
          return r ? (window.addEventListener("mousemove", l), window.addEventListener("mousedown", l), window.addEventListener("resize", l), window.addEventListener("keydown", l), window.addEventListener("touchstart", l), window.addEventListener("wheel", l), document.addEventListener("mouseleave", d), document.addEventListener("visibilitychange", i), l()) : e(), () => e()
        }), [r]), {
          isIdle: a
        }
      };

      function f({
        prop: e,
        defaultProp: t,
        onChange: r = () => {}
      }) {
        const [n, a] = function({
          defaultProp: e,
          onChange: t
        }) {
          const r = (0, o.useState)(e),
            [n] = r,
            a = (0, o.useRef)(n),
            s = d(t);
          return (0, o.useEffect)((() => {
            a.current !== n && (s(n), a.current = n)
          }), [n, a, s]), r
        }({
          defaultProp: t,
          onChange: r
        }), s = void 0 !== e, c = s ? e : n, l = d(r), u = (0, o.useCallback)((t => {
          if (s) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && l(r)
          } else a(t)
        }), [s, e, a, l]);
        return [c, u]
      }

      function m(e, t, r, n) {
        const a = (0, o.useRef)(t);
        (0, o.useEffect)((() => {
          a.current = t
        }), [t]), (0, o.useEffect)((() => {
          const t = r?.current ?? window;
          if (!t || !t.addEventListener) return;
          const o = e => {
            a.current(e)
          };
          return t.addEventListener(e, o, n), () => {
            t.removeEventListener(e, o, n)
          }
        }), [e, r?.current, n])
      }
      const p = ({
          enabled: e,
          ref: t
        }) => {
          const [r, n] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            n(!1)
          }), [t.current]), m("mouseenter", (() => {
            n(!0)
          }), t), m("mouseleave", (() => {
            n(!1)
          }), t), {
            isHovered: !!e && r
          }
        },
        h = ({
          ref: e,
          onChange: t,
          onFocusIn: r,
          onFocusOut: n,
          enabled: a = !0
        }) => {
          const [s, c] = (0, o.useState)(!1);
          return m("focusin", (e => {
            c(!0), r?.(e), t?.(!0, e)
          }), e), m("focusout", (e => {
            c(!1), n?.(e), t?.(!1, e)
          }), e), {
            isFocused: !!a && s
          }
        },
        w = ({
          enabled: e = !0
        }) => {
          const [t, r] = (0, o.useState)(!1), [n, a] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            e || (r(!1), a(!1))
          }), [e]), {
            eventHandlers: {
              onLoad: () => {
                e && (a(!0), r(!1))
              },
              onAbort: () => {
                e && (a(!0), r(!1))
              },
              onError: () => {
                e && (a(!0), r(!1))
              }
            },
            error: t,
            loaded: n
          }
        };

      function v(e = !0) {
        const t = a("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }
      const S = ({
          enabled: e = !0,
          latency: t = 300,
          onDoubleClick: r = () => null,
          onSingleClick: n = () => null
        }) => {
          const a = (0, o.useRef)(0),
            s = (0, o.useRef)();
          return {
            handleClick: o => {
              e && (a.current += 1, s.current = setTimeout((() => {
                1 === a.current ? n(o) : 2 === a.current && r(o), a.current = 0
              }), t))
            }
          }
        },
        b = (e, t = []) => {
          const r = (0, o.useRef)(!1);
          (0, o.useEffect)((() => (r.current = !0, () => {
            r.current = !1
          })), []), (0, o.useEffect)((() => {
            r.current && e()
          }), [...t])
        }
    }
  }
]);