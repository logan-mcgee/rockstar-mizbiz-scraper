try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b9c297e6-6c44-4783-a1a1-b489f404f084", e._sentryDebugIdIdentifier = "sentry-dbid-b9c297e6-6c44-4783-a1a1-b489f404f084")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [8838], {
    33043: (e, t, r) => {
      r.r(t), r.d(t, {
        Alert: () => a,
        AlertBanner: () => s,
        Body: () => H,
        Breadcrumbs: () => c,
        Button: () => uo,
        Checkbox: () => s_,
        Code: () => Ow,
        Display: () => fw,
        Divider: () => Y_,
        Dropdown: () => zb,
        Heading: () => E,
        IconButton: () => sp,
        Label: () => _w,
        Lightbox: () => Kv,
        Loader: () => Hw,
        Option: () => Fb,
        RadioButton: () => U_,
        RadioContext: () => R_,
        RadioGroup: () => I_,
        Switch: () => hw,
        Tag: () => l,
        Text: () => A,
        TextArea: () => Ht,
        TextField: () => i,
        TextSemantics: () => j,
        Tooltip: () => Jm
      });
      var n = {};
      r.r(n), r.d(n, {
        CheckLG: () => Gb,
        CheckMD: () => Ub,
        CheckXL: () => qb,
        DashLG: () => Wb,
        DashMD: () => Xb,
        DashXL: () => Kb
      });
      var o = {};
      r.r(o), r.d(o, {
        DotLG: () => M_,
        DotMD: () => D_,
        DotXL: () => B_
      });
      var i = {};
      r.r(i), r.d(i, {
        Button: () => Vx,
        Control: () => Hx,
        Description: () => Gx,
        Hint: () => Bx,
        Icon: () => Fx,
        Input: () => zx,
        Label: () => Mx,
        PasswordButton: () => Ux,
        Root: () => Dx
      });
      var a = {};
      r.r(a), r.d(a, {
        Body: () => iE,
        CloseButton: () => fE,
        Description: () => cE,
        ErrorText: () => hE,
        Footer: () => dE,
        Header: () => oE,
        Icon: () => sE,
        Link: () => uE,
        Root: () => nE,
        RootContext: () => tE,
        Title: () => lE,
        iconStatusMap: () => aE,
        useAlertContext: () => rE
      });
      var s = {};
      r.r(s), r.d(s, {
        Alert: () => pS,
        CloseButton: () => vS,
        Description: () => fS,
        Icon: () => hS,
        Link: () => gS,
        PaginationCounter: () => wS,
        PaginationNav: () => yS,
        PaginationNextButton: () => bS,
        PaginationPrevButton: () => _S,
        PaginationViewport: () => mS,
        Root: () => uS,
        RootContext: () => lS,
        iconStatusMap: () => dS,
        useAlertBannerContext: () => cS
      });
      var l = {};
      r.r(l), r.d(l, {
        CloseButton: () => IS,
        Icon: () => RS,
        Label: () => NS,
        Root: () => LS,
        RootContext: () => jS,
        useTagContext: () => AS
      });
      var c = {};
      r.r(c), r.d(c, {
        Icon: () => $S,
        Item: () => KS,
        OverflowMenu: () => YS,
        OverflowMenuItem: () => ZS,
        Root: () => WS,
        RootContext: () => XS,
        useBreadcrumbsContext: () => qS
      });
      var u = r(25854),
        d = r(38763),
        h = r(62229),
        f = r.n(h),
        p = r(30109);

      function m(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? g(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = m(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function y(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var b, _, w = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        x = (b = {
          defaultClassName: "foundry_hcgxh_vsn8np0",
          variantClassNames: {
            level: {
              1: "foundry_hcgxh_tdsdcd2 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd4",
              2: "foundry_hcgxh_tdsdcd2 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd5",
              3: "foundry_hcgxh_tdsdcd2 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd6",
              4: "foundry_hcgxh_tdsdcd2 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd7",
              5: "foundry_hcgxh_tdsdcd2 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd8",
              6: "foundry_hcgxh_tdsdcd2 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, _ = e => {
          var t = b.defaultClassName,
            r = v(v({}, b.defaultVariants), e);
          for (var n in r) {
            var o, i = null !== (o = r[n]) && void 0 !== o ? o : b.defaultVariants[n];
            if (null != i) {
              var a = i;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var s = b.variantClassNames[n][a];
              s && (t += " " + s)
            }
          }
          for (var [l, c] of b.compoundVariants) w(l, r, b.defaultVariants) && (t += " " + c);
          return t
        }, _.variants = () => Object.keys(b.variantClassNames), _.classNames = {
          get base() {
            return b.defaultClassName.split(" ")[0]
          },
          get variants() {
            return y(b.variantClassNames, (e => y(e, (e => e.split(" ")[0]))))
          }
        }, _);
      const E = (0, h.forwardRef)((({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const i = e ? p.DX : `h${t}`,
          a = (0, d.v6)(n, {
            className: x({
              level: t
            })
          });
        return (0, u.jsx)(i, {
          ref: o,
          "data-testid": r,
          ...a
        })
      }));

      function S(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function C(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? C(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = S(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function O(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var T = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        k = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = P(P({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) T(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return O(e.variantClassNames, (e => O(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_hcgxh_12nwidl0",
          variantClassNames: {
            semantic: {
              abbr: "foundry_hcgxh_12nwidl1",
              cite: "foundry_hcgxh_12nwidl2",
              emphasis: "foundry_hcgxh_12nwidl3",
              idiomatic: "foundry_hcgxh_12nwidl4",
              mark: "foundry_hcgxh_12nwidl5",
              "strike-through": "foundry_hcgxh_12nwidl6",
              strong: "foundry_hcgxh_12nwidl7",
              sub: "foundry_hcgxh_12nwidl8",
              sup: "foundry_hcgxh_12nwidl9",
              underline: "foundry_hcgxh_12nwidla",
              default: "foundry_hcgxh_12nwidlb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const j = {
          abbr: "abbr",
          cite: "cite",
          emphasis: "em",
          idiomatic: "i",
          mark: "mark",
          "strike-through": "s",
          strong: "strong",
          sub: "sub",
          sup: "sup",
          underline: "u",
          default: "span"
        },
        A = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const i = e ? p.DX : j[r] || "span",
            a = (0, d.v6)(n, {
              className: k({
                semantic: r
              })
            });
          return (0, u.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }));
      var L = r(68879);

      function N(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function R(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? R(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = N(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : R(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function D(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var M = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        B = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = I(I({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) M(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return D(e.variantClassNames, (e => D(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_hcgxh_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdw",
              MD: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx",
              SM: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdy",
              XS: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz"
            },
            appearance: {
              default: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd10",
              bold: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd11",
              hyperlink: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const H = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const a = e ? p.DX : "p",
          s = (0, d.v6)({
            className: B({
              size: n,
              appearance: r
            })
          }, o);
        return (0, u.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      }));
      var z = r(23299),
        F = r(67915);

      function V(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => F.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, i] = (0, h.useState)((() => r ? n(e) : t));

        function a() {
          i(n(e))
        }
        return (0, h.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return a(), t?.addListener ? t?.addListener(a) : t?.addEventListener("change", a), () => {
            t?.removeListener ? t?.removeListener(a) : t?.removeEventListener("change", a)
          }
        }), [e]), o
      }

      function U(e) {
        const t = (0, h.useRef)({
            value: e,
            prev: void 0
          }),
          r = t.current.value;
        return e !== r && (t.current = {
          value: e,
          prev: r
        }), t.current.prev
      }

      function G(...e) {
        const t = (0, h.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      const q = () => V("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function X(e) {
        const t = (0, h.useRef)(e);
        return (0, h.useEffect)((() => {
          t.current = e
        })), (0, h.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      const W = ({
        activity: e,
        leave: t,
        enabled: r = !0
      }) => {
        const n = (0, h.useRef)(),
          [o, i] = (0, h.useState)(!1),
          a = (0, h.useCallback)((() => {
            i(!0)
          }), []),
          s = (0, h.useCallback)((() => {
            let t = 0;
            return (...r) => {
              const o = Date.now();
              o - t >= 500 && (t = o, (() => {
                i(!1), window.clearTimeout(n.current), n.current = window.setTimeout(a, e)
              })(...r))
            }
          })(), []),
          l = (0, h.useCallback)((() => {
            window.clearTimeout(n.current), n.current = window.setTimeout(a, t)
          }), []),
          c = (0, h.useCallback)((() => {
            document.hidden || s()
          }), []);
        return (0, h.useEffect)((() => {
          const e = () => {
            window.removeEventListener("mousemove", s), window.removeEventListener("mousedown", s), window.removeEventListener("resize", s), window.removeEventListener("keydown", s), window.removeEventListener("touchstart", s), window.removeEventListener("wheel", s), document.removeEventListener("mouseleave", l), document.removeEventListener("visibilitychange", c), window.clearTimeout(n.current), i(!1)
          };
          return r ? (window.addEventListener("mousemove", s), window.addEventListener("mousedown", s), window.addEventListener("resize", s), window.addEventListener("keydown", s), window.addEventListener("touchstart", s), window.addEventListener("wheel", s), document.addEventListener("mouseleave", l), document.addEventListener("visibilitychange", c), s()) : e(), () => e()
        }), [r]), {
          isIdle: o
        }
      };

      function K({
        prop: e,
        defaultProp: t,
        onChange: r = () => {}
      }) {
        const [n, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const r = (0, h.useState)(e),
            [n] = r,
            o = (0, h.useRef)(n),
            i = X(t);
          return (0, h.useEffect)((() => {
            o.current !== n && (i(n), o.current = n)
          }), [n, o, i]), r
        }({
          defaultProp: t,
          onChange: r
        }), i = void 0 !== e, a = i ? e : n, s = X(r), l = (0, h.useCallback)((t => {
          if (i) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && s(r)
          } else o(t)
        }), [i, e, o, s]);
        return [a, l]
      }

      function $(e, t, r, n) {
        const o = (0, h.useRef)(t);
        (0, h.useEffect)((() => {
          o.current = t
        }), [t]), (0, h.useEffect)((() => {
          const t = r?.current ?? window;
          if (!t || !t.addEventListener) return;
          const i = e => {
            o.current(e)
          };
          return t.addEventListener(e, i, n), () => {
            t.removeEventListener(e, i, n)
          }
        }), [e, r?.current, n])
      }

      function Y(e = !0) {
        const t = V("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }
      const Z = (e, t = []) => {
          const r = (0, h.useRef)(!1);
          (0, h.useEffect)((() => (r.current = !0, () => {
            r.current = !1
          })), []), (0, h.useEffect)((() => {
            r.current && e()
          }), [...t])
        },
        Q = new Set(["id"]),
        J = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        ee = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        te = /^(data-.*)$/;

      function re(e, t = {}) {
        let {
          labelable: r,
          isLink: n,
          propNames: o
        } = t, i = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (Q.has(t) || r && J.has(t) || n && ee.has(t) || (null == o ? void 0 : o.has(t)) || te.test(t)) && (i[t] = e[t]);
        return i
      }
      const ne = "undefined" != typeof document ? h.useLayoutEffect : () => {};

      function oe(e) {
        const t = (0, h.useRef)(null);
        return ne((() => {
          t.current = e
        }), [e]), (0, h.useCallback)(((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }), [])
      }

      function ie(e, t, r) {
        let n = (0, h.useRef)(t),
          o = oe((() => {
            r && r(n.current)
          }));
        (0, h.useEffect)((() => {
          var t;
          let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == r || r.addEventListener("reset", o), () => {
            null == r || r.removeEventListener("reset", o)
          }
        }), [e, o])
      }
      const ae = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        se = e => e && "window" in e && e.window === e ? e : ae(e).defaultView || window;

      function le(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      const ce = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        ue = h.createContext(ce),
        de = h.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let he = new WeakMap;
      const fe = "function" == typeof h.useId ? function(e) {
        let t = h.useId(),
          [r] = (0, h.useState)(ve());
        return e || `${r?"react-aria":`react-aria${ce.prefix}`}-${t}`
      } : function(e) {
        let t = (0, h.useContext)(ue),
          r = function(e = !1) {
            let t = (0, h.useContext)(ue),
              r = (0, h.useRef)(null);
            if (null === r.current && !e) {
              var n, o;
              let e = null === (o = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = he.get(e);
                null == r ? he.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, he.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
      };

      function pe() {
        return !1
      }

      function me() {
        return !0
      }

      function ge(e) {
        return () => {}
      }

      function ve() {
        return "function" == typeof h.useSyncExternalStore ? h.useSyncExternalStore(ge, pe, me) : (0, h.useContext)(de)
      }
      let ye, be = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        _e = new Map;

      function we(e) {
        let [t, r] = (0, h.useState)(e), n = (0, h.useRef)(null), o = fe(t), i = (0, h.useRef)(null);
        if (ye && ye.register(i, o), be) {
          const e = _e.get(o);
          e && !e.includes(n) ? e.push(n) : _e.set(o, [n])
        }
        return ne((() => {
          let e = o;
          return () => {
            ye && ye.unregister(i), _e.delete(e)
          }
        }), [o]), (0, h.useEffect)((() => {
          let e = n.current;
          return e && r(e), () => {
            e && (n.current = null)
          }
        })), o
      }

      function xe(e, t) {
        if (e === t) return e;
        let r = _e.get(e);
        if (r) return r.forEach((e => e.current = t)), t;
        let n = _e.get(t);
        return n ? (n.forEach((t => t.current = e)), e) : t
      }

      function Ee(e = []) {
        let t = we(),
          [r, n] = function(e) {
            let [t, r] = (0, h.useState)(e), n = (0, h.useRef)(null), o = oe((() => {
              if (!n.current) return;
              let e = n.current.next();
              e.done ? n.current = null : t === e.value ? o() : r(e.value)
            }));
            ne((() => {
              n.current && o()
            }));
            let i = oe((e => {
              n.current = e(t), o()
            }));
            return [t, i]
          }(t),
          o = (0, h.useCallback)((() => {
            n((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, n]);
        return ne(o, [t, o, ...e]), r
      }

      function Se(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = le(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = xe(r, o) : t[e] = void 0 !== o ? o : r : t[e] = (0, L.A)(r, o)
          }
        }
        return t
      }

      function Ce(e, t, r) {
        let [n, o] = (0, h.useState)(e || t), i = (0, h.useRef)(void 0 !== e), a = void 0 !== e;
        (0, h.useEffect)((() => {
          i.current, i.current = a
        }), [a]);
        let s = a ? e : n,
          l = (0, h.useCallback)(((e, ...t) => {
            let n = (e, ...t) => {
              r && (Object.is(s, e) || r(e, ...t)), a || (s = e)
            };
            "function" == typeof e ? o(((r, ...o) => {
              let i = e(a ? s : r, ...o);
              return n(i, ...t), a ? r : i
            })) : (a || o(e), n(e, ...t))
          }), [a, s, r]);
        return [s, l]
      }

      function Pe(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = we(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function Oe(e) {
        let {
          description: t,
          errorMessage: r,
          isInvalid: n,
          validationState: o
        } = e, {
          labelProps: i,
          fieldProps: a
        } = function(e) {
          let {
            id: t,
            label: r,
            "aria-labelledby": n,
            "aria-label": o,
            labelElementType: i = "label"
          } = e;
          t = we(t);
          let a = we(),
            s = {};
          return r && (n = n ? `${a} ${n}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: s,
            fieldProps: Pe({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), s = Ee([Boolean(t), Boolean(r), n, o]), l = Ee([Boolean(t), Boolean(r), n, o]);
        return a = Se(a, {
          "aria-describedby": [s, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: i,
          fieldProps: a,
          descriptionProps: {
            id: s
          },
          errorMessageProps: {
            id: l
          }
        }
      }
      "undefined" != typeof FinalizationRegistry && (ye = new FinalizationRegistry((e => {
        _e.delete(e)
      })));
      const Te = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        ke = Te.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      Te.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const je = Te.join(':not([hidden]):not([tabindex="-1"]),');

      function Ae(e) {
        return e.matches(ke)
      }

      function Le(e) {
        return e.matches(je)
      }

      function Ne(e) {
        if (function() {
            if (null == Re) {
              Re = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Re = !0, !0
                  }
                })
              } catch {}
            }
            return Re
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              r = [],
              n = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== n;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return n instanceof HTMLElement && r.push({
              element: n,
              scrollTop: n.scrollTop,
              scrollLeft: n.scrollLeft
            }), r
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: r,
                  scrollLeft: n
                }
                of e) t.scrollTop = r, t.scrollLeft = n
            }(t)
        }
      }
      let Re = null;

      function Ie(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function De(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function Me(e) {
        let t = (0, h.useRef)({
          isFocused: !1,
          observer: null
        });
        ne((() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }), []);
        let r = oe((t => {
          null == e || e(t)
        }));
        return (0, h.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let n = e.target,
              o = e => {
                if (t.current.isFocused = !1, n.disabled) {
                  let t = Ie(e);
                  r(t)
                }
                t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            n.addEventListener("focusout", o, {
              once: !0
            }), t.current.observer = new MutationObserver((() => {
              if (t.current.isFocused && n.disabled) {
                var e;
                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                let r = n === document.activeElement ? null : document.activeElement;
                n.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: r
                })), n.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: r
                }))
              }
            })), t.current.observer.observe(n, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }), [r])
      }
      let Be = !1;

      function He(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function ze(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Fe(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Ve = Fe((function() {
          return ze(/^Mac/i)
        })),
        Ue = Fe((function() {
          return ze(/^iPhone/i)
        })),
        Ge = Fe((function() {
          return ze(/^iPad/i) || Ve() && navigator.maxTouchPoints > 1
        })),
        qe = Fe((function() {
          return Ue() || Ge()
        })),
        Xe = (Fe((function() {
          return Ve() || qe()
        })), Fe((function() {
          return He(/AppleWebKit/i) && !We()
        }))),
        We = Fe((function() {
          return He(/Chrome/i)
        })),
        Ke = Fe((function() {
          return He(/Android/i)
        })),
        $e = Fe((function() {
          return He(/Firefox/i)
        }));

      function Ye(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (Ke() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let Ze = null,
        Qe = new Set,
        Je = new Map,
        et = !1,
        tt = !1;

      function rt(e, t) {
        for (let r of Qe) r(e, t)
      }

      function nt(e) {
        et = !0,
          function(e) {
            return !(e.metaKey || !Ve() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Ze = "keyboard", rt("keyboard", e))
      }

      function ot(e) {
        Ze = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (et = !0, rt("pointer", e))
      }

      function it(e) {
        Ye(e) && (et = !0, Ze = "virtual")
      }

      function at(e) {
        e.target !== window && e.target !== document && !Be && e.isTrusted && (et || tt || (Ze = "virtual", rt("virtual", e)), et = !1, tt = !1)
      }

      function st() {
        Be || (et = !1, tt = !0)
      }

      function lt(e) {
        if ("undefined" == typeof window || Je.get(se(e))) return;
        const t = se(e),
          r = ae(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          et = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", nt, !0), r.addEventListener("keyup", nt, !0), r.addEventListener("click", it, !0), t.addEventListener("focus", at, !0), t.addEventListener("blur", st, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", ot, !0), r.addEventListener("pointermove", ot, !0), r.addEventListener("pointerup", ot, !0)), t.addEventListener("beforeunload", (() => {
          ct(e)
        }), {
          once: !0
        }), Je.set(t, {
          focus: n
        })
      }
      const ct = (e, t) => {
        const r = se(e),
          n = ae(e);
        t && n.removeEventListener("DOMContentLoaded", t), Je.has(r) && (r.HTMLElement.prototype.focus = Je.get(r).focus, n.removeEventListener("keydown", nt, !0), n.removeEventListener("keyup", nt, !0), n.removeEventListener("click", it, !0), r.removeEventListener("focus", at, !0), r.removeEventListener("blur", st, !1), "undefined" != typeof PointerEvent && (n.removeEventListener("pointerdown", ot, !0), n.removeEventListener("pointermove", ot, !0), n.removeEventListener("pointerup", ot, !0)), Je.delete(r))
      };
      "undefined" != typeof document && function(e) {
        const t = ae(e);
        let r;
        "loading" !== t.readyState ? lt(e) : (r = () => {
          lt(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function ut(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      const dt = (e = document) => e.activeElement;

      function ht(e) {
        return e.target
      }
      let ft = new Map,
        pt = new Set;

      function mt() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = ft.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), ft.delete(r.target)), 0 === ft.size)) {
            for (let e of pt) e();
            pt.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!e(r) || !r.target) return;
          let n = ft.get(r.target);
          n || (n = new Set, ft.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function gt(e) {
        requestAnimationFrame((() => {
          0 === ft.size ? e() : pt.add(e)
        }))
      }

      function vt(e) {
        if (!e) return;
        let t = !0;
        return r => {
          let n = {
            ...r,
            preventDefault() {
              r.preventDefault()
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              t = !0
            },
            continuePropagation() {
              t = !1
            },
            isPropagationStopped: () => t
          };
          e(n), t && r.stopPropagation()
        }
      }

      function yt(e, t) {
        ne((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? mt() : document.addEventListener("DOMContentLoaded", mt));
      let bt = h.createContext(null);

      function _t(e, t) {
        let {
          focusProps: r
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: r,
            onBlur: n,
            onFocusChange: o
          } = e;
          const i = (0, h.useCallback)((e => {
              if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
            }), [n, o]),
            a = Me(i),
            s = (0, h.useCallback)((e => {
              const t = ae(e.target),
                n = t ? dt(t) : dt();
              e.target === e.currentTarget && n === ht(e.nativeEvent) && (r && r(e), o && o(!0), a(e))
            }), [o, r, a]);
          return {
            focusProps: {
              onFocus: !t && (r || o || n) ? s : void 0,
              onBlur: t || !n && !o ? void 0 : i
            }
          }
        }(e), {
          keyboardProps: n
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: vt(e.onKeyDown),
              onKeyUp: vt(e.onKeyUp)
            }
          }
        }(e), o = Se(r, n), i = function(e) {
          let t = (0, h.useContext)(bt) || {};
          yt(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), a = e.isDisabled ? {} : i, s = (0, h.useRef)(e.autoFocus);
        (0, h.useEffect)((() => {
          s.current && t.current && function(e) {
            const t = ae(e),
              r = dt(t);
            if ("virtual" === Ze) {
              let n = r;
              gt((() => {
                dt(t) === n && e.isConnected && Ne(e)
              }))
            } else Ne(e)
          }(t.current), s.current = !1
        }), [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: Se({
            ...o,
            tabIndex: l
          }, a)
        }
      }

      function wt(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        ne((() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: xt(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let i = oe((() => {
            t.resetValidation()
          })),
          a = oe((e => {
            var n;
            t.displayValidation.isInvalid || t.commitValidation();
            let i = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
            var a;
            !e.defaultPrevented && r && i && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!r.validity.valid) return r
              }
              return null
            }(i) === r.current && (o ? o() : null === (a = r.current) || void 0 === a || a.focus(), Ze = "keyboard", rt("keyboard", null)), e.preventDefault()
          })),
          s = oe((() => {
            t.commitValidation()
          }));
        (0, h.useEffect)((() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form;
          return e.addEventListener("invalid", a), e.addEventListener("change", s), null == t || t.addEventListener("reset", i), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", s), null == t || t.removeEventListener("reset", i)
          }
        }), [r, a, s, i, n])
      }

      function xt(e) {
        let t = e.validity;
        return {
          badInput: t.badInput,
          customError: t.customError,
          patternMismatch: t.patternMismatch,
          rangeOverflow: t.rangeOverflow,
          rangeUnderflow: t.rangeUnderflow,
          stepMismatch: t.stepMismatch,
          tooLong: t.tooLong,
          tooShort: t.tooShort,
          typeMismatch: t.typeMismatch,
          valueMissing: t.valueMissing,
          valid: t.valid
        }
      }
      const Et = {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
          valid: !0
        },
        St = {
          ...Et,
          customError: !0,
          valid: !1
        },
        Ct = {
          isInvalid: !1,
          validationDetails: Et,
          validationErrors: []
        },
        Pt = (0, h.createContext)({}),
        Ot = "__formValidationState" + Date.now();

      function Tt(e) {
        if (e[Ot]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          } = e[Ot];
          return {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: r,
            name: n,
            value: o,
            builtinValidation: i,
            validate: a,
            validationBehavior: s = "aria"
          } = e;
          r && (t || (t = "invalid" === r));
          let l = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: St
            } : null,
            c = (0, h.useMemo)((() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return kt(r)
                }
                return []
              }(a, o);
              return jt(e)
            }), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let u = (0, h.useContext)(Pt),
            d = (0, h.useMemo)((() => n ? Array.isArray(n) ? n.flatMap((e => kt(u[e]))) : kt(u[n]) : []), [u, n]),
            [f, p] = (0, h.useState)(u),
            [m, g] = (0, h.useState)(!1);
          u !== f && (p(u), g(!1));
          let v = (0, h.useMemo)((() => jt(m ? [] : d)), [m, d]),
            y = (0, h.useRef)(Ct),
            [b, _] = (0, h.useState)(Ct),
            w = (0, h.useRef)(Ct),
            [x, E] = (0, h.useState)(!1);
          return (0, h.useEffect)((() => {
            if (!x) return;
            E(!1);
            let e = c || i || y.current;
            At(e, w.current) || (w.current = e, _(e))
          })), {
            realtimeValidation: l || v || c || i || Ct,
            displayValidation: "native" === s ? l || v || b : l || v || c || i || b,
            updateValidation(e) {
              "aria" !== s || At(b, e) ? y.current = e : _(e)
            },
            resetValidation() {
              let e = Ct;
              At(e, w.current) || (w.current = e, _(e)), "native" === s && E(!1), g(!0)
            },
            commitValidation() {
              "native" === s && E(!0), g(!0)
            }
          }
        }(e)
      }

      function kt(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function jt(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: St
        } : null
      }

      function At(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, r) => e === t.validationErrors[r])) && Object.entries(e.validationDetails).every((([e, r]) => t.validationDetails[e] === r))
      }

      function Lt(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Nt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Nt(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Lt(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nt(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function It(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Dt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Mt = "foundry_hcgxh_vq8c3j8",
        Bt = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Rt(Rt({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Dt(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return It(e.variantClassNames, (e => It(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_hcgxh_vq8c3j9 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10",
          variantClassNames: {
            isInvalid: {
              false: "foundry_hcgxh_vq8c3ja",
              true: "foundry_hcgxh_vq8c3jb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ht = (0, h.forwardRef)((({
        asChild: e,
        label: t,
        isRequired: r,
        hint: n,
        children: o,
        description: i,
        testId: a,
        className: s,
        rows: l = 5,
        hideLabel: c,
        hideDescription: f,
        hideRequiredAsterisk: m,
        validate: g,
        errorMessage: v,
        ...y
      }, b) => {
        const _ = (0, h.useRef)(null),
          w = G(_, b),
          {
            inputProps: x,
            labelProps: E,
            descriptionProps: S,
            isInvalid: C,
            errorMessageProps: P,
            validationErrors: O
          } = function(e, t) {
            let {
              inputElementType: r = "input",
              isDisabled: n = !1,
              isRequired: o = !1,
              isReadOnly: i = !1,
              type: a = "text",
              validationBehavior: s = "aria"
            } = e, [l, c] = Ce(e.value, e.defaultValue || "", e.onChange), {
              focusableProps: u
            } = _t(e, t), d = Tt({
              ...e,
              value: l
            }), {
              isInvalid: f,
              validationErrors: p,
              validationDetails: m
            } = d.displayValidation, {
              labelProps: g,
              fieldProps: v,
              descriptionProps: y,
              errorMessageProps: b
            } = Oe({
              ...e,
              isInvalid: f,
              errorMessage: e.errorMessage || p
            }), _ = re(e, {
              labelable: !0
            });
            const w = {
              type: a,
              pattern: e.pattern
            };
            return ie(t, l, c), wt(e, d, t), (0, h.useEffect)((() => {
              if (t.current instanceof se(t.current).HTMLTextAreaElement) {
                let e = t.current;
                Object.defineProperty(e, "defaultValue", {
                  get: () => e.value,
                  set: () => {},
                  configurable: !0
                })
              }
            }), [t]), {
              labelProps: g,
              inputProps: Se(_, "input" === r ? w : void 0, {
                disabled: n,
                readOnly: i,
                required: o && "native" === s,
                "aria-required": o && "aria" === s || void 0,
                "aria-invalid": f || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-activedescendant": e["aria-activedescendant"],
                "aria-autocomplete": e["aria-autocomplete"],
                "aria-haspopup": e["aria-haspopup"],
                value: l,
                onChange: e => c(e.target.value),
                autoComplete: e.autoComplete,
                autoCapitalize: e.autoCapitalize,
                maxLength: e.maxLength,
                minLength: e.minLength,
                name: e.name,
                placeholder: e.placeholder,
                inputMode: e.inputMode,
                onCopy: e.onCopy,
                onCut: e.onCut,
                onPaste: e.onPaste,
                onCompositionEnd: e.onCompositionEnd,
                onCompositionStart: e.onCompositionStart,
                onCompositionUpdate: e.onCompositionUpdate,
                onSelect: e.onSelect,
                onBeforeInput: e.onBeforeInput,
                onInput: e.onInput,
                ...u,
                ...v
              }),
              descriptionProps: y,
              errorMessageProps: b,
              isInvalid: f,
              validationErrors: p,
              validationDetails: m
            }
          }({
            ...y,
            label: t,
            description: i,
            isRequired: r,
            inputElementType: "textarea",
            validate: e => g?.(e) ?? (!v || [v])
          }, _),
          T = (0, d.v6)({
            ...x,
            className: s
          }, {
            className: Bt({
              isInvalid: C
            }),
            "aria-errormessage": P?.id
          }),
          k = e ? p.DX : "textarea";
        return (0, u.jsxs)("div", {
          className: "foundry_hcgxh_vq8c3j0",
          children: [(t || n) && (0, u.jsxs)("div", {
            className: "foundry_hcgxh_vq8c3j1",
            children: [(0, u.jsx)(p.s6, {
              enabled: !!c,
              children: (0, u.jsx)(H, {
                size: "SM",
                className: (0, L.$)("foundry_hcgxh_vq8c3j2", x.disabled && Mt),
                asChild: !0,
                children: (0, u.jsxs)("label", {
                  ...E,
                  children: [t, r && !m && (0, u.jsx)("span", {
                    className: "foundry_hcgxh_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), n && (0, u.jsx)(H, {
              size: "XS",
              className: "foundry_hcgxh_vq8c3j3",
              children: n
            })]
          }), (0, u.jsx)(k, {
            rows: l,
            ref: w,
            "data-testid": a,
            ...T,
            children: o
          }), i && (0, u.jsx)(p.s6, {
            enabled: O.length > 0 || !!f,
            children: (0, u.jsx)(H, {
              size: "SM",
              ...S,
              className: (0, L.$)("foundry_hcgxh_vq8c3j4", x.disabled && Mt),
              children: i
            })
          }), O.length > 0 && (0, u.jsxs)(H, {
            size: "SM",
            appearance: "bold",
            ...P,
            className: "foundry_hcgxh_vq8c3j5",
            children: [(0, u.jsx)(z.X, {
              size: "MD",
              label: "",
              className: "foundry_hcgxh_vq8c3j6"
            }), O.join(". ")]
          })]
        })
      }));
      let zt = "default",
        Ft = "",
        Vt = new WeakMap;

      function Ut(e) {
        if (qe()) {
          if ("disabled" !== zt) return;
          zt = "restoring", setTimeout((() => {
            gt((() => {
              if ("restoring" === zt) {
                const t = ae(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Ft || ""), Ft = "", zt = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Vt.has(e)) {
          let t = Vt.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Vt.delete(e)
        }
      }
      const Gt = h.createContext({
        register: () => {}
      });

      function qt(e, t, r) {
        if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
        return t.get(e)
      }

      function Xt(e, t, r) {
        return function(e, t, r) {
          if (t.set) t.set.call(e, r);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = r
          }
        }(e, qt(e, t, "set"), r), r
      }

      function Wt() {
        let e = (0, h.useRef)(new Map),
          t = (0, h.useCallback)(((t, r, n, o) => {
            let i = (null == o ? void 0 : o.once) ? (...t) => {
              e.current.delete(n), n(...t)
            } : n;
            e.current.set(n, {
              type: r,
              eventTarget: t,
              fn: i,
              options: o
            }), t.addEventListener(r, i, o)
          }), []),
          r = (0, h.useCallback)(((t, r, n, o) => {
            var i;
            let a = (null === (i = e.current.get(n)) || void 0 === i ? void 0 : i.fn) || n;
            t.removeEventListener(r, a, o), e.current.delete(n)
          }), []),
          n = (0, h.useCallback)((() => {
            e.current.forEach(((e, t) => {
              r(e.eventTarget, e.type, t, e.options)
            }))
          }), [r]);
        return (0, h.useEffect)((() => n), [n]), {
          addGlobalListener: t,
          removeGlobalListener: r,
          removeAllGlobalListeners: n
        }
      }
      Gt.displayName = "PressResponderContext";
      const Kt = (0, h.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let r = document.createElement("a");
              r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r)
            }
          }(e, (e => Yt(e, t)))
        },
        useHref: e => e
      });

      function $t() {
        return (0, h.useContext)(Kt)
      }

      function Yt(e, t, r = !0) {
        var n, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        $e() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (Ve() ? i = !0 : a = !0);
        let c = Xe() && Ve() && !Ge() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l,
          bubbles: !0,
          cancelable: !0
        });
        Yt.isOpening = r, Ne(e), e.dispatchEvent(c), Yt.isOpening = !1
      }

      function Zt(e) {
        var t;
        const r = $t().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }
      Yt.isOpening = !1;
      var Qt = r(44853),
        Jt = new WeakMap;
      class er {
        continuePropagation() {
          Xt(this, Jt, !1)
        }
        get shouldStopPropagation() {
          return function(e, t) {
            return t.get ? t.get.call(e) : t.value
          }(this, qt(this, Jt, "get"))
        }
        constructor(e, t, r, n) {
          var o, i, a, s;
          s = {
              writable: !0,
              value: void 0
            },
            function(e, t) {
              if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(i = this, a = Jt), a.set(i, s), Xt(this, Jt, !0);
          let l = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const c = null == l ? void 0 : l.getBoundingClientRect();
          let u, d, h = 0,
            f = null;
          null != r.clientX && null != r.clientY && (d = r.clientX, f = r.clientY), c && (null != d && null != f ? (u = d - c.left, h = f - c.top) : (u = c.width / 2, h = c.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = u, this.y = h
        }
      }
      const tr = Symbol("linkClicked");

      function rr(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: i,
          onClick: a,
          isDisabled: s,
          isPressed: l,
          preventFocusOnPress: c,
          shouldCancelOnPointerExit: u,
          allowTextSelectionOnPress: d,
          ref: f,
          ...p
        } = function(e) {
          let t = (0, h.useContext)(Gt);
          if (t) {
            let {
              register: r,
              ...n
            } = t;
            e = Se(n, e), r()
          }
          return yt(t, e.ref), e
        }(e), [m, g] = (0, h.useState)(!1), v = (0, h.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null,
          disposables: []
        }), {
          addGlobalListener: y,
          removeAllGlobalListeners: b
        } = Wt(), _ = oe(((e, t) => {
          let o = v.current;
          if (s || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new er("pressstart", t, e);
            n(r), i = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, g(!0), i
        })), w = oe(((e, n, i = !0) => {
          let a = v.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new er("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), g(!1), t && i && !s) {
            let r = new er("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, l
        })), x = oe(((e, t) => {
          let r = v.current;
          if (s) return !1;
          if (i) {
            r.isTriggeringEvent = !0;
            let n = new er("pressup", t, e);
            return i(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        })), E = oe((e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(ir(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, b(), d || Ut(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), S = oe((e => {
          u && E(e)
        })), C = oe((e => {
          null == a || a(e)
        })), P = oe(((e, t) => {
          if (a) {
            let r = new MouseEvent("click", e);
            De(r, t), a(Ie(r))
          }
        })), O = (0, h.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (or(t.nativeEvent, t.currentTarget) && ut(t.currentTarget, ht(t.nativeEvent))) {
                  var n;
                  ar(ht(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = _(t, "keyboard");
                    let n = t.currentTarget,
                      i = t => {
                        or(t, n) && !t.repeat && ut(n, ht(t)) && e.target && x(ir(e.target, t), "keyboard")
                      };
                    y(ae(t.currentTarget), "keyup", le(i, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Ve() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || ut(t.currentTarget, ht(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Yt.isOpening) {
                  let r = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !Ye(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual";
                      r = w(ir(t.currentTarget, t), n, !0), e.isOverTarget = !1, C(t), E(t)
                    }
                  } else {
                    let e = _(t, "virtual"),
                      n = x(t, "virtual"),
                      o = w(t, "virtual");
                    C(t), r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && or(t, e.target)) {
                var n;
                ar(ht(t), t.key) && t.preventDefault();
                let r = ht(t),
                  o = ut(e.target, ht(t));
                w(ir(e.target, t), "keyboard", o), o && P(t, e.target), b(), "Enter" !== t.key && nr(e.target) && ut(e.target, r) && !t[tr] && (t[tr] = !0, Yt(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !ut(t.currentTarget, ht(t.nativeEvent))) return;
              if (o = t.nativeEvent, !Ke() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (qe()) {
                    if ("default" === zt) {
                      const t = ae(e);
                      Ft = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    zt = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    Vt.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = _(t, e.pointerType);
                let o = ht(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(ae(t.currentTarget), "pointerup", r, !1), y(ae(t.currentTarget), "pointercancel", n, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (ut(t.currentTarget, ht(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let r = function(e) {
                    for (; e && !Ae(e);) e = e.parentElement;
                    let t = se(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    Be = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, Ne(r), l()))
                      },
                      a = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, Ne(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), Be = !1, n = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              ut(t.currentTarget, ht(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && x(t, e.pointerType || t.pointerType)
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, _(ir(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(ir(e.target, t), e.pointerType, !1), S(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (ut(e.target, ht(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? E(t) : (Ne(e.target), e.target.click()))
                      }), 80);
                    y(t.currentTarget, "click", (() => r = !0), !0), e.disposables.push((() => clearTimeout(n)))
                  } else E(t);
                  e.isOverTarget = !1
                }
              },
              n = e => {
                E(e)
              };
            t.onDragStart = e => {
              ut(e.currentTarget, ht(e.nativeEvent)) && E(e)
            }
          }
          return t
        }), [y, s, c, b, d, E, S, w, _, x, C, P]);
        return (0, h.useEffect)((() => {
          let e = null == f ? void 0 : f.current;
          e && e instanceof se(e).Element && "auto" === se(e).getComputedStyle(e).touchAction && (e.style.touchAction = "pan-x pan-y pinch-zoom")
        }), [f]), (0, h.useEffect)((() => {
          let e = v.current;
          return () => {
            var t;
            d || Ut(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [d]), {
          isPressed: l || m,
          pressProps: Se(p, O)
        }
      }

      function nr(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function or(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof se(o).HTMLInputElement && !lr(o, r) || o instanceof se(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && nr(o)) && "Enter" !== r)
      }

      function ir(e, t) {
        let r = t.clientX,
          n = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: n
        }
      }

      function ar(e, t) {
        return e instanceof HTMLInputElement ? !lr(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : nr(e)))
        }(e)
      }
      const sr = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function lr(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : sr.has(e.type)
      }

      function cr(e, t) {
        let r, {
          elementType: n = "button",
          isDisabled: o,
          onPress: i,
          onPressStart: a,
          onPressEnd: s,
          onPressUp: l,
          onPressChange: c,
          preventFocusOnPress: u,
          allowFocusWhenDisabled: d,
          onClick: h,
          href: f,
          target: p,
          rel: m,
          type: g = "button"
        } = e;
        r = "button" === n ? {
          type: g,
          disabled: o
        } : {
          role: "button",
          href: "a" !== n || o ? void 0 : f,
          target: "a" === n ? p : void 0,
          type: "input" === n ? g : void 0,
          disabled: "input" === n ? o : void 0,
          "aria-disabled": o && "input" !== n ? o : void 0,
          rel: "a" === n ? m : void 0
        };
        let {
          pressProps: v,
          isPressed: y
        } = rr({
          onPressStart: a,
          onPressEnd: s,
          onPressChange: c,
          onPress: i,
          onPressUp: l,
          onClick: h,
          isDisabled: o,
          preventFocusOnPress: u,
          ref: t
        }), {
          focusableProps: b
        } = _t(e, t);
        d && (b.tabIndex = o ? -1 : b.tabIndex);
        let _ = Se(b, v, re(e, {
          labelable: !0
        }));
        return {
          isPressed: y,
          buttonProps: Se(r, _, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"]
          })
        }
      }
      var ur = {};

      function dr(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }

      function hr(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          n = {};
        for (var o in e) {
          var i = e[o],
            a = [...r, o];
          "string" == typeof i || "number" == typeof i || null == i ? n[o] = t(i, a) : "object" != typeof i || Array.isArray(i) ? console.warn('Skipping invalid key "'.concat(a.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(i) ? "Array" : typeof i, '"')) : n[o] = hr(i, t, a)
        }
        return n
      }
      var fr, pr, mr = r(79895),
        gr = r.n(mr),
        vr = class {
          constructor(e) {
            const {
              failure: t,
              gotoFn: r,
              output: n
            } = this._buildTables(e);
            this.gotoFn = r, this.output = n, this.failure = t
          }
          _buildTables(e) {
            const t = {
                0: {}
              },
              r = {};
            let n = 0;
            for (const o of e) {
              let e = 0;
              for (const i of o) t[e] && i in t[e] ? e = t[e][i] : (n++, t[e][i] = n, t[n] = {}, e = n, r[n] = []);
              r[e].push(o)
            }
            const o = {},
              i = [];
            for (const e in t[0]) {
              const r = t[0][e];
              o[r] = 0, i.push(r)
            }
            for (; i.length > 0;) {
              const e = i.shift();
              if (void 0 !== e)
                for (const n in t[e]) {
                  const a = t[e][n];
                  i.push(a);
                  let s = o[e];
                  for (; s > 0 && !(n in t[s]);) s = o[s];
                  if (n in t[s]) {
                    const e = t[s][n];
                    o[a] = e, r[a] = [...r[a], ...r[e]]
                  } else o[a] = 0
                }
            }
            return {
              gotoFn: t,
              output: r,
              failure: o
            }
          }
          search(e) {
            let t = 0;
            const r = [];
            for (let n = 0; n < e.length; n++) {
              const o = e[n];
              for (; t > 0 && !(o in this.gotoFn[t]);) t = this.failure[t];
              if (o in this.gotoFn[t] && (t = this.gotoFn[t][o], this.output[t].length > 0)) {
                const e = this.output[t];
                r.push([n, e])
              }
            }
            return r
          }
          match(e) {
            let t = 0;
            for (let r = 0; r < e.length; r++) {
              const n = e[r];
              for (; t > 0 && !(n in this.gotoFn[t]);) t = this.failure[t];
              if (n in this.gotoFn[t] && (t = this.gotoFn[t][n], this.output[t].length > 0)) return !0
            }
            return !1
          }
        },
        yr = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        br = !1;

      function _r(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }! function(e) {
        e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
      }(fr || (fr = {})),
      function(e) {
        e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
      }(pr || (pr = {}));
      const wr = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        xr = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        Er = new Map([
          [126, pr.Element],
          [94, pr.Start],
          [36, pr.End],
          [42, pr.Any],
          [33, pr.Not],
          [124, pr.Hyphen]
        ]),
        Sr = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        Cr = new Set(["contains", "icontains"]);

      function Pr(e, t, r) {
        const n = parseInt(t, 16) - 65536;
        return n != n || r ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
      }

      function Or(e) {
        return e.replace(xr, Pr)
      }

      function Tr(e) {
        return 39 === e || 34 === e
      }

      function kr(e) {
        return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e
      }

      function jr(e) {
        const t = [],
          r = Ar(t, `${e}`, 0);
        if (r < e.length) throw new Error(`Unmatched selector: ${e.slice(r)}`);
        return t
      }

      function Ar(e, t, r) {
        let n = [];

        function o(e) {
          const n = t.slice(r + e).match(wr);
          if (!n) throw new Error(`Expected name, found ${t.slice(r)}`);
          const [o] = n;
          return r += e + o.length, Or(o)
        }

        function i(e) {
          for (r += e; r < t.length && kr(t.charCodeAt(r));) r++
        }

        function a() {
          const e = r += 1;
          let n = 1;
          for (; n > 0 && r < t.length; r++) 40 !== t.charCodeAt(r) || s(r) ? 41 !== t.charCodeAt(r) || s(r) || n-- : n++;
          if (n) throw new Error("Parenthesis not matched");
          return Or(t.slice(e, r - 1))
        }

        function s(e) {
          let r = 0;
          for (; 92 === t.charCodeAt(--e);) r++;
          return !(1 & ~r)
        }

        function l() {
          if (n.length > 0 && function(e) {
              switch (e.type) {
                case fr.Adjacent:
                case fr.Child:
                case fr.Descendant:
                case fr.Parent:
                case fr.Sibling:
                case fr.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(n[n.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function c(e) {
          n.length > 0 && n[n.length - 1].type === fr.Descendant ? n[n.length - 1].type = e : (l(), n.push({
            type: e
          }))
        }

        function u(e, t) {
          n.push({
            type: fr.Attribute,
            name: e,
            action: t,
            value: o(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function d() {
          if (n.length && n[n.length - 1].type === fr.Descendant && n.pop(), 0 === n.length) throw new Error("Empty sub-selector");
          e.push(n)
        }
        if (i(0), t.length === r) return r;
        e: for (; r < t.length;) {
          const e = t.charCodeAt(r);
          switch (e) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              0 !== n.length && n[0].type === fr.Descendant || (l(), n.push({
                type: fr.Descendant
              })), i(1);
              break;
            case 62:
              c(fr.Child), i(1);
              break;
            case 60:
              c(fr.Parent), i(1);
              break;
            case 126:
              c(fr.Sibling), i(1);
              break;
            case 43:
              c(fr.Adjacent), i(1);
              break;
            case 46:
              u("class", pr.Element);
              break;
            case 35:
              u("id", pr.Equals);
              break;
            case 91: {
              let e;
              i(1);
              let a = null;
              124 === t.charCodeAt(r) ? e = o(1) : t.startsWith("*|", r) ? (a = "*", e = o(2)) : (e = o(0), 124 === t.charCodeAt(r) && 61 !== t.charCodeAt(r + 1) && (a = e, e = o(1))), i(0);
              let l = pr.Exists;
              const c = Er.get(t.charCodeAt(r));
              if (c) {
                if (l = c, 61 !== t.charCodeAt(r + 1)) throw new Error("Expected `=`");
                i(2)
              } else 61 === t.charCodeAt(r) && (l = pr.Equals, i(1));
              let u = "",
                d = null;
              if ("exists" !== l) {
                if (Tr(t.charCodeAt(r))) {
                  const e = t.charCodeAt(r);
                  let n = r + 1;
                  for (; n < t.length && (t.charCodeAt(n) !== e || s(n));) n += 1;
                  if (t.charCodeAt(n) !== e) throw new Error("Attribute value didn't end");
                  u = Or(t.slice(r + 1, n)), r = n + 1
                } else {
                  const e = r;
                  for (; r < t.length && (!kr(t.charCodeAt(r)) && 93 !== t.charCodeAt(r) || s(r));) r += 1;
                  u = Or(t.slice(e, r))
                }
                i(0);
                const e = 32 | t.charCodeAt(r);
                115 === e ? (d = !1, i(1)) : 105 === e && (d = !0, i(1))
              }
              if (93 !== t.charCodeAt(r)) throw new Error("Attribute selector didn't terminate");
              r += 1;
              const h = {
                type: fr.Attribute,
                name: e,
                action: l,
                value: u,
                namespace: a,
                ignoreCase: d
              };
              n.push(h);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(r + 1)) {
                n.push({
                  type: fr.PseudoElement,
                  name: o(2).toLowerCase(),
                  data: 40 === t.charCodeAt(r) ? a() : null
                });
                continue
              }
              const e = o(1).toLowerCase();
              let i = null;
              if (40 === t.charCodeAt(r))
                if (Sr.has(e)) {
                  if (Tr(t.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (i = [], r = Ar(i, t, r + 1), 41 !== t.charCodeAt(r)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  r += 1
                } else {
                  if (i = a(), Cr.has(e)) {
                    const e = i.charCodeAt(0);
                    e === i.charCodeAt(i.length - 1) && Tr(e) && (i = i.slice(1, -1))
                  }
                  i = Or(i)
                } n.push({
                type: fr.Pseudo,
                name: e,
                data: i
              });
              break
            }
            case 44:
              d(), n = [], i(1);
              break;
            default: {
              if (t.startsWith("/*", r)) {
                const e = t.indexOf("*/", r + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                r = e + 2, 0 === n.length && i(0);
                break
              }
              let a, s = null;
              if (42 === e) r += 1, a = "*";
              else if (124 === e) {
                if (a = "", 124 === t.charCodeAt(r + 1)) {
                  c(fr.ColumnCombinator), i(2);
                  break
                }
              } else {
                if (!wr.test(t.slice(r))) break e;
                a = o(0)
              }
              124 === t.charCodeAt(r) && 124 !== t.charCodeAt(r + 1) && (s = a, 42 === t.charCodeAt(r + 1) ? (a = "*", r += 2) : a = o(1)), n.push("*" === a ? {
                type: fr.Universal,
                namespace: s
              } : {
                type: fr.Tag,
                name: a,
                namespace: s
              })
            }
          }
        }
        return d(), r
      }

      function Lr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Nr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Lr(Object(r), !0).forEach((function(t) {
            Rr(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lr(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Rr(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      const Ir = function e(t) {
          return r.withOptions = r => e(Nr(Nr({}, t), r)), r;

          function r(e, ...r) {
            const n = "string" == typeof e ? [e] : e.raw,
              {
                escapeSpecialCharacters: o = Array.isArray(e)
              } = t;
            let i = "";
            for (let e = 0; e < n.length; e++) {
              let t = n[e];
              o && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), i += t, e < r.length && (i += r[e])
            }
            const a = i.split("\n");
            let s = null;
            for (const e of a) {
              const t = e.match(/^(\s+)\S+/);
              if (t) {
                const e = t[1].length;
                s = s ? Math.min(s, e) : e
              }
            }
            if (null !== s) {
              const e = s;
              i = a.map((t => " " === t[0] || "\t" === t[0] ? t.slice(e) : t)).join("\n")
            }
            return i = i.trim(), o && (i = i.replace(/\\n/g, "\n")), i
          }
        }({}),
        Dr = Ir;
      var Mr = function() {
        return Mr = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, Mr.apply(this, arguments)
      };

      function Br(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        }
        return r
      }

      function Hr(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, i = r.call(e),
          a = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = i.next()).done;) a.push(n.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = i.return) && r.call(i)
          } finally {
            if (o) throw o.error
          }
        }
        return a
      }
      var zr, Fr = /(\u000D|\u000C|\u000D\u000A)/g,
        Vr = /[\u0000\uD800-\uDFFF]/g,
        Ur = /(\/\*)[\s\S]*?(\*\/)/g,
        Gr = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var r = e.charCodeAt(t), n = [], o = t + 1; o < e.length; o += 1) {
            var i = e.charCodeAt(o);
            if (i === r) return [o, String.fromCharCode.apply(null, n)];
            if (92 === i) {
              var a = Xr(e, o);
              if (null === a) return null;
              var s = Hr(a, 2),
                l = s[0],
                c = s[1];
              n.push(c), o = l
            } else {
              if (10 === i) return null;
              n.push(i)
            }
          }
          return null
        },
        qr = function(e, t) {
          if (e.length <= t) return !1;
          var r, n = e.charCodeAt(t);
          return 45 === n ? !(e.length <= t + 1) && (45 === (r = e.charCodeAt(t + 1)) || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || 92 === n && !(e.length <= t + 1) && 10 !== (r = e.charCodeAt(t + 1))
        },
        Xr = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var r = e.charCodeAt(t + 1);
          if (10 === r) return null;
          if (r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102) {
            for (var n = [r], o = Math.min(t + 7, e.length), i = t + 2; i < o; i += 1) {
              var a = e.charCodeAt(i);
              if (!(a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102)) break;
              n.push(a)
            }
            if (i < e.length) {
              var s = e.charCodeAt(i);
              9 !== s && 32 !== s && 10 !== s || (i += 1)
            }
            return [i - 1, parseInt(String.fromCharCode.apply(null, n), 16)]
          }
          return [t + 1, r]
        },
        Wr = function(e, t) {
          var r = Kr(e, t);
          if (null === r) return null;
          var n = Hr(r, 3),
            o = n[0],
            i = n[1],
            a = n[2],
            s = Yr(e, o + 1);
          if (null !== s) {
            var l = Hr(s, 2);
            return [l[0],
              ["<dimension-token>", i, l[1]]
            ]
          }
          return o + 1 < e.length && 37 === e.charCodeAt(o + 1) ? [o + 1, ["<percentage-token>", i]] : [o, ["<number-token>", i, a]]
        },
        Kr = function(e, t) {
          if (e.length <= t) return null;
          var r = "integer",
            n = [],
            o = e.charCodeAt(t);
          for (43 !== o && 45 !== o || (t += 1, 45 === o && n.push(45)); t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) n.push(c), t += 1;
          if (t + 1 < e.length) {
            var i = e.charCodeAt(t),
              a = e.charCodeAt(t + 1);
            if (46 === i && a >= 48 && a <= 57)
              for (n.push(i, a), r = "number", t += 2; t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) n.push(c), t += 1
          }
          if (t + 1 < e.length) {
            i = e.charCodeAt(t), a = e.charCodeAt(t + 1);
            var s = e.charCodeAt(t + 2);
            if (69 === i || 101 === i) {
              var l = a >= 48 && a <= 57;
              if (l || (43 === a || 45 === a) && s >= 48 && s <= 57)
                for (r = "number", l ? (n.push(69, a), t += 2) : 45 === a ? (n.push(69, 45, s), t += 3) : (n.push(69, s), t += 3); t < e.length;) {
                  var c;
                  if (!((c = e.charCodeAt(t)) >= 48 && c <= 57)) break;
                  n.push(c), t += 1
                }
            }
          }
          var u = String.fromCharCode.apply(null, n),
            d = "number" === r ? parseFloat(u) : parseInt(u);
          return -0 === d && (d = 0), Number.isNaN(d) ? null : [t - 1, d, r]
        },
        $r = function(e, t) {
          if (e.length <= t) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var o = Xr(e, t);
              if (null === o) break;
              var i = Hr(o, 2),
                a = i[0],
                s = i[1];
              r.push(s), t = a
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, r)]
        },
        Yr = function(e, t) {
          if (e.length <= t || !qr(e, t)) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var o = Xr(e, t);
              if (null === o) break;
              var i = Hr(o, 2),
                a = i[0],
                s = i[1];
              r.push(s), t = a
            } return [t - 1, String.fromCharCode.apply(null, r)]
        },
        Zr = function(e, t) {
          for (var r = e.charCodeAt(t); 9 === r || 32 === r || 10 === r;) r = e.charCodeAt(++t);
          for (var n = [], o = !1; t < e.length;) {
            if (41 === r) return [t, String.fromCharCode.apply(null, n)];
            if (34 === r || 39 === r || 40 === r) return null;
            if (9 === r || 32 === r || 10 === r) o || 0 === n.length || (o = !0);
            else if (92 === r) {
              var i = Xr(e, t);
              if (null === i || o) return null;
              var a = Hr(i, 2),
                s = a[0],
                l = a[1];
              n.push(l), t = s
            } else {
              if (o) return null;
              n.push(r)
            }
            r = e.charCodeAt(++t)
          }
          return null
        },
        Qr = function(e, t) {
          var r = Yr(e, t);
          if (null === r) return null;
          var n = Hr(r, 2),
            o = n[0],
            i = n[1];
          if ("url" === i.toLowerCase()) {
            if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) {
              for (var a = 2; o + a < e.length; a += 1) {
                var s = e.charCodeAt(o + a);
                if (34 === s || 39 === s) return [o + 1, i.toLowerCase(), "<function-token>"];
                if (9 !== s && 32 !== s && 10 !== s) {
                  var l = Zr(e, o + a);
                  if (null === l) return null;
                  var c = Hr(l, 2);
                  return [c[0], c[1], "<url-token>"]
                }
              }
              return [o + 1, i.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) return [o + 1, i.toLowerCase(), "<function-token>"];
          return [o, i.toLowerCase(), "<ident-token>"]
        },
        Jr = function(e) {
          if (null === e.mediaCondition) return e;
          var t = en(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        en = function e(t) {
          for (var r = t.children.length - 1; r >= 0; r--) {
            var n = t.children[r];
            if (!("context" in n)) {
              var o = e(n);
              if (null === o.operator && 1 === o.children.length) t.children[r] = o.children[0];
              else if (o.operator === t.operator && ("and" === o.operator || "or" === o.operator)) {
                for (var i = [r, 1], a = 0; a < o.children.length; a++) i.push(o.children[a]);
                t.children.splice.apply(t.children, i)
              }
            }
          }
          return t
        },
        tn = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        rn = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(Fr, "\n").replace(Vr, "�")).replace(Ur, "");
            for (var r = []; t < e.length; t += 1) {
              var n = e.charCodeAt(t);
              if (9 === n || 32 === n || 10 === n) {
                for (var o = e.charCodeAt(++t); 9 === o || 32 === o || 10 === o;) o = e.charCodeAt(++t);
                t -= 1, r.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === n) {
                if (null === (C = Gr(e, t))) return null;
                var i = Hr(C, 2),
                  a = i[0],
                  s = i[1];
                r.push({
                  type: "<string-token>",
                  value: s
                }), t = a
              } else if (35 === n) {
                if (t + 1 < e.length && (95 === (p = e.charCodeAt(t + 1)) || p >= 65 && p <= 90 || p >= 97 && p <= 122 || p >= 128 || p >= 48 && p <= 57 || 92 === p && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var l = qr(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (C = $r(e, t + 1))) {
                    var c = Hr(C, 2);
                    a = c[0], s = c[1], r.push({
                      type: "<hash-token>",
                      value: s.toLowerCase(),
                      flag: l
                    }), t = a;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (39 === n) {
                if (null === (C = Gr(e, t))) return null;
                var u = Hr(C, 2);
                a = u[0], s = u[1], r.push({
                  type: "<string-token>",
                  value: s
                }), t = a
              } else if (40 === n) r.push({
                type: "<(-token>"
              });
              else if (41 === n) r.push({
                type: "<)-token>"
              });
              else if (43 === n) {
                var d = Wr(e, t);
                if (null === d) r.push({
                  type: "<delim-token>",
                  value: n
                });
                else {
                  var h = Hr(d, 2);
                  a = h[0], "<dimension-token>" === (E = h[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: E[1],
                    unit: E[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === E[0] ? r.push({
                    type: E[0],
                    value: E[1],
                    flag: E[2]
                  }) : r.push({
                    type: E[0],
                    value: E[1],
                    flag: "number"
                  }), t = a
                }
              } else if (44 === n) r.push({
                type: "<comma-token>"
              });
              else if (45 === n) {
                if (null !== (y = Wr(e, t))) {
                  var f = Hr(y, 2);
                  a = f[0], "<dimension-token>" === (E = f[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: E[1],
                    unit: E[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === E[0] ? r.push({
                    type: E[0],
                    value: E[1],
                    flag: E[2]
                  }) : r.push({
                    type: E[0],
                    value: E[1],
                    flag: "number"
                  }), t = a;
                  continue
                }
                if (t + 2 < e.length) {
                  var p = e.charCodeAt(t + 1),
                    m = e.charCodeAt(t + 2);
                  if (45 === p && 62 === m) {
                    r.push({
                      type: "<CDC-token>"
                    }), t += 2;
                    continue
                  }
                }
                if (null !== (C = Qr(e, t))) {
                  var g = Hr(C, 3),
                    v = (a = g[0], s = g[1], g[2]);
                  r.push({
                    type: v,
                    value: s
                  }), t = a;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (46 === n) {
                var y;
                if (null !== (y = Wr(e, t))) {
                  var b = Hr(y, 2);
                  a = b[0], "<dimension-token>" === (E = b[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: E[1],
                    unit: E[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === E[0] ? r.push({
                    type: E[0],
                    value: E[1],
                    flag: E[2]
                  }) : r.push({
                    type: E[0],
                    value: E[1],
                    flag: "number"
                  }), t = a;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (58 === n) r.push({
                type: "<colon-token>"
              });
              else if (59 === n) r.push({
                type: "<semicolon-token>"
              });
              else if (60 === n) {
                if (t + 3 < e.length) {
                  p = e.charCodeAt(t + 1), m = e.charCodeAt(t + 2);
                  var _ = e.charCodeAt(t + 3);
                  if (33 === p && 45 === m && 45 === _) {
                    r.push({
                      type: "<CDO-token>"
                    }), t += 3;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (64 === n) {
                if (null !== (C = Yr(e, t + 1))) {
                  var w = Hr(C, 2);
                  a = w[0], s = w[1], r.push({
                    type: "<at-keyword-token>",
                    value: s.toLowerCase()
                  }), t = a;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (91 === n) r.push({
                type: "<[-token>"
              });
              else if (92 === n) {
                if (null === (C = Xr(e, t))) return null;
                var x = Hr(C, 2);
                a = x[0], s = x[1], e = e.slice(0, t) + s + e.slice(a + 1), t -= 1
              } else if (93 === n) r.push({
                type: "<]-token>"
              });
              else if (123 === n) r.push({
                type: "<{-token>"
              });
              else if (125 === n) r.push({
                type: "<}-token>"
              });
              else if (n >= 48 && n <= 57) {
                var E, S = Hr(C = Wr(e, t), 2);
                a = S[0], "<dimension-token>" === (E = S[1])[0] ? r.push({
                  type: "<dimension-token>",
                  value: E[1],
                  unit: E[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === E[0] ? r.push({
                  type: E[0],
                  value: E[1],
                  flag: E[2]
                }) : r.push({
                  type: E[0],
                  value: E[1],
                  flag: "number"
                }), t = a
              } else if (95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128) {
                var C;
                if (null === (C = Qr(e, t))) return null;
                var P = Hr(C, 3);
                a = P[0], s = P[1], v = P[2], r.push({
                  type: v,
                  value: s
                }), t = a
              } else r.push({
                type: "<delim-token>",
                value: n
              })
            }
            return r.push({
              type: "<EOF-token>"
            }), r
          }(e.trim());
          if (null === t) throw tn("Failed tokenizing");
          var r = 0,
            n = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw tn("Expected whitespace after media");
            r = 2;
            for (var o = 2; o < t.length - 1; o++) {
              var i = t[o];
              if ("<{-token>" === i.type) {
                n = o;
                break
              }
              if ("<semicolon-token>" === i.type) throw tn("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(r, n), on(t)
        },
        nn = function(e) {
          for (var t = [], r = !1, n = 0; n < e.length; n++) "<whitespace-token>" === e[n].type ? (r = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(Mr(Mr({}, e[n]), {
            wsBefore: r,
            wsAfter: !1
          })), r = !1);
          return t
        },
        on = function(e) {
          for (var t, r, n = [
              []
            ], o = 0; o < e.length; o++) {
            var i = e[o];
            "<comma-token>" === i.type ? n.push([]) : n[n.length - 1].push(i)
          }
          var a = n.map(nn);
          if (1 === a.length && 0 === a[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var s = a.map((function(e) {
              return 0 === e.length ? null : an(e)
            })),
            l = [];
          try {
            for (var c = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  r = t && e[t],
                  n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function() {
                    return e && n >= e.length && (e = void 0), {
                      value: e && e[n++],
                      done: !e
                    }
                  }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(s), u = c.next(); !u.done; u = c.next()) {
              var d = u.value;
              null !== d && l.push(d)
            }
          } catch (e) {
            t = {
              error: e
            }
          } finally {
            try {
              u && !u.done && (r = c.return) && r.call(c)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === l.length) throw tn("No valid media queries");
          return l
        },
        an = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: sn(e, !0)
            }
          } catch (e) {
            throw tn("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw tn("Expected media condition or media prefix");
            var r = null,
              n = void 0,
              o = t.value;
            "only" !== o && "not" !== o || (r = o);
            var i = null === r ? 0 : 1;
            if (e.length <= i) throw tn("Expected extra token in media query");
            var a = e[i];
            if ("<ident-token>" === a.type) {
              var s = a.value;
              if ("all" === s) n = "all";
              else if ("print" === s || "screen" === s) n = s;
              else {
                if ("tty" !== s && "tv" !== s && "projection" !== s && "handheld" !== s && "braille" !== s && "embossed" !== s && "aural" !== s && "speech" !== s) throw tn("Unknown ident '".concat(s, "' in media query"));
                r = "not" === r ? null : "not", n = "all"
              }
            } else {
              if ("not" !== r || "<(-token>" !== a.type) throw tn("Invalid media query");
              var l = [{
                type: "<(-token>",
                wsBefore: !1,
                wsAfter: !1
              }];
              l.push.apply(l, e), l.push({
                type: "<)-token>",
                wsBefore: !1,
                wsAfter: !1
              });
              try {
                return {
                  mediaPrefix: null,
                  mediaType: "all",
                  mediaCondition: sn(l, !0)
                }
              } catch (e) {
                throw tn("Expected media condition after '('", e)
              }
            }
            if (i + 1 === e.length) return {
              mediaPrefix: r,
              mediaType: n,
              mediaCondition: null
            };
            if (!(i + 4 < e.length)) throw tn("Expected media condition after media prefix");
            var c = e[i + 1];
            if ("<ident-token>" !== c.type || "and" !== c.value) throw tn("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: r,
                mediaType: n,
                mediaCondition: sn(e.slice(i + 2), !1)
              }
            } catch (e) {
              throw tn("Expected media condition after 'and'", e)
            }
          }
        },
        sn = function e(t, r, n) {
          if (void 0 === n && (n = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var o, i = t.length - 1, a = 0, s = 0, l = 0; l < t.length; l++) {
            var c = t[l];
            if ("<(-token>" === c.type ? (s += 1, a = Math.max(a, s)) : "<)-token>" === c.type && (s -= 1), 0 === s) {
              i = l;
              break
            }
          }
          if (0 !== s) throw new Error("Mismatched parens\nInvalid media condition");
          var u = t.slice(0, i + 1);
          if (o = 1 === a ? ln(u) : "<ident-token>" === u[1].type && "not" === u[1].value ? e(u.slice(2, -1), !0, "not") : e(u.slice(1, -1), !0), i === t.length - 1) return {
            operator: n,
            children: [o]
          };
          var d = t[i + 1];
          if ("<ident-token>" !== d.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== n && n !== d.value) throw new Error("'".concat(d.value, "' and '").concat(n, "' must not be at same level\nInvalid media condition"));
          if ("or" === d.value && !r) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== d.value && "or" !== d.value) throw new Error("Invalid operator: '".concat(d.value, "'\nInvalid media condition"));
          var h = e(t.slice(i + 2), r, d.value);
          return {
            operator: d.value,
            children: [o].concat(h.children)
          }
        },
        ln = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], r = 1; r < e.length; r++) {
            if (r < e.length - 2) {
              var n = e[r],
                o = e[r + 1],
                i = e[r + 2];
              if ("<number-token>" === n.type && n.value > 0 && "<delim-token>" === o.type && 47 === o.value && "<number-token>" === i.type && i.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: n.value,
                  denominator: i.value,
                  wsBefore: n.wsBefore,
                  wsAfter: i.wsAfter
                }), r += 2;
                continue
              }
            }
            t.push(e[r])
          }
          var a = t[1];
          if ("<ident-token>" === a.type && 3 === t.length) return {
            context: "boolean",
            feature: a.value
          };
          if (5 === t.length && "<ident-token>" === t[1].type && "<colon-token>" === t[2].type) {
            var s = t[3];
            if ("<number-token>" === s.type || "<dimension-token>" === s.type || "<ratio-token>" === s.type || "<ident-token>" === s.type) {
              var l = t[1].value,
                c = null,
                u = l.slice(0, 4);
              return "min-" === u ? (c = "min", l = l.slice(4)) : "max-" === u && (c = "max", l = l.slice(4)), s.wsBefore, s.wsAfter, {
                context: "value",
                prefix: c,
                feature: l,
                value: Br(s, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var d = cn(t);
            return {
              context: "range",
              feature: d.featureName,
              range: d
            }
          } catch (e) {
            throw tn("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        cn = function(e) {
          var t, r, n, o;
          if (e.length < 5 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid range");
          var i = {
              leftToken: null,
              leftOp: null,
              featureName: "",
              rightOp: null,
              rightToken: null
            },
            a = "<number-token>" === e[1].type || "<dimension-token>" === e[1].type || "<ratio-token>" === e[1].type || "<ident-token>" === e[1].type && "infinite" === e[1].value;
          if ("<delim-token>" === e[2].type) {
            if (60 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? i[a ? "leftOp" : "rightOp"] = "<" : i[a ? "leftOp" : "rightOp"] = "<=";
            else if (62 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? i[a ? "leftOp" : "rightOp"] = ">" : i[a ? "leftOp" : "rightOp"] = ">=";
            else {
              if (61 !== e[2].value) throw new Error("Invalid range");
              i[a ? "leftOp" : "rightOp"] = "="
            }
            if (a) i.leftToken = e[1];
            else {
              if ("<ident-token>" !== e[1].type) throw new Error("Invalid range");
              i.featureName = e[1].value
            }
            var s = 2 + (null !== (r = null === (t = i[a ? "leftOp" : "rightOp"]) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0),
              l = e[s];
            if (a) {
              if ("<ident-token>" !== l.type) throw new Error("Invalid range");
              if (i.featureName = l.value, e.length >= 7) {
                var c = e[s + 1],
                  u = e[s + 2];
                if ("<delim-token>" !== c.type) throw new Error("Invalid range");
                var d = c.value;
                if (60 === d) "<delim-token>" !== u.type || 61 !== u.value || u.wsBefore ? i.rightOp = "<" : i.rightOp = "<=";
                else {
                  if (62 !== d) throw new Error("Invalid range");
                  "<delim-token>" !== u.type || 61 !== u.value || u.wsBefore ? i.rightOp = ">" : i.rightOp = ">="
                }
                var h = e[s + 1 + (null !== (o = null === (n = i.rightOp) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0)];
                i.rightToken = h
              } else if (s + 2 !== e.length) throw new Error("Invalid range")
            } else i.rightToken = l;
            var f = null,
              p = i.leftToken,
              m = i.leftOp,
              g = i.featureName,
              v = i.rightOp,
              y = i.rightToken,
              b = null;
            if (null !== p)
              if ("<ident-token>" === p.type) {
                var _ = p.type;
                "infinite" === (x = p.value) && (b = {
                  type: _,
                  value: x
                })
              } else "<number-token>" !== p.type && "<dimension-token>" !== p.type && "<ratio-token>" !== p.type || (p.wsBefore, p.wsAfter, b = Br(p, ["wsBefore", "wsAfter"]));
            var w = null;
            if (null !== y)
              if ("<ident-token>" === y.type) {
                var x;
                _ = y.type, "infinite" === (x = y.value) && (w = {
                  type: _,
                  value: x
                })
              } else "<number-token>" !== y.type && "<dimension-token>" !== y.type && "<ratio-token>" !== y.type || (y.wsBefore, y.wsAfter, w = Br(y, ["wsBefore", "wsAfter"]));
            if (null !== b && null !== w)
              if ("<" !== m && "<=" !== m || "<" !== v && "<=" !== v) {
                if (">" !== m && ">=" !== m || ">" !== v && ">=" !== v) throw new Error("Invalid range");
                f = {
                  leftToken: b,
                  leftOp: m,
                  featureName: g,
                  rightOp: v,
                  rightToken: w
                }
              } else f = {
                leftToken: b,
                leftOp: m,
                featureName: g,
                rightOp: v,
                rightToken: w
              };
            else(null === b && null === m && null !== v && null !== w || null !== b && null !== m && null === v && null === w) && (f = {
              leftToken: b,
              leftOp: m,
              featureName: g,
              rightOp: v,
              rightToken: w
            });
            return f
          }
          throw new Error("Invalid range")
        };

      function un(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function dn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function hn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dn(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = un(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dn(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function fn(e, t) {
        if (null == e) return {};
        var r, n, o = function(e, t) {
          if (null == e) return {};
          var r, n, o = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
          return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
        }
        return o
      }

      function pn(e, t) {
        for (var r in e) t(e[r], r)
      }

      function mn(e, t) {
        var r = {};
        for (var n in e) - 1 === t.indexOf(n) && (r[n] = e[n]);
        return r
      }
      class gn {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new gn
          }, this.ruleset.set(e, t)), t
        }
        getConditionalRulesetByPath(e) {
          var t = this;
          for (var r of e) {
            var n = t.findOrCreateCondition(r);
            t = n.children
          }
          return t
        }
        addRule(e, t, r) {
          var n = this.getConditionalRulesetByPath(r).findOrCreateCondition(t);
          if (!n) throw new Error("Failed to add conditional rule");
          n.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var r = this.getConditionalRulesetByPath(e), n = 0; n < t.length; n++) {
            var o, i = t[n],
              a = null !== (o = r.precedenceLookup.get(i)) && void 0 !== o ? o : new Set;
            for (var s of t.slice(n + 1)) a.add(s);
            r.precedenceLookup.set(i, a)
          }
        }
        isCompatible(e) {
          for (var [t, r] of this.precedenceLookup.entries())
            for (var n of r) {
              var o;
              if (null !== (o = e.precedenceLookup.get(n)) && void 0 !== o && o.has(t)) return !1
            }
          for (var {
              query: i,
              children: a
            }
            of e.ruleset.values()) {
            var s = this.ruleset.get(i);
            if (s && !s.children.isCompatible(a)) return !1
          }
          return !0
        }
        merge(e) {
          for (var {
              query: t,
              rules: r,
              children: n
            }
            of e.ruleset.values()) {
            var o = this.ruleset.get(t);
            o ? (o.rules.push(...r), o.children.merge(n)) : this.ruleset.set(t, {
              query: t,
              rules: r,
              children: n
            })
          }
          for (var [i, a] of e.precedenceLookup.entries()) {
            var s, l = null !== (s = this.precedenceLookup.get(i)) && void 0 !== s ? s : new Set;
            this.precedenceLookup.set(i, new Set([...l, ...a]))
          }
        }
        mergeIfCompatible(e) {
          return !!this.isCompatible(e) && (this.merge(e), !0)
        }
        getSortedRuleset() {
          var e = this,
            t = [],
            r = function(r) {
              var o = e.ruleset.get(n);
              if (!o) throw new Error("Can't find condition for ".concat(n));
              var i = t.findIndex((e => r.has(e.query)));
              i > -1 ? t.splice(i, 0, o) : t.push(o)
            };
          for (var [n, o] of this.precedenceLookup.entries()) r(o);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: r,
              children: n
            }
            of this.getSortedRuleset()) {
            var o = {};
            for (var i of r) o[i.selector] = hn(hn({}, o[i.selector]), i.rule);
            Object.assign(o, ...n.renderToArray()), e.push({
              [t]: o
            })
          }
          return e
        }
      }
      var vn, yn = {
          ":-moz-any-link": !0,
          ":-moz-full-screen": !0,
          ":-moz-placeholder": !0,
          ":-moz-read-only": !0,
          ":-moz-read-write": !0,
          ":-ms-fullscreen": !0,
          ":-ms-input-placeholder": !0,
          ":-webkit-any-link": !0,
          ":-webkit-full-screen": !0,
          "::-moz-color-swatch": !0,
          "::-moz-list-bullet": !0,
          "::-moz-list-number": !0,
          "::-moz-page-sequence": !0,
          "::-moz-page": !0,
          "::-moz-placeholder": !0,
          "::-moz-progress-bar": !0,
          "::-moz-range-progress": !0,
          "::-moz-range-thumb": !0,
          "::-moz-range-track": !0,
          "::-moz-scrolled-page-sequence": !0,
          "::-moz-selection": !0,
          "::-ms-backdrop": !0,
          "::-ms-browse": !0,
          "::-ms-check": !0,
          "::-ms-clear": !0,
          "::-ms-fill-lower": !0,
          "::-ms-fill-upper": !0,
          "::-ms-fill": !0,
          "::-ms-reveal": !0,
          "::-ms-thumb": !0,
          "::-ms-ticks-after": !0,
          "::-ms-ticks-before": !0,
          "::-ms-tooltip": !0,
          "::-ms-track": !0,
          "::-ms-value": !0,
          "::-webkit-backdrop": !0,
          "::-webkit-calendar-picker-indicator": !0,
          "::-webkit-inner-spin-button": !0,
          "::-webkit-input-placeholder": !0,
          "::-webkit-meter-bar": !0,
          "::-webkit-meter-even-less-good-value": !0,
          "::-webkit-meter-inner-element": !0,
          "::-webkit-meter-optimum-value": !0,
          "::-webkit-meter-suboptimum-value": !0,
          "::-webkit-outer-spin-button": !0,
          "::-webkit-progress-bar": !0,
          "::-webkit-progress-inner-element": !0,
          "::-webkit-progress-inner-value": !0,
          "::-webkit-progress-value": !0,
          "::-webkit-resizer": !0,
          "::-webkit-scrollbar-button": !0,
          "::-webkit-scrollbar-corner": !0,
          "::-webkit-scrollbar-thumb": !0,
          "::-webkit-scrollbar-track-piece": !0,
          "::-webkit-scrollbar-track": !0,
          "::-webkit-scrollbar": !0,
          "::-webkit-search-cancel-button": !0,
          "::-webkit-search-results-button": !0,
          "::-webkit-slider-runnable-track": !0,
          "::-webkit-slider-thumb": !0,
          "::after": !0,
          "::backdrop": !0,
          "::before": !0,
          "::cue": !0,
          "::file-selector-button": !0,
          "::first-letter": !0,
          "::first-line": !0,
          "::grammar-error": !0,
          "::marker": !0,
          "::placeholder": !0,
          "::selection": !0,
          "::spelling-error": !0,
          "::target-text": !0,
          "::view-transition-group": !0,
          "::view-transition-image-pair": !0,
          "::view-transition-new": !0,
          "::view-transition-old": !0,
          "::view-transition": !0,
          ":active": !0,
          ":after": !0,
          ":any-link": !0,
          ":before": !0,
          ":blank": !0,
          ":checked": !0,
          ":default": !0,
          ":defined": !0,
          ":disabled": !0,
          ":empty": !0,
          ":enabled": !0,
          ":first-child": !0,
          ":first-letter": !0,
          ":first-line": !0,
          ":first-of-type": !0,
          ":first": !0,
          ":focus-visible": !0,
          ":focus-within": !0,
          ":focus": !0,
          ":fullscreen": !0,
          ":hover": !0,
          ":in-range": !0,
          ":indeterminate": !0,
          ":invalid": !0,
          ":last-child": !0,
          ":last-of-type": !0,
          ":left": !0,
          ":link": !0,
          ":only-child": !0,
          ":only-of-type": !0,
          ":optional": !0,
          ":out-of-range": !0,
          ":placeholder-shown": !0,
          ":read-only": !0,
          ":read-write": !0,
          ":required": !0,
          ":right": !0,
          ":root": !0,
          ":scope": !0,
          ":target": !0,
          ":valid": !0,
          ":visited": !0
        },
        bn = Object.keys(yn),
        _n = yn,
        wn = (e, t) => new Error(Dr(vn || (vn = _r(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        xn = e => {
          if ("@media " === e) throw wn(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = Jr(e[t])
            })(rn(e))
          } catch (t) {
            throw wn(e, t.message)
          }
        },
        En = ["vars"],
        Sn = ["content"],
        Cn = "__DECLARATION",
        Pn = {
          animationIterationCount: !0,
          borderImage: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          initialLetter: !0,
          lineClamp: !0,
          lineHeight: !0,
          maxLines: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          tabSize: !0,
          WebkitLineClamp: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          maskBorder: !0,
          maskBorderOutset: !0,
          maskBorderSlice: !0,
          maskBorderWidth: !0,
          shapeImageThreshold: !0,
          stopOpacity: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        };

      function On(e, t, r, n) {
        var o = e.slice(0, t),
          i = e.slice(r);
        return "".concat(o).concat(n).concat(i)
      }
      var Tn = [...bn, "@layer", "@media", "@supports", "@container", "selectors"];
      class kn {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new gn], this.fontFaceRules = [], this.keyframesRules = [], this.propertyRules = [], this.localClassNamesMap = new Map(e.map((e => [e, e]))), this.localClassNamesSearch = new vr(e), this.layers = new Map, this.composedClassLists = t.map((e => {
            var {
              identifier: t,
              classList: r
            } = e;
            return {
              identifier: t,
              regex: RegExp("(".concat(r, ")"), "g")
            }
          })).reverse()
        }
        processCssObj(e) {
          if ("fontFace" !== e.type)
            if ("property" !== e.type) {
              if ("keyframes" === e.type) return e.rule = Object.fromEntries(Object.entries(e.rule).map((e => {
                var [t, r] = e;
                return [t, this.transformVars(this.transformProperties(r))]
              }))), void this.keyframesRules.push(e);
              if (this.currConditionalRuleset = new gn, "layer" === e.type) {
                var t = "@layer ".concat(e.name);
                this.addLayer([t])
              } else {
                var r = mn(e.rule, Tn);
                this.addRule({
                  selector: e.selector,
                  rule: r
                }), this.transformLayer(e, e.rule["@layer"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule)
              }
              this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
            } else this.propertyRules.push(e);
          else this.fontFaceRules.push(e.rule)
        }
        addConditionalRule(e, t) {
          var r = this.transformVars(this.transformProperties(e.rule)),
            n = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var o = t[t.length - 1],
            i = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: n,
            rule: r
          }, o, i)
        }
        addRule(e) {
          var t = this.transformVars(this.transformProperties(e.rule)),
            r = this.transformSelector(e.selector);
          this.rules.push({
            selector: r,
            rule: t
          })
        }
        addLayer(e) {
          var t = e.join(" - ");
          this.layers.set(t, e)
        }
        transformProperties(e) {
          return this.transformContent(this.pixelifyProperties(e))
        }
        pixelifyProperties(e) {
          return pn(e, ((t, r) => {
            "number" != typeof t || 0 === t || Pn[r] || (e[r] = "".concat(t, "px"))
          })), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, r = fn(e, En);
          return t ? hn(hn({}, function(e) {
            var t, r = {};
            for (var n in e) r[(e[n], t = n, dr(t))] = e[n];
            return r
          }(t)), r) : r
        }
        transformContent(e) {
          var {
            content: t
          } = e, r = fn(e, Sn);
          return void 0 === t ? r : hn({
            content: (Array.isArray(t) ? t : [t]).map((e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"')))
          }, r)
        }
        transformClassname(e) {
          return ".".concat(gr()(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            r = function(e) {
              t = t.replace(o, (() => (function() {
                (() => {
                  if (yr.length < 1) throw new Error("No adapter configured");
                  return yr[yr.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e)))
            };
          for (var {
              identifier: n,
              regex: o
            }
            of this.composedClassLists) r(n);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var i = this.localClassNamesSearch.search(t), a = t.length, s = i.length - 1; s >= 0; s--) {
            var [l, [c]] = i[s], u = l - c.length + 1;
            a <= l || (a = u, "." !== t[u - 1] && (t = On(t, u, l + 1, this.transformClassname(c))))
          }
          return t
        }
        transformSelectors(e, t, r) {
          pn(t.selectors, ((t, n) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var o = this.transformSelector(n.replace(RegExp("&", "g"), e.selector));
            ((e, t) => {
              var r, n = () => {
                var r = new RegExp(".".concat(gr()(t, {
                  isIdentifier: !0
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return e.replace(r, "&")
              };
              try {
                r = jr(e)
              } catch (e) {
                throw new Error("Invalid selector: ".concat(n()))
              }
              r.forEach((e => {
                try {
                  for (var r = e.length - 1; r >= -1; r--) {
                    if (!e[r]) throw new Error;
                    var o = e[r];
                    if ("child" === o.type || "parent" === o.type || "sibling" === o.type || "adjacent" === o.type || "descendant" === o.type) throw new Error;
                    if ("attribute" === o.type && "class" === o.name && o.value === t) return
                  }
                } catch (e) {
                  throw new Error(Dr(zr || (zr = _r(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), n(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
                }
              }))
            })(o, e.selector);
            var i = {
              selector: o,
              rule: mn(t, Tn)
            };
            r ? this.addConditionalRule(i, r) : this.addRule(i);
            var a = {
              type: "selector",
              selector: o,
              rule: t
            };
            this.transformLayer(a, t["@layer"], r), this.transformSupports(a, t["@supports"], r), this.transformMedia(a, t["@media"], r), this.transformContainer(a, t["@container"], r)
          }))
        }
        transformMedia(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [o, i] of(null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@media ".concat(e)))), Object.entries(t))) {
              var a = "@media ".concat(o);
              xn(a);
              var s = [...n, a];
              this.addConditionalRule({
                selector: e.selector,
                rule: mn(i, Tn)
              }, s), "local" === e.type && (this.transformSimplePseudos(e, i, s), this.transformSelectors(e, i, s)), this.transformLayer(e, i["@layer"], s), this.transformSupports(e, i["@supports"], s), this.transformContainer(e, i["@container"], s)
            }
        }
        transformContainer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@container ".concat(e)))), pn(t, ((t, r) => {
            var o = "@container ".concat(r),
              i = [...n, o];
            this.addConditionalRule({
              selector: e.selector,
              rule: mn(t, Tn)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformLayer(e, t["@layer"], i), this.transformSupports(e, t["@supports"], i), this.transformMedia(e, t["@media"], i)
          })))
        }
        transformLayer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@layer ".concat(e)))), pn(t, ((t, r) => {
            var o = [...n, "@layer ".concat(r)];
            this.addLayer(o), this.addConditionalRule({
              selector: e.selector,
              rule: mn(t, Tn)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformMedia(e, t["@media"], o), this.transformSupports(e, t["@supports"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSupports(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@supports ".concat(e)))), pn(t, ((t, r) => {
            var o = [...n, "@supports ".concat(r)];
            this.addConditionalRule({
              selector: e.selector,
              rule: mn(t, Tn)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformLayer(e, t["@layer"], o), this.transformMedia(e, t["@media"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSimplePseudos(e, t, r) {
          for (var n of Object.keys(t))
            if (_n[n]) {
              if ("local" !== e.type) throw new Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              r ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(n),
                rule: t[n]
              }, r) : this.addRule({
                conditions: r,
                selector: "".concat(e.selector).concat(n),
                rule: t[n]
              })
            }
        }
        toCss() {
          var e = [];
          for (var t of this.fontFaceRules) e.push(jn({
            "@font-face": t
          }));
          for (var r of this.propertyRules) e.push(jn({
            ["@property ".concat(r.name)]: r.rule
          }));
          for (var n of this.keyframesRules) e.push(jn({
            ["@keyframes ".concat(n.name)]: n.rule
          }));
          for (var o of this.layers.values()) {
            var [i, ...a] = o.reverse(), s = {
              [i]: Cn
            };
            for (var l of a) s = {
              [l]: s
            };
            e.push(jn(s))
          }
          for (var c of this.rules) e.push(jn({
            [c.selector]: c.rule
          }));
          for (var u of this.conditionalRulesets)
            for (var d of u.renderToArray()) e.push(jn(d));
          return e.filter(Boolean)
        }
      }

      function jn(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = [],
          n = function(n) {
            var o, i = e[n];
            i && Array.isArray(i) ? r.push(...i.map((e => jn({
              [n]: e
            }, t)))) : i && "object" == typeof i ? 0 === Object.keys(i).length || r.push("".concat(t).concat(n, " {\n").concat(jn(i, t + "  "), "\n").concat(t, "}")) : i === Cn ? r.push("".concat(t).concat(n, ";")) : r.push("".concat(t).concat(n.startsWith("--") ? n : (o = n, o.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(i, ";"))
          };
        for (var o of Object.keys(e)) n(o);
        return r.join("\n")
      }
      var An = r(87144);
      const Ln = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
        Nn = new Set,
        Rn = "object" == typeof An && An ? An : {},
        In = (e, t, r, n) => {
          "function" == typeof Rn.emitWarning ? Rn.emitWarning(e, t, r, n) : console.error(`[${r}] ${t}: ${e}`)
        };
      let Dn = globalThis.AbortController,
        Mn = globalThis.AbortSignal;
      if (void 0 === Dn) {
        Mn = class {
          onabort;
          _onabort = [];
          reason;
          aborted = !1;
          addEventListener(e, t) {
            this._onabort.push(t)
          }
        }, Dn = class {
          constructor() {
            t()
          }
          signal = (() => new Mn)();
          abort(e) {
            if (!this.signal.aborted) {
              this.signal.reason = e, this.signal.aborted = !0;
              for (const t of this.signal._onabort) t(e);
              this.signal.onabort?.(e)
            }
          }
        };
        let e = "1" !== Rn.env?.LRU_CACHE_IGNORE_AC_WARNING;
        const t = () => {
          e && (e = !1, In("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t))
        }
      }
      Symbol("type");
      const Bn = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
        Hn = e => Bn(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? zn : null : null;
      class zn extends Array {
        constructor(e) {
          super(e), this.fill(0)
        }
      }
      class Fn {
        heap;
        length;
        static #e = !1;
        static create(e) {
          const t = Hn(e);
          if (!t) return [];
          Fn.#e = !0;
          const r = new Fn(e, t);
          return Fn.#e = !1, r
        }
        constructor(e, t) {
          if (!Fn.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
          this.heap = new t(e), this.length = 0
        }
        push(e) {
          this.heap[this.length++] = e
        }
        pop() {
          return this.heap[--this.length]
        }
      }
      class Vn {
        #t;
        #r;
        #n;
        #o;
        #i;
        #a;
        ttl;
        ttlResolution;
        ttlAutopurge;
        updateAgeOnGet;
        updateAgeOnHas;
        allowStale;
        noDisposeOnSet;
        noUpdateTTL;
        maxEntrySize;
        sizeCalculation;
        noDeleteOnFetchRejection;
        noDeleteOnStaleGet;
        allowStaleOnFetchAbort;
        allowStaleOnFetchRejection;
        ignoreFetchAbort;
        #s;
        #l;
        #c;
        #u;
        #d;
        #h;
        #f;
        #p;
        #m;
        #g;
        #v;
        #y;
        #b;
        #_;
        #w;
        #x;
        #E;
        static unsafeExposeInternals(e) {
          return {
            starts: e.#b,
            ttls: e.#_,
            sizes: e.#y,
            keyMap: e.#c,
            keyList: e.#u,
            valList: e.#d,
            next: e.#h,
            prev: e.#f,
            get head() {
              return e.#p
            },
            get tail() {
              return e.#m
            },
            free: e.#g,
            isBackgroundFetch: t => e.#S(t),
            backgroundFetch: (t, r, n, o) => e.#C(t, r, n, o),
            moveToTail: t => e.#P(t),
            indexes: t => e.#O(t),
            rindexes: t => e.#T(t),
            isStale: t => e.#k(t)
          }
        }
        get max() {
          return this.#t
        }
        get maxSize() {
          return this.#r
        }
        get calculatedSize() {
          return this.#l
        }
        get size() {
          return this.#s
        }
        get fetchMethod() {
          return this.#i
        }
        get memoMethod() {
          return this.#a
        }
        get dispose() {
          return this.#n
        }
        get disposeAfter() {
          return this.#o
        }
        constructor(e) {
          const {
            max: t = 0,
            ttl: r,
            ttlResolution: n = 1,
            ttlAutopurge: o,
            updateAgeOnGet: i,
            updateAgeOnHas: a,
            allowStale: s,
            dispose: l,
            disposeAfter: c,
            noDisposeOnSet: u,
            noUpdateTTL: d,
            maxSize: h = 0,
            maxEntrySize: f = 0,
            sizeCalculation: p,
            fetchMethod: m,
            memoMethod: g,
            noDeleteOnFetchRejection: v,
            noDeleteOnStaleGet: y,
            allowStaleOnFetchRejection: b,
            allowStaleOnFetchAbort: _,
            ignoreFetchAbort: w
          } = e;
          if (0 !== t && !Bn(t)) throw new TypeError("max option must be a nonnegative integer");
          const x = t ? Hn(t) : Array;
          if (!x) throw new Error("invalid max value: " + t);
          if (this.#t = t, this.#r = h, this.maxEntrySize = f || this.#r, this.sizeCalculation = p, this.sizeCalculation) {
            if (!this.#r && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
          }
          if (void 0 !== g && "function" != typeof g) throw new TypeError("memoMethod must be a function if defined");
          if (this.#a = g, void 0 !== m && "function" != typeof m) throw new TypeError("fetchMethod must be a function if specified");
          if (this.#i = m, this.#x = !!m, this.#c = new Map, this.#u = new Array(t).fill(void 0), this.#d = new Array(t).fill(void 0), this.#h = new x(t), this.#f = new x(t), this.#p = 0, this.#m = 0, this.#g = Fn.create(t), this.#s = 0, this.#l = 0, "function" == typeof l && (this.#n = l), "function" == typeof c ? (this.#o = c, this.#v = []) : (this.#o = void 0, this.#v = void 0), this.#w = !!this.#n, this.#E = !!this.#o, this.noDisposeOnSet = !!u, this.noUpdateTTL = !!d, this.noDeleteOnFetchRejection = !!v, this.allowStaleOnFetchRejection = !!b, this.allowStaleOnFetchAbort = !!_, this.ignoreFetchAbort = !!w, 0 !== this.maxEntrySize) {
            if (0 !== this.#r && !Bn(this.#r)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!Bn(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#j()
          }
          if (this.allowStale = !!s, this.noDeleteOnStaleGet = !!y, this.updateAgeOnGet = !!i, this.updateAgeOnHas = !!a, this.ttlResolution = Bn(n) || 0 === n ? n : 1, this.ttlAutopurge = !!o, this.ttl = r || 0, this.ttl) {
            if (!Bn(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#A()
          }
          if (0 === this.#t && 0 === this.ttl && 0 === this.#r) throw new TypeError("At least one of max, maxSize, or ttl is required");
          if (!this.ttlAutopurge && !this.#t && !this.#r) {
            const e = "LRU_CACHE_UNBOUNDED";
            (e => !Nn.has(e))(e) && (Nn.add(e), In("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, Vn))
          }
        }
        getRemainingTTL(e) {
          return this.#c.has(e) ? 1 / 0 : 0
        }
        #A() {
          var e = this;
          const t = new zn(this.#t),
            r = new zn(this.#t);
          this.#_ = t, this.#b = r, this.#L = function(n, o) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ln.now();
            if (r[n] = 0 !== o ? i : 0, t[n] = o, 0 !== o && e.ttlAutopurge) {
              const t = setTimeout((() => {
                e.#k(n) && e.#N(e.#u[n], "expire")
              }), o + 1);
              t.unref && t.unref()
            }
          }, this.#R = e => {
            r[e] = 0 !== t[e] ? Ln.now() : 0
          }, this.#I = (e, i) => {
            if (t[i]) {
              const a = t[i],
                s = r[i];
              if (!a || !s) return;
              e.ttl = a, e.start = s, e.now = n || o();
              const l = e.now - s;
              e.remainingTTL = a - l
            }
          };
          let n = 0;
          const o = () => {
            const e = Ln.now();
            if (this.ttlResolution > 0) {
              n = e;
              const t = setTimeout((() => n = 0), this.ttlResolution);
              t.unref && t.unref()
            }
            return e
          };
          this.getRemainingTTL = e => {
            const i = this.#c.get(e);
            if (void 0 === i) return 0;
            const a = t[i],
              s = r[i];
            return a && s ? a - ((n || o()) - s) : 1 / 0
          }, this.#k = e => {
            const i = r[e],
              a = t[e];
            return !!a && !!i && (n || o()) - i > a
          }
        }
        #R = () => {};
        #I = () => {};
        #L = () => {};
        #k = () => !1;
        #j() {
          const e = new zn(this.#t);
          this.#l = 0, this.#y = e, this.#D = t => {
            this.#l -= e[t], e[t] = 0
          }, this.#M = (e, t, r, n) => {
            if (this.#S(t)) return 0;
            if (!Bn(r)) {
              if (!n) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
              if ("function" != typeof n) throw new TypeError("sizeCalculation must be a function");
              if (r = n(t, e), !Bn(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
            }
            return r
          }, this.#B = (t, r, n) => {
            if (e[t] = r, this.#r) {
              const r = this.#r - e[t];
              for (; this.#l > r;) this.#H(!0)
            }
            this.#l += e[t], n && (n.entrySize = r, n.totalCalculatedSize = this.#l)
          }
        }
        #D = e => {};
        #B = (e, t, r) => {};
        #M = (e, t, r, n) => {
          if (r || n) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0
        };
        #O() {
          var e = this;
          let {
            allowStale: t = this.allowStale
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function*() {
            if (e.#s)
              for (let r = e.#m; e.#z(r) && (!t && e.#k(r) || (yield r), r !== e.#p);) r = e.#f[r]
          }()
        }
        #T() {
          var e = this;
          let {
            allowStale: t = this.allowStale
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function*() {
            if (e.#s)
              for (let r = e.#p; e.#z(r) && (!t && e.#k(r) || (yield r), r !== e.#m);) r = e.#h[r]
          }()
        }
        #z(e) {
          return void 0 !== e && this.#c.get(this.#u[e]) === e
        }* entries() {
          for (const e of this.#O()) void 0 === this.#d[e] || void 0 === this.#u[e] || this.#S(this.#d[e]) || (yield [this.#u[e], this.#d[e]])
        }* rentries() {
          for (const e of this.#T()) void 0 === this.#d[e] || void 0 === this.#u[e] || this.#S(this.#d[e]) || (yield [this.#u[e], this.#d[e]])
        }* keys() {
          for (const e of this.#O()) {
            const t = this.#u[e];
            void 0 === t || this.#S(this.#d[e]) || (yield t)
          }
        }* rkeys() {
          for (const e of this.#T()) {
            const t = this.#u[e];
            void 0 === t || this.#S(this.#d[e]) || (yield t)
          }
        }* values() {
          for (const e of this.#O()) void 0 === this.#d[e] || this.#S(this.#d[e]) || (yield this.#d[e])
        }* rvalues() {
          for (const e of this.#T()) void 0 === this.#d[e] || this.#S(this.#d[e]) || (yield this.#d[e])
        } [Symbol.iterator]() {
          return this.entries()
        } [Symbol.toStringTag] = "LRUCache";
        find(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          for (const r of this.#O()) {
            const n = this.#d[r],
              o = this.#S(n) ? n.__staleWhileFetching : n;
            if (void 0 !== o && e(o, this.#u[r], this)) return this.get(this.#u[r], t)
          }
        }
        forEach(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          for (const r of this.#O()) {
            const n = this.#d[r],
              o = this.#S(n) ? n.__staleWhileFetching : n;
            void 0 !== o && e.call(t, o, this.#u[r], this)
          }
        }
        rforEach(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          for (const r of this.#T()) {
            const n = this.#d[r],
              o = this.#S(n) ? n.__staleWhileFetching : n;
            void 0 !== o && e.call(t, o, this.#u[r], this)
          }
        }
        purgeStale() {
          let e = !1;
          for (const t of this.#T({
              allowStale: !0
            })) this.#k(t) && (this.#N(this.#u[t], "expire"), e = !0);
          return e
        }
        info(e) {
          const t = this.#c.get(e);
          if (void 0 === t) return;
          const r = this.#d[t],
            n = this.#S(r) ? r.__staleWhileFetching : r;
          if (void 0 === n) return;
          const o = {
            value: n
          };
          if (this.#_ && this.#b) {
            const e = this.#_[t],
              r = this.#b[t];
            if (e && r) {
              const t = e - (Ln.now() - r);
              o.ttl = t, o.start = Date.now()
            }
          }
          return this.#y && (o.size = this.#y[t]), o
        }
        dump() {
          const e = [];
          for (const t of this.#O({
              allowStale: !0
            })) {
            const r = this.#u[t],
              n = this.#d[t],
              o = this.#S(n) ? n.__staleWhileFetching : n;
            if (void 0 === o || void 0 === r) continue;
            const i = {
              value: o
            };
            if (this.#_ && this.#b) {
              i.ttl = this.#_[t];
              const e = Ln.now() - this.#b[t];
              i.start = Math.floor(Date.now() - e)
            }
            this.#y && (i.size = this.#y[t]), e.unshift([r, i])
          }
          return e
        }
        load(e) {
          this.clear();
          for (const [t, r] of e) {
            if (r.start) {
              const e = Date.now() - r.start;
              r.start = Ln.now() - e
            }
            this.set(t, r.value, r)
          }
        }
        set(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (void 0 === t) return this.delete(e), this;
          const {
            ttl: n = this.ttl,
            start: o,
            noDisposeOnSet: i = this.noDisposeOnSet,
            sizeCalculation: a = this.sizeCalculation,
            status: s
          } = r;
          let {
            noUpdateTTL: l = this.noUpdateTTL
          } = r;
          const c = this.#M(e, t, r.size || 0, a);
          if (this.maxEntrySize && c > this.maxEntrySize) return s && (s.set = "miss", s.maxEntrySizeExceeded = !0), this.#N(e, "set"), this;
          let u = 0 === this.#s ? void 0 : this.#c.get(e);
          if (void 0 === u) u = 0 === this.#s ? this.#m : 0 !== this.#g.length ? this.#g.pop() : this.#s === this.#t ? this.#H(!1) : this.#s, this.#u[u] = e, this.#d[u] = t, this.#c.set(e, u), this.#h[this.#m] = u, this.#f[u] = this.#m, this.#m = u, this.#s++, this.#B(u, c, s), s && (s.set = "add"), l = !1;
          else {
            this.#P(u);
            const r = this.#d[u];
            if (t !== r) {
              if (this.#x && this.#S(r)) {
                r.__abortController.abort(new Error("replaced"));
                const {
                  __staleWhileFetching: t
                } = r;
                void 0 === t || i || (this.#w && this.#n?.(t, e, "set"), this.#E && this.#v?.push([t, e, "set"]))
              } else i || (this.#w && this.#n?.(r, e, "set"), this.#E && this.#v?.push([r, e, "set"]));
              if (this.#D(u), this.#B(u, c, s), this.#d[u] = t, s) {
                s.set = "replace";
                const e = r && this.#S(r) ? r.__staleWhileFetching : r;
                void 0 !== e && (s.oldValue = e)
              }
            } else s && (s.set = "update")
          }
          if (0 === n || this.#_ || this.#A(), this.#_ && (l || this.#L(u, n, o), s && this.#I(s, u)), !i && this.#E && this.#v) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#o?.(...t)
          }
          return this
        }
        pop() {
          try {
            for (; this.#s;) {
              const e = this.#d[this.#p];
              if (this.#H(!0), this.#S(e)) {
                if (e.__staleWhileFetching) return e.__staleWhileFetching
              } else if (void 0 !== e) return e
            }
          } finally {
            if (this.#E && this.#v) {
              const e = this.#v;
              let t;
              for (; t = e?.shift();) this.#o?.(...t)
            }
          }
        }
        #H(e) {
          const t = this.#p,
            r = this.#u[t],
            n = this.#d[t];
          return this.#x && this.#S(n) ? n.__abortController.abort(new Error("evicted")) : (this.#w || this.#E) && (this.#w && this.#n?.(n, r, "evict"), this.#E && this.#v?.push([n, r, "evict"])), this.#D(t), e && (this.#u[t] = void 0, this.#d[t] = void 0, this.#g.push(t)), 1 === this.#s ? (this.#p = this.#m = 0, this.#g.length = 0) : this.#p = this.#h[t], this.#c.delete(r), this.#s--, t
        }
        has(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            updateAgeOnHas: r = this.updateAgeOnHas,
            status: n
          } = t, o = this.#c.get(e);
          if (void 0 !== o) {
            const e = this.#d[o];
            if (this.#S(e) && void 0 === e.__staleWhileFetching) return !1;
            if (!this.#k(o)) return r && this.#R(o), n && (n.has = "hit", this.#I(n, o)), !0;
            n && (n.has = "stale", this.#I(n, o))
          } else n && (n.has = "miss");
          return !1
        }
        peek(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            allowStale: r = this.allowStale
          } = t, n = this.#c.get(e);
          if (void 0 === n || !r && this.#k(n)) return;
          const o = this.#d[n];
          return this.#S(o) ? o.__staleWhileFetching : o
        }
        #C(e, t, r, n) {
          var o = this;
          const i = void 0 === t ? void 0 : this.#d[t];
          if (this.#S(i)) return i;
          const a = new Dn,
            {
              signal: s
            } = r;
          s?.addEventListener("abort", (() => a.abort(s.reason)), {
            signal: a.signal
          });
          const l = {
              signal: a.signal,
              options: r,
              context: n
            },
            c = function(n) {
              let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              const {
                aborted: s
              } = a.signal, c = r.ignoreFetchAbort && void 0 !== n;
              if (r.status && (s && !i ? (r.status.fetchAborted = !0, r.status.fetchError = a.signal.reason, c && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), s && !c && !i) return u(a.signal.reason);
              const h = d;
              return o.#d[t] === d && (void 0 === n ? h.__staleWhileFetching ? o.#d[t] = h.__staleWhileFetching : o.#N(e, "fetch") : (r.status && (r.status.fetchUpdated = !0), o.set(e, n, l.options))), n
            },
            u = n => {
              const {
                aborted: o
              } = a.signal, i = o && r.allowStaleOnFetchAbort, s = i || r.allowStaleOnFetchRejection, l = s || r.noDeleteOnFetchRejection, c = d;
              if (this.#d[t] === d && (l && void 0 !== c.__staleWhileFetching ? i || (this.#d[t] = c.__staleWhileFetching) : this.#N(e, "fetch")), s) return r.status && void 0 !== c.__staleWhileFetching && (r.status.returnedStale = !0), c.__staleWhileFetching;
              if (c.__returned === c) throw n
            };
          r.status && (r.status.fetchDispatched = !0);
          const d = new Promise(((t, n) => {
              const o = this.#i?.(e, i, l);
              o && o instanceof Promise && o.then((e => t(void 0 === e ? void 0 : e)), n), a.signal.addEventListener("abort", (() => {
                r.ignoreFetchAbort && !r.allowStaleOnFetchAbort || (t(void 0), r.allowStaleOnFetchAbort && (t = e => c(e, !0)))
              }))
            })).then(c, (e => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), u(e)))),
            h = Object.assign(d, {
              __abortController: a,
              __staleWhileFetching: i,
              __returned: void 0
            });
          return void 0 === t ? (this.set(e, h, {
            ...l.options,
            status: void 0
          }), t = this.#c.get(e)) : this.#d[t] = h, h
        }
        #S(e) {
          if (!this.#x) return !1;
          const t = e;
          return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof Dn
        }
        async fetch(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: n = this.updateAgeOnGet,
            noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
            ttl: i = this.ttl,
            noDisposeOnSet: a = this.noDisposeOnSet,
            size: s = 0,
            sizeCalculation: l = this.sizeCalculation,
            noUpdateTTL: c = this.noUpdateTTL,
            noDeleteOnFetchRejection: u = this.noDeleteOnFetchRejection,
            allowStaleOnFetchRejection: d = this.allowStaleOnFetchRejection,
            ignoreFetchAbort: h = this.ignoreFetchAbort,
            allowStaleOnFetchAbort: f = this.allowStaleOnFetchAbort,
            context: p,
            forceRefresh: m = !1,
            status: g,
            signal: v
          } = t;
          if (!this.#x) return g && (g.fetch = "get"), this.get(e, {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: o,
            status: g
          });
          const y = {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: o,
            ttl: i,
            noDisposeOnSet: a,
            size: s,
            sizeCalculation: l,
            noUpdateTTL: c,
            noDeleteOnFetchRejection: u,
            allowStaleOnFetchRejection: d,
            allowStaleOnFetchAbort: f,
            ignoreFetchAbort: h,
            status: g,
            signal: v
          };
          let b = this.#c.get(e);
          if (void 0 === b) {
            g && (g.fetch = "miss");
            const t = this.#C(e, b, y, p);
            return t.__returned = t
          } {
            const t = this.#d[b];
            if (this.#S(t)) {
              const e = r && void 0 !== t.__staleWhileFetching;
              return g && (g.fetch = "inflight", e && (g.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
            }
            const o = this.#k(b);
            if (!m && !o) return g && (g.fetch = "hit"), this.#P(b), n && this.#R(b), g && this.#I(g, b), t;
            const i = this.#C(e, b, y, p),
              a = void 0 !== i.__staleWhileFetching && r;
            return g && (g.fetch = o ? "stale" : "refresh", a && o && (g.returnedStale = !0)), a ? i.__staleWhileFetching : i.__returned = i
          }
        }
        async forceFetch(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = await this.fetch(e, t);
          if (void 0 === r) throw new Error("fetch() returned undefined");
          return r
        }
        memo(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = this.#a;
          if (!r) throw new Error("no memoMethod provided to constructor");
          const {
            context: n,
            forceRefresh: o,
            ...i
          } = t, a = this.get(e, i);
          if (!o && void 0 !== a) return a;
          const s = r(e, a, {
            options: i,
            context: n
          });
          return this.set(e, s, i), s
        }
        get(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: n = this.updateAgeOnGet,
            noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
            status: i
          } = t, a = this.#c.get(e);
          if (void 0 !== a) {
            const t = this.#d[a],
              s = this.#S(t);
            return i && this.#I(i, a), this.#k(a) ? (i && (i.get = "stale"), s ? (i && r && void 0 !== t.__staleWhileFetching && (i.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (o || this.#N(e, "expire"), i && r && (i.returnedStale = !0), r ? t : void 0)) : (i && (i.get = "hit"), s ? t.__staleWhileFetching : (this.#P(a), n && this.#R(a), t))
          }
          i && (i.get = "miss")
        }
        #F(e, t) {
          this.#f[t] = e, this.#h[e] = t
        }
        #P(e) {
          e !== this.#m && (e === this.#p ? this.#p = this.#h[e] : this.#F(this.#f[e], this.#h[e]), this.#F(this.#m, e), this.#m = e)
        }
        delete(e) {
          return this.#N(e, "delete")
        }
        #N(e, t) {
          let r = !1;
          if (0 !== this.#s) {
            const n = this.#c.get(e);
            if (void 0 !== n)
              if (r = !0, 1 === this.#s) this.#V(t);
              else {
                this.#D(n);
                const r = this.#d[n];
                if (this.#S(r) ? r.__abortController.abort(new Error("deleted")) : (this.#w || this.#E) && (this.#w && this.#n?.(r, e, t), this.#E && this.#v?.push([r, e, t])), this.#c.delete(e), this.#u[n] = void 0, this.#d[n] = void 0, n === this.#m) this.#m = this.#f[n];
                else if (n === this.#p) this.#p = this.#h[n];
                else {
                  const e = this.#f[n];
                  this.#h[e] = this.#h[n];
                  const t = this.#h[n];
                  this.#f[t] = this.#f[n]
                }
                this.#s--, this.#g.push(n)
              }
          }
          if (this.#E && this.#v?.length) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#o?.(...t)
          }
          return r
        }
        clear() {
          return this.#V("delete")
        }
        #V(e) {
          for (const t of this.#T({
              allowStale: !0
            })) {
            const r = this.#d[t];
            if (this.#S(r)) r.__abortController.abort(new Error("deleted"));
            else {
              const n = this.#u[t];
              this.#w && this.#n?.(r, n, e), this.#E && this.#v?.push([r, n, e])
            }
          }
          if (this.#c.clear(), this.#d.fill(void 0), this.#u.fill(void 0), this.#_ && this.#b && (this.#_.fill(0), this.#b.fill(0)), this.#y && this.#y.fill(0), this.#p = 0, this.#m = 0, this.#g.length = 0, this.#l = 0, this.#s = 0, this.#E && this.#v) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#o?.(...t)
          }
        }
      }
      r(98398);
      var Un = new Set,
        Gn = [],
        qn = [];
      br || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        br = !0, yr.push(e)
      })({
        appendCss: e => {
          qn.push(e)
        },
        registerClassName: e => {
          Un.add(e)
        },
        registerComposition: e => {
          Gn.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: e => {
          var t = function(e) {
            var {
              localClassNames: t,
              cssObjs: r,
              composedClassLists: n
            } = e, o = new kn(t, n);
            for (var i of r) o.processCssObj(i);
            return o.toCss()
          }({
            localClassNames: Array.from(Un),
            composedClassLists: Gn,
            cssObjs: qn
          }).join("\n");
          (e => {
            var {
              fileScope: t,
              css: r
            } = e, n = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, o = ur[n];
            if (!o) {
              var i = document.createElement("style");
              t.packageName && i.setAttribute("data-package", t.packageName), i.setAttribute("data-file", t.filePath), i.setAttribute("type", "text/css"), o = ur[n] = i, document.head.appendChild(i)
            }
            o.innerHTML = r
          })({
            fileScope: e,
            css: t
          }), qn = []
        },
        getIdentOption: () => "short"
      });
      new Vn({
        max: 500
      });
      var Xn = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        Wn = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        Kn = {
          dark: "foundry_nk7jgu_nu8bkp2",
          darkHc: "foundry_nk7jgu_nu8bkp4",
          light: "foundry_nk7jgu_nu8bkp1",
          lightHc: "foundry_nk7jgu_nu8bkp3",
          tokens: "foundry_nk7jgu_nu8bkp0"
        },
        $n = "--foundry_65afb887",
        Yn = "foundry_nk7jgu_nu8bkp0";
      const Zn = (0, h.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: Wn,
          platformScaleBreakpoints: Xn,
          locale: "en-US"
        }),
        Qn = () => (0, h.useContext)(Zn),
        Jn = () => {
          const {
            platformScale: e
          } = Qn();
          return e
        },
        eo = (e, t) => {
          const r = "more" === t ? Kn.lightHc : Kn.light,
            n = "more" === t ? Kn.darkHc : Kn.dark;
          return "dark" === e ? n : r
        };
      const to = () => d.X3 ? null : document.body;

      function ro(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function no(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function oo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? no(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ro(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : no(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function io(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, h.forwardRef)((({
        children: e,
        className: t,
        container: r = to(),
        asChild: n,
        colorScheme: o,
        defaultColorScheme: i,
        contrastMode: a,
        defaultContrastMode: s,
        platformScaleBreakpoints: l,
        platformScaleRatios: c,
        defaultPlatformScale: f,
        platformScale: m,
        locale: g = "en-US"
      }, v) => {
        const y = (0, h.useRef)(null),
          b = G(y, v),
          _ = (0, h.useRef)(r),
          {
            ratio: w,
            scale: x
          } = function(e) {
            const t = (0, h.useMemo)((() => ({
                ...Wn,
                ...e.platformScaleRatios
              })), [e.platformScaleRatios]),
              r = (0, h.useMemo)((() => ({
                ...Xn,
                ...e.platformScaleBreakpoints
              })), [e.platformScaleBreakpoints]),
              [n, o] = (0, h.useState)(e.platformScale || e.defaultPlatformScale),
              i = (0, h.useRef)([]),
              a = () => {
                if (!d.X3) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of i.current) t.removeEventListener("change", e);
                  i.current = []
                }
              };
            return (0, h.useEffect)((() => (e.platformScale ? o(e.platformScale) : (() => {
              if (!d.X3) {
                a();
                for (const e in r) {
                  const t = window.matchMedia(r[e]),
                    n = t => {
                      t.matches && o(e)
                    };
                  t.addEventListener("change", n), t.matches && o(e), i.current.push({
                    handler: n,
                    matchMedia: t
                  })
                }
              }
            })(), a)), [r, e.platformScale]), {
              scale: n,
              ratio: t[n]
            }
          }({
            platformScaleBreakpoints: l,
            platformScaleRatios: c,
            defaultPlatformScale: f,
            platformScale: m
          }),
          {
            appearanceClass: E,
            otherAppearanceClasses: S,
            providerColor: C,
            providerContrast: P
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark",
            contrastMode: r,
            defaultContrastMode: n = "normal"
          }) {
            const o = V("(prefers-color-scheme: light)"),
              i = V("(prefers-color-scheme: dark)"),
              a = V("(prefers-contrast: more)"),
              s = "system" !== e && e || o && "light" || i && "dark" || t,
              l = r || a && "more" || n,
              c = (0, h.useMemo)((() => eo(s, l)), [s, l]),
              u = (0, h.useMemo)((() => ((e, t) => {
                const r = eo(e, t);
                return [Kn.light, Kn.dark, Kn.lightHc, Kn.darkHc].filter((e => e !== r))
              })(s, l)), [s, l]);
            return {
              appearanceClass: c,
              otherAppearanceClasses: u,
              providerColor: s,
              providerContrast: l
            }
          }({
            colorScheme: o,
            defaultColorScheme: i,
            contrastMode: a,
            defaultContrastMode: s
          });
        return ((e, t, r, n, o) => {
          const i = U(o),
            a = U(e.current);
          (0, h.useEffect)((() => {
            e.current?.classList.contains(Yn) || e.current?.classList.add(Yn), e.current?.classList.add(r), e.current?.classList.remove(...n), i && o && e.current?.classList.contains(i) ? e.current?.classList.replace(i, o) : i && !o && e.current?.classList.contains(i) ? e.current?.classList.remove(i) : o && e.current?.classList.add(o)
          }), [r, o]), (0, h.useEffect)((() => {
            e.current?.style.setProperty($n, t.toString())
          }), [t]), (0, h.useEffect)((() => {
            a?.classList.remove(Yn), a?.classList.remove(r), a?.style.removeProperty($n), o && a?.classList.remove(o)
          }), [a])
        })(n ? y : _, w, E, S, t), (0, u.jsx)(Zn.Provider, {
          value: {
            locale: g,
            defaultColorScheme: i,
            colorScheme: C,
            defaultContrastMode: s,
            contrastMode: P,
            defaultPlatformScale: f,
            platformScale: x,
            platformScaleRatios: c,
            platformScaleBreakpoints: l
          },
          children: n ? (0, u.jsx)(p.DX, {
            ref: b,
            children: e
          }) : e
        })
      }));
      var ao = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        so = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = oo(oo({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ao(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return io(e.variantClassNames, (e => io(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        lo = so({
          defaultClassName: "foundry_hcgxh_8kowh41 foundry_hcgxh_1d5mo5m0 foundry_hcgxh_17pcofy0",
          variantClassNames: {
            appearance: {
              primary: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua1",
              secondary: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua2",
              tertiary: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua3",
              ghost: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua4",
              danger: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua6",
              information: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua5"
            },
            size: {
              MD: "foundry_hcgxh_17pcofy8 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdy foundry_hcgxh_tdsdcd11",
              LG: "foundry_hcgxh_17pcofy9 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd11"
            },
            fullWidth: {
              true: "foundry_hcgxh_17pcofya",
              false: "foundry_hcgxh_17pcofyb"
            },
            iconLeft: {
              true: "foundry_hcgxh_17pcofyc",
              false: "foundry_hcgxh_17pcofyd"
            },
            iconRight: {
              true: "foundry_hcgxh_17pcofye",
              false: "foundry_hcgxh_17pcofyf"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              size: "MD",
              iconLeft: !0
            }, "foundry_hcgxh_17pcofyg"],
            [{
              size: "MD",
              iconRight: !0
            }, "foundry_hcgxh_17pcofyh"],
            [{
              size: "LG",
              iconLeft: !0
            }, "foundry_hcgxh_17pcofyi"],
            [{
              size: "LG",
              iconRight: !0
            }, "foundry_hcgxh_17pcofyj"],
            [{
              size: "MD",
              appearance: "ghost"
            }, "foundry_hcgxh_17pcofyk"],
            [{
              size: "LG",
              appearance: "ghost"
            }, "foundry_hcgxh_17pcofyl"]
          ]
        }),
        co = so({
          defaultClassName: "foundry_hcgxh_17pcofyn",
          variantClassNames: {
            fullWidth: {
              true: "foundry_hcgxh_17pcofyo",
              false: "foundry_hcgxh_17pcofyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const uo = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          className: r,
          children: n,
          onClick: o,
          iconLeft: i,
          iconLeftLabel: a,
          iconRight: s,
          iconRightLabel: l,
          appearance: c,
          size: f = "MD",
          fullWidth: m = !1,
          ...g
        }, v) => {
          const y = (0, h.useRef)(null),
            b = G(y, v),
            _ = Jn(),
            w = "string" == typeof f ? f : f?.[_] ?? f.default ?? "MD",
            {
              events: x,
              others: E
            } = (0, d.bZ)(g, {
              onPress: !1
            }),
            {
              buttonProps: S,
              isPressed: C
            } = cr({
              ...E,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => E.onPress?.(e) ?? o?.(e)
            }, y),
            P = (0, d.v6)({
              ...x,
              role: "button",
              "data-pressed": C,
              "data-testid": e,
              className: lo({
                appearance: c,
                size: w,
                fullWidth: m,
                iconLeft: !!i,
                iconRight: !!s
              })
            }, {
              ...S,
              className: r
            }),
            O = i && z[i],
            T = s && z[s],
            k = t ? p.DX : "button",
            j = m && (T || T && O);
          return (0, u.jsxs)(k, {
            ref: b,
            ...P,
            children: [j && (0, u.jsx)("div", {
              className: "foundry_hcgxh_17pcofyq"
            }), O && (0, u.jsx)(O, {
              label: a || "",
              size: w,
              className: "foundry_hcgxh_17pcofym"
            }), (0, u.jsx)(p.xV, {
              children: n
            }), T && (0, u.jsx)(T, {
              label: l || "",
              size: w,
              className: co({
                fullWidth: m
              })
            })]
          })
        })),
        ho = {
          toVector: (e, t) => (void 0 === e && (e = t), Array.isArray(e) ? e : [e, e]),
          add: (e, t) => [e[0] + t[0], e[1] + t[1]],
          sub: (e, t) => [e[0] - t[0], e[1] - t[1]],
          addTo(e, t) {
            e[0] += t[0], e[1] += t[1]
          },
          subTo(e, t) {
            e[0] -= t[0], e[1] -= t[1]
          }
        };

      function fo(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function po(e, t, r) {
        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .15;
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -fo(t - e, r - t, n) + t : e > r ? +fo(e - r, r - t, n) + r : e
      }

      function mo(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function go(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function vo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? go(Object(r), !0).forEach((function(t) {
            mo(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : go(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      const yo = {
        pointer: {
          start: "down",
          change: "move",
          end: "up"
        },
        mouse: {
          start: "down",
          change: "move",
          end: "up"
        },
        touch: {
          start: "start",
          change: "move",
          end: "end"
        },
        gesture: {
          start: "start",
          change: "change",
          end: "end"
        }
      };

      function bo(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const _o = ["enter", "leave"];
      const wo = ["gotpointercapture", "lostpointercapture"];

      function xo(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = wo.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function Eo(e) {
        return "touches" in e
      }

      function So(e) {
        return Eo(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Co(e) {
        return Eo(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Po(e, t) {
        try {
          const r = t.clientX - e.clientX,
            n = t.clientY - e.clientY,
            o = (t.clientX + e.clientX) / 2,
            i = (t.clientY + e.clientY) / 2,
            a = Math.hypot(r, n);
          return {
            angle: -180 * Math.atan2(r, n) / Math.PI,
            distance: a,
            origin: [o, i]
          }
        } catch (e) {}
        return null
      }

      function Oo(e, t) {
        const [r, n] = Array.from(e.touches).filter((e => t.includes(e.identifier)));
        return Po(r, n)
      }

      function To(e) {
        const t = Co(e);
        return Eo(e) ? t.identifier : t.pointerId
      }

      function ko(e) {
        const t = Co(e);
        return [t.clientX, t.clientY]
      }

      function jo(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function Ao(e) {
        if ("function" == typeof e) {
          for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
          return e(...r)
        }
        return e
      }

      function Lo() {}

      function No() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return 0 === t.length ? Lo : 1 === t.length ? t[0] : function() {
          let e;
          for (const r of t) e = r.apply(this, arguments) || e;
          return e
        }
      }

      function Ro(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Io {
        constructor(e, t, r) {
          this.ctrl = e, this.args = t, this.key = r, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
        }
        get state() {
          return this.ctrl.state[this.key]
        }
        set state(e) {
          this.ctrl.state[this.key] = e
        }
        get shared() {
          return this.ctrl.state.shared
        }
        get eventStore() {
          return this.ctrl.gestureEventStores[this.key]
        }
        get timeoutStore() {
          return this.ctrl.gestureTimeoutStores[this.key]
        }
        get config() {
          return this.ctrl.config[this.key]
        }
        get sharedConfig() {
          return this.ctrl.config.shared
        }
        get handler() {
          return this.ctrl.handlers[this.key]
        }
        reset() {
          const {
            state: e,
            shared: t,
            ingKey: r,
            args: n
          } = this;
          t[r] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [
            [-1 / 0, 1 / 0],
            [-1 / 0, 1 / 0]
          ], e.args = n, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0
        }
        start(e) {
          const t = this.state,
            r = this.config;
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? Ao(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
        }
        computeValues(e) {
          const t = this.state;
          t._values = e, t.values = this.config.transform(e)
        }
        computeInitial() {
          const e = this.state;
          e._initial = e._values, e.initial = e.values
        }
        compute(e) {
          const {
            state: t,
            config: r,
            shared: n
          } = this;
          t.args = this.args;
          let o = 0;
          if (e && (t.event = e, r.preventDefault && e.cancelable && t.event.preventDefault(), t.type = e.type, n.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, n.locked = !!document.pointerLockElement, Object.assign(n, function(e) {
              const t = {};
              if ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e) {
                const {
                  shiftKey: r,
                  altKey: n,
                  metaKey: o,
                  ctrlKey: i
                } = e;
                Object.assign(t, {
                  shiftKey: r,
                  altKey: n,
                  metaKey: o,
                  ctrlKey: i
                })
              }
              return t
            }(e)), n.down = n.pressed = n.buttons % 2 == 1 || n.touches > 0, o = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
            const e = t._delta.map(Math.abs);
            ho.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [i, a] = t._movement, [s, l] = r.threshold, {
            _step: c,
            values: u
          } = t;
          if (r.hasCustomTransform ? (!1 === c[0] && (c[0] = Math.abs(i) >= s && u[0]), !1 === c[1] && (c[1] = Math.abs(a) >= l && u[1])) : (!1 === c[0] && (c[0] = Math.abs(i) >= s && Math.sign(i) * s), !1 === c[1] && (c[1] = Math.abs(a) >= l && Math.sign(a) * l)), t.intentional = !1 !== c[0] || !1 !== c[1], !t.intentional) return;
          const d = [0, 0];
          if (r.hasCustomTransform) {
            const [e, t] = u;
            d[0] = !1 !== c[0] ? e - c[0] : 0, d[1] = !1 !== c[1] ? t - c[1] : 0
          } else d[0] = !1 !== c[0] ? i - c[0] : 0, d[1] = !1 !== c[1] ? a - c[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          const h = t.offset,
            f = t._active && !t._blocked || t.active;
          f && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = Ao(r.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [p, m] = t.offset, [
            [g, v],
            [y, b]
          ] = t._bounds;
          t.overflow = [p < g ? -1 : p > v ? 1 : 0, m < y ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const _ = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, t, r) {
              let [n, o] = t, [i, a] = r;
              const [
                [s, l],
                [c, u]
              ] = e;
              return [po(n, s, l, i), po(o, c, u, a)]
            }(t._bounds, t.offset, _), t.delta = ho.sub(t.offset, h), this.computeMovement(), f && (!t.last || o > 32)) {
            t.delta = ho.sub(t.offset, h);
            const e = t.delta.map(Math.abs);
            ho.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(vo(vo(vo({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Do extends Io {
        constructor() {
          super(...arguments), mo(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = ho.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = ho.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[So(e)] : r.axisThreshold;
            t.axis = function(e, t) {
              let [r, n] = e;
              const o = Math.abs(r),
                i = Math.abs(n);
              return o > i && o > t ? "x" : i > o && i > t ? "y" : void 0
            }(t._movement, n)
          }
          t._blocked = (r.lockDirection || !!r.axis) && !t.axis || !!r.axis && r.axis !== t.axis
        }
        restrictToAxis(e) {
          if (this.config.axis || this.config.lockDirection) switch (this.state.axis) {
            case "x":
              e[1] = 0;
              break;
            case "y":
              e[0] = 0
          }
        }
      }
      const Mo = e => e,
        Bo = {
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          eventOptions: (e, t, r) => vo(vo({}, r.shared.eventOptions), e),
          preventDefault() {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          },
          triggerAllEvents() {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          },
          rubberband() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return ho.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? ho.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Mo
          },
          threshold: e => ho.toVector(e, 0)
        },
        Ho = vo(vo({}, Bo), {}, {
          axis(e, t, r) {
            let {
              axis: n
            } = r;
            if (this.lockDirection = "lock" === n, !this.lockDirection) return n
          },
          axisThreshold() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          },
          bounds() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if ("function" == typeof e) return t => Ho.bounds(e(t));
            if ("current" in e) return () => e.current;
            if ("function" == typeof HTMLElement && e instanceof HTMLElement) return e;
            const {
              left: t = -1 / 0,
              right: r = 1 / 0,
              top: n = -1 / 0,
              bottom: o = 1 / 0
            } = e;
            return [
              [t, r],
              [n, o]
            ]
          }
        }),
        zo = {
          ArrowRight: function(e) {
            return [e * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), 0]
          },
          ArrowLeft: function(e) {
            return [-1 * e * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), 0]
          },
          ArrowUp: function(e) {
            return [0, -1 * e * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)]
          },
          ArrowDown: function(e) {
            return [0, e * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)]
          }
        },
        Fo = "undefined" != typeof window && window.document && window.document.createElement;

      function Vo() {
        return Fo && "ontouchstart" in window
      }
      const Uo = {
          isBrowser: Fo,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Vo(),
          touchscreen: Vo() || Fo && window.navigator.maxTouchPoints > 1,
          pointer: Fo && "onpointerdown" in window,
          pointerLock: Fo && "exitPointerLock" in window.document
        },
        Go = .5,
        qo = 50,
        Xo = 250,
        Wo = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Ko = vo(vo({}, Ho), {}, {
          device(e, t, r) {
            let {
              pointer: {
                touch: n = !1,
                lock: o = !1,
                mouse: i = !1
              } = {}
            } = r;
            return this.pointerLock = o && Uo.pointerLock, Uo.touch && n ? "touch" : this.pointerLock ? "mouse" : Uo.pointer && !i ? "pointer" : Uo.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, r) {
            let {
              preventScroll: n
            } = r;
            if (this.preventScrollDelay = "number" == typeof n ? n : n || void 0 === n && e ? 250 : void 0, Uo.touchscreen && !1 !== n) return e || (void 0 !== n ? "y" : void 0)
          },
          pointerCapture(e, t, r) {
            let {
              pointer: {
                capture: n = !0,
                buttons: o = 1,
                keys: i = !0
              } = {}
            } = r;
            return this.pointerButtons = o, this.keys = i, !this.pointerLock && "pointer" === this.device && n
          },
          threshold(e, t, r) {
            let {
              filterTaps: n = !1,
              tapsThreshold: o = 3,
              axis: i
            } = r;
            const a = ho.toVector(e, n ? o : i ? 1 : 0);
            return this.filterTaps = n, this.tapsThreshold = o, a
          },
          swipe() {
            let {
              velocity: e = Go,
              distance: t = qo,
              duration: r = Xo
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
              velocity: this.transform(ho.toVector(e)),
              distance: this.transform(ho.toVector(t)),
              duration: r
            }
          },
          delay() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            switch (e) {
              case !0:
                return 180;
              case !1:
                return 0;
              default:
                return e
            }
          },
          axisThreshold: e => e ? vo(vo({}, Wo), e) : Wo,
          keyboardDisplacement() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10
          }
        });

      function $o(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [i, a] = e._direction;
        (t < 0 && n > 0 && i < 0 || t > 0 && n < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && a < 0 || r > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Yo = vo(vo({}, Bo), {}, {
          device(e, t, r) {
            let {
              shared: n,
              pointer: {
                touch: o = !1
              } = {}
            } = r;
            if (n.target && !Uo.touch && Uo.gesture) return "gesture";
            if (Uo.touch && o) return "touch";
            if (Uo.touchscreen) {
              if (Uo.pointer) return "pointer";
              if (Uo.touch) return "touch"
            }
          },
          bounds(e, t, r) {
            let {
              scaleBounds: n = {},
              angleBounds: o = {}
            } = r;
            const i = e => {
                const t = Ro(Ao(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              a = e => {
                const t = Ro(Ao(o, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof n && "function" != typeof o ? [i(), a()] : e => [i(e), a(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, ho.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        Zo = vo(vo({}, Ho), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        Qo = Ho,
        Jo = Ho,
        ei = vo(vo({}, Ho), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        ti = new Map,
        ri = new Map;

      function ni(e) {
        ti.set(e.key, e.engine), ri.set(e.key, e.resolver)
      }
      const oi = {
          key: "drag",
          engine: class extends Do {
            constructor() {
              super(...arguments), mo(this, "ingKey", "dragging")
            }
            reset() {
              super.reset();
              const e = this.state;
              e._pointerId = void 0, e._pointerActive = !1, e._keyboardActive = !1, e._preventScroll = !1, e._delayed = !1, e.swipe = [0, 0], e.tap = !1, e.canceled = !1, e.cancel = this.cancel.bind(this)
            }
            setup() {
              const e = this.state;
              if (e._bounds instanceof HTMLElement) {
                const t = e._bounds.getBoundingClientRect(),
                  r = e.currentTarget.getBoundingClientRect(),
                  n = {
                    left: t.left - r.left + e.offset[0],
                    right: t.right - r.right + e.offset[0],
                    top: t.top - r.top + e.offset[1],
                    bottom: t.bottom - r.bottom + e.offset[1]
                  };
                e._bounds = Ho.bounds(n)
              }
            }
            cancel() {
              const e = this.state;
              e.canceled || (e.canceled = !0, e._active = !1, setTimeout((() => {
                this.compute(), this.emit()
              }), 0))
            }
            setActive() {
              this.state._active = this.state._pointerActive || this.state._keyboardActive
            }
            clean() {
              this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean()
            }
            pointerDown(e) {
              const t = this.config,
                r = this.state;
              if (null != e.buttons && (Array.isArray(t.pointerButtons) ? !t.pointerButtons.includes(e.buttons) : -1 !== t.pointerButtons && t.pointerButtons !== e.buttons)) return;
              const n = this.ctrl.setEventIds(e);
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = To(e), r._pointerActive = !0, this.computeValues(ko(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== So(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = To(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = ko(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = ho.sub(o, t._values), this.computeValues(o)), ho.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = To(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = t._distance;
              if (t.tap = o <= r.tapsThreshold && i <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
              else {
                const [e, n] = t._delta, [o, i] = t._movement, [a, s] = r.swipe.velocity, [l, c] = r.swipe.distance, u = r.swipe.duration;
                if (t.elapsedTime < u) {
                  const r = Math.abs(e / t.timeDelta),
                    u = Math.abs(n / t.timeDelta);
                  r > a && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), u > s && Math.abs(i) > c && (t.swipe[1] = Math.sign(n))
                }
              }
              this.emit()
            }
            pointerClick(e) {
              !this.state.tap && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }
            setupPointer(e) {
              const t = this.config,
                r = t.device;
              t.pointerLock && e.currentTarget.requestPointerLock(), t.pointerCapture || (this.eventStore.add(this.sharedConfig.window, r, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, r, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, r, "cancel", this.pointerUp.bind(this)))
            }
            pointerClean() {
              this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock()
            }
            preventScroll(e) {
              this.state._preventScroll && e.cancelable && e.preventDefault()
            }
            setupScrollPrevention(e) {
              this.state._preventScroll = !1,
                function(e) {
                  "persist" in e && "function" == typeof e.persist && e.persist()
                }(e);
              const t = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
                passive: !1
              });
              this.eventStore.add(this.sharedConfig.window, "touch", "end", t), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", t), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, e)
            }
            setupDelayTrigger(e) {
              this.state._delayed = !0, this.timeoutStore.add("dragDelay", (() => {
                this.state._step = [0, 0], this.startPointerDrag(e)
              }), this.config.delay)
            }
            keyDown(e) {
              const t = zo[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, ho.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in zo && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Ko
        },
        ii = {
          key: "hover",
          engine: class extends Do {
            constructor() {
              super(...arguments), mo(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(ko(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = ko(e);
              t._movement = t._delta = ho.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: ei
        },
        ai = {
          key: "move",
          engine: class extends Do {
            constructor() {
              super(...arguments), mo(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(ko(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = ko(e),
                r = this.state;
              r._delta = ho.sub(t, r._values), ho.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Zo
        },
        si = {
          key: "pinch",
          engine: class extends Io {
            constructor() {
              super(...arguments), mo(this, "ingKey", "pinching"), mo(this, "aliasKey", "da")
            }
            init() {
              this.state.offset = [1, 0], this.state.lastOffset = [1, 0], this.state._pointerEvents = new Map
            }
            reset() {
              super.reset();
              const e = this.state;
              e._touchIds = [], e.canceled = !1, e.cancel = this.cancel.bind(this), e.turns = 0
            }
            computeOffset() {
              const {
                type: e,
                movement: t,
                lastOffset: r
              } = this.state;
              this.state.offset = "wheel" === e ? ho.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
            }
            computeMovement() {
              const {
                offset: e,
                lastOffset: t
              } = this.state;
              this.state.movement = [e[0] / t[0], e[1] - t[1]]
            }
            axisIntent() {
              const e = this.state,
                [t, r] = e._movement;
              if (!e.axis) {
                const n = 30 * Math.abs(t) - Math.abs(r);
                n < 0 ? e.axis = "angle" : n > 0 && (e.axis = "scale")
              }
            }
            restrictToAxis(e) {
              this.config.lockDirection && ("scale" === this.state.axis ? e[1] = 0 : "angle" === this.state.axis && (e[0] = 0))
            }
            cancel() {
              const e = this.state;
              e.canceled || setTimeout((() => {
                e.canceled = !0, e._active = !1, this.compute(), this.emit()
              }), 0)
            }
            touchStart(e) {
              this.ctrl.setEventIds(e);
              const t = this.state,
                r = this.ctrl.touchIds;
              if (t._active && t._touchIds.every((e => r.has(e)))) return;
              if (r.size < 2) return;
              this.start(e), t._touchIds = Array.from(r).slice(0, 2);
              const n = Oo(e, t._touchIds);
              n && this.pinchStart(e, n)
            }
            pointerStart(e) {
              if (null != e.buttons && e.buttons % 2 != 1) return;
              this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId);
              const t = this.state,
                r = t._pointerEvents,
                n = this.ctrl.pointerIds;
              if (t._active && Array.from(r.keys()).every((e => n.has(e)))) return;
              if (r.size < 2 && r.set(e.pointerId, e), t._pointerEvents.size < 2) return;
              this.start(e);
              const o = Po(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = Oo(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = Po(...Array.from(t.values()));
              r && this.pinchMove(e, r)
            }
            pinchMove(e, t) {
              const r = this.state,
                n = r._values[1],
                o = t.angle - n;
              let i = 0;
              Math.abs(o) > 270 && (i += Math.sign(o)), this.computeValues([t.distance, t.angle - 360 * i]), r.origin = t.origin, r.turns = i, r._movement = [r._values[0] / r._initial[0] - 1, r._values[1] - r._initial[1]], this.compute(e), this.emit()
            }
            touchEnd(e) {
              this.ctrl.setEventIds(e), this.state._active && this.state._touchIds.some((e => !this.ctrl.touchIds.has(e))) && (this.state._active = !1, this.compute(e), this.emit())
            }
            pointerEnd(e) {
              const t = this.state;
              this.ctrl.setEventIds(e);
              try {
                e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              t._pointerEvents.has(e.pointerId) && t._pointerEvents.delete(e.pointerId), t._active && t._pointerEvents.size < 2 && (t._active = !1, this.compute(e), this.emit())
            }
            gestureStart(e) {
              e.cancelable && e.preventDefault();
              const t = this.state;
              t._active || (this.start(e), this.computeValues([e.scale, e.rotation]), t.origin = [e.clientX, e.clientY], this.compute(e), this.emit())
            }
            gestureMove(e) {
              if (e.cancelable && e.preventDefault(), !this.state._active) return;
              const t = this.state;
              this.computeValues([e.scale, e.rotation]), t.origin = [e.clientX, e.clientY];
              const r = t._movement;
              t._movement = [e.scale - 1, e.rotation], t._delta = ho.sub(t._movement, r), this.compute(e), this.emit()
            }
            gestureEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            wheel(e) {
              const t = this.config.modifierKey;
              t && !(Array.isArray(t) ? t.find((t => e[t])) : e[t]) || (this.state._active ? this.wheelChange(e) : this.wheelStart(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)))
            }
            wheelStart(e) {
              this.start(e), this.wheelChange(e)
            }
            wheelChange(e) {
              "uv" in e || e.cancelable && e.preventDefault();
              const t = this.state;
              t._delta = [-jo(e)[1] / 100 * t.offset[0], 0], ho.addTo(t._movement, t._delta), $o(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              t && (e(t, "start", this[t + "Start"].bind(this)), e(t, "change", this[t + "Move"].bind(this)), e(t, "end", this[t + "End"].bind(this)), e(t, "cancel", this[t + "End"].bind(this)), e("lostPointerCapture", "", this[t + "End"].bind(this))), this.config.pinchOnWheel && e("wheel", "", this.wheel.bind(this), {
                passive: !1
              })
            }
          },
          resolver: Yo
        },
        li = {
          key: "scroll",
          engine: class extends Do {
            constructor() {
              super(...arguments), mo(this, "ingKey", "scrolling")
            }
            scroll(e) {
              this.state._active || this.start(e), this.scrollChange(e), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this))
            }
            scrollChange(e) {
              e.cancelable && e.preventDefault();
              const t = this.state,
                r = function(e) {
                  var t, r;
                  const {
                    scrollX: n,
                    scrollY: o,
                    scrollLeft: i,
                    scrollTop: a
                  } = e.currentTarget;
                  return [null !== (t = null != n ? n : i) && void 0 !== t ? t : 0, null !== (r = null != o ? o : a) && void 0 !== r ? r : 0]
                }(e);
              t._delta = ho.sub(r, t._values), ho.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: Qo
        },
        ci = {
          key: "wheel",
          engine: class extends Do {
            constructor() {
              super(...arguments), mo(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = jo(e), ho.addTo(t._movement, t._delta), $o(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: Jo
        };
      const ui = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          window() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uo.isBrowser ? window : void 0
          },
          eventOptions() {
            let {
              passive: e = !0,
              capture: t = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
              passive: e,
              capture: t
            }
          },
          transform: e => e
        },
        di = ["target", "eventOptions", "window", "enabled", "transform"];

      function hi() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = hi(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class fi {
        constructor(e, t) {
          mo(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const i = this._listeners,
            a = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              const r = yo[e];
              return e + (r && r[t] || t)
            }(t, r),
            s = vo(vo({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
          e.addEventListener(a, n, s);
          const l = () => {
            e.removeEventListener(a, n, s), i.delete(l)
          };
          return i.add(l), l
        }
        clean() {
          this._listeners.forEach((e => e())), this._listeners.clear()
        }
      }
      class pi {
        constructor() {
          mo(this, "_timeouts", new Map)
        }
        add(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 140;
          this.remove(e);
          for (var n = arguments.length, o = new Array(n > 3 ? n - 3 : 0), i = 3; i < n; i++) o[i - 3] = arguments[i];
          this._timeouts.set(e, window.setTimeout(t, r, ...o))
        }
        remove(e) {
          const t = this._timeouts.get(e);
          t && window.clearTimeout(t)
        }
        clean() {
          this._timeouts.forEach((e => {
            window.clearTimeout(e)
          })), this._timeouts.clear()
        }
      }
      class mi {
        constructor(e) {
          var t, r;
          mo(this, "gestures", new Set), mo(this, "_targetEventStore", new fi(this)), mo(this, "gestureEventStores", {}), mo(this, "gestureTimeoutStores", {}), mo(this, "handlers", {}), mo(this, "config", {}), mo(this, "pointerIds", new Set), mo(this, "touchIds", new Set), mo(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && gi(t, "drag"), r.wheel && gi(t, "wheel"), r.scroll && gi(t, "scroll"), r.move && gi(t, "move"), r.pinch && gi(t, "pinch"), r.hover && gi(t, "hover")
        }
        setEventIds(e) {
          return Eo(e) ? (this.touchIds = new Set(function(e) {
            return function(e) {
              return Array.from(e.touches).filter((t => {
                var r, n;
                return t.target === e.currentTarget || (null === (r = e.currentTarget) || void 0 === r || null === (n = r.contains) || void 0 === n ? void 0 : n.call(r, t.target))
              }))
            }(e).map((e => e.identifier))
          }(e)), this.touchIds) : "pointerId" in e ? ("pointerup" === e.type || "pointercancel" === e.type ? this.pointerIds.delete(e.pointerId) : "pointerdown" === e.type && this.pointerIds.add(e.pointerId), this.pointerIds) : void 0
        }
        applyHandlers(e, t) {
          this.handlers = e, this.nativeHandlers = t
        }
        applyConfig(e, t) {
          this.config = function(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const n = e,
              {
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              } = n,
              c = function(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                  if (null == e) return {};
                  var r, n, o = {},
                    i = Object.keys(e);
                  for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                  return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
              }(n, di);
            if (r.shared = hi({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              }, ui), t) {
              const e = ri.get(t);
              r[t] = hi(vo({
                shared: r.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = ri.get(e);
                t && (r[e] = hi(vo({
                  shared: r.shared
                }, c[e]), t))
              }
            return r
          }(e, t, this.config)
        }
        clean() {
          this._targetEventStore.clean();
          for (const e of this.gestures) this.gestureEventStores[e].clean(), this.gestureTimeoutStores[e].clean()
        }
        effect() {
          return this.config.shared.target && this.bind(), () => this._targetEventStore.clean()
        }
        bind() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          const n = this.config.shared,
            o = {};
          let i;
          if (!n.target || (i = n.target(), i)) {
            if (n.enabled) {
              for (const e of this.gestures) {
                const r = this.config[e],
                  n = vi(o, r.eventOptions, !!i);
                r.enabled && new(ti.get(e))(this, t, e).bind(n)
              }
              const e = vi(o, n.eventOptions, !!i);
              for (const r in this.nativeHandlers) e(r, "", (e => this.nativeHandlers[r](vo(vo({}, this.state.shared), {}, {
                event: e,
                args: t
              }))), void 0, !0)
            }
            for (const e in o) o[e] = No(...o[e]);
            if (!i) return o;
            for (const e in o) {
              const {
                device: t,
                capture: r,
                passive: n
              } = xo(e);
              this._targetEventStore.add(i, t, "", o[e], {
                capture: r,
                passive: n
              })
            }
          }
        }
      }

      function gi(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new fi(e, t), e.gestureTimeoutStores[t] = new pi
      }
      const vi = (e, t, r) => function(n, o, i) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          var l, c;
          const u = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = a.passive) && void 0 !== c ? c : t.passive;
          let h = s ? n : function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const n = yo[e],
              o = n && n[t] || t;
            return "on" + bo(e) + bo(o) + (function() {
              let e = arguments.length > 1 ? arguments[1] : void 0;
              return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && !_o.includes(e)
            }(r, o) ? "Capture" : "")
          }(n, o, u);
          r && d && (h += "Passive"), e[h] = e[h] || [], e[h].push(i)
        },
        yi = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function bi(e, t, r, n, o, i) {
        if (!e.has(r)) return;
        if (!ti.has(n)) return;
        const a = r + "Start",
          s = r + "End";
        o[n] = e => {
          let n;
          return e.first && a in t && t[a](e), r in t && (n = t[r](e)), e.last && s in t && t[s](e), n
        }, i[n] = i[n] || {}
      }

      function _i(e, t) {
        const r = ([oi, si, li, ci, ai, ii].forEach(ni), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) yi.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), i = {};
            return bi(o, r, "onDrag", "drag", i, t), bi(o, r, "onWheel", "wheel", i, t), bi(o, r, "onScroll", "scroll", i, t), bi(o, r, "onPinch", "pinch", i, t), bi(o, r, "onMove", "move", i, t), bi(o, r, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              r = arguments.length > 2 ? arguments[2] : void 0,
              n = arguments.length > 3 ? arguments[3] : void 0;
            const o = f().useMemo((() => new mi(e)), []);
            if (o.applyHandlers(e, n), o.applyConfig(t, r), f().useEffect(o.effect.bind(o)), f().useEffect((() => o.clean.bind(o)), []), void 0 === t.target) return o.bind.bind(o)
          }(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      var wi = Mi(),
        xi = e => Ni(e, wi),
        Ei = Mi();
      xi.write = e => Ni(e, Ei);
      var Si = Mi();
      xi.onStart = e => Ni(e, Si);
      var Ci = Mi();
      xi.onFrame = e => Ni(e, Ci);
      var Pi = Mi();
      xi.onFinish = e => Ni(e, Pi);
      var Oi = [];
      xi.setTimeout = (e, t) => {
        const r = xi.now() + t,
          n = () => {
            const e = Oi.findIndex((e => e.cancel == n));
            ~e && Oi.splice(e, 1), Ai -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return Oi.splice(Ti(r), 0, o), Ai += 1, Ri(), o
      };
      var Ti = e => ~(~Oi.findIndex((t => t.time > e)) || ~Oi.length);
      xi.cancel = e => {
        Si.delete(e), Ci.delete(e), Pi.delete(e), wi.delete(e), Ei.delete(e)
      }, xi.sync = e => {
        Li = !0, xi.batchedUpdates(e), Li = !1
      }, xi.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, xi.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Si.delete(r), t = null
        }, n
      };
      var ki = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      xi.use = e => ki = e, xi.now = "undefined" != typeof performance ? () => performance.now() : Date.now, xi.batchedUpdates = e => e(), xi.catch = console.error, xi.frameLoop = "always", xi.advance = () => {
        "demand" !== xi.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Di()
      };
      var ji = -1,
        Ai = 0,
        Li = !1;

      function Ni(e, t) {
        Li ? (t.delete(e), e(0)) : (t.add(e), Ri())
      }

      function Ri() {
        ji < 0 && (ji = 0, "demand" !== xi.frameLoop && ki(Ii))
      }

      function Ii() {
        ~ji && (ki(Ii), xi.batchedUpdates(Di))
      }

      function Di() {
        const e = ji;
        ji = xi.now();
        const t = Ti(ji);
        t && (Bi(Oi.splice(0, t), (e => e.handler())), Ai -= t), Ai ? (Si.flush(), wi.flush(e ? Math.min(64, ji - e) : 16.667), Ci.flush(), Ei.flush(), Pi.flush()) : ji = -1
      }

      function Mi() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Ai += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Ai -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Ai -= t.size, Bi(t, (t => t(r) && e.add(t))), Ai += e.size, t = e)
          }
        }
      }

      function Bi(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            xi.catch(e)
          }
        }))
      }
      var Hi = Object.defineProperty,
        zi = {};

      function Fi() {}((e, t) => {
        for (var r in t) Hi(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(zi, {
        assign: () => ta,
        colors: () => Qi,
        createStringInterpolator: () => Ki,
        skipAnimation: () => Ji,
        to: () => $i,
        willAdvance: () => ea
      });
      var Vi = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Ui(e, t) {
        if (Vi.arr(e)) {
          if (!Vi.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var Gi = (e, t) => e.forEach(t);

      function qi(e, t, r) {
        if (Vi.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var Xi = e => Vi.und(e) ? [] : Vi.arr(e) ? e : [e];

      function Wi(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), Gi(r, t)
        }
      }
      var Ki, $i, Yi = (e, ...t) => Wi(e, (e => e(...t))),
        Zi = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Qi = null,
        Ji = !1,
        ea = Fi,
        ta = e => {
          e.to && ($i = e.to), e.now && (xi.now = e.now), void 0 !== e.colors && (Qi = e.colors), null != e.skipAnimation && (Ji = e.skipAnimation), e.createStringInterpolator && (Ki = e.createStringInterpolator), e.requestAnimationFrame && xi.use(e.requestAnimationFrame), e.batchedUpdates && (xi.batchedUpdates = e.batchedUpdates), e.willAdvance && (ea = e.willAdvance), e.frameLoop && (xi.frameLoop = e.frameLoop)
        },
        ra = new Set,
        na = [],
        oa = [],
        ia = 0,
        aa = {
          get idle() {
            return !ra.size && !na.length
          },
          start(e) {
            ia > e.priority ? (ra.add(e), xi.onStart(sa)) : (la(e), xi(ua))
          },
          advance: ua,
          sort(e) {
            if (ia) xi.onFrame((() => aa.sort(e)));
            else {
              const t = na.indexOf(e);
              ~t && (na.splice(t, 1), ca(e))
            }
          },
          clear() {
            na = [], ra.clear()
          }
        };

      function sa() {
        ra.forEach(la), ra.clear(), xi(ua)
      }

      function la(e) {
        na.includes(e) || ca(e)
      }

      function ca(e) {
        na.splice(function(t) {
          const r = t.findIndex((t => t.priority > e.priority));
          return r < 0 ? t.length : r
        }(na), 0, e)
      }

      function ua(e) {
        const t = oa;
        for (let r = 0; r < na.length; r++) {
          const n = na[r];
          ia = n.priority, n.idle || (ea(n), n.advance(e), n.idle || t.push(n))
        }
        return ia = 0, (oa = na).length = 0, (na = t).length > 0
      }
      var da = "[-+]?\\d*\\.?\\d+",
        ha = da + "%";

      function fa(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var pa = new RegExp("rgb" + fa(da, da, da)),
        ma = new RegExp("rgba" + fa(da, da, da, da)),
        ga = new RegExp("hsl" + fa(da, ha, ha)),
        va = new RegExp("hsla" + fa(da, ha, ha, da)),
        ya = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ba = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        _a = /^#([0-9a-fA-F]{6})$/,
        wa = /^#([0-9a-fA-F]{8})$/;

      function xa(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Ea(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = xa(o, n, e + 1 / 3),
          a = xa(o, n, e),
          s = xa(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function Sa(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Ca(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Pa(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Oa(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Ta(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = _a.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Qi && void 0 !== Qi[e] ? Qi[e] : (t = pa.exec(e)) ? (Sa(t[1]) << 24 | Sa(t[2]) << 16 | Sa(t[3]) << 8 | 255) >>> 0 : (t = ma.exec(e)) ? (Sa(t[1]) << 24 | Sa(t[2]) << 16 | Sa(t[3]) << 8 | Pa(t[4])) >>> 0 : (t = ya.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = wa.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ba.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = ga.exec(e)) ? (255 | Ea(Ca(t[1]), Oa(t[2]), Oa(t[3]))) >>> 0 : (t = va.exec(e)) ? (Ea(Ca(t[1]), Oa(t[2]), Oa(t[3])) | Pa(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var ka = (e, t, r) => {
          if (Vi.fun(e)) return e;
          if (Vi.arr(e)) return ka({
            range: e,
            output: t,
            extrapolate: r
          });
          if (Vi.str(e.output[0])) return Ki(e);
          const n = e,
            o = n.output,
            i = n.range || [0, 1],
            a = n.extrapolateLeft || n.extrapolate || "extend",
            s = n.extrapolateRight || n.extrapolate || "extend",
            l = n.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, i);
            return function(e, t, r, n, o, i, a, s, l) {
              let c = l ? l(e) : e;
              if (c < t) {
                if ("identity" === a) return c;
                "clamp" === a && (c = t)
              }
              if (c > r) {
                if ("identity" === s) return c;
                "clamp" === s && (c = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c -= t : c = (c - t) / (r - t), c = i(c), n === -1 / 0 ? c = -c : o === 1 / 0 ? c += n : c = c * (o - n) + n, c)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, a, s, n.map)
          }
        },
        ja = 1.70158,
        Aa = 1.525 * ja,
        La = ja + 1,
        Na = 2 * Math.PI / 3,
        Ra = 2 * Math.PI / 4.5,
        Ia = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        Da = {
          linear: e => e,
          easeInQuad: e => e * e,
          easeOutQuad: e => 1 - (1 - e) * (1 - e),
          easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
          easeInCubic: e => e * e * e,
          easeOutCubic: e => 1 - Math.pow(1 - e, 3),
          easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
          easeInQuart: e => e * e * e * e,
          easeOutQuart: e => 1 - Math.pow(1 - e, 4),
          easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
          easeInQuint: e => e * e * e * e * e,
          easeOutQuint: e => 1 - Math.pow(1 - e, 5),
          easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
          easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
          easeOutSine: e => Math.sin(e * Math.PI / 2),
          easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
          easeInExpo: e => 0 === e ? 0 : Math.pow(2, 10 * e - 10),
          easeOutExpo: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
          easeInOutExpo: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
          easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
          easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
          easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
          easeInBack: e => La * e * e * e - ja * e * e,
          easeOutBack: e => 1 + La * Math.pow(e - 1, 3) + ja * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Aa) / 2 : (Math.pow(2 * e - 2, 2) * ((Aa + 1) * (2 * e - 2) + Aa) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Na),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Na) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ra) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ra) / 2 + 1,
          easeInBounce: e => 1 - Ia(1 - e),
          easeOutBounce: Ia,
          easeInOutBounce: e => e < .5 ? (1 - Ia(1 - 2 * e)) / 2 : (1 + Ia(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        Ma = Symbol.for("FluidValue.get"),
        Ba = Symbol.for("FluidValue.observers"),
        Ha = e => Boolean(e && e[Ma]),
        za = e => e && e[Ma] ? e[Ma]() : e,
        Fa = e => e[Ba] || null;

      function Va(e, t) {
        const r = e[Ba];
        r && r.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var Ua = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Ga(this, e)
          }
        },
        Ga = (e, t) => Ka(e, Ma, t);

      function qa(e, t) {
        if (e[Ma]) {
          let r = e[Ba];
          r || Ka(e, Ba, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function Xa(e, t) {
        const r = e[Ba];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[Ba] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var Wa, Ka = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        $a = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Ya = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Za = new RegExp(`(${$a.source})(%|[a-z]+)`, "i"),
        Qa = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Ja = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        es = e => {
          const [t, r] = ts(e);
          if (!t || Zi()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && Ja.test(r) ? es(r) : r || e
        },
        ts = e => {
          const t = Ja.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        rs = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        ns = e => {
          Wa || (Wa = Qi ? new RegExp(`(${Object.keys(Qi).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => za(e).replace(Ja, es).replace(Ya, Ta).replace(Wa, Ta))),
            r = t.map((e => e.match($a).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))),
            o = n.map((t => ka({
              ...e,
              output: t
            })));
          return e => {
            const r = !Za.test(t[0]) && t.find((e => Za.test(e)))?.replace($a, "");
            let n = 0;
            return t[0].replace($a, (() => `${o[n++](e)}${r||""}`)).replace(Qa, rs)
          }
        },
        os = "react-spring: ",
        is = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${os}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        as = is(console.warn),
        ss = is(console.warn);

      function ls(e) {
        return Vi.str(e) && ("#" == e[0] || /\d/.test(e) || !Zi() && Ja.test(e) || e in (Qi || {}))
      }
      var cs = Zi() ? h.useEffect : h.useLayoutEffect;

      function us() {
        const e = (0, h.useState)()[1],
          t = (() => {
            const e = (0, h.useRef)(!1);
            return cs((() => (e.current = !0, () => {
              e.current = !1
            })), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var ds = e => (0, h.useEffect)(e, hs),
        hs = [];

      function fs(e) {
        const t = (0, h.useRef)();
        return (0, h.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var ps = Symbol.for("Animated:node"),
        ms = e => e && e[ps],
        gs = (e, t) => {
          return r = e, n = ps, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        vs = e => e && e[ps] && e[ps].getPayload(),
        ys = class {
          constructor() {
            gs(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        bs = class extends ys {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Vi.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new bs(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return Vi.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Vi.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        _s = class extends bs {
          constructor(e) {
            super(0), this._string = null, this._toString = ka({
              output: [e, e]
            })
          }
          static create(e) {
            return new _s(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (Vi.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = ka({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        ws = {
          dependencies: null
        },
        xs = class extends ys {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return qi(this.source, ((r, n) => {
              var o;
              (o = r) && o[ps] === o ? t[n] = r.getValue(e) : Ha(r) ? t[n] = za(r) : e || (t[n] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Gi(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return qi(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            ws.dependencies && Ha(e) && ws.dependencies.add(e);
            const t = vs(e);
            t && Gi(t, (e => this.add(e)))
          }
        },
        Es = class extends xs {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new Es(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, r) => t.setValue(e[r]))).some(Boolean) : (super.setValue(e.map(Ss)), !0)
          }
        };

      function Ss(e) {
        return (ls(e) ? _s : bs).create(e)
      }

      function Cs(e) {
        const t = ms(e);
        return t ? t.constructor : Vi.arr(e) ? Es : ls(e) ? _s : bs
      }
      var Ps = (e, t) => {
          const r = !Vi.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, h.forwardRef)(((n, o) => {
            const i = (0, h.useRef)(null),
              a = r && (0, h.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (Vi.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [s, l] = function(e, t) {
                const r = new Set;
                return ws.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new xs(e), ws.dependencies = null, [e, r]
              }(n, t),
              c = us(),
              u = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && c()
              },
              d = new Os(u, l),
              f = (0, h.useRef)();
            cs((() => (f.current = d, Gi(l, (e => qa(e, d))), () => {
              f.current && (Gi(f.current.deps, (e => Xa(e, f.current))), xi.cancel(f.current.update))
            }))), (0, h.useEffect)(u, []), ds((() => () => {
              const e = f.current;
              Gi(e.deps, (t => Xa(t, e)))
            }));
            const p = t.getComponentProps(s.getValue());
            return h.createElement(e, {
              ...p,
              ref: a
            })
          }))
        },
        Os = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && xi.write(this.update)
          }
        },
        Ts = Symbol.for("AnimatedComponent"),
        ks = e => Vi.str(e) ? e : e && Vi.str(e.displayName) ? e.displayName : Vi.fun(e) && e.name || null;

      function js(e, ...t) {
        return Vi.fun(e) ? e(...t) : e
      }
      var As = (e, t) => !0 === e || !!(t && e && (Vi.fun(e) ? e(t) : Xi(e).includes(t))),
        Ls = (e, t) => Vi.obj(e) ? t && e[t] : e,
        Ns = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Rs = e => e,
        Is = (e, t = Rs) => {
          let r = Ds;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            Vi.und(r) || (n[o] = r)
          }
          return n
        },
        Ds = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Ms = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1
        };

      function Bs(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (qi(e, ((e, n) => {
              Ms[n] || (t[n] = e, r++)
            })), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return qi(e, ((e, n) => n in t || (r[n] = e))), r
        }
        return {
          ...e
        }
      }

      function Hs(e) {
        return e = za(e), Vi.arr(e) ? e.map(Hs) : ls(e) ? zi.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function zs(e) {
        for (const t in e) return !0;
        return !1
      }

      function Fs(e) {
        return Vi.fun(e) || Vi.arr(e) && Vi.obj(e[0])
      }

      function Vs(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function Us(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }
      var Gs = {
          tension: 170,
          friction: 26
        },
        qs = {
          ...Gs,
          mass: 1,
          damping: 1,
          easing: Da.linear,
          clamp: !1
        },
        Xs = class {
          constructor() {
            this.velocity = 0, Object.assign(this, qs)
          }
        };

      function Ws(e, t) {
        if (Vi.und(t.decay)) {
          const r = !Vi.und(t.tension) || !Vi.und(t.friction);
          !r && Vi.und(t.frequency) && Vi.und(t.damping) && Vi.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Ks = [],
        $s = class {
          constructor() {
            this.changed = !1, this.values = Ks, this.toValues = null, this.fromValues = Ks, this.config = new Xs, this.immediate = !1
          }
        };

      function Ys(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, c, u = As(r.cancel ?? n?.cancel, t);
          if (u) f();
          else {
            Vi.und(r.pause) || (o.paused = As(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || As(e, t)), l = js(r.delay || 0, t), e ? (o.resumeQueue.add(h), i.pause()) : (i.resume(), h())
          }

          function d() {
            o.resumeQueue.add(h), o.timeouts.delete(c), c.cancel(), l = c.time - xi.now()
          }

          function h() {
            l > 0 && !zi.skipAnimation ? (o.delayed = !0, c = xi.setTimeout(f, l), o.pauseQueue.add(d), o.timeouts.add(c)) : f()
          }

          function f() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (u = !0);
            try {
              i.start({
                ...r,
                callId: e,
                cancel: u
              }, a)
            } catch (e) {
              s(e)
            }
          }
        }))
      }
      var Zs = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? el(e.get()) : t.every((e => e.noop)) ? Qs(e.get()) : Js(e.get(), t.every((e => e.finished))),
        Qs = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Js = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        el = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function tl(e, t, r, n) {
        const {
          callId: o,
          parentId: i,
          onRest: a
        } = t, {
          asyncTo: s,
          promise: l
        } = r;
        return i || e !== s || t.reset ? r.promise = (async () => {
          r.asyncId = o, r.asyncTo = e;
          const c = Is(t, ((e, t) => "onRest" === t ? void 0 : e));
          let u, d;
          const h = new Promise(((e, t) => (u = e, d = t))),
            f = e => {
              const t = o <= (r.cancelId || 0) && el(n) || o !== r.asyncId && Js(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new nl,
                a = new ol;
              return (async () => {
                if (zi.skipAnimation) throw rl(r), a.result = Js(n, !1), d(a), a;
                f(i);
                const s = Vi.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, qi(c, ((e, t) => {
                  Vi.und(s[t]) && (s[t] = e)
                }));
                const l = await n.start(s);
                return f(i), r.paused && await new Promise((e => {
                  r.resumeQueue.add(e)
                })), l
              })()
            };
          let m;
          if (zi.skipAnimation) return rl(r), Js(n, !1);
          try {
            let t;
            t = Vi.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), h]), m = Js(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof nl) m = e.result;
            else {
              if (!(e instanceof ol)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? s : void 0, r.promise = i ? l : void 0)
          }
          return Vi.fun(a) && xi.batchedUpdates((() => {
            a(m, n, n.item)
          })), m
        })() : l
      }

      function rl(e, t) {
        Wi(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var nl = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        ol = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        il = e => e instanceof sl,
        al = 1,
        sl = class extends Ua {
          constructor() {
            super(...arguments), this.id = al++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = ms(this);
            return e && e.getValue()
          }
          to(...e) {
            return zi.to(this, e)
          }
          interpolate(...e) {
            return as(`${os}The "interpolate" function is deprecated in v9 (use "to" instead)`), zi.to(this, e)
          }
          toJSON() {
            return this.get()
          }
          observerAdded(e) {
            1 == e && this._attach()
          }
          observerRemoved(e) {
            0 == e && this._detach()
          }
          _attach() {}
          _detach() {}
          _onChange(e, t = !1) {
            Va(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || aa.sort(this), Va(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        ll = Symbol.for("SpringPhase"),
        cl = e => (1 & e[ll]) > 0,
        ul = e => (2 & e[ll]) > 0,
        dl = e => (4 & e[ll]) > 0,
        hl = (e, t) => t ? e[ll] |= 3 : e[ll] &= -3,
        fl = (e, t) => t ? e[ll] |= 4 : e[ll] &= -5,
        pl = class extends sl {
          constructor(e, t) {
            if (super(), this.animation = new $s, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Vi.und(e) || !Vi.und(t)) {
              const r = Vi.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Vi.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(ul(this) || this._state.asyncTo) || dl(this)
          }
          get goal() {
            return za(this.animation.to)
          }
          get velocity() {
            const e = ms(this);
            return e instanceof bs ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return cl(this)
          }
          get isAnimating() {
            return ul(this)
          }
          get isPaused() {
            return dl(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let t = !0,
              r = !1;
            const n = this.animation;
            let {
              toValues: o
            } = n;
            const {
              config: i
            } = n, a = vs(n.to);
            !a && Ha(n.to) && (o = Xi(za(n.to))), n.values.forEach(((s, l) => {
              if (s.done) return;
              const c = s.constructor == _s ? 1 : a ? a[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = Vi.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const h = i.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (Vi.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(s.lastPosition - d) <= h, a = o * n
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || h / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !Vi.und(n),
                      f = r == c ? s.v0 > 0 : r < c;
                    let p, m = !1;
                    const g = 1,
                      v = Math.ceil(e / g);
                    for (let e = 0; e < v && (p = Math.abs(a) > t, p || (u = Math.abs(c - d) <= h, !u)); ++e) l && (m = d == c || d > c == f, m && (a = -a * n, d = c)), a += (1e-6 * -i.tension * (d - c) + .001 * -i.friction * a) / i.mass * g, d += a * g
                  }
                else {
                  let n = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, s.durationProgress > 0 && (s.elapsedTime = i.duration * s.durationProgress, t = s.elapsedTime += e)), n = (i.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, s.durationProgress = n), d = r + i.easing(n) * (c - r), a = (d - s.lastPosition) / e, u = 1 == n
                }
                s.lastVelocity = a, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              a && !a[l].done && (u = !1), u ? s.done = !0 : t = !1, s.setValue(d, i.round) && (r = !0)
            }));
            const s = ms(this),
              l = s.getValue();
            if (t) {
              const e = za(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return xi.batchedUpdates((() => {
              this._stop(), this._focus(e), this._set(e)
            })), this
          }
          pause() {
            this._update({
              pause: !0
            })
          }
          resume() {
            this._update({
              pause: !1
            })
          }
          finish() {
            if (ul(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              xi.batchedUpdates((() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              }))
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let r;
            return Vi.und(e) ? (r = this.queue || [], this.queue = []) : r = [Vi.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map((e => this._update(e)))).then((e => Zs(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), rl(this._state, e && this._lastCallId), xi.batchedUpdates((() => this._stop(t, e))), this
          }
          reset() {
            this._update({
              reset: !0
            })
          }
          eventObserved(e) {
            "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1)
          }
          _prepareNode(e) {
            const t = this.key || "";
            let {
              to: r,
              from: n
            } = e;
            r = Vi.obj(r) ? r[t] : r, (null == r || Fs(r)) && (r = void 0), n = Vi.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return cl(this) || (e.reverse && ([r, n] = [n, r]), n = za(n), Vi.und(n) ? ms(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, Is(e, ((e, t) => /^on/.test(t) ? Ls(e, r) : e))), wl(this, e, "onProps"), xl(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Ys(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  dl(this) || (fl(this, !0), Yi(i.pauseQueue), xl(this, "onPause", Js(this, ml(this, this.animation.to)), this))
                },
                resume: () => {
                  dl(this) && (fl(this, !1), ul(this) && this._resume(), Yi(i.resumeQueue), xl(this, "onResume", Js(this, ml(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = gl(e);
                if (t) return this._update(t, !0)
              }
              return r
            }))
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(el(this));
            const n = !Vi.und(e.to),
              o = !Vi.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(el(this));
              this._lastToId = t.callId
            }
            const {
              key: i,
              defaultProps: a,
              animation: s
            } = this, {
              to: l,
              from: c
            } = s;
            let {
              to: u = l,
              from: d = c
            } = e;
            !o || n || t.default && !Vi.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const h = !Ui(d, c);
            h && (s.from = d), d = za(d);
            const f = !Ui(u, l);
            f && this._focus(u);
            const p = Fs(t.to),
              {
                config: m
              } = s,
              {
                decay: g,
                velocity: v
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (Ws(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), Ws(e, t), Object.assign(e, t);
              for (const t in qs) null == e[t] && (e[t] = qs[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              Vi.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, js(t.config, i), t.config !== a.config ? js(a.config, i) : void 0);
            let y = ms(this);
            if (!y || Vi.und(u)) return r(Js(this, !0));
            const b = Vi.und(t.reset) ? o && !t.default : !Vi.und(d) && As(t.reset, i),
              _ = b ? d : this.get(),
              w = Hs(u),
              x = Vi.num(w) || Vi.arr(w) || ls(w),
              E = !p && (!x || As(a.immediate || t.immediate, i));
            if (f) {
              const e = Cs(u);
              if (e !== y.constructor) {
                if (!E) throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);
                y = this._set(w)
              }
            }
            const S = y.constructor;
            let C = Ha(u),
              P = !1;
            if (!C) {
              const e = b || !cl(this) && h;
              (f || e) && (P = Ui(Hs(_), w), C = !P), (Ui(s.immediate, E) || E) && Ui(m.decay, g) && Ui(m.velocity, v) || (C = !0)
            }
            if (P && ul(this) && (s.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || Ha(l)) && (s.values = y.getPayload(), s.toValues = Ha(u) ? null : S == _s ? [1] : Xi(w)), s.immediate != E && (s.immediate = E, E || b || this._set(l)), C)) {
              const {
                onRest: e
              } = s;
              Gi(_l, (e => wl(this, t, e)));
              const n = Js(this, ml(this, l));
              Yi(this._pendingCalls, n), this._pendingCalls.add(r), s.changed && xi.batchedUpdates((() => {
                s.changed = !b, e?.(n, this), b ? js(a.onRest, n) : s.onStart?.(n, this)
              }))
            }
            b && this._set(_), p ? r(tl(t.to, t, this._state, this)) : C ? this._start() : ul(this) && !f ? this._pendingCalls.add(r) : r(Qs(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Fa(this) && this._detach(), t.to = e, Fa(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Ha(t) && (qa(t, this), il(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Ha(e) && Xa(e, this)
          }
          _set(e, t = !0) {
            const r = za(e);
            if (!Vi.und(r)) {
              const e = ms(this);
              if (!e || !Ui(r, e.getValue())) {
                const n = Cs(r);
                e && e.constructor == n ? e.setValue(r) : gs(this, n.create(r)), e && xi.batchedUpdates((() => {
                  this._onChange(r, t)
                }))
              }
            }
            return ms(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, xl(this, "onStart", Js(this, ml(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), js(this.animation.onChange, e, this)), js(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            ms(this).reset(za(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), ul(this) || (hl(this, !0), dl(this) || this._resume())
          }
          _resume() {
            zi.skipAnimation ? this.finish() : aa.start(this)
          }
          _stop(e, t) {
            if (ul(this)) {
              hl(this, !1);
              const r = this.animation;
              Gi(r.values, (e => {
                e.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Va(this, {
                type: "idle",
                parent: this
              });
              const n = t ? el(this.get()) : Js(this.get(), ml(this, e ?? r.to));
              Yi(this._pendingCalls, n), r.changed && (r.changed = !1, xl(this, "onRest", n, this))
            }
          }
        };

      function ml(e, t) {
        const r = Hs(t);
        return Ui(Hs(e.get()), r)
      }

      function gl(e, t = e.loop, r = e.to) {
        const n = js(t);
        if (n) {
          const o = !0 !== n && Bs(n),
            i = (o || e).reverse,
            a = !o || o.reset;
          return vl({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Fs(r) ? r : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function vl(e) {
        const {
          to: t,
          from: r
        } = e = Bs(e), n = new Set;
        return Vi.obj(t) && bl(t, n), Vi.obj(r) && bl(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function yl(e) {
        const t = vl(e);
        return Vi.und(t.default) && (t.default = Is(t)), t
      }

      function bl(e, t) {
        qi(e, ((e, r) => null != e && t.add(r)))
      }
      var _l = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function wl(e, t, r) {
        e.animation[r] = t[r] !== Ns(t, r) ? Ls(t[r], e.key) : void 0
      }

      function xl(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var El = ["onStart", "onChange", "onRest"],
        Sl = 1,
        Cl = class {
          constructor(e, t) {
            this.id = Sl++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
              paused: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }, this._events = {
              onStart: new Map,
              onChange: new Map,
              onRest: new Map
            }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
              default: !0,
              ...e
            })
          }
          get idle() {
            return !this._state.asyncTo && Object.values(this.springs).every((e => e.idle && !e.isDelayed && !e.isPaused))
          }
          get item() {
            return this._item
          }
          set item(e) {
            this._item = e
          }
          get() {
            const e = {};
            return this.each(((t, r) => e[r] = t.get())), e
          }
          set(e) {
            for (const t in e) {
              const r = e[t];
              Vi.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(vl(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Xi(e).map(vl) : this.queue = [], this._flush ? this._flush(this, t) : (Ll(this, t), Pl(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              Gi(Xi(t), (t => r[t].stop(!!e)))
            } else rl(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (Vi.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Gi(Xi(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (Vi.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Gi(Xi(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            qi(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, Wi(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !n && this._started,
              a = o || i && r.size ? this.get() : null;
            o && t.size && Wi(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, Wi(r, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            xi.onFrame(this._onFrame)
          }
        };

      function Pl(e, t) {
        return Promise.all(t.map((t => Ol(e, t)))).then((t => Zs(e, t)))
      }
      async function Ol(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, c = Vi.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = Vi.arr(o) || Vi.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : Gi(El, (r => {
          const n = t[r];
          if (Vi.fun(n)) {
            const o = e._events[r];
            t[r] = ({
              finished: e,
              cancelled: t
            }) => {
              const r = o.get(n);
              r ? (e || (r.finished = !1), t && (r.cancelled = !0)) : o.set(n, {
                value: null,
                finished: e || !1,
                cancelled: t || !1
              })
            }, c && (c[r] = t[r])
          }
        }));
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, Yi(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const h = (n || Object.keys(e.springs)).map((r => e.springs[r].start(t))),
          f = !0 === t.cancel || !0 === Ns(t, "cancel");
        (u || f && d.asyncId) && h.push(Ys(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Fi,
            resume: Fi,
            start(t, r) {
              f ? (rl(d, e._lastAsyncId), r(el(e))) : (t.onRest = s, r(tl(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = Zs(e, await Promise.all(h));
        if (a && p.finished && (!r || !p.noop)) {
          const r = gl(t, a, o);
          if (r) return Ll(e, [r]), Ol(e, r, !0)
        }
        return l && xi.batchedUpdates((() => l(p, e, e.item))), p
      }

      function Tl(e, t) {
        const r = {
          ...e.springs
        };
        return t && Gi(Xi(t), (e => {
          Vi.und(e.keys) && (e = vl(e)), Vi.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), Al(r, e, (e => jl(e)))
        })), kl(e, r), r
      }

      function kl(e, t) {
        qi(t, ((t, r) => {
          e.springs[r] || (e.springs[r] = t, qa(t, e))
        }))
      }

      function jl(e, t) {
        const r = new pl;
        return r.key = e, t && qa(r, t), r
      }

      function Al(e, t, r) {
        t.keys && Gi(t.keys, (n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        }))
      }

      function Ll(e, t) {
        Gi(t, (t => {
          Al(e.springs, t, (t => jl(t, e)))
        }))
      }
      var Nl, Rl, Il = ({
          children: e,
          ...t
        }) => {
          const r = (0, h.useContext)(Dl),
            n = t.pause || !!r.pause,
            o = t.immediate || !!r.immediate;
          t = function(e, t) {
            const [r] = (0, h.useState)((() => ({
              inputs: t,
              result: e()
            }))), n = (0, h.useRef)(), o = n.current;
            let i = o;
            if (i) {
              const r = Boolean(t && i.inputs && function(e, t) {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < e.length; r++)
                  if (e[r] !== t[r]) return !1;
                return !0
              }(t, i.inputs));
              r || (i = {
                inputs: t,
                result: e()
              })
            } else i = r;
            return (0, h.useEffect)((() => {
              n.current = i, o == r && (r.inputs = r.result = void 0)
            }), [i]), i.result
          }((() => ({
            pause: n,
            immediate: o
          })), [n, o]);
          const {
            Provider: i
          } = Dl;
          return h.createElement(i, {
            value: t
          }, e)
        },
        Dl = (Nl = Il, Rl = {}, Object.assign(Nl, h.createContext(Rl)), Nl.Provider._context = Nl, Nl.Consumer._context = Nl, Nl);
      Il.Provider = Dl.Provider, Il.Consumer = Dl.Consumer;
      var Ml = () => {
        const e = [],
          t = function(t) {
            ss(`${os}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const n = [];
            return Gi(e, ((e, o) => {
              if (Vi.und(t)) n.push(e.start());
              else {
                const i = r(t, e, o);
                i && n.push(e.start(i))
              }
            })), n
          };
        t.current = e, t.add = function(t) {
          e.includes(t) || e.push(t)
        }, t.delete = function(t) {
          const r = e.indexOf(t);
          ~r && e.splice(r, 1)
        }, t.pause = function() {
          return Gi(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return Gi(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          Gi(e, ((e, r) => {
            const n = Vi.fun(t) ? t(r, e) : t;
            n && e.set(n)
          }))
        }, t.start = function(t) {
          const r = [];
          return Gi(e, ((e, n) => {
            if (Vi.und(t)) r.push(e.start());
            else {
              const o = this._getProps(t, e, n);
              o && r.push(e.start(o))
            }
          })), r
        }, t.stop = function() {
          return Gi(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return Gi(e, ((e, r) => e.update(this._getProps(t, e, r)))), this
        };
        const r = function(e, t, r) {
          return Vi.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function Bl(e, t) {
        const r = Vi.fun(e),
          [
            [n], o
          ] = function(e, t, r) {
            const n = Vi.fun(t) && t;
            n && !r && (r = []);
            const o = (0, h.useMemo)((() => n || 3 == arguments.length ? Ml() : void 0), []),
              i = (0, h.useRef)(0),
              a = us(),
              s = (0, h.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const r = Tl(e, t);
                  return i.current > 0 && !s.queue.length && !Object.keys(r).some((t => !e.springs[t])) ? Pl(e, t) : new Promise((n => {
                    kl(e, r), s.queue.push((() => {
                      n(Pl(e, t))
                    })), a()
                  }))
                }
              })), []),
              l = (0, h.useRef)([...s.ctrls]),
              c = [],
              u = fs(e) || 0;

            function d(e, r) {
              for (let o = e; o < r; o++) {
                const e = l.current[o] || (l.current[o] = new Cl(null, s.flush)),
                  r = n ? n(o, e) : t[o];
                r && (c[o] = yl(r))
              }
            }(0, h.useMemo)((() => {
              Gi(l.current.slice(e, u), (e => {
                Vs(e, o), e.stop(!0)
              })), l.current.length = e, d(u, e)
            }), [e]), (0, h.useMemo)((() => {
              d(0, Math.min(u, e))
            }), r);
            const f = l.current.map(((e, t) => Tl(e, c[t]))),
              p = (0, h.useContext)(Il),
              m = fs(p),
              g = p !== m && zs(p);
            cs((() => {
              i.current++, s.ctrls = l.current;
              const {
                queue: e
              } = s;
              e.length && (s.queue = [], Gi(e, (e => e()))), Gi(l.current, ((e, t) => {
                o?.add(e), g && e.start({
                  default: p
                });
                const r = c[t];
                r && (Us(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
              }))
            })), ds((() => () => {
              Gi(s.ctrls, (e => e.stop(!0)))
            }));
            const v = f.map((e => ({
              ...e
            })));
            return o ? [v, o] : v
          }(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, o] : n
      }
      var Hl = () => Ml(),
        zl = () => (0, h.useState)(Hl)[0];
      var Fl = 1,
        Vl = class extends sl {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = ka(...t);
            const r = this._get(),
              n = Cs(r);
            gs(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            Ui(t, this.get()) || (ms(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Gl(this._active) && ql(this)
          }
          _get() {
            const e = Vi.arr(this.source) ? this.source.map(za) : Xi(za(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Gl(this._active) && (this.idle = !1, Gi(vs(this), (e => {
              e.done = !1
            })), zi.skipAnimation ? (xi.batchedUpdates((() => this.advance())), ql(this)) : aa.start(this))
          }
          _attach() {
            let e = 1;
            Gi(Xi(this.source), (t => {
              Ha(t) && qa(t, this), il(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            Gi(Xi(this.source), (e => {
              Ha(e) && Xa(e, this)
            })), this._active.clear(), ql(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Xi(this.source).reduce(((e, t) => Math.max(e, (il(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function Ul(e) {
        return !1 !== e.idle
      }

      function Gl(e) {
        return !e.size || Array.from(e).every(Ul)
      }

      function ql(e) {
        e.idle || (e.idle = !0, Gi(vs(e), (e => {
          e.done = !0
        })), Va(e, {
          type: "idle",
          parent: e
        }))
      }
      zi.assign({
        createStringInterpolator: ns,
        to: (e, t) => new Vl(e, t)
      }), aa.advance;
      var Xl = /^--/;

      function Wl(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Xl.test(e) || $l.hasOwnProperty(e) && $l[e] ? ("" + t).trim() : t + "px"
      }
      var Kl = {},
        $l = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        Yl = ["Webkit", "Ms", "Moz", "O"];
      $l = Object.keys($l).reduce(((e, t) => (Yl.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), $l);
      var Zl = /^(matrix|translate|scale|rotate|skew)/,
        Ql = /^(translate)/,
        Jl = /^(rotate|skew)/,
        ec = (e, t) => Vi.num(e) && 0 !== e ? e + t : e,
        tc = (e, t) => Vi.arr(e) ? e.every((e => tc(e, t))) : Vi.num(e) ? e === t : parseFloat(e) === t,
        rc = class extends xs {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push((e => [`translate3d(${e.map((e=>ec(e,"px"))).join(",")})`, tc(e, 0)]))), qi(n, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (Zl.test(t)) {
                if (delete n[t], Vi.und(e)) return;
                const r = Ql.test(t) ? "px" : Jl.test(t) ? "deg" : "";
                o.push(Xi(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${ec(o,r)})`, tc(o, 0)] : e => [`${t}(${e.map((e=>ec(e,r))).join(",")})`, tc(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (n.transform = new nc(o, i)), super(n)
          }
        },
        nc = class extends Ua {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Gi(this.inputs, ((r, n) => {
              const o = za(r[0]),
                [i, a] = this.transforms[n](Vi.arr(o) ? o : r.map(za));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Gi(this.inputs, (e => Gi(e, (e => Ha(e) && qa(e, this)))))
          }
          observerRemoved(e) {
            0 == e && Gi(this.inputs, (e => Gi(e, (e => Ha(e) && Xa(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Va(this, e)
          }
        };
      zi.assign({
        batchedUpdates: Qt.unstable_batchedUpdates,
        createStringInterpolator: ns,
        colors: {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199
        }
      });
      var oc = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new xs(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = ks(e) || "Anonymous";
              return (e = Vi.str(e) ? i[e] || (i[e] = Ps(e, o)) : e[Ts] || (e[Ts] = Ps(e, o))).displayName = `Animated(${t})`, e
            };
          return qi(e, ((t, r) => {
            Vi.arr(e) && (r = ks(t)), i[r] = i(t)
          })), {
            animated: i
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: i,
                scrollTop: a,
                scrollLeft: s,
                viewBox: l,
                ...c
              } = t,
              u = Object.values(c),
              d = Object.keys(c).map((t => r || e.hasAttribute(t) ? t : Kl[t] || (Kl[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = Wl(t, o[t]);
                Xl.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach(((t, r) => {
              e.setAttribute(t, u[r])
            })), void 0 !== n && (e.className = n), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new rc(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        ic = oc.animated;
      const ac = (e, t, r) => {
          if (e > r) {
            const t = e - r;
            return r + 2 * (t > 0 ? Math.sqrt(t) : -Math.sqrt(-t))
          }
          if (e < t) {
            const r = e - t;
            return t + 2 * (r > 0 ? Math.sqrt(r) : -Math.sqrt(-r))
          }
          return e
        },
        sc = e => {
          const t = (e, t, r) => {
            r(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, r) => {
            const n = r.getBoundingClientRect();
            return e ? (t(e.top, n.top, ((e, t) => e < t)), t(e.bottom, n.bottom, ((e, t) => e > t)), t(e.left, n.left, ((e, t) => e < t)), t(e.right, n.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), n) : n
          }), null)
        },
        lc = ([e, t], r) => {
          const {
            a: n
          } = new DOMMatrix(r.style.transform), o = sc(r), i = o.width / n, a = 100 * uc(e, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / i, s = o.height / n;
          return {
            x: a,
            y: 100 * uc(t, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / s
          }
        },
        cc = (e, t, r, n) => {
          let o = r[0],
            i = r[1];
          const {
            a
          } = new DOMMatrix(e.style.transform), s = n / 100, l = sc(e), c = t.getBoundingClientRect(), u = l.width / a / 2, d = c.width / 2, h = u * s > d ? u * s - d : 0, f = l.height / a / 2, p = c.height / 2, m = f * s > p ? f * s - p : 0, g = -o > h, v = o > h, y = i > m, b = -i > m;
          return g && !v ? o = -h : v && !g && (o = h), y && !b ? i = m : b && !y && (i = -m), {
            xy: [o, i],
            horizontalOffset: h,
            verticalOffset: m
          }
        },
        uc = (e, t, r) => Math.min(Math.max(e, t), r),
        dc = {
          mass: .1,
          tension: 800,
          friction: 20,
          clamp: !1,
          precision: .001,
          velocity: 0
        },
        hc = Gs,
        fc = {
          scrollFactor: 2e3,
          dragFactor: 1.3,
          closePc: 33
        },
        pc = ({
          children: e,
          containerRef: t,
          contentRef: r,
          minZoomLevel: n,
          maxZoomLevel: o,
          eventHandlers: i,
          enabled: a,
          animation: s
        }) => {
          (({
            containerRef: e,
            contentRef: t
          }) => {
            const r = e => {
              e.preventDefault(), e.nativeEvent?.preventDefault()
            };
            (0, h.useEffect)((() => (document.addEventListener("gesturestart", r), document.addEventListener("gesturechange", r), t.current?.addEventListener("dragstart", r), t.current?.addEventListener("click", r), e.current?.addEventListener("dragstart", r), e.current?.addEventListener("click", r), () => {
              document.removeEventListener("gesturestart", r), document.removeEventListener("gesturechange", r), t.current?.removeEventListener("dragstart", r), t.current?.removeEventListener("click", r), e.current?.removeEventListener("dragstart", r), e.current?.removeEventListener("click", r)
            })), [e.current, t.current])
          })({
            containerRef: t,
            contentRef: r
          }), _i({
            onDrag: i.onDrag,
            onDragEnd: i.onDragEnd,
            onPinch: i.onPinch,
            onPinchEnd: i.onPinchEnd,
            onWheel: i.onWheel,
            onWheelEnd: i.onWheelEnd
          }, {
            enabled: !0,
            target: t,
            drag: {
              filterTaps: !0
            },
            pinch: {
              enabled: a,
              scaleBounds: {
                min: n / 100,
                max: o / 100
              }
            },
            wheel: {
              enabled: a
            },
            eventOptions: {
              passive: !1
            }
          });
          const l = {
            touchAction: "none",
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none"
          };
          return (0, u.jsx)("div", {
            ref: t,
            className: "foundry_hcgxh_148vt480",
            style: l,
            children: (0, u.jsx)(ic.div, {
              ref: r,
              className: "foundry_hcgxh_148vt481",
              style: {
                ...s,
                ...l,
                width: "100%",
                height: "100%"
              },
              children: e
            })
          })
        };
      var mc = r(23514);

      function gc(e, t) {
        var r = t && t.cache ? t.cache : Tc,
          n = t && t.serializer ? t.serializer : wc;
        return (t && t.strategy ? t.strategy : _c)(e, {
          cache: r,
          serializer: n
        })
      }

      function vc(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, n), t.set(i, a)), a
      }

      function yc(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function bc(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function _c(e, t) {
        return bc(e, this, 1 === e.length ? vc : yc, t.cache.create(), t.serializer)
      }
      var wc = function() {
        return JSON.stringify(arguments)
      };

      function xc() {
        this.cache = Object.create(null)
      }
      xc.prototype.get = function(e) {
        return this.cache[e]
      }, xc.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var Ec, Sc, Cc, Pc, Oc, Tc = {
          create: function() {
            return new xc
          }
        },
        kc = {
          variadic: function(e, t) {
            return bc(e, this, yc, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return bc(e, this, vc, t.cache.create(), t.serializer)
          }
        };

      function jc(e) {
        return e.type === Sc.literal
      }

      function Ac(e) {
        return e.type === Sc.argument
      }

      function Lc(e) {
        return e.type === Sc.number
      }

      function Nc(e) {
        return e.type === Sc.date
      }

      function Rc(e) {
        return e.type === Sc.time
      }

      function Ic(e) {
        return e.type === Sc.select
      }

      function Dc(e) {
        return e.type === Sc.plural
      }

      function Mc(e) {
        return e.type === Sc.pound
      }

      function Bc(e) {
        return e.type === Sc.tag
      }

      function Hc(e) {
        return !(!e || "object" != typeof e || e.type !== Cc.number)
      }

      function zc(e) {
        return !(!e || "object" != typeof e || e.type !== Cc.dateTime)
      }(Oc = Ec || (Ec = {}))[Oc.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", Oc[Oc.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", Oc[Oc.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", Oc[Oc.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", Oc[Oc.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", Oc[Oc.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", Oc[Oc.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", Oc[Oc.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", Oc[Oc.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", Oc[Oc.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", Oc[Oc.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", Oc[Oc.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", Oc[Oc.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", Oc[Oc.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", Oc[Oc.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", Oc[Oc.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", Oc[Oc.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", Oc[Oc.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", Oc[Oc.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", Oc[Oc.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", Oc[Oc.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", Oc[Oc.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", Oc[Oc.INVALID_TAG = 23] = "INVALID_TAG", Oc[Oc.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", Oc[Oc.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", Oc[Oc.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", (Pc = Sc || (Sc = {}))[Pc.literal = 0] = "literal", Pc[Pc.argument = 1] = "argument", Pc[Pc.number = 2] = "number", Pc[Pc.date = 3] = "date", Pc[Pc.time = 4] = "time", Pc[Pc.select = 5] = "select", Pc[Pc.plural = 6] = "plural", Pc[Pc.pound = 7] = "pound", Pc[Pc.tag = 8] = "tag",
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(Cc || (Cc = {}));
      var Fc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Vc = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Uc(e) {
        var t = {};
        return e.replace(Vc, (function(e) {
          var r = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === r ? "2-digit" : "numeric";
              break;
            case "Y":
            case "u":
            case "U":
            case "r":
              throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
              throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][r - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "e":
              if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "c":
              if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][r - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][r - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = r < 4 ? "short" : "long";
              break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
              throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
          }
          return ""
        })), t
      }
      var Gc = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function qc(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], r = 0, n = e.split(Gc).filter((function(e) {
            return e.length > 0
          })); r < n.length; r++) {
          var o = n[r].split("/");
          if (0 === o.length) throw new Error("Invalid number skeleton");
          for (var i = o[0], a = o.slice(1), s = 0, l = a; s < l.length; s++)
            if (0 === l[s].length) throw new Error("Invalid number skeleton");
          t.push({
            stem: i,
            options: a
          })
        }
        return t
      }
      var Xc = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Wc = /^(@+)?(\+|#+)?[rs]?$/g,
        Kc = /(\*)(0+)|(#+)(0+)|(0+)/g,
        $c = /^(0+)$/;

      function Yc(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Wc, (function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        })), t
      }

      function Zc(e) {
        switch (e) {
          case "sign-auto":
            return {
              signDisplay: "auto"
            };
          case "sign-accounting":
          case "()":
            return {
              currencySign: "accounting"
            };
          case "sign-always":
          case "+!":
            return {
              signDisplay: "always"
            };
          case "sign-accounting-always":
          case "()!":
            return {
              signDisplay: "always", currencySign: "accounting"
            };
          case "sign-except-zero":
          case "+?":
            return {
              signDisplay: "exceptZero"
            };
          case "sign-accounting-except-zero":
          case "()?":
            return {
              signDisplay: "exceptZero", currencySign: "accounting"
            };
          case "sign-never":
          case "+_":
            return {
              signDisplay: "never"
            }
        }
      }

      function Qc(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !$c.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function Jc(e) {
        return Zc(e) || {}
      }

      function eu(e) {
        for (var t = {}, r = 0, n = e; r < n.length; r++) {
          var o = n[r];
          switch (o.stem) {
            case "percent":
            case "%":
              t.style = "percent";
              continue;
            case "%x100":
              t.style = "percent", t.scale = 100;
              continue;
            case "currency":
              t.style = "currency", t.currency = o.options[0];
              continue;
            case "group-off":
            case ",_":
              t.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              t.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              t.style = "unit", t.unit = o.options[0].replace(/^(.*?)-/, "");
              continue;
            case "compact-short":
            case "K":
              t.notation = "compact", t.compactDisplay = "short";
              continue;
            case "compact-long":
            case "KK":
              t.notation = "compact", t.compactDisplay = "long";
              continue;
            case "scientific":
              t = (0, mc.__assign)((0, mc.__assign)((0, mc.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, mc.__assign)((0, mc.__assign)({}, e), Jc(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, mc.__assign)((0, mc.__assign)((0, mc.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, mc.__assign)((0, mc.__assign)({}, e), Jc(t))
              }), {}));
              continue;
            case "notation-simple":
              t.notation = "standard";
              continue;
            case "unit-width-narrow":
              t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
              continue;
            case "unit-width-short":
              t.currencyDisplay = "code", t.unitDisplay = "short";
              continue;
            case "unit-width-full-name":
              t.currencyDisplay = "name", t.unitDisplay = "long";
              continue;
            case "unit-width-iso-code":
              t.currencyDisplay = "symbol";
              continue;
            case "scale":
              t.scale = parseFloat(o.options[0]);
              continue;
            case "rounding-mode-floor":
              t.roundingMode = "floor";
              continue;
            case "rounding-mode-ceiling":
              t.roundingMode = "ceil";
              continue;
            case "rounding-mode-down":
              t.roundingMode = "trunc";
              continue;
            case "rounding-mode-up":
              t.roundingMode = "expand";
              continue;
            case "rounding-mode-half-even":
              t.roundingMode = "halfEven";
              continue;
            case "rounding-mode-half-down":
              t.roundingMode = "halfTrunc";
              continue;
            case "rounding-mode-half-up":
              t.roundingMode = "halfExpand";
              continue;
            case "integer-width":
              if (o.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              o.options[0].replace(Kc, (function(e, r, n, o, i, a) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if ($c.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Xc.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Xc, (function(e, r, n, o, i, a) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, mc.__assign)((0, mc.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, mc.__assign)((0, mc.__assign)({}, t), Yc(i)))
          } else if (Wc.test(o.stem)) t = (0, mc.__assign)((0, mc.__assign)({}, t), Yc(o.stem));
          else {
            var a = Zc(o.stem);
            a && (t = (0, mc.__assign)((0, mc.__assign)({}, t), a));
            var s = Qc(o.stem);
            s && (t = (0, mc.__assign)((0, mc.__assign)({}, t), s))
          }
        }
        return t
      }
      var tu, ru = {
        "001": ["H", "h"],
        419: ["h", "H", "hB", "hb"],
        AC: ["H", "h", "hb", "hB"],
        AD: ["H", "hB"],
        AE: ["h", "hB", "hb", "H"],
        AF: ["H", "hb", "hB", "h"],
        AG: ["h", "hb", "H", "hB"],
        AI: ["H", "h", "hb", "hB"],
        AL: ["h", "H", "hB"],
        AM: ["H", "hB"],
        AO: ["H", "hB"],
        AR: ["h", "H", "hB", "hb"],
        AS: ["h", "H"],
        AT: ["H", "hB"],
        AU: ["h", "hb", "H", "hB"],
        AW: ["H", "hB"],
        AX: ["H"],
        AZ: ["H", "hB", "h"],
        BA: ["H", "hB", "h"],
        BB: ["h", "hb", "H", "hB"],
        BD: ["h", "hB", "H"],
        BE: ["H", "hB"],
        BF: ["H", "hB"],
        BG: ["H", "hB", "h"],
        BH: ["h", "hB", "hb", "H"],
        BI: ["H", "h"],
        BJ: ["H", "hB"],
        BL: ["H", "hB"],
        BM: ["h", "hb", "H", "hB"],
        BN: ["hb", "hB", "h", "H"],
        BO: ["h", "H", "hB", "hb"],
        BQ: ["H"],
        BR: ["H", "hB"],
        BS: ["h", "hb", "H", "hB"],
        BT: ["h", "H"],
        BW: ["H", "h", "hb", "hB"],
        BY: ["H", "h"],
        BZ: ["H", "h", "hb", "hB"],
        CA: ["h", "hb", "H", "hB"],
        CC: ["H", "h", "hb", "hB"],
        CD: ["hB", "H"],
        CF: ["H", "h", "hB"],
        CG: ["H", "hB"],
        CH: ["H", "hB", "h"],
        CI: ["H", "hB"],
        CK: ["H", "h", "hb", "hB"],
        CL: ["h", "H", "hB", "hb"],
        CM: ["H", "h", "hB"],
        CN: ["H", "hB", "hb", "h"],
        CO: ["h", "H", "hB", "hb"],
        CP: ["H"],
        CR: ["h", "H", "hB", "hb"],
        CU: ["h", "H", "hB", "hb"],
        CV: ["H", "hB"],
        CW: ["H", "hB"],
        CX: ["H", "h", "hb", "hB"],
        CY: ["h", "H", "hb", "hB"],
        CZ: ["H"],
        DE: ["H", "hB"],
        DG: ["H", "h", "hb", "hB"],
        DJ: ["h", "H"],
        DK: ["H"],
        DM: ["h", "hb", "H", "hB"],
        DO: ["h", "H", "hB", "hb"],
        DZ: ["h", "hB", "hb", "H"],
        EA: ["H", "h", "hB", "hb"],
        EC: ["h", "H", "hB", "hb"],
        EE: ["H", "hB"],
        EG: ["h", "hB", "hb", "H"],
        EH: ["h", "hB", "hb", "H"],
        ER: ["h", "H"],
        ES: ["H", "hB", "h", "hb"],
        ET: ["hB", "hb", "h", "H"],
        FI: ["H"],
        FJ: ["h", "hb", "H", "hB"],
        FK: ["H", "h", "hb", "hB"],
        FM: ["h", "hb", "H", "hB"],
        FO: ["H", "h"],
        FR: ["H", "hB"],
        GA: ["H", "hB"],
        GB: ["H", "h", "hb", "hB"],
        GD: ["h", "hb", "H", "hB"],
        GE: ["H", "hB", "h"],
        GF: ["H", "hB"],
        GG: ["H", "h", "hb", "hB"],
        GH: ["h", "H"],
        GI: ["H", "h", "hb", "hB"],
        GL: ["H", "h"],
        GM: ["h", "hb", "H", "hB"],
        GN: ["H", "hB"],
        GP: ["H", "hB"],
        GQ: ["H", "hB", "h", "hb"],
        GR: ["h", "H", "hb", "hB"],
        GT: ["h", "H", "hB", "hb"],
        GU: ["h", "hb", "H", "hB"],
        GW: ["H", "hB"],
        GY: ["h", "hb", "H", "hB"],
        HK: ["h", "hB", "hb", "H"],
        HN: ["h", "H", "hB", "hb"],
        HR: ["H", "hB"],
        HU: ["H", "h"],
        IC: ["H", "h", "hB", "hb"],
        ID: ["H"],
        IE: ["H", "h", "hb", "hB"],
        IL: ["H", "hB"],
        IM: ["H", "h", "hb", "hB"],
        IN: ["h", "H"],
        IO: ["H", "h", "hb", "hB"],
        IQ: ["h", "hB", "hb", "H"],
        IR: ["hB", "H"],
        IS: ["H"],
        IT: ["H", "hB"],
        JE: ["H", "h", "hb", "hB"],
        JM: ["h", "hb", "H", "hB"],
        JO: ["h", "hB", "hb", "H"],
        JP: ["H", "K", "h"],
        KE: ["hB", "hb", "H", "h"],
        KG: ["H", "h", "hB", "hb"],
        KH: ["hB", "h", "H", "hb"],
        KI: ["h", "hb", "H", "hB"],
        KM: ["H", "h", "hB", "hb"],
        KN: ["h", "hb", "H", "hB"],
        KP: ["h", "H", "hB", "hb"],
        KR: ["h", "H", "hB", "hb"],
        KW: ["h", "hB", "hb", "H"],
        KY: ["h", "hb", "H", "hB"],
        KZ: ["H", "hB"],
        LA: ["H", "hb", "hB", "h"],
        LB: ["h", "hB", "hb", "H"],
        LC: ["h", "hb", "H", "hB"],
        LI: ["H", "hB", "h"],
        LK: ["H", "h", "hB", "hb"],
        LR: ["h", "hb", "H", "hB"],
        LS: ["h", "H"],
        LT: ["H", "h", "hb", "hB"],
        LU: ["H", "h", "hB"],
        LV: ["H", "hB", "hb", "h"],
        LY: ["h", "hB", "hb", "H"],
        MA: ["H", "h", "hB", "hb"],
        MC: ["H", "hB"],
        MD: ["H", "hB"],
        ME: ["H", "hB", "h"],
        MF: ["H", "hB"],
        MG: ["H", "h"],
        MH: ["h", "hb", "H", "hB"],
        MK: ["H", "h", "hb", "hB"],
        ML: ["H"],
        MM: ["hB", "hb", "H", "h"],
        MN: ["H", "h", "hb", "hB"],
        MO: ["h", "hB", "hb", "H"],
        MP: ["h", "hb", "H", "hB"],
        MQ: ["H", "hB"],
        MR: ["h", "hB", "hb", "H"],
        MS: ["H", "h", "hb", "hB"],
        MT: ["H", "h"],
        MU: ["H", "h"],
        MV: ["H", "h"],
        MW: ["h", "hb", "H", "hB"],
        MX: ["h", "H", "hB", "hb"],
        MY: ["hb", "hB", "h", "H"],
        MZ: ["H", "hB"],
        NA: ["h", "H", "hB", "hb"],
        NC: ["H", "hB"],
        NE: ["H"],
        NF: ["H", "h", "hb", "hB"],
        NG: ["H", "h", "hb", "hB"],
        NI: ["h", "H", "hB", "hb"],
        NL: ["H", "hB"],
        NO: ["H", "h"],
        NP: ["H", "h", "hB"],
        NR: ["H", "h", "hb", "hB"],
        NU: ["H", "h", "hb", "hB"],
        NZ: ["h", "hb", "H", "hB"],
        OM: ["h", "hB", "hb", "H"],
        PA: ["h", "H", "hB", "hb"],
        PE: ["h", "H", "hB", "hb"],
        PF: ["H", "h", "hB"],
        PG: ["h", "H"],
        PH: ["h", "hB", "hb", "H"],
        PK: ["h", "hB", "H"],
        PL: ["H", "h"],
        PM: ["H", "hB"],
        PN: ["H", "h", "hb", "hB"],
        PR: ["h", "H", "hB", "hb"],
        PS: ["h", "hB", "hb", "H"],
        PT: ["H", "hB"],
        PW: ["h", "H"],
        PY: ["h", "H", "hB", "hb"],
        QA: ["h", "hB", "hb", "H"],
        RE: ["H", "hB"],
        RO: ["H", "hB"],
        RS: ["H", "hB", "h"],
        RU: ["H"],
        RW: ["H", "h"],
        SA: ["h", "hB", "hb", "H"],
        SB: ["h", "hb", "H", "hB"],
        SC: ["H", "h", "hB"],
        SD: ["h", "hB", "hb", "H"],
        SE: ["H"],
        SG: ["h", "hb", "H", "hB"],
        SH: ["H", "h", "hb", "hB"],
        SI: ["H", "hB"],
        SJ: ["H"],
        SK: ["H"],
        SL: ["h", "hb", "H", "hB"],
        SM: ["H", "h", "hB"],
        SN: ["H", "h", "hB"],
        SO: ["h", "H"],
        SR: ["H", "hB"],
        SS: ["h", "hb", "H", "hB"],
        ST: ["H", "hB"],
        SV: ["h", "H", "hB", "hb"],
        SX: ["H", "h", "hb", "hB"],
        SY: ["h", "hB", "hb", "H"],
        SZ: ["h", "hb", "H", "hB"],
        TA: ["H", "h", "hb", "hB"],
        TC: ["h", "hb", "H", "hB"],
        TD: ["h", "H", "hB"],
        TF: ["H", "h", "hB"],
        TG: ["H", "hB"],
        TH: ["H", "h"],
        TJ: ["H", "h"],
        TL: ["H", "hB", "hb", "h"],
        TM: ["H", "h"],
        TN: ["h", "hB", "hb", "H"],
        TO: ["h", "H"],
        TR: ["H", "hB"],
        TT: ["h", "hb", "H", "hB"],
        TW: ["hB", "hb", "h", "H"],
        TZ: ["hB", "hb", "H", "h"],
        UA: ["H", "hB", "h"],
        UG: ["hB", "hb", "H", "h"],
        UM: ["h", "hb", "H", "hB"],
        US: ["h", "hb", "H", "hB"],
        UY: ["h", "H", "hB", "hb"],
        UZ: ["H", "hB", "h"],
        VA: ["H", "h", "hB"],
        VC: ["h", "hb", "H", "hB"],
        VE: ["h", "H", "hB", "hb"],
        VG: ["h", "hb", "H", "hB"],
        VI: ["h", "hb", "H", "hB"],
        VN: ["H", "h"],
        VU: ["h", "H"],
        WF: ["H", "hB"],
        WS: ["h", "H"],
        XK: ["H", "hB", "h"],
        YE: ["h", "hB", "hb", "H"],
        YT: ["H", "hB"],
        ZA: ["H", "h", "hb", "hB"],
        ZM: ["h", "hb", "H", "hB"],
        ZW: ["H", "h"],
        "af-ZA": ["H", "h", "hB", "hb"],
        "ar-001": ["h", "hB", "hb", "H"],
        "ca-ES": ["H", "h", "hB"],
        "en-001": ["h", "hb", "H", "hB"],
        "en-HK": ["h", "hb", "H", "hB"],
        "en-IL": ["H", "h", "hb", "hB"],
        "en-MY": ["h", "hb", "H", "hB"],
        "es-BR": ["H", "h", "hB", "hb"],
        "es-ES": ["H", "h", "hB", "hb"],
        "es-GQ": ["H", "h", "hB", "hb"],
        "fr-CA": ["H", "h", "hB"],
        "gl-ES": ["H", "h", "hB"],
        "gu-IN": ["hB", "hb", "h", "H"],
        "hi-IN": ["hB", "h", "H"],
        "it-CH": ["H", "h", "hB"],
        "it-IT": ["H", "h", "hB"],
        "kn-IN": ["hB", "h", "H"],
        "ml-IN": ["hB", "h", "H"],
        "mr-IN": ["hB", "hb", "h", "H"],
        "pa-IN": ["hB", "hb", "h", "H"],
        "ta-IN": ["hB", "h", "hb", "H"],
        "te-IN": ["hB", "h", "H"],
        "zu-ZA": ["H", "hB", "hb", "h"]
      };

      function nu(e) {
        var t = e.hourCycle;
        if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
          case "h24":
            return "k";
          case "h23":
            return "H";
          case "h12":
            return "h";
          case "h11":
            return "K";
          default:
            throw new Error("Invalid hourCycle")
        }
        var r, n = e.language;
        return "root" !== n && (r = e.maximize().region), (ru[r || ""] || ru[n || ""] || ru["".concat(n, "-001")] || ru["001"])[0]
      }
      var ou = new RegExp("^".concat(Fc.source, "*")),
        iu = new RegExp("".concat(Fc.source, "*$"));

      function au(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var su = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        lu = !!String.fromCodePoint,
        cu = !!Object.fromEntries,
        uu = !!String.prototype.codePointAt,
        du = !!String.prototype.trimStart,
        hu = !!String.prototype.trimEnd,
        fu = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        pu = !0;
      try {
        pu = "a" === (null === (tu = xu("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === tu ? void 0 : tu[0])
      } catch (e) {
        pu = !1
      }
      var mu, gu = su ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        vu = lu ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        yu = cu ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        bu = uu ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        _u = du ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(ou, "")
        },
        wu = hu ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(iu, "")
        };

      function xu(e, t) {
        return new RegExp(e, t)
      }
      if (pu) {
        var Eu = xu("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        mu = function(e, t) {
          var r;
          return Eu.lastIndex = t, null !== (r = Eu.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else mu = function(e, t) {
        for (var r = [];;) {
          var n = bu(e, t);
          if (void 0 === n || Tu(n) || ku(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return vu.apply(void 0, r)
      };
      var Su, Cu, Pu = function() {
        function e(e, t) {
          void 0 === t && (t = {}), this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        return e.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, e.prototype.parseMessage = function(e, t, r) {
          for (var n = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((i = this.parseArgument(e, r)).err) return i;
              n.push(i.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(Ec.UNMATCHED_CLOSING_TAG, au(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Ou(this.peek() || 0)) {
                  if ((i = this.parseTag(e, t)).err) return i;
                  n.push(i.val)
                } else {
                  var i;
                  if ((i = this.parseLiteral(e, t)).err) return i;
                  n.push(i.val)
                }
              } else {
                var a = this.clonePosition();
                this.bump(), n.push({
                  type: Sc.pound,
                  location: au(a, this.clonePosition())
                })
              }
            }
          }
          return {
            val: n,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var r = this.clonePosition();
          this.bump();
          var n = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: Sc.literal,
              value: "<".concat(n, "/>"),
              location: au(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Ou(this.char())) return this.error(Ec.INVALID_TAG, au(a, this.clonePosition()));
              var s = this.clonePosition();
              return n !== this.parseTagName() ? this.error(Ec.UNMATCHED_CLOSING_TAG, au(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Sc.tag,
                  value: n,
                  children: i,
                  location: au(r, this.clonePosition())
                },
                err: null
              } : this.error(Ec.INVALID_TAG, au(a, this.clonePosition())))
            }
            return this.error(Ec.UNCLOSED_TAG, au(r, this.clonePosition()))
          }
          return this.error(Ec.INVALID_TAG, au(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, t = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(t, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var i = this.tryParseUnquoted(e, t);
              if (i) n += i;
              else {
                var a = this.tryParseLeftAngleBracket();
                if (!a) break;
                n += a
              }
            }
          }
          var s = au(r, this.clonePosition());
          return {
            val: {
              type: Sc.literal,
              value: n,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Ou(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
          var e
        }, e.prototype.tryParseQuote = function(e) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === e || "selectordinal" === e) break;
              return null;
            default:
              return null
          }
          this.bump();
          var t = [this.char()];
          for (this.bump(); !this.isEOF();) {
            var r = this.char();
            if (39 === r) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(r);
            this.bump()
          }
          return vu.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), vu(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Ec.EXPECT_ARGUMENT_CLOSING_BRACE, au(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Ec.EMPTY_ARGUMENT, au(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(Ec.MALFORMED_ARGUMENT, au(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Ec.EXPECT_ARGUMENT_CLOSING_BRACE, au(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Sc.argument,
                  value: n,
                  location: au(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ec.EXPECT_ARGUMENT_CLOSING_BRACE, au(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(Ec.MALFORMED_ARGUMENT, au(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = mu(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: au(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Ec.EXPECT_ARGUMENT_TYPE, au(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (f = wu(v.val)).length) return this.error(Ec.EXPECT_ARGUMENT_STYLE, au(this.clonePosition(), this.clonePosition()));
                l = {
                  style: f,
                  styleLocation: au(c, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(n)).err) return y;
              var u = au(n, this.clonePosition());
              if (l && gu(null == l ? void 0 : l.style, "::", 0)) {
                var d = _u(l.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? v : {
                  val: {
                    type: Sc.number,
                    value: r,
                    location: u,
                    style: v.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Ec.EXPECT_DATE_TIME_SKELETON, u);
                var h = d;
                this.locale && (h = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = nu(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; a-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var f = {
                  type: Cc.dateTime,
                  pattern: h,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Uc(h) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Sc.date : Sc.time,
                    value: r,
                    location: u,
                    style: f
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Sc.number : "date" === a ? Sc.date : Sc.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Ec.EXPECT_SELECT_ARGUMENT_OPTIONS, au(p, (0, mc.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                g = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Ec.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, au(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(Ec.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ec.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), g = v.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(n)).err) return y;
              var _ = au(n, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Sc.select,
                  value: r,
                  options: yu(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Sc.plural,
                  value: r,
                  options: yu(b.val),
                  offset: g,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Ec.INVALID_ARGUMENT_TYPE, au(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Ec.EXPECT_ARGUMENT_CLOSING_BRACE, au(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Ec.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, au(r, this.clonePosition()));
              this.bump();
              break;
            case 123:
              e += 1, this.bump();
              break;
            case 125:
              if (!(e > 0)) return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
              };
              e -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(t.offset, this.offset()),
            err: null
          }
        }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
          var r = [];
          try {
            r = qc(e)
          } catch (e) {
            return this.error(Ec.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Cc.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? eu(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, a = [], s = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Ec.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ec.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = au(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Ec.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ec.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var h = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Ec.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ec.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, au(this.clonePosition(), this.clonePosition()));
            var f = this.parseMessage(e + 1, t, r);
            if (f.err) return f;
            var p = this.tryParseArgumentClose(h);
            if (p.err) return p;
            a.push([l, {
              value: f.val,
              location: au(h, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Ec.EXPECT_SELECT_ARGUMENT_SELECTOR : Ec.EXPECT_PLURAL_ARGUMENT_SELECTOR, au(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Ec.MISSING_OTHER_CLAUSE, au(this.clonePosition(), this.clonePosition())) : {
            val: a,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var a = this.char();
            if (!(a >= 48 && a <= 57)) break;
            o = !0, i = 10 * i + (a - 48), this.bump()
          }
          var s = au(n, this.clonePosition());
          return o ? fu(i *= r) ? {
            val: i,
            err: null
          } : this.error(t, s) : this.error(e, s)
        }, e.prototype.offset = function() {
          return this.position.offset
        }, e.prototype.isEOF = function() {
          return this.offset() === this.message.length
        }, e.prototype.clonePosition = function() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }, e.prototype.char = function() {
          var e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          var t = bu(this.message, e);
          if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
          return t
        }, e.prototype.error = function(e, t) {
          return {
            val: null,
            err: {
              kind: e,
              message: this.message,
              location: t
            }
          }
        }, e.prototype.bump = function() {
          if (!this.isEOF()) {
            var e = this.char();
            10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
          }
        }, e.prototype.bumpIf = function(e) {
          if (gu(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            r = this.message.indexOf(e, t);
          return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && Tu(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function Ou(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Tu(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function ku(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function ju(e) {
        e.forEach((function(e) {
          if (delete e.location, Ic(e) || Dc(e))
            for (var t in e.options) delete e.options[t].location, ju(e.options[t].value);
          else Lc(e) && Hc(e.style) || (Nc(e) || Rc(e)) && zc(e.style) ? delete e.style.location : Bc(e) && ju(e.children)
        }))
      }

      function Au(e, t) {
        void 0 === t && (t = {}), t = (0, mc.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new Pu(e, t).parse();
        if (r.err) {
          var n = SyntaxError(Ec[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || ju(r.val), r.val
      }(Cu = Su || (Su = {})).MISSING_VALUE = "MISSING_VALUE", Cu.INVALID_VALUE = "INVALID_VALUE", Cu.MISSING_INTL_API = "MISSING_INTL_API";
      var Lu, Nu = function(e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return o.code = r, o.originalMessage = n, o
          }
          return (0, mc.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        Ru = function(e) {
          function t(t, r, n, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), Su.INVALID_VALUE, o) || this
          }
          return (0, mc.__extends)(t, e), t
        }(Nu),
        Iu = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), Su.INVALID_VALUE, n) || this
          }
          return (0, mc.__extends)(t, e), t
        }(Nu),
        Du = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), Su.MISSING_VALUE, r) || this
          }
          return (0, mc.__extends)(t, e), t
        }(Nu);

      function Mu(e) {
        return "function" == typeof e
      }

      function Bu(e, t, r, n, o, i, a) {
        if (1 === e.length && jc(e[0])) return [{
          type: Lu.literal,
          value: e[0].value
        }];
        for (var s = [], l = 0, c = e; l < c.length; l++) {
          var u = c[l];
          if (jc(u)) s.push({
            type: Lu.literal,
            value: u.value
          });
          else if (Mc(u)) "number" == typeof i && s.push({
            type: Lu.literal,
            value: r.getNumberFormat(t).format(i)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new Du(d, a);
            var h = o[d];
            if (Ac(u)) h && "string" != typeof h && "number" != typeof h || (h = "string" == typeof h || "number" == typeof h ? String(h) : ""), s.push({
              type: "string" == typeof h ? Lu.literal : Lu.object,
              value: h
            });
            else if (Nc(u)) {
              var f = "string" == typeof u.style ? n.date[u.style] : zc(u.style) ? u.style.parsedOptions : void 0;
              s.push({
                type: Lu.literal,
                value: r.getDateTimeFormat(t, f).format(h)
              })
            } else if (Rc(u)) f = "string" == typeof u.style ? n.time[u.style] : zc(u.style) ? u.style.parsedOptions : n.time.medium, s.push({
              type: Lu.literal,
              value: r.getDateTimeFormat(t, f).format(h)
            });
            else if (Lc(u))(f = "string" == typeof u.style ? n.number[u.style] : Hc(u.style) ? u.style.parsedOptions : void 0) && f.scale && (h *= f.scale || 1), s.push({
              type: Lu.literal,
              value: r.getNumberFormat(t, f).format(h)
            });
            else {
              if (Bc(u)) {
                var p = u.children,
                  m = u.value,
                  g = o[m];
                if (!Mu(g)) throw new Iu(m, "function", a);
                var v = g(Bu(p, t, r, n, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(v) || (v = [v]), s.push.apply(s, v.map((function(e) {
                  return {
                    type: "string" == typeof e ? Lu.literal : Lu.object,
                    value: e
                  }
                })))
              }
              if (Ic(u)) {
                if (!(y = u.options[h] || u.options.other)) throw new Ru(u.value, h, Object.keys(u.options), a);
                s.push.apply(s, Bu(y.value, t, r, n, o))
              } else if (Dc(u)) {
                var y;
                if (!(y = u.options["=".concat(h)])) {
                  if (!Intl.PluralRules) throw new Nu('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Su.MISSING_INTL_API, a);
                  var b = r.getPluralRules(t, {
                    type: u.pluralType
                  }).select(h - (u.offset || 0));
                  y = u.options[b] || u.options.other
                }
                if (!y) throw new Ru(u.value, h, Object.keys(u.options), a);
                s.push.apply(s, Bu(y.value, t, r, n, o, h - (u.offset || 0)))
              }
            }
          }
        }
        return (_ = s).length < 2 ? _ : _.reduce((function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === Lu.literal && t.type === Lu.literal ? r.value += t.value : e.push(t), e
        }), []);
        var _
      }

      function Hu(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, r) {
                e[t] = r
              }
            }
          }
        }
      }! function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(Lu || (Lu = {}));
      var zu, Fu = function() {
        function e(t, r, n, o) {
          void 0 === r && (r = e.defaultLocale);
          var i, a, s = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = s.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce((function(e, t) {
                return e.length && t.type === Lu.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return Bu(s.ast, s.locales, s.formatters, s.formats, e, void 0, s.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = s.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(s.locales)[0]
              }
            }, this.getAst = function() {
              return s.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var l = o || {},
              c = (l.formatters, (0, mc.__rest)(l, ["formatters"]));
            this.ast = e.__parse(t, (0, mc.__assign)((0, mc.__assign)({}, c), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (i = e.formats, (a = n) ? Object.keys(i).reduce((function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, mc.__assign)((0, mc.__assign)((0, mc.__assign)({}, e || {}), t || {}), Object.keys(e).reduce((function(r, n) {
                return r[n] = (0, mc.__assign)((0, mc.__assign)({}, e[n]), t[n] || {}), r
              }), {})) : e
            }(i[t], a[t]), e
          }), (0, mc.__assign)({}, i)) : i), this.formatters = o && o.formatters || function(e) {
            return void 0 === e && (e = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }), {
              getNumberFormat: gc((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, mc.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Hu(e.number),
                strategy: kc.variadic
              }),
              getDateTimeFormat: gc((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, mc.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Hu(e.dateTime),
                strategy: kc.variadic
              }),
              getPluralRules: gc((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, mc.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Hu(e.pluralRules),
                strategy: kc.variadic
              })
            }
          }(this.formatterCache)
        }
        return Object.defineProperty(e, "defaultLocale", {
          get: function() {
            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
          },
          enumerable: !1,
          configurable: !0
        }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
          if (void 0 !== Intl.Locale) {
            var t = Intl.NumberFormat.supportedLocalesOf(e);
            return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" == typeof e ? e : e[0])
          }
        }, e.__parse = Au, e.formats = {
          number: {
            integer: {
              maximumFractionDigits: 0
            },
            currency: {
              style: "currency"
            },
            percent: {
              style: "percent"
            }
          },
          date: {
            short: {
              month: "numeric",
              day: "numeric",
              year: "2-digit"
            },
            medium: {
              month: "short",
              day: "numeric",
              year: "numeric"
            },
            long: {
              month: "long",
              day: "numeric",
              year: "numeric"
            },
            full: {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric"
            }
          },
          time: {
            short: {
              hour: "numeric",
              minute: "numeric"
            },
            medium: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric"
            },
            long: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            },
            full: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            }
          }
        }, e
      }();
      ! function(e) {
        e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(zu || (zu = {}));
      var Vu = function(e) {
          function t(r, n, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, mc.__extends)(t, e), t
        }(Error),
        Uu = function(e) {
          function t(t, r) {
            return e.call(this, zu.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, mc.__extends)(t, e), t
        }(Vu),
        Gu = function(e) {
          function t(t, r) {
            return e.call(this, zu.INVALID_CONFIG, t, r) || this
          }
          return (0, mc.__extends)(t, e), t
        }(Vu),
        qu = function(e) {
          function t(t, r) {
            return e.call(this, zu.MISSING_DATA, t, r) || this
          }
          return (0, mc.__extends)(t, e), t
        }(Vu),
        Xu = function(e) {
          function t(t, r, n) {
            var o = e.call(this, zu.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return o.locale = r, o
          }
          return (0, mc.__extends)(t, e), t
        }(Vu),
        Wu = function(e) {
          function t(t, r, n, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, o) || this;
            return i.descriptor = n, i.locale = r, i
          }
          return (0, mc.__extends)(t, e), t
        }(Xu),
        Ku = function(e) {
          function t(t, r) {
            var n = e.call(this, zu.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, mc.__extends)(t, e), t
        }(Vu);

      function $u(e, t, r) {
        return void 0 === r && (r = {}), t.reduce((function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }), {})
      }
      var Yu = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function Zu(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, r) {
                e[t] = r
              }
            }
          }
        }
      }

      function Qu(e, t, r, n) {
        var o, i = e && e[t];
        if (i && (o = i[r]), o) return o;
        n(new Uu("No ".concat(t, " format named: ").concat(r)))
      }

      function Ju(e, t) {
        var r = t && t.cache ? t.cache : ad,
          n = t && t.serializer ? t.serializer : od;
        return (t && t.strategy ? t.strategy : nd)(e, {
          cache: r,
          serializer: n
        })
      }

      function ed(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, n), t.set(i, a)), a
      }

      function td(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function rd(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function nd(e, t) {
        return rd(e, this, 1 === e.length ? ed : td, t.cache.create(), t.serializer)
      }
      var od = function() {
        return JSON.stringify(arguments)
      };

      function id() {
        this.cache = Object.create(null)
      }
      id.prototype.get = function(e) {
        return this.cache[e]
      }, id.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var ad = {
          create: function() {
            return new id
          }
        },
        sd = {
          variadic: function(e, t) {
            return rd(e, this, td, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return rd(e, this, ed, t.cache.create(), t.serializer)
          }
        };

      function ld(e) {
        ! function(e, t, r) {
          if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      Ju((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, mc.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: sd.variadic
      }), Ju((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, mc.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: sd.variadic
      }), Ju((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, mc.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: sd.variadic
      }), Ju((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, mc.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: sd.variadic
      }), Ju((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, mc.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: sd.variadic
      });
      var cd = (0, mc.__assign)((0, mc.__assign)({}, Yu), {
        textComponent: h.Fragment
      });
      r(67332);
      var ud = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? h.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = h.createContext(null)),
        dd = (ud.Consumer, ud.Provider),
        hd = ud;

      function fd(e, t) {
        return Object.keys(e).reduce((function(r, n) {
          return r[n] = (0, mc.__assign)({
            timeZone: t
          }, e[n]), r
        }), {})
      }

      function pd(e, t) {
        return Object.keys((0, mc.__assign)((0, mc.__assign)({}, e), t)).reduce((function(r, n) {
          return r[n] = (0, mc.__assign)((0, mc.__assign)({}, e[n] || {}), t[n] || {}), r
        }), {})
      }

      function md(e, t) {
        if (!t) return e;
        var r = Fu.formats;
        return (0, mc.__assign)((0, mc.__assign)((0, mc.__assign)({}, r), e), {
          date: pd(fd(r.date, t), fd(e.date || {}, t)),
          time: pd(fd(r.time, t), fd(e.time || {}, t))
        })
      }
      gc((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, mc.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: kc.variadic
      }), gc((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, mc.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: kc.variadic
      }), gc((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, mc.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: kc.variadic
      }), gc((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, mc.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: kc.variadic
      }), gc((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, mc.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: kc.variadic
      });
      var gd = function(e, t, r, n, o) {
          var i = e.locale,
            a = e.formats,
            s = e.messages,
            l = e.defaultLocale,
            c = e.defaultFormats,
            u = e.fallbackOnEmptyString,
            d = e.onError,
            h = e.timeZone,
            f = e.defaultRichTextElements;
          void 0 === r && (r = {
            id: ""
          });
          var p = r.id,
            m = r.defaultMessage;
          ! function(e, t, r) {
            if (void 0 === r && (r = Error), !e) throw new r("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
          }(!!p);
          var g = String(p),
            v = s && Object.prototype.hasOwnProperty.call(s, g) && s[g];
          if (Array.isArray(v) && 1 === v.length && v[0].type === Sc.literal) return v[0].value;
          if (!n && v && "string" == typeof v && !f) return v.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, mc.__assign)((0, mc.__assign)({}, f), n || {}), a = md(a, h), c = md(c, h), !v) {
            if (!1 === u && "" === v) return v;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new Ku(r, i)), m) try {
              return t.getMessageFormat(m, l, c, o).format(n)
            } catch (e) {
              return d(new Wu('Error formatting default message for: "'.concat(g, '", rendering default message verbatim'), i, r, e)), "string" == typeof m ? m : g
            }
            return g
          }
          try {
            return t.getMessageFormat(v, i, a, (0, mc.__assign)({
              formatters: t
            }, o || {})).format(n)
          } catch (e) {
            d(new Wu('Error formatting message: "'.concat(g, '", using ').concat(m ? "default message" : "id", " as fallback."), i, r, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, c, o).format(n)
          } catch (e) {
            d(new Wu('Error formatting the default message for: "'.concat(g, '", rendering message verbatim'), i, r, e))
          }
          return "string" == typeof v ? v : "string" == typeof m ? m : g
        },
        vd = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function yd(e, t, r) {
        var n = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === r && (r = {});
        var a = r.format,
          s = a && Qu(o, "number", a, i) || {};
        return t(n, $u(r, vd, s))
      }

      function bd(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return yd(e, t, n).format(r)
        } catch (t) {
          e.onError(new Xu("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function _d(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return yd(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new Xu("Error formatting number.", e.locale, t))
        }
        return []
      }
      var wd = ["numeric", "style"];

      function xd(e, t, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new Nu('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', Su.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === r && (r = {});
            var a = r.format,
              s = !!a && Qu(o, "relative", a, i) || {};
            return t(n, $u(r, wd, s))
          }(e, t, o).format(r, n)
        } catch (t) {
          e.onError(new Xu("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var Ed = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function Sd(e, t, r, n) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === n && (n = {});
        var l = n.format,
          c = (0, mc.__assign)((0, mc.__assign)({}, s && {
            timeZone: s
          }), l && Qu(i, t, l, a)),
          u = $u(n, Ed, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, mc.__assign)((0, mc.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, u)
      }

      function Cd(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Sd(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new Xu("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function Pd(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Sd(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new Xu("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function Od(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = r[2],
          s = void 0 === a ? {} : a,
          l = e.timeZone,
          c = e.locale,
          u = e.onError,
          d = $u(s, Ed, l ? {
            timeZone: l
          } : {});
        try {
          return t(c, d).formatRange(o, i)
        } catch (t) {
          u(new Xu("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function Td(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Sd(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Xu("Error formatting date.", e.locale, t))
        }
        return []
      }

      function kd(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Sd(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Xu("Error formatting time.", e.locale, t))
        }
        return []
      }
      var jd = ["type"];

      function Ad(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || i(new Nu('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Su.MISSING_INTL_API));
        var a = $u(n, jd);
        try {
          return t(o, a).select(r)
        } catch (e) {
          i(new Xu("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Ld = ["type", "style"],
        Nd = Date.now();

      function Rd(e, t, r, n) {
        void 0 === n && (n = {});
        var o = Id(e, t, r, n).reduce((function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Id(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || i(new Nu('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', Su.MISSING_INTL_API));
        var a = $u(n, Ld);
        try {
          var s = {},
            l = r.map((function(e, t) {
              if ("object" == typeof e) {
                var r = function(e) {
                  return "".concat(Nd, "_").concat(e, "_").concat(Nd)
                }(t);
                return s[r] = e, r
              }
              return String(e)
            }));
          return t(o, a).formatToParts(l).map((function(e) {
            return "literal" === e.type ? e : (0, mc.__assign)((0, mc.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          }))
        } catch (e) {
          i(new Xu("Error formatting list.", o, e))
        }
        return r
      }
      var Dd, Md, Bd, Hd = ["style", "type", "fallback", "languageDisplay"];

      function zd(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new Nu('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', Su.MISSING_INTL_API));
        var a = $u(n, Hd);
        try {
          return t(o, a).of(r)
        } catch (e) {
          i(new Xu("Error formatting display name.", o, e))
        }
      }

      function Fd(e, t) {
        var r = function(e) {
            void 0 === e && (e = {
              dateTime: {},
              number: {},
              message: {},
              relativeTime: {},
              pluralRules: {},
              list: {},
              displayNames: {}
            });
            var t = Intl.RelativeTimeFormat,
              r = Intl.ListFormat,
              n = Intl.DisplayNames,
              o = gc((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, mc.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Zu(e.dateTime),
                strategy: kc.variadic
              }),
              i = gc((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, mc.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Zu(e.number),
                strategy: kc.variadic
              }),
              a = gc((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, mc.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Zu(e.pluralRules),
                strategy: kc.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: gc((function(e, t, r, n) {
                return new Fu(e, t, r, (0, mc.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: a
                  }
                }, n || {}))
              }), {
                cache: Zu(e.message),
                strategy: kc.variadic
              }),
              getRelativeTimeFormat: gc((function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new(t.bind.apply(t, (0, mc.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Zu(e.relativeTime),
                strategy: kc.variadic
              }),
              getPluralRules: a,
              getListFormat: gc((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, mc.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Zu(e.list),
                strategy: kc.variadic
              }),
              getDisplayNames: gc((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, mc.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Zu(e.displayNames),
                strategy: kc.variadic
              })
            }
          }(t),
          n = (0, mc.__assign)((0, mc.__assign)({}, Yu), e),
          o = n.locale,
          i = n.defaultLocale,
          a = n.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new qu('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new qu('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new Gu('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(n), (0, mc.__assign)((0, mc.__assign)({}, n), {
            formatters: r,
            formatNumber: bd.bind(null, n, r.getNumberFormat),
            formatNumberToParts: _d.bind(null, n, r.getNumberFormat),
            formatRelativeTime: xd.bind(null, n, r.getRelativeTimeFormat),
            formatDate: Cd.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: Td.bind(null, n, r.getDateTimeFormat),
            formatTime: Pd.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: Od.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: kd.bind(null, n, r.getDateTimeFormat),
            formatPlural: Ad.bind(null, n, r.getPluralRules),
            formatMessage: gd.bind(null, n, r),
            $t: gd.bind(null, n, r),
            formatList: Rd.bind(null, n, r.getListFormat),
            formatListToParts: Id.bind(null, n, r.getListFormat),
            formatDisplayName: zd.bind(null, n, r.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Dd || (Dd = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Md || (Md = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Bd || (Bd = {}));
      var Vd, Ud = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Gd = {
          "001": ["H", "h"],
          419: ["h", "H", "hB", "hb"],
          AC: ["H", "h", "hb", "hB"],
          AD: ["H", "hB"],
          AE: ["h", "hB", "hb", "H"],
          AF: ["H", "hb", "hB", "h"],
          AG: ["h", "hb", "H", "hB"],
          AI: ["H", "h", "hb", "hB"],
          AL: ["h", "H", "hB"],
          AM: ["H", "hB"],
          AO: ["H", "hB"],
          AR: ["h", "H", "hB", "hb"],
          AS: ["h", "H"],
          AT: ["H", "hB"],
          AU: ["h", "hb", "H", "hB"],
          AW: ["H", "hB"],
          AX: ["H"],
          AZ: ["H", "hB", "h"],
          BA: ["H", "hB", "h"],
          BB: ["h", "hb", "H", "hB"],
          BD: ["h", "hB", "H"],
          BE: ["H", "hB"],
          BF: ["H", "hB"],
          BG: ["H", "hB", "h"],
          BH: ["h", "hB", "hb", "H"],
          BI: ["H", "h"],
          BJ: ["H", "hB"],
          BL: ["H", "hB"],
          BM: ["h", "hb", "H", "hB"],
          BN: ["hb", "hB", "h", "H"],
          BO: ["h", "H", "hB", "hb"],
          BQ: ["H"],
          BR: ["H", "hB"],
          BS: ["h", "hb", "H", "hB"],
          BT: ["h", "H"],
          BW: ["H", "h", "hb", "hB"],
          BY: ["H", "h"],
          BZ: ["H", "h", "hb", "hB"],
          CA: ["h", "hb", "H", "hB"],
          CC: ["H", "h", "hb", "hB"],
          CD: ["hB", "H"],
          CF: ["H", "h", "hB"],
          CG: ["H", "hB"],
          CH: ["H", "hB", "h"],
          CI: ["H", "hB"],
          CK: ["H", "h", "hb", "hB"],
          CL: ["h", "H", "hB", "hb"],
          CM: ["H", "h", "hB"],
          CN: ["H", "hB", "hb", "h"],
          CO: ["h", "H", "hB", "hb"],
          CP: ["H"],
          CR: ["h", "H", "hB", "hb"],
          CU: ["h", "H", "hB", "hb"],
          CV: ["H", "hB"],
          CW: ["H", "hB"],
          CX: ["H", "h", "hb", "hB"],
          CY: ["h", "H", "hb", "hB"],
          CZ: ["H"],
          DE: ["H", "hB"],
          DG: ["H", "h", "hb", "hB"],
          DJ: ["h", "H"],
          DK: ["H"],
          DM: ["h", "hb", "H", "hB"],
          DO: ["h", "H", "hB", "hb"],
          DZ: ["h", "hB", "hb", "H"],
          EA: ["H", "h", "hB", "hb"],
          EC: ["h", "H", "hB", "hb"],
          EE: ["H", "hB"],
          EG: ["h", "hB", "hb", "H"],
          EH: ["h", "hB", "hb", "H"],
          ER: ["h", "H"],
          ES: ["H", "hB", "h", "hb"],
          ET: ["hB", "hb", "h", "H"],
          FI: ["H"],
          FJ: ["h", "hb", "H", "hB"],
          FK: ["H", "h", "hb", "hB"],
          FM: ["h", "hb", "H", "hB"],
          FO: ["H", "h"],
          FR: ["H", "hB"],
          GA: ["H", "hB"],
          GB: ["H", "h", "hb", "hB"],
          GD: ["h", "hb", "H", "hB"],
          GE: ["H", "hB", "h"],
          GF: ["H", "hB"],
          GG: ["H", "h", "hb", "hB"],
          GH: ["h", "H"],
          GI: ["H", "h", "hb", "hB"],
          GL: ["H", "h"],
          GM: ["h", "hb", "H", "hB"],
          GN: ["H", "hB"],
          GP: ["H", "hB"],
          GQ: ["H", "hB", "h", "hb"],
          GR: ["h", "H", "hb", "hB"],
          GT: ["h", "H", "hB", "hb"],
          GU: ["h", "hb", "H", "hB"],
          GW: ["H", "hB"],
          GY: ["h", "hb", "H", "hB"],
          HK: ["h", "hB", "hb", "H"],
          HN: ["h", "H", "hB", "hb"],
          HR: ["H", "hB"],
          HU: ["H", "h"],
          IC: ["H", "h", "hB", "hb"],
          ID: ["H"],
          IE: ["H", "h", "hb", "hB"],
          IL: ["H", "hB"],
          IM: ["H", "h", "hb", "hB"],
          IN: ["h", "H"],
          IO: ["H", "h", "hb", "hB"],
          IQ: ["h", "hB", "hb", "H"],
          IR: ["hB", "H"],
          IS: ["H"],
          IT: ["H", "hB"],
          JE: ["H", "h", "hb", "hB"],
          JM: ["h", "hb", "H", "hB"],
          JO: ["h", "hB", "hb", "H"],
          JP: ["H", "K", "h"],
          KE: ["hB", "hb", "H", "h"],
          KG: ["H", "h", "hB", "hb"],
          KH: ["hB", "h", "H", "hb"],
          KI: ["h", "hb", "H", "hB"],
          KM: ["H", "h", "hB", "hb"],
          KN: ["h", "hb", "H", "hB"],
          KP: ["h", "H", "hB", "hb"],
          KR: ["h", "H", "hB", "hb"],
          KW: ["h", "hB", "hb", "H"],
          KY: ["h", "hb", "H", "hB"],
          KZ: ["H", "hB"],
          LA: ["H", "hb", "hB", "h"],
          LB: ["h", "hB", "hb", "H"],
          LC: ["h", "hb", "H", "hB"],
          LI: ["H", "hB", "h"],
          LK: ["H", "h", "hB", "hb"],
          LR: ["h", "hb", "H", "hB"],
          LS: ["h", "H"],
          LT: ["H", "h", "hb", "hB"],
          LU: ["H", "h", "hB"],
          LV: ["H", "hB", "hb", "h"],
          LY: ["h", "hB", "hb", "H"],
          MA: ["H", "h", "hB", "hb"],
          MC: ["H", "hB"],
          MD: ["H", "hB"],
          ME: ["H", "hB", "h"],
          MF: ["H", "hB"],
          MG: ["H", "h"],
          MH: ["h", "hb", "H", "hB"],
          MK: ["H", "h", "hb", "hB"],
          ML: ["H"],
          MM: ["hB", "hb", "H", "h"],
          MN: ["H", "h", "hb", "hB"],
          MO: ["h", "hB", "hb", "H"],
          MP: ["h", "hb", "H", "hB"],
          MQ: ["H", "hB"],
          MR: ["h", "hB", "hb", "H"],
          MS: ["H", "h", "hb", "hB"],
          MT: ["H", "h"],
          MU: ["H", "h"],
          MV: ["H", "h"],
          MW: ["h", "hb", "H", "hB"],
          MX: ["h", "H", "hB", "hb"],
          MY: ["hb", "hB", "h", "H"],
          MZ: ["H", "hB"],
          NA: ["h", "H", "hB", "hb"],
          NC: ["H", "hB"],
          NE: ["H"],
          NF: ["H", "h", "hb", "hB"],
          NG: ["H", "h", "hb", "hB"],
          NI: ["h", "H", "hB", "hb"],
          NL: ["H", "hB"],
          NO: ["H", "h"],
          NP: ["H", "h", "hB"],
          NR: ["H", "h", "hb", "hB"],
          NU: ["H", "h", "hb", "hB"],
          NZ: ["h", "hb", "H", "hB"],
          OM: ["h", "hB", "hb", "H"],
          PA: ["h", "H", "hB", "hb"],
          PE: ["h", "H", "hB", "hb"],
          PF: ["H", "h", "hB"],
          PG: ["h", "H"],
          PH: ["h", "hB", "hb", "H"],
          PK: ["h", "hB", "H"],
          PL: ["H", "h"],
          PM: ["H", "hB"],
          PN: ["H", "h", "hb", "hB"],
          PR: ["h", "H", "hB", "hb"],
          PS: ["h", "hB", "hb", "H"],
          PT: ["H", "hB"],
          PW: ["h", "H"],
          PY: ["h", "H", "hB", "hb"],
          QA: ["h", "hB", "hb", "H"],
          RE: ["H", "hB"],
          RO: ["H", "hB"],
          RS: ["H", "hB", "h"],
          RU: ["H"],
          RW: ["H", "h"],
          SA: ["h", "hB", "hb", "H"],
          SB: ["h", "hb", "H", "hB"],
          SC: ["H", "h", "hB"],
          SD: ["h", "hB", "hb", "H"],
          SE: ["H"],
          SG: ["h", "hb", "H", "hB"],
          SH: ["H", "h", "hb", "hB"],
          SI: ["H", "hB"],
          SJ: ["H"],
          SK: ["H"],
          SL: ["h", "hb", "H", "hB"],
          SM: ["H", "h", "hB"],
          SN: ["H", "h", "hB"],
          SO: ["h", "H"],
          SR: ["H", "hB"],
          SS: ["h", "hb", "H", "hB"],
          ST: ["H", "hB"],
          SV: ["h", "H", "hB", "hb"],
          SX: ["H", "h", "hb", "hB"],
          SY: ["h", "hB", "hb", "H"],
          SZ: ["h", "hb", "H", "hB"],
          TA: ["H", "h", "hb", "hB"],
          TC: ["h", "hb", "H", "hB"],
          TD: ["h", "H", "hB"],
          TF: ["H", "h", "hB"],
          TG: ["H", "hB"],
          TH: ["H", "h"],
          TJ: ["H", "h"],
          TL: ["H", "hB", "hb", "h"],
          TM: ["H", "h"],
          TN: ["h", "hB", "hb", "H"],
          TO: ["h", "H"],
          TR: ["H", "hB"],
          TT: ["h", "hb", "H", "hB"],
          TW: ["hB", "hb", "h", "H"],
          TZ: ["hB", "hb", "H", "h"],
          UA: ["H", "hB", "h"],
          UG: ["hB", "hb", "H", "h"],
          UM: ["h", "hb", "H", "hB"],
          US: ["h", "hb", "H", "hB"],
          UY: ["h", "H", "hB", "hb"],
          UZ: ["H", "hB", "h"],
          VA: ["H", "h", "hB"],
          VC: ["h", "hb", "H", "hB"],
          VE: ["h", "H", "hB", "hb"],
          VG: ["h", "hb", "H", "hB"],
          VI: ["h", "hb", "H", "hB"],
          VN: ["H", "h"],
          VU: ["h", "H"],
          WF: ["H", "hB"],
          WS: ["h", "H"],
          XK: ["H", "hB", "h"],
          YE: ["h", "hB", "hb", "H"],
          YT: ["H", "hB"],
          ZA: ["H", "h", "hb", "hB"],
          ZM: ["h", "hb", "H", "hB"],
          ZW: ["H", "h"],
          "af-ZA": ["H", "h", "hB", "hb"],
          "ar-001": ["h", "hB", "hb", "H"],
          "ca-ES": ["H", "h", "hB"],
          "en-001": ["h", "hb", "H", "hB"],
          "en-HK": ["h", "hb", "H", "hB"],
          "en-IL": ["H", "h", "hb", "hB"],
          "en-MY": ["h", "hb", "H", "hB"],
          "es-BR": ["H", "h", "hB", "hb"],
          "es-ES": ["H", "h", "hB", "hb"],
          "es-GQ": ["H", "h", "hB", "hb"],
          "fr-CA": ["H", "h", "hB"],
          "gl-ES": ["H", "h", "hB"],
          "gu-IN": ["hB", "hb", "h", "H"],
          "hi-IN": ["hB", "h", "H"],
          "it-CH": ["H", "h", "hB"],
          "it-IT": ["H", "h", "hB"],
          "kn-IN": ["hB", "h", "H"],
          "ml-IN": ["hB", "h", "H"],
          "mr-IN": ["hB", "hb", "h", "H"],
          "pa-IN": ["hB", "hb", "h", "H"],
          "ta-IN": ["hB", "h", "hb", "H"],
          "te-IN": ["hB", "h", "H"],
          "zu-ZA": ["H", "hB", "hb", "h"]
        };

      function qd(e) {
        var t = e.hourCycle;
        if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
          case "h24":
            return "k";
          case "h23":
            return "H";
          case "h12":
            return "h";
          case "h11":
            return "K";
          default:
            throw new Error("Invalid hourCycle")
        }
        var r, n = e.language;
        return "root" !== n && (r = e.maximize().region), (Gd[r || ""] || Gd[n || ""] || Gd["".concat(n, "-001")] || Gd["001"])[0]
      }
      var Xd = new RegExp("^".concat(Ud.source, "*")),
        Wd = new RegExp("".concat(Ud.source, "*$"));

      function Kd(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var $d = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Yd = !!String.fromCodePoint,
        Zd = !!Object.fromEntries,
        Qd = !!String.prototype.codePointAt,
        Jd = !!String.prototype.trimStart,
        eh = !!String.prototype.trimEnd,
        th = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        rh = !0;
      try {
        rh = "a" === (null === (Vd = dh("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Vd ? void 0 : Vd[0])
      } catch (e) {
        rh = !1
      }
      var nh, oh, ih = $d ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        ah = Yd ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        sh = Zd ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        lh = Qd ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        ch = Jd ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Xd, "")
        },
        uh = eh ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Wd, "")
        };

      function dh(e, t) {
        return new RegExp(e, t)
      }
      if (rh) {
        var hh = dh("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        nh = function(e, t) {
          var r;
          return hh.lastIndex = t, null !== (r = hh.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else nh = function(e, t) {
        for (var r = [];;) {
          var n = lh(e, t);
          if (void 0 === n || ph(n) || mh(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return ah.apply(void 0, r)
      };

      function fh(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function ph(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function mh(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function gh(e) {
        return e ? Object.keys(e).reduce((function(t, r) {
          var n, o = e[r];
          return t[r] = "function" == typeof o ? (n = o, function(e) {
            return n(h.Children.toArray(e))
          }) : o, t
        }), {}) : e
      }! function() {
        function e(e, t) {
          void 0 === t && (t = {}), this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        e.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, e.prototype.parseMessage = function(e, t, r) {
          for (var n = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((i = this.parseArgument(e, r)).err) return i;
              n.push(i.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(Dd.UNMATCHED_CLOSING_TAG, Kd(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && fh(this.peek() || 0)) {
                  if ((i = this.parseTag(e, t)).err) return i;
                  n.push(i.val)
                } else {
                  var i;
                  if ((i = this.parseLiteral(e, t)).err) return i;
                  n.push(i.val)
                }
              } else {
                var a = this.clonePosition();
                this.bump(), n.push({
                  type: Md.pound,
                  location: Kd(a, this.clonePosition())
                })
              }
            }
          }
          return {
            val: n,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var r = this.clonePosition();
          this.bump();
          var n = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: Md.literal,
              value: "<".concat(n, "/>"),
              location: Kd(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !fh(this.char())) return this.error(Dd.INVALID_TAG, Kd(a, this.clonePosition()));
              var s = this.clonePosition();
              return n !== this.parseTagName() ? this.error(Dd.UNMATCHED_CLOSING_TAG, Kd(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Md.tag,
                  value: n,
                  children: i,
                  location: Kd(r, this.clonePosition())
                },
                err: null
              } : this.error(Dd.INVALID_TAG, Kd(a, this.clonePosition())))
            }
            return this.error(Dd.UNCLOSED_TAG, Kd(r, this.clonePosition()))
          }
          return this.error(Dd.INVALID_TAG, Kd(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, t = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(t, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var i = this.tryParseUnquoted(e, t);
              if (i) n += i;
              else {
                var a = this.tryParseLeftAngleBracket();
                if (!a) break;
                n += a
              }
            }
          }
          var s = Kd(r, this.clonePosition());
          return {
            val: {
              type: Md.literal,
              value: n,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (fh(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
          var e
        }, e.prototype.tryParseQuote = function(e) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === e || "selectordinal" === e) break;
              return null;
            default:
              return null
          }
          this.bump();
          var t = [this.char()];
          for (this.bump(); !this.isEOF();) {
            var r = this.char();
            if (39 === r) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(r);
            this.bump()
          }
          return ah.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), ah(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Dd.EXPECT_ARGUMENT_CLOSING_BRACE, Kd(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Dd.EMPTY_ARGUMENT, Kd(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(Dd.MALFORMED_ARGUMENT, Kd(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Dd.EXPECT_ARGUMENT_CLOSING_BRACE, Kd(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Md.argument,
                  value: n,
                  location: Kd(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Dd.EXPECT_ARGUMENT_CLOSING_BRACE, Kd(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(Dd.MALFORMED_ARGUMENT, Kd(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = nh(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: Kd(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Dd.EXPECT_ARGUMENT_TYPE, Kd(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (f = uh(v.val)).length) return this.error(Dd.EXPECT_ARGUMENT_STYLE, Kd(this.clonePosition(), this.clonePosition()));
                l = {
                  style: f,
                  styleLocation: Kd(c, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(n)).err) return y;
              var u = Kd(n, this.clonePosition());
              if (l && ih(null == l ? void 0 : l.style, "::", 0)) {
                var d = ch(l.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? v : {
                  val: {
                    type: Md.number,
                    value: r,
                    location: u,
                    style: v.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Dd.EXPECT_DATE_TIME_SKELETON, u);
                var h = d;
                this.locale && (h = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = qd(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; a-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var f = {
                  type: Bd.dateTime,
                  pattern: h,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Uc(h) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Md.date : Md.time,
                    value: r,
                    location: u,
                    style: f
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Md.number : "date" === a ? Md.date : Md.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Dd.EXPECT_SELECT_ARGUMENT_OPTIONS, Kd(p, (0, mc.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                g = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Dd.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Kd(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(Dd.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Dd.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), g = v.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(n)).err) return y;
              var _ = Kd(n, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Md.select,
                  value: r,
                  options: sh(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Md.plural,
                  value: r,
                  options: sh(b.val),
                  offset: g,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Dd.INVALID_ARGUMENT_TYPE, Kd(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Dd.EXPECT_ARGUMENT_CLOSING_BRACE, Kd(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Dd.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Kd(r, this.clonePosition()));
              this.bump();
              break;
            case 123:
              e += 1, this.bump();
              break;
            case 125:
              if (!(e > 0)) return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
              };
              e -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(t.offset, this.offset()),
            err: null
          }
        }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
          var r = [];
          try {
            r = qc(e)
          } catch (e) {
            return this.error(Dd.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Bd.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? eu(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, a = [], s = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Dd.EXPECT_PLURAL_ARGUMENT_SELECTOR, Dd.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = Kd(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Dd.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Dd.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var h = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Dd.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Dd.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Kd(this.clonePosition(), this.clonePosition()));
            var f = this.parseMessage(e + 1, t, r);
            if (f.err) return f;
            var p = this.tryParseArgumentClose(h);
            if (p.err) return p;
            a.push([l, {
              value: f.val,
              location: Kd(h, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Dd.EXPECT_SELECT_ARGUMENT_SELECTOR : Dd.EXPECT_PLURAL_ARGUMENT_SELECTOR, Kd(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Dd.MISSING_OTHER_CLAUSE, Kd(this.clonePosition(), this.clonePosition())) : {
            val: a,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var a = this.char();
            if (!(a >= 48 && a <= 57)) break;
            o = !0, i = 10 * i + (a - 48), this.bump()
          }
          var s = Kd(n, this.clonePosition());
          return o ? th(i *= r) ? {
            val: i,
            err: null
          } : this.error(t, s) : this.error(e, s)
        }, e.prototype.offset = function() {
          return this.position.offset
        }, e.prototype.isEOF = function() {
          return this.offset() === this.message.length
        }, e.prototype.clonePosition = function() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }, e.prototype.char = function() {
          var e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          var t = lh(this.message, e);
          if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
          return t
        }, e.prototype.error = function(e, t) {
          return {
            val: null,
            err: {
              kind: e,
              message: this.message,
              location: t
            }
          }
        }, e.prototype.bump = function() {
          if (!this.isEOF()) {
            var e = this.char();
            10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
          }
        }, e.prototype.bumpIf = function(e) {
          if (ih(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            r = this.message.indexOf(e, t);
          return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && ph(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }
      }(),
      function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(oh || (oh = {}));
      var vh = function(e, t, r, n) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var a = gh(n),
            s = gd.apply(void 0, (0, mc.__spreadArray)([e, t, r, a], o, !1));
          return Array.isArray(s) ? h.Children.toArray(s) : s
        },
        yh = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, mc.__rest)(e, ["defaultRichTextElements"]),
            o = gh(r),
            i = Fd((0, mc.__assign)((0, mc.__assign)((0, mc.__assign)({}, cd), n), {
              defaultRichTextElements: o
            }), t),
            a = {
              locale: i.locale,
              timeZone: i.timeZone,
              fallbackOnEmptyString: i.fallbackOnEmptyString,
              formats: i.formats,
              defaultLocale: i.defaultLocale,
              defaultFormats: i.defaultFormats,
              messages: i.messages,
              onError: i.onError,
              defaultRichTextElements: o
            };
          return (0, mc.__assign)((0, mc.__assign)({}, i), {
            formatMessage: vh.bind(null, a, i.formatters),
            $t: vh.bind(null, a, i.formatters)
          })
        };

      function bh(e) {
        return {
          locale: e.locale,
          timeZone: e.timeZone,
          fallbackOnEmptyString: e.fallbackOnEmptyString,
          formats: e.formats,
          textComponent: e.textComponent,
          messages: e.messages,
          defaultLocale: e.defaultLocale,
          defaultFormats: e.defaultFormats,
          onError: e.onError,
          onWarn: e.onWarn,
          wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
          defaultRichTextElements: e.defaultRichTextElements
        }
      }
      var _h = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.cache = {
            dateTime: {},
            number: {},
            message: {},
            relativeTime: {},
            pluralRules: {},
            list: {},
            displayNames: {}
          }, t.state = {
            cache: t.cache,
            intl: yh(bh(t.props), t.cache),
            prevConfig: bh(t.props)
          }, t
        }
        return (0, mc.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            o = bh(e);
          return function(e, t) {
            if (e === t) return !0;
            if (!e || !t) return !1;
            var r = Object.keys(e),
              n = Object.keys(t),
              o = r.length;
            if (n.length !== o) return !1;
            for (var i = 0; i < o; i++) {
              var a = r[i];
              if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1
            }
            return !0
          }(r, o) ? null : {
            intl: yh(o, n),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return ld(this.state.intl), h.createElement(dd, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = cd, t
      }(h.PureComponent);
      const wh = _h;

      function xh() {
        var e = h.useContext(hd);
        return ld(e), e
      }
      var Eh, Sh;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(Eh || (Eh = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(Sh || (Sh = {}));
      var Ch = function(e) {
        var t = xh(),
          r = e.value,
          n = e.children,
          o = (0, mc.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function Ph(e) {
        var t = function(t) {
          var r = xh(),
            n = t.value,
            o = t.children,
            i = (0, mc.__rest)(t, ["value", "children"]),
            a = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(a, i) : r.formatTimeToParts(a, i))
        };
        return t.displayName = Sh[e], t
      }

      function Oh(e) {
        var t = function(t) {
          var r = xh(),
            n = t.value,
            o = t.children,
            i = (0, mc.__rest)(t, ["value", "children"]),
            a = r[e](n, i);
          if ("function" == typeof o) return o(a);
          var s = r.textComponent || h.Fragment;
          return h.createElement(s, null, a)
        };
        return t.displayName = Eh[e], t
      }
      Ch.displayName = "FormattedNumberParts", Ch.displayName = "FormattedNumberParts", Oh("formatDate"), Oh("formatTime"), Oh("formatNumber"), Oh("formatList"), Oh("formatDisplayName"), Ph("formatDate"), Ph("formatTime");
      const Th = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, i] = (0, h.useState)(null);
          return (0, h.useEffect)((() => {
            (t?.[r] ?? t["en-US"]).then((e => {
              i(e.default)
            }))
          }), [r]), o ? (0, u.jsx)(wh, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        kh = {
          id: "Lightbox_Open_Button_Label"
        },
        jh = {
          id: "Lightbox_Dialog_Title"
        },
        Ah = {
          id: "Lightbox_Dialog_Description"
        },
        Lh = {
          "en-US": r.e(3672).then(r.bind(r, 98910)),
          "de-DE": r.e(823).then(r.bind(r, 823)),
          "es-ES": r.e(7893).then(r.bind(r, 27893)),
          "es-MX": r.e(4684).then(r.bind(r, 54684)),
          "fr-FR": r.e(8557).then(r.bind(r, 38557)),
          "it-IT": r.e(9583).then(r.bind(r, 39583)),
          "ja-JP": r.e(1280).then(r.bind(r, 21280)),
          "ko-KR": r.e(5734).then(r.bind(r, 45734)),
          "pl-PL": r.e(4153).then(r.bind(r, 84153)),
          "pt-BR": r.e(1381).then(r.bind(r, 11381)),
          "ru-RU": r.e(7727).then(r.bind(r, 57727)),
          "zh-CN": r.e(3586).then(r.bind(r, 13586)),
          "zh-TW": r.e(2578).then(r.bind(r, 12578))
        },
        Nh = (e, t) => {
          const r = "more" === t ? Kn.lightHc : Kn.light,
            n = "more" === t ? Kn.darkHc : Kn.dark;
          return "dark" === e ? n : r
        };

      function Rh(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var Ih = r(65998),
        Dh = r(86410),
        Mh = r(29818),
        Bh = r(52806),
        Hh = r(19264);

      function zh(e) {
        const t = h.useRef({
          value: e,
          previous: e
        });
        return h.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }
      var Fh = r(85307);

      function Vh(e) {
        const [t, r] = h.useState(void 0);
        return (0, Fh.N)((() => {
          if (e) {
            r({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const t = new ResizeObserver((t => {
              if (!Array.isArray(t)) return;
              if (!t.length) return;
              const n = t[0];
              let o, i;
              if ("borderBoxSize" in n) {
                const e = n.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                o = t.inlineSize, i = t.blockSize
              } else o = e.offsetWidth, i = e.offsetHeight;
              r({
                width: o,
                height: i
              })
            }));
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          r(void 0)
        }), [e]), t
      }
      var Uh = r(85100),
        Gh = r(80355),
        qh = ["PageUp", "PageDown"],
        Xh = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Wh = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Kh = "Slider",
        [$h, Yh, Zh] = (0, Gh.N)(Kh),
        [Qh, Jh] = (0, Mh.A)(Kh, [Zh]),
        [ef, tf] = Qh(Kh),
        rf = h.forwardRef(((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: i = 1,
            orientation: a = "horizontal",
            disabled: s = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: c = [n],
            value: d,
            onValueChange: f = () => {},
            onValueCommit: p = () => {},
            inverted: m = !1,
            form: g,
            ...v
          } = e, y = h.useRef(new Set), b = h.useRef(0), _ = "horizontal" === a ? af : sf, [w = [], x] = (0, Bh.i)({
            prop: d,
            defaultProp: c,
            onChange: e => {
              const t = [...y.current];
              t[b.current]?.focus(), f(e)
            }
          }), E = h.useRef(w);

          function S(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const a = function(e) {
                return (String(e).split(".")[1] || "").length
              }(i),
              s = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / i) * i + n, a),
              c = Rh(s, [n, o]);
            x(((e = []) => {
              const n = function(e = [], t, r) {
                const n = [...e];
                return n[r] = t, n.sort(((e, t) => e - t))
              }(e, c, t);
              if (function(e, t) {
                  if (t > 0) {
                    const r = function(e) {
                      return e.slice(0, -1).map(((t, r) => e[r + 1] - t))
                    }(e);
                    return Math.min(...r) >= t
                  }
                  return !0
                }(n, l * i)) {
                b.current = n.indexOf(c);
                const t = String(n) !== String(e);
                return t && r && p(n), t ? n : e
              }
              return e
            }))
          }
          return (0, u.jsx)(ef, {
            scope: e.__scopeSlider,
            name: r,
            disabled: s,
            min: n,
            max: o,
            valueIndexToChangeRef: b,
            thumbs: y.current,
            values: w,
            orientation: a,
            form: g,
            children: (0, u.jsx)($h.Provider, {
              scope: e.__scopeSlider,
              children: (0, u.jsx)($h.Slot, {
                scope: e.__scopeSlider,
                children: (0, u.jsx)(_, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...v,
                  ref: t,
                  onPointerDown: (0, Ih.m)(v.onPointerDown, (() => {
                    s || (E.current = w)
                  })),
                  min: n,
                  max: o,
                  inverted: m,
                  onSlideStart: s ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const r = e.map((e => Math.abs(e - t))),
                        n = Math.min(...r);
                      return r.indexOf(n)
                    }(w, e);
                    S(e, t)
                  },
                  onSlideMove: s ? void 0 : function(e) {
                    S(e, b.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const e = E.current[b.current];
                    w[b.current] !== e && p(w)
                  },
                  onHomeKeyDown: () => !s && S(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !s && S(o, w.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!s) {
                      const r = qh.includes(e.key) || e.shiftKey && Xh.includes(e.key) ? 10 : 1,
                        n = b.current;
                      S(w[n] + i * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      rf.displayName = Kh;
      var [nf, of] = Qh(Kh, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), af = h.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: i,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: l,
          onStepKeyDown: c,
          ...d
        } = e, [f, p] = h.useState(null), m = (0, Dh.s)(t, (e => p(e))), g = h.useRef(void 0), v = (0, Hh.jH)(o), y = "ltr" === v, b = y && !i || !y && i;

        function _(e) {
          const t = g.current || f.getBoundingClientRect(),
            o = yf([0, t.width], b ? [r, n] : [n, r]);
          return g.current = t, o(e - t.left)
        }
        return (0, u.jsx)(nf, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, u.jsx)(lf, {
            dir: v,
            "data-orientation": "horizontal",
            ...d,
            ref: m,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const t = _(e.clientX);
              a?.(t)
            },
            onSlideMove: e => {
              const t = _(e.clientX);
              s?.(t)
            },
            onSlideEnd: () => {
              g.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = Wh[b ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), sf = h.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: i,
          onSlideMove: a,
          onSlideEnd: s,
          onStepKeyDown: l,
          ...c
        } = e, d = h.useRef(null), f = (0, Dh.s)(t, d), p = h.useRef(void 0), m = !o;

        function g(e) {
          const t = p.current || d.current.getBoundingClientRect(),
            o = yf([0, t.height], m ? [n, r] : [r, n]);
          return p.current = t, o(e - t.top)
        }
        return (0, u.jsx)(nf, {
          scope: e.__scopeSlider,
          startEdge: m ? "bottom" : "top",
          endEdge: m ? "top" : "bottom",
          size: "height",
          direction: m ? 1 : -1,
          children: (0, u.jsx)(lf, {
            "data-orientation": "vertical",
            ...c,
            ref: f,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = g(e.clientY);
              i?.(t)
            },
            onSlideMove: e => {
              const t = g(e.clientY);
              a?.(t)
            },
            onSlideEnd: () => {
              p.current = void 0, s?.()
            },
            onStepKeyDown: e => {
              const t = Wh[m ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), lf = h.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: a,
          onEndKeyDown: s,
          onStepKeyDown: l,
          ...c
        } = e, d = tf(Kh, r);
        return (0, u.jsx)(Uh.sG.span, {
          ...c,
          ref: t,
          onKeyDown: (0, Ih.m)(e.onKeyDown, (e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : qh.concat(Xh).includes(e.key) && (l(e), e.preventDefault())
          })),
          onPointerDown: (0, Ih.m)(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : n(e)
          })),
          onPointerMove: (0, Ih.m)(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: (0, Ih.m)(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          }))
        })
      })), cf = "SliderTrack", uf = h.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = tf(cf, r);
        return (0, u.jsx)(Uh.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      }));
      uf.displayName = cf;
      var df = "SliderRange",
        hf = h.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = tf(df, r), i = of(df, r), a = h.useRef(null), s = (0, Dh.s)(t, a), l = o.values.length, c = o.values.map((e => vf(e, o.min, o.max))), d = l > 1 ? Math.min(...c) : 0, f = 100 - Math.max(...c);
          return (0, u.jsx)(Uh.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: s,
            style: {
              ...e.style,
              [i.startEdge]: d + "%",
              [i.endEdge]: f + "%"
            }
          })
        }));
      hf.displayName = df;
      var ff = "SliderThumb",
        pf = h.forwardRef(((e, t) => {
          const r = Yh(e.__scopeSlider),
            [n, o] = h.useState(null),
            i = (0, Dh.s)(t, (e => o(e))),
            a = h.useMemo((() => n ? r().findIndex((e => e.ref.current === n)) : -1), [r, n]);
          return (0, u.jsx)(mf, {
            ...e,
            ref: i,
            index: a
          })
        })),
        mf = h.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...i
          } = e, a = tf(ff, r), s = of(ff, r), [l, c] = h.useState(null), d = (0, Dh.s)(t, (e => c(e))), f = !l || a.form || !!l.closest("form"), p = Vh(l), m = a.values[n], g = void 0 === m ? 0 : vf(m, a.min, a.max), v = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, a.values.length), y = p?.[s.size], b = y ? function(e, t, r) {
            const n = e / 2;
            return (n - yf([0, 50], [0, n])(t) * r) * r
          }(y, g, s.direction) : 0;
          return h.useEffect((() => {
            if (l) return a.thumbs.add(l), () => {
              a.thumbs.delete(l)
            }
          }), [l, a.thumbs]), (0, u.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${g}% + ${b}px)`
            },
            children: [(0, u.jsx)($h.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, u.jsx)(Uh.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || v,
                "aria-valuemin": a.min,
                "aria-valuenow": m,
                "aria-valuemax": a.max,
                "aria-orientation": a.orientation,
                "data-orientation": a.orientation,
                "data-disabled": a.disabled ? "" : void 0,
                tabIndex: a.disabled ? void 0 : 0,
                ...i,
                ref: d,
                style: void 0 === m ? {
                  display: "none"
                } : e.style,
                onFocus: (0, Ih.m)(e.onFocus, (() => {
                  a.valueIndexToChangeRef.current = n
                }))
              })
            }), f && (0, u.jsx)(gf, {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: m
            }, n)]
          })
        }));
      pf.displayName = ff;
      var gf = h.forwardRef((({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = h.useRef(null),
          i = (0, Dh.s)(o, n),
          a = zh(t);
        return h.useEffect((() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLInputElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (a !== t && n) {
            const r = new Event("input", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }), [a, t]), (0, u.jsx)(Uh.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: i,
          defaultValue: t
        })
      }));

      function vf(e, t, r) {
        return Rh(100 / (r - t) * (e - t), [0, 100])
      }

      function yf(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      gf.displayName = "RadioBubbleInput";
      var bf = rf,
        _f = uf,
        wf = hf,
        xf = pf;
      const Ef = {
          id: "Lightbox_Close_Button_Label"
        },
        Sf = {
          id: "Lightbox_Close_Button_Tooltip"
        },
        Cf = {
          id: "Lightbox_Zoom_In_Button_Label"
        },
        Pf = {
          id: "Lightbox_Zoom_In_Button_Tooltip"
        },
        Of = {
          id: "Lightbox_Zoom_Out_Button_Label"
        },
        Tf = {
          id: "Lightbox_Zoom_Out_Button__Tooltip"
        },
        kf = {
          id: "Lightbox_Reset_Zoom_Button_Label"
        },
        jf = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip"
        },
        Af = {
          id: "Lightbox_Zoom_Slider_Label"
        },
        Lf = {
          id: "Lightbox_Zoom_Slider_Tooltip"
        },
        Nf = {
          id: "Lightbox_Download_Button_Label"
        },
        Rf = {
          id: "Lightbox_Download_Button_Tooltip"
        };

      function If() {
        return If = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, If.apply(null, arguments)
      }
      var Df = ["shift", "alt", "meta", "mod", "ctrl"],
        Mf = {
          esc: "escape",
          return: "enter",
          ".": "period",
          ",": "comma",
          "-": "slash",
          " ": "space",
          "`": "backquote",
          "#": "backslash",
          "+": "bracketright",
          ShiftLeft: "shift",
          ShiftRight: "shift",
          AltLeft: "alt",
          AltRight: "alt",
          MetaLeft: "meta",
          MetaRight: "meta",
          OSLeft: "meta",
          OSRight: "meta",
          ControlLeft: "ctrl",
          ControlRight: "ctrl"
        };

      function Bf(e) {
        return (e && Mf[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Hf(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function zf(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map((function(e) {
          return Bf(e)
        }));
        return If({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter((function(e) {
            return !Df.includes(e)
          })),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && Uf([Bf(e.key), Bf(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && Gf([Bf(e.key), Bf(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        Ff.clear()
      }));
      var Ff = new Set;

      function Vf(e) {
        return Array.isArray(e)
      }

      function Uf(e) {
        var t = Array.isArray(e) ? e : [e];
        Ff.has("meta") && Ff.forEach((function(e) {
          return ! function(e) {
            return Df.includes(e)
          }(e) && Ff.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return Ff.add(e.toLowerCase())
        }))
      }

      function Gf(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Ff.clear() : t.forEach((function(e) {
          return Ff.delete(e.toLowerCase())
        }))
      }

      function qf(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          i = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Vf(t) ? Boolean(n && t && t.some((function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        }))) : Boolean(n && t && t)
      }
      var Xf = (0, h.createContext)(void 0);

      function Wf(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, u.jsx)(Xf.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Kf(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(r, n) {
          return r && Kf(e[n], t[n])
        }), !0) : e === t
      }
      var $f = (0, h.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Yf = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, h.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            i = o[0],
            a = o[1],
            s = (0, h.useState)([]),
            l = s[0],
            c = s[1],
            d = (0, h.useCallback)((function(e) {
              a((function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            f = (0, h.useCallback)((function(e) {
              a((function(t) {
                return 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                }))
              }))
            }), []),
            p = (0, h.useCallback)((function(e) {
              a((function(t) {
                return t.includes(e) ? 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                })) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            m = (0, h.useCallback)((function(e) {
              c((function(t) {
                return [].concat(t, [e])
              }))
            }), []),
            g = (0, h.useCallback)((function(e) {
              c((function(t) {
                return t.filter((function(t) {
                  return !Kf(t, e)
                }))
              }))
            }), []);
          return (0, u.jsx)($f.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: d,
              disableScope: f,
              toggleScope: p
            },
            children: (0, u.jsx)(Wf, {
              addHotkey: m,
              removeHotkey: g,
              children: n
            })
          })
        },
        Zf = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Qf = "undefined" != typeof window ? h.useLayoutEffect : h.useEffect;

      function Jf(e, t, r, n) {
        var o = (0, h.useState)(null),
          i = o[0],
          a = o[1],
          s = (0, h.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          c = Vf(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = r instanceof Array ? r : n instanceof Array ? n : void 0,
          d = (0, h.useCallback)(t, null != u ? u : []),
          f = (0, h.useRef)(d);
        f.current = u ? d : t;
        var p = function(e) {
            var t = (0, h.useRef)(void 0);
            return Kf(t.current, e) || (t.current = e), t.current
          }(l),
          m = (0, h.useContext)($f).enabledScopes,
          g = (0, h.useContext)(Xf);
        return Qf((function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = m, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !qf(e, ["input", "textarea", "select"]) || qf(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== i) {
                    var n = i.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== i && !i.contains(n.activeElement)) return void Zf(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != p && p.enableOnContentEditable) && Hf(c, null == p ? void 0 : p.splitKey).forEach((function(r) {
                    var n, o = zf(r, null == p ? void 0 : p.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, i = t.alt,
                          a = t.meta,
                          s = t.mod,
                          l = t.shift,
                          c = t.ctrl,
                          u = t.keys,
                          d = e.key,
                          h = e.code,
                          f = e.ctrlKey,
                          p = e.metaKey,
                          m = e.shiftKey,
                          g = e.altKey,
                          v = Bf(h),
                          y = d.toLowerCase();
                        if (!(null != u && u.includes(v) || null != u && u.includes(y) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(v))) return !1;
                        if (!r) {
                          if (i === !g && "alt" !== y) return !1;
                          if (l === !m && "shift" !== y) return !1;
                          if (s) {
                            if (!p && !f) return !1
                          } else {
                            if (a === !p && "meta" !== y && "os" !== y) return !1;
                            if (c === !f && "ctrl" !== y && "control" !== y) return !1
                          }
                        }
                        return !(!u || 1 !== u.length || !u.includes(y) && !u.includes(v)) || (u ? (void 0 === o && (o = ","), (Vf(n = u) ? n : n.split(o)).every((function(e) {
                          return Ff.has(e.trim().toLowerCase())
                        }))) : !u)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == p ? void 0 : p.enabled)) return void Zf(e);
                      f.current(e, o), t || (s.current = !0)
                    }
                  }))
                }
              },
              n = function(e) {
                void 0 !== e.key && (Uf(Bf(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (Gf(Bf(e.code)), s.current = !1, null != p && p.keyup && r(e, !0))
              },
              a = i || (null == l ? void 0 : l.document) || document;
            return a.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), g && Hf(c, null == p ? void 0 : p.splitKey).forEach((function(e) {
                return g.addHotkey(zf(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              })),
              function() {
                a.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), g && Hf(c, null == p ? void 0 : p.splitKey).forEach((function(e) {
                  return g.removeHotkey(zf(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                }))
              }
          }
        }), [i, c, p, m]), a
      }

      function ep(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function tp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function rp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? tp(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ep(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tp(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function np(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var op = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ip = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = rp(rp({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) op(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return np(e.variantClassNames, (e => np(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_hcgxh_8kowh41 foundry_hcgxh_1d5mo5m0 foundry_hcgxh_a5x3kh0",
          variantClassNames: {
            appearance: {
              primary: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua1",
              secondary: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua2",
              tertiary: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua3",
              ghost: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua4",
              danger: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua6",
              information: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua5"
            },
            size: {
              XS: "foundry_hcgxh_a5x3kh8",
              SM: "foundry_hcgxh_a5x3kh9",
              MD: "foundry_hcgxh_a5x3kha",
              LG: "foundry_hcgxh_a5x3khb"
            },
            fullWidth: {
              true: "foundry_hcgxh_a5x3khc",
              false: "foundry_hcgxh_a5x3khd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ap = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        sp = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          className: r,
          icon: n,
          label: o,
          appearance: i,
          fullWidth: a = !1,
          size: s = "MD",
          onClick: l,
          children: c,
          ...f
        }, m) => {
          const g = (0, h.useRef)(null),
            v = G(g, m),
            y = Jn(),
            b = "string" == typeof s ? s : s?.[y] ?? s.default ?? "MD",
            {
              events: _,
              others: w
            } = (0, d.bZ)(f, {
              onPress: !1
            }),
            {
              buttonProps: x,
              isPressed: E
            } = cr({
              ...w,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => w.onPress?.(e) ?? l?.(e)
            }, g),
            S = (0, d.v6)({
              ..._,
              role: "button",
              "data-pressed": E,
              "data-testid": e,
              className: ip({
                appearance: i,
                size: b,
                fullWidth: a
              })
            }, {
              ...x,
              className: r
            }),
            C = z[n],
            P = t ? p.DX : "button",
            O = ap[b];
          return (0, u.jsxs)(P, {
            ref: v,
            ...S,
            children: [C && (0, u.jsx)(C, {
              label: o || "",
              size: O
            }), (0, u.jsx)(p.xV, {
              children: c
            })]
          })
        })),
        lp = new Map;

      function cp(e, t) {
        if (e === t) return e;
        const r = lp.get(e);
        if (r) return r.forEach((e => e(t))), t;
        const n = lp.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function up(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }
      var dp;
      r(40323), r(5117), r(74534), r(66573), r(11666), r(96810), r(1571),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(dp || (dp = {})), Symbol.toStringTag;
      var hp = r(23135);

      function fp(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function pp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function mp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pp(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = fp(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pp(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function gp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var vp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        yp = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = mp(mp({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) vp(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gp(e.variantClassNames, (e => gp(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_local_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_local_tdsdcdu foundry_local_tdsdcd0 foundry_local_tdsdcdw",
              MD: "foundry_local_tdsdcdu foundry_local_tdsdcd0 foundry_local_tdsdcdx",
              SM: "foundry_local_tdsdcdu foundry_local_tdsdcd0 foundry_local_tdsdcdy",
              XS: "foundry_local_tdsdcdu foundry_local_tdsdcd0 foundry_local_tdsdcdz"
            },
            appearance: {
              default: "foundry_local_tdsdcdu foundry_local_tdsdcd0 foundry_local_tdsdcd10",
              bold: "foundry_local_tdsdcdu foundry_local_tdsdcd0 foundry_local_tdsdcd11",
              hyperlink: "foundry_local_tdsdcdu foundry_local_tdsdcd0 foundry_local_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const bp = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const a = e ? hp.DX : "p",
          s = function(...e) {
            const t = {
              ...e[0]
            };
            for (let r = 1; r < e.length; r++) {
              const n = e[r];
              for (const e in n) {
                const r = t[e],
                  o = n[e];
                "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = up(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = cp(r, o) : t[e] = void 0 !== o ? o : r : t[e] = (0, L.A)(r, o)
              }
            }
            return t
          }({
            className: yp({
              size: n,
              appearance: r
            })
          }, o);
        return (0, u.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      }));
      var _p = "foundry_local_bc732x1";
      const wp = (0, h.forwardRef)((({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (Jf(e, (e => r?.(e)), [r]), (0, u.jsx)(bp, {
        size: "XS",
        className: (0, L.$)("foundry_local_bc732x0", {
          [_p]: t
        }),
        asChild: !0,
        children: (0, u.jsx)("kbd", {
          ref: n,
          children: e
        })
      }))));

      function xp(e) {
        const t = h.useRef(e);
        return h.useEffect((() => {
          t.current = e
        })), h.useMemo((() => (...e) => t.current?.(...e)), [])
      }
      var Ep, Sp = "dismissableLayer.update",
        Cp = h.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Pp = h.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: a,
            onDismiss: s,
            ...l
          } = e, c = h.useContext(Cp), [d, f] = h.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = h.useState({}), g = (0, Dh.s)(t, (e => f(e))), v = Array.from(c.layers), [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(y), _ = d ? v.indexOf(d) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, x = _ >= b, E = function(e, t = globalThis?.document) {
            const r = xp(e),
              n = h.useRef(!1),
              o = h.useRef((() => {}));
            return h.useEffect((() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      Tp("dismissableLayer.pointerDownOutside", r, i, {
                        discrete: !0
                      })
                    };
                    const i = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = n, t.addEventListener("click", o.current, {
                      once: !0
                    })) : n()
                  } else t.removeEventListener("click", o.current);
                  n.current = !1
                },
                i = window.setTimeout((() => {
                  t.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
              }
            }), [t, r]), {
              onPointerDownCapture: () => n.current = !0
            }
          }((e => {
            const t = e.target,
              r = [...c.branches].some((e => e.contains(t)));
            x && !r && (o?.(e), a?.(e), e.defaultPrevented || s?.())
          }), p), S = function(e, t = globalThis?.document) {
            const r = xp(e),
              n = h.useRef(!1);
            return h.useEffect((() => {
              const e = e => {
                e.target && !n.current && Tp("dismissableLayer.focusOutside", r, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }), [t, r]), {
              onFocusCapture: () => n.current = !0,
              onBlurCapture: () => n.current = !1
            }
          }((e => {
            const t = e.target;
            [...c.branches].some((e => e.contains(t))) || (i?.(e), a?.(e), e.defaultPrevented || s?.())
          }), p);
          return function(e, t = globalThis?.document) {
            const r = xp(e);
            h.useEffect((() => {
              const e = e => {
                "Escape" === e.key && r(e)
              };
              return t.addEventListener("keydown", e, {
                capture: !0
              }), () => t.removeEventListener("keydown", e, {
                capture: !0
              })
            }), [r, t])
          }((e => {
            _ === c.layers.size - 1 && (n?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()))
          }), p), h.useEffect((() => {
            if (d) return r && (0 === c.layersWithOutsidePointerEventsDisabled.size && (Ep = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), Op(), () => {
              r && 1 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = Ep)
            }
          }), [d, p, r, c]), h.useEffect((() => () => {
            d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), Op())
          }), [d, c]), h.useEffect((() => {
            const e = () => m({});
            return document.addEventListener(Sp, e), () => document.removeEventListener(Sp, e)
          }), []), (0, u.jsx)(Uh.sG.div, {
            ...l,
            ref: g,
            style: {
              pointerEvents: w ? x ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, Ih.m)(e.onFocusCapture, S.onFocusCapture),
            onBlurCapture: (0, Ih.m)(e.onBlurCapture, S.onBlurCapture),
            onPointerDownCapture: (0, Ih.m)(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        }));

      function Op() {
        const e = new CustomEvent(Sp);
        document.dispatchEvent(e)
      }

      function Tp(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? (0, Uh.hO)(o, i) : o.dispatchEvent(i)
      }
      Pp.displayName = "DismissableLayer", h.forwardRef(((e, t) => {
        const r = h.useContext(Cp),
          n = h.useRef(null),
          o = (0, Dh.s)(t, n);
        return h.useEffect((() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }), [r.branches]), (0, u.jsx)(Uh.sG.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var kp = r(30822),
        jp = r(63735),
        Ap = "undefined" != typeof document ? h.useLayoutEffect : h.useEffect;

      function Lp(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let r, n, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (r = e.length, r !== t.length) return !1;
            for (n = r; 0 != n--;)
              if (!Lp(e[n], t[n])) return !1;
            return !0
          }
          if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
          for (n = r; 0 != n--;)
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 != n--;) {
            const r = o[n];
            if (!("_owner" === r && e.$$typeof || Lp(e[r], t[r]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Np(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Rp(e, t) {
        const r = Np(e);
        return Math.round(t * r) / r
      }

      function Ip(e) {
        const t = h.useRef(e);
        return Ap((() => {
          t.current = e
        })), t
      }
      const Dp = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: r,
              padding: n
            } = "function" == typeof e ? e(t) : e;
            return r && (o = r, {}.hasOwnProperty.call(o, "current")) ? null != r.current ? (0, jp.UE)({
              element: r.current,
              padding: n
            }).fn(t) : {} : r ? (0, jp.UE)({
              element: r,
              padding: n
            }).fn(t) : {};
            var o
          }
        }),
        Mp = (e, t) => ({
          ...(0, jp.cY)(e),
          options: [e, t]
        }),
        Bp = (e, t) => ({
          ...(0, jp.BN)(e),
          options: [e, t]
        }),
        Hp = (e, t) => ({
          ...(0, jp.ER)(e),
          options: [e, t]
        }),
        zp = (e, t) => ({
          ...(0, jp.UU)(e),
          options: [e, t]
        }),
        Fp = (e, t) => ({
          ...(0, jp.Ej)(e),
          options: [e, t]
        }),
        Vp = (e, t) => ({
          ...(0, jp.jD)(e),
          options: [e, t]
        }),
        Up = (e, t) => ({
          ...Dp(e),
          options: [e, t]
        });
      var Gp = h.forwardRef(((e, t) => {
        const {
          children: r,
          width: n = 10,
          height: o = 5,
          ...i
        } = e;
        return (0, u.jsx)(Uh.sG.svg, {
          ...i,
          ref: t,
          width: n,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild ? r : (0, u.jsx)("polygon", {
            points: "0,0 30,0 15,10"
          })
        })
      }));
      Gp.displayName = "Arrow";
      var qp = Gp,
        Xp = "Popper",
        [Wp, Kp] = (0, Mh.A)(Xp),
        [$p, Yp] = Wp(Xp),
        Zp = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = h.useState(null);
          return (0, u.jsx)($p, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      Zp.displayName = Xp;
      var Qp = "PopperAnchor",
        Jp = h.forwardRef(((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, i = Yp(Qp, r), a = h.useRef(null), s = (0, Dh.s)(t, a);
          return h.useEffect((() => {
            i.onAnchorChange(n?.current || a.current)
          })), n ? null : (0, u.jsx)(Uh.sG.div, {
            ...o,
            ref: s
          })
        }));
      Jp.displayName = Qp;
      var em = "PopperContent",
        [tm, rm] = Wp(em),
        nm = h.forwardRef(((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: a = 0,
            arrowPadding: s = 0,
            avoidCollisions: l = !0,
            collisionBoundary: c = [],
            collisionPadding: d = 0,
            sticky: f = "partial",
            hideWhenDetached: p = !1,
            updatePositionStrategy: m = "optimized",
            onPlaced: g,
            ...v
          } = e, y = Yp(em, r), [b, _] = h.useState(null), w = (0, Dh.s)(t, (e => _(e))), [x, E] = h.useState(null), S = Vh(x), C = S?.width ?? 0, P = S?.height ?? 0, O = n + ("center" !== i ? "-" + i : ""), T = "number" == typeof d ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
          }, k = Array.isArray(c) ? c : [c], j = k.length > 0, A = {
            padding: T,
            boundary: k.filter(sm),
            altBoundary: j
          }, {
            refs: L,
            floatingStyles: N,
            placement: R,
            isPositioned: I,
            middlewareData: D
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
              strategy: r = "absolute",
              middleware: n = [],
              platform: o,
              elements: {
                reference: i,
                floating: a
              } = {},
              transform: s = !0,
              whileElementsMounted: l,
              open: c
            } = e, [u, d] = h.useState({
              x: 0,
              y: 0,
              strategy: r,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, p] = h.useState(n);
            Lp(f, n) || p(n);
            const [m, g] = h.useState(null), [v, y] = h.useState(null), b = h.useCallback((e => {
              e !== E.current && (E.current = e, g(e))
            }), []), _ = h.useCallback((e => {
              e !== S.current && (S.current = e, y(e))
            }), []), w = i || m, x = a || v, E = h.useRef(null), S = h.useRef(null), C = h.useRef(u), P = null != l, O = Ip(l), T = Ip(o), k = Ip(c), j = h.useCallback((() => {
              if (!E.current || !S.current) return;
              const e = {
                placement: t,
                strategy: r,
                middleware: f
              };
              T.current && (e.platform = T.current), (0, jp.rD)(E.current, S.current, e).then((e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== k.current
                };
                A.current && !Lp(C.current, t) && (C.current = t, Qt.flushSync((() => {
                  d(t)
                })))
              }))
            }), [f, t, r, T, k]);
            Ap((() => {
              !1 === c && C.current.isPositioned && (C.current.isPositioned = !1, d((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [c]);
            const A = h.useRef(!1);
            Ap((() => (A.current = !0, () => {
              A.current = !1
            })), []), Ap((() => {
              if (w && (E.current = w), x && (S.current = x), w && x) {
                if (O.current) return O.current(w, x, j);
                j()
              }
            }), [w, x, j, O, P]);
            const L = h.useMemo((() => ({
                reference: E,
                floating: S,
                setReference: b,
                setFloating: _
              })), [b, _]),
              N = h.useMemo((() => ({
                reference: w,
                floating: x
              })), [w, x]),
              R = h.useMemo((() => {
                const e = {
                  position: r,
                  left: 0,
                  top: 0
                };
                if (!N.floating) return e;
                const t = Rp(N.floating, u.x),
                  n = Rp(N.floating, u.y);
                return s ? {
                  ...e,
                  transform: "translate(" + t + "px, " + n + "px)",
                  ...Np(N.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: r,
                  left: t,
                  top: n
                }
              }), [r, s, N.floating, u.x, u.y]);
            return h.useMemo((() => ({
              ...u,
              update: j,
              refs: L,
              elements: N,
              floatingStyles: R
            })), [u, j, L, N, R])
          }({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...e) => (0, jp.ll)(...e, {
              animationFrame: "always" === m
            }),
            elements: {
              reference: y.anchor
            },
            middleware: [Mp({
              mainAxis: o + P,
              alignmentAxis: a
            }), l && Bp({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === f ? Hp() : void 0,
              ...A
            }), l && zp({
              ...A
            }), Fp({
              ...A,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: r,
                availableHeight: n
              }) => {
                const {
                  width: o,
                  height: i
                } = t.reference, a = e.floating.style;
                a.setProperty("--radix-popper-available-width", `${r}px`), a.setProperty("--radix-popper-available-height", `${n}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${i}px`)
              }
            }), x && Up({
              element: x,
              padding: s
            }), lm({
              arrowWidth: C,
              arrowHeight: P
            }), p && Vp({
              strategy: "referenceHidden",
              ...A
            })]
          }), [M, B] = cm(R), H = xp(g);
          (0, Fh.N)((() => {
            I && H?.()
          }), [I, H]);
          const z = D.arrow?.x,
            F = D.arrow?.y,
            V = 0 !== D.arrow?.centerOffset,
            [U, G] = h.useState();
          return (0, Fh.N)((() => {
            b && G(window.getComputedStyle(b).zIndex)
          }), [b]), (0, u.jsx)("div", {
            ref: L.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...N,
              transform: I ? N.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: U,
              "--radix-popper-transform-origin": [D.transformOrigin?.x, D.transformOrigin?.y].join(" "),
              ...D.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, u.jsx)(tm, {
              scope: r,
              placedSide: M,
              onArrowChange: E,
              arrowX: z,
              arrowY: F,
              shouldHideArrow: V,
              children: (0, u.jsx)(Uh.sG.div, {
                "data-side": M,
                "data-align": B,
                ...v,
                ref: w,
                style: {
                  ...v.style,
                  animation: I ? void 0 : "none"
                }
              })
            })
          })
        }));
      nm.displayName = em;
      var om = "PopperArrow",
        im = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        am = h.forwardRef((function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = rm(om, r), i = im[o.placedSide];
          return (0, u.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [i]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, u.jsx)(qp, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        }));

      function sm(e) {
        return null !== e
      }
      am.displayName = om;
      var lm = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [l, c] = cm(r), u = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [c], d = (o.arrow?.x ?? 0) + a / 2, h = (o.arrow?.y ?? 0) + s / 2;
          let f = "",
            p = "";
          return "bottom" === l ? (f = i ? u : `${d}px`, p = -s + "px") : "top" === l ? (f = i ? u : `${d}px`, p = `${n.floating.height+s}px`) : "right" === l ? (f = -s + "px", p = i ? u : `${h}px`) : "left" === l && (f = `${n.floating.width+s}px`, p = i ? u : `${h}px`), {
            data: {
              x: f,
              y: p
            }
          }
        }
      });

      function cm(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var um = Zp,
        dm = Jp,
        hm = nm,
        fm = am,
        pm = h.forwardRef(((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, i] = h.useState(!1);
          (0, Fh.N)((() => i(!0)), []);
          const a = r || o && globalThis?.document?.body;
          return a ? Qt.createPortal((0, u.jsx)(Uh.sG.div, {
            ...n,
            ref: t
          }), a) : null
        }));
      pm.displayName = "Portal";
      var mm = r(36146),
        gm = Object.freeze({
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
        vm = h.forwardRef(((e, t) => (0, u.jsx)(Uh.sG.span, {
          ...e,
          ref: t,
          style: {
            ...gm,
            ...e.style
          }
        })));
      vm.displayName = "VisuallyHidden";
      var ym = vm,
        [bm, _m] = (0, Mh.A)("Tooltip", [Kp]),
        wm = Kp(),
        xm = "TooltipProvider",
        Em = 700,
        Sm = "tooltip.open",
        [Cm, Pm] = bm(xm),
        Om = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Em,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, a = h.useRef(!0), s = h.useRef(!1), l = h.useRef(0);
          return h.useEffect((() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }), []), (0, u.jsx)(Cm, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: r,
            onOpen: h.useCallback((() => {
              window.clearTimeout(l.current), a.current = !1
            }), []),
            onClose: h.useCallback((() => {
              window.clearTimeout(l.current), l.current = window.setTimeout((() => a.current = !0), n)
            }), [n]),
            isPointerInTransitRef: s,
            onPointerInTransitChange: h.useCallback((e => {
              s.current = e
            }), []),
            disableHoverableContent: o,
            children: i
          })
        };
      Om.displayName = xm;
      var Tm = "Tooltip",
        [km, jm] = bm(Tm),
        Am = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: a,
            delayDuration: s
          } = e, l = Pm(Tm, e.__scopeTooltip), c = wm(t), [d, f] = h.useState(null), p = (0, kp.B)(), m = h.useRef(0), g = a ?? l.disableHoverableContent, v = s ?? l.delayDuration, y = h.useRef(!1), [b, _] = (0, Bh.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Sm))) : l.onClose(), i?.(e)
            },
            caller: Tm
          }), w = h.useMemo((() => b ? y.current ? "delayed-open" : "instant-open" : "closed"), [b]), x = h.useCallback((() => {
            window.clearTimeout(m.current), m.current = 0, y.current = !1, _(!0)
          }), [_]), E = h.useCallback((() => {
            window.clearTimeout(m.current), m.current = 0, _(!1)
          }), [_]), S = h.useCallback((() => {
            window.clearTimeout(m.current), m.current = window.setTimeout((() => {
              y.current = !0, _(!0), m.current = 0
            }), v)
          }), [v, _]);
          return h.useEffect((() => () => {
            m.current && (window.clearTimeout(m.current), m.current = 0)
          }), []), (0, u.jsx)(um, {
            ...c,
            children: (0, u.jsx)(km, {
              scope: t,
              contentId: p,
              open: b,
              stateAttribute: w,
              trigger: d,
              onTriggerChange: f,
              onTriggerEnter: h.useCallback((() => {
                l.isOpenDelayedRef.current ? S() : x()
              }), [l.isOpenDelayedRef, S, x]),
              onTriggerLeave: h.useCallback((() => {
                g ? E() : (window.clearTimeout(m.current), m.current = 0)
              }), [E, g]),
              onOpen: x,
              onClose: E,
              disableHoverableContent: g,
              children: r
            })
          })
        };
      Am.displayName = Tm;
      var Lm = "TooltipTrigger",
        Nm = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = jm(Lm, r), i = Pm(Lm, r), a = wm(r), s = h.useRef(null), l = (0, Dh.s)(t, s, o.onTriggerChange), c = h.useRef(!1), d = h.useRef(!1), f = h.useCallback((() => c.current = !1), []);
          return h.useEffect((() => () => document.removeEventListener("pointerup", f)), [f]), (0, u.jsx)(dm, {
            asChild: !0,
            ...a,
            children: (0, u.jsx)(Uh.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, Ih.m)(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (d.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), d.current = !0))
              })),
              onPointerLeave: (0, Ih.m)(e.onPointerLeave, (() => {
                o.onTriggerLeave(), d.current = !1
              })),
              onPointerDown: (0, Ih.m)(e.onPointerDown, (() => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", f, {
                  once: !0
                })
              })),
              onFocus: (0, Ih.m)(e.onFocus, (() => {
                c.current || o.onOpen()
              })),
              onBlur: (0, Ih.m)(e.onBlur, o.onClose),
              onClick: (0, Ih.m)(e.onClick, o.onClose)
            })
          })
        }));
      Nm.displayName = Lm;
      var Rm = "TooltipPortal",
        [Im, Dm] = bm(Rm, {
          forceMount: void 0
        }),
        Mm = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = jm(Rm, t);
          return (0, u.jsx)(Im, {
            scope: t,
            forceMount: r,
            children: (0, u.jsx)(mm.C, {
              present: r || i.open,
              children: (0, u.jsx)(pm, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Mm.displayName = Rm;
      var Bm = "TooltipContent",
        Hm = h.forwardRef(((e, t) => {
          const r = Dm(Bm, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...i
            } = e,
            a = jm(Bm, e.__scopeTooltip);
          return (0, u.jsx)(mm.C, {
            present: n || a.open,
            children: a.disableHoverableContent ? (0, u.jsx)(Gm, {
              side: o,
              ...i,
              ref: t
            }) : (0, u.jsx)(zm, {
              side: o,
              ...i,
              ref: t
            })
          })
        })),
        zm = h.forwardRef(((e, t) => {
          const r = jm(Bm, e.__scopeTooltip),
            n = Pm(Bm, e.__scopeTooltip),
            o = h.useRef(null),
            i = (0, Dh.s)(t, o),
            [a, s] = h.useState(null),
            {
              trigger: l,
              onClose: c
            } = r,
            d = o.current,
            {
              onPointerInTransitChange: f
            } = n,
            p = h.useCallback((() => {
              s(null), f(!1)
            }), [f]),
            m = h.useCallback(((e, t) => {
              const r = e.currentTarget,
                n = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = function(e, t, r = 5) {
                  const n = [];
                  switch (t) {
                    case "top":
                      n.push({
                        x: e.x - r,
                        y: e.y + r
                      }, {
                        x: e.x + r,
                        y: e.y + r
                      });
                      break;
                    case "bottom":
                      n.push({
                        x: e.x - r,
                        y: e.y - r
                      }, {
                        x: e.x + r,
                        y: e.y - r
                      });
                      break;
                    case "left":
                      n.push({
                        x: e.x + r,
                        y: e.y - r
                      }, {
                        x: e.x + r,
                        y: e.y + r
                      });
                      break;
                    case "right":
                      n.push({
                        x: e.x - r,
                        y: e.y - r
                      }, {
                        x: e.x - r,
                        y: e.y + r
                      })
                  }
                  return n
                }(n, function(e, t) {
                  const r = Math.abs(t.top - e.y),
                    n = Math.abs(t.bottom - e.y),
                    o = Math.abs(t.right - e.x),
                    i = Math.abs(t.left - e.x);
                  switch (Math.min(r, n, o, i)) {
                    case i:
                      return "left";
                    case o:
                      return "right";
                    case r:
                      return "top";
                    case n:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(n, r.getBoundingClientRect())),
                i = function(e) {
                  const t = e.slice();
                  return t.sort(((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
                    function(e) {
                      if (e.length <= 1) return e.slice();
                      const t = [];
                      for (let r = 0; r < e.length; r++) {
                        const n = e[r];
                        for (; t.length >= 2;) {
                          const e = t[t.length - 1],
                            r = t[t.length - 2];
                          if (!((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x))) break;
                          t.pop()
                        }
                        t.push(n)
                      }
                      t.pop();
                      const r = [];
                      for (let t = e.length - 1; t >= 0; t--) {
                        const n = e[t];
                        for (; r.length >= 2;) {
                          const e = r[r.length - 1],
                            t = r[r.length - 2];
                          if (!((e.x - t.x) * (n.y - t.y) >= (e.y - t.y) * (n.x - t.x))) break;
                          r.pop()
                        }
                        r.push(n)
                      }
                      return r.pop(), 1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r)
                    }(t)
                }([...o, ... function(e) {
                  const {
                    top: t,
                    right: r,
                    bottom: n,
                    left: o
                  } = e;
                  return [{
                    x: o,
                    y: t
                  }, {
                    x: r,
                    y: t
                  }, {
                    x: r,
                    y: n
                  }, {
                    x: o,
                    y: n
                  }]
                }(t.getBoundingClientRect())]);
              s(i), f(!0)
            }), [f]);
          return h.useEffect((() => () => p()), [p]), h.useEffect((() => {
            if (l && d) {
              const e = e => m(e, d),
                t = e => m(e, l);
              return l.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t)
              }
            }
          }), [l, d, m, p]), h.useEffect((() => {
            if (a) {
              const e = e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = l?.contains(t) || d?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: r,
                      y: n
                    } = e;
                    let o = !1;
                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                      const a = t[e],
                        s = t[i],
                        l = a.x,
                        c = a.y,
                        u = s.x,
                        d = s.y;
                      c > n != d > n && r < (u - l) * (n - c) / (d - c) + l && (o = !o)
                    }
                    return o
                  }(r, a);
                n ? p() : o && (p(), c())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }), [l, d, a, c, p]), (0, u.jsx)(Gm, {
            ...e,
            ref: i
          })
        })),
        [Fm, Vm] = bm(Tm, {
          isInside: !1
        }),
        Um = (0, hp.Dc)("TooltipContent"),
        Gm = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            ...s
          } = e, l = jm(Bm, r), c = wm(r), {
            onClose: d
          } = l;
          return h.useEffect((() => (document.addEventListener(Sm, d), () => document.removeEventListener(Sm, d))), [d]), h.useEffect((() => {
            if (l.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(l.trigger) && d()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }), [l.trigger, d]), (0, u.jsx)(Pp, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: d,
            children: (0, u.jsxs)(hm, {
              "data-state": l.stateAttribute,
              ...c,
              ...s,
              ref: t,
              style: {
                ...s.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, u.jsx)(Um, {
                children: n
              }), (0, u.jsx)(Fm, {
                scope: r,
                isInside: !0,
                children: (0, u.jsx)(ym, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        }));
      Hm.displayName = Bm;
      var qm = "TooltipArrow",
        Xm = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = wm(r);
          return Vm(qm, r).isInside ? null : (0, u.jsx)(fm, {
            ...o,
            ...n,
            ref: t
          })
        }));
      Xm.displayName = qm;
      var Wm = Om,
        Km = Am,
        $m = Nm,
        Ym = Mm,
        Zm = Hm,
        Qm = Xm;
      const Jm = ({
        content: e,
        children: t,
        side: r = "top",
        sideOffset: n = 8,
        align: o = "center",
        alignOffset: i = 0,
        avoidCollisions: a = !0,
        collisionBoundary: s,
        collisionPadding: l,
        sticky: c = "partial",
        onEscapeKeyDown: d,
        onPointerDownOutside: f,
        label: p,
        defaultOpen: m,
        open: g,
        onOpenChange: v,
        delayDuration: y = 400,
        portal: b = !0,
        arrow: _ = !0,
        portalContainer: w,
        testId: x
      }) => {
        const [E = !1, S] = K({
          defaultProp: m,
          prop: g,
          onChange: v
        }), C = U(E), P = Bl({
          opacity: E ? 1 : 0,
          immediate: E && !C
        }), O = "left" === r || "right" === r ? "center" : o, T = b ? {
          container: w
        } : {}, k = b ? Ym : h.Fragment, j = _ ? {
          className: "foundry_hcgxh_h3lgaa2"
        } : {}, A = _ ? Qm : h.Fragment;
        return (0, u.jsx)(Wm, {
          delayDuration: y,
          children: (0, u.jsxs)(Km, {
            open: E,
            onOpenChange: S,
            children: [(0, u.jsx)($m, {
              asChild: !0,
              className: "foundry_hcgxh_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, u.jsx)(k, {
              ...T,
              children: (0, u.jsx)(Zm, {
                side: r,
                align: O,
                sticky: c,
                forceMount: !0,
                "aria-label": p,
                "data-testid": x,
                sideOffset: n,
                alignOffset: i,
                onEscapeKeyDown: d,
                avoidCollisions: a,
                collisionPadding: l,
                collisionBoundary: s,
                onPointerDownOutside: f,
                children: (0, u.jsxs)(ic.div, {
                  className: "foundry_hcgxh_h3lgaa0",
                  style: P,
                  children: [(0, u.jsx)(H, {
                    size: "SM",
                    className: "foundry_hcgxh_h3lgaa1",
                    asChild: !0,
                    children: (0, u.jsx)("span", {
                      children: e
                    })
                  }), (0, u.jsx)(A, {
                    ...j
                  })]
                })
              })
            })]
          })
        })
      };
      var eg = "foundry_hcgxh_bwy1ds1",
        tg = "foundry_hcgxh_bwy1dsg",
        rg = "foundry_hcgxh_bwy1dsf";
      const ng = e => {
          e.preventDefault?.()
        },
        og = (0, h.forwardRef)((({
          onClose: e,
          onDownload: t,
          zoomLevel: r,
          zoomIn: n,
          zoomOut: o,
          zoomTo: i,
          minZoomLevel: a,
          maxZoomLevel: s,
          canZoomIn: l,
          canZoomOut: c,
          resetZoom: d,
          caption: h,
          showDownloadButton: f,
          defaultZoomLevel: p,
          showZoomControls: m
        }, g) => {
          const v = xh(),
            y = V("screen and (max-width: 1024px)"),
            b = r !== p,
            _ = y ? "SM" : "LG",
            w = Bl({
              opacity: b ? 1 : 0,
              immediate: q()
            });
          Jf(["+", "=", "add", "plus"], (() => n?.()), {
            preventDefault: !0,
            enabled: m
          }), Jf(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0,
            enabled: m
          }), Jf("r", (() => d?.()), {
            preventDefault: !0,
            enabled: m
          });
          const x = Y() && y;
          return (0, u.jsx)(Yf, {
            children: (0, u.jsxs)("div", {
              className: "foundry_hcgxh_bwy1ds0",
              ref: g,
              children: [(0, u.jsx)(Jm, {
                side: "right",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: ng,
                content: (0, u.jsxs)("div", {
                  className: rg,
                  children: [v.formatMessage(Ef), (0, u.jsx)(H, {
                    size: "XS",
                    className: tg,
                    children: v.formatMessage(Sf, {
                      shortcut: (0, u.jsx)(wp, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, u.jsx)(sp, {
                  size: _,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: v.formatMessage(Ef),
                  className: (0, L.$)(eg, "foundry_hcgxh_bwy1ds2"),
                  onPress: e
                })
              }), (0, u.jsxs)("div", {
                className: "foundry_hcgxh_bwy1ds3",
                children: [!x && m && (0, u.jsxs)(u.Fragment, {
                  children: [(0, u.jsxs)("div", {
                    className: "foundry_hcgxh_bwy1ds4",
                    children: [(0, u.jsx)(Jm, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: ng,
                      content: (0, u.jsxs)("div", {
                        className: rg,
                        children: [v.formatMessage(Cf), (0, u.jsx)(H, {
                          size: "XS",
                          className: tg,
                          children: v.formatMessage(Pf, {
                            shortcut: (0, u.jsx)(wp, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(sp, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: v.formatMessage(Cf),
                        className: (0, L.$)(eg, "foundry_hcgxh_bwy1ds5"),
                        onPress: () => n(),
                        isDisabled: !l
                      })
                    }), (0, u.jsxs)(bf, {
                      className: "foundry_hcgxh_bwy1dsa",
                      value: [r],
                      max: s,
                      min: a,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => i?.(e[0]),
                      children: [(0, u.jsx)(_f, {
                        className: "foundry_hcgxh_bwy1dsb",
                        children: (0, u.jsx)(wf, {
                          className: "foundry_hcgxh_bwy1dsc"
                        })
                      }), (0, u.jsx)(Jm, {
                        side: "left",
                        portal: !1,
                        delayDuration: 0,
                        onPointerDownOutside: ng,
                        content: v.formatMessage(Lf, {
                          zoom: r.toFixed(0)
                        }),
                        children: (0, u.jsx)(xf, {
                          className: "foundry_hcgxh_bwy1dsd",
                          "aria-label": v.formatMessage(Af),
                          children: (0, u.jsx)("span", {
                            className: "foundry_hcgxh_bwy1dse"
                          })
                        })
                      })]
                    }), (0, u.jsx)(Jm, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: ng,
                      content: (0, u.jsxs)("div", {
                        className: rg,
                        children: [v.formatMessage(Of), (0, u.jsx)(H, {
                          size: "XS",
                          className: tg,
                          children: v.formatMessage(Tf, {
                            shortcut: (0, u.jsx)(wp, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(sp, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: v.formatMessage(Of),
                        className: (0, L.$)(eg, "foundry_hcgxh_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !c
                      })
                    })]
                  }), (0, u.jsx)(ic.div, {
                    style: w,
                    children: (0, u.jsx)(Jm, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: ng,
                      content: (0, u.jsxs)("div", {
                        className: rg,
                        children: [v.formatMessage(kf), (0, u.jsx)(H, {
                          size: "XS",
                          className: tg,
                          children: v.formatMessage(jf, {
                            shortcut: (0, u.jsx)(wp, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(sp, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Undo",
                        label: v.formatMessage(kf),
                        className: (0, L.$)(eg, "foundry_hcgxh_bwy1ds7"),
                        onPress: d,
                        isDisabled: !b,
                        "aria-hidden": !b
                      })
                    })
                  })]
                }), f && x && (0, u.jsx)(Jm, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: ng,
                  content: v.formatMessage(Rf),
                  children: (0, u.jsx)(sp, {
                    size: _,
                    appearance: "tertiary",
                    icon: "Download",
                    label: v.formatMessage(Nf),
                    className: eg,
                    onPress: e
                  })
                })]
              }), (0, u.jsxs)("div", {
                className: "foundry_hcgxh_bwy1ds8",
                children: [h && (0, u.jsxs)(u.Fragment, {
                  children: [(0, u.jsx)("div", {
                    className: "foundry_hcgxh_bwy1dsh"
                  }), (0, u.jsx)(H, {
                    size: "SM",
                    "aria-hidden": !0,
                    asChild: "string" != typeof h,
                    children: h
                  })]
                }), f && !x && (0, u.jsx)("div", {
                  className: "foundry_hcgxh_bwy1ds9",
                  children: (0, u.jsx)(Jm, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: ng,
                    content: v.formatMessage(Rf),
                    children: (0, u.jsx)(sp, {
                      size: _,
                      appearance: "tertiary",
                      icon: "Download",
                      label: v.formatMessage(Nf),
                      className: eg,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        }));
      var ig = "foundry_hcgxh_1a74xwb4",
        ag = "focusScope.autoFocusOnMount",
        sg = "focusScope.autoFocusOnUnmount",
        lg = {
          bubbles: !1,
          cancelable: !0
        },
        cg = h.forwardRef(((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...a
          } = e, [s, l] = h.useState(null), c = xp(o), d = xp(i), f = h.useRef(null), p = (0, Dh.s)(t, (e => l(e))), m = h.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          h.useEffect((() => {
            if (n) {
              let e = function(e) {
                  if (m.paused || !s) return;
                  const t = e.target;
                  s.contains(t) ? f.current = t : fg(f.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (m.paused || !s) return;
                  const t = e.relatedTarget;
                  null !== t && (s.contains(t) || fg(f.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && fg(s)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const n = new MutationObserver(r);
              return s && n.observe(s, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
              }
            }
          }), [n, s, m.paused]), h.useEffect((() => {
            if (s) {
              pg.add(m);
              const e = document.activeElement;
              if (!s.contains(e)) {
                const t = new CustomEvent(ag, lg);
                s.addEventListener(ag, c), s.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (fg(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(ug(s).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && fg(s))
              }
              return () => {
                s.removeEventListener(ag, c), setTimeout((() => {
                  const t = new CustomEvent(sg, lg);
                  s.addEventListener(sg, d), s.dispatchEvent(t), t.defaultPrevented || fg(e ?? document.body, {
                    select: !0
                  }), s.removeEventListener(sg, d), pg.remove(m)
                }), 0)
              }
            }
          }), [s, c, d, m]);
          const g = h.useCallback((e => {
            if (!r && !n) return;
            if (m.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, i] = function(e) {
                  const t = ug(e);
                  return [dg(t, e), dg(t.reverse(), e)]
                }(t);
              n && i ? e.shiftKey || o !== i ? e.shiftKey && o === n && (e.preventDefault(), r && fg(i, {
                select: !0
              })) : (e.preventDefault(), r && fg(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [r, n, m.paused]);
          return (0, u.jsx)(Uh.sG.div, {
            tabIndex: -1,
            ...a,
            ref: p,
            onKeyDown: g
          })
        }));

      function ug(e) {
        const t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
      }

      function dg(e, t) {
        for (const r of e)
          if (!hg(r, {
              upTo: t
            })) return r
      }

      function hg(e, {
        upTo: t
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
          if (void 0 !== t && e === t) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function fg(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const r = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== r && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      cg.displayName = "FocusScope";
      var pg = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = mg(e, t), e.unshift(t)
          },
          remove(t) {
            e = mg(e, t), e[0]?.resume()
          }
        }
      }();

      function mg(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var gg = 0;

      function vg() {
        h.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? yg()), document.body.insertAdjacentElement("beforeend", e[1] ?? yg()), gg++, () => {
            1 === gg && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), gg--
          }
        }), [])
      }

      function yg() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var bg = "right-scroll-bar-position",
        _g = "width-before-scroll-bar",
        wg = r(23614),
        xg = (0, r(19683).f)(),
        Eg = function() {},
        Sg = h.forwardRef((function(e, t) {
          var r = h.useRef(null),
            n = h.useState({
              onScrollCapture: Eg,
              onWheelCapture: Eg,
              onTouchMoveCapture: Eg
            }),
            o = n[0],
            i = n[1],
            a = e.forwardProps,
            s = e.children,
            l = e.className,
            c = e.removeScrollBar,
            u = e.enabled,
            d = e.shards,
            f = e.sideCar,
            p = e.noIsolation,
            m = e.inert,
            g = e.allowPinchZoom,
            v = e.as,
            y = void 0 === v ? "div" : v,
            b = e.gapMode,
            _ = (0, mc.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            w = f,
            x = (0, wg.S)([r, t]),
            E = (0, mc.__assign)((0, mc.__assign)({}, _), o);
          return h.createElement(h.Fragment, null, u && h.createElement(w, {
            sideCar: xg,
            removeScrollBar: c,
            shards: d,
            noIsolation: p,
            inert: m,
            setCallbacks: i,
            allowPinchZoom: !!g,
            lockRef: r,
            gapMode: b
          }), a ? h.cloneElement(h.Children.only(s), (0, mc.__assign)((0, mc.__assign)({}, E), {
            ref: x
          })) : h.createElement(y, (0, mc.__assign)({}, E, {
            className: l,
            ref: x
          }), s))
        }));
      Sg.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, Sg.classNames = {
        fullWidth: _g,
        zeroRight: bg
      };
      var Cg = function(e) {
        var t = e.sideCar,
          r = (0, mc.__rest)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var n = t.read();
        if (!n) throw new Error("Sidecar medium not found");
        return h.createElement(n, (0, mc.__assign)({}, r))
      };
      Cg.isSideCarExport = !0;
      var Pg = function() {
          var e = 0,
            t = null;
          return {
            add: function(n) {
              var o, i;
              0 == e && (t = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = r.nc;
                return t && e.setAttribute("nonce", t), e
              }()) && (i = n, (o = t).styleSheet ? o.styleSheet.cssText = i : o.appendChild(document.createTextNode(i)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(t)), e++
            },
            remove: function() {
              !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }
        },
        Og = function() {
          var e, t = (e = Pg(), function(t, r) {
            h.useEffect((function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }), [t && r])
          });
          return function(e) {
            var r = e.styles,
              n = e.dynamic;
            return t(r, n), null
          }
        },
        Tg = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        kg = function(e) {
          return parseInt(e || "", 10) || 0
        },
        jg = Og(),
        Ag = "data-scroll-locked",
        Lg = function(e, t, r, n) {
          var o = e.left,
            i = e.top,
            a = e.right,
            s = e.gap;
          return void 0 === r && (r = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(n, ";\n   padding-right: ").concat(s, "px ").concat(n, ";\n  }\n  body[").concat(Ag, "] {\n    overflow: hidden ").concat(n, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(n, ";"), "margin" === r && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(n, ";\n    "), "padding" === r && "padding-right: ".concat(s, "px ").concat(n, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(bg, " {\n    right: ").concat(s, "px ").concat(n, ";\n  }\n  \n  .").concat(_g, " {\n    margin-right: ").concat(s, "px ").concat(n, ";\n  }\n  \n  .").concat(bg, " .").concat(bg, " {\n    right: 0 ").concat(n, ";\n  }\n  \n  .").concat(_g, " .").concat(_g, " {\n    margin-right: 0 ").concat(n, ";\n  }\n  \n  body[").concat(Ag, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
        },
        Ng = function() {
          var e = parseInt(document.body.getAttribute(Ag) || "0", 10);
          return isFinite(e) ? e : 0
        },
        Rg = function(e) {
          var t = e.noRelative,
            r = e.noImportant,
            n = e.gapMode,
            o = void 0 === n ? "margin" : n;
          h.useEffect((function() {
            return document.body.setAttribute(Ag, (Ng() + 1).toString()),
              function() {
                var e = Ng() - 1;
                e <= 0 ? document.body.removeAttribute(Ag) : document.body.setAttribute(Ag, e.toString())
              }
          }), []);
          var i = h.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return Tg;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    r = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    n = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [kg(r), kg(n), kg(o)]
                }(e),
                r = document.documentElement.clientWidth,
                n = window.innerWidth;
              return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, n - r + t[2] - t[0])
              }
            }(o)
          }), [o]);
          return h.createElement(jg, {
            styles: Lg(i, !t, o, r ? "" : "!important")
          })
        },
        Ig = !1;
      if ("undefined" != typeof window) try {
        var Dg = Object.defineProperty({}, "passive", {
          get: function() {
            return Ig = !0, !0
          }
        });
        window.addEventListener("test", Dg, Dg), window.removeEventListener("test", Dg, Dg)
      } catch (e) {
        Ig = !1
      }
      var Mg = !!Ig && {
          passive: !1
        },
        Bg = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var r = window.getComputedStyle(e);
          return "hidden" !== r[t] && !(r.overflowY === r.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === r[t])
        },
        Hg = function(e, t) {
          var r = t.ownerDocument,
            n = t;
          do {
            if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), zg(e, n)) {
              var o = Fg(e, n);
              if (o[1] > o[2]) return !0
            }
            n = n.parentNode
          } while (n && n !== r.body);
          return !1
        },
        zg = function(e, t) {
          return "v" === e ? function(e) {
            return Bg(e, "overflowY")
          }(t) : function(e) {
            return Bg(e, "overflowX")
          }(t)
        },
        Fg = function(e, t) {
          return "v" === e ? function(e) {
            return [e.scrollTop, e.scrollHeight, e.clientHeight]
          }(t) : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t)
        },
        Vg = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        Ug = function(e) {
          return [e.deltaX, e.deltaY]
        },
        Gg = function(e) {
          return e && "current" in e ? e.current : e
        },
        qg = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        Xg = 0,
        Wg = [];

      function Kg(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const $g = (xg.useMedium((function(e) {
        var t = h.useRef([]),
          r = h.useRef([0, 0]),
          n = h.useRef(),
          o = h.useState(Xg++)[0],
          i = h.useState(Og)[0],
          a = h.useRef(e);
        h.useEffect((function() {
          a.current = e
        }), [e]), h.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var t = (0, mc.__spreadArray)([e.lockRef.current], (e.shards || []).map(Gg), !0).filter(Boolean);
            return t.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(o))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(o)), t.forEach((function(e) {
                  return e.classList.remove("allow-interactivity-".concat(o))
                }))
              }
          }
        }), [e.inert, e.lockRef.current, e.shards]);
        var s = h.useCallback((function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !a.current.allowPinchZoom;
            var o, i = Vg(e),
              s = r.current,
              l = "deltaX" in e ? e.deltaX : s[0] - i[0],
              c = "deltaY" in e ? e.deltaY : s[1] - i[1],
              u = e.target,
              d = Math.abs(l) > Math.abs(c) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === u.type) return !1;
            var h = Hg(d, u);
            if (!h) return !0;
            if (h ? o = d : (o = "v" === d ? "h" : "v", h = Hg(d, u)), !h) return !1;
            if (!n.current && "changedTouches" in e && (l || c) && (n.current = o), !o) return !0;
            var f = n.current || o;
            return function(e, t, r, n, o) {
              var i = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                a = i * n,
                s = r.target,
                l = t.contains(s),
                c = !1,
                u = a > 0,
                d = 0,
                h = 0;
              do {
                var f = Fg(e, s),
                  p = f[0],
                  m = f[1] - f[2] - i * p;
                (p || m) && zg(e, s) && (d += m, h += p), s = s instanceof ShadowRoot ? s.host : s.parentNode
              } while (!l && s !== document.body || l && (t.contains(s) || t === s));
              return (u && (o && Math.abs(d) < 1 || !o && a > d) || !u && (o && Math.abs(h) < 1 || !o && -a > h)) && (c = !0), c
            }(f, t, e, "h" === f ? l : c, !0)
          }), []),
          l = h.useCallback((function(e) {
            var r = e;
            if (Wg.length && Wg[Wg.length - 1] === i) {
              var n = "deltaY" in r ? Ug(r) : Vg(r),
                o = t.current.filter((function(e) {
                  return e.name === r.type && (e.target === r.target || r.target === e.shadowParent) && function(e, t) {
                    return e[0] === t[0] && e[1] === t[1]
                  }(e.delta, n)
                }))[0];
              if (o && o.should) r.cancelable && r.preventDefault();
              else if (!o) {
                var l = (a.current.shards || []).map(Gg).filter(Boolean).filter((function(e) {
                  return e.contains(r.target)
                }));
                (l.length > 0 ? s(r, l[0]) : !a.current.noIsolation) && r.cancelable && r.preventDefault()
              }
            }
          }), []),
          c = h.useCallback((function(e, r, n, o) {
            var i = {
              name: e,
              delta: r,
              target: n,
              should: o,
              shadowParent: Kg(n)
            };
            t.current.push(i), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== i
              }))
            }), 1)
          }), []),
          u = h.useCallback((function(e) {
            r.current = Vg(e), n.current = void 0
          }), []),
          d = h.useCallback((function(t) {
            c(t.type, Ug(t), t.target, s(t, e.lockRef.current))
          }), []),
          f = h.useCallback((function(t) {
            c(t.type, Vg(t), t.target, s(t, e.lockRef.current))
          }), []);
        h.useEffect((function() {
          return Wg.push(i), e.setCallbacks({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: f
            }), document.addEventListener("wheel", l, Mg), document.addEventListener("touchmove", l, Mg), document.addEventListener("touchstart", u, Mg),
            function() {
              Wg = Wg.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", l, Mg), document.removeEventListener("touchmove", l, Mg), document.removeEventListener("touchstart", u, Mg)
            }
        }), []);
        var p = e.removeScrollBar,
          m = e.inert;
        return h.createElement(h.Fragment, null, m ? h.createElement(i, {
          styles: qg(o)
        }) : null, p ? h.createElement(Rg, {
          gapMode: e.gapMode
        }) : null)
      })), Cg);
      var Yg = h.forwardRef((function(e, t) {
        return h.createElement(Sg, (0, mc.__assign)({}, e, {
          ref: t,
          sideCar: $g
        }))
      }));
      Yg.classNames = Sg.classNames;
      const Zg = Yg;
      var Qg = new WeakMap,
        Jg = new WeakMap,
        ev = {},
        tv = 0,
        rv = function(e) {
          return e && (e.host || rv(e.parentNode))
        },
        nv = function(e, t, r) {
          void 0 === r && (r = "data-aria-hidden");
          var n = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), function(e, t, r, n) {
            var o = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var r = rv(t);
                return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            ev[r] || (ev[r] = new WeakMap);
            var i = ev[r],
              a = [],
              s = new Set,
              l = new Set(o),
              c = function(e) {
                e && !s.has(e) && (s.add(e), c(e.parentNode))
              };
            o.forEach(c);
            var u = function(e) {
              e && !l.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (s.has(e)) u(e);
                else try {
                  var t = e.getAttribute(n),
                    o = null !== t && "false" !== t,
                    l = (Qg.get(e) || 0) + 1,
                    c = (i.get(e) || 0) + 1;
                  Qg.set(e, l), i.set(e, c), a.push(e), 1 === l && o && Jg.set(e, !0), 1 === c && e.setAttribute(r, "true"), o || e.setAttribute(n, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              }))
            };
            return u(t), s.clear(), tv++,
              function() {
                a.forEach((function(e) {
                  var t = Qg.get(e) - 1,
                    o = i.get(e) - 1;
                  Qg.set(e, t), i.set(e, o), t || (Jg.has(e) || e.removeAttribute(n), Jg.delete(e)), o || e.removeAttribute(r)
                })), --tv || (Qg = new WeakMap, Qg = new WeakMap, Jg = new WeakMap, ev = {})
              }
          }(n, o, r, "aria-hidden")) : function() {
            return null
          }
        },
        ov = "Dialog",
        [iv, av] = (0, Mh.A)(ov),
        [sv, lv] = iv(ov),
        cv = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            modal: a = !0
          } = e, s = h.useRef(null), l = h.useRef(null), [c, d] = (0, Bh.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: ov
          });
          return (0, u.jsx)(sv, {
            scope: t,
            triggerRef: s,
            contentRef: l,
            contentId: (0, kp.B)(),
            titleId: (0, kp.B)(),
            descriptionId: (0, kp.B)(),
            open: c,
            onOpenChange: d,
            onOpenToggle: h.useCallback((() => d((e => !e))), [d]),
            modal: a,
            children: r
          })
        };
      cv.displayName = ov;
      var uv = "DialogTrigger",
        dv = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = lv(uv, r), i = (0, Dh.s)(t, o.triggerRef);
          return (0, u.jsx)(Uh.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": jv(o.open),
            ...n,
            ref: i,
            onClick: (0, Ih.m)(e.onClick, o.onOpenToggle)
          })
        }));
      dv.displayName = uv;
      var hv = "DialogPortal",
        [fv, pv] = iv(hv, {
          forceMount: void 0
        }),
        mv = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = lv(hv, t);
          return (0, u.jsx)(fv, {
            scope: t,
            forceMount: r,
            children: h.Children.map(n, (e => (0, u.jsx)(mm.C, {
              present: r || i.open,
              children: (0, u.jsx)(pm, {
                asChild: !0,
                container: o,
                children: e
              })
            })))
          })
        };
      mv.displayName = hv;
      var gv = "DialogOverlay",
        vv = h.forwardRef(((e, t) => {
          const r = pv(gv, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = lv(gv, e.__scopeDialog);
          return i.modal ? (0, u.jsx)(mm.C, {
            present: n || i.open,
            children: (0, u.jsx)(bv, {
              ...o,
              ref: t
            })
          }) : null
        }));
      vv.displayName = gv;
      var yv = (0, hp.TL)("DialogOverlay.RemoveScroll"),
        bv = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = lv(gv, r);
          return (0, u.jsx)(Zg, {
            as: yv,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, u.jsx)(Uh.sG.div, {
              "data-state": jv(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        })),
        _v = "DialogContent",
        wv = h.forwardRef(((e, t) => {
          const r = pv(_v, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = lv(_v, e.__scopeDialog);
          return (0, u.jsx)(mm.C, {
            present: n || i.open,
            children: i.modal ? (0, u.jsx)(xv, {
              ...o,
              ref: t
            }) : (0, u.jsx)(Ev, {
              ...o,
              ref: t
            })
          })
        }));
      wv.displayName = _v;
      var xv = h.forwardRef(((e, t) => {
          const r = lv(_v, e.__scopeDialog),
            n = h.useRef(null),
            o = (0, Dh.s)(t, r.contentRef, n);
          return h.useEffect((() => {
            const e = n.current;
            if (e) return nv(e)
          }), []), (0, u.jsx)(Sv, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, Ih.m)(e.onCloseAutoFocus, (e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            })),
            onPointerDownOutside: (0, Ih.m)(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            })),
            onFocusOutside: (0, Ih.m)(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        Ev = h.forwardRef(((e, t) => {
          const r = lv(_v, e.__scopeDialog),
            n = h.useRef(!1),
            o = h.useRef(!1);
          return (0, u.jsx)(Sv, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (n.current || r.triggerRef.current?.focus(), t.preventDefault()), n.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (n.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const i = t.target,
                a = r.triggerRef.current?.contains(i);
              a && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        })),
        Sv = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...a
          } = e, s = lv(_v, r), l = h.useRef(null), c = (0, Dh.s)(t, l);
          return vg(), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(cg, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, u.jsx)(Pp, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": jv(s.open),
                ...a,
                ref: c,
                onDismiss: () => s.onOpenChange(!1)
              })
            }), (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)(Rv, {
                titleId: s.titleId
              }), (0, u.jsx)(Iv, {
                contentRef: l,
                descriptionId: s.descriptionId
              })]
            })]
          })
        })),
        Cv = "DialogTitle",
        Pv = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = lv(Cv, r);
          return (0, u.jsx)(Uh.sG.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        }));
      Pv.displayName = Cv;
      var Ov = "DialogDescription",
        Tv = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = lv(Ov, r);
          return (0, u.jsx)(Uh.sG.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        }));
      Tv.displayName = Ov;
      var kv = "DialogClose";

      function jv(e) {
        return e ? "open" : "closed"
      }
      h.forwardRef(((e, t) => {
        const {
          __scopeDialog: r,
          ...n
        } = e, o = lv(kv, r);
        return (0, u.jsx)(Uh.sG.button, {
          type: "button",
          ...n,
          ref: t,
          onClick: (0, Ih.m)(e.onClick, (() => o.onOpenChange(!1)))
        })
      })).displayName = kv;
      var Av = "DialogTitleWarning",
        [Lv, Nv] = (0, Mh.q)(Av, {
          contentName: _v,
          titleName: Cv,
          docsSlug: "dialog"
        }),
        Rv = ({
          titleId: e
        }) => {
          const t = Nv(Av),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return h.useEffect((() => {
            e && (document.getElementById(e) || console.error(r))
          }), [r, e]), null
        },
        Iv = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Nv("DialogDescriptionWarning").contentName}}.`;
          return h.useEffect((() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }), [r, e, t]), null
        },
        Dv = cv,
        Mv = dv,
        Bv = mv,
        Hv = wv,
        zv = Pv,
        Fv = Tv;
      const Vv = ic(vv),
        Uv = ic(Hv),
        Gv = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        qv = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        Xv = (0, d.AK)(.77, 0, .175, 1),
        Wv = ({
          src: e,
          alt: t,
          caption: r,
          crossOrigin: n,
          onReady: o,
          loading: i,
          referrerPolicy: a,
          thumbnail: s,
          thumbnailAspectRatio: l,
          thumbnailPosition: c,
          thumbnailFit: d,
          reduceMotion: f = !1,
          defaultOpen: m,
          open: g,
          onOpenChange: v,
          showOpenButton: y,
          showDownloadButton: b,
          zoomLevel: _,
          defaultZoomLevel: w = 100,
          minZoomLevel: x = 100,
          maxZoomLevel: E = 300,
          zoomLevelStep: S = 100,
          onZoomLevelChange: C,
          gestureSettings: P,
          testId: O,
          showZoomControls: T = !0,
          disableGesturesOn: k,
          asChild: j,
          children: A,
          className: N,
          usePortal: R = !0,
          enabled: I = !0
        }) => {
          const D = (0, h.useRef)(null),
            M = (0, h.useRef)(null),
            B = (0, h.useRef)(null),
            H = (0, h.useRef)(null),
            F = zl(),
            U = zl(),
            G = zl(),
            X = (0, h.useRef)(!1),
            Q = xh(),
            J = V("screen and (max-width: 1024px)"),
            ee = Y() && J,
            te = q(),
            re = "pointer-devices" !== k || ee,
            [ne, oe] = (0, h.useState)(!0),
            [ie, ae] = (0, h.useState)(!1),
            [se = !1, le] = K({
              prop: g,
              defaultProp: m,
              onChange: v
            }),
            [ce, ue] = (0, h.useState)(!1),
            [de, he] = (0, h.useState)(null),
            fe = (0, h.useDeferredValue)(ce),
            pe = f || te || m && !X.current;
          (0, h.useEffect)((() => {
            o?.()
          }), []), (0, h.useEffect)((() => {
            (m || g) && ue(se)
          }), []), Z((() => {
            ce !== fe && (async function(e, {
              onOpen: t,
              onClose: r
            }) {
              const n = B.current.getBoundingClientRect(),
                o = B.current.querySelector("img"),
                i = o && getComputedStyle(o),
                a = i?.objectFit ?? "",
                s = i?.objectPosition ?? "",
                {
                  a: l
                } = new DOMMatrix(i?.transform),
                u = o?.naturalWidth ?? n.width,
                h = o?.naturalHeight ?? n.height,
                f = u / window.innerWidth,
                p = u / f,
                m = h / f,
                g = window.innerHeight * p / m,
                v = window.innerWidth * m / p,
                y = m >= window.innerHeight ? "horizontal" : "vertical",
                b = ((e, t = 0) => Number.isNaN(e) ? t : e)("horizontal" === y ? (window.innerWidth - window.innerHeight * p / m) / 2 : (window.innerHeight - window.innerWidth * m / p) / 2, 0);
              e ? G.start({
                to: async e => {
                  await e({
                    immediate: !0,
                    aspectRatio: "unset",
                    scale: l,
                    width: `${n.width}px`,
                    height: `${n.height}px`,
                    x: n.left,
                    y: n.top,
                    objectFit: d || a,
                    objectPosition: c || s
                  }), await e({
                    immediate: !0,
                    opacity: 1
                  }), B.current?.style.setProperty("opacity", "0"), await e({
                    height: "horizontal" === y ? `${window.innerHeight}px` : `${v}px`,
                    width: "horizontal" === y ? `${g}px` : `${window.innerWidth}px`,
                    x: "horizontal" === y ? b : 0,
                    y: "horizontal" === y ? 0 : b,
                    scale: w / 100,
                    immediate: pe,
                    config: {
                      duration: 550,
                      easing: Xv
                    }
                  }), await e({
                    immediate: !0,
                    height: "100%",
                    width: "100%",
                    inset: 0,
                    x: 0,
                    y: 0,
                    objectFit: "contain",
                    objectPosition: "center"
                  }), "vertical" === y ? D.current?.style.setProperty("width", "100%") : "horizontal" === y && D.current?.style.setProperty("height", "100%"), t?.()
                }
              }) : G.start({
                to: async e => {
                  await e({
                    immediate: !0,
                    opacity: 1,
                    height: "horizontal" === y ? `${window.innerHeight}px` : `${v}px`,
                    width: "horizontal" === y ? `${g}px` : `${window.innerWidth}px`,
                    x: Ee.position[0] + ("horizontal" === y ? b : 0),
                    y: Ee.position[1] + ("horizontal" === y ? 0 : b),
                    scale: Ee.zoomLevel / 100,
                    objectFit: d || a,
                    objectPosition: c || s
                  }), await e({
                    aspectRatio: "unset",
                    scale: l,
                    width: `${n.width}px`,
                    height: `${n.height}px`,
                    x: n.left,
                    y: n.top,
                    immediate: pe,
                    config: {
                      duration: 250,
                      easing: Xv
                    }
                  }), B.current?.style.setProperty("opacity", "1"), await e({
                    opacity: 0,
                    immediate: !0
                  }), r?.()
                }
              })
            }(ce, {
              onClose: () => le(!1)
            }), X.current = !0)
          }), [ce]), Z((() => {
            se ? Promise.resolve().then((() => async function() {
              const e = B.current.querySelector("img");
              if (H.current) {
                let t = Gv;
                e?.currentSrc && (t = e?.currentSrc), H.current.src = t, await Oe(H.current)
              }
            }())).then((() => Oe(H.current))).then((() => ue(se))) : ue(!1)
          }), [se]);
          const me = () => {
              ue(!1)
            },
            {
              loaded: ge,
              eventHandlers: ve
            } = (({
              enabled: e = !0
            }) => {
              const [t, r] = (0, h.useState)(!1), [n, o] = (0, h.useState)(!1);
              return (0, h.useEffect)((() => {
                e || (r(!1), o(!1))
              }), [e]), {
                eventHandlers: {
                  onLoad: () => {
                    e && (o(!0), r(!1))
                  },
                  onAbort: () => {
                    e && (o(!0), r(!1))
                  },
                  onError: () => {
                    e && (o(!0), r(!1))
                  }
                },
                error: t,
                loaded: n
              }
            })({
              enabled: fe
            }),
            {
              isHovered: ye
            } = (({
              enabled: e,
              ref: t
            }) => {
              const [r, n] = (0, h.useState)(!1);
              return (0, h.useEffect)((() => {
                n(!1)
              }), [t.current]), $("mouseenter", (() => {
                n(!0)
              }), t), $("mouseleave", (() => {
                n(!1)
              }), t), {
                isHovered: !!e && r
              }
            })({
              ref: M,
              enabled: fe
            }),
            {
              isFocused: be
            } = (({
              ref: e,
              onChange: t,
              onFocusIn: r,
              onFocusOut: n,
              enabled: o = !0
            }) => {
              const [i, a] = (0, h.useState)(!1);
              return $("focusin", (e => {
                a(!0), r?.(e), t?.(!0, e)
              }), e), $("focusout", (e => {
                a(!1), n?.(e), t?.(!1, e)
              }), e), {
                isFocused: !!o && i
              }
            })({
              ref: M,
              enabled: fe
            }),
            {
              isIdle: _e
            } = W({
              leave: 300,
              activity: 3e3,
              enabled: fe && !ye && !be && !ee
            }),
            we = function(e, t, r) {
              const n = Vi.fun(t) && t,
                {
                  reset: o,
                  sort: i,
                  trail: a = 0,
                  expires: s = !0,
                  exitBeforeEnter: l = !1,
                  onDestroyed: c,
                  ref: u,
                  config: d
                } = n ? n() : t,
                f = (0, h.useMemo)((() => n || 3 == arguments.length ? Ml() : void 0), []),
                p = Xi(e),
                m = [],
                g = (0, h.useRef)(null),
                v = o ? null : g.current;
              cs((() => {
                g.current = m
              })), ds((() => (Gi(m, (e => {
                f?.add(e.ctrl), e.ctrl.ref = f
              })), () => {
                Gi(g.current, (e => {
                  e.expired && clearTimeout(e.expirationId), Vs(e.ctrl, f), e.ctrl.stop(!0)
                }))
              })));
              const y = function(e, {
                  key: t,
                  keys: r = t
                }, n) {
                  if (null === r) {
                    const t = new Set;
                    return e.map((e => {
                      const r = n && n.find((r => r.item === e && "leave" !== r.phase && !t.has(r)));
                      return r ? (t.add(r), r.key) : Fl++
                    }))
                  }
                  return Vi.und(r) ? e : Vi.fun(r) ? e.map(r) : Xi(r)
                }(p, n ? n() : t, v),
                b = o && g.current || [];
              cs((() => Gi(b, (({
                ctrl: e,
                item: t,
                key: r
              }) => {
                Vs(e, f), js(c, t, r)
              }))));
              const _ = [];
              if (v && Gi(v, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = _[t] = y.indexOf(e.key)) && (m[t] = e)
                })), Gi(p, ((e, t) => {
                  m[t] || (m[t] = {
                    key: y[t],
                    item: e,
                    phase: "mount",
                    ctrl: new Cl
                  }, m[t].ctrl.item = e)
                })), _.length) {
                let e = -1;
                const {
                  leave: r
                } = n ? n() : t;
                Gi(_, ((t, n) => {
                  const o = v[n];
                  ~t ? (e = m.indexOf(o), m[e] = {
                    ...o,
                    item: p[t]
                  }) : r && m.splice(++e, 0, o)
                }))
              }
              Vi.fun(i) && m.sort(((e, t) => i(e.item, t.item)));
              let w = -a;
              const x = us(),
                E = Is(t),
                S = new Map,
                C = (0, h.useRef)(new Map),
                P = (0, h.useRef)(!1);
              Gi(m, ((e, r) => {
                const o = e.key,
                  i = e.phase,
                  c = n ? n() : t;
                let h, f;
                const p = js(c.delay || 0, o);
                if ("mount" == i) h = c.enter, f = "enter";
                else {
                  const e = y.indexOf(o) < 0;
                  if ("leave" != i)
                    if (e) h = c.leave, f = "leave";
                    else {
                      if (!(h = c.update)) return;
                      f = "update"
                    }
                  else {
                    if (e) return;
                    h = c.enter, f = "enter"
                  }
                }
                if (h = js(h, e.item, r), h = Vi.obj(h) ? Bs(h) : {
                    to: h
                  }, !h.config) {
                  const t = d || E.config;
                  h.config = js(t, e.item, r, f)
                }
                w += a;
                const m = {
                  ...E,
                  delay: p + w,
                  ref: u,
                  immediate: c.immediate,
                  reset: !1,
                  ...h
                };
                if ("enter" == f && Vi.und(m.from)) {
                  const o = n ? n() : t,
                    i = Vi.und(o.initial) || v ? o.from : o.initial;
                  m.from = js(i, e.item, r)
                }
                const {
                  onResolve: b
                } = m;
                m.onResolve = e => {
                  js(b, e);
                  const t = g.current,
                    r = t.find((e => e.key === o));
                  if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == r.phase) {
                      const t = js(s, r.item);
                      if (!1 !== t) {
                        const n = !0 === t ? 0 : t;
                        if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(x, n)))
                      }
                    }
                    e && t.some((e => e.expired)) && (C.current.delete(r), l && (P.current = !0), x())
                  }
                };
                const _ = Tl(e.ctrl, m);
                "leave" === f && l ? C.current.set(e, {
                  phase: f,
                  springs: _,
                  payload: m
                }) : S.set(e, {
                  phase: f,
                  springs: _,
                  payload: m
                })
              }));
              const O = (0, h.useContext)(Il),
                T = fs(O),
                k = O !== T && zs(O);
              cs((() => {
                k && Gi(m, (e => {
                  e.ctrl.start({
                    default: O
                  })
                }))
              }), [O]), Gi(S, ((e, t) => {
                if (C.current.size) {
                  const e = m.findIndex((e => e.key === t.key));
                  m.splice(e, 1)
                }
              })), cs((() => {
                Gi(C.current.size ? C.current : S, (({
                  phase: e,
                  payload: t
                }, r) => {
                  const {
                    ctrl: n
                  } = r;
                  r.phase = e, f?.add(n), k && "enter" == e && n.start({
                    default: O
                  }), t && (Us(n, t.ref), !n.ref && !f || P.current ? (n.start(t), P.current && (P.current = !1)) : n.update(t))
                }))
              }), o ? void 0 : r);
              const j = e => h.createElement(h.Fragment, null, m.map(((t, r) => {
                const {
                  springs: n
                } = S.get(t) || t.ctrl, o = e({
                  ...n
                }, t.item, t, r);
                return o && o.type ? h.createElement(o.type, {
                  ...o.props,
                  key: Vi.str(t.key) || Vi.num(t.key) ? t.key : t.ctrl.id,
                  ref: o.ref
                }) : o
              })));
              return f ? [j, f] : j
            }(fe, {
              ref: F,
              from: {
                opacity: 0
              },
              enter: {
                opacity: 1
              },
              leave: {
                opacity: 0
              },
              immediate: pe
            }),
            [xe] = Bl((() => ({
              ref: U,
              opacity: fe && !_e && ge && ne ? 1 : 0,
              immediate: pe
            })), [fe, _e, ge, ne]),
            Ee = (({
              position: e,
              defaultPosition: t,
              onPositionChange: r,
              minZoomLevel: n,
              maxZoomLevel: o,
              zoomLevelStep: i,
              zoomLevel: a,
              defaultZoomLevel: s,
              onZoomLevelChange: l,
              onRequestedClose: c,
              onRequestingClose: u,
              onClick: d,
              onDoubleClick: f,
              gestureSettings: p = fc,
              enabled: m
            }) => {
              const g = q(),
                [v = t, y] = K({
                  prop: e,
                  defaultProp: t,
                  onChange: r
                }),
                [b = s, _] = K({
                  prop: a,
                  defaultProp: s,
                  onChange: l
                }),
                w = (0, h.useRef)(null),
                x = (0, h.useRef)(null),
                [E, S] = (0, h.useState)(!1),
                C = b > n,
                P = b < o,
                O = b > n,
                T = b === n,
                [k, j] = Bl((() => ({
                  x: v[0],
                  y: v[1],
                  scale: b / 100,
                  from: {
                    scale: n / 100,
                    x: t[0],
                    y: t[1]
                  },
                  immediate: g,
                  config: dc
                }))),
                A = (e, {
                  origin: r,
                  delta: i,
                  animationConfig: a
                } = {}) => {
                  if (w.current && x.current) {
                    r || (r = [x.current.clientWidth / 2, x.current.clientHeight / 2]);
                    const s = uc(e, n, o);
                    if (s === b) return;
                    i || (i = (s - b) / 100);
                    const l = {
                      config: a || dc,
                      x: t[0],
                      y: t[1],
                      scale: b,
                      immediate: g
                    };
                    if (s <= n) y(t);
                    else {
                      const e = cc(w.current, x.current, (({
                        currentTranslate: [e, t],
                        contentRef: r,
                        pinchDelta: n,
                        scale: o,
                        touchOrigin: [i, a]
                      }) => {
                        if (!r?.current) return [0, 0];
                        const {
                          height: s,
                          left: l,
                          top: c,
                          width: u
                        } = r.current?.getBoundingClientRect();
                        return [-(i - l - u / 2) / o * n + e, -(a - c - s / 2) / o * n + t]
                      })({
                        currentTranslate: v,
                        contentRef: w,
                        pinchDelta: i,
                        scale: b / 100,
                        touchOrigin: r
                      }), s);
                      l.x = e.xy[0], l.y = e.xy[1], y(e.xy)
                    }
                    l.scale = s / 100, j(l), _(s)
                  }
                },
                L = (e, t) => e.y < t.top || e.y > t.bottom || e.x < t.left || e.x > t.right,
                {
                  handleClick: N
                } = (({
                  enabled: e = !0,
                  latency: t = 300,
                  onDoubleClick: r = () => null,
                  onSingleClick: n = () => null
                }) => {
                  const o = (0, h.useRef)(0),
                    i = (0, h.useRef)();
                  return {
                    handleClick: a => {
                      e && (o.current += 1, i.current = setTimeout((() => {
                        1 === o.current ? n(a) : 2 === o.current && r(a), o.current = 0
                      }), t))
                    }
                  }
                })({
                  onDoubleClick: e => {
                    if (w.current) {
                      const t = sc(w.current),
                        r = L(e, t) ? "overlay" : "content";
                      f?.({
                        target: r,
                        origin: [e.clientX, e.clientY],
                        contentBounds: t
                      })
                    }
                  },
                  onSingleClick: e => {
                    if (w.current && 0 === e.button) {
                      const t = sc(w.current),
                        r = L(e, t) ? "overlay" : "content";
                      d?.({
                        target: r,
                        origin: [e.clientX, e.clientY],
                        contentBounds: t
                      })
                    }
                  },
                  latency: 350
                });
              return {
                containerRef: x,
                contentRef: w,
                canPan: C,
                isPanning: E,
                position: v,
                zoomLevel: b,
                zoomIn: e => {
                  A(b + i, e)
                },
                zoomOut: e => {
                  A(b - i, e)
                },
                zoomTo: A,
                resetZoom: () => {
                  y(t), _(s);
                  const e = {
                    config: hc,
                    x: t[0],
                    y: t[1],
                    scale: s / 100,
                    immediate: g
                  };
                  j(e)
                },
                canZoomIn: P,
                canZoomOut: O,
                zoomLevelStep: i,
                maxZoomLevel: o,
                minZoomLevel: n,
                defaultZoomLevel: s,
                eventHandlers: {
                  onDrag: ({
                    first: e,
                    memo: r = [0, 0],
                    movement: [o, i],
                    pinching: a,
                    tap: s,
                    touches: l,
                    event: c
                  }) => {
                    if (!x.current || !w.current) return;
                    if (s) return void N(c);
                    if (o && i && !E && S(!0), l > 1) return;
                    if (a || b < n) return;
                    if (e) return v;
                    const {
                      horizontalOffset: d,
                      verticalOffset: h
                    } = cc(w.current, x.current, v, b), f = o * p.dragFactor, m = i * p.dragFactor, _ = {
                      config: dc,
                      x: t[0],
                      y: t[1],
                      immediate: g
                    };
                    if (b === n) {
                      const e = [r[0], r[1] + m],
                        {
                          y: t
                        } = lc(e, w.current),
                        n = uc(100 * Math.abs(t) / p.closePc, 0, 100);
                      _.config = hc, _.x = e[0], _.y = e[1], y(e), u?.(n)
                    } else {
                      const e = [ac(r[0] + f, -d, d), ac(r[1] + m, -h, h)];
                      _.x = e[0], _.y = e[1], y(e)
                    }
                    return j(_), r
                  },
                  onDragEnd: ({
                    memo: e
                  }) => {
                    if (x.current && w.current)
                      if (b === n) {
                        const {
                          y: e
                        } = lc(v, w.current);
                        if (uc(100 * Math.abs(e) / p.closePc, 0, 100) >= 100) c?.();
                        else {
                          const e = {
                            config: hc,
                            x: t[0],
                            y: t[1],
                            immediate: g
                          };
                          j(e), y(t), u?.(0)
                        }
                      } else if (void 0 !== e) {
                      const e = cc(w.current, x.current, v, b),
                        t = {
                          config: dc,
                          x: e.xy[0],
                          y: e.xy[1],
                          immediate: g
                        };
                      j(t), S(!1), y(e.xy)
                    }
                  },
                  onPinch: ({
                    cancel: e,
                    last: t,
                    offset: [r],
                    origin: [n, o],
                    first: i
                  }) => {
                    if (w.current && x.current) {
                      if (i && S(!0), t) return void e();
                      A(100 * r, {
                        origin: [n, o],
                        delta: r - b / 100
                      })
                    }
                  },
                  onPinchEnd: () => {
                    x.current && w.current && S(!1)
                  },
                  onWheel: ({
                    last: e,
                    event: t,
                    movement: r
                  }) => {
                    if (w.current && x.current) {
                      const n = -1 * r[1];
                      if (n && E && S(!0), e) return;
                      const o = [t.clientX, t.clientY],
                        i = b / 100,
                        a = i + n / p.scrollFactor;
                      A(100 * a, {
                        delta: a - i,
                        origin: o
                      })
                    }
                  },
                  onWheelEnd: () => {
                    x.current && w.current && S(!1)
                  }
                },
                getCursor: () => T && !m ? "zoom-out" : T && P ? "zoom-in" : C ? E ? "grabbing" : "grab" : "pointer",
                enabled: m,
                animation: k
              }
            })({
              enabled: re && fe,
              onClick: function() {
                J ? oe(!ne) : me()
              },
              onDoubleClick: function(e) {
                if (ee && Ee.containerRef.current && "content" === e.target)
                  if (Ee.zoomLevel > Ee.minZoomLevel) Ee.resetZoom();
                  else {
                    const t = ((e, t, r) => {
                      const n = e.height / (r / 100);
                      return 100 * t.height / n
                    })(e.contentBounds, Ee.containerRef.current.getBoundingClientRect(), Ee.zoomLevel);
                    Ee.zoomTo(t, {
                      animationConfig: hc
                    })
                  }
              },
              onRequestedClose: me,
              onRequestingClose: e => {
                if (ce) {
                  const t = 1,
                    r = .25,
                    n = uc(t - e * (t - r) / 100, r, t);
                  F.start({
                    opacity: n
                  });
                  const o = uc(1 - e / 100, 0, 1);
                  U.start({
                    opacity: o
                  })
                }
              },
              zoomLevel: _,
              defaultZoomLevel: w,
              minZoomLevel: x,
              maxZoomLevel: E,
              zoomLevelStep: S,
              onZoomLevelChange: C,
              defaultPosition: [0, 0],
              gestureSettings: P
            }),
            Se = Bl({
              ref: G,
              from: {
                x: 0,
                y: 0,
                scale: 1,
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                aspectRatio: l,
                position: "fixed",
                objectFit: d,
                objectPosition: c,
                opacity: 0
              },
              onStart: () => {
                fe || ae(!1)
              },
              onRest: async () => {
                fe ? ae(!0) : (Ee.resetZoom(), oe(!0))
              }
            }),
            Ce = Bl({
              opacity: fe && ge && ie ? 1 : 0,
              immediate: !0,
              onRest: () => {
                fe && ce && ge && G.start({
                  opacity: 0,
                  immediate: !0
                })
              }
            }),
            Pe = [
              [G, F, U],
              [0, 0, .1]
            ];
          async function Oe(e) {
            return e.complete ? Promise.resolve(e) : new Promise(((t, r) => {
              e.onload = () => t(e), e.onerror = r
            }))
          }! function(e, t, r = 1e3) {
            cs((() => {
              if (t) {
                let n = 0;
                Gi(e, ((e, o) => {
                  const i = e.current;
                  if (i.length) {
                    let a = r * t[o];
                    isNaN(a) ? a = n : n = a, Gi(i, (e => {
                      Gi(e.queue, (e => {
                        const t = e.delay;
                        e.delay = e => a + js(t || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let t = Promise.resolve();
                Gi(e, (e => {
                  const r = e.current;
                  if (r.length) {
                    const n = r.map((e => {
                      const t = e.queue;
                      return e.queue = [], t
                    }));
                    t = t.then((() => (Gi(r, ((e, t) => Gi(n[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(fe ? Pe[0] : Pe[0].reverse(), Pe[1]);
          const Te = j ? (0, u.jsx)(p.DX, {
            className: ig,
            ref: null,
            children: A
          }) : (0, u.jsx)("img", {
            alt: "",
            src: s,
            "aria-hidden": !0,
            loading: i,
            className: ig,
            crossOrigin: n,
            referrerPolicy: a
          });
          (0, h.useEffect)((() => {
            oe(!ee)
          }), [ee]);
          const {
            contrastMode: ke
          } = (() => {
            const {
              colorScheme: e,
              defaultColorScheme: t,
              contrastMode: r,
              defaultContrastMode: n,
              platformScale: o,
              defaultPlatformScale: i,
              platformScaleRatios: a,
              platformScaleBreakpoints: s,
              locale: l
            } = Qn();
            return {
              colorScheme: e,
              defaultColorScheme: t,
              contrastMode: r,
              defaultContrastMode: n,
              platformScale: o,
              defaultPlatformScale: i,
              platformScaleRatios: a,
              platformScaleBreakpoints: s,
              locale: l
            }
          })(), je = ((e, t) => [Kn.tokens, Nh("dark", t)].join(" "))(0, ke);
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Dv, {
              open: se,
              children: (0, u.jsxs)("div", {
                className: (0, L.A)("foundry_hcgxh_1a74xwb0", N),
                children: [(0, u.jsx)(Mv, {
                  asChild: !0,
                  children: (0, u.jsxs)(ic.button, {
                    className: "foundry_hcgxh_1a74xwb3 foundry_hcgxh_1d5mo5m0 foundry_hcgxh_1a74xwb1",
                    onClick: async () => {
                      I && le(!se)
                    },
                    ref: B,
                    "data-idle": !ce,
                    style: {
                      aspectRatio: l,
                      objectPosition: c,
                      objectFit: d
                    },
                    children: [(0, u.jsx)(p.s6, {
                      children: Q.formatMessage(kh)
                    }), Te, we(((e, t) => y && !t && (0, u.jsx)(ic.span, {
                      className: "foundry_hcgxh_1a74xwb5",
                      style: e,
                      children: (0, u.jsx)(z.Plus, {
                        label: ""
                      })
                    })))]
                  })
                }), (0, u.jsxs)(Bv, {
                  ...!R && {
                    container: de
                  },
                  children: [(0, u.jsx)(ic.img, {
                    "aria-hidden": !0,
                    src: Gv,
                    ref: H,
                    className: "foundry_hcgxh_1a74xwb2 foundry_hcgxh_1a74xwb1",
                    style: {
                      aspectRatio: l,
                      backgroundPosition: c,
                      backgroundSize: d,
                      ...Se
                    }
                  }), we(((o, s) => s && (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(Vv, {
                      className: "foundry_hcgxh_1a74xwb8",
                      style: o
                    }), (0, u.jsxs)(Uv, {
                      "data-testid": O,
                      onEscapeKeyDown: me,
                      onOpenAutoFocus: qv,
                      onCloseAutoFocus: e => ((e, t) => {
                        e?.preventDefault(), t.current?.focus({
                          preventScroll: !0
                        })
                      })(e, B),
                      className: je,
                      children: [(0, u.jsx)(p.s6, {
                        children: (0, u.jsx)(zv, {
                          children: Q.formatMessage(jh)
                        })
                      }), (0, u.jsx)(p.s6, {
                        children: (0, u.jsx)(Fv, {
                          children: r || Q.formatMessage(Ah, {
                            alt: t
                          })
                        })
                      }), (0, u.jsx)(ic.div, {
                        className: "foundry_hcgxh_1a74xwb6",
                        style: Ce,
                        children: (0, u.jsx)(pc, {
                          ...Ee,
                          children: (0, u.jsx)("img", {
                            alt: "",
                            src: e,
                            ref: D,
                            loading: i,
                            className: "foundry_hcgxh_1a74xwba",
                            crossOrigin: n,
                            "aria-hidden": !0,
                            referrerPolicy: a,
                            style: {
                              cursor: Ee.getCursor()
                            },
                            ...ve
                          })
                        })
                      }), (0, u.jsx)(ic.div, {
                        className: "foundry_hcgxh_1a74xwb9",
                        style: xe,
                        children: (0, u.jsx)(og, {
                          ...Ee,
                          ref: M,
                          onClose: me,
                          caption: r,
                          onDownload: () => (e => {
                            const t = document.createElement("a");
                            t.href = e, t.download = e.substring(e.lastIndexOf("/") + 1), document.body.appendChild(t), t.click(), document.body.removeChild(t)
                          })(e),
                          showDownloadButton: b,
                          showZoomControls: T
                        })
                      })]
                    })]
                  })))]
                })]
              })
            }), !R && (0, u.jsx)("div", {
              ref: he
            })]
          })
        },
        Kv = e => {
          const t = (() => {
            const {
              locale: e
            } = Qn();
            return e
          })();
          return (0, u.jsx)(Th, {
            messages: Lh,
            locale: t,
            children: (0, u.jsx)(Wv, {
              ...e
            })
          })
        };
      var $v = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Yv = [" ", "Enter"],
        Zv = "Select",
        [Qv, Jv, ey] = (0, Gh.N)(Zv),
        [ty, ry] = (0, Mh.A)(Zv, [ey, Kp]),
        ny = Kp(),
        [oy, iy] = ty(Zv),
        [ay, sy] = ty(Zv),
        ly = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            value: a,
            defaultValue: s,
            onValueChange: l,
            dir: c,
            name: d,
            autoComplete: f,
            disabled: p,
            required: m,
            form: g
          } = e, v = ny(t), [y, b] = h.useState(null), [_, w] = h.useState(null), [x, E] = h.useState(!1), S = (0, Hh.jH)(c), [C, P] = (0, Bh.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Zv
          }), [O, T] = (0, Bh.i)({
            prop: a,
            defaultProp: s,
            onChange: l,
            caller: Zv
          }), k = h.useRef(null), j = !y || g || !!y.closest("form"), [A, L] = h.useState(new Set), N = Array.from(A).map((e => e.props.value)).join(";");
          return (0, u.jsx)(um, {
            ...v,
            children: (0, u.jsxs)(oy, {
              required: m,
              scope: t,
              trigger: y,
              onTriggerChange: b,
              valueNode: _,
              onValueNodeChange: w,
              valueNodeHasChildren: x,
              onValueNodeHasChildrenChange: E,
              contentId: (0, kp.B)(),
              value: O,
              onValueChange: T,
              open: C,
              onOpenChange: P,
              dir: S,
              triggerPointerDownPosRef: k,
              disabled: p,
              children: [(0, u.jsx)(Qv.Provider, {
                scope: t,
                children: (0, u.jsx)(ay, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: h.useCallback((e => {
                    L((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: h.useCallback((e => {
                    L((t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    }))
                  }), []),
                  children: r
                })
              }), j ? (0, u.jsxs)(Uy, {
                "aria-hidden": !0,
                required: m,
                tabIndex: -1,
                name: d,
                autoComplete: f,
                value: O,
                onChange: e => T(e.target.value),
                disabled: p,
                form: g,
                children: [void 0 === O ? (0, u.jsx)("option", {
                  value: ""
                }) : null, Array.from(A)]
              }, N) : null]
            })
          })
        };
      ly.displayName = Zv;
      var cy = "SelectTrigger",
        uy = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, i = ny(r), a = iy(cy, r), s = a.disabled || n, l = (0, Dh.s)(t, a.onTriggerChange), c = Jv(r), d = h.useRef("touch"), [f, p, m] = qy((e => {
            const t = c().filter((e => !e.disabled)),
              r = t.find((e => e.value === a.value)),
              n = Xy(t, e, r);
            void 0 !== n && a.onValueChange(n.value)
          })), g = e => {
            s || (a.onOpenChange(!0), m()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, u.jsx)(dm, {
            asChild: !0,
            ...i,
            children: (0, u.jsx)(Uh.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": a.contentId,
              "aria-expanded": a.open,
              "aria-required": a.required,
              "aria-autocomplete": "none",
              dir: a.dir,
              "data-state": a.open ? "open" : "closed",
              disabled: s,
              "data-disabled": s ? "" : void 0,
              "data-placeholder": Gy(a.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: (0, Ih.m)(o.onClick, (e => {
                e.currentTarget.focus(), "mouse" !== d.current && g(e)
              })),
              onPointerDown: (0, Ih.m)(o.onPointerDown, (e => {
                d.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (g(e), e.preventDefault())
              })),
              onKeyDown: (0, Ih.m)(o.onKeyDown, (e => {
                const t = "" !== f.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || p(e.key), t && " " === e.key || $v.includes(e.key) && (g(), e.preventDefault())
              }))
            })
          })
        }));
      uy.displayName = cy;
      var dy = "SelectValue",
        hy = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: i,
            placeholder: a = "",
            ...s
          } = e, l = iy(dy, r), {
            onValueNodeHasChildrenChange: c
          } = l, d = void 0 !== i, h = (0, Dh.s)(t, l.onValueNodeChange);
          return (0, Fh.N)((() => {
            c(d)
          }), [c, d]), (0, u.jsx)(Uh.sG.span, {
            ...s,
            ref: h,
            style: {
              pointerEvents: "none"
            },
            children: Gy(l.value) ? (0, u.jsx)(u.Fragment, {
              children: a
            }) : i
          })
        }));
      hy.displayName = dy;
      var fy = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, u.jsx)(Uh.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      }));
      fy.displayName = "SelectIcon";
      var py = e => (0, u.jsx)(pm, {
        asChild: !0,
        ...e
      });
      py.displayName = "SelectPortal";
      var my = "SelectContent",
        gy = h.forwardRef(((e, t) => {
          const r = iy(my, e.__scopeSelect),
            [n, o] = h.useState();
          if ((0, Fh.N)((() => {
              o(new DocumentFragment)
            }), []), !r.open) {
            const t = n;
            return t ? Qt.createPortal((0, u.jsx)(yy, {
              scope: e.__scopeSelect,
              children: (0, u.jsx)(Qv.Slot, {
                scope: e.__scopeSelect,
                children: (0, u.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, u.jsx)(wy, {
            ...e,
            ref: t
          })
        }));
      gy.displayName = my;
      var vy = 10,
        [yy, by] = ty(my),
        _y = (0, hp.TL)("SelectContent.RemoveScroll"),
        wy = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            side: s,
            sideOffset: l,
            align: c,
            alignOffset: d,
            arrowPadding: f,
            collisionBoundary: p,
            collisionPadding: m,
            sticky: g,
            hideWhenDetached: v,
            avoidCollisions: y,
            ...b
          } = e, _ = iy(my, r), [w, x] = h.useState(null), [E, S] = h.useState(null), C = (0, Dh.s)(t, (e => x(e))), [P, O] = h.useState(null), [T, k] = h.useState(null), j = Jv(r), [A, L] = h.useState(!1), N = h.useRef(!1);
          h.useEffect((() => {
            if (w) return nv(w)
          }), [w]), vg();
          const R = h.useCallback((e => {
              const [t, ...r] = j().map((e => e.ref.current)), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && E && (E.scrollTop = 0), r === n && E && (E.scrollTop = E.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }), [j, E]),
            I = h.useCallback((() => R([P, w])), [R, P, w]);
          h.useEffect((() => {
            A && I()
          }), [A, I]);
          const {
            onOpenChange: D,
            triggerPointerDownPosRef: M
          } = _;
          h.useEffect((() => {
            if (w) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (M.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (M.current?.y ?? 0))
                  }
                },
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : w.contains(r.target) || D(!1), document.removeEventListener("pointermove", t), M.current = null
                };
              return null !== M.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }), [w, D, M]), h.useEffect((() => {
            const e = () => D(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [D]);
          const [B, H] = qy((e => {
            const t = j().filter((e => !e.disabled)),
              r = t.find((e => e.ref.current === document.activeElement)),
              n = Xy(t, e, r);
            n && setTimeout((() => n.ref.current.focus()))
          })), z = h.useCallback(((e, t, r) => {
            const n = !N.current && !r;
            (void 0 !== _.value && _.value === t || n) && (O(e), n && (N.current = !0))
          }), [_.value]), F = h.useCallback((() => w?.focus()), [w]), V = h.useCallback(((e, t, r) => {
            const n = !N.current && !r;
            (void 0 !== _.value && _.value === t || n) && k(e)
          }), [_.value]), U = "popper" === n ? Ey : xy, G = U === Ey ? {
            side: s,
            sideOffset: l,
            align: c,
            alignOffset: d,
            arrowPadding: f,
            collisionBoundary: p,
            collisionPadding: m,
            sticky: g,
            hideWhenDetached: v,
            avoidCollisions: y
          } : {};
          return (0, u.jsx)(yy, {
            scope: r,
            content: w,
            viewport: E,
            onViewportChange: S,
            itemRefCallback: z,
            selectedItem: P,
            onItemLeave: F,
            itemTextRefCallback: V,
            focusSelectedItem: I,
            selectedItemText: T,
            position: n,
            isPositioned: A,
            searchRef: B,
            children: (0, u.jsx)(Zg, {
              as: _y,
              allowPinchZoom: !0,
              children: (0, u.jsx)(cg, {
                asChild: !0,
                trapped: _.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, Ih.m)(o, (e => {
                  _.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, u.jsx)(Pp, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: a,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => _.onOpenChange(!1),
                  children: (0, u.jsx)(U, {
                    role: "listbox",
                    id: _.contentId,
                    "data-state": _.open ? "open" : "closed",
                    dir: _.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...b,
                    ...G,
                    onPlaced: () => L(!0),
                    ref: C,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: (0, Ih.m)(b.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || H(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = j().filter((e => !e.disabled));
                        let r = t.map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout((() => R(r))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      wy.displayName = "SelectContentImpl";
      var xy = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, i = iy(my, r), a = by(my, r), [s, l] = h.useState(null), [c, d] = h.useState(null), f = (0, Dh.s)(t, (e => d(e))), p = Jv(r), m = h.useRef(!1), g = h.useRef(!0), {
          viewport: v,
          selectedItem: y,
          selectedItemText: b,
          focusSelectedItem: _
        } = a, w = h.useCallback((() => {
          if (i.trigger && i.valueNode && s && c && v && y && b) {
            const e = i.trigger.getBoundingClientRect(),
              t = c.getBoundingClientRect(),
              r = i.valueNode.getBoundingClientRect(),
              o = b.getBoundingClientRect();
            if ("rtl" !== i.dir) {
              const n = o.left - t.left,
                i = r.left - n,
                a = e.left - i,
                l = e.width + a,
                c = Math.max(l, t.width),
                u = window.innerWidth - vy,
                d = Rh(i, [vy, Math.max(vy, u - c)]);
              s.style.minWidth = l + "px", s.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                i = window.innerWidth - r.right - n,
                a = window.innerWidth - e.right - i,
                l = e.width + a,
                c = Math.max(l, t.width),
                u = window.innerWidth - vy,
                d = Rh(i, [vy, Math.max(vy, u - c)]);
              s.style.minWidth = l + "px", s.style.right = d + "px"
            }
            const a = p(),
              l = window.innerHeight - 2 * vy,
              u = v.scrollHeight,
              d = window.getComputedStyle(c),
              h = parseInt(d.borderTopWidth, 10),
              f = parseInt(d.paddingTop, 10),
              g = parseInt(d.borderBottomWidth, 10),
              _ = h + f + u + parseInt(d.paddingBottom, 10) + g,
              w = Math.min(5 * y.offsetHeight, _),
              x = window.getComputedStyle(v),
              E = parseInt(x.paddingTop, 10),
              S = parseInt(x.paddingBottom, 10),
              C = e.top + e.height / 2 - vy,
              P = l - C,
              O = y.offsetHeight / 2,
              T = h + f + (y.offsetTop + O),
              k = _ - T;
            if (T <= C) {
              const e = a.length > 0 && y === a[a.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = c.clientHeight - v.offsetTop - v.offsetHeight,
                r = T + Math.max(P, O + (e ? S : 0) + t + g);
              s.style.height = r + "px"
            } else {
              const e = a.length > 0 && y === a[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(C, h + v.offsetTop + (e ? E : 0) + O) + k;
              s.style.height = t + "px", v.scrollTop = T - C + v.offsetTop
            }
            s.style.margin = `${vy}px 0`, s.style.minHeight = w + "px", s.style.maxHeight = l + "px", n?.(), requestAnimationFrame((() => m.current = !0))
          }
        }), [p, i.trigger, i.valueNode, s, c, v, y, b, i.dir, n]);
        (0, Fh.N)((() => w()), [w]);
        const [x, E] = h.useState();
        (0, Fh.N)((() => {
          c && E(window.getComputedStyle(c).zIndex)
        }), [c]);
        const S = h.useCallback((e => {
          e && !0 === g.current && (w(), _?.(), g.current = !1)
        }), [w, _]);
        return (0, u.jsx)(Sy, {
          scope: r,
          contentWrapper: s,
          shouldExpandOnScrollRef: m,
          onScrollButtonChange: S,
          children: (0, u.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: x
            },
            children: (0, u.jsx)(Uh.sG.div, {
              ...o,
              ref: f,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      }));
      xy.displayName = "SelectItemAlignedPosition";
      var Ey = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = vy,
          ...i
        } = e, a = ny(r);
        return (0, u.jsx)(hm, {
          ...a,
          ...i,
          ref: t,
          align: n,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...i.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      }));
      Ey.displayName = "SelectPopperPosition";
      var [Sy, Cy] = ty(my, {}), Py = "SelectViewport", Oy = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, i = by(Py, r), a = Cy(Py, r), s = (0, Dh.s)(t, i.onViewportChange), l = h.useRef(0);
        return (0, u.jsxs)(u.Fragment, {
          children: [(0, u.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, u.jsx)(Qv.Slot, {
            scope: r,
            children: (0, u.jsx)(Uh.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...o,
              ref: s,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...o.style
              },
              onScroll: (0, Ih.m)(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = a;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * vy,
                      o = parseFloat(r.style.minHeight),
                      i = parseFloat(r.style.height),
                      a = Math.max(o, i);
                    if (a < n) {
                      const o = a + e,
                        i = Math.min(n, o),
                        s = o - i;
                      r.style.height = i + "px", "0px" === r.style.bottom && (t.scrollTop = s > 0 ? s : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                l.current = t.scrollTop
              }))
            })
          })]
        })
      }));
      Oy.displayName = Py;
      var Ty = "SelectGroup",
        [ky, jy] = ty(Ty);
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, kp.B)();
        return (0, u.jsx)(ky, {
          scope: r,
          id: o,
          children: (0, u.jsx)(Uh.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      })).displayName = Ty;
      var Ay = "SelectLabel";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = jy(Ay, r);
        return (0, u.jsx)(Uh.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      })).displayName = Ay;
      var Ly = "SelectItem",
        [Ny, Ry] = ty(Ly),
        Iy = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: i,
            ...a
          } = e, s = iy(Ly, r), l = by(Ly, r), c = s.value === n, [d, f] = h.useState(i ?? ""), [p, m] = h.useState(!1), g = (0, Dh.s)(t, (e => l.itemRefCallback?.(e, n, o))), v = (0, kp.B)(), y = h.useRef("touch"), b = () => {
            o || (s.onValueChange(n), s.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, u.jsx)(Ny, {
            scope: r,
            value: n,
            disabled: o,
            textId: v,
            isSelected: c,
            onItemTextChange: h.useCallback((e => {
              f((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, u.jsx)(Qv.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: d,
              children: (0, u.jsx)(Uh.sG.div, {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": c && p,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: g,
                onFocus: (0, Ih.m)(a.onFocus, (() => m(!0))),
                onBlur: (0, Ih.m)(a.onBlur, (() => m(!1))),
                onClick: (0, Ih.m)(a.onClick, (() => {
                  "mouse" !== y.current && b()
                })),
                onPointerUp: (0, Ih.m)(a.onPointerUp, (() => {
                  "mouse" === y.current && b()
                })),
                onPointerDown: (0, Ih.m)(a.onPointerDown, (e => {
                  y.current = e.pointerType
                })),
                onPointerMove: (0, Ih.m)(a.onPointerMove, (e => {
                  y.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: (0, Ih.m)(a.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                })),
                onKeyDown: (0, Ih.m)(a.onKeyDown, (e => {
                  "" !== l.searchRef?.current && " " === e.key || (Yv.includes(e.key) && b(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      Iy.displayName = Ly;
      var Dy = "SelectItemText",
        My = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...i
          } = e, a = iy(Dy, r), s = by(Dy, r), l = Ry(Dy, r), c = sy(Dy, r), [d, f] = h.useState(null), p = (0, Dh.s)(t, (e => f(e)), l.onItemTextChange, (e => s.itemTextRefCallback?.(e, l.value, l.disabled))), m = d?.textContent, g = h.useMemo((() => (0, u.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: m
          }, l.value)), [l.disabled, l.value, m]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: y
          } = c;
          return (0, Fh.N)((() => (v(g), () => y(g))), [v, y, g]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Uh.sG.span, {
              id: l.textId,
              ...i,
              ref: p
            }), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? Qt.createPortal(i.children, a.valueNode) : null]
          })
        }));
      My.displayName = Dy;
      var By = "SelectItemIndicator";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Ry(By, r).isSelected ? (0, u.jsx)(Uh.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      })).displayName = By;
      var Hy = "SelectScrollUpButton";
      h.forwardRef(((e, t) => {
        const r = by(Hy, e.__scopeSelect),
          n = Cy(Hy, e.__scopeSelect),
          [o, i] = h.useState(!1),
          a = (0, Dh.s)(t, n.onScrollButtonChange);
        return (0, Fh.N)((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, u.jsx)(Fy, {
          ...e,
          ref: a,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      })).displayName = Hy;
      var zy = "SelectScrollDownButton";
      h.forwardRef(((e, t) => {
        const r = by(zy, e.__scopeSelect),
          n = Cy(zy, e.__scopeSelect),
          [o, i] = h.useState(!1),
          a = (0, Dh.s)(t, n.onScrollButtonChange);
        return (0, Fh.N)((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              i(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, u.jsx)(Fy, {
          ...e,
          ref: a,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      })).displayName = zy;
      var Fy = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, i = by("SelectScrollButton", r), a = h.useRef(null), s = Jv(r), l = h.useCallback((() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }), []);
        return h.useEffect((() => () => l()), [l]), (0, Fh.N)((() => {
          const e = s().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [s]), (0, u.jsx)(Uh.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, Ih.m)(o.onPointerDown, (() => {
            null === a.current && (a.current = window.setInterval(n, 50))
          })),
          onPointerMove: (0, Ih.m)(o.onPointerMove, (() => {
            i.onItemLeave?.(), null === a.current && (a.current = window.setInterval(n, 50))
          })),
          onPointerLeave: (0, Ih.m)(o.onPointerLeave, (() => {
            l()
          }))
        })
      }));
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, u.jsx)(Uh.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var Vy = "SelectArrow";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = ny(r), i = iy(Vy, r), a = by(Vy, r);
        return i.open && "popper" === a.position ? (0, u.jsx)(fm, {
          ...o,
          ...n,
          ref: t
        }) : null
      })).displayName = Vy;
      var Uy = h.forwardRef((({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = h.useRef(null),
          i = (0, Dh.s)(n, o),
          a = zh(t);
        return h.useEffect((() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLSelectElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (a !== t && n) {
            const r = new Event("change", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }), [a, t]), (0, u.jsx)(Uh.sG.select, {
          ...r,
          style: {
            ...gm,
            ...r.style
          },
          ref: i,
          defaultValue: t
        })
      }));

      function Gy(e) {
        return "" === e || void 0 === e
      }

      function qy(e) {
        const t = xp(e),
          r = h.useRef(""),
          n = h.useRef(0),
          o = h.useCallback((e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout((() => e("")), 1e3))
              }(o)
          }), [t]),
          i = h.useCallback((() => {
            r.current = "", window.clearTimeout(n.current)
          }), []);
        return h.useEffect((() => () => window.clearTimeout(n.current)), []), [r, o, i]
      }

      function Xy(e, t, r) {
        const n = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === n.length && (i = i.filter((e => e !== r)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(n.toLowerCase())));
        return l !== r ? l : void 0
      }
      Uy.displayName = "SelectBubbleInput";
      var Wy = ly,
        Ky = uy,
        $y = hy,
        Yy = fy,
        Zy = py,
        Qy = gy,
        Jy = Oy,
        eb = Iy,
        tb = My,
        rb = "ScrollArea",
        [nb, ob] = (0, Mh.A)(rb),
        [ib, ab] = nb(rb),
        sb = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...a
          } = e, [s, l] = h.useState(null), [c, d] = h.useState(null), [f, p] = h.useState(null), [m, g] = h.useState(null), [v, y] = h.useState(null), [b, _] = h.useState(0), [w, x] = h.useState(0), [E, S] = h.useState(!1), [C, P] = h.useState(!1), O = (0, Dh.s)(t, (e => l(e))), T = (0, Hh.jH)(o);
          return (0, u.jsx)(ib, {
            scope: r,
            type: n,
            dir: T,
            scrollHideDelay: i,
            scrollArea: s,
            viewport: c,
            onViewportChange: d,
            content: f,
            onContentChange: p,
            scrollbarX: m,
            onScrollbarXChange: g,
            scrollbarXEnabled: E,
            onScrollbarXEnabledChange: S,
            scrollbarY: v,
            onScrollbarYChange: y,
            scrollbarYEnabled: C,
            onScrollbarYEnabledChange: P,
            onCornerWidthChange: _,
            onCornerHeightChange: x,
            children: (0, u.jsx)(Uh.sG.div, {
              dir: T,
              ...a,
              ref: O,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": b + "px",
                "--radix-scroll-area-corner-height": w + "px",
                ...e.style
              }
            })
          })
        }));
      sb.displayName = rb;
      var lb = "ScrollAreaViewport",
        cb = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...i
          } = e, a = ab(lb, r), s = h.useRef(null), l = (0, Dh.s)(t, s, a.onViewportChange);
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, u.jsx)(Uh.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...i,
              ref: l,
              style: {
                overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, u.jsx)("div", {
                ref: a.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: n
              })
            })]
          })
        }));
      cb.displayName = lb;
      var ub = "ScrollAreaScrollbar",
        db = h.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = ab(ub, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: a
          } = o, s = "horizontal" === e.orientation;
          return h.useEffect((() => (s ? i(!0) : a(!0), () => {
            s ? i(!1) : a(!1)
          })), [s, i, a]), "hover" === o.type ? (0, u.jsx)(hb, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, u.jsx)(fb, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, u.jsx)(pb, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, u.jsx)(mb, {
            ...n,
            ref: t
          }) : null
        }));
      db.displayName = ub;
      var hb = h.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = ab(ub, e.__scopeScrollArea), [i, a] = h.useState(!1);
          return h.useEffect((() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = () => {
                  window.clearTimeout(t), a(!0)
                },
                n = () => {
                  t = window.setTimeout((() => a(!1)), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }), [o.scrollArea, o.scrollHideDelay]), (0, u.jsx)(mm.C, {
            present: r || i,
            children: (0, u.jsx)(pb, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        })),
        fb = h.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = ab(ub, e.__scopeScrollArea), i = "horizontal" === e.orientation, a = Nb((() => l("SCROLL_END")), 100), [s, l] = (c = {
            hidden: {
              SCROLL: "scrolling"
            },
            scrolling: {
              SCROLL_END: "idle",
              POINTER_ENTER: "interacting"
            },
            interacting: {
              SCROLL: "interacting",
              POINTER_LEAVE: "idle"
            },
            idle: {
              HIDE: "hidden",
              SCROLL: "scrolling",
              POINTER_ENTER: "interacting"
            }
          }, h.useReducer(((e, t) => c[e][t] ?? e), "hidden"));
          var c;
          return h.useEffect((() => {
            if ("idle" === s) {
              const e = window.setTimeout((() => l("HIDE")), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [s, o.scrollHideDelay, l]), h.useEffect((() => {
            const e = o.viewport,
              t = i ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (l("SCROLL"), a()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }), [o.viewport, i, l, a]), (0, u.jsx)(mm.C, {
            present: r || "hidden" !== s,
            children: (0, u.jsx)(mb, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, Ih.m)(e.onPointerEnter, (() => l("POINTER_ENTER"))),
              onPointerLeave: (0, Ih.m)(e.onPointerLeave, (() => l("POINTER_LEAVE")))
            })
          })
        })),
        pb = h.forwardRef(((e, t) => {
          const r = ab(ub, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, a] = h.useState(!1),
            s = "horizontal" === e.orientation,
            l = Nb((() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(s ? e : t)
              }
            }), 10);
          return Rb(r.viewport, l), Rb(r.content, l), (0, u.jsx)(mm.C, {
            present: n || i,
            children: (0, u.jsx)(mb, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        mb = h.forwardRef(((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = ab(ub, e.__scopeScrollArea), i = h.useRef(null), a = h.useRef(0), [s, l] = h.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = Ob(s.viewport, s.content), d = {
            ...n,
            sizes: s,
            onSizesChange: l,
            hasThumb: Boolean(c > 0 && c < 1),
            onThumbChange: e => i.current = e,
            onThumbPointerUp: () => a.current = 0,
            onThumbPointerDown: e => a.current = e
          };

          function f(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = Tb(r),
                i = t || o / 2,
                a = o - i,
                s = r.scrollbar.paddingStart + i,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - a,
                c = r.content - r.viewport;
              return jb([s, l], "ltr" === n ? [0, c] : [-1 * c, 0])(e)
            }(e, a.current, s, t)
          }
          return "horizontal" === r ? (0, u.jsx)(gb, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = kb(o.viewport.scrollLeft, s, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = f(e, o.dir))
            }
          }) : "vertical" === r ? (0, u.jsx)(vb, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = kb(o.viewport.scrollTop, s);
                i.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = f(e))
            }
          }) : null
        })),
        gb = h.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = ab(ub, e.__scopeScrollArea), [a, s] = h.useState(), l = h.useRef(null), c = (0, Dh.s)(t, l, i.onScrollbarXChange);
          return h.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, u.jsx)(_b, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Tb(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), Ab(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: Pb(a.paddingLeft),
                  paddingEnd: Pb(a.paddingRight)
                }
              })
            }
          })
        })),
        vb = h.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = ab(ub, e.__scopeScrollArea), [a, s] = h.useState(), l = h.useRef(null), c = (0, Dh.s)(t, l, i.onScrollbarYChange);
          return h.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, u.jsx)(_b, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Tb(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), Ab(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: Pb(a.paddingTop),
                  paddingEnd: Pb(a.paddingBottom)
                }
              })
            }
          })
        })),
        [yb, bb] = nb(ub),
        _b = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: i,
            onThumbPointerUp: a,
            onThumbPointerDown: s,
            onThumbPositionChange: l,
            onDragScroll: c,
            onWheelScroll: d,
            onResize: f,
            ...p
          } = e, m = ab(ub, r), [g, v] = h.useState(null), y = (0, Dh.s)(t, (e => v(e))), b = h.useRef(null), _ = h.useRef(""), w = m.viewport, x = n.content - n.viewport, E = xp(d), S = xp(l), C = Nb(f, 10);

          function P(e) {
            if (b.current) {
              const t = e.clientX - b.current.left,
                r = e.clientY - b.current.top;
              c({
                x: t,
                y: r
              })
            }
          }
          return h.useEffect((() => {
            const e = e => {
              const t = e.target,
                r = g?.contains(t);
              r && E(e, x)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [w, g, x, E]), h.useEffect(S, [n, S]), Rb(g, C), Rb(m.content, C), (0, u.jsx)(yb, {
            scope: r,
            scrollbar: g,
            hasThumb: o,
            onThumbChange: xp(i),
            onThumbPointerUp: xp(a),
            onThumbPositionChange: S,
            onThumbPointerDown: xp(s),
            children: (0, u.jsx)(Uh.sG.div, {
              ...p,
              ref: y,
              style: {
                position: "absolute",
                ...p.style
              },
              onPointerDown: (0, Ih.m)(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = g.getBoundingClientRect(), _.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), P(e))
              })),
              onPointerMove: (0, Ih.m)(e.onPointerMove, P),
              onPointerUp: (0, Ih.m)(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = _.current, m.viewport && (m.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        wb = "ScrollAreaThumb",
        xb = h.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = bb(wb, e.__scopeScrollArea);
          return (0, u.jsx)(mm.C, {
            present: r || o.hasThumb,
            children: (0, u.jsx)(Eb, {
              ref: t,
              ...n
            })
          })
        })),
        Eb = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, i = ab(wb, r), a = bb(wb, r), {
            onThumbPositionChange: s
          } = a, l = (0, Dh.s)(t, (e => a.onThumbChange(e))), c = h.useRef(void 0), d = Nb((() => {
            c.current && (c.current(), c.current = void 0)
          }), 100);
          return h.useEffect((() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (d(), !c.current) {
                  const t = Lb(e, s);
                  c.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [i.viewport, d, s]), (0, u.jsx)(Uh.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, Ih.m)(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              a.onThumbPointerDown({
                x: r,
                y: n
              })
            })),
            onPointerUp: (0, Ih.m)(e.onPointerUp, a.onThumbPointerUp)
          })
        }));
      xb.displayName = wb;
      var Sb = "ScrollAreaCorner";
      h.forwardRef(((e, t) => {
        const r = ab(Sb, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, u.jsx)(Cb, {
          ...e,
          ref: t
        }) : null
      })).displayName = Sb;
      var Cb = h.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = ab(Sb, r), [i, a] = h.useState(0), [s, l] = h.useState(0), c = Boolean(i && s);
        return Rb(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        })), Rb(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        })), c ? (0, u.jsx)(Uh.sG.div, {
          ...n,
          ref: t,
          style: {
            width: i,
            height: s,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      }));

      function Pb(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Ob(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Tb(e) {
        const t = Ob(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function kb(e, t, r = "ltr") {
        const n = Tb(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - n,
          l = Rh(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
        return jb([0, a], [0, s])(l)
      }

      function jb(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Ab(e, t) {
        return e > 0 && e < t
      }
      var Lb = (e, t = () => {}) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return function o() {
          const i = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            a = r.left !== i.left,
            s = r.top !== i.top;
          (a || s) && t(), r = i, n = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(n)
      };

      function Nb(e, t) {
        const r = xp(e),
          n = h.useRef(0);
        return h.useEffect((() => () => window.clearTimeout(n.current)), []), h.useCallback((() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }), [r, t])
      }

      function Rb(e, t) {
        const r = xp(t);
        (0, Fh.N)((() => {
          let t = 0;
          if (e) {
            const n = new ResizeObserver((() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(r)
            }));
            return n.observe(e), () => {
              window.cancelAnimationFrame(t), n.unobserve(e)
            }
          }
        }), [e, r])
      }
      var Ib = sb,
        Db = cb,
        Mb = db,
        Bb = xb,
        Hb = "foundry_hcgxh_uaq1gwo";
      const zb = (0, h.forwardRef)((({
          children: e,
          label: t,
          hint: r,
          placeholder: n,
          description: o,
          testId: i,
          hideLabel: a,
          hideDescription: s = !1,
          hideRequiredAsterisk: l,
          hideDividers: c,
          errorMessage: d,
          value: f,
          defaultValue: m,
          onValueChange: g,
          open: v,
          defaultOpen: y,
          onOpenChange: b,
          isRequired: _,
          isDisabled: w,
          isReadOnly: x,
          className: E,
          labelledBy: S,
          renderPortal: C,
          container: P
        }, O) => {
          const T = G((0, h.useRef)(null), O),
            k = (0, h.useId)(),
            j = (0, h.useId)(),
            [A = !1, N] = K({
              prop: v,
              defaultProp: y,
              onChange: b
            });
          return (0, u.jsxs)("div", {
            className: (0, L.$)("foundry_hcgxh_uaq1gw0", E),
            children: [(t && !a || r) && (0, u.jsxs)("div", {
              className: "foundry_hcgxh_uaq1gw1",
              children: [(0, u.jsx)(p.s6, {
                enabled: !!a,
                children: (0, u.jsx)(H, {
                  size: "SM",
                  className: (0, L.$)("foundry_hcgxh_uaq1gw2", w && Hb),
                  asChild: !0,
                  children: (0, u.jsxs)("label", {
                    id: k,
                    children: [t, _ && !l && (0, u.jsx)("span", {
                      className: "foundry_hcgxh_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), r && (0, u.jsx)(H, {
                size: "XS",
                className: (0, L.$)("foundry_hcgxh_uaq1gw3", w && Hb),
                children: r
              })]
            }), (0, u.jsxs)(Wy, {
              required: _,
              disabled: w,
              open: A,
              onOpenChange: () => N(!x && !A),
              value: f,
              defaultValue: m,
              onValueChange: g,
              children: [(0, u.jsxs)(Ky, {
                className: (0, L.$)("foundry_hcgxh_uaq1gw5 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10", !!d && "foundry_hcgxh_uaq1gw7", x && "foundry_hcgxh_uaq1gw6"),
                ref: T,
                "data-testid": i,
                "aria-activedescendant": f,
                "aria-labelledby": S || k,
                "aria-controls": j,
                children: [(0, u.jsx)("span", {
                  className: "foundry_hcgxh_uaq1gw8",
                  children: (0, u.jsx)($y, {
                    placeholder: n,
                    "aria-label": f
                  })
                }), (0, u.jsx)(Yy, {
                  asChild: !0,
                  className: (0, L.$)("foundry_hcgxh_uaq1gw9", (x || w) && "foundry_hcgxh_uaq1gwa"),
                  children: A ? (0, u.jsx)(z.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, u.jsx)(z.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, u.jsx)(Vb, {
                renderPortal: C,
                container: P,
                children: (0, u.jsx)(Qy, {
                  id: j,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_hcgxh_uaq1gwb",
                  children: (0, u.jsxs)(Ib, {
                    className: "foundry_hcgxh_uaq1gwk",
                    type: "auto",
                    children: [(0, u.jsx)(Jy, {
                      className: (0, L.$)("foundry_hcgxh_uaq1gwc", c && "foundry_hcgxh_uaq1gwd"),
                      asChild: !0,
                      children: (0, u.jsx)(Db, {
                        className: "foundry_hcgxh_uaq1gwl",
                        style: {
                          overflowY: void 0
                        },
                        children: e
                      })
                    }), (0, u.jsx)(Mb, {
                      className: "foundry_hcgxh_uaq1gwm",
                      orientation: "vertical",
                      children: (0, u.jsx)(Bb, {
                        className: "foundry_hcgxh_uaq1gwn"
                      })
                    })]
                  })
                })
              })]
            }), o && (0, u.jsx)(p.s6, {
              enabled: !!d || s || 0 === o.length,
              children: (0, u.jsx)(H, {
                size: "SM",
                className: (0, L.$)("foundry_hcgxh_uaq1gwf", w && Hb),
                children: o
              })
            }), d && (0, u.jsxs)(H, {
              size: "SM",
              appearance: "bold",
              className: "foundry_hcgxh_uaq1gwg",
              children: [(0, u.jsx)(z.X, {
                size: "MD",
                label: "",
                className: "foundry_hcgxh_uaq1gwh"
              }), d]
            })]
          })
        })),
        Fb = (0, h.forwardRef)((({
          label: e,
          value: t,
          icon: r,
          iconLabel: n,
          iconPosition: o,
          isDisabled: i,
          testId: a
        }, s) => {
          const l = G((0, h.useRef)(null), s),
            c = r && z[r];
          return (0, u.jsxs)(eb, {
            value: t,
            className: "foundry_hcgxh_uaq1gwe foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10",
            ref: l,
            disabled: i,
            "data-testid": a,
            children: [c && "left" === o && (0, u.jsx)(c, {
              className: "foundry_hcgxh_uaq1gwi",
              label: n || "",
              size: "LG"
            }), (0, u.jsx)(tb, {
              asChild: !0,
              children: (0, u.jsx)("span", {
                className: "foundry_hcgxh_uaq1gwp",
                children: e
              })
            }), c && "right" === o && (0, u.jsx)(c, {
              label: n || "",
              size: "LG",
              className: "foundry_hcgxh_uaq1gwj"
            })]
          })
        })),
        Vb = ({
          renderPortal: e = !0,
          container: t,
          children: r
        }) => e ? (0, u.jsx)(Zy, {
          container: t,
          children: r
        }) : (0, u.jsx)(u.Fragment, {
          children: r
        }),
        Ub = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Gb = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        qb = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        Xb = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        Wb = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Kb = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, u.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function $b(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = Ce(e.isSelected, e.defaultSelected || !1, e.onChange);
        return {
          isSelected: r,
          setSelected: function(e) {
            t || n(e)
          },
          toggle: function() {
            t || n(!r)
          }
        }
      }

      function Yb(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: i,
          name: a,
          children: s,
          "aria-label": l,
          "aria-labelledby": c,
          validationState: u = "valid",
          isInvalid: d
        } = e, {
          pressProps: h,
          isPressed: f
        } = rr({
          isDisabled: n
        }), {
          pressProps: p,
          isPressed: m
        } = rr({
          onPress() {
            var e;
            t.toggle(), null === (e = r.current) || void 0 === e || e.focus()
          },
          isDisabled: n || o
        }), {
          focusableProps: g
        } = _t(e, r), v = Se(h, g), y = re(e, {
          labelable: !0
        });
        return ie(r, t.isSelected, t.setSelected), {
          labelProps: Se(p, {
            onClick: e => e.preventDefault()
          }),
          inputProps: Se(y, {
            "aria-invalid": d || "invalid" === u || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected(e.target.checked)
            },
            disabled: n,
            ...null == i ? {} : {
              value: i
            },
            name: a,
            type: "checkbox",
            ...v
          }),
          isSelected: t.isSelected,
          isPressed: f || m,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: d || "invalid" === u
        }
      }

      function Zb(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Qb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Jb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qb(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Zb(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qb(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function e_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var t_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        r_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Jb(Jb({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) t_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return e_(e.variantClassNames, (e => e_(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        n_ = r_({
          defaultClassName: "foundry_hcgxh_11gbdty6 foundry_hcgxh_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_11gbdty7",
              LG: "foundry_hcgxh_11gbdty8",
              XL: "foundry_hcgxh_11gbdty9"
            },
            appearance: {
              primary: "foundry_hcgxh_11gbdtya",
              secondary: "foundry_hcgxh_11gbdtyb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        o_ = r_({
          defaultClassName: "foundry_hcgxh_11gbdty2",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_11gbdty3",
              LG: "foundry_hcgxh_11gbdty4",
              XL: "foundry_hcgxh_11gbdty5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        i_ = r_({
          defaultClassName: "foundry_hcgxh_11gbdtyi",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
              LG: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdy foundry_hcgxh_tdsdcd10",
              XL: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        a_ = r_({
          defaultClassName: "foundry_hcgxh_11gbdtyd",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_11gbdtye",
              LG: "foundry_hcgxh_11gbdtyf",
              XL: "foundry_hcgxh_11gbdtyg"
            },
            isDisabled: {
              true: "foundry_hcgxh_11gbdtyh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const s_ = (0, h.forwardRef)((({
          isChecked: e,
          defaultChecked: t,
          onCheckedChange: r,
          label: o,
          description: i,
          size: a = "MD",
          appearance: s = "primary",
          isIndeterminate: l,
          hideLabel: c,
          testId: f,
          errorMessage: m,
          className: g,
          ...v
        }, y) => {
          const b = (0, h.useRef)(null),
            _ = G(b, y),
            w = (0, h.useId)(),
            {
              setSelected: x,
              ...E
            } = $b({
              isSelected: e,
              defaultSelected: t,
              onChange: r
            }),
            {
              inputProps: S,
              isDisabled: C,
              isReadOnly: P,
              isInvalid: O,
              isSelected: T
            } = function(e, t, r) {
              let n = Tt({
                  ...e,
                  value: t.isSelected
                }),
                {
                  isInvalid: o,
                  validationErrors: i,
                  validationDetails: a
                } = n.displayValidation,
                {
                  labelProps: s,
                  inputProps: l,
                  isSelected: c,
                  isPressed: u,
                  isDisabled: d,
                  isReadOnly: f
                } = Yb({
                  ...e,
                  isInvalid: o
                }, t, r);
              wt(e, n, r);
              let {
                isIndeterminate: p,
                isRequired: m,
                validationBehavior: g = "aria"
              } = e;
              (0, h.useEffect)((() => {
                r.current && (r.current.indeterminate = !!p)
              }));
              let {
                pressProps: v
              } = rr({
                isDisabled: d || f,
                onPress() {
                  let {
                    [Ot]: t
                  } = e, {
                    commitValidation: r
                  } = t || n;
                  r()
                }
              });
              return {
                labelProps: Se(s, v),
                inputProps: {
                  ...l,
                  checked: c,
                  "aria-required": m && "aria" === g || void 0,
                  required: m && "native" === g
                },
                isSelected: c,
                isPressed: u,
                isDisabled: d,
                isReadOnly: f,
                isInvalid: o,
                validationErrors: i,
                validationDetails: a
              }
            }({
              ...v,
              "aria-label": o,
              id: w
            }, {
              ...E,
              setSelected: v.isReadOnly ? () => !1 : x
            }, b),
            k = (0, d.v6)({
              ...S,
              "aria-checked": T,
              className: g
            }, {
              className: "foundry_hcgxh_11gbdty1"
            }),
            j = l ? n[`Dash${a}`] : n[`Check${a}`],
            A = O && !!m;
          return (0, u.jsxs)("label", {
            className: "foundry_hcgxh_11gbdty0",
            children: [(0, u.jsxs)("div", {
              className: o_({
                size: a
              }),
              children: [(0, u.jsx)(p.s6, {
                children: (0, u.jsx)("input", {
                  ...k,
                  ref: _
                })
              }), (0, u.jsx)("div", {
                className: n_({
                  size: a,
                  appearance: s
                }),
                "aria-hidden": "true",
                "data-state": l ? "mixed" : T ? "checked" : "unchecked",
                "data-disabled": C || P,
                "data-testid": f,
                children: (0, u.jsx)("span", {
                  className: "foundry_hcgxh_11gbdtyc",
                  children: (T || l) && (0, u.jsx)(j, {
                    "aria-hidden": "true"
                  })
                })
              })]
            }), (0, u.jsx)(p.s6, {
              enabled: !!c,
              children: (0, u.jsxs)("div", {
                className: a_({
                  size: a,
                  isDisabled: C
                }),
                children: [(0, u.jsx)("p", {
                  className: i_({
                    size: a
                  }),
                  children: o
                }), i && !A && (0, u.jsx)("p", {
                  className: "foundry_hcgxh_11gbdtym foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                  children: i
                }), A && (0, u.jsx)("p", {
                  className: "foundry_hcgxh_11gbdtyn foundry_hcgxh_11gbdtym foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                  children: m
                })]
              })
            })]
          })
        })),
        l_ = new WeakMap;

      function c_(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = se(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: r,
            visibility: n
          } = e.style, o = "none" !== r && "hidden" !== n && "collapse" !== n;
          if (o) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: r,
              visibility: n
            } = t(e);
            o = "none" !== r && "hidden" !== n && "collapse" !== n
          }
          return o
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || c_(e.parentElement, e))
      }

      function u_(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function d_(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? Le : Ae,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = ae(o),
          a = function(e, t, r, n) {
            return e.createTreeWalker(t, r, n)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !n(e) || !c_(e) || r && !u_(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a
      }
      class h_ {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new f_({
            scopeRef: e
          });
          n.addChild(o), o.parent = n, this.fastMap.set(e, o), r && (o.nodeToRestore = r)
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let r = t.parent;
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && u_(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach((e => r && r.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new h_;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new f_({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class f_ {
        addChild(e) {
          this.children.add(e), e.parent = this
        }
        removeChild(e) {
          this.children.delete(e), e.parent = void 0
        }
        constructor(e) {
          this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
        }
      }
      new h_;
      const p_ = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        m_ = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function g_(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return p_.has(t.script)
        }
        let t = e.split("-")[0];
        return m_.has(t)
      }
      const v_ = Symbol.for("react-aria.i18n.locale");

      function y_() {
        let e = "undefined" != typeof window && window[v_] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: g_(e) ? "rtl" : "ltr"
        }
      }
      let b_ = y_(),
        __ = new Set;

      function w_() {
        b_ = y_();
        for (let e of __) e(b_)
      }
      const x_ = h.createContext(null);

      function E_() {
        let e = function() {
          let e = ve(),
            [t, r] = (0, h.useState)(b_);
          return (0, h.useEffect)((() => (0 === __.size && window.addEventListener("languagechange", w_), __.add(r), () => {
            __.delete(r), 0 === __.size && window.removeEventListener("languagechange", w_)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, h.useContext)(x_) || e
      }

      function S_(e, t) {
        let {
          name: r,
          isReadOnly: n,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: s = "aria"
        } = e, {
          direction: l
        } = E_(), {
          isInvalid: c,
          validationErrors: u,
          validationDetails: d
        } = t.displayValidation, {
          labelProps: f,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: g
        } = Oe({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || u
        }), v = re(e, {
          labelable: !0
        }), {
          focusWithinProps: y
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, i = (0, h.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: a,
            removeAllGlobalListeners: s
          } = Wt(), l = (0, h.useCallback)((e => {
            e.currentTarget.contains(e.target) && i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, s(), r && r(e), o && o(!1))
          }), [r, o, i, s]), c = Me(l), u = (0, h.useCallback)((e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = ae(e.target),
              r = dt(t);
            if (!i.current.isFocusWithin && r === ht(e.nativeEvent)) {
              n && n(e), o && o(!0), i.current.isFocusWithin = !0, c(e);
              let r = e.currentTarget;
              a(t, "focus", (e => {
                if (i.current.isFocusWithin && !ut(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  De(n, r);
                  let o = Ie(n);
                  l(o)
                }
              }), {
                capture: !0
              })
            }
          }), [n, o, c, a, l]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: u,
              onBlur: l
            }
          }
        }({
          onBlurWithin(r) {
            var n;
            null === (n = e.onBlur) || void 0 === n || n.call(e, r), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = we(r);
        return l_.set(t, {
          name: b,
          descriptionId: m.id,
          errorMessageId: g.id,
          validationBehavior: s
        }), {
          radioGroupProps: Se(v, {
            role: "radiogroup",
            onKeyDown: e => {
              let r;
              switch (e.key) {
                case "ArrowRight":
                  r = "rtl" === l && "vertical" !== a ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  r = "rtl" === l && "vertical" !== a ? "next" : "prev";
                  break;
                case "ArrowDown":
                  r = "next";
                  break;
                case "ArrowUp":
                  r = "prev";
                  break;
                default:
                  return
              }
              e.preventDefault();
              let n, o = d_(e.currentTarget, {
                from: e.target
              });
              "next" === r ? (n = o.nextNode(), n || (o.currentNode = e.currentTarget, n = o.firstChild())) : (n = o.previousNode(), n || (o.currentNode = e.currentTarget, n = o.lastChild())), n && (n.focus(), t.setSelectedValue(n.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": n || void 0,
            "aria-required": o || void 0,
            "aria-disabled": i || void 0,
            "aria-orientation": a,
            ...p,
            ...y
          }),
          labelProps: f,
          descriptionProps: m,
          errorMessageProps: g,
          isInvalid: c,
          validationErrors: u,
          validationDetails: d
        }
      }
      let C_ = Math.round(1e10 * Math.random()),
        P_ = 0;

      function O_(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function T_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function k_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? T_(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = O_(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T_(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function j_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var A_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        L_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = k_(k_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) A_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return j_(e.variantClassNames, (e => j_(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        N_ = L_({
          defaultClassName: "foundry_hcgxh_njguqn1",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_njguqn2",
              LG: "foundry_hcgxh_njguqn3",
              XL: "foundry_hcgxh_njguqn4"
            },
            orientation: {
              horizontal: "foundry_hcgxh_njguqn5",
              vertical: "foundry_hcgxh_njguqn6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const R_ = (0, h.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        I_ = (0, h.forwardRef)((({
          label: e,
          description: t,
          size: r = "MD",
          appearance: n = "primary",
          hideLabel: o,
          isRequired: i,
          hideRequiredAsterisk: a,
          testId: s,
          className: l,
          errorMessage: c,
          orientation: f = "vertical",
          ...m
        }, g) => {
          const {
            children: v
          } = m, y = G((0, h.useRef)(null), g), b = (0, h.useId)(), _ = function(e) {
            let t = (0, h.useMemo)((() => e.name || `radio-group-${C_}-${++P_}`), [e.name]);
            var r;
            let [n, o] = Ce(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [i, a] = (0, h.useState)(null), s = Tt({
              ...e,
              value: n
            }), l = s.displayValidation.isInvalid;
            return {
              ...s,
              name: t,
              selectedValue: n,
              setSelectedValue: t => {
                e.isReadOnly || e.isDisabled || (o(t), s.commitValidation())
              },
              lastFocusedValue: i,
              setLastFocusedValue: a,
              isDisabled: e.isDisabled || !1,
              isReadOnly: e.isReadOnly || !1,
              isRequired: e.isRequired || !1,
              validationState: e.validationState || (l ? "invalid" : null),
              isInvalid: l
            }
          }(m), w = {
            state: _,
            size: r,
            appearance: n
          }, {
            radioGroupProps: x,
            labelProps: E,
            descriptionProps: S,
            isInvalid: C,
            errorMessageProps: P
          } = S_({
            ...m,
            id: m.id || b,
            label: e,
            isRequired: i,
            description: t,
            orientation: f
          }, _), O = (0, d.v6)({
            ...x,
            className: l
          }, {
            className: "foundry_hcgxh_njguqn0",
            "aria-errormessage": P?.id
          }), T = C && !!c;
          return (0, u.jsxs)("div", {
            ref: y,
            "data-testid": s,
            ...O,
            children: [(0, u.jsx)(p.s6, {
              enabled: !!o,
              children: (0, u.jsxs)("div", {
                className: "foundry_hcgxh_njguqn7",
                children: [(0, u.jsx)(H, {
                  size: "SM",
                  ...E,
                  className: "foundry_hcgxh_njguqn8 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdy foundry_hcgxh_tdsdcd10",
                  asChild: !0,
                  children: (0, u.jsxs)("label", {
                    children: [e, i && !a && (0, u.jsx)("span", {
                      className: "foundry_hcgxh_njguqn9",
                      children: "*"
                    })]
                  })
                }), t && (0, u.jsx)(H, {
                  size: "XS",
                  ...S,
                  className: "foundry_hcgxh_njguqna foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                  children: t
                })]
              })
            }), (0, u.jsx)("div", {
              className: N_({
                size: r,
                orientation: f
              }),
              children: (0, u.jsx)(R_.Provider, {
                value: w,
                children: v
              })
            }), T && (0, u.jsxs)(H, {
              size: "SM",
              appearance: "bold",
              ...P,
              className: "foundry_hcgxh_njguqnb",
              children: [(0, u.jsx)(z.X, {
                size: "MD",
                label: "",
                className: "foundry_hcgxh_njguqnc"
              }), c]
            })]
          })
        })),
        D_ = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, u.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        M_ = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, u.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        B_ = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, u.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        });
      var H_ = L_({
          defaultClassName: "foundry_hcgxh_1pfduete",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
              LG: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdy foundry_hcgxh_tdsdcd10",
              XL: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10"
            },
            isDisabled: {
              true: "foundry_hcgxh_1pfdueti"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        z_ = L_({
          defaultClassName: "foundry_hcgxh_1pfduet6 foundry_hcgxh_8kowh41",
          variantClassNames: {
            appearance: {
              primary: "foundry_hcgxh_1pfduet7",
              secondary: "foundry_hcgxh_1pfduet8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        F_ = L_({
          defaultClassName: "foundry_hcgxh_1pfduet2",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_1pfduet3",
              LG: "foundry_hcgxh_1pfduet4",
              XL: "foundry_hcgxh_1pfduet5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        V_ = L_({
          defaultClassName: "foundry_hcgxh_1pfdueta",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_1pfduetb",
              LG: "foundry_hcgxh_1pfduetc",
              XL: "foundry_hcgxh_1pfduetd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const U_ = (0, h.forwardRef)((({
        label: e,
        description: t,
        hideLabel: r,
        testId: n,
        className: i,
        ...a
      }, s) => {
        const l = (0, h.useRef)(null),
          c = G(l, s),
          d = (0, h.useId)(),
          f = (0, h.useContext)(R_),
          {
            state: m,
            appearance: g,
            size: v
          } = f,
          {
            inputProps: y
          } = function(e, t, r) {
            let {
              value: n,
              children: o,
              "aria-label": i,
              "aria-labelledby": a
            } = e;
            const s = e.isDisabled || t.isDisabled;
            let l = t.selectedValue === n,
              {
                pressProps: c,
                isPressed: u
              } = rr({
                isDisabled: s
              }),
              {
                pressProps: d,
                isPressed: h
              } = rr({
                isDisabled: s,
                onPress() {
                  var e;
                  t.setSelectedValue(n), null === (e = r.current) || void 0 === e || e.focus()
                }
              }),
              {
                focusableProps: f
              } = _t(Se(e, {
                onFocus: () => t.setLastFocusedValue(n)
              }), r),
              p = Se(c, f),
              m = re(e, {
                labelable: !0
              }),
              g = -1;
            null != t.selectedValue ? t.selectedValue === n && (g = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (g = 0), s && (g = void 0);
            let {
              name: v,
              descriptionId: y,
              errorMessageId: b,
              validationBehavior: _
            } = l_.get(t);
            return ie(r, t.selectedValue, t.setSelectedValue), wt({
              validationBehavior: _
            }, t, r), {
              labelProps: Se(d, {
                onClick: e => e.preventDefault()
              }),
              inputProps: Se(m, {
                ...p,
                type: "radio",
                name: v,
                tabIndex: g,
                disabled: s,
                required: t.isRequired && "native" === _,
                checked: l,
                value: n,
                onChange: e => {
                  e.stopPropagation(), t.setSelectedValue(n)
                },
                "aria-describedby": [e["aria-describedby"], t.isInvalid ? b : null, y].filter(Boolean).join(" ") || void 0
              }),
              isDisabled: s,
              isSelected: l,
              isPressed: u || h
            }
          }({
            ...a,
            "aria-label": e,
            id: a.id || d
          }, m, l),
          b = y.checked,
          _ = y.disabled || m?.isReadOnly,
          w = o[`Dot${v}`];
        return (0, u.jsxs)("label", {
          className: (0, L.$)("foundry_hcgxh_1pfduet0", i),
          children: [(0, u.jsxs)("div", {
            className: F_({
              size: v
            }),
            children: [(0, u.jsx)(p.s6, {
              children: (0, u.jsx)("input", {
                ...y,
                ref: c,
                className: "foundry_hcgxh_1pfduet1"
              })
            }), (0, u.jsx)("div", {
              className: z_({
                appearance: g
              }),
              "aria-hidden": "true",
              "data-state": b ? "checked" : "unchecked",
              "data-disabled": _,
              "data-testid": n,
              children: (0, u.jsx)("span", {
                className: "foundry_hcgxh_1pfduet9",
                children: b && (0, u.jsx)(w, {})
              })
            })]
          }), (0, u.jsx)(p.s6, {
            enabled: !!r,
            children: (0, u.jsxs)("div", {
              className: V_({
                size: v
              }),
              children: [(0, u.jsx)("p", {
                className: H_({
                  size: v,
                  isDisabled: y.disabled
                }),
                "aria-label": e,
                children: e
              }), t && (0, u.jsx)("p", {
                className: "foundry_hcgxh_1pfduetj foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                children: t
              })]
            })
          })]
        })
      }));

      function G_(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function q_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function X_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? q_(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = G_(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q_(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function W_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var K_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $_ = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = X_(X_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) K_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return W_(e.variantClassNames, (e => W_(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_hcgxh_thj3a31",
          variantClassNames: {
            thickness: {
              thin: "foundry_hcgxh_thj3a32",
              thick: "foundry_hcgxh_thj3a33",
              thicker: "foundry_hcgxh_thj3a34",
              thickest: "foundry_hcgxh_thj3a35"
            },
            orientation: {
              horizontal: "foundry_hcgxh_thj3a36",
              vertical: "foundry_hcgxh_thj3a37"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Y_ = (0, h.forwardRef)((({
          className: e,
          orientation: t = "horizontal",
          thickness: r = "thin",
          isDecorative: n = !1,
          asChild: o,
          testId: i,
          ...a
        }, s) => {
          const l = "horizontal" !== t || n ? "div" : "hr",
            c = n || "hr" === l ? void 0 : "separator",
            d = o ? p.DX : l;
          return (0, u.jsx)(d, {
            ref: s,
            className: (0, L.$)($_({
              thickness: r,
              orientation: t
            }), e),
            role: c,
            "aria-orientation": t,
            "data-testid": i,
            ...a
          })
        })),
        Z_ = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, u.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "8",
            fill: e
          })
        }),
        Q_ = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, u.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L8 6.93934L11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967C12.8232 3.76256 12.8232 4.23744 12.5303 4.53033L9.06066 8L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L8 9.06066L4.53033 12.5303C4.23744 12.8232 3.76256 12.8232 3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L6.93934 8L3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967Z",
            fill: e
          })
        }),
        J_ = ({
          color: e = "currentColor"
        }) => (0, u.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, u.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.2445 4.04108C14.5374 4.33397 14.5374 4.80884 14.2446 5.10174L6.24469 13.1017C6.10404 13.2424 5.91327 13.3214 5.71436 13.3214C5.51544 13.3214 5.32468 13.2424 5.18402 13.1017L1.75531 9.67296C1.46242 9.38007 1.46242 8.90519 1.75532 8.6123C2.04821 8.31941 2.52309 8.31942 2.81598 8.61231L5.71436 11.5107L13.1839 4.04109C13.4768 3.74819 13.9516 3.74819 14.2445 4.04108Z",
            fill: e
          })
        });

      function ew(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function tw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function rw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? tw(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ew(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tw(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function nw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ow = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        iw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = rw(rw({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ow(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return nw(e.variantClassNames, (e => nw(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        aw = iw({
          defaultClassName: "foundry_hcgxh_okz6z212",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_okz6z213 foundry_hcgxh_okz6z2y foundry_hcgxh_okz6z2z",
              LG: "foundry_hcgxh_okz6z214 foundry_hcgxh_okz6z210 foundry_hcgxh_okz6z211"
            },
            isSelected: {
              true: "foundry_hcgxh_okz6z215"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        sw = iw({
          defaultClassName: "foundry_hcgxh_okz6z2o",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_okz6z2p foundry_hcgxh_okz6z2k foundry_hcgxh_okz6z2l",
              LG: "foundry_hcgxh_okz6z2q foundry_hcgxh_okz6z2m foundry_hcgxh_okz6z2n"
            },
            position: {
              left: "foundry_hcgxh_okz6z2r",
              right: "foundry_hcgxh_okz6z2s"
            },
            isSelected: {
              true: "foundry_hcgxh_okz6z2t",
              false: "foundry_hcgxh_okz6z2u"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              position: "left",
              isSelected: !0
            }, "foundry_hcgxh_okz6z2v"],
            [{
              position: "right",
              isSelected: !1
            }, "foundry_hcgxh_okz6z2w"]
          ]
        }),
        lw = iw({
          defaultClassName: "foundry_hcgxh_okz6z2f",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdy foundry_hcgxh_tdsdcd10",
              LG: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        cw = iw({
          defaultClassName: "foundry_hcgxh_okz6z28 foundry_hcgxh_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_okz6z29 foundry_hcgxh_okz6z24 foundry_hcgxh_okz6z25",
              LG: "foundry_hcgxh_okz6z2a foundry_hcgxh_okz6z26 foundry_hcgxh_okz6z27"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        uw = iw({
          defaultClassName: "foundry_hcgxh_okz6z21",
          variantClassNames: {
            appearance: {
              primary: "foundry_hcgxh_okz6z22",
              secondary: "foundry_hcgxh_okz6z23"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        dw = iw({
          defaultClassName: "foundry_hcgxh_okz6z2b",
          variantClassNames: {
            isDisabled: {
              true: "foundry_hcgxh_okz6z2c"
            },
            size: {
              MD: "foundry_hcgxh_okz6z2d",
              LG: "foundry_hcgxh_okz6z2e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const hw = (0, h.forwardRef)((({
        label: e,
        description: t,
        size: r = "MD",
        appearance: n = "primary",
        showIcons: o = !1,
        selectedIcon: i,
        unselectedIcon: a,
        hideLabel: s,
        testId: l,
        className: c,
        ...d
      }, f) => {
        const m = (0, h.useRef)(null),
          g = G(m, f),
          v = (0, h.useId)(),
          y = $b(d),
          {
            inputProps: b,
            isDisabled: _,
            isReadOnly: w,
            isSelected: x
          } = function(e, t, r) {
            let {
              labelProps: n,
              inputProps: o,
              isSelected: i,
              isPressed: a,
              isDisabled: s,
              isReadOnly: l
            } = Yb(e, t, r);
            return {
              labelProps: n,
              inputProps: {
                ...o,
                role: "switch",
                checked: i
              },
              isSelected: i,
              isPressed: a,
              isDisabled: s,
              isReadOnly: l
            }
          }({
            id: v,
            "aria-label": e,
            ...d
          }, y, m),
          E = i ? z[i] : J_,
          S = a ? z[a] : Q_;
        return (0, u.jsxs)("label", {
          className: (0, L.$)("foundry_hcgxh_okz6z20", c),
          children: [(0, u.jsxs)("div", {
            className: uw({
              appearance: n
            }),
            "data-state": x ? "selected" : "unselected",
            "data-disabled": _ || w,
            "data-testid": l,
            children: [(0, u.jsx)(p.s6, {
              children: (0, u.jsx)("input", {
                ...b,
                ref: g
              })
            }), (0, u.jsxs)("div", {
              className: cw({
                size: r
              }),
              "aria-hidden": "true",
              children: [(0, u.jsx)("div", {
                className: aw({
                  size: r,
                  isSelected: x
                }),
                children: (0, u.jsx)(Z_, {})
              }), o && (0, u.jsxs)(u.Fragment, {
                children: [(0, u.jsx)("div", {
                  className: sw({
                    size: r,
                    isSelected: x,
                    position: "left"
                  }),
                  children: (0, u.jsx)(E, {
                    label: ""
                  })
                }), (0, u.jsx)("div", {
                  className: sw({
                    size: r,
                    isSelected: x,
                    position: "right"
                  }),
                  children: (0, u.jsx)(S, {
                    label: ""
                  })
                })]
              })]
            })]
          }), (0, u.jsx)(p.s6, {
            enabled: !!s,
            children: (0, u.jsxs)("div", {
              className: dw({
                size: r,
                isDisabled: _
              }),
              children: [(0, u.jsx)("p", {
                className: lw({
                  size: r
                }),
                children: e
              }), t && (0, u.jsx)("p", {
                className: "foundry_hcgxh_okz6z2i foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                children: t
              })]
            })
          })]
        })
      }));
      hw.displayName = "Switch";
      const fw = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? p.DX : "h1",
          i = (0, d.v6)({
            className: "foundry_hcgxh_1pi1yv40 foundry_hcgxh_tdsdcd1 foundry_hcgxh_tdsdcd0"
          }, r);
        return (0, u.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...i
        })
      }));

      function pw(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function mw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function gw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mw(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = pw(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mw(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function vw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var yw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        bw = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = gw(gw({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) yw(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vw(e.variantClassNames, (e => vw(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_hcgxh_16ge3130",
          variantClassNames: {
            size: {
              LG: "foundry_hcgxh_tdsdcd13 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd15",
              MD: "foundry_hcgxh_tdsdcd13 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd16",
              SM: "foundry_hcgxh_tdsdcd13 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd17",
              XS: "foundry_hcgxh_tdsdcd13 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd18"
            },
            appearance: {
              default: "foundry_hcgxh_tdsdcd13 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd19",
              bold: "foundry_hcgxh_tdsdcd13 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd1a"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const _w = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const a = e ? p.DX : "p",
          s = (0, d.v6)({
            className: bw({
              size: n,
              appearance: r
            })
          }, o);
        return (0, u.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      }));

      function ww(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function xw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Ew(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xw(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ww(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xw(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Sw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Cw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Pw = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ew(Ew({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Cw(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Sw(e.variantClassNames, (e => Sw(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_hcgxh_1ugqrt40",
          variantClassNames: {
            appearance: {
              default: "foundry_hcgxh_tdsdcd1b foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd1d",
              bold: "foundry_hcgxh_tdsdcd1b foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd1e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ow = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const i = e ? p.DX : "p",
          a = (0, d.v6)({
            className: Pw({
              appearance: r
            })
          }, n);
        return (0, u.jsx)(i, {
          ref: o,
          "data-testid": t,
          ...a
        })
      }));

      function Tw(e, t) {
        var r = {};
        if ("object" == typeof t) {
          var n = e;
          hr(t, ((e, t) => {
            if (null != e) {
              var o = function(e, t) {
                var r = e;
                for (var n of t) {
                  if (!(n in r)) throw new Error("Path ".concat(t.join(" -> "), " does not exist in object"));
                  r = r[n]
                }
                return r
              }(n, t);
              r[dr(o)] = String(e)
            }
          }))
        } else {
          var o = e;
          for (var i in o) {
            var a = o[i];
            null != a && (r[dr(i)] = a)
          }
        }
        return Object.defineProperty(r, "toString", {
          value: function() {
            return Object.keys(this).map((e => "".concat(e, ":").concat(this[e]))).join(";")
          },
          writable: !1
        }), r
      }

      function kw(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function jw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Aw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jw(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = kw(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jw(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Lw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Nw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Rw = "var(--foundry_hcgxh_9dxgbc2)",
        Iw = "var(--foundry_hcgxh_9dxgbc3)",
        Dw = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Aw(Aw({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Nw(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Lw(e.variantClassNames, (e => Lw(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_hcgxh_9dxgbc7",
          variantClassNames: {
            size: {
              SM: "foundry_hcgxh_9dxgbc8",
              MD: "foundry_hcgxh_9dxgbc9",
              LG: "foundry_hcgxh_9dxgbca",
              XL: "foundry_hcgxh_9dxgbcb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Mw = "var(--foundry_hcgxh_9dxgbc0)",
        Bw = "var(--foundry_hcgxh_9dxgbc1)";
      const Hw = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: i = "MD",
        ...a
      }, s) => {
        const l = Jn(),
          c = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
          h = (0, d.v6)({
            className: Dw({
              size: c
            }),
            "data-testid": t,
            style: Tw({
              [Mw]: n?.pulseColorBackground,
              [Bw]: n?.pulseColorForeground,
              [Rw]: n?.gradientColorBackground,
              [Iw]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, a),
          f = e ? p.DX : "div";
        return (0, u.jsx)(f, {
          ref: s,
          ...h,
          children: e ? (0, u.jsx)(p.xV, {
            children: r
          }) : (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("div", {
              className: "foundry_hcgxh_9dxgbcd"
            }), (0, u.jsx)("div", {
              className: "foundry_hcgxh_9dxgbcc"
            })]
          })
        })
      }));

      function zw(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Fw(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return zw(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? zw(e, t) : void 0
              }
            }(e)) || t) {
            r && (e = r);
            var n = 0,
              o = function() {};
            return {
              s: o,
              n: function() {
                return n >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[n++]
                }
              },
              e: function(e) {
                throw e
              },
              f: o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0,
          s = !1;
        return {
          s: function() {
            r = r.call(e)
          },
          n: function() {
            var e = r.next();
            return a = e.done, e
          },
          e: function(e) {
            s = !0, i = e
          },
          f: function() {
            try {
              a || null == r.return || r.return()
            } finally {
              if (s) throw i
            }
          }
        }
      }

      function Vw(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function Uw(e) {
        return Uw = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Uw(e)
      }

      function Gw() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (Gw = function() {
          return !!e
        })()
      }

      function qw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Xw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? qw(Object(r), !0).forEach((function(t) {
            Vw(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qw(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Ww(e, t) {
        return Ww = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Ww(e, t)
      }

      function Kw(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          a = n,
          s = "",
          l = Fw(e);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var c, u = r.value,
              d = !Object.prototype.hasOwnProperty.call(o, u) && (null === (c = o[a[0]]) || void 0 === c ? void 0 : c.test(u));
            (i && u === a[0] || d) && (a = a.slice(1), s += u)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return s
      }

      function $w(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          i = t.separate,
          a = t.showMask,
          s = 0,
          l = "",
          c = Fw(n);
        try {
          for (c.s(); !(r = c.n()).done;) {
            var u = r.value;
            if (!a && void 0 === e[s]) break;
            Object.prototype.hasOwnProperty.call(o, u) && void 0 !== e[s] ? l += e[s++] : l += u
          }
        } catch (e) {
          c.e(e)
        } finally {
          c.f()
        }
        if (i && !a) {
          for (var d = n.length - 1; d >= 0 && l[d] === n[d]; d--);
          l = l.slice(0, d + 1)
        }
        return l
      }

      function Yw(e, t) {
        for (var r = t.mask, n = t.replacement, o = [], i = 0; i < r.length; i++) {
          var a, s = null !== (a = e[i]) && void 0 !== a ? a : r[i],
            l = Object.prototype.hasOwnProperty.call(n, s) ? "replacement" : void 0 !== e[i] && e[i] !== r[i] ? "input" : "mask";
          o.push({
            type: l,
            value: s,
            index: i
          })
        }
        return o
      }

      function Zw(e) {
        return e.length > 0 ? Vw({}, e, /./) : {}
      }

      function Qw(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, i = t.mask, a = t.replacement, s = t.separate, l = e.slice(n, o), c = i.slice(n, o), u = "", d = 0; d < c.length; d++) {
          var h = Object.prototype.hasOwnProperty.call(a, c[d]);
          h && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : h && s && (u += c[d])
        }
        return u
      }

      function Jw(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? Zw(n) : n,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return $w(Kw(e, {
          replacementChars: r.replace(i, ""),
          replacement: o,
          separate: !1
        }), {
          mask: r,
          replacement: o,
          separate: !1,
          showMask: !1
        })
      }
      var ex = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function tx(e) {
        return ex.includes(e) ? "\\".concat(e) : e
      }

      function rx(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function nx(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function ox(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function ix(e) {
        return ix = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, ix(e)
      }

      function ax() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (ax = function() {
          return !!e
        })()
      }

      function sx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function lx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sx(Object(r), !0).forEach((function(t) {
            ox(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sx(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function cx(e, t) {
        return cx = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, cx(e, t)
      }

      function ux(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return ux = function(e) {
          if (null === e || ! function(e) {
              try {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
              } catch (t) {
                return "function" == typeof e
              }
            }(e)) return e;
          if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r)
          }

          function r() {
            return function(e, t, r) {
              if (ax()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && cx(o, r.prototype), o
            }(e, arguments, ix(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), cx(r, e)
        }, ux(e)
      }
      var dx, hx = function(e) {
          function t(e) {
            var r;
            return rx(this, t), (r = function(e, t, r) {
              return t = ix(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, ax() ? Reflect.construct(t, r || [], ix(e).constructor) : t.apply(e, r))
            }(this, t, [e])).name = "SyntheticChangeError", r
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && cx(e, t)
          }(t, e), nx(t)
        }(ux(Error)),
        fx = ["options"],
        px = ["text", "email", "tel", "search", "url"],
        mx = nx((function e(t) {
          var r = t.init,
            n = t.tracking;
          rx(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (px.includes(e.type)) {
              var i = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                a = i.initialValue,
                s = void 0 === a ? "" : a,
                l = i.controlled,
                c = void 0 !== l && l,
                u = r({
                  initialValue: e.value || s,
                  controlled: c
                }),
                d = u.value,
                h = u.options,
                f = {
                  value: d,
                  options: h,
                  fallbackOptions: h
                },
                p = {
                  id: -1,
                  cachedId: -1
                },
                m = {
                  value: "",
                  selectionStart: 0,
                  selectionEnd: 0
                },
                g = Object.getOwnPropertyDescriptor("_valueTracker" in e ? e : HTMLInputElement.prototype, "value");
              Object.defineProperty(e, "value", lx(lx({}, g), {}, {
                set: function(t) {
                  var r;
                  m.value = t, null == g || null === (r = g.set) || void 0 === r || r.call(e, t)
                }
              })), e.value = d;
              var v = function() {
                  var t = function() {
                    var r, n;
                    m.selectionStart = null !== (r = e.selectionStart) && void 0 !== r ? r : 0, m.selectionEnd = null !== (n = e.selectionEnd) && void 0 !== n ? n : 0, p.id = window.setTimeout(t)
                  };
                  p.id = window.setTimeout(t)
                },
                y = function() {
                  window.clearTimeout(p.id), p.id = -1, p.cachedId = -1
                },
                b = function(t) {
                  try {
                    var r, o;
                    if (p.cachedId === p.id) throw new hx("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      a = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === a || null === s) throw new hx("The selection attributes have not been initialized.");
                    var l, c = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = c.length), a > m.selectionStart ? l = "insert" : a <= m.selectionStart && a < m.selectionEnd ? l = "deleteBackward" : a === m.selectionEnd && i.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > c.length) throw new hx("Input type detection error.");
                    var u = "",
                      d = m.selectionStart,
                      h = m.selectionEnd;
                    if ("insert" === l) u = i.slice(m.selectionStart, a);
                    else {
                      var g = c.length - i.length;
                      d = a, h = a + g
                    }
                    f.value !== c ? f.options = f.fallbackOptions : f.fallbackOptions = f.options;
                    var v = f.options,
                      y = n({
                        inputType: l,
                        previousValue: c,
                        previousOptions: v,
                        value: i,
                        addedValue: u,
                        changeStart: d,
                        changeEnd: h,
                        selectionStart: a,
                        selectionEnd: s
                      }),
                      b = y.options,
                      _ = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = function(e, t) {
                          if (null == e) return {};
                          var r = {};
                          for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                              if (t.includes(n)) continue;
                              r[n] = e[n]
                            } return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          for (n = 0; n < i.length; n++) r = i[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                      }(y, fx);
                    e.value = _.value, e.setSelectionRange(_.selectionStart, _.selectionEnd), f.value = _.value, f.options = b, m.selectionStart = _.selectionStart, m.selectionEnd = _.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (o = r.setValue) || void 0 === o || o.call(r, c)
                  } catch (r) {
                    if (e.value = m.value, e.setSelectionRange(m.selectionStart, m.selectionEnd), t.preventDefault(), t.stopPropagation(), "SyntheticChangeError" !== r.name) throw r
                  }
                };
              document.activeElement === e && v(), e.addEventListener("focus", v), e.addEventListener("blur", y), e.addEventListener("input", b), o.set(e, {
                onFocus: v,
                onBlur: y,
                onInput: b
              })
            }
          }, this.unregister = function(e) {
            var t = o.get(e);
            void 0 !== t && (e.removeEventListener("focus", t.onFocus), e.removeEventListener("blur", t.onBlur), e.removeEventListener("input", t.onInput), o.delete(e))
          }
        }));
      dx = mx, Object.defineProperty(dx.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var gx, vx = ["track", "modify"];

      function yx(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? Zw(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var bx = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = Uw(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, Gw() ? Reflect.construct(t, r || [], Uw(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = yx(r),
                i = o.mask,
                a = o.replacement,
                s = o.separate,
                l = o.showMask;
              return {
                value: t = n || t ? t : l ? i : "",
                options: {
                  mask: i,
                  replacement: a,
                  separate: s
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                n = e.previousValue,
                o = e.previousOptions,
                i = e.addedValue,
                a = e.changeStart,
                s = e.changeEnd,
                l = yx(r),
                c = l.track,
                u = l.modify,
                d = function(e, t) {
                  if (null == e) return {};
                  var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r = {};
                    for (var n in e)
                      if ({}.hasOwnProperty.call(e, n)) {
                        if (t.includes(n)) continue;
                        r[n] = e[n]
                      } return r
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) r = i[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                  }
                  return o
                }(l, vx),
                h = d.mask,
                f = d.replacement,
                p = d.showMask,
                m = d.separate,
                g = Xw(Xw({}, "insert" === t ? {
                  inputType: t,
                  data: i
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: n,
                  selectionStart: a,
                  selectionEnd: s
                }),
                v = null == c ? void 0 : c(g);
              if (!1 === v) throw new hx("Custom tracking stop.");
              null === v ? i = "" : !0 !== v && void 0 !== v && (i = v);
              var y = null == u ? void 0 : u(g);
              void 0 !== (null == y ? void 0 : y.mask) && (h = y.mask), void 0 !== (null == y ? void 0 : y.replacement) && (f = "string" == typeof(null == y ? void 0 : y.replacement) ? Zw(null == y ? void 0 : y.replacement) : y.replacement), void 0 !== (null == y ? void 0 : y.showMask) && (p = y.showMask), void 0 !== (null == y ? void 0 : y.separate) && (m = y.separate);
              var b = Qw(n, Xw({
                  end: a
                }, o)),
                _ = Qw(n, Xw({
                  start: s
                }, o)),
                w = RegExp("[^".concat(Object.keys(f).join(""), "]"), "g"),
                x = h.replace(w, "");
              if (b && (b = Kw(b, {
                  replacementChars: x,
                  replacement: f,
                  separate: m
                }), x = x.slice(b.length)), i && (i = Kw(i, {
                  replacementChars: x,
                  replacement: f,
                  separate: !1
                }), x = x.slice(i.length)), "insert" === t && "" === i) throw new hx("The character does not match the key value of the `replacement` object.");
              if (m) {
                var E = h.slice(a, s).replace(w, ""),
                  S = E.length - i.length;
                S < 0 ? _ = _.slice(-S) : S > 0 && (_ = E.slice(-S) + _)
              }
              _ && (_ = Kw(_, {
                replacementChars: x,
                replacement: f,
                separate: m
              }));
              var C = $w(b + i + _, {
                  mask: h,
                  replacement: f,
                  separate: m,
                  showMask: p
                }),
                P = function(e) {
                  var t, r, n, o = e.inputType,
                    i = e.value,
                    a = e.addedValue,
                    s = e.beforeChangeValue,
                    l = e.replacement,
                    c = e.separate,
                    u = Yw(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter((function(e) {
                      var t = e.type;
                      return "input" === t || c && "replacement" === t
                    })),
                    d = null === (t = u[s.length + a.length - 1]) || void 0 === t ? void 0 : t.index,
                    h = null === (r = u[s.length - 1]) || void 0 === r ? void 0 : r.index,
                    f = null === (n = u[s.length + a.length]) || void 0 === n ? void 0 : n.index;
                  if ("insert" === o) {
                    if (void 0 !== d) return d + 1;
                    if (void 0 !== f) return f;
                    if (void 0 !== h) return h + 1
                  }
                  if ("deleteForward" === o) {
                    if (void 0 !== f) return f;
                    if (void 0 !== h) return h + 1
                  }
                  if ("deleteBackward" === o) {
                    if (void 0 !== h) return h + 1;
                    if (void 0 !== f) return f
                  }
                  var p = i.split("").findIndex((function(e) {
                    return Object.prototype.hasOwnProperty.call(l, e)
                  }));
                  return -1 !== p ? p : i.length
                }({
                  inputType: t,
                  value: C,
                  addedValue: i,
                  beforeChangeValue: b,
                  mask: h,
                  replacement: f,
                  separate: m
                });
              return {
                value: C,
                selectionStart: P,
                selectionEnd: P,
                options: {
                  mask: h,
                  replacement: f,
                  separate: m
                }
              }
            }
          }])).format = function(e) {
            return Jw(e, yx(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Zw(n) : n;
              return Yw(Jw(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, yx(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Zw(n) : n,
                i = Qw(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return Kw(i, {
                replacementChars: r.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, yx(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? Zw(n) : n, i = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, s = "", l = 0; l < r.length; l++) {
                var c = r[l];
                0 === l && (s = "^"), i && (s += "("), s += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(a ? "(?!".concat(tx(c), ")") : "", "(").concat(o[c].source, ")") : tx(c), l === r.length - 1 && (i && (s += ")?".repeat(r.length)), s += "$")
              }
              return s
            }(e, yx(r))
          }, t
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && Ww(e, t)
          }(e, mx),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function _x(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function wx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function xx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wx(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = _x(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wx(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Ex(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      gx = bx, Object.defineProperty(gx.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var Sx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Cx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = xx(xx({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Sx(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ex(e.variantClassNames, (e => Ex(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Px = "foundry_hcgxh_8oytzos",
        Ox = Cx({
          defaultClassName: "foundry_hcgxh_8oytzob",
          variantClassNames: {
            isDisabled: {
              false: "foundry_hcgxh_8oytzoc",
              true: "foundry_hcgxh_8oytzod"
            },
            isReadOnly: {
              false: "foundry_hcgxh_8oytzoe",
              true: "foundry_hcgxh_8oytzof"
            },
            isInvalid: {
              false: "foundry_hcgxh_8oytzog",
              true: "foundry_hcgxh_8oytzoh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Tx = Cx({
          defaultClassName: "foundry_hcgxh_8oytzou",
          variantClassNames: {
            isDisabled: {
              false: "foundry_hcgxh_8oytzov",
              true: "foundry_hcgxh_8oytzow"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        kx = Cx({
          defaultClassName: "foundry_hcgxh_8oytzo8",
          variantClassNames: {
            isDisabled: {
              false: "foundry_hcgxh_8oytzo9",
              true: "foundry_hcgxh_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        jx = Cx({
          defaultClassName: "foundry_hcgxh_8oytzon",
          variantClassNames: {
            side: {
              left: "foundry_hcgxh_8oytzoo",
              right: "foundry_hcgxh_8oytzop"
            },
            isDisabled: {
              false: "foundry_hcgxh_8oytzoq",
              true: "foundry_hcgxh_8oytzor"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ax = Cx({
          defaultClassName: "foundry_hcgxh_8oytzoi foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10",
          variantClassNames: {
            isDisabled: {
              false: "foundry_hcgxh_8oytzoj",
              true: "foundry_hcgxh_8oytzok"
            },
            isReadOnly: {
              false: "foundry_hcgxh_8oytzol",
              true: "foundry_hcgxh_8oytzom"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Lx = Cx({
          defaultClassName: "foundry_hcgxh_8oytzo4",
          variantClassNames: {
            isDisabled: {
              false: "foundry_hcgxh_8oytzo5",
              true: "foundry_hcgxh_8oytzo6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Nx = (e, t, r) => {
          const n = [];
          return e && n.push(e), t && n.push(t), r && n.push(r), n.join(" ")
        },
        Rx = (0, h.createContext)(null);

      function Ix() {
        const e = (0, h.useContext)(Rx);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Dx = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          isInvalid: a = !1,
          ...s
        }, l) => {
          const [c, f] = (0, h.useState)("text"), m = (0, h.useId)(), g = (0, h.useId)(), v = (0, h.useId)(), y = (0, h.useId)(), b = (0, d.v6)({
            "data-testid": r,
            className: "foundry_hcgxh_8oytzo3"
          }, s), _ = e ? p.DX : "div";
          return (0, u.jsx)(Rx.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: i,
              isInvalid: a,
              labelId: m,
              inputId: g,
              descriptionId: v,
              errorId: y,
              inputType: c,
              setInputType: f
            },
            children: (0, u.jsx)(_, {
              ref: l,
              ...b,
              children: t
            })
          })
        })),
        Mx = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          isHidden: n = !1,
          hideRequiredAsterisk: o,
          ...i
        }, a) => {
          const {
            isDisabled: s,
            isRequired: l,
            inputId: c,
            labelId: h
          } = Ix(), f = (0, d.v6)({
            id: i.id || h,
            htmlFor: i.htmlFor || c,
            "data-testid": e,
            className: Lx({
              isDisabled: s
            })
          }, i), m = t ? p.DX : "label";
          return (0, u.jsx)(p.s6, {
            enabled: n,
            children: (0, u.jsx)(H, {
              size: "SM",
              asChild: !0,
              children: (0, u.jsxs)(m, {
                ref: a,
                ...f,
                children: [r, l && !o && (0, u.jsx)("span", {
                  className: "foundry_hcgxh_8oytzo7",
                  children: "*"
                })]
              })
            })
          })
        })),
        Bx = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = Ix(), a = (0, d.v6)({
            "data-testid": e,
            className: kx({
              isDisabled: i
            })
          }, n), s = t ? p.DX : "span";
          return (0, u.jsx)(H, {
            size: "XS",
            asChild: !0,
            children: (0, u.jsx)(s, {
              ref: o,
              ...a,
              children: r
            })
          })
        })),
        Hx = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: a,
            isInvalid: s
          } = Ix(), l = (0, d.v6)({
            "data-testid": e,
            className: (0, L.$)(Ox({
              isDisabled: i,
              isReadOnly: a,
              isInvalid: s
            }), "foundry_hcgxh_8oytzo1")
          }, n), c = t ? p.DX : "div";
          return (0, u.jsx)(c, {
            ref: o,
            ...l,
            children: r
          })
        })),
        zx = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          "aria-labelledby": r,
          "aria-describedby": n,
          type: o,
          mask: i,
          replacement: a,
          showMask: s = !0,
          track: l,
          ...c
        }, f) => {
          const {
            isDisabled: m,
            isReadOnly: g,
            isRequired: v,
            labelId: y,
            inputId: b,
            descriptionId: _,
            isInvalid: w,
            errorId: x,
            inputType: E,
            setInputType: S
          } = Ix();
          (0, h.useEffect)((() => S(o ?? "text")), []);
          const C = (0, d.v6)({
              disabled: m,
              readOnly: g,
              required: v,
              id: b,
              type: E,
              spellCheck: !1,
              "aria-labelledby": Nx(y, r),
              "aria-describedby": Nx(_, n, w ? x : void 0),
              "data-testid": e,
              className: (0, L.$)(Ax({
                isDisabled: m,
                isReadOnly: g
              }), "foundry_hcgxh_8oytzo2"),
              ...w && {
                "aria-invalid": !0,
                "aria-errormessage": x
              },
              ...m && {
                "aria-disabled": !0
              },
              ...v && {
                "aria-required": !0
              }
            }, c),
            P = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                r = e.replacement,
                n = e.showMask,
                o = e.separate,
                i = e.track,
                a = e.modify,
                s = (0, h.useRef)(null),
                l = (0, h.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: i,
                  modify: a
                });
              return l.current.mask = t, l.current.replacement = r, l.current.showMask = n, l.current.separate = o, l.current.track = i, l.current.modify = a, (0, h.useMemo)((function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(s, new bx(l.current))
              }), [])
            }({
              mask: i,
              replacement: a,
              showMask: s,
              track: l
            }),
            O = G(i && a ? P : null, f),
            T = t ? p.DX : "input";
          return (0, u.jsx)(T, {
            ref: O,
            ...C
          })
        })),
        Fx = (0, h.forwardRef)((({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, i) => {
          const {
            isDisabled: a
          } = Ix(), s = (0, d.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, L.$)(jx({
              side: n,
              isDisabled: a
            }), "foundry_hcgxh_8oytzo0")
          }, o), l = t ? p.DX : z[e];
          return (0, u.jsx)(l, {
            ref: i,
            ...s
          })
        })),
        Vx = (0, h.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = Ix(), n = (0, d.v6)({
            isDisabled: r,
            size: "SM",
            appearance: "ghost",
            className: Px
          }, e);
          return (0, u.jsx)(sp, {
            ref: t,
            ...n
          })
        })),
        Ux = (0, h.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: r,
            inputType: n,
            setInputType: o
          } = Ix(), i = "password" === n, a = i ? "Reveal Password" : "Hide Password", s = (0, d.v6)({
            isDisabled: r,
            size: "SM",
            appearance: "ghost",
            className: Px,
            label: a,
            icon: i ? "Eye" : "EyeOff",
            onPress: () => {
              o(i ? "text" : "password")
            }
          }, e);
          return (0, u.jsx)(Jm, {
            side: "bottom",
            portal: !1,
            align: "end",
            content: (0, u.jsx)(H, {
              size: "SM",
              children: a
            }),
            children: (0, u.jsx)(sp, {
              ref: t,
              ...s
            })
          })
        })),
        Gx = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          isHidden: n = !1,
          errorMessage: o,
          ...i
        }, a) => {
          const {
            isDisabled: s,
            isInvalid: l,
            descriptionId: c,
            errorId: h
          } = Ix(), f = (0, d.v6)({
            id: c,
            asChild: !0,
            "data-testid": e,
            className: Tx({
              isDisabled: s
            })
          }, i), m = t ? p.DX : "p", g = z.X;
          return (0, u.jsxs)("div", {
            className: "foundry_hcgxh_8oytzot",
            children: [(0, u.jsx)(p.s6, {
              enabled: n || l,
              children: (0, u.jsx)(H, {
                size: "SM",
                ref: a,
                ...f,
                children: (0, u.jsx)(m, {
                  children: r
                })
              })
            }), l && o && (0, u.jsxs)(H, {
              size: "SM",
              appearance: "bold",
              className: "foundry_hcgxh_8oytzox",
              id: h,
              children: [(0, u.jsx)(g, {
                size: "MD",
                label: "",
                className: "foundry_hcgxh_8oytzoy"
              }), o]
            })]
          })
        }));

      function qx(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ...l
        } = e, c = {};
        "a" !== r && (c = {
          role: "link",
          tabIndex: s ? void 0 : 0
        });
        let {
          focusableProps: u
        } = _t(e, t), {
          pressProps: d,
          isPressed: h
        } = rr({
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ref: t
        }), f = re(l, {
          labelable: !0
        }), p = Se(u, d), m = $t();
        return {
          isPressed: h,
          linkProps: Se(f, Zt(e), {
            ...p,
            ...c,
            "aria-disabled": s || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = d.onClick) || void 0 === r || r.call(d, t), !m.isNative && t.currentTarget instanceof HTMLAnchorElement && t.currentTarget.href && !t.isDefaultPrevented() && function(e, t) {
                let r = e.getAttribute("target");
                return !(r && "_self" !== r || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
              }(t.currentTarget, t) && e.href && (t.preventDefault(), m.open(t.currentTarget, t, e.href, e.routerOptions))
            }
          })
        }
      }

      function Xx(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Wx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Kx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Wx(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Xx(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wx(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function $x(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Yx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Zx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Kx(Kx({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Yx(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $x(e.variantClassNames, (e => $x(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Qx = Zx({
          defaultClassName: "foundry_hcgxh_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_hcgxh_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Jx = Zx({
          defaultClassName: "foundry_hcgxh_1m368qhd",
          variantClassNames: {
            status: {
              information: "foundry_hcgxh_1m368qhe",
              danger: "foundry_hcgxh_1m368qhf",
              success: "foundry_hcgxh_1m368qhg",
              warning: "foundry_hcgxh_1m368qhh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        eE = Zx({
          defaultClassName: "foundry_hcgxh_1m368qh2",
          variantClassNames: {
            status: {
              danger: "foundry_hcgxh_1m368qh3",
              information: "foundry_hcgxh_1m368qh4",
              success: "foundry_hcgxh_1m368qh5",
              warning: "foundry_hcgxh_1m368qh6"
            },
            background: {
              "two-tone": "foundry_hcgxh_1m368qh7",
              neutral: "foundry_hcgxh_1m368qh8",
              none: "foundry_hcgxh_1m368qh9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const tE = (0, h.createContext)(null);

      function rE() {
        const e = (0, h.useContext)(tE);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const nE = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, i) => {
          const a = e ? p.DX : "div",
            s = (0, d.v6)(o, {
              className: eE({
                status: r,
                background: n
              })
            });
          return (0, u.jsx)(tE.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, u.jsx)(a, {
              ref: i,
              "data-testid": t,
              ...s,
              ...o
            })
          })
        })),
        oE = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? p.DX : "div",
            i = (0, d.v6)(r, {
              className: "foundry_hcgxh_1m368qha"
            });
          return (0, u.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        iE = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? p.DX : "div",
            i = (0, d.v6)(r, {
              className: "foundry_hcgxh_1m368qhb"
            });
          return (0, u.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        aE = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        sE = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const {
            status: n
          } = rE(), o = e || aE[n], i = z[o], a = (0, d.v6)(t, {
            className: Jx({
              status: n
            })
          });
          return (0, u.jsx)("div", {
            className: "foundry_hcgxh_1m368qhc",
            children: (0, u.jsx)(i, {
              title: "",
              ref: r,
              ...a
            })
          })
        })),
        lE = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? p.DX : "div",
            i = (0, d.v6)(r, {
              className: "foundry_hcgxh_1m368qhi"
            });
          return (0, u.jsx)(E, {
            level: 6,
            asChild: !0,
            children: (0, u.jsx)(o, {
              ref: n,
              "data-testid": t,
              ...i
            })
          })
        })),
        cE = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? p.DX : "div",
            i = (0, d.v6)(r, {
              className: "foundry_hcgxh_1m368qhj"
            });
          return (0, u.jsx)(H, {
            size: "SM",
            asChild: !0,
            children: (0, u.jsx)(o, {
              ref: n,
              "data-testid": t,
              ...i
            })
          })
        })),
        uE = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, h.useRef)(null),
            a = G(i, o),
            s = e ? p.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = qx(n, i),
            f = (0, d.v6)(l, {
              className: "foundry_hcgxh_1m368qhk foundry_hcgxh_1d5mo5m0"
            });
          return (0, u.jsx)(H, {
            size: "SM",
            appearance: "hyperlink",
            asChild: !0,
            children: (0, u.jsx)(s, {
              "data-pressed": c,
              "data-testid": r,
              ref: a,
              ...f,
              children: t
            })
          })
        })),
        dE = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? p.DX : "div",
            a = (0, d.v6)(n, {
              className: "foundry_hcgxh_1m368qhl"
            });
          return (0, u.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        })),
        hE = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const i = e ? p.DX : "div";
          return (0, u.jsx)(H, {
            size: "SM",
            asChild: !0,
            children: (0, u.jsx)(i, {
              ref: o,
              "data-testid": t,
              className: (0, L.$)(r, "foundry_hcgxh_1m368qho"),
              ...n
            })
          })
        })),
        fE = (0, h.forwardRef)((({
          testId: e,
          label: t = "close alert",
          ...r
        }, n) => {
          const {
            background: o
          } = rE(), i = (0, d.v6)(r, {
            className: Qx({
              hasBackground: "none" !== o
            })
          });
          return (0, u.jsx)(sp, {
            ref: n,
            label: t,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "XS",
            ...i
          })
        }));

      function pE(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function mE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function gE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mE(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = pE(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mE(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function vE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var yE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        bE = "foundry_hcgxh_qmpv6yt",
        _E = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = gE(gE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) yE(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vE(e.variantClassNames, (e => vE(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_hcgxh_qmpv6y6",
          variantClassNames: {
            status: {
              danger: "foundry_hcgxh_qmpv6y7",
              information: "foundry_hcgxh_qmpv6y8",
              success: "foundry_hcgxh_qmpv6y9",
              warning: "foundry_hcgxh_qmpv6ya"
            },
            background: {
              static: "foundry_hcgxh_qmpv6yb",
              "two-tone": "foundry_hcgxh_qmpv6yc",
              neutral: "foundry_hcgxh_qmpv6yd"
            },
            align: {
              left: "foundry_hcgxh_qmpv6ye",
              center: "foundry_hcgxh_qmpv6yf"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              status: "danger",
              background: "static"
            }, "foundry_hcgxh_qmpv6yg"],
            [{
              status: "information",
              background: "static"
            }, "foundry_hcgxh_qmpv6yh"],
            [{
              status: "warning",
              background: "static"
            }, "foundry_hcgxh_qmpv6yi"],
            [{
              status: "success",
              background: "static"
            }, "foundry_hcgxh_qmpv6yj"]
          ]
        });

      function wE(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function xE(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every((r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : wE(n) && wE(o) ? xE(n, o) : n === o
        })))
      }

      function EE(e) {
        return e.concat().sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => e.options))
      }

      function SE(e) {
        return "number" == typeof e
      }

      function CE(e) {
        return "string" == typeof e
      }

      function PE(e) {
        return "boolean" == typeof e
      }

      function OE(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function TE(e) {
        return Math.abs(e)
      }

      function kE(e) {
        return Math.sign(e)
      }

      function jE(e, t) {
        return TE(e - t)
      }

      function AE(e) {
        return DE(e).map(Number)
      }

      function LE(e) {
        return e[NE(e)]
      }

      function NE(e) {
        return Math.max(0, e.length - 1)
      }

      function RE(e, t) {
        return t === NE(e)
      }

      function IE(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Array.from(Array(e), ((e, r) => t + r))
      }

      function DE(e) {
        return Object.keys(e)
      }

      function ME(e, t) {
        return [e, t].reduce(((e, t) => (DE(t).forEach((r => {
          const n = e[r],
            o = t[r],
            i = OE(n) && OE(o);
          e[r] = i ? ME(n, o) : o
        })), e)), {})
      }

      function BE(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function HE() {
        let e = [];
        const t = {
          add: function(r, n, o) {
            let i, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
              passive: !0
            };
            if ("addEventListener" in r) r.addEventListener(n, o, a), i = () => r.removeEventListener(n, o, a);
            else {
              const e = r;
              e.addListener(o), i = () => e.removeListener(o)
            }
            return e.push(i), t
          },
          clear: function() {
            e = e.filter((e => e()))
          }
        };
        return t
      }

      function zE() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const r = TE(e - t);

        function n(t) {
          return t < e
        }

        function o(e) {
          return e > t
        }

        function i(e) {
          return n(e) || o(e)
        }
        return {
          length: r,
          max: t,
          min: e,
          constrain: function(r) {
            return i(r) ? n(r) ? e : t : r
          },
          reachedAny: i,
          reachedMax: o,
          reachedMin: n,
          removeOffset: function(e) {
            return r ? e - r * Math.ceil((e - t) / r) : e
          }
        }
      }

      function FE(e, t, r) {
        const {
          constrain: n
        } = zE(0, e), o = e + 1;
        let i = a(t);

        function a(e) {
          return r ? TE((o + e) % o) : n(e)
        }

        function s() {
          return i
        }

        function l() {
          return FE(e, s(), r)
        }
        const c = {
          get: s,
          set: function(e) {
            return i = a(e), c
          },
          add: function(e) {
            return l().set(s() + e)
          },
          clone: l
        };
        return c
      }

      function VE(e, t, r, n, o, i, a, s, l, c, u, d, h, f, p, m, g, v, y) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, E = HE(), S = HE(), C = zE(50, 225).constrain(f.measure(20)), P = {
          mouse: 300,
          touch: 400
        }, O = {
          mouse: 500,
          touch: 600
        }, T = p ? 43 : 25;
        let k = !1,
          j = 0,
          A = 0,
          L = !1,
          N = !1,
          R = !1,
          I = !1;

        function D(e) {
          if (!BE(e, n) && e.touches.length >= 2) return M(e);
          const t = i.readPoint(e),
            r = i.readPoint(e, b),
            a = jE(t, j),
            l = jE(r, A);
          if (!N && !I) {
            if (!e.cancelable) return M(e);
            if (N = a > l, !N) return M(e)
          }
          const u = i.pointerMove(e);
          a > m && (R = !0), c.useFriction(.3).useDuration(.75), s.start(), o.add(_(u)), e.preventDefault()
        }

        function M(e) {
          const t = u.byDistance(0, !1).index !== d.get(),
            r = i.pointerUp(e) * (p ? O : P)[I ? "mouse" : "touch"],
            n = function(e, t) {
              const r = d.add(-1 * kE(e)),
                n = u.byDistance(e, !p).distance;
              return p || TE(e) < C ? n : g && t ? .5 * n : u.byIndex(r.get(), 0).distance
            }(_(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (TE(e) <= TE(t)) return 0;
              const r = jE(TE(e), TE(t));
              return TE(r / e)
            }(r, n),
            a = T - 10 * o,
            s = v + o / 50;
          N = !1, L = !1, S.clear(), c.useDuration(a).useFriction(s), l.distance(n, !p), I = !1, h.emit("pointerUp")
        }

        function B(e) {
          R && (e.stopPropagation(), e.preventDefault(), R = !1)
        }
        return {
          init: function(e) {
            if (!y) return;

            function s(s) {
              (PE(y) || y(e, s)) && function(e) {
                const s = BE(e, n);
                I = s, R = p && s && !e.buttons && k, k = jE(o.get(), a.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (L = !0, i.pointerDown(e), c.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = I ? r : t;
                  S.add(e, "touchmove", D, x).add(e, "touchend", M).add(e, "mousemove", D, x).add(e, "mouseup", M)
                }(), j = i.readPoint(e), A = i.readPoint(e, b), h.emit("pointerDown"))
              }(s)
            }
            const l = t;
            E.add(l, "dragstart", (e => e.preventDefault()), x).add(l, "touchmove", (() => {}), x).add(l, "touchend", (() => {})).add(l, "touchstart", s).add(l, "mousedown", s).add(l, "touchcancel", M).add(l, "contextmenu", M).add(l, "click", B, !0)
          },
          destroy: function() {
            E.clear(), S.clear()
          },
          pointerDown: function() {
            return L
          }
        }
      }

      function UE(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function i(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (BE(r, t) ? r : r.touches[0])[o]
        }
        return {
          pointerDown: function(e) {
            return r = e, n = e, i(e)
          },
          pointerMove: function(e) {
            const t = i(e) - i(n),
              a = o(e) - o(r) > 170;
            return n = e, a && (r = e), t
          },
          pointerUp: function(e) {
            if (!r || !n) return 0;
            const t = i(n) - i(r),
              a = o(e) - o(r),
              s = o(e) - o(n) > 170,
              l = t / a;
            return a && !s && TE(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function GE(e, t, r, n, o, i, a) {
        const s = [e].concat(n);
        let l, c, u = [],
          d = !1;

        function h(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            i && (c = h(e), u = n.map(h), l = new ResizeObserver((r => {
              (PE(i) || i(o, r)) && function(r) {
                for (const i of r) {
                  if (d) return;
                  const r = i.target === e,
                    a = n.indexOf(i.target),
                    s = r ? c : u[a];
                  if (TE(h(r ? e : n[a]) - s) >= .5) {
                    o.reInit(), t.emit("resize");
                    break
                  }
                }
              }(r)
            })), r.requestAnimationFrame((() => {
              s.forEach((e => l.observe(e)))
            })))
          },
          destroy: function() {
            d = !0, l && l.disconnect()
          }
        }
      }

      function qE(e, t, r, n, o) {
        const i = o.measure(10),
          a = o.measure(50),
          s = zE(.1, .99);
        let l = !1;

        function c() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(o) {
            if (!c()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              u = TE(e[l] - t.get()),
              d = r.get() - t.get(),
              h = s.constrain(u / a);
            r.subtract(d * h), !o && TE(d) < i && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function XE(e, t, r, n) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: a,
            reachedMax: s
          } = zE(o, i),
          l = {
            loop: function(t) {
              if (! function(e) {
                  return 1 === e ? s(r.get()) : -1 === e && a(r.get())
                }(t)) return;
              const o = e * (-1 * t);
              n.forEach((e => e.add(o)))
            }
          };
        return l
      }

      function WE(e) {
        let t = e;

        function r(e) {
          return SE(e) ? e : e.get()
        }
        return {
          get: function() {
            return t
          },
          set: function(e) {
            t = r(e)
          },
          add: function(e) {
            t += r(e)
          },
          subtract: function(e) {
            t -= r(e)
          }
        }
      }

      function KE(e, t) {
        const r = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          n = t.style;
        let o = null,
          i = !1;
        const a = {
          clear: function() {
            i || (n.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (i) return;
            const a = (s = e.direction(t), Math.round(100 * s) / 100);
            var s;
            a !== o && (n.transform = r(a), o = a)
          },
          toggleActive: function(e) {
            i = !e
          }
        };
        return a
      }

      function $E(e, t, r, n, o, i, a, s, l) {
        const c = AE(o),
          u = AE(o).reverse(),
          d = function() {
            const e = a[0];
            return p(f(u, e), r, !1)
          }().concat(function() {
            const e = t - a[0] - 1;
            return p(f(c, e), -r, !0)
          }());

        function h(e, t) {
          return e.reduce(((e, t) => e - o[t]), t)
        }

        function f(e, t) {
          return e.reduce(((e, r) => h(e, t) > 0 ? e.concat([r]) : e), [])
        }

        function p(o, a, c) {
          const u = function(e) {
            return i.map(((r, o) => ({
              start: r - n[o] + .5 + e,
              end: r + t - .5 + e
            })))
          }(a);
          return o.map((t => {
            const n = c ? 0 : -r,
              o = c ? r : 0,
              i = c ? "end" : "start",
              a = u[t][i];
            return {
              index: t,
              loopPoint: a,
              slideLocation: WE(-1),
              translate: KE(e, l[t]),
              target: () => s.get() > a ? n : o
            }
          }))
        }
        const m = {
          canLoop: function() {
            return d.every((e => {
              let {
                index: r
              } = e;
              const n = c.filter((e => e !== r));
              return h(n, t) <= .1
            }))
          },
          clear: function() {
            d.forEach((e => e.translate.clear()))
          },
          loop: function() {
            d.forEach((e => {
              const {
                target: t,
                translate: r,
                slideLocation: n
              } = e, o = t();
              o !== n.get() && (r.to(o), n.set(o))
            }))
          },
          loopPoints: d
        };
        return m
      }

      function YE(e, t, r) {
        let n, o = !1;
        return {
          init: function(i) {
            r && (n = new MutationObserver((e => {
              o || (PE(r) || r(i, e)) && function(e) {
                for (const r of e)
                  if ("childList" === r.type) {
                    i.reInit(), t.emit("slidesChanged");
                    break
                  }
              }(e)
            })), n.observe(e, {
              childList: !0
            }))
          },
          destroy: function() {
            n && n.disconnect(), o = !0
          }
        }
      }

      function ZE(e, t, r, n, o, i, a) {
        const {
          align: s,
          axis: l,
          direction: c,
          startIndex: u,
          loop: d,
          duration: h,
          dragFree: f,
          dragThreshold: p,
          inViewThreshold: m,
          slidesToScroll: g,
          skipSnaps: v,
          containScroll: y,
          watchResize: b,
          watchSlides: _,
          watchDrag: w,
          watchFocus: x
        } = i, E = {
          measure: function(e) {
            const {
              offsetTop: t,
              offsetLeft: r,
              offsetWidth: n,
              offsetHeight: o
            } = e;
            return {
              top: t,
              right: r + n,
              bottom: t + o,
              left: r,
              width: n,
              height: o
            }
          }
        }, S = E.measure(t), C = r.map(E.measure), P = function(e, t) {
          const r = "rtl" === t,
            n = "y" === e,
            o = !n && r ? -1 : 1;
          return {
            scroll: n ? "y" : "x",
            cross: n ? "x" : "y",
            startEdge: n ? "top" : r ? "right" : "left",
            endEdge: n ? "bottom" : r ? "left" : "right",
            measureSize: function(e) {
              const {
                height: t,
                width: r
              } = e;
              return n ? t : r
            },
            direction: function(e) {
              return e * o
            }
          }
        }(l, c), O = P.measureSize(S), T = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(O), k = function(e, t) {
          const r = {
            start: function() {
              return 0
            },
            center: function(e) {
              return n(e) / 2
            },
            end: n
          };

          function n(e) {
            return t - e
          }
          const o = {
            measure: function(n, o) {
              return CE(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(s, O), j = !d && !!y, A = d || !!y, {
          slideSizes: L,
          slideSizesWithGaps: N,
          startGap: R,
          endGap: I
        } = function(e, t, r, n, o, i) {
          const {
            measureSize: a,
            startEdge: s,
            endEdge: l
          } = e, c = r[0] && o, u = function() {
            if (!c) return 0;
            const e = r[0];
            return TE(t[s] - e[s])
          }(), d = function() {
            if (!c) return 0;
            const e = i.getComputedStyle(LE(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), h = r.map(a), f = r.map(((e, t, r) => {
            const n = !t,
              o = RE(r, t);
            return n ? h[t] + u : o ? h[t] + d : r[t + 1][s] - e[s]
          })).map(TE);
          return {
            slideSizes: h,
            slideSizesWithGaps: f,
            startGap: u,
            endGap: d
          }
        }(P, S, C, r, A, o), D = function(e, t, r, n, o, i, a, s, l) {
          const {
            startEdge: c,
            endEdge: u,
            direction: d
          } = e, h = SE(r), f = {
            groupSlides: function(e) {
              return h ? function(e, t) {
                return AE(e).filter((e => e % t == 0)).map((r => e.slice(r, r + t)))
              }(e, r) : function(e) {
                return e.length ? AE(e).reduce(((r, h, f) => {
                  const p = LE(r) || 0,
                    m = 0 === p,
                    g = h === NE(e),
                    v = o[c] - i[p][c],
                    y = o[c] - i[h][u],
                    b = !n && m ? d(a) : 0,
                    _ = TE(y - (!n && g ? d(s) : 0) - (v + b));
                  return f && _ > t + l && r.push(h), g && r.push(e.length), r
                }), []).map(((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                })) : []
              }(e)
            }
          };
          return f
        }(P, O, g, d, S, C, R, I, 2), {
          snaps: M,
          snapsAligned: B
        } = function(e, t, r, n, o) {
          const {
            startEdge: i,
            endEdge: a
          } = e, {
            groupSlides: s
          } = o, l = s(n).map((e => LE(e)[a] - e[0][i])).map(TE).map(t.measure), c = n.map((e => r[i] - e[i])).map((e => -TE(e))), u = s(c).map((e => e[0])).map(((e, t) => e + l[t]));
          return {
            snaps: c,
            snapsAligned: u
          }
        }(P, k, S, C, D), H = -LE(M) + LE(N), {
          snapsContained: z,
          scrollContainLimit: F
        } = function(e, t, r, n) {
          const o = zE(-t + e, 0),
            i = r.map(((e, t) => {
              const {
                min: n,
                max: i
              } = o, a = o.constrain(e), l = !t, c = RE(r, t);
              return l ? i : c || s(n, a) ? n : s(i, a) ? i : a
            })).map((e => parseFloat(e.toFixed(3)))),
            a = function() {
              const e = i[0],
                t = LE(i);
              return zE(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function s(e, t) {
            return jE(e, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= e + 2) return [o.max];
              if ("keepSnaps" === n) return i;
              const {
                min: r,
                max: s
              } = a;
              return i.slice(r, s)
            }(),
            scrollContainLimit: a
          }
        }(O, H, B, y), V = j ? z : B, {
          limit: U
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: zE(r ? n - e : LE(t), n)
          }
        }(H, V, d), G = FE(NE(V), u, d), q = G.clone(), X = AE(r), W = function(e, t, r, n) {
          const o = HE(),
            i = 1e3 / 60;
          let a = null,
            s = 0,
            l = 0;

          function c(e) {
            if (!l) return;
            a || (a = e, r(), r());
            const o = e - a;
            for (a = e, s += o; s >= i;) r(), s -= i;
            n(s / i), l && (l = t.requestAnimationFrame(c))
          }

          function u() {
            t.cancelAnimationFrame(l), a = null, s = 0, l = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", (() => {
                e.hidden && (a = null, s = 0)
              }))
            },
            destroy: function() {
              u(), o.clear()
            },
            start: function() {
              l || (l = t.requestAnimationFrame(c))
            },
            stop: u,
            update: r,
            render: n
          }
        }(n, o, (() => (e => {
          let {
            dragHandler: t,
            scrollBody: r,
            scrollBounds: n,
            options: {
              loop: o
            }
          } = e;
          o || n.constrain(t.pointerDown()), r.seek()
        })(se)), (e => ((e, t) => {
          let {
            scrollBody: r,
            translate: n,
            location: o,
            offsetLocation: i,
            previousLocation: a,
            scrollLooper: s,
            slideLooper: l,
            dragHandler: c,
            animation: u,
            eventHandler: d,
            scrollBounds: h,
            options: {
              loop: f
            }
          } = e;
          const p = r.settled(),
            m = !h.shouldConstrain(),
            g = f ? p : p && m,
            v = g && !c.pointerDown();
          v && u.stop();
          const y = o.get() * t + a.get() * (1 - t);
          i.set(y), f && (s.loop(r.direction()), l.loop()), n.to(i.get()), v && d.emit("settle"), g || d.emit("scroll")
        })(se, e))), K = V[G.get()], $ = WE(K), Y = WE(K), Z = WE(K), Q = WE(K), J = function(e, t, r, n, o) {
          let i = 0,
            a = 0,
            s = o,
            l = .68,
            c = e.get(),
            u = 0;

          function d(e) {
            return s = e, f
          }

          function h(e) {
            return l = e, f
          }
          const f = {
            direction: function() {
              return a
            },
            duration: function() {
              return s
            },
            velocity: function() {
              return i
            },
            seek: function() {
              const t = n.get() - e.get();
              let o = 0;
              return s ? (r.set(e), i += t / s, i *= l, c += i, e.add(i), o = c - u) : (i = 0, r.set(n), e.set(n), o = t), a = kE(o), u = c, f
            },
            settled: function() {
              return TE(n.get() - t.get()) < .001
            },
            useBaseFriction: function() {
              return h(.68)
            },
            useBaseDuration: function() {
              return d(o)
            },
            useFriction: h,
            useDuration: d
          };
          return f
        }($, Z, Y, Q, h), ee = function(e, t, r, n, o) {
          const {
            reachedAny: i,
            removeOffset: a,
            constrain: s
          } = n;

          function l(e) {
            return e.concat().sort(((e, t) => TE(e) - TE(t)))[0]
          }

          function c(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const i = o.filter((e => kE(e) === n));
            return i.length ? l(i) : LE(o) - r
          }
          const u = {
            byDistance: function(r, n) {
              const l = o.get() + r,
                {
                  index: u,
                  distance: d
                } = function(r) {
                  const n = e ? a(r) : s(r),
                    o = t.map(((e, t) => ({
                      diff: c(e - n, 0),
                      index: t
                    }))).sort(((e, t) => TE(e.diff) - TE(t.diff))),
                    {
                      index: i
                    } = o[0];
                  return {
                    index: i,
                    distance: n
                  }
                }(l),
                h = !e && i(l);
              return !n || h ? {
                index: u,
                distance: r
              } : {
                index: u,
                distance: r + c(t[u] - d, 0)
              }
            },
            byIndex: function(e, r) {
              return {
                index: e,
                distance: c(t[e] - o.get(), r)
              }
            },
            shortcut: c
          };
          return u
        }(d, V, H, U, Q), te = function(e, t, r, n, o, i, a) {
          function s(o) {
            const s = o.distance,
              l = o.index !== t.get();
            i.add(s), s && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), l && (r.set(t.get()), t.set(o.index), a.emit("select"))
          }
          const l = {
            distance: function(e, t) {
              s(o.byDistance(e, t))
            },
            index: function(e, r) {
              const n = t.clone().set(e);
              s(o.byIndex(n.get(), r))
            }
          };
          return l
        }(W, G, q, J, ee, Q, a), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(U), ne = HE(), oe = function(e, t, r, n) {
          const o = {};
          let i, a = null,
            s = null,
            l = !1;
          const c = {
            init: function() {
              i = new IntersectionObserver((e => {
                l || (e.forEach((e => {
                  const r = t.indexOf(e.target);
                  o[r] = e
                })), a = null, s = null, r.emit("slidesInView"))
              }), {
                root: e.parentElement,
                threshold: n
              }), t.forEach((e => i.observe(e)))
            },
            destroy: function() {
              i && i.disconnect(), l = !0
            },
            get: function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              if (e && a) return a;
              if (!e && s) return s;
              const t = function(e) {
                return DE(o).reduce(((t, r) => {
                  const n = parseInt(r),
                    {
                      isIntersecting: i
                    } = o[n];
                  return (e && i || !e && !i) && t.push(n), t
                }), [])
              }(e);
              return e && (a = t), e || (s = t), t
            }
          };
          return c
        }(t, r, a, m), {
          slideRegistry: ie
        } = function(e, t, r, n, o, i) {
          const {
            groupSlides: a
          } = o, {
            min: s,
            max: l
          } = n, c = function() {
            const n = a(i),
              o = !e || "keepSnaps" === t;
            return 1 === r.length ? [i] : o ? n : n.slice(s, l).map(((e, t, r) => {
              const n = !t,
                o = RE(r, t);
              return n ? IE(LE(r[0]) + 1) : o ? IE(NE(i) - LE(r)[0] + 1, LE(r)[0]) : e
            }))
          }();
          return {
            slideRegistry: c
          }
        }(j, y, V, F, D, X), ae = function(e, t, r, n, o, i, a, s) {
          const l = {
            passive: !0,
            capture: !0
          };
          let c = 0;

          function u(e) {
            "Tab" === e.code && (c = (new Date).getTime())
          }
          const d = {
            init: function(d) {
              s && (i.add(document, "keydown", u, !1), t.forEach(((t, u) => {
                i.add(t, "focus", (t => {
                  (PE(s) || s(d, t)) && function(t) {
                    if ((new Date).getTime() - c > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = r.findIndex((e => e.includes(t)));
                    SE(i) && (o.useDuration(0), n.index(i, 0), a.emit("slideFocus"))
                  }(u)
                }), l)
              })))
            }
          };
          return d
        }(e, r, ie, te, J, ne, a, x), se = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: a,
          containerRect: S,
          slideRects: C,
          animation: W,
          axis: P,
          dragHandler: VE(P, e, n, o, Q, UE(P, o), $, W, te, J, ee, G, a, T, f, p, v, .68, w),
          eventStore: ne,
          percentOfView: T,
          index: G,
          indexPrevious: q,
          limit: U,
          location: $,
          offsetLocation: Z,
          previousLocation: Y,
          options: i,
          resizeHandler: GE(t, a, o, r, P, b, E),
          scrollBody: J,
          scrollBounds: qE(U, Z, Q, J, T),
          scrollLooper: XE(H, U, Z, [$, Z, Y, Q]),
          scrollProgress: re,
          scrollSnapList: V.map(re.get),
          scrollSnaps: V,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: $E(P, O, H, L, N, M, V, Z, r),
          slideFocus: ae,
          slidesHandler: YE(t, a, _),
          slidesInView: oe,
          slideIndexes: X,
          slideRegistry: ie,
          slidesToScroll: D,
          target: Q,
          translate: KE(P, t)
        };
        return se
      }
      const QE = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
        watchFocus: !0
      };

      function JE(e) {
        function t(e, t) {
          return ME(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = DE(n).filter((t => e.matchMedia(t).matches)).map((e => n[e])).reduce(((e, r) => t(e, r)), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map((e => DE(e.breakpoints || {}))).reduce(((e, t) => e.concat(t)), []).map(e.matchMedia)
          }
        };
        return r
      }

      function eS(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          i = JE(o),
          a = function(e) {
            let t = [];
            const r = {
              init: function(r, n) {
                return t = n.filter((t => {
                  let {
                    options: r
                  } = t;
                  return !1 !== e.optionsAtMedia(r).active
                })), t.forEach((t => t.init(r, e))), n.reduce(((e, t) => Object.assign(e, {
                  [t.name]: t
                })), {})
              },
              destroy: function() {
                t = t.filter((e => e.destroy()))
              }
            };
            return r
          }(i),
          s = HE(),
          l = function() {
            let e, t = {};

            function r(e) {
              return t[e] || []
            }
            const n = {
              init: function(t) {
                e = t
              },
              emit: function(t) {
                return r(t).forEach((r => r(e, t))), n
              },
              off: function(e, o) {
                return t[e] = r(e).filter((e => e !== o)), n
              },
              on: function(e, o) {
                return t[e] = r(e).concat([o]), n
              },
              clear: function() {
                t = {}
              }
            };
            return n
          }(),
          {
            mergeOptions: c,
            optionsAtMedia: u,
            optionsMediaQueries: d
          } = i,
          {
            on: h,
            off: f,
            emit: p
          } = l,
          m = P;
        let g, v, y, b, _ = !1,
          w = c(QE, eS.globalOptions),
          x = c(w),
          E = [];

        function S(t) {
          const r = ZE(e, y, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? S(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function C(t, r) {
          _ || (w = c(w, t), x = u(w), E = r || E, function() {
            const {
              container: t,
              slides: r
            } = x, n = CE(t) ? e.querySelector(t) : t;
            y = n || e.children[0];
            const o = CE(r) ? y.querySelectorAll(r) : r;
            b = [].slice.call(o || y.children)
          }(), g = S(x), d([w, ...E.map((e => {
            let {
              options: t
            } = e;
            return t
          }))]).forEach((e => s.add(e, "change", P))), x.active && (g.translate.to(g.location.get()), g.animation.init(), g.slidesInView.init(), g.slideFocus.init(j), g.eventHandler.init(j), g.resizeHandler.init(j), g.slidesHandler.init(j), g.options.loop && g.slideLooper.loop(), y.offsetParent && b.length && g.dragHandler.init(j), v = a.init(j, E)))
        }

        function P(e, t) {
          const r = k();
          O(), C(c({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function O() {
          g.dragHandler.destroy(), g.eventStore.clear(), g.translate.clear(), g.slideLooper.clear(), g.resizeHandler.destroy(), g.slidesHandler.destroy(), g.slidesInView.destroy(), g.animation.destroy(), a.destroy(), s.clear()
        }

        function T(e, t, r) {
          x.active && !_ && (g.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : x.duration), g.scrollTo.index(e, r || 0))
        }

        function k() {
          return g.index.get()
        }
        const j = {
          canScrollNext: function() {
            return g.index.add(1).get() !== k()
          },
          canScrollPrev: function() {
            return g.index.add(-1).get() !== k()
          },
          containerNode: function() {
            return y
          },
          internalEngine: function() {
            return g
          },
          destroy: function() {
            _ || (_ = !0, s.clear(), O(), l.emit("destroy"), l.clear())
          },
          off: f,
          on: h,
          emit: p,
          plugins: function() {
            return v
          },
          previousScrollSnap: function() {
            return g.indexPrevious.get()
          },
          reInit: m,
          rootNode: function() {
            return e
          },
          scrollNext: function(e) {
            T(g.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            T(g.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return g.scrollProgress.get(g.offsetLocation.get())
          },
          scrollSnapList: function() {
            return g.scrollSnapList
          },
          scrollTo: T,
          selectedScrollSnap: k,
          slideNodes: function() {
            return b
          },
          slidesInView: function() {
            return g.slidesInView.get()
          },
          slidesNotInView: function() {
            return g.slidesInView.get(!1)
          }
        };
        return C(t, r), setTimeout((() => l.emit("init")), 0), j
      }

      function tS() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const r = (0, h.useRef)(e),
          n = (0, h.useRef)(t),
          [o, i] = (0, h.useState)(),
          [a, s] = (0, h.useState)(),
          l = (0, h.useCallback)((() => {
            o && o.reInit(r.current, n.current)
          }), [o]);
        return (0, h.useEffect)((() => {
          xE(r.current, e) || (r.current = e, l())
        }), [e, l]), (0, h.useEffect)((() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = EE(e),
              n = EE(t);
            return r.every(((e, t) => xE(e, n[t])))
          })(n.current, t) || (n.current = t, l())
        }), [t, l]), (0, h.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            eS.globalOptions = tS.globalOptions;
            const e = eS(a, r.current, n.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }), [a, i]), [s, o]
      }

      function rS() {
        let e, t = [];
        const r = ["select", "slideFocus"];

        function n() {
          const {
            slideRegistry: r
          } = e.internalEngine(), n = r[e.selectedScrollSnap()];
          return n ? n.map((e => t[e])).reduce(((e, t) => Math.max(e, t)), 0) : null
        }

        function o() {
          null !== n() && (e.containerNode().style.height = `${n()}px`)
        }
        return {
          name: "autoHeight",
          options: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          init: function(n) {
            e = n;
            const {
              options: {
                axis: i
              },
              slideRects: a
            } = e.internalEngine();
            "y" !== i && (t = a.map((e => e.height)), r.forEach((t => e.on(t, o))), o())
          },
          destroy: function() {
            r.forEach((t => e.off(t, o)));
            const t = e.containerNode();
            t.style.height = "", t.getAttribute("style") || t.removeAttribute("style")
          }
        }
      }
      eS.globalOptions = void 0, tS.globalOptions = void 0, rS.globalOptions = void 0;
      const nS = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function oS(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function iS(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function aS(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function sS() {
        let e, t, r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = [],
          a = [];
        const s = ["select"],
          l = ["pointerDown", "pointerUp"],
          c = ["slidesInView"],
          u = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: []
          };

        function d(e, t) {
          ("pointerDown" === t ? aS : iS)(r, u.dragging)
        }

        function h() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 2 ? arguments[2] : void 0;
          const r = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((e => n[e])),
            o = e.map((e => n[e]));
          return r.forEach((e => iS(e, t))), o.forEach((e => aS(e, t))), e
        }

        function f() {
          const {
            slideRegistry: e
          } = t.internalEngine(), r = e[t.selectedScrollSnap()];
          i = h(r, i, u.snapped)
        }

        function p() {
          const e = t.slidesInView();
          a = h(e, a, u.inView)
        }
        const m = {
          name: "classNames",
          options: o,
          init: function(i, a) {
            t = i;
            const {
              mergeOptions: h,
              optionsAtMedia: m
            } = a, g = h(nS, sS.globalOptions), v = h(g, o);
            e = m(v), r = t.rootNode(), n = t.slideNodes();
            const {
              watchDrag: y,
              loop: b
            } = t.internalEngine().options, _ = !!y;
            e.loop && b && (u.loop = oS(e.loop), aS(r, u.loop)), e.draggable && _ && (u.draggable = oS(e.draggable), aS(r, u.draggable)), e.dragging && (u.dragging = oS(e.dragging), l.forEach((e => t.on(e, d)))), e.snapped && (u.snapped = oS(e.snapped), s.forEach((e => t.on(e, f))), f()), e.inView && (u.inView = oS(e.inView), c.forEach((e => t.on(e, p))), p())
          },
          destroy: function() {
            l.forEach((e => t.off(e, d))), s.forEach((e => t.off(e, f))), c.forEach((e => t.off(e, p))), iS(r, u.loop), iS(r, u.draggable), iS(r, u.dragging), h([], i, u.snapped), h([], a, u.inView), Object.keys(u).forEach((e => {
              u[e] = []
            }))
          }
        };
        return m
      }
      sS.globalOptions = void 0;
      const lS = (0, h.createContext)(null);

      function cS() {
        const e = (0, h.useContext)(lS);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const uS = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: i,
          align: a = "left",
          ...s
        }, l) => {
          const c = (({
              loopPagination: e = !0
            }) => {
              const t = Y(),
                r = q(),
                [n, o] = (0, h.useState)([]),
                i = n.length,
                [a, s] = (0, h.useState)(0),
                [l, c] = tS({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [rS(), sS()]),
                u = (0, h.useRef)(0),
                d = (0, h.useRef)(!1),
                f = n[a],
                p = (0, h.useCallback)((e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach(((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  })), s(t), d.current = !0
                }), [c]),
                m = (0, h.useCallback)((e => {
                  u.current = .94 * e.scrollSnapList().length
                }), []),
                g = (0, h.useCallback)(((e, t) => {
                  const r = e.internalEngine(),
                    n = e.scrollProgress(),
                    o = e.slidesInView(),
                    i = "scroll" === t;
                  e.scrollSnapList().forEach(((t, a) => {
                    let s = t - n;
                    r.slideRegistry[a].forEach((a => {
                      if (i && !o.includes(a)) return;
                      r.options.loop && r.slideLooper.loopPoints.forEach((e => {
                        const r = e.target();
                        if (a === e.index && 0 !== r) {
                          const e = Math.sign(r); - 1 === e && (s = t - (1 + n)), 1 === e && (s = t + (1 - n))
                        }
                      }));
                      const l = (c = 1 - Math.abs(s * u.current), Math.min(Math.max(c, 0), 1)).toString();
                      var c;
                      e.slideNodes()[a].style.opacity = l
                    }))
                  }))
                }), []);
              return (0, h.useEffect)((() => {
                c && (m(c), g(c), c.on("reInit", m).on("reInit", g).on("scroll", g).on("slideFocus", g))
              }), [c, g]), (0, h.useEffect)((() => {
                c && (p(c), c.on("select", p).on("reInit", p))
              }), [c, p]), {
                setAlerts: o,
                alerts: n,
                numAlerts: i,
                emblaRef: l,
                prevAlert: () => c?.scrollPrev(r),
                nextAlert: () => c?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: a,
                setCurrentAlertIndex: s,
                isInitialized: d.current,
                loopPagination: e,
                canScrollNext: () => c?.canScrollNext() || !1,
                canScrollPrev: () => c?.canScrollPrev() || !1
              }
            })({
              loopPagination: n
            }),
            {
              currentAlert: f,
              isInitialized: m,
              setAlerts: g,
              numAlerts: v
            } = c;
          (0, h.useEffect)((() => {
            o && i && g([{
              status: o,
              background: i,
              align: a
            }])
          }), []);
          const y = v > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            b = (0, d.v6)(s, {
              className: _E(f)
            }, y),
            _ = e ? p.DX : "div";
          return (0, u.jsx)(lS.Provider, {
            value: c,
            children: (0, u.jsx)(_, {
              ref: l,
              "data-testid": r,
              "data-initialized": m,
              ...b,
              children: t
            })
          })
        })),
        dS = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        hS = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = cS();
          if (!e && !n || !n?.status) return null;
          const o = e || dS[n.status],
            i = z[o],
            a = (0, d.v6)(t, {
              className: "foundry_hcgxh_qmpv6yn"
            });
          return (0, u.jsx)(i, {
            title: "",
            ref: r,
            size: "LG",
            "data-icon": !0,
            ...a
          })
        })),
        fS = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? p.DX : "div",
            i = (0, d.v6)(r, {
              className: "foundry_hcgxh_qmpv6yo"
            });
          return (0, u.jsx)(H, {
            size: "SM",
            asChild: !0,
            children: (0, u.jsx)(o, {
              ref: n,
              "data-testid": t,
              ...i
            })
          })
        })),
        pS = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...i
        }, a) => {
          const s = e ? p.DX : "div",
            l = (0, d.v6)(i, {
              className: "foundry_hcgxh_qmpv6yk"
            });
          return (0, u.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...l
          })
        })),
        mS = (0, h.forwardRef)((({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = cS(), a = (0, d.v6)(r, {
            className: "foundry_hcgxh_qmpv6yl"
          }), s = G(i, n), l = h.Children.map(t, (e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          }));
          return (0, h.useEffect)((() => {
            l && o(l)
          }), []), (0, u.jsx)("div", {
            ref: s,
            "data-testid": e,
            ...a,
            children: (0, u.jsx)("div", {
              className: "foundry_hcgxh_qmpv6ym",
              children: t
            })
          })
        })),
        gS = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, h.useRef)(null),
            a = G(i, o),
            s = e ? p.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = qx(n, i),
            f = (0, d.v6)(n, {
              className: "foundry_hcgxh_qmpv6yp foundry_hcgxh_1d5mo5m0"
            });
          return (0, u.jsx)(H, {
            asChild: !0,
            size: "SM",
            appearance: "hyperlink",
            children: (0, u.jsx)(s, {
              "data-pressed": c,
              "data-testid": r,
              ref: a,
              ...l,
              ...f,
              children: t
            })
          })
        })),
        vS = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const n = (0, d.v6)(t, {
            className: "foundry_hcgxh_qmpv6yq"
          });
          return (0, u.jsx)(sp, {
            ref: r,
            label: "close alert",
            "data-close-btn": !0,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "XS",
            ...n
          })
        })),
        yS = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const i = e ? p.DX : "div",
            a = (0, d.v6)(n, {
              className: "foundry_hcgxh_qmpv6ys"
            });
          return (0, u.jsx)(i, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            "aria-label": "alert navigation",
            ...a,
            children: r
          })
        })),
        bS = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = cS(), i = (0, d.v6)(t, {
            className: bE
          });
          return (0, u.jsx)(sp, {
            ref: r,
            label: "next alert",
            size: "XS",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...i
          })
        })),
        _S = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = cS(), i = (0, d.v6)(t, {
            className: bE
          });
          return (0, u.jsx)(sp, {
            ref: r,
            label: "previous alert",
            size: "XS",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...i
          })
        })),
        wS = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = cS(), i = (0, d.v6)(t, {
            className: "foundry_hcgxh_qmpv6yr"
          });
          return (0, u.jsx)(H, {
            size: "SM",
            appearance: "bold",
            asChild: !0,
            children: (0, u.jsxs)("div", {
              ref: r,
              "data-testid": e,
              "aria-hidden": !0,
              ...i,
              children: [n + 1, "/", o]
            })
          })
        }));

      function xS(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function ES(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function SS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ES(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = xS(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ES(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function CS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var PS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        OS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = SS(SS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) PS(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return CS(e.variantClassNames, (e => CS(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        TS = OS({
          defaultClassName: "foundry_hcgxh_oahh5811",
          variantClassNames: {
            background: {
              static: "foundry_hcgxh_oahh5812",
              "two-tone": "foundry_hcgxh_oahh5813",
              none: "foundry_hcgxh_oahh5814"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        kS = OS({
          defaultClassName: "foundry_hcgxh_oahh583",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_oahh584",
              LG: "foundry_hcgxh_oahh585"
            },
            hasBorder: {
              true: "foundry_hcgxh_oahh586",
              false: "foundry_hcgxh_oahh587"
            },
            background: {
              static: "foundry_hcgxh_oahh588",
              "two-tone": "foundry_hcgxh_oahh589",
              none: "foundry_hcgxh_oahh58a"
            },
            color: {
              monochrome: "foundry_hcgxh_oahh58b",
              blue: "foundry_hcgxh_oahh58c",
              green: "foundry_hcgxh_oahh58d",
              grey: "foundry_hcgxh_oahh58e",
              red: "foundry_hcgxh_oahh58f",
              seafoam: "foundry_hcgxh_oahh58g",
              yellow: "foundry_hcgxh_oahh58h"
            },
            isDisabled: {
              true: "foundry_hcgxh_oahh58i",
              false: "foundry_hcgxh_oahh58j"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              background: "static",
              color: "monochrome"
            }, "foundry_hcgxh_oahh58k"],
            [{
              background: "static",
              color: "blue"
            }, "foundry_hcgxh_oahh58l"],
            [{
              background: "static",
              color: "green"
            }, "foundry_hcgxh_oahh58m"],
            [{
              background: "static",
              color: "grey"
            }, "foundry_hcgxh_oahh58n"],
            [{
              background: "static",
              color: "red"
            }, "foundry_hcgxh_oahh58o"],
            [{
              background: "static",
              color: "seafoam"
            }, "foundry_hcgxh_oahh58p"],
            [{
              background: "static",
              color: "yellow"
            }, "foundry_hcgxh_oahh58q"],
            [{
              background: "two-tone",
              color: "monochrome"
            }, "foundry_hcgxh_oahh58r"],
            [{
              background: "two-tone",
              color: "blue"
            }, "foundry_hcgxh_oahh58s"],
            [{
              background: "two-tone",
              color: "green"
            }, "foundry_hcgxh_oahh58t"],
            [{
              background: "two-tone",
              color: "grey"
            }, "foundry_hcgxh_oahh58u"],
            [{
              background: "two-tone",
              color: "red"
            }, "foundry_hcgxh_oahh58v"],
            [{
              background: "two-tone",
              color: "seafoam"
            }, "foundry_hcgxh_oahh58w"],
            [{
              background: "two-tone",
              color: "yellow"
            }, "foundry_hcgxh_oahh58x"],
            [{
              hasBorder: !1,
              background: "none",
              isDisabled: !1
            }, "foundry_hcgxh_oahh58y"]
          ]
        });
      const jS = (0, h.createContext)(null);

      function AS() {
        const e = (0, h.useContext)(jS);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const LS = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: i,
          hasBorder: a,
          isDisabled: s,
          ...l
        }, c) => {
          const h = {
              size: n,
              background: o,
              color: i,
              hasBorder: a,
              isDisabled: s
            },
            f = (0, d.v6)(l, {
              className: kS(h)
            }),
            m = e ? p.DX : "div";
          return (0, u.jsx)(jS.Provider, {
            value: h,
            children: (0, u.jsx)(m, {
              ref: c,
              "data-testid": r,
              "aria-disabled": s,
              ...f,
              children: t
            })
          })
        })),
        NS = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: i
          } = AS(), a = e ? p.DX : "div", s = (0, d.v6)(n, {
            className: "foundry_hcgxh_oahh58z"
          });
          return (0, u.jsx)(H, {
            size: "MD" === i ? "SM" : "LG",
            asChild: !0,
            children: (0, u.jsx)(a, {
              ref: o,
              "data-testid": r,
              ...s,
              children: t
            })
          })
        })),
        RS = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const n = z[e],
            o = (0, d.v6)(t, {
              className: "foundry_hcgxh_oahh5810"
            });
          return (0, u.jsx)(n, {
            ref: r,
            size: "MD",
            ...o
          })
        })),
        IS = (0, h.forwardRef)((({
          testId: e,
          label: t = "close tag",
          ...r
        }, n) => {
          const {
            background: o,
            isDisabled: i
          } = AS(), a = (0, d.v6)(r, {
            className: TS({
              background: o
            })
          });
          return (0, u.jsx)(sp, {
            ref: n,
            label: t,
            "data-testid": e,
            "data-close-btn": !0,
            appearance: "ghost",
            icon: "X",
            size: "XS",
            isDisabled: i,
            ...a
          })
        }));

      function DS(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function MS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function BS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? MS(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = DS(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : MS(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function HS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var zS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        FS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = BS(BS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) zS(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return HS(e.variantClassNames, (e => HS(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        VS = FS({
          defaultClassName: "foundry_hcgxh_m1icrx6 foundry_hcgxh_1d5mo5m0",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_m1icrx7 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd11",
              LG: "foundry_hcgxh_m1icrx8 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdw foundry_hcgxh_tdsdcd11"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        US = FS({
          defaultClassName: "foundry_hcgxh_m1icrx3",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd11",
              LG: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdw foundry_hcgxh_tdsdcd11"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        GS = FS({
          defaultClassName: "foundry_hcgxh_m1icrx0",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_m1icrx1",
              LG: "foundry_hcgxh_m1icrx2"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function qS() {
        const e = (0, h.useContext)(XS);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const XS = (0, h.createContext)(null),
        WS = (0, h.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, i) => {
          const a = (0, d.v6)({
              className: GS({
                size: n
              })
            }, o),
            s = r ? p.DX : "ol";
          return (0, u.jsx)(XS.Provider, {
            value: {
              size: n
            },
            children: (0, u.jsx)(s, {
              ref: i,
              "data-testid": t,
              ...a,
              children: e
            })
          })
        })),
        KS = (0, h.forwardRef)((({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, i) => {
          const a = (0, h.useRef)(null),
            {
              size: s
            } = qS(),
            {
              itemProps: l
            } = function(e, t) {
              let {
                isCurrent: r,
                isDisabled: n,
                "aria-current": o,
                elementType: i = "a",
                ...a
              } = e, {
                linkProps: s
              } = qx({
                isDisabled: n || r,
                elementType: i,
                ...a
              }, t), l = {};
              return /^h[1-6]$/.test(i) || (l = s), r && (l["aria-current"] = o || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": n,
                  ...l
                }
              }
            }({
              isCurrent: e,
              children: t
            }, a),
            c = r ? p.DX : "a",
            f = (0, d.v6)({
              className: (0, L.$)(VS({
                size: s
              }), e && "foundry_hcgxh_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, u.jsx)("li", {
            className: US({
              size: s
            }),
            ref: i,
            children: (0, u.jsx)(c, {
              ref: a,
              ...f,
              children: t
            })
          })
        })),
        $S = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const n = z[e];
          return (0, u.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        })),
        YS = (0, h.forwardRef)((({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n = "Show hidden breadcrumbs",
          ...o
        }, i) => {
          const [a, s] = (0, h.useState)(r), {
            size: l
          } = qS(), c = (0, d.v6)({
            className: US({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, u.jsx)("li", {
            ref: i,
            ...c,
            children: (0, u.jsxs)(Wy, {
              open: a,
              onOpenChange: () => s(!a),
              children: [(0, u.jsx)(Ky, {
                className: "foundry_hcgxh_m1icrxa foundry_hcgxh_1d5mo5m0 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd11",
                "aria-label": n,
                children: "..."
              }), (0, u.jsx)(Zy, {
                children: (0, u.jsx)(Qy, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_hcgxh_m1icrxb",
                  children: (0, u.jsx)(Jy, {
                    className: "foundry_hcgxh_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        })),
        ZS = (0, h.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const i = t ? p.DX : eb,
            a = (0, d.v6)({
              className: "foundry_hcgxh_m1icrxd foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd10",
              "data-testid": r
            }, n);
          return (0, u.jsx)(i, {
            ref: o,
            ...a,
            children: e
          })
        }))
    },
    79895: e => {
      var t = {}.hasOwnProperty,
        r = /[ -,\.\/:-@\[-\^`\{-~]/,
        n = /[ -,\.\/:-@\[\]\^`\{-~]/,
        o = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        i = function e(i, a) {
          "single" != (a = function(e, r) {
            if (!e) return r;
            var n = {};
            for (var o in r) n[o] = t.call(e, o) ? e[o] : r[o];
            return n
          }(a, e.options)).quotes && "double" != a.quotes && (a.quotes = "single");
          for (var s = "double" == a.quotes ? '"' : "'", l = a.isIdentifier, c = i.charAt(0), u = "", d = 0, h = i.length; d < h;) {
            var f = i.charAt(d++),
              p = f.charCodeAt(),
              m = void 0;
            if (p < 32 || p > 126) {
              if (p >= 55296 && p <= 56319 && d < h) {
                var g = i.charCodeAt(d++);
                56320 == (64512 & g) ? p = ((1023 & p) << 10) + (1023 & g) + 65536 : d--
              }
              m = "\\" + p.toString(16).toUpperCase() + " "
            } else m = a.escapeEverything ? r.test(f) ? "\\" + f : "\\" + p.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(f) ? "\\" + p.toString(16).toUpperCase() + " " : "\\" == f || !l && ('"' == f && s == f || "'" == f && s == f) || l && n.test(f) ? "\\" + f : f;
            u += m
          }
          return l && (/^-[-\d]/.test(u) ? u = "\\-" + u.slice(1) : /\d/.test(c) && (u = "\\3" + c + " " + u.slice(1))), u = u.replace(o, (function(e, t, r) {
            return t && t.length % 2 ? e : (t || "") + r
          })), !l && a.wrap ? s + u + s : u
        };
      i.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, i.version = "3.0.0", e.exports = i
    }
  }
]);