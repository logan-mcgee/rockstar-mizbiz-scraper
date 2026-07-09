try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e5b2b837-0bb0-46ed-a67b-56236e8fda32", e._sentryDebugIdIdentifier = "sentry-dbid-e5b2b837-0bb0-46ed-a67b-56236e8fda32")
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
        UP: () => i,
        ic: () => l,
        iQ: () => f,
        Ub: () => s,
        jt: () => u,
        ZC: () => a,
        rl: () => p
      });
      var r = t(87213),
        o = t(93082);

      function s(e, {
        defaultValue: n = !1,
        initializeWithValue: t = !0
      } = {}) {
        const s = e => r.X || !window.matchMedia ? n : window.matchMedia(e).matches,
          [a, i] = (0, o.useState)(() => t ? s(e) : n);

        function u() {
          i(s(e))
        }
        return (0, o.useEffect)(() => {
          const n = window.matchMedia?.(e);
          return u(), n?.addListener ? n?.addListener(u) : n?.addEventListener("change", u), () => {
            n?.removeListener ? n?.removeListener(u) : n?.removeEventListener("change", u)
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
      const u = () => s("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function c(e) {
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
            a = c(n);
          return (0, o.useEffect)(() => {
            s.current !== r && (a(r), s.current = r)
          }, [r, s, a]), t
        }({
          defaultProp: n,
          onChange: t
        }), a = void 0 !== e, i = a ? e : r, u = c(t), l = (0, o.useCallback)(n => {
          if (a) {
            const t = "function" == typeof n ? n(e) : n;
            t !== e && u(t)
          } else s(n)
        }, [a, e, s, u]);
        return [i, l]
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
        const [a, i] = (0, o.useState)(!1);
        return d("focusin", e => {
          i(!0), t?.(e), n?.(!0, e)
        }, e), d("focusout", e => {
          i(!1), r?.(e), n?.(!1, e)
        }, e), {
          isFocused: !!s && a
        }
      };

      function p(e = !0) {
        const n = s("screen and (pointer: coarse) and (hover: none)");
        return !!e && n
      }
      var y = t(32951),
        b = t(24442),
        g = t(71107);
      const h = ({
        inert: e,
        className: n,
        onClick: t,
        isLoading: r,
        ...o
      }, s) => {
        const {
          events: a,
          others: i
        } = (0, b.b)(o, {
          onPress: !1
        }), {
          buttonProps: u,
          isPressed: c
        } = (0, y.s)({
          ...i,
          elementType: "button",
          onPress: e => {
            r || (i.onPress?.(e) ?? t?.({
              ...e,
              currentTarget: e.target
            }))
          }
        }, s), l = {
          ...u,
          role: "button",
          "data-pressed": !e && c,
          "data-loading": r,
          "aria-busy": r
        };
        return {
          isPressed: !e && c,
          buttonProps: (0, g.v)(e ? {} : l, {
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
    50446(e, n, t) {
      t.d(n, {
        s: () => a,
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

      function a(...e) {
        return r.useCallback(s(...e), e)
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
    38957(e, n, t) {
      var r;
      t.d(n, {
        DX: () => d,
        TL: () => l,
        xV: () => b
      });
      var o = t(93082),
        s = t(50446),
        a = t(39793),
        i = Symbol.for("react.lazy"),
        u = (r || (r = t.t(o, 2)))[" use ".trim().toString()];

      function c(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === i && "_payload" in e && "object" == typeof(n = e._payload) && null !== n && "then" in n;
        var n
      }

      function l(e) {
        const n = f(e),
          t = o.forwardRef((e, t) => {
            let {
              children: r,
              ...s
            } = e;
            c(r) && "function" == typeof u && (r = u(r._payload));
            const i = o.Children.toArray(r),
              l = i.find(g);
            if (l) {
              const e = l.props.children,
                r = i.map(n => n === l ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : n);
              return (0, a.jsx)(n, {
                ...s,
                ref: t,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, a.jsx)(n, {
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
          if (c(t) && "function" == typeof u && (t = u(t._payload)), o.isValidElement(t)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = n && "isReactWarning" in n && n.isReactWarning;
                return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              a = function(e, n) {
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
            return t.type !== o.Fragment && (a.ref = n ? (0, s.t)(n, e) : e), o.cloneElement(t, a)
          }
          return o.Children.count(t) > 1 ? o.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var p = Symbol("radix.slottable");

      function y(e) {
        const n = ({
          children: e
        }) => (0, a.jsx)(a.Fragment, {
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
        bL: () => u,
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
      var u = i
    }
  }
]);