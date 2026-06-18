try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3bc41edf-80cf-4cf4-aa62-ed330b81165b", e._sentryDebugIdIdentifier = "sentry-dbid-3bc41edf-80cf-4cf4-aa62-ed330b81165b")
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
  [3374], {
    90371(e, n, t) {
      t.d(n, {
        X: () => o
      });
      const o = "undefined" == typeof window
    },
    45970(e, n, t) {
      t.d(n, {
        sL: () => m,
        UP: () => i,
        ic: () => u,
        iQ: () => l,
        Ub: () => s,
        jt: () => d,
        ZC: () => a,
        rl: () => p
      });
      var o = t(90371),
        r = t(93082);

      function s(e, {
        defaultValue: n = !1,
        initializeWithValue: t = !0
      } = {}) {
        const s = e => o.X || !window.matchMedia ? n : window.matchMedia(e).matches,
          [a, i] = (0, r.useState)(() => t ? s(e) : n);

        function d() {
          i(s(e))
        }
        return (0, r.useEffect)(() => {
          const n = window.matchMedia?.(e);
          return d(), n?.addListener ? n?.addListener(d) : n?.addEventListener("change", d), () => {
            n?.removeListener ? n?.removeListener(d) : n?.removeEventListener("change", d)
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

      function i(...e) {
        const n = (0, r.useRef)(null);
        return n.current || (n.current = n => {
          e.forEach(e => {
            "function" == typeof e ? e(n) : null != e && (e.current = n)
          })
        }), n.current
      }
      const d = () => s("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function c(e) {
        const n = (0, r.useRef)(e);
        return (0, r.useEffect)(() => {
          n.current = e
        }), (0, r.useMemo)(() => (...e) => n.current?.(...e), [])
      }

      function u({
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
        }), a = void 0 !== e, i = a ? e : o, d = c(t), u = (0, r.useCallback)(n => {
          if (a) {
            const t = "function" == typeof n ? n(e) : n;
            t !== e && d(t)
          } else s(n)
        }, [a, e, s, d]);
        return [i, u]
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
        const [a, i] = (0, r.useState)(!1);
        return f("focusin", e => {
          i(!0), t?.(e), n?.(!0, e)
        }, e), f("focusout", e => {
          i(!1), o?.(e), n?.(!1, e)
        }, e), {
          isFocused: !!s && a
        }
      };

      function p(e = !0) {
        const n = s("screen and (pointer: coarse) and (hover: none)");
        return !!e && n
      }
      var w = t(32951);
      const g = /^(on.*)$/,
        b = /^(onPress.*)$/;
      var h = t(31985);
      const m = ({
        inert: e,
        className: n,
        onClick: t,
        isLoading: o,
        ...r
      }, s) => {
        const {
          events: a,
          others: i
        } = function(e, {
          onPress: n
        } = {
          onPress: !0
        }) {
          const t = {},
            o = {};
          for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (b.test(r) ? n ? t[r] = e[r] : o[r] = e[r] : g.test(r) ? t[r] = e[r] : o[r] = e[r]);
          return {
            events: t,
            others: o
          }
        }(r, {
          onPress: !1
        }), {
          buttonProps: d,
          isPressed: c
        } = (0, w.s)({
          ...i,
          elementType: "button",
          onPress: e => {
            o || (i.onPress?.(e) ?? t?.({
              ...e,
              currentTarget: e.target
            }))
          }
        }, s), u = {
          ...d,
          role: "button",
          "data-pressed": !e && c,
          "data-loading": o,
          "aria-busy": o
        };
        return {
          isPressed: !e && c,
          buttonProps: (0, h.v)(e ? {} : u, {
            ...a,
            className: n
          })
        }
      }
    },
    27859(e, n, t) {
      t.d(n, {
        X3: () => o.X,
        fi: () => s,
        IO: () => d,
        VW: () => l,
        v6: () => a.v,
        cJ: () => f
      });
      var o = t(90371);
      const r = e => e - .02,
        s = {
          mobile: `(min-width: 0px) and (max-width: ${r(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${r(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${r(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${r(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var a = t(31985);
      const i = "__FOUNDRY_ACCENT__",
        d = (e, n) => o.X ? n() : (window[i] || (window[i] = new Map), window[i].has(e) || window[i].set(e, n()), window[i].get(e));
      t(68309);
      var c, u = t(15963);

      function f(e, ...n) {
        return u(e, ...n)
      }
      t(54028), t(74143), t(88584), t(73892), t(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(c || (c = {})), Symbol.toStringTag;
      const l = (...e) => e.filter(e => e).join(" ")
    },
    31985(e, n, t) {
      t.d(n, {
        v: () => i
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

      function i(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const r = e[t];
          for (const e in r) {
            const t = n[e],
              i = r[e];
            "function" == typeof t && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = a(t, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof i ? "id" === e && t && i ? n.id = s(t, i) : n[e] = void 0 !== i ? i : t : n[e] = (0, o.clsx)(t, i)
          }
        }
        return n
      }
    }
  }
]);