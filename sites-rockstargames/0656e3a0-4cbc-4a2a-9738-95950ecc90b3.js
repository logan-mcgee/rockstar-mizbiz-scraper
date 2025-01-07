! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0656e3a0-4cbc-4a2a-9738-95950ecc90b3", e._sentryDebugIdIdentifier = "sentry-dbid-0656e3a0-4cbc-4a2a-9738-95950ecc90b3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [4615, 3563], {
    11310: (e, t, r) => {
      r.d(t, {
        Cb: () => n,
        US: () => o,
        xW: () => a,
        HZ: () => c,
        X6: () => s
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
          dark: "foundry_nu8bkpar",
          darkHc: "foundry_nu8bkpat",
          light: "foundry_nu8bkpaq",
          lightHc: "foundry_nu8bkpas",
          tokens: "foundry_nu8bkp1"
        },
        c = "--foundry_nu8bkp0",
        s = "foundry_nu8bkp1"
    },
    19583: (e, t, r) => {
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    23346: (e, t, r) => {
      r.d(t, {
        UP: () => s,
        ic: () => i,
        qn: () => b,
        Pt: () => S,
        Rv: () => w,
        iQ: () => p,
        Mk: () => m,
        UQ: () => u,
        gr: () => h,
        Ub: () => a,
        jt: () => l,
        ZC: () => c,
        rl: () => v
      });
      var n = r(19583),
        o = r(71403);

      function a(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const a = e => n.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [c, s] = (0, o.useState)((() => r ? a(e) : t));

        function l() {
          s(a(e))
        }
        return (0, o.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return l(), t?.addListener ? t?.addListener(l) : t?.addEventListener("change", l), () => {
            t?.removeListener ? t?.removeListener(l) : t?.removeEventListener("change", l)
          }
        }), [e]), c
      }

      function c(e) {
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

      function s(...e) {
        const t = (0, o.useRef)(null);
        return (0, o.useEffect)((() => {
          e.forEach((e => {
            e && ("function" == typeof e ? e(t.current || null) : e.current = t.current)
          }))
        }), [e]), t
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
      const u = ({
        activity: e,
        leave: t,
        enabled: r = !0
      }) => {
        const n = (0, o.useRef)(),
          [a, c] = (0, o.useState)(!1),
          s = (0, o.useCallback)((() => c(!0)), []),
          l = (0, o.useCallback)(((t, r) => {
            let o = 0;
            return (...t) => {
              const r = Date.now();
              r - o >= 500 && (o = r, (() => {
                c(!1), window.clearTimeout(n.current), n.current = window.setTimeout(s, e)
              })(...t))
            }
          })(), []),
          d = (0, o.useCallback)((() => {
            window.clearTimeout(n.current), n.current = window.setTimeout(s, t)
          }), []),
          u = (0, o.useCallback)((() => {
            document.hidden || l()
          }), []);
        return (0, o.useEffect)((() => {
          const e = () => {
            window.removeEventListener("mousemove", l), window.removeEventListener("mousedown", l), window.removeEventListener("resize", l), window.removeEventListener("keydown", l), window.removeEventListener("touchstart", l), window.removeEventListener("wheel", l), document.removeEventListener("mouseleave", d), document.removeEventListener("visibilitychange", u), window.clearTimeout(n.current), c(!1)
          };
          return r ? (window.addEventListener("mousemove", l), window.addEventListener("mousedown", l), window.addEventListener("resize", l), window.addEventListener("keydown", l), window.addEventListener("touchstart", l), window.addEventListener("wheel", l), document.addEventListener("mouseleave", d), document.addEventListener("visibilitychange", u), l()) : e(), () => e()
        }), [r]), {
          isIdle: a
        }
      };

      function i({
        prop: e,
        defaultProp: t,
        onChange: r = (() => {})
      }) {
        const [n, a] = function({
          defaultProp: e,
          onChange: t
        }) {
          const r = (0, o.useState)(e),
            [n] = r,
            a = (0, o.useRef)(n),
            c = d(t);
          return (0, o.useEffect)((() => {
            a.current !== n && (c(n), a.current = n)
          }), [n, a, c]), r
        }({
          defaultProp: t,
          onChange: r
        }), c = void 0 !== e, s = c ? e : n, l = d(r), u = (0, o.useCallback)((t => {
          if (c) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && l(r)
          } else a(t)
        }), [c, e, a, l]);
        return [s, u]
      }

      function f(e, t, r, n) {
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
      const m = ({
          enabled: e,
          ref: t
        }) => {
          const [r, n] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            n(!1)
          }), [t.current]), f("mouseenter", (() => {
            n(!0)
          }), t), f("mouseleave", (() => {
            n(!1)
          }), t), {
            isHovered: !!e && r
          }
        },
        p = ({
          enabled: e,
          ref: t
        }) => {
          const [r, n] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            n(!1)
          }), [t.current]), f("focusin", (() => {
            n(!0)
          }), t), f("focusout", (() => {
            n(!1)
          }), t), {
            isFocused: !!e && r
          }
        },
        h = ({
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
        return !!e && a("screen and (pointer: coarse) and (hover: none)")
      }
      const w = ({
          enabled: e = !0,
          latency: t = 300,
          onDoubleClick: r = (() => null),
          onSingleClick: n = (() => null)
        }) => {
          const a = (0, o.useRef)(0),
            c = (0, o.useRef)();
          return {
            handleClick: o => {
              e && (a.current += 1, c.current = setTimeout((() => {
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
        };

      function S() {
        return {
          countWrappedElements: e => {
            if (!e.current) return;
            const {
              children: t
            } = e.current;
            let r = 0,
              n = 0;
            return Array.from(t).map(((e, t) => {
              const o = e.getBoundingClientRect().top,
                a = e.getBoundingClientRect().height;
              return 0 === t && (r = o, n = a), o
            })).filter((e => e >= r + n)).length
          }
        }
      }
    },
    43170: (e, t, r) => {
      r.d(t, {
        X3: () => n.X,
        bZ: () => f,
        v6: () => d
      });
      var n = r(19583),
        o = r(11900),
        a = r(94066),
        c = r(94048),
        s = r(27335),
        l = r(11377);
      const d = (e, t) => Array().concat(t).reduce(((e, t) => a(e, t, ((e, t) => c(e) && c(t) ? function(...e) {
          return (...t) => {
            for (const r of e) "function" == typeof r && r(...t)
          }
        }(e, t) : s(e) && s(t) ? d(e, t) : l(e) && l(t) ? (0, o.$)(e, t) : t || e))), e),
        u = /^(on.*)$/,
        i = /^(onPress.*)$/;

      function f(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const r = {},
          n = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (i.test(o) ? t ? r[o] = e[o] : n[o] = e[o] : u.test(o) ? r[o] = e[o] : n[o] = e[o]);
        return {
          events: r,
          others: n
        }
      }
      r(51315), r(31949), r(31062), r(14653), r(4642), r(14963)
    },
    9158: (e, t, r) => {
      r.d(t, {
        DX: () => n.DX,
        xV: () => n.xV,
        s6: () => d
      });
      var n = r(98944),
        o = r(46632),
        a = r(71403),
        c = r(26677);
      r(79493);
      const s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const r = (0, a.forwardRef)(((e, r) => {
            const {
              asChild: o,
              ...s
            } = e, l = o ? n.DX : t;
            return (0, a.useEffect)((() => {
              window[Symbol.for("radix-ui")] = !0
            }), []), (0, a.createElement)(l, (0, c.A)({}, s, {
              ref: r
            }))
          }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {}),
        l = (0, a.forwardRef)(((e, t) => (0, a.createElement)(s.span, (0, c.A)({}, e, {
          ref: t,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
          }
        })))),
        d = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? l : a.Fragment;
          return (0, o.jsx)(r, {
            ...t
          })
        }
    },
    64615: (e, t, r) => {
      r.d(t, {
        NP: () => h,
        Ym: () => u,
        DP: () => d
      });
      var n = r(46632),
        o = r(9158),
        a = r(11310),
        c = r(71403);
      const s = (0, c.createContext)({
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
        l = () => (0, c.useContext)(s),
        d = () => {
          const {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: r,
            defaultContrastMode: n,
            platformScale: o,
            defaultPlatformScale: a,
            platformScaleRatios: c,
            platformScaleBreakpoints: s,
            locale: d
          } = l();
          return {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: r,
            defaultContrastMode: n,
            platformScale: o,
            defaultPlatformScale: a,
            platformScaleRatios: c,
            platformScaleBreakpoints: s,
            locale: d
          }
        },
        u = () => {
          const {
            locale: e
          } = l();
          return e
        };
      var i = r(23346);
      const f = (e, t) => {
        const r = "more" === t ? a.xW.lightHc : a.xW.light,
          n = "more" === t ? a.xW.darkHc : a.xW.dark;
        return "dark" === e ? n : r
      };
      var m = r(43170);
      const p = () => m.X3 ? null : document.body,
        h = (0, c.forwardRef)((({
          children: e,
          className: t,
          container: r = p(),
          asChild: l,
          colorScheme: d,
          defaultColorScheme: u,
          contrastMode: h,
          defaultContrastMode: v,
          platformScaleBreakpoints: w,
          platformScaleRatios: b,
          defaultPlatformScale: S,
          platformScale: g,
          locale: k = "en-US"
        }, E) => {
          const y = (0, c.useRef)(null),
            C = (0, i.UP)(y, E),
            L = (0, c.useRef)(r),
            {
              ratio: M,
              scale: R
            } = function(e) {
              const t = (0, c.useMemo)((() => ({
                  ...a.US,
                  ...e.platformScaleRatios
                })), [e.platformScaleRatios]),
                r = (0, c.useMemo)((() => ({
                  ...a.Cb,
                  ...e.platformScaleBreakpoints
                })), [e.platformScaleBreakpoints]),
                [n, o] = (0, c.useState)(e.platformScale || e.defaultPlatformScale),
                s = (0, c.useRef)([]),
                l = () => {
                  if (!m.X3) {
                    for (const {
                        handler: e,
                        matchMedia: t
                      }
                      of s.current) t.removeEventListener("change", e);
                    s.current = []
                  }
                };
              return (0, c.useEffect)((() => (e.platformScale ? o(e.platformScale) : (() => {
                if (!m.X3) {
                  l();
                  for (const e in r) {
                    const t = window.matchMedia(r[e]),
                      n = t => {
                        t.matches && o(e)
                      };
                    t.addEventListener("change", n), t.matches && o(e), s.current.push({
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
              platformScaleBreakpoints: w,
              platformScaleRatios: b,
              defaultPlatformScale: S,
              platformScale: g
            }),
            {
              appearanceClass: _,
              otherAppearanceClasses: x,
              providerColor: P,
              providerContrast: X
            } = function({
              colorScheme: e,
              defaultColorScheme: t = "dark",
              contrastMode: r,
              defaultContrastMode: n = "normal"
            }) {
              const o = (0, i.Ub)("(prefers-color-scheme: light)"),
                s = (0, i.Ub)("(prefers-color-scheme: dark)"),
                l = (0, i.Ub)("(prefers-contrast: more)"),
                d = "system" !== e && e || o && "light" || s && "dark" || t,
                u = r || l && "more" || n,
                m = (0, c.useMemo)((() => f(d, u)), [d, u]),
                p = (0, c.useMemo)((() => ((e, t) => {
                  const r = f(e, t);
                  return [a.xW.light, a.xW.dark, a.xW.lightHc, a.xW.darkHc].filter((e => e !== r))
                })(d, u)), [d, u]);
              return {
                appearanceClass: m,
                otherAppearanceClasses: p,
                providerColor: d,
                providerContrast: u
              }
            }({
              colorScheme: d,
              defaultColorScheme: u,
              contrastMode: h,
              defaultContrastMode: v
            });
          return ((e, t, r, n, o) => {
            const s = (0, i.ZC)(o),
              l = (0, i.ZC)(e.current);
            (0, c.useEffect)((() => {
              e.current?.classList.contains(a.X6) || e.current?.classList.add(a.X6), e.current?.classList.add(r), e.current?.classList.remove(...n), s && o && e.current?.classList.contains(s) ? e.current?.classList.replace(s, o) : s && !o && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : o && e.current?.classList.add(o)
            }), [r, o]), (0, c.useEffect)((() => {
              e.current?.style.setProperty(a.HZ, t.toString())
            }), [t]), (0, c.useEffect)((() => {
              l?.classList.remove(a.X6), l?.classList.remove(r), l?.style.removeProperty(a.HZ), o && l?.classList.remove(o)
            }), [l])
          })(l ? C : L, M, _, x, t), (0, n.jsx)(s.Provider, {
            value: {
              locale: k,
              defaultColorScheme: u,
              colorScheme: P,
              defaultContrastMode: v,
              contrastMode: X,
              defaultPlatformScale: S,
              platformScale: R,
              platformScaleRatios: b,
              platformScaleBreakpoints: w
            },
            children: l ? (0, n.jsx)(o.DX, {
              ref: C,
              children: e
            }) : e
          })
        }))
    }
  }
]);