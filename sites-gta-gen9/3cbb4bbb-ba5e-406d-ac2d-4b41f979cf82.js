try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3cbb4bbb-ba5e-406d-ac2d-4b41f979cf82", e._sentryDebugIdIdentifier = "sentry-dbid-3cbb4bbb-ba5e-406d-ac2d-4b41f979cf82")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2327], {
    74268(e, n, t) {
      t.d(n, {
        m: () => s
      });
      var o = t(89525);
      const r = e => "dark" === e ? o.xW.dark : o.xW.light,
        s = (e, n) => [o.xW.tokens, o.xW.typography, o.xW.grid, r(e)].join(" ")
    },
    89525(e, n, t) {
      t.d(n, {
        nz: () => o,
        wj: () => r,
        xW: () => s,
        Np: () => a,
        HZ: () => d,
        X6: () => u,
        yU: () => c
      });
      var o = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        r = {
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
        a = "foundry_nu8bkpb",
        d = "--foundry-platform-scales-ratio-65afb887",
        u = "foundry_nu8bkp4",
        c = "foundry_nu8bkp3"
    },
    31602(e, n, t) {
      const o = "undefined" == typeof window;
      t.d(n, ["X", 0, o])
    },
    46764(e, n, t) {
      t.d(n, {
        sL: () => h,
        UP: () => d,
        ic: () => i,
        iQ: () => l,
        Ub: () => s,
        jt: () => u,
        ZC: () => a,
        rl: () => p
      });
      var o = t(31602),
        r = t(93082);

      function s(e, {
        defaultValue: n = !1,
        initializeWithValue: t = !0
      } = {}) {
        const s = e => o.X || !window.matchMedia ? n : window.matchMedia(e).matches,
          [a, d] = (0, r.useState)(() => t ? s(e) : n);

        function u() {
          d(s(e))
        }
        return (0, r.useEffect)(() => {
          const n = window.matchMedia?.(e);
          return u(), n?.addListener ? n?.addListener(u) : n?.addEventListener("change", u), () => {
            n?.removeListener ? n?.removeListener(u) : n?.removeEventListener("change", u)
          }
        }, [e]), a
      }

      function a(e) {
        const n = (0, r.useRef)({
            value: e,
            prev: void 0
          }),
          t = n.current.value;
        return e !== t && (n.current = {
          value: e,
          prev: t
        }), n.current.prev
      }

      function d(...e) {
        const n = (0, r.useRef)(null);
        return n.current || (n.current = n => {
          e.forEach(e => {
            "function" == typeof e ? e(n) : null != e && (e.current = n)
          })
        }), n.current
      }
      const u = () => s("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function c(e) {
        const n = (0, r.useRef)(e);
        return (0, r.useEffect)(() => {
          n.current = e
        }), (0, r.useMemo)(() => (...e) => n.current?.(...e), [])
      }

      function i({
        prop: e,
        defaultProp: n,
        onChange: t = () => {}
      }) {
        const [o, s] = function({
          defaultProp: e,
          onChange: n
        }) {
          const t = (0, r.useState)(e),
            [o] = t,
            s = (0, r.useRef)(o),
            a = c(n);
          return (0, r.useEffect)(() => {
            s.current !== o && (a(o), s.current = o)
          }, [o, s, a]), t
        }({
          defaultProp: n,
          onChange: t
        }), a = void 0 !== e, d = a ? e : o, u = c(t), i = (0, r.useCallback)(n => {
          if (a) {
            const t = "function" == typeof n ? n(e) : n;
            t !== e && u(t)
          } else s(n)
        }, [a, e, s, u]);
        return [d, i]
      }

      function f(e, n, t, o) {
        const s = (0, r.useRef)(n);
        (0, r.useEffect)(() => {
          s.current = n
        }, [n]), (0, r.useEffect)(() => {
          const n = t?.current ?? window;
          if (!n || !n.addEventListener) return;
          const r = e => {
            s.current(e)
          };
          return n.addEventListener(e, r, o), () => {
            n.removeEventListener(e, r, o)
          }
        }, [e, t?.current, o])
      }
      const l = ({
        ref: e,
        onChange: n,
        onFocusIn: t,
        onFocusOut: o,
        enabled: s = !0
      }) => {
        const [a, d] = (0, r.useState)(!1);
        return f("focusin", e => {
          d(!0), t?.(e), n?.(!0, e)
        }, e), f("focusout", e => {
          d(!1), o?.(e), n?.(!1, e)
        }, e), {
          isFocused: !!s && a
        }
      };

      function p(e = !0) {
        const n = s("screen and (pointer: coarse) and (hover: none)");
        return !!e && n
      }
      var b = t(65756),
        g = t(74571),
        y = t(47460);
      const h = ({
        inert: e,
        className: n,
        onClick: t,
        isLoading: o,
        ...r
      }, s) => {
        const {
          events: a,
          others: d
        } = (0, g.b)(r, {
          onPress: !1
        }), {
          buttonProps: u,
          isPressed: c
        } = (0, b.s)({
          ...d,
          elementType: "button",
          onPress: e => {
            o || (d.onPress?.(e) ?? t?.({
              ...e,
              currentTarget: e.target
            }))
          }
        }, s), i = {
          ...u,
          role: "button",
          "data-pressed": !e && c,
          "data-loading": o,
          "aria-busy": o
        };
        return {
          isPressed: !e && c,
          buttonProps: (0, y.v)(e ? {} : i, {
            ...a,
            className: n
          })
        }
      }
    },
    74571(e, n, t) {
      t.d(n, {
        b: () => s
      });
      const o = /^(on.*)$/,
        r = /^(onPress.*)$/;

      function s(e, {
        onPress: n
      } = {
        onPress: !0
      }) {
        const t = {},
          s = {};
        for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && (r.test(a) ? n ? t[a] = e[a] : s[a] = e[a] : o.test(a) ? t[a] = e[a] : s[a] = e[a]);
        return {
          events: t,
          others: s
        }
      }
    },
    47460(e, n, t) {
      t.d(n, {
        v: () => d
      });
      var o = t(81270);
      const r = new Map;

      function s(e, n) {
        if (e === n) return e;
        const t = r.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const o = r.get(n);
        return o ? (o.forEach(n => n(e)), e) : n
      }

      function a(...e) {
        return (...n) => {
          for (const t of e) "function" == typeof t && t(...n)
        }
      }

      function d(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const r = e[t];
          for (const e in r) {
            const t = n[e],
              d = r[e];
            "function" == typeof t && "function" == typeof d && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = a(t, d) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof d ? "id" === e && t && d ? n.id = s(t, d) : n[e] = void 0 !== d ? d : t : n[e] = (0, o.clsx)(t, d)
          }
        }
        return n
      }
    }
  }
]);