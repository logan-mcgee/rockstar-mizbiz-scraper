try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a897d7eb-4c70-472b-8e9b-236a4c2cbb80", e._sentryDebugIdIdentifier = "sentry-dbid-a897d7eb-4c70-472b-8e9b-236a4c2cbb80")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [4553], {
    16859: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        a = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        u = r ? Symbol.for("react.context") : 60110,
        c = r ? Symbol.for("react.async_mode") : 60111,
        d = r ? Symbol.for("react.concurrent_mode") : 60111,
        f = r ? Symbol.for("react.forward_ref") : 60112,
        h = r ? Symbol.for("react.suspense") : 60113,
        p = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        v = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        g = r ? Symbol.for("react.fundamental") : 60117,
        b = r ? Symbol.for("react.responder") : 60118,
        _ = r ? Symbol.for("react.scope") : 60119;

      function w(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
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
                    case v:
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
      t.AsyncMode = c, t.ConcurrentMode = d, t.ContextConsumer = u, t.ContextProvider = l, t.Element = n, t.ForwardRef = f, t.Fragment = i, t.Lazy = v, t.Memo = m, t.Portal = o, t.Profiler = s, t.StrictMode = a, t.Suspense = h, t.isAsyncMode = function(e) {
        return E(e) || w(e) === c
      }, t.isConcurrentMode = E, t.isContextConsumer = function(e) {
        return w(e) === u
      }, t.isContextProvider = function(e) {
        return w(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
      }, t.isForwardRef = function(e) {
        return w(e) === f
      }, t.isFragment = function(e) {
        return w(e) === i
      }, t.isLazy = function(e) {
        return w(e) === v
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
        return "string" == typeof e || "function" == typeof e || e === i || e === d || e === s || e === a || e === h || e === p || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === m || e.$$typeof === l || e.$$typeof === u || e.$$typeof === f || e.$$typeof === g || e.$$typeof === b || e.$$typeof === _ || e.$$typeof === y)
      }, t.typeOf = w
    },
    35255: (e, t, r) => {
      var n = r(88335),
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
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (p) {
            var o = h(r);
            o && o !== p && e(t, o, n)
          }
          var a = c(r);
          d && (a = a.concat(d(r)));
          for (var s = l(t), m = l(r), v = 0; v < a.length; ++v) {
            var y = a[v];
            if (!(i[y] || n && n[y] || m && m[y] || s && s[y])) {
              var g = f(r, y);
              try {
                u(t, y, g)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    84553: (e, t, r) => {
      r.r(t), r.d(t, {
        Alert: () => f,
        AlertBanner: () => h,
        Body: () => Ed,
        Breadcrumbs: () => m,
        Button: () => ht,
        Checkbox: () => s,
        Code: () => uv,
        Display: () => $m,
        Divider: () => Km,
        Dropdown: () => o,
        Heading: () => j,
        IconButton: () => md,
        Label: () => rv,
        Lightbox: () => Fm,
        Loader: () => _v,
        RadioGroup: () => c,
        Spinner: () => rt,
        Switch: () => i,
        Tag: () => p,
        Text: () => H,
        TextArea: () => l,
        TextField: () => d,
        TextSemantics: () => M,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => Ep,
        Content: () => wp,
        Portal: () => xp,
        Root: () => bp,
        Trigger: () => _p,
        useTooltipContext: () => gp
      });
      var o = {};
      r.r(o), r.d(o, {
        Content: () => Mb,
        Description: () => qb,
        Hint: () => Ub,
        Label: () => zb,
        Option: () => Gb,
        OptionIcon: () => Wb,
        OptionText: () => Xb,
        Portal: () => Kb,
        Root: () => Lb,
        ScrollArea: () => Hb,
        StatusIcon: () => Yb,
        StatusRoot: () => $b,
        StatusText: () => Zb,
        Trigger: () => Bb,
        TriggerIcon: () => Fb,
        TriggerText: () => Vb,
        useDropdownContext: () => Ab
      });
      var i = {};
      r.r(i), r.d(i, {
        Description: () => x_,
        Input: () => w_,
        Label: () => E_,
        Root: () => __,
        useSwitchContext: () => b_
      });
      var a = {};
      r.r(a), r.d(a, {
        CheckLG: () => H_,
        CheckMD: () => M_,
        CheckXL: () => B_,
        DashLG: () => F_,
        DashMD: () => V_,
        DashXL: () => z_
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => ow,
        ErrorText: () => iw,
        Input: () => rw,
        Label: () => nw,
        Root: () => tw
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => ww,
        Hint: () => Ew,
        Input: () => _w,
        Label: () => bw,
        Root: () => gw,
        RootContext: () => vw,
        StatusIcon: () => Pw,
        StatusRoot: () => xw,
        StatusText: () => Sw,
        useTextAreaContext: () => yw
      });
      var u = {};
      r.r(u), r.d(u, {
        DotLG: () => PE,
        DotMD: () => xE,
        DotXL: () => SE
      });
      var c = {};
      r.r(c), r.d(c, {
        Description: () => mE,
        Input: () => OE,
        Label: () => pE,
        Option: () => CE,
        OptionDescription: () => NE,
        OptionLabel: () => TE,
        Options: () => hE,
        Root: () => fE,
        StatusIcon: () => yE,
        StatusRoot: () => vE,
        StatusText: () => gE,
        useRadioGroupContext: () => dE
      });
      var d = {};
      r.r(d), r.d(d, {
        Button: () => Rx,
        Control: () => Nx,
        Description: () => kx,
        Hint: () => Tx,
        Icon: () => Ix,
        Input: () => jx,
        Label: () => Ox,
        PasswordButton: () => Dx,
        Root: () => Cx,
        StatusIcon: () => Lx,
        StatusRoot: () => Ax,
        StatusText: () => Mx
      });
      var f = {};
      r.r(f), r.d(f, {
        Body: () => eP,
        CloseButton: () => lP,
        Description: () => oP,
        ErrorText: () => sP,
        Footer: () => aP,
        Header: () => Jx,
        Icon: () => rP,
        Link: () => iP,
        Root: () => Qx,
        RootContext: () => Yx,
        Title: () => nP,
        iconStatusMap: () => tP,
        useAlertContext: () => Zx
      });
      var h = {};
      r.r(h), r.d(h, {
        Alert: () => dS,
        CloseButton: () => pS,
        Description: () => cS,
        Icon: () => uS,
        Link: () => hS,
        PaginationCounter: () => gS,
        PaginationNav: () => mS,
        PaginationNextButton: () => vS,
        PaginationPrevButton: () => yS,
        PaginationViewport: () => fS,
        Root: () => sS,
        RootContext: () => iS,
        iconStatusMap: () => lS,
        useAlertBannerContext: () => aS
      });
      var p = {};
      r.r(p), r.d(p, {
        CloseButton: () => AS,
        Icon: () => kS,
        Label: () => DS,
        Root: () => RS,
        RootContext: () => jS,
        useTagContext: () => IS
      });
      var m = {};
      r.r(m), r.d(m, {
        Icon: () => ZS,
        Item: () => YS,
        OverflowMenu: () => QS,
        OverflowMenuItem: () => JS,
        Root: () => $S,
        RootContext: () => KS,
        useBreadcrumbsContext: () => WS
      });
      var v = r(42295),
        y = r(68791),
        g = r(62229),
        b = r.t(g, 2),
        _ = r.n(g),
        w = r(32067);

      function E(e) {
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

      function x(e, t) {
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
          t % 2 ? x(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = E(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function S(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var C, O, T = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        N = (C = {
          defaultClassName: "foundry_vsn8np0",
          variantClassNames: {
            level: {
              1: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd4",
              2: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd5",
              3: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6",
              4: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd7",
              5: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8",
              6: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, O = e => {
          var t = C.defaultClassName,
            r = P(P({}, C.defaultVariants), e);
          for (var n in r) {
            var o, i = null !== (o = r[n]) && void 0 !== o ? o : C.defaultVariants[n];
            if (null != i) {
              var a = i;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var s = C.variantClassNames[n][a];
              s && (t += " " + s)
            }
          }
          for (var [l, u] of C.compoundVariants) T(l, r, C.defaultVariants) && (t += " " + u);
          return t
        }, O.variants = () => Object.keys(C.variantClassNames), O.classNames = {
          get base() {
            return C.defaultClassName.split(" ")[0]
          },
          get variants() {
            return S(C.variantClassNames, (e => S(e, (e => e.split(" ")[0]))))
          }
        }, O);
      const j = (0, g.forwardRef)((({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const i = e ? w.DX : `h${t}`,
          a = (0, y.v6)(n, {
            className: N({
              level: t
            })
          });
        return (0, v.jsx)(i, {
          ref: o,
          "data-testid": r,
          ...a
        })
      }));

      function I(e) {
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

      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? R(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = I(o)) in n ? Object.defineProperty(n, o, {
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

      function k(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var A = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        L = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = D(D({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) A(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return k(e.variantClassNames, (e => k(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_12nwidl0",
          variantClassNames: {
            semantic: {
              abbr: "foundry_12nwidl1",
              cite: "foundry_12nwidl2",
              emphasis: "foundry_12nwidl3",
              idiomatic: "foundry_12nwidl4",
              mark: "foundry_12nwidl5",
              "strike-through": "foundry_12nwidl6",
              strong: "foundry_12nwidl7",
              sub: "foundry_12nwidl8",
              sup: "foundry_12nwidl9",
              underline: "foundry_12nwidla",
              default: "foundry_12nwidlb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const M = {
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
        H = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const i = e ? w.DX : M[r] || "span",
            a = (0, y.v6)(n, {
              className: L({
                semantic: r
              })
            });
          return (0, v.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }));

      function B(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class V extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var F = V;

      function z(e) {
        if ("string" != typeof e) throw new F(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = Y.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = U[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new F(e);
          return `#${r}`
        }(e) : e;
        const r = X.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(G(e, 2), 16))), parseInt(G(e[3] || "f", 2), 16) / 255]
        }
        const n = W.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(e, 16))), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = K.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(e, 10))), parseFloat(e[3] || "1")]
        }
        const i = $.exec(t);
        if (i) {
          const [t, r, n, o] = Array.from(i).slice(1).map(parseFloat);
          if (B(0, 100, r) !== r) throw new F(e);
          if (B(0, 100, n) !== n) throw new F(e);
          return [...Q(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new F(e)
      }
      const q = e => parseInt(e.replace(/_/g, ""), 36),
        U = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce(((e, t) => {
          const r = q(t.substring(0, 3)),
            n = q(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }), {}),
        G = (e, t) => Array.from(Array(t)).map((() => e)).join(""),
        X = new RegExp(`^#${G("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        W = new RegExp(`^#${G("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        K = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${G(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        $ = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        Y = /^[a-z]+$/i,
        Z = e => Math.round(255 * e),
        Q = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(Z);
          const o = (e % 360 + 360) % 360 / 60,
            i = (1 - Math.abs(2 * n - 1)) * (t / 100),
            a = i * (1 - Math.abs(o % 2 - 1));
          let s = 0,
            l = 0,
            u = 0;
          o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
          const c = n - i / 2;
          return [s + c, l + c, u + c].map(Z)
        };

      function J(e, t) {
        const [r, n, o, i] = function(e) {
          const [t, r, n, o] = z(e).map(((e, t) => 3 === t ? e : e / 255)), i = Math.max(t, r, n), a = Math.min(t, r, n), s = (i + a) / 2;
          if (i === a) return [0, 0, s, o];
          const l = i - a;
          return [60 * (t === i ? (r - n) / l + (r < n ? 6 : 0) : r === i ? (n - t) / l + 2 : (t - r) / l + 4), s > .5 ? l / (2 - i - a) : l / (i + a), s, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${B(0,100,100*t).toFixed()}%, ${B(0,100,100*r).toFixed()}%, ${parseFloat(B(0,1,n).toFixed(3))})`
        }(r, n, o - t, i)
      }

      function ee(e, t) {
        return J(e, -t)
      }
      var te = r(23644);

      function re(e, t) {
        var r = {};
        if ("object" == typeof t) {
          var n = e;
          (0, te.Bx)(t, ((e, t) => {
            if (null != e) {
              var o = (0, te.Jt)(n, t);
              r[(0, te.Tm)(o)] = String(e)
            }
          }))
        } else {
          var o = e;
          for (var i in o) {
            var a = o[i];
            null != a && (r[(0, te.Tm)(i)] = a)
          }
        }
        return Object.defineProperty(r, "toString", {
          value: function() {
            return Object.keys(this).map((e => "".concat(e, ":").concat(this[e]))).join(";")
          },
          writable: !1
        }), r
      }
      r(10131);
      var ne = {
        grey: {
          static: {
            25: "var(--foundry_05dae190)",
            50: "var(--foundry_767699a7)",
            75: "var(--foundry_a2172132)",
            100: "var(--foundry_01811cdb)",
            200: "var(--foundry_8230761c)",
            300: "var(--foundry_60d2d1b8)",
            400: "var(--foundry_b9847fcb)",
            500: "var(--foundry_c92b4dd8)",
            600: "var(--foundry_048e9067)",
            700: "var(--foundry_6ebcd800)",
            800: "var(--foundry_35f77231)",
            900: "var(--foundry_a85ec23d)"
          },
          adaptive: {
            25: "var(--foundry_4181979c)",
            50: "var(--foundry_2026f5f9)",
            75: "var(--foundry_e832421c)",
            100: "var(--foundry_ed36bf65)",
            200: "var(--foundry_fb12d031)",
            300: "var(--foundry_02700b85)",
            400: "var(--foundry_54ccd69e)",
            500: "var(--foundry_ddc3fb78)",
            600: "var(--foundry_e8d9db01)",
            700: "var(--foundry_e3418aa4)",
            800: "var(--foundry_59c03dd7)",
            900: "var(--foundry_bbecd7df)",
            1e3: "var(--foundry_020dfb1f)"
          }
        },
        red: {
          static: {
            100: "var(--foundry_5234bf51)",
            200: "var(--foundry_9b555022)",
            300: "var(--foundry_6ef42061)",
            400: "var(--foundry_bd31684b)",
            500: "var(--foundry_b89c22c5)",
            600: "var(--foundry_ed4f7808)",
            700: "var(--foundry_20c326c5)",
            800: "var(--foundry_60c90a7b)",
            900: "var(--foundry_55f69265)",
            1e3: "var(--foundry_12c1e6bb)",
            1100: "var(--foundry_284ef4c0)",
            1200: "var(--foundry_5d3f7911)",
            1300: "var(--foundry_43fd11f8)",
            1400: "var(--foundry_dff9f9a5)"
          },
          adaptive: {
            100: "var(--foundry_9f218b31)",
            200: "var(--foundry_b287e195)",
            300: "var(--foundry_3513afa6)",
            400: "var(--foundry_2e43b523)",
            500: "var(--foundry_d198b061)",
            600: "var(--foundry_7da276f6)",
            700: "var(--foundry_6f634812)",
            800: "var(--foundry_7f423e03)",
            900: "var(--foundry_43f71e11)",
            1e3: "var(--foundry_9f5e2924)",
            1100: "var(--foundry_f2f72614)",
            1200: "var(--foundry_aef5078c)",
            1300: "var(--foundry_3c79c39b)",
            1400: "var(--foundry_918ac2c6)"
          }
        },
        yellow: {
          static: {
            100: "var(--foundry_2887d8ce)",
            200: "var(--foundry_1dceac31)",
            300: "var(--foundry_bda8dae5)",
            400: "var(--foundry_e603ca1c)",
            500: "var(--foundry_b9703bbc)",
            600: "var(--foundry_828a39a0)",
            700: "var(--foundry_cb059cba)",
            800: "var(--foundry_e49b6916)",
            900: "var(--foundry_ff35761e)",
            1e3: "var(--foundry_7c6c4551)",
            1100: "var(--foundry_2e821a8c)",
            1200: "var(--foundry_aea00231)",
            1300: "var(--foundry_7eec7bd0)",
            1400: "var(--foundry_0ff6b89d)"
          },
          adaptive: {
            100: "var(--foundry_8f09820e)",
            200: "var(--foundry_63c3f5ee)",
            300: "var(--foundry_4deab2f6)",
            400: "var(--foundry_78286ac3)",
            500: "var(--foundry_f0427a70)",
            600: "var(--foundry_3f6d60dc)",
            700: "var(--foundry_959c799c)",
            800: "var(--foundry_099fea86)",
            900: "var(--foundry_9443df02)",
            1e3: "var(--foundry_abbedd59)",
            1100: "var(--foundry_ff18d083)",
            1200: "var(--foundry_4bc40f51)",
            1300: "var(--foundry_b3a4b5b4)",
            1400: "var(--foundry_3048335a)"
          }
        },
        green: {
          static: {
            100: "var(--foundry_753f09df)",
            200: "var(--foundry_b1b43708)",
            300: "var(--foundry_d66b3241)",
            400: "var(--foundry_a93942e5)",
            500: "var(--foundry_2888e254)",
            600: "var(--foundry_aebbfb3a)",
            700: "var(--foundry_89b4ffdc)",
            800: "var(--foundry_87b9bb4f)",
            900: "var(--foundry_b42b84da)",
            1e3: "var(--foundry_43ecb25e)",
            1100: "var(--foundry_d4597796)",
            1200: "var(--foundry_a4dad299)",
            1300: "var(--foundry_7861b376)",
            1400: "var(--foundry_4d463023)"
          },
          adaptive: {
            100: "var(--foundry_e36f5da3)",
            200: "var(--foundry_e50d247c)",
            300: "var(--foundry_e74a73b3)",
            400: "var(--foundry_3e375ae0)",
            500: "var(--foundry_5eb32af8)",
            600: "var(--foundry_67db0104)",
            700: "var(--foundry_b46c5b6e)",
            800: "var(--foundry_62f4ea41)",
            900: "var(--foundry_456c793d)",
            1e3: "var(--foundry_ebe84050)",
            1100: "var(--foundry_7d1a8857)",
            1200: "var(--foundry_f5a760b2)",
            1300: "var(--foundry_98111c27)",
            1400: "var(--foundry_c7a2c7e4)"
          }
        },
        blue: {
          static: {
            100: "var(--foundry_e67c243c)",
            200: "var(--foundry_d053fe98)",
            300: "var(--foundry_564f6a4f)",
            400: "var(--foundry_803833dc)",
            500: "var(--foundry_029df7ec)",
            600: "var(--foundry_55155611)",
            700: "var(--foundry_f0d799e8)",
            800: "var(--foundry_6d071594)",
            900: "var(--foundry_92d3b7cc)",
            1e3: "var(--foundry_cc0c4d91)",
            1100: "var(--foundry_674881c3)",
            1200: "var(--foundry_81ade28f)",
            1300: "var(--foundry_92c235c9)",
            1400: "var(--foundry_1b5feb14)"
          },
          adaptive: {
            100: "var(--foundry_b6c46a86)",
            200: "var(--foundry_0ccc0c81)",
            300: "var(--foundry_e5d80c0e)",
            400: "var(--foundry_44a2af0b)",
            500: "var(--foundry_64093fc7)",
            600: "var(--foundry_41bcc0d5)",
            700: "var(--foundry_6f985a0d)",
            800: "var(--foundry_c66fae2b)",
            900: "var(--foundry_f87fb7ab)",
            1e3: "var(--foundry_129c45a7)",
            1100: "var(--foundry_579d2d7f)",
            1200: "var(--foundry_5b826b61)",
            1300: "var(--foundry_5864a192)",
            1400: "var(--foundry_b9e5f8ab)"
          }
        },
        seafoam: {
          static: {
            100: "var(--foundry_a401f55d)",
            200: "var(--foundry_157f98a6)",
            300: "var(--foundry_f057cb2a)",
            400: "var(--foundry_5c314058)",
            500: "var(--foundry_4eba9472)",
            600: "var(--foundry_bb39e74b)",
            700: "var(--foundry_97a0e42c)",
            800: "var(--foundry_c898779d)",
            900: "var(--foundry_ca1e00fd)",
            1e3: "var(--foundry_97b36592)",
            1100: "var(--foundry_7a540639)",
            1200: "var(--foundry_9d613b2f)",
            1300: "var(--foundry_5d82dc91)",
            1400: "var(--foundry_c9f1799c)"
          },
          adaptive: {
            100: "var(--foundry_9fd7898d)",
            200: "var(--foundry_ad5ea160)",
            300: "var(--foundry_339db442)",
            400: "var(--foundry_bacc52ab)",
            500: "var(--foundry_24d9f0ae)",
            600: "var(--foundry_28f1d217)",
            700: "var(--foundry_f8862c98)",
            800: "var(--foundry_240ff22d)",
            900: "var(--foundry_30744fa2)",
            1e3: "var(--foundry_cecc3b2f)",
            1100: "var(--foundry_307fe74e)",
            1200: "var(--foundry_1d61b617)",
            1300: "var(--foundry_26c82681)",
            1400: "var(--foundry_6cf3df35)"
          }
        },
        white: {
          static: {
            5: "var(--foundry_c4aa496e)",
            10: "var(--foundry_fc74444e)",
            15: "var(--foundry_e98f967d)",
            20: "var(--foundry_6326998e)",
            35: "var(--foundry_fdd05d92)",
            40: "var(--foundry_a06b4074)",
            50: "var(--foundry_195bb728)",
            65: "var(--foundry_c30f2d6e)",
            80: "var(--foundry_1525ba22)",
            85: "var(--foundry_79c7cc6b)",
            90: "var(--foundry_5959c519)",
            95: "var(--foundry_becabaec)",
            100: "var(--foundry_d44db539)"
          }
        },
        black: {
          static: {
            5: "var(--foundry_5a16f697)",
            10: "var(--foundry_16a76e5e)",
            15: "var(--foundry_d198b2a6)",
            20: "var(--foundry_3ae064df)",
            35: "var(--foundry_1523cb80)",
            40: "var(--foundry_32fa6bf3)",
            50: "var(--foundry_e761096d)",
            65: "var(--foundry_1c288c8d)",
            80: "var(--foundry_ceca67af)",
            85: "var(--foundry_3cb71ba6)",
            90: "var(--foundry_45219d0a)",
            95: "var(--foundry_4042e3bb)",
            100: "var(--foundry_43aea341)"
          }
        },
        alpha: {
          adaptive: {
            5: "var(--foundry_b141acdd)",
            10: "var(--foundry_2f911b2f)",
            15: "var(--foundry_695b3a30)",
            20: "var(--foundry_8e38b04d)",
            35: "var(--foundry_f9b0b74d)",
            40: "var(--foundry_29c77778)",
            50: "var(--foundry_f61afb4a)",
            65: "var(--foundry_5c75d572)",
            80: "var(--foundry_6e56c3f3)",
            85: "var(--foundry_130819b2)",
            90: "var(--foundry_a416f5ef)",
            95: "var(--foundry_68274c65)"
          }
        }
      };
      const oe = e => {
        const t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      };

      function ie(e) {
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

      function ae(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ae(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ie(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ae(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function le(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ue = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ce = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = se(se({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) ue(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return le(e.variantClassNames, (e => le(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        de = "var(--foundry_1qqcnua0)",
        fe = "var(--foundry_1qqcnua1)",
        he = "var(--foundry_1qqcnua2)",
        pe = "var(--foundry_1qqcnua3)",
        me = "var(--foundry_1qqcnua4)",
        ve = "var(--foundry_1qqcnua5)",
        ye = "var(--foundry_1qqcnua6)",
        ge = "var(--foundry_1qqcnua7)",
        be = "var(--foundry_1qqcnua8)",
        _e = "var(--foundry_1qqcnua9)",
        we = "var(--foundry_1qqcnuaa)",
        Ee = "var(--foundry_1qqcnuab)",
        xe = "var(--foundry_1qqcnuac)",
        Pe = "var(--foundry_1qqcnuad)",
        Se = "var(--foundry_1qqcnuae)",
        Ce = "var(--foundry_1qqcnuaf)",
        Oe = "var(--foundry_1qqcnuag)",
        Te = "var(--foundry_1qqcnuah)",
        Ne = "var(--foundry_1qqcnuai)",
        je = "var(--foundry_1qqcnuaj)",
        Ie = "var(--foundry_1qqcnuak)",
        Re = "var(--foundry_1qqcnual)",
        De = "var(--foundry_1qqcnuam)",
        ke = "var(--foundry_1qqcnuan)";
      ce({
        defaultClassName: "foundry_1qqcnuao",
        variantClassNames: {
          appearance: {
            primary: "foundry_1qqcnuap",
            secondary: "foundry_1qqcnuaq",
            tertiary: "foundry_1qqcnuar",
            ghost: "foundry_1qqcnuas",
            information: "foundry_1qqcnuat",
            danger: "foundry_1qqcnuau",
            accent: "foundry_1qqcnuav"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), ce({
        defaultClassName: "foundry_tdsdcdu foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdw",
            MD: "foundry_tdsdcdx",
            SM: "foundry_tdsdcdy",
            XS: "foundry_tdsdcdz"
          },
          appearance: {
            default: "foundry_tdsdcd10",
            bold: "foundry_tdsdcd11",
            hyperlink: "foundry_tdsdcd12"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), ce({
        defaultClassName: "foundry_tdsdcdk foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdm",
            bold: "foundry_tdsdcdn",
            hyperlink: "foundry_tdsdcdo",
            allCaps: "foundry_tdsdcdp"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), ce({
        defaultClassName: "foundry_tdsdcd1b foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcd1d",
            bold: "foundry_tdsdcd1e"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), ce({
        defaultClassName: "foundry_tdsdcd2 foundry_tdsdcd0",
        variantClassNames: {
          level: {
            1: "foundry_tdsdcd4",
            2: "foundry_tdsdcd5",
            3: "foundry_tdsdcd6",
            4: "foundry_tdsdcd7",
            5: "foundry_tdsdcd8",
            6: "foundry_tdsdcd9"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), ce({
        defaultClassName: "foundry_tdsdcd13 foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcd15",
            MD: "foundry_tdsdcd16",
            SM: "foundry_tdsdcd17",
            XS: "foundry_tdsdcd18"
          },
          appearance: {
            default: "foundry_tdsdcd19",
            bold: "foundry_tdsdcd1a"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), ce({
        defaultClassName: "foundry_tdsdcdq foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcds",
            bold: "foundry_tdsdcdt"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), ce({
        defaultClassName: "foundry_tdsdcde foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdg",
            bold: "foundry_tdsdcdh",
            hyperlink: "foundry_tdsdcdi",
            allCaps: "foundry_tdsdcdj"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), ce({
        defaultClassName: "foundry_tdsdcda foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdc",
            bold: "foundry_tdsdcdd"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const Ae = {
          enabled: {
            background: oe(de),
            border: oe(fe),
            text: oe(he),
            outline: oe(pe)
          },
          hover: {
            background: oe(me),
            border: oe(ve),
            text: oe(ye),
            outline: oe(ge)
          },
          focus: {
            background: oe(be),
            border: oe(_e),
            text: oe(we),
            outline: oe(Ee)
          },
          pressed: {
            background: oe(xe),
            border: oe(Pe),
            text: oe(Se),
            outline: oe(Ce)
          },
          disabled: {
            background: oe(Oe),
            border: oe(Te),
            text: oe(Ne),
            outline: oe(je)
          },
          loading: {
            background: oe(Ie),
            border: oe(Re),
            text: oe(De),
            outline: oe(ke)
          }
        },
        Le = ({
          refs: {
            buttonRef: e
          },
          config: {
            textLuminance: t,
            darkenLuminance: r,
            hoverLuminance: n,
            pressedLuminance: o
          },
          overrides: {
            backgroundColor: i,
            hoverColor: a,
            pressedColor: s,
            textColor: l
          },
          enabled: u = !1
        }) => {
          (0, g.useEffect)((() => {
            if (!e.current || !i || !u) return;
            const c = `${i}:${t}:${r}`,
              {
                text: d,
                hover: f,
                pressed: h
              } = (0, y.IO)(c, (() => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = z(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(i);
                return {
                  text: l || (e > t ? ne.black.static[100] : ne.white.static[100]),
                  hover: a || (e >= r ? J(i, n) : ee(i, n)),
                  pressed: s || (e >= r ? J(i, o) : ee(i, o))
                }
              }));
            return e.current.style.setProperty(Ae.enabled.background, i), e.current.style.setProperty(Ae.enabled.border, i), e.current.style.setProperty(Ae.enabled.text, d), e.current.style.setProperty(Ae.hover.background, f), e.current.style.setProperty(Ae.hover.border, f), e.current.style.setProperty(Ae.hover.text, d), e.current.style.setProperty(Ae.focus.background, f), e.current.style.setProperty(Ae.focus.border, f), e.current.style.setProperty(Ae.focus.text, d), e.current.style.setProperty(Ae.pressed.background, h), e.current.style.setProperty(Ae.pressed.border, h), e.current.style.setProperty(Ae.pressed.text, d), e.current.style.setProperty(Ae.loading.background, f), e.current.style.setProperty(Ae.loading.border, f), e.current.style.setProperty(Ae.loading.text, d), () => {
              e.current?.style.removeProperty(Ae.enabled.background), e.current?.style.removeProperty(Ae.enabled.border), e.current?.style.removeProperty(Ae.enabled.text), e.current?.style.removeProperty(Ae.hover.background), e.current?.style.removeProperty(Ae.hover.border), e.current?.style.removeProperty(Ae.hover.text), e.current?.style.removeProperty(Ae.focus.background), e.current?.style.removeProperty(Ae.focus.border), e.current?.style.removeProperty(Ae.focus.text), e.current?.style.removeProperty(Ae.pressed.background), e.current?.style.removeProperty(Ae.pressed.border), e.current?.style.removeProperty(Ae.pressed.text), e.current?.style.removeProperty(Ae.loading.background), e.current?.style.removeProperty(Ae.loading.border), e.current?.style.removeProperty(Ae.loading.text)
            }
          }), [e.current, t, r, n, o, i, a, s, l, u])
        };
      var Me = r(17871),
        He = r(50078),
        Be = (r(50430), r(95362));

      function Ve(e) {
        const t = g.forwardRef(((e, t) => {
          const {
            children: r,
            ...n
          } = e;
          if (g.isValidElement(r)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  r = t && "isReactWarning" in t && t.isReactWarning;
                return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
              }(r),
              o = function(e, t) {
                const r = {
                  ...t
                };
                for (const n in t) {
                  const o = e[n],
                    i = t[n];
                  /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (r[n] = o) : "style" === n ? r[n] = {
                    ...o,
                    ...i
                  } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(n, r.props);
            return r.type !== g.Fragment && (o.ref = t ? (0, Be.t)(t, e) : e), g.cloneElement(r, o)
          }
          return g.Children.count(r) > 1 ? g.Children.only(null) : null
        }));
        return t.displayName = `${e}.SlotClone`, t
      }
      var Fe = Symbol("radix.slottable");

      function ze(e) {
        return g.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Fe
      }
      var qe = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, t) => {
          const r = function(e) {
              const t = Ve(e),
                r = g.forwardRef(((e, r) => {
                  const {
                    children: n,
                    ...o
                  } = e, i = g.Children.toArray(n), a = i.find(ze);
                  if (a) {
                    const e = a.props.children,
                      n = i.map((t => t === a ? g.Children.count(e) > 1 ? g.Children.only(null) : g.isValidElement(e) ? e.props.children : null : t));
                    return (0, v.jsx)(t, {
                      ...o,
                      ref: r,
                      children: g.isValidElement(e) ? g.cloneElement(e, void 0, n) : null
                    })
                  }
                  return (0, v.jsx)(t, {
                    ...o,
                    ref: r,
                    children: n
                  })
                }));
              return r.displayName = `${e}.Slot`, r
            }(`Primitive.${t}`),
            n = g.forwardRef(((e, n) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, v.jsx)(a, {
                ...i,
                ref: n
              })
            }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {}),
        Ue = Object.freeze({
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
        Ge = g.forwardRef(((e, t) => (0, v.jsx)(qe.span, {
          ...e,
          ref: t,
          style: {
            ...Ue,
            ...e.style
          }
        })));
      Ge.displayName = "VisuallyHidden";
      var Xe = Ge,
        We = ({
          children: e,
          label: t
        }) => {
          const r = g.Children.only(e);
          return (0, v.jsxs)(v.Fragment, {
            children: [g.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, v.jsx)(Xe, {
              children: t
            })]
          })
        };
      We.displayName = "AccessibleIcon";
      var Ke = We;

      function $e(e) {
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

      function Ye(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ye(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = $e(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ye(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Qe(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Je = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        et = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ze(Ze({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Je(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qe(e.variantClassNames, (e => Qe(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_1d33zd11",
          variantClassNames: {
            size: {
              inlineMD: "foundry_1d33zd12",
              inlineLG: "foundry_1d33zd13",
              inlineXL: "foundry_1d33zd14",
              pageMD: "foundry_1d33zd15",
              pageLG: "foundry_1d33zd16",
              pageXL: "foundry_1d33zd17"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const tt = "pageMD",
        rt = (0, g.forwardRef)((({
          label: e,
          hideTrack: t = !1,
          size: r = tt,
          testId: n,
          ...o
        }, i) => {
          const a = (0, He.zQ)(),
            s = "string" == typeof r ? r : r?.[a] ?? r.default ?? tt,
            l = (0, y.v6)({
              className: et({
                size: s
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, v.jsx)(Ke, {
            label: e,
            children: (0, v.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: i,
              viewBox: "0 0 16 16",
              children: [!t && (0, v.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, v.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        }));
      var nt = r(88401),
        ot = r.t(nt, 2);

      function it(e) {
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

      function at(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function st(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? at(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = it(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : at(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function lt(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ut = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ct = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = st(st({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) ut(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return lt(e.variantClassNames, (e => lt(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        dt = ct({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_17pcofy0",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnuao foundry_1qqcnuap",
              secondary: "foundry_1qqcnuao foundry_1qqcnuaq",
              tertiary: "foundry_1qqcnuao foundry_1qqcnuar",
              ghost: "foundry_1qqcnuao foundry_1qqcnuas",
              danger: "foundry_1qqcnuao foundry_1qqcnuau",
              information: "foundry_1qqcnuao foundry_1qqcnuat",
              accent: "foundry_1qqcnuao foundry_1qqcnuav"
            },
            size: {
              SM: "foundry_17pcofy9 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz foundry_tdsdcd11",
              MD: "foundry_17pcofya foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy foundry_tdsdcd11",
              LG: "foundry_17pcofyb foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx foundry_tdsdcd11"
            },
            fullWidth: {
              true: "foundry_17pcofyc",
              false: "foundry_17pcofyd"
            },
            iconLeft: {
              true: "foundry_17pcofye",
              false: "foundry_17pcofyf"
            },
            iconRight: {
              true: "foundry_17pcofyg",
              false: "foundry_17pcofyh"
            },
            isLoading: {
              true: "foundry_17pcofyi"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              size: "MD",
              iconLeft: !0
            }, "foundry_17pcofyj"],
            [{
              size: "MD",
              iconRight: !0
            }, "foundry_17pcofyk"],
            [{
              size: "LG",
              iconLeft: !0
            }, "foundry_17pcofyl"],
            [{
              size: "LG",
              iconRight: !0
            }, "foundry_17pcofym"],
            [{
              size: "MD",
              appearance: "ghost"
            }, "foundry_17pcofyn"],
            [{
              size: "LG",
              appearance: "ghost"
            }, "foundry_17pcofyo"]
          ]
        });
      ct({
        defaultClassName: "foundry_17pcofyp",
        variantClassNames: {
          isLoading: {
            true: "foundry_17pcofyq"
          },
          fullWidth: {
            true: "foundry_17pcofyr",
            false: "foundry_17pcofys"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      var ft = ct({
        defaultClassName: "foundry_17pcofyu",
        variantClassNames: {
          fullWidth: {
            true: "foundry_17pcofyv",
            false: "foundry_17pcofyw"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const ht = (0, g.forwardRef)((({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: n,
        iconLeftLabel: o,
        iconRight: i,
        iconRightLabel: a,
        appearance: s,
        size: l = "MD",
        fullWidth: u = !1,
        isLoading: c = !1,
        spinnerLabel: d,
        override_darkenLuminance: f = .035,
        override_textLuminance: h = .179,
        override_hoverLuminance: p = .08,
        override_pressedLuminance: m = .15,
        override_backgroundColor: b,
        override_hoverColor: _,
        override_pressedColor: E,
        override_textColor: x,
        ...P
      }, S) => {
        const C = (0, g.useRef)(null),
          O = (0, Me.UP)(C, S),
          T = (0, He.zQ)(),
          N = "string" == typeof l ? l : l?.[T] ?? l.default ?? "MD",
          {
            buttonProps: j
          } = (0, Me.sL)((0, y.v6)(P, {
            isLoading: c
          }), C);
        Le({
          refs: {
            buttonRef: C
          },
          config: {
            textLuminance: h,
            darkenLuminance: f,
            hoverLuminance: p,
            pressedLuminance: m
          },
          overrides: {
            backgroundColor: b,
            hoverColor: _,
            pressedColor: E,
            textColor: x
          },
          enabled: "accent" === s
        });
        const I = (0, y.v6)({
            className: dt({
              appearance: s,
              size: N,
              fullWidth: u,
              iconLeft: !!n,
              iconRight: !!i,
              isLoading: c
            }),
            "data-testid": e
          }, j),
          R = n && ot[n],
          D = i && ot[i],
          k = t ? w.DX : "button",
          A = u && (D || D && R);
        return (0, v.jsxs)(k, {
          ref: O,
          ...I,
          children: [A && (0, v.jsx)("div", {
            className: "foundry_17pcofyx"
          }), R && (0, v.jsx)(R, {
            label: o || "",
            size: N,
            className: "foundry_17pcofyt"
          }), (0, v.jsx)(w.xV, {
            children: r
          }), D && (0, v.jsx)(D, {
            label: a || "",
            size: N,
            className: ft({
              fullWidth: u
            })
          }), c && (0, v.jsx)("div", {
            className: "foundry_17pcofyy",
            children: (0, v.jsx)(rt, {
              label: d || "",
              size: "inline" + ("LG" === N ? "LG" : "MD"),
              hideTrack: !0
            })
          })]
        })
      }));
      var pt = r(4572),
        mt = r(99372);
      const vt = {
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

      function yt(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function gt(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -yt(t - e, r - t, n) + t : e > r ? +yt(e - r, r - t, n) + r : e
      }

      function bt(e, t, r) {
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

      function _t(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function wt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _t(Object(r), !0).forEach((function(t) {
            bt(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _t(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      const Et = {
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

      function xt(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const Pt = ["enter", "leave"];
      const St = ["gotpointercapture", "lostpointercapture"];

      function Ct(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = St.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function Ot(e) {
        return "touches" in e
      }

      function Tt(e) {
        return Ot(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Nt(e) {
        return Ot(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function jt(e, t) {
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

      function It(e, t) {
        const [r, n] = Array.from(e.touches).filter((e => t.includes(e.identifier)));
        return jt(r, n)
      }

      function Rt(e) {
        const t = Nt(e);
        return Ot(e) ? t.identifier : t.pointerId
      }

      function Dt(e) {
        const t = Nt(e);
        return [t.clientX, t.clientY]
      }

      function kt(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function At(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function Lt() {}

      function Mt(...e) {
        return 0 === e.length ? Lt : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function Ht(e, t) {
        return Object.assign({}, t, e || {})
      }
      class Bt {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? At(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            vt.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [i, a] = t._movement, [s, l] = r.threshold, {
            _step: u,
            values: c
          } = t;
          if (r.hasCustomTransform ? (!1 === u[0] && (u[0] = Math.abs(i) >= s && c[0]), !1 === u[1] && (u[1] = Math.abs(a) >= l && c[1])) : (!1 === u[0] && (u[0] = Math.abs(i) >= s && Math.sign(i) * s), !1 === u[1] && (u[1] = Math.abs(a) >= l && Math.sign(a) * l)), t.intentional = !1 !== u[0] || !1 !== u[1], !t.intentional) return;
          const d = [0, 0];
          if (r.hasCustomTransform) {
            const [e, t] = c;
            d[0] = !1 !== u[0] ? e - u[0] : 0, d[1] = !1 !== u[1] ? t - u[1] : 0
          } else d[0] = !1 !== u[0] ? i - u[0] : 0, d[1] = !1 !== u[1] ? a - u[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          const f = t.offset,
            h = t._active && !t._blocked || t.active;
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = At(r.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [p, m] = t.offset, [
            [v, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [p < v ? -1 : p > y ? 1 : 0, m < g ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const _ = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, [t, r], [n, o]) {
              const [
                [i, a],
                [s, l]
              ] = e;
              return [gt(t, i, a, n), gt(r, s, l, o)]
            }(t._bounds, t.offset, _), t.delta = vt.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = vt.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            vt.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(wt(wt(wt({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class Vt extends Bt {
        constructor(...e) {
          super(...e), bt(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = vt.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = vt.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[Tt(e)] : r.axisThreshold;
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
      const Ft = e => e,
        zt = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => wt(wt({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return vt.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? vt.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || Ft
          },
          threshold: e => vt.toVector(e, 0)
        },
        qt = wt(wt({}, zt), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => qt.bounds(e(t));
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
        Ut = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Gt = "undefined" != typeof window && window.document && window.document.createElement;

      function Xt() {
        return Gt && "ontouchstart" in window
      }
      const Wt = {
          isBrowser: Gt,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Xt(),
          touchscreen: Xt() || Gt && window.navigator.maxTouchPoints > 1,
          pointer: Gt && "onpointerdown" in window,
          pointerLock: Gt && "exitPointerLock" in window.document
        },
        Kt = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        $t = wt(wt({}, qt), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && Wt.pointerLock, Wt.touch && r ? "touch" : this.pointerLock ? "mouse" : Wt.pointer && !o ? "pointer" : Wt.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Wt.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const i = vt.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(vt.toVector(e)),
              distance: this.transform(vt.toVector(t)),
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
          axisThreshold: e => e ? wt(wt({}, Kt), e) : Kt,
          keyboardDisplacement: (e = 10) => e
        });

      function Yt(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [i, a] = e._direction;
        (t < 0 && n > 0 && i < 0 || t > 0 && n < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && a < 0 || r > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Zt = wt(wt({}, zt), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !Wt.touch && Wt.gesture) return "gesture";
            if (Wt.touch && n) return "touch";
            if (Wt.touchscreen) {
              if (Wt.pointer) return "pointer";
              if (Wt.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = Ht(At(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = Ht(At(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, vt.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Qt = wt(wt({}, qt), {}, {
          mouseOnly: (e = !0) => e
        }),
        Jt = qt,
        er = qt,
        tr = wt(wt({}, qt), {}, {
          mouseOnly: (e = !0) => e
        }),
        rr = new Map,
        nr = new Map;

      function or(e) {
        rr.set(e.key, e.engine), nr.set(e.key, e.resolver)
      }
      const ir = {
          key: "drag",
          engine: class extends Vt {
            constructor(...e) {
              super(...e), bt(this, "ingKey", "dragging")
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
                e._bounds = qt.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = Rt(e), r._pointerActive = !0, this.computeValues(Dt(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Tt(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = Rt(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = Dt(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = vt.sub(o, t._values), this.computeValues(o)), vt.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = Rt(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = t._distance;
              if (t.tap = o <= r.tapsThreshold && i <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
              else {
                const [e, n] = t._delta, [o, i] = t._movement, [a, s] = r.swipe.velocity, [l, u] = r.swipe.distance, c = r.swipe.duration;
                if (t.elapsedTime < c) {
                  const r = Math.abs(e / t.timeDelta),
                    c = Math.abs(n / t.timeDelta);
                  r > a && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), c > s && Math.abs(i) > u && (t.swipe[1] = Math.sign(n))
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
              const t = Ut[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, vt.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in Ut && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: $t
        },
        ar = {
          key: "hover",
          engine: class extends Vt {
            constructor(...e) {
              super(...e), bt(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Dt(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = Dt(e);
              t._movement = t._delta = vt.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: tr
        },
        sr = {
          key: "move",
          engine: class extends Vt {
            constructor(...e) {
              super(...e), bt(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Dt(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = Dt(e),
                r = this.state;
              r._delta = vt.sub(t, r._values), vt.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Qt
        },
        lr = {
          key: "pinch",
          engine: class extends Bt {
            constructor(...e) {
              super(...e), bt(this, "ingKey", "pinching"), bt(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? vt.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = It(e, t._touchIds);
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
              const o = jt(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = It(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = jt(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = vt.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-kt(e)[1] / 100 * t.offset[0], 0], vt.addTo(t._movement, t._delta), Yt(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Zt
        },
        ur = {
          key: "scroll",
          engine: class extends Vt {
            constructor(...e) {
              super(...e), bt(this, "ingKey", "scrolling")
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
              t._delta = vt.sub(r, t._values), vt.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: Jt
        },
        cr = {
          key: "wheel",
          engine: class extends Vt {
            constructor(...e) {
              super(...e), bt(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = kt(e), vt.addTo(t._movement, t._delta), Yt(t), this.compute(e), this.emit()
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
          enabled: (e = !0) => e,
          window: (e = (Wt.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        fr = ["target", "eventOptions", "window", "enabled", "transform"];

      function hr(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = hr(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class pr {
        constructor(e, t) {
          bt(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const i = this._listeners,
            a = function(e, t = "") {
              const r = Et[e];
              return e + (r && r[t] || t)
            }(t, r),
            s = wt(wt({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class mr {
        constructor() {
          bt(this, "_timeouts", new Map)
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
      class vr {
        constructor(e) {
          var t, r;
          bt(this, "gestures", new Set), bt(this, "_targetEventStore", new pr(this)), bt(this, "gestureEventStores", {}), bt(this, "gestureTimeoutStores", {}), bt(this, "handlers", {}), bt(this, "config", {}), bt(this, "pointerIds", new Set), bt(this, "touchIds", new Set), bt(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && yr(t, "drag"), r.wheel && yr(t, "wheel"), r.scroll && yr(t, "scroll"), r.move && yr(t, "move"), r.pinch && yr(t, "pinch"), r.hover && yr(t, "hover")
        }
        setEventIds(e) {
          return Ot(e) ? (this.touchIds = new Set(function(e) {
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
              u = function(e, t) {
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
              }(n, fr);
            if (r.shared = hr({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              }, dr), t) {
              const e = nr.get(t);
              r[t] = hr(wt({
                shared: r.shared
              }, u), e)
            } else
              for (const e in u) {
                const t = nr.get(e);
                t && (r[e] = hr(wt({
                  shared: r.shared
                }, u[e]), t))
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
                  i = gr(r, o.eventOptions, !!n);
                o.enabled && new(rr.get(t))(this, e, t).bind(i)
              }
              const o = gr(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", (r => this.nativeHandlers[t](wt(wt({}, this.state.shared), {}, {
                event: r,
                args: e
              }))), void 0, !0)
            }
            for (const e in r) r[e] = Mt(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: i
              } = Ct(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function yr(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new pr(e, t), e.gestureTimeoutStores[t] = new mr
      }
      const gr = (e, t, r) => (n, o, i, a = {}, s = !1) => {
          var l, u;
          const c = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            d = null !== (u = a.passive) && void 0 !== u ? u : t.passive;
          let f = s ? n : function(e, t = "", r = !1) {
            const n = Et[e],
              o = n && n[t] || t;
            return "on" + xt(e) + xt(o) + (function(e = !1, t) {
              return e && !Pt.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, c);
          r && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        br = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function _r(e, t, r, n, o, i) {
        if (!e.has(r)) return;
        if (!rr.has(n)) return;
        const a = r + "Start",
          s = r + "End";
        o[n] = e => {
          let n;
          return e.first && a in t && t[a](e), r in t && (n = t[r](e)), e.last && s in t && t[s](e), n
        }, i[n] = i[n] || {}
      }

      function wr(e, t) {
        const r = ([ir, lr, ur, cr, sr, ar].forEach(or), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) br.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), i = {};
            return _r(o, r, "onDrag", "drag", i, t), _r(o, r, "onWheel", "wheel", i, t), _r(o, r, "onScroll", "scroll", i, t), _r(o, r, "onPinch", "pinch", i, t), _r(o, r, "onMove", "move", i, t), _r(o, r, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return function(e, t = {}, r, n) {
            const o = _().useMemo((() => new vr(e)), []);
            if (o.applyHandlers(e, n), o.applyConfig(t, r), _().useEffect(o.effect.bind(o)), _().useEffect((() => o.clean.bind(o)), []), void 0 === t.target) return o.bind.bind(o)
          }(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      var Er = Hr(),
        xr = e => kr(e, Er),
        Pr = Hr();
      xr.write = e => kr(e, Pr);
      var Sr = Hr();
      xr.onStart = e => kr(e, Sr);
      var Cr = Hr();
      xr.onFrame = e => kr(e, Cr);
      var Or = Hr();
      xr.onFinish = e => kr(e, Or);
      var Tr = [];
      xr.setTimeout = (e, t) => {
        const r = xr.now() + t,
          n = () => {
            const e = Tr.findIndex((e => e.cancel == n));
            ~e && Tr.splice(e, 1), Rr -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return Tr.splice(Nr(r), 0, o), Rr += 1, Ar(), o
      };
      var Nr = e => ~(~Tr.findIndex((t => t.time > e)) || ~Tr.length);
      xr.cancel = e => {
        Sr.delete(e), Cr.delete(e), Or.delete(e), Er.delete(e), Pr.delete(e)
      }, xr.sync = e => {
        Dr = !0, xr.batchedUpdates(e), Dr = !1
      }, xr.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, xr.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Sr.delete(r), t = null
        }, n
      };
      var jr = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      xr.use = e => jr = e, xr.now = "undefined" != typeof performance ? () => performance.now() : Date.now, xr.batchedUpdates = e => e(), xr.catch = console.error, xr.frameLoop = "always", xr.advance = () => {
        "demand" !== xr.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Mr()
      };
      var Ir = -1,
        Rr = 0,
        Dr = !1;

      function kr(e, t) {
        Dr ? (t.delete(e), e(0)) : (t.add(e), Ar())
      }

      function Ar() {
        Ir < 0 && (Ir = 0, "demand" !== xr.frameLoop && jr(Lr))
      }

      function Lr() {
        ~Ir && (jr(Lr), xr.batchedUpdates(Mr))
      }

      function Mr() {
        const e = Ir;
        Ir = xr.now();
        const t = Nr(Ir);
        t && (Br(Tr.splice(0, t), (e => e.handler())), Rr -= t), Rr ? (Sr.flush(), Er.flush(e ? Math.min(64, Ir - e) : 16.667), Cr.flush(), Pr.flush(), Or.flush()) : Ir = -1
      }

      function Hr() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Rr += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Rr -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Rr -= t.size, Br(t, (t => t(r) && e.add(t))), Rr += e.size, t = e)
          }
        }
      }

      function Br(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            xr.catch(e)
          }
        }))
      }
      var Vr = Object.defineProperty,
        Fr = {};

      function zr() {}((e, t) => {
        for (var r in t) Vr(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(Fr, {
        assign: () => rn,
        colors: () => Jr,
        createStringInterpolator: () => $r,
        skipAnimation: () => en,
        to: () => Yr,
        willAdvance: () => tn
      });
      var qr = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Ur(e, t) {
        if (qr.arr(e)) {
          if (!qr.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var Gr = (e, t) => e.forEach(t);

      function Xr(e, t, r) {
        if (qr.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var Wr = e => qr.und(e) ? [] : qr.arr(e) ? e : [e];

      function Kr(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), Gr(r, t)
        }
      }
      var $r, Yr, Zr = (e, ...t) => Kr(e, (e => e(...t))),
        Qr = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Jr = null,
        en = !1,
        tn = zr,
        rn = e => {
          e.to && (Yr = e.to), e.now && (xr.now = e.now), void 0 !== e.colors && (Jr = e.colors), null != e.skipAnimation && (en = e.skipAnimation), e.createStringInterpolator && ($r = e.createStringInterpolator), e.requestAnimationFrame && xr.use(e.requestAnimationFrame), e.batchedUpdates && (xr.batchedUpdates = e.batchedUpdates), e.willAdvance && (tn = e.willAdvance), e.frameLoop && (xr.frameLoop = e.frameLoop)
        },
        nn = new Set,
        on = [],
        an = [],
        sn = 0,
        ln = {
          get idle() {
            return !nn.size && !on.length
          },
          start(e) {
            sn > e.priority ? (nn.add(e), xr.onStart(un)) : (cn(e), xr(fn))
          },
          advance: fn,
          sort(e) {
            if (sn) xr.onFrame((() => ln.sort(e)));
            else {
              const t = on.indexOf(e);
              ~t && (on.splice(t, 1), dn(e))
            }
          },
          clear() {
            on = [], nn.clear()
          }
        };

      function un() {
        nn.forEach(cn), nn.clear(), xr(fn)
      }

      function cn(e) {
        on.includes(e) || dn(e)
      }

      function dn(e) {
        on.splice(function(t) {
          const r = t.findIndex((t => t.priority > e.priority));
          return r < 0 ? t.length : r
        }(on), 0, e)
      }

      function fn(e) {
        const t = an;
        for (let r = 0; r < on.length; r++) {
          const n = on[r];
          sn = n.priority, n.idle || (tn(n), n.advance(e), n.idle || t.push(n))
        }
        return sn = 0, (an = on).length = 0, (on = t).length > 0
      }
      var hn = "[-+]?\\d*\\.?\\d+",
        pn = hn + "%";

      function mn(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var vn = new RegExp("rgb" + mn(hn, hn, hn)),
        yn = new RegExp("rgba" + mn(hn, hn, hn, hn)),
        gn = new RegExp("hsl" + mn(hn, pn, pn)),
        bn = new RegExp("hsla" + mn(hn, pn, pn, hn)),
        _n = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        wn = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        En = /^#([0-9a-fA-F]{6})$/,
        xn = /^#([0-9a-fA-F]{8})$/;

      function Pn(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Sn(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = Pn(o, n, e + 1 / 3),
          a = Pn(o, n, e),
          s = Pn(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function Cn(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function On(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Tn(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Nn(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function jn(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = En.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Jr && void 0 !== Jr[e] ? Jr[e] : (t = vn.exec(e)) ? (Cn(t[1]) << 24 | Cn(t[2]) << 16 | Cn(t[3]) << 8 | 255) >>> 0 : (t = yn.exec(e)) ? (Cn(t[1]) << 24 | Cn(t[2]) << 16 | Cn(t[3]) << 8 | Tn(t[4])) >>> 0 : (t = _n.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = xn.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = wn.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = gn.exec(e)) ? (255 | Sn(On(t[1]), Nn(t[2]), Nn(t[3]))) >>> 0 : (t = bn.exec(e)) ? (Sn(On(t[1]), Nn(t[2]), Nn(t[3])) | Tn(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var In = (e, t, r) => {
          if (qr.fun(e)) return e;
          if (qr.arr(e)) return In({
            range: e,
            output: t,
            extrapolate: r
          });
          if (qr.str(e.output[0])) return $r(e);
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
              let u = l ? l(e) : e;
              if (u < t) {
                if ("identity" === a) return u;
                "clamp" === a && (u = t)
              }
              if (u > r) {
                if ("identity" === s) return u;
                "clamp" === s && (u = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? u = -u : r === 1 / 0 ? u -= t : u = (u - t) / (r - t), u = i(u), n === -1 / 0 ? u = -u : o === 1 / 0 ? u += n : u = u * (o - n) + n, u)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, a, s, n.map)
          }
        },
        Rn = 1.70158,
        Dn = 1.525 * Rn,
        kn = Rn + 1,
        An = 2 * Math.PI / 3,
        Ln = 2 * Math.PI / 4.5,
        Mn = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        Hn = {
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
          easeInBack: e => kn * e * e * e - Rn * e * e,
          easeOutBack: e => 1 + kn * Math.pow(e - 1, 3) + Rn * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Dn) / 2 : (Math.pow(2 * e - 2, 2) * ((Dn + 1) * (2 * e - 2) + Dn) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * An),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * An) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ln) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ln) / 2 + 1,
          easeInBounce: e => 1 - Mn(1 - e),
          easeOutBounce: Mn,
          easeInOutBounce: e => e < .5 ? (1 - Mn(1 - 2 * e)) / 2 : (1 + Mn(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        Bn = Symbol.for("FluidValue.get"),
        Vn = Symbol.for("FluidValue.observers"),
        Fn = e => Boolean(e && e[Bn]),
        zn = e => e && e[Bn] ? e[Bn]() : e,
        qn = e => e[Vn] || null;

      function Un(e, t) {
        const r = e[Vn];
        r && r.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var Gn = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Xn(this, e)
          }
        },
        Xn = (e, t) => Yn(e, Bn, t);

      function Wn(e, t) {
        if (e[Bn]) {
          let r = e[Vn];
          r || Yn(e, Vn, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function Kn(e, t) {
        const r = e[Vn];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[Vn] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var $n, Yn = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        Zn = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Qn = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Jn = new RegExp(`(${Zn.source})(%|[a-z]+)`, "i"),
        eo = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        to = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        ro = e => {
          const [t, r] = no(e);
          if (!t || Qr()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && to.test(r) ? ro(r) : r || e
        },
        no = e => {
          const t = to.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        oo = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        io = e => {
          $n || ($n = Jr ? new RegExp(`(${Object.keys(Jr).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => zn(e).replace(to, ro).replace(Qn, jn).replace($n, jn))),
            r = t.map((e => e.match(Zn).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))),
            o = n.map((t => In({
              ...e,
              output: t
            })));
          return e => {
            const r = !Jn.test(t[0]) && t.find((e => Jn.test(e)))?.replace(Zn, "");
            let n = 0;
            return t[0].replace(Zn, (() => `${o[n++](e)}${r||""}`)).replace(eo, oo)
          }
        },
        ao = "react-spring: ",
        so = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${ao}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        lo = so(console.warn),
        uo = so(console.warn);

      function co(e) {
        return qr.str(e) && ("#" == e[0] || /\d/.test(e) || !Qr() && to.test(e) || e in (Jr || {}))
      }
      var fo = Qr() ? g.useEffect : g.useLayoutEffect;

      function ho() {
        const e = (0, g.useState)()[1],
          t = (() => {
            const e = (0, g.useRef)(!1);
            return fo((() => (e.current = !0, () => {
              e.current = !1
            })), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var po = e => (0, g.useEffect)(e, mo),
        mo = [];

      function vo(e) {
        const t = (0, g.useRef)();
        return (0, g.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var yo = Symbol.for("Animated:node"),
        go = e => e && e[yo],
        bo = (e, t) => {
          return r = e, n = yo, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        _o = e => e && e[yo] && e[yo].getPayload(),
        wo = class {
          constructor() {
            bo(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Eo = class extends wo {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, qr.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new Eo(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return qr.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, qr.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        xo = class extends Eo {
          constructor(e) {
            super(0), this._string = null, this._toString = In({
              output: [e, e]
            })
          }
          static create(e) {
            return new xo(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (qr.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = In({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Po = {
          dependencies: null
        },
        So = class extends wo {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Xr(this.source, ((r, n) => {
              var o;
              (o = r) && o[yo] === o ? t[n] = r.getValue(e) : Fn(r) ? t[n] = zn(r) : e || (t[n] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Gr(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Xr(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Po.dependencies && Fn(e) && Po.dependencies.add(e);
            const t = _o(e);
            t && Gr(t, (e => this.add(e)))
          }
        },
        Co = class extends So {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new Co(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, r) => t.setValue(e[r]))).some(Boolean) : (super.setValue(e.map(Oo)), !0)
          }
        };

      function Oo(e) {
        return (co(e) ? xo : Eo).create(e)
      }

      function To(e) {
        const t = go(e);
        return t ? t.constructor : qr.arr(e) ? Co : co(e) ? xo : Eo
      }
      var No = (e, t) => {
          const r = !qr.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, g.forwardRef)(((n, o) => {
            const i = (0, g.useRef)(null),
              a = r && (0, g.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (qr.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [s, l] = function(e, t) {
                const r = new Set;
                return Po.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new So(e), Po.dependencies = null, [e, r]
              }(n, t),
              u = ho(),
              c = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && u()
              },
              d = new jo(c, l),
              f = (0, g.useRef)();
            fo((() => (f.current = d, Gr(l, (e => Wn(e, d))), () => {
              f.current && (Gr(f.current.deps, (e => Kn(e, f.current))), xr.cancel(f.current.update))
            }))), (0, g.useEffect)(c, []), po((() => () => {
              const e = f.current;
              Gr(e.deps, (t => Kn(t, e)))
            }));
            const h = t.getComponentProps(s.getValue());
            return g.createElement(e, {
              ...h,
              ref: a
            })
          }))
        },
        jo = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && xr.write(this.update)
          }
        },
        Io = Symbol.for("AnimatedComponent"),
        Ro = e => qr.str(e) ? e : e && qr.str(e.displayName) ? e.displayName : qr.fun(e) && e.name || null;

      function Do(e, ...t) {
        return qr.fun(e) ? e(...t) : e
      }
      var ko = (e, t) => !0 === e || !!(t && e && (qr.fun(e) ? e(t) : Wr(e).includes(t))),
        Ao = (e, t) => qr.obj(e) ? t && e[t] : e,
        Lo = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Mo = e => e,
        Ho = (e, t = Mo) => {
          let r = Bo;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            qr.und(r) || (n[o] = r)
          }
          return n
        },
        Bo = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Vo = {
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

      function Fo(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (Xr(e, ((e, n) => {
              Vo[n] || (t[n] = e, r++)
            })), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return Xr(e, ((e, n) => n in t || (r[n] = e))), r
        }
        return {
          ...e
        }
      }

      function zo(e) {
        return e = zn(e), qr.arr(e) ? e.map(zo) : co(e) ? Fr.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function qo(e) {
        for (const t in e) return !0;
        return !1
      }

      function Uo(e) {
        return qr.fun(e) || qr.arr(e) && qr.obj(e[0])
      }

      function Go(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function Xo(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }
      var Wo = {
          tension: 170,
          friction: 26
        },
        Ko = {
          ...Wo,
          mass: 1,
          damping: 1,
          easing: Hn.linear,
          clamp: !1
        },
        $o = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Ko)
          }
        };

      function Yo(e, t) {
        if (qr.und(t.decay)) {
          const r = !qr.und(t.tension) || !qr.und(t.friction);
          !r && qr.und(t.frequency) && qr.und(t.damping) && qr.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Zo = [],
        Qo = class {
          constructor() {
            this.changed = !1, this.values = Zo, this.toValues = null, this.fromValues = Zo, this.config = new $o, this.immediate = !1
          }
        };

      function Jo(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, u, c = ko(r.cancel ?? n?.cancel, t);
          if (c) h();
          else {
            qr.und(r.pause) || (o.paused = ko(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || ko(e, t)), l = Do(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(u), u.cancel(), l = u.time - xr.now()
          }

          function f() {
            l > 0 && !Fr.skipAnimation ? (o.delayed = !0, u = xr.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(u)) : h()
          }

          function h() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(u), e <= (o.cancelId || 0) && (c = !0);
            try {
              i.start({
                ...r,
                callId: e,
                cancel: c
              }, a)
            } catch (e) {
              s(e)
            }
          }
        }))
      }
      var ei = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? ni(e.get()) : t.every((e => e.noop)) ? ti(e.get()) : ri(e.get(), t.every((e => e.finished))),
        ti = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        ri = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        ni = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function oi(e, t, r, n) {
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
          const u = Ho(t, ((e, t) => "onRest" === t ? void 0 : e));
          let c, d;
          const f = new Promise(((e, t) => (c = e, d = t))),
            h = e => {
              const t = o <= (r.cancelId || 0) && ni(n) || o !== r.asyncId && ri(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new ai,
                a = new si;
              return (async () => {
                if (Fr.skipAnimation) throw ii(r), a.result = ri(n, !1), d(a), a;
                h(i);
                const s = qr.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Xr(u, ((e, t) => {
                  qr.und(s[t]) && (s[t] = e)
                }));
                const l = await n.start(s);
                return h(i), r.paused && await new Promise((e => {
                  r.resumeQueue.add(e)
                })), l
              })()
            };
          let m;
          if (Fr.skipAnimation) return ii(r), ri(n, !1);
          try {
            let t;
            t = qr.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(c), f]), m = ri(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof ai) m = e.result;
            else {
              if (!(e instanceof si)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? s : void 0, r.promise = i ? l : void 0)
          }
          return qr.fun(a) && xr.batchedUpdates((() => {
            a(m, n, n.item)
          })), m
        })() : l
      }

      function ii(e, t) {
        Kr(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var ai = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        si = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        li = e => e instanceof ci,
        ui = 1,
        ci = class extends Gn {
          constructor() {
            super(...arguments), this.id = ui++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = go(this);
            return e && e.getValue()
          }
          to(...e) {
            return Fr.to(this, e)
          }
          interpolate(...e) {
            return lo(`${ao}The "interpolate" function is deprecated in v9 (use "to" instead)`), Fr.to(this, e)
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
            Un(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || ln.sort(this), Un(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        di = Symbol.for("SpringPhase"),
        fi = e => (1 & e[di]) > 0,
        hi = e => (2 & e[di]) > 0,
        pi = e => (4 & e[di]) > 0,
        mi = (e, t) => t ? e[di] |= 3 : e[di] &= -3,
        vi = (e, t) => t ? e[di] |= 4 : e[di] &= -5,
        yi = class extends ci {
          constructor(e, t) {
            if (super(), this.animation = new Qo, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !qr.und(e) || !qr.und(t)) {
              const r = qr.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              qr.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(hi(this) || this._state.asyncTo) || pi(this)
          }
          get goal() {
            return zn(this.animation.to)
          }
          get velocity() {
            const e = go(this);
            return e instanceof Eo ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return fi(this)
          }
          get isAnimating() {
            return hi(this)
          }
          get isPaused() {
            return pi(this)
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
            } = n, a = _o(n.to);
            !a && Fn(n.to) && (o = Wr(zn(n.to))), n.values.forEach(((s, l) => {
              if (s.done) return;
              const u = s.constructor == xo ? 1 : a ? a[l].lastPosition : o[l];
              let c = n.immediate,
                d = u;
              if (!c) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = qr.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const f = i.precision || (r == u ? .005 : Math.min(1, .001 * Math.abs(u - r)));
                if (qr.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), c = Math.abs(s.lastPosition - d) <= f, a = o * n
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !qr.und(n),
                      h = r == u ? s.v0 > 0 : r < u;
                    let p, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (p = Math.abs(a) > t, p || (c = Math.abs(u - d) <= f, !c)); ++e) l && (m = d == u || d > u == h, m && (a = -a * n, d = u)), a += (1e-6 * -i.tension * (d - u) + .001 * -i.friction * a) / i.mass * v, d += a * v
                  }
                else {
                  let n = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, s.durationProgress > 0 && (s.elapsedTime = i.duration * s.durationProgress, t = s.elapsedTime += e)), n = (i.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, s.durationProgress = n), d = r + i.easing(n) * (u - r), a = (d - s.lastPosition) / e, c = 1 == n
                }
                s.lastVelocity = a, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), c = !0)
              }
              a && !a[l].done && (c = !1), c ? s.done = !0 : t = !1, s.setValue(d, i.round) && (r = !0)
            }));
            const s = go(this),
              l = s.getValue();
            if (t) {
              const e = zn(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return xr.batchedUpdates((() => {
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
            if (hi(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              xr.batchedUpdates((() => {
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
            return qr.und(e) ? (r = this.queue || [], this.queue = []) : r = [qr.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map((e => this._update(e)))).then((e => ei(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), ii(this._state, e && this._lastCallId), xr.batchedUpdates((() => this._stop(t, e))), this
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
            r = qr.obj(r) ? r[t] : r, (null == r || Uo(r)) && (r = void 0), n = qr.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return fi(this) || (e.reverse && ([r, n] = [n, r]), n = zn(n), qr.und(n) ? go(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, Ho(e, ((e, t) => /^on/.test(t) ? Ao(e, r) : e))), Pi(this, e, "onProps"), Si(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Jo(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  pi(this) || (vi(this, !0), Zr(i.pauseQueue), Si(this, "onPause", ri(this, gi(this, this.animation.to)), this))
                },
                resume: () => {
                  pi(this) && (vi(this, !1), hi(this) && this._resume(), Zr(i.resumeQueue), Si(this, "onResume", ri(this, gi(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = bi(e);
                if (t) return this._update(t, !0)
              }
              return r
            }))
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(ni(this));
            const n = !qr.und(e.to),
              o = !qr.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(ni(this));
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
            !o || n || t.default && !qr.und(c) || (c = d), t.reverse && ([c, d] = [d, c]);
            const f = !Ur(d, u);
            f && (s.from = d), d = zn(d);
            const h = !Ur(c, l);
            h && this._focus(c);
            const p = Uo(t.to),
              {
                config: m
              } = s,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (Yo(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), Yo(e, t), Object.assign(e, t);
              for (const t in Ko) null == e[t] && (e[t] = Ko[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              qr.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, Do(t.config, i), t.config !== a.config ? Do(a.config, i) : void 0);
            let g = go(this);
            if (!g || qr.und(c)) return r(ri(this, !0));
            const b = qr.und(t.reset) ? o && !t.default : !qr.und(d) && ko(t.reset, i),
              _ = b ? d : this.get(),
              w = zo(c),
              E = qr.num(w) || qr.arr(w) || co(w),
              x = !p && (!E || ko(a.immediate || t.immediate, i));
            if (h) {
              const e = To(c);
              if (e !== g.constructor) {
                if (!x) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const P = g.constructor;
            let S = Fn(c),
              C = !1;
            if (!S) {
              const e = b || !fi(this) && f;
              (h || e) && (C = Ur(zo(_), w), S = !C), (Ur(s.immediate, x) || x) && Ur(m.decay, v) && Ur(m.velocity, y) || (S = !0)
            }
            if (C && hi(this) && (s.changed && !b ? S = !0 : S || this._stop(l)), !p && ((S || Fn(l)) && (s.values = g.getPayload(), s.toValues = Fn(c) ? null : P == xo ? [1] : Wr(w)), s.immediate != x && (s.immediate = x, x || b || this._set(l)), S)) {
              const {
                onRest: e
              } = s;
              Gr(xi, (e => Pi(this, t, e)));
              const n = ri(this, gi(this, l));
              Zr(this._pendingCalls, n), this._pendingCalls.add(r), s.changed && xr.batchedUpdates((() => {
                s.changed = !b, e?.(n, this), b ? Do(a.onRest, n) : s.onStart?.(n, this)
              }))
            }
            b && this._set(_), p ? r(oi(t.to, t, this._state, this)) : S ? this._start() : hi(this) && !h ? this._pendingCalls.add(r) : r(ti(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (qn(this) && this._detach(), t.to = e, qn(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Fn(t) && (Wn(t, this), li(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Fn(e) && Kn(e, this)
          }
          _set(e, t = !0) {
            const r = zn(e);
            if (!qr.und(r)) {
              const e = go(this);
              if (!e || !Ur(r, e.getValue())) {
                const n = To(r);
                e && e.constructor == n ? e.setValue(r) : bo(this, n.create(r)), e && xr.batchedUpdates((() => {
                  this._onChange(r, t)
                }))
              }
            }
            return go(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Si(this, "onStart", ri(this, gi(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Do(this.animation.onChange, e, this)), Do(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            go(this).reset(zn(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), hi(this) || (mi(this, !0), pi(this) || this._resume())
          }
          _resume() {
            Fr.skipAnimation ? this.finish() : ln.start(this)
          }
          _stop(e, t) {
            if (hi(this)) {
              mi(this, !1);
              const r = this.animation;
              Gr(r.values, (e => {
                e.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Un(this, {
                type: "idle",
                parent: this
              });
              const n = t ? ni(this.get()) : ri(this.get(), gi(this, e ?? r.to));
              Zr(this._pendingCalls, n), r.changed && (r.changed = !1, Si(this, "onRest", n, this))
            }
          }
        };

      function gi(e, t) {
        const r = zo(t);
        return Ur(zo(e.get()), r)
      }

      function bi(e, t = e.loop, r = e.to) {
        const n = Do(t);
        if (n) {
          const o = !0 !== n && Fo(n),
            i = (o || e).reverse,
            a = !o || o.reset;
          return _i({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Uo(r) ? r : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function _i(e) {
        const {
          to: t,
          from: r
        } = e = Fo(e), n = new Set;
        return qr.obj(t) && Ei(t, n), qr.obj(r) && Ei(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function wi(e) {
        const t = _i(e);
        return qr.und(t.default) && (t.default = Ho(t)), t
      }

      function Ei(e, t) {
        Xr(e, ((e, r) => null != e && t.add(r)))
      }
      var xi = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Pi(e, t, r) {
        e.animation[r] = t[r] !== Lo(t, r) ? Ao(t[r], e.key) : void 0
      }

      function Si(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var Ci = ["onStart", "onChange", "onRest"],
        Oi = 1,
        Ti = class {
          constructor(e, t) {
            this.id = Oi++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              qr.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(_i(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Wr(e).map(_i) : this.queue = [], this._flush ? this._flush(this, t) : (Ai(this, t), Ni(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              Gr(Wr(t), (t => r[t].stop(!!e)))
            } else ii(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (qr.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Gr(Wr(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (qr.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Gr(Wr(e), (e => t[e].resume()))
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
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, Kr(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !n && this._started,
              a = o || i && r.size ? this.get() : null;
            o && t.size && Kr(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, Kr(r, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            xr.onFrame(this._onFrame)
          }
        };

      function Ni(e, t) {
        return Promise.all(t.map((t => ji(e, t)))).then((t => ei(e, t)))
      }
      async function ji(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, u = qr.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const c = qr.arr(o) || qr.fun(o) ? o : void 0;
        c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : Gr(Ci, (r => {
          const n = t[r];
          if (qr.fun(n)) {
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
            }, u && (u[r] = t[r])
          }
        }));
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, Zr(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map((r => e.springs[r].start(t))),
          h = !0 === t.cancel || !0 === Lo(t, "cancel");
        (c || h && d.asyncId) && f.push(Jo(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: zr,
            resume: zr,
            start(t, r) {
              h ? (ii(d, e._lastAsyncId), r(ni(e))) : (t.onRest = s, r(oi(c, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = ei(e, await Promise.all(f));
        if (a && p.finished && (!r || !p.noop)) {
          const r = bi(t, a, o);
          if (r) return Ai(e, [r]), ji(e, r, !0)
        }
        return l && xr.batchedUpdates((() => l(p, e, e.item))), p
      }

      function Ii(e, t) {
        const r = {
          ...e.springs
        };
        return t && Gr(Wr(t), (e => {
          qr.und(e.keys) && (e = _i(e)), qr.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), ki(r, e, (e => Di(e)))
        })), Ri(e, r), r
      }

      function Ri(e, t) {
        Xr(t, ((t, r) => {
          e.springs[r] || (e.springs[r] = t, Wn(t, e))
        }))
      }

      function Di(e, t) {
        const r = new yi;
        return r.key = e, t && Wn(r, t), r
      }

      function ki(e, t, r) {
        t.keys && Gr(t.keys, (n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        }))
      }

      function Ai(e, t) {
        Gr(t, (t => {
          ki(e.springs, t, (t => Di(t, e)))
        }))
      }
      var Li, Mi, Hi = ({
          children: e,
          ...t
        }) => {
          const r = (0, g.useContext)(Bi),
            n = t.pause || !!r.pause,
            o = t.immediate || !!r.immediate;
          t = function(e, t) {
            const [r] = (0, g.useState)((() => ({
              inputs: t,
              result: e()
            }))), n = (0, g.useRef)(), o = n.current;
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
            return (0, g.useEffect)((() => {
              n.current = i, o == r && (r.inputs = r.result = void 0)
            }), [i]), i.result
          }((() => ({
            pause: n,
            immediate: o
          })), [n, o]);
          const {
            Provider: i
          } = Bi;
          return g.createElement(i, {
            value: t
          }, e)
        },
        Bi = (Li = Hi, Mi = {}, Object.assign(Li, g.createContext(Mi)), Li.Provider._context = Li, Li.Consumer._context = Li, Li);
      Hi.Provider = Bi.Provider, Hi.Consumer = Bi.Consumer;
      var Vi = () => {
        const e = [],
          t = function(t) {
            uo(`${ao}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const n = [];
            return Gr(e, ((e, o) => {
              if (qr.und(t)) n.push(e.start());
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
          return Gr(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return Gr(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          Gr(e, ((e, r) => {
            const n = qr.fun(t) ? t(r, e) : t;
            n && e.set(n)
          }))
        }, t.start = function(t) {
          const r = [];
          return Gr(e, ((e, n) => {
            if (qr.und(t)) r.push(e.start());
            else {
              const o = this._getProps(t, e, n);
              o && r.push(e.start(o))
            }
          })), r
        }, t.stop = function() {
          return Gr(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return Gr(e, ((e, r) => e.update(this._getProps(t, e, r)))), this
        };
        const r = function(e, t, r) {
          return qr.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function Fi(e, t) {
        const r = qr.fun(e),
          [
            [n], o
          ] = function(e, t, r) {
            const n = qr.fun(t) && t;
            n && !r && (r = []);
            const o = (0, g.useMemo)((() => n || 3 == arguments.length ? Vi() : void 0), []),
              i = (0, g.useRef)(0),
              a = ho(),
              s = (0, g.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const r = Ii(e, t);
                  return i.current > 0 && !s.queue.length && !Object.keys(r).some((t => !e.springs[t])) ? Ni(e, t) : new Promise((n => {
                    Ri(e, r), s.queue.push((() => {
                      n(Ni(e, t))
                    })), a()
                  }))
                }
              })), []),
              l = (0, g.useRef)([...s.ctrls]),
              u = [],
              c = vo(e) || 0;

            function d(e, r) {
              for (let o = e; o < r; o++) {
                const e = l.current[o] || (l.current[o] = new Ti(null, s.flush)),
                  r = n ? n(o, e) : t[o];
                r && (u[o] = wi(r))
              }
            }(0, g.useMemo)((() => {
              Gr(l.current.slice(e, c), (e => {
                Go(e, o), e.stop(!0)
              })), l.current.length = e, d(c, e)
            }), [e]), (0, g.useMemo)((() => {
              d(0, Math.min(c, e))
            }), r);
            const f = l.current.map(((e, t) => Ii(e, u[t]))),
              h = (0, g.useContext)(Hi),
              p = vo(h),
              m = h !== p && qo(h);
            fo((() => {
              i.current++, s.ctrls = l.current;
              const {
                queue: e
              } = s;
              e.length && (s.queue = [], Gr(e, (e => e()))), Gr(l.current, ((e, t) => {
                o?.add(e), m && e.start({
                  default: h
                });
                const r = u[t];
                r && (Xo(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
              }))
            })), po((() => () => {
              Gr(s.ctrls, (e => e.stop(!0)))
            }));
            const v = f.map((e => ({
              ...e
            })));
            return o ? [v, o] : v
          }(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, o] : n
      }
      var zi = () => Vi(),
        qi = () => (0, g.useState)(zi)[0];
      var Ui = 1,
        Gi = class extends ci {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = In(...t);
            const r = this._get(),
              n = To(r);
            bo(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            Ur(t, this.get()) || (go(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Wi(this._active) && Ki(this)
          }
          _get() {
            const e = qr.arr(this.source) ? this.source.map(zn) : Wr(zn(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Wi(this._active) && (this.idle = !1, Gr(_o(this), (e => {
              e.done = !1
            })), Fr.skipAnimation ? (xr.batchedUpdates((() => this.advance())), Ki(this)) : ln.start(this))
          }
          _attach() {
            let e = 1;
            Gr(Wr(this.source), (t => {
              Fn(t) && Wn(t, this), li(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            Gr(Wr(this.source), (e => {
              Fn(e) && Kn(e, this)
            })), this._active.clear(), Ki(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Wr(this.source).reduce(((e, t) => Math.max(e, (li(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function Xi(e) {
        return !1 !== e.idle
      }

      function Wi(e) {
        return !e.size || Array.from(e).every(Xi)
      }

      function Ki(e) {
        e.idle || (e.idle = !0, Gr(_o(e), (e => {
          e.done = !0
        })), Un(e, {
          type: "idle",
          parent: e
        }))
      }
      Fr.assign({
        createStringInterpolator: io,
        to: (e, t) => new Gi(e, t)
      }), ln.advance;
      var $i = r(44853),
        Yi = /^--/;

      function Zi(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Yi.test(e) || Ji.hasOwnProperty(e) && Ji[e] ? ("" + t).trim() : t + "px"
      }
      var Qi = {},
        Ji = {
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
        ea = ["Webkit", "Ms", "Moz", "O"];
      Ji = Object.keys(Ji).reduce(((e, t) => (ea.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), Ji);
      var ta = /^(matrix|translate|scale|rotate|skew)/,
        ra = /^(translate)/,
        na = /^(rotate|skew)/,
        oa = (e, t) => qr.num(e) && 0 !== e ? e + t : e,
        ia = (e, t) => qr.arr(e) ? e.every((e => ia(e, t))) : qr.num(e) ? e === t : parseFloat(e) === t,
        aa = class extends So {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push((e => [`translate3d(${e.map((e=>oa(e,"px"))).join(",")})`, ia(e, 0)]))), Xr(n, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (ta.test(t)) {
                if (delete n[t], qr.und(e)) return;
                const r = ra.test(t) ? "px" : na.test(t) ? "deg" : "";
                o.push(Wr(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${oa(o,r)})`, ia(o, 0)] : e => [`${t}(${e.map((e=>oa(e,r))).join(",")})`, ia(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (n.transform = new sa(o, i)), super(n)
          }
        },
        sa = class extends Gn {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Gr(this.inputs, ((r, n) => {
              const o = zn(r[0]),
                [i, a] = this.transforms[n](qr.arr(o) ? o : r.map(zn));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Gr(this.inputs, (e => Gr(e, (e => Fn(e) && Wn(e, this)))))
          }
          observerRemoved(e) {
            0 == e && Gr(this.inputs, (e => Gr(e, (e => Fn(e) && Kn(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Un(this, e)
          }
        };
      Fr.assign({
        batchedUpdates: $i.unstable_batchedUpdates,
        createStringInterpolator: io,
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
      var la = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new So(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = Ro(e) || "Anonymous";
              return (e = qr.str(e) ? i[e] || (i[e] = No(e, o)) : e[Io] || (e[Io] = No(e, o))).displayName = `Animated(${t})`, e
            };
          return Xr(e, ((t, r) => {
            qr.arr(e) && (r = Ro(t)), i[r] = i(t)
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
                ...u
              } = t,
              c = Object.values(u),
              d = Object.keys(u).map((t => r || e.hasAttribute(t) ? t : Qi[t] || (Qi[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = Zi(t, o[t]);
                Yi.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach(((t, r) => {
              e.setAttribute(t, c[r])
            })), void 0 !== n && (e.className = n), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new aa(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        ua = la.animated;
      const ca = (e, t, r) => {
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
        da = e => {
          const t = (e, t, r) => {
            r(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, r) => {
            const n = r.getBoundingClientRect();
            return e ? (t(e.top, n.top, ((e, t) => e < t)), t(e.bottom, n.bottom, ((e, t) => e > t)), t(e.left, n.left, ((e, t) => e < t)), t(e.right, n.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), n) : n
          }), null)
        },
        fa = ([e, t], r) => {
          const {
            a: n
          } = new DOMMatrix(r.style.transform), o = da(r), i = o.width / n, a = 100 * pa(e, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / i, s = o.height / n;
          return {
            x: a,
            y: 100 * pa(t, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / s
          }
        },
        ha = (e, t, r, n) => {
          let o = r[0],
            i = r[1];
          const {
            a
          } = new DOMMatrix(e.style.transform), s = n / 100, l = da(e), u = t.getBoundingClientRect(), c = l.width / a / 2, d = u.width / 2, f = c * s > d ? c * s - d : 0, h = l.height / a / 2, p = u.height / 2, m = h * s > p ? h * s - p : 0, v = -o > f, y = o > f, g = i > m, b = -i > m;
          return v && !y ? o = -f : y && !v && (o = f), g && !b ? i = m : b && !g && (i = -m), {
            xy: [o, i],
            horizontalOffset: f,
            verticalOffset: m
          }
        },
        pa = (e, t, r) => Math.min(Math.max(e, t), r),
        ma = {
          mass: .1,
          tension: 800,
          friction: 20,
          clamp: !1,
          precision: .001,
          velocity: 0
        },
        va = Wo,
        ya = {
          scrollFactor: 2e3,
          dragFactor: 1.3,
          closePc: 33
        },
        ga = ({
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
            (0, g.useEffect)((() => (document.addEventListener("gesturestart", r), document.addEventListener("gesturechange", r), t.current?.addEventListener("dragstart", r), t.current?.addEventListener("click", r), e.current?.addEventListener("dragstart", r), e.current?.addEventListener("click", r), () => {
              document.removeEventListener("gesturestart", r), document.removeEventListener("gesturechange", r), t.current?.removeEventListener("dragstart", r), t.current?.removeEventListener("click", r), e.current?.removeEventListener("dragstart", r), e.current?.removeEventListener("click", r)
            })), [e.current, t.current])
          })({
            containerRef: t,
            contentRef: r
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
          return (0, v.jsx)("div", {
            ref: t,
            className: "foundry_148vt480",
            style: l,
            children: (0, v.jsx)(ua.div, {
              ref: r,
              className: "foundry_148vt481",
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
      var ba = r(78322);

      function _a(e, t) {
        var r = t && t.cache ? t.cache : Ia,
          n = t && t.serializer ? t.serializer : Sa;
        return (t && t.strategy ? t.strategy : Pa)(e, {
          cache: r,
          serializer: n
        })
      }

      function wa(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, n), t.set(i, a)), a
      }

      function Ea(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function xa(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function Pa(e, t) {
        return xa(e, this, 1 === e.length ? wa : Ea, t.cache.create(), t.serializer)
      }
      var Sa = function() {
        return JSON.stringify(arguments)
      };

      function Ca() {
        this.cache = Object.create(null)
      }
      Ca.prototype.get = function(e) {
        return this.cache[e]
      }, Ca.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var Oa, Ta, Na, ja, Ia = {
          create: function() {
            return new Ca
          }
        },
        Ra = {
          variadic: function(e, t) {
            return xa(e, this, Ea, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return xa(e, this, wa, t.cache.create(), t.serializer)
          }
        };

      function Da(e) {
        return e.type === Ta.literal
      }

      function ka(e) {
        return e.type === Ta.argument
      }

      function Aa(e) {
        return e.type === Ta.number
      }

      function La(e) {
        return e.type === Ta.date
      }

      function Ma(e) {
        return e.type === Ta.time
      }

      function Ha(e) {
        return e.type === Ta.select
      }

      function Ba(e) {
        return e.type === Ta.plural
      }

      function Va(e) {
        return e.type === Ta.pound
      }

      function Fa(e) {
        return e.type === Ta.tag
      }

      function za(e) {
        return !(!e || "object" != typeof e || e.type !== Na.number)
      }

      function qa(e) {
        return !(!e || "object" != typeof e || e.type !== Na.dateTime)
      }(ja = Oa || (Oa = {}))[ja.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", ja[ja.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", ja[ja.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", ja[ja.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", ja[ja.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", ja[ja.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", ja[ja.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", ja[ja.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", ja[ja.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", ja[ja.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", ja[ja.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", ja[ja.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", ja[ja.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", ja[ja.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", ja[ja.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", ja[ja.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", ja[ja.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", ja[ja.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", ja[ja.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", ja[ja.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", ja[ja.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", ja[ja.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", ja[ja.INVALID_TAG = 23] = "INVALID_TAG", ja[ja.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", ja[ja.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", ja[ja.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(Ta || (Ta = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(Na || (Na = {}));
      var Ua = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Ga = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Xa(e) {
        var t = {};
        return e.replace(Ga, (function(e) {
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
      var Wa = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function Ka(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], r = 0, n = e.split(Wa).filter((function(e) {
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
      var $a = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Ya = /^(@+)?(\+|#+)?[rs]?$/g,
        Za = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Qa = /^(0+)$/;

      function Ja(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Ya, (function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        })), t
      }

      function es(e) {
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

      function ts(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !Qa.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function rs(e) {
        return es(e) || {}
      }

      function ns(e) {
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
              t = (0, ba.__assign)((0, ba.__assign)((0, ba.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, ba.__assign)((0, ba.__assign)({}, e), rs(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, ba.__assign)((0, ba.__assign)((0, ba.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, ba.__assign)((0, ba.__assign)({}, e), rs(t))
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
              o.options[0].replace(Za, (function(e, r, n, o, i, a) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (Qa.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if ($a.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace($a, (function(e, r, n, o, i, a) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, ba.__assign)((0, ba.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, ba.__assign)((0, ba.__assign)({}, t), Ja(i)))
          } else if (Ya.test(o.stem)) t = (0, ba.__assign)((0, ba.__assign)({}, t), Ja(o.stem));
          else {
            var a = es(o.stem);
            a && (t = (0, ba.__assign)((0, ba.__assign)({}, t), a));
            var s = ts(o.stem);
            s && (t = (0, ba.__assign)((0, ba.__assign)({}, t), s))
          }
        }
        return t
      }
      var os, is = {
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

      function as(e) {
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
        return "root" !== n && (r = e.maximize().region), (is[r || ""] || is[n || ""] || is["".concat(n, "-001")] || is["001"])[0]
      }
      var ss = new RegExp("^".concat(Ua.source, "*")),
        ls = new RegExp("".concat(Ua.source, "*$"));

      function us(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var cs = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        ds = !!String.fromCodePoint,
        fs = !!Object.fromEntries,
        hs = !!String.prototype.codePointAt,
        ps = !!String.prototype.trimStart,
        ms = !!String.prototype.trimEnd,
        vs = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        ys = !0;
      try {
        ys = "a" === (null === (os = Ss("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === os ? void 0 : os[0])
      } catch (e) {
        ys = !1
      }
      var gs, bs = cs ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        _s = ds ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        ws = fs ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        Es = hs ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        xs = ps ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(ss, "")
        },
        Ps = ms ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(ls, "")
        };

      function Ss(e, t) {
        return new RegExp(e, t)
      }
      if (ys) {
        var Cs = Ss("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        gs = function(e, t) {
          var r;
          return Cs.lastIndex = t, null !== (r = Cs.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else gs = function(e, t) {
        for (var r = [];;) {
          var n = Es(e, t);
          if (void 0 === n || Is(n) || Rs(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return _s.apply(void 0, r)
      };
      var Os, Ts, Ns = function() {
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
                  return this.error(Oa.UNMATCHED_CLOSING_TAG, us(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && js(this.peek() || 0)) {
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
                  type: Ta.pound,
                  location: us(a, this.clonePosition())
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
              type: Ta.literal,
              value: "<".concat(n, "/>"),
              location: us(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !js(this.char())) return this.error(Oa.INVALID_TAG, us(a, this.clonePosition()));
              var s = this.clonePosition();
              return n !== this.parseTagName() ? this.error(Oa.UNMATCHED_CLOSING_TAG, us(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Ta.tag,
                  value: n,
                  children: i,
                  location: us(r, this.clonePosition())
                },
                err: null
              } : this.error(Oa.INVALID_TAG, us(a, this.clonePosition())))
            }
            return this.error(Oa.UNCLOSED_TAG, us(r, this.clonePosition()))
          }
          return this.error(Oa.INVALID_TAG, us(r, this.clonePosition()))
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
          var s = us(r, this.clonePosition());
          return {
            val: {
              type: Ta.literal,
              value: n,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (js(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return _s.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), _s(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Oa.EXPECT_ARGUMENT_CLOSING_BRACE, us(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Oa.EMPTY_ARGUMENT, us(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(Oa.MALFORMED_ARGUMENT, us(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Oa.EXPECT_ARGUMENT_CLOSING_BRACE, us(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Ta.argument,
                  value: n,
                  location: us(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Oa.EXPECT_ARGUMENT_CLOSING_BRACE, us(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(Oa.MALFORMED_ARGUMENT, us(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = gs(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: us(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Oa.EXPECT_ARGUMENT_TYPE, us(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var u = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = Ps(y.val)).length) return this.error(Oa.EXPECT_ARGUMENT_STYLE, us(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: us(u, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var c = us(n, this.clonePosition());
              if (l && bs(null == l ? void 0 : l.style, "::", 0)) {
                var d = xs(l.style.slice(2));
                if ("number" === a) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: Ta.number,
                    value: r,
                    location: c,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Oa.EXPECT_DATE_TIME_SKELETON, c);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = as(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; a-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: Na.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Xa(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Ta.date : Ta.time,
                    value: r,
                    location: c,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Ta.number : "date" === a ? Ta.date : Ta.time,
                  value: r,
                  location: c,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Oa.EXPECT_SELECT_ARGUMENT_OPTIONS, us(p, (0, ba.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Oa.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, us(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(Oa.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Oa.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = us(n, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Ta.select,
                  value: r,
                  options: ws(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Ta.plural,
                  value: r,
                  options: ws(b.val),
                  offset: v,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Oa.INVALID_ARGUMENT_TYPE, us(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Oa.EXPECT_ARGUMENT_CLOSING_BRACE, us(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Oa.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, us(r, this.clonePosition()));
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
            r = Ka(e)
          } catch (e) {
            return this.error(Oa.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Na.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? ns(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, a = [], s = new Set, l = n.value, u = n.location;;) {
            if (0 === l.length) {
              var c = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Oa.EXPECT_PLURAL_ARGUMENT_SELECTOR, Oa.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              u = us(c, this.clonePosition()), l = this.message.slice(c.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Oa.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Oa.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Oa.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Oa.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, us(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: us(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, u = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Oa.EXPECT_SELECT_ARGUMENT_SELECTOR : Oa.EXPECT_PLURAL_ARGUMENT_SELECTOR, us(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Oa.MISSING_OTHER_CLAUSE, us(this.clonePosition(), this.clonePosition())) : {
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
          var s = us(n, this.clonePosition());
          return o ? vs(i *= r) ? {
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
          var t = Es(this.message, e);
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
          if (bs(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && Is(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function js(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Is(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Rs(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Ds(e) {
        e.forEach((function(e) {
          if (delete e.location, Ha(e) || Ba(e))
            for (var t in e.options) delete e.options[t].location, Ds(e.options[t].value);
          else Aa(e) && za(e.style) || (La(e) || Ma(e)) && qa(e.style) ? delete e.style.location : Fa(e) && Ds(e.children)
        }))
      }

      function ks(e, t) {
        void 0 === t && (t = {}), t = (0, ba.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new Ns(e, t).parse();
        if (r.err) {
          var n = SyntaxError(Oa[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || Ds(r.val), r.val
      }(Ts = Os || (Os = {})).MISSING_VALUE = "MISSING_VALUE", Ts.INVALID_VALUE = "INVALID_VALUE", Ts.MISSING_INTL_API = "MISSING_INTL_API";
      var As, Ls = function(e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return o.code = r, o.originalMessage = n, o
          }
          return (0, ba.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        Ms = function(e) {
          function t(t, r, n, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), Os.INVALID_VALUE, o) || this
          }
          return (0, ba.__extends)(t, e), t
        }(Ls),
        Hs = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), Os.INVALID_VALUE, n) || this
          }
          return (0, ba.__extends)(t, e), t
        }(Ls),
        Bs = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), Os.MISSING_VALUE, r) || this
          }
          return (0, ba.__extends)(t, e), t
        }(Ls);

      function Vs(e) {
        return "function" == typeof e
      }

      function Fs(e, t, r, n, o, i, a) {
        if (1 === e.length && Da(e[0])) return [{
          type: As.literal,
          value: e[0].value
        }];
        for (var s = [], l = 0, u = e; l < u.length; l++) {
          var c = u[l];
          if (Da(c)) s.push({
            type: As.literal,
            value: c.value
          });
          else if (Va(c)) "number" == typeof i && s.push({
            type: As.literal,
            value: r.getNumberFormat(t).format(i)
          });
          else {
            var d = c.value;
            if (!o || !(d in o)) throw new Bs(d, a);
            var f = o[d];
            if (ka(c)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
              type: "string" == typeof f ? As.literal : As.object,
              value: f
            });
            else if (La(c)) {
              var h = "string" == typeof c.style ? n.date[c.style] : qa(c.style) ? c.style.parsedOptions : void 0;
              s.push({
                type: As.literal,
                value: r.getDateTimeFormat(t, h).format(f)
              })
            } else if (Ma(c)) h = "string" == typeof c.style ? n.time[c.style] : qa(c.style) ? c.style.parsedOptions : n.time.medium, s.push({
              type: As.literal,
              value: r.getDateTimeFormat(t, h).format(f)
            });
            else if (Aa(c))(h = "string" == typeof c.style ? n.number[c.style] : za(c.style) ? c.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), s.push({
              type: As.literal,
              value: r.getNumberFormat(t, h).format(f)
            });
            else {
              if (Fa(c)) {
                var p = c.children,
                  m = c.value,
                  v = o[m];
                if (!Vs(v)) throw new Hs(m, "function", a);
                var y = v(Fs(p, t, r, n, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(y) || (y = [y]), s.push.apply(s, y.map((function(e) {
                  return {
                    type: "string" == typeof e ? As.literal : As.object,
                    value: e
                  }
                })))
              }
              if (Ha(c)) {
                if (!(g = c.options[f] || c.options.other)) throw new Ms(c.value, f, Object.keys(c.options), a);
                s.push.apply(s, Fs(g.value, t, r, n, o))
              } else if (Ba(c)) {
                var g;
                if (!(g = c.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new Ls('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Os.MISSING_INTL_API, a);
                  var b = r.getPluralRules(t, {
                    type: c.pluralType
                  }).select(f - (c.offset || 0));
                  g = c.options[b] || c.options.other
                }
                if (!g) throw new Ms(c.value, f, Object.keys(c.options), a);
                s.push.apply(s, Fs(g.value, t, r, n, o, f - (c.offset || 0)))
              }
            }
          }
        }
        return (_ = s).length < 2 ? _ : _.reduce((function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === As.literal && t.type === As.literal ? r.value += t.value : e.push(t), e
        }), []);
        var _
      }

      function zs(e) {
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
      }(As || (As = {}));
      var qs, Us = function() {
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
                return e.length && t.type === As.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return Fs(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = l.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(l.locales)[0]
              }
            }, this.getAst = function() {
              return l.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var u = o || {},
              c = (u.formatters, (0, ba.__rest)(u, ["formatters"]));
            this.ast = e.__parse(t, (0, ba.__assign)((0, ba.__assign)({}, c), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (a = e.formats, (s = n) ? Object.keys(a).reduce((function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, ba.__assign)((0, ba.__assign)((0, ba.__assign)({}, e || {}), t || {}), Object.keys(e).reduce((function(r, n) {
                return r[n] = (0, ba.__assign)((0, ba.__assign)({}, e[n]), t[n] || {}), r
              }), {})) : e
            }(a[t], s[t]), e
          }), (0, ba.__assign)({}, a)) : a), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: _a((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, ba.__spreadArray)([void 0], t, !1)))
            }), {
              cache: zs(i.number),
              strategy: Ra.variadic
            }),
            getDateTimeFormat: _a((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, ba.__spreadArray)([void 0], t, !1)))
            }), {
              cache: zs(i.dateTime),
              strategy: Ra.variadic
            }),
            getPluralRules: _a((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, ba.__spreadArray)([void 0], t, !1)))
            }), {
              cache: zs(i.pluralRules),
              strategy: Ra.variadic
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
        }, e.__parse = ks, e.formats = {
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
      }(qs || (qs = {}));
      var Gs = function(e) {
          function t(r, n, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, ba.__extends)(t, e), t
        }(Error),
        Xs = function(e) {
          function t(t, r) {
            return e.call(this, qs.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, ba.__extends)(t, e), t
        }(Gs),
        Ws = function(e) {
          function t(t, r) {
            return e.call(this, qs.INVALID_CONFIG, t, r) || this
          }
          return (0, ba.__extends)(t, e), t
        }(Gs),
        Ks = function(e) {
          function t(t, r) {
            return e.call(this, qs.MISSING_DATA, t, r) || this
          }
          return (0, ba.__extends)(t, e), t
        }(Gs),
        $s = function(e) {
          function t(t, r, n) {
            var o = e.call(this, qs.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return o.locale = r, o
          }
          return (0, ba.__extends)(t, e), t
        }(Gs),
        Ys = function(e) {
          function t(t, r, n, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, o) || this;
            return i.descriptor = n, i.locale = r, i
          }
          return (0, ba.__extends)(t, e), t
        }($s),
        Zs = function(e) {
          function t(t, r) {
            var n = e.call(this, qs.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, ba.__extends)(t, e), t
        }(Gs);

      function Qs(e, t, r) {
        return void 0 === r && (r = {}), t.reduce((function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }), {})
      }
      var Js = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function el(e) {
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

      function tl(e, t, r, n) {
        var o, i = e && e[t];
        if (i && (o = i[r]), o) return o;
        n(new Xs("No ".concat(t, " format named: ").concat(r)))
      }

      function rl(e, t) {
        var r = t && t.cache ? t.cache : ul,
          n = t && t.serializer ? t.serializer : sl;
        return (t && t.strategy ? t.strategy : al)(e, {
          cache: r,
          serializer: n
        })
      }

      function nl(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, n), t.set(i, a)), a
      }

      function ol(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function il(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function al(e, t) {
        return il(e, this, 1 === e.length ? nl : ol, t.cache.create(), t.serializer)
      }
      var sl = function() {
        return JSON.stringify(arguments)
      };

      function ll() {
        this.cache = Object.create(null)
      }
      ll.prototype.get = function(e) {
        return this.cache[e]
      }, ll.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var ul = {
          create: function() {
            return new ll
          }
        },
        cl = {
          variadic: function(e, t) {
            return il(e, this, ol, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return il(e, this, nl, t.cache.create(), t.serializer)
          }
        };

      function dl(e) {
        ! function(e, t, r) {
          if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      rl((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, ba.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: cl.variadic
      }), rl((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, ba.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: cl.variadic
      }), rl((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, ba.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: cl.variadic
      }), rl((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, ba.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: cl.variadic
      }), rl((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, ba.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: cl.variadic
      });
      var fl = (0, ba.__assign)((0, ba.__assign)({}, Js), {
        textComponent: g.Fragment
      });
      r(35255);
      var hl = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? g.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = g.createContext(null)),
        pl = (hl.Consumer, hl.Provider),
        ml = hl;

      function vl(e, t) {
        return Object.keys(e).reduce((function(r, n) {
          return r[n] = (0, ba.__assign)({
            timeZone: t
          }, e[n]), r
        }), {})
      }

      function yl(e, t) {
        return Object.keys((0, ba.__assign)((0, ba.__assign)({}, e), t)).reduce((function(r, n) {
          return r[n] = (0, ba.__assign)((0, ba.__assign)({}, e[n] || {}), t[n] || {}), r
        }), {})
      }

      function gl(e, t) {
        if (!t) return e;
        var r = Us.formats;
        return (0, ba.__assign)((0, ba.__assign)((0, ba.__assign)({}, r), e), {
          date: yl(vl(r.date, t), vl(e.date || {}, t)),
          time: yl(vl(r.time, t), vl(e.time || {}, t))
        })
      }
      _a((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, ba.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Ra.variadic
      }), _a((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, ba.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Ra.variadic
      }), _a((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, ba.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Ra.variadic
      }), _a((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, ba.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Ra.variadic
      }), _a((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, ba.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Ra.variadic
      });
      var bl = function(e, t, r, n, o) {
          var i = e.locale,
            a = e.formats,
            s = e.messages,
            l = e.defaultLocale,
            u = e.defaultFormats,
            c = e.fallbackOnEmptyString,
            d = e.onError,
            f = e.timeZone,
            h = e.defaultRichTextElements;
          void 0 === r && (r = {
            id: ""
          });
          var p = r.id,
            m = r.defaultMessage;
          ! function(e, t, r) {
            if (void 0 === r && (r = Error), !e) throw new r("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
          }(!!p);
          var v = String(p),
            y = s && Object.prototype.hasOwnProperty.call(s, v) && s[v];
          if (Array.isArray(y) && 1 === y.length && y[0].type === Ta.literal) return y[0].value;
          if (!n && y && "string" == typeof y && !h) return y.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, ba.__assign)((0, ba.__assign)({}, h), n || {}), a = gl(a, f), u = gl(u, f), !y) {
            if (!1 === c && "" === y) return y;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new Zs(r, i)), m) try {
              return t.getMessageFormat(m, l, u, o).format(n)
            } catch (e) {
              return d(new Ys('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), i, r, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(y, i, a, (0, ba.__assign)({
              formatters: t
            }, o || {})).format(n)
          } catch (e) {
            d(new Ys('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), i, r, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, u, o).format(n)
          } catch (e) {
            d(new Ys('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), i, r, e))
          }
          return "string" == typeof y ? y : "string" == typeof m ? m : v
        },
        _l = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function wl(e, t, r) {
        var n = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === r && (r = {});
        var a = r.format,
          s = a && tl(o, "number", a, i) || {};
        return t(n, Qs(r, _l, s))
      }

      function El(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return wl(e, t, n).format(r)
        } catch (t) {
          e.onError(new $s("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function xl(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return wl(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new $s("Error formatting number.", e.locale, t))
        }
        return []
      }
      var Pl = ["numeric", "style"];

      function Sl(e, t, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new Ls('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', Os.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === r && (r = {});
            var a = r.format,
              s = !!a && tl(o, "relative", a, i) || {};
            return t(n, Qs(r, Pl, s))
          }(e, t, o).format(r, n)
        } catch (t) {
          e.onError(new $s("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var Cl = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function Ol(e, t, r, n) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === n && (n = {});
        var l = n.format,
          u = (0, ba.__assign)((0, ba.__assign)({}, s && {
            timeZone: s
          }), l && tl(i, t, l, a)),
          c = Qs(n, Cl, u);
        return "time" !== t || c.hour || c.minute || c.second || c.timeStyle || c.dateStyle || (c = (0, ba.__assign)((0, ba.__assign)({}, c), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, c)
      }

      function Tl(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Ol(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new $s("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function Nl(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Ol(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new $s("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function jl(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = r[2],
          s = void 0 === a ? {} : a,
          l = e.timeZone,
          u = e.locale,
          c = e.onError,
          d = Qs(s, Cl, l ? {
            timeZone: l
          } : {});
        try {
          return t(u, d).formatRange(o, i)
        } catch (t) {
          c(new $s("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function Il(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Ol(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new $s("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Rl(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Ol(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new $s("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Dl = ["type"];

      function kl(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || i(new Ls('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Os.MISSING_INTL_API));
        var a = Qs(n, Dl);
        try {
          return t(o, a).select(r)
        } catch (e) {
          i(new $s("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Al = ["type", "style"],
        Ll = Date.now();

      function Ml(e, t, r, n) {
        void 0 === n && (n = {});
        var o = Hl(e, t, r, n).reduce((function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Hl(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || i(new Ls('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', Os.MISSING_INTL_API));
        var a = Qs(n, Al);
        try {
          var s = {},
            l = r.map((function(e, t) {
              if ("object" == typeof e) {
                var r = function(e) {
                  return "".concat(Ll, "_").concat(e, "_").concat(Ll)
                }(t);
                return s[r] = e, r
              }
              return String(e)
            }));
          return t(o, a).formatToParts(l).map((function(e) {
            return "literal" === e.type ? e : (0, ba.__assign)((0, ba.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          }))
        } catch (e) {
          i(new $s("Error formatting list.", o, e))
        }
        return r
      }
      var Bl, Vl, Fl, zl = ["style", "type", "fallback", "languageDisplay"];

      function ql(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new Ls('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', Os.MISSING_INTL_API));
        var a = Qs(n, zl);
        try {
          return t(o, a).of(r)
        } catch (e) {
          i(new $s("Error formatting display name.", o, e))
        }
      }

      function Ul(e, t) {
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
              o = _a((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, ba.__spreadArray)([void 0], t, !1)))
              }), {
                cache: el(e.dateTime),
                strategy: Ra.variadic
              }),
              i = _a((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, ba.__spreadArray)([void 0], t, !1)))
              }), {
                cache: el(e.number),
                strategy: Ra.variadic
              }),
              a = _a((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, ba.__spreadArray)([void 0], t, !1)))
              }), {
                cache: el(e.pluralRules),
                strategy: Ra.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: _a((function(e, t, r, n) {
                return new Us(e, t, r, (0, ba.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: a
                  }
                }, n || {}))
              }), {
                cache: el(e.message),
                strategy: Ra.variadic
              }),
              getRelativeTimeFormat: _a((function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new(t.bind.apply(t, (0, ba.__spreadArray)([void 0], e, !1)))
              }), {
                cache: el(e.relativeTime),
                strategy: Ra.variadic
              }),
              getPluralRules: a,
              getListFormat: _a((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, ba.__spreadArray)([void 0], e, !1)))
              }), {
                cache: el(e.list),
                strategy: Ra.variadic
              }),
              getDisplayNames: _a((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, ba.__spreadArray)([void 0], e, !1)))
              }), {
                cache: el(e.displayNames),
                strategy: Ra.variadic
              })
            }
          }(t),
          n = (0, ba.__assign)((0, ba.__assign)({}, Js), e),
          o = n.locale,
          i = n.defaultLocale,
          a = n.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new Ks('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new Ks('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new Ws('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(n), (0, ba.__assign)((0, ba.__assign)({}, n), {
            formatters: r,
            formatNumber: El.bind(null, n, r.getNumberFormat),
            formatNumberToParts: xl.bind(null, n, r.getNumberFormat),
            formatRelativeTime: Sl.bind(null, n, r.getRelativeTimeFormat),
            formatDate: Tl.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: Il.bind(null, n, r.getDateTimeFormat),
            formatTime: Nl.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: jl.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: Rl.bind(null, n, r.getDateTimeFormat),
            formatPlural: kl.bind(null, n, r.getPluralRules),
            formatMessage: bl.bind(null, n, r),
            $t: bl.bind(null, n, r),
            formatList: Ml.bind(null, n, r.getListFormat),
            formatListToParts: Hl.bind(null, n, r.getListFormat),
            formatDisplayName: ql.bind(null, n, r.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Bl || (Bl = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Vl || (Vl = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Fl || (Fl = {}));
      var Gl, Xl = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Wl = {
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

      function Kl(e) {
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
        return "root" !== n && (r = e.maximize().region), (Wl[r || ""] || Wl[n || ""] || Wl["".concat(n, "-001")] || Wl["001"])[0]
      }
      var $l = new RegExp("^".concat(Xl.source, "*")),
        Yl = new RegExp("".concat(Xl.source, "*$"));

      function Zl(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Ql = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Jl = !!String.fromCodePoint,
        eu = !!Object.fromEntries,
        tu = !!String.prototype.codePointAt,
        ru = !!String.prototype.trimStart,
        nu = !!String.prototype.trimEnd,
        ou = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        iu = !0;
      try {
        iu = "a" === (null === (Gl = pu("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Gl ? void 0 : Gl[0])
      } catch (e) {
        iu = !1
      }
      var au, su, lu = Ql ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        uu = Jl ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        cu = eu ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        du = tu ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        fu = ru ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace($l, "")
        },
        hu = nu ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Yl, "")
        };

      function pu(e, t) {
        return new RegExp(e, t)
      }
      if (iu) {
        var mu = pu("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        au = function(e, t) {
          var r;
          return mu.lastIndex = t, null !== (r = mu.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else au = function(e, t) {
        for (var r = [];;) {
          var n = du(e, t);
          if (void 0 === n || yu(n) || gu(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return uu.apply(void 0, r)
      };

      function vu(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function yu(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function gu(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function bu(e) {
        return e ? Object.keys(e).reduce((function(t, r) {
          var n, o = e[r];
          return t[r] = "function" == typeof o ? (n = o, function(e) {
            return n(g.Children.toArray(e))
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
                  return this.error(Bl.UNMATCHED_CLOSING_TAG, Zl(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && vu(this.peek() || 0)) {
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
                  type: Vl.pound,
                  location: Zl(a, this.clonePosition())
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
              type: Vl.literal,
              value: "<".concat(n, "/>"),
              location: Zl(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !vu(this.char())) return this.error(Bl.INVALID_TAG, Zl(a, this.clonePosition()));
              var s = this.clonePosition();
              return n !== this.parseTagName() ? this.error(Bl.UNMATCHED_CLOSING_TAG, Zl(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Vl.tag,
                  value: n,
                  children: i,
                  location: Zl(r, this.clonePosition())
                },
                err: null
              } : this.error(Bl.INVALID_TAG, Zl(a, this.clonePosition())))
            }
            return this.error(Bl.UNCLOSED_TAG, Zl(r, this.clonePosition()))
          }
          return this.error(Bl.INVALID_TAG, Zl(r, this.clonePosition()))
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
          var s = Zl(r, this.clonePosition());
          return {
            val: {
              type: Vl.literal,
              value: n,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (vu(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return uu.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), uu(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Bl.EXPECT_ARGUMENT_CLOSING_BRACE, Zl(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Bl.EMPTY_ARGUMENT, Zl(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(Bl.MALFORMED_ARGUMENT, Zl(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Bl.EXPECT_ARGUMENT_CLOSING_BRACE, Zl(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Vl.argument,
                  value: n,
                  location: Zl(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Bl.EXPECT_ARGUMENT_CLOSING_BRACE, Zl(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(Bl.MALFORMED_ARGUMENT, Zl(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = au(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: Zl(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Bl.EXPECT_ARGUMENT_TYPE, Zl(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var u = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = hu(y.val)).length) return this.error(Bl.EXPECT_ARGUMENT_STYLE, Zl(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: Zl(u, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var c = Zl(n, this.clonePosition());
              if (l && lu(null == l ? void 0 : l.style, "::", 0)) {
                var d = fu(l.style.slice(2));
                if ("number" === a) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: Vl.number,
                    value: r,
                    location: c,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Bl.EXPECT_DATE_TIME_SKELETON, c);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = Kl(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) r += "a";
                      for (; a-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: Fl.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Xa(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Vl.date : Vl.time,
                    value: r,
                    location: c,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Vl.number : "date" === a ? Vl.date : Vl.time,
                  value: r,
                  location: c,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Bl.EXPECT_SELECT_ARGUMENT_OPTIONS, Zl(p, (0, ba.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Bl.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Zl(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(Bl.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Bl.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = Zl(n, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Vl.select,
                  value: r,
                  options: cu(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Vl.plural,
                  value: r,
                  options: cu(b.val),
                  offset: v,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Bl.INVALID_ARGUMENT_TYPE, Zl(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Bl.EXPECT_ARGUMENT_CLOSING_BRACE, Zl(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Bl.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Zl(r, this.clonePosition()));
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
            r = Ka(e)
          } catch (e) {
            return this.error(Bl.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Fl.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? ns(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, a = [], s = new Set, l = n.value, u = n.location;;) {
            if (0 === l.length) {
              var c = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Bl.EXPECT_PLURAL_ARGUMENT_SELECTOR, Bl.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              u = Zl(c, this.clonePosition()), l = this.message.slice(c.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Bl.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Bl.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Bl.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Bl.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Zl(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: Zl(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, u = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Bl.EXPECT_SELECT_ARGUMENT_SELECTOR : Bl.EXPECT_PLURAL_ARGUMENT_SELECTOR, Zl(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Bl.MISSING_OTHER_CLAUSE, Zl(this.clonePosition(), this.clonePosition())) : {
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
          var s = Zl(n, this.clonePosition());
          return o ? ou(i *= r) ? {
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
          var t = du(this.message, e);
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
          if (lu(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && yu(this.char());) this.bump()
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
      }(su || (su = {}));
      var _u = function(e, t, r, n) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var a = bu(n),
            s = bl.apply(void 0, (0, ba.__spreadArray)([e, t, r, a], o, !1));
          return Array.isArray(s) ? g.Children.toArray(s) : s
        },
        wu = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, ba.__rest)(e, ["defaultRichTextElements"]),
            o = bu(r),
            i = Ul((0, ba.__assign)((0, ba.__assign)((0, ba.__assign)({}, fl), n), {
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
          return (0, ba.__assign)((0, ba.__assign)({}, i), {
            formatMessage: _u.bind(null, a, i.formatters),
            $t: _u.bind(null, a, i.formatters)
          })
        };

      function Eu(e) {
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
      var xu = function(e) {
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
            intl: wu(Eu(t.props), t.cache),
            prevConfig: Eu(t.props)
          }, t
        }
        return (0, ba.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            o = Eu(e);
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
            intl: wu(o, n),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return dl(this.state.intl), g.createElement(pl, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = fl, t
      }(g.PureComponent);
      const Pu = xu;

      function Su() {
        var e = g.useContext(ml);
        return dl(e), e
      }
      var Cu, Ou;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(Cu || (Cu = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(Ou || (Ou = {}));
      var Tu = function(e) {
        var t = Su(),
          r = e.value,
          n = e.children,
          o = (0, ba.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function Nu(e) {
        var t = function(t) {
          var r = Su(),
            n = t.value,
            o = t.children,
            i = (0, ba.__rest)(t, ["value", "children"]),
            a = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(a, i) : r.formatTimeToParts(a, i))
        };
        return t.displayName = Ou[e], t
      }

      function ju(e) {
        var t = function(t) {
          var r = Su(),
            n = t.value,
            o = t.children,
            i = (0, ba.__rest)(t, ["value", "children"]),
            a = r[e](n, i);
          if ("function" == typeof o) return o(a);
          var s = r.textComponent || g.Fragment;
          return g.createElement(s, null, a)
        };
        return t.displayName = Cu[e], t
      }
      Tu.displayName = "FormattedNumberParts", Tu.displayName = "FormattedNumberParts", ju("formatDate"), ju("formatTime"), ju("formatNumber"), ju("formatList"), ju("formatDisplayName"), Nu("formatDate"), Nu("formatTime");
      const Iu = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, i] = (0, g.useState)(null);
          return (0, g.useEffect)((() => {
            (t?.[r] ?? t["en-US"]).then((e => {
              i(e.default)
            }))
          }), [r]), o ? (0, v.jsx)(Pu, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        Ru = {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "Open image in lightbox"
        },
        Du = {
          id: "Lightbox_Dialog_Title",
          description: "Visually hidden text used for the lightbox dialog title",
          defaultMessage: "Image lightbox"
        },
        ku = {
          id: "Lightbox_Dialog_Description",
          description: "Visually hidden text used for the lightbox dialog description",
          defaultMessage: "Alt text: {alt}"
        },
        Au = {
          "en-US": r.e(9760).then(r.bind(r, 9760)),
          "de-DE": r.e(7407).then(r.bind(r, 27407)),
          "es-ES": r.e(173).then(r.bind(r, 40173)),
          "es-MX": r.e(68).then(r.bind(r, 30068)),
          "fr-FR": r.e(8325).then(r.bind(r, 38325)),
          "it-IT": r.e(5415).then(r.bind(r, 75415)),
          "ja-JP": r.e(3896).then(r.bind(r, 3896)),
          "ko-KR": r.e(1758).then(r.bind(r, 11758)),
          "pl-PL": r.e(5265).then(r.bind(r, 5265)),
          "pt-BR": r.e(8845).then(r.bind(r, 28845)),
          "ru-RU": r.e(6471).then(r.bind(r, 96471)),
          "zh-CN": r.e(8938).then(r.bind(r, 58938)),
          "zh-TW": r.e(2234).then(r.bind(r, 59853))
        };
      var Lu = r(4218);
      const Mu = (e, t) => {
        const r = "more" === t ? Lu.xW.lightHc : Lu.xW.light,
          n = "more" === t ? Lu.xW.darkHc : Lu.xW.dark;
        return "dark" === e ? n : r
      };

      function Hu(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }

      function Bu(e, t, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(n) {
          if (e?.(n), !1 === r || !n.defaultPrevented) return t?.(n)
        }
      }

      function Vu(e, t = []) {
        let r = [];
        const n = () => {
          const t = r.map((e => g.createContext(e)));
          return function(r) {
            const n = r?.[e] || t;
            return g.useMemo((() => ({
              [`__scope${e}`]: {
                ...r,
                [e]: n
              }
            })), [r, n])
          }
        };
        return n.scopeName = e, [function(t, n) {
          const o = g.createContext(n),
            i = r.length;
          r = [...r, n];
          const a = t => {
            const {
              scope: r,
              children: n,
              ...a
            } = t, s = r?.[e]?.[i] || o, l = g.useMemo((() => a), Object.values(a));
            return (0, v.jsx)(s.Provider, {
              value: l,
              children: n
            })
          };
          return a.displayName = t + "Provider", [a, function(r, a) {
            const s = a?.[e]?.[i] || o,
              l = g.useContext(s);
            if (l) return l;
            if (void 0 !== n) return n;
            throw new Error(`\`${r}\` must be used within \`${t}\``)
          }]
        }, Fu(n, ...t)]
      }

      function Fu(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const r = () => {
          const r = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const n = r.reduce(((t, {
              useScope: r,
              scopeName: n
            }) => ({
              ...t,
              ...r(e)[`__scope${n}`]
            })), {});
            return g.useMemo((() => ({
              [`__scope${t.scopeName}`]: n
            })), [n])
          }
        };
        return r.scopeName = t.scopeName, r
      }
      var zu = globalThis?.document ? g.useLayoutEffect : () => {},
        qu = b[" useInsertionEffect ".trim().toString()] || zu;

      function Uu({
        prop: e,
        defaultProp: t,
        onChange: r = () => {},
        caller: n
      }) {
        const [o, i, a] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [r, n] = g.useState(e), o = g.useRef(r), i = g.useRef(t);
          return qu((() => {
            i.current = t
          }), [t]), g.useEffect((() => {
            o.current !== r && (i.current?.(r), o.current = r)
          }), [r, o]), [r, n, i]
        }({
          defaultProp: t,
          onChange: r
        }), s = void 0 !== e, l = s ? e : o; {
          const t = g.useRef(void 0 !== e);
          g.useEffect((() => {
            const e = t.current;
            if (e !== s) {
              const t = e ? "controlled" : "uncontrolled",
                r = s ? "controlled" : "uncontrolled";
              console.warn(`${n} is changing from ${t} to ${r}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = s
          }), [s, n])
        }
        const u = g.useCallback((t => {
          if (s) {
            const r = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            r !== e && a.current?.(r)
          } else i(t)
        }), [s, e, i, a]);
        return [l, u]
      }
      Symbol("RADIX:SYNC_STATE");
      var Gu = g.createContext(void 0);

      function Xu(e) {
        const t = g.useContext(Gu);
        return e || t || "ltr"
      }

      function Wu(e) {
        const t = g.useRef({
          value: e,
          previous: e
        });
        return g.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }

      function Ku(e) {
        const [t, r] = g.useState(void 0);
        return zu((() => {
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
      var $u = r(78004),
        Yu = r(39447);

      function Zu(e) {
        const t = e + "CollectionProvider",
          [r, n] = Vu(t),
          [o, i] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          a = e => {
            const {
              scope: t,
              children: r
            } = e, n = g.useRef(null), i = g.useRef(new Map).current;
            return (0, v.jsx)(o, {
              scope: t,
              itemMap: i,
              collectionRef: n,
              children: r
            })
          };
        a.displayName = t;
        const s = e + "CollectionSlot",
          l = (0, Yu.TL)(s),
          u = g.forwardRef(((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = i(s, r), a = (0, Be.s)(t, o.collectionRef);
            return (0, v.jsx)(l, {
              ref: a,
              children: n
            })
          }));
        u.displayName = s;
        const c = e + "CollectionItemSlot",
          d = "data-radix-collection-item",
          f = (0, Yu.TL)(c),
          h = g.forwardRef(((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, a = g.useRef(null), s = (0, Be.s)(t, a), l = i(c, r);
            return g.useEffect((() => (l.itemMap.set(a, {
              ref: a,
              ...o
            }), () => {
              l.itemMap.delete(a)
            }))), (0, v.jsx)(f, {
              [d]: "",
              ref: s,
              children: n
            })
          }));
        return h.displayName = c, [{
          Provider: a,
          Slot: u,
          ItemSlot: h
        }, function(t) {
          const r = i(e + "CollectionConsumer", t),
            n = g.useCallback((() => {
              const e = r.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${d}]`)),
                n = Array.from(r.itemMap.values()).sort(((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)));
              return n
            }), [r.collectionRef, r.itemMap]);
          return n
        }, n]
      }
      Map;
      var Qu = ["PageUp", "PageDown"],
        Ju = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        ec = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        tc = "Slider",
        [rc, nc, oc] = Zu(tc),
        [ic, ac] = Vu(tc, [oc]),
        [sc, lc] = ic(tc),
        uc = g.forwardRef(((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: i = 1,
            orientation: a = "horizontal",
            disabled: s = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: u = [n],
            value: c,
            onValueChange: d = () => {},
            onValueCommit: f = () => {},
            inverted: h = !1,
            form: p,
            ...m
          } = e, y = g.useRef(new Set), b = g.useRef(0), _ = "horizontal" === a ? fc : hc, [w = [], E] = Uu({
            prop: c,
            defaultProp: u,
            onChange: e => {
              const t = [...y.current];
              t[b.current]?.focus(), d(e)
            }
          }), x = g.useRef(w);

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
              u = Hu(s, [n, o]);
            E(((e = []) => {
              const n = function(e = [], t, r) {
                const n = [...e];
                return n[r] = t, n.sort(((e, t) => e - t))
              }(e, u, t);
              if (function(e, t) {
                  if (t > 0) {
                    const r = function(e) {
                      return e.slice(0, -1).map(((t, r) => e[r + 1] - t))
                    }(e);
                    return Math.min(...r) >= t
                  }
                  return !0
                }(n, l * i)) {
                b.current = n.indexOf(u);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            }))
          }
          return (0, v.jsx)(sc, {
            scope: e.__scopeSlider,
            name: r,
            disabled: s,
            min: n,
            max: o,
            valueIndexToChangeRef: b,
            thumbs: y.current,
            values: w,
            orientation: a,
            form: p,
            children: (0, v.jsx)(rc.Provider, {
              scope: e.__scopeSlider,
              children: (0, v.jsx)(rc.Slot, {
                scope: e.__scopeSlider,
                children: (0, v.jsx)(_, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: Bu(m.onPointerDown, (() => {
                    s || (x.current = w)
                  })),
                  min: n,
                  max: o,
                  inverted: h,
                  onSlideStart: s ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const r = e.map((e => Math.abs(e - t))),
                        n = Math.min(...r);
                      return r.indexOf(n)
                    }(w, e);
                    P(e, t)
                  },
                  onSlideMove: s ? void 0 : function(e) {
                    P(e, b.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const e = x.current[b.current];
                    w[b.current] !== e && f(w)
                  },
                  onHomeKeyDown: () => !s && P(n, 0, {
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
                      const r = Qu.includes(e.key) || e.shiftKey && Ju.includes(e.key) ? 10 : 1,
                        n = b.current;
                      P(w[n] + i * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      uc.displayName = tc;
      var [cc, dc] = ic(tc, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), fc = g.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: i,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: l,
          onStepKeyDown: u,
          ...c
        } = e, [d, f] = g.useState(null), h = (0, Be.s)(t, (e => f(e))), p = g.useRef(void 0), m = Xu(o), y = "ltr" === m, b = y && !i || !y && i;

        function _(e) {
          const t = p.current || d.getBoundingClientRect(),
            o = Pc([0, t.width], b ? [r, n] : [n, r]);
          return p.current = t, o(e - t.left)
        }
        return (0, v.jsx)(cc, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, v.jsx)(pc, {
            dir: m,
            "data-orientation": "horizontal",
            ...c,
            ref: h,
            style: {
              ...c.style,
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
              p.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = ec[b ? "from-left" : "from-right"].includes(e.key);
              u?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), hc = g.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: i,
          onSlideMove: a,
          onSlideEnd: s,
          onStepKeyDown: l,
          ...u
        } = e, c = g.useRef(null), d = (0, Be.s)(t, c), f = g.useRef(void 0), h = !o;

        function p(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = Pc([0, t.height], h ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, v.jsx)(cc, {
          scope: e.__scopeSlider,
          startEdge: h ? "bottom" : "top",
          endEdge: h ? "top" : "bottom",
          size: "height",
          direction: h ? 1 : -1,
          children: (0, v.jsx)(pc, {
            "data-orientation": "vertical",
            ...u,
            ref: d,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = p(e.clientY);
              i?.(t)
            },
            onSlideMove: e => {
              const t = p(e.clientY);
              a?.(t)
            },
            onSlideEnd: () => {
              f.current = void 0, s?.()
            },
            onStepKeyDown: e => {
              const t = ec[h ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), pc = g.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: a,
          onEndKeyDown: s,
          onStepKeyDown: l,
          ...u
        } = e, c = lc(tc, r);
        return (0, v.jsx)($u.sG.span, {
          ...u,
          ref: t,
          onKeyDown: Bu(e.onKeyDown, (e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : Qu.concat(Ju).includes(e.key) && (l(e), e.preventDefault())
          })),
          onPointerDown: Bu(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus() : n(e)
          })),
          onPointerMove: Bu(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: Bu(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          }))
        })
      })), mc = "SliderTrack", vc = g.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = lc(mc, r);
        return (0, v.jsx)($u.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      }));
      vc.displayName = mc;
      var yc = "SliderRange",
        gc = g.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = lc(yc, r), i = dc(yc, r), a = g.useRef(null), s = (0, Be.s)(t, a), l = o.values.length, u = o.values.map((e => xc(e, o.min, o.max))), c = l > 1 ? Math.min(...u) : 0, d = 100 - Math.max(...u);
          return (0, v.jsx)($u.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: s,
            style: {
              ...e.style,
              [i.startEdge]: c + "%",
              [i.endEdge]: d + "%"
            }
          })
        }));
      gc.displayName = yc;
      var bc = "SliderThumb",
        _c = g.forwardRef(((e, t) => {
          const r = nc(e.__scopeSlider),
            [n, o] = g.useState(null),
            i = (0, Be.s)(t, (e => o(e))),
            a = g.useMemo((() => n ? r().findIndex((e => e.ref.current === n)) : -1), [r, n]);
          return (0, v.jsx)(wc, {
            ...e,
            ref: i,
            index: a
          })
        })),
        wc = g.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...i
          } = e, a = lc(bc, r), s = dc(bc, r), [l, u] = g.useState(null), c = (0, Be.s)(t, (e => u(e))), d = !l || a.form || !!l.closest("form"), f = Ku(l), h = a.values[n], p = void 0 === h ? 0 : xc(h, a.min, a.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, a.values.length), y = f?.[s.size], b = y ? function(e, t, r) {
            const n = e / 2;
            return (n - Pc([0, 50], [0, n])(t) * r) * r
          }(y, p, s.direction) : 0;
          return g.useEffect((() => {
            if (l) return a.thumbs.add(l), () => {
              a.thumbs.delete(l)
            }
          }), [l, a.thumbs]), (0, v.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${p}% + ${b}px)`
            },
            children: [(0, v.jsx)(rc.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, v.jsx)($u.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || m,
                "aria-valuemin": a.min,
                "aria-valuenow": h,
                "aria-valuemax": a.max,
                "aria-orientation": a.orientation,
                "data-orientation": a.orientation,
                "data-disabled": a.disabled ? "" : void 0,
                tabIndex: a.disabled ? void 0 : 0,
                ...i,
                ref: c,
                style: void 0 === h ? {
                  display: "none"
                } : e.style,
                onFocus: Bu(e.onFocus, (() => {
                  a.valueIndexToChangeRef.current = n
                }))
              })
            }), d && (0, v.jsx)(Ec, {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: h
            }, n)]
          })
        }));
      _c.displayName = bc;
      var Ec = g.forwardRef((({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = g.useRef(null),
          i = (0, Be.s)(o, n),
          a = Wu(t);
        return g.useEffect((() => {
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
        }), [a, t]), (0, v.jsx)($u.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: i,
          defaultValue: t
        })
      }));

      function xc(e, t, r) {
        return Hu(100 / (r - t) * (e - t), [0, 100])
      }

      function Pc(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      Ec.displayName = "RadioBubbleInput";
      var Sc = uc,
        Cc = vc,
        Oc = gc,
        Tc = _c;
      const Nc = {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close lightbox"
        },
        jc = {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        Ic = {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        Rc = {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        Dc = {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        kc = {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        Ac = {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        Lc = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        Mc = {
          id: "Lightbox_Zoom_Slider_Label",
          description: "Aria-label for the lightbox zoom slider",
          defaultMessage: "Zoom level"
        },
        Hc = {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        Bc = {
          id: "Lightbox_Download_Button_Label",
          description: "Aria-label for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        },
        Vc = {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        };

      function Fc() {
        return Fc = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Fc.apply(null, arguments)
      }
      var zc = ["shift", "alt", "meta", "mod", "ctrl"],
        qc = {
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

      function Uc(e) {
        return (e && qc[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Gc(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Xc(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map((function(e) {
          return Uc(e)
        }));
        return Fc({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter((function(e) {
            return !zc.includes(e)
          })),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && $c([Uc(e.key), Uc(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && Yc([Uc(e.key), Uc(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        Wc.clear()
      }));
      var Wc = new Set;

      function Kc(e) {
        return Array.isArray(e)
      }

      function $c(e) {
        var t = Array.isArray(e) ? e : [e];
        Wc.has("meta") && Wc.forEach((function(e) {
          return ! function(e) {
            return zc.includes(e)
          }(e) && Wc.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return Wc.add(e.toLowerCase())
        }))
      }

      function Yc(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Wc.clear() : t.forEach((function(e) {
          return Wc.delete(e.toLowerCase())
        }))
      }

      function Zc(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          i = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, Kc(t) ? Boolean(n && t && t.some((function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        }))) : Boolean(n && t && t)
      }
      var Qc = (0, g.createContext)(void 0);

      function Jc(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, v.jsx)(Qc.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function ed(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(r, n) {
          return r && ed(e[n], t[n])
        }), !0) : e === t
      }
      var td = (0, g.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        rd = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, g.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            i = o[0],
            a = o[1],
            s = (0, g.useState)([]),
            l = s[0],
            u = s[1],
            c = (0, g.useCallback)((function(e) {
              a((function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            d = (0, g.useCallback)((function(e) {
              a((function(t) {
                return 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                }))
              }))
            }), []),
            f = (0, g.useCallback)((function(e) {
              a((function(t) {
                return t.includes(e) ? 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                })) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            h = (0, g.useCallback)((function(e) {
              u((function(t) {
                return [].concat(t, [e])
              }))
            }), []),
            p = (0, g.useCallback)((function(e) {
              u((function(t) {
                return t.filter((function(t) {
                  return !ed(t, e)
                }))
              }))
            }), []);
          return (0, v.jsx)(td.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: c,
              disableScope: d,
              toggleScope: f
            },
            children: (0, v.jsx)(Jc, {
              addHotkey: h,
              removeHotkey: p,
              children: n
            })
          })
        },
        nd = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        od = "undefined" != typeof window ? g.useLayoutEffect : g.useEffect;

      function id(e, t, r, n) {
        var o = (0, g.useState)(null),
          i = o[0],
          a = o[1],
          s = (0, g.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          u = Kc(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          c = r instanceof Array ? r : n instanceof Array ? n : void 0,
          d = (0, g.useCallback)(t, null != c ? c : []),
          f = (0, g.useRef)(d);
        f.current = c ? d : t;
        var h = function(e) {
            var t = (0, g.useRef)(void 0);
            return ed(t.current, e) || (t.current = e), t.current
          }(l),
          p = (0, g.useContext)(td).enabledScopes,
          m = (0, g.useContext)(Qc);
        return od((function() {
          if (!1 !== (null == h ? void 0 : h.enabled) && (e = p, t = null == h ? void 0 : h.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !Zc(e, ["input", "textarea", "select"]) || Zc(e, null == h ? void 0 : h.enableOnFormTags)) {
                  if (null !== i) {
                    var n = i.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== i && !i.contains(n.activeElement)) return void nd(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != h && h.enableOnContentEditable) && Gc(u, null == h ? void 0 : h.splitKey).forEach((function(r) {
                    var n, o = Xc(r, null == h ? void 0 : h.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, i = t.alt,
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
                          v = e.altKey,
                          y = Uc(f),
                          g = d.toLowerCase();
                        if (!(null != c && c.includes(y) || null != c && c.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!r) {
                          if (i === !v && "alt" !== g) return !1;
                          if (l === !m && "shift" !== g) return !1;
                          if (s) {
                            if (!p && !h) return !1
                          } else {
                            if (a === !p && "meta" !== g && "os" !== g) return !1;
                            if (u === !h && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!c || 1 !== c.length || !c.includes(g) && !c.includes(y)) || (c ? (void 0 === o && (o = ","), (Kc(n = c) ? n : n.split(o)).every((function(e) {
                          return Wc.has(e.trim().toLowerCase())
                        }))) : !c)
                      }(e, o, null == h ? void 0 : h.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != h && null != h.ignoreEventWhen && h.ignoreEventWhen(e)) return;
                      if (t && s.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == h ? void 0 : h.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == h ? void 0 : h.enabled)) return void nd(e);
                      f.current(e, o), t || (s.current = !0)
                    }
                  }))
                }
              },
              n = function(e) {
                void 0 !== e.key && ($c(Uc(e.code)), (void 0 === (null == h ? void 0 : h.keydown) && !0 !== (null == h ? void 0 : h.keyup) || null != h && h.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (Yc(Uc(e.code)), s.current = !1, null != h && h.keyup && r(e, !0))
              },
              a = i || (null == l ? void 0 : l.document) || document;
            return a.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Gc(u, null == h ? void 0 : h.splitKey).forEach((function(e) {
                return m.addHotkey(Xc(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
              })),
              function() {
                a.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), a.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Gc(u, null == h ? void 0 : h.splitKey).forEach((function(e) {
                  return m.removeHotkey(Xc(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
                }))
              }
          }
        }), [i, u, h, p]), a
      }

      function ad(e) {
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

      function sd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function ld(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sd(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ad(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sd(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function ud(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var cd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ld(ld({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) cd(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ud(e.variantClassNames, (e => ud(e, (e => e.split(" ")[0]))))
            }
          }, t
        };
      dd({
        defaultClassName: "foundry_a5x3khg",
        variantClassNames: {
          isLoading: {
            true: "foundry_a5x3khh"
          },
          fullWidth: {
            true: "foundry_a5x3khi",
            false: "foundry_a5x3khj"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      var fd = dd({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_a5x3kh0",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnuao foundry_1qqcnuap",
              secondary: "foundry_1qqcnuao foundry_1qqcnuaq",
              tertiary: "foundry_1qqcnuao foundry_1qqcnuar",
              ghost: "foundry_1qqcnuao foundry_1qqcnuas",
              danger: "foundry_1qqcnuao foundry_1qqcnuau",
              information: "foundry_1qqcnuao foundry_1qqcnuat",
              accent: "foundry_1qqcnuao foundry_1qqcnuav"
            },
            size: {
              SM: "foundry_a5x3kh9",
              MD: "foundry_a5x3kha",
              LG: "foundry_a5x3khb",
              XL: "foundry_a5x3khc"
            },
            fullWidth: {
              true: "foundry_a5x3khd",
              false: "foundry_a5x3khe"
            },
            isLoading: {
              true: "foundry_a5x3khf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        hd = r(79099),
        pd = r.t(hd, 2);
      const md = (0, g.forwardRef)((({
        testId: e,
        asChild: t,
        icon: r,
        label: n,
        appearance: o,
        fullWidth: i = !1,
        size: a = "LG",
        children: s,
        isLoading: l = !1,
        spinnerLabel: u,
        override_darkenLuminance: c = .035,
        override_textLuminance: d = .179,
        override_hoverLuminance: f = .08,
        override_pressedLuminance: h = .15,
        override_backgroundColor: p,
        override_hoverColor: m,
        override_pressedColor: b,
        override_textColor: _,
        ...E
      }, x) => {
        const P = (0, g.useRef)(null),
          S = (0, Me.UP)(P, x),
          C = (0, He.zQ)(),
          O = "string" == typeof a ? a : a?.[C] ?? a.default ?? "LG",
          {
            buttonProps: T
          } = (0, Me.sL)((0, y.v6)(E, {
            isLoading: l
          }), P);
        Le({
          refs: {
            buttonRef: P
          },
          config: {
            textLuminance: d,
            darkenLuminance: c,
            hoverLuminance: f,
            pressedLuminance: h
          },
          overrides: {
            backgroundColor: p,
            hoverColor: m,
            pressedColor: b,
            textColor: _
          },
          enabled: "accent" === o
        });
        const N = (0, y.v6)({
            className: fd({
              appearance: o,
              size: O,
              fullWidth: i,
              isLoading: l
            }),
            "data-testid": e
          }, T),
          j = pd[r],
          I = t ? w.DX : "button";
        return (0, v.jsxs)(I, {
          ref: S,
          ...N,
          children: [j && (0, v.jsx)(j, {
            label: n || "",
            size: O
          }), (0, v.jsx)(w.xV, {
            children: s
          }), l && (0, v.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, v.jsx)(rt, {
              label: u || "",
              size: O && "SM" !== O ? `inline${O}` : "inlineMD",
              hideTrack: !0
            })
          })]
        })
      }));

      function vd(e) {
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

      function yd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function gd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yd(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = vd(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yd(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function bd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var _d = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wd = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = gd(gd({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) _d(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bd(e.variantClassNames, (e => bd(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdw",
              MD: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx",
              SM: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy",
              XS: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz"
            },
            appearance: {
              default: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcd10",
              bold: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcd11",
              hyperlink: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ed = (0, g.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const a = e ? w.DX : "p",
          s = (0, y.v6)({
            className: wd({
              size: n,
              appearance: r
            })
          }, o);
        return (0, v.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      }));
      var xd = "foundry_bc732x1";
      const Pd = (0, g.forwardRef)((({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (id(e, (e => r?.(e)), [r]), (0, v.jsx)(Ed, {
        size: "XS",
        className: (0, pt.clsx)("foundry_bc732x0", {
          [xd]: t
        }),
        asChild: !0,
        children: (0, v.jsx)("kbd", {
          ref: n,
          children: e
        })
      }))));

      function Sd(e) {
        const t = g.useRef(e);
        return g.useEffect((() => {
          t.current = e
        })), g.useMemo((() => (...e) => t.current?.(...e)), [])
      }
      var Cd, Od = "dismissableLayer.update",
        Td = g.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Nd = g.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: a,
            onDismiss: s,
            ...l
          } = e, u = g.useContext(Td), [c, d] = g.useState(null), f = c?.ownerDocument ?? globalThis?.document, [, h] = g.useState({}), p = (0, Be.s)(t, (e => d(e))), m = Array.from(u.layers), [y] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), b = m.indexOf(y), _ = c ? m.indexOf(c) : -1, w = u.layersWithOutsidePointerEventsDisabled.size > 0, E = _ >= b, x = function(e, t = globalThis?.document) {
            const r = Sd(e),
              n = g.useRef(!1),
              o = g.useRef((() => {}));
            return g.useEffect((() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      Id("dismissableLayer.pointerDownOutside", r, i, {
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
              r = [...u.branches].some((e => e.contains(t)));
            E && !r && (o?.(e), a?.(e), e.defaultPrevented || s?.())
          }), f), P = function(e, t = globalThis?.document) {
            const r = Sd(e),
              n = g.useRef(!1);
            return g.useEffect((() => {
              const e = e => {
                e.target && !n.current && Id("dismissableLayer.focusOutside", r, {
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
            [...u.branches].some((e => e.contains(t))) || (i?.(e), a?.(e), e.defaultPrevented || s?.())
          }), f);
          return function(e, t = globalThis?.document) {
            const r = Sd(e);
            g.useEffect((() => {
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
            _ === u.layers.size - 1 && (n?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()))
          }), f), g.useEffect((() => {
            if (c) return r && (0 === u.layersWithOutsidePointerEventsDisabled.size && (Cd = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), jd(), () => {
              r && 1 === u.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = Cd)
            }
          }), [c, f, r, u]), g.useEffect((() => () => {
            c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), jd())
          }), [c, u]), g.useEffect((() => {
            const e = () => h({});
            return document.addEventListener(Od, e), () => document.removeEventListener(Od, e)
          }), []), (0, v.jsx)($u.sG.div, {
            ...l,
            ref: p,
            style: {
              pointerEvents: w ? E ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: Bu(e.onFocusCapture, P.onFocusCapture),
            onBlurCapture: Bu(e.onBlurCapture, P.onBlurCapture),
            onPointerDownCapture: Bu(e.onPointerDownCapture, x.onPointerDownCapture)
          })
        }));

      function jd() {
        const e = new CustomEvent(Od);
        document.dispatchEvent(e)
      }

      function Id(e, t, r, {
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
        }), n ? (0, $u.hO)(o, i) : o.dispatchEvent(i)
      }
      Nd.displayName = "DismissableLayer", g.forwardRef(((e, t) => {
        const r = g.useContext(Td),
          n = g.useRef(null),
          o = (0, Be.s)(t, n);
        return g.useEffect((() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }), [r.branches]), (0, v.jsx)($u.sG.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var Rd = b[" useId ".trim().toString()] || (() => {}),
        Dd = 0;

      function kd(e) {
        const [t, r] = g.useState(Rd());
        return zu((() => {
          e || r((e => e ?? String(Dd++)))
        }), [e]), e || (t ? `radix-${t}` : "")
      }
      const Ad = ["top", "right", "bottom", "left"],
        Ld = Math.min,
        Md = Math.max,
        Hd = Math.round,
        Bd = Math.floor,
        Vd = e => ({
          x: e,
          y: e
        }),
        Fd = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        zd = {
          start: "end",
          end: "start"
        };

      function qd(e, t, r) {
        return Md(e, Ld(t, r))
      }

      function Ud(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function Gd(e) {
        return e.split("-")[0]
      }

      function Xd(e) {
        return e.split("-")[1]
      }

      function Wd(e) {
        return "x" === e ? "y" : "x"
      }

      function Kd(e) {
        return "y" === e ? "height" : "width"
      }

      function $d(e) {
        return ["top", "bottom"].includes(Gd(e)) ? "y" : "x"
      }

      function Yd(e) {
        return Wd($d(e))
      }

      function Zd(e) {
        return e.replace(/start|end/g, (e => zd[e]))
      }

      function Qd(e) {
        return e.replace(/left|right|bottom|top/g, (e => Fd[e]))
      }

      function Jd(e) {
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

      function ef(e) {
        const {
          x: t,
          y: r,
          width: n,
          height: o
        } = e;
        return {
          width: n,
          height: o,
          top: r,
          left: t,
          right: t + n,
          bottom: r + o,
          x: t,
          y: r
        }
      }

      function tf(e, t, r) {
        let {
          reference: n,
          floating: o
        } = e;
        const i = $d(t),
          a = Yd(t),
          s = Kd(a),
          l = Gd(t),
          u = "y" === i,
          c = n.x + n.width / 2 - o.width / 2,
          d = n.y + n.height / 2 - o.height / 2,
          f = n[s] / 2 - o[s] / 2;
        let h;
        switch (l) {
          case "top":
            h = {
              x: c,
              y: n.y - o.height
            };
            break;
          case "bottom":
            h = {
              x: c,
              y: n.y + n.height
            };
            break;
          case "right":
            h = {
              x: n.x + n.width,
              y: d
            };
            break;
          case "left":
            h = {
              x: n.x - o.width,
              y: d
            };
            break;
          default:
            h = {
              x: n.x,
              y: n.y
            }
        }
        switch (Xd(t)) {
          case "start":
            h[a] -= f * (r && u ? -1 : 1);
            break;
          case "end":
            h[a] += f * (r && u ? -1 : 1)
        }
        return h
      }
      async function rf(e, t) {
        var r;
        void 0 === t && (t = {});
        const {
          x: n,
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
        } = Ud(t, e), p = Jd(h), m = s[f ? "floating" === d ? "reference" : "floating" : d], v = ef(await i.getClippingRect({
          element: null == (r = await (null == i.isElement ? void 0 : i.isElement(m))) || r ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(s.floating)),
          boundary: u,
          rootBoundary: c,
          strategy: l
        })), y = "floating" === d ? {
          x: n,
          y: o,
          width: a.floating.width,
          height: a.floating.height
        } : a.reference, g = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(s.floating)), b = await (null == i.isElement ? void 0 : i.isElement(g)) && await (null == i.getScale ? void 0 : i.getScale(g)) || {
          x: 1,
          y: 1
        }, _ = ef(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: s,
          rect: y,
          offsetParent: g,
          strategy: l
        }) : y);
        return {
          top: (v.top - _.top + p.top) / b.y,
          bottom: (_.bottom - v.bottom + p.bottom) / b.y,
          left: (v.left - _.left + p.left) / b.x,
          right: (_.right - v.right + p.right) / b.x
        }
      }

      function nf(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function of(e) {
        return Ad.some((t => e[t] >= 0))
      }

      function af() {
        return "undefined" != typeof window
      }

      function sf(e) {
        return cf(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function lf(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function uf(e) {
        var t;
        return null == (t = (cf(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function cf(e) {
        return !!af() && (e instanceof Node || e instanceof lf(e).Node)
      }

      function df(e) {
        return !!af() && (e instanceof Element || e instanceof lf(e).Element)
      }

      function ff(e) {
        return !!af() && (e instanceof HTMLElement || e instanceof lf(e).HTMLElement)
      }

      function hf(e) {
        return !(!af() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof lf(e).ShadowRoot)
      }

      function pf(e) {
        const {
          overflow: t,
          overflowX: r,
          overflowY: n,
          display: o
        } = _f(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
      }

      function mf(e) {
        return ["table", "td", "th"].includes(sf(e))
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
        const t = gf(),
          r = df(e) ? _f(e) : e;
        return ["transform", "translate", "scale", "rotate", "perspective"].some((e => !!r[e] && "none" !== r[e])) || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((e => (r.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (r.contain || "").includes(e)))
      }

      function gf() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function bf(e) {
        return ["html", "body", "#document"].includes(sf(e))
      }

      function _f(e) {
        return lf(e).getComputedStyle(e)
      }

      function wf(e) {
        return df(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function Ef(e) {
        if ("html" === sf(e)) return e;
        const t = e.assignedSlot || e.parentNode || hf(e) && e.host || uf(e);
        return hf(t) ? t.host : t
      }

      function xf(e) {
        const t = Ef(e);
        return bf(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ff(t) && pf(t) ? t : xf(t)
      }

      function Pf(e, t, r) {
        var n;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        const o = xf(e),
          i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
          a = lf(o);
        if (i) {
          const e = Sf(a);
          return t.concat(a, a.visualViewport || [], pf(o) ? o : [], e && r ? Pf(e) : [])
        }
        return t.concat(o, Pf(o, [], r))
      }

      function Sf(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function Cf(e) {
        const t = _f(e);
        let r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0;
        const o = ff(e),
          i = o ? e.offsetWidth : r,
          a = o ? e.offsetHeight : n,
          s = Hd(r) !== i || Hd(n) !== a;
        return s && (r = i, n = a), {
          width: r,
          height: n,
          $: s
        }
      }

      function Of(e) {
        return df(e) ? e : e.contextElement
      }

      function Tf(e) {
        const t = Of(e);
        if (!ff(t)) return Vd(1);
        const r = t.getBoundingClientRect(),
          {
            width: n,
            height: o,
            $: i
          } = Cf(t);
        let a = (i ? Hd(r.width) : r.width) / n,
          s = (i ? Hd(r.height) : r.height) / o;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const Nf = Vd(0);

      function jf(e) {
        const t = lf(e);
        return gf() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : Nf
      }

      function If(e, t, r, n) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        const o = e.getBoundingClientRect(),
          i = Of(e);
        let a = Vd(1);
        t && (n ? df(n) && (a = Tf(n)) : a = Tf(e));
        const s = function(e, t, r) {
          return void 0 === t && (t = !1), !(!r || t && r !== lf(e)) && t
        }(i, r, n) ? jf(i) : Vd(0);
        let l = (o.left + s.x) / a.x,
          u = (o.top + s.y) / a.y,
          c = o.width / a.x,
          d = o.height / a.y;
        if (i) {
          const e = lf(i),
            t = n && df(n) ? lf(n) : n;
          let r = e,
            o = Sf(r);
          for (; o && n && t !== r;) {
            const e = Tf(o),
              t = o.getBoundingClientRect(),
              n = _f(o),
              i = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
            l *= e.x, u *= e.y, c *= e.x, d *= e.y, l += i, u += a, r = lf(o), o = Sf(r)
          }
        }
        return ef({
          width: c,
          height: d,
          x: l,
          y: u
        })
      }

      function Rf(e, t) {
        const r = wf(e).scrollLeft;
        return t ? t.left + r : If(uf(e)).left + r
      }

      function Df(e, t, r) {
        void 0 === r && (r = !1);
        const n = e.getBoundingClientRect();
        return {
          x: n.left + t.scrollLeft - (r ? 0 : Rf(e, n)),
          y: n.top + t.scrollTop
        }
      }

      function kf(e, t, r) {
        let n;
        if ("viewport" === t) n = function(e, t) {
          const r = lf(e),
            n = uf(e),
            o = r.visualViewport;
          let i = n.clientWidth,
            a = n.clientHeight,
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
        }(e, r);
        else if ("document" === t) n = function(e) {
          const t = uf(e),
            r = wf(e),
            n = e.ownerDocument.body,
            o = Md(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
            i = Md(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
          let a = -r.scrollLeft + Rf(e);
          const s = -r.scrollTop;
          return "rtl" === _f(n).direction && (a += Md(t.clientWidth, n.clientWidth) - o), {
            width: o,
            height: i,
            x: a,
            y: s
          }
        }(uf(e));
        else if (df(t)) n = function(e, t) {
          const r = If(e, !0, "fixed" === t),
            n = r.top + e.clientTop,
            o = r.left + e.clientLeft,
            i = ff(e) ? Tf(e) : Vd(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: n * i.y
          }
        }(t, r);
        else {
          const r = jf(e);
          n = {
            x: t.x - r.x,
            y: t.y - r.y,
            width: t.width,
            height: t.height
          }
        }
        return ef(n)
      }

      function Af(e, t) {
        const r = Ef(e);
        return !(r === t || !df(r) || bf(r)) && ("fixed" === _f(r).position || Af(r, t))
      }

      function Lf(e, t, r) {
        const n = ff(t),
          o = uf(t),
          i = "fixed" === r,
          a = If(e, !0, i, t);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = Vd(0);
        if (n || !n && !i)
          if (("body" !== sf(t) || pf(o)) && (s = wf(t)), n) {
            const e = If(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && (l.x = Rf(o));
        const u = !o || n || i ? Vd(0) : Df(o, s);
        return {
          x: a.left + s.scrollLeft - l.x - u.x,
          y: a.top + s.scrollTop - l.y - u.y,
          width: a.width,
          height: a.height
        }
      }

      function Mf(e) {
        return "static" === _f(e).position
      }

      function Hf(e, t) {
        if (!ff(e) || "fixed" === _f(e).position) return null;
        if (t) return t(e);
        let r = e.offsetParent;
        return uf(e) === r && (r = r.ownerDocument.body), r
      }

      function Bf(e, t) {
        const r = lf(e);
        if (vf(e)) return r;
        if (!ff(e)) {
          let t = Ef(e);
          for (; t && !bf(t);) {
            if (df(t) && !Mf(t)) return t;
            t = Ef(t)
          }
          return r
        }
        let n = Hf(e, t);
        for (; n && mf(n) && Mf(n);) n = Hf(n, t);
        return n && bf(n) && Mf(n) && !yf(n) ? r : n || function(e) {
          let t = Ef(e);
          for (; ff(t) && !bf(t);) {
            if (yf(t)) return t;
            if (vf(t)) return null;
            t = Ef(t)
          }
          return null
        }(e) || r
      }
      const Vf = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: r,
            offsetParent: n,
            strategy: o
          } = e;
          const i = "fixed" === o,
            a = uf(n),
            s = !!t && vf(t.floating);
          if (n === a || s && i) return r;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            u = Vd(1);
          const c = Vd(0),
            d = ff(n);
          if ((d || !d && !i) && (("body" !== sf(n) || pf(a)) && (l = wf(n)), ff(n))) {
            const e = If(n);
            u = Tf(n), c.x = e.x + n.clientLeft, c.y = e.y + n.clientTop
          }
          const f = !a || d || i ? Vd(0) : Df(a, l, !0);
          return {
            width: r.width * u.x,
            height: r.height * u.y,
            x: r.x * u.x - l.scrollLeft * u.x + c.x + f.x,
            y: r.y * u.y - l.scrollTop * u.y + c.y + f.y
          }
        },
        getDocumentElement: uf,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: r,
            rootBoundary: n,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === r ? vf(t) ? [] : function(e, t) {
              const r = t.get(e);
              if (r) return r;
              let n = Pf(e, [], !1).filter((e => df(e) && "body" !== sf(e))),
                o = null;
              const i = "fixed" === _f(e).position;
              let a = i ? Ef(e) : e;
              for (; df(a) && !bf(a);) {
                const t = _f(a),
                  r = yf(a);
                r || "fixed" !== t.position || (o = null), (i ? !r && !o : !r && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || pf(a) && !r && Af(e, a)) ? n = n.filter((e => e !== a)) : o = t, a = Ef(a)
              }
              return t.set(e, n), n
            }(t, this._c) : [].concat(r), n],
            a = i[0],
            s = i.reduce(((e, r) => {
              const n = kf(t, r, o);
              return e.top = Md(n.top, e.top), e.right = Ld(n.right, e.right), e.bottom = Ld(n.bottom, e.bottom), e.left = Md(n.left, e.left), e
            }), kf(t, a, o));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
          }
        },
        getOffsetParent: Bf,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || Bf,
            r = this.getDimensions,
            n = await r(e.floating);
          return {
            reference: Lf(e.reference, await t(e.floating), e.strategy),
            floating: {
              x: 0,
              y: 0,
              width: n.width,
              height: n.height
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          const {
            width: t,
            height: r
          } = Cf(e);
          return {
            width: t,
            height: r
          }
        },
        getScale: Tf,
        isElement: df,
        isRTL: function(e) {
          return "rtl" === _f(e).direction
        }
      };

      function Ff(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const zf = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
              var r, n;
              const {
                x: o,
                y: i,
                placement: a,
                middlewareData: s
              } = t, l = await async function(e, t) {
                const {
                  placement: r,
                  platform: n,
                  elements: o
                } = e, i = await (null == n.isRTL ? void 0 : n.isRTL(o.floating)), a = Gd(r), s = Xd(r), l = "y" === $d(r), u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = Ud(t, e);
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
              return a === (null == (r = s.offset) ? void 0 : r.placement) && null != (n = s.arrow) && n.alignmentOffset ? {} : {
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
        qf = function(e) {
          return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
              const {
                x: r,
                y: n,
                placement: o
              } = t, {
                mainAxis: i = !0,
                crossAxis: a = !1,
                limiter: s = {
                  fn: e => {
                    let {
                      x: t,
                      y: r
                    } = e;
                    return {
                      x: t,
                      y: r
                    }
                  }
                },
                ...l
              } = Ud(e, t), u = {
                x: r,
                y: n
              }, c = await rf(t, l), d = $d(Gd(o)), f = Wd(d);
              let h = u[f],
                p = u[d];
              if (i) {
                const e = "y" === f ? "bottom" : "right";
                h = qd(h + c["y" === f ? "top" : "left"], h, h - c[e])
              }
              if (a) {
                const e = "y" === d ? "bottom" : "right";
                p = qd(p + c["y" === d ? "top" : "left"], p, p - c[e])
              }
              const m = s.fn({
                ...t,
                [f]: h,
                [d]: p
              });
              return {
                ...m,
                data: {
                  x: m.x - r,
                  y: m.y - n,
                  enabled: {
                    [f]: i,
                    [d]: a
                  }
                }
              }
            }
          }
        },
        Uf = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var r, n;
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
                ...v
              } = Ud(e, t);
              if (null != (r = i.arrow) && r.alignmentOffset) return {};
              const y = Gd(o),
                g = $d(s),
                b = Gd(s) === s,
                _ = await (null == l.isRTL ? void 0 : l.isRTL(u.floating)),
                w = f || (b || !m ? [Qd(s)] : function(e) {
                  const t = Qd(e);
                  return [Zd(e), t, Zd(t)]
                }(s)),
                E = "none" !== p;
              !f && E && w.push(... function(e, t, r, n) {
                const o = Xd(e);
                let i = function(e, t, r) {
                  const n = ["left", "right"],
                    o = ["right", "left"],
                    i = ["top", "bottom"],
                    a = ["bottom", "top"];
                  switch (e) {
                    case "top":
                    case "bottom":
                      return r ? t ? o : n : t ? n : o;
                    case "left":
                    case "right":
                      return t ? i : a;
                    default:
                      return []
                  }
                }(Gd(e), "start" === r, n);
                return o && (i = i.map((e => e + "-" + o)), t && (i = i.concat(i.map(Zd)))), i
              }(s, m, p, _));
              const x = [s, ...w],
                P = await rf(t, v),
                S = [];
              let C = (null == (n = i.flip) ? void 0 : n.overflows) || [];
              if (c && S.push(P[y]), d) {
                const e = function(e, t, r) {
                  void 0 === r && (r = !1);
                  const n = Xd(e),
                    o = Yd(e),
                    i = Kd(o);
                  let a = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (a = Qd(a)), [a, Qd(a)]
                }(o, a, _);
                S.push(P[e[0]], P[e[1]])
              }
              if (C = [...C, {
                  placement: o,
                  overflows: S
                }], !S.every((e => e <= 0))) {
                var O, T;
                const e = ((null == (O = i.flip) ? void 0 : O.index) || 0) + 1,
                  t = x[e];
                if (t) return {
                  data: {
                    index: e,
                    overflows: C
                  },
                  reset: {
                    placement: t
                  }
                };
                let r = null == (T = C.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : T.placement;
                if (!r) switch (h) {
                  case "bestFit": {
                    var N;
                    const e = null == (N = C.filter((e => {
                      if (E) {
                        const t = $d(e.placement);
                        return t === g || "y" === t
                      }
                      return !0
                    })).map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : N[0];
                    e && (r = e);
                    break
                  }
                  case "initialPlacement":
                    r = s
                }
                if (o !== r) return {
                  reset: {
                    placement: r
                  }
                }
              }
              return {}
            }
          }
        },
        Gf = function(e) {
          return void 0 === e && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
              var r, n;
              const {
                placement: o,
                rects: i,
                platform: a,
                elements: s
              } = t, {
                apply: l = () => {},
                ...u
              } = Ud(e, t), c = await rf(t, u), d = Gd(o), f = Xd(o), h = "y" === $d(o), {
                width: p,
                height: m
              } = i.floating;
              let v, y;
              "top" === d || "bottom" === d ? (v = d, y = f === (await (null == a.isRTL ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = d, v = "end" === f ? "top" : "bottom");
              const g = m - c.top - c.bottom,
                b = p - c.left - c.right,
                _ = Ld(m - c[v], g),
                w = Ld(p - c[y], b),
                E = !t.middlewareData.shift;
              let x = _,
                P = w;
              if (null != (r = t.middlewareData.shift) && r.enabled.x && (P = b), null != (n = t.middlewareData.shift) && n.enabled.y && (x = g), E && !f) {
                const e = Md(c.left, 0),
                  t = Md(c.right, 0),
                  r = Md(c.top, 0),
                  n = Md(c.bottom, 0);
                h ? P = p - 2 * (0 !== e || 0 !== t ? e + t : Md(c.left, c.right)) : x = m - 2 * (0 !== r || 0 !== n ? r + n : Md(c.top, c.bottom))
              }
              await l({
                ...t,
                availableWidth: P,
                availableHeight: x
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
        Xf = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: r
              } = t, {
                strategy: n = "referenceHidden",
                ...o
              } = Ud(e, t);
              switch (n) {
                case "referenceHidden": {
                  const e = nf(await rf(t, {
                    ...o,
                    elementContext: "reference"
                  }), r.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: of(e)
                    }
                  }
                }
                case "escaped": {
                  const e = nf(await rf(t, {
                    ...o,
                    altBoundary: !0
                  }), r.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: of(e)
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
              x: r,
              y: n,
              placement: o,
              rects: i,
              platform: a,
              elements: s,
              middlewareData: l
            } = t, {
              element: u,
              padding: c = 0
            } = Ud(e, t) || {};
            if (null == u) return {};
            const d = Jd(c),
              f = {
                x: r,
                y: n
              },
              h = Yd(o),
              p = Kd(h),
              m = await a.getDimensions(u),
              v = "y" === h,
              y = v ? "top" : "left",
              g = v ? "bottom" : "right",
              b = v ? "clientHeight" : "clientWidth",
              _ = i.reference[p] + i.reference[h] - f[h] - i.floating[p],
              w = f[h] - i.reference[h],
              E = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(u));
            let x = E ? E[b] : 0;
            x && await (null == a.isElement ? void 0 : a.isElement(E)) || (x = s.floating[b] || i.floating[p]);
            const P = _ / 2 - w / 2,
              S = x / 2 - m[p] / 2 - 1,
              C = Ld(d[y], S),
              O = Ld(d[g], S),
              T = C,
              N = x - m[p] - O,
              j = x / 2 - m[p] / 2 + P,
              I = qd(T, j, N),
              R = !l.arrow && null != Xd(o) && j !== I && i.reference[p] / 2 - (j < T ? C : O) - m[p] / 2 < 0,
              D = R ? j < T ? j - T : j - N : 0;
            return {
              [h]: f[h] + D,
              data: {
                [h]: I,
                centerOffset: j - I - D,
                ...R && {
                  alignmentOffset: D
                }
              },
              reset: R
            }
          }
        }),
        Kf = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: r,
                y: n,
                placement: o,
                rects: i,
                middlewareData: a
              } = t, {
                offset: s = 0,
                mainAxis: l = !0,
                crossAxis: u = !0
              } = Ud(e, t), c = {
                x: r,
                y: n
              }, d = $d(o), f = Wd(d);
              let h = c[f],
                p = c[d];
              const m = Ud(s, t),
                v = "number" == typeof m ? {
                  mainAxis: m,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...m
                };
              if (l) {
                const e = "y" === f ? "height" : "width",
                  t = i.reference[f] - i.floating[e] + v.mainAxis,
                  r = i.reference[f] + i.reference[e] - v.mainAxis;
                h < t ? h = t : h > r && (h = r)
              }
              if (u) {
                var y, g;
                const e = "y" === f ? "width" : "height",
                  t = ["top", "left"].includes(Gd(o)),
                  r = i.reference[d] - i.floating[e] + (t && (null == (y = a.offset) ? void 0 : y[d]) || 0) + (t ? 0 : v.crossAxis),
                  n = i.reference[d] + i.reference[e] + (t ? 0 : (null == (g = a.offset) ? void 0 : g[d]) || 0) - (t ? v.crossAxis : 0);
                p < r ? p = r : p > n && (p = n)
              }
              return {
                [f]: h,
                [d]: p
              }
            }
          }
        },
        $f = (e, t, r) => {
          const n = new Map,
            o = {
              platform: Vf,
              ...r
            },
            i = {
              ...o.platform,
              _c: n
            };
          return (async (e, t, r) => {
            const {
              placement: n = "bottom",
              strategy: o = "absolute",
              middleware: i = [],
              platform: a
            } = r, s = i.filter(Boolean), l = await (null == a.isRTL ? void 0 : a.isRTL(t));
            let u = await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: c,
                y: d
              } = tf(u, n, l),
              f = n,
              h = {},
              p = 0;
            for (let r = 0; r < s.length; r++) {
              const {
                name: i,
                fn: m
              } = s[r], {
                x: v,
                y,
                data: g,
                reset: b
              } = await m({
                x: c,
                y: d,
                initialPlacement: n,
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
              c = null != v ? v : c, d = null != y ? y : d, h = {
                ...h,
                [i]: {
                  ...h[i],
                  ...g
                }
              }, b && p <= 50 && (p++, "object" == typeof b && (b.placement && (f = b.placement), b.rects && (u = !0 === b.rects ? await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : b.rects), ({
                x: c,
                y: d
              } = tf(u, f, l))), r = -1)
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
      var Yf = "undefined" != typeof document ? g.useLayoutEffect : g.useEffect;

      function Zf(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let r, n, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (r = e.length, r !== t.length) return !1;
            for (n = r; 0 != n--;)
              if (!Zf(e[n], t[n])) return !1;
            return !0
          }
          if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
          for (n = r; 0 != n--;)
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 != n--;) {
            const r = o[n];
            if (!("_owner" === r && e.$$typeof || Zf(e[r], t[r]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Qf(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Jf(e, t) {
        const r = Qf(e);
        return Math.round(t * r) / r
      }

      function eh(e) {
        const t = g.useRef(e);
        return Yf((() => {
          t.current = e
        })), t
      }
      const th = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: r,
              padding: n
            } = "function" == typeof e ? e(t) : e;
            return r && (o = r, {}.hasOwnProperty.call(o, "current")) ? null != r.current ? Wf({
              element: r.current,
              padding: n
            }).fn(t) : {} : r ? Wf({
              element: r,
              padding: n
            }).fn(t) : {};
            var o
          }
        }),
        rh = (e, t) => ({
          ...zf(e),
          options: [e, t]
        }),
        nh = (e, t) => ({
          ...qf(e),
          options: [e, t]
        }),
        oh = (e, t) => ({
          ...Kf(e),
          options: [e, t]
        }),
        ih = (e, t) => ({
          ...Uf(e),
          options: [e, t]
        }),
        ah = (e, t) => ({
          ...Gf(e),
          options: [e, t]
        }),
        sh = (e, t) => ({
          ...Xf(e),
          options: [e, t]
        }),
        lh = (e, t) => ({
          ...th(e),
          options: [e, t]
        });
      var uh = g.forwardRef(((e, t) => {
        const {
          children: r,
          width: n = 10,
          height: o = 5,
          ...i
        } = e;
        return (0, v.jsx)($u.sG.svg, {
          ...i,
          ref: t,
          width: n,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild ? r : (0, v.jsx)("polygon", {
            points: "0,0 30,0 15,10"
          })
        })
      }));
      uh.displayName = "Arrow";
      var ch = uh,
        dh = "Popper",
        [fh, hh] = Vu(dh),
        [ph, mh] = fh(dh),
        vh = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = g.useState(null);
          return (0, v.jsx)(ph, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      vh.displayName = dh;
      var yh = "PopperAnchor",
        gh = g.forwardRef(((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, i = mh(yh, r), a = g.useRef(null), s = (0, Be.s)(t, a);
          return g.useEffect((() => {
            i.onAnchorChange(n?.current || a.current)
          })), n ? null : (0, v.jsx)($u.sG.div, {
            ...o,
            ref: s
          })
        }));
      gh.displayName = yh;
      var bh = "PopperContent",
        [_h, wh] = fh(bh),
        Eh = g.forwardRef(((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: a = 0,
            arrowPadding: s = 0,
            avoidCollisions: l = !0,
            collisionBoundary: u = [],
            collisionPadding: c = 0,
            sticky: d = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: h = "optimized",
            onPlaced: p,
            ...m
          } = e, y = mh(bh, r), [b, _] = g.useState(null), w = (0, Be.s)(t, (e => _(e))), [E, x] = g.useState(null), P = Ku(E), S = P?.width ?? 0, C = P?.height ?? 0, O = n + ("center" !== i ? "-" + i : ""), T = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, N = Array.isArray(u) ? u : [u], j = N.length > 0, I = {
            padding: T,
            boundary: N.filter(Ch),
            altBoundary: j
          }, {
            refs: R,
            floatingStyles: D,
            placement: k,
            isPositioned: A,
            middlewareData: L
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
              open: u
            } = e, [c, d] = g.useState({
              x: 0,
              y: 0,
              strategy: r,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, h] = g.useState(n);
            Zf(f, n) || h(n);
            const [p, m] = g.useState(null), [v, y] = g.useState(null), b = g.useCallback((e => {
              e !== x.current && (x.current = e, m(e))
            }), []), _ = g.useCallback((e => {
              e !== P.current && (P.current = e, y(e))
            }), []), w = i || p, E = a || v, x = g.useRef(null), P = g.useRef(null), S = g.useRef(c), C = null != l, O = eh(l), T = eh(o), N = eh(u), j = g.useCallback((() => {
              if (!x.current || !P.current) return;
              const e = {
                placement: t,
                strategy: r,
                middleware: f
              };
              T.current && (e.platform = T.current), $f(x.current, P.current, e).then((e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== N.current
                };
                I.current && !Zf(S.current, t) && (S.current = t, $i.flushSync((() => {
                  d(t)
                })))
              }))
            }), [f, t, r, T, N]);
            Yf((() => {
              !1 === u && S.current.isPositioned && (S.current.isPositioned = !1, d((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [u]);
            const I = g.useRef(!1);
            Yf((() => (I.current = !0, () => {
              I.current = !1
            })), []), Yf((() => {
              if (w && (x.current = w), E && (P.current = E), w && E) {
                if (O.current) return O.current(w, E, j);
                j()
              }
            }), [w, E, j, O, C]);
            const R = g.useMemo((() => ({
                reference: x,
                floating: P,
                setReference: b,
                setFloating: _
              })), [b, _]),
              D = g.useMemo((() => ({
                reference: w,
                floating: E
              })), [w, E]),
              k = g.useMemo((() => {
                const e = {
                  position: r,
                  left: 0,
                  top: 0
                };
                if (!D.floating) return e;
                const t = Jf(D.floating, c.x),
                  n = Jf(D.floating, c.y);
                return s ? {
                  ...e,
                  transform: "translate(" + t + "px, " + n + "px)",
                  ...Qf(D.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: r,
                  left: t,
                  top: n
                }
              }), [r, s, D.floating, c.x, c.y]);
            return g.useMemo((() => ({
              ...c,
              update: j,
              refs: R,
              elements: D,
              floatingStyles: k
            })), [c, j, R, D, k])
          }({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...e) => function(e, t, r, n) {
              void 0 === n && (n = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: i = !0,
                elementResize: a = "function" == typeof ResizeObserver,
                layoutShift: s = "function" == typeof IntersectionObserver,
                animationFrame: l = !1
              } = n, u = Of(e), c = o || i ? [...u ? Pf(u) : [], ...Pf(t)] : [];
              c.forEach((e => {
                o && e.addEventListener("scroll", r, {
                  passive: !0
                }), i && e.addEventListener("resize", r)
              }));
              const d = u && s ? function(e, t) {
                let r, n = null;
                const o = uf(e);

                function i() {
                  var e;
                  clearTimeout(r), null == (e = n) || e.disconnect(), n = null
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
                    rootMargin: -Bd(d) + "px " + -Bd(o.clientWidth - (c + f)) + "px " + -Bd(o.clientHeight - (d + h)) + "px " + -Bd(c) + "px",
                    threshold: Md(0, Ld(1, l)) || 1
                  };
                  let m = !0;

                  function v(t) {
                    const n = t[0].intersectionRatio;
                    if (n !== l) {
                      if (!m) return a();
                      n ? a(!1, n) : r = setTimeout((() => {
                        a(!1, 1e-7)
                      }), 1e3)
                    }
                    1 !== n || Ff(u, e.getBoundingClientRect()) || a(), m = !1
                  }
                  try {
                    n = new IntersectionObserver(v, {
                      ...p,
                      root: o.ownerDocument
                    })
                  } catch (e) {
                    n = new IntersectionObserver(v, p)
                  }
                  n.observe(e)
                }(!0), i
              }(u, r) : null;
              let f, h = -1,
                p = null;
              a && (p = new ResizeObserver((e => {
                let [n] = e;
                n && n.target === u && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame((() => {
                  var e;
                  null == (e = p) || e.observe(t)
                }))), r()
              })), u && !l && p.observe(u), p.observe(t));
              let m = l ? If(e) : null;
              return l && function t() {
                const n = If(e);
                m && !Ff(m, n) && r(), m = n, f = requestAnimationFrame(t)
              }(), r(), () => {
                var e;
                c.forEach((e => {
                  o && e.removeEventListener("scroll", r), i && e.removeEventListener("resize", r)
                })), null == d || d(), null == (e = p) || e.disconnect(), p = null, l && cancelAnimationFrame(f)
              }
            }(...e, {
              animationFrame: "always" === h
            }),
            elements: {
              reference: y.anchor
            },
            middleware: [rh({
              mainAxis: o + C,
              alignmentAxis: a
            }), l && nh({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === d ? oh() : void 0,
              ...I
            }), l && ih({
              ...I
            }), ah({
              ...I,
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
            }), E && lh({
              element: E,
              padding: s
            }), Oh({
              arrowWidth: S,
              arrowHeight: C
            }), f && sh({
              strategy: "referenceHidden",
              ...I
            })]
          }), [M, H] = Th(k), B = Sd(p);
          zu((() => {
            A && B?.()
          }), [A, B]);
          const V = L.arrow?.x,
            F = L.arrow?.y,
            z = 0 !== L.arrow?.centerOffset,
            [q, U] = g.useState();
          return zu((() => {
            b && U(window.getComputedStyle(b).zIndex)
          }), [b]), (0, v.jsx)("div", {
            ref: R.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...D,
              transform: A ? D.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: q,
              "--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(" "),
              ...L.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, v.jsx)(_h, {
              scope: r,
              placedSide: M,
              onArrowChange: x,
              arrowX: V,
              arrowY: F,
              shouldHideArrow: z,
              children: (0, v.jsx)($u.sG.div, {
                "data-side": M,
                "data-align": H,
                ...m,
                ref: w,
                style: {
                  ...m.style,
                  animation: A ? void 0 : "none"
                }
              })
            })
          })
        }));
      Eh.displayName = bh;
      var xh = "PopperArrow",
        Ph = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Sh = g.forwardRef((function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = wh(xh, r), i = Ph[o.placedSide];
          return (0, v.jsx)("span", {
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
            children: (0, v.jsx)(ch, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        }));

      function Ch(e) {
        return null !== e
      }
      Sh.displayName = xh;
      var Oh = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [l, u] = Th(r), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [u], d = (o.arrow?.x ?? 0) + a / 2, f = (o.arrow?.y ?? 0) + s / 2;
          let h = "",
            p = "";
          return "bottom" === l ? (h = i ? c : `${d}px`, p = -s + "px") : "top" === l ? (h = i ? c : `${d}px`, p = `${n.floating.height+s}px`) : "right" === l ? (h = -s + "px", p = i ? c : `${f}px`) : "left" === l && (h = `${n.floating.width+s}px`, p = i ? c : `${f}px`), {
            data: {
              x: h,
              y: p
            }
          }
        }
      });

      function Th(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var Nh = vh,
        jh = gh,
        Ih = Eh,
        Rh = Sh,
        Dh = g.forwardRef(((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, i] = g.useState(!1);
          zu((() => i(!0)), []);
          const a = r || o && globalThis?.document?.body;
          return a ? $i.createPortal((0, v.jsx)($u.sG.div, {
            ...n,
            ref: t
          }), a) : null
        }));
      Dh.displayName = "Portal";
      var kh = e => {
        const {
          present: t,
          children: r
        } = e, n = function(e) {
          const [t, r] = g.useState(), n = g.useRef(null), o = g.useRef(e), i = g.useRef("none"), a = e ? "mounted" : "unmounted", [s, l] = function(e, t) {
            return g.useReducer(((e, r) => t[e][r] ?? e), e)
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
          return g.useEffect((() => {
            const e = Ah(n.current);
            i.current = "mounted" === s ? e : "none"
          }), [s]), zu((() => {
            const t = n.current,
              r = o.current;
            if (r !== e) {
              const n = i.current,
                a = Ah(t);
              l(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : r && n !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, l]), zu((() => {
            if (t) {
              let e;
              const r = t.ownerDocument.defaultView ?? window,
                a = i => {
                  const a = Ah(n.current).includes(i.animationName);
                  if (i.target === t && a && (l("ANIMATION_END"), !o.current)) {
                    const n = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = r.setTimeout((() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                    }))
                  }
                },
                s = e => {
                  e.target === t && (i.current = Ah(n.current))
                };
              return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", a), t.addEventListener("animationend", a), () => {
                r.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", a), t.removeEventListener("animationend", a)
              }
            }
            l("ANIMATION_END")
          }), [t, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(s),
            ref: g.useCallback((e => {
              n.current = e ? getComputedStyle(e) : null, r(e)
            }), [])
          }
        }(t), o = "function" == typeof r ? r({
          present: n.isPresent
        }) : g.Children.only(r), i = (0, Be.s)(n.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
          return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof r || n.isPresent ? g.cloneElement(o, {
          ref: i
        }) : null
      };

      function Ah(e) {
        return e?.animationName || "none"
      }
      kh.displayName = "Presence";
      var Lh = r(69055),
        [Mh, Hh] = Vu("Tooltip", [hh]),
        Bh = hh(),
        Vh = "TooltipProvider",
        Fh = 700,
        zh = "tooltip.open",
        [qh, Uh] = Mh(Vh),
        Gh = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Fh,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, a = g.useRef(!0), s = g.useRef(!1), l = g.useRef(0);
          return g.useEffect((() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }), []), (0, v.jsx)(qh, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: r,
            onOpen: g.useCallback((() => {
              window.clearTimeout(l.current), a.current = !1
            }), []),
            onClose: g.useCallback((() => {
              window.clearTimeout(l.current), l.current = window.setTimeout((() => a.current = !0), n)
            }), [n]),
            isPointerInTransitRef: s,
            onPointerInTransitChange: g.useCallback((e => {
              s.current = e
            }), []),
            disableHoverableContent: o,
            children: i
          })
        };
      Gh.displayName = Vh;
      var Xh = "Tooltip",
        [Wh, Kh] = Mh(Xh),
        $h = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: a,
            delayDuration: s
          } = e, l = Uh(Xh, e.__scopeTooltip), u = Bh(t), [c, d] = g.useState(null), f = kd(), h = g.useRef(0), p = a ?? l.disableHoverableContent, m = s ?? l.delayDuration, y = g.useRef(!1), [b, _] = Uu({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(zh))) : l.onClose(), i?.(e)
            },
            caller: Xh
          }), w = g.useMemo((() => b ? y.current ? "delayed-open" : "instant-open" : "closed"), [b]), E = g.useCallback((() => {
            window.clearTimeout(h.current), h.current = 0, y.current = !1, _(!0)
          }), [_]), x = g.useCallback((() => {
            window.clearTimeout(h.current), h.current = 0, _(!1)
          }), [_]), P = g.useCallback((() => {
            window.clearTimeout(h.current), h.current = window.setTimeout((() => {
              y.current = !0, _(!0), h.current = 0
            }), m)
          }), [m, _]);
          return g.useEffect((() => () => {
            h.current && (window.clearTimeout(h.current), h.current = 0)
          }), []), (0, v.jsx)(Nh, {
            ...u,
            children: (0, v.jsx)(Wh, {
              scope: t,
              contentId: f,
              open: b,
              stateAttribute: w,
              trigger: c,
              onTriggerChange: d,
              onTriggerEnter: g.useCallback((() => {
                l.isOpenDelayedRef.current ? P() : E()
              }), [l.isOpenDelayedRef, P, E]),
              onTriggerLeave: g.useCallback((() => {
                p ? x() : (window.clearTimeout(h.current), h.current = 0)
              }), [x, p]),
              onOpen: E,
              onClose: x,
              disableHoverableContent: p,
              children: r
            })
          })
        };
      $h.displayName = Xh;
      var Yh = "TooltipTrigger",
        Zh = g.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Kh(Yh, r), i = Uh(Yh, r), a = Bh(r), s = g.useRef(null), l = (0, Be.s)(t, s, o.onTriggerChange), u = g.useRef(!1), c = g.useRef(!1), d = g.useCallback((() => u.current = !1), []);
          return g.useEffect((() => () => document.removeEventListener("pointerup", d)), [d]), (0, v.jsx)(jh, {
            asChild: !0,
            ...a,
            children: (0, v.jsx)($u.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: Bu(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (c.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              })),
              onPointerLeave: Bu(e.onPointerLeave, (() => {
                o.onTriggerLeave(), c.current = !1
              })),
              onPointerDown: Bu(e.onPointerDown, (() => {
                o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", d, {
                  once: !0
                })
              })),
              onFocus: Bu(e.onFocus, (() => {
                u.current || o.onOpen()
              })),
              onBlur: Bu(e.onBlur, o.onClose),
              onClick: Bu(e.onClick, o.onClose)
            })
          })
        }));
      Zh.displayName = Yh;
      var Qh = "TooltipPortal",
        [Jh, ep] = Mh(Qh, {
          forceMount: void 0
        }),
        tp = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = Kh(Qh, t);
          return (0, v.jsx)(Jh, {
            scope: t,
            forceMount: r,
            children: (0, v.jsx)(kh, {
              present: r || i.open,
              children: (0, v.jsx)(Dh, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      tp.displayName = Qh;
      var rp = "TooltipContent",
        np = g.forwardRef(((e, t) => {
          const r = ep(rp, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...i
            } = e,
            a = Kh(rp, e.__scopeTooltip);
          return (0, v.jsx)(kh, {
            present: n || a.open,
            children: a.disableHoverableContent ? (0, v.jsx)(lp, {
              side: o,
              ...i,
              ref: t
            }) : (0, v.jsx)(op, {
              side: o,
              ...i,
              ref: t
            })
          })
        })),
        op = g.forwardRef(((e, t) => {
          const r = Kh(rp, e.__scopeTooltip),
            n = Uh(rp, e.__scopeTooltip),
            o = g.useRef(null),
            i = (0, Be.s)(t, o),
            [a, s] = g.useState(null),
            {
              trigger: l,
              onClose: u
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: d
            } = n,
            f = g.useCallback((() => {
              s(null), d(!1)
            }), [d]),
            h = g.useCallback(((e, t) => {
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
              s(i), d(!0)
            }), [d]);
          return g.useEffect((() => () => f()), [f]), g.useEffect((() => {
            if (l && c) {
              const e = e => h(e, c),
                t = e => h(e, l);
              return l.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }), [l, c, h, f]), g.useEffect((() => {
            if (a) {
              const e = e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = l?.contains(t) || c?.contains(t),
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
                        u = a.y,
                        c = s.x,
                        d = s.y;
                      u > n != d > n && r < (c - l) * (n - u) / (d - u) + l && (o = !o)
                    }
                    return o
                  }(r, a);
                n ? f() : o && (f(), u())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }), [l, c, a, u, f]), (0, v.jsx)(lp, {
            ...e,
            ref: i
          })
        })),
        [ip, ap] = Mh(Xh, {
          isInside: !1
        }),
        sp = (0, Yu.Dc)("TooltipContent"),
        lp = g.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            ...s
          } = e, l = Kh(rp, r), u = Bh(r), {
            onClose: c
          } = l;
          return g.useEffect((() => (document.addEventListener(zh, c), () => document.removeEventListener(zh, c))), [c]), g.useEffect((() => {
            if (l.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(l.trigger) && c()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }), [l.trigger, c]), (0, v.jsx)(Nd, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, v.jsxs)(Ih, {
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
              children: [(0, v.jsx)(sp, {
                children: n
              }), (0, v.jsx)(ip, {
                scope: r,
                isInside: !0,
                children: (0, v.jsx)(Lh.bL, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        }));
      np.displayName = rp;
      var up = "TooltipArrow",
        cp = g.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Bh(r);
          return ap(up, r).isInside ? null : (0, v.jsx)(Rh, {
            ...o,
            ...n,
            ref: t
          })
        }));
      cp.displayName = up;
      var dp = Gh,
        fp = $h,
        hp = Zh,
        pp = tp,
        mp = np,
        vp = cp;
      const yp = (0, g.createContext)(null);

      function gp() {
        const e = (0, g.useContext)(yp);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const bp = ({
          children: e,
          delayDuration: t,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [i = !1, a] = (0, Me.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, v.jsx)(dp, {
            delayDuration: t,
            children: (0, v.jsx)(yp.Provider, {
              value: {
                isOpen: i,
                ...o
              },
              children: (0, v.jsx)(fp, {
                open: i,
                onOpenChange: a,
                children: e
              })
            })
          })
        },
        _p = (0, g.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => (0, v.jsx)(hp, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        }))),
        wp = (0, g.forwardRef)((({
          testId: e,
          children: t,
          collisionBoundary: r,
          collisionPadding: n,
          onEscapeKeyDown: o,
          onPointerDownOutside: i,
          side: a = "top",
          sideOffset: s = 8,
          align: l = "center",
          alignOffset: u = 0,
          avoidCollisions: c = !0,
          sticky: d = "partial",
          ...f
        }, h) => {
          const {
            isOpen: p
          } = gp(), m = (0, Me.ZC)(p), g = Fi({
            opacity: p ? 1 : 0,
            immediate: p && !m
          }), b = (0, y.v6)({
            className: "foundry_h3lgaa0 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy"
          }, f);
          return (0, v.jsx)(mp, {
            forceMount: !0,
            "data-testid": e,
            side: a,
            align: l,
            sticky: d,
            sideOffset: s,
            alignOffset: u,
            avoidCollisions: c,
            collisionPadding: n,
            collisionBoundary: r,
            onEscapeKeyDown: o,
            onPointerDownOutside: i,
            asChild: !0,
            children: (0, v.jsx)(ua.div, {
              style: g,
              ...b,
              ref: h,
              children: t
            })
          })
        })),
        Ep = (0, g.forwardRef)((({
          testId: e
        }, t) => {
          const r = (0, y.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, v.jsx)(vp, {
            ...r,
            ref: t
          })
        })),
        xp = pp;
      var Pp = "foundry_bwy1ds1",
        Sp = "foundry_bwy1dsg",
        Cp = "foundry_bwy1dsf";
      const Op = e => {
          e.preventDefault?.()
        },
        Tp = e => {
          const {
            delayDuration: t,
            content: r,
            children: n,
            ...o
          } = e;
          return (0, v.jsxs)(bp, {
            delayDuration: t,
            children: [(0, v.jsx)(_p, {
              children: n
            }), (0, v.jsxs)(wp, {
              ...o,
              children: [r, (0, v.jsx)(Ep, {})]
            })]
          })
        },
        Np = (0, g.forwardRef)((({
          onClose: e,
          onDownload: t,
          zoomLevel: r,
          zoomIn: n,
          zoomOut: o,
          zoomTo: i,
          minZoomLevel: a,
          maxZoomLevel: s,
          canZoomIn: l,
          canZoomOut: u,
          resetZoom: c,
          caption: d,
          showDownloadButton: f,
          defaultZoomLevel: h,
          showZoomControls: p
        }, m) => {
          const y = Su(),
            g = (0, Me.Ub)("screen and (max-width: 1024px)"),
            b = r !== h,
            _ = g ? "MD" : "XL",
            w = Fi({
              opacity: b ? 1 : 0,
              immediate: (0, Me.jt)()
            });
          id(["+", "=", "add", "plus"], (() => n?.()), {
            preventDefault: !0,
            enabled: p
          }), id(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0,
            enabled: p
          }), id("r", (() => c?.()), {
            preventDefault: !0,
            enabled: p
          });
          const E = (0, Me.rl)() && g;
          return (0, v.jsx)(rd, {
            children: (0, v.jsxs)("div", {
              className: "foundry_bwy1ds0",
              ref: m,
              children: [(0, v.jsx)(Tp, {
                side: "right",
                delayDuration: 0,
                onPointerDownOutside: Op,
                content: (0, v.jsxs)("div", {
                  className: Cp,
                  children: [y.formatMessage(Nc), (0, v.jsx)(Ed, {
                    size: "XS",
                    className: Sp,
                    children: y.formatMessage(jc, {
                      shortcut: (0, v.jsx)(Pd, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, v.jsx)(md, {
                  size: _,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: y.formatMessage(Nc),
                  className: (0, pt.clsx)(Pp, "foundry_bwy1ds2"),
                  onPress: e
                })
              }), (0, v.jsxs)("div", {
                className: "foundry_bwy1ds3",
                children: [!E && p && (0, v.jsxs)(v.Fragment, {
                  children: [(0, v.jsxs)("div", {
                    className: "foundry_bwy1ds4",
                    children: [(0, v.jsx)(Tp, {
                      side: "left",
                      delayDuration: 0,
                      onPointerDownOutside: Op,
                      content: (0, v.jsxs)("div", {
                        className: Cp,
                        children: [y.formatMessage(Ic), (0, v.jsx)(Ed, {
                          size: "XS",
                          className: Sp,
                          children: y.formatMessage(Rc, {
                            shortcut: (0, v.jsx)(Pd, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, v.jsx)(md, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: y.formatMessage(Ic),
                        className: (0, pt.clsx)(Pp, "foundry_bwy1ds5"),
                        onPress: () => n(),
                        isDisabled: !l
                      })
                    }), (0, v.jsxs)(Sc, {
                      className: "foundry_bwy1dsa",
                      value: [r],
                      max: s,
                      min: a,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => i?.(e[0]),
                      children: [(0, v.jsx)(Cc, {
                        className: "foundry_bwy1dsb",
                        children: (0, v.jsx)(Oc, {
                          className: "foundry_bwy1dsc"
                        })
                      }), (0, v.jsx)(Tp, {
                        side: "left",
                        delayDuration: 0,
                        onPointerDownOutside: Op,
                        content: y.formatMessage(Hc, {
                          zoom: r.toFixed(0)
                        }),
                        children: (0, v.jsx)(Tc, {
                          className: "foundry_bwy1dsd",
                          "aria-label": y.formatMessage(Mc),
                          children: (0, v.jsx)("span", {
                            className: "foundry_bwy1dse"
                          })
                        })
                      })]
                    }), (0, v.jsx)(Tp, {
                      side: "left",
                      delayDuration: 0,
                      onPointerDownOutside: Op,
                      content: (0, v.jsxs)("div", {
                        className: Cp,
                        children: [y.formatMessage(Dc), (0, v.jsx)(Ed, {
                          size: "XS",
                          className: Sp,
                          children: y.formatMessage(kc, {
                            shortcut: (0, v.jsx)(Pd, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, v.jsx)(md, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: y.formatMessage(Dc),
                        className: (0, pt.clsx)(Pp, "foundry_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !u
                      })
                    })]
                  }), (0, v.jsx)(ua.div, {
                    style: w,
                    children: (0, v.jsx)(Tp, {
                      side: "left",
                      delayDuration: 0,
                      onPointerDownOutside: Op,
                      content: (0, v.jsxs)("div", {
                        className: Cp,
                        children: [y.formatMessage(Ac), (0, v.jsx)(Ed, {
                          size: "XS",
                          className: Sp,
                          children: y.formatMessage(Lc, {
                            shortcut: (0, v.jsx)(Pd, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, v.jsx)(md, {
                        size: _,
                        appearance: "tertiary",
                        icon: "Undo",
                        label: y.formatMessage(Ac),
                        className: (0, pt.clsx)(Pp, "foundry_bwy1ds7"),
                        onPress: c,
                        isDisabled: !b,
                        "aria-hidden": !b
                      })
                    })
                  })]
                }), f && E && (0, v.jsx)(Tp, {
                  side: "left",
                  delayDuration: 0,
                  onPointerDownOutside: Op,
                  content: y.formatMessage(Vc),
                  children: (0, v.jsx)(md, {
                    size: _,
                    appearance: "tertiary",
                    icon: "Download",
                    label: y.formatMessage(Bc),
                    className: Pp,
                    onPress: e
                  })
                })]
              }), (0, v.jsxs)("div", {
                className: "foundry_bwy1ds8",
                children: [d && (0, v.jsxs)(v.Fragment, {
                  children: [(0, v.jsx)("div", {
                    className: "foundry_bwy1dsh"
                  }), (0, v.jsx)(Ed, {
                    size: "SM",
                    "aria-hidden": !0,
                    asChild: "string" != typeof d,
                    children: d
                  })]
                }), f && !E && (0, v.jsx)("div", {
                  className: "foundry_bwy1ds9",
                  children: (0, v.jsx)(Tp, {
                    side: "left",
                    delayDuration: 0,
                    onPointerDownOutside: Op,
                    content: y.formatMessage(Vc),
                    children: (0, v.jsx)(md, {
                      size: _,
                      appearance: "tertiary",
                      icon: "Download",
                      label: y.formatMessage(Bc),
                      className: Pp,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        }));
      var jp = "foundry_1a74xwb4",
        Ip = "focusScope.autoFocusOnMount",
        Rp = "focusScope.autoFocusOnUnmount",
        Dp = {
          bubbles: !1,
          cancelable: !0
        },
        kp = g.forwardRef(((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...a
          } = e, [s, l] = g.useState(null), u = Sd(o), c = Sd(i), d = g.useRef(null), f = (0, Be.s)(t, (e => l(e))), h = g.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          g.useEffect((() => {
            if (n) {
              let e = function(e) {
                  if (h.paused || !s) return;
                  const t = e.target;
                  s.contains(t) ? d.current = t : Hp(d.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (h.paused || !s) return;
                  const t = e.relatedTarget;
                  null !== t && (s.contains(t) || Hp(d.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Hp(s)
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
          }), [n, s, h.paused]), g.useEffect((() => {
            if (s) {
              Bp.add(h);
              const e = document.activeElement;
              if (!s.contains(e)) {
                const t = new CustomEvent(Ip, Dp);
                s.addEventListener(Ip, u), s.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (Hp(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(Ap(s).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && Hp(s))
              }
              return () => {
                s.removeEventListener(Ip, u), setTimeout((() => {
                  const t = new CustomEvent(Rp, Dp);
                  s.addEventListener(Rp, c), s.dispatchEvent(t), t.defaultPrevented || Hp(e ?? document.body, {
                    select: !0
                  }), s.removeEventListener(Rp, c), Bp.remove(h)
                }), 0)
              }
            }
          }), [s, u, c, h]);
          const p = g.useCallback((e => {
            if (!r && !n) return;
            if (h.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, i] = function(e) {
                  const t = Ap(e);
                  return [Lp(t, e), Lp(t.reverse(), e)]
                }(t);
              n && i ? e.shiftKey || o !== i ? e.shiftKey && o === n && (e.preventDefault(), r && Hp(i, {
                select: !0
              })) : (e.preventDefault(), r && Hp(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [r, n, h.paused]);
          return (0, v.jsx)($u.sG.div, {
            tabIndex: -1,
            ...a,
            ref: f,
            onKeyDown: p
          })
        }));

      function Ap(e) {
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

      function Lp(e, t) {
        for (const r of e)
          if (!Mp(r, {
              upTo: t
            })) return r
      }

      function Mp(e, {
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

      function Hp(e, {
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
      kp.displayName = "FocusScope";
      var Bp = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = Vp(e, t), e.unshift(t)
          },
          remove(t) {
            e = Vp(e, t), e[0]?.resume()
          }
        }
      }();

      function Vp(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var Fp = 0;

      function zp() {
        g.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? qp()), document.body.insertAdjacentElement("beforeend", e[1] ?? qp()), Fp++, () => {
            1 === Fp && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), Fp--
          }
        }), [])
      }

      function qp() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var Up = r(97359),
        Gp = new WeakMap,
        Xp = new WeakMap,
        Wp = {},
        Kp = 0,
        $p = function(e) {
          return e && (e.host || $p(e.parentNode))
        },
        Yp = function(e, t, r) {
          void 0 === r && (r = "data-aria-hidden");
          var n = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), function(e, t, r, n) {
            var o = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var r = $p(t);
                return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            Wp[r] || (Wp[r] = new WeakMap);
            var i = Wp[r],
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
                  var t = e.getAttribute(n),
                    o = null !== t && "false" !== t,
                    l = (Gp.get(e) || 0) + 1,
                    u = (i.get(e) || 0) + 1;
                  Gp.set(e, l), i.set(e, u), a.push(e), 1 === l && o && Xp.set(e, !0), 1 === u && e.setAttribute(r, "true"), o || e.setAttribute(n, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              }))
            };
            return c(t), s.clear(), Kp++,
              function() {
                a.forEach((function(e) {
                  var t = Gp.get(e) - 1,
                    o = i.get(e) - 1;
                  Gp.set(e, t), i.set(e, o), t || (Xp.has(e) || e.removeAttribute(n), Xp.delete(e)), o || e.removeAttribute(r)
                })), --Kp || (Gp = new WeakMap, Gp = new WeakMap, Xp = new WeakMap, Wp = {})
              }
          }(n, o, r, "aria-hidden")) : function() {
            return null
          }
        },
        Zp = "Dialog",
        [Qp, Jp] = Vu(Zp),
        [em, tm] = Qp(Zp),
        rm = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            modal: a = !0
          } = e, s = g.useRef(null), l = g.useRef(null), [u, c] = Uu({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Zp
          });
          return (0, v.jsx)(em, {
            scope: t,
            triggerRef: s,
            contentRef: l,
            contentId: kd(),
            titleId: kd(),
            descriptionId: kd(),
            open: u,
            onOpenChange: c,
            onOpenToggle: g.useCallback((() => c((e => !e))), [c]),
            modal: a,
            children: r
          })
        };
      rm.displayName = Zp;
      var nm = "DialogTrigger",
        om = g.forwardRef(((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = tm(nm, r), i = (0, Be.s)(t, o.triggerRef);
          return (0, v.jsx)($u.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": xm(o.open),
            ...n,
            ref: i,
            onClick: Bu(e.onClick, o.onOpenToggle)
          })
        }));
      om.displayName = nm;
      var im = "DialogPortal",
        [am, sm] = Qp(im, {
          forceMount: void 0
        }),
        lm = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = tm(im, t);
          return (0, v.jsx)(am, {
            scope: t,
            forceMount: r,
            children: g.Children.map(n, (e => (0, v.jsx)(kh, {
              present: r || i.open,
              children: (0, v.jsx)(Dh, {
                asChild: !0,
                container: o,
                children: e
              })
            })))
          })
        };
      lm.displayName = im;
      var um = "DialogOverlay",
        cm = g.forwardRef(((e, t) => {
          const r = sm(um, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = tm(um, e.__scopeDialog);
          return i.modal ? (0, v.jsx)(kh, {
            present: n || i.open,
            children: (0, v.jsx)(fm, {
              ...o,
              ref: t
            })
          }) : null
        }));
      cm.displayName = um;
      var dm = (0, Yu.TL)("DialogOverlay.RemoveScroll"),
        fm = g.forwardRef(((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = tm(um, r);
          return (0, v.jsx)(Up.A, {
            as: dm,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, v.jsx)($u.sG.div, {
              "data-state": xm(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        })),
        hm = "DialogContent",
        pm = g.forwardRef(((e, t) => {
          const r = sm(hm, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = tm(hm, e.__scopeDialog);
          return (0, v.jsx)(kh, {
            present: n || i.open,
            children: i.modal ? (0, v.jsx)(mm, {
              ...o,
              ref: t
            }) : (0, v.jsx)(vm, {
              ...o,
              ref: t
            })
          })
        }));
      pm.displayName = hm;
      var mm = g.forwardRef(((e, t) => {
          const r = tm(hm, e.__scopeDialog),
            n = g.useRef(null),
            o = (0, Be.s)(t, r.contentRef, n);
          return g.useEffect((() => {
            const e = n.current;
            if (e) return Yp(e)
          }), []), (0, v.jsx)(ym, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Bu(e.onCloseAutoFocus, (e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            })),
            onPointerDownOutside: Bu(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            })),
            onFocusOutside: Bu(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        vm = g.forwardRef(((e, t) => {
          const r = tm(hm, e.__scopeDialog),
            n = g.useRef(!1),
            o = g.useRef(!1);
          return (0, v.jsx)(ym, {
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
        ym = g.forwardRef(((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...a
          } = e, s = tm(hm, r), l = g.useRef(null), u = (0, Be.s)(t, l);
          return zp(), (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsx)(kp, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, v.jsx)(Nd, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": xm(s.open),
                ...a,
                ref: u,
                onDismiss: () => s.onOpenChange(!1)
              })
            }), (0, v.jsxs)(v.Fragment, {
              children: [(0, v.jsx)(Om, {
                titleId: s.titleId
              }), (0, v.jsx)(Tm, {
                contentRef: l,
                descriptionId: s.descriptionId
              })]
            })]
          })
        })),
        gm = "DialogTitle",
        bm = g.forwardRef(((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = tm(gm, r);
          return (0, v.jsx)($u.sG.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        }));
      bm.displayName = gm;
      var _m = "DialogDescription",
        wm = g.forwardRef(((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = tm(_m, r);
          return (0, v.jsx)($u.sG.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        }));
      wm.displayName = _m;
      var Em = "DialogClose";

      function xm(e) {
        return e ? "open" : "closed"
      }
      g.forwardRef(((e, t) => {
        const {
          __scopeDialog: r,
          ...n
        } = e, o = tm(Em, r);
        return (0, v.jsx)($u.sG.button, {
          type: "button",
          ...n,
          ref: t,
          onClick: Bu(e.onClick, (() => o.onOpenChange(!1)))
        })
      })).displayName = Em;
      var Pm = "DialogTitleWarning",
        [Sm, Cm] = function(e, t) {
          const r = g.createContext(t),
            n = e => {
              const {
                children: t,
                ...n
              } = e, o = g.useMemo((() => n), Object.values(n));
              return (0, v.jsx)(r.Provider, {
                value: o,
                children: t
              })
            };
          return n.displayName = e + "Provider", [n, function(n) {
            const o = g.useContext(r);
            if (o) return o;
            if (void 0 !== t) return t;
            throw new Error(`\`${n}\` must be used within \`${e}\``)
          }]
        }(Pm, {
          contentName: hm,
          titleName: gm,
          docsSlug: "dialog"
        }),
        Om = ({
          titleId: e
        }) => {
          const t = Cm(Pm),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return g.useEffect((() => {
            e && (document.getElementById(e) || console.error(r))
          }), [r, e]), null
        },
        Tm = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Cm("DialogDescriptionWarning").contentName}}.`;
          return g.useEffect((() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }), [r, e, t]), null
        },
        Nm = rm,
        jm = om,
        Im = lm,
        Rm = pm,
        Dm = bm,
        km = wm;
      const Am = ua(cm),
        Lm = ua(Rm),
        Mm = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        Hm = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        Bm = (0, y.AK)(.77, 0, .175, 1),
        Vm = ({
          src: e,
          alt: t,
          caption: r,
          crossOrigin: n,
          onReady: o,
          loading: i,
          referrerPolicy: a,
          thumbnail: s,
          thumbnailAspectRatio: l,
          thumbnailPosition: u,
          thumbnailFit: c,
          reduceMotion: d = !1,
          defaultOpen: f,
          open: h,
          onOpenChange: p,
          showOpenButton: m,
          showDownloadButton: y,
          zoomLevel: b,
          defaultZoomLevel: _ = 100,
          minZoomLevel: E = 100,
          maxZoomLevel: x = 300,
          zoomLevelStep: P = 100,
          onZoomLevelChange: S,
          gestureSettings: C,
          testId: O,
          showZoomControls: T = !0,
          disableGesturesOn: N,
          asChild: j,
          children: I,
          className: R,
          usePortal: D = !0,
          enabled: k = !0
        }) => {
          const A = (0, g.useRef)(null),
            L = (0, g.useRef)(null),
            M = (0, g.useRef)(null),
            H = (0, g.useRef)(null),
            B = qi(),
            V = qi(),
            F = qi(),
            z = (0, g.useRef)(!1),
            q = Su(),
            U = (0, Me.Ub)("screen and (max-width: 1024px)"),
            G = (0, Me.rl)() && U,
            X = (0, Me.jt)(),
            W = "pointer-devices" !== N || G,
            [K, $] = (0, g.useState)(!0),
            [Y, Z] = (0, g.useState)(!1),
            [Q = !1, J] = (0, Me.ic)({
              prop: h,
              defaultProp: f,
              onChange: p
            }),
            [ee, te] = (0, g.useState)(!1),
            [re, ne] = (0, g.useState)(null),
            oe = (0, g.useDeferredValue)(ee),
            ie = d || X || f && !z.current;
          (0, g.useEffect)((() => {
            o?.()
          }), []), (0, g.useEffect)((() => {
            (f || h) && te(Q)
          }), []), (0, Me.qn)((() => {
            ee !== oe && (async function(e, {
              onOpen: t,
              onClose: r
            }) {
              const n = M.current.getBoundingClientRect(),
                o = M.current.querySelector("img"),
                i = o && getComputedStyle(o),
                a = i?.objectFit ?? "",
                s = i?.objectPosition ?? "",
                {
                  a: l
                } = new DOMMatrix(i?.transform),
                d = o?.naturalWidth ?? n.width,
                f = o?.naturalHeight ?? n.height,
                h = d / window.innerWidth,
                p = d / h,
                m = f / h,
                v = window.innerHeight * p / m,
                y = window.innerWidth * m / p,
                g = m >= window.innerHeight ? "horizontal" : "vertical",
                b = ((e, t = 0) => Number.isNaN(e) ? t : e)("horizontal" === g ? (window.innerWidth - window.innerHeight * p / m) / 2 : (window.innerHeight - window.innerWidth * m / p) / 2, 0);
              e ? F.start({
                to: async e => {
                  await e({
                    immediate: !0,
                    aspectRatio: "unset",
                    scale: l,
                    width: `${n.width}px`,
                    height: `${n.height}px`,
                    x: n.left,
                    y: n.top,
                    objectFit: c || a,
                    objectPosition: u || s
                  }), await e({
                    immediate: !0,
                    opacity: 1
                  }), M.current?.style.setProperty("opacity", "0"), await e({
                    height: "horizontal" === g ? `${window.innerHeight}px` : `${y}px`,
                    width: "horizontal" === g ? `${v}px` : `${window.innerWidth}px`,
                    x: "horizontal" === g ? b : 0,
                    y: "horizontal" === g ? 0 : b,
                    scale: _ / 100,
                    immediate: ie,
                    config: {
                      duration: 550,
                      easing: Bm
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
                  }), "vertical" === g ? A.current?.style.setProperty("width", "100%") : "horizontal" === g && A.current?.style.setProperty("height", "100%"), t?.()
                }
              }) : F.start({
                to: async e => {
                  await e({
                    immediate: !0,
                    opacity: 1,
                    height: "horizontal" === g ? `${window.innerHeight}px` : `${y}px`,
                    width: "horizontal" === g ? `${v}px` : `${window.innerWidth}px`,
                    x: pe.position[0] + ("horizontal" === g ? b : 0),
                    y: pe.position[1] + ("horizontal" === g ? 0 : b),
                    scale: pe.zoomLevel / 100,
                    objectFit: c || a,
                    objectPosition: u || s
                  }), await e({
                    aspectRatio: "unset",
                    scale: l,
                    width: `${n.width}px`,
                    height: `${n.height}px`,
                    x: n.left,
                    y: n.top,
                    immediate: ie,
                    config: {
                      duration: 250,
                      easing: Bm
                    }
                  }), M.current?.style.setProperty("opacity", "1"), await e({
                    opacity: 0,
                    immediate: !0
                  }), r?.()
                }
              })
            }(ee, {
              onClose: () => J(!1)
            }), z.current = !0)
          }), [ee]), (0, Me.qn)((() => {
            Q ? Promise.resolve().then((() => async function() {
              const e = M.current.querySelector("img");
              if (H.current) {
                let t = Mm;
                e?.currentSrc && (t = e?.currentSrc), H.current.src = t, await ge(H.current)
              }
            }())).then((() => ge(H.current))).then((() => te(Q))) : te(!1)
          }), [Q]);
          const ae = () => {
              te(!1)
            },
            {
              loaded: se,
              eventHandlers: le
            } = (0, Me.gr)({
              enabled: oe
            }),
            {
              isHovered: ue
            } = (0, Me.Mk)({
              ref: L,
              enabled: oe
            }),
            {
              isFocused: ce
            } = (0, Me.iQ)({
              ref: L,
              enabled: oe
            }),
            {
              isIdle: de
            } = (0, Me.UQ)({
              leave: 300,
              activity: 3e3,
              enabled: oe && !ue && !ce && !G
            }),
            fe = function(e, t, r) {
              const n = qr.fun(t) && t,
                {
                  reset: o,
                  sort: i,
                  trail: a = 0,
                  expires: s = !0,
                  exitBeforeEnter: l = !1,
                  onDestroyed: u,
                  ref: c,
                  config: d
                } = n ? n() : t,
                f = (0, g.useMemo)((() => n || 3 == arguments.length ? Vi() : void 0), []),
                h = Wr(e),
                p = [],
                m = (0, g.useRef)(null),
                v = o ? null : m.current;
              fo((() => {
                m.current = p
              })), po((() => (Gr(p, (e => {
                f?.add(e.ctrl), e.ctrl.ref = f
              })), () => {
                Gr(m.current, (e => {
                  e.expired && clearTimeout(e.expirationId), Go(e.ctrl, f), e.ctrl.stop(!0)
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
                      return r ? (t.add(r), r.key) : Ui++
                    }))
                  }
                  return qr.und(r) ? e : qr.fun(r) ? e.map(r) : Wr(r)
                }(h, n ? n() : t, v),
                b = o && m.current || [];
              fo((() => Gr(b, (({
                ctrl: e,
                item: t,
                key: r
              }) => {
                Go(e, f), Do(u, t, r)
              }))));
              const _ = [];
              if (v && Gr(v, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = _[t] = y.indexOf(e.key)) && (p[t] = e)
                })), Gr(h, ((e, t) => {
                  p[t] || (p[t] = {
                    key: y[t],
                    item: e,
                    phase: "mount",
                    ctrl: new Ti
                  }, p[t].ctrl.item = e)
                })), _.length) {
                let e = -1;
                const {
                  leave: r
                } = n ? n() : t;
                Gr(_, ((t, n) => {
                  const o = v[n];
                  ~t ? (e = p.indexOf(o), p[e] = {
                    ...o,
                    item: h[t]
                  }) : r && p.splice(++e, 0, o)
                }))
              }
              qr.fun(i) && p.sort(((e, t) => i(e.item, t.item)));
              let w = -a;
              const E = ho(),
                x = Ho(t),
                P = new Map,
                S = (0, g.useRef)(new Map),
                C = (0, g.useRef)(!1);
              Gr(p, ((e, r) => {
                const o = e.key,
                  i = e.phase,
                  u = n ? n() : t;
                let f, h;
                const p = Do(u.delay || 0, o);
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
                if (f = Do(f, e.item, r), f = qr.obj(f) ? Fo(f) : {
                    to: f
                  }, !f.config) {
                  const t = d || x.config;
                  f.config = Do(t, e.item, r, h)
                }
                w += a;
                const g = {
                  ...x,
                  delay: p + w,
                  ref: c,
                  immediate: u.immediate,
                  reset: !1,
                  ...f
                };
                if ("enter" == h && qr.und(g.from)) {
                  const o = n ? n() : t,
                    i = qr.und(o.initial) || v ? o.from : o.initial;
                  g.from = Do(i, e.item, r)
                }
                const {
                  onResolve: b
                } = g;
                g.onResolve = e => {
                  Do(b, e);
                  const t = m.current,
                    r = t.find((e => e.key === o));
                  if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == r.phase) {
                      const t = Do(s, r.item);
                      if (!1 !== t) {
                        const n = !0 === t ? 0 : t;
                        if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(E, n)))
                      }
                    }
                    e && t.some((e => e.expired)) && (S.current.delete(r), l && (C.current = !0), E())
                  }
                };
                const _ = Ii(e.ctrl, g);
                "leave" === h && l ? S.current.set(e, {
                  phase: h,
                  springs: _,
                  payload: g
                }) : P.set(e, {
                  phase: h,
                  springs: _,
                  payload: g
                })
              }));
              const O = (0, g.useContext)(Hi),
                T = vo(O),
                N = O !== T && qo(O);
              fo((() => {
                N && Gr(p, (e => {
                  e.ctrl.start({
                    default: O
                  })
                }))
              }), [O]), Gr(P, ((e, t) => {
                if (S.current.size) {
                  const e = p.findIndex((e => e.key === t.key));
                  p.splice(e, 1)
                }
              })), fo((() => {
                Gr(S.current.size ? S.current : P, (({
                  phase: e,
                  payload: t
                }, r) => {
                  const {
                    ctrl: n
                  } = r;
                  r.phase = e, f?.add(n), N && "enter" == e && n.start({
                    default: O
                  }), t && (Xo(n, t.ref), !n.ref && !f || C.current ? (n.start(t), C.current && (C.current = !1)) : n.update(t))
                }))
              }), o ? void 0 : r);
              const j = e => g.createElement(g.Fragment, null, p.map(((t, r) => {
                const {
                  springs: n
                } = P.get(t) || t.ctrl, o = e({
                  ...n
                }, t.item, t, r);
                return o && o.type ? g.createElement(o.type, {
                  ...o.props,
                  key: qr.str(t.key) || qr.num(t.key) ? t.key : t.ctrl.id,
                  ref: o.ref
                }) : o
              })));
              return f ? [j, f] : j
            }(oe, {
              ref: B,
              from: {
                opacity: 0
              },
              enter: {
                opacity: 1
              },
              leave: {
                opacity: 0
              },
              immediate: ie
            }),
            [he] = Fi((() => ({
              ref: V,
              opacity: oe && !de && se && K ? 1 : 0,
              immediate: ie
            })), [oe, de, se, K]),
            pe = (({
              position: e,
              defaultPosition: t,
              onPositionChange: r,
              minZoomLevel: n,
              maxZoomLevel: o,
              zoomLevelStep: i,
              zoomLevel: a,
              defaultZoomLevel: s,
              onZoomLevelChange: l,
              onRequestedClose: u,
              onRequestingClose: c,
              onClick: d,
              onDoubleClick: f,
              gestureSettings: h = ya,
              enabled: p
            }) => {
              const m = (0, Me.jt)(),
                [v = t, y] = (0, Me.ic)({
                  prop: e,
                  defaultProp: t,
                  onChange: r
                }),
                [b = s, _] = (0, Me.ic)({
                  prop: a,
                  defaultProp: s,
                  onChange: l
                }),
                w = (0, g.useRef)(null),
                E = (0, g.useRef)(null),
                [x, P] = (0, g.useState)(!1),
                S = b > n,
                C = b < o,
                O = b > n,
                T = b === n,
                [N, j] = Fi((() => ({
                  x: v[0],
                  y: v[1],
                  scale: b / 100,
                  from: {
                    scale: n / 100,
                    x: t[0],
                    y: t[1]
                  },
                  immediate: m,
                  config: ma
                }))),
                I = (e, {
                  origin: r,
                  delta: i,
                  animationConfig: a
                } = {}) => {
                  if (w.current && E.current) {
                    r || (r = [E.current.clientWidth / 2, E.current.clientHeight / 2]);
                    const s = pa(e, n, o);
                    if (s === b) return;
                    i || (i = (s - b) / 100);
                    const l = {
                      config: a || ma,
                      x: t[0],
                      y: t[1],
                      scale: b,
                      immediate: m
                    };
                    if (s <= n) y(t);
                    else {
                      const e = ha(w.current, E.current, (({
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
                          top: u,
                          width: c
                        } = r.current?.getBoundingClientRect();
                        return [-(i - l - c / 2) / o * n + e, -(a - u - s / 2) / o * n + t]
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
                R = (e, t) => e.y < t.top || e.y > t.bottom || e.x < t.left || e.x > t.right,
                {
                  handleClick: D
                } = (0, Me.Rv)({
                  onDoubleClick: e => {
                    if (w.current) {
                      const t = da(w.current),
                        r = R(e, t) ? "overlay" : "content";
                      f?.({
                        target: r,
                        origin: [e.clientX, e.clientY],
                        contentBounds: t
                      })
                    }
                  },
                  onSingleClick: e => {
                    if (w.current && 0 === e.button) {
                      const t = da(w.current),
                        r = R(e, t) ? "overlay" : "content";
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
                containerRef: E,
                contentRef: w,
                canPan: S,
                isPanning: x,
                position: v,
                zoomLevel: b,
                zoomIn: e => {
                  I(b + i, e)
                },
                zoomOut: e => {
                  I(b - i, e)
                },
                zoomTo: I,
                resetZoom: () => {
                  y(t), _(s);
                  const e = {
                    config: va,
                    x: t[0],
                    y: t[1],
                    scale: s / 100,
                    immediate: m
                  };
                  j(e)
                },
                canZoomIn: C,
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
                    event: u
                  }) => {
                    if (!E.current || !w.current) return;
                    if (s) return void D(u);
                    if (o && i && !x && P(!0), l > 1) return;
                    if (a || b < n) return;
                    if (e) return v;
                    const {
                      horizontalOffset: d,
                      verticalOffset: f
                    } = ha(w.current, E.current, v, b), p = o * h.dragFactor, g = i * h.dragFactor, _ = {
                      config: ma,
                      x: t[0],
                      y: t[1],
                      immediate: m
                    };
                    if (b === n) {
                      const e = [r[0], r[1] + g],
                        {
                          y: t
                        } = fa(e, w.current),
                        n = pa(100 * Math.abs(t) / h.closePc, 0, 100);
                      _.config = va, _.x = e[0], _.y = e[1], y(e), c?.(n)
                    } else {
                      const e = [ca(r[0] + p, -d, d), ca(r[1] + g, -f, f)];
                      _.x = e[0], _.y = e[1], y(e)
                    }
                    return j(_), r
                  },
                  onDragEnd: ({
                    memo: e
                  }) => {
                    if (E.current && w.current)
                      if (b === n) {
                        const {
                          y: e
                        } = fa(v, w.current);
                        if (pa(100 * Math.abs(e) / h.closePc, 0, 100) >= 100) u?.();
                        else {
                          const e = {
                            config: va,
                            x: t[0],
                            y: t[1],
                            immediate: m
                          };
                          j(e), y(t), c?.(0)
                        }
                      } else if (void 0 !== e) {
                      const e = ha(w.current, E.current, v, b),
                        t = {
                          config: ma,
                          x: e.xy[0],
                          y: e.xy[1],
                          immediate: m
                        };
                      j(t), P(!1), y(e.xy)
                    }
                  },
                  onPinch: ({
                    cancel: e,
                    last: t,
                    offset: [r],
                    origin: [n, o],
                    first: i
                  }) => {
                    if (w.current && E.current) {
                      if (i && P(!0), t) return void e();
                      I(100 * r, {
                        origin: [n, o],
                        delta: r - b / 100
                      })
                    }
                  },
                  onPinchEnd: () => {
                    E.current && w.current && P(!1)
                  },
                  onWheel: ({
                    last: e,
                    event: t,
                    movement: r
                  }) => {
                    if (w.current && E.current) {
                      const n = -1 * r[1];
                      if (n && x && P(!0), e) return;
                      const o = [t.clientX, t.clientY],
                        i = b / 100,
                        a = i + n / h.scrollFactor;
                      I(100 * a, {
                        delta: a - i,
                        origin: o
                      })
                    }
                  },
                  onWheelEnd: () => {
                    E.current && w.current && P(!1)
                  }
                },
                getCursor: () => T && !p ? "zoom-out" : T && C ? "zoom-in" : S ? x ? "grabbing" : "grab" : "pointer",
                enabled: p,
                animation: N
              }
            })({
              enabled: W && oe,
              onClick: function() {
                U ? $(!K) : ae()
              },
              onDoubleClick: function(e) {
                if (G && pe.containerRef.current && "content" === e.target)
                  if (pe.zoomLevel > pe.minZoomLevel) pe.resetZoom();
                  else {
                    const t = ((e, t, r) => {
                      const n = e.height / (r / 100);
                      return 100 * t.height / n
                    })(e.contentBounds, pe.containerRef.current.getBoundingClientRect(), pe.zoomLevel);
                    pe.zoomTo(t, {
                      animationConfig: va
                    })
                  }
              },
              onRequestedClose: ae,
              onRequestingClose: e => {
                if (ee) {
                  const t = 1,
                    r = .25,
                    n = pa(t - e * (t - r) / 100, r, t);
                  B.start({
                    opacity: n
                  });
                  const o = pa(1 - e / 100, 0, 1);
                  V.start({
                    opacity: o
                  })
                }
              },
              zoomLevel: b,
              defaultZoomLevel: _,
              minZoomLevel: E,
              maxZoomLevel: x,
              zoomLevelStep: P,
              onZoomLevelChange: S,
              defaultPosition: [0, 0],
              gestureSettings: C
            }),
            me = Fi({
              ref: F,
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
                objectFit: c,
                objectPosition: u,
                opacity: 0
              },
              onStart: () => {
                oe || Z(!1)
              },
              onRest: async () => {
                oe ? Z(!0) : (pe.resetZoom(), $(!0))
              }
            }),
            ve = Fi({
              opacity: oe && se && Y ? 1 : 0,
              immediate: !0,
              onRest: () => {
                oe && ee && se && F.start({
                  opacity: 0,
                  immediate: !0
                })
              }
            }),
            ye = [
              [F, B, V],
              [0, 0, .1]
            ];
          async function ge(e) {
            return e.complete ? Promise.resolve(e) : new Promise(((t, r) => {
              e.onload = () => t(e), e.onerror = r
            }))
          }! function(e, t, r = 1e3) {
            fo((() => {
              if (t) {
                let n = 0;
                Gr(e, ((e, o) => {
                  const i = e.current;
                  if (i.length) {
                    let a = r * t[o];
                    isNaN(a) ? a = n : n = a, Gr(i, (e => {
                      Gr(e.queue, (e => {
                        const t = e.delay;
                        e.delay = e => a + Do(t || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let t = Promise.resolve();
                Gr(e, (e => {
                  const r = e.current;
                  if (r.length) {
                    const n = r.map((e => {
                      const t = e.queue;
                      return e.queue = [], t
                    }));
                    t = t.then((() => (Gr(r, ((e, t) => Gr(n[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(oe ? ye[0] : ye[0].reverse(), ye[1]);
          const be = j ? (0, v.jsx)(w.DX, {
            className: jp,
            ref: null,
            children: I
          }) : (0, v.jsx)("img", {
            alt: "",
            src: s,
            "aria-hidden": !0,
            loading: i,
            className: jp,
            crossOrigin: n,
            referrerPolicy: a
          });
          (0, g.useEffect)((() => {
            $(!G)
          }), [G]);
          const {
            contrastMode: _e
          } = (0, He.DP)(), we = ((e, t) => [Lu.xW.tokens, Mu("dark", t)].join(" "))(0, _e);
          return (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsx)(Nm, {
              open: Q,
              children: (0, v.jsxs)("div", {
                className: (0, pt.clsx)("foundry_1a74xwb0", R),
                children: [(0, v.jsx)(jm, {
                  asChild: !0,
                  children: (0, v.jsxs)(ua.button, {
                    className: "foundry_1a74xwb3 foundry_1d5mo5m0 foundry_1a74xwb1",
                    onClick: async () => {
                      k && J(!Q)
                    },
                    ref: M,
                    "data-idle": !ee,
                    style: {
                      aspectRatio: l,
                      objectPosition: u,
                      objectFit: c
                    },
                    children: [(0, v.jsx)(w.s6, {
                      children: q.formatMessage(Ru)
                    }), be, fe(((e, t) => m && !t && (0, v.jsx)(ua.span, {
                      className: "foundry_1a74xwb5",
                      style: e,
                      children: (0, v.jsx)(mt.Plus, {
                        label: "",
                        size: "SM"
                      })
                    })))]
                  })
                }), (0, v.jsxs)(Im, {
                  ...!D && {
                    container: re
                  },
                  children: [(0, v.jsx)(ua.img, {
                    "aria-hidden": !0,
                    src: Mm,
                    ref: H,
                    className: "foundry_1a74xwb2 foundry_1a74xwb1",
                    style: {
                      aspectRatio: l,
                      backgroundPosition: u,
                      backgroundSize: c,
                      ...me
                    }
                  }), fe(((o, s) => s && (0, v.jsxs)(v.Fragment, {
                    children: [(0, v.jsx)(Am, {
                      className: "foundry_1a74xwb8",
                      style: o
                    }), (0, v.jsxs)(Lm, {
                      "data-testid": O,
                      onEscapeKeyDown: ae,
                      onOpenAutoFocus: Hm,
                      onCloseAutoFocus: e => ((e, t) => {
                        e?.preventDefault(), t.current?.focus({
                          preventScroll: !0
                        })
                      })(e, M),
                      className: we,
                      children: [(0, v.jsx)(w.s6, {
                        children: (0, v.jsx)(Dm, {
                          children: q.formatMessage(Du)
                        })
                      }), (0, v.jsx)(w.s6, {
                        children: (0, v.jsx)(km, {
                          children: r || q.formatMessage(ku, {
                            alt: t
                          })
                        })
                      }), (0, v.jsx)(ua.div, {
                        className: "foundry_1a74xwb6",
                        style: ve,
                        children: (0, v.jsx)(ga, {
                          ...pe,
                          children: (0, v.jsx)("img", {
                            alt: "",
                            src: e,
                            ref: A,
                            loading: i,
                            className: "foundry_1a74xwba",
                            crossOrigin: n,
                            "aria-hidden": !0,
                            referrerPolicy: a,
                            style: {
                              cursor: pe.getCursor()
                            },
                            ...le
                          })
                        })
                      }), (0, v.jsx)(ua.div, {
                        className: "foundry_1a74xwb9",
                        style: he,
                        children: (0, v.jsx)(Np, {
                          ...pe,
                          ref: L,
                          onClose: ae,
                          caption: r,
                          onDownload: () => (e => {
                            const t = document.createElement("a");
                            t.href = e, t.download = e.substring(e.lastIndexOf("/") + 1), document.body.appendChild(t), t.click(), document.body.removeChild(t)
                          })(e),
                          showDownloadButton: y,
                          showZoomControls: T
                        })
                      })]
                    })]
                  })))]
                })]
              })
            }), !D && (0, v.jsx)("div", {
              ref: ne
            })]
          })
        },
        Fm = e => {
          const t = (0, He.Ym)();
          return (0, v.jsx)(Iu, {
            messages: Au,
            locale: t,
            children: (0, v.jsx)(Vm, {
              ...e
            })
          })
        };

      function zm(e) {
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

      function qm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Um(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? qm(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = zm(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qm(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Gm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Xm = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Wm = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Um(Um({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Xm(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Gm(e.variantClassNames, (e => Gm(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_thj3a31",
          variantClassNames: {
            thickness: {
              thin: "foundry_thj3a32",
              thick: "foundry_thj3a33",
              thicker: "foundry_thj3a34",
              thickest: "foundry_thj3a35"
            },
            orientation: {
              horizontal: "foundry_thj3a36",
              vertical: "foundry_thj3a37"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Km = (0, g.forwardRef)((({
          className: e,
          orientation: t = "horizontal",
          thickness: r = "thin",
          isDecorative: n = !1,
          asChild: o,
          testId: i,
          ...a
        }, s) => {
          const l = "horizontal" !== t || n ? "div" : "hr",
            u = n || "hr" === l ? void 0 : "separator",
            c = o ? w.DX : l;
          return (0, v.jsx)(c, {
            ref: s,
            className: (0, pt.clsx)(Wm({
              thickness: r,
              orientation: t
            }), e),
            role: u,
            "aria-orientation": t,
            "data-testid": i,
            ...a
          })
        })),
        $m = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? w.DX : "h1",
            i = (0, y.v6)({
              className: "foundry_1pi1yv40 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, v.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }));

      function Ym(e) {
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

      function Zm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Qm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zm(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Ym(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zm(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Jm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ev = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        tv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Qm(Qm({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) ev(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jm(e.variantClassNames, (e => Jm(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_16ge3130",
          variantClassNames: {
            size: {
              LG: "foundry_tdsdcd13 foundry_tdsdcd0 foundry_tdsdcd15",
              MD: "foundry_tdsdcd13 foundry_tdsdcd0 foundry_tdsdcd16",
              SM: "foundry_tdsdcd13 foundry_tdsdcd0 foundry_tdsdcd17",
              XS: "foundry_tdsdcd13 foundry_tdsdcd0 foundry_tdsdcd18"
            },
            appearance: {
              default: "foundry_tdsdcd13 foundry_tdsdcd0 foundry_tdsdcd19",
              bold: "foundry_tdsdcd13 foundry_tdsdcd0 foundry_tdsdcd1a"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const rv = (0, g.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const a = e ? w.DX : "p",
          s = (0, y.v6)({
            className: tv({
              size: n,
              appearance: r
            })
          }, o);
        return (0, v.jsx)(a, {
          ref: i,
          "data-testid": t,
          ...s
        })
      }));

      function nv(e) {
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

      function ov(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function iv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ov(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = nv(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ov(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function av(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var sv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        lv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = iv(iv({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) sv(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return av(e.variantClassNames, (e => av(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_1ugqrt40",
          variantClassNames: {
            appearance: {
              default: "foundry_tdsdcd1b foundry_tdsdcd0 foundry_tdsdcd1d",
              bold: "foundry_tdsdcd1b foundry_tdsdcd0 foundry_tdsdcd1e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const uv = (0, g.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const i = e ? w.DX : "p",
          a = (0, y.v6)({
            className: lv({
              appearance: r
            })
          }, n);
        return (0, v.jsx)(i, {
          ref: o,
          "data-testid": t,
          ...a
        })
      }));

      function cv(e) {
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

      function dv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function fv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dv(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = cv(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dv(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function hv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var pv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        mv = "var(--foundry_9dxgbc2)",
        vv = "var(--foundry_9dxgbc3)",
        yv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = fv(fv({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) pv(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hv(e.variantClassNames, (e => hv(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_9dxgbc7",
          variantClassNames: {
            size: {
              SM: "foundry_9dxgbc8",
              MD: "foundry_9dxgbc9",
              LG: "foundry_9dxgbca",
              XL: "foundry_9dxgbcb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        gv = "var(--foundry_9dxgbc0)",
        bv = "var(--foundry_9dxgbc1)";
      const _v = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          children: r,
          colorOverride: n,
          label: o,
          size: i = "MD",
          ...a
        }, s) => {
          const l = (0, He.zQ)(),
            u = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
            c = (0, y.v6)({
              className: yv({
                size: u
              }),
              "data-testid": t,
              style: re({
                [gv]: n?.pulseColorBackground,
                [bv]: n?.pulseColorForeground,
                [mv]: n?.gradientColorBackground,
                [vv]: n?.gradientColorForeground
              }),
              role: "status",
              "aria-atomic": !0,
              "aria-label": o
            }, a),
            d = e ? w.DX : "div";
          return (0, v.jsx)(d, {
            ref: s,
            ...c,
            children: e ? (0, v.jsx)(w.xV, {
              children: r
            }) : (0, v.jsxs)(v.Fragment, {
              children: [(0, v.jsx)("div", {
                className: "foundry_9dxgbcd"
              }), (0, v.jsx)("div", {
                className: "foundry_9dxgbcc"
              })]
            })
          })
        })),
        wv = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        Ev = wv.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      wv.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), wv.join(':not([hidden]):not([tabindex="-1"]),');
      const xv = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Pv = e => e && "window" in e && e.window === e ? e : xv(e).defaultView || window;

      function Sv(e) {
        if (function() {
            if (null == Cv) {
              Cv = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Cv = !0, !0
                  }
                })
              } catch {}
            }
            return Cv
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
      let Cv = null;
      let Ov = !1;

      function Tv(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function Nv(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function jv(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Iv = jv((function() {
          return Nv(/^Mac/i)
        })),
        Rv = jv((function() {
          return Nv(/^iPhone/i)
        })),
        Dv = jv((function() {
          return Nv(/^iPad/i) || Iv() && navigator.maxTouchPoints > 1
        })),
        kv = jv((function() {
          return Rv() || Dv()
        })),
        Av = (jv((function() {
          return Iv() || kv()
        })), jv((function() {
          return Tv(/AppleWebKit/i) && !Lv()
        }))),
        Lv = jv((function() {
          return Tv(/Chrome/i)
        })),
        Mv = jv((function() {
          return Tv(/Android/i)
        })),
        Hv = jv((function() {
          return Tv(/Firefox/i)
        }));
      let Bv = new Map,
        Vv = new Set;

      function Fv() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = Bv.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), Bv.delete(r.target)), 0 === Bv.size)) {
            for (let e of Vv) e();
            Vv.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!e(r) || !r.target) return;
          let n = Bv.get(r.target);
          n || (n = new Set, Bv.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Fv() : document.addEventListener("DOMContentLoaded", Fv));
      let zv = "default",
        qv = "",
        Uv = new WeakMap;

      function Gv(e) {
        if (kv()) {
          if ("disabled" !== zv) return;
          zv = "restoring", setTimeout((() => {
            var t;
            t = () => {
              if ("restoring" === zv) {
                const t = xv(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = qv || ""), qv = "", zv = "default"
              }
            }, requestAnimationFrame((() => {
              ! function() {
                for (const [e] of Bv) "isConnected" in e && !e.isConnected && Bv.delete(e)
              }(), 0 === Bv.size ? t() : Vv.add(t)
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Uv.has(e)) {
          let t = Uv.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Uv.delete(e)
        }
      }
      const Xv = g.createContext({
        register: () => {}
      });
      Xv.displayName = "PressResponderContext";
      var Wv = r(88842),
        Kv = r(57178),
        $v = r(72562);

      function Yv(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Zv, Qv = new Map;

      function Jv(e, t) {
        if (e === t) return e;
        let r = Qv.get(e);
        if (r) return r.forEach((e => e.current = t)), t;
        let n = Qv.get(t);
        return n ? (n.forEach((t => t.current = e)), e) : t
      }

      function ey(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Yv(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = Jv(r, o) : t[e] = void 0 !== o ? o : r : t[e] = pt(r, o)
          }
        }
        return t
      }
      "undefined" != typeof FinalizationRegistry && (Zv = new FinalizationRegistry((e => {
        Qv.delete(e)
      })));
      const ty = "undefined" != typeof document ? g.useLayoutEffect : () => {};

      function ry(e) {
        const t = (0, g.useRef)(null);
        return ty((() => {
          t.current = e
        }), [e]), (0, g.useCallback)(((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }), [])
      }

      function ny(e, t) {
        return !(!t || !e) && e.contains(t)
      }

      function oy(e) {
        return e.target
      }

      function iy(e, t, r = !0) {
        var n, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        Hv() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (Iv() ? i = !0 : a = !0);
        let u = Av() && Iv() && !Dv() ? new KeyboardEvent("keydown", {
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
        iy.isOpening = r, Sv(e), e.dispatchEvent(u), iy.isOpening = !1
      }

      function ay(e) {
        let t = (0, g.useContext)(Xv);
        if (t) {
          let {
            register: r,
            ...n
          } = t;
          e = ey(n, e), r()
        }
        return function(e, t) {
          ty((() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
              e.ref && (e.ref.current = null)
            }
          }))
        }(t, e.ref), e
      }
      iy.isOpening = !1;
      var sy = new WeakMap;
      class ly {
        continuePropagation() {
          (0, $v._)(this, sy, !1)
        }
        get shouldStopPropagation() {
          return (0, Wv._)(this, sy)
        }
        constructor(e, t, r, n) {
          var o;
          (0, Kv._)(this, sy, {
            writable: !0,
            value: void 0
          }), (0, $v._)(this, sy, !0);
          let i = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const a = null == i ? void 0 : i.getBoundingClientRect();
          let s, l, u = 0,
            c = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, c = r.clientY), a && (null != l && null != c ? (s = l - a.left, u = c - a.top) : (s = a.width / 2, u = a.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = s, this.y = u
        }
      }
      const uy = Symbol("linkClicked"),
        cy = "react-aria-pressable-style",
        dy = "data-react-aria-pressable";

      function fy(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: i,
          onClick: a,
          isDisabled: s,
          isPressed: l,
          preventFocusOnPress: u,
          shouldCancelOnPointerExit: c,
          allowTextSelectionOnPress: d,
          ref: f,
          ...h
        } = ay(e), [p, m] = (0, g.useState)(!1), v = (0, g.useRef)({
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
        } = function() {
          let e = (0, g.useRef)(new Map),
            t = (0, g.useCallback)(((t, r, n, o) => {
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
            r = (0, g.useCallback)(((t, r, n, o) => {
              var i;
              let a = (null === (i = e.current.get(n)) || void 0 === i ? void 0 : i.fn) || n;
              t.removeEventListener(r, a, o), e.current.delete(n)
            }), []),
            n = (0, g.useCallback)((() => {
              e.current.forEach(((e, t) => {
                r(e.eventTarget, e.type, t, e.options)
              }))
            }), [r]);
          return (0, g.useEffect)((() => n), [n]), {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: n
          }
        }(), _ = ry(((e, t) => {
          let o = v.current;
          if (s || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new ly("pressstart", t, e);
            n(r), i = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        })), w = ry(((e, n, i = !0) => {
          let a = v.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new ly("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), m(!1), t && i && !s) {
            let r = new ly("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, l
        })), E = ry(((e, t) => {
          let r = v.current;
          if (s) return !1;
          if (i) {
            r.isTriggeringEvent = !0;
            let n = new ly("pressup", t, e);
            return i(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        })), x = ry((e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(my(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, b(), d || Gv(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), P = ry((e => {
          c && x(e)
        })), S = ry((e => {
          null == a || a(e)
        })), C = ry(((e, t) => {
          if (a) {
            let r = new MouseEvent("click", e);
            (function(e, t) {
              Object.defineProperty(e, "target", {
                value: t
              }), Object.defineProperty(e, "currentTarget", {
                value: t
              })
            })(r, t), a(function(e) {
              let t = e;
              return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
            }(r))
          }
        })), O = (0, g.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (py(t.nativeEvent, t.currentTarget) && ny(t.currentTarget, oy(t.nativeEvent))) {
                  var n;
                  vy(oy(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = _(t, "keyboard");
                    let n = t.currentTarget,
                      i = t => {
                        py(t, n) && !t.repeat && ny(n, oy(t)) && e.target && E(my(e.target, t), "keyboard")
                      };
                    y(xv(t.currentTarget), "keyup", Yv(i, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Iv() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                var r;
                if ((!t || ny(t.currentTarget, oy(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !iy.isOpening) {
                  let n = !0;
                  if (s && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && (0 !== (r = t.nativeEvent).mozInputSource || !r.isTrusted) && (Mv() && r.pointerType ? "click" !== r.type || 1 !== r.buttons : 0 !== r.detail || r.pointerType)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = E(my(t.currentTarget, t), r),
                        i = w(my(t.currentTarget, t), r, !0);
                      n = o && i, e.isOverTarget = !1, S(t), x(t)
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
            r = t => {
              var r;
              if (e.isPressed && e.target && py(t, e.target)) {
                var n;
                vy(oy(t), t.key) && t.preventDefault();
                let r = oy(t),
                  o = ny(e.target, oy(t));
                w(my(e.target, t), "keyboard", o), o && C(t, e.target), b(), "Enter" !== t.key && hy(e.target) && ny(e.target, r) && !t[uy] && (t[uy] = !0, iy(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !ny(t.currentTarget, oy(t.nativeEvent))) return;
              if (o = t.nativeEvent, !Mv() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (kv()) {
                    if ("default" === zv) {
                      const t = xv(e);
                      qv = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    zv = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    Uv.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = _(t, e.pointerType);
                let o = oy(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(xv(t.currentTarget), "pointerup", r, !1), y(xv(t.currentTarget), "pointercancel", n, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (ny(t.currentTarget, oy(t.nativeEvent)) && 0 === t.button) {
                if (u) {
                  let r = function(e) {
                    for (; e && !e.matches(Ev);) e = e.parentElement;
                    let t = Pv(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    Ov = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, Sv(r), l()))
                      },
                      a = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, Sv(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), Ov = !1, n = !1
                      },
                      u = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              ny(t.currentTarget, oy(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || E(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, _(my(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(my(e.target, t), e.pointerType, !1), P(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (ny(e.target, oy(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? x(t) : (Sv(e.target), e.target.click()))
                      }), 80);
                    y(t.currentTarget, "click", (() => r = !0), !0), e.disposables.push((() => clearTimeout(n)))
                  } else x(t);
                  e.isOverTarget = !1
                }
              },
              n = e => {
                x(e)
              };
            t.onDragStart = e => {
              ny(e.currentTarget, oy(e.nativeEvent)) && x(e)
            }
          }
          return t
        }), [y, s, u, b, d, x, P, w, _, E, S, C]);
        return (0, g.useEffect)((() => {
          if (!f) return;
          const e = xv(f.current);
          if (!e || !e.head || e.getElementById(cy)) return;
          const t = e.createElement("style");
          t.id = cy, t.textContent = `\n@layer {\n  [${dy}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }), [f]), (0, g.useEffect)((() => {
          let e = v.current;
          return () => {
            var t;
            d || Gv(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [d]), {
          isPressed: l || p,
          pressProps: ey(h, O, {
            [dy]: !0
          })
        }
      }

      function hy(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function py(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof Pv(o).HTMLInputElement && !gy(o, r) || o instanceof Pv(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && hy(o)) && "Enter" !== r)
      }

      function my(e, t) {
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

      function vy(e, t) {
        return e instanceof HTMLInputElement ? !gy(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : hy(e)))
        }(e)
      }
      const yy = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function gy(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : yy.has(e.type)
      }

      function by(e) {
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

      function _y(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function wy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _y(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = by(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _y(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Ey(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var xy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Py = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = wy(wy({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) xy(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ey(e.variantClassNames, (e => Ey(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_i6k0ds0 foundry_8kowh41 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy foundry_tdsdcd11",
          variantClassNames: {
            status: {
              neutral: "foundry_i6k0ds1",
              success: "foundry_i6k0ds2",
              invalid: "foundry_i6k0ds3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Sy = r(57365);
      const Cy = (0, g.createContext)(null);

      function Oy() {
        const e = (0, g.useContext)(Cy);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Ty = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: i = "neutral",
          ...a
        }, s) => {
          const l = (0, y.v6)({
              className: Py({
                status: i
              }),
              "data-testid": t
            }, a),
            u = r ? w.DX : "div";
          return (0, v.jsx)(Cy.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: i,
              ...a
            },
            children: (0, v.jsx)(u, {
              ...l,
              ref: s,
              children: e
            })
          })
        })),
        Ny = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = Oy(), i = (0, y.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), a = {
            success: Sy.Check,
            invalid: Sy.X,
            neutral: Sy.TriangleAlert
          }, s = t ? w.DX : a[o];
          return (0, v.jsx)(s, {
            ref: n,
            ...i
          })
        })),
        jy = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            errorId: a
          } = Oy(), s = (0, y.v6)({
            "data-testid": t,
            id: a || i
          }, n), l = r ? w.DX : "div";
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }));
      var Iy = "ScrollArea",
        [Ry, Dy] = Vu(Iy),
        [ky, Ay] = Ry(Iy),
        Ly = g.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...a
          } = e, [s, l] = g.useState(null), [u, c] = g.useState(null), [d, f] = g.useState(null), [h, p] = g.useState(null), [m, y] = g.useState(null), [b, _] = g.useState(0), [w, E] = g.useState(0), [x, P] = g.useState(!1), [S, C] = g.useState(!1), O = (0, Be.s)(t, (e => l(e))), T = Xu(o);
          return (0, v.jsx)(ky, {
            scope: r,
            type: n,
            dir: T,
            scrollHideDelay: i,
            scrollArea: s,
            viewport: u,
            onViewportChange: c,
            content: d,
            onContentChange: f,
            scrollbarX: h,
            onScrollbarXChange: p,
            scrollbarXEnabled: x,
            onScrollbarXEnabledChange: P,
            scrollbarY: m,
            onScrollbarYChange: y,
            scrollbarYEnabled: S,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: _,
            onCornerHeightChange: E,
            children: (0, v.jsx)($u.sG.div, {
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
      Ly.displayName = Iy;
      var My = "ScrollAreaViewport",
        Hy = g.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...i
          } = e, a = Ay(My, r), s = g.useRef(null), l = (0, Be.s)(t, s, a.onViewportChange);
          return (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, v.jsx)($u.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...i,
              ref: l,
              style: {
                overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, v.jsx)("div", {
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
      Hy.displayName = My;
      var By = "ScrollAreaScrollbar",
        Vy = g.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Ay(By, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: a
          } = o, s = "horizontal" === e.orientation;
          return g.useEffect((() => (s ? i(!0) : a(!0), () => {
            s ? i(!1) : a(!1)
          })), [s, i, a]), "hover" === o.type ? (0, v.jsx)(Fy, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, v.jsx)(zy, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, v.jsx)(qy, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, v.jsx)(Uy, {
            ...n,
            ref: t
          }) : null
        }));
      Vy.displayName = By;
      var Fy = g.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Ay(By, e.__scopeScrollArea), [i, a] = g.useState(!1);
          return g.useEffect((() => {
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
          }), [o.scrollArea, o.scrollHideDelay]), (0, v.jsx)(kh, {
            present: r || i,
            children: (0, v.jsx)(qy, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        })),
        zy = g.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Ay(By, e.__scopeScrollArea), i = "horizontal" === e.orientation, a = lg((() => l("SCROLL_END")), 100), [s, l] = (u = {
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
          }, g.useReducer(((e, t) => u[e][t] ?? e), "hidden"));
          var u;
          return g.useEffect((() => {
            if ("idle" === s) {
              const e = window.setTimeout((() => l("HIDE")), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [s, o.scrollHideDelay, l]), g.useEffect((() => {
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
          }), [o.viewport, i, l, a]), (0, v.jsx)(kh, {
            present: r || "hidden" !== s,
            children: (0, v.jsx)(Uy, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: Bu(e.onPointerEnter, (() => l("POINTER_ENTER"))),
              onPointerLeave: Bu(e.onPointerLeave, (() => l("POINTER_LEAVE")))
            })
          })
        })),
        qy = g.forwardRef(((e, t) => {
          const r = Ay(By, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, a] = g.useState(!1),
            s = "horizontal" === e.orientation,
            l = lg((() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(s ? e : t)
              }
            }), 10);
          return ug(r.viewport, l), ug(r.content, l), (0, v.jsx)(kh, {
            present: n || i,
            children: (0, v.jsx)(Uy, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        Uy = g.forwardRef(((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Ay(By, e.__scopeScrollArea), i = g.useRef(null), a = g.useRef(0), [s, l] = g.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), u = rg(s.viewport, s.content), c = {
            ...n,
            sizes: s,
            onSizesChange: l,
            hasThumb: Boolean(u > 0 && u < 1),
            onThumbChange: e => i.current = e,
            onThumbPointerUp: () => a.current = 0,
            onThumbPointerDown: e => a.current = e
          };

          function d(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = ng(r),
                i = t || o / 2,
                a = o - i,
                s = r.scrollbar.paddingStart + i,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - a,
                u = r.content - r.viewport;
              return ig([s, l], "ltr" === n ? [0, u] : [-1 * u, 0])(e)
            }(e, a.current, s, t)
          }
          return "horizontal" === r ? (0, v.jsx)(Gy, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = og(o.viewport.scrollLeft, s, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === r ? (0, v.jsx)(Xy, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = og(o.viewport.scrollTop, s);
                i.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = d(e))
            }
          }) : null
        })),
        Gy = g.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = Ay(By, e.__scopeScrollArea), [a, s] = g.useState(), l = g.useRef(null), u = (0, Be.s)(t, l, i.onScrollbarXChange);
          return g.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, v.jsx)($y, {
            "data-orientation": "horizontal",
            ...o,
            ref: u,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": ng(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), ag(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: tg(a.paddingLeft),
                  paddingEnd: tg(a.paddingRight)
                }
              })
            }
          })
        })),
        Xy = g.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = Ay(By, e.__scopeScrollArea), [a, s] = g.useState(), l = g.useRef(null), u = (0, Be.s)(t, l, i.onScrollbarYChange);
          return g.useEffect((() => {
            l.current && s(getComputedStyle(l.current))
          }), [l]), (0, v.jsx)($y, {
            "data-orientation": "vertical",
            ...o,
            ref: u,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": ng(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), ag(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && a && n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: tg(a.paddingTop),
                  paddingEnd: tg(a.paddingBottom)
                }
              })
            }
          })
        })),
        [Wy, Ky] = Ry(By),
        $y = g.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: i,
            onThumbPointerUp: a,
            onThumbPointerDown: s,
            onThumbPositionChange: l,
            onDragScroll: u,
            onWheelScroll: c,
            onResize: d,
            ...f
          } = e, h = Ay(By, r), [p, m] = g.useState(null), y = (0, Be.s)(t, (e => m(e))), b = g.useRef(null), _ = g.useRef(""), w = h.viewport, E = n.content - n.viewport, x = Sd(c), P = Sd(l), S = lg(d, 10);

          function C(e) {
            if (b.current) {
              const t = e.clientX - b.current.left,
                r = e.clientY - b.current.top;
              u({
                x: t,
                y: r
              })
            }
          }
          return g.useEffect((() => {
            const e = e => {
              const t = e.target,
                r = p?.contains(t);
              r && x(e, E)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [w, p, E, x]), g.useEffect(P, [n, P]), ug(p, S), ug(h.content, S), (0, v.jsx)(Wy, {
            scope: r,
            scrollbar: p,
            hasThumb: o,
            onThumbChange: Sd(i),
            onThumbPointerUp: Sd(a),
            onThumbPositionChange: P,
            onThumbPointerDown: Sd(s),
            children: (0, v.jsx)($u.sG.div, {
              ...f,
              ref: y,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: Bu(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = p.getBoundingClientRect(), _.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), C(e))
              })),
              onPointerMove: Bu(e.onPointerMove, C),
              onPointerUp: Bu(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = _.current, h.viewport && (h.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        Yy = "ScrollAreaThumb",
        Zy = g.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Ky(Yy, e.__scopeScrollArea);
          return (0, v.jsx)(kh, {
            present: r || o.hasThumb,
            children: (0, v.jsx)(Qy, {
              ref: t,
              ...n
            })
          })
        })),
        Qy = g.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, i = Ay(Yy, r), a = Ky(Yy, r), {
            onThumbPositionChange: s
          } = a, l = (0, Be.s)(t, (e => a.onThumbChange(e))), u = g.useRef(void 0), c = lg((() => {
            u.current && (u.current(), u.current = void 0)
          }), 100);
          return g.useEffect((() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (c(), !u.current) {
                  const t = sg(e, s);
                  u.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [i.viewport, c, s]), (0, v.jsx)($u.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: Bu(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              a.onThumbPointerDown({
                x: r,
                y: n
              })
            })),
            onPointerUp: Bu(e.onPointerUp, a.onThumbPointerUp)
          })
        }));
      Zy.displayName = Yy;
      var Jy = "ScrollAreaCorner";
      g.forwardRef(((e, t) => {
        const r = Ay(Jy, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, v.jsx)(eg, {
          ...e,
          ref: t
        }) : null
      })).displayName = Jy;
      var eg = g.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Ay(Jy, r), [i, a] = g.useState(0), [s, l] = g.useState(0), u = Boolean(i && s);
        return ug(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        })), ug(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        })), u ? (0, v.jsx)($u.sG.div, {
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

      function tg(e) {
        return e ? parseInt(e, 10) : 0
      }

      function rg(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function ng(e) {
        const t = rg(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function og(e, t, r = "ltr") {
        const n = ng(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - n,
          l = Hu(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
        return ig([0, a], [0, s])(l)
      }

      function ig(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function ag(e, t) {
        return e > 0 && e < t
      }
      var sg = (e, t = () => {}) => {
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

      function lg(e, t) {
        const r = Sd(e),
          n = g.useRef(0);
        return g.useEffect((() => () => window.clearTimeout(n.current)), []), g.useCallback((() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }), [r, t])
      }

      function ug(e, t) {
        const r = Sd(t);
        zu((() => {
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
      var cg = Ly,
        dg = Hy,
        fg = Vy,
        hg = Zy,
        pg = [" ", "Enter", "ArrowUp", "ArrowDown"],
        mg = [" ", "Enter"],
        vg = "Select",
        [yg, gg, bg] = Zu(vg),
        [_g, wg] = Vu(vg, [bg, hh]),
        Eg = hh(),
        [xg, Pg] = _g(vg),
        [Sg, Cg] = _g(vg),
        Og = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            value: a,
            defaultValue: s,
            onValueChange: l,
            dir: u,
            name: c,
            autoComplete: d,
            disabled: f,
            required: h,
            form: p
          } = e, m = Eg(t), [y, b] = g.useState(null), [_, w] = g.useState(null), [E, x] = g.useState(!1), P = Xu(u), [S, C] = Uu({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: vg
          }), [O, T] = Uu({
            prop: a,
            defaultProp: s,
            onChange: l,
            caller: vg
          }), N = g.useRef(null), j = !y || p || !!y.closest("form"), [I, R] = g.useState(new Set), D = Array.from(I).map((e => e.props.value)).join(";");
          return (0, v.jsx)(Nh, {
            ...m,
            children: (0, v.jsxs)(xg, {
              required: h,
              scope: t,
              trigger: y,
              onTriggerChange: b,
              valueNode: _,
              onValueNodeChange: w,
              valueNodeHasChildren: E,
              onValueNodeHasChildrenChange: x,
              contentId: kd(),
              value: O,
              onValueChange: T,
              open: S,
              onOpenChange: C,
              dir: P,
              triggerPointerDownPosRef: N,
              disabled: f,
              children: [(0, v.jsx)(yg.Provider, {
                scope: t,
                children: (0, v.jsx)(Sg, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: g.useCallback((e => {
                    R((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: g.useCallback((e => {
                    R((t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    }))
                  }), []),
                  children: r
                })
              }), j ? (0, v.jsxs)(lb, {
                "aria-hidden": !0,
                required: h,
                tabIndex: -1,
                name: c,
                autoComplete: d,
                value: O,
                onChange: e => T(e.target.value),
                disabled: f,
                form: p,
                children: [void 0 === O ? (0, v.jsx)("option", {
                  value: ""
                }) : null, Array.from(I)]
              }, D) : null]
            })
          })
        };
      Og.displayName = vg;
      var Tg = "SelectTrigger",
        Ng = g.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, i = Eg(r), a = Pg(Tg, r), s = a.disabled || n, l = (0, Be.s)(t, a.onTriggerChange), u = gg(r), c = g.useRef("touch"), [d, f, h] = cb((e => {
            const t = u().filter((e => !e.disabled)),
              r = t.find((e => e.value === a.value)),
              n = db(t, e, r);
            void 0 !== n && a.onValueChange(n.value)
          })), p = e => {
            s || (a.onOpenChange(!0), h()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, v.jsx)(jh, {
            asChild: !0,
            ...i,
            children: (0, v.jsx)($u.sG.button, {
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
              "data-placeholder": ub(a.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: Bu(o.onClick, (e => {
                e.currentTarget.focus(), "mouse" !== c.current && p(e)
              })),
              onPointerDown: Bu(o.onPointerDown, (e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (p(e), e.preventDefault())
              })),
              onKeyDown: Bu(o.onKeyDown, (e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || pg.includes(e.key) && (p(), e.preventDefault())
              }))
            })
          })
        }));
      Ng.displayName = Tg;
      var jg = "SelectValue",
        Ig = g.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: i,
            placeholder: a = "",
            ...s
          } = e, l = Pg(jg, r), {
            onValueNodeHasChildrenChange: u
          } = l, c = void 0 !== i, d = (0, Be.s)(t, l.onValueNodeChange);
          return zu((() => {
            u(c)
          }), [u, c]), (0, v.jsx)($u.sG.span, {
            ...s,
            ref: d,
            style: {
              pointerEvents: "none"
            },
            children: ub(l.value) ? (0, v.jsx)(v.Fragment, {
              children: a
            }) : i
          })
        }));
      Ig.displayName = jg;
      var Rg = g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, v.jsx)($u.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      }));
      Rg.displayName = "SelectIcon";
      var Dg = e => (0, v.jsx)(Dh, {
        asChild: !0,
        ...e
      });
      Dg.displayName = "SelectPortal";
      var kg = "SelectContent",
        Ag = g.forwardRef(((e, t) => {
          const r = Pg(kg, e.__scopeSelect),
            [n, o] = g.useState();
          if (zu((() => {
              o(new DocumentFragment)
            }), []), !r.open) {
            const t = n;
            return t ? $i.createPortal((0, v.jsx)(Mg, {
              scope: e.__scopeSelect,
              children: (0, v.jsx)(yg.Slot, {
                scope: e.__scopeSelect,
                children: (0, v.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, v.jsx)(Vg, {
            ...e,
            ref: t
          })
        }));
      Ag.displayName = kg;
      var Lg = 10,
        [Mg, Hg] = _g(kg),
        Bg = (0, Yu.TL)("SelectContent.RemoveScroll"),
        Vg = g.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            side: s,
            sideOffset: l,
            align: u,
            alignOffset: c,
            arrowPadding: d,
            collisionBoundary: f,
            collisionPadding: h,
            sticky: p,
            hideWhenDetached: m,
            avoidCollisions: y,
            ...b
          } = e, _ = Pg(kg, r), [w, E] = g.useState(null), [x, P] = g.useState(null), S = (0, Be.s)(t, (e => E(e))), [C, O] = g.useState(null), [T, N] = g.useState(null), j = gg(r), [I, R] = g.useState(!1), D = g.useRef(!1);
          g.useEffect((() => {
            if (w) return Yp(w)
          }), [w]), zp();
          const k = g.useCallback((e => {
              const [t, ...r] = j().map((e => e.ref.current)), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && x && (x.scrollTop = 0), r === n && x && (x.scrollTop = x.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }), [j, x]),
            A = g.useCallback((() => k([C, w])), [k, C, w]);
          g.useEffect((() => {
            I && A()
          }), [I, A]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: M
          } = _;
          g.useEffect((() => {
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
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : w.contains(r.target) || L(!1), document.removeEventListener("pointermove", t), M.current = null
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
          }), [w, L, M]), g.useEffect((() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [L]);
          const [H, B] = cb((e => {
            const t = j().filter((e => !e.disabled)),
              r = t.find((e => e.ref.current === document.activeElement)),
              n = db(t, e, r);
            n && setTimeout((() => n.ref.current.focus()))
          })), V = g.useCallback(((e, t, r) => {
            const n = !D.current && !r;
            (void 0 !== _.value && _.value === t || n) && (O(e), n && (D.current = !0))
          }), [_.value]), F = g.useCallback((() => w?.focus()), [w]), z = g.useCallback(((e, t, r) => {
            const n = !D.current && !r;
            (void 0 !== _.value && _.value === t || n) && N(e)
          }), [_.value]), q = "popper" === n ? zg : Fg, U = q === zg ? {
            side: s,
            sideOffset: l,
            align: u,
            alignOffset: c,
            arrowPadding: d,
            collisionBoundary: f,
            collisionPadding: h,
            sticky: p,
            hideWhenDetached: m,
            avoidCollisions: y
          } : {};
          return (0, v.jsx)(Mg, {
            scope: r,
            content: w,
            viewport: x,
            onViewportChange: P,
            itemRefCallback: V,
            selectedItem: C,
            onItemLeave: F,
            itemTextRefCallback: z,
            focusSelectedItem: A,
            selectedItemText: T,
            position: n,
            isPositioned: I,
            searchRef: H,
            children: (0, v.jsx)(Up.A, {
              as: Bg,
              allowPinchZoom: !0,
              children: (0, v.jsx)(kp, {
                asChild: !0,
                trapped: _.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: Bu(o, (e => {
                  _.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, v.jsx)(Nd, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: a,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => _.onOpenChange(!1),
                  children: (0, v.jsx)(q, {
                    role: "listbox",
                    id: _.contentId,
                    "data-state": _.open ? "open" : "closed",
                    dir: _.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...b,
                    ...U,
                    onPlaced: () => R(!0),
                    ref: S,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: Bu(b.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = j().filter((e => !e.disabled));
                        let r = t.map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout((() => k(r))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      Vg.displayName = "SelectContentImpl";
      var Fg = g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, i = Pg(kg, r), a = Hg(kg, r), [s, l] = g.useState(null), [u, c] = g.useState(null), d = (0, Be.s)(t, (e => c(e))), f = gg(r), h = g.useRef(!1), p = g.useRef(!0), {
          viewport: m,
          selectedItem: y,
          selectedItemText: b,
          focusSelectedItem: _
        } = a, w = g.useCallback((() => {
          if (i.trigger && i.valueNode && s && u && m && y && b) {
            const e = i.trigger.getBoundingClientRect(),
              t = u.getBoundingClientRect(),
              r = i.valueNode.getBoundingClientRect(),
              o = b.getBoundingClientRect();
            if ("rtl" !== i.dir) {
              const n = o.left - t.left,
                i = r.left - n,
                a = e.left - i,
                l = e.width + a,
                u = Math.max(l, t.width),
                c = window.innerWidth - Lg,
                d = Hu(i, [Lg, Math.max(Lg, c - u)]);
              s.style.minWidth = l + "px", s.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                i = window.innerWidth - r.right - n,
                a = window.innerWidth - e.right - i,
                l = e.width + a,
                u = Math.max(l, t.width),
                c = window.innerWidth - Lg,
                d = Hu(i, [Lg, Math.max(Lg, c - u)]);
              s.style.minWidth = l + "px", s.style.right = d + "px"
            }
            const a = f(),
              l = window.innerHeight - 2 * Lg,
              c = m.scrollHeight,
              d = window.getComputedStyle(u),
              p = parseInt(d.borderTopWidth, 10),
              v = parseInt(d.paddingTop, 10),
              g = parseInt(d.borderBottomWidth, 10),
              _ = p + v + c + parseInt(d.paddingBottom, 10) + g,
              w = Math.min(5 * y.offsetHeight, _),
              E = window.getComputedStyle(m),
              x = parseInt(E.paddingTop, 10),
              P = parseInt(E.paddingBottom, 10),
              S = e.top + e.height / 2 - Lg,
              C = l - S,
              O = y.offsetHeight / 2,
              T = p + v + (y.offsetTop + O),
              N = _ - T;
            if (T <= S) {
              const e = a.length > 0 && y === a[a.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = u.clientHeight - m.offsetTop - m.offsetHeight,
                r = T + Math.max(C, O + (e ? P : 0) + t + g);
              s.style.height = r + "px"
            } else {
              const e = a.length > 0 && y === a[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(S, p + m.offsetTop + (e ? x : 0) + O) + N;
              s.style.height = t + "px", m.scrollTop = T - S + m.offsetTop
            }
            s.style.margin = `${Lg}px 0`, s.style.minHeight = w + "px", s.style.maxHeight = l + "px", n?.(), requestAnimationFrame((() => h.current = !0))
          }
        }), [f, i.trigger, i.valueNode, s, u, m, y, b, i.dir, n]);
        zu((() => w()), [w]);
        const [E, x] = g.useState();
        zu((() => {
          u && x(window.getComputedStyle(u).zIndex)
        }), [u]);
        const P = g.useCallback((e => {
          e && !0 === p.current && (w(), _?.(), p.current = !1)
        }), [w, _]);
        return (0, v.jsx)(qg, {
          scope: r,
          contentWrapper: s,
          shouldExpandOnScrollRef: h,
          onScrollButtonChange: P,
          children: (0, v.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: E
            },
            children: (0, v.jsx)($u.sG.div, {
              ...o,
              ref: d,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      }));
      Fg.displayName = "SelectItemAlignedPosition";
      var zg = g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = Lg,
          ...i
        } = e, a = Eg(r);
        return (0, v.jsx)(Ih, {
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
      zg.displayName = "SelectPopperPosition";
      var [qg, Ug] = _g(kg, {}), Gg = "SelectViewport", Xg = g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, i = Hg(Gg, r), a = Ug(Gg, r), s = (0, Be.s)(t, i.onViewportChange), l = g.useRef(0);
        return (0, v.jsxs)(v.Fragment, {
          children: [(0, v.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, v.jsx)(yg.Slot, {
            scope: r,
            children: (0, v.jsx)($u.sG.div, {
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
              onScroll: Bu(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = a;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * Lg,
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
      Xg.displayName = Gg;
      var Wg = "SelectGroup",
        [Kg, $g] = _g(Wg);
      g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = kd();
        return (0, v.jsx)(Kg, {
          scope: r,
          id: o,
          children: (0, v.jsx)($u.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      })).displayName = Wg;
      var Yg = "SelectLabel";
      g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = $g(Yg, r);
        return (0, v.jsx)($u.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      })).displayName = Yg;
      var Zg = "SelectItem",
        [Qg, Jg] = _g(Zg),
        eb = g.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: i,
            ...a
          } = e, s = Pg(Zg, r), l = Hg(Zg, r), u = s.value === n, [c, d] = g.useState(i ?? ""), [f, h] = g.useState(!1), p = (0, Be.s)(t, (e => l.itemRefCallback?.(e, n, o))), m = kd(), y = g.useRef("touch"), b = () => {
            o || (s.onValueChange(n), s.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, v.jsx)(Qg, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: u,
            onItemTextChange: g.useCallback((e => {
              d((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, v.jsx)(yg.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, v.jsx)($u.sG.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": u && f,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: p,
                onFocus: Bu(a.onFocus, (() => h(!0))),
                onBlur: Bu(a.onBlur, (() => h(!1))),
                onClick: Bu(a.onClick, (() => {
                  "mouse" !== y.current && b()
                })),
                onPointerUp: Bu(a.onPointerUp, (() => {
                  "mouse" === y.current && b()
                })),
                onPointerDown: Bu(a.onPointerDown, (e => {
                  y.current = e.pointerType
                })),
                onPointerMove: Bu(a.onPointerMove, (e => {
                  y.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: Bu(a.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                })),
                onKeyDown: Bu(a.onKeyDown, (e => {
                  "" !== l.searchRef?.current && " " === e.key || (mg.includes(e.key) && b(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      eb.displayName = Zg;
      var tb = "SelectItemText",
        rb = g.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...i
          } = e, a = Pg(tb, r), s = Hg(tb, r), l = Jg(tb, r), u = Cg(tb, r), [c, d] = g.useState(null), f = (0, Be.s)(t, (e => d(e)), l.onItemTextChange, (e => s.itemTextRefCallback?.(e, l.value, l.disabled))), h = c?.textContent, p = g.useMemo((() => (0, v.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: h
          }, l.value)), [l.disabled, l.value, h]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: y
          } = u;
          return zu((() => (m(p), () => y(p))), [m, y, p]), (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsx)($u.sG.span, {
              id: l.textId,
              ...i,
              ref: f
            }), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? $i.createPortal(i.children, a.valueNode) : null]
          })
        }));
      rb.displayName = tb;
      var nb = "SelectItemIndicator";
      g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Jg(nb, r).isSelected ? (0, v.jsx)($u.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      })).displayName = nb;
      var ob = "SelectScrollUpButton";
      g.forwardRef(((e, t) => {
        const r = Hg(ob, e.__scopeSelect),
          n = Ug(ob, e.__scopeSelect),
          [o, i] = g.useState(!1),
          a = (0, Be.s)(t, n.onScrollButtonChange);
        return zu((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, v.jsx)(ab, {
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
      })).displayName = ob;
      var ib = "SelectScrollDownButton";
      g.forwardRef(((e, t) => {
        const r = Hg(ib, e.__scopeSelect),
          n = Ug(ib, e.__scopeSelect),
          [o, i] = g.useState(!1),
          a = (0, Be.s)(t, n.onScrollButtonChange);
        return zu((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              i(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, v.jsx)(ab, {
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
      })).displayName = ib;
      var ab = g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, i = Hg("SelectScrollButton", r), a = g.useRef(null), s = gg(r), l = g.useCallback((() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }), []);
        return g.useEffect((() => () => l()), [l]), zu((() => {
          const e = s().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [s]), (0, v.jsx)($u.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: Bu(o.onPointerDown, (() => {
            null === a.current && (a.current = window.setInterval(n, 50))
          })),
          onPointerMove: Bu(o.onPointerMove, (() => {
            i.onItemLeave?.(), null === a.current && (a.current = window.setInterval(n, 50))
          })),
          onPointerLeave: Bu(o.onPointerLeave, (() => {
            l()
          }))
        })
      }));
      g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, v.jsx)($u.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var sb = "SelectArrow";
      g.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Eg(r), i = Pg(sb, r), a = Hg(sb, r);
        return i.open && "popper" === a.position ? (0, v.jsx)(Rh, {
          ...o,
          ...n,
          ref: t
        }) : null
      })).displayName = sb;
      var lb = g.forwardRef((({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = g.useRef(null),
          i = (0, Be.s)(n, o),
          a = Wu(t);
        return g.useEffect((() => {
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
        }), [a, t]), (0, v.jsx)($u.sG.select, {
          ...r,
          style: {
            ...Lh.Qg,
            ...r.style
          },
          ref: i,
          defaultValue: t
        })
      }));

      function ub(e) {
        return "" === e || void 0 === e
      }

      function cb(e) {
        const t = Sd(e),
          r = g.useRef(""),
          n = g.useRef(0),
          o = g.useCallback((e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout((() => e("")), 1e3))
              }(o)
          }), [t]),
          i = g.useCallback((() => {
            r.current = "", window.clearTimeout(n.current)
          }), []);
        return g.useEffect((() => () => window.clearTimeout(n.current)), []), [r, o, i]
      }

      function db(e, t, r) {
        const n = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === n.length && (i = i.filter((e => e !== r)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(n.toLowerCase())));
        return l !== r ? l : void 0
      }
      lb.displayName = "SelectBubbleInput";
      var fb = Og,
        hb = Ng,
        pb = Ig,
        mb = Rg,
        vb = Dg,
        yb = Ag,
        gb = Xg,
        bb = eb,
        _b = rb,
        wb = r(73028);

      function Eb(e) {
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

      function xb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Pb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xb(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Eb(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xb(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Sb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Cb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ob = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Pb(Pb({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Cb(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Sb(e.variantClassNames, (e => Sb(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Tb = Ob({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Nb = Ob({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy foundry_tdsdcd10",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        jb = Ob({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ib = Ob({
          defaultClassName: "foundry_uaq1gw1 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy foundry_tdsdcd11",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw2"
            },
            showAsterisk: {
              true: "foundry_uaq1gw3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Rb = Ob({
          defaultClassName: "foundry_uaq1gw6 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx foundry_tdsdcd10",
          variantClassNames: {
            size: {
              MD: "foundry_uaq1gw7",
              LG: "foundry_uaq1gw8"
            },
            isPressed: {
              true: "foundry_uaq1gw9",
              false: "foundry_uaq1gwa"
            },
            isReadOnly: {
              true: "foundry_uaq1gwb"
            },
            isInvalid: {
              true: "foundry_uaq1gwc"
            },
            isDisabled: {
              true: "foundry_uaq1gwd",
              false: "foundry_uaq1gwe"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !0,
              isInvalid: !0
            }, "foundry_uaq1gwf"],
            [{
              isReadOnly: !0,
              isInvalid: !0
            }, "foundry_uaq1gwg"]
          ]
        }),
        Db = Ob({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const kb = (0, g.createContext)(null);

      function Ab() {
        const e = (0, g.useContext)(kb);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Lb = (0, g.forwardRef)((({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: i,
          onValueChange: a,
          name: s,
          value: l,
          defaultOpen: u,
          onOpenChange: c,
          isOpen: d,
          size: f = "MD",
          status: h = "neutral",
          ...p
        }, m) => {
          const b = (0, g.useRef)(null),
            _ = (0, Me.UP)(b, m),
            w = (0, g.useId)(),
            E = (0, g.useId)(),
            x = (0, g.useId)(),
            P = (0, g.useId)(),
            S = (0, g.useId)(),
            C = (0, g.useId)(),
            [O = !1, T] = (0, Me.ic)({
              prop: d,
              defaultProp: u,
              onChange: c
            }),
            N = (0, y.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, p);
          return (0, v.jsx)(kb.Provider, {
            value: {
              labelId: w,
              errorId: E,
              descriptionId: x,
              triggerId: C,
              hintId: P,
              popoverId: S,
              defaultValue: i,
              onValueChange: a,
              value: l,
              isOpen: O,
              setIsOpen: T,
              defaultOpen: u,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: h,
              size: f
            },
            children: (0, v.jsx)(fb, {
              required: r,
              disabled: n,
              open: O,
              onOpenChange: () => T(!o && !O),
              value: l,
              defaultValue: i,
              onValueChange: a,
              name: s,
              children: (0, v.jsx)("div", {
                ref: _,
                ...N,
                children: e
              })
            })
          })
        })),
        Mb = (0, g.forwardRef)((({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: i
          } = Ab(), a = (0, y.v6)({
            id: i,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Tb({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, v.jsx)(yb, {
            ...a,
            ref: o,
            children: (0, v.jsx)(gb, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        })),
        Hb = (0, g.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, y.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, v.jsxs)(cg, {
            ...o,
            ref: n,
            children: [(0, v.jsx)(dg, {
              className: "foundry_uaq1gwu",
              style: {
                overflowY: void 0
              },
              children: e
            }), (0, v.jsx)(fg, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, v.jsx)(hg, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        })),
        Bb = (0, g.forwardRef)((({
          children: e,
          testId: t,
          "aria-labelledby": r,
          "aria-describedby": n,
          asChild: o,
          ...i
        }, a) => {
          const {
            isReadOnly: s,
            status: l,
            isDisabled: u,
            labelId: c,
            hintId: d,
            triggerId: f,
            popoverId: h,
            descriptionId: p,
            isOpen: m,
            value: g,
            size: b
          } = Ab(), {
            isPressed: _,
            pressProps: E
          } = fy({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), x = (0, y.v6)({
            id: f,
            className: Rb({
              size: b,
              isReadOnly: !!s,
              isInvalid: "invalid" === l,
              isPressed: !!_,
              isDisabled: !!u
            }),
            "aria-labelledby": (0, y.VW)(r, c, d),
            "aria-describedby": (0, y.VW)(n, p),
            "aria-activedescendant": g,
            "aria-controls": h,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!_
          }, (0, y.cJ)(E, "onKeyDown"), i), P = o ? w.DX : hb;
          return (0, v.jsx)(P, {
            ...x,
            ref: a,
            children: e
          })
        })),
        Vb = (0, g.forwardRef)((({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            value: i
          } = Ab(), a = (0, y.v6)({
            className: "foundry_uaq1gwh",
            "data-testid": r
          }, n), s = t ? w.DX : "span";
          return (0, v.jsx)(s, {
            ...a,
            ref: o,
            children: (0, v.jsx)(pb, {
              placeholder: e,
              "aria-label": i
            })
          })
        })),
        Fb = (0, g.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: i,
            isOpen: a
          } = Ab(), s = a ? wb.ChevronUp : wb.ChevronDown, l = (0, y.v6)({
            asChild: !0,
            className: Db({
              isDisabled: i || o
            }),
            "data-testid": t
          }, r);
          return (0, v.jsx)(mb, {
            ...l,
            ref: n,
            children: e || (0, v.jsx)(s, {
              size: "LG",
              label: ""
            })
          })
        })),
        zb = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...i
        }, a) => {
          const {
            isRequired: s,
            isDisabled: l,
            labelId: u,
            triggerId: c
          } = Ab(), d = s && !o, f = (0, y.v6)({
            id: i.id || u,
            htmlFor: c,
            "data-testid": e,
            className: Ib({
              showAsterisk: d,
              isDisabled: l
            })
          }, i), h = t ? w.DX : "label";
          return (0, v.jsx)(w.s6, {
            enabled: n,
            children: (0, v.jsx)(h, {
              ...f,
              ref: a,
              children: r
            })
          })
        })),
        qb = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = Ab(), s = (0, y.v6)({
            className: Nb({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, n), l = r ? w.DX : "div";
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Ub = (0, g.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: a
          } = Ab(), s = (0, y.v6)({
            className: jb({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? w.DX : "div";
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Gb = (0, g.forwardRef)((({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, i) => {
          const a = (0, g.useRef)(null),
            s = (0, Me.UP)(a, i),
            l = (0, y.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx foundry_tdsdcd10",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, v.jsx)(bb, {
            ref: s,
            ...l,
            children: e
          })
        })),
        Xb = (0, g.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, y.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, v.jsx)(_b, {
            ref: n,
            asChild: !0,
            children: (0, v.jsx)("span", {
              ...o,
              children: e
            })
          })
        })),
        Wb = (0, g.forwardRef)((({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, y.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, v.jsx)(mb, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        })),
        Kb = vb,
        $b = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: a
          } = Ab(), s = (0, y.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: i,
            status: a
          }, n), l = r ? w.DX : Ty;
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Yb = Ny,
        Zb = jy;
      var Qb = r(36768),
        Jb = r(99098),
        e_ = r(79888);

      function t_(e, t, r) {
        let n = (0, g.useRef)(t),
          o = (0, e_.J)((() => {
            r && r(n.current)
          }));
        (0, g.useEffect)((() => {
          var t;
          let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == r || r.addEventListener("reset", o), () => {
            null == r || r.removeEventListener("reset", o)
          }
        }), [e, o])
      }
      var r_ = r(41149),
        n_ = r(52061);

      function o_(e, t, r) {
        let {
          isDisabled: n = !1,
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
        } = (0, r_.d)({
          isDisabled: n
        }), {
          pressProps: p,
          isPressed: m
        } = (0, r_.d)({
          onPress() {
            var e;
            t.toggle(), null === (e = r.current) || void 0 === e || e.focus()
          },
          isDisabled: n || o
        }), {
          focusableProps: v
        } = (0, n_.Wc)(e, r), y = (0, Qb.v)(f, v), g = (0, Jb.$)(e, {
          labelable: !0
        });
        return t_(r, t.isSelected, t.setSelected), {
          labelProps: (0, Qb.v)(p, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, Qb.v)(g, {
            "aria-invalid": d || "invalid" === c || void 0,
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
            ...y
          }),
          isSelected: t.isSelected,
          isPressed: h || m,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: d || "invalid" === c
        }
      }

      function i_(e, t, r) {
        let [n, o] = (0, g.useState)(e || t), i = (0, g.useRef)(void 0 !== e), a = void 0 !== e;
        (0, g.useEffect)((() => {
          i.current, i.current = a
        }), [a]);
        let s = a ? e : n,
          l = (0, g.useCallback)(((e, ...t) => {
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

      function a_(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = i_(e.isSelected, e.defaultSelected || !1, e.onChange);
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

      function s_(e) {
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

      function l_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function u_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? l_(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = s_(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l_(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function c_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var d_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        f_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = u_(u_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) d_(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return c_(e.variantClassNames, (e => c_(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        h_ = f_({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz foundry_tdsdcd10",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        p_ = f_({
          defaultClassName: "foundry_okz6z2m",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z2n foundry_okz6z2i foundry_okz6z2j",
              LG: "foundry_okz6z2o foundry_okz6z2k foundry_okz6z2l"
            },
            isSelected: {
              true: "foundry_okz6z2p"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        m_ = f_({
          defaultClassName: "foundry_okz6z2b",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy foundry_tdsdcd10",
              LG: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx foundry_tdsdcd10"
            },
            isDisabled: {
              true: "foundry_okz6z2e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        v_ = f_({
          defaultClassName: "foundry_okz6z28 foundry_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z29 foundry_okz6z24 foundry_okz6z25",
              LG: "foundry_okz6z2a foundry_okz6z26 foundry_okz6z27"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        y_ = f_({
          defaultClassName: "foundry_okz6z21",
          variantClassNames: {
            appearance: {
              primary: "foundry_okz6z22",
              secondary: "foundry_okz6z23"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const g_ = (0, g.createContext)(null);

      function b_() {
        const e = (0, g.useContext)(g_);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const __ = (0, g.forwardRef)((({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: i = !1,
          isReadOnly: a = !1,
          ...s
        }, l) => {
          const u = (0, y.v6)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, s),
            c = n ? w.DX : "div",
            d = (0, g.useId)(),
            f = (0, g.useId)(),
            h = (0, g.useId)();
          return (0, v.jsx)(g_.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: d,
              descriptionId: f,
              inputId: h,
              isDisabled: i,
              isReadOnly: a,
              ...s
            },
            children: (0, v.jsx)(c, {
              ...u,
              ref: l,
              children: o
            })
          })
        })),
        w_ = (0, g.forwardRef)((({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: i,
          isSelected: a,
          defaultSelected: s,
          onSelectedChange: l,
          name: u,
          value: c,
          ...d
        }, f) => {
          const h = (0, g.useRef)(null),
            p = (0, Me.UP)(h, f),
            {
              size: m,
              appearance: b,
              inputId: _,
              labelId: E,
              descriptionId: x,
              isDisabled: P,
              isReadOnly: S
            } = b_(),
            C = a_({
              isDisabled: P,
              isReadOnly: S,
              isSelected: a,
              defaultSelected: s,
              onChange: l
            }),
            {
              inputProps: O
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: i,
                isPressed: a,
                isDisabled: s,
                isReadOnly: l
              } = o_(e, t, r);
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
              id: i || _,
              "aria-labelledby": (0, y.VW)(n, E),
              "aria-describedby": (0, y.VW)(o, x),
              name: u,
              value: c,
              isDisabled: P,
              isReadOnly: S
            }, C, h),
            T = (0, y.v6)({
              className: y_({
                appearance: b
              }),
              "data-state": C.isSelected ? "selected" : "unselected",
              "data-disabled": P || S,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || P || S || C.toggle()
              }
            }, d);
          return (0, v.jsxs)("div", {
            ...T,
            children: [(0, v.jsx)(w.s6, {
              children: (0, v.jsx)("input", {
                ...O,
                ref: p
              })
            }), (0, v.jsx)("div", {
              className: v_({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, v.jsx)("div", {
                className: p_({
                  size: m,
                  isSelected: C.isSelected
                })
              })
            })]
          })
        })),
        E_ = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, i) => {
          const {
            isDisabled: a,
            labelId: s,
            inputId: l,
            size: u
          } = b_(), c = (0, y.v6)({
            id: o.id || s,
            htmlFor: l,
            "data-testid": e,
            className: m_({
              isDisabled: a,
              size: u
            })
          }, o), d = t ? w.DX : "label";
          return (0, v.jsx)(w.s6, {
            enabled: n,
            children: (0, v.jsx)(d, {
              ...c,
              ref: i,
              children: r
            })
          })
        })),
        x_ = (0, g.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = b_(), s = n.id || a, l = (0, y.v6)({
            className: h_({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), u = t ? w.DX : "div";
          return (0, v.jsx)(u, {
            ...l,
            ref: o,
            children: e
          })
        })),
        P_ = {
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
        S_ = {
          ...P_,
          customError: !0,
          valid: !1
        },
        C_ = {
          isInvalid: !1,
          validationDetails: P_,
          validationErrors: []
        },
        O_ = (0, g.createContext)({}),
        T_ = "__formValidationState" + Date.now();

      function N_(e) {
        if (e[T_]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          } = e[T_];
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
              validationDetails: S_
            } : null,
            u = (0, g.useMemo)((() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return j_(r)
                }
                return []
              }(a, o);
              return I_(e)
            }), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let c = (0, g.useContext)(O_),
            d = (0, g.useMemo)((() => n ? Array.isArray(n) ? n.flatMap((e => j_(c[e]))) : j_(c[n]) : []), [c, n]),
            [f, h] = (0, g.useState)(c),
            [p, m] = (0, g.useState)(!1);
          c !== f && (h(c), m(!1));
          let v = (0, g.useMemo)((() => I_(p ? [] : d)), [p, d]),
            y = (0, g.useRef)(C_),
            [b, _] = (0, g.useState)(C_),
            w = (0, g.useRef)(C_),
            [E, x] = (0, g.useState)(!1);
          return (0, g.useEffect)((() => {
            if (!E) return;
            x(!1);
            let e = u || i || y.current;
            R_(e, w.current) || (w.current = e, _(e))
          })), {
            realtimeValidation: l || v || u || i || C_,
            displayValidation: "native" === s ? l || v || b : l || v || u || i || b,
            updateValidation(e) {
              "aria" !== s || R_(b, e) ? y.current = e : _(e)
            },
            resetValidation() {
              let e = C_;
              R_(e, w.current) || (w.current = e, _(e)), "native" === s && x(!1), m(!0)
            },
            commitValidation() {
              "native" === s && x(!0), m(!0)
            }
          }
        }(e)
      }

      function j_(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function I_(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: S_
        } : null
      }

      function R_(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, r) => e === t.validationErrors[r])) && Object.entries(e.validationDetails).every((([e, r]) => t.validationDetails[e] === r))
      }
      var D_ = r(38223),
        k_ = r(28830);

      function A_(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        (0, k_.N)((() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: L_(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let i = (0, e_.J)((() => {
            t.resetValidation()
          })),
          a = (0, e_.J)((e => {
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
            }(i) === r.current && (o ? o() : null === (a = r.current) || void 0 === a || a.focus(), (0, D_.Cl)("keyboard")), e.preventDefault()
          })),
          s = (0, e_.J)((() => {
            t.commitValidation()
          }));
        (0, g.useEffect)((() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form;
          return e.addEventListener("invalid", a), e.addEventListener("change", s), null == t || t.addEventListener("reset", i), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", s), null == t || t.removeEventListener("reset", i)
          }
        }), [r, a, s, i, n])
      }

      function L_(e) {
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
      const M_ = ({
          color: e = "currentColor"
        }) => (0, v.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, v.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        H_ = ({
          color: e = "currentColor"
        }) => (0, v.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, v.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        B_ = ({
          color: e = "currentColor"
        }) => (0, v.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, v.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        V_ = ({
          color: e = "currentColor"
        }) => (0, v.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, v.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        F_ = ({
          color: e = "currentColor"
        }) => (0, v.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, v.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        z_ = ({
          color: e = "currentColor"
        }) => (0, v.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, v.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function q_(e) {
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

      function U_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function G_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? U_(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = q_(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : U_(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function X_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var W_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        K_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = G_(G_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) W_(u, n, e.defaultVariants) && (r += " " + c);
            return r
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
          defaultClassName: "foundry_11gbdty6 foundry_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdty7",
              LG: "foundry_11gbdty8",
              XL: "foundry_11gbdty9"
            },
            appearance: {
              primary: "foundry_11gbdtya",
              secondary: "foundry_11gbdtyb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Y_ = K_({
          defaultClassName: "foundry_11gbdty2",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdty3",
              LG: "foundry_11gbdty4",
              XL: "foundry_11gbdty5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Z_ = K_({
          defaultClassName: "foundry_11gbdtyj foundry_8kowh41 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz foundry_tdsdcd10",
          variantClassNames: {
            isDisabled: {
              false: "foundry_11gbdtyk",
              true: "foundry_11gbdtyl"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Q_ = K_({
          defaultClassName: "foundry_11gbdtyd",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz foundry_tdsdcd10",
              LG: "foundry_11gbdtyf foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy foundry_tdsdcd10",
              XL: "foundry_11gbdtyg foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx foundry_tdsdcd10"
            },
            isDisabled: {
              true: "foundry_11gbdtyh"
            },
            showAsterisk: {
              true: "foundry_11gbdtyi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const J_ = (0, g.createContext)(null);

      function ew() {
        const e = (0, g.useContext)(J_);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const tw = (0, g.forwardRef)((({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...i
        }, a) => {
          const s = (0, y.v6)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, y.cJ)(i, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = n ? w.DX : "div",
            u = (0, g.useId)(),
            c = (0, g.useId)(),
            d = (0, g.useId)();
          return (0, v.jsx)(J_.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: u,
              descriptionId: c,
              inputId: d,
              ...i
            },
            children: (0, v.jsx)(l, {
              ...s,
              ref: a,
              children: o
            })
          })
        })),
        rw = (0, g.forwardRef)((({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: i,
          onClick: s,
          "aria-describedby": l,
          "aria-errormessage": u,
          "aria-labelledby": c,
          ...d
        }, f) => {
          const {
            size: h,
            appearance: p,
            isIndeterminate: m,
            isRequired: b,
            descriptionId: _,
            labelId: E,
            inputId: x,
            ...P
          } = ew(), S = (0, g.useRef)(null), C = d.id || x, {
            isPressed: O,
            pressProps: T
          } = fy({
            ref: S
          }), {
            setSelected: N,
            toggle: j,
            ...I
          } = a_({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: R,
            isSelected: D,
            isDisabled: k,
            isReadOnly: A
          } = function(e, t, r) {
            let n = N_({
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
                isSelected: u,
                isPressed: c,
                isDisabled: d,
                isReadOnly: f
              } = o_({
                ...e,
                isInvalid: o
              }, t, r);
            A_(e, n, r);
            let {
              isIndeterminate: h,
              isRequired: p,
              validationBehavior: m = "aria"
            } = e;
            (0, g.useEffect)((() => {
              r.current && (r.current.indeterminate = !!h)
            }));
            let {
              pressProps: v
            } = (0, r_.d)({
              isDisabled: d || f,
              onPress() {
                let {
                  [T_]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: (0, Qb.v)(s, v),
              inputProps: {
                ...l,
                checked: u,
                "aria-required": p && "aria" === m || void 0,
                required: p && "native" === m
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
            "aria-label": "",
            id: C,
            name: o,
            ...P
          }, {
            ...I,
            toggle: j,
            setSelected: P.isReadOnly ? () => !1 : N
          }, S), L = (0, y.v6)({
            className: Y_({
              size: h
            }),
            onClick: e => {
              i?.(e) ?? s?.(e), e.defaultPrevented || k || A || j()
            }
          }, T, d), M = (0, y.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, y.VW)(c, E),
            "aria-describedby": (0, y.VW)(l, _),
            "aria-errormessage": (0, y.VW)(u, P.isInvalid ? _ : void 0),
            "aria-required": b,
            required: b
          }, R), H = m ? a[`Dash${h}`] : a[`Check${h}`];
          return (0, v.jsxs)("div", {
            ...L,
            children: [(0, v.jsx)(w.s6, {
              children: (0, v.jsx)("input", {
                ...M,
                ref: f
              })
            }), (0, v.jsx)("div", {
              className: $_({
                size: h,
                appearance: p
              }),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : D ? "checked" : "unchecked",
              "data-disabled": k || A,
              "data-testid": e,
              "data-pressed": O,
              children: (0, v.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (D || m) && (0, v.jsx)(H, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        })),
        nw = (0, g.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...i
        }, a) => {
          const {
            size: s,
            labelId: l,
            inputId: u,
            isRequired: c
          } = ew(), d = i.id || l, f = c && !o, h = (0, y.v6)({
            className: Q_({
              size: s,
              showAsterisk: f
            }),
            "data-testid": r,
            id: d,
            htmlFor: i.htmlFor || u
          }, i), p = t ? w.DX : "label";
          return (0, v.jsx)(w.s6, {
            enabled: n,
            children: (0, v.jsx)(p, {
              ...h,
              ref: a,
              children: e
            })
          })
        })),
        ow = (0, g.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = ew(), s = n.id || a, l = (0, y.v6)({
            className: Z_({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), u = t ? w.DX : "div";
          return (0, v.jsx)(u, {
            ...l,
            ref: o,
            children: e
          })
        })),
        iw = (0, g.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = ew(), a = n.id || i, s = (0, y.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz foundry_tdsdcd10",
            "data-testid": r,
            id: a
          }, n), l = t ? w.DX : "div";
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        }));

      function aw(e) {
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

      function sw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function lw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sw(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = aw(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sw(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function uw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var cw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lw(lw({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) cw(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return uw(e.variantClassNames, (e => uw(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        fw = dw({
          defaultClassName: "foundry_vq8c3j6 foundry_8kowh41 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy foundry_tdsdcd10",
          variantClassNames: {
            isDisabled: {
              false: "foundry_vq8c3j7",
              true: "foundry_vq8c3j8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        hw = dw({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        pw = dw({
          defaultClassName: "foundry_vq8c3j1 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy foundry_tdsdcd11",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j2"
            },
            showAsterisk: {
              true: "foundry_vq8c3j3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        mw = dw({
          defaultClassName: "foundry_vq8c3j9 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx foundry_tdsdcd10",
          variantClassNames: {
            isDisabled: {
              false: "foundry_vq8c3ja",
              true: "foundry_vq8c3jb"
            },
            isReadOnly: {
              false: "foundry_vq8c3jc",
              true: "foundry_vq8c3jd"
            },
            isPressed: {
              false: "foundry_vq8c3je",
              true: "foundry_vq8c3jf"
            },
            isInvalid: {
              false: "foundry_vq8c3jg",
              true: "foundry_vq8c3jh"
            },
            isSuccess: {
              true: "foundry_vq8c3ji"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !1,
              isSuccess: !1,
              isReadOnly: !1,
              isInvalid: !1
            }, "foundry_vq8c3jj"],
            [{
              isDisabled: !1,
              isPressed: !0
            }, "foundry_vq8c3jk"],
            [{
              isInvalid: !0,
              isPressed: !0
            }, "foundry_vq8c3jl"]
          ]
        });
      const vw = (0, g.createContext)(null);

      function yw() {
        const e = (0, g.useContext)(vw);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const gw = (0, g.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: a = "neutral",
          ...s
        }, l) => {
          const u = (0, y.v6)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, s),
            c = e ? w.DX : "div",
            d = (0, g.useId)(),
            f = (0, g.useId)(),
            h = (0, g.useId)(),
            p = (0, g.useId)();
          return (0, v.jsx)(vw.Provider, {
            value: {
              labelId: d,
              descriptionId: f,
              hintId: h,
              inputId: p,
              isDisabled: n,
              isReadOnly: o,
              isRequired: i,
              status: a,
              ...s
            },
            children: (0, v.jsx)(c, {
              ref: l,
              ...u,
              children: t
            })
          })
        })),
        bw = (0, g.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...i
        }, a) => {
          const {
            labelId: s,
            inputId: l,
            isDisabled: u,
            isRequired: c
          } = yw(), d = (0, y.v6)({
            className: pw({
              isDisabled: u,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: s,
            htmlFor: l
          }, i), f = t ? w.DX : "label";
          return (0, v.jsx)(w.s6, {
            enabled: n,
            children: (0, v.jsx)(f, {
              ...d,
              ref: a,
              children: e
            })
          })
        })),
        _w = (0, g.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
          defaultValue: o,
          name: i,
          placeholder: a = " ",
          "aria-labelledby": s,
          "aria-describedby": l,
          ...u
        }, c) => {
          const {
            descriptionId: d,
            labelId: f,
            inputId: h,
            hintId: p,
            isDisabled: m,
            isRequired: b,
            isReadOnly: _,
            status: E
          } = yw(), x = (0, g.useRef)(null), P = (0, Me.UP)(x, c), {
            isPressed: S,
            pressProps: C
          } = fy({}), O = (0, y.v6)({
            className: mw({
              isInvalid: "invalid" === E,
              isDisabled: m,
              isReadOnly: _,
              isPressed: S,
              isSuccess: "success" === E
            }),
            name: i,
            id: u.id || h,
            rows: n,
            defaultValue: o,
            disabled: m,
            required: b,
            readOnly: _,
            placeholder: a,
            "aria-labelledby": (0, y.VW)(u.id, f, p, s),
            "aria-describedby": (0, y.VW)(d, l),
            "data-testid": r,
            ..."invalid" === E && {
              "aria-invalid": !0,
              "aria-errormessage": d
            },
            ..."success" === E && {
              "data-success": !0
            },
            ...m && {
              "aria-disabled": !0
            },
            ...b && {
              "aria-required": !0
            }
          }, C, u), T = e ? w.DX : "textarea";
          return (0, v.jsx)(T, {
            ref: P,
            ...O,
            children: t
          })
        })),
        ww = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = yw(), s = (0, y.v6)({
            className: fw({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, n), l = r ? w.DX : "div";
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Ew = (0, g.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: a
          } = yw(), s = (0, y.v6)({
            className: hw({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? w.DX : "div";
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        xw = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: a
          } = yw(), s = (0, y.v6)({
            className: "foundry_vq8c3jm",
            "data-testid": t,
            descriptionId: i,
            status: a
          }, n), l = r ? w.DX : Ty;
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Pw = Ny,
        Sw = jy;
      let Cw = Math.round(1e10 * Math.random()),
        Ow = 0;
      const Tw = new WeakMap;
      var Nw = r(49652),
        jw = r(62993);

      function Iw(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = (0, jw.mD)(e);
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
        }(e, t) && (!e.parentElement || Iw(e.parentElement, e))
      }
      var Rw = r(5606),
        Dw = r(13569),
        kw = r(35412);
      class Aw {
        get currentNode() {
          return this._currentNode
        }
        set currentNode(e) {
          if (!(0, Dw.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
          const t = [];
          let r = e,
            n = e;
          for (this._currentNode = e; r && r !== this.root;)
            if (r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              const e = r,
                o = this._doc.createTreeWalker(e, this.whatToShow, {
                  acceptNode: this._acceptNode
                });
              t.push(o), o.currentNode = n, this._currentSetFor.add(o), r = n = e.host
            } else r = r.parentNode;
          const o = this._doc.createTreeWalker(this.root, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          t.push(o), o.currentNode = n, this._currentSetFor.add(o), this._walkerStack = t
        }
        get doc() {
          return this._doc
        }
        firstChild() {
          let e = this.currentNode,
            t = this.nextNode();
          return (0, Dw.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
        }
        lastChild() {
          let e = this._walkerStack[0].lastChild();
          return e && (this.currentNode = e), e
        }
        nextNode() {
          const e = this._walkerStack[0].nextNode();
          if (e) {
            if (e.shadowRoot) {
              var t;
              let r;
              if ("function" == typeof this.filter ? r = this.filter(e) : (null === (t = this.filter) || void 0 === t ? void 0 : t.acceptNode) && (r = this.filter.acceptNode(e)), r === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
              let n = this.nextNode();
              return n && (this.currentNode = n), n
            }
            return e && (this.currentNode = e), e
          }
          if (this._walkerStack.length > 1) {
            this._walkerStack.shift();
            let e = this.nextNode();
            return e && (this.currentNode = e), e
          }
          return null
        }
        previousNode() {
          const e = this._walkerStack[0];
          if (e.currentNode === e.root) {
            if (this._currentSetFor.has(e)) {
              if (this._currentSetFor.delete(e), this._walkerStack.length > 1) {
                this._walkerStack.shift();
                let e = this.previousNode();
                return e && (this.currentNode = e), e
              }
              return null
            }
            return null
          }
          const t = e.previousNode();
          if (t) {
            if (t.shadowRoot) {
              var r;
              let e;
              if ("function" == typeof this.filter ? e = this.filter(t) : (null === (r = this.filter) || void 0 === r ? void 0 : r.acceptNode) && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
              let n = this.lastChild();
              return n && (this.currentNode = n), n
            }
            return t && (this.currentNode = t), t
          }
          if (this._walkerStack.length > 1) {
            this._walkerStack.shift();
            let e = this.previousNode();
            return e && (this.currentNode = e), e
          }
          return null
        }
        nextSibling() {
          return null
        }
        previousSibling() {
          return null
        }
        parentNode() {
          return null
        }
        constructor(e, t, r, n) {
          this._walkerStack = [], this._currentSetFor = new Set, this._acceptNode = e => {
            if (e.nodeType === Node.ELEMENT_NODE) {
              const r = e.shadowRoot;
              if (r) {
                const e = this._doc.createTreeWalker(r, this.whatToShow, {
                  acceptNode: this._acceptNode
                });
                return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT
              }
              var t;
              if ("function" == typeof this.filter) return this.filter(e);
              if (null === (t = this.filter) || void 0 === t ? void 0 : t.acceptNode) return this.filter.acceptNode(e);
              if (null === this.filter) return NodeFilter.FILTER_ACCEPT
            }
            return NodeFilter.FILTER_SKIP
          }, this._doc = e, this.root = t, this.filter = null != n ? n : null, this.whatToShow = null != r ? r : NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, r, this._acceptNode));
          const o = t.shadowRoot;
          if (o) {
            const e = this._doc.createTreeWalker(o, this.whatToShow, {
              acceptNode: this._acceptNode
            });
            this._walkerStack.unshift(e)
          }
        }
      }

      function Lw(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function Mw(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? Rw.A : Rw.t,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = (0, jw.TW)(o),
          a = function(e, t, r, n) {
            return (0, kw.Nf)() ? new Aw(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !n(e) || !Iw(e) || r && !Lw(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a
      }
      class Hw {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new Bw({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && Lw(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach((e => r && r.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new Hw;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new Bw({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class Bw {
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

      function Vw(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = (0, Nw.Bi)(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function Fw(e) {
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
          t = (0, Nw.Bi)(t);
          let a = (0, Nw.Bi)(),
            s = {};
          return r && (n = n ? `${a} ${n}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: s,
            fieldProps: Vw({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), s = (0, Nw.X1)([Boolean(t), Boolean(r), n, o]), l = (0, Nw.X1)([Boolean(t), Boolean(r), n, o]);
        return a = (0, Qb.v)(a, {
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
      new Hw;
      var zw = r(89839),
        qw = r(73581);
      const Uw = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        Gw = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Xw(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return Uw.has(t.script)
        }
        let t = e.split("-")[0];
        return Gw.has(t)
      }
      var Ww = r(50336);
      const Kw = Symbol.for("react-aria.i18n.locale");

      function $w() {
        let e = "undefined" != typeof window && window[Kw] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Xw(e) ? "rtl" : "ltr"
        }
      }
      let Yw = $w(),
        Zw = new Set;

      function Qw() {
        Yw = $w();
        for (let e of Zw) e(Yw)
      }
      const Jw = g.createContext(null);

      function eE() {
        let e = function() {
          let e = (0, Ww.wR)(),
            [t, r] = (0, g.useState)(Yw);
          return (0, g.useEffect)((() => (0 === Zw.size && window.addEventListener("languagechange", Qw), Zw.add(r), () => {
            Zw.delete(r), 0 === Zw.size && window.removeEventListener("languagechange", Qw)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, g.useContext)(Jw) || e
      }

      function tE(e, t) {
        let {
          name: r,
          isReadOnly: n,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: s = "aria"
        } = e, {
          direction: l
        } = eE(), {
          isInvalid: u,
          validationErrors: c,
          validationDetails: d
        } = t.displayValidation, {
          labelProps: f,
          fieldProps: h,
          descriptionProps: p,
          errorMessageProps: m
        } = Fw({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || c
        }), v = (0, Jb.$)(e, {
          labelable: !0
        }), {
          focusWithinProps: y
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, i = (0, g.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: a,
            removeAllGlobalListeners: s
          } = (0, qw.A)(), l = (0, g.useCallback)((e => {
            e.currentTarget.contains(e.target) && i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, s(), r && r(e), o && o(!1))
          }), [r, o, i, s]), u = (0, zw.yB)(l), c = (0, g.useCallback)((e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = (0, jw.TW)(e.target),
              r = (0, Dw.bq)(t);
            if (!i.current.isFocusWithin && r === (0, Dw.wt)(e.nativeEvent)) {
              n && n(e), o && o(!0), i.current.isFocusWithin = !0, u(e);
              let r = e.currentTarget;
              a(t, "focus", (e => {
                if (i.current.isFocusWithin && !(0, Dw.sD)(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  (0, zw.o1)(n, r);
                  let o = (0, zw.eg)(n);
                  l(o)
                }
              }), {
                capture: !0
              })
            }
          }), [n, o, u, a, l]);
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
          onBlurWithin(r) {
            var n;
            null === (n = e.onBlur) || void 0 === n || n.call(e, r), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = (0, Nw.Bi)(r);
        return Tw.set(t, {
          name: b,
          descriptionId: p.id,
          errorMessageId: m.id,
          validationBehavior: s
        }), {
          radioGroupProps: (0, Qb.v)(v, {
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
              let n, o = Mw(e.currentTarget, {
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
            ...h,
            ...y
          }),
          labelProps: f,
          descriptionProps: p,
          errorMessageProps: m,
          isInvalid: u,
          validationErrors: c,
          validationDetails: d
        }
      }

      function rE(e) {
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

      function nE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function oE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nE(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = rE(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nE(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function iE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var aE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        sE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = oE(oE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) aE(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return iE(e.variantClassNames, (e => iE(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        lE = sE({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx foundry_tdsdcd11",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        uE = sE({
          defaultClassName: "foundry_njguqn1",
          variantClassNames: {
            size: {
              MD: "foundry_njguqn2",
              LG: "foundry_njguqn3",
              XL: "foundry_njguqn4"
            },
            orientation: {
              horizontal: "foundry_njguqn5",
              vertical: "foundry_njguqn6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const cE = (0, g.createContext)(null);

      function dE() {
        const e = (0, g.useContext)(cE);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const fE = (0, g.forwardRef)((({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: i,
          "aria-labelledby": a,
          "aria-describedby": s,
          "aria-errormessage": l,
          status: u = "neutral",
          ...c
        }, d) => {
          const f = (0, g.useRef)(null),
            h = (0, Me.UP)(f, d),
            p = (0, g.useId)(),
            m = (0, g.useId)(),
            b = (0, g.useId)(),
            _ = function(e) {
              let t = (0, g.useMemo)((() => e.name || `radio-group-${Cw}-${++Ow}`), [e.name]);
              var r;
              let [n, o] = i_(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [i, a] = (0, g.useState)(null), s = N_({
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
            }({
              ...c,
              isInvalid: "invalid" === u
            }),
            {
              radioGroupProps: E
            } = tE({
              ...c,
              orientation: r,
              "aria-labelledby": (0, y.VW)(p, a),
              "aria-describedby": (0, y.VW)(m, b, s),
              "aria-errormessage": (0, y.VW)(b, l)
            }, _),
            x = (0, y.v6)({
              className: "foundry_njguqn0"
            }, E, (0, y.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            P = i ? w.DX : "div";
          return (0, v.jsx)(cE.Provider, {
            value: {
              state: _,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: m,
              labelId: p,
              errorId: b,
              status: u,
              ...c
            },
            children: (0, v.jsx)(P, {
              ref: h,
              "data-testid": o,
              ...x,
              children: n
            })
          })
        })),
        hE = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: i,
            orientation: a
          } = dE(), s = (0, y.v6)({
            "data-testid": e,
            className: uE({
              size: i,
              orientation: a
            })
          }, n), l = t ? w.DX : "div";
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: r
          })
        })),
        pE = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...i
        }, a) => {
          const {
            isRequired: s,
            labelId: l
          } = dE(), u = s && !o, c = (0, y.v6)({
            id: i.id || l,
            "data-testid": e,
            className: lE({
              showAsterisk: u
            })
          }, i), d = t ? w.DX : "div";
          return (0, v.jsx)(w.s6, {
            enabled: n,
            children: (0, v.jsx)(d, {
              ...c,
              ref: a,
              children: r
            })
          })
        })),
        mE = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = dE(), a = (0, y.v6)({
            id: i,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz foundry_tdsdcd10"
          }, n), s = t ? w.DX : "div";
          return (0, v.jsx)(s, {
            ...a,
            ref: o,
            children: r
          })
        })),
        vE = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: i,
            status: a
          } = dE(), s = (0, y.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: i,
            status: a
          }, n), l = r ? w.DX : Ty;
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        yE = Ny,
        gE = jy;
      var bE = sE({
          defaultClassName: "foundry_1pfduetf foundry_8kowh41 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz foundry_tdsdcd10",
          variantClassNames: {
            isDisabled: {
              false: "foundry_1pfduetg",
              true: "foundry_1pfdueth"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        _E = sE({
          defaultClassName: "foundry_1pfdueta",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz foundry_tdsdcd10",
              LG: "foundry_1pfduetc foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy foundry_tdsdcd10",
              XL: "foundry_1pfduetd foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx foundry_tdsdcd10"
            },
            isDisabled: {
              true: "foundry_1pfduete"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        wE = sE({
          defaultClassName: "foundry_1pfduet6 foundry_8kowh41",
          variantClassNames: {
            appearance: {
              primary: "foundry_1pfduet7",
              secondary: "foundry_1pfduet8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        EE = sE({
          defaultClassName: "foundry_1pfduet2",
          variantClassNames: {
            size: {
              MD: "foundry_1pfduet3",
              LG: "foundry_1pfduet4",
              XL: "foundry_1pfduet5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const xE = ({
          color: e = "currentColor"
        }) => (0, v.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, v.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        PE = ({
          color: e = "currentColor"
        }) => (0, v.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, v.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        SE = ({
          color: e = "currentColor"
        }) => (0, v.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, v.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        CE = (0, g.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, y.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            a = e ? w.DX : "label";
          return (0, v.jsx)(a, {
            ref: o,
            ...i,
            children: t
          })
        })),
        OE = (0, g.forwardRef)((({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, g.useRef)(null),
            i = (0, Me.UP)(o, n),
            a = (0, g.useId)(),
            {
              state: s,
              appearance: l,
              size: c,
              isReadOnly: d,
              isRequired: f
            } = dE(),
            {
              isPressed: h,
              pressProps: p
            } = fy({}),
            {
              inputProps: m
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
                  pressProps: u,
                  isPressed: c
                } = (0, r_.d)({
                  isDisabled: s
                }),
                {
                  pressProps: d,
                  isPressed: f
                } = (0, r_.d)({
                  isDisabled: s,
                  onPress() {
                    var e;
                    t.setSelectedValue(n), null === (e = r.current) || void 0 === e || e.focus()
                  }
                }),
                {
                  focusableProps: h
                } = (0, n_.Wc)((0, Qb.v)(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                p = (0, Qb.v)(u, h),
                m = (0, Jb.$)(e, {
                  labelable: !0
                }),
                v = -1;
              null != t.selectedValue ? t.selectedValue === n && (v = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (v = 0), s && (v = void 0);
              let {
                name: y,
                descriptionId: g,
                errorMessageId: b,
                validationBehavior: _
              } = Tw.get(t);
              return t_(r, t.selectedValue, t.setSelectedValue), A_({
                validationBehavior: _
              }, t, r), {
                labelProps: (0, Qb.v)(d, {
                  onClick: e => e.preventDefault()
                }),
                inputProps: (0, Qb.v)(m, {
                  ...p,
                  type: "radio",
                  name: y,
                  tabIndex: v,
                  disabled: s,
                  required: t.isRequired && "native" === _,
                  checked: l,
                  value: n,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(n)
                  },
                  "aria-describedby": [e["aria-describedby"], t.isInvalid ? b : null, g].filter(Boolean).join(" ") || void 0
                }),
                isDisabled: s,
                isSelected: l,
                isPressed: c || f
              }
            }({
              ...r,
              id: a,
              value: t,
              "aria-label": ""
            }, s, o),
            b = m.checked,
            _ = m.disabled || s?.isReadOnly,
            E = (0, y.v6)(m, {
              disabled: _,
              readOnly: d,
              required: f,
              "data-testid": e,
              ..._ && {
                "aria-disabled": !0
              },
              ...f && {
                "aria-required": !0
              }
            }, r),
            x = u[`Dot${c}`];
          return (0, v.jsxs)("div", {
            className: EE({
              size: c
            }),
            children: [(0, v.jsx)(w.s6, {
              children: (0, v.jsx)("input", {
                type: "radio",
                ...E,
                ref: i,
                className: "foundry_1pfduet1"
              })
            }), (0, v.jsx)("div", {
              className: wE({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": b ? "checked" : "unchecked",
              "data-disabled": _,
              "data-pressed": h,
              ...p,
              children: (0, v.jsx)("span", {
                className: "foundry_1pfduet9",
                children: b && (0, v.jsx)(x, {})
              })
            })]
          })
        })),
        TE = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, i) => {
          const {
            size: a,
            state: s
          } = dE(), l = (0, g.useId)(), u = (0, y.v6)({
            id: l,
            "data-testid": e,
            className: _E({
              size: a,
              isDisabled: s?.isDisabled
            })
          }, o), c = t ? w.DX : "div";
          return (0, v.jsx)(w.s6, {
            enabled: n,
            children: (0, v.jsx)(c, {
              ...u,
              ref: i,
              children: r
            })
          })
        })),
        NE = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = dE(), a = (0, y.v6)({
            "data-testid": e,
            className: bE({
              isDisabled: i
            })
          }, n), s = t ? w.DX : "span";
          return (0, v.jsx)(s, {
            ref: o,
            ...a,
            children: r
          })
        }));

      function jE(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function IE(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return jE(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? jE(e, t) : void 0
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

      function RE(e, t, r) {
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

      function DE(e) {
        return DE = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, DE(e)
      }

      function kE() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (kE = function() {
          return !!e
        })()
      }

      function AE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function LE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? AE(Object(r), !0).forEach((function(t) {
            RE(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : AE(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function ME(e, t) {
        return ME = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, ME(e, t)
      }

      function HE(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          a = n,
          s = "",
          l = IE(e);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var u, c = r.value,
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

      function BE(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          i = t.separate,
          a = t.showMask,
          s = 0,
          l = "",
          u = IE(n);
        try {
          for (u.s(); !(r = u.n()).done;) {
            var c = r.value;
            if (!a && void 0 === e[s]) break;
            Object.prototype.hasOwnProperty.call(o, c) && void 0 !== e[s] ? l += e[s++] : l += c
          }
        } catch (e) {
          u.e(e)
        } finally {
          u.f()
        }
        if (i && !a) {
          for (var d = n.length - 1; d >= 0 && l[d] === n[d]; d--);
          l = l.slice(0, d + 1)
        }
        return l
      }

      function VE(e, t) {
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

      function FE(e) {
        return e.length > 0 ? RE({}, e, /./) : {}
      }

      function zE(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, i = t.mask, a = t.replacement, s = t.separate, l = e.slice(n, o), u = i.slice(n, o), c = "", d = 0; d < u.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(a, u[d]);
          f && void 0 !== l[d] && l[d] !== u[d] ? c += l[d] : f && s && (c += u[d])
        }
        return c
      }

      function qE(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? FE(n) : n,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return BE(HE(e, {
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
      var UE = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function GE(e) {
        return UE.includes(e) ? "\\".concat(e) : e
      }

      function XE(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function WE(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function KE(e, t, r) {
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

      function $E(e) {
        return $E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, $E(e)
      }

      function YE() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (YE = function() {
          return !!e
        })()
      }

      function ZE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function QE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ZE(Object(r), !0).forEach((function(t) {
            KE(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ZE(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function JE(e, t) {
        return JE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, JE(e, t)
      }

      function ex(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return ex = function(e) {
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
              if (YE()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && JE(o, r.prototype), o
            }(e, arguments, $E(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), JE(r, e)
        }, ex(e)
      }
      var tx, rx = function(e) {
          function t(e) {
            var r;
            return XE(this, t), (r = function(e, t, r) {
              return t = $E(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, YE() ? Reflect.construct(t, r || [], $E(e).constructor) : t.apply(e, r))
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
            }), t && JE(e, t)
          }(t, e), WE(t)
        }(ex(Error)),
        nx = ["options"],
        ox = ["text", "email", "tel", "search", "url"],
        ix = WE((function e(t) {
          var r = t.init,
            n = t.tracking;
          XE(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (ox.includes(e.type)) {
              var i = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                a = i.initialValue,
                s = void 0 === a ? "" : a,
                l = i.controlled,
                u = void 0 !== l && l,
                c = r({
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
                v = Object.getOwnPropertyDescriptor("_valueTracker" in e ? e : HTMLInputElement.prototype, "value");
              Object.defineProperty(e, "value", QE(QE({}, v), {}, {
                set: function(t) {
                  var r;
                  m.value = t, null == v || null === (r = v.set) || void 0 === r || r.call(e, t)
                }
              })), e.value = d;
              var y = function() {
                  var t = function() {
                    var r, n;
                    m.selectionStart = null !== (r = e.selectionStart) && void 0 !== r ? r : 0, m.selectionEnd = null !== (n = e.selectionEnd) && void 0 !== n ? n : 0, p.id = window.setTimeout(t)
                  };
                  p.id = window.setTimeout(t)
                },
                g = function() {
                  window.clearTimeout(p.id), p.id = -1, p.cachedId = -1
                },
                b = function(t) {
                  try {
                    var r, o;
                    if (p.cachedId === p.id) throw new rx("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      a = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === a || null === s) throw new rx("The selection attributes have not been initialized.");
                    var l, u = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = u.length), a > m.selectionStart ? l = "insert" : a <= m.selectionStart && a < m.selectionEnd ? l = "deleteBackward" : a === m.selectionEnd && i.length < u.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > u.length) throw new rx("Input type detection error.");
                    var c = "",
                      d = m.selectionStart,
                      f = m.selectionEnd;
                    if ("insert" === l) c = i.slice(m.selectionStart, a);
                    else {
                      var v = u.length - i.length;
                      d = a, f = a + v
                    }
                    h.value !== u ? h.options = h.fallbackOptions : h.fallbackOptions = h.options;
                    var y = h.options,
                      g = n({
                        inputType: l,
                        previousValue: u,
                        previousOptions: y,
                        value: i,
                        addedValue: c,
                        changeStart: d,
                        changeEnd: f,
                        selectionStart: a,
                        selectionEnd: s
                      }),
                      b = g.options,
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
                      }(g, nx);
                    e.value = _.value, e.setSelectionRange(_.selectionStart, _.selectionEnd), h.value = _.value, h.options = b, m.selectionStart = _.selectionStart, m.selectionEnd = _.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (o = r.setValue) || void 0 === o || o.call(r, u)
                  } catch (r) {
                    if (e.value = m.value, e.setSelectionRange(m.selectionStart, m.selectionEnd), t.preventDefault(), t.stopPropagation(), "SyntheticChangeError" !== r.name) throw r
                  }
                };
              document.activeElement === e && y(), e.addEventListener("focus", y), e.addEventListener("blur", g), e.addEventListener("input", b), o.set(e, {
                onFocus: y,
                onBlur: g,
                onInput: b
              })
            }
          }, this.unregister = function(e) {
            var t = o.get(e);
            void 0 !== t && (e.removeEventListener("focus", t.onFocus), e.removeEventListener("blur", t.onBlur), e.removeEventListener("input", t.onInput), o.delete(e))
          }
        }));
      tx = ix, Object.defineProperty(tx.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var ax, sx = ["track", "modify"];

      function lx(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? FE(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var ux = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = DE(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, kE() ? Reflect.construct(t, r || [], DE(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = lx(r),
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
                l = lx(r),
                u = l.track,
                c = l.modify,
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
                }(l, sx),
                f = d.mask,
                h = d.replacement,
                p = d.showMask,
                m = d.separate,
                v = LE(LE({}, "insert" === t ? {
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
                y = null == u ? void 0 : u(v);
              if (!1 === y) throw new rx("Custom tracking stop.");
              null === y ? i = "" : !0 !== y && void 0 !== y && (i = y);
              var g = null == c ? void 0 : c(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (h = "string" == typeof(null == g ? void 0 : g.replacement) ? FE(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (p = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = zE(n, LE({
                  end: a
                }, o)),
                _ = zE(n, LE({
                  start: s
                }, o)),
                w = RegExp("[^".concat(Object.keys(h).join(""), "]"), "g"),
                E = f.replace(w, "");
              if (b && (b = HE(b, {
                  replacementChars: E,
                  replacement: h,
                  separate: m
                }), E = E.slice(b.length)), i && (i = HE(i, {
                  replacementChars: E,
                  replacement: h,
                  separate: !1
                }), E = E.slice(i.length)), "insert" === t && "" === i) throw new rx("The character does not match the key value of the `replacement` object.");
              if (m) {
                var x = f.slice(a, s).replace(w, ""),
                  P = x.length - i.length;
                P < 0 ? _ = _.slice(-P) : P > 0 && (_ = x.slice(-P) + _)
              }
              _ && (_ = HE(_, {
                replacementChars: E,
                replacement: h,
                separate: m
              }));
              var S = BE(b + i + _, {
                  mask: f,
                  replacement: h,
                  separate: m,
                  showMask: p
                }),
                C = function(e) {
                  var t, r, n, o = e.inputType,
                    i = e.value,
                    a = e.addedValue,
                    s = e.beforeChangeValue,
                    l = e.replacement,
                    u = e.separate,
                    c = VE(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter((function(e) {
                      var t = e.type;
                      return "input" === t || u && "replacement" === t
                    })),
                    d = null === (t = c[s.length + a.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = c[s.length - 1]) || void 0 === r ? void 0 : r.index,
                    h = null === (n = c[s.length + a.length]) || void 0 === n ? void 0 : n.index;
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
                  value: S,
                  addedValue: i,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: h,
                  separate: m
                });
              return {
                value: S,
                selectionStart: C,
                selectionEnd: C,
                options: {
                  mask: f,
                  replacement: h,
                  separate: m
                }
              }
            }
          }])).format = function(e) {
            return qE(e, lx(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? FE(n) : n;
              return VE(qE(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, lx(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? FE(n) : n,
                i = zE(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return HE(i, {
                replacementChars: r.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, lx(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? FE(n) : n, i = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, s = "", l = 0; l < r.length; l++) {
                var u = r[l];
                0 === l && (s = "^"), i && (s += "("), s += Object.prototype.hasOwnProperty.call(o, u) ? "".concat(a ? "(?!".concat(GE(u), ")") : "", "(").concat(o[u].source, ")") : GE(u), l === r.length - 1 && (i && (s += ")?".repeat(r.length)), s += "$")
              }
              return s
            }(e, lx(r))
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
            }), t && ME(e, t)
          }(e, ix),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function cx(e) {
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

      function dx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function fx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dx(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = cx(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dx(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function hx(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      ax = ux, Object.defineProperty(ax.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var px = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        mx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = fx(fx({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) px(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hx(e.variantClassNames, (e => hx(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        vx = mx({
          defaultClassName: "foundry_8oytzob",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzoc",
              true: "foundry_8oytzod"
            },
            isReadOnly: {
              false: "foundry_8oytzoe",
              true: "foundry_8oytzof"
            },
            isInvalid: {
              false: "foundry_8oytzog",
              true: "foundry_8oytzoh"
            },
            isSuccess: {
              false: "foundry_8oytzoi",
              true: "foundry_8oytzoj"
            },
            isPressed: {
              false: "foundry_8oytzok",
              true: "foundry_8oytzol"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isPressed: !0,
              isInvalid: !1,
              isSuccess: !1,
              isDisabled: !1
            }, "foundry_8oytzom"],
            [{
              isPressed: !0,
              isInvalid: !0,
              isDisabled: !1
            }, "foundry_8oytzon"],
            [{
              isPressed: !1,
              isInvalid: !1,
              isSuccess: !1,
              isDisabled: !1,
              isReadOnly: !1
            }, "foundry_8oytzoo"],
            [{
              isPressed: !1,
              isDisabled: !1
            }, "foundry_8oytzop"]
          ]
        }),
        yx = mx({
          defaultClassName: "foundry_8oytzo13 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo14",
              true: "foundry_8oytzo15"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        gx = mx({
          defaultClassName: "foundry_8oytzo9 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bx = mx({
          defaultClassName: "foundry_8oytzov",
          variantClassNames: {
            side: {
              left: "foundry_8oytzow",
              right: "foundry_8oytzox"
            },
            isDisabled: {
              false: "foundry_8oytzoy",
              true: "foundry_8oytzoz"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        _x = mx({
          defaultClassName: "foundry_8oytzoq foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx foundry_tdsdcd10",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzor",
              true: "foundry_8oytzos"
            },
            isReadOnly: {
              false: "foundry_8oytzot",
              true: "foundry_8oytzou"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        wx = mx({
          defaultClassName: "foundry_8oytzo4 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy foundry_tdsdcd11",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo5",
              true: "foundry_8oytzo6"
            },
            showAsterisk: {
              true: "foundry_8oytzo7"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ex = r(86895),
        xx = r.t(Ex, 2);
      const Px = (0, g.createContext)(null);

      function Sx() {
        const e = (0, g.useContext)(Px);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Cx = (0, g.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: a = "neutral",
          ...s
        }, l) => {
          const [u, c] = (0, g.useState)("text"), d = (0, g.useId)(), f = (0, g.useId)(), h = (0, g.useId)(), {
            isPressed: p,
            pressProps: m
          } = fy({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !0
          }), b = (0, y.v6)({
            "data-testid": r,
            className: "foundry_8oytzo3"
          }, s), _ = e ? w.DX : "div";
          return (0, v.jsx)(Px.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: i,
              status: a,
              labelId: d,
              inputId: f,
              descriptionId: h,
              isPressed: p,
              pressProps: m,
              type: u,
              setType: c,
              ...s
            },
            children: (0, v.jsx)(_, {
              ref: l,
              ...b,
              children: t
            })
          })
        })),
        Ox = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...i
        }, a) => {
          const {
            isDisabled: s,
            isRequired: l,
            inputId: u,
            labelId: c
          } = Sx(), d = l && !o, f = (0, y.v6)({
            id: i.id || c,
            htmlFor: i.htmlFor || u,
            "data-testid": e,
            className: wx({
              showAsterisk: d,
              isDisabled: s
            })
          }, i), h = t ? w.DX : "label";
          return (0, v.jsx)(w.s6, {
            enabled: n,
            children: (0, v.jsx)(h, {
              ref: a,
              ...f,
              children: r
            })
          })
        })),
        Tx = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = Sx(), a = (0, y.v6)({
            "data-testid": e,
            className: gx({
              isDisabled: i
            })
          }, n), s = t ? w.DX : "span";
          return (0, v.jsx)(s, {
            ref: o,
            ...a,
            children: r
          })
        })),
        Nx = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: a,
            isPressed: s,
            pressProps: l,
            status: u
          } = Sx(), c = (0, y.v6)({
            "data-testid": e,
            "data-pressed": s,
            className: (0, pt.clsx)(vx({
              isDisabled: i,
              isReadOnly: a,
              isInvalid: "invalid" === u,
              isPressed: s,
              isSuccess: "success" === u
            }), "foundry_8oytzo1")
          }, l, n), d = t ? w.DX : "div";
          return (0, v.jsx)(d, {
            ref: o,
            ...c,
            children: r
          })
        })),
        jx = (0, g.forwardRef)((({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
          showMask: o = !0,
          track: i,
          placeholder: a = " ",
          "aria-labelledby": s,
          "aria-describedby": l,
          type: u = "text",
          ...c
        }, d) => {
          const {
            isDisabled: f,
            isReadOnly: h,
            isRequired: p,
            status: m,
            labelId: b,
            inputId: _,
            descriptionId: E,
            setType: x,
            type: P
          } = Sx();
          (0, g.useEffect)((() => x(u)), []);
          const S = "invalid" === m,
            C = (0, y.v6)({
              disabled: f,
              readOnly: h,
              required: p,
              id: _,
              type: P,
              spellCheck: !1,
              placeholder: a,
              "aria-labelledby": (0, y.VW)(b, s),
              "aria-describedby": (0, y.VW)(E, l),
              "data-testid": e,
              className: (0, pt.clsx)(_x({
                isDisabled: f,
                isReadOnly: h
              }), "foundry_8oytzo2"),
              ...S && {
                "aria-invalid": !0,
                "aria-errormessage": E
              },
              ..."success" === m && {
                "data-success": !0
              },
              ...f && {
                "aria-disabled": !0
              },
              ...p && {
                "aria-required": !0
              }
            }, c),
            O = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                r = e.replacement,
                n = e.showMask,
                o = e.separate,
                i = e.track,
                a = e.modify,
                s = (0, g.useRef)(null),
                l = (0, g.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: i,
                  modify: a
                });
              return l.current.mask = t, l.current.replacement = r, l.current.showMask = n, l.current.separate = o, l.current.track = i, l.current.modify = a, (0, g.useMemo)((function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(s, new ux(l.current))
              }), [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: i
            }),
            T = (0, Me.UP)(r && n ? O : null, d),
            N = t ? w.DX : "input";
          return (0, v.jsx)(N, {
            ref: T,
            ...C
          })
        })),
        Ix = (0, g.forwardRef)((({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, i) => {
          const {
            isDisabled: a
          } = Sx(), s = (0, y.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, pt.clsx)(bx({
              side: n,
              isDisabled: a
            }), "foundry_8oytzo0")
          }, o), l = t ? w.DX : xx[e];
          return (0, v.jsx)(l, {
            ref: i,
            ...s
          })
        })),
        Rx = (0, g.forwardRef)((({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = Sx(), n = (0, y.v6)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: "foundry_8oytzo10"
          }, e);
          return (0, v.jsx)(md, {
            ref: t,
            ...n
          })
        })),
        Dx = (0, g.forwardRef)((({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: i
          } = Sx(), a = "password" === o, s = a ? e : t, l = (0, y.v6)({
            label: s,
            icon: a ? "Eye" : "EyeOff",
            onPress: () => {
              i(a ? "text" : "password")
            }
          }, r);
          return (0, v.jsxs)(bp, {
            children: [(0, v.jsx)(_p, {
              children: (0, v.jsx)(Rx, {
                ref: n,
                ...l
              })
            }), (0, v.jsxs)(wp, {
              side: "bottom",
              align: "end",
              children: [s, (0, v.jsx)(Ep, {})]
            })]
          })
        })),
        kx = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: a
          } = Sx(), s = (0, y.v6)({
            className: yx({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, n), l = r ? w.DX : "div";
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Ax = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: a
          } = Sx(), s = (0, y.v6)({
            className: "foundry_8oytzo16",
            "data-testid": t,
            descriptionId: i,
            status: a
          }, n), l = r ? w.DX : Ty;
          return (0, v.jsx)(l, {
            ...s,
            ref: o,
            children: e
          })
        })),
        Lx = Ny,
        Mx = jy;
      var Hx = r(36566);

      function Bx(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ...l
        } = e, u = {};
        "a" !== r && (u = {
          role: "link",
          tabIndex: s ? void 0 : 0
        });
        let {
          focusableProps: c
        } = (0, n_.Wc)(e, t), {
          pressProps: d,
          isPressed: f
        } = (0, r_.d)({
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ref: t
        }), h = (0, Jb.$)(l, {
          labelable: !0
        }), p = (0, Qb.v)(c, d), m = (0, Hx.rd)(), v = (0, Hx._h)(e);
        return {
          isPressed: f,
          linkProps: (0, Qb.v)(h, v, {
            ...p,
            ...u,
            "aria-disabled": s || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = d.onClick) || void 0 === r || r.call(d, t), !m.isNative && t.currentTarget instanceof HTMLAnchorElement && t.currentTarget.href && !t.isDefaultPrevented() && (0, Hx.sU)(t.currentTarget, t) && e.href && (t.preventDefault(), m.open(t.currentTarget, t, e.href, e.routerOptions))
            }
          })
        }
      }
      var Vx = r(68545);

      function Fx(e) {
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

      function zx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function qx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zx(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Fx(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zx(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Ux(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Gx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Xx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qx(qx({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Gx(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ux(e.variantClassNames, (e => Ux(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Wx = Xx({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Kx = Xx({
          defaultClassName: "foundry_1m368qhc",
          variantClassNames: {
            status: {
              information: "foundry_1m368qhd",
              danger: "foundry_1m368qhe",
              success: "foundry_1m368qhf",
              warning: "foundry_1m368qhg"
            },
            size: {
              LG: "foundry_1m368qhh",
              XL: "foundry_1m368qhi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        $x = Xx({
          defaultClassName: "foundry_1m368qh2",
          variantClassNames: {
            status: {
              danger: "foundry_1m368qh3",
              information: "foundry_1m368qh4",
              success: "foundry_1m368qh5",
              warning: "foundry_1m368qh6"
            },
            background: {
              "two-tone": "foundry_1m368qh7",
              neutral: "foundry_1m368qh8",
              none: "foundry_1m368qh9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Yx = (0, g.createContext)(null);

      function Zx() {
        const e = (0, g.useContext)(Yx);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Qx = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, i) => {
          const a = e ? w.DX : "div",
            s = (0, y.v6)({
              className: $x({
                status: r,
                background: n
              })
            }, o);
          return (0, v.jsx)(Yx.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, v.jsx)(a, {
              ref: i,
              "data-testid": t,
              ...s
            })
          })
        })),
        Jx = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? w.DX : "div",
            i = (0, y.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, v.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        eP = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? w.DX : "div",
            i = (0, y.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, v.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        tP = {
          danger: Vx.CircleX,
          information: Vx.Info,
          success: Vx.CircleCheck,
          warning: Vx.TriangleAlert
        },
        rP = (0, g.forwardRef)((({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = Zx(), i = e ? w.DX : tP[o], a = (0, y.v6)({
            className: Kx({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, v.jsx)(i, {
            label: "",
            ref: n,
            ...a
          })
        })),
        nP = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? w.DX : "div",
            i = (0, y.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, v.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        oP = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? w.DX : "div",
            i = (0, y.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy"
            }, r);
          return (0, v.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        iP = (0, g.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, g.useRef)(null),
            a = (0, Me.UP)(i, o),
            s = e ? w.DX : "a",
            {
              linkProps: l,
              isPressed: u
            } = Bx(n, i),
            c = (0, y.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy foundry_tdsdcd12 foundry_1d5mo5m0"
            }, l);
          return (0, v.jsx)(s, {
            "data-pressed": u,
            "data-testid": r,
            ref: a,
            ...c,
            children: t
          })
        })),
        aP = (0, g.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? w.DX : "div",
            a = (0, y.v6)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, v.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        })),
        sP = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const i = e ? w.DX : "div";
          return (0, v.jsx)(i, {
            ref: o,
            "data-testid": t,
            className: (0, pt.clsx)(r, "foundry_1m368qhp foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy"),
            ...n
          })
        })),
        lP = (0, g.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n
          } = Zx(), o = (0, y.v6)({
            className: Wx({
              hasBackground: "none" !== n
            })
          }, t);
          return (0, v.jsx)(md, {
            ref: r,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            ...o
          })
        }));

      function uP(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function cP(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every((r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : uP(n) && uP(o) ? cP(n, o) : n === o
        })))
      }

      function dP(e) {
        return e.concat().sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => e.options))
      }

      function fP(e) {
        return "number" == typeof e
      }

      function hP(e) {
        return "string" == typeof e
      }

      function pP(e) {
        return "boolean" == typeof e
      }

      function mP(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function vP(e) {
        return Math.abs(e)
      }

      function yP(e) {
        return Math.sign(e)
      }

      function gP(e, t) {
        return vP(e - t)
      }

      function bP(e) {
        return PP(e).map(Number)
      }

      function _P(e) {
        return e[wP(e)]
      }

      function wP(e) {
        return Math.max(0, e.length - 1)
      }

      function EP(e, t) {
        return t === wP(e)
      }

      function xP(e, t = 0) {
        return Array.from(Array(e), ((e, r) => t + r))
      }

      function PP(e) {
        return Object.keys(e)
      }

      function SP(e, t) {
        return [e, t].reduce(((e, t) => (PP(t).forEach((r => {
          const n = e[r],
            o = t[r],
            i = mP(n) && mP(o);
          e[r] = i ? SP(n, o) : o
        })), e)), {})
      }

      function CP(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function OP() {
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

      function TP(e = 0, t = 0) {
        const r = vP(e - t);

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

      function NP(e, t, r) {
        const {
          constrain: n
        } = TP(0, e), o = e + 1;
        let i = a(t);

        function a(e) {
          return r ? vP((o + e) % o) : n(e)
        }

        function s() {
          return i
        }

        function l() {
          return NP(e, s(), r)
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

      function jP(e, t, r, n, o, i, a, s, l, u, c, d, f, h, p, m, v, y, g) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], E = {
          passive: !1
        }, x = OP(), P = OP(), S = TP(50, 225).constrain(h.measure(20)), C = {
          mouse: 300,
          touch: 400
        }, O = {
          mouse: 500,
          touch: 600
        }, T = p ? 43 : 25;
        let N = !1,
          j = 0,
          I = 0,
          R = !1,
          D = !1,
          k = !1,
          A = !1;

        function L(e) {
          if (!CP(e, n) && e.touches.length >= 2) return M(e);
          const t = i.readPoint(e),
            r = i.readPoint(e, b),
            a = gP(t, j),
            l = gP(r, I);
          if (!D && !A) {
            if (!e.cancelable) return M(e);
            if (D = a > l, !D) return M(e)
          }
          const c = i.pointerMove(e);
          a > m && (k = !0), u.useFriction(.3).useDuration(.75), s.start(), o.add(_(c)), e.preventDefault()
        }

        function M(e) {
          const t = c.byDistance(0, !1).index !== d.get(),
            r = i.pointerUp(e) * (p ? O : C)[A ? "mouse" : "touch"],
            n = function(e, t) {
              const r = d.add(-1 * yP(e)),
                n = c.byDistance(e, !p).distance;
              return p || vP(e) < S ? n : v && t ? .5 * n : c.byIndex(r.get(), 0).distance
            }(_(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (vP(e) <= vP(t)) return 0;
              const r = gP(vP(e), vP(t));
              return vP(r / e)
            }(r, n),
            a = T - 10 * o,
            s = y + o / 50;
          D = !1, R = !1, P.clear(), u.useDuration(a).useFriction(s), l.distance(n, !p), A = !1, f.emit("pointerUp")
        }

        function H(e) {
          k && (e.stopPropagation(), e.preventDefault(), k = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function s(s) {
              (pP(g) || g(e, s)) && function(e) {
                const s = CP(e, n);
                A = s, k = p && s && !e.buttons && N, N = gP(o.get(), a.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (R = !0, i.pointerDown(e), u.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = A ? r : t;
                  P.add(e, "touchmove", L, E).add(e, "touchend", M).add(e, "mousemove", L, E).add(e, "mouseup", M)
                }(), j = i.readPoint(e), I = i.readPoint(e, b), f.emit("pointerDown"))
              }(s)
            }
            const l = t;
            x.add(l, "dragstart", (e => e.preventDefault()), E).add(l, "touchmove", (() => {}), E).add(l, "touchend", (() => {})).add(l, "touchstart", s).add(l, "mousedown", s).add(l, "touchcancel", M).add(l, "contextmenu", M).add(l, "click", H, !0)
          },
          destroy: function() {
            x.clear(), P.clear()
          },
          pointerDown: function() {
            return R
          }
        }
      }

      function IP(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function i(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (CP(r, t) ? r : r.touches[0])[o]
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
            return a && !s && vP(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function RP(e, t, r, n, o, i, a) {
        const s = [e].concat(n);
        let l, u, c = [],
          d = !1;

        function f(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            i && (u = f(e), c = n.map(f), l = new ResizeObserver((r => {
              (pP(i) || i(o, r)) && function(r) {
                for (const i of r) {
                  if (d) return;
                  const r = i.target === e,
                    a = n.indexOf(i.target),
                    s = r ? u : c[a];
                  if (vP(f(r ? e : n[a]) - s) >= .5) {
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

      function DP(e, t, r, n, o) {
        const i = o.measure(10),
          a = o.measure(50),
          s = TP(.1, .99);
        let l = !1;

        function u() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: u,
          constrain: function(o) {
            if (!u()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              c = vP(e[l] - t.get()),
              d = r.get() - t.get(),
              f = s.constrain(c / a);
            r.subtract(d * f), !o && vP(d) < i && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function kP(e, t, r, n) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: a,
            reachedMax: s
          } = TP(o, i),
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

      function AP(e) {
        let t = e;

        function r(e) {
          return fP(e) ? e : e.get()
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

      function LP(e, t) {
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

      function MP(e, t, r, n, o, i, a, s, l) {
        const u = bP(o),
          c = bP(o).reverse(),
          d = function() {
            const e = a[0];
            return p(h(c, e), r, !1)
          }().concat(function() {
            const e = t - a[0] - 1;
            return p(h(u, e), -r, !0)
          }());

        function f(e, t) {
          return e.reduce(((e, t) => e - o[t]), t)
        }

        function h(e, t) {
          return e.reduce(((e, r) => f(e, t) > 0 ? e.concat([r]) : e), [])
        }

        function p(o, a, u) {
          const c = function(e) {
            return i.map(((r, o) => ({
              start: r - n[o] + .5 + e,
              end: r + t - .5 + e
            })))
          }(a);
          return o.map((t => {
            const n = u ? 0 : -r,
              o = u ? r : 0,
              i = u ? "end" : "start",
              a = c[t][i];
            return {
              index: t,
              loopPoint: a,
              slideLocation: AP(-1),
              translate: LP(e, l[t]),
              target: () => s.get() > a ? n : o
            }
          }))
        }
        const m = {
          canLoop: function() {
            return d.every((({
              index: e
            }) => {
              const r = u.filter((t => t !== e));
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

      function HP(e, t, r) {
        let n, o = !1;
        return {
          init: function(i) {
            r && (n = new MutationObserver((e => {
              o || (pP(r) || r(i, e)) && function(e) {
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

      function BP(e, t, r, n, o, i, a) {
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
          slidesToScroll: v,
          skipSnaps: y,
          containScroll: g,
          watchResize: b,
          watchSlides: _,
          watchDrag: w,
          watchFocus: E
        } = i, x = {
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
        }, P = x.measure(t), S = r.map(x.measure), C = function(e, t) {
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
        }(l, u), O = C.measureSize(P), T = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(O), N = function(e, t) {
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
              return hP(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(s, O), j = !d && !!g, I = d || !!g, {
          slideSizes: R,
          slideSizesWithGaps: D,
          startGap: k,
          endGap: A
        } = function(e, t, r, n, o, i) {
          const {
            measureSize: a,
            startEdge: s,
            endEdge: l
          } = e, u = r[0] && o, c = function() {
            if (!u) return 0;
            const e = r[0];
            return vP(t[s] - e[s])
          }(), d = function() {
            if (!u) return 0;
            const e = i.getComputedStyle(_P(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(a), h = r.map(((e, t, r) => {
            const n = !t,
              o = EP(r, t);
            return n ? f[t] + c : o ? f[t] + d : r[t + 1][s] - e[s]
          })).map(vP);
          return {
            slideSizes: f,
            slideSizesWithGaps: h,
            startGap: c,
            endGap: d
          }
        }(C, P, S, r, I, o), L = function(e, t, r, n, o, i, a, s, l) {
          const {
            startEdge: u,
            endEdge: c,
            direction: d
          } = e, f = fP(r), h = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return bP(e).filter((e => e % t == 0)).map((r => e.slice(r, r + t)))
              }(e, r) : function(e) {
                return e.length ? bP(e).reduce(((r, f, h) => {
                  const p = _P(r) || 0,
                    m = 0 === p,
                    v = f === wP(e),
                    y = o[u] - i[p][u],
                    g = o[u] - i[f][c],
                    b = !n && m ? d(a) : 0,
                    _ = vP(g - (!n && v ? d(s) : 0) - (y + b));
                  return h && _ > t + l && r.push(f), v && r.push(e.length), r
                }), []).map(((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                })) : []
              }(e)
            }
          };
          return h
        }(C, O, v, d, P, S, k, A, 2), {
          snaps: M,
          snapsAligned: H
        } = function(e, t, r, n, o) {
          const {
            startEdge: i,
            endEdge: a
          } = e, {
            groupSlides: s
          } = o, l = s(n).map((e => _P(e)[a] - e[0][i])).map(vP).map(t.measure), u = n.map((e => r[i] - e[i])).map((e => -vP(e))), c = s(u).map((e => e[0])).map(((e, t) => e + l[t]));
          return {
            snaps: u,
            snapsAligned: c
          }
        }(C, N, P, S, L), B = -_P(M) + _P(D), {
          snapsContained: V,
          scrollContainLimit: F
        } = function(e, t, r, n) {
          const o = TP(-t + e, 0),
            i = r.map(((e, t) => {
              const {
                min: n,
                max: i
              } = o, a = o.constrain(e), l = !t, u = EP(r, t);
              return l ? i : u || s(n, a) ? n : s(i, a) ? i : a
            })).map((e => parseFloat(e.toFixed(3)))),
            a = function() {
              const e = i[0],
                t = _P(i);
              return TP(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function s(e, t) {
            return gP(e, t) <= 1
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
        }(O, B, H, g), z = j ? V : H, {
          limit: q
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: TP(r ? n - e : _P(t), n)
          }
        }(B, z, d), U = NP(wP(z), c, d), G = U.clone(), X = bP(r), W = function(e, t, r, n) {
          const o = OP(),
            i = 1e3 / 60;
          let a = null,
            s = 0,
            l = 0;

          function u(e) {
            if (!l) return;
            a || (a = e, r(), r());
            const o = e - a;
            for (a = e, s += o; s >= i;) r(), s -= i;
            n(s / i), l && (l = t.requestAnimationFrame(u))
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
          eventHandler: u,
          scrollBounds: c,
          options: {
            loop: d
          }
        }, f) => {
          const h = e.settled(),
            p = !c.shouldConstrain(),
            m = d ? h : h && p,
            v = m && !s.pointerDown();
          v && l.stop();
          const y = r.get() * f + o.get() * (1 - f);
          n.set(y), d && (i.loop(e.direction()), a.loop()), t.to(n.get()), v && u.emit("settle"), m || u.emit("scroll")
        })(se, e))), K = z[U.get()], $ = AP(K), Y = AP(K), Z = AP(K), Q = AP(K), J = function(e, t, r, n, o) {
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
              const t = n.get() - e.get();
              let o = 0;
              return s ? (r.set(e), i += t / s, i *= l, u += i, e.add(i), o = u - c) : (i = 0, r.set(n), e.set(n), o = t), a = yP(o), c = u, h
            },
            settled: function() {
              return vP(n.get() - t.get()) < .001
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
        }($, Z, Y, Q, f), ee = function(e, t, r, n, o) {
          const {
            reachedAny: i,
            removeOffset: a,
            constrain: s
          } = n;

          function l(e) {
            return e.concat().sort(((e, t) => vP(e) - vP(t)))[0]
          }

          function u(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const i = o.filter((e => yP(e) === n));
            return i.length ? l(i) : _P(o) - r
          }
          const c = {
            byDistance: function(r, n) {
              const l = o.get() + r,
                {
                  index: c,
                  distance: d
                } = function(r) {
                  const n = e ? a(r) : s(r),
                    o = t.map(((e, t) => ({
                      diff: u(e - n, 0),
                      index: t
                    }))).sort(((e, t) => vP(e.diff) - vP(t.diff))),
                    {
                      index: i
                    } = o[0];
                  return {
                    index: i,
                    distance: n
                  }
                }(l),
                f = !e && i(l);
              return !n || f ? {
                index: c,
                distance: r
              } : {
                index: c,
                distance: r + u(t[c] - d, 0)
              }
            },
            byIndex: function(e, r) {
              return {
                index: e,
                distance: u(t[e] - o.get(), r)
              }
            },
            shortcut: u
          };
          return c
        }(d, z, B, q, Q), te = function(e, t, r, n, o, i, a) {
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
        }(W, U, G, J, ee, Q, a), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(q), ne = OP(), oe = function(e, t, r, n) {
          const o = {};
          let i, a = null,
            s = null,
            l = !1;
          const u = {
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
                return PP(o).reduce(((t, r) => {
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
          return u
        }(t, r, a, m), {
          slideRegistry: ie
        } = function(e, t, r, n, o, i) {
          const {
            groupSlides: a
          } = o, {
            min: s,
            max: l
          } = n, u = function() {
            const n = a(i),
              o = !e || "keepSnaps" === t;
            return 1 === r.length ? [i] : o ? n : n.slice(s, l).map(((e, t, r) => {
              const n = !t,
                o = EP(r, t);
              return n ? xP(_P(r[0]) + 1) : o ? xP(wP(i) - _P(r)[0] + 1, _P(r)[0]) : e
            }))
          }();
          return {
            slideRegistry: u
          }
        }(j, g, z, F, L, X), ae = function(e, t, r, n, o, i, a, s) {
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
                  (pP(s) || s(d, t)) && function(t) {
                    if ((new Date).getTime() - u > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = r.findIndex((e => e.includes(t)));
                    fP(i) && (o.useDuration(0), n.index(i, 0), a.emit("slideFocus"))
                  }(c)
                }), l)
              })))
            }
          };
          return d
        }(e, r, ie, te, J, ne, a, E), se = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: a,
          containerRect: P,
          slideRects: S,
          animation: W,
          axis: C,
          dragHandler: jP(C, e, n, o, Q, IP(C, o), $, W, te, J, ee, U, a, T, h, p, y, .68, w),
          eventStore: ne,
          percentOfView: T,
          index: U,
          indexPrevious: G,
          limit: q,
          location: $,
          offsetLocation: Z,
          previousLocation: Y,
          options: i,
          resizeHandler: RP(t, a, o, r, C, b, x),
          scrollBody: J,
          scrollBounds: DP(q, Z, Q, J, T),
          scrollLooper: kP(B, q, Z, [$, Z, Y, Q]),
          scrollProgress: re,
          scrollSnapList: z.map(re.get),
          scrollSnaps: z,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: MP(C, O, B, R, D, M, z, Z, r),
          slideFocus: ae,
          slidesHandler: HP(t, a, _),
          slidesInView: oe,
          slideIndexes: X,
          slideRegistry: ie,
          slidesToScroll: L,
          target: Q,
          translate: LP(C, t)
        };
        return se
      }
      const VP = {
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

      function FP(e) {
        function t(e, t) {
          return SP(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = PP(n).filter((t => e.matchMedia(t).matches)).map((e => n[e])).reduce(((e, r) => t(e, r)), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map((e => PP(e.breakpoints || {}))).reduce(((e, t) => e.concat(t)), []).map(e.matchMedia)
          }
        };
        return r
      }

      function zP(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          i = FP(o),
          a = function(e) {
            let t = [];
            const r = {
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
            };
            return r
          }(i),
          s = OP(),
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
            mergeOptions: u,
            optionsAtMedia: c,
            optionsMediaQueries: d
          } = i,
          {
            on: f,
            off: h,
            emit: p
          } = l,
          m = C;
        let v, y, g, b, _ = !1,
          w = u(VP, zP.globalOptions),
          E = u(w),
          x = [];

        function P(t) {
          const r = BP(e, g, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? P(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function S(t, r) {
          _ || (w = u(w, t), E = c(w), x = r || x, function() {
            const {
              container: t,
              slides: r
            } = E, n = hP(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = hP(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), v = P(E), d([w, ...x.map((({
            options: e
          }) => e))]).forEach((e => s.add(e, "change", C))), E.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(j), v.eventHandler.init(j), v.resizeHandler.init(j), v.slidesHandler.init(j), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(j), y = a.init(j, x)))
        }

        function C(e, t) {
          const r = N();
          O(), S(u({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function O() {
          v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), a.destroy(), s.clear()
        }

        function T(e, t, r) {
          E.active && !_ && (v.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : E.duration), v.scrollTo.index(e, r || 0))
        }

        function N() {
          return v.index.get()
        }
        const j = {
          canScrollNext: function() {
            return v.index.add(1).get() !== N()
          },
          canScrollPrev: function() {
            return v.index.add(-1).get() !== N()
          },
          containerNode: function() {
            return g
          },
          internalEngine: function() {
            return v
          },
          destroy: function() {
            _ || (_ = !0, s.clear(), O(), l.emit("destroy"), l.clear())
          },
          off: h,
          on: f,
          emit: p,
          plugins: function() {
            return y
          },
          previousScrollSnap: function() {
            return v.indexPrevious.get()
          },
          reInit: m,
          rootNode: function() {
            return e
          },
          scrollNext: function(e) {
            T(v.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            T(v.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return v.scrollProgress.get(v.offsetLocation.get())
          },
          scrollSnapList: function() {
            return v.scrollSnapList
          },
          scrollTo: T,
          selectedScrollSnap: N,
          slideNodes: function() {
            return b
          },
          slidesInView: function() {
            return v.slidesInView.get()
          },
          slidesNotInView: function() {
            return v.slidesInView.get(!1)
          }
        };
        return S(t, r), setTimeout((() => l.emit("init")), 0), j
      }

      function qP(e = {}, t = []) {
        const r = (0, g.useRef)(e),
          n = (0, g.useRef)(t),
          [o, i] = (0, g.useState)(),
          [a, s] = (0, g.useState)(),
          l = (0, g.useCallback)((() => {
            o && o.reInit(r.current, n.current)
          }), [o]);
        return (0, g.useEffect)((() => {
          cP(r.current, e) || (r.current = e, l())
        }), [e, l]), (0, g.useEffect)((() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = dP(e),
              n = dP(t);
            return r.every(((e, t) => cP(e, n[t])))
          })(n.current, t) || (n.current = t, l())
        }), [t, l]), (0, g.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            zP.globalOptions = qP.globalOptions;
            const e = zP(a, r.current, n.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }), [a, i]), [s, o]
      }

      function UP(e = {}) {
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
      zP.globalOptions = void 0, qP.globalOptions = void 0, UP.globalOptions = void 0;
      const GP = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function XP(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function WP(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function KP(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function $P(e = {}) {
        let t, r, n, o, i = [],
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
          ("pointerDown" === t ? KP : WP)(n, c.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map((e => o[e])),
            i = e.map((e => o[e]));
          return n.forEach((e => WP(e, r))), i.forEach((e => KP(e, r))), e
        }

        function h() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          i = f(t, i, c.snapped)
        }

        function p() {
          const e = r.slidesInView();
          a = f(e, a, c.inView)
        }
        const m = {
          name: "classNames",
          options: e,
          init: function(i, a) {
            r = i;
            const {
              mergeOptions: f,
              optionsAtMedia: m
            } = a, v = f(GP, $P.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, _ = !!g;
            t.loop && b && (c.loop = XP(t.loop), KP(n, c.loop)), t.draggable && _ && (c.draggable = XP(t.draggable), KP(n, c.draggable)), t.dragging && (c.dragging = XP(t.dragging), l.forEach((e => r.on(e, d)))), t.snapped && (c.snapped = XP(t.snapped), s.forEach((e => r.on(e, h))), h()), t.inView && (c.inView = XP(t.inView), u.forEach((e => r.on(e, p))), p())
          },
          destroy: function() {
            l.forEach((e => r.off(e, d))), s.forEach((e => r.off(e, h))), u.forEach((e => r.off(e, p))), WP(n, c.loop), WP(n, c.draggable), WP(n, c.dragging), f([], i, c.snapped), f([], a, c.inView), Object.keys(c).forEach((e => {
              c[e] = []
            }))
          }
        };
        return m
      }
      $P.globalOptions = void 0;
      var YP = r(46106),
        ZP = r.t(YP, 2);

      function QP(e) {
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

      function JP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function eS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? JP(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = QP(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : JP(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function tS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var rS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        nS = "foundry_qmpv6yt",
        oS = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = eS(eS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) rS(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return tS(e.variantClassNames, (e => tS(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_qmpv6y6",
          variantClassNames: {
            status: {
              danger: "foundry_qmpv6y7",
              information: "foundry_qmpv6y8",
              success: "foundry_qmpv6y9",
              warning: "foundry_qmpv6ya"
            },
            background: {
              static: "foundry_qmpv6yb",
              "two-tone": "foundry_qmpv6yc",
              neutral: "foundry_qmpv6yd"
            },
            align: {
              left: "foundry_qmpv6ye",
              center: "foundry_qmpv6yf"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              status: "danger",
              background: "static"
            }, "foundry_qmpv6yg"],
            [{
              status: "information",
              background: "static"
            }, "foundry_qmpv6yh"],
            [{
              status: "warning",
              background: "static"
            }, "foundry_qmpv6yi"],
            [{
              status: "success",
              background: "static"
            }, "foundry_qmpv6yj"]
          ]
        });
      const iS = (0, g.createContext)(null);

      function aS() {
        const e = (0, g.useContext)(iS);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const sS = (0, g.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: i,
          align: a = "left",
          ...s
        }, l) => {
          const u = (({
              loopPagination: e = !0
            }) => {
              const t = (0, Me.rl)(),
                r = (0, Me.jt)(),
                [n, o] = (0, g.useState)([]),
                i = n.length,
                [a, s] = (0, g.useState)(0),
                [l, u] = qP({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [UP(), $P()]),
                c = (0, g.useRef)(0),
                d = (0, g.useRef)(!1),
                f = n[a],
                h = (0, g.useCallback)((e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach(((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  })), s(t), d.current = !0
                }), [u]),
                p = (0, g.useCallback)((e => {
                  c.current = .94 * e.scrollSnapList().length
                }), []),
                m = (0, g.useCallback)(((e, t) => {
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
                      const l = (u = 1 - Math.abs(s * c.current), Math.min(Math.max(u, 0), 1)).toString();
                      var u;
                      e.slideNodes()[a].style.opacity = l
                    }))
                  }))
                }), []);
              return (0, g.useEffect)((() => {
                u && (p(u), m(u), u.on("reInit", p).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }), [u, m]), (0, g.useEffect)((() => {
                u && (h(u), u.on("select", h).on("reInit", h))
              }), [u, h]), {
                setAlerts: o,
                alerts: n,
                numAlerts: i,
                emblaRef: l,
                prevAlert: () => u?.scrollPrev(r),
                nextAlert: () => u?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: a,
                setCurrentAlertIndex: s,
                isInitialized: d.current,
                loopPagination: e,
                canScrollNext: () => u?.canScrollNext() || !1,
                canScrollPrev: () => u?.canScrollPrev() || !1
              }
            })({
              loopPagination: n
            }),
            {
              currentAlert: c,
              isInitialized: d,
              setAlerts: f,
              numAlerts: h
            } = u;
          (0, g.useEffect)((() => {
            o && i && f([{
              status: o,
              background: i,
              align: a
            }])
          }), []);
          const p = h > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            m = (0, y.v6)({
              className: oS(c)
            }, p, s),
            b = e ? w.DX : "div";
          return (0, v.jsx)(iS.Provider, {
            value: u,
            children: (0, v.jsx)(b, {
              ref: l,
              "data-testid": r,
              "data-initialized": d,
              ...m,
              children: t
            })
          })
        })),
        lS = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        uS = (0, g.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = aS();
          if (!e && !n || !n?.status) return null;
          const o = e || lS[n.status],
            i = ZP[o],
            a = (0, y.v6)({
              className: "foundry_qmpv6yn"
            }, t);
          return (0, v.jsx)(i, {
            label: "",
            ref: r,
            size: "LG",
            "data-icon": !0,
            ...a
          })
        })),
        cS = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? w.DX : "div",
            i = (0, y.v6)({
              className: "foundry_qmpv6yo foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy"
            }, r);
          return (0, v.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        })),
        dS = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...i
        }, a) => {
          const s = e ? w.DX : "div",
            l = (0, y.v6)({
              className: "foundry_qmpv6yk"
            }, i);
          return (0, v.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...l
          })
        })),
        fS = (0, g.forwardRef)((({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = aS(), a = (0, y.v6)({
            className: "foundry_qmpv6yl"
          }, r), s = (0, Me.UP)(i, n), l = g.Children.map(t, (e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          }));
          return (0, g.useEffect)((() => {
            l && o(l)
          }), []), (0, v.jsx)("div", {
            ref: s,
            "data-testid": e,
            ...a,
            children: (0, v.jsx)("div", {
              className: "foundry_qmpv6ym",
              children: t
            })
          })
        })),
        hS = (0, g.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, g.useRef)(null),
            a = (0, Me.UP)(i, o),
            s = e ? w.DX : "a",
            {
              linkProps: l,
              isPressed: u
            } = Bx(n, i),
            c = (0, y.v6)({
              className: "foundry_qmpv6yp foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy foundry_tdsdcd12 foundry_1d5mo5m0"
            }, n);
          return (0, v.jsx)(s, {
            "data-pressed": u,
            "data-testid": r,
            ref: a,
            ...l,
            ...c,
            children: t
          })
        })),
        pS = (0, g.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const n = (0, y.v6)({
            className: "foundry_qmpv6yq"
          }, t);
          return (0, v.jsx)(md, {
            ref: r,
            "data-close-btn": !0,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            ...n
          })
        })),
        mS = (0, g.forwardRef)((({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const i = e ? w.DX : "div",
            a = (0, y.v6)({
              className: "foundry_qmpv6ys"
            }, n);
          return (0, v.jsx)(i, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...a,
            children: r
          })
        })),
        vS = (0, g.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = aS(), i = (0, y.v6)({
            className: nS
          }, t);
          return (0, v.jsx)(md, {
            ref: r,
            size: "SM",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...i
          })
        })),
        yS = (0, g.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = aS(), i = (0, y.v6)({
            className: nS
          }, t);
          return (0, v.jsx)(md, {
            ref: r,
            size: "SM",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...i
          })
        })),
        gS = (0, g.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = aS(), i = (0, y.v6)({
            className: "foundry_qmpv6yr foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy foundry_tdsdcd11"
          }, t);
          return (0, v.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...i,
            children: [n + 1, "/", o]
          })
        }));
      var bS = r(54423),
        _S = r.t(bS, 2);

      function wS(e) {
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

      function xS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ES(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = wS(o)) in n ? Object.defineProperty(n, o, {
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

      function PS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var SS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        CS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = xS(xS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) SS(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return PS(e.variantClassNames, (e => PS(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        OS = CS({
          defaultClassName: "foundry_oahh5813",
          variantClassNames: {
            background: {
              static: "foundry_oahh5814",
              "two-tone": "foundry_oahh5815",
              none: "foundry_oahh5816"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        TS = CS({
          defaultClassName: "foundry_oahh583",
          variantClassNames: {
            size: {
              MD: "foundry_oahh584",
              LG: "foundry_oahh585"
            },
            hasBorder: {
              true: "foundry_oahh586",
              false: "foundry_oahh587"
            },
            background: {
              static: "foundry_oahh588",
              "two-tone": "foundry_oahh589",
              none: "foundry_oahh58a"
            },
            color: {
              monochrome: "foundry_oahh58b",
              blue: "foundry_oahh58c",
              green: "foundry_oahh58d",
              grey: "foundry_oahh58e",
              red: "foundry_oahh58f",
              seafoam: "foundry_oahh58g",
              yellow: "foundry_oahh58h"
            },
            isDisabled: {
              true: "foundry_oahh58i",
              false: "foundry_oahh58j"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              background: "static",
              color: "monochrome"
            }, "foundry_oahh58k"],
            [{
              background: "static",
              color: "blue"
            }, "foundry_oahh58l"],
            [{
              background: "static",
              color: "green"
            }, "foundry_oahh58m"],
            [{
              background: "static",
              color: "grey"
            }, "foundry_oahh58n"],
            [{
              background: "static",
              color: "red"
            }, "foundry_oahh58o"],
            [{
              background: "static",
              color: "seafoam"
            }, "foundry_oahh58p"],
            [{
              background: "static",
              color: "yellow"
            }, "foundry_oahh58q"],
            [{
              background: "two-tone",
              color: "monochrome"
            }, "foundry_oahh58r"],
            [{
              background: "two-tone",
              color: "blue"
            }, "foundry_oahh58s"],
            [{
              background: "two-tone",
              color: "green"
            }, "foundry_oahh58t"],
            [{
              background: "two-tone",
              color: "grey"
            }, "foundry_oahh58u"],
            [{
              background: "two-tone",
              color: "red"
            }, "foundry_oahh58v"],
            [{
              background: "two-tone",
              color: "seafoam"
            }, "foundry_oahh58w"],
            [{
              background: "two-tone",
              color: "yellow"
            }, "foundry_oahh58x"],
            [{
              hasBorder: !1,
              background: "none",
              isDisabled: !1
            }, "foundry_oahh58y"]
          ]
        }),
        NS = CS({
          defaultClassName: "foundry_oahh58z",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy foundry_tdsdcd11",
              LG: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdw foundry_tdsdcd11"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const jS = (0, g.createContext)(null);

      function IS() {
        const e = (0, g.useContext)(jS);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const RS = (0, g.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: i,
          hasBorder: a,
          isDisabled: s,
          ...l
        }, u) => {
          const c = {
              size: n,
              background: o,
              color: i,
              hasBorder: a,
              isDisabled: s
            },
            d = (0, y.v6)({
              className: TS(c)
            }, l),
            f = e ? w.DX : "div";
          return (0, v.jsx)(jS.Provider, {
            value: c,
            children: (0, v.jsx)(f, {
              ref: u,
              "data-testid": r,
              "aria-disabled": s,
              ...d,
              children: t
            })
          })
        })),
        DS = (0, g.forwardRef)((({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: i
          } = IS(), a = e ? w.DX : "div", s = (0, y.v6)({
            className: NS({
              size: i
            })
          }, n);
          return (0, v.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        })),
        kS = (0, g.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const n = _S[e],
            o = (0, y.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, v.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        })),
        AS = (0, g.forwardRef)((({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = IS(), i = (0, y.v6)({
            className: OS({
              background: n
            })
          }, t);
          return (0, v.jsx)(md, {
            ref: r,
            "data-testid": e,
            "data-close-btn": !0,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            isDisabled: o,
            ...i
          })
        }));
      var LS = r(25757),
        MS = r.t(LS, 2);

      function HS(e) {
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

      function BS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function VS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? BS(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = HS(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : BS(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function FS(e, t) {
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
        qS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = VS(VS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) zS(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return FS(e.variantClassNames, (e => FS(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        US = qS({
          defaultClassName: "foundry_m1icrx6 foundry_1d5mo5m0",
          variantClassNames: {
            size: {
              MD: "foundry_m1icrx7 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx foundry_tdsdcd11",
              LG: "foundry_m1icrx8 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdw foundry_tdsdcd11"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        GS = qS({
          defaultClassName: "foundry_m1icrx3",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx foundry_tdsdcd11",
              LG: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdw foundry_tdsdcd11"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        XS = qS({
          defaultClassName: "foundry_m1icrx0",
          variantClassNames: {
            size: {
              MD: "foundry_m1icrx1",
              LG: "foundry_m1icrx2"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function WS() {
        const e = (0, g.useContext)(KS);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const KS = (0, g.createContext)(null),
        $S = (0, g.forwardRef)((({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, i) => {
          const a = (0, y.v6)({
              className: XS({
                size: n
              })
            }, o),
            s = r ? w.DX : "ol";
          return (0, v.jsx)(KS.Provider, {
            value: {
              size: n
            },
            children: (0, v.jsx)(s, {
              ref: i,
              "data-testid": t,
              ...a,
              children: e
            })
          })
        })),
        YS = (0, g.forwardRef)((({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, i) => {
          const a = (0, g.useRef)(null),
            {
              size: s
            } = WS(),
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
              } = Bx({
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
            u = r ? w.DX : "a",
            c = (0, y.v6)({
              className: (0, pt.clsx)(US({
                size: s
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, v.jsx)("li", {
            className: GS({
              size: s
            }),
            ref: i,
            children: (0, v.jsx)(u, {
              ref: a,
              ...c,
              children: t
            })
          })
        })),
        ZS = (0, g.forwardRef)((({
          icon: e,
          ...t
        }, r) => {
          const n = MS[e];
          return (0, v.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        })),
        QS = (0, g.forwardRef)((({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, i) => {
          const [a, s] = (0, g.useState)(r), {
            size: l
          } = WS(), u = (0, y.v6)({
            className: GS({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, v.jsx)("li", {
            ref: i,
            ...u,
            children: (0, v.jsxs)(fb, {
              open: a,
              onOpenChange: () => s(!a),
              children: [(0, v.jsx)(hb, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcd11",
                "aria-label": n,
                children: "..."
              }), (0, v.jsx)(vb, {
                children: (0, v.jsx)(yb, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, v.jsx)(gb, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        })),
        JS = (0, g.forwardRef)((({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const i = t ? w.DX : bb,
            a = (0, y.v6)({
              className: "foundry_m1icrxd foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcd10",
              "data-testid": r
            }, n);
          return (0, v.jsx)(i, {
            ref: o,
            ...a,
            children: e
          })
        }))
    },
    88335: (e, t, r) => {
      e.exports = r(16859)
    }
  }
]);