try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "229f9428-893d-47d6-a862-d6177694b8eb", e._sentryDebugIdIdentifier = "sentry-dbid-229f9428-893d-47d6-a862-d6177694b8eb")
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
  [1904], {
    32101(e, n, t) {
      const r = "undefined" == typeof window;
      t.d(n, ["X", 0, r])
    },
    22808(e, n, t) {
      t.d(n, {
        sL: () => m,
        UP: () => a,
        ic: () => u,
        iQ: () => l,
        Ub: () => s,
        jt: () => d,
        ZC: () => i,
        rl: () => p
      });
      var r = t(32101),
        o = t(93082);

      function s(e, {
        defaultValue: n = !1,
        initializeWithValue: t = !0
      } = {}) {
        const s = e => r.X || !window.matchMedia ? n : window.matchMedia(e).matches,
          [i, a] = (0, o.useState)(() => t ? s(e) : n);

        function d() {
          a(s(e))
        }
        return (0, o.useEffect)(() => {
          const n = window.matchMedia?.(e);
          return d(), n?.addListener ? n?.addListener(d) : n?.addEventListener("change", d), () => {
            n?.removeListener ? n?.removeListener(d) : n?.removeEventListener("change", d)
          }
        }, [e]), i
      }

      function i(e) {
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

      function a(...e) {
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
            i = c(n);
          return (0, o.useEffect)(() => {
            s.current !== r && (i(r), s.current = r)
          }, [r, s, i]), t
        }({
          defaultProp: n,
          onChange: t
        }), i = void 0 !== e, a = i ? e : r, d = c(t), u = (0, o.useCallback)(n => {
          if (i) {
            const t = "function" == typeof n ? n(e) : n;
            t !== e && d(t)
          } else s(n)
        }, [i, e, s, d]);
        return [a, u]
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
        const [i, a] = (0, o.useState)(!1);
        return f("focusin", e => {
          a(!0), t?.(e), n?.(!0, e)
        }, e), f("focusout", e => {
          a(!1), r?.(e), n?.(!1, e)
        }, e), {
          isFocused: !!s && i
        }
      };

      function p(e = !0) {
        const n = s("screen and (pointer: coarse) and (hover: none)");
        return !!e && n
      }
      var w = t(78061);
      const h = /^(on.*)$/,
        g = /^(onPress.*)$/;
      var b = t(64043);
      const m = ({
        inert: e,
        className: n,
        onClick: t,
        isLoading: r,
        ...o
      }, s) => {
        const {
          events: i,
          others: a
        } = function(e, {
          onPress: n
        } = {
          onPress: !0
        }) {
          const t = {},
            r = {};
          for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (g.test(o) ? n ? t[o] = e[o] : r[o] = e[o] : h.test(o) ? t[o] = e[o] : r[o] = e[o]);
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
          ...a,
          elementType: "button",
          onPress: e => {
            r || (a.onPress?.(e) ?? t?.({
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
          buttonProps: (0, b.v)(e ? {} : u, {
            ...i,
            className: n
          })
        }
      }
    },
    36421(e, n, t) {
      t.d(n, {
        X3: () => r.X,
        fi: () => s,
        IO: () => d,
        VW: () => l,
        v6: () => i.v,
        cJ: () => f
      });
      var r = t(32101);
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
      var i = t(64043);
      const a = "__FOUNDRY_ACCENT__",
        d = (e, n) => r.X ? n() : (window[a] || (window[a] = new Map), window[a].has(e) || window[a].set(e, n()), window[a].get(e));
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
    21297(e, n, t) {
      t.d(n, {
        DX: () => r.DX,
        xV: () => r.xV,
        s6: () => a
      });
      var r = t(93237),
        o = t(39793),
        s = t(93082),
        i = t(10333);
      const a = ({
        enabled: e = !0,
        ...n
      }) => {
        const t = e ? i.s6 : s.Fragment;
        return (0, o.jsx)(t, {
          ...n
        })
      }
    },
    64043(e, n, t) {
      t.d(n, {
        v: () => a
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

      function i(...e) {
        return (...n) => {
          for (const t of e) "function" == typeof t && t(...n)
        }
      }

      function a(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const o = e[t];
          for (const e in o) {
            const t = n[e],
              a = o[e];
            "function" == typeof t && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = i(t, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof a ? "id" === e && t && a ? n.id = s(t, a) : n[e] = void 0 !== a ? a : t : n[e] = (0, r.clsx)(t, a)
          }
        }
        return n
      }
    },
    658(e, n, t) {
      t.d(n, {
        hO: () => c,
        sG: () => d
      });
      var r = t(93082),
        o = t(84017),
        s = t(93237),
        i = t(39793),
        a = Object.defineProperty,
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, s.TL)(`Primitive.${n}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...s
              } = e, a = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
                ...s,
                ref: r
              })
            });
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }, {});

      function c(e, n) {
        e && o.flushSync(() => e.dispatchEvent(n))
      }
      a(c, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    10333(e, n, t) {
      t.d(n, {
        Qg: () => d,
        bL: () => u,
        s6: () => c
      });
      var r = t(93082),
        o = t(658),
        s = t(39793),
        i = Object.defineProperty,
        a = (e, n) => i(e, "name", {
          value: n,
          configurable: !0
        }),
        d = Object.freeze({
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
        c = r.forwardRef(a(function(e, n) {
          return (0, s.jsx)(o.sG.span, {
            ...e,
            ref: n,
            style: {
              ...d,
              ...e.style
            }
          })
        }, "VisuallyHidden")),
        u = c
    }
  }
]);