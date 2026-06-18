try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2fa94209-6f18-422b-81fe-623010a0d6e8", e._sentryDebugIdIdentifier = "sentry-dbid-2fa94209-6f18-422b-81fe-623010a0d6e8")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [1414], {
    90371(e, n, t) {
      t.d(n, {
        X: () => r
      });
      const r = "undefined" == typeof window
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
      var r = t(90371),
        o = t(93082);

      function s(e, {
        defaultValue: n = !1,
        initializeWithValue: t = !0
      } = {}) {
        const s = e => r.X || !window.matchMedia ? n : window.matchMedia(e).matches,
          [a, i] = (0, o.useState)(() => t ? s(e) : n);

        function d() {
          i(s(e))
        }
        return (0, o.useEffect)(() => {
          const n = window.matchMedia?.(e);
          return d(), n?.addListener ? n?.addListener(d) : n?.addEventListener("change", d), () => {
            n?.removeListener ? n?.removeListener(d) : n?.removeEventListener("change", d)
          }
        }, [e]), a
      }

      function a(e) {
        const n = (0, o.useRef)({
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
        const n = (0, o.useRef)(null);
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
        const n = (0, o.useRef)(e);
        return (0, o.useEffect)(() => {
          n.current = e
        }), (0, o.useMemo)(() => (...e) => n.current?.(...e), [])
      }

      function u({
        prop: e,
        defaultProp: n,
        onChange: t = () => {}
      }) {
        const [r, s] = function({
          defaultProp: e,
          onChange: n
        }) {
          const t = (0, o.useState)(e),
            [r] = t,
            s = (0, o.useRef)(r),
            a = c(n);
          return (0, o.useEffect)(() => {
            s.current !== r && (a(r), s.current = r)
          }, [r, s, a]), t
        }({
          defaultProp: n,
          onChange: t
        }), a = void 0 !== e, i = a ? e : r, d = c(t), u = (0, o.useCallback)(n => {
          if (a) {
            const t = "function" == typeof n ? n(e) : n;
            t !== e && d(t)
          } else s(n)
        }, [a, e, s, d]);
        return [i, u]
      }

      function f(e, n, t, r) {
        const s = (0, o.useRef)(n);
        (0, o.useEffect)(() => {
          s.current = n
        }, [n]), (0, o.useEffect)(() => {
          const n = t?.current ?? window;
          if (!n || !n.addEventListener) return;
          const o = e => {
            s.current(e)
          };
          return n.addEventListener(e, o, r), () => {
            n.removeEventListener(e, o, r)
          }
        }, [e, t?.current, r])
      }
      const l = ({
        ref: e,
        onChange: n,
        onFocusIn: t,
        onFocusOut: r,
        enabled: s = !0
      }) => {
        const [a, i] = (0, o.useState)(!1);
        return f("focusin", e => {
          i(!0), t?.(e), n?.(!0, e)
        }, e), f("focusout", e => {
          i(!1), r?.(e), n?.(!1, e)
        }, e), {
          isFocused: !!s && a
        }
      };

      function p(e = !0) {
        const n = s("screen and (pointer: coarse) and (hover: none)");
        return !!e && n
      }
      var w = t(32951);
      const b = /^(on.*)$/,
        h = /^(onPress.*)$/;
      var g = t(31985);
      const m = ({
        inert: e,
        className: n,
        onClick: t,
        isLoading: r,
        ...o
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
            r = {};
          for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (h.test(o) ? n ? t[o] = e[o] : r[o] = e[o] : b.test(o) ? t[o] = e[o] : r[o] = e[o]);
          return {
            events: t,
            others: r
          }
        }(o, {
          onPress: !1
        }), {
          buttonProps: d,
          isPressed: c
        } = (0, w.s)({
          ...i,
          elementType: "button",
          onPress: e => {
            r || (i.onPress?.(e) ?? t?.({
              ...e,
              currentTarget: e.target
            }))
          }
        }, s), u = {
          ...d,
          role: "button",
          "data-pressed": !e && c,
          "data-loading": r,
          "aria-busy": r
        };
        return {
          isPressed: !e && c,
          buttonProps: (0, g.v)(e ? {} : u, {
            ...a,
            className: n
          })
        }
      }
    },
    27859(e, n, t) {
      t.d(n, {
        X3: () => r.X,
        fi: () => s,
        IO: () => d,
        VW: () => l,
        v6: () => a.v,
        cJ: () => f
      });
      var r = t(90371);
      const o = e => e - .02,
        s = {
          mobile: `(min-width: 0px) and (max-width: ${o(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${o(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${o(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${o(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var a = t(31985);
      const i = "__FOUNDRY_ACCENT__",
        d = (e, n) => r.X ? n() : (window[i] || (window[i] = new Map), window[i].has(e) || window[i].set(e, n()), window[i].get(e));
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
    90067(e, n, t) {
      t.d(n, {
        DX: () => r.DX,
        xV: () => r.xV,
        s6: () => i
      });
      var r = t(38957),
        o = t(39793),
        s = t(93082),
        a = t(34376);
      const i = ({
        enabled: e = !0,
        ...n
      }) => {
        const t = e ? a.s6 : s.Fragment;
        return (0, o.jsx)(t, {
          ...n
        })
      }
    },
    31985(e, n, t) {
      t.d(n, {
        v: () => i
      });
      var r = t(81270);
      const o = new Map;

      function s(e, n) {
        if (e === n) return e;
        const t = o.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const r = o.get(n);
        return r ? (r.forEach(n => n(e)), e) : n
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
          const o = e[t];
          for (const e in o) {
            const t = n[e],
              i = o[e];
            "function" == typeof t && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = a(t, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof i ? "id" === e && t && i ? n.id = s(t, i) : n[e] = void 0 !== i ? i : t : n[e] = (0, r.clsx)(t, i)
          }
        }
        return n
      }
    },
    4031(e, n, t) {
      t.d(n, {
        sG: () => a
      });
      var r = t(93082),
        o = (t(84017), t(38957)),
        s = t(39793),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, o.TL)(`Primitive.${n}`),
            a = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, i = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(i, {
                ...a,
                ref: r
              })
            });
          return a.displayName = `Primitive.${n}`, {
            ...e,
            [n]: a
          }
        }, {})
    },
    34376(e, n, t) {
      t.d(n, {
        bL: () => d,
        s6: () => i
      });
      var r = t(93082),
        o = t(4031),
        s = t(39793),
        a = Object.freeze({
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
        i = r.forwardRef((e, n) => (0, s.jsx)(o.sG.span, {
          ...e,
          ref: n,
          style: {
            ...a,
            ...e.style
          }
        }));
      i.displayName = "VisuallyHidden";
      var d = i
    }
  }
]);