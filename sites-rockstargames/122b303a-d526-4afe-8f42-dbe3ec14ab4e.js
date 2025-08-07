try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "122b303a-d526-4afe-8f42-dbe3ec14ab4e", e._sentryDebugIdIdentifier = "sentry-dbid-122b303a-d526-4afe-8f42-dbe3ec14ab4e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [2454], {
    12454: (e, t, n) => {
      n.r(t), n.d(t, {
        Alert: () => a,
        AlertBanner: () => s,
        Body: () => F,
        Breadcrumbs: () => c,
        Button: () => hn,
        Checkbox: () => Gy,
        Code: () => u_,
        Display: () => Yb,
        Divider: () => Ab,
        Dropdown: () => Ey,
        Heading: () => P,
        IconButton: () => ch,
        Label: () => r_,
        Lightbox: () => Rg,
        Loader: () => E_,
        Option: () => Py,
        RadioButton: () => Cb,
        RadioContext: () => vb,
        RadioGroup: () => yb,
        Switch: () => $b,
        Tag: () => l,
        Text: () => L,
        TextArea: () => Rt,
        TextField: () => i,
        TextSemantics: () => R,
        Tooltip: () => pm
      });
      var r = {};
      n.r(r), n.d(r, {
        CheckLG: () => Oy,
        CheckMD: () => Cy,
        CheckXL: () => Ty,
        DashLG: () => jy,
        DashMD: () => Ny,
        DashXL: () => Ry
      });
      var o = {};
      n.r(o), n.d(o, {
        DotLG: () => _b,
        DotMD: () => bb,
        DotXL: () => wb
      });
      var i = {};
      n.r(i), n.d(i, {
        Button: () => Cw,
        Control: () => Ew,
        Description: () => Tw,
        Hint: () => xw,
        Icon: () => Sw,
        Input: () => Pw,
        Label: () => ww,
        PasswordButton: () => Ow,
        Root: () => _w
      });
      var a = {};
      n.r(a), n.d(a, {
        Body: () => Uw,
        CloseButton: () => Zw,
        Description: () => Kw,
        ErrorText: () => Yw,
        Footer: () => $w,
        Header: () => zw,
        Icon: () => qw,
        Link: () => Ww,
        Root: () => Vw,
        RootContext: () => Bw,
        Title: () => Xw,
        iconStatusMap: () => Gw,
        useAlertContext: () => Fw
      });
      var s = {};
      n.r(s), n.d(s, {
        Alert: () => Qx,
        CloseButton: () => tE,
        Description: () => Zx,
        Icon: () => Yx,
        Link: () => eE,
        PaginationCounter: () => iE,
        PaginationNav: () => nE,
        PaginationNextButton: () => rE,
        PaginationPrevButton: () => oE,
        PaginationViewport: () => Jx,
        Root: () => Wx,
        RootContext: () => Xx,
        iconStatusMap: () => $x,
        useAlertBannerContext: () => Kx
      });
      var l = {};
      n.r(l), n.d(l, {
        CloseButton: () => bE,
        Icon: () => yE,
        Label: () => vE,
        Root: () => gE,
        RootContext: () => pE,
        useTagContext: () => mE
      });
      var c = {};
      n.r(c), n.d(c, {
        Icon: () => AE,
        Item: () => LE,
        OverflowMenu: () => IE,
        OverflowMenuItem: () => DE,
        Root: () => RE,
        RootContext: () => jE,
        useBreadcrumbsContext: () => NE
      });
      var u = n(70954),
        d = n(84105),
        h = n(62229),
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

      function O(e) {
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

      function T(e, t) {
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
              r = O(O({}, e.defaultVariants), t);
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
              return T(e.variantClassNames, (e => T(e, (e => e.split(" ")[0]))))
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
      const R = {
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
        L = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          semantic: n = "default",
          ...r
        }, o) => {
          const i = e ? m.DX : R[n] || "span",
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
      const F = (0, h.forwardRef)((({
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
      var V = n(78618),
        z = n.t(V, 2),
        U = n(16237);
      const G = new Set(["id"]),
        q = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        X = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        K = /^(data-.*)$/;

      function W(e, t = {}) {
        let {
          labelable: n,
          isLink: r,
          propNames: o
        } = t, i = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (G.has(t) || n && q.has(t) || r && X.has(t) || (null == o ? void 0 : o.has(t)) || K.test(t)) && (i[t] = e[t]);
        return i
      }
      const $ = "undefined" != typeof document ? h.useLayoutEffect : () => {};

      function Y(e) {
        const t = (0, h.useRef)(null);
        return $((() => {
          t.current = e
        }), [e]), (0, h.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }

      function Z(e, t, n) {
        let r = (0, h.useRef)(t),
          o = Y((() => {
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
      const Q = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        J = e => e && "window" in e && e.window === e ? e : Q(e).defaultView || window;

      function ee(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      const te = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        ne = h.createContext(te),
        re = h.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let oe = new WeakMap;
      const ie = "function" == typeof h.useId ? function(e) {
        let t = h.useId(),
          [n] = (0, h.useState)(ce());
        return e || `${n?"react-aria":`react-aria${te.prefix}`}-${t}`
      } : function(e) {
        let t = (0, h.useContext)(ne),
          n = function(e = !1) {
            let t = (0, h.useContext)(ne),
              n = (0, h.useRef)(null);
            if (null === n.current && !e) {
              var r, o;
              let e = null === (o = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let n = oe.get(e);
                null == n ? oe.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, oe.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          r = `react-aria${t.prefix}`;
        return e || `${r}-${n}`
      };

      function ae() {
        return !1
      }

      function se() {
        return !0
      }

      function le(e) {
        return () => {}
      }

      function ce() {
        return "function" == typeof h.useSyncExternalStore ? h.useSyncExternalStore(le, ae, se) : (0, h.useContext)(re)
      }
      let ue, de = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        he = new Map;

      function fe(e) {
        let [t, n] = (0, h.useState)(e), r = (0, h.useRef)(null), o = ie(t), i = (0, h.useRef)(null);
        if (ue && ue.register(i, o), de) {
          const e = he.get(o);
          e && !e.includes(r) ? e.push(r) : he.set(o, [r])
        }
        return $((() => {
          let e = o;
          return () => {
            ue && ue.unregister(i), he.delete(e)
          }
        }), [o]), (0, h.useEffect)((() => {
          let e = r.current;
          return e && n(e), () => {
            e && (r.current = null)
          }
        })), o
      }

      function pe(e, t) {
        if (e === t) return e;
        let n = he.get(e);
        if (n) return n.forEach((e => e.current = t)), t;
        let r = he.get(t);
        return r ? (r.forEach((t => t.current = e)), e) : t
      }

      function me(e = []) {
        let t = fe(),
          [n, r] = function(e) {
            let [t, n] = (0, h.useState)(e), r = (0, h.useRef)(null), o = Y((() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : t === e.value ? o() : n(e.value)
            }));
            $((() => {
              r.current && o()
            }));
            let i = Y((e => {
              r.current = e(t), o()
            }));
            return [t, i]
          }(t),
          o = (0, h.useCallback)((() => {
            r((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, r]);
        return $(o, [t, o, ...e]), n
      }

      function ge(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = ee(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = pe(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, A.A)(n, o)
          }
        }
        return t
      }

      function ve(e, t, n) {
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

      function ye(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = fe(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function be(e) {
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
          t = fe(t);
          let a = fe(),
            s = {};
          return n && (r = r ? `${a} ${r}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: s,
            fieldProps: ye({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = me([Boolean(t), Boolean(n), r, o]), l = me([Boolean(t), Boolean(n), r, o]);
        return a = ge(a, {
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
      "undefined" != typeof FinalizationRegistry && (ue = new FinalizationRegistry((e => {
        he.delete(e)
      })));
      const _e = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        we = _e.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      _e.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const xe = _e.join(':not([hidden]):not([tabindex="-1"]),');

      function Ee(e) {
        return e.matches(we)
      }

      function Pe(e) {
        return e.matches(xe)
      }

      function Se(e) {
        if (function() {
            if (null == Ce) {
              Ce = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Ce = !0, !0
                  }
                })
              } catch {}
            }
            return Ce
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
      let Ce = null;

      function Oe(e) {
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

      function Ne(e) {
        let t = (0, h.useRef)({
          isFocused: !1,
          observer: null
        });
        $((() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }), []);
        let n = Y((t => {
          null == e || e(t)
        }));
        return (0, h.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let r = e.target,
              o = e => {
                if (t.current.isFocused = !1, r.disabled) {
                  let t = Oe(e);
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
      let je = !1;

      function Re(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function Le(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Ae(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Ie = Ae((function() {
          return Le(/^Mac/i)
        })),
        De = Ae((function() {
          return Le(/^iPhone/i)
        })),
        ke = Ae((function() {
          return Le(/^iPad/i) || Ie() && navigator.maxTouchPoints > 1
        })),
        Me = Ae((function() {
          return De() || ke()
        })),
        He = (Ae((function() {
          return Ie() || Me()
        })), Ae((function() {
          return Re(/AppleWebKit/i) && !Be()
        }))),
        Be = Ae((function() {
          return Re(/Chrome/i)
        })),
        Fe = Ae((function() {
          return Re(/Android/i)
        })),
        Ve = Ae((function() {
          return Re(/Firefox/i)
        }));

      function ze(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (Fe() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let Ue = null,
        Ge = new Set,
        qe = new Map,
        Xe = !1,
        Ke = !1;

      function We(e, t) {
        for (let n of Ge) n(e, t)
      }

      function $e(e) {
        Xe = !0,
          function(e) {
            return !(e.metaKey || !Ie() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Ue = "keyboard", We("keyboard", e))
      }

      function Ye(e) {
        Ue = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Xe = !0, We("pointer", e))
      }

      function Ze(e) {
        ze(e) && (Xe = !0, Ue = "virtual")
      }

      function Qe(e) {
        e.target !== window && e.target !== document && !je && e.isTrusted && (Xe || Ke || (Ue = "virtual", We("virtual", e)), Xe = !1, Ke = !1)
      }

      function Je() {
        je || (Xe = !1, Ke = !0)
      }

      function et(e) {
        if ("undefined" == typeof window || qe.get(J(e))) return;
        const t = J(e),
          n = Q(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          Xe = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", $e, !0), n.addEventListener("keyup", $e, !0), n.addEventListener("click", Ze, !0), t.addEventListener("focus", Qe, !0), t.addEventListener("blur", Je, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", Ye, !0), n.addEventListener("pointermove", Ye, !0), n.addEventListener("pointerup", Ye, !0)), t.addEventListener("beforeunload", (() => {
          tt(e)
        }), {
          once: !0
        }), qe.set(t, {
          focus: r
        })
      }
      const tt = (e, t) => {
        const n = J(e),
          r = Q(e);
        t && r.removeEventListener("DOMContentLoaded", t), qe.has(n) && (n.HTMLElement.prototype.focus = qe.get(n).focus, r.removeEventListener("keydown", $e, !0), r.removeEventListener("keyup", $e, !0), r.removeEventListener("click", Ze, !0), n.removeEventListener("focus", Qe, !0), n.removeEventListener("blur", Je, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", Ye, !0), r.removeEventListener("pointermove", Ye, !0), r.removeEventListener("pointerup", Ye, !0)), qe.delete(n))
      };
      "undefined" != typeof document && function(e) {
        const t = Q(e);
        let n;
        "loading" !== t.readyState ? et(e) : (n = () => {
          et(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function nt(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      const rt = (e = document) => e.activeElement;

      function ot(e) {
        return e.target
      }
      let it = new Map,
        at = new Set;

      function st() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = it.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), it.delete(n.target)), 0 === it.size)) {
            for (let e of at) e();
            at.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = it.get(n.target);
          r || (r = new Set, it.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function lt(e) {
        requestAnimationFrame((() => {
          0 === it.size ? e() : at.add(e)
        }))
      }

      function ct(e) {
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

      function ut(e, t) {
        $((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? st() : document.addEventListener("DOMContentLoaded", st));
      let dt = h.createContext(null);

      function ht(e, t) {
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
            a = Ne(i),
            s = (0, h.useCallback)((e => {
              const t = Q(e.target),
                r = t ? rt(t) : rt();
              e.target === e.currentTarget && r === ot(e.nativeEvent) && (n && n(e), o && o(!0), a(e))
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
              onKeyDown: ct(e.onKeyDown),
              onKeyUp: ct(e.onKeyUp)
            }
          }
        }(e), o = ge(n, r), i = function(e) {
          let t = (0, h.useContext)(dt) || {};
          ut(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), a = e.isDisabled ? {} : i, s = (0, h.useRef)(e.autoFocus);
        (0, h.useEffect)((() => {
          s.current && t.current && function(e) {
            const t = Q(e),
              n = rt(t);
            if ("virtual" === Ue) {
              let r = n;
              lt((() => {
                rt(t) === r && e.isConnected && Se(e)
              }))
            } else Se(e)
          }(t.current), s.current = !1
        }), [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: ge({
            ...o,
            tabIndex: l
          }, a)
        }
      }

      function ft(e, t, n) {
        let {
          validationBehavior: r,
          focus: o
        } = e;
        $((() => {
          if ("native" === r && (null == n ? void 0 : n.current) && !n.current.disabled) {
            let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = n.current).validity.valid,
              validationDetails: pt(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let i = Y((() => {
            t.resetValidation()
          })),
          a = Y((e => {
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
            }(i) === n.current && (o ? o() : null === (a = n.current) || void 0 === a || a.focus(), Ue = "keyboard", We("keyboard", null)), e.preventDefault()
          })),
          s = Y((() => {
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

      function pt(e) {
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
      const mt = {
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
        gt = {
          ...mt,
          customError: !0,
          valid: !1
        },
        vt = {
          isInvalid: !1,
          validationDetails: mt,
          validationErrors: []
        },
        yt = (0, h.createContext)({}),
        bt = "__formValidationState" + Date.now();

      function _t(e) {
        if (e[bt]) {
          let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          } = e[bt];
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
              validationDetails: gt
            } : null,
            c = (0, h.useMemo)((() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let n = e(t);
                  if (n && "boolean" != typeof n) return wt(n)
                }
                return []
              }(a, o);
              return xt(e)
            }), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let u = (0, h.useContext)(yt),
            d = (0, h.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => wt(u[e]))) : wt(u[r]) : []), [u, r]),
            [f, p] = (0, h.useState)(u),
            [m, g] = (0, h.useState)(!1);
          u !== f && (p(u), g(!1));
          let v = (0, h.useMemo)((() => xt(m ? [] : d)), [m, d]),
            y = (0, h.useRef)(vt),
            [b, _] = (0, h.useState)(vt),
            w = (0, h.useRef)(vt),
            [x, E] = (0, h.useState)(!1);
          return (0, h.useEffect)((() => {
            if (!x) return;
            E(!1);
            let e = c || i || y.current;
            Et(e, w.current) || (w.current = e, _(e))
          })), {
            realtimeValidation: l || v || c || i || vt,
            displayValidation: "native" === s ? l || v || b : l || v || c || i || b,
            updateValidation(e) {
              "aria" !== s || Et(b, e) ? y.current = e : _(e)
            },
            resetValidation() {
              let e = vt;
              Et(e, w.current) || (w.current = e, _(e)), "native" === s && E(!1), g(!0)
            },
            commitValidation() {
              "native" === s && E(!0), g(!0)
            }
          }
        }(e)
      }

      function wt(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function xt(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: gt
        } : null
      }

      function Et(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, n) => e === t.validationErrors[n])) && Object.entries(e.validationDetails).every((([e, n]) => t.validationDetails[e] === n))
      }

      function Pt(e) {
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

      function St(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Ct(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? St(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Pt(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : St(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Ot(e, t) {
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
        Nt = "foundry_hcgxh_vq8c3j8",
        jt = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Ct(Ct({}, e.defaultVariants), t);
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
              return Ot(e.variantClassNames, (e => Ot(e, (e => e.split(" ")[0]))))
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
      const Rt = (0, h.forwardRef)((({
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
          w = (0, U.UP)(_, b),
          {
            inputProps: x,
            labelProps: E,
            descriptionProps: P,
            isInvalid: S,
            errorMessageProps: C,
            validationErrors: O
          } = function(e, t) {
            let {
              inputElementType: n = "input",
              isDisabled: r = !1,
              isRequired: o = !1,
              isReadOnly: i = !1,
              type: a = "text",
              validationBehavior: s = "aria"
            } = e, [l, c] = ve(e.value, e.defaultValue || "", e.onChange), {
              focusableProps: u
            } = ht(e, t), d = _t({
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
            } = be({
              ...e,
              isInvalid: f,
              errorMessage: e.errorMessage || p
            }), _ = W(e, {
              labelable: !0
            });
            const w = {
              type: a,
              pattern: e.pattern
            };
            return Z(t, l, c), ft(e, d, t), (0, h.useEffect)((() => {
              if (t.current instanceof J(t.current).HTMLTextAreaElement) {
                let e = t.current;
                Object.defineProperty(e, "defaultValue", {
                  get: () => e.value,
                  set: () => {},
                  configurable: !0
                })
              }
            }), [t]), {
              labelProps: g,
              inputProps: ge(_, "input" === n ? w : void 0, {
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
          T = (0, d.v6)({
            ...x,
            className: s
          }, {
            className: jt({
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
              children: (0, u.jsx)(F, {
                size: "SM",
                className: (0, A.$)("foundry_hcgxh_vq8c3j2", x.disabled && Nt),
                asChild: !0,
                children: (0, u.jsxs)("label", {
                  ...E,
                  children: [t, n && !p && (0, u.jsx)("span", {
                    className: "foundry_hcgxh_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), r && (0, u.jsx)(F, {
              size: "XS",
              className: "foundry_hcgxh_vq8c3j3",
              children: r
            })]
          }), (0, u.jsx)(N, {
            rows: l,
            ref: w,
            "data-testid": a,
            ...T,
            children: o
          }), i && (0, u.jsx)(m.s6, {
            enabled: O.length > 0 || !!f,
            children: (0, u.jsx)(F, {
              size: "SM",
              ...P,
              className: (0, A.$)("foundry_hcgxh_vq8c3j4", x.disabled && Nt),
              children: i
            })
          }), O.length > 0 && (0, u.jsxs)(F, {
            size: "SM",
            appearance: "bold",
            ...C,
            className: "foundry_hcgxh_vq8c3j5",
            children: [(0, u.jsx)(V.X, {
              size: "MD",
              label: "",
              className: "foundry_hcgxh_vq8c3j6"
            }), O.join(". ")]
          })]
        })
      }));
      let Lt = "default",
        At = "",
        It = new WeakMap;

      function Dt(e) {
        if (Me()) {
          if ("disabled" !== Lt) return;
          Lt = "restoring", setTimeout((() => {
            lt((() => {
              if ("restoring" === Lt) {
                const t = Q(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = At || ""), At = "", Lt = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && It.has(e)) {
          let t = It.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), It.delete(e)
        }
      }
      const kt = h.createContext({
        register: () => {}
      });

      function Mt(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
      }

      function Ht(e, t, n) {
        return function(e, t, n) {
          if (t.set) t.set.call(e, n);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = n
          }
        }(e, Mt(e, t, "set"), n), n
      }

      function Bt() {
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
      kt.displayName = "PressResponderContext";
      const Ft = (0, h.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let n = document.createElement("a");
              n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
            }
          }(e, (e => zt(e, t)))
        },
        useHref: e => e
      });

      function Vt() {
        return (0, h.useContext)(Ft)
      }

      function zt(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        Ve() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (Ie() ? i = !0 : a = !0);
        let c = He() && Ie() && !ke() ? new KeyboardEvent("keydown", {
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
        zt.isOpening = n, Se(e), e.dispatchEvent(c), zt.isOpening = !1
      }

      function Ut(e) {
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
      zt.isOpening = !1;
      var Gt = n(44853),
        qt = new WeakMap;
      class Xt {
        continuePropagation() {
          Ht(this, qt, !1)
        }
        get shouldStopPropagation() {
          return function(e, t) {
            return t.get ? t.get.call(e) : t.value
          }(this, Mt(this, qt, "get"))
        }
        constructor(e, t, n, r) {
          var o, i, a, s;
          s = {
              writable: !0,
              value: void 0
            },
            function(e, t) {
              if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(i = this, a = qt), a.set(i, s), Ht(this, qt, !0);
          let l = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const c = null == l ? void 0 : l.getBoundingClientRect();
          let u, d, h = 0,
            f = null;
          null != n.clientX && null != n.clientY && (d = n.clientX, f = n.clientY), c && (null != d && null != f ? (u = d - c.left, h = f - c.top) : (u = c.width / 2, h = c.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = u, this.y = h
        }
      }
      const Kt = Symbol("linkClicked");

      function Wt(e) {
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
          let t = (0, h.useContext)(kt);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = ge(r, e), n()
          }
          return ut(t, e.ref), e
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
        } = Bt(), _ = Y(((e, t) => {
          let o = v.current;
          if (s || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new Xt("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, g(!0), i
        })), w = Y(((e, r, i = !0) => {
          let a = v.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Xt("pressend", r, e);
            o(t), l = t.shouldStopPropagation
          }
          if (n && n(!1), g(!1), t && i && !s) {
            let n = new Xt("press", r, e);
            t(n), l && (l = n.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, l
        })), x = Y(((e, t) => {
          let n = v.current;
          if (s) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new Xt("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), E = Y((e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(Zt(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, b(), d || Dt(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), P = Y((e => {
          u && E(e)
        })), S = Y((e => {
          null == a || a(e)
        })), C = Y(((e, t) => {
          if (a) {
            let n = new MouseEvent("click", e);
            Te(n, t), a(Oe(n))
          }
        })), O = (0, h.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (Yt(t.nativeEvent, t.currentTarget) && nt(t.currentTarget, ot(t.nativeEvent))) {
                  var r;
                  Qt(ot(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = _(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        Yt(t, r) && !t.repeat && nt(r, ot(t)) && e.target && x(Zt(e.target, t), "keyboard")
                      };
                    y(Q(t.currentTarget), "keyup", ee(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Ie() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || nt(t.currentTarget, ot(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !zt.isOpening) {
                  let n = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !ze(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual";
                      n = w(Zt(t.currentTarget, t), r, !0), e.isOverTarget = !1, S(t), E(t)
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
              if (e.isPressed && e.target && Yt(t, e.target)) {
                var r;
                Qt(ot(t), t.key) && t.preventDefault();
                let n = ot(t),
                  o = nt(e.target, ot(t));
                w(Zt(e.target, t), "keyboard", o), o && C(t, e.target), b(), "Enter" !== t.key && $t(e.target) && nt(e.target, n) && !t[Kt] && (t[Kt] = !0, zt(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !nt(t.currentTarget, ot(t.nativeEvent))) return;
              if (o = t.nativeEvent, !Fe() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (Me()) {
                    if ("default" === Lt) {
                      const t = Q(e);
                      At = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    Lt = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    It.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = _(t, e.pointerType);
                let o = ot(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(Q(t.currentTarget), "pointerup", n, !1), y(Q(t.currentTarget), "pointercancel", r, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (nt(t.currentTarget, ot(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let n = function(e) {
                    for (; e && !Ee(e);) e = e.parentElement;
                    let t = J(e),
                      n = t.document.activeElement;
                    if (!n || n === e) return;
                    je = !0;
                    let r = !1,
                      o = e => {
                        (e.target === n || r) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === n || r) && (t.stopImmediatePropagation(), e || r || (r = !0, Se(n), l()))
                      },
                      a = t => {
                        (t.target === e || r) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || r) && (t.stopImmediatePropagation(), r || (r = !0, Se(n), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), je = !1, r = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              nt(t.currentTarget, ot(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && x(t, e.pointerType || t.pointerType)
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, _(Zt(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(Zt(e.target, t), e.pointerType, !1), P(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (nt(e.target, ot(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? E(t) : (Se(e.target), e.target.click()))
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
              nt(e.currentTarget, ot(e.nativeEvent)) && E(e)
            }
          }
          return t
        }), [y, s, c, b, d, E, P, w, _, x, S, C]);
        return (0, h.useEffect)((() => {
          let e = null == f ? void 0 : f.current;
          e && e instanceof J(e).Element && "auto" === J(e).getComputedStyle(e).touchAction && (e.style.touchAction = "pan-x pan-y pinch-zoom")
        }), [f]), (0, h.useEffect)((() => {
          let e = v.current;
          return () => {
            var t;
            d || Dt(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [d]), {
          isPressed: l || m,
          pressProps: ge(p, O)
        }
      }

      function $t(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Yt(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof J(o).HTMLInputElement && !en(o, n) || o instanceof J(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && $t(o)) && "Enter" !== n)
      }

      function Zt(e, t) {
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

      function Qt(e, t) {
        return e instanceof HTMLInputElement ? !en(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : $t(e)))
        }(e)
      }
      const Jt = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function en(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Jt.has(e.type)
      }

      function tn(e, t) {
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
        } = Wt({
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
        } = ht(e, t);
        d && (b.tabIndex = o ? -1 : b.tabIndex);
        let _ = ge(b, v, W(e, {
          labelable: !0
        }));
        return {
          isPressed: y,
          buttonProps: ge(n, _, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"]
          })
        }
      }
      var nn = n(41689);

      function rn(e) {
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

      function on(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function an(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? on(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = rn(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : on(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function sn(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var ln = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        cn = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = an(an({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ln(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sn(e.variantClassNames, (e => sn(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        un = cn({
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
        dn = cn({
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
      const hn = (0, h.forwardRef)((({
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
            b = (0, U.UP)(y, v),
            _ = (0, nn.zQ)(),
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
            } = tn({
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
              className: un({
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
            O = i && z[i],
            T = s && z[s],
            N = t ? m.DX : "button",
            j = p && (T || T && O);
          return (0, u.jsxs)(N, {
            ref: b,
            ...C,
            children: [j && (0, u.jsx)("div", {
              className: "foundry_hcgxh_17pcofyq"
            }), O && (0, u.jsx)(O, {
              label: a || "",
              size: w,
              className: "foundry_hcgxh_17pcofym"
            }), (0, u.jsx)(m.xV, {
              children: r
            }), T && (0, u.jsx)(T, {
              label: l || "",
              size: w,
              className: dn({
                fullWidth: p
              })
            })]
          })
        })),
        fn = {
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

      function pn(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * n) : e * t * n / (t + n * e)
      }

      function mn(e, t, n, r = .15) {
        return 0 === r ? function(e, t, n) {
          return Math.max(t, Math.min(e, n))
        }(e, t, n) : e < t ? -pn(t - e, n - t, r) + t : e > n ? +pn(e - n, n - t, r) + n : e
      }

      function gn(e, t, n) {
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

      function vn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function yn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vn(Object(n), !0).forEach((function(t) {
            gn(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vn(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      const bn = {
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

      function _n(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const wn = ["enter", "leave"];
      const xn = ["gotpointercapture", "lostpointercapture"];

      function En(e) {
        let t = e.substring(2).toLowerCase();
        const n = !!~t.indexOf("passive");
        n && (t = t.replace("passive", ""));
        const r = xn.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(r);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: n
        }
      }

      function Pn(e) {
        return "touches" in e
      }

      function Sn(e) {
        return Pn(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Cn(e) {
        return Pn(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function On(e, t) {
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
        return On(n, r)
      }

      function Nn(e) {
        const t = Cn(e);
        return Pn(e) ? t.identifier : t.pointerId
      }

      function jn(e) {
        const t = Cn(e);
        return [t.clientX, t.clientY]
      }

      function Rn(e) {
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

      function An() {}

      function In(...e) {
        return 0 === e.length ? An : 1 === e.length ? e[0] : function() {
          let t;
          for (const n of e) t = n.apply(this, arguments) || t;
          return t
        }
      }

      function Dn(e, t) {
        return Object.assign({}, t, e || {})
      }
      class kn {
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
            fn.addTo(t._distance, e)
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
              return [mn(t, i, a, r), mn(n, s, l, o)]
            }(t._bounds, t.offset, _), t.delta = fn.sub(t.offset, h), this.computeMovement(), f && (!t.last || o > 32)) {
            t.delta = fn.sub(t.offset, h);
            const e = t.delta.map(Math.abs);
            fn.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            n = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
          const r = this.handler(yn(yn(yn({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== r && (e.memo = r)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Mn extends kn {
        constructor(...e) {
          super(...e), gn(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = fn.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = fn.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            n = this.config;
          if (!t.axis && e) {
            const r = "object" == typeof n.axisThreshold ? n.axisThreshold[Sn(e)] : n.axisThreshold;
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
      const Hn = e => e,
        Bn = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, n) => yn(yn({}, n.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return fn.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? fn.toVector(e) : void 0,
          transform(e, t, n) {
            const r = e || n.shared.transform;
            return this.hasCustomTransform = !!r, r || Hn
          },
          threshold: e => fn.toVector(e, 0)
        },
        Fn = yn(yn({}, Bn), {}, {
          axis(e, t, {
            axis: n
          }) {
            if (this.lockDirection = "lock" === n, !this.lockDirection) return n
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => Fn.bounds(e(t));
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
        zn = "undefined" != typeof window && window.document && window.document.createElement;

      function Un() {
        return zn && "ontouchstart" in window
      }
      const Gn = {
          isBrowser: zn,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Un(),
          touchscreen: Un() || zn && window.navigator.maxTouchPoints > 1,
          pointer: zn && "onpointerdown" in window,
          pointerLock: zn && "exitPointerLock" in window.document
        },
        qn = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Xn = yn(yn({}, Fn), {}, {
          device(e, t, {
            pointer: {
              touch: n = !1,
              lock: r = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = r && Gn.pointerLock, Gn.touch && n ? "touch" : this.pointerLock ? "mouse" : Gn.pointer && !o ? "pointer" : Gn.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: n
          }) {
            if (this.preventScrollDelay = "number" == typeof n ? n : n || void 0 === n && e ? 250 : void 0, Gn.touchscreen && !1 !== n) return e || (void 0 !== n ? "y" : void 0)
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
            const i = fn.toVector(e, n ? r : o ? 1 : 0);
            return this.filterTaps = n, this.tapsThreshold = r, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: n = 250
          } = {}) {
            return {
              velocity: this.transform(fn.toVector(e)),
              distance: this.transform(fn.toVector(t)),
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
          axisThreshold: e => e ? yn(yn({}, qn), e) : qn,
          keyboardDisplacement: (e = 10) => e
        });

      function Kn(e) {
        const [t, n] = e.overflow, [r, o] = e._delta, [i, a] = e._direction;
        (t < 0 && r > 0 && i < 0 || t > 0 && r < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (n < 0 && o > 0 && a < 0 || n > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Wn = yn(yn({}, Bn), {}, {
          device(e, t, {
            shared: n,
            pointer: {
              touch: r = !1
            } = {}
          }) {
            if (n.target && !Gn.touch && Gn.gesture) return "gesture";
            if (Gn.touch && r) return "touch";
            if (Gn.touchscreen) {
              if (Gn.pointer) return "pointer";
              if (Gn.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: n = {},
            angleBounds: r = {}
          }) {
            const o = e => {
                const t = Dn(Ln(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = Dn(Ln(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof n && "function" != typeof r ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, n) {
            return this.lockDirection = "lock" === n.axis, fn.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        $n = yn(yn({}, Fn), {}, {
          mouseOnly: (e = !0) => e
        }),
        Yn = Fn,
        Zn = Fn,
        Qn = yn(yn({}, Fn), {}, {
          mouseOnly: (e = !0) => e
        }),
        Jn = new Map,
        er = new Map;

      function tr(e) {
        Jn.set(e.key, e.engine), er.set(e.key, e.resolver)
      }
      const nr = {
          key: "drag",
          engine: class extends Mn {
            constructor(...e) {
              super(...e), gn(this, "ingKey", "dragging")
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
                e._bounds = Fn.bounds(r)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && n._pointerActive || (this.start(e), this.setupPointer(e), n._pointerId = Nn(e), n._pointerActive = !0, this.computeValues(jn(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Sn(e) ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                n = this.config;
              if (!t._pointerActive) return;
              const r = Nn(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              const o = jn(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = fn.sub(o, t._values), this.computeValues(o)), fn.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : n.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === n.preventScrollAxis || "xy" === n.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                n = this.config;
              if (!t._active || !t._pointerActive) return;
              const r = Nn(e);
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
                this.start(e), n._delta = t(this.config.keyboardDisplacement, r), n._keyboardActive = !0, fn.addTo(n._movement, n._delta), this.compute(e), this.emit()
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
          resolver: Xn
        },
        rr = {
          key: "hover",
          engine: class extends Mn {
            constructor(...e) {
              super(...e), gn(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(jn(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const n = jn(e);
              t._movement = t._delta = fn.sub(n, t._values), this.computeValues(n), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Qn
        },
        or = {
          key: "move",
          engine: class extends Mn {
            constructor(...e) {
              super(...e), gn(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(jn(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = jn(e),
                n = this.state;
              n._delta = fn.sub(t, n._values), fn.addTo(n._movement, n._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: $n
        },
        ir = {
          key: "pinch",
          engine: class extends kn {
            constructor(...e) {
              super(...e), gn(this, "ingKey", "pinching"), gn(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? fn.add(t, n) : [(1 + t[0]) * n[0], t[1] + n[1]]
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
              const o = On(...Array.from(n.values()));
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
              const n = On(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = fn.sub(t._movement, n), this.compute(e), this.emit()
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
              t._delta = [-Rn(e)[1] / 100 * t.offset[0], 0], fn.addTo(t._movement, t._delta), Kn(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Wn
        },
        ar = {
          key: "scroll",
          engine: class extends Mn {
            constructor(...e) {
              super(...e), gn(this, "ingKey", "scrolling")
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
              t._delta = fn.sub(n, t._values), fn.addTo(t._movement, t._delta), this.computeValues(n), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: Yn
        },
        sr = {
          key: "wheel",
          engine: class extends Mn {
            constructor(...e) {
              super(...e), gn(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Rn(e), fn.addTo(t._movement, t._delta), Kn(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: Zn
        };
      const lr = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Gn.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        cr = ["target", "eventOptions", "window", "enabled", "transform"];

      function ur(e = {}, t) {
        const n = {};
        for (const [r, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            n[r] = o.call(n, e[r], r, e);
            break;
          case "object":
            n[r] = ur(e[r], o);
            break;
          case "boolean":
            o && (n[r] = e[r])
        }
        return n
      }
      class dr {
        constructor(e, t) {
          gn(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, n, r, o) {
          const i = this._listeners,
            a = function(e, t = "") {
              const n = bn[e];
              return e + (n && n[t] || t)
            }(t, n),
            s = yn(yn({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class hr {
        constructor() {
          gn(this, "_timeouts", new Map)
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
      class fr {
        constructor(e) {
          var t, n;
          gn(this, "gestures", new Set), gn(this, "_targetEventStore", new dr(this)), gn(this, "gestureEventStores", {}), gn(this, "gestureTimeoutStores", {}), gn(this, "handlers", {}), gn(this, "config", {}), gn(this, "pointerIds", new Set), gn(this, "touchIds", new Set), gn(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (n = e).drag && pr(t, "drag"), n.wheel && pr(t, "wheel"), n.scroll && pr(t, "scroll"), n.move && pr(t, "move"), n.pinch && pr(t, "pinch"), n.hover && pr(t, "hover")
        }
        setEventIds(e) {
          return Pn(e) ? (this.touchIds = new Set(function(e) {
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
              }(r, cr);
            if (n.shared = ur({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              }, lr), t) {
              const e = er.get(t);
              n[t] = ur(yn({
                shared: n.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = er.get(e);
                t && (n[e] = ur(yn({
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
                  i = mr(n, o.eventOptions, !!r);
                o.enabled && new(Jn.get(t))(this, e, t).bind(i)
              }
              const o = mr(n, t.eventOptions, !!r);
              for (const t in this.nativeHandlers) o(t, "", (n => this.nativeHandlers[t](yn(yn({}, this.state.shared), {}, {
                event: n,
                args: e
              }))), void 0, !0)
            }
            for (const e in n) n[e] = In(...n[e]);
            if (!r) return n;
            for (const e in n) {
              const {
                device: t,
                capture: o,
                passive: i
              } = En(e);
              this._targetEventStore.add(r, t, "", n[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function pr(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new dr(e, t), e.gestureTimeoutStores[t] = new hr
      }
      const mr = (e, t, n) => (r, o, i, a = {}, s = !1) => {
          var l, c;
          const u = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = a.passive) && void 0 !== c ? c : t.passive;
          let h = s ? r : function(e, t = "", n = !1) {
            const r = bn[e],
              o = r && r[t] || t;
            return "on" + _n(e) + _n(o) + (function(e = !1, t) {
              return e && !wn.includes(t)
            }(n, o) ? "Capture" : "")
          }(r, o, u);
          n && d && (h += "Passive"), e[h] = e[h] || [], e[h].push(i)
        },
        gr = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function vr(e, t, n, r, o, i) {
        if (!e.has(n)) return;
        if (!Jn.has(r)) return;
        const a = n + "Start",
          s = n + "End";
        o[r] = e => {
          let r;
          return e.first && a in t && t[a](e), n in t && (r = t[n](e)), e.last && s in t && t[s](e), r
        }, i[r] = i[r] || {}
      }

      function yr(e, t) {
        const n = ([nr, ir, ar, sr, or, rr].forEach(tr), function(e, t) {
          const {
            handlers: n,
            nativeHandlers: r,
            config: o
          } = function(e, t) {
            const [n, r, o] = function(e) {
              const t = {},
                n = {},
                r = new Set;
              for (let o in e) gr.test(o) ? (r.add(RegExp.lastMatch), n[o] = e[o]) : t[o] = e[o];
              return [n, t, r]
            }(e), i = {};
            return vr(o, n, "onDrag", "drag", i, t), vr(o, n, "onWheel", "wheel", i, t), vr(o, n, "onScroll", "scroll", i, t), vr(o, n, "onPinch", "pinch", i, t), vr(o, n, "onMove", "move", i, t), vr(o, n, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: r
            }
          }(e, t || {});
          return function(e, t = {}, n, r) {
            const o = p().useMemo((() => new fr(e)), []);
            if (o.applyHandlers(e, r), o.applyConfig(t, n), p().useEffect(o.effect.bind(o)), p().useEffect((() => o.clean.bind(o)), []), void 0 === t.target) return o.bind.bind(o)
          }(n, o, void 0, r)
        });
        return n(e, t || {})
      }
      var br = Dr(),
        _r = e => Rr(e, br),
        wr = Dr();
      _r.write = e => Rr(e, wr);
      var xr = Dr();
      _r.onStart = e => Rr(e, xr);
      var Er = Dr();
      _r.onFrame = e => Rr(e, Er);
      var Pr = Dr();
      _r.onFinish = e => Rr(e, Pr);
      var Sr = [];
      _r.setTimeout = (e, t) => {
        const n = _r.now() + t,
          r = () => {
            const e = Sr.findIndex((e => e.cancel == r));
            ~e && Sr.splice(e, 1), Nr -= ~e ? 1 : 0
          },
          o = {
            time: n,
            handler: e,
            cancel: r
          };
        return Sr.splice(Cr(n), 0, o), Nr += 1, Lr(), o
      };
      var Cr = e => ~(~Sr.findIndex((t => t.time > e)) || ~Sr.length);
      _r.cancel = e => {
        xr.delete(e), Er.delete(e), Pr.delete(e), br.delete(e), wr.delete(e)
      }, _r.sync = e => {
        jr = !0, _r.batchedUpdates(e), jr = !1
      }, _r.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, _r.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          xr.delete(n), t = null
        }, r
      };
      var Or = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      _r.use = e => Or = e, _r.now = "undefined" != typeof performance ? () => performance.now() : Date.now, _r.batchedUpdates = e => e(), _r.catch = console.error, _r.frameLoop = "always", _r.advance = () => {
        "demand" !== _r.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Ir()
      };
      var Tr = -1,
        Nr = 0,
        jr = !1;

      function Rr(e, t) {
        jr ? (t.delete(e), e(0)) : (t.add(e), Lr())
      }

      function Lr() {
        Tr < 0 && (Tr = 0, "demand" !== _r.frameLoop && Or(Ar))
      }

      function Ar() {
        ~Tr && (Or(Ar), _r.batchedUpdates(Ir))
      }

      function Ir() {
        const e = Tr;
        Tr = _r.now();
        const t = Cr(Tr);
        t && (kr(Sr.splice(0, t), (e => e.handler())), Nr -= t), Nr ? (xr.flush(), br.flush(e ? Math.min(64, Tr - e) : 16.667), Er.flush(), wr.flush(), Pr.flush()) : Tr = -1
      }

      function Dr() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            Nr += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (Nr -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, Nr -= t.size, kr(t, (t => t(n) && e.add(t))), Nr += e.size, t = e)
          }
        }
      }

      function kr(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            _r.catch(e)
          }
        }))
      }
      var Mr = Object.defineProperty,
        Hr = {};

      function Br() {}((e, t) => {
        for (var n in t) Mr(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(Hr, {
        assign: () => Jr,
        colors: () => Yr,
        createStringInterpolator: () => Xr,
        skipAnimation: () => Zr,
        to: () => Kr,
        willAdvance: () => Qr
      });
      var Fr = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Vr(e, t) {
        if (Fr.arr(e)) {
          if (!Fr.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var zr = (e, t) => e.forEach(t);

      function Ur(e, t, n) {
        if (Fr.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      var Gr = e => Fr.und(e) ? [] : Fr.arr(e) ? e : [e];

      function qr(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), zr(n, t)
        }
      }
      var Xr, Kr, Wr = (e, ...t) => qr(e, (e => e(...t))),
        $r = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Yr = null,
        Zr = !1,
        Qr = Br,
        Jr = e => {
          e.to && (Kr = e.to), e.now && (_r.now = e.now), void 0 !== e.colors && (Yr = e.colors), null != e.skipAnimation && (Zr = e.skipAnimation), e.createStringInterpolator && (Xr = e.createStringInterpolator), e.requestAnimationFrame && _r.use(e.requestAnimationFrame), e.batchedUpdates && (_r.batchedUpdates = e.batchedUpdates), e.willAdvance && (Qr = e.willAdvance), e.frameLoop && (_r.frameLoop = e.frameLoop)
        },
        eo = new Set,
        to = [],
        no = [],
        ro = 0,
        oo = {
          get idle() {
            return !eo.size && !to.length
          },
          start(e) {
            ro > e.priority ? (eo.add(e), _r.onStart(io)) : (ao(e), _r(lo))
          },
          advance: lo,
          sort(e) {
            if (ro) _r.onFrame((() => oo.sort(e)));
            else {
              const t = to.indexOf(e);
              ~t && (to.splice(t, 1), so(e))
            }
          },
          clear() {
            to = [], eo.clear()
          }
        };

      function io() {
        eo.forEach(ao), eo.clear(), _r(lo)
      }

      function ao(e) {
        to.includes(e) || so(e)
      }

      function so(e) {
        to.splice(function(t) {
          const n = t.findIndex((t => t.priority > e.priority));
          return n < 0 ? t.length : n
        }(to), 0, e)
      }

      function lo(e) {
        const t = no;
        for (let n = 0; n < to.length; n++) {
          const r = to[n];
          ro = r.priority, r.idle || (Qr(r), r.advance(e), r.idle || t.push(r))
        }
        return ro = 0, (no = to).length = 0, (to = t).length > 0
      }
      var co = "[-+]?\\d*\\.?\\d+",
        uo = co + "%";

      function ho(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var fo = new RegExp("rgb" + ho(co, co, co)),
        po = new RegExp("rgba" + ho(co, co, co, co)),
        mo = new RegExp("hsl" + ho(co, uo, uo)),
        go = new RegExp("hsla" + ho(co, uo, uo, co)),
        vo = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        yo = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        bo = /^#([0-9a-fA-F]{6})$/,
        _o = /^#([0-9a-fA-F]{8})$/;

      function wo(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function xo(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = wo(o, r, e + 1 / 3),
          a = wo(o, r, e),
          s = wo(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function Eo(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Po(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function So(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Co(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Oo(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = bo.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Yr && void 0 !== Yr[e] ? Yr[e] : (t = fo.exec(e)) ? (Eo(t[1]) << 24 | Eo(t[2]) << 16 | Eo(t[3]) << 8 | 255) >>> 0 : (t = po.exec(e)) ? (Eo(t[1]) << 24 | Eo(t[2]) << 16 | Eo(t[3]) << 8 | So(t[4])) >>> 0 : (t = vo.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = _o.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = yo.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = mo.exec(e)) ? (255 | xo(Po(t[1]), Co(t[2]), Co(t[3]))) >>> 0 : (t = go.exec(e)) ? (xo(Po(t[1]), Co(t[2]), Co(t[3])) | So(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var To = (e, t, n) => {
          if (Fr.fun(e)) return e;
          if (Fr.arr(e)) return To({
            range: e,
            output: t,
            extrapolate: n
          });
          if (Fr.str(e.output[0])) return Xr(e);
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
        No = 1.70158,
        jo = 1.525 * No,
        Ro = No + 1,
        Lo = 2 * Math.PI / 3,
        Ao = 2 * Math.PI / 4.5,
        Io = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        Do = {
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
          easeInBack: e => Ro * e * e * e - No * e * e,
          easeOutBack: e => 1 + Ro * Math.pow(e - 1, 3) + No * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - jo) / 2 : (Math.pow(2 * e - 2, 2) * ((jo + 1) * (2 * e - 2) + jo) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Lo),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Lo) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ao) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ao) / 2 + 1,
          easeInBounce: e => 1 - Io(1 - e),
          easeOutBounce: Io,
          easeInOutBounce: e => e < .5 ? (1 - Io(1 - 2 * e)) / 2 : (1 + Io(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return ((e, t, n) => Math.min(Math.max(n, 0), 1))(0, 0, ("end" === t ? Math.floor(r) : Math.ceil(r)) / e)
          }
        },
        ko = Symbol.for("FluidValue.get"),
        Mo = Symbol.for("FluidValue.observers"),
        Ho = e => Boolean(e && e[ko]),
        Bo = e => e && e[ko] ? e[ko]() : e,
        Fo = e => e[Mo] || null;

      function Vo(e, t) {
        const n = e[Mo];
        n && n.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var zo = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Uo(this, e)
          }
        },
        Uo = (e, t) => Ko(e, ko, t);

      function Go(e, t) {
        if (e[ko]) {
          let n = e[Mo];
          n || Ko(e, Mo, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function qo(e, t) {
        const n = e[Mo];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[Mo] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      var Xo, Ko = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        Wo = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        $o = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Yo = new RegExp(`(${Wo.source})(%|[a-z]+)`, "i"),
        Zo = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Qo = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Jo = e => {
          const [t, n] = ei(e);
          if (!t || $r()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && Qo.test(n) ? Jo(n) : n || e
        },
        ei = e => {
          const t = Qo.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        },
        ti = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        ni = e => {
          Xo || (Xo = Yr ? new RegExp(`(${Object.keys(Yr).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => Bo(e).replace(Qo, Jo).replace($o, Oo).replace(Xo, Oo))),
            n = t.map((e => e.match(Wo).map(Number))),
            r = n[0].map(((e, t) => n.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))),
            o = r.map((t => To({
              ...e,
              output: t
            })));
          return e => {
            const n = !Yo.test(t[0]) && t.find((e => Yo.test(e)))?.replace(Wo, "");
            let r = 0;
            return t[0].replace(Wo, (() => `${o[r++](e)}${n||""}`)).replace(Zo, ti)
          }
        },
        ri = "react-spring: ",
        oi = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${ri}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        ii = oi(console.warn),
        ai = oi(console.warn);

      function si(e) {
        return Fr.str(e) && ("#" == e[0] || /\d/.test(e) || !$r() && Qo.test(e) || e in (Yr || {}))
      }
      var li = $r() ? h.useEffect : h.useLayoutEffect;

      function ci() {
        const e = (0, h.useState)()[1],
          t = (() => {
            const e = (0, h.useRef)(!1);
            return li((() => (e.current = !0, () => {
              e.current = !1
            })), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var ui = e => (0, h.useEffect)(e, di),
        di = [];

      function hi(e) {
        const t = (0, h.useRef)();
        return (0, h.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var fi = Symbol.for("Animated:node"),
        pi = e => e && e[fi],
        mi = (e, t) => {
          return n = e, r = fi, o = t, Object.defineProperty(n, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var n, r, o
        },
        gi = e => e && e[fi] && e[fi].getPayload(),
        vi = class {
          constructor() {
            mi(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        yi = class extends vi {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Fr.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new yi(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return Fr.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Fr.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        bi = class extends yi {
          constructor(e) {
            super(0), this._string = null, this._toString = To({
              output: [e, e]
            })
          }
          static create(e) {
            return new bi(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (Fr.str(e)) {
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
        _i = {
          dependencies: null
        },
        wi = class extends vi {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Ur(this.source, ((n, r) => {
              var o;
              (o = n) && o[fi] === o ? t[r] = n.getValue(e) : Ho(n) ? t[r] = Bo(n) : e || (t[r] = n)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && zr(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Ur(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            _i.dependencies && Ho(e) && _i.dependencies.add(e);
            const t = gi(e);
            t && zr(t, (e => this.add(e)))
          }
        },
        xi = class extends wi {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new xi(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(Ei)), !0)
          }
        };

      function Ei(e) {
        return (si(e) ? bi : yi).create(e)
      }

      function Pi(e) {
        const t = pi(e);
        return t ? t.constructor : Fr.arr(e) ? xi : si(e) ? bi : yi
      }
      var Si = (e, t) => {
          const n = !Fr.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, h.forwardRef)(((r, o) => {
            const i = (0, h.useRef)(null),
              a = n && (0, h.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (Fr.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [s, l] = function(e, t) {
                const n = new Set;
                return _i.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new wi(e), _i.dependencies = null, [e, n]
              }(r, t),
              c = ci(),
              u = () => {
                const e = i.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && c()
              },
              d = new Ci(u, l),
              f = (0, h.useRef)();
            li((() => (f.current = d, zr(l, (e => Go(e, d))), () => {
              f.current && (zr(f.current.deps, (e => qo(e, f.current))), _r.cancel(f.current.update))
            }))), (0, h.useEffect)(u, []), ui((() => () => {
              const e = f.current;
              zr(e.deps, (t => qo(t, e)))
            }));
            const p = t.getComponentProps(s.getValue());
            return h.createElement(e, {
              ...p,
              ref: a
            })
          }))
        },
        Ci = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && _r.write(this.update)
          }
        },
        Oi = Symbol.for("AnimatedComponent"),
        Ti = e => Fr.str(e) ? e : e && Fr.str(e.displayName) ? e.displayName : Fr.fun(e) && e.name || null;

      function Ni(e, ...t) {
        return Fr.fun(e) ? e(...t) : e
      }
      var ji = (e, t) => !0 === e || !!(t && e && (Fr.fun(e) ? e(t) : Gr(e).includes(t))),
        Ri = (e, t) => Fr.obj(e) ? t && e[t] : e,
        Li = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Ai = e => e,
        Ii = (e, t = Ai) => {
          let n = Di;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const o of n) {
            const n = t(e[o], o);
            Fr.und(n) || (r[o] = n)
          }
          return r
        },
        Di = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        ki = {
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

      function Mi(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (Ur(e, ((e, r) => {
              ki[r] || (t[r] = e, n++)
            })), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return Ur(e, ((e, r) => r in t || (n[r] = e))), n
        }
        return {
          ...e
        }
      }

      function Hi(e) {
        return e = Bo(e), Fr.arr(e) ? e.map(Hi) : si(e) ? Hr.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Bi(e) {
        for (const t in e) return !0;
        return !1
      }

      function Fi(e) {
        return Fr.fun(e) || Fr.arr(e) && Fr.obj(e[0])
      }

      function Vi(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function zi(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }
      var Ui = {
          tension: 170,
          friction: 26
        },
        Gi = {
          ...Ui,
          mass: 1,
          damping: 1,
          easing: Do.linear,
          clamp: !1
        },
        qi = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Gi)
          }
        };

      function Xi(e, t) {
        if (Fr.und(t.decay)) {
          const n = !Fr.und(t.tension) || !Fr.und(t.friction);
          !n && Fr.und(t.frequency) && Fr.und(t.damping) && Fr.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Ki = [],
        Wi = class {
          constructor() {
            this.changed = !1, this.values = Ki, this.toValues = null, this.fromValues = Ki, this.config = new qi, this.immediate = !1
          }
        };

      function $i(e, {
        key: t,
        props: n,
        defaultProps: r,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, c, u = ji(n.cancel ?? r?.cancel, t);
          if (u) f();
          else {
            Fr.und(n.pause) || (o.paused = ji(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = o.paused || ji(e, t)), l = Ni(n.delay || 0, t), e ? (o.resumeQueue.add(h), i.pause()) : (i.resume(), h())
          }

          function d() {
            o.resumeQueue.add(h), o.timeouts.delete(c), c.cancel(), l = c.time - _r.now()
          }

          function h() {
            l > 0 && !Hr.skipAnimation ? (o.delayed = !0, c = _r.setTimeout(f, l), o.pauseQueue.add(d), o.timeouts.add(c)) : f()
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
      var Yi = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? Ji(e.get()) : t.every((e => e.noop)) ? Zi(e.get()) : Qi(e.get(), t.every((e => e.finished))),
        Zi = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Qi = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        Ji = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function ea(e, t, n, r) {
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
          const c = Ii(t, ((e, t) => "onRest" === t ? void 0 : e));
          let u, d;
          const h = new Promise(((e, t) => (u = e, d = t))),
            f = e => {
              const t = o <= (n.cancelId || 0) && Ji(r) || o !== n.asyncId && Qi(r, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new na,
                a = new ra;
              return (async () => {
                if (Hr.skipAnimation) throw ta(n), a.result = Qi(r, !1), d(a), a;
                f(i);
                const s = Fr.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Ur(c, ((e, t) => {
                  Fr.und(s[t]) && (s[t] = e)
                }));
                const l = await r.start(s);
                return f(i), n.paused && await new Promise((e => {
                  n.resumeQueue.add(e)
                })), l
              })()
            };
          let m;
          if (Hr.skipAnimation) return ta(n), Qi(r, !1);
          try {
            let t;
            t = Fr.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, r.stop.bind(r))), await Promise.all([t.then(u), h]), m = Qi(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof na) m = e.result;
            else {
              if (!(e instanceof ra)) throw e;
              m = e.result
            }
          } finally {
            o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? l : void 0)
          }
          return Fr.fun(a) && _r.batchedUpdates((() => {
            a(m, r, r.item)
          })), m
        })() : l
      }

      function ta(e, t) {
        qr(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var na = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        ra = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        oa = e => e instanceof aa,
        ia = 1,
        aa = class extends zo {
          constructor() {
            super(...arguments), this.id = ia++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = pi(this);
            return e && e.getValue()
          }
          to(...e) {
            return Hr.to(this, e)
          }
          interpolate(...e) {
            return ii(`${ri}The "interpolate" function is deprecated in v9 (use "to" instead)`), Hr.to(this, e)
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
            this.idle || oo.sort(this), Vo(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        sa = Symbol.for("SpringPhase"),
        la = e => (1 & e[sa]) > 0,
        ca = e => (2 & e[sa]) > 0,
        ua = e => (4 & e[sa]) > 0,
        da = (e, t) => t ? e[sa] |= 3 : e[sa] &= -3,
        ha = (e, t) => t ? e[sa] |= 4 : e[sa] &= -5,
        fa = class extends aa {
          constructor(e, t) {
            if (super(), this.animation = new Wi, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Fr.und(e) || !Fr.und(t)) {
              const n = Fr.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Fr.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(ca(this) || this._state.asyncTo) || ua(this)
          }
          get goal() {
            return Bo(this.animation.to)
          }
          get velocity() {
            const e = pi(this);
            return e instanceof yi ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return la(this)
          }
          get isAnimating() {
            return ca(this)
          }
          get isPaused() {
            return ua(this)
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
            } = r, a = gi(r.to);
            !a && Ho(r.to) && (o = Gr(Bo(r.to))), r.values.forEach(((s, l) => {
              if (s.done) return;
              const c = s.constructor == bi ? 1 : a ? a[l].lastPosition : o[l];
              let u = r.immediate,
                d = c;
              if (!u) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const n = r.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = Fr.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const h = i.precision || (n == c ? .005 : Math.min(1, .001 * Math.abs(c - n)));
                if (Fr.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * t);
                    d = n + o / (1 - e) * (1 - r), u = Math.abs(s.lastPosition - d) <= h, a = o * r
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || h / 10,
                      r = i.clamp ? 0 : i.bounce,
                      l = !Fr.und(r),
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
            const s = pi(this),
              l = s.getValue();
            if (t) {
              const e = Bo(r.to);
              l === e && !n || i.decay ? n && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(l)
          }
          set(e) {
            return _r.batchedUpdates((() => {
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
            if (ca(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              _r.batchedUpdates((() => {
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
            return Fr.und(e) ? (n = this.queue || [], this.queue = []) : n = [Fr.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map((e => this._update(e)))).then((e => Yi(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), ta(this._state, e && this._lastCallId), _r.batchedUpdates((() => this._stop(t, e))), this
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
            n = Fr.obj(n) ? n[t] : n, (null == n || Fi(n)) && (n = void 0), r = Fr.obj(r) ? r[t] : r, null == r && (r = void 0);
            const o = {
              to: n,
              from: r
            };
            return la(this) || (e.reverse && ([n, r] = [r, n]), r = Bo(r), Fr.und(r) ? pi(this) || this._set(n) : this._set(r)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, Ii(e, ((e, t) => /^on/.test(t) ? Ri(e, n) : e))), _a(this, e, "onProps"), wa(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return $i(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: i,
              actions: {
                pause: () => {
                  ua(this) || (ha(this, !0), Wr(i.pauseQueue), wa(this, "onPause", Qi(this, pa(this, this.animation.to)), this))
                },
                resume: () => {
                  ua(this) && (ha(this, !1), ca(this) && this._resume(), Wr(i.resumeQueue), wa(this, "onResume", Qi(this, pa(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = ma(e);
                if (t) return this._update(t, !0)
              }
              return n
            }))
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(Ji(this));
            const r = !Fr.und(e.to),
              o = !Fr.und(e.from);
            if (r || o) {
              if (!(t.callId > this._lastToId)) return n(Ji(this));
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
            !o || r || t.default && !Fr.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const h = !Vr(d, c);
            h && (s.from = d), d = Bo(d);
            const f = !Vr(u, l);
            f && this._focus(u);
            const p = Fi(t.to),
              {
                config: m
              } = s,
              {
                decay: g,
                velocity: v
              } = m;
            (r || o) && (m.velocity = 0), t.config && !p && function(e, t, n) {
              n && (Xi(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), Xi(e, t), Object.assign(e, t);
              for (const t in Gi) null == e[t] && (e[t] = Gi[t]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              Fr.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
            }(m, Ni(t.config, i), t.config !== a.config ? Ni(a.config, i) : void 0);
            let y = pi(this);
            if (!y || Fr.und(u)) return n(Qi(this, !0));
            const b = Fr.und(t.reset) ? o && !t.default : !Fr.und(d) && ji(t.reset, i),
              _ = b ? d : this.get(),
              w = Hi(u),
              x = Fr.num(w) || Fr.arr(w) || si(w),
              E = !p && (!x || ji(a.immediate || t.immediate, i));
            if (f) {
              const e = Pi(u);
              if (e !== y.constructor) {
                if (!E) throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);
                y = this._set(w)
              }
            }
            const P = y.constructor;
            let S = Ho(u),
              C = !1;
            if (!S) {
              const e = b || !la(this) && h;
              (f || e) && (C = Vr(Hi(_), w), S = !C), (Vr(s.immediate, E) || E) && Vr(m.decay, g) && Vr(m.velocity, v) || (S = !0)
            }
            if (C && ca(this) && (s.changed && !b ? S = !0 : S || this._stop(l)), !p && ((S || Ho(l)) && (s.values = y.getPayload(), s.toValues = Ho(u) ? null : P == bi ? [1] : Gr(w)), s.immediate != E && (s.immediate = E, E || b || this._set(l)), S)) {
              const {
                onRest: e
              } = s;
              zr(ba, (e => _a(this, t, e)));
              const r = Qi(this, pa(this, l));
              Wr(this._pendingCalls, r), this._pendingCalls.add(n), s.changed && _r.batchedUpdates((() => {
                s.changed = !b, e?.(r, this), b ? Ni(a.onRest, r) : s.onStart?.(r, this)
              }))
            }
            b && this._set(_), p ? n(ea(t.to, t, this._state, this)) : S ? this._start() : ca(this) && !f ? this._pendingCalls.add(n) : n(Zi(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Fo(this) && this._detach(), t.to = e, Fo(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Ho(t) && (Go(t, this), oa(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Ho(e) && qo(e, this)
          }
          _set(e, t = !0) {
            const n = Bo(e);
            if (!Fr.und(n)) {
              const e = pi(this);
              if (!e || !Vr(n, e.getValue())) {
                const r = Pi(n);
                e && e.constructor == r ? e.setValue(n) : mi(this, r.create(n)), e && _r.batchedUpdates((() => {
                  this._onChange(n, t)
                }))
              }
            }
            return pi(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, wa(this, "onStart", Qi(this, pa(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Ni(this.animation.onChange, e, this)), Ni(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            pi(this).reset(Bo(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), ca(this) || (da(this, !0), ua(this) || this._resume())
          }
          _resume() {
            Hr.skipAnimation ? this.finish() : oo.start(this)
          }
          _stop(e, t) {
            if (ca(this)) {
              da(this, !1);
              const n = this.animation;
              zr(n.values, (e => {
                e.done = !0
              })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Vo(this, {
                type: "idle",
                parent: this
              });
              const r = t ? Ji(this.get()) : Qi(this.get(), pa(this, e ?? n.to));
              Wr(this._pendingCalls, r), n.changed && (n.changed = !1, wa(this, "onRest", r, this))
            }
          }
        };

      function pa(e, t) {
        const n = Hi(t);
        return Vr(Hi(e.get()), n)
      }

      function ma(e, t = e.loop, n = e.to) {
        const r = Ni(t);
        if (r) {
          const o = !0 !== r && Mi(r),
            i = (o || e).reverse,
            a = !o || o.reset;
          return ga({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Fi(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function ga(e) {
        const {
          to: t,
          from: n
        } = e = Mi(e), r = new Set;
        return Fr.obj(t) && ya(t, r), Fr.obj(n) && ya(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function va(e) {
        const t = ga(e);
        return Fr.und(t.default) && (t.default = Ii(t)), t
      }

      function ya(e, t) {
        Ur(e, ((e, n) => null != e && t.add(n)))
      }
      var ba = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function _a(e, t, n) {
        e.animation[n] = t[n] !== Li(t, n) ? Ri(t[n], e.key) : void 0
      }

      function wa(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var xa = ["onStart", "onChange", "onRest"],
        Ea = 1,
        Pa = class {
          constructor(e, t) {
            this.id = Ea++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              Fr.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(ga(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Gr(e).map(ga) : this.queue = [], this._flush ? this._flush(this, t) : (Ra(this, t), Sa(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              zr(Gr(t), (t => n[t].stop(!!e)))
            } else ta(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (Fr.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              zr(Gr(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (Fr.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              zr(Gr(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            Ur(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, qr(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !r && this._started,
              a = o || i && n.size ? this.get() : null;
            o && t.size && qr(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, qr(n, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            _r.onFrame(this._onFrame)
          }
        };

      function Sa(e, t) {
        return Promise.all(t.map((t => Ca(e, t)))).then((t => Yi(e, t)))
      }
      async function Ca(e, t, n) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, c = Fr.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = Fr.arr(o) || Fr.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : zr(xa, (n => {
          const r = t[n];
          if (Fr.fun(r)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, Wr(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const h = (r || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
          f = !0 === t.cancel || !0 === Li(t, "cancel");
        (u || f && d.asyncId) && h.push($i(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Br,
            resume: Br,
            start(t, n) {
              f ? (ta(d, e._lastAsyncId), n(Ji(e))) : (t.onRest = s, n(ea(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = Yi(e, await Promise.all(h));
        if (a && p.finished && (!n || !p.noop)) {
          const n = ma(t, a, o);
          if (n) return Ra(e, [n]), Ca(e, n, !0)
        }
        return l && _r.batchedUpdates((() => l(p, e, e.item))), p
      }

      function Oa(e, t) {
        const n = {
          ...e.springs
        };
        return t && zr(Gr(t), (e => {
          Fr.und(e.keys) && (e = ga(e)), Fr.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), ja(n, e, (e => Na(e)))
        })), Ta(e, n), n
      }

      function Ta(e, t) {
        Ur(t, ((t, n) => {
          e.springs[n] || (e.springs[n] = t, Go(t, e))
        }))
      }

      function Na(e, t) {
        const n = new fa;
        return n.key = e, t && Go(n, t), n
      }

      function ja(e, t, n) {
        t.keys && zr(t.keys, (r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        }))
      }

      function Ra(e, t) {
        zr(t, (t => {
          ja(e.springs, t, (t => Na(t, e)))
        }))
      }
      var La, Aa, Ia = ({
          children: e,
          ...t
        }) => {
          const n = (0, h.useContext)(Da),
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
          } = Da;
          return h.createElement(i, {
            value: t
          }, e)
        },
        Da = (La = Ia, Aa = {}, Object.assign(La, h.createContext(Aa)), La.Provider._context = La, La.Consumer._context = La, La);
      Ia.Provider = Da.Provider, Ia.Consumer = Da.Consumer;
      var ka = () => {
        const e = [],
          t = function(t) {
            ai(`${ri}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const r = [];
            return zr(e, ((e, o) => {
              if (Fr.und(t)) r.push(e.start());
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
          return zr(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return zr(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          zr(e, ((e, n) => {
            const r = Fr.fun(t) ? t(n, e) : t;
            r && e.set(r)
          }))
        }, t.start = function(t) {
          const n = [];
          return zr(e, ((e, r) => {
            if (Fr.und(t)) n.push(e.start());
            else {
              const o = this._getProps(t, e, r);
              o && n.push(e.start(o))
            }
          })), n
        }, t.stop = function() {
          return zr(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return zr(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
        };
        const n = function(e, t, n) {
          return Fr.fun(e) ? e(n, t) : e
        };
        return t._getProps = n, t
      };

      function Ma(e, t) {
        const n = Fr.fun(e),
          [
            [r], o
          ] = function(e, t, n) {
            const r = Fr.fun(t) && t;
            r && !n && (n = []);
            const o = (0, h.useMemo)((() => r || 3 == arguments.length ? ka() : void 0), []),
              i = (0, h.useRef)(0),
              a = ci(),
              s = (0, h.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const n = Oa(e, t);
                  return i.current > 0 && !s.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? Sa(e, t) : new Promise((r => {
                    Ta(e, n), s.queue.push((() => {
                      r(Sa(e, t))
                    })), a()
                  }))
                }
              })), []),
              l = (0, h.useRef)([...s.ctrls]),
              c = [],
              u = hi(e) || 0;

            function d(e, n) {
              for (let o = e; o < n; o++) {
                const e = l.current[o] || (l.current[o] = new Pa(null, s.flush)),
                  n = r ? r(o, e) : t[o];
                n && (c[o] = va(n))
              }
            }(0, h.useMemo)((() => {
              zr(l.current.slice(e, u), (e => {
                Vi(e, o), e.stop(!0)
              })), l.current.length = e, d(u, e)
            }), [e]), (0, h.useMemo)((() => {
              d(0, Math.min(u, e))
            }), n);
            const f = l.current.map(((e, t) => Oa(e, c[t]))),
              p = (0, h.useContext)(Ia),
              m = hi(p),
              g = p !== m && Bi(p);
            li((() => {
              i.current++, s.ctrls = l.current;
              const {
                queue: e
              } = s;
              e.length && (s.queue = [], zr(e, (e => e()))), zr(l.current, ((e, t) => {
                o?.add(e), g && e.start({
                  default: p
                });
                const n = c[t];
                n && (zi(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
              }))
            })), ui((() => () => {
              zr(s.ctrls, (e => e.stop(!0)))
            }));
            const v = f.map((e => ({
              ...e
            })));
            return o ? [v, o] : v
          }(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [r, o] : r
      }
      var Ha = () => ka(),
        Ba = () => (0, h.useState)(Ha)[0];
      var Fa = 1,
        Va = class extends aa {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = To(...t);
            const n = this._get(),
              r = Pi(n);
            mi(this, r.create(n))
          }
          advance(e) {
            const t = this._get();
            Vr(t, this.get()) || (pi(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Ua(this._active) && Ga(this)
          }
          _get() {
            const e = Fr.arr(this.source) ? this.source.map(Bo) : Gr(Bo(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Ua(this._active) && (this.idle = !1, zr(gi(this), (e => {
              e.done = !1
            })), Hr.skipAnimation ? (_r.batchedUpdates((() => this.advance())), Ga(this)) : oo.start(this))
          }
          _attach() {
            let e = 1;
            zr(Gr(this.source), (t => {
              Ho(t) && Go(t, this), oa(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            zr(Gr(this.source), (e => {
              Ho(e) && qo(e, this)
            })), this._active.clear(), Ga(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Gr(this.source).reduce(((e, t) => Math.max(e, (oa(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function za(e) {
        return !1 !== e.idle
      }

      function Ua(e) {
        return !e.size || Array.from(e).every(za)
      }

      function Ga(e) {
        e.idle || (e.idle = !0, zr(gi(e), (e => {
          e.done = !0
        })), Vo(e, {
          type: "idle",
          parent: e
        }))
      }
      Hr.assign({
        createStringInterpolator: ni,
        to: (e, t) => new Va(e, t)
      }), oo.advance;
      var qa = /^--/;

      function Xa(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || qa.test(e) || Wa.hasOwnProperty(e) && Wa[e] ? ("" + t).trim() : t + "px"
      }
      var Ka = {},
        Wa = {
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
        $a = ["Webkit", "Ms", "Moz", "O"];
      Wa = Object.keys(Wa).reduce(((e, t) => ($a.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), Wa);
      var Ya = /^(matrix|translate|scale|rotate|skew)/,
        Za = /^(translate)/,
        Qa = /^(rotate|skew)/,
        Ja = (e, t) => Fr.num(e) && 0 !== e ? e + t : e,
        es = (e, t) => Fr.arr(e) ? e.every((e => es(e, t))) : Fr.num(e) ? e === t : parseFloat(e) === t,
        ts = class extends wi {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((e => [`translate3d(${e.map((e=>Ja(e,"px"))).join(",")})`, es(e, 0)]))), Ur(r, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (Ya.test(t)) {
                if (delete r[t], Fr.und(e)) return;
                const n = Za.test(t) ? "px" : Qa.test(t) ? "deg" : "";
                o.push(Gr(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${Ja(o,n)})`, es(o, 0)] : e => [`${t}(${e.map((e=>Ja(e,n))).join(",")})`, es(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new ns(o, i)), super(r)
          }
        },
        ns = class extends zo {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return zr(this.inputs, ((n, r) => {
              const o = Bo(n[0]),
                [i, a] = this.transforms[r](Fr.arr(o) ? o : n.map(Bo));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && zr(this.inputs, (e => zr(e, (e => Ho(e) && Go(e, this)))))
          }
          observerRemoved(e) {
            0 == e && zr(this.inputs, (e => zr(e, (e => Ho(e) && qo(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Vo(this, e)
          }
        };
      Hr.assign({
        batchedUpdates: Gt.unstable_batchedUpdates,
        createStringInterpolator: ni,
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
      var rs = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: n = e => new wi(e),
          getComponentProps: r = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            i = e => {
              const t = Ti(e) || "Anonymous";
              return (e = Fr.str(e) ? i[e] || (i[e] = Si(e, o)) : e[Oi] || (e[Oi] = Si(e, o))).displayName = `Animated(${t})`, e
            };
          return Ur(e, ((t, n) => {
            Fr.arr(e) && (n = Ti(t)), i[n] = i(t)
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
              d = Object.keys(c).map((t => n || e.hasAttribute(t) ? t : Ka[t] || (Ka[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const n = Xa(t, o[t]);
                qa.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } d.forEach(((t, n) => {
              e.setAttribute(t, u[n])
            })), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new ts(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        os = rs.animated;
      const is = (e, t, n) => {
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
        as = e => {
          const t = (e, t, n) => {
            n(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, n) => {
            const r = n.getBoundingClientRect();
            return e ? (t(e.top, r.top, ((e, t) => e < t)), t(e.bottom, r.bottom, ((e, t) => e > t)), t(e.left, r.left, ((e, t) => e < t)), t(e.right, r.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), r) : r
          }), null)
        },
        ss = ([e, t], n) => {
          const {
            a: r
          } = new DOMMatrix(n.style.transform), o = as(n), i = o.width / r, a = 100 * cs(e, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / i, s = o.height / r;
          return {
            x: a,
            y: 100 * cs(t, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / s
          }
        },
        ls = (e, t, n, r) => {
          let o = n[0],
            i = n[1];
          const {
            a
          } = new DOMMatrix(e.style.transform), s = r / 100, l = as(e), c = t.getBoundingClientRect(), u = l.width / a / 2, d = c.width / 2, h = u * s > d ? u * s - d : 0, f = l.height / a / 2, p = c.height / 2, m = f * s > p ? f * s - p : 0, g = -o > h, v = o > h, y = i > m, b = -i > m;
          return g && !v ? o = -h : v && !g && (o = h), y && !b ? i = m : b && !y && (i = -m), {
            xy: [o, i],
            horizontalOffset: h,
            verticalOffset: m
          }
        },
        cs = (e, t, n) => Math.min(Math.max(e, t), n),
        us = {
          mass: .1,
          tension: 800,
          friction: 20,
          clamp: !1,
          precision: .001,
          velocity: 0
        },
        ds = Ui,
        hs = {
          scrollFactor: 2e3,
          dragFactor: 1.3,
          closePc: 33
        },
        fs = ({
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
          }), yr({
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
            children: (0, u.jsx)(os.div, {
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
      var ps = n(91299);

      function ms(e, t) {
        var n = t && t.cache ? t.cache : Cs,
          r = t && t.serializer ? t.serializer : _s;
        return (t && t.strategy ? t.strategy : bs)(e, {
          cache: n,
          serializer: r
        })
      }

      function gs(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function vs(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function ys(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function bs(e, t) {
        return ys(e, this, 1 === e.length ? gs : vs, t.cache.create(), t.serializer)
      }
      var _s = function() {
        return JSON.stringify(arguments)
      };

      function ws() {
        this.cache = Object.create(null)
      }
      ws.prototype.get = function(e) {
        return this.cache[e]
      }, ws.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var xs, Es, Ps, Ss, Cs = {
          create: function() {
            return new ws
          }
        },
        Os = {
          variadic: function(e, t) {
            return ys(e, this, vs, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return ys(e, this, gs, t.cache.create(), t.serializer)
          }
        };

      function Ts(e) {
        return e.type === Es.literal
      }

      function Ns(e) {
        return e.type === Es.argument
      }

      function js(e) {
        return e.type === Es.number
      }

      function Rs(e) {
        return e.type === Es.date
      }

      function Ls(e) {
        return e.type === Es.time
      }

      function As(e) {
        return e.type === Es.select
      }

      function Is(e) {
        return e.type === Es.plural
      }

      function Ds(e) {
        return e.type === Es.pound
      }

      function ks(e) {
        return e.type === Es.tag
      }

      function Ms(e) {
        return !(!e || "object" != typeof e || e.type !== Ps.number)
      }

      function Hs(e) {
        return !(!e || "object" != typeof e || e.type !== Ps.dateTime)
      }(Ss = xs || (xs = {}))[Ss.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", Ss[Ss.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", Ss[Ss.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", Ss[Ss.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", Ss[Ss.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", Ss[Ss.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", Ss[Ss.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", Ss[Ss.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", Ss[Ss.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", Ss[Ss.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", Ss[Ss.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", Ss[Ss.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", Ss[Ss.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", Ss[Ss.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", Ss[Ss.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", Ss[Ss.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", Ss[Ss.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", Ss[Ss.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", Ss[Ss.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", Ss[Ss.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", Ss[Ss.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", Ss[Ss.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", Ss[Ss.INVALID_TAG = 23] = "INVALID_TAG", Ss[Ss.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", Ss[Ss.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", Ss[Ss.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(Es || (Es = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(Ps || (Ps = {}));
      var Bs = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Fs = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Vs(e) {
        var t = {};
        return e.replace(Fs, (function(e) {
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
      var zs = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function Us(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], n = 0, r = e.split(zs).filter((function(e) {
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
      var Gs = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        qs = /^(@+)?(\+|#+)?[rs]?$/g,
        Xs = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Ks = /^(0+)$/;

      function Ws(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(qs, (function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        })), t
      }

      function $s(e) {
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

      function Ys(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !Ks.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function Zs(e) {
        return $s(e) || {}
      }

      function Qs(e) {
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
              t = (0, ps.__assign)((0, ps.__assign)((0, ps.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, ps.__assign)((0, ps.__assign)({}, e), Zs(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, ps.__assign)((0, ps.__assign)((0, ps.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, ps.__assign)((0, ps.__assign)({}, e), Zs(t))
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
              o.options[0].replace(Xs, (function(e, n, r, o, i, a) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (Ks.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Gs.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Gs, (function(e, n, r, o, i, a) {
              return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, ps.__assign)((0, ps.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, ps.__assign)((0, ps.__assign)({}, t), Ws(i)))
          } else if (qs.test(o.stem)) t = (0, ps.__assign)((0, ps.__assign)({}, t), Ws(o.stem));
          else {
            var a = $s(o.stem);
            a && (t = (0, ps.__assign)((0, ps.__assign)({}, t), a));
            var s = Ys(o.stem);
            s && (t = (0, ps.__assign)((0, ps.__assign)({}, t), s))
          }
        }
        return t
      }
      var Js, el = {
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

      function tl(e) {
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
        return "root" !== r && (n = e.maximize().region), (el[n || ""] || el[r || ""] || el["".concat(r, "-001")] || el["001"])[0]
      }
      var nl = new RegExp("^".concat(Bs.source, "*")),
        rl = new RegExp("".concat(Bs.source, "*$"));

      function ol(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var il = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        al = !!String.fromCodePoint,
        sl = !!Object.fromEntries,
        ll = !!String.prototype.codePointAt,
        cl = !!String.prototype.trimStart,
        ul = !!String.prototype.trimEnd,
        dl = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        hl = !0;
      try {
        hl = "a" === (null === (Js = _l("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Js ? void 0 : Js[0])
      } catch (e) {
        hl = !1
      }
      var fl, pl = il ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        ml = al ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        gl = sl ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        vl = ll ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        yl = cl ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(nl, "")
        },
        bl = ul ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(rl, "")
        };

      function _l(e, t) {
        return new RegExp(e, t)
      }
      if (hl) {
        var wl = _l("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        fl = function(e, t) {
          var n;
          return wl.lastIndex = t, null !== (n = wl.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else fl = function(e, t) {
        for (var n = [];;) {
          var r = vl(e, t);
          if (void 0 === r || Cl(r) || Ol(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return ml.apply(void 0, n)
      };
      var xl, El, Pl = function() {
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
                  return this.error(xs.UNMATCHED_CLOSING_TAG, ol(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Sl(this.peek() || 0)) {
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
                  type: Es.pound,
                  location: ol(a, this.clonePosition())
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
              type: Es.literal,
              value: "<".concat(r, "/>"),
              location: ol(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Sl(this.char())) return this.error(xs.INVALID_TAG, ol(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(xs.UNMATCHED_CLOSING_TAG, ol(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Es.tag,
                  value: r,
                  children: i,
                  location: ol(n, this.clonePosition())
                },
                err: null
              } : this.error(xs.INVALID_TAG, ol(a, this.clonePosition())))
            }
            return this.error(xs.UNCLOSED_TAG, ol(n, this.clonePosition()))
          }
          return this.error(xs.INVALID_TAG, ol(n, this.clonePosition()))
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
          var s = ol(n, this.clonePosition());
          return {
            val: {
              type: Es.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Sl(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return ml.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), ml(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(xs.EXPECT_ARGUMENT_CLOSING_BRACE, ol(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(xs.EMPTY_ARGUMENT, ol(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(xs.MALFORMED_ARGUMENT, ol(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(xs.EXPECT_ARGUMENT_CLOSING_BRACE, ol(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Es.argument,
                  value: r,
                  location: ol(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(xs.EXPECT_ARGUMENT_CLOSING_BRACE, ol(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(xs.MALFORMED_ARGUMENT, ol(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = fl(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: ol(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(xs.EXPECT_ARGUMENT_TYPE, ol(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (f = bl(v.val)).length) return this.error(xs.EXPECT_ARGUMENT_STYLE, ol(this.clonePosition(), this.clonePosition()));
                l = {
                  style: f,
                  styleLocation: ol(c, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var u = ol(r, this.clonePosition());
              if (l && pl(null == l ? void 0 : l.style, "::", 0)) {
                var d = yl(l.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? v : {
                  val: {
                    type: Es.number,
                    value: n,
                    location: u,
                    style: v.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(xs.EXPECT_DATE_TIME_SKELETON, u);
                var h = d;
                this.locale && (h = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = tl(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var f = {
                  type: Ps.dateTime,
                  pattern: h,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Vs(h) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Es.date : Es.time,
                    value: n,
                    location: u,
                    style: f
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Es.number : "date" === a ? Es.date : Es.time,
                  value: n,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(xs.EXPECT_SELECT_ARGUMENT_OPTIONS, ol(p, (0, ps.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                g = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(xs.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ol(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(xs.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, xs.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), g = v.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var _ = ol(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Es.select,
                  value: n,
                  options: gl(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Es.plural,
                  value: n,
                  options: gl(b.val),
                  offset: g,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(xs.INVALID_ARGUMENT_TYPE, ol(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(xs.EXPECT_ARGUMENT_CLOSING_BRACE, ol(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(xs.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ol(n, this.clonePosition()));
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
            n = Us(e)
          } catch (e) {
            return this.error(xs.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Ps.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Qs(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, c = r.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(xs.EXPECT_PLURAL_ARGUMENT_SELECTOR, xs.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = ol(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? xs.DUPLICATE_SELECT_ARGUMENT_SELECTOR : xs.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var h = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? xs.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : xs.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ol(this.clonePosition(), this.clonePosition()));
            var f = this.parseMessage(e + 1, t, n);
            if (f.err) return f;
            var p = this.tryParseArgumentClose(h);
            if (p.err) return p;
            a.push([l, {
              value: f.val,
              location: ol(h, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? xs.EXPECT_SELECT_ARGUMENT_SELECTOR : xs.EXPECT_PLURAL_ARGUMENT_SELECTOR, ol(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(xs.MISSING_OTHER_CLAUSE, ol(this.clonePosition(), this.clonePosition())) : {
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
          var s = ol(r, this.clonePosition());
          return o ? dl(i *= n) ? {
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
          var t = vl(this.message, e);
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
          if (pl(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && Cl(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }, e
      }();

      function Sl(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Cl(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Ol(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Tl(e) {
        e.forEach((function(e) {
          if (delete e.location, As(e) || Is(e))
            for (var t in e.options) delete e.options[t].location, Tl(e.options[t].value);
          else js(e) && Ms(e.style) || (Rs(e) || Ls(e)) && Hs(e.style) ? delete e.style.location : ks(e) && Tl(e.children)
        }))
      }

      function Nl(e, t) {
        void 0 === t && (t = {}), t = (0, ps.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var n = new Pl(e, t).parse();
        if (n.err) {
          var r = SyntaxError(xs[n.err.kind]);
          throw r.location = n.err.location, r.originalMessage = n.err.message, r
        }
        return (null == t ? void 0 : t.captureLocation) || Tl(n.val), n.val
      }(El = xl || (xl = {})).MISSING_VALUE = "MISSING_VALUE", El.INVALID_VALUE = "INVALID_VALUE", El.MISSING_INTL_API = "MISSING_INTL_API";
      var jl, Rl = function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return o.code = n, o.originalMessage = r, o
          }
          return (0, ps.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        Ll = function(e) {
          function t(t, n, r, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(r).join('", "'), '"'), xl.INVALID_VALUE, o) || this
          }
          return (0, ps.__extends)(t, e), t
        }(Rl),
        Al = function(e) {
          function t(t, n, r) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), xl.INVALID_VALUE, r) || this
          }
          return (0, ps.__extends)(t, e), t
        }(Rl),
        Il = function(e) {
          function t(t, n) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), xl.MISSING_VALUE, n) || this
          }
          return (0, ps.__extends)(t, e), t
        }(Rl);

      function Dl(e) {
        return "function" == typeof e
      }

      function kl(e, t, n, r, o, i, a) {
        if (1 === e.length && Ts(e[0])) return [{
          type: jl.literal,
          value: e[0].value
        }];
        for (var s = [], l = 0, c = e; l < c.length; l++) {
          var u = c[l];
          if (Ts(u)) s.push({
            type: jl.literal,
            value: u.value
          });
          else if (Ds(u)) "number" == typeof i && s.push({
            type: jl.literal,
            value: n.getNumberFormat(t).format(i)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new Il(d, a);
            var h = o[d];
            if (Ns(u)) h && "string" != typeof h && "number" != typeof h || (h = "string" == typeof h || "number" == typeof h ? String(h) : ""), s.push({
              type: "string" == typeof h ? jl.literal : jl.object,
              value: h
            });
            else if (Rs(u)) {
              var f = "string" == typeof u.style ? r.date[u.style] : Hs(u.style) ? u.style.parsedOptions : void 0;
              s.push({
                type: jl.literal,
                value: n.getDateTimeFormat(t, f).format(h)
              })
            } else if (Ls(u)) f = "string" == typeof u.style ? r.time[u.style] : Hs(u.style) ? u.style.parsedOptions : r.time.medium, s.push({
              type: jl.literal,
              value: n.getDateTimeFormat(t, f).format(h)
            });
            else if (js(u))(f = "string" == typeof u.style ? r.number[u.style] : Ms(u.style) ? u.style.parsedOptions : void 0) && f.scale && (h *= f.scale || 1), s.push({
              type: jl.literal,
              value: n.getNumberFormat(t, f).format(h)
            });
            else {
              if (ks(u)) {
                var p = u.children,
                  m = u.value,
                  g = o[m];
                if (!Dl(g)) throw new Al(m, "function", a);
                var v = g(kl(p, t, n, r, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(v) || (v = [v]), s.push.apply(s, v.map((function(e) {
                  return {
                    type: "string" == typeof e ? jl.literal : jl.object,
                    value: e
                  }
                })))
              }
              if (As(u)) {
                if (!(y = u.options[h] || u.options.other)) throw new Ll(u.value, h, Object.keys(u.options), a);
                s.push.apply(s, kl(y.value, t, n, r, o))
              } else if (Is(u)) {
                var y;
                if (!(y = u.options["=".concat(h)])) {
                  if (!Intl.PluralRules) throw new Rl('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', xl.MISSING_INTL_API, a);
                  var b = n.getPluralRules(t, {
                    type: u.pluralType
                  }).select(h - (u.offset || 0));
                  y = u.options[b] || u.options.other
                }
                if (!y) throw new Ll(u.value, h, Object.keys(u.options), a);
                s.push.apply(s, kl(y.value, t, n, r, o, h - (u.offset || 0)))
              }
            }
          }
        }
        return (_ = s).length < 2 ? _ : _.reduce((function(e, t) {
          var n = e[e.length - 1];
          return n && n.type === jl.literal && t.type === jl.literal ? n.value += t.value : e.push(t), e
        }), []);
        var _
      }

      function Ml(e) {
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
      }(jl || (jl = {}));
      var Hl, Bl = function() {
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
                return e.length && t.type === jl.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return n.length <= 1 ? n[0] || "" : n
            }, this.formatToParts = function(e) {
              return kl(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
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
              u = (c.formatters, (0, ps.__rest)(c, ["formatters"]));
            this.ast = e.__parse(t, (0, ps.__assign)((0, ps.__assign)({}, u), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (a = e.formats, (s = r) ? Object.keys(a).reduce((function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, ps.__assign)((0, ps.__assign)((0, ps.__assign)({}, e || {}), t || {}), Object.keys(e).reduce((function(n, r) {
                return n[r] = (0, ps.__assign)((0, ps.__assign)({}, e[r]), t[r] || {}), n
              }), {})) : e
            }(a[t], s[t]), e
          }), (0, ps.__assign)({}, a)) : a), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: ms((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, ps.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Ml(i.number),
              strategy: Os.variadic
            }),
            getDateTimeFormat: ms((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, ps.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Ml(i.dateTime),
              strategy: Os.variadic
            }),
            getPluralRules: ms((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.PluralRules).bind.apply(e, (0, ps.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Ml(i.pluralRules),
              strategy: Os.variadic
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
        }, e.__parse = Nl, e.formats = {
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
      }(Hl || (Hl = {}));
      var Fl = function(e) {
          function t(n, r, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = n, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, ps.__extends)(t, e), t
        }(Error),
        Vl = function(e) {
          function t(t, n) {
            return e.call(this, Hl.UNSUPPORTED_FORMATTER, t, n) || this
          }
          return (0, ps.__extends)(t, e), t
        }(Fl),
        zl = function(e) {
          function t(t, n) {
            return e.call(this, Hl.INVALID_CONFIG, t, n) || this
          }
          return (0, ps.__extends)(t, e), t
        }(Fl),
        Ul = function(e) {
          function t(t, n) {
            return e.call(this, Hl.MISSING_DATA, t, n) || this
          }
          return (0, ps.__extends)(t, e), t
        }(Fl),
        Gl = function(e) {
          function t(t, n, r) {
            var o = e.call(this, Hl.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(n, "\n"), r) || this;
            return o.locale = n, o
          }
          return (0, ps.__extends)(t, e), t
        }(Fl),
        ql = function(e) {
          function t(t, n, r, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == r ? void 0 : r.id, "\nDefault Message: ").concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ").concat(null == r ? void 0 : r.description, "\n"), n, o) || this;
            return i.descriptor = r, i.locale = n, i
          }
          return (0, ps.__extends)(t, e), t
        }(Gl),
        Xl = function(e) {
          function t(t, n) {
            var r = e.call(this, Hl.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(n, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return r.descriptor = t, r
          }
          return (0, ps.__extends)(t, e), t
        }(Fl);

      function Kl(e, t, n) {
        return void 0 === n && (n = {}), t.reduce((function(t, r) {
          return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t
        }), {})
      }
      var Wl = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function $l(e) {
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

      function Yl(e, t, n, r) {
        var o, i = e && e[t];
        if (i && (o = i[n]), o) return o;
        r(new Vl("No ".concat(t, " format named: ").concat(n)))
      }

      function Zl(e, t) {
        var n = t && t.cache ? t.cache : oc,
          r = t && t.serializer ? t.serializer : nc;
        return (t && t.strategy ? t.strategy : tc)(e, {
          cache: n,
          serializer: r
        })
      }

      function Ql(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function Jl(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function ec(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function tc(e, t) {
        return ec(e, this, 1 === e.length ? Ql : Jl, t.cache.create(), t.serializer)
      }
      var nc = function() {
        return JSON.stringify(arguments)
      };

      function rc() {
        this.cache = Object.create(null)
      }
      rc.prototype.get = function(e) {
        return this.cache[e]
      }, rc.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var oc = {
          create: function() {
            return new rc
          }
        },
        ic = {
          variadic: function(e, t) {
            return ec(e, this, Jl, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return ec(e, this, Ql, t.cache.create(), t.serializer)
          }
        };

      function ac(e) {
        ! function(e, t, n) {
          if (void 0 === n && (n = Error), !e) throw new n("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      Zl((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, ps.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: ic.variadic
      }), Zl((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, ps.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: ic.variadic
      }), Zl((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.PluralRules).bind.apply(e, (0, ps.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: ic.variadic
      }), Zl((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.Locale).bind.apply(e, (0, ps.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: ic.variadic
      }), Zl((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.ListFormat).bind.apply(e, (0, ps.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: ic.variadic
      });
      var sc = (0, ps.__assign)((0, ps.__assign)({}, Wl), {
        textComponent: h.Fragment
      });
      n(28136);
      var lc = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? h.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = h.createContext(null)),
        cc = (lc.Consumer, lc.Provider),
        uc = lc;

      function dc(e, t) {
        return Object.keys(e).reduce((function(n, r) {
          return n[r] = (0, ps.__assign)({
            timeZone: t
          }, e[r]), n
        }), {})
      }

      function hc(e, t) {
        return Object.keys((0, ps.__assign)((0, ps.__assign)({}, e), t)).reduce((function(n, r) {
          return n[r] = (0, ps.__assign)((0, ps.__assign)({}, e[r] || {}), t[r] || {}), n
        }), {})
      }

      function fc(e, t) {
        if (!t) return e;
        var n = Bl.formats;
        return (0, ps.__assign)((0, ps.__assign)((0, ps.__assign)({}, n), e), {
          date: hc(dc(n.date, t), dc(e.date || {}, t)),
          time: hc(dc(n.time, t), dc(e.time || {}, t))
        })
      }
      ms((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, ps.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Os.variadic
      }), ms((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, ps.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Os.variadic
      }), ms((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.PluralRules).bind.apply(e, (0, ps.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Os.variadic
      }), ms((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.Locale).bind.apply(e, (0, ps.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Os.variadic
      }), ms((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.ListFormat).bind.apply(e, (0, ps.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Os.variadic
      });
      var pc = function(e, t, n, r, o) {
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
          if (Array.isArray(v) && 1 === v.length && v[0].type === Es.literal) return v[0].value;
          if (!r && v && "string" == typeof v && !f) return v.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (r = (0, ps.__assign)((0, ps.__assign)({}, f), r || {}), a = fc(a, h), c = fc(c, h), !v) {
            if (!1 === u && "" === v) return v;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new Xl(n, i)), m) try {
              return t.getMessageFormat(m, l, c, o).format(r)
            } catch (e) {
              return d(new ql('Error formatting default message for: "'.concat(g, '", rendering default message verbatim'), i, n, e)), "string" == typeof m ? m : g
            }
            return g
          }
          try {
            return t.getMessageFormat(v, i, a, (0, ps.__assign)({
              formatters: t
            }, o || {})).format(r)
          } catch (e) {
            d(new ql('Error formatting message: "'.concat(g, '", using ').concat(m ? "default message" : "id", " as fallback."), i, n, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, c, o).format(r)
          } catch (e) {
            d(new ql('Error formatting the default message for: "'.concat(g, '", rendering message verbatim'), i, n, e))
          }
          return "string" == typeof v ? v : "string" == typeof m ? m : g
        },
        mc = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function gc(e, t, n) {
        var r = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === n && (n = {});
        var a = n.format,
          s = a && Yl(o, "number", a, i) || {};
        return t(r, Kl(n, mc, s))
      }

      function vc(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return gc(e, t, r).format(n)
        } catch (t) {
          e.onError(new Gl("Error formatting number.", e.locale, t))
        }
        return String(n)
      }

      function yc(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return gc(e, t, r).formatToParts(n)
        } catch (t) {
          e.onError(new Gl("Error formatting number.", e.locale, t))
        }
        return []
      }
      var bc = ["numeric", "style"];

      function _c(e, t, n, r, o) {
        void 0 === o && (o = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new Rl('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', xl.MISSING_INTL_API));
        try {
          return function(e, t, n) {
            var r = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === n && (n = {});
            var a = n.format,
              s = !!a && Yl(o, "relative", a, i) || {};
            return t(r, Kl(n, bc, s))
          }(e, t, o).format(n, r)
        } catch (t) {
          e.onError(new Gl("Error formatting relative time.", e.locale, t))
        }
        return String(n)
      }
      var wc = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function xc(e, t, n, r) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === r && (r = {});
        var l = r.format,
          c = (0, ps.__assign)((0, ps.__assign)({}, s && {
            timeZone: s
          }), l && Yl(i, t, l, a)),
          u = Kl(r, wc, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, ps.__assign)((0, ps.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), n(o, u)
      }

      function Ec(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return xc(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new Gl("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function Pc(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return xc(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new Gl("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function Sc(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = n[2],
          s = void 0 === a ? {} : a,
          l = e.timeZone,
          c = e.locale,
          u = e.onError,
          d = Kl(s, wc, l ? {
            timeZone: l
          } : {});
        try {
          return t(c, d).formatRange(o, i)
        } catch (t) {
          u(new Gl("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function Cc(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return xc(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Gl("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Oc(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return xc(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Gl("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Tc = ["type"];

      function Nc(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.PluralRules || i(new Rl('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', xl.MISSING_INTL_API));
        var a = Kl(r, Tc);
        try {
          return t(o, a).select(n)
        } catch (e) {
          i(new Gl("Error formatting plural.", o, e))
        }
        return "other"
      }
      var jc = ["type", "style"],
        Rc = Date.now();

      function Lc(e, t, n, r) {
        void 0 === r && (r = {});
        var o = Ac(e, t, n, r).reduce((function(e, t) {
          var n = t.value;
          return "string" != typeof n ? e.push(n) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Ac(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.ListFormat || i(new Rl('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', xl.MISSING_INTL_API));
        var a = Kl(r, jc);
        try {
          var s = {},
            l = n.map((function(e, t) {
              if ("object" == typeof e) {
                var n = function(e) {
                  return "".concat(Rc, "_").concat(e, "_").concat(Rc)
                }(t);
                return s[n] = e, n
              }
              return String(e)
            }));
          return t(o, a).formatToParts(l).map((function(e) {
            return "literal" === e.type ? e : (0, ps.__assign)((0, ps.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          }))
        } catch (e) {
          i(new Gl("Error formatting list.", o, e))
        }
        return n
      }
      var Ic, Dc, kc, Mc = ["style", "type", "fallback", "languageDisplay"];

      function Hc(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new Rl('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', xl.MISSING_INTL_API));
        var a = Kl(r, Mc);
        try {
          return t(o, a).of(n)
        } catch (e) {
          i(new Gl("Error formatting display name.", o, e))
        }
      }

      function Bc(e, t) {
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
              o = ms((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, ps.__spreadArray)([void 0], t, !1)))
              }), {
                cache: $l(e.dateTime),
                strategy: Os.variadic
              }),
              i = ms((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, ps.__spreadArray)([void 0], t, !1)))
              }), {
                cache: $l(e.number),
                strategy: Os.variadic
              }),
              a = ms((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.PluralRules).bind.apply(e, (0, ps.__spreadArray)([void 0], t, !1)))
              }), {
                cache: $l(e.pluralRules),
                strategy: Os.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: ms((function(e, t, n, r) {
                return new Bl(e, t, n, (0, ps.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: a
                  }
                }, r || {}))
              }), {
                cache: $l(e.message),
                strategy: Os.variadic
              }),
              getRelativeTimeFormat: ms((function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new(t.bind.apply(t, (0, ps.__spreadArray)([void 0], e, !1)))
              }), {
                cache: $l(e.relativeTime),
                strategy: Os.variadic
              }),
              getPluralRules: a,
              getListFormat: ms((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, ps.__spreadArray)([void 0], e, !1)))
              }), {
                cache: $l(e.list),
                strategy: Os.variadic
              }),
              getDisplayNames: ms((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, ps.__spreadArray)([void 0], e, !1)))
              }), {
                cache: $l(e.displayNames),
                strategy: Os.variadic
              })
            }
          }(t),
          r = (0, ps.__assign)((0, ps.__assign)({}, Wl), e),
          o = r.locale,
          i = r.defaultLocale,
          a = r.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new Ul('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new Ul('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new zl('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(r), (0, ps.__assign)((0, ps.__assign)({}, r), {
            formatters: n,
            formatNumber: vc.bind(null, r, n.getNumberFormat),
            formatNumberToParts: yc.bind(null, r, n.getNumberFormat),
            formatRelativeTime: _c.bind(null, r, n.getRelativeTimeFormat),
            formatDate: Ec.bind(null, r, n.getDateTimeFormat),
            formatDateToParts: Cc.bind(null, r, n.getDateTimeFormat),
            formatTime: Pc.bind(null, r, n.getDateTimeFormat),
            formatDateTimeRange: Sc.bind(null, r, n.getDateTimeFormat),
            formatTimeToParts: Oc.bind(null, r, n.getDateTimeFormat),
            formatPlural: Nc.bind(null, r, n.getPluralRules),
            formatMessage: pc.bind(null, r, n),
            $t: pc.bind(null, r, n),
            formatList: Lc.bind(null, r, n.getListFormat),
            formatListToParts: Ac.bind(null, r, n.getListFormat),
            formatDisplayName: Hc.bind(null, r, n.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Ic || (Ic = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Dc || (Dc = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(kc || (kc = {}));
      var Fc, Vc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        zc = {
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

      function Uc(e) {
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
        return "root" !== r && (n = e.maximize().region), (zc[n || ""] || zc[r || ""] || zc["".concat(r, "-001")] || zc["001"])[0]
      }
      var Gc = new RegExp("^".concat(Vc.source, "*")),
        qc = new RegExp("".concat(Vc.source, "*$"));

      function Xc(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Kc = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Wc = !!String.fromCodePoint,
        $c = !!Object.fromEntries,
        Yc = !!String.prototype.codePointAt,
        Zc = !!String.prototype.trimStart,
        Qc = !!String.prototype.trimEnd,
        Jc = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        eu = !0;
      try {
        eu = "a" === (null === (Fc = cu("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Fc ? void 0 : Fc[0])
      } catch (e) {
        eu = !1
      }
      var tu, nu, ru = Kc ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        ou = Wc ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        iu = $c ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        au = Yc ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        su = Zc ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Gc, "")
        },
        lu = Qc ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(qc, "")
        };

      function cu(e, t) {
        return new RegExp(e, t)
      }
      if (eu) {
        var uu = cu("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        tu = function(e, t) {
          var n;
          return uu.lastIndex = t, null !== (n = uu.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else tu = function(e, t) {
        for (var n = [];;) {
          var r = au(e, t);
          if (void 0 === r || hu(r) || fu(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return ou.apply(void 0, n)
      };

      function du(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function hu(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function fu(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function pu(e) {
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
                  return this.error(Ic.UNMATCHED_CLOSING_TAG, Xc(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && du(this.peek() || 0)) {
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
                  type: Dc.pound,
                  location: Xc(a, this.clonePosition())
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
              type: Dc.literal,
              value: "<".concat(r, "/>"),
              location: Xc(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !du(this.char())) return this.error(Ic.INVALID_TAG, Xc(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(Ic.UNMATCHED_CLOSING_TAG, Xc(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Dc.tag,
                  value: r,
                  children: i,
                  location: Xc(n, this.clonePosition())
                },
                err: null
              } : this.error(Ic.INVALID_TAG, Xc(a, this.clonePosition())))
            }
            return this.error(Ic.UNCLOSED_TAG, Xc(n, this.clonePosition()))
          }
          return this.error(Ic.INVALID_TAG, Xc(n, this.clonePosition()))
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
          var s = Xc(n, this.clonePosition());
          return {
            val: {
              type: Dc.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (du(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return ou.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), ou(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Ic.EXPECT_ARGUMENT_CLOSING_BRACE, Xc(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Ic.EMPTY_ARGUMENT, Xc(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(Ic.MALFORMED_ARGUMENT, Xc(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Ic.EXPECT_ARGUMENT_CLOSING_BRACE, Xc(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Dc.argument,
                  value: r,
                  location: Xc(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ic.EXPECT_ARGUMENT_CLOSING_BRACE, Xc(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(Ic.MALFORMED_ARGUMENT, Xc(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = tu(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: Xc(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Ic.EXPECT_ARGUMENT_TYPE, Xc(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (f = lu(v.val)).length) return this.error(Ic.EXPECT_ARGUMENT_STYLE, Xc(this.clonePosition(), this.clonePosition()));
                l = {
                  style: f,
                  styleLocation: Xc(c, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var u = Xc(r, this.clonePosition());
              if (l && ru(null == l ? void 0 : l.style, "::", 0)) {
                var d = su(l.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? v : {
                  val: {
                    type: Dc.number,
                    value: n,
                    location: u,
                    style: v.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Ic.EXPECT_DATE_TIME_SKELETON, u);
                var h = d;
                this.locale && (h = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = Uc(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var f = {
                  type: kc.dateTime,
                  pattern: h,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Vs(h) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Dc.date : Dc.time,
                    value: n,
                    location: u,
                    style: f
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Dc.number : "date" === a ? Dc.date : Dc.time,
                  value: n,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Ic.EXPECT_SELECT_ARGUMENT_OPTIONS, Xc(p, (0, ps.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                g = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Ic.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Xc(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(Ic.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ic.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), g = v.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var _ = Xc(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Dc.select,
                  value: n,
                  options: iu(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Dc.plural,
                  value: n,
                  options: iu(b.val),
                  offset: g,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Ic.INVALID_ARGUMENT_TYPE, Xc(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Ic.EXPECT_ARGUMENT_CLOSING_BRACE, Xc(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Ic.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Xc(n, this.clonePosition()));
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
            n = Us(e)
          } catch (e) {
            return this.error(Ic.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: kc.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Qs(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, c = r.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Ic.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ic.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = Xc(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Ic.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ic.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var h = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Ic.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ic.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Xc(this.clonePosition(), this.clonePosition()));
            var f = this.parseMessage(e + 1, t, n);
            if (f.err) return f;
            var p = this.tryParseArgumentClose(h);
            if (p.err) return p;
            a.push([l, {
              value: f.val,
              location: Xc(h, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Ic.EXPECT_SELECT_ARGUMENT_SELECTOR : Ic.EXPECT_PLURAL_ARGUMENT_SELECTOR, Xc(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Ic.MISSING_OTHER_CLAUSE, Xc(this.clonePosition(), this.clonePosition())) : {
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
          var s = Xc(r, this.clonePosition());
          return o ? Jc(i *= n) ? {
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
          var t = au(this.message, e);
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
          if (ru(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && hu(this.char());) this.bump()
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
      }(nu || (nu = {}));
      var mu = function(e, t, n, r) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var a = pu(r),
            s = pc.apply(void 0, (0, ps.__spreadArray)([e, t, n, a], o, !1));
          return Array.isArray(s) ? h.Children.toArray(s) : s
        },
        gu = function(e, t) {
          var n = e.defaultRichTextElements,
            r = (0, ps.__rest)(e, ["defaultRichTextElements"]),
            o = pu(n),
            i = Bc((0, ps.__assign)((0, ps.__assign)((0, ps.__assign)({}, sc), r), {
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
          return (0, ps.__assign)((0, ps.__assign)({}, i), {
            formatMessage: mu.bind(null, a, i.formatters),
            $t: mu.bind(null, a, i.formatters)
          })
        };

      function vu(e) {
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
      var yu = function(e) {
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
            intl: gu(vu(t.props), t.cache),
            prevConfig: vu(t.props)
          }, t
        }
        return (0, ps.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var n = t.prevConfig,
            r = t.cache,
            o = vu(e);
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
            intl: gu(o, r),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return ac(this.state.intl), h.createElement(cc, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = sc, t
      }(h.PureComponent);
      const bu = yu;

      function _u() {
        var e = h.useContext(uc);
        return ac(e), e
      }
      var wu, xu;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(wu || (wu = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(xu || (xu = {}));
      var Eu = function(e) {
        var t = _u(),
          n = e.value,
          r = e.children,
          o = (0, ps.__rest)(e, ["value", "children"]);
        return r(t.formatNumberToParts(n, o))
      };

      function Pu(e) {
        var t = function(t) {
          var n = _u(),
            r = t.value,
            o = t.children,
            i = (0, ps.__rest)(t, ["value", "children"]),
            a = "string" == typeof r ? new Date(r || 0) : r;
          return o("formatDate" === e ? n.formatDateToParts(a, i) : n.formatTimeToParts(a, i))
        };
        return t.displayName = xu[e], t
      }

      function Su(e) {
        var t = function(t) {
          var n = _u(),
            r = t.value,
            o = t.children,
            i = (0, ps.__rest)(t, ["value", "children"]),
            a = n[e](r, i);
          if ("function" == typeof o) return o(a);
          var s = n.textComponent || h.Fragment;
          return h.createElement(s, null, a)
        };
        return t.displayName = wu[e], t
      }
      Eu.displayName = "FormattedNumberParts", Eu.displayName = "FormattedNumberParts", Su("formatDate"), Su("formatTime"), Su("formatNumber"), Su("formatList"), Su("formatDisplayName"), Pu("formatDate"), Pu("formatTime");
      const Cu = ({
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
          }), [n]), o ? (0, u.jsx)(bu, {
            locale: n,
            messages: o,
            children: e
          }) : r ?? null
        },
        Ou = {
          id: "Lightbox_Open_Button_Label"
        },
        Tu = {
          id: "Lightbox_Dialog_Title"
        },
        Nu = {
          id: "Lightbox_Dialog_Description"
        },
        ju = {
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
      var Ru = n(25648);
      const Lu = (e, t) => {
        const n = "more" === t ? Ru.xW.lightHc : Ru.xW.light,
          r = "more" === t ? Ru.xW.darkHc : Ru.xW.dark;
        return "dark" === e ? r : n
      };

      function Au(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }

      function Iu(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      var Du = n(21423);

      function ku(e, t = []) {
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
        }, Mu(r, ...t)]
      }

      function Mu(...e) {
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
      var Hu = globalThis?.document ? h.useLayoutEffect : () => {},
        Bu = f[" useInsertionEffect ".trim().toString()] || Hu;

      function Fu({
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
          return Bu((() => {
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

      function zu(e) {
        const t = h.useContext(Vu);
        return e || t || "ltr"
      }

      function Uu(e) {
        const t = h.useRef({
          value: e,
          previous: e
        });
        return h.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }

      function Gu(e) {
        const [t, n] = h.useState(void 0);
        return Hu((() => {
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
      var qu = n(51347),
        Xu = n(83970);

      function Ku(e) {
        const t = e + "CollectionProvider",
          [n, r] = ku(t),
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
          l = (0, Xu.TL)(s),
          c = h.forwardRef(((e, t) => {
            const {
              scope: n,
              children: r
            } = e, o = i(s, n), a = (0, Du.s)(t, o.collectionRef);
            return (0, u.jsx)(l, {
              ref: a,
              children: r
            })
          }));
        c.displayName = s;
        const d = e + "CollectionItemSlot",
          f = "data-radix-collection-item",
          p = (0, Xu.TL)(d),
          m = h.forwardRef(((e, t) => {
            const {
              scope: n,
              children: r,
              ...o
            } = e, a = h.useRef(null), s = (0, Du.s)(t, a), l = i(d, n);
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
      var Wu = ["PageUp", "PageDown"],
        $u = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Yu = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Zu = "Slider",
        [Qu, Ju, ed] = Ku(Zu),
        [td, nd] = ku(Zu, [ed]),
        [rd, od] = td(Zu),
        id = h.forwardRef(((e, t) => {
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
          } = e, y = h.useRef(new Set), b = h.useRef(0), _ = "horizontal" === a ? ld : cd, [w = [], x] = Fu({
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
              c = Au(s, [r, o]);
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
          return (0, u.jsx)(rd, {
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
            children: (0, u.jsx)(Qu.Provider, {
              scope: e.__scopeSlider,
              children: (0, u.jsx)(Qu.Slot, {
                scope: e.__scopeSlider,
                children: (0, u.jsx)(_, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...v,
                  ref: t,
                  onPointerDown: Iu(v.onPointerDown, (() => {
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
                      const n = Wu.includes(e.key) || e.shiftKey && $u.includes(e.key) ? 10 : 1,
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
      id.displayName = Zu;
      var [ad, sd] = td(Zu, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), ld = h.forwardRef(((e, t) => {
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
        } = e, [f, p] = h.useState(null), m = (0, Du.s)(t, (e => p(e))), g = h.useRef(void 0), v = zu(o), y = "ltr" === v, b = y && !i || !y && i;

        function _(e) {
          const t = g.current || f.getBoundingClientRect(),
            o = _d([0, t.width], b ? [n, r] : [r, n]);
          return g.current = t, o(e - t.left)
        }
        return (0, u.jsx)(ad, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, u.jsx)(ud, {
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
              const t = Yu[b ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), cd = h.forwardRef(((e, t) => {
        const {
          min: n,
          max: r,
          inverted: o,
          onSlideStart: i,
          onSlideMove: a,
          onSlideEnd: s,
          onStepKeyDown: l,
          ...c
        } = e, d = h.useRef(null), f = (0, Du.s)(t, d), p = h.useRef(void 0), m = !o;

        function g(e) {
          const t = p.current || d.current.getBoundingClientRect(),
            o = _d([0, t.height], m ? [r, n] : [n, r]);
          return p.current = t, o(e - t.top)
        }
        return (0, u.jsx)(ad, {
          scope: e.__scopeSlider,
          startEdge: m ? "bottom" : "top",
          endEdge: m ? "top" : "bottom",
          size: "height",
          direction: m ? 1 : -1,
          children: (0, u.jsx)(ud, {
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
              const t = Yu[m ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), ud = h.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: a,
          onEndKeyDown: s,
          onStepKeyDown: l,
          ...c
        } = e, d = od(Zu, n);
        return (0, u.jsx)(qu.sG.span, {
          ...c,
          ref: t,
          onKeyDown: Iu(e.onKeyDown, (e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : Wu.concat($u).includes(e.key) && (l(e), e.preventDefault())
          })),
          onPointerDown: Iu(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : r(e)
          })),
          onPointerMove: Iu(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: Iu(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          }))
        })
      })), dd = "SliderTrack", hd = h.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          ...r
        } = e, o = od(dd, n);
        return (0, u.jsx)(qu.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: t
        })
      }));
      hd.displayName = dd;
      var fd = "SliderRange",
        pd = h.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            ...r
          } = e, o = od(fd, n), i = sd(fd, n), a = h.useRef(null), s = (0, Du.s)(t, a), l = o.values.length, c = o.values.map((e => bd(e, o.min, o.max))), d = l > 1 ? Math.min(...c) : 0, f = 100 - Math.max(...c);
          return (0, u.jsx)(qu.sG.span, {
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
      pd.displayName = fd;
      var md = "SliderThumb",
        gd = h.forwardRef(((e, t) => {
          const n = Ju(e.__scopeSlider),
            [r, o] = h.useState(null),
            i = (0, Du.s)(t, (e => o(e))),
            a = h.useMemo((() => r ? n().findIndex((e => e.ref.current === r)) : -1), [n, r]);
          return (0, u.jsx)(vd, {
            ...e,
            ref: i,
            index: a
          })
        })),
        vd = h.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            index: r,
            name: o,
            ...i
          } = e, a = od(md, n), s = sd(md, n), [l, c] = h.useState(null), d = (0, Du.s)(t, (e => c(e))), f = !l || a.form || !!l.closest("form"), p = Gu(l), m = a.values[r], g = void 0 === m ? 0 : bd(m, a.min, a.max), v = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(r, a.values.length), y = p?.[s.size], b = y ? function(e, t, n) {
            const r = e / 2;
            return (r - _d([0, 50], [0, r])(t) * n) * n
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
            children: [(0, u.jsx)(Qu.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, u.jsx)(qu.sG.span, {
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
                onFocus: Iu(e.onFocus, (() => {
                  a.valueIndexToChangeRef.current = r
                }))
              })
            }), f && (0, u.jsx)(yd, {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: m
            }, r)]
          })
        }));
      gd.displayName = md;
      var yd = h.forwardRef((({
        __scopeSlider: e,
        value: t,
        ...n
      }, r) => {
        const o = h.useRef(null),
          i = (0, Du.s)(o, r),
          a = Uu(t);
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
        }), [a, t]), (0, u.jsx)(qu.sG.input, {
          style: {
            display: "none"
          },
          ...n,
          ref: i,
          defaultValue: t
        })
      }));

      function bd(e, t, n) {
        return Au(100 / (n - t) * (e - t), [0, 100])
      }

      function _d(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      yd.displayName = "RadioBubbleInput";
      var wd = id,
        xd = hd,
        Ed = pd,
        Pd = gd;
      const Sd = {
          id: "Lightbox_Close_Button_Label"
        },
        Cd = {
          id: "Lightbox_Close_Button_Tooltip"
        },
        Od = {
          id: "Lightbox_Zoom_In_Button_Label"
        },
        Td = {
          id: "Lightbox_Zoom_In_Button_Tooltip"
        },
        Nd = {
          id: "Lightbox_Zoom_Out_Button_Label"
        },
        jd = {
          id: "Lightbox_Zoom_Out_Button__Tooltip"
        },
        Rd = {
          id: "Lightbox_Reset_Zoom_Button_Label"
        },
        Ld = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip"
        },
        Ad = {
          id: "Lightbox_Zoom_Slider_Label"
        },
        Id = {
          id: "Lightbox_Zoom_Slider_Tooltip"
        },
        Dd = {
          id: "Lightbox_Download_Button_Label"
        },
        kd = {
          id: "Lightbox_Download_Button_Tooltip"
        };

      function Md() {
        return Md = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, Md.apply(null, arguments)
      }
      var Hd = ["shift", "alt", "meta", "mod", "ctrl"],
        Bd = {
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

      function Fd(e) {
        return (e && Bd[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Vd(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function zd(e, t, n) {
        void 0 === t && (t = "+");
        var r = e.toLocaleLowerCase().split(t).map((function(e) {
          return Fd(e)
        }));
        return Md({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter((function(e) {
            return !Hd.includes(e)
          })),
          description: n,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && qd([Fd(e.key), Fd(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && Xd([Fd(e.key), Fd(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        Ud.clear()
      }));
      var Ud = new Set;

      function Gd(e) {
        return Array.isArray(e)
      }

      function qd(e) {
        var t = Array.isArray(e) ? e : [e];
        Ud.has("meta") && Ud.forEach((function(e) {
          return ! function(e) {
            return Hd.includes(e)
          }(e) && Ud.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return Ud.add(e.toLowerCase())
        }))
      }

      function Xd(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Ud.clear() : t.forEach((function(e) {
          return Ud.delete(e.toLowerCase())
        }))
      }

      function Kd(e, t) {
        void 0 === t && (t = !1);
        var n, r, o = e.target,
          i = e.composed;
        return r = (n = o).tagName && !n.tagName.startsWith("-") && n.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Gd(t) ? Boolean(r && t && t.some((function(e) {
          var t;
          return e.toLowerCase() === (null == (t = r) ? void 0 : t.toLowerCase())
        }))) : Boolean(r && t && t)
      }
      var Wd = (0, h.createContext)(void 0);

      function $d(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          r = e.children;
        return (0, u.jsx)(Wd.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: n
          },
          children: r
        })
      }

      function Yd(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(n, r) {
          return n && Yd(e[r], t[r])
        }), !0) : e === t
      }
      var Zd = (0, h.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Qd = function(e) {
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
                  return !Yd(t, e)
                }))
              }))
            }), []);
          return (0, u.jsx)(Zd.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: d,
              disableScope: f,
              toggleScope: p
            },
            children: (0, u.jsx)($d, {
              addHotkey: m,
              removeHotkey: g,
              children: r
            })
          })
        },
        Jd = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        eh = "undefined" != typeof window ? h.useLayoutEffect : h.useEffect;

      function th(e, t, n, r) {
        var o = (0, h.useState)(null),
          i = o[0],
          a = o[1],
          s = (0, h.useRef)(!1),
          l = n instanceof Array ? r instanceof Array ? void 0 : r : n,
          c = Gd(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = n instanceof Array ? n : r instanceof Array ? r : void 0,
          d = (0, h.useCallback)(t, null != u ? u : []),
          f = (0, h.useRef)(d);
        f.current = u ? d : t;
        var p = function(e) {
            var t = (0, h.useRef)(void 0);
            return Yd(t.current, e) || (t.current = e), t.current
          }(l),
          m = (0, h.useContext)(Zd).enabledScopes,
          g = (0, h.useContext)(Wd);
        return eh((function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = m, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !Kd(e, ["input", "textarea", "select"]) || Kd(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== i) {
                    var r = i.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== i && !i.contains(r.activeElement)) return void Jd(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != p && p.enableOnContentEditable) && Vd(c, null == p ? void 0 : p.splitKey).forEach((function(n) {
                    var r, o = zd(n, null == p ? void 0 : p.combinationKey);
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
                          v = Fd(h),
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
                        return !(!u || 1 !== u.length || !u.includes(y) && !u.includes(v)) || (u ? (void 0 === o && (o = ","), (Gd(r = u) ? r : r.split(o)).every((function(e) {
                          return Ud.has(e.trim().toLowerCase())
                        }))) : !u)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == p ? void 0 : p.enabled)) return void Jd(e);
                      f.current(e, o), t || (s.current = !0)
                    }
                  }))
                }
              },
              r = function(e) {
                void 0 !== e.key && (qd(Fd(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && n(e))
              },
              o = function(e) {
                void 0 !== e.key && (Xd(Fd(e.code)), s.current = !1, null != p && p.keyup && n(e, !0))
              },
              a = i || (null == l ? void 0 : l.document) || document;
            return a.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.addEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), g && Vd(c, null == p ? void 0 : p.splitKey).forEach((function(e) {
                return g.addHotkey(zd(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              })),
              function() {
                a.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.removeEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), g && Vd(c, null == p ? void 0 : p.splitKey).forEach((function(e) {
                  return g.removeHotkey(zd(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                }))
              }
          }
        }), [i, c, p, m]), a
      }

      function nh(e) {
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

      function rh(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function oh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? rh(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = nh(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rh(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function ih(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var ah = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        sh = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = oh(oh({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ah(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ih(e.variantClassNames, (e => ih(e, (e => e.split(" ")[0]))))
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
      const lh = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        ch = (0, h.forwardRef)((({
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
            v = (0, U.UP)(g, p),
            y = (0, nn.zQ)(),
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
            } = tn({
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
              className: sh({
                appearance: i,
                size: b,
                fullWidth: a
              })
            }, {
              ...x,
              className: n
            }),
            S = z[r],
            C = t ? m.DX : "button",
            O = lh[b];
          return (0, u.jsxs)(C, {
            ref: v,
            ...P,
            children: [S && (0, u.jsx)(S, {
              label: o || "",
              size: O
            }), (0, u.jsx)(m.xV, {
              children: c
            })]
          })
        })),
        uh = new Map;

      function dh(e, t) {
        if (e === t) return e;
        const n = uh.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = uh.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function hh(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      var fh;

      function ph(e) {
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

      function mh(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function gh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mh(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = ph(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mh(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function vh(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      n(7415), n(52953), n(87090), n(98097), n(76030), n(62670), n(54375),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(fh || (fh = {})), Symbol.toStringTag;
      var yh = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        bh = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = gh(gh({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) yh(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vh(e.variantClassNames, (e => vh(e, (e => e.split(" ")[0]))))
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
      const _h = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const a = e ? Xu.DX : "p",
          s = function(...e) {
            const t = {
              ...e[0]
            };
            for (let n = 1; n < e.length; n++) {
              const r = e[n];
              for (const e in r) {
                const n = t[e],
                  o = r[e];
                "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = hh(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = dh(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, A.A)(n, o)
              }
            }
            return t
          }({
            className: bh({
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
      var wh = "foundry_local_bc732x1";
      const xh = (0, h.forwardRef)((({
        shortcut: e,
        isInline: t,
        onShortcut: n
      }, r) => (th(e, (e => n?.(e)), [n]), (0, u.jsx)(_h, {
        size: "XS",
        className: (0, A.$)("foundry_local_bc732x0", {
          [wh]: t
        }),
        asChild: !0,
        children: (0, u.jsx)("kbd", {
          ref: r,
          children: e
        })
      }))));

      function Eh(e) {
        const t = h.useRef(e);
        return h.useEffect((() => {
          t.current = e
        })), h.useMemo((() => (...e) => t.current?.(...e)), [])
      }
      var Ph, Sh = "dismissableLayer.update",
        Ch = h.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Oh = h.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: a,
            onDismiss: s,
            ...l
          } = e, c = h.useContext(Ch), [d, f] = h.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = h.useState({}), g = (0, Du.s)(t, (e => f(e))), v = Array.from(c.layers), [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(y), _ = d ? v.indexOf(d) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, x = _ >= b, E = function(e, t = globalThis?.document) {
            const n = Eh(e),
              r = h.useRef(!1),
              o = h.useRef((() => {}));
            return h.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      Nh("dismissableLayer.pointerDownOutside", n, i, {
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
            const n = Eh(e),
              r = h.useRef(!1);
            return h.useEffect((() => {
              const e = e => {
                e.target && !r.current && Nh("dismissableLayer.focusOutside", n, {
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
            const n = Eh(e);
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
            if (d) return n && (0 === c.layersWithOutsidePointerEventsDisabled.size && (Ph = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), Th(), () => {
              n && 1 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = Ph)
            }
          }), [d, p, n, c]), h.useEffect((() => () => {
            d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), Th())
          }), [d, c]), h.useEffect((() => {
            const e = () => m({});
            return document.addEventListener(Sh, e), () => document.removeEventListener(Sh, e)
          }), []), (0, u.jsx)(qu.sG.div, {
            ...l,
            ref: g,
            style: {
              pointerEvents: w ? x ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: Iu(e.onFocusCapture, P.onFocusCapture),
            onBlurCapture: Iu(e.onBlurCapture, P.onBlurCapture),
            onPointerDownCapture: Iu(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        }));

      function Th() {
        const e = new CustomEvent(Sh);
        document.dispatchEvent(e)
      }

      function Nh(e, t, n, {
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
        }), r ? (0, qu.hO)(o, i) : o.dispatchEvent(i)
      }
      Oh.displayName = "DismissableLayer", h.forwardRef(((e, t) => {
        const n = h.useContext(Ch),
          r = h.useRef(null),
          o = (0, Du.s)(t, r);
        return h.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, u.jsx)(qu.sG.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var jh = f[" useId ".trim().toString()] || (() => {}),
        Rh = 0;

      function Lh(e) {
        const [t, n] = h.useState(jh());
        return Hu((() => {
          e || n((e => e ?? String(Rh++)))
        }), [e]), e || (t ? `radix-${t}` : "")
      }
      const Ah = ["top", "right", "bottom", "left"],
        Ih = Math.min,
        Dh = Math.max,
        kh = Math.round,
        Mh = Math.floor,
        Hh = e => ({
          x: e,
          y: e
        }),
        Bh = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        Fh = {
          start: "end",
          end: "start"
        };

      function Vh(e, t, n) {
        return Dh(e, Ih(t, n))
      }

      function zh(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function Uh(e) {
        return e.split("-")[0]
      }

      function Gh(e) {
        return e.split("-")[1]
      }

      function qh(e) {
        return "x" === e ? "y" : "x"
      }

      function Xh(e) {
        return "y" === e ? "height" : "width"
      }

      function Kh(e) {
        return ["top", "bottom"].includes(Uh(e)) ? "y" : "x"
      }

      function Wh(e) {
        return qh(Kh(e))
      }

      function $h(e) {
        return e.replace(/start|end/g, (e => Fh[e]))
      }

      function Yh(e) {
        return e.replace(/left|right|bottom|top/g, (e => Bh[e]))
      }

      function Zh(e) {
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

      function Qh(e) {
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

      function Jh(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = Kh(t),
          a = Wh(t),
          s = Xh(a),
          l = Uh(t),
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
        switch (Gh(t)) {
          case "start":
            f[a] -= h * (n && c ? -1 : 1);
            break;
          case "end":
            f[a] += h * (n && c ? -1 : 1)
        }
        return f
      }
      async function ef(e, t) {
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
        } = zh(t, e), p = Zh(f), m = s[h ? "floating" === d ? "reference" : "floating" : d], g = Qh(await i.getClippingRect({
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
        }, _ = Qh(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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

      function tf(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function nf(e) {
        return Ah.some((t => e[t] >= 0))
      }

      function rf() {
        return "undefined" != typeof window
      }

      function of(e) {
        return lf(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function af(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function sf(e) {
        var t;
        return null == (t = (lf(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function lf(e) {
        return !!rf() && (e instanceof Node || e instanceof af(e).Node)
      }

      function cf(e) {
        return !!rf() && (e instanceof Element || e instanceof af(e).Element)
      }

      function uf(e) {
        return !!rf() && (e instanceof HTMLElement || e instanceof af(e).HTMLElement)
      }

      function df(e) {
        return !(!rf() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof af(e).ShadowRoot)
      }

      function hf(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = yf(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
      }

      function ff(e) {
        return ["table", "td", "th"].includes(of(e))
      }

      function pf(e) {
        return [":popover-open", ":modal"].some((t => {
          try {
            return e.matches(t)
          } catch (e) {
            return !1
          }
        }))
      }

      function mf(e) {
        const t = gf(),
          n = cf(e) ? yf(e) : e;
        return ["transform", "translate", "scale", "rotate", "perspective"].some((e => !!n[e] && "none" !== n[e])) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
      }

      function gf() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function vf(e) {
        return ["html", "body", "#document"].includes(of(e))
      }

      function yf(e) {
        return af(e).getComputedStyle(e)
      }

      function bf(e) {
        return cf(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function _f(e) {
        if ("html" === of(e)) return e;
        const t = e.assignedSlot || e.parentNode || df(e) && e.host || sf(e);
        return df(t) ? t.host : t
      }

      function wf(e) {
        const t = _f(e);
        return vf(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : uf(t) && hf(t) ? t : wf(t)
      }

      function xf(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = wf(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = af(o);
        if (i) {
          const e = Ef(a);
          return t.concat(a, a.visualViewport || [], hf(o) ? o : [], e && n ? xf(e) : [])
        }
        return t.concat(o, xf(o, [], n))
      }

      function Ef(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function Pf(e) {
        const t = yf(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = uf(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          s = kh(n) !== i || kh(r) !== a;
        return s && (n = i, r = a), {
          width: n,
          height: r,
          $: s
        }
      }

      function Sf(e) {
        return cf(e) ? e : e.contextElement
      }

      function Cf(e) {
        const t = Sf(e);
        if (!uf(t)) return Hh(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = Pf(t);
        let a = (i ? kh(n.width) : n.width) / r,
          s = (i ? kh(n.height) : n.height) / o;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const Of = Hh(0);

      function Tf(e) {
        const t = af(e);
        return gf() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : Of
      }

      function Nf(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = Sf(e);
        let a = Hh(1);
        t && (r ? cf(r) && (a = Cf(r)) : a = Cf(e));
        const s = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== af(e)) && t
        }(i, n, r) ? Tf(i) : Hh(0);
        let l = (o.left + s.x) / a.x,
          c = (o.top + s.y) / a.y,
          u = o.width / a.x,
          d = o.height / a.y;
        if (i) {
          const e = af(i),
            t = r && cf(r) ? af(r) : r;
          let n = e,
            o = Ef(n);
          for (; o && r && t !== n;) {
            const e = Cf(o),
              t = o.getBoundingClientRect(),
              r = yf(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            l *= e.x, c *= e.y, u *= e.x, d *= e.y, l += i, c += a, n = af(o), o = Ef(n)
          }
        }
        return Qh({
          width: u,
          height: d,
          x: l,
          y: c
        })
      }

      function jf(e, t) {
        const n = bf(e).scrollLeft;
        return t ? t.left + n : Nf(sf(e)).left + n
      }

      function Rf(e, t, n) {
        void 0 === n && (n = !1);
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : jf(e, r)),
          y: r.top + t.scrollTop
        }
      }

      function Lf(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = af(e),
            r = sf(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            a = r.clientHeight,
            s = 0,
            l = 0;
          if (o) {
            i = o.width, a = o.height;
            const e = gf();
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
          const t = sf(e),
            n = bf(e),
            r = e.ownerDocument.body,
            o = Dh(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            i = Dh(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let a = -n.scrollLeft + jf(e);
          const s = -n.scrollTop;
          return "rtl" === yf(r).direction && (a += Dh(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: a,
            y: s
          }
        }(sf(e));
        else if (cf(t)) r = function(e, t) {
          const n = Nf(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = uf(e) ? Cf(e) : Hh(1);
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
        return Qh(r)
      }

      function Af(e, t) {
        const n = _f(e);
        return !(n === t || !cf(n) || vf(n)) && ("fixed" === yf(n).position || Af(n, t))
      }

      function If(e, t, n) {
        const r = uf(t),
          o = sf(t),
          i = "fixed" === n,
          a = Nf(e, !0, i, t);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = Hh(0);
        if (r || !r && !i)
          if (("body" !== of(t) || hf(o)) && (s = bf(t)), r) {
            const e = Nf(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && (l.x = jf(o));
        const c = !o || r || i ? Hh(0) : Rf(o, s);
        return {
          x: a.left + s.scrollLeft - l.x - c.x,
          y: a.top + s.scrollTop - l.y - c.y,
          width: a.width,
          height: a.height
        }
      }

      function Df(e) {
        return "static" === yf(e).position
      }

      function kf(e, t) {
        if (!uf(e) || "fixed" === yf(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return sf(e) === n && (n = n.ownerDocument.body), n
      }

      function Mf(e, t) {
        const n = af(e);
        if (pf(e)) return n;
        if (!uf(e)) {
          let t = _f(e);
          for (; t && !vf(t);) {
            if (cf(t) && !Df(t)) return t;
            t = _f(t)
          }
          return n
        }
        let r = kf(e, t);
        for (; r && ff(r) && Df(r);) r = kf(r, t);
        return r && vf(r) && Df(r) && !mf(r) ? n : r || function(e) {
          let t = _f(e);
          for (; uf(t) && !vf(t);) {
            if (mf(t)) return t;
            if (pf(t)) return null;
            t = _f(t)
          }
          return null
        }(e) || n
      }
      const Hf = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
          } = e;
          const i = "fixed" === o,
            a = sf(r),
            s = !!t && pf(t.floating);
          if (r === a || s && i) return n;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            c = Hh(1);
          const u = Hh(0),
            d = uf(r);
          if ((d || !d && !i) && (("body" !== of(r) || hf(a)) && (l = bf(r)), uf(r))) {
            const e = Nf(r);
            c = Cf(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop
          }
          const h = !a || d || i ? Hh(0) : Rf(a, l, !0);
          return {
            width: n.width * c.x,
            height: n.height * c.y,
            x: n.x * c.x - l.scrollLeft * c.x + u.x + h.x,
            y: n.y * c.y - l.scrollTop * c.y + u.y + h.y
          }
        },
        getDocumentElement: sf,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === n ? pf(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = xf(e, [], !1).filter((e => cf(e) && "body" !== of(e))),
                o = null;
              const i = "fixed" === yf(e).position;
              let a = i ? _f(e) : e;
              for (; cf(a) && !vf(a);) {
                const t = yf(a),
                  n = mf(a);
                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || hf(a) && !n && Af(e, a)) ? r = r.filter((e => e !== a)) : o = t, a = _f(a)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            a = i[0],
            s = i.reduce(((e, n) => {
              const r = Lf(t, n, o);
              return e.top = Dh(r.top, e.top), e.right = Ih(r.right, e.right), e.bottom = Ih(r.bottom, e.bottom), e.left = Dh(r.left, e.left), e
            }), Lf(t, a, o));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
          }
        },
        getOffsetParent: Mf,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || Mf,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: If(e.reference, await t(e.floating), e.strategy),
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
          } = Pf(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: Cf,
        isElement: cf,
        isRTL: function(e) {
          return "rtl" === yf(e).direction
        }
      };

      function Bf(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const Ff = function(e) {
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
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = Uh(n), s = Gh(n), l = "y" === Kh(n), c = ["left", "top"].includes(a) ? -1 : 1, u = i && l ? -1 : 1, d = zh(t, e);
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
              } = zh(e, t), c = {
                x: n,
                y: r
              }, u = await ef(t, l), d = Kh(Uh(o)), h = qh(d);
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
        zf = function(e) {
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
              } = zh(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const v = Uh(o),
                y = Kh(s),
                b = Uh(s) === s,
                _ = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                w = h || (b || !m ? [Yh(s)] : function(e) {
                  const t = Yh(e);
                  return [$h(e), t, $h(t)]
                }(s)),
                x = "none" !== p;
              !h && x && w.push(... function(e, t, n, r) {
                const o = Gh(e);
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
                }(Uh(e), "start" === n, r);
                return o && (i = i.map((e => e + "-" + o)), t && (i = i.concat(i.map($h)))), i
              }(s, m, p, _));
              const E = [s, ...w],
                P = await ef(t, g),
                S = [];
              let C = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (u && S.push(P[v]), d) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = Gh(e),
                    o = Wh(e),
                    i = Xh(o);
                  let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (a = Yh(a)), [a, Yh(a)]
                }(o, a, _);
                S.push(P[e[0]], P[e[1]])
              }
              if (C = [...C, {
                  placement: o,
                  overflows: S
                }], !S.every((e => e <= 0))) {
                var O, T;
                const e = ((null == (O = i.flip) ? void 0 : O.index) || 0) + 1,
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
                let n = null == (T = C.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : T.placement;
                if (!n) switch (f) {
                  case "bestFit": {
                    var N;
                    const e = null == (N = C.filter((e => {
                      if (x) {
                        const t = Kh(e.placement);
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
        Uf = function(e) {
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
              } = zh(e, t), u = await ef(t, c), d = Uh(o), h = Gh(o), f = "y" === Kh(o), {
                width: p,
                height: m
              } = i.floating;
              let g, v;
              "top" === d || "bottom" === d ? (g = d, v = h === (await (null == a.isRTL ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (v = d, g = "end" === h ? "top" : "bottom");
              const y = m - u.top - u.bottom,
                b = p - u.left - u.right,
                _ = Ih(m - u[g], y),
                w = Ih(p - u[v], b),
                x = !t.middlewareData.shift;
              let E = _,
                P = w;
              if (null != (n = t.middlewareData.shift) && n.enabled.x && (P = b), null != (r = t.middlewareData.shift) && r.enabled.y && (E = y), x && !h) {
                const e = Dh(u.left, 0),
                  t = Dh(u.right, 0),
                  n = Dh(u.top, 0),
                  r = Dh(u.bottom, 0);
                f ? P = p - 2 * (0 !== e || 0 !== t ? e + t : Dh(u.left, u.right)) : E = m - 2 * (0 !== n || 0 !== r ? n + r : Dh(u.top, u.bottom))
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
        Gf = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: n
              } = t, {
                strategy: r = "referenceHidden",
                ...o
              } = zh(e, t);
              switch (r) {
                case "referenceHidden": {
                  const e = tf(await ef(t, {
                    ...o,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: nf(e)
                    }
                  }
                }
                case "escaped": {
                  const e = tf(await ef(t, {
                    ...o,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: nf(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        qf = e => ({
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
            } = zh(e, t) || {};
            if (null == c) return {};
            const d = Zh(u),
              h = {
                x: n,
                y: r
              },
              f = Wh(o),
              p = Xh(f),
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
              C = Ih(d[v], S),
              O = Ih(d[y], S),
              T = C,
              N = E - m[p] - O,
              j = E / 2 - m[p] / 2 + P,
              R = Vh(T, j, N),
              L = !l.arrow && null != Gh(o) && j !== R && i.reference[p] / 2 - (j < T ? C : O) - m[p] / 2 < 0,
              A = L ? j < T ? j - T : j - N : 0;
            return {
              [f]: h[f] + A,
              data: {
                [f]: R,
                centerOffset: j - R - A,
                ...L && {
                  alignmentOffset: A
                }
              },
              reset: L
            }
          }
        }),
        Xf = function(e) {
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
              } = zh(e, t), u = {
                x: n,
                y: r
              }, d = Kh(o), h = qh(d);
              let f = u[h],
                p = u[d];
              const m = zh(s, t),
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
                  t = ["top", "left"].includes(Uh(o)),
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
        Kf = (e, t, n) => {
          const r = new Map,
            o = {
              platform: Hf,
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
              } = Jh(c, r, l),
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
              } = Jh(c, h, l))), n = -1)
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
      var Wf = "undefined" != typeof document ? h.useLayoutEffect : h.useEffect;

      function $f(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 != r--;)
              if (!$f(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || $f(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Yf(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Zf(e, t) {
        const n = Yf(e);
        return Math.round(t * n) / n
      }

      function Qf(e) {
        const t = h.useRef(e);
        return Wf((() => {
          t.current = e
        })), t
      }
      const Jf = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: n,
              padding: r
            } = "function" == typeof e ? e(t) : e;
            return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? qf({
              element: n.current,
              padding: r
            }).fn(t) : {} : n ? qf({
              element: n,
              padding: r
            }).fn(t) : {};
            var o
          }
        }),
        ep = (e, t) => ({
          ...Vf(e),
          options: [e, t]
        }),
        tp = (e, t) => ({
          ...Xf(e),
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
          ...Gf(e),
          options: [e, t]
        }),
        ip = (e, t) => ({
          ...Jf(e),
          options: [e, t]
        });
      var ap = h.forwardRef(((e, t) => {
        const {
          children: n,
          width: r = 10,
          height: o = 5,
          ...i
        } = e;
        return (0, u.jsx)(qu.sG.svg, {
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
      ap.displayName = "Arrow";
      var sp = ap,
        lp = "Popper",
        [cp, up] = ku(lp),
        [dp, hp] = cp(lp),
        fp = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [r, o] = h.useState(null);
          return (0, u.jsx)(dp, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
          })
        };
      fp.displayName = lp;
      var pp = "PopperAnchor",
        mp = h.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: r,
            ...o
          } = e, i = hp(pp, n), a = h.useRef(null), s = (0, Du.s)(t, a);
          return h.useEffect((() => {
            i.onAnchorChange(r?.current || a.current)
          })), r ? null : (0, u.jsx)(qu.sG.div, {
            ...o,
            ref: s
          })
        }));
      mp.displayName = pp;
      var gp = "PopperContent",
        [vp, yp] = cp(gp),
        bp = h.forwardRef(((e, t) => {
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
          } = e, y = hp(gp, n), [b, _] = h.useState(null), w = (0, Du.s)(t, (e => _(e))), [x, E] = h.useState(null), P = Gu(x), S = P?.width ?? 0, C = P?.height ?? 0, O = r + ("center" !== i ? "-" + i : ""), T = "number" == typeof d ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
          }, N = Array.isArray(c) ? c : [c], j = N.length > 0, R = {
            padding: T,
            boundary: N.filter(Ep),
            altBoundary: j
          }, {
            refs: L,
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
            $f(f, r) || p(r);
            const [m, g] = h.useState(null), [v, y] = h.useState(null), b = h.useCallback((e => {
              e !== E.current && (E.current = e, g(e))
            }), []), _ = h.useCallback((e => {
              e !== P.current && (P.current = e, y(e))
            }), []), w = i || m, x = a || v, E = h.useRef(null), P = h.useRef(null), S = h.useRef(u), C = null != l, O = Qf(l), T = Qf(o), N = Qf(c), j = h.useCallback((() => {
              if (!E.current || !P.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: f
              };
              T.current && (e.platform = T.current), Kf(E.current, P.current, e).then((e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== N.current
                };
                R.current && !$f(S.current, t) && (S.current = t, Gt.flushSync((() => {
                  d(t)
                })))
              }))
            }), [f, t, n, T, N]);
            Wf((() => {
              !1 === c && S.current.isPositioned && (S.current.isPositioned = !1, d((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [c]);
            const R = h.useRef(!1);
            Wf((() => (R.current = !0, () => {
              R.current = !1
            })), []), Wf((() => {
              if (w && (E.current = w), x && (P.current = x), w && x) {
                if (O.current) return O.current(w, x, j);
                j()
              }
            }), [w, x, j, O, C]);
            const L = h.useMemo((() => ({
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
                const t = Zf(A.floating, u.x),
                  r = Zf(A.floating, u.y);
                return s ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...Yf(A.floating) >= 1.5 && {
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
              refs: L,
              elements: A,
              floatingStyles: I
            })), [u, j, L, A, I])
          }({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...e) => function(e, t, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: i = !0,
                elementResize: a = "function" == typeof ResizeObserver,
                layoutShift: s = "function" == typeof IntersectionObserver,
                animationFrame: l = !1
              } = r, c = Sf(e), u = o || i ? [...c ? xf(c) : [], ...xf(t)] : [];
              u.forEach((e => {
                o && e.addEventListener("scroll", n, {
                  passive: !0
                }), i && e.addEventListener("resize", n)
              }));
              const d = c && s ? function(e, t) {
                let n, r = null;
                const o = sf(e);

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
                    rootMargin: -Mh(d) + "px " + -Mh(o.clientWidth - (u + h)) + "px " + -Mh(o.clientHeight - (d + f)) + "px " + -Mh(u) + "px",
                    threshold: Dh(0, Ih(1, l)) || 1
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
                    1 !== r || Bf(c, e.getBoundingClientRect()) || a(), m = !1
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
              let m = l ? Nf(e) : null;
              return l && function t() {
                const r = Nf(e);
                m && !Bf(m, r) && n(), m = r, h = requestAnimationFrame(t)
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
              ...Ff(M),
              options: [M, undefined]
            }), l && ep({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === f ? tp() : void 0,
              ...R
            }), l && np({
              ...R
            }), rp({
              ...R,
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
            }), x && ip({
              element: x,
              padding: s
            }), Pp({
              arrowWidth: S,
              arrowHeight: C
            }), p && op({
              strategy: "referenceHidden",
              ...R
            })]
          });
          var M;
          const [H, B] = Sp(I), F = Eh(g);
          Hu((() => {
            D && F?.()
          }), [D, F]);
          const V = k.arrow?.x,
            z = k.arrow?.y,
            U = 0 !== k.arrow?.centerOffset,
            [G, q] = h.useState();
          return Hu((() => {
            b && q(window.getComputedStyle(b).zIndex)
          }), [b]), (0, u.jsx)("div", {
            ref: L.setFloating,
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
            children: (0, u.jsx)(vp, {
              scope: n,
              placedSide: H,
              onArrowChange: E,
              arrowX: V,
              arrowY: z,
              shouldHideArrow: U,
              children: (0, u.jsx)(qu.sG.div, {
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
      bp.displayName = gp;
      var _p = "PopperArrow",
        wp = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        xp = h.forwardRef((function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = yp(_p, n), i = wp[o.placedSide];
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
            children: (0, u.jsx)(sp, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        }));

      function Ep(e) {
        return null !== e
      }
      xp.displayName = _p;
      var Pp = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [l, c] = Sp(n), u = {
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

      function Sp(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var Cp = fp,
        Op = mp,
        Tp = bp,
        Np = xp,
        jp = h.forwardRef(((e, t) => {
          const {
            container: n,
            ...r
          } = e, [o, i] = h.useState(!1);
          Hu((() => i(!0)), []);
          const a = n || o && globalThis?.document?.body;
          return a ? Gt.createPortal((0, u.jsx)(qu.sG.div, {
            ...r,
            ref: t
          }), a) : null
        }));
      jp.displayName = "Portal";
      var Rp = e => {
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
          }), [s]), Hu((() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                a = Lp(t);
              l(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : n && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, l]), Hu((() => {
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
        }) : h.Children.only(n), i = (0, Du.s)(r.ref, function(e) {
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
      Rp.displayName = "Presence";
      var Ap = n(18628),
        [Ip, Dp] = ku("Tooltip", [up]),
        kp = up(),
        Mp = "TooltipProvider",
        Hp = 700,
        Bp = "tooltip.open",
        [Fp, Vp] = Ip(Mp),
        zp = e => {
          const {
            __scopeTooltip: t,
            delayDuration: n = Hp,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, a = h.useRef(!0), s = h.useRef(!1), l = h.useRef(0);
          return h.useEffect((() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }), []), (0, u.jsx)(Fp, {
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
      zp.displayName = Mp;
      var Up = "Tooltip",
        [Gp, qp] = Ip(Up),
        Xp = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: a,
            delayDuration: s
          } = e, l = Vp(Up, e.__scopeTooltip), c = kp(t), [d, f] = h.useState(null), p = Lh(), m = h.useRef(0), g = a ?? l.disableHoverableContent, v = s ?? l.delayDuration, y = h.useRef(!1), [b, _] = Fu({
            prop: r,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Bp))) : l.onClose(), i?.(e)
            },
            caller: Up
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
          }), []), (0, u.jsx)(Cp, {
            ...c,
            children: (0, u.jsx)(Gp, {
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
      Xp.displayName = Up;
      var Kp = "TooltipTrigger",
        Wp = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = qp(Kp, n), i = Vp(Kp, n), a = kp(n), s = h.useRef(null), l = (0, Du.s)(t, s, o.onTriggerChange), c = h.useRef(!1), d = h.useRef(!1), f = h.useCallback((() => c.current = !1), []);
          return h.useEffect((() => () => document.removeEventListener("pointerup", f)), [f]), (0, u.jsx)(Op, {
            asChild: !0,
            ...a,
            children: (0, u.jsx)(qu.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...r,
              ref: l,
              onPointerMove: Iu(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (d.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), d.current = !0))
              })),
              onPointerLeave: Iu(e.onPointerLeave, (() => {
                o.onTriggerLeave(), d.current = !1
              })),
              onPointerDown: Iu(e.onPointerDown, (() => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", f, {
                  once: !0
                })
              })),
              onFocus: Iu(e.onFocus, (() => {
                c.current || o.onOpen()
              })),
              onBlur: Iu(e.onBlur, o.onClose),
              onClick: Iu(e.onClick, o.onClose)
            })
          })
        }));
      Wp.displayName = Kp;
      var $p = "TooltipPortal",
        [Yp, Zp] = Ip($p, {
          forceMount: void 0
        }),
        Qp = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = qp($p, t);
          return (0, u.jsx)(Yp, {
            scope: t,
            forceMount: n,
            children: (0, u.jsx)(Rp, {
              present: n || i.open,
              children: (0, u.jsx)(jp, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      Qp.displayName = $p;
      var Jp = "TooltipContent",
        em = h.forwardRef(((e, t) => {
          const n = Zp(Jp, e.__scopeTooltip),
            {
              forceMount: r = n.forceMount,
              side: o = "top",
              ...i
            } = e,
            a = qp(Jp, e.__scopeTooltip);
          return (0, u.jsx)(Rp, {
            present: r || a.open,
            children: a.disableHoverableContent ? (0, u.jsx)(im, {
              side: o,
              ...i,
              ref: t
            }) : (0, u.jsx)(tm, {
              side: o,
              ...i,
              ref: t
            })
          })
        })),
        tm = h.forwardRef(((e, t) => {
          const n = qp(Jp, e.__scopeTooltip),
            r = Vp(Jp, e.__scopeTooltip),
            o = h.useRef(null),
            i = (0, Du.s)(t, o),
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
          }), [l, d, a, c, p]), (0, u.jsx)(im, {
            ...e,
            ref: i
          })
        })),
        [nm, rm] = Ip(Up, {
          isInside: !1
        }),
        om = (0, Xu.Dc)("TooltipContent"),
        im = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            ...s
          } = e, l = qp(Jp, n), c = kp(n), {
            onClose: d
          } = l;
          return h.useEffect((() => (document.addEventListener(Bp, d), () => document.removeEventListener(Bp, d))), [d]), h.useEffect((() => {
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
          }), [l.trigger, d]), (0, u.jsx)(Oh, {
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
              children: [(0, u.jsx)(om, {
                children: r
              }), (0, u.jsx)(nm, {
                scope: n,
                isInside: !0,
                children: (0, u.jsx)(Ap.bL, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || r
                })
              })]
            })
          })
        }));
      em.displayName = Jp;
      var am = "TooltipArrow",
        sm = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = kp(n);
          return rm(am, n).isInside ? null : (0, u.jsx)(Np, {
            ...o,
            ...r,
            ref: t
          })
        }));
      sm.displayName = am;
      var lm = zp,
        cm = Xp,
        um = Wp,
        dm = Qp,
        hm = em,
        fm = sm;
      const pm = ({
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
        const [E = !1, P] = (0, U.ic)({
          defaultProp: m,
          prop: g,
          onChange: v
        }), S = (0, U.ZC)(E), C = Ma({
          opacity: E ? 1 : 0,
          immediate: E && !S
        }), O = "left" === n || "right" === n ? "center" : o, T = b ? {
          container: w
        } : {}, N = b ? dm : h.Fragment, j = _ ? {
          className: "foundry_hcgxh_h3lgaa2"
        } : {}, R = _ ? fm : h.Fragment;
        return (0, u.jsx)(lm, {
          delayDuration: y,
          children: (0, u.jsxs)(cm, {
            open: E,
            onOpenChange: P,
            children: [(0, u.jsx)(um, {
              asChild: !0,
              className: "foundry_hcgxh_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, u.jsx)(N, {
              ...T,
              children: (0, u.jsx)(hm, {
                side: n,
                align: O,
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
                children: (0, u.jsxs)(os.div, {
                  className: "foundry_hcgxh_h3lgaa0",
                  style: C,
                  children: [(0, u.jsx)(F, {
                    size: "SM",
                    className: "foundry_hcgxh_h3lgaa1",
                    asChild: !0,
                    children: (0, u.jsx)("span", {
                      children: e
                    })
                  }), (0, u.jsx)(R, {
                    ...j
                  })]
                })
              })
            })]
          })
        })
      };
      var mm = "foundry_hcgxh_bwy1ds1",
        gm = "foundry_hcgxh_bwy1dsg",
        vm = "foundry_hcgxh_bwy1dsf";
      const ym = e => {
          e.preventDefault?.()
        },
        bm = (0, h.forwardRef)((({
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
          const v = _u(),
            y = (0, U.Ub)("screen and (max-width: 1024px)"),
            b = n !== p,
            _ = y ? "SM" : "LG",
            w = Ma({
              opacity: b ? 1 : 0,
              immediate: (0, U.jt)()
            });
          th(["+", "=", "add", "plus"], (() => r?.()), {
            preventDefault: !0,
            enabled: m
          }), th(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0,
            enabled: m
          }), th("r", (() => d?.()), {
            preventDefault: !0,
            enabled: m
          });
          const x = (0, U.rl)() && y;
          return (0, u.jsx)(Qd, {
            children: (0, u.jsxs)("div", {
              className: "foundry_hcgxh_bwy1ds0",
              ref: g,
              children: [(0, u.jsx)(pm, {
                side: "right",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: ym,
                content: (0, u.jsxs)("div", {
                  className: vm,
                  children: [v.formatMessage(Sd), (0, u.jsx)(F, {
                    size: "XS",
                    className: gm,
                    children: v.formatMessage(Cd, {
                      shortcut: (0, u.jsx)(xh, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, u.jsx)(ch, {
                  size: _,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: v.formatMessage(Sd),
                  className: (0, A.$)(mm, "foundry_hcgxh_bwy1ds2"),
                  onPress: e
                })
              }), (0, u.jsxs)("div", {
                className: "foundry_hcgxh_bwy1ds3",
                children: [!x && m && (0, u.jsxs)(u.Fragment, {
                  children: [(0, u.jsxs)("div", {
                    className: "foundry_hcgxh_bwy1ds4",
                    children: [(0, u.jsx)(pm, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: ym,
                      content: (0, u.jsxs)("div", {
                        className: vm,
                        children: [v.formatMessage(Od), (0, u.jsx)(F, {
                          size: "XS",
                          className: gm,
                          children: v.formatMessage(Td, {
                            shortcut: (0, u.jsx)(xh, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(ch, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: v.formatMessage(Od),
                        className: (0, A.$)(mm, "foundry_hcgxh_bwy1ds5"),
                        onPress: () => r(),
                        isDisabled: !l
                      })
                    }), (0, u.jsxs)(wd, {
                      className: "foundry_hcgxh_bwy1dsa",
                      value: [n],
                      max: s,
                      min: a,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => i?.(e[0]),
                      children: [(0, u.jsx)(xd, {
                        className: "foundry_hcgxh_bwy1dsb",
                        children: (0, u.jsx)(Ed, {
                          className: "foundry_hcgxh_bwy1dsc"
                        })
                      }), (0, u.jsx)(pm, {
                        side: "left",
                        portal: !1,
                        delayDuration: 0,
                        onPointerDownOutside: ym,
                        content: v.formatMessage(Id, {
                          zoom: n.toFixed(0)
                        }),
                        children: (0, u.jsx)(Pd, {
                          className: "foundry_hcgxh_bwy1dsd",
                          "aria-label": v.formatMessage(Ad),
                          children: (0, u.jsx)("span", {
                            className: "foundry_hcgxh_bwy1dse"
                          })
                        })
                      })]
                    }), (0, u.jsx)(pm, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: ym,
                      content: (0, u.jsxs)("div", {
                        className: vm,
                        children: [v.formatMessage(Nd), (0, u.jsx)(F, {
                          size: "XS",
                          className: gm,
                          children: v.formatMessage(jd, {
                            shortcut: (0, u.jsx)(xh, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(ch, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: v.formatMessage(Nd),
                        className: (0, A.$)(mm, "foundry_hcgxh_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !c
                      })
                    })]
                  }), (0, u.jsx)(os.div, {
                    style: w,
                    children: (0, u.jsx)(pm, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: ym,
                      content: (0, u.jsxs)("div", {
                        className: vm,
                        children: [v.formatMessage(Rd), (0, u.jsx)(F, {
                          size: "XS",
                          className: gm,
                          children: v.formatMessage(Ld, {
                            shortcut: (0, u.jsx)(xh, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(ch, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Undo",
                        label: v.formatMessage(Rd),
                        className: (0, A.$)(mm, "foundry_hcgxh_bwy1ds7"),
                        onPress: d,
                        isDisabled: !b,
                        "aria-hidden": !b
                      })
                    })
                  })]
                }), f && x && (0, u.jsx)(pm, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: ym,
                  content: v.formatMessage(kd),
                  children: (0, u.jsx)(ch, {
                    size: _,
                    appearance: "tertiary",
                    icon: "Download",
                    label: v.formatMessage(Dd),
                    className: mm,
                    onPress: e
                  })
                })]
              }), (0, u.jsxs)("div", {
                className: "foundry_hcgxh_bwy1ds8",
                children: [h && (0, u.jsxs)(u.Fragment, {
                  children: [(0, u.jsx)("div", {
                    className: "foundry_hcgxh_bwy1dsh"
                  }), (0, u.jsx)(F, {
                    size: "SM",
                    "aria-hidden": !0,
                    asChild: "string" != typeof h,
                    children: h
                  })]
                }), f && !x && (0, u.jsx)("div", {
                  className: "foundry_hcgxh_bwy1ds9",
                  children: (0, u.jsx)(pm, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: ym,
                    content: v.formatMessage(kd),
                    children: (0, u.jsx)(ch, {
                      size: _,
                      appearance: "tertiary",
                      icon: "Download",
                      label: v.formatMessage(Dd),
                      className: mm,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        }));
      var _m = "foundry_hcgxh_1a74xwb4",
        wm = "focusScope.autoFocusOnMount",
        xm = "focusScope.autoFocusOnUnmount",
        Em = {
          bubbles: !1,
          cancelable: !0
        },
        Pm = h.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...a
          } = e, [s, l] = h.useState(null), c = Eh(o), d = Eh(i), f = h.useRef(null), p = (0, Du.s)(t, (e => l(e))), m = h.useRef({
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
              Nm.add(m);
              const e = document.activeElement;
              if (!s.contains(e)) {
                const t = new CustomEvent(wm, Em);
                s.addEventListener(wm, c), s.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (Tm(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(Sm(s).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && Tm(s))
              }
              return () => {
                s.removeEventListener(wm, c), setTimeout((() => {
                  const t = new CustomEvent(xm, Em);
                  s.addEventListener(xm, d), s.dispatchEvent(t), t.defaultPrevented || Tm(e ?? document.body, {
                    select: !0
                  }), s.removeEventListener(xm, d), Nm.remove(m)
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
                  const t = Sm(e);
                  return [Cm(t, e), Cm(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && Tm(i, {
                select: !0
              })) : (e.preventDefault(), n && Tm(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, r, m.paused]);
          return (0, u.jsx)(qu.sG.div, {
            tabIndex: -1,
            ...a,
            ref: p,
            onKeyDown: g
          })
        }));

      function Sm(e) {
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

      function Cm(e, t) {
        for (const n of e)
          if (!Om(n, {
              upTo: t
            })) return n
      }

      function Om(e, {
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
      Pm.displayName = "FocusScope";
      var Nm = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = jm(e, t), e.unshift(t)
          },
          remove(t) {
            e = jm(e, t), e[0]?.resume()
          }
        }
      }();

      function jm(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var Rm = 0;

      function Lm() {
        h.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? Am()), document.body.insertAdjacentElement("beforeend", e[1] ?? Am()), Rm++, () => {
            1 === Rm && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), Rm--
          }
        }), [])
      }

      function Am() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var Im = n(4446),
        Dm = new WeakMap,
        km = new WeakMap,
        Mm = {},
        Hm = 0,
        Bm = function(e) {
          return e && (e.host || Bm(e.parentNode))
        },
        Fm = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), function(e, t, n, r) {
            var o = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = Bm(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            Mm[n] || (Mm[n] = new WeakMap);
            var i = Mm[n],
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
                    l = (Dm.get(e) || 0) + 1,
                    c = (i.get(e) || 0) + 1;
                  Dm.set(e, l), i.set(e, c), a.push(e), 1 === l && o && km.set(e, !0), 1 === c && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              }))
            };
            return u(t), s.clear(), Hm++,
              function() {
                a.forEach((function(e) {
                  var t = Dm.get(e) - 1,
                    o = i.get(e) - 1;
                  Dm.set(e, t), i.set(e, o), t || (km.has(e) || e.removeAttribute(r), km.delete(e)), o || e.removeAttribute(n)
                })), --Hm || (Dm = new WeakMap, Dm = new WeakMap, km = new WeakMap, Mm = {})
              }
          }(r, o, n, "aria-hidden")) : function() {
            return null
          }
        },
        Vm = "Dialog",
        [zm, Um] = ku(Vm),
        [Gm, qm] = zm(Vm),
        Xm = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: a = !0
          } = e, s = h.useRef(null), l = h.useRef(null), [c, d] = Fu({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Vm
          });
          return (0, u.jsx)(Gm, {
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
      Xm.displayName = Vm;
      var Km = "DialogTrigger",
        Wm = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = qm(Km, n), i = (0, Du.s)(t, o.triggerRef);
          return (0, u.jsx)(qu.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": fg(o.open),
            ...r,
            ref: i,
            onClick: Iu(e.onClick, o.onOpenToggle)
          })
        }));
      Wm.displayName = Km;
      var $m = "DialogPortal",
        [Ym, Zm] = zm($m, {
          forceMount: void 0
        }),
        Qm = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = qm($m, t);
          return (0, u.jsx)(Ym, {
            scope: t,
            forceMount: n,
            children: h.Children.map(r, (e => (0, u.jsx)(Rp, {
              present: n || i.open,
              children: (0, u.jsx)(jp, {
                asChild: !0,
                container: o,
                children: e
              })
            })))
          })
        };
      Qm.displayName = $m;
      var Jm = "DialogOverlay",
        eg = h.forwardRef(((e, t) => {
          const n = Zm(Jm, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = qm(Jm, e.__scopeDialog);
          return i.modal ? (0, u.jsx)(Rp, {
            present: r || i.open,
            children: (0, u.jsx)(ng, {
              ...o,
              ref: t
            })
          }) : null
        }));
      eg.displayName = Jm;
      var tg = (0, Xu.TL)("DialogOverlay.RemoveScroll"),
        ng = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = qm(Jm, n);
          return (0, u.jsx)(Im.A, {
            as: tg,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, u.jsx)(qu.sG.div, {
              "data-state": fg(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        })),
        rg = "DialogContent",
        og = h.forwardRef(((e, t) => {
          const n = Zm(rg, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = qm(rg, e.__scopeDialog);
          return (0, u.jsx)(Rp, {
            present: r || i.open,
            children: i.modal ? (0, u.jsx)(ig, {
              ...o,
              ref: t
            }) : (0, u.jsx)(ag, {
              ...o,
              ref: t
            })
          })
        }));
      og.displayName = rg;
      var ig = h.forwardRef(((e, t) => {
          const n = qm(rg, e.__scopeDialog),
            r = h.useRef(null),
            o = (0, Du.s)(t, n.contentRef, r);
          return h.useEffect((() => {
            const e = r.current;
            if (e) return Fm(e)
          }), []), (0, u.jsx)(sg, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Iu(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: Iu(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: Iu(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        ag = h.forwardRef(((e, t) => {
          const n = qm(rg, e.__scopeDialog),
            r = h.useRef(!1),
            o = h.useRef(!1);
          return (0, u.jsx)(sg, {
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
        sg = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...a
          } = e, s = qm(rg, n), l = h.useRef(null), c = (0, Du.s)(t, l);
          return Lm(), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Pm, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, u.jsx)(Oh, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": fg(s.open),
                ...a,
                ref: c,
                onDismiss: () => s.onOpenChange(!1)
              })
            }), (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)(vg, {
                titleId: s.titleId
              }), (0, u.jsx)(yg, {
                contentRef: l,
                descriptionId: s.descriptionId
              })]
            })]
          })
        })),
        lg = "DialogTitle",
        cg = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = qm(lg, n);
          return (0, u.jsx)(qu.sG.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        }));
      cg.displayName = lg;
      var ug = "DialogDescription",
        dg = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = qm(ug, n);
          return (0, u.jsx)(qu.sG.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        }));
      dg.displayName = ug;
      var hg = "DialogClose";

      function fg(e) {
        return e ? "open" : "closed"
      }
      h.forwardRef(((e, t) => {
        const {
          __scopeDialog: n,
          ...r
        } = e, o = qm(hg, n);
        return (0, u.jsx)(qu.sG.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: Iu(e.onClick, (() => o.onOpenChange(!1)))
        })
      })).displayName = hg;
      var pg = "DialogTitleWarning",
        [mg, gg] = function(e, t) {
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
        }(pg, {
          contentName: rg,
          titleName: lg,
          docsSlug: "dialog"
        }),
        vg = ({
          titleId: e
        }) => {
          const t = gg(pg),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return h.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        yg = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${gg("DialogDescriptionWarning").contentName}}.`;
          return h.useEffect((() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        bg = Xm,
        _g = Wm,
        wg = Qm,
        xg = og,
        Eg = cg,
        Pg = dg;
      const Sg = os(eg),
        Cg = os(xg),
        Og = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        Tg = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        Ng = (0, d.AK)(.77, 0, .175, 1),
        jg = ({
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
          testId: O,
          showZoomControls: T = !0,
          disableGesturesOn: N,
          asChild: j,
          children: R,
          className: L,
          usePortal: I = !0,
          enabled: D = !0
        }) => {
          const k = (0, h.useRef)(null),
            M = (0, h.useRef)(null),
            H = (0, h.useRef)(null),
            B = (0, h.useRef)(null),
            F = Ba(),
            z = Ba(),
            G = Ba(),
            q = (0, h.useRef)(!1),
            X = _u(),
            K = (0, U.Ub)("screen and (max-width: 1024px)"),
            W = (0, U.rl)() && K,
            $ = (0, U.jt)(),
            Y = "pointer-devices" !== N || W,
            [Z, Q] = (0, h.useState)(!0),
            [J, ee] = (0, h.useState)(!1),
            [te = !1, ne] = (0, U.ic)({
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
          }), []), (0, U.qn)((() => {
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
                      easing: Ng
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
                      easing: Ng
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
          }), [re]), (0, U.qn)((() => {
            te ? Promise.resolve().then((() => async function() {
              const e = H.current.querySelector("img");
              if (B.current) {
                let t = Og;
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
            } = (0, U.gr)({
              enabled: se
            }),
            {
              isHovered: he
            } = (0, U.Mk)({
              ref: M,
              enabled: se
            }),
            {
              isFocused: fe
            } = (0, U.iQ)({
              ref: M,
              enabled: se
            }),
            {
              isIdle: pe
            } = (0, U.UQ)({
              leave: 300,
              activity: 3e3,
              enabled: se && !he && !fe && !W
            }),
            me = function(e, t, n) {
              const r = Fr.fun(t) && t,
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
                f = (0, h.useMemo)((() => r || 3 == arguments.length ? ka() : void 0), []),
                p = Gr(e),
                m = [],
                g = (0, h.useRef)(null),
                v = o ? null : g.current;
              li((() => {
                g.current = m
              })), ui((() => (zr(m, (e => {
                f?.add(e.ctrl), e.ctrl.ref = f
              })), () => {
                zr(g.current, (e => {
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
                      return n ? (t.add(n), n.key) : Fa++
                    }))
                  }
                  return Fr.und(n) ? e : Fr.fun(n) ? e.map(n) : Gr(n)
                }(p, r ? r() : t, v),
                b = o && g.current || [];
              li((() => zr(b, (({
                ctrl: e,
                item: t,
                key: n
              }) => {
                Vi(e, f), Ni(c, t, n)
              }))));
              const _ = [];
              if (v && zr(v, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = _[t] = y.indexOf(e.key)) && (m[t] = e)
                })), zr(p, ((e, t) => {
                  m[t] || (m[t] = {
                    key: y[t],
                    item: e,
                    phase: "mount",
                    ctrl: new Pa
                  }, m[t].ctrl.item = e)
                })), _.length) {
                let e = -1;
                const {
                  leave: n
                } = r ? r() : t;
                zr(_, ((t, r) => {
                  const o = v[r];
                  ~t ? (e = m.indexOf(o), m[e] = {
                    ...o,
                    item: p[t]
                  }) : n && m.splice(++e, 0, o)
                }))
              }
              Fr.fun(i) && m.sort(((e, t) => i(e.item, t.item)));
              let w = -a;
              const x = ci(),
                E = Ii(t),
                P = new Map,
                S = (0, h.useRef)(new Map),
                C = (0, h.useRef)(!1);
              zr(m, ((e, n) => {
                const o = e.key,
                  i = e.phase,
                  c = r ? r() : t;
                let h, f;
                const p = Ni(c.delay || 0, o);
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
                if (h = Ni(h, e.item, n), h = Fr.obj(h) ? Mi(h) : {
                    to: h
                  }, !h.config) {
                  const t = d || E.config;
                  h.config = Ni(t, e.item, n, f)
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
                if ("enter" == f && Fr.und(m.from)) {
                  const o = r ? r() : t,
                    i = Fr.und(o.initial) || v ? o.from : o.initial;
                  m.from = Ni(i, e.item, n)
                }
                const {
                  onResolve: b
                } = m;
                m.onResolve = e => {
                  Ni(b, e);
                  const t = g.current,
                    n = t.find((e => e.key === o));
                  if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == n.phase) {
                      const t = Ni(s, n.item);
                      if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (n.expired = !0, !e && r > 0) return void(r <= 2147483647 && (n.expirationId = setTimeout(x, r)))
                      }
                    }
                    e && t.some((e => e.expired)) && (S.current.delete(n), l && (C.current = !0), x())
                  }
                };
                const _ = Oa(e.ctrl, m);
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
              const O = (0, h.useContext)(Ia),
                T = hi(O),
                N = O !== T && Bi(O);
              li((() => {
                N && zr(m, (e => {
                  e.ctrl.start({
                    default: O
                  })
                }))
              }), [O]), zr(P, ((e, t) => {
                if (S.current.size) {
                  const e = m.findIndex((e => e.key === t.key));
                  m.splice(e, 1)
                }
              })), li((() => {
                zr(S.current.size ? S.current : P, (({
                  phase: e,
                  payload: t
                }, n) => {
                  const {
                    ctrl: r
                  } = n;
                  n.phase = e, f?.add(r), N && "enter" == e && r.start({
                    default: O
                  }), t && (zi(r, t.ref), !r.ref && !f || C.current ? (r.start(t), C.current && (C.current = !1)) : r.update(t))
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
                  key: Fr.str(t.key) || Fr.num(t.key) ? t.key : t.ctrl.id,
                  ref: o.ref
                }) : o
              })));
              return f ? [j, f] : j
            }(se, {
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
              immediate: le
            }),
            [ge] = Ma((() => ({
              ref: z,
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
              gestureSettings: p = hs,
              enabled: m
            }) => {
              const g = (0, U.jt)(),
                [v = t, y] = (0, U.ic)({
                  prop: e,
                  defaultProp: t,
                  onChange: n
                }),
                [b = s, _] = (0, U.ic)({
                  prop: a,
                  defaultProp: s,
                  onChange: l
                }),
                w = (0, h.useRef)(null),
                x = (0, h.useRef)(null),
                [E, P] = (0, h.useState)(!1),
                S = b > r,
                C = b < o,
                O = b > r,
                T = b === r,
                [N, j] = Ma((() => ({
                  x: v[0],
                  y: v[1],
                  scale: b / 100,
                  from: {
                    scale: r / 100,
                    x: t[0],
                    y: t[1]
                  },
                  immediate: g,
                  config: us
                }))),
                R = (e, {
                  origin: n,
                  delta: i,
                  animationConfig: a
                } = {}) => {
                  if (w.current && x.current) {
                    n || (n = [x.current.clientWidth / 2, x.current.clientHeight / 2]);
                    const s = cs(e, r, o);
                    if (s === b) return;
                    i || (i = (s - b) / 100);
                    const l = {
                      config: a || us,
                      x: t[0],
                      y: t[1],
                      scale: b,
                      immediate: g
                    };
                    if (s <= r) y(t);
                    else {
                      const e = ls(w.current, x.current, (({
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
                L = (e, t) => e.y < t.top || e.y > t.bottom || e.x < t.left || e.x > t.right,
                {
                  handleClick: A
                } = (0, U.Rv)({
                  onDoubleClick: e => {
                    if (w.current) {
                      const t = as(w.current),
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
                      const t = as(w.current),
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
                containerRef: x,
                contentRef: w,
                canPan: S,
                isPanning: E,
                position: v,
                zoomLevel: b,
                zoomIn: e => {
                  R(b + i, e)
                },
                zoomOut: e => {
                  R(b - i, e)
                },
                zoomTo: R,
                resetZoom: () => {
                  y(t), _(s);
                  const e = {
                    config: ds,
                    x: t[0],
                    y: t[1],
                    scale: s / 100,
                    immediate: g
                  };
                  j(e)
                },
                canZoomIn: C,
                canZoomOut: O,
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
                    } = ls(w.current, x.current, v, b), f = o * p.dragFactor, m = i * p.dragFactor, _ = {
                      config: us,
                      x: t[0],
                      y: t[1],
                      immediate: g
                    };
                    if (b === r) {
                      const e = [n[0], n[1] + m],
                        {
                          y: t
                        } = ss(e, w.current),
                        r = cs(100 * Math.abs(t) / p.closePc, 0, 100);
                      _.config = ds, _.x = e[0], _.y = e[1], y(e), u?.(r)
                    } else {
                      const e = [is(n[0] + f, -d, d), is(n[1] + m, -h, h)];
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
                        } = ss(v, w.current);
                        if (cs(100 * Math.abs(e) / p.closePc, 0, 100) >= 100) c?.();
                        else {
                          const e = {
                            config: ds,
                            x: t[0],
                            y: t[1],
                            immediate: g
                          };
                          j(e), y(t), u?.(0)
                        }
                      } else if (void 0 !== e) {
                      const e = ls(w.current, x.current, v, b),
                        t = {
                          config: us,
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
                      R(100 * n, {
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
                      R(100 * a, {
                        delta: a - i,
                        origin: o
                      })
                    }
                  },
                  onWheelEnd: () => {
                    x.current && w.current && P(!1)
                  }
                },
                getCursor: () => T && !m ? "zoom-out" : T && C ? "zoom-in" : S ? E ? "grabbing" : "grab" : "pointer",
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
                      animationConfig: ds
                    })
                  }
              },
              onRequestedClose: ce,
              onRequestingClose: e => {
                if (re) {
                  const t = 1,
                    n = .25,
                    r = cs(t - e * (t - n) / 100, n, t);
                  F.start({
                    opacity: r
                  });
                  const o = cs(1 - e / 100, 0, 1);
                  z.start({
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
            ye = Ma({
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
            be = Ma({
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
              [G, F, z],
              [0, 0, .1]
            ];
          async function we(e) {
            return e.complete ? Promise.resolve(e) : new Promise(((t, n) => {
              e.onload = () => t(e), e.onerror = n
            }))
          }! function(e, t, n = 1e3) {
            li((() => {
              if (t) {
                let r = 0;
                zr(e, ((e, o) => {
                  const i = e.current;
                  if (i.length) {
                    let a = n * t[o];
                    isNaN(a) ? a = r : r = a, zr(i, (e => {
                      zr(e.queue, (e => {
                        const t = e.delay;
                        e.delay = e => a + Ni(t || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let t = Promise.resolve();
                zr(e, (e => {
                  const n = e.current;
                  if (n.length) {
                    const r = n.map((e => {
                      const t = e.queue;
                      return e.queue = [], t
                    }));
                    t = t.then((() => (zr(n, ((e, t) => zr(r[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(se ? _e[0] : _e[0].reverse(), _e[1]);
          const xe = j ? (0, u.jsx)(m.DX, {
            className: _m,
            ref: null,
            children: R
          }) : (0, u.jsx)("img", {
            alt: "",
            src: s,
            "aria-hidden": !0,
            loading: i,
            className: _m,
            crossOrigin: r,
            referrerPolicy: a
          });
          (0, h.useEffect)((() => {
            Q(!W)
          }), [W]);
          const {
            contrastMode: Ee
          } = (0, nn.DP)(), Pe = ((e, t) => [Ru.xW.tokens, Lu("dark", t)].join(" "))(0, Ee);
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(bg, {
              open: te,
              children: (0, u.jsxs)("div", {
                className: (0, A.A)("foundry_hcgxh_1a74xwb0", L),
                children: [(0, u.jsx)(_g, {
                  asChild: !0,
                  children: (0, u.jsxs)(os.button, {
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
                      children: X.formatMessage(Ou)
                    }), xe, me(((e, t) => y && !t && (0, u.jsx)(os.span, {
                      className: "foundry_hcgxh_1a74xwb5",
                      style: e,
                      children: (0, u.jsx)(V.Plus, {
                        label: ""
                      })
                    })))]
                  })
                }), (0, u.jsxs)(wg, {
                  ...!I && {
                    container: ie
                  },
                  children: [(0, u.jsx)(os.img, {
                    "aria-hidden": !0,
                    src: Og,
                    ref: B,
                    className: "foundry_hcgxh_1a74xwb2 foundry_hcgxh_1a74xwb1",
                    style: {
                      aspectRatio: l,
                      backgroundPosition: c,
                      backgroundSize: d,
                      ...ye
                    }
                  }), me(((o, s) => s && (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(Sg, {
                      className: "foundry_hcgxh_1a74xwb8",
                      style: o
                    }), (0, u.jsxs)(Cg, {
                      "data-testid": O,
                      onEscapeKeyDown: ce,
                      onOpenAutoFocus: Tg,
                      onCloseAutoFocus: e => ((e, t) => {
                        e?.preventDefault(), t.current?.focus({
                          preventScroll: !0
                        })
                      })(e, H),
                      className: Pe,
                      children: [(0, u.jsx)(m.s6, {
                        children: (0, u.jsx)(Eg, {
                          children: X.formatMessage(Tu)
                        })
                      }), (0, u.jsx)(m.s6, {
                        children: (0, u.jsx)(Pg, {
                          children: n || X.formatMessage(Nu, {
                            alt: t
                          })
                        })
                      }), (0, u.jsx)(os.div, {
                        className: "foundry_hcgxh_1a74xwb6",
                        style: be,
                        children: (0, u.jsx)(fs, {
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
                      }), (0, u.jsx)(os.div, {
                        className: "foundry_hcgxh_1a74xwb9",
                        style: ge,
                        children: (0, u.jsx)(bm, {
                          ...ve,
                          ref: M,
                          onClose: ce,
                          caption: n,
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
            }), !I && (0, u.jsx)("div", {
              ref: ae
            })]
          })
        },
        Rg = e => {
          const t = (0, nn.Ym)();
          return (0, u.jsx)(Cu, {
            messages: ju,
            locale: t,
            children: (0, u.jsx)(jg, {
              ...e
            })
          })
        };
      var Lg = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Ag = [" ", "Enter"],
        Ig = "Select",
        [Dg, kg, Mg] = Ku(Ig),
        [Hg, Bg] = ku(Ig, [Mg, up]),
        Fg = up(),
        [Vg, zg] = Hg(Ig),
        [Ug, Gg] = Hg(Ig),
        qg = e => {
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
          } = e, v = Fg(t), [y, b] = h.useState(null), [_, w] = h.useState(null), [x, E] = h.useState(!1), P = zu(c), [S, C] = Fu({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Ig
          }), [O, T] = Fu({
            prop: a,
            defaultProp: s,
            onChange: l,
            caller: Ig
          }), N = h.useRef(null), j = !y || g || !!y.closest("form"), [R, L] = h.useState(new Set), A = Array.from(R).map((e => e.props.value)).join(";");
          return (0, u.jsx)(Cp, {
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
              value: O,
              onValueChange: T,
              open: S,
              onOpenChange: C,
              dir: P,
              triggerPointerDownPosRef: N,
              disabled: p,
              children: [(0, u.jsx)(Dg.Provider, {
                scope: t,
                children: (0, u.jsx)(Ug, {
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
              }), j ? (0, u.jsxs)(Cv, {
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
                }) : null, Array.from(R)]
              }, A) : null]
            })
          })
        };
      qg.displayName = Ig;
      var Xg = "SelectTrigger",
        Kg = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            disabled: r = !1,
            ...o
          } = e, i = Fg(n), a = zg(Xg, n), s = a.disabled || r, l = (0, Du.s)(t, a.onTriggerChange), c = kg(n), d = h.useRef("touch"), [f, p, m] = Tv((e => {
            const t = c().filter((e => !e.disabled)),
              n = t.find((e => e.value === a.value)),
              r = Nv(t, e, n);
            void 0 !== r && a.onValueChange(r.value)
          })), g = e => {
            s || (a.onOpenChange(!0), m()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, u.jsx)(Op, {
            asChild: !0,
            ...i,
            children: (0, u.jsx)(qu.sG.button, {
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
              "data-placeholder": Ov(a.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: Iu(o.onClick, (e => {
                e.currentTarget.focus(), "mouse" !== d.current && g(e)
              })),
              onPointerDown: Iu(o.onPointerDown, (e => {
                d.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (g(e), e.preventDefault())
              })),
              onKeyDown: Iu(o.onKeyDown, (e => {
                const t = "" !== f.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || p(e.key), t && " " === e.key || Lg.includes(e.key) && (g(), e.preventDefault())
              }))
            })
          })
        }));
      Kg.displayName = Xg;
      var Wg = "SelectValue",
        $g = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: i,
            placeholder: a = "",
            ...s
          } = e, l = zg(Wg, n), {
            onValueNodeHasChildrenChange: c
          } = l, d = void 0 !== i, h = (0, Du.s)(t, l.onValueNodeChange);
          return Hu((() => {
            c(d)
          }), [c, d]), (0, u.jsx)(qu.sG.span, {
            ...s,
            ref: h,
            style: {
              pointerEvents: "none"
            },
            children: Ov(l.value) ? (0, u.jsx)(u.Fragment, {
              children: a
            }) : i
          })
        }));
      $g.displayName = Wg;
      var Yg = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, u.jsx)(qu.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      }));
      Yg.displayName = "SelectIcon";
      var Zg = e => (0, u.jsx)(jp, {
        asChild: !0,
        ...e
      });
      Zg.displayName = "SelectPortal";
      var Qg = "SelectContent",
        Jg = h.forwardRef(((e, t) => {
          const n = zg(Qg, e.__scopeSelect),
            [r, o] = h.useState();
          if (Hu((() => {
              o(new DocumentFragment)
            }), []), !n.open) {
            const t = r;
            return t ? Gt.createPortal((0, u.jsx)(tv, {
              scope: e.__scopeSelect,
              children: (0, u.jsx)(Dg.Slot, {
                scope: e.__scopeSelect,
                children: (0, u.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, u.jsx)(ov, {
            ...e,
            ref: t
          })
        }));
      Jg.displayName = Qg;
      var ev = 10,
        [tv, nv] = Hg(Qg),
        rv = (0, Xu.TL)("SelectContent.RemoveScroll"),
        ov = h.forwardRef(((e, t) => {
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
          } = e, _ = zg(Qg, n), [w, x] = h.useState(null), [E, P] = h.useState(null), S = (0, Du.s)(t, (e => x(e))), [C, O] = h.useState(null), [T, N] = h.useState(null), j = kg(n), [R, L] = h.useState(!1), A = h.useRef(!1);
          h.useEffect((() => {
            if (w) return Fm(w)
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
            R && D()
          }), [R, D]);
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
              r = Nv(t, e, n);
            r && setTimeout((() => r.ref.current.focus()))
          })), F = h.useCallback(((e, t, n) => {
            const r = !A.current && !n;
            (void 0 !== _.value && _.value === t || r) && (O(e), r && (A.current = !0))
          }), [_.value]), V = h.useCallback((() => w?.focus()), [w]), z = h.useCallback(((e, t, n) => {
            const r = !A.current && !n;
            (void 0 !== _.value && _.value === t || r) && N(e)
          }), [_.value]), U = "popper" === r ? av : iv, G = U === av ? {
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
          return (0, u.jsx)(tv, {
            scope: n,
            content: w,
            viewport: E,
            onViewportChange: P,
            itemRefCallback: F,
            selectedItem: C,
            onItemLeave: V,
            itemTextRefCallback: z,
            focusSelectedItem: D,
            selectedItemText: T,
            position: r,
            isPositioned: R,
            searchRef: H,
            children: (0, u.jsx)(Im.A, {
              as: rv,
              allowPinchZoom: !0,
              children: (0, u.jsx)(Pm, {
                asChild: !0,
                trapped: _.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: Iu(o, (e => {
                  _.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, u.jsx)(Oh, {
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
                    ref: S,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: Iu(b.onKeyDown, (e => {
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
      ov.displayName = "SelectContentImpl";
      var iv = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: r,
          ...o
        } = e, i = zg(Qg, n), a = nv(Qg, n), [s, l] = h.useState(null), [c, d] = h.useState(null), f = (0, Du.s)(t, (e => d(e))), p = kg(n), m = h.useRef(!1), g = h.useRef(!0), {
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
                u = window.innerWidth - ev,
                d = Au(i, [ev, Math.max(ev, u - c)]);
              s.style.minWidth = l + "px", s.style.left = d + "px"
            } else {
              const r = t.right - o.right,
                i = window.innerWidth - n.right - r,
                a = window.innerWidth - e.right - i,
                l = e.width + a,
                c = Math.max(l, t.width),
                u = window.innerWidth - ev,
                d = Au(i, [ev, Math.max(ev, u - c)]);
              s.style.minWidth = l + "px", s.style.right = d + "px"
            }
            const a = p(),
              l = window.innerHeight - 2 * ev,
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
              S = e.top + e.height / 2 - ev,
              C = l - S,
              O = y.offsetHeight / 2,
              T = h + f + (y.offsetTop + O),
              N = _ - T;
            if (T <= S) {
              const e = a.length > 0 && y === a[a.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = c.clientHeight - v.offsetTop - v.offsetHeight,
                n = T + Math.max(C, O + (e ? P : 0) + t + g);
              s.style.height = n + "px"
            } else {
              const e = a.length > 0 && y === a[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(S, h + v.offsetTop + (e ? E : 0) + O) + N;
              s.style.height = t + "px", v.scrollTop = T - S + v.offsetTop
            }
            s.style.margin = `${ev}px 0`, s.style.minHeight = w + "px", s.style.maxHeight = l + "px", r?.(), requestAnimationFrame((() => m.current = !0))
          }
        }), [p, i.trigger, i.valueNode, s, c, v, y, b, i.dir, r]);
        Hu((() => w()), [w]);
        const [x, E] = h.useState();
        Hu((() => {
          c && E(window.getComputedStyle(c).zIndex)
        }), [c]);
        const P = h.useCallback((e => {
          e && !0 === g.current && (w(), _?.(), g.current = !1)
        }), [w, _]);
        return (0, u.jsx)(sv, {
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
            children: (0, u.jsx)(qu.sG.div, {
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
      iv.displayName = "SelectItemAlignedPosition";
      var av = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = ev,
          ...i
        } = e, a = Fg(n);
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
      av.displayName = "SelectPopperPosition";
      var [sv, lv] = Hg(Qg, {}), cv = "SelectViewport", uv = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          nonce: r,
          ...o
        } = e, i = nv(cv, n), a = lv(cv, n), s = (0, Du.s)(t, i.onViewportChange), l = h.useRef(0);
        return (0, u.jsxs)(u.Fragment, {
          children: [(0, u.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }), (0, u.jsx)(Dg.Slot, {
            scope: n,
            children: (0, u.jsx)(qu.sG.div, {
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
              onScroll: Iu(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = a;
                if (r?.current && n) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * ev,
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
      uv.displayName = cv;
      var dv = "SelectGroup",
        [hv, fv] = Hg(dv);
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Lh();
        return (0, u.jsx)(hv, {
          scope: n,
          id: o,
          children: (0, u.jsx)(qu.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
          })
        })
      })).displayName = dv;
      var pv = "SelectLabel";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = fv(pv, n);
        return (0, u.jsx)(qu.sG.div, {
          id: o.id,
          ...r,
          ref: t
        })
      })).displayName = pv;
      var mv = "SelectItem",
        [gv, vv] = Hg(mv),
        yv = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            value: r,
            disabled: o = !1,
            textValue: i,
            ...a
          } = e, s = zg(mv, n), l = nv(mv, n), c = s.value === r, [d, f] = h.useState(i ?? ""), [p, m] = h.useState(!1), g = (0, Du.s)(t, (e => l.itemRefCallback?.(e, r, o))), v = Lh(), y = h.useRef("touch"), b = () => {
            o || (s.onValueChange(r), s.onOpenChange(!1))
          };
          if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, u.jsx)(gv, {
            scope: n,
            value: r,
            disabled: o,
            textId: v,
            isSelected: c,
            onItemTextChange: h.useCallback((e => {
              f((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, u.jsx)(Dg.ItemSlot, {
              scope: n,
              value: r,
              disabled: o,
              textValue: d,
              children: (0, u.jsx)(qu.sG.div, {
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
                onFocus: Iu(a.onFocus, (() => m(!0))),
                onBlur: Iu(a.onBlur, (() => m(!1))),
                onClick: Iu(a.onClick, (() => {
                  "mouse" !== y.current && b()
                })),
                onPointerUp: Iu(a.onPointerUp, (() => {
                  "mouse" === y.current && b()
                })),
                onPointerDown: Iu(a.onPointerDown, (e => {
                  y.current = e.pointerType
                })),
                onPointerMove: Iu(a.onPointerMove, (e => {
                  y.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: Iu(a.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                })),
                onKeyDown: Iu(a.onKeyDown, (e => {
                  "" !== l.searchRef?.current && " " === e.key || (Ag.includes(e.key) && b(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      yv.displayName = mv;
      var bv = "SelectItemText",
        _v = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            ...i
          } = e, a = zg(bv, n), s = nv(bv, n), l = vv(bv, n), c = Gg(bv, n), [d, f] = h.useState(null), p = (0, Du.s)(t, (e => f(e)), l.onItemTextChange, (e => s.itemTextRefCallback?.(e, l.value, l.disabled))), m = d?.textContent, g = h.useMemo((() => (0, u.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: m
          }, l.value)), [l.disabled, l.value, m]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: y
          } = c;
          return Hu((() => (v(g), () => y(g))), [v, y, g]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(qu.sG.span, {
              id: l.textId,
              ...i,
              ref: p
            }), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? Gt.createPortal(i.children, a.valueNode) : null]
          })
        }));
      _v.displayName = bv;
      var wv = "SelectItemIndicator";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return vv(wv, n).isSelected ? (0, u.jsx)(qu.sG.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      })).displayName = wv;
      var xv = "SelectScrollUpButton";
      h.forwardRef(((e, t) => {
        const n = nv(xv, e.__scopeSelect),
          r = lv(xv, e.__scopeSelect),
          [o, i] = h.useState(!1),
          a = (0, Du.s)(t, r.onScrollButtonChange);
        return Hu((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, u.jsx)(Pv, {
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
      })).displayName = xv;
      var Ev = "SelectScrollDownButton";
      h.forwardRef(((e, t) => {
        const n = nv(Ev, e.__scopeSelect),
          r = lv(Ev, e.__scopeSelect),
          [o, i] = h.useState(!1),
          a = (0, Du.s)(t, r.onScrollButtonChange);
        return Hu((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              i(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, u.jsx)(Pv, {
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
      })).displayName = Ev;
      var Pv = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: r,
          ...o
        } = e, i = nv("SelectScrollButton", n), a = h.useRef(null), s = kg(n), l = h.useCallback((() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }), []);
        return h.useEffect((() => () => l()), [l]), Hu((() => {
          const e = s().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [s]), (0, u.jsx)(qu.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: Iu(o.onPointerDown, (() => {
            null === a.current && (a.current = window.setInterval(r, 50))
          })),
          onPointerMove: Iu(o.onPointerMove, (() => {
            i.onItemLeave?.(), null === a.current && (a.current = window.setInterval(r, 50))
          })),
          onPointerLeave: Iu(o.onPointerLeave, (() => {
            l()
          }))
        })
      }));
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, u.jsx)(qu.sG.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var Sv = "SelectArrow";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Fg(n), i = zg(Sv, n), a = nv(Sv, n);
        return i.open && "popper" === a.position ? (0, u.jsx)(Np, {
          ...o,
          ...r,
          ref: t
        }) : null
      })).displayName = Sv;
      var Cv = h.forwardRef((({
        __scopeSelect: e,
        value: t,
        ...n
      }, r) => {
        const o = h.useRef(null),
          i = (0, Du.s)(r, o),
          a = Uu(t);
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
        }), [a, t]), (0, u.jsx)(qu.sG.select, {
          ...n,
          style: {
            ...Ap.Qg,
            ...n.style
          },
          ref: i,
          defaultValue: t
        })
      }));

      function Ov(e) {
        return "" === e || void 0 === e
      }

      function Tv(e) {
        const t = Eh(e),
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

      function Nv(e, t, n) {
        const r = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === r.length && (i = i.filter((e => e !== n)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(r.toLowerCase())));
        return l !== n ? l : void 0
      }
      Cv.displayName = "SelectBubbleInput";
      var jv = qg,
        Rv = Kg,
        Lv = $g,
        Av = Yg,
        Iv = Zg,
        Dv = Jg,
        kv = uv,
        Mv = yv,
        Hv = _v,
        Bv = "ScrollArea",
        [Fv, Vv] = ku(Bv),
        [zv, Uv] = Fv(Bv),
        Gv = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            type: r = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...a
          } = e, [s, l] = h.useState(null), [c, d] = h.useState(null), [f, p] = h.useState(null), [m, g] = h.useState(null), [v, y] = h.useState(null), [b, _] = h.useState(0), [w, x] = h.useState(0), [E, P] = h.useState(!1), [S, C] = h.useState(!1), O = (0, Du.s)(t, (e => l(e))), T = zu(o);
          return (0, u.jsx)(zv, {
            scope: n,
            type: r,
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
            onScrollbarXEnabledChange: P,
            scrollbarY: v,
            onScrollbarYChange: y,
            scrollbarYEnabled: S,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: _,
            onCornerHeightChange: x,
            children: (0, u.jsx)(qu.sG.div, {
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
      Gv.displayName = Bv;
      var qv = "ScrollAreaViewport",
        Xv = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            children: r,
            nonce: o,
            ...i
          } = e, a = Uv(qv, n), s = h.useRef(null), l = (0, Du.s)(t, s, a.onViewportChange);
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, u.jsx)(qu.sG.div, {
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
      Xv.displayName = qv;
      var Kv = "ScrollAreaScrollbar",
        Wv = h.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Uv(Kv, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: a
          } = o, s = "horizontal" === e.orientation;
          return h.useEffect((() => (s ? i(!0) : a(!0), () => {
            s ? i(!1) : a(!1)
          })), [s, i, a]), "hover" === o.type ? (0, u.jsx)($v, {
            ...r,
            ref: t,
            forceMount: n
          }) : "scroll" === o.type ? (0, u.jsx)(Yv, {
            ...r,
            ref: t,
            forceMount: n
          }) : "auto" === o.type ? (0, u.jsx)(Zv, {
            ...r,
            ref: t,
            forceMount: n
          }) : "always" === o.type ? (0, u.jsx)(Qv, {
            ...r,
            ref: t
          }) : null
        }));
      Wv.displayName = Kv;
      var $v = h.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Uv(Kv, e.__scopeScrollArea), [i, a] = h.useState(!1);
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
          }), [o.scrollArea, o.scrollHideDelay]), (0, u.jsx)(Rp, {
            present: n || i,
            children: (0, u.jsx)(Zv, {
              "data-state": i ? "visible" : "hidden",
              ...r,
              ref: t
            })
          })
        })),
        Yv = h.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Uv(Kv, e.__scopeScrollArea), i = "horizontal" === e.orientation, a = gy((() => l("SCROLL_END")), 100), [s, l] = (c = {
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
          }), [o.viewport, i, l, a]), (0, u.jsx)(Rp, {
            present: n || "hidden" !== s,
            children: (0, u.jsx)(Qv, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...r,
              ref: t,
              onPointerEnter: Iu(e.onPointerEnter, (() => l("POINTER_ENTER"))),
              onPointerLeave: Iu(e.onPointerLeave, (() => l("POINTER_LEAVE")))
            })
          })
        })),
        Zv = h.forwardRef(((e, t) => {
          const n = Uv(Kv, e.__scopeScrollArea),
            {
              forceMount: r,
              ...o
            } = e,
            [i, a] = h.useState(!1),
            s = "horizontal" === e.orientation,
            l = gy((() => {
              if (n.viewport) {
                const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                a(s ? e : t)
              }
            }), 10);
          return vy(n.viewport, l), vy(n.content, l), (0, u.jsx)(Rp, {
            present: r || i,
            children: (0, u.jsx)(Qv, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        Qv = h.forwardRef(((e, t) => {
          const {
            orientation: n = "vertical",
            ...r
          } = e, o = Uv(Kv, e.__scopeScrollArea), i = h.useRef(null), a = h.useRef(0), [s, l] = h.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = uy(s.viewport, s.content), d = {
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
              const o = dy(n),
                i = t || o / 2,
                a = o - i,
                s = n.scrollbar.paddingStart + i,
                l = n.scrollbar.size - n.scrollbar.paddingEnd - a,
                c = n.content - n.viewport;
              return fy([s, l], "ltr" === r ? [0, c] : [-1 * c, 0])(e)
            }(e, a.current, s, t)
          }
          return "horizontal" === n ? (0, u.jsx)(Jv, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = hy(o.viewport.scrollLeft, s, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = f(e, o.dir))
            }
          }) : "vertical" === n ? (0, u.jsx)(ey, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = hy(o.viewport.scrollTop, s);
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
        Jv = h.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, i = Uv(Kv, e.__scopeScrollArea), [a, s] = h.useState(), l = h.useRef(null), c = (0, Du.s)(t, l, i.onScrollbarXChange);
          return h.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, u.jsx)(ry, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: n,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": dy(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
              if (i.viewport) {
                const r = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(r), py(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && r({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: cy(a.paddingLeft),
                  paddingEnd: cy(a.paddingRight)
                }
              })
            }
          })
        })),
        ey = h.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, i = Uv(Kv, e.__scopeScrollArea), [a, s] = h.useState(), l = h.useRef(null), c = (0, Du.s)(t, l, i.onScrollbarYChange);
          return h.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, u.jsx)(ry, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: n,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": dy(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
              if (i.viewport) {
                const r = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(r), py(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && r({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: cy(a.paddingTop),
                  paddingEnd: cy(a.paddingBottom)
                }
              })
            }
          })
        })),
        [ty, ny] = Fv(Kv),
        ry = h.forwardRef(((e, t) => {
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
          } = e, m = Uv(Kv, n), [g, v] = h.useState(null), y = (0, Du.s)(t, (e => v(e))), b = h.useRef(null), _ = h.useRef(""), w = m.viewport, x = r.content - r.viewport, E = Eh(d), P = Eh(l), S = gy(f, 10);

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
          }), [w, g, x, E]), h.useEffect(P, [r, P]), vy(g, S), vy(m.content, S), (0, u.jsx)(ty, {
            scope: n,
            scrollbar: g,
            hasThumb: o,
            onThumbChange: Eh(i),
            onThumbPointerUp: Eh(a),
            onThumbPositionChange: P,
            onThumbPointerDown: Eh(s),
            children: (0, u.jsx)(qu.sG.div, {
              ...p,
              ref: y,
              style: {
                position: "absolute",
                ...p.style
              },
              onPointerDown: Iu(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = g.getBoundingClientRect(), _.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), C(e))
              })),
              onPointerMove: Iu(e.onPointerMove, C),
              onPointerUp: Iu(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = _.current, m.viewport && (m.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        oy = "ScrollAreaThumb",
        iy = h.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = ny(oy, e.__scopeScrollArea);
          return (0, u.jsx)(Rp, {
            present: n || o.hasThumb,
            children: (0, u.jsx)(ay, {
              ref: t,
              ...r
            })
          })
        })),
        ay = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            style: r,
            ...o
          } = e, i = Uv(oy, n), a = ny(oy, n), {
            onThumbPositionChange: s
          } = a, l = (0, Du.s)(t, (e => a.onThumbChange(e))), c = h.useRef(void 0), d = gy((() => {
            c.current && (c.current(), c.current = void 0)
          }), 100);
          return h.useEffect((() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (d(), !c.current) {
                  const t = my(e, s);
                  c.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [i.viewport, d, s]), (0, u.jsx)(qu.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...r
            },
            onPointerDownCapture: Iu(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = e.clientY - t.top;
              a.onThumbPointerDown({
                x: n,
                y: r
              })
            })),
            onPointerUp: Iu(e.onPointerUp, a.onThumbPointerUp)
          })
        }));
      iy.displayName = oy;
      var sy = "ScrollAreaCorner";
      h.forwardRef(((e, t) => {
        const n = Uv(sy, e.__scopeScrollArea),
          r = Boolean(n.scrollbarX && n.scrollbarY);
        return "scroll" !== n.type && r ? (0, u.jsx)(ly, {
          ...e,
          ref: t
        }) : null
      })).displayName = sy;
      var ly = h.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: n,
          ...r
        } = e, o = Uv(sy, n), [i, a] = h.useState(0), [s, l] = h.useState(0), c = Boolean(i && s);
        return vy(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        })), vy(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        })), c ? (0, u.jsx)(qu.sG.div, {
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

      function cy(e) {
        return e ? parseInt(e, 10) : 0
      }

      function uy(e, t) {
        const n = e / t;
        return isNaN(n) ? 0 : n
      }

      function dy(e) {
        const t = uy(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18)
      }

      function hy(e, t, n = "ltr") {
        const r = dy(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - r,
          l = Au(e, "ltr" === n ? [0, a] : [-1 * a, 0]);
        return fy([0, a], [0, s])(l)
      }

      function fy(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }

      function py(e, t) {
        return e > 0 && e < t
      }
      var my = (e, t = () => {}) => {
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

      function gy(e, t) {
        const n = Eh(e),
          r = h.useRef(0);
        return h.useEffect((() => () => window.clearTimeout(r.current)), []), h.useCallback((() => {
          window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
        }), [n, t])
      }

      function vy(e, t) {
        const n = Eh(t);
        Hu((() => {
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
      var yy = Gv,
        by = Xv,
        _y = Wv,
        wy = iy,
        xy = "foundry_hcgxh_uaq1gwo";
      const Ey = (0, h.forwardRef)((({
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
        }, O) => {
          const T = (0, h.useRef)(null),
            N = (0, U.UP)(T, O),
            j = (0, h.useId)(),
            R = (0, h.useId)(),
            [L = !1, I] = (0, U.ic)({
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
                children: (0, u.jsx)(F, {
                  size: "SM",
                  className: (0, A.$)("foundry_hcgxh_uaq1gw2", w && xy),
                  asChild: !0,
                  children: (0, u.jsxs)("label", {
                    id: j,
                    children: [t, _ && !l && (0, u.jsx)("span", {
                      className: "foundry_hcgxh_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), n && (0, u.jsx)(F, {
                size: "XS",
                className: (0, A.$)("foundry_hcgxh_uaq1gw3", w && xy),
                children: n
              })]
            }), (0, u.jsxs)(jv, {
              required: _,
              disabled: w,
              open: L,
              onOpenChange: () => I(!x && !L),
              value: f,
              defaultValue: p,
              onValueChange: g,
              children: [(0, u.jsxs)(Rv, {
                className: (0, A.$)("foundry_hcgxh_uaq1gw5 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10", !!d && "foundry_hcgxh_uaq1gw7", x && "foundry_hcgxh_uaq1gw6"),
                ref: N,
                "data-testid": i,
                "aria-activedescendant": f,
                "aria-labelledby": P || j,
                "aria-controls": R,
                children: [(0, u.jsx)("span", {
                  className: "foundry_hcgxh_uaq1gw8",
                  children: (0, u.jsx)(Lv, {
                    placeholder: r,
                    "aria-label": f
                  })
                }), (0, u.jsx)(Av, {
                  asChild: !0,
                  className: (0, A.$)("foundry_hcgxh_uaq1gw9", (x || w) && "foundry_hcgxh_uaq1gwa"),
                  children: L ? (0, u.jsx)(V.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, u.jsx)(V.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, u.jsx)(Sy, {
                renderPortal: S,
                container: C,
                children: (0, u.jsx)(Dv, {
                  id: R,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_hcgxh_uaq1gwb",
                  children: (0, u.jsxs)(yy, {
                    className: "foundry_hcgxh_uaq1gwk",
                    type: "auto",
                    children: [(0, u.jsx)(kv, {
                      className: (0, A.$)("foundry_hcgxh_uaq1gwc", c && "foundry_hcgxh_uaq1gwd"),
                      asChild: !0,
                      children: (0, u.jsx)(by, {
                        className: "foundry_hcgxh_uaq1gwl",
                        style: {
                          overflowY: void 0
                        },
                        children: e
                      })
                    }), (0, u.jsx)(_y, {
                      className: "foundry_hcgxh_uaq1gwm",
                      orientation: "vertical",
                      children: (0, u.jsx)(wy, {
                        className: "foundry_hcgxh_uaq1gwn"
                      })
                    })]
                  })
                })
              })]
            }), o && (0, u.jsx)(m.s6, {
              enabled: !!d || s || 0 === o.length,
              children: (0, u.jsx)(F, {
                size: "SM",
                className: (0, A.$)("foundry_hcgxh_uaq1gwf", w && xy),
                children: o
              })
            }), d && (0, u.jsxs)(F, {
              size: "SM",
              appearance: "bold",
              className: "foundry_hcgxh_uaq1gwg",
              children: [(0, u.jsx)(V.X, {
                size: "MD",
                label: "",
                className: "foundry_hcgxh_uaq1gwh"
              }), d]
            })]
          })
        })),
        Py = (0, h.forwardRef)((({
          label: e,
          value: t,
          icon: n,
          iconLabel: r,
          iconPosition: o,
          isDisabled: i,
          testId: a
        }, s) => {
          const l = (0, h.useRef)(null),
            c = (0, U.UP)(l, s),
            d = n && z[n];
          return (0, u.jsxs)(Mv, {
            value: t,
            className: "foundry_hcgxh_uaq1gwe foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10",
            ref: c,
            disabled: i,
            "data-testid": a,
            children: [d && "left" === o && (0, u.jsx)(d, {
              className: "foundry_hcgxh_uaq1gwi",
              label: r || "",
              size: "LG"
            }), (0, u.jsx)(Hv, {
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
        Sy = ({
          renderPortal: e = !0,
          container: t,
          children: n
        }) => e ? (0, u.jsx)(Iv, {
          container: t,
          children: n
        }) : (0, u.jsx)(u.Fragment, {
          children: n
        }),
        Cy = ({
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
        Oy = ({
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
        Ny = ({
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
        jy = ({
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
        Ry = ({
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
        } = e, [n, r] = ve(e.isSelected, e.defaultSelected || !1, e.onChange);
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

      function Ay(e, t, n) {
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
        } = Wt({
          isDisabled: r
        }), {
          pressProps: p,
          isPressed: m
        } = Wt({
          onPress() {
            var e;
            t.toggle(), null === (e = n.current) || void 0 === e || e.focus()
          },
          isDisabled: r || o
        }), {
          focusableProps: g
        } = ht(e, n), v = ge(h, g), y = W(e, {
          labelable: !0
        });
        return Z(n, t.isSelected, t.setSelected), {
          labelProps: ge(p, {
            onClick: e => e.preventDefault()
          }),
          inputProps: ge(y, {
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

      function Iy(e) {
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

      function Dy(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function ky(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Dy(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Iy(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dy(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function My(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Hy = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        By = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = ky(ky({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Hy(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return My(e.variantClassNames, (e => My(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Fy = By({
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
        Vy = By({
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
        zy = By({
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
        Uy = By({
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
      const Gy = (0, h.forwardRef)((({
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
            _ = (0, U.UP)(b, y),
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
              isInvalid: O,
              isSelected: T
            } = function(e, t, n) {
              let r = _t({
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
                } = Ay({
                  ...e,
                  isInvalid: o
                }, t, n);
              ft(e, r, n);
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
              } = Wt({
                isDisabled: d || f,
                onPress() {
                  let {
                    [bt]: t
                  } = e, {
                    commitValidation: n
                  } = t || r;
                  n()
                }
              });
              return {
                labelProps: ge(s, v),
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
              "aria-checked": T,
              className: g
            }, {
              className: "foundry_hcgxh_11gbdty1"
            }),
            j = l ? r[`Dash${a}`] : r[`Check${a}`],
            R = O && !!p;
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
                className: Fy({
                  size: a,
                  appearance: s
                }),
                "aria-hidden": "true",
                "data-state": l ? "mixed" : T ? "checked" : "unchecked",
                "data-disabled": S || C,
                "data-testid": f,
                children: (0, u.jsx)("span", {
                  className: "foundry_hcgxh_11gbdtyc",
                  children: (T || l) && (0, u.jsx)(j, {
                    "aria-hidden": "true"
                  })
                })
              })]
            }), (0, u.jsx)(m.s6, {
              enabled: !!c,
              children: (0, u.jsxs)("div", {
                className: Uy({
                  size: a,
                  isDisabled: S
                }),
                children: [(0, u.jsx)("p", {
                  className: zy({
                    size: a
                  }),
                  children: o
                }), i && !R && (0, u.jsx)("p", {
                  className: "foundry_hcgxh_11gbdtym foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                  children: i
                }), R && (0, u.jsx)("p", {
                  className: "foundry_hcgxh_11gbdtyn foundry_hcgxh_11gbdtym foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                  children: p
                })]
              })
            })]
          })
        })),
        qy = new WeakMap;

      function Xy(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = J(e);
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
        }(e, t) && (!e.parentElement || Xy(e.parentElement, e))
      }

      function Ky(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function Wy(e, t, n) {
        let r = (null == t ? void 0 : t.tabbable) ? Pe : Ee,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = Q(o),
          a = function(e, t, n, r) {
            return e.createTreeWalker(t, n, r)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !r(e) || !Xy(e) || n && !Ky(e, n) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a
      }
      class $y {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new Yy({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && Ky(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n && (n.removeChild(t), r.size > 0 && r.forEach((e => n && n.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new $y;
          var n;
          for (let r of this.traverse()) t.addTreeNode(r.scopeRef, null !== (n = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, r.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new Yy({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class Yy {
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
      new $y;
      const Zy = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        Qy = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Jy(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return Zy.has(t.script)
        }
        let t = e.split("-")[0];
        return Qy.has(t)
      }
      const eb = Symbol.for("react-aria.i18n.locale");

      function tb() {
        let e = "undefined" != typeof window && window[eb] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Jy(e) ? "rtl" : "ltr"
        }
      }
      let nb = tb(),
        rb = new Set;

      function ob() {
        nb = tb();
        for (let e of rb) e(nb)
      }
      const ib = h.createContext(null);

      function ab() {
        let e = function() {
          let e = ce(),
            [t, n] = (0, h.useState)(nb);
          return (0, h.useEffect)((() => (0 === rb.size && window.addEventListener("languagechange", ob), rb.add(n), () => {
            rb.delete(n), 0 === rb.size && window.removeEventListener("languagechange", ob)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, h.useContext)(ib) || e
      }

      function sb(e, t) {
        let {
          name: n,
          isReadOnly: r,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: s = "aria"
        } = e, {
          direction: l
        } = ab(), {
          isInvalid: c,
          validationErrors: u,
          validationDetails: d
        } = t.displayValidation, {
          labelProps: f,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: g
        } = be({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || u
        }), v = W(e, {
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
          } = Bt(), l = (0, h.useCallback)((e => {
            e.currentTarget.contains(e.target) && i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, s(), n && n(e), o && o(!1))
          }), [n, o, i, s]), c = Ne(l), u = (0, h.useCallback)((e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = Q(e.target),
              n = rt(t);
            if (!i.current.isFocusWithin && n === ot(e.nativeEvent)) {
              r && r(e), o && o(!0), i.current.isFocusWithin = !0, c(e);
              let n = e.currentTarget;
              a(t, "focus", (e => {
                if (i.current.isFocusWithin && !nt(n, e.target)) {
                  let r = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  Te(r, n);
                  let o = Oe(r);
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
        }), b = fe(n);
        return qy.set(t, {
          name: b,
          descriptionId: m.id,
          errorMessageId: g.id,
          validationBehavior: s
        }), {
          radioGroupProps: ge(v, {
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
              let r, o = Wy(e.currentTarget, {
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
      let lb = Math.round(1e10 * Math.random()),
        cb = 0;

      function ub(e) {
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

      function db(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function hb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? db(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = ub(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : db(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function fb(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var pb = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        mb = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = hb(hb({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) pb(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fb(e.variantClassNames, (e => fb(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        gb = mb({
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
      const vb = (0, h.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        yb = (0, h.forwardRef)((({
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
          } = p, y = (0, h.useRef)(null), b = (0, U.UP)(y, g), _ = (0, h.useId)(), w = function(e) {
            let t = (0, h.useMemo)((() => e.name || `radio-group-${lb}-${++cb}`), [e.name]);
            var n;
            let [r, o] = ve(e.value, null !== (n = e.defaultValue) && void 0 !== n ? n : null, e.onChange), [i, a] = (0, h.useState)(null), s = _t({
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
            errorMessageProps: O
          } = sb({
            ...p,
            id: p.id || _,
            label: e,
            isRequired: i,
            description: t,
            orientation: f
          }, w), T = (0, d.v6)({
            ...E,
            className: l
          }, {
            className: "foundry_hcgxh_njguqn0",
            "aria-errormessage": O?.id
          }), N = C && !!c;
          return (0, u.jsxs)("div", {
            ref: b,
            "data-testid": s,
            ...T,
            children: [(0, u.jsx)(m.s6, {
              enabled: !!o,
              children: (0, u.jsxs)("div", {
                className: "foundry_hcgxh_njguqn7",
                children: [(0, u.jsx)(F, {
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
                }), t && (0, u.jsx)(F, {
                  size: "XS",
                  ...S,
                  className: "foundry_hcgxh_njguqna foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                  children: t
                })]
              })
            }), (0, u.jsx)("div", {
              className: gb({
                size: n,
                orientation: f
              }),
              children: (0, u.jsx)(vb.Provider, {
                value: x,
                children: v
              })
            }), N && (0, u.jsxs)(F, {
              size: "SM",
              appearance: "bold",
              ...O,
              className: "foundry_hcgxh_njguqnb",
              children: [(0, u.jsx)(V.X, {
                size: "MD",
                label: "",
                className: "foundry_hcgxh_njguqnc"
              }), c]
            })]
          })
        })),
        bb = ({
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
        _b = ({
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
        wb = ({
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
      var xb = mb({
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
        Eb = mb({
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
        Pb = mb({
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
        Sb = mb({
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
      const Cb = (0, h.forwardRef)((({
        label: e,
        description: t,
        hideLabel: n,
        testId: r,
        className: i,
        ...a
      }, s) => {
        const l = (0, h.useRef)(null),
          c = (0, U.UP)(l, s),
          d = (0, h.useId)(),
          f = (0, h.useContext)(vb),
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
              } = Wt({
                isDisabled: s
              }),
              {
                pressProps: d,
                isPressed: h
              } = Wt({
                isDisabled: s,
                onPress() {
                  var e;
                  t.setSelectedValue(r), null === (e = n.current) || void 0 === e || e.focus()
                }
              }),
              {
                focusableProps: f
              } = ht(ge(e, {
                onFocus: () => t.setLastFocusedValue(r)
              }), n),
              p = ge(c, f),
              m = W(e, {
                labelable: !0
              }),
              g = -1;
            null != t.selectedValue ? t.selectedValue === r && (g = 0) : t.lastFocusedValue !== r && null != t.lastFocusedValue || (g = 0), s && (g = void 0);
            let {
              name: v,
              descriptionId: y,
              errorMessageId: b,
              validationBehavior: _
            } = qy.get(t);
            return Z(n, t.selectedValue, t.setSelectedValue), ft({
              validationBehavior: _
            }, t, n), {
              labelProps: ge(d, {
                onClick: e => e.preventDefault()
              }),
              inputProps: ge(m, {
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
            className: Pb({
              size: v
            }),
            children: [(0, u.jsx)(m.s6, {
              children: (0, u.jsx)("input", {
                ...y,
                ref: c,
                className: "foundry_hcgxh_1pfduet1"
              })
            }), (0, u.jsx)("div", {
              className: Eb({
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
              className: Sb({
                size: v
              }),
              children: [(0, u.jsx)("p", {
                className: xb({
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

      function Ob(e) {
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

      function Nb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Tb(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Ob(o)) in r ? Object.defineProperty(r, o, {
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

      function jb(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Rb = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Lb = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Nb(Nb({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Rb(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jb(e.variantClassNames, (e => jb(e, (e => e.split(" ")[0]))))
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
      const Ab = (0, h.forwardRef)((({
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
          children: (0, u.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "8",
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
            d: "M3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L8 6.93934L11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967C12.8232 3.76256 12.8232 4.23744 12.5303 4.53033L9.06066 8L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L8 9.06066L4.53033 12.5303C4.23744 12.8232 3.76256 12.8232 3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L6.93934 8L3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967Z",
            fill: e
          })
        }),
        kb = ({
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

      function Mb(e) {
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

      function Hb(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Bb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Hb(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Mb(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hb(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Fb(e, t) {
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
        zb = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Bb(Bb({}, e.defaultVariants), t);
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
              return Fb(e.variantClassNames, (e => Fb(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Ub = zb({
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
        Gb = zb({
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
        qb = zb({
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
        Xb = zb({
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
        Kb = zb({
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
        Wb = zb({
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
      const $b = (0, h.forwardRef)((({
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
          g = (0, U.UP)(p, f),
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
            } = Ay(e, t, n);
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
          E = i ? z[i] : kb,
          P = a ? z[a] : Db;
        return (0, u.jsxs)("label", {
          className: (0, A.$)("foundry_hcgxh_okz6z20", c),
          children: [(0, u.jsxs)("div", {
            className: Kb({
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
              className: Xb({
                size: n
              }),
              "aria-hidden": "true",
              children: [(0, u.jsx)("div", {
                className: Ub({
                  size: n,
                  isSelected: x
                }),
                children: (0, u.jsx)(Ib, {})
              }), o && (0, u.jsxs)(u.Fragment, {
                children: [(0, u.jsx)("div", {
                  className: Gb({
                    size: n,
                    isSelected: x,
                    position: "left"
                  }),
                  children: (0, u.jsx)(E, {
                    label: ""
                  })
                }), (0, u.jsx)("div", {
                  className: Gb({
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
              className: Wb({
                size: n,
                isDisabled: _
              }),
              children: [(0, u.jsx)("p", {
                className: qb({
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
      $b.displayName = "Switch";
      const Yb = (0, h.forwardRef)((({
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

      function Zb(e) {
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

      function Qb(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Jb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qb(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Zb(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qb(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function e_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var t_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        n_ = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Jb(Jb({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) t_(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return e_(e.variantClassNames, (e => e_(e, (e => e.split(" ")[0]))))
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
      const r_ = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const a = e ? m.DX : "p",
          s = (0, d.v6)({
            className: n_({
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

      function o_(e) {
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

      function i_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function a_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? i_(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = o_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function s_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var l_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        c_ = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = a_(a_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) l_(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return s_(e.variantClassNames, (e => s_(e, (e => e.split(" ")[0]))))
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
      const u_ = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...r
      }, o) => {
        const i = e ? m.DX : "p",
          a = (0, d.v6)({
            className: c_({
              appearance: n
            })
          }, r);
        return (0, u.jsx)(i, {
          ref: o,
          "data-testid": t,
          ...a
        })
      }));
      var d_ = n(97249);

      function h_(e, t) {
        var n = {};
        if ("object" == typeof t) {
          var r = e;
          (0, d_.Bx)(t, ((e, t) => {
            if (null != e) {
              var o = (0, d_.Jt)(r, t);
              n[(0, d_.Tm)(o)] = String(e)
            }
          }))
        } else {
          var o = e;
          for (var i in o) {
            var a = o[i];
            null != a && (n[(0, d_.Tm)(i)] = a)
          }
        }
        return Object.defineProperty(n, "toString", {
          value: function() {
            return Object.keys(this).map((e => "".concat(e, ":").concat(this[e]))).join(";")
          },
          writable: !1
        }), n
      }

      function f_(e) {
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

      function p_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function m_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p_(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = f_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function g_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      n(49639);
      var v_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        y_ = "var(--foundry_hcgxh_9dxgbc2)",
        b_ = "var(--foundry_hcgxh_9dxgbc3)",
        __ = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = m_(m_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) v_(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return g_(e.variantClassNames, (e => g_(e, (e => e.split(" ")[0]))))
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
        w_ = "var(--foundry_hcgxh_9dxgbc0)",
        x_ = "var(--foundry_hcgxh_9dxgbc1)";
      const E_ = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        children: n,
        colorOverride: r,
        label: o,
        size: i = "MD",
        ...a
      }, s) => {
        const l = (0, nn.zQ)(),
          c = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
          h = (0, d.v6)({
            className: __({
              size: c
            }),
            "data-testid": t,
            style: h_({
              [w_]: r?.pulseColorBackground,
              [x_]: r?.pulseColorForeground,
              [y_]: r?.gradientColorBackground,
              [b_]: r?.gradientColorForeground
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

      function P_(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function S_(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
          if (Array.isArray(e) || (n = function(e, t) {
              if (e) {
                if ("string" == typeof e) return P_(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? P_(e, t) : void 0
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

      function C_(e, t, n) {
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

      function O_(e) {
        return O_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, O_(e)
      }

      function T_() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (T_ = function() {
          return !!e
        })()
      }

      function N_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function j_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? N_(Object(n), !0).forEach((function(t) {
            C_(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function R_(e, t) {
        return R_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, R_(e, t)
      }

      function L_(e, t) {
        var n, r = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          a = r,
          s = "",
          l = S_(e);
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

      function A_(e, t) {
        var n, r = t.mask,
          o = t.replacement,
          i = t.separate,
          a = t.showMask,
          s = 0,
          l = "",
          c = S_(r);
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

      function I_(e, t) {
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

      function D_(e) {
        return e.length > 0 ? C_({}, e, /./) : {}
      }

      function k_(e, t) {
        for (var n = t.start, r = void 0 === n ? 0 : n, o = t.end, i = t.mask, a = t.replacement, s = t.separate, l = e.slice(r, o), c = i.slice(r, o), u = "", d = 0; d < c.length; d++) {
          var h = Object.prototype.hasOwnProperty.call(a, c[d]);
          h && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : h && s && (u += c[d])
        }
        return u
      }

      function M_(e, t) {
        var n = t.mask,
          r = t.replacement,
          o = "string" == typeof r ? D_(r) : r,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return A_(L_(e, {
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
      var H_ = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function B_(e) {
        return H_.includes(e) ? "\\".concat(e) : e
      }

      function F_(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function V_(e, t, n) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function z_(e, t, n) {
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

      function U_(e) {
        return U_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, U_(e)
      }

      function G_() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (G_ = function() {
          return !!e
        })()
      }

      function q_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function X_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? q_(Object(n), !0).forEach((function(t) {
            z_(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function K_(e, t) {
        return K_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, K_(e, t)
      }

      function W_(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return W_ = function(e) {
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
              if (G_()) return Reflect.construct.apply(null, arguments);
              var r = [null];
              r.push.apply(r, t);
              var o = new(e.bind.apply(e, r));
              return n && K_(o, n.prototype), o
            }(e, arguments, U_(this).constructor)
          }
          return n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), K_(n, e)
        }, W_(e)
      }
      var $_, Y_ = function(e) {
          function t(e) {
            var n;
            return F_(this, t), (n = function(e, t, n) {
              return t = U_(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, G_() ? Reflect.construct(t, n || [], U_(e).constructor) : t.apply(e, n))
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
            }), t && K_(e, t)
          }(t, e), V_(t)
        }(W_(Error)),
        Z_ = ["options"],
        Q_ = ["text", "email", "tel", "search", "url"],
        J_ = V_((function e(t) {
          var n = t.init,
            r = t.tracking;
          F_(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (Q_.includes(e.type)) {
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
              Object.defineProperty(e, "value", X_(X_({}, g), {}, {
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
                    if (p.cachedId === p.id) throw new Y_("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      a = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === a || null === s) throw new Y_("The selection attributes have not been initialized.");
                    var l, c = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = c.length), a > m.selectionStart ? l = "insert" : a <= m.selectionStart && a < m.selectionEnd ? l = "deleteBackward" : a === m.selectionEnd && i.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > c.length) throw new Y_("Input type detection error.");
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
                      }(y, Z_);
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
      $_ = J_, Object.defineProperty($_.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var ew, tw = ["track", "modify"];

      function nw(e) {
        var t, n, r, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? D_(e.replacement) : null !== (n = e.replacement) && void 0 !== n ? n : {},
          showMask: null !== (r = e.showMask) && void 0 !== r && r,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var rw = function() {
        function e() {
          var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, n) {
            return t = O_(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, T_() ? Reflect.construct(t, n || [], O_(e).constructor) : t.apply(e, n))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                r = e.controlled,
                o = nw(n),
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
                l = nw(n),
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
                }(l, tw),
                h = d.mask,
                f = d.replacement,
                p = d.showMask,
                m = d.separate,
                g = j_(j_({}, "insert" === t ? {
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
              if (!1 === v) throw new Y_("Custom tracking stop.");
              null === v ? i = "" : !0 !== v && void 0 !== v && (i = v);
              var y = null == u ? void 0 : u(g);
              void 0 !== (null == y ? void 0 : y.mask) && (h = y.mask), void 0 !== (null == y ? void 0 : y.replacement) && (f = "string" == typeof(null == y ? void 0 : y.replacement) ? D_(null == y ? void 0 : y.replacement) : y.replacement), void 0 !== (null == y ? void 0 : y.showMask) && (p = y.showMask), void 0 !== (null == y ? void 0 : y.separate) && (m = y.separate);
              var b = k_(r, j_({
                  end: a
                }, o)),
                _ = k_(r, j_({
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
                }), x = x.slice(i.length)), "insert" === t && "" === i) throw new Y_("The character does not match the key value of the `replacement` object.");
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
              var S = A_(b + i + _, {
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
                    u = I_(i, {
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
            return M_(e, nw(n))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? D_(r) : r;
              return I_(M_(e, {
                mask: n,
                replacement: o
              }), {
                mask: n,
                replacement: o
              })
            }(e, nw(n))
          }, t.unformat = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? D_(r) : r,
                i = k_(e, {
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
            }(e, nw(n))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var n = t.mask, r = t.replacement, o = "string" == typeof r ? D_(r) : r, i = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, s = "", l = 0; l < n.length; l++) {
                var c = n[l];
                0 === l && (s = "^"), i && (s += "("), s += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(a ? "(?!".concat(B_(c), ")") : "", "(").concat(o[c].source, ")") : B_(c), l === n.length - 1 && (i && (s += ")?".repeat(n.length)), s += "$")
              }
              return s
            }(e, nw(n))
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
            }), t && R_(e, t)
          }(e, J_),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function ow(e) {
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

      function iw(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function aw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? iw(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = ow(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : iw(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function sw(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      ew = rw, Object.defineProperty(ew.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var lw = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        cw = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = aw(aw({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) lw(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sw(e.variantClassNames, (e => sw(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        uw = "foundry_hcgxh_8oytzos",
        dw = cw({
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
        hw = cw({
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
        fw = cw({
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
        pw = cw({
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
        mw = cw({
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
        gw = cw({
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
      const vw = (e, t, n) => {
          const r = [];
          return e && r.push(e), t && r.push(t), n && r.push(n), r.join(" ")
        },
        yw = (0, h.createContext)(null);

      function bw() {
        const e = (0, h.useContext)(yw);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const _w = (0, h.forwardRef)((({
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
          return (0, u.jsx)(yw.Provider, {
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
        ww = (0, h.forwardRef)((({
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
          } = bw(), f = (0, d.v6)({
            id: i.id || h,
            htmlFor: i.htmlFor || c,
            "data-testid": e,
            className: gw({
              isDisabled: s
            })
          }, i), p = t ? m.DX : "label";
          return (0, u.jsx)(m.s6, {
            enabled: r,
            children: (0, u.jsx)(F, {
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
        xw = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i
          } = bw(), a = (0, d.v6)({
            "data-testid": e,
            className: fw({
              isDisabled: i
            })
          }, r), s = t ? m.DX : "span";
          return (0, u.jsx)(F, {
            size: "XS",
            asChild: !0,
            children: (0, u.jsx)(s, {
              ref: o,
              ...a,
              children: n
            })
          })
        })),
        Ew = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: a,
            isInvalid: s
          } = bw(), l = (0, d.v6)({
            "data-testid": e,
            className: (0, A.$)(dw({
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
        Pw = (0, h.forwardRef)((({
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
          } = bw();
          (0, h.useEffect)((() => P(o ?? "text")), []);
          const S = (0, d.v6)({
              disabled: p,
              readOnly: g,
              required: v,
              id: b,
              type: E,
              spellCheck: !1,
              "aria-labelledby": vw(y, n),
              "aria-describedby": vw(_, r, w ? x : void 0),
              "data-testid": e,
              className: (0, A.$)(mw({
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
                }(s, new rw(l.current))
              }), [])
            }({
              mask: i,
              replacement: a,
              showMask: s,
              track: l
            }),
            O = (0, U.UP)(i && a ? C : null, f),
            T = t ? m.DX : "input";
          return (0, u.jsx)(T, {
            ref: O,
            ...S
          })
        })),
        Sw = (0, h.forwardRef)((({
          icon: e,
          asChild: t,
          testId: n,
          side: r,
          ...o
        }, i) => {
          const {
            isDisabled: a
          } = bw(), s = (0, d.v6)({
            size: "LG",
            "data-testid": n,
            className: (0, A.$)(pw({
              side: r,
              isDisabled: a
            }), "foundry_hcgxh_8oytzo0")
          }, o), l = t ? m.DX : z[e];
          return (0, u.jsx)(l, {
            ref: i,
            ...s
          })
        })),
        Cw = (0, h.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: n
          } = bw(), r = (0, d.v6)({
            isDisabled: n,
            size: "SM",
            appearance: "ghost",
            className: uw
          }, e);
          return (0, u.jsx)(ch, {
            ref: t,
            ...r
          })
        })),
        Ow = (0, h.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: n,
            inputType: r,
            setInputType: o
          } = bw(), i = "password" === r, a = i ? "Reveal Password" : "Hide Password", s = (0, d.v6)({
            isDisabled: n,
            size: "SM",
            appearance: "ghost",
            className: uw,
            label: a,
            icon: i ? "Eye" : "EyeOff",
            onPress: () => {
              o(i ? "text" : "password")
            }
          }, e);
          return (0, u.jsx)(pm, {
            side: "bottom",
            portal: !1,
            align: "end",
            content: (0, u.jsx)(F, {
              size: "SM",
              children: a
            }),
            children: (0, u.jsx)(ch, {
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
          } = bw(), f = (0, d.v6)({
            id: c,
            asChild: !0,
            "data-testid": e,
            className: hw({
              isDisabled: s
            })
          }, i), p = t ? m.DX : "p", g = V.X;
          return (0, u.jsxs)("div", {
            className: "foundry_hcgxh_8oytzot",
            children: [(0, u.jsx)(m.s6, {
              enabled: r || l,
              children: (0, u.jsx)(F, {
                size: "SM",
                ref: a,
                ...f,
                children: (0, u.jsx)(p, {
                  children: n
                })
              })
            }), l && o && (0, u.jsxs)(F, {
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

      function Nw(e, t) {
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
        } = ht(e, t), {
          pressProps: d,
          isPressed: h
        } = Wt({
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ref: t
        }), f = W(l, {
          labelable: !0
        }), p = ge(u, d), m = Vt();
        return {
          isPressed: h,
          linkProps: ge(f, Ut(e), {
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

      function jw(e) {
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

      function Lw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Rw(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = jw(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rw(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Aw(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Iw = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Dw = e => {
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
            for (var [c, u] of e.compoundVariants) Iw(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Aw(e.variantClassNames, (e => Aw(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        kw = Dw({
          defaultClassName: "foundry_hcgxh_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_hcgxh_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Mw = Dw({
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
        Hw = Dw({
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
      const Bw = (0, h.createContext)(null);

      function Fw() {
        const e = (0, h.useContext)(Bw);
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
              className: Hw({
                status: n,
                background: r
              })
            });
          return (0, u.jsx)(Bw.Provider, {
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
        zw = (0, h.forwardRef)((({
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
        Uw = (0, h.forwardRef)((({
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
        Gw = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        qw = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const {
            status: r
          } = Fw(), o = e || Gw[r], i = z[o], a = (0, d.v6)(t, {
            className: Mw({
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
        Xw = (0, h.forwardRef)((({
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
        Kw = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? m.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_hcgxh_1m368qhj"
            });
          return (0, u.jsx)(F, {
            size: "SM",
            asChild: !0,
            children: (0, u.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...i
            })
          })
        })),
        Ww = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, h.useRef)(null),
            a = (0, U.UP)(i, o),
            s = e ? m.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = Nw(r, i),
            f = (0, d.v6)(l, {
              className: "foundry_hcgxh_1m368qhk foundry_hcgxh_1d5mo5m0"
            });
          return (0, u.jsx)(F, {
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
        $w = (0, h.forwardRef)((({
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
        Yw = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          className: n,
          ...r
        }, o) => {
          const i = e ? m.DX : "div";
          return (0, u.jsx)(F, {
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
        Zw = (0, h.forwardRef)((({
          testId: e,
          label: t = "close alert",
          ...n
        }, r) => {
          const {
            background: o
          } = Fw(), i = (0, d.v6)(n, {
            className: kw({
              hasBackground: "none" !== o
            })
          });
          return (0, u.jsx)(ch, {
            ref: r,
            label: t,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "XS",
            ...i
          })
        }));

      function Qw(e) {
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

      function Jw(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function ex(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Jw(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Qw(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jw(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function tx(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var nx = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        rx = "foundry_hcgxh_qmpv6yt",
        ox = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = ex(ex({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) nx(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return tx(e.variantClassNames, (e => tx(e, (e => e.split(" ")[0]))))
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

      function ix(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function ax(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        return n.length === r.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && n.every((n => {
          const r = e[n],
            o = t[n];
          return "function" == typeof r ? `${r}` == `${o}` : ix(r) && ix(o) ? ax(r, o) : r === o
        })))
      }

      function sx(e) {
        return e.concat().sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => e.options))
      }

      function lx(e) {
        return "number" == typeof e
      }

      function cx(e) {
        return "string" == typeof e
      }

      function ux(e) {
        return "boolean" == typeof e
      }

      function dx(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function hx(e) {
        return Math.abs(e)
      }

      function fx(e) {
        return Math.sign(e)
      }

      function px(e, t) {
        return hx(e - t)
      }

      function mx(e) {
        return _x(e).map(Number)
      }

      function gx(e) {
        return e[vx(e)]
      }

      function vx(e) {
        return Math.max(0, e.length - 1)
      }

      function yx(e, t) {
        return t === vx(e)
      }

      function bx(e, t = 0) {
        return Array.from(Array(e), ((e, n) => t + n))
      }

      function _x(e) {
        return Object.keys(e)
      }

      function wx(e, t) {
        return [e, t].reduce(((e, t) => (_x(t).forEach((n => {
          const r = e[n],
            o = t[n],
            i = dx(r) && dx(o);
          e[n] = i ? wx(r, o) : o
        })), e)), {})
      }

      function xx(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function Ex() {
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

      function Px(e = 0, t = 0) {
        const n = hx(e - t);

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

      function Sx(e, t, n) {
        const {
          constrain: r
        } = Px(0, e), o = e + 1;
        let i = a(t);

        function a(e) {
          return n ? hx((o + e) % o) : r(e)
        }

        function s() {
          return i
        }

        function l() {
          return Sx(e, s(), n)
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

      function Cx(e, t, n, r, o, i, a, s, l, c, u, d, h, f, p, m, g, v, y) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, E = Ex(), P = Ex(), S = Px(50, 225).constrain(f.measure(20)), C = {
          mouse: 300,
          touch: 400
        }, O = {
          mouse: 500,
          touch: 600
        }, T = p ? 43 : 25;
        let N = !1,
          j = 0,
          R = 0,
          L = !1,
          A = !1,
          I = !1,
          D = !1;

        function k(e) {
          if (!xx(e, r) && e.touches.length >= 2) return M(e);
          const t = i.readPoint(e),
            n = i.readPoint(e, b),
            a = px(t, j),
            l = px(n, R);
          if (!A && !D) {
            if (!e.cancelable) return M(e);
            if (A = a > l, !A) return M(e)
          }
          const u = i.pointerMove(e);
          a > m && (I = !0), c.useFriction(.3).useDuration(.75), s.start(), o.add(_(u)), e.preventDefault()
        }

        function M(e) {
          const t = u.byDistance(0, !1).index !== d.get(),
            n = i.pointerUp(e) * (p ? O : C)[D ? "mouse" : "touch"],
            r = function(e, t) {
              const n = d.add(-1 * fx(e)),
                r = u.byDistance(e, !p).distance;
              return p || hx(e) < S ? r : g && t ? .5 * r : u.byIndex(n.get(), 0).distance
            }(_(n), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (hx(e) <= hx(t)) return 0;
              const n = px(hx(e), hx(t));
              return hx(n / e)
            }(n, r),
            a = T - 10 * o,
            s = v + o / 50;
          A = !1, L = !1, P.clear(), c.useDuration(a).useFriction(s), l.distance(r, !p), D = !1, h.emit("pointerUp")
        }

        function H(e) {
          I && (e.stopPropagation(), e.preventDefault(), I = !1)
        }
        return {
          init: function(e) {
            if (!y) return;

            function s(s) {
              (ux(y) || y(e, s)) && function(e) {
                const s = xx(e, r);
                D = s, I = p && s && !e.buttons && N, N = px(o.get(), a.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (L = !0, i.pointerDown(e), c.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = D ? n : t;
                  P.add(e, "touchmove", k, x).add(e, "touchend", M).add(e, "mousemove", k, x).add(e, "mouseup", M)
                }(), j = i.readPoint(e), R = i.readPoint(e, b), h.emit("pointerDown"))
              }(s)
            }
            const l = t;
            E.add(l, "dragstart", (e => e.preventDefault()), x).add(l, "touchmove", (() => {}), x).add(l, "touchend", (() => {})).add(l, "touchstart", s).add(l, "mousedown", s).add(l, "touchcancel", M).add(l, "contextmenu", M).add(l, "click", H, !0)
          },
          destroy: function() {
            E.clear(), P.clear()
          },
          pointerDown: function() {
            return L
          }
        }
      }

      function Ox(e, t) {
        let n, r;

        function o(e) {
          return e.timeStamp
        }

        function i(n, r) {
          const o = "client" + ("x" === (r || e.scroll) ? "X" : "Y");
          return (xx(n, t) ? n : n.touches[0])[o]
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
            return a && !s && hx(l) > .1 ? l : 0
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
              (ux(i) || i(o, n)) && function(n) {
                for (const i of n) {
                  if (d) return;
                  const n = i.target === e,
                    a = r.indexOf(i.target),
                    s = n ? c : u[a];
                  if (hx(h(n ? e : r[a]) - s) >= .5) {
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

      function Nx(e, t, n, r, o) {
        const i = o.measure(10),
          a = o.measure(50),
          s = Px(.1, .99);
        let l = !1;

        function c() {
          return !l && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(o) {
            if (!c()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              u = hx(e[l] - t.get()),
              d = n.get() - t.get(),
              h = s.constrain(u / a);
            n.subtract(d * h), !o && hx(d) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function jx(e, t, n, r) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: a,
            reachedMax: s
          } = Px(o, i),
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

      function Rx(e) {
        let t = e;

        function n(e) {
          return lx(e) ? e : e.get()
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

      function Ax(e, t, n, r, o, i, a, s, l) {
        const c = mx(o),
          u = mx(o).reverse(),
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
              slideLocation: Rx(-1),
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

      function Ix(e, t, n) {
        let r, o = !1;
        return {
          init: function(i) {
            n && (r = new MutationObserver((e => {
              o || (ux(n) || n(i, e)) && function(e) {
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

      function Dx(e, t, n, r, o, i, a) {
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
        }(l, c), O = C.measureSize(P), T = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(O), N = function(e, t) {
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
              return cx(e) ? n[e](r) : e(t, r, o)
            }
          };
          return o
        }(s, O), j = !d && !!y, R = d || !!y, {
          slideSizes: L,
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
            return hx(t[s] - e[s])
          }(), d = function() {
            if (!c) return 0;
            const e = i.getComputedStyle(gx(r));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), h = n.map(a), f = n.map(((e, t, n) => {
            const r = !t,
              o = yx(n, t);
            return r ? h[t] + u : o ? h[t] + d : n[t + 1][s] - e[s]
          })).map(hx);
          return {
            slideSizes: h,
            slideSizesWithGaps: f,
            startGap: u,
            endGap: d
          }
        }(C, P, S, n, R, o), k = function(e, t, n, r, o, i, a, s, l) {
          const {
            startEdge: c,
            endEdge: u,
            direction: d
          } = e, h = lx(n), f = {
            groupSlides: function(e) {
              return h ? function(e, t) {
                return mx(e).filter((e => e % t == 0)).map((n => e.slice(n, n + t)))
              }(e, n) : function(e) {
                return e.length ? mx(e).reduce(((n, h, f) => {
                  const p = gx(n) || 0,
                    m = 0 === p,
                    g = h === vx(e),
                    v = o[c] - i[p][c],
                    y = o[c] - i[h][u],
                    b = !r && m ? d(a) : 0,
                    _ = hx(y - (!r && g ? d(s) : 0) - (v + b));
                  return f && _ > t + l && n.push(h), g && n.push(e.length), n
                }), []).map(((t, n, r) => {
                  const o = Math.max(r[n - 1] || 0);
                  return e.slice(o, t)
                })) : []
              }(e)
            }
          };
          return f
        }(C, O, g, d, P, S, I, D, 2), {
          snaps: M,
          snapsAligned: H
        } = function(e, t, n, r, o) {
          const {
            startEdge: i,
            endEdge: a
          } = e, {
            groupSlides: s
          } = o, l = s(r).map((e => gx(e)[a] - e[0][i])).map(hx).map(t.measure), c = r.map((e => n[i] - e[i])).map((e => -hx(e))), u = s(c).map((e => e[0])).map(((e, t) => e + l[t]));
          return {
            snaps: c,
            snapsAligned: u
          }
        }(C, N, P, S, k), B = -gx(M) + gx(A), {
          snapsContained: F,
          scrollContainLimit: V
        } = function(e, t, n, r) {
          const o = Px(-t + e, 0),
            i = n.map(((e, t) => {
              const {
                min: r,
                max: i
              } = o, a = o.constrain(e), l = !t, c = yx(n, t);
              return l ? i : c || s(r, a) ? r : s(i, a) ? i : a
            })).map((e => parseFloat(e.toFixed(3)))),
            a = function() {
              const e = i[0],
                t = gx(i);
              return Px(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function s(e, t) {
            return px(e, t) <= 1
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
        }(O, B, H, y), z = j ? F : H, {
          limit: U
        } = function(e, t, n) {
          const r = t[0];
          return {
            limit: Px(n ? r - e : gx(t), r)
          }
        }(B, z, d), G = Sx(vx(z), u, d), q = G.clone(), X = mx(n), K = function(e, t, n, r) {
          const o = Ex(),
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
        })(se, e))), W = z[G.get()], $ = Rx(W), Y = Rx(W), Z = Rx(W), Q = Rx(W), J = function(e, t, n, r, o) {
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
              return s ? (n.set(e), i += t / s, i *= l, c += i, e.add(i), o = c - u) : (i = 0, n.set(r), e.set(r), o = t), a = fx(o), u = c, f
            },
            settled: function() {
              return hx(r.get() - t.get()) < .001
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
            return e.concat().sort(((e, t) => hx(e) - hx(t)))[0]
          }

          function c(t, r) {
            const o = [t, t + n, t - n];
            if (!e) return t;
            if (!r) return l(o);
            const i = o.filter((e => fx(e) === r));
            return i.length ? l(i) : gx(o) - n
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
                    }))).sort(((e, t) => hx(e.diff) - hx(t.diff))),
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
        }(U), re = Ex(), oe = function(e, t, n, r) {
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
                return _x(o).reduce(((t, n) => {
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
                o = yx(n, t);
              return r ? bx(gx(n[0]) + 1) : o ? bx(vx(i) - gx(n)[0] + 1, gx(n)[0]) : e
            }))
          }();
          return {
            slideRegistry: c
          }
        }(j, y, z, V, k, X), ae = function(e, t, n, r, o, i, a, s) {
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
                  (ux(s) || s(d, t)) && function(t) {
                    if ((new Date).getTime() - c > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = n.findIndex((e => e.includes(t)));
                    lx(i) && (o.useDuration(0), r.index(i, 0), a.emit("slideFocus"))
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
          dragHandler: Cx(C, e, r, o, Q, Ox(C, o), $, K, te, J, ee, G, a, T, f, p, v, .68, w),
          eventStore: re,
          percentOfView: T,
          index: G,
          indexPrevious: q,
          limit: U,
          location: $,
          offsetLocation: Z,
          previousLocation: Y,
          options: i,
          resizeHandler: Tx(t, a, o, n, C, b, E),
          scrollBody: J,
          scrollBounds: Nx(U, Z, Q, J, T),
          scrollLooper: jx(B, U, Z, [$, Z, Y, Q]),
          scrollProgress: ne,
          scrollSnapList: z.map(ne.get),
          scrollSnaps: z,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: Ax(C, O, B, L, A, M, z, Z, n),
          slideFocus: ae,
          slidesHandler: Ix(t, a, _),
          slidesInView: oe,
          slideIndexes: X,
          slideRegistry: ie,
          slidesToScroll: k,
          target: Q,
          translate: Lx(C, t)
        };
        return se
      }
      const kx = {
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

      function Mx(e) {
        function t(e, t) {
          return wx(e, t || {})
        }
        const n = {
          mergeOptions: t,
          optionsAtMedia: function(n) {
            const r = n.breakpoints || {},
              o = _x(r).filter((t => e.matchMedia(t).matches)).map((e => r[e])).reduce(((e, n) => t(e, n)), {});
            return t(n, o)
          },
          optionsMediaQueries: function(t) {
            return t.map((e => _x(e.breakpoints || {}))).reduce(((e, t) => e.concat(t)), []).map(e.matchMedia)
          }
        };
        return n
      }

      function Hx(e, t, n) {
        const r = e.ownerDocument,
          o = r.defaultView,
          i = Mx(o),
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
          s = Ex(),
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
          w = c(kx, Hx.globalOptions),
          x = c(w),
          E = [];

        function P(t) {
          const n = Dx(e, y, b, r, o, t, l);
          return t.loop && !n.slideLooper.canLoop() ? P(Object.assign({}, t, {
            loop: !1
          })) : n
        }

        function S(t, n) {
          _ || (w = c(w, t), x = u(w), E = n || E, function() {
            const {
              container: t,
              slides: n
            } = x, r = cx(t) ? e.querySelector(t) : t;
            y = r || e.children[0];
            const o = cx(n) ? y.querySelectorAll(n) : n;
            b = [].slice.call(o || y.children)
          }(), g = P(x), d([w, ...E.map((({
            options: e
          }) => e))]).forEach((e => s.add(e, "change", C))), x.active && (g.translate.to(g.location.get()), g.animation.init(), g.slidesInView.init(), g.slideFocus.init(j), g.eventHandler.init(j), g.resizeHandler.init(j), g.slidesHandler.init(j), g.options.loop && g.slideLooper.loop(), y.offsetParent && b.length && g.dragHandler.init(j), v = a.init(j, E)))
        }

        function C(e, t) {
          const n = N();
          O(), S(c({
            startIndex: n
          }, e), t), l.emit("reInit")
        }

        function O() {
          g.dragHandler.destroy(), g.eventStore.clear(), g.translate.clear(), g.slideLooper.clear(), g.resizeHandler.destroy(), g.slidesHandler.destroy(), g.slidesInView.destroy(), g.animation.destroy(), a.destroy(), s.clear()
        }

        function T(e, t, n) {
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

      function Bx(e = {}, t = []) {
        const n = (0, h.useRef)(e),
          r = (0, h.useRef)(t),
          [o, i] = (0, h.useState)(),
          [a, s] = (0, h.useState)(),
          l = (0, h.useCallback)((() => {
            o && o.reInit(n.current, r.current)
          }), [o]);
        return (0, h.useEffect)((() => {
          ax(n.current, e) || (n.current = e, l())
        }), [e, l]), (0, h.useEffect)((() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const n = sx(e),
              r = sx(t);
            return n.every(((e, t) => ax(e, r[t])))
          })(r.current, t) || (r.current = t, l())
        }), [t, l]), (0, h.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            Hx.globalOptions = Bx.globalOptions;
            const e = Hx(a, n.current, r.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }), [a, i]), [s, o]
      }

      function Fx(e = {}) {
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
      Hx.globalOptions = void 0, Bx.globalOptions = void 0, Fx.globalOptions = void 0;
      const Vx = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function zx(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function Ux(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function Gx(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function qx(e = {}) {
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
          ("pointerDown" === t ? Gx : Ux)(r, u.dragging)
        }

        function h(e = [], t = [], n) {
          const r = t.map((e => o[e])),
            i = e.map((e => o[e]));
          return r.forEach((e => Ux(e, n))), i.forEach((e => Gx(e, n))), e
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
            } = a, g = h(Vx, qx.globalOptions), v = h(g, e);
            t = m(v), r = n.rootNode(), o = n.slideNodes();
            const {
              watchDrag: y,
              loop: b
            } = n.internalEngine().options, _ = !!y;
            t.loop && b && (u.loop = zx(t.loop), Gx(r, u.loop)), t.draggable && _ && (u.draggable = zx(t.draggable), Gx(r, u.draggable)), t.dragging && (u.dragging = zx(t.dragging), l.forEach((e => n.on(e, d)))), t.snapped && (u.snapped = zx(t.snapped), s.forEach((e => n.on(e, f))), f()), t.inView && (u.inView = zx(t.inView), c.forEach((e => n.on(e, p))), p())
          },
          destroy: function() {
            l.forEach((e => n.off(e, d))), s.forEach((e => n.off(e, f))), c.forEach((e => n.off(e, p))), Ux(r, u.loop), Ux(r, u.draggable), Ux(r, u.dragging), h([], i, u.snapped), h([], a, u.inView), Object.keys(u).forEach((e => {
              u[e] = []
            }))
          }
        };
        return m
      }
      qx.globalOptions = void 0;
      const Xx = (0, h.createContext)(null);

      function Kx() {
        const e = (0, h.useContext)(Xx);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Wx = (0, h.forwardRef)((({
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
              const t = (0, U.rl)(),
                n = (0, U.jt)(),
                [r, o] = (0, h.useState)([]),
                i = r.length,
                [a, s] = (0, h.useState)(0),
                [l, c] = Bx({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [Fx(), qx()]),
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
              className: ox(f)
            }, y),
            _ = e ? m.DX : "div";
          return (0, u.jsx)(Xx.Provider, {
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
        $x = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Yx = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const {
            currentAlert: r
          } = Kx();
          if (!e && !r || !r?.status) return null;
          const o = e || $x[r.status],
            i = z[o],
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
        Zx = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? m.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_hcgxh_qmpv6yo"
            });
          return (0, u.jsx)(F, {
            size: "SM",
            asChild: !0,
            children: (0, u.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...i
            })
          })
        })),
        Qx = (0, h.forwardRef)((({
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
        Jx = (0, h.forwardRef)((({
          testId: e,
          children: t,
          ...n
        }, r) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = Kx(), a = (0, d.v6)(n, {
            className: "foundry_hcgxh_qmpv6yl"
          }), s = (0, U.UP)(i, r), l = h.Children.map(t, (e => {
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
        eE = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, h.useRef)(null),
            a = (0, U.UP)(i, o),
            s = e ? m.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = Nw(r, i),
            f = (0, d.v6)(r, {
              className: "foundry_hcgxh_qmpv6yp foundry_hcgxh_1d5mo5m0"
            });
          return (0, u.jsx)(F, {
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
        tE = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const r = (0, d.v6)(t, {
            className: "foundry_hcgxh_qmpv6yq"
          });
          return (0, u.jsx)(ch, {
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
        nE = (0, h.forwardRef)((({
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
        rE = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            nextAlert: r,
            canScrollNext: o
          } = Kx(), i = (0, d.v6)(t, {
            className: rx
          });
          return (0, u.jsx)(ch, {
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
        oE = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            prevAlert: r,
            canScrollPrev: o
          } = Kx(), i = (0, d.v6)(t, {
            className: rx
          });
          return (0, u.jsx)(ch, {
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
        iE = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            currentAlertIndex: r,
            numAlerts: o
          } = Kx(), i = (0, d.v6)(t, {
            className: "foundry_hcgxh_qmpv6yr"
          });
          return (0, u.jsx)(F, {
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

      function aE(e) {
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

      function sE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function lE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sE(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = aE(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sE(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function cE(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var uE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        dE = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = lE(lE({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) uE(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cE(e.variantClassNames, (e => cE(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        hE = dE({
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
        fE = dE({
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
      const pE = (0, h.createContext)(null);

      function mE() {
        const e = (0, h.useContext)(pE);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const gE = (0, h.forwardRef)((({
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
              className: fE(h)
            }),
            p = e ? m.DX : "div";
          return (0, u.jsx)(pE.Provider, {
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
        vE = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            size: i
          } = mE(), a = e ? m.DX : "div", s = (0, d.v6)(r, {
            className: "foundry_hcgxh_oahh58z"
          });
          return (0, u.jsx)(F, {
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
        yE = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const r = z[e],
            o = (0, d.v6)(t, {
              className: "foundry_hcgxh_oahh5810"
            });
          return (0, u.jsx)(r, {
            ref: n,
            size: "MD",
            ...o
          })
        })),
        bE = (0, h.forwardRef)((({
          testId: e,
          label: t = "close tag",
          ...n
        }, r) => {
          const {
            background: o,
            isDisabled: i
          } = mE(), a = (0, d.v6)(n, {
            className: hE({
              background: o
            })
          });
          return (0, u.jsx)(ch, {
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

      function _E(e) {
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

      function wE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function xE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wE(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = _E(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wE(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function EE(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var PE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        SE = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = xE(xE({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) PE(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return EE(e.variantClassNames, (e => EE(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        CE = SE({
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
        OE = SE({
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
        TE = SE({
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

      function NE() {
        const e = (0, h.useContext)(jE);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const jE = (0, h.createContext)(null),
        RE = (0, h.forwardRef)((({
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
          return (0, u.jsx)(jE.Provider, {
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
            } = NE(),
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
              } = Nw({
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
              className: (0, A.$)(CE({
                size: s
              }), e && "foundry_hcgxh_m1icrx9"),
              "data-testid": r
            }, l, o);
          return (0, u.jsx)("li", {
            className: OE({
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
        AE = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const r = z[e];
          return (0, u.jsx)(r, {
            ref: n,
            size: "LG",
            ...t
          })
        })),
        IE = (0, h.forwardRef)((({
          children: e,
          testId: t,
          defaultOpen: n = !1,
          label: r = "Show hidden breadcrumbs",
          ...o
        }, i) => {
          const [a, s] = (0, h.useState)(n), {
            size: l
          } = NE(), c = (0, d.v6)({
            className: OE({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, u.jsx)("li", {
            ref: i,
            ...c,
            children: (0, u.jsxs)(jv, {
              open: a,
              onOpenChange: () => s(!a),
              children: [(0, u.jsx)(Rv, {
                className: "foundry_hcgxh_m1icrxa foundry_hcgxh_1d5mo5m0 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd11",
                "aria-label": r,
                children: "..."
              }), (0, u.jsx)(Iv, {
                children: (0, u.jsx)(Dv, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_hcgxh_m1icrxb",
                  children: (0, u.jsx)(kv, {
                    className: "foundry_hcgxh_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        })),
        DE = (0, h.forwardRef)((({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const i = t ? m.DX : Mv,
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
    },
    28136: (e, t, n) => {
      var r = n(75754),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        s = {};

      function l(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || o
      }
      s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[r.Memo] = a;
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        h = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (p) {
            var o = f(n);
            o && o !== p && e(t, o, r)
          }
          var a = u(n);
          d && (a = a.concat(d(n)));
          for (var s = l(t), m = l(n), g = 0; g < a.length; ++g) {
            var v = a[g];
            if (!(i[v] || r && r[v] || m && m[v] || s && s[v])) {
              var y = h(n, v);
              try {
                c(t, v, y)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    75754: (e, t, n) => {
      e.exports = n(82886)
    },
    82886: (e, t) => {
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        u = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        h = n ? Symbol.for("react.forward_ref") : 60112,
        f = n ? Symbol.for("react.suspense") : 60113,
        p = n ? Symbol.for("react.suspense_list") : 60120,
        m = n ? Symbol.for("react.memo") : 60115,
        g = n ? Symbol.for("react.lazy") : 60116,
        v = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        _ = n ? Symbol.for("react.scope") : 60119;

      function w(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch (e = e.type) {
                case u:
                case d:
                case i:
                case s:
                case a:
                case f:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case h:
                    case g:
                    case m:
                    case l:
                      return e;
                    default:
                      return t
                  }
              }
            case o:
              return t
          }
        }
      }

      function x(e) {
        return w(e) === d
      }
      t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = r, t.ForwardRef = h, t.Fragment = i, t.Lazy = g, t.Memo = m, t.Portal = o, t.Profiler = s, t.StrictMode = a, t.Suspense = f, t.isAsyncMode = function(e) {
        return x(e) || w(e) === u
      }, t.isConcurrentMode = x, t.isContextConsumer = function(e) {
        return w(e) === c
      }, t.isContextProvider = function(e) {
        return w(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, t.isForwardRef = function(e) {
        return w(e) === h
      }, t.isFragment = function(e) {
        return w(e) === i
      }, t.isLazy = function(e) {
        return w(e) === g
      }, t.isMemo = function(e) {
        return w(e) === m
      }, t.isPortal = function(e) {
        return w(e) === o
      }, t.isProfiler = function(e) {
        return w(e) === s
      }, t.isStrictMode = function(e) {
        return w(e) === a
      }, t.isSuspense = function(e) {
        return w(e) === f
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === i || e === d || e === s || e === a || e === f || e === p || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === h || e.$$typeof === y || e.$$typeof === b || e.$$typeof === _ || e.$$typeof === v)
      }, t.typeOf = w
    }
  }
]);