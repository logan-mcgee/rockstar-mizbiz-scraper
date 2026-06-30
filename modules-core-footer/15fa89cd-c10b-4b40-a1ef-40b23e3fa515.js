try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "15fa89cd-c10b-4b40-a1ef-40b23e3fa515", e._sentryDebugIdIdentifier = "sentry-dbid-15fa89cd-c10b-4b40-a1ef-40b23e3fa515")
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
  [3094, 7165], {
    46516(e, t, n) {
      n.d(t, {
        NP: () => h,
        Ym: () => i,
        zQ: () => d
      });
      var r = n(39793),
        a = (n(77278), n(93400), n(30377)),
        o = n(4637);
      const s = (0, o.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        c = () => (0, o.useContext)(s),
        d = () => {
          const {
            platformScale: e
          } = c();
          return e
        },
        i = () => {
          const {
            locale: e
          } = c();
          return e
        };
      var l = n(94736),
        u = n(85666);
      const f = e => "dark" === e ? u.xW.dark : u.xW.light;
      var p = n(23293);
      const m = () => p.X3 ? null : document.body,
        h = (0, o.forwardRef)(({
          children: e,
          className: t,
          container: n = m(),
          asChild: c,
          colorScheme: d,
          defaultColorScheme: i,
          defaultPlatformScale: h,
          platformScale: b,
          onPlatformScaleChange: w,
          locale: g = "en-US"
        }, y) => {
          const v = (0, o.useRef)(null),
            S = (0, l.UP)(v, y),
            k = (0, o.useRef)(n),
            {
              ratio: L,
              scale: x
            } = function(e) {
              const [t, n] = (0, o.useState)(e.platformScale || e.defaultPlatformScale), r = (0, o.useCallback)(t => {
                n(t), e.onPlatformScaleChange?.(t)
              }, [e.onPlatformScaleChange]), a = (0, o.useRef)([]), s = () => {
                if (!p.X3) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of a.current) t.removeEventListener("change", e);
                  a.current = []
                }
              };
              return (0, o.useEffect)(() => (e.platformScale ? r(e.platformScale) : (() => {
                if (!p.X3) {
                  s();
                  for (const e in u.wj) {
                    const t = window.matchMedia(u.wj[e]),
                      n = t => {
                        t.matches && r(e)
                      };
                    t.addEventListener("change", n), t.matches && r(e), a.current.push({
                      handler: n,
                      matchMedia: t
                    })
                  }
                }
              })(), s), [e.platformScale, r]), {
                scale: t,
                ratio: u.nz[t]
              }
            }({
              onPlatformScaleChange: w,
              defaultPlatformScale: h,
              platformScale: b
            }),
            {
              appearanceClass: C,
              otherAppearanceClasses: P,
              providerColor: _
            } = function({
              colorScheme: e,
              defaultColorScheme: t = "dark"
            }) {
              const n = (0, l.Ub)("(prefers-color-scheme: light)"),
                r = (0, l.Ub)("(prefers-color-scheme: dark)"),
                a = "system" !== e && e || n && "light" || r && "dark" || t,
                s = (0, o.useMemo)(() => f(a), [a]),
                c = (0, o.useMemo)(() => (e => {
                  const t = f(e);
                  return [u.xW.light, u.xW.dark].filter(e => e !== t)
                })(a), [a]);
              return {
                appearanceClass: s,
                otherAppearanceClasses: c,
                providerColor: a
              }
            }({
              colorScheme: d,
              defaultColorScheme: i
            });
          return (({
            container: e,
            currentScale: t,
            appearanceClass: n,
            otherAppearanceClasses: r,
            locale: a,
            className: s
          }) => {
            const c = (0, l.ZC)(s),
              d = (0, l.ZC)(e.current);
            (0, o.useEffect)(() => {
              e.current?.classList.contains(u.X6) || e.current?.classList.add(u.X6), e.current?.classList.contains(u.yU) || e.current?.classList.add(u.yU), e.current?.classList.contains(u.Np) || e.current?.classList.add(u.Np), e.current?.classList.add(n), e.current?.classList.remove(...r), c && s && e.current?.classList.contains(c) ? e.current?.classList.replace(c, s) : c && !s && e.current?.classList.contains(c) ? e.current?.classList.remove(c) : s && e.current?.classList.add(s)
            }, [n, s]), (0, o.useEffect)(() => {
              e.current?.setAttribute("lang", a)
            }, [a]), (0, o.useEffect)(() => (t && e.current?.style.setProperty(u.HZ, t.toString()), () => {
              e.current?.style.removeProperty(u.HZ)
            }), [t]), (0, o.useEffect)(() => {
              d?.classList.remove(u.X6), d?.classList.remove(u.yU), d?.classList.remove(n), d?.style.removeProperty(u.HZ), s && d?.classList.remove(s)
            }, [d])
          })({
            locale: g,
            className: t,
            appearanceClass: C,
            otherAppearanceClasses: P,
            currentScale: b ? L : -0,
            container: c ? v : k
          }), (0, r.jsx)(s.Provider, {
            value: {
              locale: g,
              defaultColorScheme: i,
              colorScheme: _,
              defaultPlatformScale: h,
              platformScale: x
            },
            children: c ? (0, r.jsx)(a.DX, {
              ref: S,
              children: e
            }) : e
          })
        })
    },
    85666(e, t, n) {
      n.d(t, {
        nz: () => r,
        wj: () => a,
        xW: () => o,
        Np: () => s,
        HZ: () => c,
        X6: () => d,
        yU: () => i
      });
      var r = {
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
          dark: "foundry_nu8bkpd",
          light: "foundry_nu8bkpc",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3",
          grid: "foundry_nu8bkpb"
        },
        s = "foundry_nu8bkpb",
        c = "--foundry-platform-scales-ratio-65afb887",
        d = "foundry_nu8bkp4",
        i = "foundry_nu8bkp3"
    },
    87213(e, t, n) {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    94736(e, t, n) {
      n.d(t, {
        sL: () => g,
        UP: () => c,
        ic: () => l,
        iQ: () => f,
        Ub: () => o,
        jt: () => d,
        ZC: () => s,
        rl: () => p
      });
      var r = n(87213),
        a = n(4637);

      function o(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const o = e => r.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [s, c] = (0, a.useState)(() => n ? o(e) : t);

        function d() {
          c(o(e))
        }
        return (0, a.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return d(), t?.addListener ? t?.addListener(d) : t?.addEventListener("change", d), () => {
            t?.removeListener ? t?.removeListener(d) : t?.removeEventListener("change", d)
          }
        }, [e]), s
      }

      function s(e) {
        const t = (0, a.useRef)({
            value: e,
            prev: void 0
          }),
          n = t.current.value;
        return e !== n && (t.current = {
          value: e,
          prev: n
        }), t.current.prev
      }

      function c(...e) {
        const t = (0, a.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      const d = () => o("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function i(e) {
        const t = (0, a.useRef)(e);
        return (0, a.useEffect)(() => {
          t.current = e
        }), (0, a.useMemo)(() => (...e) => t.current?.(...e), [])
      }

      function l({
        prop: e,
        defaultProp: t,
        onChange: n = () => {}
      }) {
        const [r, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const n = (0, a.useState)(e),
            [r] = n,
            o = (0, a.useRef)(r),
            s = i(t);
          return (0, a.useEffect)(() => {
            o.current !== r && (s(r), o.current = r)
          }, [r, o, s]), n
        }({
          defaultProp: t,
          onChange: n
        }), s = void 0 !== e, c = s ? e : r, d = i(n), l = (0, a.useCallback)(t => {
          if (s) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && d(n)
          } else o(t)
        }, [s, e, o, d]);
        return [c, l]
      }

      function u(e, t, n, r) {
        const o = (0, a.useRef)(t);
        (0, a.useEffect)(() => {
          o.current = t
        }, [t]), (0, a.useEffect)(() => {
          const t = n?.current ?? window;
          if (!t || !t.addEventListener) return;
          const a = e => {
            o.current(e)
          };
          return t.addEventListener(e, a, r), () => {
            t.removeEventListener(e, a, r)
          }
        }, [e, n?.current, r])
      }
      const f = ({
        ref: e,
        onChange: t,
        onFocusIn: n,
        onFocusOut: r,
        enabled: o = !0
      }) => {
        const [s, c] = (0, a.useState)(!1);
        return u("focusin", e => {
          c(!0), n?.(e), t?.(!0, e)
        }, e), u("focusout", e => {
          c(!1), r?.(e), t?.(!1, e)
        }, e), {
          isFocused: !!o && s
        }
      };

      function p(e = !0) {
        const t = o("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }
      var m = n(32951);
      const h = /^(on.*)$/,
        b = /^(onPress.*)$/;
      var w = n(71107);
      const g = ({
        inert: e,
        className: t,
        onClick: n,
        isLoading: r,
        ...a
      }, o) => {
        const {
          events: s,
          others: c
        } = function(e, {
          onPress: t
        } = {
          onPress: !0
        }) {
          const n = {},
            r = {};
          for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && (b.test(a) ? t ? n[a] = e[a] : r[a] = e[a] : h.test(a) ? n[a] = e[a] : r[a] = e[a]);
          return {
            events: n,
            others: r
          }
        }(a, {
          onPress: !1
        }), {
          buttonProps: d,
          isPressed: i
        } = (0, m.s)({
          ...c,
          elementType: "button",
          onPress: e => {
            r || (c.onPress?.(e) ?? n?.({
              ...e,
              currentTarget: e.target
            }))
          }
        }, o), l = {
          ...d,
          role: "button",
          "data-pressed": !e && i,
          "data-loading": r,
          "aria-busy": r
        };
        return {
          isPressed: !e && i,
          buttonProps: (0, w.v)(e ? {} : l, {
            ...s,
            className: t
          })
        }
      }
    },
    23293(e, t, n) {
      n.d(t, {
        X3: () => r.X,
        fi: () => o,
        IO: () => d,
        VW: () => f,
        v6: () => s.v,
        cJ: () => u
      });
      var r = n(87213);
      const a = e => e - .02,
        o = {
          mobile: `(min-width: 0px) and (max-width: ${a(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${a(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${a(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${a(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var s = n(71107);
      const c = "__FOUNDRY_ACCENT__",
        d = (e, t) => r.X ? t() : (window[c] || (window[c] = new Map), window[c].has(e) || window[c].set(e, t()), window[c].get(e));
      n(68309);
      var i, l = n(15963);

      function u(e, ...t) {
        return l(e, ...t)
      }
      n(54028), n(74143), n(88584), n(73892), n(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(i || (i = {})), Symbol.toStringTag;
      const f = (...e) => e.filter(e => e).join(" ")
    },
    30377(e, t, n) {
      n.d(t, {
        DX: () => r.DX,
        xV: () => r.xV,
        s6: () => c
      });
      var r = n(38957),
        a = n(39793),
        o = n(4637),
        s = n(34376);
      const c = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? s.s6 : o.Fragment;
        return (0, a.jsx)(n, {
          ...t
        })
      }
    },
    71107(e, t, n) {
      n.d(t, {
        v: () => c
      });
      var r = n(4921);
      const a = new Map;

      function o(e, t) {
        if (e === t) return e;
        const n = a.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = a.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function c(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const a = e[n];
          for (const e in a) {
            const n = t[e],
              c = a[e];
            "function" == typeof n && "function" == typeof c && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, c) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof c ? "id" === e && n && c ? t.id = o(n, c) : t[e] = void 0 !== c ? c : n : t[e] = (0, r.$)(n, c)
          }
        }
        return t
      }
    },
    4031(e, t, n) {
      n.d(t, {
        sG: () => s
      });
      var r = n(4637),
        a = (n(84017), n(38957)),
        o = n(39793),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, a.TL)(`Primitive.${t}`),
            s = r.forwardRef((e, r) => {
              const {
                asChild: a,
                ...s
              } = e, c = a ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, o.jsx)(c, {
                ...s,
                ref: r
              })
            });
          return s.displayName = `Primitive.${t}`, {
            ...e,
            [t]: s
          }
        }, {})
    },
    34376(e, t, n) {
      n.d(t, {
        bL: () => d,
        s6: () => c
      });
      var r = n(4637),
        a = n(4031),
        o = n(39793),
        s = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        c = r.forwardRef((e, t) => (0, o.jsx)(a.sG.span, {
          ...e,
          ref: t,
          style: {
            ...s,
            ...e.style
          }
        }));
      c.displayName = "VisuallyHidden";
      var d = c
    }
  }
]);