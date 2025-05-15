! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1bdd5187-aa92-43e5-8214-549d80212638", e._sentryDebugIdIdentifier = "sentry-dbid-1bdd5187-aa92-43e5-8214-549d80212638")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7799], {
    7799: (e, t, n) => {
      n.r(t), n.d(t, {
        Alert: () => a,
        AlertBanner: () => s,
        Body: () => F,
        Breadcrumbs: () => u,
        Button: () => fn,
        Checkbox: () => vb,
        Code: () => D_,
        Display: () => j_,
        Divider: () => a_,
        Dropdown: () => Yy,
        Heading: () => k,
        IconButton: () => hf,
        Label: () => O_,
        Lightbox: () => ov,
        Loader: () => Y_,
        Option: () => Zy,
        RadioButton: () => Jb,
        RadioContext: () => Gb,
        RadioGroup: () => qb,
        Switch: () => E_,
        Tag: () => l,
        Text: () => R,
        TextArea: () => Nt,
        TextField: () => i,
        TextSemantics: () => N,
        Tooltip: () => um
      });
      var r = {};
      n.r(r), n.d(r, {
        CheckLG: () => eb,
        CheckMD: () => Jy,
        CheckXL: () => tb,
        DashLG: () => rb,
        DashMD: () => nb,
        DashXL: () => ob
      });
      var o = {};
      n.r(o), n.d(o, {
        DotLG: () => Kb,
        DotMD: () => Xb,
        DotXL: () => Wb
      });
      var i = {};
      n.r(i), n.d(i, {
        Button: () => Jw,
        Control: () => Yw,
        Description: () => tE,
        Hint: () => $w,
        Icon: () => Qw,
        Input: () => Zw,
        Label: () => Ww,
        PasswordButton: () => eE,
        Root: () => Kw
      });
      var a = {};
      n.r(a), n.d(a, {
        Body: () => gE,
        CloseButton: () => kE,
        Description: () => _E,
        ErrorText: () => jE,
        Footer: () => EE,
        Header: () => mE,
        Icon: () => yE,
        Link: () => wE,
        Root: () => pE,
        RootContext: () => fE,
        Title: () => bE,
        iconStatusMap: () => vE,
        useAlertContext: () => hE
      });
      var s = {};
      n.r(s), n.d(s, {
        Alert: () => xj,
        CloseButton: () => Cj,
        Description: () => kj,
        Icon: () => jj,
        Link: () => Pj,
        PaginationCounter: () => Rj,
        PaginationNav: () => Tj,
        PaginationNextButton: () => Oj,
        PaginationPrevButton: () => Nj,
        PaginationViewport: () => Sj,
        Root: () => wj,
        RootContext: () => bj,
        iconStatusMap: () => Ej,
        useAlertBannerContext: () => _j
      });
      var l = {};
      n.r(l), n.d(l, {
        CloseButton: () => Xj,
        Icon: () => qj,
        Label: () => Gj,
        Root: () => Uj,
        RootContext: () => Vj,
        useTagContext: () => zj
      });
      var u = {};
      n.r(u), n.d(u, {
        Icon: () => ak,
        Item: () => ik,
        OverflowMenu: () => sk,
        OverflowMenuItem: () => lk,
        Root: () => ok,
        RootContext: () => rk,
        useBreadcrumbsContext: () => nk
      });
      var c = n(25854),
        d = n(38763),
        f = n(62229),
        h = n.t(f, 2),
        p = n.n(f),
        m = n(30109);

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
      var _, w, E = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        j = (_ = {
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
        }, w = e => {
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
          for (var [l, u] of _.compoundVariants) E(l, n, _.defaultVariants) && (t += " " + u);
          return t
        }, w.variants = () => Object.keys(_.variantClassNames), w.classNames = {
          get base() {
            return _.defaultClassName.split(" ")[0]
          },
          get variants() {
            return b(_.variantClassNames, (e => b(e, (e => e.split(" ")[0]))))
          }
        }, w);
      const k = (0, f.forwardRef)((({
        asChild: e,
        level: t,
        testId: n,
        ...r
      }, o) => {
        const i = e ? m.DX : `h${t}`,
          a = (0, d.v6)(r, {
            className: j({
              level: t
            })
          });
        return (0, c.jsx)(i, {
          ref: o,
          "data-testid": n,
          ...a
        })
      }));

      function x(e) {
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

      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? S(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = x(o)) in r ? Object.defineProperty(r, o, {
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

      function C(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var T = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        O = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = P(P({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) T(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return C(e.variantClassNames, (e => C(e, (e => e.split(" ")[0]))))
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
      const N = {
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
        R = (0, f.forwardRef)((({
          asChild: e,
          testId: t,
          semantic: n = "default",
          ...r
        }, o) => {
          const i = e ? m.DX : N[n] || "span",
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

      function A(e) {
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

      function I(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? I(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = A(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function D(e, t) {
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
              r = M(M({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) H(u, r, e.defaultVariants) && (n += " " + c);
            return n
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
      const F = (0, f.forwardRef)((({
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
        return (0, c.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      }));
      var V = n(78618),
        z = n.t(V, 2),
        U = n(24321);
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
      const $ = "undefined" != typeof document ? f.useLayoutEffect : () => {};

      function Y(e) {
        const t = (0, f.useRef)(null);
        return $((() => {
          t.current = e
        }), [e]), (0, f.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }

      function Z(e, t, n) {
        let r = (0, f.useRef)(t),
          o = Y((() => {
            n && n(r.current)
          }));
        (0, f.useEffect)((() => {
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
        ne = f.createContext(te),
        re = f.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let oe = new WeakMap;
      const ie = "function" == typeof f.useId ? function(e) {
        let t = f.useId(),
          [n] = (0, f.useState)(ue());
        return e || `${n?"react-aria":`react-aria${te.prefix}`}-${t}`
      } : function(e) {
        let t = (0, f.useContext)(ne),
          n = function(e = !1) {
            let t = (0, f.useContext)(ne),
              n = (0, f.useRef)(null);
            if (null === n.current && !e) {
              var r, o;
              let e = null === (o = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
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

      function ue() {
        return "function" == typeof f.useSyncExternalStore ? f.useSyncExternalStore(le, ae, se) : (0, f.useContext)(re)
      }
      let ce, de = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        fe = new Map;

      function he(e) {
        let [t, n] = (0, f.useState)(e), r = (0, f.useRef)(null), o = ie(t), i = (0, f.useRef)(null);
        if (ce && ce.register(i, o), de) {
          const e = fe.get(o);
          e && !e.includes(r) ? e.push(r) : fe.set(o, [r])
        }
        return $((() => {
          let e = o;
          return () => {
            ce && ce.unregister(i), fe.delete(e)
          }
        }), [o]), (0, f.useEffect)((() => {
          let e = r.current;
          return e && n(e), () => {
            e && (r.current = null)
          }
        })), o
      }

      function pe(e, t) {
        if (e === t) return e;
        let n = fe.get(e);
        if (n) return n.forEach((e => e.current = t)), t;
        let r = fe.get(t);
        return r ? (r.forEach((t => t.current = e)), e) : t
      }

      function me(e = []) {
        let t = he(),
          [n, r] = function(e) {
            let [t, n] = (0, f.useState)(e), r = (0, f.useRef)(null), o = Y((() => {
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
          o = (0, f.useCallback)((() => {
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
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = ee(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = pe(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, L.A)(n, o)
          }
        }
        return t
      }

      function ve(e, t, n) {
        let [r, o] = (0, f.useState)(e || t), i = (0, f.useRef)(void 0 !== e), a = void 0 !== e;
        (0, f.useEffect)((() => {
          i.current, i.current = a
        }), [a]);
        let s = a ? e : r,
          l = (0, f.useCallback)(((e, ...t) => {
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
          t = he(t);
          let a = he(),
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
      "undefined" != typeof FinalizationRegistry && (ce = new FinalizationRegistry((e => {
        fe.delete(e)
      })));
      const _e = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        we = _e.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      _e.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const Ee = _e.join(':not([hidden]):not([tabindex="-1"]),');

      function je(e) {
        return e.matches(we)
      }

      function ke(e) {
        return e.matches(Ee)
      }

      function xe(e) {
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

      function Pe(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function Ce(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function Te(e) {
        let t = (0, f.useRef)({
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
        return (0, f.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let r = e.target,
              o = e => {
                if (t.current.isFocused = !1, r.disabled) {
                  let t = Pe(e);
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
      let Oe = !1;

      function Ne(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function Re(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Le(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Ae = Le((function() {
          return Re(/^Mac/i)
        })),
        Ie = Le((function() {
          return Re(/^iPhone/i)
        })),
        Me = Le((function() {
          return Re(/^iPad/i) || Ae() && navigator.maxTouchPoints > 1
        })),
        De = Le((function() {
          return Ie() || Me()
        })),
        He = (Le((function() {
          return Ae() || De()
        })), Le((function() {
          return Ne(/AppleWebKit/i) && !Be()
        }))),
        Be = Le((function() {
          return Ne(/Chrome/i)
        })),
        Fe = Le((function() {
          return Ne(/Android/i)
        })),
        Ve = Le((function() {
          return Ne(/Firefox/i)
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
            return !(e.metaKey || !Ae() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Ue = "keyboard", We("keyboard", e))
      }

      function Ye(e) {
        Ue = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Xe = !0, We("pointer", e))
      }

      function Ze(e) {
        ze(e) && (Xe = !0, Ue = "virtual")
      }

      function Qe(e) {
        e.target !== window && e.target !== document && !Oe && e.isTrusted && (Xe || Ke || (Ue = "virtual", We("virtual", e)), Xe = !1, Ke = !1)
      }

      function Je() {
        Oe || (Xe = !1, Ke = !0)
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

      function ut(e) {
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
        $((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? st() : document.addEventListener("DOMContentLoaded", st));
      let dt = f.createContext(null);

      function ft(e, t) {
        let {
          focusProps: n
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: o
          } = e;
          const i = (0, f.useCallback)((e => {
              if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
            }), [r, o]),
            a = Te(i),
            s = (0, f.useCallback)((e => {
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
              onKeyDown: ut(e.onKeyDown),
              onKeyUp: ut(e.onKeyUp)
            }
          }
        }(e), o = ge(n, r), i = function(e) {
          let t = (0, f.useContext)(dt) || {};
          ct(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), a = e.isDisabled ? {} : i, s = (0, f.useRef)(e.autoFocus);
        (0, f.useEffect)((() => {
          s.current && t.current && function(e) {
            const t = Q(e),
              n = rt(t);
            if ("virtual" === Ue) {
              let r = n;
              lt((() => {
                rt(t) === r && e.isConnected && xe(e)
              }))
            } else xe(e)
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

      function ht(e, t, n) {
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
        (0, f.useEffect)((() => {
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
        yt = (0, f.createContext)({}),
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
            u = (0, f.useMemo)((() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let n = e(t);
                  if (n && "boolean" != typeof n) return wt(n)
                }
                return []
              }(a, o);
              return Et(e)
            }), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let c = (0, f.useContext)(yt),
            d = (0, f.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => wt(c[e]))) : wt(c[r]) : []), [c, r]),
            [h, p] = (0, f.useState)(c),
            [m, g] = (0, f.useState)(!1);
          c !== h && (p(c), g(!1));
          let v = (0, f.useMemo)((() => Et(m ? [] : d)), [m, d]),
            y = (0, f.useRef)(vt),
            [b, _] = (0, f.useState)(vt),
            w = (0, f.useRef)(vt),
            [E, j] = (0, f.useState)(!1);
          return (0, f.useEffect)((() => {
            if (!E) return;
            j(!1);
            let e = u || i || y.current;
            jt(e, w.current) || (w.current = e, _(e))
          })), {
            realtimeValidation: l || v || u || i || vt,
            displayValidation: "native" === s ? l || v || b : l || v || u || i || b,
            updateValidation(e) {
              "aria" !== s || jt(b, e) ? y.current = e : _(e)
            },
            resetValidation() {
              let e = vt;
              jt(e, w.current) || (w.current = e, _(e)), "native" === s && j(!1), g(!0)
            },
            commitValidation() {
              "native" === s && j(!0), g(!0)
            }
          }
        }(e)
      }

      function wt(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Et(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: gt
        } : null
      }

      function jt(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, n) => e === t.validationErrors[n])) && Object.entries(e.validationDetails).every((([e, n]) => t.validationDetails[e] === n))
      }

      function kt(e) {
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

      function xt(e, t) {
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
          t % 2 ? xt(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = kt(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xt(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Pt(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Ct = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Tt = "foundry_nk7jgu_vq8c3j8",
        Ot = (e => {
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
            for (var [u, c] of e.compoundVariants) Ct(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Pt(e.variantClassNames, (e => Pt(e, (e => e.split(" ")[0]))))
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
      const Nt = (0, f.forwardRef)((({
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
        hideDescription: h,
        hideRequiredAsterisk: p,
        validate: g,
        errorMessage: v,
        ...y
      }, b) => {
        const _ = (0, f.useRef)(null),
          w = (0, U.UP)(_, b),
          {
            inputProps: E,
            labelProps: j,
            descriptionProps: k,
            isInvalid: x,
            errorMessageProps: S,
            validationErrors: P
          } = function(e, t) {
            let {
              inputElementType: n = "input",
              isDisabled: r = !1,
              isRequired: o = !1,
              isReadOnly: i = !1,
              type: a = "text",
              validationBehavior: s = "aria"
            } = e, [l, u] = ve(e.value, e.defaultValue || "", e.onChange), {
              focusableProps: c
            } = ft(e, t), d = _t({
              ...e,
              value: l
            }), {
              isInvalid: h,
              validationErrors: p,
              validationDetails: m
            } = d.displayValidation, {
              labelProps: g,
              fieldProps: v,
              descriptionProps: y,
              errorMessageProps: b
            } = be({
              ...e,
              isInvalid: h,
              errorMessage: e.errorMessage || p
            }), _ = W(e, {
              labelable: !0
            });
            const w = {
              type: a,
              pattern: e.pattern
            };
            return Z(t, l, u), ht(e, d, t), (0, f.useEffect)((() => {
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
                "aria-invalid": h || void 0,
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
              isInvalid: h,
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
          C = (0, d.v6)({
            ...E,
            className: s
          }, {
            className: Ot({
              isInvalid: x
            }),
            "aria-errormessage": S?.id
          }),
          T = e ? m.DX : "textarea";
        return (0, c.jsxs)("div", {
          className: "foundry_nk7jgu_vq8c3j0",
          children: [(t || r) && (0, c.jsxs)("div", {
            className: "foundry_nk7jgu_vq8c3j1",
            children: [(0, c.jsx)(m.s6, {
              enabled: !!u,
              children: (0, c.jsx)(F, {
                size: "SM",
                className: (0, L.$)("foundry_nk7jgu_vq8c3j2", E.disabled && Tt),
                asChild: !0,
                children: (0, c.jsxs)("label", {
                  ...j,
                  children: [t, n && !p && (0, c.jsx)("span", {
                    className: "foundry_nk7jgu_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), r && (0, c.jsx)(F, {
              size: "XS",
              className: "foundry_nk7jgu_vq8c3j3",
              children: r
            })]
          }), (0, c.jsx)(T, {
            rows: l,
            ref: w,
            "data-testid": a,
            ...C,
            children: o
          }), i && (0, c.jsx)(m.s6, {
            enabled: P.length > 0 || !!h,
            children: (0, c.jsx)(F, {
              size: "SM",
              ...k,
              className: (0, L.$)("foundry_nk7jgu_vq8c3j4", E.disabled && Tt),
              children: i
            })
          }), P.length > 0 && (0, c.jsxs)(F, {
            size: "SM",
            appearance: "bold",
            ...S,
            className: "foundry_nk7jgu_vq8c3j5",
            children: [(0, c.jsx)(V.X, {
              size: "MD",
              label: "",
              className: "foundry_nk7jgu_vq8c3j6"
            }), P.join(". ")]
          })]
        })
      }));
      let Rt = "default",
        Lt = "",
        At = new WeakMap;

      function It(e) {
        if (De()) {
          if ("disabled" !== Rt) return;
          Rt = "restoring", setTimeout((() => {
            lt((() => {
              if ("restoring" === Rt) {
                const t = Q(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Lt || ""), Lt = "", Rt = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && At.has(e)) {
          let t = At.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), At.delete(e)
        }
      }
      const Mt = f.createContext({
        register: () => {}
      });

      function Dt(e, t, n) {
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
        }(e, Dt(e, t, "set"), n), n
      }

      function Bt() {
        let e = (0, f.useRef)(new Map),
          t = (0, f.useCallback)(((t, n, r, o) => {
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
          n = (0, f.useCallback)(((t, n, r, o) => {
            var i;
            let a = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
            t.removeEventListener(n, a, o), e.current.delete(r)
          }), []),
          r = (0, f.useCallback)((() => {
            e.current.forEach(((e, t) => {
              n(e.eventTarget, e.type, t, e.options)
            }))
          }), [n]);
        return (0, f.useEffect)((() => r), [r]), {
          addGlobalListener: t,
          removeGlobalListener: n,
          removeAllGlobalListeners: r
        }
      }
      Mt.displayName = "PressResponderContext";
      const Ft = (0, f.createContext)({
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
        return (0, f.useContext)(Ft)
      }

      function zt(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        Ve() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (Ae() ? i = !0 : a = !0);
        let u = He() && Ae() && !Me() ? new KeyboardEvent("keydown", {
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
        zt.isOpening = n, xe(e), e.dispatchEvent(u), zt.isOpening = !1
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
          }(this, Dt(this, qt, "get"))
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
          const u = null == l ? void 0 : l.getBoundingClientRect();
          let c, d, f = 0,
            h = null;
          null != n.clientX && null != n.clientY && (d = n.clientX, h = n.clientY), u && (null != d && null != h ? (c = d - u.left, f = h - u.top) : (c = u.width / 2, f = u.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = c, this.y = f
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
          preventFocusOnPress: u,
          shouldCancelOnPointerExit: c,
          allowTextSelectionOnPress: d,
          ref: h,
          ...p
        } = function(e) {
          let t = (0, f.useContext)(Mt);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = ge(r, e), n()
          }
          return ct(t, e.ref), e
        }(e), [m, g] = (0, f.useState)(!1), v = (0, f.useRef)({
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
        })), E = Y(((e, t) => {
          let n = v.current;
          if (s) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new Xt("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), j = Y((e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(Zt(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, b(), d || It(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), k = Y((e => {
          c && j(e)
        })), x = Y((e => {
          null == a || a(e)
        })), S = Y(((e, t) => {
          if (a) {
            let n = new MouseEvent("click", e);
            Ce(n, t), a(Pe(n))
          }
        })), P = (0, f.useMemo)((() => {
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
                        Yt(t, r) && !t.repeat && nt(r, ot(t)) && e.target && E(Zt(e.target, t), "keyboard")
                      };
                    y(Q(t.currentTarget), "keyup", ee(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Ae() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || nt(t.currentTarget, ot(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !zt.isOpening) {
                  let n = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !ze(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual";
                      n = w(Zt(t.currentTarget, t), r, !0), e.isOverTarget = !1, x(t), j(t)
                    }
                  } else {
                    let e = _(t, "virtual"),
                      r = E(t, "virtual"),
                      o = w(t, "virtual");
                    x(t), n = e && r && o
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
                w(Zt(e.target, t), "keyboard", o), o && S(t, e.target), b(), "Enter" !== t.key && $t(e.target) && nt(e.target, n) && !t[Kt] && (t[Kt] = !0, zt(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
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
                  if (De()) {
                    if ("default" === Rt) {
                      const t = Q(e);
                      Lt = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    Rt = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    At.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = _(t, e.pointerType);
                let o = ot(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(Q(t.currentTarget), "pointerup", n, !1), y(Q(t.currentTarget), "pointercancel", r, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (nt(t.currentTarget, ot(t.nativeEvent)) && 0 === t.button) {
                if (u) {
                  let n = function(e) {
                    for (; e && !je(e);) e = e.parentElement;
                    let t = J(e),
                      n = t.document.activeElement;
                    if (!n || n === e) return;
                    Oe = !0;
                    let r = !1,
                      o = e => {
                        (e.target === n || r) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === n || r) && (t.stopImmediatePropagation(), e || r || (r = !0, xe(n), l()))
                      },
                      a = t => {
                        (t.target === e || r) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || r) && (t.stopImmediatePropagation(), r || (r = !0, xe(n), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), Oe = !1, r = !1
                      },
                      u = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              nt(t.currentTarget, ot(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && E(t, e.pointerType || t.pointerType)
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, _(Zt(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(Zt(e.target, t), e.pointerType, !1), k(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (nt(e.target, ot(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? j(t) : (xe(e.target), e.target.click()))
                      }), 80);
                    y(t.currentTarget, "click", (() => n = !0), !0), e.disposables.push((() => clearTimeout(r)))
                  } else j(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                j(e)
              };
            t.onDragStart = e => {
              nt(e.currentTarget, ot(e.nativeEvent)) && j(e)
            }
          }
          return t
        }), [y, s, u, b, d, j, k, w, _, E, x, S]);
        return (0, f.useEffect)((() => {
          let e = null == h ? void 0 : h.current;
          e && e instanceof J(e).Element && "auto" === J(e).getComputedStyle(e).touchAction && (e.style.touchAction = "pan-x pan-y pinch-zoom")
        }), [h]), (0, f.useEffect)((() => {
          let e = v.current;
          return () => {
            var t;
            d || It(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [d]), {
          isPressed: l || m,
          pressProps: ge(p, P)
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
          onPressChange: u,
          preventFocusOnPress: c,
          allowFocusWhenDisabled: d,
          onClick: f,
          href: h,
          target: p,
          rel: m,
          type: g = "button"
        } = e;
        n = "button" === r ? {
          type: g,
          disabled: o
        } : {
          role: "button",
          href: "a" !== r || o ? void 0 : h,
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
          onPressChange: u,
          onPress: i,
          onPressUp: l,
          onClick: f,
          isDisabled: o,
          preventFocusOnPress: c,
          ref: t
        }), {
          focusableProps: b
        } = ft(e, t);
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
      var nn = n(12176);

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
        un = e => {
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
            for (var [u, c] of e.compoundVariants) ln(u, r, e.defaultVariants) && (n += " " + c);
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
        cn = un({
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
        dn = un({
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
      const fn = (0, f.forwardRef)((({
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
          size: h = "MD",
          fullWidth: p = !1,
          ...g
        }, v) => {
          const y = (0, f.useRef)(null),
            b = (0, U.UP)(y, v),
            _ = (0, nn.zQ)(),
            w = "string" == typeof h ? h : h?.[_] ?? h.default ?? "MD",
            {
              events: E,
              others: j
            } = (0, d.bZ)(g, {
              onPress: !1
            }),
            {
              buttonProps: k,
              isPressed: x
            } = tn({
              ...j,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => j.onPress?.(e) ?? o?.(e)
            }, y),
            S = (0, d.v6)({
              ...E,
              role: "button",
              "data-pressed": x,
              "data-testid": e,
              className: cn({
                appearance: u,
                size: w,
                fullWidth: p,
                iconLeft: !!i,
                iconRight: !!s
              })
            }, {
              ...k,
              className: n
            }),
            P = i && z[i],
            C = s && z[s],
            T = t ? m.DX : "button",
            O = p && (C || C && P);
          return (0, c.jsxs)(T, {
            ref: b,
            ...S,
            children: [O && (0, c.jsx)("div", {
              className: "foundry_nk7jgu_17pcofyq"
            }), P && (0, c.jsx)(P, {
              label: a || "",
              size: w,
              className: "foundry_nk7jgu_17pcofym"
            }), (0, c.jsx)(m.xV, {
              children: r
            }), C && (0, c.jsx)(C, {
              label: l || "",
              size: w,
              className: dn({
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

      function pn(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * n) : e * t * n / (t + n * e)
      }

      function mn(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .15;
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
      const En = ["gotpointercapture", "lostpointercapture"];

      function jn(e) {
        let t = e.substring(2).toLowerCase();
        const n = !!~t.indexOf("passive");
        n && (t = t.replace("passive", ""));
        const r = En.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(r);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: n
        }
      }

      function kn(e) {
        return "touches" in e
      }

      function xn(e) {
        return kn(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Sn(e) {
        return kn(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Pn(e, t) {
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

      function Cn(e, t) {
        const [n, r] = Array.from(e.touches).filter((e => t.includes(e.identifier)));
        return Pn(n, r)
      }

      function Tn(e) {
        const t = Sn(e);
        return kn(e) ? t.identifier : t.pointerId
      }

      function On(e) {
        const t = Sn(e);
        return [t.clientX, t.clientY]
      }

      function Nn(e) {
        let {
          deltaX: t,
          deltaY: n,
          deltaMode: r
        } = e;
        return 1 === r ? (t *= 40, n *= 40) : 2 === r && (t *= 800, n *= 800), [t, n]
      }

      function Rn(e) {
        if ("function" == typeof e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return e(...n)
        }
        return e
      }

      function Ln() {}

      function An() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length ? Ln : 1 === t.length ? t[0] : function() {
          let e;
          for (const n of t) e = n.apply(this, arguments) || e;
          return e
        }
      }

      function In(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Mn {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = n.from ? Rn(n.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
          const f = t.offset,
            h = t._active && !t._blocked || t.active;
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = r[this.ingKey] = t._active, e && (t.first && ("bounds" in n && (t._bounds = Rn(n.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
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
              return [mn(r, s, l, i), mn(o, u, c, a)]
            }(t._bounds, t.offset, _), t.delta = hn.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = hn.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            hn.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
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
      class Dn extends Mn {
        constructor() {
          super(...arguments), gn(this, "aliasKey", "xy")
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
            const r = "object" == typeof n.axisThreshold ? n.axisThreshold[xn(e)] : n.axisThreshold;
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
      const Hn = e => e,
        Bn = {
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          eventOptions: (e, t, n) => yn(yn({}, n.shared.eventOptions), e),
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
                return hn.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? hn.toVector(e) : void 0,
          transform(e, t, n) {
            const r = e || n.shared.transform;
            return this.hasCustomTransform = !!r, r || Hn
          },
          threshold: e => hn.toVector(e, 0)
        },
        Fn = yn(yn({}, Bn), {}, {
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
        qn = .5,
        Xn = 50,
        Kn = 250,
        Wn = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        $n = yn(yn({}, Fn), {}, {
          device(e, t, n) {
            let {
              pointer: {
                touch: r = !1,
                lock: o = !1,
                mouse: i = !1
              } = {}
            } = n;
            return this.pointerLock = o && Gn.pointerLock, Gn.touch && r ? "touch" : this.pointerLock ? "mouse" : Gn.pointer && !i ? "pointer" : Gn.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, n) {
            let {
              preventScroll: r
            } = n;
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Gn.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const a = hn.toVector(e, r ? o : i ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = o, a
          },
          swipe() {
            let {
              velocity: e = qn,
              distance: t = Xn,
              duration: n = Kn
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
              velocity: this.transform(hn.toVector(e)),
              distance: this.transform(hn.toVector(t)),
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
          axisThreshold: e => e ? yn(yn({}, Wn), e) : Wn,
          keyboardDisplacement() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10
          }
        });

      function Yn(e) {
        const [t, n] = e.overflow, [r, o] = e._delta, [i, a] = e._direction;
        (t < 0 && r > 0 && i < 0 || t > 0 && r < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (n < 0 && o > 0 && a < 0 || n > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Zn = yn(yn({}, Bn), {}, {
          device(e, t, n) {
            let {
              shared: r,
              pointer: {
                touch: o = !1
              } = {}
            } = n;
            if (r.target && !Gn.touch && Gn.gesture) return "gesture";
            if (Gn.touch && o) return "touch";
            if (Gn.touchscreen) {
              if (Gn.pointer) return "pointer";
              if (Gn.touch) return "touch"
            }
          },
          bounds(e, t, n) {
            let {
              scaleBounds: r = {},
              angleBounds: o = {}
            } = n;
            const i = e => {
                const t = In(Rn(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              a = e => {
                const t = In(Rn(o, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof o ? [i(), a()] : e => [i(e), a(e)]
          },
          threshold(e, t, n) {
            return this.lockDirection = "lock" === n.axis, hn.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        Qn = yn(yn({}, Fn), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        Jn = Fn,
        er = Fn,
        tr = yn(yn({}, Fn), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        nr = new Map,
        rr = new Map;

      function or(e) {
        nr.set(e.key, e.engine), rr.set(e.key, e.resolver)
      }
      const ir = {
          key: "drag",
          engine: class extends Dn {
            constructor() {
              super(...arguments), gn(this, "ingKey", "dragging")
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && n._pointerActive || (this.start(e), this.setupPointer(e), n._pointerId = Tn(e), n._pointerActive = !0, this.computeValues(On(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== xn(e) ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                n = this.config;
              if (!t._pointerActive) return;
              const r = Tn(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              const o = On(e);
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
              const r = Tn(e);
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
          resolver: $n
        },
        ar = {
          key: "hover",
          engine: class extends Dn {
            constructor() {
              super(...arguments), gn(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(On(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const n = On(e);
              t._movement = t._delta = hn.sub(n, t._values), this.computeValues(n), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: tr
        },
        sr = {
          key: "move",
          engine: class extends Dn {
            constructor() {
              super(...arguments), gn(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(On(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = On(e),
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
          resolver: Qn
        },
        lr = {
          key: "pinch",
          engine: class extends Mn {
            constructor() {
              super(...arguments), gn(this, "ingKey", "pinching"), gn(this, "aliasKey", "da")
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
              const r = Cn(e, t._touchIds);
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
              const o = Pn(...Array.from(n.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = Cn(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const n = Pn(...Array.from(t.values()));
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
              t._delta = [-Nn(e)[1] / 100 * t.offset[0], 0], hn.addTo(t._movement, t._delta), Yn(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Zn
        },
        ur = {
          key: "scroll",
          engine: class extends Dn {
            constructor() {
              super(...arguments), gn(this, "ingKey", "scrolling")
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
          resolver: Jn
        },
        cr = {
          key: "wheel",
          engine: class extends Dn {
            constructor() {
              super(...arguments), gn(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Nn(e), hn.addTo(t._movement, t._delta), Yn(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: er
        };
      const dr = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          window() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gn.isBrowser ? window : void 0
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
        fr = ["target", "eventOptions", "window", "enabled", "transform"];

      function hr() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        const n = {};
        for (const [r, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            n[r] = o.call(n, e[r], r, e);
            break;
          case "object":
            n[r] = hr(e[r], o);
            break;
          case "boolean":
            o && (n[r] = e[r])
        }
        return n
      }
      class pr {
        constructor(e, t) {
          gn(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, n, r, o) {
          const i = this._listeners,
            a = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
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
      class mr {
        constructor() {
          gn(this, "_timeouts", new Map)
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
      class gr {
        constructor(e) {
          var t, n;
          gn(this, "gestures", new Set), gn(this, "_targetEventStore", new pr(this)), gn(this, "gestureEventStores", {}), gn(this, "gestureTimeoutStores", {}), gn(this, "handlers", {}), gn(this, "config", {}), gn(this, "pointerIds", new Set), gn(this, "touchIds", new Set), gn(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (n = e).drag && vr(t, "drag"), n.wheel && vr(t, "wheel"), n.scroll && vr(t, "scroll"), n.move && vr(t, "move"), n.pinch && vr(t, "pinch"), n.hover && vr(t, "hover")
        }
        setEventIds(e) {
          return kn(e) ? (this.touchIds = new Set(function(e) {
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
              }(r, fr);
            if (n.shared = hr({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              }, dr), t) {
              const e = rr.get(t);
              n[t] = hr(yn({
                shared: n.shared
              }, u), e)
            } else
              for (const e in u) {
                const t = rr.get(e);
                t && (n[e] = hr(yn({
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
                  r = yr(o, n.eventOptions, !!i);
                n.enabled && new(nr.get(e))(this, t, e).bind(r)
              }
              const e = yr(o, r.eventOptions, !!i);
              for (const n in this.nativeHandlers) e(n, "", (e => this.nativeHandlers[n](yn(yn({}, this.state.shared), {}, {
                event: e,
                args: t
              }))), void 0, !0)
            }
            for (const e in o) o[e] = An(...o[e]);
            if (!i) return o;
            for (const e in o) {
              const {
                device: t,
                capture: n,
                passive: r
              } = jn(e);
              this._targetEventStore.add(i, t, "", o[e], {
                capture: n,
                passive: r
              })
            }
          }
        }
      }

      function vr(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new pr(e, t), e.gestureTimeoutStores[t] = new mr
      }
      const yr = (e, t, n) => function(r, o, i) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          var l, u;
          const c = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            d = null !== (u = a.passive) && void 0 !== u ? u : t.passive;
          let f = s ? r : function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const r = bn[e],
              o = r && r[t] || t;
            return "on" + _n(e) + _n(o) + (function() {
              let e = arguments.length > 1 ? arguments[1] : void 0;
              return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && !wn.includes(e)
            }(n, o) ? "Capture" : "")
          }(r, o, c);
          n && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        br = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function _r(e, t, n, r, o, i) {
        if (!e.has(n)) return;
        if (!nr.has(r)) return;
        const a = n + "Start",
          s = n + "End";
        o[r] = e => {
          let r;
          return e.first && a in t && t[a](e), n in t && (r = t[n](e)), e.last && s in t && t[s](e), r
        }, i[r] = i[r] || {}
      }

      function wr(e, t) {
        const n = ([ir, lr, ur, cr, sr, ar].forEach(or), function(e, t) {
          const {
            handlers: n,
            nativeHandlers: r,
            config: o
          } = function(e, t) {
            const [n, r, o] = function(e) {
              const t = {},
                n = {},
                r = new Set;
              for (let o in e) br.test(o) ? (r.add(RegExp.lastMatch), n[o] = e[o]) : t[o] = e[o];
              return [n, t, r]
            }(e), i = {};
            return _r(o, n, "onDrag", "drag", i, t), _r(o, n, "onWheel", "wheel", i, t), _r(o, n, "onScroll", "scroll", i, t), _r(o, n, "onPinch", "pinch", i, t), _r(o, n, "onMove", "move", i, t), _r(o, n, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: r
            }
          }(e, t || {});
          return function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = arguments.length > 3 ? arguments[3] : void 0;
            const o = p().useMemo((() => new gr(e)), []);
            if (o.applyHandlers(e, r), o.applyConfig(t, n), p().useEffect(o.effect.bind(o)), p().useEffect((() => o.clean.bind(o)), []), void 0 === t.target) return o.bind.bind(o)
          }(n, o, void 0, r)
        });
        return n(e, t || {})
      }
      var Er = Hr(),
        jr = e => Ar(e, Er),
        kr = Hr();
      jr.write = e => Ar(e, kr);
      var xr = Hr();
      jr.onStart = e => Ar(e, xr);
      var Sr = Hr();
      jr.onFrame = e => Ar(e, Sr);
      var Pr = Hr();
      jr.onFinish = e => Ar(e, Pr);
      var Cr = [];
      jr.setTimeout = (e, t) => {
        const n = jr.now() + t,
          r = () => {
            const e = Cr.findIndex((e => e.cancel == r));
            ~e && Cr.splice(e, 1), Rr -= ~e ? 1 : 0
          },
          o = {
            time: n,
            handler: e,
            cancel: r
          };
        return Cr.splice(Tr(n), 0, o), Rr += 1, Ir(), o
      };
      var Tr = e => ~(~Cr.findIndex((t => t.time > e)) || ~Cr.length);
      jr.cancel = e => {
        xr.delete(e), Sr.delete(e), Pr.delete(e), Er.delete(e), kr.delete(e)
      }, jr.sync = e => {
        Lr = !0, jr.batchedUpdates(e), Lr = !1
      }, jr.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, jr.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          xr.delete(n), t = null
        }, r
      };
      var Or = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      jr.use = e => Or = e, jr.now = "undefined" != typeof performance ? () => performance.now() : Date.now, jr.batchedUpdates = e => e(), jr.catch = console.error, jr.frameLoop = "always", jr.advance = () => {
        "demand" !== jr.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Dr()
      };
      var Nr = -1,
        Rr = 0,
        Lr = !1;

      function Ar(e, t) {
        Lr ? (t.delete(e), e(0)) : (t.add(e), Ir())
      }

      function Ir() {
        Nr < 0 && (Nr = 0, "demand" !== jr.frameLoop && Or(Mr))
      }

      function Mr() {
        ~Nr && (Or(Mr), jr.batchedUpdates(Dr))
      }

      function Dr() {
        const e = Nr;
        Nr = jr.now();
        const t = Tr(Nr);
        t && (Br(Cr.splice(0, t), (e => e.handler())), Rr -= t), Rr ? (xr.flush(), Er.flush(e ? Math.min(64, Nr - e) : 16.667), Sr.flush(), kr.flush(), Pr.flush()) : Nr = -1
      }

      function Hr() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            Rr += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (Rr -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, Rr -= t.size, Br(t, (t => t(n) && e.add(t))), Rr += e.size, t = e)
          }
        }
      }

      function Br(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            jr.catch(e)
          }
        }))
      }
      var Fr = Object.defineProperty,
        Vr = {};

      function zr() {}((e, t) => {
        for (var n in t) Fr(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(Vr, {
        assign: () => no,
        colors: () => Jr,
        createStringInterpolator: () => $r,
        skipAnimation: () => eo,
        to: () => Yr,
        willAdvance: () => to
      });
      var Ur = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Gr(e, t) {
        if (Ur.arr(e)) {
          if (!Ur.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var qr = (e, t) => e.forEach(t);

      function Xr(e, t, n) {
        if (Ur.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      var Kr = e => Ur.und(e) ? [] : Ur.arr(e) ? e : [e];

      function Wr(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), qr(n, t)
        }
      }
      var $r, Yr, Zr = (e, ...t) => Wr(e, (e => e(...t))),
        Qr = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Jr = null,
        eo = !1,
        to = zr,
        no = e => {
          e.to && (Yr = e.to), e.now && (jr.now = e.now), void 0 !== e.colors && (Jr = e.colors), null != e.skipAnimation && (eo = e.skipAnimation), e.createStringInterpolator && ($r = e.createStringInterpolator), e.requestAnimationFrame && jr.use(e.requestAnimationFrame), e.batchedUpdates && (jr.batchedUpdates = e.batchedUpdates), e.willAdvance && (to = e.willAdvance), e.frameLoop && (jr.frameLoop = e.frameLoop)
        },
        ro = new Set,
        oo = [],
        io = [],
        ao = 0,
        so = {
          get idle() {
            return !ro.size && !oo.length
          },
          start(e) {
            ao > e.priority ? (ro.add(e), jr.onStart(lo)) : (uo(e), jr(fo))
          },
          advance: fo,
          sort(e) {
            if (ao) jr.onFrame((() => so.sort(e)));
            else {
              const t = oo.indexOf(e);
              ~t && (oo.splice(t, 1), co(e))
            }
          },
          clear() {
            oo = [], ro.clear()
          }
        };

      function lo() {
        ro.forEach(uo), ro.clear(), jr(fo)
      }

      function uo(e) {
        oo.includes(e) || co(e)
      }

      function co(e) {
        oo.splice(function(t) {
          const n = t.findIndex((t => t.priority > e.priority));
          return n < 0 ? t.length : n
        }(oo), 0, e)
      }

      function fo(e) {
        const t = io;
        for (let n = 0; n < oo.length; n++) {
          const r = oo[n];
          ao = r.priority, r.idle || (to(r), r.advance(e), r.idle || t.push(r))
        }
        return ao = 0, (io = oo).length = 0, (oo = t).length > 0
      }
      var ho = "[-+]?\\d*\\.?\\d+",
        po = ho + "%";

      function mo(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var go = new RegExp("rgb" + mo(ho, ho, ho)),
        vo = new RegExp("rgba" + mo(ho, ho, ho, ho)),
        yo = new RegExp("hsl" + mo(ho, po, po)),
        bo = new RegExp("hsla" + mo(ho, po, po, ho)),
        _o = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        wo = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Eo = /^#([0-9a-fA-F]{6})$/,
        jo = /^#([0-9a-fA-F]{8})$/;

      function ko(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function xo(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = ko(o, r, e + 1 / 3),
          a = ko(o, r, e),
          s = ko(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function So(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Po(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Co(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function To(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Oo(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Eo.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Jr && void 0 !== Jr[e] ? Jr[e] : (t = go.exec(e)) ? (So(t[1]) << 24 | So(t[2]) << 16 | So(t[3]) << 8 | 255) >>> 0 : (t = vo.exec(e)) ? (So(t[1]) << 24 | So(t[2]) << 16 | So(t[3]) << 8 | Co(t[4])) >>> 0 : (t = _o.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = jo.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = wo.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = yo.exec(e)) ? (255 | xo(Po(t[1]), To(t[2]), To(t[3]))) >>> 0 : (t = bo.exec(e)) ? (xo(Po(t[1]), To(t[2]), To(t[3])) | Co(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var No = (e, t, n) => {
          if (Ur.fun(e)) return e;
          if (Ur.arr(e)) return No({
            range: e,
            output: t,
            extrapolate: n
          });
          if (Ur.str(e.output[0])) return $r(e);
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
        Ro = 1.70158,
        Lo = 1.525 * Ro,
        Ao = Ro + 1,
        Io = 2 * Math.PI / 3,
        Mo = 2 * Math.PI / 4.5,
        Do = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        Ho = {
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
          easeInBack: e => Ao * e * e * e - Ro * e * e,
          easeOutBack: e => 1 + Ao * Math.pow(e - 1, 3) + Ro * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Lo) / 2 : (Math.pow(2 * e - 2, 2) * ((Lo + 1) * (2 * e - 2) + Lo) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Io),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Io) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Mo) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Mo) / 2 + 1,
          easeInBounce: e => 1 - Do(1 - e),
          easeOutBounce: Do,
          easeInOutBounce: e => e < .5 ? (1 - Do(1 - 2 * e)) / 2 : (1 + Do(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return ((e, t, n) => Math.min(Math.max(n, 0), 1))(0, 0, ("end" === t ? Math.floor(r) : Math.ceil(r)) / e)
          }
        },
        Bo = Symbol.for("FluidValue.get"),
        Fo = Symbol.for("FluidValue.observers"),
        Vo = e => Boolean(e && e[Bo]),
        zo = e => e && e[Bo] ? e[Bo]() : e,
        Uo = e => e[Fo] || null;

      function Go(e, t) {
        const n = e[Fo];
        n && n.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var qo = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Xo(this, e)
          }
        },
        Xo = (e, t) => Yo(e, Bo, t);

      function Ko(e, t) {
        if (e[Bo]) {
          let n = e[Fo];
          n || Yo(e, Fo, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function Wo(e, t) {
        const n = e[Fo];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[Fo] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      var $o, Yo = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        Zo = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Qo = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Jo = new RegExp(`(${Zo.source})(%|[a-z]+)`, "i"),
        ei = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        ti = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        ni = e => {
          const [t, n] = ri(e);
          if (!t || Qr()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && ti.test(n) ? ni(n) : n || e
        },
        ri = e => {
          const t = ti.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        },
        oi = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        ii = e => {
          $o || ($o = Jr ? new RegExp(`(${Object.keys(Jr).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => zo(e).replace(ti, ni).replace(Qo, Oo).replace($o, Oo))),
            n = t.map((e => e.match(Zo).map(Number))),
            r = n[0].map(((e, t) => n.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))),
            o = r.map((t => No({
              ...e,
              output: t
            })));
          return e => {
            const n = !Jo.test(t[0]) && t.find((e => Jo.test(e)))?.replace(Zo, "");
            let r = 0;
            return t[0].replace(Zo, (() => `${o[r++](e)}${n||""}`)).replace(ei, oi)
          }
        },
        ai = "react-spring: ",
        si = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${ai}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        li = si(console.warn),
        ui = si(console.warn);

      function ci(e) {
        return Ur.str(e) && ("#" == e[0] || /\d/.test(e) || !Qr() && ti.test(e) || e in (Jr || {}))
      }
      var di = Qr() ? f.useEffect : f.useLayoutEffect;

      function fi() {
        const e = (0, f.useState)()[1],
          t = (() => {
            const e = (0, f.useRef)(!1);
            return di((() => (e.current = !0, () => {
              e.current = !1
            })), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var hi = e => (0, f.useEffect)(e, pi),
        pi = [];

      function mi(e) {
        const t = (0, f.useRef)();
        return (0, f.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var gi = Symbol.for("Animated:node"),
        vi = e => e && e[gi],
        yi = (e, t) => {
          return n = e, r = gi, o = t, Object.defineProperty(n, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var n, r, o
        },
        bi = e => e && e[gi] && e[gi].getPayload(),
        _i = class {
          constructor() {
            yi(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        wi = class extends _i {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Ur.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new wi(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return Ur.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Ur.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Ei = class extends wi {
          constructor(e) {
            super(0), this._string = null, this._toString = No({
              output: [e, e]
            })
          }
          static create(e) {
            return new Ei(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (Ur.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = No({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        ji = {
          dependencies: null
        },
        ki = class extends _i {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Xr(this.source, ((n, r) => {
              var o;
              (o = n) && o[gi] === o ? t[r] = n.getValue(e) : Vo(n) ? t[r] = zo(n) : e || (t[r] = n)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && qr(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Xr(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            ji.dependencies && Vo(e) && ji.dependencies.add(e);
            const t = bi(e);
            t && qr(t, (e => this.add(e)))
          }
        },
        xi = class extends ki {
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
            return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(Si)), !0)
          }
        };

      function Si(e) {
        return (ci(e) ? Ei : wi).create(e)
      }

      function Pi(e) {
        const t = vi(e);
        return t ? t.constructor : Ur.arr(e) ? xi : ci(e) ? Ei : wi
      }
      var Ci = (e, t) => {
          const n = !Ur.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, f.forwardRef)(((r, o) => {
            const i = (0, f.useRef)(null),
              a = n && (0, f.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (Ur.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [s, l] = function(e, t) {
                const n = new Set;
                return ji.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new ki(e), ji.dependencies = null, [e, n]
              }(r, t),
              u = fi(),
              c = () => {
                const e = i.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && u()
              },
              d = new Ti(c, l),
              h = (0, f.useRef)();
            di((() => (h.current = d, qr(l, (e => Ko(e, d))), () => {
              h.current && (qr(h.current.deps, (e => Wo(e, h.current))), jr.cancel(h.current.update))
            }))), (0, f.useEffect)(c, []), hi((() => () => {
              const e = h.current;
              qr(e.deps, (t => Wo(t, e)))
            }));
            const p = t.getComponentProps(s.getValue());
            return f.createElement(e, {
              ...p,
              ref: a
            })
          }))
        },
        Ti = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && jr.write(this.update)
          }
        },
        Oi = Symbol.for("AnimatedComponent"),
        Ni = e => Ur.str(e) ? e : e && Ur.str(e.displayName) ? e.displayName : Ur.fun(e) && e.name || null;

      function Ri(e, ...t) {
        return Ur.fun(e) ? e(...t) : e
      }
      var Li = (e, t) => !0 === e || !!(t && e && (Ur.fun(e) ? e(t) : Kr(e).includes(t))),
        Ai = (e, t) => Ur.obj(e) ? t && e[t] : e,
        Ii = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Mi = e => e,
        Di = (e, t = Mi) => {
          let n = Hi;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const o of n) {
            const n = t(e[o], o);
            Ur.und(n) || (r[o] = n)
          }
          return r
        },
        Hi = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Bi = {
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

      function Fi(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (Xr(e, ((e, r) => {
              Bi[r] || (t[r] = e, n++)
            })), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return Xr(e, ((e, r) => r in t || (n[r] = e))), n
        }
        return {
          ...e
        }
      }

      function Vi(e) {
        return e = zo(e), Ur.arr(e) ? e.map(Vi) : ci(e) ? Vr.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function zi(e) {
        for (const t in e) return !0;
        return !1
      }

      function Ui(e) {
        return Ur.fun(e) || Ur.arr(e) && Ur.obj(e[0])
      }

      function Gi(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function qi(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }
      var Xi = {
          tension: 170,
          friction: 26
        },
        Ki = {
          ...Xi,
          mass: 1,
          damping: 1,
          easing: Ho.linear,
          clamp: !1
        },
        Wi = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Ki)
          }
        };

      function $i(e, t) {
        if (Ur.und(t.decay)) {
          const n = !Ur.und(t.tension) || !Ur.und(t.friction);
          !n && Ur.und(t.frequency) && Ur.und(t.damping) && Ur.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Yi = [],
        Zi = class {
          constructor() {
            this.changed = !1, this.values = Yi, this.toValues = null, this.fromValues = Yi, this.config = new Wi, this.immediate = !1
          }
        };

      function Qi(e, {
        key: t,
        props: n,
        defaultProps: r,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, u, c = Li(n.cancel ?? r?.cancel, t);
          if (c) h();
          else {
            Ur.und(n.pause) || (o.paused = Li(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = o.paused || Li(e, t)), l = Ri(n.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(u), u.cancel(), l = u.time - jr.now()
          }

          function f() {
            l > 0 && !Vr.skipAnimation ? (o.delayed = !0, u = jr.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(u)) : h()
          }

          function h() {
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
      var Ji = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? na(e.get()) : t.every((e => e.noop)) ? ea(e.get()) : ta(e.get(), t.every((e => e.finished))),
        ea = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        ta = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        na = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function ra(e, t, n, r) {
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
          const u = Di(t, ((e, t) => "onRest" === t ? void 0 : e));
          let c, d;
          const f = new Promise(((e, t) => (c = e, d = t))),
            h = e => {
              const t = o <= (n.cancelId || 0) && na(r) || o !== n.asyncId && ta(r, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new ia,
                a = new aa;
              return (async () => {
                if (Vr.skipAnimation) throw oa(n), a.result = ta(r, !1), d(a), a;
                h(i);
                const s = Ur.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Xr(u, ((e, t) => {
                  Ur.und(s[t]) && (s[t] = e)
                }));
                const l = await r.start(s);
                return h(i), n.paused && await new Promise((e => {
                  n.resumeQueue.add(e)
                })), l
              })()
            };
          let m;
          if (Vr.skipAnimation) return oa(n), ta(r, !1);
          try {
            let t;
            t = Ur.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, r.stop.bind(r))), await Promise.all([t.then(c), f]), m = ta(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof ia) m = e.result;
            else {
              if (!(e instanceof aa)) throw e;
              m = e.result
            }
          } finally {
            o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? l : void 0)
          }
          return Ur.fun(a) && jr.batchedUpdates((() => {
            a(m, r, r.item)
          })), m
        })() : l
      }

      function oa(e, t) {
        Wr(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var ia = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        aa = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        sa = e => e instanceof ua,
        la = 1,
        ua = class extends qo {
          constructor() {
            super(...arguments), this.id = la++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = vi(this);
            return e && e.getValue()
          }
          to(...e) {
            return Vr.to(this, e)
          }
          interpolate(...e) {
            return li(`${ai}The "interpolate" function is deprecated in v9 (use "to" instead)`), Vr.to(this, e)
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
            Go(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || so.sort(this), Go(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        ca = Symbol.for("SpringPhase"),
        da = e => (1 & e[ca]) > 0,
        fa = e => (2 & e[ca]) > 0,
        ha = e => (4 & e[ca]) > 0,
        pa = (e, t) => t ? e[ca] |= 3 : e[ca] &= -3,
        ma = (e, t) => t ? e[ca] |= 4 : e[ca] &= -5,
        ga = class extends ua {
          constructor(e, t) {
            if (super(), this.animation = new Zi, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Ur.und(e) || !Ur.und(t)) {
              const n = Ur.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Ur.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(fa(this) || this._state.asyncTo) || ha(this)
          }
          get goal() {
            return zo(this.animation.to)
          }
          get velocity() {
            const e = vi(this);
            return e instanceof wi ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return da(this)
          }
          get isAnimating() {
            return fa(this)
          }
          get isPaused() {
            return ha(this)
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
            } = r, a = bi(r.to);
            !a && Vo(r.to) && (o = Kr(zo(r.to))), r.values.forEach(((s, l) => {
              if (s.done) return;
              const u = s.constructor == Ei ? 1 : a ? a[l].lastPosition : o[l];
              let c = r.immediate,
                d = u;
              if (!c) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const n = r.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = Ur.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const f = i.precision || (n == u ? .005 : Math.min(1, .001 * Math.abs(u - n)));
                if (Ur.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * t);
                    d = n + o / (1 - e) * (1 - r), c = Math.abs(s.lastPosition - d) <= f, a = o * r
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      r = i.clamp ? 0 : i.bounce,
                      l = !Ur.und(r),
                      h = n == u ? s.v0 > 0 : n < u;
                    let p, m = !1;
                    const g = 1,
                      v = Math.ceil(e / g);
                    for (let e = 0; e < v && (p = Math.abs(a) > t, p || (c = Math.abs(u - d) <= f, !c)); ++e) l && (m = d == u || d > u == h, m && (a = -a * r, d = u)), a += (1e-6 * -i.tension * (d - u) + .001 * -i.friction * a) / i.mass * g, d += a * g
                  }
                else {
                  let r = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, s.durationProgress > 0 && (s.elapsedTime = i.duration * s.durationProgress, t = s.elapsedTime += e)), r = (i.progress || 0) + t / this._memoizedDuration, r = r > 1 ? 1 : r < 0 ? 0 : r, s.durationProgress = r), d = n + i.easing(r) * (u - n), a = (d - s.lastPosition) / e, c = 1 == r
                }
                s.lastVelocity = a, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), c = !0)
              }
              a && !a[l].done && (c = !1), c ? s.done = !0 : t = !1, s.setValue(d, i.round) && (n = !0)
            }));
            const s = vi(this),
              l = s.getValue();
            if (t) {
              const e = zo(r.to);
              l === e && !n || i.decay ? n && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(l)
          }
          set(e) {
            return jr.batchedUpdates((() => {
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
            if (fa(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              jr.batchedUpdates((() => {
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
            return Ur.und(e) ? (n = this.queue || [], this.queue = []) : n = [Ur.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map((e => this._update(e)))).then((e => Ji(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), oa(this._state, e && this._lastCallId), jr.batchedUpdates((() => this._stop(t, e))), this
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
            n = Ur.obj(n) ? n[t] : n, (null == n || Ui(n)) && (n = void 0), r = Ur.obj(r) ? r[t] : r, null == r && (r = void 0);
            const o = {
              to: n,
              from: r
            };
            return da(this) || (e.reverse && ([n, r] = [r, n]), r = zo(r), Ur.und(r) ? vi(this) || this._set(n) : this._set(r)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, Di(e, ((e, t) => /^on/.test(t) ? Ai(e, n) : e))), ja(this, e, "onProps"), ka(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Qi(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: i,
              actions: {
                pause: () => {
                  ha(this) || (ma(this, !0), Zr(i.pauseQueue), ka(this, "onPause", ta(this, va(this, this.animation.to)), this))
                },
                resume: () => {
                  ha(this) && (ma(this, !1), fa(this) && this._resume(), Zr(i.resumeQueue), ka(this, "onResume", ta(this, va(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = ya(e);
                if (t) return this._update(t, !0)
              }
              return n
            }))
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(na(this));
            const r = !Ur.und(e.to),
              o = !Ur.und(e.from);
            if (r || o) {
              if (!(t.callId > this._lastToId)) return n(na(this));
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
            !o || r || t.default && !Ur.und(c) || (c = d), t.reverse && ([c, d] = [d, c]);
            const f = !Gr(d, u);
            f && (s.from = d), d = zo(d);
            const h = !Gr(c, l);
            h && this._focus(c);
            const p = Ui(t.to),
              {
                config: m
              } = s,
              {
                decay: g,
                velocity: v
              } = m;
            (r || o) && (m.velocity = 0), t.config && !p && function(e, t, n) {
              n && ($i(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), $i(e, t), Object.assign(e, t);
              for (const t in Ki) null == e[t] && (e[t] = Ki[t]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              Ur.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
            }(m, Ri(t.config, i), t.config !== a.config ? Ri(a.config, i) : void 0);
            let y = vi(this);
            if (!y || Ur.und(c)) return n(ta(this, !0));
            const b = Ur.und(t.reset) ? o && !t.default : !Ur.und(d) && Li(t.reset, i),
              _ = b ? d : this.get(),
              w = Vi(c),
              E = Ur.num(w) || Ur.arr(w) || ci(w),
              j = !p && (!E || Li(a.immediate || t.immediate, i));
            if (h) {
              const e = Pi(c);
              if (e !== y.constructor) {
                if (!j) throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);
                y = this._set(w)
              }
            }
            const k = y.constructor;
            let x = Vo(c),
              S = !1;
            if (!x) {
              const e = b || !da(this) && f;
              (h || e) && (S = Gr(Vi(_), w), x = !S), (Gr(s.immediate, j) || j) && Gr(m.decay, g) && Gr(m.velocity, v) || (x = !0)
            }
            if (S && fa(this) && (s.changed && !b ? x = !0 : x || this._stop(l)), !p && ((x || Vo(l)) && (s.values = y.getPayload(), s.toValues = Vo(c) ? null : k == Ei ? [1] : Kr(w)), s.immediate != j && (s.immediate = j, j || b || this._set(l)), x)) {
              const {
                onRest: e
              } = s;
              qr(Ea, (e => ja(this, t, e)));
              const r = ta(this, va(this, l));
              Zr(this._pendingCalls, r), this._pendingCalls.add(n), s.changed && jr.batchedUpdates((() => {
                s.changed = !b, e?.(r, this), b ? Ri(a.onRest, r) : s.onStart?.(r, this)
              }))
            }
            b && this._set(_), p ? n(ra(t.to, t, this._state, this)) : x ? this._start() : fa(this) && !h ? this._pendingCalls.add(n) : n(ea(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Uo(this) && this._detach(), t.to = e, Uo(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Vo(t) && (Ko(t, this), sa(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Vo(e) && Wo(e, this)
          }
          _set(e, t = !0) {
            const n = zo(e);
            if (!Ur.und(n)) {
              const e = vi(this);
              if (!e || !Gr(n, e.getValue())) {
                const r = Pi(n);
                e && e.constructor == r ? e.setValue(n) : yi(this, r.create(n)), e && jr.batchedUpdates((() => {
                  this._onChange(n, t)
                }))
              }
            }
            return vi(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, ka(this, "onStart", ta(this, va(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Ri(this.animation.onChange, e, this)), Ri(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            vi(this).reset(zo(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), fa(this) || (pa(this, !0), ha(this) || this._resume())
          }
          _resume() {
            Vr.skipAnimation ? this.finish() : so.start(this)
          }
          _stop(e, t) {
            if (fa(this)) {
              pa(this, !1);
              const n = this.animation;
              qr(n.values, (e => {
                e.done = !0
              })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Go(this, {
                type: "idle",
                parent: this
              });
              const r = t ? na(this.get()) : ta(this.get(), va(this, e ?? n.to));
              Zr(this._pendingCalls, r), n.changed && (n.changed = !1, ka(this, "onRest", r, this))
            }
          }
        };

      function va(e, t) {
        const n = Vi(t);
        return Gr(Vi(e.get()), n)
      }

      function ya(e, t = e.loop, n = e.to) {
        const r = Ri(t);
        if (r) {
          const o = !0 !== r && Fi(r),
            i = (o || e).reverse,
            a = !o || o.reset;
          return ba({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Ui(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function ba(e) {
        const {
          to: t,
          from: n
        } = e = Fi(e), r = new Set;
        return Ur.obj(t) && wa(t, r), Ur.obj(n) && wa(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function _a(e) {
        const t = ba(e);
        return Ur.und(t.default) && (t.default = Di(t)), t
      }

      function wa(e, t) {
        Xr(e, ((e, n) => null != e && t.add(n)))
      }
      var Ea = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function ja(e, t, n) {
        e.animation[n] = t[n] !== Ii(t, n) ? Ai(t[n], e.key) : void 0
      }

      function ka(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var xa = ["onStart", "onChange", "onRest"],
        Sa = 1,
        Pa = class {
          constructor(e, t) {
            this.id = Sa++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              Ur.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(ba(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Kr(e).map(ba) : this.queue = [], this._flush ? this._flush(this, t) : (Aa(this, t), Ca(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              qr(Kr(t), (t => n[t].stop(!!e)))
            } else oa(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (Ur.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              qr(Kr(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (Ur.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              qr(Kr(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            Xr(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, Wr(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !r && this._started,
              a = o || i && n.size ? this.get() : null;
            o && t.size && Wr(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, Wr(n, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            jr.onFrame(this._onFrame)
          }
        };

      function Ca(e, t) {
        return Promise.all(t.map((t => Ta(e, t)))).then((t => Ji(e, t)))
      }
      async function Ta(e, t, n) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, u = Ur.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const c = Ur.arr(o) || Ur.fun(o) ? o : void 0;
        c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : qr(xa, (n => {
          const r = t[n];
          if (Ur.fun(r)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, Zr(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (r || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
          h = !0 === t.cancel || !0 === Ii(t, "cancel");
        (c || h && d.asyncId) && f.push(Qi(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: zr,
            resume: zr,
            start(t, n) {
              h ? (oa(d, e._lastAsyncId), n(na(e))) : (t.onRest = s, n(ra(c, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = Ji(e, await Promise.all(f));
        if (a && p.finished && (!n || !p.noop)) {
          const n = ya(t, a, o);
          if (n) return Aa(e, [n]), Ta(e, n, !0)
        }
        return l && jr.batchedUpdates((() => l(p, e, e.item))), p
      }

      function Oa(e, t) {
        const n = {
          ...e.springs
        };
        return t && qr(Kr(t), (e => {
          Ur.und(e.keys) && (e = ba(e)), Ur.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), La(n, e, (e => Ra(e)))
        })), Na(e, n), n
      }

      function Na(e, t) {
        Xr(t, ((t, n) => {
          e.springs[n] || (e.springs[n] = t, Ko(t, e))
        }))
      }

      function Ra(e, t) {
        const n = new ga;
        return n.key = e, t && Ko(n, t), n
      }

      function La(e, t, n) {
        t.keys && qr(t.keys, (r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        }))
      }

      function Aa(e, t) {
        qr(t, (t => {
          La(e.springs, t, (t => Ra(t, e)))
        }))
      }
      var Ia, Ma, Da = ({
          children: e,
          ...t
        }) => {
          const n = (0, f.useContext)(Ha),
            r = t.pause || !!n.pause,
            o = t.immediate || !!n.immediate;
          t = function(e, t) {
            const [n] = (0, f.useState)((() => ({
              inputs: t,
              result: e()
            }))), r = (0, f.useRef)(), o = r.current;
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
            return (0, f.useEffect)((() => {
              r.current = i, o == n && (n.inputs = n.result = void 0)
            }), [i]), i.result
          }((() => ({
            pause: r,
            immediate: o
          })), [r, o]);
          const {
            Provider: i
          } = Ha;
          return f.createElement(i, {
            value: t
          }, e)
        },
        Ha = (Ia = Da, Ma = {}, Object.assign(Ia, f.createContext(Ma)), Ia.Provider._context = Ia, Ia.Consumer._context = Ia, Ia);
      Da.Provider = Ha.Provider, Da.Consumer = Ha.Consumer;
      var Ba = () => {
        const e = [],
          t = function(t) {
            ui(`${ai}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const r = [];
            return qr(e, ((e, o) => {
              if (Ur.und(t)) r.push(e.start());
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
          return qr(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return qr(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          qr(e, ((e, n) => {
            const r = Ur.fun(t) ? t(n, e) : t;
            r && e.set(r)
          }))
        }, t.start = function(t) {
          const n = [];
          return qr(e, ((e, r) => {
            if (Ur.und(t)) n.push(e.start());
            else {
              const o = this._getProps(t, e, r);
              o && n.push(e.start(o))
            }
          })), n
        }, t.stop = function() {
          return qr(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return qr(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
        };
        const n = function(e, t, n) {
          return Ur.fun(e) ? e(n, t) : e
        };
        return t._getProps = n, t
      };

      function Fa(e, t) {
        const n = Ur.fun(e),
          [
            [r], o
          ] = function(e, t, n) {
            const r = Ur.fun(t) && t;
            r && !n && (n = []);
            const o = (0, f.useMemo)((() => r || 3 == arguments.length ? Ba() : void 0), []),
              i = (0, f.useRef)(0),
              a = fi(),
              s = (0, f.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const n = Oa(e, t);
                  return i.current > 0 && !s.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? Ca(e, t) : new Promise((r => {
                    Na(e, n), s.queue.push((() => {
                      r(Ca(e, t))
                    })), a()
                  }))
                }
              })), []),
              l = (0, f.useRef)([...s.ctrls]),
              u = [],
              c = mi(e) || 0;

            function d(e, n) {
              for (let o = e; o < n; o++) {
                const e = l.current[o] || (l.current[o] = new Pa(null, s.flush)),
                  n = r ? r(o, e) : t[o];
                n && (u[o] = _a(n))
              }
            }(0, f.useMemo)((() => {
              qr(l.current.slice(e, c), (e => {
                Gi(e, o), e.stop(!0)
              })), l.current.length = e, d(c, e)
            }), [e]), (0, f.useMemo)((() => {
              d(0, Math.min(c, e))
            }), n);
            const h = l.current.map(((e, t) => Oa(e, u[t]))),
              p = (0, f.useContext)(Da),
              m = mi(p),
              g = p !== m && zi(p);
            di((() => {
              i.current++, s.ctrls = l.current;
              const {
                queue: e
              } = s;
              e.length && (s.queue = [], qr(e, (e => e()))), qr(l.current, ((e, t) => {
                o?.add(e), g && e.start({
                  default: p
                });
                const n = u[t];
                n && (qi(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
              }))
            })), hi((() => () => {
              qr(s.ctrls, (e => e.stop(!0)))
            }));
            const v = h.map((e => ({
              ...e
            })));
            return o ? [v, o] : v
          }(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [r, o] : r
      }
      var Va = () => Ba(),
        za = () => (0, f.useState)(Va)[0];
      var Ua = 1,
        Ga = class extends ua {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = No(...t);
            const n = this._get(),
              r = Pi(n);
            yi(this, r.create(n))
          }
          advance(e) {
            const t = this._get();
            Gr(t, this.get()) || (vi(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Xa(this._active) && Ka(this)
          }
          _get() {
            const e = Ur.arr(this.source) ? this.source.map(zo) : Kr(zo(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Xa(this._active) && (this.idle = !1, qr(bi(this), (e => {
              e.done = !1
            })), Vr.skipAnimation ? (jr.batchedUpdates((() => this.advance())), Ka(this)) : so.start(this))
          }
          _attach() {
            let e = 1;
            qr(Kr(this.source), (t => {
              Vo(t) && Ko(t, this), sa(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            qr(Kr(this.source), (e => {
              Vo(e) && Wo(e, this)
            })), this._active.clear(), Ka(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Kr(this.source).reduce(((e, t) => Math.max(e, (sa(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function qa(e) {
        return !1 !== e.idle
      }

      function Xa(e) {
        return !e.size || Array.from(e).every(qa)
      }

      function Ka(e) {
        e.idle || (e.idle = !0, qr(bi(e), (e => {
          e.done = !0
        })), Go(e, {
          type: "idle",
          parent: e
        }))
      }
      Vr.assign({
        createStringInterpolator: ii,
        to: (e, t) => new Ga(e, t)
      }), so.advance;
      var Wa = /^--/;

      function $a(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Wa.test(e) || Za.hasOwnProperty(e) && Za[e] ? ("" + t).trim() : t + "px"
      }
      var Ya = {},
        Za = {
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
        Qa = ["Webkit", "Ms", "Moz", "O"];
      Za = Object.keys(Za).reduce(((e, t) => (Qa.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), Za);
      var Ja = /^(matrix|translate|scale|rotate|skew)/,
        es = /^(translate)/,
        ts = /^(rotate|skew)/,
        ns = (e, t) => Ur.num(e) && 0 !== e ? e + t : e,
        rs = (e, t) => Ur.arr(e) ? e.every((e => rs(e, t))) : Ur.num(e) ? e === t : parseFloat(e) === t,
        os = class extends ki {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((e => [`translate3d(${e.map((e=>ns(e,"px"))).join(",")})`, rs(e, 0)]))), Xr(r, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (Ja.test(t)) {
                if (delete r[t], Ur.und(e)) return;
                const n = es.test(t) ? "px" : ts.test(t) ? "deg" : "";
                o.push(Kr(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${ns(o,n)})`, rs(o, 0)] : e => [`${t}(${e.map((e=>ns(e,n))).join(",")})`, rs(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new is(o, i)), super(r)
          }
        },
        is = class extends qo {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return qr(this.inputs, ((n, r) => {
              const o = zo(n[0]),
                [i, a] = this.transforms[r](Ur.arr(o) ? o : n.map(zo));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && qr(this.inputs, (e => qr(e, (e => Vo(e) && Ko(e, this)))))
          }
          observerRemoved(e) {
            0 == e && qr(this.inputs, (e => qr(e, (e => Vo(e) && Wo(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Go(this, e)
          }
        };
      Vr.assign({
        batchedUpdates: Gt.unstable_batchedUpdates,
        createStringInterpolator: ii,
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
      var as = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: n = e => new ki(e),
          getComponentProps: r = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            i = e => {
              const t = Ni(e) || "Anonymous";
              return (e = Ur.str(e) ? i[e] || (i[e] = Ci(e, o)) : e[Oi] || (e[Oi] = Ci(e, o))).displayName = `Animated(${t})`, e
            };
          return Xr(e, ((t, n) => {
            Ur.arr(e) && (n = Ni(t)), i[n] = i(t)
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
              d = Object.keys(u).map((t => n || e.hasAttribute(t) ? t : Ya[t] || (Ya[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const n = $a(t, o[t]);
                Wa.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } d.forEach(((t, n) => {
              e.setAttribute(t, c[n])
            })), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new os(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        ss = as.animated;
      const ls = (e, t, n) => {
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
        us = e => {
          const t = (e, t, n) => {
            n(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, n) => {
            const r = n.getBoundingClientRect();
            return e ? (t(e.top, r.top, ((e, t) => e < t)), t(e.bottom, r.bottom, ((e, t) => e > t)), t(e.left, r.left, ((e, t) => e < t)), t(e.right, r.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), r) : r
          }), null)
        },
        cs = ([e, t], n) => {
          const {
            a: r
          } = new DOMMatrix(n.style.transform), o = us(n), i = o.width / r, a = 100 * fs(e, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / i, s = o.height / r;
          return {
            x: a,
            y: 100 * fs(t, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / s
          }
        },
        ds = (e, t, n, r) => {
          let o = n[0],
            i = n[1];
          const {
            a
          } = new DOMMatrix(e.style.transform), s = r / 100, l = us(e), u = t.getBoundingClientRect(), c = l.width / a / 2, d = u.width / 2, f = c * s > d ? c * s - d : 0, h = l.height / a / 2, p = u.height / 2, m = h * s > p ? h * s - p : 0, g = -o > f, v = o > f, y = i > m, b = -i > m;
          return g && !v ? o = -f : v && !g && (o = f), y && !b ? i = m : b && !y && (i = -m), {
            xy: [o, i],
            horizontalOffset: f,
            verticalOffset: m
          }
        },
        fs = (e, t, n) => Math.min(Math.max(e, t), n),
        hs = {
          mass: .1,
          tension: 800,
          friction: 20,
          clamp: !1,
          precision: .001,
          velocity: 0
        },
        ps = Xi,
        ms = {
          scrollFactor: 2e3,
          dragFactor: 1.3,
          closePc: 33
        },
        gs = ({
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
            (0, f.useEffect)((() => (document.addEventListener("gesturestart", n), document.addEventListener("gesturechange", n), t.current?.addEventListener("dragstart", n), t.current?.addEventListener("click", n), e.current?.addEventListener("dragstart", n), e.current?.addEventListener("click", n), () => {
              document.removeEventListener("gesturestart", n), document.removeEventListener("gesturechange", n), t.current?.removeEventListener("dragstart", n), t.current?.removeEventListener("click", n), e.current?.removeEventListener("dragstart", n), e.current?.removeEventListener("click", n)
            })), [e.current, t.current])
          })({
            containerRef: t,
            contentRef: n
          }), wr({
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
            children: (0, c.jsx)(ss.div, {
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
      var vs = n(23514);

      function ys(e, t) {
        var n = t && t.cache ? t.cache : Ts,
          r = t && t.serializer ? t.serializer : js;
        return (t && t.strategy ? t.strategy : Es)(e, {
          cache: n,
          serializer: r
        })
      }

      function bs(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function _s(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function ws(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function Es(e, t) {
        return ws(e, this, 1 === e.length ? bs : _s, t.cache.create(), t.serializer)
      }
      var js = function() {
        return JSON.stringify(arguments)
      };

      function ks() {
        this.cache = Object.create(null)
      }
      ks.prototype.get = function(e) {
        return this.cache[e]
      }, ks.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var xs, Ss, Ps, Cs, Ts = {
          create: function() {
            return new ks
          }
        },
        Os = {
          variadic: function(e, t) {
            return ws(e, this, _s, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return ws(e, this, bs, t.cache.create(), t.serializer)
          }
        };

      function Ns(e) {
        return e.type === Ss.literal
      }

      function Rs(e) {
        return e.type === Ss.argument
      }

      function Ls(e) {
        return e.type === Ss.number
      }

      function As(e) {
        return e.type === Ss.date
      }

      function Is(e) {
        return e.type === Ss.time
      }

      function Ms(e) {
        return e.type === Ss.select
      }

      function Ds(e) {
        return e.type === Ss.plural
      }

      function Hs(e) {
        return e.type === Ss.pound
      }

      function Bs(e) {
        return e.type === Ss.tag
      }

      function Fs(e) {
        return !(!e || "object" != typeof e || e.type !== Ps.number)
      }

      function Vs(e) {
        return !(!e || "object" != typeof e || e.type !== Ps.dateTime)
      }(Cs = xs || (xs = {}))[Cs.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", Cs[Cs.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", Cs[Cs.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", Cs[Cs.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", Cs[Cs.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", Cs[Cs.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", Cs[Cs.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", Cs[Cs.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", Cs[Cs.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", Cs[Cs.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", Cs[Cs.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", Cs[Cs.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", Cs[Cs.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", Cs[Cs.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", Cs[Cs.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", Cs[Cs.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", Cs[Cs.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", Cs[Cs.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", Cs[Cs.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", Cs[Cs.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", Cs[Cs.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", Cs[Cs.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", Cs[Cs.INVALID_TAG = 23] = "INVALID_TAG", Cs[Cs.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", Cs[Cs.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", Cs[Cs.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(Ss || (Ss = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(Ps || (Ps = {}));
      var zs = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Us = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Gs(e) {
        var t = {};
        return e.replace(Us, (function(e) {
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
      var qs = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function Xs(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], n = 0, r = e.split(qs).filter((function(e) {
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
      var Ks = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Ws = /^(@+)?(\+|#+)?[rs]?$/g,
        $s = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Ys = /^(0+)$/;

      function Zs(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Ws, (function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        })), t
      }

      function Qs(e) {
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

      function Js(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !Ys.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function el(e) {
        return Qs(e) || {}
      }

      function tl(e) {
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
              t = (0, vs.__assign)((0, vs.__assign)((0, vs.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, vs.__assign)((0, vs.__assign)({}, e), el(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, vs.__assign)((0, vs.__assign)((0, vs.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, vs.__assign)((0, vs.__assign)({}, e), el(t))
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
              o.options[0].replace($s, (function(e, n, r, o, i, a) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (Ys.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Ks.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Ks, (function(e, n, r, o, i, a) {
              return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, vs.__assign)((0, vs.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, vs.__assign)((0, vs.__assign)({}, t), Zs(i)))
          } else if (Ws.test(o.stem)) t = (0, vs.__assign)((0, vs.__assign)({}, t), Zs(o.stem));
          else {
            var a = Qs(o.stem);
            a && (t = (0, vs.__assign)((0, vs.__assign)({}, t), a));
            var s = Js(o.stem);
            s && (t = (0, vs.__assign)((0, vs.__assign)({}, t), s))
          }
        }
        return t
      }
      var nl, rl = {
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

      function ol(e) {
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
        return "root" !== r && (n = e.maximize().region), (rl[n || ""] || rl[r || ""] || rl["".concat(r, "-001")] || rl["001"])[0]
      }
      var il = new RegExp("^".concat(zs.source, "*")),
        al = new RegExp("".concat(zs.source, "*$"));

      function sl(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var ll = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        ul = !!String.fromCodePoint,
        cl = !!Object.fromEntries,
        dl = !!String.prototype.codePointAt,
        fl = !!String.prototype.trimStart,
        hl = !!String.prototype.trimEnd,
        pl = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        ml = !0;
      try {
        ml = "a" === (null === (nl = jl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === nl ? void 0 : nl[0])
      } catch (e) {
        ml = !1
      }
      var gl, vl = ll ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        yl = ul ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        bl = cl ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        _l = dl ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        wl = fl ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(il, "")
        },
        El = hl ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(al, "")
        };

      function jl(e, t) {
        return new RegExp(e, t)
      }
      if (ml) {
        var kl = jl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        gl = function(e, t) {
          var n;
          return kl.lastIndex = t, null !== (n = kl.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else gl = function(e, t) {
        for (var n = [];;) {
          var r = _l(e, t);
          if (void 0 === r || Tl(r) || Ol(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return yl.apply(void 0, n)
      };
      var xl, Sl, Pl = function() {
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
                  return this.error(xs.UNMATCHED_CLOSING_TAG, sl(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Cl(this.peek() || 0)) {
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
                  type: Ss.pound,
                  location: sl(a, this.clonePosition())
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
              type: Ss.literal,
              value: "<".concat(r, "/>"),
              location: sl(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Cl(this.char())) return this.error(xs.INVALID_TAG, sl(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(xs.UNMATCHED_CLOSING_TAG, sl(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Ss.tag,
                  value: r,
                  children: i,
                  location: sl(n, this.clonePosition())
                },
                err: null
              } : this.error(xs.INVALID_TAG, sl(a, this.clonePosition())))
            }
            return this.error(xs.UNCLOSED_TAG, sl(n, this.clonePosition()))
          }
          return this.error(xs.INVALID_TAG, sl(n, this.clonePosition()))
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
          var s = sl(n, this.clonePosition());
          return {
            val: {
              type: Ss.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Cl(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return yl.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), yl(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(xs.EXPECT_ARGUMENT_CLOSING_BRACE, sl(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(xs.EMPTY_ARGUMENT, sl(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(xs.MALFORMED_ARGUMENT, sl(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(xs.EXPECT_ARGUMENT_CLOSING_BRACE, sl(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Ss.argument,
                  value: r,
                  location: sl(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(xs.EXPECT_ARGUMENT_CLOSING_BRACE, sl(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(xs.MALFORMED_ARGUMENT, sl(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = gl(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: sl(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(xs.EXPECT_ARGUMENT_TYPE, sl(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var u = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (h = El(v.val)).length) return this.error(xs.EXPECT_ARGUMENT_STYLE, sl(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: sl(u, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var c = sl(r, this.clonePosition());
              if (l && vl(null == l ? void 0 : l.style, "::", 0)) {
                var d = wl(l.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? v : {
                  val: {
                    type: Ss.number,
                    value: n,
                    location: c,
                    style: v.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(xs.EXPECT_DATE_TIME_SKELETON, c);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = ol(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var h = {
                  type: Ps.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Gs(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Ss.date : Ss.time,
                    value: n,
                    location: c,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Ss.number : "date" === a ? Ss.date : Ss.time,
                  value: n,
                  location: c,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(xs.EXPECT_SELECT_ARGUMENT_OPTIONS, sl(p, (0, vs.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                g = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(xs.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, sl(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(xs.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, xs.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), g = v.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var _ = sl(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Ss.select,
                  value: n,
                  options: bl(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Ss.plural,
                  value: n,
                  options: bl(b.val),
                  offset: g,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(xs.INVALID_ARGUMENT_TYPE, sl(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(xs.EXPECT_ARGUMENT_CLOSING_BRACE, sl(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(xs.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, sl(n, this.clonePosition()));
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
            n = Xs(e)
          } catch (e) {
            return this.error(xs.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Ps.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? tl(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, u = r.location;;) {
            if (0 === l.length) {
              var c = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(xs.EXPECT_PLURAL_ARGUMENT_SELECTOR, xs.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              u = sl(c, this.clonePosition()), l = this.message.slice(c.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? xs.DUPLICATE_SELECT_ARGUMENT_SELECTOR : xs.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? xs.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : xs.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, sl(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, n);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: sl(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, u = o.location
          }
          return 0 === a.length ? this.error("select" === t ? xs.EXPECT_SELECT_ARGUMENT_SELECTOR : xs.EXPECT_PLURAL_ARGUMENT_SELECTOR, sl(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(xs.MISSING_OTHER_CLAUSE, sl(this.clonePosition(), this.clonePosition())) : {
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
          var s = sl(r, this.clonePosition());
          return o ? pl(i *= n) ? {
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
          var t = _l(this.message, e);
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
          if (vl(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && Tl(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }, e
      }();

      function Cl(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Tl(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Ol(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Nl(e) {
        e.forEach((function(e) {
          if (delete e.location, Ms(e) || Ds(e))
            for (var t in e.options) delete e.options[t].location, Nl(e.options[t].value);
          else Ls(e) && Fs(e.style) || (As(e) || Is(e)) && Vs(e.style) ? delete e.style.location : Bs(e) && Nl(e.children)
        }))
      }

      function Rl(e, t) {
        void 0 === t && (t = {}), t = (0, vs.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var n = new Pl(e, t).parse();
        if (n.err) {
          var r = SyntaxError(xs[n.err.kind]);
          throw r.location = n.err.location, r.originalMessage = n.err.message, r
        }
        return (null == t ? void 0 : t.captureLocation) || Nl(n.val), n.val
      }(Sl = xl || (xl = {})).MISSING_VALUE = "MISSING_VALUE", Sl.INVALID_VALUE = "INVALID_VALUE", Sl.MISSING_INTL_API = "MISSING_INTL_API";
      var Ll, Al = function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return o.code = n, o.originalMessage = r, o
          }
          return (0, vs.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        Il = function(e) {
          function t(t, n, r, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(r).join('", "'), '"'), xl.INVALID_VALUE, o) || this
          }
          return (0, vs.__extends)(t, e), t
        }(Al),
        Ml = function(e) {
          function t(t, n, r) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), xl.INVALID_VALUE, r) || this
          }
          return (0, vs.__extends)(t, e), t
        }(Al),
        Dl = function(e) {
          function t(t, n) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), xl.MISSING_VALUE, n) || this
          }
          return (0, vs.__extends)(t, e), t
        }(Al);

      function Hl(e) {
        return "function" == typeof e
      }

      function Bl(e, t, n, r, o, i, a) {
        if (1 === e.length && Ns(e[0])) return [{
          type: Ll.literal,
          value: e[0].value
        }];
        for (var s = [], l = 0, u = e; l < u.length; l++) {
          var c = u[l];
          if (Ns(c)) s.push({
            type: Ll.literal,
            value: c.value
          });
          else if (Hs(c)) "number" == typeof i && s.push({
            type: Ll.literal,
            value: n.getNumberFormat(t).format(i)
          });
          else {
            var d = c.value;
            if (!o || !(d in o)) throw new Dl(d, a);
            var f = o[d];
            if (Rs(c)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
              type: "string" == typeof f ? Ll.literal : Ll.object,
              value: f
            });
            else if (As(c)) {
              var h = "string" == typeof c.style ? r.date[c.style] : Vs(c.style) ? c.style.parsedOptions : void 0;
              s.push({
                type: Ll.literal,
                value: n.getDateTimeFormat(t, h).format(f)
              })
            } else if (Is(c)) h = "string" == typeof c.style ? r.time[c.style] : Vs(c.style) ? c.style.parsedOptions : r.time.medium, s.push({
              type: Ll.literal,
              value: n.getDateTimeFormat(t, h).format(f)
            });
            else if (Ls(c))(h = "string" == typeof c.style ? r.number[c.style] : Fs(c.style) ? c.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), s.push({
              type: Ll.literal,
              value: n.getNumberFormat(t, h).format(f)
            });
            else {
              if (Bs(c)) {
                var p = c.children,
                  m = c.value,
                  g = o[m];
                if (!Hl(g)) throw new Ml(m, "function", a);
                var v = g(Bl(p, t, n, r, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(v) || (v = [v]), s.push.apply(s, v.map((function(e) {
                  return {
                    type: "string" == typeof e ? Ll.literal : Ll.object,
                    value: e
                  }
                })))
              }
              if (Ms(c)) {
                if (!(y = c.options[f] || c.options.other)) throw new Il(c.value, f, Object.keys(c.options), a);
                s.push.apply(s, Bl(y.value, t, n, r, o))
              } else if (Ds(c)) {
                var y;
                if (!(y = c.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new Al('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', xl.MISSING_INTL_API, a);
                  var b = n.getPluralRules(t, {
                    type: c.pluralType
                  }).select(f - (c.offset || 0));
                  y = c.options[b] || c.options.other
                }
                if (!y) throw new Il(c.value, f, Object.keys(c.options), a);
                s.push.apply(s, Bl(y.value, t, n, r, o, f - (c.offset || 0)))
              }
            }
          }
        }
        return (_ = s).length < 2 ? _ : _.reduce((function(e, t) {
          var n = e[e.length - 1];
          return n && n.type === Ll.literal && t.type === Ll.literal ? n.value += t.value : e.push(t), e
        }), []);
        var _
      }

      function Fl(e) {
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
      }(Ll || (Ll = {}));
      var Vl, zl = function() {
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
                return e.length && t.type === Ll.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return n.length <= 1 ? n[0] || "" : n
            }, this.formatToParts = function(e) {
              return Bl(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = l.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(l.locales)[0]
              }
            }, this.getAst = function() {
              return l.ast
            }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var u = o || {},
              c = (u.formatters, (0, vs.__rest)(u, ["formatters"]));
            this.ast = e.__parse(t, (0, vs.__assign)((0, vs.__assign)({}, c), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (a = e.formats, (s = r) ? Object.keys(a).reduce((function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, vs.__assign)((0, vs.__assign)((0, vs.__assign)({}, e || {}), t || {}), Object.keys(e).reduce((function(n, r) {
                return n[r] = (0, vs.__assign)((0, vs.__assign)({}, e[r]), t[r] || {}), n
              }), {})) : e
            }(a[t], s[t]), e
          }), (0, vs.__assign)({}, a)) : a), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: ys((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Fl(i.number),
              strategy: Os.variadic
            }),
            getDateTimeFormat: ys((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Fl(i.dateTime),
              strategy: Os.variadic
            }),
            getPluralRules: ys((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.PluralRules).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Fl(i.pluralRules),
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
        }, e.__parse = Rl, e.formats = {
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
      }(Vl || (Vl = {}));
      var Ul = function(e) {
          function t(n, r, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = n, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, vs.__extends)(t, e), t
        }(Error),
        Gl = function(e) {
          function t(t, n) {
            return e.call(this, Vl.UNSUPPORTED_FORMATTER, t, n) || this
          }
          return (0, vs.__extends)(t, e), t
        }(Ul),
        ql = function(e) {
          function t(t, n) {
            return e.call(this, Vl.INVALID_CONFIG, t, n) || this
          }
          return (0, vs.__extends)(t, e), t
        }(Ul),
        Xl = function(e) {
          function t(t, n) {
            return e.call(this, Vl.MISSING_DATA, t, n) || this
          }
          return (0, vs.__extends)(t, e), t
        }(Ul),
        Kl = function(e) {
          function t(t, n, r) {
            var o = e.call(this, Vl.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(n, "\n"), r) || this;
            return o.locale = n, o
          }
          return (0, vs.__extends)(t, e), t
        }(Ul),
        Wl = function(e) {
          function t(t, n, r, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == r ? void 0 : r.id, "\nDefault Message: ").concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ").concat(null == r ? void 0 : r.description, "\n"), n, o) || this;
            return i.descriptor = r, i.locale = n, i
          }
          return (0, vs.__extends)(t, e), t
        }(Kl),
        $l = function(e) {
          function t(t, n) {
            var r = e.call(this, Vl.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(n, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return r.descriptor = t, r
          }
          return (0, vs.__extends)(t, e), t
        }(Ul);

      function Yl(e, t, n) {
        return void 0 === n && (n = {}), t.reduce((function(t, r) {
          return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t
        }), {})
      }
      var Zl = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function Ql(e) {
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

      function Jl(e, t, n, r) {
        var o, i = e && e[t];
        if (i && (o = i[n]), o) return o;
        r(new Gl("No ".concat(t, " format named: ").concat(n)))
      }

      function eu(e, t) {
        var n = t && t.cache ? t.cache : su,
          r = t && t.serializer ? t.serializer : iu;
        return (t && t.strategy ? t.strategy : ou)(e, {
          cache: n,
          serializer: r
        })
      }

      function tu(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function nu(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function ru(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function ou(e, t) {
        return ru(e, this, 1 === e.length ? tu : nu, t.cache.create(), t.serializer)
      }
      var iu = function() {
        return JSON.stringify(arguments)
      };

      function au() {
        this.cache = Object.create(null)
      }
      au.prototype.get = function(e) {
        return this.cache[e]
      }, au.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var su = {
          create: function() {
            return new au
          }
        },
        lu = {
          variadic: function(e, t) {
            return ru(e, this, nu, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return ru(e, this, tu, t.cache.create(), t.serializer)
          }
        };

      function uu(e) {
        ! function(e, t, n) {
          if (void 0 === n && (n = Error), !e) throw new n("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      eu((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: lu.variadic
      }), eu((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: lu.variadic
      }), eu((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.PluralRules).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: lu.variadic
      }), eu((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.Locale).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: lu.variadic
      }), eu((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.ListFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: lu.variadic
      });
      var cu = (0, vs.__assign)((0, vs.__assign)({}, Zl), {
        textComponent: f.Fragment
      });
      n(67332);
      var du = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? f.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = f.createContext(null)),
        fu = (du.Consumer, du.Provider),
        hu = du;

      function pu(e, t) {
        return Object.keys(e).reduce((function(n, r) {
          return n[r] = (0, vs.__assign)({
            timeZone: t
          }, e[r]), n
        }), {})
      }

      function mu(e, t) {
        return Object.keys((0, vs.__assign)((0, vs.__assign)({}, e), t)).reduce((function(n, r) {
          return n[r] = (0, vs.__assign)((0, vs.__assign)({}, e[r] || {}), t[r] || {}), n
        }), {})
      }

      function gu(e, t) {
        if (!t) return e;
        var n = zl.formats;
        return (0, vs.__assign)((0, vs.__assign)((0, vs.__assign)({}, n), e), {
          date: mu(pu(n.date, t), pu(e.date || {}, t)),
          time: mu(pu(n.time, t), pu(e.time || {}, t))
        })
      }
      ys((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Os.variadic
      }), ys((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Os.variadic
      }), ys((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.PluralRules).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Os.variadic
      }), ys((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.Locale).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Os.variadic
      }), ys((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.ListFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Os.variadic
      });
      var vu = function(e, t, n, r, o) {
          var i = e.locale,
            a = e.formats,
            s = e.messages,
            l = e.defaultLocale,
            u = e.defaultFormats,
            c = e.fallbackOnEmptyString,
            d = e.onError,
            f = e.timeZone,
            h = e.defaultRichTextElements;
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
          if (Array.isArray(v) && 1 === v.length && v[0].type === Ss.literal) return v[0].value;
          if (!r && v && "string" == typeof v && !h) return v.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (r = (0, vs.__assign)((0, vs.__assign)({}, h), r || {}), a = gu(a, f), u = gu(u, f), !v) {
            if (!1 === c && "" === v) return v;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new $l(n, i)), m) try {
              return t.getMessageFormat(m, l, u, o).format(r)
            } catch (e) {
              return d(new Wl('Error formatting default message for: "'.concat(g, '", rendering default message verbatim'), i, n, e)), "string" == typeof m ? m : g
            }
            return g
          }
          try {
            return t.getMessageFormat(v, i, a, (0, vs.__assign)({
              formatters: t
            }, o || {})).format(r)
          } catch (e) {
            d(new Wl('Error formatting message: "'.concat(g, '", using ').concat(m ? "default message" : "id", " as fallback."), i, n, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, u, o).format(r)
          } catch (e) {
            d(new Wl('Error formatting the default message for: "'.concat(g, '", rendering message verbatim'), i, n, e))
          }
          return "string" == typeof v ? v : "string" == typeof m ? m : g
        },
        yu = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function bu(e, t, n) {
        var r = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === n && (n = {});
        var a = n.format,
          s = a && Jl(o, "number", a, i) || {};
        return t(r, Yl(n, yu, s))
      }

      function _u(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return bu(e, t, r).format(n)
        } catch (t) {
          e.onError(new Kl("Error formatting number.", e.locale, t))
        }
        return String(n)
      }

      function wu(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return bu(e, t, r).formatToParts(n)
        } catch (t) {
          e.onError(new Kl("Error formatting number.", e.locale, t))
        }
        return []
      }
      var Eu = ["numeric", "style"];

      function ju(e, t, n, r, o) {
        void 0 === o && (o = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new Al('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', xl.MISSING_INTL_API));
        try {
          return function(e, t, n) {
            var r = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === n && (n = {});
            var a = n.format,
              s = !!a && Jl(o, "relative", a, i) || {};
            return t(r, Yl(n, Eu, s))
          }(e, t, o).format(n, r)
        } catch (t) {
          e.onError(new Kl("Error formatting relative time.", e.locale, t))
        }
        return String(n)
      }
      var ku = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function xu(e, t, n, r) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === r && (r = {});
        var l = r.format,
          u = (0, vs.__assign)((0, vs.__assign)({}, s && {
            timeZone: s
          }), l && Jl(i, t, l, a)),
          c = Yl(r, ku, u);
        return "time" !== t || c.hour || c.minute || c.second || c.timeStyle || c.dateStyle || (c = (0, vs.__assign)((0, vs.__assign)({}, c), {
          hour: "numeric",
          minute: "numeric"
        })), n(o, c)
      }

      function Su(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return xu(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new Kl("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function Pu(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return xu(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new Kl("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function Cu(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = n[2],
          s = void 0 === a ? {} : a,
          l = e.timeZone,
          u = e.locale,
          c = e.onError,
          d = Yl(s, ku, l ? {
            timeZone: l
          } : {});
        try {
          return t(u, d).formatRange(o, i)
        } catch (t) {
          c(new Kl("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function Tu(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return xu(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Kl("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Ou(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return xu(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Kl("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Nu = ["type"];

      function Ru(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.PluralRules || i(new Al('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', xl.MISSING_INTL_API));
        var a = Yl(r, Nu);
        try {
          return t(o, a).select(n)
        } catch (e) {
          i(new Kl("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Lu = ["type", "style"],
        Au = Date.now();

      function Iu(e, t, n, r) {
        void 0 === r && (r = {});
        var o = Mu(e, t, n, r).reduce((function(e, t) {
          var n = t.value;
          return "string" != typeof n ? e.push(n) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Mu(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.ListFormat || i(new Al('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', xl.MISSING_INTL_API));
        var a = Yl(r, Lu);
        try {
          var s = {},
            l = n.map((function(e, t) {
              if ("object" == typeof e) {
                var n = function(e) {
                  return "".concat(Au, "_").concat(e, "_").concat(Au)
                }(t);
                return s[n] = e, n
              }
              return String(e)
            }));
          return t(o, a).formatToParts(l).map((function(e) {
            return "literal" === e.type ? e : (0, vs.__assign)((0, vs.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          }))
        } catch (e) {
          i(new Kl("Error formatting list.", o, e))
        }
        return n
      }
      var Du, Hu, Bu, Fu = ["style", "type", "fallback", "languageDisplay"];

      function Vu(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new Al('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', xl.MISSING_INTL_API));
        var a = Yl(r, Fu);
        try {
          return t(o, a).of(n)
        } catch (e) {
          i(new Kl("Error formatting display name.", o, e))
        }
      }

      function zu(e, t) {
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
              o = ys((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Ql(e.dateTime),
                strategy: Os.variadic
              }),
              i = ys((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Ql(e.number),
                strategy: Os.variadic
              }),
              a = ys((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.PluralRules).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Ql(e.pluralRules),
                strategy: Os.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: ys((function(e, t, n, r) {
                return new zl(e, t, n, (0, vs.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: a
                  }
                }, r || {}))
              }), {
                cache: Ql(e.message),
                strategy: Os.variadic
              }),
              getRelativeTimeFormat: ys((function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new(t.bind.apply(t, (0, vs.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Ql(e.relativeTime),
                strategy: Os.variadic
              }),
              getPluralRules: a,
              getListFormat: ys((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, vs.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Ql(e.list),
                strategy: Os.variadic
              }),
              getDisplayNames: ys((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, vs.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Ql(e.displayNames),
                strategy: Os.variadic
              })
            }
          }(t),
          r = (0, vs.__assign)((0, vs.__assign)({}, Zl), e),
          o = r.locale,
          i = r.defaultLocale,
          a = r.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new Xl('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new Xl('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new ql('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(r), (0, vs.__assign)((0, vs.__assign)({}, r), {
            formatters: n,
            formatNumber: _u.bind(null, r, n.getNumberFormat),
            formatNumberToParts: wu.bind(null, r, n.getNumberFormat),
            formatRelativeTime: ju.bind(null, r, n.getRelativeTimeFormat),
            formatDate: Su.bind(null, r, n.getDateTimeFormat),
            formatDateToParts: Tu.bind(null, r, n.getDateTimeFormat),
            formatTime: Pu.bind(null, r, n.getDateTimeFormat),
            formatDateTimeRange: Cu.bind(null, r, n.getDateTimeFormat),
            formatTimeToParts: Ou.bind(null, r, n.getDateTimeFormat),
            formatPlural: Ru.bind(null, r, n.getPluralRules),
            formatMessage: vu.bind(null, r, n),
            $t: vu.bind(null, r, n),
            formatList: Iu.bind(null, r, n.getListFormat),
            formatListToParts: Mu.bind(null, r, n.getListFormat),
            formatDisplayName: Vu.bind(null, r, n.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Du || (Du = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Hu || (Hu = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Bu || (Bu = {}));
      var Uu, Gu = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        qu = {
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

      function Xu(e) {
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
        return "root" !== r && (n = e.maximize().region), (qu[n || ""] || qu[r || ""] || qu["".concat(r, "-001")] || qu["001"])[0]
      }
      var Ku = new RegExp("^".concat(Gu.source, "*")),
        Wu = new RegExp("".concat(Gu.source, "*$"));

      function $u(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Yu = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Zu = !!String.fromCodePoint,
        Qu = !!Object.fromEntries,
        Ju = !!String.prototype.codePointAt,
        ec = !!String.prototype.trimStart,
        tc = !!String.prototype.trimEnd,
        nc = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        rc = !0;
      try {
        rc = "a" === (null === (Uu = fc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Uu ? void 0 : Uu[0])
      } catch (e) {
        rc = !1
      }
      var oc, ic, ac = Yu ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        sc = Zu ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        lc = Qu ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        uc = Ju ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        cc = ec ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Ku, "")
        },
        dc = tc ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Wu, "")
        };

      function fc(e, t) {
        return new RegExp(e, t)
      }
      if (rc) {
        var hc = fc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        oc = function(e, t) {
          var n;
          return hc.lastIndex = t, null !== (n = hc.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else oc = function(e, t) {
        for (var n = [];;) {
          var r = uc(e, t);
          if (void 0 === r || mc(r) || gc(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return sc.apply(void 0, n)
      };

      function pc(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function mc(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function gc(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function vc(e) {
        return e ? Object.keys(e).reduce((function(t, n) {
          var r, o = e[n];
          return t[n] = "function" == typeof o ? (r = o, function(e) {
            return r(f.Children.toArray(e))
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
                  return this.error(Du.UNMATCHED_CLOSING_TAG, $u(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && pc(this.peek() || 0)) {
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
                  type: Hu.pound,
                  location: $u(a, this.clonePosition())
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
              type: Hu.literal,
              value: "<".concat(r, "/>"),
              location: $u(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !pc(this.char())) return this.error(Du.INVALID_TAG, $u(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(Du.UNMATCHED_CLOSING_TAG, $u(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Hu.tag,
                  value: r,
                  children: i,
                  location: $u(n, this.clonePosition())
                },
                err: null
              } : this.error(Du.INVALID_TAG, $u(a, this.clonePosition())))
            }
            return this.error(Du.UNCLOSED_TAG, $u(n, this.clonePosition()))
          }
          return this.error(Du.INVALID_TAG, $u(n, this.clonePosition()))
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
          var s = $u(n, this.clonePosition());
          return {
            val: {
              type: Hu.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (pc(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return sc.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), sc(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Du.EXPECT_ARGUMENT_CLOSING_BRACE, $u(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Du.EMPTY_ARGUMENT, $u(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(Du.MALFORMED_ARGUMENT, $u(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Du.EXPECT_ARGUMENT_CLOSING_BRACE, $u(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Hu.argument,
                  value: r,
                  location: $u(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Du.EXPECT_ARGUMENT_CLOSING_BRACE, $u(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(Du.MALFORMED_ARGUMENT, $u(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = oc(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: $u(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Du.EXPECT_ARGUMENT_TYPE, $u(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var u = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (h = dc(v.val)).length) return this.error(Du.EXPECT_ARGUMENT_STYLE, $u(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: $u(u, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var c = $u(r, this.clonePosition());
              if (l && ac(null == l ? void 0 : l.style, "::", 0)) {
                var d = cc(l.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? v : {
                  val: {
                    type: Hu.number,
                    value: n,
                    location: c,
                    style: v.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Du.EXPECT_DATE_TIME_SKELETON, c);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = Xu(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var h = {
                  type: Bu.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Gs(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Hu.date : Hu.time,
                    value: n,
                    location: c,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Hu.number : "date" === a ? Hu.date : Hu.time,
                  value: n,
                  location: c,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Du.EXPECT_SELECT_ARGUMENT_OPTIONS, $u(p, (0, vs.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                g = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Du.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, $u(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(Du.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Du.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), g = v.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var _ = $u(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Hu.select,
                  value: n,
                  options: lc(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Hu.plural,
                  value: n,
                  options: lc(b.val),
                  offset: g,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Du.INVALID_ARGUMENT_TYPE, $u(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Du.EXPECT_ARGUMENT_CLOSING_BRACE, $u(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Du.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, $u(n, this.clonePosition()));
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
            n = Xs(e)
          } catch (e) {
            return this.error(Du.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Bu.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? tl(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, u = r.location;;) {
            if (0 === l.length) {
              var c = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Du.EXPECT_PLURAL_ARGUMENT_SELECTOR, Du.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              u = $u(c, this.clonePosition()), l = this.message.slice(c.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Du.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Du.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Du.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Du.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, $u(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, n);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: $u(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, u = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Du.EXPECT_SELECT_ARGUMENT_SELECTOR : Du.EXPECT_PLURAL_ARGUMENT_SELECTOR, $u(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Du.MISSING_OTHER_CLAUSE, $u(this.clonePosition(), this.clonePosition())) : {
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
          var s = $u(r, this.clonePosition());
          return o ? nc(i *= n) ? {
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
          var t = uc(this.message, e);
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
          if (ac(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && mc(this.char());) this.bump()
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
      }(ic || (ic = {}));
      var yc = function(e, t, n, r) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var a = vc(r),
            s = vu.apply(void 0, (0, vs.__spreadArray)([e, t, n, a], o, !1));
          return Array.isArray(s) ? f.Children.toArray(s) : s
        },
        bc = function(e, t) {
          var n = e.defaultRichTextElements,
            r = (0, vs.__rest)(e, ["defaultRichTextElements"]),
            o = vc(n),
            i = zu((0, vs.__assign)((0, vs.__assign)((0, vs.__assign)({}, cu), r), {
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
          return (0, vs.__assign)((0, vs.__assign)({}, i), {
            formatMessage: yc.bind(null, a, i.formatters),
            $t: yc.bind(null, a, i.formatters)
          })
        };

      function _c(e) {
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
      var wc = function(e) {
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
            intl: bc(_c(t.props), t.cache),
            prevConfig: _c(t.props)
          }, t
        }
        return (0, vs.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var n = t.prevConfig,
            r = t.cache,
            o = _c(e);
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
            intl: bc(o, r),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return uu(this.state.intl), f.createElement(fu, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = cu, t
      }(f.PureComponent);
      const Ec = wc;

      function jc() {
        var e = f.useContext(hu);
        return uu(e), e
      }
      var kc, xc;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(kc || (kc = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(xc || (xc = {}));
      var Sc = function(e) {
        var t = jc(),
          n = e.value,
          r = e.children,
          o = (0, vs.__rest)(e, ["value", "children"]);
        return r(t.formatNumberToParts(n, o))
      };

      function Pc(e) {
        var t = function(t) {
          var n = jc(),
            r = t.value,
            o = t.children,
            i = (0, vs.__rest)(t, ["value", "children"]),
            a = "string" == typeof r ? new Date(r || 0) : r;
          return o("formatDate" === e ? n.formatDateToParts(a, i) : n.formatTimeToParts(a, i))
        };
        return t.displayName = xc[e], t
      }

      function Cc(e) {
        var t = function(t) {
          var n = jc(),
            r = t.value,
            o = t.children,
            i = (0, vs.__rest)(t, ["value", "children"]),
            a = n[e](r, i);
          if ("function" == typeof o) return o(a);
          var s = n.textComponent || f.Fragment;
          return f.createElement(s, null, a)
        };
        return t.displayName = kc[e], t
      }
      Sc.displayName = "FormattedNumberParts", Sc.displayName = "FormattedNumberParts", Cc("formatDate"), Cc("formatTime"), Cc("formatNumber"), Cc("formatList"), Cc("formatDisplayName"), Pc("formatDate"), Pc("formatTime");
      const Tc = ({
          children: e,
          messages: t,
          locale: n,
          fallback: r
        }) => {
          const [o, i] = (0, f.useState)(null);
          return (0, f.useEffect)((() => {
            (t?.[n] ?? t["en-US"]).then((e => {
              i(e.default)
            }))
          }), [n]), o ? (0, c.jsx)(Ec, {
            locale: n,
            messages: o,
            children: e
          }) : r ?? null
        },
        Oc = {
          id: "Lightbox_Open_Button_Label"
        },
        Nc = {
          id: "Lightbox_Dialog_Title"
        },
        Rc = {
          id: "Lightbox_Dialog_Description"
        },
        Lc = {
          "en-US": n.e(3672).then(n.bind(n, 21291)),
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
        };
      var Ac = n(23111);
      const Ic = (e, t) => {
        const n = "more" === t ? Ac.xW.lightHc : Ac.xW.light,
          r = "more" === t ? Ac.xW.darkHc : Ac.xW.dark;
        return "dark" === e ? r : n
      };

      function Mc(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }

      function Dc(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      var Hc = n(86410);

      function Bc(e, t = []) {
        let n = [];
        const r = () => {
          const t = n.map((e => f.createContext(e)));
          return function(n) {
            const r = n?.[e] || t;
            return f.useMemo((() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: r
              }
            })), [n, r])
          }
        };
        return r.scopeName = e, [function(t, r) {
          const o = f.createContext(r),
            i = n.length;
          n = [...n, r];
          const a = t => {
            const {
              scope: n,
              children: r,
              ...a
            } = t, s = n?.[e]?.[i] || o, l = f.useMemo((() => a), Object.values(a));
            return (0, c.jsx)(s.Provider, {
              value: l,
              children: r
            })
          };
          return a.displayName = t + "Provider", [a, function(n, a) {
            const s = a?.[e]?.[i] || o,
              l = f.useContext(s);
            if (l) return l;
            if (void 0 !== r) return r;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, Fc(r, ...t)]
      }

      function Fc(...e) {
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
            return f.useMemo((() => ({
              [`__scope${t.scopeName}`]: r
            })), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }
      var Vc = globalThis?.document ? f.useLayoutEffect : () => {},
        zc = h[" useInsertionEffect ".trim().toString()] || Vc;

      function Uc({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [o, i, a] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = f.useState(e), o = f.useRef(n), i = f.useRef(t);
          return zc((() => {
            i.current = t
          }), [t]), f.useEffect((() => {
            o.current !== n && (i.current?.(n), o.current = n)
          }), [n, o]), [n, r, i]
        }({
          defaultProp: t,
          onChange: n
        }), s = void 0 !== e, l = s ? e : o; {
          const t = f.useRef(void 0 !== e);
          f.useEffect((() => {
            const e = t.current;
            if (e !== s) {
              const t = e ? "controlled" : "uncontrolled",
                n = s ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = s
          }), [s, r])
        }
        const u = f.useCallback((t => {
          if (s) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && a.current?.(n)
          } else i(t)
        }), [s, e, i, a]);
        return [l, u]
      }
      Symbol("RADIX:SYNC_STATE");
      var Gc = f.createContext(void 0);

      function qc(e) {
        const t = f.useContext(Gc);
        return e || t || "ltr"
      }

      function Xc(e) {
        const t = f.useRef({
          value: e,
          previous: e
        });
        return f.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }

      function Kc(e) {
        const [t, n] = f.useState(void 0);
        return Vc((() => {
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
      var Wc = n(23135),
        $c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, t) => {
          const n = (0, Wc.TL)(`Primitive.${t}`),
            r = f.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, c.jsx)(a, {
                ...i,
                ref: r
              })
            }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {});

      function Yc(e) {
        const t = e + "CollectionProvider",
          [n, r] = Bc(t),
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
            } = e, r = f.useRef(null), i = f.useRef(new Map).current;
            return (0, c.jsx)(o, {
              scope: t,
              itemMap: i,
              collectionRef: r,
              children: n
            })
          };
        a.displayName = t;
        const s = e + "CollectionSlot",
          l = (0, Wc.TL)(s),
          u = f.forwardRef(((e, t) => {
            const {
              scope: n,
              children: r
            } = e, o = i(s, n), a = (0, Hc.s)(t, o.collectionRef);
            return (0, c.jsx)(l, {
              ref: a,
              children: r
            })
          }));
        u.displayName = s;
        const d = e + "CollectionItemSlot",
          h = "data-radix-collection-item",
          p = (0, Wc.TL)(d),
          m = f.forwardRef(((e, t) => {
            const {
              scope: n,
              children: r,
              ...o
            } = e, a = f.useRef(null), s = (0, Hc.s)(t, a), l = i(d, n);
            return f.useEffect((() => (l.itemMap.set(a, {
              ref: a,
              ...o
            }), () => {
              l.itemMap.delete(a)
            }))), (0, c.jsx)(p, {
              [h]: "",
              ref: s,
              children: r
            })
          }));
        return m.displayName = d, [{
          Provider: a,
          Slot: u,
          ItemSlot: m
        }, function(t) {
          const n = i(e + "CollectionConsumer", t),
            r = f.useCallback((() => {
              const e = n.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${h}]`)),
                r = Array.from(n.itemMap.values()).sort(((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)));
              return r
            }), [n.collectionRef, n.itemMap]);
          return r
        }, r]
      }
      Map;
      var Zc = ["PageUp", "PageDown"],
        Qc = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Jc = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        ed = "Slider",
        [td, nd, rd] = Yc(ed),
        [od, id] = Bc(ed, [rd]),
        [ad, sd] = od(ed),
        ld = f.forwardRef(((e, t) => {
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
            onValueChange: h = () => {},
            onValueCommit: p = () => {},
            inverted: m = !1,
            form: g,
            ...v
          } = e, y = f.useRef(new Set), b = f.useRef(0), _ = "horizontal" === a ? dd : fd, [w = [], E] = Uc({
            prop: d,
            defaultProp: u,
            onChange: e => {
              const t = [...y.current];
              t[b.current]?.focus(), h(e)
            }
          }), j = f.useRef(w);

          function k(e, t, {
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
              u = Mc(s, [r, o]);
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
          return (0, c.jsx)(ad, {
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
            children: (0, c.jsx)(td.Provider, {
              scope: e.__scopeSlider,
              children: (0, c.jsx)(td.Slot, {
                scope: e.__scopeSlider,
                children: (0, c.jsx)(_, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...v,
                  ref: t,
                  onPointerDown: Dc(v.onPointerDown, (() => {
                    s || (j.current = w)
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
                    k(e, t)
                  },
                  onSlideMove: s ? void 0 : function(e) {
                    k(e, b.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const e = j.current[b.current];
                    w[b.current] !== e && p(w)
                  },
                  onHomeKeyDown: () => !s && k(r, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !s && k(o, w.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!s) {
                      const n = Zc.includes(e.key) || e.shiftKey && Qc.includes(e.key) ? 10 : 1,
                        r = b.current;
                      k(w[r] + i * n * t, r, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      ld.displayName = ed;
      var [ud, cd] = od(ed, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), dd = f.forwardRef(((e, t) => {
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
        } = e, [h, p] = f.useState(null), m = (0, Hc.s)(t, (e => p(e))), g = f.useRef(void 0), v = qc(o), y = "ltr" === v, b = y && !i || !y && i;

        function _(e) {
          const t = g.current || h.getBoundingClientRect(),
            o = jd([0, t.width], b ? [n, r] : [r, n]);
          return g.current = t, o(e - t.left)
        }
        return (0, c.jsx)(ud, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, c.jsx)(hd, {
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
              const t = Jc[b ? "from-left" : "from-right"].includes(e.key);
              u?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), fd = f.forwardRef(((e, t) => {
        const {
          min: n,
          max: r,
          inverted: o,
          onSlideStart: i,
          onSlideMove: a,
          onSlideEnd: s,
          onStepKeyDown: l,
          ...u
        } = e, d = f.useRef(null), h = (0, Hc.s)(t, d), p = f.useRef(void 0), m = !o;

        function g(e) {
          const t = p.current || d.current.getBoundingClientRect(),
            o = jd([0, t.height], m ? [r, n] : [n, r]);
          return p.current = t, o(e - t.top)
        }
        return (0, c.jsx)(ud, {
          scope: e.__scopeSlider,
          startEdge: m ? "bottom" : "top",
          endEdge: m ? "top" : "bottom",
          size: "height",
          direction: m ? 1 : -1,
          children: (0, c.jsx)(hd, {
            "data-orientation": "vertical",
            ...u,
            ref: h,
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
              const t = Jc[m ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), hd = f.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: a,
          onEndKeyDown: s,
          onStepKeyDown: l,
          ...u
        } = e, d = sd(ed, n);
        return (0, c.jsx)($c.span, {
          ...u,
          ref: t,
          onKeyDown: Dc(e.onKeyDown, (e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : Zc.concat(Qc).includes(e.key) && (l(e), e.preventDefault())
          })),
          onPointerDown: Dc(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : r(e)
          })),
          onPointerMove: Dc(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: Dc(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          }))
        })
      })), pd = "SliderTrack", md = f.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          ...r
        } = e, o = sd(pd, n);
        return (0, c.jsx)($c.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: t
        })
      }));
      md.displayName = pd;
      var gd = "SliderRange",
        vd = f.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            ...r
          } = e, o = sd(gd, n), i = cd(gd, n), a = f.useRef(null), s = (0, Hc.s)(t, a), l = o.values.length, u = o.values.map((e => Ed(e, o.min, o.max))), d = l > 1 ? Math.min(...u) : 0, h = 100 - Math.max(...u);
          return (0, c.jsx)($c.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...r,
            ref: s,
            style: {
              ...e.style,
              [i.startEdge]: d + "%",
              [i.endEdge]: h + "%"
            }
          })
        }));
      vd.displayName = gd;
      var yd = "SliderThumb",
        bd = f.forwardRef(((e, t) => {
          const n = nd(e.__scopeSlider),
            [r, o] = f.useState(null),
            i = (0, Hc.s)(t, (e => o(e))),
            a = f.useMemo((() => r ? n().findIndex((e => e.ref.current === r)) : -1), [n, r]);
          return (0, c.jsx)(_d, {
            ...e,
            ref: i,
            index: a
          })
        })),
        _d = f.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            index: r,
            name: o,
            ...i
          } = e, a = sd(yd, n), s = cd(yd, n), [l, u] = f.useState(null), d = (0, Hc.s)(t, (e => u(e))), h = !l || a.form || !!l.closest("form"), p = Kc(l), m = a.values[r], g = void 0 === m ? 0 : Ed(m, a.min, a.max), v = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(r, a.values.length), y = p?.[s.size], b = y ? function(e, t, n) {
            const r = e / 2;
            return (r - jd([0, 50], [0, r])(t) * n) * n
          }(y, g, s.direction) : 0;
          return f.useEffect((() => {
            if (l) return a.thumbs.add(l), () => {
              a.thumbs.delete(l)
            }
          }), [l, a.thumbs]), (0, c.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${g}% + ${b}px)`
            },
            children: [(0, c.jsx)(td.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, c.jsx)($c.span, {
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
                onFocus: Dc(e.onFocus, (() => {
                  a.valueIndexToChangeRef.current = r
                }))
              })
            }), h && (0, c.jsx)(wd, {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: m
            }, r)]
          })
        }));
      bd.displayName = yd;
      var wd = f.forwardRef((({
        __scopeSlider: e,
        value: t,
        ...n
      }, r) => {
        const o = f.useRef(null),
          i = (0, Hc.s)(o, r),
          a = Xc(t);
        return f.useEffect((() => {
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
        }), [a, t]), (0, c.jsx)($c.input, {
          style: {
            display: "none"
          },
          ...n,
          ref: i,
          defaultValue: t
        })
      }));

      function Ed(e, t, n) {
        return Mc(100 / (n - t) * (e - t), [0, 100])
      }

      function jd(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      wd.displayName = "RadioBubbleInput";
      var kd = ld,
        xd = md,
        Sd = vd,
        Pd = bd;
      const Cd = {
          id: "Lightbox_Close_Button_Label"
        },
        Td = {
          id: "Lightbox_Close_Button_Tooltip"
        },
        Od = {
          id: "Lightbox_Zoom_In_Button_Label"
        },
        Nd = {
          id: "Lightbox_Zoom_In_Button_Tooltip"
        },
        Rd = {
          id: "Lightbox_Zoom_Out_Button_Label"
        },
        Ld = {
          id: "Lightbox_Zoom_Out_Button__Tooltip"
        },
        Ad = {
          id: "Lightbox_Reset_Zoom_Button_Label"
        },
        Id = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip"
        },
        Md = {
          id: "Lightbox_Zoom_Slider_Label"
        },
        Dd = {
          id: "Lightbox_Zoom_Slider_Tooltip"
        },
        Hd = {
          id: "Lightbox_Download_Button_Label"
        },
        Bd = {
          id: "Lightbox_Download_Button_Tooltip"
        };

      function Fd() {
        return Fd = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, Fd.apply(null, arguments)
      }
      var Vd = ["shift", "alt", "meta", "mod", "ctrl"],
        zd = {
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

      function Ud(e) {
        return (e && zd[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Gd(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function qd(e, t, n) {
        void 0 === t && (t = "+");
        var r = e.toLocaleLowerCase().split(t).map((function(e) {
          return Ud(e)
        }));
        return Fd({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter((function(e) {
            return !Vd.includes(e)
          })),
          description: n,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && Wd([Ud(e.key), Ud(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && $d([Ud(e.key), Ud(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        Xd.clear()
      }));
      var Xd = new Set;

      function Kd(e) {
        return Array.isArray(e)
      }

      function Wd(e) {
        var t = Array.isArray(e) ? e : [e];
        Xd.has("meta") && Xd.forEach((function(e) {
          return ! function(e) {
            return Vd.includes(e)
          }(e) && Xd.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return Xd.add(e.toLowerCase())
        }))
      }

      function $d(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Xd.clear() : t.forEach((function(e) {
          return Xd.delete(e.toLowerCase())
        }))
      }

      function Yd(e, t) {
        void 0 === t && (t = !1);
        var n, r, o = e.target,
          i = e.composed;
        return r = (n = o).tagName && !n.tagName.startsWith("-") && n.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Kd(t) ? Boolean(r && t && t.some((function(e) {
          var t;
          return e.toLowerCase() === (null == (t = r) ? void 0 : t.toLowerCase())
        }))) : Boolean(r && t && t)
      }
      var Zd = (0, f.createContext)(void 0);

      function Qd(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          r = e.children;
        return (0, c.jsx)(Zd.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: n
          },
          children: r
        })
      }

      function Jd(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(n, r) {
          return n && Jd(e[r], t[r])
        }), !0) : e === t
      }
      var ef = (0, f.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        tf = function(e) {
          var t = e.initiallyActiveScopes,
            n = void 0 === t ? ["*"] : t,
            r = e.children,
            o = (0, f.useState)((null == n ? void 0 : n.length) > 0 ? n : ["*"]),
            i = o[0],
            a = o[1],
            s = (0, f.useState)([]),
            l = s[0],
            u = s[1],
            d = (0, f.useCallback)((function(e) {
              a((function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            h = (0, f.useCallback)((function(e) {
              a((function(t) {
                return 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                }))
              }))
            }), []),
            p = (0, f.useCallback)((function(e) {
              a((function(t) {
                return t.includes(e) ? 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                })) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            m = (0, f.useCallback)((function(e) {
              u((function(t) {
                return [].concat(t, [e])
              }))
            }), []),
            g = (0, f.useCallback)((function(e) {
              u((function(t) {
                return t.filter((function(t) {
                  return !Jd(t, e)
                }))
              }))
            }), []);
          return (0, c.jsx)(ef.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: d,
              disableScope: h,
              toggleScope: p
            },
            children: (0, c.jsx)(Qd, {
              addHotkey: m,
              removeHotkey: g,
              children: r
            })
          })
        },
        nf = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        rf = "undefined" != typeof window ? f.useLayoutEffect : f.useEffect;

      function of(e, t, n, r) {
        var o = (0, f.useState)(null),
          i = o[0],
          a = o[1],
          s = (0, f.useRef)(!1),
          l = n instanceof Array ? r instanceof Array ? void 0 : r : n,
          u = Kd(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          c = n instanceof Array ? n : r instanceof Array ? r : void 0,
          d = (0, f.useCallback)(t, null != c ? c : []),
          h = (0, f.useRef)(d);
        h.current = c ? d : t;
        var p = function(e) {
            var t = (0, f.useRef)(void 0);
            return Jd(t.current, e) || (t.current = e), t.current
          }(l),
          m = (0, f.useContext)(ef).enabledScopes,
          g = (0, f.useContext)(Zd);
        return rf((function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = m, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !Yd(e, ["input", "textarea", "select"]) || Yd(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== i) {
                    var r = i.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== i && !i.contains(r.activeElement)) return void nf(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != p && p.enableOnContentEditable) && Gd(u, null == p ? void 0 : p.splitKey).forEach((function(n) {
                    var r, o = qd(n, null == p ? void 0 : p.combinationKey);
                    if (function(e, t, n) {
                        void 0 === n && (n = !1);
                        var r, o, i = t.alt,
                          a = t.meta,
                          s = t.mod,
                          l = t.shift,
                          u = t.ctrl,
                          c = t.keys,
                          d = e.key,
                          f = e.code,
                          h = e.ctrlKey,
                          p = e.metaKey,
                          m = e.shiftKey,
                          g = e.altKey,
                          v = Ud(f),
                          y = d.toLowerCase();
                        if (!(null != c && c.includes(v) || null != c && c.includes(y) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(v))) return !1;
                        if (!n) {
                          if (i === !g && "alt" !== y) return !1;
                          if (l === !m && "shift" !== y) return !1;
                          if (s) {
                            if (!p && !h) return !1
                          } else {
                            if (a === !p && "meta" !== y && "os" !== y) return !1;
                            if (u === !h && "ctrl" !== y && "control" !== y) return !1
                          }
                        }
                        return !(!c || 1 !== c.length || !c.includes(y) && !c.includes(v)) || (c ? (void 0 === o && (o = ","), (Kd(r = c) ? r : r.split(o)).every((function(e) {
                          return Xd.has(e.trim().toLowerCase())
                        }))) : !c)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == p ? void 0 : p.enabled)) return void nf(e);
                      h.current(e, o), t || (s.current = !0)
                    }
                  }))
                }
              },
              r = function(e) {
                void 0 !== e.key && (Wd(Ud(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && n(e))
              },
              o = function(e) {
                void 0 !== e.key && ($d(Ud(e.code)), s.current = !1, null != p && p.keyup && n(e, !0))
              },
              a = i || (null == l ? void 0 : l.document) || document;
            return a.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.addEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), g && Gd(u, null == p ? void 0 : p.splitKey).forEach((function(e) {
                return g.addHotkey(qd(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              })),
              function() {
                a.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.removeEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), g && Gd(u, null == p ? void 0 : p.splitKey).forEach((function(e) {
                  return g.removeHotkey(qd(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                }))
              }
          }
        }), [i, u, p, m]), a
      }

      function af(e) {
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

      function sf(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function lf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sf(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = af(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sf(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function uf(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var cf = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        df = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = lf(lf({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) cf(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return uf(e.variantClassNames, (e => uf(e, (e => e.split(" ")[0]))))
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
      const ff = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        hf = (0, f.forwardRef)((({
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
          ...h
        }, p) => {
          const g = (0, f.useRef)(null),
            v = (0, U.UP)(g, p),
            y = (0, nn.zQ)(),
            b = "string" == typeof s ? s : s?.[y] ?? s.default ?? "MD",
            {
              events: _,
              others: w
            } = (0, d.bZ)(h, {
              onPress: !1
            }),
            {
              buttonProps: E,
              isPressed: j
            } = tn({
              ...w,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => w.onPress?.(e) ?? l?.(e)
            }, g),
            k = (0, d.v6)({
              ..._,
              role: "button",
              "data-pressed": j,
              "data-testid": e,
              className: df({
                appearance: i,
                size: b,
                fullWidth: a
              })
            }, {
              ...E,
              className: n
            }),
            x = z[r],
            S = t ? m.DX : "button",
            P = ff[b];
          return (0, c.jsxs)(S, {
            ref: v,
            ...k,
            children: [x && (0, c.jsx)(x, {
              label: o || "",
              size: P
            }), (0, c.jsx)(m.xV, {
              children: u
            })]
          })
        }));
      var pf = "foundry_nk7jgu_bc732x1";
      const mf = (0, f.forwardRef)((({
        shortcut: e,
        isInline: t,
        onShortcut: n
      }, r) => (of(e, (e => n?.(e)), [n]), (0, c.jsx)(F, {
        size: "XS",
        className: (0, L.$)("foundry_nk7jgu_bc732x0", {
          [pf]: t
        }),
        asChild: !0,
        children: (0, c.jsx)("kbd", {
          ref: r,
          children: e
        })
      }))));

      function gf(e) {
        const t = f.useRef(e);
        return f.useEffect((() => {
          t.current = e
        })), f.useMemo((() => (...e) => t.current?.(...e)), [])
      }
      var vf, yf = "dismissableLayer.update",
        bf = f.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        _f = f.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: a,
            onDismiss: s,
            ...l
          } = e, u = f.useContext(bf), [d, h] = f.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = f.useState({}), g = (0, Hc.s)(t, (e => h(e))), v = Array.from(u.layers), [y] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(y), _ = d ? v.indexOf(d) : -1, w = u.layersWithOutsidePointerEventsDisabled.size > 0, E = _ >= b, j = function(e, t = globalThis?.document) {
            const n = gf(e),
              r = f.useRef(!1),
              o = f.useRef((() => {}));
            return f.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      Ef("dismissableLayer.pointerDownOutside", n, i, {
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
          }), p), k = function(e, t = globalThis?.document) {
            const n = gf(e),
              r = f.useRef(!1);
            return f.useEffect((() => {
              const e = e => {
                e.target && !r.current && Ef("dismissableLayer.focusOutside", n, {
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
            const n = gf(e);
            f.useEffect((() => {
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
          }), p), f.useEffect((() => {
            if (d) return n && (0 === u.layersWithOutsidePointerEventsDisabled.size && (vf = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), wf(), () => {
              n && 1 === u.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = vf)
            }
          }), [d, p, n, u]), f.useEffect((() => () => {
            d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), wf())
          }), [d, u]), f.useEffect((() => {
            const e = () => m({});
            return document.addEventListener(yf, e), () => document.removeEventListener(yf, e)
          }), []), (0, c.jsx)($c.div, {
            ...l,
            ref: g,
            style: {
              pointerEvents: w ? E ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: Dc(e.onFocusCapture, k.onFocusCapture),
            onBlurCapture: Dc(e.onBlurCapture, k.onBlurCapture),
            onPointerDownCapture: Dc(e.onPointerDownCapture, j.onPointerDownCapture)
          })
        }));

      function wf() {
        const e = new CustomEvent(yf);
        document.dispatchEvent(e)
      }

      function Ef(e, t, n, {
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
        }), r ? function(e, t) {
          e && Gt.flushSync((() => e.dispatchEvent(t)))
        }(o, i) : o.dispatchEvent(i)
      }
      _f.displayName = "DismissableLayer", f.forwardRef(((e, t) => {
        const n = f.useContext(bf),
          r = f.useRef(null),
          o = (0, Hc.s)(t, r);
        return f.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, c.jsx)($c.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var jf = h[" useId ".trim().toString()] || (() => {}),
        kf = 0;

      function xf(e) {
        const [t, n] = f.useState(jf());
        return Vc((() => {
          e || n((e => e ?? String(kf++)))
        }), [e]), e || (t ? `radix-${t}` : "")
      }
      const Sf = ["top", "right", "bottom", "left"],
        Pf = Math.min,
        Cf = Math.max,
        Tf = Math.round,
        Of = Math.floor,
        Nf = e => ({
          x: e,
          y: e
        }),
        Rf = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        Lf = {
          start: "end",
          end: "start"
        };

      function Af(e, t, n) {
        return Cf(e, Pf(t, n))
      }

      function If(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function Mf(e) {
        return e.split("-")[0]
      }

      function Df(e) {
        return e.split("-")[1]
      }

      function Hf(e) {
        return "x" === e ? "y" : "x"
      }

      function Bf(e) {
        return "y" === e ? "height" : "width"
      }

      function Ff(e) {
        return ["top", "bottom"].includes(Mf(e)) ? "y" : "x"
      }

      function Vf(e) {
        return Hf(Ff(e))
      }

      function zf(e) {
        return e.replace(/start|end/g, (e => Lf[e]))
      }

      function Uf(e) {
        return e.replace(/left|right|bottom|top/g, (e => Rf[e]))
      }

      function Gf(e) {
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

      function qf(e) {
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

      function Xf(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = Ff(t),
          a = Vf(t),
          s = Bf(a),
          l = Mf(t),
          u = "y" === i,
          c = r.x + r.width / 2 - o.width / 2,
          d = r.y + r.height / 2 - o.height / 2,
          f = r[s] / 2 - o[s] / 2;
        let h;
        switch (l) {
          case "top":
            h = {
              x: c,
              y: r.y - o.height
            };
            break;
          case "bottom":
            h = {
              x: c,
              y: r.y + r.height
            };
            break;
          case "right":
            h = {
              x: r.x + r.width,
              y: d
            };
            break;
          case "left":
            h = {
              x: r.x - o.width,
              y: d
            };
            break;
          default:
            h = {
              x: r.x,
              y: r.y
            }
        }
        switch (Df(t)) {
          case "start":
            h[a] -= f * (n && u ? -1 : 1);
            break;
          case "end":
            h[a] += f * (n && u ? -1 : 1)
        }
        return h
      }
      async function Kf(e, t) {
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
          boundary: u = "clippingAncestors",
          rootBoundary: c = "viewport",
          elementContext: d = "floating",
          altBoundary: f = !1,
          padding: h = 0
        } = If(t, e), p = Gf(h), m = s[f ? "floating" === d ? "reference" : "floating" : d], g = qf(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(m))) || n ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(s.floating)),
          boundary: u,
          rootBoundary: c,
          strategy: l
        })), v = "floating" === d ? {
          x: r,
          y: o,
          width: a.floating.width,
          height: a.floating.height
        } : a.reference, y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(s.floating)), b = await (null == i.isElement ? void 0 : i.isElement(y)) && await (null == i.getScale ? void 0 : i.getScale(y)) || {
          x: 1,
          y: 1
        }, _ = qf(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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

      function Wf(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function $f(e) {
        return Sf.some((t => e[t] >= 0))
      }

      function Yf() {
        return "undefined" != typeof window
      }

      function Zf(e) {
        return eh(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function Qf(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function Jf(e) {
        var t;
        return null == (t = (eh(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function eh(e) {
        return !!Yf() && (e instanceof Node || e instanceof Qf(e).Node)
      }

      function th(e) {
        return !!Yf() && (e instanceof Element || e instanceof Qf(e).Element)
      }

      function nh(e) {
        return !!Yf() && (e instanceof HTMLElement || e instanceof Qf(e).HTMLElement)
      }

      function rh(e) {
        return !(!Yf() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof Qf(e).ShadowRoot)
      }

      function oh(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = ch(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
      }

      function ih(e) {
        return ["table", "td", "th"].includes(Zf(e))
      }

      function ah(e) {
        return [":popover-open", ":modal"].some((t => {
          try {
            return e.matches(t)
          } catch (e) {
            return !1
          }
        }))
      }

      function sh(e) {
        const t = lh(),
          n = th(e) ? ch(e) : e;
        return ["transform", "translate", "scale", "rotate", "perspective"].some((e => !!n[e] && "none" !== n[e])) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
      }

      function lh() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function uh(e) {
        return ["html", "body", "#document"].includes(Zf(e))
      }

      function ch(e) {
        return Qf(e).getComputedStyle(e)
      }

      function dh(e) {
        return th(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function fh(e) {
        if ("html" === Zf(e)) return e;
        const t = e.assignedSlot || e.parentNode || rh(e) && e.host || Jf(e);
        return rh(t) ? t.host : t
      }

      function hh(e) {
        const t = fh(e);
        return uh(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : nh(t) && oh(t) ? t : hh(t)
      }

      function ph(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = hh(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = Qf(o);
        if (i) {
          const e = mh(a);
          return t.concat(a, a.visualViewport || [], oh(o) ? o : [], e && n ? ph(e) : [])
        }
        return t.concat(o, ph(o, [], n))
      }

      function mh(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function gh(e) {
        const t = ch(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = nh(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          s = Tf(n) !== i || Tf(r) !== a;
        return s && (n = i, r = a), {
          width: n,
          height: r,
          $: s
        }
      }

      function vh(e) {
        return th(e) ? e : e.contextElement
      }

      function yh(e) {
        const t = vh(e);
        if (!nh(t)) return Nf(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = gh(t);
        let a = (i ? Tf(n.width) : n.width) / r,
          s = (i ? Tf(n.height) : n.height) / o;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const bh = Nf(0);

      function _h(e) {
        const t = Qf(e);
        return lh() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : bh
      }

      function wh(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = vh(e);
        let a = Nf(1);
        t && (r ? th(r) && (a = yh(r)) : a = yh(e));
        const s = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== Qf(e)) && t
        }(i, n, r) ? _h(i) : Nf(0);
        let l = (o.left + s.x) / a.x,
          u = (o.top + s.y) / a.y,
          c = o.width / a.x,
          d = o.height / a.y;
        if (i) {
          const e = Qf(i),
            t = r && th(r) ? Qf(r) : r;
          let n = e,
            o = mh(n);
          for (; o && r && t !== n;) {
            const e = yh(o),
              t = o.getBoundingClientRect(),
              r = ch(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            l *= e.x, u *= e.y, c *= e.x, d *= e.y, l += i, u += a, n = Qf(o), o = mh(n)
          }
        }
        return qf({
          width: c,
          height: d,
          x: l,
          y: u
        })
      }

      function Eh(e, t) {
        const n = dh(e).scrollLeft;
        return t ? t.left + n : wh(Jf(e)).left + n
      }

      function jh(e, t, n) {
        void 0 === n && (n = !1);
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : Eh(e, r)),
          y: r.top + t.scrollTop
        }
      }

      function kh(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = Qf(e),
            r = Jf(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            a = r.clientHeight,
            s = 0,
            l = 0;
          if (o) {
            i = o.width, a = o.height;
            const e = lh();
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
          const t = Jf(e),
            n = dh(e),
            r = e.ownerDocument.body,
            o = Cf(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            i = Cf(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let a = -n.scrollLeft + Eh(e);
          const s = -n.scrollTop;
          return "rtl" === ch(r).direction && (a += Cf(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: a,
            y: s
          }
        }(Jf(e));
        else if (th(t)) r = function(e, t) {
          const n = wh(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = nh(e) ? yh(e) : Nf(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(t, n);
        else {
          const n = _h(e);
          r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return qf(r)
      }

      function xh(e, t) {
        const n = fh(e);
        return !(n === t || !th(n) || uh(n)) && ("fixed" === ch(n).position || xh(n, t))
      }

      function Sh(e, t, n) {
        const r = nh(t),
          o = Jf(t),
          i = "fixed" === n,
          a = wh(e, !0, i, t);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = Nf(0);
        if (r || !r && !i)
          if (("body" !== Zf(t) || oh(o)) && (s = dh(t)), r) {
            const e = wh(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && (l.x = Eh(o));
        const u = !o || r || i ? Nf(0) : jh(o, s);
        return {
          x: a.left + s.scrollLeft - l.x - u.x,
          y: a.top + s.scrollTop - l.y - u.y,
          width: a.width,
          height: a.height
        }
      }

      function Ph(e) {
        return "static" === ch(e).position
      }

      function Ch(e, t) {
        if (!nh(e) || "fixed" === ch(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return Jf(e) === n && (n = n.ownerDocument.body), n
      }

      function Th(e, t) {
        const n = Qf(e);
        if (ah(e)) return n;
        if (!nh(e)) {
          let t = fh(e);
          for (; t && !uh(t);) {
            if (th(t) && !Ph(t)) return t;
            t = fh(t)
          }
          return n
        }
        let r = Ch(e, t);
        for (; r && ih(r) && Ph(r);) r = Ch(r, t);
        return r && uh(r) && Ph(r) && !sh(r) ? n : r || function(e) {
          let t = fh(e);
          for (; nh(t) && !uh(t);) {
            if (sh(t)) return t;
            if (ah(t)) return null;
            t = fh(t)
          }
          return null
        }(e) || n
      }
      const Oh = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
          } = e;
          const i = "fixed" === o,
            a = Jf(r),
            s = !!t && ah(t.floating);
          if (r === a || s && i) return n;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            u = Nf(1);
          const c = Nf(0),
            d = nh(r);
          if ((d || !d && !i) && (("body" !== Zf(r) || oh(a)) && (l = dh(r)), nh(r))) {
            const e = wh(r);
            u = yh(r), c.x = e.x + r.clientLeft, c.y = e.y + r.clientTop
          }
          const f = !a || d || i ? Nf(0) : jh(a, l, !0);
          return {
            width: n.width * u.x,
            height: n.height * u.y,
            x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
            y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
          }
        },
        getDocumentElement: Jf,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === n ? ah(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = ph(e, [], !1).filter((e => th(e) && "body" !== Zf(e))),
                o = null;
              const i = "fixed" === ch(e).position;
              let a = i ? fh(e) : e;
              for (; th(a) && !uh(a);) {
                const t = ch(a),
                  n = sh(a);
                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || oh(a) && !n && xh(e, a)) ? r = r.filter((e => e !== a)) : o = t, a = fh(a)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            a = i[0],
            s = i.reduce(((e, n) => {
              const r = kh(t, n, o);
              return e.top = Cf(r.top, e.top), e.right = Pf(r.right, e.right), e.bottom = Pf(r.bottom, e.bottom), e.left = Cf(r.left, e.left), e
            }), kh(t, a, o));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
          }
        },
        getOffsetParent: Th,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || Th,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: Sh(e.reference, await t(e.floating), e.strategy),
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
          } = gh(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: yh,
        isElement: th,
        isRTL: function(e) {
          return "rtl" === ch(e).direction
        }
      };

      function Nh(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const Rh = function(e) {
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
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = Mf(n), s = Df(n), l = "y" === Ff(n), u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = If(t, e);
                let {
                  mainAxis: f,
                  crossAxis: h,
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
                return s && "number" == typeof p && (h = "end" === s ? -1 * p : p), l ? {
                  x: h * c,
                  y: f * u
                } : {
                  x: f * u,
                  y: h * c
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
        Lh = function(e) {
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
              } = If(e, t), u = {
                x: n,
                y: r
              }, c = await Kf(t, l), d = Ff(Mf(o)), f = Hf(d);
              let h = u[f],
                p = u[d];
              if (i) {
                const e = "y" === f ? "bottom" : "right";
                h = Af(h + c["y" === f ? "top" : "left"], h, h - c[e])
              }
              if (a) {
                const e = "y" === d ? "bottom" : "right";
                p = Af(p + c["y" === d ? "top" : "left"], p, p - c[e])
              }
              const m = s.fn({
                ...t,
                [f]: h,
                [d]: p
              });
              return {
                ...m,
                data: {
                  x: m.x - n,
                  y: m.y - r,
                  enabled: {
                    [f]: i,
                    [d]: a
                  }
                }
              }
            }
          }
        },
        Ah = function(e) {
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
                elements: u
              } = t, {
                mainAxis: c = !0,
                crossAxis: d = !0,
                fallbackPlacements: f,
                fallbackStrategy: h = "bestFit",
                fallbackAxisSideDirection: p = "none",
                flipAlignment: m = !0,
                ...g
              } = If(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const v = Mf(o),
                y = Ff(s),
                b = Mf(s) === s,
                _ = await (null == l.isRTL ? void 0 : l.isRTL(u.floating)),
                w = f || (b || !m ? [Uf(s)] : function(e) {
                  const t = Uf(e);
                  return [zf(e), t, zf(t)]
                }(s)),
                E = "none" !== p;
              !f && E && w.push(... function(e, t, n, r) {
                const o = Df(e);
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
                }(Mf(e), "start" === n, r);
                return o && (i = i.map((e => e + "-" + o)), t && (i = i.concat(i.map(zf)))), i
              }(s, m, p, _));
              const j = [s, ...w],
                k = await Kf(t, g),
                x = [];
              let S = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (c && x.push(k[v]), d) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = Df(e),
                    o = Vf(e),
                    i = Bf(o);
                  let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (a = Uf(a)), [a, Uf(a)]
                }(o, a, _);
                x.push(k[e[0]], k[e[1]])
              }
              if (S = [...S, {
                  placement: o,
                  overflows: x
                }], !x.every((e => e <= 0))) {
                var P, C;
                const e = ((null == (P = i.flip) ? void 0 : P.index) || 0) + 1,
                  t = j[e];
                if (t) return {
                  data: {
                    index: e,
                    overflows: S
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (C = S.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : C.placement;
                if (!n) switch (h) {
                  case "bestFit": {
                    var T;
                    const e = null == (T = S.filter((e => {
                      if (E) {
                        const t = Ff(e.placement);
                        return t === y || "y" === t
                      }
                      return !0
                    })).map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : T[0];
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
        Ih = function(e) {
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
                ...u
              } = If(e, t), c = await Kf(t, u), d = Mf(o), f = Df(o), h = "y" === Ff(o), {
                width: p,
                height: m
              } = i.floating;
              let g, v;
              "top" === d || "bottom" === d ? (g = d, v = f === (await (null == a.isRTL ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (v = d, g = "end" === f ? "top" : "bottom");
              const y = m - c.top - c.bottom,
                b = p - c.left - c.right,
                _ = Pf(m - c[g], y),
                w = Pf(p - c[v], b),
                E = !t.middlewareData.shift;
              let j = _,
                k = w;
              if (null != (n = t.middlewareData.shift) && n.enabled.x && (k = b), null != (r = t.middlewareData.shift) && r.enabled.y && (j = y), E && !f) {
                const e = Cf(c.left, 0),
                  t = Cf(c.right, 0),
                  n = Cf(c.top, 0),
                  r = Cf(c.bottom, 0);
                h ? k = p - 2 * (0 !== e || 0 !== t ? e + t : Cf(c.left, c.right)) : j = m - 2 * (0 !== n || 0 !== r ? n + r : Cf(c.top, c.bottom))
              }
              await l({
                ...t,
                availableWidth: k,
                availableHeight: j
              });
              const x = await a.getDimensions(s.floating);
              return p !== x.width || m !== x.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        Mh = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: n
              } = t, {
                strategy: r = "referenceHidden",
                ...o
              } = If(e, t);
              switch (r) {
                case "referenceHidden": {
                  const e = Wf(await Kf(t, {
                    ...o,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: $f(e)
                    }
                  }
                }
                case "escaped": {
                  const e = Wf(await Kf(t, {
                    ...o,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: $f(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        Dh = e => ({
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
              element: u,
              padding: c = 0
            } = If(e, t) || {};
            if (null == u) return {};
            const d = Gf(c),
              f = {
                x: n,
                y: r
              },
              h = Vf(o),
              p = Bf(h),
              m = await a.getDimensions(u),
              g = "y" === h,
              v = g ? "top" : "left",
              y = g ? "bottom" : "right",
              b = g ? "clientHeight" : "clientWidth",
              _ = i.reference[p] + i.reference[h] - f[h] - i.floating[p],
              w = f[h] - i.reference[h],
              E = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(u));
            let j = E ? E[b] : 0;
            j && await (null == a.isElement ? void 0 : a.isElement(E)) || (j = s.floating[b] || i.floating[p]);
            const k = _ / 2 - w / 2,
              x = j / 2 - m[p] / 2 - 1,
              S = Pf(d[v], x),
              P = Pf(d[y], x),
              C = S,
              T = j - m[p] - P,
              O = j / 2 - m[p] / 2 + k,
              N = Af(C, O, T),
              R = !l.arrow && null != Df(o) && O !== N && i.reference[p] / 2 - (O < C ? S : P) - m[p] / 2 < 0,
              L = R ? O < C ? O - C : O - T : 0;
            return {
              [h]: f[h] + L,
              data: {
                [h]: N,
                centerOffset: O - N - L,
                ...R && {
                  alignmentOffset: L
                }
              },
              reset: R
            }
          }
        }),
        Hh = function(e) {
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
                crossAxis: u = !0
              } = If(e, t), c = {
                x: n,
                y: r
              }, d = Ff(o), f = Hf(d);
              let h = c[f],
                p = c[d];
              const m = If(s, t),
                g = "number" == typeof m ? {
                  mainAxis: m,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...m
                };
              if (l) {
                const e = "y" === f ? "height" : "width",
                  t = i.reference[f] - i.floating[e] + g.mainAxis,
                  n = i.reference[f] + i.reference[e] - g.mainAxis;
                h < t ? h = t : h > n && (h = n)
              }
              if (u) {
                var v, y;
                const e = "y" === f ? "width" : "height",
                  t = ["top", "left"].includes(Mf(o)),
                  n = i.reference[d] - i.floating[e] + (t && (null == (v = a.offset) ? void 0 : v[d]) || 0) + (t ? 0 : g.crossAxis),
                  r = i.reference[d] + i.reference[e] + (t ? 0 : (null == (y = a.offset) ? void 0 : y[d]) || 0) - (t ? g.crossAxis : 0);
                p < n ? p = n : p > r && (p = r)
              }
              return {
                [f]: h,
                [d]: p
              }
            }
          }
        },
        Bh = (e, t, n) => {
          const r = new Map,
            o = {
              platform: Oh,
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
            let u = await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: c,
                y: d
              } = Xf(u, r, l),
              f = r,
              h = {},
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
                x: c,
                y: d,
                initialPlacement: r,
                placement: f,
                strategy: o,
                middlewareData: h,
                rects: u,
                platform: a,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              c = null != g ? g : c, d = null != v ? v : d, h = {
                ...h,
                [i]: {
                  ...h[i],
                  ...y
                }
              }, b && p <= 50 && (p++, "object" == typeof b && (b.placement && (f = b.placement), b.rects && (u = !0 === b.rects ? await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : b.rects), ({
                x: c,
                y: d
              } = Xf(u, f, l))), n = -1)
            }
            return {
              x: c,
              y: d,
              placement: f,
              strategy: o,
              middlewareData: h
            }
          })(e, t, {
            ...o,
            platform: i
          })
        };
      var Fh = "undefined" != typeof document ? f.useLayoutEffect : f.useEffect;

      function Vh(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 != r--;)
              if (!Vh(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || Vh(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function zh(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Uh(e, t) {
        const n = zh(e);
        return Math.round(t * n) / n
      }

      function Gh(e) {
        const t = f.useRef(e);
        return Fh((() => {
          t.current = e
        })), t
      }
      const qh = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: n,
              padding: r
            } = "function" == typeof e ? e(t) : e;
            return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? Dh({
              element: n.current,
              padding: r
            }).fn(t) : {} : n ? Dh({
              element: n,
              padding: r
            }).fn(t) : {};
            var o
          }
        }),
        Xh = (e, t) => ({
          ...Rh(e),
          options: [e, t]
        }),
        Kh = (e, t) => ({
          ...Lh(e),
          options: [e, t]
        }),
        Wh = (e, t) => ({
          ...Hh(e),
          options: [e, t]
        }),
        $h = (e, t) => ({
          ...Ah(e),
          options: [e, t]
        }),
        Yh = (e, t) => ({
          ...Ih(e),
          options: [e, t]
        }),
        Zh = (e, t) => ({
          ...Mh(e),
          options: [e, t]
        }),
        Qh = (e, t) => ({
          ...qh(e),
          options: [e, t]
        });
      var Jh = f.forwardRef(((e, t) => {
        const {
          children: n,
          width: r = 10,
          height: o = 5,
          ...i
        } = e;
        return (0, c.jsx)($c.svg, {
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
      Jh.displayName = "Arrow";
      var ep = Jh,
        tp = "Popper",
        [np, rp] = Bc(tp),
        [op, ip] = np(tp),
        ap = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [r, o] = f.useState(null);
          return (0, c.jsx)(op, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
          })
        };
      ap.displayName = tp;
      var sp = "PopperAnchor",
        lp = f.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: r,
            ...o
          } = e, i = ip(sp, n), a = f.useRef(null), s = (0, Hc.s)(t, a);
          return f.useEffect((() => {
            i.onAnchorChange(r?.current || a.current)
          })), r ? null : (0, c.jsx)($c.div, {
            ...o,
            ref: s
          })
        }));
      lp.displayName = sp;
      var up = "PopperContent",
        [cp, dp] = np(up),
        fp = f.forwardRef(((e, t) => {
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
            sticky: h = "partial",
            hideWhenDetached: p = !1,
            updatePositionStrategy: m = "optimized",
            onPlaced: g,
            ...v
          } = e, y = ip(up, n), [b, _] = f.useState(null), w = (0, Hc.s)(t, (e => _(e))), [E, j] = f.useState(null), k = Kc(E), x = k?.width ?? 0, S = k?.height ?? 0, P = r + ("center" !== i ? "-" + i : ""), C = "number" == typeof d ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
          }, T = Array.isArray(u) ? u : [u], O = T.length > 0, N = {
            padding: C,
            boundary: T.filter(gp),
            altBoundary: O
          }, {
            refs: R,
            floatingStyles: L,
            placement: A,
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
            } = e, [c, d] = f.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [h, p] = f.useState(r);
            Vh(h, r) || p(r);
            const [m, g] = f.useState(null), [v, y] = f.useState(null), b = f.useCallback((e => {
              e !== j.current && (j.current = e, g(e))
            }), []), _ = f.useCallback((e => {
              e !== k.current && (k.current = e, y(e))
            }), []), w = i || m, E = a || v, j = f.useRef(null), k = f.useRef(null), x = f.useRef(c), S = null != l, P = Gh(l), C = Gh(o), T = Gh(u), O = f.useCallback((() => {
              if (!j.current || !k.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: h
              };
              C.current && (e.platform = C.current), Bh(j.current, k.current, e).then((e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== T.current
                };
                N.current && !Vh(x.current, t) && (x.current = t, Gt.flushSync((() => {
                  d(t)
                })))
              }))
            }), [h, t, n, C, T]);
            Fh((() => {
              !1 === u && x.current.isPositioned && (x.current.isPositioned = !1, d((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [u]);
            const N = f.useRef(!1);
            Fh((() => (N.current = !0, () => {
              N.current = !1
            })), []), Fh((() => {
              if (w && (j.current = w), E && (k.current = E), w && E) {
                if (P.current) return P.current(w, E, O);
                O()
              }
            }), [w, E, O, P, S]);
            const R = f.useMemo((() => ({
                reference: j,
                floating: k,
                setReference: b,
                setFloating: _
              })), [b, _]),
              L = f.useMemo((() => ({
                reference: w,
                floating: E
              })), [w, E]),
              A = f.useMemo((() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!L.floating) return e;
                const t = Uh(L.floating, c.x),
                  r = Uh(L.floating, c.y);
                return s ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...zh(L.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }), [n, s, L.floating, c.x, c.y]);
            return f.useMemo((() => ({
              ...c,
              update: O,
              refs: R,
              elements: L,
              floatingStyles: A
            })), [c, O, R, L, A])
          }({
            strategy: "fixed",
            placement: P,
            whileElementsMounted: (...e) => function(e, t, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: i = !0,
                elementResize: a = "function" == typeof ResizeObserver,
                layoutShift: s = "function" == typeof IntersectionObserver,
                animationFrame: l = !1
              } = r, u = vh(e), c = o || i ? [...u ? ph(u) : [], ...ph(t)] : [];
              c.forEach((e => {
                o && e.addEventListener("scroll", n, {
                  passive: !0
                }), i && e.addEventListener("resize", n)
              }));
              const d = u && s ? function(e, t) {
                let n, r = null;
                const o = Jf(e);

                function i() {
                  var e;
                  clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                }
                return function a(s, l) {
                  void 0 === s && (s = !1), void 0 === l && (l = 1), i();
                  const u = e.getBoundingClientRect(),
                    {
                      left: c,
                      top: d,
                      width: f,
                      height: h
                    } = u;
                  if (s || t(), !f || !h) return;
                  const p = {
                    rootMargin: -Of(d) + "px " + -Of(o.clientWidth - (c + f)) + "px " + -Of(o.clientHeight - (d + h)) + "px " + -Of(c) + "px",
                    threshold: Cf(0, Pf(1, l)) || 1
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
                    1 !== r || Nh(u, e.getBoundingClientRect()) || a(), m = !1
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
              }(u, n) : null;
              let f, h = -1,
                p = null;
              a && (p = new ResizeObserver((e => {
                let [r] = e;
                r && r.target === u && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame((() => {
                  var e;
                  null == (e = p) || e.observe(t)
                }))), n()
              })), u && !l && p.observe(u), p.observe(t));
              let m = l ? wh(e) : null;
              return l && function t() {
                const r = wh(e);
                m && !Nh(m, r) && n(), m = r, f = requestAnimationFrame(t)
              }(), n(), () => {
                var e;
                c.forEach((e => {
                  o && e.removeEventListener("scroll", n), i && e.removeEventListener("resize", n)
                })), null == d || d(), null == (e = p) || e.disconnect(), p = null, l && cancelAnimationFrame(f)
              }
            }(...e, {
              animationFrame: "always" === m
            }),
            elements: {
              reference: y.anchor
            },
            middleware: [Xh({
              mainAxis: o + S,
              alignmentAxis: a
            }), l && Kh({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === h ? Wh() : void 0,
              ...N
            }), l && $h({
              ...N
            }), Yh({
              ...N,
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
            }), E && Qh({
              element: E,
              padding: s
            }), vp({
              arrowWidth: x,
              arrowHeight: S
            }), p && Zh({
              strategy: "referenceHidden",
              ...N
            })]
          }), [D, H] = yp(A), B = gf(g);
          Vc((() => {
            I && B?.()
          }), [I, B]);
          const F = M.arrow?.x,
            V = M.arrow?.y,
            z = 0 !== M.arrow?.centerOffset,
            [U, G] = f.useState();
          return Vc((() => {
            b && G(window.getComputedStyle(b).zIndex)
          }), [b]), (0, c.jsx)("div", {
            ref: R.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...L,
              transform: I ? L.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: U,
              "--radix-popper-transform-origin": [M.transformOrigin?.x, M.transformOrigin?.y].join(" "),
              ...M.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, c.jsx)(cp, {
              scope: n,
              placedSide: D,
              onArrowChange: j,
              arrowX: F,
              arrowY: V,
              shouldHideArrow: z,
              children: (0, c.jsx)($c.div, {
                "data-side": D,
                "data-align": H,
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
      fp.displayName = up;
      var hp = "PopperArrow",
        pp = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        mp = f.forwardRef((function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = dp(hp, n), i = pp[o.placedSide];
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
            children: (0, c.jsx)(ep, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        }));

      function gp(e) {
        return null !== e
      }
      mp.displayName = hp;
      var vp = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [l, u] = yp(n), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [u], d = (o.arrow?.x ?? 0) + a / 2, f = (o.arrow?.y ?? 0) + s / 2;
          let h = "",
            p = "";
          return "bottom" === l ? (h = i ? c : `${d}px`, p = -s + "px") : "top" === l ? (h = i ? c : `${d}px`, p = `${r.floating.height+s}px`) : "right" === l ? (h = -s + "px", p = i ? c : `${f}px`) : "left" === l && (h = `${r.floating.width+s}px`, p = i ? c : `${f}px`), {
            data: {
              x: h,
              y: p
            }
          }
        }
      });

      function yp(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var bp = ap,
        _p = lp,
        wp = fp,
        Ep = mp,
        jp = f.forwardRef(((e, t) => {
          const {
            container: n,
            ...r
          } = e, [o, i] = f.useState(!1);
          Vc((() => i(!0)), []);
          const a = n || o && globalThis?.document?.body;
          return a ? Gt.createPortal((0, c.jsx)($c.div, {
            ...r,
            ref: t
          }), a) : null
        }));
      jp.displayName = "Portal";
      var kp = e => {
        const {
          present: t,
          children: n
        } = e, r = function(e) {
          const [t, n] = f.useState(), r = f.useRef(null), o = f.useRef(e), i = f.useRef("none"), a = e ? "mounted" : "unmounted", [s, l] = function(e, t) {
            return f.useReducer(((e, n) => t[e][n] ?? e), e)
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
          return f.useEffect((() => {
            const e = xp(r.current);
            i.current = "mounted" === s ? e : "none"
          }), [s]), Vc((() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                a = xp(t);
              l(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : n && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, l]), Vc((() => {
            if (t) {
              let e;
              const n = t.ownerDocument.defaultView ?? window,
                a = i => {
                  const a = xp(r.current).includes(i.animationName);
                  if (i.target === t && a && (l("ANIMATION_END"), !o.current)) {
                    const r = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = n.setTimeout((() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                    }))
                  }
                },
                s = e => {
                  e.target === t && (i.current = xp(r.current))
                };
              return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", a), t.addEventListener("animationend", a), () => {
                n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", a), t.removeEventListener("animationend", a)
              }
            }
            l("ANIMATION_END")
          }), [t, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(s),
            ref: f.useCallback((e => {
              r.current = e ? getComputedStyle(e) : null, n(e)
            }), [])
          }
        }(t), o = "function" == typeof n ? n({
          present: r.isPresent
        }) : f.Children.only(n), i = (0, Hc.s)(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? f.cloneElement(o, {
          ref: i
        }) : null
      };

      function xp(e) {
        return e?.animationName || "none"
      }
      kp.displayName = "Presence";
      var Sp = Object.freeze({
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
        Pp = f.forwardRef(((e, t) => (0, c.jsx)($c.span, {
          ...e,
          ref: t,
          style: {
            ...Sp,
            ...e.style
          }
        })));
      Pp.displayName = "VisuallyHidden";
      var Cp = Pp,
        [Tp, Op] = Bc("Tooltip", [rp]),
        Np = rp(),
        Rp = "TooltipProvider",
        Lp = 700,
        Ap = "tooltip.open",
        [Ip, Mp] = Tp(Rp),
        Dp = e => {
          const {
            __scopeTooltip: t,
            delayDuration: n = Lp,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, a = f.useRef(!0), s = f.useRef(!1), l = f.useRef(0);
          return f.useEffect((() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }), []), (0, c.jsx)(Ip, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: n,
            onOpen: f.useCallback((() => {
              window.clearTimeout(l.current), a.current = !1
            }), []),
            onClose: f.useCallback((() => {
              window.clearTimeout(l.current), l.current = window.setTimeout((() => a.current = !0), r)
            }), [r]),
            isPointerInTransitRef: s,
            onPointerInTransitChange: f.useCallback((e => {
              s.current = e
            }), []),
            disableHoverableContent: o,
            children: i
          })
        };
      Dp.displayName = Rp;
      var Hp = "Tooltip",
        [Bp, Fp] = Tp(Hp),
        Vp = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: a,
            delayDuration: s
          } = e, l = Mp(Hp, e.__scopeTooltip), u = Np(t), [d, h] = f.useState(null), p = xf(), m = f.useRef(0), g = a ?? l.disableHoverableContent, v = s ?? l.delayDuration, y = f.useRef(!1), [b, _] = Uc({
            prop: r,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ap))) : l.onClose(), i?.(e)
            },
            caller: Hp
          }), w = f.useMemo((() => b ? y.current ? "delayed-open" : "instant-open" : "closed"), [b]), E = f.useCallback((() => {
            window.clearTimeout(m.current), m.current = 0, y.current = !1, _(!0)
          }), [_]), j = f.useCallback((() => {
            window.clearTimeout(m.current), m.current = 0, _(!1)
          }), [_]), k = f.useCallback((() => {
            window.clearTimeout(m.current), m.current = window.setTimeout((() => {
              y.current = !0, _(!0), m.current = 0
            }), v)
          }), [v, _]);
          return f.useEffect((() => () => {
            m.current && (window.clearTimeout(m.current), m.current = 0)
          }), []), (0, c.jsx)(bp, {
            ...u,
            children: (0, c.jsx)(Bp, {
              scope: t,
              contentId: p,
              open: b,
              stateAttribute: w,
              trigger: d,
              onTriggerChange: h,
              onTriggerEnter: f.useCallback((() => {
                l.isOpenDelayedRef.current ? k() : E()
              }), [l.isOpenDelayedRef, k, E]),
              onTriggerLeave: f.useCallback((() => {
                g ? j() : (window.clearTimeout(m.current), m.current = 0)
              }), [j, g]),
              onOpen: E,
              onClose: j,
              disableHoverableContent: g,
              children: n
            })
          })
        };
      Vp.displayName = Hp;
      var zp = "TooltipTrigger",
        Up = f.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Fp(zp, n), i = Mp(zp, n), a = Np(n), s = f.useRef(null), l = (0, Hc.s)(t, s, o.onTriggerChange), u = f.useRef(!1), d = f.useRef(!1), h = f.useCallback((() => u.current = !1), []);
          return f.useEffect((() => () => document.removeEventListener("pointerup", h)), [h]), (0, c.jsx)(_p, {
            asChild: !0,
            ...a,
            children: (0, c.jsx)($c.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...r,
              ref: l,
              onPointerMove: Dc(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (d.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), d.current = !0))
              })),
              onPointerLeave: Dc(e.onPointerLeave, (() => {
                o.onTriggerLeave(), d.current = !1
              })),
              onPointerDown: Dc(e.onPointerDown, (() => {
                o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", h, {
                  once: !0
                })
              })),
              onFocus: Dc(e.onFocus, (() => {
                u.current || o.onOpen()
              })),
              onBlur: Dc(e.onBlur, o.onClose),
              onClick: Dc(e.onClick, o.onClose)
            })
          })
        }));
      Up.displayName = zp;
      var Gp = "TooltipPortal",
        [qp, Xp] = Tp(Gp, {
          forceMount: void 0
        }),
        Kp = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = Fp(Gp, t);
          return (0, c.jsx)(qp, {
            scope: t,
            forceMount: n,
            children: (0, c.jsx)(kp, {
              present: n || i.open,
              children: (0, c.jsx)(jp, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      Kp.displayName = Gp;
      var Wp = "TooltipContent",
        $p = f.forwardRef(((e, t) => {
          const n = Xp(Wp, e.__scopeTooltip),
            {
              forceMount: r = n.forceMount,
              side: o = "top",
              ...i
            } = e,
            a = Fp(Wp, e.__scopeTooltip);
          return (0, c.jsx)(kp, {
            present: r || a.open,
            children: a.disableHoverableContent ? (0, c.jsx)(em, {
              side: o,
              ...i,
              ref: t
            }) : (0, c.jsx)(Yp, {
              side: o,
              ...i,
              ref: t
            })
          })
        })),
        Yp = f.forwardRef(((e, t) => {
          const n = Fp(Wp, e.__scopeTooltip),
            r = Mp(Wp, e.__scopeTooltip),
            o = f.useRef(null),
            i = (0, Hc.s)(t, o),
            [a, s] = f.useState(null),
            {
              trigger: l,
              onClose: u
            } = n,
            d = o.current,
            {
              onPointerInTransitChange: h
            } = r,
            p = f.useCallback((() => {
              s(null), h(!1)
            }), [h]),
            m = f.useCallback(((e, t) => {
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
              s(i), h(!0)
            }), [h]);
          return f.useEffect((() => () => p()), [p]), f.useEffect((() => {
            if (l && d) {
              const e = e => m(e, d),
                t = e => m(e, l);
              return l.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t)
              }
            }
          }), [l, d, m, p]), f.useEffect((() => {
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
          }), [l, d, a, u, p]), (0, c.jsx)(em, {
            ...e,
            ref: i
          })
        })),
        [Zp, Qp] = Tp(Hp, {
          isInside: !1
        }),
        Jp = (0, Wc.Dc)("TooltipContent"),
        em = f.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            ...s
          } = e, l = Fp(Wp, n), u = Np(n), {
            onClose: d
          } = l;
          return f.useEffect((() => (document.addEventListener(Ap, d), () => document.removeEventListener(Ap, d))), [d]), f.useEffect((() => {
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
          }), [l.trigger, d]), (0, c.jsx)(_f, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: d,
            children: (0, c.jsxs)(wp, {
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
              children: [(0, c.jsx)(Jp, {
                children: r
              }), (0, c.jsx)(Zp, {
                scope: n,
                isInside: !0,
                children: (0, c.jsx)(Cp, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || r
                })
              })]
            })
          })
        }));
      $p.displayName = Wp;
      var tm = "TooltipArrow",
        nm = f.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Np(n);
          return Qp(tm, n).isInside ? null : (0, c.jsx)(Ep, {
            ...o,
            ...r,
            ref: t
          })
        }));
      nm.displayName = tm;
      var rm = Dp,
        om = Vp,
        im = Up,
        am = Kp,
        sm = $p,
        lm = nm;
      const um = ({
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
        onPointerDownOutside: h,
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
        const [j = !1, k] = (0, U.ic)({
          defaultProp: m,
          prop: g,
          onChange: v
        }), x = (0, U.ZC)(j), S = Fa({
          opacity: j ? 1 : 0,
          immediate: j && !x
        }), P = "left" === n || "right" === n ? "center" : o, C = b ? {
          container: w
        } : {}, T = b ? am : f.Fragment, O = _ ? {
          className: "foundry_nk7jgu_h3lgaa2"
        } : {}, N = _ ? lm : f.Fragment;
        return (0, c.jsx)(rm, {
          delayDuration: y,
          children: (0, c.jsxs)(om, {
            open: j,
            onOpenChange: k,
            children: [(0, c.jsx)(im, {
              asChild: !0,
              className: "foundry_nk7jgu_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, c.jsx)(T, {
              ...C,
              children: (0, c.jsx)(sm, {
                side: n,
                align: P,
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
                onPointerDownOutside: h,
                children: (0, c.jsxs)(ss.div, {
                  className: "foundry_nk7jgu_h3lgaa0",
                  style: S,
                  children: [(0, c.jsx)(F, {
                    size: "SM",
                    className: "foundry_nk7jgu_h3lgaa1",
                    asChild: !0,
                    children: (0, c.jsx)("span", {
                      children: e
                    })
                  }), (0, c.jsx)(N, {
                    ...O
                  })]
                })
              })
            })]
          })
        })
      };
      var cm = "foundry_nk7jgu_bwy1ds1",
        dm = "foundry_nk7jgu_bwy1dsg",
        fm = "foundry_nk7jgu_bwy1dsf";
      const hm = e => {
          e.preventDefault?.()
        },
        pm = (0, f.forwardRef)((({
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
          caption: f,
          showDownloadButton: h,
          defaultZoomLevel: p,
          showZoomControls: m
        }, g) => {
          const v = jc(),
            y = (0, U.Ub)("screen and (max-width: 1024px)"),
            b = n !== p,
            _ = y ? "SM" : "LG",
            w = Fa({
              opacity: b ? 1 : 0,
              immediate: (0, U.jt)()
            });
          of(["+", "=", "add", "plus"], (() => r?.()), {
            preventDefault: !0,
            enabled: m
          }), of(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0,
            enabled: m
          }), of("r", (() => d?.()), {
            preventDefault: !0,
            enabled: m
          });
          const E = (0, U.rl)() && y;
          return (0, c.jsx)(tf, {
            children: (0, c.jsxs)("div", {
              className: "foundry_nk7jgu_bwy1ds0",
              ref: g,
              children: [(0, c.jsx)(um, {
                side: "right",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: hm,
                content: (0, c.jsxs)("div", {
                  className: fm,
                  children: [v.formatMessage(Cd), (0, c.jsx)(F, {
                    size: "XS",
                    className: dm,
                    children: v.formatMessage(Td, {
                      shortcut: (0, c.jsx)(mf, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, c.jsx)(hf, {
                  size: _,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: v.formatMessage(Cd),
                  className: (0, L.$)(cm, "foundry_nk7jgu_bwy1ds2"),
                  onPress: e
                })
              }), (0, c.jsxs)("div", {
                className: "foundry_nk7jgu_bwy1ds3",
                children: [!E && m && (0, c.jsxs)(c.Fragment, {
                  children: [(0, c.jsxs)("div", {
                    className: "foundry_nk7jgu_bwy1ds4",
                    children: [(0, c.jsx)(um, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: hm,
                      content: (0, c.jsxs)("div", {
                        className: fm,
                        children: [v.formatMessage(Od), (0, c.jsx)(F, {
                          size: "XS",
                          className: dm,
                          children: v.formatMessage(Nd, {
                            shortcut: (0, c.jsx)(mf, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, c.jsx)(hf, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: v.formatMessage(Od),
                        className: (0, L.$)(cm, "foundry_nk7jgu_bwy1ds5"),
                        onPress: () => r(),
                        isDisabled: !l
                      })
                    }), (0, c.jsxs)(kd, {
                      className: "foundry_nk7jgu_bwy1dsa",
                      value: [n],
                      max: s,
                      min: a,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => i?.(e[0]),
                      children: [(0, c.jsx)(xd, {
                        className: "foundry_nk7jgu_bwy1dsb",
                        children: (0, c.jsx)(Sd, {
                          className: "foundry_nk7jgu_bwy1dsc"
                        })
                      }), (0, c.jsx)(um, {
                        side: "left",
                        portal: !1,
                        delayDuration: 0,
                        onPointerDownOutside: hm,
                        content: v.formatMessage(Dd, {
                          zoom: n.toFixed(0)
                        }),
                        children: (0, c.jsx)(Pd, {
                          className: "foundry_nk7jgu_bwy1dsd",
                          "aria-label": v.formatMessage(Md),
                          children: (0, c.jsx)("span", {
                            className: "foundry_nk7jgu_bwy1dse"
                          })
                        })
                      })]
                    }), (0, c.jsx)(um, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: hm,
                      content: (0, c.jsxs)("div", {
                        className: fm,
                        children: [v.formatMessage(Rd), (0, c.jsx)(F, {
                          size: "XS",
                          className: dm,
                          children: v.formatMessage(Ld, {
                            shortcut: (0, c.jsx)(mf, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, c.jsx)(hf, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: v.formatMessage(Rd),
                        className: (0, L.$)(cm, "foundry_nk7jgu_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !u
                      })
                    })]
                  }), (0, c.jsx)(ss.div, {
                    style: w,
                    children: (0, c.jsx)(um, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: hm,
                      content: (0, c.jsxs)("div", {
                        className: fm,
                        children: [v.formatMessage(Ad), (0, c.jsx)(F, {
                          size: "XS",
                          className: dm,
                          children: v.formatMessage(Id, {
                            shortcut: (0, c.jsx)(mf, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, c.jsx)(hf, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Undo",
                        label: v.formatMessage(Ad),
                        className: (0, L.$)(cm, "foundry_nk7jgu_bwy1ds7"),
                        onPress: d,
                        isDisabled: !b,
                        "aria-hidden": !b
                      })
                    })
                  })]
                }), h && E && (0, c.jsx)(um, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: hm,
                  content: v.formatMessage(Bd),
                  children: (0, c.jsx)(hf, {
                    size: _,
                    appearance: "tertiary",
                    icon: "Download",
                    label: v.formatMessage(Hd),
                    className: cm,
                    onPress: e
                  })
                })]
              }), (0, c.jsxs)("div", {
                className: "foundry_nk7jgu_bwy1ds8",
                children: [f && (0, c.jsxs)(c.Fragment, {
                  children: [(0, c.jsx)("div", {
                    className: "foundry_nk7jgu_bwy1dsh"
                  }), (0, c.jsx)(F, {
                    size: "SM",
                    "aria-hidden": !0,
                    asChild: "string" != typeof f,
                    children: f
                  })]
                }), h && !E && (0, c.jsx)("div", {
                  className: "foundry_nk7jgu_bwy1ds9",
                  children: (0, c.jsx)(um, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: hm,
                    content: v.formatMessage(Bd),
                    children: (0, c.jsx)(hf, {
                      size: _,
                      appearance: "tertiary",
                      icon: "Download",
                      label: v.formatMessage(Hd),
                      className: cm,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        }));
      var mm = "foundry_nk7jgu_1a74xwb4",
        gm = "focusScope.autoFocusOnMount",
        vm = "focusScope.autoFocusOnUnmount",
        ym = {
          bubbles: !1,
          cancelable: !0
        },
        bm = f.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...a
          } = e, [s, l] = f.useState(null), u = gf(o), d = gf(i), h = f.useRef(null), p = (0, Hc.s)(t, (e => l(e))), m = f.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          f.useEffect((() => {
            if (r) {
              let e = function(e) {
                  if (m.paused || !s) return;
                  const t = e.target;
                  s.contains(t) ? h.current = t : jm(h.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (m.paused || !s) return;
                  const t = e.relatedTarget;
                  null !== t && (s.contains(t) || jm(h.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && jm(s)
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
          }), [r, s, m.paused]), f.useEffect((() => {
            if (s) {
              km.add(m);
              const e = document.activeElement;
              if (!s.contains(e)) {
                const t = new CustomEvent(gm, ym);
                s.addEventListener(gm, u), s.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (jm(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(_m(s).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && jm(s))
              }
              return () => {
                s.removeEventListener(gm, u), setTimeout((() => {
                  const t = new CustomEvent(vm, ym);
                  s.addEventListener(vm, d), s.dispatchEvent(t), t.defaultPrevented || jm(e ?? document.body, {
                    select: !0
                  }), s.removeEventListener(vm, d), km.remove(m)
                }), 0)
              }
            }
          }), [s, u, d, m]);
          const g = f.useCallback((e => {
            if (!n && !r) return;
            if (m.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, i] = function(e) {
                  const t = _m(e);
                  return [wm(t, e), wm(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && jm(i, {
                select: !0
              })) : (e.preventDefault(), n && jm(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, r, m.paused]);
          return (0, c.jsx)($c.div, {
            tabIndex: -1,
            ...a,
            ref: p,
            onKeyDown: g
          })
        }));

      function _m(e) {
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

      function wm(e, t) {
        for (const n of e)
          if (!Em(n, {
              upTo: t
            })) return n
      }

      function Em(e, {
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

      function jm(e, {
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
      bm.displayName = "FocusScope";
      var km = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = xm(e, t), e.unshift(t)
          },
          remove(t) {
            e = xm(e, t), e[0]?.resume()
          }
        }
      }();

      function xm(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var Sm = 0;

      function Pm() {
        f.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? Cm()), document.body.insertAdjacentElement("beforeend", e[1] ?? Cm()), Sm++, () => {
            1 === Sm && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), Sm--
          }
        }), [])
      }

      function Cm() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var Tm = "right-scroll-bar-position",
        Om = "width-before-scroll-bar",
        Nm = n(23614),
        Rm = (0, n(19683).f)(),
        Lm = function() {},
        Am = f.forwardRef((function(e, t) {
          var n = f.useRef(null),
            r = f.useState({
              onScrollCapture: Lm,
              onWheelCapture: Lm,
              onTouchMoveCapture: Lm
            }),
            o = r[0],
            i = r[1],
            a = e.forwardProps,
            s = e.children,
            l = e.className,
            u = e.removeScrollBar,
            c = e.enabled,
            d = e.shards,
            h = e.sideCar,
            p = e.noIsolation,
            m = e.inert,
            g = e.allowPinchZoom,
            v = e.as,
            y = void 0 === v ? "div" : v,
            b = e.gapMode,
            _ = (0, vs.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            w = h,
            E = (0, Nm.S)([n, t]),
            j = (0, vs.__assign)((0, vs.__assign)({}, _), o);
          return f.createElement(f.Fragment, null, c && f.createElement(w, {
            sideCar: Rm,
            removeScrollBar: u,
            shards: d,
            noIsolation: p,
            inert: m,
            setCallbacks: i,
            allowPinchZoom: !!g,
            lockRef: n,
            gapMode: b
          }), a ? f.cloneElement(f.Children.only(s), (0, vs.__assign)((0, vs.__assign)({}, j), {
            ref: E
          })) : f.createElement(y, (0, vs.__assign)({}, j, {
            className: l,
            ref: E
          }), s))
        }));
      Am.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, Am.classNames = {
        fullWidth: Om,
        zeroRight: Tm
      };
      var Im = function(e) {
        var t = e.sideCar,
          n = (0, vs.__rest)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var r = t.read();
        if (!r) throw new Error("Sidecar medium not found");
        return f.createElement(r, (0, vs.__assign)({}, n))
      };
      Im.isSideCarExport = !0;
      var Mm = function() {
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
        Dm = function() {
          var e, t = (e = Mm(), function(t, n) {
            f.useEffect((function() {
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
        Hm = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        Bm = function(e) {
          return parseInt(e || "", 10) || 0
        },
        Fm = Dm(),
        Vm = "data-scroll-locked",
        zm = function(e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            s = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(s, "px ").concat(r, ";\n  }\n  body[").concat(Vm, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(Tm, " {\n    right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(Om, " {\n    margin-right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(Tm, " .").concat(Tm, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(Om, " .").concat(Om, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(Vm, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
        },
        Um = function() {
          var e = parseInt(document.body.getAttribute(Vm) || "0", 10);
          return isFinite(e) ? e : 0
        },
        Gm = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          f.useEffect((function() {
            return document.body.setAttribute(Vm, (Um() + 1).toString()),
              function() {
                var e = Um() - 1;
                e <= 0 ? document.body.removeAttribute(Vm) : document.body.setAttribute(Vm, e.toString())
              }
          }), []);
          var i = f.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return Hm;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [Bm(n), Bm(r), Bm(o)]
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
          return f.createElement(Fm, {
            styles: zm(i, !t, o, n ? "" : "!important")
          })
        },
        qm = !1;
      if ("undefined" != typeof window) try {
        var Xm = Object.defineProperty({}, "passive", {
          get: function() {
            return qm = !0, !0
          }
        });
        window.addEventListener("test", Xm, Xm), window.removeEventListener("test", Xm, Xm)
      } catch (e) {
        qm = !1
      }
      var Km = !!qm && {
          passive: !1
        },
        Wm = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        $m = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), Ym(e, r)) {
              var o = Zm(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        Ym = function(e, t) {
          return "v" === e ? function(e) {
            return Wm(e, "overflowY")
          }(t) : function(e) {
            return Wm(e, "overflowX")
          }(t)
        },
        Zm = function(e, t) {
          return "v" === e ? function(e) {
            return [e.scrollTop, e.scrollHeight, e.clientHeight]
          }(t) : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t)
        },
        Qm = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        Jm = function(e) {
          return [e.deltaX, e.deltaY]
        },
        eg = function(e) {
          return e && "current" in e ? e.current : e
        },
        tg = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        ng = 0,
        rg = [];

      function og(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const ig = (Rm.useMedium((function(e) {
        var t = f.useRef([]),
          n = f.useRef([0, 0]),
          r = f.useRef(),
          o = f.useState(ng++)[0],
          i = f.useState(Dm)[0],
          a = f.useRef(e);
        f.useEffect((function() {
          a.current = e
        }), [e]), f.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var t = (0, vs.__spreadArray)([e.lockRef.current], (e.shards || []).map(eg), !0).filter(Boolean);
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
        var s = f.useCallback((function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !a.current.allowPinchZoom;
            var o, i = Qm(e),
              s = n.current,
              l = "deltaX" in e ? e.deltaX : s[0] - i[0],
              u = "deltaY" in e ? e.deltaY : s[1] - i[1],
              c = e.target,
              d = Math.abs(l) > Math.abs(u) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === c.type) return !1;
            var f = $m(d, c);
            if (!f) return !0;
            if (f ? o = d : (o = "v" === d ? "h" : "v", f = $m(d, c)), !f) return !1;
            if (!r.current && "changedTouches" in e && (l || u) && (r.current = o), !o) return !0;
            var h = r.current || o;
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
                f = 0;
              do {
                var h = Zm(e, s),
                  p = h[0],
                  m = h[1] - h[2] - i * p;
                (p || m) && Ym(e, s) && (d += m, f += p), s = s instanceof ShadowRoot ? s.host : s.parentNode
              } while (!l && s !== document.body || l && (t.contains(s) || t === s));
              return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u
            }(h, t, e, "h" === h ? l : u, !0)
          }), []),
          l = f.useCallback((function(e) {
            var n = e;
            if (rg.length && rg[rg.length - 1] === i) {
              var r = "deltaY" in n ? Jm(n) : Qm(n),
                o = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && function(e, t) {
                    return e[0] === t[0] && e[1] === t[1]
                  }(e.delta, r)
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var l = (a.current.shards || []).map(eg).filter(Boolean).filter((function(e) {
                  return e.contains(n.target)
                }));
                (l.length > 0 ? s(n, l[0]) : !a.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          u = f.useCallback((function(e, n, r, o) {
            var i = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: og(r)
            };
            t.current.push(i), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== i
              }))
            }), 1)
          }), []),
          c = f.useCallback((function(e) {
            n.current = Qm(e), r.current = void 0
          }), []),
          d = f.useCallback((function(t) {
            u(t.type, Jm(t), t.target, s(t, e.lockRef.current))
          }), []),
          h = f.useCallback((function(t) {
            u(t.type, Qm(t), t.target, s(t, e.lockRef.current))
          }), []);
        f.useEffect((function() {
          return rg.push(i), e.setCallbacks({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: h
            }), document.addEventListener("wheel", l, Km), document.addEventListener("touchmove", l, Km), document.addEventListener("touchstart", c, Km),
            function() {
              rg = rg.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", l, Km), document.removeEventListener("touchmove", l, Km), document.removeEventListener("touchstart", c, Km)
            }
        }), []);
        var p = e.removeScrollBar,
          m = e.inert;
        return f.createElement(f.Fragment, null, m ? f.createElement(i, {
          styles: tg(o)
        }) : null, p ? f.createElement(Gm, {
          gapMode: e.gapMode
        }) : null)
      })), Im);
      var ag = f.forwardRef((function(e, t) {
        return f.createElement(Am, (0, vs.__assign)({}, e, {
          ref: t,
          sideCar: ig
        }))
      }));
      ag.classNames = Am.classNames;
      const sg = ag;
      var lg = new WeakMap,
        ug = new WeakMap,
        cg = {},
        dg = 0,
        fg = function(e) {
          return e && (e.host || fg(e.parentNode))
        },
        hg = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), function(e, t, n, r) {
            var o = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = fg(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            cg[n] || (cg[n] = new WeakMap);
            var i = cg[n],
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
                    l = (lg.get(e) || 0) + 1,
                    u = (i.get(e) || 0) + 1;
                  lg.set(e, l), i.set(e, u), a.push(e), 1 === l && o && ug.set(e, !0), 1 === u && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              }))
            };
            return c(t), s.clear(), dg++,
              function() {
                a.forEach((function(e) {
                  var t = lg.get(e) - 1,
                    o = i.get(e) - 1;
                  lg.set(e, t), i.set(e, o), t || (ug.has(e) || e.removeAttribute(r), ug.delete(e)), o || e.removeAttribute(n)
                })), --dg || (lg = new WeakMap, lg = new WeakMap, ug = new WeakMap, cg = {})
              }
          }(r, o, n, "aria-hidden")) : function() {
            return null
          }
        },
        pg = "Dialog",
        [mg, gg] = Bc(pg),
        [vg, yg] = mg(pg),
        bg = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: a = !0
          } = e, s = f.useRef(null), l = f.useRef(null), [u, d] = Uc({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: pg
          });
          return (0, c.jsx)(vg, {
            scope: t,
            triggerRef: s,
            contentRef: l,
            contentId: xf(),
            titleId: xf(),
            descriptionId: xf(),
            open: u,
            onOpenChange: d,
            onOpenToggle: f.useCallback((() => d((e => !e))), [d]),
            modal: a,
            children: n
          })
        };
      bg.displayName = pg;
      var _g = "DialogTrigger",
        wg = f.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = yg(_g, n), i = (0, Hc.s)(t, o.triggerRef);
          return (0, c.jsx)($c.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Fg(o.open),
            ...r,
            ref: i,
            onClick: Dc(e.onClick, o.onOpenToggle)
          })
        }));
      wg.displayName = _g;
      var Eg = "DialogPortal",
        [jg, kg] = mg(Eg, {
          forceMount: void 0
        }),
        xg = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = yg(Eg, t);
          return (0, c.jsx)(jg, {
            scope: t,
            forceMount: n,
            children: f.Children.map(r, (e => (0, c.jsx)(kp, {
              present: n || i.open,
              children: (0, c.jsx)(jp, {
                asChild: !0,
                container: o,
                children: e
              })
            })))
          })
        };
      xg.displayName = Eg;
      var Sg = "DialogOverlay",
        Pg = f.forwardRef(((e, t) => {
          const n = kg(Sg, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = yg(Sg, e.__scopeDialog);
          return i.modal ? (0, c.jsx)(kp, {
            present: r || i.open,
            children: (0, c.jsx)(Tg, {
              ...o,
              ref: t
            })
          }) : null
        }));
      Pg.displayName = Sg;
      var Cg = (0, Wc.TL)("DialogOverlay.RemoveScroll"),
        Tg = f.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = yg(Sg, n);
          return (0, c.jsx)(sg, {
            as: Cg,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, c.jsx)($c.div, {
              "data-state": Fg(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        })),
        Og = "DialogContent",
        Ng = f.forwardRef(((e, t) => {
          const n = kg(Og, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = yg(Og, e.__scopeDialog);
          return (0, c.jsx)(kp, {
            present: r || i.open,
            children: i.modal ? (0, c.jsx)(Rg, {
              ...o,
              ref: t
            }) : (0, c.jsx)(Lg, {
              ...o,
              ref: t
            })
          })
        }));
      Ng.displayName = Og;
      var Rg = f.forwardRef(((e, t) => {
          const n = yg(Og, e.__scopeDialog),
            r = f.useRef(null),
            o = (0, Hc.s)(t, n.contentRef, r);
          return f.useEffect((() => {
            const e = r.current;
            if (e) return hg(e)
          }), []), (0, c.jsx)(Ag, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Dc(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: Dc(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: Dc(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        Lg = f.forwardRef(((e, t) => {
          const n = yg(Og, e.__scopeDialog),
            r = f.useRef(!1),
            o = f.useRef(!1);
          return (0, c.jsx)(Ag, {
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
        Ag = f.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...a
          } = e, s = yg(Og, n), l = f.useRef(null), u = (0, Hc.s)(t, l);
          return Pm(), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(bm, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, c.jsx)(_f, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": Fg(s.open),
                ...a,
                ref: u,
                onDismiss: () => s.onOpenChange(!1)
              })
            }), (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsx)(Gg, {
                titleId: s.titleId
              }), (0, c.jsx)(qg, {
                contentRef: l,
                descriptionId: s.descriptionId
              })]
            })]
          })
        })),
        Ig = "DialogTitle",
        Mg = f.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = yg(Ig, n);
          return (0, c.jsx)($c.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        }));
      Mg.displayName = Ig;
      var Dg = "DialogDescription",
        Hg = f.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = yg(Dg, n);
          return (0, c.jsx)($c.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        }));
      Hg.displayName = Dg;
      var Bg = "DialogClose";

      function Fg(e) {
        return e ? "open" : "closed"
      }
      f.forwardRef(((e, t) => {
        const {
          __scopeDialog: n,
          ...r
        } = e, o = yg(Bg, n);
        return (0, c.jsx)($c.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: Dc(e.onClick, (() => o.onOpenChange(!1)))
        })
      })).displayName = Bg;
      var Vg = "DialogTitleWarning",
        [zg, Ug] = function(e, t) {
          const n = f.createContext(t),
            r = e => {
              const {
                children: t,
                ...r
              } = e, o = f.useMemo((() => r), Object.values(r));
              return (0, c.jsx)(n.Provider, {
                value: o,
                children: t
              })
            };
          return r.displayName = e + "Provider", [r, function(r) {
            const o = f.useContext(n);
            if (o) return o;
            if (void 0 !== t) return t;
            throw new Error(`\`${r}\` must be used within \`${e}\``)
          }]
        }(Vg, {
          contentName: Og,
          titleName: Ig,
          docsSlug: "dialog"
        }),
        Gg = ({
          titleId: e
        }) => {
          const t = Ug(Vg),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return f.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        qg = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ug("DialogDescriptionWarning").contentName}}.`;
          return f.useEffect((() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        Xg = bg,
        Kg = wg,
        Wg = xg,
        $g = Ng,
        Yg = Mg,
        Zg = Hg;
      const Qg = ss(Pg),
        Jg = ss($g),
        ev = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        tv = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        nv = (0, d.AK)(.77, 0, .175, 1),
        rv = ({
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
          reduceMotion: h = !1,
          defaultOpen: p,
          open: g,
          onOpenChange: v,
          showOpenButton: y,
          showDownloadButton: b,
          zoomLevel: _,
          defaultZoomLevel: w = 100,
          minZoomLevel: E = 100,
          maxZoomLevel: j = 300,
          zoomLevelStep: k = 100,
          onZoomLevelChange: x,
          gestureSettings: S,
          testId: P,
          showZoomControls: C = !0,
          disableGesturesOn: T,
          asChild: O,
          children: N,
          className: R,
          usePortal: A = !0,
          enabled: I = !0
        }) => {
          const M = (0, f.useRef)(null),
            D = (0, f.useRef)(null),
            H = (0, f.useRef)(null),
            B = (0, f.useRef)(null),
            F = za(),
            z = za(),
            G = za(),
            q = (0, f.useRef)(!1),
            X = jc(),
            K = (0, U.Ub)("screen and (max-width: 1024px)"),
            W = (0, U.rl)() && K,
            $ = (0, U.jt)(),
            Y = "pointer-devices" !== T || W,
            [Z, Q] = (0, f.useState)(!0),
            [J, ee] = (0, f.useState)(!1),
            [te = !1, ne] = (0, U.ic)({
              prop: g,
              defaultProp: p,
              onChange: v
            }),
            [re, oe] = (0, f.useState)(!1),
            [ie, ae] = (0, f.useState)(null),
            se = (0, f.useDeferredValue)(re),
            le = h || $ || p && !q.current;
          (0, f.useEffect)((() => {
            o?.()
          }), []), (0, f.useEffect)((() => {
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
                c = o?.naturalWidth ?? r.width,
                f = o?.naturalHeight ?? r.height,
                h = c / window.innerWidth,
                p = c / h,
                m = f / h,
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
                  }), H.current?.style.setProperty("opacity", "0"), await e({
                    height: "horizontal" === y ? `${window.innerHeight}px` : `${v}px`,
                    width: "horizontal" === y ? `${g}px` : `${window.innerWidth}px`,
                    x: "horizontal" === y ? b : 0,
                    y: "horizontal" === y ? 0 : b,
                    scale: w / 100,
                    immediate: le,
                    config: {
                      duration: 550,
                      easing: nv
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
                    x: ve.position[0] + ("horizontal" === y ? b : 0),
                    y: ve.position[1] + ("horizontal" === y ? 0 : b),
                    scale: ve.zoomLevel / 100,
                    objectFit: d || a,
                    objectPosition: u || s
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
                      easing: nv
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
                let t = ev;
                e?.currentSrc && (t = e?.currentSrc), B.current.src = t, await we(B.current)
              }
            }())).then((() => we(B.current))).then((() => oe(te))) : oe(!1)
          }), [te]);
          const ue = () => {
              oe(!1)
            },
            {
              loaded: ce,
              eventHandlers: de
            } = (0, U.gr)({
              enabled: se
            }),
            {
              isHovered: fe
            } = (0, U.Mk)({
              ref: D,
              enabled: se
            }),
            {
              isFocused: he
            } = (0, U.iQ)({
              ref: D,
              enabled: se
            }),
            {
              isIdle: pe
            } = (0, U.UQ)({
              leave: 300,
              activity: 3e3,
              enabled: se && !fe && !he && !W
            }),
            me = function(e, t, n) {
              const r = Ur.fun(t) && t,
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
                h = (0, f.useMemo)((() => r || 3 == arguments.length ? Ba() : void 0), []),
                p = Kr(e),
                m = [],
                g = (0, f.useRef)(null),
                v = o ? null : g.current;
              di((() => {
                g.current = m
              })), hi((() => (qr(m, (e => {
                h?.add(e.ctrl), e.ctrl.ref = h
              })), () => {
                qr(g.current, (e => {
                  e.expired && clearTimeout(e.expirationId), Gi(e.ctrl, h), e.ctrl.stop(!0)
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
                      return n ? (t.add(n), n.key) : Ua++
                    }))
                  }
                  return Ur.und(n) ? e : Ur.fun(n) ? e.map(n) : Kr(n)
                }(p, r ? r() : t, v),
                b = o && g.current || [];
              di((() => qr(b, (({
                ctrl: e,
                item: t,
                key: n
              }) => {
                Gi(e, h), Ri(u, t, n)
              }))));
              const _ = [];
              if (v && qr(v, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = _[t] = y.indexOf(e.key)) && (m[t] = e)
                })), qr(p, ((e, t) => {
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
                qr(_, ((t, r) => {
                  const o = v[r];
                  ~t ? (e = m.indexOf(o), m[e] = {
                    ...o,
                    item: p[t]
                  }) : n && m.splice(++e, 0, o)
                }))
              }
              Ur.fun(i) && m.sort(((e, t) => i(e.item, t.item)));
              let w = -a;
              const E = fi(),
                j = Di(t),
                k = new Map,
                x = (0, f.useRef)(new Map),
                S = (0, f.useRef)(!1);
              qr(m, ((e, n) => {
                const o = e.key,
                  i = e.phase,
                  u = r ? r() : t;
                let f, h;
                const p = Ri(u.delay || 0, o);
                if ("mount" == i) f = u.enter, h = "enter";
                else {
                  const e = y.indexOf(o) < 0;
                  if ("leave" != i)
                    if (e) f = u.leave, h = "leave";
                    else {
                      if (!(f = u.update)) return;
                      h = "update"
                    }
                  else {
                    if (e) return;
                    f = u.enter, h = "enter"
                  }
                }
                if (f = Ri(f, e.item, n), f = Ur.obj(f) ? Fi(f) : {
                    to: f
                  }, !f.config) {
                  const t = d || j.config;
                  f.config = Ri(t, e.item, n, h)
                }
                w += a;
                const m = {
                  ...j,
                  delay: p + w,
                  ref: c,
                  immediate: u.immediate,
                  reset: !1,
                  ...f
                };
                if ("enter" == h && Ur.und(m.from)) {
                  const o = r ? r() : t,
                    i = Ur.und(o.initial) || v ? o.from : o.initial;
                  m.from = Ri(i, e.item, n)
                }
                const {
                  onResolve: b
                } = m;
                m.onResolve = e => {
                  Ri(b, e);
                  const t = g.current,
                    n = t.find((e => e.key === o));
                  if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == n.phase) {
                      const t = Ri(s, n.item);
                      if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (n.expired = !0, !e && r > 0) return void(r <= 2147483647 && (n.expirationId = setTimeout(E, r)))
                      }
                    }
                    e && t.some((e => e.expired)) && (x.current.delete(n), l && (S.current = !0), E())
                  }
                };
                const _ = Oa(e.ctrl, m);
                "leave" === h && l ? x.current.set(e, {
                  phase: h,
                  springs: _,
                  payload: m
                }) : k.set(e, {
                  phase: h,
                  springs: _,
                  payload: m
                })
              }));
              const P = (0, f.useContext)(Da),
                C = mi(P),
                T = P !== C && zi(P);
              di((() => {
                T && qr(m, (e => {
                  e.ctrl.start({
                    default: P
                  })
                }))
              }), [P]), qr(k, ((e, t) => {
                if (x.current.size) {
                  const e = m.findIndex((e => e.key === t.key));
                  m.splice(e, 1)
                }
              })), di((() => {
                qr(x.current.size ? x.current : k, (({
                  phase: e,
                  payload: t
                }, n) => {
                  const {
                    ctrl: r
                  } = n;
                  n.phase = e, h?.add(r), T && "enter" == e && r.start({
                    default: P
                  }), t && (qi(r, t.ref), !r.ref && !h || S.current ? (r.start(t), S.current && (S.current = !1)) : r.update(t))
                }))
              }), o ? void 0 : n);
              const O = e => f.createElement(f.Fragment, null, m.map(((t, n) => {
                const {
                  springs: r
                } = k.get(t) || t.ctrl, o = e({
                  ...r
                }, t.item, t, n);
                return o && o.type ? f.createElement(o.type, {
                  ...o.props,
                  key: Ur.str(t.key) || Ur.num(t.key) ? t.key : t.ctrl.id,
                  ref: o.ref
                }) : o
              })));
              return h ? [O, h] : O
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
            [ge] = Fa((() => ({
              ref: z,
              immediate: le
            })), [se, pe, ce, Z]),
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
              onRequestedClose: u,
              onRequestingClose: c,
              onClick: d,
              onDoubleClick: h,
              gestureSettings: p = ms,
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
                w = (0, f.useRef)(null),
                E = (0, f.useRef)(null),
                [j, k] = (0, f.useState)(!1),
                x = b > r,
                S = b < o,
                P = b > r,
                C = b === r,
                [T, O] = Fa((() => ({
                  x: v[0],
                  y: v[1],
                  scale: b / 100,
                  from: {
                    scale: r / 100,
                    x: t[0],
                    y: t[1]
                  },
                  immediate: g,
                  config: hs
                }))),
                N = (e, {
                  origin: n,
                  delta: i,
                  animationConfig: a
                } = {}) => {
                  if (w.current && E.current) {
                    n || (n = [E.current.clientWidth / 2, E.current.clientHeight / 2]);
                    const s = fs(e, r, o);
                    if (s === b) return;
                    i || (i = (s - b) / 100);
                    const l = {
                      config: a || hs,
                      x: t[0],
                      y: t[1],
                      scale: b,
                      immediate: g
                    };
                    if (s <= r) y(t);
                    else {
                      const e = ds(w.current, E.current, (({
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
                    l.scale = s / 100, O(l), _(s)
                  }
                },
                R = (e, t) => e.y < t.top || e.y > t.bottom || e.x < t.left || e.x > t.right,
                {
                  handleClick: L
                } = (0, U.Rv)({
                  onDoubleClick: e => {
                    if (w.current) {
                      const t = us(w.current),
                        n = R(e, t) ? "overlay" : "content";
                      h?.({
                        target: n,
                        origin: [e.clientX, e.clientY],
                        contentBounds: t
                      })
                    }
                  },
                  onSingleClick: e => {
                    if (w.current && 0 === e.button) {
                      const t = us(w.current),
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
                containerRef: E,
                contentRef: w,
                canPan: x,
                isPanning: j,
                position: v,
                zoomLevel: b,
                zoomIn: e => {
                  N(b + i, e)
                },
                zoomOut: e => {
                  N(b - i, e)
                },
                zoomTo: N,
                resetZoom: () => {
                  y(t), _(s);
                  const e = {
                    config: ps,
                    x: t[0],
                    y: t[1],
                    scale: s / 100,
                    immediate: g
                  };
                  O(e)
                },
                canZoomIn: S,
                canZoomOut: P,
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
                    if (s) return void L(u);
                    if (o && i && !j && k(!0), l > 1) return;
                    if (a || b < r) return;
                    if (e) return v;
                    const {
                      horizontalOffset: d,
                      verticalOffset: f
                    } = ds(w.current, E.current, v, b), h = o * p.dragFactor, m = i * p.dragFactor, _ = {
                      config: hs,
                      x: t[0],
                      y: t[1],
                      immediate: g
                    };
                    if (b === r) {
                      const e = [n[0], n[1] + m],
                        {
                          y: t
                        } = cs(e, w.current),
                        r = fs(100 * Math.abs(t) / p.closePc, 0, 100);
                      _.config = ps, _.x = e[0], _.y = e[1], y(e), c?.(r)
                    } else {
                      const e = [ls(n[0] + h, -d, d), ls(n[1] + m, -f, f)];
                      _.x = e[0], _.y = e[1], y(e)
                    }
                    return O(_), n
                  },
                  onDragEnd: ({
                    memo: e
                  }) => {
                    if (E.current && w.current)
                      if (b === r) {
                        const {
                          y: e
                        } = cs(v, w.current);
                        if (fs(100 * Math.abs(e) / p.closePc, 0, 100) >= 100) u?.();
                        else {
                          const e = {
                            config: ps,
                            x: t[0],
                            y: t[1],
                            immediate: g
                          };
                          O(e), y(t), c?.(0)
                        }
                      } else if (void 0 !== e) {
                      const e = ds(w.current, E.current, v, b),
                        t = {
                          config: hs,
                          x: e.xy[0],
                          y: e.xy[1],
                          immediate: g
                        };
                      O(t), k(!1), y(e.xy)
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
                      if (i && k(!0), t) return void e();
                      N(100 * n, {
                        origin: [r, o],
                        delta: n - b / 100
                      })
                    }
                  },
                  onPinchEnd: () => {
                    E.current && w.current && k(!1)
                  },
                  onWheel: ({
                    last: e,
                    event: t,
                    movement: n
                  }) => {
                    if (w.current && E.current) {
                      const r = -1 * n[1];
                      if (r && j && k(!0), e) return;
                      const o = [t.clientX, t.clientY],
                        i = b / 100,
                        a = i + r / p.scrollFactor;
                      N(100 * a, {
                        delta: a - i,
                        origin: o
                      })
                    }
                  },
                  onWheelEnd: () => {
                    E.current && w.current && k(!1)
                  }
                },
                getCursor: () => C && !m ? "zoom-out" : C && S ? "zoom-in" : x ? j ? "grabbing" : "grab" : "pointer",
                enabled: m,
                animation: T
              }
            })({
              enabled: Y && se,
              onClick: function() {
                K ? Q(!Z) : ue()
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
                      animationConfig: ps
                    })
                  }
              },
              onRequestedClose: ue,
              onRequestingClose: e => {
                if (re) {
                  const t = 1,
                    n = .25,
                    r = fs(t - e * (t - n) / 100, n, t);
                  F.start({
                    opacity: r
                  });
                  const o = fs(1 - e / 100, 0, 1);
                  z.start({
                    opacity: o
                  })
                }
              },
              zoomLevel: _,
              defaultZoomLevel: w,
              minZoomLevel: E,
              maxZoomLevel: j,
              zoomLevelStep: k,
              onZoomLevelChange: x,
              defaultPosition: [0, 0],
              gestureSettings: S
            }),
            ye = Fa({
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
                se || ee(!1)
              },
              onRest: async () => {
                se ? ee(!0) : (ve.resetZoom(), Q(!0))
              }
            }),
            be = Fa({
              opacity: se && ce && J ? 1 : 0,
              immediate: !0,
              onRest: () => {
                se && re && ce && G.start({
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
            di((() => {
              if (t) {
                let r = 0;
                qr(e, ((e, o) => {
                  const i = e.current;
                  if (i.length) {
                    let a = n * t[o];
                    isNaN(a) ? a = r : r = a, qr(i, (e => {
                      qr(e.queue, (e => {
                        const t = e.delay;
                        e.delay = e => a + Ri(t || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let t = Promise.resolve();
                qr(e, (e => {
                  const n = e.current;
                  if (n.length) {
                    const r = n.map((e => {
                      const t = e.queue;
                      return e.queue = [], t
                    }));
                    t = t.then((() => (qr(n, ((e, t) => qr(r[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(se ? _e[0] : _e[0].reverse(), _e[1]);
          const Ee = O ? (0, c.jsx)(m.DX, {
            className: mm,
            ref: null,
            children: N
          }) : (0, c.jsx)("img", {
            alt: "",
            src: s,
            "aria-hidden": !0,
            loading: i,
            className: mm,
            crossOrigin: r,
            referrerPolicy: a
          });
          (0, f.useEffect)((() => {
            Q(!W)
          }), [W]);
          const {
            contrastMode: je
          } = (0, nn.DP)(), ke = ((e, t) => [Ac.xW.tokens, Ic("dark", t)].join(" "))(0, je);
          return (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(Xg, {
              open: te,
              children: (0, c.jsxs)("div", {
                className: (0, L.A)("foundry_nk7jgu_1a74xwb0", R),
                children: [(0, c.jsx)(Kg, {
                  asChild: !0,
                  children: (0, c.jsxs)(ss.button, {
                    className: "foundry_nk7jgu_1a74xwb3 foundry_nk7jgu_1d5mo5m0 foundry_nk7jgu_1a74xwb1",
                    onClick: async () => {
                      I && ne(!te)
                    },
                    ref: H,
                    "data-idle": !re,
                    style: {
                      aspectRatio: l,
                      objectPosition: u,
                      objectFit: d
                    },
                    children: [(0, c.jsx)(m.s6, {
                      children: X.formatMessage(Oc)
                    }), Ee, me(((e, t) => y && !t && (0, c.jsx)(ss.span, {
                      className: "foundry_nk7jgu_1a74xwb5",
                      style: e,
                      children: (0, c.jsx)(V.Plus, {
                        label: ""
                      })
                    })))]
                  })
                }), (0, c.jsxs)(Wg, {
                  ...!A && {
                    container: ie
                  },
                  children: [(0, c.jsx)(ss.img, {
                    "aria-hidden": !0,
                    src: ev,
                    ref: B,
                    className: "foundry_nk7jgu_1a74xwb2 foundry_nk7jgu_1a74xwb1",
                    style: {
                      aspectRatio: l,
                      backgroundPosition: u,
                      backgroundSize: d,
                      ...ye
                    }
                  }), me(((o, s) => s && (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(Qg, {
                      className: "foundry_nk7jgu_1a74xwb8",
                      style: o
                    }), (0, c.jsxs)(Jg, {
                      "data-testid": P,
                      onEscapeKeyDown: ue,
                      onOpenAutoFocus: tv,
                      onCloseAutoFocus: e => ((e, t) => {
                        e?.preventDefault(), t.current?.focus({
                          preventScroll: !0
                        })
                      })(e, H),
                      className: ke,
                      children: [(0, c.jsx)(m.s6, {
                        children: (0, c.jsx)(Yg, {
                          children: X.formatMessage(Nc)
                        })
                      }), (0, c.jsx)(m.s6, {
                        children: (0, c.jsx)(Zg, {
                          children: n || X.formatMessage(Rc, {
                            alt: t
                          })
                        })
                      }), (0, c.jsx)(ss.div, {
                        className: "foundry_nk7jgu_1a74xwb6",
                        style: be,
                        children: (0, c.jsx)(gs, {
                          ...ve,
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
                              cursor: ve.getCursor()
                            },
                            ...de
                          })
                        })
                      }), (0, c.jsx)(ss.div, {
                        className: "foundry_nk7jgu_1a74xwb9",
                        style: ge,
                        children: (0, c.jsx)(pm, {
                          ...ve,
                          ref: D,
                          onClose: ue,
                          caption: n,
                          onDownload: () => (e => {
                            const t = document.createElement("a");
                            t.href = e, t.download = e.substring(e.lastIndexOf("/") + 1), document.body.appendChild(t), t.click(), document.body.removeChild(t)
                          })(e),
                          showDownloadButton: b,
                          showZoomControls: C
                        })
                      })]
                    })]
                  })))]
                })]
              })
            }), !A && (0, c.jsx)("div", {
              ref: ae
            })]
          })
        },
        ov = e => {
          const t = (0, nn.Ym)();
          return (0, c.jsx)(Tc, {
            messages: Lc,
            locale: t,
            children: (0, c.jsx)(rv, {
              ...e
            })
          })
        };
      var iv = [" ", "Enter", "ArrowUp", "ArrowDown"],
        av = [" ", "Enter"],
        sv = "Select",
        [lv, uv, cv] = Yc(sv),
        [dv, fv] = Bc(sv, [cv, rp]),
        hv = rp(),
        [pv, mv] = dv(sv),
        [gv, vv] = dv(sv),
        yv = e => {
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
            autoComplete: h,
            disabled: p,
            required: m,
            form: g
          } = e, v = hv(t), [y, b] = f.useState(null), [_, w] = f.useState(null), [E, j] = f.useState(!1), k = qc(u), [x, S] = Uc({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: sv
          }), [P, C] = Uc({
            prop: a,
            defaultProp: s,
            onChange: l,
            caller: sv
          }), T = f.useRef(null), O = !y || g || !!y.closest("form"), [N, R] = f.useState(new Set), L = Array.from(N).map((e => e.props.value)).join(";");
          return (0, c.jsx)(bp, {
            ...v,
            children: (0, c.jsxs)(pv, {
              required: m,
              scope: t,
              trigger: y,
              onTriggerChange: b,
              valueNode: _,
              onValueNodeChange: w,
              valueNodeHasChildren: E,
              onValueNodeHasChildrenChange: j,
              contentId: xf(),
              value: P,
              onValueChange: C,
              open: x,
              onOpenChange: S,
              dir: k,
              triggerPointerDownPosRef: T,
              disabled: p,
              children: [(0, c.jsx)(lv.Provider, {
                scope: t,
                children: (0, c.jsx)(gv, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: f.useCallback((e => {
                    R((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: f.useCallback((e => {
                    R((t => {
                      const n = new Set(t);
                      return n.delete(e), n
                    }))
                  }), []),
                  children: n
                })
              }), O ? (0, c.jsxs)(Jv, {
                "aria-hidden": !0,
                required: m,
                tabIndex: -1,
                name: d,
                autoComplete: h,
                value: P,
                onChange: e => C(e.target.value),
                disabled: p,
                form: g,
                children: [void 0 === P ? (0, c.jsx)("option", {
                  value: ""
                }) : null, Array.from(N)]
              }, L) : null]
            })
          })
        };
      yv.displayName = sv;
      var bv = "SelectTrigger",
        _v = f.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            disabled: r = !1,
            ...o
          } = e, i = hv(n), a = mv(bv, n), s = a.disabled || r, l = (0, Hc.s)(t, a.onTriggerChange), u = uv(n), d = f.useRef("touch"), [h, p, m] = ty((e => {
            const t = u().filter((e => !e.disabled)),
              n = t.find((e => e.value === a.value)),
              r = ny(t, e, n);
            void 0 !== r && a.onValueChange(r.value)
          })), g = e => {
            s || (a.onOpenChange(!0), m()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, c.jsx)(_p, {
            asChild: !0,
            ...i,
            children: (0, c.jsx)($c.button, {
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
              "data-placeholder": ey(a.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: Dc(o.onClick, (e => {
                e.currentTarget.focus(), "mouse" !== d.current && g(e)
              })),
              onPointerDown: Dc(o.onPointerDown, (e => {
                d.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (g(e), e.preventDefault())
              })),
              onKeyDown: Dc(o.onKeyDown, (e => {
                const t = "" !== h.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || p(e.key), t && " " === e.key || iv.includes(e.key) && (g(), e.preventDefault())
              }))
            })
          })
        }));
      _v.displayName = bv;
      var wv = "SelectValue",
        Ev = f.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: i,
            placeholder: a = "",
            ...s
          } = e, l = mv(wv, n), {
            onValueNodeHasChildrenChange: u
          } = l, d = void 0 !== i, f = (0, Hc.s)(t, l.onValueNodeChange);
          return Vc((() => {
            u(d)
          }), [u, d]), (0, c.jsx)($c.span, {
            ...s,
            ref: f,
            style: {
              pointerEvents: "none"
            },
            children: ey(l.value) ? (0, c.jsx)(c.Fragment, {
              children: a
            }) : i
          })
        }));
      Ev.displayName = wv;
      var jv = f.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, c.jsx)($c.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      }));
      jv.displayName = "SelectIcon";
      var kv = e => (0, c.jsx)(jp, {
        asChild: !0,
        ...e
      });
      kv.displayName = "SelectPortal";
      var xv = "SelectContent",
        Sv = f.forwardRef(((e, t) => {
          const n = mv(xv, e.__scopeSelect),
            [r, o] = f.useState();
          if (Vc((() => {
              o(new DocumentFragment)
            }), []), !n.open) {
            const t = r;
            return t ? Gt.createPortal((0, c.jsx)(Cv, {
              scope: e.__scopeSelect,
              children: (0, c.jsx)(lv.Slot, {
                scope: e.__scopeSelect,
                children: (0, c.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, c.jsx)(Nv, {
            ...e,
            ref: t
          })
        }));
      Sv.displayName = xv;
      var Pv = 10,
        [Cv, Tv] = dv(xv),
        Ov = (0, Wc.TL)("SelectContent.RemoveScroll"),
        Nv = f.forwardRef(((e, t) => {
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
            arrowPadding: h,
            collisionBoundary: p,
            collisionPadding: m,
            sticky: g,
            hideWhenDetached: v,
            avoidCollisions: y,
            ...b
          } = e, _ = mv(xv, n), [w, E] = f.useState(null), [j, k] = f.useState(null), x = (0, Hc.s)(t, (e => E(e))), [S, P] = f.useState(null), [C, T] = f.useState(null), O = uv(n), [N, R] = f.useState(!1), L = f.useRef(!1);
          f.useEffect((() => {
            if (w) return hg(w)
          }), [w]), Pm();
          const A = f.useCallback((e => {
              const [t, ...n] = O().map((e => e.ref.current)), [r] = n.slice(-1), o = document.activeElement;
              for (const n of e) {
                if (n === o) return;
                if (n?.scrollIntoView({
                    block: "nearest"
                  }), n === t && j && (j.scrollTop = 0), n === r && j && (j.scrollTop = j.scrollHeight), n?.focus(), document.activeElement !== o) return
              }
            }), [O, j]),
            I = f.useCallback((() => A([S, w])), [A, S, w]);
          f.useEffect((() => {
            N && I()
          }), [N, I]);
          const {
            onOpenChange: M,
            triggerPointerDownPosRef: D
          } = _;
          f.useEffect((() => {
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
          }), [w, M, D]), f.useEffect((() => {
            const e = () => M(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [M]);
          const [H, B] = ty((e => {
            const t = O().filter((e => !e.disabled)),
              n = t.find((e => e.ref.current === document.activeElement)),
              r = ny(t, e, n);
            r && setTimeout((() => r.ref.current.focus()))
          })), F = f.useCallback(((e, t, n) => {
            const r = !L.current && !n;
            (void 0 !== _.value && _.value === t || r) && (P(e), r && (L.current = !0))
          }), [_.value]), V = f.useCallback((() => w?.focus()), [w]), z = f.useCallback(((e, t, n) => {
            const r = !L.current && !n;
            (void 0 !== _.value && _.value === t || r) && T(e)
          }), [_.value]), U = "popper" === r ? Lv : Rv, G = U === Lv ? {
            side: s,
            sideOffset: l,
            align: u,
            alignOffset: d,
            arrowPadding: h,
            collisionBoundary: p,
            collisionPadding: m,
            sticky: g,
            hideWhenDetached: v,
            avoidCollisions: y
          } : {};
          return (0, c.jsx)(Cv, {
            scope: n,
            content: w,
            viewport: j,
            onViewportChange: k,
            itemRefCallback: F,
            selectedItem: S,
            onItemLeave: V,
            itemTextRefCallback: z,
            focusSelectedItem: I,
            selectedItemText: C,
            position: r,
            isPositioned: N,
            searchRef: H,
            children: (0, c.jsx)(sg, {
              as: Ov,
              allowPinchZoom: !0,
              children: (0, c.jsx)(bm, {
                asChild: !0,
                trapped: _.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: Dc(o, (e => {
                  _.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, c.jsx)(_f, {
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
                    onPlaced: () => R(!0),
                    ref: x,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: Dc(b.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = O().filter((e => !e.disabled));
                        let n = t.map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (n = n.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            r = n.indexOf(t);
                          n = n.slice(r + 1)
                        }
                        setTimeout((() => A(n))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      Nv.displayName = "SelectContentImpl";
      var Rv = f.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: r,
          ...o
        } = e, i = mv(xv, n), a = Tv(xv, n), [s, l] = f.useState(null), [u, d] = f.useState(null), h = (0, Hc.s)(t, (e => d(e))), p = uv(n), m = f.useRef(!1), g = f.useRef(!0), {
          viewport: v,
          selectedItem: y,
          selectedItemText: b,
          focusSelectedItem: _
        } = a, w = f.useCallback((() => {
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
                c = window.innerWidth - Pv,
                d = Mc(i, [Pv, Math.max(Pv, c - u)]);
              s.style.minWidth = l + "px", s.style.left = d + "px"
            } else {
              const r = t.right - o.right,
                i = window.innerWidth - n.right - r,
                a = window.innerWidth - e.right - i,
                l = e.width + a,
                u = Math.max(l, t.width),
                c = window.innerWidth - Pv,
                d = Mc(i, [Pv, Math.max(Pv, c - u)]);
              s.style.minWidth = l + "px", s.style.right = d + "px"
            }
            const a = p(),
              l = window.innerHeight - 2 * Pv,
              c = v.scrollHeight,
              d = window.getComputedStyle(u),
              f = parseInt(d.borderTopWidth, 10),
              h = parseInt(d.paddingTop, 10),
              g = parseInt(d.borderBottomWidth, 10),
              _ = f + h + c + parseInt(d.paddingBottom, 10) + g,
              w = Math.min(5 * y.offsetHeight, _),
              E = window.getComputedStyle(v),
              j = parseInt(E.paddingTop, 10),
              k = parseInt(E.paddingBottom, 10),
              x = e.top + e.height / 2 - Pv,
              S = l - x,
              P = y.offsetHeight / 2,
              C = f + h + (y.offsetTop + P),
              T = _ - C;
            if (C <= x) {
              const e = a.length > 0 && y === a[a.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = u.clientHeight - v.offsetTop - v.offsetHeight,
                n = C + Math.max(S, P + (e ? k : 0) + t + g);
              s.style.height = n + "px"
            } else {
              const e = a.length > 0 && y === a[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(x, f + v.offsetTop + (e ? j : 0) + P) + T;
              s.style.height = t + "px", v.scrollTop = C - x + v.offsetTop
            }
            s.style.margin = `${Pv}px 0`, s.style.minHeight = w + "px", s.style.maxHeight = l + "px", r?.(), requestAnimationFrame((() => m.current = !0))
          }
        }), [p, i.trigger, i.valueNode, s, u, v, y, b, i.dir, r]);
        Vc((() => w()), [w]);
        const [E, j] = f.useState();
        Vc((() => {
          u && j(window.getComputedStyle(u).zIndex)
        }), [u]);
        const k = f.useCallback((e => {
          e && !0 === g.current && (w(), _?.(), g.current = !1)
        }), [w, _]);
        return (0, c.jsx)(Av, {
          scope: n,
          contentWrapper: s,
          shouldExpandOnScrollRef: m,
          onScrollButtonChange: k,
          children: (0, c.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: E
            },
            children: (0, c.jsx)($c.div, {
              ...o,
              ref: h,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      }));
      Rv.displayName = "SelectItemAlignedPosition";
      var Lv = f.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = Pv,
          ...i
        } = e, a = hv(n);
        return (0, c.jsx)(wp, {
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
      Lv.displayName = "SelectPopperPosition";
      var [Av, Iv] = dv(xv, {}), Mv = "SelectViewport", Dv = f.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          nonce: r,
          ...o
        } = e, i = Tv(Mv, n), a = Iv(Mv, n), s = (0, Hc.s)(t, i.onViewportChange), l = f.useRef(0);
        return (0, c.jsxs)(c.Fragment, {
          children: [(0, c.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }), (0, c.jsx)(lv.Slot, {
            scope: n,
            children: (0, c.jsx)($c.div, {
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
              onScroll: Dc(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = a;
                if (r?.current && n) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * Pv,
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
      Dv.displayName = Mv;
      var Hv = "SelectGroup",
        [Bv, Fv] = dv(Hv);
      f.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = xf();
        return (0, c.jsx)(Bv, {
          scope: n,
          id: o,
          children: (0, c.jsx)($c.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
          })
        })
      })).displayName = Hv;
      var Vv = "SelectLabel";
      f.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Fv(Vv, n);
        return (0, c.jsx)($c.div, {
          id: o.id,
          ...r,
          ref: t
        })
      })).displayName = Vv;
      var zv = "SelectItem",
        [Uv, Gv] = dv(zv),
        qv = f.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            value: r,
            disabled: o = !1,
            textValue: i,
            ...a
          } = e, s = mv(zv, n), l = Tv(zv, n), u = s.value === r, [d, h] = f.useState(i ?? ""), [p, m] = f.useState(!1), g = (0, Hc.s)(t, (e => l.itemRefCallback?.(e, r, o))), v = xf(), y = f.useRef("touch"), b = () => {
            o || (s.onValueChange(r), s.onOpenChange(!1))
          };
          if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, c.jsx)(Uv, {
            scope: n,
            value: r,
            disabled: o,
            textId: v,
            isSelected: u,
            onItemTextChange: f.useCallback((e => {
              h((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, c.jsx)(lv.ItemSlot, {
              scope: n,
              value: r,
              disabled: o,
              textValue: d,
              children: (0, c.jsx)($c.div, {
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
                onFocus: Dc(a.onFocus, (() => m(!0))),
                onBlur: Dc(a.onBlur, (() => m(!1))),
                onClick: Dc(a.onClick, (() => {
                  "mouse" !== y.current && b()
                })),
                onPointerUp: Dc(a.onPointerUp, (() => {
                  "mouse" === y.current && b()
                })),
                onPointerDown: Dc(a.onPointerDown, (e => {
                  y.current = e.pointerType
                })),
                onPointerMove: Dc(a.onPointerMove, (e => {
                  y.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: Dc(a.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                })),
                onKeyDown: Dc(a.onKeyDown, (e => {
                  "" !== l.searchRef?.current && " " === e.key || (av.includes(e.key) && b(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      qv.displayName = zv;
      var Xv = "SelectItemText",
        Kv = f.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            ...i
          } = e, a = mv(Xv, n), s = Tv(Xv, n), l = Gv(Xv, n), u = vv(Xv, n), [d, h] = f.useState(null), p = (0, Hc.s)(t, (e => h(e)), l.onItemTextChange, (e => s.itemTextRefCallback?.(e, l.value, l.disabled))), m = d?.textContent, g = f.useMemo((() => (0, c.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: m
          }, l.value)), [l.disabled, l.value, m]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: y
          } = u;
          return Vc((() => (v(g), () => y(g))), [v, y, g]), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)($c.span, {
              id: l.textId,
              ...i,
              ref: p
            }), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? Gt.createPortal(i.children, a.valueNode) : null]
          })
        }));
      Kv.displayName = Xv;
      var Wv = "SelectItemIndicator";
      f.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return Gv(Wv, n).isSelected ? (0, c.jsx)($c.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      })).displayName = Wv;
      var $v = "SelectScrollUpButton";
      f.forwardRef(((e, t) => {
        const n = Tv($v, e.__scopeSelect),
          r = Iv($v, e.__scopeSelect),
          [o, i] = f.useState(!1),
          a = (0, Hc.s)(t, r.onScrollButtonChange);
        return Vc((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, c.jsx)(Zv, {
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
      })).displayName = $v;
      var Yv = "SelectScrollDownButton";
      f.forwardRef(((e, t) => {
        const n = Tv(Yv, e.__scopeSelect),
          r = Iv(Yv, e.__scopeSelect),
          [o, i] = f.useState(!1),
          a = (0, Hc.s)(t, r.onScrollButtonChange);
        return Vc((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              i(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, c.jsx)(Zv, {
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
      })).displayName = Yv;
      var Zv = f.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: r,
          ...o
        } = e, i = Tv("SelectScrollButton", n), a = f.useRef(null), s = uv(n), l = f.useCallback((() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }), []);
        return f.useEffect((() => () => l()), [l]), Vc((() => {
          const e = s().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [s]), (0, c.jsx)($c.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: Dc(o.onPointerDown, (() => {
            null === a.current && (a.current = window.setInterval(r, 50))
          })),
          onPointerMove: Dc(o.onPointerMove, (() => {
            i.onItemLeave?.(), null === a.current && (a.current = window.setInterval(r, 50))
          })),
          onPointerLeave: Dc(o.onPointerLeave, (() => {
            l()
          }))
        })
      }));
      f.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, c.jsx)($c.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var Qv = "SelectArrow";
      f.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = hv(n), i = mv(Qv, n), a = Tv(Qv, n);
        return i.open && "popper" === a.position ? (0, c.jsx)(Ep, {
          ...o,
          ...r,
          ref: t
        }) : null
      })).displayName = Qv;
      var Jv = f.forwardRef((({
        __scopeSelect: e,
        value: t,
        ...n
      }, r) => {
        const o = f.useRef(null),
          i = (0, Hc.s)(r, o),
          a = Xc(t);
        return f.useEffect((() => {
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
        }), [a, t]), (0, c.jsx)($c.select, {
          ...n,
          style: {
            ...Sp,
            ...n.style
          },
          ref: i,
          defaultValue: t
        })
      }));

      function ey(e) {
        return "" === e || void 0 === e
      }

      function ty(e) {
        const t = gf(e),
          n = f.useRef(""),
          r = f.useRef(0),
          o = f.useCallback((e => {
            const o = n.current + e;
            t(o),
              function e(t) {
                n.current = t, window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout((() => e("")), 1e3))
              }(o)
          }), [t]),
          i = f.useCallback((() => {
            n.current = "", window.clearTimeout(r.current)
          }), []);
        return f.useEffect((() => () => window.clearTimeout(r.current)), []), [n, o, i]
      }

      function ny(e, t, n) {
        const r = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === r.length && (i = i.filter((e => e !== n)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(r.toLowerCase())));
        return l !== n ? l : void 0
      }
      Jv.displayName = "SelectBubbleInput";
      var ry = yv,
        oy = _v,
        iy = Ev,
        ay = jv,
        sy = kv,
        ly = Sv,
        uy = Dv,
        cy = qv,
        dy = Kv,
        fy = "ScrollArea",
        [hy, py] = Bc(fy),
        [my, gy] = hy(fy),
        vy = f.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            type: r = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...a
          } = e, [s, l] = f.useState(null), [u, d] = f.useState(null), [h, p] = f.useState(null), [m, g] = f.useState(null), [v, y] = f.useState(null), [b, _] = f.useState(0), [w, E] = f.useState(0), [j, k] = f.useState(!1), [x, S] = f.useState(!1), P = (0, Hc.s)(t, (e => l(e))), C = qc(o);
          return (0, c.jsx)(my, {
            scope: n,
            type: r,
            dir: C,
            scrollHideDelay: i,
            scrollArea: s,
            viewport: u,
            onViewportChange: d,
            content: h,
            onContentChange: p,
            scrollbarX: m,
            onScrollbarXChange: g,
            scrollbarXEnabled: j,
            onScrollbarXEnabledChange: k,
            scrollbarY: v,
            onScrollbarYChange: y,
            scrollbarYEnabled: x,
            onScrollbarYEnabledChange: S,
            onCornerWidthChange: _,
            onCornerHeightChange: E,
            children: (0, c.jsx)($c.div, {
              dir: C,
              ...a,
              ref: P,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": b + "px",
                "--radix-scroll-area-corner-height": w + "px",
                ...e.style
              }
            })
          })
        }));
      vy.displayName = fy;
      var yy = "ScrollAreaViewport",
        by = f.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            children: r,
            nonce: o,
            ...i
          } = e, a = gy(yy, n), s = f.useRef(null), l = (0, Hc.s)(t, s, a.onViewportChange);
          return (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, c.jsx)($c.div, {
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
      by.displayName = yy;
      var _y = "ScrollAreaScrollbar",
        wy = f.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = gy(_y, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: a
          } = o, s = "horizontal" === e.orientation;
          return f.useEffect((() => (s ? i(!0) : a(!0), () => {
            s ? i(!1) : a(!1)
          })), [s, i, a]), "hover" === o.type ? (0, c.jsx)(Ey, {
            ...r,
            ref: t,
            forceMount: n
          }) : "scroll" === o.type ? (0, c.jsx)(jy, {
            ...r,
            ref: t,
            forceMount: n
          }) : "auto" === o.type ? (0, c.jsx)(ky, {
            ...r,
            ref: t,
            forceMount: n
          }) : "always" === o.type ? (0, c.jsx)(xy, {
            ...r,
            ref: t
          }) : null
        }));
      wy.displayName = _y;
      var Ey = f.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = gy(_y, e.__scopeScrollArea), [i, a] = f.useState(!1);
          return f.useEffect((() => {
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
          }), [o.scrollArea, o.scrollHideDelay]), (0, c.jsx)(kp, {
            present: n || i,
            children: (0, c.jsx)(ky, {
              "data-state": i ? "visible" : "hidden",
              ...r,
              ref: t
            })
          })
        })),
        jy = f.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = gy(_y, e.__scopeScrollArea), i = "horizontal" === e.orientation, a = Uy((() => l("SCROLL_END")), 100), [s, l] = (u = {
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
          }, f.useReducer(((e, t) => u[e][t] ?? e), "hidden"));
          var u;
          return f.useEffect((() => {
            if ("idle" === s) {
              const e = window.setTimeout((() => l("HIDE")), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [s, o.scrollHideDelay, l]), f.useEffect((() => {
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
          }), [o.viewport, i, l, a]), (0, c.jsx)(kp, {
            present: n || "hidden" !== s,
            children: (0, c.jsx)(xy, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...r,
              ref: t,
              onPointerEnter: Dc(e.onPointerEnter, (() => l("POINTER_ENTER"))),
              onPointerLeave: Dc(e.onPointerLeave, (() => l("POINTER_LEAVE")))
            })
          })
        })),
        ky = f.forwardRef(((e, t) => {
          const n = gy(_y, e.__scopeScrollArea),
            {
              forceMount: r,
              ...o
            } = e,
            [i, a] = f.useState(!1),
            s = "horizontal" === e.orientation,
            l = Uy((() => {
              if (n.viewport) {
                const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                a(s ? e : t)
              }
            }), 10);
          return Gy(n.viewport, l), Gy(n.content, l), (0, c.jsx)(kp, {
            present: r || i,
            children: (0, c.jsx)(xy, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        xy = f.forwardRef(((e, t) => {
          const {
            orientation: n = "vertical",
            ...r
          } = e, o = gy(_y, e.__scopeScrollArea), i = f.useRef(null), a = f.useRef(0), [s, l] = f.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), u = Dy(s.viewport, s.content), d = {
            ...r,
            sizes: s,
            onSizesChange: l,
            hasThumb: Boolean(u > 0 && u < 1),
            onThumbChange: e => i.current = e,
            onThumbPointerUp: () => a.current = 0,
            onThumbPointerDown: e => a.current = e
          };

          function h(e, t) {
            return function(e, t, n, r = "ltr") {
              const o = Hy(n),
                i = t || o / 2,
                a = o - i,
                s = n.scrollbar.paddingStart + i,
                l = n.scrollbar.size - n.scrollbar.paddingEnd - a,
                u = n.content - n.viewport;
              return Fy([s, l], "ltr" === r ? [0, u] : [-1 * u, 0])(e)
            }(e, a.current, s, t)
          }
          return "horizontal" === n ? (0, c.jsx)(Sy, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = By(o.viewport.scrollLeft, s, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = h(e, o.dir))
            }
          }) : "vertical" === n ? (0, c.jsx)(Py, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = By(o.viewport.scrollTop, s);
                i.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = h(e))
            }
          }) : null
        })),
        Sy = f.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, i = gy(_y, e.__scopeScrollArea), [a, s] = f.useState(), l = f.useRef(null), u = (0, Hc.s)(t, l, i.onScrollbarXChange);
          return f.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, c.jsx)(Oy, {
            "data-orientation": "horizontal",
            ...o,
            ref: u,
            sizes: n,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Hy(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
              if (i.viewport) {
                const r = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(r), Vy(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && r({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: My(a.paddingLeft),
                  paddingEnd: My(a.paddingRight)
                }
              })
            }
          })
        })),
        Py = f.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, i = gy(_y, e.__scopeScrollArea), [a, s] = f.useState(), l = f.useRef(null), u = (0, Hc.s)(t, l, i.onScrollbarYChange);
          return f.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, c.jsx)(Oy, {
            "data-orientation": "vertical",
            ...o,
            ref: u,
            sizes: n,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Hy(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
              if (i.viewport) {
                const r = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(r), Vy(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && r({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: My(a.paddingTop),
                  paddingEnd: My(a.paddingBottom)
                }
              })
            }
          })
        })),
        [Cy, Ty] = hy(_y),
        Oy = f.forwardRef(((e, t) => {
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
            onResize: h,
            ...p
          } = e, m = gy(_y, n), [g, v] = f.useState(null), y = (0, Hc.s)(t, (e => v(e))), b = f.useRef(null), _ = f.useRef(""), w = m.viewport, E = r.content - r.viewport, j = gf(d), k = gf(l), x = Uy(h, 10);

          function S(e) {
            if (b.current) {
              const t = e.clientX - b.current.left,
                n = e.clientY - b.current.top;
              u({
                x: t,
                y: n
              })
            }
          }
          return f.useEffect((() => {
            const e = e => {
              const t = e.target,
                n = g?.contains(t);
              n && j(e, E)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [w, g, E, j]), f.useEffect(k, [r, k]), Gy(g, x), Gy(m.content, x), (0, c.jsx)(Cy, {
            scope: n,
            scrollbar: g,
            hasThumb: o,
            onThumbChange: gf(i),
            onThumbPointerUp: gf(a),
            onThumbPositionChange: k,
            onThumbPointerDown: gf(s),
            children: (0, c.jsx)($c.div, {
              ...p,
              ref: y,
              style: {
                position: "absolute",
                ...p.style
              },
              onPointerDown: Dc(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = g.getBoundingClientRect(), _.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), S(e))
              })),
              onPointerMove: Dc(e.onPointerMove, S),
              onPointerUp: Dc(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = _.current, m.viewport && (m.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        Ny = "ScrollAreaThumb",
        Ry = f.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Ty(Ny, e.__scopeScrollArea);
          return (0, c.jsx)(kp, {
            present: n || o.hasThumb,
            children: (0, c.jsx)(Ly, {
              ref: t,
              ...r
            })
          })
        })),
        Ly = f.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            style: r,
            ...o
          } = e, i = gy(Ny, n), a = Ty(Ny, n), {
            onThumbPositionChange: s
          } = a, l = (0, Hc.s)(t, (e => a.onThumbChange(e))), u = f.useRef(void 0), d = Uy((() => {
            u.current && (u.current(), u.current = void 0)
          }), 100);
          return f.useEffect((() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (d(), !u.current) {
                  const t = zy(e, s);
                  u.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [i.viewport, d, s]), (0, c.jsx)($c.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...r
            },
            onPointerDownCapture: Dc(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = e.clientY - t.top;
              a.onThumbPointerDown({
                x: n,
                y: r
              })
            })),
            onPointerUp: Dc(e.onPointerUp, a.onThumbPointerUp)
          })
        }));
      Ry.displayName = Ny;
      var Ay = "ScrollAreaCorner";
      f.forwardRef(((e, t) => {
        const n = gy(Ay, e.__scopeScrollArea),
          r = Boolean(n.scrollbarX && n.scrollbarY);
        return "scroll" !== n.type && r ? (0, c.jsx)(Iy, {
          ...e,
          ref: t
        }) : null
      })).displayName = Ay;
      var Iy = f.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: n,
          ...r
        } = e, o = gy(Ay, n), [i, a] = f.useState(0), [s, l] = f.useState(0), u = Boolean(i && s);
        return Gy(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        })), Gy(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        })), u ? (0, c.jsx)($c.div, {
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

      function My(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Dy(e, t) {
        const n = e / t;
        return isNaN(n) ? 0 : n
      }

      function Hy(e) {
        const t = Dy(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18)
      }

      function By(e, t, n = "ltr") {
        const r = Hy(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - r,
          l = Mc(e, "ltr" === n ? [0, a] : [-1 * a, 0]);
        return Fy([0, a], [0, s])(l)
      }

      function Fy(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }

      function Vy(e, t) {
        return e > 0 && e < t
      }
      var zy = (e, t = () => {}) => {
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

      function Uy(e, t) {
        const n = gf(e),
          r = f.useRef(0);
        return f.useEffect((() => () => window.clearTimeout(r.current)), []), f.useCallback((() => {
          window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
        }), [n, t])
      }

      function Gy(e, t) {
        const n = gf(t);
        Vc((() => {
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
      var qy = vy,
        Xy = by,
        Ky = wy,
        Wy = Ry,
        $y = "foundry_nk7jgu_uaq1gwo";
      const Yy = (0, f.forwardRef)((({
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
          value: h,
          defaultValue: p,
          onValueChange: g,
          open: v,
          defaultOpen: y,
          onOpenChange: b,
          isRequired: _,
          isDisabled: w,
          isReadOnly: E,
          className: j,
          labelledBy: k,
          renderPortal: x,
          container: S
        }, P) => {
          const C = (0, f.useRef)(null),
            T = (0, U.UP)(C, P),
            O = (0, f.useId)(),
            N = (0, f.useId)(),
            [R = !1, A] = (0, U.ic)({
              prop: v,
              defaultProp: y,
              onChange: b
            });
          return (0, c.jsxs)("div", {
            className: (0, L.$)("foundry_nk7jgu_uaq1gw0", j),
            children: [(t && !a || n) && (0, c.jsxs)("div", {
              className: "foundry_nk7jgu_uaq1gw1",
              children: [(0, c.jsx)(m.s6, {
                enabled: !!a,
                children: (0, c.jsx)(F, {
                  size: "SM",
                  className: (0, L.$)("foundry_nk7jgu_uaq1gw2", w && $y),
                  asChild: !0,
                  children: (0, c.jsxs)("label", {
                    id: O,
                    children: [t, _ && !l && (0, c.jsx)("span", {
                      className: "foundry_nk7jgu_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), n && (0, c.jsx)(F, {
                size: "XS",
                className: (0, L.$)("foundry_nk7jgu_uaq1gw3", w && $y),
                children: n
              })]
            }), (0, c.jsxs)(ry, {
              required: _,
              disabled: w,
              open: R,
              onOpenChange: () => A(!E && !R),
              value: h,
              defaultValue: p,
              onValueChange: g,
              children: [(0, c.jsxs)(oy, {
                className: (0, L.$)("foundry_nk7jgu_uaq1gw5 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd10", !!d && "foundry_nk7jgu_uaq1gw7", E && "foundry_nk7jgu_uaq1gw6"),
                ref: T,
                "data-testid": i,
                "aria-activedescendant": h,
                "aria-labelledby": k || O,
                "aria-controls": N,
                children: [(0, c.jsx)("span", {
                  className: "foundry_nk7jgu_uaq1gw8",
                  children: (0, c.jsx)(iy, {
                    placeholder: r,
                    "aria-label": h
                  })
                }), (0, c.jsx)(ay, {
                  asChild: !0,
                  className: (0, L.$)("foundry_nk7jgu_uaq1gw9", (E || w) && "foundry_nk7jgu_uaq1gwa"),
                  children: R ? (0, c.jsx)(V.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, c.jsx)(V.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, c.jsx)(Qy, {
                renderPortal: x,
                container: S,
                children: (0, c.jsx)(ly, {
                  id: N,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_nk7jgu_uaq1gwb",
                  children: (0, c.jsxs)(qy, {
                    className: "foundry_nk7jgu_uaq1gwk",
                    type: "auto",
                    children: [(0, c.jsx)(uy, {
                      className: (0, L.$)("foundry_nk7jgu_uaq1gwc", u && "foundry_nk7jgu_uaq1gwd"),
                      asChild: !0,
                      children: (0, c.jsx)(Xy, {
                        className: "foundry_nk7jgu_uaq1gwl",
                        style: {
                          overflowY: void 0
                        },
                        children: e
                      })
                    }), (0, c.jsx)(Ky, {
                      className: "foundry_nk7jgu_uaq1gwm",
                      orientation: "vertical",
                      children: (0, c.jsx)(Wy, {
                        className: "foundry_nk7jgu_uaq1gwn"
                      })
                    })]
                  })
                })
              })]
            }), o && (0, c.jsx)(m.s6, {
              enabled: !!d || s || 0 === o.length,
              children: (0, c.jsx)(F, {
                size: "SM",
                className: (0, L.$)("foundry_nk7jgu_uaq1gwf", w && $y),
                children: o
              })
            }), d && (0, c.jsxs)(F, {
              size: "SM",
              appearance: "bold",
              className: "foundry_nk7jgu_uaq1gwg",
              children: [(0, c.jsx)(V.X, {
                size: "MD",
                label: "",
                className: "foundry_nk7jgu_uaq1gwh"
              }), d]
            })]
          })
        })),
        Zy = (0, f.forwardRef)((({
          label: e,
          value: t,
          icon: n,
          iconLabel: r,
          iconPosition: o,
          isDisabled: i,
          testId: a
        }, s) => {
          const l = (0, f.useRef)(null),
            u = (0, U.UP)(l, s),
            d = n && z[n];
          return (0, c.jsxs)(cy, {
            value: t,
            className: "foundry_nk7jgu_uaq1gwe foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd10",
            ref: u,
            disabled: i,
            "data-testid": a,
            children: [d && "left" === o && (0, c.jsx)(d, {
              className: "foundry_nk7jgu_uaq1gwi",
              label: r || "",
              size: "LG"
            }), (0, c.jsx)(dy, {
              asChild: !0,
              children: (0, c.jsx)("span", {
                className: "foundry_nk7jgu_uaq1gwp",
                children: e
              })
            }), d && "right" === o && (0, c.jsx)(d, {
              label: r || "",
              size: "LG",
              className: "foundry_nk7jgu_uaq1gwj"
            })]
          })
        })),
        Qy = ({
          renderPortal: e = !0,
          container: t,
          children: n
        }) => e ? (0, c.jsx)(sy, {
          container: t,
          children: n
        }) : (0, c.jsx)(c.Fragment, {
          children: n
        }),
        Jy = ({
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
        eb = ({
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
        tb = ({
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
        nb = ({
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
        rb = ({
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
        ob = ({
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

      function ib(e = {}) {
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

      function ab(e, t, n) {
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
          pressProps: f,
          isPressed: h
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
        } = ft(e, n), v = ge(f, g), y = W(e, {
          labelable: !0
        });
        return Z(n, t.isSelected, t.setSelected), {
          labelProps: ge(p, {
            onClick: e => e.preventDefault()
          }),
          inputProps: ge(y, {
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
          isPressed: h || m,
          isDisabled: r,
          isReadOnly: o,
          isInvalid: d || "invalid" === c
        }
      }

      function sb(e) {
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

      function lb(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function ub(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? lb(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = sb(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lb(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function cb(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var db = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        fb = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = ub(ub({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) db(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cb(e.variantClassNames, (e => cb(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        hb = fb({
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
        pb = fb({
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
        mb = fb({
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
        gb = fb({
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
      const vb = (0, f.forwardRef)((({
          isChecked: e,
          defaultChecked: t,
          onCheckedChange: n,
          label: o,
          description: i,
          size: a = "MD",
          appearance: s = "primary",
          isIndeterminate: l,
          hideLabel: u,
          testId: h,
          errorMessage: p,
          className: g,
          ...v
        }, y) => {
          const b = (0, f.useRef)(null),
            _ = (0, U.UP)(b, y),
            w = (0, f.useId)(),
            {
              setSelected: E,
              ...j
            } = ib({
              isSelected: e,
              defaultSelected: t,
              onChange: n
            }),
            {
              inputProps: k,
              isDisabled: x,
              isReadOnly: S,
              isInvalid: P,
              isSelected: C
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
                  isSelected: u,
                  isPressed: c,
                  isDisabled: d,
                  isReadOnly: h
                } = ab({
                  ...e,
                  isInvalid: o
                }, t, n);
              ht(e, r, n);
              let {
                isIndeterminate: p,
                isRequired: m,
                validationBehavior: g = "aria"
              } = e;
              (0, f.useEffect)((() => {
                n.current && (n.current.indeterminate = !!p)
              }));
              let {
                pressProps: v
              } = Wt({
                isDisabled: d || h,
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
                  checked: u,
                  "aria-required": m && "aria" === g || void 0,
                  required: m && "native" === g
                },
                isSelected: u,
                isPressed: c,
                isDisabled: d,
                isReadOnly: h,
                isInvalid: o,
                validationErrors: i,
                validationDetails: a
              }
            }({
              ...v,
              "aria-label": o,
              id: w
            }, {
              ...j,
              setSelected: v.isReadOnly ? () => !1 : E
            }, b),
            T = (0, d.v6)({
              ...k,
              "aria-checked": C,
              className: g
            }, {
              className: "foundry_nk7jgu_11gbdty1"
            }),
            O = l ? r[`Dash${a}`] : r[`Check${a}`],
            N = P && !!p;
          return (0, c.jsxs)("label", {
            className: "foundry_nk7jgu_11gbdty0",
            children: [(0, c.jsxs)("div", {
              className: pb({
                size: a
              }),
              children: [(0, c.jsx)(m.s6, {
                children: (0, c.jsx)("input", {
                  ...T,
                  ref: _
                })
              }), (0, c.jsx)("div", {
                className: hb({
                  size: a,
                  appearance: s
                }),
                "aria-hidden": "true",
                "data-state": l ? "mixed" : C ? "checked" : "unchecked",
                "data-disabled": x || S,
                "data-testid": h,
                children: (0, c.jsx)("span", {
                  className: "foundry_nk7jgu_11gbdtyc",
                  children: (C || l) && (0, c.jsx)(O, {
                    "aria-hidden": "true"
                  })
                })
              })]
            }), (0, c.jsx)(m.s6, {
              enabled: !!u,
              children: (0, c.jsxs)("div", {
                className: gb({
                  size: a,
                  isDisabled: x
                }),
                children: [(0, c.jsx)("p", {
                  className: mb({
                    size: a
                  }),
                  children: o
                }), i && !N && (0, c.jsx)("p", {
                  className: "foundry_nk7jgu_11gbdtym foundry_nk7jgu_8kowh41 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
                  children: i
                }), N && (0, c.jsx)("p", {
                  className: "foundry_nk7jgu_11gbdtyn foundry_nk7jgu_11gbdtym foundry_nk7jgu_8kowh41 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
                  children: p
                })]
              })
            })]
          })
        })),
        yb = new WeakMap;

      function bb(e, t) {
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
        }(e, t) && (!e.parentElement || bb(e.parentElement, e))
      }

      function _b(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function wb(e, t, n) {
        let r = (null == t ? void 0 : t.tabbable) ? ke : je,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = Q(o),
          a = function(e, t, n, r) {
            return e.createTreeWalker(t, n, r)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !r(e) || !bb(e) || n && !_b(e, n) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a
      }
      class Eb {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new jb({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && _b(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n && (n.removeChild(t), r.size > 0 && r.forEach((e => n && n.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new Eb;
          var n;
          for (let r of this.traverse()) t.addTreeNode(r.scopeRef, null !== (n = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, r.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new jb({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class jb {
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
      new Eb;
      const kb = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        xb = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Sb(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return kb.has(t.script)
        }
        let t = e.split("-")[0];
        return xb.has(t)
      }
      const Pb = Symbol.for("react-aria.i18n.locale");

      function Cb() {
        let e = "undefined" != typeof window && window[Pb] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Sb(e) ? "rtl" : "ltr"
        }
      }
      let Tb = Cb(),
        Ob = new Set;

      function Nb() {
        Tb = Cb();
        for (let e of Ob) e(Tb)
      }
      const Rb = f.createContext(null);

      function Lb() {
        let e = function() {
          let e = ue(),
            [t, n] = (0, f.useState)(Tb);
          return (0, f.useEffect)((() => (0 === Ob.size && window.addEventListener("languagechange", Nb), Ob.add(n), () => {
            Ob.delete(n), 0 === Ob.size && window.removeEventListener("languagechange", Nb)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, f.useContext)(Rb) || e
      }

      function Ab(e, t) {
        let {
          name: n,
          isReadOnly: r,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: s = "aria"
        } = e, {
          direction: l
        } = Lb(), {
          isInvalid: u,
          validationErrors: c,
          validationDetails: d
        } = t.displayValidation, {
          labelProps: h,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: g
        } = be({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || c
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
          } = e, i = (0, f.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: a,
            removeAllGlobalListeners: s
          } = Bt(), l = (0, f.useCallback)((e => {
            e.currentTarget.contains(e.target) && i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, s(), n && n(e), o && o(!1))
          }), [n, o, i, s]), u = Te(l), c = (0, f.useCallback)((e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = Q(e.target),
              n = rt(t);
            if (!i.current.isFocusWithin && n === ot(e.nativeEvent)) {
              r && r(e), o && o(!0), i.current.isFocusWithin = !0, u(e);
              let n = e.currentTarget;
              a(t, "focus", (e => {
                if (i.current.isFocusWithin && !nt(n, e.target)) {
                  let r = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  Ce(r, n);
                  let o = Pe(r);
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
        }), b = he(n);
        return yb.set(t, {
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
              let r, o = wb(e.currentTarget, {
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
          labelProps: h,
          descriptionProps: m,
          errorMessageProps: g,
          isInvalid: u,
          validationErrors: c,
          validationDetails: d
        }
      }
      let Ib = Math.round(1e10 * Math.random()),
        Mb = 0;

      function Db(e) {
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
            r = e, o = t, i = n[t], (o = Db(o)) in r ? Object.defineProperty(r, o, {
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
            for (var [u, c] of e.compoundVariants) Vb(u, r, e.defaultVariants) && (n += " " + c);
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
      const Gb = (0, f.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        qb = (0, f.forwardRef)((({
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
          orientation: h = "vertical",
          ...p
        }, g) => {
          const {
            children: v
          } = p, y = (0, f.useRef)(null), b = (0, U.UP)(y, g), _ = (0, f.useId)(), w = function(e) {
            let t = (0, f.useMemo)((() => e.name || `radio-group-${Ib}-${++Mb}`), [e.name]);
            var n;
            let [r, o] = ve(e.value, null !== (n = e.defaultValue) && void 0 !== n ? n : null, e.onChange), [i, a] = (0, f.useState)(null), s = _t({
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
          }(p), E = {
            state: w,
            size: n,
            appearance: r
          }, {
            radioGroupProps: j,
            labelProps: k,
            descriptionProps: x,
            isInvalid: S,
            errorMessageProps: P
          } = Ab({
            ...p,
            id: p.id || _,
            label: e,
            isRequired: i,
            description: t,
            orientation: h
          }, w), C = (0, d.v6)({
            ...j,
            className: l
          }, {
            className: "foundry_nk7jgu_njguqn0",
            "aria-errormessage": P?.id
          }), T = S && !!u;
          return (0, c.jsxs)("div", {
            ref: b,
            "data-testid": s,
            ...C,
            children: [(0, c.jsx)(m.s6, {
              enabled: !!o,
              children: (0, c.jsxs)("div", {
                className: "foundry_nk7jgu_njguqn7",
                children: [(0, c.jsx)(F, {
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
                }), t && (0, c.jsx)(F, {
                  size: "XS",
                  ...x,
                  className: "foundry_nk7jgu_njguqna foundry_nk7jgu_8kowh41 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
                  children: t
                })]
              })
            }), (0, c.jsx)("div", {
              className: Ub({
                size: n,
                orientation: h
              }),
              children: (0, c.jsx)(Gb.Provider, {
                value: E,
                children: v
              })
            }), T && (0, c.jsxs)(F, {
              size: "SM",
              appearance: "bold",
              ...P,
              className: "foundry_nk7jgu_njguqnb",
              children: [(0, c.jsx)(V.X, {
                size: "MD",
                label: "",
                className: "foundry_nk7jgu_njguqnc"
              }), u]
            })]
          })
        })),
        Xb = ({
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
        Kb = ({
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
        Wb = ({
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
      var $b = zb({
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
        Yb = zb({
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
        Zb = zb({
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
        Qb = zb({
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
      const Jb = (0, f.forwardRef)((({
        label: e,
        description: t,
        hideLabel: n,
        testId: r,
        className: i,
        ...a
      }, s) => {
        const l = (0, f.useRef)(null),
          u = (0, U.UP)(l, s),
          d = (0, f.useId)(),
          h = (0, f.useContext)(Gb),
          {
            state: p,
            appearance: g,
            size: v
          } = h,
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
              } = Wt({
                isDisabled: s
              }),
              {
                pressProps: d,
                isPressed: f
              } = Wt({
                isDisabled: s,
                onPress() {
                  var e;
                  t.setSelectedValue(r), null === (e = n.current) || void 0 === e || e.focus()
                }
              }),
              {
                focusableProps: h
              } = ft(ge(e, {
                onFocus: () => t.setLastFocusedValue(r)
              }), n),
              p = ge(u, h),
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
            } = yb.get(t);
            return Z(n, t.selectedValue, t.setSelectedValue), ht({
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
              isPressed: c || f
            }
          }({
            ...a,
            "aria-label": e,
            id: a.id || d
          }, p, l),
          b = y.checked,
          _ = y.disabled || p?.isReadOnly,
          w = o[`Dot${v}`];
        return (0, c.jsxs)("label", {
          className: (0, L.$)("foundry_nk7jgu_1pfduet0", i),
          children: [(0, c.jsxs)("div", {
            className: Zb({
              size: v
            }),
            children: [(0, c.jsx)(m.s6, {
              children: (0, c.jsx)("input", {
                ...y,
                ref: u,
                className: "foundry_nk7jgu_1pfduet1"
              })
            }), (0, c.jsx)("div", {
              className: Yb({
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
          }), (0, c.jsx)(m.s6, {
            enabled: !!n,
            children: (0, c.jsxs)("div", {
              className: Qb({
                size: v
              }),
              children: [(0, c.jsx)("p", {
                className: $b({
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

      function e_(e) {
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

      function t_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function n_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? t_(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = e_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function r_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var o_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        i_ = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = n_(n_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) o_(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return r_(e.variantClassNames, (e => r_(e, (e => e.split(" ")[0]))))
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
      const a_ = (0, f.forwardRef)((({
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
            d = o ? m.DX : l;
          return (0, c.jsx)(d, {
            ref: s,
            className: (0, L.$)(i_({
              thickness: n,
              orientation: t
            }), e),
            role: u,
            "aria-orientation": t,
            "data-testid": i,
            ...a
          })
        })),
        s_ = ({
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
        l_ = ({
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
        u_ = ({
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

      function c_(e) {
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

      function d_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function f_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? d_(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = c_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function h_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var p_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        m_ = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = f_(f_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) p_(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return h_(e.variantClassNames, (e => h_(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        g_ = m_({
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
        v_ = m_({
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
        y_ = m_({
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
        b_ = m_({
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
        __ = m_({
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
        w_ = m_({
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
      const E_ = (0, f.forwardRef)((({
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
      }, h) => {
        const p = (0, f.useRef)(null),
          g = (0, U.UP)(p, h),
          v = (0, f.useId)(),
          y = ib(d),
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
            } = ab(e, t, n);
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
          j = i ? z[i] : u_,
          k = a ? z[a] : l_;
        return (0, c.jsxs)("label", {
          className: (0, L.$)("foundry_nk7jgu_okz6z20", u),
          children: [(0, c.jsxs)("div", {
            className: __({
              appearance: r
            }),
            "data-state": E ? "selected" : "unselected",
            "data-disabled": _ || w,
            "data-testid": l,
            children: [(0, c.jsx)(m.s6, {
              children: (0, c.jsx)("input", {
                ...b,
                ref: g
              })
            }), (0, c.jsxs)("div", {
              className: b_({
                size: n
              }),
              "aria-hidden": "true",
              children: [(0, c.jsx)("div", {
                className: g_({
                  size: n,
                  isSelected: E
                }),
                children: (0, c.jsx)(s_, {})
              }), o && (0, c.jsxs)(c.Fragment, {
                children: [(0, c.jsx)("div", {
                  className: v_({
                    size: n,
                    isSelected: E,
                    position: "left"
                  }),
                  children: (0, c.jsx)(j, {
                    label: ""
                  })
                }), (0, c.jsx)("div", {
                  className: v_({
                    size: n,
                    isSelected: E,
                    position: "right"
                  }),
                  children: (0, c.jsx)(k, {
                    label: ""
                  })
                })]
              })]
            })]
          }), (0, c.jsx)(m.s6, {
            enabled: !!s,
            children: (0, c.jsxs)("div", {
              className: w_({
                size: n,
                isDisabled: _
              }),
              children: [(0, c.jsx)("p", {
                className: y_({
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
      E_.displayName = "Switch";
      const j_ = (0, f.forwardRef)((({
        asChild: e,
        testId: t,
        ...n
      }, r) => {
        const o = e ? m.DX : "h1",
          i = (0, d.v6)({
            className: "foundry_nk7jgu_1pi1yv40 foundry_nk7jgu_tdsdcd1 foundry_nk7jgu_tdsdcd0"
          }, n);
        return (0, c.jsx)(o, {
          ref: r,
          "data-testid": t,
          ...i
        })
      }));

      function k_(e) {
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

      function x_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function S_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? x_(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = k_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function P_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var C_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        T_ = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = S_(S_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) C_(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return P_(e.variantClassNames, (e => P_(e, (e => e.split(" ")[0]))))
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
      const O_ = (0, f.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const a = e ? m.DX : "p",
          s = (0, d.v6)({
            className: T_({
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

      function L_(e) {
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

      function A_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var I_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        M_ = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = L_(L_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) I_(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return A_(e.variantClassNames, (e => A_(e, (e => e.split(" ")[0]))))
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
      const D_ = (0, f.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...r
      }, o) => {
        const i = e ? m.DX : "p",
          a = (0, d.v6)({
            className: M_({
              appearance: n
            })
          }, r);
        return (0, c.jsx)(i, {
          ref: o,
          "data-testid": t,
          ...a
        })
      }));
      var H_ = n(45013);

      function B_(e, t) {
        var n = {};
        if ("object" == typeof t) {
          var r = e;
          (0, H_.Bx)(t, ((e, t) => {
            if (null != e) {
              var o = (0, H_.Jt)(r, t);
              n[(0, H_.Tm)(o)] = String(e)
            }
          }))
        } else {
          var o = e;
          for (var i in o) {
            var a = o[i];
            null != a && (n[(0, H_.Tm)(i)] = a)
          }
        }
        return Object.defineProperty(n, "toString", {
          value: function() {
            return Object.keys(this).map((e => "".concat(e, ":").concat(this[e]))).join(";")
          },
          writable: !1
        }), n
      }

      function F_(e) {
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

      function V_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function z_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? V_(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = F_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function U_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      n(40481);
      var G_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        q_ = "var(--foundry_nk7jgu_9dxgbc2)",
        X_ = "var(--foundry_nk7jgu_9dxgbc3)",
        K_ = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = z_(z_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) G_(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return U_(e.variantClassNames, (e => U_(e, (e => e.split(" ")[0]))))
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
        W_ = "var(--foundry_nk7jgu_9dxgbc0)",
        $_ = "var(--foundry_nk7jgu_9dxgbc1)";
      const Y_ = (0, f.forwardRef)((({
        asChild: e,
        testId: t,
        children: n,
        colorOverride: r,
        label: o,
        size: i = "MD",
        ...a
      }, s) => {
        const l = (0, nn.zQ)(),
          u = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
          f = (0, d.v6)({
            className: K_({
              size: u
            }),
            "data-testid": t,
            style: B_({
              [W_]: r?.pulseColorBackground,
              [$_]: r?.pulseColorForeground,
              [q_]: r?.gradientColorBackground,
              [X_]: r?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, a),
          h = e ? m.DX : "div";
        return (0, c.jsx)(h, {
          ref: s,
          ...f,
          children: e ? (0, c.jsx)(m.xV, {
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

      function Z_(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function Q_(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
          if (Array.isArray(e) || (n = function(e, t) {
              if (e) {
                if ("string" == typeof e) return Z_(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Z_(e, t) : void 0
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

      function J_(e, t, n) {
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

      function ew(e) {
        return ew = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, ew(e)
      }

      function tw() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (tw = function() {
          return !!e
        })()
      }

      function nw(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function rw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nw(Object(n), !0).forEach((function(t) {
            J_(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nw(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function ow(e, t) {
        return ow = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, ow(e, t)
      }

      function iw(e, t) {
        var n, r = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          a = r,
          s = "",
          l = Q_(e);
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

      function aw(e, t) {
        var n, r = t.mask,
          o = t.replacement,
          i = t.separate,
          a = t.showMask,
          s = 0,
          l = "",
          u = Q_(r);
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

      function sw(e, t) {
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

      function lw(e) {
        return e.length > 0 ? J_({}, e, /./) : {}
      }

      function uw(e, t) {
        for (var n = t.start, r = void 0 === n ? 0 : n, o = t.end, i = t.mask, a = t.replacement, s = t.separate, l = e.slice(r, o), u = i.slice(r, o), c = "", d = 0; d < u.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(a, u[d]);
          f && void 0 !== l[d] && l[d] !== u[d] ? c += l[d] : f && s && (c += u[d])
        }
        return c
      }

      function cw(e, t) {
        var n = t.mask,
          r = t.replacement,
          o = "string" == typeof r ? lw(r) : r,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return aw(iw(e, {
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
      var dw = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function fw(e) {
        return dw.includes(e) ? "\\".concat(e) : e
      }

      function hw(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function pw(e, t, n) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function mw(e, t, n) {
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

      function gw(e) {
        return gw = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, gw(e)
      }

      function vw() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (vw = function() {
          return !!e
        })()
      }

      function yw(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function bw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yw(Object(n), !0).forEach((function(t) {
            mw(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yw(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function _w(e, t) {
        return _w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, _w(e, t)
      }

      function ww(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return ww = function(e) {
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
              if (vw()) return Reflect.construct.apply(null, arguments);
              var r = [null];
              r.push.apply(r, t);
              var o = new(e.bind.apply(e, r));
              return n && _w(o, n.prototype), o
            }(e, arguments, gw(this).constructor)
          }
          return n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), _w(n, e)
        }, ww(e)
      }
      var Ew, jw = function(e) {
          function t(e) {
            var n;
            return hw(this, t), (n = function(e, t, n) {
              return t = gw(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, vw() ? Reflect.construct(t, n || [], gw(e).constructor) : t.apply(e, n))
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
            }), t && _w(e, t)
          }(t, e), pw(t)
        }(ww(Error)),
        kw = ["options"],
        xw = ["text", "email", "tel", "search", "url"],
        Sw = pw((function e(t) {
          var n = t.init,
            r = t.tracking;
          hw(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (xw.includes(e.type)) {
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
                f = c.options,
                h = {
                  value: d,
                  options: f,
                  fallbackOptions: f
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
              Object.defineProperty(e, "value", bw(bw({}, g), {}, {
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
                    if (p.cachedId === p.id) throw new jw("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      a = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === a || null === s) throw new jw("The selection attributes have not been initialized.");
                    var l, u = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = u.length), a > m.selectionStart ? l = "insert" : a <= m.selectionStart && a < m.selectionEnd ? l = "deleteBackward" : a === m.selectionEnd && i.length < u.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > u.length) throw new jw("Input type detection error.");
                    var c = "",
                      d = m.selectionStart,
                      f = m.selectionEnd;
                    if ("insert" === l) c = i.slice(m.selectionStart, a);
                    else {
                      var g = u.length - i.length;
                      d = a, f = a + g
                    }
                    h.value !== u ? h.options = h.fallbackOptions : h.fallbackOptions = h.options;
                    var v = h.options,
                      y = r({
                        inputType: l,
                        previousValue: u,
                        previousOptions: v,
                        value: i,
                        addedValue: c,
                        changeStart: d,
                        changeEnd: f,
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
                      }(y, kw);
                    e.value = _.value, e.setSelectionRange(_.selectionStart, _.selectionEnd), h.value = _.value, h.options = b, m.selectionStart = _.selectionStart, m.selectionEnd = _.selectionEnd, null === (n = e._valueTracker) || void 0 === n || null === (o = n.setValue) || void 0 === o || o.call(n, u)
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
      Ew = Sw, Object.defineProperty(Ew.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var Pw, Cw = ["track", "modify"];

      function Tw(e) {
        var t, n, r, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? lw(e.replacement) : null !== (n = e.replacement) && void 0 !== n ? n : {},
          showMask: null !== (r = e.showMask) && void 0 !== r && r,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var Ow = function() {
        function e() {
          var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, n) {
            return t = ew(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, tw() ? Reflect.construct(t, n || [], ew(e).constructor) : t.apply(e, n))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                r = e.controlled,
                o = Tw(n),
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
                l = Tw(n),
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
                }(l, Cw),
                f = d.mask,
                h = d.replacement,
                p = d.showMask,
                m = d.separate,
                g = rw(rw({}, "insert" === t ? {
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
              if (!1 === v) throw new jw("Custom tracking stop.");
              null === v ? i = "" : !0 !== v && void 0 !== v && (i = v);
              var y = null == c ? void 0 : c(g);
              void 0 !== (null == y ? void 0 : y.mask) && (f = y.mask), void 0 !== (null == y ? void 0 : y.replacement) && (h = "string" == typeof(null == y ? void 0 : y.replacement) ? lw(null == y ? void 0 : y.replacement) : y.replacement), void 0 !== (null == y ? void 0 : y.showMask) && (p = y.showMask), void 0 !== (null == y ? void 0 : y.separate) && (m = y.separate);
              var b = uw(r, rw({
                  end: a
                }, o)),
                _ = uw(r, rw({
                  start: s
                }, o)),
                w = RegExp("[^".concat(Object.keys(h).join(""), "]"), "g"),
                E = f.replace(w, "");
              if (b && (b = iw(b, {
                  replacementChars: E,
                  replacement: h,
                  separate: m
                }), E = E.slice(b.length)), i && (i = iw(i, {
                  replacementChars: E,
                  replacement: h,
                  separate: !1
                }), E = E.slice(i.length)), "insert" === t && "" === i) throw new jw("The character does not match the key value of the `replacement` object.");
              if (m) {
                var j = f.slice(a, s).replace(w, ""),
                  k = j.length - i.length;
                k < 0 ? _ = _.slice(-k) : k > 0 && (_ = j.slice(-k) + _)
              }
              _ && (_ = iw(_, {
                replacementChars: E,
                replacement: h,
                separate: m
              }));
              var x = aw(b + i + _, {
                  mask: f,
                  replacement: h,
                  separate: m,
                  showMask: p
                }),
                S = function(e) {
                  var t, n, r, o = e.inputType,
                    i = e.value,
                    a = e.addedValue,
                    s = e.beforeChangeValue,
                    l = e.replacement,
                    u = e.separate,
                    c = sw(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter((function(e) {
                      var t = e.type;
                      return "input" === t || u && "replacement" === t
                    })),
                    d = null === (t = c[s.length + a.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (n = c[s.length - 1]) || void 0 === n ? void 0 : n.index,
                    h = null === (r = c[s.length + a.length]) || void 0 === r ? void 0 : r.index;
                  if ("insert" === o) {
                    if (void 0 !== d) return d + 1;
                    if (void 0 !== h) return h;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteForward" === o) {
                    if (void 0 !== h) return h;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteBackward" === o) {
                    if (void 0 !== f) return f + 1;
                    if (void 0 !== h) return h
                  }
                  var p = i.split("").findIndex((function(e) {
                    return Object.prototype.hasOwnProperty.call(l, e)
                  }));
                  return -1 !== p ? p : i.length
                }({
                  inputType: t,
                  value: x,
                  addedValue: i,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: h,
                  separate: m
                });
              return {
                value: x,
                selectionStart: S,
                selectionEnd: S,
                options: {
                  mask: f,
                  replacement: h,
                  separate: m
                }
              }
            }
          }])).format = function(e) {
            return cw(e, Tw(n))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? lw(r) : r;
              return sw(cw(e, {
                mask: n,
                replacement: o
              }), {
                mask: n,
                replacement: o
              })
            }(e, Tw(n))
          }, t.unformat = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? lw(r) : r,
                i = uw(e, {
                  mask: n,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return iw(i, {
                replacementChars: n.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, Tw(n))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var n = t.mask, r = t.replacement, o = "string" == typeof r ? lw(r) : r, i = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, s = "", l = 0; l < n.length; l++) {
                var u = n[l];
                0 === l && (s = "^"), i && (s += "("), s += Object.prototype.hasOwnProperty.call(o, u) ? "".concat(a ? "(?!".concat(fw(u), ")") : "", "(").concat(o[u].source, ")") : fw(u), l === n.length - 1 && (i && (s += ")?".repeat(n.length)), s += "$")
              }
              return s
            }(e, Tw(n))
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
            }), t && ow(e, t)
          }(e, Sw),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

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
            r = e, o = t, i = n[t], (o = Nw(o)) in r ? Object.defineProperty(r, o, {
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
      Pw = Ow, Object.defineProperty(Pw.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var Iw = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Mw = e => {
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
            for (var [u, c] of e.compoundVariants) Iw(u, r, e.defaultVariants) && (n += " " + c);
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
        Dw = "foundry_nk7jgu_8oytzos",
        Hw = Mw({
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
        Bw = Mw({
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
        Fw = Mw({
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
        Vw = Mw({
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
        zw = Mw({
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
        Uw = Mw({
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
      const Gw = (e, t, n) => {
          const r = [];
          return e && r.push(e), t && r.push(t), n && r.push(n), r.join(" ")
        },
        qw = (0, f.createContext)(null);

      function Xw() {
        const e = (0, f.useContext)(qw);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Kw = (0, f.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          isDisabled: r = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          isInvalid: a = !1,
          ...s
        }, l) => {
          const [u, h] = (0, f.useState)("text"), p = (0, f.useId)(), g = (0, f.useId)(), v = (0, f.useId)(), y = (0, f.useId)(), b = (0, d.v6)({
            "data-testid": n,
            className: "foundry_nk7jgu_8oytzo3"
          }, s), _ = e ? m.DX : "div";
          return (0, c.jsx)(qw.Provider, {
            value: {
              isDisabled: r,
              isReadOnly: o,
              isRequired: i,
              isInvalid: a,
              labelId: p,
              inputId: g,
              descriptionId: v,
              errorId: y,
              inputType: u,
              setInputType: h
            },
            children: (0, c.jsx)(_, {
              ref: l,
              ...b,
              children: t
            })
          })
        })),
        Ww = (0, f.forwardRef)((({
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
            labelId: f
          } = Xw(), h = (0, d.v6)({
            id: i.id || f,
            htmlFor: i.htmlFor || u,
            "data-testid": e,
            className: Uw({
              isDisabled: s
            })
          }, i), p = t ? m.DX : "label";
          return (0, c.jsx)(m.s6, {
            enabled: r,
            children: (0, c.jsx)(F, {
              size: "SM",
              asChild: !0,
              children: (0, c.jsxs)(p, {
                ref: a,
                ...h,
                children: [n, l && !o && (0, c.jsx)("span", {
                  className: "foundry_nk7jgu_8oytzo7",
                  children: "*"
                })]
              })
            })
          })
        })),
        $w = (0, f.forwardRef)((({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i
          } = Xw(), a = (0, d.v6)({
            "data-testid": e,
            className: Fw({
              isDisabled: i
            })
          }, r), s = t ? m.DX : "span";
          return (0, c.jsx)(F, {
            size: "XS",
            asChild: !0,
            children: (0, c.jsx)(s, {
              ref: o,
              ...a,
              children: n
            })
          })
        })),
        Yw = (0, f.forwardRef)((({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: a,
            isInvalid: s
          } = Xw(), l = (0, d.v6)({
            "data-testid": e,
            className: (0, L.$)(Hw({
              isDisabled: i,
              isReadOnly: a,
              isInvalid: s
            }), "foundry_nk7jgu_8oytzo1")
          }, r), u = t ? m.DX : "div";
          return (0, c.jsx)(u, {
            ref: o,
            ...l,
            children: n
          })
        })),
        Zw = (0, f.forwardRef)((({
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
        }, h) => {
          const {
            isDisabled: p,
            isReadOnly: g,
            isRequired: v,
            labelId: y,
            inputId: b,
            descriptionId: _,
            isInvalid: w,
            errorId: E,
            inputType: j,
            setInputType: k
          } = Xw();
          (0, f.useEffect)((() => k(o ?? "text")), []);
          const x = (0, d.v6)({
              disabled: p,
              readOnly: g,
              required: v,
              id: b,
              type: j,
              spellCheck: !1,
              "aria-labelledby": Gw(y, n),
              "aria-describedby": Gw(_, r, w ? E : void 0),
              "data-testid": e,
              className: (0, L.$)(zw({
                isDisabled: p,
                isReadOnly: g
              }), "foundry_nk7jgu_8oytzo2"),
              ...w && {
                "aria-invalid": !0,
                "aria-errormessage": E
              },
              ...p && {
                "aria-disabled": !0
              },
              ...v && {
                "aria-required": !0
              }
            }, u),
            S = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                n = e.replacement,
                r = e.showMask,
                o = e.separate,
                i = e.track,
                a = e.modify,
                s = (0, f.useRef)(null),
                l = (0, f.useRef)({
                  mask: t,
                  replacement: n,
                  showMask: r,
                  separate: o,
                  track: i,
                  modify: a
                });
              return l.current.mask = t, l.current.replacement = n, l.current.showMask = r, l.current.separate = o, l.current.track = i, l.current.modify = a, (0, f.useMemo)((function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(n, r, o) {
                      return "current" === r && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), n[r] = o, !0)
                    }
                  })
                }(s, new Ow(l.current))
              }), [])
            }({
              mask: i,
              replacement: a,
              showMask: s,
              track: l
            }),
            P = (0, U.UP)(i && a ? S : null, h),
            C = t ? m.DX : "input";
          return (0, c.jsx)(C, {
            ref: P,
            ...x
          })
        })),
        Qw = (0, f.forwardRef)((({
          icon: e,
          asChild: t,
          testId: n,
          side: r,
          ...o
        }, i) => {
          const {
            isDisabled: a
          } = Xw(), s = (0, d.v6)({
            size: "LG",
            "data-testid": n,
            className: (0, L.$)(Vw({
              side: r,
              isDisabled: a
            }), "foundry_nk7jgu_8oytzo0")
          }, o), l = t ? m.DX : z[e];
          return (0, c.jsx)(l, {
            ref: i,
            ...s
          })
        })),
        Jw = (0, f.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: n
          } = Xw(), r = (0, d.v6)({
            isDisabled: n,
            size: "SM",
            appearance: "ghost",
            className: Dw
          }, e);
          return (0, c.jsx)(hf, {
            ref: t,
            ...r
          })
        })),
        eE = (0, f.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: n,
            inputType: r,
            setInputType: o
          } = Xw(), i = "password" === r, a = i ? "Reveal Password" : "Hide Password", s = (0, d.v6)({
            isDisabled: n,
            size: "SM",
            appearance: "ghost",
            className: Dw,
            label: a,
            icon: i ? "Eye" : "EyeOff",
            onPress: () => {
              o(i ? "text" : "password")
            }
          }, e);
          return (0, c.jsx)(um, {
            side: "bottom",
            portal: !1,
            align: "end",
            content: (0, c.jsx)(F, {
              size: "SM",
              children: a
            }),
            children: (0, c.jsx)(hf, {
              ref: t,
              ...s
            })
          })
        })),
        tE = (0, f.forwardRef)((({
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
            errorId: f
          } = Xw(), h = (0, d.v6)({
            id: u,
            asChild: !0,
            "data-testid": e,
            className: Bw({
              isDisabled: s
            })
          }, i), p = t ? m.DX : "p", g = V.X;
          return (0, c.jsxs)("div", {
            className: "foundry_nk7jgu_8oytzot",
            children: [(0, c.jsx)(m.s6, {
              enabled: r || l,
              children: (0, c.jsx)(F, {
                size: "SM",
                ref: a,
                ...h,
                children: (0, c.jsx)(p, {
                  children: n
                })
              })
            }), l && o && (0, c.jsxs)(F, {
              size: "SM",
              appearance: "bold",
              className: "foundry_nk7jgu_8oytzox",
              id: f,
              children: [(0, c.jsx)(g, {
                size: "MD",
                label: "",
                className: "foundry_nk7jgu_8oytzoy"
              }), o]
            })]
          })
        }));

      function nE(e, t) {
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
        } = ft(e, t), {
          pressProps: d,
          isPressed: f
        } = Wt({
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ref: t
        }), h = W(l, {
          labelable: !0
        }), p = ge(c, d), m = Vt();
        return {
          isPressed: f,
          linkProps: ge(h, Ut(e), {
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

      function rE(e) {
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

      function oE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function iE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? oE(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = rE(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oE(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function aE(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var sE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        lE = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = iE(iE({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) sE(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return aE(e.variantClassNames, (e => aE(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        uE = lE({
          defaultClassName: "foundry_nk7jgu_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_nk7jgu_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        cE = lE({
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
        dE = lE({
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
      const fE = (0, f.createContext)(null);

      function hE() {
        const e = (0, f.useContext)(fE);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const pE = (0, f.forwardRef)((({
          asChild: e,
          testId: t,
          status: n,
          background: r,
          ...o
        }, i) => {
          const a = e ? m.DX : "div",
            s = (0, d.v6)(o, {
              className: dE({
                status: n,
                background: r
              })
            });
          return (0, c.jsx)(fE.Provider, {
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
        mE = (0, f.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? m.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_nk7jgu_1m368qha"
            });
          return (0, c.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        })),
        gE = (0, f.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? m.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_nk7jgu_1m368qhb"
            });
          return (0, c.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        })),
        vE = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        yE = (0, f.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const {
            status: r
          } = hE(), o = e || vE[r], i = z[o], a = (0, d.v6)(t, {
            className: cE({
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
        bE = (0, f.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? m.DX : "div",
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
        _E = (0, f.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? m.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_nk7jgu_1m368qhj"
            });
          return (0, c.jsx)(F, {
            size: "SM",
            asChild: !0,
            children: (0, c.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...i
            })
          })
        })),
        wE = (0, f.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, f.useRef)(null),
            a = (0, U.UP)(i, o),
            s = e ? m.DX : "a",
            {
              linkProps: l,
              isPressed: u
            } = nE(r, i),
            h = (0, d.v6)(l, {
              className: "foundry_nk7jgu_1m368qhk foundry_nk7jgu_1d5mo5m0"
            });
          return (0, c.jsx)(F, {
            size: "SM",
            appearance: "hyperlink",
            asChild: !0,
            children: (0, c.jsx)(s, {
              "data-pressed": u,
              "data-testid": n,
              ref: a,
              ...h,
              children: t
            })
          })
        })),
        EE = (0, f.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = e ? m.DX : "div",
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
        jE = (0, f.forwardRef)((({
          asChild: e,
          testId: t,
          className: n,
          ...r
        }, o) => {
          const i = e ? m.DX : "div";
          return (0, c.jsx)(F, {
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
        kE = (0, f.forwardRef)((({
          testId: e,
          label: t = "close alert",
          ...n
        }, r) => {
          const {
            background: o
          } = hE(), i = (0, d.v6)(n, {
            className: uE({
              hasBackground: "none" !== o
            })
          });
          return (0, c.jsx)(hf, {
            ref: r,
            label: t,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "XS",
            ...i
          })
        }));

      function xE(e) {
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

      function SE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function PE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? SE(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = xE(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : SE(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function CE(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var TE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        OE = "foundry_nk7jgu_qmpv6yt",
        NE = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = PE(PE({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) TE(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return CE(e.variantClassNames, (e => CE(e, (e => e.split(" ")[0]))))
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

      function RE(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function LE(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        return n.length === r.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && n.every((n => {
          const r = e[n],
            o = t[n];
          return "function" == typeof r ? `${r}` == `${o}` : RE(r) && RE(o) ? LE(r, o) : r === o
        })))
      }

      function AE(e) {
        return e.concat().sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => e.options))
      }

      function IE(e) {
        return "number" == typeof e
      }

      function ME(e) {
        return "string" == typeof e
      }

      function DE(e) {
        return "boolean" == typeof e
      }

      function HE(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function BE(e) {
        return Math.abs(e)
      }

      function FE(e) {
        return Math.sign(e)
      }

      function VE(e, t) {
        return BE(e - t)
      }

      function zE(e) {
        return KE(e).map(Number)
      }

      function UE(e) {
        return e[GE(e)]
      }

      function GE(e) {
        return Math.max(0, e.length - 1)
      }

      function qE(e, t) {
        return t === GE(e)
      }

      function XE(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Array.from(Array(e), ((e, n) => t + n))
      }

      function KE(e) {
        return Object.keys(e)
      }

      function WE(e, t) {
        return [e, t].reduce(((e, t) => (KE(t).forEach((n => {
          const r = e[n],
            o = t[n],
            i = HE(r) && HE(o);
          e[n] = i ? WE(r, o) : o
        })), e)), {})
      }

      function $E(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function YE() {
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

      function ZE() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const n = BE(e - t);

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

      function QE(e, t, n) {
        const {
          constrain: r
        } = ZE(0, e), o = e + 1;
        let i = a(t);

        function a(e) {
          return n ? BE((o + e) % o) : r(e)
        }

        function s() {
          return i
        }

        function l() {
          return QE(e, s(), n)
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

      function JE(e, t, n, r, o, i, a, s, l, u, c, d, f, h, p, m, g, v, y) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], E = {
          passive: !1
        }, j = YE(), k = YE(), x = ZE(50, 225).constrain(h.measure(20)), S = {
          mouse: 300,
          touch: 400
        }, P = {
          mouse: 500,
          touch: 600
        }, C = p ? 43 : 25;
        let T = !1,
          O = 0,
          N = 0,
          R = !1,
          L = !1,
          A = !1,
          I = !1;

        function M(e) {
          if (!$E(e, r) && e.touches.length >= 2) return D(e);
          const t = i.readPoint(e),
            n = i.readPoint(e, b),
            a = VE(t, O),
            l = VE(n, N);
          if (!L && !I) {
            if (!e.cancelable) return D(e);
            if (L = a > l, !L) return D(e)
          }
          const c = i.pointerMove(e);
          a > m && (A = !0), u.useFriction(.3).useDuration(.75), s.start(), o.add(_(c)), e.preventDefault()
        }

        function D(e) {
          const t = c.byDistance(0, !1).index !== d.get(),
            n = i.pointerUp(e) * (p ? P : S)[I ? "mouse" : "touch"],
            r = function(e, t) {
              const n = d.add(-1 * FE(e)),
                r = c.byDistance(e, !p).distance;
              return p || BE(e) < x ? r : g && t ? .5 * r : c.byIndex(n.get(), 0).distance
            }(_(n), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (BE(e) <= BE(t)) return 0;
              const n = VE(BE(e), BE(t));
              return BE(n / e)
            }(n, r),
            a = C - 10 * o,
            s = v + o / 50;
          L = !1, R = !1, k.clear(), u.useDuration(a).useFriction(s), l.distance(r, !p), I = !1, f.emit("pointerUp")
        }

        function H(e) {
          A && (e.stopPropagation(), e.preventDefault(), A = !1)
        }
        return {
          init: function(e) {
            if (!y) return;

            function s(s) {
              (DE(y) || y(e, s)) && function(e) {
                const s = $E(e, r);
                I = s, A = p && s && !e.buttons && T, T = VE(o.get(), a.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (R = !0, i.pointerDown(e), u.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = I ? n : t;
                  k.add(e, "touchmove", M, E).add(e, "touchend", D).add(e, "mousemove", M, E).add(e, "mouseup", D)
                }(), O = i.readPoint(e), N = i.readPoint(e, b), f.emit("pointerDown"))
              }(s)
            }
            const l = t;
            j.add(l, "dragstart", (e => e.preventDefault()), E).add(l, "touchmove", (() => {}), E).add(l, "touchend", (() => {})).add(l, "touchstart", s).add(l, "mousedown", s).add(l, "touchcancel", D).add(l, "contextmenu", D).add(l, "click", H, !0)
          },
          destroy: function() {
            j.clear(), k.clear()
          },
          pointerDown: function() {
            return R
          }
        }
      }

      function ej(e, t) {
        let n, r;

        function o(e) {
          return e.timeStamp
        }

        function i(n, r) {
          const o = "client" + ("x" === (r || e.scroll) ? "X" : "Y");
          return ($E(n, t) ? n : n.touches[0])[o]
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
            return a && !s && BE(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function tj(e, t, n, r, o, i, a) {
        const s = [e].concat(r);
        let l, u, c = [],
          d = !1;

        function f(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            i && (u = f(e), c = r.map(f), l = new ResizeObserver((n => {
              (DE(i) || i(o, n)) && function(n) {
                for (const i of n) {
                  if (d) return;
                  const n = i.target === e,
                    a = r.indexOf(i.target),
                    s = n ? u : c[a];
                  if (BE(f(n ? e : r[a]) - s) >= .5) {
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

      function nj(e, t, n, r, o) {
        const i = o.measure(10),
          a = o.measure(50),
          s = ZE(.1, .99);
        let l = !1;

        function u() {
          return !l && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: u,
          constrain: function(o) {
            if (!u()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              c = BE(e[l] - t.get()),
              d = n.get() - t.get(),
              f = s.constrain(c / a);
            n.subtract(d * f), !o && BE(d) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function rj(e, t, n, r) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: a,
            reachedMax: s
          } = ZE(o, i),
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

      function oj(e) {
        let t = e;

        function n(e) {
          return IE(e) ? e : e.get()
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

      function ij(e, t) {
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

      function aj(e, t, n, r, o, i, a, s, l) {
        const u = zE(o),
          c = zE(o).reverse(),
          d = function() {
            const e = a[0];
            return p(h(c, e), n, !1)
          }().concat(function() {
            const e = t - a[0] - 1;
            return p(h(u, e), -n, !0)
          }());

        function f(e, t) {
          return e.reduce(((e, t) => e - o[t]), t)
        }

        function h(e, t) {
          return e.reduce(((e, n) => f(e, t) > 0 ? e.concat([n]) : e), [])
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
              slideLocation: oj(-1),
              translate: ij(e, l[t]),
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
              return f(r, t) <= .1
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

      function sj(e, t, n) {
        let r, o = !1;
        return {
          init: function(i) {
            n && (r = new MutationObserver((e => {
              o || (DE(n) || n(i, e)) && function(e) {
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

      function lj(e, t, n, r, o, i, a) {
        const {
          align: s,
          axis: l,
          direction: u,
          startIndex: c,
          loop: d,
          duration: f,
          dragFree: h,
          dragThreshold: p,
          inViewThreshold: m,
          slidesToScroll: g,
          skipSnaps: v,
          containScroll: y,
          watchResize: b,
          watchSlides: _,
          watchDrag: w,
          watchFocus: E
        } = i, j = {
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
        }, k = j.measure(t), x = n.map(j.measure), S = function(e, t) {
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
        }(l, u), P = S.measureSize(k), C = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(P), T = function(e, t) {
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
              return ME(e) ? n[e](r) : e(t, r, o)
            }
          };
          return o
        }(s, P), O = !d && !!y, N = d || !!y, {
          slideSizes: R,
          slideSizesWithGaps: L,
          startGap: A,
          endGap: I
        } = function(e, t, n, r, o, i) {
          const {
            measureSize: a,
            startEdge: s,
            endEdge: l
          } = e, u = n[0] && o, c = function() {
            if (!u) return 0;
            const e = n[0];
            return BE(t[s] - e[s])
          }(), d = function() {
            if (!u) return 0;
            const e = i.getComputedStyle(UE(r));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = n.map(a), h = n.map(((e, t, n) => {
            const r = !t,
              o = qE(n, t);
            return r ? f[t] + c : o ? f[t] + d : n[t + 1][s] - e[s]
          })).map(BE);
          return {
            slideSizes: f,
            slideSizesWithGaps: h,
            startGap: c,
            endGap: d
          }
        }(S, k, x, n, N, o), M = function(e, t, n, r, o, i, a, s, l) {
          const {
            startEdge: u,
            endEdge: c,
            direction: d
          } = e, f = IE(n), h = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return zE(e).filter((e => e % t == 0)).map((n => e.slice(n, n + t)))
              }(e, n) : function(e) {
                return e.length ? zE(e).reduce(((n, f, h) => {
                  const p = UE(n) || 0,
                    m = 0 === p,
                    g = f === GE(e),
                    v = o[u] - i[p][u],
                    y = o[u] - i[f][c],
                    b = !r && m ? d(a) : 0,
                    _ = BE(y - (!r && g ? d(s) : 0) - (v + b));
                  return h && _ > t + l && n.push(f), g && n.push(e.length), n
                }), []).map(((t, n, r) => {
                  const o = Math.max(r[n - 1] || 0);
                  return e.slice(o, t)
                })) : []
              }(e)
            }
          };
          return h
        }(S, P, g, d, k, x, A, I, 2), {
          snaps: D,
          snapsAligned: H
        } = function(e, t, n, r, o) {
          const {
            startEdge: i,
            endEdge: a
          } = e, {
            groupSlides: s
          } = o, l = s(r).map((e => UE(e)[a] - e[0][i])).map(BE).map(t.measure), u = r.map((e => n[i] - e[i])).map((e => -BE(e))), c = s(u).map((e => e[0])).map(((e, t) => e + l[t]));
          return {
            snaps: u,
            snapsAligned: c
          }
        }(S, T, k, x, M), B = -UE(D) + UE(L), {
          snapsContained: F,
          scrollContainLimit: V
        } = function(e, t, n, r) {
          const o = ZE(-t + e, 0),
            i = n.map(((e, t) => {
              const {
                min: r,
                max: i
              } = o, a = o.constrain(e), l = !t, u = qE(n, t);
              return l ? i : u || s(r, a) ? r : s(i, a) ? i : a
            })).map((e => parseFloat(e.toFixed(3)))),
            a = function() {
              const e = i[0],
                t = UE(i);
              return ZE(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function s(e, t) {
            return VE(e, t) <= 1
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
        }(P, B, H, y), z = O ? F : H, {
          limit: U
        } = function(e, t, n) {
          const r = t[0];
          return {
            limit: ZE(n ? r - e : UE(t), r)
          }
        }(B, z, d), G = QE(GE(z), c, d), q = G.clone(), X = zE(n), K = function(e, t, n, r) {
          const o = YE(),
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
            scrollBounds: f,
            options: {
              loop: h
            }
          } = e;
          const p = n.settled(),
            m = !f.shouldConstrain(),
            g = h ? p : p && m,
            v = g && !u.pointerDown();
          v && c.stop();
          const y = o.get() * t + a.get() * (1 - t);
          i.set(y), h && (s.loop(n.direction()), l.loop()), r.to(i.get()), v && d.emit("settle"), g || d.emit("scroll")
        })(se, e))), W = z[G.get()], $ = oj(W), Y = oj(W), Z = oj(W), Q = oj(W), J = function(e, t, n, r, o) {
          let i = 0,
            a = 0,
            s = o,
            l = .68,
            u = e.get(),
            c = 0;

          function d(e) {
            return s = e, h
          }

          function f(e) {
            return l = e, h
          }
          const h = {
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
              return s ? (n.set(e), i += t / s, i *= l, u += i, e.add(i), o = u - c) : (i = 0, n.set(r), e.set(r), o = t), a = FE(o), c = u, h
            },
            settled: function() {
              return BE(r.get() - t.get()) < .001
            },
            useBaseFriction: function() {
              return f(.68)
            },
            useBaseDuration: function() {
              return d(o)
            },
            useFriction: f,
            useDuration: d
          };
          return h
        }($, Z, Y, Q, f), ee = function(e, t, n, r, o) {
          const {
            reachedAny: i,
            removeOffset: a,
            constrain: s
          } = r;

          function l(e) {
            return e.concat().sort(((e, t) => BE(e) - BE(t)))[0]
          }

          function u(t, r) {
            const o = [t, t + n, t - n];
            if (!e) return t;
            if (!r) return l(o);
            const i = o.filter((e => FE(e) === r));
            return i.length ? l(i) : UE(o) - n
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
                    }))).sort(((e, t) => BE(e.diff) - BE(t.diff))),
                    {
                      index: i
                    } = o[0];
                  return {
                    index: i,
                    distance: r
                  }
                }(l),
                f = !e && i(l);
              return !r || f ? {
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
        }(U), re = YE(), oe = function(e, t, n, r) {
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
                return KE(o).reduce(((t, n) => {
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
                o = qE(n, t);
              return r ? XE(UE(n[0]) + 1) : o ? XE(GE(i) - UE(n)[0] + 1, UE(n)[0]) : e
            }))
          }();
          return {
            slideRegistry: u
          }
        }(O, y, z, V, M, X), ae = function(e, t, n, r, o, i, a, s) {
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
                  (DE(s) || s(d, t)) && function(t) {
                    if ((new Date).getTime() - u > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = n.findIndex((e => e.includes(t)));
                    IE(i) && (o.useDuration(0), r.index(i, 0), a.emit("slideFocus"))
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
          containerRect: k,
          slideRects: x,
          animation: K,
          axis: S,
          dragHandler: JE(S, e, r, o, Q, ej(S, o), $, K, te, J, ee, G, a, C, h, p, v, .68, w),
          eventStore: re,
          percentOfView: C,
          index: G,
          indexPrevious: q,
          limit: U,
          location: $,
          offsetLocation: Z,
          previousLocation: Y,
          options: i,
          resizeHandler: tj(t, a, o, n, S, b, j),
          scrollBody: J,
          scrollBounds: nj(U, Z, Q, J, C),
          scrollLooper: rj(B, U, Z, [$, Z, Y, Q]),
          scrollProgress: ne,
          scrollSnapList: z.map(ne.get),
          scrollSnaps: z,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: aj(S, P, B, R, L, D, z, Z, n),
          slideFocus: ae,
          slidesHandler: sj(t, a, _),
          slidesInView: oe,
          slideIndexes: X,
          slideRegistry: ie,
          slidesToScroll: M,
          target: Q,
          translate: ij(S, t)
        };
        return se
      }
      const uj = {
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

      function cj(e) {
        function t(e, t) {
          return WE(e, t || {})
        }
        const n = {
          mergeOptions: t,
          optionsAtMedia: function(n) {
            const r = n.breakpoints || {},
              o = KE(r).filter((t => e.matchMedia(t).matches)).map((e => r[e])).reduce(((e, n) => t(e, n)), {});
            return t(n, o)
          },
          optionsMediaQueries: function(t) {
            return t.map((e => KE(e.breakpoints || {}))).reduce(((e, t) => e.concat(t)), []).map(e.matchMedia)
          }
        };
        return n
      }

      function dj(e, t, n) {
        const r = e.ownerDocument,
          o = r.defaultView,
          i = cj(o),
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
          s = YE(),
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
            on: f,
            off: h,
            emit: p
          } = l,
          m = S;
        let g, v, y, b, _ = !1,
          w = u(uj, dj.globalOptions),
          E = u(w),
          j = [];

        function k(t) {
          const n = lj(e, y, b, r, o, t, l);
          return t.loop && !n.slideLooper.canLoop() ? k(Object.assign({}, t, {
            loop: !1
          })) : n
        }

        function x(t, n) {
          _ || (w = u(w, t), E = c(w), j = n || j, function() {
            const {
              container: t,
              slides: n
            } = E, r = ME(t) ? e.querySelector(t) : t;
            y = r || e.children[0];
            const o = ME(n) ? y.querySelectorAll(n) : n;
            b = [].slice.call(o || y.children)
          }(), g = k(E), d([w, ...j.map((e => {
            let {
              options: t
            } = e;
            return t
          }))]).forEach((e => s.add(e, "change", S))), E.active && (g.translate.to(g.location.get()), g.animation.init(), g.slidesInView.init(), g.slideFocus.init(O), g.eventHandler.init(O), g.resizeHandler.init(O), g.slidesHandler.init(O), g.options.loop && g.slideLooper.loop(), y.offsetParent && b.length && g.dragHandler.init(O), v = a.init(O, j)))
        }

        function S(e, t) {
          const n = T();
          P(), x(u({
            startIndex: n
          }, e), t), l.emit("reInit")
        }

        function P() {
          g.dragHandler.destroy(), g.eventStore.clear(), g.translate.clear(), g.slideLooper.clear(), g.resizeHandler.destroy(), g.slidesHandler.destroy(), g.slidesInView.destroy(), g.animation.destroy(), a.destroy(), s.clear()
        }

        function C(e, t, n) {
          E.active && !_ && (g.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : E.duration), g.scrollTo.index(e, n || 0))
        }

        function T() {
          return g.index.get()
        }
        const O = {
          canScrollNext: function() {
            return g.index.add(1).get() !== T()
          },
          canScrollPrev: function() {
            return g.index.add(-1).get() !== T()
          },
          containerNode: function() {
            return y
          },
          internalEngine: function() {
            return g
          },
          destroy: function() {
            _ || (_ = !0, s.clear(), P(), l.emit("destroy"), l.clear())
          },
          off: h,
          on: f,
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
            C(g.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            C(g.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return g.scrollProgress.get(g.offsetLocation.get())
          },
          scrollSnapList: function() {
            return g.scrollSnapList
          },
          scrollTo: C,
          selectedScrollSnap: T,
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
        return x(t, n), setTimeout((() => l.emit("init")), 0), O
      }

      function fj() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const n = (0, f.useRef)(e),
          r = (0, f.useRef)(t),
          [o, i] = (0, f.useState)(),
          [a, s] = (0, f.useState)(),
          l = (0, f.useCallback)((() => {
            o && o.reInit(n.current, r.current)
          }), [o]);
        return (0, f.useEffect)((() => {
          LE(n.current, e) || (n.current = e, l())
        }), [e, l]), (0, f.useEffect)((() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const n = AE(e),
              r = AE(t);
            return n.every(((e, t) => LE(e, r[t])))
          })(r.current, t) || (r.current = t, l())
        }), [t, l]), (0, f.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            dj.globalOptions = fj.globalOptions;
            const e = dj(a, n.current, r.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }), [a, i]), [s, o]
      }

      function hj() {
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
      dj.globalOptions = void 0, fj.globalOptions = void 0, hj.globalOptions = void 0;
      const pj = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function mj(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function gj(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function vj(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function yj() {
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
          ("pointerDown" === t ? vj : gj)(n, c.dragging)
        }

        function f() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 2 ? arguments[2] : void 0;
          const n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((e => r[e])),
            o = e.map((e => r[e]));
          return n.forEach((e => gj(e, t))), o.forEach((e => vj(e, t))), e
        }

        function h() {
          const {
            slideRegistry: e
          } = t.internalEngine(), n = e[t.selectedScrollSnap()];
          i = f(n, i, c.snapped)
        }

        function p() {
          const e = t.slidesInView();
          a = f(e, a, c.inView)
        }
        const m = {
          name: "classNames",
          options: o,
          init: function(i, a) {
            t = i;
            const {
              mergeOptions: f,
              optionsAtMedia: m
            } = a, g = f(pj, yj.globalOptions), v = f(g, o);
            e = m(v), n = t.rootNode(), r = t.slideNodes();
            const {
              watchDrag: y,
              loop: b
            } = t.internalEngine().options, _ = !!y;
            e.loop && b && (c.loop = mj(e.loop), vj(n, c.loop)), e.draggable && _ && (c.draggable = mj(e.draggable), vj(n, c.draggable)), e.dragging && (c.dragging = mj(e.dragging), l.forEach((e => t.on(e, d)))), e.snapped && (c.snapped = mj(e.snapped), s.forEach((e => t.on(e, h))), h()), e.inView && (c.inView = mj(e.inView), u.forEach((e => t.on(e, p))), p())
          },
          destroy: function() {
            l.forEach((e => t.off(e, d))), s.forEach((e => t.off(e, h))), u.forEach((e => t.off(e, p))), gj(n, c.loop), gj(n, c.draggable), gj(n, c.dragging), f([], i, c.snapped), f([], a, c.inView), Object.keys(c).forEach((e => {
              c[e] = []
            }))
          }
        };
        return m
      }
      yj.globalOptions = void 0;
      const bj = (0, f.createContext)(null);

      function _j() {
        const e = (0, f.useContext)(bj);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const wj = (0, f.forwardRef)((({
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
              const t = (0, U.rl)(),
                n = (0, U.jt)(),
                [r, o] = (0, f.useState)([]),
                i = r.length,
                [a, s] = (0, f.useState)(0),
                [l, u] = fj({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [hj(), yj()]),
                c = (0, f.useRef)(0),
                d = (0, f.useRef)(!1),
                h = r[a],
                p = (0, f.useCallback)((e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach(((e, n) => {
                    e.style.visibility = n === t ? "visible" : "hidden"
                  })), s(t), d.current = !0
                }), [u]),
                m = (0, f.useCallback)((e => {
                  c.current = .94 * e.scrollSnapList().length
                }), []),
                g = (0, f.useCallback)(((e, t) => {
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
              return (0, f.useEffect)((() => {
                u && (m(u), g(u), u.on("reInit", m).on("reInit", g).on("scroll", g).on("slideFocus", g))
              }), [u, g]), (0, f.useEffect)((() => {
                u && (p(u), u.on("select", p).on("reInit", p))
              }), [u, p]), {
                setAlerts: o,
                alerts: r,
                numAlerts: i,
                emblaRef: l,
                prevAlert: () => u?.scrollPrev(n),
                nextAlert: () => u?.scrollNext(n),
                currentAlert: h,
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
              currentAlert: h,
              isInitialized: p,
              setAlerts: g,
              numAlerts: v
            } = u;
          (0, f.useEffect)((() => {
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
              className: NE(h)
            }, y),
            _ = e ? m.DX : "div";
          return (0, c.jsx)(bj.Provider, {
            value: u,
            children: (0, c.jsx)(_, {
              ref: l,
              "data-testid": n,
              "data-initialized": p,
              ...b,
              children: t
            })
          })
        })),
        Ej = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        jj = (0, f.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const {
            currentAlert: r
          } = _j();
          if (!e && !r || !r?.status) return null;
          const o = e || Ej[r.status],
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
        kj = (0, f.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? m.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_nk7jgu_qmpv6yo"
            });
          return (0, c.jsx)(F, {
            size: "SM",
            asChild: !0,
            children: (0, c.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...i
            })
          })
        })),
        xj = (0, f.forwardRef)((({
          asChild: e,
          testId: t,
          align: n = "left",
          status: r,
          background: o,
          ...i
        }, a) => {
          const s = e ? m.DX : "div",
            l = (0, d.v6)(i, {
              className: "foundry_nk7jgu_qmpv6yk"
            });
          return (0, c.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...l
          })
        })),
        Sj = (0, f.forwardRef)((({
          testId: e,
          children: t,
          ...n
        }, r) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = _j(), a = (0, d.v6)(n, {
            className: "foundry_nk7jgu_qmpv6yl"
          }), s = (0, U.UP)(i, r), l = f.Children.map(t, (e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          }));
          return (0, f.useEffect)((() => {
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
        Pj = (0, f.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, f.useRef)(null),
            a = (0, U.UP)(i, o),
            s = e ? m.DX : "a",
            {
              linkProps: l,
              isPressed: u
            } = nE(r, i),
            h = (0, d.v6)(r, {
              className: "foundry_nk7jgu_qmpv6yp foundry_nk7jgu_1d5mo5m0"
            });
          return (0, c.jsx)(F, {
            asChild: !0,
            size: "SM",
            appearance: "hyperlink",
            children: (0, c.jsx)(s, {
              "data-pressed": u,
              "data-testid": n,
              ref: a,
              ...l,
              ...h,
              children: t
            })
          })
        })),
        Cj = (0, f.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const r = (0, d.v6)(t, {
            className: "foundry_nk7jgu_qmpv6yq"
          });
          return (0, c.jsx)(hf, {
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
        Tj = (0, f.forwardRef)((({
          asChild: e,
          testId: t,
          children: n,
          ...r
        }, o) => {
          const i = e ? m.DX : "div",
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
        Oj = (0, f.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            nextAlert: r,
            canScrollNext: o
          } = _j(), i = (0, d.v6)(t, {
            className: OE
          });
          return (0, c.jsx)(hf, {
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
        Nj = (0, f.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            prevAlert: r,
            canScrollPrev: o
          } = _j(), i = (0, d.v6)(t, {
            className: OE
          });
          return (0, c.jsx)(hf, {
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
        Rj = (0, f.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            currentAlertIndex: r,
            numAlerts: o
          } = _j(), i = (0, d.v6)(t, {
            className: "foundry_nk7jgu_qmpv6yr"
          });
          return (0, c.jsx)(F, {
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

      function Lj(e) {
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

      function Aj(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Ij(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Aj(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Lj(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Aj(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Mj(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Dj = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Hj = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Ij(Ij({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Dj(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Mj(e.variantClassNames, (e => Mj(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Bj = Hj({
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
        Fj = Hj({
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
      const Vj = (0, f.createContext)(null);

      function zj() {
        const e = (0, f.useContext)(Vj);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const Uj = (0, f.forwardRef)((({
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
          const f = {
              size: r,
              background: o,
              color: i,
              hasBorder: a,
              isDisabled: s
            },
            h = (0, d.v6)(l, {
              className: Fj(f)
            }),
            p = e ? m.DX : "div";
          return (0, c.jsx)(Vj.Provider, {
            value: f,
            children: (0, c.jsx)(p, {
              ref: u,
              "data-testid": n,
              "aria-disabled": s,
              ...h,
              children: t
            })
          })
        })),
        Gj = (0, f.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            size: i
          } = zj(), a = e ? m.DX : "div", s = (0, d.v6)(r, {
            className: "foundry_nk7jgu_oahh58z"
          });
          return (0, c.jsx)(F, {
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
        qj = (0, f.forwardRef)((({
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
        Xj = (0, f.forwardRef)((({
          testId: e,
          label: t = "close tag",
          ...n
        }, r) => {
          const {
            background: o,
            isDisabled: i
          } = zj(), a = (0, d.v6)(n, {
            className: Bj({
              background: o
            })
          });
          return (0, c.jsx)(hf, {
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

      function Kj(e) {
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

      function Wj(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function $j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Wj(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Kj(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wj(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Yj(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Zj = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Qj = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = $j($j({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Zj(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Yj(e.variantClassNames, (e => Yj(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Jj = Qj({
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
        ek = Qj({
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
        tk = Qj({
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

      function nk() {
        const e = (0, f.useContext)(rk);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const rk = (0, f.createContext)(null),
        ok = (0, f.forwardRef)((({
          children: e,
          testId: t,
          asChild: n,
          size: r = "MD",
          ...o
        }, i) => {
          const a = (0, d.v6)({
              className: tk({
                size: r
              })
            }, o),
            s = n ? m.DX : "ol";
          return (0, c.jsx)(rk.Provider, {
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
        ik = (0, f.forwardRef)((({
          isCurrent: e,
          children: t,
          asChild: n,
          testId: r,
          ...o
        }, i) => {
          const a = (0, f.useRef)(null),
            {
              size: s
            } = nk(),
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
              } = nE({
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
            u = n ? m.DX : "a",
            h = (0, d.v6)({
              className: (0, L.$)(Jj({
                size: s
              }), e && "foundry_nk7jgu_m1icrx9"),
              "data-testid": r
            }, l, o);
          return (0, c.jsx)("li", {
            className: ek({
              size: s
            }),
            ref: i,
            children: (0, c.jsx)(u, {
              ref: a,
              ...h,
              children: t
            })
          })
        })),
        ak = (0, f.forwardRef)((({
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
        sk = (0, f.forwardRef)((({
          children: e,
          testId: t,
          defaultOpen: n = !1,
          label: r = "Show hidden breadcrumbs",
          ...o
        }, i) => {
          const [a, s] = (0, f.useState)(n), {
            size: l
          } = nk(), u = (0, d.v6)({
            className: ek({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, c.jsx)("li", {
            ref: i,
            ...u,
            children: (0, c.jsxs)(ry, {
              open: a,
              onOpenChange: () => s(!a),
              children: [(0, c.jsx)(oy, {
                className: "foundry_nk7jgu_m1icrxa foundry_nk7jgu_1d5mo5m0 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd11",
                "aria-label": r,
                children: "..."
              }), (0, c.jsx)(sy, {
                children: (0, c.jsx)(ly, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_nk7jgu_m1icrxb",
                  children: (0, c.jsx)(uy, {
                    className: "foundry_nk7jgu_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        })),
        lk = (0, f.forwardRef)((({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const i = t ? m.DX : cy,
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
    9862: (e, t, n) => {
      e.exports = n(52522)
    },
    19683: (e, t, n) => {
      n.d(t, {
        C: () => a,
        f: () => s
      });
      var r = n(23514);

      function o(e) {
        return e
      }

      function i(e, t) {
        void 0 === t && (t = o);
        var n = [],
          r = !1;
        return {
          read: function() {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
          },
          useMedium: function(e) {
            var o = t(e, r);
            return n.push(o),
              function() {
                n = n.filter((function(e) {
                  return e !== o
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (r = !0; n.length;) {
              var t = n;
              n = [], t.forEach(e)
            }
            n = {
              push: function(t) {
                return e(t)
              },
              filter: function() {
                return n
              }
            }
          },
          assignMedium: function(e) {
            r = !0;
            var t = [];
            if (n.length) {
              var o = n;
              n = [], o.forEach(e), t = n
            }
            var i = function() {
                var n = t;
                t = [], n.forEach(e)
              },
              a = function() {
                return Promise.resolve().then(i)
              };
            a(), n = {
              push: function(e) {
                t.push(e), a()
              },
              filter: function(e) {
                return t = t.filter(e), n
              }
            }
          }
        }
      }

      function a(e, t) {
        return void 0 === t && (t = o), i(e, t)
      }

      function s(e) {
        void 0 === e && (e = {});
        var t = i(null);
        return t.options = (0, r.__assign)({
          async: !0,
          ssr: !1
        }, e), t
      }
    },
    23614: (e, t, n) => {
      n.d(t, {
        S: () => s
      });
      var r = n(62229);

      function o(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var i = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        a = new WeakMap;

      function s(e, t) {
        var n, s, l, u = (n = t || null, s = function(t) {
          return e.forEach((function(e) {
            return o(e, t)
          }))
        }, (l = (0, r.useState)((function() {
          return {
            value: n,
            callback: s,
            facade: {
              get current() {
                return l.value
              },
              set current(e) {
                var t = l.value;
                t !== e && (l.value = e, l.callback(e, t))
              }
            }
          }
        }))[0]).callback = s, l.facade);
        return i((function() {
          var t = a.get(u);
          if (t) {
            var n = new Set(t),
              r = new Set(e),
              i = u.current;
            n.forEach((function(e) {
              r.has(e) || o(e, null)
            })), r.forEach((function(e) {
              n.has(e) || o(e, i)
            }))
          }
          a.set(u, e)
        }), [e]), u
      }
    },
    52522: (e, t) => {
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        c = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        h = n ? Symbol.for("react.suspense") : 60113,
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
                case c:
                case d:
                case i:
                case s:
                case a:
                case h:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case u:
                    case f:
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

      function E(e) {
        return w(e) === d
      }
      t.AsyncMode = c, t.ConcurrentMode = d, t.ContextConsumer = u, t.ContextProvider = l, t.Element = r, t.ForwardRef = f, t.Fragment = i, t.Lazy = g, t.Memo = m, t.Portal = o, t.Profiler = s, t.StrictMode = a, t.Suspense = h, t.isAsyncMode = function(e) {
        return E(e) || w(e) === c
      }, t.isConcurrentMode = E, t.isContextConsumer = function(e) {
        return w(e) === u
      }, t.isContextProvider = function(e) {
        return w(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, t.isForwardRef = function(e) {
        return w(e) === f
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
        return w(e) === h
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === i || e === d || e === s || e === a || e === h || e === p || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === l || e.$$typeof === u || e.$$typeof === f || e.$$typeof === y || e.$$typeof === b || e.$$typeof === _ || e.$$typeof === v)
      }, t.typeOf = w
    },
    67332: (e, t, n) => {
      var r = n(9862),
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
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (p) {
            var o = h(n);
            o && o !== p && e(t, o, r)
          }
          var a = c(n);
          d && (a = a.concat(d(n)));
          for (var s = l(t), m = l(n), g = 0; g < a.length; ++g) {
            var v = a[g];
            if (!(i[v] || r && r[v] || m && m[v] || s && s[v])) {
              var y = f(n, v);
              try {
                u(t, v, y)
              } catch (e) {}
            }
          }
        }
        return t
      }
    }
  }
]);