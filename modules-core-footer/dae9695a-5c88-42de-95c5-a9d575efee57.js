try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "dae9695a-5c88-42de-95c5-a9d575efee57", e._sentryDebugIdIdentifier = "sentry-dbid-dae9695a-5c88-42de-95c5-a9d575efee57")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [6642], {
    12454: (e, t, n) => {
      n.r(t), n.d(t, {
        Alert: () => a,
        AlertBanner: () => s,
        Body: () => V,
        Breadcrumbs: () => c,
        Button: () => dn,
        Checkbox: () => Uy,
        Code: () => c_,
        Display: () => $b,
        Divider: () => Rb,
        Dropdown: () => xy,
        Heading: () => P,
        IconButton: () => lh,
        Label: () => n_,
        Lightbox: () => jg,
        Loader: () => x_,
        Option: () => Ey,
        RadioButton: () => Sb,
        RadioContext: () => gb,
        RadioGroup: () => vb,
        Switch: () => Wb,
        Tag: () => l,
        Text: () => R,
        TextArea: () => jt,
        TextField: () => i,
        TextSemantics: () => L,
        Tooltip: () => fm
      });
      var r = {};
      n.r(r), n.d(r, {
        CheckLG: () => Cy,
        CheckMD: () => Sy,
        CheckXL: () => Ty,
        DashLG: () => Ny,
        DashMD: () => Oy,
        DashXL: () => jy
      });
      var o = {};
      n.r(o), n.d(o, {
        DotLG: () => bb,
        DotMD: () => yb,
        DotXL: () => _b
      });
      var i = {};
      n.r(i), n.d(i, {
        Button: () => Sw,
        Control: () => xw,
        Description: () => Tw,
        Hint: () => ww,
        Icon: () => Pw,
        Input: () => Ew,
        Label: () => _w,
        PasswordButton: () => Cw,
        Root: () => bw
      });
      var a = {};
      n.r(a), n.d(a, {
        Body: () => zw,
        CloseButton: () => Yw,
        Description: () => Xw,
        ErrorText: () => $w,
        Footer: () => Ww,
        Header: () => Fw,
        Icon: () => Gw,
        Link: () => Kw,
        Root: () => Vw,
        RootContext: () => Hw,
        Title: () => qw,
        iconStatusMap: () => Uw,
        useAlertContext: () => Bw
      });
      var s = {};
      n.r(s), n.d(s, {
        Alert: () => Zx,
        CloseButton: () => eE,
        Description: () => Yx,
        Icon: () => $x,
        Link: () => Jx,
        PaginationCounter: () => oE,
        PaginationNav: () => tE,
        PaginationNextButton: () => nE,
        PaginationPrevButton: () => rE,
        PaginationViewport: () => Qx,
        Root: () => Kx,
        RootContext: () => qx,
        iconStatusMap: () => Wx,
        useAlertBannerContext: () => Xx
      });
      var l = {};
      n.r(l), n.d(l, {
        CloseButton: () => yE,
        Icon: () => vE,
        Label: () => gE,
        Root: () => mE,
        RootContext: () => fE,
        useTagContext: () => pE
      });
      var c = {};
      n.r(c), n.d(c, {
        Icon: () => RE,
        Item: () => LE,
        OverflowMenu: () => AE,
        OverflowMenuItem: () => IE,
        Root: () => jE,
        RootContext: () => NE,
        useBreadcrumbsContext: () => OE
      });
      var u = n(70954),
        d = n(84105),
        h = n(71127),
        f = n.t(h, 2),
        p = n.n(h),
        m = n(6385);

      function g(e) {
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

      function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? v(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = g(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function b(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var _, w, x = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        E = (_ = {
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
        }, (w = e => {
          var t = _.defaultClassName,
            n = y(y({}, _.defaultVariants), e);
          for (var r in n) {
            var o, i = null !== (o = n[r]) && void 0 !== o ? o : _.defaultVariants[r];
            if (null != i) {
              var a = i;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var s = _.variantClassNames[r][a];
              s && (t += " " + s)
            }
          }
          for (var [l, c] of _.compoundVariants) x(l, n, _.defaultVariants) && (t += " " + c);
          return t
        }).variants = () => Object.keys(_.variantClassNames), w.classNames = {
          get base() {
            return _.defaultClassName.split(" ")[0]
          },
          get variants() {
            return b(_.variantClassNames, (e => b(e, (e => e.split(" ")[0]))))
          }
        }, w);
      const P = (0, h.forwardRef)((({
        asChild: e,
        level: t,
        testId: n,
        ...r
      }, o) => {
        const i = e ? m.DX : `h${t}`,
          a = (0, d.v6)(r, {
            className: E({
              level: t
            })
          });
        return (0, u.jsx)(i, {
          ref: o,
          "data-testid": n,
          ...a
        })
      }));

      function S(e) {
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

      function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? C(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = S(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function O(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var N = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        j = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = T(T({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) N(c, r, e.defaultVariants) && (n += " " + u);
            return n
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
      const L = {
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
        R = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          semantic: n = "default",
          ...r
        }, o) => {
          const i = e ? m.DX : L[n] || "span",
            a = (0, d.v6)(r, {
              className: j({
                semantic: n
              })
            });
          return (0, u.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }));
      var A = n(5060);

      function I(e) {
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

      function D(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? D(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = I(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(t) {
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
      var H = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        B = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = k(k({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) H(c, r, e.defaultVariants) && (n += " " + u);
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
      const V = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const a = e ? m.DX : "p",
          s = (0, d.v6)({
            className: B({
              size: r,
              appearance: n
            })
          }, o);
        return (0, u.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      }));
      var F = n(32109),
        z = n(16237);
      const U = new Set(["id"]),
        G = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        q = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        X = /^(data-.*)$/;

      function K(e, t = {}) {
        let {
          labelable: n,
          isLink: r,
          propNames: o
        } = t, i = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (U.has(t) || n && G.has(t) || r && q.has(t) || (null == o ? void 0 : o.has(t)) || X.test(t)) && (i[t] = e[t]);
        return i
      }
      const W = "undefined" != typeof document ? h.useLayoutEffect : () => {};

      function $(e) {
        const t = (0, h.useRef)(null);
        return W((() => {
          t.current = e
        }), [e]), (0, h.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }

      function Y(e, t, n) {
        let r = (0, h.useRef)(t),
          o = $((() => {
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
      const Z = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Q = e => e && "window" in e && e.window === e ? e : Z(e).defaultView || window;

      function J(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      const ee = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        te = h.createContext(ee),
        ne = h.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let re = new WeakMap;
      const oe = "function" == typeof h.useId ? function(e) {
        let t = h.useId(),
          [n] = (0, h.useState)(le());
        return e || `${n?"react-aria":`react-aria${ee.prefix}`}-${t}`
      } : function(e) {
        let t = (0, h.useContext)(te),
          n = function(e = !1) {
            let t = (0, h.useContext)(te),
              n = (0, h.useRef)(null);
            if (null === n.current && !e) {
              var r, o;
              let e = null === (o = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let n = re.get(e);
                null == n ? re.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, re.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          r = `react-aria${t.prefix}`;
        return e || `${r}-${n}`
      };

      function ie() {
        return !1
      }

      function ae() {
        return !0
      }

      function se(e) {
        return () => {}
      }

      function le() {
        return "function" == typeof h.useSyncExternalStore ? h.useSyncExternalStore(se, ie, ae) : (0, h.useContext)(ne)
      }
      let ce, ue = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        de = new Map;

      function he(e) {
        let [t, n] = (0, h.useState)(e), r = (0, h.useRef)(null), o = oe(t), i = (0, h.useRef)(null);
        if (ce && ce.register(i, o), ue) {
          const e = de.get(o);
          e && !e.includes(r) ? e.push(r) : de.set(o, [r])
        }
        return W((() => {
          let e = o;
          return () => {
            ce && ce.unregister(i), de.delete(e)
          }
        }), [o]), (0, h.useEffect)((() => {
          let e = r.current;
          return e && n(e), () => {
            e && (r.current = null)
          }
        })), o
      }

      function fe(e, t) {
        if (e === t) return e;
        let n = de.get(e);
        if (n) return n.forEach((e => e.current = t)), t;
        let r = de.get(t);
        return r ? (r.forEach((t => t.current = e)), e) : t
      }

      function pe(e = []) {
        let t = he(),
          [n, r] = function(e) {
            let [t, n] = (0, h.useState)(e), r = (0, h.useRef)(null), o = $((() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : t === e.value ? o() : n(e.value)
            }));
            W((() => {
              r.current && o()
            }));
            let i = $((e => {
              r.current = e(t), o()
            }));
            return [t, i]
          }(t),
          o = (0, h.useCallback)((() => {
            r((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, r]);
        return W(o, [t, o, ...e]), n
      }

      function me(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = J(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = fe(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, A.A)(n, o)
          }
        }
        return t
      }

      function ge(e, t, n) {
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

      function ve(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = he(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function ye(e) {
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
          t = he(t);
          let a = he(),
            s = {};
          return n && (r = r ? `${a} ${r}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: s,
            fieldProps: ve({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = pe([Boolean(t), Boolean(n), r, o]), l = pe([Boolean(t), Boolean(n), r, o]);
        return a = me(a, {
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
      "undefined" != typeof FinalizationRegistry && (ce = new FinalizationRegistry((e => {
        de.delete(e)
      })));
      const be = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        _e = be.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      be.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const we = be.join(':not([hidden]):not([tabindex="-1"]),');

      function xe(e) {
        return e.matches(_e)
      }

      function Ee(e) {
        return e.matches(we)
      }

      function Pe(e) {
        if (function() {
            if (null == Se) {
              Se = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Se = !0, !0
                  }
                })
              } catch {}
            }
            return Se
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
      let Se = null;

      function Ce(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function Te(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function Oe(e) {
        let t = (0, h.useRef)({
          isFocused: !1,
          observer: null
        });
        W((() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }), []);
        let n = $((t => {
          null == e || e(t)
        }));
        return (0, h.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let r = e.target,
              o = e => {
                if (t.current.isFocused = !1, r.disabled) {
                  let t = Ce(e);
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
      let Ne = !1;

      function je(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function Le(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Re(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Ae = Re((function() {
          return Le(/^Mac/i)
        })),
        Ie = Re((function() {
          return Le(/^iPhone/i)
        })),
        De = Re((function() {
          return Le(/^iPad/i) || Ae() && navigator.maxTouchPoints > 1
        })),
        ke = Re((function() {
          return Ie() || De()
        })),
        Me = (Re((function() {
          return Ae() || ke()
        })), Re((function() {
          return je(/AppleWebKit/i) && !He()
        }))),
        He = Re((function() {
          return je(/Chrome/i)
        })),
        Be = Re((function() {
          return je(/Android/i)
        })),
        Ve = Re((function() {
          return je(/Firefox/i)
        }));

      function Fe(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (Be() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let ze = null,
        Ue = new Set,
        Ge = new Map,
        qe = !1,
        Xe = !1;

      function Ke(e, t) {
        for (let n of Ue) n(e, t)
      }

      function We(e) {
        qe = !0,
          function(e) {
            return !(e.metaKey || !Ae() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (ze = "keyboard", Ke("keyboard", e))
      }

      function $e(e) {
        ze = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (qe = !0, Ke("pointer", e))
      }

      function Ye(e) {
        Fe(e) && (qe = !0, ze = "virtual")
      }

      function Ze(e) {
        e.target !== window && e.target !== document && !Ne && e.isTrusted && (qe || Xe || (ze = "virtual", Ke("virtual", e)), qe = !1, Xe = !1)
      }

      function Qe() {
        Ne || (qe = !1, Xe = !0)
      }

      function Je(e) {
        if ("undefined" == typeof window || Ge.get(Q(e))) return;
        const t = Q(e),
          n = Z(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          qe = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", We, !0), n.addEventListener("keyup", We, !0), n.addEventListener("click", Ye, !0), t.addEventListener("focus", Ze, !0), t.addEventListener("blur", Qe, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", $e, !0), n.addEventListener("pointermove", $e, !0), n.addEventListener("pointerup", $e, !0)), t.addEventListener("beforeunload", (() => {
          et(e)
        }), {
          once: !0
        }), Ge.set(t, {
          focus: r
        })
      }
      const et = (e, t) => {
        const n = Q(e),
          r = Z(e);
        t && r.removeEventListener("DOMContentLoaded", t), Ge.has(n) && (n.HTMLElement.prototype.focus = Ge.get(n).focus, r.removeEventListener("keydown", We, !0), r.removeEventListener("keyup", We, !0), r.removeEventListener("click", Ye, !0), n.removeEventListener("focus", Ze, !0), n.removeEventListener("blur", Qe, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", $e, !0), r.removeEventListener("pointermove", $e, !0), r.removeEventListener("pointerup", $e, !0)), Ge.delete(n))
      };
      "undefined" != typeof document && function(e) {
        const t = Z(e);
        let n;
        "loading" !== t.readyState ? Je(e) : (n = () => {
          Je(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function tt(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      const nt = (e = document) => e.activeElement;

      function rt(e) {
        return e.target
      }
      let ot = new Map,
        it = new Set;

      function at() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = ot.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), ot.delete(n.target)), 0 === ot.size)) {
            for (let e of it) e();
            it.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = ot.get(n.target);
          r || (r = new Set, ot.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function st(e) {
        requestAnimationFrame((() => {
          0 === ot.size ? e() : it.add(e)
        }))
      }

      function lt(e) {
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

      function ct(e, t) {
        W((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? at() : document.addEventListener("DOMContentLoaded", at));
      let ut = h.createContext(null);

      function dt(e, t) {
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
            a = Oe(i),
            s = (0, h.useCallback)((e => {
              const t = Z(e.target),
                r = t ? nt(t) : nt();
              e.target === e.currentTarget && r === rt(e.nativeEvent) && (n && n(e), o && o(!0), a(e))
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
              onKeyDown: lt(e.onKeyDown),
              onKeyUp: lt(e.onKeyUp)
            }
          }
        }(e), o = me(n, r), i = function(e) {
          let t = (0, h.useContext)(ut) || {};
          ct(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), a = e.isDisabled ? {} : i, s = (0, h.useRef)(e.autoFocus);
        (0, h.useEffect)((() => {
          s.current && t.current && function(e) {
            const t = Z(e),
              n = nt(t);
            if ("virtual" === ze) {
              let r = n;
              st((() => {
                nt(t) === r && e.isConnected && Pe(e)
              }))
            } else Pe(e)
          }(t.current), s.current = !1
        }), [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: me({
            ...o,
            tabIndex: l
          }, a)
        }
      }

      function ht(e, t, n) {
        let {
          validationBehavior: r,
          focus: o
        } = e;
        W((() => {
          if ("native" === r && (null == n ? void 0 : n.current) && !n.current.disabled) {
            let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = n.current).validity.valid,
              validationDetails: ft(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let i = $((() => {
            t.resetValidation()
          })),
          a = $((e => {
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
            }(i) === n.current && (o ? o() : null === (a = n.current) || void 0 === a || a.focus(), ze = "keyboard", Ke("keyboard", null)), e.preventDefault()
          })),
          s = $((() => {
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

      function ft(e) {
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
      const pt = {
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
        mt = {
          ...pt,
          customError: !0,
          valid: !1
        },
        gt = {
          isInvalid: !1,
          validationDetails: pt,
          validationErrors: []
        },
        vt = (0, h.createContext)({}),
        yt = "__formValidationState" + Date.now();

      function bt(e) {
        if (e[yt]) {
          let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          } = e[yt];
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
              validationDetails: mt
            } : null,
            c = (0, h.useMemo)((() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let n = e(t);
                  if (n && "boolean" != typeof n) return _t(n)
                }
                return []
              }(a, o);
              return wt(e)
            }), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let u = (0, h.useContext)(vt),
            d = (0, h.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => _t(u[e]))) : _t(u[r]) : []), [u, r]),
            [f, p] = (0, h.useState)(u),
            [m, g] = (0, h.useState)(!1);
          u !== f && (p(u), g(!1));
          let v = (0, h.useMemo)((() => wt(m ? [] : d)), [m, d]),
            y = (0, h.useRef)(gt),
            [b, _] = (0, h.useState)(gt),
            w = (0, h.useRef)(gt),
            [x, E] = (0, h.useState)(!1);
          return (0, h.useEffect)((() => {
            if (!x) return;
            E(!1);
            let e = c || i || y.current;
            xt(e, w.current) || (w.current = e, _(e))
          })), {
            realtimeValidation: l || v || c || i || gt,
            displayValidation: "native" === s ? l || v || b : l || v || c || i || b,
            updateValidation(e) {
              "aria" !== s || xt(b, e) ? y.current = e : _(e)
            },
            resetValidation() {
              let e = gt;
              xt(e, w.current) || (w.current = e, _(e)), "native" === s && E(!1), g(!0)
            },
            commitValidation() {
              "native" === s && E(!0), g(!0)
            }
          }
        }(e)
      }

      function _t(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function wt(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: mt
        } : null
      }

      function xt(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, n) => e === t.validationErrors[n])) && Object.entries(e.validationDetails).every((([e, n]) => t.validationDetails[e] === n))
      }

      function Et(e) {
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

      function Pt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function St(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Pt(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Et(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pt(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Ct(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Tt = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Ot = "foundry_hcgxh_vq8c3j8",
        Nt = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = St(St({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Tt(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ct(e.variantClassNames, (e => Ct(e, (e => e.split(" ")[0]))))
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
      const jt = (0, h.forwardRef)((({
        asChild: e,
        label: t,
        isRequired: n,
        hint: r,
        children: o,
        description: i,
        testId: a,
        className: s,
        rows: l = 5,
        hideLabel: c,
        hideDescription: f,
        hideRequiredAsterisk: p,
        validate: g,
        errorMessage: v,
        ...y
      }, b) => {
        const _ = (0, h.useRef)(null),
          w = (0, z.UP)(_, b),
          {
            inputProps: x,
            labelProps: E,
            descriptionProps: P,
            isInvalid: S,
            errorMessageProps: C,
            validationErrors: T
          } = function(e, t) {
            let {
              inputElementType: n = "input",
              isDisabled: r = !1,
              isRequired: o = !1,
              isReadOnly: i = !1,
              type: a = "text",
              validationBehavior: s = "aria"
            } = e, [l, c] = ge(e.value, e.defaultValue || "", e.onChange), {
              focusableProps: u
            } = dt(e, t), d = bt({
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
            } = ye({
              ...e,
              isInvalid: f,
              errorMessage: e.errorMessage || p
            }), _ = K(e, {
              labelable: !0
            });
            const w = {
              type: a,
              pattern: e.pattern
            };
            return Y(t, l, c), ht(e, d, t), (0, h.useEffect)((() => {
              if (t.current instanceof Q(t.current).HTMLTextAreaElement) {
                let e = t.current;
                Object.defineProperty(e, "defaultValue", {
                  get: () => e.value,
                  set: () => {},
                  configurable: !0
                })
              }
            }), [t]), {
              labelProps: g,
              inputProps: me(_, "input" === n ? w : void 0, {
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
            isRequired: n,
            inputElementType: "textarea",
            validate: e => g?.(e) ?? (!v || [v])
          }, _),
          O = (0, d.v6)({
            ...x,
            className: s
          }, {
            className: Nt({
              isInvalid: S
            }),
            "aria-errormessage": C?.id
          }),
          N = e ? m.DX : "textarea";
        return (0, u.jsxs)("div", {
          className: "foundry_hcgxh_vq8c3j0",
          children: [(t || r) && (0, u.jsxs)("div", {
            className: "foundry_hcgxh_vq8c3j1",
            children: [(0, u.jsx)(m.s6, {
              enabled: !!c,
              children: (0, u.jsx)(V, {
                size: "SM",
                className: (0, A.$)("foundry_hcgxh_vq8c3j2", x.disabled && Ot),
                asChild: !0,
                children: (0, u.jsxs)("label", {
                  ...E,
                  children: [t, n && !p && (0, u.jsx)("span", {
                    className: "foundry_hcgxh_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), r && (0, u.jsx)(V, {
              size: "XS",
              className: "foundry_hcgxh_vq8c3j3",
              children: r
            })]
          }), (0, u.jsx)(N, {
            rows: l,
            ref: w,
            "data-testid": a,
            ...O,
            children: o
          }), i && (0, u.jsx)(m.s6, {
            enabled: T.length > 0 || !!f,
            children: (0, u.jsx)(V, {
              size: "SM",
              ...P,
              className: (0, A.$)("foundry_hcgxh_vq8c3j4", x.disabled && Ot),
              children: i
            })
          }), T.length > 0 && (0, u.jsxs)(V, {
            size: "SM",
            appearance: "bold",
            ...C,
            className: "foundry_hcgxh_vq8c3j5",
            children: [(0, u.jsx)(F.X, {
              size: "MD",
              label: "",
              className: "foundry_hcgxh_vq8c3j6"
            }), T.join(". ")]
          })]
        })
      }));
      let Lt = "default",
        Rt = "",
        At = new WeakMap;

      function It(e) {
        if (ke()) {
          if ("disabled" !== Lt) return;
          Lt = "restoring", setTimeout((() => {
            st((() => {
              if ("restoring" === Lt) {
                const t = Z(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Rt || ""), Rt = "", Lt = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && At.has(e)) {
          let t = At.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), At.delete(e)
        }
      }
      const Dt = h.createContext({
        register: () => {}
      });

      function kt(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
      }

      function Mt(e, t, n) {
        return function(e, t, n) {
          if (t.set) t.set.call(e, n);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = n
          }
        }(e, kt(e, t, "set"), n), n
      }

      function Ht() {
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
      Dt.displayName = "PressResponderContext";
      const Bt = (0, h.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let n = document.createElement("a");
              n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
            }
          }(e, (e => Ft(e, t)))
        },
        useHref: e => e
      });

      function Vt() {
        return (0, h.useContext)(Bt)
      }

      function Ft(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        Ve() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (Ae() ? i = !0 : a = !0);
        let c = Me() && Ae() && !De() ? new KeyboardEvent("keydown", {
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
        Ft.isOpening = n, Pe(e), e.dispatchEvent(c), Ft.isOpening = !1
      }

      function zt(e) {
        var t;
        const n = Vt().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? n : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }
      Ft.isOpening = !1;
      var Ut = n(18429),
        Gt = new WeakMap;
      class qt {
        continuePropagation() {
          Mt(this, Gt, !1)
        }
        get shouldStopPropagation() {
          return function(e, t) {
            return t.get ? t.get.call(e) : t.value
          }(this, kt(this, Gt, "get"))
        }
        constructor(e, t, n, r) {
          var o, i, a, s;
          s = {
              writable: !0,
              value: void 0
            },
            function(e, t) {
              if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(i = this, a = Gt), a.set(i, s), Mt(this, Gt, !0);
          let l = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const c = null == l ? void 0 : l.getBoundingClientRect();
          let u, d, h = 0,
            f = null;
          null != n.clientX && null != n.clientY && (d = n.clientX, f = n.clientY), c && (null != d && null != f ? (u = d - c.left, h = f - c.top) : (u = c.width / 2, h = c.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = u, this.y = h
        }
      }
      const Xt = Symbol("linkClicked");

      function Kt(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
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
          let t = (0, h.useContext)(Dt);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = me(r, e), n()
          }
          return ct(t, e.ref), e
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
        } = Ht(), _ = $(((e, t) => {
          let o = v.current;
          if (s || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new qt("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, g(!0), i
        })), w = $(((e, r, i = !0) => {
          let a = v.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new qt("pressend", r, e);
            o(t), l = t.shouldStopPropagation
          }
          if (n && n(!1), g(!1), t && i && !s) {
            let n = new qt("press", r, e);
            t(n), l && (l = n.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, l
        })), x = $(((e, t) => {
          let n = v.current;
          if (s) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new qt("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), E = $((e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(Yt(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, b(), d || It(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), P = $((e => {
          u && E(e)
        })), S = $((e => {
          null == a || a(e)
        })), C = $(((e, t) => {
          if (a) {
            let n = new MouseEvent("click", e);
            Te(n, t), a(Ce(n))
          }
        })), T = (0, h.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if ($t(t.nativeEvent, t.currentTarget) && tt(t.currentTarget, rt(t.nativeEvent))) {
                  var r;
                  Zt(rt(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = _(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        $t(t, r) && !t.repeat && tt(r, rt(t)) && e.target && x(Yt(e.target, t), "keyboard")
                      };
                    y(Z(t.currentTarget), "keyup", J(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Ae() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || tt(t.currentTarget, rt(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Ft.isOpening) {
                  let n = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !Fe(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual";
                      n = w(Yt(t.currentTarget, t), r, !0), e.isOverTarget = !1, S(t), E(t)
                    }
                  } else {
                    let e = _(t, "virtual"),
                      r = x(t, "virtual"),
                      o = w(t, "virtual");
                    S(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && $t(t, e.target)) {
                var r;
                Zt(rt(t), t.key) && t.preventDefault();
                let n = rt(t),
                  o = tt(e.target, rt(t));
                w(Yt(e.target, t), "keyboard", o), o && C(t, e.target), b(), "Enter" !== t.key && Wt(e.target) && tt(e.target, n) && !t[Xt] && (t[Xt] = !0, Ft(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !tt(t.currentTarget, rt(t.nativeEvent))) return;
              if (o = t.nativeEvent, !Be() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (ke()) {
                    if ("default" === Lt) {
                      const t = Z(e);
                      Rt = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    Lt = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    At.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = _(t, e.pointerType);
                let o = rt(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(Z(t.currentTarget), "pointerup", n, !1), y(Z(t.currentTarget), "pointercancel", r, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (tt(t.currentTarget, rt(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let n = function(e) {
                    for (; e && !xe(e);) e = e.parentElement;
                    let t = Q(e),
                      n = t.document.activeElement;
                    if (!n || n === e) return;
                    Ne = !0;
                    let r = !1,
                      o = e => {
                        (e.target === n || r) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === n || r) && (t.stopImmediatePropagation(), e || r || (r = !0, Pe(n), l()))
                      },
                      a = t => {
                        (t.target === e || r) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || r) && (t.stopImmediatePropagation(), r || (r = !0, Pe(n), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), Ne = !1, r = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              tt(t.currentTarget, rt(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && x(t, e.pointerType || t.pointerType)
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, _(Yt(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(Yt(e.target, t), e.pointerType, !1), P(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (tt(e.target, rt(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? E(t) : (Pe(e.target), e.target.click()))
                      }), 80);
                    y(t.currentTarget, "click", (() => n = !0), !0), e.disposables.push((() => clearTimeout(r)))
                  } else E(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                E(e)
              };
            t.onDragStart = e => {
              tt(e.currentTarget, rt(e.nativeEvent)) && E(e)
            }
          }
          return t
        }), [y, s, c, b, d, E, P, w, _, x, S, C]);
        return (0, h.useEffect)((() => {
          let e = null == f ? void 0 : f.current;
          e && e instanceof Q(e).Element && "auto" === Q(e).getComputedStyle(e).touchAction && (e.style.touchAction = "pan-x pan-y pinch-zoom")
        }), [f]), (0, h.useEffect)((() => {
          let e = v.current;
          return () => {
            var t;
            d || It(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [d]), {
          isPressed: l || m,
          pressProps: me(p, T)
        }
      }

      function Wt(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function $t(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof Q(o).HTMLInputElement && !Jt(o, n) || o instanceof Q(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && Wt(o)) && "Enter" !== n)
      }

      function Yt(e, t) {
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

      function Zt(e, t) {
        return e instanceof HTMLInputElement ? !Jt(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Wt(e)))
        }(e)
      }
      const Qt = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Jt(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Qt.has(e.type)
      }

      function en(e, t) {
        let n, {
          elementType: r = "button",
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
        } = Kt({
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
        } = dt(e, t);
        d && (b.tabIndex = o ? -1 : b.tabIndex);
        let _ = me(b, v, K(e, {
          labelable: !0
        }));
        return {
          isPressed: y,
          buttonProps: me(n, _, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"]
          })
        }
      }
      var tn = n(41689);

      function nn(e) {
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

      function rn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function on(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? rn(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = nn(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rn(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function an(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var sn = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        ln = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = on(on({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) sn(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return an(e.variantClassNames, (e => an(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        cn = ln({
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
        un = ln({
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
      const dn = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          className: n,
          children: r,
          onClick: o,
          iconLeft: i,
          iconLeftLabel: a,
          iconRight: s,
          iconRightLabel: l,
          appearance: c,
          size: f = "MD",
          fullWidth: p = !1,
          ...g
        }, v) => {
          const y = (0, h.useRef)(null),
            b = (0, z.UP)(y, v),
            _ = (0, tn.zQ)(),
            w = "string" == typeof f ? f : f?.[_] ?? f.default ?? "MD",
            {
              events: x,
              others: E
            } = (0, d.bZ)(g, {
              onPress: !1
            }),
            {
              buttonProps: P,
              isPressed: S
            } = en({
              ...E,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => E.onPress?.(e) ?? o?.(e)
            }, y),
            C = (0, d.v6)({
              ...x,
              role: "button",
              "data-pressed": S,
              "data-testid": e,
              className: cn({
                appearance: c,
                size: w,
                fullWidth: p,
                iconLeft: !!i,
                iconRight: !!s
              })
            }, {
              ...P,
              className: n
            }),
            T = i && F[i],
            O = s && F[s],
            N = t ? m.DX : "button",
            j = p && (O || O && T);
          return (0, u.jsxs)(N, {
            ref: b,
            ...C,
            children: [j && (0, u.jsx)("div", {
              className: "foundry_hcgxh_17pcofyq"
            }), T && (0, u.jsx)(T, {
              label: a || "",
              size: w,
              className: "foundry_hcgxh_17pcofym"
            }), (0, u.jsx)(m.xV, {
              children: r
            }), O && (0, u.jsx)(O, {
              label: l || "",
              size: w,
              className: un({
                fullWidth: p
              })
            })]
          })
        })),
        hn = {
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

      function fn(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * n) : e * t * n / (t + n * e)
      }

      function pn(e, t, n, r = .15) {
        return 0 === r ? function(e, t, n) {
          return Math.max(t, Math.min(e, n))
        }(e, t, n) : e < t ? -fn(t - e, n - t, r) + t : e > n ? +fn(e - n, n - t, r) + n : e
      }

      function mn(e, t, n) {
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

      function gn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function vn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? gn(Object(n), !0).forEach((function(t) {
            mn(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gn(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      const yn = {
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

      function bn(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const _n = ["enter", "leave"];
      const wn = ["gotpointercapture", "lostpointercapture"];

      function xn(e) {
        let t = e.substring(2).toLowerCase();
        const n = !!~t.indexOf("passive");
        n && (t = t.replace("passive", ""));
        const r = wn.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(r);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: n
        }
      }

      function En(e) {
        return "touches" in e
      }

      function Pn(e) {
        return En(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Sn(e) {
        return En(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Cn(e, t) {
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

      function Tn(e, t) {
        const [n, r] = Array.from(e.touches).filter((e => t.includes(e.identifier)));
        return Cn(n, r)
      }

      function On(e) {
        const t = Sn(e);
        return En(e) ? t.identifier : t.pointerId
      }

      function Nn(e) {
        const t = Sn(e);
        return [t.clientX, t.clientY]
      }

      function jn(e) {
        let {
          deltaX: t,
          deltaY: n,
          deltaMode: r
        } = e;
        return 1 === r ? (t *= 40, n *= 40) : 2 === r && (t *= 800, n *= 800), [t, n]
      }

      function Ln(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function Rn() {}

      function An(...e) {
        return 0 === e.length ? Rn : 1 === e.length ? e[0] : function() {
          let t;
          for (const n of e) t = n.apply(this, arguments) || t;
          return t
        }
      }

      function In(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Dn {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = n.from ? Ln(n.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            hn.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [i, a] = t._movement, [s, l] = n.threshold, {
            _step: c,
            values: u
          } = t;
          if (n.hasCustomTransform ? (!1 === c[0] && (c[0] = Math.abs(i) >= s && u[0]), !1 === c[1] && (c[1] = Math.abs(a) >= l && u[1])) : (!1 === c[0] && (c[0] = Math.abs(i) >= s && Math.sign(i) * s), !1 === c[1] && (c[1] = Math.abs(a) >= l && Math.sign(a) * l)), t.intentional = !1 !== c[0] || !1 !== c[1], !t.intentional) return;
          const d = [0, 0];
          if (n.hasCustomTransform) {
            const [e, t] = u;
            d[0] = !1 !== c[0] ? e - c[0] : 0, d[1] = !1 !== c[1] ? t - c[1] : 0
          } else d[0] = !1 !== c[0] ? i - c[0] : 0, d[1] = !1 !== c[1] ? a - c[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          const h = t.offset,
            f = t._active && !t._blocked || t.active;
          f && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = r[this.ingKey] = t._active, e && (t.first && ("bounds" in n && (t._bounds = Ln(n.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [p, m] = t.offset, [
            [g, v],
            [y, b]
          ] = t._bounds;
          t.overflow = [p < g ? -1 : p > v ? 1 : 0, m < y ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const _ = t._active && n.rubberband || [0, 0];
          if (t.offset = function(e, [t, n], [r, o]) {
              const [
                [i, a],
                [s, l]
              ] = e;
              return [pn(t, i, a, r), pn(n, s, l, o)]
            }(t._bounds, t.offset, _), t.delta = hn.sub(t.offset, h), this.computeMovement(), f && (!t.last || o > 32)) {
            t.delta = hn.sub(t.offset, h);
            const e = t.delta.map(Math.abs);
            hn.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            n = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
          const r = this.handler(vn(vn(vn({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== r && (e.memo = r)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class kn extends Dn {
        constructor(...e) {
          super(...e), mn(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = hn.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = hn.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            n = this.config;
          if (!t.axis && e) {
            const r = "object" == typeof n.axisThreshold ? n.axisThreshold[Pn(e)] : n.axisThreshold;
            t.axis = function([e, t], n) {
              const r = Math.abs(e),
                o = Math.abs(t);
              return r > o && r > n ? "x" : o > r && o > n ? "y" : void 0
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
      const Mn = e => e,
        Hn = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, n) => vn(vn({}, n.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return hn.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? hn.toVector(e) : void 0,
          transform(e, t, n) {
            const r = e || n.shared.transform;
            return this.hasCustomTransform = !!r, r || Mn
          },
          threshold: e => hn.toVector(e, 0)
        },
        Bn = vn(vn({}, Hn), {}, {
          axis(e, t, {
            axis: n
          }) {
            if (this.lockDirection = "lock" === n, !this.lockDirection) return n
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => Bn.bounds(e(t));
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
        Vn = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Fn = "undefined" != typeof window && window.document && window.document.createElement;

      function zn() {
        return Fn && "ontouchstart" in window
      }
      const Un = {
          isBrowser: Fn,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: zn(),
          touchscreen: zn() || Fn && window.navigator.maxTouchPoints > 1,
          pointer: Fn && "onpointerdown" in window,
          pointerLock: Fn && "exitPointerLock" in window.document
        },
        Gn = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        qn = vn(vn({}, Bn), {}, {
          device(e, t, {
            pointer: {
              touch: n = !1,
              lock: r = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = r && Un.pointerLock, Un.touch && n ? "touch" : this.pointerLock ? "mouse" : Un.pointer && !o ? "pointer" : Un.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: n
          }) {
            if (this.preventScrollDelay = "number" == typeof n ? n : n || void 0 === n && e ? 250 : void 0, Un.touchscreen && !1 !== n) return e || (void 0 !== n ? "y" : void 0)
          },
          pointerCapture(e, t, {
            pointer: {
              capture: n = !0,
              buttons: r = 1,
              keys: o = !0
            } = {}
          }) {
            return this.pointerButtons = r, this.keys = o, !this.pointerLock && "pointer" === this.device && n
          },
          threshold(e, t, {
            filterTaps: n = !1,
            tapsThreshold: r = 3,
            axis: o
          }) {
            const i = hn.toVector(e, n ? r : o ? 1 : 0);
            return this.filterTaps = n, this.tapsThreshold = r, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: n = 250
          } = {}) {
            return {
              velocity: this.transform(hn.toVector(e)),
              distance: this.transform(hn.toVector(t)),
              duration: n
            }
          },
          delay(e = 0) {
            switch (e) {
              case !0:
                return 180;
              case !1:
                return 0;
              default:
                return e
            }
          },
          axisThreshold: e => e ? vn(vn({}, Gn), e) : Gn,
          keyboardDisplacement: (e = 10) => e
        });

      function Xn(e) {
        const [t, n] = e.overflow, [r, o] = e._delta, [i, a] = e._direction;
        (t < 0 && r > 0 && i < 0 || t > 0 && r < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (n < 0 && o > 0 && a < 0 || n > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Kn = vn(vn({}, Hn), {}, {
          device(e, t, {
            shared: n,
            pointer: {
              touch: r = !1
            } = {}
          }) {
            if (n.target && !Un.touch && Un.gesture) return "gesture";
            if (Un.touch && r) return "touch";
            if (Un.touchscreen) {
              if (Un.pointer) return "pointer";
              if (Un.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: n = {},
            angleBounds: r = {}
          }) {
            const o = e => {
                const t = In(Ln(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = In(Ln(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof n && "function" != typeof r ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, n) {
            return this.lockDirection = "lock" === n.axis, hn.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Wn = vn(vn({}, Bn), {}, {
          mouseOnly: (e = !0) => e
        }),
        $n = Bn,
        Yn = Bn,
        Zn = vn(vn({}, Bn), {}, {
          mouseOnly: (e = !0) => e
        }),
        Qn = new Map,
        Jn = new Map;

      function er(e) {
        Qn.set(e.key, e.engine), Jn.set(e.key, e.resolver)
      }
      const tr = {
          key: "drag",
          engine: class extends kn {
            constructor(...e) {
              super(...e), mn(this, "ingKey", "dragging")
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
                e._bounds = Bn.bounds(r)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && n._pointerActive || (this.start(e), this.setupPointer(e), n._pointerId = On(e), n._pointerActive = !0, this.computeValues(Nn(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Pn(e) ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                n = this.config;
              if (!t._pointerActive) return;
              const r = On(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              const o = Nn(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = hn.sub(o, t._values), this.computeValues(o)), hn.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : n.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === n.preventScrollAxis || "xy" === n.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                n = this.config;
              if (!t._active || !t._pointerActive) return;
              const r = On(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = t._distance;
              if (t.tap = o <= n.tapsThreshold && i <= n.tapsThreshold, t.tap && n.filterTaps) t._force = !0;
              else {
                const [e, r] = t._delta, [o, i] = t._movement, [a, s] = n.swipe.velocity, [l, c] = n.swipe.distance, u = n.swipe.duration;
                if (t.elapsedTime < u) {
                  const n = Math.abs(e / t.timeDelta),
                    u = Math.abs(r / t.timeDelta);
                  n > a && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), u > s && Math.abs(i) > c && (t.swipe[1] = Math.sign(r))
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
              const t = Vn[e.key];
              if (t) {
                const n = this.state,
                  r = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), n._delta = t(this.config.keyboardDisplacement, r), n._keyboardActive = !0, hn.addTo(n._movement, n._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in Vn && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: qn
        },
        nr = {
          key: "hover",
          engine: class extends kn {
            constructor(...e) {
              super(...e), mn(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Nn(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const n = Nn(e);
              t._movement = t._delta = hn.sub(n, t._values), this.computeValues(n), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Zn
        },
        rr = {
          key: "move",
          engine: class extends kn {
            constructor(...e) {
              super(...e), mn(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Nn(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = Nn(e),
                n = this.state;
              n._delta = hn.sub(t, n._values), hn.addTo(n._movement, n._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Wn
        },
        or = {
          key: "pinch",
          engine: class extends Dn {
            constructor(...e) {
              super(...e), mn(this, "ingKey", "pinching"), mn(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? hn.add(t, n) : [(1 + t[0]) * n[0], t[1] + n[1]]
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
              const r = Tn(e, t._touchIds);
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
              const o = Cn(...Array.from(n.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = Tn(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const n = Cn(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = hn.sub(t._movement, n), this.compute(e), this.emit()
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
              t._delta = [-jn(e)[1] / 100 * t.offset[0], 0], hn.addTo(t._movement, t._delta), Xn(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Kn
        },
        ir = {
          key: "scroll",
          engine: class extends kn {
            constructor(...e) {
              super(...e), mn(this, "ingKey", "scrolling")
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
              t._delta = hn.sub(n, t._values), hn.addTo(t._movement, t._delta), this.computeValues(n), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: $n
        },
        ar = {
          key: "wheel",
          engine: class extends kn {
            constructor(...e) {
              super(...e), mn(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = jn(e), hn.addTo(t._movement, t._delta), Xn(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: Yn
        };
      const sr = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Un.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        lr = ["target", "eventOptions", "window", "enabled", "transform"];

      function cr(e = {}, t) {
        const n = {};
        for (const [r, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            n[r] = o.call(n, e[r], r, e);
            break;
          case "object":
            n[r] = cr(e[r], o);
            break;
          case "boolean":
            o && (n[r] = e[r])
        }
        return n
      }
      class ur {
        constructor(e, t) {
          mn(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, n, r, o) {
          const i = this._listeners,
            a = function(e, t = "") {
              const n = yn[e];
              return e + (n && n[t] || t)
            }(t, n),
            s = vn(vn({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class dr {
        constructor() {
          mn(this, "_timeouts", new Map)
        }
        add(e, t, n = 140, ...r) {
          this.remove(e), this._timeouts.set(e, window.setTimeout(t, n, ...r))
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
      class hr {
        constructor(e) {
          var t, n;
          mn(this, "gestures", new Set), mn(this, "_targetEventStore", new ur(this)), mn(this, "gestureEventStores", {}), mn(this, "gestureTimeoutStores", {}), mn(this, "handlers", {}), mn(this, "config", {}), mn(this, "pointerIds", new Set), mn(this, "touchIds", new Set), mn(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (n = e).drag && fr(t, "drag"), n.wheel && fr(t, "wheel"), n.scroll && fr(t, "scroll"), n.move && fr(t, "move"), n.pinch && fr(t, "pinch"), n.hover && fr(t, "hover")
        }
        setEventIds(e) {
          return En(e) ? (this.touchIds = new Set(function(e) {
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
          this.config = function(e, t, n = {}) {
            const r = e,
              {
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              } = r,
              c = function(e, t) {
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
              }(r, lr);
            if (n.shared = cr({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              }, sr), t) {
              const e = Jn.get(t);
              n[t] = cr(vn({
                shared: n.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = Jn.get(e);
                t && (n[e] = cr(vn({
                  shared: n.shared
                }, c[e]), t))
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
        bind(...e) {
          const t = this.config.shared,
            n = {};
          let r;
          if (!t.target || (r = t.target(), r)) {
            if (t.enabled) {
              for (const t of this.gestures) {
                const o = this.config[t],
                  i = pr(n, o.eventOptions, !!r);
                o.enabled && new(Qn.get(t))(this, e, t).bind(i)
              }
              const o = pr(n, t.eventOptions, !!r);
              for (const t in this.nativeHandlers) o(t, "", (n => this.nativeHandlers[t](vn(vn({}, this.state.shared), {}, {
                event: n,
                args: e
              }))), void 0, !0)
            }
            for (const e in n) n[e] = An(...n[e]);
            if (!r) return n;
            for (const e in n) {
              const {
                device: t,
                capture: o,
                passive: i
              } = xn(e);
              this._targetEventStore.add(r, t, "", n[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function fr(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new ur(e, t), e.gestureTimeoutStores[t] = new dr
      }
      const pr = (e, t, n) => (r, o, i, a = {}, s = !1) => {
          var l, c;
          const u = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = a.passive) && void 0 !== c ? c : t.passive;
          let h = s ? r : function(e, t = "", n = !1) {
            const r = yn[e],
              o = r && r[t] || t;
            return "on" + bn(e) + bn(o) + (function(e = !1, t) {
              return e && !_n.includes(t)
            }(n, o) ? "Capture" : "")
          }(r, o, u);
          n && d && (h += "Passive"), e[h] = e[h] || [], e[h].push(i)
        },
        mr = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function gr(e, t, n, r, o, i) {
        if (!e.has(n)) return;
        if (!Qn.has(r)) return;
        const a = n + "Start",
          s = n + "End";
        o[r] = e => {
          let r;
          return e.first && a in t && t[a](e), n in t && (r = t[n](e)), e.last && s in t && t[s](e), r
        }, i[r] = i[r] || {}
      }

      function vr(e, t) {
        const n = ([tr, or, ir, ar, rr, nr].forEach(er), function(e, t) {
          const {
            handlers: n,
            nativeHandlers: r,
            config: o
          } = function(e, t) {
            const [n, r, o] = function(e) {
              const t = {},
                n = {},
                r = new Set;
              for (let o in e) mr.test(o) ? (r.add(RegExp.lastMatch), n[o] = e[o]) : t[o] = e[o];
              return [n, t, r]
            }(e), i = {};
            return gr(o, n, "onDrag", "drag", i, t), gr(o, n, "onWheel", "wheel", i, t), gr(o, n, "onScroll", "scroll", i, t), gr(o, n, "onPinch", "pinch", i, t), gr(o, n, "onMove", "move", i, t), gr(o, n, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: r
            }
          }(e, t || {});
          return function(e, t = {}, n, r) {
            const o = p().useMemo((() => new hr(e)), []);
            if (o.applyHandlers(e, r), o.applyConfig(t, n), p().useEffect(o.effect.bind(o)), p().useEffect((() => o.clean.bind(o)), []), void 0 === t.target) return o.bind.bind(o)
          }(n, o, void 0, r)
        });
        return n(e, t || {})
      }
      var yr = Ir(),
        br = e => jr(e, yr),
        _r = Ir();
      br.write = e => jr(e, _r);
      var wr = Ir();
      br.onStart = e => jr(e, wr);
      var xr = Ir();
      br.onFrame = e => jr(e, xr);
      var Er = Ir();
      br.onFinish = e => jr(e, Er);
      var Pr = [];
      br.setTimeout = (e, t) => {
        const n = br.now() + t,
          r = () => {
            const e = Pr.findIndex((e => e.cancel == r));
            ~e && Pr.splice(e, 1), Or -= ~e ? 1 : 0
          },
          o = {
            time: n,
            handler: e,
            cancel: r
          };
        return Pr.splice(Sr(n), 0, o), Or += 1, Lr(), o
      };
      var Sr = e => ~(~Pr.findIndex((t => t.time > e)) || ~Pr.length);
      br.cancel = e => {
        wr.delete(e), xr.delete(e), Er.delete(e), yr.delete(e), _r.delete(e)
      }, br.sync = e => {
        Nr = !0, br.batchedUpdates(e), Nr = !1
      }, br.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, br.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          wr.delete(n), t = null
        }, r
      };
      var Cr = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      br.use = e => Cr = e, br.now = "undefined" != typeof performance ? () => performance.now() : Date.now, br.batchedUpdates = e => e(), br.catch = console.error, br.frameLoop = "always", br.advance = () => {
        "demand" !== br.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Ar()
      };
      var Tr = -1,
        Or = 0,
        Nr = !1;

      function jr(e, t) {
        Nr ? (t.delete(e), e(0)) : (t.add(e), Lr())
      }

      function Lr() {
        Tr < 0 && (Tr = 0, "demand" !== br.frameLoop && Cr(Rr))
      }

      function Rr() {
        ~Tr && (Cr(Rr), br.batchedUpdates(Ar))
      }

      function Ar() {
        const e = Tr;
        Tr = br.now();
        const t = Sr(Tr);
        t && (Dr(Pr.splice(0, t), (e => e.handler())), Or -= t), Or ? (wr.flush(), yr.flush(e ? Math.min(64, Tr - e) : 16.667), xr.flush(), _r.flush(), Er.flush()) : Tr = -1
      }

      function Ir() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            Or += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (Or -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, Or -= t.size, Dr(t, (t => t(n) && e.add(t))), Or += e.size, t = e)
          }
        }
      }

      function Dr(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            br.catch(e)
          }
        }))
      }
      var kr = Object.defineProperty,
        Mr = {};

      function Hr() {}((e, t) => {
        for (var n in t) kr(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(Mr, {
        assign: () => Qr,
        colors: () => $r,
        createStringInterpolator: () => qr,
        skipAnimation: () => Yr,
        to: () => Xr,
        willAdvance: () => Zr
      });
      var Br = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Vr(e, t) {
        if (Br.arr(e)) {
          if (!Br.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var Fr = (e, t) => e.forEach(t);

      function zr(e, t, n) {
        if (Br.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      var Ur = e => Br.und(e) ? [] : Br.arr(e) ? e : [e];

      function Gr(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), Fr(n, t)
        }
      }
      var qr, Xr, Kr = (e, ...t) => Gr(e, (e => e(...t))),
        Wr = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        $r = null,
        Yr = !1,
        Zr = Hr,
        Qr = e => {
          e.to && (Xr = e.to), e.now && (br.now = e.now), void 0 !== e.colors && ($r = e.colors), null != e.skipAnimation && (Yr = e.skipAnimation), e.createStringInterpolator && (qr = e.createStringInterpolator), e.requestAnimationFrame && br.use(e.requestAnimationFrame), e.batchedUpdates && (br.batchedUpdates = e.batchedUpdates), e.willAdvance && (Zr = e.willAdvance), e.frameLoop && (br.frameLoop = e.frameLoop)
        },
        Jr = new Set,
        eo = [],
        to = [],
        no = 0,
        ro = {
          get idle() {
            return !Jr.size && !eo.length
          },
          start(e) {
            no > e.priority ? (Jr.add(e), br.onStart(oo)) : (io(e), br(so))
          },
          advance: so,
          sort(e) {
            if (no) br.onFrame((() => ro.sort(e)));
            else {
              const t = eo.indexOf(e);
              ~t && (eo.splice(t, 1), ao(e))
            }
          },
          clear() {
            eo = [], Jr.clear()
          }
        };

      function oo() {
        Jr.forEach(io), Jr.clear(), br(so)
      }

      function io(e) {
        eo.includes(e) || ao(e)
      }

      function ao(e) {
        eo.splice(function(t) {
          const n = t.findIndex((t => t.priority > e.priority));
          return n < 0 ? t.length : n
        }(eo), 0, e)
      }

      function so(e) {
        const t = to;
        for (let n = 0; n < eo.length; n++) {
          const r = eo[n];
          no = r.priority, r.idle || (Zr(r), r.advance(e), r.idle || t.push(r))
        }
        return no = 0, (to = eo).length = 0, (eo = t).length > 0
      }
      var lo = "[-+]?\\d*\\.?\\d+",
        co = lo + "%";

      function uo(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var ho = new RegExp("rgb" + uo(lo, lo, lo)),
        fo = new RegExp("rgba" + uo(lo, lo, lo, lo)),
        po = new RegExp("hsl" + uo(lo, co, co)),
        mo = new RegExp("hsla" + uo(lo, co, co, lo)),
        go = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        vo = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        yo = /^#([0-9a-fA-F]{6})$/,
        bo = /^#([0-9a-fA-F]{8})$/;

      function _o(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function wo(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = _o(o, r, e + 1 / 3),
          a = _o(o, r, e),
          s = _o(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function xo(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Eo(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Po(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function So(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Co(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = yo.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : $r && void 0 !== $r[e] ? $r[e] : (t = ho.exec(e)) ? (xo(t[1]) << 24 | xo(t[2]) << 16 | xo(t[3]) << 8 | 255) >>> 0 : (t = fo.exec(e)) ? (xo(t[1]) << 24 | xo(t[2]) << 16 | xo(t[3]) << 8 | Po(t[4])) >>> 0 : (t = go.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = bo.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = vo.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = po.exec(e)) ? (255 | wo(Eo(t[1]), So(t[2]), So(t[3]))) >>> 0 : (t = mo.exec(e)) ? (wo(Eo(t[1]), So(t[2]), So(t[3])) | Po(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var To = (e, t, n) => {
          if (Br.fun(e)) return e;
          if (Br.arr(e)) return To({
            range: e,
            output: t,
            extrapolate: n
          });
          if (Br.str(e.output[0])) return qr(e);
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
              let c = l ? l(e) : e;
              if (c < t) {
                if ("identity" === a) return c;
                "clamp" === a && (c = t)
              }
              if (c > n) {
                if ("identity" === s) return c;
                "clamp" === s && (c = n)
              }
              return r === o ? r : t === n ? e <= t ? r : o : (t === -1 / 0 ? c = -c : n === 1 / 0 ? c -= t : c = (c - t) / (n - t), c = i(c), r === -1 / 0 ? c = -c : o === 1 / 0 ? c += r : c = c * (o - r) + r, c)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, a, s, r.map)
          }
        },
        Oo = 1.70158,
        No = 1.525 * Oo,
        jo = Oo + 1,
        Lo = 2 * Math.PI / 3,
        Ro = 2 * Math.PI / 4.5,
        Ao = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        Io = {
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
          easeInBack: e => jo * e * e * e - Oo * e * e,
          easeOutBack: e => 1 + jo * Math.pow(e - 1, 3) + Oo * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - No) / 2 : (Math.pow(2 * e - 2, 2) * ((No + 1) * (2 * e - 2) + No) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Lo),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Lo) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ro) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ro) / 2 + 1,
          easeInBounce: e => 1 - Ao(1 - e),
          easeOutBounce: Ao,
          easeInOutBounce: e => e < .5 ? (1 - Ao(1 - 2 * e)) / 2 : (1 + Ao(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return ((e, t, n) => Math.min(Math.max(n, 0), 1))(0, 0, ("end" === t ? Math.floor(r) : Math.ceil(r)) / e)
          }
        },
        Do = Symbol.for("FluidValue.get"),
        ko = Symbol.for("FluidValue.observers"),
        Mo = e => Boolean(e && e[Do]),
        Ho = e => e && e[Do] ? e[Do]() : e,
        Bo = e => e[ko] || null;

      function Vo(e, t) {
        const n = e[ko];
        n && n.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var Fo = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            zo(this, e)
          }
        },
        zo = (e, t) => Xo(e, Do, t);

      function Uo(e, t) {
        if (e[Do]) {
          let n = e[ko];
          n || Xo(e, ko, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function Go(e, t) {
        const n = e[ko];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[ko] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      var qo, Xo = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        Ko = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Wo = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        $o = new RegExp(`(${Ko.source})(%|[a-z]+)`, "i"),
        Yo = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Zo = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Qo = e => {
          const [t, n] = Jo(e);
          if (!t || Wr()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && Zo.test(n) ? Qo(n) : n || e
        },
        Jo = e => {
          const t = Zo.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        },
        ei = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        ti = e => {
          qo || (qo = $r ? new RegExp(`(${Object.keys($r).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => Ho(e).replace(Zo, Qo).replace(Wo, Co).replace(qo, Co))),
            n = t.map((e => e.match(Ko).map(Number))),
            r = n[0].map(((e, t) => n.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))),
            o = r.map((t => To({
              ...e,
              output: t
            })));
          return e => {
            const n = !$o.test(t[0]) && t.find((e => $o.test(e)))?.replace(Ko, "");
            let r = 0;
            return t[0].replace(Ko, (() => `${o[r++](e)}${n||""}`)).replace(Yo, ei)
          }
        },
        ni = "react-spring: ",
        ri = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${ni}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        oi = ri(console.warn),
        ii = ri(console.warn);

      function ai(e) {
        return Br.str(e) && ("#" == e[0] || /\d/.test(e) || !Wr() && Zo.test(e) || e in ($r || {}))
      }
      var si = Wr() ? h.useEffect : h.useLayoutEffect;

      function li() {
        const e = (0, h.useState)()[1],
          t = (() => {
            const e = (0, h.useRef)(!1);
            return si((() => (e.current = !0, () => {
              e.current = !1
            })), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var ci = e => (0, h.useEffect)(e, ui),
        ui = [];

      function di(e) {
        const t = (0, h.useRef)();
        return (0, h.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var hi = Symbol.for("Animated:node"),
        fi = e => e && e[hi],
        pi = (e, t) => {
          return n = e, r = hi, o = t, Object.defineProperty(n, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var n, r, o
        },
        mi = e => e && e[hi] && e[hi].getPayload(),
        gi = class {
          constructor() {
            pi(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        vi = class extends gi {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Br.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new vi(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return Br.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Br.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        yi = class extends vi {
          constructor(e) {
            super(0), this._string = null, this._toString = To({
              output: [e, e]
            })
          }
          static create(e) {
            return new yi(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (Br.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = To({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        bi = {
          dependencies: null
        },
        _i = class extends gi {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return zr(this.source, ((n, r) => {
              var o;
              (o = n) && o[hi] === o ? t[r] = n.getValue(e) : Mo(n) ? t[r] = Ho(n) : e || (t[r] = n)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Fr(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return zr(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            bi.dependencies && Mo(e) && bi.dependencies.add(e);
            const t = mi(e);
            t && Fr(t, (e => this.add(e)))
          }
        },
        wi = class extends _i {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new wi(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(xi)), !0)
          }
        };

      function xi(e) {
        return (ai(e) ? yi : vi).create(e)
      }

      function Ei(e) {
        const t = fi(e);
        return t ? t.constructor : Br.arr(e) ? wi : ai(e) ? yi : vi
      }
      var Pi = (e, t) => {
          const n = !Br.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, h.forwardRef)(((r, o) => {
            const i = (0, h.useRef)(null),
              a = n && (0, h.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (Br.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [s, l] = function(e, t) {
                const n = new Set;
                return bi.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new _i(e), bi.dependencies = null, [e, n]
              }(r, t),
              c = li(),
              u = () => {
                const e = i.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && c()
              },
              d = new Si(u, l),
              f = (0, h.useRef)();
            si((() => (f.current = d, Fr(l, (e => Uo(e, d))), () => {
              f.current && (Fr(f.current.deps, (e => Go(e, f.current))), br.cancel(f.current.update))
            }))), (0, h.useEffect)(u, []), ci((() => () => {
              const e = f.current;
              Fr(e.deps, (t => Go(t, e)))
            }));
            const p = t.getComponentProps(s.getValue());
            return h.createElement(e, {
              ...p,
              ref: a
            })
          }))
        },
        Si = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && br.write(this.update)
          }
        },
        Ci = Symbol.for("AnimatedComponent"),
        Ti = e => Br.str(e) ? e : e && Br.str(e.displayName) ? e.displayName : Br.fun(e) && e.name || null;

      function Oi(e, ...t) {
        return Br.fun(e) ? e(...t) : e
      }
      var Ni = (e, t) => !0 === e || !!(t && e && (Br.fun(e) ? e(t) : Ur(e).includes(t))),
        ji = (e, t) => Br.obj(e) ? t && e[t] : e,
        Li = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Ri = e => e,
        Ai = (e, t = Ri) => {
          let n = Ii;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const o of n) {
            const n = t(e[o], o);
            Br.und(n) || (r[o] = n)
          }
          return r
        },
        Ii = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Di = {
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

      function ki(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (zr(e, ((e, r) => {
              Di[r] || (t[r] = e, n++)
            })), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return zr(e, ((e, r) => r in t || (n[r] = e))), n
        }
        return {
          ...e
        }
      }

      function Mi(e) {
        return e = Ho(e), Br.arr(e) ? e.map(Mi) : ai(e) ? Mr.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Hi(e) {
        for (const t in e) return !0;
        return !1
      }

      function Bi(e) {
        return Br.fun(e) || Br.arr(e) && Br.obj(e[0])
      }

      function Vi(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function Fi(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }
      var zi = {
          tension: 170,
          friction: 26
        },
        Ui = {
          ...zi,
          mass: 1,
          damping: 1,
          easing: Io.linear,
          clamp: !1
        },
        Gi = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Ui)
          }
        };

      function qi(e, t) {
        if (Br.und(t.decay)) {
          const n = !Br.und(t.tension) || !Br.und(t.friction);
          !n && Br.und(t.frequency) && Br.und(t.damping) && Br.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Xi = [],
        Ki = class {
          constructor() {
            this.changed = !1, this.values = Xi, this.toValues = null, this.fromValues = Xi, this.config = new Gi, this.immediate = !1
          }
        };

      function Wi(e, {
        key: t,
        props: n,
        defaultProps: r,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, c, u = Ni(n.cancel ?? r?.cancel, t);
          if (u) f();
          else {
            Br.und(n.pause) || (o.paused = Ni(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = o.paused || Ni(e, t)), l = Oi(n.delay || 0, t), e ? (o.resumeQueue.add(h), i.pause()) : (i.resume(), h())
          }

          function d() {
            o.resumeQueue.add(h), o.timeouts.delete(c), c.cancel(), l = c.time - br.now()
          }

          function h() {
            l > 0 && !Mr.skipAnimation ? (o.delayed = !0, c = br.setTimeout(f, l), o.pauseQueue.add(d), o.timeouts.add(c)) : f()
          }

          function f() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (u = !0);
            try {
              i.start({
                ...n,
                callId: e,
                cancel: u
              }, a)
            } catch (e) {
              s(e)
            }
          }
        }))
      }
      var $i = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? Qi(e.get()) : t.every((e => e.noop)) ? Yi(e.get()) : Zi(e.get(), t.every((e => e.finished))),
        Yi = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Zi = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        Qi = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Ji(e, t, n, r) {
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
          const c = Ai(t, ((e, t) => "onRest" === t ? void 0 : e));
          let u, d;
          const h = new Promise(((e, t) => (u = e, d = t))),
            f = e => {
              const t = o <= (n.cancelId || 0) && Qi(r) || o !== n.asyncId && Zi(r, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new ta,
                a = new na;
              return (async () => {
                if (Mr.skipAnimation) throw ea(n), a.result = Zi(r, !1), d(a), a;
                f(i);
                const s = Br.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, zr(c, ((e, t) => {
                  Br.und(s[t]) && (s[t] = e)
                }));
                const l = await r.start(s);
                return f(i), n.paused && await new Promise((e => {
                  n.resumeQueue.add(e)
                })), l
              })()
            };
          let m;
          if (Mr.skipAnimation) return ea(n), Zi(r, !1);
          try {
            let t;
            t = Br.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, r.stop.bind(r))), await Promise.all([t.then(u), h]), m = Zi(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof ta) m = e.result;
            else {
              if (!(e instanceof na)) throw e;
              m = e.result
            }
          } finally {
            o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? l : void 0)
          }
          return Br.fun(a) && br.batchedUpdates((() => {
            a(m, r, r.item)
          })), m
        })() : l
      }

      function ea(e, t) {
        Gr(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var ta = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        na = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        ra = e => e instanceof ia,
        oa = 1,
        ia = class extends Fo {
          constructor() {
            super(...arguments), this.id = oa++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = fi(this);
            return e && e.getValue()
          }
          to(...e) {
            return Mr.to(this, e)
          }
          interpolate(...e) {
            return oi(`${ni}The "interpolate" function is deprecated in v9 (use "to" instead)`), Mr.to(this, e)
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
            Vo(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || ro.sort(this), Vo(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        aa = Symbol.for("SpringPhase"),
        sa = e => (1 & e[aa]) > 0,
        la = e => (2 & e[aa]) > 0,
        ca = e => (4 & e[aa]) > 0,
        ua = (e, t) => t ? e[aa] |= 3 : e[aa] &= -3,
        da = (e, t) => t ? e[aa] |= 4 : e[aa] &= -5,
        ha = class extends ia {
          constructor(e, t) {
            if (super(), this.animation = new Ki, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Br.und(e) || !Br.und(t)) {
              const n = Br.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Br.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(la(this) || this._state.asyncTo) || ca(this)
          }
          get goal() {
            return Ho(this.animation.to)
          }
          get velocity() {
            const e = fi(this);
            return e instanceof vi ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return sa(this)
          }
          get isAnimating() {
            return la(this)
          }
          get isPaused() {
            return ca(this)
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
            } = r, a = mi(r.to);
            !a && Mo(r.to) && (o = Ur(Ho(r.to))), r.values.forEach(((s, l) => {
              if (s.done) return;
              const c = s.constructor == yi ? 1 : a ? a[l].lastPosition : o[l];
              let u = r.immediate,
                d = c;
              if (!u) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const n = r.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = Br.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const h = i.precision || (n == c ? .005 : Math.min(1, .001 * Math.abs(c - n)));
                if (Br.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * t);
                    d = n + o / (1 - e) * (1 - r), u = Math.abs(s.lastPosition - d) <= h, a = o * r
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || h / 10,
                      r = i.clamp ? 0 : i.bounce,
                      l = !Br.und(r),
                      f = n == c ? s.v0 > 0 : n < c;
                    let p, m = !1;
                    const g = 1,
                      v = Math.ceil(e / g);
                    for (let e = 0; e < v && (p = Math.abs(a) > t, p || (u = Math.abs(c - d) <= h, !u)); ++e) l && (m = d == c || d > c == f, m && (a = -a * r, d = c)), a += (1e-6 * -i.tension * (d - c) + .001 * -i.friction * a) / i.mass * g, d += a * g
                  }
                else {
                  let r = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, s.durationProgress > 0 && (s.elapsedTime = i.duration * s.durationProgress, t = s.elapsedTime += e)), r = (i.progress || 0) + t / this._memoizedDuration, r = r > 1 ? 1 : r < 0 ? 0 : r, s.durationProgress = r), d = n + i.easing(r) * (c - n), a = (d - s.lastPosition) / e, u = 1 == r
                }
                s.lastVelocity = a, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              a && !a[l].done && (u = !1), u ? s.done = !0 : t = !1, s.setValue(d, i.round) && (n = !0)
            }));
            const s = fi(this),
              l = s.getValue();
            if (t) {
              const e = Ho(r.to);
              l === e && !n || i.decay ? n && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(l)
          }
          set(e) {
            return br.batchedUpdates((() => {
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
            if (la(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              br.batchedUpdates((() => {
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
            return Br.und(e) ? (n = this.queue || [], this.queue = []) : n = [Br.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map((e => this._update(e)))).then((e => $i(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), ea(this._state, e && this._lastCallId), br.batchedUpdates((() => this._stop(t, e))), this
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
            n = Br.obj(n) ? n[t] : n, (null == n || Bi(n)) && (n = void 0), r = Br.obj(r) ? r[t] : r, null == r && (r = void 0);
            const o = {
              to: n,
              from: r
            };
            return sa(this) || (e.reverse && ([n, r] = [r, n]), r = Ho(r), Br.und(r) ? fi(this) || this._set(n) : this._set(r)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, Ai(e, ((e, t) => /^on/.test(t) ? ji(e, n) : e))), ba(this, e, "onProps"), _a(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Wi(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: i,
              actions: {
                pause: () => {
                  ca(this) || (da(this, !0), Kr(i.pauseQueue), _a(this, "onPause", Zi(this, fa(this, this.animation.to)), this))
                },
                resume: () => {
                  ca(this) && (da(this, !1), la(this) && this._resume(), Kr(i.resumeQueue), _a(this, "onResume", Zi(this, fa(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = pa(e);
                if (t) return this._update(t, !0)
              }
              return n
            }))
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(Qi(this));
            const r = !Br.und(e.to),
              o = !Br.und(e.from);
            if (r || o) {
              if (!(t.callId > this._lastToId)) return n(Qi(this));
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
            !o || r || t.default && !Br.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const h = !Vr(d, c);
            h && (s.from = d), d = Ho(d);
            const f = !Vr(u, l);
            f && this._focus(u);
            const p = Bi(t.to),
              {
                config: m
              } = s,
              {
                decay: g,
                velocity: v
              } = m;
            (r || o) && (m.velocity = 0), t.config && !p && function(e, t, n) {
              n && (qi(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), qi(e, t), Object.assign(e, t);
              for (const t in Ui) null == e[t] && (e[t] = Ui[t]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              Br.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
            }(m, Oi(t.config, i), t.config !== a.config ? Oi(a.config, i) : void 0);
            let y = fi(this);
            if (!y || Br.und(u)) return n(Zi(this, !0));
            const b = Br.und(t.reset) ? o && !t.default : !Br.und(d) && Ni(t.reset, i),
              _ = b ? d : this.get(),
              w = Mi(u),
              x = Br.num(w) || Br.arr(w) || ai(w),
              E = !p && (!x || Ni(a.immediate || t.immediate, i));
            if (f) {
              const e = Ei(u);
              if (e !== y.constructor) {
                if (!E) throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);
                y = this._set(w)
              }
            }
            const P = y.constructor;
            let S = Mo(u),
              C = !1;
            if (!S) {
              const e = b || !sa(this) && h;
              (f || e) && (C = Vr(Mi(_), w), S = !C), (Vr(s.immediate, E) || E) && Vr(m.decay, g) && Vr(m.velocity, v) || (S = !0)
            }
            if (C && la(this) && (s.changed && !b ? S = !0 : S || this._stop(l)), !p && ((S || Mo(l)) && (s.values = y.getPayload(), s.toValues = Mo(u) ? null : P == yi ? [1] : Ur(w)), s.immediate != E && (s.immediate = E, E || b || this._set(l)), S)) {
              const {
                onRest: e
              } = s;
              Fr(ya, (e => ba(this, t, e)));
              const r = Zi(this, fa(this, l));
              Kr(this._pendingCalls, r), this._pendingCalls.add(n), s.changed && br.batchedUpdates((() => {
                s.changed = !b, e?.(r, this), b ? Oi(a.onRest, r) : s.onStart?.(r, this)
              }))
            }
            b && this._set(_), p ? n(Ji(t.to, t, this._state, this)) : S ? this._start() : la(this) && !f ? this._pendingCalls.add(n) : n(Yi(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Bo(this) && this._detach(), t.to = e, Bo(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Mo(t) && (Uo(t, this), ra(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Mo(e) && Go(e, this)
          }
          _set(e, t = !0) {
            const n = Ho(e);
            if (!Br.und(n)) {
              const e = fi(this);
              if (!e || !Vr(n, e.getValue())) {
                const r = Ei(n);
                e && e.constructor == r ? e.setValue(n) : pi(this, r.create(n)), e && br.batchedUpdates((() => {
                  this._onChange(n, t)
                }))
              }
            }
            return fi(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, _a(this, "onStart", Zi(this, fa(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Oi(this.animation.onChange, e, this)), Oi(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            fi(this).reset(Ho(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), la(this) || (ua(this, !0), ca(this) || this._resume())
          }
          _resume() {
            Mr.skipAnimation ? this.finish() : ro.start(this)
          }
          _stop(e, t) {
            if (la(this)) {
              ua(this, !1);
              const n = this.animation;
              Fr(n.values, (e => {
                e.done = !0
              })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Vo(this, {
                type: "idle",
                parent: this
              });
              const r = t ? Qi(this.get()) : Zi(this.get(), fa(this, e ?? n.to));
              Kr(this._pendingCalls, r), n.changed && (n.changed = !1, _a(this, "onRest", r, this))
            }
          }
        };

      function fa(e, t) {
        const n = Mi(t);
        return Vr(Mi(e.get()), n)
      }

      function pa(e, t = e.loop, n = e.to) {
        const r = Oi(t);
        if (r) {
          const o = !0 !== r && ki(r),
            i = (o || e).reverse,
            a = !o || o.reset;
          return ma({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Bi(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function ma(e) {
        const {
          to: t,
          from: n
        } = e = ki(e), r = new Set;
        return Br.obj(t) && va(t, r), Br.obj(n) && va(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function ga(e) {
        const t = ma(e);
        return Br.und(t.default) && (t.default = Ai(t)), t
      }

      function va(e, t) {
        zr(e, ((e, n) => null != e && t.add(n)))
      }
      var ya = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function ba(e, t, n) {
        e.animation[n] = t[n] !== Li(t, n) ? ji(t[n], e.key) : void 0
      }

      function _a(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var wa = ["onStart", "onChange", "onRest"],
        xa = 1,
        Ea = class {
          constructor(e, t) {
            this.id = xa++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              Br.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(ma(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Ur(e).map(ma) : this.queue = [], this._flush ? this._flush(this, t) : (ja(this, t), Pa(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              Fr(Ur(t), (t => n[t].stop(!!e)))
            } else ea(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (Br.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Fr(Ur(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (Br.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Fr(Ur(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            zr(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, Gr(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !r && this._started,
              a = o || i && n.size ? this.get() : null;
            o && t.size && Gr(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, Gr(n, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            br.onFrame(this._onFrame)
          }
        };

      function Pa(e, t) {
        return Promise.all(t.map((t => Sa(e, t)))).then((t => $i(e, t)))
      }
      async function Sa(e, t, n) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, c = Br.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = Br.arr(o) || Br.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : Fr(wa, (n => {
          const r = t[n];
          if (Br.fun(r)) {
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
            }, c && (c[n] = t[n])
          }
        }));
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, Kr(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const h = (r || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
          f = !0 === t.cancel || !0 === Li(t, "cancel");
        (u || f && d.asyncId) && h.push(Wi(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Hr,
            resume: Hr,
            start(t, n) {
              f ? (ea(d, e._lastAsyncId), n(Qi(e))) : (t.onRest = s, n(Ji(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = $i(e, await Promise.all(h));
        if (a && p.finished && (!n || !p.noop)) {
          const n = pa(t, a, o);
          if (n) return ja(e, [n]), Sa(e, n, !0)
        }
        return l && br.batchedUpdates((() => l(p, e, e.item))), p
      }

      function Ca(e, t) {
        const n = {
          ...e.springs
        };
        return t && Fr(Ur(t), (e => {
          Br.und(e.keys) && (e = ma(e)), Br.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), Na(n, e, (e => Oa(e)))
        })), Ta(e, n), n
      }

      function Ta(e, t) {
        zr(t, ((t, n) => {
          e.springs[n] || (e.springs[n] = t, Uo(t, e))
        }))
      }

      function Oa(e, t) {
        const n = new ha;
        return n.key = e, t && Uo(n, t), n
      }

      function Na(e, t, n) {
        t.keys && Fr(t.keys, (r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        }))
      }

      function ja(e, t) {
        Fr(t, (t => {
          Na(e.springs, t, (t => Oa(t, e)))
        }))
      }
      var La, Ra, Aa = ({
          children: e,
          ...t
        }) => {
          const n = (0, h.useContext)(Ia),
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
          } = Ia;
          return h.createElement(i, {
            value: t
          }, e)
        },
        Ia = (La = Aa, Ra = {}, Object.assign(La, h.createContext(Ra)), La.Provider._context = La, La.Consumer._context = La, La);
      Aa.Provider = Ia.Provider, Aa.Consumer = Ia.Consumer;
      var Da = () => {
        const e = [],
          t = function(t) {
            ii(`${ni}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const r = [];
            return Fr(e, ((e, o) => {
              if (Br.und(t)) r.push(e.start());
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
          return Fr(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return Fr(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          Fr(e, ((e, n) => {
            const r = Br.fun(t) ? t(n, e) : t;
            r && e.set(r)
          }))
        }, t.start = function(t) {
          const n = [];
          return Fr(e, ((e, r) => {
            if (Br.und(t)) n.push(e.start());
            else {
              const o = this._getProps(t, e, r);
              o && n.push(e.start(o))
            }
          })), n
        }, t.stop = function() {
          return Fr(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return Fr(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
        };
        const n = function(e, t, n) {
          return Br.fun(e) ? e(n, t) : e
        };
        return t._getProps = n, t
      };

      function ka(e, t) {
        const n = Br.fun(e),
          [
            [r], o
          ] = function(e, t, n) {
            const r = Br.fun(t) && t;
            r && !n && (n = []);
            const o = (0, h.useMemo)((() => r || 3 == arguments.length ? Da() : void 0), []),
              i = (0, h.useRef)(0),
              a = li(),
              s = (0, h.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const n = Ca(e, t);
                  return i.current > 0 && !s.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? Pa(e, t) : new Promise((r => {
                    Ta(e, n), s.queue.push((() => {
                      r(Pa(e, t))
                    })), a()
                  }))
                }
              })), []),
              l = (0, h.useRef)([...s.ctrls]),
              c = [],
              u = di(e) || 0;

            function d(e, n) {
              for (let o = e; o < n; o++) {
                const e = l.current[o] || (l.current[o] = new Ea(null, s.flush)),
                  n = r ? r(o, e) : t[o];
                n && (c[o] = ga(n))
              }
            }(0, h.useMemo)((() => {
              Fr(l.current.slice(e, u), (e => {
                Vi(e, o), e.stop(!0)
              })), l.current.length = e, d(u, e)
            }), [e]), (0, h.useMemo)((() => {
              d(0, Math.min(u, e))
            }), n);
            const f = l.current.map(((e, t) => Ca(e, c[t]))),
              p = (0, h.useContext)(Aa),
              m = di(p),
              g = p !== m && Hi(p);
            si((() => {
              i.current++, s.ctrls = l.current;
              const {
                queue: e
              } = s;
              e.length && (s.queue = [], Fr(e, (e => e()))), Fr(l.current, ((e, t) => {
                o?.add(e), g && e.start({
                  default: p
                });
                const n = c[t];
                n && (Fi(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
              }))
            })), ci((() => () => {
              Fr(s.ctrls, (e => e.stop(!0)))
            }));
            const v = f.map((e => ({
              ...e
            })));
            return o ? [v, o] : v
          }(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [r, o] : r
      }
      var Ma = () => Da(),
        Ha = () => (0, h.useState)(Ma)[0];
      var Ba = 1,
        Va = class extends ia {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = To(...t);
            const n = this._get(),
              r = Ei(n);
            pi(this, r.create(n))
          }
          advance(e) {
            const t = this._get();
            Vr(t, this.get()) || (fi(this).setValue(t), this._onChange(t, this.idle)), !this.idle && za(this._active) && Ua(this)
          }
          _get() {
            const e = Br.arr(this.source) ? this.source.map(Ho) : Ur(Ho(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !za(this._active) && (this.idle = !1, Fr(mi(this), (e => {
              e.done = !1
            })), Mr.skipAnimation ? (br.batchedUpdates((() => this.advance())), Ua(this)) : ro.start(this))
          }
          _attach() {
            let e = 1;
            Fr(Ur(this.source), (t => {
              Mo(t) && Uo(t, this), ra(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            Fr(Ur(this.source), (e => {
              Mo(e) && Go(e, this)
            })), this._active.clear(), Ua(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Ur(this.source).reduce(((e, t) => Math.max(e, (ra(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function Fa(e) {
        return !1 !== e.idle
      }

      function za(e) {
        return !e.size || Array.from(e).every(Fa)
      }

      function Ua(e) {
        e.idle || (e.idle = !0, Fr(mi(e), (e => {
          e.done = !0
        })), Vo(e, {
          type: "idle",
          parent: e
        }))
      }
      Mr.assign({
        createStringInterpolator: ti,
        to: (e, t) => new Va(e, t)
      }), ro.advance;
      var Ga = /^--/;

      function qa(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Ga.test(e) || Ka.hasOwnProperty(e) && Ka[e] ? ("" + t).trim() : t + "px"
      }
      var Xa = {},
        Ka = {
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
        Wa = ["Webkit", "Ms", "Moz", "O"];
      Ka = Object.keys(Ka).reduce(((e, t) => (Wa.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), Ka);
      var $a = /^(matrix|translate|scale|rotate|skew)/,
        Ya = /^(translate)/,
        Za = /^(rotate|skew)/,
        Qa = (e, t) => Br.num(e) && 0 !== e ? e + t : e,
        Ja = (e, t) => Br.arr(e) ? e.every((e => Ja(e, t))) : Br.num(e) ? e === t : parseFloat(e) === t,
        es = class extends _i {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((e => [`translate3d(${e.map((e=>Qa(e,"px"))).join(",")})`, Ja(e, 0)]))), zr(r, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if ($a.test(t)) {
                if (delete r[t], Br.und(e)) return;
                const n = Ya.test(t) ? "px" : Za.test(t) ? "deg" : "";
                o.push(Ur(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${Qa(o,n)})`, Ja(o, 0)] : e => [`${t}(${e.map((e=>Qa(e,n))).join(",")})`, Ja(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new ts(o, i)), super(r)
          }
        },
        ts = class extends Fo {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Fr(this.inputs, ((n, r) => {
              const o = Ho(n[0]),
                [i, a] = this.transforms[r](Br.arr(o) ? o : n.map(Ho));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Fr(this.inputs, (e => Fr(e, (e => Mo(e) && Uo(e, this)))))
          }
          observerRemoved(e) {
            0 == e && Fr(this.inputs, (e => Fr(e, (e => Mo(e) && Go(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Vo(this, e)
          }
        };
      Mr.assign({
        batchedUpdates: Ut.unstable_batchedUpdates,
        createStringInterpolator: ti,
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
      var ns = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: n = e => new _i(e),
          getComponentProps: r = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            i = e => {
              const t = Ti(e) || "Anonymous";
              return (e = Br.str(e) ? i[e] || (i[e] = Pi(e, o)) : e[Ci] || (e[Ci] = Pi(e, o))).displayName = `Animated(${t})`, e
            };
          return zr(e, ((t, n) => {
            Br.arr(e) && (n = Ti(t)), i[n] = i(t)
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
                ...c
              } = t,
              u = Object.values(c),
              d = Object.keys(c).map((t => n || e.hasAttribute(t) ? t : Xa[t] || (Xa[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const n = qa(t, o[t]);
                Ga.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } d.forEach(((t, n) => {
              e.setAttribute(t, u[n])
            })), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new es(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        rs = ns.animated;
      const os = (e, t, n) => {
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
        is = e => {
          const t = (e, t, n) => {
            n(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, n) => {
            const r = n.getBoundingClientRect();
            return e ? (t(e.top, r.top, ((e, t) => e < t)), t(e.bottom, r.bottom, ((e, t) => e > t)), t(e.left, r.left, ((e, t) => e < t)), t(e.right, r.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), r) : r
          }), null)
        },
        as = ([e, t], n) => {
          const {
            a: r
          } = new DOMMatrix(n.style.transform), o = is(n), i = o.width / r, a = 100 * ls(e, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / i, s = o.height / r;
          return {
            x: a,
            y: 100 * ls(t, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / s
          }
        },
        ss = (e, t, n, r) => {
          let o = n[0],
            i = n[1];
          const {
            a
          } = new DOMMatrix(e.style.transform), s = r / 100, l = is(e), c = t.getBoundingClientRect(), u = l.width / a / 2, d = c.width / 2, h = u * s > d ? u * s - d : 0, f = l.height / a / 2, p = c.height / 2, m = f * s > p ? f * s - p : 0, g = -o > h, v = o > h, y = i > m, b = -i > m;
          return g && !v ? o = -h : v && !g && (o = h), y && !b ? i = m : b && !y && (i = -m), {
            xy: [o, i],
            horizontalOffset: h,
            verticalOffset: m
          }
        },
        ls = (e, t, n) => Math.min(Math.max(e, t), n),
        cs = {
          mass: .1,
          tension: 800,
          friction: 20,
          clamp: !1,
          precision: .001,
          velocity: 0
        },
        us = zi,
        ds = {
          scrollFactor: 2e3,
          dragFactor: 1.3,
          closePc: 33
        },
        hs = ({
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
          }), vr({
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
          return (0, u.jsx)("div", {
            ref: t,
            className: "foundry_hcgxh_148vt480",
            style: l,
            children: (0, u.jsx)(rs.div, {
              ref: n,
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
      var fs = n(91299);

      function ps(e, t) {
        var n = t && t.cache ? t.cache : Ss,
          r = t && t.serializer ? t.serializer : bs;
        return (t && t.strategy ? t.strategy : ys)(e, {
          cache: n,
          serializer: r
        })
      }

      function ms(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function gs(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function vs(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function ys(e, t) {
        return vs(e, this, 1 === e.length ? ms : gs, t.cache.create(), t.serializer)
      }
      var bs = function() {
        return JSON.stringify(arguments)
      };

      function _s() {
        this.cache = Object.create(null)
      }
      _s.prototype.get = function(e) {
        return this.cache[e]
      }, _s.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var ws, xs, Es, Ps, Ss = {
          create: function() {
            return new _s
          }
        },
        Cs = {
          variadic: function(e, t) {
            return vs(e, this, gs, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return vs(e, this, ms, t.cache.create(), t.serializer)
          }
        };

      function Ts(e) {
        return e.type === xs.literal
      }

      function Os(e) {
        return e.type === xs.argument
      }

      function Ns(e) {
        return e.type === xs.number
      }

      function js(e) {
        return e.type === xs.date
      }

      function Ls(e) {
        return e.type === xs.time
      }

      function Rs(e) {
        return e.type === xs.select
      }

      function As(e) {
        return e.type === xs.plural
      }

      function Is(e) {
        return e.type === xs.pound
      }

      function Ds(e) {
        return e.type === xs.tag
      }

      function ks(e) {
        return !(!e || "object" != typeof e || e.type !== Es.number)
      }

      function Ms(e) {
        return !(!e || "object" != typeof e || e.type !== Es.dateTime)
      }(Ps = ws || (ws = {}))[Ps.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", Ps[Ps.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", Ps[Ps.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", Ps[Ps.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", Ps[Ps.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", Ps[Ps.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", Ps[Ps.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", Ps[Ps.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", Ps[Ps.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", Ps[Ps.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", Ps[Ps.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", Ps[Ps.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", Ps[Ps.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", Ps[Ps.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", Ps[Ps.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", Ps[Ps.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", Ps[Ps.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", Ps[Ps.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", Ps[Ps.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", Ps[Ps.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", Ps[Ps.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", Ps[Ps.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", Ps[Ps.INVALID_TAG = 23] = "INVALID_TAG", Ps[Ps.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", Ps[Ps.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", Ps[Ps.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(xs || (xs = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(Es || (Es = {}));
      var Hs = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Bs = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Vs(e) {
        var t = {};
        return e.replace(Bs, (function(e) {
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
      var Fs = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function zs(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], n = 0, r = e.split(Fs).filter((function(e) {
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
      var Us = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Gs = /^(@+)?(\+|#+)?[rs]?$/g,
        qs = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Xs = /^(0+)$/;

      function Ks(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Gs, (function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        })), t
      }

      function Ws(e) {
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

      function $s(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !Xs.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function Ys(e) {
        return Ws(e) || {}
      }

      function Zs(e) {
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
              t = (0, fs.__assign)((0, fs.__assign)((0, fs.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, fs.__assign)((0, fs.__assign)({}, e), Ys(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, fs.__assign)((0, fs.__assign)((0, fs.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, fs.__assign)((0, fs.__assign)({}, e), Ys(t))
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
              o.options[0].replace(qs, (function(e, n, r, o, i, a) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (Xs.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Us.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Us, (function(e, n, r, o, i, a) {
              return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, fs.__assign)((0, fs.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, fs.__assign)((0, fs.__assign)({}, t), Ks(i)))
          } else if (Gs.test(o.stem)) t = (0, fs.__assign)((0, fs.__assign)({}, t), Ks(o.stem));
          else {
            var a = Ws(o.stem);
            a && (t = (0, fs.__assign)((0, fs.__assign)({}, t), a));
            var s = $s(o.stem);
            s && (t = (0, fs.__assign)((0, fs.__assign)({}, t), s))
          }
        }
        return t
      }
      var Qs, Js = {
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

      function el(e) {
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
        return "root" !== r && (n = e.maximize().region), (Js[n || ""] || Js[r || ""] || Js["".concat(r, "-001")] || Js["001"])[0]
      }
      var tl = new RegExp("^".concat(Hs.source, "*")),
        nl = new RegExp("".concat(Hs.source, "*$"));

      function rl(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var ol = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        il = !!String.fromCodePoint,
        al = !!Object.fromEntries,
        sl = !!String.prototype.codePointAt,
        ll = !!String.prototype.trimStart,
        cl = !!String.prototype.trimEnd,
        ul = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        dl = !0;
      try {
        dl = "a" === (null === (Qs = bl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Qs ? void 0 : Qs[0])
      } catch (e) {
        dl = !1
      }
      var hl, fl = ol ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        pl = il ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        ml = al ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        gl = sl ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        vl = ll ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(tl, "")
        },
        yl = cl ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(nl, "")
        };

      function bl(e, t) {
        return new RegExp(e, t)
      }
      if (dl) {
        var _l = bl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        hl = function(e, t) {
          var n;
          return _l.lastIndex = t, null !== (n = _l.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else hl = function(e, t) {
        for (var n = [];;) {
          var r = gl(e, t);
          if (void 0 === r || Sl(r) || Cl(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return pl.apply(void 0, n)
      };
      var wl, xl, El = function() {
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
                  return this.error(ws.UNMATCHED_CLOSING_TAG, rl(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Pl(this.peek() || 0)) {
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
                  type: xs.pound,
                  location: rl(a, this.clonePosition())
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
              type: xs.literal,
              value: "<".concat(r, "/>"),
              location: rl(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Pl(this.char())) return this.error(ws.INVALID_TAG, rl(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(ws.UNMATCHED_CLOSING_TAG, rl(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: xs.tag,
                  value: r,
                  children: i,
                  location: rl(n, this.clonePosition())
                },
                err: null
              } : this.error(ws.INVALID_TAG, rl(a, this.clonePosition())))
            }
            return this.error(ws.UNCLOSED_TAG, rl(n, this.clonePosition()))
          }
          return this.error(ws.INVALID_TAG, rl(n, this.clonePosition()))
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
          var s = rl(n, this.clonePosition());
          return {
            val: {
              type: xs.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Pl(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return pl.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), pl(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(ws.EXPECT_ARGUMENT_CLOSING_BRACE, rl(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(ws.EMPTY_ARGUMENT, rl(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(ws.MALFORMED_ARGUMENT, rl(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(ws.EXPECT_ARGUMENT_CLOSING_BRACE, rl(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: xs.argument,
                  value: r,
                  location: rl(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ws.EXPECT_ARGUMENT_CLOSING_BRACE, rl(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(ws.MALFORMED_ARGUMENT, rl(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = hl(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: rl(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(ws.EXPECT_ARGUMENT_TYPE, rl(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (f = yl(v.val)).length) return this.error(ws.EXPECT_ARGUMENT_STYLE, rl(this.clonePosition(), this.clonePosition()));
                l = {
                  style: f,
                  styleLocation: rl(c, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var u = rl(r, this.clonePosition());
              if (l && fl(null == l ? void 0 : l.style, "::", 0)) {
                var d = vl(l.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? v : {
                  val: {
                    type: xs.number,
                    value: n,
                    location: u,
                    style: v.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(ws.EXPECT_DATE_TIME_SKELETON, u);
                var h = d;
                this.locale && (h = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = el(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var f = {
                  type: Es.dateTime,
                  pattern: h,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Vs(h) : {}
                };
                return {
                  val: {
                    type: "date" === a ? xs.date : xs.time,
                    value: n,
                    location: u,
                    style: f
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? xs.number : "date" === a ? xs.date : xs.time,
                  value: n,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(ws.EXPECT_SELECT_ARGUMENT_OPTIONS, rl(p, (0, fs.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                g = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(ws.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, rl(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(ws.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ws.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), g = v.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var _ = rl(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: xs.select,
                  value: n,
                  options: ml(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: xs.plural,
                  value: n,
                  options: ml(b.val),
                  offset: g,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(ws.INVALID_ARGUMENT_TYPE, rl(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(ws.EXPECT_ARGUMENT_CLOSING_BRACE, rl(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(ws.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, rl(n, this.clonePosition()));
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
            n = zs(e)
          } catch (e) {
            return this.error(ws.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Es.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Zs(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, c = r.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(ws.EXPECT_PLURAL_ARGUMENT_SELECTOR, ws.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = rl(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? ws.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ws.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var h = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? ws.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ws.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, rl(this.clonePosition(), this.clonePosition()));
            var f = this.parseMessage(e + 1, t, n);
            if (f.err) return f;
            var p = this.tryParseArgumentClose(h);
            if (p.err) return p;
            a.push([l, {
              value: f.val,
              location: rl(h, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? ws.EXPECT_SELECT_ARGUMENT_SELECTOR : ws.EXPECT_PLURAL_ARGUMENT_SELECTOR, rl(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(ws.MISSING_OTHER_CLAUSE, rl(this.clonePosition(), this.clonePosition())) : {
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
          var s = rl(r, this.clonePosition());
          return o ? ul(i *= n) ? {
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
          var t = gl(this.message, e);
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
          if (fl(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && Sl(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }, e
      }();

      function Pl(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Sl(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Cl(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Tl(e) {
        e.forEach((function(e) {
          if (delete e.location, Rs(e) || As(e))
            for (var t in e.options) delete e.options[t].location, Tl(e.options[t].value);
          else Ns(e) && ks(e.style) || (js(e) || Ls(e)) && Ms(e.style) ? delete e.style.location : Ds(e) && Tl(e.children)
        }))
      }

      function Ol(e, t) {
        void 0 === t && (t = {}), t = (0, fs.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var n = new El(e, t).parse();
        if (n.err) {
          var r = SyntaxError(ws[n.err.kind]);
          throw r.location = n.err.location, r.originalMessage = n.err.message, r
        }
        return (null == t ? void 0 : t.captureLocation) || Tl(n.val), n.val
      }(xl = wl || (wl = {})).MISSING_VALUE = "MISSING_VALUE", xl.INVALID_VALUE = "INVALID_VALUE", xl.MISSING_INTL_API = "MISSING_INTL_API";
      var Nl, jl = function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return o.code = n, o.originalMessage = r, o
          }
          return (0, fs.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        Ll = function(e) {
          function t(t, n, r, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(r).join('", "'), '"'), wl.INVALID_VALUE, o) || this
          }
          return (0, fs.__extends)(t, e), t
        }(jl),
        Rl = function(e) {
          function t(t, n, r) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), wl.INVALID_VALUE, r) || this
          }
          return (0, fs.__extends)(t, e), t
        }(jl),
        Al = function(e) {
          function t(t, n) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), wl.MISSING_VALUE, n) || this
          }
          return (0, fs.__extends)(t, e), t
        }(jl);

      function Il(e) {
        return "function" == typeof e
      }

      function Dl(e, t, n, r, o, i, a) {
        if (1 === e.length && Ts(e[0])) return [{
          type: Nl.literal,
          value: e[0].value
        }];
        for (var s = [], l = 0, c = e; l < c.length; l++) {
          var u = c[l];
          if (Ts(u)) s.push({
            type: Nl.literal,
            value: u.value
          });
          else if (Is(u)) "number" == typeof i && s.push({
            type: Nl.literal,
            value: n.getNumberFormat(t).format(i)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new Al(d, a);
            var h = o[d];
            if (Os(u)) h && "string" != typeof h && "number" != typeof h || (h = "string" == typeof h || "number" == typeof h ? String(h) : ""), s.push({
              type: "string" == typeof h ? Nl.literal : Nl.object,
              value: h
            });
            else if (js(u)) {
              var f = "string" == typeof u.style ? r.date[u.style] : Ms(u.style) ? u.style.parsedOptions : void 0;
              s.push({
                type: Nl.literal,
                value: n.getDateTimeFormat(t, f).format(h)
              })
            } else if (Ls(u)) f = "string" == typeof u.style ? r.time[u.style] : Ms(u.style) ? u.style.parsedOptions : r.time.medium, s.push({
              type: Nl.literal,
              value: n.getDateTimeFormat(t, f).format(h)
            });
            else if (Ns(u))(f = "string" == typeof u.style ? r.number[u.style] : ks(u.style) ? u.style.parsedOptions : void 0) && f.scale && (h *= f.scale || 1), s.push({
              type: Nl.literal,
              value: n.getNumberFormat(t, f).format(h)
            });
            else {
              if (Ds(u)) {
                var p = u.children,
                  m = u.value,
                  g = o[m];
                if (!Il(g)) throw new Rl(m, "function", a);
                var v = g(Dl(p, t, n, r, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(v) || (v = [v]), s.push.apply(s, v.map((function(e) {
                  return {
                    type: "string" == typeof e ? Nl.literal : Nl.object,
                    value: e
                  }
                })))
              }
              if (Rs(u)) {
                if (!(y = u.options[h] || u.options.other)) throw new Ll(u.value, h, Object.keys(u.options), a);
                s.push.apply(s, Dl(y.value, t, n, r, o))
              } else if (As(u)) {
                var y;
                if (!(y = u.options["=".concat(h)])) {
                  if (!Intl.PluralRules) throw new jl('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', wl.MISSING_INTL_API, a);
                  var b = n.getPluralRules(t, {
                    type: u.pluralType
                  }).select(h - (u.offset || 0));
                  y = u.options[b] || u.options.other
                }
                if (!y) throw new Ll(u.value, h, Object.keys(u.options), a);
                s.push.apply(s, Dl(y.value, t, n, r, o, h - (u.offset || 0)))
              }
            }
          }
        }
        return (_ = s).length < 2 ? _ : _.reduce((function(e, t) {
          var n = e[e.length - 1];
          return n && n.type === Nl.literal && t.type === Nl.literal ? n.value += t.value : e.push(t), e
        }), []);
        var _
      }

      function kl(e) {
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
      }(Nl || (Nl = {}));
      var Ml, Hl = function() {
        function e(t, n, r, o) {
          void 0 === n && (n = e.defaultLocale);
          var i, a, s, l = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = l.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var n = t.reduce((function(e, t) {
                return e.length && t.type === Nl.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return n.length <= 1 ? n[0] || "" : n
            }, this.formatToParts = function(e) {
              return Dl(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = l.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(l.locales)[0]
              }
            }, this.getAst = function() {
              return l.ast
            }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var c = o || {},
              u = (c.formatters, (0, fs.__rest)(c, ["formatters"]));
            this.ast = e.__parse(t, (0, fs.__assign)((0, fs.__assign)({}, u), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (a = e.formats, (s = r) ? Object.keys(a).reduce((function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, fs.__assign)((0, fs.__assign)((0, fs.__assign)({}, e || {}), t || {}), Object.keys(e).reduce((function(n, r) {
                return n[r] = (0, fs.__assign)((0, fs.__assign)({}, e[r]), t[r] || {}), n
              }), {})) : e
            }(a[t], s[t]), e
          }), (0, fs.__assign)({}, a)) : a), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: ps((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
            }), {
              cache: kl(i.number),
              strategy: Cs.variadic
            }),
            getDateTimeFormat: ps((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
            }), {
              cache: kl(i.dateTime),
              strategy: Cs.variadic
            }),
            getPluralRules: ps((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.PluralRules).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
            }), {
              cache: kl(i.pluralRules),
              strategy: Cs.variadic
            })
          })
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
        }, e.__parse = Ol, e.formats = {
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
      }(Ml || (Ml = {}));
      var Bl = function(e) {
          function t(n, r, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = n, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, fs.__extends)(t, e), t
        }(Error),
        Vl = function(e) {
          function t(t, n) {
            return e.call(this, Ml.UNSUPPORTED_FORMATTER, t, n) || this
          }
          return (0, fs.__extends)(t, e), t
        }(Bl),
        Fl = function(e) {
          function t(t, n) {
            return e.call(this, Ml.INVALID_CONFIG, t, n) || this
          }
          return (0, fs.__extends)(t, e), t
        }(Bl),
        zl = function(e) {
          function t(t, n) {
            return e.call(this, Ml.MISSING_DATA, t, n) || this
          }
          return (0, fs.__extends)(t, e), t
        }(Bl),
        Ul = function(e) {
          function t(t, n, r) {
            var o = e.call(this, Ml.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(n, "\n"), r) || this;
            return o.locale = n, o
          }
          return (0, fs.__extends)(t, e), t
        }(Bl),
        Gl = function(e) {
          function t(t, n, r, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == r ? void 0 : r.id, "\nDefault Message: ").concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ").concat(null == r ? void 0 : r.description, "\n"), n, o) || this;
            return i.descriptor = r, i.locale = n, i
          }
          return (0, fs.__extends)(t, e), t
        }(Ul),
        ql = function(e) {
          function t(t, n) {
            var r = e.call(this, Ml.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(n, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return r.descriptor = t, r
          }
          return (0, fs.__extends)(t, e), t
        }(Bl);

      function Xl(e, t, n) {
        return void 0 === n && (n = {}), t.reduce((function(t, r) {
          return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t
        }), {})
      }
      var Kl = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function Wl(e) {
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

      function $l(e, t, n, r) {
        var o, i = e && e[t];
        if (i && (o = i[n]), o) return o;
        r(new Vl("No ".concat(t, " format named: ").concat(n)))
      }

      function Yl(e, t) {
        var n = t && t.cache ? t.cache : rc,
          r = t && t.serializer ? t.serializer : tc;
        return (t && t.strategy ? t.strategy : ec)(e, {
          cache: n,
          serializer: r
        })
      }

      function Zl(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function Ql(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function Jl(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function ec(e, t) {
        return Jl(e, this, 1 === e.length ? Zl : Ql, t.cache.create(), t.serializer)
      }
      var tc = function() {
        return JSON.stringify(arguments)
      };

      function nc() {
        this.cache = Object.create(null)
      }
      nc.prototype.get = function(e) {
        return this.cache[e]
      }, nc.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var rc = {
          create: function() {
            return new nc
          }
        },
        oc = {
          variadic: function(e, t) {
            return Jl(e, this, Ql, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return Jl(e, this, Zl, t.cache.create(), t.serializer)
          }
        };

      function ic(e) {
        ! function(e, t, n) {
          if (void 0 === n && (n = Error), !e) throw new n("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      Yl((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: oc.variadic
      }), Yl((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: oc.variadic
      }), Yl((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.PluralRules).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: oc.variadic
      }), Yl((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.Locale).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: oc.variadic
      }), Yl((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.ListFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: oc.variadic
      });
      var ac = (0, fs.__assign)((0, fs.__assign)({}, Kl), {
        textComponent: h.Fragment
      });
      n(28136);
      var sc = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? h.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = h.createContext(null)),
        lc = (sc.Consumer, sc.Provider),
        cc = sc;

      function uc(e, t) {
        return Object.keys(e).reduce((function(n, r) {
          return n[r] = (0, fs.__assign)({
            timeZone: t
          }, e[r]), n
        }), {})
      }

      function dc(e, t) {
        return Object.keys((0, fs.__assign)((0, fs.__assign)({}, e), t)).reduce((function(n, r) {
          return n[r] = (0, fs.__assign)((0, fs.__assign)({}, e[r] || {}), t[r] || {}), n
        }), {})
      }

      function hc(e, t) {
        if (!t) return e;
        var n = Hl.formats;
        return (0, fs.__assign)((0, fs.__assign)((0, fs.__assign)({}, n), e), {
          date: dc(uc(n.date, t), uc(e.date || {}, t)),
          time: dc(uc(n.time, t), uc(e.time || {}, t))
        })
      }
      ps((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Cs.variadic
      }), ps((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Cs.variadic
      }), ps((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.PluralRules).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Cs.variadic
      }), ps((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.Locale).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Cs.variadic
      }), ps((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.ListFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Cs.variadic
      });
      var fc = function(e, t, n, r, o) {
          var i = e.locale,
            a = e.formats,
            s = e.messages,
            l = e.defaultLocale,
            c = e.defaultFormats,
            u = e.fallbackOnEmptyString,
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
          if (Array.isArray(v) && 1 === v.length && v[0].type === xs.literal) return v[0].value;
          if (!r && v && "string" == typeof v && !f) return v.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (r = (0, fs.__assign)((0, fs.__assign)({}, f), r || {}), a = hc(a, h), c = hc(c, h), !v) {
            if (!1 === u && "" === v) return v;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new ql(n, i)), m) try {
              return t.getMessageFormat(m, l, c, o).format(r)
            } catch (e) {
              return d(new Gl('Error formatting default message for: "'.concat(g, '", rendering default message verbatim'), i, n, e)), "string" == typeof m ? m : g
            }
            return g
          }
          try {
            return t.getMessageFormat(v, i, a, (0, fs.__assign)({
              formatters: t
            }, o || {})).format(r)
          } catch (e) {
            d(new Gl('Error formatting message: "'.concat(g, '", using ').concat(m ? "default message" : "id", " as fallback."), i, n, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, c, o).format(r)
          } catch (e) {
            d(new Gl('Error formatting the default message for: "'.concat(g, '", rendering message verbatim'), i, n, e))
          }
          return "string" == typeof v ? v : "string" == typeof m ? m : g
        },
        pc = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function mc(e, t, n) {
        var r = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === n && (n = {});
        var a = n.format,
          s = a && $l(o, "number", a, i) || {};
        return t(r, Xl(n, pc, s))
      }

      function gc(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return mc(e, t, r).format(n)
        } catch (t) {
          e.onError(new Ul("Error formatting number.", e.locale, t))
        }
        return String(n)
      }

      function vc(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return mc(e, t, r).formatToParts(n)
        } catch (t) {
          e.onError(new Ul("Error formatting number.", e.locale, t))
        }
        return []
      }
      var yc = ["numeric", "style"];

      function bc(e, t, n, r, o) {
        void 0 === o && (o = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new jl('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', wl.MISSING_INTL_API));
        try {
          return function(e, t, n) {
            var r = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === n && (n = {});
            var a = n.format,
              s = !!a && $l(o, "relative", a, i) || {};
            return t(r, Xl(n, yc, s))
          }(e, t, o).format(n, r)
        } catch (t) {
          e.onError(new Ul("Error formatting relative time.", e.locale, t))
        }
        return String(n)
      }
      var _c = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function wc(e, t, n, r) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === r && (r = {});
        var l = r.format,
          c = (0, fs.__assign)((0, fs.__assign)({}, s && {
            timeZone: s
          }), l && $l(i, t, l, a)),
          u = Xl(r, _c, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, fs.__assign)((0, fs.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), n(o, u)
      }

      function xc(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return wc(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new Ul("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function Ec(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return wc(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new Ul("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function Pc(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = n[2],
          s = void 0 === a ? {} : a,
          l = e.timeZone,
          c = e.locale,
          u = e.onError,
          d = Xl(s, _c, l ? {
            timeZone: l
          } : {});
        try {
          return t(c, d).formatRange(o, i)
        } catch (t) {
          u(new Ul("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function Sc(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return wc(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Ul("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Cc(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return wc(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Ul("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Tc = ["type"];

      function Oc(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.PluralRules || i(new jl('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', wl.MISSING_INTL_API));
        var a = Xl(r, Tc);
        try {
          return t(o, a).select(n)
        } catch (e) {
          i(new Ul("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Nc = ["type", "style"],
        jc = Date.now();

      function Lc(e, t, n, r) {
        void 0 === r && (r = {});
        var o = Rc(e, t, n, r).reduce((function(e, t) {
          var n = t.value;
          return "string" != typeof n ? e.push(n) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Rc(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.ListFormat || i(new jl('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', wl.MISSING_INTL_API));
        var a = Xl(r, Nc);
        try {
          var s = {},
            l = n.map((function(e, t) {
              if ("object" == typeof e) {
                var n = function(e) {
                  return "".concat(jc, "_").concat(e, "_").concat(jc)
                }(t);
                return s[n] = e, n
              }
              return String(e)
            }));
          return t(o, a).formatToParts(l).map((function(e) {
            return "literal" === e.type ? e : (0, fs.__assign)((0, fs.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          }))
        } catch (e) {
          i(new Ul("Error formatting list.", o, e))
        }
        return n
      }
      var Ac, Ic, Dc, kc = ["style", "type", "fallback", "languageDisplay"];

      function Mc(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new jl('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', wl.MISSING_INTL_API));
        var a = Xl(r, kc);
        try {
          return t(o, a).of(n)
        } catch (e) {
          i(new Ul("Error formatting display name.", o, e))
        }
      }

      function Hc(e, t) {
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
              o = ps((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Wl(e.dateTime),
                strategy: Cs.variadic
              }),
              i = ps((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Wl(e.number),
                strategy: Cs.variadic
              }),
              a = ps((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.PluralRules).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Wl(e.pluralRules),
                strategy: Cs.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: ps((function(e, t, n, r) {
                return new Hl(e, t, n, (0, fs.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: a
                  }
                }, r || {}))
              }), {
                cache: Wl(e.message),
                strategy: Cs.variadic
              }),
              getRelativeTimeFormat: ps((function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new(t.bind.apply(t, (0, fs.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Wl(e.relativeTime),
                strategy: Cs.variadic
              }),
              getPluralRules: a,
              getListFormat: ps((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, fs.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Wl(e.list),
                strategy: Cs.variadic
              }),
              getDisplayNames: ps((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, fs.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Wl(e.displayNames),
                strategy: Cs.variadic
              })
            }
          }(t),
          r = (0, fs.__assign)((0, fs.__assign)({}, Kl), e),
          o = r.locale,
          i = r.defaultLocale,
          a = r.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new zl('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new zl('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new Fl('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(r), (0, fs.__assign)((0, fs.__assign)({}, r), {
            formatters: n,
            formatNumber: gc.bind(null, r, n.getNumberFormat),
            formatNumberToParts: vc.bind(null, r, n.getNumberFormat),
            formatRelativeTime: bc.bind(null, r, n.getRelativeTimeFormat),
            formatDate: xc.bind(null, r, n.getDateTimeFormat),
            formatDateToParts: Sc.bind(null, r, n.getDateTimeFormat),
            formatTime: Ec.bind(null, r, n.getDateTimeFormat),
            formatDateTimeRange: Pc.bind(null, r, n.getDateTimeFormat),
            formatTimeToParts: Cc.bind(null, r, n.getDateTimeFormat),
            formatPlural: Oc.bind(null, r, n.getPluralRules),
            formatMessage: fc.bind(null, r, n),
            $t: fc.bind(null, r, n),
            formatList: Lc.bind(null, r, n.getListFormat),
            formatListToParts: Rc.bind(null, r, n.getListFormat),
            formatDisplayName: Mc.bind(null, r, n.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Ac || (Ac = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Ic || (Ic = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Dc || (Dc = {}));
      var Bc, Vc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Fc = {
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

      function zc(e) {
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
        return "root" !== r && (n = e.maximize().region), (Fc[n || ""] || Fc[r || ""] || Fc["".concat(r, "-001")] || Fc["001"])[0]
      }
      var Uc = new RegExp("^".concat(Vc.source, "*")),
        Gc = new RegExp("".concat(Vc.source, "*$"));

      function qc(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Xc = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Kc = !!String.fromCodePoint,
        Wc = !!Object.fromEntries,
        $c = !!String.prototype.codePointAt,
        Yc = !!String.prototype.trimStart,
        Zc = !!String.prototype.trimEnd,
        Qc = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Jc = !0;
      try {
        Jc = "a" === (null === (Bc = lu("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Bc ? void 0 : Bc[0])
      } catch (e) {
        Jc = !1
      }
      var eu, tu, nu = Xc ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        ru = Kc ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        ou = Wc ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        iu = $c ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        au = Yc ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Uc, "")
        },
        su = Zc ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Gc, "")
        };

      function lu(e, t) {
        return new RegExp(e, t)
      }
      if (Jc) {
        var cu = lu("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        eu = function(e, t) {
          var n;
          return cu.lastIndex = t, null !== (n = cu.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else eu = function(e, t) {
        for (var n = [];;) {
          var r = iu(e, t);
          if (void 0 === r || du(r) || hu(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return ru.apply(void 0, n)
      };

      function uu(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function du(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function hu(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function fu(e) {
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
                  return this.error(Ac.UNMATCHED_CLOSING_TAG, qc(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && uu(this.peek() || 0)) {
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
                  type: Ic.pound,
                  location: qc(a, this.clonePosition())
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
              type: Ic.literal,
              value: "<".concat(r, "/>"),
              location: qc(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !uu(this.char())) return this.error(Ac.INVALID_TAG, qc(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(Ac.UNMATCHED_CLOSING_TAG, qc(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Ic.tag,
                  value: r,
                  children: i,
                  location: qc(n, this.clonePosition())
                },
                err: null
              } : this.error(Ac.INVALID_TAG, qc(a, this.clonePosition())))
            }
            return this.error(Ac.UNCLOSED_TAG, qc(n, this.clonePosition()))
          }
          return this.error(Ac.INVALID_TAG, qc(n, this.clonePosition()))
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
          var s = qc(n, this.clonePosition());
          return {
            val: {
              type: Ic.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (uu(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return ru.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), ru(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Ac.EXPECT_ARGUMENT_CLOSING_BRACE, qc(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Ac.EMPTY_ARGUMENT, qc(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(Ac.MALFORMED_ARGUMENT, qc(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Ac.EXPECT_ARGUMENT_CLOSING_BRACE, qc(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Ic.argument,
                  value: r,
                  location: qc(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ac.EXPECT_ARGUMENT_CLOSING_BRACE, qc(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(Ac.MALFORMED_ARGUMENT, qc(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = eu(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: qc(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Ac.EXPECT_ARGUMENT_TYPE, qc(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (f = su(v.val)).length) return this.error(Ac.EXPECT_ARGUMENT_STYLE, qc(this.clonePosition(), this.clonePosition()));
                l = {
                  style: f,
                  styleLocation: qc(c, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var u = qc(r, this.clonePosition());
              if (l && nu(null == l ? void 0 : l.style, "::", 0)) {
                var d = au(l.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? v : {
                  val: {
                    type: Ic.number,
                    value: n,
                    location: u,
                    style: v.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Ac.EXPECT_DATE_TIME_SKELETON, u);
                var h = d;
                this.locale && (h = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = zc(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var f = {
                  type: Dc.dateTime,
                  pattern: h,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Vs(h) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Ic.date : Ic.time,
                    value: n,
                    location: u,
                    style: f
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Ic.number : "date" === a ? Ic.date : Ic.time,
                  value: n,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Ac.EXPECT_SELECT_ARGUMENT_OPTIONS, qc(p, (0, fs.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                g = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Ac.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, qc(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(Ac.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ac.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), g = v.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var _ = qc(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Ic.select,
                  value: n,
                  options: ou(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Ic.plural,
                  value: n,
                  options: ou(b.val),
                  offset: g,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Ac.INVALID_ARGUMENT_TYPE, qc(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Ac.EXPECT_ARGUMENT_CLOSING_BRACE, qc(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Ac.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, qc(n, this.clonePosition()));
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
            n = zs(e)
          } catch (e) {
            return this.error(Ac.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Dc.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Zs(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, c = r.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Ac.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ac.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = qc(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Ac.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ac.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var h = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Ac.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ac.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, qc(this.clonePosition(), this.clonePosition()));
            var f = this.parseMessage(e + 1, t, n);
            if (f.err) return f;
            var p = this.tryParseArgumentClose(h);
            if (p.err) return p;
            a.push([l, {
              value: f.val,
              location: qc(h, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Ac.EXPECT_SELECT_ARGUMENT_SELECTOR : Ac.EXPECT_PLURAL_ARGUMENT_SELECTOR, qc(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Ac.MISSING_OTHER_CLAUSE, qc(this.clonePosition(), this.clonePosition())) : {
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
          var s = qc(r, this.clonePosition());
          return o ? Qc(i *= n) ? {
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
          var t = iu(this.message, e);
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
          if (nu(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && du(this.char());) this.bump()
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
      }(tu || (tu = {}));
      var pu = function(e, t, n, r) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var a = fu(r),
            s = fc.apply(void 0, (0, fs.__spreadArray)([e, t, n, a], o, !1));
          return Array.isArray(s) ? h.Children.toArray(s) : s
        },
        mu = function(e, t) {
          var n = e.defaultRichTextElements,
            r = (0, fs.__rest)(e, ["defaultRichTextElements"]),
            o = fu(n),
            i = Hc((0, fs.__assign)((0, fs.__assign)((0, fs.__assign)({}, ac), r), {
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
          return (0, fs.__assign)((0, fs.__assign)({}, i), {
            formatMessage: pu.bind(null, a, i.formatters),
            $t: pu.bind(null, a, i.formatters)
          })
        };

      function gu(e) {
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
      var vu = function(e) {
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
            intl: mu(gu(t.props), t.cache),
            prevConfig: gu(t.props)
          }, t
        }
        return (0, fs.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var n = t.prevConfig,
            r = t.cache,
            o = gu(e);
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
            intl: mu(o, r),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return ic(this.state.intl), h.createElement(lc, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = ac, t
      }(h.PureComponent);
      const yu = vu;

      function bu() {
        var e = h.useContext(cc);
        return ic(e), e
      }
      var _u, wu;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(_u || (_u = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(wu || (wu = {}));
      var xu = function(e) {
        var t = bu(),
          n = e.value,
          r = e.children,
          o = (0, fs.__rest)(e, ["value", "children"]);
        return r(t.formatNumberToParts(n, o))
      };

      function Eu(e) {
        var t = function(t) {
          var n = bu(),
            r = t.value,
            o = t.children,
            i = (0, fs.__rest)(t, ["value", "children"]),
            a = "string" == typeof r ? new Date(r || 0) : r;
          return o("formatDate" === e ? n.formatDateToParts(a, i) : n.formatTimeToParts(a, i))
        };
        return t.displayName = wu[e], t
      }

      function Pu(e) {
        var t = function(t) {
          var n = bu(),
            r = t.value,
            o = t.children,
            i = (0, fs.__rest)(t, ["value", "children"]),
            a = n[e](r, i);
          if ("function" == typeof o) return o(a);
          var s = n.textComponent || h.Fragment;
          return h.createElement(s, null, a)
        };
        return t.displayName = _u[e], t
      }
      xu.displayName = "FormattedNumberParts", xu.displayName = "FormattedNumberParts", Pu("formatDate"), Pu("formatTime"), Pu("formatNumber"), Pu("formatList"), Pu("formatDisplayName"), Eu("formatDate"), Eu("formatTime");
      const Su = ({
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
          }), [n]), o ? (0, u.jsx)(yu, {
            locale: n,
            messages: o,
            children: e
          }) : r ?? null
        },
        Cu = {
          id: "Lightbox_Open_Button_Label"
        },
        Tu = {
          id: "Lightbox_Dialog_Title"
        },
        Ou = {
          id: "Lightbox_Dialog_Description"
        },
        Nu = {
          "en-US": n.e(7039).then(n.bind(n, 7039)),
          "de-DE": n.e(4220).then(n.bind(n, 94220)),
          "es-ES": n.e(4186).then(n.bind(n, 14186)),
          "es-MX": n.e(1607).then(n.bind(n, 11607)),
          "fr-FR": n.e(3622).then(n.bind(n, 3622)),
          "it-IT": n.e(6940).then(n.bind(n, 36940)),
          "ja-JP": n.e(5247).then(n.bind(n, 85247)),
          "ko-KR": n.e(2941).then(n.bind(n, 22941)),
          "pl-PL": n.e(9642).then(n.bind(n, 19642)),
          "pt-BR": n.e(9474).then(n.bind(n, 19474)),
          "ru-RU": n.e(888).then(n.bind(n, 10888)),
          "zh-CN": n.e(377).then(n.bind(n, 80377)),
          "zh-TW": n.e(969).then(n.bind(n, 70969))
        };
      var ju = n(25648);
      const Lu = (e, t) => {
        const n = "more" === t ? ju.xW.lightHc : ju.xW.light,
          r = "more" === t ? ju.xW.darkHc : ju.xW.dark;
        return "dark" === e ? r : n
      };

      function Ru(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }

      function Au(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      var Iu = n(21423);

      function Du(e, t = []) {
        let n = [];
        const r = () => {
          const t = n.map((e => h.createContext(e)));
          return function(n) {
            const r = n?.[e] || t;
            return h.useMemo((() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: r
              }
            })), [n, r])
          }
        };
        return r.scopeName = e, [function(t, r) {
          const o = h.createContext(r),
            i = n.length;
          n = [...n, r];
          const a = t => {
            const {
              scope: n,
              children: r,
              ...a
            } = t, s = n?.[e]?.[i] || o, l = h.useMemo((() => a), Object.values(a));
            return (0, u.jsx)(s.Provider, {
              value: l,
              children: r
            })
          };
          return a.displayName = t + "Provider", [a, function(n, a) {
            const s = a?.[e]?.[i] || o,
              l = h.useContext(s);
            if (l) return l;
            if (void 0 !== r) return r;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, ku(r, ...t)]
      }

      function ku(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = n.reduce(((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            })), {});
            return h.useMemo((() => ({
              [`__scope${t.scopeName}`]: r
            })), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }
      var Mu = globalThis?.document ? h.useLayoutEffect : () => {},
        Hu = f[" useInsertionEffect ".trim().toString()] || Mu;

      function Bu({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [o, i, a] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = h.useState(e), o = h.useRef(n), i = h.useRef(t);
          return Hu((() => {
            i.current = t
          }), [t]), h.useEffect((() => {
            o.current !== n && (i.current?.(n), o.current = n)
          }), [n, o]), [n, r, i]
        }({
          defaultProp: t,
          onChange: n
        }), s = void 0 !== e, l = s ? e : o; {
          const t = h.useRef(void 0 !== e);
          h.useEffect((() => {
            const e = t.current;
            if (e !== s) {
              const t = e ? "controlled" : "uncontrolled",
                n = s ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = s
          }), [s, r])
        }
        const c = h.useCallback((t => {
          if (s) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && a.current?.(n)
          } else i(t)
        }), [s, e, i, a]);
        return [l, c]
      }
      Symbol("RADIX:SYNC_STATE");
      var Vu = h.createContext(void 0);

      function Fu(e) {
        const t = h.useContext(Vu);
        return e || t || "ltr"
      }

      function zu(e) {
        const t = h.useRef({
          value: e,
          previous: e
        });
        return h.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }

      function Uu(e) {
        const [t, n] = h.useState(void 0);
        return Mu((() => {
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
      var Gu = n(51347),
        qu = n(83970);

      function Xu(e) {
        const t = e + "CollectionProvider",
          [n, r] = Du(t),
          [o, i] = n(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          a = e => {
            const {
              scope: t,
              children: n
            } = e, r = h.useRef(null), i = h.useRef(new Map).current;
            return (0, u.jsx)(o, {
              scope: t,
              itemMap: i,
              collectionRef: r,
              children: n
            })
          };
        a.displayName = t;
        const s = e + "CollectionSlot",
          l = (0, qu.TL)(s),
          c = h.forwardRef(((e, t) => {
            const {
              scope: n,
              children: r
            } = e, o = i(s, n), a = (0, Iu.s)(t, o.collectionRef);
            return (0, u.jsx)(l, {
              ref: a,
              children: r
            })
          }));
        c.displayName = s;
        const d = e + "CollectionItemSlot",
          f = "data-radix-collection-item",
          p = (0, qu.TL)(d),
          m = h.forwardRef(((e, t) => {
            const {
              scope: n,
              children: r,
              ...o
            } = e, a = h.useRef(null), s = (0, Iu.s)(t, a), l = i(d, n);
            return h.useEffect((() => (l.itemMap.set(a, {
              ref: a,
              ...o
            }), () => {
              l.itemMap.delete(a)
            }))), (0, u.jsx)(p, {
              [f]: "",
              ref: s,
              children: r
            })
          }));
        return m.displayName = d, [{
          Provider: a,
          Slot: c,
          ItemSlot: m
        }, function(t) {
          const n = i(e + "CollectionConsumer", t),
            r = h.useCallback((() => {
              const e = n.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${f}]`)),
                r = Array.from(n.itemMap.values()).sort(((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)));
              return r
            }), [n.collectionRef, n.itemMap]);
          return r
        }, r]
      }
      Map;
      var Ku = ["PageUp", "PageDown"],
        Wu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        $u = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Yu = "Slider",
        [Zu, Qu, Ju] = Xu(Yu),
        [ed, td] = Du(Yu, [Ju]),
        [nd, rd] = ed(Yu),
        od = h.forwardRef(((e, t) => {
          const {
            name: n,
            min: r = 0,
            max: o = 100,
            step: i = 1,
            orientation: a = "horizontal",
            disabled: s = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: c = [r],
            value: d,
            onValueChange: f = () => {},
            onValueCommit: p = () => {},
            inverted: m = !1,
            form: g,
            ...v
          } = e, y = h.useRef(new Set), b = h.useRef(0), _ = "horizontal" === a ? sd : ld, [w = [], x] = Bu({
            prop: d,
            defaultProp: c,
            onChange: e => {
              const t = [...y.current];
              t[b.current]?.focus(), f(e)
            }
          }), E = h.useRef(w);

          function P(e, t, {
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
              c = Ru(s, [r, o]);
            x(((e = []) => {
              const r = function(e = [], t, n) {
                const r = [...e];
                return r[n] = t, r.sort(((e, t) => e - t))
              }(e, c, t);
              if (function(e, t) {
                  if (t > 0) {
                    const n = function(e) {
                      return e.slice(0, -1).map(((t, n) => e[n + 1] - t))
                    }(e);
                    return Math.min(...n) >= t
                  }
                  return !0
                }(r, l * i)) {
                b.current = r.indexOf(c);
                const t = String(r) !== String(e);
                return t && n && p(r), t ? r : e
              }
              return e
            }))
          }
          return (0, u.jsx)(nd, {
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
            children: (0, u.jsx)(Zu.Provider, {
              scope: e.__scopeSlider,
              children: (0, u.jsx)(Zu.Slot, {
                scope: e.__scopeSlider,
                children: (0, u.jsx)(_, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...v,
                  ref: t,
                  onPointerDown: Au(v.onPointerDown, (() => {
                    s || (E.current = w)
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
                    P(e, t)
                  },
                  onSlideMove: s ? void 0 : function(e) {
                    P(e, b.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const e = E.current[b.current];
                    w[b.current] !== e && p(w)
                  },
                  onHomeKeyDown: () => !s && P(r, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !s && P(o, w.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!s) {
                      const n = Ku.includes(e.key) || e.shiftKey && Wu.includes(e.key) ? 10 : 1,
                        r = b.current;
                      P(w[r] + i * n * t, r, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      od.displayName = Yu;
      var [id, ad] = ed(Yu, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), sd = h.forwardRef(((e, t) => {
        const {
          min: n,
          max: r,
          dir: o,
          inverted: i,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: l,
          onStepKeyDown: c,
          ...d
        } = e, [f, p] = h.useState(null), m = (0, Iu.s)(t, (e => p(e))), g = h.useRef(void 0), v = Fu(o), y = "ltr" === v, b = y && !i || !y && i;

        function _(e) {
          const t = g.current || f.getBoundingClientRect(),
            o = bd([0, t.width], b ? [n, r] : [r, n]);
          return g.current = t, o(e - t.left)
        }
        return (0, u.jsx)(id, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, u.jsx)(cd, {
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
              const t = $u[b ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), ld = h.forwardRef(((e, t) => {
        const {
          min: n,
          max: r,
          inverted: o,
          onSlideStart: i,
          onSlideMove: a,
          onSlideEnd: s,
          onStepKeyDown: l,
          ...c
        } = e, d = h.useRef(null), f = (0, Iu.s)(t, d), p = h.useRef(void 0), m = !o;

        function g(e) {
          const t = p.current || d.current.getBoundingClientRect(),
            o = bd([0, t.height], m ? [r, n] : [n, r]);
          return p.current = t, o(e - t.top)
        }
        return (0, u.jsx)(id, {
          scope: e.__scopeSlider,
          startEdge: m ? "bottom" : "top",
          endEdge: m ? "top" : "bottom",
          size: "height",
          direction: m ? 1 : -1,
          children: (0, u.jsx)(cd, {
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
              const t = $u[m ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), cd = h.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: a,
          onEndKeyDown: s,
          onStepKeyDown: l,
          ...c
        } = e, d = rd(Yu, n);
        return (0, u.jsx)(Gu.sG.span, {
          ...c,
          ref: t,
          onKeyDown: Au(e.onKeyDown, (e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : Ku.concat(Wu).includes(e.key) && (l(e), e.preventDefault())
          })),
          onPointerDown: Au(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : r(e)
          })),
          onPointerMove: Au(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: Au(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          }))
        })
      })), ud = "SliderTrack", dd = h.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          ...r
        } = e, o = rd(ud, n);
        return (0, u.jsx)(Gu.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: t
        })
      }));
      dd.displayName = ud;
      var hd = "SliderRange",
        fd = h.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            ...r
          } = e, o = rd(hd, n), i = ad(hd, n), a = h.useRef(null), s = (0, Iu.s)(t, a), l = o.values.length, c = o.values.map((e => yd(e, o.min, o.max))), d = l > 1 ? Math.min(...c) : 0, f = 100 - Math.max(...c);
          return (0, u.jsx)(Gu.sG.span, {
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
      fd.displayName = hd;
      var pd = "SliderThumb",
        md = h.forwardRef(((e, t) => {
          const n = Qu(e.__scopeSlider),
            [r, o] = h.useState(null),
            i = (0, Iu.s)(t, (e => o(e))),
            a = h.useMemo((() => r ? n().findIndex((e => e.ref.current === r)) : -1), [n, r]);
          return (0, u.jsx)(gd, {
            ...e,
            ref: i,
            index: a
          })
        })),
        gd = h.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            index: r,
            name: o,
            ...i
          } = e, a = rd(pd, n), s = ad(pd, n), [l, c] = h.useState(null), d = (0, Iu.s)(t, (e => c(e))), f = !l || a.form || !!l.closest("form"), p = Uu(l), m = a.values[r], g = void 0 === m ? 0 : yd(m, a.min, a.max), v = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(r, a.values.length), y = p?.[s.size], b = y ? function(e, t, n) {
            const r = e / 2;
            return (r - bd([0, 50], [0, r])(t) * n) * n
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
            children: [(0, u.jsx)(Zu.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, u.jsx)(Gu.sG.span, {
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
                onFocus: Au(e.onFocus, (() => {
                  a.valueIndexToChangeRef.current = r
                }))
              })
            }), f && (0, u.jsx)(vd, {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: m
            }, r)]
          })
        }));
      md.displayName = pd;
      var vd = h.forwardRef((({
        __scopeSlider: e,
        value: t,
        ...n
      }, r) => {
        const o = h.useRef(null),
          i = (0, Iu.s)(o, r),
          a = zu(t);
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
        }), [a, t]), (0, u.jsx)(Gu.sG.input, {
          style: {
            display: "none"
          },
          ...n,
          ref: i,
          defaultValue: t
        })
      }));

      function yd(e, t, n) {
        return Ru(100 / (n - t) * (e - t), [0, 100])
      }

      function bd(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      vd.displayName = "RadioBubbleInput";
      var _d = od,
        wd = dd,
        xd = fd,
        Ed = md;
      const Pd = {
          id: "Lightbox_Close_Button_Label"
        },
        Sd = {
          id: "Lightbox_Close_Button_Tooltip"
        },
        Cd = {
          id: "Lightbox_Zoom_In_Button_Label"
        },
        Td = {
          id: "Lightbox_Zoom_In_Button_Tooltip"
        },
        Od = {
          id: "Lightbox_Zoom_Out_Button_Label"
        },
        Nd = {
          id: "Lightbox_Zoom_Out_Button__Tooltip"
        },
        jd = {
          id: "Lightbox_Reset_Zoom_Button_Label"
        },
        Ld = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip"
        },
        Rd = {
          id: "Lightbox_Zoom_Slider_Label"
        },
        Ad = {
          id: "Lightbox_Zoom_Slider_Tooltip"
        },
        Id = {
          id: "Lightbox_Download_Button_Label"
        },
        Dd = {
          id: "Lightbox_Download_Button_Tooltip"
        };

      function kd() {
        return kd = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, kd.apply(null, arguments)
      }
      var Md = ["shift", "alt", "meta", "mod", "ctrl"],
        Hd = {
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

      function Bd(e) {
        return (e && Hd[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Vd(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Fd(e, t, n) {
        void 0 === t && (t = "+");
        var r = e.toLocaleLowerCase().split(t).map((function(e) {
          return Bd(e)
        }));
        return kd({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter((function(e) {
            return !Md.includes(e)
          })),
          description: n,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && Gd([Bd(e.key), Bd(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && qd([Bd(e.key), Bd(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        zd.clear()
      }));
      var zd = new Set;

      function Ud(e) {
        return Array.isArray(e)
      }

      function Gd(e) {
        var t = Array.isArray(e) ? e : [e];
        zd.has("meta") && zd.forEach((function(e) {
          return ! function(e) {
            return Md.includes(e)
          }(e) && zd.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return zd.add(e.toLowerCase())
        }))
      }

      function qd(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? zd.clear() : t.forEach((function(e) {
          return zd.delete(e.toLowerCase())
        }))
      }

      function Xd(e, t) {
        void 0 === t && (t = !1);
        var n, r, o = e.target,
          i = e.composed;
        return r = (n = o).tagName && !n.tagName.startsWith("-") && n.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Ud(t) ? Boolean(r && t && t.some((function(e) {
          var t;
          return e.toLowerCase() === (null == (t = r) ? void 0 : t.toLowerCase())
        }))) : Boolean(r && t && t)
      }
      var Kd = (0, h.createContext)(void 0);

      function Wd(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          r = e.children;
        return (0, u.jsx)(Kd.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: n
          },
          children: r
        })
      }

      function $d(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(n, r) {
          return n && $d(e[r], t[r])
        }), !0) : e === t
      }
      var Yd = (0, h.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Zd = function(e) {
          var t = e.initiallyActiveScopes,
            n = void 0 === t ? ["*"] : t,
            r = e.children,
            o = (0, h.useState)((null == n ? void 0 : n.length) > 0 ? n : ["*"]),
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
                  return !$d(t, e)
                }))
              }))
            }), []);
          return (0, u.jsx)(Yd.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: d,
              disableScope: f,
              toggleScope: p
            },
            children: (0, u.jsx)(Wd, {
              addHotkey: m,
              removeHotkey: g,
              children: r
            })
          })
        },
        Qd = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Jd = "undefined" != typeof window ? h.useLayoutEffect : h.useEffect;

      function eh(e, t, n, r) {
        var o = (0, h.useState)(null),
          i = o[0],
          a = o[1],
          s = (0, h.useRef)(!1),
          l = n instanceof Array ? r instanceof Array ? void 0 : r : n,
          c = Ud(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = n instanceof Array ? n : r instanceof Array ? r : void 0,
          d = (0, h.useCallback)(t, null != u ? u : []),
          f = (0, h.useRef)(d);
        f.current = u ? d : t;
        var p = function(e) {
            var t = (0, h.useRef)(void 0);
            return $d(t.current, e) || (t.current = e), t.current
          }(l),
          m = (0, h.useContext)(Yd).enabledScopes,
          g = (0, h.useContext)(Kd);
        return Jd((function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = m, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !Xd(e, ["input", "textarea", "select"]) || Xd(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== i) {
                    var r = i.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== i && !i.contains(r.activeElement)) return void Qd(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != p && p.enableOnContentEditable) && Vd(c, null == p ? void 0 : p.splitKey).forEach((function(n) {
                    var r, o = Fd(n, null == p ? void 0 : p.combinationKey);
                    if (function(e, t, n) {
                        void 0 === n && (n = !1);
                        var r, o, i = t.alt,
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
                          v = Bd(h),
                          y = d.toLowerCase();
                        if (!(null != u && u.includes(v) || null != u && u.includes(y) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(v))) return !1;
                        if (!n) {
                          if (i === !g && "alt" !== y) return !1;
                          if (l === !m && "shift" !== y) return !1;
                          if (s) {
                            if (!p && !f) return !1
                          } else {
                            if (a === !p && "meta" !== y && "os" !== y) return !1;
                            if (c === !f && "ctrl" !== y && "control" !== y) return !1
                          }
                        }
                        return !(!u || 1 !== u.length || !u.includes(y) && !u.includes(v)) || (u ? (void 0 === o && (o = ","), (Ud(r = u) ? r : r.split(o)).every((function(e) {
                          return zd.has(e.trim().toLowerCase())
                        }))) : !u)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == p ? void 0 : p.enabled)) return void Qd(e);
                      f.current(e, o), t || (s.current = !0)
                    }
                  }))
                }
              },
              r = function(e) {
                void 0 !== e.key && (Gd(Bd(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && n(e))
              },
              o = function(e) {
                void 0 !== e.key && (qd(Bd(e.code)), s.current = !1, null != p && p.keyup && n(e, !0))
              },
              a = i || (null == l ? void 0 : l.document) || document;
            return a.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.addEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), g && Vd(c, null == p ? void 0 : p.splitKey).forEach((function(e) {
                return g.addHotkey(Fd(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              })),
              function() {
                a.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.removeEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), g && Vd(c, null == p ? void 0 : p.splitKey).forEach((function(e) {
                  return g.removeHotkey(Fd(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                }))
              }
          }
        }), [i, c, p, m]), a
      }

      function th(e) {
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

      function nh(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function rh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nh(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = th(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nh(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function oh(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var ih = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        ah = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = rh(rh({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ih(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return oh(e.variantClassNames, (e => oh(e, (e => e.split(" ")[0]))))
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
      const sh = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        lh = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          className: n,
          icon: r,
          label: o,
          appearance: i,
          fullWidth: a = !1,
          size: s = "MD",
          onClick: l,
          children: c,
          ...f
        }, p) => {
          const g = (0, h.useRef)(null),
            v = (0, z.UP)(g, p),
            y = (0, tn.zQ)(),
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
            } = en({
              ...w,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => w.onPress?.(e) ?? l?.(e)
            }, g),
            P = (0, d.v6)({
              ..._,
              role: "button",
              "data-pressed": E,
              "data-testid": e,
              className: ah({
                appearance: i,
                size: b,
                fullWidth: a
              })
            }, {
              ...x,
              className: n
            }),
            S = F[r],
            C = t ? m.DX : "button",
            T = sh[b];
          return (0, u.jsxs)(C, {
            ref: v,
            ...P,
            children: [S && (0, u.jsx)(S, {
              label: o || "",
              size: T
            }), (0, u.jsx)(m.xV, {
              children: c
            })]
          })
        })),
        ch = new Map;

      function uh(e, t) {
        if (e === t) return e;
        const n = ch.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = ch.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function dh(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      var hh;

      function fh(e) {
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

      function ph(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function mh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ph(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = fh(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ph(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function gh(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      n(7415), n(52953), n(87090), n(98097), n(76030), n(62670), n(54375),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(hh || (hh = {})), Symbol.toStringTag;
      var vh = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        yh = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = mh(mh({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) vh(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gh(e.variantClassNames, (e => gh(e, (e => e.split(" ")[0]))))
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
      const bh = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const a = e ? qu.DX : "p",
          s = function(...e) {
            const t = {
              ...e[0]
            };
            for (let n = 1; n < e.length; n++) {
              const r = e[n];
              for (const e in r) {
                const n = t[e],
                  o = r[e];
                "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = dh(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = uh(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, A.A)(n, o)
              }
            }
            return t
          }({
            className: yh({
              size: r,
              appearance: n
            })
          }, o);
        return (0, u.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      }));
      var _h = "foundry_local_bc732x1";
      const wh = (0, h.forwardRef)((({
        shortcut: e,
        isInline: t,
        onShortcut: n
      }, r) => (eh(e, (e => n?.(e)), [n]), (0, u.jsx)(bh, {
        size: "XS",
        className: (0, A.$)("foundry_local_bc732x0", {
          [_h]: t
        }),
        asChild: !0,
        children: (0, u.jsx)("kbd", {
          ref: r,
          children: e
        })
      }))));

      function xh(e) {
        const t = h.useRef(e);
        return h.useEffect((() => {
          t.current = e
        })), h.useMemo((() => (...e) => t.current?.(...e)), [])
      }
      var Eh, Ph = "dismissableLayer.update",
        Sh = h.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Ch = h.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: a,
            onDismiss: s,
            ...l
          } = e, c = h.useContext(Sh), [d, f] = h.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = h.useState({}), g = (0, Iu.s)(t, (e => f(e))), v = Array.from(c.layers), [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(y), _ = d ? v.indexOf(d) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, x = _ >= b, E = function(e, t = globalThis?.document) {
            const n = xh(e),
              r = h.useRef(!1),
              o = h.useRef((() => {}));
            return h.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      Oh("dismissableLayer.pointerDownOutside", n, i, {
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
              n = [...c.branches].some((e => e.contains(t)));
            x && !n && (o?.(e), a?.(e), e.defaultPrevented || s?.())
          }), p), P = function(e, t = globalThis?.document) {
            const n = xh(e),
              r = h.useRef(!1);
            return h.useEffect((() => {
              const e = e => {
                e.target && !r.current && Oh("dismissableLayer.focusOutside", n, {
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
            [...c.branches].some((e => e.contains(t))) || (i?.(e), a?.(e), e.defaultPrevented || s?.())
          }), p);
          return function(e, t = globalThis?.document) {
            const n = xh(e);
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
            _ === c.layers.size - 1 && (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()))
          }), p), h.useEffect((() => {
            if (d) return n && (0 === c.layersWithOutsidePointerEventsDisabled.size && (Eh = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), Th(), () => {
              n && 1 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = Eh)
            }
          }), [d, p, n, c]), h.useEffect((() => () => {
            d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), Th())
          }), [d, c]), h.useEffect((() => {
            const e = () => m({});
            return document.addEventListener(Ph, e), () => document.removeEventListener(Ph, e)
          }), []), (0, u.jsx)(Gu.sG.div, {
            ...l,
            ref: g,
            style: {
              pointerEvents: w ? x ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: Au(e.onFocusCapture, P.onFocusCapture),
            onBlurCapture: Au(e.onBlurCapture, P.onBlurCapture),
            onPointerDownCapture: Au(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        }));

      function Th() {
        const e = new CustomEvent(Ph);
        document.dispatchEvent(e)
      }

      function Oh(e, t, n, {
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
        }), r ? (0, Gu.hO)(o, i) : o.dispatchEvent(i)
      }
      Ch.displayName = "DismissableLayer", h.forwardRef(((e, t) => {
        const n = h.useContext(Sh),
          r = h.useRef(null),
          o = (0, Iu.s)(t, r);
        return h.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, u.jsx)(Gu.sG.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var Nh = f[" useId ".trim().toString()] || (() => {}),
        jh = 0;

      function Lh(e) {
        const [t, n] = h.useState(Nh());
        return Mu((() => {
          e || n((e => e ?? String(jh++)))
        }), [e]), e || (t ? `radix-${t}` : "")
      }
      const Rh = ["top", "right", "bottom", "left"],
        Ah = Math.min,
        Ih = Math.max,
        Dh = Math.round,
        kh = Math.floor,
        Mh = e => ({
          x: e,
          y: e
        }),
        Hh = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        Bh = {
          start: "end",
          end: "start"
        };

      function Vh(e, t, n) {
        return Ih(e, Ah(t, n))
      }

      function Fh(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function zh(e) {
        return e.split("-")[0]
      }

      function Uh(e) {
        return e.split("-")[1]
      }

      function Gh(e) {
        return "x" === e ? "y" : "x"
      }

      function qh(e) {
        return "y" === e ? "height" : "width"
      }

      function Xh(e) {
        return ["top", "bottom"].includes(zh(e)) ? "y" : "x"
      }

      function Kh(e) {
        return Gh(Xh(e))
      }

      function Wh(e) {
        return e.replace(/start|end/g, (e => Bh[e]))
      }

      function $h(e) {
        return e.replace(/left|right|bottom|top/g, (e => Hh[e]))
      }

      function Yh(e) {
        return "number" != typeof e ? function(e) {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
          }
        }(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        }
      }

      function Zh(e) {
        const {
          x: t,
          y: n,
          width: r,
          height: o
        } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n
        }
      }

      function Qh(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = Xh(t),
          a = Kh(t),
          s = qh(a),
          l = zh(t),
          c = "y" === i,
          u = r.x + r.width / 2 - o.width / 2,
          d = r.y + r.height / 2 - o.height / 2,
          h = r[s] / 2 - o[s] / 2;
        let f;
        switch (l) {
          case "top":
            f = {
              x: u,
              y: r.y - o.height
            };
            break;
          case "bottom":
            f = {
              x: u,
              y: r.y + r.height
            };
            break;
          case "right":
            f = {
              x: r.x + r.width,
              y: d
            };
            break;
          case "left":
            f = {
              x: r.x - o.width,
              y: d
            };
            break;
          default:
            f = {
              x: r.x,
              y: r.y
            }
        }
        switch (Uh(t)) {
          case "start":
            f[a] -= h * (n && c ? -1 : 1);
            break;
          case "end":
            f[a] += h * (n && c ? -1 : 1)
        }
        return f
      }
      async function Jh(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
          x: r,
          y: o,
          platform: i,
          rects: a,
          elements: s,
          strategy: l
        } = e, {
          boundary: c = "clippingAncestors",
          rootBoundary: u = "viewport",
          elementContext: d = "floating",
          altBoundary: h = !1,
          padding: f = 0
        } = Fh(t, e), p = Yh(f), m = s[h ? "floating" === d ? "reference" : "floating" : d], g = Zh(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(m))) || n ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(s.floating)),
          boundary: c,
          rootBoundary: u,
          strategy: l
        })), v = "floating" === d ? {
          x: r,
          y: o,
          width: a.floating.width,
          height: a.floating.height
        } : a.reference, y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(s.floating)), b = await (null == i.isElement ? void 0 : i.isElement(y)) && await (null == i.getScale ? void 0 : i.getScale(y)) || {
          x: 1,
          y: 1
        }, _ = Zh(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: s,
          rect: v,
          offsetParent: y,
          strategy: l
        }) : v);
        return {
          top: (g.top - _.top + p.top) / b.y,
          bottom: (_.bottom - g.bottom + p.bottom) / b.y,
          left: (g.left - _.left + p.left) / b.x,
          right: (_.right - g.right + p.right) / b.x
        }
      }

      function ef(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function tf(e) {
        return Rh.some((t => e[t] >= 0))
      }

      function nf() {
        return "undefined" != typeof window
      }

      function rf(e) {
        return sf(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function of(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function af(e) {
        var t;
        return null == (t = (sf(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function sf(e) {
        return !!nf() && (e instanceof Node || e instanceof of (e).Node)
      }

      function lf(e) {
        return !!nf() && (e instanceof Element || e instanceof of (e).Element)
      }

      function cf(e) {
        return !!nf() && (e instanceof HTMLElement || e instanceof of (e).HTMLElement)
      }

      function uf(e) {
        return !(!nf() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof of (e).ShadowRoot)
      }

      function df(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = vf(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
      }

      function hf(e) {
        return ["table", "td", "th"].includes(rf(e))
      }

      function ff(e) {
        return [":popover-open", ":modal"].some((t => {
          try {
            return e.matches(t)
          } catch (e) {
            return !1
          }
        }))
      }

      function pf(e) {
        const t = mf(),
          n = lf(e) ? vf(e) : e;
        return ["transform", "translate", "scale", "rotate", "perspective"].some((e => !!n[e] && "none" !== n[e])) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
      }

      function mf() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function gf(e) {
        return ["html", "body", "#document"].includes(rf(e))
      }

      function vf(e) {
        return of(e).getComputedStyle(e)
      }

      function yf(e) {
        return lf(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function bf(e) {
        if ("html" === rf(e)) return e;
        const t = e.assignedSlot || e.parentNode || uf(e) && e.host || af(e);
        return uf(t) ? t.host : t
      }

      function _f(e) {
        const t = bf(e);
        return gf(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : cf(t) && df(t) ? t : _f(t)
      }

      function wf(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = _f(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = of(o);
        if (i) {
          const e = xf(a);
          return t.concat(a, a.visualViewport || [], df(o) ? o : [], e && n ? wf(e) : [])
        }
        return t.concat(o, wf(o, [], n))
      }

      function xf(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function Ef(e) {
        const t = vf(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = cf(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          s = Dh(n) !== i || Dh(r) !== a;
        return s && (n = i, r = a), {
          width: n,
          height: r,
          $: s
        }
      }

      function Pf(e) {
        return lf(e) ? e : e.contextElement
      }

      function Sf(e) {
        const t = Pf(e);
        if (!cf(t)) return Mh(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = Ef(t);
        let a = (i ? Dh(n.width) : n.width) / r,
          s = (i ? Dh(n.height) : n.height) / o;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const Cf = Mh(0);

      function Tf(e) {
        const t = of(e);
        return mf() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : Cf
      }

      function Of(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = Pf(e);
        let a = Mh(1);
        t && (r ? lf(r) && (a = Sf(r)) : a = Sf(e));
        const s = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== of(e)) && t
        }(i, n, r) ? Tf(i) : Mh(0);
        let l = (o.left + s.x) / a.x,
          c = (o.top + s.y) / a.y,
          u = o.width / a.x,
          d = o.height / a.y;
        if (i) {
          const e = of(i),
            t = r && lf(r) ? of(r) : r;
          let n = e,
            o = xf(n);
          for (; o && r && t !== n;) {
            const e = Sf(o),
              t = o.getBoundingClientRect(),
              r = vf(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            l *= e.x, c *= e.y, u *= e.x, d *= e.y, l += i, c += a, n = of(o), o = xf(n)
          }
        }
        return Zh({
          width: u,
          height: d,
          x: l,
          y: c
        })
      }

      function Nf(e, t) {
        const n = yf(e).scrollLeft;
        return t ? t.left + n : Of(af(e)).left + n
      }

      function jf(e, t, n) {
        void 0 === n && (n = !1);
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : Nf(e, r)),
          y: r.top + t.scrollTop
        }
      }

      function Lf(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = of(e),
            r = af(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            a = r.clientHeight,
            s = 0,
            l = 0;
          if (o) {
            i = o.width, a = o.height;
            const e = mf();
            (!e || e && "fixed" === t) && (s = o.offsetLeft, l = o.offsetTop)
          }
          return {
            width: i,
            height: a,
            x: s,
            y: l
          }
        }(e, n);
        else if ("document" === t) r = function(e) {
          const t = af(e),
            n = yf(e),
            r = e.ownerDocument.body,
            o = Ih(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            i = Ih(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let a = -n.scrollLeft + Nf(e);
          const s = -n.scrollTop;
          return "rtl" === vf(r).direction && (a += Ih(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: a,
            y: s
          }
        }(af(e));
        else if (lf(t)) r = function(e, t) {
          const n = Of(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = cf(e) ? Sf(e) : Mh(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(t, n);
        else {
          const n = Tf(e);
          r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return Zh(r)
      }

      function Rf(e, t) {
        const n = bf(e);
        return !(n === t || !lf(n) || gf(n)) && ("fixed" === vf(n).position || Rf(n, t))
      }

      function Af(e, t, n) {
        const r = cf(t),
          o = af(t),
          i = "fixed" === n,
          a = Of(e, !0, i, t);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = Mh(0);
        if (r || !r && !i)
          if (("body" !== rf(t) || df(o)) && (s = yf(t)), r) {
            const e = Of(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && (l.x = Nf(o));
        const c = !o || r || i ? Mh(0) : jf(o, s);
        return {
          x: a.left + s.scrollLeft - l.x - c.x,
          y: a.top + s.scrollTop - l.y - c.y,
          width: a.width,
          height: a.height
        }
      }

      function If(e) {
        return "static" === vf(e).position
      }

      function Df(e, t) {
        if (!cf(e) || "fixed" === vf(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return af(e) === n && (n = n.ownerDocument.body), n
      }

      function kf(e, t) {
        const n = of(e);
        if (ff(e)) return n;
        if (!cf(e)) {
          let t = bf(e);
          for (; t && !gf(t);) {
            if (lf(t) && !If(t)) return t;
            t = bf(t)
          }
          return n
        }
        let r = Df(e, t);
        for (; r && hf(r) && If(r);) r = Df(r, t);
        return r && gf(r) && If(r) && !pf(r) ? n : r || function(e) {
          let t = bf(e);
          for (; cf(t) && !gf(t);) {
            if (pf(t)) return t;
            if (ff(t)) return null;
            t = bf(t)
          }
          return null
        }(e) || n
      }
      const Mf = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
          } = e;
          const i = "fixed" === o,
            a = af(r),
            s = !!t && ff(t.floating);
          if (r === a || s && i) return n;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            c = Mh(1);
          const u = Mh(0),
            d = cf(r);
          if ((d || !d && !i) && (("body" !== rf(r) || df(a)) && (l = yf(r)), cf(r))) {
            const e = Of(r);
            c = Sf(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop
          }
          const h = !a || d || i ? Mh(0) : jf(a, l, !0);
          return {
            width: n.width * c.x,
            height: n.height * c.y,
            x: n.x * c.x - l.scrollLeft * c.x + u.x + h.x,
            y: n.y * c.y - l.scrollTop * c.y + u.y + h.y
          }
        },
        getDocumentElement: af,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === n ? ff(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = wf(e, [], !1).filter((e => lf(e) && "body" !== rf(e))),
                o = null;
              const i = "fixed" === vf(e).position;
              let a = i ? bf(e) : e;
              for (; lf(a) && !gf(a);) {
                const t = vf(a),
                  n = pf(a);
                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || df(a) && !n && Rf(e, a)) ? r = r.filter((e => e !== a)) : o = t, a = bf(a)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            a = i[0],
            s = i.reduce(((e, n) => {
              const r = Lf(t, n, o);
              return e.top = Ih(r.top, e.top), e.right = Ah(r.right, e.right), e.bottom = Ah(r.bottom, e.bottom), e.left = Ih(r.left, e.left), e
            }), Lf(t, a, o));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
          }
        },
        getOffsetParent: kf,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || kf,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: Af(e.reference, await t(e.floating), e.strategy),
            floating: {
              x: 0,
              y: 0,
              width: r.width,
              height: r.height
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          const {
            width: t,
            height: n
          } = Ef(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: Sf,
        isElement: lf,
        isRTL: function(e) {
          return "rtl" === vf(e).direction
        }
      };

      function Hf(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const Bf = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
              var n, r;
              const {
                x: o,
                y: i,
                placement: a,
                middlewareData: s
              } = t, l = await async function(e, t) {
                const {
                  placement: n,
                  platform: r,
                  elements: o
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = zh(n), s = Uh(n), l = "y" === Xh(n), c = ["left", "top"].includes(a) ? -1 : 1, u = i && l ? -1 : 1, d = Fh(t, e);
                let {
                  mainAxis: h,
                  crossAxis: f,
                  alignmentAxis: p
                } = "number" == typeof d ? {
                  mainAxis: d,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: d.mainAxis || 0,
                  crossAxis: d.crossAxis || 0,
                  alignmentAxis: d.alignmentAxis
                };
                return s && "number" == typeof p && (f = "end" === s ? -1 * p : p), l ? {
                  x: f * u,
                  y: h * c
                } : {
                  x: h * c,
                  y: f * u
                }
              }(t, e);
              return a === (null == (n = s.offset) ? void 0 : n.placement) && null != (r = s.arrow) && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: i + l.y,
                data: {
                  ...l,
                  placement: a
                }
              }
            }
          }
        },
        Vf = function(e) {
          return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
              const {
                x: n,
                y: r,
                placement: o
              } = t, {
                mainAxis: i = !0,
                crossAxis: a = !1,
                limiter: s = {
                  fn: e => {
                    let {
                      x: t,
                      y: n
                    } = e;
                    return {
                      x: t,
                      y: n
                    }
                  }
                },
                ...l
              } = Fh(e, t), c = {
                x: n,
                y: r
              }, u = await Jh(t, l), d = Xh(zh(o)), h = Gh(d);
              let f = c[h],
                p = c[d];
              if (i) {
                const e = "y" === h ? "bottom" : "right";
                f = Vh(f + u["y" === h ? "top" : "left"], f, f - u[e])
              }
              if (a) {
                const e = "y" === d ? "bottom" : "right";
                p = Vh(p + u["y" === d ? "top" : "left"], p, p - u[e])
              }
              const m = s.fn({
                ...t,
                [h]: f,
                [d]: p
              });
              return {
                ...m,
                data: {
                  x: m.x - n,
                  y: m.y - r,
                  enabled: {
                    [h]: i,
                    [d]: a
                  }
                }
              }
            }
          }
        },
        Ff = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var n, r;
              const {
                placement: o,
                middlewareData: i,
                rects: a,
                initialPlacement: s,
                platform: l,
                elements: c
              } = t, {
                mainAxis: u = !0,
                crossAxis: d = !0,
                fallbackPlacements: h,
                fallbackStrategy: f = "bestFit",
                fallbackAxisSideDirection: p = "none",
                flipAlignment: m = !0,
                ...g
              } = Fh(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const v = zh(o),
                y = Xh(s),
                b = zh(s) === s,
                _ = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                w = h || (b || !m ? [$h(s)] : function(e) {
                  const t = $h(e);
                  return [Wh(e), t, Wh(t)]
                }(s)),
                x = "none" !== p;
              !h && x && w.push(... function(e, t, n, r) {
                const o = Uh(e);
                let i = function(e, t, n) {
                  const r = ["left", "right"],
                    o = ["right", "left"],
                    i = ["top", "bottom"],
                    a = ["bottom", "top"];
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? t ? o : r : t ? r : o;
                    case "left":
                    case "right":
                      return t ? i : a;
                    default:
                      return []
                  }
                }(zh(e), "start" === n, r);
                return o && (i = i.map((e => e + "-" + o)), t && (i = i.concat(i.map(Wh)))), i
              }(s, m, p, _));
              const E = [s, ...w],
                P = await Jh(t, g),
                S = [];
              let C = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (u && S.push(P[v]), d) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = Uh(e),
                    o = Kh(e),
                    i = qh(o);
                  let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (a = $h(a)), [a, $h(a)]
                }(o, a, _);
                S.push(P[e[0]], P[e[1]])
              }
              if (C = [...C, {
                  placement: o,
                  overflows: S
                }], !S.every((e => e <= 0))) {
                var T, O;
                const e = ((null == (T = i.flip) ? void 0 : T.index) || 0) + 1,
                  t = E[e];
                if (t) return {
                  data: {
                    index: e,
                    overflows: C
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (O = C.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : O.placement;
                if (!n) switch (f) {
                  case "bestFit": {
                    var N;
                    const e = null == (N = C.filter((e => {
                      if (x) {
                        const t = Xh(e.placement);
                        return t === y || "y" === t
                      }
                      return !0
                    })).map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : N[0];
                    e && (n = e);
                    break
                  }
                  case "initialPlacement":
                    n = s
                }
                if (o !== n) return {
                  reset: {
                    placement: n
                  }
                }
              }
              return {}
            }
          }
        },
        zf = function(e) {
          return void 0 === e && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
              var n, r;
              const {
                placement: o,
                rects: i,
                platform: a,
                elements: s
              } = t, {
                apply: l = () => {},
                ...c
              } = Fh(e, t), u = await Jh(t, c), d = zh(o), h = Uh(o), f = "y" === Xh(o), {
                width: p,
                height: m
              } = i.floating;
              let g, v;
              "top" === d || "bottom" === d ? (g = d, v = h === (await (null == a.isRTL ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (v = d, g = "end" === h ? "top" : "bottom");
              const y = m - u.top - u.bottom,
                b = p - u.left - u.right,
                _ = Ah(m - u[g], y),
                w = Ah(p - u[v], b),
                x = !t.middlewareData.shift;
              let E = _,
                P = w;
              if (null != (n = t.middlewareData.shift) && n.enabled.x && (P = b), null != (r = t.middlewareData.shift) && r.enabled.y && (E = y), x && !h) {
                const e = Ih(u.left, 0),
                  t = Ih(u.right, 0),
                  n = Ih(u.top, 0),
                  r = Ih(u.bottom, 0);
                f ? P = p - 2 * (0 !== e || 0 !== t ? e + t : Ih(u.left, u.right)) : E = m - 2 * (0 !== n || 0 !== r ? n + r : Ih(u.top, u.bottom))
              }
              await l({
                ...t,
                availableWidth: P,
                availableHeight: E
              });
              const S = await a.getDimensions(s.floating);
              return p !== S.width || m !== S.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        Uf = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: n
              } = t, {
                strategy: r = "referenceHidden",
                ...o
              } = Fh(e, t);
              switch (r) {
                case "referenceHidden": {
                  const e = ef(await Jh(t, {
                    ...o,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: tf(e)
                    }
                  }
                }
                case "escaped": {
                  const e = ef(await Jh(t, {
                    ...o,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: tf(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        Gf = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: n,
              y: r,
              placement: o,
              rects: i,
              platform: a,
              elements: s,
              middlewareData: l
            } = t, {
              element: c,
              padding: u = 0
            } = Fh(e, t) || {};
            if (null == c) return {};
            const d = Yh(u),
              h = {
                x: n,
                y: r
              },
              f = Kh(o),
              p = qh(f),
              m = await a.getDimensions(c),
              g = "y" === f,
              v = g ? "top" : "left",
              y = g ? "bottom" : "right",
              b = g ? "clientHeight" : "clientWidth",
              _ = i.reference[p] + i.reference[f] - h[f] - i.floating[p],
              w = h[f] - i.reference[f],
              x = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(c));
            let E = x ? x[b] : 0;
            E && await (null == a.isElement ? void 0 : a.isElement(x)) || (E = s.floating[b] || i.floating[p]);
            const P = _ / 2 - w / 2,
              S = E / 2 - m[p] / 2 - 1,
              C = Ah(d[v], S),
              T = Ah(d[y], S),
              O = C,
              N = E - m[p] - T,
              j = E / 2 - m[p] / 2 + P,
              L = Vh(O, j, N),
              R = !l.arrow && null != Uh(o) && j !== L && i.reference[p] / 2 - (j < O ? C : T) - m[p] / 2 < 0,
              A = R ? j < O ? j - O : j - N : 0;
            return {
              [f]: h[f] + A,
              data: {
                [f]: L,
                centerOffset: j - L - A,
                ...R && {
                  alignmentOffset: A
                }
              },
              reset: R
            }
          }
        }),
        qf = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                middlewareData: a
              } = t, {
                offset: s = 0,
                mainAxis: l = !0,
                crossAxis: c = !0
              } = Fh(e, t), u = {
                x: n,
                y: r
              }, d = Xh(o), h = Gh(d);
              let f = u[h],
                p = u[d];
              const m = Fh(s, t),
                g = "number" == typeof m ? {
                  mainAxis: m,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...m
                };
              if (l) {
                const e = "y" === h ? "height" : "width",
                  t = i.reference[h] - i.floating[e] + g.mainAxis,
                  n = i.reference[h] + i.reference[e] - g.mainAxis;
                f < t ? f = t : f > n && (f = n)
              }
              if (c) {
                var v, y;
                const e = "y" === h ? "width" : "height",
                  t = ["top", "left"].includes(zh(o)),
                  n = i.reference[d] - i.floating[e] + (t && (null == (v = a.offset) ? void 0 : v[d]) || 0) + (t ? 0 : g.crossAxis),
                  r = i.reference[d] + i.reference[e] + (t ? 0 : (null == (y = a.offset) ? void 0 : y[d]) || 0) - (t ? g.crossAxis : 0);
                p < n ? p = n : p > r && (p = r)
              }
              return {
                [h]: f,
                [d]: p
              }
            }
          }
        },
        Xf = (e, t, n) => {
          const r = new Map,
            o = {
              platform: Mf,
              ...n
            },
            i = {
              ...o.platform,
              _c: r
            };
          return (async (e, t, n) => {
            const {
              placement: r = "bottom",
              strategy: o = "absolute",
              middleware: i = [],
              platform: a
            } = n, s = i.filter(Boolean), l = await (null == a.isRTL ? void 0 : a.isRTL(t));
            let c = await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: u,
                y: d
              } = Qh(c, r, l),
              h = r,
              f = {},
              p = 0;
            for (let n = 0; n < s.length; n++) {
              const {
                name: i,
                fn: m
              } = s[n], {
                x: g,
                y: v,
                data: y,
                reset: b
              } = await m({
                x: u,
                y: d,
                initialPlacement: r,
                placement: h,
                strategy: o,
                middlewareData: f,
                rects: c,
                platform: a,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              u = null != g ? g : u, d = null != v ? v : d, f = {
                ...f,
                [i]: {
                  ...f[i],
                  ...y
                }
              }, b && p <= 50 && (p++, "object" == typeof b && (b.placement && (h = b.placement), b.rects && (c = !0 === b.rects ? await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : b.rects), ({
                x: u,
                y: d
              } = Qh(c, h, l))), n = -1)
            }
            return {
              x: u,
              y: d,
              placement: h,
              strategy: o,
              middlewareData: f
            }
          })(e, t, {
            ...o,
            platform: i
          })
        };
      var Kf = "undefined" != typeof document ? h.useLayoutEffect : h.useEffect;

      function Wf(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 != r--;)
              if (!Wf(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || Wf(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function $f(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Yf(e, t) {
        const n = $f(e);
        return Math.round(t * n) / n
      }

      function Zf(e) {
        const t = h.useRef(e);
        return Kf((() => {
          t.current = e
        })), t
      }
      const Qf = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: n,
              padding: r
            } = "function" == typeof e ? e(t) : e;
            return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? Gf({
              element: n.current,
              padding: r
            }).fn(t) : {} : n ? Gf({
              element: n,
              padding: r
            }).fn(t) : {};
            var o
          }
        }),
        Jf = (e, t) => ({
          ...Vf(e),
          options: [e, t]
        }),
        ep = (e, t) => ({
          ...qf(e),
          options: [e, t]
        }),
        tp = (e, t) => ({
          ...Ff(e),
          options: [e, t]
        }),
        np = (e, t) => ({
          ...zf(e),
          options: [e, t]
        }),
        rp = (e, t) => ({
          ...Uf(e),
          options: [e, t]
        }),
        op = (e, t) => ({
          ...Qf(e),
          options: [e, t]
        });
      var ip = h.forwardRef(((e, t) => {
        const {
          children: n,
          width: r = 10,
          height: o = 5,
          ...i
        } = e;
        return (0, u.jsx)(Gu.sG.svg, {
          ...i,
          ref: t,
          width: r,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild ? n : (0, u.jsx)("polygon", {
            points: "0,0 30,0 15,10"
          })
        })
      }));
      ip.displayName = "Arrow";
      var ap = ip,
        sp = "Popper",
        [lp, cp] = Du(sp),
        [up, dp] = lp(sp),
        hp = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [r, o] = h.useState(null);
          return (0, u.jsx)(up, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
          })
        };
      hp.displayName = sp;
      var fp = "PopperAnchor",
        pp = h.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: r,
            ...o
          } = e, i = dp(fp, n), a = h.useRef(null), s = (0, Iu.s)(t, a);
          return h.useEffect((() => {
            i.onAnchorChange(r?.current || a.current)
          })), r ? null : (0, u.jsx)(Gu.sG.div, {
            ...o,
            ref: s
          })
        }));
      pp.displayName = fp;
      var mp = "PopperContent",
        [gp, vp] = lp(mp),
        yp = h.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            side: r = "bottom",
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
          } = e, y = dp(mp, n), [b, _] = h.useState(null), w = (0, Iu.s)(t, (e => _(e))), [x, E] = h.useState(null), P = Uu(x), S = P?.width ?? 0, C = P?.height ?? 0, T = r + ("center" !== i ? "-" + i : ""), O = "number" == typeof d ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
          }, N = Array.isArray(c) ? c : [c], j = N.length > 0, L = {
            padding: O,
            boundary: N.filter(xp),
            altBoundary: j
          }, {
            refs: R,
            floatingStyles: A,
            placement: I,
            isPositioned: D,
            middlewareData: k
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
              open: c
            } = e, [u, d] = h.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, p] = h.useState(r);
            Wf(f, r) || p(r);
            const [m, g] = h.useState(null), [v, y] = h.useState(null), b = h.useCallback((e => {
              e !== E.current && (E.current = e, g(e))
            }), []), _ = h.useCallback((e => {
              e !== P.current && (P.current = e, y(e))
            }), []), w = i || m, x = a || v, E = h.useRef(null), P = h.useRef(null), S = h.useRef(u), C = null != l, T = Zf(l), O = Zf(o), N = Zf(c), j = h.useCallback((() => {
              if (!E.current || !P.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: f
              };
              O.current && (e.platform = O.current), Xf(E.current, P.current, e).then((e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== N.current
                };
                L.current && !Wf(S.current, t) && (S.current = t, Ut.flushSync((() => {
                  d(t)
                })))
              }))
            }), [f, t, n, O, N]);
            Kf((() => {
              !1 === c && S.current.isPositioned && (S.current.isPositioned = !1, d((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [c]);
            const L = h.useRef(!1);
            Kf((() => (L.current = !0, () => {
              L.current = !1
            })), []), Kf((() => {
              if (w && (E.current = w), x && (P.current = x), w && x) {
                if (T.current) return T.current(w, x, j);
                j()
              }
            }), [w, x, j, T, C]);
            const R = h.useMemo((() => ({
                reference: E,
                floating: P,
                setReference: b,
                setFloating: _
              })), [b, _]),
              A = h.useMemo((() => ({
                reference: w,
                floating: x
              })), [w, x]),
              I = h.useMemo((() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!A.floating) return e;
                const t = Yf(A.floating, u.x),
                  r = Yf(A.floating, u.y);
                return s ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...$f(A.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }), [n, s, A.floating, u.x, u.y]);
            return h.useMemo((() => ({
              ...u,
              update: j,
              refs: R,
              elements: A,
              floatingStyles: I
            })), [u, j, R, A, I])
          }({
            strategy: "fixed",
            placement: T,
            whileElementsMounted: (...e) => function(e, t, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: i = !0,
                elementResize: a = "function" == typeof ResizeObserver,
                layoutShift: s = "function" == typeof IntersectionObserver,
                animationFrame: l = !1
              } = r, c = Pf(e), u = o || i ? [...c ? wf(c) : [], ...wf(t)] : [];
              u.forEach((e => {
                o && e.addEventListener("scroll", n, {
                  passive: !0
                }), i && e.addEventListener("resize", n)
              }));
              const d = c && s ? function(e, t) {
                let n, r = null;
                const o = af(e);

                function i() {
                  var e;
                  clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                }
                return function a(s, l) {
                  void 0 === s && (s = !1), void 0 === l && (l = 1), i();
                  const c = e.getBoundingClientRect(),
                    {
                      left: u,
                      top: d,
                      width: h,
                      height: f
                    } = c;
                  if (s || t(), !h || !f) return;
                  const p = {
                    rootMargin: -kh(d) + "px " + -kh(o.clientWidth - (u + h)) + "px " + -kh(o.clientHeight - (d + f)) + "px " + -kh(u) + "px",
                    threshold: Ih(0, Ah(1, l)) || 1
                  };
                  let m = !0;

                  function g(t) {
                    const r = t[0].intersectionRatio;
                    if (r !== l) {
                      if (!m) return a();
                      r ? a(!1, r) : n = setTimeout((() => {
                        a(!1, 1e-7)
                      }), 1e3)
                    }
                    1 !== r || Hf(c, e.getBoundingClientRect()) || a(), m = !1
                  }
                  try {
                    r = new IntersectionObserver(g, {
                      ...p,
                      root: o.ownerDocument
                    })
                  } catch (e) {
                    r = new IntersectionObserver(g, p)
                  }
                  r.observe(e)
                }(!0), i
              }(c, n) : null;
              let h, f = -1,
                p = null;
              a && (p = new ResizeObserver((e => {
                let [r] = e;
                r && r.target === c && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame((() => {
                  var e;
                  null == (e = p) || e.observe(t)
                }))), n()
              })), c && !l && p.observe(c), p.observe(t));
              let m = l ? Of(e) : null;
              return l && function t() {
                const r = Of(e);
                m && !Hf(m, r) && n(), m = r, h = requestAnimationFrame(t)
              }(), n(), () => {
                var e;
                u.forEach((e => {
                  o && e.removeEventListener("scroll", n), i && e.removeEventListener("resize", n)
                })), null == d || d(), null == (e = p) || e.disconnect(), p = null, l && cancelAnimationFrame(h)
              }
            }(...e, {
              animationFrame: "always" === m
            }),
            elements: {
              reference: y.anchor
            },
            middleware: [(M = {
              mainAxis: o + C,
              alignmentAxis: a
            }, {
              ...Bf(M),
              options: [M, undefined]
            }), l && Jf({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === f ? ep() : void 0,
              ...L
            }), l && tp({
              ...L
            }), np({
              ...L,
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
            }), x && op({
              element: x,
              padding: s
            }), Ep({
              arrowWidth: S,
              arrowHeight: C
            }), p && rp({
              strategy: "referenceHidden",
              ...L
            })]
          });
          var M;
          const [H, B] = Pp(I), V = xh(g);
          Mu((() => {
            D && V?.()
          }), [D, V]);
          const F = k.arrow?.x,
            z = k.arrow?.y,
            U = 0 !== k.arrow?.centerOffset,
            [G, q] = h.useState();
          return Mu((() => {
            b && q(window.getComputedStyle(b).zIndex)
          }), [b]), (0, u.jsx)("div", {
            ref: R.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...A,
              transform: D ? A.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: G,
              "--radix-popper-transform-origin": [k.transformOrigin?.x, k.transformOrigin?.y].join(" "),
              ...k.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, u.jsx)(gp, {
              scope: n,
              placedSide: H,
              onArrowChange: E,
              arrowX: F,
              arrowY: z,
              shouldHideArrow: U,
              children: (0, u.jsx)(Gu.sG.div, {
                "data-side": H,
                "data-align": B,
                ...v,
                ref: w,
                style: {
                  ...v.style,
                  animation: D ? void 0 : "none"
                }
              })
            })
          })
        }));
      yp.displayName = mp;
      var bp = "PopperArrow",
        _p = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        wp = h.forwardRef((function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = vp(bp, n), i = _p[o.placedSide];
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
            children: (0, u.jsx)(ap, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        }));

      function xp(e) {
        return null !== e
      }
      wp.displayName = bp;
      var Ep = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [l, c] = Pp(n), u = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [c], d = (o.arrow?.x ?? 0) + a / 2, h = (o.arrow?.y ?? 0) + s / 2;
          let f = "",
            p = "";
          return "bottom" === l ? (f = i ? u : `${d}px`, p = -s + "px") : "top" === l ? (f = i ? u : `${d}px`, p = `${r.floating.height+s}px`) : "right" === l ? (f = -s + "px", p = i ? u : `${h}px`) : "left" === l && (f = `${r.floating.width+s}px`, p = i ? u : `${h}px`), {
            data: {
              x: f,
              y: p
            }
          }
        }
      });

      function Pp(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var Sp = hp,
        Cp = pp,
        Tp = yp,
        Op = wp,
        Np = h.forwardRef(((e, t) => {
          const {
            container: n,
            ...r
          } = e, [o, i] = h.useState(!1);
          Mu((() => i(!0)), []);
          const a = n || o && globalThis?.document?.body;
          return a ? Ut.createPortal((0, u.jsx)(Gu.sG.div, {
            ...r,
            ref: t
          }), a) : null
        }));
      Np.displayName = "Portal";
      var jp = e => {
        const {
          present: t,
          children: n
        } = e, r = function(e) {
          const [t, n] = h.useState(), r = h.useRef(null), o = h.useRef(e), i = h.useRef("none"), a = e ? "mounted" : "unmounted", [s, l] = function(e, t) {
            return h.useReducer(((e, n) => t[e][n] ?? e), e)
          }(a, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
              MOUNT: "mounted",
              ANIMATION_END: "unmounted"
            },
            unmounted: {
              MOUNT: "mounted"
            }
          });
          return h.useEffect((() => {
            const e = Lp(r.current);
            i.current = "mounted" === s ? e : "none"
          }), [s]), Mu((() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                a = Lp(t);
              l(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : n && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, l]), Mu((() => {
            if (t) {
              let e;
              const n = t.ownerDocument.defaultView ?? window,
                a = i => {
                  const a = Lp(r.current).includes(i.animationName);
                  if (i.target === t && a && (l("ANIMATION_END"), !o.current)) {
                    const r = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = n.setTimeout((() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                    }))
                  }
                },
                s = e => {
                  e.target === t && (i.current = Lp(r.current))
                };
              return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", a), t.addEventListener("animationend", a), () => {
                n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", a), t.removeEventListener("animationend", a)
              }
            }
            l("ANIMATION_END")
          }), [t, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(s),
            ref: h.useCallback((e => {
              r.current = e ? getComputedStyle(e) : null, n(e)
            }), [])
          }
        }(t), o = "function" == typeof n ? n({
          present: r.isPresent
        }) : h.Children.only(n), i = (0, Iu.s)(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? h.cloneElement(o, {
          ref: i
        }) : null
      };

      function Lp(e) {
        return e?.animationName || "none"
      }
      jp.displayName = "Presence";
      var Rp = n(18628),
        [Ap, Ip] = Du("Tooltip", [cp]),
        Dp = cp(),
        kp = "TooltipProvider",
        Mp = 700,
        Hp = "tooltip.open",
        [Bp, Vp] = Ap(kp),
        Fp = e => {
          const {
            __scopeTooltip: t,
            delayDuration: n = Mp,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, a = h.useRef(!0), s = h.useRef(!1), l = h.useRef(0);
          return h.useEffect((() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }), []), (0, u.jsx)(Bp, {
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
      Fp.displayName = kp;
      var zp = "Tooltip",
        [Up, Gp] = Ap(zp),
        qp = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: a,
            delayDuration: s
          } = e, l = Vp(zp, e.__scopeTooltip), c = Dp(t), [d, f] = h.useState(null), p = Lh(), m = h.useRef(0), g = a ?? l.disableHoverableContent, v = s ?? l.delayDuration, y = h.useRef(!1), [b, _] = Bu({
            prop: r,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Hp))) : l.onClose(), i?.(e)
            },
            caller: zp
          }), w = h.useMemo((() => b ? y.current ? "delayed-open" : "instant-open" : "closed"), [b]), x = h.useCallback((() => {
            window.clearTimeout(m.current), m.current = 0, y.current = !1, _(!0)
          }), [_]), E = h.useCallback((() => {
            window.clearTimeout(m.current), m.current = 0, _(!1)
          }), [_]), P = h.useCallback((() => {
            window.clearTimeout(m.current), m.current = window.setTimeout((() => {
              y.current = !0, _(!0), m.current = 0
            }), v)
          }), [v, _]);
          return h.useEffect((() => () => {
            m.current && (window.clearTimeout(m.current), m.current = 0)
          }), []), (0, u.jsx)(Sp, {
            ...c,
            children: (0, u.jsx)(Up, {
              scope: t,
              contentId: p,
              open: b,
              stateAttribute: w,
              trigger: d,
              onTriggerChange: f,
              onTriggerEnter: h.useCallback((() => {
                l.isOpenDelayedRef.current ? P() : x()
              }), [l.isOpenDelayedRef, P, x]),
              onTriggerLeave: h.useCallback((() => {
                g ? E() : (window.clearTimeout(m.current), m.current = 0)
              }), [E, g]),
              onOpen: x,
              onClose: E,
              disableHoverableContent: g,
              children: n
            })
          })
        };
      qp.displayName = zp;
      var Xp = "TooltipTrigger",
        Kp = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Gp(Xp, n), i = Vp(Xp, n), a = Dp(n), s = h.useRef(null), l = (0, Iu.s)(t, s, o.onTriggerChange), c = h.useRef(!1), d = h.useRef(!1), f = h.useCallback((() => c.current = !1), []);
          return h.useEffect((() => () => document.removeEventListener("pointerup", f)), [f]), (0, u.jsx)(Cp, {
            asChild: !0,
            ...a,
            children: (0, u.jsx)(Gu.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...r,
              ref: l,
              onPointerMove: Au(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (d.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), d.current = !0))
              })),
              onPointerLeave: Au(e.onPointerLeave, (() => {
                o.onTriggerLeave(), d.current = !1
              })),
              onPointerDown: Au(e.onPointerDown, (() => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", f, {
                  once: !0
                })
              })),
              onFocus: Au(e.onFocus, (() => {
                c.current || o.onOpen()
              })),
              onBlur: Au(e.onBlur, o.onClose),
              onClick: Au(e.onClick, o.onClose)
            })
          })
        }));
      Kp.displayName = Xp;
      var Wp = "TooltipPortal",
        [$p, Yp] = Ap(Wp, {
          forceMount: void 0
        }),
        Zp = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = Gp(Wp, t);
          return (0, u.jsx)($p, {
            scope: t,
            forceMount: n,
            children: (0, u.jsx)(jp, {
              present: n || i.open,
              children: (0, u.jsx)(Np, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      Zp.displayName = Wp;
      var Qp = "TooltipContent",
        Jp = h.forwardRef(((e, t) => {
          const n = Yp(Qp, e.__scopeTooltip),
            {
              forceMount: r = n.forceMount,
              side: o = "top",
              ...i
            } = e,
            a = Gp(Qp, e.__scopeTooltip);
          return (0, u.jsx)(jp, {
            present: r || a.open,
            children: a.disableHoverableContent ? (0, u.jsx)(om, {
              side: o,
              ...i,
              ref: t
            }) : (0, u.jsx)(em, {
              side: o,
              ...i,
              ref: t
            })
          })
        })),
        em = h.forwardRef(((e, t) => {
          const n = Gp(Qp, e.__scopeTooltip),
            r = Vp(Qp, e.__scopeTooltip),
            o = h.useRef(null),
            i = (0, Iu.s)(t, o),
            [a, s] = h.useState(null),
            {
              trigger: l,
              onClose: c
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
                        c = a.y,
                        u = s.x,
                        d = s.y;
                      c > r != d > r && n < (u - l) * (r - c) / (d - c) + l && (o = !o)
                    }
                    return o
                  }(n, a);
                r ? p() : o && (p(), c())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }), [l, d, a, c, p]), (0, u.jsx)(om, {
            ...e,
            ref: i
          })
        })),
        [tm, nm] = Ap(zp, {
          isInside: !1
        }),
        rm = (0, qu.Dc)("TooltipContent"),
        om = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            ...s
          } = e, l = Gp(Qp, n), c = Dp(n), {
            onClose: d
          } = l;
          return h.useEffect((() => (document.addEventListener(Hp, d), () => document.removeEventListener(Hp, d))), [d]), h.useEffect((() => {
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
          }), [l.trigger, d]), (0, u.jsx)(Ch, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: d,
            children: (0, u.jsxs)(Tp, {
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
              children: [(0, u.jsx)(rm, {
                children: r
              }), (0, u.jsx)(tm, {
                scope: n,
                isInside: !0,
                children: (0, u.jsx)(Rp.bL, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || r
                })
              })]
            })
          })
        }));
      Jp.displayName = Qp;
      var im = "TooltipArrow",
        am = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Dp(n);
          return nm(im, n).isInside ? null : (0, u.jsx)(Op, {
            ...o,
            ...r,
            ref: t
          })
        }));
      am.displayName = im;
      var sm = Fp,
        lm = qp,
        cm = Kp,
        um = Zp,
        dm = Jp,
        hm = am;
      const fm = ({
        content: e,
        children: t,
        side: n = "top",
        sideOffset: r = 8,
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
        const [E = !1, P] = (0, z.ic)({
          defaultProp: m,
          prop: g,
          onChange: v
        }), S = (0, z.ZC)(E), C = ka({
          opacity: E ? 1 : 0,
          immediate: E && !S
        }), T = "left" === n || "right" === n ? "center" : o, O = b ? {
          container: w
        } : {}, N = b ? um : h.Fragment, j = _ ? {
          className: "foundry_hcgxh_h3lgaa2"
        } : {}, L = _ ? hm : h.Fragment;
        return (0, u.jsx)(sm, {
          delayDuration: y,
          children: (0, u.jsxs)(lm, {
            open: E,
            onOpenChange: P,
            children: [(0, u.jsx)(cm, {
              asChild: !0,
              className: "foundry_hcgxh_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, u.jsx)(N, {
              ...O,
              children: (0, u.jsx)(dm, {
                side: n,
                align: T,
                sticky: c,
                forceMount: !0,
                "aria-label": p,
                "data-testid": x,
                sideOffset: r,
                alignOffset: i,
                onEscapeKeyDown: d,
                avoidCollisions: a,
                collisionPadding: l,
                collisionBoundary: s,
                onPointerDownOutside: f,
                children: (0, u.jsxs)(rs.div, {
                  className: "foundry_hcgxh_h3lgaa0",
                  style: C,
                  children: [(0, u.jsx)(V, {
                    size: "SM",
                    className: "foundry_hcgxh_h3lgaa1",
                    asChild: !0,
                    children: (0, u.jsx)("span", {
                      children: e
                    })
                  }), (0, u.jsx)(L, {
                    ...j
                  })]
                })
              })
            })]
          })
        })
      };
      var pm = "foundry_hcgxh_bwy1ds1",
        mm = "foundry_hcgxh_bwy1dsg",
        gm = "foundry_hcgxh_bwy1dsf";
      const vm = e => {
          e.preventDefault?.()
        },
        ym = (0, h.forwardRef)((({
          onClose: e,
          onDownload: t,
          zoomLevel: n,
          zoomIn: r,
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
          const v = bu(),
            y = (0, z.Ub)("screen and (max-width: 1024px)"),
            b = n !== p,
            _ = y ? "SM" : "LG",
            w = ka({
              opacity: b ? 1 : 0,
              immediate: (0, z.jt)()
            });
          eh(["+", "=", "add", "plus"], (() => r?.()), {
            preventDefault: !0,
            enabled: m
          }), eh(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0,
            enabled: m
          }), eh("r", (() => d?.()), {
            preventDefault: !0,
            enabled: m
          });
          const x = (0, z.rl)() && y;
          return (0, u.jsx)(Zd, {
            children: (0, u.jsxs)("div", {
              className: "foundry_hcgxh_bwy1ds0",
              ref: g,
              children: [(0, u.jsx)(fm, {
                side: "right",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: vm,
                content: (0, u.jsxs)("div", {
                  className: gm,
                  children: [v.formatMessage(Pd), (0, u.jsx)(V, {
                    size: "XS",
                    className: mm,
                    children: v.formatMessage(Sd, {
                      shortcut: (0, u.jsx)(wh, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, u.jsx)(lh, {
                  size: _,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: v.formatMessage(Pd),
                  className: (0, A.$)(pm, "foundry_hcgxh_bwy1ds2"),
                  onPress: e
                })
              }), (0, u.jsxs)("div", {
                className: "foundry_hcgxh_bwy1ds3",
                children: [!x && m && (0, u.jsxs)(u.Fragment, {
                  children: [(0, u.jsxs)("div", {
                    className: "foundry_hcgxh_bwy1ds4",
                    children: [(0, u.jsx)(fm, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: vm,
                      content: (0, u.jsxs)("div", {
                        className: gm,
                        children: [v.formatMessage(Cd), (0, u.jsx)(V, {
                          size: "XS",
                          className: mm,
                          children: v.formatMessage(Td, {
                            shortcut: (0, u.jsx)(wh, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(lh, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: v.formatMessage(Cd),
                        className: (0, A.$)(pm, "foundry_hcgxh_bwy1ds5"),
                        onPress: () => r(),
                        isDisabled: !l
                      })
                    }), (0, u.jsxs)(_d, {
                      className: "foundry_hcgxh_bwy1dsa",
                      value: [n],
                      max: s,
                      min: a,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => i?.(e[0]),
                      children: [(0, u.jsx)(wd, {
                        className: "foundry_hcgxh_bwy1dsb",
                        children: (0, u.jsx)(xd, {
                          className: "foundry_hcgxh_bwy1dsc"
                        })
                      }), (0, u.jsx)(fm, {
                        side: "left",
                        portal: !1,
                        delayDuration: 0,
                        onPointerDownOutside: vm,
                        content: v.formatMessage(Ad, {
                          zoom: n.toFixed(0)
                        }),
                        children: (0, u.jsx)(Ed, {
                          className: "foundry_hcgxh_bwy1dsd",
                          "aria-label": v.formatMessage(Rd),
                          children: (0, u.jsx)("span", {
                            className: "foundry_hcgxh_bwy1dse"
                          })
                        })
                      })]
                    }), (0, u.jsx)(fm, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: vm,
                      content: (0, u.jsxs)("div", {
                        className: gm,
                        children: [v.formatMessage(Od), (0, u.jsx)(V, {
                          size: "XS",
                          className: mm,
                          children: v.formatMessage(Nd, {
                            shortcut: (0, u.jsx)(wh, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(lh, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: v.formatMessage(Od),
                        className: (0, A.$)(pm, "foundry_hcgxh_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !c
                      })
                    })]
                  }), (0, u.jsx)(rs.div, {
                    style: w,
                    children: (0, u.jsx)(fm, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: vm,
                      content: (0, u.jsxs)("div", {
                        className: gm,
                        children: [v.formatMessage(jd), (0, u.jsx)(V, {
                          size: "XS",
                          className: mm,
                          children: v.formatMessage(Ld, {
                            shortcut: (0, u.jsx)(wh, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(lh, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Undo",
                        label: v.formatMessage(jd),
                        className: (0, A.$)(pm, "foundry_hcgxh_bwy1ds7"),
                        onPress: d,
                        isDisabled: !b,
                        "aria-hidden": !b
                      })
                    })
                  })]
                }), f && x && (0, u.jsx)(fm, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: vm,
                  content: v.formatMessage(Dd),
                  children: (0, u.jsx)(lh, {
                    size: _,
                    appearance: "tertiary",
                    icon: "Download",
                    label: v.formatMessage(Id),
                    className: pm,
                    onPress: e
                  })
                })]
              }), (0, u.jsxs)("div", {
                className: "foundry_hcgxh_bwy1ds8",
                children: [h && (0, u.jsxs)(u.Fragment, {
                  children: [(0, u.jsx)("div", {
                    className: "foundry_hcgxh_bwy1dsh"
                  }), (0, u.jsx)(V, {
                    size: "SM",
                    "aria-hidden": !0,
                    asChild: "string" != typeof h,
                    children: h
                  })]
                }), f && !x && (0, u.jsx)("div", {
                  className: "foundry_hcgxh_bwy1ds9",
                  children: (0, u.jsx)(fm, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: vm,
                    content: v.formatMessage(Dd),
                    children: (0, u.jsx)(lh, {
                      size: _,
                      appearance: "tertiary",
                      icon: "Download",
                      label: v.formatMessage(Id),
                      className: pm,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        }));
      var bm = "foundry_hcgxh_1a74xwb4",
        _m = "focusScope.autoFocusOnMount",
        wm = "focusScope.autoFocusOnUnmount",
        xm = {
          bubbles: !1,
          cancelable: !0
        },
        Em = h.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...a
          } = e, [s, l] = h.useState(null), c = xh(o), d = xh(i), f = h.useRef(null), p = (0, Iu.s)(t, (e => l(e))), m = h.useRef({
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
                  s.contains(t) ? f.current = t : Tm(f.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (m.paused || !s) return;
                  const t = e.relatedTarget;
                  null !== t && (s.contains(t) || Tm(f.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Tm(s)
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
              Om.add(m);
              const e = document.activeElement;
              if (!s.contains(e)) {
                const t = new CustomEvent(_m, xm);
                s.addEventListener(_m, c), s.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (Tm(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(Pm(s).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && Tm(s))
              }
              return () => {
                s.removeEventListener(_m, c), setTimeout((() => {
                  const t = new CustomEvent(wm, xm);
                  s.addEventListener(wm, d), s.dispatchEvent(t), t.defaultPrevented || Tm(e ?? document.body, {
                    select: !0
                  }), s.removeEventListener(wm, d), Om.remove(m)
                }), 0)
              }
            }
          }), [s, c, d, m]);
          const g = h.useCallback((e => {
            if (!n && !r) return;
            if (m.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, i] = function(e) {
                  const t = Pm(e);
                  return [Sm(t, e), Sm(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && Tm(i, {
                select: !0
              })) : (e.preventDefault(), n && Tm(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, r, m.paused]);
          return (0, u.jsx)(Gu.sG.div, {
            tabIndex: -1,
            ...a,
            ref: p,
            onKeyDown: g
          })
        }));

      function Pm(e) {
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

      function Sm(e, t) {
        for (const n of e)
          if (!Cm(n, {
              upTo: t
            })) return n
      }

      function Cm(e, {
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

      function Tm(e, {
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
      Em.displayName = "FocusScope";
      var Om = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = Nm(e, t), e.unshift(t)
          },
          remove(t) {
            e = Nm(e, t), e[0]?.resume()
          }
        }
      }();

      function Nm(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var jm = 0;

      function Lm() {
        h.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? Rm()), document.body.insertAdjacentElement("beforeend", e[1] ?? Rm()), jm++, () => {
            1 === jm && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), jm--
          }
        }), [])
      }

      function Rm() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var Am = n(69727),
        Im = new WeakMap,
        Dm = new WeakMap,
        km = {},
        Mm = 0,
        Hm = function(e) {
          return e && (e.host || Hm(e.parentNode))
        },
        Bm = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), function(e, t, n, r) {
            var o = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = Hm(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            km[n] || (km[n] = new WeakMap);
            var i = km[n],
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
                  var t = e.getAttribute(r),
                    o = null !== t && "false" !== t,
                    l = (Im.get(e) || 0) + 1,
                    c = (i.get(e) || 0) + 1;
                  Im.set(e, l), i.set(e, c), a.push(e), 1 === l && o && Dm.set(e, !0), 1 === c && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              }))
            };
            return u(t), s.clear(), Mm++,
              function() {
                a.forEach((function(e) {
                  var t = Im.get(e) - 1,
                    o = i.get(e) - 1;
                  Im.set(e, t), i.set(e, o), t || (Dm.has(e) || e.removeAttribute(r), Dm.delete(e)), o || e.removeAttribute(n)
                })), --Mm || (Im = new WeakMap, Im = new WeakMap, Dm = new WeakMap, km = {})
              }
          }(r, o, n, "aria-hidden")) : function() {
            return null
          }
        },
        Vm = "Dialog",
        [Fm, zm] = Du(Vm),
        [Um, Gm] = Fm(Vm),
        qm = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: a = !0
          } = e, s = h.useRef(null), l = h.useRef(null), [c, d] = Bu({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Vm
          });
          return (0, u.jsx)(Um, {
            scope: t,
            triggerRef: s,
            contentRef: l,
            contentId: Lh(),
            titleId: Lh(),
            descriptionId: Lh(),
            open: c,
            onOpenChange: d,
            onOpenToggle: h.useCallback((() => d((e => !e))), [d]),
            modal: a,
            children: n
          })
        };
      qm.displayName = Vm;
      var Xm = "DialogTrigger",
        Km = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Gm(Xm, n), i = (0, Iu.s)(t, o.triggerRef);
          return (0, u.jsx)(Gu.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": hg(o.open),
            ...r,
            ref: i,
            onClick: Au(e.onClick, o.onOpenToggle)
          })
        }));
      Km.displayName = Xm;
      var Wm = "DialogPortal",
        [$m, Ym] = Fm(Wm, {
          forceMount: void 0
        }),
        Zm = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = Gm(Wm, t);
          return (0, u.jsx)($m, {
            scope: t,
            forceMount: n,
            children: h.Children.map(r, (e => (0, u.jsx)(jp, {
              present: n || i.open,
              children: (0, u.jsx)(Np, {
                asChild: !0,
                container: o,
                children: e
              })
            })))
          })
        };
      Zm.displayName = Wm;
      var Qm = "DialogOverlay",
        Jm = h.forwardRef(((e, t) => {
          const n = Ym(Qm, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = Gm(Qm, e.__scopeDialog);
          return i.modal ? (0, u.jsx)(jp, {
            present: r || i.open,
            children: (0, u.jsx)(tg, {
              ...o,
              ref: t
            })
          }) : null
        }));
      Jm.displayName = Qm;
      var eg = (0, qu.TL)("DialogOverlay.RemoveScroll"),
        tg = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Gm(Qm, n);
          return (0, u.jsx)(Am.A, {
            as: eg,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, u.jsx)(Gu.sG.div, {
              "data-state": hg(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        })),
        ng = "DialogContent",
        rg = h.forwardRef(((e, t) => {
          const n = Ym(ng, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = Gm(ng, e.__scopeDialog);
          return (0, u.jsx)(jp, {
            present: r || i.open,
            children: i.modal ? (0, u.jsx)(og, {
              ...o,
              ref: t
            }) : (0, u.jsx)(ig, {
              ...o,
              ref: t
            })
          })
        }));
      rg.displayName = ng;
      var og = h.forwardRef(((e, t) => {
          const n = Gm(ng, e.__scopeDialog),
            r = h.useRef(null),
            o = (0, Iu.s)(t, n.contentRef, r);
          return h.useEffect((() => {
            const e = r.current;
            if (e) return Bm(e)
          }), []), (0, u.jsx)(ag, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Au(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: Au(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: Au(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        ig = h.forwardRef(((e, t) => {
          const n = Gm(ng, e.__scopeDialog),
            r = h.useRef(!1),
            o = h.useRef(!1);
          return (0, u.jsx)(ag, {
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
        ag = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...a
          } = e, s = Gm(ng, n), l = h.useRef(null), c = (0, Iu.s)(t, l);
          return Lm(), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Em, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, u.jsx)(Ch, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": hg(s.open),
                ...a,
                ref: c,
                onDismiss: () => s.onOpenChange(!1)
              })
            }), (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)(gg, {
                titleId: s.titleId
              }), (0, u.jsx)(vg, {
                contentRef: l,
                descriptionId: s.descriptionId
              })]
            })]
          })
        })),
        sg = "DialogTitle",
        lg = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Gm(sg, n);
          return (0, u.jsx)(Gu.sG.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        }));
      lg.displayName = sg;
      var cg = "DialogDescription",
        ug = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Gm(cg, n);
          return (0, u.jsx)(Gu.sG.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        }));
      ug.displayName = cg;
      var dg = "DialogClose";

      function hg(e) {
        return e ? "open" : "closed"
      }
      h.forwardRef(((e, t) => {
        const {
          __scopeDialog: n,
          ...r
        } = e, o = Gm(dg, n);
        return (0, u.jsx)(Gu.sG.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: Au(e.onClick, (() => o.onOpenChange(!1)))
        })
      })).displayName = dg;
      var fg = "DialogTitleWarning",
        [pg, mg] = function(e, t) {
          const n = h.createContext(t),
            r = e => {
              const {
                children: t,
                ...r
              } = e, o = h.useMemo((() => r), Object.values(r));
              return (0, u.jsx)(n.Provider, {
                value: o,
                children: t
              })
            };
          return r.displayName = e + "Provider", [r, function(r) {
            const o = h.useContext(n);
            if (o) return o;
            if (void 0 !== t) return t;
            throw new Error(`\`${r}\` must be used within \`${e}\``)
          }]
        }(fg, {
          contentName: ng,
          titleName: sg,
          docsSlug: "dialog"
        }),
        gg = ({
          titleId: e
        }) => {
          const t = mg(fg),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return h.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        vg = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${mg("DialogDescriptionWarning").contentName}}.`;
          return h.useEffect((() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        yg = qm,
        bg = Km,
        _g = Zm,
        wg = rg,
        xg = lg,
        Eg = ug;
      const Pg = rs(Jm),
        Sg = rs(wg),
        Cg = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        Tg = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        Og = (0, d.AK)(.77, 0, .175, 1),
        Ng = ({
          src: e,
          alt: t,
          caption: n,
          crossOrigin: r,
          onReady: o,
          loading: i,
          referrerPolicy: a,
          thumbnail: s,
          thumbnailAspectRatio: l,
          thumbnailPosition: c,
          thumbnailFit: d,
          reduceMotion: f = !1,
          defaultOpen: p,
          open: g,
          onOpenChange: v,
          showOpenButton: y,
          showDownloadButton: b,
          zoomLevel: _,
          defaultZoomLevel: w = 100,
          minZoomLevel: x = 100,
          maxZoomLevel: E = 300,
          zoomLevelStep: P = 100,
          onZoomLevelChange: S,
          gestureSettings: C,
          testId: T,
          showZoomControls: O = !0,
          disableGesturesOn: N,
          asChild: j,
          children: L,
          className: R,
          usePortal: I = !0,
          enabled: D = !0
        }) => {
          const k = (0, h.useRef)(null),
            M = (0, h.useRef)(null),
            H = (0, h.useRef)(null),
            B = (0, h.useRef)(null),
            V = Ha(),
            U = Ha(),
            G = Ha(),
            q = (0, h.useRef)(!1),
            X = bu(),
            K = (0, z.Ub)("screen and (max-width: 1024px)"),
            W = (0, z.rl)() && K,
            $ = (0, z.jt)(),
            Y = "pointer-devices" !== N || W,
            [Z, Q] = (0, h.useState)(!0),
            [J, ee] = (0, h.useState)(!1),
            [te = !1, ne] = (0, z.ic)({
              prop: g,
              defaultProp: p,
              onChange: v
            }),
            [re, oe] = (0, h.useState)(!1),
            [ie, ae] = (0, h.useState)(null),
            se = (0, h.useDeferredValue)(re),
            le = f || $ || p && !q.current;
          (0, h.useEffect)((() => {
            o?.()
          }), []), (0, h.useEffect)((() => {
            (p || g) && oe(te)
          }), []), (0, z.qn)((() => {
            re !== se && (async function(e, {
              onOpen: t,
              onClose: n
            }) {
              const r = H.current.getBoundingClientRect(),
                o = H.current.querySelector("img"),
                i = o && getComputedStyle(o),
                a = i?.objectFit ?? "",
                s = i?.objectPosition ?? "",
                {
                  a: l
                } = new DOMMatrix(i?.transform),
                u = o?.naturalWidth ?? r.width,
                h = o?.naturalHeight ?? r.height,
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
                    width: `${r.width}px`,
                    height: `${r.height}px`,
                    x: r.left,
                    y: r.top,
                    objectFit: d || a,
                    objectPosition: c || s
                  }), await e({
                    immediate: !0,
                    opacity: 1
                  }), H.current?.style.setProperty("opacity", "0"), await e({
                    height: "horizontal" === y ? `${window.innerHeight}px` : `${v}px`,
                    width: "horizontal" === y ? `${g}px` : `${window.innerWidth}px`,
                    x: "horizontal" === y ? b : 0,
                    y: "horizontal" === y ? 0 : b,
                    scale: w / 100,
                    immediate: le,
                    config: {
                      duration: 550,
                      easing: Og
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
                  }), "vertical" === y ? k.current?.style.setProperty("width", "100%") : "horizontal" === y && k.current?.style.setProperty("height", "100%"), t?.()
                }
              }) : G.start({
                to: async e => {
                  await e({
                    immediate: !0,
                    opacity: 1,
                    height: "horizontal" === y ? `${window.innerHeight}px` : `${v}px`,
                    width: "horizontal" === y ? `${g}px` : `${window.innerWidth}px`,
                    x: ve.position[0] + ("horizontal" === y ? b : 0),
                    y: ve.position[1] + ("horizontal" === y ? 0 : b),
                    scale: ve.zoomLevel / 100,
                    objectFit: d || a,
                    objectPosition: c || s
                  }), await e({
                    aspectRatio: "unset",
                    scale: l,
                    width: `${r.width}px`,
                    height: `${r.height}px`,
                    x: r.left,
                    y: r.top,
                    immediate: le,
                    config: {
                      duration: 250,
                      easing: Og
                    }
                  }), H.current?.style.setProperty("opacity", "1"), await e({
                    opacity: 0,
                    immediate: !0
                  }), n?.()
                }
              })
            }(re, {
              onClose: () => ne(!1)
            }), q.current = !0)
          }), [re]), (0, z.qn)((() => {
            te ? Promise.resolve().then((() => async function() {
              const e = H.current.querySelector("img");
              if (B.current) {
                let t = Cg;
                e?.currentSrc && (t = e?.currentSrc), B.current.src = t, await we(B.current)
              }
            }())).then((() => we(B.current))).then((() => oe(te))) : oe(!1)
          }), [te]);
          const ce = () => {
              oe(!1)
            },
            {
              loaded: ue,
              eventHandlers: de
            } = (0, z.gr)({
              enabled: se
            }),
            {
              isHovered: he
            } = (0, z.Mk)({
              ref: M,
              enabled: se
            }),
            {
              isFocused: fe
            } = (0, z.iQ)({
              ref: M,
              enabled: se
            }),
            {
              isIdle: pe
            } = (0, z.UQ)({
              leave: 300,
              activity: 3e3,
              enabled: se && !he && !fe && !W
            }),
            me = function(e, t, n) {
              const r = Br.fun(t) && t,
                {
                  reset: o,
                  sort: i,
                  trail: a = 0,
                  expires: s = !0,
                  exitBeforeEnter: l = !1,
                  onDestroyed: c,
                  ref: u,
                  config: d
                } = r ? r() : t,
                f = (0, h.useMemo)((() => r || 3 == arguments.length ? Da() : void 0), []),
                p = Ur(e),
                m = [],
                g = (0, h.useRef)(null),
                v = o ? null : g.current;
              si((() => {
                g.current = m
              })), ci((() => (Fr(m, (e => {
                f?.add(e.ctrl), e.ctrl.ref = f
              })), () => {
                Fr(g.current, (e => {
                  e.expired && clearTimeout(e.expirationId), Vi(e.ctrl, f), e.ctrl.stop(!0)
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
                      return n ? (t.add(n), n.key) : Ba++
                    }))
                  }
                  return Br.und(n) ? e : Br.fun(n) ? e.map(n) : Ur(n)
                }(p, r ? r() : t, v),
                b = o && g.current || [];
              si((() => Fr(b, (({
                ctrl: e,
                item: t,
                key: n
              }) => {
                Vi(e, f), Oi(c, t, n)
              }))));
              const _ = [];
              if (v && Fr(v, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = _[t] = y.indexOf(e.key)) && (m[t] = e)
                })), Fr(p, ((e, t) => {
                  m[t] || (m[t] = {
                    key: y[t],
                    item: e,
                    phase: "mount",
                    ctrl: new Ea
                  }, m[t].ctrl.item = e)
                })), _.length) {
                let e = -1;
                const {
                  leave: n
                } = r ? r() : t;
                Fr(_, ((t, r) => {
                  const o = v[r];
                  ~t ? (e = m.indexOf(o), m[e] = {
                    ...o,
                    item: p[t]
                  }) : n && m.splice(++e, 0, o)
                }))
              }
              Br.fun(i) && m.sort(((e, t) => i(e.item, t.item)));
              let w = -a;
              const x = li(),
                E = Ai(t),
                P = new Map,
                S = (0, h.useRef)(new Map),
                C = (0, h.useRef)(!1);
              Fr(m, ((e, n) => {
                const o = e.key,
                  i = e.phase,
                  c = r ? r() : t;
                let h, f;
                const p = Oi(c.delay || 0, o);
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
                if (h = Oi(h, e.item, n), h = Br.obj(h) ? ki(h) : {
                    to: h
                  }, !h.config) {
                  const t = d || E.config;
                  h.config = Oi(t, e.item, n, f)
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
                if ("enter" == f && Br.und(m.from)) {
                  const o = r ? r() : t,
                    i = Br.und(o.initial) || v ? o.from : o.initial;
                  m.from = Oi(i, e.item, n)
                }
                const {
                  onResolve: b
                } = m;
                m.onResolve = e => {
                  Oi(b, e);
                  const t = g.current,
                    n = t.find((e => e.key === o));
                  if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == n.phase) {
                      const t = Oi(s, n.item);
                      if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (n.expired = !0, !e && r > 0) return void(r <= 2147483647 && (n.expirationId = setTimeout(x, r)))
                      }
                    }
                    e && t.some((e => e.expired)) && (S.current.delete(n), l && (C.current = !0), x())
                  }
                };
                const _ = Ca(e.ctrl, m);
                "leave" === f && l ? S.current.set(e, {
                  phase: f,
                  springs: _,
                  payload: m
                }) : P.set(e, {
                  phase: f,
                  springs: _,
                  payload: m
                })
              }));
              const T = (0, h.useContext)(Aa),
                O = di(T),
                N = T !== O && Hi(T);
              si((() => {
                N && Fr(m, (e => {
                  e.ctrl.start({
                    default: T
                  })
                }))
              }), [T]), Fr(P, ((e, t) => {
                if (S.current.size) {
                  const e = m.findIndex((e => e.key === t.key));
                  m.splice(e, 1)
                }
              })), si((() => {
                Fr(S.current.size ? S.current : P, (({
                  phase: e,
                  payload: t
                }, n) => {
                  const {
                    ctrl: r
                  } = n;
                  n.phase = e, f?.add(r), N && "enter" == e && r.start({
                    default: T
                  }), t && (Fi(r, t.ref), !r.ref && !f || C.current ? (r.start(t), C.current && (C.current = !1)) : r.update(t))
                }))
              }), o ? void 0 : n);
              const j = e => h.createElement(h.Fragment, null, m.map(((t, n) => {
                const {
                  springs: r
                } = P.get(t) || t.ctrl, o = e({
                  ...r
                }, t.item, t, n);
                return o && o.type ? h.createElement(o.type, {
                  ...o.props,
                  key: Br.str(t.key) || Br.num(t.key) ? t.key : t.ctrl.id,
                  ref: o.ref
                }) : o
              })));
              return f ? [j, f] : j
            }(se, {
              ref: V,
              from: {
                opacity: 0
              },
              enter: {
                opacity: 1
              },
              leave: {
                opacity: 0
              },
              immediate: le
            }),
            [ge] = ka((() => ({
              ref: U,
              opacity: se && !pe && ue && Z ? 1 : 0,
              immediate: le
            })), [se, pe, ue, Z]),
            ve = (({
              position: e,
              defaultPosition: t,
              onPositionChange: n,
              minZoomLevel: r,
              maxZoomLevel: o,
              zoomLevelStep: i,
              zoomLevel: a,
              defaultZoomLevel: s,
              onZoomLevelChange: l,
              onRequestedClose: c,
              onRequestingClose: u,
              onClick: d,
              onDoubleClick: f,
              gestureSettings: p = ds,
              enabled: m
            }) => {
              const g = (0, z.jt)(),
                [v = t, y] = (0, z.ic)({
                  prop: e,
                  defaultProp: t,
                  onChange: n
                }),
                [b = s, _] = (0, z.ic)({
                  prop: a,
                  defaultProp: s,
                  onChange: l
                }),
                w = (0, h.useRef)(null),
                x = (0, h.useRef)(null),
                [E, P] = (0, h.useState)(!1),
                S = b > r,
                C = b < o,
                T = b > r,
                O = b === r,
                [N, j] = ka((() => ({
                  x: v[0],
                  y: v[1],
                  scale: b / 100,
                  from: {
                    scale: r / 100,
                    x: t[0],
                    y: t[1]
                  },
                  immediate: g,
                  config: cs
                }))),
                L = (e, {
                  origin: n,
                  delta: i,
                  animationConfig: a
                } = {}) => {
                  if (w.current && x.current) {
                    n || (n = [x.current.clientWidth / 2, x.current.clientHeight / 2]);
                    const s = ls(e, r, o);
                    if (s === b) return;
                    i || (i = (s - b) / 100);
                    const l = {
                      config: a || cs,
                      x: t[0],
                      y: t[1],
                      scale: b,
                      immediate: g
                    };
                    if (s <= r) y(t);
                    else {
                      const e = ss(w.current, x.current, (({
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
                          top: c,
                          width: u
                        } = n.current?.getBoundingClientRect();
                        return [-(i - l - u / 2) / o * r + e, -(a - c - s / 2) / o * r + t]
                      })({
                        currentTranslate: v,
                        contentRef: w,
                        pinchDelta: i,
                        scale: b / 100,
                        touchOrigin: n
                      }), s);
                      l.x = e.xy[0], l.y = e.xy[1], y(e.xy)
                    }
                    l.scale = s / 100, j(l), _(s)
                  }
                },
                R = (e, t) => e.y < t.top || e.y > t.bottom || e.x < t.left || e.x > t.right,
                {
                  handleClick: A
                } = (0, z.Rv)({
                  onDoubleClick: e => {
                    if (w.current) {
                      const t = is(w.current),
                        n = R(e, t) ? "overlay" : "content";
                      f?.({
                        target: n,
                        origin: [e.clientX, e.clientY],
                        contentBounds: t
                      })
                    }
                  },
                  onSingleClick: e => {
                    if (w.current && 0 === e.button) {
                      const t = is(w.current),
                        n = R(e, t) ? "overlay" : "content";
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
                containerRef: x,
                contentRef: w,
                canPan: S,
                isPanning: E,
                position: v,
                zoomLevel: b,
                zoomIn: e => {
                  L(b + i, e)
                },
                zoomOut: e => {
                  L(b - i, e)
                },
                zoomTo: L,
                resetZoom: () => {
                  y(t), _(s);
                  const e = {
                    config: us,
                    x: t[0],
                    y: t[1],
                    scale: s / 100,
                    immediate: g
                  };
                  j(e)
                },
                canZoomIn: C,
                canZoomOut: T,
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
                    event: c
                  }) => {
                    if (!x.current || !w.current) return;
                    if (s) return void A(c);
                    if (o && i && !E && P(!0), l > 1) return;
                    if (a || b < r) return;
                    if (e) return v;
                    const {
                      horizontalOffset: d,
                      verticalOffset: h
                    } = ss(w.current, x.current, v, b), f = o * p.dragFactor, m = i * p.dragFactor, _ = {
                      config: cs,
                      x: t[0],
                      y: t[1],
                      immediate: g
                    };
                    if (b === r) {
                      const e = [n[0], n[1] + m],
                        {
                          y: t
                        } = as(e, w.current),
                        r = ls(100 * Math.abs(t) / p.closePc, 0, 100);
                      _.config = us, _.x = e[0], _.y = e[1], y(e), u?.(r)
                    } else {
                      const e = [os(n[0] + f, -d, d), os(n[1] + m, -h, h)];
                      _.x = e[0], _.y = e[1], y(e)
                    }
                    return j(_), n
                  },
                  onDragEnd: ({
                    memo: e
                  }) => {
                    if (x.current && w.current)
                      if (b === r) {
                        const {
                          y: e
                        } = as(v, w.current);
                        if (ls(100 * Math.abs(e) / p.closePc, 0, 100) >= 100) c?.();
                        else {
                          const e = {
                            config: us,
                            x: t[0],
                            y: t[1],
                            immediate: g
                          };
                          j(e), y(t), u?.(0)
                        }
                      } else if (void 0 !== e) {
                      const e = ss(w.current, x.current, v, b),
                        t = {
                          config: cs,
                          x: e.xy[0],
                          y: e.xy[1],
                          immediate: g
                        };
                      j(t), P(!1), y(e.xy)
                    }
                  },
                  onPinch: ({
                    cancel: e,
                    last: t,
                    offset: [n],
                    origin: [r, o],
                    first: i
                  }) => {
                    if (w.current && x.current) {
                      if (i && P(!0), t) return void e();
                      L(100 * n, {
                        origin: [r, o],
                        delta: n - b / 100
                      })
                    }
                  },
                  onPinchEnd: () => {
                    x.current && w.current && P(!1)
                  },
                  onWheel: ({
                    last: e,
                    event: t,
                    movement: n
                  }) => {
                    if (w.current && x.current) {
                      const r = -1 * n[1];
                      if (r && E && P(!0), e) return;
                      const o = [t.clientX, t.clientY],
                        i = b / 100,
                        a = i + r / p.scrollFactor;
                      L(100 * a, {
                        delta: a - i,
                        origin: o
                      })
                    }
                  },
                  onWheelEnd: () => {
                    x.current && w.current && P(!1)
                  }
                },
                getCursor: () => O && !m ? "zoom-out" : O && C ? "zoom-in" : S ? E ? "grabbing" : "grab" : "pointer",
                enabled: m,
                animation: N
              }
            })({
              enabled: Y && se,
              onClick: function() {
                K ? Q(!Z) : ce()
              },
              onDoubleClick: function(e) {
                if (W && ve.containerRef.current && "content" === e.target)
                  if (ve.zoomLevel > ve.minZoomLevel) ve.resetZoom();
                  else {
                    const t = ((e, t, n) => {
                      const r = e.height / (n / 100);
                      return 100 * t.height / r
                    })(e.contentBounds, ve.containerRef.current.getBoundingClientRect(), ve.zoomLevel);
                    ve.zoomTo(t, {
                      animationConfig: us
                    })
                  }
              },
              onRequestedClose: ce,
              onRequestingClose: e => {
                if (re) {
                  const t = 1,
                    n = .25,
                    r = ls(t - e * (t - n) / 100, n, t);
                  V.start({
                    opacity: r
                  });
                  const o = ls(1 - e / 100, 0, 1);
                  U.start({
                    opacity: o
                  })
                }
              },
              zoomLevel: _,
              defaultZoomLevel: w,
              minZoomLevel: x,
              maxZoomLevel: E,
              zoomLevelStep: P,
              onZoomLevelChange: S,
              defaultPosition: [0, 0],
              gestureSettings: C
            }),
            ye = ka({
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
                se || ee(!1)
              },
              onRest: async () => {
                se ? ee(!0) : (ve.resetZoom(), Q(!0))
              }
            }),
            be = ka({
              opacity: se && ue && J ? 1 : 0,
              immediate: !0,
              onRest: () => {
                se && re && ue && G.start({
                  opacity: 0,
                  immediate: !0
                })
              }
            }),
            _e = [
              [G, V, U],
              [0, 0, .1]
            ];
          async function we(e) {
            return e.complete ? Promise.resolve(e) : new Promise(((t, n) => {
              e.onload = () => t(e), e.onerror = n
            }))
          }! function(e, t, n = 1e3) {
            si((() => {
              if (t) {
                let r = 0;
                Fr(e, ((e, o) => {
                  const i = e.current;
                  if (i.length) {
                    let a = n * t[o];
                    isNaN(a) ? a = r : r = a, Fr(i, (e => {
                      Fr(e.queue, (e => {
                        const t = e.delay;
                        e.delay = e => a + Oi(t || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let t = Promise.resolve();
                Fr(e, (e => {
                  const n = e.current;
                  if (n.length) {
                    const r = n.map((e => {
                      const t = e.queue;
                      return e.queue = [], t
                    }));
                    t = t.then((() => (Fr(n, ((e, t) => Fr(r[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(se ? _e[0] : _e[0].reverse(), _e[1]);
          const xe = j ? (0, u.jsx)(m.DX, {
            className: bm,
            ref: null,
            children: L
          }) : (0, u.jsx)("img", {
            alt: "",
            src: s,
            "aria-hidden": !0,
            loading: i,
            className: bm,
            crossOrigin: r,
            referrerPolicy: a
          });
          (0, h.useEffect)((() => {
            Q(!W)
          }), [W]);
          const {
            contrastMode: Ee
          } = (0, tn.DP)(), Pe = ((e, t) => [ju.xW.tokens, Lu("dark", t)].join(" "))(0, Ee);
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(yg, {
              open: te,
              children: (0, u.jsxs)("div", {
                className: (0, A.A)("foundry_hcgxh_1a74xwb0", R),
                children: [(0, u.jsx)(bg, {
                  asChild: !0,
                  children: (0, u.jsxs)(rs.button, {
                    className: "foundry_hcgxh_1a74xwb3 foundry_hcgxh_1d5mo5m0 foundry_hcgxh_1a74xwb1",
                    onClick: async () => {
                      D && ne(!te)
                    },
                    ref: H,
                    "data-idle": !re,
                    style: {
                      aspectRatio: l,
                      objectPosition: c,
                      objectFit: d
                    },
                    children: [(0, u.jsx)(m.s6, {
                      children: X.formatMessage(Cu)
                    }), xe, me(((e, t) => y && !t && (0, u.jsx)(rs.span, {
                      className: "foundry_hcgxh_1a74xwb5",
                      style: e,
                      children: (0, u.jsx)(F.Plus, {
                        label: ""
                      })
                    })))]
                  })
                }), (0, u.jsxs)(_g, {
                  ...!I && {
                    container: ie
                  },
                  children: [(0, u.jsx)(rs.img, {
                    "aria-hidden": !0,
                    src: Cg,
                    ref: B,
                    className: "foundry_hcgxh_1a74xwb2 foundry_hcgxh_1a74xwb1",
                    style: {
                      aspectRatio: l,
                      backgroundPosition: c,
                      backgroundSize: d,
                      ...ye
                    }
                  }), me(((o, s) => s && (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(Pg, {
                      className: "foundry_hcgxh_1a74xwb8",
                      style: o
                    }), (0, u.jsxs)(Sg, {
                      "data-testid": T,
                      onEscapeKeyDown: ce,
                      onOpenAutoFocus: Tg,
                      onCloseAutoFocus: e => ((e, t) => {
                        e?.preventDefault(), t.current?.focus({
                          preventScroll: !0
                        })
                      })(e, H),
                      className: Pe,
                      children: [(0, u.jsx)(m.s6, {
                        children: (0, u.jsx)(xg, {
                          children: X.formatMessage(Tu)
                        })
                      }), (0, u.jsx)(m.s6, {
                        children: (0, u.jsx)(Eg, {
                          children: n || X.formatMessage(Ou, {
                            alt: t
                          })
                        })
                      }), (0, u.jsx)(rs.div, {
                        className: "foundry_hcgxh_1a74xwb6",
                        style: be,
                        children: (0, u.jsx)(hs, {
                          ...ve,
                          children: (0, u.jsx)("img", {
                            alt: "",
                            src: e,
                            ref: k,
                            loading: i,
                            className: "foundry_hcgxh_1a74xwba",
                            crossOrigin: r,
                            "aria-hidden": !0,
                            referrerPolicy: a,
                            style: {
                              cursor: ve.getCursor()
                            },
                            ...de
                          })
                        })
                      }), (0, u.jsx)(rs.div, {
                        className: "foundry_hcgxh_1a74xwb9",
                        style: ge,
                        children: (0, u.jsx)(ym, {
                          ...ve,
                          ref: M,
                          onClose: ce,
                          caption: n,
                          onDownload: () => (e => {
                            const t = document.createElement("a");
                            t.href = e, t.download = e.substring(e.lastIndexOf("/") + 1), document.body.appendChild(t), t.click(), document.body.removeChild(t)
                          })(e),
                          showDownloadButton: b,
                          showZoomControls: O
                        })
                      })]
                    })]
                  })))]
                })]
              })
            }), !I && (0, u.jsx)("div", {
              ref: ae
            })]
          })
        },
        jg = e => {
          const t = (0, tn.Ym)();
          return (0, u.jsx)(Su, {
            messages: Nu,
            locale: t,
            children: (0, u.jsx)(Ng, {
              ...e
            })
          })
        };
      var Lg = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Rg = [" ", "Enter"],
        Ag = "Select",
        [Ig, Dg, kg] = Xu(Ag),
        [Mg, Hg] = Du(Ag, [kg, cp]),
        Bg = cp(),
        [Vg, Fg] = Mg(Ag),
        [zg, Ug] = Mg(Ag),
        Gg = e => {
          const {
            __scopeSelect: t,
            children: n,
            open: r,
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
          } = e, v = Bg(t), [y, b] = h.useState(null), [_, w] = h.useState(null), [x, E] = h.useState(!1), P = Fu(c), [S, C] = Bu({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Ag
          }), [T, O] = Bu({
            prop: a,
            defaultProp: s,
            onChange: l,
            caller: Ag
          }), N = h.useRef(null), j = !y || g || !!y.closest("form"), [L, R] = h.useState(new Set), A = Array.from(L).map((e => e.props.value)).join(";");
          return (0, u.jsx)(Sp, {
            ...v,
            children: (0, u.jsxs)(Vg, {
              required: m,
              scope: t,
              trigger: y,
              onTriggerChange: b,
              valueNode: _,
              onValueNodeChange: w,
              valueNodeHasChildren: x,
              onValueNodeHasChildrenChange: E,
              contentId: Lh(),
              value: T,
              onValueChange: O,
              open: S,
              onOpenChange: C,
              dir: P,
              triggerPointerDownPosRef: N,
              disabled: p,
              children: [(0, u.jsx)(Ig.Provider, {
                scope: t,
                children: (0, u.jsx)(zg, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: h.useCallback((e => {
                    R((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: h.useCallback((e => {
                    R((t => {
                      const n = new Set(t);
                      return n.delete(e), n
                    }))
                  }), []),
                  children: n
                })
              }), j ? (0, u.jsxs)(Sv, {
                "aria-hidden": !0,
                required: m,
                tabIndex: -1,
                name: d,
                autoComplete: f,
                value: T,
                onChange: e => O(e.target.value),
                disabled: p,
                form: g,
                children: [void 0 === T ? (0, u.jsx)("option", {
                  value: ""
                }) : null, Array.from(L)]
              }, A) : null]
            })
          })
        };
      Gg.displayName = Ag;
      var qg = "SelectTrigger",
        Xg = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            disabled: r = !1,
            ...o
          } = e, i = Bg(n), a = Fg(qg, n), s = a.disabled || r, l = (0, Iu.s)(t, a.onTriggerChange), c = Dg(n), d = h.useRef("touch"), [f, p, m] = Tv((e => {
            const t = c().filter((e => !e.disabled)),
              n = t.find((e => e.value === a.value)),
              r = Ov(t, e, n);
            void 0 !== r && a.onValueChange(r.value)
          })), g = e => {
            s || (a.onOpenChange(!0), m()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, u.jsx)(Cp, {
            asChild: !0,
            ...i,
            children: (0, u.jsx)(Gu.sG.button, {
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
              "data-placeholder": Cv(a.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: Au(o.onClick, (e => {
                e.currentTarget.focus(), "mouse" !== d.current && g(e)
              })),
              onPointerDown: Au(o.onPointerDown, (e => {
                d.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (g(e), e.preventDefault())
              })),
              onKeyDown: Au(o.onKeyDown, (e => {
                const t = "" !== f.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || p(e.key), t && " " === e.key || Lg.includes(e.key) && (g(), e.preventDefault())
              }))
            })
          })
        }));
      Xg.displayName = qg;
      var Kg = "SelectValue",
        Wg = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: i,
            placeholder: a = "",
            ...s
          } = e, l = Fg(Kg, n), {
            onValueNodeHasChildrenChange: c
          } = l, d = void 0 !== i, h = (0, Iu.s)(t, l.onValueNodeChange);
          return Mu((() => {
            c(d)
          }), [c, d]), (0, u.jsx)(Gu.sG.span, {
            ...s,
            ref: h,
            style: {
              pointerEvents: "none"
            },
            children: Cv(l.value) ? (0, u.jsx)(u.Fragment, {
              children: a
            }) : i
          })
        }));
      Wg.displayName = Kg;
      var $g = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, u.jsx)(Gu.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      }));
      $g.displayName = "SelectIcon";
      var Yg = e => (0, u.jsx)(Np, {
        asChild: !0,
        ...e
      });
      Yg.displayName = "SelectPortal";
      var Zg = "SelectContent",
        Qg = h.forwardRef(((e, t) => {
          const n = Fg(Zg, e.__scopeSelect),
            [r, o] = h.useState();
          if (Mu((() => {
              o(new DocumentFragment)
            }), []), !n.open) {
            const t = r;
            return t ? Ut.createPortal((0, u.jsx)(ev, {
              scope: e.__scopeSelect,
              children: (0, u.jsx)(Ig.Slot, {
                scope: e.__scopeSelect,
                children: (0, u.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, u.jsx)(rv, {
            ...e,
            ref: t
          })
        }));
      Qg.displayName = Zg;
      var Jg = 10,
        [ev, tv] = Mg(Zg),
        nv = (0, qu.TL)("SelectContent.RemoveScroll"),
        rv = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            position: r = "item-aligned",
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
          } = e, _ = Fg(Zg, n), [w, x] = h.useState(null), [E, P] = h.useState(null), S = (0, Iu.s)(t, (e => x(e))), [C, T] = h.useState(null), [O, N] = h.useState(null), j = Dg(n), [L, R] = h.useState(!1), A = h.useRef(!1);
          h.useEffect((() => {
            if (w) return Bm(w)
          }), [w]), Lm();
          const I = h.useCallback((e => {
              const [t, ...n] = j().map((e => e.ref.current)), [r] = n.slice(-1), o = document.activeElement;
              for (const n of e) {
                if (n === o) return;
                if (n?.scrollIntoView({
                    block: "nearest"
                  }), n === t && E && (E.scrollTop = 0), n === r && E && (E.scrollTop = E.scrollHeight), n?.focus(), document.activeElement !== o) return
              }
            }), [j, E]),
            D = h.useCallback((() => I([C, w])), [I, C, w]);
          h.useEffect((() => {
            L && D()
          }), [L, D]);
          const {
            onOpenChange: k,
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
                n = n => {
                  e.x <= 10 && e.y <= 10 ? n.preventDefault() : w.contains(n.target) || k(!1), document.removeEventListener("pointermove", t), M.current = null
                };
              return null !== M.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                  capture: !0
                })
              }
            }
          }), [w, k, M]), h.useEffect((() => {
            const e = () => k(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [k]);
          const [H, B] = Tv((e => {
            const t = j().filter((e => !e.disabled)),
              n = t.find((e => e.ref.current === document.activeElement)),
              r = Ov(t, e, n);
            r && setTimeout((() => r.ref.current.focus()))
          })), V = h.useCallback(((e, t, n) => {
            const r = !A.current && !n;
            (void 0 !== _.value && _.value === t || r) && (T(e), r && (A.current = !0))
          }), [_.value]), F = h.useCallback((() => w?.focus()), [w]), z = h.useCallback(((e, t, n) => {
            const r = !A.current && !n;
            (void 0 !== _.value && _.value === t || r) && N(e)
          }), [_.value]), U = "popper" === r ? iv : ov, G = U === iv ? {
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
          return (0, u.jsx)(ev, {
            scope: n,
            content: w,
            viewport: E,
            onViewportChange: P,
            itemRefCallback: V,
            selectedItem: C,
            onItemLeave: F,
            itemTextRefCallback: z,
            focusSelectedItem: D,
            selectedItemText: O,
            position: r,
            isPositioned: L,
            searchRef: H,
            children: (0, u.jsx)(Am.A, {
              as: nv,
              allowPinchZoom: !0,
              children: (0, u.jsx)(Em, {
                asChild: !0,
                trapped: _.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: Au(o, (e => {
                  _.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, u.jsx)(Ch, {
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
                    onPlaced: () => R(!0),
                    ref: S,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: Au(b.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = j().filter((e => !e.disabled));
                        let n = t.map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (n = n.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            r = n.indexOf(t);
                          n = n.slice(r + 1)
                        }
                        setTimeout((() => I(n))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      rv.displayName = "SelectContentImpl";
      var ov = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: r,
          ...o
        } = e, i = Fg(Zg, n), a = tv(Zg, n), [s, l] = h.useState(null), [c, d] = h.useState(null), f = (0, Iu.s)(t, (e => d(e))), p = Dg(n), m = h.useRef(!1), g = h.useRef(!0), {
          viewport: v,
          selectedItem: y,
          selectedItemText: b,
          focusSelectedItem: _
        } = a, w = h.useCallback((() => {
          if (i.trigger && i.valueNode && s && c && v && y && b) {
            const e = i.trigger.getBoundingClientRect(),
              t = c.getBoundingClientRect(),
              n = i.valueNode.getBoundingClientRect(),
              o = b.getBoundingClientRect();
            if ("rtl" !== i.dir) {
              const r = o.left - t.left,
                i = n.left - r,
                a = e.left - i,
                l = e.width + a,
                c = Math.max(l, t.width),
                u = window.innerWidth - Jg,
                d = Ru(i, [Jg, Math.max(Jg, u - c)]);
              s.style.minWidth = l + "px", s.style.left = d + "px"
            } else {
              const r = t.right - o.right,
                i = window.innerWidth - n.right - r,
                a = window.innerWidth - e.right - i,
                l = e.width + a,
                c = Math.max(l, t.width),
                u = window.innerWidth - Jg,
                d = Ru(i, [Jg, Math.max(Jg, u - c)]);
              s.style.minWidth = l + "px", s.style.right = d + "px"
            }
            const a = p(),
              l = window.innerHeight - 2 * Jg,
              u = v.scrollHeight,
              d = window.getComputedStyle(c),
              h = parseInt(d.borderTopWidth, 10),
              f = parseInt(d.paddingTop, 10),
              g = parseInt(d.borderBottomWidth, 10),
              _ = h + f + u + parseInt(d.paddingBottom, 10) + g,
              w = Math.min(5 * y.offsetHeight, _),
              x = window.getComputedStyle(v),
              E = parseInt(x.paddingTop, 10),
              P = parseInt(x.paddingBottom, 10),
              S = e.top + e.height / 2 - Jg,
              C = l - S,
              T = y.offsetHeight / 2,
              O = h + f + (y.offsetTop + T),
              N = _ - O;
            if (O <= S) {
              const e = a.length > 0 && y === a[a.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = c.clientHeight - v.offsetTop - v.offsetHeight,
                n = O + Math.max(C, T + (e ? P : 0) + t + g);
              s.style.height = n + "px"
            } else {
              const e = a.length > 0 && y === a[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(S, h + v.offsetTop + (e ? E : 0) + T) + N;
              s.style.height = t + "px", v.scrollTop = O - S + v.offsetTop
            }
            s.style.margin = `${Jg}px 0`, s.style.minHeight = w + "px", s.style.maxHeight = l + "px", r?.(), requestAnimationFrame((() => m.current = !0))
          }
        }), [p, i.trigger, i.valueNode, s, c, v, y, b, i.dir, r]);
        Mu((() => w()), [w]);
        const [x, E] = h.useState();
        Mu((() => {
          c && E(window.getComputedStyle(c).zIndex)
        }), [c]);
        const P = h.useCallback((e => {
          e && !0 === g.current && (w(), _?.(), g.current = !1)
        }), [w, _]);
        return (0, u.jsx)(av, {
          scope: n,
          contentWrapper: s,
          shouldExpandOnScrollRef: m,
          onScrollButtonChange: P,
          children: (0, u.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: x
            },
            children: (0, u.jsx)(Gu.sG.div, {
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
      ov.displayName = "SelectItemAlignedPosition";
      var iv = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = Jg,
          ...i
        } = e, a = Bg(n);
        return (0, u.jsx)(Tp, {
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
      iv.displayName = "SelectPopperPosition";
      var [av, sv] = Mg(Zg, {}), lv = "SelectViewport", cv = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          nonce: r,
          ...o
        } = e, i = tv(lv, n), a = sv(lv, n), s = (0, Iu.s)(t, i.onViewportChange), l = h.useRef(0);
        return (0, u.jsxs)(u.Fragment, {
          children: [(0, u.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }), (0, u.jsx)(Ig.Slot, {
            scope: n,
            children: (0, u.jsx)(Gu.sG.div, {
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
              onScroll: Au(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = a;
                if (r?.current && n) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * Jg,
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
      cv.displayName = lv;
      var uv = "SelectGroup",
        [dv, hv] = Mg(uv);
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Lh();
        return (0, u.jsx)(dv, {
          scope: n,
          id: o,
          children: (0, u.jsx)(Gu.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
          })
        })
      })).displayName = uv;
      var fv = "SelectLabel";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = hv(fv, n);
        return (0, u.jsx)(Gu.sG.div, {
          id: o.id,
          ...r,
          ref: t
        })
      })).displayName = fv;
      var pv = "SelectItem",
        [mv, gv] = Mg(pv),
        vv = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            value: r,
            disabled: o = !1,
            textValue: i,
            ...a
          } = e, s = Fg(pv, n), l = tv(pv, n), c = s.value === r, [d, f] = h.useState(i ?? ""), [p, m] = h.useState(!1), g = (0, Iu.s)(t, (e => l.itemRefCallback?.(e, r, o))), v = Lh(), y = h.useRef("touch"), b = () => {
            o || (s.onValueChange(r), s.onOpenChange(!1))
          };
          if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, u.jsx)(mv, {
            scope: n,
            value: r,
            disabled: o,
            textId: v,
            isSelected: c,
            onItemTextChange: h.useCallback((e => {
              f((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, u.jsx)(Ig.ItemSlot, {
              scope: n,
              value: r,
              disabled: o,
              textValue: d,
              children: (0, u.jsx)(Gu.sG.div, {
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
                onFocus: Au(a.onFocus, (() => m(!0))),
                onBlur: Au(a.onBlur, (() => m(!1))),
                onClick: Au(a.onClick, (() => {
                  "mouse" !== y.current && b()
                })),
                onPointerUp: Au(a.onPointerUp, (() => {
                  "mouse" === y.current && b()
                })),
                onPointerDown: Au(a.onPointerDown, (e => {
                  y.current = e.pointerType
                })),
                onPointerMove: Au(a.onPointerMove, (e => {
                  y.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: Au(a.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                })),
                onKeyDown: Au(a.onKeyDown, (e => {
                  "" !== l.searchRef?.current && " " === e.key || (Rg.includes(e.key) && b(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      vv.displayName = pv;
      var yv = "SelectItemText",
        bv = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            ...i
          } = e, a = Fg(yv, n), s = tv(yv, n), l = gv(yv, n), c = Ug(yv, n), [d, f] = h.useState(null), p = (0, Iu.s)(t, (e => f(e)), l.onItemTextChange, (e => s.itemTextRefCallback?.(e, l.value, l.disabled))), m = d?.textContent, g = h.useMemo((() => (0, u.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: m
          }, l.value)), [l.disabled, l.value, m]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: y
          } = c;
          return Mu((() => (v(g), () => y(g))), [v, y, g]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Gu.sG.span, {
              id: l.textId,
              ...i,
              ref: p
            }), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? Ut.createPortal(i.children, a.valueNode) : null]
          })
        }));
      bv.displayName = yv;
      var _v = "SelectItemIndicator";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return gv(_v, n).isSelected ? (0, u.jsx)(Gu.sG.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      })).displayName = _v;
      var wv = "SelectScrollUpButton";
      h.forwardRef(((e, t) => {
        const n = tv(wv, e.__scopeSelect),
          r = sv(wv, e.__scopeSelect),
          [o, i] = h.useState(!1),
          a = (0, Iu.s)(t, r.onScrollButtonChange);
        return Mu((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, u.jsx)(Ev, {
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
      })).displayName = wv;
      var xv = "SelectScrollDownButton";
      h.forwardRef(((e, t) => {
        const n = tv(xv, e.__scopeSelect),
          r = sv(xv, e.__scopeSelect),
          [o, i] = h.useState(!1),
          a = (0, Iu.s)(t, r.onScrollButtonChange);
        return Mu((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              i(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, u.jsx)(Ev, {
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
      })).displayName = xv;
      var Ev = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: r,
          ...o
        } = e, i = tv("SelectScrollButton", n), a = h.useRef(null), s = Dg(n), l = h.useCallback((() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }), []);
        return h.useEffect((() => () => l()), [l]), Mu((() => {
          const e = s().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [s]), (0, u.jsx)(Gu.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: Au(o.onPointerDown, (() => {
            null === a.current && (a.current = window.setInterval(r, 50))
          })),
          onPointerMove: Au(o.onPointerMove, (() => {
            i.onItemLeave?.(), null === a.current && (a.current = window.setInterval(r, 50))
          })),
          onPointerLeave: Au(o.onPointerLeave, (() => {
            l()
          }))
        })
      }));
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, u.jsx)(Gu.sG.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var Pv = "SelectArrow";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Bg(n), i = Fg(Pv, n), a = tv(Pv, n);
        return i.open && "popper" === a.position ? (0, u.jsx)(Op, {
          ...o,
          ...r,
          ref: t
        }) : null
      })).displayName = Pv;
      var Sv = h.forwardRef((({
        __scopeSelect: e,
        value: t,
        ...n
      }, r) => {
        const o = h.useRef(null),
          i = (0, Iu.s)(r, o),
          a = zu(t);
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
        }), [a, t]), (0, u.jsx)(Gu.sG.select, {
          ...n,
          style: {
            ...Rp.Qg,
            ...n.style
          },
          ref: i,
          defaultValue: t
        })
      }));

      function Cv(e) {
        return "" === e || void 0 === e
      }

      function Tv(e) {
        const t = xh(e),
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

      function Ov(e, t, n) {
        const r = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === r.length && (i = i.filter((e => e !== n)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(r.toLowerCase())));
        return l !== n ? l : void 0
      }
      Sv.displayName = "SelectBubbleInput";
      var Nv = Gg,
        jv = Xg,
        Lv = Wg,
        Rv = $g,
        Av = Yg,
        Iv = Qg,
        Dv = cv,
        kv = vv,
        Mv = bv,
        Hv = "ScrollArea",
        [Bv, Vv] = Du(Hv),
        [Fv, zv] = Bv(Hv),
        Uv = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            type: r = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...a
          } = e, [s, l] = h.useState(null), [c, d] = h.useState(null), [f, p] = h.useState(null), [m, g] = h.useState(null), [v, y] = h.useState(null), [b, _] = h.useState(0), [w, x] = h.useState(0), [E, P] = h.useState(!1), [S, C] = h.useState(!1), T = (0, Iu.s)(t, (e => l(e))), O = Fu(o);
          return (0, u.jsx)(Fv, {
            scope: n,
            type: r,
            dir: O,
            scrollHideDelay: i,
            scrollArea: s,
            viewport: c,
            onViewportChange: d,
            content: f,
            onContentChange: p,
            scrollbarX: m,
            onScrollbarXChange: g,
            scrollbarXEnabled: E,
            onScrollbarXEnabledChange: P,
            scrollbarY: v,
            onScrollbarYChange: y,
            scrollbarYEnabled: S,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: _,
            onCornerHeightChange: x,
            children: (0, u.jsx)(Gu.sG.div, {
              dir: O,
              ...a,
              ref: T,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": b + "px",
                "--radix-scroll-area-corner-height": w + "px",
                ...e.style
              }
            })
          })
        }));
      Uv.displayName = Hv;
      var Gv = "ScrollAreaViewport",
        qv = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            children: r,
            nonce: o,
            ...i
          } = e, a = zv(Gv, n), s = h.useRef(null), l = (0, Iu.s)(t, s, a.onViewportChange);
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, u.jsx)(Gu.sG.div, {
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
                children: r
              })
            })]
          })
        }));
      qv.displayName = Gv;
      var Xv = "ScrollAreaScrollbar",
        Kv = h.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = zv(Xv, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: a
          } = o, s = "horizontal" === e.orientation;
          return h.useEffect((() => (s ? i(!0) : a(!0), () => {
            s ? i(!1) : a(!1)
          })), [s, i, a]), "hover" === o.type ? (0, u.jsx)(Wv, {
            ...r,
            ref: t,
            forceMount: n
          }) : "scroll" === o.type ? (0, u.jsx)($v, {
            ...r,
            ref: t,
            forceMount: n
          }) : "auto" === o.type ? (0, u.jsx)(Yv, {
            ...r,
            ref: t,
            forceMount: n
          }) : "always" === o.type ? (0, u.jsx)(Zv, {
            ...r,
            ref: t
          }) : null
        }));
      Kv.displayName = Xv;
      var Wv = h.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = zv(Xv, e.__scopeScrollArea), [i, a] = h.useState(!1);
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
          }), [o.scrollArea, o.scrollHideDelay]), (0, u.jsx)(jp, {
            present: n || i,
            children: (0, u.jsx)(Yv, {
              "data-state": i ? "visible" : "hidden",
              ...r,
              ref: t
            })
          })
        })),
        $v = h.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = zv(Xv, e.__scopeScrollArea), i = "horizontal" === e.orientation, a = my((() => l("SCROLL_END")), 100), [s, l] = (c = {
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
              let n = e[t];
              const r = () => {
                const r = e[t];
                n !== r && (l("SCROLL"), a()), n = r
              };
              return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }), [o.viewport, i, l, a]), (0, u.jsx)(jp, {
            present: n || "hidden" !== s,
            children: (0, u.jsx)(Zv, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...r,
              ref: t,
              onPointerEnter: Au(e.onPointerEnter, (() => l("POINTER_ENTER"))),
              onPointerLeave: Au(e.onPointerLeave, (() => l("POINTER_LEAVE")))
            })
          })
        })),
        Yv = h.forwardRef(((e, t) => {
          const n = zv(Xv, e.__scopeScrollArea),
            {
              forceMount: r,
              ...o
            } = e,
            [i, a] = h.useState(!1),
            s = "horizontal" === e.orientation,
            l = my((() => {
              if (n.viewport) {
                const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                a(s ? e : t)
              }
            }), 10);
          return gy(n.viewport, l), gy(n.content, l), (0, u.jsx)(jp, {
            present: r || i,
            children: (0, u.jsx)(Zv, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        Zv = h.forwardRef(((e, t) => {
          const {
            orientation: n = "vertical",
            ...r
          } = e, o = zv(Xv, e.__scopeScrollArea), i = h.useRef(null), a = h.useRef(0), [s, l] = h.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = cy(s.viewport, s.content), d = {
            ...r,
            sizes: s,
            onSizesChange: l,
            hasThumb: Boolean(c > 0 && c < 1),
            onThumbChange: e => i.current = e,
            onThumbPointerUp: () => a.current = 0,
            onThumbPointerDown: e => a.current = e
          };

          function f(e, t) {
            return function(e, t, n, r = "ltr") {
              const o = uy(n),
                i = t || o / 2,
                a = o - i,
                s = n.scrollbar.paddingStart + i,
                l = n.scrollbar.size - n.scrollbar.paddingEnd - a,
                c = n.content - n.viewport;
              return hy([s, l], "ltr" === r ? [0, c] : [-1 * c, 0])(e)
            }(e, a.current, s, t)
          }
          return "horizontal" === n ? (0, u.jsx)(Qv, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = dy(o.viewport.scrollLeft, s, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = f(e, o.dir))
            }
          }) : "vertical" === n ? (0, u.jsx)(Jv, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = dy(o.viewport.scrollTop, s);
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
        Qv = h.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, i = zv(Xv, e.__scopeScrollArea), [a, s] = h.useState(), l = h.useRef(null), c = (0, Iu.s)(t, l, i.onScrollbarXChange);
          return h.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, u.jsx)(ny, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: n,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": uy(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
              if (i.viewport) {
                const r = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(r), fy(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && r({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: ly(a.paddingLeft),
                  paddingEnd: ly(a.paddingRight)
                }
              })
            }
          })
        })),
        Jv = h.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, i = zv(Xv, e.__scopeScrollArea), [a, s] = h.useState(), l = h.useRef(null), c = (0, Iu.s)(t, l, i.onScrollbarYChange);
          return h.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, u.jsx)(ny, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: n,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": uy(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
              if (i.viewport) {
                const r = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(r), fy(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && r({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: ly(a.paddingTop),
                  paddingEnd: ly(a.paddingBottom)
                }
              })
            }
          })
        })),
        [ey, ty] = Bv(Xv),
        ny = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            sizes: r,
            hasThumb: o,
            onThumbChange: i,
            onThumbPointerUp: a,
            onThumbPointerDown: s,
            onThumbPositionChange: l,
            onDragScroll: c,
            onWheelScroll: d,
            onResize: f,
            ...p
          } = e, m = zv(Xv, n), [g, v] = h.useState(null), y = (0, Iu.s)(t, (e => v(e))), b = h.useRef(null), _ = h.useRef(""), w = m.viewport, x = r.content - r.viewport, E = xh(d), P = xh(l), S = my(f, 10);

          function C(e) {
            if (b.current) {
              const t = e.clientX - b.current.left,
                n = e.clientY - b.current.top;
              c({
                x: t,
                y: n
              })
            }
          }
          return h.useEffect((() => {
            const e = e => {
              const t = e.target,
                n = g?.contains(t);
              n && E(e, x)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [w, g, x, E]), h.useEffect(P, [r, P]), gy(g, S), gy(m.content, S), (0, u.jsx)(ey, {
            scope: n,
            scrollbar: g,
            hasThumb: o,
            onThumbChange: xh(i),
            onThumbPointerUp: xh(a),
            onThumbPositionChange: P,
            onThumbPointerDown: xh(s),
            children: (0, u.jsx)(Gu.sG.div, {
              ...p,
              ref: y,
              style: {
                position: "absolute",
                ...p.style
              },
              onPointerDown: Au(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = g.getBoundingClientRect(), _.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), C(e))
              })),
              onPointerMove: Au(e.onPointerMove, C),
              onPointerUp: Au(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = _.current, m.viewport && (m.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        ry = "ScrollAreaThumb",
        oy = h.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = ty(ry, e.__scopeScrollArea);
          return (0, u.jsx)(jp, {
            present: n || o.hasThumb,
            children: (0, u.jsx)(iy, {
              ref: t,
              ...r
            })
          })
        })),
        iy = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            style: r,
            ...o
          } = e, i = zv(ry, n), a = ty(ry, n), {
            onThumbPositionChange: s
          } = a, l = (0, Iu.s)(t, (e => a.onThumbChange(e))), c = h.useRef(void 0), d = my((() => {
            c.current && (c.current(), c.current = void 0)
          }), 100);
          return h.useEffect((() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (d(), !c.current) {
                  const t = py(e, s);
                  c.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [i.viewport, d, s]), (0, u.jsx)(Gu.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...r
            },
            onPointerDownCapture: Au(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = e.clientY - t.top;
              a.onThumbPointerDown({
                x: n,
                y: r
              })
            })),
            onPointerUp: Au(e.onPointerUp, a.onThumbPointerUp)
          })
        }));
      oy.displayName = ry;
      var ay = "ScrollAreaCorner";
      h.forwardRef(((e, t) => {
        const n = zv(ay, e.__scopeScrollArea),
          r = Boolean(n.scrollbarX && n.scrollbarY);
        return "scroll" !== n.type && r ? (0, u.jsx)(sy, {
          ...e,
          ref: t
        }) : null
      })).displayName = ay;
      var sy = h.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: n,
          ...r
        } = e, o = zv(ay, n), [i, a] = h.useState(0), [s, l] = h.useState(0), c = Boolean(i && s);
        return gy(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        })), gy(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        })), c ? (0, u.jsx)(Gu.sG.div, {
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

      function ly(e) {
        return e ? parseInt(e, 10) : 0
      }

      function cy(e, t) {
        const n = e / t;
        return isNaN(n) ? 0 : n
      }

      function uy(e) {
        const t = cy(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18)
      }

      function dy(e, t, n = "ltr") {
        const r = uy(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - r,
          l = Ru(e, "ltr" === n ? [0, a] : [-1 * a, 0]);
        return hy([0, a], [0, s])(l)
      }

      function hy(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }

      function fy(e, t) {
        return e > 0 && e < t
      }
      var py = (e, t = () => {}) => {
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

      function my(e, t) {
        const n = xh(e),
          r = h.useRef(0);
        return h.useEffect((() => () => window.clearTimeout(r.current)), []), h.useCallback((() => {
          window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
        }), [n, t])
      }

      function gy(e, t) {
        const n = xh(t);
        Mu((() => {
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
      var vy = Uv,
        yy = qv,
        by = Kv,
        _y = oy,
        wy = "foundry_hcgxh_uaq1gwo";
      const xy = (0, h.forwardRef)((({
          children: e,
          label: t,
          hint: n,
          placeholder: r,
          description: o,
          testId: i,
          hideLabel: a,
          hideDescription: s = !1,
          hideRequiredAsterisk: l,
          hideDividers: c,
          errorMessage: d,
          value: f,
          defaultValue: p,
          onValueChange: g,
          open: v,
          defaultOpen: y,
          onOpenChange: b,
          isRequired: _,
          isDisabled: w,
          isReadOnly: x,
          className: E,
          labelledBy: P,
          renderPortal: S,
          container: C
        }, T) => {
          const O = (0, h.useRef)(null),
            N = (0, z.UP)(O, T),
            j = (0, h.useId)(),
            L = (0, h.useId)(),
            [R = !1, I] = (0, z.ic)({
              prop: v,
              defaultProp: y,
              onChange: b
            });
          return (0, u.jsxs)("div", {
            className: (0, A.$)("foundry_hcgxh_uaq1gw0", E),
            children: [(t && !a || n) && (0, u.jsxs)("div", {
              className: "foundry_hcgxh_uaq1gw1",
              children: [(0, u.jsx)(m.s6, {
                enabled: !!a,
                children: (0, u.jsx)(V, {
                  size: "SM",
                  className: (0, A.$)("foundry_hcgxh_uaq1gw2", w && wy),
                  asChild: !0,
                  children: (0, u.jsxs)("label", {
                    id: j,
                    children: [t, _ && !l && (0, u.jsx)("span", {
                      className: "foundry_hcgxh_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), n && (0, u.jsx)(V, {
                size: "XS",
                className: (0, A.$)("foundry_hcgxh_uaq1gw3", w && wy),
                children: n
              })]
            }), (0, u.jsxs)(Nv, {
              required: _,
              disabled: w,
              open: R,
              onOpenChange: () => I(!x && !R),
              value: f,
              defaultValue: p,
              onValueChange: g,
              children: [(0, u.jsxs)(jv, {
                className: (0, A.$)("foundry_hcgxh_uaq1gw5 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10", !!d && "foundry_hcgxh_uaq1gw7", x && "foundry_hcgxh_uaq1gw6"),
                ref: N,
                "data-testid": i,
                "aria-activedescendant": f,
                "aria-labelledby": P || j,
                "aria-controls": L,
                children: [(0, u.jsx)("span", {
                  className: "foundry_hcgxh_uaq1gw8",
                  children: (0, u.jsx)(Lv, {
                    placeholder: r,
                    "aria-label": f
                  })
                }), (0, u.jsx)(Rv, {
                  asChild: !0,
                  className: (0, A.$)("foundry_hcgxh_uaq1gw9", (x || w) && "foundry_hcgxh_uaq1gwa"),
                  children: R ? (0, u.jsx)(F.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, u.jsx)(F.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, u.jsx)(Py, {
                renderPortal: S,
                container: C,
                children: (0, u.jsx)(Iv, {
                  id: L,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_hcgxh_uaq1gwb",
                  children: (0, u.jsxs)(vy, {
                    className: "foundry_hcgxh_uaq1gwk",
                    type: "auto",
                    children: [(0, u.jsx)(Dv, {
                      className: (0, A.$)("foundry_hcgxh_uaq1gwc", c && "foundry_hcgxh_uaq1gwd"),
                      asChild: !0,
                      children: (0, u.jsx)(yy, {
                        className: "foundry_hcgxh_uaq1gwl",
                        style: {
                          overflowY: void 0
                        },
                        children: e
                      })
                    }), (0, u.jsx)(by, {
                      className: "foundry_hcgxh_uaq1gwm",
                      orientation: "vertical",
                      children: (0, u.jsx)(_y, {
                        className: "foundry_hcgxh_uaq1gwn"
                      })
                    })]
                  })
                })
              })]
            }), o && (0, u.jsx)(m.s6, {
              enabled: !!d || s || 0 === o.length,
              children: (0, u.jsx)(V, {
                size: "SM",
                className: (0, A.$)("foundry_hcgxh_uaq1gwf", w && wy),
                children: o
              })
            }), d && (0, u.jsxs)(V, {
              size: "SM",
              appearance: "bold",
              className: "foundry_hcgxh_uaq1gwg",
              children: [(0, u.jsx)(F.X, {
                size: "MD",
                label: "",
                className: "foundry_hcgxh_uaq1gwh"
              }), d]
            })]
          })
        })),
        Ey = (0, h.forwardRef)((({
          label: e,
          value: t,
          icon: n,
          iconLabel: r,
          iconPosition: o,
          isDisabled: i,
          testId: a
        }, s) => {
          const l = (0, h.useRef)(null),
            c = (0, z.UP)(l, s),
            d = n && F[n];
          return (0, u.jsxs)(kv, {
            value: t,
            className: "foundry_hcgxh_uaq1gwe foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10",
            ref: c,
            disabled: i,
            "data-testid": a,
            children: [d && "left" === o && (0, u.jsx)(d, {
              className: "foundry_hcgxh_uaq1gwi",
              label: r || "",
              size: "LG"
            }), (0, u.jsx)(Mv, {
              asChild: !0,
              children: (0, u.jsx)("span", {
                className: "foundry_hcgxh_uaq1gwp",
                children: e
              })
            }), d && "right" === o && (0, u.jsx)(d, {
              label: r || "",
              size: "LG",
              className: "foundry_hcgxh_uaq1gwj"
            })]
          })
        })),
        Py = ({
          renderPortal: e = !0,
          container: t,
          children: n
        }) => e ? (0, u.jsx)(Av, {
          container: t,
          children: n
        }) : (0, u.jsx)(u.Fragment, {
          children: n
        }),
        Sy = ({
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
        Cy = ({
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
        Ty = ({
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
        Oy = ({
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
        Ny = ({
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
        jy = ({
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

      function Ly(e = {}) {
        let {
          isReadOnly: t
        } = e, [n, r] = ge(e.isSelected, e.defaultSelected || !1, e.onChange);
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

      function Ry(e, t, n) {
        let {
          isDisabled: r = !1,
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
        } = Kt({
          isDisabled: r
        }), {
          pressProps: p,
          isPressed: m
        } = Kt({
          onPress() {
            var e;
            t.toggle(), null === (e = n.current) || void 0 === e || e.focus()
          },
          isDisabled: r || o
        }), {
          focusableProps: g
        } = dt(e, n), v = me(h, g), y = K(e, {
          labelable: !0
        });
        return Y(n, t.isSelected, t.setSelected), {
          labelProps: me(p, {
            onClick: e => e.preventDefault()
          }),
          inputProps: me(y, {
            "aria-invalid": d || "invalid" === u || void 0,
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
          isInvalid: d || "invalid" === u
        }
      }

      function Ay(e) {
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

      function Iy(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Dy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Iy(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Ay(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Iy(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function ky(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var My = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Hy = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Dy(Dy({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) My(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ky(e.variantClassNames, (e => ky(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        By = Hy({
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
        Vy = Hy({
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
        Fy = Hy({
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
        zy = Hy({
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
      const Uy = (0, h.forwardRef)((({
          isChecked: e,
          defaultChecked: t,
          onCheckedChange: n,
          label: o,
          description: i,
          size: a = "MD",
          appearance: s = "primary",
          isIndeterminate: l,
          hideLabel: c,
          testId: f,
          errorMessage: p,
          className: g,
          ...v
        }, y) => {
          const b = (0, h.useRef)(null),
            _ = (0, z.UP)(b, y),
            w = (0, h.useId)(),
            {
              setSelected: x,
              ...E
            } = Ly({
              isSelected: e,
              defaultSelected: t,
              onChange: n
            }),
            {
              inputProps: P,
              isDisabled: S,
              isReadOnly: C,
              isInvalid: T,
              isSelected: O
            } = function(e, t, n) {
              let r = bt({
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
                  isSelected: c,
                  isPressed: u,
                  isDisabled: d,
                  isReadOnly: f
                } = Ry({
                  ...e,
                  isInvalid: o
                }, t, n);
              ht(e, r, n);
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
              } = Kt({
                isDisabled: d || f,
                onPress() {
                  let {
                    [yt]: t
                  } = e, {
                    commitValidation: n
                  } = t || r;
                  n()
                }
              });
              return {
                labelProps: me(s, v),
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
            N = (0, d.v6)({
              ...P,
              "aria-checked": O,
              className: g
            }, {
              className: "foundry_hcgxh_11gbdty1"
            }),
            j = l ? r[`Dash${a}`] : r[`Check${a}`],
            L = T && !!p;
          return (0, u.jsxs)("label", {
            className: "foundry_hcgxh_11gbdty0",
            children: [(0, u.jsxs)("div", {
              className: Vy({
                size: a
              }),
              children: [(0, u.jsx)(m.s6, {
                children: (0, u.jsx)("input", {
                  ...N,
                  ref: _
                })
              }), (0, u.jsx)("div", {
                className: By({
                  size: a,
                  appearance: s
                }),
                "aria-hidden": "true",
                "data-state": l ? "mixed" : O ? "checked" : "unchecked",
                "data-disabled": S || C,
                "data-testid": f,
                children: (0, u.jsx)("span", {
                  className: "foundry_hcgxh_11gbdtyc",
                  children: (O || l) && (0, u.jsx)(j, {
                    "aria-hidden": "true"
                  })
                })
              })]
            }), (0, u.jsx)(m.s6, {
              enabled: !!c,
              children: (0, u.jsxs)("div", {
                className: zy({
                  size: a,
                  isDisabled: S
                }),
                children: [(0, u.jsx)("p", {
                  className: Fy({
                    size: a
                  }),
                  children: o
                }), i && !L && (0, u.jsx)("p", {
                  className: "foundry_hcgxh_11gbdtym foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                  children: i
                }), L && (0, u.jsx)("p", {
                  className: "foundry_hcgxh_11gbdtyn foundry_hcgxh_11gbdtym foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                  children: p
                })]
              })
            })]
          })
        })),
        Gy = new WeakMap;

      function qy(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = Q(e);
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
        }(e, t) && (!e.parentElement || qy(e.parentElement, e))
      }

      function Xy(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function Ky(e, t, n) {
        let r = (null == t ? void 0 : t.tabbable) ? Ee : xe,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = Z(o),
          a = function(e, t, n, r) {
            return e.createTreeWalker(t, n, r)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !r(e) || !qy(e) || n && !Xy(e, n) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a
      }
      class Wy {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new $y({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && Xy(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n && (n.removeChild(t), r.size > 0 && r.forEach((e => n && n.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new Wy;
          var n;
          for (let r of this.traverse()) t.addTreeNode(r.scopeRef, null !== (n = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, r.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new $y({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class $y {
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
      new Wy;
      const Yy = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        Zy = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Qy(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return Yy.has(t.script)
        }
        let t = e.split("-")[0];
        return Zy.has(t)
      }
      const Jy = Symbol.for("react-aria.i18n.locale");

      function eb() {
        let e = "undefined" != typeof window && window[Jy] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Qy(e) ? "rtl" : "ltr"
        }
      }
      let tb = eb(),
        nb = new Set;

      function rb() {
        tb = eb();
        for (let e of nb) e(tb)
      }
      const ob = h.createContext(null);

      function ib() {
        let e = function() {
          let e = le(),
            [t, n] = (0, h.useState)(tb);
          return (0, h.useEffect)((() => (0 === nb.size && window.addEventListener("languagechange", rb), nb.add(n), () => {
            nb.delete(n), 0 === nb.size && window.removeEventListener("languagechange", rb)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, h.useContext)(ob) || e
      }

      function ab(e, t) {
        let {
          name: n,
          isReadOnly: r,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: s = "aria"
        } = e, {
          direction: l
        } = ib(), {
          isInvalid: c,
          validationErrors: u,
          validationDetails: d
        } = t.displayValidation, {
          labelProps: f,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: g
        } = ye({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || u
        }), v = K(e, {
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
          } = Ht(), l = (0, h.useCallback)((e => {
            e.currentTarget.contains(e.target) && i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, s(), n && n(e), o && o(!1))
          }), [n, o, i, s]), c = Oe(l), u = (0, h.useCallback)((e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = Z(e.target),
              n = nt(t);
            if (!i.current.isFocusWithin && n === rt(e.nativeEvent)) {
              r && r(e), o && o(!0), i.current.isFocusWithin = !0, c(e);
              let n = e.currentTarget;
              a(t, "focus", (e => {
                if (i.current.isFocusWithin && !tt(n, e.target)) {
                  let r = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  Te(r, n);
                  let o = Ce(r);
                  l(o)
                }
              }), {
                capture: !0
              })
            }
          }), [r, o, c, a, l]);
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
          onBlurWithin(n) {
            var r;
            null === (r = e.onBlur) || void 0 === r || r.call(e, n), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = he(n);
        return Gy.set(t, {
          name: b,
          descriptionId: m.id,
          errorMessageId: g.id,
          validationBehavior: s
        }), {
          radioGroupProps: me(v, {
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
              let r, o = Ky(e.currentTarget, {
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
          isInvalid: c,
          validationErrors: u,
          validationDetails: d
        }
      }
      let sb = Math.round(1e10 * Math.random()),
        lb = 0;

      function cb(e) {
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

      function ub(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function db(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ub(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = cb(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ub(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function hb(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var fb = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        pb = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = db(db({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) fb(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hb(e.variantClassNames, (e => hb(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        mb = pb({
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
      const gb = (0, h.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        vb = (0, h.forwardRef)((({
          label: e,
          description: t,
          size: n = "MD",
          appearance: r = "primary",
          hideLabel: o,
          isRequired: i,
          hideRequiredAsterisk: a,
          testId: s,
          className: l,
          errorMessage: c,
          orientation: f = "vertical",
          ...p
        }, g) => {
          const {
            children: v
          } = p, y = (0, h.useRef)(null), b = (0, z.UP)(y, g), _ = (0, h.useId)(), w = function(e) {
            let t = (0, h.useMemo)((() => e.name || `radio-group-${sb}-${++lb}`), [e.name]);
            var n;
            let [r, o] = ge(e.value, null !== (n = e.defaultValue) && void 0 !== n ? n : null, e.onChange), [i, a] = (0, h.useState)(null), s = bt({
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
          }(p), x = {
            state: w,
            size: n,
            appearance: r
          }, {
            radioGroupProps: E,
            labelProps: P,
            descriptionProps: S,
            isInvalid: C,
            errorMessageProps: T
          } = ab({
            ...p,
            id: p.id || _,
            label: e,
            isRequired: i,
            description: t,
            orientation: f
          }, w), O = (0, d.v6)({
            ...E,
            className: l
          }, {
            className: "foundry_hcgxh_njguqn0",
            "aria-errormessage": T?.id
          }), N = C && !!c;
          return (0, u.jsxs)("div", {
            ref: b,
            "data-testid": s,
            ...O,
            children: [(0, u.jsx)(m.s6, {
              enabled: !!o,
              children: (0, u.jsxs)("div", {
                className: "foundry_hcgxh_njguqn7",
                children: [(0, u.jsx)(V, {
                  size: "SM",
                  ...P,
                  className: "foundry_hcgxh_njguqn8 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdy foundry_hcgxh_tdsdcd10",
                  asChild: !0,
                  children: (0, u.jsxs)("label", {
                    children: [e, i && !a && (0, u.jsx)("span", {
                      className: "foundry_hcgxh_njguqn9",
                      children: "*"
                    })]
                  })
                }), t && (0, u.jsx)(V, {
                  size: "XS",
                  ...S,
                  className: "foundry_hcgxh_njguqna foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                  children: t
                })]
              })
            }), (0, u.jsx)("div", {
              className: mb({
                size: n,
                orientation: f
              }),
              children: (0, u.jsx)(gb.Provider, {
                value: x,
                children: v
              })
            }), N && (0, u.jsxs)(V, {
              size: "SM",
              appearance: "bold",
              ...T,
              className: "foundry_hcgxh_njguqnb",
              children: [(0, u.jsx)(F.X, {
                size: "MD",
                label: "",
                className: "foundry_hcgxh_njguqnc"
              }), c]
            })]
          })
        })),
        yb = ({
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
        bb = ({
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
        _b = ({
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
      var wb = pb({
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
        xb = pb({
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
        Eb = pb({
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
        Pb = pb({
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
      const Sb = (0, h.forwardRef)((({
        label: e,
        description: t,
        hideLabel: n,
        testId: r,
        className: i,
        ...a
      }, s) => {
        const l = (0, h.useRef)(null),
          c = (0, z.UP)(l, s),
          d = (0, h.useId)(),
          f = (0, h.useContext)(gb),
          {
            state: p,
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
                pressProps: c,
                isPressed: u
              } = Kt({
                isDisabled: s
              }),
              {
                pressProps: d,
                isPressed: h
              } = Kt({
                isDisabled: s,
                onPress() {
                  var e;
                  t.setSelectedValue(r), null === (e = n.current) || void 0 === e || e.focus()
                }
              }),
              {
                focusableProps: f
              } = dt(me(e, {
                onFocus: () => t.setLastFocusedValue(r)
              }), n),
              p = me(c, f),
              m = K(e, {
                labelable: !0
              }),
              g = -1;
            null != t.selectedValue ? t.selectedValue === r && (g = 0) : t.lastFocusedValue !== r && null != t.lastFocusedValue || (g = 0), s && (g = void 0);
            let {
              name: v,
              descriptionId: y,
              errorMessageId: b,
              validationBehavior: _
            } = Gy.get(t);
            return Y(n, t.selectedValue, t.setSelectedValue), ht({
              validationBehavior: _
            }, t, n), {
              labelProps: me(d, {
                onClick: e => e.preventDefault()
              }),
              inputProps: me(m, {
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
              isPressed: u || h
            }
          }({
            ...a,
            "aria-label": e,
            id: a.id || d
          }, p, l),
          b = y.checked,
          _ = y.disabled || p?.isReadOnly,
          w = o[`Dot${v}`];
        return (0, u.jsxs)("label", {
          className: (0, A.$)("foundry_hcgxh_1pfduet0", i),
          children: [(0, u.jsxs)("div", {
            className: Eb({
              size: v
            }),
            children: [(0, u.jsx)(m.s6, {
              children: (0, u.jsx)("input", {
                ...y,
                ref: c,
                className: "foundry_hcgxh_1pfduet1"
              })
            }), (0, u.jsx)("div", {
              className: xb({
                appearance: g
              }),
              "aria-hidden": "true",
              "data-state": b ? "checked" : "unchecked",
              "data-disabled": _,
              "data-testid": r,
              children: (0, u.jsx)("span", {
                className: "foundry_hcgxh_1pfduet9",
                children: b && (0, u.jsx)(w, {})
              })
            })]
          }), (0, u.jsx)(m.s6, {
            enabled: !!n,
            children: (0, u.jsxs)("div", {
              className: Pb({
                size: v
              }),
              children: [(0, u.jsx)("p", {
                className: wb({
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

      function Cb(e) {
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

      function Tb(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Ob(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Tb(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Cb(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tb(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Nb(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var jb = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Lb = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Ob(Ob({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) jb(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Nb(e.variantClassNames, (e => Nb(e, (e => e.split(" ")[0]))))
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
      const Rb = (0, h.forwardRef)((({
          className: e,
          orientation: t = "horizontal",
          thickness: n = "thin",
          isDecorative: r = !1,
          asChild: o,
          testId: i,
          ...a
        }, s) => {
          const l = "horizontal" !== t || r ? "div" : "hr",
            c = r || "hr" === l ? void 0 : "separator",
            d = o ? m.DX : l;
          return (0, u.jsx)(d, {
            ref: s,
            className: (0, A.$)(Lb({
              thickness: n,
              orientation: t
            }), e),
            role: c,
            "aria-orientation": t,
            "data-testid": i,
            ...a
          })
        })),
        Ab = ({
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
        Ib = ({
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
        Db = ({
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

      function kb(e) {
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

      function Mb(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Hb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mb(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = kb(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mb(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Bb(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Vb = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Fb = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Hb(Hb({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Vb(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Bb(e.variantClassNames, (e => Bb(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        zb = Fb({
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
        Ub = Fb({
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
        Gb = Fb({
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
        qb = Fb({
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
        Xb = Fb({
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
        Kb = Fb({
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
      const Wb = (0, h.forwardRef)((({
        label: e,
        description: t,
        size: n = "MD",
        appearance: r = "primary",
        showIcons: o = !1,
        selectedIcon: i,
        unselectedIcon: a,
        hideLabel: s,
        testId: l,
        className: c,
        ...d
      }, f) => {
        const p = (0, h.useRef)(null),
          g = (0, z.UP)(p, f),
          v = (0, h.useId)(),
          y = Ly(d),
          {
            inputProps: b,
            isDisabled: _,
            isReadOnly: w,
            isSelected: x
          } = function(e, t, n) {
            let {
              labelProps: r,
              inputProps: o,
              isSelected: i,
              isPressed: a,
              isDisabled: s,
              isReadOnly: l
            } = Ry(e, t, n);
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
          }, y, p),
          E = i ? F[i] : Db,
          P = a ? F[a] : Ib;
        return (0, u.jsxs)("label", {
          className: (0, A.$)("foundry_hcgxh_okz6z20", c),
          children: [(0, u.jsxs)("div", {
            className: Xb({
              appearance: r
            }),
            "data-state": x ? "selected" : "unselected",
            "data-disabled": _ || w,
            "data-testid": l,
            children: [(0, u.jsx)(m.s6, {
              children: (0, u.jsx)("input", {
                ...b,
                ref: g
              })
            }), (0, u.jsxs)("div", {
              className: qb({
                size: n
              }),
              "aria-hidden": "true",
              children: [(0, u.jsx)("div", {
                className: zb({
                  size: n,
                  isSelected: x
                }),
                children: (0, u.jsx)(Ab, {})
              }), o && (0, u.jsxs)(u.Fragment, {
                children: [(0, u.jsx)("div", {
                  className: Ub({
                    size: n,
                    isSelected: x,
                    position: "left"
                  }),
                  children: (0, u.jsx)(E, {
                    label: ""
                  })
                }), (0, u.jsx)("div", {
                  className: Ub({
                    size: n,
                    isSelected: x,
                    position: "right"
                  }),
                  children: (0, u.jsx)(P, {
                    label: ""
                  })
                })]
              })]
            })]
          }), (0, u.jsx)(m.s6, {
            enabled: !!s,
            children: (0, u.jsxs)("div", {
              className: Kb({
                size: n,
                isDisabled: _
              }),
              children: [(0, u.jsx)("p", {
                className: Gb({
                  size: n
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
      Wb.displayName = "Switch";
      const $b = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        ...n
      }, r) => {
        const o = e ? m.DX : "h1",
          i = (0, d.v6)({
            className: "foundry_hcgxh_1pi1yv40 foundry_hcgxh_tdsdcd1 foundry_hcgxh_tdsdcd0"
          }, n);
        return (0, u.jsx)(o, {
          ref: r,
          "data-testid": t,
          ...i
        })
      }));

      function Yb(e) {
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

      function Zb(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Qb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zb(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Yb(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zb(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Jb(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var e_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        t_ = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Qb(Qb({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) e_(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jb(e.variantClassNames, (e => Jb(e, (e => e.split(" ")[0]))))
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
      const n_ = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const a = e ? m.DX : "p",
          s = (0, d.v6)({
            className: t_({
              size: r,
              appearance: n
            })
          }, o);
        return (0, u.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      }));

      function r_(e) {
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

      function o_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function i_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o_(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = r_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function a_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var s_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        l_ = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = i_(i_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) s_(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return a_(e.variantClassNames, (e => a_(e, (e => e.split(" ")[0]))))
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
      const c_ = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...r
      }, o) => {
        const i = e ? m.DX : "p",
          a = (0, d.v6)({
            className: l_({
              appearance: n
            })
          }, r);
        return (0, u.jsx)(i, {
          ref: o,
          "data-testid": t,
          ...a
        })
      }));
      var u_ = n(97249);

      function d_(e, t) {
        var n = {};
        if ("object" == typeof t) {
          var r = e;
          (0, u_.Bx)(t, ((e, t) => {
            if (null != e) {
              var o = (0, u_.Jt)(r, t);
              n[(0, u_.Tm)(o)] = String(e)
            }
          }))
        } else {
          var o = e;
          for (var i in o) {
            var a = o[i];
            null != a && (n[(0, u_.Tm)(i)] = a)
          }
        }
        return Object.defineProperty(n, "toString", {
          value: function() {
            return Object.keys(this).map((e => "".concat(e, ":").concat(this[e]))).join(";")
          },
          writable: !1
        }), n
      }

      function h_(e) {
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

      function f_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function p_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? f_(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = h_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function m_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      n(49639);
      var g_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        v_ = "var(--foundry_hcgxh_9dxgbc2)",
        y_ = "var(--foundry_hcgxh_9dxgbc3)",
        b_ = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = p_(p_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) g_(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return m_(e.variantClassNames, (e => m_(e, (e => e.split(" ")[0]))))
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
        __ = "var(--foundry_hcgxh_9dxgbc0)",
        w_ = "var(--foundry_hcgxh_9dxgbc1)";
      const x_ = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        children: n,
        colorOverride: r,
        label: o,
        size: i = "MD",
        ...a
      }, s) => {
        const l = (0, tn.zQ)(),
          c = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
          h = (0, d.v6)({
            className: b_({
              size: c
            }),
            "data-testid": t,
            style: d_({
              [__]: r?.pulseColorBackground,
              [w_]: r?.pulseColorForeground,
              [v_]: r?.gradientColorBackground,
              [y_]: r?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, a),
          f = e ? m.DX : "div";
        return (0, u.jsx)(f, {
          ref: s,
          ...h,
          children: e ? (0, u.jsx)(m.xV, {
            children: n
          }) : (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("div", {
              className: "foundry_hcgxh_9dxgbcd"
            }), (0, u.jsx)("div", {
              className: "foundry_hcgxh_9dxgbcc"
            })]
          })
        })
      }));

      function E_(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function P_(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
          if (Array.isArray(e) || (n = function(e, t) {
              if (e) {
                if ("string" == typeof e) return E_(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E_(e, t) : void 0
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

      function S_(e, t, n) {
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

      function C_(e) {
        return C_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, C_(e)
      }

      function T_() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (T_ = function() {
          return !!e
        })()
      }

      function O_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function N_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? O_(Object(n), !0).forEach((function(t) {
            S_(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function j_(e, t) {
        return j_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, j_(e, t)
      }

      function L_(e, t) {
        var n, r = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          a = r,
          s = "",
          l = P_(e);
        try {
          for (l.s(); !(n = l.n()).done;) {
            var c, u = n.value,
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

      function R_(e, t) {
        var n, r = t.mask,
          o = t.replacement,
          i = t.separate,
          a = t.showMask,
          s = 0,
          l = "",
          c = P_(r);
        try {
          for (c.s(); !(n = c.n()).done;) {
            var u = n.value;
            if (!a && void 0 === e[s]) break;
            Object.prototype.hasOwnProperty.call(o, u) && void 0 !== e[s] ? l += e[s++] : l += u
          }
        } catch (e) {
          c.e(e)
        } finally {
          c.f()
        }
        if (i && !a) {
          for (var d = r.length - 1; d >= 0 && l[d] === r[d]; d--);
          l = l.slice(0, d + 1)
        }
        return l
      }

      function A_(e, t) {
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

      function I_(e) {
        return e.length > 0 ? S_({}, e, /./) : {}
      }

      function D_(e, t) {
        for (var n = t.start, r = void 0 === n ? 0 : n, o = t.end, i = t.mask, a = t.replacement, s = t.separate, l = e.slice(r, o), c = i.slice(r, o), u = "", d = 0; d < c.length; d++) {
          var h = Object.prototype.hasOwnProperty.call(a, c[d]);
          h && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : h && s && (u += c[d])
        }
        return u
      }

      function k_(e, t) {
        var n = t.mask,
          r = t.replacement,
          o = "string" == typeof r ? I_(r) : r,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return R_(L_(e, {
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
      var M_ = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function H_(e) {
        return M_.includes(e) ? "\\".concat(e) : e
      }

      function B_(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function V_(e, t, n) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function F_(e, t, n) {
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

      function z_(e) {
        return z_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, z_(e)
      }

      function U_() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (U_ = function() {
          return !!e
        })()
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
            F_(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function X_(e, t) {
        return X_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, X_(e, t)
      }

      function K_(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return K_ = function(e) {
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
              if (U_()) return Reflect.construct.apply(null, arguments);
              var r = [null];
              r.push.apply(r, t);
              var o = new(e.bind.apply(e, r));
              return n && X_(o, n.prototype), o
            }(e, arguments, z_(this).constructor)
          }
          return n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), X_(n, e)
        }, K_(e)
      }
      var W_, $_ = function(e) {
          function t(e) {
            var n;
            return B_(this, t), (n = function(e, t, n) {
              return t = z_(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, U_() ? Reflect.construct(t, n || [], z_(e).constructor) : t.apply(e, n))
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
            }), t && X_(e, t)
          }(t, e), V_(t)
        }(K_(Error)),
        Y_ = ["options"],
        Z_ = ["text", "email", "tel", "search", "url"],
        Q_ = V_((function e(t) {
          var n = t.init,
            r = t.tracking;
          B_(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (Z_.includes(e.type)) {
              var i = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                a = i.initialValue,
                s = void 0 === a ? "" : a,
                l = i.controlled,
                c = void 0 !== l && l,
                u = n({
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
              Object.defineProperty(e, "value", q_(q_({}, g), {}, {
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
                    if (p.cachedId === p.id) throw new $_("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      a = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === a || null === s) throw new $_("The selection attributes have not been initialized.");
                    var l, c = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = c.length), a > m.selectionStart ? l = "insert" : a <= m.selectionStart && a < m.selectionEnd ? l = "deleteBackward" : a === m.selectionEnd && i.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > c.length) throw new $_("Input type detection error.");
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
                      y = r({
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
                      }(y, Y_);
                    e.value = _.value, e.setSelectionRange(_.selectionStart, _.selectionEnd), f.value = _.value, f.options = b, m.selectionStart = _.selectionStart, m.selectionEnd = _.selectionEnd, null === (n = e._valueTracker) || void 0 === n || null === (o = n.setValue) || void 0 === o || o.call(n, c)
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
      W_ = Q_, Object.defineProperty(W_.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var J_, ew = ["track", "modify"];

      function tw(e) {
        var t, n, r, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? I_(e.replacement) : null !== (n = e.replacement) && void 0 !== n ? n : {},
          showMask: null !== (r = e.showMask) && void 0 !== r && r,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var nw = function() {
        function e() {
          var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, n) {
            return t = C_(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, T_() ? Reflect.construct(t, n || [], C_(e).constructor) : t.apply(e, n))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                r = e.controlled,
                o = tw(n),
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
                l = tw(n),
                c = l.track,
                u = l.modify,
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
                }(l, ew),
                h = d.mask,
                f = d.replacement,
                p = d.showMask,
                m = d.separate,
                g = N_(N_({}, "insert" === t ? {
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
                v = null == c ? void 0 : c(g);
              if (!1 === v) throw new $_("Custom tracking stop.");
              null === v ? i = "" : !0 !== v && void 0 !== v && (i = v);
              var y = null == u ? void 0 : u(g);
              void 0 !== (null == y ? void 0 : y.mask) && (h = y.mask), void 0 !== (null == y ? void 0 : y.replacement) && (f = "string" == typeof(null == y ? void 0 : y.replacement) ? I_(null == y ? void 0 : y.replacement) : y.replacement), void 0 !== (null == y ? void 0 : y.showMask) && (p = y.showMask), void 0 !== (null == y ? void 0 : y.separate) && (m = y.separate);
              var b = D_(r, N_({
                  end: a
                }, o)),
                _ = D_(r, N_({
                  start: s
                }, o)),
                w = RegExp("[^".concat(Object.keys(f).join(""), "]"), "g"),
                x = h.replace(w, "");
              if (b && (b = L_(b, {
                  replacementChars: x,
                  replacement: f,
                  separate: m
                }), x = x.slice(b.length)), i && (i = L_(i, {
                  replacementChars: x,
                  replacement: f,
                  separate: !1
                }), x = x.slice(i.length)), "insert" === t && "" === i) throw new $_("The character does not match the key value of the `replacement` object.");
              if (m) {
                var E = h.slice(a, s).replace(w, ""),
                  P = E.length - i.length;
                P < 0 ? _ = _.slice(-P) : P > 0 && (_ = E.slice(-P) + _)
              }
              _ && (_ = L_(_, {
                replacementChars: x,
                replacement: f,
                separate: m
              }));
              var S = R_(b + i + _, {
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
                    c = e.separate,
                    u = A_(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter((function(e) {
                      var t = e.type;
                      return "input" === t || c && "replacement" === t
                    })),
                    d = null === (t = u[s.length + a.length - 1]) || void 0 === t ? void 0 : t.index,
                    h = null === (n = u[s.length - 1]) || void 0 === n ? void 0 : n.index,
                    f = null === (r = u[s.length + a.length]) || void 0 === r ? void 0 : r.index;
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
            return k_(e, tw(n))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? I_(r) : r;
              return A_(k_(e, {
                mask: n,
                replacement: o
              }), {
                mask: n,
                replacement: o
              })
            }(e, tw(n))
          }, t.unformat = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? I_(r) : r,
                i = D_(e, {
                  mask: n,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return L_(i, {
                replacementChars: n.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, tw(n))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var n = t.mask, r = t.replacement, o = "string" == typeof r ? I_(r) : r, i = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, s = "", l = 0; l < n.length; l++) {
                var c = n[l];
                0 === l && (s = "^"), i && (s += "("), s += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(a ? "(?!".concat(H_(c), ")") : "", "(").concat(o[c].source, ")") : H_(c), l === n.length - 1 && (i && (s += ")?".repeat(n.length)), s += "$")
              }
              return s
            }(e, tw(n))
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
            }), t && j_(e, t)
          }(e, Q_),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

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
      J_ = nw, Object.defineProperty(J_.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var sw = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        lw = e => {
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
            for (var [c, u] of e.compoundVariants) sw(c, r, e.defaultVariants) && (n += " " + u);
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
        },
        cw = "foundry_hcgxh_8oytzos",
        uw = lw({
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
        dw = lw({
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
        hw = lw({
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
        fw = lw({
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
        pw = lw({
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
        mw = lw({
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
      const gw = (e, t, n) => {
          const r = [];
          return e && r.push(e), t && r.push(t), n && r.push(n), r.join(" ")
        },
        vw = (0, h.createContext)(null);

      function yw() {
        const e = (0, h.useContext)(vw);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const bw = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          isDisabled: r = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          isInvalid: a = !1,
          ...s
        }, l) => {
          const [c, f] = (0, h.useState)("text"), p = (0, h.useId)(), g = (0, h.useId)(), v = (0, h.useId)(), y = (0, h.useId)(), b = (0, d.v6)({
            "data-testid": n,
            className: "foundry_hcgxh_8oytzo3"
          }, s), _ = e ? m.DX : "div";
          return (0, u.jsx)(vw.Provider, {
            value: {
              isDisabled: r,
              isReadOnly: o,
              isRequired: i,
              isInvalid: a,
              labelId: p,
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
        _w = (0, h.forwardRef)((({
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
            inputId: c,
            labelId: h
          } = yw(), f = (0, d.v6)({
            id: i.id || h,
            htmlFor: i.htmlFor || c,
            "data-testid": e,
            className: mw({
              isDisabled: s
            })
          }, i), p = t ? m.DX : "label";
          return (0, u.jsx)(m.s6, {
            enabled: r,
            children: (0, u.jsx)(V, {
              size: "SM",
              asChild: !0,
              children: (0, u.jsxs)(p, {
                ref: a,
                ...f,
                children: [n, l && !o && (0, u.jsx)("span", {
                  className: "foundry_hcgxh_8oytzo7",
                  children: "*"
                })]
              })
            })
          })
        })),
        ww = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i
          } = yw(), a = (0, d.v6)({
            "data-testid": e,
            className: hw({
              isDisabled: i
            })
          }, r), s = t ? m.DX : "span";
          return (0, u.jsx)(V, {
            size: "XS",
            asChild: !0,
            children: (0, u.jsx)(s, {
              ref: o,
              ...a,
              children: n
            })
          })
        })),
        xw = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: a,
            isInvalid: s
          } = yw(), l = (0, d.v6)({
            "data-testid": e,
            className: (0, A.$)(uw({
              isDisabled: i,
              isReadOnly: a,
              isInvalid: s
            }), "foundry_hcgxh_8oytzo1")
          }, r), c = t ? m.DX : "div";
          return (0, u.jsx)(c, {
            ref: o,
            ...l,
            children: n
          })
        })),
        Ew = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          "aria-labelledby": n,
          "aria-describedby": r,
          type: o,
          mask: i,
          replacement: a,
          showMask: s = !0,
          track: l,
          ...c
        }, f) => {
          const {
            isDisabled: p,
            isReadOnly: g,
            isRequired: v,
            labelId: y,
            inputId: b,
            descriptionId: _,
            isInvalid: w,
            errorId: x,
            inputType: E,
            setInputType: P
          } = yw();
          (0, h.useEffect)((() => P(o ?? "text")), []);
          const S = (0, d.v6)({
              disabled: p,
              readOnly: g,
              required: v,
              id: b,
              type: E,
              spellCheck: !1,
              "aria-labelledby": gw(y, n),
              "aria-describedby": gw(_, r, w ? x : void 0),
              "data-testid": e,
              className: (0, A.$)(pw({
                isDisabled: p,
                isReadOnly: g
              }), "foundry_hcgxh_8oytzo2"),
              ...w && {
                "aria-invalid": !0,
                "aria-errormessage": x
              },
              ...p && {
                "aria-disabled": !0
              },
              ...v && {
                "aria-required": !0
              }
            }, c),
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
                }(s, new nw(l.current))
              }), [])
            }({
              mask: i,
              replacement: a,
              showMask: s,
              track: l
            }),
            T = (0, z.UP)(i && a ? C : null, f),
            O = t ? m.DX : "input";
          return (0, u.jsx)(O, {
            ref: T,
            ...S
          })
        })),
        Pw = (0, h.forwardRef)((({
          icon: e,
          asChild: t,
          testId: n,
          side: r,
          ...o
        }, i) => {
          const {
            isDisabled: a
          } = yw(), s = (0, d.v6)({
            size: "LG",
            "data-testid": n,
            className: (0, A.$)(fw({
              side: r,
              isDisabled: a
            }), "foundry_hcgxh_8oytzo0")
          }, o), l = t ? m.DX : F[e];
          return (0, u.jsx)(l, {
            ref: i,
            ...s
          })
        })),
        Sw = (0, h.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: n
          } = yw(), r = (0, d.v6)({
            isDisabled: n,
            size: "SM",
            appearance: "ghost",
            className: cw
          }, e);
          return (0, u.jsx)(lh, {
            ref: t,
            ...r
          })
        })),
        Cw = (0, h.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: n,
            inputType: r,
            setInputType: o
          } = yw(), i = "password" === r, a = i ? "Reveal Password" : "Hide Password", s = (0, d.v6)({
            isDisabled: n,
            size: "SM",
            appearance: "ghost",
            className: cw,
            label: a,
            icon: i ? "Eye" : "EyeOff",
            onPress: () => {
              o(i ? "text" : "password")
            }
          }, e);
          return (0, u.jsx)(fm, {
            side: "bottom",
            portal: !1,
            align: "end",
            content: (0, u.jsx)(V, {
              size: "SM",
              children: a
            }),
            children: (0, u.jsx)(lh, {
              ref: t,
              ...s
            })
          })
        })),
        Tw = (0, h.forwardRef)((({
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
            descriptionId: c,
            errorId: h
          } = yw(), f = (0, d.v6)({
            id: c,
            asChild: !0,
            "data-testid": e,
            className: dw({
              isDisabled: s
            })
          }, i), p = t ? m.DX : "p", g = F.X;
          return (0, u.jsxs)("div", {
            className: "foundry_hcgxh_8oytzot",
            children: [(0, u.jsx)(m.s6, {
              enabled: r || l,
              children: (0, u.jsx)(V, {
                size: "SM",
                ref: a,
                ...f,
                children: (0, u.jsx)(p, {
                  children: n
                })
              })
            }), l && o && (0, u.jsxs)(V, {
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

      function Ow(e, t) {
        let {
          elementType: n = "a",
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ...l
        } = e, c = {};
        "a" !== n && (c = {
          role: "link",
          tabIndex: s ? void 0 : 0
        });
        let {
          focusableProps: u
        } = dt(e, t), {
          pressProps: d,
          isPressed: h
        } = Kt({
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ref: t
        }), f = K(l, {
          labelable: !0
        }), p = me(u, d), m = Vt();
        return {
          isPressed: h,
          linkProps: me(f, zt(e), {
            ...p,
            ...c,
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

      function Nw(e) {
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

      function jw(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Lw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jw(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Nw(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jw(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Rw(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Aw = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Iw = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Lw(Lw({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Aw(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Rw(e.variantClassNames, (e => Rw(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Dw = Iw({
          defaultClassName: "foundry_hcgxh_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_hcgxh_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        kw = Iw({
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
        Mw = Iw({
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
      const Hw = (0, h.createContext)(null);

      function Bw() {
        const e = (0, h.useContext)(Hw);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Vw = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          status: n,
          background: r,
          ...o
        }, i) => {
          const a = e ? m.DX : "div",
            s = (0, d.v6)(o, {
              className: Mw({
                status: n,
                background: r
              })
            });
          return (0, u.jsx)(Hw.Provider, {
            value: {
              status: n,
              background: r
            },
            children: (0, u.jsx)(a, {
              ref: i,
              "data-testid": t,
              ...s,
              ...o
            })
          })
        })),
        Fw = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? m.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_hcgxh_1m368qha"
            });
          return (0, u.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        })),
        zw = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? m.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_hcgxh_1m368qhb"
            });
          return (0, u.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        })),
        Uw = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Gw = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const {
            status: r
          } = Bw(), o = e || Uw[r], i = F[o], a = (0, d.v6)(t, {
            className: kw({
              status: r
            })
          });
          return (0, u.jsx)("div", {
            className: "foundry_hcgxh_1m368qhc",
            children: (0, u.jsx)(i, {
              title: "",
              ref: n,
              ...a
            })
          })
        })),
        qw = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? m.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_hcgxh_1m368qhi"
            });
          return (0, u.jsx)(P, {
            level: 6,
            asChild: !0,
            children: (0, u.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...i
            })
          })
        })),
        Xw = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? m.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_hcgxh_1m368qhj"
            });
          return (0, u.jsx)(V, {
            size: "SM",
            asChild: !0,
            children: (0, u.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...i
            })
          })
        })),
        Kw = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, h.useRef)(null),
            a = (0, z.UP)(i, o),
            s = e ? m.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = Ow(r, i),
            f = (0, d.v6)(l, {
              className: "foundry_hcgxh_1m368qhk foundry_hcgxh_1d5mo5m0"
            });
          return (0, u.jsx)(V, {
            size: "SM",
            appearance: "hyperlink",
            asChild: !0,
            children: (0, u.jsx)(s, {
              "data-pressed": c,
              "data-testid": n,
              ref: a,
              ...f,
              children: t
            })
          })
        })),
        Ww = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = e ? m.DX : "div",
            a = (0, d.v6)(r, {
              className: "foundry_hcgxh_1m368qhl"
            });
          return (0, u.jsx)(i, {
            ref: o,
            "data-testid": n,
            ...a,
            children: t
          })
        })),
        $w = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          className: n,
          ...r
        }, o) => {
          const i = e ? m.DX : "div";
          return (0, u.jsx)(V, {
            size: "SM",
            asChild: !0,
            children: (0, u.jsx)(i, {
              ref: o,
              "data-testid": t,
              className: (0, A.$)(n, "foundry_hcgxh_1m368qho"),
              ...r
            })
          })
        })),
        Yw = (0, h.forwardRef)((({
          testId: e,
          label: t = "close alert",
          ...n
        }, r) => {
          const {
            background: o
          } = Bw(), i = (0, d.v6)(n, {
            className: Dw({
              hasBackground: "none" !== o
            })
          });
          return (0, u.jsx)(lh, {
            ref: r,
            label: t,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "XS",
            ...i
          })
        }));

      function Zw(e) {
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

      function Qw(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Jw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qw(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Zw(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qw(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function ex(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var tx = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        nx = "foundry_hcgxh_qmpv6yt",
        rx = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Jw(Jw({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) tx(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ex(e.variantClassNames, (e => ex(e, (e => e.split(" ")[0]))))
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

      function ox(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function ix(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        return n.length === r.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && n.every((n => {
          const r = e[n],
            o = t[n];
          return "function" == typeof r ? `${r}` == `${o}` : ox(r) && ox(o) ? ix(r, o) : r === o
        })))
      }

      function ax(e) {
        return e.concat().sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => e.options))
      }

      function sx(e) {
        return "number" == typeof e
      }

      function lx(e) {
        return "string" == typeof e
      }

      function cx(e) {
        return "boolean" == typeof e
      }

      function ux(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function dx(e) {
        return Math.abs(e)
      }

      function hx(e) {
        return Math.sign(e)
      }

      function fx(e, t) {
        return dx(e - t)
      }

      function px(e) {
        return bx(e).map(Number)
      }

      function mx(e) {
        return e[gx(e)]
      }

      function gx(e) {
        return Math.max(0, e.length - 1)
      }

      function vx(e, t) {
        return t === gx(e)
      }

      function yx(e, t = 0) {
        return Array.from(Array(e), ((e, n) => t + n))
      }

      function bx(e) {
        return Object.keys(e)
      }

      function _x(e, t) {
        return [e, t].reduce(((e, t) => (bx(t).forEach((n => {
          const r = e[n],
            o = t[n],
            i = ux(r) && ux(o);
          e[n] = i ? _x(r, o) : o
        })), e)), {})
      }

      function wx(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function xx() {
        let e = [];
        const t = {
          add: function(n, r, o, i = {
            passive: !0
          }) {
            let a;
            if ("addEventListener" in n) n.addEventListener(r, o, i), a = () => n.removeEventListener(r, o, i);
            else {
              const e = n;
              e.addListener(o), a = () => e.removeListener(o)
            }
            return e.push(a), t
          },
          clear: function() {
            e = e.filter((e => e()))
          }
        };
        return t
      }

      function Ex(e = 0, t = 0) {
        const n = dx(e - t);

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

      function Px(e, t, n) {
        const {
          constrain: r
        } = Ex(0, e), o = e + 1;
        let i = a(t);

        function a(e) {
          return n ? dx((o + e) % o) : r(e)
        }

        function s() {
          return i
        }

        function l() {
          return Px(e, s(), n)
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

      function Sx(e, t, n, r, o, i, a, s, l, c, u, d, h, f, p, m, g, v, y) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, E = xx(), P = xx(), S = Ex(50, 225).constrain(f.measure(20)), C = {
          mouse: 300,
          touch: 400
        }, T = {
          mouse: 500,
          touch: 600
        }, O = p ? 43 : 25;
        let N = !1,
          j = 0,
          L = 0,
          R = !1,
          A = !1,
          I = !1,
          D = !1;

        function k(e) {
          if (!wx(e, r) && e.touches.length >= 2) return M(e);
          const t = i.readPoint(e),
            n = i.readPoint(e, b),
            a = fx(t, j),
            l = fx(n, L);
          if (!A && !D) {
            if (!e.cancelable) return M(e);
            if (A = a > l, !A) return M(e)
          }
          const u = i.pointerMove(e);
          a > m && (I = !0), c.useFriction(.3).useDuration(.75), s.start(), o.add(_(u)), e.preventDefault()
        }

        function M(e) {
          const t = u.byDistance(0, !1).index !== d.get(),
            n = i.pointerUp(e) * (p ? T : C)[D ? "mouse" : "touch"],
            r = function(e, t) {
              const n = d.add(-1 * hx(e)),
                r = u.byDistance(e, !p).distance;
              return p || dx(e) < S ? r : g && t ? .5 * r : u.byIndex(n.get(), 0).distance
            }(_(n), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (dx(e) <= dx(t)) return 0;
              const n = fx(dx(e), dx(t));
              return dx(n / e)
            }(n, r),
            a = O - 10 * o,
            s = v + o / 50;
          A = !1, R = !1, P.clear(), c.useDuration(a).useFriction(s), l.distance(r, !p), D = !1, h.emit("pointerUp")
        }

        function H(e) {
          I && (e.stopPropagation(), e.preventDefault(), I = !1)
        }
        return {
          init: function(e) {
            if (!y) return;

            function s(s) {
              (cx(y) || y(e, s)) && function(e) {
                const s = wx(e, r);
                D = s, I = p && s && !e.buttons && N, N = fx(o.get(), a.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (R = !0, i.pointerDown(e), c.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = D ? n : t;
                  P.add(e, "touchmove", k, x).add(e, "touchend", M).add(e, "mousemove", k, x).add(e, "mouseup", M)
                }(), j = i.readPoint(e), L = i.readPoint(e, b), h.emit("pointerDown"))
              }(s)
            }
            const l = t;
            E.add(l, "dragstart", (e => e.preventDefault()), x).add(l, "touchmove", (() => {}), x).add(l, "touchend", (() => {})).add(l, "touchstart", s).add(l, "mousedown", s).add(l, "touchcancel", M).add(l, "contextmenu", M).add(l, "click", H, !0)
          },
          destroy: function() {
            E.clear(), P.clear()
          },
          pointerDown: function() {
            return R
          }
        }
      }

      function Cx(e, t) {
        let n, r;

        function o(e) {
          return e.timeStamp
        }

        function i(n, r) {
          const o = "client" + ("x" === (r || e.scroll) ? "X" : "Y");
          return (wx(n, t) ? n : n.touches[0])[o]
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
            return a && !s && dx(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function Tx(e, t, n, r, o, i, a) {
        const s = [e].concat(r);
        let l, c, u = [],
          d = !1;

        function h(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            i && (c = h(e), u = r.map(h), l = new ResizeObserver((n => {
              (cx(i) || i(o, n)) && function(n) {
                for (const i of n) {
                  if (d) return;
                  const n = i.target === e,
                    a = r.indexOf(i.target),
                    s = n ? c : u[a];
                  if (dx(h(n ? e : r[a]) - s) >= .5) {
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

      function Ox(e, t, n, r, o) {
        const i = o.measure(10),
          a = o.measure(50),
          s = Ex(.1, .99);
        let l = !1;

        function c() {
          return !l && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(o) {
            if (!c()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              u = dx(e[l] - t.get()),
              d = n.get() - t.get(),
              h = s.constrain(u / a);
            n.subtract(d * h), !o && dx(d) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function Nx(e, t, n, r) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: a,
            reachedMax: s
          } = Ex(o, i),
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

      function jx(e) {
        let t = e;

        function n(e) {
          return sx(e) ? e : e.get()
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

      function Lx(e, t) {
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

      function Rx(e, t, n, r, o, i, a, s, l) {
        const c = px(o),
          u = px(o).reverse(),
          d = function() {
            const e = a[0];
            return p(f(u, e), n, !1)
          }().concat(function() {
            const e = t - a[0] - 1;
            return p(f(c, e), -n, !0)
          }());

        function h(e, t) {
          return e.reduce(((e, t) => e - o[t]), t)
        }

        function f(e, t) {
          return e.reduce(((e, n) => h(e, t) > 0 ? e.concat([n]) : e), [])
        }

        function p(o, a, c) {
          const u = function(e) {
            return i.map(((n, o) => ({
              start: n - r[o] + .5 + e,
              end: n + t - .5 + e
            })))
          }(a);
          return o.map((t => {
            const r = c ? 0 : -n,
              o = c ? n : 0,
              i = c ? "end" : "start",
              a = u[t][i];
            return {
              index: t,
              loopPoint: a,
              slideLocation: jx(-1),
              translate: Lx(e, l[t]),
              target: () => s.get() > a ? r : o
            }
          }))
        }
        const m = {
          canLoop: function() {
            return d.every((({
              index: e
            }) => {
              const n = c.filter((t => t !== e));
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

      function Ax(e, t, n) {
        let r, o = !1;
        return {
          init: function(i) {
            n && (r = new MutationObserver((e => {
              o || (cx(n) || n(i, e)) && function(e) {
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

      function Ix(e, t, n, r, o, i, a) {
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
        }, P = E.measure(t), S = n.map(E.measure), C = function(e, t) {
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
        }(l, c), T = C.measureSize(P), O = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(T), N = function(e, t) {
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
              return lx(e) ? n[e](r) : e(t, r, o)
            }
          };
          return o
        }(s, T), j = !d && !!y, L = d || !!y, {
          slideSizes: R,
          slideSizesWithGaps: A,
          startGap: I,
          endGap: D
        } = function(e, t, n, r, o, i) {
          const {
            measureSize: a,
            startEdge: s,
            endEdge: l
          } = e, c = n[0] && o, u = function() {
            if (!c) return 0;
            const e = n[0];
            return dx(t[s] - e[s])
          }(), d = function() {
            if (!c) return 0;
            const e = i.getComputedStyle(mx(r));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), h = n.map(a), f = n.map(((e, t, n) => {
            const r = !t,
              o = vx(n, t);
            return r ? h[t] + u : o ? h[t] + d : n[t + 1][s] - e[s]
          })).map(dx);
          return {
            slideSizes: h,
            slideSizesWithGaps: f,
            startGap: u,
            endGap: d
          }
        }(C, P, S, n, L, o), k = function(e, t, n, r, o, i, a, s, l) {
          const {
            startEdge: c,
            endEdge: u,
            direction: d
          } = e, h = sx(n), f = {
            groupSlides: function(e) {
              return h ? function(e, t) {
                return px(e).filter((e => e % t == 0)).map((n => e.slice(n, n + t)))
              }(e, n) : function(e) {
                return e.length ? px(e).reduce(((n, h, f) => {
                  const p = mx(n) || 0,
                    m = 0 === p,
                    g = h === gx(e),
                    v = o[c] - i[p][c],
                    y = o[c] - i[h][u],
                    b = !r && m ? d(a) : 0,
                    _ = dx(y - (!r && g ? d(s) : 0) - (v + b));
                  return f && _ > t + l && n.push(h), g && n.push(e.length), n
                }), []).map(((t, n, r) => {
                  const o = Math.max(r[n - 1] || 0);
                  return e.slice(o, t)
                })) : []
              }(e)
            }
          };
          return f
        }(C, T, g, d, P, S, I, D, 2), {
          snaps: M,
          snapsAligned: H
        } = function(e, t, n, r, o) {
          const {
            startEdge: i,
            endEdge: a
          } = e, {
            groupSlides: s
          } = o, l = s(r).map((e => mx(e)[a] - e[0][i])).map(dx).map(t.measure), c = r.map((e => n[i] - e[i])).map((e => -dx(e))), u = s(c).map((e => e[0])).map(((e, t) => e + l[t]));
          return {
            snaps: c,
            snapsAligned: u
          }
        }(C, N, P, S, k), B = -mx(M) + mx(A), {
          snapsContained: V,
          scrollContainLimit: F
        } = function(e, t, n, r) {
          const o = Ex(-t + e, 0),
            i = n.map(((e, t) => {
              const {
                min: r,
                max: i
              } = o, a = o.constrain(e), l = !t, c = vx(n, t);
              return l ? i : c || s(r, a) ? r : s(i, a) ? i : a
            })).map((e => parseFloat(e.toFixed(3)))),
            a = function() {
              const e = i[0],
                t = mx(i);
              return Ex(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function s(e, t) {
            return fx(e, t) <= 1
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
        }(T, B, H, y), z = j ? V : H, {
          limit: U
        } = function(e, t, n) {
          const r = t[0];
          return {
            limit: Ex(n ? r - e : mx(t), r)
          }
        }(B, z, d), G = Px(gx(z), u, d), q = G.clone(), X = px(n), K = function(e, t, n, r) {
          const o = xx(),
            i = 1e3 / 60;
          let a = null,
            s = 0,
            l = 0;

          function c(e) {
            if (!l) return;
            a || (a = e, n(), n());
            const o = e - a;
            for (a = e, s += o; s >= i;) n(), s -= i;
            r(s / i), l && (l = t.requestAnimationFrame(c))
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
            update: n,
            render: r
          }
        }(r, o, (() => (({
          dragHandler: e,
          scrollBody: t,
          scrollBounds: n,
          options: {
            loop: r
          }
        }) => {
          r || n.constrain(e.pointerDown()), t.seek()
        })(se)), (e => (({
          scrollBody: e,
          translate: t,
          location: n,
          offsetLocation: r,
          previousLocation: o,
          scrollLooper: i,
          slideLooper: a,
          dragHandler: s,
          animation: l,
          eventHandler: c,
          scrollBounds: u,
          options: {
            loop: d
          }
        }, h) => {
          const f = e.settled(),
            p = !u.shouldConstrain(),
            m = d ? f : f && p,
            g = m && !s.pointerDown();
          g && l.stop();
          const v = n.get() * h + o.get() * (1 - h);
          r.set(v), d && (i.loop(e.direction()), a.loop()), t.to(r.get()), g && c.emit("settle"), m || c.emit("scroll")
        })(se, e))), W = z[G.get()], $ = jx(W), Y = jx(W), Z = jx(W), Q = jx(W), J = function(e, t, n, r, o) {
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
              const t = r.get() - e.get();
              let o = 0;
              return s ? (n.set(e), i += t / s, i *= l, c += i, e.add(i), o = c - u) : (i = 0, n.set(r), e.set(r), o = t), a = hx(o), u = c, f
            },
            settled: function() {
              return dx(r.get() - t.get()) < .001
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
            return e.concat().sort(((e, t) => dx(e) - dx(t)))[0]
          }

          function c(t, r) {
            const o = [t, t + n, t - n];
            if (!e) return t;
            if (!r) return l(o);
            const i = o.filter((e => hx(e) === r));
            return i.length ? l(i) : mx(o) - n
          }
          const u = {
            byDistance: function(n, r) {
              const l = o.get() + n,
                {
                  index: u,
                  distance: d
                } = function(n) {
                  const r = e ? a(n) : s(n),
                    o = t.map(((e, t) => ({
                      diff: c(e - r, 0),
                      index: t
                    }))).sort(((e, t) => dx(e.diff) - dx(t.diff))),
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
                index: u,
                distance: n
              } : {
                index: u,
                distance: n + c(t[u] - d, 0)
              }
            },
            byIndex: function(e, n) {
              return {
                index: e,
                distance: c(t[e] - o.get(), n)
              }
            },
            shortcut: c
          };
          return u
        }(d, z, B, U, Q), te = function(e, t, n, r, o, i, a) {
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
        }(K, G, q, J, ee, Q, a), ne = function(e) {
          const {
            max: t,
            length: n
          } = e;
          return {
            get: function(e) {
              return n ? (e - t) / -n : 0
            }
          }
        }(U), re = xx(), oe = function(e, t, n, r) {
          const o = {};
          let i, a = null,
            s = null,
            l = !1;
          const c = {
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
            get: function(e = !0) {
              if (e && a) return a;
              if (!e && s) return s;
              const t = function(e) {
                return bx(o).reduce(((t, n) => {
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
          return c
        }(t, n, a, m), {
          slideRegistry: ie
        } = function(e, t, n, r, o, i) {
          const {
            groupSlides: a
          } = o, {
            min: s,
            max: l
          } = r, c = function() {
            const r = a(i),
              o = !e || "keepSnaps" === t;
            return 1 === n.length ? [i] : o ? r : r.slice(s, l).map(((e, t, n) => {
              const r = !t,
                o = vx(n, t);
              return r ? yx(mx(n[0]) + 1) : o ? yx(gx(i) - mx(n)[0] + 1, mx(n)[0]) : e
            }))
          }();
          return {
            slideRegistry: c
          }
        }(j, y, z, F, k, X), ae = function(e, t, n, r, o, i, a, s) {
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
                  (cx(s) || s(d, t)) && function(t) {
                    if ((new Date).getTime() - c > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = n.findIndex((e => e.includes(t)));
                    sx(i) && (o.useDuration(0), r.index(i, 0), a.emit("slideFocus"))
                  }(u)
                }), l)
              })))
            }
          };
          return d
        }(e, n, ie, te, J, re, a, x), se = {
          ownerDocument: r,
          ownerWindow: o,
          eventHandler: a,
          containerRect: P,
          slideRects: S,
          animation: K,
          axis: C,
          dragHandler: Sx(C, e, r, o, Q, Cx(C, o), $, K, te, J, ee, G, a, O, f, p, v, .68, w),
          eventStore: re,
          percentOfView: O,
          index: G,
          indexPrevious: q,
          limit: U,
          location: $,
          offsetLocation: Z,
          previousLocation: Y,
          options: i,
          resizeHandler: Tx(t, a, o, n, C, b, E),
          scrollBody: J,
          scrollBounds: Ox(U, Z, Q, J, O),
          scrollLooper: Nx(B, U, Z, [$, Z, Y, Q]),
          scrollProgress: ne,
          scrollSnapList: z.map(ne.get),
          scrollSnaps: z,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: Rx(C, T, B, R, A, M, z, Z, n),
          slideFocus: ae,
          slidesHandler: Ax(t, a, _),
          slidesInView: oe,
          slideIndexes: X,
          slideRegistry: ie,
          slidesToScroll: k,
          target: Q,
          translate: Lx(C, t)
        };
        return se
      }
      const Dx = {
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

      function kx(e) {
        function t(e, t) {
          return _x(e, t || {})
        }
        const n = {
          mergeOptions: t,
          optionsAtMedia: function(n) {
            const r = n.breakpoints || {},
              o = bx(r).filter((t => e.matchMedia(t).matches)).map((e => r[e])).reduce(((e, n) => t(e, n)), {});
            return t(n, o)
          },
          optionsMediaQueries: function(t) {
            return t.map((e => bx(e.breakpoints || {}))).reduce(((e, t) => e.concat(t)), []).map(e.matchMedia)
          }
        };
        return n
      }

      function Mx(e, t, n) {
        const r = e.ownerDocument,
          o = r.defaultView,
          i = kx(o),
          a = function(e) {
            let t = [];
            return {
              init: function(n, r) {
                return t = r.filter((({
                  options: t
                }) => !1 !== e.optionsAtMedia(t).active)), t.forEach((t => t.init(n, e))), r.reduce(((e, t) => Object.assign(e, {
                  [t.name]: t
                })), {})
              },
              destroy: function() {
                t = t.filter((e => e.destroy()))
              }
            }
          }(i),
          s = xx(),
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
            mergeOptions: c,
            optionsAtMedia: u,
            optionsMediaQueries: d
          } = i,
          {
            on: h,
            off: f,
            emit: p
          } = l,
          m = C;
        let g, v, y, b, _ = !1,
          w = c(Dx, Mx.globalOptions),
          x = c(w),
          E = [];

        function P(t) {
          const n = Ix(e, y, b, r, o, t, l);
          return t.loop && !n.slideLooper.canLoop() ? P(Object.assign({}, t, {
            loop: !1
          })) : n
        }

        function S(t, n) {
          _ || (w = c(w, t), x = u(w), E = n || E, function() {
            const {
              container: t,
              slides: n
            } = x, r = lx(t) ? e.querySelector(t) : t;
            y = r || e.children[0];
            const o = lx(n) ? y.querySelectorAll(n) : n;
            b = [].slice.call(o || y.children)
          }(), g = P(x), d([w, ...E.map((({
            options: e
          }) => e))]).forEach((e => s.add(e, "change", C))), x.active && (g.translate.to(g.location.get()), g.animation.init(), g.slidesInView.init(), g.slideFocus.init(j), g.eventHandler.init(j), g.resizeHandler.init(j), g.slidesHandler.init(j), g.options.loop && g.slideLooper.loop(), y.offsetParent && b.length && g.dragHandler.init(j), v = a.init(j, E)))
        }

        function C(e, t) {
          const n = N();
          T(), S(c({
            startIndex: n
          }, e), t), l.emit("reInit")
        }

        function T() {
          g.dragHandler.destroy(), g.eventStore.clear(), g.translate.clear(), g.slideLooper.clear(), g.resizeHandler.destroy(), g.slidesHandler.destroy(), g.slidesInView.destroy(), g.animation.destroy(), a.destroy(), s.clear()
        }

        function O(e, t, n) {
          x.active && !_ && (g.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : x.duration), g.scrollTo.index(e, n || 0))
        }

        function N() {
          return g.index.get()
        }
        const j = {
          canScrollNext: function() {
            return g.index.add(1).get() !== N()
          },
          canScrollPrev: function() {
            return g.index.add(-1).get() !== N()
          },
          containerNode: function() {
            return y
          },
          internalEngine: function() {
            return g
          },
          destroy: function() {
            _ || (_ = !0, s.clear(), T(), l.emit("destroy"), l.clear())
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
            O(g.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            O(g.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return g.scrollProgress.get(g.offsetLocation.get())
          },
          scrollSnapList: function() {
            return g.scrollSnapList
          },
          scrollTo: O,
          selectedScrollSnap: N,
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
        return S(t, n), setTimeout((() => l.emit("init")), 0), j
      }

      function Hx(e = {}, t = []) {
        const n = (0, h.useRef)(e),
          r = (0, h.useRef)(t),
          [o, i] = (0, h.useState)(),
          [a, s] = (0, h.useState)(),
          l = (0, h.useCallback)((() => {
            o && o.reInit(n.current, r.current)
          }), [o]);
        return (0, h.useEffect)((() => {
          ix(n.current, e) || (n.current = e, l())
        }), [e, l]), (0, h.useEffect)((() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const n = ax(e),
              r = ax(t);
            return n.every(((e, t) => ix(e, r[t])))
          })(r.current, t) || (r.current = t, l())
        }), [t, l]), (0, h.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            Mx.globalOptions = Hx.globalOptions;
            const e = Mx(a, n.current, r.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }), [a, i]), [s, o]
      }

      function Bx(e = {}) {
        let t, n = [];
        const r = ["select", "slideFocus"];

        function o() {
          const {
            slideRegistry: e
          } = t.internalEngine(), r = e[t.selectedScrollSnap()];
          return r ? r.map((e => n[e])).reduce(((e, t) => Math.max(e, t)), 0) : null
        }

        function i() {
          null !== o() && (t.containerNode().style.height = `${o()}px`)
        }
        return {
          name: "autoHeight",
          options: e,
          init: function(e) {
            t = e;
            const {
              options: {
                axis: o
              },
              slideRects: a
            } = t.internalEngine();
            "y" !== o && (n = a.map((e => e.height)), r.forEach((e => t.on(e, i))), i())
          },
          destroy: function() {
            r.forEach((e => t.off(e, i)));
            const e = t.containerNode();
            e.style.height = "", e.getAttribute("style") || e.removeAttribute("style")
          }
        }
      }
      Mx.globalOptions = void 0, Hx.globalOptions = void 0, Bx.globalOptions = void 0;
      const Vx = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function Fx(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function zx(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function Ux(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function Gx(e = {}) {
        let t, n, r, o, i = [],
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
          ("pointerDown" === t ? Ux : zx)(r, u.dragging)
        }

        function h(e = [], t = [], n) {
          const r = t.map((e => o[e])),
            i = e.map((e => o[e]));
          return r.forEach((e => zx(e, n))), i.forEach((e => Ux(e, n))), e
        }

        function f() {
          const {
            slideRegistry: e
          } = n.internalEngine(), t = e[n.selectedScrollSnap()];
          i = h(t, i, u.snapped)
        }

        function p() {
          const e = n.slidesInView();
          a = h(e, a, u.inView)
        }
        const m = {
          name: "classNames",
          options: e,
          init: function(i, a) {
            n = i;
            const {
              mergeOptions: h,
              optionsAtMedia: m
            } = a, g = h(Vx, Gx.globalOptions), v = h(g, e);
            t = m(v), r = n.rootNode(), o = n.slideNodes();
            const {
              watchDrag: y,
              loop: b
            } = n.internalEngine().options, _ = !!y;
            t.loop && b && (u.loop = Fx(t.loop), Ux(r, u.loop)), t.draggable && _ && (u.draggable = Fx(t.draggable), Ux(r, u.draggable)), t.dragging && (u.dragging = Fx(t.dragging), l.forEach((e => n.on(e, d)))), t.snapped && (u.snapped = Fx(t.snapped), s.forEach((e => n.on(e, f))), f()), t.inView && (u.inView = Fx(t.inView), c.forEach((e => n.on(e, p))), p())
          },
          destroy: function() {
            l.forEach((e => n.off(e, d))), s.forEach((e => n.off(e, f))), c.forEach((e => n.off(e, p))), zx(r, u.loop), zx(r, u.draggable), zx(r, u.dragging), h([], i, u.snapped), h([], a, u.inView), Object.keys(u).forEach((e => {
              u[e] = []
            }))
          }
        };
        return m
      }
      Gx.globalOptions = void 0;
      const qx = (0, h.createContext)(null);

      function Xx() {
        const e = (0, h.useContext)(qx);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Kx = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          loopPagination: r,
          status: o,
          background: i,
          align: a = "left",
          ...s
        }, l) => {
          const c = (({
              loopPagination: e = !0
            }) => {
              const t = (0, z.rl)(),
                n = (0, z.jt)(),
                [r, o] = (0, h.useState)([]),
                i = r.length,
                [a, s] = (0, h.useState)(0),
                [l, c] = Hx({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [Bx(), Gx()]),
                u = (0, h.useRef)(0),
                d = (0, h.useRef)(!1),
                f = r[a],
                p = (0, h.useCallback)((e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach(((e, n) => {
                    e.style.visibility = n === t ? "visible" : "hidden"
                  })), s(t), d.current = !0
                }), [c]),
                m = (0, h.useCallback)((e => {
                  u.current = .94 * e.scrollSnapList().length
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
                alerts: r,
                numAlerts: i,
                emblaRef: l,
                prevAlert: () => c?.scrollPrev(n),
                nextAlert: () => c?.scrollNext(n),
                currentAlert: f,
                currentAlertIndex: a,
                setCurrentAlertIndex: s,
                isInitialized: d.current,
                loopPagination: e,
                canScrollNext: () => c?.canScrollNext() || !1,
                canScrollPrev: () => c?.canScrollPrev() || !1
              }
            })({
              loopPagination: r
            }),
            {
              currentAlert: f,
              isInitialized: p,
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
              className: rx(f)
            }, y),
            _ = e ? m.DX : "div";
          return (0, u.jsx)(qx.Provider, {
            value: c,
            children: (0, u.jsx)(_, {
              ref: l,
              "data-testid": n,
              "data-initialized": p,
              ...b,
              children: t
            })
          })
        })),
        Wx = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        $x = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const {
            currentAlert: r
          } = Xx();
          if (!e && !r || !r?.status) return null;
          const o = e || Wx[r.status],
            i = F[o],
            a = (0, d.v6)(t, {
              className: "foundry_hcgxh_qmpv6yn"
            });
          return (0, u.jsx)(i, {
            title: "",
            ref: n,
            size: "LG",
            "data-icon": !0,
            ...a
          })
        })),
        Yx = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? m.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_hcgxh_qmpv6yo"
            });
          return (0, u.jsx)(V, {
            size: "SM",
            asChild: !0,
            children: (0, u.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...i
            })
          })
        })),
        Zx = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          align: n = "left",
          status: r,
          background: o,
          ...i
        }, a) => {
          const s = e ? m.DX : "div",
            l = (0, d.v6)(i, {
              className: "foundry_hcgxh_qmpv6yk"
            });
          return (0, u.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...l
          })
        })),
        Qx = (0, h.forwardRef)((({
          testId: e,
          children: t,
          ...n
        }, r) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = Xx(), a = (0, d.v6)(n, {
            className: "foundry_hcgxh_qmpv6yl"
          }), s = (0, z.UP)(i, r), l = h.Children.map(t, (e => {
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
        Jx = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, h.useRef)(null),
            a = (0, z.UP)(i, o),
            s = e ? m.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = Ow(r, i),
            f = (0, d.v6)(r, {
              className: "foundry_hcgxh_qmpv6yp foundry_hcgxh_1d5mo5m0"
            });
          return (0, u.jsx)(V, {
            asChild: !0,
            size: "SM",
            appearance: "hyperlink",
            children: (0, u.jsx)(s, {
              "data-pressed": c,
              "data-testid": n,
              ref: a,
              ...l,
              ...f,
              children: t
            })
          })
        })),
        eE = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const r = (0, d.v6)(t, {
            className: "foundry_hcgxh_qmpv6yq"
          });
          return (0, u.jsx)(lh, {
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
        tE = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          children: n,
          ...r
        }, o) => {
          const i = e ? m.DX : "div",
            a = (0, d.v6)(r, {
              className: "foundry_hcgxh_qmpv6ys"
            });
          return (0, u.jsx)(i, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            "aria-label": "alert navigation",
            ...a,
            children: n
          })
        })),
        nE = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            nextAlert: r,
            canScrollNext: o
          } = Xx(), i = (0, d.v6)(t, {
            className: nx
          });
          return (0, u.jsx)(lh, {
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
        rE = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            prevAlert: r,
            canScrollPrev: o
          } = Xx(), i = (0, d.v6)(t, {
            className: nx
          });
          return (0, u.jsx)(lh, {
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
        oE = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            currentAlertIndex: r,
            numAlerts: o
          } = Xx(), i = (0, d.v6)(t, {
            className: "foundry_hcgxh_qmpv6yr"
          });
          return (0, u.jsx)(V, {
            size: "SM",
            appearance: "bold",
            asChild: !0,
            children: (0, u.jsxs)("div", {
              ref: n,
              "data-testid": e,
              "aria-hidden": !0,
              ...i,
              children: [r + 1, "/", o]
            })
          })
        }));

      function iE(e) {
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

      function aE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function sE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? aE(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = iE(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : aE(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function lE(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var cE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        uE = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = sE(sE({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) cE(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return lE(e.variantClassNames, (e => lE(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        dE = uE({
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
        hE = uE({
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
      const fE = (0, h.createContext)(null);

      function pE() {
        const e = (0, h.useContext)(fE);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const mE = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          size: r,
          background: o,
          color: i,
          hasBorder: a,
          isDisabled: s,
          ...l
        }, c) => {
          const h = {
              size: r,
              background: o,
              color: i,
              hasBorder: a,
              isDisabled: s
            },
            f = (0, d.v6)(l, {
              className: hE(h)
            }),
            p = e ? m.DX : "div";
          return (0, u.jsx)(fE.Provider, {
            value: h,
            children: (0, u.jsx)(p, {
              ref: c,
              "data-testid": n,
              "aria-disabled": s,
              ...f,
              children: t
            })
          })
        })),
        gE = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            size: i
          } = pE(), a = e ? m.DX : "div", s = (0, d.v6)(r, {
            className: "foundry_hcgxh_oahh58z"
          });
          return (0, u.jsx)(V, {
            size: "MD" === i ? "SM" : "LG",
            asChild: !0,
            children: (0, u.jsx)(a, {
              ref: o,
              "data-testid": n,
              ...s,
              children: t
            })
          })
        })),
        vE = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const r = F[e],
            o = (0, d.v6)(t, {
              className: "foundry_hcgxh_oahh5810"
            });
          return (0, u.jsx)(r, {
            ref: n,
            size: "MD",
            ...o
          })
        })),
        yE = (0, h.forwardRef)((({
          testId: e,
          label: t = "close tag",
          ...n
        }, r) => {
          const {
            background: o,
            isDisabled: i
          } = pE(), a = (0, d.v6)(n, {
            className: dE({
              background: o
            })
          });
          return (0, u.jsx)(lh, {
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

      function bE(e) {
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

      function _E(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function wE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _E(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = bE(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _E(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function xE(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var EE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        PE = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = wE(wE({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) EE(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xE(e.variantClassNames, (e => xE(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        SE = PE({
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
        CE = PE({
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
        TE = PE({
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

      function OE() {
        const e = (0, h.useContext)(NE);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const NE = (0, h.createContext)(null),
        jE = (0, h.forwardRef)((({
          children: e,
          testId: t,
          asChild: n,
          size: r = "MD",
          ...o
        }, i) => {
          const a = (0, d.v6)({
              className: TE({
                size: r
              })
            }, o),
            s = n ? m.DX : "ol";
          return (0, u.jsx)(NE.Provider, {
            value: {
              size: r
            },
            children: (0, u.jsx)(s, {
              ref: i,
              "data-testid": t,
              ...a,
              children: e
            })
          })
        })),
        LE = (0, h.forwardRef)((({
          isCurrent: e,
          children: t,
          asChild: n,
          testId: r,
          ...o
        }, i) => {
          const a = (0, h.useRef)(null),
            {
              size: s
            } = OE(),
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
              } = Ow({
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
            c = n ? m.DX : "a",
            f = (0, d.v6)({
              className: (0, A.$)(SE({
                size: s
              }), e && "foundry_hcgxh_m1icrx9"),
              "data-testid": r
            }, l, o);
          return (0, u.jsx)("li", {
            className: CE({
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
        RE = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const r = F[e];
          return (0, u.jsx)(r, {
            ref: n,
            size: "LG",
            ...t
          })
        })),
        AE = (0, h.forwardRef)((({
          children: e,
          testId: t,
          defaultOpen: n = !1,
          label: r = "Show hidden breadcrumbs",
          ...o
        }, i) => {
          const [a, s] = (0, h.useState)(n), {
            size: l
          } = OE(), c = (0, d.v6)({
            className: CE({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, u.jsx)("li", {
            ref: i,
            ...c,
            children: (0, u.jsxs)(Nv, {
              open: a,
              onOpenChange: () => s(!a),
              children: [(0, u.jsx)(jv, {
                className: "foundry_hcgxh_m1icrxa foundry_hcgxh_1d5mo5m0 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd11",
                "aria-label": r,
                children: "..."
              }), (0, u.jsx)(Av, {
                children: (0, u.jsx)(Iv, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_hcgxh_m1icrxb",
                  children: (0, u.jsx)(Dv, {
                    className: "foundry_hcgxh_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        })),
        IE = (0, h.forwardRef)((({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const i = t ? m.DX : kv,
            a = (0, d.v6)({
              className: "foundry_hcgxh_m1icrxd foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd10",
              "data-testid": n
            }, r);
          return (0, u.jsx)(i, {
            ref: o,
            ...a,
            children: e
          })
        }))
    }
  }
]);