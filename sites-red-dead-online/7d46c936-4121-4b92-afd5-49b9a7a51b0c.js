try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7d46c936-4121-4b92-afd5-49b9a7a51b0c", e._sentryDebugIdIdentifier = "sentry-dbid-7d46c936-4121-4b92-afd5-49b9a7a51b0c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [6705], {
    87213(e, n, t) {
      t.d(n, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    56601(e, n, t) {
      t.d(n, {
        sL: () => h,
        UP: () => d,
        ic: () => c,
        iQ: () => l,
        Ub: () => s,
        jt: () => i,
        ZC: () => a,
        rl: () => b
      });
      var r = t(87213),
        o = t(93082);

      function s(e, {
        defaultValue: n = !1,
        initializeWithValue: t = !0
      } = {}) {
        const s = e => r.X || !window.matchMedia ? n : window.matchMedia(e).matches,
          [a, d] = (0, o.useState)(() => t ? s(e) : n);

        function i() {
          d(s(e))
        }
        return (0, o.useEffect)(() => {
          const n = window.matchMedia?.(e);
          return i(), n?.addListener ? n?.addListener(i) : n?.addEventListener("change", i), () => {
            n?.removeListener ? n?.removeListener(i) : n?.removeEventListener("change", i)
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

      function d(...e) {
        const n = (0, o.useRef)(null);
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

      function u(e) {
        const n = (0, o.useRef)(e);
        return (0, o.useEffect)(() => {
          n.current = e
        }), (0, o.useMemo)(() => (...e) => n.current?.(...e), [])
      }

      function c({
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
            a = u(n);
          return (0, o.useEffect)(() => {
            s.current !== r && (a(r), s.current = r)
          }, [r, s, a]), t
        }({
          defaultProp: n,
          onChange: t
        }), a = void 0 !== e, d = a ? e : r, i = u(t), c = (0, o.useCallback)(n => {
          if (a) {
            const t = "function" == typeof n ? n(e) : n;
            t !== e && i(t)
          } else s(n)
        }, [a, e, s, i]);
        return [d, c]
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
        const [a, d] = (0, o.useState)(!1);
        return f("focusin", e => {
          d(!0), t?.(e), n?.(!0, e)
        }, e), f("focusout", e => {
          d(!1), r?.(e), n?.(!1, e)
        }, e), {
          isFocused: !!s && a
        }
      };

      function b(e = !0) {
        const n = s("screen and (pointer: coarse) and (hover: none)");
        return !!e && n
      }
      var p = t(32951),
        g = t(24442),
        y = t(71107);
      const h = ({
        inert: e,
        className: n,
        onClick: t,
        isLoading: r,
        ...o
      }, s) => {
        const {
          events: a,
          others: d
        } = (0, g.b)(o, {
          onPress: !1
        }), {
          buttonProps: i,
          isPressed: u
        } = (0, p.s)({
          ...d,
          elementType: "button",
          onPress: e => {
            r || (d.onPress?.(e) ?? t?.({
              ...e,
              currentTarget: e.target
            }))
          }
        }, s), c = {
          ...i,
          role: "button",
          "data-pressed": !e && u,
          "data-loading": r,
          "aria-busy": r
        };
        return {
          isPressed: !e && u,
          buttonProps: (0, y.v)(e ? {} : c, {
            ...a,
            className: n
          })
        }
      }
    },
    30377(e, n, t) {
      t.d(n, {
        DX: () => r.DX,
        xV: () => r.xV,
        s6: () => d
      });
      var r = t(38957),
        o = t(39793),
        s = t(93082),
        a = t(34376);
      const d = ({
        enabled: e = !0,
        ...n
      }) => {
        const t = e ? a.s6 : s.Fragment;
        return (0, o.jsx)(t, {
          ...n
        })
      }
    },
    24442(e, n, t) {
      t.d(n, {
        b: () => s
      });
      const r = /^(on.*)$/,
        o = /^(onPress.*)$/;

      function s(e, {
        onPress: n
      } = {
        onPress: !0
      }) {
        const t = {},
          s = {};
        for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && (o.test(a) ? n ? t[a] = e[a] : s[a] = e[a] : r.test(a) ? t[a] = e[a] : s[a] = e[a]);
        return {
          events: t,
          others: s
        }
      }
    },
    71107(e, n, t) {
      t.d(n, {
        v: () => d
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

      function d(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const o = e[t];
          for (const e in o) {
            const t = n[e],
              d = o[e];
            "function" == typeof t && "function" == typeof d && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = a(t, d) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof d ? "id" === e && t && d ? n.id = s(t, d) : n[e] = void 0 !== d ? d : t : n[e] = (0, r.clsx)(t, d)
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
              } = e, d = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(d, {
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
        bL: () => i,
        s6: () => d
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
        d = r.forwardRef((e, n) => (0, s.jsx)(o.sG.span, {
          ...e,
          ref: n,
          style: {
            ...a,
            ...e.style
          }
        }));
      d.displayName = "VisuallyHidden";
      var i = d
    }
  }
]);