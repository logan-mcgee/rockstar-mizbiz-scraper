try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0312cfd9-62b8-43cf-adc7-d9a447f5c94e", e._sentryDebugIdIdentifier = "sentry-dbid-0312cfd9-62b8-43cf-adc7-d9a447f5c94e")
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
  [6258], {
    13899(e, n, t) {
      const o = "undefined" == typeof window;
      t.d(n, ["X", 0, o])
    },
    73674(e, n, t) {
      t.d(n, {
        sL: () => m,
        UP: () => d,
        ic: () => u,
        iQ: () => l,
        Ub: () => s,
        jt: () => i,
        ZC: () => a,
        rl: () => p
      });
      var o = t(13899),
        r = t(93082);

      function s(e, {
        defaultValue: n = !1,
        initializeWithValue: t = !0
      } = {}) {
        const s = e => o.X || !window.matchMedia ? n : window.matchMedia(e).matches,
          [a, d] = (0, r.useState)(() => t ? s(e) : n);

        function i() {
          d(s(e))
        }
        return (0, r.useEffect)(() => {
          const n = window.matchMedia?.(e);
          return i(), n?.addListener ? n?.addListener(i) : n?.addEventListener("change", i), () => {
            n?.removeListener ? n?.removeListener(i) : n?.removeEventListener("change", i)
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
      const i = () => s("(prefers-reduced-motion: reduce)", {
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
        }), a = void 0 !== e, d = a ? e : o, i = c(t), u = (0, r.useCallback)(n => {
          if (a) {
            const t = "function" == typeof n ? n(e) : n;
            t !== e && i(t)
          } else s(n)
        }, [a, e, s, i]);
        return [d, u]
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
      var w = t(65756);
      const g = /^(on.*)$/,
        h = /^(onPress.*)$/;
      var b = t(96297);
      const m = ({
        inert: e,
        className: n,
        onClick: t,
        isLoading: o,
        ...r
      }, s) => {
        const {
          events: a,
          others: d
        } = function(e, {
          onPress: n
        } = {
          onPress: !0
        }) {
          const t = {},
            o = {};
          for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (h.test(r) ? n ? t[r] = e[r] : o[r] = e[r] : g.test(r) ? t[r] = e[r] : o[r] = e[r]);
          return {
            events: t,
            others: o
          }
        }(r, {
          onPress: !1
        }), {
          buttonProps: i,
          isPressed: c
        } = (0, w.s)({
          ...d,
          elementType: "button",
          onPress: e => {
            o || (d.onPress?.(e) ?? t?.({
              ...e,
              currentTarget: e.target
            }))
          }
        }, s), u = {
          ...i,
          role: "button",
          "data-pressed": !e && c,
          "data-loading": o,
          "aria-busy": o
        };
        return {
          isPressed: !e && c,
          buttonProps: (0, b.v)(e ? {} : u, {
            ...a,
            className: n
          })
        }
      }
    },
    25739(e, n, t) {
      t.d(n, {
        X3: () => o.X,
        fi: () => s,
        IO: () => i,
        VW: () => l,
        v6: () => a.v,
        cJ: () => f
      });
      var o = t(13899);
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
      var a = t(96297);
      const d = "__FOUNDRY_ACCENT__",
        i = (e, n) => o.X ? n() : (window[d] || (window[d] = new Map), window[d].has(e) || window[d].set(e, n()), window[d].get(e));
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
    96297(e, n, t) {
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