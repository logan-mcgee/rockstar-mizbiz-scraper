! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b563ed96-b42c-459a-9d54-54704d6ca69f", e._sentryDebugIdIdentifier = "sentry-dbid-b563ed96-b42c-459a-9d54-54704d6ca69f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [6348], {
    66348: (e, t, r) => {
      r.d(t, {
        NP: () => M
      });
      var a = r(46632),
        n = r(26677),
        o = r(71403);

      function l(...e) {
        return t => e.forEach((e => function(e, t) {
          "function" == typeof e ? e(t) : null != e && (e.current = t)
        }(e, t)))
      }
      const s = (0, o.forwardRef)(((e, t) => {
        const {
          children: r,
          ...a
        } = e, l = o.Children.toArray(r), s = l.find(i);
        if (s) {
          const e = s.props.children,
            r = l.map((t => t === s ? o.Children.count(e) > 1 ? o.Children.only(null) : (0, o.isValidElement)(e) ? e.props.children : null : t));
          return (0, o.createElement)(c, (0, n.A)({}, a, {
            ref: t
          }), (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, r) : null)
        }
        return (0, o.createElement)(c, (0, n.A)({}, a, {
          ref: t
        }), r)
      }));
      s.displayName = "Slot";
      const c = (0, o.forwardRef)(((e, t) => {
        const {
          children: r,
          ...a
        } = e;
        return (0, o.isValidElement)(r) ? (0, o.cloneElement)(r, {
          ...f(a, r.props),
          ref: t ? l(t, r.ref) : r.ref
        }) : o.Children.count(r) > 1 ? o.Children.only(null) : null
      }));
      c.displayName = "SlotClone";
      const d = ({
        children: e
      }) => (0, o.createElement)(o.Fragment, null, e);

      function i(e) {
        return (0, o.isValidElement)(e) && e.type === d
      }

      function f(e, t) {
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
      }
      var u = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        m = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        p = "foundry_nu8bkpar",
        h = "foundry_nu8bkpat",
        S = "foundry_nu8bkpaq",
        b = "foundry_nu8bkpas",
        w = "--foundry_nu8bkp0",
        y = "foundry_nu8bkp1";
      const v = (0, o.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: m,
          platformScaleBreakpoints: u,
          locale: "en-US"
        }),
        k = "undefined" == typeof window;

      function g(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const a = e => k || !window.matchMedia ? t : window.matchMedia(e).matches,
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

      function _(e) {
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
      const C = (e, t) => "dark" === e ? "more" === t ? h : p : "more" === t ? b : S;
      r(94066), r(94048), r(27335), r(11377), r(51315), r(31949), r(31062), r(14653), r(4642), r(14963);
      const E = () => k ? null : document.body,
        M = (0, o.forwardRef)((({
          children: e,
          className: t,
          container: r = E(),
          asChild: n,
          colorScheme: l,
          defaultColorScheme: c,
          contrastMode: d,
          defaultContrastMode: i,
          platformScaleBreakpoints: f,
          platformScaleRatios: M,
          defaultPlatformScale: L,
          platformScale: R,
          locale: x = "en-US"
        }, P) => {
          const A = function(...e) {
              const t = (0, o.useRef)(null);
              return (0, o.useEffect)((() => {
                e.forEach((e => {
                  e && ("function" == typeof e ? e(t.current || null) : e.current = t.current)
                }))
              }), [e]), t
            }((0, o.useRef)(null), P),
            B = (0, o.useRef)(r),
            {
              ratio: N,
              scale: V
            } = function(e) {
              const t = (0, o.useMemo)((() => ({
                  ...m,
                  ...e.platformScaleRatios
                })), [e.platformScaleRatios]),
                r = (0, o.useMemo)((() => ({
                  ...u,
                  ...e.platformScaleBreakpoints
                })), [e.platformScaleBreakpoints]),
                [a, n] = (0, o.useState)(e.platformScale || e.defaultPlatformScale),
                l = (0, o.useRef)([]),
                s = () => {
                  if (!k) {
                    for (const {
                        handler: e,
                        matchMedia: t
                      }
                      of l.current) t.removeEventListener("change", e);
                    l.current = []
                  }
                };
              return (0, o.useEffect)((() => (e.platformScale ? n(e.platformScale) : (() => {
                if (!k) {
                  s();
                  for (const e in r) {
                    const t = window.matchMedia(r[e]),
                      a = t => {
                        t.matches && n(e)
                      };
                    t.addEventListener("change", a), t.matches && n(e), l.current.push({
                      handler: a,
                      matchMedia: t
                    })
                  }
                }
              })(), s)), [r, e.platformScale]), {
                scale: a,
                ratio: t[a]
              }
            }({
              platformScaleBreakpoints: f,
              platformScaleRatios: M,
              defaultPlatformScale: L,
              platformScale: R
            }),
            {
              appearanceClass: I,
              otherAppearanceClasses: D,
              providerColor: j,
              providerContrast: U
            } = function({
              colorScheme: e,
              defaultColorScheme: t = "dark",
              contrastMode: r,
              defaultContrastMode: a = "normal"
            }) {
              const n = g("(prefers-color-scheme: light)"),
                l = g("(prefers-color-scheme: dark)"),
                s = g("(prefers-contrast: more)"),
                c = "system" !== e && e || n && "light" || l && "dark" || t,
                d = r || s && "more" || a,
                i = (0, o.useMemo)((() => C(c, d)), [c, d]),
                f = (0, o.useMemo)((() => ((e, t) => {
                  const r = C(e, t);
                  return [S, p, b, h].filter((e => e !== r))
                })(c, d)), [c, d]);
              return {
                appearanceClass: i,
                otherAppearanceClasses: f,
                providerColor: c,
                providerContrast: d
              }
            }({
              colorScheme: l,
              defaultColorScheme: c,
              contrastMode: d,
              defaultContrastMode: i
            });
          return ((e, t, r, a, n) => {
            const l = _(n),
              s = _(e.current);
            (0, o.useEffect)((() => {
              e.current?.classList.contains(y) || e.current?.classList.add(y), e.current?.classList.add(r), e.current?.classList.remove(...a), l && n && e.current?.classList.contains(l) ? e.current?.classList.replace(l, n) : l && !n && e.current?.classList.contains(l) ? e.current?.classList.remove(l) : n && e.current?.classList.add(n)
            }), [r, n]), (0, o.useEffect)((() => {
              e.current?.style.setProperty(w, t.toString())
            }), [t]), (0, o.useEffect)((() => {
              s?.classList.remove(y), s?.classList.remove(r), s?.style.removeProperty(w), n && s?.classList.remove(n)
            }), [s])
          })(n ? A : B, N, I, D, t), (0, a.jsx)(v.Provider, {
            value: {
              locale: x,
              defaultColorScheme: c,
              colorScheme: j,
              defaultContrastMode: i,
              contrastMode: U,
              defaultPlatformScale: L,
              platformScale: V,
              platformScaleRatios: M,
              platformScaleBreakpoints: f
            },
            children: n ? (0, a.jsx)(s, {
              ref: A,
              children: e
            }) : e
          })
        }))
    }
  }
]);