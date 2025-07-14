try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "07ff28dd-b04c-461a-8365-3edf36296901", e._sentryDebugIdIdentifier = "sentry-dbid-07ff28dd-b04c-461a-8365-3edf36296901")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9281], {
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
        var n, s, l, c = (n = t || null, s = function(t) {
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
          var t = a.get(c);
          if (t) {
            var n = new Set(t),
              r = new Set(e),
              i = c.current;
            n.forEach((function(e) {
              r.has(e) || o(e, null)
            })), r.forEach((function(e) {
              n.has(e) || o(e, i)
            }))
          }
          a.set(c, e)
        }), [e]), c
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
    },
    59281: (e, t, n) => {
      n.r(t), n.d(t, {
        Alert: () => a,
        AlertBanner: () => s,
        Body: () => F,
        Breadcrumbs: () => c,
        Button: () => hn,
        Checkbox: () => Ob,
        Code: () => W_,
        Display: () => I_,
        Divider: () => v_,
        Dropdown: () => sb,
        Heading: () => S,
        IconButton: () => hh,
        Label: () => V_,
        Lightbox: () => mv,
        Loader: () => sw,
        Option: () => lb,
        RadioButton: () => u_,
        RadioContext: () => t_,
        RadioGroup: () => n_,
        Switch: () => A_,
        Tag: () => l,
        Text: () => L,
        TextArea: () => Rt,
        TextField: () => i,
        TextSemantics: () => R,
        Tooltip: () => _m
      });
      var r = {};
      n.r(r), n.d(r, {
        CheckLG: () => db,
        CheckMD: () => ub,
        CheckXL: () => hb,
        DashLG: () => pb,
        DashMD: () => fb,
        DashXL: () => mb
      });
      var o = {};
      n.r(o), n.d(o, {
        DotLG: () => o_,
        DotMD: () => r_,
        DotXL: () => i_
      });
      var i = {};
      n.r(i), n.d(i, {
        Button: () => ux,
        Control: () => sx,
        Description: () => hx,
        Hint: () => ax,
        Icon: () => cx,
        Input: () => lx,
        Label: () => ix,
        PasswordButton: () => dx,
        Root: () => ox
      });
      var a = {};
      n.r(a), n.d(a, {
        Body: () => Tx,
        CloseButton: () => Dx,
        Description: () => Rx,
        ErrorText: () => Ix,
        Footer: () => Ax,
        Header: () => Cx,
        Icon: () => Nx,
        Link: () => Lx,
        Root: () => Px,
        RootContext: () => Ex,
        Title: () => jx,
        iconStatusMap: () => Ox,
        useAlertContext: () => Sx
      });
      var s = {};
      n.r(s), n.d(s, {
        Alert: () => kE,
        CloseButton: () => BE,
        Description: () => DE,
        Icon: () => IE,
        Link: () => HE,
        PaginationCounter: () => UE,
        PaginationNav: () => FE,
        PaginationNextButton: () => VE,
        PaginationPrevButton: () => zE,
        PaginationViewport: () => ME,
        Root: () => LE,
        RootContext: () => jE,
        iconStatusMap: () => AE,
        useAlertBannerContext: () => RE
      });
      var l = {};
      n.r(l), n.d(l, {
        CloseButton: () => rS,
        Icon: () => nS,
        Label: () => tS,
        Root: () => eS,
        RootContext: () => QE,
        useTagContext: () => JE
      });
      var c = {};
      n.r(c), n.d(c, {
        Icon: () => vS,
        Item: () => gS,
        OverflowMenu: () => yS,
        OverflowMenuItem: () => bS,
        Root: () => mS,
        RootContext: () => pS,
        useBreadcrumbsContext: () => fS
      });
      var u = n(25854),
        d = n(38763),
        h = n(62229),
        f = n.t(h, 2),
        p = n.n(h),
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
          for (var [l, c] of _.compoundVariants) x(l, n, _.defaultVariants) && (t += " " + c);
          return t
        }, w.variants = () => Object.keys(_.variantClassNames), w.classNames = {
          get base() {
            return _.defaultClassName.split(" ")[0]
          },
          get variants() {
            return b(_.variantClassNames, (e => b(e, (e => e.split(" ")[0]))))
          }
        }, w);
      const S = (0, h.forwardRef)((({
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

      function P(e) {
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
            r = e, o = t, i = n[t], (o = P(o)) in r ? Object.defineProperty(r, o, {
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
      var A = n(68879);

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

      function Se(e) {
        return e.matches(xe)
      }

      function Pe(e) {
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

      function Te(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function Oe(e, t) {
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
                  let t = Te(e);
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
                rt(t) === r && e.isConnected && Pe(e)
              }))
            } else Pe(e)
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

      function St(e) {
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

      function Ct(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Pt(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = St(o)) in r ? Object.defineProperty(r, o, {
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

      function Tt(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Ot = (e, t, n) => {
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
            for (var [c, u] of e.compoundVariants) Ot(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Tt(e.variantClassNames, (e => Tt(e, (e => e.split(" ")[0]))))
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
            descriptionProps: S,
            isInvalid: P,
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
          O = (0, d.v6)({
            ...x,
            className: s
          }, {
            className: jt({
              isInvalid: P
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
            ...O,
            children: o
          }), i && (0, u.jsx)(m.s6, {
            enabled: T.length > 0 || !!f,
            children: (0, u.jsx)(F, {
              size: "SM",
              ...S,
              className: (0, A.$)("foundry_hcgxh_vq8c3j4", x.disabled && Nt),
              children: i
            })
          }), T.length > 0 && (0, u.jsxs)(F, {
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
        zt.isOpening = n, Pe(e), e.dispatchEvent(c), zt.isOpening = !1
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
        })), S = Y((e => {
          u && E(e)
        })), P = Y((e => {
          null == a || a(e)
        })), C = Y(((e, t) => {
          if (a) {
            let n = new MouseEvent("click", e);
            Oe(n, t), a(Te(n))
          }
        })), T = (0, h.useMemo)((() => {
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
                      n = w(Zt(t.currentTarget, t), r, !0), e.isOverTarget = !1, P(t), E(t)
                    }
                  } else {
                    let e = _(t, "virtual"),
                      r = x(t, "virtual"),
                      o = w(t, "virtual");
                    P(t), n = e && r && o
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
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(Zt(e.target, t), e.pointerType, !1), S(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (nt(e.target, ot(t)) && null != e.pointerType) {
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
              nt(e.currentTarget, ot(e.nativeEvent)) && E(e)
            }
          }
          return t
        }), [y, s, c, b, d, E, S, w, _, x, P, C]);
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
          pressProps: ge(p, T)
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
              buttonProps: S,
              isPressed: P
            } = tn({
              ...E,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => E.onPress?.(e) ?? o?.(e)
            }, y),
            C = (0, d.v6)({
              ...x,
              role: "button",
              "data-pressed": P,
              "data-testid": e,
              className: un({
                appearance: c,
                size: w,
                fullWidth: p,
                iconLeft: !!i,
                iconRight: !!s
              })
            }, {
              ...S,
              className: n
            }),
            T = i && z[i],
            O = s && z[s],
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

      function Sn(e) {
        return "touches" in e
      }

      function Pn(e) {
        return Sn(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Cn(e) {
        return Sn(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Tn(e, t) {
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

      function On(e, t) {
        const [n, r] = Array.from(e.touches).filter((e => t.includes(e.identifier)));
        return Tn(n, r)
      }

      function Nn(e) {
        const t = Cn(e);
        return Sn(e) ? t.identifier : t.pointerId
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

      function Ln(e) {
        if ("function" == typeof e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return e(...n)
        }
        return e
      }

      function An() {}

      function In() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length ? An : 1 === t.length ? t[0] : function() {
          let e;
          for (const n of t) e = n.apply(this, arguments) || e;
          return e
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
          if (t.offset = function(e, t, n) {
              let [r, o] = t, [i, a] = n;
              const [
                [s, l],
                [c, u]
              ] = e;
              return [mn(r, s, l, i), mn(o, c, u, a)]
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
          this.state.offset = fn.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = fn.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            n = this.config;
          if (!t.axis && e) {
            const r = "object" == typeof n.axisThreshold ? n.axisThreshold[Pn(e)] : n.axisThreshold;
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
            const a = fn.toVector(e, r ? o : i ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = o, a
          },
          swipe() {
            let {
              velocity: e = qn,
              distance: t = Xn,
              duration: n = Kn
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
              velocity: this.transform(fn.toVector(e)),
              distance: this.transform(fn.toVector(t)),
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
                const t = Dn(Ln(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              a = e => {
                const t = Dn(Ln(o, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof o ? [i(), a()] : e => [i(e), a(e)]
          },
          threshold(e, t, n) {
            return this.lockDirection = "lock" === n.axis, fn.toVector(e, this.lockDirection ? [.1, 3] : 0)
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
          engine: class extends Mn {
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && n._pointerActive || (this.start(e), this.setupPointer(e), n._pointerId = Nn(e), n._pointerActive = !0, this.computeValues(jn(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Pn(e) ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
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
          resolver: $n
        },
        ar = {
          key: "hover",
          engine: class extends Mn {
            constructor() {
              super(...arguments), gn(this, "ingKey", "hovering")
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
          resolver: tr
        },
        sr = {
          key: "move",
          engine: class extends Mn {
            constructor() {
              super(...arguments), gn(this, "ingKey", "moving")
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
          resolver: Qn
        },
        lr = {
          key: "pinch",
          engine: class extends kn {
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
              const r = On(e, t._touchIds);
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
              const o = Tn(...Array.from(n.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = On(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const n = Tn(...Array.from(t.values()));
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
              t._delta = [-Rn(e)[1] / 100 * t.offset[0], 0], fn.addTo(t._movement, t._delta), Yn(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
        cr = {
          key: "scroll",
          engine: class extends Mn {
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
              t._delta = fn.sub(n, t._values), fn.addTo(t._movement, t._delta), this.computeValues(n), this.compute(e), this.emit()
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
        ur = {
          key: "wheel",
          engine: class extends Mn {
            constructor() {
              super(...arguments), gn(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Rn(e), fn.addTo(t._movement, t._delta), Yn(t), this.compute(e), this.emit()
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
        hr = ["target", "eventOptions", "window", "enabled", "transform"];

      function fr() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        const n = {};
        for (const [r, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            n[r] = o.call(n, e[r], r, e);
            break;
          case "object":
            n[r] = fr(e[r], o);
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
          return Sn(e) ? (this.touchIds = new Set(function(e) {
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
              }(r, hr);
            if (n.shared = fr({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              }, dr), t) {
              const e = rr.get(t);
              n[t] = fr(yn({
                shared: n.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = rr.get(e);
                t && (n[e] = fr(yn({
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
            for (const e in o) o[e] = In(...o[e]);
            if (!i) return o;
            for (const e in o) {
              const {
                device: t,
                capture: n,
                passive: r
              } = En(e);
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
          var l, c;
          const u = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = a.passive) && void 0 !== c ? c : t.passive;
          let h = s ? r : function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const r = bn[e],
              o = r && r[t] || t;
            return "on" + _n(e) + _n(o) + (function() {
              let e = arguments.length > 1 ? arguments[1] : void 0;
              return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && !wn.includes(e)
            }(n, o) ? "Capture" : "")
          }(r, o, u);
          n && d && (h += "Passive"), e[h] = e[h] || [], e[h].push(i)
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
        const n = ([ir, lr, cr, ur, sr, ar].forEach(or), function(e, t) {
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
      var xr = Hr(),
        Er = e => Ir(e, xr),
        Sr = Hr();
      Er.write = e => Ir(e, Sr);
      var Pr = Hr();
      Er.onStart = e => Ir(e, Pr);
      var Cr = Hr();
      Er.onFrame = e => Ir(e, Cr);
      var Tr = Hr();
      Er.onFinish = e => Ir(e, Tr);
      var Or = [];
      Er.setTimeout = (e, t) => {
        const n = Er.now() + t,
          r = () => {
            const e = Or.findIndex((e => e.cancel == r));
            ~e && Or.splice(e, 1), Lr -= ~e ? 1 : 0
          },
          o = {
            time: n,
            handler: e,
            cancel: r
          };
        return Or.splice(Nr(n), 0, o), Lr += 1, Dr(), o
      };
      var Nr = e => ~(~Or.findIndex((t => t.time > e)) || ~Or.length);
      Er.cancel = e => {
        Pr.delete(e), Cr.delete(e), Tr.delete(e), xr.delete(e), Sr.delete(e)
      }, Er.sync = e => {
        Ar = !0, Er.batchedUpdates(e), Ar = !1
      }, Er.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, Er.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          Pr.delete(n), t = null
        }, r
      };
      var jr = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Er.use = e => jr = e, Er.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Er.batchedUpdates = e => e(), Er.catch = console.error, Er.frameLoop = "always", Er.advance = () => {
        "demand" !== Er.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Mr()
      };
      var Rr = -1,
        Lr = 0,
        Ar = !1;

      function Ir(e, t) {
        Ar ? (t.delete(e), e(0)) : (t.add(e), Dr())
      }

      function Dr() {
        Rr < 0 && (Rr = 0, "demand" !== Er.frameLoop && jr(kr))
      }

      function kr() {
        ~Rr && (jr(kr), Er.batchedUpdates(Mr))
      }

      function Mr() {
        const e = Rr;
        Rr = Er.now();
        const t = Nr(Rr);
        t && (Br(Or.splice(0, t), (e => e.handler())), Lr -= t), Lr ? (Pr.flush(), xr.flush(e ? Math.min(64, Rr - e) : 16.667), Cr.flush(), Sr.flush(), Tr.flush()) : Rr = -1
      }

      function Hr() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            Lr += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (Lr -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, Lr -= t.size, Br(t, (t => t(n) && e.add(t))), Lr += e.size, t = e)
          }
        }
      }

      function Br(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            Er.catch(e)
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
          e.to && (Yr = e.to), e.now && (Er.now = e.now), void 0 !== e.colors && (Jr = e.colors), null != e.skipAnimation && (eo = e.skipAnimation), e.createStringInterpolator && ($r = e.createStringInterpolator), e.requestAnimationFrame && Er.use(e.requestAnimationFrame), e.batchedUpdates && (Er.batchedUpdates = e.batchedUpdates), e.willAdvance && (to = e.willAdvance), e.frameLoop && (Er.frameLoop = e.frameLoop)
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
            ao > e.priority ? (ro.add(e), Er.onStart(lo)) : (co(e), Er(ho))
          },
          advance: ho,
          sort(e) {
            if (ao) Er.onFrame((() => so.sort(e)));
            else {
              const t = oo.indexOf(e);
              ~t && (oo.splice(t, 1), uo(e))
            }
          },
          clear() {
            oo = [], ro.clear()
          }
        };

      function lo() {
        ro.forEach(co), ro.clear(), Er(ho)
      }

      function co(e) {
        oo.includes(e) || uo(e)
      }

      function uo(e) {
        oo.splice(function(t) {
          const n = t.findIndex((t => t.priority > e.priority));
          return n < 0 ? t.length : n
        }(oo), 0, e)
      }

      function ho(e) {
        const t = io;
        for (let n = 0; n < oo.length; n++) {
          const r = oo[n];
          ao = r.priority, r.idle || (to(r), r.advance(e), r.idle || t.push(r))
        }
        return ao = 0, (io = oo).length = 0, (oo = t).length > 0
      }
      var fo = "[-+]?\\d*\\.?\\d+",
        po = fo + "%";

      function mo(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var go = new RegExp("rgb" + mo(fo, fo, fo)),
        vo = new RegExp("rgba" + mo(fo, fo, fo, fo)),
        yo = new RegExp("hsl" + mo(fo, po, po)),
        bo = new RegExp("hsla" + mo(fo, po, po, fo)),
        _o = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        wo = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        xo = /^#([0-9a-fA-F]{6})$/,
        Eo = /^#([0-9a-fA-F]{8})$/;

      function So(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function Po(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = So(o, r, e + 1 / 3),
          a = So(o, r, e),
          s = So(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function Co(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function To(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Oo(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function No(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function jo(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = xo.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Jr && void 0 !== Jr[e] ? Jr[e] : (t = go.exec(e)) ? (Co(t[1]) << 24 | Co(t[2]) << 16 | Co(t[3]) << 8 | 255) >>> 0 : (t = vo.exec(e)) ? (Co(t[1]) << 24 | Co(t[2]) << 16 | Co(t[3]) << 8 | Oo(t[4])) >>> 0 : (t = _o.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Eo.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = wo.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = yo.exec(e)) ? (255 | Po(To(t[1]), No(t[2]), No(t[3]))) >>> 0 : (t = bo.exec(e)) ? (Po(To(t[1]), No(t[2]), No(t[3])) | Oo(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Ro = (e, t, n) => {
          if (Ur.fun(e)) return e;
          if (Ur.arr(e)) return Ro({
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
        Lo = 1.70158,
        Ao = 1.525 * Lo,
        Io = Lo + 1,
        Do = 2 * Math.PI / 3,
        ko = 2 * Math.PI / 4.5,
        Mo = e => {
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
          easeInBack: e => Io * e * e * e - Lo * e * e,
          easeOutBack: e => 1 + Io * Math.pow(e - 1, 3) + Lo * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Ao) / 2 : (Math.pow(2 * e - 2, 2) * ((Ao + 1) * (2 * e - 2) + Ao) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Do),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Do) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ko) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ko) / 2 + 1,
          easeInBounce: e => 1 - Mo(1 - e),
          easeOutBounce: Mo,
          easeInOutBounce: e => e < .5 ? (1 - Mo(1 - 2 * e)) / 2 : (1 + Mo(2 * e - 1)) / 2,
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
          const t = e.output.map((e => zo(e).replace(ti, ni).replace(Qo, jo).replace($o, jo))),
            n = t.map((e => e.match(Zo).map(Number))),
            r = n[0].map(((e, t) => n.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))),
            o = r.map((t => Ro({
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
        ci = si(console.warn);

      function ui(e) {
        return Ur.str(e) && ("#" == e[0] || /\d/.test(e) || !Qr() && ti.test(e) || e in (Jr || {}))
      }
      var di = Qr() ? h.useEffect : h.useLayoutEffect;

      function hi() {
        const e = (0, h.useState)()[1],
          t = (() => {
            const e = (0, h.useRef)(!1);
            return di((() => (e.current = !0, () => {
              e.current = !1
            })), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var fi = e => (0, h.useEffect)(e, pi),
        pi = [];

      function mi(e) {
        const t = (0, h.useRef)();
        return (0, h.useEffect)((() => {
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
        xi = class extends wi {
          constructor(e) {
            super(0), this._string = null, this._toString = Ro({
              output: [e, e]
            })
          }
          static create(e) {
            return new xi(e)
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
            e && (this._toString = Ro({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Ei = {
          dependencies: null
        },
        Si = class extends _i {
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
            Ei.dependencies && Vo(e) && Ei.dependencies.add(e);
            const t = bi(e);
            t && qr(t, (e => this.add(e)))
          }
        },
        Pi = class extends Si {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new Pi(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(Ci)), !0)
          }
        };

      function Ci(e) {
        return (ui(e) ? xi : wi).create(e)
      }

      function Ti(e) {
        const t = vi(e);
        return t ? t.constructor : Ur.arr(e) ? Pi : ui(e) ? xi : wi
      }
      var Oi = (e, t) => {
          const n = !Ur.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, h.forwardRef)(((r, o) => {
            const i = (0, h.useRef)(null),
              a = n && (0, h.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (Ur.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [s, l] = function(e, t) {
                const n = new Set;
                return Ei.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Si(e), Ei.dependencies = null, [e, n]
              }(r, t),
              c = hi(),
              u = () => {
                const e = i.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && c()
              },
              d = new Ni(u, l),
              f = (0, h.useRef)();
            di((() => (f.current = d, qr(l, (e => Ko(e, d))), () => {
              f.current && (qr(f.current.deps, (e => Wo(e, f.current))), Er.cancel(f.current.update))
            }))), (0, h.useEffect)(u, []), fi((() => () => {
              const e = f.current;
              qr(e.deps, (t => Wo(t, e)))
            }));
            const p = t.getComponentProps(s.getValue());
            return h.createElement(e, {
              ...p,
              ref: a
            })
          }))
        },
        Ni = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Er.write(this.update)
          }
        },
        ji = Symbol.for("AnimatedComponent"),
        Ri = e => Ur.str(e) ? e : e && Ur.str(e.displayName) ? e.displayName : Ur.fun(e) && e.name || null;

      function Li(e, ...t) {
        return Ur.fun(e) ? e(...t) : e
      }
      var Ai = (e, t) => !0 === e || !!(t && e && (Ur.fun(e) ? e(t) : Kr(e).includes(t))),
        Ii = (e, t) => Ur.obj(e) ? t && e[t] : e,
        Di = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        ki = e => e,
        Mi = (e, t = ki) => {
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
        return e = zo(e), Ur.arr(e) ? e.map(Vi) : ui(e) ? Vr.createStringInterpolator({
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
          let l, c, u = Ai(n.cancel ?? r?.cancel, t);
          if (u) f();
          else {
            Ur.und(n.pause) || (o.paused = Ai(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = o.paused || Ai(e, t)), l = Li(n.delay || 0, t), e ? (o.resumeQueue.add(h), i.pause()) : (i.resume(), h())
          }

          function d() {
            o.resumeQueue.add(h), o.timeouts.delete(c), c.cancel(), l = c.time - Er.now()
          }

          function h() {
            l > 0 && !Vr.skipAnimation ? (o.delayed = !0, c = Er.setTimeout(f, l), o.pauseQueue.add(d), o.timeouts.add(c)) : f()
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
          const c = Mi(t, ((e, t) => "onRest" === t ? void 0 : e));
          let u, d;
          const h = new Promise(((e, t) => (u = e, d = t))),
            f = e => {
              const t = o <= (n.cancelId || 0) && na(r) || o !== n.asyncId && ta(r, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new ia,
                a = new aa;
              return (async () => {
                if (Vr.skipAnimation) throw oa(n), a.result = ta(r, !1), d(a), a;
                f(i);
                const s = Ur.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Xr(c, ((e, t) => {
                  Ur.und(s[t]) && (s[t] = e)
                }));
                const l = await r.start(s);
                return f(i), n.paused && await new Promise((e => {
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
            })(e) : Promise.resolve(e(p, r.stop.bind(r))), await Promise.all([t.then(u), h]), m = ta(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof ia) m = e.result;
            else {
              if (!(e instanceof aa)) throw e;
              m = e.result
            }
          } finally {
            o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? l : void 0)
          }
          return Ur.fun(a) && Er.batchedUpdates((() => {
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
        sa = e => e instanceof ca,
        la = 1,
        ca = class extends qo {
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
        ua = Symbol.for("SpringPhase"),
        da = e => (1 & e[ua]) > 0,
        ha = e => (2 & e[ua]) > 0,
        fa = e => (4 & e[ua]) > 0,
        pa = (e, t) => t ? e[ua] |= 3 : e[ua] &= -3,
        ma = (e, t) => t ? e[ua] |= 4 : e[ua] &= -5,
        ga = class extends ca {
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
            return !(ha(this) || this._state.asyncTo) || fa(this)
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
            return ha(this)
          }
          get isPaused() {
            return fa(this)
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
              const c = s.constructor == xi ? 1 : a ? a[l].lastPosition : o[l];
              let u = r.immediate,
                d = c;
              if (!u) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const n = r.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = Ur.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const h = i.precision || (n == c ? .005 : Math.min(1, .001 * Math.abs(c - n)));
                if (Ur.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * t);
                    d = n + o / (1 - e) * (1 - r), u = Math.abs(s.lastPosition - d) <= h, a = o * r
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || h / 10,
                      r = i.clamp ? 0 : i.bounce,
                      l = !Ur.und(r),
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
            const s = vi(this),
              l = s.getValue();
            if (t) {
              const e = zo(r.to);
              l === e && !n || i.decay ? n && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(l)
          }
          set(e) {
            return Er.batchedUpdates((() => {
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
            if (ha(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Er.batchedUpdates((() => {
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
            return this._focus(this.get()), oa(this._state, e && this._lastCallId), Er.batchedUpdates((() => this._stop(t, e))), this
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
            e.default && Object.assign(r, Mi(e, ((e, t) => /^on/.test(t) ? Ii(e, n) : e))), Ea(this, e, "onProps"), Sa(this, "onProps", e, this);
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
                  fa(this) || (ma(this, !0), Zr(i.pauseQueue), Sa(this, "onPause", ta(this, va(this, this.animation.to)), this))
                },
                resume: () => {
                  fa(this) && (ma(this, !1), ha(this) && this._resume(), Zr(i.resumeQueue), Sa(this, "onResume", ta(this, va(this, this.animation.to)), this))
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
              from: c
            } = s;
            let {
              to: u = l,
              from: d = c
            } = e;
            !o || r || t.default && !Ur.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const h = !Gr(d, c);
            h && (s.from = d), d = zo(d);
            const f = !Gr(u, l);
            f && this._focus(u);
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
            }(m, Li(t.config, i), t.config !== a.config ? Li(a.config, i) : void 0);
            let y = vi(this);
            if (!y || Ur.und(u)) return n(ta(this, !0));
            const b = Ur.und(t.reset) ? o && !t.default : !Ur.und(d) && Ai(t.reset, i),
              _ = b ? d : this.get(),
              w = Vi(u),
              x = Ur.num(w) || Ur.arr(w) || ui(w),
              E = !p && (!x || Ai(a.immediate || t.immediate, i));
            if (f) {
              const e = Ti(u);
              if (e !== y.constructor) {
                if (!E) throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);
                y = this._set(w)
              }
            }
            const S = y.constructor;
            let P = Vo(u),
              C = !1;
            if (!P) {
              const e = b || !da(this) && h;
              (f || e) && (C = Gr(Vi(_), w), P = !C), (Gr(s.immediate, E) || E) && Gr(m.decay, g) && Gr(m.velocity, v) || (P = !0)
            }
            if (C && ha(this) && (s.changed && !b ? P = !0 : P || this._stop(l)), !p && ((P || Vo(l)) && (s.values = y.getPayload(), s.toValues = Vo(u) ? null : S == xi ? [1] : Kr(w)), s.immediate != E && (s.immediate = E, E || b || this._set(l)), P)) {
              const {
                onRest: e
              } = s;
              qr(xa, (e => Ea(this, t, e)));
              const r = ta(this, va(this, l));
              Zr(this._pendingCalls, r), this._pendingCalls.add(n), s.changed && Er.batchedUpdates((() => {
                s.changed = !b, e?.(r, this), b ? Li(a.onRest, r) : s.onStart?.(r, this)
              }))
            }
            b && this._set(_), p ? n(ra(t.to, t, this._state, this)) : P ? this._start() : ha(this) && !f ? this._pendingCalls.add(n) : n(ea(_))
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
                const r = Ti(n);
                e && e.constructor == r ? e.setValue(n) : yi(this, r.create(n)), e && Er.batchedUpdates((() => {
                  this._onChange(n, t)
                }))
              }
            }
            return vi(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Sa(this, "onStart", ta(this, va(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Li(this.animation.onChange, e, this)), Li(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            vi(this).reset(zo(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), ha(this) || (pa(this, !0), fa(this) || this._resume())
          }
          _resume() {
            Vr.skipAnimation ? this.finish() : so.start(this)
          }
          _stop(e, t) {
            if (ha(this)) {
              pa(this, !1);
              const n = this.animation;
              qr(n.values, (e => {
                e.done = !0
              })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Go(this, {
                type: "idle",
                parent: this
              });
              const r = t ? na(this.get()) : ta(this.get(), va(this, e ?? n.to));
              Zr(this._pendingCalls, r), n.changed && (n.changed = !1, Sa(this, "onRest", r, this))
            }
          }
        };

      function va(e, t) {
        const n = Vi(t);
        return Gr(Vi(e.get()), n)
      }

      function ya(e, t = e.loop, n = e.to) {
        const r = Li(t);
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
        return Ur.und(t.default) && (t.default = Mi(t)), t
      }

      function wa(e, t) {
        Xr(e, ((e, n) => null != e && t.add(n)))
      }
      var xa = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Ea(e, t, n) {
        e.animation[n] = t[n] !== Di(t, n) ? Ii(t[n], e.key) : void 0
      }

      function Sa(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var Pa = ["onStart", "onChange", "onRest"],
        Ca = 1,
        Ta = class {
          constructor(e, t) {
            this.id = Ca++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
            return e ? t = Kr(e).map(ba) : this.queue = [], this._flush ? this._flush(this, t) : (Ia(this, t), Oa(this, t))
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
            Er.onFrame(this._onFrame)
          }
        };

      function Oa(e, t) {
        return Promise.all(t.map((t => Na(e, t)))).then((t => Ji(e, t)))
      }
      async function Na(e, t, n) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, c = Ur.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = Ur.arr(o) || Ur.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : qr(Pa, (n => {
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
            }, c && (c[n] = t[n])
          }
        }));
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, Zr(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const h = (r || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
          f = !0 === t.cancel || !0 === Di(t, "cancel");
        (u || f && d.asyncId) && h.push(Qi(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: zr,
            resume: zr,
            start(t, n) {
              f ? (oa(d, e._lastAsyncId), n(na(e))) : (t.onRest = s, n(ra(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = Ji(e, await Promise.all(h));
        if (a && p.finished && (!n || !p.noop)) {
          const n = ya(t, a, o);
          if (n) return Ia(e, [n]), Na(e, n, !0)
        }
        return l && Er.batchedUpdates((() => l(p, e, e.item))), p
      }

      function ja(e, t) {
        const n = {
          ...e.springs
        };
        return t && qr(Kr(t), (e => {
          Ur.und(e.keys) && (e = ba(e)), Ur.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), Aa(n, e, (e => La(e)))
        })), Ra(e, n), n
      }

      function Ra(e, t) {
        Xr(t, ((t, n) => {
          e.springs[n] || (e.springs[n] = t, Ko(t, e))
        }))
      }

      function La(e, t) {
        const n = new ga;
        return n.key = e, t && Ko(n, t), n
      }

      function Aa(e, t, n) {
        t.keys && qr(t.keys, (r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        }))
      }

      function Ia(e, t) {
        qr(t, (t => {
          Aa(e.springs, t, (t => La(t, e)))
        }))
      }
      var Da, ka, Ma = ({
          children: e,
          ...t
        }) => {
          const n = (0, h.useContext)(Ha),
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
          } = Ha;
          return h.createElement(i, {
            value: t
          }, e)
        },
        Ha = (Da = Ma, ka = {}, Object.assign(Da, h.createContext(ka)), Da.Provider._context = Da, Da.Consumer._context = Da, Da);
      Ma.Provider = Ha.Provider, Ma.Consumer = Ha.Consumer;
      var Ba = () => {
        const e = [],
          t = function(t) {
            ci(`${ai}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
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
            const o = (0, h.useMemo)((() => r || 3 == arguments.length ? Ba() : void 0), []),
              i = (0, h.useRef)(0),
              a = hi(),
              s = (0, h.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const n = ja(e, t);
                  return i.current > 0 && !s.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? Oa(e, t) : new Promise((r => {
                    Ra(e, n), s.queue.push((() => {
                      r(Oa(e, t))
                    })), a()
                  }))
                }
              })), []),
              l = (0, h.useRef)([...s.ctrls]),
              c = [],
              u = mi(e) || 0;

            function d(e, n) {
              for (let o = e; o < n; o++) {
                const e = l.current[o] || (l.current[o] = new Ta(null, s.flush)),
                  n = r ? r(o, e) : t[o];
                n && (c[o] = _a(n))
              }
            }(0, h.useMemo)((() => {
              qr(l.current.slice(e, u), (e => {
                Gi(e, o), e.stop(!0)
              })), l.current.length = e, d(u, e)
            }), [e]), (0, h.useMemo)((() => {
              d(0, Math.min(u, e))
            }), n);
            const f = l.current.map(((e, t) => ja(e, c[t]))),
              p = (0, h.useContext)(Ma),
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
                const n = c[t];
                n && (qi(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
              }))
            })), fi((() => () => {
              qr(s.ctrls, (e => e.stop(!0)))
            }));
            const v = f.map((e => ({
              ...e
            })));
            return o ? [v, o] : v
          }(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [r, o] : r
      }
      var Va = () => Ba(),
        za = () => (0, h.useState)(Va)[0];
      var Ua = 1,
        Ga = class extends ca {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Ro(...t);
            const n = this._get(),
              r = Ti(n);
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
            })), Vr.skipAnimation ? (Er.batchedUpdates((() => this.advance())), Ka(this)) : so.start(this))
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
        os = class extends Si {
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
          createAnimatedStyle: n = e => new Si(e),
          getComponentProps: r = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            i = e => {
              const t = Ri(e) || "Anonymous";
              return (e = Ur.str(e) ? i[e] || (i[e] = Oi(e, o)) : e[ji] || (e[ji] = Oi(e, o))).displayName = `Animated(${t})`, e
            };
          return Xr(e, ((t, n) => {
            Ur.arr(e) && (n = Ri(t)), i[n] = i(t)
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
              d = Object.keys(c).map((t => n || e.hasAttribute(t) ? t : Ya[t] || (Ya[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const n = $a(t, o[t]);
                Wa.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } d.forEach(((t, n) => {
              e.setAttribute(t, u[n])
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
        cs = e => {
          const t = (e, t, n) => {
            n(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, n) => {
            const r = n.getBoundingClientRect();
            return e ? (t(e.top, r.top, ((e, t) => e < t)), t(e.bottom, r.bottom, ((e, t) => e > t)), t(e.left, r.left, ((e, t) => e < t)), t(e.right, r.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), r) : r
          }), null)
        },
        us = ([e, t], n) => {
          const {
            a: r
          } = new DOMMatrix(n.style.transform), o = cs(n), i = o.width / r, a = 100 * hs(e, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / i, s = o.height / r;
          return {
            x: a,
            y: 100 * hs(t, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / s
          }
        },
        ds = (e, t, n, r) => {
          let o = n[0],
            i = n[1];
          const {
            a
          } = new DOMMatrix(e.style.transform), s = r / 100, l = cs(e), c = t.getBoundingClientRect(), u = l.width / a / 2, d = c.width / 2, h = u * s > d ? u * s - d : 0, f = l.height / a / 2, p = c.height / 2, m = f * s > p ? f * s - p : 0, g = -o > h, v = o > h, y = i > m, b = -i > m;
          return g && !v ? o = -h : v && !g && (o = h), y && !b ? i = m : b && !y && (i = -m), {
            xy: [o, i],
            horizontalOffset: h,
            verticalOffset: m
          }
        },
        hs = (e, t, n) => Math.min(Math.max(e, t), n),
        fs = {
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
            (0, h.useEffect)((() => (document.addEventListener("gesturestart", n), document.addEventListener("gesturechange", n), t.current?.addEventListener("dragstart", n), t.current?.addEventListener("click", n), e.current?.addEventListener("dragstart", n), e.current?.addEventListener("click", n), () => {
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
          return (0, u.jsx)("div", {
            ref: t,
            className: "foundry_hcgxh_148vt480",
            style: l,
            children: (0, u.jsx)(ss.div, {
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
      var vs = n(23514);

      function ys(e, t) {
        var n = t && t.cache ? t.cache : Ns,
          r = t && t.serializer ? t.serializer : Es;
        return (t && t.strategy ? t.strategy : xs)(e, {
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

      function xs(e, t) {
        return ws(e, this, 1 === e.length ? bs : _s, t.cache.create(), t.serializer)
      }
      var Es = function() {
        return JSON.stringify(arguments)
      };

      function Ss() {
        this.cache = Object.create(null)
      }
      Ss.prototype.get = function(e) {
        return this.cache[e]
      }, Ss.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var Ps, Cs, Ts, Os, Ns = {
          create: function() {
            return new Ss
          }
        },
        js = {
          variadic: function(e, t) {
            return ws(e, this, _s, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return ws(e, this, bs, t.cache.create(), t.serializer)
          }
        };

      function Rs(e) {
        return e.type === Cs.literal
      }

      function Ls(e) {
        return e.type === Cs.argument
      }

      function As(e) {
        return e.type === Cs.number
      }

      function Is(e) {
        return e.type === Cs.date
      }

      function Ds(e) {
        return e.type === Cs.time
      }

      function ks(e) {
        return e.type === Cs.select
      }

      function Ms(e) {
        return e.type === Cs.plural
      }

      function Hs(e) {
        return e.type === Cs.pound
      }

      function Bs(e) {
        return e.type === Cs.tag
      }

      function Fs(e) {
        return !(!e || "object" != typeof e || e.type !== Ts.number)
      }

      function Vs(e) {
        return !(!e || "object" != typeof e || e.type !== Ts.dateTime)
      }(Os = Ps || (Ps = {}))[Os.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", Os[Os.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", Os[Os.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", Os[Os.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", Os[Os.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", Os[Os.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", Os[Os.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", Os[Os.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", Os[Os.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", Os[Os.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", Os[Os.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", Os[Os.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", Os[Os.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", Os[Os.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", Os[Os.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", Os[Os.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", Os[Os.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", Os[Os.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", Os[Os.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", Os[Os.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", Os[Os.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", Os[Os.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", Os[Os.INVALID_TAG = 23] = "INVALID_TAG", Os[Os.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", Os[Os.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", Os[Os.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(Cs || (Cs = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(Ts || (Ts = {}));
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
        cl = !!String.fromCodePoint,
        ul = !!Object.fromEntries,
        dl = !!String.prototype.codePointAt,
        hl = !!String.prototype.trimStart,
        fl = !!String.prototype.trimEnd,
        pl = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        ml = !0;
      try {
        ml = "a" === (null === (nl = El("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === nl ? void 0 : nl[0])
      } catch (e) {
        ml = !1
      }
      var gl, vl = ll ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        yl = cl ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        bl = ul ? Object.fromEntries : function(e) {
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
        wl = hl ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(il, "")
        },
        xl = fl ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(al, "")
        };

      function El(e, t) {
        return new RegExp(e, t)
      }
      if (ml) {
        var Sl = El("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        gl = function(e, t) {
          var n;
          return Sl.lastIndex = t, null !== (n = Sl.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else gl = function(e, t) {
        for (var n = [];;) {
          var r = _l(e, t);
          if (void 0 === r || Nl(r) || jl(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return yl.apply(void 0, n)
      };
      var Pl, Cl, Tl = function() {
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
                  return this.error(Ps.UNMATCHED_CLOSING_TAG, sl(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Ol(this.peek() || 0)) {
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
                  type: Cs.pound,
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
              type: Cs.literal,
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
              if (this.isEOF() || !Ol(this.char())) return this.error(Ps.INVALID_TAG, sl(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(Ps.UNMATCHED_CLOSING_TAG, sl(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Cs.tag,
                  value: r,
                  children: i,
                  location: sl(n, this.clonePosition())
                },
                err: null
              } : this.error(Ps.INVALID_TAG, sl(a, this.clonePosition())))
            }
            return this.error(Ps.UNCLOSED_TAG, sl(n, this.clonePosition()))
          }
          return this.error(Ps.INVALID_TAG, sl(n, this.clonePosition()))
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
              type: Cs.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Ol(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Ps.EXPECT_ARGUMENT_CLOSING_BRACE, sl(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Ps.EMPTY_ARGUMENT, sl(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(Ps.MALFORMED_ARGUMENT, sl(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Ps.EXPECT_ARGUMENT_CLOSING_BRACE, sl(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Cs.argument,
                  value: r,
                  location: sl(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ps.EXPECT_ARGUMENT_CLOSING_BRACE, sl(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(Ps.MALFORMED_ARGUMENT, sl(n, this.clonePosition()))
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
              return this.error(Ps.EXPECT_ARGUMENT_TYPE, sl(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (f = xl(v.val)).length) return this.error(Ps.EXPECT_ARGUMENT_STYLE, sl(this.clonePosition(), this.clonePosition()));
                l = {
                  style: f,
                  styleLocation: sl(c, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var u = sl(r, this.clonePosition());
              if (l && vl(null == l ? void 0 : l.style, "::", 0)) {
                var d = wl(l.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? v : {
                  val: {
                    type: Cs.number,
                    value: n,
                    location: u,
                    style: v.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Ps.EXPECT_DATE_TIME_SKELETON, u);
                var h = d;
                this.locale && (h = function(e, t) {
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
                var f = {
                  type: Ts.dateTime,
                  pattern: h,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Gs(h) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Cs.date : Cs.time,
                    value: n,
                    location: u,
                    style: f
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Cs.number : "date" === a ? Cs.date : Cs.time,
                  value: n,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Ps.EXPECT_SELECT_ARGUMENT_OPTIONS, sl(p, (0, vs.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                g = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Ps.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, sl(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(Ps.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ps.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), g = v.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var _ = sl(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Cs.select,
                  value: n,
                  options: bl(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Cs.plural,
                  value: n,
                  options: bl(b.val),
                  offset: g,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Ps.INVALID_ARGUMENT_TYPE, sl(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Ps.EXPECT_ARGUMENT_CLOSING_BRACE, sl(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Ps.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, sl(n, this.clonePosition()));
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
            return this.error(Ps.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Ts.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? tl(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, c = r.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Ps.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ps.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = sl(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Ps.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ps.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var h = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Ps.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ps.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, sl(this.clonePosition(), this.clonePosition()));
            var f = this.parseMessage(e + 1, t, n);
            if (f.err) return f;
            var p = this.tryParseArgumentClose(h);
            if (p.err) return p;
            a.push([l, {
              value: f.val,
              location: sl(h, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Ps.EXPECT_SELECT_ARGUMENT_SELECTOR : Ps.EXPECT_PLURAL_ARGUMENT_SELECTOR, sl(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Ps.MISSING_OTHER_CLAUSE, sl(this.clonePosition(), this.clonePosition())) : {
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
          for (; !this.isEOF() && Nl(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }, e
      }();

      function Ol(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Nl(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function jl(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Rl(e) {
        e.forEach((function(e) {
          if (delete e.location, ks(e) || Ms(e))
            for (var t in e.options) delete e.options[t].location, Rl(e.options[t].value);
          else As(e) && Fs(e.style) || (Is(e) || Ds(e)) && Vs(e.style) ? delete e.style.location : Bs(e) && Rl(e.children)
        }))
      }

      function Ll(e, t) {
        void 0 === t && (t = {}), t = (0, vs.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var n = new Tl(e, t).parse();
        if (n.err) {
          var r = SyntaxError(Ps[n.err.kind]);
          throw r.location = n.err.location, r.originalMessage = n.err.message, r
        }
        return (null == t ? void 0 : t.captureLocation) || Rl(n.val), n.val
      }(Cl = Pl || (Pl = {})).MISSING_VALUE = "MISSING_VALUE", Cl.INVALID_VALUE = "INVALID_VALUE", Cl.MISSING_INTL_API = "MISSING_INTL_API";
      var Al, Il = function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return o.code = n, o.originalMessage = r, o
          }
          return (0, vs.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        Dl = function(e) {
          function t(t, n, r, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(r).join('", "'), '"'), Pl.INVALID_VALUE, o) || this
          }
          return (0, vs.__extends)(t, e), t
        }(Il),
        kl = function(e) {
          function t(t, n, r) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), Pl.INVALID_VALUE, r) || this
          }
          return (0, vs.__extends)(t, e), t
        }(Il),
        Ml = function(e) {
          function t(t, n) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), Pl.MISSING_VALUE, n) || this
          }
          return (0, vs.__extends)(t, e), t
        }(Il);

      function Hl(e) {
        return "function" == typeof e
      }

      function Bl(e, t, n, r, o, i, a) {
        if (1 === e.length && Rs(e[0])) return [{
          type: Al.literal,
          value: e[0].value
        }];
        for (var s = [], l = 0, c = e; l < c.length; l++) {
          var u = c[l];
          if (Rs(u)) s.push({
            type: Al.literal,
            value: u.value
          });
          else if (Hs(u)) "number" == typeof i && s.push({
            type: Al.literal,
            value: n.getNumberFormat(t).format(i)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new Ml(d, a);
            var h = o[d];
            if (Ls(u)) h && "string" != typeof h && "number" != typeof h || (h = "string" == typeof h || "number" == typeof h ? String(h) : ""), s.push({
              type: "string" == typeof h ? Al.literal : Al.object,
              value: h
            });
            else if (Is(u)) {
              var f = "string" == typeof u.style ? r.date[u.style] : Vs(u.style) ? u.style.parsedOptions : void 0;
              s.push({
                type: Al.literal,
                value: n.getDateTimeFormat(t, f).format(h)
              })
            } else if (Ds(u)) f = "string" == typeof u.style ? r.time[u.style] : Vs(u.style) ? u.style.parsedOptions : r.time.medium, s.push({
              type: Al.literal,
              value: n.getDateTimeFormat(t, f).format(h)
            });
            else if (As(u))(f = "string" == typeof u.style ? r.number[u.style] : Fs(u.style) ? u.style.parsedOptions : void 0) && f.scale && (h *= f.scale || 1), s.push({
              type: Al.literal,
              value: n.getNumberFormat(t, f).format(h)
            });
            else {
              if (Bs(u)) {
                var p = u.children,
                  m = u.value,
                  g = o[m];
                if (!Hl(g)) throw new kl(m, "function", a);
                var v = g(Bl(p, t, n, r, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(v) || (v = [v]), s.push.apply(s, v.map((function(e) {
                  return {
                    type: "string" == typeof e ? Al.literal : Al.object,
                    value: e
                  }
                })))
              }
              if (ks(u)) {
                if (!(y = u.options[h] || u.options.other)) throw new Dl(u.value, h, Object.keys(u.options), a);
                s.push.apply(s, Bl(y.value, t, n, r, o))
              } else if (Ms(u)) {
                var y;
                if (!(y = u.options["=".concat(h)])) {
                  if (!Intl.PluralRules) throw new Il('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Pl.MISSING_INTL_API, a);
                  var b = n.getPluralRules(t, {
                    type: u.pluralType
                  }).select(h - (u.offset || 0));
                  y = u.options[b] || u.options.other
                }
                if (!y) throw new Dl(u.value, h, Object.keys(u.options), a);
                s.push.apply(s, Bl(y.value, t, n, r, o, h - (u.offset || 0)))
              }
            }
          }
        }
        return (_ = s).length < 2 ? _ : _.reduce((function(e, t) {
          var n = e[e.length - 1];
          return n && n.type === Al.literal && t.type === Al.literal ? n.value += t.value : e.push(t), e
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
      }(Al || (Al = {}));
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
                return e.length && t.type === Al.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
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
            var c = o || {},
              u = (c.formatters, (0, vs.__rest)(c, ["formatters"]));
            this.ast = e.__parse(t, (0, vs.__assign)((0, vs.__assign)({}, u), {
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
              strategy: js.variadic
            }),
            getDateTimeFormat: ys((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Fl(i.dateTime),
              strategy: js.variadic
            }),
            getPluralRules: ys((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.PluralRules).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
            }), {
              cache: Fl(i.pluralRules),
              strategy: js.variadic
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
        }, e.__parse = Ll, e.formats = {
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

      function ec(e, t) {
        var n = t && t.cache ? t.cache : sc,
          r = t && t.serializer ? t.serializer : ic;
        return (t && t.strategy ? t.strategy : oc)(e, {
          cache: n,
          serializer: r
        })
      }

      function tc(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function nc(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function rc(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function oc(e, t) {
        return rc(e, this, 1 === e.length ? tc : nc, t.cache.create(), t.serializer)
      }
      var ic = function() {
        return JSON.stringify(arguments)
      };

      function ac() {
        this.cache = Object.create(null)
      }
      ac.prototype.get = function(e) {
        return this.cache[e]
      }, ac.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var sc = {
          create: function() {
            return new ac
          }
        },
        lc = {
          variadic: function(e, t) {
            return rc(e, this, nc, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return rc(e, this, tc, t.cache.create(), t.serializer)
          }
        };

      function cc(e) {
        ! function(e, t, n) {
          if (void 0 === n && (n = Error), !e) throw new n("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      ec((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: lc.variadic
      }), ec((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: lc.variadic
      }), ec((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.PluralRules).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: lc.variadic
      }), ec((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.Locale).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: lc.variadic
      }), ec((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.ListFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: lc.variadic
      });
      var uc = (0, vs.__assign)((0, vs.__assign)({}, Zl), {
        textComponent: h.Fragment
      });
      n(67332);
      var dc = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? h.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = h.createContext(null)),
        hc = (dc.Consumer, dc.Provider),
        fc = dc;

      function pc(e, t) {
        return Object.keys(e).reduce((function(n, r) {
          return n[r] = (0, vs.__assign)({
            timeZone: t
          }, e[r]), n
        }), {})
      }

      function mc(e, t) {
        return Object.keys((0, vs.__assign)((0, vs.__assign)({}, e), t)).reduce((function(n, r) {
          return n[r] = (0, vs.__assign)((0, vs.__assign)({}, e[r] || {}), t[r] || {}), n
        }), {})
      }

      function gc(e, t) {
        if (!t) return e;
        var n = zl.formats;
        return (0, vs.__assign)((0, vs.__assign)((0, vs.__assign)({}, n), e), {
          date: mc(pc(n.date, t), pc(e.date || {}, t)),
          time: mc(pc(n.time, t), pc(e.time || {}, t))
        })
      }
      ys((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: js.variadic
      }), ys((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: js.variadic
      }), ys((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.PluralRules).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: js.variadic
      }), ys((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.Locale).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: js.variadic
      }), ys((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.ListFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: js.variadic
      });
      var vc = function(e, t, n, r, o) {
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
          if (Array.isArray(v) && 1 === v.length && v[0].type === Cs.literal) return v[0].value;
          if (!r && v && "string" == typeof v && !f) return v.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (r = (0, vs.__assign)((0, vs.__assign)({}, f), r || {}), a = gc(a, h), c = gc(c, h), !v) {
            if (!1 === u && "" === v) return v;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new $l(n, i)), m) try {
              return t.getMessageFormat(m, l, c, o).format(r)
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
            return t.getMessageFormat(m, l, c, o).format(r)
          } catch (e) {
            d(new Wl('Error formatting the default message for: "'.concat(g, '", rendering message verbatim'), i, n, e))
          }
          return "string" == typeof v ? v : "string" == typeof m ? m : g
        },
        yc = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function bc(e, t, n) {
        var r = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === n && (n = {});
        var a = n.format,
          s = a && Jl(o, "number", a, i) || {};
        return t(r, Yl(n, yc, s))
      }

      function _c(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return bc(e, t, r).format(n)
        } catch (t) {
          e.onError(new Kl("Error formatting number.", e.locale, t))
        }
        return String(n)
      }

      function wc(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return bc(e, t, r).formatToParts(n)
        } catch (t) {
          e.onError(new Kl("Error formatting number.", e.locale, t))
        }
        return []
      }
      var xc = ["numeric", "style"];

      function Ec(e, t, n, r, o) {
        void 0 === o && (o = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new Il('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', Pl.MISSING_INTL_API));
        try {
          return function(e, t, n) {
            var r = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === n && (n = {});
            var a = n.format,
              s = !!a && Jl(o, "relative", a, i) || {};
            return t(r, Yl(n, xc, s))
          }(e, t, o).format(n, r)
        } catch (t) {
          e.onError(new Kl("Error formatting relative time.", e.locale, t))
        }
        return String(n)
      }
      var Sc = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function Pc(e, t, n, r) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === r && (r = {});
        var l = r.format,
          c = (0, vs.__assign)((0, vs.__assign)({}, s && {
            timeZone: s
          }), l && Jl(i, t, l, a)),
          u = Yl(r, Sc, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, vs.__assign)((0, vs.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), n(o, u)
      }

      function Cc(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Pc(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new Kl("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function Tc(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Pc(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new Kl("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function Oc(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = n[2],
          s = void 0 === a ? {} : a,
          l = e.timeZone,
          c = e.locale,
          u = e.onError,
          d = Yl(s, Sc, l ? {
            timeZone: l
          } : {});
        try {
          return t(c, d).formatRange(o, i)
        } catch (t) {
          u(new Kl("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function Nc(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Pc(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Kl("Error formatting date.", e.locale, t))
        }
        return []
      }

      function jc(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Pc(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Kl("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Rc = ["type"];

      function Lc(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.PluralRules || i(new Il('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Pl.MISSING_INTL_API));
        var a = Yl(r, Rc);
        try {
          return t(o, a).select(n)
        } catch (e) {
          i(new Kl("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Ac = ["type", "style"],
        Ic = Date.now();

      function Dc(e, t, n, r) {
        void 0 === r && (r = {});
        var o = kc(e, t, n, r).reduce((function(e, t) {
          var n = t.value;
          return "string" != typeof n ? e.push(n) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function kc(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.ListFormat || i(new Il('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', Pl.MISSING_INTL_API));
        var a = Yl(r, Ac);
        try {
          var s = {},
            l = n.map((function(e, t) {
              if ("object" == typeof e) {
                var n = function(e) {
                  return "".concat(Ic, "_").concat(e, "_").concat(Ic)
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
      var Mc, Hc, Bc, Fc = ["style", "type", "fallback", "languageDisplay"];

      function Vc(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new Il('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', Pl.MISSING_INTL_API));
        var a = Yl(r, Fc);
        try {
          return t(o, a).of(n)
        } catch (e) {
          i(new Kl("Error formatting display name.", o, e))
        }
      }

      function zc(e, t) {
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
                strategy: js.variadic
              }),
              i = ys((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Ql(e.number),
                strategy: js.variadic
              }),
              a = ys((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.PluralRules).bind.apply(e, (0, vs.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Ql(e.pluralRules),
                strategy: js.variadic
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
                strategy: js.variadic
              }),
              getRelativeTimeFormat: ys((function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new(t.bind.apply(t, (0, vs.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Ql(e.relativeTime),
                strategy: js.variadic
              }),
              getPluralRules: a,
              getListFormat: ys((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, vs.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Ql(e.list),
                strategy: js.variadic
              }),
              getDisplayNames: ys((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, vs.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Ql(e.displayNames),
                strategy: js.variadic
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
            formatNumber: _c.bind(null, r, n.getNumberFormat),
            formatNumberToParts: wc.bind(null, r, n.getNumberFormat),
            formatRelativeTime: Ec.bind(null, r, n.getRelativeTimeFormat),
            formatDate: Cc.bind(null, r, n.getDateTimeFormat),
            formatDateToParts: Nc.bind(null, r, n.getDateTimeFormat),
            formatTime: Tc.bind(null, r, n.getDateTimeFormat),
            formatDateTimeRange: Oc.bind(null, r, n.getDateTimeFormat),
            formatTimeToParts: jc.bind(null, r, n.getDateTimeFormat),
            formatPlural: Lc.bind(null, r, n.getPluralRules),
            formatMessage: vc.bind(null, r, n),
            $t: vc.bind(null, r, n),
            formatList: Dc.bind(null, r, n.getListFormat),
            formatListToParts: kc.bind(null, r, n.getListFormat),
            formatDisplayName: Vc.bind(null, r, n.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Mc || (Mc = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Hc || (Hc = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Bc || (Bc = {}));
      var Uc, Gc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        qc = {
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

      function Xc(e) {
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
        return "root" !== r && (n = e.maximize().region), (qc[n || ""] || qc[r || ""] || qc["".concat(r, "-001")] || qc["001"])[0]
      }
      var Kc = new RegExp("^".concat(Gc.source, "*")),
        Wc = new RegExp("".concat(Gc.source, "*$"));

      function $c(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Yc = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Zc = !!String.fromCodePoint,
        Qc = !!Object.fromEntries,
        Jc = !!String.prototype.codePointAt,
        eu = !!String.prototype.trimStart,
        tu = !!String.prototype.trimEnd,
        nu = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        ru = !0;
      try {
        ru = "a" === (null === (Uc = hu("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Uc ? void 0 : Uc[0])
      } catch (e) {
        ru = !1
      }
      var ou, iu, au = Yc ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        su = Zc ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        lu = Qc ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        cu = Jc ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        uu = eu ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Kc, "")
        },
        du = tu ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Wc, "")
        };

      function hu(e, t) {
        return new RegExp(e, t)
      }
      if (ru) {
        var fu = hu("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        ou = function(e, t) {
          var n;
          return fu.lastIndex = t, null !== (n = fu.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else ou = function(e, t) {
        for (var n = [];;) {
          var r = cu(e, t);
          if (void 0 === r || mu(r) || gu(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return su.apply(void 0, n)
      };

      function pu(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function mu(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function gu(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function vu(e) {
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
                  return this.error(Mc.UNMATCHED_CLOSING_TAG, $c(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && pu(this.peek() || 0)) {
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
                  type: Hc.pound,
                  location: $c(a, this.clonePosition())
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
              type: Hc.literal,
              value: "<".concat(r, "/>"),
              location: $c(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !pu(this.char())) return this.error(Mc.INVALID_TAG, $c(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(Mc.UNMATCHED_CLOSING_TAG, $c(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Hc.tag,
                  value: r,
                  children: i,
                  location: $c(n, this.clonePosition())
                },
                err: null
              } : this.error(Mc.INVALID_TAG, $c(a, this.clonePosition())))
            }
            return this.error(Mc.UNCLOSED_TAG, $c(n, this.clonePosition()))
          }
          return this.error(Mc.INVALID_TAG, $c(n, this.clonePosition()))
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
          var s = $c(n, this.clonePosition());
          return {
            val: {
              type: Hc.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (pu(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return su.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), su(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Mc.EXPECT_ARGUMENT_CLOSING_BRACE, $c(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Mc.EMPTY_ARGUMENT, $c(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(Mc.MALFORMED_ARGUMENT, $c(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Mc.EXPECT_ARGUMENT_CLOSING_BRACE, $c(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Hc.argument,
                  value: r,
                  location: $c(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Mc.EXPECT_ARGUMENT_CLOSING_BRACE, $c(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(Mc.MALFORMED_ARGUMENT, $c(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = ou(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: $c(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Mc.EXPECT_ARGUMENT_TYPE, $c(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((v = this.parseSimpleArgStyleIfPossible()).err) return v;
                if (0 === (f = du(v.val)).length) return this.error(Mc.EXPECT_ARGUMENT_STYLE, $c(this.clonePosition(), this.clonePosition()));
                l = {
                  style: f,
                  styleLocation: $c(c, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var u = $c(r, this.clonePosition());
              if (l && au(null == l ? void 0 : l.style, "::", 0)) {
                var d = uu(l.style.slice(2));
                if ("number" === a) return (v = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? v : {
                  val: {
                    type: Hc.number,
                    value: n,
                    location: u,
                    style: v.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Mc.EXPECT_DATE_TIME_SKELETON, u);
                var h = d;
                this.locale && (h = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = Xc(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var f = {
                  type: Bc.dateTime,
                  pattern: h,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Gs(h) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Hc.date : Hc.time,
                    value: n,
                    location: u,
                    style: f
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Hc.number : "date" === a ? Hc.date : Hc.time,
                  value: n,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Mc.EXPECT_SELECT_ARGUMENT_OPTIONS, $c(p, (0, vs.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                g = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Mc.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, $c(this.clonePosition(), this.clonePosition()));
                var v;
                if (this.bumpSpace(), (v = this.tryParseDecimalInteger(Mc.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Mc.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return v;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), g = v.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var _ = $c(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Hc.select,
                  value: n,
                  options: lu(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Hc.plural,
                  value: n,
                  options: lu(b.val),
                  offset: g,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Mc.INVALID_ARGUMENT_TYPE, $c(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Mc.EXPECT_ARGUMENT_CLOSING_BRACE, $c(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Mc.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, $c(n, this.clonePosition()));
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
            return this.error(Mc.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Bc.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? tl(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, c = r.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Mc.EXPECT_PLURAL_ARGUMENT_SELECTOR, Mc.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = $c(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Mc.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Mc.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var h = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Mc.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Mc.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, $c(this.clonePosition(), this.clonePosition()));
            var f = this.parseMessage(e + 1, t, n);
            if (f.err) return f;
            var p = this.tryParseArgumentClose(h);
            if (p.err) return p;
            a.push([l, {
              value: f.val,
              location: $c(h, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Mc.EXPECT_SELECT_ARGUMENT_SELECTOR : Mc.EXPECT_PLURAL_ARGUMENT_SELECTOR, $c(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Mc.MISSING_OTHER_CLAUSE, $c(this.clonePosition(), this.clonePosition())) : {
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
          var s = $c(r, this.clonePosition());
          return o ? nu(i *= n) ? {
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
          var t = cu(this.message, e);
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
          if (au(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && mu(this.char());) this.bump()
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
      }(iu || (iu = {}));
      var yu = function(e, t, n, r) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var a = vu(r),
            s = vc.apply(void 0, (0, vs.__spreadArray)([e, t, n, a], o, !1));
          return Array.isArray(s) ? h.Children.toArray(s) : s
        },
        bu = function(e, t) {
          var n = e.defaultRichTextElements,
            r = (0, vs.__rest)(e, ["defaultRichTextElements"]),
            o = vu(n),
            i = zc((0, vs.__assign)((0, vs.__assign)((0, vs.__assign)({}, uc), r), {
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
            formatMessage: yu.bind(null, a, i.formatters),
            $t: yu.bind(null, a, i.formatters)
          })
        };

      function _u(e) {
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
      var wu = function(e) {
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
            intl: bu(_u(t.props), t.cache),
            prevConfig: _u(t.props)
          }, t
        }
        return (0, vs.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var n = t.prevConfig,
            r = t.cache,
            o = _u(e);
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
            intl: bu(o, r),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return cc(this.state.intl), h.createElement(hc, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = uc, t
      }(h.PureComponent);
      const xu = wu;

      function Eu() {
        var e = h.useContext(fc);
        return cc(e), e
      }
      var Su, Pu;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(Su || (Su = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(Pu || (Pu = {}));
      var Cu = function(e) {
        var t = Eu(),
          n = e.value,
          r = e.children,
          o = (0, vs.__rest)(e, ["value", "children"]);
        return r(t.formatNumberToParts(n, o))
      };

      function Tu(e) {
        var t = function(t) {
          var n = Eu(),
            r = t.value,
            o = t.children,
            i = (0, vs.__rest)(t, ["value", "children"]),
            a = "string" == typeof r ? new Date(r || 0) : r;
          return o("formatDate" === e ? n.formatDateToParts(a, i) : n.formatTimeToParts(a, i))
        };
        return t.displayName = Pu[e], t
      }

      function Ou(e) {
        var t = function(t) {
          var n = Eu(),
            r = t.value,
            o = t.children,
            i = (0, vs.__rest)(t, ["value", "children"]),
            a = n[e](r, i);
          if ("function" == typeof o) return o(a);
          var s = n.textComponent || h.Fragment;
          return h.createElement(s, null, a)
        };
        return t.displayName = Su[e], t
      }
      Cu.displayName = "FormattedNumberParts", Cu.displayName = "FormattedNumberParts", Ou("formatDate"), Ou("formatTime"), Ou("formatNumber"), Ou("formatList"), Ou("formatDisplayName"), Tu("formatDate"), Tu("formatTime");
      const Nu = ({
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
          }), [n]), o ? (0, u.jsx)(xu, {
            locale: n,
            messages: o,
            children: e
          }) : r ?? null
        },
        ju = {
          id: "Lightbox_Open_Button_Label"
        },
        Ru = {
          id: "Lightbox_Dialog_Title"
        },
        Lu = {
          id: "Lightbox_Dialog_Description"
        },
        Au = {
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
      var Iu = n(23111);
      const Du = (e, t) => {
        const n = "more" === t ? Iu.xW.lightHc : Iu.xW.light,
          r = "more" === t ? Iu.xW.darkHc : Iu.xW.dark;
        return "dark" === e ? r : n
      };

      function ku(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }

      function Mu(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      var Hu = n(86410);

      function Bu(e, t = []) {
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
        }, Fu(r, ...t)]
      }

      function Fu(...e) {
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
      var Vu = globalThis?.document ? h.useLayoutEffect : () => {},
        zu = f[" useInsertionEffect ".trim().toString()] || Vu;

      function Uu({
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
          return zu((() => {
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
      var Gu = h.createContext(void 0);

      function qu(e) {
        const t = h.useContext(Gu);
        return e || t || "ltr"
      }

      function Xu(e) {
        const t = h.useRef({
          value: e,
          previous: e
        });
        return h.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }

      function Ku(e) {
        const [t, n] = h.useState(void 0);
        return Vu((() => {
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
      var Wu = n(23135),
        $u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, t) => {
          const n = (0, Wu.TL)(`Primitive.${t}`),
            r = h.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, u.jsx)(a, {
                ...i,
                ref: r
              })
            }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {});

      function Yu(e) {
        const t = e + "CollectionProvider",
          [n, r] = Bu(t),
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
          l = (0, Wu.TL)(s),
          c = h.forwardRef(((e, t) => {
            const {
              scope: n,
              children: r
            } = e, o = i(s, n), a = (0, Hu.s)(t, o.collectionRef);
            return (0, u.jsx)(l, {
              ref: a,
              children: r
            })
          }));
        c.displayName = s;
        const d = e + "CollectionItemSlot",
          f = "data-radix-collection-item",
          p = (0, Wu.TL)(d),
          m = h.forwardRef(((e, t) => {
            const {
              scope: n,
              children: r,
              ...o
            } = e, a = h.useRef(null), s = (0, Hu.s)(t, a), l = i(d, n);
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
      var Zu = ["PageUp", "PageDown"],
        Qu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Ju = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        ed = "Slider",
        [td, nd, rd] = Yu(ed),
        [od, id] = Bu(ed, [rd]),
        [ad, sd] = od(ed),
        ld = h.forwardRef(((e, t) => {
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
          } = e, y = h.useRef(new Set), b = h.useRef(0), _ = "horizontal" === a ? dd : hd, [w = [], x] = Uu({
            prop: d,
            defaultProp: c,
            onChange: e => {
              const t = [...y.current];
              t[b.current]?.focus(), f(e)
            }
          }), E = h.useRef(w);

          function S(e, t, {
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
              c = ku(s, [r, o]);
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
          return (0, u.jsx)(ad, {
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
            children: (0, u.jsx)(td.Provider, {
              scope: e.__scopeSlider,
              children: (0, u.jsx)(td.Slot, {
                scope: e.__scopeSlider,
                children: (0, u.jsx)(_, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...v,
                  ref: t,
                  onPointerDown: Mu(v.onPointerDown, (() => {
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
                    S(e, t)
                  },
                  onSlideMove: s ? void 0 : function(e) {
                    S(e, b.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const e = E.current[b.current];
                    w[b.current] !== e && p(w)
                  },
                  onHomeKeyDown: () => !s && S(r, 0, {
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
                      const n = Zu.includes(e.key) || e.shiftKey && Qu.includes(e.key) ? 10 : 1,
                        r = b.current;
                      S(w[r] + i * n * t, r, {
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
      var [cd, ud] = od(ed, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), dd = h.forwardRef(((e, t) => {
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
        } = e, [f, p] = h.useState(null), m = (0, Hu.s)(t, (e => p(e))), g = h.useRef(void 0), v = qu(o), y = "ltr" === v, b = y && !i || !y && i;

        function _(e) {
          const t = g.current || f.getBoundingClientRect(),
            o = Ed([0, t.width], b ? [n, r] : [r, n]);
          return g.current = t, o(e - t.left)
        }
        return (0, u.jsx)(cd, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, u.jsx)(fd, {
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
              const t = Ju[b ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), hd = h.forwardRef(((e, t) => {
        const {
          min: n,
          max: r,
          inverted: o,
          onSlideStart: i,
          onSlideMove: a,
          onSlideEnd: s,
          onStepKeyDown: l,
          ...c
        } = e, d = h.useRef(null), f = (0, Hu.s)(t, d), p = h.useRef(void 0), m = !o;

        function g(e) {
          const t = p.current || d.current.getBoundingClientRect(),
            o = Ed([0, t.height], m ? [r, n] : [n, r]);
          return p.current = t, o(e - t.top)
        }
        return (0, u.jsx)(cd, {
          scope: e.__scopeSlider,
          startEdge: m ? "bottom" : "top",
          endEdge: m ? "top" : "bottom",
          size: "height",
          direction: m ? 1 : -1,
          children: (0, u.jsx)(fd, {
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
              const t = Ju[m ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), fd = h.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: a,
          onEndKeyDown: s,
          onStepKeyDown: l,
          ...c
        } = e, d = sd(ed, n);
        return (0, u.jsx)($u.span, {
          ...c,
          ref: t,
          onKeyDown: Mu(e.onKeyDown, (e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : Zu.concat(Qu).includes(e.key) && (l(e), e.preventDefault())
          })),
          onPointerDown: Mu(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : r(e)
          })),
          onPointerMove: Mu(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: Mu(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          }))
        })
      })), pd = "SliderTrack", md = h.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          ...r
        } = e, o = sd(pd, n);
        return (0, u.jsx)($u.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: t
        })
      }));
      md.displayName = pd;
      var gd = "SliderRange",
        vd = h.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            ...r
          } = e, o = sd(gd, n), i = ud(gd, n), a = h.useRef(null), s = (0, Hu.s)(t, a), l = o.values.length, c = o.values.map((e => xd(e, o.min, o.max))), d = l > 1 ? Math.min(...c) : 0, f = 100 - Math.max(...c);
          return (0, u.jsx)($u.span, {
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
      vd.displayName = gd;
      var yd = "SliderThumb",
        bd = h.forwardRef(((e, t) => {
          const n = nd(e.__scopeSlider),
            [r, o] = h.useState(null),
            i = (0, Hu.s)(t, (e => o(e))),
            a = h.useMemo((() => r ? n().findIndex((e => e.ref.current === r)) : -1), [n, r]);
          return (0, u.jsx)(_d, {
            ...e,
            ref: i,
            index: a
          })
        })),
        _d = h.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            index: r,
            name: o,
            ...i
          } = e, a = sd(yd, n), s = ud(yd, n), [l, c] = h.useState(null), d = (0, Hu.s)(t, (e => c(e))), f = !l || a.form || !!l.closest("form"), p = Ku(l), m = a.values[r], g = void 0 === m ? 0 : xd(m, a.min, a.max), v = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(r, a.values.length), y = p?.[s.size], b = y ? function(e, t, n) {
            const r = e / 2;
            return (r - Ed([0, 50], [0, r])(t) * n) * n
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
            children: [(0, u.jsx)(td.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, u.jsx)($u.span, {
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
                onFocus: Mu(e.onFocus, (() => {
                  a.valueIndexToChangeRef.current = r
                }))
              })
            }), f && (0, u.jsx)(wd, {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: m
            }, r)]
          })
        }));
      bd.displayName = yd;
      var wd = h.forwardRef((({
        __scopeSlider: e,
        value: t,
        ...n
      }, r) => {
        const o = h.useRef(null),
          i = (0, Hu.s)(o, r),
          a = Xu(t);
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
        }), [a, t]), (0, u.jsx)($u.input, {
          style: {
            display: "none"
          },
          ...n,
          ref: i,
          defaultValue: t
        })
      }));

      function xd(e, t, n) {
        return ku(100 / (n - t) * (e - t), [0, 100])
      }

      function Ed(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      wd.displayName = "RadioBubbleInput";
      var Sd = ld,
        Pd = md,
        Cd = vd,
        Td = bd;
      const Od = {
          id: "Lightbox_Close_Button_Label"
        },
        Nd = {
          id: "Lightbox_Close_Button_Tooltip"
        },
        jd = {
          id: "Lightbox_Zoom_In_Button_Label"
        },
        Rd = {
          id: "Lightbox_Zoom_In_Button_Tooltip"
        },
        Ld = {
          id: "Lightbox_Zoom_Out_Button_Label"
        },
        Ad = {
          id: "Lightbox_Zoom_Out_Button__Tooltip"
        },
        Id = {
          id: "Lightbox_Reset_Zoom_Button_Label"
        },
        Dd = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip"
        },
        kd = {
          id: "Lightbox_Zoom_Slider_Label"
        },
        Md = {
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
      var Zd = (0, h.createContext)(void 0);

      function Qd(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          r = e.children;
        return (0, u.jsx)(Zd.Provider, {
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
      var eh = (0, h.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        th = function(e) {
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
                  return !Jd(t, e)
                }))
              }))
            }), []);
          return (0, u.jsx)(eh.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: d,
              disableScope: f,
              toggleScope: p
            },
            children: (0, u.jsx)(Qd, {
              addHotkey: m,
              removeHotkey: g,
              children: r
            })
          })
        },
        nh = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        rh = "undefined" != typeof window ? h.useLayoutEffect : h.useEffect;

      function oh(e, t, n, r) {
        var o = (0, h.useState)(null),
          i = o[0],
          a = o[1],
          s = (0, h.useRef)(!1),
          l = n instanceof Array ? r instanceof Array ? void 0 : r : n,
          c = Kd(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = n instanceof Array ? n : r instanceof Array ? r : void 0,
          d = (0, h.useCallback)(t, null != u ? u : []),
          f = (0, h.useRef)(d);
        f.current = u ? d : t;
        var p = function(e) {
            var t = (0, h.useRef)(void 0);
            return Jd(t.current, e) || (t.current = e), t.current
          }(l),
          m = (0, h.useContext)(eh).enabledScopes,
          g = (0, h.useContext)(Zd);
        return rh((function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = m, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !Yd(e, ["input", "textarea", "select"]) || Yd(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== i) {
                    var r = i.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== i && !i.contains(r.activeElement)) return void nh(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != p && p.enableOnContentEditable) && Gd(c, null == p ? void 0 : p.splitKey).forEach((function(n) {
                    var r, o = qd(n, null == p ? void 0 : p.combinationKey);
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
                          v = Ud(h),
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
                        return !(!u || 1 !== u.length || !u.includes(y) && !u.includes(v)) || (u ? (void 0 === o && (o = ","), (Kd(r = u) ? r : r.split(o)).every((function(e) {
                          return Xd.has(e.trim().toLowerCase())
                        }))) : !u)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == p ? void 0 : p.enabled)) return void nh(e);
                      f.current(e, o), t || (s.current = !0)
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
            return a.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.addEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), g && Gd(c, null == p ? void 0 : p.splitKey).forEach((function(e) {
                return g.addHotkey(qd(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              })),
              function() {
                a.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.removeEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), g && Gd(c, null == p ? void 0 : p.splitKey).forEach((function(e) {
                  return g.removeHotkey(qd(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                }))
              }
          }
        }), [i, c, p, m]), a
      }

      function ih(e) {
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

      function ah(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function sh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ah(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = ih(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ah(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function lh(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var ch = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        uh = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = sh(sh({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ch(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return lh(e.variantClassNames, (e => lh(e, (e => e.split(" ")[0]))))
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
      const dh = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        hh = (0, h.forwardRef)((({
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
            S = (0, d.v6)({
              ..._,
              role: "button",
              "data-pressed": E,
              "data-testid": e,
              className: uh({
                appearance: i,
                size: b,
                fullWidth: a
              })
            }, {
              ...x,
              className: n
            }),
            P = z[r],
            C = t ? m.DX : "button",
            T = dh[b];
          return (0, u.jsxs)(C, {
            ref: v,
            ...S,
            children: [P && (0, u.jsx)(P, {
              label: o || "",
              size: T
            }), (0, u.jsx)(m.xV, {
              children: c
            })]
          })
        })),
        fh = new Map;

      function ph(e, t) {
        if (e === t) return e;
        const n = fh.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = fh.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function mh(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      var gh;

      function vh(e) {
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

      function yh(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function bh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yh(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = vh(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yh(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function _h(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      n(40323), n(5117), n(74534), n(66573), n(11666), n(96810), n(1571),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(gh || (gh = {})), Symbol.toStringTag;
      var wh = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        xh = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = bh(bh({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) wh(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _h(e.variantClassNames, (e => _h(e, (e => e.split(" ")[0]))))
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
      const Eh = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const a = e ? Wu.DX : "p",
          s = function(...e) {
            const t = {
              ...e[0]
            };
            for (let n = 1; n < e.length; n++) {
              const r = e[n];
              for (const e in r) {
                const n = t[e],
                  o = r[e];
                "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = mh(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = ph(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, A.A)(n, o)
              }
            }
            return t
          }({
            className: xh({
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
      var Sh = "foundry_local_bc732x1";
      const Ph = (0, h.forwardRef)((({
        shortcut: e,
        isInline: t,
        onShortcut: n
      }, r) => (oh(e, (e => n?.(e)), [n]), (0, u.jsx)(Eh, {
        size: "XS",
        className: (0, A.$)("foundry_local_bc732x0", {
          [Sh]: t
        }),
        asChild: !0,
        children: (0, u.jsx)("kbd", {
          ref: r,
          children: e
        })
      }))));

      function Ch(e) {
        const t = h.useRef(e);
        return h.useEffect((() => {
          t.current = e
        })), h.useMemo((() => (...e) => t.current?.(...e)), [])
      }
      var Th, Oh = "dismissableLayer.update",
        Nh = h.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        jh = h.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: a,
            onDismiss: s,
            ...l
          } = e, c = h.useContext(Nh), [d, f] = h.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = h.useState({}), g = (0, Hu.s)(t, (e => f(e))), v = Array.from(c.layers), [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(y), _ = d ? v.indexOf(d) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, x = _ >= b, E = function(e, t = globalThis?.document) {
            const n = Ch(e),
              r = h.useRef(!1),
              o = h.useRef((() => {}));
            return h.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      Lh("dismissableLayer.pointerDownOutside", n, i, {
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
          }), p), S = function(e, t = globalThis?.document) {
            const n = Ch(e),
              r = h.useRef(!1);
            return h.useEffect((() => {
              const e = e => {
                e.target && !r.current && Lh("dismissableLayer.focusOutside", n, {
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
            const n = Ch(e);
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
            if (d) return n && (0 === c.layersWithOutsidePointerEventsDisabled.size && (Th = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), Rh(), () => {
              n && 1 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = Th)
            }
          }), [d, p, n, c]), h.useEffect((() => () => {
            d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), Rh())
          }), [d, c]), h.useEffect((() => {
            const e = () => m({});
            return document.addEventListener(Oh, e), () => document.removeEventListener(Oh, e)
          }), []), (0, u.jsx)($u.div, {
            ...l,
            ref: g,
            style: {
              pointerEvents: w ? x ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: Mu(e.onFocusCapture, S.onFocusCapture),
            onBlurCapture: Mu(e.onBlurCapture, S.onBlurCapture),
            onPointerDownCapture: Mu(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        }));

      function Rh() {
        const e = new CustomEvent(Oh);
        document.dispatchEvent(e)
      }

      function Lh(e, t, n, {
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
      jh.displayName = "DismissableLayer", h.forwardRef(((e, t) => {
        const n = h.useContext(Nh),
          r = h.useRef(null),
          o = (0, Hu.s)(t, r);
        return h.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, u.jsx)($u.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var Ah = f[" useId ".trim().toString()] || (() => {}),
        Ih = 0;

      function Dh(e) {
        const [t, n] = h.useState(Ah());
        return Vu((() => {
          e || n((e => e ?? String(Ih++)))
        }), [e]), e || (t ? `radix-${t}` : "")
      }
      const kh = ["top", "right", "bottom", "left"],
        Mh = Math.min,
        Hh = Math.max,
        Bh = Math.round,
        Fh = Math.floor,
        Vh = e => ({
          x: e,
          y: e
        }),
        zh = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        Uh = {
          start: "end",
          end: "start"
        };

      function Gh(e, t, n) {
        return Hh(e, Mh(t, n))
      }

      function qh(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function Xh(e) {
        return e.split("-")[0]
      }

      function Kh(e) {
        return e.split("-")[1]
      }

      function Wh(e) {
        return "x" === e ? "y" : "x"
      }

      function $h(e) {
        return "y" === e ? "height" : "width"
      }

      function Yh(e) {
        return ["top", "bottom"].includes(Xh(e)) ? "y" : "x"
      }

      function Zh(e) {
        return Wh(Yh(e))
      }

      function Qh(e) {
        return e.replace(/start|end/g, (e => Uh[e]))
      }

      function Jh(e) {
        return e.replace(/left|right|bottom|top/g, (e => zh[e]))
      }

      function ef(e) {
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

      function tf(e) {
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

      function nf(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = Yh(t),
          a = Zh(t),
          s = $h(a),
          l = Xh(t),
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
        switch (Kh(t)) {
          case "start":
            f[a] -= h * (n && c ? -1 : 1);
            break;
          case "end":
            f[a] += h * (n && c ? -1 : 1)
        }
        return f
      }
      async function rf(e, t) {
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
        } = qh(t, e), p = ef(f), m = s[h ? "floating" === d ? "reference" : "floating" : d], g = tf(await i.getClippingRect({
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
        }, _ = tf(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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

      function of(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function af(e) {
        return kh.some((t => e[t] >= 0))
      }

      function sf() {
        return "undefined" != typeof window
      }

      function lf(e) {
        return df(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function cf(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function uf(e) {
        var t;
        return null == (t = (df(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function df(e) {
        return !!sf() && (e instanceof Node || e instanceof cf(e).Node)
      }

      function hf(e) {
        return !!sf() && (e instanceof Element || e instanceof cf(e).Element)
      }

      function ff(e) {
        return !!sf() && (e instanceof HTMLElement || e instanceof cf(e).HTMLElement)
      }

      function pf(e) {
        return !(!sf() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof cf(e).ShadowRoot)
      }

      function mf(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = wf(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
      }

      function gf(e) {
        return ["table", "td", "th"].includes(lf(e))
      }

      function vf(e) {
        return [":popover-open", ":modal"].some((t => {
          try {
            return e.matches(t)
          } catch (e) {
            return !1
          }
        }))
      }

      function yf(e) {
        const t = bf(),
          n = hf(e) ? wf(e) : e;
        return ["transform", "translate", "scale", "rotate", "perspective"].some((e => !!n[e] && "none" !== n[e])) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
      }

      function bf() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function _f(e) {
        return ["html", "body", "#document"].includes(lf(e))
      }

      function wf(e) {
        return cf(e).getComputedStyle(e)
      }

      function xf(e) {
        return hf(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function Ef(e) {
        if ("html" === lf(e)) return e;
        const t = e.assignedSlot || e.parentNode || pf(e) && e.host || uf(e);
        return pf(t) ? t.host : t
      }

      function Sf(e) {
        const t = Ef(e);
        return _f(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ff(t) && mf(t) ? t : Sf(t)
      }

      function Pf(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = Sf(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = cf(o);
        if (i) {
          const e = Cf(a);
          return t.concat(a, a.visualViewport || [], mf(o) ? o : [], e && n ? Pf(e) : [])
        }
        return t.concat(o, Pf(o, [], n))
      }

      function Cf(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function Tf(e) {
        const t = wf(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = ff(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          s = Bh(n) !== i || Bh(r) !== a;
        return s && (n = i, r = a), {
          width: n,
          height: r,
          $: s
        }
      }

      function Of(e) {
        return hf(e) ? e : e.contextElement
      }

      function Nf(e) {
        const t = Of(e);
        if (!ff(t)) return Vh(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = Tf(t);
        let a = (i ? Bh(n.width) : n.width) / r,
          s = (i ? Bh(n.height) : n.height) / o;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const jf = Vh(0);

      function Rf(e) {
        const t = cf(e);
        return bf() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : jf
      }

      function Lf(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = Of(e);
        let a = Vh(1);
        t && (r ? hf(r) && (a = Nf(r)) : a = Nf(e));
        const s = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== cf(e)) && t
        }(i, n, r) ? Rf(i) : Vh(0);
        let l = (o.left + s.x) / a.x,
          c = (o.top + s.y) / a.y,
          u = o.width / a.x,
          d = o.height / a.y;
        if (i) {
          const e = cf(i),
            t = r && hf(r) ? cf(r) : r;
          let n = e,
            o = Cf(n);
          for (; o && r && t !== n;) {
            const e = Nf(o),
              t = o.getBoundingClientRect(),
              r = wf(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            l *= e.x, c *= e.y, u *= e.x, d *= e.y, l += i, c += a, n = cf(o), o = Cf(n)
          }
        }
        return tf({
          width: u,
          height: d,
          x: l,
          y: c
        })
      }

      function Af(e, t) {
        const n = xf(e).scrollLeft;
        return t ? t.left + n : Lf(uf(e)).left + n
      }

      function If(e, t, n) {
        void 0 === n && (n = !1);
        const r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : Af(e, r)),
          y: r.top + t.scrollTop
        }
      }

      function Df(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = cf(e),
            r = uf(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            a = r.clientHeight,
            s = 0,
            l = 0;
          if (o) {
            i = o.width, a = o.height;
            const e = bf();
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
          const t = uf(e),
            n = xf(e),
            r = e.ownerDocument.body,
            o = Hh(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            i = Hh(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let a = -n.scrollLeft + Af(e);
          const s = -n.scrollTop;
          return "rtl" === wf(r).direction && (a += Hh(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: a,
            y: s
          }
        }(uf(e));
        else if (hf(t)) r = function(e, t) {
          const n = Lf(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = ff(e) ? Nf(e) : Vh(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(t, n);
        else {
          const n = Rf(e);
          r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return tf(r)
      }

      function kf(e, t) {
        const n = Ef(e);
        return !(n === t || !hf(n) || _f(n)) && ("fixed" === wf(n).position || kf(n, t))
      }

      function Mf(e, t, n) {
        const r = ff(t),
          o = uf(t),
          i = "fixed" === n,
          a = Lf(e, !0, i, t);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = Vh(0);
        if (r || !r && !i)
          if (("body" !== lf(t) || mf(o)) && (s = xf(t)), r) {
            const e = Lf(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && (l.x = Af(o));
        const c = !o || r || i ? Vh(0) : If(o, s);
        return {
          x: a.left + s.scrollLeft - l.x - c.x,
          y: a.top + s.scrollTop - l.y - c.y,
          width: a.width,
          height: a.height
        }
      }

      function Hf(e) {
        return "static" === wf(e).position
      }

      function Bf(e, t) {
        if (!ff(e) || "fixed" === wf(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return uf(e) === n && (n = n.ownerDocument.body), n
      }

      function Ff(e, t) {
        const n = cf(e);
        if (vf(e)) return n;
        if (!ff(e)) {
          let t = Ef(e);
          for (; t && !_f(t);) {
            if (hf(t) && !Hf(t)) return t;
            t = Ef(t)
          }
          return n
        }
        let r = Bf(e, t);
        for (; r && gf(r) && Hf(r);) r = Bf(r, t);
        return r && _f(r) && Hf(r) && !yf(r) ? n : r || function(e) {
          let t = Ef(e);
          for (; ff(t) && !_f(t);) {
            if (yf(t)) return t;
            if (vf(t)) return null;
            t = Ef(t)
          }
          return null
        }(e) || n
      }
      const Vf = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
          } = e;
          const i = "fixed" === o,
            a = uf(r),
            s = !!t && vf(t.floating);
          if (r === a || s && i) return n;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            c = Vh(1);
          const u = Vh(0),
            d = ff(r);
          if ((d || !d && !i) && (("body" !== lf(r) || mf(a)) && (l = xf(r)), ff(r))) {
            const e = Lf(r);
            c = Nf(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop
          }
          const h = !a || d || i ? Vh(0) : If(a, l, !0);
          return {
            width: n.width * c.x,
            height: n.height * c.y,
            x: n.x * c.x - l.scrollLeft * c.x + u.x + h.x,
            y: n.y * c.y - l.scrollTop * c.y + u.y + h.y
          }
        },
        getDocumentElement: uf,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === n ? vf(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = Pf(e, [], !1).filter((e => hf(e) && "body" !== lf(e))),
                o = null;
              const i = "fixed" === wf(e).position;
              let a = i ? Ef(e) : e;
              for (; hf(a) && !_f(a);) {
                const t = wf(a),
                  n = yf(a);
                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || mf(a) && !n && kf(e, a)) ? r = r.filter((e => e !== a)) : o = t, a = Ef(a)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            a = i[0],
            s = i.reduce(((e, n) => {
              const r = Df(t, n, o);
              return e.top = Hh(r.top, e.top), e.right = Mh(r.right, e.right), e.bottom = Mh(r.bottom, e.bottom), e.left = Hh(r.left, e.left), e
            }), Df(t, a, o));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
          }
        },
        getOffsetParent: Ff,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || Ff,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: Mf(e.reference, await t(e.floating), e.strategy),
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
          } = Tf(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: Nf,
        isElement: hf,
        isRTL: function(e) {
          return "rtl" === wf(e).direction
        }
      };

      function zf(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const Uf = function(e) {
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
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = Xh(n), s = Kh(n), l = "y" === Yh(n), c = ["left", "top"].includes(a) ? -1 : 1, u = i && l ? -1 : 1, d = qh(t, e);
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
        Gf = function(e) {
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
              } = qh(e, t), c = {
                x: n,
                y: r
              }, u = await rf(t, l), d = Yh(Xh(o)), h = Wh(d);
              let f = c[h],
                p = c[d];
              if (i) {
                const e = "y" === h ? "bottom" : "right";
                f = Gh(f + u["y" === h ? "top" : "left"], f, f - u[e])
              }
              if (a) {
                const e = "y" === d ? "bottom" : "right";
                p = Gh(p + u["y" === d ? "top" : "left"], p, p - u[e])
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
        qf = function(e) {
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
              } = qh(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const v = Xh(o),
                y = Yh(s),
                b = Xh(s) === s,
                _ = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                w = h || (b || !m ? [Jh(s)] : function(e) {
                  const t = Jh(e);
                  return [Qh(e), t, Qh(t)]
                }(s)),
                x = "none" !== p;
              !h && x && w.push(... function(e, t, n, r) {
                const o = Kh(e);
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
                }(Xh(e), "start" === n, r);
                return o && (i = i.map((e => e + "-" + o)), t && (i = i.concat(i.map(Qh)))), i
              }(s, m, p, _));
              const E = [s, ...w],
                S = await rf(t, g),
                P = [];
              let C = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (u && P.push(S[v]), d) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = Kh(e),
                    o = Zh(e),
                    i = $h(o);
                  let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (a = Jh(a)), [a, Jh(a)]
                }(o, a, _);
                P.push(S[e[0]], S[e[1]])
              }
              if (C = [...C, {
                  placement: o,
                  overflows: P
                }], !P.every((e => e <= 0))) {
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
                        const t = Yh(e.placement);
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
        Xf = function(e) {
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
              } = qh(e, t), u = await rf(t, c), d = Xh(o), h = Kh(o), f = "y" === Yh(o), {
                width: p,
                height: m
              } = i.floating;
              let g, v;
              "top" === d || "bottom" === d ? (g = d, v = h === (await (null == a.isRTL ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (v = d, g = "end" === h ? "top" : "bottom");
              const y = m - u.top - u.bottom,
                b = p - u.left - u.right,
                _ = Mh(m - u[g], y),
                w = Mh(p - u[v], b),
                x = !t.middlewareData.shift;
              let E = _,
                S = w;
              if (null != (n = t.middlewareData.shift) && n.enabled.x && (S = b), null != (r = t.middlewareData.shift) && r.enabled.y && (E = y), x && !h) {
                const e = Hh(u.left, 0),
                  t = Hh(u.right, 0),
                  n = Hh(u.top, 0),
                  r = Hh(u.bottom, 0);
                f ? S = p - 2 * (0 !== e || 0 !== t ? e + t : Hh(u.left, u.right)) : E = m - 2 * (0 !== n || 0 !== r ? n + r : Hh(u.top, u.bottom))
              }
              await l({
                ...t,
                availableWidth: S,
                availableHeight: E
              });
              const P = await a.getDimensions(s.floating);
              return p !== P.width || m !== P.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        Kf = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: n
              } = t, {
                strategy: r = "referenceHidden",
                ...o
              } = qh(e, t);
              switch (r) {
                case "referenceHidden": {
                  const e = of(await rf(t, {
                    ...o,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: af(e)
                    }
                  }
                }
                case "escaped": {
                  const e = of(await rf(t, {
                    ...o,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: af(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        Wf = e => ({
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
            } = qh(e, t) || {};
            if (null == c) return {};
            const d = ef(u),
              h = {
                x: n,
                y: r
              },
              f = Zh(o),
              p = $h(f),
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
            const S = _ / 2 - w / 2,
              P = E / 2 - m[p] / 2 - 1,
              C = Mh(d[v], P),
              T = Mh(d[y], P),
              O = C,
              N = E - m[p] - T,
              j = E / 2 - m[p] / 2 + S,
              R = Gh(O, j, N),
              L = !l.arrow && null != Kh(o) && j !== R && i.reference[p] / 2 - (j < O ? C : T) - m[p] / 2 < 0,
              A = L ? j < O ? j - O : j - N : 0;
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
        $f = function(e) {
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
              } = qh(e, t), u = {
                x: n,
                y: r
              }, d = Yh(o), h = Wh(d);
              let f = u[h],
                p = u[d];
              const m = qh(s, t),
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
                  t = ["top", "left"].includes(Xh(o)),
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
        Yf = (e, t, n) => {
          const r = new Map,
            o = {
              platform: Vf,
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
              } = nf(c, r, l),
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
              } = nf(c, h, l))), n = -1)
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
      var Zf = "undefined" != typeof document ? h.useLayoutEffect : h.useEffect;

      function Qf(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 != r--;)
              if (!Qf(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || Qf(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Jf(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function ep(e, t) {
        const n = Jf(e);
        return Math.round(t * n) / n
      }

      function tp(e) {
        const t = h.useRef(e);
        return Zf((() => {
          t.current = e
        })), t
      }
      const np = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: n,
              padding: r
            } = "function" == typeof e ? e(t) : e;
            return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? Wf({
              element: n.current,
              padding: r
            }).fn(t) : {} : n ? Wf({
              element: n,
              padding: r
            }).fn(t) : {};
            var o
          }
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
          ...$f(e),
          options: [e, t]
        }),
        ap = (e, t) => ({
          ...qf(e),
          options: [e, t]
        }),
        sp = (e, t) => ({
          ...Xf(e),
          options: [e, t]
        }),
        lp = (e, t) => ({
          ...Kf(e),
          options: [e, t]
        }),
        cp = (e, t) => ({
          ...np(e),
          options: [e, t]
        });
      var up = h.forwardRef(((e, t) => {
        const {
          children: n,
          width: r = 10,
          height: o = 5,
          ...i
        } = e;
        return (0, u.jsx)($u.svg, {
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
      up.displayName = "Arrow";
      var dp = up,
        hp = "Popper",
        [fp, pp] = Bu(hp),
        [mp, gp] = fp(hp),
        vp = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [r, o] = h.useState(null);
          return (0, u.jsx)(mp, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
          })
        };
      vp.displayName = hp;
      var yp = "PopperAnchor",
        bp = h.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: r,
            ...o
          } = e, i = gp(yp, n), a = h.useRef(null), s = (0, Hu.s)(t, a);
          return h.useEffect((() => {
            i.onAnchorChange(r?.current || a.current)
          })), r ? null : (0, u.jsx)($u.div, {
            ...o,
            ref: s
          })
        }));
      bp.displayName = yp;
      var _p = "PopperContent",
        [wp, xp] = fp(_p),
        Ep = h.forwardRef(((e, t) => {
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
          } = e, y = gp(_p, n), [b, _] = h.useState(null), w = (0, Hu.s)(t, (e => _(e))), [x, E] = h.useState(null), S = Ku(x), P = S?.width ?? 0, C = S?.height ?? 0, T = r + ("center" !== i ? "-" + i : ""), O = "number" == typeof d ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
          }, N = Array.isArray(c) ? c : [c], j = N.length > 0, R = {
            padding: O,
            boundary: N.filter(Tp),
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
            Qf(f, r) || p(r);
            const [m, g] = h.useState(null), [v, y] = h.useState(null), b = h.useCallback((e => {
              e !== E.current && (E.current = e, g(e))
            }), []), _ = h.useCallback((e => {
              e !== S.current && (S.current = e, y(e))
            }), []), w = i || m, x = a || v, E = h.useRef(null), S = h.useRef(null), P = h.useRef(u), C = null != l, T = tp(l), O = tp(o), N = tp(c), j = h.useCallback((() => {
              if (!E.current || !S.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: f
              };
              O.current && (e.platform = O.current), Yf(E.current, S.current, e).then((e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== N.current
                };
                R.current && !Qf(P.current, t) && (P.current = t, Gt.flushSync((() => {
                  d(t)
                })))
              }))
            }), [f, t, n, O, N]);
            Zf((() => {
              !1 === c && P.current.isPositioned && (P.current.isPositioned = !1, d((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [c]);
            const R = h.useRef(!1);
            Zf((() => (R.current = !0, () => {
              R.current = !1
            })), []), Zf((() => {
              if (w && (E.current = w), x && (S.current = x), w && x) {
                if (T.current) return T.current(w, x, j);
                j()
              }
            }), [w, x, j, T, C]);
            const L = h.useMemo((() => ({
                reference: E,
                floating: S,
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
                const t = ep(A.floating, u.x),
                  r = ep(A.floating, u.y);
                return s ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...Jf(A.floating) >= 1.5 && {
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
            placement: T,
            whileElementsMounted: (...e) => function(e, t, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: i = !0,
                elementResize: a = "function" == typeof ResizeObserver,
                layoutShift: s = "function" == typeof IntersectionObserver,
                animationFrame: l = !1
              } = r, c = Of(e), u = o || i ? [...c ? Pf(c) : [], ...Pf(t)] : [];
              u.forEach((e => {
                o && e.addEventListener("scroll", n, {
                  passive: !0
                }), i && e.addEventListener("resize", n)
              }));
              const d = c && s ? function(e, t) {
                let n, r = null;
                const o = uf(e);

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
                    rootMargin: -Fh(d) + "px " + -Fh(o.clientWidth - (u + h)) + "px " + -Fh(o.clientHeight - (d + f)) + "px " + -Fh(u) + "px",
                    threshold: Hh(0, Mh(1, l)) || 1
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
                    1 !== r || zf(c, e.getBoundingClientRect()) || a(), m = !1
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
              let m = l ? Lf(e) : null;
              return l && function t() {
                const r = Lf(e);
                m && !zf(m, r) && n(), m = r, h = requestAnimationFrame(t)
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
            middleware: [rp({
              mainAxis: o + C,
              alignmentAxis: a
            }), l && op({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === f ? ip() : void 0,
              ...R
            }), l && ap({
              ...R
            }), sp({
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
            }), x && cp({
              element: x,
              padding: s
            }), Op({
              arrowWidth: P,
              arrowHeight: C
            }), p && lp({
              strategy: "referenceHidden",
              ...R
            })]
          }), [M, H] = Np(I), B = Ch(g);
          Vu((() => {
            D && B?.()
          }), [D, B]);
          const F = k.arrow?.x,
            V = k.arrow?.y,
            z = 0 !== k.arrow?.centerOffset,
            [U, G] = h.useState();
          return Vu((() => {
            b && G(window.getComputedStyle(b).zIndex)
          }), [b]), (0, u.jsx)("div", {
            ref: L.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...A,
              transform: D ? A.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: U,
              "--radix-popper-transform-origin": [k.transformOrigin?.x, k.transformOrigin?.y].join(" "),
              ...k.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, u.jsx)(wp, {
              scope: n,
              placedSide: M,
              onArrowChange: E,
              arrowX: F,
              arrowY: V,
              shouldHideArrow: z,
              children: (0, u.jsx)($u.div, {
                "data-side": M,
                "data-align": H,
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
      Ep.displayName = _p;
      var Sp = "PopperArrow",
        Pp = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Cp = h.forwardRef((function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = xp(Sp, n), i = Pp[o.placedSide];
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
            children: (0, u.jsx)(dp, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        }));

      function Tp(e) {
        return null !== e
      }
      Cp.displayName = Sp;
      var Op = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [l, c] = Np(n), u = {
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

      function Np(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var jp = vp,
        Rp = bp,
        Lp = Ep,
        Ap = Cp,
        Ip = h.forwardRef(((e, t) => {
          const {
            container: n,
            ...r
          } = e, [o, i] = h.useState(!1);
          Vu((() => i(!0)), []);
          const a = n || o && globalThis?.document?.body;
          return a ? Gt.createPortal((0, u.jsx)($u.div, {
            ...r,
            ref: t
          }), a) : null
        }));
      Ip.displayName = "Portal";
      var Dp = e => {
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
            const e = kp(r.current);
            i.current = "mounted" === s ? e : "none"
          }), [s]), Vu((() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                a = kp(t);
              l(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : n && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, l]), Vu((() => {
            if (t) {
              let e;
              const n = t.ownerDocument.defaultView ?? window,
                a = i => {
                  const a = kp(r.current).includes(i.animationName);
                  if (i.target === t && a && (l("ANIMATION_END"), !o.current)) {
                    const r = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = n.setTimeout((() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                    }))
                  }
                },
                s = e => {
                  e.target === t && (i.current = kp(r.current))
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
        }) : h.Children.only(n), i = (0, Hu.s)(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? h.cloneElement(o, {
          ref: i
        }) : null
      };

      function kp(e) {
        return e?.animationName || "none"
      }
      Dp.displayName = "Presence";
      var Mp = Object.freeze({
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
        Hp = h.forwardRef(((e, t) => (0, u.jsx)($u.span, {
          ...e,
          ref: t,
          style: {
            ...Mp,
            ...e.style
          }
        })));
      Hp.displayName = "VisuallyHidden";
      var Bp = Hp,
        [Fp, Vp] = Bu("Tooltip", [pp]),
        zp = pp(),
        Up = "TooltipProvider",
        Gp = 700,
        qp = "tooltip.open",
        [Xp, Kp] = Fp(Up),
        Wp = e => {
          const {
            __scopeTooltip: t,
            delayDuration: n = Gp,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, a = h.useRef(!0), s = h.useRef(!1), l = h.useRef(0);
          return h.useEffect((() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }), []), (0, u.jsx)(Xp, {
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
      Wp.displayName = Up;
      var $p = "Tooltip",
        [Yp, Zp] = Fp($p),
        Qp = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: a,
            delayDuration: s
          } = e, l = Kp($p, e.__scopeTooltip), c = zp(t), [d, f] = h.useState(null), p = Dh(), m = h.useRef(0), g = a ?? l.disableHoverableContent, v = s ?? l.delayDuration, y = h.useRef(!1), [b, _] = Uu({
            prop: r,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(qp))) : l.onClose(), i?.(e)
            },
            caller: $p
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
          }), []), (0, u.jsx)(jp, {
            ...c,
            children: (0, u.jsx)(Yp, {
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
              children: n
            })
          })
        };
      Qp.displayName = $p;
      var Jp = "TooltipTrigger",
        em = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Zp(Jp, n), i = Kp(Jp, n), a = zp(n), s = h.useRef(null), l = (0, Hu.s)(t, s, o.onTriggerChange), c = h.useRef(!1), d = h.useRef(!1), f = h.useCallback((() => c.current = !1), []);
          return h.useEffect((() => () => document.removeEventListener("pointerup", f)), [f]), (0, u.jsx)(Rp, {
            asChild: !0,
            ...a,
            children: (0, u.jsx)($u.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...r,
              ref: l,
              onPointerMove: Mu(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (d.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), d.current = !0))
              })),
              onPointerLeave: Mu(e.onPointerLeave, (() => {
                o.onTriggerLeave(), d.current = !1
              })),
              onPointerDown: Mu(e.onPointerDown, (() => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", f, {
                  once: !0
                })
              })),
              onFocus: Mu(e.onFocus, (() => {
                c.current || o.onOpen()
              })),
              onBlur: Mu(e.onBlur, o.onClose),
              onClick: Mu(e.onClick, o.onClose)
            })
          })
        }));
      em.displayName = Jp;
      var tm = "TooltipPortal",
        [nm, rm] = Fp(tm, {
          forceMount: void 0
        }),
        om = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = Zp(tm, t);
          return (0, u.jsx)(nm, {
            scope: t,
            forceMount: n,
            children: (0, u.jsx)(Dp, {
              present: n || i.open,
              children: (0, u.jsx)(Ip, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      om.displayName = tm;
      var im = "TooltipContent",
        am = h.forwardRef(((e, t) => {
          const n = rm(im, e.__scopeTooltip),
            {
              forceMount: r = n.forceMount,
              side: o = "top",
              ...i
            } = e,
            a = Zp(im, e.__scopeTooltip);
          return (0, u.jsx)(Dp, {
            present: r || a.open,
            children: a.disableHoverableContent ? (0, u.jsx)(dm, {
              side: o,
              ...i,
              ref: t
            }) : (0, u.jsx)(sm, {
              side: o,
              ...i,
              ref: t
            })
          })
        })),
        sm = h.forwardRef(((e, t) => {
          const n = Zp(im, e.__scopeTooltip),
            r = Kp(im, e.__scopeTooltip),
            o = h.useRef(null),
            i = (0, Hu.s)(t, o),
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
          }), [l, d, a, c, p]), (0, u.jsx)(dm, {
            ...e,
            ref: i
          })
        })),
        [lm, cm] = Fp($p, {
          isInside: !1
        }),
        um = (0, Wu.Dc)("TooltipContent"),
        dm = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            ...s
          } = e, l = Zp(im, n), c = zp(n), {
            onClose: d
          } = l;
          return h.useEffect((() => (document.addEventListener(qp, d), () => document.removeEventListener(qp, d))), [d]), h.useEffect((() => {
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
          }), [l.trigger, d]), (0, u.jsx)(jh, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: d,
            children: (0, u.jsxs)(Lp, {
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
              children: [(0, u.jsx)(um, {
                children: r
              }), (0, u.jsx)(lm, {
                scope: n,
                isInside: !0,
                children: (0, u.jsx)(Bp, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || r
                })
              })]
            })
          })
        }));
      am.displayName = im;
      var hm = "TooltipArrow",
        fm = h.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = zp(n);
          return cm(hm, n).isInside ? null : (0, u.jsx)(Ap, {
            ...o,
            ...r,
            ref: t
          })
        }));
      fm.displayName = hm;
      var pm = Wp,
        mm = Qp,
        gm = em,
        vm = om,
        ym = am,
        bm = fm;
      const _m = ({
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
        const [E = !1, S] = (0, U.ic)({
          defaultProp: m,
          prop: g,
          onChange: v
        }), P = (0, U.ZC)(E), C = Fa({
          opacity: E ? 1 : 0,
          immediate: E && !P
        }), T = "left" === n || "right" === n ? "center" : o, O = b ? {
          container: w
        } : {}, N = b ? vm : h.Fragment, j = _ ? {
          className: "foundry_hcgxh_h3lgaa2"
        } : {}, R = _ ? bm : h.Fragment;
        return (0, u.jsx)(pm, {
          delayDuration: y,
          children: (0, u.jsxs)(mm, {
            open: E,
            onOpenChange: S,
            children: [(0, u.jsx)(gm, {
              asChild: !0,
              className: "foundry_hcgxh_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, u.jsx)(N, {
              ...O,
              children: (0, u.jsx)(ym, {
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
                children: (0, u.jsxs)(ss.div, {
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
      var wm = "foundry_hcgxh_bwy1ds1",
        xm = "foundry_hcgxh_bwy1dsg",
        Em = "foundry_hcgxh_bwy1dsf";
      const Sm = e => {
          e.preventDefault?.()
        },
        Pm = (0, h.forwardRef)((({
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
          const v = Eu(),
            y = (0, U.Ub)("screen and (max-width: 1024px)"),
            b = n !== p,
            _ = y ? "SM" : "LG",
            w = Fa({
              opacity: b ? 1 : 0,
              immediate: (0, U.jt)()
            });
          oh(["+", "=", "add", "plus"], (() => r?.()), {
            preventDefault: !0,
            enabled: m
          }), oh(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0,
            enabled: m
          }), oh("r", (() => d?.()), {
            preventDefault: !0,
            enabled: m
          });
          const x = (0, U.rl)() && y;
          return (0, u.jsx)(th, {
            children: (0, u.jsxs)("div", {
              className: "foundry_hcgxh_bwy1ds0",
              ref: g,
              children: [(0, u.jsx)(_m, {
                side: "right",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: Sm,
                content: (0, u.jsxs)("div", {
                  className: Em,
                  children: [v.formatMessage(Od), (0, u.jsx)(F, {
                    size: "XS",
                    className: xm,
                    children: v.formatMessage(Nd, {
                      shortcut: (0, u.jsx)(Ph, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, u.jsx)(hh, {
                  size: _,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: v.formatMessage(Od),
                  className: (0, A.$)(wm, "foundry_hcgxh_bwy1ds2"),
                  onPress: e
                })
              }), (0, u.jsxs)("div", {
                className: "foundry_hcgxh_bwy1ds3",
                children: [!x && m && (0, u.jsxs)(u.Fragment, {
                  children: [(0, u.jsxs)("div", {
                    className: "foundry_hcgxh_bwy1ds4",
                    children: [(0, u.jsx)(_m, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: Sm,
                      content: (0, u.jsxs)("div", {
                        className: Em,
                        children: [v.formatMessage(jd), (0, u.jsx)(F, {
                          size: "XS",
                          className: xm,
                          children: v.formatMessage(Rd, {
                            shortcut: (0, u.jsx)(Ph, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(hh, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: v.formatMessage(jd),
                        className: (0, A.$)(wm, "foundry_hcgxh_bwy1ds5"),
                        onPress: () => r(),
                        isDisabled: !l
                      })
                    }), (0, u.jsxs)(Sd, {
                      className: "foundry_hcgxh_bwy1dsa",
                      value: [n],
                      max: s,
                      min: a,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => i?.(e[0]),
                      children: [(0, u.jsx)(Pd, {
                        className: "foundry_hcgxh_bwy1dsb",
                        children: (0, u.jsx)(Cd, {
                          className: "foundry_hcgxh_bwy1dsc"
                        })
                      }), (0, u.jsx)(_m, {
                        side: "left",
                        portal: !1,
                        delayDuration: 0,
                        onPointerDownOutside: Sm,
                        content: v.formatMessage(Md, {
                          zoom: n.toFixed(0)
                        }),
                        children: (0, u.jsx)(Td, {
                          className: "foundry_hcgxh_bwy1dsd",
                          "aria-label": v.formatMessage(kd),
                          children: (0, u.jsx)("span", {
                            className: "foundry_hcgxh_bwy1dse"
                          })
                        })
                      })]
                    }), (0, u.jsx)(_m, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: Sm,
                      content: (0, u.jsxs)("div", {
                        className: Em,
                        children: [v.formatMessage(Ld), (0, u.jsx)(F, {
                          size: "XS",
                          className: xm,
                          children: v.formatMessage(Ad, {
                            shortcut: (0, u.jsx)(Ph, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(hh, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: v.formatMessage(Ld),
                        className: (0, A.$)(wm, "foundry_hcgxh_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !c
                      })
                    })]
                  }), (0, u.jsx)(ss.div, {
                    style: w,
                    children: (0, u.jsx)(_m, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: Sm,
                      content: (0, u.jsxs)("div", {
                        className: Em,
                        children: [v.formatMessage(Id), (0, u.jsx)(F, {
                          size: "XS",
                          className: xm,
                          children: v.formatMessage(Dd, {
                            shortcut: (0, u.jsx)(Ph, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, u.jsx)(hh, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Undo",
                        label: v.formatMessage(Id),
                        className: (0, A.$)(wm, "foundry_hcgxh_bwy1ds7"),
                        onPress: d,
                        isDisabled: !b,
                        "aria-hidden": !b
                      })
                    })
                  })]
                }), f && x && (0, u.jsx)(_m, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: Sm,
                  content: v.formatMessage(Bd),
                  children: (0, u.jsx)(hh, {
                    size: _,
                    appearance: "tertiary",
                    icon: "Download",
                    label: v.formatMessage(Hd),
                    className: wm,
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
                  children: (0, u.jsx)(_m, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: Sm,
                    content: v.formatMessage(Bd),
                    children: (0, u.jsx)(hh, {
                      size: _,
                      appearance: "tertiary",
                      icon: "Download",
                      label: v.formatMessage(Hd),
                      className: wm,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        }));
      var Cm = "foundry_hcgxh_1a74xwb4",
        Tm = "focusScope.autoFocusOnMount",
        Om = "focusScope.autoFocusOnUnmount",
        Nm = {
          bubbles: !1,
          cancelable: !0
        },
        jm = h.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...a
          } = e, [s, l] = h.useState(null), c = Ch(o), d = Ch(i), f = h.useRef(null), p = (0, Hu.s)(t, (e => l(e))), m = h.useRef({
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
                  s.contains(t) ? f.current = t : Im(f.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (m.paused || !s) return;
                  const t = e.relatedTarget;
                  null !== t && (s.contains(t) || Im(f.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Im(s)
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
              Dm.add(m);
              const e = document.activeElement;
              if (!s.contains(e)) {
                const t = new CustomEvent(Tm, Nm);
                s.addEventListener(Tm, c), s.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (Im(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(Rm(s).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && Im(s))
              }
              return () => {
                s.removeEventListener(Tm, c), setTimeout((() => {
                  const t = new CustomEvent(Om, Nm);
                  s.addEventListener(Om, d), s.dispatchEvent(t), t.defaultPrevented || Im(e ?? document.body, {
                    select: !0
                  }), s.removeEventListener(Om, d), Dm.remove(m)
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
                  const t = Rm(e);
                  return [Lm(t, e), Lm(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && Im(i, {
                select: !0
              })) : (e.preventDefault(), n && Im(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, r, m.paused]);
          return (0, u.jsx)($u.div, {
            tabIndex: -1,
            ...a,
            ref: p,
            onKeyDown: g
          })
        }));

      function Rm(e) {
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

      function Lm(e, t) {
        for (const n of e)
          if (!Am(n, {
              upTo: t
            })) return n
      }

      function Am(e, {
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

      function Im(e, {
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
      jm.displayName = "FocusScope";
      var Dm = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = km(e, t), e.unshift(t)
          },
          remove(t) {
            e = km(e, t), e[0]?.resume()
          }
        }
      }();

      function km(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var Mm = 0;

      function Hm() {
        h.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? Bm()), document.body.insertAdjacentElement("beforeend", e[1] ?? Bm()), Mm++, () => {
            1 === Mm && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), Mm--
          }
        }), [])
      }

      function Bm() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var Fm = "right-scroll-bar-position",
        Vm = "width-before-scroll-bar",
        zm = n(23614),
        Um = (0, n(19683).f)(),
        Gm = function() {},
        qm = h.forwardRef((function(e, t) {
          var n = h.useRef(null),
            r = h.useState({
              onScrollCapture: Gm,
              onWheelCapture: Gm,
              onTouchMoveCapture: Gm
            }),
            o = r[0],
            i = r[1],
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
            _ = (0, vs.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            w = f,
            x = (0, zm.S)([n, t]),
            E = (0, vs.__assign)((0, vs.__assign)({}, _), o);
          return h.createElement(h.Fragment, null, u && h.createElement(w, {
            sideCar: Um,
            removeScrollBar: c,
            shards: d,
            noIsolation: p,
            inert: m,
            setCallbacks: i,
            allowPinchZoom: !!g,
            lockRef: n,
            gapMode: b
          }), a ? h.cloneElement(h.Children.only(s), (0, vs.__assign)((0, vs.__assign)({}, E), {
            ref: x
          })) : h.createElement(y, (0, vs.__assign)({}, E, {
            className: l,
            ref: x
          }), s))
        }));
      qm.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, qm.classNames = {
        fullWidth: Vm,
        zeroRight: Fm
      };
      var Xm = function(e) {
        var t = e.sideCar,
          n = (0, vs.__rest)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var r = t.read();
        if (!r) throw new Error("Sidecar medium not found");
        return h.createElement(r, (0, vs.__assign)({}, n))
      };
      Xm.isSideCarExport = !0;
      var Km = function() {
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
        Wm = function() {
          var e, t = (e = Km(), function(t, n) {
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
        $m = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        Ym = function(e) {
          return parseInt(e || "", 10) || 0
        },
        Zm = Wm(),
        Qm = "data-scroll-locked",
        Jm = function(e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            s = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(s, "px ").concat(r, ";\n  }\n  body[").concat(Qm, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(Fm, " {\n    right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(Vm, " {\n    margin-right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(Fm, " .").concat(Fm, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(Vm, " .").concat(Vm, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(Qm, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
        },
        eg = function() {
          var e = parseInt(document.body.getAttribute(Qm) || "0", 10);
          return isFinite(e) ? e : 0
        },
        tg = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          h.useEffect((function() {
            return document.body.setAttribute(Qm, (eg() + 1).toString()),
              function() {
                var e = eg() - 1;
                e <= 0 ? document.body.removeAttribute(Qm) : document.body.setAttribute(Qm, e.toString())
              }
          }), []);
          var i = h.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return $m;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [Ym(n), Ym(r), Ym(o)]
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
          return h.createElement(Zm, {
            styles: Jm(i, !t, o, n ? "" : "!important")
          })
        },
        ng = !1;
      if ("undefined" != typeof window) try {
        var rg = Object.defineProperty({}, "passive", {
          get: function() {
            return ng = !0, !0
          }
        });
        window.addEventListener("test", rg, rg), window.removeEventListener("test", rg, rg)
      } catch (e) {
        ng = !1
      }
      var og = !!ng && {
          passive: !1
        },
        ig = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        ag = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), sg(e, r)) {
              var o = lg(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        sg = function(e, t) {
          return "v" === e ? function(e) {
            return ig(e, "overflowY")
          }(t) : function(e) {
            return ig(e, "overflowX")
          }(t)
        },
        lg = function(e, t) {
          return "v" === e ? function(e) {
            return [e.scrollTop, e.scrollHeight, e.clientHeight]
          }(t) : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t)
        },
        cg = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        ug = function(e) {
          return [e.deltaX, e.deltaY]
        },
        dg = function(e) {
          return e && "current" in e ? e.current : e
        },
        hg = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        fg = 0,
        pg = [];

      function mg(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const gg = (Um.useMedium((function(e) {
        var t = h.useRef([]),
          n = h.useRef([0, 0]),
          r = h.useRef(),
          o = h.useState(fg++)[0],
          i = h.useState(Wm)[0],
          a = h.useRef(e);
        h.useEffect((function() {
          a.current = e
        }), [e]), h.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var t = (0, vs.__spreadArray)([e.lockRef.current], (e.shards || []).map(dg), !0).filter(Boolean);
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
            var o, i = cg(e),
              s = n.current,
              l = "deltaX" in e ? e.deltaX : s[0] - i[0],
              c = "deltaY" in e ? e.deltaY : s[1] - i[1],
              u = e.target,
              d = Math.abs(l) > Math.abs(c) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === u.type) return !1;
            var h = ag(d, u);
            if (!h) return !0;
            if (h ? o = d : (o = "v" === d ? "h" : "v", h = ag(d, u)), !h) return !1;
            if (!r.current && "changedTouches" in e && (l || c) && (r.current = o), !o) return !0;
            var f = r.current || o;
            return function(e, t, n, r, o) {
              var i = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                a = i * r,
                s = n.target,
                l = t.contains(s),
                c = !1,
                u = a > 0,
                d = 0,
                h = 0;
              do {
                var f = lg(e, s),
                  p = f[0],
                  m = f[1] - f[2] - i * p;
                (p || m) && sg(e, s) && (d += m, h += p), s = s instanceof ShadowRoot ? s.host : s.parentNode
              } while (!l && s !== document.body || l && (t.contains(s) || t === s));
              return (u && (o && Math.abs(d) < 1 || !o && a > d) || !u && (o && Math.abs(h) < 1 || !o && -a > h)) && (c = !0), c
            }(f, t, e, "h" === f ? l : c, !0)
          }), []),
          l = h.useCallback((function(e) {
            var n = e;
            if (pg.length && pg[pg.length - 1] === i) {
              var r = "deltaY" in n ? ug(n) : cg(n),
                o = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && function(e, t) {
                    return e[0] === t[0] && e[1] === t[1]
                  }(e.delta, r)
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var l = (a.current.shards || []).map(dg).filter(Boolean).filter((function(e) {
                  return e.contains(n.target)
                }));
                (l.length > 0 ? s(n, l[0]) : !a.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          c = h.useCallback((function(e, n, r, o) {
            var i = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: mg(r)
            };
            t.current.push(i), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== i
              }))
            }), 1)
          }), []),
          u = h.useCallback((function(e) {
            n.current = cg(e), r.current = void 0
          }), []),
          d = h.useCallback((function(t) {
            c(t.type, ug(t), t.target, s(t, e.lockRef.current))
          }), []),
          f = h.useCallback((function(t) {
            c(t.type, cg(t), t.target, s(t, e.lockRef.current))
          }), []);
        h.useEffect((function() {
          return pg.push(i), e.setCallbacks({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: f
            }), document.addEventListener("wheel", l, og), document.addEventListener("touchmove", l, og), document.addEventListener("touchstart", u, og),
            function() {
              pg = pg.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", l, og), document.removeEventListener("touchmove", l, og), document.removeEventListener("touchstart", u, og)
            }
        }), []);
        var p = e.removeScrollBar,
          m = e.inert;
        return h.createElement(h.Fragment, null, m ? h.createElement(i, {
          styles: hg(o)
        }) : null, p ? h.createElement(tg, {
          gapMode: e.gapMode
        }) : null)
      })), Xm);
      var vg = h.forwardRef((function(e, t) {
        return h.createElement(qm, (0, vs.__assign)({}, e, {
          ref: t,
          sideCar: gg
        }))
      }));
      vg.classNames = qm.classNames;
      const yg = vg;
      var bg = new WeakMap,
        _g = new WeakMap,
        wg = {},
        xg = 0,
        Eg = function(e) {
          return e && (e.host || Eg(e.parentNode))
        },
        Sg = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), function(e, t, n, r) {
            var o = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = Eg(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            wg[n] || (wg[n] = new WeakMap);
            var i = wg[n],
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
                    l = (bg.get(e) || 0) + 1,
                    c = (i.get(e) || 0) + 1;
                  bg.set(e, l), i.set(e, c), a.push(e), 1 === l && o && _g.set(e, !0), 1 === c && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              }))
            };
            return u(t), s.clear(), xg++,
              function() {
                a.forEach((function(e) {
                  var t = bg.get(e) - 1,
                    o = i.get(e) - 1;
                  bg.set(e, t), i.set(e, o), t || (_g.has(e) || e.removeAttribute(r), _g.delete(e)), o || e.removeAttribute(n)
                })), --xg || (bg = new WeakMap, bg = new WeakMap, _g = new WeakMap, wg = {})
              }
          }(r, o, n, "aria-hidden")) : function() {
            return null
          }
        },
        Pg = "Dialog",
        [Cg, Tg] = Bu(Pg),
        [Og, Ng] = Cg(Pg),
        jg = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: a = !0
          } = e, s = h.useRef(null), l = h.useRef(null), [c, d] = Uu({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Pg
          });
          return (0, u.jsx)(Og, {
            scope: t,
            triggerRef: s,
            contentRef: l,
            contentId: Dh(),
            titleId: Dh(),
            descriptionId: Dh(),
            open: c,
            onOpenChange: d,
            onOpenToggle: h.useCallback((() => d((e => !e))), [d]),
            modal: a,
            children: n
          })
        };
      jg.displayName = Pg;
      var Rg = "DialogTrigger",
        Lg = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ng(Rg, n), i = (0, Hu.s)(t, o.triggerRef);
          return (0, u.jsx)($u.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Zg(o.open),
            ...r,
            ref: i,
            onClick: Mu(e.onClick, o.onOpenToggle)
          })
        }));
      Lg.displayName = Rg;
      var Ag = "DialogPortal",
        [Ig, Dg] = Cg(Ag, {
          forceMount: void 0
        }),
        kg = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = Ng(Ag, t);
          return (0, u.jsx)(Ig, {
            scope: t,
            forceMount: n,
            children: h.Children.map(r, (e => (0, u.jsx)(Dp, {
              present: n || i.open,
              children: (0, u.jsx)(Ip, {
                asChild: !0,
                container: o,
                children: e
              })
            })))
          })
        };
      kg.displayName = Ag;
      var Mg = "DialogOverlay",
        Hg = h.forwardRef(((e, t) => {
          const n = Dg(Mg, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = Ng(Mg, e.__scopeDialog);
          return i.modal ? (0, u.jsx)(Dp, {
            present: r || i.open,
            children: (0, u.jsx)(Fg, {
              ...o,
              ref: t
            })
          }) : null
        }));
      Hg.displayName = Mg;
      var Bg = (0, Wu.TL)("DialogOverlay.RemoveScroll"),
        Fg = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ng(Mg, n);
          return (0, u.jsx)(yg, {
            as: Bg,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, u.jsx)($u.div, {
              "data-state": Zg(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        })),
        Vg = "DialogContent",
        zg = h.forwardRef(((e, t) => {
          const n = Dg(Vg, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = Ng(Vg, e.__scopeDialog);
          return (0, u.jsx)(Dp, {
            present: r || i.open,
            children: i.modal ? (0, u.jsx)(Ug, {
              ...o,
              ref: t
            }) : (0, u.jsx)(Gg, {
              ...o,
              ref: t
            })
          })
        }));
      zg.displayName = Vg;
      var Ug = h.forwardRef(((e, t) => {
          const n = Ng(Vg, e.__scopeDialog),
            r = h.useRef(null),
            o = (0, Hu.s)(t, n.contentRef, r);
          return h.useEffect((() => {
            const e = r.current;
            if (e) return Sg(e)
          }), []), (0, u.jsx)(qg, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Mu(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: Mu(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: Mu(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        Gg = h.forwardRef(((e, t) => {
          const n = Ng(Vg, e.__scopeDialog),
            r = h.useRef(!1),
            o = h.useRef(!1);
          return (0, u.jsx)(qg, {
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
        qg = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...a
          } = e, s = Ng(Vg, n), l = h.useRef(null), c = (0, Hu.s)(t, l);
          return Hm(), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(jm, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, u.jsx)(jh, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": Zg(s.open),
                ...a,
                ref: c,
                onDismiss: () => s.onOpenChange(!1)
              })
            }), (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)(tv, {
                titleId: s.titleId
              }), (0, u.jsx)(nv, {
                contentRef: l,
                descriptionId: s.descriptionId
              })]
            })]
          })
        })),
        Xg = "DialogTitle",
        Kg = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ng(Xg, n);
          return (0, u.jsx)($u.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        }));
      Kg.displayName = Xg;
      var Wg = "DialogDescription",
        $g = h.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ng(Wg, n);
          return (0, u.jsx)($u.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        }));
      $g.displayName = Wg;
      var Yg = "DialogClose";

      function Zg(e) {
        return e ? "open" : "closed"
      }
      h.forwardRef(((e, t) => {
        const {
          __scopeDialog: n,
          ...r
        } = e, o = Ng(Yg, n);
        return (0, u.jsx)($u.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: Mu(e.onClick, (() => o.onOpenChange(!1)))
        })
      })).displayName = Yg;
      var Qg = "DialogTitleWarning",
        [Jg, ev] = function(e, t) {
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
        }(Qg, {
          contentName: Vg,
          titleName: Xg,
          docsSlug: "dialog"
        }),
        tv = ({
          titleId: e
        }) => {
          const t = ev(Qg),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return h.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        nv = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ev("DialogDescriptionWarning").contentName}}.`;
          return h.useEffect((() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        rv = jg,
        ov = Lg,
        iv = kg,
        av = zg,
        sv = Kg,
        lv = $g;
      const cv = ss(Hg),
        uv = ss(av),
        dv = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        hv = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        fv = (0, d.AK)(.77, 0, .175, 1),
        pv = ({
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
          zoomLevelStep: S = 100,
          onZoomLevelChange: P,
          gestureSettings: C,
          testId: T,
          showZoomControls: O = !0,
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
            F = za(),
            z = za(),
            G = za(),
            q = (0, h.useRef)(!1),
            X = Eu(),
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
                      easing: fv
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
                      easing: fv
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
                let t = dv;
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
              const r = Ur.fun(t) && t,
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
                f = (0, h.useMemo)((() => r || 3 == arguments.length ? Ba() : void 0), []),
                p = Kr(e),
                m = [],
                g = (0, h.useRef)(null),
                v = o ? null : g.current;
              di((() => {
                g.current = m
              })), fi((() => (qr(m, (e => {
                f?.add(e.ctrl), e.ctrl.ref = f
              })), () => {
                qr(g.current, (e => {
                  e.expired && clearTimeout(e.expirationId), Gi(e.ctrl, f), e.ctrl.stop(!0)
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
                Gi(e, f), Li(c, t, n)
              }))));
              const _ = [];
              if (v && qr(v, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = _[t] = y.indexOf(e.key)) && (m[t] = e)
                })), qr(p, ((e, t) => {
                  m[t] || (m[t] = {
                    key: y[t],
                    item: e,
                    phase: "mount",
                    ctrl: new Ta
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
              const x = hi(),
                E = Mi(t),
                S = new Map,
                P = (0, h.useRef)(new Map),
                C = (0, h.useRef)(!1);
              qr(m, ((e, n) => {
                const o = e.key,
                  i = e.phase,
                  c = r ? r() : t;
                let h, f;
                const p = Li(c.delay || 0, o);
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
                if (h = Li(h, e.item, n), h = Ur.obj(h) ? Fi(h) : {
                    to: h
                  }, !h.config) {
                  const t = d || E.config;
                  h.config = Li(t, e.item, n, f)
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
                if ("enter" == f && Ur.und(m.from)) {
                  const o = r ? r() : t,
                    i = Ur.und(o.initial) || v ? o.from : o.initial;
                  m.from = Li(i, e.item, n)
                }
                const {
                  onResolve: b
                } = m;
                m.onResolve = e => {
                  Li(b, e);
                  const t = g.current,
                    n = t.find((e => e.key === o));
                  if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == n.phase) {
                      const t = Li(s, n.item);
                      if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (n.expired = !0, !e && r > 0) return void(r <= 2147483647 && (n.expirationId = setTimeout(x, r)))
                      }
                    }
                    e && t.some((e => e.expired)) && (P.current.delete(n), l && (C.current = !0), x())
                  }
                };
                const _ = ja(e.ctrl, m);
                "leave" === f && l ? P.current.set(e, {
                  phase: f,
                  springs: _,
                  payload: m
                }) : S.set(e, {
                  phase: f,
                  springs: _,
                  payload: m
                })
              }));
              const T = (0, h.useContext)(Ma),
                O = mi(T),
                N = T !== O && zi(T);
              di((() => {
                N && qr(m, (e => {
                  e.ctrl.start({
                    default: T
                  })
                }))
              }), [T]), qr(S, ((e, t) => {
                if (P.current.size) {
                  const e = m.findIndex((e => e.key === t.key));
                  m.splice(e, 1)
                }
              })), di((() => {
                qr(P.current.size ? P.current : S, (({
                  phase: e,
                  payload: t
                }, n) => {
                  const {
                    ctrl: r
                  } = n;
                  n.phase = e, f?.add(r), N && "enter" == e && r.start({
                    default: T
                  }), t && (qi(r, t.ref), !r.ref && !f || C.current ? (r.start(t), C.current && (C.current = !1)) : r.update(t))
                }))
              }), o ? void 0 : n);
              const j = e => h.createElement(h.Fragment, null, m.map(((t, n) => {
                const {
                  springs: r
                } = S.get(t) || t.ctrl, o = e({
                  ...r
                }, t.item, t, n);
                return o && o.type ? h.createElement(o.type, {
                  ...o.props,
                  key: Ur.str(t.key) || Ur.num(t.key) ? t.key : t.ctrl.id,
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
            [ge] = Fa((() => ({
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
                w = (0, h.useRef)(null),
                x = (0, h.useRef)(null),
                [E, S] = (0, h.useState)(!1),
                P = b > r,
                C = b < o,
                T = b > r,
                O = b === r,
                [N, j] = Fa((() => ({
                  x: v[0],
                  y: v[1],
                  scale: b / 100,
                  from: {
                    scale: r / 100,
                    x: t[0],
                    y: t[1]
                  },
                  immediate: g,
                  config: fs
                }))),
                R = (e, {
                  origin: n,
                  delta: i,
                  animationConfig: a
                } = {}) => {
                  if (w.current && x.current) {
                    n || (n = [x.current.clientWidth / 2, x.current.clientHeight / 2]);
                    const s = hs(e, r, o);
                    if (s === b) return;
                    i || (i = (s - b) / 100);
                    const l = {
                      config: a || fs,
                      x: t[0],
                      y: t[1],
                      scale: b,
                      immediate: g
                    };
                    if (s <= r) y(t);
                    else {
                      const e = ds(w.current, x.current, (({
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
                      const t = cs(w.current),
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
                      const t = cs(w.current),
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
                canPan: P,
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
                    config: ps,
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
                    if (o && i && !E && S(!0), l > 1) return;
                    if (a || b < r) return;
                    if (e) return v;
                    const {
                      horizontalOffset: d,
                      verticalOffset: h
                    } = ds(w.current, x.current, v, b), f = o * p.dragFactor, m = i * p.dragFactor, _ = {
                      config: fs,
                      x: t[0],
                      y: t[1],
                      immediate: g
                    };
                    if (b === r) {
                      const e = [n[0], n[1] + m],
                        {
                          y: t
                        } = us(e, w.current),
                        r = hs(100 * Math.abs(t) / p.closePc, 0, 100);
                      _.config = ps, _.x = e[0], _.y = e[1], y(e), u?.(r)
                    } else {
                      const e = [ls(n[0] + f, -d, d), ls(n[1] + m, -h, h)];
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
                        } = us(v, w.current);
                        if (hs(100 * Math.abs(e) / p.closePc, 0, 100) >= 100) c?.();
                        else {
                          const e = {
                            config: ps,
                            x: t[0],
                            y: t[1],
                            immediate: g
                          };
                          j(e), y(t), u?.(0)
                        }
                      } else if (void 0 !== e) {
                      const e = ds(w.current, x.current, v, b),
                        t = {
                          config: fs,
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
                    offset: [n],
                    origin: [r, o],
                    first: i
                  }) => {
                    if (w.current && x.current) {
                      if (i && S(!0), t) return void e();
                      R(100 * n, {
                        origin: [r, o],
                        delta: n - b / 100
                      })
                    }
                  },
                  onPinchEnd: () => {
                    x.current && w.current && S(!1)
                  },
                  onWheel: ({
                    last: e,
                    event: t,
                    movement: n
                  }) => {
                    if (w.current && x.current) {
                      const r = -1 * n[1];
                      if (r && E && S(!0), e) return;
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
                    x.current && w.current && S(!1)
                  }
                },
                getCursor: () => O && !m ? "zoom-out" : O && C ? "zoom-in" : P ? E ? "grabbing" : "grab" : "pointer",
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
                      animationConfig: ps
                    })
                  }
              },
              onRequestedClose: ce,
              onRequestingClose: e => {
                if (re) {
                  const t = 1,
                    n = .25,
                    r = hs(t - e * (t - n) / 100, n, t);
                  F.start({
                    opacity: r
                  });
                  const o = hs(1 - e / 100, 0, 1);
                  z.start({
                    opacity: o
                  })
                }
              },
              zoomLevel: _,
              defaultZoomLevel: w,
              minZoomLevel: x,
              maxZoomLevel: E,
              zoomLevelStep: S,
              onZoomLevelChange: P,
              defaultPosition: [0, 0],
              gestureSettings: C
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
            be = Fa({
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
                        e.delay = e => a + Li(t || 0, e)
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
          const xe = j ? (0, u.jsx)(m.DX, {
            className: Cm,
            ref: null,
            children: R
          }) : (0, u.jsx)("img", {
            alt: "",
            src: s,
            "aria-hidden": !0,
            loading: i,
            className: Cm,
            crossOrigin: r,
            referrerPolicy: a
          });
          (0, h.useEffect)((() => {
            Q(!W)
          }), [W]);
          const {
            contrastMode: Ee
          } = (0, nn.DP)(), Se = ((e, t) => [Iu.xW.tokens, Du("dark", t)].join(" "))(0, Ee);
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(rv, {
              open: te,
              children: (0, u.jsxs)("div", {
                className: (0, A.A)("foundry_hcgxh_1a74xwb0", L),
                children: [(0, u.jsx)(ov, {
                  asChild: !0,
                  children: (0, u.jsxs)(ss.button, {
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
                      children: X.formatMessage(ju)
                    }), xe, me(((e, t) => y && !t && (0, u.jsx)(ss.span, {
                      className: "foundry_hcgxh_1a74xwb5",
                      style: e,
                      children: (0, u.jsx)(V.Plus, {
                        label: ""
                      })
                    })))]
                  })
                }), (0, u.jsxs)(iv, {
                  ...!I && {
                    container: ie
                  },
                  children: [(0, u.jsx)(ss.img, {
                    "aria-hidden": !0,
                    src: dv,
                    ref: B,
                    className: "foundry_hcgxh_1a74xwb2 foundry_hcgxh_1a74xwb1",
                    style: {
                      aspectRatio: l,
                      backgroundPosition: c,
                      backgroundSize: d,
                      ...ye
                    }
                  }), me(((o, s) => s && (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(cv, {
                      className: "foundry_hcgxh_1a74xwb8",
                      style: o
                    }), (0, u.jsxs)(uv, {
                      "data-testid": T,
                      onEscapeKeyDown: ce,
                      onOpenAutoFocus: hv,
                      onCloseAutoFocus: e => ((e, t) => {
                        e?.preventDefault(), t.current?.focus({
                          preventScroll: !0
                        })
                      })(e, H),
                      className: Se,
                      children: [(0, u.jsx)(m.s6, {
                        children: (0, u.jsx)(sv, {
                          children: X.formatMessage(Ru)
                        })
                      }), (0, u.jsx)(m.s6, {
                        children: (0, u.jsx)(lv, {
                          children: n || X.formatMessage(Lu, {
                            alt: t
                          })
                        })
                      }), (0, u.jsx)(ss.div, {
                        className: "foundry_hcgxh_1a74xwb6",
                        style: be,
                        children: (0, u.jsx)(gs, {
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
                      }), (0, u.jsx)(ss.div, {
                        className: "foundry_hcgxh_1a74xwb9",
                        style: ge,
                        children: (0, u.jsx)(Pm, {
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
        mv = e => {
          const t = (0, nn.Ym)();
          return (0, u.jsx)(Nu, {
            messages: Au,
            locale: t,
            children: (0, u.jsx)(pv, {
              ...e
            })
          })
        };
      var gv = [" ", "Enter", "ArrowUp", "ArrowDown"],
        vv = [" ", "Enter"],
        yv = "Select",
        [bv, _v, wv] = Yu(yv),
        [xv, Ev] = Bu(yv, [wv, pp]),
        Sv = pp(),
        [Pv, Cv] = xv(yv),
        [Tv, Ov] = xv(yv),
        Nv = e => {
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
          } = e, v = Sv(t), [y, b] = h.useState(null), [_, w] = h.useState(null), [x, E] = h.useState(!1), S = qu(c), [P, C] = Uu({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: yv
          }), [T, O] = Uu({
            prop: a,
            defaultProp: s,
            onChange: l,
            caller: yv
          }), N = h.useRef(null), j = !y || g || !!y.closest("form"), [R, L] = h.useState(new Set), A = Array.from(R).map((e => e.props.value)).join(";");
          return (0, u.jsx)(jp, {
            ...v,
            children: (0, u.jsxs)(Pv, {
              required: m,
              scope: t,
              trigger: y,
              onTriggerChange: b,
              valueNode: _,
              onValueNodeChange: w,
              valueNodeHasChildren: x,
              onValueNodeHasChildrenChange: E,
              contentId: Dh(),
              value: T,
              onValueChange: O,
              open: P,
              onOpenChange: C,
              dir: S,
              triggerPointerDownPosRef: N,
              disabled: p,
              children: [(0, u.jsx)(bv.Provider, {
                scope: t,
                children: (0, u.jsx)(Tv, {
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
              }), j ? (0, u.jsxs)(uy, {
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
                }) : null, Array.from(R)]
              }, A) : null]
            })
          })
        };
      Nv.displayName = yv;
      var jv = "SelectTrigger",
        Rv = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            disabled: r = !1,
            ...o
          } = e, i = Sv(n), a = Cv(jv, n), s = a.disabled || r, l = (0, Hu.s)(t, a.onTriggerChange), c = _v(n), d = h.useRef("touch"), [f, p, m] = hy((e => {
            const t = c().filter((e => !e.disabled)),
              n = t.find((e => e.value === a.value)),
              r = fy(t, e, n);
            void 0 !== r && a.onValueChange(r.value)
          })), g = e => {
            s || (a.onOpenChange(!0), m()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, u.jsx)(Rp, {
            asChild: !0,
            ...i,
            children: (0, u.jsx)($u.button, {
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
              "data-placeholder": dy(a.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: Mu(o.onClick, (e => {
                e.currentTarget.focus(), "mouse" !== d.current && g(e)
              })),
              onPointerDown: Mu(o.onPointerDown, (e => {
                d.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (g(e), e.preventDefault())
              })),
              onKeyDown: Mu(o.onKeyDown, (e => {
                const t = "" !== f.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || p(e.key), t && " " === e.key || gv.includes(e.key) && (g(), e.preventDefault())
              }))
            })
          })
        }));
      Rv.displayName = jv;
      var Lv = "SelectValue",
        Av = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: i,
            placeholder: a = "",
            ...s
          } = e, l = Cv(Lv, n), {
            onValueNodeHasChildrenChange: c
          } = l, d = void 0 !== i, h = (0, Hu.s)(t, l.onValueNodeChange);
          return Vu((() => {
            c(d)
          }), [c, d]), (0, u.jsx)($u.span, {
            ...s,
            ref: h,
            style: {
              pointerEvents: "none"
            },
            children: dy(l.value) ? (0, u.jsx)(u.Fragment, {
              children: a
            }) : i
          })
        }));
      Av.displayName = Lv;
      var Iv = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, u.jsx)($u.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      }));
      Iv.displayName = "SelectIcon";
      var Dv = e => (0, u.jsx)(Ip, {
        asChild: !0,
        ...e
      });
      Dv.displayName = "SelectPortal";
      var kv = "SelectContent",
        Mv = h.forwardRef(((e, t) => {
          const n = Cv(kv, e.__scopeSelect),
            [r, o] = h.useState();
          if (Vu((() => {
              o(new DocumentFragment)
            }), []), !n.open) {
            const t = r;
            return t ? Gt.createPortal((0, u.jsx)(Bv, {
              scope: e.__scopeSelect,
              children: (0, u.jsx)(bv.Slot, {
                scope: e.__scopeSelect,
                children: (0, u.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, u.jsx)(zv, {
            ...e,
            ref: t
          })
        }));
      Mv.displayName = kv;
      var Hv = 10,
        [Bv, Fv] = xv(kv),
        Vv = (0, Wu.TL)("SelectContent.RemoveScroll"),
        zv = h.forwardRef(((e, t) => {
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
          } = e, _ = Cv(kv, n), [w, x] = h.useState(null), [E, S] = h.useState(null), P = (0, Hu.s)(t, (e => x(e))), [C, T] = h.useState(null), [O, N] = h.useState(null), j = _v(n), [R, L] = h.useState(!1), A = h.useRef(!1);
          h.useEffect((() => {
            if (w) return Sg(w)
          }), [w]), Hm();
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
          const [H, B] = hy((e => {
            const t = j().filter((e => !e.disabled)),
              n = t.find((e => e.ref.current === document.activeElement)),
              r = fy(t, e, n);
            r && setTimeout((() => r.ref.current.focus()))
          })), F = h.useCallback(((e, t, n) => {
            const r = !A.current && !n;
            (void 0 !== _.value && _.value === t || r) && (T(e), r && (A.current = !0))
          }), [_.value]), V = h.useCallback((() => w?.focus()), [w]), z = h.useCallback(((e, t, n) => {
            const r = !A.current && !n;
            (void 0 !== _.value && _.value === t || r) && N(e)
          }), [_.value]), U = "popper" === r ? Gv : Uv, G = U === Gv ? {
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
          return (0, u.jsx)(Bv, {
            scope: n,
            content: w,
            viewport: E,
            onViewportChange: S,
            itemRefCallback: F,
            selectedItem: C,
            onItemLeave: V,
            itemTextRefCallback: z,
            focusSelectedItem: D,
            selectedItemText: O,
            position: r,
            isPositioned: R,
            searchRef: H,
            children: (0, u.jsx)(yg, {
              as: Vv,
              allowPinchZoom: !0,
              children: (0, u.jsx)(jm, {
                asChild: !0,
                trapped: _.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: Mu(o, (e => {
                  _.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, u.jsx)(jh, {
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
                    ref: P,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: Mu(b.onKeyDown, (e => {
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
      zv.displayName = "SelectContentImpl";
      var Uv = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: r,
          ...o
        } = e, i = Cv(kv, n), a = Fv(kv, n), [s, l] = h.useState(null), [c, d] = h.useState(null), f = (0, Hu.s)(t, (e => d(e))), p = _v(n), m = h.useRef(!1), g = h.useRef(!0), {
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
                u = window.innerWidth - Hv,
                d = ku(i, [Hv, Math.max(Hv, u - c)]);
              s.style.minWidth = l + "px", s.style.left = d + "px"
            } else {
              const r = t.right - o.right,
                i = window.innerWidth - n.right - r,
                a = window.innerWidth - e.right - i,
                l = e.width + a,
                c = Math.max(l, t.width),
                u = window.innerWidth - Hv,
                d = ku(i, [Hv, Math.max(Hv, u - c)]);
              s.style.minWidth = l + "px", s.style.right = d + "px"
            }
            const a = p(),
              l = window.innerHeight - 2 * Hv,
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
              P = e.top + e.height / 2 - Hv,
              C = l - P,
              T = y.offsetHeight / 2,
              O = h + f + (y.offsetTop + T),
              N = _ - O;
            if (O <= P) {
              const e = a.length > 0 && y === a[a.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = c.clientHeight - v.offsetTop - v.offsetHeight,
                n = O + Math.max(C, T + (e ? S : 0) + t + g);
              s.style.height = n + "px"
            } else {
              const e = a.length > 0 && y === a[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(P, h + v.offsetTop + (e ? E : 0) + T) + N;
              s.style.height = t + "px", v.scrollTop = O - P + v.offsetTop
            }
            s.style.margin = `${Hv}px 0`, s.style.minHeight = w + "px", s.style.maxHeight = l + "px", r?.(), requestAnimationFrame((() => m.current = !0))
          }
        }), [p, i.trigger, i.valueNode, s, c, v, y, b, i.dir, r]);
        Vu((() => w()), [w]);
        const [x, E] = h.useState();
        Vu((() => {
          c && E(window.getComputedStyle(c).zIndex)
        }), [c]);
        const S = h.useCallback((e => {
          e && !0 === g.current && (w(), _?.(), g.current = !1)
        }), [w, _]);
        return (0, u.jsx)(qv, {
          scope: n,
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
            children: (0, u.jsx)($u.div, {
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
      Uv.displayName = "SelectItemAlignedPosition";
      var Gv = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = Hv,
          ...i
        } = e, a = Sv(n);
        return (0, u.jsx)(Lp, {
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
      Gv.displayName = "SelectPopperPosition";
      var [qv, Xv] = xv(kv, {}), Kv = "SelectViewport", Wv = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          nonce: r,
          ...o
        } = e, i = Fv(Kv, n), a = Xv(Kv, n), s = (0, Hu.s)(t, i.onViewportChange), l = h.useRef(0);
        return (0, u.jsxs)(u.Fragment, {
          children: [(0, u.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }), (0, u.jsx)(bv.Slot, {
            scope: n,
            children: (0, u.jsx)($u.div, {
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
              onScroll: Mu(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = a;
                if (r?.current && n) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * Hv,
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
      Wv.displayName = Kv;
      var $v = "SelectGroup",
        [Yv, Zv] = xv($v);
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Dh();
        return (0, u.jsx)(Yv, {
          scope: n,
          id: o,
          children: (0, u.jsx)($u.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
          })
        })
      })).displayName = $v;
      var Qv = "SelectLabel";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Zv(Qv, n);
        return (0, u.jsx)($u.div, {
          id: o.id,
          ...r,
          ref: t
        })
      })).displayName = Qv;
      var Jv = "SelectItem",
        [ey, ty] = xv(Jv),
        ny = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            value: r,
            disabled: o = !1,
            textValue: i,
            ...a
          } = e, s = Cv(Jv, n), l = Fv(Jv, n), c = s.value === r, [d, f] = h.useState(i ?? ""), [p, m] = h.useState(!1), g = (0, Hu.s)(t, (e => l.itemRefCallback?.(e, r, o))), v = Dh(), y = h.useRef("touch"), b = () => {
            o || (s.onValueChange(r), s.onOpenChange(!1))
          };
          if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, u.jsx)(ey, {
            scope: n,
            value: r,
            disabled: o,
            textId: v,
            isSelected: c,
            onItemTextChange: h.useCallback((e => {
              f((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, u.jsx)(bv.ItemSlot, {
              scope: n,
              value: r,
              disabled: o,
              textValue: d,
              children: (0, u.jsx)($u.div, {
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
                onFocus: Mu(a.onFocus, (() => m(!0))),
                onBlur: Mu(a.onBlur, (() => m(!1))),
                onClick: Mu(a.onClick, (() => {
                  "mouse" !== y.current && b()
                })),
                onPointerUp: Mu(a.onPointerUp, (() => {
                  "mouse" === y.current && b()
                })),
                onPointerDown: Mu(a.onPointerDown, (e => {
                  y.current = e.pointerType
                })),
                onPointerMove: Mu(a.onPointerMove, (e => {
                  y.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: Mu(a.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                })),
                onKeyDown: Mu(a.onKeyDown, (e => {
                  "" !== l.searchRef?.current && " " === e.key || (vv.includes(e.key) && b(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      ny.displayName = Jv;
      var ry = "SelectItemText",
        oy = h.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            ...i
          } = e, a = Cv(ry, n), s = Fv(ry, n), l = ty(ry, n), c = Ov(ry, n), [d, f] = h.useState(null), p = (0, Hu.s)(t, (e => f(e)), l.onItemTextChange, (e => s.itemTextRefCallback?.(e, l.value, l.disabled))), m = d?.textContent, g = h.useMemo((() => (0, u.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: m
          }, l.value)), [l.disabled, l.value, m]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: y
          } = c;
          return Vu((() => (v(g), () => y(g))), [v, y, g]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)($u.span, {
              id: l.textId,
              ...i,
              ref: p
            }), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? Gt.createPortal(i.children, a.valueNode) : null]
          })
        }));
      oy.displayName = ry;
      var iy = "SelectItemIndicator";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return ty(iy, n).isSelected ? (0, u.jsx)($u.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      })).displayName = iy;
      var ay = "SelectScrollUpButton";
      h.forwardRef(((e, t) => {
        const n = Fv(ay, e.__scopeSelect),
          r = Xv(ay, e.__scopeSelect),
          [o, i] = h.useState(!1),
          a = (0, Hu.s)(t, r.onScrollButtonChange);
        return Vu((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, u.jsx)(ly, {
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
      })).displayName = ay;
      var sy = "SelectScrollDownButton";
      h.forwardRef(((e, t) => {
        const n = Fv(sy, e.__scopeSelect),
          r = Xv(sy, e.__scopeSelect),
          [o, i] = h.useState(!1),
          a = (0, Hu.s)(t, r.onScrollButtonChange);
        return Vu((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              i(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, u.jsx)(ly, {
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
      })).displayName = sy;
      var ly = h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: r,
          ...o
        } = e, i = Fv("SelectScrollButton", n), a = h.useRef(null), s = _v(n), l = h.useCallback((() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }), []);
        return h.useEffect((() => () => l()), [l]), Vu((() => {
          const e = s().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [s]), (0, u.jsx)($u.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: Mu(o.onPointerDown, (() => {
            null === a.current && (a.current = window.setInterval(r, 50))
          })),
          onPointerMove: Mu(o.onPointerMove, (() => {
            i.onItemLeave?.(), null === a.current && (a.current = window.setInterval(r, 50))
          })),
          onPointerLeave: Mu(o.onPointerLeave, (() => {
            l()
          }))
        })
      }));
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, u.jsx)($u.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var cy = "SelectArrow";
      h.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Sv(n), i = Cv(cy, n), a = Fv(cy, n);
        return i.open && "popper" === a.position ? (0, u.jsx)(Ap, {
          ...o,
          ...r,
          ref: t
        }) : null
      })).displayName = cy;
      var uy = h.forwardRef((({
        __scopeSelect: e,
        value: t,
        ...n
      }, r) => {
        const o = h.useRef(null),
          i = (0, Hu.s)(r, o),
          a = Xu(t);
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
        }), [a, t]), (0, u.jsx)($u.select, {
          ...n,
          style: {
            ...Mp,
            ...n.style
          },
          ref: i,
          defaultValue: t
        })
      }));

      function dy(e) {
        return "" === e || void 0 === e
      }

      function hy(e) {
        const t = Ch(e),
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

      function fy(e, t, n) {
        const r = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === r.length && (i = i.filter((e => e !== n)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(r.toLowerCase())));
        return l !== n ? l : void 0
      }
      uy.displayName = "SelectBubbleInput";
      var py = Nv,
        my = Rv,
        gy = Av,
        vy = Iv,
        yy = Dv,
        by = Mv,
        _y = Wv,
        wy = ny,
        xy = oy,
        Ey = "ScrollArea",
        [Sy, Py] = Bu(Ey),
        [Cy, Ty] = Sy(Ey),
        Oy = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            type: r = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...a
          } = e, [s, l] = h.useState(null), [c, d] = h.useState(null), [f, p] = h.useState(null), [m, g] = h.useState(null), [v, y] = h.useState(null), [b, _] = h.useState(0), [w, x] = h.useState(0), [E, S] = h.useState(!1), [P, C] = h.useState(!1), T = (0, Hu.s)(t, (e => l(e))), O = qu(o);
          return (0, u.jsx)(Cy, {
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
            onScrollbarXEnabledChange: S,
            scrollbarY: v,
            onScrollbarYChange: y,
            scrollbarYEnabled: P,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: _,
            onCornerHeightChange: x,
            children: (0, u.jsx)($u.div, {
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
      Oy.displayName = Ey;
      var Ny = "ScrollAreaViewport",
        jy = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            children: r,
            nonce: o,
            ...i
          } = e, a = Ty(Ny, n), s = h.useRef(null), l = (0, Hu.s)(t, s, a.onViewportChange);
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, u.jsx)($u.div, {
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
      jy.displayName = Ny;
      var Ry = "ScrollAreaScrollbar",
        Ly = h.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Ty(Ry, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: a
          } = o, s = "horizontal" === e.orientation;
          return h.useEffect((() => (s ? i(!0) : a(!0), () => {
            s ? i(!1) : a(!1)
          })), [s, i, a]), "hover" === o.type ? (0, u.jsx)(Ay, {
            ...r,
            ref: t,
            forceMount: n
          }) : "scroll" === o.type ? (0, u.jsx)(Iy, {
            ...r,
            ref: t,
            forceMount: n
          }) : "auto" === o.type ? (0, u.jsx)(Dy, {
            ...r,
            ref: t,
            forceMount: n
          }) : "always" === o.type ? (0, u.jsx)(ky, {
            ...r,
            ref: t
          }) : null
        }));
      Ly.displayName = Ry;
      var Ay = h.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Ty(Ry, e.__scopeScrollArea), [i, a] = h.useState(!1);
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
          }), [o.scrollArea, o.scrollHideDelay]), (0, u.jsx)(Dp, {
            present: n || i,
            children: (0, u.jsx)(Dy, {
              "data-state": i ? "visible" : "hidden",
              ...r,
              ref: t
            })
          })
        })),
        Iy = h.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Ty(Ry, e.__scopeScrollArea), i = "horizontal" === e.orientation, a = eb((() => l("SCROLL_END")), 100), [s, l] = (c = {
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
          }), [o.viewport, i, l, a]), (0, u.jsx)(Dp, {
            present: n || "hidden" !== s,
            children: (0, u.jsx)(ky, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...r,
              ref: t,
              onPointerEnter: Mu(e.onPointerEnter, (() => l("POINTER_ENTER"))),
              onPointerLeave: Mu(e.onPointerLeave, (() => l("POINTER_LEAVE")))
            })
          })
        })),
        Dy = h.forwardRef(((e, t) => {
          const n = Ty(Ry, e.__scopeScrollArea),
            {
              forceMount: r,
              ...o
            } = e,
            [i, a] = h.useState(!1),
            s = "horizontal" === e.orientation,
            l = eb((() => {
              if (n.viewport) {
                const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                a(s ? e : t)
              }
            }), 10);
          return tb(n.viewport, l), tb(n.content, l), (0, u.jsx)(Dp, {
            present: r || i,
            children: (0, u.jsx)(ky, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        ky = h.forwardRef(((e, t) => {
          const {
            orientation: n = "vertical",
            ...r
          } = e, o = Ty(Ry, e.__scopeScrollArea), i = h.useRef(null), a = h.useRef(0), [s, l] = h.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = Wy(s.viewport, s.content), d = {
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
              const o = $y(n),
                i = t || o / 2,
                a = o - i,
                s = n.scrollbar.paddingStart + i,
                l = n.scrollbar.size - n.scrollbar.paddingEnd - a,
                c = n.content - n.viewport;
              return Zy([s, l], "ltr" === r ? [0, c] : [-1 * c, 0])(e)
            }(e, a.current, s, t)
          }
          return "horizontal" === n ? (0, u.jsx)(My, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = Yy(o.viewport.scrollLeft, s, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = f(e, o.dir))
            }
          }) : "vertical" === n ? (0, u.jsx)(Hy, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = Yy(o.viewport.scrollTop, s);
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
        My = h.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, i = Ty(Ry, e.__scopeScrollArea), [a, s] = h.useState(), l = h.useRef(null), c = (0, Hu.s)(t, l, i.onScrollbarXChange);
          return h.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, u.jsx)(Vy, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: n,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": $y(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
              if (i.viewport) {
                const r = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(r), Qy(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && r({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: Ky(a.paddingLeft),
                  paddingEnd: Ky(a.paddingRight)
                }
              })
            }
          })
        })),
        Hy = h.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, i = Ty(Ry, e.__scopeScrollArea), [a, s] = h.useState(), l = h.useRef(null), c = (0, Hu.s)(t, l, i.onScrollbarYChange);
          return h.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, u.jsx)(Vy, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: n,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": $y(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
              if (i.viewport) {
                const r = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(r), Qy(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && r({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: Ky(a.paddingTop),
                  paddingEnd: Ky(a.paddingBottom)
                }
              })
            }
          })
        })),
        [By, Fy] = Sy(Ry),
        Vy = h.forwardRef(((e, t) => {
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
          } = e, m = Ty(Ry, n), [g, v] = h.useState(null), y = (0, Hu.s)(t, (e => v(e))), b = h.useRef(null), _ = h.useRef(""), w = m.viewport, x = r.content - r.viewport, E = Ch(d), S = Ch(l), P = eb(f, 10);

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
          }), [w, g, x, E]), h.useEffect(S, [r, S]), tb(g, P), tb(m.content, P), (0, u.jsx)(By, {
            scope: n,
            scrollbar: g,
            hasThumb: o,
            onThumbChange: Ch(i),
            onThumbPointerUp: Ch(a),
            onThumbPositionChange: S,
            onThumbPointerDown: Ch(s),
            children: (0, u.jsx)($u.div, {
              ...p,
              ref: y,
              style: {
                position: "absolute",
                ...p.style
              },
              onPointerDown: Mu(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = g.getBoundingClientRect(), _.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), C(e))
              })),
              onPointerMove: Mu(e.onPointerMove, C),
              onPointerUp: Mu(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = _.current, m.viewport && (m.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        zy = "ScrollAreaThumb",
        Uy = h.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Fy(zy, e.__scopeScrollArea);
          return (0, u.jsx)(Dp, {
            present: n || o.hasThumb,
            children: (0, u.jsx)(Gy, {
              ref: t,
              ...r
            })
          })
        })),
        Gy = h.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            style: r,
            ...o
          } = e, i = Ty(zy, n), a = Fy(zy, n), {
            onThumbPositionChange: s
          } = a, l = (0, Hu.s)(t, (e => a.onThumbChange(e))), c = h.useRef(void 0), d = eb((() => {
            c.current && (c.current(), c.current = void 0)
          }), 100);
          return h.useEffect((() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (d(), !c.current) {
                  const t = Jy(e, s);
                  c.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [i.viewport, d, s]), (0, u.jsx)($u.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...r
            },
            onPointerDownCapture: Mu(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = e.clientY - t.top;
              a.onThumbPointerDown({
                x: n,
                y: r
              })
            })),
            onPointerUp: Mu(e.onPointerUp, a.onThumbPointerUp)
          })
        }));
      Uy.displayName = zy;
      var qy = "ScrollAreaCorner";
      h.forwardRef(((e, t) => {
        const n = Ty(qy, e.__scopeScrollArea),
          r = Boolean(n.scrollbarX && n.scrollbarY);
        return "scroll" !== n.type && r ? (0, u.jsx)(Xy, {
          ...e,
          ref: t
        }) : null
      })).displayName = qy;
      var Xy = h.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: n,
          ...r
        } = e, o = Ty(qy, n), [i, a] = h.useState(0), [s, l] = h.useState(0), c = Boolean(i && s);
        return tb(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        })), tb(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        })), c ? (0, u.jsx)($u.div, {
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

      function Ky(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Wy(e, t) {
        const n = e / t;
        return isNaN(n) ? 0 : n
      }

      function $y(e) {
        const t = Wy(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18)
      }

      function Yy(e, t, n = "ltr") {
        const r = $y(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - r,
          l = ku(e, "ltr" === n ? [0, a] : [-1 * a, 0]);
        return Zy([0, a], [0, s])(l)
      }

      function Zy(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }

      function Qy(e, t) {
        return e > 0 && e < t
      }
      var Jy = (e, t = () => {}) => {
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

      function eb(e, t) {
        const n = Ch(e),
          r = h.useRef(0);
        return h.useEffect((() => () => window.clearTimeout(r.current)), []), h.useCallback((() => {
          window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
        }), [n, t])
      }

      function tb(e, t) {
        const n = Ch(t);
        Vu((() => {
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
      var nb = Oy,
        rb = jy,
        ob = Ly,
        ib = Uy,
        ab = "foundry_hcgxh_uaq1gwo";
      const sb = (0, h.forwardRef)((({
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
          labelledBy: S,
          renderPortal: P,
          container: C
        }, T) => {
          const O = (0, h.useRef)(null),
            N = (0, U.UP)(O, T),
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
                  className: (0, A.$)("foundry_hcgxh_uaq1gw2", w && ab),
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
                className: (0, A.$)("foundry_hcgxh_uaq1gw3", w && ab),
                children: n
              })]
            }), (0, u.jsxs)(py, {
              required: _,
              disabled: w,
              open: L,
              onOpenChange: () => I(!x && !L),
              value: f,
              defaultValue: p,
              onValueChange: g,
              children: [(0, u.jsxs)(my, {
                className: (0, A.$)("foundry_hcgxh_uaq1gw5 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10", !!d && "foundry_hcgxh_uaq1gw7", x && "foundry_hcgxh_uaq1gw6"),
                ref: N,
                "data-testid": i,
                "aria-activedescendant": f,
                "aria-labelledby": S || j,
                "aria-controls": R,
                children: [(0, u.jsx)("span", {
                  className: "foundry_hcgxh_uaq1gw8",
                  children: (0, u.jsx)(gy, {
                    placeholder: r,
                    "aria-label": f
                  })
                }), (0, u.jsx)(vy, {
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
              }), (0, u.jsx)(cb, {
                renderPortal: P,
                container: C,
                children: (0, u.jsx)(by, {
                  id: R,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_hcgxh_uaq1gwb",
                  children: (0, u.jsxs)(nb, {
                    className: "foundry_hcgxh_uaq1gwk",
                    type: "auto",
                    children: [(0, u.jsx)(_y, {
                      className: (0, A.$)("foundry_hcgxh_uaq1gwc", c && "foundry_hcgxh_uaq1gwd"),
                      asChild: !0,
                      children: (0, u.jsx)(rb, {
                        className: "foundry_hcgxh_uaq1gwl",
                        style: {
                          overflowY: void 0
                        },
                        children: e
                      })
                    }), (0, u.jsx)(ob, {
                      className: "foundry_hcgxh_uaq1gwm",
                      orientation: "vertical",
                      children: (0, u.jsx)(ib, {
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
                className: (0, A.$)("foundry_hcgxh_uaq1gwf", w && ab),
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
        lb = (0, h.forwardRef)((({
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
          return (0, u.jsxs)(wy, {
            value: t,
            className: "foundry_hcgxh_uaq1gwe foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10",
            ref: c,
            disabled: i,
            "data-testid": a,
            children: [d && "left" === o && (0, u.jsx)(d, {
              className: "foundry_hcgxh_uaq1gwi",
              label: r || "",
              size: "LG"
            }), (0, u.jsx)(xy, {
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
        cb = ({
          renderPortal: e = !0,
          container: t,
          children: n
        }) => e ? (0, u.jsx)(yy, {
          container: t,
          children: n
        }) : (0, u.jsx)(u.Fragment, {
          children: n
        }),
        ub = ({
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
        db = ({
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
        hb = ({
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
        fb = ({
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
        pb = ({
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
        mb = ({
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

      function gb(e = {}) {
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

      function vb(e, t, n) {
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

      function yb(e) {
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

      function bb(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function _b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? bb(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = yb(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bb(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function wb(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var xb = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Eb = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = _b(_b({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) xb(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wb(e.variantClassNames, (e => wb(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Sb = Eb({
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
        Pb = Eb({
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
        Cb = Eb({
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
        Tb = Eb({
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
      const Ob = (0, h.forwardRef)((({
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
            } = gb({
              isSelected: e,
              defaultSelected: t,
              onChange: n
            }),
            {
              inputProps: S,
              isDisabled: P,
              isReadOnly: C,
              isInvalid: T,
              isSelected: O
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
                } = vb({
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
              ...S,
              "aria-checked": O,
              className: g
            }, {
              className: "foundry_hcgxh_11gbdty1"
            }),
            j = l ? r[`Dash${a}`] : r[`Check${a}`],
            R = T && !!p;
          return (0, u.jsxs)("label", {
            className: "foundry_hcgxh_11gbdty0",
            children: [(0, u.jsxs)("div", {
              className: Pb({
                size: a
              }),
              children: [(0, u.jsx)(m.s6, {
                children: (0, u.jsx)("input", {
                  ...N,
                  ref: _
                })
              }), (0, u.jsx)("div", {
                className: Sb({
                  size: a,
                  appearance: s
                }),
                "aria-hidden": "true",
                "data-state": l ? "mixed" : O ? "checked" : "unchecked",
                "data-disabled": P || C,
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
                className: Tb({
                  size: a,
                  isDisabled: P
                }),
                children: [(0, u.jsx)("p", {
                  className: Cb({
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
        Nb = new WeakMap;

      function jb(e, t) {
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
        }(e, t) && (!e.parentElement || jb(e.parentElement, e))
      }

      function Rb(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function Lb(e, t, n) {
        let r = (null == t ? void 0 : t.tabbable) ? Se : Ee,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = Q(o),
          a = function(e, t, n, r) {
            return e.createTreeWalker(t, n, r)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !r(e) || !jb(e) || n && !Rb(e, n) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a
      }
      class Ab {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new Ib({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && Rb(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n && (n.removeChild(t), r.size > 0 && r.forEach((e => n && n.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new Ab;
          var n;
          for (let r of this.traverse()) t.addTreeNode(r.scopeRef, null !== (n = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, r.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new Ib({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class Ib {
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
      new Ab;
      const Db = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        kb = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Mb(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return Db.has(t.script)
        }
        let t = e.split("-")[0];
        return kb.has(t)
      }
      const Hb = Symbol.for("react-aria.i18n.locale");

      function Bb() {
        let e = "undefined" != typeof window && window[Hb] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Mb(e) ? "rtl" : "ltr"
        }
      }
      let Fb = Bb(),
        Vb = new Set;

      function zb() {
        Fb = Bb();
        for (let e of Vb) e(Fb)
      }
      const Ub = h.createContext(null);

      function Gb() {
        let e = function() {
          let e = ce(),
            [t, n] = (0, h.useState)(Fb);
          return (0, h.useEffect)((() => (0 === Vb.size && window.addEventListener("languagechange", zb), Vb.add(n), () => {
            Vb.delete(n), 0 === Vb.size && window.removeEventListener("languagechange", zb)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, h.useContext)(Ub) || e
      }

      function qb(e, t) {
        let {
          name: n,
          isReadOnly: r,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: s = "aria"
        } = e, {
          direction: l
        } = Gb(), {
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
                  Oe(r, n);
                  let o = Te(r);
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
        return Nb.set(t, {
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
              let r, o = Lb(e.currentTarget, {
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
      let Xb = Math.round(1e10 * Math.random()),
        Kb = 0;

      function Wb(e) {
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

      function $b(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Yb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $b(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Wb(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $b(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Zb(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Qb = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Jb = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Yb(Yb({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Qb(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Zb(e.variantClassNames, (e => Zb(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        e_ = Jb({
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
      const t_ = (0, h.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        n_ = (0, h.forwardRef)((({
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
            let t = (0, h.useMemo)((() => e.name || `radio-group-${Xb}-${++Kb}`), [e.name]);
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
            labelProps: S,
            descriptionProps: P,
            isInvalid: C,
            errorMessageProps: T
          } = qb({
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
                children: [(0, u.jsx)(F, {
                  size: "SM",
                  ...S,
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
                  ...P,
                  className: "foundry_hcgxh_njguqna foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                  children: t
                })]
              })
            }), (0, u.jsx)("div", {
              className: e_({
                size: n,
                orientation: f
              }),
              children: (0, u.jsx)(t_.Provider, {
                value: x,
                children: v
              })
            }), N && (0, u.jsxs)(F, {
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
        r_ = ({
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
        o_ = ({
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
        i_ = ({
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
      var a_ = Jb({
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
        s_ = Jb({
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
        l_ = Jb({
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
        c_ = Jb({
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
      const u_ = (0, h.forwardRef)((({
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
          f = (0, h.useContext)(t_),
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
            } = Nb.get(t);
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
            className: l_({
              size: v
            }),
            children: [(0, u.jsx)(m.s6, {
              children: (0, u.jsx)("input", {
                ...y,
                ref: c,
                className: "foundry_hcgxh_1pfduet1"
              })
            }), (0, u.jsx)("div", {
              className: s_({
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
              className: c_({
                size: v
              }),
              children: [(0, u.jsx)("p", {
                className: a_({
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

      function d_(e) {
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

      function h_(e, t) {
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
          t % 2 ? h_(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = d_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function p_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var m_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        g_ = (e => {
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
            for (var [c, u] of e.compoundVariants) m_(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return p_(e.variantClassNames, (e => p_(e, (e => e.split(" ")[0]))))
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
      const v_ = (0, h.forwardRef)((({
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
            className: (0, A.$)(g_({
              thickness: n,
              orientation: t
            }), e),
            role: c,
            "aria-orientation": t,
            "data-testid": i,
            ...a
          })
        })),
        y_ = ({
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
        b_ = ({
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
        __ = ({
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

      function w_(e) {
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

      function E_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? x_(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = w_(o)) in r ? Object.defineProperty(r, o, {
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

      function S_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var P_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        C_ = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = E_(E_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) P_(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return S_(e.variantClassNames, (e => S_(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        T_ = C_({
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
        O_ = C_({
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
        N_ = C_({
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
        j_ = C_({
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
        R_ = C_({
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
        L_ = C_({
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
      const A_ = (0, h.forwardRef)((({
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
          y = gb(d),
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
            } = vb(e, t, n);
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
          E = i ? z[i] : __,
          S = a ? z[a] : b_;
        return (0, u.jsxs)("label", {
          className: (0, A.$)("foundry_hcgxh_okz6z20", c),
          children: [(0, u.jsxs)("div", {
            className: R_({
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
              className: j_({
                size: n
              }),
              "aria-hidden": "true",
              children: [(0, u.jsx)("div", {
                className: T_({
                  size: n,
                  isSelected: x
                }),
                children: (0, u.jsx)(y_, {})
              }), o && (0, u.jsxs)(u.Fragment, {
                children: [(0, u.jsx)("div", {
                  className: O_({
                    size: n,
                    isSelected: x,
                    position: "left"
                  }),
                  children: (0, u.jsx)(E, {
                    label: ""
                  })
                }), (0, u.jsx)("div", {
                  className: O_({
                    size: n,
                    isSelected: x,
                    position: "right"
                  }),
                  children: (0, u.jsx)(S, {
                    label: ""
                  })
                })]
              })]
            })]
          }), (0, u.jsx)(m.s6, {
            enabled: !!s,
            children: (0, u.jsxs)("div", {
              className: L_({
                size: n,
                isDisabled: _
              }),
              children: [(0, u.jsx)("p", {
                className: N_({
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
      A_.displayName = "Switch";
      const I_ = (0, h.forwardRef)((({
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

      function D_(e) {
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

      function k_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function M_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? k_(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = D_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function H_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var B_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        F_ = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = M_(M_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) B_(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return H_(e.variantClassNames, (e => H_(e, (e => e.split(" ")[0]))))
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
      const V_ = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const a = e ? m.DX : "p",
          s = (0, d.v6)({
            className: F_({
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

      function z_(e) {
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

      function U_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function G_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? U_(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = z_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function q_(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var X_ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        K_ = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = G_(G_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) X_(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return q_(e.variantClassNames, (e => q_(e, (e => e.split(" ")[0]))))
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
      const W_ = (0, h.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...r
      }, o) => {
        const i = e ? m.DX : "p",
          a = (0, d.v6)({
            className: K_({
              appearance: n
            })
          }, r);
        return (0, u.jsx)(i, {
          ref: o,
          "data-testid": t,
          ...a
        })
      }));
      var $_ = n(45013);

      function Y_(e, t) {
        var n = {};
        if ("object" == typeof t) {
          var r = e;
          (0, $_.Bx)(t, ((e, t) => {
            if (null != e) {
              var o = (0, $_.Jt)(r, t);
              n[(0, $_.Tm)(o)] = String(e)
            }
          }))
        } else {
          var o = e;
          for (var i in o) {
            var a = o[i];
            null != a && (n[(0, $_.Tm)(i)] = a)
          }
        }
        return Object.defineProperty(n, "toString", {
          value: function() {
            return Object.keys(this).map((e => "".concat(e, ":").concat(this[e]))).join(";")
          },
          writable: !1
        }), n
      }

      function Z_(e) {
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

      function Q_(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function J_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Q_(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Z_(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q_(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function ew(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      n(40481);
      var tw = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        nw = "var(--foundry_hcgxh_9dxgbc2)",
        rw = "var(--foundry_hcgxh_9dxgbc3)",
        ow = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = J_(J_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) tw(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ew(e.variantClassNames, (e => ew(e, (e => e.split(" ")[0]))))
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
        iw = "var(--foundry_hcgxh_9dxgbc0)",
        aw = "var(--foundry_hcgxh_9dxgbc1)";
      const sw = (0, h.forwardRef)((({
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
            className: ow({
              size: c
            }),
            "data-testid": t,
            style: Y_({
              [iw]: r?.pulseColorBackground,
              [aw]: r?.pulseColorForeground,
              [nw]: r?.gradientColorBackground,
              [rw]: r?.gradientColorForeground
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

      function lw(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function cw(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
          if (Array.isArray(e) || (n = function(e, t) {
              if (e) {
                if ("string" == typeof e) return lw(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? lw(e, t) : void 0
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

      function uw(e, t, n) {
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

      function dw(e) {
        return dw = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, dw(e)
      }

      function hw() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (hw = function() {
          return !!e
        })()
      }

      function fw(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function pw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? fw(Object(n), !0).forEach((function(t) {
            uw(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fw(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function mw(e, t) {
        return mw = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, mw(e, t)
      }

      function gw(e, t) {
        var n, r = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          a = r,
          s = "",
          l = cw(e);
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

      function vw(e, t) {
        var n, r = t.mask,
          o = t.replacement,
          i = t.separate,
          a = t.showMask,
          s = 0,
          l = "",
          c = cw(r);
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

      function yw(e, t) {
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

      function bw(e) {
        return e.length > 0 ? uw({}, e, /./) : {}
      }

      function _w(e, t) {
        for (var n = t.start, r = void 0 === n ? 0 : n, o = t.end, i = t.mask, a = t.replacement, s = t.separate, l = e.slice(r, o), c = i.slice(r, o), u = "", d = 0; d < c.length; d++) {
          var h = Object.prototype.hasOwnProperty.call(a, c[d]);
          h && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : h && s && (u += c[d])
        }
        return u
      }

      function ww(e, t) {
        var n = t.mask,
          r = t.replacement,
          o = "string" == typeof r ? bw(r) : r,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return vw(gw(e, {
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
      var xw = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function Ew(e) {
        return xw.includes(e) ? "\\".concat(e) : e
      }

      function Sw(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function Pw(e, t, n) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function Cw(e, t, n) {
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

      function Tw(e) {
        return Tw = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Tw(e)
      }

      function Ow() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (Ow = function() {
          return !!e
        })()
      }

      function Nw(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function jw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Nw(Object(n), !0).forEach((function(t) {
            Cw(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nw(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Rw(e, t) {
        return Rw = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Rw(e, t)
      }

      function Lw(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return Lw = function(e) {
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
              if (Ow()) return Reflect.construct.apply(null, arguments);
              var r = [null];
              r.push.apply(r, t);
              var o = new(e.bind.apply(e, r));
              return n && Rw(o, n.prototype), o
            }(e, arguments, Tw(this).constructor)
          }
          return n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), Rw(n, e)
        }, Lw(e)
      }
      var Aw, Iw = function(e) {
          function t(e) {
            var n;
            return Sw(this, t), (n = function(e, t, n) {
              return t = Tw(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, Ow() ? Reflect.construct(t, n || [], Tw(e).constructor) : t.apply(e, n))
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
            }), t && Rw(e, t)
          }(t, e), Pw(t)
        }(Lw(Error)),
        Dw = ["options"],
        kw = ["text", "email", "tel", "search", "url"],
        Mw = Pw((function e(t) {
          var n = t.init,
            r = t.tracking;
          Sw(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (kw.includes(e.type)) {
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
              Object.defineProperty(e, "value", jw(jw({}, g), {}, {
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
                    if (p.cachedId === p.id) throw new Iw("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      a = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === a || null === s) throw new Iw("The selection attributes have not been initialized.");
                    var l, c = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = c.length), a > m.selectionStart ? l = "insert" : a <= m.selectionStart && a < m.selectionEnd ? l = "deleteBackward" : a === m.selectionEnd && i.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > c.length) throw new Iw("Input type detection error.");
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
                      }(y, Dw);
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
      Aw = Mw, Object.defineProperty(Aw.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var Hw, Bw = ["track", "modify"];

      function Fw(e) {
        var t, n, r, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? bw(e.replacement) : null !== (n = e.replacement) && void 0 !== n ? n : {},
          showMask: null !== (r = e.showMask) && void 0 !== r && r,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var Vw = function() {
        function e() {
          var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, n) {
            return t = dw(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, hw() ? Reflect.construct(t, n || [], dw(e).constructor) : t.apply(e, n))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                r = e.controlled,
                o = Fw(n),
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
                l = Fw(n),
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
                }(l, Bw),
                h = d.mask,
                f = d.replacement,
                p = d.showMask,
                m = d.separate,
                g = pw(pw({}, "insert" === t ? {
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
              if (!1 === v) throw new Iw("Custom tracking stop.");
              null === v ? i = "" : !0 !== v && void 0 !== v && (i = v);
              var y = null == u ? void 0 : u(g);
              void 0 !== (null == y ? void 0 : y.mask) && (h = y.mask), void 0 !== (null == y ? void 0 : y.replacement) && (f = "string" == typeof(null == y ? void 0 : y.replacement) ? bw(null == y ? void 0 : y.replacement) : y.replacement), void 0 !== (null == y ? void 0 : y.showMask) && (p = y.showMask), void 0 !== (null == y ? void 0 : y.separate) && (m = y.separate);
              var b = _w(r, pw({
                  end: a
                }, o)),
                _ = _w(r, pw({
                  start: s
                }, o)),
                w = RegExp("[^".concat(Object.keys(f).join(""), "]"), "g"),
                x = h.replace(w, "");
              if (b && (b = gw(b, {
                  replacementChars: x,
                  replacement: f,
                  separate: m
                }), x = x.slice(b.length)), i && (i = gw(i, {
                  replacementChars: x,
                  replacement: f,
                  separate: !1
                }), x = x.slice(i.length)), "insert" === t && "" === i) throw new Iw("The character does not match the key value of the `replacement` object.");
              if (m) {
                var E = h.slice(a, s).replace(w, ""),
                  S = E.length - i.length;
                S < 0 ? _ = _.slice(-S) : S > 0 && (_ = E.slice(-S) + _)
              }
              _ && (_ = gw(_, {
                replacementChars: x,
                replacement: f,
                separate: m
              }));
              var P = vw(b + i + _, {
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
                    u = yw(i, {
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
                  value: P,
                  addedValue: i,
                  beforeChangeValue: b,
                  mask: h,
                  replacement: f,
                  separate: m
                });
              return {
                value: P,
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
            return ww(e, Fw(n))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? bw(r) : r;
              return yw(ww(e, {
                mask: n,
                replacement: o
              }), {
                mask: n,
                replacement: o
              })
            }(e, Fw(n))
          }, t.unformat = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? bw(r) : r,
                i = _w(e, {
                  mask: n,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return gw(i, {
                replacementChars: n.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, Fw(n))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var n = t.mask, r = t.replacement, o = "string" == typeof r ? bw(r) : r, i = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, s = "", l = 0; l < n.length; l++) {
                var c = n[l];
                0 === l && (s = "^"), i && (s += "("), s += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(a ? "(?!".concat(Ew(c), ")") : "", "(").concat(o[c].source, ")") : Ew(c), l === n.length - 1 && (i && (s += ")?".repeat(n.length)), s += "$")
              }
              return s
            }(e, Fw(n))
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
            }), t && mw(e, t)
          }(e, Mw),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function zw(e) {
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

      function Uw(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Gw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Uw(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = zw(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Uw(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function qw(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      Hw = Vw, Object.defineProperty(Hw.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var Xw = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Kw = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Gw(Gw({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Xw(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qw(e.variantClassNames, (e => qw(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Ww = "foundry_hcgxh_8oytzos",
        $w = Kw({
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
        Yw = Kw({
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
        Zw = Kw({
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
        Qw = Kw({
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
        Jw = Kw({
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
        ex = Kw({
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
      const tx = (e, t, n) => {
          const r = [];
          return e && r.push(e), t && r.push(t), n && r.push(n), r.join(" ")
        },
        nx = (0, h.createContext)(null);

      function rx() {
        const e = (0, h.useContext)(nx);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const ox = (0, h.forwardRef)((({
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
          return (0, u.jsx)(nx.Provider, {
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
        ix = (0, h.forwardRef)((({
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
          } = rx(), f = (0, d.v6)({
            id: i.id || h,
            htmlFor: i.htmlFor || c,
            "data-testid": e,
            className: ex({
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
        ax = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i
          } = rx(), a = (0, d.v6)({
            "data-testid": e,
            className: Zw({
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
        sx = (0, h.forwardRef)((({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: a,
            isInvalid: s
          } = rx(), l = (0, d.v6)({
            "data-testid": e,
            className: (0, A.$)($w({
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
        lx = (0, h.forwardRef)((({
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
            setInputType: S
          } = rx();
          (0, h.useEffect)((() => S(o ?? "text")), []);
          const P = (0, d.v6)({
              disabled: p,
              readOnly: g,
              required: v,
              id: b,
              type: E,
              spellCheck: !1,
              "aria-labelledby": tx(y, n),
              "aria-describedby": tx(_, r, w ? x : void 0),
              "data-testid": e,
              className: (0, A.$)(Jw({
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
                }(s, new Vw(l.current))
              }), [])
            }({
              mask: i,
              replacement: a,
              showMask: s,
              track: l
            }),
            T = (0, U.UP)(i && a ? C : null, f),
            O = t ? m.DX : "input";
          return (0, u.jsx)(O, {
            ref: T,
            ...P
          })
        })),
        cx = (0, h.forwardRef)((({
          icon: e,
          asChild: t,
          testId: n,
          side: r,
          ...o
        }, i) => {
          const {
            isDisabled: a
          } = rx(), s = (0, d.v6)({
            size: "LG",
            "data-testid": n,
            className: (0, A.$)(Qw({
              side: r,
              isDisabled: a
            }), "foundry_hcgxh_8oytzo0")
          }, o), l = t ? m.DX : z[e];
          return (0, u.jsx)(l, {
            ref: i,
            ...s
          })
        })),
        ux = (0, h.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: n
          } = rx(), r = (0, d.v6)({
            isDisabled: n,
            size: "SM",
            appearance: "ghost",
            className: Ww
          }, e);
          return (0, u.jsx)(hh, {
            ref: t,
            ...r
          })
        })),
        dx = (0, h.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: n,
            inputType: r,
            setInputType: o
          } = rx(), i = "password" === r, a = i ? "Reveal Password" : "Hide Password", s = (0, d.v6)({
            isDisabled: n,
            size: "SM",
            appearance: "ghost",
            className: Ww,
            label: a,
            icon: i ? "Eye" : "EyeOff",
            onPress: () => {
              o(i ? "text" : "password")
            }
          }, e);
          return (0, u.jsx)(_m, {
            side: "bottom",
            portal: !1,
            align: "end",
            content: (0, u.jsx)(F, {
              size: "SM",
              children: a
            }),
            children: (0, u.jsx)(hh, {
              ref: t,
              ...s
            })
          })
        })),
        hx = (0, h.forwardRef)((({
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
          } = rx(), f = (0, d.v6)({
            id: c,
            asChild: !0,
            "data-testid": e,
            className: Yw({
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

      function fx(e, t) {
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

      function px(e) {
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

      function mx(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function gx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mx(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = px(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mx(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function vx(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var yx = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        bx = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = gx(gx({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) yx(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vx(e.variantClassNames, (e => vx(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        _x = bx({
          defaultClassName: "foundry_hcgxh_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_hcgxh_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        wx = bx({
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
        xx = bx({
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
      const Ex = (0, h.createContext)(null);

      function Sx() {
        const e = (0, h.useContext)(Ex);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Px = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          status: n,
          background: r,
          ...o
        }, i) => {
          const a = e ? m.DX : "div",
            s = (0, d.v6)(o, {
              className: xx({
                status: n,
                background: r
              })
            });
          return (0, u.jsx)(Ex.Provider, {
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
        Cx = (0, h.forwardRef)((({
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
        Tx = (0, h.forwardRef)((({
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
        Ox = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Nx = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const {
            status: r
          } = Sx(), o = e || Ox[r], i = z[o], a = (0, d.v6)(t, {
            className: wx({
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
        jx = (0, h.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? m.DX : "div",
            i = (0, d.v6)(n, {
              className: "foundry_hcgxh_1m368qhi"
            });
          return (0, u.jsx)(S, {
            level: 6,
            asChild: !0,
            children: (0, u.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...i
            })
          })
        })),
        Rx = (0, h.forwardRef)((({
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
        Lx = (0, h.forwardRef)((({
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
            } = fx(r, i),
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
        Ax = (0, h.forwardRef)((({
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
        Ix = (0, h.forwardRef)((({
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
        Dx = (0, h.forwardRef)((({
          testId: e,
          label: t = "close alert",
          ...n
        }, r) => {
          const {
            background: o
          } = Sx(), i = (0, d.v6)(n, {
            className: _x({
              hasBackground: "none" !== o
            })
          });
          return (0, u.jsx)(hh, {
            ref: r,
            label: t,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "XS",
            ...i
          })
        }));

      function kx(e) {
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

      function Mx(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Hx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mx(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = kx(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mx(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Bx(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Fx = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Vx = "foundry_hcgxh_qmpv6yt",
        zx = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Hx(Hx({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Fx(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Bx(e.variantClassNames, (e => Bx(e, (e => e.split(" ")[0]))))
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

      function Ux(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function Gx(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        return n.length === r.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && n.every((n => {
          const r = e[n],
            o = t[n];
          return "function" == typeof r ? `${r}` == `${o}` : Ux(r) && Ux(o) ? Gx(r, o) : r === o
        })))
      }

      function qx(e) {
        return e.concat().sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => e.options))
      }

      function Xx(e) {
        return "number" == typeof e
      }

      function Kx(e) {
        return "string" == typeof e
      }

      function Wx(e) {
        return "boolean" == typeof e
      }

      function $x(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function Yx(e) {
        return Math.abs(e)
      }

      function Zx(e) {
        return Math.sign(e)
      }

      function Qx(e, t) {
        return Yx(e - t)
      }

      function Jx(e) {
        return oE(e).map(Number)
      }

      function eE(e) {
        return e[tE(e)]
      }

      function tE(e) {
        return Math.max(0, e.length - 1)
      }

      function nE(e, t) {
        return t === tE(e)
      }

      function rE(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Array.from(Array(e), ((e, n) => t + n))
      }

      function oE(e) {
        return Object.keys(e)
      }

      function iE(e, t) {
        return [e, t].reduce(((e, t) => (oE(t).forEach((n => {
          const r = e[n],
            o = t[n],
            i = $x(r) && $x(o);
          e[n] = i ? iE(r, o) : o
        })), e)), {})
      }

      function aE(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function sE() {
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

      function lE() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const n = Yx(e - t);

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

      function cE(e, t, n) {
        const {
          constrain: r
        } = lE(0, e), o = e + 1;
        let i = a(t);

        function a(e) {
          return n ? Yx((o + e) % o) : r(e)
        }

        function s() {
          return i
        }

        function l() {
          return cE(e, s(), n)
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

      function uE(e, t, n, r, o, i, a, s, l, c, u, d, h, f, p, m, g, v, y) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, E = sE(), S = sE(), P = lE(50, 225).constrain(f.measure(20)), C = {
          mouse: 300,
          touch: 400
        }, T = {
          mouse: 500,
          touch: 600
        }, O = p ? 43 : 25;
        let N = !1,
          j = 0,
          R = 0,
          L = !1,
          A = !1,
          I = !1,
          D = !1;

        function k(e) {
          if (!aE(e, r) && e.touches.length >= 2) return M(e);
          const t = i.readPoint(e),
            n = i.readPoint(e, b),
            a = Qx(t, j),
            l = Qx(n, R);
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
              const n = d.add(-1 * Zx(e)),
                r = u.byDistance(e, !p).distance;
              return p || Yx(e) < P ? r : g && t ? .5 * r : u.byIndex(n.get(), 0).distance
            }(_(n), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (Yx(e) <= Yx(t)) return 0;
              const n = Qx(Yx(e), Yx(t));
              return Yx(n / e)
            }(n, r),
            a = O - 10 * o,
            s = v + o / 50;
          A = !1, L = !1, S.clear(), c.useDuration(a).useFriction(s), l.distance(r, !p), D = !1, h.emit("pointerUp")
        }

        function H(e) {
          I && (e.stopPropagation(), e.preventDefault(), I = !1)
        }
        return {
          init: function(e) {
            if (!y) return;

            function s(s) {
              (Wx(y) || y(e, s)) && function(e) {
                const s = aE(e, r);
                D = s, I = p && s && !e.buttons && N, N = Qx(o.get(), a.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (L = !0, i.pointerDown(e), c.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = D ? n : t;
                  S.add(e, "touchmove", k, x).add(e, "touchend", M).add(e, "mousemove", k, x).add(e, "mouseup", M)
                }(), j = i.readPoint(e), R = i.readPoint(e, b), h.emit("pointerDown"))
              }(s)
            }
            const l = t;
            E.add(l, "dragstart", (e => e.preventDefault()), x).add(l, "touchmove", (() => {}), x).add(l, "touchend", (() => {})).add(l, "touchstart", s).add(l, "mousedown", s).add(l, "touchcancel", M).add(l, "contextmenu", M).add(l, "click", H, !0)
          },
          destroy: function() {
            E.clear(), S.clear()
          },
          pointerDown: function() {
            return L
          }
        }
      }

      function dE(e, t) {
        let n, r;

        function o(e) {
          return e.timeStamp
        }

        function i(n, r) {
          const o = "client" + ("x" === (r || e.scroll) ? "X" : "Y");
          return (aE(n, t) ? n : n.touches[0])[o]
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
            return a && !s && Yx(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function hE(e, t, n, r, o, i, a) {
        const s = [e].concat(r);
        let l, c, u = [],
          d = !1;

        function h(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            i && (c = h(e), u = r.map(h), l = new ResizeObserver((n => {
              (Wx(i) || i(o, n)) && function(n) {
                for (const i of n) {
                  if (d) return;
                  const n = i.target === e,
                    a = r.indexOf(i.target),
                    s = n ? c : u[a];
                  if (Yx(h(n ? e : r[a]) - s) >= .5) {
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

      function fE(e, t, n, r, o) {
        const i = o.measure(10),
          a = o.measure(50),
          s = lE(.1, .99);
        let l = !1;

        function c() {
          return !l && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(o) {
            if (!c()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              u = Yx(e[l] - t.get()),
              d = n.get() - t.get(),
              h = s.constrain(u / a);
            n.subtract(d * h), !o && Yx(d) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function pE(e, t, n, r) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: a,
            reachedMax: s
          } = lE(o, i),
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

      function mE(e) {
        let t = e;

        function n(e) {
          return Xx(e) ? e : e.get()
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

      function gE(e, t) {
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

      function vE(e, t, n, r, o, i, a, s, l) {
        const c = Jx(o),
          u = Jx(o).reverse(),
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
              slideLocation: mE(-1),
              translate: gE(e, l[t]),
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
              const r = c.filter((e => e !== n));
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

      function yE(e, t, n) {
        let r, o = !1;
        return {
          init: function(i) {
            n && (r = new MutationObserver((e => {
              o || (Wx(n) || n(i, e)) && function(e) {
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

      function bE(e, t, n, r, o, i, a) {
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
        }, S = E.measure(t), P = n.map(E.measure), C = function(e, t) {
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
        }(l, c), T = C.measureSize(S), O = function(e) {
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
              return Kx(e) ? n[e](r) : e(t, r, o)
            }
          };
          return o
        }(s, T), j = !d && !!y, R = d || !!y, {
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
            return Yx(t[s] - e[s])
          }(), d = function() {
            if (!c) return 0;
            const e = i.getComputedStyle(eE(r));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), h = n.map(a), f = n.map(((e, t, n) => {
            const r = !t,
              o = nE(n, t);
            return r ? h[t] + u : o ? h[t] + d : n[t + 1][s] - e[s]
          })).map(Yx);
          return {
            slideSizes: h,
            slideSizesWithGaps: f,
            startGap: u,
            endGap: d
          }
        }(C, S, P, n, R, o), k = function(e, t, n, r, o, i, a, s, l) {
          const {
            startEdge: c,
            endEdge: u,
            direction: d
          } = e, h = Xx(n), f = {
            groupSlides: function(e) {
              return h ? function(e, t) {
                return Jx(e).filter((e => e % t == 0)).map((n => e.slice(n, n + t)))
              }(e, n) : function(e) {
                return e.length ? Jx(e).reduce(((n, h, f) => {
                  const p = eE(n) || 0,
                    m = 0 === p,
                    g = h === tE(e),
                    v = o[c] - i[p][c],
                    y = o[c] - i[h][u],
                    b = !r && m ? d(a) : 0,
                    _ = Yx(y - (!r && g ? d(s) : 0) - (v + b));
                  return f && _ > t + l && n.push(h), g && n.push(e.length), n
                }), []).map(((t, n, r) => {
                  const o = Math.max(r[n - 1] || 0);
                  return e.slice(o, t)
                })) : []
              }(e)
            }
          };
          return f
        }(C, T, g, d, S, P, I, D, 2), {
          snaps: M,
          snapsAligned: H
        } = function(e, t, n, r, o) {
          const {
            startEdge: i,
            endEdge: a
          } = e, {
            groupSlides: s
          } = o, l = s(r).map((e => eE(e)[a] - e[0][i])).map(Yx).map(t.measure), c = r.map((e => n[i] - e[i])).map((e => -Yx(e))), u = s(c).map((e => e[0])).map(((e, t) => e + l[t]));
          return {
            snaps: c,
            snapsAligned: u
          }
        }(C, N, S, P, k), B = -eE(M) + eE(A), {
          snapsContained: F,
          scrollContainLimit: V
        } = function(e, t, n, r) {
          const o = lE(-t + e, 0),
            i = n.map(((e, t) => {
              const {
                min: r,
                max: i
              } = o, a = o.constrain(e), l = !t, c = nE(n, t);
              return l ? i : c || s(r, a) ? r : s(i, a) ? i : a
            })).map((e => parseFloat(e.toFixed(3)))),
            a = function() {
              const e = i[0],
                t = eE(i);
              return lE(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function s(e, t) {
            return Qx(e, t) <= 1
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
        }(T, B, H, y), z = j ? F : H, {
          limit: U
        } = function(e, t, n) {
          const r = t[0];
          return {
            limit: lE(n ? r - e : eE(t), r)
          }
        }(B, z, d), G = cE(tE(z), u, d), q = G.clone(), X = Jx(n), K = function(e, t, n, r) {
          const o = sE(),
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
            dragHandler: c,
            animation: u,
            eventHandler: d,
            scrollBounds: h,
            options: {
              loop: f
            }
          } = e;
          const p = n.settled(),
            m = !h.shouldConstrain(),
            g = f ? p : p && m,
            v = g && !c.pointerDown();
          v && u.stop();
          const y = o.get() * t + a.get() * (1 - t);
          i.set(y), f && (s.loop(n.direction()), l.loop()), r.to(i.get()), v && d.emit("settle"), g || d.emit("scroll")
        })(se, e))), W = z[G.get()], $ = mE(W), Y = mE(W), Z = mE(W), Q = mE(W), J = function(e, t, n, r, o) {
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
              return s ? (n.set(e), i += t / s, i *= l, c += i, e.add(i), o = c - u) : (i = 0, n.set(r), e.set(r), o = t), a = Zx(o), u = c, f
            },
            settled: function() {
              return Yx(r.get() - t.get()) < .001
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
            return e.concat().sort(((e, t) => Yx(e) - Yx(t)))[0]
          }

          function c(t, r) {
            const o = [t, t + n, t - n];
            if (!e) return t;
            if (!r) return l(o);
            const i = o.filter((e => Zx(e) === r));
            return i.length ? l(i) : eE(o) - n
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
                    }))).sort(((e, t) => Yx(e.diff) - Yx(t.diff))),
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
        }(U), re = sE(), oe = function(e, t, n, r) {
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
            get: function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              if (e && a) return a;
              if (!e && s) return s;
              const t = function(e) {
                return oE(o).reduce(((t, n) => {
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
                o = nE(n, t);
              return r ? rE(eE(n[0]) + 1) : o ? rE(tE(i) - eE(n)[0] + 1, eE(n)[0]) : e
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
                  (Wx(s) || s(d, t)) && function(t) {
                    if ((new Date).getTime() - c > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = n.findIndex((e => e.includes(t)));
                    Xx(i) && (o.useDuration(0), r.index(i, 0), a.emit("slideFocus"))
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
          containerRect: S,
          slideRects: P,
          animation: K,
          axis: C,
          dragHandler: uE(C, e, r, o, Q, dE(C, o), $, K, te, J, ee, G, a, O, f, p, v, .68, w),
          eventStore: re,
          percentOfView: O,
          index: G,
          indexPrevious: q,
          limit: U,
          location: $,
          offsetLocation: Z,
          previousLocation: Y,
          options: i,
          resizeHandler: hE(t, a, o, n, C, b, E),
          scrollBody: J,
          scrollBounds: fE(U, Z, Q, J, O),
          scrollLooper: pE(B, U, Z, [$, Z, Y, Q]),
          scrollProgress: ne,
          scrollSnapList: z.map(ne.get),
          scrollSnaps: z,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: vE(C, T, B, L, A, M, z, Z, n),
          slideFocus: ae,
          slidesHandler: yE(t, a, _),
          slidesInView: oe,
          slideIndexes: X,
          slideRegistry: ie,
          slidesToScroll: k,
          target: Q,
          translate: gE(C, t)
        };
        return se
      }
      const _E = {
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

      function wE(e) {
        function t(e, t) {
          return iE(e, t || {})
        }
        const n = {
          mergeOptions: t,
          optionsAtMedia: function(n) {
            const r = n.breakpoints || {},
              o = oE(r).filter((t => e.matchMedia(t).matches)).map((e => r[e])).reduce(((e, n) => t(e, n)), {});
            return t(n, o)
          },
          optionsMediaQueries: function(t) {
            return t.map((e => oE(e.breakpoints || {}))).reduce(((e, t) => e.concat(t)), []).map(e.matchMedia)
          }
        };
        return n
      }

      function xE(e, t, n) {
        const r = e.ownerDocument,
          o = r.defaultView,
          i = wE(o),
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
          s = sE(),
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
          w = c(_E, xE.globalOptions),
          x = c(w),
          E = [];

        function S(t) {
          const n = bE(e, y, b, r, o, t, l);
          return t.loop && !n.slideLooper.canLoop() ? S(Object.assign({}, t, {
            loop: !1
          })) : n
        }

        function P(t, n) {
          _ || (w = c(w, t), x = u(w), E = n || E, function() {
            const {
              container: t,
              slides: n
            } = x, r = Kx(t) ? e.querySelector(t) : t;
            y = r || e.children[0];
            const o = Kx(n) ? y.querySelectorAll(n) : n;
            b = [].slice.call(o || y.children)
          }(), g = S(x), d([w, ...E.map((e => {
            let {
              options: t
            } = e;
            return t
          }))]).forEach((e => s.add(e, "change", C))), x.active && (g.translate.to(g.location.get()), g.animation.init(), g.slidesInView.init(), g.slideFocus.init(j), g.eventHandler.init(j), g.resizeHandler.init(j), g.slidesHandler.init(j), g.options.loop && g.slideLooper.loop(), y.offsetParent && b.length && g.dragHandler.init(j), v = a.init(j, E)))
        }

        function C(e, t) {
          const n = N();
          T(), P(c({
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
        return P(t, n), setTimeout((() => l.emit("init")), 0), j
      }

      function EE() {
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
          Gx(n.current, e) || (n.current = e, l())
        }), [e, l]), (0, h.useEffect)((() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const n = qx(e),
              r = qx(t);
            return n.every(((e, t) => Gx(e, r[t])))
          })(r.current, t) || (r.current = t, l())
        }), [t, l]), (0, h.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            xE.globalOptions = EE.globalOptions;
            const e = xE(a, n.current, r.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }), [a, i]), [s, o]
      }

      function SE() {
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
      xE.globalOptions = void 0, EE.globalOptions = void 0, SE.globalOptions = void 0;
      const PE = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function CE(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function TE(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function OE(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function NE() {
        let e, t, n, r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
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
          ("pointerDown" === t ? OE : TE)(n, u.dragging)
        }

        function h() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 2 ? arguments[2] : void 0;
          const n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((e => r[e])),
            o = e.map((e => r[e]));
          return n.forEach((e => TE(e, t))), o.forEach((e => OE(e, t))), e
        }

        function f() {
          const {
            slideRegistry: e
          } = t.internalEngine(), n = e[t.selectedScrollSnap()];
          i = h(n, i, u.snapped)
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
            } = a, g = h(PE, NE.globalOptions), v = h(g, o);
            e = m(v), n = t.rootNode(), r = t.slideNodes();
            const {
              watchDrag: y,
              loop: b
            } = t.internalEngine().options, _ = !!y;
            e.loop && b && (u.loop = CE(e.loop), OE(n, u.loop)), e.draggable && _ && (u.draggable = CE(e.draggable), OE(n, u.draggable)), e.dragging && (u.dragging = CE(e.dragging), l.forEach((e => t.on(e, d)))), e.snapped && (u.snapped = CE(e.snapped), s.forEach((e => t.on(e, f))), f()), e.inView && (u.inView = CE(e.inView), c.forEach((e => t.on(e, p))), p())
          },
          destroy: function() {
            l.forEach((e => t.off(e, d))), s.forEach((e => t.off(e, f))), c.forEach((e => t.off(e, p))), TE(n, u.loop), TE(n, u.draggable), TE(n, u.dragging), h([], i, u.snapped), h([], a, u.inView), Object.keys(u).forEach((e => {
              u[e] = []
            }))
          }
        };
        return m
      }
      NE.globalOptions = void 0;
      const jE = (0, h.createContext)(null);

      function RE() {
        const e = (0, h.useContext)(jE);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const LE = (0, h.forwardRef)((({
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
                [l, c] = EE({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [SE(), NE()]),
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
              className: zx(f)
            }, y),
            _ = e ? m.DX : "div";
          return (0, u.jsx)(jE.Provider, {
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
        AE = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        IE = (0, h.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const {
            currentAlert: r
          } = RE();
          if (!e && !r || !r?.status) return null;
          const o = e || AE[r.status],
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
        DE = (0, h.forwardRef)((({
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
        kE = (0, h.forwardRef)((({
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
        ME = (0, h.forwardRef)((({
          testId: e,
          children: t,
          ...n
        }, r) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = RE(), a = (0, d.v6)(n, {
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
        HE = (0, h.forwardRef)((({
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
            } = fx(r, i),
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
        BE = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const r = (0, d.v6)(t, {
            className: "foundry_hcgxh_qmpv6yq"
          });
          return (0, u.jsx)(hh, {
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
        FE = (0, h.forwardRef)((({
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
        VE = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            nextAlert: r,
            canScrollNext: o
          } = RE(), i = (0, d.v6)(t, {
            className: Vx
          });
          return (0, u.jsx)(hh, {
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
        zE = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            prevAlert: r,
            canScrollPrev: o
          } = RE(), i = (0, d.v6)(t, {
            className: Vx
          });
          return (0, u.jsx)(hh, {
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
        UE = (0, h.forwardRef)((({
          testId: e,
          ...t
        }, n) => {
          const {
            currentAlertIndex: r,
            numAlerts: o
          } = RE(), i = (0, d.v6)(t, {
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

      function GE(e) {
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

      function qE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function XE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? qE(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = GE(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qE(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function KE(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var WE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        $E = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = XE(XE({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) WE(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return KE(e.variantClassNames, (e => KE(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        YE = $E({
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
        ZE = $E({
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
      const QE = (0, h.createContext)(null);

      function JE() {
        const e = (0, h.useContext)(QE);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const eS = (0, h.forwardRef)((({
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
              className: ZE(h)
            }),
            p = e ? m.DX : "div";
          return (0, u.jsx)(QE.Provider, {
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
        tS = (0, h.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            size: i
          } = JE(), a = e ? m.DX : "div", s = (0, d.v6)(r, {
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
        nS = (0, h.forwardRef)((({
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
        rS = (0, h.forwardRef)((({
          testId: e,
          label: t = "close tag",
          ...n
        }, r) => {
          const {
            background: o,
            isDisabled: i
          } = JE(), a = (0, d.v6)(n, {
            className: YE({
              background: o
            })
          });
          return (0, u.jsx)(hh, {
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

      function oS(e) {
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

      function iS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function aS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? iS(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = oS(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : iS(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function sS(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var lS = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        cS = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = aS(aS({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) lS(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sS(e.variantClassNames, (e => sS(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        uS = cS({
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
        dS = cS({
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
        hS = cS({
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

      function fS() {
        const e = (0, h.useContext)(pS);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const pS = (0, h.createContext)(null),
        mS = (0, h.forwardRef)((({
          children: e,
          testId: t,
          asChild: n,
          size: r = "MD",
          ...o
        }, i) => {
          const a = (0, d.v6)({
              className: hS({
                size: r
              })
            }, o),
            s = n ? m.DX : "ol";
          return (0, u.jsx)(pS.Provider, {
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
        gS = (0, h.forwardRef)((({
          isCurrent: e,
          children: t,
          asChild: n,
          testId: r,
          ...o
        }, i) => {
          const a = (0, h.useRef)(null),
            {
              size: s
            } = fS(),
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
              } = fx({
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
              className: (0, A.$)(uS({
                size: s
              }), e && "foundry_hcgxh_m1icrx9"),
              "data-testid": r
            }, l, o);
          return (0, u.jsx)("li", {
            className: dS({
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
        vS = (0, h.forwardRef)((({
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
        yS = (0, h.forwardRef)((({
          children: e,
          testId: t,
          defaultOpen: n = !1,
          label: r = "Show hidden breadcrumbs",
          ...o
        }, i) => {
          const [a, s] = (0, h.useState)(n), {
            size: l
          } = fS(), c = (0, d.v6)({
            className: dS({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, u.jsx)("li", {
            ref: i,
            ...c,
            children: (0, u.jsxs)(py, {
              open: a,
              onOpenChange: () => s(!a),
              children: [(0, u.jsx)(my, {
                className: "foundry_hcgxh_m1icrxa foundry_hcgxh_1d5mo5m0 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd11",
                "aria-label": r,
                children: "..."
              }), (0, u.jsx)(yy, {
                children: (0, u.jsx)(by, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_hcgxh_m1icrxb",
                  children: (0, u.jsx)(_y, {
                    className: "foundry_hcgxh_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        })),
        bS = (0, h.forwardRef)((({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const i = t ? m.DX : wy,
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
    }
  }
]);