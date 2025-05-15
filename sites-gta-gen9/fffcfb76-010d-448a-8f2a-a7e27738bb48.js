! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fffcfb76-010d-448a-8f2a-a7e27738bb48", e._sentryDebugIdIdentifier = "sentry-dbid-fffcfb76-010d-448a-8f2a-a7e27738bb48")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [4075], {
    27574: (e, t, n) => {
      n.r(t), n.d(t, {
        Alert: () => a,
        AlertBanner: () => s,
        Body: () => H,
        Breadcrumbs: () => u,
        Button: () => co,
        Checkbox: () => Yb,
        Code: () => gw,
        Display: () => nw,
        Divider: () => H_,
        Dropdown: () => Ob,
        Heading: () => k,
        IconButton: () => sp,
        Label: () => uw,
        Lightbox: () => Dv,
        Loader: () => Pw,
        Option: () => Tb,
        RadioButton: () => L_,
        RadioContext: () => k_,
        RadioGroup: () => j_,
        Switch: () => tw,
        Tag: () => l,
        Text: () => A,
        TextArea: () => Ht,
        TextField: () => i,
        TextSemantics: () => T,
        Tooltip: () => Vm
      });
      var r = {};
      n.r(r), n.d(r, {
        CheckLG: () => Nb,
        CheckMD: () => Lb,
        CheckXL: () => Rb,
        DashLG: () => Mb,
        DashMD: () => Ib,
        DashXL: () => Db
      });
      var o = {};
      n.r(o), n.d(o, {
        DotLG: () => C_,
        DotMD: () => S_,
        DotXL: () => x_
      });
      var i = {};
      n.r(i), n.d(i, {
        Button: () => AE,
        Control: () => PE,
        Description: () => NE,
        Hint: () => xE,
        Icon: () => TE,
        Input: () => OE,
        Label: () => CE,
        PasswordButton: () => LE,
        Root: () => SE
      });
      var a = {};
      n.r(a), n.d(a, {
        Body: () => KE,
        CloseButton: () => nk,
        Description: () => QE,
        ErrorText: () => tk,
        Footer: () => ek,
        Header: () => WE,
        Icon: () => YE,
        Link: () => JE,
        Root: () => XE,
        RootContext: () => GE,
        Title: () => ZE,
        iconStatusMap: () => $E,
        useAlertContext: () => qE
      });
      var s = {};
      n.r(s), n.d(s, {
        Alert: () => rj,
        CloseButton: () => aj,
        Description: () => nj,
        Icon: () => tj,
        Link: () => ij,
        PaginationCounter: () => cj,
        PaginationNav: () => sj,
        PaginationNextButton: () => lj,
        PaginationPrevButton: () => uj,
        PaginationViewport: () => oj,
        Root: () => Jk,
        RootContext: () => Zk,
        iconStatusMap: () => ej,
        useAlertBannerContext: () => Qk
      });
      var l = {};
      n.r(l), n.d(l, {
        CloseButton: () => jj,
        Icon: () => kj,
        Label: () => Ej,
        Root: () => wj,
        RootContext: () => bj,
        useTagContext: () => _j
      });
      var u = {};
      n.r(u), n.d(u, {
        Icon: () => Bj,
        Item: () => Dj,
        OverflowMenu: () => Hj,
        OverflowMenuItem: () => zj,
        Root: () => Mj,
        RootContext: () => Ij,
        useBreadcrumbsContext: () => Rj
      });
      var c = n(25854),
        d = n(38763),
        h = n(62229),
        f = n.n(h),
        p = n(30109);

      function m(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? g(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = m(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function y(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var b, _, w = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        E = (b = {
          defaultClassName: "foundry_nk7jgu_vsn8np0",
          variantClassNames: {
            level: {
              1: "foundry_nk7jgu_tdsdcd2 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd4",
              2: "foundry_nk7jgu_tdsdcd2 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd5",
              3: "foundry_nk7jgu_tdsdcd2 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd6",
              4: "foundry_nk7jgu_tdsdcd2 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd7",
              5: "foundry_nk7jgu_tdsdcd2 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd8",
              6: "foundry_nk7jgu_tdsdcd2 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, _ = e => {
          var t = b.defaultClassName,
            n = v(v({}, b.defaultVariants), e);
          for (var r in n) {
            var o, i = null !== (o = n[r]) && void 0 !== o ? o : b.defaultVariants[r];
            if (null != i) {
              var a = i;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var s = b.variantClassNames[r][a];
              s && (t += " " + s)
            }
          }
          for (var [l, u] of b.compoundVariants) w(l, n, b.defaultVariants) && (t += " " + u);
          return t
        }, _.variants = () => Object.keys(b.variantClassNames), _.classNames = {
          get base() {
            return b.defaultClassName.split(" ")[0]
          },
          get variants() {
            return y(b.variantClassNames, (e => y(e, (e => e.split(" ")[0]))))
          }
        }, _);
      const k = (0, h.forwardRef)((({
        asChild: e,
        level: t,
        testId: n,
        ...r
      }, o) => {
        const i = e ? p.DX : `h${t}`,
          a = (0, d.v6)(r, {
            className: E({
              level: t
            })
          });
        return (0, c.jsx)(i, {
          ref: o,
          "data-testid": n,
          ...a
        })
      }));

      function j(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function S(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? S(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = j(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function x(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var P = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        O = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = C(C({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) P(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return x(e.variantClassNames, (e => x(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_12nwidl0",
          variantClassNames: {
            semantic: {
              abbr: "foundry_nk7jgu_12nwidl1",
              cite: "foundry_nk7jgu_12nwidl2",
              emphasis: "foundry_nk7jgu_12nwidl3",
              idiomatic: "foundry_nk7jgu_12nwidl4",
              mark: "foundry_nk7jgu_12nwidl5",
              "strike-through": "foundry_nk7jgu_12nwidl6",
              strong: "foundry_nk7jgu_12nwidl7",
              sub: "foundry_nk7jgu_12nwidl8",
              sup: "foundry_nk7jgu_12nwidl9",
              underline: "foundry_nk7jgu_12nwidla",
              default: "foundry_nk7jgu_12nwidlb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const T = {
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
          semantic: n = "default",
          ...r
        }, o) => {
          const i = e ? p.DX : T[n] || "span",
            a = (0, d.v6)(r, {
              className: O({
                semantic: n
              })
            });
          return (0, c.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }));
      var L = n(68879);

      function N(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function R(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? R(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = N(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function M(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var D = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        B = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = I(I({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) D(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return M(e.variantClassNames, (e => M(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdw",
              MD: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx",
              SM: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdy",
              XS: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz"
            },
            appearance: {
              default: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd10",
              bold: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd11",
              hyperlink: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const H = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const a = e ? p.DX : "p",
          s = (0, d.v6)({
            className: B({
              size: r,
              appearance: n
            })
          }, o);
        return (0, c.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      }));
      var z = n(23299),
        F = n(67915);

      function V(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const r = e => F.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, i] = (0, h.useState)((() => n ? r(e) : t));

        function a() {
          i(r(e))
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
          n = t.current.value;
        return e !== n && (t.current = {
          value: e,
          prev: n
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
        enabled: n = !0
      }) => {
        const r = (0, h.useRef)(),
          [o, i] = (0, h.useState)(!1),
          a = (0, h.useCallback)((() => {
            i(!0)
          }), []),
          s = (0, h.useCallback)((() => {
            let t = 0;
            return (...n) => {
              const o = Date.now();
              o - t >= 500 && (t = o, (() => {
                i(!1), window.clearTimeout(r.current), r.current = window.setTimeout(a, e)
              })(...n))
            }
          })(), []),
          l = (0, h.useCallback)((() => {
            window.clearTimeout(r.current), r.current = window.setTimeout(a, t)
          }), []),
          u = (0, h.useCallback)((() => {
            document.hidden || s()
          }), []);
        return (0, h.useEffect)((() => {
          const e = () => {
            window.removeEventListener("mousemove", s), window.removeEventListener("mousedown", s), window.removeEventListener("resize", s), window.removeEventListener("keydown", s), window.removeEventListener("touchstart", s), window.removeEventListener("wheel", s), document.removeEventListener("mouseleave", l), document.removeEventListener("visibilitychange", u), window.clearTimeout(r.current), i(!1)
          };
          return n ? (window.addEventListener("mousemove", s), window.addEventListener("mousedown", s), window.addEventListener("resize", s), window.addEventListener("keydown", s), window.addEventListener("touchstart", s), window.addEventListener("wheel", s), document.addEventListener("mouseleave", l), document.addEventListener("visibilitychange", u), s()) : e(), () => e()
        }), [n]), {
          isIdle: o
        }
      };

      function K({
        prop: e,
        defaultProp: t,
        onChange: n = () => {}
      }) {
        const [r, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const n = (0, h.useState)(e),
            [r] = n,
            o = (0, h.useRef)(r),
            i = X(t);
          return (0, h.useEffect)((() => {
            o.current !== r && (i(r), o.current = r)
          }), [r, o, i]), n
        }({
          defaultProp: t,
          onChange: n
        }), i = void 0 !== e, a = i ? e : r, s = X(n), l = (0, h.useCallback)((t => {
          if (i) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && s(n)
          } else o(t)
        }), [i, e, o, s]);
        return [a, l]
      }

      function $(e, t, n, r) {
        const o = (0, h.useRef)(t);
        (0, h.useEffect)((() => {
          o.current = t
        }), [t]), (0, h.useEffect)((() => {
          const t = n?.current ?? window;
          if (!t || !t.addEventListener) return;
          const i = e => {
            o.current(e)
          };
          return t.addEventListener(e, i, r), () => {
            t.removeEventListener(e, i, r)
          }
        }), [e, n?.current, r])
      }

      function Y(e = !0) {
        const t = V("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }
      const Z = (e, t = []) => {
          const n = (0, h.useRef)(!1);
          (0, h.useEffect)((() => (n.current = !0, () => {
            n.current = !1
          })), []), (0, h.useEffect)((() => {
            n.current && e()
          }), [...t])
        },
        Q = new Set(["id"]),
        J = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        ee = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        te = /^(data-.*)$/;

      function ne(e, t = {}) {
        let {
          labelable: n,
          isLink: r,
          propNames: o
        } = t, i = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (Q.has(t) || n && J.has(t) || r && ee.has(t) || (null == o ? void 0 : o.has(t)) || te.test(t)) && (i[t] = e[t]);
        return i
      }
      const re = "undefined" != typeof document ? h.useLayoutEffect : () => {};

      function oe(e) {
        const t = (0, h.useRef)(null);
        return re((() => {
          t.current = e
        }), [e]), (0, h.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }

      function ie(e, t, n) {
        let r = (0, h.useRef)(t),
          o = oe((() => {
            n && n(r.current)
          }));
        (0, h.useEffect)((() => {
          var t;
          let n = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == n || n.addEventListener("reset", o), () => {
            null == n || n.removeEventListener("reset", o)
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
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      const ue = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        ce = h.createContext(ue),
        de = h.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let he = new WeakMap;
      const fe = "function" == typeof h.useId ? function(e) {
        let t = h.useId(),
          [n] = (0, h.useState)(ve());
        return e || `${n?"react-aria":`react-aria${ue.prefix}`}-${t}`
      } : function(e) {
        let t = (0, h.useContext)(ce),
          n = function(e = !1) {
            let t = (0, h.useContext)(ce),
              n = (0, h.useRef)(null);
            if (null === n.current && !e) {
              var r, o;
              let e = null === (o = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let n = he.get(e);
                null == n ? he.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, he.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          r = `react-aria${t.prefix}`;
        return e || `${r}-${n}`
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
        let [t, n] = (0, h.useState)(e), r = (0, h.useRef)(null), o = fe(t), i = (0, h.useRef)(null);
        if (ye && ye.register(i, o), be) {
          const e = _e.get(o);
          e && !e.includes(r) ? e.push(r) : _e.set(o, [r])
        }
        return re((() => {
          let e = o;
          return () => {
            ye && ye.unregister(i), _e.delete(e)
          }
        }), [o]), (0, h.useEffect)((() => {
          let e = r.current;
          return e && n(e), () => {
            e && (r.current = null)
          }
        })), o
      }

      function Ee(e, t) {
        if (e === t) return e;
        let n = _e.get(e);
        if (n) return n.forEach((e => e.current = t)), t;
        let r = _e.get(t);
        return r ? (r.forEach((t => t.current = e)), e) : t
      }

      function ke(e = []) {
        let t = we(),
          [n, r] = function(e) {
            let [t, n] = (0, h.useState)(e), r = (0, h.useRef)(null), o = oe((() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : t === e.value ? o() : n(e.value)
            }));
            re((() => {
              r.current && o()
            }));
            let i = oe((e => {
              r.current = e(t), o()
            }));
            return [t, i]
          }(t),
          o = (0, h.useCallback)((() => {
            r((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, r]);
        return re(o, [t, o, ...e]), n
      }

      function je(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = le(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Ee(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, L.A)(n, o)
          }
        }
        return t
      }

      function Se(e, t, n) {
        let [r, o] = (0, h.useState)(e || t), i = (0, h.useRef)(void 0 !== e), a = void 0 !== e;
        (0, h.useEffect)((() => {
          i.current, i.current = a
        }), [a]);
        let s = a ? e : r,
          l = (0, h.useCallback)(((e, ...t) => {
            let r = (e, ...t) => {
              n && (Object.is(s, e) || n(e, ...t)), a || (s = e)
            };
            "function" == typeof e ? o(((n, ...o) => {
              let i = e(a ? s : n, ...o);
              return r(i, ...t), a ? n : i
            })) : (a || o(e), r(e, ...t))
          }), [a, s, n]);
        return [s, l]
      }

      function Ce(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = we(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function xe(e) {
        let {
          description: t,
          errorMessage: n,
          isInvalid: r,
          validationState: o
        } = e, {
          labelProps: i,
          fieldProps: a
        } = function(e) {
          let {
            id: t,
            label: n,
            "aria-labelledby": r,
            "aria-label": o,
            labelElementType: i = "label"
          } = e;
          t = we(t);
          let a = we(),
            s = {};
          return n && (r = r ? `${a} ${r}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: s,
            fieldProps: Ce({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = ke([Boolean(t), Boolean(n), r, o]), l = ke([Boolean(t), Boolean(n), r, o]);
        return a = je(a, {
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
      const Pe = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        Oe = Pe.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      Pe.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const Te = Pe.join(':not([hidden]):not([tabindex="-1"]),');

      function Ae(e) {
        return e.matches(Oe)
      }

      function Le(e) {
        return e.matches(Te)
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
              n = [],
              r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return r instanceof HTMLElement && n.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), n
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: n,
                  scrollLeft: r
                }
                of e) t.scrollTop = n, t.scrollLeft = r
            }(t)
        }
      }
      let Re = null;

      function Ie(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function Me(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function De(e) {
        let t = (0, h.useRef)({
          isFocused: !1,
          observer: null
        });
        re((() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }), []);
        let n = oe((t => {
          null == e || e(t)
        }));
        return (0, h.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let r = e.target,
              o = e => {
                if (t.current.isFocused = !1, r.disabled) {
                  let t = Ie(e);
                  n(t)
                }
                t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            r.addEventListener("focusout", o, {
              once: !0
            }), t.current.observer = new MutationObserver((() => {
              if (t.current.isFocused && r.disabled) {
                var e;
                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                let n = r === document.activeElement ? null : document.activeElement;
                r.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: n
                })), r.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: n
                }))
              }
            })), t.current.observer.observe(r, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }), [n])
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

      function nt(e, t) {
        for (let n of Qe) n(e, t)
      }

      function rt(e) {
        et = !0,
          function(e) {
            return !(e.metaKey || !Ve() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Ze = "keyboard", nt("keyboard", e))
      }

      function ot(e) {
        Ze = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (et = !0, nt("pointer", e))
      }

      function it(e) {
        Ye(e) && (et = !0, Ze = "virtual")
      }

      function at(e) {
        e.target !== window && e.target !== document && !Be && e.isTrusted && (et || tt || (Ze = "virtual", nt("virtual", e)), et = !1, tt = !1)
      }

      function st() {
        Be || (et = !1, tt = !0)
      }

      function lt(e) {
        if ("undefined" == typeof window || Je.get(se(e))) return;
        const t = se(e),
          n = ae(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          et = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", rt, !0), n.addEventListener("keyup", rt, !0), n.addEventListener("click", it, !0), t.addEventListener("focus", at, !0), t.addEventListener("blur", st, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", ot, !0), n.addEventListener("pointermove", ot, !0), n.addEventListener("pointerup", ot, !0)), t.addEventListener("beforeunload", (() => {
          ut(e)
        }), {
          once: !0
        }), Je.set(t, {
          focus: r
        })
      }
      const ut = (e, t) => {
        const n = se(e),
          r = ae(e);
        t && r.removeEventListener("DOMContentLoaded", t), Je.has(n) && (n.HTMLElement.prototype.focus = Je.get(n).focus, r.removeEventListener("keydown", rt, !0), r.removeEventListener("keyup", rt, !0), r.removeEventListener("click", it, !0), n.removeEventListener("focus", at, !0), n.removeEventListener("blur", st, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", ot, !0), r.removeEventListener("pointermove", ot, !0), r.removeEventListener("pointerup", ot, !0)), Je.delete(n))
      };
      "undefined" != typeof document && function(e) {
        const t = ae(e);
        let n;
        "loading" !== t.readyState ? lt(e) : (n = () => {
          lt(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function ct(e, t) {
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
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = ft.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), ft.delete(n.target)), 0 === ft.size)) {
            for (let e of pt) e();
            pt.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = ft.get(n.target);
          r || (r = new Set, ft.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
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
        return n => {
          let r = {
            ...n,
            preventDefault() {
              n.preventDefault()
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
              t = !0
            },
            continuePropagation() {
              t = !1
            },
            isPropagationStopped: () => t
          };
          e(r), t && n.stopPropagation()
        }
      }

      function yt(e, t) {
        re((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? mt() : document.addEventListener("DOMContentLoaded", mt));
      let bt = h.createContext(null);

      function _t(e, t) {
        let {
          focusProps: n
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: o
          } = e;
          const i = (0, h.useCallback)((e => {
              if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
            }), [r, o]),
            a = De(i),
            s = (0, h.useCallback)((e => {
              const t = ae(e.target),
                r = t ? dt(t) : dt();
              e.target === e.currentTarget && r === ht(e.nativeEvent) && (n && n(e), o && o(!0), a(e))
            }), [o, n, a]);
          return {
            focusProps: {
              onFocus: !t && (n || o || r) ? s : void 0,
              onBlur: t || !r && !o ? void 0 : i
            }
          }
        }(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: vt(e.onKeyDown),
              onKeyUp: vt(e.onKeyUp)
            }
          }
        }(e), o = je(n, r), i = function(e) {
          let t = (0, h.useContext)(bt) || {};
          yt(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), a = e.isDisabled ? {} : i, s = (0, h.useRef)(e.autoFocus);
        (0, h.useEffect)((() => {
          s.current && t.current && function(e) {
            const t = ae(e),
              n = dt(t);
            if ("virtual" === Ze) {
              let r = n;
              gt((() => {
                dt(t) === r && e.isConnected && Ne(e)
              }))
            } else Ne(e)
          }(t.current), s.current = !1
        }), [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: je({
            ...o,
            tabIndex: l
          }, a)
        }
      }

      function wt(e, t, n) {
        let {
          validationBehavior: r,
          focus: o
        } = e;
        re((() => {
          if ("native" === r && (null == n ? void 0 : n.current) && !n.current.disabled) {
            let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = n.current).validity.valid,
              validationDetails: Et(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let i = oe((() => {
            t.resetValidation()
          })),
          a = oe((e => {
            var r;
            t.displayValidation.isInvalid || t.commitValidation();
            let i = null == n || null === (r = n.current) || void 0 === r ? void 0 : r.form;
            var a;
            !e.defaultPrevented && n && i && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let n = e.elements[t];
                if (!n.validity.valid) return n
              }
              return null
            }(i) === n.current && (o ? o() : null === (a = n.current) || void 0 === a || a.focus(), Ze = "keyboard", nt("keyboard", null)), e.preventDefault()
          })),
          s = oe((() => {
            t.commitValidation()
          }));
        (0, h.useEffect)((() => {
          let e = null == n ? void 0 : n.current;
          if (!e) return;
          let t = e.form;
          return e.addEventListener("invalid", a), e.addEventListener("change", s), null == t || t.addEventListener("reset", i), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", s), null == t || t.removeEventListener("reset", i)
          }
        }), [n, a, s, i, r])
      }

      function Et(e) {
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
      const kt = {
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
        jt = {
          ...kt,
          customError: !0,
          valid: !1
        },
        St = {
          isInvalid: !1,
          validationDetails: kt,
          validationErrors: []
        },
        Ct = (0, h.createContext)({}),
        xt = "__formValidationState" + Date.now();

      function Pt(e) {
        if (e[xt]) {
          let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          } = e[xt];
          return {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: n,
            name: r,
            value: o,
            builtinValidation: i,
            validate: a,
            validationBehavior: s = "aria"
          } = e;
          n && (t || (t = "invalid" === n));
          let l = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: jt
            } : null,
            u = (0, h.useMemo)((() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let n = e(t);
                  if (n && "boolean" != typeof n) return Ot(n)
                }
                return []
              }(a, o);
              return Tt(e)
            }), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let c = (0, h.useContext)(Ct),
            d = (0, h.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => Ot(c[e]))) : Ot(c[r]) : []), [c, r]),
            [f, p] = (0, h.useState)(c),
            [m, g] = (0, h.useState)(!1);
          c !== f && (p(c), g(!1));
          let v = (0, h.useMemo)((() => Tt(m ? [] : d)), [m, d]),
            y = (0, h.useRef)(St),
            [b, _] = (0, h.useState)(St),
            w = (0, h.useRef)(St),
            [E, k] = (0, h.useState)(!1);
          return (0, h.useEffect)((() => {
            if (!E) return;
            k(!1);
            let e = u || i || y.current;
            At(e, w.current) || (w.current = e, _(e))
          })), {
            realtimeValidation: l || v || u || i || St,
            displayValidation: "native" === s ? l || v || b : l || v || u || i || b,
            updateValidation(e) {
              "aria" !== s || At(b, e) ? y.current = e : _(e)
            },
            resetValidation() {
              let e = St;
              At(e, w.current) || (w.current = e, _(e)), "native" === s && k(!1), g(!0)
            },
            commitValidation() {
              "native" === s && k(!0), g(!0)
            }
          }
        }(e)
      }

      function Ot(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Tt(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: jt
        } : null
      }

      function At(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, n) => e === t.validationErrors[n])) && Object.entries(e.validationDetails).every((([e, n]) => t.validationDetails[e] === n))
      }

      function Lt(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Nt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Nt(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Lt(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nt(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function It(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Mt = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Dt = "foundry_nk7jgu_vq8c3j8",
        Bt = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Rt(Rt({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Mt(u, r, e.defaultVariants) && (n += " " + c);
            return n
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
          defaultClassName: "foundry_nk7jgu_vq8c3j9 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd10",
          variantClassNames: {
            isInvalid: {
              false: "foundry_nk7jgu_vq8c3ja",
              true: "foundry_nk7jgu_vq8c3jb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ht = (0, h.forwardRef)((({
        asChild: e,
        label: t,
        isRequired: n,
        hint: r,
        children: o,
        description: i,
        testId: a,
        className: s,
        rows: l = 5,
        hideLabel: u,
        hideDescription: f,
        hideRequiredAsterisk: m,
        validate: g,
        errorMessage: v,
        ...y
      }, b) => {
        const _ = (0, h.useRef)(null),
          w = G(_, b),
          {
            inputProps: E,
            labelProps: k,
            descriptionProps: j,
            isInvalid: S,
            errorMessageProps: C,
            validationErrors: x
          } = function(e, t) {
            let {
              inputElementType: n = "input",
              isDisabled: r = !1,
              isRequired: o = !1,
              isReadOnly: i = !1,
              type: a = "text",
              validationBehavior: s = "aria"
            } = e, [l, u] = Se(e.value, e.defaultValue || "", e.onChange), {
              focusableProps: c
            } = _t(e, t), d = Pt({
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
            } = xe({
              ...e,
              isInvalid: f,
              errorMessage: e.errorMessage || p
            }), _ = ne(e, {
              labelable: !0
            });
            const w = {
              type: a,
              pattern: e.pattern
            };
            return ie(t, l, u), wt(e, d, t), (0, h.useEffect)((() => {
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
              inputProps: je(_, "input" === n ? w : void 0, {
                disabled: r,
                readOnly: i,
                required: o && "native" === s,
                "aria-required": o && "aria" === s || void 0,
                "aria-invalid": f || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-activedescendant": e["aria-activedescendant"],
                "aria-autocomplete": e["aria-autocomplete"],
                "aria-haspopup": e["aria-haspopup"],
                value: l,
                onChange: e => u(e.target.value),
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
                ...c,
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
            isRequired: n,
            inputElementType: "textarea",
            validate: e => g?.(e) ?? (!v || [v])
          }, _),
          P = (0, d.v6)({
            ...E,
            className: s
          }, {
            className: Bt({
              isInvalid: S
            }),
            "aria-errormessage": C?.id
          }),
          O = e ? p.DX : "textarea";
        return (0, c.jsxs)("div", {
          className: "foundry_nk7jgu_vq8c3j0",
          children: [(t || r) && (0, c.jsxs)("div", {
            className: "foundry_nk7jgu_vq8c3j1",
            children: [(0, c.jsx)(p.s6, {
              enabled: !!u,
              children: (0, c.jsx)(H, {
                size: "SM",
                className: (0, L.$)("foundry_nk7jgu_vq8c3j2", E.disabled && Dt),
                asChild: !0,
                children: (0, c.jsxs)("label", {
                  ...k,
                  children: [t, n && !m && (0, c.jsx)("span", {
                    className: "foundry_nk7jgu_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), r && (0, c.jsx)(H, {
              size: "XS",
              className: "foundry_nk7jgu_vq8c3j3",
              children: r
            })]
          }), (0, c.jsx)(O, {
            rows: l,
            ref: w,
            "data-testid": a,
            ...P,
            children: o
          }), i && (0, c.jsx)(p.s6, {
            enabled: x.length > 0 || !!f,
            children: (0, c.jsx)(H, {
              size: "SM",
              ...j,
              className: (0, L.$)("foundry_nk7jgu_vq8c3j4", E.disabled && Dt),
              children: i
            })
          }), x.length > 0 && (0, c.jsxs)(H, {
            size: "SM",
            appearance: "bold",
            ...C,
            className: "foundry_nk7jgu_vq8c3j5",
            children: [(0, c.jsx)(z.X, {
              size: "MD",
              label: "",
              className: "foundry_nk7jgu_vq8c3j6"
            }), x.join(". ")]
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
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Vt.delete(e)
        }
      }
      const Gt = h.createContext({
        register: () => {}
      });

      function qt(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
      }

      function Xt(e, t, n) {
        return function(e, t, n) {
          if (t.set) t.set.call(e, n);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = n
          }
        }(e, qt(e, t, "set"), n), n
      }

      function Wt() {
        let e = (0, h.useRef)(new Map),
          t = (0, h.useCallback)(((t, n, r, o) => {
            let i = (null == o ? void 0 : o.once) ? (...t) => {
              e.current.delete(r), r(...t)
            } : r;
            e.current.set(r, {
              type: n,
              eventTarget: t,
              fn: i,
              options: o
            }), t.addEventListener(n, i, o)
          }), []),
          n = (0, h.useCallback)(((t, n, r, o) => {
            var i;
            let a = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
            t.removeEventListener(n, a, o), e.current.delete(r)
          }), []),
          r = (0, h.useCallback)((() => {
            e.current.forEach(((e, t) => {
              n(e.eventTarget, e.type, t, e.options)
            }))
          }), [n]);
        return (0, h.useEffect)((() => r), [r]), {
          addGlobalListener: t,
          removeGlobalListener: n,
          removeAllGlobalListeners: r
        }
      }
      Gt.displayName = "PressResponderContext";
      const Kt = (0, h.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let n = document.createElement("a");
              n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
            }
          }(e, (e => Yt(e, t)))
        },
        useHref: e => e
      });

      function $t() {
        return (0, h.useContext)(Kt)
      }

      function Yt(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        $e() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (Ve() ? i = !0 : a = !0);
        let u = Xe() && Ve() && !Ge() ? new KeyboardEvent("keydown", {
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
        Yt.isOpening = n, Ne(e), e.dispatchEvent(u), Yt.isOpening = !1
      }

      function Zt(e) {
        var t;
        const n = $t().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? n : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }
      Yt.isOpening = !1;
      var Qt = n(44853),
        Jt = new WeakMap;
      class en {
        continuePropagation() {
          Xt(this, Jt, !1)
        }
        get shouldStopPropagation() {
          return function(e, t) {
            return t.get ? t.get.call(e) : t.value
          }(this, qt(this, Jt, "get"))
        }
        constructor(e, t, n, r) {
          var o, i, a, s;
          s = {
              writable: !0,
              value: void 0
            },
            function(e, t) {
              if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(i = this, a = Jt), a.set(i, s), Xt(this, Jt, !0);
          let l = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const u = null == l ? void 0 : l.getBoundingClientRect();
          let c, d, h = 0,
            f = null;
          null != n.clientX && null != n.clientY && (d = n.clientX, f = n.clientY), u && (null != d && null != f ? (c = d - u.left, h = f - u.top) : (c = u.width / 2, h = u.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = c, this.y = h
        }
      }
      const tn = Symbol("linkClicked");

      function nn(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
          onPressEnd: o,
          onPressUp: i,
          onClick: a,
          isDisabled: s,
          isPressed: l,
          preventFocusOnPress: u,
          shouldCancelOnPointerExit: c,
          allowTextSelectionOnPress: d,
          ref: f,
          ...p
        } = function(e) {
          let t = (0, h.useContext)(Gt);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = je(r, e), n()
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
          if (o.isTriggeringEvent = !0, r) {
            let n = new en("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, g(!0), i
        })), w = oe(((e, r, i = !0) => {
          let a = v.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new en("pressend", r, e);
            o(t), l = t.shouldStopPropagation
          }
          if (n && n(!1), g(!1), t && i && !s) {
            let n = new en("press", r, e);
            t(n), l && (l = n.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, l
        })), E = oe(((e, t) => {
          let n = v.current;
          if (s) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new en("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), k = oe((e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(an(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, b(), d || Ut(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), j = oe((e => {
          c && k(e)
        })), S = oe((e => {
          null == a || a(e)
        })), C = oe(((e, t) => {
          if (a) {
            let n = new MouseEvent("click", e);
            Me(n, t), a(Ie(n))
          }
        })), x = (0, h.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (on(t.nativeEvent, t.currentTarget) && ct(t.currentTarget, ht(t.nativeEvent))) {
                  var r;
                  sn(ht(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = _(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        on(t, r) && !t.repeat && ct(r, ht(t)) && e.target && E(an(e.target, t), "keyboard")
                      };
                    y(ae(t.currentTarget), "keyup", le(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Ve() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || ct(t.currentTarget, ht(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Yt.isOpening) {
                  let n = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !Ye(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual";
                      n = w(an(t.currentTarget, t), r, !0), e.isOverTarget = !1, S(t), k(t)
                    }
                  } else {
                    let e = _(t, "virtual"),
                      r = E(t, "virtual"),
                      o = w(t, "virtual");
                    S(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && on(t, e.target)) {
                var r;
                sn(ht(t), t.key) && t.preventDefault();
                let n = ht(t),
                  o = ct(e.target, ht(t));
                w(an(e.target, t), "keyboard", o), o && C(t, e.target), b(), "Enter" !== t.key && rn(e.target) && ct(e.target, n) && !t[tn] && (t[tn] = !0, Yt(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !ct(t.currentTarget, ht(t.nativeEvent))) return;
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
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(ae(t.currentTarget), "pointerup", n, !1), y(ae(t.currentTarget), "pointercancel", r, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (ct(t.currentTarget, ht(t.nativeEvent)) && 0 === t.button) {
                if (u) {
                  let n = function(e) {
                    for (; e && !Ae(e);) e = e.parentElement;
                    let t = se(e),
                      n = t.document.activeElement;
                    if (!n || n === e) return;
                    Be = !0;
                    let r = !1,
                      o = e => {
                        (e.target === n || r) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === n || r) && (t.stopImmediatePropagation(), e || r || (r = !0, Ne(n), l()))
                      },
                      a = t => {
                        (t.target === e || r) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || r) && (t.stopImmediatePropagation(), r || (r = !0, Ne(n), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), Be = !1, r = !1
                      },
                      u = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              ct(t.currentTarget, ht(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && E(t, e.pointerType || t.pointerType)
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, _(an(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(an(e.target, t), e.pointerType, !1), j(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (ct(e.target, ht(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? k(t) : (Ne(e.target), e.target.click()))
                      }), 80);
                    y(t.currentTarget, "click", (() => n = !0), !0), e.disposables.push((() => clearTimeout(r)))
                  } else k(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                k(e)
              };
            t.onDragStart = e => {
              ct(e.currentTarget, ht(e.nativeEvent)) && k(e)
            }
          }
          return t
        }), [y, s, u, b, d, k, j, w, _, E, S, C]);
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
          pressProps: je(p, x)
        }
      }

      function rn(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function on(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof se(o).HTMLInputElement && !un(o, n) || o instanceof se(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && rn(o)) && "Enter" !== n)
      }

      function an(e, t) {
        let n = t.clientX,
          r = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r
        }
      }

      function sn(e, t) {
        return e instanceof HTMLInputElement ? !un(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : rn(e)))
        }(e)
      }
      const ln = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function un(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : ln.has(e.type)
      }

      function cn(e, t) {
        let n, {
          elementType: r = "button",
          isDisabled: o,
          onPress: i,
          onPressStart: a,
          onPressEnd: s,
          onPressUp: l,
          onPressChange: u,
          preventFocusOnPress: c,
          allowFocusWhenDisabled: d,
          onClick: h,
          href: f,
          target: p,
          rel: m,
          type: g = "button"
        } = e;
        n = "button" === r ? {
          type: g,
          disabled: o
        } : {
          role: "button",
          href: "a" !== r || o ? void 0 : f,
          target: "a" === r ? p : void 0,
          type: "input" === r ? g : void 0,
          disabled: "input" === r ? o : void 0,
          "aria-disabled": o && "input" !== r ? o : void 0,
          rel: "a" === r ? m : void 0
        };
        let {
          pressProps: v,
          isPressed: y
        } = nn({
          onPressStart: a,
          onPressEnd: s,
          onPressChange: u,
          onPress: i,
          onPressUp: l,
          onClick: h,
          isDisabled: o,
          preventFocusOnPress: c,
          ref: t
        }), {
          focusableProps: b
        } = _t(e, t);
        d && (b.tabIndex = o ? -1 : b.tabIndex);
        let _ = je(b, v, ne(e, {
          labelable: !0
        }));
        return {
          isPressed: y,
          buttonProps: je(n, _, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"]
          })
        }
      }
      var dn = {};

      function hn(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }

      function fn(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          r = {};
        for (var o in e) {
          var i = e[o],
            a = [...n, o];
          "string" == typeof i || "number" == typeof i || null == i ? r[o] = t(i, a) : "object" != typeof i || Array.isArray(i) ? console.warn('Skipping invalid key "'.concat(a.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(i) ? "Array" : typeof i, '"')) : r[o] = fn(i, t, a)
        }
        return r
      }
      var pn, mn, gn = n(79895),
        vn = n.n(gn),
        yn = class {
          constructor(e) {
            const {
              failure: t,
              gotoFn: n,
              output: r
            } = this._buildTables(e);
            this.gotoFn = n, this.output = r, this.failure = t
          }
          _buildTables(e) {
            const t = {
                0: {}
              },
              n = {};
            let r = 0;
            for (const o of e) {
              let e = 0;
              for (const i of o) t[e] && i in t[e] ? e = t[e][i] : (r++, t[e][i] = r, t[r] = {}, e = r, n[r] = []);
              n[e].push(o)
            }
            const o = {},
              i = [];
            for (const e in t[0]) {
              const n = t[0][e];
              o[n] = 0, i.push(n)
            }
            for (; i.length > 0;) {
              const e = i.shift();
              if (void 0 !== e)
                for (const r in t[e]) {
                  const a = t[e][r];
                  i.push(a);
                  let s = o[e];
                  for (; s > 0 && !(r in t[s]);) s = o[s];
                  if (r in t[s]) {
                    const e = t[s][r];
                    o[a] = e, n[a] = [...n[a], ...n[e]]
                  } else o[a] = 0
                }
            }
            return {
              gotoFn: t,
              output: n,
              failure: o
            }
          }
          search(e) {
            let t = 0;
            const n = [];
            for (let r = 0; r < e.length; r++) {
              const o = e[r];
              for (; t > 0 && !(o in this.gotoFn[t]);) t = this.failure[t];
              if (o in this.gotoFn[t] && (t = this.gotoFn[t][o], this.output[t].length > 0)) {
                const e = this.output[t];
                n.push([r, e])
              }
            }
            return n
          }
          match(e) {
            let t = 0;
            for (let n = 0; n < e.length; n++) {
              const r = e[n];
              for (; t > 0 && !(r in this.gotoFn[t]);) t = this.failure[t];
              if (r in this.gotoFn[t] && (t = this.gotoFn[t][r], this.output[t].length > 0)) return !0
            }
            return !1
          }
        },
        bn = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        _n = !1;

      function wn(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }! function(e) {
        e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
      }(pn || (pn = {})),
      function(e) {
        e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
      }(mn || (mn = {}));
      const En = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        kn = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        jn = new Map([
          [126, mn.Element],
          [94, mn.Start],
          [36, mn.End],
          [42, mn.Any],
          [33, mn.Not],
          [124, mn.Hyphen]
        ]),
        Sn = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        Cn = new Set(["contains", "icontains"]);

      function xn(e, t, n) {
        const r = parseInt(t, 16) - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      }

      function Pn(e) {
        return e.replace(kn, xn)
      }

      function On(e) {
        return 39 === e || 34 === e
      }

      function Tn(e) {
        return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e
      }

      function An(e) {
        const t = [],
          n = Ln(t, `${e}`, 0);
        if (n < e.length) throw new Error(`Unmatched selector: ${e.slice(n)}`);
        return t
      }

      function Ln(e, t, n) {
        let r = [];

        function o(e) {
          const r = t.slice(n + e).match(En);
          if (!r) throw new Error(`Expected name, found ${t.slice(n)}`);
          const [o] = r;
          return n += e + o.length, Pn(o)
        }

        function i(e) {
          for (n += e; n < t.length && Tn(t.charCodeAt(n));) n++
        }

        function a() {
          const e = n += 1;
          let r = 1;
          for (; r > 0 && n < t.length; n++) 40 !== t.charCodeAt(n) || s(n) ? 41 !== t.charCodeAt(n) || s(n) || r-- : r++;
          if (r) throw new Error("Parenthesis not matched");
          return Pn(t.slice(e, n - 1))
        }

        function s(e) {
          let n = 0;
          for (; 92 === t.charCodeAt(--e);) n++;
          return !(1 & ~n)
        }

        function l() {
          if (r.length > 0 && function(e) {
              switch (e.type) {
                case pn.Adjacent:
                case pn.Child:
                case pn.Descendant:
                case pn.Parent:
                case pn.Sibling:
                case pn.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(r[r.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function u(e) {
          r.length > 0 && r[r.length - 1].type === pn.Descendant ? r[r.length - 1].type = e : (l(), r.push({
            type: e
          }))
        }

        function c(e, t) {
          r.push({
            type: pn.Attribute,
            name: e,
            action: t,
            value: o(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function d() {
          if (r.length && r[r.length - 1].type === pn.Descendant && r.pop(), 0 === r.length) throw new Error("Empty sub-selector");
          e.push(r)
        }
        if (i(0), t.length === n) return n;
        e: for (; n < t.length;) {
          const e = t.charCodeAt(n);
          switch (e) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              0 !== r.length && r[0].type === pn.Descendant || (l(), r.push({
                type: pn.Descendant
              })), i(1);
              break;
            case 62:
              u(pn.Child), i(1);
              break;
            case 60:
              u(pn.Parent), i(1);
              break;
            case 126:
              u(pn.Sibling), i(1);
              break;
            case 43:
              u(pn.Adjacent), i(1);
              break;
            case 46:
              c("class", mn.Element);
              break;
            case 35:
              c("id", mn.Equals);
              break;
            case 91: {
              let e;
              i(1);
              let a = null;
              124 === t.charCodeAt(n) ? e = o(1) : t.startsWith("*|", n) ? (a = "*", e = o(2)) : (e = o(0), 124 === t.charCodeAt(n) && 61 !== t.charCodeAt(n + 1) && (a = e, e = o(1))), i(0);
              let l = mn.Exists;
              const u = jn.get(t.charCodeAt(n));
              if (u) {
                if (l = u, 61 !== t.charCodeAt(n + 1)) throw new Error("Expected `=`");
                i(2)
              } else 61 === t.charCodeAt(n) && (l = mn.Equals, i(1));
              let c = "",
                d = null;
              if ("exists" !== l) {
                if (On(t.charCodeAt(n))) {
                  const e = t.charCodeAt(n);
                  let r = n + 1;
                  for (; r < t.length && (t.charCodeAt(r) !== e || s(r));) r += 1;
                  if (t.charCodeAt(r) !== e) throw new Error("Attribute value didn't end");
                  c = Pn(t.slice(n + 1, r)), n = r + 1
                } else {
                  const e = n;
                  for (; n < t.length && (!Tn(t.charCodeAt(n)) && 93 !== t.charCodeAt(n) || s(n));) n += 1;
                  c = Pn(t.slice(e, n))
                }
                i(0);
                const e = 32 | t.charCodeAt(n);
                115 === e ? (d = !1, i(1)) : 105 === e && (d = !0, i(1))
              }
              if (93 !== t.charCodeAt(n)) throw new Error("Attribute selector didn't terminate");
              n += 1;
              const h = {
                type: pn.Attribute,
                name: e,
                action: l,
                value: c,
                namespace: a,
                ignoreCase: d
              };
              r.push(h);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(n + 1)) {
                r.push({
                  type: pn.PseudoElement,
                  name: o(2).toLowerCase(),
                  data: 40 === t.charCodeAt(n) ? a() : null
                });
                continue
              }
              const e = o(1).toLowerCase();
              let i = null;
              if (40 === t.charCodeAt(n))
                if (Sn.has(e)) {
                  if (On(t.charCodeAt(n + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (i = [], n = Ln(i, t, n + 1), 41 !== t.charCodeAt(n)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  n += 1
                } else {
                  if (i = a(), Cn.has(e)) {
                    const e = i.charCodeAt(0);
                    e === i.charCodeAt(i.length - 1) && On(e) && (i = i.slice(1, -1))
                  }
                  i = Pn(i)
                } r.push({
                type: pn.Pseudo,
                name: e,
                data: i
              });
              break
            }
            case 44:
              d(), r = [], i(1);
              break;
            default: {
              if (t.startsWith("/*", n)) {
                const e = t.indexOf("*/", n + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                n = e + 2, 0 === r.length && i(0);
                break
              }
              let a, s = null;
              if (42 === e) n += 1, a = "*";
              else if (124 === e) {
                if (a = "", 124 === t.charCodeAt(n + 1)) {
                  u(pn.ColumnCombinator), i(2);
                  break
                }
              } else {
                if (!En.test(t.slice(n))) break e;
                a = o(0)
              }
              124 === t.charCodeAt(n) && 124 !== t.charCodeAt(n + 1) && (s = a, 42 === t.charCodeAt(n + 1) ? (a = "*", n += 2) : a = o(1)), r.push("*" === a ? {
                type: pn.Universal,
                namespace: s
              } : {
                type: pn.Tag,
                name: a,
                namespace: s
              })
            }
          }
        }
        return d(), n
      }

      function Nn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Rn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Nn(Object(n), !0).forEach((function(t) {
            In(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nn(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function In(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      const Mn = function e(t) {
          return n.withOptions = n => e(Rn(Rn({}, t), n)), n;

          function n(e, ...n) {
            const r = "string" == typeof e ? [e] : e.raw,
              {
                escapeSpecialCharacters: o = Array.isArray(e)
              } = t;
            let i = "";
            for (let e = 0; e < r.length; e++) {
              let t = r[e];
              o && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), i += t, e < n.length && (i += n[e])
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
        Dn = Mn;
      var Bn = function() {
        return Bn = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, Bn.apply(this, arguments)
      };

      function Hn(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function zn(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, i = n.call(e),
          a = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i)
          } finally {
            if (o) throw o.error
          }
        }
        return a
      }
      var Fn, Vn = /(\u000D|\u000C|\u000D\u000A)/g,
        Un = /[\u0000\uD800-\uDFFF]/g,
        Gn = /(\/\*)[\s\S]*?(\*\/)/g,
        qn = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var n = e.charCodeAt(t), r = [], o = t + 1; o < e.length; o += 1) {
            var i = e.charCodeAt(o);
            if (i === n) return [o, String.fromCharCode.apply(null, r)];
            if (92 === i) {
              var a = Wn(e, o);
              if (null === a) return null;
              var s = zn(a, 2),
                l = s[0],
                u = s[1];
              r.push(u), o = l
            } else {
              if (10 === i) return null;
              r.push(i)
            }
          }
          return null
        },
        Xn = function(e, t) {
          if (e.length <= t) return !1;
          var n, r = e.charCodeAt(t);
          return 45 === r ? !(e.length <= t + 1) && (45 === (n = e.charCodeAt(t + 1)) || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || 92 === n && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 1) && 10 !== (n = e.charCodeAt(t + 1))
        },
        Wn = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var n = e.charCodeAt(t + 1);
          if (10 === n) return null;
          if (n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102) {
            for (var r = [n], o = Math.min(t + 7, e.length), i = t + 2; i < o; i += 1) {
              var a = e.charCodeAt(i);
              if (!(a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102)) break;
              r.push(a)
            }
            if (i < e.length) {
              var s = e.charCodeAt(i);
              9 !== s && 32 !== s && 10 !== s || (i += 1)
            }
            return [i - 1, parseInt(String.fromCharCode.apply(null, r), 16)]
          }
          return [t + 1, n]
        },
        Kn = function(e, t) {
          var n = $n(e, t);
          if (null === n) return null;
          var r = zn(n, 3),
            o = r[0],
            i = r[1],
            a = r[2],
            s = Zn(e, o + 1);
          if (null !== s) {
            var l = zn(s, 2);
            return [l[0],
              ["<dimension-token>", i, l[1]]
            ]
          }
          return o + 1 < e.length && 37 === e.charCodeAt(o + 1) ? [o + 1, ["<percentage-token>", i]] : [o, ["<number-token>", i, a]]
        },
        $n = function(e, t) {
          if (e.length <= t) return null;
          var n = "integer",
            r = [],
            o = e.charCodeAt(t);
          for (43 !== o && 45 !== o || (t += 1, 45 === o && r.push(45)); t < e.length && ((u = e.charCodeAt(t)) >= 48 && u <= 57);) r.push(u), t += 1;
          if (t + 1 < e.length) {
            var i = e.charCodeAt(t),
              a = e.charCodeAt(t + 1);
            if (46 === i && a >= 48 && a <= 57)
              for (r.push(i, a), n = "number", t += 2; t < e.length && ((u = e.charCodeAt(t)) >= 48 && u <= 57);) r.push(u), t += 1
          }
          if (t + 1 < e.length) {
            i = e.charCodeAt(t), a = e.charCodeAt(t + 1);
            var s = e.charCodeAt(t + 2);
            if (69 === i || 101 === i) {
              var l = a >= 48 && a <= 57;
              if (l || (43 === a || 45 === a) && s >= 48 && s <= 57)
                for (n = "number", l ? (r.push(69, a), t += 2) : 45 === a ? (r.push(69, 45, s), t += 3) : (r.push(69, s), t += 3); t < e.length;) {
                  var u;
                  if (!((u = e.charCodeAt(t)) >= 48 && u <= 57)) break;
                  r.push(u), t += 1
                }
            }
          }
          var c = String.fromCharCode.apply(null, r),
            d = "number" === n ? parseFloat(c) : parseInt(c);
          return -0 === d && (d = 0), Number.isNaN(d) ? null : [t - 1, d, n]
        },
        Yn = function(e, t) {
          if (e.length <= t) return null;
          for (var n = [], r = e.charCodeAt(t); t < e.length; r = e.charCodeAt(++t))
            if (45 === r || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || r >= 48 && r <= 57) n.push(r);
            else {
              var o = Wn(e, t);
              if (null === o) break;
              var i = zn(o, 2),
                a = i[0],
                s = i[1];
              n.push(s), t = a
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, n)]
        },
        Zn = function(e, t) {
          if (e.length <= t || !Xn(e, t)) return null;
          for (var n = [], r = e.charCodeAt(t); t < e.length; r = e.charCodeAt(++t))
            if (45 === r || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || r >= 48 && r <= 57) n.push(r);
            else {
              var o = Wn(e, t);
              if (null === o) break;
              var i = zn(o, 2),
                a = i[0],
                s = i[1];
              n.push(s), t = a
            } return [t - 1, String.fromCharCode.apply(null, n)]
        },
        Qn = function(e, t) {
          for (var n = e.charCodeAt(t); 9 === n || 32 === n || 10 === n;) n = e.charCodeAt(++t);
          for (var r = [], o = !1; t < e.length;) {
            if (41 === n) return [t, String.fromCharCode.apply(null, r)];
            if (34 === n || 39 === n || 40 === n) return null;
            if (9 === n || 32 === n || 10 === n) o || 0 === r.length || (o = !0);
            else if (92 === n) {
              var i = Wn(e, t);
              if (null === i || o) return null;
              var a = zn(i, 2),
                s = a[0],
                l = a[1];
              r.push(l), t = s
            } else {
              if (o) return null;
              r.push(n)
            }
            n = e.charCodeAt(++t)
          }
          return null
        },
        Jn = function(e, t) {
          var n = Zn(e, t);
          if (null === n) return null;
          var r = zn(n, 2),
            o = r[0],
            i = r[1];
          if ("url" === i.toLowerCase()) {
            if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) {
              for (var a = 2; o + a < e.length; a += 1) {
                var s = e.charCodeAt(o + a);
                if (34 === s || 39 === s) return [o + 1, i.toLowerCase(), "<function-token>"];
                if (9 !== s && 32 !== s && 10 !== s) {
                  var l = Qn(e, o + a);
                  if (null === l) return null;
                  var u = zn(l, 2);
                  return [u[0], u[1], "<url-token>"]
                }
              }
              return [o + 1, i.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) return [o + 1, i.toLowerCase(), "<function-token>"];
          return [o, i.toLowerCase(), "<ident-token>"]
        },
        er = function(e) {
          if (null === e.mediaCondition) return e;
          var t = tr(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        tr = function e(t) {
          for (var n = t.children.length - 1; n >= 0; n--) {
            var r = t.children[n];
            if (!("context" in r)) {
              var o = e(r);
              if (null === o.operator && 1 === o.children.length) t.children[n] = o.children[0];
              else if (o.operator === t.operator && ("and" === o.operator || "or" === o.operator)) {
                for (var i = [n, 1], a = 0; a < o.children.length; a++) i.push(o.children[a]);
                t.children.splice.apply(t.children, i)
              }
            }
          }
          return t
        },
        nr = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        rr = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(Vn, "\n").replace(Un, "�")).replace(Gn, "");
            for (var n = []; t < e.length; t += 1) {
              var r = e.charCodeAt(t);
              if (9 === r || 32 === r || 10 === r) {
                for (var o = e.charCodeAt(++t); 9 === o || 32 === o || 10 === o;) o = e.charCodeAt(++t);
                t -= 1, n.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === r) {
                if (null === (S = qn(e, t))) return null;
                var i = zn(S, 2),
                  a = i[0],
                  s = i[1];
                n.push({
                  type: "<string-token>",
                  value: s
                }), t = a
              } else if (35 === r) {
                if (t + 1 < e.length && (95 === (p = e.charCodeAt(t + 1)) || p >= 65 && p <= 90 || p >= 97 && p <= 122 || p >= 128 || p >= 48 && p <= 57 || 92 === p && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var l = Xn(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (S = Yn(e, t + 1))) {
                    var u = zn(S, 2);
                    a = u[0], s = u[1], n.push({
                      type: "<hash-token>",
                      value: s.toLowerCase(),
                      flag: l
                    }), t = a;
                    continue
                  }
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (39 === r) {
                if (null === (S = qn(e, t))) return null;
                var c = zn(S, 2);
                a = c[0], s = c[1], n.push({
                  type: "<string-token>",
                  value: s
                }), t = a
              } else if (40 === r) n.push({
                type: "<(-token>"
              });
              else if (41 === r) n.push({
                type: "<)-token>"
              });
              else if (43 === r) {
                var d = Kn(e, t);
                if (null === d) n.push({
                  type: "<delim-token>",
                  value: r
                });
                else {
                  var h = zn(d, 2);
                  a = h[0], "<dimension-token>" === (k = h[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: k[1],
                    unit: k[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === k[0] ? n.push({
                    type: k[0],
                    value: k[1],
                    flag: k[2]
                  }) : n.push({
                    type: k[0],
                    value: k[1],
                    flag: "number"
                  }), t = a
                }
              } else if (44 === r) n.push({
                type: "<comma-token>"
              });
              else if (45 === r) {
                if (null !== (y = Kn(e, t))) {
                  var f = zn(y, 2);
                  a = f[0], "<dimension-token>" === (k = f[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: k[1],
                    unit: k[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === k[0] ? n.push({
                    type: k[0],
                    value: k[1],
                    flag: k[2]
                  }) : n.push({
                    type: k[0],
                    value: k[1],
                    flag: "number"
                  }), t = a;
                  continue
                }
                if (t + 2 < e.length) {
                  var p = e.charCodeAt(t + 1),
                    m = e.charCodeAt(t + 2);
                  if (45 === p && 62 === m) {
                    n.push({
                      type: "<CDC-token>"
                    }), t += 2;
                    continue
                  }
                }
                if (null !== (S = Jn(e, t))) {
                  var g = zn(S, 3),
                    v = (a = g[0], s = g[1], g[2]);
                  n.push({
                    type: v,
                    value: s
                  }), t = a;
                  continue
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (46 === r) {
                var y;
                if (null !== (y = Kn(e, t))) {
                  var b = zn(y, 2);
                  a = b[0], "<dimension-token>" === (k = b[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: k[1],
                    unit: k[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === k[0] ? n.push({
                    type: k[0],
                    value: k[1],
                    flag: k[2]
                  }) : n.push({
                    type: k[0],
                    value: k[1],
                    flag: "number"
                  }), t = a;
                  continue
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (58 === r) n.push({
                type: "<colon-token>"
              });
              else if (59 === r) n.push({
                type: "<semicolon-token>"
              });
              else if (60 === r) {
                if (t + 3 < e.length) {
                  p = e.charCodeAt(t + 1), m = e.charCodeAt(t + 2);
                  var _ = e.charCodeAt(t + 3);
                  if (33 === p && 45 === m && 45 === _) {
                    n.push({
                      type: "<CDO-token>"
                    }), t += 3;
                    continue
                  }
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (64 === r) {
                if (null !== (S = Zn(e, t + 1))) {
                  var w = zn(S, 2);
                  a = w[0], s = w[1], n.push({
                    type: "<at-keyword-token>",
                    value: s.toLowerCase()
                  }), t = a;
                  continue
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (91 === r) n.push({
                type: "<[-token>"
              });
              else if (92 === r) {
                if (null === (S = Wn(e, t))) return null;
                var E = zn(S, 2);
                a = E[0], s = E[1], e = e.slice(0, t) + s + e.slice(a + 1), t -= 1
              } else if (93 === r) n.push({
                type: "<]-token>"
              });
              else if (123 === r) n.push({
                type: "<{-token>"
              });
              else if (125 === r) n.push({
                type: "<}-token>"
              });
              else if (r >= 48 && r <= 57) {
                var k, j = zn(S = Kn(e, t), 2);
                a = j[0], "<dimension-token>" === (k = j[1])[0] ? n.push({
                  type: "<dimension-token>",
                  value: k[1],
                  unit: k[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === k[0] ? n.push({
                  type: k[0],
                  value: k[1],
                  flag: k[2]
                }) : n.push({
                  type: k[0],
                  value: k[1],
                  flag: "number"
                }), t = a
              } else if (95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128) {
                var S;
                if (null === (S = Jn(e, t))) return null;
                var C = zn(S, 3);
                a = C[0], s = C[1], v = C[2], n.push({
                  type: v,
                  value: s
                }), t = a
              } else n.push({
                type: "<delim-token>",
                value: r
              })
            }
            return n.push({
              type: "<EOF-token>"
            }), n
          }(e.trim());
          if (null === t) throw nr("Failed tokenizing");
          var n = 0,
            r = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw nr("Expected whitespace after media");
            n = 2;
            for (var o = 2; o < t.length - 1; o++) {
              var i = t[o];
              if ("<{-token>" === i.type) {
                r = o;
                break
              }
              if ("<semicolon-token>" === i.type) throw nr("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(n, r), ir(t)
        },
        or = function(e) {
          for (var t = [], n = !1, r = 0; r < e.length; r++) "<whitespace-token>" === e[r].type ? (n = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(Bn(Bn({}, e[r]), {
            wsBefore: n,
            wsAfter: !1
          })), n = !1);
          return t
        },
        ir = function(e) {
          for (var t, n, r = [
              []
            ], o = 0; o < e.length; o++) {
            var i = e[o];
            "<comma-token>" === i.type ? r.push([]) : r[r.length - 1].push(i)
          }
          var a = r.map(or);
          if (1 === a.length && 0 === a[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var s = a.map((function(e) {
              return 0 === e.length ? null : ar(e)
            })),
            l = [];
          try {
            for (var u = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  n = t && e[t],
                  r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function() {
                    return e && r >= e.length && (e = void 0), {
                      value: e && e[r++],
                      done: !e
                    }
                  }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(s), c = u.next(); !c.done; c = u.next()) {
              var d = c.value;
              null !== d && l.push(d)
            }
          } catch (e) {
            t = {
              error: e
            }
          } finally {
            try {
              c && !c.done && (n = u.return) && n.call(u)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === l.length) throw nr("No valid media queries");
          return l
        },
        ar = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: sr(e, !0)
            }
          } catch (e) {
            throw nr("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw nr("Expected media condition or media prefix");
            var n = null,
              r = void 0,
              o = t.value;
            "only" !== o && "not" !== o || (n = o);
            var i = null === n ? 0 : 1;
            if (e.length <= i) throw nr("Expected extra token in media query");
            var a = e[i];
            if ("<ident-token>" === a.type) {
              var s = a.value;
              if ("all" === s) r = "all";
              else if ("print" === s || "screen" === s) r = s;
              else {
                if ("tty" !== s && "tv" !== s && "projection" !== s && "handheld" !== s && "braille" !== s && "embossed" !== s && "aural" !== s && "speech" !== s) throw nr("Unknown ident '".concat(s, "' in media query"));
                n = "not" === n ? null : "not", r = "all"
              }
            } else {
              if ("not" !== n || "<(-token>" !== a.type) throw nr("Invalid media query");
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
                  mediaCondition: sr(l, !0)
                }
              } catch (e) {
                throw nr("Expected media condition after '('", e)
              }
            }
            if (i + 1 === e.length) return {
              mediaPrefix: n,
              mediaType: r,
              mediaCondition: null
            };
            if (!(i + 4 < e.length)) throw nr("Expected media condition after media prefix");
            var u = e[i + 1];
            if ("<ident-token>" !== u.type || "and" !== u.value) throw nr("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: n,
                mediaType: r,
                mediaCondition: sr(e.slice(i + 2), !1)
              }
            } catch (e) {
              throw nr("Expected media condition after 'and'", e)
            }
          }
        },
        sr = function e(t, n, r) {
          if (void 0 === r && (r = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var o, i = t.length - 1, a = 0, s = 0, l = 0; l < t.length; l++) {
            var u = t[l];
            if ("<(-token>" === u.type ? (s += 1, a = Math.max(a, s)) : "<)-token>" === u.type && (s -= 1), 0 === s) {
              i = l;
              break
            }
          }
          if (0 !== s) throw new Error("Mismatched parens\nInvalid media condition");
          var c = t.slice(0, i + 1);
          if (o = 1 === a ? lr(c) : "<ident-token>" === c[1].type && "not" === c[1].value ? e(c.slice(2, -1), !0, "not") : e(c.slice(1, -1), !0), i === t.length - 1) return {
            operator: r,
            children: [o]
          };
          var d = t[i + 1];
          if ("<ident-token>" !== d.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== r && r !== d.value) throw new Error("'".concat(d.value, "' and '").concat(r, "' must not be at same level\nInvalid media condition"));
          if ("or" === d.value && !n) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== d.value && "or" !== d.value) throw new Error("Invalid operator: '".concat(d.value, "'\nInvalid media condition"));
          var h = e(t.slice(i + 2), n, d.value);
          return {
            operator: d.value,
            children: [o].concat(h.children)
          }
        },
        lr = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], n = 1; n < e.length; n++) {
            if (n < e.length - 2) {
              var r = e[n],
                o = e[n + 1],
                i = e[n + 2];
              if ("<number-token>" === r.type && r.value > 0 && "<delim-token>" === o.type && 47 === o.value && "<number-token>" === i.type && i.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: r.value,
                  denominator: i.value,
                  wsBefore: r.wsBefore,
                  wsAfter: i.wsAfter
                }), n += 2;
                continue
              }
            }
            t.push(e[n])
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
                u = null,
                c = l.slice(0, 4);
              return "min-" === c ? (u = "min", l = l.slice(4)) : "max-" === c && (u = "max", l = l.slice(4)), s.wsBefore, s.wsAfter, {
                context: "value",
                prefix: u,
                feature: l,
                value: Hn(s, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var d = ur(t);
            return {
              context: "range",
              feature: d.featureName,
              range: d
            }
          } catch (e) {
            throw nr("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        ur = function(e) {
          var t, n, r, o;
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
            var s = 2 + (null !== (n = null === (t = i[a ? "leftOp" : "rightOp"]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0),
              l = e[s];
            if (a) {
              if ("<ident-token>" !== l.type) throw new Error("Invalid range");
              if (i.featureName = l.value, e.length >= 7) {
                var u = e[s + 1],
                  c = e[s + 2];
                if ("<delim-token>" !== u.type) throw new Error("Invalid range");
                var d = u.value;
                if (60 === d) "<delim-token>" !== c.type || 61 !== c.value || c.wsBefore ? i.rightOp = "<" : i.rightOp = "<=";
                else {
                  if (62 !== d) throw new Error("Invalid range");
                  "<delim-token>" !== c.type || 61 !== c.value || c.wsBefore ? i.rightOp = ">" : i.rightOp = ">="
                }
                var h = e[s + 1 + (null !== (o = null === (r = i.rightOp) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0)];
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
                "infinite" === (E = p.value) && (b = {
                  type: _,
                  value: E
                })
              } else "<number-token>" !== p.type && "<dimension-token>" !== p.type && "<ratio-token>" !== p.type || (p.wsBefore, p.wsAfter, b = Hn(p, ["wsBefore", "wsAfter"]));
            var w = null;
            if (null !== y)
              if ("<ident-token>" === y.type) {
                var E;
                _ = y.type, "infinite" === (E = y.value) && (w = {
                  type: _,
                  value: E
                })
              } else "<number-token>" !== y.type && "<dimension-token>" !== y.type && "<ratio-token>" !== y.type || (y.wsBefore, y.wsAfter, w = Hn(y, ["wsBefore", "wsAfter"]));
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

      function cr(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function dr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function hr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dr(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = cr(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dr(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function fr(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
          if (null == e) return {};
          var n, r, o = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
      }

      function pr(e, t) {
        for (var n in e) t(e[n], n)
      }

      function mr(e, t) {
        var n = {};
        for (var r in e) - 1 === t.indexOf(r) && (n[r] = e[r]);
        return n
      }
      class gr {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new gr
          }, this.ruleset.set(e, t)), t
        }
        getConditionalRulesetByPath(e) {
          var t = this;
          for (var n of e) {
            var r = t.findOrCreateCondition(n);
            t = r.children
          }
          return t
        }
        addRule(e, t, n) {
          var r = this.getConditionalRulesetByPath(n).findOrCreateCondition(t);
          if (!r) throw new Error("Failed to add conditional rule");
          r.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var n = this.getConditionalRulesetByPath(e), r = 0; r < t.length; r++) {
            var o, i = t[r],
              a = null !== (o = n.precedenceLookup.get(i)) && void 0 !== o ? o : new Set;
            for (var s of t.slice(r + 1)) a.add(s);
            n.precedenceLookup.set(i, a)
          }
        }
        isCompatible(e) {
          for (var [t, n] of this.precedenceLookup.entries())
            for (var r of n) {
              var o;
              if (null !== (o = e.precedenceLookup.get(r)) && void 0 !== o && o.has(t)) return !1
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
              rules: n,
              children: r
            }
            of e.ruleset.values()) {
            var o = this.ruleset.get(t);
            o ? (o.rules.push(...n), o.children.merge(r)) : this.ruleset.set(t, {
              query: t,
              rules: n,
              children: r
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
            n = function(n) {
              var o = e.ruleset.get(r);
              if (!o) throw new Error("Can't find condition for ".concat(r));
              var i = t.findIndex((e => n.has(e.query)));
              i > -1 ? t.splice(i, 0, o) : t.push(o)
            };
          for (var [r, o] of this.precedenceLookup.entries()) n(o);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: n,
              children: r
            }
            of this.getSortedRuleset()) {
            var o = {};
            for (var i of n) o[i.selector] = hr(hr({}, o[i.selector]), i.rule);
            Object.assign(o, ...r.renderToArray()), e.push({
              [t]: o
            })
          }
          return e
        }
      }
      var vr, yr = {
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
        br = Object.keys(yr),
        _r = yr,
        wr = (e, t) => new Error(Dn(vr || (vr = wn(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        Er = e => {
          if ("@media " === e) throw wr(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = er(e[t])
            })(rr(e))
          } catch (t) {
            throw wr(e, t.message)
          }
        },
        kr = ["vars"],
        jr = ["content"],
        Sr = "__DECLARATION",
        Cr = {
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

      function xr(e, t, n, r) {
        var o = e.slice(0, t),
          i = e.slice(n);
        return "".concat(o).concat(r).concat(i)
      }
      var Pr = [...br, "@layer", "@media", "@supports", "@container", "selectors"];
      class Or {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new gr], this.fontFaceRules = [], this.keyframesRules = [], this.propertyRules = [], this.localClassNamesMap = new Map(e.map((e => [e, e]))), this.localClassNamesSearch = new yn(e), this.layers = new Map, this.composedClassLists = t.map((e => {
            var {
              identifier: t,
              classList: n
            } = e;
            return {
              identifier: t,
              regex: RegExp("(".concat(n, ")"), "g")
            }
          })).reverse()
        }
        processCssObj(e) {
          if ("fontFace" !== e.type)
            if ("property" !== e.type) {
              if ("keyframes" === e.type) return e.rule = Object.fromEntries(Object.entries(e.rule).map((e => {
                var [t, n] = e;
                return [t, this.transformVars(this.transformProperties(n))]
              }))), void this.keyframesRules.push(e);
              if (this.currConditionalRuleset = new gr, "layer" === e.type) {
                var t = "@layer ".concat(e.name);
                this.addLayer([t])
              } else {
                var n = mr(e.rule, Pr);
                this.addRule({
                  selector: e.selector,
                  rule: n
                }), this.transformLayer(e, e.rule["@layer"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule)
              }
              this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
            } else this.propertyRules.push(e);
          else this.fontFaceRules.push(e.rule)
        }
        addConditionalRule(e, t) {
          var n = this.transformVars(this.transformProperties(e.rule)),
            r = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var o = t[t.length - 1],
            i = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: r,
            rule: n
          }, o, i)
        }
        addRule(e) {
          var t = this.transformVars(this.transformProperties(e.rule)),
            n = this.transformSelector(e.selector);
          this.rules.push({
            selector: n,
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
          return pr(e, ((t, n) => {
            "number" != typeof t || 0 === t || Cr[n] || (e[n] = "".concat(t, "px"))
          })), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, n = fr(e, kr);
          return t ? hr(hr({}, function(e) {
            var t, n = {};
            for (var r in e) n[(e[r], t = r, hn(t))] = e[r];
            return n
          }(t)), n) : n
        }
        transformContent(e) {
          var {
            content: t
          } = e, n = fr(e, jr);
          return void 0 === t ? n : hr({
            content: (Array.isArray(t) ? t : [t]).map((e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"')))
          }, n)
        }
        transformClassname(e) {
          return ".".concat(vn()(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            n = function(e) {
              t = t.replace(o, (() => (function() {
                (() => {
                  if (bn.length < 1) throw new Error("No adapter configured");
                  return bn[bn.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e)))
            };
          for (var {
              identifier: r,
              regex: o
            }
            of this.composedClassLists) n(r);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var i = this.localClassNamesSearch.search(t), a = t.length, s = i.length - 1; s >= 0; s--) {
            var [l, [u]] = i[s], c = l - u.length + 1;
            a <= l || (a = c, "." !== t[c - 1] && (t = xr(t, c, l + 1, this.transformClassname(u))))
          }
          return t
        }
        transformSelectors(e, t, n) {
          pr(t.selectors, ((t, r) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var o = this.transformSelector(r.replace(RegExp("&", "g"), e.selector));
            ((e, t) => {
              var n, r = () => {
                var n = new RegExp(".".concat(vn()(t, {
                  isIdentifier: !0
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return e.replace(n, "&")
              };
              try {
                n = An(e)
              } catch (e) {
                throw new Error("Invalid selector: ".concat(r()))
              }
              n.forEach((e => {
                try {
                  for (var n = e.length - 1; n >= -1; n--) {
                    if (!e[n]) throw new Error;
                    var o = e[n];
                    if ("child" === o.type || "parent" === o.type || "sibling" === o.type || "adjacent" === o.type || "descendant" === o.type) throw new Error;
                    if ("attribute" === o.type && "class" === o.name && o.value === t) return
                  }
                } catch (e) {
                  throw new Error(Dn(Fn || (Fn = wn(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), r(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
                }
              }))
            })(o, e.selector);
            var i = {
              selector: o,
              rule: mr(t, Pr)
            };
            n ? this.addConditionalRule(i, n) : this.addRule(i);
            var a = {
              type: "selector",
              selector: o,
              rule: t
            };
            this.transformLayer(a, t["@layer"], n), this.transformSupports(a, t["@supports"], n), this.transformMedia(a, t["@media"], n), this.transformContainer(a, t["@container"], n)
          }))
        }
        transformMedia(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [o, i] of(null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@media ".concat(e)))), Object.entries(t))) {
              var a = "@media ".concat(o);
              Er(a);
              var s = [...r, a];
              this.addConditionalRule({
                selector: e.selector,
                rule: mr(i, Pr)
              }, s), "local" === e.type && (this.transformSimplePseudos(e, i, s), this.transformSelectors(e, i, s)), this.transformLayer(e, i["@layer"], s), this.transformSupports(e, i["@supports"], s), this.transformContainer(e, i["@container"], s)
            }
        }
        transformContainer(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@container ".concat(e)))), pr(t, ((t, n) => {
            var o = "@container ".concat(n),
              i = [...r, o];
            this.addConditionalRule({
              selector: e.selector,
              rule: mr(t, Pr)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformLayer(e, t["@layer"], i), this.transformSupports(e, t["@supports"], i), this.transformMedia(e, t["@media"], i)
          })))
        }
        transformLayer(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@layer ".concat(e)))), pr(t, ((t, n) => {
            var o = [...r, "@layer ".concat(n)];
            this.addLayer(o), this.addConditionalRule({
              selector: e.selector,
              rule: mr(t, Pr)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformMedia(e, t["@media"], o), this.transformSupports(e, t["@supports"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSupports(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@supports ".concat(e)))), pr(t, ((t, n) => {
            var o = [...r, "@supports ".concat(n)];
            this.addConditionalRule({
              selector: e.selector,
              rule: mr(t, Pr)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformLayer(e, t["@layer"], o), this.transformMedia(e, t["@media"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSimplePseudos(e, t, n) {
          for (var r of Object.keys(t))
            if (_r[r]) {
              if ("local" !== e.type) throw new Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              n ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(r),
                rule: t[r]
              }, n) : this.addRule({
                conditions: n,
                selector: "".concat(e.selector).concat(r),
                rule: t[r]
              })
            }
        }
        toCss() {
          var e = [];
          for (var t of this.fontFaceRules) e.push(Tr({
            "@font-face": t
          }));
          for (var n of this.propertyRules) e.push(Tr({
            ["@property ".concat(n.name)]: n.rule
          }));
          for (var r of this.keyframesRules) e.push(Tr({
            ["@keyframes ".concat(r.name)]: r.rule
          }));
          for (var o of this.layers.values()) {
            var [i, ...a] = o.reverse(), s = {
              [i]: Sr
            };
            for (var l of a) s = {
              [l]: s
            };
            e.push(Tr(s))
          }
          for (var u of this.rules) e.push(Tr({
            [u.selector]: u.rule
          }));
          for (var c of this.conditionalRulesets)
            for (var d of c.renderToArray()) e.push(Tr(d));
          return e.filter(Boolean)
        }
      }

      function Tr(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = [],
          r = function(r) {
            var o, i = e[r];
            i && Array.isArray(i) ? n.push(...i.map((e => Tr({
              [r]: e
            }, t)))) : i && "object" == typeof i ? 0 === Object.keys(i).length || n.push("".concat(t).concat(r, " {\n").concat(Tr(i, t + "  "), "\n").concat(t, "}")) : i === Sr ? n.push("".concat(t).concat(r, ";")) : n.push("".concat(t).concat(r.startsWith("--") ? r : (o = r, o.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(i, ";"))
          };
        for (var o of Object.keys(e)) r(o);
        return n.join("\n")
      }
      var Ar = n(87144);
      const Lr = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
        Nr = new Set,
        Rr = "object" == typeof Ar && Ar ? Ar : {},
        Ir = (e, t, n, r) => {
          "function" == typeof Rr.emitWarning ? Rr.emitWarning(e, t, n, r) : console.error(`[${n}] ${t}: ${e}`)
        };
      let Mr = globalThis.AbortController,
        Dr = globalThis.AbortSignal;
      if (void 0 === Mr) {
        Dr = class {
          onabort;
          _onabort = [];
          reason;
          aborted = !1;
          addEventListener(e, t) {
            this._onabort.push(t)
          }
        }, Mr = class {
          constructor() {
            t()
          }
          signal = (() => new Dr)();
          abort(e) {
            if (!this.signal.aborted) {
              this.signal.reason = e, this.signal.aborted = !0;
              for (const t of this.signal._onabort) t(e);
              this.signal.onabort?.(e)
            }
          }
        };
        let e = "1" !== Rr.env?.LRU_CACHE_IGNORE_AC_WARNING;
        const t = () => {
          e && (e = !1, Ir("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t))
        }
      }
      Symbol("type");
      const Br = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
        Hr = e => Br(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? zr : null : null;
      class zr extends Array {
        constructor(e) {
          super(e), this.fill(0)
        }
      }
      class Fr {
        heap;
        length;
        static #e = !1;
        static create(e) {
          const t = Hr(e);
          if (!t) return [];
          Fr.#e = !0;
          const n = new Fr(e, t);
          return Fr.#e = !1, n
        }
        constructor(e, t) {
          if (!Fr.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
          this.heap = new t(e), this.length = 0
        }
        push(e) {
          this.heap[this.length++] = e
        }
        pop() {
          return this.heap[--this.length]
        }
      }
      class Vr {
        #t;
        #n;
        #r;
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
        #u;
        #c;
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
        #E;
        #k;
        static unsafeExposeInternals(e) {
          return {
            starts: e.#b,
            ttls: e.#_,
            sizes: e.#y,
            keyMap: e.#u,
            keyList: e.#c,
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
            isBackgroundFetch: t => e.#j(t),
            backgroundFetch: (t, n, r, o) => e.#S(t, n, r, o),
            moveToTail: t => e.#C(t),
            indexes: t => e.#x(t),
            rindexes: t => e.#P(t),
            isStale: t => e.#O(t)
          }
        }
        get max() {
          return this.#t
        }
        get maxSize() {
          return this.#n
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
          return this.#r
        }
        get disposeAfter() {
          return this.#o
        }
        constructor(e) {
          const {
            max: t = 0,
            ttl: n,
            ttlResolution: r = 1,
            ttlAutopurge: o,
            updateAgeOnGet: i,
            updateAgeOnHas: a,
            allowStale: s,
            dispose: l,
            disposeAfter: u,
            noDisposeOnSet: c,
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
          if (0 !== t && !Br(t)) throw new TypeError("max option must be a nonnegative integer");
          const E = t ? Hr(t) : Array;
          if (!E) throw new Error("invalid max value: " + t);
          if (this.#t = t, this.#n = h, this.maxEntrySize = f || this.#n, this.sizeCalculation = p, this.sizeCalculation) {
            if (!this.#n && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
          }
          if (void 0 !== g && "function" != typeof g) throw new TypeError("memoMethod must be a function if defined");
          if (this.#a = g, void 0 !== m && "function" != typeof m) throw new TypeError("fetchMethod must be a function if specified");
          if (this.#i = m, this.#E = !!m, this.#u = new Map, this.#c = new Array(t).fill(void 0), this.#d = new Array(t).fill(void 0), this.#h = new E(t), this.#f = new E(t), this.#p = 0, this.#m = 0, this.#g = Fr.create(t), this.#s = 0, this.#l = 0, "function" == typeof l && (this.#r = l), "function" == typeof u ? (this.#o = u, this.#v = []) : (this.#o = void 0, this.#v = void 0), this.#w = !!this.#r, this.#k = !!this.#o, this.noDisposeOnSet = !!c, this.noUpdateTTL = !!d, this.noDeleteOnFetchRejection = !!v, this.allowStaleOnFetchRejection = !!b, this.allowStaleOnFetchAbort = !!_, this.ignoreFetchAbort = !!w, 0 !== this.maxEntrySize) {
            if (0 !== this.#n && !Br(this.#n)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!Br(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#T()
          }
          if (this.allowStale = !!s, this.noDeleteOnStaleGet = !!y, this.updateAgeOnGet = !!i, this.updateAgeOnHas = !!a, this.ttlResolution = Br(r) || 0 === r ? r : 1, this.ttlAutopurge = !!o, this.ttl = n || 0, this.ttl) {
            if (!Br(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#A()
          }
          if (0 === this.#t && 0 === this.ttl && 0 === this.#n) throw new TypeError("At least one of max, maxSize, or ttl is required");
          if (!this.ttlAutopurge && !this.#t && !this.#n) {
            const e = "LRU_CACHE_UNBOUNDED";
            (e => !Nr.has(e))(e) && (Nr.add(e), Ir("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, Vr))
          }
        }
        getRemainingTTL(e) {
          return this.#u.has(e) ? 1 / 0 : 0
        }
        #A() {
          var e = this;
          const t = new zr(this.#t),
            n = new zr(this.#t);
          this.#_ = t, this.#b = n, this.#L = function(r, o) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Lr.now();
            if (n[r] = 0 !== o ? i : 0, t[r] = o, 0 !== o && e.ttlAutopurge) {
              const t = setTimeout((() => {
                e.#O(r) && e.#N(e.#c[r], "expire")
              }), o + 1);
              t.unref && t.unref()
            }
          }, this.#R = e => {
            n[e] = 0 !== t[e] ? Lr.now() : 0
          }, this.#I = (e, i) => {
            if (t[i]) {
              const a = t[i],
                s = n[i];
              if (!a || !s) return;
              e.ttl = a, e.start = s, e.now = r || o();
              const l = e.now - s;
              e.remainingTTL = a - l
            }
          };
          let r = 0;
          const o = () => {
            const e = Lr.now();
            if (this.ttlResolution > 0) {
              r = e;
              const t = setTimeout((() => r = 0), this.ttlResolution);
              t.unref && t.unref()
            }
            return e
          };
          this.getRemainingTTL = e => {
            const i = this.#u.get(e);
            if (void 0 === i) return 0;
            const a = t[i],
              s = n[i];
            return a && s ? a - ((r || o()) - s) : 1 / 0
          }, this.#O = e => {
            const i = n[e],
              a = t[e];
            return !!a && !!i && (r || o()) - i > a
          }
        }
        #R = () => {};
        #I = () => {};
        #L = () => {};
        #O = () => !1;
        #T() {
          const e = new zr(this.#t);
          this.#l = 0, this.#y = e, this.#M = t => {
            this.#l -= e[t], e[t] = 0
          }, this.#D = (e, t, n, r) => {
            if (this.#j(t)) return 0;
            if (!Br(n)) {
              if (!r) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
              if ("function" != typeof r) throw new TypeError("sizeCalculation must be a function");
              if (n = r(t, e), !Br(n)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
            }
            return n
          }, this.#B = (t, n, r) => {
            if (e[t] = n, this.#n) {
              const n = this.#n - e[t];
              for (; this.#l > n;) this.#H(!0)
            }
            this.#l += e[t], r && (r.entrySize = n, r.totalCalculatedSize = this.#l)
          }
        }
        #M = e => {};
        #B = (e, t, n) => {};
        #D = (e, t, n, r) => {
          if (n || r) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0
        };
        #x() {
          var e = this;
          let {
            allowStale: t = this.allowStale
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function*() {
            if (e.#s)
              for (let n = e.#m; e.#z(n) && (!t && e.#O(n) || (yield n), n !== e.#p);) n = e.#f[n]
          }()
        }
        #P() {
          var e = this;
          let {
            allowStale: t = this.allowStale
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function*() {
            if (e.#s)
              for (let n = e.#p; e.#z(n) && (!t && e.#O(n) || (yield n), n !== e.#m);) n = e.#h[n]
          }()
        }
        #z(e) {
          return void 0 !== e && this.#u.get(this.#c[e]) === e
        }* entries() {
          for (const e of this.#x()) void 0 === this.#d[e] || void 0 === this.#c[e] || this.#j(this.#d[e]) || (yield [this.#c[e], this.#d[e]])
        }* rentries() {
          for (const e of this.#P()) void 0 === this.#d[e] || void 0 === this.#c[e] || this.#j(this.#d[e]) || (yield [this.#c[e], this.#d[e]])
        }* keys() {
          for (const e of this.#x()) {
            const t = this.#c[e];
            void 0 === t || this.#j(this.#d[e]) || (yield t)
          }
        }* rkeys() {
          for (const e of this.#P()) {
            const t = this.#c[e];
            void 0 === t || this.#j(this.#d[e]) || (yield t)
          }
        }* values() {
          for (const e of this.#x()) void 0 === this.#d[e] || this.#j(this.#d[e]) || (yield this.#d[e])
        }* rvalues() {
          for (const e of this.#P()) void 0 === this.#d[e] || this.#j(this.#d[e]) || (yield this.#d[e])
        } [Symbol.iterator]() {
          return this.entries()
        } [Symbol.toStringTag] = "LRUCache";
        find(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          for (const n of this.#x()) {
            const r = this.#d[n],
              o = this.#j(r) ? r.__staleWhileFetching : r;
            if (void 0 !== o && e(o, this.#c[n], this)) return this.get(this.#c[n], t)
          }
        }
        forEach(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          for (const n of this.#x()) {
            const r = this.#d[n],
              o = this.#j(r) ? r.__staleWhileFetching : r;
            void 0 !== o && e.call(t, o, this.#c[n], this)
          }
        }
        rforEach(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          for (const n of this.#P()) {
            const r = this.#d[n],
              o = this.#j(r) ? r.__staleWhileFetching : r;
            void 0 !== o && e.call(t, o, this.#c[n], this)
          }
        }
        purgeStale() {
          let e = !1;
          for (const t of this.#P({
              allowStale: !0
            })) this.#O(t) && (this.#N(this.#c[t], "expire"), e = !0);
          return e
        }
        info(e) {
          const t = this.#u.get(e);
          if (void 0 === t) return;
          const n = this.#d[t],
            r = this.#j(n) ? n.__staleWhileFetching : n;
          if (void 0 === r) return;
          const o = {
            value: r
          };
          if (this.#_ && this.#b) {
            const e = this.#_[t],
              n = this.#b[t];
            if (e && n) {
              const t = e - (Lr.now() - n);
              o.ttl = t, o.start = Date.now()
            }
          }
          return this.#y && (o.size = this.#y[t]), o
        }
        dump() {
          const e = [];
          for (const t of this.#x({
              allowStale: !0
            })) {
            const n = this.#c[t],
              r = this.#d[t],
              o = this.#j(r) ? r.__staleWhileFetching : r;
            if (void 0 === o || void 0 === n) continue;
            const i = {
              value: o
            };
            if (this.#_ && this.#b) {
              i.ttl = this.#_[t];
              const e = Lr.now() - this.#b[t];
              i.start = Math.floor(Date.now() - e)
            }
            this.#y && (i.size = this.#y[t]), e.unshift([n, i])
          }
          return e
        }
        load(e) {
          this.clear();
          for (const [t, n] of e) {
            if (n.start) {
              const e = Date.now() - n.start;
              n.start = Lr.now() - e
            }
            this.set(t, n.value, n)
          }
        }
        set(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (void 0 === t) return this.delete(e), this;
          const {
            ttl: r = this.ttl,
            start: o,
            noDisposeOnSet: i = this.noDisposeOnSet,
            sizeCalculation: a = this.sizeCalculation,
            status: s
          } = n;
          let {
            noUpdateTTL: l = this.noUpdateTTL
          } = n;
          const u = this.#D(e, t, n.size || 0, a);
          if (this.maxEntrySize && u > this.maxEntrySize) return s && (s.set = "miss", s.maxEntrySizeExceeded = !0), this.#N(e, "set"), this;
          let c = 0 === this.#s ? void 0 : this.#u.get(e);
          if (void 0 === c) c = 0 === this.#s ? this.#m : 0 !== this.#g.length ? this.#g.pop() : this.#s === this.#t ? this.#H(!1) : this.#s, this.#c[c] = e, this.#d[c] = t, this.#u.set(e, c), this.#h[this.#m] = c, this.#f[c] = this.#m, this.#m = c, this.#s++, this.#B(c, u, s), s && (s.set = "add"), l = !1;
          else {
            this.#C(c);
            const n = this.#d[c];
            if (t !== n) {
              if (this.#E && this.#j(n)) {
                n.__abortController.abort(new Error("replaced"));
                const {
                  __staleWhileFetching: t
                } = n;
                void 0 === t || i || (this.#w && this.#r?.(t, e, "set"), this.#k && this.#v?.push([t, e, "set"]))
              } else i || (this.#w && this.#r?.(n, e, "set"), this.#k && this.#v?.push([n, e, "set"]));
              if (this.#M(c), this.#B(c, u, s), this.#d[c] = t, s) {
                s.set = "replace";
                const e = n && this.#j(n) ? n.__staleWhileFetching : n;
                void 0 !== e && (s.oldValue = e)
              }
            } else s && (s.set = "update")
          }
          if (0 === r || this.#_ || this.#A(), this.#_ && (l || this.#L(c, r, o), s && this.#I(s, c)), !i && this.#k && this.#v) {
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
              if (this.#H(!0), this.#j(e)) {
                if (e.__staleWhileFetching) return e.__staleWhileFetching
              } else if (void 0 !== e) return e
            }
          } finally {
            if (this.#k && this.#v) {
              const e = this.#v;
              let t;
              for (; t = e?.shift();) this.#o?.(...t)
            }
          }
        }
        #H(e) {
          const t = this.#p,
            n = this.#c[t],
            r = this.#d[t];
          return this.#E && this.#j(r) ? r.__abortController.abort(new Error("evicted")) : (this.#w || this.#k) && (this.#w && this.#r?.(r, n, "evict"), this.#k && this.#v?.push([r, n, "evict"])), this.#M(t), e && (this.#c[t] = void 0, this.#d[t] = void 0, this.#g.push(t)), 1 === this.#s ? (this.#p = this.#m = 0, this.#g.length = 0) : this.#p = this.#h[t], this.#u.delete(n), this.#s--, t
        }
        has(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            updateAgeOnHas: n = this.updateAgeOnHas,
            status: r
          } = t, o = this.#u.get(e);
          if (void 0 !== o) {
            const e = this.#d[o];
            if (this.#j(e) && void 0 === e.__staleWhileFetching) return !1;
            if (!this.#O(o)) return n && this.#R(o), r && (r.has = "hit", this.#I(r, o)), !0;
            r && (r.has = "stale", this.#I(r, o))
          } else r && (r.has = "miss");
          return !1
        }
        peek(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            allowStale: n = this.allowStale
          } = t, r = this.#u.get(e);
          if (void 0 === r || !n && this.#O(r)) return;
          const o = this.#d[r];
          return this.#j(o) ? o.__staleWhileFetching : o
        }
        #S(e, t, n, r) {
          var o = this;
          const i = void 0 === t ? void 0 : this.#d[t];
          if (this.#j(i)) return i;
          const a = new Mr,
            {
              signal: s
            } = n;
          s?.addEventListener("abort", (() => a.abort(s.reason)), {
            signal: a.signal
          });
          const l = {
              signal: a.signal,
              options: n,
              context: r
            },
            u = function(r) {
              let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              const {
                aborted: s
              } = a.signal, u = n.ignoreFetchAbort && void 0 !== r;
              if (n.status && (s && !i ? (n.status.fetchAborted = !0, n.status.fetchError = a.signal.reason, u && (n.status.fetchAbortIgnored = !0)) : n.status.fetchResolved = !0), s && !u && !i) return c(a.signal.reason);
              const h = d;
              return o.#d[t] === d && (void 0 === r ? h.__staleWhileFetching ? o.#d[t] = h.__staleWhileFetching : o.#N(e, "fetch") : (n.status && (n.status.fetchUpdated = !0), o.set(e, r, l.options))), r
            },
            c = r => {
              const {
                aborted: o
              } = a.signal, i = o && n.allowStaleOnFetchAbort, s = i || n.allowStaleOnFetchRejection, l = s || n.noDeleteOnFetchRejection, u = d;
              if (this.#d[t] === d && (l && void 0 !== u.__staleWhileFetching ? i || (this.#d[t] = u.__staleWhileFetching) : this.#N(e, "fetch")), s) return n.status && void 0 !== u.__staleWhileFetching && (n.status.returnedStale = !0), u.__staleWhileFetching;
              if (u.__returned === u) throw r
            };
          n.status && (n.status.fetchDispatched = !0);
          const d = new Promise(((t, r) => {
              const o = this.#i?.(e, i, l);
              o && o instanceof Promise && o.then((e => t(void 0 === e ? void 0 : e)), r), a.signal.addEventListener("abort", (() => {
                n.ignoreFetchAbort && !n.allowStaleOnFetchAbort || (t(void 0), n.allowStaleOnFetchAbort && (t = e => u(e, !0)))
              }))
            })).then(u, (e => (n.status && (n.status.fetchRejected = !0, n.status.fetchError = e), c(e)))),
            h = Object.assign(d, {
              __abortController: a,
              __staleWhileFetching: i,
              __returned: void 0
            });
          return void 0 === t ? (this.set(e, h, {
            ...l.options,
            status: void 0
          }), t = this.#u.get(e)) : this.#d[t] = h, h
        }
        #j(e) {
          if (!this.#E) return !1;
          const t = e;
          return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof Mr
        }
        async fetch(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            allowStale: n = this.allowStale,
            updateAgeOnGet: r = this.updateAgeOnGet,
            noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
            ttl: i = this.ttl,
            noDisposeOnSet: a = this.noDisposeOnSet,
            size: s = 0,
            sizeCalculation: l = this.sizeCalculation,
            noUpdateTTL: u = this.noUpdateTTL,
            noDeleteOnFetchRejection: c = this.noDeleteOnFetchRejection,
            allowStaleOnFetchRejection: d = this.allowStaleOnFetchRejection,
            ignoreFetchAbort: h = this.ignoreFetchAbort,
            allowStaleOnFetchAbort: f = this.allowStaleOnFetchAbort,
            context: p,
            forceRefresh: m = !1,
            status: g,
            signal: v
          } = t;
          if (!this.#E) return g && (g.fetch = "get"), this.get(e, {
            allowStale: n,
            updateAgeOnGet: r,
            noDeleteOnStaleGet: o,
            status: g
          });
          const y = {
            allowStale: n,
            updateAgeOnGet: r,
            noDeleteOnStaleGet: o,
            ttl: i,
            noDisposeOnSet: a,
            size: s,
            sizeCalculation: l,
            noUpdateTTL: u,
            noDeleteOnFetchRejection: c,
            allowStaleOnFetchRejection: d,
            allowStaleOnFetchAbort: f,
            ignoreFetchAbort: h,
            status: g,
            signal: v
          };
          let b = this.#u.get(e);
          if (void 0 === b) {
            g && (g.fetch = "miss");
            const t = this.#S(e, b, y, p);
            return t.__returned = t
          } {
            const t = this.#d[b];
            if (this.#j(t)) {
              const e = n && void 0 !== t.__staleWhileFetching;
              return g && (g.fetch = "inflight", e && (g.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
            }
            const o = this.#O(b);
            if (!m && !o) return g && (g.fetch = "hit"), this.#C(b), r && this.#R(b), g && this.#I(g, b), t;
            const i = this.#S(e, b, y, p),
              a = void 0 !== i.__staleWhileFetching && n;
            return g && (g.fetch = o ? "stale" : "refresh", a && o && (g.returnedStale = !0)), a ? i.__staleWhileFetching : i.__returned = i
          }
        }
        async forceFetch(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = await this.fetch(e, t);
          if (void 0 === n) throw new Error("fetch() returned undefined");
          return n
        }
        memo(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = this.#a;
          if (!n) throw new Error("no memoMethod provided to constructor");
          const {
            context: r,
            forceRefresh: o,
            ...i
          } = t, a = this.get(e, i);
          if (!o && void 0 !== a) return a;
          const s = n(e, a, {
            options: i,
            context: r
          });
          return this.set(e, s, i), s
        }
        get(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            allowStale: n = this.allowStale,
            updateAgeOnGet: r = this.updateAgeOnGet,
            noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
            status: i
          } = t, a = this.#u.get(e);
          if (void 0 !== a) {
            const t = this.#d[a],
              s = this.#j(t);
            return i && this.#I(i, a), this.#O(a) ? (i && (i.get = "stale"), s ? (i && n && void 0 !== t.__staleWhileFetching && (i.returnedStale = !0), n ? t.__staleWhileFetching : void 0) : (o || this.#N(e, "expire"), i && n && (i.returnedStale = !0), n ? t : void 0)) : (i && (i.get = "hit"), s ? t.__staleWhileFetching : (this.#C(a), r && this.#R(a), t))
          }
          i && (i.get = "miss")
        }
        #F(e, t) {
          this.#f[t] = e, this.#h[e] = t
        }
        #C(e) {
          e !== this.#m && (e === this.#p ? this.#p = this.#h[e] : this.#F(this.#f[e], this.#h[e]), this.#F(this.#m, e), this.#m = e)
        }
        delete(e) {
          return this.#N(e, "delete")
        }
        #N(e, t) {
          let n = !1;
          if (0 !== this.#s) {
            const r = this.#u.get(e);
            if (void 0 !== r)
              if (n = !0, 1 === this.#s) this.#V(t);
              else {
                this.#M(r);
                const n = this.#d[r];
                if (this.#j(n) ? n.__abortController.abort(new Error("deleted")) : (this.#w || this.#k) && (this.#w && this.#r?.(n, e, t), this.#k && this.#v?.push([n, e, t])), this.#u.delete(e), this.#c[r] = void 0, this.#d[r] = void 0, r === this.#m) this.#m = this.#f[r];
                else if (r === this.#p) this.#p = this.#h[r];
                else {
                  const e = this.#f[r];
                  this.#h[e] = this.#h[r];
                  const t = this.#h[r];
                  this.#f[t] = this.#f[r]
                }
                this.#s--, this.#g.push(r)
              }
          }
          if (this.#k && this.#v?.length) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#o?.(...t)
          }
          return n
        }
        clear() {
          return this.#V("delete")
        }
        #V(e) {
          for (const t of this.#P({
              allowStale: !0
            })) {
            const n = this.#d[t];
            if (this.#j(n)) n.__abortController.abort(new Error("deleted"));
            else {
              const r = this.#c[t];
              this.#w && this.#r?.(n, r, e), this.#k && this.#v?.push([n, r, e])
            }
          }
          if (this.#u.clear(), this.#d.fill(void 0), this.#c.fill(void 0), this.#_ && this.#b && (this.#_.fill(0), this.#b.fill(0)), this.#y && this.#y.fill(0), this.#p = 0, this.#m = 0, this.#g.length = 0, this.#l = 0, this.#s = 0, this.#k && this.#v) {
            const e = this.#v;
            let t;
            for (; t = e?.shift();) this.#o?.(...t)
          }
        }
      }
      n(98398);
      var Ur = new Set,
        Gr = [],
        qr = [];
      _n || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        _n = !0, bn.push(e)
      })({
        appendCss: e => {
          qr.push(e)
        },
        registerClassName: e => {
          Ur.add(e)
        },
        registerComposition: e => {
          Gr.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: e => {
          var t = function(e) {
            var {
              localClassNames: t,
              cssObjs: n,
              composedClassLists: r
            } = e, o = new Or(t, r);
            for (var i of n) o.processCssObj(i);
            return o.toCss()
          }({
            localClassNames: Array.from(Ur),
            composedClassLists: Gr,
            cssObjs: qr
          }).join("\n");
          (e => {
            var {
              fileScope: t,
              css: n
            } = e, r = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, o = dn[r];
            if (!o) {
              var i = document.createElement("style");
              t.packageName && i.setAttribute("data-package", t.packageName), i.setAttribute("data-file", t.filePath), i.setAttribute("type", "text/css"), o = dn[r] = i, document.head.appendChild(i)
            }
            o.innerHTML = n
          })({
            fileScope: e,
            css: t
          }), qr = []
        },
        getIdentOption: () => "short"
      });
      new Vr({
        max: 500
      });
      var Xr = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        Wr = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        Kr = {
          dark: "foundry_nk7jgu_nu8bkp2",
          darkHc: "foundry_nk7jgu_nu8bkp4",
          light: "foundry_nk7jgu_nu8bkp1",
          lightHc: "foundry_nk7jgu_nu8bkp3",
          tokens: "foundry_nk7jgu_nu8bkp0"
        },
        $r = "--foundry_65afb887",
        Yr = "foundry_nk7jgu_nu8bkp0";
      const Zr = (0, h.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: Wr,
          platformScaleBreakpoints: Xr,
          locale: "en-US"
        }),
        Qr = () => (0, h.useContext)(Zr),
        Jr = () => {
          const {
            platformScale: e
          } = Qr();
          return e
        },
        eo = (e, t) => {
          const n = "more" === t ? Kr.lightHc : Kr.light,
            r = "more" === t ? Kr.darkHc : Kr.dark;
          return "dark" === e ? r : n
        };
      const to = () => d.X3 ? null : document.body;

      function no(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function ro(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function oo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ro(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = no(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ro(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function io(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }(0, h.forwardRef)((({
        children: e,
        className: t,
        container: n = to(),
        asChild: r,
        colorScheme: o,
        defaultColorScheme: i,
        contrastMode: a,
        defaultContrastMode: s,
        platformScaleBreakpoints: l,
        platformScaleRatios: u,
        defaultPlatformScale: f,
        platformScale: m,
        locale: g = "en-US"
      }, v) => {
        const y = (0, h.useRef)(null),
          b = G(y, v),
          _ = (0, h.useRef)(n),
          {
            ratio: w,
            scale: E
          } = function(e) {
            const t = (0, h.useMemo)((() => ({
                ...Wr,
                ...e.platformScaleRatios
              })), [e.platformScaleRatios]),
              n = (0, h.useMemo)((() => ({
                ...Xr,
                ...e.platformScaleBreakpoints
              })), [e.platformScaleBreakpoints]),
              [r, o] = (0, h.useState)(e.platformScale || e.defaultPlatformScale),
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
                for (const e in n) {
                  const t = window.matchMedia(n[e]),
                    r = t => {
                      t.matches && o(e)
                    };
                  t.addEventListener("change", r), t.matches && o(e), i.current.push({
                    handler: r,
                    matchMedia: t
                  })
                }
              }
            })(), a)), [n, e.platformScale]), {
              scale: r,
              ratio: t[r]
            }
          }({
            platformScaleBreakpoints: l,
            platformScaleRatios: u,
            defaultPlatformScale: f,
            platformScale: m
          }),
          {
            appearanceClass: k,
            otherAppearanceClasses: j,
            providerColor: S,
            providerContrast: C
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark",
            contrastMode: n,
            defaultContrastMode: r = "normal"
          }) {
            const o = V("(prefers-color-scheme: light)"),
              i = V("(prefers-color-scheme: dark)"),
              a = V("(prefers-contrast: more)"),
              s = "system" !== e && e || o && "light" || i && "dark" || t,
              l = n || a && "more" || r,
              u = (0, h.useMemo)((() => eo(s, l)), [s, l]),
              c = (0, h.useMemo)((() => ((e, t) => {
                const n = eo(e, t);
                return [Kr.light, Kr.dark, Kr.lightHc, Kr.darkHc].filter((e => e !== n))
              })(s, l)), [s, l]);
            return {
              appearanceClass: u,
              otherAppearanceClasses: c,
              providerColor: s,
              providerContrast: l
            }
          }({
            colorScheme: o,
            defaultColorScheme: i,
            contrastMode: a,
            defaultContrastMode: s
          });
        return ((e, t, n, r, o) => {
          const i = U(o),
            a = U(e.current);
          (0, h.useEffect)((() => {
            e.current?.classList.contains(Yr) || e.current?.classList.add(Yr), e.current?.classList.add(n), e.current?.classList.remove(...r), i && o && e.current?.classList.contains(i) ? e.current?.classList.replace(i, o) : i && !o && e.current?.classList.contains(i) ? e.current?.classList.remove(i) : o && e.current?.classList.add(o)
          }), [n, o]), (0, h.useEffect)((() => {
            e.current?.style.setProperty($r, t.toString())
          }), [t]), (0, h.useEffect)((() => {
            a?.classList.remove(Yr), a?.classList.remove(n), a?.style.removeProperty($r), o && a?.classList.remove(o)
          }), [a])
        })(r ? y : _, w, k, j, t), (0, c.jsx)(Zr.Provider, {
          value: {
            locale: g,
            defaultColorScheme: i,
            colorScheme: S,
            defaultContrastMode: s,
            contrastMode: C,
            defaultPlatformScale: f,
            platformScale: E,
            platformScaleRatios: u,
            platformScaleBreakpoints: l
          },
          children: r ? (0, c.jsx)(p.DX, {
            ref: b,
            children: e
          }) : e
        })
      }));
      var ao = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        so = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = oo(oo({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) ao(u, r, e.defaultVariants) && (n += " " + c);
            return n
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
          defaultClassName: "foundry_nk7jgu_8kowh41 foundry_nk7jgu_1d5mo5m0 foundry_nk7jgu_17pcofy0",
          variantClassNames: {
            appearance: {
              primary: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua1",
              secondary: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua2",
              tertiary: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua3",
              ghost: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua4",
              danger: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua6",
              information: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua5"
            },
            size: {
              MD: "foundry_nk7jgu_17pcofy8 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdy foundry_nk7jgu_tdsdcd11",
              LG: "foundry_nk7jgu_17pcofy9 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd11"
            },
            fullWidth: {
              true: "foundry_nk7jgu_17pcofya",
              false: "foundry_nk7jgu_17pcofyb"
            },
            iconLeft: {
              true: "foundry_nk7jgu_17pcofyc",
              false: "foundry_nk7jgu_17pcofyd"
            },
            iconRight: {
              true: "foundry_nk7jgu_17pcofye",
              false: "foundry_nk7jgu_17pcofyf"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              size: "MD",
              iconLeft: !0
            }, "foundry_nk7jgu_17pcofyg"],
            [{
              size: "MD",
              iconRight: !0
            }, "foundry_nk7jgu_17pcofyh"],
            [{
              size: "LG",
              iconLeft: !0
            }, "foundry_nk7jgu_17pcofyi"],
            [{
              size: "LG",
              iconRight: !0
            }, "foundry_nk7jgu_17pcofyj"],
            [{
              size: "MD",
              appearance: "ghost"
            }, "foundry_nk7jgu_17pcofyk"],
            [{
              size: "LG",
              appearance: "ghost"
            }, "foundry_nk7jgu_17pcofyl"]
          ]
        }),
        uo = so({
          defaultClassName: "foundry_nk7jgu_17pcofyn",
          variantClassNames: {
            fullWidth: {
              true: "foundry_nk7jgu_17pcofyo",
              false: "foundry_nk7jgu_17pcofyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const co = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          className: n,
          children: r,
          onClick: o,
          iconLeft: i,
          iconLeftLabel: a,
          iconRight: s,
          iconRightLabel: l,
          appearance: u,
          size: f = "MD",
          fullWidth: m = !1,
          ...g
        }, v) => {
          const y = (0, h.useRef)(null),
            b = G(y, v),
            _ = Jr(),
            w = "string" == typeof f ? f : f?.[_] ?? f.default ?? "MD",
            {
              events: E,
              others: k
            } = (0, d.bZ)(g, {
              onPress: !1
            }),
            {
              buttonProps: j,
              isPressed: S
            } = cn({
              ...k,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => k.onPress?.(e) ?? o?.(e)
            }, y),
            C = (0, d.v6)({
              ...E,
              role: "button",
              "data-pressed": S,
              "data-testid": e,
              className: lo({
                appearance: u,
                size: w,
                fullWidth: m,
                iconLeft: !!i,
                iconRight: !!s
              })
            }, {
              ...j,
              className: n
            }),
            x = i && z[i],
            P = s && z[s],
            O = t ? p.DX : "button",
            T = m && (P || P && x);
          return (0, c.jsxs)(O, {
            ref: b,
            ...C,
            children: [T && (0, c.jsx)("div", {
              className: "foundry_nk7jgu_17pcofyq"
            }), x && (0, c.jsx)(x, {
              label: a || "",
              size: w,
              className: "foundry_nk7jgu_17pcofym"
            }), (0, c.jsx)(p.xV, {
              children: r
            }), P && (0, c.jsx)(P, {
              label: l || "",
              size: w,
              className: uo({
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

      function fo(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * n) : e * t * n / (t + n * e)
      }

      function po(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .15;
        return 0 === r ? function(e, t, n) {
          return Math.max(t, Math.min(e, n))
        }(e, t, n) : e < t ? -fo(t - e, n - t, r) + t : e > n ? +fo(e - n, n - t, r) + n : e
      }

      function mo(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function go(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function vo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? go(Object(n), !0).forEach((function(t) {
            mo(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : go(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
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

      function Eo(e) {
        let t = e.substring(2).toLowerCase();
        const n = !!~t.indexOf("passive");
        n && (t = t.replace("passive", ""));
        const r = wo.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(r);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: n
        }
      }

      function ko(e) {
        return "touches" in e
      }

      function jo(e) {
        return ko(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function So(e) {
        return ko(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Co(e, t) {
        try {
          const n = t.clientX - e.clientX,
            r = t.clientY - e.clientY,
            o = (t.clientX + e.clientX) / 2,
            i = (t.clientY + e.clientY) / 2,
            a = Math.hypot(n, r);
          return {
            angle: -180 * Math.atan2(n, r) / Math.PI,
            distance: a,
            origin: [o, i]
          }
        } catch (e) {}
        return null
      }

      function xo(e, t) {
        const [n, r] = Array.from(e.touches).filter((e => t.includes(e.identifier)));
        return Co(n, r)
      }

      function Po(e) {
        const t = So(e);
        return ko(e) ? t.identifier : t.pointerId
      }

      function Oo(e) {
        const t = So(e);
        return [t.clientX, t.clientY]
      }

      function To(e) {
        let {
          deltaX: t,
          deltaY: n,
          deltaMode: r
        } = e;
        return 1 === r ? (t *= 40, n *= 40) : 2 === r && (t *= 800, n *= 800), [t, n]
      }

      function Ao(e) {
        if ("function" == typeof e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return e(...n)
        }
        return e
      }

      function Lo() {}

      function No() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length ? Lo : 1 === t.length ? t[0] : function() {
          let e;
          for (const n of t) e = n.apply(this, arguments) || e;
          return e
        }
      }

      function Ro(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Io {
        constructor(e, t, n) {
          this.ctrl = e, this.args = t, this.key = n, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
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
            ingKey: n,
            args: r
          } = this;
          t[n] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [
            [-1 / 0, 1 / 0],
            [-1 / 0, 1 / 0]
          ], e.args = r, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0
        }
        start(e) {
          const t = this.state,
            n = this.config;
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = n.from ? Ao(n.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            config: n,
            shared: r
          } = this;
          t.args = this.args;
          let o = 0;
          if (e && (t.event = e, n.preventDefault && e.cancelable && t.event.preventDefault(), t.type = e.type, r.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, r.locked = !!document.pointerLockElement, Object.assign(r, function(e) {
              const t = {};
              if ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e) {
                const {
                  shiftKey: n,
                  altKey: r,
                  metaKey: o,
                  ctrlKey: i
                } = e;
                Object.assign(t, {
                  shiftKey: n,
                  altKey: r,
                  metaKey: o,
                  ctrlKey: i
                })
              }
              return t
            }(e)), r.down = r.pressed = r.buttons % 2 == 1 || r.touches > 0, o = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
            const e = t._delta.map(Math.abs);
            ho.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [i, a] = t._movement, [s, l] = n.threshold, {
            _step: u,
            values: c
          } = t;
          if (n.hasCustomTransform ? (!1 === u[0] && (u[0] = Math.abs(i) >= s && c[0]), !1 === u[1] && (u[1] = Math.abs(a) >= l && c[1])) : (!1 === u[0] && (u[0] = Math.abs(i) >= s && Math.sign(i) * s), !1 === u[1] && (u[1] = Math.abs(a) >= l && Math.sign(a) * l)), t.intentional = !1 !== u[0] || !1 !== u[1], !t.intentional) return;
          const d = [0, 0];
          if (n.hasCustomTransform) {
            const [e, t] = c;
            d[0] = !1 !== u[0] ? e - u[0] : 0, d[1] = !1 !== u[1] ? t - u[1] : 0
          } else d[0] = !1 !== u[0] ? i - u[0] : 0, d[1] = !1 !== u[1] ? a - u[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          const h = t.offset,
            f = t._active && !t._blocked || t.active;
          f && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = r[this.ingKey] = t._active, e && (t.first && ("bounds" in n && (t._bounds = Ao(n.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [p, m] = t.offset, [
            [g, v],
            [y, b]
          ] = t._bounds;
          t.overflow = [p < g ? -1 : p > v ? 1 : 0, m < y ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const _ = t._active && n.rubberband || [0, 0];
          if (t.offset = function(e, t, n) {
              let [r, o] = t, [i, a] = n;
              const [
                [s, l],
                [u, c]
              ] = e;
              return [po(r, s, l, i), po(o, u, c, a)]
            }(t._bounds, t.offset, _), t.delta = ho.sub(t.offset, h), this.computeMovement(), f && (!t.last || o > 32)) {
            t.delta = ho.sub(t.offset, h);
            const e = t.delta.map(Math.abs);
            ho.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            n = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
          const r = this.handler(vo(vo(vo({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== r && (e.memo = r)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Mo extends Io {
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
            n = this.config;
          if (!t.axis && e) {
            const r = "object" == typeof n.axisThreshold ? n.axisThreshold[jo(e)] : n.axisThreshold;
            t.axis = function(e, t) {
              let [n, r] = e;
              const o = Math.abs(n),
                i = Math.abs(r);
              return o > i && o > t ? "x" : i > o && i > t ? "y" : void 0
            }(t._movement, r)
          }
          t._blocked = (n.lockDirection || !!n.axis) && !t.axis || !!n.axis && n.axis !== t.axis
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
      const Do = e => e,
        Bo = {
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          eventOptions: (e, t, n) => vo(vo({}, n.shared.eventOptions), e),
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
          transform(e, t, n) {
            const r = e || n.shared.transform;
            return this.hasCustomTransform = !!r, r || Do
          },
          threshold: e => ho.toVector(e, 0)
        },
        Ho = vo(vo({}, Bo), {}, {
          axis(e, t, n) {
            let {
              axis: r
            } = n;
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
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
              right: n = 1 / 0,
              top: r = -1 / 0,
              bottom: o = 1 / 0
            } = e;
            return [
              [t, n],
              [r, o]
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
          device(e, t, n) {
            let {
              pointer: {
                touch: r = !1,
                lock: o = !1,
                mouse: i = !1
              } = {}
            } = n;
            return this.pointerLock = o && Uo.pointerLock, Uo.touch && r ? "touch" : this.pointerLock ? "mouse" : Uo.pointer && !i ? "pointer" : Uo.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, n) {
            let {
              preventScroll: r
            } = n;
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Uo.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
          },
          pointerCapture(e, t, n) {
            let {
              pointer: {
                capture: r = !0,
                buttons: o = 1,
                keys: i = !0
              } = {}
            } = n;
            return this.pointerButtons = o, this.keys = i, !this.pointerLock && "pointer" === this.device && r
          },
          threshold(e, t, n) {
            let {
              filterTaps: r = !1,
              tapsThreshold: o = 3,
              axis: i
            } = n;
            const a = ho.toVector(e, r ? o : i ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = o, a
          },
          swipe() {
            let {
              velocity: e = Go,
              distance: t = qo,
              duration: n = Xo
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
              velocity: this.transform(ho.toVector(e)),
              distance: this.transform(ho.toVector(t)),
              duration: n
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
        const [t, n] = e.overflow, [r, o] = e._delta, [i, a] = e._direction;
        (t < 0 && r > 0 && i < 0 || t > 0 && r < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (n < 0 && o > 0 && a < 0 || n > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Yo = vo(vo({}, Bo), {}, {
          device(e, t, n) {
            let {
              shared: r,
              pointer: {
                touch: o = !1
              } = {}
            } = n;
            if (r.target && !Uo.touch && Uo.gesture) return "gesture";
            if (Uo.touch && o) return "touch";
            if (Uo.touchscreen) {
              if (Uo.pointer) return "pointer";
              if (Uo.touch) return "touch"
            }
          },
          bounds(e, t, n) {
            let {
              scaleBounds: r = {},
              angleBounds: o = {}
            } = n;
            const i = e => {
                const t = Ro(Ao(r, e), {
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
            return "function" != typeof r && "function" != typeof o ? [i(), a()] : e => [i(e), a(e)]
          },
          threshold(e, t, n) {
            return this.lockDirection = "lock" === n.axis, ho.toVector(e, this.lockDirection ? [.1, 3] : 0)
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
        ni = new Map;

      function ri(e) {
        ti.set(e.key, e.engine), ni.set(e.key, e.resolver)
      }
      const oi = {
          key: "drag",
          engine: class extends Mo {
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
                  n = e.currentTarget.getBoundingClientRect(),
                  r = {
                    left: t.left - n.left + e.offset[0],
                    right: t.right - n.right + e.offset[0],
                    top: t.top - n.top + e.offset[1],
                    bottom: t.bottom - n.bottom + e.offset[1]
                  };
                e._bounds = Ho.bounds(r)
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
                n = this.state;
              if (null != e.buttons && (Array.isArray(t.pointerButtons) ? !t.pointerButtons.includes(e.buttons) : -1 !== t.pointerButtons && t.pointerButtons !== e.buttons)) return;
              const r = this.ctrl.setEventIds(e);
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && n._pointerActive || (this.start(e), this.setupPointer(e), n._pointerId = Po(e), n._pointerActive = !0, this.computeValues(Oo(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== jo(e) ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                n = this.config;
              if (!t._pointerActive) return;
              const r = Po(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              const o = Oo(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = ho.sub(o, t._values), this.computeValues(o)), ho.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : n.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === n.preventScrollAxis || "xy" === n.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                n = this.config;
              if (!t._active || !t._pointerActive) return;
              const r = Po(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = t._distance;
              if (t.tap = o <= n.tapsThreshold && i <= n.tapsThreshold, t.tap && n.filterTaps) t._force = !0;
              else {
                const [e, r] = t._delta, [o, i] = t._movement, [a, s] = n.swipe.velocity, [l, u] = n.swipe.distance, c = n.swipe.duration;
                if (t.elapsedTime < c) {
                  const n = Math.abs(e / t.timeDelta),
                    c = Math.abs(r / t.timeDelta);
                  n > a && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), c > s && Math.abs(i) > u && (t.swipe[1] = Math.sign(r))
                }
              }
              this.emit()
            }
            pointerClick(e) {
              !this.state.tap && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }
            setupPointer(e) {
              const t = this.config,
                n = t.device;
              t.pointerLock && e.currentTarget.requestPointerLock(), t.pointerCapture || (this.eventStore.add(this.sharedConfig.window, n, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "cancel", this.pointerUp.bind(this)))
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
                const n = this.state,
                  r = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), n._delta = t(this.config.keyboardDisplacement, r), n._keyboardActive = !0, ho.addTo(n._movement, n._delta), this.compute(e), this.emit()
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
          engine: class extends Mo {
            constructor() {
              super(...arguments), mo(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Oo(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const n = Oo(e);
              t._movement = t._delta = ho.sub(n, t._values), this.computeValues(n), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: ei
        },
        ai = {
          key: "move",
          engine: class extends Mo {
            constructor() {
              super(...arguments), mo(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Oo(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = Oo(e),
                n = this.state;
              n._delta = ho.sub(t, n._values), ho.addTo(n._movement, n._delta), this.computeValues(t), this.compute(e), this.emit()
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
                lastOffset: n
              } = this.state;
              this.state.offset = "wheel" === e ? ho.add(t, n) : [(1 + t[0]) * n[0], t[1] + n[1]]
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
                [t, n] = e._movement;
              if (!e.axis) {
                const r = 30 * Math.abs(t) - Math.abs(n);
                r < 0 ? e.axis = "angle" : r > 0 && (e.axis = "scale")
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
                n = this.ctrl.touchIds;
              if (t._active && t._touchIds.every((e => n.has(e)))) return;
              if (n.size < 2) return;
              this.start(e), t._touchIds = Array.from(n).slice(0, 2);
              const r = xo(e, t._touchIds);
              r && this.pinchStart(e, r)
            }
            pointerStart(e) {
              if (null != e.buttons && e.buttons % 2 != 1) return;
              this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId);
              const t = this.state,
                n = t._pointerEvents,
                r = this.ctrl.pointerIds;
              if (t._active && Array.from(n.keys()).every((e => r.has(e)))) return;
              if (n.size < 2 && n.set(e.pointerId, e), t._pointerEvents.size < 2) return;
              this.start(e);
              const o = Co(...Array.from(n.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = xo(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const n = Co(...Array.from(t.values()));
              n && this.pinchMove(e, n)
            }
            pinchMove(e, t) {
              const n = this.state,
                r = n._values[1],
                o = t.angle - r;
              let i = 0;
              Math.abs(o) > 270 && (i += Math.sign(o)), this.computeValues([t.distance, t.angle - 360 * i]), n.origin = t.origin, n.turns = i, n._movement = [n._values[0] / n._initial[0] - 1, n._values[1] - n._initial[1]], this.compute(e), this.emit()
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
              const n = t._movement;
              t._movement = [e.scale - 1, e.rotation], t._delta = ho.sub(t._movement, n), this.compute(e), this.emit()
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
              t._delta = [-To(e)[1] / 100 * t.offset[0], 0], ho.addTo(t._movement, t._delta), $o(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          engine: class extends Mo {
            constructor() {
              super(...arguments), mo(this, "ingKey", "scrolling")
            }
            scroll(e) {
              this.state._active || this.start(e), this.scrollChange(e), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this))
            }
            scrollChange(e) {
              e.cancelable && e.preventDefault();
              const t = this.state,
                n = function(e) {
                  var t, n;
                  const {
                    scrollX: r,
                    scrollY: o,
                    scrollLeft: i,
                    scrollTop: a
                  } = e.currentTarget;
                  return [null !== (t = null != r ? r : i) && void 0 !== t ? t : 0, null !== (n = null != o ? o : a) && void 0 !== n ? n : 0]
                }(e);
              t._delta = ho.sub(n, t._values), ho.addTo(t._movement, t._delta), this.computeValues(n), this.compute(e), this.emit()
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
        ui = {
          key: "wheel",
          engine: class extends Mo {
            constructor() {
              super(...arguments), mo(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = To(e), ho.addTo(t._movement, t._delta), $o(t), this.compute(e), this.emit()
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
      const ci = {
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
        const n = {};
        for (const [r, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            n[r] = o.call(n, e[r], r, e);
            break;
          case "object":
            n[r] = hi(e[r], o);
            break;
          case "boolean":
            o && (n[r] = e[r])
        }
        return n
      }
      class fi {
        constructor(e, t) {
          mo(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, n, r, o) {
          const i = this._listeners,
            a = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              const n = yo[e];
              return e + (n && n[t] || t)
            }(t, n),
            s = vo(vo({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
          e.addEventListener(a, r, s);
          const l = () => {
            e.removeEventListener(a, r, s), i.delete(l)
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
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 140;
          this.remove(e);
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++) o[i - 3] = arguments[i];
          this._timeouts.set(e, window.setTimeout(t, n, ...o))
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
          var t, n;
          mo(this, "gestures", new Set), mo(this, "_targetEventStore", new fi(this)), mo(this, "gestureEventStores", {}), mo(this, "gestureTimeoutStores", {}), mo(this, "handlers", {}), mo(this, "config", {}), mo(this, "pointerIds", new Set), mo(this, "touchIds", new Set), mo(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (n = e).drag && gi(t, "drag"), n.wheel && gi(t, "wheel"), n.scroll && gi(t, "scroll"), n.move && gi(t, "move"), n.pinch && gi(t, "pinch"), n.hover && gi(t, "hover")
        }
        setEventIds(e) {
          return ko(e) ? (this.touchIds = new Set(function(e) {
            return function(e) {
              return Array.from(e.touches).filter((t => {
                var n, r;
                return t.target === e.currentTarget || (null === (n = e.currentTarget) || void 0 === n || null === (r = n.contains) || void 0 === r ? void 0 : r.call(n, t.target))
              }))
            }(e).map((e => e.identifier))
          }(e)), this.touchIds) : "pointerId" in e ? ("pointerup" === e.type || "pointercancel" === e.type ? this.pointerIds.delete(e.pointerId) : "pointerdown" === e.type && this.pointerIds.add(e.pointerId), this.pointerIds) : void 0
        }
        applyHandlers(e, t) {
          this.handlers = e, this.nativeHandlers = t
        }
        applyConfig(e, t) {
          this.config = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const r = e,
              {
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              } = r,
              u = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                  if (null == e) return {};
                  var n, r, o = {},
                    i = Object.keys(e);
                  for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                  return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
              }(r, di);
            if (n.shared = hi({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              }, ci), t) {
              const e = ni.get(t);
              n[t] = hi(vo({
                shared: n.shared
              }, u), e)
            } else
              for (const e in u) {
                const t = ni.get(e);
                t && (n[e] = hi(vo({
                  shared: n.shared
                }, u[e]), t))
              }
            return n
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
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const r = this.config.shared,
            o = {};
          let i;
          if (!r.target || (i = r.target(), i)) {
            if (r.enabled) {
              for (const e of this.gestures) {
                const n = this.config[e],
                  r = vi(o, n.eventOptions, !!i);
                n.enabled && new(ti.get(e))(this, t, e).bind(r)
              }
              const e = vi(o, r.eventOptions, !!i);
              for (const n in this.nativeHandlers) e(n, "", (e => this.nativeHandlers[n](vo(vo({}, this.state.shared), {}, {
                event: e,
                args: t
              }))), void 0, !0)
            }
            for (const e in o) o[e] = No(...o[e]);
            if (!i) return o;
            for (const e in o) {
              const {
                device: t,
                capture: n,
                passive: r
              } = Eo(e);
              this._targetEventStore.add(i, t, "", o[e], {
                capture: n,
                passive: r
              })
            }
          }
        }
      }

      function gi(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new fi(e, t), e.gestureTimeoutStores[t] = new pi
      }
      const vi = (e, t, n) => function(r, o, i) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          var l, u;
          const c = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            d = null !== (u = a.passive) && void 0 !== u ? u : t.passive;
          let h = s ? r : function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const r = yo[e],
              o = r && r[t] || t;
            return "on" + bo(e) + bo(o) + (function() {
              let e = arguments.length > 1 ? arguments[1] : void 0;
              return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && !_o.includes(e)
            }(n, o) ? "Capture" : "")
          }(r, o, c);
          n && d && (h += "Passive"), e[h] = e[h] || [], e[h].push(i)
        },
        yi = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function bi(e, t, n, r, o, i) {
        if (!e.has(n)) return;
        if (!ti.has(r)) return;
        const a = n + "Start",
          s = n + "End";
        o[r] = e => {
          let r;
          return e.first && a in t && t[a](e), n in t && (r = t[n](e)), e.last && s in t && t[s](e), r
        }, i[r] = i[r] || {}
      }

      function _i(e, t) {
        const n = ([oi, si, li, ui, ai, ii].forEach(ri), function(e, t) {
          const {
            handlers: n,
            nativeHandlers: r,
            config: o
          } = function(e, t) {
            const [n, r, o] = function(e) {
              const t = {},
                n = {},
                r = new Set;
              for (let o in e) yi.test(o) ? (r.add(RegExp.lastMatch), n[o] = e[o]) : t[o] = e[o];
              return [n, t, r]
            }(e), i = {};
            return bi(o, n, "onDrag", "drag", i, t), bi(o, n, "onWheel", "wheel", i, t), bi(o, n, "onScroll", "scroll", i, t), bi(o, n, "onPinch", "pinch", i, t), bi(o, n, "onMove", "move", i, t), bi(o, n, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: r
            }
          }(e, t || {});
          return function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = arguments.length > 3 ? arguments[3] : void 0;
            const o = f().useMemo((() => new mi(e)), []);
            if (o.applyHandlers(e, r), o.applyConfig(t, n), f().useEffect(o.effect.bind(o)), f().useEffect((() => o.clean.bind(o)), []), void 0 === t.target) return o.bind.bind(o)
          }(n, o, void 0, r)
        });
        return n(e, t || {})
      }
      var wi = Di(),
        Ei = e => Ni(e, wi),
        ki = Di();
      Ei.write = e => Ni(e, ki);
      var ji = Di();
      Ei.onStart = e => Ni(e, ji);
      var Si = Di();
      Ei.onFrame = e => Ni(e, Si);
      var Ci = Di();
      Ei.onFinish = e => Ni(e, Ci);
      var xi = [];
      Ei.setTimeout = (e, t) => {
        const n = Ei.now() + t,
          r = () => {
            const e = xi.findIndex((e => e.cancel == r));
            ~e && xi.splice(e, 1), Ai -= ~e ? 1 : 0
          },
          o = {
            time: n,
            handler: e,
            cancel: r
          };
        return xi.splice(Pi(n), 0, o), Ai += 1, Ri(), o
      };
      var Pi = e => ~(~xi.findIndex((t => t.time > e)) || ~xi.length);
      Ei.cancel = e => {
        ji.delete(e), Si.delete(e), Ci.delete(e), wi.delete(e), ki.delete(e)
      }, Ei.sync = e => {
        Li = !0, Ei.batchedUpdates(e), Li = !1
      }, Ei.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, Ei.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          ji.delete(n), t = null
        }, r
      };
      var Oi = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Ei.use = e => Oi = e, Ei.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Ei.batchedUpdates = e => e(), Ei.catch = console.error, Ei.frameLoop = "always", Ei.advance = () => {
        "demand" !== Ei.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Mi()
      };
      var Ti = -1,
        Ai = 0,
        Li = !1;

      function Ni(e, t) {
        Li ? (t.delete(e), e(0)) : (t.add(e), Ri())
      }

      function Ri() {
        Ti < 0 && (Ti = 0, "demand" !== Ei.frameLoop && Oi(Ii))
      }

      function Ii() {
        ~Ti && (Oi(Ii), Ei.batchedUpdates(Mi))
      }

      function Mi() {
        const e = Ti;
        Ti = Ei.now();
        const t = Pi(Ti);
        t && (Bi(xi.splice(0, t), (e => e.handler())), Ai -= t), Ai ? (ji.flush(), wi.flush(e ? Math.min(64, Ti - e) : 16.667), Si.flush(), ki.flush(), Ci.flush()) : Ti = -1
      }

      function Di() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            Ai += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (Ai -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, Ai -= t.size, Bi(t, (t => t(n) && e.add(t))), Ai += e.size, t = e)
          }
        }
      }

      function Bi(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            Ei.catch(e)
          }
        }))
      }
      var Hi = Object.defineProperty,
        zi = {};

      function Fi() {}((e, t) => {
        for (var n in t) Hi(e, n, {
          get: t[n],
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
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var Gi = (e, t) => e.forEach(t);

      function qi(e, t, n) {
        if (Vi.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      var Xi = e => Vi.und(e) ? [] : Vi.arr(e) ? e : [e];

      function Wi(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), Gi(n, t)
        }
      }
      var Ki, $i, Yi = (e, ...t) => Wi(e, (e => e(...t))),
        Zi = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Qi = null,
        Ji = !1,
        ea = Fi,
        ta = e => {
          e.to && ($i = e.to), e.now && (Ei.now = e.now), void 0 !== e.colors && (Qi = e.colors), null != e.skipAnimation && (Ji = e.skipAnimation), e.createStringInterpolator && (Ki = e.createStringInterpolator), e.requestAnimationFrame && Ei.use(e.requestAnimationFrame), e.batchedUpdates && (Ei.batchedUpdates = e.batchedUpdates), e.willAdvance && (ea = e.willAdvance), e.frameLoop && (Ei.frameLoop = e.frameLoop)
        },
        na = new Set,
        ra = [],
        oa = [],
        ia = 0,
        aa = {
          get idle() {
            return !na.size && !ra.length
          },
          start(e) {
            ia > e.priority ? (na.add(e), Ei.onStart(sa)) : (la(e), Ei(ca))
          },
          advance: ca,
          sort(e) {
            if (ia) Ei.onFrame((() => aa.sort(e)));
            else {
              const t = ra.indexOf(e);
              ~t && (ra.splice(t, 1), ua(e))
            }
          },
          clear() {
            ra = [], na.clear()
          }
        };

      function sa() {
        na.forEach(la), na.clear(), Ei(ca)
      }

      function la(e) {
        ra.includes(e) || ua(e)
      }

      function ua(e) {
        ra.splice(function(t) {
          const n = t.findIndex((t => t.priority > e.priority));
          return n < 0 ? t.length : n
        }(ra), 0, e)
      }

      function ca(e) {
        const t = oa;
        for (let n = 0; n < ra.length; n++) {
          const r = ra[n];
          ia = r.priority, r.idle || (ea(r), r.advance(e), r.idle || t.push(r))
        }
        return ia = 0, (oa = ra).length = 0, (ra = t).length > 0
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

      function Ea(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function ka(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = Ea(o, r, e + 1 / 3),
          a = Ea(o, r, e),
          s = Ea(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function ja(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Sa(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Ca(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function xa(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Pa(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = _a.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Qi && void 0 !== Qi[e] ? Qi[e] : (t = pa.exec(e)) ? (ja(t[1]) << 24 | ja(t[2]) << 16 | ja(t[3]) << 8 | 255) >>> 0 : (t = ma.exec(e)) ? (ja(t[1]) << 24 | ja(t[2]) << 16 | ja(t[3]) << 8 | Ca(t[4])) >>> 0 : (t = ya.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = wa.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ba.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = ga.exec(e)) ? (255 | ka(Sa(t[1]), xa(t[2]), xa(t[3]))) >>> 0 : (t = va.exec(e)) ? (ka(Sa(t[1]), xa(t[2]), xa(t[3])) | Ca(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Oa = (e, t, n) => {
          if (Vi.fun(e)) return e;
          if (Vi.arr(e)) return Oa({
            range: e,
            output: t,
            extrapolate: n
          });
          if (Vi.str(e.output[0])) return Ki(e);
          const r = e,
            o = r.output,
            i = r.range || [0, 1],
            a = r.extrapolateLeft || r.extrapolate || "extend",
            s = r.extrapolateRight || r.extrapolate || "extend",
            l = r.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1
            }(e, i);
            return function(e, t, n, r, o, i, a, s, l) {
              let u = l ? l(e) : e;
              if (u < t) {
                if ("identity" === a) return u;
                "clamp" === a && (u = t)
              }
              if (u > n) {
                if ("identity" === s) return u;
                "clamp" === s && (u = n)
              }
              return r === o ? r : t === n ? e <= t ? r : o : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u -= t : u = (u - t) / (n - t), u = i(u), r === -1 / 0 ? u = -u : o === 1 / 0 ? u += r : u = u * (o - r) + r, u)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, a, s, r.map)
          }
        },
        Ta = 1.70158,
        Aa = 1.525 * Ta,
        La = Ta + 1,
        Na = 2 * Math.PI / 3,
        Ra = 2 * Math.PI / 4.5,
        Ia = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        Ma = {
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
          easeInBack: e => La * e * e * e - Ta * e * e,
          easeOutBack: e => 1 + La * Math.pow(e - 1, 3) + Ta * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Aa) / 2 : (Math.pow(2 * e - 2, 2) * ((Aa + 1) * (2 * e - 2) + Aa) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Na),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Na) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ra) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ra) / 2 + 1,
          easeInBounce: e => 1 - Ia(1 - e),
          easeOutBounce: Ia,
          easeInOutBounce: e => e < .5 ? (1 - Ia(1 - 2 * e)) / 2 : (1 + Ia(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return ((e, t, n) => Math.min(Math.max(n, 0), 1))(0, 0, ("end" === t ? Math.floor(r) : Math.ceil(r)) / e)
          }
        },
        Da = Symbol.for("FluidValue.get"),
        Ba = Symbol.for("FluidValue.observers"),
        Ha = e => Boolean(e && e[Da]),
        za = e => e && e[Da] ? e[Da]() : e,
        Fa = e => e[Ba] || null;

      function Va(e, t) {
        const n = e[Ba];
        n && n.forEach((e => {
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
        Ga = (e, t) => Ka(e, Da, t);

      function qa(e, t) {
        if (e[Da]) {
          let n = e[Ba];
          n || Ka(e, Ba, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function Xa(e, t) {
        const n = e[Ba];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[Ba] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      var Wa, Ka = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        $a = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Ya = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Za = new RegExp(`(${$a.source})(%|[a-z]+)`, "i"),
        Qa = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Ja = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        es = e => {
          const [t, n] = ts(e);
          if (!t || Zi()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && Ja.test(n) ? es(n) : n || e
        },
        ts = e => {
          const t = Ja.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        },
        ns = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        rs = e => {
          Wa || (Wa = Qi ? new RegExp(`(${Object.keys(Qi).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => za(e).replace(Ja, es).replace(Ya, Pa).replace(Wa, Pa))),
            n = t.map((e => e.match($a).map(Number))),
            r = n[0].map(((e, t) => n.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))),
            o = r.map((t => Oa({
              ...e,
              output: t
            })));
          return e => {
            const n = !Za.test(t[0]) && t.find((e => Za.test(e)))?.replace($a, "");
            let r = 0;
            return t[0].replace($a, (() => `${o[r++](e)}${n||""}`)).replace(Qa, ns)
          }
        },
        os = "react-spring: ",
        is = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${os}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        as = is(console.warn),
        ss = is(console.warn);

      function ls(e) {
        return Vi.str(e) && ("#" == e[0] || /\d/.test(e) || !Zi() && Ja.test(e) || e in (Qi || {}))
      }
      var us = Zi() ? h.useEffect : h.useLayoutEffect;

      function cs() {
        const e = (0, h.useState)()[1],
          t = (() => {
            const e = (0, h.useRef)(!1);
            return us((() => (e.current = !0, () => {
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
          return n = e, r = ps, o = t, Object.defineProperty(n, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var n, r, o
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
            super(0), this._string = null, this._toString = Oa({
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
            e && (this._toString = Oa({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        ws = {
          dependencies: null
        },
        Es = class extends ys {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return qi(this.source, ((n, r) => {
              var o;
              (o = n) && o[ps] === o ? t[r] = n.getValue(e) : Ha(n) ? t[r] = za(n) : e || (t[r] = n)
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
        ks = class extends Es {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new ks(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(js)), !0)
          }
        };

      function js(e) {
        return (ls(e) ? _s : bs).create(e)
      }

      function Ss(e) {
        const t = ms(e);
        return t ? t.constructor : Vi.arr(e) ? ks : ls(e) ? _s : bs
      }
      var Cs = (e, t) => {
          const n = !Vi.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, h.forwardRef)(((r, o) => {
            const i = (0, h.useRef)(null),
              a = n && (0, h.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (Vi.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [s, l] = function(e, t) {
                const n = new Set;
                return ws.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Es(e), ws.dependencies = null, [e, n]
              }(r, t),
              u = cs(),
              c = () => {
                const e = i.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && u()
              },
              d = new xs(c, l),
              f = (0, h.useRef)();
            us((() => (f.current = d, Gi(l, (e => qa(e, d))), () => {
              f.current && (Gi(f.current.deps, (e => Xa(e, f.current))), Ei.cancel(f.current.update))
            }))), (0, h.useEffect)(c, []), ds((() => () => {
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
        xs = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Ei.write(this.update)
          }
        },
        Ps = Symbol.for("AnimatedComponent"),
        Os = e => Vi.str(e) ? e : e && Vi.str(e.displayName) ? e.displayName : Vi.fun(e) && e.name || null;

      function Ts(e, ...t) {
        return Vi.fun(e) ? e(...t) : e
      }
      var As = (e, t) => !0 === e || !!(t && e && (Vi.fun(e) ? e(t) : Xi(e).includes(t))),
        Ls = (e, t) => Vi.obj(e) ? t && e[t] : e,
        Ns = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Rs = e => e,
        Is = (e, t = Rs) => {
          let n = Ms;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const o of n) {
            const n = t(e[o], o);
            Vi.und(n) || (r[o] = n)
          }
          return r
        },
        Ms = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Ds = {
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
          let n = 0;
          if (qi(e, ((e, r) => {
              Ds[r] || (t[r] = e, n++)
            })), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return qi(e, ((e, r) => r in t || (n[r] = e))), n
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
          easing: Ma.linear,
          clamp: !1
        },
        Xs = class {
          constructor() {
            this.velocity = 0, Object.assign(this, qs)
          }
        };

      function Ws(e, t) {
        if (Vi.und(t.decay)) {
          const n = !Vi.und(t.tension) || !Vi.und(t.friction);
          !n && Vi.und(t.frequency) && Vi.und(t.damping) && Vi.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
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
        props: n,
        defaultProps: r,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, u, c = As(n.cancel ?? r?.cancel, t);
          if (c) f();
          else {
            Vi.und(n.pause) || (o.paused = As(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = o.paused || As(e, t)), l = Ts(n.delay || 0, t), e ? (o.resumeQueue.add(h), i.pause()) : (i.resume(), h())
          }

          function d() {
            o.resumeQueue.add(h), o.timeouts.delete(u), u.cancel(), l = u.time - Ei.now()
          }

          function h() {
            l > 0 && !zi.skipAnimation ? (o.delayed = !0, u = Ei.setTimeout(f, l), o.pauseQueue.add(d), o.timeouts.add(u)) : f()
          }

          function f() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(u), e <= (o.cancelId || 0) && (c = !0);
            try {
              i.start({
                ...n,
                callId: e,
                cancel: c
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
        Js = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        el = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function tl(e, t, n, r) {
        const {
          callId: o,
          parentId: i,
          onRest: a
        } = t, {
          asyncTo: s,
          promise: l
        } = n;
        return i || e !== s || t.reset ? n.promise = (async () => {
          n.asyncId = o, n.asyncTo = e;
          const u = Is(t, ((e, t) => "onRest" === t ? void 0 : e));
          let c, d;
          const h = new Promise(((e, t) => (c = e, d = t))),
            f = e => {
              const t = o <= (n.cancelId || 0) && el(r) || o !== n.asyncId && Js(r, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new rl,
                a = new ol;
              return (async () => {
                if (zi.skipAnimation) throw nl(n), a.result = Js(r, !1), d(a), a;
                f(i);
                const s = Vi.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, qi(u, ((e, t) => {
                  Vi.und(s[t]) && (s[t] = e)
                }));
                const l = await r.start(s);
                return f(i), n.paused && await new Promise((e => {
                  n.resumeQueue.add(e)
                })), l
              })()
            };
          let m;
          if (zi.skipAnimation) return nl(n), Js(r, !1);
          try {
            let t;
            t = Vi.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, r.stop.bind(r))), await Promise.all([t.then(c), h]), m = Js(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof rl) m = e.result;
            else {
              if (!(e instanceof ol)) throw e;
              m = e.result
            }
          } finally {
            o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? l : void 0)
          }
          return Vi.fun(a) && Ei.batchedUpdates((() => {
            a(m, r, r.item)
          })), m
        })() : l
      }

      function nl(e, t) {
        Wi(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var rl = class extends Error {
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
        ul = e => (1 & e[ll]) > 0,
        cl = e => (2 & e[ll]) > 0,
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
              const n = Vi.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Vi.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(cl(this) || this._state.asyncTo) || dl(this)
          }
          get goal() {
            return za(this.animation.to)
          }
          get velocity() {
            const e = ms(this);
            return e instanceof bs ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return ul(this)
          }
          get isAnimating() {
            return cl(this)
          }
          get isPaused() {
            return dl(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let t = !0,
              n = !1;
            const r = this.animation;
            let {
              toValues: o
            } = r;
            const {
              config: i
            } = r, a = vs(r.to);
            !a && Ha(r.to) && (o = Xi(za(r.to))), r.values.forEach(((s, l) => {
              if (s.done) return;
              const u = s.constructor == _s ? 1 : a ? a[l].lastPosition : o[l];
              let c = r.immediate,
                d = u;
              if (!c) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const n = r.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = Vi.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const h = i.precision || (n == u ? .005 : Math.min(1, .001 * Math.abs(u - n)));
                if (Vi.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * t);
                    d = n + o / (1 - e) * (1 - r), c = Math.abs(s.lastPosition - d) <= h, a = o * r
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || h / 10,
                      r = i.clamp ? 0 : i.bounce,
                      l = !Vi.und(r),
                      f = n == u ? s.v0 > 0 : n < u;
                    let p, m = !1;
                    const g = 1,
                      v = Math.ceil(e / g);
                    for (let e = 0; e < v && (p = Math.abs(a) > t, p || (c = Math.abs(u - d) <= h, !c)); ++e) l && (m = d == u || d > u == f, m && (a = -a * r, d = u)), a += (1e-6 * -i.tension * (d - u) + .001 * -i.friction * a) / i.mass * g, d += a * g
                  }
                else {
                  let r = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, s.durationProgress > 0 && (s.elapsedTime = i.duration * s.durationProgress, t = s.elapsedTime += e)), r = (i.progress || 0) + t / this._memoizedDuration, r = r > 1 ? 1 : r < 0 ? 0 : r, s.durationProgress = r), d = n + i.easing(r) * (u - n), a = (d - s.lastPosition) / e, c = 1 == r
                }
                s.lastVelocity = a, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), c = !0)
              }
              a && !a[l].done && (c = !1), c ? s.done = !0 : t = !1, s.setValue(d, i.round) && (n = !0)
            }));
            const s = ms(this),
              l = s.getValue();
            if (t) {
              const e = za(r.to);
              l === e && !n || i.decay ? n && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(l)
          }
          set(e) {
            return Ei.batchedUpdates((() => {
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
            if (cl(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Ei.batchedUpdates((() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              }))
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let n;
            return Vi.und(e) ? (n = this.queue || [], this.queue = []) : n = [Vi.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map((e => this._update(e)))).then((e => Zs(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), nl(this._state, e && this._lastCallId), Ei.batchedUpdates((() => this._stop(t, e))), this
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
              to: n,
              from: r
            } = e;
            n = Vi.obj(n) ? n[t] : n, (null == n || Fs(n)) && (n = void 0), r = Vi.obj(r) ? r[t] : r, null == r && (r = void 0);
            const o = {
              to: n,
              from: r
            };
            return ul(this) || (e.reverse && ([n, r] = [r, n]), r = za(r), Vi.und(r) ? ms(this) || this._set(n) : this._set(r)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, Is(e, ((e, t) => /^on/.test(t) ? Ls(e, n) : e))), wl(this, e, "onProps"), El(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Ys(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: i,
              actions: {
                pause: () => {
                  dl(this) || (fl(this, !0), Yi(i.pauseQueue), El(this, "onPause", Js(this, ml(this, this.animation.to)), this))
                },
                resume: () => {
                  dl(this) && (fl(this, !1), cl(this) && this._resume(), Yi(i.resumeQueue), El(this, "onResume", Js(this, ml(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = gl(e);
                if (t) return this._update(t, !0)
              }
              return n
            }))
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(el(this));
            const r = !Vi.und(e.to),
              o = !Vi.und(e.from);
            if (r || o) {
              if (!(t.callId > this._lastToId)) return n(el(this));
              this._lastToId = t.callId
            }
            const {
              key: i,
              defaultProps: a,
              animation: s
            } = this, {
              to: l,
              from: u
            } = s;
            let {
              to: c = l,
              from: d = u
            } = e;
            !o || r || t.default && !Vi.und(c) || (c = d), t.reverse && ([c, d] = [d, c]);
            const h = !Ui(d, u);
            h && (s.from = d), d = za(d);
            const f = !Ui(c, l);
            f && this._focus(c);
            const p = Fs(t.to),
              {
                config: m
              } = s,
              {
                decay: g,
                velocity: v
              } = m;
            (r || o) && (m.velocity = 0), t.config && !p && function(e, t, n) {
              n && (Ws(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), Ws(e, t), Object.assign(e, t);
              for (const t in qs) null == e[t] && (e[t] = qs[t]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              Vi.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
            }(m, Ts(t.config, i), t.config !== a.config ? Ts(a.config, i) : void 0);
            let y = ms(this);
            if (!y || Vi.und(c)) return n(Js(this, !0));
            const b = Vi.und(t.reset) ? o && !t.default : !Vi.und(d) && As(t.reset, i),
              _ = b ? d : this.get(),
              w = Hs(c),
              E = Vi.num(w) || Vi.arr(w) || ls(w),
              k = !p && (!E || As(a.immediate || t.immediate, i));
            if (f) {
              const e = Ss(c);
              if (e !== y.constructor) {
                if (!k) throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);
                y = this._set(w)
              }
            }
            const j = y.constructor;
            let S = Ha(c),
              C = !1;
            if (!S) {
              const e = b || !ul(this) && h;
              (f || e) && (C = Ui(Hs(_), w), S = !C), (Ui(s.immediate, k) || k) && Ui(m.decay, g) && Ui(m.velocity, v) || (S = !0)
            }
            if (C && cl(this) && (s.changed && !b ? S = !0 : S || this._stop(l)), !p && ((S || Ha(l)) && (s.values = y.getPayload(), s.toValues = Ha(c) ? null : j == _s ? [1] : Xi(w)), s.immediate != k && (s.immediate = k, k || b || this._set(l)), S)) {
              const {
                onRest: e
              } = s;
              Gi(_l, (e => wl(this, t, e)));
              const r = Js(this, ml(this, l));
              Yi(this._pendingCalls, r), this._pendingCalls.add(n), s.changed && Ei.batchedUpdates((() => {
                s.changed = !b, e?.(r, this), b ? Ts(a.onRest, r) : s.onStart?.(r, this)
              }))
            }
            b && this._set(_), p ? n(tl(t.to, t, this._state, this)) : S ? this._start() : cl(this) && !f ? this._pendingCalls.add(n) : n(Qs(_))
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
            const n = za(e);
            if (!Vi.und(n)) {
              const e = ms(this);
              if (!e || !Ui(n, e.getValue())) {
                const r = Ss(n);
                e && e.constructor == r ? e.setValue(n) : gs(this, r.create(n)), e && Ei.batchedUpdates((() => {
                  this._onChange(n, t)
                }))
              }
            }
            return ms(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, El(this, "onStart", Js(this, ml(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Ts(this.animation.onChange, e, this)), Ts(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            ms(this).reset(za(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), cl(this) || (hl(this, !0), dl(this) || this._resume())
          }
          _resume() {
            zi.skipAnimation ? this.finish() : aa.start(this)
          }
          _stop(e, t) {
            if (cl(this)) {
              hl(this, !1);
              const n = this.animation;
              Gi(n.values, (e => {
                e.done = !0
              })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Va(this, {
                type: "idle",
                parent: this
              });
              const r = t ? el(this.get()) : Js(this.get(), ml(this, e ?? n.to));
              Yi(this._pendingCalls, r), n.changed && (n.changed = !1, El(this, "onRest", r, this))
            }
          }
        };

      function ml(e, t) {
        const n = Hs(t);
        return Ui(Hs(e.get()), n)
      }

      function gl(e, t = e.loop, n = e.to) {
        const r = Ts(t);
        if (r) {
          const o = !0 !== r && Bs(r),
            i = (o || e).reverse,
            a = !o || o.reset;
          return vl({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Fs(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function vl(e) {
        const {
          to: t,
          from: n
        } = e = Bs(e), r = new Set;
        return Vi.obj(t) && bl(t, r), Vi.obj(n) && bl(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function yl(e) {
        const t = vl(e);
        return Vi.und(t.default) && (t.default = Is(t)), t
      }

      function bl(e, t) {
        qi(e, ((e, n) => null != e && t.add(n)))
      }
      var _l = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function wl(e, t, n) {
        e.animation[n] = t[n] !== Ns(t, n) ? Ls(t[n], e.key) : void 0
      }

      function El(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var kl = ["onStart", "onChange", "onRest"],
        jl = 1,
        Sl = class {
          constructor(e, t) {
            this.id = jl++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
            return this.each(((t, n) => e[n] = t.get())), e
          }
          set(e) {
            for (const t in e) {
              const n = e[t];
              Vi.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(vl(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Xi(e).map(vl) : this.queue = [], this._flush ? this._flush(this, t) : (Ll(this, t), Cl(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              Gi(Xi(t), (t => n[t].stop(!!e)))
            } else nl(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
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
              onRest: n
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, Wi(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !r && this._started,
              a = o || i && n.size ? this.get() : null;
            o && t.size && Wi(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, Wi(n, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Ei.onFrame(this._onFrame)
          }
        };

      function Cl(e, t) {
        return Promise.all(t.map((t => xl(e, t)))).then((t => Zs(e, t)))
      }
      async function xl(e, t, n) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, u = Vi.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const c = Vi.arr(o) || Vi.fun(o) ? o : void 0;
        c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : Gi(kl, (n => {
          const r = t[n];
          if (Vi.fun(r)) {
            const o = e._events[n];
            t[n] = ({
              finished: e,
              cancelled: t
            }) => {
              const n = o.get(r);
              n ? (e || (n.finished = !1), t && (n.cancelled = !0)) : o.set(r, {
                value: null,
                finished: e || !1,
                cancelled: t || !1
              })
            }, u && (u[n] = t[n])
          }
        }));
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, Yi(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const h = (r || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
          f = !0 === t.cancel || !0 === Ns(t, "cancel");
        (c || f && d.asyncId) && h.push(Ys(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Fi,
            resume: Fi,
            start(t, n) {
              f ? (nl(d, e._lastAsyncId), n(el(e))) : (t.onRest = s, n(tl(c, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = Zs(e, await Promise.all(h));
        if (a && p.finished && (!n || !p.noop)) {
          const n = gl(t, a, o);
          if (n) return Ll(e, [n]), xl(e, n, !0)
        }
        return l && Ei.batchedUpdates((() => l(p, e, e.item))), p
      }

      function Pl(e, t) {
        const n = {
          ...e.springs
        };
        return t && Gi(Xi(t), (e => {
          Vi.und(e.keys) && (e = vl(e)), Vi.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), Al(n, e, (e => Tl(e)))
        })), Ol(e, n), n
      }

      function Ol(e, t) {
        qi(t, ((t, n) => {
          e.springs[n] || (e.springs[n] = t, qa(t, e))
        }))
      }

      function Tl(e, t) {
        const n = new pl;
        return n.key = e, t && qa(n, t), n
      }

      function Al(e, t, n) {
        t.keys && Gi(t.keys, (r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        }))
      }

      function Ll(e, t) {
        Gi(t, (t => {
          Al(e.springs, t, (t => Tl(t, e)))
        }))
      }
      var Nl, Rl, Il = ({
          children: e,
          ...t
        }) => {
          const n = (0, h.useContext)(Ml),
            r = t.pause || !!n.pause,
            o = t.immediate || !!n.immediate;
          t = function(e, t) {
            const [n] = (0, h.useState)((() => ({
              inputs: t,
              result: e()
            }))), r = (0, h.useRef)(), o = r.current;
            let i = o;
            if (i) {
              const n = Boolean(t && i.inputs && function(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++)
                  if (e[n] !== t[n]) return !1;
                return !0
              }(t, i.inputs));
              n || (i = {
                inputs: t,
                result: e()
              })
            } else i = n;
            return (0, h.useEffect)((() => {
              r.current = i, o == n && (n.inputs = n.result = void 0)
            }), [i]), i.result
          }((() => ({
            pause: r,
            immediate: o
          })), [r, o]);
          const {
            Provider: i
          } = Ml;
          return h.createElement(i, {
            value: t
          }, e)
        },
        Ml = (Nl = Il, Rl = {}, Object.assign(Nl, h.createContext(Rl)), Nl.Provider._context = Nl, Nl.Consumer._context = Nl, Nl);
      Il.Provider = Ml.Provider, Il.Consumer = Ml.Consumer;
      var Dl = () => {
        const e = [],
          t = function(t) {
            ss(`${os}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const r = [];
            return Gi(e, ((e, o) => {
              if (Vi.und(t)) r.push(e.start());
              else {
                const i = n(t, e, o);
                i && r.push(e.start(i))
              }
            })), r
          };
        t.current = e, t.add = function(t) {
          e.includes(t) || e.push(t)
        }, t.delete = function(t) {
          const n = e.indexOf(t);
          ~n && e.splice(n, 1)
        }, t.pause = function() {
          return Gi(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return Gi(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          Gi(e, ((e, n) => {
            const r = Vi.fun(t) ? t(n, e) : t;
            r && e.set(r)
          }))
        }, t.start = function(t) {
          const n = [];
          return Gi(e, ((e, r) => {
            if (Vi.und(t)) n.push(e.start());
            else {
              const o = this._getProps(t, e, r);
              o && n.push(e.start(o))
            }
          })), n
        }, t.stop = function() {
          return Gi(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return Gi(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
        };
        const n = function(e, t, n) {
          return Vi.fun(e) ? e(n, t) : e
        };
        return t._getProps = n, t
      };

      function Bl(e, t) {
        const n = Vi.fun(e),
          [
            [r], o
          ] = function(e, t, n) {
            const r = Vi.fun(t) && t;
            r && !n && (n = []);
            const o = (0, h.useMemo)((() => r || 3 == arguments.length ? Dl() : void 0), []),
              i = (0, h.useRef)(0),
              a = cs(),
              s = (0, h.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const n = Pl(e, t);
                  return i.current > 0 && !s.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? Cl(e, t) : new Promise((r => {
                    Ol(e, n), s.queue.push((() => {
                      r(Cl(e, t))
                    })), a()
                  }))
                }
              })), []),
              l = (0, h.useRef)([...s.ctrls]),
              u = [],
              c = fs(e) || 0;

            function d(e, n) {
              for (let o = e; o < n; o++) {
                const e = l.current[o] || (l.current[o] = new Sl(null, s.flush)),
                  n = r ? r(o, e) : t[o];
                n && (u[o] = yl(n))
              }
            }(0, h.useMemo)((() => {
              Gi(l.current.slice(e, c), (e => {
                Vs(e, o), e.stop(!0)
              })), l.current.length = e, d(c, e)
            }), [e]), (0, h.useMemo)((() => {
              d(0, Math.min(c, e))
            }), n);
            const f = l.current.map(((e, t) => Pl(e, u[t]))),
              p = (0, h.useContext)(Il),
              m = fs(p),
              g = p !== m && zs(p);
            us((() => {
              i.current++, s.ctrls = l.current;
              const {
                queue: e
              } = s;
              e.length && (s.queue = [], Gi(e, (e => e()))), Gi(l.current, ((e, t) => {
                o?.add(e), g && e.start({
                  default: p
                });
                const n = u[t];
                n && (Us(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
              }))
            })), ds((() => () => {
              Gi(s.ctrls, (e => e.stop(!0)))
            }));
            const v = f.map((e => ({
              ...e
            })));
            return o ? [v, o] : v
          }(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [r, o] : r
      }
      var Hl = () => Dl(),
        zl = () => (0, h.useState)(Hl)[0];
      var Fl = 1,
        Vl = class extends sl {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Oa(...t);
            const n = this._get(),
              r = Ss(n);
            gs(this, r.create(n))
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
            })), zi.skipAnimation ? (Ei.batchedUpdates((() => this.advance())), ql(this)) : aa.start(this))
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
        createStringInterpolator: rs,
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
      $l = Object.keys($l).reduce(((e, t) => (Yl.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), $l);
      var Zl = /^(matrix|translate|scale|rotate|skew)/,
        Ql = /^(translate)/,
        Jl = /^(rotate|skew)/,
        eu = (e, t) => Vi.num(e) && 0 !== e ? e + t : e,
        tu = (e, t) => Vi.arr(e) ? e.every((e => tu(e, t))) : Vi.num(e) ? e === t : parseFloat(e) === t,
        nu = class extends Es {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((e => [`translate3d(${e.map((e=>eu(e,"px"))).join(",")})`, tu(e, 0)]))), qi(r, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (Zl.test(t)) {
                if (delete r[t], Vi.und(e)) return;
                const n = Ql.test(t) ? "px" : Jl.test(t) ? "deg" : "";
                o.push(Xi(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${eu(o,n)})`, tu(o, 0)] : e => [`${t}(${e.map((e=>eu(e,n))).join(",")})`, tu(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new ru(o, i)), super(r)
          }
        },
        ru = class extends Ua {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Gi(this.inputs, ((n, r) => {
              const o = za(n[0]),
                [i, a] = this.transforms[r](Vi.arr(o) ? o : n.map(za));
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
        createStringInterpolator: rs,
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
      var ou = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: n = e => new Es(e),
          getComponentProps: r = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            i = e => {
              const t = Os(e) || "Anonymous";
              return (e = Vi.str(e) ? i[e] || (i[e] = Cs(e, o)) : e[Ps] || (e[Ps] = Cs(e, o))).displayName = `Animated(${t})`, e
            };
          return qi(e, ((t, n) => {
            Vi.arr(e) && (n = Os(t)), i[n] = i(t)
          })), {
            animated: i
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: r,
                style: o,
                children: i,
                scrollTop: a,
                scrollLeft: s,
                viewBox: l,
                ...u
              } = t,
              c = Object.values(u),
              d = Object.keys(u).map((t => n || e.hasAttribute(t) ? t : Kl[t] || (Kl[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const n = Wl(t, o[t]);
                Xl.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } d.forEach(((t, n) => {
              e.setAttribute(t, c[n])
            })), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new nu(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        iu = ou.animated;
      const au = (e, t, n) => {
          if (e > n) {
            const t = e - n;
            return n + 2 * (t > 0 ? Math.sqrt(t) : -Math.sqrt(-t))
          }
          if (e < t) {
            const n = e - t;
            return t + 2 * (n > 0 ? Math.sqrt(n) : -Math.sqrt(-n))
          }
          return e
        },
        su = e => {
          const t = (e, t, n) => {
            n(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, n) => {
            const r = n.getBoundingClientRect();
            return e ? (t(e.top, r.top, ((e, t) => e < t)), t(e.bottom, r.bottom, ((e, t) => e > t)), t(e.left, r.left, ((e, t) => e < t)), t(e.right, r.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), r) : r
          }), null)
        },
        lu = ([e, t], n) => {
          const {
            a: r
          } = new DOMMatrix(n.style.transform), o = su(n), i = o.width / r, a = 100 * cu(e, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / i, s = o.height / r;
          return {
            x: a,
            y: 100 * cu(t, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / s
          }
        },
        uu = (e, t, n, r) => {
          let o = n[0],
            i = n[1];
          const {
            a
          } = new DOMMatrix(e.style.transform), s = r / 100, l = su(e), u = t.getBoundingClientRect(), c = l.width / a / 2, d = u.width / 2, h = c * s > d ? c * s - d : 0, f = l.height / a / 2, p = u.height / 2, m = f * s > p ? f * s - p : 0, g = -o > h, v = o > h, y = i > m, b = -i > m;
          return g && !v ? o = -h : v && !g && (o = h), y && !b ? i = m : b && !y && (i = -m), {
            xy: [o, i],
            horizontalOffset: h,
            verticalOffset: m
          }
        },
        cu = (e, t, n) => Math.min(Math.max(e, t), n),
        du = {
          mass: .1,
          tension: 800,
          friction: 20,
          clamp: !1,
          precision: .001,
          velocity: 0
        },
        hu = Gs,
        fu = {
          scrollFactor: 2e3,
          dragFactor: 1.3,
          closePc: 33
        },
        pu = ({
          children: e,
          containerRef: t,
          contentRef: n,
          minZoomLevel: r,
          maxZoomLevel: o,
          eventHandlers: i,
          enabled: a,
          animation: s
        }) => {
          (({
            containerRef: e,
            contentRef: t
          }) => {
            const n = e => {
              e.preventDefault(), e.nativeEvent?.preventDefault()
            };
            (0, h.useEffect)((() => (document.addEventListener("gesturestart", n), document.addEventListener("gesturechange", n), t.current?.addEventListener("dragstart", n), t.current?.addEventListener("click", n), e.current?.addEventListener("dragstart", n), e.current?.addEventListener("click", n), () => {
              document.removeEventListener("gesturestart", n), document.removeEventListener("gesturechange", n), t.current?.removeEventListener("dragstart", n), t.current?.removeEventListener("click", n), e.current?.removeEventListener("dragstart", n), e.current?.removeEventListener("click", n)
            })), [e.current, t.current])
          })({
            containerRef: t,
            contentRef: n
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
                min: r / 100,
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
          return (0, c.jsx)("div", {
            ref: t,
            className: "foundry_nk7jgu_148vt480",
            style: l,
            children: (0, c.jsx)(iu.div, {
              ref: n,
              className: "foundry_nk7jgu_148vt481",
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
      var mu = n(23514);

      function gu(e, t) {
        var n = t && t.cache ? t.cache : Pu,
          r = t && t.serializer ? t.serializer : wu;
        return (t && t.strategy ? t.strategy : _u)(e, {
          cache: n,
          serializer: r
        })
      }

      function vu(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function yu(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function bu(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function _u(e, t) {
        return bu(e, this, 1 === e.length ? vu : yu, t.cache.create(), t.serializer)
      }
      var wu = function() {
        return JSON.stringify(arguments)
      };

      function Eu() {
        this.cache = Object.create(null)
      }
      Eu.prototype.get = function(e) {
        return this.cache[e]
      }, Eu.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var ku, ju, Su, Cu, xu, Pu = {
          create: function() {
            return new Eu
          }
        },
        Ou = {
          variadic: function(e, t) {
            return bu(e, this, yu, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return bu(e, this, vu, t.cache.create(), t.serializer)
          }
        };

      function Tu(e) {
        return e.type === ju.literal
      }

      function Au(e) {
        return e.type === ju.argument
      }

      function Lu(e) {
        return e.type === ju.number
      }

      function Nu(e) {
        return e.type === ju.date
      }

      function Ru(e) {
        return e.type === ju.time
      }

      function Iu(e) {
        return e.type === ju.select
      }

      function Mu(e) {
        return e.type === ju.plural
      }

      function Du(e) {
        return e.type === ju.pound
      }

      function Bu(e) {
        return e.type === ju.tag
      }

      function Hu(e) {
        return !(!e || "object" != typeof e || e.type !== Su.number)
      }

      function zu(e) {
        return !(!e || "object" != typeof e || e.type !== Su.dateTime)
      }(xu = ku || (ku = {}))[xu.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", xu[xu.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", xu[xu.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", xu[xu.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", xu[xu.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", xu[xu.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", xu[xu.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", xu[xu.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", xu[xu.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", xu[xu.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", xu[xu.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", xu[xu.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", xu[xu.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", xu[xu.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", xu[xu.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", xu[xu.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", xu[xu.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", xu[xu.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", xu[xu.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", xu[xu.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", xu[xu.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", xu[xu.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", xu[xu.INVALID_TAG = 23] = "INVALID_TAG", xu[xu.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", xu[xu.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", xu[xu.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", (Cu = ju || (ju = {}))[Cu.literal = 0] = "literal", Cu[Cu.argument = 1] = "argument", Cu[Cu.number = 2] = "number", Cu[Cu.date = 3] = "date", Cu[Cu.time = 4] = "time", Cu[Cu.select = 5] = "select", Cu[Cu.plural = 6] = "plural", Cu[Cu.pound = 7] = "pound", Cu[Cu.tag = 8] = "tag",
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(Su || (Su = {}));
      var Fu = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Vu = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Uu(e) {
        var t = {};
        return e.replace(Vu, (function(e) {
          var n = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === n ? "2-digit" : "numeric";
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
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][n - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "e":
              if (n < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "c":
              if (n < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][n - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][n - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = n < 4 ? "short" : "long";
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
      var Gu = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function qu(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], n = 0, r = e.split(Gu).filter((function(e) {
            return e.length > 0
          })); n < r.length; n++) {
          var o = r[n].split("/");
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
      var Xu = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Wu = /^(@+)?(\+|#+)?[rs]?$/g,
        Ku = /(\*)(0+)|(#+)(0+)|(0+)/g,
        $u = /^(0+)$/;

      function Yu(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Wu, (function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        })), t
      }

      function Zu(e) {
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

      function Qu(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !$u.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function Ju(e) {
        return Zu(e) || {}
      }

      function ec(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
          var o = r[n];
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
              t = (0, mu.__assign)((0, mu.__assign)((0, mu.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, mu.__assign)((0, mu.__assign)({}, e), Ju(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, mu.__assign)((0, mu.__assign)((0, mu.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, mu.__assign)((0, mu.__assign)({}, e), Ju(t))
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
              o.options[0].replace(Ku, (function(e, n, r, o, i, a) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if ($u.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Xu.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Xu, (function(e, n, r, o, i, a) {
              return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, mu.__assign)((0, mu.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, mu.__assign)((0, mu.__assign)({}, t), Yu(i)))
          } else if (Wu.test(o.stem)) t = (0, mu.__assign)((0, mu.__assign)({}, t), Yu(o.stem));
          else {
            var a = Zu(o.stem);
            a && (t = (0, mu.__assign)((0, mu.__assign)({}, t), a));
            var s = Qu(o.stem);
            s && (t = (0, mu.__assign)((0, mu.__assign)({}, t), s))
          }
        }
        return t
      }
      var tc, nc = {
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

      function rc(e) {
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
        var n, r = e.language;
        return "root" !== r && (n = e.maximize().region), (nc[n || ""] || nc[r || ""] || nc["".concat(r, "-001")] || nc["001"])[0]
      }
      var oc = new RegExp("^".concat(Fu.source, "*")),
        ic = new RegExp("".concat(Fu.source, "*$"));

      function ac(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var sc = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        lc = !!String.fromCodePoint,
        uc = !!Object.fromEntries,
        cc = !!String.prototype.codePointAt,
        dc = !!String.prototype.trimStart,
        hc = !!String.prototype.trimEnd,
        fc = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        pc = !0;
      try {
        pc = "a" === (null === (tc = Ec("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === tc ? void 0 : tc[0])
      } catch (e) {
        pc = !1
      }
      var mc, gc = sc ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        vc = lc ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        yc = uc ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        bc = cc ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        _c = dc ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(oc, "")
        },
        wc = hc ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(ic, "")
        };

      function Ec(e, t) {
        return new RegExp(e, t)
      }
      if (pc) {
        var kc = Ec("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        mc = function(e, t) {
          var n;
          return kc.lastIndex = t, null !== (n = kc.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else mc = function(e, t) {
        for (var n = [];;) {
          var r = bc(e, t);
          if (void 0 === r || Pc(r) || Oc(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return vc.apply(void 0, n)
      };
      var jc, Sc, Cc = function() {
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
        }, e.prototype.parseMessage = function(e, t, n) {
          for (var r = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((i = this.parseArgument(e, n)).err) return i;
              r.push(i.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (n) break;
                  return this.error(ku.UNMATCHED_CLOSING_TAG, ac(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && xc(this.peek() || 0)) {
                  if ((i = this.parseTag(e, t)).err) return i;
                  r.push(i.val)
                } else {
                  var i;
                  if ((i = this.parseLiteral(e, t)).err) return i;
                  r.push(i.val)
                }
              } else {
                var a = this.clonePosition();
                this.bump(), r.push({
                  type: ju.pound,
                  location: ac(a, this.clonePosition())
                })
              }
            }
          }
          return {
            val: r,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var n = this.clonePosition();
          this.bump();
          var r = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: ju.literal,
              value: "<".concat(r, "/>"),
              location: ac(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !xc(this.char())) return this.error(ku.INVALID_TAG, ac(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(ku.UNMATCHED_CLOSING_TAG, ac(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: ju.tag,
                  value: r,
                  children: i,
                  location: ac(n, this.clonePosition())
                },
                err: null
              } : this.error(ku.INVALID_TAG, ac(a, this.clonePosition())))
            }
            return this.error(ku.UNCLOSED_TAG, ac(n, this.clonePosition()))
          }
          return this.error(ku.INVALID_TAG, ac(n, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, t = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(t, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var n = this.clonePosition(), r = "";;) {
            var o = this.tryParseQuote(t);
            if (o) r += o;
            else {
              var i = this.tryParseUnquoted(e, t);
              if (i) r += i;
              else {
                var a = this.tryParseLeftAngleBracket();
                if (!a) break;
                r += a
              }
            }
          }
          var s = ac(n, this.clonePosition());
          return {
            val: {
              type: ju.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (xc(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
            var n = this.char();
            if (39 === n) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(n);
            this.bump()
          }
          return vc.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), vc(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(ku.EXPECT_ARGUMENT_CLOSING_BRACE, ac(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(ku.EMPTY_ARGUMENT, ac(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(ku.MALFORMED_ARGUMENT, ac(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(ku.EXPECT_ARGUMENT_CLOSING_BRACE, ac(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: ju.argument,
                  value: r,
                  location: ac(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ku.EXPECT_ARGUMENT_CLOSING_BRACE, ac(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(ku.MALFORMED_ARGUMENT, ac(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = mc(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: ac(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(ku.EXPECT_ARGUMENT_TYPE, ac(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var u = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (f = wc(v.val)).length) return this.error(ku.EXPECT_ARGUMENT_STYLE, ac(this.clonePosition(), this.clonePosition()));
                l = {
                  style: f,
                  styleLocation: ac(u, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var c = ac(r, this.clonePosition());
              if (l && gc(null == l ? void 0 : l.style, "::", 0)) {
                var d = _c(l.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? v : {
                  val: {
                    type: ju.number,
                    value: n,
                    location: c,
                    style: v.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(ku.EXPECT_DATE_TIME_SKELETON, c);
                var h = d;
                this.locale && (h = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = rc(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var f = {
                  type: Su.dateTime,
                  pattern: h,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Uu(h) : {}
                };
                return {
                  val: {
                    type: "date" === a ? ju.date : ju.time,
                    value: n,
                    location: c,
                    style: f
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? ju.number : "date" === a ? ju.date : ju.time,
                  value: n,
                  location: c,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(ku.EXPECT_SELECT_ARGUMENT_OPTIONS, ac(p, (0, mu.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                g = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(ku.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ac(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(ku.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ku.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), g = v.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var _ = ac(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: ju.select,
                  value: n,
                  options: yc(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: ju.plural,
                  value: n,
                  options: yc(b.val),
                  offset: g,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(ku.INVALID_ARGUMENT_TYPE, ac(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(ku.EXPECT_ARGUMENT_CLOSING_BRACE, ac(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(ku.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ac(n, this.clonePosition()));
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
          var n = [];
          try {
            n = qu(e)
          } catch (e) {
            return this.error(ku.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Su.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? ec(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, u = r.location;;) {
            if (0 === l.length) {
              var c = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(ku.EXPECT_PLURAL_ARGUMENT_SELECTOR, ku.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              u = ac(c, this.clonePosition()), l = this.message.slice(c.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? ku.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ku.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
            "other" === l && (i = !0), this.bumpSpace();
            var h = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? ku.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ku.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ac(this.clonePosition(), this.clonePosition()));
            var f = this.parseMessage(e + 1, t, n);
            if (f.err) return f;
            var p = this.tryParseArgumentClose(h);
            if (p.err) return p;
            a.push([l, {
              value: f.val,
              location: ac(h, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, u = o.location
          }
          return 0 === a.length ? this.error("select" === t ? ku.EXPECT_SELECT_ARGUMENT_SELECTOR : ku.EXPECT_PLURAL_ARGUMENT_SELECTOR, ac(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(ku.MISSING_OTHER_CLAUSE, ac(this.clonePosition(), this.clonePosition())) : {
            val: a,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var n = 1,
            r = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (n = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var a = this.char();
            if (!(a >= 48 && a <= 57)) break;
            o = !0, i = 10 * i + (a - 48), this.bump()
          }
          var s = ac(r, this.clonePosition());
          return o ? fc(i *= n) ? {
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
          var t = bc(this.message, e);
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
          if (gc(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            n = this.message.indexOf(e, t);
          return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && Pc(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }, e
      }();

      function xc(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Pc(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Oc(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Tc(e) {
        e.forEach((function(e) {
          if (delete e.location, Iu(e) || Mu(e))
            for (var t in e.options) delete e.options[t].location, Tc(e.options[t].value);
          else Lu(e) && Hu(e.style) || (Nu(e) || Ru(e)) && zu(e.style) ? delete e.style.location : Bu(e) && Tc(e.children)
        }))
      }

      function Ac(e, t) {
        void 0 === t && (t = {}), t = (0, mu.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var n = new Cc(e, t).parse();
        if (n.err) {
          var r = SyntaxError(ku[n.err.kind]);
          throw r.location = n.err.location, r.originalMessage = n.err.message, r
        }
        return (null == t ? void 0 : t.captureLocation) || Tc(n.val), n.val
      }(Sc = jc || (jc = {})).MISSING_VALUE = "MISSING_VALUE", Sc.INVALID_VALUE = "INVALID_VALUE", Sc.MISSING_INTL_API = "MISSING_INTL_API";
      var Lc, Nc = function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return o.code = n, o.originalMessage = r, o
          }
          return (0, mu.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        Rc = function(e) {
          function t(t, n, r, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(r).join('", "'), '"'), jc.INVALID_VALUE, o) || this
          }
          return (0, mu.__extends)(t, e), t
        }(Nc),
        Ic = function(e) {
          function t(t, n, r) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), jc.INVALID_VALUE, r) || this
          }
          return (0, mu.__extends)(t, e), t
        }(Nc),
        Mc = function(e) {
          function t(t, n) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), jc.MISSING_VALUE, n) || this
          }
          return (0, mu.__extends)(t, e), t
        }(Nc);

      function Dc(e) {
        return "function" == typeof e
      }

      function Bc(e, t, n, r, o, i, a) {
        if (1 === e.length && Tu(e[0])) return [{
          type: Lc.literal,
          value: e[0].value
        }];
        for (var s = [], l = 0, u = e; l < u.length; l++) {
          var c = u[l];
          if (Tu(c)) s.push({
            type: Lc.literal,
            value: c.value
          });
          else if (Du(c)) "number" == typeof i && s.push({
            type: Lc.literal,
            value: n.getNumberFormat(t).format(i)
          });
          else {
            var d = c.value;
            if (!o || !(d in o)) throw new Mc(d, a);
            var h = o[d];
            if (Au(c)) h && "string" != typeof h && "number" != typeof h || (h = "string" == typeof h || "number" == typeof h ? String(h) : ""), s.push({
              type: "string" == typeof h ? Lc.literal : Lc.object,
              value: h
            });
            else if (Nu(c)) {
              var f = "string" == typeof c.style ? r.date[c.style] : zu(c.style) ? c.style.parsedOptions : void 0;
              s.push({
                type: Lc.literal,
                value: n.getDateTimeFormat(t, f).format(h)
              })
            } else if (Ru(c)) f = "string" == typeof c.style ? r.time[c.style] : zu(c.style) ? c.style.parsedOptions : r.time.medium, s.push({
              type: Lc.literal,
              value: n.getDateTimeFormat(t, f).format(h)
            });
            else if (Lu(c))(f = "string" == typeof c.style ? r.number[c.style] : Hu(c.style) ? c.style.parsedOptions : void 0) && f.scale && (h *= f.scale || 1), s.push({
              type: Lc.literal,
              value: n.getNumberFormat(t, f).format(h)
            });
            else {
              if (Bu(c)) {
                var p = c.children,
                  m = c.value,
                  g = o[m];
                if (!Dc(g)) throw new Ic(m, "function", a);
                var v = g(Bc(p, t, n, r, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(v) || (v = [v]), s.push.apply(s, v.map((function(e) {
                  return {
                    type: "string" == typeof e ? Lc.literal : Lc.object,
                    value: e
                  }
                })))
              }
              if (Iu(c)) {
                if (!(y = c.options[h] || c.options.other)) throw new Rc(c.value, h, Object.keys(c.options), a);
                s.push.apply(s, Bc(y.value, t, n, r, o))
              } else if (Mu(c)) {
                var y;
                if (!(y = c.options["=".concat(h)])) {
                  if (!Intl.PluralRules) throw new Nc('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', jc.MISSING_INTL_API, a);
                  var b = n.getPluralRules(t, {
                    type: c.pluralType
                  }).select(h - (c.offset || 0));
                  y = c.options[b] || c.options.other
                }
                if (!y) throw new Rc(c.value, h, Object.keys(c.options), a);
                s.push.apply(s, Bc(y.value, t, n, r, o, h - (c.offset || 0)))
              }
            }
          }
        }
        return (_ = s).length < 2 ? _ : _.reduce((function(e, t) {
          var n = e[e.length - 1];
          return n && n.type === Lc.literal && t.type === Lc.literal ? n.value += t.value : e.push(t), e
        }), []);
        var _
      }

      function Hc(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, n) {
                e[t] = n
              }
            }
          }
        }
      }! function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(Lc || (Lc = {}));
      var zc, Fc = function() {
        function e(t, n, r, o) {
          void 0 === n && (n = e.defaultLocale);
          var i, a, s = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = s.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var n = t.reduce((function(e, t) {
                return e.length && t.type === Lc.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return n.length <= 1 ? n[0] || "" : n
            }, this.formatToParts = function(e) {
              return Bc(s.ast, s.locales, s.formatters, s.formats, e, void 0, s.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = s.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(s.locales)[0]
              }
            }, this.getAst = function() {
              return s.ast
            }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var l = o || {},
              u = (l.formatters, (0, mu.__rest)(l, ["formatters"]));
            this.ast = e.__parse(t, (0, mu.__assign)((0, mu.__assign)({}, u), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (i = e.formats, (a = r) ? Object.keys(i).reduce((function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, mu.__assign)((0, mu.__assign)((0, mu.__assign)({}, e || {}), t || {}), Object.keys(e).reduce((function(n, r) {
                return n[r] = (0, mu.__assign)((0, mu.__assign)({}, e[r]), t[r] || {}), n
              }), {})) : e
            }(i[t], a[t]), e
          }), (0, mu.__assign)({}, i)) : i), this.formatters = o && o.formatters || function(e) {
            return void 0 === e && (e = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }), {
              getNumberFormat: gu((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, mu.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Hc(e.number),
                strategy: Ou.variadic
              }),
              getDateTimeFormat: gu((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, mu.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Hc(e.dateTime),
                strategy: Ou.variadic
              }),
              getPluralRules: gu((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.PluralRules).bind.apply(e, (0, mu.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Hc(e.pluralRules),
                strategy: Ou.variadic
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
        }, e.__parse = Ac, e.formats = {
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
      }(zc || (zc = {}));
      var Vc = function(e) {
          function t(n, r, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = n, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, mu.__extends)(t, e), t
        }(Error),
        Uc = function(e) {
          function t(t, n) {
            return e.call(this, zc.UNSUPPORTED_FORMATTER, t, n) || this
          }
          return (0, mu.__extends)(t, e), t
        }(Vc),
        Gc = function(e) {
          function t(t, n) {
            return e.call(this, zc.INVALID_CONFIG, t, n) || this
          }
          return (0, mu.__extends)(t, e), t
        }(Vc),
        qc = function(e) {
          function t(t, n) {
            return e.call(this, zc.MISSING_DATA, t, n) || this
          }
          return (0, mu.__extends)(t, e), t
        }(Vc),
        Xc = function(e) {
          function t(t, n, r) {
            var o = e.call(this, zc.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(n, "\n"), r) || this;
            return o.locale = n, o
          }
          return (0, mu.__extends)(t, e), t
        }(Vc),
        Wc = function(e) {
          function t(t, n, r, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == r ? void 0 : r.id, "\nDefault Message: ").concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ").concat(null == r ? void 0 : r.description, "\n"), n, o) || this;
            return i.descriptor = r, i.locale = n, i
          }
          return (0, mu.__extends)(t, e), t
        }(Xc),
        Kc = function(e) {
          function t(t, n) {
            var r = e.call(this, zc.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(n, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return r.descriptor = t, r
          }
          return (0, mu.__extends)(t, e), t
        }(Vc);

      function $c(e, t, n) {
        return void 0 === n && (n = {}), t.reduce((function(t, r) {
          return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t
        }), {})
      }
      var Yc = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function Zc(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, n) {
                e[t] = n
              }
            }
          }
        }
      }

      function Qc(e, t, n, r) {
        var o, i = e && e[t];
        if (i && (o = i[n]), o) return o;
        r(new Uc("No ".concat(t, " format named: ").concat(n)))
      }

      function Jc(e, t) {
        var n = t && t.cache ? t.cache : ad,
          r = t && t.serializer ? t.serializer : od;
        return (t && t.strategy ? t.strategy : rd)(e, {
          cache: n,
          serializer: r
        })
      }

      function ed(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function td(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function nd(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function rd(e, t) {
        return nd(e, this, 1 === e.length ? ed : td, t.cache.create(), t.serializer)
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
            return nd(e, this, td, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return nd(e, this, ed, t.cache.create(), t.serializer)
          }
        };

      function ld(e) {
        ! function(e, t, n) {
          if (void 0 === n && (n = Error), !e) throw new n("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      Jc((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, mu.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: sd.variadic
      }), Jc((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, mu.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: sd.variadic
      }), Jc((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.PluralRules).bind.apply(e, (0, mu.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: sd.variadic
      }), Jc((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.Locale).bind.apply(e, (0, mu.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: sd.variadic
      }), Jc((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.ListFormat).bind.apply(e, (0, mu.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: sd.variadic
      });
      var ud = (0, mu.__assign)((0, mu.__assign)({}, Yc), {
        textComponent: h.Fragment
      });
      n(67332);
      var cd = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? h.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = h.createContext(null)),
        dd = (cd.Consumer, cd.Provider),
        hd = cd;

      function fd(e, t) {
        return Object.keys(e).reduce((function(n, r) {
          return n[r] = (0, mu.__assign)({
            timeZone: t
          }, e[r]), n
        }), {})
      }

      function pd(e, t) {
        return Object.keys((0, mu.__assign)((0, mu.__assign)({}, e), t)).reduce((function(n, r) {
          return n[r] = (0, mu.__assign)((0, mu.__assign)({}, e[r] || {}), t[r] || {}), n
        }), {})
      }

      function md(e, t) {
        if (!t) return e;
        var n = Fc.formats;
        return (0, mu.__assign)((0, mu.__assign)((0, mu.__assign)({}, n), e), {
          date: pd(fd(n.date, t), fd(e.date || {}, t)),
          time: pd(fd(n.time, t), fd(e.time || {}, t))
        })
      }
      gu((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, mu.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Ou.variadic
      }), gu((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, mu.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Ou.variadic
      }), gu((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.PluralRules).bind.apply(e, (0, mu.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Ou.variadic
      }), gu((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.Locale).bind.apply(e, (0, mu.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Ou.variadic
      }), gu((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.ListFormat).bind.apply(e, (0, mu.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Ou.variadic
      });
      var gd = function(e, t, n, r, o) {
          var i = e.locale,
            a = e.formats,
            s = e.messages,
            l = e.defaultLocale,
            u = e.defaultFormats,
            c = e.fallbackOnEmptyString,
            d = e.onError,
            h = e.timeZone,
            f = e.defaultRichTextElements;
          void 0 === n && (n = {
            id: ""
          });
          var p = n.id,
            m = n.defaultMessage;
          ! function(e, t, n) {
            if (void 0 === n && (n = Error), !e) throw new n("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
          }(!!p);
          var g = String(p),
            v = s && Object.prototype.hasOwnProperty.call(s, g) && s[g];
          if (Array.isArray(v) && 1 === v.length && v[0].type === ju.literal) return v[0].value;
          if (!r && v && "string" == typeof v && !f) return v.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (r = (0, mu.__assign)((0, mu.__assign)({}, f), r || {}), a = md(a, h), u = md(u, h), !v) {
            if (!1 === c && "" === v) return v;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new Kc(n, i)), m) try {
              return t.getMessageFormat(m, l, u, o).format(r)
            } catch (e) {
              return d(new Wc('Error formatting default message for: "'.concat(g, '", rendering default message verbatim'), i, n, e)), "string" == typeof m ? m : g
            }
            return g
          }
          try {
            return t.getMessageFormat(v, i, a, (0, mu.__assign)({
              formatters: t
            }, o || {})).format(r)
          } catch (e) {
            d(new Wc('Error formatting message: "'.concat(g, '", using ').concat(m ? "default message" : "id", " as fallback."), i, n, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, u, o).format(r)
          } catch (e) {
            d(new Wc('Error formatting the default message for: "'.concat(g, '", rendering message verbatim'), i, n, e))
          }
          return "string" == typeof v ? v : "string" == typeof m ? m : g
        },
        vd = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function yd(e, t, n) {
        var r = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === n && (n = {});
        var a = n.format,
          s = a && Qc(o, "number", a, i) || {};
        return t(r, $c(n, vd, s))
      }

      function bd(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return yd(e, t, r).format(n)
        } catch (t) {
          e.onError(new Xc("Error formatting number.", e.locale, t))
        }
        return String(n)
      }

      function _d(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return yd(e, t, r).formatToParts(n)
        } catch (t) {
          e.onError(new Xc("Error formatting number.", e.locale, t))
        }
        return []
      }
      var wd = ["numeric", "style"];

      function Ed(e, t, n, r, o) {
        void 0 === o && (o = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new Nc('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', jc.MISSING_INTL_API));
        try {
          return function(e, t, n) {
            var r = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === n && (n = {});
            var a = n.format,
              s = !!a && Qc(o, "relative", a, i) || {};
            return t(r, $c(n, wd, s))
          }(e, t, o).format(n, r)
        } catch (t) {
          e.onError(new Xc("Error formatting relative time.", e.locale, t))
        }
        return String(n)
      }
      var kd = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function jd(e, t, n, r) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === r && (r = {});
        var l = r.format,
          u = (0, mu.__assign)((0, mu.__assign)({}, s && {
            timeZone: s
          }), l && Qc(i, t, l, a)),
          c = $c(r, kd, u);
        return "time" !== t || c.hour || c.minute || c.second || c.timeStyle || c.dateStyle || (c = (0, mu.__assign)((0, mu.__assign)({}, c), {
          hour: "numeric",
          minute: "numeric"
        })), n(o, c)
      }

      function Sd(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return jd(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new Xc("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function Cd(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return jd(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new Xc("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function xd(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = n[2],
          s = void 0 === a ? {} : a,
          l = e.timeZone,
          u = e.locale,
          c = e.onError,
          d = $c(s, kd, l ? {
            timeZone: l
          } : {});
        try {
          return t(u, d).formatRange(o, i)
        } catch (t) {
          c(new Xc("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function Pd(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return jd(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Xc("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Od(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return jd(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Xc("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Td = ["type"];

      function Ad(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.PluralRules || i(new Nc('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', jc.MISSING_INTL_API));
        var a = $c(r, Td);
        try {
          return t(o, a).select(n)
        } catch (e) {
          i(new Xc("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Ld = ["type", "style"],
        Nd = Date.now();

      function Rd(e, t, n, r) {
        void 0 === r && (r = {});
        var o = Id(e, t, n, r).reduce((function(e, t) {
          var n = t.value;
          return "string" != typeof n ? e.push(n) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Id(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.ListFormat || i(new Nc('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', jc.MISSING_INTL_API));
        var a = $c(r, Ld);
        try {
          var s = {},
            l = n.map((function(e, t) {
              if ("object" == typeof e) {
                var n = function(e) {
                  return "".concat(Nd, "_").concat(e, "_").concat(Nd)
                }(t);
                return s[n] = e, n
              }
              return String(e)
            }));
          return t(o, a).formatToParts(l).map((function(e) {
            return "literal" === e.type ? e : (0, mu.__assign)((0, mu.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          }))
        } catch (e) {
          i(new Xc("Error formatting list.", o, e))
        }
        return n
      }
      var Md, Dd, Bd, Hd = ["style", "type", "fallback", "languageDisplay"];

      function zd(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new Nc('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', jc.MISSING_INTL_API));
        var a = $c(r, Hd);
        try {
          return t(o, a).of(n)
        } catch (e) {
          i(new Xc("Error formatting display name.", o, e))
        }
      }

      function Fd(e, t) {
        var n = function(e) {
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
              n = Intl.ListFormat,
              r = Intl.DisplayNames,
              o = gu((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, mu.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Zc(e.dateTime),
                strategy: Ou.variadic
              }),
              i = gu((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, mu.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Zc(e.number),
                strategy: Ou.variadic
              }),
              a = gu((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.PluralRules).bind.apply(e, (0, mu.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Zc(e.pluralRules),
                strategy: Ou.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: gu((function(e, t, n, r) {
                return new Fc(e, t, n, (0, mu.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: a
                  }
                }, r || {}))
              }), {
                cache: Zc(e.message),
                strategy: Ou.variadic
              }),
              getRelativeTimeFormat: gu((function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new(t.bind.apply(t, (0, mu.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Zc(e.relativeTime),
                strategy: Ou.variadic
              }),
              getPluralRules: a,
              getListFormat: gu((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, mu.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Zc(e.list),
                strategy: Ou.variadic
              }),
              getDisplayNames: gu((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, mu.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Zc(e.displayNames),
                strategy: Ou.variadic
              })
            }
          }(t),
          r = (0, mu.__assign)((0, mu.__assign)({}, Yc), e),
          o = r.locale,
          i = r.defaultLocale,
          a = r.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new qc('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new qc('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new Gc('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(r), (0, mu.__assign)((0, mu.__assign)({}, r), {
            formatters: n,
            formatNumber: bd.bind(null, r, n.getNumberFormat),
            formatNumberToParts: _d.bind(null, r, n.getNumberFormat),
            formatRelativeTime: Ed.bind(null, r, n.getRelativeTimeFormat),
            formatDate: Sd.bind(null, r, n.getDateTimeFormat),
            formatDateToParts: Pd.bind(null, r, n.getDateTimeFormat),
            formatTime: Cd.bind(null, r, n.getDateTimeFormat),
            formatDateTimeRange: xd.bind(null, r, n.getDateTimeFormat),
            formatTimeToParts: Od.bind(null, r, n.getDateTimeFormat),
            formatPlural: Ad.bind(null, r, n.getPluralRules),
            formatMessage: gd.bind(null, r, n),
            $t: gd.bind(null, r, n),
            formatList: Rd.bind(null, r, n.getListFormat),
            formatListToParts: Id.bind(null, r, n.getListFormat),
            formatDisplayName: zd.bind(null, r, n.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Md || (Md = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Dd || (Dd = {})),
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
        var n, r = e.language;
        return "root" !== r && (n = e.maximize().region), (Gd[n || ""] || Gd[r || ""] || Gd["".concat(r, "-001")] || Gd["001"])[0]
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
        nh = !0;
      try {
        nh = "a" === (null === (Vd = dh("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Vd ? void 0 : Vd[0])
      } catch (e) {
        nh = !1
      }
      var rh, oh, ih = $d ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        ah = Yd ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        sh = Zd ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        lh = Qd ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        uh = Jd ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Xd, "")
        },
        ch = eh ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Wd, "")
        };

      function dh(e, t) {
        return new RegExp(e, t)
      }
      if (nh) {
        var hh = dh("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        rh = function(e, t) {
          var n;
          return hh.lastIndex = t, null !== (n = hh.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else rh = function(e, t) {
        for (var n = [];;) {
          var r = lh(e, t);
          if (void 0 === r || ph(r) || mh(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return ah.apply(void 0, n)
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
        return e ? Object.keys(e).reduce((function(t, n) {
          var r, o = e[n];
          return t[n] = "function" == typeof o ? (r = o, function(e) {
            return r(h.Children.toArray(e))
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
        }, e.prototype.parseMessage = function(e, t, n) {
          for (var r = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((i = this.parseArgument(e, n)).err) return i;
              r.push(i.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (n) break;
                  return this.error(Md.UNMATCHED_CLOSING_TAG, Kd(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && fh(this.peek() || 0)) {
                  if ((i = this.parseTag(e, t)).err) return i;
                  r.push(i.val)
                } else {
                  var i;
                  if ((i = this.parseLiteral(e, t)).err) return i;
                  r.push(i.val)
                }
              } else {
                var a = this.clonePosition();
                this.bump(), r.push({
                  type: Dd.pound,
                  location: Kd(a, this.clonePosition())
                })
              }
            }
          }
          return {
            val: r,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var n = this.clonePosition();
          this.bump();
          var r = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: Dd.literal,
              value: "<".concat(r, "/>"),
              location: Kd(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !fh(this.char())) return this.error(Md.INVALID_TAG, Kd(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(Md.UNMATCHED_CLOSING_TAG, Kd(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Dd.tag,
                  value: r,
                  children: i,
                  location: Kd(n, this.clonePosition())
                },
                err: null
              } : this.error(Md.INVALID_TAG, Kd(a, this.clonePosition())))
            }
            return this.error(Md.UNCLOSED_TAG, Kd(n, this.clonePosition()))
          }
          return this.error(Md.INVALID_TAG, Kd(n, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, t = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(t, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var n = this.clonePosition(), r = "";;) {
            var o = this.tryParseQuote(t);
            if (o) r += o;
            else {
              var i = this.tryParseUnquoted(e, t);
              if (i) r += i;
              else {
                var a = this.tryParseLeftAngleBracket();
                if (!a) break;
                r += a
              }
            }
          }
          var s = Kd(n, this.clonePosition());
          return {
            val: {
              type: Dd.literal,
              value: r,
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
            var n = this.char();
            if (39 === n) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(n);
            this.bump()
          }
          return ah.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), ah(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Md.EXPECT_ARGUMENT_CLOSING_BRACE, Kd(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Md.EMPTY_ARGUMENT, Kd(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(Md.MALFORMED_ARGUMENT, Kd(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Md.EXPECT_ARGUMENT_CLOSING_BRACE, Kd(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Dd.argument,
                  value: r,
                  location: Kd(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Md.EXPECT_ARGUMENT_CLOSING_BRACE, Kd(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(Md.MALFORMED_ARGUMENT, Kd(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = rh(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: Kd(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Md.EXPECT_ARGUMENT_TYPE, Kd(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var u = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (f = ch(v.val)).length) return this.error(Md.EXPECT_ARGUMENT_STYLE, Kd(this.clonePosition(), this.clonePosition()));
                l = {
                  style: f,
                  styleLocation: Kd(u, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var c = Kd(r, this.clonePosition());
              if (l && ih(null == l ? void 0 : l.style, "::", 0)) {
                var d = uh(l.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? v : {
                  val: {
                    type: Dd.number,
                    value: n,
                    location: c,
                    style: v.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Md.EXPECT_DATE_TIME_SKELETON, c);
                var h = d;
                this.locale && (h = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = qd(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var f = {
                  type: Bd.dateTime,
                  pattern: h,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Uu(h) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Dd.date : Dd.time,
                    value: n,
                    location: c,
                    style: f
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Dd.number : "date" === a ? Dd.date : Dd.time,
                  value: n,
                  location: c,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Md.EXPECT_SELECT_ARGUMENT_OPTIONS, Kd(p, (0, mu.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                g = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Md.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Kd(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(Md.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Md.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), g = v.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var _ = Kd(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Dd.select,
                  value: n,
                  options: sh(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Dd.plural,
                  value: n,
                  options: sh(b.val),
                  offset: g,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Md.INVALID_ARGUMENT_TYPE, Kd(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Md.EXPECT_ARGUMENT_CLOSING_BRACE, Kd(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Md.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Kd(n, this.clonePosition()));
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
          var n = [];
          try {
            n = qu(e)
          } catch (e) {
            return this.error(Md.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Bd.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? ec(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, u = r.location;;) {
            if (0 === l.length) {
              var c = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Md.EXPECT_PLURAL_ARGUMENT_SELECTOR, Md.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              u = Kd(c, this.clonePosition()), l = this.message.slice(c.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Md.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Md.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
            "other" === l && (i = !0), this.bumpSpace();
            var h = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Md.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Md.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Kd(this.clonePosition(), this.clonePosition()));
            var f = this.parseMessage(e + 1, t, n);
            if (f.err) return f;
            var p = this.tryParseArgumentClose(h);
            if (p.err) return p;
            a.push([l, {
              value: f.val,
              location: Kd(h, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, u = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Md.EXPECT_SELECT_ARGUMENT_SELECTOR : Md.EXPECT_PLURAL_ARGUMENT_SELECTOR, Kd(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Md.MISSING_OTHER_CLAUSE, Kd(this.clonePosition(), this.clonePosition())) : {
            val: a,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var n = 1,
            r = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (n = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var a = this.char();
            if (!(a >= 48 && a <= 57)) break;
            o = !0, i = 10 * i + (a - 48), this.bump()
          }
          var s = Kd(r, this.clonePosition());
          return o ? th(i *= n) ? {
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
            n = this.message.indexOf(e, t);
          return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1)
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
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }
      }(),
      function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(oh || (oh = {}));
      var vh = function(e, t, n, r) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var a = gh(r),
            s = gd.apply(void 0, (0, mu.__spreadArray)([e, t, n, a], o, !1));
          return Array.isArray(s) ? h.Children.toArray(s) : s
        },
        yh = function(e, t) {
          var n = e.defaultRichTextElements,
            r = (0, mu.__rest)(e, ["defaultRichTextElements"]),
            o = gh(n),
            i = Fd((0, mu.__assign)((0, mu.__assign)((0, mu.__assign)({}, ud), r), {
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
          return (0, mu.__assign)((0, mu.__assign)({}, i), {
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
        return (0, mu.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var n = t.prevConfig,
            r = t.cache,
            o = bh(e);
          return function(e, t) {
            if (e === t) return !0;
            if (!e || !t) return !1;
            var n = Object.keys(e),
              r = Object.keys(t),
              o = n.length;
            if (r.length !== o) return !1;
            for (var i = 0; i < o; i++) {
              var a = n[i];
              if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1
            }
            return !0
          }(n, o) ? null : {
            intl: yh(o, r),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return ld(this.state.intl), h.createElement(dd, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = ud, t
      }(h.PureComponent);
      const wh = _h;

      function Eh() {
        var e = h.useContext(hd);
        return ld(e), e
      }
      var kh, jh;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(kh || (kh = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(jh || (jh = {}));
      var Sh = function(e) {
        var t = Eh(),
          n = e.value,
          r = e.children,
          o = (0, mu.__rest)(e, ["value", "children"]);
        return r(t.formatNumberToParts(n, o))
      };

      function Ch(e) {
        var t = function(t) {
          var n = Eh(),
            r = t.value,
            o = t.children,
            i = (0, mu.__rest)(t, ["value", "children"]),
            a = "string" == typeof r ? new Date(r || 0) : r;
          return o("formatDate" === e ? n.formatDateToParts(a, i) : n.formatTimeToParts(a, i))
        };
        return t.displayName = jh[e], t
      }

      function xh(e) {
        var t = function(t) {
          var n = Eh(),
            r = t.value,
            o = t.children,
            i = (0, mu.__rest)(t, ["value", "children"]),
            a = n[e](r, i);
          if ("function" == typeof o) return o(a);
          var s = n.textComponent || h.Fragment;
          return h.createElement(s, null, a)
        };
        return t.displayName = kh[e], t
      }
      Sh.displayName = "FormattedNumberParts", Sh.displayName = "FormattedNumberParts", xh("formatDate"), xh("formatTime"), xh("formatNumber"), xh("formatList"), xh("formatDisplayName"), Ch("formatDate"), Ch("formatTime");
      const Ph = ({
          children: e,
          messages: t,
          locale: n,
          fallback: r
        }) => {
          const [o, i] = (0, h.useState)(null);
          return (0, h.useEffect)((() => {
            (t?.[n] ?? t["en-US"]).then((e => {
              i(e.default)
            }))
          }), [n]), o ? (0, c.jsx)(wh, {
            locale: n,
            messages: o,
            children: e
          }) : r ?? null
        },
        Oh = {
          id: "Lightbox_Open_Button_Label"
        },
        Th = {
          id: "Lightbox_Dialog_Title"
        },
        Ah = {
          id: "Lightbox_Dialog_Description"
        },
        Lh = {
          "en-US": n.e(3672).then(n.bind(n, 98910)),
          "de-DE": n.e(823).then(n.bind(n, 823)),
          "es-ES": n.e(7893).then(n.bind(n, 27893)),
          "es-MX": n.e(4684).then(n.bind(n, 54684)),
          "fr-FR": n.e(8557).then(n.bind(n, 38557)),
          "it-IT": n.e(9583).then(n.bind(n, 39583)),
          "ja-JP": n.e(1280).then(n.bind(n, 21280)),
          "ko-KR": n.e(5734).then(n.bind(n, 45734)),
          "pl-PL": n.e(4153).then(n.bind(n, 84153)),
          "pt-BR": n.e(1381).then(n.bind(n, 11381)),
          "ru-RU": n.e(7727).then(n.bind(n, 57727)),
          "zh-CN": n.e(3586).then(n.bind(n, 13586)),
          "zh-TW": n.e(2578).then(n.bind(n, 12578))
        },
        Nh = (e, t) => {
          const n = "more" === t ? Kr.lightHc : Kr.light,
            r = "more" === t ? Kr.darkHc : Kr.dark;
          return "dark" === e ? r : n
        };

      function Rh(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }
      var Ih = n(65998),
        Mh = n(86410),
        Dh = n(29818),
        Bh = n(52806),
        Hh = n(19264);

      function zh(e) {
        const t = h.useRef({
          value: e,
          previous: e
        });
        return h.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }
      var Fh = n(85307);

      function Vh(e) {
        const [t, n] = h.useState(void 0);
        return (0, Fh.N)((() => {
          if (e) {
            n({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const t = new ResizeObserver((t => {
              if (!Array.isArray(t)) return;
              if (!t.length) return;
              const r = t[0];
              let o, i;
              if ("borderBoxSize" in r) {
                const e = r.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                o = t.inlineSize, i = t.blockSize
              } else o = e.offsetWidth, i = e.offsetHeight;
              n({
                width: o,
                height: i
              })
            }));
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          n(void 0)
        }), [e]), t
      }
      var Uh = n(85100),
        Gh = n(80355),
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
        [Qh, Jh] = (0, Dh.A)(Kh, [Zh]),
        [ef, tf] = Qh(Kh),
        nf = h.forwardRef(((e, t) => {
          const {
            name: n,
            min: r = 0,
            max: o = 100,
            step: i = 1,
            orientation: a = "horizontal",
            disabled: s = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: u = [r],
            value: d,
            onValueChange: f = () => {},
            onValueCommit: p = () => {},
            inverted: m = !1,
            form: g,
            ...v
          } = e, y = h.useRef(new Set), b = h.useRef(0), _ = "horizontal" === a ? af : sf, [w = [], E] = (0, Bh.i)({
            prop: d,
            defaultProp: u,
            onChange: e => {
              const t = [...y.current];
              t[b.current]?.focus(), f(e)
            }
          }), k = h.useRef(w);

          function j(e, t, {
            commit: n
          } = {
            commit: !1
          }) {
            const a = function(e) {
                return (String(e).split(".")[1] || "").length
              }(i),
              s = function(e, t) {
                const n = Math.pow(10, t);
                return Math.round(e * n) / n
              }(Math.round((e - r) / i) * i + r, a),
              u = Rh(s, [r, o]);
            E(((e = []) => {
              const r = function(e = [], t, n) {
                const r = [...e];
                return r[n] = t, r.sort(((e, t) => e - t))
              }(e, u, t);
              if (function(e, t) {
                  if (t > 0) {
                    const n = function(e) {
                      return e.slice(0, -1).map(((t, n) => e[n + 1] - t))
                    }(e);
                    return Math.min(...n) >= t
                  }
                  return !0
                }(r, l * i)) {
                b.current = r.indexOf(u);
                const t = String(r) !== String(e);
                return t && n && p(r), t ? r : e
              }
              return e
            }))
          }
          return (0, c.jsx)(ef, {
            scope: e.__scopeSlider,
            name: n,
            disabled: s,
            min: r,
            max: o,
            valueIndexToChangeRef: b,
            thumbs: y.current,
            values: w,
            orientation: a,
            form: g,
            children: (0, c.jsx)($h.Provider, {
              scope: e.__scopeSlider,
              children: (0, c.jsx)($h.Slot, {
                scope: e.__scopeSlider,
                children: (0, c.jsx)(_, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...v,
                  ref: t,
                  onPointerDown: (0, Ih.m)(v.onPointerDown, (() => {
                    s || (k.current = w)
                  })),
                  min: r,
                  max: o,
                  inverted: m,
                  onSlideStart: s ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const n = e.map((e => Math.abs(e - t))),
                        r = Math.min(...n);
                      return n.indexOf(r)
                    }(w, e);
                    j(e, t)
                  },
                  onSlideMove: s ? void 0 : function(e) {
                    j(e, b.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const e = k.current[b.current];
                    w[b.current] !== e && p(w)
                  },
                  onHomeKeyDown: () => !s && j(r, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !s && j(o, w.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!s) {
                      const n = qh.includes(e.key) || e.shiftKey && Xh.includes(e.key) ? 10 : 1,
                        r = b.current;
                      j(w[r] + i * n * t, r, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      nf.displayName = Kh;
      var [rf, of] = Qh(Kh, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), af = h.forwardRef(((e, t) => {
        const {
          min: n,
          max: r,
          dir: o,
          inverted: i,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: l,
          onStepKeyDown: u,
          ...d
        } = e, [f, p] = h.useState(null), m = (0, Mh.s)(t, (e => p(e))), g = h.useRef(void 0), v = (0, Hh.jH)(o), y = "ltr" === v, b = y && !i || !y && i;

        function _(e) {
          const t = g.current || f.getBoundingClientRect(),
            o = yf([0, t.width], b ? [n, r] : [r, n]);
          return g.current = t, o(e - t.left)
        }
        return (0, c.jsx)(rf, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, c.jsx)(lf, {
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
              u?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), sf = h.forwardRef(((e, t) => {
        const {
          min: n,
          max: r,
          inverted: o,
          onSlideStart: i,
          onSlideMove: a,
          onSlideEnd: s,
          onStepKeyDown: l,
          ...u
        } = e, d = h.useRef(null), f = (0, Mh.s)(t, d), p = h.useRef(void 0), m = !o;

        function g(e) {
          const t = p.current || d.current.getBoundingClientRect(),
            o = yf([0, t.height], m ? [r, n] : [n, r]);
          return p.current = t, o(e - t.top)
        }
        return (0, c.jsx)(rf, {
          scope: e.__scopeSlider,
          startEdge: m ? "bottom" : "top",
          endEdge: m ? "top" : "bottom",
          size: "height",
          direction: m ? 1 : -1,
          children: (0, c.jsx)(lf, {
            "data-orientation": "vertical",
            ...u,
            ref: f,
            style: {
              ...u.style,
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
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: a,
          onEndKeyDown: s,
          onStepKeyDown: l,
          ...u
        } = e, d = tf(Kh, n);
        return (0, c.jsx)(Uh.sG.span, {
          ...u,
          ref: t,
          onKeyDown: (0, Ih.m)(e.onKeyDown, (e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : qh.concat(Xh).includes(e.key) && (l(e), e.preventDefault())
          })),
          onPointerDown: (0, Ih.m)(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : r(e)
          })),
          onPointerMove: (0, Ih.m)(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: (0, Ih.m)(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          }))
        })
      })), uf = "SliderTrack", cf = h.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          ...r
        } = e, o = tf(uf, n);
        return (0, c.jsx)(Uh.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: t
        })
      }));
      cf.displayName = uf;
      var df = "SliderRange",
        hf = h.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            ...r
          } = e, o = tf(df, n), i = of(df, n), a = h.useRef(null), s = (0, Mh.s)(t, a), l = o.values.length, u = o.values.map((e => vf(e, o.min, o.max))), d = l > 1 ? Math.min(...u) : 0, f = 100 - Math.max(...u);
          return (0, c.jsx)(Uh.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...r,
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
          const n = Yh(e.__scopeSlider),
            [r, o] = h.useState(null),
            i = (0, Mh.s)(t, (e => o(e))),
            a = h.useMemo((() => r ? n().findIndex((e => e.ref.current === r)) : -1), [n, r]);
          return (0, c.jsx)(mf, {
            ...e,
            ref: i,
            index: a
          })
        })),
        mf = h.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            index: r,
            name: o,
            ...i
          } = e, a = tf(ff, n), s = of(ff, n), [l, u] = h.useState(null), d = (0, Mh.s)(t, (e => u(e))), f = !l || a.form || !!l.closest("form"), p = Vh(l), m = a.values[r], g = void 0 === m ? 0 : vf(m, a.min, a.max), v = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(r, a.values.length), y = p?.[s.size], b = y ? function(e, t, n) {
            const r = e / 2;
            return (r - yf([0, 50], [0, r])(t) * n) * n
          }(y, g, s.direction) : 0;
          return h.useEffect((() => {
            if (l) return a.thumbs.add(l), () => {
              a.thumbs.delete(l)
            }
          }), [l, a.thumbs]), (0, c.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${g}% + ${b}px)`
            },
            children: [(0, c.jsx)($h.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, c.jsx)(Uh.sG.span, {
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
                  a.valueIndexToChangeRef.current = r
                }))
              })
            }), f && (0, c.jsx)(gf, {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: m
            }, r)]
          })
        }));
      pf.displayName = ff;
      var gf = h.forwardRef((({
        __scopeSlider: e,
        value: t,
        ...n
      }, r) => {
        const o = h.useRef(null),
          i = (0, Mh.s)(o, r),
          a = zh(t);
        return h.useEffect((() => {
          const e = o.current;
          if (!e) return;
          const n = window.HTMLInputElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, "value").set;
          if (a !== t && r) {
            const n = new Event("input", {
              bubbles: !0
            });
            r.call(e, t), e.dispatchEvent(n)
          }
        }), [a, t]), (0, c.jsx)(Uh.sG.input, {
          style: {
            display: "none"
          },
          ...n,
          ref: i,
          defaultValue: t
        })
      }));

      function vf(e, t, n) {
        return Rh(100 / (n - t) * (e - t), [0, 100])
      }

      function yf(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      gf.displayName = "RadioBubbleInput";
      var bf = nf,
        _f = cf,
        wf = hf,
        Ef = pf;
      const kf = {
          id: "Lightbox_Close_Button_Label"
        },
        jf = {
          id: "Lightbox_Close_Button_Tooltip"
        },
        Sf = {
          id: "Lightbox_Zoom_In_Button_Label"
        },
        Cf = {
          id: "Lightbox_Zoom_In_Button_Tooltip"
        },
        xf = {
          id: "Lightbox_Zoom_Out_Button_Label"
        },
        Pf = {
          id: "Lightbox_Zoom_Out_Button__Tooltip"
        },
        Of = {
          id: "Lightbox_Reset_Zoom_Button_Label"
        },
        Tf = {
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
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, If.apply(null, arguments)
      }
      var Mf = ["shift", "alt", "meta", "mod", "ctrl"],
        Df = {
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
        return (e && Df[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Hf(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function zf(e, t, n) {
        void 0 === t && (t = "+");
        var r = e.toLocaleLowerCase().split(t).map((function(e) {
          return Bf(e)
        }));
        return If({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter((function(e) {
            return !Mf.includes(e)
          })),
          description: n,
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
            return Mf.includes(e)
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
        var n, r, o = e.target,
          i = e.composed;
        return r = (n = o).tagName && !n.tagName.startsWith("-") && n.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Vf(t) ? Boolean(r && t && t.some((function(e) {
          var t;
          return e.toLowerCase() === (null == (t = r) ? void 0 : t.toLowerCase())
        }))) : Boolean(r && t && t)
      }
      var Xf = (0, h.createContext)(void 0);

      function Wf(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          r = e.children;
        return (0, c.jsx)(Xf.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: n
          },
          children: r
        })
      }

      function Kf(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(n, r) {
          return n && Kf(e[r], t[r])
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
            n = void 0 === t ? ["*"] : t,
            r = e.children,
            o = (0, h.useState)((null == n ? void 0 : n.length) > 0 ? n : ["*"]),
            i = o[0],
            a = o[1],
            s = (0, h.useState)([]),
            l = s[0],
            u = s[1],
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
              u((function(t) {
                return [].concat(t, [e])
              }))
            }), []),
            g = (0, h.useCallback)((function(e) {
              u((function(t) {
                return t.filter((function(t) {
                  return !Kf(t, e)
                }))
              }))
            }), []);
          return (0, c.jsx)($f.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: d,
              disableScope: f,
              toggleScope: p
            },
            children: (0, c.jsx)(Wf, {
              addHotkey: m,
              removeHotkey: g,
              children: r
            })
          })
        },
        Zf = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Qf = "undefined" != typeof window ? h.useLayoutEffect : h.useEffect;

      function Jf(e, t, n, r) {
        var o = (0, h.useState)(null),
          i = o[0],
          a = o[1],
          s = (0, h.useRef)(!1),
          l = n instanceof Array ? r instanceof Array ? void 0 : r : n,
          u = Vf(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          c = n instanceof Array ? n : r instanceof Array ? r : void 0,
          d = (0, h.useCallback)(t, null != c ? c : []),
          f = (0, h.useRef)(d);
        f.current = c ? d : t;
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
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !qf(e, ["input", "textarea", "select"]) || qf(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== i) {
                    var r = i.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== i && !i.contains(r.activeElement)) return void Zf(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != p && p.enableOnContentEditable) && Hf(u, null == p ? void 0 : p.splitKey).forEach((function(n) {
                    var r, o = zf(n, null == p ? void 0 : p.combinationKey);
                    if (function(e, t, n) {
                        void 0 === n && (n = !1);
                        var r, o, i = t.alt,
                          a = t.meta,
                          s = t.mod,
                          l = t.shift,
                          u = t.ctrl,
                          c = t.keys,
                          d = e.key,
                          h = e.code,
                          f = e.ctrlKey,
                          p = e.metaKey,
                          m = e.shiftKey,
                          g = e.altKey,
                          v = Bf(h),
                          y = d.toLowerCase();
                        if (!(null != c && c.includes(v) || null != c && c.includes(y) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(v))) return !1;
                        if (!n) {
                          if (i === !g && "alt" !== y) return !1;
                          if (l === !m && "shift" !== y) return !1;
                          if (s) {
                            if (!p && !f) return !1
                          } else {
                            if (a === !p && "meta" !== y && "os" !== y) return !1;
                            if (u === !f && "ctrl" !== y && "control" !== y) return !1
                          }
                        }
                        return !(!c || 1 !== c.length || !c.includes(y) && !c.includes(v)) || (c ? (void 0 === o && (o = ","), (Vf(r = c) ? r : r.split(o)).every((function(e) {
                          return Ff.has(e.trim().toLowerCase())
                        }))) : !c)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == p ? void 0 : p.enabled)) return void Zf(e);
                      f.current(e, o), t || (s.current = !0)
                    }
                  }))
                }
              },
              r = function(e) {
                void 0 !== e.key && (Uf(Bf(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && n(e))
              },
              o = function(e) {
                void 0 !== e.key && (Gf(Bf(e.code)), s.current = !1, null != p && p.keyup && n(e, !0))
              },
              a = i || (null == l ? void 0 : l.document) || document;
            return a.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.addEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), g && Hf(u, null == p ? void 0 : p.splitKey).forEach((function(e) {
                return g.addHotkey(zf(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              })),
              function() {
                a.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.removeEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), g && Hf(u, null == p ? void 0 : p.splitKey).forEach((function(e) {
                  return g.removeHotkey(zf(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                }))
              }
          }
        }), [i, u, p, m]), a
      }

      function ep(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function tp(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function np(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? tp(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = ep(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tp(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function rp(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var op = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        ip = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = np(np({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) op(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return rp(e.variantClassNames, (e => rp(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_8kowh41 foundry_nk7jgu_1d5mo5m0 foundry_nk7jgu_a5x3kh0",
          variantClassNames: {
            appearance: {
              primary: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua1",
              secondary: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua2",
              tertiary: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua3",
              ghost: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua4",
              danger: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua6",
              information: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua5"
            },
            size: {
              XS: "foundry_nk7jgu_a5x3kh8",
              SM: "foundry_nk7jgu_a5x3kh9",
              MD: "foundry_nk7jgu_a5x3kha",
              LG: "foundry_nk7jgu_a5x3khb"
            },
            fullWidth: {
              true: "foundry_nk7jgu_a5x3khc",
              false: "foundry_nk7jgu_a5x3khd"
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
          className: n,
          icon: r,
          label: o,
          appearance: i,
          fullWidth: a = !1,
          size: s = "MD",
          onClick: l,
          children: u,
          ...f
        }, m) => {
          const g = (0, h.useRef)(null),
            v = G(g, m),
            y = Jr(),
            b = "string" == typeof s ? s : s?.[y] ?? s.default ?? "MD",
            {
              events: _,
              others: w
            } = (0, d.bZ)(f, {
              onPress: !1
            }),
            {
              buttonProps: E,
              isPressed: k
            } = cn({
              ...w,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => w.onPress?.(e) ?? l?.(e)
            }, g),
            j = (0, d.v6)({
              ..._,
              role: "button",
              "data-pressed": k,
              "data-testid": e,
              className: ip({
                appearance: i,
                size: b,
                fullWidth: a
              })
            }, {
              ...E,
              className: n
            }),
            S = z[r],
            C = t ? p.DX : "button",
            x = ap[b];
          return (0, c.jsxs)(C, {
            ref: v,
            ...j,
            children: [S && (0, c.jsx)(S, {
              label: o || "",
              size: x
            }), (0, c.jsx)(p.xV, {
              children: u
            })]
          })
        }));
      var lp = "foundry_nk7jgu_bc732x1";
      const up = (0, h.forwardRef)((({
        shortcut: e,
        isInline: t,
        onShortcut: n
      }, r) => (Jf(e, (e => n?.(e)), [n]), (0, c.jsx)(H, {
        size: "XS",
        className: (0, L.$)("foundry_nk7jgu_bc732x0", {
          [lp]: t
        }),
        asChild: !0,
        children: (0, c.jsx)("kbd", {
          ref: r,
          children: e
        })
      }))));

      function cp(e) {
        const t = h.useRef(e);
        return h.useEffect((() => {
          t.current = e
        })), h.useMemo((() => (...e) => t.current?.(...e)), [])
      }
      var dp, hp = "dismissableLayer.update",
        fp = h.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        pp = h.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: a,
            onDismiss: s,
            ...l
          } = e, u = h.useContext(fp), [d, f] = h.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = h.useState({}), g = (0, Mh.s)(t, (e => f(e))), v = Array.from(u.layers), [y] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(y), _ = d ? v.indexOf(d) : -1, w = u.layersWithOutsidePointerEventsDisabled.size > 0, E = _ >= b, k = function(e, t = globalThis?.document) {
            const n = cp(e),
              r = h.useRef(!1),
              o = h.useRef((() => {}));
            return h.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      gp("dismissableLayer.pointerDownOutside", n, i, {
                        discrete: !0
                      })
                    };
                    const i = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = r, t.addEventListener("click", o.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", o.current);
                  r.current = !1
                },
                i = window.setTimeout((() => {
                  t.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
              }
            }), [t, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }((e => {
            const t = e.target,
              n = [...u.branches].some((e => e.contains(t)));
            E && !n && (o?.(e), a?.(e), e.defaultPrevented || s?.())
          }), p), j = function(e, t = globalThis?.document) {
            const n = cp(e),
              r = h.useRef(!1);
            return h.useEffect((() => {
              const e = e => {
                e.target && !r.current && gp("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }), [t, n]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }((e => {
            const t = e.target;
            [...u.branches].some((e => e.contains(t))) || (i?.(e), a?.(e), e.defaultPrevented || s?.())
          }), p);
          return function(e, t = globalThis?.document) {
            const n = cp(e);
            h.useEffect((() => {
              const e = e => {
                "Escape" === e.key && n(e)
              };
              return t.addEventListener("keydown", e, {
                capture: !0
              }), () => t.removeEventListener("keydown", e, {
                capture: !0
              })
            }), [n, t])
          }((e => {
            _ === u.layers.size - 1 && (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()))
          }), p), h.useEffect((() => {
            if (d) return n && (0 === u.layersWithOutsidePointerEventsDisabled.size && (dp = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), mp(), () => {
              n && 1 === u.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = dp)
            }
          }), [d, p, n, u]), h.useEffect((() => () => {
            d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), mp())
          }), [d, u]), h.useEffect((() => {
            const e = () => m({});
            return document.addEventListener(hp, e), () => document.removeEventListener(hp, e)
          }), []), (0, c.jsx)(Uh.sG.div, {
            ...l,
            ref: g,
            style: {
              pointerEvents: w ? E ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, Ih.m)(e.onFocusCapture, j.onFocusCapture),
            onBlurCapture: (0, Ih.m)(e.onBlurCapture, j.onBlurCapture),
            onPointerDownCapture: (0, Ih.m)(e.onPointerDownCapture, k.onPointerDownCapture)
          })
        }));

      function mp() {
        const e = new CustomEvent(hp);
        document.dispatchEvent(e)
      }

      function gp(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? (0, Uh.hO)(o, i) : o.dispatchEvent(i)
      }
      pp.displayName = "DismissableLayer", h.forwardRef(((e, t) => {
        const n = h.useContext(fp),
          r = h.useRef(null),
          o = (0, Mh.s)(t, r);
        return h.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, c.jsx)(Uh.sG.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var vp = n(30822),
        yp = n(63735),
        bp = "undefined" != typeof document ? h.useLayoutEffect : h.useEffect;

      function _p(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 != r--;)
              if (!_p(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || _p(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function wp(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Ep(e, t) {
        const n = wp(e);
        return Math.round(t * n) / n
      }

      function kp(e) {
        const t = h.useRef(e);
        return bp((() => {
          t.current = e
        })), t
      }
      const jp = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: n,
              padding: r
            } = "function" == typeof e ? e(t) : e;
            return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? (0, yp.UE)({
              element: n.current,
              padding: r
            }).fn(t) : {} : n ? (0, yp.UE)({
              element: n,
              padding: r
            }).fn(t) : {};
            var o
          }
        }),
        Sp = (e, t) => ({
          ...(0, yp.cY)(e),
          options: [e, t]
        }),
        Cp = (e, t) => ({
          ...(0, yp.BN)(e),
          options: [e, t]
        }),
        xp = (e, t) => ({
          ...(0, yp.ER)(e),
          options: [e, t]
        }),
        Pp = (e, t) => ({
          ...(0, yp.UU)(e),
          options: [e, t]
        }),
        Op = (e, t) => ({
          ...(0, yp.Ej)(e),
          options: [e, t]
        }),
        Tp = (e, t) => ({
          ...(0, yp.jD)(e),
          options: [e, t]
        }),
        Ap = (e, t) => ({
          ...jp(e),
          options: [e, t]
        });
      var Lp = h.forwardRef(((e, t) => {
        const {
          children: n,
          width: r = 10,
          height: o = 5,
          ...i
        } = e;
        return (0, c.jsx)(Uh.sG.svg, {
          ...i,
          ref: t,
          width: r,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild ? n : (0, c.jsx)("polygon", {
            points: "0,0 30,0 15,10"
          })
        })
      }));
      Lp.displayName = "Arrow";
      var Np = Lp,
        Rp = "Popper",
        [Ip, Mp] = (0, Dh.A)(Rp),
        [Dp, Bp] = Ip(Rp),
        Hp = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [r, o] = h.useState(null);
          return (0, c.jsx)(Dp, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
          })
        };
      Hp.displayName = Rp;
      var zp = "PopperAnchor",
        Fp = h.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: r,
            ...o
          } = e, i = Bp(zp, n), a = h.useRef(null), s = (0, Mh.s)(t, a);
          return h.useEffect((() => {
            i.onAnchorChange(r?.current || a.current)
          })), r ? null : (0, c.jsx)(Uh.sG.div, {
            ...o,
            ref: s
          })
        }));
      Fp.displayName = zp;
      var Vp = "PopperContent",
        [Up, Gp] = Ip(Vp),
        qp = h.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: a = 0,
            arrowPadding: s = 0,
            avoidCollisions: l = !0,
            collisionBoundary: u = [],
            collisionPadding: d = 0,
            sticky: f = "partial",
            hideWhenDetached: p = !1,
            updatePositionStrategy: m = "optimized",
            onPlaced: g,
            ...v
          } = e, y = Bp(Vp, n), [b, _] = h.useState(null), w = (0, Mh.s)(t, (e => _(e))), [E, k] = h.useState(null), j = Vh(E), S = j?.width ?? 0, C = j?.height ?? 0, x = r + ("center" !== i ? "-" + i : ""), P = "number" == typeof d ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
          }, O = Array.isArray(u) ? u : [u], T = O.length > 0, A = {
            padding: P,
            boundary: O.filter($p),
            altBoundary: T
          }, {
            refs: L,
            floatingStyles: N,
            placement: R,
            isPositioned: I,
            middlewareData: M
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
              strategy: n = "absolute",
              middleware: r = [],
              platform: o,
              elements: {
                reference: i,
                floating: a
              } = {},
              transform: s = !0,
              whileElementsMounted: l,
              open: u
            } = e, [c, d] = h.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, p] = h.useState(r);
            _p(f, r) || p(r);
            const [m, g] = h.useState(null), [v, y] = h.useState(null), b = h.useCallback((e => {
              e !== k.current && (k.current = e, g(e))
            }), []), _ = h.useCallback((e => {
              e !== j.current && (j.current = e, y(e))
            }), []), w = i || m, E = a || v, k = h.useRef(null), j = h.useRef(null), S = h.useRef(c), C = null != l, x = kp(l), P = kp(o), O = kp(u), T = h.useCallback((() => {
              if (!k.current || !j.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: f
              };
              P.current && (e.platform = P.current), (0, yp.rD)(k.current, j.current, e).then((e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== O.current
                };
                A.current && !_p(S.current, t) && (S.current = t, Qt.flushSync((() => {
                  d(t)
                })))
              }))
            }), [f, t, n, P, O]);
            bp((() => {
              !1 === u && S.current.isPositioned && (S.current.isPositioned = !1, d((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [u]);
            const A = h.useRef(!1);
            bp((() => (A.current = !0, () => {
              A.current = !1
            })), []), bp((() => {
              if (w && (k.current = w), E && (j.current = E), w && E) {
                if (x.current) return x.current(w, E, T);
                T()
              }
            }), [w, E, T, x, C]);
            const L = h.useMemo((() => ({
                reference: k,
                floating: j,
                setReference: b,
                setFloating: _
              })), [b, _]),
              N = h.useMemo((() => ({
                reference: w,
                floating: E
              })), [w, E]),
              R = h.useMemo((() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!N.floating) return e;
                const t = Ep(N.floating, c.x),
                  r = Ep(N.floating, c.y);
                return s ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...wp(N.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }), [n, s, N.floating, c.x, c.y]);
            return h.useMemo((() => ({
              ...c,
              update: T,
              refs: L,
              elements: N,
              floatingStyles: R
            })), [c, T, L, N, R])
          }({
            strategy: "fixed",
            placement: x,
            whileElementsMounted: (...e) => (0, yp.ll)(...e, {
              animationFrame: "always" === m
            }),
            elements: {
              reference: y.anchor
            },
            middleware: [Sp({
              mainAxis: o + C,
              alignmentAxis: a
            }), l && Cp({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === f ? xp() : void 0,
              ...A
            }), l && Pp({
              ...A
            }), Op({
              ...A,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: n,
                availableHeight: r
              }) => {
                const {
                  width: o,
                  height: i
                } = t.reference, a = e.floating.style;
                a.setProperty("--radix-popper-available-width", `${n}px`), a.setProperty("--radix-popper-available-height", `${r}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${i}px`)
              }
            }), E && Ap({
              element: E,
              padding: s
            }), Yp({
              arrowWidth: S,
              arrowHeight: C
            }), p && Tp({
              strategy: "referenceHidden",
              ...A
            })]
          }), [D, B] = Zp(R), H = cp(g);
          (0, Fh.N)((() => {
            I && H?.()
          }), [I, H]);
          const z = M.arrow?.x,
            F = M.arrow?.y,
            V = 0 !== M.arrow?.centerOffset,
            [U, G] = h.useState();
          return (0, Fh.N)((() => {
            b && G(window.getComputedStyle(b).zIndex)
          }), [b]), (0, c.jsx)("div", {
            ref: L.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...N,
              transform: I ? N.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: U,
              "--radix-popper-transform-origin": [M.transformOrigin?.x, M.transformOrigin?.y].join(" "),
              ...M.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, c.jsx)(Up, {
              scope: n,
              placedSide: D,
              onArrowChange: k,
              arrowX: z,
              arrowY: F,
              shouldHideArrow: V,
              children: (0, c.jsx)(Uh.sG.div, {
                "data-side": D,
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
      qp.displayName = Vp;
      var Xp = "PopperArrow",
        Wp = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Kp = h.forwardRef((function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = Gp(Xp, n), i = Wp[o.placedSide];
          return (0, c.jsx)("span", {
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
            children: (0, c.jsx)(Np, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        }));

      function $p(e) {
        return null !== e
      }
      Kp.displayName = Xp;
      var Yp = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [l, u] = Zp(n), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [u], d = (o.arrow?.x ?? 0) + a / 2, h = (o.arrow?.y ?? 0) + s / 2;
          let f = "",
            p = "";
          return "bottom" === l ? (f = i ? c : `${d}px`, p = -s + "px") : "top" === l ? (f = i ? c : `${d}px`, p = `${r.floating.height+s}px`) : "right" === l ? (f = -s + "px", p = i ? c : `${h}px`) : "left" === l && (f = `${r.floating.width+s}px`, p = i ? c : `${h}px`), {
            data: {
              x: f,
              y: p
            }
          }
        }
      });

      function Zp(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var Qp = Hp,
        Jp = Fp,
        em = qp,
        tm = Kp,
        nm = h.forwardRef(((e, t) => {
          const {
            container: n,
            ...r
          } = e, [o, i] = h.useState(!1);
          (0, Fh.N)((() => i(!0)), []);
          const a = n || o && globalThis?.document?.body;
          return a ? Qt.createPortal((0, c.jsx)(Uh.sG.div, {
            ...r,
            ref: t
          }), a) : null
        }));
      nm.displayName = "Portal";
      var rm = n(36146),
        om = n(23135),
        im = Object.freeze({
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
        am = h.forwardRef(((e, t) => (0, c.jsx)(Uh.sG.span, {
          ...e,
          ref: t,
          style: {
            ...im,
            ...e.style
          }
        })));
      am.displayName = "VisuallyHidden";
      var sm = am,
        [lm, um] = (0, Dh.A)("Tooltip", [Mp]),
        cm = Mp(),
        dm = "TooltipProvider",
        hm = 700,
        fm = "tooltip.open",
        [pm, mm] = lm(dm),
        gm = e => {
          const {
            __scopeTooltip: t,
            delayDuration: n = hm,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, a = h.useRef(!0), s = h.useRef(!1), l = h.useRef(0);
          return h.useEffect((() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }), []), (0, c.jsx)(pm, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: n,
            onOpen: h.useCallback((() => {
              window.clearTimeout(l.current), a.current = !1
            }), []),
            onClose: h.useCallback((() => {
              window.clearTimeout(l.current), l.current = window.setTimeout((() => a.current = !0), r)
            }), [r]),
            isPointerInTransitRef: s,
            onPointerInTransitChange: h.useCallback((e => {
              s.current = e
            }), []),
            disableHoverableContent: o,
            children: i
          })
        };
      gm.displayName = dm;
      var vm = "Tooltip",
        [ym, bm] = lm(vm),
        _m = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: a,
            delayDuration: s
          } = e, l = mm(vm, e.__scopeTooltip), u = cm(t), [d, f] = h.useState(null), p = (0, vp.B)(), m = h.useRef(0), g = a ?? l.disableHoverableContent, v = s ?? l.delayDuration, y = h.useRef(!1), [b, _] = (0, Bh.i)({
            prop: r,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(fm))) : l.onClose(), i?.(e)
            },
            caller: vm
          }), w = h.useMemo((() => b ? y.current ? "delayed-open" : "instant-open" : "closed"), [b]), E = h.useCallback((() => {
            window.clearTimeout(m.current), m.current = 0, y.current = !1, _(!0)
          }), [_]), k = h.useCallback((() => {
            window.clearTimeout(m.current), m.current = 0, _(!1)
          }), [_]), j = h.useCallback((() => {
            window.clearTimeout(m.current), m.current = window.setTimeout((() => {
              y.current = !0, _(!0), m.current = 0
            }), v)
          }), [v, _]);
          return h.useEffect((() => () => {
            m.current && (window.clearTimeout(m.current), m.current = 0)
          }), []), (0, c.jsx)(Qp, {
            ...u,
            children: (0, c.jsx)(ym, {
              scope: t,
              contentId: p,
              open: b,
              stateAttribute: w,
              trigger: d,
              onTriggerChange: f,
              onTriggerEnter: h.useCallback((() => {
                l.isOpenDelayedRef.current ? j() : E()
              }), [l.isOpenDelayedRef, j, E]),
              onTriggerLeave: h.useCallback((() => {
                g ? k() : (window.clearTimeout(m.current), m.current = 0)
              }), [k, g]),
              onOpen: E,
              onClose: k,
              disableHoverableContent: g,
              children: n
            })
          })
        };
      _m.displayName = vm;
      var wm = "TooltipTrigger",
        Em = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = bm(wm, n), i = mm(wm, n), a = cm(n), s = h.useRef(null), l = (0, Mh.s)(t, s, o.onTriggerChange), u = h.useRef(!1), d = h.useRef(!1), f = h.useCallback((() => u.current = !1), []);
          return h.useEffect((() => () => document.removeEventListener("pointerup", f)), [f]), (0, c.jsx)(Jp, {
            asChild: !0,
            ...a,
            children: (0, c.jsx)(Uh.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...r,
              ref: l,
              onPointerMove: (0, Ih.m)(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (d.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), d.current = !0))
              })),
              onPointerLeave: (0, Ih.m)(e.onPointerLeave, (() => {
                o.onTriggerLeave(), d.current = !1
              })),
              onPointerDown: (0, Ih.m)(e.onPointerDown, (() => {
                o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", f, {
                  once: !0
                })
              })),
              onFocus: (0, Ih.m)(e.onFocus, (() => {
                u.current || o.onOpen()
              })),
              onBlur: (0, Ih.m)(e.onBlur, o.onClose),
              onClick: (0, Ih.m)(e.onClick, o.onClose)
            })
          })
        }));
      Em.displayName = wm;
      var km = "TooltipPortal",
        [jm, Sm] = lm(km, {
          forceMount: void 0
        }),
        Cm = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = bm(km, t);
          return (0, c.jsx)(jm, {
            scope: t,
            forceMount: n,
            children: (0, c.jsx)(rm.C, {
              present: n || i.open,
              children: (0, c.jsx)(nm, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      Cm.displayName = km;
      var xm = "TooltipContent",
        Pm = h.forwardRef(((e, t) => {
          const n = Sm(xm, e.__scopeTooltip),
            {
              forceMount: r = n.forceMount,
              side: o = "top",
              ...i
            } = e,
            a = bm(xm, e.__scopeTooltip);
          return (0, c.jsx)(rm.C, {
            present: r || a.open,
            children: a.disableHoverableContent ? (0, c.jsx)(Nm, {
              side: o,
              ...i,
              ref: t
            }) : (0, c.jsx)(Om, {
              side: o,
              ...i,
              ref: t
            })
          })
        })),
        Om = h.forwardRef(((e, t) => {
          const n = bm(xm, e.__scopeTooltip),
            r = mm(xm, e.__scopeTooltip),
            o = h.useRef(null),
            i = (0, Mh.s)(t, o),
            [a, s] = h.useState(null),
            {
              trigger: l,
              onClose: u
            } = n,
            d = o.current,
            {
              onPointerInTransitChange: f
            } = r,
            p = h.useCallback((() => {
              s(null), f(!1)
            }), [f]),
            m = h.useCallback(((e, t) => {
              const n = e.currentTarget,
                r = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = function(e, t, n = 5) {
                  const r = [];
                  switch (t) {
                    case "top":
                      r.push({
                        x: e.x - n,
                        y: e.y + n
                      }, {
                        x: e.x + n,
                        y: e.y + n
                      });
                      break;
                    case "bottom":
                      r.push({
                        x: e.x - n,
                        y: e.y - n
                      }, {
                        x: e.x + n,
                        y: e.y - n
                      });
                      break;
                    case "left":
                      r.push({
                        x: e.x + n,
                        y: e.y - n
                      }, {
                        x: e.x + n,
                        y: e.y + n
                      });
                      break;
                    case "right":
                      r.push({
                        x: e.x - n,
                        y: e.y - n
                      }, {
                        x: e.x - n,
                        y: e.y + n
                      })
                  }
                  return r
                }(r, function(e, t) {
                  const n = Math.abs(t.top - e.y),
                    r = Math.abs(t.bottom - e.y),
                    o = Math.abs(t.right - e.x),
                    i = Math.abs(t.left - e.x);
                  switch (Math.min(n, r, o, i)) {
                    case i:
                      return "left";
                    case o:
                      return "right";
                    case n:
                      return "top";
                    case r:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(r, n.getBoundingClientRect())),
                i = function(e) {
                  const t = e.slice();
                  return t.sort(((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
                    function(e) {
                      if (e.length <= 1) return e.slice();
                      const t = [];
                      for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        for (; t.length >= 2;) {
                          const e = t[t.length - 1],
                            n = t[t.length - 2];
                          if (!((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x))) break;
                          t.pop()
                        }
                        t.push(r)
                      }
                      t.pop();
                      const n = [];
                      for (let t = e.length - 1; t >= 0; t--) {
                        const r = e[t];
                        for (; n.length >= 2;) {
                          const e = n[n.length - 1],
                            t = n[n.length - 2];
                          if (!((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x))) break;
                          n.pop()
                        }
                        n.push(r)
                      }
                      return n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
                    }(t)
                }([...o, ... function(e) {
                  const {
                    top: t,
                    right: n,
                    bottom: r,
                    left: o
                  } = e;
                  return [{
                    x: o,
                    y: t
                  }, {
                    x: n,
                    y: t
                  }, {
                    x: n,
                    y: r
                  }, {
                    x: o,
                    y: r
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
                  n = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  r = l?.contains(t) || d?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: n,
                      y: r
                    } = e;
                    let o = !1;
                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                      const a = t[e],
                        s = t[i],
                        l = a.x,
                        u = a.y,
                        c = s.x,
                        d = s.y;
                      u > r != d > r && n < (c - l) * (r - u) / (d - u) + l && (o = !o)
                    }
                    return o
                  }(n, a);
                r ? p() : o && (p(), u())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }), [l, d, a, u, p]), (0, c.jsx)(Nm, {
            ...e,
            ref: i
          })
        })),
        [Tm, Am] = lm(vm, {
          isInside: !1
        }),
        Lm = (0, om.Dc)("TooltipContent"),
        Nm = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            ...s
          } = e, l = bm(xm, n), u = cm(n), {
            onClose: d
          } = l;
          return h.useEffect((() => (document.addEventListener(fm, d), () => document.removeEventListener(fm, d))), [d]), h.useEffect((() => {
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
          }), [l.trigger, d]), (0, c.jsx)(pp, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: d,
            children: (0, c.jsxs)(em, {
              "data-state": l.stateAttribute,
              ...u,
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
              children: [(0, c.jsx)(Lm, {
                children: r
              }), (0, c.jsx)(Tm, {
                scope: n,
                isInside: !0,
                children: (0, c.jsx)(sm, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || r
                })
              })]
            })
          })
        }));
      Pm.displayName = xm;
      var Rm = "TooltipArrow",
        Im = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = cm(n);
          return Am(Rm, n).isInside ? null : (0, c.jsx)(tm, {
            ...o,
            ...r,
            ref: t
          })
        }));
      Im.displayName = Rm;
      var Mm = gm,
        Dm = _m,
        Bm = Em,
        Hm = Cm,
        zm = Pm,
        Fm = Im;
      const Vm = ({
        content: e,
        children: t,
        side: n = "top",
        sideOffset: r = 8,
        align: o = "center",
        alignOffset: i = 0,
        avoidCollisions: a = !0,
        collisionBoundary: s,
        collisionPadding: l,
        sticky: u = "partial",
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
        testId: E
      }) => {
        const [k = !1, j] = K({
          defaultProp: m,
          prop: g,
          onChange: v
        }), S = U(k), C = Bl({
          opacity: k ? 1 : 0,
          immediate: k && !S
        }), x = "left" === n || "right" === n ? "center" : o, P = b ? {
          container: w
        } : {}, O = b ? Hm : h.Fragment, T = _ ? {
          className: "foundry_nk7jgu_h3lgaa2"
        } : {}, A = _ ? Fm : h.Fragment;
        return (0, c.jsx)(Mm, {
          delayDuration: y,
          children: (0, c.jsxs)(Dm, {
            open: k,
            onOpenChange: j,
            children: [(0, c.jsx)(Bm, {
              asChild: !0,
              className: "foundry_nk7jgu_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, c.jsx)(O, {
              ...P,
              children: (0, c.jsx)(zm, {
                side: n,
                align: x,
                sticky: u,
                forceMount: !0,
                "aria-label": p,
                "data-testid": E,
                sideOffset: r,
                alignOffset: i,
                onEscapeKeyDown: d,
                avoidCollisions: a,
                collisionPadding: l,
                collisionBoundary: s,
                onPointerDownOutside: f,
                children: (0, c.jsxs)(iu.div, {
                  className: "foundry_nk7jgu_h3lgaa0",
                  style: C,
                  children: [(0, c.jsx)(H, {
                    size: "SM",
                    className: "foundry_nk7jgu_h3lgaa1",
                    asChild: !0,
                    children: (0, c.jsx)("span", {
                      children: e
                    })
                  }), (0, c.jsx)(A, {
                    ...T
                  })]
                })
              })
            })]
          })
        })
      };
      var Um = "foundry_nk7jgu_bwy1ds1",
        Gm = "foundry_nk7jgu_bwy1dsg",
        qm = "foundry_nk7jgu_bwy1dsf";
      const Xm = e => {
          e.preventDefault?.()
        },
        Wm = (0, h.forwardRef)((({
          onClose: e,
          onDownload: t,
          zoomLevel: n,
          zoomIn: r,
          zoomOut: o,
          zoomTo: i,
          minZoomLevel: a,
          maxZoomLevel: s,
          canZoomIn: l,
          canZoomOut: u,
          resetZoom: d,
          caption: h,
          showDownloadButton: f,
          defaultZoomLevel: p,
          showZoomControls: m
        }, g) => {
          const v = Eh(),
            y = V("screen and (max-width: 1024px)"),
            b = n !== p,
            _ = y ? "SM" : "LG",
            w = Bl({
              opacity: b ? 1 : 0,
              immediate: q()
            });
          Jf(["+", "=", "add", "plus"], (() => r?.()), {
            preventDefault: !0,
            enabled: m
          }), Jf(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0,
            enabled: m
          }), Jf("r", (() => d?.()), {
            preventDefault: !0,
            enabled: m
          });
          const E = Y() && y;
          return (0, c.jsx)(Yf, {
            children: (0, c.jsxs)("div", {
              className: "foundry_nk7jgu_bwy1ds0",
              ref: g,
              children: [(0, c.jsx)(Vm, {
                side: "right",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: Xm,
                content: (0, c.jsxs)("div", {
                  className: qm,
                  children: [v.formatMessage(kf), (0, c.jsx)(H, {
                    size: "XS",
                    className: Gm,
                    children: v.formatMessage(jf, {
                      shortcut: (0, c.jsx)(up, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, c.jsx)(sp, {
                  size: _,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: v.formatMessage(kf),
                  className: (0, L.$)(Um, "foundry_nk7jgu_bwy1ds2"),
                  onPress: e
                })
              }), (0, c.jsxs)("div", {
                className: "foundry_nk7jgu_bwy1ds3",
                children: [!E && m && (0, c.jsxs)(c.Fragment, {
                  children: [(0, c.jsxs)("div", {
                    className: "foundry_nk7jgu_bwy1ds4",
                    children: [(0, c.jsx)(Vm, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: Xm,
                      content: (0, c.jsxs)("div", {
                        className: qm,
                        children: [v.formatMessage(Sf), (0, c.jsx)(H, {
                          size: "XS",
                          className: Gm,
                          children: v.formatMessage(Cf, {
                            shortcut: (0, c.jsx)(up, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, c.jsx)(sp, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: v.formatMessage(Sf),
                        className: (0, L.$)(Um, "foundry_nk7jgu_bwy1ds5"),
                        onPress: () => r(),
                        isDisabled: !l
                      })
                    }), (0, c.jsxs)(bf, {
                      className: "foundry_nk7jgu_bwy1dsa",
                      value: [n],
                      max: s,
                      min: a,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => i?.(e[0]),
                      children: [(0, c.jsx)(_f, {
                        className: "foundry_nk7jgu_bwy1dsb",
                        children: (0, c.jsx)(wf, {
                          className: "foundry_nk7jgu_bwy1dsc"
                        })
                      }), (0, c.jsx)(Vm, {
                        side: "left",
                        portal: !1,
                        delayDuration: 0,
                        onPointerDownOutside: Xm,
                        content: v.formatMessage(Lf, {
                          zoom: n.toFixed(0)
                        }),
                        children: (0, c.jsx)(Ef, {
                          className: "foundry_nk7jgu_bwy1dsd",
                          "aria-label": v.formatMessage(Af),
                          children: (0, c.jsx)("span", {
                            className: "foundry_nk7jgu_bwy1dse"
                          })
                        })
                      })]
                    }), (0, c.jsx)(Vm, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: Xm,
                      content: (0, c.jsxs)("div", {
                        className: qm,
                        children: [v.formatMessage(xf), (0, c.jsx)(H, {
                          size: "XS",
                          className: Gm,
                          children: v.formatMessage(Pf, {
                            shortcut: (0, c.jsx)(up, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, c.jsx)(sp, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: v.formatMessage(xf),
                        className: (0, L.$)(Um, "foundry_nk7jgu_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !u
                      })
                    })]
                  }), (0, c.jsx)(iu.div, {
                    style: w,
                    children: (0, c.jsx)(Vm, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: Xm,
                      content: (0, c.jsxs)("div", {
                        className: qm,
                        children: [v.formatMessage(Of), (0, c.jsx)(H, {
                          size: "XS",
                          className: Gm,
                          children: v.formatMessage(Tf, {
                            shortcut: (0, c.jsx)(up, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, c.jsx)(sp, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Undo",
                        label: v.formatMessage(Of),
                        className: (0, L.$)(Um, "foundry_nk7jgu_bwy1ds7"),
                        onPress: d,
                        isDisabled: !b,
                        "aria-hidden": !b
                      })
                    })
                  })]
                }), f && E && (0, c.jsx)(Vm, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: Xm,
                  content: v.formatMessage(Rf),
                  children: (0, c.jsx)(sp, {
                    size: _,
                    appearance: "tertiary",
                    icon: "Download",
                    label: v.formatMessage(Nf),
                    className: Um,
                    onPress: e
                  })
                })]
              }), (0, c.jsxs)("div", {
                className: "foundry_nk7jgu_bwy1ds8",
                children: [h && (0, c.jsxs)(c.Fragment, {
                  children: [(0, c.jsx)("div", {
                    className: "foundry_nk7jgu_bwy1dsh"
                  }), (0, c.jsx)(H, {
                    size: "SM",
                    "aria-hidden": !0,
                    asChild: "string" != typeof h,
                    children: h
                  })]
                }), f && !E && (0, c.jsx)("div", {
                  className: "foundry_nk7jgu_bwy1ds9",
                  children: (0, c.jsx)(Vm, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: Xm,
                    content: v.formatMessage(Rf),
                    children: (0, c.jsx)(sp, {
                      size: _,
                      appearance: "tertiary",
                      icon: "Download",
                      label: v.formatMessage(Nf),
                      className: Um,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        }));
      var Km = "foundry_nk7jgu_1a74xwb4",
        $m = "focusScope.autoFocusOnMount",
        Ym = "focusScope.autoFocusOnUnmount",
        Zm = {
          bubbles: !1,
          cancelable: !0
        },
        Qm = h.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...a
          } = e, [s, l] = h.useState(null), u = cp(o), d = cp(i), f = h.useRef(null), p = (0, Mh.s)(t, (e => l(e))), m = h.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          h.useEffect((() => {
            if (r) {
              let e = function(e) {
                  if (m.paused || !s) return;
                  const t = e.target;
                  s.contains(t) ? f.current = t : ng(f.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (m.paused || !s) return;
                  const t = e.relatedTarget;
                  null !== t && (s.contains(t) || ng(f.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && ng(s)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return s && r.observe(s, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }), [r, s, m.paused]), h.useEffect((() => {
            if (s) {
              rg.add(m);
              const e = document.activeElement;
              if (!s.contains(e)) {
                const t = new CustomEvent($m, Zm);
                s.addEventListener($m, u), s.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (ng(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(Jm(s).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && ng(s))
              }
              return () => {
                s.removeEventListener($m, u), setTimeout((() => {
                  const t = new CustomEvent(Ym, Zm);
                  s.addEventListener(Ym, d), s.dispatchEvent(t), t.defaultPrevented || ng(e ?? document.body, {
                    select: !0
                  }), s.removeEventListener(Ym, d), rg.remove(m)
                }), 0)
              }
            }
          }), [s, u, d, m]);
          const g = h.useCallback((e => {
            if (!n && !r) return;
            if (m.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, i] = function(e) {
                  const t = Jm(e);
                  return [eg(t, e), eg(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && ng(i, {
                select: !0
              })) : (e.preventDefault(), n && ng(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, r, m.paused]);
          return (0, c.jsx)(Uh.sG.div, {
            tabIndex: -1,
            ...a,
            ref: p,
            onKeyDown: g
          })
        }));

      function Jm(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function eg(e, t) {
        for (const n of e)
          if (!tg(n, {
              upTo: t
            })) return n
      }

      function tg(e, {
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

      function ng(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      Qm.displayName = "FocusScope";
      var rg = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = og(e, t), e.unshift(t)
          },
          remove(t) {
            e = og(e, t), e[0]?.resume()
          }
        }
      }();

      function og(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var ig = 0;

      function ag() {
        h.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? sg()), document.body.insertAdjacentElement("beforeend", e[1] ?? sg()), ig++, () => {
            1 === ig && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), ig--
          }
        }), [])
      }

      function sg() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var lg = "right-scroll-bar-position",
        ug = "width-before-scroll-bar",
        cg = n(23614),
        dg = (0, n(19683).f)(),
        hg = function() {},
        fg = h.forwardRef((function(e, t) {
          var n = h.useRef(null),
            r = h.useState({
              onScrollCapture: hg,
              onWheelCapture: hg,
              onTouchMoveCapture: hg
            }),
            o = r[0],
            i = r[1],
            a = e.forwardProps,
            s = e.children,
            l = e.className,
            u = e.removeScrollBar,
            c = e.enabled,
            d = e.shards,
            f = e.sideCar,
            p = e.noIsolation,
            m = e.inert,
            g = e.allowPinchZoom,
            v = e.as,
            y = void 0 === v ? "div" : v,
            b = e.gapMode,
            _ = (0, mu.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            w = f,
            E = (0, cg.S)([n, t]),
            k = (0, mu.__assign)((0, mu.__assign)({}, _), o);
          return h.createElement(h.Fragment, null, c && h.createElement(w, {
            sideCar: dg,
            removeScrollBar: u,
            shards: d,
            noIsolation: p,
            inert: m,
            setCallbacks: i,
            allowPinchZoom: !!g,
            lockRef: n,
            gapMode: b
          }), a ? h.cloneElement(h.Children.only(s), (0, mu.__assign)((0, mu.__assign)({}, k), {
            ref: E
          })) : h.createElement(y, (0, mu.__assign)({}, k, {
            className: l,
            ref: E
          }), s))
        }));
      fg.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, fg.classNames = {
        fullWidth: ug,
        zeroRight: lg
      };
      var pg = function(e) {
        var t = e.sideCar,
          n = (0, mu.__rest)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var r = t.read();
        if (!r) throw new Error("Sidecar medium not found");
        return h.createElement(r, (0, mu.__assign)({}, n))
      };
      pg.isSideCarExport = !0;
      var mg = function() {
          var e = 0,
            t = null;
          return {
            add: function(r) {
              var o, i;
              0 == e && (t = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = n.nc;
                return t && e.setAttribute("nonce", t), e
              }()) && (i = r, (o = t).styleSheet ? o.styleSheet.cssText = i : o.appendChild(document.createTextNode(i)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(t)), e++
            },
            remove: function() {
              !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }
        },
        gg = function() {
          var e, t = (e = mg(), function(t, n) {
            h.useEffect((function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }), [t && n])
          });
          return function(e) {
            var n = e.styles,
              r = e.dynamic;
            return t(n, r), null
          }
        },
        vg = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        yg = function(e) {
          return parseInt(e || "", 10) || 0
        },
        bg = gg(),
        _g = "data-scroll-locked",
        wg = function(e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            s = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(s, "px ").concat(r, ";\n  }\n  body[").concat(_g, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(lg, " {\n    right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(ug, " {\n    margin-right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(lg, " .").concat(lg, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(ug, " .").concat(ug, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(_g, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
        },
        Eg = function() {
          var e = parseInt(document.body.getAttribute(_g) || "0", 10);
          return isFinite(e) ? e : 0
        },
        kg = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          h.useEffect((function() {
            return document.body.setAttribute(_g, (Eg() + 1).toString()),
              function() {
                var e = Eg() - 1;
                e <= 0 ? document.body.removeAttribute(_g) : document.body.setAttribute(_g, e.toString())
              }
          }), []);
          var i = h.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return vg;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [yg(n), yg(r), yg(o)]
                }(e),
                n = document.documentElement.clientWidth,
                r = window.innerWidth;
              return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, r - n + t[2] - t[0])
              }
            }(o)
          }), [o]);
          return h.createElement(bg, {
            styles: wg(i, !t, o, n ? "" : "!important")
          })
        },
        jg = !1;
      if ("undefined" != typeof window) try {
        var Sg = Object.defineProperty({}, "passive", {
          get: function() {
            return jg = !0, !0
          }
        });
        window.addEventListener("test", Sg, Sg), window.removeEventListener("test", Sg, Sg)
      } catch (e) {
        jg = !1
      }
      var Cg = !!jg && {
          passive: !1
        },
        xg = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        Pg = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), Og(e, r)) {
              var o = Tg(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        Og = function(e, t) {
          return "v" === e ? function(e) {
            return xg(e, "overflowY")
          }(t) : function(e) {
            return xg(e, "overflowX")
          }(t)
        },
        Tg = function(e, t) {
          return "v" === e ? function(e) {
            return [e.scrollTop, e.scrollHeight, e.clientHeight]
          }(t) : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t)
        },
        Ag = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        Lg = function(e) {
          return [e.deltaX, e.deltaY]
        },
        Ng = function(e) {
          return e && "current" in e ? e.current : e
        },
        Rg = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        Ig = 0,
        Mg = [];

      function Dg(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const Bg = (dg.useMedium((function(e) {
        var t = h.useRef([]),
          n = h.useRef([0, 0]),
          r = h.useRef(),
          o = h.useState(Ig++)[0],
          i = h.useState(gg)[0],
          a = h.useRef(e);
        h.useEffect((function() {
          a.current = e
        }), [e]), h.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var t = (0, mu.__spreadArray)([e.lockRef.current], (e.shards || []).map(Ng), !0).filter(Boolean);
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
            var o, i = Ag(e),
              s = n.current,
              l = "deltaX" in e ? e.deltaX : s[0] - i[0],
              u = "deltaY" in e ? e.deltaY : s[1] - i[1],
              c = e.target,
              d = Math.abs(l) > Math.abs(u) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === c.type) return !1;
            var h = Pg(d, c);
            if (!h) return !0;
            if (h ? o = d : (o = "v" === d ? "h" : "v", h = Pg(d, c)), !h) return !1;
            if (!r.current && "changedTouches" in e && (l || u) && (r.current = o), !o) return !0;
            var f = r.current || o;
            return function(e, t, n, r, o) {
              var i = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                a = i * r,
                s = n.target,
                l = t.contains(s),
                u = !1,
                c = a > 0,
                d = 0,
                h = 0;
              do {
                var f = Tg(e, s),
                  p = f[0],
                  m = f[1] - f[2] - i * p;
                (p || m) && Og(e, s) && (d += m, h += p), s = s instanceof ShadowRoot ? s.host : s.parentNode
              } while (!l && s !== document.body || l && (t.contains(s) || t === s));
              return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(h) < 1 || !o && -a > h)) && (u = !0), u
            }(f, t, e, "h" === f ? l : u, !0)
          }), []),
          l = h.useCallback((function(e) {
            var n = e;
            if (Mg.length && Mg[Mg.length - 1] === i) {
              var r = "deltaY" in n ? Lg(n) : Ag(n),
                o = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && function(e, t) {
                    return e[0] === t[0] && e[1] === t[1]
                  }(e.delta, r)
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var l = (a.current.shards || []).map(Ng).filter(Boolean).filter((function(e) {
                  return e.contains(n.target)
                }));
                (l.length > 0 ? s(n, l[0]) : !a.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          u = h.useCallback((function(e, n, r, o) {
            var i = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: Dg(r)
            };
            t.current.push(i), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== i
              }))
            }), 1)
          }), []),
          c = h.useCallback((function(e) {
            n.current = Ag(e), r.current = void 0
          }), []),
          d = h.useCallback((function(t) {
            u(t.type, Lg(t), t.target, s(t, e.lockRef.current))
          }), []),
          f = h.useCallback((function(t) {
            u(t.type, Ag(t), t.target, s(t, e.lockRef.current))
          }), []);
        h.useEffect((function() {
          return Mg.push(i), e.setCallbacks({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: f
            }), document.addEventListener("wheel", l, Cg), document.addEventListener("touchmove", l, Cg), document.addEventListener("touchstart", c, Cg),
            function() {
              Mg = Mg.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", l, Cg), document.removeEventListener("touchmove", l, Cg), document.removeEventListener("touchstart", c, Cg)
            }
        }), []);
        var p = e.removeScrollBar,
          m = e.inert;
        return h.createElement(h.Fragment, null, m ? h.createElement(i, {
          styles: Rg(o)
        }) : null, p ? h.createElement(kg, {
          gapMode: e.gapMode
        }) : null)
      })), pg);
      var Hg = h.forwardRef((function(e, t) {
        return h.createElement(fg, (0, mu.__assign)({}, e, {
          ref: t,
          sideCar: Bg
        }))
      }));
      Hg.classNames = fg.classNames;
      const zg = Hg;
      var Fg = new WeakMap,
        Vg = new WeakMap,
        Ug = {},
        Gg = 0,
        qg = function(e) {
          return e && (e.host || qg(e.parentNode))
        },
        Xg = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), function(e, t, n, r) {
            var o = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = qg(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            Ug[n] || (Ug[n] = new WeakMap);
            var i = Ug[n],
              a = [],
              s = new Set,
              l = new Set(o),
              u = function(e) {
                e && !s.has(e) && (s.add(e), u(e.parentNode))
              };
            o.forEach(u);
            var c = function(e) {
              e && !l.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (s.has(e)) c(e);
                else try {
                  var t = e.getAttribute(r),
                    o = null !== t && "false" !== t,
                    l = (Fg.get(e) || 0) + 1,
                    u = (i.get(e) || 0) + 1;
                  Fg.set(e, l), i.set(e, u), a.push(e), 1 === l && o && Vg.set(e, !0), 1 === u && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              }))
            };
            return c(t), s.clear(), Gg++,
              function() {
                a.forEach((function(e) {
                  var t = Fg.get(e) - 1,
                    o = i.get(e) - 1;
                  Fg.set(e, t), i.set(e, o), t || (Vg.has(e) || e.removeAttribute(r), Vg.delete(e)), o || e.removeAttribute(n)
                })), --Gg || (Fg = new WeakMap, Fg = new WeakMap, Vg = new WeakMap, Ug = {})
              }
          }(r, o, n, "aria-hidden")) : function() {
            return null
          }
        },
        Wg = "Dialog",
        [Kg, $g] = (0, Dh.A)(Wg),
        [Yg, Zg] = Kg(Wg),
        Qg = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: a = !0
          } = e, s = h.useRef(null), l = h.useRef(null), [u, d] = (0, Bh.i)({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Wg
          });
          return (0, c.jsx)(Yg, {
            scope: t,
            triggerRef: s,
            contentRef: l,
            contentId: (0, vp.B)(),
            titleId: (0, vp.B)(),
            descriptionId: (0, vp.B)(),
            open: u,
            onOpenChange: d,
            onOpenToggle: h.useCallback((() => d((e => !e))), [d]),
            modal: a,
            children: n
          })
        };
      Qg.displayName = Wg;
      var Jg = "DialogTrigger",
        ev = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Zg(Jg, n), i = (0, Mh.s)(t, o.triggerRef);
          return (0, c.jsx)(Uh.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": bv(o.open),
            ...r,
            ref: i,
            onClick: (0, Ih.m)(e.onClick, o.onOpenToggle)
          })
        }));
      ev.displayName = Jg;
      var tv = "DialogPortal",
        [nv, rv] = Kg(tv, {
          forceMount: void 0
        }),
        ov = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = Zg(tv, t);
          return (0, c.jsx)(nv, {
            scope: t,
            forceMount: n,
            children: h.Children.map(r, (e => (0, c.jsx)(rm.C, {
              present: n || i.open,
              children: (0, c.jsx)(nm, {
                asChild: !0,
                container: o,
                children: e
              })
            })))
          })
        };
      ov.displayName = tv;
      var iv = "DialogOverlay",
        av = h.forwardRef(((e, t) => {
          const n = rv(iv, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = Zg(iv, e.__scopeDialog);
          return i.modal ? (0, c.jsx)(rm.C, {
            present: r || i.open,
            children: (0, c.jsx)(lv, {
              ...o,
              ref: t
            })
          }) : null
        }));
      av.displayName = iv;
      var sv = (0, om.TL)("DialogOverlay.RemoveScroll"),
        lv = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Zg(iv, n);
          return (0, c.jsx)(zg, {
            as: sv,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, c.jsx)(Uh.sG.div, {
              "data-state": bv(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        })),
        uv = "DialogContent",
        cv = h.forwardRef(((e, t) => {
          const n = rv(uv, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = Zg(uv, e.__scopeDialog);
          return (0, c.jsx)(rm.C, {
            present: r || i.open,
            children: i.modal ? (0, c.jsx)(dv, {
              ...o,
              ref: t
            }) : (0, c.jsx)(hv, {
              ...o,
              ref: t
            })
          })
        }));
      cv.displayName = uv;
      var dv = h.forwardRef(((e, t) => {
          const n = Zg(uv, e.__scopeDialog),
            r = h.useRef(null),
            o = (0, Mh.s)(t, n.contentRef, r);
          return h.useEffect((() => {
            const e = r.current;
            if (e) return Xg(e)
          }), []), (0, c.jsx)(fv, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, Ih.m)(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: (0, Ih.m)(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: (0, Ih.m)(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        hv = h.forwardRef(((e, t) => {
          const n = Zg(uv, e.__scopeDialog),
            r = h.useRef(!1),
            o = h.useRef(!1);
          return (0, c.jsx)(fv, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const i = t.target,
                a = n.triggerRef.current?.contains(i);
              a && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        })),
        fv = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...a
          } = e, s = Zg(uv, n), l = h.useRef(null), u = (0, Mh.s)(t, l);
          return ag(), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(Qm, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, c.jsx)(pp, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": bv(s.open),
                ...a,
                ref: u,
                onDismiss: () => s.onOpenChange(!1)
              })
            }), (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsx)(kv, {
                titleId: s.titleId
              }), (0, c.jsx)(jv, {
                contentRef: l,
                descriptionId: s.descriptionId
              })]
            })]
          })
        })),
        pv = "DialogTitle",
        mv = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Zg(pv, n);
          return (0, c.jsx)(Uh.sG.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        }));
      mv.displayName = pv;
      var gv = "DialogDescription",
        vv = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Zg(gv, n);
          return (0, c.jsx)(Uh.sG.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        }));
      vv.displayName = gv;
      var yv = "DialogClose";

      function bv(e) {
        return e ? "open" : "closed"
      }
      h.forwardRef(((e, t) => {
        const {
          __scopeDialog: n,
          ...r
        } = e, o = Zg(yv, n);
        return (0, c.jsx)(Uh.sG.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: (0, Ih.m)(e.onClick, (() => o.onOpenChange(!1)))
        })
      })).displayName = yv;
      var _v = "DialogTitleWarning",
        [wv, Ev] = (0, Dh.q)(_v, {
          contentName: uv,
          titleName: pv,
          docsSlug: "dialog"
        }),
        kv = ({
          titleId: e
        }) => {
          const t = Ev(_v),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return h.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        jv = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ev("DialogDescriptionWarning").contentName}}.`;
          return h.useEffect((() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        Sv = Qg,
        Cv = ev,
        xv = ov,
        Pv = cv,
        Ov = mv,
        Tv = vv;
      const Av = iu(av),
        Lv = iu(Pv),
        Nv = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        Rv = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        Iv = (0, d.AK)(.77, 0, .175, 1),
        Mv = ({
          src: e,
          alt: t,
          caption: n,
          crossOrigin: r,
          onReady: o,
          loading: i,
          referrerPolicy: a,
          thumbnail: s,
          thumbnailAspectRatio: l,
          thumbnailPosition: u,
          thumbnailFit: d,
          reduceMotion: f = !1,
          defaultOpen: m,
          open: g,
          onOpenChange: v,
          showOpenButton: y,
          showDownloadButton: b,
          zoomLevel: _,
          defaultZoomLevel: w = 100,
          minZoomLevel: E = 100,
          maxZoomLevel: k = 300,
          zoomLevelStep: j = 100,
          onZoomLevelChange: S,
          gestureSettings: C,
          testId: x,
          showZoomControls: P = !0,
          disableGesturesOn: O,
          asChild: T,
          children: A,
          className: N,
          usePortal: R = !0,
          enabled: I = !0
        }) => {
          const M = (0, h.useRef)(null),
            D = (0, h.useRef)(null),
            B = (0, h.useRef)(null),
            H = (0, h.useRef)(null),
            F = zl(),
            U = zl(),
            G = zl(),
            X = (0, h.useRef)(!1),
            Q = Eh(),
            J = V("screen and (max-width: 1024px)"),
            ee = Y() && J,
            te = q(),
            ne = "pointer-devices" !== O || ee,
            [re, oe] = (0, h.useState)(!0),
            [ie, ae] = (0, h.useState)(!1),
            [se = !1, le] = K({
              prop: g,
              defaultProp: m,
              onChange: v
            }),
            [ue, ce] = (0, h.useState)(!1),
            [de, he] = (0, h.useState)(null),
            fe = (0, h.useDeferredValue)(ue),
            pe = f || te || m && !X.current;
          (0, h.useEffect)((() => {
            o?.()
          }), []), (0, h.useEffect)((() => {
            (m || g) && ce(se)
          }), []), Z((() => {
            ue !== fe && (async function(e, {
              onOpen: t,
              onClose: n
            }) {
              const r = B.current.getBoundingClientRect(),
                o = B.current.querySelector("img"),
                i = o && getComputedStyle(o),
                a = i?.objectFit ?? "",
                s = i?.objectPosition ?? "",
                {
                  a: l
                } = new DOMMatrix(i?.transform),
                c = o?.naturalWidth ?? r.width,
                h = o?.naturalHeight ?? r.height,
                f = c / window.innerWidth,
                p = c / f,
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
                    width: `${r.width}px`,
                    height: `${r.height}px`,
                    x: r.left,
                    y: r.top,
                    objectFit: d || a,
                    objectPosition: u || s
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
                      easing: Iv
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
                  }), "vertical" === y ? M.current?.style.setProperty("width", "100%") : "horizontal" === y && M.current?.style.setProperty("height", "100%"), t?.()
                }
              }) : G.start({
                to: async e => {
                  await e({
                    immediate: !0,
                    opacity: 1,
                    height: "horizontal" === y ? `${window.innerHeight}px` : `${v}px`,
                    width: "horizontal" === y ? `${g}px` : `${window.innerWidth}px`,
                    x: ke.position[0] + ("horizontal" === y ? b : 0),
                    y: ke.position[1] + ("horizontal" === y ? 0 : b),
                    scale: ke.zoomLevel / 100,
                    objectFit: d || a,
                    objectPosition: u || s
                  }), await e({
                    aspectRatio: "unset",
                    scale: l,
                    width: `${r.width}px`,
                    height: `${r.height}px`,
                    x: r.left,
                    y: r.top,
                    immediate: pe,
                    config: {
                      duration: 250,
                      easing: Iv
                    }
                  }), B.current?.style.setProperty("opacity", "1"), await e({
                    opacity: 0,
                    immediate: !0
                  }), n?.()
                }
              })
            }(ue, {
              onClose: () => le(!1)
            }), X.current = !0)
          }), [ue]), Z((() => {
            se ? Promise.resolve().then((() => async function() {
              const e = B.current.querySelector("img");
              if (H.current) {
                let t = Nv;
                e?.currentSrc && (t = e?.currentSrc), H.current.src = t, await xe(H.current)
              }
            }())).then((() => xe(H.current))).then((() => ce(se))) : ce(!1)
          }), [se]);
          const me = () => {
              ce(!1)
            },
            {
              loaded: ge,
              eventHandlers: ve
            } = (({
              enabled: e = !0
            }) => {
              const [t, n] = (0, h.useState)(!1), [r, o] = (0, h.useState)(!1);
              return (0, h.useEffect)((() => {
                e || (n(!1), o(!1))
              }), [e]), {
                eventHandlers: {
                  onLoad: () => {
                    e && (o(!0), n(!1))
                  },
                  onAbort: () => {
                    e && (o(!0), n(!1))
                  },
                  onError: () => {
                    e && (o(!0), n(!1))
                  }
                },
                error: t,
                loaded: r
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
              const [n, r] = (0, h.useState)(!1);
              return (0, h.useEffect)((() => {
                r(!1)
              }), [t.current]), $("mouseenter", (() => {
                r(!0)
              }), t), $("mouseleave", (() => {
                r(!1)
              }), t), {
                isHovered: !!e && n
              }
            })({
              ref: D,
              enabled: fe
            }),
            {
              isFocused: be
            } = (({
              ref: e,
              onChange: t,
              onFocusIn: n,
              onFocusOut: r,
              enabled: o = !0
            }) => {
              const [i, a] = (0, h.useState)(!1);
              return $("focusin", (e => {
                a(!0), n?.(e), t?.(!0, e)
              }), e), $("focusout", (e => {
                a(!1), r?.(e), t?.(!1, e)
              }), e), {
                isFocused: !!o && i
              }
            })({
              ref: D,
              enabled: fe
            }),
            {
              isIdle: _e
            } = W({
              leave: 300,
              activity: 3e3,
              enabled: fe && !ye && !be && !ee
            }),
            we = function(e, t, n) {
              const r = Vi.fun(t) && t,
                {
                  reset: o,
                  sort: i,
                  trail: a = 0,
                  expires: s = !0,
                  exitBeforeEnter: l = !1,
                  onDestroyed: u,
                  ref: c,
                  config: d
                } = r ? r() : t,
                f = (0, h.useMemo)((() => r || 3 == arguments.length ? Dl() : void 0), []),
                p = Xi(e),
                m = [],
                g = (0, h.useRef)(null),
                v = o ? null : g.current;
              us((() => {
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
                  keys: n = t
                }, r) {
                  if (null === n) {
                    const t = new Set;
                    return e.map((e => {
                      const n = r && r.find((n => n.item === e && "leave" !== n.phase && !t.has(n)));
                      return n ? (t.add(n), n.key) : Fl++
                    }))
                  }
                  return Vi.und(n) ? e : Vi.fun(n) ? e.map(n) : Xi(n)
                }(p, r ? r() : t, v),
                b = o && g.current || [];
              us((() => Gi(b, (({
                ctrl: e,
                item: t,
                key: n
              }) => {
                Vs(e, f), Ts(u, t, n)
              }))));
              const _ = [];
              if (v && Gi(v, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = _[t] = y.indexOf(e.key)) && (m[t] = e)
                })), Gi(p, ((e, t) => {
                  m[t] || (m[t] = {
                    key: y[t],
                    item: e,
                    phase: "mount",
                    ctrl: new Sl
                  }, m[t].ctrl.item = e)
                })), _.length) {
                let e = -1;
                const {
                  leave: n
                } = r ? r() : t;
                Gi(_, ((t, r) => {
                  const o = v[r];
                  ~t ? (e = m.indexOf(o), m[e] = {
                    ...o,
                    item: p[t]
                  }) : n && m.splice(++e, 0, o)
                }))
              }
              Vi.fun(i) && m.sort(((e, t) => i(e.item, t.item)));
              let w = -a;
              const E = cs(),
                k = Is(t),
                j = new Map,
                S = (0, h.useRef)(new Map),
                C = (0, h.useRef)(!1);
              Gi(m, ((e, n) => {
                const o = e.key,
                  i = e.phase,
                  u = r ? r() : t;
                let h, f;
                const p = Ts(u.delay || 0, o);
                if ("mount" == i) h = u.enter, f = "enter";
                else {
                  const e = y.indexOf(o) < 0;
                  if ("leave" != i)
                    if (e) h = u.leave, f = "leave";
                    else {
                      if (!(h = u.update)) return;
                      f = "update"
                    }
                  else {
                    if (e) return;
                    h = u.enter, f = "enter"
                  }
                }
                if (h = Ts(h, e.item, n), h = Vi.obj(h) ? Bs(h) : {
                    to: h
                  }, !h.config) {
                  const t = d || k.config;
                  h.config = Ts(t, e.item, n, f)
                }
                w += a;
                const m = {
                  ...k,
                  delay: p + w,
                  ref: c,
                  immediate: u.immediate,
                  reset: !1,
                  ...h
                };
                if ("enter" == f && Vi.und(m.from)) {
                  const o = r ? r() : t,
                    i = Vi.und(o.initial) || v ? o.from : o.initial;
                  m.from = Ts(i, e.item, n)
                }
                const {
                  onResolve: b
                } = m;
                m.onResolve = e => {
                  Ts(b, e);
                  const t = g.current,
                    n = t.find((e => e.key === o));
                  if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == n.phase) {
                      const t = Ts(s, n.item);
                      if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (n.expired = !0, !e && r > 0) return void(r <= 2147483647 && (n.expirationId = setTimeout(E, r)))
                      }
                    }
                    e && t.some((e => e.expired)) && (S.current.delete(n), l && (C.current = !0), E())
                  }
                };
                const _ = Pl(e.ctrl, m);
                "leave" === f && l ? S.current.set(e, {
                  phase: f,
                  springs: _,
                  payload: m
                }) : j.set(e, {
                  phase: f,
                  springs: _,
                  payload: m
                })
              }));
              const x = (0, h.useContext)(Il),
                P = fs(x),
                O = x !== P && zs(x);
              us((() => {
                O && Gi(m, (e => {
                  e.ctrl.start({
                    default: x
                  })
                }))
              }), [x]), Gi(j, ((e, t) => {
                if (S.current.size) {
                  const e = m.findIndex((e => e.key === t.key));
                  m.splice(e, 1)
                }
              })), us((() => {
                Gi(S.current.size ? S.current : j, (({
                  phase: e,
                  payload: t
                }, n) => {
                  const {
                    ctrl: r
                  } = n;
                  n.phase = e, f?.add(r), O && "enter" == e && r.start({
                    default: x
                  }), t && (Us(r, t.ref), !r.ref && !f || C.current ? (r.start(t), C.current && (C.current = !1)) : r.update(t))
                }))
              }), o ? void 0 : n);
              const T = e => h.createElement(h.Fragment, null, m.map(((t, n) => {
                const {
                  springs: r
                } = j.get(t) || t.ctrl, o = e({
                  ...r
                }, t.item, t, n);
                return o && o.type ? h.createElement(o.type, {
                  ...o.props,
                  key: Vi.str(t.key) || Vi.num(t.key) ? t.key : t.ctrl.id,
                  ref: o.ref
                }) : o
              })));
              return f ? [T, f] : T
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
            [Ee] = Bl((() => ({
              ref: U,
              immediate: pe
            })), [fe, _e, ge, re]),
            ke = (({
              position: e,
              defaultPosition: t,
              onPositionChange: n,
              minZoomLevel: r,
              maxZoomLevel: o,
              zoomLevelStep: i,
              zoomLevel: a,
              defaultZoomLevel: s,
              onZoomLevelChange: l,
              onRequestedClose: u,
              onRequestingClose: c,
              onClick: d,
              onDoubleClick: f,
              gestureSettings: p = fu,
              enabled: m
            }) => {
              const g = q(),
                [v = t, y] = K({
                  prop: e,
                  defaultProp: t,
                  onChange: n
                }),
                [b = s, _] = K({
                  prop: a,
                  defaultProp: s,
                  onChange: l
                }),
                w = (0, h.useRef)(null),
                E = (0, h.useRef)(null),
                [k, j] = (0, h.useState)(!1),
                S = b > r,
                C = b < o,
                x = b > r,
                P = b === r,
                [O, T] = Bl((() => ({
                  x: v[0],
                  y: v[1],
                  scale: b / 100,
                  from: {
                    scale: r / 100,
                    x: t[0],
                    y: t[1]
                  },
                  immediate: g,
                  config: du
                }))),
                A = (e, {
                  origin: n,
                  delta: i,
                  animationConfig: a
                } = {}) => {
                  if (w.current && E.current) {
                    n || (n = [E.current.clientWidth / 2, E.current.clientHeight / 2]);
                    const s = cu(e, r, o);
                    if (s === b) return;
                    i || (i = (s - b) / 100);
                    const l = {
                      config: a || du,
                      x: t[0],
                      y: t[1],
                      scale: b,
                      immediate: g
                    };
                    if (s <= r) y(t);
                    else {
                      const e = uu(w.current, E.current, (({
                        currentTranslate: [e, t],
                        contentRef: n,
                        pinchDelta: r,
                        scale: o,
                        touchOrigin: [i, a]
                      }) => {
                        if (!n?.current) return [0, 0];
                        const {
                          height: s,
                          left: l,
                          top: u,
                          width: c
                        } = n.current?.getBoundingClientRect();
                        return [-(i - l - c / 2) / o * r + e, -(a - u - s / 2) / o * r + t]
                      })({
                        currentTranslate: v,
                        contentRef: w,
                        pinchDelta: i,
                        scale: b / 100,
                        touchOrigin: n
                      }), s);
                      l.x = e.xy[0], l.y = e.xy[1], y(e.xy)
                    }
                    l.scale = s / 100, T(l), _(s)
                  }
                },
                L = (e, t) => e.y < t.top || e.y > t.bottom || e.x < t.left || e.x > t.right,
                {
                  handleClick: N
                } = (({
                  enabled: e = !0,
                  latency: t = 300,
                  onDoubleClick: n = () => null,
                  onSingleClick: r = () => null
                }) => {
                  const o = (0, h.useRef)(0),
                    i = (0, h.useRef)();
                  return {
                    handleClick: a => {
                      e && (o.current += 1, i.current = setTimeout((() => {
                        1 === o.current ? r(a) : 2 === o.current && n(a), o.current = 0
                      }), t))
                    }
                  }
                })({
                  onDoubleClick: e => {
                    if (w.current) {
                      const t = su(w.current),
                        n = L(e, t) ? "overlay" : "content";
                      f?.({
                        target: n,
                        origin: [e.clientX, e.clientY],
                        contentBounds: t
                      })
                    }
                  },
                  onSingleClick: e => {
                    if (w.current && 0 === e.button) {
                      const t = su(w.current),
                        n = L(e, t) ? "overlay" : "content";
                      d?.({
                        target: n,
                        origin: [e.clientX, e.clientY],
                        contentBounds: t
                      })
                    }
                  },
                  latency: 350
                });
              return {
                containerRef: E,
                contentRef: w,
                canPan: S,
                isPanning: k,
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
                    config: hu,
                    x: t[0],
                    y: t[1],
                    scale: s / 100,
                    immediate: g
                  };
                  T(e)
                },
                canZoomIn: C,
                canZoomOut: x,
                zoomLevelStep: i,
                maxZoomLevel: o,
                minZoomLevel: r,
                defaultZoomLevel: s,
                eventHandlers: {
                  onDrag: ({
                    first: e,
                    memo: n = [0, 0],
                    movement: [o, i],
                    pinching: a,
                    tap: s,
                    touches: l,
                    event: u
                  }) => {
                    if (!E.current || !w.current) return;
                    if (s) return void N(u);
                    if (o && i && !k && j(!0), l > 1) return;
                    if (a || b < r) return;
                    if (e) return v;
                    const {
                      horizontalOffset: d,
                      verticalOffset: h
                    } = uu(w.current, E.current, v, b), f = o * p.dragFactor, m = i * p.dragFactor, _ = {
                      config: du,
                      x: t[0],
                      y: t[1],
                      immediate: g
                    };
                    if (b === r) {
                      const e = [n[0], n[1] + m],
                        {
                          y: t
                        } = lu(e, w.current),
                        r = cu(100 * Math.abs(t) / p.closePc, 0, 100);
                      _.config = hu, _.x = e[0], _.y = e[1], y(e), c?.(r)
                    } else {
                      const e = [au(n[0] + f, -d, d), au(n[1] + m, -h, h)];
                      _.x = e[0], _.y = e[1], y(e)
                    }
                    return T(_), n
                  },
                  onDragEnd: ({
                    memo: e
                  }) => {
                    if (E.current && w.current)
                      if (b === r) {
                        const {
                          y: e
                        } = lu(v, w.current);
                        if (cu(100 * Math.abs(e) / p.closePc, 0, 100) >= 100) u?.();
                        else {
                          const e = {
                            config: hu,
                            x: t[0],
                            y: t[1],
                            immediate: g
                          };
                          T(e), y(t), c?.(0)
                        }
                      } else if (void 0 !== e) {
                      const e = uu(w.current, E.current, v, b),
                        t = {
                          config: du,
                          x: e.xy[0],
                          y: e.xy[1],
                          immediate: g
                        };
                      T(t), j(!1), y(e.xy)
                    }
                  },
                  onPinch: ({
                    cancel: e,
                    last: t,
                    offset: [n],
                    origin: [r, o],
                    first: i
                  }) => {
                    if (w.current && E.current) {
                      if (i && j(!0), t) return void e();
                      A(100 * n, {
                        origin: [r, o],
                        delta: n - b / 100
                      })
                    }
                  },
                  onPinchEnd: () => {
                    E.current && w.current && j(!1)
                  },
                  onWheel: ({
                    last: e,
                    event: t,
                    movement: n
                  }) => {
                    if (w.current && E.current) {
                      const r = -1 * n[1];
                      if (r && k && j(!0), e) return;
                      const o = [t.clientX, t.clientY],
                        i = b / 100,
                        a = i + r / p.scrollFactor;
                      A(100 * a, {
                        delta: a - i,
                        origin: o
                      })
                    }
                  },
                  onWheelEnd: () => {
                    E.current && w.current && j(!1)
                  }
                },
                getCursor: () => P && !m ? "zoom-out" : P && C ? "zoom-in" : S ? k ? "grabbing" : "grab" : "pointer",
                enabled: m,
                animation: O
              }
            })({
              enabled: ne && fe,
              onClick: function() {
                J ? oe(!re) : me()
              },
              onDoubleClick: function(e) {
                if (ee && ke.containerRef.current && "content" === e.target)
                  if (ke.zoomLevel > ke.minZoomLevel) ke.resetZoom();
                  else {
                    const t = ((e, t, n) => {
                      const r = e.height / (n / 100);
                      return 100 * t.height / r
                    })(e.contentBounds, ke.containerRef.current.getBoundingClientRect(), ke.zoomLevel);
                    ke.zoomTo(t, {
                      animationConfig: hu
                    })
                  }
              },
              onRequestedClose: me,
              onRequestingClose: e => {
                if (ue) {
                  const t = 1,
                    n = .25,
                    r = cu(t - e * (t - n) / 100, n, t);
                  F.start({
                    opacity: r
                  });
                  const o = cu(1 - e / 100, 0, 1);
                  U.start({
                    opacity: o
                  })
                }
              },
              zoomLevel: _,
              defaultZoomLevel: w,
              minZoomLevel: E,
              maxZoomLevel: k,
              zoomLevelStep: j,
              onZoomLevelChange: S,
              defaultPosition: [0, 0],
              gestureSettings: C
            }),
            je = Bl({
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
                objectPosition: u,
                opacity: 0
              },
              onStart: () => {
                fe || ae(!1)
              },
              onRest: async () => {
                fe ? ae(!0) : (ke.resetZoom(), oe(!0))
              }
            }),
            Se = Bl({
              opacity: fe && ge && ie ? 1 : 0,
              immediate: !0,
              onRest: () => {
                fe && ue && ge && G.start({
                  opacity: 0,
                  immediate: !0
                })
              }
            }),
            Ce = [
              [G, F, U],
              [0, 0, .1]
            ];
          async function xe(e) {
            return e.complete ? Promise.resolve(e) : new Promise(((t, n) => {
              e.onload = () => t(e), e.onerror = n
            }))
          }! function(e, t, n = 1e3) {
            us((() => {
              if (t) {
                let r = 0;
                Gi(e, ((e, o) => {
                  const i = e.current;
                  if (i.length) {
                    let a = n * t[o];
                    isNaN(a) ? a = r : r = a, Gi(i, (e => {
                      Gi(e.queue, (e => {
                        const t = e.delay;
                        e.delay = e => a + Ts(t || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let t = Promise.resolve();
                Gi(e, (e => {
                  const n = e.current;
                  if (n.length) {
                    const r = n.map((e => {
                      const t = e.queue;
                      return e.queue = [], t
                    }));
                    t = t.then((() => (Gi(n, ((e, t) => Gi(r[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(fe ? Ce[0] : Ce[0].reverse(), Ce[1]);
          const Pe = T ? (0, c.jsx)(p.DX, {
            className: Km,
            ref: null,
            children: A
          }) : (0, c.jsx)("img", {
            alt: "",
            src: s,
            "aria-hidden": !0,
            loading: i,
            className: Km,
            crossOrigin: r,
            referrerPolicy: a
          });
          (0, h.useEffect)((() => {
            oe(!ee)
          }), [ee]);
          const {
            contrastMode: Oe
          } = (() => {
            const {
              colorScheme: e,
              defaultColorScheme: t,
              contrastMode: n,
              defaultContrastMode: r,
              platformScale: o,
              defaultPlatformScale: i,
              platformScaleRatios: a,
              platformScaleBreakpoints: s,
              locale: l
            } = Qr();
            return {
              colorScheme: e,
              defaultColorScheme: t,
              contrastMode: n,
              defaultContrastMode: r,
              platformScale: o,
              defaultPlatformScale: i,
              platformScaleRatios: a,
              platformScaleBreakpoints: s,
              locale: l
            }
          })(), Te = ((e, t) => [Kr.tokens, Nh("dark", t)].join(" "))(0, Oe);
          return (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(Sv, {
              open: se,
              children: (0, c.jsxs)("div", {
                className: (0, L.A)("foundry_nk7jgu_1a74xwb0", N),
                children: [(0, c.jsx)(Cv, {
                  asChild: !0,
                  children: (0, c.jsxs)(iu.button, {
                    className: "foundry_nk7jgu_1a74xwb3 foundry_nk7jgu_1d5mo5m0 foundry_nk7jgu_1a74xwb1",
                    onClick: async () => {
                      I && le(!se)
                    },
                    ref: B,
                    "data-idle": !ue,
                    style: {
                      aspectRatio: l,
                      objectPosition: u,
                      objectFit: d
                    },
                    children: [(0, c.jsx)(p.s6, {
                      children: Q.formatMessage(Oh)
                    }), Pe, we(((e, t) => y && !t && (0, c.jsx)(iu.span, {
                      className: "foundry_nk7jgu_1a74xwb5",
                      style: e,
                      children: (0, c.jsx)(z.Plus, {
                        label: ""
                      })
                    })))]
                  })
                }), (0, c.jsxs)(xv, {
                  ...!R && {
                    container: de
                  },
                  children: [(0, c.jsx)(iu.img, {
                    "aria-hidden": !0,
                    src: Nv,
                    ref: H,
                    className: "foundry_nk7jgu_1a74xwb2 foundry_nk7jgu_1a74xwb1",
                    style: {
                      aspectRatio: l,
                      backgroundPosition: u,
                      backgroundSize: d,
                      ...je
                    }
                  }), we(((o, s) => s && (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(Av, {
                      className: "foundry_nk7jgu_1a74xwb8",
                      style: o
                    }), (0, c.jsxs)(Lv, {
                      "data-testid": x,
                      onEscapeKeyDown: me,
                      onOpenAutoFocus: Rv,
                      onCloseAutoFocus: e => ((e, t) => {
                        e?.preventDefault(), t.current?.focus({
                          preventScroll: !0
                        })
                      })(e, B),
                      className: Te,
                      children: [(0, c.jsx)(p.s6, {
                        children: (0, c.jsx)(Ov, {
                          children: Q.formatMessage(Th)
                        })
                      }), (0, c.jsx)(p.s6, {
                        children: (0, c.jsx)(Tv, {
                          children: n || Q.formatMessage(Ah, {
                            alt: t
                          })
                        })
                      }), (0, c.jsx)(iu.div, {
                        className: "foundry_nk7jgu_1a74xwb6",
                        style: Se,
                        children: (0, c.jsx)(pu, {
                          ...ke,
                          children: (0, c.jsx)("img", {
                            alt: "",
                            src: e,
                            ref: M,
                            loading: i,
                            className: "foundry_nk7jgu_1a74xwba",
                            crossOrigin: r,
                            "aria-hidden": !0,
                            referrerPolicy: a,
                            style: {
                              cursor: ke.getCursor()
                            },
                            ...ve
                          })
                        })
                      }), (0, c.jsx)(iu.div, {
                        className: "foundry_nk7jgu_1a74xwb9",
                        style: Ee,
                        children: (0, c.jsx)(Wm, {
                          ...ke,
                          ref: D,
                          onClose: me,
                          caption: n,
                          onDownload: () => (e => {
                            const t = document.createElement("a");
                            t.href = e, t.download = e.substring(e.lastIndexOf("/") + 1), document.body.appendChild(t), t.click(), document.body.removeChild(t)
                          })(e),
                          showDownloadButton: b,
                          showZoomControls: P
                        })
                      })]
                    })]
                  })))]
                })]
              })
            }), !R && (0, c.jsx)("div", {
              ref: he
            })]
          })
        },
        Dv = e => {
          const t = (() => {
            const {
              locale: e
            } = Qr();
            return e
          })();
          return (0, c.jsx)(Ph, {
            messages: Lh,
            locale: t,
            children: (0, c.jsx)(Mv, {
              ...e
            })
          })
        };
      var Bv = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Hv = [" ", "Enter"],
        zv = "Select",
        [Fv, Vv, Uv] = (0, Gh.N)(zv),
        [Gv, qv] = (0, Dh.A)(zv, [Uv, Mp]),
        Xv = Mp(),
        [Wv, Kv] = Gv(zv),
        [$v, Yv] = Gv(zv),
        Zv = e => {
          const {
            __scopeSelect: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            value: a,
            defaultValue: s,
            onValueChange: l,
            dir: u,
            name: d,
            autoComplete: f,
            disabled: p,
            required: m,
            form: g
          } = e, v = Xv(t), [y, b] = h.useState(null), [_, w] = h.useState(null), [E, k] = h.useState(!1), j = (0, Hh.jH)(u), [S, C] = (0, Bh.i)({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: zv
          }), [x, P] = (0, Bh.i)({
            prop: a,
            defaultProp: s,
            onChange: l,
            caller: zv
          }), O = h.useRef(null), T = !y || g || !!y.closest("form"), [A, L] = h.useState(new Set), N = Array.from(A).map((e => e.props.value)).join(";");
          return (0, c.jsx)(Qp, {
            ...v,
            children: (0, c.jsxs)(Wv, {
              required: m,
              scope: t,
              trigger: y,
              onTriggerChange: b,
              valueNode: _,
              onValueNodeChange: w,
              valueNodeHasChildren: E,
              onValueNodeHasChildrenChange: k,
              contentId: (0, vp.B)(),
              value: x,
              onValueChange: P,
              open: S,
              onOpenChange: C,
              dir: j,
              triggerPointerDownPosRef: O,
              disabled: p,
              children: [(0, c.jsx)(Fv.Provider, {
                scope: t,
                children: (0, c.jsx)($v, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: h.useCallback((e => {
                    L((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: h.useCallback((e => {
                    L((t => {
                      const n = new Set(t);
                      return n.delete(e), n
                    }))
                  }), []),
                  children: n
                })
              }), T ? (0, c.jsxs)(Ly, {
                "aria-hidden": !0,
                required: m,
                tabIndex: -1,
                name: d,
                autoComplete: f,
                value: x,
                onChange: e => P(e.target.value),
                disabled: p,
                form: g,
                children: [void 0 === x ? (0, c.jsx)("option", {
                  value: ""
                }) : null, Array.from(A)]
              }, N) : null]
            })
          })
        };
      Zv.displayName = zv;
      var Qv = "SelectTrigger",
        Jv = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            disabled: r = !1,
            ...o
          } = e, i = Xv(n), a = Kv(Qv, n), s = a.disabled || r, l = (0, Mh.s)(t, a.onTriggerChange), u = Vv(n), d = h.useRef("touch"), [f, p, m] = Ry((e => {
            const t = u().filter((e => !e.disabled)),
              n = t.find((e => e.value === a.value)),
              r = Iy(t, e, n);
            void 0 !== r && a.onValueChange(r.value)
          })), g = e => {
            s || (a.onOpenChange(!0), m()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, c.jsx)(Jp, {
            asChild: !0,
            ...i,
            children: (0, c.jsx)(Uh.sG.button, {
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
              "data-placeholder": Ny(a.value) ? "" : void 0,
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
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || p(e.key), t && " " === e.key || Bv.includes(e.key) && (g(), e.preventDefault())
              }))
            })
          })
        }));
      Jv.displayName = Qv;
      var ey = "SelectValue",
        ty = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: i,
            placeholder: a = "",
            ...s
          } = e, l = Kv(ey, n), {
            onValueNodeHasChildrenChange: u
          } = l, d = void 0 !== i, h = (0, Mh.s)(t, l.onValueNodeChange);
          return (0, Fh.N)((() => {
            u(d)
          }), [u, d]), (0, c.jsx)(Uh.sG.span, {
            ...s,
            ref: h,
            style: {
              pointerEvents: "none"
            },
            children: Ny(l.value) ? (0, c.jsx)(c.Fragment, {
              children: a
            }) : i
          })
        }));
      ty.displayName = ey;
      var ny = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, c.jsx)(Uh.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      }));
      ny.displayName = "SelectIcon";
      var ry = e => (0, c.jsx)(nm, {
        asChild: !0,
        ...e
      });
      ry.displayName = "SelectPortal";
      var oy = "SelectContent",
        iy = h.forwardRef(((e, t) => {
          const n = Kv(oy, e.__scopeSelect),
            [r, o] = h.useState();
          if ((0, Fh.N)((() => {
              o(new DocumentFragment)
            }), []), !n.open) {
            const t = r;
            return t ? Qt.createPortal((0, c.jsx)(sy, {
              scope: e.__scopeSelect,
              children: (0, c.jsx)(Fv.Slot, {
                scope: e.__scopeSelect,
                children: (0, c.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, c.jsx)(cy, {
            ...e,
            ref: t
          })
        }));
      iy.displayName = oy;
      var ay = 10,
        [sy, ly] = Gv(oy),
        uy = (0, om.TL)("SelectContent.RemoveScroll"),
        cy = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            position: r = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            side: s,
            sideOffset: l,
            align: u,
            alignOffset: d,
            arrowPadding: f,
            collisionBoundary: p,
            collisionPadding: m,
            sticky: g,
            hideWhenDetached: v,
            avoidCollisions: y,
            ...b
          } = e, _ = Kv(oy, n), [w, E] = h.useState(null), [k, j] = h.useState(null), S = (0, Mh.s)(t, (e => E(e))), [C, x] = h.useState(null), [P, O] = h.useState(null), T = Vv(n), [A, L] = h.useState(!1), N = h.useRef(!1);
          h.useEffect((() => {
            if (w) return Xg(w)
          }), [w]), ag();
          const R = h.useCallback((e => {
              const [t, ...n] = T().map((e => e.ref.current)), [r] = n.slice(-1), o = document.activeElement;
              for (const n of e) {
                if (n === o) return;
                if (n?.scrollIntoView({
                    block: "nearest"
                  }), n === t && k && (k.scrollTop = 0), n === r && k && (k.scrollTop = k.scrollHeight), n?.focus(), document.activeElement !== o) return
              }
            }), [T, k]),
            I = h.useCallback((() => R([C, w])), [R, C, w]);
          h.useEffect((() => {
            A && I()
          }), [A, I]);
          const {
            onOpenChange: M,
            triggerPointerDownPosRef: D
          } = _;
          h.useEffect((() => {
            if (w) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (D.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (D.current?.y ?? 0))
                  }
                },
                n = n => {
                  e.x <= 10 && e.y <= 10 ? n.preventDefault() : w.contains(n.target) || M(!1), document.removeEventListener("pointermove", t), D.current = null
                };
              return null !== D.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                  capture: !0
                })
              }
            }
          }), [w, M, D]), h.useEffect((() => {
            const e = () => M(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [M]);
          const [B, H] = Ry((e => {
            const t = T().filter((e => !e.disabled)),
              n = t.find((e => e.ref.current === document.activeElement)),
              r = Iy(t, e, n);
            r && setTimeout((() => r.ref.current.focus()))
          })), z = h.useCallback(((e, t, n) => {
            const r = !N.current && !n;
            (void 0 !== _.value && _.value === t || r) && (x(e), r && (N.current = !0))
          }), [_.value]), F = h.useCallback((() => w?.focus()), [w]), V = h.useCallback(((e, t, n) => {
            const r = !N.current && !n;
            (void 0 !== _.value && _.value === t || r) && O(e)
          }), [_.value]), U = "popper" === r ? hy : dy, G = U === hy ? {
            side: s,
            sideOffset: l,
            align: u,
            alignOffset: d,
            arrowPadding: f,
            collisionBoundary: p,
            collisionPadding: m,
            sticky: g,
            hideWhenDetached: v,
            avoidCollisions: y
          } : {};
          return (0, c.jsx)(sy, {
            scope: n,
            content: w,
            viewport: k,
            onViewportChange: j,
            itemRefCallback: z,
            selectedItem: C,
            onItemLeave: F,
            itemTextRefCallback: V,
            focusSelectedItem: I,
            selectedItemText: P,
            position: r,
            isPositioned: A,
            searchRef: B,
            children: (0, c.jsx)(zg, {
              as: uy,
              allowPinchZoom: !0,
              children: (0, c.jsx)(Qm, {
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
                children: (0, c.jsx)(pp, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: a,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => _.onOpenChange(!1),
                  children: (0, c.jsx)(U, {
                    role: "listbox",
                    id: _.contentId,
                    "data-state": _.open ? "open" : "closed",
                    dir: _.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...b,
                    ...G,
                    onPlaced: () => L(!0),
                    ref: S,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: (0, Ih.m)(b.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || H(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = T().filter((e => !e.disabled));
                        let n = t.map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (n = n.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            r = n.indexOf(t);
                          n = n.slice(r + 1)
                        }
                        setTimeout((() => R(n))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      cy.displayName = "SelectContentImpl";
      var dy = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: r,
          ...o
        } = e, i = Kv(oy, n), a = ly(oy, n), [s, l] = h.useState(null), [u, d] = h.useState(null), f = (0, Mh.s)(t, (e => d(e))), p = Vv(n), m = h.useRef(!1), g = h.useRef(!0), {
          viewport: v,
          selectedItem: y,
          selectedItemText: b,
          focusSelectedItem: _
        } = a, w = h.useCallback((() => {
          if (i.trigger && i.valueNode && s && u && v && y && b) {
            const e = i.trigger.getBoundingClientRect(),
              t = u.getBoundingClientRect(),
              n = i.valueNode.getBoundingClientRect(),
              o = b.getBoundingClientRect();
            if ("rtl" !== i.dir) {
              const r = o.left - t.left,
                i = n.left - r,
                a = e.left - i,
                l = e.width + a,
                u = Math.max(l, t.width),
                c = window.innerWidth - ay,
                d = Rh(i, [ay, Math.max(ay, c - u)]);
              s.style.minWidth = l + "px", s.style.left = d + "px"
            } else {
              const r = t.right - o.right,
                i = window.innerWidth - n.right - r,
                a = window.innerWidth - e.right - i,
                l = e.width + a,
                u = Math.max(l, t.width),
                c = window.innerWidth - ay,
                d = Rh(i, [ay, Math.max(ay, c - u)]);
              s.style.minWidth = l + "px", s.style.right = d + "px"
            }
            const a = p(),
              l = window.innerHeight - 2 * ay,
              c = v.scrollHeight,
              d = window.getComputedStyle(u),
              h = parseInt(d.borderTopWidth, 10),
              f = parseInt(d.paddingTop, 10),
              g = parseInt(d.borderBottomWidth, 10),
              _ = h + f + c + parseInt(d.paddingBottom, 10) + g,
              w = Math.min(5 * y.offsetHeight, _),
              E = window.getComputedStyle(v),
              k = parseInt(E.paddingTop, 10),
              j = parseInt(E.paddingBottom, 10),
              S = e.top + e.height / 2 - ay,
              C = l - S,
              x = y.offsetHeight / 2,
              P = h + f + (y.offsetTop + x),
              O = _ - P;
            if (P <= S) {
              const e = a.length > 0 && y === a[a.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = u.clientHeight - v.offsetTop - v.offsetHeight,
                n = P + Math.max(C, x + (e ? j : 0) + t + g);
              s.style.height = n + "px"
            } else {
              const e = a.length > 0 && y === a[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(S, h + v.offsetTop + (e ? k : 0) + x) + O;
              s.style.height = t + "px", v.scrollTop = P - S + v.offsetTop
            }
            s.style.margin = `${ay}px 0`, s.style.minHeight = w + "px", s.style.maxHeight = l + "px", r?.(), requestAnimationFrame((() => m.current = !0))
          }
        }), [p, i.trigger, i.valueNode, s, u, v, y, b, i.dir, r]);
        (0, Fh.N)((() => w()), [w]);
        const [E, k] = h.useState();
        (0, Fh.N)((() => {
          u && k(window.getComputedStyle(u).zIndex)
        }), [u]);
        const j = h.useCallback((e => {
          e && !0 === g.current && (w(), _?.(), g.current = !1)
        }), [w, _]);
        return (0, c.jsx)(fy, {
          scope: n,
          contentWrapper: s,
          shouldExpandOnScrollRef: m,
          onScrollButtonChange: j,
          children: (0, c.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: E
            },
            children: (0, c.jsx)(Uh.sG.div, {
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
      dy.displayName = "SelectItemAlignedPosition";
      var hy = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = ay,
          ...i
        } = e, a = Xv(n);
        return (0, c.jsx)(em, {
          ...a,
          ...i,
          ref: t,
          align: r,
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
      hy.displayName = "SelectPopperPosition";
      var [fy, py] = Gv(oy, {}), my = "SelectViewport", gy = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          nonce: r,
          ...o
        } = e, i = ly(my, n), a = py(my, n), s = (0, Mh.s)(t, i.onViewportChange), l = h.useRef(0);
        return (0, c.jsxs)(c.Fragment, {
          children: [(0, c.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }), (0, c.jsx)(Fv.Slot, {
            scope: n,
            children: (0, c.jsx)(Uh.sG.div, {
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
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = a;
                if (r?.current && n) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * ay,
                      o = parseFloat(n.style.minHeight),
                      i = parseFloat(n.style.height),
                      a = Math.max(o, i);
                    if (a < r) {
                      const o = a + e,
                        i = Math.min(r, o),
                        s = o - i;
                      n.style.height = i + "px", "0px" === n.style.bottom && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end")
                    }
                  }
                }
                l.current = t.scrollTop
              }))
            })
          })]
        })
      }));
      gy.displayName = my;
      var vy = "SelectGroup",
        [yy, by] = Gv(vy);
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = (0, vp.B)();
        return (0, c.jsx)(yy, {
          scope: n,
          id: o,
          children: (0, c.jsx)(Uh.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
          })
        })
      })).displayName = vy;
      var _y = "SelectLabel";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = by(_y, n);
        return (0, c.jsx)(Uh.sG.div, {
          id: o.id,
          ...r,
          ref: t
        })
      })).displayName = _y;
      var wy = "SelectItem",
        [Ey, ky] = Gv(wy),
        jy = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            value: r,
            disabled: o = !1,
            textValue: i,
            ...a
          } = e, s = Kv(wy, n), l = ly(wy, n), u = s.value === r, [d, f] = h.useState(i ?? ""), [p, m] = h.useState(!1), g = (0, Mh.s)(t, (e => l.itemRefCallback?.(e, r, o))), v = (0, vp.B)(), y = h.useRef("touch"), b = () => {
            o || (s.onValueChange(r), s.onOpenChange(!1))
          };
          if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, c.jsx)(Ey, {
            scope: n,
            value: r,
            disabled: o,
            textId: v,
            isSelected: u,
            onItemTextChange: h.useCallback((e => {
              f((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, c.jsx)(Fv.ItemSlot, {
              scope: n,
              value: r,
              disabled: o,
              textValue: d,
              children: (0, c.jsx)(Uh.sG.div, {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": u && p,
                "data-state": u ? "checked" : "unchecked",
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
                  "" !== l.searchRef?.current && " " === e.key || (Hv.includes(e.key) && b(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      jy.displayName = wy;
      var Sy = "SelectItemText",
        Cy = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            ...i
          } = e, a = Kv(Sy, n), s = ly(Sy, n), l = ky(Sy, n), u = Yv(Sy, n), [d, f] = h.useState(null), p = (0, Mh.s)(t, (e => f(e)), l.onItemTextChange, (e => s.itemTextRefCallback?.(e, l.value, l.disabled))), m = d?.textContent, g = h.useMemo((() => (0, c.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: m
          }, l.value)), [l.disabled, l.value, m]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: y
          } = u;
          return (0, Fh.N)((() => (v(g), () => y(g))), [v, y, g]), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(Uh.sG.span, {
              id: l.textId,
              ...i,
              ref: p
            }), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? Qt.createPortal(i.children, a.valueNode) : null]
          })
        }));
      Cy.displayName = Sy;
      var xy = "SelectItemIndicator";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return ky(xy, n).isSelected ? (0, c.jsx)(Uh.sG.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      })).displayName = xy;
      var Py = "SelectScrollUpButton";
      h.forwardRef(((e, t) => {
        const n = ly(Py, e.__scopeSelect),
          r = py(Py, e.__scopeSelect),
          [o, i] = h.useState(!1),
          a = (0, Mh.s)(t, r.onScrollButtonChange);
        return (0, Fh.N)((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, c.jsx)(Ty, {
          ...e,
          ref: a,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      })).displayName = Py;
      var Oy = "SelectScrollDownButton";
      h.forwardRef(((e, t) => {
        const n = ly(Oy, e.__scopeSelect),
          r = py(Oy, e.__scopeSelect),
          [o, i] = h.useState(!1),
          a = (0, Mh.s)(t, r.onScrollButtonChange);
        return (0, Fh.N)((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              i(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, c.jsx)(Ty, {
          ...e,
          ref: a,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      })).displayName = Oy;
      var Ty = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: r,
          ...o
        } = e, i = ly("SelectScrollButton", n), a = h.useRef(null), s = Vv(n), l = h.useCallback((() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }), []);
        return h.useEffect((() => () => l()), [l]), (0, Fh.N)((() => {
          const e = s().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [s]), (0, c.jsx)(Uh.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, Ih.m)(o.onPointerDown, (() => {
            null === a.current && (a.current = window.setInterval(r, 50))
          })),
          onPointerMove: (0, Ih.m)(o.onPointerMove, (() => {
            i.onItemLeave?.(), null === a.current && (a.current = window.setInterval(r, 50))
          })),
          onPointerLeave: (0, Ih.m)(o.onPointerLeave, (() => {
            l()
          }))
        })
      }));
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, c.jsx)(Uh.sG.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var Ay = "SelectArrow";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Xv(n), i = Kv(Ay, n), a = ly(Ay, n);
        return i.open && "popper" === a.position ? (0, c.jsx)(tm, {
          ...o,
          ...r,
          ref: t
        }) : null
      })).displayName = Ay;
      var Ly = h.forwardRef((({
        __scopeSelect: e,
        value: t,
        ...n
      }, r) => {
        const o = h.useRef(null),
          i = (0, Mh.s)(r, o),
          a = zh(t);
        return h.useEffect((() => {
          const e = o.current;
          if (!e) return;
          const n = window.HTMLSelectElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, "value").set;
          if (a !== t && r) {
            const n = new Event("change", {
              bubbles: !0
            });
            r.call(e, t), e.dispatchEvent(n)
          }
        }), [a, t]), (0, c.jsx)(Uh.sG.select, {
          ...n,
          style: {
            ...im,
            ...n.style
          },
          ref: i,
          defaultValue: t
        })
      }));

      function Ny(e) {
        return "" === e || void 0 === e
      }

      function Ry(e) {
        const t = cp(e),
          n = h.useRef(""),
          r = h.useRef(0),
          o = h.useCallback((e => {
            const o = n.current + e;
            t(o),
              function e(t) {
                n.current = t, window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout((() => e("")), 1e3))
              }(o)
          }), [t]),
          i = h.useCallback((() => {
            n.current = "", window.clearTimeout(r.current)
          }), []);
        return h.useEffect((() => () => window.clearTimeout(r.current)), []), [n, o, i]
      }

      function Iy(e, t, n) {
        const r = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === r.length && (i = i.filter((e => e !== n)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(r.toLowerCase())));
        return l !== n ? l : void 0
      }
      Ly.displayName = "SelectBubbleInput";
      var My = Zv,
        Dy = Jv,
        By = ty,
        Hy = ny,
        zy = ry,
        Fy = iy,
        Vy = gy,
        Uy = jy,
        Gy = Cy,
        qy = "ScrollArea",
        [Xy, Wy] = (0, Dh.A)(qy),
        [Ky, $y] = Xy(qy),
        Yy = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            type: r = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...a
          } = e, [s, l] = h.useState(null), [u, d] = h.useState(null), [f, p] = h.useState(null), [m, g] = h.useState(null), [v, y] = h.useState(null), [b, _] = h.useState(0), [w, E] = h.useState(0), [k, j] = h.useState(!1), [S, C] = h.useState(!1), x = (0, Mh.s)(t, (e => l(e))), P = (0, Hh.jH)(o);
          return (0, c.jsx)(Ky, {
            scope: n,
            type: r,
            dir: P,
            scrollHideDelay: i,
            scrollArea: s,
            viewport: u,
            onViewportChange: d,
            content: f,
            onContentChange: p,
            scrollbarX: m,
            onScrollbarXChange: g,
            scrollbarXEnabled: k,
            onScrollbarXEnabledChange: j,
            scrollbarY: v,
            onScrollbarYChange: y,
            scrollbarYEnabled: S,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: _,
            onCornerHeightChange: E,
            children: (0, c.jsx)(Uh.sG.div, {
              dir: P,
              ...a,
              ref: x,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": b + "px",
                "--radix-scroll-area-corner-height": w + "px",
                ...e.style
              }
            })
          })
        }));
      Yy.displayName = qy;
      var Zy = "ScrollAreaViewport",
        Qy = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            children: r,
            nonce: o,
            ...i
          } = e, a = $y(Zy, n), s = h.useRef(null), l = (0, Mh.s)(t, s, a.onViewportChange);
          return (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, c.jsx)(Uh.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...i,
              ref: l,
              style: {
                overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, c.jsx)("div", {
                ref: a.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: r
              })
            })]
          })
        }));
      Qy.displayName = Zy;
      var Jy = "ScrollAreaScrollbar",
        eb = h.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = $y(Jy, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: a
          } = o, s = "horizontal" === e.orientation;
          return h.useEffect((() => (s ? i(!0) : a(!0), () => {
            s ? i(!1) : a(!1)
          })), [s, i, a]), "hover" === o.type ? (0, c.jsx)(tb, {
            ...r,
            ref: t,
            forceMount: n
          }) : "scroll" === o.type ? (0, c.jsx)(nb, {
            ...r,
            ref: t,
            forceMount: n
          }) : "auto" === o.type ? (0, c.jsx)(rb, {
            ...r,
            ref: t,
            forceMount: n
          }) : "always" === o.type ? (0, c.jsx)(ob, {
            ...r,
            ref: t
          }) : null
        }));
      eb.displayName = Jy;
      var tb = h.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = $y(Jy, e.__scopeScrollArea), [i, a] = h.useState(!1);
          return h.useEffect((() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const n = () => {
                  window.clearTimeout(t), a(!0)
                },
                r = () => {
                  t = window.setTimeout((() => a(!1)), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", n), e.addEventListener("pointerleave", r), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", n), e.removeEventListener("pointerleave", r)
              }
            }
          }), [o.scrollArea, o.scrollHideDelay]), (0, c.jsx)(rm.C, {
            present: n || i,
            children: (0, c.jsx)(rb, {
              "data-state": i ? "visible" : "hidden",
              ...r,
              ref: t
            })
          })
        })),
        nb = h.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = $y(Jy, e.__scopeScrollArea), i = "horizontal" === e.orientation, a = Eb((() => l("SCROLL_END")), 100), [s, l] = (u = {
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
          }, h.useReducer(((e, t) => u[e][t] ?? e), "hidden"));
          var u;
          return h.useEffect((() => {
            if ("idle" === s) {
              const e = window.setTimeout((() => l("HIDE")), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [s, o.scrollHideDelay, l]), h.useEffect((() => {
            const e = o.viewport,
              t = i ? "scrollLeft" : "scrollTop";
            if (e) {
              let n = e[t];
              const r = () => {
                const r = e[t];
                n !== r && (l("SCROLL"), a()), n = r
              };
              return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }), [o.viewport, i, l, a]), (0, c.jsx)(rm.C, {
            present: n || "hidden" !== s,
            children: (0, c.jsx)(ob, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...r,
              ref: t,
              onPointerEnter: (0, Ih.m)(e.onPointerEnter, (() => l("POINTER_ENTER"))),
              onPointerLeave: (0, Ih.m)(e.onPointerLeave, (() => l("POINTER_LEAVE")))
            })
          })
        })),
        rb = h.forwardRef(((e, t) => {
          const n = $y(Jy, e.__scopeScrollArea),
            {
              forceMount: r,
              ...o
            } = e,
            [i, a] = h.useState(!1),
            s = "horizontal" === e.orientation,
            l = Eb((() => {
              if (n.viewport) {
                const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                a(s ? e : t)
              }
            }), 10);
          return kb(n.viewport, l), kb(n.content, l), (0, c.jsx)(rm.C, {
            present: r || i,
            children: (0, c.jsx)(ob, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        ob = h.forwardRef(((e, t) => {
          const {
            orientation: n = "vertical",
            ...r
          } = e, o = $y(Jy, e.__scopeScrollArea), i = h.useRef(null), a = h.useRef(0), [s, l] = h.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), u = gb(s.viewport, s.content), d = {
            ...r,
            sizes: s,
            onSizesChange: l,
            hasThumb: Boolean(u > 0 && u < 1),
            onThumbChange: e => i.current = e,
            onThumbPointerUp: () => a.current = 0,
            onThumbPointerDown: e => a.current = e
          };

          function f(e, t) {
            return function(e, t, n, r = "ltr") {
              const o = vb(n),
                i = t || o / 2,
                a = o - i,
                s = n.scrollbar.paddingStart + i,
                l = n.scrollbar.size - n.scrollbar.paddingEnd - a,
                u = n.content - n.viewport;
              return bb([s, l], "ltr" === r ? [0, u] : [-1 * u, 0])(e)
            }(e, a.current, s, t)
          }
          return "horizontal" === n ? (0, c.jsx)(ib, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = yb(o.viewport.scrollLeft, s, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = f(e, o.dir))
            }
          }) : "vertical" === n ? (0, c.jsx)(ab, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = yb(o.viewport.scrollTop, s);
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
        ib = h.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, i = $y(Jy, e.__scopeScrollArea), [a, s] = h.useState(), l = h.useRef(null), u = (0, Mh.s)(t, l, i.onScrollbarXChange);
          return h.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, c.jsx)(ub, {
            "data-orientation": "horizontal",
            ...o,
            ref: u,
            sizes: n,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": vb(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
              if (i.viewport) {
                const r = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(r), _b(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && r({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: mb(a.paddingLeft),
                  paddingEnd: mb(a.paddingRight)
                }
              })
            }
          })
        })),
        ab = h.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, i = $y(Jy, e.__scopeScrollArea), [a, s] = h.useState(), l = h.useRef(null), u = (0, Mh.s)(t, l, i.onScrollbarYChange);
          return h.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, c.jsx)(ub, {
            "data-orientation": "vertical",
            ...o,
            ref: u,
            sizes: n,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": vb(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
              if (i.viewport) {
                const r = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(r), _b(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && r({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: mb(a.paddingTop),
                  paddingEnd: mb(a.paddingBottom)
                }
              })
            }
          })
        })),
        [sb, lb] = Xy(Jy),
        ub = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            sizes: r,
            hasThumb: o,
            onThumbChange: i,
            onThumbPointerUp: a,
            onThumbPointerDown: s,
            onThumbPositionChange: l,
            onDragScroll: u,
            onWheelScroll: d,
            onResize: f,
            ...p
          } = e, m = $y(Jy, n), [g, v] = h.useState(null), y = (0, Mh.s)(t, (e => v(e))), b = h.useRef(null), _ = h.useRef(""), w = m.viewport, E = r.content - r.viewport, k = cp(d), j = cp(l), S = Eb(f, 10);

          function C(e) {
            if (b.current) {
              const t = e.clientX - b.current.left,
                n = e.clientY - b.current.top;
              u({
                x: t,
                y: n
              })
            }
          }
          return h.useEffect((() => {
            const e = e => {
              const t = e.target,
                n = g?.contains(t);
              n && k(e, E)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [w, g, E, k]), h.useEffect(j, [r, j]), kb(g, S), kb(m.content, S), (0, c.jsx)(sb, {
            scope: n,
            scrollbar: g,
            hasThumb: o,
            onThumbChange: cp(i),
            onThumbPointerUp: cp(a),
            onThumbPositionChange: j,
            onThumbPointerDown: cp(s),
            children: (0, c.jsx)(Uh.sG.div, {
              ...p,
              ref: y,
              style: {
                position: "absolute",
                ...p.style
              },
              onPointerDown: (0, Ih.m)(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = g.getBoundingClientRect(), _.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), C(e))
              })),
              onPointerMove: (0, Ih.m)(e.onPointerMove, C),
              onPointerUp: (0, Ih.m)(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = _.current, m.viewport && (m.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        cb = "ScrollAreaThumb",
        db = h.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = lb(cb, e.__scopeScrollArea);
          return (0, c.jsx)(rm.C, {
            present: n || o.hasThumb,
            children: (0, c.jsx)(hb, {
              ref: t,
              ...r
            })
          })
        })),
        hb = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            style: r,
            ...o
          } = e, i = $y(cb, n), a = lb(cb, n), {
            onThumbPositionChange: s
          } = a, l = (0, Mh.s)(t, (e => a.onThumbChange(e))), u = h.useRef(void 0), d = Eb((() => {
            u.current && (u.current(), u.current = void 0)
          }), 100);
          return h.useEffect((() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (d(), !u.current) {
                  const t = wb(e, s);
                  u.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [i.viewport, d, s]), (0, c.jsx)(Uh.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...r
            },
            onPointerDownCapture: (0, Ih.m)(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = e.clientY - t.top;
              a.onThumbPointerDown({
                x: n,
                y: r
              })
            })),
            onPointerUp: (0, Ih.m)(e.onPointerUp, a.onThumbPointerUp)
          })
        }));
      db.displayName = cb;
      var fb = "ScrollAreaCorner";
      h.forwardRef(((e, t) => {
        const n = $y(fb, e.__scopeScrollArea),
          r = Boolean(n.scrollbarX && n.scrollbarY);
        return "scroll" !== n.type && r ? (0, c.jsx)(pb, {
          ...e,
          ref: t
        }) : null
      })).displayName = fb;
      var pb = h.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: n,
          ...r
        } = e, o = $y(fb, n), [i, a] = h.useState(0), [s, l] = h.useState(0), u = Boolean(i && s);
        return kb(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        })), kb(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        })), u ? (0, c.jsx)(Uh.sG.div, {
          ...r,
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

      function mb(e) {
        return e ? parseInt(e, 10) : 0
      }

      function gb(e, t) {
        const n = e / t;
        return isNaN(n) ? 0 : n
      }

      function vb(e) {
        const t = gb(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18)
      }

      function yb(e, t, n = "ltr") {
        const r = vb(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - r,
          l = Rh(e, "ltr" === n ? [0, a] : [-1 * a, 0]);
        return bb([0, a], [0, s])(l)
      }

      function bb(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }

      function _b(e, t) {
        return e > 0 && e < t
      }
      var wb = (e, t = () => {}) => {
        let n = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          r = 0;
        return function o() {
          const i = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            a = n.left !== i.left,
            s = n.top !== i.top;
          (a || s) && t(), n = i, r = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(r)
      };

      function Eb(e, t) {
        const n = cp(e),
          r = h.useRef(0);
        return h.useEffect((() => () => window.clearTimeout(r.current)), []), h.useCallback((() => {
          window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
        }), [n, t])
      }

      function kb(e, t) {
        const n = cp(t);
        (0, Fh.N)((() => {
          let t = 0;
          if (e) {
            const r = new ResizeObserver((() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
            }));
            return r.observe(e), () => {
              window.cancelAnimationFrame(t), r.unobserve(e)
            }
          }
        }), [e, n])
      }
      var jb = Yy,
        Sb = Qy,
        Cb = eb,
        xb = db,
        Pb = "foundry_nk7jgu_uaq1gwo";
      const Ob = (0, h.forwardRef)((({
          children: e,
          label: t,
          hint: n,
          placeholder: r,
          description: o,
          testId: i,
          hideLabel: a,
          hideDescription: s = !1,
          hideRequiredAsterisk: l,
          hideDividers: u,
          errorMessage: d,
          value: f,
          defaultValue: m,
          onValueChange: g,
          open: v,
          defaultOpen: y,
          onOpenChange: b,
          isRequired: _,
          isDisabled: w,
          isReadOnly: E,
          className: k,
          labelledBy: j,
          renderPortal: S,
          container: C
        }, x) => {
          const P = G((0, h.useRef)(null), x),
            O = (0, h.useId)(),
            T = (0, h.useId)(),
            [A = !1, N] = K({
              prop: v,
              defaultProp: y,
              onChange: b
            });
          return (0, c.jsxs)("div", {
            className: (0, L.$)("foundry_nk7jgu_uaq1gw0", k),
            children: [(t && !a || n) && (0, c.jsxs)("div", {
              className: "foundry_nk7jgu_uaq1gw1",
              children: [(0, c.jsx)(p.s6, {
                enabled: !!a,
                children: (0, c.jsx)(H, {
                  size: "SM",
                  className: (0, L.$)("foundry_nk7jgu_uaq1gw2", w && Pb),
                  asChild: !0,
                  children: (0, c.jsxs)("label", {
                    id: O,
                    children: [t, _ && !l && (0, c.jsx)("span", {
                      className: "foundry_nk7jgu_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), n && (0, c.jsx)(H, {
                size: "XS",
                className: (0, L.$)("foundry_nk7jgu_uaq1gw3", w && Pb),
                children: n
              })]
            }), (0, c.jsxs)(My, {
              required: _,
              disabled: w,
              open: A,
              onOpenChange: () => N(!E && !A),
              value: f,
              defaultValue: m,
              onValueChange: g,
              children: [(0, c.jsxs)(Dy, {
                className: (0, L.$)("foundry_nk7jgu_uaq1gw5 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd10", !!d && "foundry_nk7jgu_uaq1gw7", E && "foundry_nk7jgu_uaq1gw6"),
                ref: P,
                "data-testid": i,
                "aria-activedescendant": f,
                "aria-labelledby": j || O,
                "aria-controls": T,
                children: [(0, c.jsx)("span", {
                  className: "foundry_nk7jgu_uaq1gw8",
                  children: (0, c.jsx)(By, {
                    placeholder: r,
                    "aria-label": f
                  })
                }), (0, c.jsx)(Hy, {
                  asChild: !0,
                  className: (0, L.$)("foundry_nk7jgu_uaq1gw9", (E || w) && "foundry_nk7jgu_uaq1gwa"),
                  children: A ? (0, c.jsx)(z.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, c.jsx)(z.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, c.jsx)(Ab, {
                renderPortal: S,
                container: C,
                children: (0, c.jsx)(Fy, {
                  id: T,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_nk7jgu_uaq1gwb",
                  children: (0, c.jsxs)(jb, {
                    className: "foundry_nk7jgu_uaq1gwk",
                    type: "auto",
                    children: [(0, c.jsx)(Vy, {
                      className: (0, L.$)("foundry_nk7jgu_uaq1gwc", u && "foundry_nk7jgu_uaq1gwd"),
                      asChild: !0,
                      children: (0, c.jsx)(Sb, {
                        className: "foundry_nk7jgu_uaq1gwl",
                        style: {
                          overflowY: void 0
                        },
                        children: e
                      })
                    }), (0, c.jsx)(Cb, {
                      className: "foundry_nk7jgu_uaq1gwm",
                      orientation: "vertical",
                      children: (0, c.jsx)(xb, {
                        className: "foundry_nk7jgu_uaq1gwn"
                      })
                    })]
                  })
                })
              })]
            }), o && (0, c.jsx)(p.s6, {
              enabled: !!d || s || 0 === o.length,
              children: (0, c.jsx)(H, {
                size: "SM",
                className: (0, L.$)("foundry_nk7jgu_uaq1gwf", w && Pb),
                children: o
              })
            }), d && (0, c.jsxs)(H, {
              size: "SM",
              appearance: "bold",
              className: "foundry_nk7jgu_uaq1gwg",
              children: [(0, c.jsx)(z.X, {
                size: "MD",
                label: "",
                className: "foundry_nk7jgu_uaq1gwh"
              }), d]
            })]
          })
        })),
        Tb = (0, h.forwardRef)((({
          label: e,
          value: t,
          icon: n,
          iconLabel: r,
          iconPosition: o,
          isDisabled: i,
          testId: a
        }, s) => {
          const l = G((0, h.useRef)(null), s),
            u = n && z[n];
          return (0, c.jsxs)(Uy, {
            value: t,
            className: "foundry_nk7jgu_uaq1gwe foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd10",
            ref: l,
            disabled: i,
            "data-testid": a,
            children: [u && "left" === o && (0, c.jsx)(u, {
              className: "foundry_nk7jgu_uaq1gwi",
              label: r || "",
              size: "LG"
            }), (0, c.jsx)(Gy, {
              asChild: !0,
              children: (0, c.jsx)("span", {
                className: "foundry_nk7jgu_uaq1gwp",
                children: e
              })
            }), u && "right" === o && (0, c.jsx)(u, {
              label: r || "",
              size: "LG",
              className: "foundry_nk7jgu_uaq1gwj"
            })]
          })
        })),
        Ab = ({
          renderPortal: e = !0,
          container: t,
          children: n
        }) => e ? (0, c.jsx)(zy, {
          container: t,
          children: n
        }) : (0, c.jsx)(c.Fragment, {
          children: n
        }),
        Lb = ({
          color: e = "currentColor"
        }) => (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, c.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Nb = ({
          color: e = "currentColor"
        }) => (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, c.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Rb = ({
          color: e = "currentColor"
        }) => (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, c.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        Ib = ({
          color: e = "currentColor"
        }) => (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, c.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        Mb = ({
          color: e = "currentColor"
        }) => (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, c.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Db = ({
          color: e = "currentColor"
        }) => (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, c.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function Bb(e = {}) {
        let {
          isReadOnly: t
        } = e, [n, r] = Se(e.isSelected, e.defaultSelected || !1, e.onChange);
        return {
          isSelected: n,
          setSelected: function(e) {
            t || r(e)
          },
          toggle: function() {
            t || r(!n)
          }
        }
      }

      function Hb(e, t, n) {
        let {
          isDisabled: r = !1,
          isReadOnly: o = !1,
          value: i,
          name: a,
          children: s,
          "aria-label": l,
          "aria-labelledby": u,
          validationState: c = "valid",
          isInvalid: d
        } = e, {
          pressProps: h,
          isPressed: f
        } = nn({
          isDisabled: r
        }), {
          pressProps: p,
          isPressed: m
        } = nn({
          onPress() {
            var e;
            t.toggle(), null === (e = n.current) || void 0 === e || e.focus()
          },
          isDisabled: r || o
        }), {
          focusableProps: g
        } = _t(e, n), v = je(h, g), y = ne(e, {
          labelable: !0
        });
        return ie(n, t.isSelected, t.setSelected), {
          labelProps: je(p, {
            onClick: e => e.preventDefault()
          }),
          inputProps: je(y, {
            "aria-invalid": d || "invalid" === c || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected(e.target.checked)
            },
            disabled: r,
            ...null == i ? {} : {
              value: i
            },
            name: a,
            type: "checkbox",
            ...v
          }),
          isSelected: t.isSelected,
          isPressed: f || m,
          isDisabled: r,
          isReadOnly: o,
          isInvalid: d || "invalid" === c
        }
      }

      function zb(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Fb(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Vb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fb(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = zb(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fb(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Ub(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Gb = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        qb = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Vb(Vb({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Gb(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ub(e.variantClassNames, (e => Ub(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Xb = qb({
          defaultClassName: "foundry_nk7jgu_11gbdty6 foundry_nk7jgu_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_11gbdty7",
              LG: "foundry_nk7jgu_11gbdty8",
              XL: "foundry_nk7jgu_11gbdty9"
            },
            appearance: {
              primary: "foundry_nk7jgu_11gbdtya",
              secondary: "foundry_nk7jgu_11gbdtyb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Wb = qb({
          defaultClassName: "foundry_nk7jgu_11gbdty2",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_11gbdty3",
              LG: "foundry_nk7jgu_11gbdty4",
              XL: "foundry_nk7jgu_11gbdty5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Kb = qb({
          defaultClassName: "foundry_nk7jgu_11gbdtyi",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
              LG: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdy foundry_nk7jgu_tdsdcd10",
              XL: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd10"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        $b = qb({
          defaultClassName: "foundry_nk7jgu_11gbdtyd",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_11gbdtye",
              LG: "foundry_nk7jgu_11gbdtyf",
              XL: "foundry_nk7jgu_11gbdtyg"
            },
            isDisabled: {
              true: "foundry_nk7jgu_11gbdtyh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Yb = (0, h.forwardRef)((({
          isChecked: e,
          defaultChecked: t,
          onCheckedChange: n,
          label: o,
          description: i,
          size: a = "MD",
          appearance: s = "primary",
          isIndeterminate: l,
          hideLabel: u,
          testId: f,
          errorMessage: m,
          className: g,
          ...v
        }, y) => {
          const b = (0, h.useRef)(null),
            _ = G(b, y),
            w = (0, h.useId)(),
            {
              setSelected: E,
              ...k
            } = Bb({
              isSelected: e,
              defaultSelected: t,
              onChange: n
            }),
            {
              inputProps: j,
              isDisabled: S,
              isReadOnly: C,
              isInvalid: x,
              isSelected: P
            } = function(e, t, n) {
              let r = Pt({
                  ...e,
                  value: t.isSelected
                }),
                {
                  isInvalid: o,
                  validationErrors: i,
                  validationDetails: a
                } = r.displayValidation,
                {
                  labelProps: s,
                  inputProps: l,
                  isSelected: u,
                  isPressed: c,
                  isDisabled: d,
                  isReadOnly: f
                } = Hb({
                  ...e,
                  isInvalid: o
                }, t, n);
              wt(e, r, n);
              let {
                isIndeterminate: p,
                isRequired: m,
                validationBehavior: g = "aria"
              } = e;
              (0, h.useEffect)((() => {
                n.current && (n.current.indeterminate = !!p)
              }));
              let {
                pressProps: v
              } = nn({
                isDisabled: d || f,
                onPress() {
                  let {
                    [xt]: t
                  } = e, {
                    commitValidation: n
                  } = t || r;
                  n()
                }
              });
              return {
                labelProps: je(s, v),
                inputProps: {
                  ...l,
                  checked: u,
                  "aria-required": m && "aria" === g || void 0,
                  required: m && "native" === g
                },
                isSelected: u,
                isPressed: c,
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
              ...k,
              setSelected: v.isReadOnly ? () => !1 : E
            }, b),
            O = (0, d.v6)({
              ...j,
              "aria-checked": P,
              className: g
            }, {
              className: "foundry_nk7jgu_11gbdty1"
            }),
            T = l ? r[`Dash${a}`] : r[`Check${a}`],
            A = x && !!m;
          return (0, c.jsxs)("label", {
            className: "foundry_nk7jgu_11gbdty0",
            children: [(0, c.jsxs)("div", {
              className: Wb({
                size: a
              }),
              children: [(0, c.jsx)(p.s6, {
                children: (0, c.jsx)("input", {
                  ...O,
                  ref: _
                })
              }), (0, c.jsx)("div", {
                className: Xb({
                  size: a,
                  appearance: s
                }),
                "aria-hidden": "true",
                "data-state": l ? "mixed" : P ? "checked" : "unchecked",
                "data-disabled": S || C,
                "data-testid": f,
                children: (0, c.jsx)("span", {
                  className: "foundry_nk7jgu_11gbdtyc",
                  children: (P || l) && (0, c.jsx)(T, {
                    "aria-hidden": "true"
                  })
                })
              })]
            }), (0, c.jsx)(p.s6, {
              enabled: !!u,
              children: (0, c.jsxs)("div", {
                className: $b({
                  size: a,
                  isDisabled: S
                }),
                children: [(0, c.jsx)("p", {
                  className: Kb({
                    size: a
                  }),
                  children: o
                }), i && !A && (0, c.jsx)("p", {
                  className: "foundry_nk7jgu_11gbdtym foundry_nk7jgu_8kowh41 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
                  children: i
                }), A && (0, c.jsx)("p", {
                  className: "foundry_nk7jgu_11gbdtyn foundry_nk7jgu_11gbdtym foundry_nk7jgu_8kowh41 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
                  children: m
                })]
              })
            })]
          })
        })),
        Zb = new WeakMap;

      function Qb(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = se(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: n,
            visibility: r
          } = e.style, o = "none" !== n && "hidden" !== r && "collapse" !== r;
          if (o) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: n,
              visibility: r
            } = t(e);
            o = "none" !== n && "hidden" !== r && "collapse" !== r
          }
          return o
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || Qb(e.parentElement, e))
      }

      function Jb(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function e_(e, t, n) {
        let r = (null == t ? void 0 : t.tabbable) ? Le : Ae,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = ae(o),
          a = function(e, t, n, r) {
            return e.createTreeWalker(t, n, r)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !r(e) || !Qb(e) || n && !Jb(e, n) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a
      }
      class t_ {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new n_({
            scopeRef: e
          });
          r.addChild(o), o.parent = r, this.fastMap.set(e, o), n && (o.nodeToRestore = n)
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let n = t.parent;
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && Jb(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n && (n.removeChild(t), r.size > 0 && r.forEach((e => n && n.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new t_;
          var n;
          for (let r of this.traverse()) t.addTreeNode(r.scopeRef, null !== (n = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, r.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new n_({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class n_ {
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
      new t_;
      const r_ = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        o_ = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function i_(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return r_.has(t.script)
        }
        let t = e.split("-")[0];
        return o_.has(t)
      }
      const a_ = Symbol.for("react-aria.i18n.locale");

      function s_() {
        let e = "undefined" != typeof window && window[a_] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: i_(e) ? "rtl" : "ltr"
        }
      }
      let l_ = s_(),
        u_ = new Set;

      function c_() {
        l_ = s_();
        for (let e of u_) e(l_)
      }
      const d_ = h.createContext(null);

      function h_() {
        let e = function() {
          let e = ve(),
            [t, n] = (0, h.useState)(l_);
          return (0, h.useEffect)((() => (0 === u_.size && window.addEventListener("languagechange", c_), u_.add(n), () => {
            u_.delete(n), 0 === u_.size && window.removeEventListener("languagechange", c_)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, h.useContext)(d_) || e
      }

      function f_(e, t) {
        let {
          name: n,
          isReadOnly: r,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: s = "aria"
        } = e, {
          direction: l
        } = h_(), {
          isInvalid: u,
          validationErrors: c,
          validationDetails: d
        } = t.displayValidation, {
          labelProps: f,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: g
        } = xe({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || c
        }), v = ne(e, {
          labelable: !0
        }), {
          focusWithinProps: y
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: n,
            onFocusWithin: r,
            onFocusWithinChange: o
          } = e, i = (0, h.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: a,
            removeAllGlobalListeners: s
          } = Wt(), l = (0, h.useCallback)((e => {
            e.currentTarget.contains(e.target) && i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, s(), n && n(e), o && o(!1))
          }), [n, o, i, s]), u = De(l), c = (0, h.useCallback)((e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = ae(e.target),
              n = dt(t);
            if (!i.current.isFocusWithin && n === ht(e.nativeEvent)) {
              r && r(e), o && o(!0), i.current.isFocusWithin = !0, u(e);
              let n = e.currentTarget;
              a(t, "focus", (e => {
                if (i.current.isFocusWithin && !ct(n, e.target)) {
                  let r = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  Me(r, n);
                  let o = Ie(r);
                  l(o)
                }
              }), {
                capture: !0
              })
            }
          }), [r, o, u, a, l]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: c,
              onBlur: l
            }
          }
        }({
          onBlurWithin(n) {
            var r;
            null === (r = e.onBlur) || void 0 === r || r.call(e, n), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = we(n);
        return Zb.set(t, {
          name: b,
          descriptionId: m.id,
          errorMessageId: g.id,
          validationBehavior: s
        }), {
          radioGroupProps: je(v, {
            role: "radiogroup",
            onKeyDown: e => {
              let n;
              switch (e.key) {
                case "ArrowRight":
                  n = "rtl" === l && "vertical" !== a ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  n = "rtl" === l && "vertical" !== a ? "next" : "prev";
                  break;
                case "ArrowDown":
                  n = "next";
                  break;
                case "ArrowUp":
                  n = "prev";
                  break;
                default:
                  return
              }
              e.preventDefault();
              let r, o = e_(e.currentTarget, {
                from: e.target
              });
              "next" === n ? (r = o.nextNode(), r || (o.currentNode = e.currentTarget, r = o.firstChild())) : (r = o.previousNode(), r || (o.currentNode = e.currentTarget, r = o.lastChild())), r && (r.focus(), t.setSelectedValue(r.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": r || void 0,
            "aria-required": o || void 0,
            "aria-disabled": i || void 0,
            "aria-orientation": a,
            ...p,
            ...y
          }),
          labelProps: f,
          descriptionProps: m,
          errorMessageProps: g,
          isInvalid: u,
          validationErrors: c,
          validationDetails: d
        }
      }
      let p_ = Math.round(1e10 * Math.random()),
        m_ = 0;

      function g_(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function v_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function y_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? v_(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = g_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function b_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var __ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        w_ = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = y_(y_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) __(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return b_(e.variantClassNames, (e => b_(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        E_ = w_({
          defaultClassName: "foundry_nk7jgu_njguqn1",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_njguqn2",
              LG: "foundry_nk7jgu_njguqn3",
              XL: "foundry_nk7jgu_njguqn4"
            },
            orientation: {
              horizontal: "foundry_nk7jgu_njguqn5",
              vertical: "foundry_nk7jgu_njguqn6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const k_ = (0, h.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        j_ = (0, h.forwardRef)((({
          label: e,
          description: t,
          size: n = "MD",
          appearance: r = "primary",
          hideLabel: o,
          isRequired: i,
          hideRequiredAsterisk: a,
          testId: s,
          className: l,
          errorMessage: u,
          orientation: f = "vertical",
          ...m
        }, g) => {
          const {
            children: v
          } = m, y = G((0, h.useRef)(null), g), b = (0, h.useId)(), _ = function(e) {
            let t = (0, h.useMemo)((() => e.name || `radio-group-${p_}-${++m_}`), [e.name]);
            var n;
            let [r, o] = Se(e.value, null !== (n = e.defaultValue) && void 0 !== n ? n : null, e.onChange), [i, a] = (0, h.useState)(null), s = Pt({
              ...e,
              value: r
            }), l = s.displayValidation.isInvalid;
            return {
              ...s,
              name: t,
              selectedValue: r,
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
            size: n,
            appearance: r
          }, {
            radioGroupProps: E,
            labelProps: k,
            descriptionProps: j,
            isInvalid: S,
            errorMessageProps: C
          } = f_({
            ...m,
            id: m.id || b,
            label: e,
            isRequired: i,
            description: t,
            orientation: f
          }, _), x = (0, d.v6)({
            ...E,
            className: l
          }, {
            className: "foundry_nk7jgu_njguqn0",
            "aria-errormessage": C?.id
          }), P = S && !!u;
          return (0, c.jsxs)("div", {
            ref: y,
            "data-testid": s,
            ...x,
            children: [(0, c.jsx)(p.s6, {
              enabled: !!o,
              children: (0, c.jsxs)("div", {
                className: "foundry_nk7jgu_njguqn7",
                children: [(0, c.jsx)(H, {
                  size: "SM",
                  ...k,
                  className: "foundry_nk7jgu_njguqn8 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdy foundry_nk7jgu_tdsdcd10",
                  asChild: !0,
                  children: (0, c.jsxs)("label", {
                    children: [e, i && !a && (0, c.jsx)("span", {
                      className: "foundry_nk7jgu_njguqn9",
                      children: "*"
                    })]
                  })
                }), t && (0, c.jsx)(H, {
                  size: "XS",
                  ...j,
                  className: "foundry_nk7jgu_njguqna foundry_nk7jgu_8kowh41 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
                  children: t
                })]
              })
            }), (0, c.jsx)("div", {
              className: E_({
                size: n,
                orientation: f
              }),
              children: (0, c.jsx)(k_.Provider, {
                value: w,
                children: v
              })
            }), P && (0, c.jsxs)(H, {
              size: "SM",
              appearance: "bold",
              ...C,
              className: "foundry_nk7jgu_njguqnb",
              children: [(0, c.jsx)(z.X, {
                size: "MD",
                label: "",
                className: "foundry_nk7jgu_njguqnc"
              }), u]
            })]
          })
        })),
        S_ = ({
          color: e = "currentColor"
        }) => (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, c.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        C_ = ({
          color: e = "currentColor"
        }) => (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, c.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        x_ = ({
          color: e = "currentColor"
        }) => (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, c.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        });
      var P_ = w_({
          defaultClassName: "foundry_nk7jgu_1pfduete",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
              LG: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdy foundry_nk7jgu_tdsdcd10",
              XL: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd10"
            },
            isDisabled: {
              true: "foundry_nk7jgu_1pfdueti"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        O_ = w_({
          defaultClassName: "foundry_nk7jgu_1pfduet6 foundry_nk7jgu_8kowh41",
          variantClassNames: {
            appearance: {
              primary: "foundry_nk7jgu_1pfduet7",
              secondary: "foundry_nk7jgu_1pfduet8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        T_ = w_({
          defaultClassName: "foundry_nk7jgu_1pfduet2",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_1pfduet3",
              LG: "foundry_nk7jgu_1pfduet4",
              XL: "foundry_nk7jgu_1pfduet5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        A_ = w_({
          defaultClassName: "foundry_nk7jgu_1pfdueta",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_1pfduetb",
              LG: "foundry_nk7jgu_1pfduetc",
              XL: "foundry_nk7jgu_1pfduetd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const L_ = (0, h.forwardRef)((({
        label: e,
        description: t,
        hideLabel: n,
        testId: r,
        className: i,
        ...a
      }, s) => {
        const l = (0, h.useRef)(null),
          u = G(l, s),
          d = (0, h.useId)(),
          f = (0, h.useContext)(k_),
          {
            state: m,
            appearance: g,
            size: v
          } = f,
          {
            inputProps: y
          } = function(e, t, n) {
            let {
              value: r,
              children: o,
              "aria-label": i,
              "aria-labelledby": a
            } = e;
            const s = e.isDisabled || t.isDisabled;
            let l = t.selectedValue === r,
              {
                pressProps: u,
                isPressed: c
              } = nn({
                isDisabled: s
              }),
              {
                pressProps: d,
                isPressed: h
              } = nn({
                isDisabled: s,
                onPress() {
                  var e;
                  t.setSelectedValue(r), null === (e = n.current) || void 0 === e || e.focus()
                }
              }),
              {
                focusableProps: f
              } = _t(je(e, {
                onFocus: () => t.setLastFocusedValue(r)
              }), n),
              p = je(u, f),
              m = ne(e, {
                labelable: !0
              }),
              g = -1;
            null != t.selectedValue ? t.selectedValue === r && (g = 0) : t.lastFocusedValue !== r && null != t.lastFocusedValue || (g = 0), s && (g = void 0);
            let {
              name: v,
              descriptionId: y,
              errorMessageId: b,
              validationBehavior: _
            } = Zb.get(t);
            return ie(n, t.selectedValue, t.setSelectedValue), wt({
              validationBehavior: _
            }, t, n), {
              labelProps: je(d, {
                onClick: e => e.preventDefault()
              }),
              inputProps: je(m, {
                ...p,
                type: "radio",
                name: v,
                tabIndex: g,
                disabled: s,
                required: t.isRequired && "native" === _,
                checked: l,
                value: r,
                onChange: e => {
                  e.stopPropagation(), t.setSelectedValue(r)
                },
                "aria-describedby": [e["aria-describedby"], t.isInvalid ? b : null, y].filter(Boolean).join(" ") || void 0
              }),
              isDisabled: s,
              isSelected: l,
              isPressed: c || h
            }
          }({
            ...a,
            "aria-label": e,
            id: a.id || d
          }, m, l),
          b = y.checked,
          _ = y.disabled || m?.isReadOnly,
          w = o[`Dot${v}`];
        return (0, c.jsxs)("label", {
          className: (0, L.$)("foundry_nk7jgu_1pfduet0", i),
          children: [(0, c.jsxs)("div", {
            className: T_({
              size: v
            }),
            children: [(0, c.jsx)(p.s6, {
              children: (0, c.jsx)("input", {
                ...y,
                ref: u,
                className: "foundry_nk7jgu_1pfduet1"
              })
            }), (0, c.jsx)("div", {
              className: O_({
                appearance: g
              }),
              "aria-hidden": "true",
              "data-state": b ? "checked" : "unchecked",
              "data-disabled": _,
              "data-testid": r,
              children: (0, c.jsx)("span", {
                className: "foundry_nk7jgu_1pfduet9",
                children: b && (0, c.jsx)(w, {})
              })
            })]
          }), (0, c.jsx)(p.s6, {
            enabled: !!n,
            children: (0, c.jsxs)("div", {
              className: A_({
                size: v
              }),
              children: [(0, c.jsx)("p", {
                className: P_({
                  size: v,
                  isDisabled: y.disabled
                }),
                "aria-label": e,
                children: e
              }), t && (0, c.jsx)("p", {
                className: "foundry_nk7jgu_1pfduetj foundry_nk7jgu_8kowh41 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
                children: t
              })]
            })
          })]
        })
      }));

      function N_(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function R_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function I_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? R_(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = N_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function M_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var D_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        B_ = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = I_(I_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) D_(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return M_(e.variantClassNames, (e => M_(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_thj3a31",
          variantClassNames: {
            thickness: {
              thin: "foundry_nk7jgu_thj3a32",
              thick: "foundry_nk7jgu_thj3a33",
              thicker: "foundry_nk7jgu_thj3a34",
              thickest: "foundry_nk7jgu_thj3a35"
            },
            orientation: {
              horizontal: "foundry_nk7jgu_thj3a36",
              vertical: "foundry_nk7jgu_thj3a37"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const H_ = (0, h.forwardRef)((({
          className: e,
          orientation: t = "horizontal",
          thickness: n = "thin",
          isDecorative: r = !1,
          asChild: o,
          testId: i,
          ...a
        }, s) => {
          const l = "horizontal" !== t || r ? "div" : "hr",
            u = r || "hr" === l ? void 0 : "separator",
            d = o ? p.DX : l;
          return (0, c.jsx)(d, {
            ref: s,
            className: (0, L.$)(B_({
              thickness: n,
              orientation: t
            }), e),
            role: u,
            "aria-orientation": t,
            "data-testid": i,
            ...a
          })
        })),
        z_ = ({
          color: e = "currentColor"
        }) => (0, c.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, c.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "8",
            fill: e
          })
        }),
        F_ = ({
          color: e = "currentColor"
        }) => (0, c.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, c.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L8 6.93934L11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967C12.8232 3.76256 12.8232 4.23744 12.5303 4.53033L9.06066 8L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L8 9.06066L4.53033 12.5303C4.23744 12.8232 3.76256 12.8232 3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L6.93934 8L3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967Z",
            fill: e
          })
        }),
        V_ = ({
          color: e = "currentColor"
        }) => (0, c.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, c.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.2445 4.04108C14.5374 4.33397 14.5374 4.80884 14.2446 5.10174L6.24469 13.1017C6.10404 13.2424 5.91327 13.3214 5.71436 13.3214C5.51544 13.3214 5.32468 13.2424 5.18402 13.1017L1.75531 9.67296C1.46242 9.38007 1.46242 8.90519 1.75532 8.6123C2.04821 8.31941 2.52309 8.31942 2.81598 8.61231L5.71436 11.5107L13.1839 4.04109C13.4768 3.74819 13.9516 3.74819 14.2445 4.04108Z",
            fill: e
          })
        });

      function U_(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function G_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function q_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? G_(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = U_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function X_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var W_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        K_ = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = q_(q_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) W_(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return X_(e.variantClassNames, (e => X_(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        $_ = K_({
          defaultClassName: "foundry_nk7jgu_okz6z212",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_okz6z213 foundry_nk7jgu_okz6z2y foundry_nk7jgu_okz6z2z",
              LG: "foundry_nk7jgu_okz6z214 foundry_nk7jgu_okz6z210 foundry_nk7jgu_okz6z211"
            },
            isSelected: {
              true: "foundry_nk7jgu_okz6z215"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Y_ = K_({
          defaultClassName: "foundry_nk7jgu_okz6z2o",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_okz6z2p foundry_nk7jgu_okz6z2k foundry_nk7jgu_okz6z2l",
              LG: "foundry_nk7jgu_okz6z2q foundry_nk7jgu_okz6z2m foundry_nk7jgu_okz6z2n"
            },
            position: {
              left: "foundry_nk7jgu_okz6z2r",
              right: "foundry_nk7jgu_okz6z2s"
            },
            isSelected: {
              true: "foundry_nk7jgu_okz6z2t",
              false: "foundry_nk7jgu_okz6z2u"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              position: "left",
              isSelected: !0
            }, "foundry_nk7jgu_okz6z2v"],
            [{
              position: "right",
              isSelected: !1
            }, "foundry_nk7jgu_okz6z2w"]
          ]
        }),
        Z_ = K_({
          defaultClassName: "foundry_nk7jgu_okz6z2f",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdy foundry_nk7jgu_tdsdcd10",
              LG: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd10"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Q_ = K_({
          defaultClassName: "foundry_nk7jgu_okz6z28 foundry_nk7jgu_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_okz6z29 foundry_nk7jgu_okz6z24 foundry_nk7jgu_okz6z25",
              LG: "foundry_nk7jgu_okz6z2a foundry_nk7jgu_okz6z26 foundry_nk7jgu_okz6z27"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        J_ = K_({
          defaultClassName: "foundry_nk7jgu_okz6z21",
          variantClassNames: {
            appearance: {
              primary: "foundry_nk7jgu_okz6z22",
              secondary: "foundry_nk7jgu_okz6z23"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ew = K_({
          defaultClassName: "foundry_nk7jgu_okz6z2b",
          variantClassNames: {
            isDisabled: {
              true: "foundry_nk7jgu_okz6z2c"
            },
            size: {
              MD: "foundry_nk7jgu_okz6z2d",
              LG: "foundry_nk7jgu_okz6z2e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const tw = (0, h.forwardRef)((({
        label: e,
        description: t,
        size: n = "MD",
        appearance: r = "primary",
        showIcons: o = !1,
        selectedIcon: i,
        unselectedIcon: a,
        hideLabel: s,
        testId: l,
        className: u,
        ...d
      }, f) => {
        const m = (0, h.useRef)(null),
          g = G(m, f),
          v = (0, h.useId)(),
          y = Bb(d),
          {
            inputProps: b,
            isDisabled: _,
            isReadOnly: w,
            isSelected: E
          } = function(e, t, n) {
            let {
              labelProps: r,
              inputProps: o,
              isSelected: i,
              isPressed: a,
              isDisabled: s,
              isReadOnly: l
            } = Hb(e, t, n);
            return {
              labelProps: r,
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
          k = i ? z[i] : V_,
          j = a ? z[a] : F_;
        return (0, c.jsxs)("label", {
          className: (0, L.$)("foundry_nk7jgu_okz6z20", u),
          children: [(0, c.jsxs)("div", {
            className: J_({
              appearance: r
            }),
            "data-state": E ? "selected" : "unselected",
            "data-disabled": _ || w,
            "data-testid": l,
            children: [(0, c.jsx)(p.s6, {
              children: (0, c.jsx)("input", {
                ...b,
                ref: g
              })
            }), (0, c.jsxs)("div", {
              className: Q_({
                size: n
              }),
              "aria-hidden": "true",
              children: [(0, c.jsx)("div", {
                className: $_({
                  size: n,
                  isSelected: E
                }),
                children: (0, c.jsx)(z_, {})
              }), o && (0, c.jsxs)(c.Fragment, {
                children: [(0, c.jsx)("div", {
                  className: Y_({
                    size: n,
                    isSelected: E,
                    position: "left"
                  }),
                  children: (0, c.jsx)(k, {
                    label: ""
                  })
                }), (0, c.jsx)("div", {
                  className: Y_({
                    size: n,
                    isSelected: E,
                    position: "right"
                  }),
                  children: (0, c.jsx)(j, {
                    label: ""
                  })
                })]
              })]
            })]
          }), (0, c.jsx)(p.s6, {
            enabled: !!s,
            children: (0, c.jsxs)("div", {
              className: ew({
                size: n,
                isDisabled: _
              }),
              children: [(0, c.jsx)("p", {
                className: Z_({
                  size: n
                }),
                children: e
              }), t && (0, c.jsx)("p", {
                className: "foundry_nk7jgu_okz6z2i foundry_nk7jgu_8kowh41 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
                children: t
              })]
            })
          })]
        })
      }));
      tw.displayName = "Switch";
      const nw = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        ...n
      }, r) => {
        const o = e ? p.DX : "h1",
          i = (0, d.v6)({
            className: "foundry_nk7jgu_1pi1yv40 foundry_nk7jgu_tdsdcd1 foundry_nk7jgu_tdsdcd0"
          }, n);
        return (0, c.jsx)(o, {
          ref: r,
          "data-testid": t,
          ...i
        })
      }));

      function rw(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function ow(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function iw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ow(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = rw(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ow(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function aw(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var sw = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        lw = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = iw(iw({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) sw(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return aw(e.variantClassNames, (e => aw(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_16ge3130",
          variantClassNames: {
            size: {
              LG: "foundry_nk7jgu_tdsdcd13 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd15",
              MD: "foundry_nk7jgu_tdsdcd13 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd16",
              SM: "foundry_nk7jgu_tdsdcd13 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd17",
              XS: "foundry_nk7jgu_tdsdcd13 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd18"
            },
            appearance: {
              default: "foundry_nk7jgu_tdsdcd13 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd19",
              bold: "foundry_nk7jgu_tdsdcd13 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd1a"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const uw = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const a = e ? p.DX : "p",
          s = (0, d.v6)({
            className: lw({
              size: r,
              appearance: n
            })
          }, o);
        return (0, c.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      }));

      function cw(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function dw(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function hw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dw(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = cw(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dw(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function fw(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var pw = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        mw = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = hw(hw({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) pw(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fw(e.variantClassNames, (e => fw(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_1ugqrt40",
          variantClassNames: {
            appearance: {
              default: "foundry_nk7jgu_tdsdcd1b foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd1d",
              bold: "foundry_nk7jgu_tdsdcd1b foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd1e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const gw = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...r
      }, o) => {
        const i = e ? p.DX : "p",
          a = (0, d.v6)({
            className: mw({
              appearance: n
            })
          }, r);
        return (0, c.jsx)(i, {
          ref: o,
          "data-testid": t,
          ...a
        })
      }));

      function vw(e, t) {
        var n = {};
        if ("object" == typeof t) {
          var r = e;
          fn(t, ((e, t) => {
            if (null != e) {
              var o = function(e, t) {
                var n = e;
                for (var r of t) {
                  if (!(r in n)) throw new Error("Path ".concat(t.join(" -> "), " does not exist in object"));
                  n = n[r]
                }
                return n
              }(r, t);
              n[hn(o)] = String(e)
            }
          }))
        } else {
          var o = e;
          for (var i in o) {
            var a = o[i];
            null != a && (n[hn(i)] = a)
          }
        }
        return Object.defineProperty(n, "toString", {
          value: function() {
            return Object.keys(this).map((e => "".concat(e, ":").concat(this[e]))).join(";")
          },
          writable: !1
        }), n
      }

      function yw(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function bw(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function _w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? bw(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = yw(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bw(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function ww(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Ew = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        kw = "var(--foundry_nk7jgu_9dxgbc2)",
        jw = "var(--foundry_nk7jgu_9dxgbc3)",
        Sw = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = _w(_w({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Ew(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ww(e.variantClassNames, (e => ww(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_9dxgbc7",
          variantClassNames: {
            size: {
              SM: "foundry_nk7jgu_9dxgbc8",
              MD: "foundry_nk7jgu_9dxgbc9",
              LG: "foundry_nk7jgu_9dxgbca",
              XL: "foundry_nk7jgu_9dxgbcb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Cw = "var(--foundry_nk7jgu_9dxgbc0)",
        xw = "var(--foundry_nk7jgu_9dxgbc1)";
      const Pw = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        children: n,
        colorOverride: r,
        label: o,
        size: i = "MD",
        ...a
      }, s) => {
        const l = Jr(),
          u = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
          h = (0, d.v6)({
            className: Sw({
              size: u
            }),
            "data-testid": t,
            style: vw({
              [Cw]: r?.pulseColorBackground,
              [xw]: r?.pulseColorForeground,
              [kw]: r?.gradientColorBackground,
              [jw]: r?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, a),
          f = e ? p.DX : "div";
        return (0, c.jsx)(f, {
          ref: s,
          ...h,
          children: e ? (0, c.jsx)(p.xV, {
            children: n
          }) : (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("div", {
              className: "foundry_nk7jgu_9dxgbcd"
            }), (0, c.jsx)("div", {
              className: "foundry_nk7jgu_9dxgbcc"
            })]
          })
        })
      }));

      function Ow(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function Tw(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
          if (Array.isArray(e) || (n = function(e, t) {
              if (e) {
                if ("string" == typeof e) return Ow(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ow(e, t) : void 0
              }
            }(e)) || t) {
            n && (e = n);
            var r = 0,
              o = function() {};
            return {
              s: o,
              n: function() {
                return r >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[r++]
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
            n = n.call(e)
          },
          n: function() {
            var e = n.next();
            return a = e.done, e
          },
          e: function(e) {
            s = !0, i = e
          },
          f: function() {
            try {
              a || null == n.return || n.return()
            } finally {
              if (s) throw i
            }
          }
        }
      }

      function Aw(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function Lw(e) {
        return Lw = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Lw(e)
      }

      function Nw() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (Nw = function() {
          return !!e
        })()
      }

      function Rw(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Iw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Rw(Object(n), !0).forEach((function(t) {
            Aw(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rw(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Mw(e, t) {
        return Mw = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Mw(e, t)
      }

      function Dw(e, t) {
        var n, r = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          a = r,
          s = "",
          l = Tw(e);
        try {
          for (l.s(); !(n = l.n()).done;) {
            var u, c = n.value,
              d = !Object.prototype.hasOwnProperty.call(o, c) && (null === (u = o[a[0]]) || void 0 === u ? void 0 : u.test(c));
            (i && c === a[0] || d) && (a = a.slice(1), s += c)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return s
      }

      function Bw(e, t) {
        var n, r = t.mask,
          o = t.replacement,
          i = t.separate,
          a = t.showMask,
          s = 0,
          l = "",
          u = Tw(r);
        try {
          for (u.s(); !(n = u.n()).done;) {
            var c = n.value;
            if (!a && void 0 === e[s]) break;
            Object.prototype.hasOwnProperty.call(o, c) && void 0 !== e[s] ? l += e[s++] : l += c
          }
        } catch (e) {
          u.e(e)
        } finally {
          u.f()
        }
        if (i && !a) {
          for (var d = r.length - 1; d >= 0 && l[d] === r[d]; d--);
          l = l.slice(0, d + 1)
        }
        return l
      }

      function Hw(e, t) {
        for (var n = t.mask, r = t.replacement, o = [], i = 0; i < n.length; i++) {
          var a, s = null !== (a = e[i]) && void 0 !== a ? a : n[i],
            l = Object.prototype.hasOwnProperty.call(r, s) ? "replacement" : void 0 !== e[i] && e[i] !== n[i] ? "input" : "mask";
          o.push({
            type: l,
            value: s,
            index: i
          })
        }
        return o
      }

      function zw(e) {
        return e.length > 0 ? Aw({}, e, /./) : {}
      }

      function Fw(e, t) {
        for (var n = t.start, r = void 0 === n ? 0 : n, o = t.end, i = t.mask, a = t.replacement, s = t.separate, l = e.slice(r, o), u = i.slice(r, o), c = "", d = 0; d < u.length; d++) {
          var h = Object.prototype.hasOwnProperty.call(a, u[d]);
          h && void 0 !== l[d] && l[d] !== u[d] ? c += l[d] : h && s && (c += u[d])
        }
        return c
      }

      function Vw(e, t) {
        var n = t.mask,
          r = t.replacement,
          o = "string" == typeof r ? zw(r) : r,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return Bw(Dw(e, {
          replacementChars: n.replace(i, ""),
          replacement: o,
          separate: !1
        }), {
          mask: n,
          replacement: o,
          separate: !1,
          showMask: !1
        })
      }
      var Uw = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function Gw(e) {
        return Uw.includes(e) ? "\\".concat(e) : e
      }

      function qw(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function Xw(e, t, n) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function Ww(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function Kw(e) {
        return Kw = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Kw(e)
      }

      function $w() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return ($w = function() {
          return !!e
        })()
      }

      function Yw(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Zw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yw(Object(n), !0).forEach((function(t) {
            Ww(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yw(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Qw(e, t) {
        return Qw = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Qw(e, t)
      }

      function Jw(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return Jw = function(e) {
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
            t.set(e, n)
          }

          function n() {
            return function(e, t, n) {
              if ($w()) return Reflect.construct.apply(null, arguments);
              var r = [null];
              r.push.apply(r, t);
              var o = new(e.bind.apply(e, r));
              return n && Qw(o, n.prototype), o
            }(e, arguments, Kw(this).constructor)
          }
          return n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), Qw(n, e)
        }, Jw(e)
      }
      var eE, tE = function(e) {
          function t(e) {
            var n;
            return qw(this, t), (n = function(e, t, n) {
              return t = Kw(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, $w() ? Reflect.construct(t, n || [], Kw(e).constructor) : t.apply(e, n))
            }(this, t, [e])).name = "SyntheticChangeError", n
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
            }), t && Qw(e, t)
          }(t, e), Xw(t)
        }(Jw(Error)),
        nE = ["options"],
        rE = ["text", "email", "tel", "search", "url"],
        oE = Xw((function e(t) {
          var n = t.init,
            r = t.tracking;
          qw(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (rE.includes(e.type)) {
              var i = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                a = i.initialValue,
                s = void 0 === a ? "" : a,
                l = i.controlled,
                u = void 0 !== l && l,
                c = n({
                  initialValue: e.value || s,
                  controlled: u
                }),
                d = c.value,
                h = c.options,
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
              Object.defineProperty(e, "value", Zw(Zw({}, g), {}, {
                set: function(t) {
                  var n;
                  m.value = t, null == g || null === (n = g.set) || void 0 === n || n.call(e, t)
                }
              })), e.value = d;
              var v = function() {
                  var t = function() {
                    var n, r;
                    m.selectionStart = null !== (n = e.selectionStart) && void 0 !== n ? n : 0, m.selectionEnd = null !== (r = e.selectionEnd) && void 0 !== r ? r : 0, p.id = window.setTimeout(t)
                  };
                  p.id = window.setTimeout(t)
                },
                y = function() {
                  window.clearTimeout(p.id), p.id = -1, p.cachedId = -1
                },
                b = function(t) {
                  try {
                    var n, o;
                    if (p.cachedId === p.id) throw new tE("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      a = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === a || null === s) throw new tE("The selection attributes have not been initialized.");
                    var l, u = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = u.length), a > m.selectionStart ? l = "insert" : a <= m.selectionStart && a < m.selectionEnd ? l = "deleteBackward" : a === m.selectionEnd && i.length < u.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > u.length) throw new tE("Input type detection error.");
                    var c = "",
                      d = m.selectionStart,
                      h = m.selectionEnd;
                    if ("insert" === l) c = i.slice(m.selectionStart, a);
                    else {
                      var g = u.length - i.length;
                      d = a, h = a + g
                    }
                    f.value !== u ? f.options = f.fallbackOptions : f.fallbackOptions = f.options;
                    var v = f.options,
                      y = r({
                        inputType: l,
                        previousValue: u,
                        previousOptions: v,
                        value: i,
                        addedValue: c,
                        changeStart: d,
                        changeEnd: h,
                        selectionStart: a,
                        selectionEnd: s
                      }),
                      b = y.options,
                      _ = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = function(e, t) {
                          if (null == e) return {};
                          var n = {};
                          for (var r in e)
                            if ({}.hasOwnProperty.call(e, r)) {
                              if (t.includes(r)) continue;
                              n[r] = e[r]
                            } return n
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          for (r = 0; r < i.length; r++) n = i[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                        return o
                      }(y, nE);
                    e.value = _.value, e.setSelectionRange(_.selectionStart, _.selectionEnd), f.value = _.value, f.options = b, m.selectionStart = _.selectionStart, m.selectionEnd = _.selectionEnd, null === (n = e._valueTracker) || void 0 === n || null === (o = n.setValue) || void 0 === o || o.call(n, u)
                  } catch (n) {
                    if (e.value = m.value, e.setSelectionRange(m.selectionStart, m.selectionEnd), t.preventDefault(), t.stopPropagation(), "SyntheticChangeError" !== n.name) throw n
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
      eE = oE, Object.defineProperty(eE.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var iE, aE = ["track", "modify"];

      function sE(e) {
        var t, n, r, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? zw(e.replacement) : null !== (n = e.replacement) && void 0 !== n ? n : {},
          showMask: null !== (r = e.showMask) && void 0 !== r && r,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var lE = function() {
        function e() {
          var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, n) {
            return t = Lw(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, Nw() ? Reflect.construct(t, n || [], Lw(e).constructor) : t.apply(e, n))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                r = e.controlled,
                o = sE(n),
                i = o.mask,
                a = o.replacement,
                s = o.separate,
                l = o.showMask;
              return {
                value: t = r || t ? t : l ? i : "",
                options: {
                  mask: i,
                  replacement: a,
                  separate: s
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                r = e.previousValue,
                o = e.previousOptions,
                i = e.addedValue,
                a = e.changeStart,
                s = e.changeEnd,
                l = sE(n),
                u = l.track,
                c = l.modify,
                d = function(e, t) {
                  if (null == e) return {};
                  var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n = {};
                    for (var r in e)
                      if ({}.hasOwnProperty.call(e, r)) {
                        if (t.includes(r)) continue;
                        n[r] = e[r]
                      } return n
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                  }
                  return o
                }(l, aE),
                h = d.mask,
                f = d.replacement,
                p = d.showMask,
                m = d.separate,
                g = Iw(Iw({}, "insert" === t ? {
                  inputType: t,
                  data: i
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: r,
                  selectionStart: a,
                  selectionEnd: s
                }),
                v = null == u ? void 0 : u(g);
              if (!1 === v) throw new tE("Custom tracking stop.");
              null === v ? i = "" : !0 !== v && void 0 !== v && (i = v);
              var y = null == c ? void 0 : c(g);
              void 0 !== (null == y ? void 0 : y.mask) && (h = y.mask), void 0 !== (null == y ? void 0 : y.replacement) && (f = "string" == typeof(null == y ? void 0 : y.replacement) ? zw(null == y ? void 0 : y.replacement) : y.replacement), void 0 !== (null == y ? void 0 : y.showMask) && (p = y.showMask), void 0 !== (null == y ? void 0 : y.separate) && (m = y.separate);
              var b = Fw(r, Iw({
                  end: a
                }, o)),
                _ = Fw(r, Iw({
                  start: s
                }, o)),
                w = RegExp("[^".concat(Object.keys(f).join(""), "]"), "g"),
                E = h.replace(w, "");
              if (b && (b = Dw(b, {
                  replacementChars: E,
                  replacement: f,
                  separate: m
                }), E = E.slice(b.length)), i && (i = Dw(i, {
                  replacementChars: E,
                  replacement: f,
                  separate: !1
                }), E = E.slice(i.length)), "insert" === t && "" === i) throw new tE("The character does not match the key value of the `replacement` object.");
              if (m) {
                var k = h.slice(a, s).replace(w, ""),
                  j = k.length - i.length;
                j < 0 ? _ = _.slice(-j) : j > 0 && (_ = k.slice(-j) + _)
              }
              _ && (_ = Dw(_, {
                replacementChars: E,
                replacement: f,
                separate: m
              }));
              var S = Bw(b + i + _, {
                  mask: h,
                  replacement: f,
                  separate: m,
                  showMask: p
                }),
                C = function(e) {
                  var t, n, r, o = e.inputType,
                    i = e.value,
                    a = e.addedValue,
                    s = e.beforeChangeValue,
                    l = e.replacement,
                    u = e.separate,
                    c = Hw(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter((function(e) {
                      var t = e.type;
                      return "input" === t || u && "replacement" === t
                    })),
                    d = null === (t = c[s.length + a.length - 1]) || void 0 === t ? void 0 : t.index,
                    h = null === (n = c[s.length - 1]) || void 0 === n ? void 0 : n.index,
                    f = null === (r = c[s.length + a.length]) || void 0 === r ? void 0 : r.index;
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
                  value: S,
                  addedValue: i,
                  beforeChangeValue: b,
                  mask: h,
                  replacement: f,
                  separate: m
                });
              return {
                value: S,
                selectionStart: C,
                selectionEnd: C,
                options: {
                  mask: h,
                  replacement: f,
                  separate: m
                }
              }
            }
          }])).format = function(e) {
            return Vw(e, sE(n))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? zw(r) : r;
              return Hw(Vw(e, {
                mask: n,
                replacement: o
              }), {
                mask: n,
                replacement: o
              })
            }(e, sE(n))
          }, t.unformat = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? zw(r) : r,
                i = Fw(e, {
                  mask: n,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return Dw(i, {
                replacementChars: n.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, sE(n))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var n = t.mask, r = t.replacement, o = "string" == typeof r ? zw(r) : r, i = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, s = "", l = 0; l < n.length; l++) {
                var u = n[l];
                0 === l && (s = "^"), i && (s += "("), s += Object.prototype.hasOwnProperty.call(o, u) ? "".concat(a ? "(?!".concat(Gw(u), ")") : "", "(").concat(o[u].source, ")") : Gw(u), l === n.length - 1 && (i && (s += ")?".repeat(n.length)), s += "$")
              }
              return s
            }(e, sE(n))
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
            }), t && Mw(e, t)
          }(e, oE),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function uE(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function cE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function dE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? cE(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = uE(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cE(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function hE(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      iE = lE, Object.defineProperty(iE.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var fE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        pE = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = dE(dE({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) fE(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hE(e.variantClassNames, (e => hE(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        mE = "foundry_nk7jgu_8oytzos",
        gE = pE({
          defaultClassName: "foundry_nk7jgu_8oytzob",
          variantClassNames: {
            isDisabled: {
              false: "foundry_nk7jgu_8oytzoc",
              true: "foundry_nk7jgu_8oytzod"
            },
            isReadOnly: {
              false: "foundry_nk7jgu_8oytzoe",
              true: "foundry_nk7jgu_8oytzof"
            },
            isInvalid: {
              false: "foundry_nk7jgu_8oytzog",
              true: "foundry_nk7jgu_8oytzoh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vE = pE({
          defaultClassName: "foundry_nk7jgu_8oytzou",
          variantClassNames: {
            isDisabled: {
              false: "foundry_nk7jgu_8oytzov",
              true: "foundry_nk7jgu_8oytzow"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yE = pE({
          defaultClassName: "foundry_nk7jgu_8oytzo8",
          variantClassNames: {
            isDisabled: {
              false: "foundry_nk7jgu_8oytzo9",
              true: "foundry_nk7jgu_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bE = pE({
          defaultClassName: "foundry_nk7jgu_8oytzon",
          variantClassNames: {
            side: {
              left: "foundry_nk7jgu_8oytzoo",
              right: "foundry_nk7jgu_8oytzop"
            },
            isDisabled: {
              false: "foundry_nk7jgu_8oytzoq",
              true: "foundry_nk7jgu_8oytzor"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        _E = pE({
          defaultClassName: "foundry_nk7jgu_8oytzoi foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd10",
          variantClassNames: {
            isDisabled: {
              false: "foundry_nk7jgu_8oytzoj",
              true: "foundry_nk7jgu_8oytzok"
            },
            isReadOnly: {
              false: "foundry_nk7jgu_8oytzol",
              true: "foundry_nk7jgu_8oytzom"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        wE = pE({
          defaultClassName: "foundry_nk7jgu_8oytzo4",
          variantClassNames: {
            isDisabled: {
              false: "foundry_nk7jgu_8oytzo5",
              true: "foundry_nk7jgu_8oytzo6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const EE = (e, t, n) => {
          const r = [];
          return e && r.push(e), t && r.push(t), n && r.push(n), r.join(" ")
        },
        kE = (0, h.createContext)(null);

      function jE() {
        const e = (0, h.useContext)(kE);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const SE = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          isDisabled: r = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          isInvalid: a = !1,
          ...s
        }, l) => {
          const [u, f] = (0, h.useState)("text"), m = (0, h.useId)(), g = (0, h.useId)(), v = (0, h.useId)(), y = (0, h.useId)(), b = (0, d.v6)({
            "data-testid": n,
            className: "foundry_nk7jgu_8oytzo3"
          }, s), _ = e ? p.DX : "div";
          return (0, c.jsx)(kE.Provider, {
            value: {
              isDisabled: r,
              isReadOnly: o,
              isRequired: i,
              isInvalid: a,
              labelId: m,
              inputId: g,
              descriptionId: v,
              errorId: y,
              inputType: u,
              setInputType: f
            },
            children: (0, c.jsx)(_, {
              ref: l,
              ...b,
              children: t
            })
          })
        })),
        CE = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          children: n,
          isHidden: r = !1,
          hideRequiredAsterisk: o,
          ...i
        }, a) => {
          const {
            isDisabled: s,
            isRequired: l,
            inputId: u,
            labelId: h
          } = jE(), f = (0, d.v6)({
            id: i.id || h,
            htmlFor: i.htmlFor || u,
            "data-testid": e,
            className: wE({
              isDisabled: s
            })
          }, i), m = t ? p.DX : "label";
          return (0, c.jsx)(p.s6, {
            enabled: r,
            children: (0, c.jsx)(H, {
              size: "SM",
              asChild: !0,
              children: (0, c.jsxs)(m, {
                ref: a,
                ...f,
                children: [n, l && !o && (0, c.jsx)("span", {
                  className: "foundry_nk7jgu_8oytzo7",
                  children: "*"
                })]
              })
            })
          })
        })),
        xE = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i
          } = jE(), a = (0, d.v6)({
            "data-testid": e,
            className: yE({
              isDisabled: i
            })
          }, r), s = t ? p.DX : "span";
          return (0, c.jsx)(H, {
            size: "XS",
            asChild: !0,
            children: (0, c.jsx)(s, {
              ref: o,
              ...a,
              children: n
            })
          })
        })),
        PE = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: a,
            isInvalid: s
          } = jE(), l = (0, d.v6)({
            "data-testid": e,
            className: (0, L.$)(gE({
              isDisabled: i,
              isReadOnly: a,
              isInvalid: s
            }), "foundry_nk7jgu_8oytzo1")
          }, r), u = t ? p.DX : "div";
          return (0, c.jsx)(u, {
            ref: o,
            ...l,
            children: n
          })
        })),
        OE = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          "aria-labelledby": n,
          "aria-describedby": r,
          type: o,
          mask: i,
          replacement: a,
          showMask: s = !0,
          track: l,
          ...u
        }, f) => {
          const {
            isDisabled: m,
            isReadOnly: g,
            isRequired: v,
            labelId: y,
            inputId: b,
            descriptionId: _,
            isInvalid: w,
            errorId: E,
            inputType: k,
            setInputType: j
          } = jE();
          (0, h.useEffect)((() => j(o ?? "text")), []);
          const S = (0, d.v6)({
              disabled: m,
              readOnly: g,
              required: v,
              id: b,
              type: k,
              spellCheck: !1,
              "aria-labelledby": EE(y, n),
              "aria-describedby": EE(_, r, w ? E : void 0),
              "data-testid": e,
              className: (0, L.$)(_E({
                isDisabled: m,
                isReadOnly: g
              }), "foundry_nk7jgu_8oytzo2"),
              ...w && {
                "aria-invalid": !0,
                "aria-errormessage": E
              },
              ...m && {
                "aria-disabled": !0
              },
              ...v && {
                "aria-required": !0
              }
            }, u),
            C = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                n = e.replacement,
                r = e.showMask,
                o = e.separate,
                i = e.track,
                a = e.modify,
                s = (0, h.useRef)(null),
                l = (0, h.useRef)({
                  mask: t,
                  replacement: n,
                  showMask: r,
                  separate: o,
                  track: i,
                  modify: a
                });
              return l.current.mask = t, l.current.replacement = n, l.current.showMask = r, l.current.separate = o, l.current.track = i, l.current.modify = a, (0, h.useMemo)((function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(n, r, o) {
                      return "current" === r && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), n[r] = o, !0)
                    }
                  })
                }(s, new lE(l.current))
              }), [])
            }({
              mask: i,
              replacement: a,
              showMask: s,
              track: l
            }),
            x = G(i && a ? C : null, f),
            P = t ? p.DX : "input";
          return (0, c.jsx)(P, {
            ref: x,
            ...S
          })
        })),
        TE = (0, h.forwardRef)((({
          icon: e,
          asChild: t,
          testId: n,
          side: r,
          ...o
        }, i) => {
          const {
            isDisabled: a
          } = jE(), s = (0, d.v6)({
            size: "LG",
            "data-testid": n,
            className: (0, L.$)(bE({
              side: r,
              isDisabled: a
            }), "foundry_nk7jgu_8oytzo0")
          }, o), l = t ? p.DX : z[e];
          return (0, c.jsx)(l, {
            ref: i,
            ...s
          })
        })),
        AE = (0, h.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: n
          } = jE(), r = (0, d.v6)({
            isDisabled: n,
            size: "SM",
            appearance: "ghost",
            className: mE
          }, e);
          return (0, c.jsx)(sp, {
            ref: t,
            ...r
          })
        })),
        LE = (0, h.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: n,
            inputType: r,
            setInputType: o
          } = jE(), i = "password" === r, a = i ? "Reveal Password" : "Hide Password", s = (0, d.v6)({
            isDisabled: n,
            size: "SM",
            appearance: "ghost",
            className: mE,
            label: a,
            icon: i ? "Eye" : "EyeOff",
            onPress: () => {
              o(i ? "text" : "password")
            }
          }, e);
          return (0, c.jsx)(Vm, {
            side: "bottom",
            portal: !1,
            align: "end",
            content: (0, c.jsx)(H, {
              size: "SM",
              children: a
            }),
            children: (0, c.jsx)(sp, {
              ref: t,
              ...s
            })
          })
        })),
        NE = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          children: n,
          isHidden: r = !1,
          errorMessage: o,
          ...i
        }, a) => {
          const {
            isDisabled: s,
            isInvalid: l,
            descriptionId: u,
            errorId: h
          } = jE(), f = (0, d.v6)({
            id: u,
            asChild: !0,
            "data-testid": e,
            className: vE({
              isDisabled: s
            })
          }, i), m = t ? p.DX : "p", g = z.X;
          return (0, c.jsxs)("div", {
            className: "foundry_nk7jgu_8oytzot",
            children: [(0, c.jsx)(p.s6, {
              enabled: r || l,
              children: (0, c.jsx)(H, {
                size: "SM",
                ref: a,
                ...f,
                children: (0, c.jsx)(m, {
                  children: n
                })
              })
            }), l && o && (0, c.jsxs)(H, {
              size: "SM",
              appearance: "bold",
              className: "foundry_nk7jgu_8oytzox",
              id: h,
              children: [(0, c.jsx)(g, {
                size: "MD",
                label: "",
                className: "foundry_nk7jgu_8oytzoy"
              }), o]
            })]
          })
        }));

      function RE(e, t) {
        let {
          elementType: n = "a",
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ...l
        } = e, u = {};
        "a" !== n && (u = {
          role: "link",
          tabIndex: s ? void 0 : 0
        });
        let {
          focusableProps: c
        } = _t(e, t), {
          pressProps: d,
          isPressed: h
        } = nn({
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ref: t
        }), f = ne(l, {
          labelable: !0
        }), p = je(c, d), m = $t();
        return {
          isPressed: h,
          linkProps: je(f, Zt(e), {
            ...p,
            ...u,
            "aria-disabled": s || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var n;
              null === (n = d.onClick) || void 0 === n || n.call(d, t), !m.isNative && t.currentTarget instanceof HTMLAnchorElement && t.currentTarget.href && !t.isDefaultPrevented() && function(e, t) {
                let n = e.getAttribute("target");
                return !(n && "_self" !== n || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
              }(t.currentTarget, t) && e.href && (t.preventDefault(), m.open(t.currentTarget, t, e.href, e.routerOptions))
            }
          })
        }
      }

      function IE(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function ME(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function DE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ME(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = IE(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ME(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function BE(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var HE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        zE = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = DE(DE({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) HE(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return BE(e.variantClassNames, (e => BE(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        FE = zE({
          defaultClassName: "foundry_nk7jgu_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_nk7jgu_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        VE = zE({
          defaultClassName: "foundry_nk7jgu_1m368qhd",
          variantClassNames: {
            status: {
              information: "foundry_nk7jgu_1m368qhe",
              danger: "foundry_nk7jgu_1m368qhf",
              success: "foundry_nk7jgu_1m368qhg",
              warning: "foundry_nk7jgu_1m368qhh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        UE = zE({
          defaultClassName: "foundry_nk7jgu_1m368qh2",
          variantClassNames: {
            status: {
              danger: "foundry_nk7jgu_1m368qh3",
              information: "foundry_nk7jgu_1m368qh4",
              success: "foundry_nk7jgu_1m368qh5",
              warning: "foundry_nk7jgu_1m368qh6"
            },
            background: {
              "two-tone": "foundry_nk7jgu_1m368qh7",
              neutral: "foundry_nk7jgu_1m368qh8",
              none: "foundry_nk7jgu_1m368qh9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const GE = (0, h.createContext)(null);

      function qE() {
        const e = (0, h.useContext)(GE);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const XE = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          status: n,
          background: r,
          ...o
        }, i) => {
          const a = e ? p.DX : "div",
            s = (0, d.v6)(o, {
              className: UE({
                status: n,
                background: r
              })
            });
          return (0, c.jsx)(GE.Provider, {
            value: {
              status: n,
              background: r
            },
            children: (0, c.jsx)(a, {
              ref: i,
              "data-testid": t,
              ...s,
              ...o
            })
          })
        })),
        WE = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? p.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_nk7jgu_1m368qha"
            });
          return (0, c.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        })),
        KE = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? p.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_nk7jgu_1m368qhb"
            });
          return (0, c.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        })),
        $E = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        YE = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const {
            status: r
          } = qE(), o = e || $E[r], i = z[o], a = (0, d.v6)(t, {
            className: VE({
              status: r
            })
          });
          return (0, c.jsx)("div", {
            className: "foundry_nk7jgu_1m368qhc",
            children: (0, c.jsx)(i, {
              title: "",
              ref: n,
              ...a
            })
          })
        })),
        ZE = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? p.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_nk7jgu_1m368qhi"
            });
          return (0, c.jsx)(k, {
            level: 6,
            asChild: !0,
            children: (0, c.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...i
            })
          })
        })),
        QE = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? p.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_nk7jgu_1m368qhj"
            });
          return (0, c.jsx)(H, {
            size: "SM",
            asChild: !0,
            children: (0, c.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...i
            })
          })
        })),
        JE = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, h.useRef)(null),
            a = G(i, o),
            s = e ? p.DX : "a",
            {
              linkProps: l,
              isPressed: u
            } = RE(r, i),
            f = (0, d.v6)(l, {
              className: "foundry_nk7jgu_1m368qhk foundry_nk7jgu_1d5mo5m0"
            });
          return (0, c.jsx)(H, {
            size: "SM",
            appearance: "hyperlink",
            asChild: !0,
            children: (0, c.jsx)(s, {
              "data-pressed": u,
              "data-testid": n,
              ref: a,
              ...f,
              children: t
            })
          })
        })),
        ek = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = e ? p.DX : "div",
            a = (0, d.v6)(r, {
              className: "foundry_nk7jgu_1m368qhl"
            });
          return (0, c.jsx)(i, {
            ref: o,
            "data-testid": n,
            ...a,
            children: t
          })
        })),
        tk = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          className: n,
          ...r
        }, o) => {
          const i = e ? p.DX : "div";
          return (0, c.jsx)(H, {
            size: "SM",
            asChild: !0,
            children: (0, c.jsx)(i, {
              ref: o,
              "data-testid": t,
              className: (0, L.$)(n, "foundry_nk7jgu_1m368qho"),
              ...r
            })
          })
        })),
        nk = (0, h.forwardRef)((({
          testId: e,
          label: t = "close alert",
          ...n
        }, r) => {
          const {
            background: o
          } = qE(), i = (0, d.v6)(n, {
            className: FE({
              hasBackground: "none" !== o
            })
          });
          return (0, c.jsx)(sp, {
            ref: r,
            label: t,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "XS",
            ...i
          })
        }));

      function rk(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function ok(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function ik(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ok(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = rk(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ok(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function ak(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var sk = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        lk = "foundry_nk7jgu_qmpv6yt",
        uk = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = ik(ik({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) sk(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ak(e.variantClassNames, (e => ak(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_qmpv6y6",
          variantClassNames: {
            status: {
              danger: "foundry_nk7jgu_qmpv6y7",
              information: "foundry_nk7jgu_qmpv6y8",
              success: "foundry_nk7jgu_qmpv6y9",
              warning: "foundry_nk7jgu_qmpv6ya"
            },
            background: {
              static: "foundry_nk7jgu_qmpv6yb",
              "two-tone": "foundry_nk7jgu_qmpv6yc",
              neutral: "foundry_nk7jgu_qmpv6yd"
            },
            align: {
              left: "foundry_nk7jgu_qmpv6ye",
              center: "foundry_nk7jgu_qmpv6yf"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              status: "danger",
              background: "static"
            }, "foundry_nk7jgu_qmpv6yg"],
            [{
              status: "information",
              background: "static"
            }, "foundry_nk7jgu_qmpv6yh"],
            [{
              status: "warning",
              background: "static"
            }, "foundry_nk7jgu_qmpv6yi"],
            [{
              status: "success",
              background: "static"
            }, "foundry_nk7jgu_qmpv6yj"]
          ]
        });

      function ck(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function dk(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        return n.length === r.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && n.every((n => {
          const r = e[n],
            o = t[n];
          return "function" == typeof r ? `${r}` == `${o}` : ck(r) && ck(o) ? dk(r, o) : r === o
        })))
      }

      function hk(e) {
        return e.concat().sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => e.options))
      }

      function fk(e) {
        return "number" == typeof e
      }

      function pk(e) {
        return "string" == typeof e
      }

      function mk(e) {
        return "boolean" == typeof e
      }

      function gk(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function vk(e) {
        return Math.abs(e)
      }

      function yk(e) {
        return Math.sign(e)
      }

      function bk(e, t) {
        return vk(e - t)
      }

      function _k(e) {
        return Sk(e).map(Number)
      }

      function wk(e) {
        return e[Ek(e)]
      }

      function Ek(e) {
        return Math.max(0, e.length - 1)
      }

      function kk(e, t) {
        return t === Ek(e)
      }

      function jk(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Array.from(Array(e), ((e, n) => t + n))
      }

      function Sk(e) {
        return Object.keys(e)
      }

      function Ck(e, t) {
        return [e, t].reduce(((e, t) => (Sk(t).forEach((n => {
          const r = e[n],
            o = t[n],
            i = gk(r) && gk(o);
          e[n] = i ? Ck(r, o) : o
        })), e)), {})
      }

      function xk(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function Pk() {
        let e = [];
        const t = {
          add: function(n, r, o) {
            let i, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
              passive: !0
            };
            if ("addEventListener" in n) n.addEventListener(r, o, a), i = () => n.removeEventListener(r, o, a);
            else {
              const e = n;
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

      function Ok() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const n = vk(e - t);

        function r(t) {
          return t < e
        }

        function o(e) {
          return e > t
        }

        function i(e) {
          return r(e) || o(e)
        }
        return {
          length: n,
          max: t,
          min: e,
          constrain: function(n) {
            return i(n) ? r(n) ? e : t : n
          },
          reachedAny: i,
          reachedMax: o,
          reachedMin: r,
          removeOffset: function(e) {
            return n ? e - n * Math.ceil((e - t) / n) : e
          }
        }
      }

      function Tk(e, t, n) {
        const {
          constrain: r
        } = Ok(0, e), o = e + 1;
        let i = a(t);

        function a(e) {
          return n ? vk((o + e) % o) : r(e)
        }

        function s() {
          return i
        }

        function l() {
          return Tk(e, s(), n)
        }
        const u = {
          get: s,
          set: function(e) {
            return i = a(e), u
          },
          add: function(e) {
            return l().set(s() + e)
          },
          clone: l
        };
        return u
      }

      function Ak(e, t, n, r, o, i, a, s, l, u, c, d, h, f, p, m, g, v, y) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], E = {
          passive: !1
        }, k = Pk(), j = Pk(), S = Ok(50, 225).constrain(f.measure(20)), C = {
          mouse: 300,
          touch: 400
        }, x = {
          mouse: 500,
          touch: 600
        }, P = p ? 43 : 25;
        let O = !1,
          T = 0,
          A = 0,
          L = !1,
          N = !1,
          R = !1,
          I = !1;

        function M(e) {
          if (!xk(e, r) && e.touches.length >= 2) return D(e);
          const t = i.readPoint(e),
            n = i.readPoint(e, b),
            a = bk(t, T),
            l = bk(n, A);
          if (!N && !I) {
            if (!e.cancelable) return D(e);
            if (N = a > l, !N) return D(e)
          }
          const c = i.pointerMove(e);
          a > m && (R = !0), u.useFriction(.3).useDuration(.75), s.start(), o.add(_(c)), e.preventDefault()
        }

        function D(e) {
          const t = c.byDistance(0, !1).index !== d.get(),
            n = i.pointerUp(e) * (p ? x : C)[I ? "mouse" : "touch"],
            r = function(e, t) {
              const n = d.add(-1 * yk(e)),
                r = c.byDistance(e, !p).distance;
              return p || vk(e) < S ? r : g && t ? .5 * r : c.byIndex(n.get(), 0).distance
            }(_(n), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (vk(e) <= vk(t)) return 0;
              const n = bk(vk(e), vk(t));
              return vk(n / e)
            }(n, r),
            a = P - 10 * o,
            s = v + o / 50;
          N = !1, L = !1, j.clear(), u.useDuration(a).useFriction(s), l.distance(r, !p), I = !1, h.emit("pointerUp")
        }

        function B(e) {
          R && (e.stopPropagation(), e.preventDefault(), R = !1)
        }
        return {
          init: function(e) {
            if (!y) return;

            function s(s) {
              (mk(y) || y(e, s)) && function(e) {
                const s = xk(e, r);
                I = s, R = p && s && !e.buttons && O, O = bk(o.get(), a.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (L = !0, i.pointerDown(e), u.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = I ? n : t;
                  j.add(e, "touchmove", M, E).add(e, "touchend", D).add(e, "mousemove", M, E).add(e, "mouseup", D)
                }(), T = i.readPoint(e), A = i.readPoint(e, b), h.emit("pointerDown"))
              }(s)
            }
            const l = t;
            k.add(l, "dragstart", (e => e.preventDefault()), E).add(l, "touchmove", (() => {}), E).add(l, "touchend", (() => {})).add(l, "touchstart", s).add(l, "mousedown", s).add(l, "touchcancel", D).add(l, "contextmenu", D).add(l, "click", B, !0)
          },
          destroy: function() {
            k.clear(), j.clear()
          },
          pointerDown: function() {
            return L
          }
        }
      }

      function Lk(e, t) {
        let n, r;

        function o(e) {
          return e.timeStamp
        }

        function i(n, r) {
          const o = "client" + ("x" === (r || e.scroll) ? "X" : "Y");
          return (xk(n, t) ? n : n.touches[0])[o]
        }
        return {
          pointerDown: function(e) {
            return n = e, r = e, i(e)
          },
          pointerMove: function(e) {
            const t = i(e) - i(r),
              a = o(e) - o(n) > 170;
            return r = e, a && (n = e), t
          },
          pointerUp: function(e) {
            if (!n || !r) return 0;
            const t = i(r) - i(n),
              a = o(e) - o(n),
              s = o(e) - o(r) > 170,
              l = t / a;
            return a && !s && vk(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function Nk(e, t, n, r, o, i, a) {
        const s = [e].concat(r);
        let l, u, c = [],
          d = !1;

        function h(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            i && (u = h(e), c = r.map(h), l = new ResizeObserver((n => {
              (mk(i) || i(o, n)) && function(n) {
                for (const i of n) {
                  if (d) return;
                  const n = i.target === e,
                    a = r.indexOf(i.target),
                    s = n ? u : c[a];
                  if (vk(h(n ? e : r[a]) - s) >= .5) {
                    o.reInit(), t.emit("resize");
                    break
                  }
                }
              }(n)
            })), n.requestAnimationFrame((() => {
              s.forEach((e => l.observe(e)))
            })))
          },
          destroy: function() {
            d = !0, l && l.disconnect()
          }
        }
      }

      function Rk(e, t, n, r, o) {
        const i = o.measure(10),
          a = o.measure(50),
          s = Ok(.1, .99);
        let l = !1;

        function u() {
          return !l && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: u,
          constrain: function(o) {
            if (!u()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              c = vk(e[l] - t.get()),
              d = n.get() - t.get(),
              h = s.constrain(c / a);
            n.subtract(d * h), !o && vk(d) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function Ik(e, t, n, r) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: a,
            reachedMax: s
          } = Ok(o, i),
          l = {
            loop: function(t) {
              if (! function(e) {
                  return 1 === e ? s(n.get()) : -1 === e && a(n.get())
                }(t)) return;
              const o = e * (-1 * t);
              r.forEach((e => e.add(o)))
            }
          };
        return l
      }

      function Mk(e) {
        let t = e;

        function n(e) {
          return fk(e) ? e : e.get()
        }
        return {
          get: function() {
            return t
          },
          set: function(e) {
            t = n(e)
          },
          add: function(e) {
            t += n(e)
          },
          subtract: function(e) {
            t -= n(e)
          }
        }
      }

      function Dk(e, t) {
        const n = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          r = t.style;
        let o = null,
          i = !1;
        const a = {
          clear: function() {
            i || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (i) return;
            const a = (s = e.direction(t), Math.round(100 * s) / 100);
            var s;
            a !== o && (r.transform = n(a), o = a)
          },
          toggleActive: function(e) {
            i = !e
          }
        };
        return a
      }

      function Bk(e, t, n, r, o, i, a, s, l) {
        const u = _k(o),
          c = _k(o).reverse(),
          d = function() {
            const e = a[0];
            return p(f(c, e), n, !1)
          }().concat(function() {
            const e = t - a[0] - 1;
            return p(f(u, e), -n, !0)
          }());

        function h(e, t) {
          return e.reduce(((e, t) => e - o[t]), t)
        }

        function f(e, t) {
          return e.reduce(((e, n) => h(e, t) > 0 ? e.concat([n]) : e), [])
        }

        function p(o, a, u) {
          const c = function(e) {
            return i.map(((n, o) => ({
              start: n - r[o] + .5 + e,
              end: n + t - .5 + e
            })))
          }(a);
          return o.map((t => {
            const r = u ? 0 : -n,
              o = u ? n : 0,
              i = u ? "end" : "start",
              a = c[t][i];
            return {
              index: t,
              loopPoint: a,
              slideLocation: Mk(-1),
              translate: Dk(e, l[t]),
              target: () => s.get() > a ? r : o
            }
          }))
        }
        const m = {
          canLoop: function() {
            return d.every((e => {
              let {
                index: n
              } = e;
              const r = u.filter((e => e !== n));
              return h(r, t) <= .1
            }))
          },
          clear: function() {
            d.forEach((e => e.translate.clear()))
          },
          loop: function() {
            d.forEach((e => {
              const {
                target: t,
                translate: n,
                slideLocation: r
              } = e, o = t();
              o !== r.get() && (n.to(o), r.set(o))
            }))
          },
          loopPoints: d
        };
        return m
      }

      function Hk(e, t, n) {
        let r, o = !1;
        return {
          init: function(i) {
            n && (r = new MutationObserver((e => {
              o || (mk(n) || n(i, e)) && function(e) {
                for (const n of e)
                  if ("childList" === n.type) {
                    i.reInit(), t.emit("slidesChanged");
                    break
                  }
              }(e)
            })), r.observe(e, {
              childList: !0
            }))
          },
          destroy: function() {
            r && r.disconnect(), o = !0
          }
        }
      }

      function zk(e, t, n, r, o, i, a) {
        const {
          align: s,
          axis: l,
          direction: u,
          startIndex: c,
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
          watchFocus: E
        } = i, k = {
          measure: function(e) {
            const {
              offsetTop: t,
              offsetLeft: n,
              offsetWidth: r,
              offsetHeight: o
            } = e;
            return {
              top: t,
              right: n + r,
              bottom: t + o,
              left: n,
              width: r,
              height: o
            }
          }
        }, j = k.measure(t), S = n.map(k.measure), C = function(e, t) {
          const n = "rtl" === t,
            r = "y" === e,
            o = !r && n ? -1 : 1;
          return {
            scroll: r ? "y" : "x",
            cross: r ? "x" : "y",
            startEdge: r ? "top" : n ? "right" : "left",
            endEdge: r ? "bottom" : n ? "left" : "right",
            measureSize: function(e) {
              const {
                height: t,
                width: n
              } = e;
              return r ? t : n
            },
            direction: function(e) {
              return e * o
            }
          }
        }(l, u), x = C.measureSize(j), P = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(x), O = function(e, t) {
          const n = {
            start: function() {
              return 0
            },
            center: function(e) {
              return r(e) / 2
            },
            end: r
          };

          function r(e) {
            return t - e
          }
          const o = {
            measure: function(r, o) {
              return pk(e) ? n[e](r) : e(t, r, o)
            }
          };
          return o
        }(s, x), T = !d && !!y, A = d || !!y, {
          slideSizes: L,
          slideSizesWithGaps: N,
          startGap: R,
          endGap: I
        } = function(e, t, n, r, o, i) {
          const {
            measureSize: a,
            startEdge: s,
            endEdge: l
          } = e, u = n[0] && o, c = function() {
            if (!u) return 0;
            const e = n[0];
            return vk(t[s] - e[s])
          }(), d = function() {
            if (!u) return 0;
            const e = i.getComputedStyle(wk(r));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), h = n.map(a), f = n.map(((e, t, n) => {
            const r = !t,
              o = kk(n, t);
            return r ? h[t] + c : o ? h[t] + d : n[t + 1][s] - e[s]
          })).map(vk);
          return {
            slideSizes: h,
            slideSizesWithGaps: f,
            startGap: c,
            endGap: d
          }
        }(C, j, S, n, A, o), M = function(e, t, n, r, o, i, a, s, l) {
          const {
            startEdge: u,
            endEdge: c,
            direction: d
          } = e, h = fk(n), f = {
            groupSlides: function(e) {
              return h ? function(e, t) {
                return _k(e).filter((e => e % t == 0)).map((n => e.slice(n, n + t)))
              }(e, n) : function(e) {
                return e.length ? _k(e).reduce(((n, h, f) => {
                  const p = wk(n) || 0,
                    m = 0 === p,
                    g = h === Ek(e),
                    v = o[u] - i[p][u],
                    y = o[u] - i[h][c],
                    b = !r && m ? d(a) : 0,
                    _ = vk(y - (!r && g ? d(s) : 0) - (v + b));
                  return f && _ > t + l && n.push(h), g && n.push(e.length), n
                }), []).map(((t, n, r) => {
                  const o = Math.max(r[n - 1] || 0);
                  return e.slice(o, t)
                })) : []
              }(e)
            }
          };
          return f
        }(C, x, g, d, j, S, R, I, 2), {
          snaps: D,
          snapsAligned: B
        } = function(e, t, n, r, o) {
          const {
            startEdge: i,
            endEdge: a
          } = e, {
            groupSlides: s
          } = o, l = s(r).map((e => wk(e)[a] - e[0][i])).map(vk).map(t.measure), u = r.map((e => n[i] - e[i])).map((e => -vk(e))), c = s(u).map((e => e[0])).map(((e, t) => e + l[t]));
          return {
            snaps: u,
            snapsAligned: c
          }
        }(C, O, j, S, M), H = -wk(D) + wk(N), {
          snapsContained: z,
          scrollContainLimit: F
        } = function(e, t, n, r) {
          const o = Ok(-t + e, 0),
            i = n.map(((e, t) => {
              const {
                min: r,
                max: i
              } = o, a = o.constrain(e), l = !t, u = kk(n, t);
              return l ? i : u || s(r, a) ? r : s(i, a) ? i : a
            })).map((e => parseFloat(e.toFixed(3)))),
            a = function() {
              const e = i[0],
                t = wk(i);
              return Ok(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function s(e, t) {
            return bk(e, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= e + 2) return [o.max];
              if ("keepSnaps" === r) return i;
              const {
                min: n,
                max: s
              } = a;
              return i.slice(n, s)
            }(),
            scrollContainLimit: a
          }
        }(x, H, B, y), V = T ? z : B, {
          limit: U
        } = function(e, t, n) {
          const r = t[0];
          return {
            limit: Ok(n ? r - e : wk(t), r)
          }
        }(H, V, d), G = Tk(Ek(V), c, d), q = G.clone(), X = _k(n), W = function(e, t, n, r) {
          const o = Pk(),
            i = 1e3 / 60;
          let a = null,
            s = 0,
            l = 0;

          function u(e) {
            if (!l) return;
            a || (a = e, n(), n());
            const o = e - a;
            for (a = e, s += o; s >= i;) n(), s -= i;
            r(s / i), l && (l = t.requestAnimationFrame(u))
          }

          function c() {
            t.cancelAnimationFrame(l), a = null, s = 0, l = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", (() => {
                e.hidden && (a = null, s = 0)
              }))
            },
            destroy: function() {
              c(), o.clear()
            },
            start: function() {
              l || (l = t.requestAnimationFrame(u))
            },
            stop: c,
            update: n,
            render: r
          }
        }(r, o, (() => (e => {
          let {
            dragHandler: t,
            scrollBody: n,
            scrollBounds: r,
            options: {
              loop: o
            }
          } = e;
          o || r.constrain(t.pointerDown()), n.seek()
        })(se)), (e => ((e, t) => {
          let {
            scrollBody: n,
            translate: r,
            location: o,
            offsetLocation: i,
            previousLocation: a,
            scrollLooper: s,
            slideLooper: l,
            dragHandler: u,
            animation: c,
            eventHandler: d,
            scrollBounds: h,
            options: {
              loop: f
            }
          } = e;
          const p = n.settled(),
            m = !h.shouldConstrain(),
            g = f ? p : p && m,
            v = g && !u.pointerDown();
          v && c.stop();
          const y = o.get() * t + a.get() * (1 - t);
          i.set(y), f && (s.loop(n.direction()), l.loop()), r.to(i.get()), v && d.emit("settle"), g || d.emit("scroll")
        })(se, e))), K = V[G.get()], $ = Mk(K), Y = Mk(K), Z = Mk(K), Q = Mk(K), J = function(e, t, n, r, o) {
          let i = 0,
            a = 0,
            s = o,
            l = .68,
            u = e.get(),
            c = 0;

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
              const t = r.get() - e.get();
              let o = 0;
              return s ? (n.set(e), i += t / s, i *= l, u += i, e.add(i), o = u - c) : (i = 0, n.set(r), e.set(r), o = t), a = yk(o), c = u, f
            },
            settled: function() {
              return vk(r.get() - t.get()) < .001
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
        }($, Z, Y, Q, h), ee = function(e, t, n, r, o) {
          const {
            reachedAny: i,
            removeOffset: a,
            constrain: s
          } = r;

          function l(e) {
            return e.concat().sort(((e, t) => vk(e) - vk(t)))[0]
          }

          function u(t, r) {
            const o = [t, t + n, t - n];
            if (!e) return t;
            if (!r) return l(o);
            const i = o.filter((e => yk(e) === r));
            return i.length ? l(i) : wk(o) - n
          }
          const c = {
            byDistance: function(n, r) {
              const l = o.get() + n,
                {
                  index: c,
                  distance: d
                } = function(n) {
                  const r = e ? a(n) : s(n),
                    o = t.map(((e, t) => ({
                      diff: u(e - r, 0),
                      index: t
                    }))).sort(((e, t) => vk(e.diff) - vk(t.diff))),
                    {
                      index: i
                    } = o[0];
                  return {
                    index: i,
                    distance: r
                  }
                }(l),
                h = !e && i(l);
              return !r || h ? {
                index: c,
                distance: n
              } : {
                index: c,
                distance: n + u(t[c] - d, 0)
              }
            },
            byIndex: function(e, n) {
              return {
                index: e,
                distance: u(t[e] - o.get(), n)
              }
            },
            shortcut: u
          };
          return c
        }(d, V, H, U, Q), te = function(e, t, n, r, o, i, a) {
          function s(o) {
            const s = o.distance,
              l = o.index !== t.get();
            i.add(s), s && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), l && (n.set(t.get()), t.set(o.index), a.emit("select"))
          }
          const l = {
            distance: function(e, t) {
              s(o.byDistance(e, t))
            },
            index: function(e, n) {
              const r = t.clone().set(e);
              s(o.byIndex(r.get(), n))
            }
          };
          return l
        }(W, G, q, J, ee, Q, a), ne = function(e) {
          const {
            max: t,
            length: n
          } = e;
          return {
            get: function(e) {
              return n ? (e - t) / -n : 0
            }
          }
        }(U), re = Pk(), oe = function(e, t, n, r) {
          const o = {};
          let i, a = null,
            s = null,
            l = !1;
          const u = {
            init: function() {
              i = new IntersectionObserver((e => {
                l || (e.forEach((e => {
                  const n = t.indexOf(e.target);
                  o[n] = e
                })), a = null, s = null, n.emit("slidesInView"))
              }), {
                root: e.parentElement,
                threshold: r
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
                return Sk(o).reduce(((t, n) => {
                  const r = parseInt(n),
                    {
                      isIntersecting: i
                    } = o[r];
                  return (e && i || !e && !i) && t.push(r), t
                }), [])
              }(e);
              return e && (a = t), e || (s = t), t
            }
          };
          return u
        }(t, n, a, m), {
          slideRegistry: ie
        } = function(e, t, n, r, o, i) {
          const {
            groupSlides: a
          } = o, {
            min: s,
            max: l
          } = r, u = function() {
            const r = a(i),
              o = !e || "keepSnaps" === t;
            return 1 === n.length ? [i] : o ? r : r.slice(s, l).map(((e, t, n) => {
              const r = !t,
                o = kk(n, t);
              return r ? jk(wk(n[0]) + 1) : o ? jk(Ek(i) - wk(n)[0] + 1, wk(n)[0]) : e
            }))
          }();
          return {
            slideRegistry: u
          }
        }(T, y, V, F, M, X), ae = function(e, t, n, r, o, i, a, s) {
          const l = {
            passive: !0,
            capture: !0
          };
          let u = 0;

          function c(e) {
            "Tab" === e.code && (u = (new Date).getTime())
          }
          const d = {
            init: function(d) {
              s && (i.add(document, "keydown", c, !1), t.forEach(((t, c) => {
                i.add(t, "focus", (t => {
                  (mk(s) || s(d, t)) && function(t) {
                    if ((new Date).getTime() - u > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = n.findIndex((e => e.includes(t)));
                    fk(i) && (o.useDuration(0), r.index(i, 0), a.emit("slideFocus"))
                  }(c)
                }), l)
              })))
            }
          };
          return d
        }(e, n, ie, te, J, re, a, E), se = {
          ownerDocument: r,
          ownerWindow: o,
          eventHandler: a,
          containerRect: j,
          slideRects: S,
          animation: W,
          axis: C,
          dragHandler: Ak(C, e, r, o, Q, Lk(C, o), $, W, te, J, ee, G, a, P, f, p, v, .68, w),
          eventStore: re,
          percentOfView: P,
          index: G,
          indexPrevious: q,
          limit: U,
          location: $,
          offsetLocation: Z,
          previousLocation: Y,
          options: i,
          resizeHandler: Nk(t, a, o, n, C, b, k),
          scrollBody: J,
          scrollBounds: Rk(U, Z, Q, J, P),
          scrollLooper: Ik(H, U, Z, [$, Z, Y, Q]),
          scrollProgress: ne,
          scrollSnapList: V.map(ne.get),
          scrollSnaps: V,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: Bk(C, x, H, L, N, D, V, Z, n),
          slideFocus: ae,
          slidesHandler: Hk(t, a, _),
          slidesInView: oe,
          slideIndexes: X,
          slideRegistry: ie,
          slidesToScroll: M,
          target: Q,
          translate: Dk(C, t)
        };
        return se
      }
      const Fk = {
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

      function Vk(e) {
        function t(e, t) {
          return Ck(e, t || {})
        }
        const n = {
          mergeOptions: t,
          optionsAtMedia: function(n) {
            const r = n.breakpoints || {},
              o = Sk(r).filter((t => e.matchMedia(t).matches)).map((e => r[e])).reduce(((e, n) => t(e, n)), {});
            return t(n, o)
          },
          optionsMediaQueries: function(t) {
            return t.map((e => Sk(e.breakpoints || {}))).reduce(((e, t) => e.concat(t)), []).map(e.matchMedia)
          }
        };
        return n
      }

      function Uk(e, t, n) {
        const r = e.ownerDocument,
          o = r.defaultView,
          i = Vk(o),
          a = function(e) {
            let t = [];
            const n = {
              init: function(n, r) {
                return t = r.filter((t => {
                  let {
                    options: n
                  } = t;
                  return !1 !== e.optionsAtMedia(n).active
                })), t.forEach((t => t.init(n, e))), r.reduce(((e, t) => Object.assign(e, {
                  [t.name]: t
                })), {})
              },
              destroy: function() {
                t = t.filter((e => e.destroy()))
              }
            };
            return n
          }(i),
          s = Pk(),
          l = function() {
            let e, t = {};

            function n(e) {
              return t[e] || []
            }
            const r = {
              init: function(t) {
                e = t
              },
              emit: function(t) {
                return n(t).forEach((n => n(e, t))), r
              },
              off: function(e, o) {
                return t[e] = n(e).filter((e => e !== o)), r
              },
              on: function(e, o) {
                return t[e] = n(e).concat([o]), r
              },
              clear: function() {
                t = {}
              }
            };
            return r
          }(),
          {
            mergeOptions: u,
            optionsAtMedia: c,
            optionsMediaQueries: d
          } = i,
          {
            on: h,
            off: f,
            emit: p
          } = l,
          m = C;
        let g, v, y, b, _ = !1,
          w = u(Fk, Uk.globalOptions),
          E = u(w),
          k = [];

        function j(t) {
          const n = zk(e, y, b, r, o, t, l);
          return t.loop && !n.slideLooper.canLoop() ? j(Object.assign({}, t, {
            loop: !1
          })) : n
        }

        function S(t, n) {
          _ || (w = u(w, t), E = c(w), k = n || k, function() {
            const {
              container: t,
              slides: n
            } = E, r = pk(t) ? e.querySelector(t) : t;
            y = r || e.children[0];
            const o = pk(n) ? y.querySelectorAll(n) : n;
            b = [].slice.call(o || y.children)
          }(), g = j(E), d([w, ...k.map((e => {
            let {
              options: t
            } = e;
            return t
          }))]).forEach((e => s.add(e, "change", C))), E.active && (g.translate.to(g.location.get()), g.animation.init(), g.slidesInView.init(), g.slideFocus.init(T), g.eventHandler.init(T), g.resizeHandler.init(T), g.slidesHandler.init(T), g.options.loop && g.slideLooper.loop(), y.offsetParent && b.length && g.dragHandler.init(T), v = a.init(T, k)))
        }

        function C(e, t) {
          const n = O();
          x(), S(u({
            startIndex: n
          }, e), t), l.emit("reInit")
        }

        function x() {
          g.dragHandler.destroy(), g.eventStore.clear(), g.translate.clear(), g.slideLooper.clear(), g.resizeHandler.destroy(), g.slidesHandler.destroy(), g.slidesInView.destroy(), g.animation.destroy(), a.destroy(), s.clear()
        }

        function P(e, t, n) {
          E.active && !_ && (g.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : E.duration), g.scrollTo.index(e, n || 0))
        }

        function O() {
          return g.index.get()
        }
        const T = {
          canScrollNext: function() {
            return g.index.add(1).get() !== O()
          },
          canScrollPrev: function() {
            return g.index.add(-1).get() !== O()
          },
          containerNode: function() {
            return y
          },
          internalEngine: function() {
            return g
          },
          destroy: function() {
            _ || (_ = !0, s.clear(), x(), l.emit("destroy"), l.clear())
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
            P(g.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            P(g.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return g.scrollProgress.get(g.offsetLocation.get())
          },
          scrollSnapList: function() {
            return g.scrollSnapList
          },
          scrollTo: P,
          selectedScrollSnap: O,
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
        return S(t, n), setTimeout((() => l.emit("init")), 0), T
      }

      function Gk() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const n = (0, h.useRef)(e),
          r = (0, h.useRef)(t),
          [o, i] = (0, h.useState)(),
          [a, s] = (0, h.useState)(),
          l = (0, h.useCallback)((() => {
            o && o.reInit(n.current, r.current)
          }), [o]);
        return (0, h.useEffect)((() => {
          dk(n.current, e) || (n.current = e, l())
        }), [e, l]), (0, h.useEffect)((() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const n = hk(e),
              r = hk(t);
            return n.every(((e, t) => dk(e, r[t])))
          })(r.current, t) || (r.current = t, l())
        }), [t, l]), (0, h.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            Uk.globalOptions = Gk.globalOptions;
            const e = Uk(a, n.current, r.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }), [a, i]), [s, o]
      }

      function qk() {
        let e, t = [];
        const n = ["select", "slideFocus"];

        function r() {
          const {
            slideRegistry: n
          } = e.internalEngine(), r = n[e.selectedScrollSnap()];
          return r ? r.map((e => t[e])).reduce(((e, t) => Math.max(e, t)), 0) : null
        }

        function o() {
          null !== r() && (e.containerNode().style.height = `${r()}px`)
        }
        return {
          name: "autoHeight",
          options: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          init: function(r) {
            e = r;
            const {
              options: {
                axis: i
              },
              slideRects: a
            } = e.internalEngine();
            "y" !== i && (t = a.map((e => e.height)), n.forEach((t => e.on(t, o))), o())
          },
          destroy: function() {
            n.forEach((t => e.off(t, o)));
            const t = e.containerNode();
            t.style.height = "", t.getAttribute("style") || t.removeAttribute("style")
          }
        }
      }
      Uk.globalOptions = void 0, Gk.globalOptions = void 0, qk.globalOptions = void 0;
      const Xk = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function Wk(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function Kk(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function $k(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function Yk() {
        let e, t, n, r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = [],
          a = [];
        const s = ["select"],
          l = ["pointerDown", "pointerUp"],
          u = ["slidesInView"],
          c = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: []
          };

        function d(e, t) {
          ("pointerDown" === t ? $k : Kk)(n, c.dragging)
        }

        function h() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 2 ? arguments[2] : void 0;
          const n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((e => r[e])),
            o = e.map((e => r[e]));
          return n.forEach((e => Kk(e, t))), o.forEach((e => $k(e, t))), e
        }

        function f() {
          const {
            slideRegistry: e
          } = t.internalEngine(), n = e[t.selectedScrollSnap()];
          i = h(n, i, c.snapped)
        }

        function p() {
          const e = t.slidesInView();
          a = h(e, a, c.inView)
        }
        const m = {
          name: "classNames",
          options: o,
          init: function(i, a) {
            t = i;
            const {
              mergeOptions: h,
              optionsAtMedia: m
            } = a, g = h(Xk, Yk.globalOptions), v = h(g, o);
            e = m(v), n = t.rootNode(), r = t.slideNodes();
            const {
              watchDrag: y,
              loop: b
            } = t.internalEngine().options, _ = !!y;
            e.loop && b && (c.loop = Wk(e.loop), $k(n, c.loop)), e.draggable && _ && (c.draggable = Wk(e.draggable), $k(n, c.draggable)), e.dragging && (c.dragging = Wk(e.dragging), l.forEach((e => t.on(e, d)))), e.snapped && (c.snapped = Wk(e.snapped), s.forEach((e => t.on(e, f))), f()), e.inView && (c.inView = Wk(e.inView), u.forEach((e => t.on(e, p))), p())
          },
          destroy: function() {
            l.forEach((e => t.off(e, d))), s.forEach((e => t.off(e, f))), u.forEach((e => t.off(e, p))), Kk(n, c.loop), Kk(n, c.draggable), Kk(n, c.dragging), h([], i, c.snapped), h([], a, c.inView), Object.keys(c).forEach((e => {
              c[e] = []
            }))
          }
        };
        return m
      }
      Yk.globalOptions = void 0;
      const Zk = (0, h.createContext)(null);

      function Qk() {
        const e = (0, h.useContext)(Zk);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Jk = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          loopPagination: r,
          status: o,
          background: i,
          align: a = "left",
          ...s
        }, l) => {
          const u = (({
              loopPagination: e = !0
            }) => {
              const t = Y(),
                n = q(),
                [r, o] = (0, h.useState)([]),
                i = r.length,
                [a, s] = (0, h.useState)(0),
                [l, u] = Gk({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [qk(), Yk()]),
                c = (0, h.useRef)(0),
                d = (0, h.useRef)(!1),
                f = r[a],
                p = (0, h.useCallback)((e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach(((e, n) => {
                    e.style.visibility = n === t ? "visible" : "hidden"
                  })), s(t), d.current = !0
                }), [u]),
                m = (0, h.useCallback)((e => {
                  c.current = .94 * e.scrollSnapList().length
                }), []),
                g = (0, h.useCallback)(((e, t) => {
                  const n = e.internalEngine(),
                    r = e.scrollProgress(),
                    o = e.slidesInView(),
                    i = "scroll" === t;
                  e.scrollSnapList().forEach(((t, a) => {
                    let s = t - r;
                    n.slideRegistry[a].forEach((a => {
                      if (i && !o.includes(a)) return;
                      n.options.loop && n.slideLooper.loopPoints.forEach((e => {
                        const n = e.target();
                        if (a === e.index && 0 !== n) {
                          const e = Math.sign(n); - 1 === e && (s = t - (1 + r)), 1 === e && (s = t + (1 - r))
                        }
                      }));
                      const l = (u = 1 - Math.abs(s * c.current), Math.min(Math.max(u, 0), 1)).toString();
                      var u;
                      e.slideNodes()[a].style.opacity = l
                    }))
                  }))
                }), []);
              return (0, h.useEffect)((() => {
                u && (m(u), g(u), u.on("reInit", m).on("reInit", g).on("scroll", g).on("slideFocus", g))
              }), [u, g]), (0, h.useEffect)((() => {
                u && (p(u), u.on("select", p).on("reInit", p))
              }), [u, p]), {
                setAlerts: o,
                alerts: r,
                numAlerts: i,
                emblaRef: l,
                prevAlert: () => u?.scrollPrev(n),
                nextAlert: () => u?.scrollNext(n),
                currentAlert: f,
                currentAlertIndex: a,
                setCurrentAlertIndex: s,
                isInitialized: d.current,
                loopPagination: e,
                canScrollNext: () => u?.canScrollNext() || !1,
                canScrollPrev: () => u?.canScrollPrev() || !1
              }
            })({
              loopPagination: r
            }),
            {
              currentAlert: f,
              isInitialized: m,
              setAlerts: g,
              numAlerts: v
            } = u;
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
              className: uk(f)
            }, y),
            _ = e ? p.DX : "div";
          return (0, c.jsx)(Zk.Provider, {
            value: u,
            children: (0, c.jsx)(_, {
              ref: l,
              "data-testid": n,
              "data-initialized": m,
              ...b,
              children: t
            })
          })
        })),
        ej = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        tj = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const {
            currentAlert: r
          } = Qk();
          if (!e && !r || !r?.status) return null;
          const o = e || ej[r.status],
            i = z[o],
            a = (0, d.v6)(t, {
              className: "foundry_nk7jgu_qmpv6yn"
            });
          return (0, c.jsx)(i, {
            title: "",
            ref: n,
            size: "LG",
            "data-icon": !0,
            ...a
          })
        })),
        nj = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? p.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_nk7jgu_qmpv6yo"
            });
          return (0, c.jsx)(H, {
            size: "SM",
            asChild: !0,
            children: (0, c.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...i
            })
          })
        })),
        rj = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          align: n = "left",
          status: r,
          background: o,
          ...i
        }, a) => {
          const s = e ? p.DX : "div",
            l = (0, d.v6)(i, {
              className: "foundry_nk7jgu_qmpv6yk"
            });
          return (0, c.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...l
          })
        })),
        oj = (0, h.forwardRef)((({
          testId: e,
          children: t,
          ...n
        }, r) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = Qk(), a = (0, d.v6)(n, {
            className: "foundry_nk7jgu_qmpv6yl"
          }), s = G(i, r), l = h.Children.map(t, (e => {
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
          }), []), (0, c.jsx)("div", {
            ref: s,
            "data-testid": e,
            ...a,
            children: (0, c.jsx)("div", {
              className: "foundry_nk7jgu_qmpv6ym",
              children: t
            })
          })
        })),
        ij = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, h.useRef)(null),
            a = G(i, o),
            s = e ? p.DX : "a",
            {
              linkProps: l,
              isPressed: u
            } = RE(r, i),
            f = (0, d.v6)(r, {
              className: "foundry_nk7jgu_qmpv6yp foundry_nk7jgu_1d5mo5m0"
            });
          return (0, c.jsx)(H, {
            asChild: !0,
            size: "SM",
            appearance: "hyperlink",
            children: (0, c.jsx)(s, {
              "data-pressed": u,
              "data-testid": n,
              ref: a,
              ...l,
              ...f,
              children: t
            })
          })
        })),
        aj = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const r = (0, d.v6)(t, {
            className: "foundry_nk7jgu_qmpv6yq"
          });
          return (0, c.jsx)(sp, {
            ref: n,
            label: "close alert",
            "data-close-btn": !0,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "XS",
            ...r
          })
        })),
        sj = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          children: n,
          ...r
        }, o) => {
          const i = e ? p.DX : "div",
            a = (0, d.v6)(r, {
              className: "foundry_nk7jgu_qmpv6ys"
            });
          return (0, c.jsx)(i, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            "aria-label": "alert navigation",
            ...a,
            children: n
          })
        })),
        lj = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            nextAlert: r,
            canScrollNext: o
          } = Qk(), i = (0, d.v6)(t, {
            className: lk
          });
          return (0, c.jsx)(sp, {
            ref: n,
            label: "next alert",
            size: "XS",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: r,
            isDisabled: !o(),
            ...i
          })
        })),
        uj = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            prevAlert: r,
            canScrollPrev: o
          } = Qk(), i = (0, d.v6)(t, {
            className: lk
          });
          return (0, c.jsx)(sp, {
            ref: n,
            label: "previous alert",
            size: "XS",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: r,
            isDisabled: !o(),
            ...i
          })
        })),
        cj = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            currentAlertIndex: r,
            numAlerts: o
          } = Qk(), i = (0, d.v6)(t, {
            className: "foundry_nk7jgu_qmpv6yr"
          });
          return (0, c.jsx)(H, {
            size: "SM",
            appearance: "bold",
            asChild: !0,
            children: (0, c.jsxs)("div", {
              ref: n,
              "data-testid": e,
              "aria-hidden": !0,
              ...i,
              children: [r + 1, "/", o]
            })
          })
        }));

      function dj(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function hj(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function fj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hj(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = dj(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hj(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function pj(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var mj = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        gj = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = fj(fj({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) mj(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return pj(e.variantClassNames, (e => pj(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        vj = gj({
          defaultClassName: "foundry_nk7jgu_oahh5811",
          variantClassNames: {
            background: {
              static: "foundry_nk7jgu_oahh5812",
              "two-tone": "foundry_nk7jgu_oahh5813",
              none: "foundry_nk7jgu_oahh5814"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yj = gj({
          defaultClassName: "foundry_nk7jgu_oahh583",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_oahh584",
              LG: "foundry_nk7jgu_oahh585"
            },
            hasBorder: {
              true: "foundry_nk7jgu_oahh586",
              false: "foundry_nk7jgu_oahh587"
            },
            background: {
              static: "foundry_nk7jgu_oahh588",
              "two-tone": "foundry_nk7jgu_oahh589",
              none: "foundry_nk7jgu_oahh58a"
            },
            color: {
              monochrome: "foundry_nk7jgu_oahh58b",
              blue: "foundry_nk7jgu_oahh58c",
              green: "foundry_nk7jgu_oahh58d",
              grey: "foundry_nk7jgu_oahh58e",
              red: "foundry_nk7jgu_oahh58f",
              seafoam: "foundry_nk7jgu_oahh58g",
              yellow: "foundry_nk7jgu_oahh58h"
            },
            isDisabled: {
              true: "foundry_nk7jgu_oahh58i",
              false: "foundry_nk7jgu_oahh58j"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              background: "static",
              color: "monochrome"
            }, "foundry_nk7jgu_oahh58k"],
            [{
              background: "static",
              color: "blue"
            }, "foundry_nk7jgu_oahh58l"],
            [{
              background: "static",
              color: "green"
            }, "foundry_nk7jgu_oahh58m"],
            [{
              background: "static",
              color: "grey"
            }, "foundry_nk7jgu_oahh58n"],
            [{
              background: "static",
              color: "red"
            }, "foundry_nk7jgu_oahh58o"],
            [{
              background: "static",
              color: "seafoam"
            }, "foundry_nk7jgu_oahh58p"],
            [{
              background: "static",
              color: "yellow"
            }, "foundry_nk7jgu_oahh58q"],
            [{
              background: "two-tone",
              color: "monochrome"
            }, "foundry_nk7jgu_oahh58r"],
            [{
              background: "two-tone",
              color: "blue"
            }, "foundry_nk7jgu_oahh58s"],
            [{
              background: "two-tone",
              color: "green"
            }, "foundry_nk7jgu_oahh58t"],
            [{
              background: "two-tone",
              color: "grey"
            }, "foundry_nk7jgu_oahh58u"],
            [{
              background: "two-tone",
              color: "red"
            }, "foundry_nk7jgu_oahh58v"],
            [{
              background: "two-tone",
              color: "seafoam"
            }, "foundry_nk7jgu_oahh58w"],
            [{
              background: "two-tone",
              color: "yellow"
            }, "foundry_nk7jgu_oahh58x"],
            [{
              hasBorder: !1,
              background: "none",
              isDisabled: !1
            }, "foundry_nk7jgu_oahh58y"]
          ]
        });
      const bj = (0, h.createContext)(null);

      function _j() {
        const e = (0, h.useContext)(bj);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const wj = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          size: r,
          background: o,
          color: i,
          hasBorder: a,
          isDisabled: s,
          ...l
        }, u) => {
          const h = {
              size: r,
              background: o,
              color: i,
              hasBorder: a,
              isDisabled: s
            },
            f = (0, d.v6)(l, {
              className: yj(h)
            }),
            m = e ? p.DX : "div";
          return (0, c.jsx)(bj.Provider, {
            value: h,
            children: (0, c.jsx)(m, {
              ref: u,
              "data-testid": n,
              "aria-disabled": s,
              ...f,
              children: t
            })
          })
        })),
        Ej = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            size: i
          } = _j(), a = e ? p.DX : "div", s = (0, d.v6)(r, {
            className: "foundry_nk7jgu_oahh58z"
          });
          return (0, c.jsx)(H, {
            size: "MD" === i ? "SM" : "LG",
            asChild: !0,
            children: (0, c.jsx)(a, {
              ref: o,
              "data-testid": n,
              ...s,
              children: t
            })
          })
        })),
        kj = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const r = z[e],
            o = (0, d.v6)(t, {
              className: "foundry_nk7jgu_oahh5810"
            });
          return (0, c.jsx)(r, {
            ref: n,
            size: "MD",
            ...o
          })
        })),
        jj = (0, h.forwardRef)((({
          testId: e,
          label: t = "close tag",
          ...n
        }, r) => {
          const {
            background: o,
            isDisabled: i
          } = _j(), a = (0, d.v6)(n, {
            className: vj({
              background: o
            })
          });
          return (0, c.jsx)(sp, {
            ref: r,
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

      function Sj(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Cj(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function xj(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Cj(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Sj(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cj(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Pj(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Oj = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Tj = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = xj(xj({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Oj(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Pj(e.variantClassNames, (e => Pj(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Aj = Tj({
          defaultClassName: "foundry_nk7jgu_m1icrx6 foundry_nk7jgu_1d5mo5m0",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_m1icrx7 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd11",
              LG: "foundry_nk7jgu_m1icrx8 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdw foundry_nk7jgu_tdsdcd11"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Lj = Tj({
          defaultClassName: "foundry_nk7jgu_m1icrx3",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd11",
              LG: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdw foundry_nk7jgu_tdsdcd11"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Nj = Tj({
          defaultClassName: "foundry_nk7jgu_m1icrx0",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_m1icrx1",
              LG: "foundry_nk7jgu_m1icrx2"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function Rj() {
        const e = (0, h.useContext)(Ij);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Ij = (0, h.createContext)(null),
        Mj = (0, h.forwardRef)((({
          children: e,
          testId: t,
          asChild: n,
          size: r = "MD",
          ...o
        }, i) => {
          const a = (0, d.v6)({
              className: Nj({
                size: r
              })
            }, o),
            s = n ? p.DX : "ol";
          return (0, c.jsx)(Ij.Provider, {
            value: {
              size: r
            },
            children: (0, c.jsx)(s, {
              ref: i,
              "data-testid": t,
              ...a,
              children: e
            })
          })
        })),
        Dj = (0, h.forwardRef)((({
          isCurrent: e,
          children: t,
          asChild: n,
          testId: r,
          ...o
        }, i) => {
          const a = (0, h.useRef)(null),
            {
              size: s
            } = Rj(),
            {
              itemProps: l
            } = function(e, t) {
              let {
                isCurrent: n,
                isDisabled: r,
                "aria-current": o,
                elementType: i = "a",
                ...a
              } = e, {
                linkProps: s
              } = RE({
                isDisabled: r || n,
                elementType: i,
                ...a
              }, t), l = {};
              return /^h[1-6]$/.test(i) || (l = s), n && (l["aria-current"] = o || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": r,
                  ...l
                }
              }
            }({
              isCurrent: e,
              children: t
            }, a),
            u = n ? p.DX : "a",
            f = (0, d.v6)({
              className: (0, L.$)(Aj({
                size: s
              }), e && "foundry_nk7jgu_m1icrx9"),
              "data-testid": r
            }, l, o);
          return (0, c.jsx)("li", {
            className: Lj({
              size: s
            }),
            ref: i,
            children: (0, c.jsx)(u, {
              ref: a,
              ...f,
              children: t
            })
          })
        })),
        Bj = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const r = z[e];
          return (0, c.jsx)(r, {
            ref: n,
            size: "LG",
            ...t
          })
        })),
        Hj = (0, h.forwardRef)((({
          children: e,
          testId: t,
          defaultOpen: n = !1,
          label: r = "Show hidden breadcrumbs",
          ...o
        }, i) => {
          const [a, s] = (0, h.useState)(n), {
            size: l
          } = Rj(), u = (0, d.v6)({
            className: Lj({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, c.jsx)("li", {
            ref: i,
            ...u,
            children: (0, c.jsxs)(My, {
              open: a,
              onOpenChange: () => s(!a),
              children: [(0, c.jsx)(Dy, {
                className: "foundry_nk7jgu_m1icrxa foundry_nk7jgu_1d5mo5m0 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd11",
                "aria-label": r,
                children: "..."
              }), (0, c.jsx)(zy, {
                children: (0, c.jsx)(Fy, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_nk7jgu_m1icrxb",
                  children: (0, c.jsx)(Vy, {
                    className: "foundry_nk7jgu_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        })),
        zj = (0, h.forwardRef)((({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const i = t ? p.DX : Uy,
            a = (0, d.v6)({
              className: "foundry_nk7jgu_m1icrxd foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd10",
              "data-testid": n
            }, r);
          return (0, c.jsx)(i, {
            ref: o,
            ...a,
            children: e
          })
        }))
    },
    79895: e => {
      var t = {}.hasOwnProperty,
        n = /[ -,\.\/:-@\[-\^`\{-~]/,
        r = /[ -,\.\/:-@\[\]\^`\{-~]/,
        o = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        i = function e(i, a) {
          "single" != (a = function(e, n) {
            if (!e) return n;
            var r = {};
            for (var o in n) r[o] = t.call(e, o) ? e[o] : n[o];
            return r
          }(a, e.options)).quotes && "double" != a.quotes && (a.quotes = "single");
          for (var s = "double" == a.quotes ? '"' : "'", l = a.isIdentifier, u = i.charAt(0), c = "", d = 0, h = i.length; d < h;) {
            var f = i.charAt(d++),
              p = f.charCodeAt(),
              m = void 0;
            if (p < 32 || p > 126) {
              if (p >= 55296 && p <= 56319 && d < h) {
                var g = i.charCodeAt(d++);
                56320 == (64512 & g) ? p = ((1023 & p) << 10) + (1023 & g) + 65536 : d--
              }
              m = "\\" + p.toString(16).toUpperCase() + " "
            } else m = a.escapeEverything ? n.test(f) ? "\\" + f : "\\" + p.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(f) ? "\\" + p.toString(16).toUpperCase() + " " : "\\" == f || !l && ('"' == f && s == f || "'" == f && s == f) || l && r.test(f) ? "\\" + f : f;
            c += m
          }
          return l && (/^-[-\d]/.test(c) ? c = "\\-" + c.slice(1) : /\d/.test(u) && (c = "\\3" + u + " " + c.slice(1))), c = c.replace(o, (function(e, t, n) {
            return t && t.length % 2 ? e : (t || "") + n
          })), !l && a.wrap ? s + c + s : c
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