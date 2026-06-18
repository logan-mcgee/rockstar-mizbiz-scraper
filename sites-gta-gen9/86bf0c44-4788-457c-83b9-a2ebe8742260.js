try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "86bf0c44-4788-457c-83b9-a2ebe8742260", e._sentryDebugIdIdentifier = "sentry-dbid-86bf0c44-4788-457c-83b9-a2ebe8742260")
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
  [1521], {
    90371(e, n, t) {
      t.d(n, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    74631(e, n, t) {
      t.d(n, {
        sL: () => h,
        UP: () => a,
        ic: () => l,
        iQ: () => f,
        Ub: () => s,
        jt: () => c,
        ZC: () => i,
        rl: () => p
      });
      var r = t(90371),
        o = t(93082);

      function s(e, {
        defaultValue: n = !1,
        initializeWithValue: t = !0
      } = {}) {
        const s = e => r.X || !window.matchMedia ? n : window.matchMedia(e).matches,
          [i, a] = (0, o.useState)(() => t ? s(e) : n);

        function c() {
          a(s(e))
        }
        return (0, o.useEffect)(() => {
          const n = window.matchMedia?.(e);
          return c(), n?.addListener ? n?.addListener(c) : n?.addEventListener("change", c), () => {
            n?.removeListener ? n?.removeListener(c) : n?.removeEventListener("change", c)
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
      const c = () => s("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function u(e) {
        const n = (0, o.useRef)(e);
        return (0, o.useEffect)(() => {
          n.current = e
        }), (0, o.useMemo)(() => (...e) => n.current?.(...e), [])
      }

      function l({
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
            i = u(n);
          return (0, o.useEffect)(() => {
            s.current !== r && (i(r), s.current = r)
          }, [r, s, i]), t
        }({
          defaultProp: n,
          onChange: t
        }), i = void 0 !== e, a = i ? e : r, c = u(t), l = (0, o.useCallback)(n => {
          if (i) {
            const t = "function" == typeof n ? n(e) : n;
            t !== e && c(t)
          } else s(n)
        }, [i, e, s, c]);
        return [a, l]
      }

      function d(e, n, t, r) {
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
      const f = ({
        ref: e,
        onChange: n,
        onFocusIn: t,
        onFocusOut: r,
        enabled: s = !0
      }) => {
        const [i, a] = (0, o.useState)(!1);
        return d("focusin", e => {
          a(!0), t?.(e), n?.(!0, e)
        }, e), d("focusout", e => {
          a(!1), r?.(e), n?.(!1, e)
        }, e), {
          isFocused: !!s && i
        }
      };

      function p(e = !0) {
        const n = s("screen and (pointer: coarse) and (hover: none)");
        return !!e && n
      }
      var y = t(32951),
        b = t(3436),
        g = t(31985);
      const h = ({
        inert: e,
        className: n,
        onClick: t,
        isLoading: r,
        ...o
      }, s) => {
        const {
          events: i,
          others: a
        } = (0, b.b)(o, {
          onPress: !1
        }), {
          buttonProps: c,
          isPressed: u
        } = (0, y.s)({
          ...a,
          elementType: "button",
          onPress: e => {
            r || (a.onPress?.(e) ?? t?.({
              ...e,
              currentTarget: e.target
            }))
          }
        }, s), l = {
          ...c,
          role: "button",
          "data-pressed": !e && u,
          "data-loading": r,
          "aria-busy": r
        };
        return {
          isPressed: !e && u,
          buttonProps: (0, g.v)(e ? {} : l, {
            ...i,
            className: n
          })
        }
      }
    },
    90067(e, n, t) {
      t.d(n, {
        DX: () => r.DX,
        xV: () => r.xV,
        s6: () => a
      });
      var r = t(38957),
        o = t(39793),
        s = t(93082),
        i = t(34376);
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
    3436(e, n, t) {
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
        for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (o.test(i) ? n ? t[i] = e[i] : s[i] = e[i] : r.test(i) ? t[i] = e[i] : s[i] = e[i]);
        return {
          events: t,
          others: s
        }
      }
    },
    31985(e, n, t) {
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
    50446(e, n, t) {
      t.d(n, {
        s: () => i,
        t: () => s
      });
      var r = t(93082);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function s(...e) {
        return n => {
          let t = !1;
          const r = e.map(e => {
            const r = o(e, n);
            return t || "function" != typeof r || (t = !0), r
          });
          if (t) return () => {
            for (let n = 0; n < r.length; n++) {
              const t = r[n];
              "function" == typeof t ? t() : o(e[n], null)
            }
          }
        }
      }

      function i(...e) {
        return r.useCallback(s(...e), e)
      }
    },
    4031(e, n, t) {
      t.d(n, {
        sG: () => i
      });
      var r = t(93082),
        o = (t(84017), t(38957)),
        s = t(39793),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, o.TL)(`Primitive.${n}`),
            i = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(a, {
                ...i,
                ref: r
              })
            });
          return i.displayName = `Primitive.${n}`, {
            ...e,
            [n]: i
          }
        }, {})
    },
    38957(e, n, t) {
      var r;
      t.d(n, {
        DX: () => d,
        TL: () => l,
        xV: () => b
      });
      var o = t(93082),
        s = t(50446),
        i = t(39793),
        a = Symbol.for("react.lazy"),
        c = (r || (r = t.t(o, 2)))[" use ".trim().toString()];

      function u(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === a && "_payload" in e && "object" == typeof(n = e._payload) && null !== n && "then" in n;
        var n
      }

      function l(e) {
        const n = f(e),
          t = o.forwardRef((e, t) => {
            let {
              children: r,
              ...s
            } = e;
            u(r) && "function" == typeof c && (r = c(r._payload));
            const a = o.Children.toArray(r),
              l = a.find(g);
            if (l) {
              const e = l.props.children,
                r = a.map(n => n === l ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : n);
              return (0, i.jsx)(n, {
                ...s,
                ref: t,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, i.jsx)(n, {
              ...s,
              ref: t,
              children: r
            })
          });
        return t.displayName = `${e}.Slot`, t
      }
      var d = l("Slot");

      function f(e) {
        const n = o.forwardRef((e, n) => {
          let {
            children: t,
            ...r
          } = e;
          if (u(t) && "function" == typeof c && (t = c(t._payload)), o.isValidElement(t)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = n && "isReactWarning" in n && n.isReactWarning;
                return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              i = function(e, n) {
                const t = {
                  ...n
                };
                for (const r in n) {
                  const o = e[r],
                    s = n[r];
                  /^on[A-Z]/.test(r) ? o && s ? t[r] = (...e) => {
                    const n = s(...e);
                    return o(...e), n
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...s
                  } : "className" === r && (t[r] = [o, s].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(r, t.props);
            return t.type !== o.Fragment && (i.ref = n ? (0, s.t)(n, e) : e), o.cloneElement(t, i)
          }
          return o.Children.count(t) > 1 ? o.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var p = Symbol("radix.slottable");

      function y(e) {
        const n = ({
          children: e
        }) => (0, i.jsx)(i.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = p, n
      }
      var b = y("Slottable");

      function g(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    34376(e, n, t) {
      t.d(n, {
        bL: () => c,
        s6: () => a
      });
      var r = t(93082),
        o = t(4031),
        s = t(39793),
        i = Object.freeze({
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
        a = r.forwardRef((e, n) => (0, s.jsx)(o.sG.span, {
          ...e,
          ref: n,
          style: {
            ...i,
            ...e.style
          }
        }));
      a.displayName = "VisuallyHidden";
      var c = a
    }
  }
]);