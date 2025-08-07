try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "07a58cbc-4a76-47a5-9da8-7abe0ad241bb", e._sentryDebugIdIdentifier = "sentry-dbid-07a58cbc-4a76-47a5-9da8-7abe0ad241bb")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "23734b3e70371e18a05f141b62211d2d95128dc9",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "23734b3e70371e18a05f141b62211d2d95128dc9"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [3770], {
    5060: (e, t, r) => {
      function n(e) {
        var t, r, o = "";
        if ("string" == typeof e || "number" == typeof e) o += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++) e[t] && (r = n(e[t])) && (o && (o += " "), o += r)
          } else
            for (r in e) e[r] && (o && (o += " "), o += r);
        return o
      }

      function o() {
        for (var e, t, r = 0, o = "", i = arguments.length; r < i; r++)(e = arguments[r]) && (t = n(e)) && (o && (o += " "), o += t);
        return o
      }
      r.d(t, {
        $: () => o,
        A: () => i
      });
      const i = o
    },
    15485: (e, t, r) => {
      r.d(t, {
        Z: () => o
      });
      var n = r(71127);

      function o(e) {
        const t = n.useRef({
          value: e,
          previous: e
        });
        return n.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }
    },
    28136: (e, t, r) => {
      var n = r(75754),
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
        return n.isMemo(e) ? a : s[e.$$typeof] || o
      }
      s[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[n.Memo] = a;
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        h = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (p) {
            var o = f(r);
            o && o !== p && e(t, o, n)
          }
          var a = u(r);
          d && (a = a.concat(d(r)));
          for (var s = l(t), m = l(r), g = 0; g < a.length; ++g) {
            var v = a[g];
            if (!(i[v] || n && n[v] || m && m[v] || s && s[v])) {
              var y = h(r, v);
              try {
                c(t, v, y)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    50438: (e, t, r) => {
      r.d(t, {
        N: () => l
      });
      var n = r(71127),
        o = r(91173),
        i = r(21423),
        a = r(21222),
        s = r(70954);

      function l(e) {
        const t = e + "CollectionProvider",
          [r, l] = (0, o.A)(t),
          [c, u] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          d = e => {
            const {
              scope: t,
              children: r
            } = e, o = n.useRef(null), i = n.useRef(new Map).current;
            return (0, s.jsx)(c, {
              scope: t,
              itemMap: i,
              collectionRef: o,
              children: r
            })
          };
        d.displayName = t;
        const h = e + "CollectionSlot",
          f = (0, a.createSlot)(h),
          p = n.forwardRef(((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = u(h, r), a = (0, i.s)(t, o.collectionRef);
            return (0, s.jsx)(f, {
              ref: a,
              children: n
            })
          }));
        p.displayName = h;
        const m = e + "CollectionItemSlot",
          g = "data-radix-collection-item",
          v = (0, a.createSlot)(m),
          y = n.forwardRef(((e, t) => {
            const {
              scope: r,
              children: o,
              ...a
            } = e, l = n.useRef(null), c = (0, i.s)(t, l), d = u(m, r);
            return n.useEffect((() => (d.itemMap.set(l, {
              ref: l,
              ...a
            }), () => {
              d.itemMap.delete(l)
            }))), (0, s.jsx)(v, {
              [g]: "",
              ref: c,
              children: o
            })
          }));
        return y.displayName = m, [{
          Provider: d,
          Slot: p,
          ItemSlot: y
        }, function(t) {
          const r = u(e + "CollectionConsumer", t);
          return n.useCallback((() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${g}]`));
            return Array.from(r.itemMap.values()).sort(((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)))
          }), [r.collectionRef, r.itemMap])
        }, l]
      }
      Map
    },
    59219: (e, t, r) => {
      r.d(t, {
        jH: () => i
      });
      var n = r(71127),
        o = (r(70954), n.createContext(void 0));

      function i(e) {
        const t = n.useContext(o);
        return e || t || "ltr"
      }
    },
    75754: (e, t, r) => {
      e.exports = r(82886)
    },
    82886: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        a = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        u = r ? Symbol.for("react.async_mode") : 60111,
        d = r ? Symbol.for("react.concurrent_mode") : 60111,
        h = r ? Symbol.for("react.forward_ref") : 60112,
        f = r ? Symbol.for("react.suspense") : 60113,
        p = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        g = r ? Symbol.for("react.lazy") : 60116,
        v = r ? Symbol.for("react.block") : 60121,
        y = r ? Symbol.for("react.fundamental") : 60117,
        b = r ? Symbol.for("react.responder") : 60118,
        _ = r ? Symbol.for("react.scope") : 60119;

      function x(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
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

      function w(e) {
        return x(e) === d
      }
      t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = n, t.ForwardRef = h, t.Fragment = i, t.Lazy = g, t.Memo = m, t.Portal = o, t.Profiler = s, t.StrictMode = a, t.Suspense = f, t.isAsyncMode = function(e) {
        return w(e) || x(e) === u
      }, t.isConcurrentMode = w, t.isContextConsumer = function(e) {
        return x(e) === c
      }, t.isContextProvider = function(e) {
        return x(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
      }, t.isForwardRef = function(e) {
        return x(e) === h
      }, t.isFragment = function(e) {
        return x(e) === i
      }, t.isLazy = function(e) {
        return x(e) === g
      }, t.isMemo = function(e) {
        return x(e) === m
      }, t.isPortal = function(e) {
        return x(e) === o
      }, t.isProfiler = function(e) {
        return x(e) === s
      }, t.isStrictMode = function(e) {
        return x(e) === a
      }, t.isSuspense = function(e) {
        return x(e) === f
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === i || e === d || e === s || e === a || e === f || e === p || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === h || e.$$typeof === y || e.$$typeof === b || e.$$typeof === _ || e.$$typeof === v)
      }, t.typeOf = x
    },
    93770: (e, t, r) => {
      r.r(t), r.d(t, {
        Alert: () => a,
        AlertBanner: () => s,
        Body: () => B,
        Breadcrumbs: () => c,
        Button: () => ur,
        Checkbox: () => Mm,
        Code: () => tv,
        Display: () => zg,
        Divider: () => Pg,
        Dropdown: () => pm,
        Heading: () => E,
        IconButton: () => nh,
        Label: () => Wg,
        Lightbox: () => gf,
        Loader: () => pv,
        Option: () => mm,
        RadioButton: () => vg,
        RadioContext: () => lg,
        RadioGroup: () => cg,
        Switch: () => Vg,
        Tag: () => l,
        Text: () => L,
        TextArea: () => Nt,
        TextField: () => i,
        TextSemantics: () => N,
        Tooltip: () => tf
      });
      var n = {};
      r.r(n), r.d(n, {
        CheckLG: () => ym,
        CheckMD: () => vm,
        CheckXL: () => bm,
        DashLG: () => xm,
        DashMD: () => _m,
        DashXL: () => wm
      });
      var o = {};
      r.r(o), r.d(o, {
        DotLG: () => dg,
        DotMD: () => ug,
        DotXL: () => hg
      });
      var i = {};
      r.r(i), r.d(i, {
        Button: () => vy,
        Control: () => py,
        Description: () => by,
        Hint: () => fy,
        Icon: () => gy,
        Input: () => my,
        Label: () => hy,
        PasswordButton: () => yy,
        Root: () => dy
      });
      var a = {};
      r.r(a), r.d(a, {
        Body: () => Ry,
        CloseButton: () => Fy,
        Description: () => Hy,
        ErrorText: () => zy,
        Footer: () => Vy,
        Header: () => ky,
        Icon: () => Ay,
        Link: () => By,
        Root: () => Iy,
        RootContext: () => Ny,
        Title: () => Dy,
        iconStatusMap: () => My,
        useAlertContext: () => Ly
      });
      var s = {};
      r.r(s), r.d(s, {
        Alert: () => Ub,
        CloseButton: () => Xb,
        Description: () => Fb,
        Icon: () => zb,
        Link: () => qb,
        PaginationCounter: () => Yb,
        PaginationNav: () => Kb,
        PaginationNextButton: () => Wb,
        PaginationPrevButton: () => $b,
        PaginationViewport: () => Gb,
        Root: () => Bb,
        RootContext: () => Db,
        iconStatusMap: () => Vb,
        useAlertBannerContext: () => Hb
      });
      var l = {};
      r.r(l), r.d(l, {
        CloseButton: () => u_,
        Icon: () => c_,
        Label: () => l_,
        Root: () => s_,
        RootContext: () => i_,
        useTagContext: () => a_
      });
      var c = {};
      r.r(c), r.d(c, {
        Icon: () => P_,
        Item: () => E_,
        OverflowMenu: () => S_,
        OverflowMenuItem: () => C_,
        Root: () => w_,
        RootContext: () => x_,
        useBreadcrumbsContext: () => __
      });
      var u = r(70954),
        d = r(91755),
        h = r(71127),
        f = r.n(h),
        p = r(6385);

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
      var b, _, x = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        w = (b = {
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
        }, (_ = e => {
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
          for (var [l, c] of b.compoundVariants) x(l, r, b.defaultVariants) && (t += " " + c);
          return t
        }).variants = () => Object.keys(b.variantClassNames), _.classNames = {
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
          a = (0, d.mergeProps)(n, {
            className: w({
              level: t
            })
          });
        return (0, u.jsx)(i, {
          ref: o,
          "data-testid": r,
          ...a
        })
      }));

      function P(e) {
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

      function S(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? S(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = P(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function T(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var O = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        j = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = C(C({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) O(c, n, e.defaultVariants) && (r += " " + u);
            return r
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
        L = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const i = e ? p.DX : N[r] || "span",
            a = (0, d.mergeProps)(n, {
              className: j({
                semantic: r
              })
            });
          return (0, u.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }));
      var I = r(5060);

      function k(e) {
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

      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? R(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = k(o)) in n ? Object.defineProperty(n, o, {
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

      function A(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var D = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        H = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = M(M({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) D(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return A(e.variantClassNames, (e => A(e, (e => e.split(" ")[0]))))
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
      const B = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const a = e ? p.DX : "p",
          s = (0, d.mergeProps)({
            className: H({
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
      var V = r(78618),
        z = r.t(V, 2),
        F = r(9164);
      const U = new Set(["id"]),
        G = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        q = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        X = /^(data-.*)$/;

      function K(e, t = {}) {
        let {
          labelable: r,
          isLink: n,
          propNames: o
        } = t, i = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (U.has(t) || r && G.has(t) || n && q.has(t) || (null == o ? void 0 : o.has(t)) || X.test(t)) && (i[t] = e[t]);
        return i
      }
      const W = "undefined" != typeof document ? h.useLayoutEffect : () => {};

      function $(e) {
        const t = (0, h.useRef)(null);
        return W((() => {
          t.current = e
        }), [e]), (0, h.useCallback)(((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }), [])
      }

      function Y(e, t, r) {
        let n = (0, h.useRef)(t),
          o = $((() => {
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
      const Z = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Q = e => e && "window" in e && e.window === e ? e : Z(e).defaultView || window;

      function J(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      const ee = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        te = h.createContext(ee),
        re = h.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let ne = new WeakMap;
      const oe = "function" == typeof h.useId ? function(e) {
        let t = h.useId(),
          [r] = (0, h.useState)(le());
        return e || `${r?"react-aria":`react-aria${ee.prefix}`}-${t}`
      } : function(e) {
        let t = (0, h.useContext)(te),
          r = function(e = !1) {
            let t = (0, h.useContext)(te),
              r = (0, h.useRef)(null);
            if (null === r.current && !e) {
              var n, o;
              let e = null === (o = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = ne.get(e);
                null == r ? ne.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, ne.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
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
        return "function" == typeof h.useSyncExternalStore ? h.useSyncExternalStore(se, ie, ae) : (0, h.useContext)(re)
      }
      let ce, ue = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        de = new Map;

      function he(e) {
        let [t, r] = (0, h.useState)(e), n = (0, h.useRef)(null), o = oe(t), i = (0, h.useRef)(null);
        if (ce && ce.register(i, o), ue) {
          const e = de.get(o);
          e && !e.includes(n) ? e.push(n) : de.set(o, [n])
        }
        return W((() => {
          let e = o;
          return () => {
            ce && ce.unregister(i), de.delete(e)
          }
        }), [o]), (0, h.useEffect)((() => {
          let e = n.current;
          return e && r(e), () => {
            e && (n.current = null)
          }
        })), o
      }

      function fe(e, t) {
        if (e === t) return e;
        let r = de.get(e);
        if (r) return r.forEach((e => e.current = t)), t;
        let n = de.get(t);
        return n ? (n.forEach((t => t.current = e)), e) : t
      }

      function pe(e = []) {
        let t = he(),
          [r, n] = function(e) {
            let [t, r] = (0, h.useState)(e), n = (0, h.useRef)(null), o = $((() => {
              if (!n.current) return;
              let e = n.current.next();
              e.done ? n.current = null : t === e.value ? o() : r(e.value)
            }));
            W((() => {
              n.current && o()
            }));
            let i = $((e => {
              n.current = e(t), o()
            }));
            return [t, i]
          }(t),
          o = (0, h.useCallback)((() => {
            n((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, n]);
        return W(o, [t, o, ...e]), r
      }

      function me(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = J(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = fe(r, o) : t[e] = void 0 !== o ? o : r : t[e] = (0, I.A)(r, o)
          }
        }
        return t
      }

      function ge(e, t, r) {
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

      function ve(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = he(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function ye(e) {
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
          t = he(t);
          let a = he(),
            s = {};
          return r && (n = n ? `${a} ${n}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: s,
            fieldProps: ve({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), s = pe([Boolean(t), Boolean(r), n, o]), l = pe([Boolean(t), Boolean(r), n, o]);
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
      const xe = be.join(':not([hidden]):not([tabindex="-1"]),');

      function we(e) {
        return e.matches(_e)
      }

      function Ee(e) {
        return e.matches(xe)
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
        let r = $((t => {
          null == e || e(t)
        }));
        return (0, h.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let n = e.target,
              o = e => {
                if (t.current.isFocused = !1, n.disabled) {
                  let t = Ce(e);
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
      let je = !1;

      function Ne(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function Le(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Ie(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const ke = Ie((function() {
          return Le(/^Mac/i)
        })),
        Re = Ie((function() {
          return Le(/^iPhone/i)
        })),
        Me = Ie((function() {
          return Le(/^iPad/i) || ke() && navigator.maxTouchPoints > 1
        })),
        Ae = Ie((function() {
          return Re() || Me()
        })),
        De = (Ie((function() {
          return ke() || Ae()
        })), Ie((function() {
          return Ne(/AppleWebKit/i) && !He()
        }))),
        He = Ie((function() {
          return Ne(/Chrome/i)
        })),
        Be = Ie((function() {
          return Ne(/Android/i)
        })),
        Ve = Ie((function() {
          return Ne(/Firefox/i)
        }));

      function ze(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (Be() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let Fe = null,
        Ue = new Set,
        Ge = new Map,
        qe = !1,
        Xe = !1;

      function Ke(e, t) {
        for (let r of Ue) r(e, t)
      }

      function We(e) {
        qe = !0,
          function(e) {
            return !(e.metaKey || !ke() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Fe = "keyboard", Ke("keyboard", e))
      }

      function $e(e) {
        Fe = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (qe = !0, Ke("pointer", e))
      }

      function Ye(e) {
        ze(e) && (qe = !0, Fe = "virtual")
      }

      function Ze(e) {
        e.target !== window && e.target !== document && !je && e.isTrusted && (qe || Xe || (Fe = "virtual", Ke("virtual", e)), qe = !1, Xe = !1)
      }

      function Qe() {
        je || (qe = !1, Xe = !0)
      }

      function Je(e) {
        if ("undefined" == typeof window || Ge.get(Q(e))) return;
        const t = Q(e),
          r = Z(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          qe = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", We, !0), r.addEventListener("keyup", We, !0), r.addEventListener("click", Ye, !0), t.addEventListener("focus", Ze, !0), t.addEventListener("blur", Qe, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", $e, !0), r.addEventListener("pointermove", $e, !0), r.addEventListener("pointerup", $e, !0)), t.addEventListener("beforeunload", (() => {
          et(e)
        }), {
          once: !0
        }), Ge.set(t, {
          focus: n
        })
      }
      const et = (e, t) => {
        const r = Q(e),
          n = Z(e);
        t && n.removeEventListener("DOMContentLoaded", t), Ge.has(r) && (r.HTMLElement.prototype.focus = Ge.get(r).focus, n.removeEventListener("keydown", We, !0), n.removeEventListener("keyup", We, !0), n.removeEventListener("click", Ye, !0), r.removeEventListener("focus", Ze, !0), r.removeEventListener("blur", Qe, !1), "undefined" != typeof PointerEvent && (n.removeEventListener("pointerdown", $e, !0), n.removeEventListener("pointermove", $e, !0), n.removeEventListener("pointerup", $e, !0)), Ge.delete(r))
      };
      "undefined" != typeof document && function(e) {
        const t = Z(e);
        let r;
        "loading" !== t.readyState ? Je(e) : (r = () => {
          Je(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function tt(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      const rt = (e = document) => e.activeElement;

      function nt(e) {
        return e.target
      }
      let ot = new Map,
        it = new Set;

      function at() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = ot.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), ot.delete(r.target)), 0 === ot.size)) {
            for (let e of it) e();
            it.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!e(r) || !r.target) return;
          let n = ot.get(r.target);
          n || (n = new Set, ot.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
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
            a = Oe(i),
            s = (0, h.useCallback)((e => {
              const t = Z(e.target),
                n = t ? rt(t) : rt();
              e.target === e.currentTarget && n === nt(e.nativeEvent) && (r && r(e), o && o(!0), a(e))
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
              onKeyDown: lt(e.onKeyDown),
              onKeyUp: lt(e.onKeyUp)
            }
          }
        }(e), o = me(r, n), i = function(e) {
          let t = (0, h.useContext)(ut) || {};
          ct(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), a = e.isDisabled ? {} : i, s = (0, h.useRef)(e.autoFocus);
        (0, h.useEffect)((() => {
          s.current && t.current && function(e) {
            const t = Z(e),
              r = rt(t);
            if ("virtual" === Fe) {
              let n = r;
              st((() => {
                rt(t) === n && e.isConnected && Pe(e)
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

      function ht(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        W((() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
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
            }(i) === r.current && (o ? o() : null === (a = r.current) || void 0 === a || a.focus(), Fe = "keyboard", Ke("keyboard", null)), e.preventDefault()
          })),
          s = $((() => {
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
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          } = e[yt];
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
              validationDetails: mt
            } : null,
            c = (0, h.useMemo)((() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return _t(r)
                }
                return []
              }(a, o);
              return xt(e)
            }), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let u = (0, h.useContext)(vt),
            d = (0, h.useMemo)((() => n ? Array.isArray(n) ? n.flatMap((e => _t(u[e]))) : _t(u[n]) : []), [u, n]),
            [f, p] = (0, h.useState)(u),
            [m, g] = (0, h.useState)(!1);
          u !== f && (p(u), g(!1));
          let v = (0, h.useMemo)((() => xt(m ? [] : d)), [m, d]),
            y = (0, h.useRef)(gt),
            [b, _] = (0, h.useState)(gt),
            x = (0, h.useRef)(gt),
            [w, E] = (0, h.useState)(!1);
          return (0, h.useEffect)((() => {
            if (!w) return;
            E(!1);
            let e = c || i || y.current;
            wt(e, x.current) || (x.current = e, _(e))
          })), {
            realtimeValidation: l || v || c || i || gt,
            displayValidation: "native" === s ? l || v || b : l || v || c || i || b,
            updateValidation(e) {
              "aria" !== s || wt(b, e) ? y.current = e : _(e)
            },
            resetValidation() {
              let e = gt;
              wt(e, x.current) || (x.current = e, _(e)), "native" === s && E(!1), g(!0)
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

      function xt(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: mt
        } : null
      }

      function wt(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, r) => e === t.validationErrors[r])) && Object.entries(e.validationDetails).every((([e, r]) => t.validationDetails[e] === r))
      }

      function Et(e) {
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

      function Pt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function St(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Pt(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Et(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pt(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Ct(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Tt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ot = "foundry_hcgxh_vq8c3j8",
        jt = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = St(St({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Tt(c, n, e.defaultVariants) && (r += " " + u);
            return r
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
      const Nt = (0, h.forwardRef)((({
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
          x = (0, F.UP)(_, b),
          {
            inputProps: w,
            labelProps: E,
            descriptionProps: P,
            isInvalid: S,
            errorMessageProps: C,
            validationErrors: T
          } = function(e, t) {
            let {
              inputElementType: r = "input",
              isDisabled: n = !1,
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
            const x = {
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
              inputProps: me(_, "input" === r ? x : void 0, {
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
          O = (0, d.mergeProps)({
            ...w,
            className: s
          }, {
            className: jt({
              isInvalid: S
            }),
            "aria-errormessage": C?.id
          }),
          j = e ? p.DX : "textarea";
        return (0, u.jsxs)("div", {
          className: "foundry_hcgxh_vq8c3j0",
          children: [(t || n) && (0, u.jsxs)("div", {
            className: "foundry_hcgxh_vq8c3j1",
            children: [(0, u.jsx)(p.s6, {
              enabled: !!c,
              children: (0, u.jsx)(B, {
                size: "SM",
                className: (0, I.$)("foundry_hcgxh_vq8c3j2", w.disabled && Ot),
                asChild: !0,
                children: (0, u.jsxs)("label", {
                  ...E,
                  children: [t, r && !m && (0, u.jsx)("span", {
                    className: "foundry_hcgxh_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), n && (0, u.jsx)(B, {
              size: "XS",
              className: "foundry_hcgxh_vq8c3j3",
              children: n
            })]
          }), (0, u.jsx)(j, {
            rows: l,
            ref: x,
            "data-testid": a,
            ...O,
            children: o
          }), i && (0, u.jsx)(p.s6, {
            enabled: T.length > 0 || !!f,
            children: (0, u.jsx)(B, {
              size: "SM",
              ...P,
              className: (0, I.$)("foundry_hcgxh_vq8c3j4", w.disabled && Ot),
              children: i
            })
          }), T.length > 0 && (0, u.jsxs)(B, {
            size: "SM",
            appearance: "bold",
            ...C,
            className: "foundry_hcgxh_vq8c3j5",
            children: [(0, u.jsx)(V.X, {
              size: "MD",
              label: "",
              className: "foundry_hcgxh_vq8c3j6"
            }), T.join(". ")]
          })]
        })
      }));
      let Lt = "default",
        It = "",
        kt = new WeakMap;

      function Rt(e) {
        if (Ae()) {
          if ("disabled" !== Lt) return;
          Lt = "restoring", setTimeout((() => {
            st((() => {
              if ("restoring" === Lt) {
                const t = Z(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = It || ""), It = "", Lt = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && kt.has(e)) {
          let t = kt.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), kt.delete(e)
        }
      }
      const Mt = h.createContext({
        register: () => {}
      });

      function At(e, t, r) {
        if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
        return t.get(e)
      }

      function Dt(e, t, r) {
        return function(e, t, r) {
          if (t.set) t.set.call(e, r);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = r
          }
        }(e, At(e, t, "set"), r), r
      }

      function Ht() {
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
      Mt.displayName = "PressResponderContext";
      const Bt = (0, h.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let r = document.createElement("a");
              r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r)
            }
          }(e, (e => zt(e, t)))
        },
        useHref: e => e
      });

      function Vt() {
        return (0, h.useContext)(Bt)
      }

      function zt(e, t, r = !0) {
        var n, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        Ve() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (ke() ? i = !0 : a = !0);
        let c = De() && ke() && !Me() ? new KeyboardEvent("keydown", {
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
        zt.isOpening = r, Pe(e), e.dispatchEvent(c), zt.isOpening = !1
      }

      function Ft(e) {
        var t;
        const r = Vt().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }
      zt.isOpening = !1;
      var Ut = r(18429),
        Gt = new WeakMap;
      class qt {
        continuePropagation() {
          Dt(this, Gt, !1)
        }
        get shouldStopPropagation() {
          return function(e, t) {
            return t.get ? t.get.call(e) : t.value
          }(this, At(this, Gt, "get"))
        }
        constructor(e, t, r, n) {
          var o, i, a, s;
          s = {
              writable: !0,
              value: void 0
            },
            function(e, t) {
              if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(i = this, a = Gt), a.set(i, s), Dt(this, Gt, !0);
          let l = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const c = null == l ? void 0 : l.getBoundingClientRect();
          let u, d, h = 0,
            f = null;
          null != r.clientX && null != r.clientY && (d = r.clientX, f = r.clientY), c && (null != d && null != f ? (u = d - c.left, h = f - c.top) : (u = c.width / 2, h = c.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = u, this.y = h
        }
      }
      const Xt = Symbol("linkClicked");

      function Kt(e) {
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
          let t = (0, h.useContext)(Mt);
          if (t) {
            let {
              register: r,
              ...n
            } = t;
            e = me(n, e), r()
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
          if (o.isTriggeringEvent = !0, n) {
            let r = new qt("pressstart", t, e);
            n(r), i = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, g(!0), i
        })), x = $(((e, n, i = !0) => {
          let a = v.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new qt("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), g(!1), t && i && !s) {
            let r = new qt("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, l
        })), w = $(((e, t) => {
          let r = v.current;
          if (s) return !1;
          if (i) {
            r.isTriggeringEvent = !0;
            let n = new qt("pressup", t, e);
            return i(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        })), E = $((e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && x(Yt(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, b(), d || Rt(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), P = $((e => {
          u && E(e)
        })), S = $((e => {
          null == a || a(e)
        })), C = $(((e, t) => {
          if (a) {
            let r = new MouseEvent("click", e);
            Te(r, t), a(Ce(r))
          }
        })), T = (0, h.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if ($t(t.nativeEvent, t.currentTarget) && tt(t.currentTarget, nt(t.nativeEvent))) {
                  var n;
                  Zt(nt(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = _(t, "keyboard");
                    let n = t.currentTarget,
                      i = t => {
                        $t(t, n) && !t.repeat && tt(n, nt(t)) && e.target && w(Yt(e.target, t), "keyboard")
                      };
                    y(Z(t.currentTarget), "keyup", J(i, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && ke() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || tt(t.currentTarget, nt(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !zt.isOpening) {
                  let r = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !ze(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual";
                      r = x(Yt(t.currentTarget, t), n, !0), e.isOverTarget = !1, S(t), E(t)
                    }
                  } else {
                    let e = _(t, "virtual"),
                      n = w(t, "virtual"),
                      o = x(t, "virtual");
                    S(t), r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && $t(t, e.target)) {
                var n;
                Zt(nt(t), t.key) && t.preventDefault();
                let r = nt(t),
                  o = tt(e.target, nt(t));
                x(Yt(e.target, t), "keyboard", o), o && C(t, e.target), b(), "Enter" !== t.key && Wt(e.target) && tt(e.target, r) && !t[Xt] && (t[Xt] = !0, zt(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !tt(t.currentTarget, nt(t.nativeEvent))) return;
              if (o = t.nativeEvent, !Be() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (Ae()) {
                    if ("default" === Lt) {
                      const t = Z(e);
                      It = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    Lt = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    kt.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = _(t, e.pointerType);
                let o = nt(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(Z(t.currentTarget), "pointerup", r, !1), y(Z(t.currentTarget), "pointercancel", n, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (tt(t.currentTarget, nt(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let r = function(e) {
                    for (; e && !we(e);) e = e.parentElement;
                    let t = Q(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    je = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, Pe(r), l()))
                      },
                      a = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, Pe(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), je = !1, n = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              tt(t.currentTarget, nt(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && w(t, e.pointerType || t.pointerType)
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, _(Yt(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, x(Yt(e.target, t), e.pointerType, !1), P(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (tt(e.target, nt(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? E(t) : (Pe(e.target), e.target.click()))
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
              tt(e.currentTarget, nt(e.nativeEvent)) && E(e)
            }
          }
          return t
        }), [y, s, c, b, d, E, P, x, _, w, S, C]);
        return (0, h.useEffect)((() => {
          let e = null == f ? void 0 : f.current;
          e && e instanceof Q(e).Element && "auto" === Q(e).getComputedStyle(e).touchAction && (e.style.touchAction = "pan-x pan-y pinch-zoom")
        }), [f]), (0, h.useEffect)((() => {
          let e = v.current;
          return () => {
            var t;
            d || Rt(null !== (t = e.target) && void 0 !== t ? t : void 0);
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
          key: r,
          code: n
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof Q(o).HTMLInputElement && !Jt(o, r) || o instanceof Q(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && Wt(o)) && "Enter" !== r)
      }

      function Yt(e, t) {
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

      function Zt(e, t) {
        return e instanceof HTMLInputElement ? !Jt(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Wt(e)))
        }(e)
      }
      const Qt = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Jt(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Qt.has(e.type)
      }

      function er(e, t) {
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
          buttonProps: me(r, _, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"]
          })
        }
      }
      var tr = r(41689);

      function rr(e) {
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

      function nr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function or(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nr(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = rr(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nr(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function ir(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ar = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        sr = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = or(or({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ar(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ir(e.variantClassNames, (e => ir(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        lr = sr({
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
        cr = sr({
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
      const ur = (0, h.forwardRef)((({
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
            b = (0, F.UP)(y, v),
            _ = (0, tr.zQ)(),
            x = "string" == typeof f ? f : f?.[_] ?? f.default ?? "MD",
            {
              events: w,
              others: E
            } = (0, d.filterEventProps)(g, {
              onPress: !1
            }),
            {
              buttonProps: P,
              isPressed: S
            } = er({
              ...E,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => E.onPress?.(e) ?? o?.(e)
            }, y),
            C = (0, d.mergeProps)({
              ...w,
              role: "button",
              "data-pressed": S,
              "data-testid": e,
              className: lr({
                appearance: c,
                size: x,
                fullWidth: m,
                iconLeft: !!i,
                iconRight: !!s
              })
            }, {
              ...P,
              className: r
            }),
            T = i && z[i],
            O = s && z[s],
            j = t ? p.DX : "button",
            N = m && (O || O && T);
          return (0, u.jsxs)(j, {
            ref: b,
            ...C,
            children: [N && (0, u.jsx)("div", {
              className: "foundry_hcgxh_17pcofyq"
            }), T && (0, u.jsx)(T, {
              label: a || "",
              size: x,
              className: "foundry_hcgxh_17pcofym"
            }), (0, u.jsx)(p.xV, {
              children: n
            }), O && (0, u.jsx)(O, {
              label: l || "",
              size: x,
              className: cr({
                fullWidth: m
              })
            })]
          })
        })),
        dr = {
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

      function hr(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function fr(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -hr(t - e, r - t, n) + t : e > r ? +hr(e - r, r - t, n) + r : e
      }

      function pr(e, t, r) {
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

      function mr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function gr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mr(Object(r), !0).forEach((function(t) {
            pr(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mr(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      const vr = {
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

      function yr(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const br = ["enter", "leave"];
      const _r = ["gotpointercapture", "lostpointercapture"];

      function xr(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = _r.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function wr(e) {
        return "touches" in e
      }

      function Er(e) {
        return wr(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Pr(e) {
        return wr(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Sr(e, t) {
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

      function Cr(e, t) {
        const [r, n] = Array.from(e.touches).filter((e => t.includes(e.identifier)));
        return Sr(r, n)
      }

      function Tr(e) {
        const t = Pr(e);
        return wr(e) ? t.identifier : t.pointerId
      }

      function Or(e) {
        const t = Pr(e);
        return [t.clientX, t.clientY]
      }

      function jr(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function Nr(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function Lr() {}

      function Ir(...e) {
        return 0 === e.length ? Lr : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function kr(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Rr {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? Nr(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            dr.addTo(t._distance, e)
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
          f && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = Nr(r.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [p, m] = t.offset, [
            [g, v],
            [y, b]
          ] = t._bounds;
          t.overflow = [p < g ? -1 : p > v ? 1 : 0, m < y ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const _ = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, [t, r], [n, o]) {
              const [
                [i, a],
                [s, l]
              ] = e;
              return [fr(t, i, a, n), fr(r, s, l, o)]
            }(t._bounds, t.offset, _), t.delta = dr.sub(t.offset, h), this.computeMovement(), f && (!t.last || o > 32)) {
            t.delta = dr.sub(t.offset, h);
            const e = t.delta.map(Math.abs);
            dr.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(gr(gr(gr({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Mr extends Rr {
        constructor(...e) {
          super(...e), pr(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = dr.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = dr.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[Er(e)] : r.axisThreshold;
            t.axis = function([e, t], r) {
              const n = Math.abs(e),
                o = Math.abs(t);
              return n > o && n > r ? "x" : o > n && o > r ? "y" : void 0
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
      const Ar = e => e,
        Dr = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => gr(gr({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return dr.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? dr.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Ar
          },
          threshold: e => dr.toVector(e, 0)
        },
        Hr = gr(gr({}, Dr), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => Hr.bounds(e(t));
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
        Br = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Vr = "undefined" != typeof window && window.document && window.document.createElement;

      function zr() {
        return Vr && "ontouchstart" in window
      }
      const Fr = {
          isBrowser: Vr,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: zr(),
          touchscreen: zr() || Vr && window.navigator.maxTouchPoints > 1,
          pointer: Vr && "onpointerdown" in window,
          pointerLock: Vr && "exitPointerLock" in window.document
        },
        Ur = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Gr = gr(gr({}, Hr), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && Fr.pointerLock, Fr.touch && r ? "touch" : this.pointerLock ? "mouse" : Fr.pointer && !o ? "pointer" : Fr.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Fr.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
          },
          pointerCapture(e, t, {
            pointer: {
              capture: r = !0,
              buttons: n = 1,
              keys: o = !0
            } = {}
          }) {
            return this.pointerButtons = n, this.keys = o, !this.pointerLock && "pointer" === this.device && r
          },
          threshold(e, t, {
            filterTaps: r = !1,
            tapsThreshold: n = 3,
            axis: o
          }) {
            const i = dr.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(dr.toVector(e)),
              distance: this.transform(dr.toVector(t)),
              duration: r
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
          axisThreshold: e => e ? gr(gr({}, Ur), e) : Ur,
          keyboardDisplacement: (e = 10) => e
        });

      function qr(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [i, a] = e._direction;
        (t < 0 && n > 0 && i < 0 || t > 0 && n < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && a < 0 || r > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Xr = gr(gr({}, Dr), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !Fr.touch && Fr.gesture) return "gesture";
            if (Fr.touch && n) return "touch";
            if (Fr.touchscreen) {
              if (Fr.pointer) return "pointer";
              if (Fr.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = kr(Nr(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = kr(Nr(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, dr.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Kr = gr(gr({}, Hr), {}, {
          mouseOnly: (e = !0) => e
        }),
        Wr = Hr,
        $r = Hr,
        Yr = gr(gr({}, Hr), {}, {
          mouseOnly: (e = !0) => e
        }),
        Zr = new Map,
        Qr = new Map;

      function Jr(e) {
        Zr.set(e.key, e.engine), Qr.set(e.key, e.resolver)
      }
      const en = {
          key: "drag",
          engine: class extends Mr {
            constructor(...e) {
              super(...e), pr(this, "ingKey", "dragging")
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
                e._bounds = Hr.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = Tr(e), r._pointerActive = !0, this.computeValues(Or(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Er(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = Tr(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = Or(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = dr.sub(o, t._values), this.computeValues(o)), dr.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = Tr(e);
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
              const t = Br[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, dr.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in Br && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Gr
        },
        tn = {
          key: "hover",
          engine: class extends Mr {
            constructor(...e) {
              super(...e), pr(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Or(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = Or(e);
              t._movement = t._delta = dr.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Yr
        },
        rn = {
          key: "move",
          engine: class extends Mr {
            constructor(...e) {
              super(...e), pr(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Or(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = Or(e),
                r = this.state;
              r._delta = dr.sub(t, r._values), dr.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Kr
        },
        nn = {
          key: "pinch",
          engine: class extends Rr {
            constructor(...e) {
              super(...e), pr(this, "ingKey", "pinching"), pr(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? dr.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = Cr(e, t._touchIds);
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
              const o = Sr(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = Cr(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = Sr(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = dr.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-jr(e)[1] / 100 * t.offset[0], 0], dr.addTo(t._movement, t._delta), qr(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Xr
        },
        on = {
          key: "scroll",
          engine: class extends Mr {
            constructor(...e) {
              super(...e), pr(this, "ingKey", "scrolling")
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
              t._delta = dr.sub(r, t._values), dr.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: Wr
        },
        an = {
          key: "wheel",
          engine: class extends Mr {
            constructor(...e) {
              super(...e), pr(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = jr(e), dr.addTo(t._movement, t._delta), qr(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: $r
        };
      const sn = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Fr.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        ln = ["target", "eventOptions", "window", "enabled", "transform"];

      function cn(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = cn(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class un {
        constructor(e, t) {
          pr(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const i = this._listeners,
            a = function(e, t = "") {
              const r = vr[e];
              return e + (r && r[t] || t)
            }(t, r),
            s = gr(gr({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class dn {
        constructor() {
          pr(this, "_timeouts", new Map)
        }
        add(e, t, r = 140, ...n) {
          this.remove(e), this._timeouts.set(e, window.setTimeout(t, r, ...n))
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
      class hn {
        constructor(e) {
          var t, r;
          pr(this, "gestures", new Set), pr(this, "_targetEventStore", new un(this)), pr(this, "gestureEventStores", {}), pr(this, "gestureTimeoutStores", {}), pr(this, "handlers", {}), pr(this, "config", {}), pr(this, "pointerIds", new Set), pr(this, "touchIds", new Set), pr(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && fn(t, "drag"), r.wheel && fn(t, "wheel"), r.scroll && fn(t, "scroll"), r.move && fn(t, "move"), r.pinch && fn(t, "pinch"), r.hover && fn(t, "hover")
        }
        setEventIds(e) {
          return wr(e) ? (this.touchIds = new Set(function(e) {
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
          this.config = function(e, t, r = {}) {
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
              }(n, ln);
            if (r.shared = cn({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              }, sn), t) {
              const e = Qr.get(t);
              r[t] = cn(gr({
                shared: r.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = Qr.get(e);
                t && (r[e] = cn(gr({
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
        bind(...e) {
          const t = this.config.shared,
            r = {};
          let n;
          if (!t.target || (n = t.target(), n)) {
            if (t.enabled) {
              for (const t of this.gestures) {
                const o = this.config[t],
                  i = pn(r, o.eventOptions, !!n);
                o.enabled && new(Zr.get(t))(this, e, t).bind(i)
              }
              const o = pn(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", (r => this.nativeHandlers[t](gr(gr({}, this.state.shared), {}, {
                event: r,
                args: e
              }))), void 0, !0)
            }
            for (const e in r) r[e] = Ir(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: i
              } = xr(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function fn(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new un(e, t), e.gestureTimeoutStores[t] = new dn
      }
      const pn = (e, t, r) => (n, o, i, a = {}, s = !1) => {
          var l, c;
          const u = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = a.passive) && void 0 !== c ? c : t.passive;
          let h = s ? n : function(e, t = "", r = !1) {
            const n = vr[e],
              o = n && n[t] || t;
            return "on" + yr(e) + yr(o) + (function(e = !1, t) {
              return e && !br.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, u);
          r && d && (h += "Passive"), e[h] = e[h] || [], e[h].push(i)
        },
        mn = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function gn(e, t, r, n, o, i) {
        if (!e.has(r)) return;
        if (!Zr.has(n)) return;
        const a = r + "Start",
          s = r + "End";
        o[n] = e => {
          let n;
          return e.first && a in t && t[a](e), r in t && (n = t[r](e)), e.last && s in t && t[s](e), n
        }, i[n] = i[n] || {}
      }

      function vn(e, t) {
        const r = ([en, nn, on, an, rn, tn].forEach(Jr), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) mn.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), i = {};
            return gn(o, r, "onDrag", "drag", i, t), gn(o, r, "onWheel", "wheel", i, t), gn(o, r, "onScroll", "scroll", i, t), gn(o, r, "onPinch", "pinch", i, t), gn(o, r, "onMove", "move", i, t), gn(o, r, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return function(e, t = {}, r, n) {
            const o = f().useMemo((() => new hn(e)), []);
            if (o.applyHandlers(e, n), o.applyConfig(t, r), f().useEffect(o.effect.bind(o)), f().useEffect((() => o.clean.bind(o)), []), void 0 === t.target) return o.bind.bind(o)
          }(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      var yn = Rn(),
        bn = e => Nn(e, yn),
        _n = Rn();
      bn.write = e => Nn(e, _n);
      var xn = Rn();
      bn.onStart = e => Nn(e, xn);
      var wn = Rn();
      bn.onFrame = e => Nn(e, wn);
      var En = Rn();
      bn.onFinish = e => Nn(e, En);
      var Pn = [];
      bn.setTimeout = (e, t) => {
        const r = bn.now() + t,
          n = () => {
            const e = Pn.findIndex((e => e.cancel == n));
            ~e && Pn.splice(e, 1), On -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return Pn.splice(Sn(r), 0, o), On += 1, Ln(), o
      };
      var Sn = e => ~(~Pn.findIndex((t => t.time > e)) || ~Pn.length);
      bn.cancel = e => {
        xn.delete(e), wn.delete(e), En.delete(e), yn.delete(e), _n.delete(e)
      }, bn.sync = e => {
        jn = !0, bn.batchedUpdates(e), jn = !1
      }, bn.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, bn.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          xn.delete(r), t = null
        }, n
      };
      var Cn = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      bn.use = e => Cn = e, bn.now = "undefined" != typeof performance ? () => performance.now() : Date.now, bn.batchedUpdates = e => e(), bn.catch = console.error, bn.frameLoop = "always", bn.advance = () => {
        "demand" !== bn.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : kn()
      };
      var Tn = -1,
        On = 0,
        jn = !1;

      function Nn(e, t) {
        jn ? (t.delete(e), e(0)) : (t.add(e), Ln())
      }

      function Ln() {
        Tn < 0 && (Tn = 0, "demand" !== bn.frameLoop && Cn(In))
      }

      function In() {
        ~Tn && (Cn(In), bn.batchedUpdates(kn))
      }

      function kn() {
        const e = Tn;
        Tn = bn.now();
        const t = Sn(Tn);
        t && (Mn(Pn.splice(0, t), (e => e.handler())), On -= t), On ? (xn.flush(), yn.flush(e ? Math.min(64, Tn - e) : 16.667), wn.flush(), _n.flush(), En.flush()) : Tn = -1
      }

      function Rn() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            On += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (On -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, On -= t.size, Mn(t, (t => t(r) && e.add(t))), On += e.size, t = e)
          }
        }
      }

      function Mn(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            bn.catch(e)
          }
        }))
      }
      var An = Object.defineProperty,
        Dn = {};

      function Hn() {}((e, t) => {
        for (var r in t) An(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(Dn, {
        assign: () => Qn,
        colors: () => $n,
        createStringInterpolator: () => qn,
        skipAnimation: () => Yn,
        to: () => Xn,
        willAdvance: () => Zn
      });
      var Bn = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Vn(e, t) {
        if (Bn.arr(e)) {
          if (!Bn.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var zn = (e, t) => e.forEach(t);

      function Fn(e, t, r) {
        if (Bn.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var Un = e => Bn.und(e) ? [] : Bn.arr(e) ? e : [e];

      function Gn(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), zn(r, t)
        }
      }
      var qn, Xn, Kn = (e, ...t) => Gn(e, (e => e(...t))),
        Wn = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        $n = null,
        Yn = !1,
        Zn = Hn,
        Qn = e => {
          e.to && (Xn = e.to), e.now && (bn.now = e.now), void 0 !== e.colors && ($n = e.colors), null != e.skipAnimation && (Yn = e.skipAnimation), e.createStringInterpolator && (qn = e.createStringInterpolator), e.requestAnimationFrame && bn.use(e.requestAnimationFrame), e.batchedUpdates && (bn.batchedUpdates = e.batchedUpdates), e.willAdvance && (Zn = e.willAdvance), e.frameLoop && (bn.frameLoop = e.frameLoop)
        },
        Jn = new Set,
        eo = [],
        to = [],
        ro = 0,
        no = {
          get idle() {
            return !Jn.size && !eo.length
          },
          start(e) {
            ro > e.priority ? (Jn.add(e), bn.onStart(oo)) : (io(e), bn(so))
          },
          advance: so,
          sort(e) {
            if (ro) bn.onFrame((() => no.sort(e)));
            else {
              const t = eo.indexOf(e);
              ~t && (eo.splice(t, 1), ao(e))
            }
          },
          clear() {
            eo = [], Jn.clear()
          }
        };

      function oo() {
        Jn.forEach(io), Jn.clear(), bn(so)
      }

      function io(e) {
        eo.includes(e) || ao(e)
      }

      function ao(e) {
        eo.splice(function(t) {
          const r = t.findIndex((t => t.priority > e.priority));
          return r < 0 ? t.length : r
        }(eo), 0, e)
      }

      function so(e) {
        const t = to;
        for (let r = 0; r < eo.length; r++) {
          const n = eo[r];
          ro = n.priority, n.idle || (Zn(n), n.advance(e), n.idle || t.push(n))
        }
        return ro = 0, (to = eo).length = 0, (eo = t).length > 0
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

      function _o(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function xo(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = _o(o, n, e + 1 / 3),
          a = _o(o, n, e),
          s = _o(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function wo(e) {
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
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = yo.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : $n && void 0 !== $n[e] ? $n[e] : (t = ho.exec(e)) ? (wo(t[1]) << 24 | wo(t[2]) << 16 | wo(t[3]) << 8 | 255) >>> 0 : (t = fo.exec(e)) ? (wo(t[1]) << 24 | wo(t[2]) << 16 | wo(t[3]) << 8 | Po(t[4])) >>> 0 : (t = go.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = bo.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = vo.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = po.exec(e)) ? (255 | xo(Eo(t[1]), So(t[2]), So(t[3]))) >>> 0 : (t = mo.exec(e)) ? (xo(Eo(t[1]), So(t[2]), So(t[3])) | Po(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var To = (e, t, r) => {
          if (Bn.fun(e)) return e;
          if (Bn.arr(e)) return To({
            range: e,
            output: t,
            extrapolate: r
          });
          if (Bn.str(e.output[0])) return qn(e);
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
        Oo = 1.70158,
        jo = 1.525 * Oo,
        No = Oo + 1,
        Lo = 2 * Math.PI / 3,
        Io = 2 * Math.PI / 4.5,
        ko = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        Ro = {
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
          easeInBack: e => No * e * e * e - Oo * e * e,
          easeOutBack: e => 1 + No * Math.pow(e - 1, 3) + Oo * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - jo) / 2 : (Math.pow(2 * e - 2, 2) * ((jo + 1) * (2 * e - 2) + jo) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Lo),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Lo) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Io) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Io) / 2 + 1,
          easeInBounce: e => 1 - ko(1 - e),
          easeOutBounce: ko,
          easeInOutBounce: e => e < .5 ? (1 - ko(1 - 2 * e)) / 2 : (1 + ko(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        Mo = Symbol.for("FluidValue.get"),
        Ao = Symbol.for("FluidValue.observers"),
        Do = e => Boolean(e && e[Mo]),
        Ho = e => e && e[Mo] ? e[Mo]() : e,
        Bo = e => e[Ao] || null;

      function Vo(e, t) {
        const r = e[Ao];
        r && r.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var zo = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Fo(this, e)
          }
        },
        Fo = (e, t) => Xo(e, Mo, t);

      function Uo(e, t) {
        if (e[Mo]) {
          let r = e[Ao];
          r || Xo(e, Ao, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function Go(e, t) {
        const r = e[Ao];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[Ao] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var qo, Xo = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        Ko = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Wo = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        $o = new RegExp(`(${Ko.source})(%|[a-z]+)`, "i"),
        Yo = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Zo = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Qo = e => {
          const [t, r] = Jo(e);
          if (!t || Wn()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && Zo.test(r) ? Qo(r) : r || e
        },
        Jo = e => {
          const t = Zo.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        ei = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        ti = e => {
          qo || (qo = $n ? new RegExp(`(${Object.keys($n).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => Ho(e).replace(Zo, Qo).replace(Wo, Co).replace(qo, Co))),
            r = t.map((e => e.match(Ko).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))),
            o = n.map((t => To({
              ...e,
              output: t
            })));
          return e => {
            const r = !$o.test(t[0]) && t.find((e => $o.test(e)))?.replace(Ko, "");
            let n = 0;
            return t[0].replace(Ko, (() => `${o[n++](e)}${r||""}`)).replace(Yo, ei)
          }
        },
        ri = "react-spring: ",
        ni = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${ri}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        oi = ni(console.warn),
        ii = ni(console.warn);

      function ai(e) {
        return Bn.str(e) && ("#" == e[0] || /\d/.test(e) || !Wn() && Zo.test(e) || e in ($n || {}))
      }
      var si = Wn() ? h.useEffect : h.useLayoutEffect;

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
          return r = e, n = hi, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
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
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Bn.num(this._value) && (this.lastPosition = this._value)
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
            return Bn.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Bn.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
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
            if (Bn.str(e)) {
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
            return Fn(this.source, ((r, n) => {
              var o;
              (o = r) && o[hi] === o ? t[n] = r.getValue(e) : Do(r) ? t[n] = Ho(r) : e || (t[n] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && zn(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Fn(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            bi.dependencies && Do(e) && bi.dependencies.add(e);
            const t = mi(e);
            t && zn(t, (e => this.add(e)))
          }
        },
        xi = class extends _i {
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
            return e.length == t.length ? t.map(((t, r) => t.setValue(e[r]))).some(Boolean) : (super.setValue(e.map(wi)), !0)
          }
        };

      function wi(e) {
        return (ai(e) ? yi : vi).create(e)
      }

      function Ei(e) {
        const t = fi(e);
        return t ? t.constructor : Bn.arr(e) ? xi : ai(e) ? yi : vi
      }
      var Pi = (e, t) => {
          const r = !Bn.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, h.forwardRef)(((n, o) => {
            const i = (0, h.useRef)(null),
              a = r && (0, h.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (Bn.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [s, l] = function(e, t) {
                const r = new Set;
                return bi.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new _i(e), bi.dependencies = null, [e, r]
              }(n, t),
              c = li(),
              u = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && c()
              },
              d = new Si(u, l),
              f = (0, h.useRef)();
            si((() => (f.current = d, zn(l, (e => Uo(e, d))), () => {
              f.current && (zn(f.current.deps, (e => Go(e, f.current))), bn.cancel(f.current.update))
            }))), (0, h.useEffect)(u, []), ci((() => () => {
              const e = f.current;
              zn(e.deps, (t => Go(t, e)))
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
            "change" == e.type && bn.write(this.update)
          }
        },
        Ci = Symbol.for("AnimatedComponent"),
        Ti = e => Bn.str(e) ? e : e && Bn.str(e.displayName) ? e.displayName : Bn.fun(e) && e.name || null;

      function Oi(e, ...t) {
        return Bn.fun(e) ? e(...t) : e
      }
      var ji = (e, t) => !0 === e || !!(t && e && (Bn.fun(e) ? e(t) : Un(e).includes(t))),
        Ni = (e, t) => Bn.obj(e) ? t && e[t] : e,
        Li = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Ii = e => e,
        ki = (e, t = Ii) => {
          let r = Ri;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            Bn.und(r) || (n[o] = r)
          }
          return n
        },
        Ri = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Mi = {
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

      function Ai(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (Fn(e, ((e, n) => {
              Mi[n] || (t[n] = e, r++)
            })), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return Fn(e, ((e, n) => n in t || (r[n] = e))), r
        }
        return {
          ...e
        }
      }

      function Di(e) {
        return e = Ho(e), Bn.arr(e) ? e.map(Di) : ai(e) ? Dn.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Hi(e) {
        for (const t in e) return !0;
        return !1
      }

      function Bi(e) {
        return Bn.fun(e) || Bn.arr(e) && Bn.obj(e[0])
      }

      function Vi(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function zi(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }
      var Fi = {
          tension: 170,
          friction: 26
        },
        Ui = {
          ...Fi,
          mass: 1,
          damping: 1,
          easing: Ro.linear,
          clamp: !1
        },
        Gi = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Ui)
          }
        };

      function qi(e, t) {
        if (Bn.und(t.decay)) {
          const r = !Bn.und(t.tension) || !Bn.und(t.friction);
          !r && Bn.und(t.frequency) && Bn.und(t.damping) && Bn.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
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
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, c, u = ji(r.cancel ?? n?.cancel, t);
          if (u) f();
          else {
            Bn.und(r.pause) || (o.paused = ji(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || ji(e, t)), l = Oi(r.delay || 0, t), e ? (o.resumeQueue.add(h), i.pause()) : (i.resume(), h())
          }

          function d() {
            o.resumeQueue.add(h), o.timeouts.delete(c), c.cancel(), l = c.time - bn.now()
          }

          function h() {
            l > 0 && !Dn.skipAnimation ? (o.delayed = !0, c = bn.setTimeout(f, l), o.pauseQueue.add(d), o.timeouts.add(c)) : f()
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
      var $i = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? Qi(e.get()) : t.every((e => e.noop)) ? Yi(e.get()) : Zi(e.get(), t.every((e => e.finished))),
        Yi = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Zi = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        Qi = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Ji(e, t, r, n) {
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
          const c = ki(t, ((e, t) => "onRest" === t ? void 0 : e));
          let u, d;
          const h = new Promise(((e, t) => (u = e, d = t))),
            f = e => {
              const t = o <= (r.cancelId || 0) && Qi(n) || o !== r.asyncId && Zi(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new ta,
                a = new ra;
              return (async () => {
                if (Dn.skipAnimation) throw ea(r), a.result = Zi(n, !1), d(a), a;
                f(i);
                const s = Bn.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Fn(c, ((e, t) => {
                  Bn.und(s[t]) && (s[t] = e)
                }));
                const l = await n.start(s);
                return f(i), r.paused && await new Promise((e => {
                  r.resumeQueue.add(e)
                })), l
              })()
            };
          let m;
          if (Dn.skipAnimation) return ea(r), Zi(n, !1);
          try {
            let t;
            t = Bn.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), h]), m = Zi(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof ta) m = e.result;
            else {
              if (!(e instanceof ra)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? s : void 0, r.promise = i ? l : void 0)
          }
          return Bn.fun(a) && bn.batchedUpdates((() => {
            a(m, n, n.item)
          })), m
        })() : l
      }

      function ea(e, t) {
        Gn(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var ta = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        ra = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        na = e => e instanceof ia,
        oa = 1,
        ia = class extends zo {
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
            return Dn.to(this, e)
          }
          interpolate(...e) {
            return oi(`${ri}The "interpolate" function is deprecated in v9 (use "to" instead)`), Dn.to(this, e)
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
            this.idle || no.sort(this), Vo(this, {
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
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Bn.und(e) || !Bn.und(t)) {
              const r = Bn.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Bn.und(r.default) && (r.default = !0), this.start(r)
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
              r = !1;
            const n = this.animation;
            let {
              toValues: o
            } = n;
            const {
              config: i
            } = n, a = mi(n.to);
            !a && Do(n.to) && (o = Un(Ho(n.to))), n.values.forEach(((s, l) => {
              if (s.done) return;
              const c = s.constructor == yi ? 1 : a ? a[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = Bn.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const h = i.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (Bn.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(s.lastPosition - d) <= h, a = o * n
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || h / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !Bn.und(n),
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
            const s = fi(this),
              l = s.getValue();
            if (t) {
              const e = Ho(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return bn.batchedUpdates((() => {
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
              bn.batchedUpdates((() => {
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
            return Bn.und(e) ? (r = this.queue || [], this.queue = []) : r = [Bn.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map((e => this._update(e)))).then((e => $i(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), ea(this._state, e && this._lastCallId), bn.batchedUpdates((() => this._stop(t, e))), this
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
            r = Bn.obj(r) ? r[t] : r, (null == r || Bi(r)) && (r = void 0), n = Bn.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return sa(this) || (e.reverse && ([r, n] = [n, r]), n = Ho(n), Bn.und(n) ? fi(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, ki(e, ((e, t) => /^on/.test(t) ? Ni(e, r) : e))), ba(this, e, "onProps"), _a(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Wi(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  ca(this) || (da(this, !0), Kn(i.pauseQueue), _a(this, "onPause", Zi(this, fa(this, this.animation.to)), this))
                },
                resume: () => {
                  ca(this) && (da(this, !1), la(this) && this._resume(), Kn(i.resumeQueue), _a(this, "onResume", Zi(this, fa(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = pa(e);
                if (t) return this._update(t, !0)
              }
              return r
            }))
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(Qi(this));
            const n = !Bn.und(e.to),
              o = !Bn.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(Qi(this));
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
            !o || n || t.default && !Bn.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const h = !Vn(d, c);
            h && (s.from = d), d = Ho(d);
            const f = !Vn(u, l);
            f && this._focus(u);
            const p = Bi(t.to),
              {
                config: m
              } = s,
              {
                decay: g,
                velocity: v
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (qi(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), qi(e, t), Object.assign(e, t);
              for (const t in Ui) null == e[t] && (e[t] = Ui[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              Bn.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, Oi(t.config, i), t.config !== a.config ? Oi(a.config, i) : void 0);
            let y = fi(this);
            if (!y || Bn.und(u)) return r(Zi(this, !0));
            const b = Bn.und(t.reset) ? o && !t.default : !Bn.und(d) && ji(t.reset, i),
              _ = b ? d : this.get(),
              x = Di(u),
              w = Bn.num(x) || Bn.arr(x) || ai(x),
              E = !p && (!w || ji(a.immediate || t.immediate, i));
            if (f) {
              const e = Ei(u);
              if (e !== y.constructor) {
                if (!E) throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);
                y = this._set(x)
              }
            }
            const P = y.constructor;
            let S = Do(u),
              C = !1;
            if (!S) {
              const e = b || !sa(this) && h;
              (f || e) && (C = Vn(Di(_), x), S = !C), (Vn(s.immediate, E) || E) && Vn(m.decay, g) && Vn(m.velocity, v) || (S = !0)
            }
            if (C && la(this) && (s.changed && !b ? S = !0 : S || this._stop(l)), !p && ((S || Do(l)) && (s.values = y.getPayload(), s.toValues = Do(u) ? null : P == yi ? [1] : Un(x)), s.immediate != E && (s.immediate = E, E || b || this._set(l)), S)) {
              const {
                onRest: e
              } = s;
              zn(ya, (e => ba(this, t, e)));
              const n = Zi(this, fa(this, l));
              Kn(this._pendingCalls, n), this._pendingCalls.add(r), s.changed && bn.batchedUpdates((() => {
                s.changed = !b, e?.(n, this), b ? Oi(a.onRest, n) : s.onStart?.(n, this)
              }))
            }
            b && this._set(_), p ? r(Ji(t.to, t, this._state, this)) : S ? this._start() : la(this) && !f ? this._pendingCalls.add(r) : r(Yi(_))
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
            Do(t) && (Uo(t, this), na(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Do(e) && Go(e, this)
          }
          _set(e, t = !0) {
            const r = Ho(e);
            if (!Bn.und(r)) {
              const e = fi(this);
              if (!e || !Vn(r, e.getValue())) {
                const n = Ei(r);
                e && e.constructor == n ? e.setValue(r) : pi(this, n.create(r)), e && bn.batchedUpdates((() => {
                  this._onChange(r, t)
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
            Dn.skipAnimation ? this.finish() : no.start(this)
          }
          _stop(e, t) {
            if (la(this)) {
              ua(this, !1);
              const r = this.animation;
              zn(r.values, (e => {
                e.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Vo(this, {
                type: "idle",
                parent: this
              });
              const n = t ? Qi(this.get()) : Zi(this.get(), fa(this, e ?? r.to));
              Kn(this._pendingCalls, n), r.changed && (r.changed = !1, _a(this, "onRest", n, this))
            }
          }
        };

      function fa(e, t) {
        const r = Di(t);
        return Vn(Di(e.get()), r)
      }

      function pa(e, t = e.loop, r = e.to) {
        const n = Oi(t);
        if (n) {
          const o = !0 !== n && Ai(n),
            i = (o || e).reverse,
            a = !o || o.reset;
          return ma({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Bi(r) ? r : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function ma(e) {
        const {
          to: t,
          from: r
        } = e = Ai(e), n = new Set;
        return Bn.obj(t) && va(t, n), Bn.obj(r) && va(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function ga(e) {
        const t = ma(e);
        return Bn.und(t.default) && (t.default = ki(t)), t
      }

      function va(e, t) {
        Fn(e, ((e, r) => null != e && t.add(r)))
      }
      var ya = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function ba(e, t, r) {
        e.animation[r] = t[r] !== Li(t, r) ? Ni(t[r], e.key) : void 0
      }

      function _a(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var xa = ["onStart", "onChange", "onRest"],
        wa = 1,
        Ea = class {
          constructor(e, t) {
            this.id = wa++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              Bn.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(ma(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Un(e).map(ma) : this.queue = [], this._flush ? this._flush(this, t) : (Na(this, t), Pa(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              zn(Un(t), (t => r[t].stop(!!e)))
            } else ea(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (Bn.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              zn(Un(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (Bn.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              zn(Un(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            Fn(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, Gn(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !n && this._started,
              a = o || i && r.size ? this.get() : null;
            o && t.size && Gn(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, Gn(r, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            bn.onFrame(this._onFrame)
          }
        };

      function Pa(e, t) {
        return Promise.all(t.map((t => Sa(e, t)))).then((t => $i(e, t)))
      }
      async function Sa(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, c = Bn.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = Bn.arr(o) || Bn.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : zn(xa, (r => {
          const n = t[r];
          if (Bn.fun(n)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, Kn(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const h = (n || Object.keys(e.springs)).map((r => e.springs[r].start(t))),
          f = !0 === t.cancel || !0 === Li(t, "cancel");
        (u || f && d.asyncId) && h.push(Wi(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Hn,
            resume: Hn,
            start(t, r) {
              f ? (ea(d, e._lastAsyncId), r(Qi(e))) : (t.onRest = s, r(Ji(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = $i(e, await Promise.all(h));
        if (a && p.finished && (!r || !p.noop)) {
          const r = pa(t, a, o);
          if (r) return Na(e, [r]), Sa(e, r, !0)
        }
        return l && bn.batchedUpdates((() => l(p, e, e.item))), p
      }

      function Ca(e, t) {
        const r = {
          ...e.springs
        };
        return t && zn(Un(t), (e => {
          Bn.und(e.keys) && (e = ma(e)), Bn.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), ja(r, e, (e => Oa(e)))
        })), Ta(e, r), r
      }

      function Ta(e, t) {
        Fn(t, ((t, r) => {
          e.springs[r] || (e.springs[r] = t, Uo(t, e))
        }))
      }

      function Oa(e, t) {
        const r = new ha;
        return r.key = e, t && Uo(r, t), r
      }

      function ja(e, t, r) {
        t.keys && zn(t.keys, (n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        }))
      }

      function Na(e, t) {
        zn(t, (t => {
          ja(e.springs, t, (t => Oa(t, e)))
        }))
      }
      var La, Ia, ka = ({
          children: e,
          ...t
        }) => {
          const r = (0, h.useContext)(Ra),
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
          } = Ra;
          return h.createElement(i, {
            value: t
          }, e)
        },
        Ra = (La = ka, Ia = {}, Object.assign(La, h.createContext(Ia)), La.Provider._context = La, La.Consumer._context = La, La);
      ka.Provider = Ra.Provider, ka.Consumer = Ra.Consumer;
      var Ma = () => {
        const e = [],
          t = function(t) {
            ii(`${ri}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const n = [];
            return zn(e, ((e, o) => {
              if (Bn.und(t)) n.push(e.start());
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
          return zn(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return zn(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          zn(e, ((e, r) => {
            const n = Bn.fun(t) ? t(r, e) : t;
            n && e.set(n)
          }))
        }, t.start = function(t) {
          const r = [];
          return zn(e, ((e, n) => {
            if (Bn.und(t)) r.push(e.start());
            else {
              const o = this._getProps(t, e, n);
              o && r.push(e.start(o))
            }
          })), r
        }, t.stop = function() {
          return zn(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return zn(e, ((e, r) => e.update(this._getProps(t, e, r)))), this
        };
        const r = function(e, t, r) {
          return Bn.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function Aa(e, t) {
        const r = Bn.fun(e),
          [
            [n], o
          ] = function(e, t, r) {
            const n = Bn.fun(t) && t;
            n && !r && (r = []);
            const o = (0, h.useMemo)((() => n || 3 == arguments.length ? Ma() : void 0), []),
              i = (0, h.useRef)(0),
              a = li(),
              s = (0, h.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const r = Ca(e, t);
                  return i.current > 0 && !s.queue.length && !Object.keys(r).some((t => !e.springs[t])) ? Pa(e, t) : new Promise((n => {
                    Ta(e, r), s.queue.push((() => {
                      n(Pa(e, t))
                    })), a()
                  }))
                }
              })), []),
              l = (0, h.useRef)([...s.ctrls]),
              c = [],
              u = di(e) || 0;

            function d(e, r) {
              for (let o = e; o < r; o++) {
                const e = l.current[o] || (l.current[o] = new Ea(null, s.flush)),
                  r = n ? n(o, e) : t[o];
                r && (c[o] = ga(r))
              }
            }(0, h.useMemo)((() => {
              zn(l.current.slice(e, u), (e => {
                Vi(e, o), e.stop(!0)
              })), l.current.length = e, d(u, e)
            }), [e]), (0, h.useMemo)((() => {
              d(0, Math.min(u, e))
            }), r);
            const f = l.current.map(((e, t) => Ca(e, c[t]))),
              p = (0, h.useContext)(ka),
              m = di(p),
              g = p !== m && Hi(p);
            si((() => {
              i.current++, s.ctrls = l.current;
              const {
                queue: e
              } = s;
              e.length && (s.queue = [], zn(e, (e => e()))), zn(l.current, ((e, t) => {
                o?.add(e), g && e.start({
                  default: p
                });
                const r = c[t];
                r && (zi(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
              }))
            })), ci((() => () => {
              zn(s.ctrls, (e => e.stop(!0)))
            }));
            const v = f.map((e => ({
              ...e
            })));
            return o ? [v, o] : v
          }(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, o] : n
      }
      var Da = () => Ma(),
        Ha = () => (0, h.useState)(Da)[0];
      var Ba = 1,
        Va = class extends ia {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = To(...t);
            const r = this._get(),
              n = Ei(r);
            pi(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            Vn(t, this.get()) || (fi(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Fa(this._active) && Ua(this)
          }
          _get() {
            const e = Bn.arr(this.source) ? this.source.map(Ho) : Un(Ho(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Fa(this._active) && (this.idle = !1, zn(mi(this), (e => {
              e.done = !1
            })), Dn.skipAnimation ? (bn.batchedUpdates((() => this.advance())), Ua(this)) : no.start(this))
          }
          _attach() {
            let e = 1;
            zn(Un(this.source), (t => {
              Do(t) && Uo(t, this), na(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            zn(Un(this.source), (e => {
              Do(e) && Go(e, this)
            })), this._active.clear(), Ua(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Un(this.source).reduce(((e, t) => Math.max(e, (na(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function za(e) {
        return !1 !== e.idle
      }

      function Fa(e) {
        return !e.size || Array.from(e).every(za)
      }

      function Ua(e) {
        e.idle || (e.idle = !0, zn(mi(e), (e => {
          e.done = !0
        })), Vo(e, {
          type: "idle",
          parent: e
        }))
      }
      Dn.assign({
        createStringInterpolator: ti,
        to: (e, t) => new Va(e, t)
      }), no.advance;
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
      Ka = Object.keys(Ka).reduce(((e, t) => (Wa.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), Ka);
      var $a = /^(matrix|translate|scale|rotate|skew)/,
        Ya = /^(translate)/,
        Za = /^(rotate|skew)/,
        Qa = (e, t) => Bn.num(e) && 0 !== e ? e + t : e,
        Ja = (e, t) => Bn.arr(e) ? e.every((e => Ja(e, t))) : Bn.num(e) ? e === t : parseFloat(e) === t,
        es = class extends _i {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push((e => [`translate3d(${e.map((e=>Qa(e,"px"))).join(",")})`, Ja(e, 0)]))), Fn(n, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if ($a.test(t)) {
                if (delete n[t], Bn.und(e)) return;
                const r = Ya.test(t) ? "px" : Za.test(t) ? "deg" : "";
                o.push(Un(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${Qa(o,r)})`, Ja(o, 0)] : e => [`${t}(${e.map((e=>Qa(e,r))).join(",")})`, Ja(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (n.transform = new ts(o, i)), super(n)
          }
        },
        ts = class extends zo {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return zn(this.inputs, ((r, n) => {
              const o = Ho(r[0]),
                [i, a] = this.transforms[n](Bn.arr(o) ? o : r.map(Ho));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && zn(this.inputs, (e => zn(e, (e => Do(e) && Uo(e, this)))))
          }
          observerRemoved(e) {
            0 == e && zn(this.inputs, (e => zn(e, (e => Do(e) && Go(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Vo(this, e)
          }
        };
      Dn.assign({
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
      var rs = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new _i(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = Ti(e) || "Anonymous";
              return (e = Bn.str(e) ? i[e] || (i[e] = Pi(e, o)) : e[Ci] || (e[Ci] = Pi(e, o))).displayName = `Animated(${t})`, e
            };
          return Fn(e, ((t, r) => {
            Bn.arr(e) && (r = Ti(t)), i[r] = i(t)
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
              d = Object.keys(c).map((t => r || e.hasAttribute(t) ? t : Xa[t] || (Xa[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = qa(t, o[t]);
                Ga.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach(((t, r) => {
              e.setAttribute(t, u[r])
            })), void 0 !== n && (e.className = n), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new es(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        ns = rs.animated;
      const os = (e, t, r) => {
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
        is = e => {
          const t = (e, t, r) => {
            r(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, r) => {
            const n = r.getBoundingClientRect();
            return e ? (t(e.top, n.top, ((e, t) => e < t)), t(e.bottom, n.bottom, ((e, t) => e > t)), t(e.left, n.left, ((e, t) => e < t)), t(e.right, n.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), n) : n
          }), null)
        },
        as = ([e, t], r) => {
          const {
            a: n
          } = new DOMMatrix(r.style.transform), o = is(r), i = o.width / n, a = 100 * ls(e, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / i, s = o.height / n;
          return {
            x: a,
            y: 100 * ls(t, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / s
          }
        },
        ss = (e, t, r, n) => {
          let o = r[0],
            i = r[1];
          const {
            a
          } = new DOMMatrix(e.style.transform), s = n / 100, l = is(e), c = t.getBoundingClientRect(), u = l.width / a / 2, d = c.width / 2, h = u * s > d ? u * s - d : 0, f = l.height / a / 2, p = c.height / 2, m = f * s > p ? f * s - p : 0, g = -o > h, v = o > h, y = i > m, b = -i > m;
          return g && !v ? o = -h : v && !g && (o = h), y && !b ? i = m : b && !y && (i = -m), {
            xy: [o, i],
            horizontalOffset: h,
            verticalOffset: m
          }
        },
        ls = (e, t, r) => Math.min(Math.max(e, t), r),
        cs = {
          mass: .1,
          tension: 800,
          friction: 20,
          clamp: !1,
          precision: .001,
          velocity: 0
        },
        us = Fi,
        ds = {
          scrollFactor: 2e3,
          dragFactor: 1.3,
          closePc: 33
        },
        hs = ({
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
          }), vn({
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
            children: (0, u.jsx)(ns.div, {
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
      var fs = r(91299);

      function ps(e, t) {
        var r = t && t.cache ? t.cache : Ss,
          n = t && t.serializer ? t.serializer : bs;
        return (t && t.strategy ? t.strategy : ys)(e, {
          cache: r,
          serializer: n
        })
      }

      function ms(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, n), t.set(i, a)), a
      }

      function gs(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function vs(e, t, r, n, o) {
        return r.bind(t, e, n, o)
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
      var xs, ws, Es, Ps, Ss = {
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
        return e.type === ws.literal
      }

      function Os(e) {
        return e.type === ws.argument
      }

      function js(e) {
        return e.type === ws.number
      }

      function Ns(e) {
        return e.type === ws.date
      }

      function Ls(e) {
        return e.type === ws.time
      }

      function Is(e) {
        return e.type === ws.select
      }

      function ks(e) {
        return e.type === ws.plural
      }

      function Rs(e) {
        return e.type === ws.pound
      }

      function Ms(e) {
        return e.type === ws.tag
      }

      function As(e) {
        return !(!e || "object" != typeof e || e.type !== Es.number)
      }

      function Ds(e) {
        return !(!e || "object" != typeof e || e.type !== Es.dateTime)
      }(Ps = xs || (xs = {}))[Ps.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", Ps[Ps.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", Ps[Ps.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", Ps[Ps.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", Ps[Ps.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", Ps[Ps.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", Ps[Ps.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", Ps[Ps.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", Ps[Ps.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", Ps[Ps.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", Ps[Ps.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", Ps[Ps.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", Ps[Ps.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", Ps[Ps.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", Ps[Ps.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", Ps[Ps.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", Ps[Ps.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", Ps[Ps.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", Ps[Ps.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", Ps[Ps.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", Ps[Ps.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", Ps[Ps.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", Ps[Ps.INVALID_TAG = 23] = "INVALID_TAG", Ps[Ps.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", Ps[Ps.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", Ps[Ps.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(ws || (ws = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(Es || (Es = {}));
      var Hs = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Bs = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Vs(e) {
        var t = {};
        return e.replace(Bs, (function(e) {
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
      var zs = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function Fs(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], r = 0, n = e.split(zs).filter((function(e) {
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
      var Us = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Gs = /^(@+)?(\+|#+)?[rs]?$/g,
        qs = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Xs = /^(0+)$/;

      function Ks(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Gs, (function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
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
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !Xs.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function Ys(e) {
        return Ws(e) || {}
      }

      function Zs(e) {
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
              o.options[0].replace(qs, (function(e, r, n, o, i, a) {
                if (r) t.minimumIntegerDigits = n.length;
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
            o.stem.replace(Us, (function(e, r, n, o, i, a) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
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
        var r, n = e.language;
        return "root" !== n && (r = e.maximize().region), (Js[r || ""] || Js[n || ""] || Js["".concat(n, "-001")] || Js["001"])[0]
      }
      var tl = new RegExp("^".concat(Hs.source, "*")),
        rl = new RegExp("".concat(Hs.source, "*$"));

      function nl(e, t) {
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
      var hl, fl = ol ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        pl = il ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        ml = al ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        gl = sl ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
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
          return e.replace(rl, "")
        };

      function bl(e, t) {
        return new RegExp(e, t)
      }
      if (dl) {
        var _l = bl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        hl = function(e, t) {
          var r;
          return _l.lastIndex = t, null !== (r = _l.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else hl = function(e, t) {
        for (var r = [];;) {
          var n = gl(e, t);
          if (void 0 === n || Sl(n) || Cl(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return pl.apply(void 0, r)
      };
      var xl, wl, El = function() {
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
                  return this.error(xs.UNMATCHED_CLOSING_TAG, nl(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Pl(this.peek() || 0)) {
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
                  type: ws.pound,
                  location: nl(a, this.clonePosition())
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
              type: ws.literal,
              value: "<".concat(n, "/>"),
              location: nl(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Pl(this.char())) return this.error(xs.INVALID_TAG, nl(a, this.clonePosition()));
              var s = this.clonePosition();
              return n !== this.parseTagName() ? this.error(xs.UNMATCHED_CLOSING_TAG, nl(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: ws.tag,
                  value: n,
                  children: i,
                  location: nl(r, this.clonePosition())
                },
                err: null
              } : this.error(xs.INVALID_TAG, nl(a, this.clonePosition())))
            }
            return this.error(xs.UNCLOSED_TAG, nl(r, this.clonePosition()))
          }
          return this.error(xs.INVALID_TAG, nl(r, this.clonePosition()))
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
          var s = nl(r, this.clonePosition());
          return {
            val: {
              type: ws.literal,
              value: n,
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
          return pl.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), pl(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(xs.EXPECT_ARGUMENT_CLOSING_BRACE, nl(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(xs.EMPTY_ARGUMENT, nl(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(xs.MALFORMED_ARGUMENT, nl(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(xs.EXPECT_ARGUMENT_CLOSING_BRACE, nl(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: ws.argument,
                  value: n,
                  location: nl(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(xs.EXPECT_ARGUMENT_CLOSING_BRACE, nl(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(xs.MALFORMED_ARGUMENT, nl(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = hl(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: nl(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(xs.EXPECT_ARGUMENT_TYPE, nl(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (f = yl(v.val)).length) return this.error(xs.EXPECT_ARGUMENT_STYLE, nl(this.clonePosition(), this.clonePosition()));
                l = {
                  style: f,
                  styleLocation: nl(c, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(n)).err) return y;
              var u = nl(n, this.clonePosition());
              if (l && fl(null == l ? void 0 : l.style, "::", 0)) {
                var d = vl(l.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? v : {
                  val: {
                    type: ws.number,
                    value: r,
                    location: u,
                    style: v.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(xs.EXPECT_DATE_TIME_SKELETON, u);
                var h = d;
                this.locale && (h = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = el(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; a-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var f = {
                  type: Es.dateTime,
                  pattern: h,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Vs(h) : {}
                };
                return {
                  val: {
                    type: "date" === a ? ws.date : ws.time,
                    value: r,
                    location: u,
                    style: f
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? ws.number : "date" === a ? ws.date : ws.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(xs.EXPECT_SELECT_ARGUMENT_OPTIONS, nl(p, (0, fs.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                g = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(xs.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, nl(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(xs.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, xs.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), g = v.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(n)).err) return y;
              var _ = nl(n, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: ws.select,
                  value: r,
                  options: ml(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: ws.plural,
                  value: r,
                  options: ml(b.val),
                  offset: g,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(xs.INVALID_ARGUMENT_TYPE, nl(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(xs.EXPECT_ARGUMENT_CLOSING_BRACE, nl(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(xs.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, nl(r, this.clonePosition()));
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
            r = Fs(e)
          } catch (e) {
            return this.error(xs.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Es.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Zs(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, a = [], s = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(xs.EXPECT_PLURAL_ARGUMENT_SELECTOR, xs.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = nl(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? xs.DUPLICATE_SELECT_ARGUMENT_SELECTOR : xs.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var h = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? xs.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : xs.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, nl(this.clonePosition(), this.clonePosition()));
            var f = this.parseMessage(e + 1, t, r);
            if (f.err) return f;
            var p = this.tryParseArgumentClose(h);
            if (p.err) return p;
            a.push([l, {
              value: f.val,
              location: nl(h, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? xs.EXPECT_SELECT_ARGUMENT_SELECTOR : xs.EXPECT_PLURAL_ARGUMENT_SELECTOR, nl(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(xs.MISSING_OTHER_CLAUSE, nl(this.clonePosition(), this.clonePosition())) : {
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
          var s = nl(n, this.clonePosition());
          return o ? ul(i *= r) ? {
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
          for (; !this.isEOF() && Sl(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
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
          if (delete e.location, Is(e) || ks(e))
            for (var t in e.options) delete e.options[t].location, Tl(e.options[t].value);
          else js(e) && As(e.style) || (Ns(e) || Ls(e)) && Ds(e.style) ? delete e.style.location : Ms(e) && Tl(e.children)
        }))
      }

      function Ol(e, t) {
        void 0 === t && (t = {}), t = (0, fs.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new El(e, t).parse();
        if (r.err) {
          var n = SyntaxError(xs[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || Tl(r.val), r.val
      }(wl = xl || (xl = {})).MISSING_VALUE = "MISSING_VALUE", wl.INVALID_VALUE = "INVALID_VALUE", wl.MISSING_INTL_API = "MISSING_INTL_API";
      var jl, Nl = function(e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return o.code = r, o.originalMessage = n, o
          }
          return (0, fs.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        Ll = function(e) {
          function t(t, r, n, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), xl.INVALID_VALUE, o) || this
          }
          return (0, fs.__extends)(t, e), t
        }(Nl),
        Il = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), xl.INVALID_VALUE, n) || this
          }
          return (0, fs.__extends)(t, e), t
        }(Nl),
        kl = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), xl.MISSING_VALUE, r) || this
          }
          return (0, fs.__extends)(t, e), t
        }(Nl);

      function Rl(e) {
        return "function" == typeof e
      }

      function Ml(e, t, r, n, o, i, a) {
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
          else if (Rs(u)) "number" == typeof i && s.push({
            type: jl.literal,
            value: r.getNumberFormat(t).format(i)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new kl(d, a);
            var h = o[d];
            if (Os(u)) h && "string" != typeof h && "number" != typeof h || (h = "string" == typeof h || "number" == typeof h ? String(h) : ""), s.push({
              type: "string" == typeof h ? jl.literal : jl.object,
              value: h
            });
            else if (Ns(u)) {
              var f = "string" == typeof u.style ? n.date[u.style] : Ds(u.style) ? u.style.parsedOptions : void 0;
              s.push({
                type: jl.literal,
                value: r.getDateTimeFormat(t, f).format(h)
              })
            } else if (Ls(u)) f = "string" == typeof u.style ? n.time[u.style] : Ds(u.style) ? u.style.parsedOptions : n.time.medium, s.push({
              type: jl.literal,
              value: r.getDateTimeFormat(t, f).format(h)
            });
            else if (js(u))(f = "string" == typeof u.style ? n.number[u.style] : As(u.style) ? u.style.parsedOptions : void 0) && f.scale && (h *= f.scale || 1), s.push({
              type: jl.literal,
              value: r.getNumberFormat(t, f).format(h)
            });
            else {
              if (Ms(u)) {
                var p = u.children,
                  m = u.value,
                  g = o[m];
                if (!Rl(g)) throw new Il(m, "function", a);
                var v = g(Ml(p, t, r, n, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(v) || (v = [v]), s.push.apply(s, v.map((function(e) {
                  return {
                    type: "string" == typeof e ? jl.literal : jl.object,
                    value: e
                  }
                })))
              }
              if (Is(u)) {
                if (!(y = u.options[h] || u.options.other)) throw new Ll(u.value, h, Object.keys(u.options), a);
                s.push.apply(s, Ml(y.value, t, r, n, o))
              } else if (ks(u)) {
                var y;
                if (!(y = u.options["=".concat(h)])) {
                  if (!Intl.PluralRules) throw new Nl('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', xl.MISSING_INTL_API, a);
                  var b = r.getPluralRules(t, {
                    type: u.pluralType
                  }).select(h - (u.offset || 0));
                  y = u.options[b] || u.options.other
                }
                if (!y) throw new Ll(u.value, h, Object.keys(u.options), a);
                s.push.apply(s, Ml(y.value, t, r, n, o, h - (u.offset || 0)))
              }
            }
          }
        }
        return (_ = s).length < 2 ? _ : _.reduce((function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === jl.literal && t.type === jl.literal ? r.value += t.value : e.push(t), e
        }), []);
        var _
      }

      function Al(e) {
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
      }(jl || (jl = {}));
      var Dl, Hl = function() {
        function e(t, r, n, o) {
          void 0 === r && (r = e.defaultLocale);
          var i, a, s, l = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = l.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce((function(e, t) {
                return e.length && t.type === jl.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return Ml(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = l.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(l.locales)[0]
              }
            }, this.getAst = function() {
              return l.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var c = o || {},
              u = (c.formatters, (0, fs.__rest)(c, ["formatters"]));
            this.ast = e.__parse(t, (0, fs.__assign)((0, fs.__assign)({}, u), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (a = e.formats, (s = n) ? Object.keys(a).reduce((function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, fs.__assign)((0, fs.__assign)((0, fs.__assign)({}, e || {}), t || {}), Object.keys(e).reduce((function(r, n) {
                return r[n] = (0, fs.__assign)((0, fs.__assign)({}, e[n]), t[n] || {}), r
              }), {})) : e
            }(a[t], s[t]), e
          }), (0, fs.__assign)({}, a)) : a), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: ps((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Al(i.number),
              strategy: Cs.variadic
            }),
            getDateTimeFormat: ps((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Al(i.dateTime),
              strategy: Cs.variadic
            }),
            getPluralRules: ps((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Al(i.pluralRules),
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
      }(Dl || (Dl = {}));
      var Bl = function(e) {
          function t(r, n, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, fs.__extends)(t, e), t
        }(Error),
        Vl = function(e) {
          function t(t, r) {
            return e.call(this, Dl.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, fs.__extends)(t, e), t
        }(Bl),
        zl = function(e) {
          function t(t, r) {
            return e.call(this, Dl.INVALID_CONFIG, t, r) || this
          }
          return (0, fs.__extends)(t, e), t
        }(Bl),
        Fl = function(e) {
          function t(t, r) {
            return e.call(this, Dl.MISSING_DATA, t, r) || this
          }
          return (0, fs.__extends)(t, e), t
        }(Bl),
        Ul = function(e) {
          function t(t, r, n) {
            var o = e.call(this, Dl.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return o.locale = r, o
          }
          return (0, fs.__extends)(t, e), t
        }(Bl),
        Gl = function(e) {
          function t(t, r, n, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, o) || this;
            return i.descriptor = n, i.locale = r, i
          }
          return (0, fs.__extends)(t, e), t
        }(Ul),
        ql = function(e) {
          function t(t, r) {
            var n = e.call(this, Dl.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, fs.__extends)(t, e), t
        }(Bl);

      function Xl(e, t, r) {
        return void 0 === r && (r = {}), t.reduce((function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
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
              set: function(t, r) {
                e[t] = r
              }
            }
          }
        }
      }

      function $l(e, t, r, n) {
        var o, i = e && e[t];
        if (i && (o = i[r]), o) return o;
        n(new Vl("No ".concat(t, " format named: ").concat(r)))
      }

      function Yl(e, t) {
        var r = t && t.cache ? t.cache : nc,
          n = t && t.serializer ? t.serializer : tc;
        return (t && t.strategy ? t.strategy : ec)(e, {
          cache: r,
          serializer: n
        })
      }

      function Zl(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, n), t.set(i, a)), a
      }

      function Ql(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function Jl(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function ec(e, t) {
        return Jl(e, this, 1 === e.length ? Zl : Ql, t.cache.create(), t.serializer)
      }
      var tc = function() {
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
      var nc = {
          create: function() {
            return new rc
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
        ! function(e, t, r) {
          if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      Yl((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: oc.variadic
      }), Yl((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: oc.variadic
      }), Yl((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: oc.variadic
      }), Yl((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: oc.variadic
      }), Yl((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: oc.variadic
      });
      var ac = (0, fs.__assign)((0, fs.__assign)({}, Kl), {
        textComponent: h.Fragment
      });
      r(28136);
      var sc = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? h.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = h.createContext(null)),
        lc = (sc.Consumer, sc.Provider),
        cc = sc;

      function uc(e, t) {
        return Object.keys(e).reduce((function(r, n) {
          return r[n] = (0, fs.__assign)({
            timeZone: t
          }, e[n]), r
        }), {})
      }

      function dc(e, t) {
        return Object.keys((0, fs.__assign)((0, fs.__assign)({}, e), t)).reduce((function(r, n) {
          return r[n] = (0, fs.__assign)((0, fs.__assign)({}, e[n] || {}), t[n] || {}), r
        }), {})
      }

      function hc(e, t) {
        if (!t) return e;
        var r = Hl.formats;
        return (0, fs.__assign)((0, fs.__assign)((0, fs.__assign)({}, r), e), {
          date: dc(uc(r.date, t), uc(e.date || {}, t)),
          time: dc(uc(r.time, t), uc(e.time || {}, t))
        })
      }
      ps((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Cs.variadic
      }), ps((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Cs.variadic
      }), ps((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Cs.variadic
      }), ps((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Cs.variadic
      }), ps((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Cs.variadic
      });
      var fc = function(e, t, r, n, o) {
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
          if (Array.isArray(v) && 1 === v.length && v[0].type === ws.literal) return v[0].value;
          if (!n && v && "string" == typeof v && !f) return v.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, fs.__assign)((0, fs.__assign)({}, f), n || {}), a = hc(a, h), c = hc(c, h), !v) {
            if (!1 === u && "" === v) return v;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new ql(r, i)), m) try {
              return t.getMessageFormat(m, l, c, o).format(n)
            } catch (e) {
              return d(new Gl('Error formatting default message for: "'.concat(g, '", rendering default message verbatim'), i, r, e)), "string" == typeof m ? m : g
            }
            return g
          }
          try {
            return t.getMessageFormat(v, i, a, (0, fs.__assign)({
              formatters: t
            }, o || {})).format(n)
          } catch (e) {
            d(new Gl('Error formatting message: "'.concat(g, '", using ').concat(m ? "default message" : "id", " as fallback."), i, r, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, c, o).format(n)
          } catch (e) {
            d(new Gl('Error formatting the default message for: "'.concat(g, '", rendering message verbatim'), i, r, e))
          }
          return "string" == typeof v ? v : "string" == typeof m ? m : g
        },
        pc = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function mc(e, t, r) {
        var n = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === r && (r = {});
        var a = r.format,
          s = a && $l(o, "number", a, i) || {};
        return t(n, Xl(r, pc, s))
      }

      function gc(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return mc(e, t, n).format(r)
        } catch (t) {
          e.onError(new Ul("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function vc(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return mc(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new Ul("Error formatting number.", e.locale, t))
        }
        return []
      }
      var yc = ["numeric", "style"];

      function bc(e, t, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new Nl('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', xl.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === r && (r = {});
            var a = r.format,
              s = !!a && $l(o, "relative", a, i) || {};
            return t(n, Xl(r, yc, s))
          }(e, t, o).format(r, n)
        } catch (t) {
          e.onError(new Ul("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var _c = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function xc(e, t, r, n) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === n && (n = {});
        var l = n.format,
          c = (0, fs.__assign)((0, fs.__assign)({}, s && {
            timeZone: s
          }), l && $l(i, t, l, a)),
          u = Xl(n, _c, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, fs.__assign)((0, fs.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, u)
      }

      function wc(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return xc(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new Ul("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function Ec(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return xc(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new Ul("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function Pc(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = r[2],
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
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return xc(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Ul("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Cc(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return xc(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Ul("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Tc = ["type"];

      function Oc(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || i(new Nl('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', xl.MISSING_INTL_API));
        var a = Xl(n, Tc);
        try {
          return t(o, a).select(r)
        } catch (e) {
          i(new Ul("Error formatting plural.", o, e))
        }
        return "other"
      }
      var jc = ["type", "style"],
        Nc = Date.now();

      function Lc(e, t, r, n) {
        void 0 === n && (n = {});
        var o = Ic(e, t, r, n).reduce((function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Ic(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || i(new Nl('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', xl.MISSING_INTL_API));
        var a = Xl(n, jc);
        try {
          var s = {},
            l = r.map((function(e, t) {
              if ("object" == typeof e) {
                var r = function(e) {
                  return "".concat(Nc, "_").concat(e, "_").concat(Nc)
                }(t);
                return s[r] = e, r
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
        return r
      }
      var kc, Rc, Mc, Ac = ["style", "type", "fallback", "languageDisplay"];

      function Dc(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new Nl('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', xl.MISSING_INTL_API));
        var a = Xl(n, Ac);
        try {
          return t(o, a).of(r)
        } catch (e) {
          i(new Ul("Error formatting display name.", o, e))
        }
      }

      function Hc(e, t) {
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
              o = ps((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Wl(e.dateTime),
                strategy: Cs.variadic
              }),
              i = ps((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Wl(e.number),
                strategy: Cs.variadic
              }),
              a = ps((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, fs.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Wl(e.pluralRules),
                strategy: Cs.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: ps((function(e, t, r, n) {
                return new Hl(e, t, r, (0, fs.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: a
                  }
                }, n || {}))
              }), {
                cache: Wl(e.message),
                strategy: Cs.variadic
              }),
              getRelativeTimeFormat: ps((function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new(t.bind.apply(t, (0, fs.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Wl(e.relativeTime),
                strategy: Cs.variadic
              }),
              getPluralRules: a,
              getListFormat: ps((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, fs.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Wl(e.list),
                strategy: Cs.variadic
              }),
              getDisplayNames: ps((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, fs.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Wl(e.displayNames),
                strategy: Cs.variadic
              })
            }
          }(t),
          n = (0, fs.__assign)((0, fs.__assign)({}, Kl), e),
          o = n.locale,
          i = n.defaultLocale,
          a = n.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new Fl('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new Fl('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new zl('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(n), (0, fs.__assign)((0, fs.__assign)({}, n), {
            formatters: r,
            formatNumber: gc.bind(null, n, r.getNumberFormat),
            formatNumberToParts: vc.bind(null, n, r.getNumberFormat),
            formatRelativeTime: bc.bind(null, n, r.getRelativeTimeFormat),
            formatDate: wc.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: Sc.bind(null, n, r.getDateTimeFormat),
            formatTime: Ec.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: Pc.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: Cc.bind(null, n, r.getDateTimeFormat),
            formatPlural: Oc.bind(null, n, r.getPluralRules),
            formatMessage: fc.bind(null, n, r),
            $t: fc.bind(null, n, r),
            formatList: Lc.bind(null, n, r.getListFormat),
            formatListToParts: Ic.bind(null, n, r.getListFormat),
            formatDisplayName: Dc.bind(null, n, r.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(kc || (kc = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Rc || (Rc = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Mc || (Mc = {}));
      var Bc, Vc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
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

      function Fc(e) {
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
        return "root" !== n && (r = e.maximize().region), (zc[r || ""] || zc[n || ""] || zc["".concat(n, "-001")] || zc["001"])[0]
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
      var eu, tu, ru = Xc ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        nu = Kc ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        ou = Wc ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        iu = $c ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
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
          var r;
          return cu.lastIndex = t, null !== (r = cu.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else eu = function(e, t) {
        for (var r = [];;) {
          var n = iu(e, t);
          if (void 0 === n || du(n) || hu(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return nu.apply(void 0, r)
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
                  return this.error(kc.UNMATCHED_CLOSING_TAG, qc(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && uu(this.peek() || 0)) {
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
                  type: Rc.pound,
                  location: qc(a, this.clonePosition())
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
              type: Rc.literal,
              value: "<".concat(n, "/>"),
              location: qc(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !uu(this.char())) return this.error(kc.INVALID_TAG, qc(a, this.clonePosition()));
              var s = this.clonePosition();
              return n !== this.parseTagName() ? this.error(kc.UNMATCHED_CLOSING_TAG, qc(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Rc.tag,
                  value: n,
                  children: i,
                  location: qc(r, this.clonePosition())
                },
                err: null
              } : this.error(kc.INVALID_TAG, qc(a, this.clonePosition())))
            }
            return this.error(kc.UNCLOSED_TAG, qc(r, this.clonePosition()))
          }
          return this.error(kc.INVALID_TAG, qc(r, this.clonePosition()))
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
          var s = qc(r, this.clonePosition());
          return {
            val: {
              type: Rc.literal,
              value: n,
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
          return nu.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), nu(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(kc.EXPECT_ARGUMENT_CLOSING_BRACE, qc(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(kc.EMPTY_ARGUMENT, qc(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(kc.MALFORMED_ARGUMENT, qc(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(kc.EXPECT_ARGUMENT_CLOSING_BRACE, qc(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Rc.argument,
                  value: n,
                  location: qc(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(kc.EXPECT_ARGUMENT_CLOSING_BRACE, qc(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(kc.MALFORMED_ARGUMENT, qc(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = eu(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: qc(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(kc.EXPECT_ARGUMENT_TYPE, qc(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (f = su(v.val)).length) return this.error(kc.EXPECT_ARGUMENT_STYLE, qc(this.clonePosition(), this.clonePosition()));
                l = {
                  style: f,
                  styleLocation: qc(c, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(n)).err) return y;
              var u = qc(n, this.clonePosition());
              if (l && ru(null == l ? void 0 : l.style, "::", 0)) {
                var d = au(l.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? v : {
                  val: {
                    type: Rc.number,
                    value: r,
                    location: u,
                    style: v.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(kc.EXPECT_DATE_TIME_SKELETON, u);
                var h = d;
                this.locale && (h = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = Fc(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; a-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var f = {
                  type: Mc.dateTime,
                  pattern: h,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Vs(h) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Rc.date : Rc.time,
                    value: r,
                    location: u,
                    style: f
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Rc.number : "date" === a ? Rc.date : Rc.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(kc.EXPECT_SELECT_ARGUMENT_OPTIONS, qc(p, (0, fs.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                g = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(kc.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, qc(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(kc.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, kc.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), g = v.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(n)).err) return y;
              var _ = qc(n, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Rc.select,
                  value: r,
                  options: ou(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Rc.plural,
                  value: r,
                  options: ou(b.val),
                  offset: g,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(kc.INVALID_ARGUMENT_TYPE, qc(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(kc.EXPECT_ARGUMENT_CLOSING_BRACE, qc(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(kc.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, qc(r, this.clonePosition()));
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
            r = Fs(e)
          } catch (e) {
            return this.error(kc.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Mc.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Zs(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, a = [], s = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(kc.EXPECT_PLURAL_ARGUMENT_SELECTOR, kc.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = qc(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? kc.DUPLICATE_SELECT_ARGUMENT_SELECTOR : kc.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var h = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? kc.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : kc.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, qc(this.clonePosition(), this.clonePosition()));
            var f = this.parseMessage(e + 1, t, r);
            if (f.err) return f;
            var p = this.tryParseArgumentClose(h);
            if (p.err) return p;
            a.push([l, {
              value: f.val,
              location: qc(h, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? kc.EXPECT_SELECT_ARGUMENT_SELECTOR : kc.EXPECT_PLURAL_ARGUMENT_SELECTOR, qc(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(kc.MISSING_OTHER_CLAUSE, qc(this.clonePosition(), this.clonePosition())) : {
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
          var s = qc(n, this.clonePosition());
          return o ? Qc(i *= r) ? {
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
          if (ru(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && du(this.char());) this.bump()
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
      }(tu || (tu = {}));
      var pu = function(e, t, r, n) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var a = fu(n),
            s = fc.apply(void 0, (0, fs.__spreadArray)([e, t, r, a], o, !1));
          return Array.isArray(s) ? h.Children.toArray(s) : s
        },
        mu = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, fs.__rest)(e, ["defaultRichTextElements"]),
            o = fu(r),
            i = Hc((0, fs.__assign)((0, fs.__assign)((0, fs.__assign)({}, ac), n), {
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
          var r = t.prevConfig,
            n = t.cache,
            o = gu(e);
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
            intl: mu(o, n),
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
      var _u, xu;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(_u || (_u = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(xu || (xu = {}));
      var wu = function(e) {
        var t = bu(),
          r = e.value,
          n = e.children,
          o = (0, fs.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function Eu(e) {
        var t = function(t) {
          var r = bu(),
            n = t.value,
            o = t.children,
            i = (0, fs.__rest)(t, ["value", "children"]),
            a = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(a, i) : r.formatTimeToParts(a, i))
        };
        return t.displayName = xu[e], t
      }

      function Pu(e) {
        var t = function(t) {
          var r = bu(),
            n = t.value,
            o = t.children,
            i = (0, fs.__rest)(t, ["value", "children"]),
            a = r[e](n, i);
          if ("function" == typeof o) return o(a);
          var s = r.textComponent || h.Fragment;
          return h.createElement(s, null, a)
        };
        return t.displayName = _u[e], t
      }
      wu.displayName = "FormattedNumberParts", wu.displayName = "FormattedNumberParts", Pu("formatDate"), Pu("formatTime"), Pu("formatNumber"), Pu("formatList"), Pu("formatDisplayName"), Eu("formatDate"), Eu("formatTime");
      const Su = ({
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
          }), [r]), o ? (0, u.jsx)(yu, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
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
        ju = {
          "en-US": r.e(7039).then(r.bind(r, 7039)),
          "de-DE": r.e(4220).then(r.bind(r, 94220)),
          "es-ES": r.e(4186).then(r.bind(r, 14186)),
          "es-MX": r.e(1607).then(r.bind(r, 11607)),
          "fr-FR": r.e(3622).then(r.bind(r, 3622)),
          "it-IT": r.e(6940).then(r.bind(r, 36940)),
          "ja-JP": r.e(5247).then(r.bind(r, 85247)),
          "ko-KR": r.e(2941).then(r.bind(r, 22941)),
          "pl-PL": r.e(9642).then(r.bind(r, 19642)),
          "pt-BR": r.e(9474).then(r.bind(r, 19474)),
          "ru-RU": r.e(888).then(r.bind(r, 10888)),
          "zh-CN": r.e(377).then(r.bind(r, 80377)),
          "zh-TW": r.e(969).then(r.bind(r, 70969))
        };
      var Nu = r(25648);
      const Lu = (e, t) => {
        const r = "more" === t ? Nu.xW.lightHc : Nu.xW.light,
          n = "more" === t ? Nu.xW.darkHc : Nu.xW.dark;
        return "dark" === e ? n : r
      };

      function Iu(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var ku = r(22517),
        Ru = r(21423),
        Mu = r(91173),
        Au = r(79158),
        Du = r(59219),
        Hu = r(15485),
        Bu = r(27977),
        Vu = r(51347),
        zu = r(50438),
        Fu = ["PageUp", "PageDown"],
        Uu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Gu = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        qu = "Slider",
        [Xu, Ku, Wu] = (0, zu.N)(qu),
        [$u, Yu] = (0, Mu.A)(qu, [Wu]),
        [Zu, Qu] = $u(qu),
        Ju = h.forwardRef(((e, t) => {
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
          } = e, y = h.useRef(new Set), b = h.useRef(0), _ = "horizontal" === a ? rd : nd, [x = [], w] = (0, Au.useControllableState)({
            prop: d,
            defaultProp: c,
            onChange: e => {
              const t = [...y.current];
              t[b.current]?.focus(), f(e)
            }
          }), E = h.useRef(x);

          function P(e, t, {
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
              c = Iu(s, [n, o]);
            w(((e = []) => {
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
          return (0, u.jsx)(Zu, {
            scope: e.__scopeSlider,
            name: r,
            disabled: s,
            min: n,
            max: o,
            valueIndexToChangeRef: b,
            thumbs: y.current,
            values: x,
            orientation: a,
            form: g,
            children: (0, u.jsx)(Xu.Provider, {
              scope: e.__scopeSlider,
              children: (0, u.jsx)(Xu.Slot, {
                scope: e.__scopeSlider,
                children: (0, u.jsx)(_, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...v,
                  ref: t,
                  onPointerDown: (0, ku.m)(v.onPointerDown, (() => {
                    s || (E.current = x)
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
                    }(x, e);
                    P(e, t)
                  },
                  onSlideMove: s ? void 0 : function(e) {
                    P(e, b.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const e = E.current[b.current];
                    x[b.current] !== e && p(x)
                  },
                  onHomeKeyDown: () => !s && P(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !s && P(o, x.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!s) {
                      const r = Fu.includes(e.key) || e.shiftKey && Uu.includes(e.key) ? 10 : 1,
                        n = b.current;
                      P(x[n] + i * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      Ju.displayName = qu;
      var [ed, td] = $u(qu, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), rd = h.forwardRef(((e, t) => {
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
        } = e, [f, p] = h.useState(null), m = (0, Ru.s)(t, (e => p(e))), g = h.useRef(void 0), v = (0, Du.jH)(o), y = "ltr" === v, b = y && !i || !y && i;

        function _(e) {
          const t = g.current || f.getBoundingClientRect(),
            o = pd([0, t.width], b ? [r, n] : [n, r]);
          return g.current = t, o(e - t.left)
        }
        return (0, u.jsx)(ed, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, u.jsx)(od, {
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
              const t = Gu[b ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), nd = h.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: i,
          onSlideMove: a,
          onSlideEnd: s,
          onStepKeyDown: l,
          ...c
        } = e, d = h.useRef(null), f = (0, Ru.s)(t, d), p = h.useRef(void 0), m = !o;

        function g(e) {
          const t = p.current || d.current.getBoundingClientRect(),
            o = pd([0, t.height], m ? [n, r] : [r, n]);
          return p.current = t, o(e - t.top)
        }
        return (0, u.jsx)(ed, {
          scope: e.__scopeSlider,
          startEdge: m ? "bottom" : "top",
          endEdge: m ? "top" : "bottom",
          size: "height",
          direction: m ? 1 : -1,
          children: (0, u.jsx)(od, {
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
              const t = Gu[m ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), od = h.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: a,
          onEndKeyDown: s,
          onStepKeyDown: l,
          ...c
        } = e, d = Qu(qu, r);
        return (0, u.jsx)(Vu.sG.span, {
          ...c,
          ref: t,
          onKeyDown: (0, ku.m)(e.onKeyDown, (e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : Fu.concat(Uu).includes(e.key) && (l(e), e.preventDefault())
          })),
          onPointerDown: (0, ku.m)(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : n(e)
          })),
          onPointerMove: (0, ku.m)(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: (0, ku.m)(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          }))
        })
      })), id = "SliderTrack", ad = h.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = Qu(id, r);
        return (0, u.jsx)(Vu.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      }));
      ad.displayName = id;
      var sd = "SliderRange",
        ld = h.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Qu(sd, r), i = td(sd, r), a = h.useRef(null), s = (0, Ru.s)(t, a), l = o.values.length, c = o.values.map((e => fd(e, o.min, o.max))), d = l > 1 ? Math.min(...c) : 0, f = 100 - Math.max(...c);
          return (0, u.jsx)(Vu.sG.span, {
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
      ld.displayName = sd;
      var cd = "SliderThumb",
        ud = h.forwardRef(((e, t) => {
          const r = Ku(e.__scopeSlider),
            [n, o] = h.useState(null),
            i = (0, Ru.s)(t, (e => o(e))),
            a = h.useMemo((() => n ? r().findIndex((e => e.ref.current === n)) : -1), [r, n]);
          return (0, u.jsx)(dd, {
            ...e,
            ref: i,
            index: a
          })
        })),
        dd = h.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...i
          } = e, a = Qu(cd, r), s = td(cd, r), [l, c] = h.useState(null), d = (0, Ru.s)(t, (e => c(e))), f = !l || a.form || !!l.closest("form"), p = (0, Bu.X)(l), m = a.values[n], g = void 0 === m ? 0 : fd(m, a.min, a.max), v = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, a.values.length), y = p?.[s.size], b = y ? function(e, t, r) {
            const n = e / 2;
            return (n - pd([0, 50], [0, n])(t) * r) * r
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
            children: [(0, u.jsx)(Xu.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, u.jsx)(Vu.sG.span, {
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
                onFocus: (0, ku.m)(e.onFocus, (() => {
                  a.valueIndexToChangeRef.current = n
                }))
              })
            }), f && (0, u.jsx)(hd, {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: m
            }, n)]
          })
        }));
      ud.displayName = cd;
      var hd = h.forwardRef((({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = h.useRef(null),
          i = (0, Ru.s)(o, n),
          a = (0, Hu.Z)(t);
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
        }), [a, t]), (0, u.jsx)(Vu.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: i,
          defaultValue: t
        })
      }));

      function fd(e, t, r) {
        return Iu(100 / (r - t) * (e - t), [0, 100])
      }

      function pd(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      hd.displayName = "RadioBubbleInput";
      var md = Ju,
        gd = ad,
        vd = ld,
        yd = ud;
      const bd = {
          id: "Lightbox_Close_Button_Label"
        },
        _d = {
          id: "Lightbox_Close_Button_Tooltip"
        },
        xd = {
          id: "Lightbox_Zoom_In_Button_Label"
        },
        wd = {
          id: "Lightbox_Zoom_In_Button_Tooltip"
        },
        Ed = {
          id: "Lightbox_Zoom_Out_Button_Label"
        },
        Pd = {
          id: "Lightbox_Zoom_Out_Button__Tooltip"
        },
        Sd = {
          id: "Lightbox_Reset_Zoom_Button_Label"
        },
        Cd = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip"
        },
        Td = {
          id: "Lightbox_Zoom_Slider_Label"
        },
        Od = {
          id: "Lightbox_Zoom_Slider_Tooltip"
        },
        jd = {
          id: "Lightbox_Download_Button_Label"
        },
        Nd = {
          id: "Lightbox_Download_Button_Tooltip"
        };

      function Ld() {
        return Ld = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Ld.apply(null, arguments)
      }
      var Id = ["shift", "alt", "meta", "mod", "ctrl"],
        kd = {
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

      function Rd(e) {
        return (e && kd[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Md(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Ad(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map((function(e) {
          return Rd(e)
        }));
        return Ld({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter((function(e) {
            return !Id.includes(e)
          })),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && Bd([Rd(e.key), Rd(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && Vd([Rd(e.key), Rd(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        Dd.clear()
      }));
      var Dd = new Set;

      function Hd(e) {
        return Array.isArray(e)
      }

      function Bd(e) {
        var t = Array.isArray(e) ? e : [e];
        Dd.has("meta") && Dd.forEach((function(e) {
          return ! function(e) {
            return Id.includes(e)
          }(e) && Dd.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return Dd.add(e.toLowerCase())
        }))
      }

      function Vd(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Dd.clear() : t.forEach((function(e) {
          return Dd.delete(e.toLowerCase())
        }))
      }

      function zd(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          i = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Hd(t) ? Boolean(n && t && t.some((function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        }))) : Boolean(n && t && t)
      }
      var Fd = (0, h.createContext)(void 0);

      function Ud(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, u.jsx)(Fd.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Gd(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(r, n) {
          return r && Gd(e[n], t[n])
        }), !0) : e === t
      }
      var qd = (0, h.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Xd = function(e) {
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
                  return !Gd(t, e)
                }))
              }))
            }), []);
          return (0, u.jsx)(qd.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: d,
              disableScope: f,
              toggleScope: p
            },
            children: (0, u.jsx)(Ud, {
              addHotkey: m,
              removeHotkey: g,
              children: n
            })
          })
        },
        Kd = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Wd = "undefined" != typeof window ? h.useLayoutEffect : h.useEffect;

      function $d(e, t, r, n) {
        var o = (0, h.useState)(null),
          i = o[0],
          a = o[1],
          s = (0, h.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          c = Hd(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = r instanceof Array ? r : n instanceof Array ? n : void 0,
          d = (0, h.useCallback)(t, null != u ? u : []),
          f = (0, h.useRef)(d);
        f.current = u ? d : t;
        var p = function(e) {
            var t = (0, h.useRef)(void 0);
            return Gd(t.current, e) || (t.current = e), t.current
          }(l),
          m = (0, h.useContext)(qd).enabledScopes,
          g = (0, h.useContext)(Fd);
        return Wd((function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = m, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !zd(e, ["input", "textarea", "select"]) || zd(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== i) {
                    var n = i.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== i && !i.contains(n.activeElement)) return void Kd(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != p && p.enableOnContentEditable) && Md(c, null == p ? void 0 : p.splitKey).forEach((function(r) {
                    var n, o = Ad(r, null == p ? void 0 : p.combinationKey);
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
                          v = Rd(h),
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
                        return !(!u || 1 !== u.length || !u.includes(y) && !u.includes(v)) || (u ? (void 0 === o && (o = ","), (Hd(n = u) ? n : n.split(o)).every((function(e) {
                          return Dd.has(e.trim().toLowerCase())
                        }))) : !u)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == p ? void 0 : p.enabled)) return void Kd(e);
                      f.current(e, o), t || (s.current = !0)
                    }
                  }))
                }
              },
              n = function(e) {
                void 0 !== e.key && (Bd(Rd(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (Vd(Rd(e.code)), s.current = !1, null != p && p.keyup && r(e, !0))
              },
              a = i || (null == l ? void 0 : l.document) || document;
            return a.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), g && Md(c, null == p ? void 0 : p.splitKey).forEach((function(e) {
                return g.addHotkey(Ad(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              })),
              function() {
                a.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), g && Md(c, null == p ? void 0 : p.splitKey).forEach((function(e) {
                  return g.removeHotkey(Ad(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                }))
              }
          }
        }), [i, c, p, m]), a
      }

      function Yd(e) {
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

      function Zd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Qd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zd(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Yd(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zd(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Jd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var eh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        th = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Qd(Qd({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) eh(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jd(e.variantClassNames, (e => Jd(e, (e => e.split(" ")[0]))))
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
      const rh = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        nh = (0, h.forwardRef)((({
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
            v = (0, F.UP)(g, m),
            y = (0, tr.zQ)(),
            b = "string" == typeof s ? s : s?.[y] ?? s.default ?? "MD",
            {
              events: _,
              others: x
            } = (0, d.filterEventProps)(f, {
              onPress: !1
            }),
            {
              buttonProps: w,
              isPressed: E
            } = er({
              ...x,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => x.onPress?.(e) ?? l?.(e)
            }, g),
            P = (0, d.mergeProps)({
              ..._,
              role: "button",
              "data-pressed": E,
              "data-testid": e,
              className: th({
                appearance: i,
                size: b,
                fullWidth: a
              })
            }, {
              ...w,
              className: r
            }),
            S = z[n],
            C = t ? p.DX : "button",
            T = rh[b];
          return (0, u.jsxs)(C, {
            ref: v,
            ...P,
            children: [S && (0, u.jsx)(S, {
              label: o || "",
              size: T
            }), (0, u.jsx)(p.xV, {
              children: c
            })]
          })
        }));
      var oh = r(21044),
        ih = r(21222),
        ah = r(63694);

      function sh(e) {
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

      function lh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function ch(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? lh(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = sh(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lh(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function uh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var dh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        hh = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ch(ch({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) dh(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return uh(e.variantClassNames, (e => uh(e, (e => e.split(" ")[0]))))
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
      const fh = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const a = e ? ih.Slot : "p",
          s = (0, oh.mergeProps)({
            className: hh({
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
      var ph = "foundry_local_bc732x1";
      const mh = (0, h.forwardRef)((({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => ($d(e, (e => r?.(e)), [r]), (0, u.jsx)(fh, {
        size: "XS",
        className: (0, I.$)("foundry_local_bc732x0", {
          [ph]: t
        }),
        asChild: !0,
        children: (0, u.jsx)("kbd", {
          ref: n,
          children: e
        })
      }))));
      var gh = r(74687),
        vh = r(74406),
        yh = r(54917),
        bh = r(34902),
        _h = r(79315),
        [xh, wh] = (0, Mu.A)("Tooltip", [yh.Bk]),
        Eh = (0, yh.Bk)(),
        Ph = "TooltipProvider",
        Sh = 700,
        Ch = "tooltip.open",
        [Th, Oh] = xh(Ph),
        jh = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Sh,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, a = h.useRef(!0), s = h.useRef(!1), l = h.useRef(0);
          return h.useEffect((() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }), []), (0, u.jsx)(Th, {
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
      jh.displayName = Ph;
      var Nh = "Tooltip",
        [Lh, Ih] = xh(Nh),
        kh = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: a,
            delayDuration: s
          } = e, l = Oh(Nh, e.__scopeTooltip), c = Eh(t), [d, f] = h.useState(null), p = (0, vh.useId)(), m = h.useRef(0), g = a ?? l.disableHoverableContent, v = s ?? l.delayDuration, y = h.useRef(!1), [b, _] = (0, Au.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ch))) : l.onClose(), i?.(e)
            },
            caller: Nh
          }), x = h.useMemo((() => b ? y.current ? "delayed-open" : "instant-open" : "closed"), [b]), w = h.useCallback((() => {
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
          }), []), (0, u.jsx)(yh.bL, {
            ...c,
            children: (0, u.jsx)(Lh, {
              scope: t,
              contentId: p,
              open: b,
              stateAttribute: x,
              trigger: d,
              onTriggerChange: f,
              onTriggerEnter: h.useCallback((() => {
                l.isOpenDelayedRef.current ? P() : w()
              }), [l.isOpenDelayedRef, P, w]),
              onTriggerLeave: h.useCallback((() => {
                g ? E() : (window.clearTimeout(m.current), m.current = 0)
              }), [E, g]),
              onOpen: w,
              onClose: E,
              disableHoverableContent: g,
              children: r
            })
          })
        };
      kh.displayName = Nh;
      var Rh = "TooltipTrigger",
        Mh = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Ih(Rh, r), i = Oh(Rh, r), a = Eh(r), s = h.useRef(null), l = (0, Ru.s)(t, s, o.onTriggerChange), c = h.useRef(!1), d = h.useRef(!1), f = h.useCallback((() => c.current = !1), []);
          return h.useEffect((() => () => document.removeEventListener("pointerup", f)), [f]), (0, u.jsx)(yh.Mz, {
            asChild: !0,
            ...a,
            children: (0, u.jsx)(Vu.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, ku.m)(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (d.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), d.current = !0))
              })),
              onPointerLeave: (0, ku.m)(e.onPointerLeave, (() => {
                o.onTriggerLeave(), d.current = !1
              })),
              onPointerDown: (0, ku.m)(e.onPointerDown, (() => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", f, {
                  once: !0
                })
              })),
              onFocus: (0, ku.m)(e.onFocus, (() => {
                c.current || o.onOpen()
              })),
              onBlur: (0, ku.m)(e.onBlur, o.onClose),
              onClick: (0, ku.m)(e.onClick, o.onClose)
            })
          })
        }));
      Mh.displayName = Rh;
      var Ah = "TooltipPortal",
        [Dh, Hh] = xh(Ah, {
          forceMount: void 0
        }),
        Bh = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = Ih(Ah, t);
          return (0, u.jsx)(Dh, {
            scope: t,
            forceMount: r,
            children: (0, u.jsx)(_h.C, {
              present: r || i.open,
              children: (0, u.jsx)(bh.Portal, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Bh.displayName = Ah;
      var Vh = "TooltipContent",
        zh = h.forwardRef(((e, t) => {
          const r = Hh(Vh, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...i
            } = e,
            a = Ih(Vh, e.__scopeTooltip);
          return (0, u.jsx)(_h.C, {
            present: n || a.open,
            children: a.disableHoverableContent ? (0, u.jsx)(Xh, {
              side: o,
              ...i,
              ref: t
            }) : (0, u.jsx)(Fh, {
              side: o,
              ...i,
              ref: t
            })
          })
        })),
        Fh = h.forwardRef(((e, t) => {
          const r = Ih(Vh, e.__scopeTooltip),
            n = Oh(Vh, e.__scopeTooltip),
            o = h.useRef(null),
            i = (0, Ru.s)(t, o),
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
          }), [l, d, a, c, p]), (0, u.jsx)(Xh, {
            ...e,
            ref: i
          })
        })),
        [Uh, Gh] = xh(Nh, {
          isInside: !1
        }),
        qh = (0, ih.createSlottable)("TooltipContent"),
        Xh = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            ...s
          } = e, l = Ih(Vh, r), c = Eh(r), {
            onClose: d
          } = l;
          return h.useEffect((() => (document.addEventListener(Ch, d), () => document.removeEventListener(Ch, d))), [d]), h.useEffect((() => {
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
          }), [l.trigger, d]), (0, u.jsx)(gh.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: d,
            children: (0, u.jsxs)(yh.UC, {
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
              children: [(0, u.jsx)(qh, {
                children: n
              }), (0, u.jsx)(Uh, {
                scope: r,
                isInside: !0,
                children: (0, u.jsx)(ah.Root, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        }));
      zh.displayName = Vh;
      var Kh = "TooltipArrow",
        Wh = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Eh(r);
          return Gh(Kh, r).isInside ? null : (0, u.jsx)(yh.i3, {
            ...o,
            ...n,
            ref: t
          })
        }));
      Wh.displayName = Kh;
      var $h = jh,
        Yh = kh,
        Zh = Mh,
        Qh = Bh,
        Jh = zh,
        ef = Wh;
      const tf = ({
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
        portalContainer: x,
        testId: w
      }) => {
        const [E = !1, P] = (0, F.ic)({
          defaultProp: m,
          prop: g,
          onChange: v
        }), S = (0, F.ZC)(E), C = Aa({
          opacity: E ? 1 : 0,
          immediate: E && !S
        }), T = "left" === r || "right" === r ? "center" : o, O = b ? {
          container: x
        } : {}, j = b ? Qh : h.Fragment, N = _ ? {
          className: "foundry_hcgxh_h3lgaa2"
        } : {}, L = _ ? ef : h.Fragment;
        return (0, u.jsx)($h, {
          delayDuration: y,
          children: (0, u.jsxs)(Yh, {
            open: E,
            onOpenChange: P,
            children: [(0, u.jsx)(Zh, {
              asChild: !0,
              className: "foundry_hcgxh_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, u.jsx)(j, {
              ...O,
              children: (0, u.jsx)(Jh, {
                side: r,
                align: T,
                sticky: c,
                forceMount: !0,
                "aria-label": p,
                "data-testid": w,
                sideOffset: n,
                alignOffset: i,
                onEscapeKeyDown: d,
                avoidCollisions: a,
                collisionPadding: l,
                collisionBoundary: s,
                onPointerDownOutside: f,
                children: (0, u.jsxs)(ns.div, {
                  className: "foundry_hcgxh_h3lgaa0",
                  style: C,
                  children: [(0, u.jsx)(B, {
                    size: "SM",
                    className: "foundry_hcgxh_h3lgaa1",
                    asChild: !0,
                    children: (0, u.jsx)("span", {
                      children: e
                    })
                  }), (0, u.jsx)(L, {
                    ...N
                  })]
                })
              })
            })]
          })
        })
      };
      var rf = "foundry_hcgxh_bwy1ds1",
        nf = "foundry_hcgxh_bwy1dsg",
        of = "foundry_hcgxh_bwy1dsf";
      const af = e => {
          e.preventDefault?.()
        },
        sf = (0, h.forwardRef)((({
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
          const v = bu(),
            y = (0, F.Ub)("screen and (max-width: 1024px)"),
            b = r !== p,
            _ = y ? "SM" : "LG",
            x = Aa({
              opacity: b ? 1 : 0,
              immediate: (0, F.jt)()
            });
          $d(["+", "=", "add", "plus"], (() => n?.()), {
            preventDefault: !0,
            enabled: m
          }), $d(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0,
            enabled: m
          }), $d("r", (() => d?.()), {
            preventDefault: !0,
            enabled: m
          });
          const w = (0, F.rl)() && y;
          return (0, u.jsx)(Xd, {
            children: (0, u.jsxs)("div", {
              className: "foundry_hcgxh_bwy1ds0",
              ref: g,
              children: [(0, u.jsx)(tf, {
                side: "right",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: af,
                content: (0, u.jsxs)("div", {
                  className: of,
                  children: [v.formatMessage(bd), (0, u.jsx)(B, {
                    size: "XS",
                    className: nf,
                    children: v.formatMessage(_d, {
                      shortcut: (0, u.jsx)(mh, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, u.jsx)(nh, {
                  size: _,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: v.formatMessage(bd),
                  className: (0, I.$)(rf, "foundry_hcgxh_bwy1ds2"),
                  onPress: e
                })
              }), (0, u.jsxs)("div", {
                className: "foundry_hcgxh_bwy1ds3",
                children: [!w && m && (0, u.jsxs)(u.Fragment, {
                  children: [(0, u.jsxs)("div", {
                    className: "foundry_hcgxh_bwy1ds4",
                    children: [(0, u.jsx)(tf, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: af,
                      content: (0, u.jsxs)("div", {
                        className: of,
                        children: [v.formatMessage(xd), (0, u.jsx)(B, {
                          size: "XS",
                          className: nf,
                          children: v.formatMessage(wd, {
                            shortcut: (0, u.jsx)(mh, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(nh, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: v.formatMessage(xd),
                        className: (0, I.$)(rf, "foundry_hcgxh_bwy1ds5"),
                        onPress: () => n(),
                        isDisabled: !l
                      })
                    }), (0, u.jsxs)(md, {
                      className: "foundry_hcgxh_bwy1dsa",
                      value: [r],
                      max: s,
                      min: a,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => i?.(e[0]),
                      children: [(0, u.jsx)(gd, {
                        className: "foundry_hcgxh_bwy1dsb",
                        children: (0, u.jsx)(vd, {
                          className: "foundry_hcgxh_bwy1dsc"
                        })
                      }), (0, u.jsx)(tf, {
                        side: "left",
                        portal: !1,
                        delayDuration: 0,
                        onPointerDownOutside: af,
                        content: v.formatMessage(Od, {
                          zoom: r.toFixed(0)
                        }),
                        children: (0, u.jsx)(yd, {
                          className: "foundry_hcgxh_bwy1dsd",
                          "aria-label": v.formatMessage(Td),
                          children: (0, u.jsx)("span", {
                            className: "foundry_hcgxh_bwy1dse"
                          })
                        })
                      })]
                    }), (0, u.jsx)(tf, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: af,
                      content: (0, u.jsxs)("div", {
                        className: of,
                        children: [v.formatMessage(Ed), (0, u.jsx)(B, {
                          size: "XS",
                          className: nf,
                          children: v.formatMessage(Pd, {
                            shortcut: (0, u.jsx)(mh, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(nh, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: v.formatMessage(Ed),
                        className: (0, I.$)(rf, "foundry_hcgxh_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !c
                      })
                    })]
                  }), (0, u.jsx)(ns.div, {
                    style: x,
                    children: (0, u.jsx)(tf, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: af,
                      content: (0, u.jsxs)("div", {
                        className: of,
                        children: [v.formatMessage(Sd), (0, u.jsx)(B, {
                          size: "XS",
                          className: nf,
                          children: v.formatMessage(Cd, {
                            shortcut: (0, u.jsx)(mh, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(nh, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Undo",
                        label: v.formatMessage(Sd),
                        className: (0, I.$)(rf, "foundry_hcgxh_bwy1ds7"),
                        onPress: d,
                        isDisabled: !b,
                        "aria-hidden": !b
                      })
                    })
                  })]
                }), f && w && (0, u.jsx)(tf, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: af,
                  content: v.formatMessage(Nd),
                  children: (0, u.jsx)(nh, {
                    size: _,
                    appearance: "tertiary",
                    icon: "Download",
                    label: v.formatMessage(jd),
                    className: rf,
                    onPress: e
                  })
                })]
              }), (0, u.jsxs)("div", {
                className: "foundry_hcgxh_bwy1ds8",
                children: [h && (0, u.jsxs)(u.Fragment, {
                  children: [(0, u.jsx)("div", {
                    className: "foundry_hcgxh_bwy1dsh"
                  }), (0, u.jsx)(B, {
                    size: "SM",
                    "aria-hidden": !0,
                    asChild: "string" != typeof h,
                    children: h
                  })]
                }), f && !w && (0, u.jsx)("div", {
                  className: "foundry_hcgxh_bwy1ds9",
                  children: (0, u.jsx)(tf, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: af,
                    content: v.formatMessage(Nd),
                    children: (0, u.jsx)(nh, {
                      size: _,
                      appearance: "tertiary",
                      icon: "Download",
                      label: v.formatMessage(jd),
                      className: rf,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        }));
      var lf = "foundry_hcgxh_1a74xwb4",
        cf = r(24780);
      const uf = ns(cf.Overlay),
        df = ns(cf.Content),
        hf = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        ff = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        pf = (0, d.cubicBezier)(.77, 0, .175, 1),
        mf = ({
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
          defaultZoomLevel: x = 100,
          minZoomLevel: w = 100,
          maxZoomLevel: E = 300,
          zoomLevelStep: P = 100,
          onZoomLevelChange: S,
          gestureSettings: C,
          testId: T,
          showZoomControls: O = !0,
          disableGesturesOn: j,
          asChild: N,
          children: L,
          className: k,
          usePortal: R = !0,
          enabled: M = !0
        }) => {
          const A = (0, h.useRef)(null),
            D = (0, h.useRef)(null),
            H = (0, h.useRef)(null),
            B = (0, h.useRef)(null),
            z = Ha(),
            U = Ha(),
            G = Ha(),
            q = (0, h.useRef)(!1),
            X = bu(),
            K = (0, F.Ub)("screen and (max-width: 1024px)"),
            W = (0, F.rl)() && K,
            $ = (0, F.jt)(),
            Y = "pointer-devices" !== j || W,
            [Z, Q] = (0, h.useState)(!0),
            [J, ee] = (0, h.useState)(!1),
            [te = !1, re] = (0, F.ic)({
              prop: g,
              defaultProp: m,
              onChange: v
            }),
            [ne, oe] = (0, h.useState)(!1),
            [ie, ae] = (0, h.useState)(null),
            se = (0, h.useDeferredValue)(ne),
            le = f || $ || m && !q.current;
          (0, h.useEffect)((() => {
            o?.()
          }), []), (0, h.useEffect)((() => {
            (m || g) && oe(te)
          }), []), (0, F.qn)((() => {
            ne !== se && (async function(e, {
              onOpen: t,
              onClose: r
            }) {
              const n = H.current.getBoundingClientRect(),
                o = H.current.querySelector("img"),
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
                  }), H.current?.style.setProperty("opacity", "0"), await e({
                    height: "horizontal" === y ? `${window.innerHeight}px` : `${v}px`,
                    width: "horizontal" === y ? `${g}px` : `${window.innerWidth}px`,
                    x: "horizontal" === y ? b : 0,
                    y: "horizontal" === y ? 0 : b,
                    scale: x / 100,
                    immediate: le,
                    config: {
                      duration: 550,
                      easing: pf
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
                  }), "vertical" === y ? A.current?.style.setProperty("width", "100%") : "horizontal" === y && A.current?.style.setProperty("height", "100%"), t?.()
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
                    width: `${n.width}px`,
                    height: `${n.height}px`,
                    x: n.left,
                    y: n.top,
                    immediate: le,
                    config: {
                      duration: 250,
                      easing: pf
                    }
                  }), H.current?.style.setProperty("opacity", "1"), await e({
                    opacity: 0,
                    immediate: !0
                  }), r?.()
                }
              })
            }(ne, {
              onClose: () => re(!1)
            }), q.current = !0)
          }), [ne]), (0, F.qn)((() => {
            te ? Promise.resolve().then((() => async function() {
              const e = H.current.querySelector("img");
              if (B.current) {
                let t = hf;
                e?.currentSrc && (t = e?.currentSrc), B.current.src = t, await xe(B.current)
              }
            }())).then((() => xe(B.current))).then((() => oe(te))) : oe(!1)
          }), [te]);
          const ce = () => {
              oe(!1)
            },
            {
              loaded: ue,
              eventHandlers: de
            } = (0, F.gr)({
              enabled: se
            }),
            {
              isHovered: he
            } = (0, F.Mk)({
              ref: D,
              enabled: se
            }),
            {
              isFocused: fe
            } = (0, F.iQ)({
              ref: D,
              enabled: se
            }),
            {
              isIdle: pe
            } = (0, F.UQ)({
              leave: 300,
              activity: 3e3,
              enabled: se && !he && !fe && !W
            }),
            me = function(e, t, r) {
              const n = Bn.fun(t) && t,
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
                f = (0, h.useMemo)((() => n || 3 == arguments.length ? Ma() : void 0), []),
                p = Un(e),
                m = [],
                g = (0, h.useRef)(null),
                v = o ? null : g.current;
              si((() => {
                g.current = m
              })), ci((() => (zn(m, (e => {
                f?.add(e.ctrl), e.ctrl.ref = f
              })), () => {
                zn(g.current, (e => {
                  e.expired && clearTimeout(e.expirationId), Vi(e.ctrl, f), e.ctrl.stop(!0)
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
                      return r ? (t.add(r), r.key) : Ba++
                    }))
                  }
                  return Bn.und(r) ? e : Bn.fun(r) ? e.map(r) : Un(r)
                }(p, n ? n() : t, v),
                b = o && g.current || [];
              si((() => zn(b, (({
                ctrl: e,
                item: t,
                key: r
              }) => {
                Vi(e, f), Oi(c, t, r)
              }))));
              const _ = [];
              if (v && zn(v, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = _[t] = y.indexOf(e.key)) && (m[t] = e)
                })), zn(p, ((e, t) => {
                  m[t] || (m[t] = {
                    key: y[t],
                    item: e,
                    phase: "mount",
                    ctrl: new Ea
                  }, m[t].ctrl.item = e)
                })), _.length) {
                let e = -1;
                const {
                  leave: r
                } = n ? n() : t;
                zn(_, ((t, n) => {
                  const o = v[n];
                  ~t ? (e = m.indexOf(o), m[e] = {
                    ...o,
                    item: p[t]
                  }) : r && m.splice(++e, 0, o)
                }))
              }
              Bn.fun(i) && m.sort(((e, t) => i(e.item, t.item)));
              let x = -a;
              const w = li(),
                E = ki(t),
                P = new Map,
                S = (0, h.useRef)(new Map),
                C = (0, h.useRef)(!1);
              zn(m, ((e, r) => {
                const o = e.key,
                  i = e.phase,
                  c = n ? n() : t;
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
                if (h = Oi(h, e.item, r), h = Bn.obj(h) ? Ai(h) : {
                    to: h
                  }, !h.config) {
                  const t = d || E.config;
                  h.config = Oi(t, e.item, r, f)
                }
                x += a;
                const m = {
                  ...E,
                  delay: p + x,
                  ref: u,
                  immediate: c.immediate,
                  reset: !1,
                  ...h
                };
                if ("enter" == f && Bn.und(m.from)) {
                  const o = n ? n() : t,
                    i = Bn.und(o.initial) || v ? o.from : o.initial;
                  m.from = Oi(i, e.item, r)
                }
                const {
                  onResolve: b
                } = m;
                m.onResolve = e => {
                  Oi(b, e);
                  const t = g.current,
                    r = t.find((e => e.key === o));
                  if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == r.phase) {
                      const t = Oi(s, r.item);
                      if (!1 !== t) {
                        const n = !0 === t ? 0 : t;
                        if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(w, n)))
                      }
                    }
                    e && t.some((e => e.expired)) && (S.current.delete(r), l && (C.current = !0), w())
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
              const T = (0, h.useContext)(ka),
                O = di(T),
                j = T !== O && Hi(T);
              si((() => {
                j && zn(m, (e => {
                  e.ctrl.start({
                    default: T
                  })
                }))
              }), [T]), zn(P, ((e, t) => {
                if (S.current.size) {
                  const e = m.findIndex((e => e.key === t.key));
                  m.splice(e, 1)
                }
              })), si((() => {
                zn(S.current.size ? S.current : P, (({
                  phase: e,
                  payload: t
                }, r) => {
                  const {
                    ctrl: n
                  } = r;
                  r.phase = e, f?.add(n), j && "enter" == e && n.start({
                    default: T
                  }), t && (zi(n, t.ref), !n.ref && !f || C.current ? (n.start(t), C.current && (C.current = !1)) : n.update(t))
                }))
              }), o ? void 0 : r);
              const N = e => h.createElement(h.Fragment, null, m.map(((t, r) => {
                const {
                  springs: n
                } = P.get(t) || t.ctrl, o = e({
                  ...n
                }, t.item, t, r);
                return o && o.type ? h.createElement(o.type, {
                  ...o.props,
                  key: Bn.str(t.key) || Bn.num(t.key) ? t.key : t.ctrl.id,
                  ref: o.ref
                }) : o
              })));
              return f ? [N, f] : N
            }(se, {
              ref: z,
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
            [ge] = Aa((() => ({
              ref: U,
              opacity: se && !pe && ue && Z ? 1 : 0,
              immediate: le
            })), [se, pe, ue, Z]),
            ve = (({
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
              gestureSettings: p = ds,
              enabled: m
            }) => {
              const g = (0, F.jt)(),
                [v = t, y] = (0, F.ic)({
                  prop: e,
                  defaultProp: t,
                  onChange: r
                }),
                [b = s, _] = (0, F.ic)({
                  prop: a,
                  defaultProp: s,
                  onChange: l
                }),
                x = (0, h.useRef)(null),
                w = (0, h.useRef)(null),
                [E, P] = (0, h.useState)(!1),
                S = b > n,
                C = b < o,
                T = b > n,
                O = b === n,
                [j, N] = Aa((() => ({
                  x: v[0],
                  y: v[1],
                  scale: b / 100,
                  from: {
                    scale: n / 100,
                    x: t[0],
                    y: t[1]
                  },
                  immediate: g,
                  config: cs
                }))),
                L = (e, {
                  origin: r,
                  delta: i,
                  animationConfig: a
                } = {}) => {
                  if (x.current && w.current) {
                    r || (r = [w.current.clientWidth / 2, w.current.clientHeight / 2]);
                    const s = ls(e, n, o);
                    if (s === b) return;
                    i || (i = (s - b) / 100);
                    const l = {
                      config: a || cs,
                      x: t[0],
                      y: t[1],
                      scale: b,
                      immediate: g
                    };
                    if (s <= n) y(t);
                    else {
                      const e = ss(x.current, w.current, (({
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
                        contentRef: x,
                        pinchDelta: i,
                        scale: b / 100,
                        touchOrigin: r
                      }), s);
                      l.x = e.xy[0], l.y = e.xy[1], y(e.xy)
                    }
                    l.scale = s / 100, N(l), _(s)
                  }
                },
                I = (e, t) => e.y < t.top || e.y > t.bottom || e.x < t.left || e.x > t.right,
                {
                  handleClick: k
                } = (0, F.Rv)({
                  onDoubleClick: e => {
                    if (x.current) {
                      const t = is(x.current),
                        r = I(e, t) ? "overlay" : "content";
                      f?.({
                        target: r,
                        origin: [e.clientX, e.clientY],
                        contentBounds: t
                      })
                    }
                  },
                  onSingleClick: e => {
                    if (x.current && 0 === e.button) {
                      const t = is(x.current),
                        r = I(e, t) ? "overlay" : "content";
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
                containerRef: w,
                contentRef: x,
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
                  N(e)
                },
                canZoomIn: C,
                canZoomOut: T,
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
                    if (!w.current || !x.current) return;
                    if (s) return void k(c);
                    if (o && i && !E && P(!0), l > 1) return;
                    if (a || b < n) return;
                    if (e) return v;
                    const {
                      horizontalOffset: d,
                      verticalOffset: h
                    } = ss(x.current, w.current, v, b), f = o * p.dragFactor, m = i * p.dragFactor, _ = {
                      config: cs,
                      x: t[0],
                      y: t[1],
                      immediate: g
                    };
                    if (b === n) {
                      const e = [r[0], r[1] + m],
                        {
                          y: t
                        } = as(e, x.current),
                        n = ls(100 * Math.abs(t) / p.closePc, 0, 100);
                      _.config = us, _.x = e[0], _.y = e[1], y(e), u?.(n)
                    } else {
                      const e = [os(r[0] + f, -d, d), os(r[1] + m, -h, h)];
                      _.x = e[0], _.y = e[1], y(e)
                    }
                    return N(_), r
                  },
                  onDragEnd: ({
                    memo: e
                  }) => {
                    if (w.current && x.current)
                      if (b === n) {
                        const {
                          y: e
                        } = as(v, x.current);
                        if (ls(100 * Math.abs(e) / p.closePc, 0, 100) >= 100) c?.();
                        else {
                          const e = {
                            config: us,
                            x: t[0],
                            y: t[1],
                            immediate: g
                          };
                          N(e), y(t), u?.(0)
                        }
                      } else if (void 0 !== e) {
                      const e = ss(x.current, w.current, v, b),
                        t = {
                          config: cs,
                          x: e.xy[0],
                          y: e.xy[1],
                          immediate: g
                        };
                      N(t), P(!1), y(e.xy)
                    }
                  },
                  onPinch: ({
                    cancel: e,
                    last: t,
                    offset: [r],
                    origin: [n, o],
                    first: i
                  }) => {
                    if (x.current && w.current) {
                      if (i && P(!0), t) return void e();
                      L(100 * r, {
                        origin: [n, o],
                        delta: r - b / 100
                      })
                    }
                  },
                  onPinchEnd: () => {
                    w.current && x.current && P(!1)
                  },
                  onWheel: ({
                    last: e,
                    event: t,
                    movement: r
                  }) => {
                    if (x.current && w.current) {
                      const n = -1 * r[1];
                      if (n && E && P(!0), e) return;
                      const o = [t.clientX, t.clientY],
                        i = b / 100,
                        a = i + n / p.scrollFactor;
                      L(100 * a, {
                        delta: a - i,
                        origin: o
                      })
                    }
                  },
                  onWheelEnd: () => {
                    w.current && x.current && P(!1)
                  }
                },
                getCursor: () => O && !m ? "zoom-out" : O && C ? "zoom-in" : S ? E ? "grabbing" : "grab" : "pointer",
                enabled: m,
                animation: j
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
                    const t = ((e, t, r) => {
                      const n = e.height / (r / 100);
                      return 100 * t.height / n
                    })(e.contentBounds, ve.containerRef.current.getBoundingClientRect(), ve.zoomLevel);
                    ve.zoomTo(t, {
                      animationConfig: us
                    })
                  }
              },
              onRequestedClose: ce,
              onRequestingClose: e => {
                if (ne) {
                  const t = 1,
                    r = .25,
                    n = ls(t - e * (t - r) / 100, r, t);
                  z.start({
                    opacity: n
                  });
                  const o = ls(1 - e / 100, 0, 1);
                  U.start({
                    opacity: o
                  })
                }
              },
              zoomLevel: _,
              defaultZoomLevel: x,
              minZoomLevel: w,
              maxZoomLevel: E,
              zoomLevelStep: P,
              onZoomLevelChange: S,
              defaultPosition: [0, 0],
              gestureSettings: C
            }),
            ye = Aa({
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
            be = Aa({
              opacity: se && ue && J ? 1 : 0,
              immediate: !0,
              onRest: () => {
                se && ne && ue && G.start({
                  opacity: 0,
                  immediate: !0
                })
              }
            }),
            _e = [
              [G, z, U],
              [0, 0, .1]
            ];
          async function xe(e) {
            return e.complete ? Promise.resolve(e) : new Promise(((t, r) => {
              e.onload = () => t(e), e.onerror = r
            }))
          }! function(e, t, r = 1e3) {
            si((() => {
              if (t) {
                let n = 0;
                zn(e, ((e, o) => {
                  const i = e.current;
                  if (i.length) {
                    let a = r * t[o];
                    isNaN(a) ? a = n : n = a, zn(i, (e => {
                      zn(e.queue, (e => {
                        const t = e.delay;
                        e.delay = e => a + Oi(t || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let t = Promise.resolve();
                zn(e, (e => {
                  const r = e.current;
                  if (r.length) {
                    const n = r.map((e => {
                      const t = e.queue;
                      return e.queue = [], t
                    }));
                    t = t.then((() => (zn(r, ((e, t) => zn(n[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(se ? _e[0] : _e[0].reverse(), _e[1]);
          const we = N ? (0, u.jsx)(p.DX, {
            className: lf,
            ref: null,
            children: L
          }) : (0, u.jsx)("img", {
            alt: "",
            src: s,
            "aria-hidden": !0,
            loading: i,
            className: lf,
            crossOrigin: n,
            referrerPolicy: a
          });
          (0, h.useEffect)((() => {
            Q(!W)
          }), [W]);
          const {
            contrastMode: Ee
          } = (0, tr.DP)(), Pe = ((e, t) => [Nu.xW.tokens, Lu("dark", t)].join(" "))(0, Ee);
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(cf.Root, {
              open: te,
              children: (0, u.jsxs)("div", {
                className: (0, I.A)("foundry_hcgxh_1a74xwb0", k),
                children: [(0, u.jsx)(cf.Trigger, {
                  asChild: !0,
                  children: (0, u.jsxs)(ns.button, {
                    className: "foundry_hcgxh_1a74xwb3 foundry_hcgxh_1d5mo5m0 foundry_hcgxh_1a74xwb1",
                    onClick: async () => {
                      M && re(!te)
                    },
                    ref: H,
                    "data-idle": !ne,
                    style: {
                      aspectRatio: l,
                      objectPosition: c,
                      objectFit: d
                    },
                    children: [(0, u.jsx)(p.s6, {
                      children: X.formatMessage(Cu)
                    }), we, me(((e, t) => y && !t && (0, u.jsx)(ns.span, {
                      className: "foundry_hcgxh_1a74xwb5",
                      style: e,
                      children: (0, u.jsx)(V.Plus, {
                        label: ""
                      })
                    })))]
                  })
                }), (0, u.jsxs)(cf.Portal, {
                  ...!R && {
                    container: ie
                  },
                  children: [(0, u.jsx)(ns.img, {
                    "aria-hidden": !0,
                    src: hf,
                    ref: B,
                    className: "foundry_hcgxh_1a74xwb2 foundry_hcgxh_1a74xwb1",
                    style: {
                      aspectRatio: l,
                      backgroundPosition: c,
                      backgroundSize: d,
                      ...ye
                    }
                  }), me(((o, s) => s && (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(uf, {
                      className: "foundry_hcgxh_1a74xwb8",
                      style: o
                    }), (0, u.jsxs)(df, {
                      "data-testid": T,
                      onEscapeKeyDown: ce,
                      onOpenAutoFocus: ff,
                      onCloseAutoFocus: e => ((e, t) => {
                        e?.preventDefault(), t.current?.focus({
                          preventScroll: !0
                        })
                      })(e, H),
                      className: Pe,
                      children: [(0, u.jsx)(p.s6, {
                        children: (0, u.jsx)(cf.Title, {
                          children: X.formatMessage(Tu)
                        })
                      }), (0, u.jsx)(p.s6, {
                        children: (0, u.jsx)(cf.Description, {
                          children: r || X.formatMessage(Ou, {
                            alt: t
                          })
                        })
                      }), (0, u.jsx)(ns.div, {
                        className: "foundry_hcgxh_1a74xwb6",
                        style: be,
                        children: (0, u.jsx)(hs, {
                          ...ve,
                          children: (0, u.jsx)("img", {
                            alt: "",
                            src: e,
                            ref: A,
                            loading: i,
                            className: "foundry_hcgxh_1a74xwba",
                            crossOrigin: n,
                            "aria-hidden": !0,
                            referrerPolicy: a,
                            style: {
                              cursor: ve.getCursor()
                            },
                            ...de
                          })
                        })
                      }), (0, u.jsx)(ns.div, {
                        className: "foundry_hcgxh_1a74xwb9",
                        style: ge,
                        children: (0, u.jsx)(sf, {
                          ...ve,
                          ref: D,
                          onClose: ce,
                          caption: r,
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
            }), !R && (0, u.jsx)("div", {
              ref: ae
            })]
          })
        },
        gf = e => {
          const t = (0, tr.Ym)();
          return (0, u.jsx)(Su, {
            messages: ju,
            locale: t,
            children: (0, u.jsx)(mf, {
              ...e
            })
          })
        };
      var vf = r(22759),
        yf = r(22259),
        bf = r(26727),
        _f = r(92600),
        xf = r(85435),
        wf = r(19690),
        Ef = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Pf = [" ", "Enter"],
        Sf = "Select",
        [Cf, Tf, Of] = (0, zu.N)(Sf),
        [jf, Nf] = (0, Mu.A)(Sf, [Of, yh.Bk]),
        Lf = (0, yh.Bk)(),
        [If, kf] = jf(Sf),
        [Rf, Mf] = jf(Sf),
        Af = e => {
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
          } = e, v = Lf(t), [y, b] = h.useState(null), [_, x] = h.useState(null), [w, E] = h.useState(!1), P = (0, Du.jH)(c), [S, C] = (0, Au.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Sf
          }), [T, O] = (0, Au.useControllableState)({
            prop: a,
            defaultProp: s,
            onChange: l,
            caller: Sf
          }), j = h.useRef(null), N = !y || g || !!y.closest("form"), [L, I] = h.useState(new Set), k = Array.from(L).map((e => e.props.value)).join(";");
          return (0, u.jsx)(yh.bL, {
            ...v,
            children: (0, u.jsxs)(If, {
              required: m,
              scope: t,
              trigger: y,
              onTriggerChange: b,
              valueNode: _,
              onValueNodeChange: x,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: E,
              contentId: (0, vh.useId)(),
              value: T,
              onValueChange: O,
              open: S,
              onOpenChange: C,
              dir: P,
              triggerPointerDownPosRef: j,
              disabled: p,
              children: [(0, u.jsx)(Cf.Provider, {
                scope: t,
                children: (0, u.jsx)(Rf, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: h.useCallback((e => {
                    I((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: h.useCallback((e => {
                    I((t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    }))
                  }), []),
                  children: r
                })
              }), N ? (0, u.jsxs)(vp, {
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
              }, k) : null]
            })
          })
        };
      Af.displayName = Sf;
      var Df = "SelectTrigger",
        Hf = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, i = Lf(r), a = kf(Df, r), s = a.disabled || n, l = (0, Ru.s)(t, a.onTriggerChange), c = Tf(r), d = h.useRef("touch"), [f, p, m] = bp((e => {
            const t = c().filter((e => !e.disabled)),
              r = t.find((e => e.value === a.value)),
              n = _p(t, e, r);
            void 0 !== n && a.onValueChange(n.value)
          })), g = e => {
            s || (a.onOpenChange(!0), m()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, u.jsx)(yh.Mz, {
            asChild: !0,
            ...i,
            children: (0, u.jsx)(Vu.sG.button, {
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
              "data-placeholder": yp(a.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: (0, ku.m)(o.onClick, (e => {
                e.currentTarget.focus(), "mouse" !== d.current && g(e)
              })),
              onPointerDown: (0, ku.m)(o.onPointerDown, (e => {
                d.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (g(e), e.preventDefault())
              })),
              onKeyDown: (0, ku.m)(o.onKeyDown, (e => {
                const t = "" !== f.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || p(e.key), t && " " === e.key || Ef.includes(e.key) && (g(), e.preventDefault())
              }))
            })
          })
        }));
      Hf.displayName = Df;
      var Bf = "SelectValue",
        Vf = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: i,
            placeholder: a = "",
            ...s
          } = e, l = kf(Bf, r), {
            onValueNodeHasChildrenChange: c
          } = l, d = void 0 !== i, h = (0, Ru.s)(t, l.onValueNodeChange);
          return (0, _f.N)((() => {
            c(d)
          }), [c, d]), (0, u.jsx)(Vu.sG.span, {
            ...s,
            ref: h,
            style: {
              pointerEvents: "none"
            },
            children: yp(l.value) ? (0, u.jsx)(u.Fragment, {
              children: a
            }) : i
          })
        }));
      Vf.displayName = Bf;
      var zf = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, u.jsx)(Vu.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      }));
      zf.displayName = "SelectIcon";
      var Ff = e => (0, u.jsx)(bh.Portal, {
        asChild: !0,
        ...e
      });
      Ff.displayName = "SelectPortal";
      var Uf = "SelectContent",
        Gf = h.forwardRef(((e, t) => {
          const r = kf(Uf, e.__scopeSelect),
            [n, o] = h.useState();
          if ((0, _f.N)((() => {
              o(new DocumentFragment)
            }), []), !r.open) {
            const t = n;
            return t ? Ut.createPortal((0, u.jsx)(Xf, {
              scope: e.__scopeSelect,
              children: (0, u.jsx)(Cf.Slot, {
                scope: e.__scopeSelect,
                children: (0, u.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, u.jsx)($f, {
            ...e,
            ref: t
          })
        }));
      Gf.displayName = Uf;
      var qf = 10,
        [Xf, Kf] = jf(Uf),
        Wf = (0, ih.createSlot)("SelectContent.RemoveScroll"),
        $f = h.forwardRef(((e, t) => {
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
          } = e, _ = kf(Uf, r), [x, w] = h.useState(null), [E, P] = h.useState(null), S = (0, Ru.s)(t, (e => w(e))), [C, T] = h.useState(null), [O, j] = h.useState(null), N = Tf(r), [L, I] = h.useState(!1), k = h.useRef(!1);
          h.useEffect((() => {
            if (x) return (0, xf.Eq)(x)
          }), [x]), (0, vf.Oh)();
          const R = h.useCallback((e => {
              const [t, ...r] = N().map((e => e.ref.current)), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && E && (E.scrollTop = 0), r === n && E && (E.scrollTop = E.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }), [N, E]),
            M = h.useCallback((() => R([C, x])), [R, C, x]);
          h.useEffect((() => {
            L && M()
          }), [L, M]);
          const {
            onOpenChange: A,
            triggerPointerDownPosRef: D
          } = _;
          h.useEffect((() => {
            if (x) {
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
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : x.contains(r.target) || A(!1), document.removeEventListener("pointermove", t), D.current = null
                };
              return null !== D.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }), [x, A, D]), h.useEffect((() => {
            const e = () => A(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [A]);
          const [H, B] = bp((e => {
            const t = N().filter((e => !e.disabled)),
              r = t.find((e => e.ref.current === document.activeElement)),
              n = _p(t, e, r);
            n && setTimeout((() => n.ref.current.focus()))
          })), V = h.useCallback(((e, t, r) => {
            const n = !k.current && !r;
            (void 0 !== _.value && _.value === t || n) && (T(e), n && (k.current = !0))
          }), [_.value]), z = h.useCallback((() => x?.focus()), [x]), F = h.useCallback(((e, t, r) => {
            const n = !k.current && !r;
            (void 0 !== _.value && _.value === t || n) && j(e)
          }), [_.value]), U = "popper" === n ? Zf : Yf, G = U === Zf ? {
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
          return (0, u.jsx)(Xf, {
            scope: r,
            content: x,
            viewport: E,
            onViewportChange: P,
            itemRefCallback: V,
            selectedItem: C,
            onItemLeave: z,
            itemTextRefCallback: F,
            focusSelectedItem: M,
            selectedItemText: O,
            position: n,
            isPositioned: L,
            searchRef: H,
            children: (0, u.jsx)(wf.RemoveScroll, {
              as: Wf,
              allowPinchZoom: !0,
              children: (0, u.jsx)(yf.n, {
                asChild: !0,
                trapped: _.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, ku.m)(o, (e => {
                  _.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, u.jsx)(gh.qW, {
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
                    onPlaced: () => I(!0),
                    ref: S,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: (0, ku.m)(b.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = N().filter((e => !e.disabled));
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
      $f.displayName = "SelectContentImpl";
      var Yf = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, i = kf(Uf, r), a = Kf(Uf, r), [s, l] = h.useState(null), [c, d] = h.useState(null), f = (0, Ru.s)(t, (e => d(e))), p = Tf(r), m = h.useRef(!1), g = h.useRef(!0), {
          viewport: v,
          selectedItem: y,
          selectedItemText: b,
          focusSelectedItem: _
        } = a, x = h.useCallback((() => {
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
                u = window.innerWidth - qf,
                d = Iu(i, [qf, Math.max(qf, u - c)]);
              s.style.minWidth = l + "px", s.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                i = window.innerWidth - r.right - n,
                a = window.innerWidth - e.right - i,
                l = e.width + a,
                c = Math.max(l, t.width),
                u = window.innerWidth - qf,
                d = Iu(i, [qf, Math.max(qf, u - c)]);
              s.style.minWidth = l + "px", s.style.right = d + "px"
            }
            const a = p(),
              l = window.innerHeight - 2 * qf,
              u = v.scrollHeight,
              d = window.getComputedStyle(c),
              h = parseInt(d.borderTopWidth, 10),
              f = parseInt(d.paddingTop, 10),
              g = parseInt(d.borderBottomWidth, 10),
              _ = h + f + u + parseInt(d.paddingBottom, 10) + g,
              x = Math.min(5 * y.offsetHeight, _),
              w = window.getComputedStyle(v),
              E = parseInt(w.paddingTop, 10),
              P = parseInt(w.paddingBottom, 10),
              S = e.top + e.height / 2 - qf,
              C = l - S,
              T = y.offsetHeight / 2,
              O = h + f + (y.offsetTop + T),
              j = _ - O;
            if (O <= S) {
              const e = a.length > 0 && y === a[a.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = c.clientHeight - v.offsetTop - v.offsetHeight,
                r = O + Math.max(C, T + (e ? P : 0) + t + g);
              s.style.height = r + "px"
            } else {
              const e = a.length > 0 && y === a[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(S, h + v.offsetTop + (e ? E : 0) + T) + j;
              s.style.height = t + "px", v.scrollTop = O - S + v.offsetTop
            }
            s.style.margin = `${qf}px 0`, s.style.minHeight = x + "px", s.style.maxHeight = l + "px", n?.(), requestAnimationFrame((() => m.current = !0))
          }
        }), [p, i.trigger, i.valueNode, s, c, v, y, b, i.dir, n]);
        (0, _f.N)((() => x()), [x]);
        const [w, E] = h.useState();
        (0, _f.N)((() => {
          c && E(window.getComputedStyle(c).zIndex)
        }), [c]);
        const P = h.useCallback((e => {
          e && !0 === g.current && (x(), _?.(), g.current = !1)
        }), [x, _]);
        return (0, u.jsx)(Qf, {
          scope: r,
          contentWrapper: s,
          shouldExpandOnScrollRef: m,
          onScrollButtonChange: P,
          children: (0, u.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, u.jsx)(Vu.sG.div, {
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
      Yf.displayName = "SelectItemAlignedPosition";
      var Zf = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = qf,
          ...i
        } = e, a = Lf(r);
        return (0, u.jsx)(yh.UC, {
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
      Zf.displayName = "SelectPopperPosition";
      var [Qf, Jf] = jf(Uf, {}), ep = "SelectViewport", tp = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, i = Kf(ep, r), a = Jf(ep, r), s = (0, Ru.s)(t, i.onViewportChange), l = h.useRef(0);
        return (0, u.jsxs)(u.Fragment, {
          children: [(0, u.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, u.jsx)(Cf.Slot, {
            scope: r,
            children: (0, u.jsx)(Vu.sG.div, {
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
              onScroll: (0, ku.m)(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = a;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * qf,
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
      tp.displayName = ep;
      var rp = "SelectGroup",
        [np, op] = jf(rp);
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, vh.useId)();
        return (0, u.jsx)(np, {
          scope: r,
          id: o,
          children: (0, u.jsx)(Vu.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      })).displayName = rp;
      var ip = "SelectLabel";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = op(ip, r);
        return (0, u.jsx)(Vu.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      })).displayName = ip;
      var ap = "SelectItem",
        [sp, lp] = jf(ap),
        cp = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: i,
            ...a
          } = e, s = kf(ap, r), l = Kf(ap, r), c = s.value === n, [d, f] = h.useState(i ?? ""), [p, m] = h.useState(!1), g = (0, Ru.s)(t, (e => l.itemRefCallback?.(e, n, o))), v = (0, vh.useId)(), y = h.useRef("touch"), b = () => {
            o || (s.onValueChange(n), s.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, u.jsx)(sp, {
            scope: r,
            value: n,
            disabled: o,
            textId: v,
            isSelected: c,
            onItemTextChange: h.useCallback((e => {
              f((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, u.jsx)(Cf.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: d,
              children: (0, u.jsx)(Vu.sG.div, {
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
                onFocus: (0, ku.m)(a.onFocus, (() => m(!0))),
                onBlur: (0, ku.m)(a.onBlur, (() => m(!1))),
                onClick: (0, ku.m)(a.onClick, (() => {
                  "mouse" !== y.current && b()
                })),
                onPointerUp: (0, ku.m)(a.onPointerUp, (() => {
                  "mouse" === y.current && b()
                })),
                onPointerDown: (0, ku.m)(a.onPointerDown, (e => {
                  y.current = e.pointerType
                })),
                onPointerMove: (0, ku.m)(a.onPointerMove, (e => {
                  y.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: (0, ku.m)(a.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                })),
                onKeyDown: (0, ku.m)(a.onKeyDown, (e => {
                  "" !== l.searchRef?.current && " " === e.key || (Pf.includes(e.key) && b(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      cp.displayName = ap;
      var up = "SelectItemText",
        dp = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...i
          } = e, a = kf(up, r), s = Kf(up, r), l = lp(up, r), c = Mf(up, r), [d, f] = h.useState(null), p = (0, Ru.s)(t, (e => f(e)), l.onItemTextChange, (e => s.itemTextRefCallback?.(e, l.value, l.disabled))), m = d?.textContent, g = h.useMemo((() => (0, u.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: m
          }, l.value)), [l.disabled, l.value, m]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: y
          } = c;
          return (0, _f.N)((() => (v(g), () => y(g))), [v, y, g]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Vu.sG.span, {
              id: l.textId,
              ...i,
              ref: p
            }), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? Ut.createPortal(i.children, a.valueNode) : null]
          })
        }));
      dp.displayName = up;
      var hp = "SelectItemIndicator";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return lp(hp, r).isSelected ? (0, u.jsx)(Vu.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      })).displayName = hp;
      var fp = "SelectScrollUpButton";
      h.forwardRef(((e, t) => {
        const r = Kf(fp, e.__scopeSelect),
          n = Jf(fp, e.__scopeSelect),
          [o, i] = h.useState(!1),
          a = (0, Ru.s)(t, n.onScrollButtonChange);
        return (0, _f.N)((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, u.jsx)(mp, {
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
      })).displayName = fp;
      var pp = "SelectScrollDownButton";
      h.forwardRef(((e, t) => {
        const r = Kf(pp, e.__scopeSelect),
          n = Jf(pp, e.__scopeSelect),
          [o, i] = h.useState(!1),
          a = (0, Ru.s)(t, n.onScrollButtonChange);
        return (0, _f.N)((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              i(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, u.jsx)(mp, {
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
      })).displayName = pp;
      var mp = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, i = Kf("SelectScrollButton", r), a = h.useRef(null), s = Tf(r), l = h.useCallback((() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }), []);
        return h.useEffect((() => () => l()), [l]), (0, _f.N)((() => {
          const e = s().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [s]), (0, u.jsx)(Vu.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, ku.m)(o.onPointerDown, (() => {
            null === a.current && (a.current = window.setInterval(n, 50))
          })),
          onPointerMove: (0, ku.m)(o.onPointerMove, (() => {
            i.onItemLeave?.(), null === a.current && (a.current = window.setInterval(n, 50))
          })),
          onPointerLeave: (0, ku.m)(o.onPointerLeave, (() => {
            l()
          }))
        })
      }));
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, u.jsx)(Vu.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var gp = "SelectArrow";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Lf(r), i = kf(gp, r), a = Kf(gp, r);
        return i.open && "popper" === a.position ? (0, u.jsx)(yh.i3, {
          ...o,
          ...n,
          ref: t
        }) : null
      })).displayName = gp;
      var vp = h.forwardRef((({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = h.useRef(null),
          i = (0, Ru.s)(n, o),
          a = (0, Hu.Z)(t);
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
        }), [a, t]), (0, u.jsx)(Vu.sG.select, {
          ...r,
          style: {
            ...ah.VISUALLY_HIDDEN_STYLES,
            ...r.style
          },
          ref: i,
          defaultValue: t
        })
      }));

      function yp(e) {
        return "" === e || void 0 === e
      }

      function bp(e) {
        const t = (0, bf.c)(e),
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

      function _p(e, t, r) {
        const n = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === n.length && (i = i.filter((e => e !== r)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(n.toLowerCase())));
        return l !== r ? l : void 0
      }
      vp.displayName = "SelectBubbleInput";
      var xp = Af,
        wp = Hf,
        Ep = Vf,
        Pp = zf,
        Sp = Ff,
        Cp = Gf,
        Tp = tp,
        Op = cp,
        jp = dp,
        Np = "ScrollArea",
        [Lp, Ip] = (0, Mu.A)(Np),
        [kp, Rp] = Lp(Np),
        Mp = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...a
          } = e, [s, l] = h.useState(null), [c, d] = h.useState(null), [f, p] = h.useState(null), [m, g] = h.useState(null), [v, y] = h.useState(null), [b, _] = h.useState(0), [x, w] = h.useState(0), [E, P] = h.useState(!1), [S, C] = h.useState(!1), T = (0, Ru.s)(t, (e => l(e))), O = (0, Du.jH)(o);
          return (0, u.jsx)(kp, {
            scope: r,
            type: n,
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
            onCornerHeightChange: w,
            children: (0, u.jsx)(Vu.sG.div, {
              dir: O,
              ...a,
              ref: T,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": b + "px",
                "--radix-scroll-area-corner-height": x + "px",
                ...e.style
              }
            })
          })
        }));
      Mp.displayName = Np;
      var Ap = "ScrollAreaViewport",
        Dp = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...i
          } = e, a = Rp(Ap, r), s = h.useRef(null), l = (0, Ru.s)(t, s, a.onViewportChange);
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, u.jsx)(Vu.sG.div, {
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
      Dp.displayName = Ap;
      var Hp = "ScrollAreaScrollbar",
        Bp = h.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Rp(Hp, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: a
          } = o, s = "horizontal" === e.orientation;
          return h.useEffect((() => (s ? i(!0) : a(!0), () => {
            s ? i(!1) : a(!1)
          })), [s, i, a]), "hover" === o.type ? (0, u.jsx)(Vp, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, u.jsx)(zp, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, u.jsx)(Fp, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, u.jsx)(Up, {
            ...n,
            ref: t
          }) : null
        }));
      Bp.displayName = Hp;
      var Vp = h.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Rp(Hp, e.__scopeScrollArea), [i, a] = h.useState(!1);
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
          }), [o.scrollArea, o.scrollHideDelay]), (0, u.jsx)(_h.C, {
            present: r || i,
            children: (0, u.jsx)(Fp, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        })),
        zp = h.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Rp(Hp, e.__scopeScrollArea), i = "horizontal" === e.orientation, a = sm((() => l("SCROLL_END")), 100), [s, l] = (c = {
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
          }), [o.viewport, i, l, a]), (0, u.jsx)(_h.C, {
            present: r || "hidden" !== s,
            children: (0, u.jsx)(Up, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, ku.m)(e.onPointerEnter, (() => l("POINTER_ENTER"))),
              onPointerLeave: (0, ku.m)(e.onPointerLeave, (() => l("POINTER_LEAVE")))
            })
          })
        })),
        Fp = h.forwardRef(((e, t) => {
          const r = Rp(Hp, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, a] = h.useState(!1),
            s = "horizontal" === e.orientation,
            l = sm((() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(s ? e : t)
              }
            }), 10);
          return lm(r.viewport, l), lm(r.content, l), (0, u.jsx)(_h.C, {
            present: n || i,
            children: (0, u.jsx)(Up, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        Up = h.forwardRef(((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Rp(Hp, e.__scopeScrollArea), i = h.useRef(null), a = h.useRef(0), [s, l] = h.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = tm(s.viewport, s.content), d = {
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
              const o = rm(r),
                i = t || o / 2,
                a = o - i,
                s = r.scrollbar.paddingStart + i,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - a,
                c = r.content - r.viewport;
              return om([s, l], "ltr" === n ? [0, c] : [-1 * c, 0])(e)
            }(e, a.current, s, t)
          }
          return "horizontal" === r ? (0, u.jsx)(Gp, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = nm(o.viewport.scrollLeft, s, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = f(e, o.dir))
            }
          }) : "vertical" === r ? (0, u.jsx)(qp, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = nm(o.viewport.scrollTop, s);
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
        Gp = h.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = Rp(Hp, e.__scopeScrollArea), [a, s] = h.useState(), l = h.useRef(null), c = (0, Ru.s)(t, l, i.onScrollbarXChange);
          return h.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, u.jsx)(Wp, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": rm(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), im(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: em(a.paddingLeft),
                  paddingEnd: em(a.paddingRight)
                }
              })
            }
          })
        })),
        qp = h.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = Rp(Hp, e.__scopeScrollArea), [a, s] = h.useState(), l = h.useRef(null), c = (0, Ru.s)(t, l, i.onScrollbarYChange);
          return h.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, u.jsx)(Wp, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": rm(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), im(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: em(a.paddingTop),
                  paddingEnd: em(a.paddingBottom)
                }
              })
            }
          })
        })),
        [Xp, Kp] = Lp(Hp),
        Wp = h.forwardRef(((e, t) => {
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
          } = e, m = Rp(Hp, r), [g, v] = h.useState(null), y = (0, Ru.s)(t, (e => v(e))), b = h.useRef(null), _ = h.useRef(""), x = m.viewport, w = n.content - n.viewport, E = (0, bf.c)(d), P = (0, bf.c)(l), S = sm(f, 10);

          function C(e) {
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
              r && E(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [x, g, w, E]), h.useEffect(P, [n, P]), lm(g, S), lm(m.content, S), (0, u.jsx)(Xp, {
            scope: r,
            scrollbar: g,
            hasThumb: o,
            onThumbChange: (0, bf.c)(i),
            onThumbPointerUp: (0, bf.c)(a),
            onThumbPositionChange: P,
            onThumbPointerDown: (0, bf.c)(s),
            children: (0, u.jsx)(Vu.sG.div, {
              ...p,
              ref: y,
              style: {
                position: "absolute",
                ...p.style
              },
              onPointerDown: (0, ku.m)(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = g.getBoundingClientRect(), _.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), C(e))
              })),
              onPointerMove: (0, ku.m)(e.onPointerMove, C),
              onPointerUp: (0, ku.m)(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = _.current, m.viewport && (m.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        $p = "ScrollAreaThumb",
        Yp = h.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Kp($p, e.__scopeScrollArea);
          return (0, u.jsx)(_h.C, {
            present: r || o.hasThumb,
            children: (0, u.jsx)(Zp, {
              ref: t,
              ...n
            })
          })
        })),
        Zp = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, i = Rp($p, r), a = Kp($p, r), {
            onThumbPositionChange: s
          } = a, l = (0, Ru.s)(t, (e => a.onThumbChange(e))), c = h.useRef(void 0), d = sm((() => {
            c.current && (c.current(), c.current = void 0)
          }), 100);
          return h.useEffect((() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (d(), !c.current) {
                  const t = am(e, s);
                  c.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [i.viewport, d, s]), (0, u.jsx)(Vu.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, ku.m)(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              a.onThumbPointerDown({
                x: r,
                y: n
              })
            })),
            onPointerUp: (0, ku.m)(e.onPointerUp, a.onThumbPointerUp)
          })
        }));
      Yp.displayName = $p;
      var Qp = "ScrollAreaCorner";
      h.forwardRef(((e, t) => {
        const r = Rp(Qp, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, u.jsx)(Jp, {
          ...e,
          ref: t
        }) : null
      })).displayName = Qp;
      var Jp = h.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Rp(Qp, r), [i, a] = h.useState(0), [s, l] = h.useState(0), c = Boolean(i && s);
        return lm(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        })), lm(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        })), c ? (0, u.jsx)(Vu.sG.div, {
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

      function em(e) {
        return e ? parseInt(e, 10) : 0
      }

      function tm(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function rm(e) {
        const t = tm(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function nm(e, t, r = "ltr") {
        const n = rm(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - n,
          l = Iu(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
        return om([0, a], [0, s])(l)
      }

      function om(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function im(e, t) {
        return e > 0 && e < t
      }
      var am = (e, t = () => {}) => {
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

      function sm(e, t) {
        const r = (0, bf.c)(e),
          n = h.useRef(0);
        return h.useEffect((() => () => window.clearTimeout(n.current)), []), h.useCallback((() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }), [r, t])
      }

      function lm(e, t) {
        const r = (0, bf.c)(t);
        (0, _f.N)((() => {
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
      var cm = Mp,
        um = Dp,
        dm = Bp,
        hm = Yp,
        fm = "foundry_hcgxh_uaq1gwo";
      const pm = (0, h.forwardRef)((({
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
          isDisabled: x,
          isReadOnly: w,
          className: E,
          labelledBy: P,
          renderPortal: S,
          container: C
        }, T) => {
          const O = (0, h.useRef)(null),
            j = (0, F.UP)(O, T),
            N = (0, h.useId)(),
            L = (0, h.useId)(),
            [k = !1, R] = (0, F.ic)({
              prop: v,
              defaultProp: y,
              onChange: b
            });
          return (0, u.jsxs)("div", {
            className: (0, I.$)("foundry_hcgxh_uaq1gw0", E),
            children: [(t && !a || r) && (0, u.jsxs)("div", {
              className: "foundry_hcgxh_uaq1gw1",
              children: [(0, u.jsx)(p.s6, {
                enabled: !!a,
                children: (0, u.jsx)(B, {
                  size: "SM",
                  className: (0, I.$)("foundry_hcgxh_uaq1gw2", x && fm),
                  asChild: !0,
                  children: (0, u.jsxs)("label", {
                    id: N,
                    children: [t, _ && !l && (0, u.jsx)("span", {
                      className: "foundry_hcgxh_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), r && (0, u.jsx)(B, {
                size: "XS",
                className: (0, I.$)("foundry_hcgxh_uaq1gw3", x && fm),
                children: r
              })]
            }), (0, u.jsxs)(xp, {
              required: _,
              disabled: x,
              open: k,
              onOpenChange: () => R(!w && !k),
              value: f,
              defaultValue: m,
              onValueChange: g,
              children: [(0, u.jsxs)(wp, {
                className: (0, I.$)("foundry_hcgxh_uaq1gw5 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10", !!d && "foundry_hcgxh_uaq1gw7", w && "foundry_hcgxh_uaq1gw6"),
                ref: j,
                "data-testid": i,
                "aria-activedescendant": f,
                "aria-labelledby": P || N,
                "aria-controls": L,
                children: [(0, u.jsx)("span", {
                  className: "foundry_hcgxh_uaq1gw8",
                  children: (0, u.jsx)(Ep, {
                    placeholder: n,
                    "aria-label": f
                  })
                }), (0, u.jsx)(Pp, {
                  asChild: !0,
                  className: (0, I.$)("foundry_hcgxh_uaq1gw9", (w || x) && "foundry_hcgxh_uaq1gwa"),
                  children: k ? (0, u.jsx)(V.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, u.jsx)(V.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, u.jsx)(gm, {
                renderPortal: S,
                container: C,
                children: (0, u.jsx)(Cp, {
                  id: L,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_hcgxh_uaq1gwb",
                  children: (0, u.jsxs)(cm, {
                    className: "foundry_hcgxh_uaq1gwk",
                    type: "auto",
                    children: [(0, u.jsx)(Tp, {
                      className: (0, I.$)("foundry_hcgxh_uaq1gwc", c && "foundry_hcgxh_uaq1gwd"),
                      asChild: !0,
                      children: (0, u.jsx)(um, {
                        className: "foundry_hcgxh_uaq1gwl",
                        style: {
                          overflowY: void 0
                        },
                        children: e
                      })
                    }), (0, u.jsx)(dm, {
                      className: "foundry_hcgxh_uaq1gwm",
                      orientation: "vertical",
                      children: (0, u.jsx)(hm, {
                        className: "foundry_hcgxh_uaq1gwn"
                      })
                    })]
                  })
                })
              })]
            }), o && (0, u.jsx)(p.s6, {
              enabled: !!d || s || 0 === o.length,
              children: (0, u.jsx)(B, {
                size: "SM",
                className: (0, I.$)("foundry_hcgxh_uaq1gwf", x && fm),
                children: o
              })
            }), d && (0, u.jsxs)(B, {
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
        mm = (0, h.forwardRef)((({
          label: e,
          value: t,
          icon: r,
          iconLabel: n,
          iconPosition: o,
          isDisabled: i,
          testId: a
        }, s) => {
          const l = (0, h.useRef)(null),
            c = (0, F.UP)(l, s),
            d = r && z[r];
          return (0, u.jsxs)(Op, {
            value: t,
            className: "foundry_hcgxh_uaq1gwe foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10",
            ref: c,
            disabled: i,
            "data-testid": a,
            children: [d && "left" === o && (0, u.jsx)(d, {
              className: "foundry_hcgxh_uaq1gwi",
              label: n || "",
              size: "LG"
            }), (0, u.jsx)(jp, {
              asChild: !0,
              children: (0, u.jsx)("span", {
                className: "foundry_hcgxh_uaq1gwp",
                children: e
              })
            }), d && "right" === o && (0, u.jsx)(d, {
              label: n || "",
              size: "LG",
              className: "foundry_hcgxh_uaq1gwj"
            })]
          })
        })),
        gm = ({
          renderPortal: e = !0,
          container: t,
          children: r
        }) => e ? (0, u.jsx)(Sp, {
          container: t,
          children: r
        }) : (0, u.jsx)(u.Fragment, {
          children: r
        }),
        vm = ({
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
        ym = ({
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
        bm = ({
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
        _m = ({
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
        xm = ({
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
        wm = ({
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

      function Em(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = ge(e.isSelected, e.defaultSelected || !1, e.onChange);
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

      function Pm(e, t, r) {
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
        } = Kt({
          isDisabled: n
        }), {
          pressProps: p,
          isPressed: m
        } = Kt({
          onPress() {
            var e;
            t.toggle(), null === (e = r.current) || void 0 === e || e.focus()
          },
          isDisabled: n || o
        }), {
          focusableProps: g
        } = dt(e, r), v = me(h, g), y = K(e, {
          labelable: !0
        });
        return Y(r, t.isSelected, t.setSelected), {
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

      function Sm(e) {
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

      function Cm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Tm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Cm(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Sm(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cm(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Om(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var jm = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Nm = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Tm(Tm({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) jm(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Om(e.variantClassNames, (e => Om(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Lm = Nm({
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
        Im = Nm({
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
        km = Nm({
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
        Rm = Nm({
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
      const Mm = (0, h.forwardRef)((({
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
            _ = (0, F.UP)(b, y),
            x = (0, h.useId)(),
            {
              setSelected: w,
              ...E
            } = Em({
              isSelected: e,
              defaultSelected: t,
              onChange: r
            }),
            {
              inputProps: P,
              isDisabled: S,
              isReadOnly: C,
              isInvalid: T,
              isSelected: O
            } = function(e, t, r) {
              let n = bt({
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
                } = Pm({
                  ...e,
                  isInvalid: o
                }, t, r);
              ht(e, n, r);
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
              } = Kt({
                isDisabled: d || f,
                onPress() {
                  let {
                    [yt]: t
                  } = e, {
                    commitValidation: r
                  } = t || n;
                  r()
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
              id: x
            }, {
              ...E,
              setSelected: v.isReadOnly ? () => !1 : w
            }, b),
            j = (0, d.mergeProps)({
              ...P,
              "aria-checked": O,
              className: g
            }, {
              className: "foundry_hcgxh_11gbdty1"
            }),
            N = l ? n[`Dash${a}`] : n[`Check${a}`],
            L = T && !!m;
          return (0, u.jsxs)("label", {
            className: "foundry_hcgxh_11gbdty0",
            children: [(0, u.jsxs)("div", {
              className: Im({
                size: a
              }),
              children: [(0, u.jsx)(p.s6, {
                children: (0, u.jsx)("input", {
                  ...j,
                  ref: _
                })
              }), (0, u.jsx)("div", {
                className: Lm({
                  size: a,
                  appearance: s
                }),
                "aria-hidden": "true",
                "data-state": l ? "mixed" : O ? "checked" : "unchecked",
                "data-disabled": S || C,
                "data-testid": f,
                children: (0, u.jsx)("span", {
                  className: "foundry_hcgxh_11gbdtyc",
                  children: (O || l) && (0, u.jsx)(N, {
                    "aria-hidden": "true"
                  })
                })
              })]
            }), (0, u.jsx)(p.s6, {
              enabled: !!c,
              children: (0, u.jsxs)("div", {
                className: Rm({
                  size: a,
                  isDisabled: S
                }),
                children: [(0, u.jsx)("p", {
                  className: km({
                    size: a
                  }),
                  children: o
                }), i && !L && (0, u.jsx)("p", {
                  className: "foundry_hcgxh_11gbdtym foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                  children: i
                }), L && (0, u.jsx)("p", {
                  className: "foundry_hcgxh_11gbdtyn foundry_hcgxh_11gbdtym foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                  children: m
                })]
              })
            })]
          })
        })),
        Am = new WeakMap;

      function Dm(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = Q(e);
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
        }(e, t) && (!e.parentElement || Dm(e.parentElement, e))
      }

      function Hm(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function Bm(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? Ee : we,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = Z(o),
          a = function(e, t, r, n) {
            return e.createTreeWalker(t, r, n)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !n(e) || !Dm(e) || r && !Hm(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a
      }
      class Vm {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new zm({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && Hm(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach((e => r && r.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new Vm;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new zm({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class zm {
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
      new Vm;
      const Fm = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        Um = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Gm(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return Fm.has(t.script)
        }
        let t = e.split("-")[0];
        return Um.has(t)
      }
      const qm = Symbol.for("react-aria.i18n.locale");

      function Xm() {
        let e = "undefined" != typeof window && window[qm] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Gm(e) ? "rtl" : "ltr"
        }
      }
      let Km = Xm(),
        Wm = new Set;

      function $m() {
        Km = Xm();
        for (let e of Wm) e(Km)
      }
      const Ym = h.createContext(null);

      function Zm() {
        let e = function() {
          let e = le(),
            [t, r] = (0, h.useState)(Km);
          return (0, h.useEffect)((() => (0 === Wm.size && window.addEventListener("languagechange", $m), Wm.add(r), () => {
            Wm.delete(r), 0 === Wm.size && window.removeEventListener("languagechange", $m)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, h.useContext)(Ym) || e
      }

      function Qm(e, t) {
        let {
          name: r,
          isReadOnly: n,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: s = "aria"
        } = e, {
          direction: l
        } = Zm(), {
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
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, i = (0, h.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: a,
            removeAllGlobalListeners: s
          } = Ht(), l = (0, h.useCallback)((e => {
            e.currentTarget.contains(e.target) && i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, s(), r && r(e), o && o(!1))
          }), [r, o, i, s]), c = Oe(l), u = (0, h.useCallback)((e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = Z(e.target),
              r = rt(t);
            if (!i.current.isFocusWithin && r === nt(e.nativeEvent)) {
              n && n(e), o && o(!0), i.current.isFocusWithin = !0, c(e);
              let r = e.currentTarget;
              a(t, "focus", (e => {
                if (i.current.isFocusWithin && !tt(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  Te(n, r);
                  let o = Ce(n);
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
        }), b = he(r);
        return Am.set(t, {
          name: b,
          descriptionId: m.id,
          errorMessageId: g.id,
          validationBehavior: s
        }), {
          radioGroupProps: me(v, {
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
              let n, o = Bm(e.currentTarget, {
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
      let Jm = Math.round(1e10 * Math.random()),
        eg = 0;

      function tg(e) {
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

      function rg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function ng(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? rg(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = tg(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rg(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function og(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ig = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ag = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ng(ng({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ig(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return og(e.variantClassNames, (e => og(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        sg = ag({
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
      const lg = (0, h.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        cg = (0, h.forwardRef)((({
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
          } = m, y = (0, h.useRef)(null), b = (0, F.UP)(y, g), _ = (0, h.useId)(), x = function(e) {
            let t = (0, h.useMemo)((() => e.name || `radio-group-${Jm}-${++eg}`), [e.name]);
            var r;
            let [n, o] = ge(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [i, a] = (0, h.useState)(null), s = bt({
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
            state: x,
            size: r,
            appearance: n
          }, {
            radioGroupProps: E,
            labelProps: P,
            descriptionProps: S,
            isInvalid: C,
            errorMessageProps: T
          } = Qm({
            ...m,
            id: m.id || _,
            label: e,
            isRequired: i,
            description: t,
            orientation: f
          }, x), O = (0, d.mergeProps)({
            ...E,
            className: l
          }, {
            className: "foundry_hcgxh_njguqn0",
            "aria-errormessage": T?.id
          }), j = C && !!c;
          return (0, u.jsxs)("div", {
            ref: b,
            "data-testid": s,
            ...O,
            children: [(0, u.jsx)(p.s6, {
              enabled: !!o,
              children: (0, u.jsxs)("div", {
                className: "foundry_hcgxh_njguqn7",
                children: [(0, u.jsx)(B, {
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
                }), t && (0, u.jsx)(B, {
                  size: "XS",
                  ...S,
                  className: "foundry_hcgxh_njguqna foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                  children: t
                })]
              })
            }), (0, u.jsx)("div", {
              className: sg({
                size: r,
                orientation: f
              }),
              children: (0, u.jsx)(lg.Provider, {
                value: w,
                children: v
              })
            }), j && (0, u.jsxs)(B, {
              size: "SM",
              appearance: "bold",
              ...T,
              className: "foundry_hcgxh_njguqnb",
              children: [(0, u.jsx)(V.X, {
                size: "MD",
                label: "",
                className: "foundry_hcgxh_njguqnc"
              }), c]
            })]
          })
        })),
        ug = ({
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
        dg = ({
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
        hg = ({
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
      var fg = ag({
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
        pg = ag({
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
        mg = ag({
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
        gg = ag({
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
      const vg = (0, h.forwardRef)((({
        label: e,
        description: t,
        hideLabel: r,
        testId: n,
        className: i,
        ...a
      }, s) => {
        const l = (0, h.useRef)(null),
          c = (0, F.UP)(l, s),
          d = (0, h.useId)(),
          f = (0, h.useContext)(lg),
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
                  t.setSelectedValue(n), null === (e = r.current) || void 0 === e || e.focus()
                }
              }),
              {
                focusableProps: f
              } = dt(me(e, {
                onFocus: () => t.setLastFocusedValue(n)
              }), r),
              p = me(c, f),
              m = K(e, {
                labelable: !0
              }),
              g = -1;
            null != t.selectedValue ? t.selectedValue === n && (g = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (g = 0), s && (g = void 0);
            let {
              name: v,
              descriptionId: y,
              errorMessageId: b,
              validationBehavior: _
            } = Am.get(t);
            return Y(r, t.selectedValue, t.setSelectedValue), ht({
              validationBehavior: _
            }, t, r), {
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
          x = o[`Dot${v}`];
        return (0, u.jsxs)("label", {
          className: (0, I.$)("foundry_hcgxh_1pfduet0", i),
          children: [(0, u.jsxs)("div", {
            className: mg({
              size: v
            }),
            children: [(0, u.jsx)(p.s6, {
              children: (0, u.jsx)("input", {
                ...y,
                ref: c,
                className: "foundry_hcgxh_1pfduet1"
              })
            }), (0, u.jsx)("div", {
              className: pg({
                appearance: g
              }),
              "aria-hidden": "true",
              "data-state": b ? "checked" : "unchecked",
              "data-disabled": _,
              "data-testid": n,
              children: (0, u.jsx)("span", {
                className: "foundry_hcgxh_1pfduet9",
                children: b && (0, u.jsx)(x, {})
              })
            })]
          }), (0, u.jsx)(p.s6, {
            enabled: !!r,
            children: (0, u.jsxs)("div", {
              className: gg({
                size: v
              }),
              children: [(0, u.jsx)("p", {
                className: fg({
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

      function yg(e) {
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

      function bg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function _g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? bg(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = yg(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bg(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function xg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var wg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Eg = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _g(_g({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) wg(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xg(e.variantClassNames, (e => xg(e, (e => e.split(" ")[0]))))
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
      const Pg = (0, h.forwardRef)((({
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
            className: (0, I.$)(Eg({
              thickness: r,
              orientation: t
            }), e),
            role: c,
            "aria-orientation": t,
            "data-testid": i,
            ...a
          })
        })),
        Sg = ({
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
        Cg = ({
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
        Tg = ({
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

      function Og(e) {
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

      function jg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Ng(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jg(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Og(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jg(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Lg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ig = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        kg = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ng(Ng({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ig(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Lg(e.variantClassNames, (e => Lg(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Rg = kg({
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
        Mg = kg({
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
        Ag = kg({
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
        Dg = kg({
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
        Hg = kg({
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
        Bg = kg({
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
      const Vg = (0, h.forwardRef)((({
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
          g = (0, F.UP)(m, f),
          v = (0, h.useId)(),
          y = Em(d),
          {
            inputProps: b,
            isDisabled: _,
            isReadOnly: x,
            isSelected: w
          } = function(e, t, r) {
            let {
              labelProps: n,
              inputProps: o,
              isSelected: i,
              isPressed: a,
              isDisabled: s,
              isReadOnly: l
            } = Pm(e, t, r);
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
          E = i ? z[i] : Tg,
          P = a ? z[a] : Cg;
        return (0, u.jsxs)("label", {
          className: (0, I.$)("foundry_hcgxh_okz6z20", c),
          children: [(0, u.jsxs)("div", {
            className: Hg({
              appearance: n
            }),
            "data-state": w ? "selected" : "unselected",
            "data-disabled": _ || x,
            "data-testid": l,
            children: [(0, u.jsx)(p.s6, {
              children: (0, u.jsx)("input", {
                ...b,
                ref: g
              })
            }), (0, u.jsxs)("div", {
              className: Dg({
                size: r
              }),
              "aria-hidden": "true",
              children: [(0, u.jsx)("div", {
                className: Rg({
                  size: r,
                  isSelected: w
                }),
                children: (0, u.jsx)(Sg, {})
              }), o && (0, u.jsxs)(u.Fragment, {
                children: [(0, u.jsx)("div", {
                  className: Mg({
                    size: r,
                    isSelected: w,
                    position: "left"
                  }),
                  children: (0, u.jsx)(E, {
                    label: ""
                  })
                }), (0, u.jsx)("div", {
                  className: Mg({
                    size: r,
                    isSelected: w,
                    position: "right"
                  }),
                  children: (0, u.jsx)(P, {
                    label: ""
                  })
                })]
              })]
            })]
          }), (0, u.jsx)(p.s6, {
            enabled: !!s,
            children: (0, u.jsxs)("div", {
              className: Bg({
                size: r,
                isDisabled: _
              }),
              children: [(0, u.jsx)("p", {
                className: Ag({
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
      Vg.displayName = "Switch";
      const zg = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? p.DX : "h1",
          i = (0, d.mergeProps)({
            className: "foundry_hcgxh_1pi1yv40 foundry_hcgxh_tdsdcd1 foundry_hcgxh_tdsdcd0"
          }, r);
        return (0, u.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...i
        })
      }));

      function Fg(e) {
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

      function Ug(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Gg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ug(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Fg(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ug(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function qg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Xg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Kg = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Gg(Gg({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Xg(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qg(e.variantClassNames, (e => qg(e, (e => e.split(" ")[0]))))
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
      const Wg = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const a = e ? p.DX : "p",
          s = (0, d.mergeProps)({
            className: Kg({
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

      function $g(e) {
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

      function Yg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Zg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yg(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = $g(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yg(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Qg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Jg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ev = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Zg(Zg({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Jg(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qg(e.variantClassNames, (e => Qg(e, (e => e.split(" ")[0]))))
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
      const tv = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const i = e ? p.DX : "p",
          a = (0, d.mergeProps)({
            className: ev({
              appearance: r
            })
          }, n);
        return (0, u.jsx)(i, {
          ref: o,
          "data-testid": t,
          ...a
        })
      }));
      var rv = r(97249);

      function nv(e, t) {
        var r = {};
        if ("object" == typeof t) {
          var n = e;
          (0, rv.Bx)(t, ((e, t) => {
            if (null != e) {
              var o = (0, rv.Jt)(n, t);
              r[(0, rv.Tm)(o)] = String(e)
            }
          }))
        } else {
          var o = e;
          for (var i in o) {
            var a = o[i];
            null != a && (r[(0, rv.Tm)(i)] = a)
          }
        }
        return Object.defineProperty(r, "toString", {
          value: function() {
            return Object.keys(this).map((e => "".concat(e, ":").concat(this[e]))).join(";")
          },
          writable: !1
        }), r
      }

      function ov(e) {
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

      function iv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function av(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? iv(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ov(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : iv(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function sv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      r(49639);
      var lv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        cv = "var(--foundry_hcgxh_9dxgbc2)",
        uv = "var(--foundry_hcgxh_9dxgbc3)",
        dv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = av(av({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) lv(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sv(e.variantClassNames, (e => sv(e, (e => e.split(" ")[0]))))
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
        hv = "var(--foundry_hcgxh_9dxgbc0)",
        fv = "var(--foundry_hcgxh_9dxgbc1)";
      const pv = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: i = "MD",
        ...a
      }, s) => {
        const l = (0, tr.zQ)(),
          c = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
          h = (0, d.mergeProps)({
            className: dv({
              size: c
            }),
            "data-testid": t,
            style: nv({
              [hv]: n?.pulseColorBackground,
              [fv]: n?.pulseColorForeground,
              [cv]: n?.gradientColorBackground,
              [uv]: n?.gradientColorForeground
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

      function mv(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function gv(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return mv(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? mv(e, t) : void 0
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

      function vv(e, t, r) {
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

      function yv(e) {
        return yv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, yv(e)
      }

      function bv() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (bv = function() {
          return !!e
        })()
      }

      function _v(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function xv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _v(Object(r), !0).forEach((function(t) {
            vv(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _v(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function wv(e, t) {
        return wv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, wv(e, t)
      }

      function Ev(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          a = n,
          s = "",
          l = gv(e);
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

      function Pv(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          i = t.separate,
          a = t.showMask,
          s = 0,
          l = "",
          c = gv(n);
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

      function Sv(e, t) {
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

      function Cv(e) {
        return e.length > 0 ? vv({}, e, /./) : {}
      }

      function Tv(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, i = t.mask, a = t.replacement, s = t.separate, l = e.slice(n, o), c = i.slice(n, o), u = "", d = 0; d < c.length; d++) {
          var h = Object.prototype.hasOwnProperty.call(a, c[d]);
          h && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : h && s && (u += c[d])
        }
        return u
      }

      function Ov(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? Cv(n) : n,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return Pv(Ev(e, {
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
      var jv = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function Nv(e) {
        return jv.includes(e) ? "\\".concat(e) : e
      }

      function Lv(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function Iv(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function kv(e, t, r) {
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

      function Rv(e) {
        return Rv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Rv(e)
      }

      function Mv() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (Mv = function() {
          return !!e
        })()
      }

      function Av(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Dv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Av(Object(r), !0).forEach((function(t) {
            kv(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Av(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Hv(e, t) {
        return Hv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Hv(e, t)
      }

      function Bv(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return Bv = function(e) {
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
              if (Mv()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && Hv(o, r.prototype), o
            }(e, arguments, Rv(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), Hv(r, e)
        }, Bv(e)
      }
      var Vv, zv = function(e) {
          function t(e) {
            var r;
            return Lv(this, t), (r = function(e, t, r) {
              return t = Rv(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, Mv() ? Reflect.construct(t, r || [], Rv(e).constructor) : t.apply(e, r))
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
            }), t && Hv(e, t)
          }(t, e), Iv(t)
        }(Bv(Error)),
        Fv = ["options"],
        Uv = ["text", "email", "tel", "search", "url"],
        Gv = Iv((function e(t) {
          var r = t.init,
            n = t.tracking;
          Lv(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (Uv.includes(e.type)) {
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
              Object.defineProperty(e, "value", Dv(Dv({}, g), {}, {
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
                    if (p.cachedId === p.id) throw new zv("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      a = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === a || null === s) throw new zv("The selection attributes have not been initialized.");
                    var l, c = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = c.length), a > m.selectionStart ? l = "insert" : a <= m.selectionStart && a < m.selectionEnd ? l = "deleteBackward" : a === m.selectionEnd && i.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > c.length) throw new zv("Input type detection error.");
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
                      }(y, Fv);
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
      Vv = Gv, Object.defineProperty(Vv.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var qv, Xv = ["track", "modify"];

      function Kv(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? Cv(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var Wv = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = yv(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, bv() ? Reflect.construct(t, r || [], yv(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = Kv(r),
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
                l = Kv(r),
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
                }(l, Xv),
                h = d.mask,
                f = d.replacement,
                p = d.showMask,
                m = d.separate,
                g = xv(xv({}, "insert" === t ? {
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
              if (!1 === v) throw new zv("Custom tracking stop.");
              null === v ? i = "" : !0 !== v && void 0 !== v && (i = v);
              var y = null == u ? void 0 : u(g);
              void 0 !== (null == y ? void 0 : y.mask) && (h = y.mask), void 0 !== (null == y ? void 0 : y.replacement) && (f = "string" == typeof(null == y ? void 0 : y.replacement) ? Cv(null == y ? void 0 : y.replacement) : y.replacement), void 0 !== (null == y ? void 0 : y.showMask) && (p = y.showMask), void 0 !== (null == y ? void 0 : y.separate) && (m = y.separate);
              var b = Tv(n, xv({
                  end: a
                }, o)),
                _ = Tv(n, xv({
                  start: s
                }, o)),
                x = RegExp("[^".concat(Object.keys(f).join(""), "]"), "g"),
                w = h.replace(x, "");
              if (b && (b = Ev(b, {
                  replacementChars: w,
                  replacement: f,
                  separate: m
                }), w = w.slice(b.length)), i && (i = Ev(i, {
                  replacementChars: w,
                  replacement: f,
                  separate: !1
                }), w = w.slice(i.length)), "insert" === t && "" === i) throw new zv("The character does not match the key value of the `replacement` object.");
              if (m) {
                var E = h.slice(a, s).replace(x, ""),
                  P = E.length - i.length;
                P < 0 ? _ = _.slice(-P) : P > 0 && (_ = E.slice(-P) + _)
              }
              _ && (_ = Ev(_, {
                replacementChars: w,
                replacement: f,
                separate: m
              }));
              var S = Pv(b + i + _, {
                  mask: h,
                  replacement: f,
                  separate: m,
                  showMask: p
                }),
                C = function(e) {
                  var t, r, n, o = e.inputType,
                    i = e.value,
                    a = e.addedValue,
                    s = e.beforeChangeValue,
                    l = e.replacement,
                    c = e.separate,
                    u = Sv(i, {
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
            return Ov(e, Kv(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Cv(n) : n;
              return Sv(Ov(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, Kv(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Cv(n) : n,
                i = Tv(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return Ev(i, {
                replacementChars: r.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, Kv(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? Cv(n) : n, i = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, s = "", l = 0; l < r.length; l++) {
                var c = r[l];
                0 === l && (s = "^"), i && (s += "("), s += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(a ? "(?!".concat(Nv(c), ")") : "", "(").concat(o[c].source, ")") : Nv(c), l === r.length - 1 && (i && (s += ")?".repeat(r.length)), s += "$")
              }
              return s
            }(e, Kv(r))
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
            }), t && wv(e, t)
          }(e, Gv),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function $v(e) {
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

      function Yv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Zv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yv(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = $v(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yv(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Qv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      qv = Wv, Object.defineProperty(qv.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var Jv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ey = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Zv(Zv({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Jv(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qv(e.variantClassNames, (e => Qv(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        ty = "foundry_hcgxh_8oytzos",
        ry = ey({
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
        ny = ey({
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
        oy = ey({
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
        iy = ey({
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
        ay = ey({
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
        sy = ey({
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
      const ly = (e, t, r) => {
          const n = [];
          return e && n.push(e), t && n.push(t), r && n.push(r), n.join(" ")
        },
        cy = (0, h.createContext)(null);

      function uy() {
        const e = (0, h.useContext)(cy);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const dy = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          isInvalid: a = !1,
          ...s
        }, l) => {
          const [c, f] = (0, h.useState)("text"), m = (0, h.useId)(), g = (0, h.useId)(), v = (0, h.useId)(), y = (0, h.useId)(), b = (0, d.mergeProps)({
            "data-testid": r,
            className: "foundry_hcgxh_8oytzo3"
          }, s), _ = e ? p.DX : "div";
          return (0, u.jsx)(cy.Provider, {
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
        hy = (0, h.forwardRef)((({
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
          } = uy(), f = (0, d.mergeProps)({
            id: i.id || h,
            htmlFor: i.htmlFor || c,
            "data-testid": e,
            className: sy({
              isDisabled: s
            })
          }, i), m = t ? p.DX : "label";
          return (0, u.jsx)(p.s6, {
            enabled: n,
            children: (0, u.jsx)(B, {
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
        fy = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = uy(), a = (0, d.mergeProps)({
            "data-testid": e,
            className: oy({
              isDisabled: i
            })
          }, n), s = t ? p.DX : "span";
          return (0, u.jsx)(B, {
            size: "XS",
            asChild: !0,
            children: (0, u.jsx)(s, {
              ref: o,
              ...a,
              children: r
            })
          })
        })),
        py = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: a,
            isInvalid: s
          } = uy(), l = (0, d.mergeProps)({
            "data-testid": e,
            className: (0, I.$)(ry({
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
        my = (0, h.forwardRef)((({
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
            isInvalid: x,
            errorId: w,
            inputType: E,
            setInputType: P
          } = uy();
          (0, h.useEffect)((() => P(o ?? "text")), []);
          const S = (0, d.mergeProps)({
              disabled: m,
              readOnly: g,
              required: v,
              id: b,
              type: E,
              spellCheck: !1,
              "aria-labelledby": ly(y, r),
              "aria-describedby": ly(_, n, x ? w : void 0),
              "data-testid": e,
              className: (0, I.$)(ay({
                isDisabled: m,
                isReadOnly: g
              }), "foundry_hcgxh_8oytzo2"),
              ...x && {
                "aria-invalid": !0,
                "aria-errormessage": w
              },
              ...m && {
                "aria-disabled": !0
              },
              ...v && {
                "aria-required": !0
              }
            }, c),
            C = function() {
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
                }(s, new Wv(l.current))
              }), [])
            }({
              mask: i,
              replacement: a,
              showMask: s,
              track: l
            }),
            T = (0, F.UP)(i && a ? C : null, f),
            O = t ? p.DX : "input";
          return (0, u.jsx)(O, {
            ref: T,
            ...S
          })
        })),
        gy = (0, h.forwardRef)((({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, i) => {
          const {
            isDisabled: a
          } = uy(), s = (0, d.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, I.$)(iy({
              side: n,
              isDisabled: a
            }), "foundry_hcgxh_8oytzo0")
          }, o), l = t ? p.DX : z[e];
          return (0, u.jsx)(l, {
            ref: i,
            ...s
          })
        })),
        vy = (0, h.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = uy(), n = (0, d.mergeProps)({
            isDisabled: r,
            size: "SM",
            appearance: "ghost",
            className: ty
          }, e);
          return (0, u.jsx)(nh, {
            ref: t,
            ...n
          })
        })),
        yy = (0, h.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: r,
            inputType: n,
            setInputType: o
          } = uy(), i = "password" === n, a = i ? "Reveal Password" : "Hide Password", s = (0, d.mergeProps)({
            isDisabled: r,
            size: "SM",
            appearance: "ghost",
            className: ty,
            label: a,
            icon: i ? "Eye" : "EyeOff",
            onPress: () => {
              o(i ? "text" : "password")
            }
          }, e);
          return (0, u.jsx)(tf, {
            side: "bottom",
            portal: !1,
            align: "end",
            content: (0, u.jsx)(B, {
              size: "SM",
              children: a
            }),
            children: (0, u.jsx)(nh, {
              ref: t,
              ...s
            })
          })
        })),
        by = (0, h.forwardRef)((({
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
          } = uy(), f = (0, d.mergeProps)({
            id: c,
            asChild: !0,
            "data-testid": e,
            className: ny({
              isDisabled: s
            })
          }, i), m = t ? p.DX : "p", g = V.X;
          return (0, u.jsxs)("div", {
            className: "foundry_hcgxh_8oytzot",
            children: [(0, u.jsx)(p.s6, {
              enabled: n || l,
              children: (0, u.jsx)(B, {
                size: "SM",
                ref: a,
                ...f,
                children: (0, u.jsx)(m, {
                  children: r
                })
              })
            }), l && o && (0, u.jsxs)(B, {
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

      function _y(e, t) {
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
        } = dt(e, t), {
          pressProps: d,
          isPressed: h
        } = Kt({
          onPress: n,
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
          linkProps: me(f, Ft(e), {
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

      function xy(e) {
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

      function wy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Ey(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wy(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = xy(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wy(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Py(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Sy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Cy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ey(Ey({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Sy(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Py(e.variantClassNames, (e => Py(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Ty = Cy({
          defaultClassName: "foundry_hcgxh_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_hcgxh_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Oy = Cy({
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
        jy = Cy({
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
      const Ny = (0, h.createContext)(null);

      function Ly() {
        const e = (0, h.useContext)(Ny);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Iy = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, i) => {
          const a = e ? p.DX : "div",
            s = (0, d.mergeProps)(o, {
              className: jy({
                status: r,
                background: n
              })
            });
          return (0, u.jsx)(Ny.Provider, {
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
        ky = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? p.DX : "div",
            i = (0, d.mergeProps)(r, {
              className: "foundry_hcgxh_1m368qha"
            });
          return (0, u.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        Ry = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? p.DX : "div",
            i = (0, d.mergeProps)(r, {
              className: "foundry_hcgxh_1m368qhb"
            });
          return (0, u.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        My = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Ay = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const {
            status: n
          } = Ly(), o = e || My[n], i = z[o], a = (0, d.mergeProps)(t, {
            className: Oy({
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
        Dy = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? p.DX : "div",
            i = (0, d.mergeProps)(r, {
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
        Hy = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? p.DX : "div",
            i = (0, d.mergeProps)(r, {
              className: "foundry_hcgxh_1m368qhj"
            });
          return (0, u.jsx)(B, {
            size: "SM",
            asChild: !0,
            children: (0, u.jsx)(o, {
              ref: n,
              "data-testid": t,
              ...i
            })
          })
        })),
        By = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, h.useRef)(null),
            a = (0, F.UP)(i, o),
            s = e ? p.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = _y(n, i),
            f = (0, d.mergeProps)(l, {
              className: "foundry_hcgxh_1m368qhk foundry_hcgxh_1d5mo5m0"
            });
          return (0, u.jsx)(B, {
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
        Vy = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? p.DX : "div",
            a = (0, d.mergeProps)(n, {
              className: "foundry_hcgxh_1m368qhl"
            });
          return (0, u.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        })),
        zy = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const i = e ? p.DX : "div";
          return (0, u.jsx)(B, {
            size: "SM",
            asChild: !0,
            children: (0, u.jsx)(i, {
              ref: o,
              "data-testid": t,
              className: (0, I.$)(r, "foundry_hcgxh_1m368qho"),
              ...n
            })
          })
        })),
        Fy = (0, h.forwardRef)((({
          testId: e,
          label: t = "close alert",
          ...r
        }, n) => {
          const {
            background: o
          } = Ly(), i = (0, d.mergeProps)(r, {
            className: Ty({
              hasBackground: "none" !== o
            })
          });
          return (0, u.jsx)(nh, {
            ref: n,
            label: t,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "XS",
            ...i
          })
        }));

      function Uy(e) {
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

      function Gy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function qy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Gy(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Uy(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gy(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Xy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ky = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Wy = "foundry_hcgxh_qmpv6yt",
        $y = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qy(qy({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ky(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Xy(e.variantClassNames, (e => Xy(e, (e => e.split(" ")[0]))))
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

      function Yy(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function Zy(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every((r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : Yy(n) && Yy(o) ? Zy(n, o) : n === o
        })))
      }

      function Qy(e) {
        return e.concat().sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => e.options))
      }

      function Jy(e) {
        return "number" == typeof e
      }

      function eb(e) {
        return "string" == typeof e
      }

      function tb(e) {
        return "boolean" == typeof e
      }

      function rb(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function nb(e) {
        return Math.abs(e)
      }

      function ob(e) {
        return Math.sign(e)
      }

      function ib(e, t) {
        return nb(e - t)
      }

      function ab(e) {
        return db(e).map(Number)
      }

      function sb(e) {
        return e[lb(e)]
      }

      function lb(e) {
        return Math.max(0, e.length - 1)
      }

      function cb(e, t) {
        return t === lb(e)
      }

      function ub(e, t = 0) {
        return Array.from(Array(e), ((e, r) => t + r))
      }

      function db(e) {
        return Object.keys(e)
      }

      function hb(e, t) {
        return [e, t].reduce(((e, t) => (db(t).forEach((r => {
          const n = e[r],
            o = t[r],
            i = rb(n) && rb(o);
          e[r] = i ? hb(n, o) : o
        })), e)), {})
      }

      function fb(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function pb() {
        let e = [];
        const t = {
          add: function(r, n, o, i = {
            passive: !0
          }) {
            let a;
            if ("addEventListener" in r) r.addEventListener(n, o, i), a = () => r.removeEventListener(n, o, i);
            else {
              const e = r;
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

      function mb(e = 0, t = 0) {
        const r = nb(e - t);

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

      function gb(e, t, r) {
        const {
          constrain: n
        } = mb(0, e), o = e + 1;
        let i = a(t);

        function a(e) {
          return r ? nb((o + e) % o) : n(e)
        }

        function s() {
          return i
        }

        function l() {
          return gb(e, s(), r)
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

      function vb(e, t, r, n, o, i, a, s, l, c, u, d, h, f, p, m, g, v, y) {
        const {
          cross: b,
          direction: _
        } = e, x = ["INPUT", "SELECT", "TEXTAREA"], w = {
          passive: !1
        }, E = pb(), P = pb(), S = mb(50, 225).constrain(f.measure(20)), C = {
          mouse: 300,
          touch: 400
        }, T = {
          mouse: 500,
          touch: 600
        }, O = p ? 43 : 25;
        let j = !1,
          N = 0,
          L = 0,
          I = !1,
          k = !1,
          R = !1,
          M = !1;

        function A(e) {
          if (!fb(e, n) && e.touches.length >= 2) return D(e);
          const t = i.readPoint(e),
            r = i.readPoint(e, b),
            a = ib(t, N),
            l = ib(r, L);
          if (!k && !M) {
            if (!e.cancelable) return D(e);
            if (k = a > l, !k) return D(e)
          }
          const u = i.pointerMove(e);
          a > m && (R = !0), c.useFriction(.3).useDuration(.75), s.start(), o.add(_(u)), e.preventDefault()
        }

        function D(e) {
          const t = u.byDistance(0, !1).index !== d.get(),
            r = i.pointerUp(e) * (p ? T : C)[M ? "mouse" : "touch"],
            n = function(e, t) {
              const r = d.add(-1 * ob(e)),
                n = u.byDistance(e, !p).distance;
              return p || nb(e) < S ? n : g && t ? .5 * n : u.byIndex(r.get(), 0).distance
            }(_(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (nb(e) <= nb(t)) return 0;
              const r = ib(nb(e), nb(t));
              return nb(r / e)
            }(r, n),
            a = O - 10 * o,
            s = v + o / 50;
          k = !1, I = !1, P.clear(), c.useDuration(a).useFriction(s), l.distance(n, !p), M = !1, h.emit("pointerUp")
        }

        function H(e) {
          R && (e.stopPropagation(), e.preventDefault(), R = !1)
        }
        return {
          init: function(e) {
            if (!y) return;

            function s(s) {
              (tb(y) || y(e, s)) && function(e) {
                const s = fb(e, n);
                M = s, R = p && s && !e.buttons && j, j = ib(o.get(), a.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return x.includes(t)
                }(e.target) || (I = !0, i.pointerDown(e), c.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = M ? r : t;
                  P.add(e, "touchmove", A, w).add(e, "touchend", D).add(e, "mousemove", A, w).add(e, "mouseup", D)
                }(), N = i.readPoint(e), L = i.readPoint(e, b), h.emit("pointerDown"))
              }(s)
            }
            const l = t;
            E.add(l, "dragstart", (e => e.preventDefault()), w).add(l, "touchmove", (() => {}), w).add(l, "touchend", (() => {})).add(l, "touchstart", s).add(l, "mousedown", s).add(l, "touchcancel", D).add(l, "contextmenu", D).add(l, "click", H, !0)
          },
          destroy: function() {
            E.clear(), P.clear()
          },
          pointerDown: function() {
            return I
          }
        }
      }

      function yb(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function i(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (fb(r, t) ? r : r.touches[0])[o]
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
            return a && !s && nb(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function bb(e, t, r, n, o, i, a) {
        const s = [e].concat(n);
        let l, c, u = [],
          d = !1;

        function h(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            i && (c = h(e), u = n.map(h), l = new ResizeObserver((r => {
              (tb(i) || i(o, r)) && function(r) {
                for (const i of r) {
                  if (d) return;
                  const r = i.target === e,
                    a = n.indexOf(i.target),
                    s = r ? c : u[a];
                  if (nb(h(r ? e : n[a]) - s) >= .5) {
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

      function _b(e, t, r, n, o) {
        const i = o.measure(10),
          a = o.measure(50),
          s = mb(.1, .99);
        let l = !1;

        function c() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(o) {
            if (!c()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              u = nb(e[l] - t.get()),
              d = r.get() - t.get(),
              h = s.constrain(u / a);
            r.subtract(d * h), !o && nb(d) < i && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function xb(e, t, r, n) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: a,
            reachedMax: s
          } = mb(o, i),
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

      function wb(e) {
        let t = e;

        function r(e) {
          return Jy(e) ? e : e.get()
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

      function Eb(e, t) {
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

      function Pb(e, t, r, n, o, i, a, s, l) {
        const c = ab(o),
          u = ab(o).reverse(),
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
              slideLocation: wb(-1),
              translate: Eb(e, l[t]),
              target: () => s.get() > a ? n : o
            }
          }))
        }
        const m = {
          canLoop: function() {
            return d.every((({
              index: e
            }) => {
              const r = c.filter((t => t !== e));
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

      function Sb(e, t, r) {
        let n, o = !1;
        return {
          init: function(i) {
            r && (n = new MutationObserver((e => {
              o || (tb(r) || r(i, e)) && function(e) {
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

      function Cb(e, t, r, n, o, i, a) {
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
          watchDrag: x,
          watchFocus: w
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
        }, P = E.measure(t), S = r.map(E.measure), C = function(e, t) {
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
        }(l, c), T = C.measureSize(P), O = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(T), j = function(e, t) {
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
              return eb(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(s, T), N = !d && !!y, L = d || !!y, {
          slideSizes: I,
          slideSizesWithGaps: k,
          startGap: R,
          endGap: M
        } = function(e, t, r, n, o, i) {
          const {
            measureSize: a,
            startEdge: s,
            endEdge: l
          } = e, c = r[0] && o, u = function() {
            if (!c) return 0;
            const e = r[0];
            return nb(t[s] - e[s])
          }(), d = function() {
            if (!c) return 0;
            const e = i.getComputedStyle(sb(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), h = r.map(a), f = r.map(((e, t, r) => {
            const n = !t,
              o = cb(r, t);
            return n ? h[t] + u : o ? h[t] + d : r[t + 1][s] - e[s]
          })).map(nb);
          return {
            slideSizes: h,
            slideSizesWithGaps: f,
            startGap: u,
            endGap: d
          }
        }(C, P, S, r, L, o), A = function(e, t, r, n, o, i, a, s, l) {
          const {
            startEdge: c,
            endEdge: u,
            direction: d
          } = e, h = Jy(r), f = {
            groupSlides: function(e) {
              return h ? function(e, t) {
                return ab(e).filter((e => e % t == 0)).map((r => e.slice(r, r + t)))
              }(e, r) : function(e) {
                return e.length ? ab(e).reduce(((r, h, f) => {
                  const p = sb(r) || 0,
                    m = 0 === p,
                    g = h === lb(e),
                    v = o[c] - i[p][c],
                    y = o[c] - i[h][u],
                    b = !n && m ? d(a) : 0,
                    _ = nb(y - (!n && g ? d(s) : 0) - (v + b));
                  return f && _ > t + l && r.push(h), g && r.push(e.length), r
                }), []).map(((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                })) : []
              }(e)
            }
          };
          return f
        }(C, T, g, d, P, S, R, M, 2), {
          snaps: D,
          snapsAligned: H
        } = function(e, t, r, n, o) {
          const {
            startEdge: i,
            endEdge: a
          } = e, {
            groupSlides: s
          } = o, l = s(n).map((e => sb(e)[a] - e[0][i])).map(nb).map(t.measure), c = n.map((e => r[i] - e[i])).map((e => -nb(e))), u = s(c).map((e => e[0])).map(((e, t) => e + l[t]));
          return {
            snaps: c,
            snapsAligned: u
          }
        }(C, j, P, S, A), B = -sb(D) + sb(k), {
          snapsContained: V,
          scrollContainLimit: z
        } = function(e, t, r, n) {
          const o = mb(-t + e, 0),
            i = r.map(((e, t) => {
              const {
                min: n,
                max: i
              } = o, a = o.constrain(e), l = !t, c = cb(r, t);
              return l ? i : c || s(n, a) ? n : s(i, a) ? i : a
            })).map((e => parseFloat(e.toFixed(3)))),
            a = function() {
              const e = i[0],
                t = sb(i);
              return mb(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function s(e, t) {
            return ib(e, t) <= 1
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
        }(T, B, H, y), F = N ? V : H, {
          limit: U
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: mb(r ? n - e : sb(t), n)
          }
        }(B, F, d), G = gb(lb(F), u, d), q = G.clone(), X = ab(r), K = function(e, t, r, n) {
          const o = pb(),
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
        }(n, o, (() => (({
          dragHandler: e,
          scrollBody: t,
          scrollBounds: r,
          options: {
            loop: n
          }
        }) => {
          n || r.constrain(e.pointerDown()), t.seek()
        })(se)), (e => (({
          scrollBody: e,
          translate: t,
          location: r,
          offsetLocation: n,
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
          const v = r.get() * h + o.get() * (1 - h);
          n.set(v), d && (i.loop(e.direction()), a.loop()), t.to(n.get()), g && c.emit("settle"), m || c.emit("scroll")
        })(se, e))), W = F[G.get()], $ = wb(W), Y = wb(W), Z = wb(W), Q = wb(W), J = function(e, t, r, n, o) {
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
              return s ? (r.set(e), i += t / s, i *= l, c += i, e.add(i), o = c - u) : (i = 0, r.set(n), e.set(n), o = t), a = ob(o), u = c, f
            },
            settled: function() {
              return nb(n.get() - t.get()) < .001
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
            return e.concat().sort(((e, t) => nb(e) - nb(t)))[0]
          }

          function c(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const i = o.filter((e => ob(e) === n));
            return i.length ? l(i) : sb(o) - r
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
                    }))).sort(((e, t) => nb(e.diff) - nb(t.diff))),
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
        }(d, F, B, U, Q), te = function(e, t, r, n, o, i, a) {
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
        }(K, G, q, J, ee, Q, a), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(U), ne = pb(), oe = function(e, t, r, n) {
          const o = {};
          let i, a = null,
            s = null,
            l = !1;
          return {
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
            get: function(e = !0) {
              if (e && a) return a;
              if (!e && s) return s;
              const t = function(e) {
                return db(o).reduce(((t, r) => {
                  const n = parseInt(r),
                    {
                      isIntersecting: i
                    } = o[n];
                  return (e && i || !e && !i) && t.push(n), t
                }), [])
              }(e);
              return e && (a = t), e || (s = t), t
            }
          }
        }(t, r, a, m), {
          slideRegistry: ie
        } = function(e, t, r, n, o, i) {
          const {
            groupSlides: a
          } = o, {
            min: s,
            max: l
          } = n;
          return {
            slideRegistry: function() {
              const n = a(i),
                o = !e || "keepSnaps" === t;
              return 1 === r.length ? [i] : o ? n : n.slice(s, l).map(((e, t, r) => {
                const n = !t,
                  o = cb(r, t);
                return n ? ub(sb(r[0]) + 1) : o ? ub(lb(i) - sb(r)[0] + 1, sb(r)[0]) : e
              }))
            }()
          }
        }(N, y, F, z, A, X), ae = function(e, t, r, n, o, i, a, s) {
          const l = {
            passive: !0,
            capture: !0
          };
          let c = 0;

          function u(e) {
            "Tab" === e.code && (c = (new Date).getTime())
          }
          return {
            init: function(d) {
              s && (i.add(document, "keydown", u, !1), t.forEach(((t, u) => {
                i.add(t, "focus", (t => {
                  (tb(s) || s(d, t)) && function(t) {
                    if ((new Date).getTime() - c > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = r.findIndex((e => e.includes(t)));
                    Jy(i) && (o.useDuration(0), n.index(i, 0), a.emit("slideFocus"))
                  }(u)
                }), l)
              })))
            }
          }
        }(e, r, ie, te, J, ne, a, w), se = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: a,
          containerRect: P,
          slideRects: S,
          animation: K,
          axis: C,
          dragHandler: vb(C, e, n, o, Q, yb(C, o), $, K, te, J, ee, G, a, O, f, p, v, .68, x),
          eventStore: ne,
          percentOfView: O,
          index: G,
          indexPrevious: q,
          limit: U,
          location: $,
          offsetLocation: Z,
          previousLocation: Y,
          options: i,
          resizeHandler: bb(t, a, o, r, C, b, E),
          scrollBody: J,
          scrollBounds: _b(U, Z, Q, J, O),
          scrollLooper: xb(B, U, Z, [$, Z, Y, Q]),
          scrollProgress: re,
          scrollSnapList: F.map(re.get),
          scrollSnaps: F,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: Pb(C, T, B, I, k, D, F, Z, r),
          slideFocus: ae,
          slidesHandler: Sb(t, a, _),
          slidesInView: oe,
          slideIndexes: X,
          slideRegistry: ie,
          slidesToScroll: A,
          target: Q,
          translate: Eb(C, t)
        };
        return se
      }
      const Tb = {
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

      function Ob(e) {
        function t(e, t) {
          return hb(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = db(n).filter((t => e.matchMedia(t).matches)).map((e => n[e])).reduce(((e, r) => t(e, r)), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map((e => db(e.breakpoints || {}))).reduce(((e, t) => e.concat(t)), []).map(e.matchMedia)
          }
        };
        return r
      }

      function jb(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          i = Ob(o),
          a = function(e) {
            let t = [];
            return {
              init: function(r, n) {
                return t = n.filter((({
                  options: t
                }) => !1 !== e.optionsAtMedia(t).active)), t.forEach((t => t.init(r, e))), n.reduce(((e, t) => Object.assign(e, {
                  [t.name]: t
                })), {})
              },
              destroy: function() {
                t = t.filter((e => e.destroy()))
              }
            }
          }(i),
          s = pb(),
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
          m = C;
        let g, v, y, b, _ = !1,
          x = c(Tb, jb.globalOptions),
          w = c(x),
          E = [];

        function P(t) {
          const r = Cb(e, y, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? P(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function S(t, r) {
          _ || (x = c(x, t), w = u(x), E = r || E, function() {
            const {
              container: t,
              slides: r
            } = w, n = eb(t) ? e.querySelector(t) : t;
            y = n || e.children[0];
            const o = eb(r) ? y.querySelectorAll(r) : r;
            b = [].slice.call(o || y.children)
          }(), g = P(w), d([x, ...E.map((({
            options: e
          }) => e))]).forEach((e => s.add(e, "change", C))), w.active && (g.translate.to(g.location.get()), g.animation.init(), g.slidesInView.init(), g.slideFocus.init(N), g.eventHandler.init(N), g.resizeHandler.init(N), g.slidesHandler.init(N), g.options.loop && g.slideLooper.loop(), y.offsetParent && b.length && g.dragHandler.init(N), v = a.init(N, E)))
        }

        function C(e, t) {
          const r = j();
          T(), S(c({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function T() {
          g.dragHandler.destroy(), g.eventStore.clear(), g.translate.clear(), g.slideLooper.clear(), g.resizeHandler.destroy(), g.slidesHandler.destroy(), g.slidesInView.destroy(), g.animation.destroy(), a.destroy(), s.clear()
        }

        function O(e, t, r) {
          w.active && !_ && (g.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : w.duration), g.scrollTo.index(e, r || 0))
        }

        function j() {
          return g.index.get()
        }
        const N = {
          canScrollNext: function() {
            return g.index.add(1).get() !== j()
          },
          canScrollPrev: function() {
            return g.index.add(-1).get() !== j()
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
          selectedScrollSnap: j,
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
        return S(t, r), setTimeout((() => l.emit("init")), 0), N
      }

      function Nb(e = {}, t = []) {
        const r = (0, h.useRef)(e),
          n = (0, h.useRef)(t),
          [o, i] = (0, h.useState)(),
          [a, s] = (0, h.useState)(),
          l = (0, h.useCallback)((() => {
            o && o.reInit(r.current, n.current)
          }), [o]);
        return (0, h.useEffect)((() => {
          Zy(r.current, e) || (r.current = e, l())
        }), [e, l]), (0, h.useEffect)((() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = Qy(e),
              n = Qy(t);
            return r.every(((e, t) => Zy(e, n[t])))
          })(n.current, t) || (n.current = t, l())
        }), [t, l]), (0, h.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            jb.globalOptions = Nb.globalOptions;
            const e = jb(a, r.current, n.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }), [a, i]), [s, o]
      }

      function Lb(e = {}) {
        let t, r = [];
        const n = ["select", "slideFocus"];

        function o() {
          const {
            slideRegistry: e
          } = t.internalEngine(), n = e[t.selectedScrollSnap()];
          return n ? n.map((e => r[e])).reduce(((e, t) => Math.max(e, t)), 0) : null
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
            "y" !== o && (r = a.map((e => e.height)), n.forEach((e => t.on(e, i))), i())
          },
          destroy: function() {
            n.forEach((e => t.off(e, i)));
            const e = t.containerNode();
            e.style.height = "", e.getAttribute("style") || e.removeAttribute("style")
          }
        }
      }
      jb.globalOptions = void 0, Nb.globalOptions = void 0, Lb.globalOptions = void 0;
      const Ib = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function kb(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function Rb(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function Mb(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function Ab(e = {}) {
        let t, r, n, o, i = [],
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
          ("pointerDown" === t ? Mb : Rb)(n, u.dragging)
        }

        function h(e = [], t = [], r) {
          const n = t.map((e => o[e])),
            i = e.map((e => o[e]));
          return n.forEach((e => Rb(e, r))), i.forEach((e => Mb(e, r))), e
        }

        function f() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          i = h(t, i, u.snapped)
        }

        function p() {
          const e = r.slidesInView();
          a = h(e, a, u.inView)
        }
        const m = {
          name: "classNames",
          options: e,
          init: function(i, a) {
            r = i;
            const {
              mergeOptions: h,
              optionsAtMedia: m
            } = a, g = h(Ib, Ab.globalOptions), v = h(g, e);
            t = m(v), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: y,
              loop: b
            } = r.internalEngine().options, _ = !!y;
            t.loop && b && (u.loop = kb(t.loop), Mb(n, u.loop)), t.draggable && _ && (u.draggable = kb(t.draggable), Mb(n, u.draggable)), t.dragging && (u.dragging = kb(t.dragging), l.forEach((e => r.on(e, d)))), t.snapped && (u.snapped = kb(t.snapped), s.forEach((e => r.on(e, f))), f()), t.inView && (u.inView = kb(t.inView), c.forEach((e => r.on(e, p))), p())
          },
          destroy: function() {
            l.forEach((e => r.off(e, d))), s.forEach((e => r.off(e, f))), c.forEach((e => r.off(e, p))), Rb(n, u.loop), Rb(n, u.draggable), Rb(n, u.dragging), h([], i, u.snapped), h([], a, u.inView), Object.keys(u).forEach((e => {
              u[e] = []
            }))
          }
        };
        return m
      }
      Ab.globalOptions = void 0;
      const Db = (0, h.createContext)(null);

      function Hb() {
        const e = (0, h.useContext)(Db);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Bb = (0, h.forwardRef)((({
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
              const t = (0, F.rl)(),
                r = (0, F.jt)(),
                [n, o] = (0, h.useState)([]),
                i = n.length,
                [a, s] = (0, h.useState)(0),
                [l, c] = Nb({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [Lb(), Ab()]),
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
            b = (0, d.mergeProps)(s, {
              className: $y(f)
            }, y),
            _ = e ? p.DX : "div";
          return (0, u.jsx)(Db.Provider, {
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
        Vb = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        zb = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Hb();
          if (!e && !n || !n?.status) return null;
          const o = e || Vb[n.status],
            i = z[o],
            a = (0, d.mergeProps)(t, {
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
        Fb = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? p.DX : "div",
            i = (0, d.mergeProps)(r, {
              className: "foundry_hcgxh_qmpv6yo"
            });
          return (0, u.jsx)(B, {
            size: "SM",
            asChild: !0,
            children: (0, u.jsx)(o, {
              ref: n,
              "data-testid": t,
              ...i
            })
          })
        })),
        Ub = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...i
        }, a) => {
          const s = e ? p.DX : "div",
            l = (0, d.mergeProps)(i, {
              className: "foundry_hcgxh_qmpv6yk"
            });
          return (0, u.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...l
          })
        })),
        Gb = (0, h.forwardRef)((({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = Hb(), a = (0, d.mergeProps)(r, {
            className: "foundry_hcgxh_qmpv6yl"
          }), s = (0, F.UP)(i, n), l = h.Children.map(t, (e => {
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
        qb = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, h.useRef)(null),
            a = (0, F.UP)(i, o),
            s = e ? p.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = _y(n, i),
            f = (0, d.mergeProps)(n, {
              className: "foundry_hcgxh_qmpv6yp foundry_hcgxh_1d5mo5m0"
            });
          return (0, u.jsx)(B, {
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
        Xb = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const n = (0, d.mergeProps)(t, {
            className: "foundry_hcgxh_qmpv6yq"
          });
          return (0, u.jsx)(nh, {
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
        Kb = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const i = e ? p.DX : "div",
            a = (0, d.mergeProps)(n, {
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
        Wb = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Hb(), i = (0, d.mergeProps)(t, {
            className: Wy
          });
          return (0, u.jsx)(nh, {
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
        $b = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Hb(), i = (0, d.mergeProps)(t, {
            className: Wy
          });
          return (0, u.jsx)(nh, {
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
        Yb = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Hb(), i = (0, d.mergeProps)(t, {
            className: "foundry_hcgxh_qmpv6yr"
          });
          return (0, u.jsx)(B, {
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
        o_ = r_({
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
      const i_ = (0, h.createContext)(null);

      function a_() {
        const e = (0, h.useContext)(i_);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const s_ = (0, h.forwardRef)((({
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
            f = (0, d.mergeProps)(l, {
              className: o_(h)
            }),
            m = e ? p.DX : "div";
          return (0, u.jsx)(i_.Provider, {
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
        l_ = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: i
          } = a_(), a = e ? p.DX : "div", s = (0, d.mergeProps)(n, {
            className: "foundry_hcgxh_oahh58z"
          });
          return (0, u.jsx)(B, {
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
        c_ = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const n = z[e],
            o = (0, d.mergeProps)(t, {
              className: "foundry_hcgxh_oahh5810"
            });
          return (0, u.jsx)(n, {
            ref: r,
            size: "MD",
            ...o
          })
        })),
        u_ = (0, h.forwardRef)((({
          testId: e,
          label: t = "close tag",
          ...r
        }, n) => {
          const {
            background: o,
            isDisabled: i
          } = a_(), a = (0, d.mergeProps)(r, {
            className: n_({
              background: o
            })
          });
          return (0, u.jsx)(nh, {
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

      function d_(e) {
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

      function h_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function f_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? h_(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = d_(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h_(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function p_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var m_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        g_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = f_(f_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) m_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return p_(e.variantClassNames, (e => p_(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        v_ = g_({
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
        y_ = g_({
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
        b_ = g_({
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

      function __() {
        const e = (0, h.useContext)(x_);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const x_ = (0, h.createContext)(null),
        w_ = (0, h.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, i) => {
          const a = (0, d.mergeProps)({
              className: b_({
                size: n
              })
            }, o),
            s = r ? p.DX : "ol";
          return (0, u.jsx)(x_.Provider, {
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
        E_ = (0, h.forwardRef)((({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, i) => {
          const a = (0, h.useRef)(null),
            {
              size: s
            } = __(),
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
              } = _y({
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
            f = (0, d.mergeProps)({
              className: (0, I.$)(v_({
                size: s
              }), e && "foundry_hcgxh_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, u.jsx)("li", {
            className: y_({
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
        P_ = (0, h.forwardRef)((({
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
        S_ = (0, h.forwardRef)((({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n = "Show hidden breadcrumbs",
          ...o
        }, i) => {
          const [a, s] = (0, h.useState)(r), {
            size: l
          } = __(), c = (0, d.mergeProps)({
            className: y_({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, u.jsx)("li", {
            ref: i,
            ...c,
            children: (0, u.jsxs)(xp, {
              open: a,
              onOpenChange: () => s(!a),
              children: [(0, u.jsx)(wp, {
                className: "foundry_hcgxh_m1icrxa foundry_hcgxh_1d5mo5m0 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd11",
                "aria-label": n,
                children: "..."
              }), (0, u.jsx)(Sp, {
                children: (0, u.jsx)(Cp, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_hcgxh_m1icrxb",
                  children: (0, u.jsx)(Tp, {
                    className: "foundry_hcgxh_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        })),
        C_ = (0, h.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const i = t ? p.DX : Op,
            a = (0, d.mergeProps)({
              className: "foundry_hcgxh_m1icrxd foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd10",
              "data-testid": r
            }, n);
          return (0, u.jsx)(i, {
            ref: o,
            ...a,
            children: e
          })
        }))
    }
  }
]);